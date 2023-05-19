import{s as t,L as k,u as E,r,a as v,j as h,F,b as e,G as L,l as z}from"./index-ec194f5f.js";import{u as D,H as C}from"./Header-4232e664.js";const H=t.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,I=t.h1`
  font-size: 43px;
  color: #fafafa;
  margin-top: 40px;
  text-transform: uppercase;
  align-self: flex-start;
`,P=t.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 80%;
    margin: 0 auto;
  }
`,m=t.label`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
`,q=t.div`
  display: flex;
  align-self: flex-end;
`,B=t.button`
  font-size: 16px;
  width: 125px;
  border-radius: 4px;
  font-weight: 700;
  padding: 10px;
  border: none;
  color: hsl(229, 24%, 87%);
  padding: 15px;
  background-color: hsl(213, 96%, 18%);
  cursor: pointer;
`,x=t.input`
  font-size: 16px;
  font-weight: 300;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  cursor: pointer;
  font-weight: 700;
  background-color: transparent;
  border: 1px solid hsl(229, 24%, 87%);
`,G=t(k)`
  display: flex;
  align-self: flex-start;
  text-decoration: none;
  font-size: 16px;
  color: #fafafa;
  font-weight: 700;
  margin-top: -30px;
`,a=t.p`
  color: red;
  font-size: 16px;
`,T=()=>{const i=E(),g=D(),[l,y]=r.useState(""),[d,w]=r.useState(""),[n,b]=r.useState({email:"",password:""}),[S]=r.useState(!0),[c]=r.useState(""),{userInfo:p,loading:O,error:f}=v(s=>s.user),u=location.search?location.search.split("=")[1]:"/homescreen",j=s=>{s.preventDefault();const o={};l||(o.email="Email is required"),d||(o.password="Password is required"),b(o),Object.keys(o).length===0&&g(z({email:l,password:d}))};return r.useEffect(()=>{p&&i(u)},[i,p,u]),r.useEffect(()=>{S(Object.keys(n).length>0)},[n]),h(F,{children:[e(L,{}),e(C,{}),e(H,{children:h(P,{onSubmit:j,children:[c&&e(a,{children:c}),f&&e(a,{children:f}),e(I,{children:"Sign in"}),e(m,{htmlFor:"email",children:"Useremail"}),e(x,{type:"text",onChange:s=>y(s.target.value),id:"email",placeholder:"eg. Fredrik Andrén"}),e(a,{children:n.email}),e(m,{htmlFor:"password",children:"Password"}),e(x,{type:"password",id:"password",onChange:s=>w(s.target.value)}),e(a,{children:n.password}),e(q,{children:e(B,{type:"submit",children:"Login"})}),e(G,{to:"/register",children:"Dont have an account? click here"})]})})]})};export{T as default};
