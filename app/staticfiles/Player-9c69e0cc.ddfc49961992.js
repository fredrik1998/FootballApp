import{s as l,L as b,a as f,r as d,q as F,a1 as _,j as r,F as y,b as a,G as P,d as D,y as k}from"./index-d5aed2f8.js";import{u as T,H as C}from"./Header-debffeb6.js";const E=l.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`,j=l.img`
  width: 30px;
  height: 30px;
  margin-top: 12px;
  padding-right: 5px;
`,L=l.div`
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
  color: #fafafa;
`,A=l(b)`
  text-decoration: none;
  color: #fafafa;
  font-size: 28px;
  margin-top: 15px;
  :hover {
    opacity: 25%;
  }
`,$=()=>{const h=T(),t=f(e=>e.Player.data),p=f(e=>e.Player.status);f(e=>e.Player.error);const u=d.useRef(null),{player_id:o}=F(),[x,v]=d.useState({});d.useEffect(()=>{(p==="idle"||o!==u.current)&&(u.current=o,h(_(o)))},[h,o,p]);const w=e=>{const s=new Date(e),n=new Date;let i=n.getFullYear()-s.getFullYear();const c=n.getMonth()-s.getMonth();return(c<0||c===0&&n.getDate()<s.getDate())&&i--,i},m={England:"https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png",Scotland:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1280px-Flag_of_Scotland.svg.png",Wales:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Wales.svg/1280px-Flag_of_Wales.svg.png"},S=async e=>{const s={};for(const n of e)if(m[n])s[n]=m[n];else try{const i=await k.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(n)}?fullText=true`);if(i.status===200){const c=i.data;s[n]=c[0].flags.svg}}catch(i){console.error(`Error fetching flag for ${n}:`,i)}v(s)};return d.useEffect(()=>{const e=t.nationality;S([e])},[t]),r(y,{children:[a(P,{}),a(C,{}),p==="loading"?a(D,{}):r(E,{children:[a("h1",{children:t.name}),a("div",{style:{display:"flex"},children:t.currentTeam&&r(y,{children:[a(j,{src:t.currentTeam.crest}),a(A,{to:`/team/${t.currentTeam.id}`,children:t.currentTeam.name})]})}),r("div",{style:{display:"flex",flexWrap:"wrap",gap:"30px",justifyContent:"center"},children:[r(g,{children:["Country: ",t.nationality,a(W,{src:x[t.nationality]})]}),r(g,{children:["Shirtnumber: ",t.shirtNumber]}),r(g,{children:["Position: ",t.position]}),r(g,{children:["Age: ",w(t.dateOfBirth)]})]}),r(L,{children:[a("h2",{children:"Competitions:"}),t.currentTeam&&Array.isArray(t.currentTeam.runningCompetitions)&&t.currentTeam.runningCompetitions.map(e=>r("div",{children:[a("h3",{children:e.name}),a("img",{src:e.emblem,width:100,alt:e.name})]},e.id))]})]})]})};export{$ as default};
