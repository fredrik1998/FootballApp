import {
  b as e,
  s as d,
  L as y,
  a as o,
  r as f,
  q as v,
  u as M,
  a2 as L,
  a3 as z,
  d as D,
  j as i,
  F as N,
  G as j,
} from "./index-2c3973a7.js";
import { c as b, u as k, H as C } from "./Header-ceecb3b6.js";
import { S as F } from "./Stadium-4746da44.js";
const I = b(
    e("path", {
      d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z",
    }),
    "CalendarToday"
  ),
  A = b(
    [
      e(
        "path",
        {
          d: "M11.23 6c-1.66 0-3.22.66-4.36 1.73C6.54 6.73 5.61 6 4.5 6 3.12 6 2 7.12 2 8.5S3.12 11 4.5 11c.21 0 .41-.03.61-.08-.05.25-.09.51-.1.78-.18 3.68 2.95 6.68 6.68 6.27 2.55-.28 4.68-2.26 5.19-4.77.15-.71.15-1.4.06-2.06-.09-.6.38-1.13.99-1.13H22V6H11.23zM4.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm6.5 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",
        },
        "0"
      ),
      e("circle", { cx: "11", cy: "12", r: "2" }, "1"),
    ],
    "Sports"
  ),
  E = d.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 3em;
width: 100%;
`,
  R = d.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
gap: 40px;
`,
  V = d.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
border-bottom: 1px solid #000;
padding-bottom: 20px;
`,
  _ = d.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 80%;
gap: 20px;
border-bottom: 1px solid #000;
padding-bottom: 20px;
@media screen and (max-width: 767px){
    gap: 10px;
}
`,
  $ = d.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 80%;
border-bottom: 1px solid #000;
padding-bottom: 20px;
@media screen and (max-width: 768px){
gap: 20px;
}
`,
  B = d.h1`
font-weight: 400;
font-size: 26px;
`,
  G = d.h2`
font-weight: 400;
`,
  u = d(y)`
font-weight: 400;
font-size: 26px;
color: #fafafa;
text-decoration: none;
cursor: pointer;
@media screen and (max-width: 768px){
 font-size: 18px;   
}
`,
  m = d.p`
font-size: 24px;
@media screen and (max-width: 768px){
font-size: 20px;
}
`,
  c = d.img`
width: 100px;
@media screen and (max-width: 768px){
width: 50px;
height: 50px;
}
`,
  W = d.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
padding-bottom: 4rem;
`,
  P = d.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #4caf50;
border-radius: 50%;
width: 30px;
height: 30px;
padding: 15px;
@media screen and (max-width: 768px){
    width: 20px;
    height: 20px; 
}
`,
  Q = d.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #ff9800;
border-radius: 50%;
width: 30px;
height: 30px;
padding: 15px;
@media screen and (max-width: 768px){
    width: 20px;
    height: 20px; 
}
`,
  U = d.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #f44336;
border-radius: 50%;
width: 30px;
height: 30px;
padding: 15px;
@media screen and (max-width: 768px){
    width: 20px;
    height: 20px;
}
`,
  p = d.p`
margin-top: 8px;
font-size: 24px;
@media screen and (max-width: 768px){
 margin-top: 4px; 
}
`;
d.div`
 width: 100%;
