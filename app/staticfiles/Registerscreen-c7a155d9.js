import {
  s,
  L as z,
  r,
  u as C,
  a as q,
  j as g,
  F as L,
  b as e,
  G as R,
  c as D,
} from "./index-57ff3d1b.js";
import { u as H, H as I } from "./Header-22b7e31d.js";
const N = s.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`,
  G = s.h1`
font-size: 43px;
color: #fafafa;
margin-top: 40px;
text-transform: uppercase;
align-self: flex-start;
margin-bottom: 2rem;
`,
  O = s.form`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
width: 50%;
@media screen and (max-width: 767px) {
width: 80%;
}
`,
  l = s.label`
display: flex;
justify-content: flex-start;
align-items: flex-start;
font-size: 16px;
`;
s.div`
display: flex;
justify-content: center;
align-items: center;
align-self: flex-end;
`;
const A = s.button`
display: flex;
align-self: flex-end;
font-size: 16px;
border-radius: 5px;
font-weight: 700;
padding: 10px;
border: none;
color: hsl(229, 24%, 87%);
padding: 15px;
background-color: hsl(213, 96%, 18%);
cursor: pointer;
`,
  d = s.input`
font-size: 16px;
font-weight: 300;
border-radius: 10px;
padding: 15px;
width: 100%;
cursor: pointer;
font-weight: 700;
background-color: transparent;
border: 1px solid hsl(229, 24%, 87%);
`,
  B = s(z)`
text-decoration: none;
font-size: 16px;
color: #fafafa;
font-weight: 700;
margin-top: -30px;
`,
  n = s.p`
color: red;
font-size: 16px;`,
  W = () => {
    const [c, x] = r.useState(""),
      [f, w] = r.useState(""),
      [i, y] = r.useState(""),
      [m, S] = r.useState(""),
      [u, b] = r.useState(""),
      [v] = r.useState(!0),
      P = C(),
      j = H(),
      [a, k] = r.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }),
      E = (t) => {
        t.preventDefault();
        const o = {};
        c || (o.name = "Name is required"),
          f || (o.email = "Email is required"),
          i || (o.password = "Password is required"),
          m || (o.confirmPassword = "Password is required"),
          k(o),
          i !== m
            ? b("Password does not match")
            : Object.keys(o).length === 0 &&
              j(D({ name: c, email: f, password: i }));
      },
      p = location.search ? location.search.split("=")[1] : "/",
      { userInfo: F, loading: M, error: h } = q((t) => t.user);
    return (
      r.useEffect(() => {
        v(Object.keys(a).length > 0), F && P(p);
      }, [a]),
      g(L, {
        children: [
          e(I, {}),
          e(R, {}),
          e(N, {
            children: g(O, {
              onSubmit: E,
              children: [
                u && e(n, { children: u }),
                h && e(n, { children: h }),
                e(G, { children: "Register" }),
                e(l, { htmlFor: "name", children: "Username" }),
                e(d, {
                  type: "name",
                  id: "name",
                  placeholder: "eg. fredrik1998",
                  value: c,
                  onChange: (t) => x(t.target.value),
                }),
                e(n, { children: a.name }),
                e(l, { htmlFor: "email", children: "Email" }),
                e(d, {
                  type: "email",
                  id: "email",
                  placeholder: "eg. Rookie11421@gmail.com",
                  value: f,
                  onChange: (t) => w(t.target.value),
                }),
                e(n, { children: a.email }),
                e(l, { htmlFor: "password", children: "Password" }),
                e(d, {
                  type: "password",
                  id: "password",
                  value: i,
                  onChange: (t) => y(t.target.value),
                }),
                e(n, { children: a.password }),
                e(l, {
                  htmlFor: "confirmpassword",
                  children: "Confirm Password",
                }),
                e(d, {
                  type: "password",
                  id: "confirmpassword",
                  value: m,
                  onChange: (t) => S(t.target.value),
                }),
                e(n, { children: a.confirmPassword }),
                e(A, { children: "Register" }),
                e(B, {
                  to: p ? `/login?redirect=${p}` : "/login",
                  children: " Already have an account? Sign in",
                }),
              ],
            }),
          }),
        ],
      })
    );
  };
export { W as default };
