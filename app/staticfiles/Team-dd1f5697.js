import{s,L as v,a as h,q as k,r as m,t as O,b as e,d as L,j as n,v as W,F as w,w as z,x as G,y as I,G as A}from"./index-d5aed2f8.js";import{u as q,c as N,H as P}from"./Header-debffeb6.js";import{T as V,a as S}from"./Tabs-e6e19db0.js";import{S as J}from"./Stadium-7599c085.js";const K=s.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Q=s.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`,X=s.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #fafafa;
  }
  th {
    background-color: #f2f2f2;
  }
  td:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
`;const Y=s.h1`
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 0px;
`,b=s.p`
  color: #ccc;
`,Z=s.img`
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  padding-left: 2rem;
  width: 150px;
  height: 150px;
  @media screen and (max-width: 767px) {
    display: flex;
    align-self: center;
    padding-left: 0rem;
  }
`,j=s.img`
  width: 30px;
  height: 18px;
  border-radius: 2px;
`,R=s(v)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,ee=s.div`
  display: flex;
  align-items: center;
  gap: calc(2vw + 20px);
  flex-direction: row;
  @media (min-width: 768px) {
    gap: calc(3vw + 40px);
  }
  @media (min-width: 1200px) {
    gap: calc(4vw + 60px);
  }
`,te=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 15px;
  gap: calc(2vw + 20px);
  @media (min-width: 768px) {
    gap: calc(3vw + 40px);
  }
  @media (min-width: 1200px) {
    gap: calc(4vw + 60px);
  }
`,ae=s.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
`,oe=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
`,ie=s.div`
  width: 100%;
  margin: 1rem auto;
`,ne=s.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;

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
`,B=s(v)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,se=()=>{const d=q(),o=h(a=>a.TeamUpcomingMatches.data),r=h(a=>a.TeamUpcomingMatches.status),x=h(a=>a.TeamSquad.data),{team_id:p}=k();console.log("TeamSquad:",x),m.useEffect(()=>{r==="idle"&&d(O(p))},[r,d,p]);const c=m.useMemo(()=>{const a={};for(const l of o){const f=new Date(l.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});a[f]||(a[f]=[]),a[f].push(l)}return a},[o]);return r==="loading"?e(L,{}):e(oe,{children:Object.keys(c).map(a=>n(ie,{children:[e("h3",{children:a}),n(ne,{children:[e("thead",{children:n("tr",{children:[e("th",{}),e("th",{})]})}),e("tbody",{children:c[a].map(l=>n("tr",{children:[n("td",{children:[e("img",{src:l.home_team_crest,width:30}),e(B,{to:`/team/${l.home_team_id}`,children:l.home_team})]}),n("td",{children:[e("img",{src:l.away_team_crest,width:30}),e(B,{to:`/team/${l.away_team_id}`,children:l.away_team})]})]},l.id))})]})]},a))})},ce=s.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
`,re=s.div`
  width: 100%;
  margin: 1rem auto;
`,de=s.table`
  width: 100%;
  border-collapse: collapse;

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
`,E=s(v)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,le=()=>{const d=q(),o=h(c=>c.TeamLatestMatches.data),r=h(c=>c.TeamLatestMatches.status),{team_id:x}=k();m.useEffect(()=>{r==="idle"&&d(W(x))},[r,d,x]);const p=m.useMemo(()=>{const c={};for(const a of o){const _=new Date(a.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});c[_]||(c[_]=[]),c[_].push(a)}return c},[o]);return r==="loading"?e(L,{}):e(ce,{children:Object.keys(p).map(c=>n(re,{children:[e("h3",{children:c}),n(de,{children:[e("thead",{children:n("tr",{children:[e("th",{}),e("th",{}),e("th",{}),e("th",{}),e("th",{})]})}),e("tbody",{children:p[c].map(a=>n("tr",{children:[n("td",{children:[e("img",{src:a.home_team_crest,width:30}),e(E,{to:`/team/${a.home_team_id}`,children:a.home_team})]}),e("td",{children:a.home_team_score}),e("td",{children:"-"}),e("td",{children:a.away_team_score}),n("td",{children:[e("img",{src:a.away_team_crest,width:30}),e(E,{to:`/match/${a.away_team_id}`,children:a.away_team})]})]},a.id))})]})]},c))})},me=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
  }
`,M=s.div`
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: bold;
  color: #fff;
`,he=s(M)`
  background-color: #4caf50;
  color: white;
`,pe=s(M)`
  background-color: #f44336;
  color: white;
`,fe=s(M)`
  background-color: #ff9800;
  color: white;
`,ue=s.h1`
  font-size: 24px;
  padding-bottom: 20px;
  margin-top: 20px;
`,T=s.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
`,$=s(v)`
  text-decoration: none;
  &:hover {
    background-color: #121212;
    opacity: 50%;
  }
