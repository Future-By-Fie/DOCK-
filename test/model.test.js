import test from "node:test";import assert from "node:assert/strict";import {freshState,normalizeState,toggleDrop,savedItems,addHub,addItem,recordEvent,hubStats,loadState} from "../src/model.js";
test("demo hubs are present and contain content",()=>{const s=freshState();assert.ok(s.hubs.length>=3);assert.ok(s.hubs[0].items.length);});
test("docking and undocking preserve a single saved item",()=>{const s=freshState();const a=toggleDrop(s,"north-hall","chair");assert.equal(savedItems(a).length,1);assert.equal(savedItems(toggleDrop(a,"north-hall","chair")).length,0);assert.equal(s.drops.length,0);});
test("invalid items cannot be saved",()=>assert.throws(()=>toggleDrop(freshState(),"north-hall","missing")));
test("invalid stored data falls back safely",()=>{assert.ok(normalizeState({}).hubs.length);assert.ok(loadState({getItem:()=>"{broken"}).hubs.length);});
test("orphaned drops are discarded",()=>{const s=normalizeState({...freshState(),drops:["bad:bad","north-hall:chair","north-hall:chair"]});assert.deepEqual(s.drops,["north-hall:chair"]);});
test("custom hubs and items are usable",()=>{const x=addHub(freshState(),{title:"  Test Hub  ",place:"Demo"});const s=addItem(x.state,x.hub.id,{title:"A document",url:"https://example.com"});assert.equal(s.hubs.at(-1).items.length,1);assert.equal(x.hub.title,"Test Hub");});
test("rejects unsafe URL protocols and missing titles",()=>{const x=addHub(freshState(),{title:"Test"});assert.throws(()=>addItem(x.state,x.hub.id,{title:"bad",url:"javascript:alert(1)"}));assert.throws(()=>addHub(freshState(),{title:" "}));});
test("analytics counts only local demo events",()=>{let s=freshState();s=recordEvent(s,"discover","north-hall");s=recordEvent(s,"dock","north-hall","chair");assert.deepEqual(hubStats(s,"north-hall"),{discover:1,explore:0,dock:1});});

test("rejects malformed HTTPS links and unsafe stored URLs",()=>{
 const x=addHub(freshState(),{title:"Test"});
 for(const url of ["https://","https://?broken","javascript:alert(1)","http://example.com"]){
  assert.throws(()=>addItem(x.state,x.hub.id,{title:"Bad",url}));
 }
 const state=freshState();state.hubs[0].items[0].url="javascript:alert(1)";
 assert.equal(normalizeState(state).hubs[0].items[0].url,"");
});
test("storage failures do not crash the prototype",async()=>{
 const {saveState}=await import("../src/model.js");
 const broken={getItem(){throw new Error("denied")},setItem(){throw new Error("quota")}};
 assert.ok(loadState(broken).hubs.length);
 assert.equal(saveState(broken,freshState()),false);
});
