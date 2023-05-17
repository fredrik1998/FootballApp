import {
  s as r,
  L as x,
  a as f,
  r as g,
  D as k,
  b as e,
  d as S,
  j as i,
  u as _,
  E as D,
  H as G,
  i as j,
  I as E,
  F as T,
  G as I,
} from "./index-2c3973a7.js";
import { u as B, H as N } from "./Header-ceecb3b6.js";
import { S as W } from "./Sidebar-9725e6fe.js";
import { T as C, a as w } from "./Tabs-dbf2c3e2.js";
const H = r.main`
display: flex;
`,
  U = r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-grow: 1;
  overflow-x: auto;
`;
r.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const A = r.table`
width: 70%;
th, td{
  text-align: left;
  border-collapse: collapse;
}
`,
  F = r(x)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  O = r.main`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2rem;
height: 100%;
width: 100%;
`,
  z = r.table`
width: 90%;
border-collapse: collapse;
th,td{
    text-align: left;
    padding: 8px;
}
`,
  L = r(x)`
text-decoration: none;
color: #fafafa;
cursor: pointer;
`,
  P = () => {
    const h = B(),
      m = f((a) => a.Bundesliga.topScorers),
      d = f((a) => a.Bundesliga.topScorersStatus),
      l = f((a) => a.Bundesliga.table);
    g.useEffect(() => {
      d === "idle" && h(k());
    }, [d, h]);
    const p = (a) => {
        for (const s of l) if (s.team.shortName === a) return s.team.crest;
        return "";
      },
      u = (a) => {
        for (const s of l) if (s.team.shortName === a) return s.team.id;
      };
    return d === "loading"
      ? e(S, {})
      : e(O, {
          children: i(z, {
            children: [
              e("thead", {
                children: i("tr", {
                  children: [
                    e("td", { children: "Player" }),
                    e("td", { children: "Team" }),
                    e("td", { children: "Goal" }),
                  ],
                }),
              }),
              e("tbody", {
                children: m.map((a) =>
                  i(
                    "tr",
                    {
                      children: [
                        e("td", {
                          children: e(L, {
                            to: `/player/${a.id}`,
                            children: a.name,
                          }),
                        }),
                        i("td", {
                          children: [
                            e("img", { src: p(a.team), width: 30 }),
                            e(L, {
                              to: `/team/${u(a.team)}`,
                              children: a.team,
                            }),
                          ],
                        }),
                        e("td", { children: a.goals }),
                      ],
                    },
                    a.id
                  )
                ),
              }),
            ],
          }),
        });
  };
r.main`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2rem;
height: 100%;
width: 100%;
`;
r.table`
width: 80%;
border-collapse: collapse;
th,td{
    text-align: left;
    padding: 8px;
}
`;
r(x)`
text-decoration: none;
color: #fafafa;
cursor: pointer;
`;
const R = r.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 80%;
gap: 20px;
`,
  V = r.div`
 width: 100%;
`,
  q = r.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;

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
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #000;
  }

  th {
    background-color: #f2f2f2;
  }

  td:nth-child(2), td:nth-child(3) {
    width: 40%;
  }