`,ge=({form:d})=>n(w,{children:[e(ue,{children:"Current Form"}),e(me,{children:d.map((o,r)=>o.result==="W"?n($,{to:`/match/${o.id}`,children:[e(he,{children:o.score},r),e(T,{src:o.crest})]}):o.result==="L"?n($,{to:`/match/${o.id}`,children:[e(pe,{children:o.score},r),e(T,{src:o.crest})]}):n($,{to:`/match/${o.id}`,children:[e(fe,{children:o.score},r),e(T,{src:o.crest})]}))})]}),xe=N(e("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),"History"),Se=()=>{const d=q(),o=h(i=>i.TeamSquad.data),r=h(i=>i.TeamSquad.status);h(i=>i.TeamSquad.error);const x=h(i=>i.TeamLatestMatches.data),p=h(i=>i.TeamLatestMatches.status),c=m.useRef(null),{team_id:a}=k(),[l,_]=m.useState({}),[f,D]=m.useState("squad");m.useEffect(()=>{(r==="idle"||a!==c.current)&&(c.current=a,d(z(a)))},[r,d,a]),m.useEffect(()=>{(p==="idle"||a!==c.current)&&(c.current=a,d(W(a)))},[d,p,a]),m.useEffect(()=>{if(o.squad){const i=new Set(o.squad.map(t=>t.nationality));C(i)}},[o.squad]),m.useEffect(()=>{D("squad")},[a]),m.useEffect(()=>()=>{d(G())},[a,d]);const U=m.useMemo(()=>{const i=[];for(const t of x){const u=t.home_team_score===t.away_team_score,y=t.home_team_id===o.id;if(u)i.push({result:"D",score:`${t.home_team_score}-${t.away_team_score}`,crest:y?t.away_team_crest:t.home_team_crest,id:t.id});else{const g=t.home_team_id===o.id;t.home_team_score>t.away_team_score?i.push({result:g?"W":"L",score:g?`${t.home_team_score}-${t.away_team_score}`:`${t.away_team_score}-${t.home_team_score}`,crest:g?t.away_team_crest:t.home_team_crest,id:t.id}):i.push({result:g?"L":"W",score:g?`${t.home_team_score}-${t.away_team_score}`:`${t.away_team_score}-${t.home_team_score}`,crest:g?t.away_team_crest:t.home_team_crest,id:t.id})}}return i},[o,x,a]),F=m.useMemo(()=>{if(!o.squad)return{};const i={};for(const t of o.squad)i[t.position]||(i[t.position]=[]),i[t.position].push(t);return i},[o.squad]),H={England:"https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png",Scotland:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1280px-Flag_of_Scotland.svg.png",Wales:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Wales.svg/1280px-Flag_of_Wales.svg.png"},C=async i=>{const t={};for(const u of i)if(H[u])t[u]=H[u];else try{const y=await I.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(u)}?fullText=true`);if(y.status===200){const g=y.data;t[u]=g[0].flags.svg}}catch(y){console.error(`Error fetching flag for ${u}:`,y)}_(t)};return n(w,{children:[e(A,{}),e(P,{}),e(K,{children:r==="loading"?e(L,{}):n(w,{children:[n(V,{value:f,onChange:(i,t)=>D(t),children:[e(S,{label:"Overview",value:"squad"}),e(S,{label:"Upcoming Matches",value:"upcomingmatches"}),e(S,{label:"Latest Matches",value:"latestmatches"})]}),f==="squad"&&n(w,{children:[n(ae,{children:[e(Z,{src:o.crest}),e(Y,{children:o.name})]}),n(ee,{children:[e(b,{children:o.area&&n(w,{children:[e(j,{src:l[o.area.name]}),o.area.name]})}),n(b,{children:[e(J,{}),o.venue]}),n(b,{children:[e(xe,{}),o.founded]})]}),e(te,{children:o.runningCompetitions&&o.runningCompetitions.map(i=>n(b,{children:[e("img",{width:30,src:i.emblem}),i.name]}))}),e(ge,{form:U}),Object.keys(F).map(i=>n(Q,{children:[e("h3",{children:i}),n(X,{children:[e("thead",{children:n("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Birth"}),e("th",{children:"Nationality"})]})}),e("tbody",{children:Array.isArray(o.squad)&&F[i].map(t=>n("tr",{children:[e("td",{children:e(R,{to:`/player/${t.id}`,children:t.name})}),e("td",{children:t.dateOfBirth}),n("td",{children:[e(j,{src:l[t.nationality],alt:t.nationality}),t.nationality]})]},t.id))})]})]},i))]}),f==="upcomingmatches"&&e(se,{}),f==="latestmatches"&&e(le,{})]})})]})};export{Se as default};
