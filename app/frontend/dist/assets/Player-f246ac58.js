import{s as l,a as h,r as d,q as S,a1 as F,j as r,F as y,b as a,G as _,d as P,y as D}from"./index-57ff3d1b.js";import{u as k,H as C}from"./Header-22b7e31d.js";const E=l.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
`,T=l.img`
width: 30px;
height: 30px;
margin-top: 12px;
padding-right: 5px;
`,j=l.div`
display: flex;
flex-direction: column;
align-self: flex-start;
padding-left: 4em;
`,W=l.img`
width: 30px;
height: 18px;
border-radius: 2px;
`,g=l.h3`
height: 30px;
width: 125px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
border-radius: 10px;
padding: 10px;
font-size: 14px;
text-transform: uppercase;
font-weight: 700;
color: #000;
background-color: #d1c9c9;
`,U=()=>{const u=k(),t=h(e=>e.Player.data),p=h(e=>e.Player.status);h(e=>e.Player.error);const f=d.useRef(null),{player_id:o}=S(),[x,w]=d.useState({});d.useEffect(()=>{(p==="idle"||o!==f.current)&&(f.current=o,u(F(o)))},[u,o,p]);const b=e=>{const s=new Date(e),n=new Date;let i=n.getFullYear()-s.getFullYear();const c=n.getMonth()-s.getMonth();return(c<0||c===0&&n.getDate()<s.getDate())&&i--,i},m={England:"https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png",Scotland:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1280px-Flag_of_Scotland.svg.png",Wales:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Wales.svg/1280px-Flag_of_Wales.svg.png"},v=async e=>{const s={};for(const n of e)if(m[n])s[n]=m[n];else try{const i=await D.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(n)}?fullText=true`);if(i.status===200){const c=i.data;s[n]=c[0].flags.svg}}catch(i){console.error(`Error fetching flag for ${n}:`,i)}w(s)};return d.useEffect(()=>{const e=t.nationality;v([e])},[t]),r(y,{children:[a(_,{}),a(C,{}),p==="loading"?a(P,{}):r(E,{children:[a("h1",{children:t.name}),a("div",{style:{display:"flex"},children:t.currentTeam&&r(y,{children:[a(T,{src:t.currentTeam.crest}),a("h2",{children:t.currentTeam.name})]})}),r("div",{style:{display:"flex",flexWrap:"wrap",gap:"30px",justifyContent:"center"},children:[r(g,{children:["Country: ",t.nationality,a(W,{src:x[t.nationality]})]}),r(g,{children:["Shirtnumber: ",t.shirtNumber]}),r(g,{children:["Position: ",t.position]}),r(g,{children:["Age: ",b(t.dateOfBirth)]})]}),r(j,{children:[a("h2",{children:"Competitions:"}),t.currentTeam&&Array.isArray(t.currentTeam.runningCompetitions)&&t.currentTeam.runningCompetitions.map(e=>r("div",{children:[a("h3",{children:e.name}),a("img",{src:e.emblem,width:100,alt:e.name})]},e.id))]})]})]})};export{U as default};
