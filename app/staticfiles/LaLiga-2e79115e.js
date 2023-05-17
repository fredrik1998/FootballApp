import {
  s as c,
  L as b,
  a as g,
  r as f,
  O as k,
  b as t,
  d as w,
  j as n,
  u as D,
  P as j,
  Q as G,
  i as N,
  R as W,
  F as T,
  G as C,
} from "./index-2c3973a7.js";
import { u as S, H as E } from "./Header-ceecb3b6.js";
import { S as I } from "./Sidebar-9725e6fe.js";
import { T as O, a as x } from "./Tabs-dbf2c3e2.js";
const U = c.main`
display: flex;
`,
  A = c.div`
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
const B = c.table`
width: 70%;
th, td{
  text-align: left;
  padding: 2px;
  border-collapse: collapse;
}
`,
  F = c(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  H = c.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`,
  P = c.table`
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
  M = c(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  z = () => {
    const s = S(),
      l = g((i) => i.LaLiga.table),
      h = g((i) => i.LaLiga.topScorers),
      d = g((i) => i.LaLiga.topScorersStatus);
    f.useEffect(() => {
      d === "idle" && s(k());
    }, [d, s]);
    const p = (i) => {
        for (const a of l) if (a.team.shortName === i) return a.team.crest;
        return "";
      },
      m = (i) => {
        for (const a of l) if (a.team.shortName === i) return a.team.id;
        return "";
      };
    return d === "loading"
      ? t(w, {})
      : t(H, {
          children: n(P, {
            children: [
              t("thead", {
                children: n("tr", {
                  children: [
                    t("th", { children: "Player" }),
                    t("th", { children: "Team" }),
                    t("th", { children: "Goals" }),
                  ],
                }),
              }),
              t("tbody", {
                children: h.map((i) =>
                  n(
                    "tr",
                    {
                      children: [
                        t("td", {
                          children: t(M, {
                            to: `/player/${i.id}`,
                            children: i.name,
                          }),
                        }),
                        n("td", {
                          children: [
                            t("img", { src: p(i.team), width: 30 }),
                            t(M, {
                              to: `/team/${m(i.team)}`,
                              children: i.team,
                            }),
                          ],
                        }),
                        t("td", { children: i.goals }),
                      ],
                    },
                    i.id
                  )
                ),
              }),
            ],
          }),
        });
  };
c.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;
c.table`
width: 80%;
border-collapse: collapse;
td, th {
    text-align: left;
    padding: 8px;
}
`;
c(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`;
const R = c.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 80%;
gap: 20px;
`,
  V = c.div`
  width: 100%;
