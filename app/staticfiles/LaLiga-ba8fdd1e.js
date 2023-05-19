import{s as d,L as y,a as p,r as g,O as $,b as t,d as S,j as r,u as D,P as N,Q as j,i as G,R as W,F as v,G as C}from"./index-ec194f5f.js";import{u as T,H as E}from"./Header-4232e664.js";import{S as I}from"./Sidebar-208a7f4a.js";import{T as O,a as b}from"./Tabs-4a8986d0.js";const U=d.main`
  display: flex;
`,A=d.div`
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
`;const B=d.table`
  width: 70%;
  th,
  td {
    text-align: left;
    padding: 2px;
    border-collapse: collapse;
  }
`,F=d(y)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,H=d.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,P=d.table`
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
`,k=d(y)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,z=()=>{const l=T(),h=p(a=>a.LaLiga.table),m=p(a=>a.LaLiga.topScorers),s=p(a=>a.LaLiga.topScorersStatus);g.useEffect(()=>{s==="idle"&&l($())},[s,l]);const u=a=>{for(const e of h)if(e.team.shortName===a)return e.team.crest;return""},f=a=>{for(const e of h)if(e.team.shortName===a)return e.team.id;return""};return s==="loading"?t(S,{}):t(H,{children:r(P,{children:[t("thead",{children:r("tr",{children:[t("th",{children:"Player"}),t("th",{children:"Team"}),t("th",{children:"Goals"})]})}),t("tbody",{children:m.map(a=>r("tr",{children:[t("td",{children:t(k,{to:`/player/${a.id}`,children:a.name})}),r("td",{children:[t("img",{src:u(a.team),width:30}),t(k,{to:`/team/${f(a.team)}`,children:a.team})]}),t("td",{children:a.goals})]},a.id))})]})})};d.main`
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
`;d(y)`
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
`,Q=d.table`
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
`,M=d(y)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,q=()=>{const l=T(),h=p(n=>n.LaLiga.table),m=p(n=>n.LaLiga.upcomingMatches),s=p(n=>n.LaLiga.upcomingMatchesStatus),u=D();g.useEffect(()=>{s==="idle"&&l(N())},[s,l]);const f=n=>{for(const i of h)if(i.team.shortName===n)return i.team.crest;return""},a=n=>{for(const i of h)if(i.team.shortName===n)return i.team.id;return""},e=n=>{const i=new Date(n),L={hour:"2-digit",minute:"2-digit"};return i.toLocaleTimeString(void 0,L)},o=g.useMemo(()=>{const n={};for(const i of m){const x=new Date(i.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});n[x]||(n[x]=[]),n[x].push(i)}return n},[m]);return s==="loading"?t(S,{}):t(R,{children:Object.keys(o).map(n=>r(V,{children:[t("h3",{children:n}),r(Q,{children:[t("thead",{children:r("tr",{children:[t("th",{children:"Hometeam"}),t("th",{}),t("th",{children:"Awayteam"})]})}),t("tbody",{children:o[n].map(i=>r("tr",{onClick:L=>{if(L.target.tagName.toLowerCase()==="a")return"";u(`/match/${i.id}`)},children:[r("td",{className:"homeTeam",children:[t("img",{src:f(i.home_team),width:30}),t(M,{to:`/team/${a(i.home_team)}`,children:i.home_team})]}),t("td",{className:"time",children:e(i.kickoff_time)}),r("td",{className:"awayTeam",children:[t("img",{src:f(i.away_team),width:30}),t(M,{to:`/team/${a(i.away_team)}`,children:i.away_team})]})]},i.id))})]})]},n))})},J=d.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  gap: 20px;
`,K=d.div`
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
`,_=d(y)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,Y=()=>{const l=T(),h=p(e=>e.LaLiga.table),m=p(e=>e.LaLiga.latestMatches),s=p(e=>e.LaLiga.latestMatchesStatus);g.useEffect(()=>{s==="idle"&&l(j())},[l,s]);const u=e=>{for(const o of h)if(o.team.shortName===e)return o.team.crest;return""},f=e=>{for(const o of h)if(o.team.shortName===e)return o.team.id;return""},a=g.useMemo(()=>{const e={};for(const o of m){const i=new Date(o.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});e[i]||(e[i]=[]),e[i].push(o)}return e},[m]);return s==="loading"?t(S,{}):t(J,{children:Object.keys(a).map(e=>r(K,{children:[t("h3",{children:e}),r(X,{children:[t("thead",{children:r("tr",{children:[t("th",{children:"Hometeam"}),t("th",{}),t("th",{}),t("th",{}),t("th",{children:"Awayteam"})]})}),t("tbody",{children:a[e].map(o=>r("tr",{onClick:n=>{if(n.target.tagName.toLowerCase()==="a")return"";navigate(`/match/${o.id}`)},children:[r("td",{children:[t("img",{src:u(o.home_team),width:30}),t(_,{to:`/team/${f(o.home_team)}`,children:o.home_team})]}),t("td",{children:o.home_team_score}),t("td",{children:"-"}),t("td",{children:o.away_team_score}),r("td",{children:[t("img",{src:u(o.away_team),width:30}),t(_,{to:`/team/${f(o.away_team)}`,children:o.away_team})]})]},o.id))})]})]},e))})},it=()=>{const l=T(),h=p(c=>c.LaLiga.table),m=p(c=>c.LaLiga.tableStatus),[s,u]=g.useState("table"),[f,a]=g.useState(!1),[e,o]=g.useState(window.innerWidth<768),n=g.useRef(),i=G();g.useEffect(()=>{m==="idle"&&l(W())},[l,m]),g.useEffect(()=>{a(!1)},[i]);const L=c=>{for(const w of h)if(w.team.name===c)return w.team.id;return""},x=()=>{a(!f)};return r(v,{children:[t(C,{}),t(E,{toggleSidebar:x,isMobile:e,isOpen:f}),r(U,{children:[t(I,{toggleSidebar:x,isOpen:f,setIsMobile:o,hamburgerMenuRef:n}),r(A,{children:[m==="loading"?t(S,{}):r(v,{children:[r(O,{value:s,onChange:(c,w)=>u(w),children:[t(b,{label:"table",value:"table"}),t(b,{label:"Top scorers",value:"topscorers"}),t(b,{label:"Upcoming Matches",value:"upcomingmatches"}),t(b,{label:"Latest matches",value:"latestmatches"})]}),s==="table"&&r(B,{children:[t("thead",{children:r("tr",{children:[t("th",{}),t("th",{children:"Team"}),t("th",{}),t("th",{children:"MP"}),t("th",{children:"W"}),t("th",{children:"D"}),t("th",{children:"L"}),t("th",{children:"GF"}),t("th",{children:"GA"}),t("th",{children:"GD"}),t("th",{children:"Points"})]})}),t("tbody",{children:h.map(c=>r("tr",{children:[t("th",{children:c.position}),t("img",{style:{width:"30px",marginTop:"12px"},src:c.team.crest,alt:c.team.name}),t("td",{children:t(F,{to:`/team/${L(c.team.name)}`,children:c.team.name})}),t("td",{children:c.playedGames}),t("td",{children:c.won}),t("td",{children:c.draw}),t("td",{children:c.lost}),t("td",{children:c.goalsFor}),t("td",{children:c.goalsAgainst}),t("td",{children:c.goalDifference}),t("td",{children:c.points})]},c.position))})]})]}),s==="topscorers"&&t(z,{}),s==="upcomingmatches"&&t(q,{}),s==="latestmatches"&&t(Y,{})]})]})]})};export{it as default};
