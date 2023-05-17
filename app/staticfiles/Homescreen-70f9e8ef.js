import {
  s as r,
  L as M,
  a as f,
  r as n,
  i as D,
  u as L,
  a4 as E,
  j as s,
  F as u,
  b as e,
  G as I,
  d as N,
} from "./index-2c3973a7.js";
import { u as k, H as P } from "./Header-ceecb3b6.js";
import { S as H } from "./Sidebar-9725e6fe.js";
const O = r.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`,
  j = r.main`
display: flex;
`,
  C = r.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
margin: 1rem auto;
`,
  F = r.table`
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
    @media screen and (max-width: 768px){
      background: none;
      
    }
  }

  td:nth-child(1),
  td:nth-child(4) {
    width: 35%;
  }

  td:nth-child(2){
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

  @media screen and (max-width: 768px){
    td:nth-child(2)::before {
      content: "";
    }
  }

  td:nth-child(3),
  td:nth-child(5) {
   position: relative;
   left: 6rem;
   width: 5%;
   @media screen and (max-width: 950px){
    left: 0;
   }
}
.score-container {
  display: flex;
  gap: 20px;
}
`,
  x = r(M)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  A = () => {
    const c = k(),
      l = f((a) => a.TodaysMatches.data),
      o = f((a) => a.TodaysMatches.status),
      [d, g] = n.useState(!1),
      [y, b] = n.useState(window.innerWidth < 768);
    D();
    const w = n.useRef(),
      T = L();
    n.useEffect(() => {
      o === "idle" && c(E());
    }, [c, o]);
    const h = () => {
        g(!d);
      },
      m = n.useMemo(() => {
        const a = {};
        for (const i of l.matches || []) {
          const t = i.competition;
          a[t.name] || (a[t.name] = { emblem: t.emblem, matches: [] }),
            a[t.name].matches.push(i);
        }
        return a;
      }, [l.matches]),
      p = (a, i) => {
        switch (a) {
          case "TIMED":
            return S(i);
          case "POSTPONED":
            return "PP";
          case "IN_PLAY":
            return "LIVE";
          case "PAUSED":
            return "HT";
          case "FINISHED":
            return "FT";
        }
      },
      S = (a) => {
        const i = new Date(a),
          t = { hour: "2-digit", minute: "2-digit" };
        return i.toLocaleTimeString(void 0, t);
      };
    return s(u, {
      children: [
        e(I, {}),
        e(P, { toggleSidebar: h, isMobile: y, isOpen: d }),
        s(j, {
          children: [
            e(H, {
              isOpen: d,
              toggleSidebar: h,
              setIsMobile: b,
              hamburgerMenuRef: w,
            }),
            e(O, {
              children:
                o === "loading"
                  ? e(N, {})
                  : s(u, {
                      children: [
                        e("h1", { children: "Todays Matches" }),
                        Object.keys(m).map((a) => {
                          const i = m[a];
                          return s(
                            C,
                            {
                              children: [
                                s("div", {
                                  style: { display: "flex" },
                                  children: [
                                    e("img", {
                                      src: i.emblem,
                                      width: 30,
                                      height: 30,
                                      style: { marginTop: "15px" },
                                    }),
                                    e("h2", { children: a }),
                                  ],
                                }),
                                s(F, {
                                  children: [
                                    e("thead", {
                                      children: s("tr", {
                                        children: [
                                          e("th", {}),
                                          e("th", {}),
                                          e("th", {}),
                                          e("th", {}),
                                          e("th", {}),
                                          e("th", {}),
                                        ],
                                      }),
                                    }),
                                    e("tbody", {
                                      children: i.matches.map((t) =>
                                        s(
                                          "tr",
                                          {
                                            onClick: (v) => {
                                              v.target.tagName.toLowerCase() !==
                                                "a" && T(`/match/${t.id}`);
                                            },
                                            children: [
                                              s("td", {
                                                children: [
                                                  e("img", {
                                                    src: t.homeTeam.crest,
                                                    width: 30,
                                                  }),
                                                  e(x, {
                                                    to: `/team/${t.homeTeam.id}`,
                                                    children:
                                                      t.homeTeam.shortName,
                                                  }),
                                                ],
                                              }),
                                              e("td", {
                                                "data-content": p(
                                                  t.status,
                                                  t.utcDate
                                                ),
                                                children: p(
                                                  t.status,
                                                  t.utcDate
                                                ),
                                              }),
                                              e("td", {
                                                children: s("div", {
                                                  className: "score-container",
                                                  children: [
                                                    e("span", {
                                                      children:
                                                        t.score.fullTime.home,
                                                    }),
                                                    e("span", {
                                                      className:
                                                        "score-separator",
                                                      children: "-",
                                                    }),
                                                    e("span", {
                                                      children:
                                                        t.score.fullTime.away,
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              e("td", {}),
                                              e("td", {}),
                                              s("td", {
                                                children: [
                                                  e("img", {
                                                    src: t.awayTeam.crest,
                                                    width: 30,
                                                  }),
                                                  e(x, {
                                                    to: `/team/${t.awayTeam.id}`,
                                                    children:
                                                      t.awayTeam.shortName,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          t.id
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            a
                          );
                        }),
                      ],
                    }),
            }),
          ],
        }),
      ],
    });
  };
export { A as default };
