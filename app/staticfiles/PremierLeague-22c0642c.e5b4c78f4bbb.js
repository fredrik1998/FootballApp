import {
  s as c,
  L as w,
  a as m,
  r as u,
  f as A,
  b as e,
  F as b,
  d as x,
  j as i,
  u as M,
  e as j,
  g as G,
  G as D,
  h as E,
  i as W,
  k as I,
} from "./index-57ff3d1b.js";
import { u as y, H as C } from "./Header-22b7e31d.js";
import { S as N } from "./Sidebar-2ae3e9e3.js";
import { T as B, a as T } from "./Tabs-307491b3.js";
const F = c.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`,
  H = c.table`
width: 90%;
border-collapse: collapse;
th, td {
    text-align: left;
    padding: 8px;
  }

  th:nth-child(1), td:nth-child(1) {
    width: 40%;
  }

  th:nth-child(2), td:nth-child(2) {
    width: 40%;
  }

  th:nth-child(3), td:nth-child(3) {
    width: 20%;
  }
`,
  $ = c(w)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  O = () => {
    const l = y(),
      f = m((t) => t.premierLeague.topScorers),
      d = m((t) => t.premierLeague.topScorersStatus),
      s = m((t) => t.premierLeague.table);
    u.useEffect(() => {
      d === "idle" && l(A());
    }, [d, l]);
    const g = (t) => {
        for (const a of s) if (a.team.shortName === t) return a.team.crest;
        return "";
      },
      p = (t) => {
        for (const a of s) if (a.team.name === t) return a.team.id;
        return "";
      };
    return e(b, {
      children:
        d === "loading"
          ? e(x, {})
          : e(F, {
              children: i(H, {
                children: [
                  e("thead", {
                    children: i("tr", {
                      children: [
                        e("th", { children: "Player" }),
                        e("th", { children: "Team" }),
                        e("th", { children: "Goals" }),
                      ],
                    }),
                  }),
                  e("tbody", {
                    children: f.map((t) =>
                      i(
                        "tr",
                        {
                          children: [
                            e("td", {
                              children: e($, {
                                to: `/player/${t.id}`,
                                children: t.name,
                              }),
                            }),
                            i("td", {
                              children: [
                                e("img", {
                                  src: g(t.team),
                                  alt: t.team,
                                  width: 30,
                                }),
                                e($, {
                                  to: `/team/${p(t.team)}`,
                                  children: t.team,
                                }),
                              ],
                            }),
                            e("td", { children: t.goals }),
                          ],
                        },
                        t.id
                      )
                    ),
                  }),
                ],
              }),
            }),
    });
  },
  U = c.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 80%;
gap: 20px;
`,
  z = c.div`
 width: 100%;
`,
  R = c.table`
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
  P = c(w)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  V = () => {
    const l = y(),
      f = m((n) => n.premierLeague.upcomingMatches),
      d = m((n) => n.premierLeague.upcomingMatchesStatus),
      s = m((n) => n.premierLeague.table),
      g = M();
    u.useEffect(() => {
      d === "idle" && l(j());
    }, [d, l]);
    const p = (n) => {
        for (const r of s) if (r.team.name === n) return r.team.crest;
        return "";
      },
      t = (n) => {
        for (const r of s) if (r.team.name === n) return r.team.id;
        return "";
      },
      a = {};
    for (const n of f) {
      const h = new Date(n.kickoff_time).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      a[h] || (a[h] = []), a[h].push(n);
    }
    return e(b, {
      children:
        d === "loading"
          ? e(x, {})
          : e(U, {
              children: Object.keys(a).map((n) =>
                i(
                  z,
                  {
                    children: [
                      e("h3", { children: n }),
                      i(R, {
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
                            children: a[n].map((r, h) =>
                              i(
                                "tr",
                                {
                                  onClick: (L) => {
                                    L.target.tagName.toLowerCase() !== "a" &&
                                      g(`/match/${r.id}`);
                                  },
                                  children: [
                                    i("td", {
                                      children: [
                                        e("img", {
                                          src: p(r.home_team),
                                          width: 30,
                                          height: 30,
                                          alt: r.home_team,
                                        }),
                                        e(P, {
                                          to: `/team/${t(r.home_team)}`,
                                          children: r.home_team,
                                        }),
                                      ],
                                    }),
                                    i("td", {
                                      children: [
                                        e("img", {
                                          src: p(r.away_team),
                                          width: 30,
                                          height: 30,
                                          alt: r.away_team,
                                        }),
                                        e(P, {
                                          to: `/team/${t(r.away_team)}`,
                                          children: r.away_team,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                h
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  },
                  n
                )
              ),
            }),
    });
  },
  q = c.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`,
  J = c.table`
width: 80%;
border-collapse: collapse;
td, th {
    text-align: left;
    padding: 8px;
}
`,
  _ = c(w)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  K = () => {
    const l = y(),
      f = m((t) => t.premierLeague.topAssists),
      d = m((t) => t.premierLeague.topAssistsStatus),
      s = m((t) => t.premierLeague.table);
    u.useEffect(() => {
      d === "idle" && l(G());
    }, [d, l]);
    const g = (t) => {
        for (const a of s) if (a.team.name === t) return a.team.crest;
        return "";
      },
      p = (t) => {
        for (const a of s) if (a.team.name === t) return a.team.id;
        return "";
      };
    return i(b, {
      children: [
        e(D, {}),
        e(q, {
          children:
            d === "loading"
              ? e(x, {})
              : i(J, {
                  children: [
                    e("thead", {
                      children: i("tr", {
                        children: [
                          e("th", { children: "Player" }),
                          e("th", { children: "Team" }),
                          e("th", { children: "Assists" }),
                        ],
                      }),
                    }),
                    e("tbody", {
                      children: f.map((t) =>
                        i(
                          "tr",
                          {
                            children: [
                              e("td", {
                                children: e(_, {
                                  to: `/player/${t.id}`,
                                  children: t.name,
                                }),
                              }),
                              i("td", {
                                children: [
                                  e("img", { src: g(t.team), width: 30 }),
                                  e(_, {
                                    to: `/team/${p(t.team)}`,
                                    children: t.team,
                                  }),
                                ],
                              }),
                              e("td", { children: t.assists }),
                            ],
                          },
                          t.id
                        )
                      ),
                    }),
                  ],
                }),
        }),
      ],
    });
  },
  Q = c.main`
display: flex;
`,
  X = c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-grow: 1;
  overflow-x: auto;
