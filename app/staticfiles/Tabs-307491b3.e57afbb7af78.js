import {
  _ as d,
  S as E,
  T as J,
  U as Gt,
  V as Jt,
  W as ht,
  X as St,
  Y as H,
  Z as zt,
  r as u,
  $ as mt,
  j as G,
  a0 as vt,
  b as T,
} from "./index-57ff3d1b.js";
import {
  i as Qt,
  a as te,
  B as $t,
  c as kt,
  o as Lt,
  d as bt,
  b as ft,
  e as ee,
} from "./Header-22b7e31d.js";
let U;
function Ft() {
  if (U) return U;
  const t = document.createElement("div"),
    e = document.createElement("div");
  return (
    (e.style.width = "10px"),
    (e.style.height = "1px"),
    t.appendChild(e),
    (t.dir = "rtl"),
    (t.style.fontSize = "14px"),
    (t.style.width = "4px"),
    (t.style.height = "1px"),
    (t.style.position = "absolute"),
    (t.style.top = "-1000px"),
    (t.style.overflow = "scroll"),
    document.body.appendChild(t),
    (U = "reverse"),
    t.scrollLeft > 0
      ? (U = "default")
      : ((t.scrollLeft = 1), t.scrollLeft === 0 && (U = "negative")),
    document.body.removeChild(t),
    U
  );
}
function Pt(t, e) {
  const o = t.scrollLeft;
  if (e !== "rtl") return o;
  switch (Ft()) {
    case "negative":
      return t.scrollWidth - t.clientWidth + o;
    case "reverse":
      return t.scrollWidth - t.clientWidth - o;
    default:
      return o;
  }
}
function oe(t, e, o) {
  return t === void 0 || Qt(t)
    ? e
    : d({}, e, { ownerState: d({}, e.ownerState, o) });
}
function le(t, e = []) {
  if (t === void 0) return {};
  const o = {};
  return (
    Object.keys(t)
      .filter(
        (n) =>
          n.match(/^on[A-Z]/) && typeof t[n] == "function" && !e.includes(n)
      )
      .forEach((n) => {
        o[n] = t[n];
      }),
    o
  );
}
function ne(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Rt(t) {
  if (t === void 0) return {};
  const e = {};
  return (
    Object.keys(t)
      .filter((o) => !(o.match(/^on[A-Z]/) && typeof t[o] == "function"))
      .forEach((o) => {
        e[o] = t[o];
      }),
    e
  );
}
function re(t) {
  const {
    getSlotProps: e,
    additionalProps: o,
    externalSlotProps: n,
    externalForwardedProps: r,
    className: a,
  } = t;
  if (!e) {
    const m = E(
        r == null ? void 0 : r.className,
        n == null ? void 0 : n.className,
        a,
        o == null ? void 0 : o.className
      ),
      P = d(
        {},
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style,
        n == null ? void 0 : n.style
      ),
      g = d({}, o, r, n);
    return (
      m.length > 0 && (g.className = m),
      Object.keys(P).length > 0 && (g.style = P),
      { props: g, internalRef: void 0 }
    );
  }
  const p = le(d({}, r, n)),
    h = Rt(n),
    f = Rt(r),
    b = e(p),
    C = E(
      b == null ? void 0 : b.className,
      o == null ? void 0 : o.className,
      a,
      r == null ? void 0 : r.className,
      n == null ? void 0 : n.className
    ),
    x = d(
      {},
      b == null ? void 0 : b.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style,
      n == null ? void 0 : n.style
    ),
    S = d({}, b, o, f, h);
  return (
    C.length > 0 && (S.className = C),
    Object.keys(x).length > 0 && (S.style = x),
    { props: S, internalRef: b.ref }
  );
}
const se = ["elementType", "externalSlotProps", "ownerState"];
function rt(t) {
  var e;
  const { elementType: o, externalSlotProps: n, ownerState: r } = t,
    a = J(t, se),
    p = ne(n, r),
    { props: h, internalRef: f } = re(d({}, a, { externalSlotProps: p })),
    b = te(
      f,
      p == null ? void 0 : p.ref,
      (e = t.additionalProps) == null ? void 0 : e.ref
    );
  return oe(o, d({}, h, { ref: b }), r);
}
function Ht() {
  return Gt(Jt);
}
function ae(t) {
  return St("MuiTab", t);
}
const ie = ht("MuiTab", [
    "root",
    "labelIcon",
    "textColorInherit",
    "textColorPrimary",
    "textColorSecondary",
    "selected",
    "disabled",
    "fullWidth",
    "wrapped",
    "iconWrapper",
  ]),
  F = ie,
  ce = [
    "className",
    "disabled",
    "disableFocusRipple",
    "fullWidth",
    "icon",
    "iconPosition",
    "indicator",
    "label",
    "onChange",
    "onClick",
    "onFocus",
    "selected",
    "selectionFollowsFocus",
    "textColor",
    "value",
    "wrapped",
  ],
  de = (t) => {
    const {
        classes: e,
        textColor: o,
        fullWidth: n,
        wrapped: r,
        icon: a,
        label: p,
        selected: h,
        disabled: f,
      } = t,
      b = {
        root: [
          "root",
          a && p && "labelIcon",
          `textColor${zt(o)}`,
          n && "fullWidth",
          r && "wrapped",
          h && "selected",
          f && "disabled",
        ],
        iconWrapper: ["iconWrapper"],
      };
    return vt(b, ae, e);
  },
  ue = H($t, {
    name: "MuiTab",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        o.label && o.icon && e.labelIcon,
        e[`textColor${zt(o.textColor)}`],
        o.fullWidth && e.fullWidth,
        o.wrapped && e.wrapped,
      ];
    },
  })(({ theme: t, ownerState: e }) =>
    d(
      {},
      t.typography.button,
      {
        maxWidth: 360,
        minWidth: 90,
        position: "relative",
        minHeight: 48,
        flexShrink: 0,
        padding: "12px 16px",
        overflow: "hidden",
        whiteSpace: "normal",
        textAlign: "center",
      },
      e.label && {
        flexDirection:
          e.iconPosition === "top" || e.iconPosition === "bottom"
            ? "column"
            : "row",
      },
      { lineHeight: 1.25 },
      e.icon &&
        e.label && {
          minHeight: 72,
          paddingTop: 9,
          paddingBottom: 9,
          [`& > .${F.iconWrapper}`]: d(
            {},
            e.iconPosition === "top" && { marginBottom: 6 },
            e.iconPosition === "bottom" && { marginTop: 6 },
            e.iconPosition === "start" && { marginRight: t.spacing(1) },
            e.iconPosition === "end" && { marginLeft: t.spacing(1) }
          ),
        },
      e.textColor === "inherit" && {
        color: "inherit",
        opacity: 0.6,
        [`&.${F.selected}`]: { opacity: 1 },
        [`&.${F.disabled}`]: {
          opacity: (t.vars || t).palette.action.disabledOpacity,
        },
      },
      e.textColor === "primary" && {
        color: (t.vars || t).palette.text.secondary,
        [`&.${F.selected}`]: { color: (t.vars || t).palette.primary.main },
        [`&.${F.disabled}`]: { color: (t.vars || t).palette.text.disabled },
      },
      e.textColor === "secondary" && {
        color: (t.vars || t).palette.text.secondary,
        [`&.${F.selected}`]: { color: (t.vars || t).palette.secondary.main },
        [`&.${F.disabled}`]: { color: (t.vars || t).palette.text.disabled },
      },
      e.fullWidth && {
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: "none",
      },
      e.wrapped && { fontSize: t.typography.pxToRem(12) }
    )
  ),
  fe = u.forwardRef(function (e, o) {
    const n = mt({ props: e, name: "MuiTab" }),
      {
        className: r,
        disabled: a = !1,
        disableFocusRipple: p = !1,
        fullWidth: h,
        icon: f,
        iconPosition: b = "top",
        indicator: C,
        label: x,
        onChange: S,
        onClick: m,
        onFocus: P,
        selected: g,
        selectionFollowsFocus: y,
        textColor: A = "inherit",
        value: R,
        wrapped: st = !1,
      } = n,
      X = J(n, ce),
      V = d({}, n, {
        disabled: a,
        disableFocusRipple: p,
        selected: g,
        icon: !!f,
        iconPosition: b,
        label: !!x,
        fullWidth: h,
        textColor: A,
        wrapped: st,
      }),
      D = de(V),
      z =
        f && x && u.isValidElement(f)
          ? u.cloneElement(f, {
              className: E(D.iconWrapper, f.props.className),
            })
          : f,
      Q = (M) => {
        !g && S && S(M, R), m && m(M);
      },
      O = (M) => {
        y && !g && S && S(M, R), P && P(M);
      };
    return G(
      ue,
      d(
        {
          focusRipple: !p,
          className: E(D.root, r),
          ref: o,
          role: "tab",
          "aria-selected": g,
          disabled: a,
          onClick: Q,
          onFocus: O,
          ownerState: V,
          tabIndex: g ? 0 : -1,
        },
        X,
        {
          children: [
            b === "top" || b === "start"
              ? G(u.Fragment, { children: [z, x] })
              : G(u.Fragment, { children: [x, z] }),
            C,
          ],
        }
      )
    );
  }),
  Xe = fe,
  pe = kt(
    T("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }),
    "KeyboardArrowLeft"
  ),
  be = kt(
    T("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }),
    "KeyboardArrowRight"
  );
function he(t) {
  return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
}
function Se(t, e, o, n = {}, r = () => {}) {
  const { ease: a = he, duration: p = 300 } = n;
  let h = null;
  const f = e[t];
  let b = !1;
  const C = () => {
      b = !0;
    },
    x = (S) => {
      if (b) {
        r(new Error("Animation cancelled"));
        return;
      }
      h === null && (h = S);
      const m = Math.min(1, (S - h) / p);
      if (((e[t] = a(m) * (o - f) + f), m >= 1)) {
        requestAnimationFrame(() => {
          r(null);
        });
        return;
      }
      requestAnimationFrame(x);
    };
  return f === o
    ? (r(new Error("Element already at target position")), C)
    : (requestAnimationFrame(x), C);
}
const me = ["onChange"],
  ve = {
    width: 99,
    height: 99,
    position: "absolute",
    top: -9999,
    overflow: "scroll",
  };
function ge(t) {
  const { onChange: e } = t,
    o = J(t, me),
    n = u.useRef(),
    r = u.useRef(null),
    a = () => {
      n.current = r.current.offsetHeight - r.current.clientHeight;
    };
  return (
    u.useEffect(() => {
      const p = bt(() => {
          const f = n.current;
          a(), f !== n.current && e(n.current);
        }),
        h = Lt(r.current);
      return (
        h.addEventListener("resize", p),
        () => {
          p.clear(), h.removeEventListener("resize", p);
        }
      );
    }, [e]),
    u.useEffect(() => {
      a(), e(n.current);
    }, [e]),
    T("div", d({ style: ve, ref: r }, o))
  );
}
function xe(t) {
  return St("MuiTabScrollButton", t);
}
const ye = ht("MuiTabScrollButton", [
    "root",
    "vertical",
    "horizontal",
    "disabled",
  ]),
  Ce = ye,
  we = [
    "className",
    "slots",
    "slotProps",
    "direction",
    "orientation",
    "disabled",
  ],
  Be = (t) => {
    const { classes: e, orientation: o, disabled: n } = t;
    return vt({ root: ["root", o, n && "disabled"] }, xe, e);
  },
  Te = H($t, {
    name: "MuiTabScrollButton",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [e.root, o.orientation && e[o.orientation]];
    },
  })(({ ownerState: t }) =>
    d(
      {
        width: 40,
        flexShrink: 0,
        opacity: 0.8,
        [`&.${Ce.disabled}`]: { opacity: 0 },
      },
      t.orientation === "vertical" && {
        width: "100%",
        height: 40,
        "& svg": { transform: `rotate(${t.isRtl ? -90 : 90}deg)` },
      }
    )
  ),
  Ie = u.forwardRef(function (e, o) {
    var n, r;
    const a = mt({ props: e, name: "MuiTabScrollButton" }),
      { className: p, slots: h = {}, slotProps: f = {}, direction: b } = a,
      C = J(a, we),
      S = Ht().direction === "rtl",
      m = d({ isRtl: S }, a),
      P = Be(m),
      g = (n = h.StartScrollButtonIcon) != null ? n : pe,
      y = (r = h.EndScrollButtonIcon) != null ? r : be,
      A = rt({
        elementType: g,
        externalSlotProps: f.startScrollButtonIcon,
        additionalProps: { fontSize: "small" },
        ownerState: m,
      }),
      R = rt({
        elementType: y,
        externalSlotProps: f.endScrollButtonIcon,
        additionalProps: { fontSize: "small" },
        ownerState: m,
      });
    return T(
      Te,
      d(
        {
          component: "div",
          className: E(P.root, p),
          ref: o,
          role: null,
          ownerState: m,
          tabIndex: null,
        },
        C,
        { children: b === "left" ? T(g, d({}, A)) : T(y, d({}, R)) }
      )
    );
  }),
  Ee = Ie;
function Pe(t) {
  return St("MuiTabs", t);
}
const Re = ht("MuiTabs", [
    "root",
    "vertical",
    "flexContainer",
    "flexContainerVertical",
    "centered",
    "scroller",
    "fixed",
    "scrollableX",
    "scrollableY",
    "hideScrollbar",
    "scrollButtons",
    "scrollButtonsHideMobile",
    "indicator",
  ]),
  pt = Re,
  Me = [
    "aria-label",
    "aria-labelledby",
    "action",
    "centered",
    "children",
    "className",
    "component",
    "allowScrollButtonsMobile",
    "indicatorColor",
    "onChange",
    "orientation",
    "ScrollButtonComponent",
    "scrollButtons",
    "selectionFollowsFocus",
    "slots",
    "slotProps",
    "TabIndicatorProps",
    "TabScrollButtonProps",
    "textColor",
    "value",
    "variant",
    "visibleScrollbar",
  ],
  Mt = (t, e) =>
    t === e
      ? t.firstChild
      : e && e.nextElementSibling
      ? e.nextElementSibling
      : t.firstChild,
  Wt = (t, e) =>
    t === e
      ? t.lastChild
      : e && e.previousElementSibling
      ? e.previousElementSibling
      : t.lastChild,
  nt = (t, e, o) => {
    let n = !1,
      r = o(t, e);
    for (; r; ) {
      if (r === t.firstChild) {
        if (n) return;
        n = !0;
      }
      const a = r.disabled || r.getAttribute("aria-disabled") === "true";
      if (!r.hasAttribute("tabindex") || a) r = o(t, r);
      else {
        r.focus();
        return;
      }
    }
  },
  We = (t) => {
    const {
      vertical: e,
      fixed: o,
      hideScrollbar: n,
      scrollableX: r,
      scrollableY: a,
      centered: p,
      scrollButtonsHideMobile: h,
      classes: f,
    } = t;
    return vt(
      {
        root: ["root", e && "vertical"],
        scroller: [
          "scroller",
          o && "fixed",
          n && "hideScrollbar",
          r && "scrollableX",
          a && "scrollableY",
        ],
        flexContainer: [
          "flexContainer",
          e && "flexContainerVertical",
          p && "centered",
        ],
        indicator: ["indicator"],
        scrollButtons: ["scrollButtons", h && "scrollButtonsHideMobile"],
        scrollableX: [r && "scrollableX"],
        hideScrollbar: [n && "hideScrollbar"],
      },
      Pe,
      f
    );
  },
  Ne = H("div", {
    name: "MuiTabs",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        { [`& .${pt.scrollButtons}`]: e.scrollButtons },
        {
          [`& .${pt.scrollButtons}`]:
            o.scrollButtonsHideMobile && e.scrollButtonsHideMobile,
        },
        e.root,
        o.vertical && e.vertical,
      ];
    },
  })(({ ownerState: t, theme: e }) =>
    d(
      {
        overflow: "hidden",
        minHeight: 48,
        WebkitOverflowScrolling: "touch",
        display: "flex",
      },
      t.vertical && { flexDirection: "column" },
      t.scrollButtonsHideMobile && {
        [`& .${pt.scrollButtons}`]: {
          [e.breakpoints.down("sm")]: { display: "none" },
        },
      }
    )
  ),
  ze = H("div", {
    name: "MuiTabs",
    slot: "Scroller",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.scroller,
        o.fixed && e.fixed,
        o.hideScrollbar && e.hideScrollbar,
        o.scrollableX && e.scrollableX,
        o.scrollableY && e.scrollableY,
      ];
    },
  })(({ ownerState: t }) =>
    d(
      {
        position: "relative",
        display: "inline-block",
        flex: "1 1 auto",
        whiteSpace: "nowrap",
      },
      t.fixed && { overflowX: "hidden", width: "100%" },
      t.hideScrollbar && {
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      },
      t.scrollableX && { overflowX: "auto", overflowY: "hidden" },
      t.scrollableY && { overflowY: "auto", overflowX: "hidden" }
    )
  ),
  $e = H("div", {
    name: "MuiTabs",
    slot: "FlexContainer",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.flexContainer,
        o.vertical && e.flexContainerVertical,
        o.centered && e.centered,
      ];
    },
  })(({ ownerState: t }) =>
    d(
      { display: "flex" },
      t.vertical && { flexDirection: "column" },
      t.centered && { justifyContent: "center" }
    )
  ),
  ke = H("span", {
    name: "MuiTabs",
    slot: "Indicator",
    overridesResolver: (t, e) => e.indicator,
  })(({ ownerState: t, theme: e }) =>
    d(
      {
        position: "absolute",
        height: 2,
        bottom: 0,
        width: "100%",
        transition: e.transitions.create(),
      },
      t.indicatorColor === "primary" && {
        backgroundColor: (e.vars || e).palette.primary.main,
      },
      t.indicatorColor === "secondary" && {
        backgroundColor: (e.vars || e).palette.secondary.main,
      },
      t.vertical && { height: "100%", width: 2, right: 0 }
    )
  ),
  Le = H(ge, { name: "MuiTabs", slot: "ScrollbarSize" })({
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
  }),
  Nt = {},
  Fe = u.forwardRef(function (e, o) {
    const n = mt({ props: e, name: "MuiTabs" }),
      r = Ht(),
      a = r.direction === "rtl",
      {
        "aria-label": p,
        "aria-labelledby": h,
        action: f,
        centered: b = !1,
        children: C,
        className: x,
        component: S = "div",
        allowScrollButtonsMobile: m = !1,
        indicatorColor: P = "primary",
        onChange: g,
        orientation: y = "horizontal",
        ScrollButtonComponent: A = Ee,
        scrollButtons: R = "auto",
        selectionFollowsFocus: st,
        slots: X = {},
        slotProps: V = {},
        TabIndicatorProps: D = {},
        TabScrollButtonProps: z = {},
        textColor: Q = "primary",
        value: O,
        variant: M = "standard",
        visibleScrollbar: at = !1,
      } = n,
      At = J(n, Me),
      W = M === "scrollable",
      w = y === "vertical",
      K = w ? "scrollTop" : "scrollLeft",
      tt = w ? "top" : "left",
      et = w ? "bottom" : "right",
      it = w ? "clientHeight" : "clientWidth",
      j = w ? "height" : "width",
      $ = d({}, n, {
        component: S,
        allowScrollButtonsMobile: m,
        indicatorColor: P,
        orientation: y,
        vertical: w,
        scrollButtons: R,
        textColor: Q,
        variant: M,
        visibleScrollbar: at,
        fixed: !W,
        hideScrollbar: W && !at,
        scrollableX: W && !w,
        scrollableY: W && w,
        centered: b && !W,
        scrollButtonsHideMobile: !m,
      }),
      N = We($),
      Xt = rt({
        elementType: X.StartScrollButtonIcon,
        externalSlotProps: V.startScrollButtonIcon,
        ownerState: $,
      }),
      Dt = rt({
        elementType: X.EndScrollButtonIcon,
        externalSlotProps: V.endScrollButtonIcon,
        ownerState: $,
      }),
      [gt, Ot] = u.useState(!1),
      [k, xt] = u.useState(Nt),
      [Y, Yt] = u.useState({ start: !1, end: !1 }),
      [yt, _t] = u.useState({ overflow: "hidden", scrollbarWidth: 0 }),
      Ct = new Map(),
      I = u.useRef(null),
      q = u.useRef(null),
      wt = () => {
        const l = I.current;
        let s;
        if (l) {
          const c = l.getBoundingClientRect();
          s = {
            clientWidth: l.clientWidth,
            scrollLeft: l.scrollLeft,
            scrollTop: l.scrollTop,
            scrollLeftNormalized: Pt(l, r.direction),
            scrollWidth: l.scrollWidth,
            top: c.top,
            bottom: c.bottom,
            left: c.left,
            right: c.right,
          };
        }
        let i;
        if (l && O !== !1) {
          const c = q.current.children;
          if (c.length > 0) {
            const v = c[Ct.get(O)];
            i = v ? v.getBoundingClientRect() : null;
          }
        }
        return { tabsMeta: s, tabMeta: i };
      },
      Z = ft(() => {
        const { tabsMeta: l, tabMeta: s } = wt();
        let i = 0,
          c;
        if (w) (c = "top"), s && l && (i = s.top - l.top + l.scrollTop);
        else if (((c = a ? "right" : "left"), s && l)) {
          const B = a
            ? l.scrollLeftNormalized + l.clientWidth - l.scrollWidth
            : l.scrollLeft;
          i = (a ? -1 : 1) * (s[c] - l[c] + B);
        }
        const v = { [c]: i, [j]: s ? s[j] : 0 };
        if (isNaN(k[c]) || isNaN(k[j])) xt(v);
        else {
          const B = Math.abs(k[c] - v[c]),
            _ = Math.abs(k[j] - v[j]);
          (B >= 1 || _ >= 1) && xt(v);
        }
      }),
      ct = (l, { animation: s = !0 } = {}) => {
        s
          ? Se(K, I.current, l, { duration: r.transitions.duration.standard })
          : (I.current[K] = l);
      },
      Bt = (l) => {
        let s = I.current[K];
        w
          ? (s += l)
          : ((s += l * (a ? -1 : 1)), (s *= a && Ft() === "reverse" ? -1 : 1)),
          ct(s);
      },
      Tt = () => {
        const l = I.current[it];
        let s = 0;
        const i = Array.from(q.current.children);
        for (let c = 0; c < i.length; c += 1) {
          const v = i[c];
          if (s + v[it] > l) {
            c === 0 && (s = l);
            break;
          }
          s += v[it];
        }
        return s;
      },
      Ut = () => {
        Bt(-1 * Tt());
      },
      Vt = () => {
        Bt(Tt());
      },
      Kt = u.useCallback((l) => {
        _t({ overflow: null, scrollbarWidth: l });
      }, []),
      jt = () => {
        const l = {};
        l.scrollbarSizeListener = W
          ? T(Le, {
              onChange: Kt,
              className: E(N.scrollableX, N.hideScrollbar),
            })
          : null;
        const s = Y.start || Y.end,
          i = W && ((R === "auto" && s) || R === !0);
        return (
          (l.scrollButtonStart = i
            ? T(
                A,
                d(
                  {
                    slots: { StartScrollButtonIcon: X.StartScrollButtonIcon },
                    slotProps: { startScrollButtonIcon: Xt },
                    orientation: y,
                    direction: a ? "right" : "left",
                    onClick: Ut,
                    disabled: !Y.start,
                  },
                  z,
                  { className: E(N.scrollButtons, z.className) }
                )
              )
            : null),
          (l.scrollButtonEnd = i
            ? T(
                A,
                d(
                  {
                    slots: { EndScrollButtonIcon: X.EndScrollButtonIcon },
                    slotProps: { endScrollButtonIcon: Dt },
                    orientation: y,
                    direction: a ? "left" : "right",
                    onClick: Vt,
                    disabled: !Y.end,
                  },
                  z,
                  { className: E(N.scrollButtons, z.className) }
                )
              )
            : null),
          l
        );
      },
      It = ft((l) => {
        const { tabsMeta: s, tabMeta: i } = wt();
        if (!(!i || !s)) {
          if (i[tt] < s[tt]) {
            const c = s[K] + (i[tt] - s[tt]);
            ct(c, { animation: l });
          } else if (i[et] > s[et]) {
            const c = s[K] + (i[et] - s[et]);
            ct(c, { animation: l });
          }
        }
      }),
      L = ft(() => {
        if (W && R !== !1) {
          const {
            scrollTop: l,
            scrollHeight: s,
            clientHeight: i,
            scrollWidth: c,
            clientWidth: v,
          } = I.current;
          let B, _;
          if (w) (B = l > 1), (_ = l < s - i - 1);
          else {
            const lt = Pt(I.current, r.direction);
            (B = a ? lt < c - v - 1 : lt > 1),
              (_ = a ? lt > 1 : lt < c - v - 1);
          }
          (B !== Y.start || _ !== Y.end) && Yt({ start: B, end: _ });
        }
      });
    u.useEffect(() => {
      const l = bt(() => {
          I.current && (Z(), L());
        }),
        s = Lt(I.current);
      s.addEventListener("resize", l);
      let i;
      return (
        typeof ResizeObserver < "u" &&
          ((i = new ResizeObserver(l)),
          Array.from(q.current.children).forEach((c) => {
            i.observe(c);
          })),
        () => {
          l.clear(), s.removeEventListener("resize", l), i && i.disconnect();
        }
      );
    }, [Z, L]);
    const dt = u.useMemo(
      () =>
        bt(() => {
          L();
        }),
      [L]
    );
    u.useEffect(
      () => () => {
        dt.clear();
      },
      [dt]
    ),
      u.useEffect(() => {
        Ot(!0);
      }, []),
      u.useEffect(() => {
        Z(), L();
      }),
      u.useEffect(() => {
        It(Nt !== k);
      }, [It, k]),
      u.useImperativeHandle(
        f,
        () => ({ updateIndicator: Z, updateScrollButtons: L }),
        [Z, L]
      );
    const Et = T(
      ke,
      d({}, D, {
        className: E(N.indicator, D.className),
        ownerState: $,
        style: d({}, k, D.style),
      })
    );
    let ot = 0;
    const qt = u.Children.map(C, (l) => {
        if (!u.isValidElement(l)) return null;
        const s = l.props.value === void 0 ? ot : l.props.value;
        Ct.set(s, ot);
        const i = s === O;
        return (
          (ot += 1),
          u.cloneElement(
            l,
            d(
              {
                fullWidth: M === "fullWidth",
                indicator: i && !gt && Et,
                selected: i,
                selectionFollowsFocus: st,
                onChange: g,
                textColor: Q,
                value: s,
              },
              ot === 1 && O === !1 && !l.props.tabIndex ? { tabIndex: 0 } : {}
            )
          )
        );
      }),
      Zt = (l) => {
        const s = q.current,
          i = ee(s).activeElement;
        if (i.getAttribute("role") !== "tab") return;
        let v = y === "horizontal" ? "ArrowLeft" : "ArrowUp",
          B = y === "horizontal" ? "ArrowRight" : "ArrowDown";
        switch (
          (y === "horizontal" && a && ((v = "ArrowRight"), (B = "ArrowLeft")),
          l.key)
        ) {
          case v:
            l.preventDefault(), nt(s, i, Wt);
            break;
          case B:
            l.preventDefault(), nt(s, i, Mt);
            break;
          case "Home":
            l.preventDefault(), nt(s, null, Mt);
            break;
          case "End":
            l.preventDefault(), nt(s, null, Wt);
            break;
        }
      },
      ut = jt();
    return G(
      Ne,
      d({ className: E(N.root, x), ownerState: $, ref: o, as: S }, At, {
        children: [
          ut.scrollButtonStart,
          ut.scrollbarSizeListener,
          G(ze, {
            className: N.scroller,
            ownerState: $,
            style: {
              overflow: yt.overflow,
              [w ? `margin${a ? "Left" : "Right"}` : "marginBottom"]: at
                ? void 0
                : -yt.scrollbarWidth,
            },
            ref: I,
            onScroll: dt,
            children: [
              T($e, {
                "aria-label": p,
                "aria-labelledby": h,
                "aria-orientation": y === "vertical" ? "vertical" : null,
                className: N.flexContainer,
                ownerState: $,
                onKeyDown: Zt,
                ref: q,
                role: "tablist",
                children: qt,
              }),
              gt && Et,
            ],
          }),
          ut.scrollButtonEnd,
        ],
      })
    );
  }),
  De = Fe;
export { De as T, Xe as a };
