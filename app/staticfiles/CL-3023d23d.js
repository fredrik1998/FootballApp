import{s,L as w,a as h,r as L,m as _,j as r,F as x,b as e,G as k,d as S,u as D,n as G,o as j,i as F,p as I}from"./index-d5aed2f8.js";import{u as T,H as E}from"./Header-debffeb6.js";import{S as N}from"./Sidebar-a090935f.js";import{T as A,a as b}from"./Tabs-e6e19db0.js";const W=s.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  overflow-x: hidden;
`,O=s.table`
  width: 90%;
  th,
  td {
    text-align: left;
    padding-left: 8px;
    padding: 10px;
  }
`,M=s(w)`
  text-decoration: none;
  color: #fafafa;
  cursor: pointer;
`,U=()=>{const m=T(),g=h(a=>a.championsLeague.topScorers),l=h(a=>a.championsLeague.topScorersStatus),i=h(a=>a.championsLeague.table);L.useEffect(()=>{l==="idle"&&m(_())},[l,m]);const y=a=>{for(const p in i)for(const n of i[p])if(console.log(`Comparing: ${n.team.name} === ${a}`),n.team.shortName===a)return n.team.crest;return""},f=a=>{for(const p in i)for(const n of i[p])if(n.team.shortName===a)return n.team.id;return""};return r(x,{children:[e(k,{}),l==="loading"?e(S,{}):e(W,{children:r(O,{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Player"}),e("th",{children:"Team"}),e("th",{children:"Goals"})]})}),e("tbody",{children:g.map(a=>r("tr",{children:[e("td",{children:e(M,{to:`/player/${a.id}`,children:a.name})}),r("td",{children:[e("img",{src:y(a.team),width:30}),e(M,{to:`/team/${f(a.team)}`,children:a.team})]}),e("td",{children:a.goals})]},a.id))})]})})]})},B=s.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  gap: 20px;
`,H=s.div`
  width: 100%;
`,R=s.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  tr {
    position: relative;
    cursor: pointer;
  }
  tr:hover {
    box-shadow: inset 0 0 0 9999px rgba(255, 255, 255, 0.3);
  }
  tr td {
    position: relative;
    z-index: 1;
  }
  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #000;
  }

  th {
    background-color: #f2f2f2;
  }

  td:nth-child(2),
  td:nth-child(3) {
    width: 40%;
  }
`,$=s(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,z=()=>{const m=T(),g=h(t=>t.championsLeague.upcomingMatches),l=h(t=>t.championsLeague.upcomingMatchesStatus);h(t=>t.championsLeague.upcomingMatchesError);const i=h(t=>t.championsLeague.table),y=D();L.useEffect(()=>{l==="idle"&&m(G())},[l,m]);const f=t=>{switch(t){case"QUARTER_FINALS":return"QF";case"SEMI_FINALS":return"SF";case"FINAL":return"F";default:return t}},a=t=>{for(const o in i)for(const c of i[o])if(c.team.name===t)return c.team.crest;return""},p=t=>{for(const o in i)for(const c of i[o])if(c.team.name===t)return c.team.id;return""},n={};for(const t of g){console.log("Match object:",t),console.log("Kickoff time:",t.utcDate);const c=new Date(t.utcDate).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});n[c]||(n[c]=[]),n[c].push(t)}return e(x,{children:l==="loading"?e(S,{}):e(B,{children:Object.keys(n).map(t=>r(H,{children:[e("h3",{children:t}),r(R,{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Stage"}),e("th",{children:"Hometeam"}),e("th",{children:"Awayteam"})]})}),e("tbody",{children:n[t].map((o,c)=>r("tr",{onClick:v=>{v.target.tagName.toLowerCase()!=="a"&&y(`/match/${o.id}`)},children:[e("td",{children:f(o.stage)}),r("td",{children:[e("img",{src:a(o.homeTeam.name),alt:`${o.homeTeam.name} logo`,width:"30",height:"30"}),e($,{to:`/team/${p(o.homeTeam.name)}`,children:o.homeTeam.name})]}),r("td",{children:[e("img",{src:a(o.awayTeam.name),alt:`${o.awayTeam.name} logo`,width:"30",height:"30"}),e($,{to:`/team/${p(o.awayTeam.name)}`,children:o.awayTeam.name})]})]},c))})]})]},t))})})},P=s.main`
  display: flex;
`,Q=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-grow: 1;
  overflow-x: auto;
`,V=s.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 100px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`,K=s.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,q=s.table`
  width: 100%;
  th,
  td {
    text-align: left;
    border-collapse: collapse;
    padding: 4px;
  }
