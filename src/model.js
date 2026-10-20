import { cloneSeed } from "./data.js";
export const STORAGE_KEY = "dock-demo-v1";
const validHttpsUrl = (value) => {
 try { const url = new URL(value); return url.protocol === "https:" && Boolean(url.hostname); }
 catch { return false; }
};
const validId = (v) => typeof v === "string" && /^[a-z0-9-]{1,60}$/.test(v);
export function freshState(){return {hubs:cloneSeed(),drops:[],events:[]};}
export function normalizeState(value){
 if(!value || typeof value!=="object" || !Array.isArray(value.hubs) || !Array.isArray(value.drops)) return freshState();
 const hubs=value.hubs.filter(h=>validId(h?.id)&&typeof h.title==="string"&&Array.isArray(h.items)).map(h=>({
  ...h,
  items:h.items.filter(i=>validId(i?.id)&&typeof i.title==="string").map(i=>({
   ...i, url:typeof i.url==="string"&&validHttpsUrl(i.url)?i.url:""
  }))
 }));
 const keys=new Set(hubs.flatMap(h=>h.items.map(i=>h.id+":"+i.id)));
 const drops=[...new Set(value.drops.filter(k=>typeof k==="string"&&keys.has(k)))];
 const events=Array.isArray(value.events)?value.events.filter(e=>["discover","explore","dock"].includes(e?.type)&&validId(e?.hubId)).slice(-500):[];
 return {hubs,drops,events};
}
export function loadState(storage){
 try {const raw=storage.getItem(STORAGE_KEY);return raw?normalizeState(JSON.parse(raw)):freshState();}catch{return freshState();}
}
export function saveState(storage,state){
 try {storage.setItem(STORAGE_KEY,JSON.stringify(state));return true;}
 catch {return false;}
}
export const dropKey=(hubId,itemId)=>hubId+":"+itemId;
export function toggleDrop(state,hubId,itemId){
 const hub=state.hubs.find(h=>h.id===hubId);
 if(!hub?.items.some(i=>i.id===itemId)) throw new Error("Unknown information item");
 const key=dropKey(hubId,itemId),exists=state.drops.includes(key);
 return {...state,drops:exists?state.drops.filter(k=>k!==key):[...state.drops,key]};
}
export function savedItems(state){
 return state.drops.flatMap(key=>{const [hubId,itemId]=key.split(":");const hub=state.hubs.find(h=>h.id===hubId);const item=hub?.items.find(i=>i.id===itemId);return hub&&item?[{hub,item,key}]:[];});
}
export function addHub(state,{title,place,description}){
 if(!title?.trim()||title.trim().length>80) throw new Error("Hub name must be 1–80 characters");
 const id="hub-"+crypto.randomUUID().slice(0,8);
 const hub={id,title:title.trim(),place:(place||"").trim().slice(0,100),description:(description||"").trim().slice(0,300),category:"Custom hub",updatedAt:new Date().toISOString().slice(0,10),items:[]};
 return {state:{...state,hubs:[...state.hubs,hub]},hub};
}
export function addItem(state,hubId,{title,kind,description,details,url}){
 if(!title?.trim()||title.trim().length>90)throw new Error("Item title must be 1–90 characters");
 if(url && !validHttpsUrl(url.trim()))throw new Error("Links must use a valid HTTPS URL");
 const hub=state.hubs.find(h=>h.id===hubId);if(!hub)throw new Error("Unknown hub");
 const item={id:"item-"+crypto.randomUUID().slice(0,8),title:title.trim(),kind:(kind||"Information").slice(0,40),description:(description||"").trim().slice(0,250),details:(details||"").trim().slice(0,600),url:(url||"").trim()};
 return {...state,hubs:state.hubs.map(h=>h.id===hubId?{...h,updatedAt:new Date().toISOString().slice(0,10),items:[...h.items,item]}:h)};
}
export function recordEvent(state,type,hubId,itemId=""){
 if(!["discover","explore","dock"].includes(type))return state;
 return {...state,events:[...state.events,{type,hubId,itemId,at:new Date().toISOString()}].slice(-500)};
}
export function hubStats(state,hubId){return Object.fromEntries(["discover","explore","dock"].map(type=>[type,state.events.filter(e=>e.hubId===hubId&&e.type===type).length]));}
