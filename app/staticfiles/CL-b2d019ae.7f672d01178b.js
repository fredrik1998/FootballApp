import {
  s as i,
  L as b,
  a as h,
  r as x,
  m as _,
  j as r,
  F as w,
  b as e,
  G as k,
  d as S,
  u as D,
  n as G,
  o as j,
  i as F,
  p as I,
} from "./index-57ff3d1b.js";
import { u as T, H as E } from "./Header-22b7e31d.js";
import { S as N } from "./Sidebar-2ae3e9e3.js";
import { T as A, a as W } from "./Tabs-307491b3.js";
const O = i.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
margin-top: 2rem;
overflow-x: hidden;
`,
  U = i.table`
width: 90%;
th, td {
text-align: left;
padding-left: 8px;
padding: 10px;
}
`,
  M = i(b)`
text-decoration: none;
color: #fafafa;
cursor: pointer;
`,
  B = () => {
    const m = T(),
      f = h((n) => n.championsLeague.topScorers),
      l = h((n) => n.championsLeague.topScorersStatus),
      c = h((n) => n.championsLeague.table);
    x.useEffect(() => {
      l === "idle" && m(_());
    }, [l, m]);
    const L = (n) => {
        for (const p in c)
          for (const a of c[p])
            if (
              (console.log(`Comparing: ${a.team.name} === ${n}`),
              a.team.shortName === n)
            )
              return a.team.crest;
        return "";
      },
      g = (n) => {
        for (const p in c)
          for (const a of c[p]) if (a.team.shortName === n) return a.team.id;
        return "";
      };
    return r(w, {
      children: [
        e(k, {}),
        l === "loading"
          ? e(S, {})
          : e(O, {
              children: r(U, {
                children: [
                  e("thead", {
                    children: r("tr", {
                      children: [
                        e("th", { children: "Player" }),
                        e("th", { children: "Team" }),
                        e("th", { children: "Goals" }),
                      ],
                    }),
                  }),
                  e("tbody", {
                    children: f.map((n) =>
                      r(
                        "tr",
                        {
                          children: [
                            e("td", {
                              children: e(M, {
                                to: `/player/${n.id}`,
                                children: n.name,
                              }),
                            }),
                            r("td", {
                              children: [
                                e("img", { src: L(n.team), width: 30 }),
                                e(M, {
                                  to: `/team/${g(n.team)}`,
                                  children: n.team,
                                }),
                              ],
                            }),
                            e("td", { children: n.goals }),
                          ],
                        },
                        n.id
                      )
                    ),
                  }),
                ],
              }),
            }),
      ],
    });
  },
  H = i.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 80%;
gap: 20px;
`,
  R = i.div`
 width: 100%;
`,
  z = i.table`
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
  $ = i(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  P = () => {
    const m = T(),
      f = h((t) => t.championsLeague.upcomingMatches),
      l = h((t) => t.championsLeague.upcomingMatchesStatus);
    h((t) => t.championsLeague.upcomingMatchesError);
    const c = h((t) => t.championsLeague.table),
      L = D();
    x.useEffect(() => {
      l === "idle" && m(G());
    }, [l, m]);
    const g = (t) => {
        switch (t) {
          case "QUARTER_FINALS":
            return "QF";
          case "SEMI_FINALS":
            return "SF";
          case "FINAL":
            return "F";
          default:
            return t;
        }
      },
      n = (t) => {
        for (const o in c)
          for (const d of c[o]) if (d.team.name === t) return d.team.crest;
        return "";
      },
      p = (t) => {
        for (const o in c)
          for (const d of c[o]) if (d.team.name === t) return d.team.id;
        return "";
      },
      a = {};
    for (const t of f) {
      console.log("Match object:", t), console.log("Kickoff time:", t.utcDate);
      const d = new Date(t.utcDate).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      a[d] || (a[d] = []), a[d].push(t);
    }
    return e(w, {
      children:
        l === "loading"
          ? e(S, {})
          : e(H, {
              children: Object.keys(a).map((t) =>
                r(
                  R,
                  {
                    children: [
                      e("h3", { children: t }),
                      r(z, {
                        children: [
                          e("thead", {
                            children: r("tr", {
                              children: [
                                e("th", { children: "Stage" }),
                                e("th", { children: "Hometeam" }),
                                e("th", { children: "Awayteam" }),
                              ],
                            }),
                          }),
                          e("tbody", {
                            children: a[t].map((o, d) =>
                              r(
                                "tr",
                                {
                                  onClick: (v) => {
                                    v.target.tagName.toLowerCase() !== "a" &&
                                      L(`/match/${o.id}`);
                                  },
                                  children: [
                                    e("td", { children: g(o.stage) }),
                                    r("td", {
                                      children: [
                                        e("img", {
                                          src: n(o.homeTeam.name),
                                          alt: `${o.homeTeam.name} logo`,
                                          width: "30",
                                          height: "30",
                                        }),
                                        e($, {
                                          to: `/team/${p(o.homeTeam.name)}`,
                                          children: o.homeTeam.name,
                                        }),
                                      ],
                                    }),
                                    r("td", {
                                      children: [
                                        e("img", {
                                          src: n(o.awayTeam.name),
                                          alt: `${o.awayTeam.name} logo`,
                                          width: "30",
                                          height: "30",
                                        }),
                                        e($, {
                                          to: `/team/${p(o.awayTeam.name)}`,
                                          children: o.awayTeam.name,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                d
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
            }),
    });
  },
  Q = i.main`