margin: 1rem auto;
`;
const q = d.table`
  width: 80%;
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
    padding: 20px;
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
  w = d(y)`
color: #fafafa;
text-decoration: none;
cursor: pointer;

`,
  X = () => {
    const s = k(),
      a = o((t) => t.Match.data),
      h = o((t) => t.Match.status),
      r = o((t) => t.Head2Head.data),
      l = o((t) => t.Head2Head.status),
      x = f.useRef(null),
      { match_id: n } = v(),
      T = M();
    if (
      (f.useEffect(() => {
        ((h === "idle" && l === "idle") || n !== x.current) &&
          ((x.current = n), s(L(n)), s(z(n)));
      }, [s, h, l, n]),
      h === "loading" || l === "loading")
    )
      return e(D, {});
    const H = () =>
        new Date(a.utcDate).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      S = (t) => {
        switch (t) {
          case "REGULAR_SEASON":
            return "";
          case "LAST_16":
            return "Last 16";
          case "QUARTER_FINALS":
            return "QF";
          case "SEMI_FINALS":
            return "SF";
          case "FINAL":
            return "F";
          default:
            return t;
        }
      };
    return i(N, {
      children: [
        e(j, {}),
        e(C, {}),
        a &&
          a.competition &&
          i(E, {
            children: [
              i(R, {
                children: [
                  i(V, {
                    children: [
                      e("img", {
                        width: 30,
                        height: 30,
                        src: a.competition.emblem,
                        alt: "Competition emblem",
                      }),
                      i(B, {
                        children: [
                          a.competition.name,
                          a.matchday
                            ? i("span", { children: [" Round ", a.matchday] })
                            : null,
                          i("span", { children: [" ", S(a.stage)] }),
                        ],
                      }),
                    ],
                  }),
                  i(_, {
                    children: [
                      e(c, { src: a.homeTeam.crest }),
                      e(u, {
                        to: `/team/${a.homeTeam.id}`,
                        children: a.homeTeam.shortName,
                      }),
                      e(m, { children: a.score.fullTime.home }),
                      e(m, { children: "-" }),
                      e(m, { children: a.score.fullTime.away }),
                      e(c, { src: a.awayTeam.crest }),
                      e(u, {
                        to: `/team/${a.awayTeam.id}`,
                        children: a.awayTeam.shortName,
                      }),
                    ],
                  }),
                  i($, {
                    children: [
                      i("p", { children: [e(I, {}), H(a.utcDate)] }),
                      i("p", { children: [e(F, {}), a.venue] }),
                      a.referees.map((t) =>
                        i("p", { children: [e(A, {}), t.name] })
                      ),
                    ],
                  }),
                ],
              }),
              e(G, { children: "Head-to-Head" }),
              i(W, {
                children: [
                  e(c, { src: a.homeTeam.crest }),
                  i(P, {
                    children: [
                      e(p, { children: r.aggregates.homeTeam.wins }),
                      e("strong", { children: "Wins" }),
                    ],
                  }),
                  i(Q, {
                    children: [
                      e(p, { children: r.aggregates.homeTeam.draws }),
                      e("strong", { children: "Draws" }),
                    ],
                  }),
                  i(U, {
                    children: [
                      e(p, { children: r.aggregates.homeTeam.losses }),
                      e("strong", { children: "Wins" }),
                    ],
                  }),
                  e(c, { src: a.awayTeam.crest }),
                ],
              }),
              i(q, {
                children: [
                  e("thead", {
                    children: i("tr", {
                      children: [
                        e("th", {}),
                        e("th", {}),
                        e("th", {}),
                        e("th", {}),
                        e("th", {}),
                      ],
                    }),
                  }),
                  e("tbody", {
                    children: r.matches.map((t) =>
                      i(
                        "tr",
                        {
                          onClick: (g) => {
                            g.target.tagName.toLowerCase() !== "a" &&
                              T(`/match/${t.id}`);
                          },
                          children: [
                            i("td", {
                              children: [
                                e("img", { width: 30, src: t.homeTeam.crest }),
                                e(w, {
                                  to: `/team/${t.homeTeam.id}`,
                                  children: t.homeTeam.shortName,
                                }),
                              ],
                            }),
                            e("td", { children: t.score.fullTime.home }),
                            e("td", { children: "-" }),
                            e("td", { children: t.score.fullTime.away }),
                            i("td", {
                              children: [
                                e("img", { width: 30, src: t.awayTeam.crest }),
                                e(w, {
                                  to: `/team/${t.awayTeam.id}`,
                                  children: t.awayTeam.shortName,
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
          }),
      ],
    });
  };
export { X as default };