`,
  Q = c.table`
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
  $ = c(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  q = () => {
    const s = S(),
      l = g((e) => e.LaLiga.table),
      h = g((e) => e.LaLiga.upcomingMatches),
      d = g((e) => e.LaLiga.upcomingMatchesStatus),
      p = D();
    f.useEffect(() => {
      d === "idle" && s(j());
    }, [d, s]);
    const m = (e) => {
        for (const o of l) if (o.team.shortName === e) return o.team.crest;
        return "";
      },
      i = (e) => {
        for (const o of l) if (o.team.shortName === e) return o.team.id;
        return "";
      },
      a = f.useMemo(() => {
        const e = {};
        for (const o of h) {
          const L = new Date(o.kickoff_time).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
          e[L] || (e[L] = []), e[L].push(o);
        }
        return e;
      }, [h]);
    return d === "loading"
      ? t(w, {})
      : t(R, {
          children: Object.keys(a).map((e) =>
            n(
              V,
              {
                children: [
                  t("h3", { children: e }),
                  n(Q, {
                    children: [
                      t("thead", {
                        children: n("tr", {
                          children: [
                            t("th", { children: "Hometeam" }),
                            t("th", { children: "Awayteam" }),
                          ],
                        }),
                      }),
                      t("tbody", {
                        children: a[e].map((o) =>
                          n(
                            "tr",
                            {
                              onClick: (u) => {
                                if (u.target.tagName.toLowerCase() === "a")
                                  return "";
                                p(`/match/${o.id}`);
                              },
                              children: [
                                n("td", {
                                  children: [
                                    t("img", {
                                      src: m(o.home_team),
                                      width: 30,
                                    }),
                                    t($, {
                                      to: `/team/${i(o.home_team)}`,
                                      children: o.home_team,
                                    }),
                                  ],
                                }),
                                n("td", {
                                  children: [
                                    t("img", {
                                      src: m(o.away_team),
                                      width: 30,
                                    }),
                                    t($, {
                                      to: `/team/${i(o.away_team)}`,
                                      children: o.away_team,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            o.id
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              },
              e
            )
          ),
        });
  },
  J = c.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 80%;
gap: 20px;
`,
  K = c.div`
width: 100%;
`,
  X = c.table`
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
  _ = c(b)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  Y = () => {
    const s = S(),
      l = g((a) => a.LaLiga.table),
      h = g((a) => a.LaLiga.latestMatches),
      d = g((a) => a.LaLiga.latestMatchesStatus);
    f.useEffect(() => {
      d === "idle" && s(G());
    }, [s, d]);
    const p = (a) => {
        for (const e of l) if (e.team.shortName === a) return e.team.crest;
        return "";
      },
      m = (a) => {
        for (const e of l) if (e.team.shortName === a) return e.team.id;
        return "";
      },
      i = f.useMemo(() => {
        const a = {};
        for (const e of h) {
          const u = new Date(e.kickoff_time).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
          a[u] || (a[u] = []), a[u].push(e);
        }
        return a;
      }, [h]);
    return d === "loading"
      ? t(w, {})
      : t(J, {
          children: Object.keys(i).map((a) =>
            n(
              K,
              {
                children: [
                  t("h3", { children: a }),
                  n(X, {
                    children: [
                      t("thead", {
                        children: n("tr", {
                          children: [
                            t("th", { children: "Hometeam" }),
                            t("th", {}),
                            t("th", {}),
                            t("th", {}),
                            t("th", { children: "Awayteam" }),
                          ],
                        }),
                      }),
                      t("tbody", {
                        children: i[a].map((e) =>
                          n(
                            "tr",
                            {
                              onClick: (o) => {
                                if (o.target.tagName.toLowerCase() === "a")
                                  return "";
                                navigate(`/match/${e.id}`);
                              },
                              children: [
                                n("td", {
                                  children: [
                                    t("img", {
                                      src: p(e.home_team),
                                      width: 30,
                                    }),
                                    t(_, {
                                      to: `/team/${m(e.home_team)}`,
                                      children: e.home_team,
                                    }),
                                  ],
                                }),
                                t("td", { children: e.home_team_score }),
                                t("td", { children: "-" }),
                                t("td", { children: e.away_team_score }),
                                n("td", {
                                  children: [
                                    t("img", {
                                      src: p(e.away_team),
                                      width: 30,
                                    }),
                                    t(_, {
                                      to: `/team/${m(e.away_team)}`,
                                      children: e.away_team,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.id
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
  it = () => {
    const s = S(),
      l = g((r) => r.LaLiga.table),
      h = g((r) => r.LaLiga.tableStatus),
      [d, p] = f.useState("table"),
      [m, i] = f.useState(!1),
      [a, e] = f.useState(window.innerWidth < 768),
      o = f.useRef(),
      u = N();
    f.useEffect(() => {
      h === "idle" && s(W());
    }, [s, h]),
      f.useEffect(() => {
        i(!1);
      }, [u]);
    const L = (r) => {
        for (const y of l) if (y.team.name === r) return y.team.id;
        return "";
      },
      v = () => {
        i(!m);
      };
    return n(T, {
      children: [
        t(C, {}),
        t(E, { toggleSidebar: v, isMobile: a, isOpen: m }),
        n(U, {
          children: [
            t(I, {
              toggleSidebar: v,
              isOpen: m,
              setIsMobile: e,
              hamburgerMenuRef: o,
            }),
            n(A, {
              children: [
                h === "loading"
                  ? t(w, {})
                  : n(T, {
                      children: [
                        n(O, {
                          value: d,
                          onChange: (r, y) => p(y),
                          children: [
                            t(x, { label: "table", value: "table" }),
                            t(x, { label: "Top scorers", value: "topscorers" }),
                            t(x, {
                              label: "Upcoming Matches",
                              value: "upcomingmatches",
                            }),
                            t(x, {
                              label: "Latest matches",
                              value: "latestmatches",
                            }),
                          ],
                        }),
                        d === "table" &&
                          n(B, {
                            children: [
                              t("thead", {
                                children: n("tr", {
                                  children: [
                                    t("th", {}),
                                    t("th", { children: "Team" }),
                                    t("th", {}),
                                    t("th", { children: "MP" }),
                                    t("th", { children: "W" }),
                                    t("th", { children: "D" }),
                                    t("th", { children: "L" }),
                                    t("th", { children: "GF" }),
                                    t("th", { children: "GA" }),
                                    t("th", { children: "GD" }),
                                    t("th", { children: "Points" }),
                                  ],
                                }),
                              }),
                              t("tbody", {
                                children: l.map((r) =>
                                  n(
                                    "tr",
                                    {
                                      children: [
                                        t("th", { children: r.position }),
                                        t("img", {
                                          style: {
                                            width: "30px",
                                            marginTop: "12px",
                                          },
                                          src: r.team.crest,
                                          alt: r.team.name,
                                        }),
                                        t("td", {
                                          children: t(F, {
                                            to: `/team/${L(r.team.name)}`,
                                            children: r.team.name,
                                          }),
                                        }),
                                        t("td", { children: r.playedGames }),
                                        t("td", { children: r.won }),
                                        t("td", { children: r.draw }),
                                        t("td", { children: r.lost }),
                                        t("td", { children: r.goalsFor }),
                                        t("td", { children: r.goalsAgainst }),
                                        t("td", { children: r.goalDifference }),
                                        t("td", { children: r.points }),
                                      ],
                                    },
                                    r.position
                                  )
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                d === "topscorers" && t(z, {}),
                d === "upcomingmatches" && t(q, {}),
                d === "latestmatches" && t(Y, {}),
              ],
            }),
          ],
        }),
      ],
    });
  };
export { it as default };
