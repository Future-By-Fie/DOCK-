export const SEED_HUBS = [
 {id:"north-hall",title:"North Hall Design",category:"Trade show",place:"Design Week · Hall B",description:"Explore products, specifications and ideas from a fictional design exhibition.",updatedAt:"2026-10-18",items:[
 {id:"chair",title:"Arc Chair",kind:"Product",description:"Modular seating with replaceable components.",details:"Materials: recycled aluminium and certified timber. Available finishes: oak and charcoal.",url:"https://example.com/arc-chair"},
 {id:"light",title:"Halo Light",kind:"Product",description:"A compact architectural lighting concept.",details:"Low-profile design, modular driver and replaceable light source.",url:"https://example.com/halo-light"},
 {id:"talk",title:"Circular Design Talk",kind:"Event",description:"A conversation about extending the life of everyday objects.",details:"Demo event · Thursday 15:00 · North Hall Stage",url:"https://example.com/circular-talk"}]},
 {id:"city-museum",title:"City Museum",category:"Museum",place:"Old Town · Gallery 2",description:"Discover stories behind objects and exhibitions.",updatedAt:"2026-10-16",items:[
 {id:"exhibit",title:"The City in Motion",kind:"Exhibition",description:"An interactive look at how cities change over time.",details:"Fictional exhibition · Gallery 2",url:"https://example.com/city-in-motion"},
 {id:"guide",title:"Architecture Trail",kind:"Guide",description:"Explore notable buildings at your own pace.",details:"Self-guided walking experience · 45 minutes",url:"https://example.com/architecture-trail"}]},
 {id:"harbor-house",title:"Harbor House",category:"Property",place:"Waterfront · Entrance",description:"Useful information attached to a physical building.",updatedAt:"2026-10-12",items:[
 {id:"amenities",title:"Building Amenities",kind:"Information",description:"Shared spaces, facilities and visitor information.",details:"Demo amenities include bike parking and a shared lounge.",url:"https://example.com/amenities"}]}
];
export const cloneSeed = () => structuredClone(SEED_HUBS);