`;
c.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Y = c.table`
width: 70%;
@media screen and (max-width: 768px) {
  width: 90%;
}
th, td{
  text-align: left;
  border-collapse: collapse;
}
`,
  Z = c(w)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  ee = c.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 80%;
gap: 20px;
`,
  te = c.div`
width: 100%;
`,
  ne = c.table`
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
  k = c(w)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  re = () => {
    const l = y(),
      f = m((n) => n.premierLeague.table),
      d = m((n) => n.premierLeague.latestMatches),
      s = m((n) => n.premierLeague.latestMatchesStatus),
      g = M();
    u.useEffect(() => {
      s === "idle" && l(E());
    }, [l]);
    const p = u.useMemo(() => {
        const n = {};
        return (
          d.forEach((r) => {
            const L = new Date(r.kickoff_time).toLocaleDateString("en-GB", {
              weekday: "long",
              day: "2-digit",
              month: "long",
              year: "numeric",
            });
            n[L] || (n[L] = []), n[L].push(r);
          }),
          n
        );
      }, [d]),
      t = (n) => {
        const r = f.find((h) => h.team.shortName === n);
        return r ? r.team.crest : "";
      },
      a = (n) => {
        const r = f.find((h) => h.team.shortName === n);
        return r ? r.team.id : "";
      };
    return e(ee, {
      children:
        s === "loading"
          ? e(x, {})
          : e(b, {
              children: Object.keys(p).map((n) =>
                i(
                  te,
                  {
                    children: [
                      e("h3", { children: n }),
                      i(ne, {
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
                            children: p[n].map((r, h) =>
                              i(
                                "tr",
                                {
                                  onClick: (L) => {
                                    L.target.tagName.toLowerCase() !== "a" &&
                                      g(`/match/${r.id}`);
                                  },
                                  children: [
                                    i("td", {
                                      children: [
                                        e("img", {
                                          src: t(r.home_team),
                                          width: 30,
                                          height: 30,
                                        }),
                                        e(k, {
                                          to: `/team/${a(r.home_team)}`,
                                          children: r.home_team,
                                        }),
                                      ],
                                    }),
                                    e("td", { children: r.home_team_score }),
                                    e("td", { children: "-" }),
                                    e("td", { children: r.away_team_score }),
                                    i("td", {
                                      children: [
                                        e("img", {
                                          src: t(r.away_team),
                                          width: 30,
                                          height: 30,
                                        }),
                                        e(k, {
                                          to: `/team/${a(r.away_team)}`,
                                          children: r.away_team,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                h
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  },
                  n
                )
              ),
            }),
    });
  },
  de = () => {
    const l = y(),
      f = m((o) => o.premierLeague.table),
      d = m((o) => o.premierLeague.tableStatus),
      [s, g] = u.useState("table"),
      [p, t] = u.useState(!1),
      [a, n] = u.useState(window.innerWidth < 768),
      r = W(),
      h = u.useRef();
    u.useEffect(() => {
      d === "idle" && l(I());
    }, [d, l]);
    const L = (o) => {
        for (const S of f) if (S.team.name === o) return S.team.id;
        return "";
      },
      v = () => {
        t(!p);
      };
    return (
      u.useEffect(() => {
        t(!1);
      }, [r]),
      i(b, {
        children: [
          e(D, {}),
          e(C, { toggleSidebar: v, isMobile: a, isOpen: p }),
          i(Q, {
            children: [
              e(N, {
                isOpen: p,
                toggleSidebar: v,
                setIsMobile: n,
                hamburgerMenuRef: h,
              }),
              i(X, {
                children: [
                  d === "loading"
                    ? e(x, {})
                    : i(b, {
                        children: [
                          i(B, {
                            value: s,
                            onChange: (o, S) => g(S),
                            children: [
                              e(T, { label: "Table", value: "table" }),
                              e(T, {
                                label: "Top scorers",
                                value: "topscorers",
                              }),
                              e(T, {
                                label: "Upcomming matches",
                                value: "upcommingMatches",
                              }),
                              e(T, {
                                label: "Latest matches",
                                value: "latestmatches",
                              }),
                            ],
                          }),
                          s === "table" &&
                            i(Y, {
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
                                  children: f.map((o) =>
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
                                            children: e(Z, {
                                              to: `/team/${L(o.team.name)}`,
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
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                  s === "topscorers" && e(O, {}),
                  s === "upcommingMatches" && e(V, {}),
                  s === "topassists" && e(K, {}),
                  s === "latestmatches" && e(re, {}),
                ],
              }),
            ],
          }),
        ],
      })
    );
  };
export { de as default };
