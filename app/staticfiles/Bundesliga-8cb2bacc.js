import{s as l,L as b,a as p,r as f,D as $,b as e,d as B,j as i,u as _,E as D,H as N,i as G,I as j,F as v,G as E}from"./index-ec194f5f.js";import{u as T,H as I}from"./Header-4232e664.js";import{S as W}from"./Sidebar-208a7f4a.js";import{T as C,a as S}from"./Tabs-4a8986d0.js";const H=l.main`
  display: flex;
`,U=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-grow: 1;
  overflow-x: auto;
`;l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;const A=l.table`
  width: 70%;
  th,
  td {
    text-align: left;
    border-collapse: collapse;
  }
`,F=l(b)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,O=l.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  height: 100%;
  width: 100%;
`,z=l.table`
  width: 90%;
  border-collapse: collapse;
  th,
  td {
    text-align: left;
    padding: 8px;
  }
`,L=l(b)`
  text-decoration: none;
  color: #fafafa;
  cursor: pointer;
`,P=()=>{const m=T(),g=p(a=>a.Bundesliga.topScorers),d=p(a=>a.Bundesliga.topScorersStatus),s=p(a=>a.Bundesliga.table);f.useEffect(()=>{d==="idle"&&m($())},[d,m]);const y=a=>{for(const c of s)if(c.team.shortName===a)return c.team.crest;return""},u=a=>{for(const c of s)if(c.team.shortName===a)return c.team.id};return d==="loading"?e(B,{}):e(O,{children:i(z,{children:[e("thead",{children:i("tr",{children:[e("td",{children:"Player"}),e("td",{children:"Team"}),e("td",{children:"Goal"})]})}),e("tbody",{children:g.map(a=>i("tr",{children:[e("td",{children:e(L,{to:`/player/${a.id}`,children:a.name})}),i("td",{children:[e("img",{src:y(a.team),width:30}),e(L,{to:`/team/${u(a.team)}`,children:a.team})]}),e("td",{children:a.goals})]},a.id))})]})})};l.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  height: 100%;
  width: 100%;
`;l.table`
  width: 80%;
  border-collapse: collapse;
  th,
  td {
    text-align: left;
    padding: 8px;
  }
`;l(b)`
  text-decoration: none;
  color: #fafafa;
  cursor: pointer;
`;const R=l.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  gap: 20px;
`,V=l.div`
  width: 100%;
`,q=l.table`
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
`,M=l(b)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,J=()=>{const m=T(),g=p(t=>t.Bundesliga.upcomingMatches),d=p(t=>t.Bundesliga.upcomingMatchesStatus),s=p(t=>t.Bundesliga.table),y=_();f.useEffect(()=>{d==="idle"&&m(D())},[d,m]);const u=t=>{for(const n of s)if(n.team.name===t)return n.team.crest;return""},a=t=>{for(const n of s)if(n.team.name===t)return n.team.id;return""},c=t=>{const n=new Date(t),h={hour:"2-digit",minute:"2-digit"};return n.toLocaleTimeString(void 0,h)},o=f.useMemo(()=>{const t={};for(const n of g){const x=new Date(n.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});t[x]||(t[x]=[]),t[x].push(n)}return t},[g]);return d==="loading"?e(B,{}):e(R,{children:Object.keys(o).map(t=>i(V,{children:[e("h3",{children:t}),i(q,{children:[e("thead",{children:i("tr",{children:[e("th",{children:"Hometeam"}),e("th",{children:"Time"}),e("th",{children:"Awayteam"})]})}),e("tbody",{children:o[t].map((n,h)=>i("tr",{onClick:x=>{x.target.tagName!=="a"&&y(`/match/${n.id}`)},children:[i("td",{className:"homeTeam",children:[e("img",{src:u(n.home_team),width:30,alt:"home team logo"}),e(M,{to:`/team/${a(n.home_team)}`,children:n.home_team})]}),e("td",{className:"time",children:c(n.kickoff_time)}),i("td",{className:"awayTeam",children:[e("img",{src:u(n.away_team),width:30,alt:"away team logo"}),e(M,{to:`/team/${a(n.away_team)}`,children:n.away_team})]})]},h))})]})]},t))})},K=l.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  gap: 20px;
`,Q=l.div`
  width: 100%;