display: flex;
`,
  V = i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-grow: 1;
  overflow-x: auto;
`,
  K = i.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 100px;
@media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`,
  q = i.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,
  J = i.table`
width: 100%;
th, td{
  text-align: left;
  border-collapse: collapse;
  padding: 4px;
}
`,
  X = i(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`;
i.main`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2rem;
height: 100%;
width: 100%;
`;
i.table`
width: 80%;
border-collapse: collapse;
th,td{
    text-align: left;
    padding: 8px;
}
`;
i(b)`
text-decoration: none;
color: #fafafa;
cursor: pointer;
`;
const Y = i.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 80%;
gap: 20px;
`,
  Z = i.div`
width: 100%;
`,
  ee = i.table`
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
  C = i(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  te = () => {
    const m = T(),
      f = h((a) => a.championsLeague.latestMatches),
      l = h((a) => a.championsLeague.latestMatchesStatus),
      c = h((a) => a.championsLeague.table),
      L = D();
    x.useEffect(() => {
      l === "idle" && m(j());
    }, [m, l]);
    const g = (a) => {
        for (const t in c)
          for (const o of c[t]) if (o.team.shortName === a) return o.team.crest;
        return "";
      },
      n = (a) => {
        for (const t in c)
          for (const o of c[t]) if (o.team.shortName === a) return o.team.id;
        return "";
      },
      p = x.useMemo(() => {
        const a = {};
        for (const t of f) {
          const d = new Date(t.kickoff_time).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
          a[d] || (a[d] = []), a[d].push(t);
        }
        return a;
      }, [f]);
    return l === "loading"
      ? e(S, {})
      : e(Y, {
          children: Object.keys(p).map((a) =>
            r(
              Z,
              {
                children: [
                  e("h3", { children: a }),
                  r(ee, {
                    children: [
                      e("thead", {
                        children: r("tr", {
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
                        children: p[a].map((t, o) =>
                          r(
                            "tr",
                            {
                              onClick: (d) => {
                                d.target.tagName.toLowerCase() !== "a" &&
                                  L(`/match/${t.id}`);
                              },
                              children: [
                                r("td", {
                                  children: [
                                    e("img", {
                                      src: g(t.home_team),
                                      width: 30,
                                      alt: t.home_team,
                                    }),
                                    e(C, {
                                      to: `/team/${n(t.home_team)}`,
                                      children: t.home_team,
                                    }),
                                  ],
                                }),
                                e("td", { children: t.home_team_score }),
                                e("td", { children: "-" }),
                                e("td", { children: t.away_team_score }),
                                r("td", {
                                  children: [
                                    e("img", {
                                      src: g(t.away_team),
                                      width: 30,
                                      alt: t.away_team,
                                    }),
                                    e(C, {
                                      to: `/team/${n(t.away_team)}`,
                                      children: t.away_team,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            o
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              },
              a
            )
          ),
        });
  },
  y = i(W)`
color: #fafafa;
`,
  ie = () => {
    const m = T(),
      f = h((u) => u.championsLeague.table),
      l = h((u) => u.championsLeague.tableStatus),
      [c, L] = x.useState("table"),
      [g, n] = x.useState(!1),
      [p, a] = x.useState(window.innerWidth < 768),
      t = x.useRef(),
      o = F();
    x.useEffect(() => {
      l === "idle" && m(I());
    }, [f, m]),
      x.useEffect(() => {
        n(!1);
      }, [o]);
    const d = () => {
        n(!g);
      },
      v = (u) => u.replace(/_/g, " ");
    return r(w, {
      children: [
        e(k, {}),
        e(E, { toggleSidebar: d, isMobile: p, isOpen: g }),
        r(Q, {
          children: [
            e(N, {
              isOpen: g,
              toggleSidebar: d,
              setIsMobile: a,
              hamburgerMenuRef: t,
            }),
            r(V, {
              children: [
                l === "loading"
                  ? e(S, {})
                  : r(w, {
                      children: [
                        r(A, {
                          value: c,
                          onChange: (u, s) => L(s),
                          centered: !0,
                          children: [
                            e(y, { label: "Table", value: "table" }),
                            e(y, { label: "Top Scorers", value: "topScorers" }),
                            e(y, {
                              label: "Upcoming Matches",
                              value: "upcommingMatches",
                            }),
                            e(y, {
                              label: "Latest Matches",
                              value: "latestmatches",
                            }),
                          ],
                        }),
                        c === "table" &&
                          e(K, {
                            children: Object.keys(f).map((u) =>
                              r(
                                q,
                                {
                                  children: [
                                    e("h2", { children: v(u) }),
                                    r(J, {
                                      children: [
                                        e("thead", {
                                          children: r("tr", {
                                            children: [
                                              e("th", {}),
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
                                          children: f[u].map((s) =>
                                            r(
                                              "tr",
                                              {
                                                children: [
                                                  e("td", {
                                                    children: s.position,
                                                  }),
                                                  e("td", {
                                                    children: e("img", {
                                                      style: { width: "30px" },
                                                      src: s.team.crest,
                                                      alt: s.team.name,
                                                    }),
                                                  }),
                                                  e("td", {
                                                    children: e(X, {
                                                      to: `/team/${s.team.id}`,
                                                      children:
                                                        s.team.shortName,
                                                    }),
                                                  }),
                                                  e("td", {
                                                    children: s.playedGames,
                                                  }),
                                                  e("td", { children: s.won }),
                                                  e("td", { children: s.draw }),
                                                  e("td", { children: s.lost }),
                                                  e("td", {
                                                    children: s.goalsFor,
                                                  }),
                                                  e("td", {
                                                    children: s.goalsAgainst,
                                                  }),
                                                  e("td", {
                                                    children: s.goalDifference,
                                                  }),
                                                  e("td", {
                                                    children: s.points,
                                                  }),
                                                ],
                                              },
                                              s.position
                                            )
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                u
                              )
                            ),
                          }),
                      ],
                    }),
                c === "topScorers" && e(B, {}),
                c === "upcommingMatches" && e(P, {}),
                c === "latestmatches" && e(te, {}),
              ],
            }),
          ],
        }),
      ],
    });
  };
export { ie as default };
