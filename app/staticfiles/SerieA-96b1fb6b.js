import {
  s as a,
  L as b,
  a as p,
  r as f,
  z as k,
  b as e,
  F as v,
  d as w,
  j as n,
  u as M,
  A as D,
  B as j,
  i as G,
  C as N,
  G as C,
} from "./index-2c3973a7.js";
import { S as W } from "./Sidebar-9725e6fe.js";
import { u as A, H as E } from "./Header-ceecb3b6.js";
import { T as I, a as x } from "./Tabs-dbf2c3e2.js";
const B = a.main`
display: flex;
`,
  F = a.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
flex-grow: 1;
overflow-x: auto;
`,
  H = a.table`
width: 80%;
border-collapse: collapse;
th,td {
    text-align: left;

}
`,
  O = a(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;

`,
  U = a.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`,
  z = a.table`
width: 90%;
border-collapse: collapse;
th, td {
    text-align: left;
    padding: 8px;
}
`,
  T = a(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  P = () => {
    const h = A(),
      u = p((i) => i.SerieA.topScorers),
      c = p((i) => i.SerieA.topScorersStatus),
      s = p((i) => i.SerieA.table);
    f.useEffect(() => {
      c === "idle" && h(k());
    }, [h, c]);
    const g = (i) => {
        for (const l of s) if (l.team.shortName === i) return l.team.id;
        return "";
      },
      m = (i) => {
        for (const l of s) if (l.team.shortName === i) return l.team.crest;
        return "";
      };
    return e(v, {
      children:
        c === "loading"
          ? e(w, {})
          : e(U, {
              children: n(z, {
                children: [
                  e("thead", {
                    children: n("tr", {
                      children: [
                        e("th", { children: "Player" }),
                        e("th", { children: "Team" }),
                        e("th", { children: "Goals" }),
                      ],
                    }),
                  }),
                  e("tbody", {
                    children: u.map((i) =>
                      n(
                        "tr",
                        {
                          children: [
                            e("td", {
                              children: e(T, {
                                to: `/player/${i.id}`,
                                children: i.name,
                              }),
                            }),
                            n("td", {
                              children: [
                                e("img", {
                                  src: m(i.team),
                                  width: 30,
                                  height: 30,
                                }),
                                e(T, {
                                  to: `/team/${g(i.team)}`,
                                  children: i.team,
                                }),
                              ],
                            }),
                            e("td", { children: i.goals }),
                          ],
                        },
                        i.id
                      )
                    ),
                  }),
                ],
              }),
            }),
    });
  },
  R = a.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 80%;
gap: 20px;
`,
  V = a.div`
width: 100%;
`,
  q = a.table`
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
th, td{
text-align: left;
padding: 8px;
border-bottom: 1px solid #000;
}
th{
    background-color: #f2f2f2;
}
td:nth-child(2), td:nth-child(3) {
    width: 15%;
  }
`,
  $ = a(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  J = () => {
    const h = A(),
      u = p((t) => t.SerieA.upcomingMatches),
      c = p((t) => t.SerieA.upcomingMatchesStatus),
      s = p((t) => t.SerieA.table),
      g = M();
    f.useEffect(() => {
      c === "idle" && h(D());
    }, [c, h]);
    const m = (t) => {
        for (const r of s) if (r.team.shortName === t) return r.team.crest;
        return "";
      },
      i = (t) => {
        for (const r of s) if (r.team.shortName === t) return r.team.id;
        return "";
      },
      l = f.useMemo(() => {
        const t = {};
        for (const r of u) {
          const d = new Date(r.kickoff_time).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
          t[d] || (t[d] = []), t[d].push(r);
        }
        return t;
      }, [u]);
    return c === "loading"
      ? e(w, {})
      : e(R, {
          children: Object.keys(l).map((t) =>
            n(
              V,
              {
                children: [
                  e("h3", { children: t }),
                  n(q, {
                    children: [
                      e("thead", {
                        children: n("tr", {
                          children: [
                            e("th", { children: "Hometeam" }),
                            e("th", { children: "AwayTeam" }),
                          ],
                        }),
                      }),
                      e("tbody", {
                        children: l[t].map((r, S) =>
                          n(
                            "tr",
                            {
                              onClick: (d) => {
                                d.target.tagName.toLowerCase() !== "a" &&
                                  g(`/match/${r.id}`);
                              },
                              children: [
                                n("td", {
                                  children: [
                                    e("img", {
                                      src: `${m(r.home_team)}`,
                                      width: 30,
                                      height: 30,
                                    }),
                                    e($, {
                                      to: `/team/${i(r.home_team)}`,
                                      children: r.home_team,
                                    }),
                                  ],
                                }),
                                n("td", {
                                  children: [
                                    e("img", {
                                      src: `${m(r.away_team)}`,
                                      width: 30,
                                      height: 30,
                                    }),
                                    e($, {
                                      to: `/team/${i(r.away_team)}`,
                                      children: r.away_team,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            S
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
  K = a.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 80%;
gap: 20px;
`,
  Q = a.div`
width: 100%;
`,
  X = a.table`
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
    width: 40%;
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
  L = a(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  Y = () => {
    const h = A(),
      u = p((t) => t.SerieA.latestMatches),
      c = p((t) => t.SerieA.latestMatchesStatus),
      s = p((t) => t.SerieA.table),
      g = M();
    f.useEffect(() => {
      c === "idle" && h(j());
    }, [c, h]);
    const m = (t) => {
        for (const r of s) if (r.team.shortName === t) return r.team.id;
        return "";
      },
      i = (t) => {
        for (const r of s) if (r.team.shortName === t) return r.team.crest;
        return "";
      },
      l = f.useMemo(() => {
        const t = {};
        for (const r of u) {
          const d = new Date(r.kickoff_time).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
          t[d] || (t[d] = []), t[d].push(r);
        }
        return t;
      }, [u]);
    return c === "loading"
      ? e(w, {})
      : e(K, {
          children: Object.keys(l).map((t) =>
            n(
              Q,
              {
                children: [
                  e("h3", { children: t }),
                  n(X, {
                    children: [
                      e("thead", {
                        children: n("tr", {
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
                        children: l[t].map((r, S) =>
                          n(
                            "tr",
                            {
                              onClick: (d) => {
                                d.target.tagName.toLowerCase() !== "a" &&
                                  g(`/match/${r.id}`);
                              },
                              children: [
                                n("td", {
                                  children: [
                                    e("img", {
                                      src: `${i(r.home_team)}`,
                                      width: 30,
                                      height: 30,
                                      alt: "team logo",
                                    }),
                                    e(L, {
                                      to: `/team/${m(r.home_team)}`,
                                      children: r.home_team,
                                    }),
                                  ],
                                }),
                                e("td", { children: r.home_team_score }),
                                e("td", { children: "-" }),
                                e("td", { children: r.away_team_score }),
                                n("td", {
                                  children: [
                                    e("img", {
                                      src: `${i(r.away_team)}`,
                                      width: 30,
                                      height: 30,
                                      alt: "team logo",
                                    }),
                                    e(L, {
                                      to: `/team/${m(r.away_team)}`,
                                      children: r.away_team,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            S
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
  };
a.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;
a.table`
width: 80%;
border-collapse: collapse;
td, th {
    text-align: left;
    padding: 8px;
}
`;
a(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`;
const ie = () => {
  const h = A(),
    u = p((o) => o.SerieA.table),
    c = p((o) => o.SerieA.tableStatus),
    [s, g] = f.useState("table"),
    [m, i] = f.useState(!1),
    [l, t] = f.useState(window.innerWidth < 768),
    r = f.useRef(),
    S = G();
  f.useEffect(() => {
    c === "idle" && h(N());
  }, [c, h]);
  const d = () => {
      i(!m);
    },
    _ = (o) => {
      for (const y of u) if (y.team.name === o) return y.team.id;
      return "";
    };
  return (
    f.useEffect(() => {
      i(!1);
    }, [S]),
    n(v, {
      children: [
        e(C, {}),
        e(E, { toggleSidebar: d, isMobile: l, isOpen: m }),
        n(B, {
          children: [
            e(W, {
              isOpen: m,
              toggleSidebar: d,
              setIsMobile: t,
              hamburgerMenuRef: r,
            }),
            n(F, {
              children: [
                c === "loading"
                  ? e(w, {})
                  : n(v, {
                      children: [
                        n(I, {
                          value: s,
                          onChange: (o, y) => g(y),
                          children: [
                            e(x, { label: "Table", value: "table" }),
                            e(x, { label: "Top scorers", value: "topscorers" }),
                            e(x, {
                              label: "Upcomming Matches",
                              value: "upcommingmatches",
                            }),
                            e(x, {
                              label: "Latest Matches",
                              value: "latestmatches",
                            }),
                          ],
                        }),
                        s === "table" &&
                          n(H, {
                            children: [
                              e("thead", {
                                children: n("tr", {
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
                                    e("th", { children: "Points" }),
                                  ],
                                }),
                              }),
                              e("tbody", {
                                children: u.map((o) =>
                                  n(
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
                                          children: e(O, {
                                            to: `/team/${_(o.team.name)}`,
                                            children: o.team.name,
                                          }),
                                        }),
                                        e("td", { children: o.playedGames }),
                                        e("td", { children: o.won }),
                                        e("td", { children: o.draw }),
                                        e("td", { children: o.lost }),
                                        e("td", { children: o.goalsFor }),
                                        e("td", { children: o.goalsAgainst }),
                                        e("td", { children: o.goalDifference }),
                                        e("td", { children: o.points }),
                                      ],
                                    },
                                    o.position
                                  )
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                s === "topscorers" && e(P, {}),
                s === "upcommingmatches" && e(J, {}),
                s === "latestmatches" && e(Y, {}),
              ],
            }),
          ],
        }),
      ],
    })
  );
};
export { ie as default };
