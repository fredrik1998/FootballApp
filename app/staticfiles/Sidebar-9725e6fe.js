import {
  s as d,
  L as S,
  a as x,
  r as o,
  a5 as k,
  j as n,
  b as i,
} from "./index-2c3973a7.js";
import { u as j } from "./Header-ceecb3b6.js";
const z = d.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100vh;
    padding-left: 20px;
    margin-top: 2rem;
    gap: 50px;
  }

  &.expanded {
    @media (max-width: 767px) {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      padding-left: 20px;
      padding-top: 100px;
      width: 250px;
      gap: 30px;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 10;
      animation: slideIn 0.5s ease-in-out forwards;
    }
    @media screen and (min-height: 1200px) {
      gap: 70px;
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

`,
  s = d(S)`
text-decoration: none;
font-size: 20px;
color: #fafafa;
`,
  r = d.img`
display: flex;
align-items: flex-start;
flex-direction: column;
width: 30px;
height: 30px;
`;
d.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 300px;
background-color: #0F1B2D;
position: absolute;
z-index: 1;
`;
d.button`
background: none;

`;
const B = ({
  toggleSidebar: u,
  isOpen: c,
  setIsMobile: g,
  hamburgerMenuRef: l,
}) => {
  const f = j(),
    a = x((e) => e.Leagues.data),
    p = x((e) => e.Leagues.status),
    m = o.useRef(),
    [L] = o.useState(!1);
  o.useEffect(() => {
    const e = () => {
      const t = window.innerWidth;
      g(t < 768);
    };
    return (
      window.addEventListener("resize", e),
      () => {
        window.removeEventListener("resize", e);
      }
    );
  }, [g]),
    o.useEffect(() => {
      p === "idle" && f(k());
    }, [p, f]),
    o.useEffect(() => {
      const e = (t) => {
        c &&
          m.current &&
          !m.current.contains(t.target) &&
          (!l.current || !l.current.contains(t.target)) &&
          window.innerWidth < 768 &&
          u(!1);
      };
      return (
        document.addEventListener("mousedown", e),
        () => {
          document.removeEventListener("mousedown", e);
        }
      );
    }, [u, l, c]);
  const h = () => {
      const e = a.find((t) => t.name === "UEFA Champions League");
      return e ? e.area.flag : "";
    },
    w = () => {
      const e = a.find((t) => t.name === "Premier League");
      return e ? e.emblem : "";
    },
    b = () => {
      const e = a.find((t) => t.name === "Serie A");
      return e ? e.emblem : "";
    },
    E = () => {
      const e = a.find((t) => t.name === "Bundesliga");
      return e ? e.emblem : "";
    },
    y = () => {
      const e = a.find((t) => t.name === "Ligue 1");
      return e ? e.emblem : "";
    },
    v = () => {
      const e = a.find((t) => t.name === "Primera Division");
      return e ? e.emblem : "";
    };
  return n(z, {
    className:
      c || window.innerWidth >= 768
        ? "expanded"
        : L
        ? "expanded slideIn"
        : "slideOut",
    ref: m,
    animate: c ? "open" : "closed",
    children: [
      i("h1", { style: { margin: 0 }, children: "Leagues" }),
      n(s, { to: "/PL", children: [i(r, { src: w() }), "Premier League"] }),
      n(s, { to: "/CL", children: [i(r, { src: h() }), "Champions League"] }),
      n(s, { to: "/SA", children: [i(r, { src: b() }), "Serie A"] }),
      n(s, { to: "/BL1", children: [i(r, { src: E() }), "Bundesliga"] }),
      n(s, { to: "/FL1", children: [i(r, { src: y() }), "Ligue 1"] }),
      n(s, { to: "/PD", children: [i(r, { src: v() }), "La Liga"] }),
    ],
  });
};
export { B as S };
