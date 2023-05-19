import{s as d,L as w,a as l,r as g,J as $,b as e,d as S,j as r,u as D,K as N,M as j,i as G,N as E,F as v,G as W}from"./index-ec194f5f.js";import{u as T,H as C}from"./Header-4232e664.js";import{S as I}from"./Sidebar-208a7f4a.js";import{T as U,a as b}from"./Tabs-4a8986d0.js";const A=d.main`
  display: flex;
`,B=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-grow: 1;
  overflow-x: auto;
`;d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;const F=d.table`
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
  border-collapse: collapse;
  th,
  td {
    text-align: left;
  }
`,H=d(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,O=d.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,z=d.table`
  width: 90%;
  border-collapse: collapse;
  th,
  td {
    text-align: left;
    padding: 8px;
  }

  th:nth-child(1),
  td:nth-child(1) {
    width: 40%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 40%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 20%;
  }
`,M=d(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,P=()=>{const h=T(),m=l(t=>t.Ligue1.table),u=l(t=>t.Ligue1.topScorers),s=l(t=>t.Ligue1.topScorersStatus);l(t=>t.Ligue1.topScorersError),g.useEffect(()=>{s==="idle"&&h($())},[s,h]);const p=t=>{for(const i of m)if(i.team.shortName===t)return i.team.crest;return""},f=t=>{for(const i of m)if(i.team.shortName===t)return i.team.id;return""};return s==="loading"?e(S,{}):e(O,{children:r(z,{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Player"}),e("th",{children:"Team"}),e("th",{children:"Goals"})]})}),e("tbody",{children:u.map(t=>r("tr",{children:[e("td",{children:e(M,{to:`/player/${t.id}`,children:t.name})}),r("td",{children:[e("img",{src:p(t.team),width:30}),e(M,{to:`/team/${f(t.team)}`,children:t.team})]}),e("td",{children:t.goals})]},t.id))})]})})};d.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;d.table`
  width: 80%;
  border-collapse: collapse;
  td,
  th {
    text-align: left;
    padding: 8px;
  }
`;d(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`;const R=d.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  gap: 20px;
`,V=d.div`
  width: 100%;
