import{b as e,s as n,L as S,a as c,r as x,q as L,u as z,a2 as j,a3 as k,d as N,j as a,F as A,G as C}from"./index-57ff3d1b.js";import{c as H,u as F,H as I}from"./Header-22b7e31d.js";import{S as E}from"./Stadium-3809bafc.js";const B=H(e("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),"CalendarToday"),R=H([e("path",{d:"M11.23 6c-1.66 0-3.22.66-4.36 1.73C6.54 6.73 5.61 6 4.5 6 3.12 6 2 7.12 2 8.5S3.12 11 4.5 11c.21 0 .41-.03.61-.08-.05.25-.09.51-.1.78-.18 3.68 2.95 6.68 6.68 6.27 2.55-.28 4.68-2.26 5.19-4.77.15-.71.15-1.4.06-2.06-.09-.6.38-1.13.99-1.13H22V6H11.23zM4.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm6.5 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"},"0"),e("circle",{cx:"11",cy:"12",r:"2"},"1")],"Sports"),G=n.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 3em;
width: 100%;
`,V=n.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
gap: 40px;
`,_=n.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
border-bottom: 1px solid #000;
padding-bottom: 20px;
`,$=n.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 80%;
gap: 20px;
border-bottom: 1px solid #000;
padding-bottom: 20px;
@media screen and (max-width: 767px){
    gap: 10px;
}
`,W=n.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 80%;
border-bottom: 1px solid #000;
padding-bottom: 20px;
@media screen and (max-width: 768px){
gap: 20px;
}
`,O=n.h1`
font-weight: 400;
font-size: 26px;
`,P=n.h2`
font-weight: 400;
`,b=n(S)`
font-weight: 400;
font-size: 26px;
color: #fafafa;
text-decoration: none;
cursor: pointer;
@media screen and (max-width: 768px){
 font-size: 18px;   
}
`,g=n.p`
font-size: 24px;
@media screen and (max-width: 768px){
font-size: 20px;
}
`,s=n.img`
width: 100px;
@media screen and (max-width: 768px){
width: 50px;
height: 50px;
}
`,Q=n.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
padding-bottom: 4rem;
`,U=n.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #4caf50;
border-radius: 50%;
width: 30px;
height: 30px;
padding: 15px;
@media screen and (max-width: 768px){
    width: 20px;
    height: 20px; 
}
`,q=n.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #ff9800;
border-radius: 50%;
width: 30px;
height: 30px;
padding: 15px;
@media screen and (max-width: 768px){
    width: 20px;
    height: 20px; 
}
`,J=n.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #f44336;
border-radius: 50%;
width: 30px;
height: 30px;
padding: 15px;
@media screen and (max-width: 768px){
    width: 20px;
    height: 20px;
}
`,f=n.p`
margin-top: 8px;
font-size: 24px;
@media screen and (max-width: 768px){
 margin-top: 4px; 
}
`,K=n.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
margin: 1rem auto;
`,X=n.table`
  width: 80%;
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
    padding: 20px;
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
`,T=n(S)`
color: #fafafa;
text-decoration: none;
cursor: pointer;

`,te=()=>{const l=F(),i=c(t=>t.Match.data),h=c(t=>t.Match.status),r=c(t=>t.Head2Head.data),m=c(t=>t.Head2Head.status),u=x.useRef(null),{match_id:o}=L(),v=z();x.useEffect(()=>{(h==="idle"&&m==="idle"||o!==u.current)&&(u.current=o,l(j(o)),l(k(o)))},[l,h,m,o]);const D=()=>new Date(i.utcDate).toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"}),M=t=>{switch(t){case"REGULAR_SEASON":return"";case"LAST_16":return"Last 16";case"QUARTER_FINALS":return"QF";case"SEMI_FINALS":return"SF";case"FINAL":return"F";default:return t}},w=x.useMemo(()=>{const t={};if(r&&Array.isArray(r.matches))for(const d of r.matches){const p=new Date(d.utcDate).toLocaleDateString("en-GB",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});t[p]||(t[p]=[]),t[p].push(d)}return t},[r]);return h==="loading"||m==="loading"?e(N,{}):a(A,{children:[e(C,{}),e(I,{}),i&&i.competition&&a(G,{children:[a(V,{children:[a(_,{children:[e("img",{width:30,height:30,src:i.competition.emblem,alt:"Competition emblem"}),a(O,{children:[i.competition.name,i.matchday?a("span",{children:[" Round ",i.matchday]}):null,a("span",{children:[" ",M(i.stage)]})]})]}),a($,{children:[e(s,{src:i.homeTeam.crest}),e(b,{to:`/team/${i.homeTeam.id}`,children:i.homeTeam.shortName}),e(g,{children:i.score.fullTime.home}),e(g,{children:"-"}),e(g,{children:i.score.fullTime.away}),e(s,{src:i.awayTeam.crest}),e(b,{to:`/team/${i.awayTeam.id}`,children:i.awayTeam.shortName})]}),a(W,{children:[a("p",{children:[e(B,{}),D(i.utcDate)]}),a("p",{children:[e(E,{}),i.venue]}),i.referees.map(t=>a("p",{children:[e(R,{}),t.name]}))]})]}),e(P,{children:"Head-to-Head"}),a(Q,{children:[e(s,{src:i.homeTeam.crest}),a(U,{children:[e(f,{children:r.aggregates.homeTeam.wins}),e("strong",{children:"Wins"})]}),a(q,{children:[e(f,{children:r.aggregates.homeTeam.draws}),e("strong",{children:"Draws"})]}),a(J,{children:[e(f,{children:r.aggregates.homeTeam.losses}),e("strong",{children:"Wins"})]}),e(s,{src:i.awayTeam.crest})]}),Object.keys(w).map(t=>a(K,{children:[e("h3",{children:t}),a(X,{children:[e("thead",{children:a("tr",{children:[e("th",{}),e("th",{}),e("th",{}),e("th",{}),e("th",{})]})}),e("tbody",{children:w[t].map(d=>a("tr",{onClick:y=>{y.target.tagName.toLowerCase()!=="a"&&v(`/match/${d.id}`)},children:[a("td",{children:[e("img",{width:30,src:d.homeTeam.crest}),e(T,{to:`/team/${d.homeTeam.id}`,children:d.homeTeam.shortName})]}),e("td",{children:d.score.fullTime.home}),e("td",{children:"-"}),e("td",{children:d.score.fullTime.away}),a("td",{children:[e("img",{width:30,src:d.awayTeam.crest}),e(T,{to:`/team/${d.awayTeam.id}`,children:d.awayTeam.shortName})]})]},d.id))})]})]},t))]})]})};export{te as default};
