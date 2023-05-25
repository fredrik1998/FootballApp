import{s as i,L as T,a as p,q as L,r as m,t as I,b as e,d as q,j as o,v as j,F as b,w as O,x as z,y as G,G as A}from"./index-367d06a2.js";import{u as M,c as N,H as P}from"./Header-9fa12999.js";import{T as V,a as S}from"./Tabs-fd72387b.js";import{S as J}from"./Stadium-7753fb31.js";const K=i.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Q=i.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`,X=i.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #121212;
  }
  th {
    background-color: #f2f2f2;
  }
  td:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
`;const Y=i.h1`
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 0px;
`,v=i.p`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
color: #ccc;
font-weight: 700;
`,Z=i.img`
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
`,B=i.img`
  width: 30px;
  height: 18px;
  border-radius: 2px;
`,R=i(T)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,ee=i.div`
  display: flex;
  align-items: center;
  gap: calc(10vw + 20px);
`,te=i.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
  @media (max-width: 768px){
    flex-direction: column;
  }
`,ae=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
`,oe=i.div`
  width: 100%;
  margin: 1rem auto;
`,ne=i.table`
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
`,E=i(T)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,se=()=>{const h=M(),a=p(r=>r.TeamUpcomingMatches.data),l=p(r=>r.TeamUpcomingMatches.status),_=p(r=>r.TeamSquad.data),{team_id:f}=L(),c=m.useRef(null);console.log("TeamSquad:",_),m.useEffect(()=>{(c.current!==f||l==="idle")&&(h(I(f)),c.current=f)},[l,h,f]);const s=m.useMemo(()=>{const r={};for(const d of a){const x=new Date(d.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});r[x]||(r[x]=[]),r[x].push(d)}return r},[a]);return l==="loading"?e(q,{}):e(ae,{children:Object.keys(s).map(r=>o(oe,{children:[e("h3",{children:r}),o(ne,{children:[e("thead",{children:o("tr",{children:[e("th",{}),e("th",{})]})}),e("tbody",{children:s[r].map(d=>o("tr",{children:[o("td",{children:[e("img",{src:d.home_team_crest,width:30}),e(E,{to:`/team/${d.home_team_id}`,children:d.home_team})]}),o("td",{children:[e("img",{src:d.away_team_crest,width:30}),e(E,{to:`/team/${d.away_team_id}`,children:d.away_team})]})]},d.id))})]})]},r))})},ie=i.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
`,ce=i.div`
  width: 100%;
  margin: 1rem auto;
`,re=i.table`
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
`,W=i(T)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,de=()=>{const h=M(),a=p(c=>c.TeamLatestMatches.data),l=p(c=>c.TeamLatestMatches.status),{team_id:_}=L();m.useEffect(()=>{l==="idle"&&h(j(_))},[l,h,_]);const f=m.useMemo(()=>{const c={};for(const s of a){const d=new Date(s.kickoff_time).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});c[d]||(c[d]=[]),c[d].push(s)}return c},[a]);return l==="loading"?e(q,{}):e(ie,{children:Object.keys(f).map(c=>o(ce,{children:[e("h3",{children:c}),o(re,{children:[e("thead",{children:o("tr",{children:[e("th",{}),e("th",{}),e("th",{}),e("th",{}),e("th",{})]})}),e("tbody",{children:f[c].map(s=>o("tr",{children:[o("td",{children:[e("img",{src:s.home_team_crest,width:30}),e(W,{to:`/team/${s.home_team_id}`,children:s.home_team})]}),e("td",{children:s.home_team_score}),e("td",{children:"-"}),e("td",{children:s.away_team_score}),o("td",{children:[e("img",{src:s.away_team_crest,width:30}),e(W,{to:`/match/${s.away_team_id}`,children:s.away_team})]})]},s.id))})]})]},c))})},le=N(e("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),"History"),me=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(1vw + 5px);
  margin-top: 4em;
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
  }
`,D=i.div`
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: bold;
  color: #fff;
`,he=i(D)`
  background-color: #4caf50;
  color: white;
`,fe=i(D)`
  background-color: #f44336;
  color: white;
`,pe=i(D)`
  background-color: #ff9800;
  color: white;
`;i.h1`
  font-size: 24px;
  padding-bottom: 20px;
`;const $=i.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
`,k=i(T)`
  text-decoration: none;
  &:hover {
    background-color: #121212;
    opacity: 50%;
  }
