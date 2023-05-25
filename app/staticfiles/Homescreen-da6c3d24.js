import{T as j,S as Z,U as S,_ as h,a2 as O,r as v,W as q,X as G,b as o,Y as Q,Z as Y,V as X,a3 as B,a4 as _,j as d,s as b,L as ae,a as E,i as se,u as ne,a5 as re,F as W,G as le,d as ie}from"./index-367d06a2.js";import{c as $,I as J,u as ce,H as de,C as ue,g as pe}from"./Header-9fa12999.js";import{S as ve}from"./Sidebar-d61e925b.js";const he=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},D=he;function fe(e){return j("MuiPaper",e)}Z("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const ge=["className","component","elevation","square","variant"],me=e=>{const{square:t,elevation:n,variant:l,classes:a}=e,u={root:["root",l,!t&&"rounded",l==="elevation"&&`elevation${n}`]};return Y(u,fe,a)},xe=S("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return h({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&h({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${O("#fff",D(t.elevation))}, ${O("#fff",D(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),ye=v.forwardRef(function(t,n){const l=q({props:t,name:"MuiPaper"}),{className:a,component:u="div",elevation:y=1,square:x=!1,variant:C="elevation"}=l,f=G(l,ge),g=h({},l,{component:u,elevation:y,square:x,variant:C}),A=me(g);return o(xe,h({as:u,ownerState:g,className:Q(A.root,a),ref:n},f))}),Ce=ye;function be(e){return j("MuiAlert",e)}const Ae=Z("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),H=Ae,we=$(o("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Me=$(o("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Ie=$(o("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Se=$(o("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),$e=$(o("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Te=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],Le=e=>{const{variant:t,color:n,severity:l,classes:a}=e,u={root:["root",`${t}${X(n||l)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return Y(u,be,a)},Pe=S(Ce,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${X(n.color||n.severity)}`]]}})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?B:_,l=e.palette.mode==="light"?_:B,a=t.color||t.severity;return h({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&t.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:n(e.palette[a].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${a}StandardBg`]:l(e.palette[a].light,.9),[`& .${H.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}},a&&t.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:n(e.palette[a].light,.6),border:`1px solid ${(e.vars||e).palette[a].light}`,[`& .${H.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}},a&&t.variant==="filled"&&h({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${a}FilledColor`],backgroundColor:e.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[a].dark:e.palette[a].main,color:e.palette.getContrastText(e.palette[a].main)}))}),Re=S("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),ke=S("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),F=S("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),U={success:o(we,{fontSize:"inherit"}),warning:o(Me,{fontSize:"inherit"}),error:o(Ie,{fontSize:"inherit"}),info:o(Se,{fontSize:"inherit"})},ze=v.forwardRef(function(t,n){var l,a,u,y,x,C;const f=q({props:t,name:"MuiAlert"}),{action:g,children:A,className:T,closeText:L="Close",color:R,components:w={},componentsProps:M={},icon:I,iconMapping:k=U,onClose:P,role:z="alert",severity:s="success",slotProps:i={},slots:r={},variant:p="standard"}=f,N=G(f,Te),m=h({},f,{color:R,severity:s,variant:p}),c=Le(m),K=(l=(a=r.closeButton)!=null?a:w.CloseButton)!=null?l:J,ee=(u=(y=r.closeIcon)!=null?y:w.CloseIcon)!=null?u:$e,te=(x=i.closeButton)!=null?x:M.closeButton,oe=(C=i.closeIcon)!=null?C:M.closeIcon;return d(Pe,h({role:z,elevation:0,ownerState:m,className:Q(c.root,T),ref:n},N,{children:[I!==!1?o(Re,{ownerState:m,className:c.icon,children:I||k[s]||U[s]}):null,o(ke,{ownerState:m,className:c.message,children:A}),g!=null?o(F,{ownerState:m,className:c.action,children:g}):null,g==null&&P?o(F,{ownerState:m,className:c.action,children:o(K,h({size:"small","aria-label":L,title:L,color:"inherit",onClick:P},te,{children:o(ee,h({fontSize:"small"},oe))}))}):null]}))}),Ne=ze,Oe=b.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`,Be=b.main`
  display: flex;
`,_e=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 1rem auto;
`,Ee=b.table`
  width: 90%;
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
    padding: 9px;
    border-bottom: 1px solid #000;
  }

  th {
    background-color: #f2f2f2;
    @media screen and (max-width: 768px) {
      background: none;
    }
  }

  td:nth-child(1),
  td:nth-child(4) {
    width: 35%;
  }

  td:nth-child(2) {
    position: relative;
    left: -3rem;
    font-size: 0;
  }

  td:nth-child(2)::before {
    content: attr(data-content);
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    margin-left: 10px;
    margin-top: 20px;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    td:nth-child(2)::before {
      content: "";
    }
  }

  td:nth-child(3),
  td:nth-child(5) {
    position: relative;
    left: 6rem;
    width: 5%;
    @media screen and (max-width: 950px) {
      left: 0;
    }
  }
  .score-container {
    display: flex;
    gap: 20px;
  }
`,V=b(ae)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,We=b.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 10px;
  max-width: 350px;
`,Ue=()=>{const e=ce(),t=E(s=>s.TodaysMatches.data),n=E(s=>s.TodaysMatches.status),[l,a]=v.useState(!1),[u,y]=v.useState(window.innerWidth<768),[x,C]=v.useState(""),[f,g]=v.useState([]),[A,T]=v.useState(!1);se();const L=v.useRef(),R=ne();v.useEffect(()=>{n==="idle"&&e(re())},[e,n]);const w=()=>{a(!l)},M=v.useMemo(()=>{const s={},i=f.length>0?f:t.matches;for(const r of i||[]){const p=r.competition;s[p.name]||(s[p.name]={emblem:p.emblem,matches:[]}),s[p.name].matches.push(r)}return s},[t.matches,f]),I=(s,i)=>{switch(s){case"TIMED":return k(i);case"POSTPONED":return"PP";case"IN_PLAY":return"LIVE";case"PAUSED":return"HT";case"FINISHED":return"FT"}},k=s=>{const i=new Date(s),r={hour:"2-digit",minute:"2-digit"};return i.toLocaleTimeString(void 0,r)},P=s=>{C(s.target.value),z(s.target.value)},z=s=>{if(s==="")g([]),T(!1);else if(Array.isArray(t.matches)){const i=t.matches.filter(c=>c.competition.name.toLowerCase().includes(s.toLowerCase())),r=t.matches.filter(c=>c.area.name.toLowerCase().includes(s.toLowerCase())),p=t.matches.filter(c=>c.homeTeam.name.toLowerCase().includes(s.toLowerCase())),N=t.matches.filter(c=>c.awayTeam.name.toLowerCase().includes(s.toLowerCase())),m=[...new Set([...i,...r,...p,...N])];g(m),T(m.length===0)}else console.error("TodaysMatches is not an array")};return d(W,{children:[o(le,{}),o(de,{toggleSidebar:w,isMobile:u,isOpen:l}),d(Be,{children:[o(ve,{isOpen:l,toggleSidebar:w,setIsMobile:y,hamburgerMenuRef:L}),o(Oe,{children:n==="loading"?o(ie,{}):d(W,{children:[o("h1",{children:"Todays Matches"}),o(ue,{style:{padding:"0px"},type:"text",placeholder:"Country, League or Team",value:x,onChange:P,startAdornment:o(J,{type:"button",sx:{p:"10px"},"aria-label":"search",children:o(pe,{})})}),A&&x.length>0?o(We,{children:o(Ne,{severity:"warning",children:"No results found"})}):Object.keys(M).map(s=>{const i=M[s];return d(_e,{children:[d("div",{style:{display:"flex",gap:"5px"},children:[o("img",{src:i.emblem,width:30,height:30,style:{marginTop:"15px"}}),o("h2",{children:s})]}),d(Ee,{children:[o("thead",{children:d("tr",{children:[o("th",{}),o("th",{}),o("th",{}),o("th",{}),o("th",{}),o("th",{})]})}),o("tbody",{children:i.matches.map(r=>d("tr",{onClick:p=>{p.target.tagName.toLowerCase()!=="a"&&R(`/match/${r.id}`)},children:[d("td",{children:[o("img",{src:r.homeTeam.crest,width:30}),o(V,{to:`/team/${r.homeTeam.id}`,children:r.homeTeam.shortName})]}),o("td",{"data-content":I(r.status,r.utcDate),children:I(r.status,r.utcDate)}),o("td",{children:d("div",{className:"score-container",children:[o("span",{children:r.score.fullTime.home}),o("span",{className:"score-separator",children:"-"}),o("span",{children:r.score.fullTime.away})]})}),o("td",{}),o("td",{}),d("td",{children:[o("img",{src:r.awayTeam.crest,width:30}),o(V,{to:`/team/${r.awayTeam.id}`,children:r.awayTeam.shortName})]})]},r.id))})]})]},s)})]})})]})]})};export{Ue as default};