`,J=s(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,X=s.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  gap: 20px;
`,Y=s.div`
  width: 100%;
`,Z=s.table`
  width: 100%;
  border-collapse: collapse;
  tr {
    position: relative;
    cursor: pointer;
  }
  tr:hover {
    box-shadow: inset 0 0 0 9999px rgba(255, 255, 255, 0.3);
  }
  tr td {
    position: relative;
    z-index: 1;
  }
  th,
  td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #000;
  }
  th {
    background-color: #f2f2f2;
  }
  td:nth-child(1),
  td:nth-child(4) {
    width: 35%;
  }
  td:nth-child(2),
  td:nth-child(5) {
    width: 15%;
  }
  td:nth-child(2) {
    text-align: right;
  }
  td:nth-child(3),
  td:nth-child(5) {
    text-align: left;
  }
`,C=s(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,ee=()=>{const m=T(),g=h(n=>n.championsLeague.latestMatches),l=h(n=>n.championsLeague.latestMatchesStatus),i=h(n=>n.championsLeague.table),y=D();L.useEffect(()=>{l==="idle"&&m(j())},[m,l]);const f=n=>{for(const t in i)for(const o of i[t])if(o.team.shortName===n)return o.team.crest;return""},a=n=>{for(const t in i)for(const o of i[t])if(o.team.shortName===n)return o.team.id;return""},p=L.useMemo(()=>{const n={};for(const t of g){const c=new Date(t.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});n[c]||(n[c]=[]),n[c].push(t)}return n},[g]);return l==="loading"?e(S,{}):e(X,{children:Object.keys(p).map(n=>r(Y,{children:[e("h3",{children:n}),r(Z,{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Hometeam"}),e("th",{}),e("th",{}),e("th",{}),e("th",{children:"Awayteam"})]})}),e("tbody",{children:p[n].map((t,o)=>r("tr",{onClick:c=>{c.target.tagName.toLowerCase()!=="a"&&y(`/match/${t.id}`)},children:[r("td",{children:[e("img",{src:f(t.home_team),width:30,alt:t.home_team}),e(C,{to:`/team/${a(t.home_team)}`,children:t.home_team})]}),e("td",{children:t.home_team_score}),e("td",{children:"-"}),e("td",{children:t.away_team_score}),r("td",{children:[e("img",{src:f(t.away_team),width:30,alt:t.away_team}),e(C,{to:`/team/${a(t.away_team)}`,children:t.away_team})]})]},o))})]})]},n))})},re=()=>{const m=T(),g=h(u=>u.championsLeague.table),l=h(u=>u.championsLeague.tableStatus),[i,y]=L.useState("table"),[f,a]=L.useState(!1),[p,n]=L.useState(window.innerWidth<768),t=L.useRef(),o=F();L.useEffect(()=>{l==="idle"&&m(I())},[g,m]),L.useEffect(()=>{a(!1)},[o]);const c=()=>{a(!f)},v=u=>u.replace(/_/g," ");return r(x,{children:[e(k,{}),e(E,{toggleSidebar:c,isMobile:p,isOpen:f}),r(P,{children:[e(N,{isOpen:f,toggleSidebar:c,setIsMobile:n,hamburgerMenuRef:t}),r(Q,{children:[l==="loading"?e(S,{}):r(x,{children:[r(A,{value:i,onChange:(u,d)=>y(d),centered:!0,children:[e(b,{label:"Table",value:"table"}),e(b,{label:"Top Scorers",value:"topScorers"}),e(b,{label:"Upcoming Matches",value:"upcommingMatches"}),e(b,{label:"Latest Matches",value:"latestmatches"})]}),i==="table"&&e(V,{children:Object.keys(g).map(u=>r(K,{children:[e("h2",{children:v(u)}),r(q,{children:[e("thead",{children:r("tr",{children:[e("th",{}),e("th",{children:"Team"}),e("th",{}),e("th",{children:"MP"}),e("th",{children:"W"}),e("th",{children:"D"}),e("th",{children:"L"}),e("th",{children:"GF"}),e("th",{children:"GA"}),e("th",{children:"GD"}),e("th",{children:"P"})]})}),e("tbody",{children:g[u].map(d=>r("tr",{children:[e("td",{children:d.position}),e("td",{children:e("img",{style:{width:"30px"},src:d.team.crest,alt:d.team.name})}),e("td",{children:e(J,{to:`/team/${d.team.id}`,children:d.team.shortName})}),e("td",{children:d.playedGames}),e("td",{children:d.won}),e("td",{children:d.draw}),e("td",{children:d.lost}),e("td",{children:d.goalsFor}),e("td",{children:d.goalsAgainst}),e("td",{children:d.goalDifference}),e("td",{children:d.points})]},d.position))})]})]},u))})]}),i==="topScorers"&&e(U,{}),i==="upcommingMatches"&&e(z,{}),i==="latestmatches"&&e(ee,{})]})]})]})};export{re as default};