`,ue=({form:h})=>e(b,{children:e(me,{children:h.map((a,l)=>a.result==="W"?o(k,{to:`/match/${a.id}`,children:[e(he,{children:a.score},l),e($,{src:a.crest})]}):a.result==="L"?o(k,{to:`/match/${a.id}`,children:[e(fe,{children:a.score},l),e($,{src:a.crest})]}):o(k,{to:`/match/${a.id}`,children:[e(pe,{children:a.score},l),e($,{src:a.crest})]}))})}),be=()=>{const h=M(),a=p(n=>n.TeamSquad.data),l=p(n=>n.TeamSquad.status);p(n=>n.TeamSquad.error);const _=p(n=>n.TeamLatestMatches.data),f=p(n=>n.TeamLatestMatches.status),c=m.useRef(null),{team_id:s}=L(),[r,d]=m.useState({}),[w,x]=m.useState("squad");m.useEffect(()=>{(l==="idle"||s!==c.current)&&(c.current=s,h(O(s)))},[l,h,s]),m.useEffect(()=>{(f==="idle"||s!==c.current)&&(c.current=s,h(j(s)))},[h,f,s]),m.useEffect(()=>{if(a.squad){const n=new Set(a.squad.map(t=>t.nationality));C(n)}},[a.squad]),m.useEffect(()=>{x("squad")},[s]),m.useEffect(()=>()=>{h(z())},[s,h]);const U=m.useMemo(()=>{const n=[];for(const t of _){const u=t.home_team_score===t.away_team_score,y=t.home_team_id===a.id;if(u)n.push({result:"D",score:`${t.home_team_score}-${t.away_team_score}`,crest:y?t.away_team_crest:t.home_team_crest,id:t.id});else{const g=t.home_team_id===a.id;t.home_team_score>t.away_team_score?n.push({result:g?"W":"L",score:g?`${t.home_team_score}-${t.away_team_score}`:`${t.away_team_score}-${t.home_team_score}`,crest:g?t.away_team_crest:t.home_team_crest,id:t.id}):n.push({result:g?"L":"W",score:g?`${t.home_team_score}-${t.away_team_score}`:`${t.away_team_score}-${t.home_team_score}`,crest:g?t.away_team_crest:t.home_team_crest,id:t.id})}}return n},[a,_,s]),F=m.useMemo(()=>{if(!a.squad)return{};const n={};for(const t of a.squad)n[t.position]||(n[t.position]=[]),n[t.position].push(t);return n},[a.squad]),H={England:"https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png",Scotland:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1280px-Flag_of_Scotland.svg.png",Wales:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Wales.svg/1280px-Flag_of_Wales.svg.png"},C=async n=>{const t={};for(const u of n)if(H[u])t[u]=H[u];else try{const y=await G.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(u)}?fullText=true`);if(y.status===200){const g=y.data;t[u]=g[0].flags.svg}}catch(y){console.error(`Error fetching flag for ${u}:`,y)}d(t)};return o(b,{children:[e(A,{}),e(P,{}),e(K,{children:l==="loading"?e(q,{}):o(b,{children:[o(V,{value:w,onChange:(n,t)=>x(t),children:[e(S,{label:"Overview",value:"squad"}),e(S,{label:"Upcoming Matches",value:"upcomingmatches"}),e(S,{label:"Latest Matches",value:"latestmatches"})]}),w==="squad"&&o(b,{children:[o(te,{children:[e(Z,{src:a.crest}),e(Y,{children:a.name})]}),o(ee,{children:[e(v,{children:a.area&&o(b,{children:[e(B,{src:r[a.area.name]}),a.area.name]})}),o(v,{children:[e(J,{}),a.venue]}),o(v,{children:[e(le,{}),a.founded]})]}),e(ue,{form:U}),Object.keys(F).map(n=>o(Q,{children:[e("h3",{children:n}),o(X,{children:[e("thead",{children:o("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Birth"}),e("th",{children:"Nationality"})]})}),e("tbody",{children:Array.isArray(a.squad)&&F[n].map(t=>o("tr",{children:[e("td",{children:e(R,{to:`/player/${t.id}`,children:t.name})}),e("td",{children:t.dateOfBirth}),o("td",{children:[e(B,{src:r[t.nationality],alt:t.nationality}),t.nationality]})]},t.id))})]})]},n))]}),w==="upcomingmatches"&&e(se,{}),w==="latestmatches"&&e(de,{})]})})]})};export{be as default};
