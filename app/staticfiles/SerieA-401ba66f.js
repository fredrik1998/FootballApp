import{s as c,L as y,a as g,r as p,z as _,b as e,F as v,d as A,j as a,u as k,A as D,B as N,i as j,C as G,G as C}from"./index-d5aed2f8.js";import{S as W}from"./Sidebar-a090935f.js";import{u as T,H as E}from"./Header-debffeb6.js";import{T as I,a as w}from"./Tabs-e6e19db0.js";const B=c.main`
  display: flex;
`,z=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-grow: 1;
  overflow-x: auto;
`,F=c.table`
  width: 80%;
  border-collapse: collapse;
  th,
  td {
    text-align: left;
  }
`,H=c(y)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,O=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,U=c.table`
  width: 90%;
  border-collapse: collapse;
  th,
  td {
    text-align: left;
    padding: 8px;
  }
`,L=c(y)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,P=()=>{const m=T(),u=g(i=>i.SerieA.topScorers),s=g(i=>i.SerieA.topScorersStatus),l=g(i=>i.SerieA.table);p.useEffect(()=>{s==="idle"&&m(_())},[m,s]);const S=i=>{for(const h of l)if(h.team.shortName===i)return h.team.id;return""},f=i=>{for(const h of l)if(h.team.shortName===i)return h.team.crest;return""};return e(v,{children:s==="loading"?e(A,{}):e(O,{children:a(U,{children:[e("thead",{children:a("tr",{children:[e("th",{children:"Player"}),e("th",{children:"Team"}),e("th",{children:"Goals"})]})}),e("tbody",{children:u.map(i=>a("tr",{children:[e("td",{children:e(L,{to:`/player/${i.id}`,children:i.name})}),a("td",{children:[e("img",{src:f(i.team),width:30,height:30}),e(L,{to:`/team/${S(i.team)}`,children:i.team})]}),e("td",{children:i.goals})]},i.id))})]})})})},R=c.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  gap: 20px;
`,V=c.div`
  width: 100%;
`,q=c.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;

  tr {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  td.homeTeam {
    flex: 1;
    text-align: left;
  }

  td.time {
    flex: 1;
    text-align: center;
  }

  td.awayTeam {
    flex: 1;
    text-align: right;
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
  }

  th {
    background-color: #f2f2f2;
    width: 100%;
  }
`,$=c(y)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,J=()=>{const m=T(),u=g(t=>t.SerieA.upcomingMatches),s=g(t=>t.SerieA.upcomingMatchesStatus),l=g(t=>t.SerieA.table),S=k();p.useEffect(()=>{s==="idle"&&m(D())},[s,m]);const f=t=>{for(const r of l)if(r.team.shortName===t)return r.team.crest;return""},i=t=>{for(const r of l)if(r.team.shortName===t)return r.team.id;return""},h=t=>{const r=new Date(t),d={hour:"2-digit",minute:"2-digit"};return r.toLocaleTimeString(void 0,d)},n=p.useMemo(()=>{const t={};for(const r of u){const x=new Date(r.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});t[x]||(t[x]=[]),t[x].push(r)}return t},[u]);return s==="loading"?e(A,{}):e(R,{children:Object.keys(n).map(t=>a(V,{children:[e("h3",{children:t}),a(q,{children:[e("thead",{children:a("tr",{children:[e("th",{children:"Hometeam"}),e("th",{children:"Time"}),e("th",{children:"AwayTeam"})]})}),e("tbody",{children:n[t].map((r,d)=>a("tr",{onClick:x=>{x.target.tagName.toLowerCase()!=="a"&&S(`/match/${r.id}`)},children:[a("td",{className:"homeTeam",children:[e("img",{src:`${f(r.home_team)}`,width:30,height:30}),e($,{to:`/team/${i(r.home_team)}`,children:r.home_team})]}),e("td",{className:"time",children:h(r.kickoff_time)}),a("td",{className:"awayTeam",children:[e("img",{src:`${f(r.away_team)}`,width:30,height:30}),e($,{to:`/team/${i(r.away_team)}`,children:r.away_team})]})]},d))})]})]},t))})},K=c.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  gap: 20px;
`,Q=c.div`
  width: 100%;
`,X=c.table`
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
    width: 40%;
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
`,M=c(y)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,Y=()=>{const m=T(),u=g(n=>n.SerieA.latestMatches),s=g(n=>n.SerieA.latestMatchesStatus),l=g(n=>n.SerieA.table),S=k();p.useEffect(()=>{s==="idle"&&m(N())},[s,m]);const f=n=>{for(const t of l)if(t.team.shortName===n)return t.team.id;return""},i=n=>{for(const t of l)if(t.team.shortName===n)return t.team.crest;return""},h=p.useMemo(()=>{const n={};for(const t of u){const d=new Date(t.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});n[d]||(n[d]=[]),n[d].push(t)}return n},[u]);return s==="loading"?e(A,{}):e(K,{children:Object.keys(h).map(n=>a(Q,{children:[e("h3",{children:n}),a(X,{children:[e("thead",{children:a("tr",{children:[e("th",{children:"Hometeam"}),e("th",{}),e("th",{}),e("th",{}),e("th",{children:"Awayteam"})]})}),e("tbody",{children:h[n].map((t,r)=>a("tr",{onClick:d=>{d.target.tagName.toLowerCase()!=="a"&&S(`/match/${t.id}`)},children:[a("td",{children:[e("img",{src:`${i(t.home_team)}`,width:30,height:30,alt:"team logo"}),e(M,{to:`/team/${f(t.home_team)}`,children:t.home_team})]}),e("td",{children:t.home_team_score}),e("td",{children:"-"}),e("td",{children:t.away_team_score}),a("td",{children:[e("img",{src:`${i(t.away_team)}`,width:30,height:30,alt:"team logo"}),e(M,{to:`/team/${f(t.away_team)}`,children:t.away_team})]})]},r))})]})]},n))})};c.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;c.table`
  width: 80%;
  border-collapse: collapse;
  td,
  th {
    text-align: left;
    padding: 8px;
  }
`;c(y)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`;const re=()=>{const m=T(),u=g(o=>o.SerieA.table),s=g(o=>o.SerieA.tableStatus),[l,S]=p.useState("table"),[f,i]=p.useState(!1),[h,n]=p.useState(window.innerWidth<768),t=p.useRef(),r=j();p.useEffect(()=>{s==="idle"&&m(G())},[s,m]);const d=()=>{i(!f)},x=o=>{for(const b of u)if(b.team.name===o)return b.team.id;return""};return p.useEffect(()=>{i(!1)},[r]),a(v,{children:[e(C,{}),e(E,{toggleSidebar:d,isMobile:h,isOpen:f}),a(B,{children:[e(W,{isOpen:f,toggleSidebar:d,setIsMobile:n,hamburgerMenuRef:t}),a(z,{children:[s==="loading"?e(A,{}):a(v,{children:[a(I,{value:l,onChange:(o,b)=>S(b),children:[e(w,{label:"Table",value:"table"}),e(w,{label:"Top scorers",value:"topscorers"}),e(w,{label:"Upcomming Matches",value:"upcommingmatches"}),e(w,{label:"Latest Matches",value:"latestmatches"})]}),l==="table"&&a(F,{children:[e("thead",{children:a("tr",{children:[e("th",{}),e("th",{children:"Team"}),e("th",{}),e("th",{children:"MP"}),e("th",{children:"W"}),e("th",{children:"D"}),e("th",{children:"L"}),e("th",{children:"GF"}),e("th",{children:"GA"}),e("th",{children:"GD"}),e("th",{children:"Points"})]})}),e("tbody",{children:u.map(o=>a("tr",{children:[e("th",{children:o.position}),e("img",{style:{width:"30px",marginTop:"12px"},src:o.team.crest,alt:o.team.name}),e("td",{children:e(H,{to:`/team/${x(o.team.name)}`,children:o.team.name})}),e("td",{children:o.playedGames}),e("td",{children:o.won}),e("td",{children:o.draw}),e("td",{children:o.lost}),e("td",{children:o.goalsFor}),e("td",{children:o.goalsAgainst}),e("td",{children:o.goalDifference}),e("td",{children:o.points})]},o.position))})]})]}),l==="topscorers"&&e(P,{}),l==="upcommingmatches"&&e(J,{}),l==="latestmatches"&&e(Y,{})]})]})]})};export{re as default};