`,J=d.table`
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
`,k=d(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,K=()=>{const h=T(),m=l(a=>a.Ligue1.table),u=l(a=>a.Ligue1.upcomingMatches),s=l(a=>a.Ligue1.upcomingMatchesStatus),p=D();g.useEffect(()=>{s==="idle"&&h(N())},[h,s]);const f=a=>{for(const n of m)if(n.team.shortName===a)return n.team.id;return""},t=a=>{for(const n of m)if(n.team.shortName===a)return n.team.crest;return""},i=a=>{const n=new Date(a),y={hour:"2-digit",minute:"2-digit"};return n.toLocaleTimeString(void 0,y)},o=g.useMemo(()=>{const a={};for(const n of u){const x=new Date(n.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});a[x]||(a[x]=[]),a[x].push(n)}return a},[u]);return s==="loading"?e(S,{}):e(R,{children:Object.keys(o).map(a=>r(V,{children:[e("h3",{children:a}),r(J,{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Hometeam"}),e("th",{children:"Time"}),e("th",{children:"Awayteam"})]})}),e("tbody",{children:o[a].map((n,y)=>r("tr",{onClick:x=>{x.target.tagName.toLowerCase()!=="a"&&p(`/match/${n.id}`)},children:[r("td",{className:"homeTeam",children:[e("img",{src:t(n.home_team),width:30}),e(k,{to:`/team/${f(n.home_team)}`,children:n.home_team})]}),e("td",{className:"time",children:i(n.kickoff_time)}),r("td",{className:"awayTeam",children:[e("img",{src:t(n.away_team),width:30}),e(k,{to:`/team/${f(n.away_team)}`,children:n.away_team})]})]},y))})]})]},a))})},q=d.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  gap: 20px;
`,Q=d.div`
  width: 100%;
`,X=d.table`
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
`,_=d(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,Y=()=>{const h=T(),m=l(i=>i.Ligue1.table),u=l(i=>i.Ligue1.latestMatches),s=l(i=>i.Ligue1.latestMatchesStatus);g.useEffect(()=>{s==="idle"&&h(j())},[h,s]);const p=i=>{for(const o of m)if(o.team.shortName===i)return o.team.crest;return""},f=i=>{for(const o of m)if(o.team.shortName===i)return o.team.id;return""},t=g.useMemo(()=>{const i={};for(const o of u){const n=new Date(o.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});i[n]||(i[n]=[]),i[n].push(o)}return i},[u]);return s==="loading"?e(S,{}):e(q,{children:Object.keys(t).map(i=>r(Q,{children:[e("h3",{children:i}),r(X,{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Hometeam"}),e("th",{}),e("th",{}),e("th",{}),e("th",{children:"Awayteam"})]})}),e("tbody",{children:t[i].map((o,a)=>r("tr",{onClick:n=>{n.target.tagName.toLowerCase()!=="a"&&navigate(`/match/${o.id}`)},children:[r("td",{children:[e("img",{src:p(o.home_team),width:30}),e(_,{to:`/team/${f(o.home_team)}`,children:o.home_team})]}),e("td",{children:o.home_team_score}),e("td",{children:"-"}),e("td",{children:o.away_team_score}),r("td",{children:[e("img",{src:p(o.away_team),width:30}),e(_,{to:`/team/${f(o.away_team)}`,children:o.away_team})]})]},a))})]})]},i))})},ne=()=>{const h=T(),m=l(c=>c.Ligue1.table),u=l(c=>c.Ligue1.tableStatus),[s,p]=g.useState("table"),[f,t]=g.useState(!1),[i,o]=g.useState(window.innerWidth<768),a=g.useRef(),n=G();g.useEffect(()=>{u==="idle"&&h(E())},[u,h]),g.useEffect(()=>{t(!1)},[n]);const y=c=>{for(const L of m)if(L.team.name===c)return L.team.id;return""},x=()=>{t(!f)};return r(v,{children:[e(W,{}),e(C,{toggleSidebar:x,isMobile:i,isOpen:f}),r(A,{children:[e(I,{isOpen:f,toggleSidebar:x,setIsMobile:o,hamburgerMenuRef:a}),r(B,{children:[u==="loading"?e(S,{}):r(v,{children:[r(U,{value:s,onChange:(c,L)=>p(L),children:[e(b,{label:"Table",value:"table"}),e(b,{label:"Top scorers",value:"topscorers"}),e(b,{label:"Upcomming matches",value:"upcommingmatches"}),e(b,{label:"Latest Matches",value:"latestmatches"})]}),s==="table"&&r(F,{children:[e("thead",{children:r("tr",{children:[e("th",{}),e("th",{children:"Team"}),e("th",{}),e("th",{children:"MP"}),e("th",{children:"W"}),e("th",{children:"D"}),e("th",{children:"L"}),e("th",{children:"GF"}),e("th",{children:"GA"}),e("th",{children:"GD"}),e("th",{children:"Points"})]})}),e("tbody",{children:m.map(c=>r("tr",{children:[e("th",{children:c.position}),e("img",{style:{width:"30px",marginTop:"12px"},src:c.team.crest,alt:c.team.name}),e("td",{children:e(H,{to:`/team/${y(c.team.name)}`,children:c.team.name})}),e("td",{children:c.playedGames}),e("td",{children:c.won}),e("td",{children:c.draw}),e("td",{children:c.lost}),e("td",{children:c.goalsFor}),e("td",{children:c.goalsAgainst}),e("td",{children:c.goalDifference}),e("td",{children:c.points})]},c.position))})]})]}),s==="topscorers"&&e(P,{}),s==="upcommingmatches"&&e(K,{}),s==="latestmatches"&&e(Y,{})]})]})]})};export{ne as default};
