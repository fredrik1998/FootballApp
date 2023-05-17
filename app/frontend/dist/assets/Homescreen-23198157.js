import{W as Y,X,b as e,Y as $,Z as j,a4 as B,a5 as O,_ as v,r as h,$ as J,T as K,j as c,S as q,a0 as ee,s as x,L as te,a as E,i as oe,u as se,a6 as ae,F as W,G as ne,d as re}from"./index-d5aed2f8.js";import{c as S,P as le,I as U,u as ie,H as ce,C as de,f as pe}from"./Header-debffeb6.js";import{S as ue}from"./Sidebar-a090935f.js";function he(t){return X("MuiAlert",t)}const me=Y("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),_=me,fe=S(e("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),ge=S(e("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),ve=S(e("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),xe=S(e("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ye=S(e("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Ce=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],we=t=>{const{variant:s,color:r,severity:d,classes:a}=t,f={root:["root",`${s}${j(r||d)}`,`${s}`],icon:["icon"],message:["message"],action:["action"]};return ee(f,he,a)},Ae=$(le,{name:"MuiAlert",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.root,s[r.variant],s[`${r.variant}${j(r.color||r.severity)}`]]}})(({theme:t,ownerState:s})=>{const r=t.palette.mode==="light"?B:O,d=t.palette.mode==="light"?O:B,a=s.color||s.severity;return v({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&s.variant==="standard"&&{color:t.vars?t.vars.palette.Alert[`${a}Color`]:r(t.palette[a].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${a}StandardBg`]:d(t.palette[a].light,.9),[`& .${_.icon}`]:t.vars?{color:t.vars.palette.Alert[`${a}IconColor`]}:{color:t.palette[a].main}},a&&s.variant==="outlined"&&{color:t.vars?t.vars.palette.Alert[`${a}Color`]:r(t.palette[a].light,.6),border:`1px solid ${(t.vars||t).palette[a].light}`,[`& .${_.icon}`]:t.vars?{color:t.vars.palette.Alert[`${a}IconColor`]}:{color:t.palette[a].main}},a&&s.variant==="filled"&&v({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert[`${a}FilledColor`],backgroundColor:t.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[a].dark:t.palette[a].main,color:t.palette.getContrastText(t.palette[a].main)}))}),Se=$("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(t,s)=>s.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Me=$("div",{name:"MuiAlert",slot:"Message",overridesResolver:(t,s)=>s.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),D=$("div",{name:"MuiAlert",slot:"Action",overridesResolver:(t,s)=>s.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),H={success:e(fe,{fontSize:"inherit"}),warning:e(ge,{fontSize:"inherit"}),error:e(ve,{fontSize:"inherit"}),info:e(xe,{fontSize:"inherit"})},Ie=h.forwardRef(function(s,r){var d,a,f,M,y,I;const m=J({props:s,name:"MuiAlert"}),{action:g,children:R,className:b,closeText:T="Close",color:P,components:C={},componentsProps:w={},icon:A,iconMapping:z=H,onClose:L,role:N="alert",severity:o="success",slotProps:l={},slots:n={},variant:p="standard"}=m,k=K(m,Ce),u=v({},m,{color:P,severity:o,variant:p}),i=we(u),V=(d=(a=n.closeButton)!=null?a:C.CloseButton)!=null?d:U,Z=(f=(M=n.closeIcon)!=null?M:C.CloseIcon)!=null?f:ye,G=(y=l.closeButton)!=null?y:w.closeButton,Q=(I=l.closeIcon)!=null?I:w.closeIcon;return c(Ae,v({role:N,elevation:0,ownerState:u,className:q(i.root,b),ref:r},k,{children:[A!==!1?e(Se,{ownerState:u,className:i.icon,children:A||z[o]||H[o]}):null,e(Me,{ownerState:u,className:i.message,children:R}),g!=null?e(D,{ownerState:u,className:i.action,children:g}):null,g==null&&L?e(D,{ownerState:u,className:i.action,children:e(V,v({size:"small","aria-label":T,title:T,color:"inherit",onClick:L},G,{children:e(Z,v({fontSize:"small"},Q))}))}):null]}))}),be=Ie,Te=x.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`,Le=x.main`
  display: flex;
`,$e=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 1rem auto;
`,Re=x.table`
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
`,F=x(te)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`,Pe=x.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 10px;
  max-width: 350px;
`,Be=()=>{const t=ie(),s=E(o=>o.TodaysMatches.data),r=E(o=>o.TodaysMatches.status),[d,a]=h.useState(!1),[f,M]=h.useState(window.innerWidth<768),[y,I]=h.useState(""),[m,g]=h.useState([]),[R,b]=h.useState(!1);oe();const T=h.useRef(),P=se();h.useEffect(()=>{r==="idle"&&t(ae())},[t,r]);const C=()=>{a(!d)},w=h.useMemo(()=>{const o={},l=m.length>0?m:s.matches;for(const n of l||[]){const p=n.competition;o[p.name]||(o[p.name]={emblem:p.emblem,matches:[]}),o[p.name].matches.push(n)}return o},[s.matches,m]),A=(o,l)=>{switch(o){case"TIMED":return z(l);case"POSTPONED":return"PP";case"IN_PLAY":return"LIVE";case"PAUSED":return"HT";case"FINISHED":return"FT"}},z=o=>{const l=new Date(o),n={hour:"2-digit",minute:"2-digit"};return l.toLocaleTimeString(void 0,n)},L=o=>{I(o.target.value),N(o.target.value)},N=o=>{if(o==="")g([]),b(!1);else if(Array.isArray(s.matches)){const l=s.matches.filter(i=>i.competition.name.toLowerCase().includes(o.toLowerCase())),n=s.matches.filter(i=>{i.area.name.toLowerCase().includes(o.toLowerCase())}),p=s.matches.filter(i=>i.homeTeam.name.toLowerCase().includes(o.toLowerCase())),k=s.matches.filter(i=>i.awayTeam.name.toLowerCase().includes(o.toLowerCase())),u=[...new Set([...l,...n,...p,...k])];g(u),b(u.length===0)}else console.error("TodaysMatches is not an array")};return c(W,{children:[e(ne,{}),e(ce,{toggleSidebar:C,isMobile:f,isOpen:d}),c(Le,{children:[e(ue,{isOpen:d,toggleSidebar:C,setIsMobile:M,hamburgerMenuRef:T}),e(Te,{children:r==="loading"?e(re,{}):c(W,{children:[e("h1",{children:"Todays Matches"}),e(de,{style:{maxWidth:"350px"},type:"text",placeholder:"Country, League or Team",value:y,onChange:L,startAdornment:e(U,{type:"button",sx:{p:"10px"},"aria-label":"search",children:e(pe,{})})}),R&&y.length>0?e(Pe,{children:e(be,{severity:"warning",children:"No results found"})}):Object.keys(w).map(o=>{const l=w[o];return c($e,{children:[c("div",{style:{display:"flex",gap:"5px"},children:[e("img",{src:l.emblem,width:30,height:30,style:{marginTop:"15px"}}),e("h2",{children:o})]}),c(Re,{children:[e("thead",{children:c("tr",{children:[e("th",{}),e("th",{}),e("th",{}),e("th",{}),e("th",{}),e("th",{})]})}),e("tbody",{children:l.matches.map(n=>c("tr",{onClick:p=>{p.target.tagName.toLowerCase()!=="a"&&P(`/match/${n.id}`)},children:[c("td",{children:[e("img",{src:n.homeTeam.crest,width:30}),e(F,{to:`/team/${n.homeTeam.id}`,children:n.homeTeam.shortName})]}),e("td",{"data-content":A(n.status,n.utcDate),children:A(n.status,n.utcDate)}),e("td",{children:c("div",{className:"score-container",children:[e("span",{children:n.score.fullTime.home}),e("span",{className:"score-separator",children:"-"}),e("span",{children:n.score.fullTime.away})]})}),e("td",{}),e("td",{}),c("td",{children:[e("img",{src:n.awayTeam.crest,width:30}),e(F,{to:`/team/${n.awayTeam.id}`,children:n.awayTeam.shortName})]})]},n.id))})]})]},o)})]})})]})]})};export{Be as default};