`,X=l.table`
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
`,k=l(b)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,Y=()=>{const m=T(),g=p(o=>o.Bundesliga.latestMatches),d=p(o=>o.Bundesliga.latestMatchesStatus),s=p(o=>o.Bundesliga.table),y=_();f.useEffect(()=>{d==="idle"&&m(N())},[d,m]);const u=o=>{for(const t of s)if(t.team.shortName===o)return t.team.crest;return""},a=o=>{for(const t of s)if(t.team.shortName===o)return t.team.id;return""},c=f.useMemo(()=>{const o={};for(const t of g){const h=new Date(t.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});o[h]||(o[h]=[]),o[h].push(t)}return o},[g]);return d==="loading"?e(B,{}):e(K,{children:Object.keys(c).map(o=>i(Q,{children:[e("h3",{children:o}),i(X,{children:[e("thead",{children:i("tr",{children:[e("th",{children:"Hometeam"}),e("th",{}),e("th",{}),e("th",{}),e("th",{children:"Awayteam"})]})}),e("tbody",{children:c[o].map((t,n)=>i("tr",{onClick:h=>{h.target.tagName.toLowerCase()!=="a"&&y(`/match/${t.id}`)},children:[i("td",{children:[e("img",{src:u(t.home_team),width:30}),e(k,{to:`/team/${a(t.home_team)}`,children:t.home_team})]}),e("td",{children:t.home_team_score}),e("td",{children:"-"}),e("td",{children:t.away_team_score}),i("td",{children:[e("img",{src:u(t.away_team),width:30}),e(k,{to:`/team/${a(t.away_team)}`,children:t.away_team})]})]},n))})]})]},o))})},ne=()=>{const m=T(),g=p(r=>r.Bundesliga.table),d=p(r=>r.Bundesliga.tableStatus),[s,y]=f.useState("table"),[u,a]=f.useState(!1),[c,o]=f.useState(window.innerWidth<768),t=f.useRef(),n=G();f.useEffect(()=>{d==="idle"&&m(j())},[d,m]),f.useEffect(()=>{a(!1)},[n]);const h=r=>{for(const w of g)if(w.team.name===r)return w.team.id;return""},x=()=>{a(!u)};return i(v,{children:[e(E,{}),e(I,{toggleSidebar:x,isMobile:c,isOpen:u}),i(H,{children:[e(W,{isOpen:u,toggleSidebar:x,setIsMobile:o,hamburgerMenuRef:t}),i(U,{children:[d==="loading"?e(B,{}):i(v,{children:[i(C,{value:s,onChange:(r,w)=>y(w),children:[e(S,{label:"Table",value:"table"}),e(S,{label:"Top scorers",value:"topscorers"}),e(S,{label:"Upcomming Matches",value:"upcommingmatches"}),e(S,{label:"Latest Matches",value:"latestmatches"})]}),s==="table"&&i(A,{children:[e("thead",{children:i("tr",{children:[e("th",{style:{padding:"5px"}}),e("th",{children:"Team"}),e("th",{}),e("th",{children:"MP"}),e("th",{children:"W"}),e("th",{children:"D"}),e("th",{children:"L"}),e("th",{children:"GF"}),e("th",{children:"GA"}),e("th",{children:"GD"}),e("th",{children:"P"})]})}),e("tbody",{children:g.map(r=>(console.log(g),i("tr",{children:[e("th",{children:r.position}),e("img",{style:{width:"30px",marginTop:"12px"},src:r.team.crest,alt:r.team.name}),e("td",{children:e(F,{to:`/team/${h(r.team.name)}`,children:r.team.name})}),e("td",{children:r.playedGames}),e("td",{children:r.won}),e("td",{children:r.draw}),e("td",{children:r.lost}),e("td",{children:r.goalsFor}),e("td",{children:r.goalsAgainst}),e("td",{children:r.goalDifference}),e("td",{children:r.points})]},r.position)))})]})]}),s==="topscorers"&&e(P,{}),s==="upcommingmatches"&&e(J,{}),s==="latestmatches"&&e(Y,{})]})]})]})};export{ne as default};
