import {
  s as c,
  L,
  a as s,
  r as f,
  J as k,
  b as t,
  d as w,
  j as r,
  u as D,
  K as j,
  M as N,
  i as G,
  N as E,
  F as T,
  G as W,
} from "./index-57ff3d1b.js";
import { u as S, H as C } from "./Header-22b7e31d.js";
import { S as I } from "./Sidebar-2ae3e9e3.js";
import { T as U, a as y } from "./Tabs-307491b3.js";
const A = c.main`
display: flex;
`,
  B = c.div`
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
const F = c.table`
width: 70%;
@media screen and (max-width: 768px){
  width: 95%;
  
}
border-collapse: collapse;
th, td{
  text-align: left;

}
`,
  H = c(L)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  O = c.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`,
  z = c.table`
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
  M = c(L)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  P = () => {
    const l = S(),
      h = s((n) => n.Ligue1.table),
      m = s((n) => n.Ligue1.topScorers),
      d = s((n) => n.Ligue1.topScorersStatus);
    s((n) => n.Ligue1.topScorersError),
      f.useEffect(() => {
        d === "idle" && l(k());
      }, [d, l]);
    const p = (n) => {
        for (const i of h) if (i.team.shortName === n) return i.team.crest;
        return "";
      },
      u = (n) => {
        for (const i of h) if (i.team.shortName === n) return i.team.id;
        return "";
      };
    return d === "loading"
      ? t(w, {})
      : t(O, {
          children: r(z, {
            children: [
              t("thead", {
                children: r("tr", {
                  children: [
                    t("th", { children: "Player" }),
                    t("th", { children: "Team" }),
                    t("th", { children: "Goals" }),
                  ],
                }),
              }),
              t("tbody", {
                children: m.map((n) =>
                  r(
                    "tr",
                    {
                      children: [
                        t("td", {
                          children: t(M, {
                            to: `/player/${n.id}`,
                            children: n.name,
                          }),
                        }),
                        r("td", {
                          children: [
                            t("img", { src: p(n.team), width: 30 }),
                            t(M, {
                              to: `/team/${u(n.team)}`,
                              children: n.team,
                            }),
                          ],
                        }),
                        t("td", { children: n.goals }),
                      ],
                    },
                    n.id
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
c(L)`
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
  J = c.table`
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
  $ = c(L)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  K = () => {
    const l = S(),
      h = s((e) => e.Ligue1.table),
      m = s((e) => e.Ligue1.upcomingMatches),
      d = s((e) => e.Ligue1.upcomingMatchesStatus),
      p = D();
    f.useEffect(() => {
      d === "idle" && l(j());
    }, [l, d]);
    const u = (e) => {
        for (const o of h) if (o.team.shortName === e) return o.team.id;
        return "";
      },
      n = (e) => {
        for (const o of h) if (o.team.shortName === e) return o.team.crest;
        return "";
      },
      i = f.useMemo(() => {
        const e = {};
        for (const o of m) {
          const b = new Date(o.kickoff_time).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
          e[b] || (e[b] = []), e[b].push(o);
        }
        return e;
      }, [m]);
    return d === "loading"
      ? t(w, {})
      : t(R, {
          children: Object.keys(i).map((e) =>
            r(
              V,
              {
                children: [
                  t("h3", { children: e }),
                  r(J, {
                    children: [
                      t("thead", {
                        children: r("tr", {
                          children: [
                            t("th", { children: "Hometeam" }),
                            t("th", { children: "Awayteam" }),
                          ],
                        }),
                      }),
                      t("tbody", {
                        children: i[e].map((o, g) =>
                          r(
                            "tr",
                            {
                              onClick: (b) => {
                                b.target.tagName.toLowerCase() !== "a" &&
                                  p(`/match/${o.id}`);
                              },
                              children: [
                                r("td", {
                                  children: [
                                    t("img", {
                                      src: n(o.home_team),
                                      width: 30,
                                    }),
                                    t($, {
                                      to: `/team/${u(o.home_team)}`,
                                      children: o.home_team,
                                    }),
                                  ],
                                }),
                                r("td", {
                                  children: [
                                    t("img", {
                                      src: n(o.away_team),
                                      width: 30,
                                    }),
                                    t($, {
                                      to: `/team/${u(o.away_team)}`,
                                      children: o.away_team,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            g
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
  q = c.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 80%;
gap: 20px;
`,
  Q = c.div`
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
  _ = c(L)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`,
  Y = () => {
    const l = S(),
      h = s((i) => i.Ligue1.table),
      m = s((i) => i.Ligue1.latestMatches),
      d = s((i) => i.Ligue1.latestMatchesStatus);
    f.useEffect(() => {
      d === "idle" && l(N());
    }, [l, d]);
    const p = (i) => {
        for (const e of h) if (e.team.shortName === i) return e.team.crest;
        return "";
      },
      u = (i) => {
        for (const e of h) if (e.team.shortName === i) return e.team.id;
        return "";
      },
      n = f.useMemo(() => {
        const i = {};
        for (const e of m) {
          const g = new Date(e.kickoff_time).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
          i[g] || (i[g] = []), i[g].push(e);
        }
        return i;
      }, [m]);
    return d === "loading"
      ? t(w, {})
      : t(q, {
          children: Object.keys(n).map((i) =>
            r(
              Q,
              {
                children: [
                  t("h3", { children: i }),
                  r(X, {
                    children: [
                      t("thead", {
                        children: r("tr", {
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
                        children: n[i].map((e, o) =>
                          r(
                            "tr",
                            {
                              onClick: (g) => {
                                g.target.tagName.toLowerCase() !== "a" &&
                                  navigate(`/match/${e.id}`);
                              },
                              children: [
                                r("td", {
                                  children: [
                                    t("img", {
                                      src: p(e.home_team),
                                      width: 30,
                                    }),
                                    t(_, {
                                      to: `/team/${u(e.home_team)}`,
                                      children: e.home_team,
                                    }),
                                  ],
                                }),
                                t("td", { children: e.home_team_score }),
                                t("td", { children: "-" }),
                                t("td", { children: e.away_team_score }),
                                r("td", {
                                  children: [
                                    t("img", {
                                      src: p(e.away_team),
                                      width: 30,
                                    }),
                                    t(_, {
                                      to: `/team/${u(e.away_team)}`,
                                      children: e.away_team,
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
              i
            )
          ),
        });
  },
  nt = () => {
    const l = S(),
      h = s((a) => a.Ligue1.table),
      m = s((a) => a.Ligue1.tableStatus),
      [d, p] = f.useState("table"),
      [u, n] = f.useState(!1),
      [i, e] = f.useState(window.innerWidth < 768),
      o = f.useRef(),
      g = G();
    f.useEffect(() => {
      m === "idle" && l(E());
    }, [m, l]),
      f.useEffect(() => {
        n(!1);
      }, [g]);
    const b = (a) => {
        for (const x of h) if (x.team.name === a) return x.team.id;
        return "";
      },
      v = () => {
        n(!u);
      };
    return r(T, {
      children: [
        t(W, {}),
        t(C, { toggleSidebar: v, isMobile: i, isOpen: u }),
        r(A, {
          children: [
            t(I, {
              isOpen: u,
              toggleSidebar: v,
              setIsMobile: e,
              hamburgerMenuRef: o,
            }),
            r(B, {
              children: [
                m === "loading"
                  ? t(w, {})
                  : r(T, {
                      children: [
                        r(U, {
                          value: d,
                          onChange: (a, x) => p(x),
                          children: [
                            t(y, { label: "Table", value: "table" }),
                            t(y, { label: "Top scorers", value: "topscorers" }),
                            t(y, {
                              label: "Upcomming matches",
                              value: "upcommingmatches",
                            }),
                            t(y, {
                              label: "Latest Matches",
                              value: "latestmatches",
                            }),
                          ],
                        }),
                        d === "table" &&
                          r(F, {
                            children: [
                              t("thead", {
                                children: r("tr", {
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
                                children: h.map((a) =>
                                  r(
                                    "tr",
                                    {
                                      children: [
                                        t("th", { children: a.position }),
                                        t("img", {
                                          style: {
                                            width: "30px",
                                            marginTop: "12px",
                                          },
                                          src: a.team.crest,
                                          alt: a.team.name,
                                        }),
                                        t("td", {
                                          children: t(H, {
                                            to: `/team/${b(a.team.name)}`,
                                            children: a.team.name,
                                          }),
                                        }),
                                        t("td", { children: a.playedGames }),
                                        t("td", { children: a.won }),
                                        t("td", { children: a.draw }),
                                        t("td", { children: a.lost }),
                                        t("td", { children: a.goalsFor }),
                                        t("td", { children: a.goalsAgainst }),
                                        t("td", { children: a.goalDifference }),
                                        t("td", { children: a.points }),
                                      ],
                                    },
                                    a.position
                                  )
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                d === "topscorers" && t(P, {}),
                d === "upcommingmatches" && t(K, {}),
                d === "latestmatches" && t(Y, {}),
              ],
            }),
          ],
        }),
      ],
    });
  };
export { nt as default };
