import{s as c,L as w,a as p,r as u,f as A,b as e,F as x,d as y,j as a,u as M,e as j,g as G,G as D,h as N,i as E,k as W}from"./index-367d06a2.js";import{u as b,H as I}from"./Header-9fa12999.js";import{S as C}from"./Sidebar-d61e925b.js";import{T as B,a as v}from"./Tabs-fd72387b.js";const F=c.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,H=c.table`
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
`,$=c(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,O=()=>{const m=b(),g=p(t=>t.premierLeague.topScorers),s=p(t=>t.premierLeague.topScorersStatus),d=p(t=>t.premierLeague.table);u.useEffect(()=>{s==="idle"&&m(A())},[s,m]);const L=t=>{for(const l of d)if(l.team.shortName===t)return l.team.crest;return""},f=t=>{for(const l of d)if(l.team.name===t)return l.team.id;return""};return e(x,{children:s==="loading"?e(y,{}):e(F,{children:a(H,{children:[e("thead",{children:a("tr",{children:[e("th",{children:"Player"}),e("th",{children:"Team"}),e("th",{children:"Goals"})]})}),e("tbody",{children:g.map(t=>a("tr",{children:[e("td",{children:e($,{to:`/player/${t.id}`,children:t.name})}),a("td",{children:[e("img",{src:L(t.team),alt:t.team,width:30}),e($,{to:`/team/${f(t.team)}`,children:t.team})]}),e("td",{children:t.goals})]},t.id))})]})})})},U=c.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  gap: 20px;
`,z=c.div`
  width: 100%;
`,R=c.table`
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
`,k=c(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,V=()=>{const m=b(),g=p(i=>i.premierLeague.upcomingMatches),s=p(i=>i.premierLeague.upcomingMatchesStatus),d=p(i=>i.premierLeague.table),L=M();u.useEffect(()=>{s==="idle"&&m(j())},[s,m]);const f=i=>{for(const n of d)if(n.team.name===i)return n.team.crest;return""},t=i=>{for(const n of d)if(n.team.name===i)return n.team.id;return""},l=i=>{const n=new Date(i),h={hour:"2-digit",minute:"2-digit"};return n.toLocaleTimeString(void 0,h)},r={};for(const i of g){const h=new Date(i.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});r[h]||(r[h]=[]),r[h].push(i)}return e(x,{children:s==="loading"?e(y,{}):e(U,{children:Object.keys(r).map(i=>a(z,{children:[e("h3",{children:i}),a(R,{children:[e("thead",{children:a("tr",{children:[e("th",{children:"Hometeam"}),e("th",{children:"Time"}),e("th",{children:"Awayteam"})]})}),e("tbody",{children:r[i].map((n,h)=>a("tr",{onClick:S=>{S.target.tagName.toLowerCase()!=="a"&&L(`/match/${n.id}`)},children:[a("td",{className:"homeTeam",children:[e("img",{src:f(n.home_team),width:30,height:30,alt:n.home_team}),e(k,{to:`/team/${t(n.home_team)}`,children:n.home_team})]}),e("td",{className:"time",children:l(n.kickoff_time)}),a("td",{className:"awayTeam",children:[e("img",{src:f(n.away_team),width:30,height:30,alt:n.away_team}),e(k,{to:`/team/${t(n.away_team)}`,children:n.away_team})]})]},h))})]})]},i))})})},q=c.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,J=c.table`
  width: 80%;
  border-collapse: collapse;
  td,
  th {
    text-align: left;
    padding: 8px;
  }
`,P=c(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,K=()=>{const m=b(),g=p(t=>t.premierLeague.topAssists),s=p(t=>t.premierLeague.topAssistsStatus),d=p(t=>t.premierLeague.table);u.useEffect(()=>{s==="idle"&&m(G())},[s,m]);const L=t=>{for(const l of d)if(l.team.name===t)return l.team.crest;return""},f=t=>{for(const l of d)if(l.team.name===t)return l.team.id;return""};return a(x,{children:[e(D,{}),e(q,{children:s==="loading"?e(y,{}):a(J,{children:[e("thead",{children:a("tr",{children:[e("th",{children:"Player"}),e("th",{children:"Team"}),e("th",{children:"Assists"})]})}),e("tbody",{children:g.map(t=>a("tr",{children:[e("td",{children:e(P,{to:`/player/${t.id}`,children:t.name})}),a("td",{children:[e("img",{src:L(t.team),width:30}),e(P,{to:`/team/${f(t.team)}`,children:t.team})]}),e("td",{children:t.assists})]},t.id))})]})})]})},Q=c.main`
  display: flex;
`,X=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-grow: 1;
  overflow-x: auto;
`;c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;const Y=c.table`
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  th,
  td {
    text-align: left;
    border-collapse: collapse;
  }
`,Z=c(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,ee=c.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  gap: 20px;
`,te=c.div`
  width: 100%;
`,ie=c.table`
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
`,_=c(w)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,ae=()=>{const m=b(),g=p(r=>r.premierLeague.table),s=p(r=>r.premierLeague.latestMatches),d=p(r=>r.premierLeague.latestMatchesStatus),L=M();u.useEffect(()=>{d==="idle"&&m(N())},[m]);const f=u.useMemo(()=>{const r={};return s.forEach(i=>{const h=new Date(i.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});r[h]||(r[h]=[]),r[h].push(i)}),r},[s]),t=r=>{const i=g.find(n=>n.team.shortName===r);return i?i.team.crest:""},l=r=>{const i=g.find(n=>n.team.shortName===r);return i?i.team.id:""};return e(ee,{children:d==="loading"?e(y,{}):e(x,{children:Object.keys(f).map(r=>a(te,{children:[e("h3",{children:r}),a(ie,{children:[e("thead",{children:a("tr",{children:[e("th",{children:"Hometeam"}),e("th",{}),e("th",{}),e("th",{}),e("th",{children:"Awayteam"})]})}),e("tbody",{children:f[r].map((i,n)=>a("tr",{onClick:h=>{h.target.tagName.toLowerCase()!=="a"&&L(`/match/${i.id}`)},children:[a("td",{children:[e("img",{src:t(i.home_team),width:30,height:30}),e(_,{to:`/team/${l(i.home_team)}`,children:i.home_team})]}),e("td",{children:i.home_team_score}),e("td",{children:"-"}),e("td",{children:i.away_team_score}),a("td",{children:[e("img",{src:t(i.away_team),width:30,height:30}),e(_,{to:`/team/${l(i.away_team)}`,children:i.away_team})]})]},n))})]})]},r))})})},se=()=>{const m=b(),g=p(o=>o.premierLeague.table),s=p(o=>o.premierLeague.tableStatus),[d,L]=u.useState("table"),[f,t]=u.useState(!1),[l,r]=u.useState(window.innerWidth<768),i=E(),n=u.useRef();u.useEffect(()=>{s==="idle"&&m(W())},[s,m]);const h=o=>{for(const T of g)if(T.team.name===o)return T.team.id;return""},S=()=>{t(!f)};return u.useEffect(()=>{t(!1)},[i]),a(x,{children:[e(D,{}),e(I,{toggleSidebar:S,isMobile:l,isOpen:f}),a(Q,{children:[e(C,{isOpen:f,toggleSidebar:S,setIsMobile:r,hamburgerMenuRef:n}),a(X,{children:[s==="loading"?e(y,{}):a(x,{children:[a(B,{value:d,onChange:(o,T)=>L(T),children:[e(v,{label:"Table",value:"table"}),e(v,{label:"Top scorers",value:"topscorers"}),e(v,{label:"Upcomming matches",value:"upcommingMatches"}),e(v,{label:"Latest matches",value:"latestmatches"})]}),d==="table"&&a(Y,{children:[e("thead",{children:a("tr",{children:[e("th",{style:{padding:"5px"}}),e("th",{children:"Team"}),e("th",{}),e("th",{children:"MP"}),e("th",{children:"W"}),e("th",{children:"D"}),e("th",{children:"L"}),e("th",{children:"GF"}),e("th",{children:"GA"}),e("th",{children:"GD"}),e("th",{children:"P"})]})}),e("tbody",{children:g.map(o=>a("tr",{children:[e("th",{children:o.position}),e("img",{style:{width:"30px",marginTop:"12px"},src:o.team.crest,alt:o.team.name}),e("td",{children:e(Z,{to:`/team/${h(o.team.name)}`,children:o.team.name})}),e("td",{children:o.playedGames}),e("td",{children:o.won}),e("td",{children:o.draw}),e("td",{children:o.lost}),e("td",{children:o.goalsFor}),e("td",{children:o.goalsAgainst}),e("td",{children:o.goalDifference}),e("td",{children:o.points})]},o.position))})]})]}),d==="topscorers"&&e(O,{}),d==="upcommingMatches"&&e(V,{}),d==="topassists"&&e(K,{}),d==="latestmatches"&&e(ae,{})]})]})]})};export{se as default};