`,
  M = r(x)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  J = () => {
    const h = B(),
      m = f((t) => t.Bundesliga.upcomingMatches),
      d = f((t) => t.Bundesliga.upcomingMatchesStatus),
      l = f((t) => t.Bundesliga.table),
      p = _();
    g.useEffect(() => {
      d === "idle" && h(D());
    }, [d, h]);
    const u = (t) => {
        for (const n of l) if (n.team.name === t) return n.team.crest;
        return "";
      },
      a = (t) => {
        for (const n of l) if (n.team.name === t) return n.team.id;
        return "";
      },
      s = g.useMemo(() => {
        const t = {};
        for (const n of m) {
          const c = new Date(n.kickoff_time).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
          t[c] || (t[c] = []), t[c].push(n);
        }
        return t;
      }, [m]);
    return d === "loading"
      ? e(S, {})
      : e(R, {
          children: Object.keys(s).map((t) =>
            i(
              V,
              {
                children: [
                  e("h3", { children: t }),
                  i(q, {
                    children: [
                      e("thead", {
                        children: i("tr", {
                          children: [
                            e("th", { children: "Hometeam" }),
                            e("th", { children: "Awayteam" }),
                          ],
                        }),
                      }),
                      e("tbody", {
                        children: s[t].map((n, b) =>
                          i(
                            "tr",
                            {
                              onClick: (c) => {
                                c.target.tagName !== "a" && p(`/match/${n.id}`);
                              },
                              children: [
                                i("td", {
                                  children: [
                                    e("img", {
                                      src: u(n.home_team),
                                      width: 30,
                                    }),
                                    e(M, {
                                      to: `/team/${a(n.home_team)}`,
                                      children: n.home_team,
                                    }),
                                  ],
                                }),
                                i("td", {
                                  children: [
                                    e("img", {
                                      src: u(n.away_team),
                                      width: 30,
                                    }),
                                    e(M, {
                                      to: `/team/${a(n.away_team)}`,
                                      children: n.away_team,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            b
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              },
              t
            )
          ),
        });
  },
  K = r.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 80%;
gap: 20px;
`,
  Q = r.div`
width: 100%;
`,
  X = r.table`
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
`,
  $ = r(x)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  Y = () => {
    const h = B(),
      m = f((t) => t.Bundesliga.latestMatches),
      d = f((t) => t.Bundesliga.latestMatchesStatus),
      l = f((t) => t.Bundesliga.table),
      p = _();
    g.useEffect(() => {
      d === "idle" && h(G());
    }, [d, h]);
    const u = (t) => {
        for (const n of l) if (n.team.shortName === t) return n.team.crest;
        return "";
      },
      a = (t) => {
        for (const n of l) if (n.team.shortName === t) return n.team.id;
        return "";
      },
      s = g.useMemo(() => {
        const t = {};
        for (const n of m) {
          const c = new Date(n.kickoff_time).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
          t[c] || (t[c] = []), t[c].push(n);
        }
        return t;
      }, [m]);
    return d === "loading"
      ? e(S, {})
      : e(K, {
          children: Object.keys(s).map((t) =>
            i(
              Q,
              {
                children: [
                  e("h3", { children: t }),
                  i(X, {
                    children: [
                      e("thead", {
                        children: i("tr", {
                          children: [
                            e("th", { children: "Hometeam" }),
                            e("th", {}),
                            e("th", {}),
                            e("th", {}),
                            e("th", { children: "Awayteam" }),
                          ],
                        }),
                      }),
                      e("tbody", {
                        children: s[t].map((n, b) =>
                          i(
                            "tr",
                            {
                              onClick: (c) => {
                                c.target.tagName.toLowerCase() !== "a" &&
                                  p(`/match/${n.id}`);
                              },
                              children: [
                                i("td", {
                                  children: [
                                    e("img", {
                                      src: u(n.home_team),
                                      width: 30,
                                    }),
                                    e($, {
                                      to: `/team/${a(n.home_team)}`,
                                      children: n.home_team,
                                    }),
                                  ],
                                }),
                                e("td", { children: n.home_team_score }),
                                e("td", { children: "-" }),
                                e("td", { children: n.away_team_score }),
                                i("td", {
                                  children: [
                                    e("img", {
                                      src: u(n.away_team),
                                      width: 30,
                                    }),
                                    e($, {
                                      to: `/team/${a(n.away_team)}`,
                                      children: n.away_team,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            b
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              },
              t
            )
          ),
        });
  },
  ae = () => {
    const h = B(),
      m = f((o) => o.Bundesliga.table),
      d = f((o) => o.Bundesliga.tableStatus),
      [l, p] = g.useState("table"),
      [u, a] = g.useState(!1),
      [s, t] = g.useState(window.innerWidth < 768),
      n = g.useRef(),
      b = j();
    g.useEffect(() => {
      d === "idle" && h(E());
    }, [d, h]),
      g.useEffect(() => {
        a(!1);
      }, [b]);
    const c = (o) => {
        for (const y of m) if (y.team.name === o) return y.team.id;
        return "";
      },
      v = () => {
        a(!u);
      };
    return i(T, {
      children: [
        e(I, {}),
        e(N, { toggleSidebar: v, isMobile: s, isOpen: u }),
        i(H, {
          children: [
            e(W, {
              isOpen: u,
              toggleSidebar: v,
              setIsMobile: t,
              hamburgerMenuRef: n,
            }),
            i(U, {
              children: [
                d === "loading"
                  ? e(S, {})
                  : i(T, {
                      children: [
                        i(C, {
                          value: l,
                          onChange: (o, y) => p(y),
                          children: [
                            e(w, { label: "Table", value: "table" }),
                            e(w, { label: "Top scorers", value: "topscorers" }),
                            e(w, {
                              label: "Upcomming Matches",
                              value: "upcommingmatches",
                            }),
                            e(w, {
                              label: "Latest Matches",
                              value: "latestmatches",
                            }),
                          ],
                        }),
                        l === "table" &&
                          i(A, {
                            children: [
                              e("thead", {
                                children: i("tr", {
                                  children: [
                                    e("th", { style: { padding: "5px" } }),
                                    e("th", { children: "Team" }),
                                    e("th", {}),
                                    e("th", { children: "MP" }),
                                    e("th", { children: "W" }),
                                    e("th", { children: "D" }),
                                    e("th", { children: "L" }),
                                    e("th", { children: "GF" }),
                                    e("th", { children: "GA" }),
                                    e("th", { children: "GD" }),
                                    e("th", { children: "P" }),
                                  ],
                                }),
                              }),
                              e("tbody", {
                                children: m.map(
                                  (o) => (
                                    console.log(m),
                                    i(
                                      "tr",
                                      {
                                        children: [
                                          e("th", { children: o.position }),
                                          e("img", {
                                            style: {
                                              width: "30px",
                                              marginTop: "12px",
                                            },
                                            src: o.team.crest,
                                            alt: o.team.name,
                                          }),
                                          e("td", {
                                            children: e(F, {
                                              to: `/team/${c(o.team.name)}`,
                                              children: o.team.name,
                                            }),
                                          }),
                                          e("td", { children: o.playedGames }),
                                          e("td", { children: o.won }),
                                          e("td", { children: o.draw }),
                                          e("td", { children: o.lost }),
                                          e("td", { children: o.goalsFor }),
                                          e("td", { children: o.goalsAgainst }),
                                          e("td", {
                                            children: o.goalDifference,
                                          }),
                                          e("td", { children: o.points }),
                                        ],
                                      },
                                      o.position
                                    )
                                  )
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                l === "topscorers" && e(P, {}),
                l === "upcommingmatches" && e(J, {}),
                l === "latestmatches" && e(Y, {}),
              ],
            }),
          ],
        }),
      ],
    });
  };
export { ae as default };
