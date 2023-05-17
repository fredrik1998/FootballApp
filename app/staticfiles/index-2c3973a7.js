function kx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Tx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function e4(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(t, o);
        return new i();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Ti = {},
  bx = {
    get exports() {
      return Ti;
    },
    set exports(e) {
      Ti = e;
    },
  },
  ul = {},
  P = {},
  Ax = {
    get exports() {
      return P;
    },
    set exports(e) {
      P = e;
    },
  },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var is = Symbol.for("react.element"),
  Ox = Symbol.for("react.portal"),
  Rx = Symbol.for("react.fragment"),
  Lx = Symbol.for("react.strict_mode"),
  _x = Symbol.for("react.profiler"),
  Mx = Symbol.for("react.provider"),
  $x = Symbol.for("react.context"),
  Dx = Symbol.for("react.forward_ref"),
  jx = Symbol.for("react.suspense"),
  Nx = Symbol.for("react.memo"),
  Ix = Symbol.for("react.lazy"),
  Hh = Symbol.iterator;
function Fx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hh && e[Hh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var w0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  x0 = Object.assign,
  C0 = {};
function $o(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = C0),
    (this.updater = n || w0);
}
$o.prototype.isReactComponent = {};
$o.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
$o.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function P0() {}
P0.prototype = $o.prototype;
function zd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = C0),
    (this.updater = n || w0);
}
var Ud = (zd.prototype = new P0());
Ud.constructor = zd;
x0(Ud, $o.prototype);
Ud.isPureReactComponent = !0;
var Kh = Array.isArray,
  E0 = Object.prototype.hasOwnProperty,
  Wd = { current: null },
  k0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function T0(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      E0.call(t, r) && !k0.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: is,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Wd.current,
  };
}
function Vx(e, t) {
  return {
    $$typeof: is,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === is;
}
function Bx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Gh = /\/+/g;
function Su(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Bx("" + e.key)
    : t.toString(36);
}
function Ks(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case is:
          case Ox:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Su(s, 0) : r),
      Kh(o)
        ? ((n = ""),
          e != null && (n = e.replace(Gh, "$&/") + "/"),
          Ks(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Hd(o) &&
            (o = Vx(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Gh, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Kh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Su(i, a);
      s += Ks(i, t, n, l, o);
    }
  else if (((l = Fx(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Su(i, a++)), (s += Ks(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ps(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ks(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function zx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var at = { current: null },
  Gs = { transition: null },
  Ux = {
    ReactCurrentDispatcher: at,
    ReactCurrentBatchConfig: Gs,
    ReactCurrentOwner: Wd,
  };
J.Children = {
  map: Ps,
  forEach: function (e, t, n) {
    Ps(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ps(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ps(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
J.Component = $o;
J.Fragment = Rx;
J.Profiler = _x;
J.PureComponent = zd;
J.StrictMode = Lx;
J.Suspense = jx;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ux;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = x0({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Wd.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      E0.call(t, l) &&
        !k0.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: is, type: e.type, key: o, ref: i, props: r, _owner: s };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: $x,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Mx, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = T0;
J.createFactory = function (e) {
  var t = T0.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: Dx, render: e };
};
J.isValidElement = Hd;
J.lazy = function (e) {
  return { $$typeof: Ix, _payload: { _status: -1, _result: e }, _init: zx };
};
J.memo = function (e, t) {
  return { $$typeof: Nx, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = Gs.transition;
  Gs.transition = {};
  try {
    e();
  } finally {
    Gs.transition = t;
  }
};
J.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
J.useCallback = function (e, t) {
  return at.current.useCallback(e, t);
};
J.useContext = function (e) {
  return at.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return at.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return at.current.useEffect(e, t);
};
J.useId = function () {
  return at.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return at.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return at.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return at.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return at.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return at.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return at.current.useRef(e);
};
J.useState = function (e) {
  return at.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return at.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return at.current.useTransition();
};
J.version = "18.2.0";
(function (e) {
  e.exports = J;
})(Ax);
const On = Tx(P),
  bi = kx({ __proto__: null, default: On }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wx = P,
  Hx = Symbol.for("react.element"),
  Kx = Symbol.for("react.fragment"),
  Gx = Object.prototype.hasOwnProperty,
  Yx = Wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qx = { key: !0, ref: !0, __self: !0, __source: !0 };
function b0(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Gx.call(t, r) && !Qx.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Hx,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Yx.current,
  };
}
ul.Fragment = Kx;
ul.jsx = b0;
ul.jsxs = b0;
(function (e) {
  e.exports = ul;
})(bx);
const A0 = Ti.Fragment,
  W = Ti.jsx,
  Kd = Ti.jsxs,
  t4 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Fragment: A0, jsx: W, jsxs: Kd },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
var lf = {},
  ha = {},
  Xx = {
    get exports() {
      return ha;
    },
    set exports(e) {
      ha = e;
    },
  },
  bt = {},
  uf = {},
  qx = {
    get exports() {
      return uf;
    },
    set exports(e) {
      uf = e;
    },
  },
  O0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, N) {
    var V = _.length;
    _.push(N);
    e: for (; 0 < V; ) {
      var I = (V - 1) >>> 1,
        L = _[I];
      if (0 < o(L, N)) (_[I] = N), (_[V] = L), (V = I);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var N = _[0],
      V = _.pop();
    if (V !== N) {
      _[0] = V;
      e: for (var I = 0, L = _.length, $ = L >>> 1; I < $; ) {
        var D = 2 * (I + 1) - 1,
          B = _[D],
          C = D + 1,
          Y = _[C];
        if (0 > o(B, V))
          C < L && 0 > o(Y, B)
            ? ((_[I] = Y), (_[C] = V), (I = C))
            : ((_[I] = B), (_[D] = V), (I = D));
        else if (C < L && 0 > o(Y, V)) (_[I] = Y), (_[C] = V), (I = C);
        else break e;
      }
    }
    return N;
  }
  function o(_, N) {
    var V = _.sortIndex - N.sortIndex;
    return V !== 0 ? V : _.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    p = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(_) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= _)
        r(u), (N.sortIndex = N.expirationTime), t(l, N);
      else break;
      N = n(u);
    }
  }
  function w(_) {
    if (((g = !1), v(_), !p))
      if (n(l) !== null) (p = !0), Ve(x);
      else {
        var N = n(u);
        N !== null && ke(w, N.startTime - _);
      }
  }
  function x(_, N) {
    (p = !1), g && ((g = !1), y(T), (T = -1)), (m = !0);
    var V = d;
    try {
      for (
        v(N), f = n(l);
        f !== null && (!(f.expirationTime > N) || (_ && !H()));

      ) {
        var I = f.callback;
        if (typeof I == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var L = I(f.expirationTime <= N);
          (N = e.unstable_now()),
            typeof L == "function" ? (f.callback = L) : f === n(l) && r(l),
            v(N);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var $ = !0;
      else {
        var D = n(u);
        D !== null && ke(w, D.startTime - N), ($ = !1);
      }
      return $;
    } finally {
      (f = null), (d = V), (m = !1);
    }
  }
  var b = !1,
    E = null,
    T = -1,
    O = 5,
    R = -1;
  function H() {
    return !(e.unstable_now() - R < O);
  }
  function te() {
    if (E !== null) {
      var _ = e.unstable_now();
      R = _;
      var N = !0;
      try {
        N = E(!0, _);
      } finally {
        N ? de() : ((b = !1), (E = null));
      }
    } else b = !1;
  }
  var de;
  if (typeof h == "function")
    de = function () {
      h(te);
    };
  else if (typeof MessageChannel < "u") {
    var X = new MessageChannel(),
      q = X.port2;
    (X.port1.onmessage = te),
      (de = function () {
        q.postMessage(null);
      });
  } else
    de = function () {
      S(te, 0);
    };
  function Ve(_) {
    (E = _), b || ((b = !0), de());
  }
  function ke(_, N) {
    T = S(function () {
      _(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || m || ((p = !0), Ve(x));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (_) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = d;
      }
      var V = d;
      d = N;
      try {
        return _();
      } finally {
        d = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, N) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var V = d;
      d = _;
      try {
        return N();
      } finally {
        d = V;
      }
    }),
    (e.unstable_scheduleCallback = function (_, N, V) {
      var I = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? I + V : I))
          : (V = I),
        _)
      ) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return (
        (L = V + L),
        (_ = {
          id: c++,
          callback: N,
          priorityLevel: _,
          startTime: V,
          expirationTime: L,
          sortIndex: -1,
        }),
        V > I
          ? ((_.sortIndex = V),
            t(u, _),
            n(l) === null &&
              _ === n(u) &&
              (g ? (y(T), (T = -1)) : (g = !0), ke(w, V - I)))
          : ((_.sortIndex = L), t(l, _), p || m || ((p = !0), Ve(x))),
        _
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (_) {
      var N = d;
      return function () {
        var V = d;
        d = N;
        try {
          return _.apply(this, arguments);
        } finally {
          d = V;
        }
      };
    });
})(O0);
(function (e) {
  e.exports = O0;
})(qx);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var R0 = P,
  Et = uf;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var L0 = new Set(),
  Ai = {};
function Dr(e, t) {
  xo(e, t), xo(e + "Capture", t);
}
function xo(e, t) {
  for (Ai[e] = t, e = 0; e < t.length; e++) L0.add(t[e]);
}
var Cn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  cf = Object.prototype.hasOwnProperty,
  Jx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yh = {},
  Qh = {};
function Zx(e) {
  return cf.call(Qh, e)
    ? !0
    : cf.call(Yh, e)
    ? !1
    : Jx.test(e)
    ? (Qh[e] = !0)
    : ((Yh[e] = !0), !1);
}
function eC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function tC(e, t, n, r) {
  if (t === null || typeof t > "u" || eC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function lt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Xe[e] = new lt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Xe[t] = new lt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Xe[e] = new lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Xe[e] = new lt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Xe[e] = new lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Xe[e] = new lt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Xe[e] = new lt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Xe[e] = new lt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Xe[e] = new lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gd = /[\-:]([a-z])/g;
function Yd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gd, Yd);
    Xe[t] = new lt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gd, Yd);
    Xe[t] = new lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Gd, Yd);
  Xe[t] = new lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Xe[e] = new lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Xe.xlinkHref = new lt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Xe[e] = new lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qd(e, t, n, r) {
  var o = Xe.hasOwnProperty(t) ? Xe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (tC(t, n, o, r) && (n = null),
    r || o === null
      ? Zx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rn = R0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Es = Symbol.for("react.element"),
  Gr = Symbol.for("react.portal"),
  Yr = Symbol.for("react.fragment"),
  Xd = Symbol.for("react.strict_mode"),
  ff = Symbol.for("react.profiler"),
  _0 = Symbol.for("react.provider"),
  M0 = Symbol.for("react.context"),
  qd = Symbol.for("react.forward_ref"),
  df = Symbol.for("react.suspense"),
  pf = Symbol.for("react.suspense_list"),
  Jd = Symbol.for("react.memo"),
  Nn = Symbol.for("react.lazy"),
  $0 = Symbol.for("react.offscreen"),
  Xh = Symbol.iterator;
function Uo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xh && e[Xh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ee = Object.assign,
  wu;
function ri(e) {
  if (wu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wu = (t && t[1]) || "";
    }
  return (
    `
` +
    wu +
    e
  );
}
var xu = !1;
function Cu(e, t) {
  if (!e || xu) return "";
  xu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (xu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ri(e) : "";
}
function nC(e) {
  switch (e.tag) {
    case 5:
      return ri(e.type);
    case 16:
      return ri("Lazy");
    case 13:
      return ri("Suspense");
    case 19:
      return ri("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Cu(e.type, !1)), e;
    case 11:
      return (e = Cu(e.type.render, !1)), e;
    case 1:
      return (e = Cu(e.type, !0)), e;
    default:
      return "";
  }
}
function hf(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yr:
      return "Fragment";
    case Gr:
      return "Portal";
    case ff:
      return "Profiler";
    case Xd:
      return "StrictMode";
    case df:
      return "Suspense";
    case pf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case M0:
        return (e.displayName || "Context") + ".Consumer";
      case _0:
        return (e._context.displayName || "Context") + ".Provider";
      case qd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Jd:
        return (
          (t = e.displayName || null), t !== null ? t : hf(e.type) || "Memo"
        );
      case Nn:
        (t = e._payload), (e = e._init);
        try {
          return hf(e(t));
        } catch {}
    }
  return null;
}
function rC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return hf(t);
    case 8:
      return t === Xd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ir(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function D0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function oC(e) {
  var t = D0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ks(e) {
  e._valueTracker || (e._valueTracker = oC(e));
}
function j0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = D0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ma(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mf(e, t) {
  var n = t.checked;
  return Ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ir(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function N0(e, t) {
  (t = t.checked), t != null && Qd(e, "checked", t, !1);
}
function gf(e, t) {
  N0(e, t);
  var n = ir(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? yf(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && yf(e, t.type, ir(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Jh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function yf(e, t, n) {
  (t !== "number" || ma(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var oi = Array.isArray;
function uo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ir(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function vf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return Ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Zh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (oi(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ir(n) };
}
function I0(e, t) {
  var n = ir(t.value),
    r = ir(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function em(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function F0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Sf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? F0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ts,
  V0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ts = Ts || document.createElement("div"),
          Ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ts.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Oi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ui = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  iC = ["Webkit", "ms", "Moz", "O"];
Object.keys(ui).forEach(function (e) {
  iC.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ui[t] = ui[e]);
  });
});
function B0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ui.hasOwnProperty(e) && ui[e])
    ? ("" + t).trim()
    : t + "px";
}
function z0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = B0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var sC = Ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function wf(e, t) {
  if (t) {
    if (sC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function xf(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Cf = null;
function Zd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pf = null,
  co = null,
  fo = null;
function tm(e) {
  if ((e = ls(e))) {
    if (typeof Pf != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = hl(t)), Pf(e.stateNode, e.type, t));
  }
}
function U0(e) {
  co ? (fo ? fo.push(e) : (fo = [e])) : (co = e);
}
function W0() {
  if (co) {
    var e = co,
      t = fo;
    if (((fo = co = null), tm(e), t)) for (e = 0; e < t.length; e++) tm(t[e]);
  }
}
function H0(e, t) {
  return e(t);
}
function K0() {}
var Pu = !1;
function G0(e, t, n) {
  if (Pu) return e(t, n);
  Pu = !0;
  try {
    return H0(e, t, n);
  } finally {
    (Pu = !1), (co !== null || fo !== null) && (K0(), W0());
  }
}
function Ri(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var Ef = !1;
if (Cn)
  try {
    var Wo = {};
    Object.defineProperty(Wo, "passive", {
      get: function () {
        Ef = !0;
      },
    }),
      window.addEventListener("test", Wo, Wo),
      window.removeEventListener("test", Wo, Wo);
  } catch {
    Ef = !1;
  }
function aC(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ci = !1,
  ga = null,
  ya = !1,
  kf = null,
  lC = {
    onError: function (e) {
      (ci = !0), (ga = e);
    },
  };
function uC(e, t, n, r, o, i, s, a, l) {
  (ci = !1), (ga = null), aC.apply(lC, arguments);
}
function cC(e, t, n, r, o, i, s, a, l) {
  if ((uC.apply(this, arguments), ci)) {
    if (ci) {
      var u = ga;
      (ci = !1), (ga = null);
    } else throw Error(A(198));
    ya || ((ya = !0), (kf = u));
  }
}
function jr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Y0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function nm(e) {
  if (jr(e) !== e) throw Error(A(188));
}
function fC(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jr(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return nm(o), e;
        if (i === r) return nm(o), t;
        i = i.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function Q0(e) {
  return (e = fC(e)), e !== null ? X0(e) : null;
}
function X0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = X0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var q0 = Et.unstable_scheduleCallback,
  rm = Et.unstable_cancelCallback,
  dC = Et.unstable_shouldYield,
  pC = Et.unstable_requestPaint,
  Re = Et.unstable_now,
  hC = Et.unstable_getCurrentPriorityLevel,
  ep = Et.unstable_ImmediatePriority,
  J0 = Et.unstable_UserBlockingPriority,
  va = Et.unstable_NormalPriority,
  mC = Et.unstable_LowPriority,
  Z0 = Et.unstable_IdlePriority,
  cl = null,
  on = null;
function gC(e) {
  if (on && typeof on.onCommitFiberRoot == "function")
    try {
      on.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ht = Math.clz32 ? Math.clz32 : SC,
  yC = Math.log,
  vC = Math.LN2;
function SC(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((yC(e) / vC) | 0)) | 0;
}
var bs = 64,
  As = 4194304;
function ii(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Sa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = ii(a)) : ((i &= s), i !== 0 && (r = ii(i)));
  } else (s = n & ~o), s !== 0 ? (r = ii(s)) : i !== 0 && (r = ii(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ht(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function wC(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xC(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Ht(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = wC(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Tf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ev() {
  var e = bs;
  return (bs <<= 1), !(bs & 4194240) && (bs = 64), e;
}
function Eu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ss(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ht(t)),
    (e[t] = n);
}
function CC(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ht(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function tp(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ht(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ue = 0;
function tv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var nv,
  np,
  rv,
  ov,
  iv,
  bf = !1,
  Os = [],
  Kn = null,
  Gn = null,
  Yn = null,
  Li = new Map(),
  _i = new Map(),
  Vn = [],
  PC =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function om(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kn = null;
      break;
    case "dragenter":
    case "dragleave":
      Gn = null;
      break;
    case "mouseover":
    case "mouseout":
      Yn = null;
      break;
    case "pointerover":
    case "pointerout":
      Li.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _i.delete(t.pointerId);
  }
}
function Ho(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ls(t)), t !== null && np(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function EC(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Kn = Ho(Kn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Gn = Ho(Gn, e, t, n, r, o)), !0;
    case "mouseover":
      return (Yn = Ho(Yn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Li.set(i, Ho(Li.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), _i.set(i, Ho(_i.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function sv(e) {
  var t = wr(e.target);
  if (t !== null) {
    var n = jr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Y0(n)), t !== null)) {
          (e.blockedOn = t),
            iv(e.priority, function () {
              rv(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ys(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Af(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Cf = r), n.target.dispatchEvent(r), (Cf = null);
    } else return (t = ls(n)), t !== null && np(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function im(e, t, n) {
  Ys(e) && n.delete(t);
}
function kC() {
  (bf = !1),
    Kn !== null && Ys(Kn) && (Kn = null),
    Gn !== null && Ys(Gn) && (Gn = null),
    Yn !== null && Ys(Yn) && (Yn = null),
    Li.forEach(im),
    _i.forEach(im);
}
function Ko(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    bf ||
      ((bf = !0),
      Et.unstable_scheduleCallback(Et.unstable_NormalPriority, kC)));
}
function Mi(e) {
  function t(o) {
    return Ko(o, e);
  }
  if (0 < Os.length) {
    Ko(Os[0], e);
    for (var n = 1; n < Os.length; n++) {
      var r = Os[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Kn !== null && Ko(Kn, e),
      Gn !== null && Ko(Gn, e),
      Yn !== null && Ko(Yn, e),
      Li.forEach(t),
      _i.forEach(t),
      n = 0;
    n < Vn.length;
    n++
  )
    (r = Vn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vn.length && ((n = Vn[0]), n.blockedOn === null); )
    sv(n), n.blockedOn === null && Vn.shift();
}
var po = Rn.ReactCurrentBatchConfig,
  wa = !0;
function TC(e, t, n, r) {
  var o = ue,
    i = po.transition;
  po.transition = null;
  try {
    (ue = 1), rp(e, t, n, r);
  } finally {
    (ue = o), (po.transition = i);
  }
}
function bC(e, t, n, r) {
  var o = ue,
    i = po.transition;
  po.transition = null;
  try {
    (ue = 4), rp(e, t, n, r);
  } finally {
    (ue = o), (po.transition = i);
  }
}
function rp(e, t, n, r) {
  if (wa) {
    var o = Af(e, t, n, r);
    if (o === null) $u(e, t, r, xa, n), om(e, r);
    else if (EC(o, e, t, n, r)) r.stopPropagation();
    else if ((om(e, r), t & 4 && -1 < PC.indexOf(e))) {
      for (; o !== null; ) {
        var i = ls(o);
        if (
          (i !== null && nv(i),
          (i = Af(e, t, n, r)),
          i === null && $u(e, t, r, xa, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else $u(e, t, r, null, n);
  }
}
var xa = null;
function Af(e, t, n, r) {
  if (((xa = null), (e = Zd(r)), (e = wr(e)), e !== null))
    if (((t = jr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Y0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (xa = e), null;
}
function av(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (hC()) {
        case ep:
          return 1;
        case J0:
          return 4;
        case va:
        case mC:
          return 16;
        case Z0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Un = null,
  op = null,
  Qs = null;
function lv() {
  if (Qs) return Qs;
  var e,
    t = op,
    n = t.length,
    r,
    o = "value" in Un ? Un.value : Un.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Qs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Xs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Rs() {
  return !0;
}
function sm() {
  return !1;
}
function At(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Rs
        : sm),
      (this.isPropagationStopped = sm),
      this
    );
  }
  return (
    Ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Rs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Rs));
      },
      persist: function () {},
      isPersistent: Rs,
    }),
    t
  );
}
var Do = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ip = At(Do),
  as = Ee({}, Do, { view: 0, detail: 0 }),
  AC = At(as),
  ku,
  Tu,
  Go,
  fl = Ee({}, as, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Go &&
            (Go && e.type === "mousemove"
              ? ((ku = e.screenX - Go.screenX), (Tu = e.screenY - Go.screenY))
              : (Tu = ku = 0),
            (Go = e)),
          ku);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Tu;
    },
  }),
  am = At(fl),
  OC = Ee({}, fl, { dataTransfer: 0 }),
  RC = At(OC),
  LC = Ee({}, as, { relatedTarget: 0 }),
  bu = At(LC),
  _C = Ee({}, Do, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  MC = At(_C),
  $C = Ee({}, Do, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  DC = At($C),
  jC = Ee({}, Do, { data: 0 }),
  lm = At(jC),
  NC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  IC = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  FC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function VC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = FC[e]) ? !!t[e] : !1;
}
function sp() {
  return VC;
}
var BC = Ee({}, as, {
    key: function (e) {
      if (e.key) {
        var t = NC[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? IC[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sp,
    charCode: function (e) {
      return e.type === "keypress" ? Xs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  zC = At(BC),
  UC = Ee({}, fl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  um = At(UC),
  WC = Ee({}, as, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sp,
  }),
  HC = At(WC),
  KC = Ee({}, Do, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  GC = At(KC),
  YC = Ee({}, fl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  QC = At(YC),
  XC = [9, 13, 27, 32],
  ap = Cn && "CompositionEvent" in window,
  fi = null;
Cn && "documentMode" in document && (fi = document.documentMode);
var qC = Cn && "TextEvent" in window && !fi,
  uv = Cn && (!ap || (fi && 8 < fi && 11 >= fi)),
  cm = String.fromCharCode(32),
  fm = !1;
function cv(e, t) {
  switch (e) {
    case "keyup":
      return XC.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function fv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Qr = !1;
function JC(e, t) {
  switch (e) {
    case "compositionend":
      return fv(t);
    case "keypress":
      return t.which !== 32 ? null : ((fm = !0), cm);
    case "textInput":
      return (e = t.data), e === cm && fm ? null : e;
    default:
      return null;
  }
}
function ZC(e, t) {
  if (Qr)
    return e === "compositionend" || (!ap && cv(e, t))
      ? ((e = lv()), (Qs = op = Un = null), (Qr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return uv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var eP = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function dm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!eP[e.type] : t === "textarea";
}
function dv(e, t, n, r) {
  U0(r),
    (t = Ca(t, "onChange")),
    0 < t.length &&
      ((n = new ip("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var di = null,
  $i = null;
function tP(e) {
  Pv(e, 0);
}
function dl(e) {
  var t = Jr(e);
  if (j0(t)) return e;
}
function nP(e, t) {
  if (e === "change") return t;
}
var pv = !1;
if (Cn) {
  var Au;
  if (Cn) {
    var Ou = "oninput" in document;
    if (!Ou) {
      var pm = document.createElement("div");
      pm.setAttribute("oninput", "return;"),
        (Ou = typeof pm.oninput == "function");
    }
    Au = Ou;
  } else Au = !1;
  pv = Au && (!document.documentMode || 9 < document.documentMode);
}
function hm() {
  di && (di.detachEvent("onpropertychange", hv), ($i = di = null));
}
function hv(e) {
  if (e.propertyName === "value" && dl($i)) {
    var t = [];
    dv(t, $i, e, Zd(e)), G0(tP, t);
  }
}
function rP(e, t, n) {
  e === "focusin"
    ? (hm(), (di = t), ($i = n), di.attachEvent("onpropertychange", hv))
    : e === "focusout" && hm();
}
function oP(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return dl($i);
}
function iP(e, t) {
  if (e === "click") return dl(t);
}
function sP(e, t) {
  if (e === "input" || e === "change") return dl(t);
}
function aP(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Yt = typeof Object.is == "function" ? Object.is : aP;
function Di(e, t) {
  if (Yt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!cf.call(t, o) || !Yt(e[o], t[o])) return !1;
  }
  return !0;
}
function mm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gm(e, t) {
  var n = mm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = mm(n);
  }
}
function mv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? mv(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function gv() {
  for (var e = window, t = ma(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ma(e.document);
  }
  return t;
}
function lp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function lP(e) {
  var t = gv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    mv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && lp(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = gm(n, i));
        var s = gm(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var uP = Cn && "documentMode" in document && 11 >= document.documentMode,
  Xr = null,
  Of = null,
  pi = null,
  Rf = !1;
function ym(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Rf ||
    Xr == null ||
    Xr !== ma(r) ||
    ((r = Xr),
    "selectionStart" in r && lp(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (pi && Di(pi, r)) ||
      ((pi = r),
      (r = Ca(Of, "onSelect")),
      0 < r.length &&
        ((t = new ip("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xr))));
}
function Ls(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var qr = {
    animationend: Ls("Animation", "AnimationEnd"),
    animationiteration: Ls("Animation", "AnimationIteration"),
    animationstart: Ls("Animation", "AnimationStart"),
    transitionend: Ls("Transition", "TransitionEnd"),
  },
  Ru = {},
  yv = {};
Cn &&
  ((yv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete qr.animationend.animation,
    delete qr.animationiteration.animation,
    delete qr.animationstart.animation),
  "TransitionEvent" in window || delete qr.transitionend.transition);
function pl(e) {
  if (Ru[e]) return Ru[e];
  if (!qr[e]) return e;
  var t = qr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in yv) return (Ru[e] = t[n]);
  return e;
}
var vv = pl("animationend"),
  Sv = pl("animationiteration"),
  wv = pl("animationstart"),
  xv = pl("transitionend"),
  Cv = new Map(),
  vm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function cr(e, t) {
  Cv.set(e, t), Dr(t, [e]);
}
for (var Lu = 0; Lu < vm.length; Lu++) {
  var _u = vm[Lu],
    cP = _u.toLowerCase(),
    fP = _u[0].toUpperCase() + _u.slice(1);
  cr(cP, "on" + fP);
}
cr(vv, "onAnimationEnd");
cr(Sv, "onAnimationIteration");
cr(wv, "onAnimationStart");
cr("dblclick", "onDoubleClick");
cr("focusin", "onFocus");
cr("focusout", "onBlur");
cr(xv, "onTransitionEnd");
xo("onMouseEnter", ["mouseout", "mouseover"]);
xo("onMouseLeave", ["mouseout", "mouseover"]);
xo("onPointerEnter", ["pointerout", "pointerover"]);
xo("onPointerLeave", ["pointerout", "pointerover"]);
Dr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Dr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Dr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Dr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Dr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var si =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  dP = new Set("cancel close invalid load scroll toggle".split(" ").concat(si));
function Sm(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), cC(r, t, void 0, e), (e.currentTarget = null);
}
function Pv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Sm(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Sm(o, a, u), (i = l);
        }
    }
  }
  if (ya) throw ((e = kf), (ya = !1), (kf = null), e);
}
function me(e, t) {
  var n = t[Df];
  n === void 0 && (n = t[Df] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ev(t, e, 2, !1), n.add(r));
}
function Mu(e, t, n) {
  var r = 0;
  t && (r |= 4), Ev(n, e, r, t);
}
var _s = "_reactListening" + Math.random().toString(36).slice(2);
function ji(e) {
  if (!e[_s]) {
    (e[_s] = !0),
      L0.forEach(function (n) {
        n !== "selectionchange" && (dP.has(n) || Mu(n, !1, e), Mu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_s] || ((t[_s] = !0), Mu("selectionchange", !1, t));
  }
}
function Ev(e, t, n, r) {
  switch (av(t)) {
    case 1:
      var o = TC;
      break;
    case 4:
      o = bC;
      break;
    default:
      o = rp;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ef ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function $u(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = wr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  G0(function () {
    var u = i,
      c = Zd(n),
      f = [];
    e: {
      var d = Cv.get(e);
      if (d !== void 0) {
        var m = ip,
          p = e;
        switch (e) {
          case "keypress":
            if (Xs(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = zC;
            break;
          case "focusin":
            (p = "focus"), (m = bu);
            break;
          case "focusout":
            (p = "blur"), (m = bu);
            break;
          case "beforeblur":
          case "afterblur":
            m = bu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = am;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = RC;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = HC;
            break;
          case vv:
          case Sv:
          case wv:
            m = MC;
            break;
          case xv:
            m = GC;
            break;
          case "scroll":
            m = AC;
            break;
          case "wheel":
            m = QC;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = DC;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = um;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          y = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var w = v.stateNode;
          if (
            (v.tag === 5 &&
              w !== null &&
              ((v = w),
              y !== null && ((w = Ri(h, y)), w != null && g.push(Ni(h, w, v)))),
            S)
          )
            break;
          h = h.return;
        }
        0 < g.length &&
          ((d = new m(d, p, null, n, c)), f.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Cf &&
            (p = n.relatedTarget || n.fromElement) &&
            (wr(p) || p[Pn]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((p = n.relatedTarget || n.toElement),
              (m = u),
              (p = p ? wr(p) : null),
              p !== null &&
                ((S = jr(p)), p !== S || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((m = null), (p = u)),
          m !== p)
        ) {
          if (
            ((g = am),
            (w = "onMouseLeave"),
            (y = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = um),
              (w = "onPointerLeave"),
              (y = "onPointerEnter"),
              (h = "pointer")),
            (S = m == null ? d : Jr(m)),
            (v = p == null ? d : Jr(p)),
            (d = new g(w, h + "leave", m, n, c)),
            (d.target = S),
            (d.relatedTarget = v),
            (w = null),
            wr(c) === u &&
              ((g = new g(y, h + "enter", p, n, c)),
              (g.target = v),
              (g.relatedTarget = S),
              (w = g)),
            (S = w),
            m && p)
          )
            t: {
              for (g = m, y = p, h = 0, v = g; v; v = Vr(v)) h++;
              for (v = 0, w = y; w; w = Vr(w)) v++;
              for (; 0 < h - v; ) (g = Vr(g)), h--;
              for (; 0 < v - h; ) (y = Vr(y)), v--;
              for (; h--; ) {
                if (g === y || (y !== null && g === y.alternate)) break t;
                (g = Vr(g)), (y = Vr(y));
              }
              g = null;
            }
          else g = null;
          m !== null && wm(f, d, m, g, !1),
            p !== null && S !== null && wm(f, S, p, g, !0);
        }
      }
      e: {
        if (
          ((d = u ? Jr(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var x = nP;
        else if (dm(d))
          if (pv) x = sP;
          else {
            x = oP;
            var b = rP;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (x = iP);
        if (x && (x = x(e, u))) {
          dv(f, x, n, c);
          break e;
        }
        b && b(e, d, u),
          e === "focusout" &&
            (b = d._wrapperState) &&
            b.controlled &&
            d.type === "number" &&
            yf(d, "number", d.value);
      }
      switch (((b = u ? Jr(u) : window), e)) {
        case "focusin":
          (dm(b) || b.contentEditable === "true") &&
            ((Xr = b), (Of = u), (pi = null));
          break;
        case "focusout":
          pi = Of = Xr = null;
          break;
        case "mousedown":
          Rf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Rf = !1), ym(f, n, c);
          break;
        case "selectionchange":
          if (uP) break;
        case "keydown":
        case "keyup":
          ym(f, n, c);
      }
      var E;
      if (ap)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Qr
          ? cv(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (uv &&
          n.locale !== "ko" &&
          (Qr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Qr && (E = lv())
            : ((Un = c),
              (op = "value" in Un ? Un.value : Un.textContent),
              (Qr = !0))),
        (b = Ca(u, T)),
        0 < b.length &&
          ((T = new lm(T, e, null, n, c)),
          f.push({ event: T, listeners: b }),
          E ? (T.data = E) : ((E = fv(n)), E !== null && (T.data = E)))),
        (E = qC ? JC(e, n) : ZC(e, n)) &&
          ((u = Ca(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new lm("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Pv(f, t);
  });
}
function Ni(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ca(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ri(e, n)),
      i != null && r.unshift(Ni(e, i, o)),
      (i = Ri(e, t)),
      i != null && r.push(Ni(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Vr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Ri(n, i)), l != null && s.unshift(Ni(n, l, a)))
        : o || ((l = Ri(n, i)), l != null && s.push(Ni(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var pP = /\r\n?/g,
  hP = /\u0000|\uFFFD/g;
function xm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      pP,
      `
`
    )
    .replace(hP, "");
}
function Ms(e, t, n) {
  if (((t = xm(t)), xm(e) !== t && n)) throw Error(A(425));
}
function Pa() {}
var Lf = null,
  _f = null;
function Mf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var $f = typeof setTimeout == "function" ? setTimeout : void 0,
  mP = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Cm = typeof Promise == "function" ? Promise : void 0,
  gP =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Cm < "u"
      ? function (e) {
          return Cm.resolve(null).then(e).catch(yP);
        }
      : $f;
function yP(e) {
  setTimeout(function () {
    throw e;
  });
}
function Du(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Mi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Mi(t);
}
function Qn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Pm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jo = Math.random().toString(36).slice(2),
  en = "__reactFiber$" + jo,
  Ii = "__reactProps$" + jo,
  Pn = "__reactContainer$" + jo,
  Df = "__reactEvents$" + jo,
  vP = "__reactListeners$" + jo,
  SP = "__reactHandles$" + jo;
function wr(e) {
  var t = e[en];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pn] || n[en])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pm(e); e !== null; ) {
          if ((n = e[en])) return n;
          e = Pm(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ls(e) {
  return (
    (e = e[en] || e[Pn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function hl(e) {
  return e[Ii] || null;
}
var jf = [],
  Zr = -1;
function fr(e) {
  return { current: e };
}
function ge(e) {
  0 > Zr || ((e.current = jf[Zr]), (jf[Zr] = null), Zr--);
}
function he(e, t) {
  Zr++, (jf[Zr] = e.current), (e.current = t);
}
var sr = {},
  rt = fr(sr),
  pt = fr(!1),
  Tr = sr;
function Co(e, t) {
  var n = e.type.contextTypes;
  if (!n) return sr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ht(e) {
  return (e = e.childContextTypes), e != null;
}
function Ea() {
  ge(pt), ge(rt);
}
function Em(e, t, n) {
  if (rt.current !== sr) throw Error(A(168));
  he(rt, t), he(pt, n);
}
function kv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, rC(e) || "Unknown", o));
  return Ee({}, n, r);
}
function ka(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || sr),
    (Tr = rt.current),
    he(rt, e),
    he(pt, pt.current),
    !0
  );
}
function km(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n
    ? ((e = kv(e, t, Tr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ge(pt),
      ge(rt),
      he(rt, e))
    : ge(pt),
    he(pt, n);
}
var fn = null,
  ml = !1,
  ju = !1;
function Tv(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
function wP(e) {
  (ml = !0), Tv(e);
}
function dr() {
  if (!ju && fn !== null) {
    ju = !0;
    var e = 0,
      t = ue;
    try {
      var n = fn;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (fn = null), (ml = !1);
    } catch (o) {
      throw (fn !== null && (fn = fn.slice(e + 1)), q0(ep, dr), o);
    } finally {
      (ue = t), (ju = !1);
    }
  }
  return null;
}
var eo = [],
  to = 0,
  Ta = null,
  ba = 0,
  Lt = [],
  _t = 0,
  br = null,
  dn = 1,
  pn = "";
function mr(e, t) {
  (eo[to++] = ba), (eo[to++] = Ta), (Ta = e), (ba = t);
}
function bv(e, t, n) {
  (Lt[_t++] = dn), (Lt[_t++] = pn), (Lt[_t++] = br), (br = e);
  var r = dn;
  e = pn;
  var o = 32 - Ht(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Ht(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (dn = (1 << (32 - Ht(t) + o)) | (n << o) | r),
      (pn = i + e);
  } else (dn = (1 << i) | (n << o) | r), (pn = e);
}
function up(e) {
  e.return !== null && (mr(e, 1), bv(e, 1, 0));
}
function cp(e) {
  for (; e === Ta; )
    (Ta = eo[--to]), (eo[to] = null), (ba = eo[--to]), (eo[to] = null);
  for (; e === br; )
    (br = Lt[--_t]),
      (Lt[_t] = null),
      (pn = Lt[--_t]),
      (Lt[_t] = null),
      (dn = Lt[--_t]),
      (Lt[_t] = null);
}
var Ct = null,
  xt = null,
  Se = !1,
  Ut = null;
function Av(e, t) {
  var n = Mt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Tm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ct = e), (xt = Qn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ct = e), (xt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = br !== null ? { id: dn, overflow: pn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ct = e),
            (xt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Nf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function If(e) {
  if (Se) {
    var t = xt;
    if (t) {
      var n = t;
      if (!Tm(e, t)) {
        if (Nf(e)) throw Error(A(418));
        t = Qn(n.nextSibling);
        var r = Ct;
        t && Tm(e, t)
          ? Av(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (Ct = e));
      }
    } else {
      if (Nf(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (Se = !1), (Ct = e);
    }
  }
}
function bm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ct = e;
}
function $s(e) {
  if (e !== Ct) return !1;
  if (!Se) return bm(e), (Se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Mf(e.type, e.memoizedProps))),
    t && (t = xt))
  ) {
    if (Nf(e)) throw (Ov(), Error(A(418)));
    for (; t; ) Av(e, t), (t = Qn(t.nextSibling));
  }
  if ((bm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xt = Qn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xt = null;
    }
  } else xt = Ct ? Qn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ov() {
  for (var e = xt; e; ) e = Qn(e.nextSibling);
}
function Po() {
  (xt = Ct = null), (Se = !1);
}
function fp(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
var xP = Rn.ReactCurrentBatchConfig;
function Bt(e, t) {
  if (e && e.defaultProps) {
    (t = Ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Aa = fr(null),
  Oa = null,
  no = null,
  dp = null;
function pp() {
  dp = no = Oa = null;
}
function hp(e) {
  var t = Aa.current;
  ge(Aa), (e._currentValue = t);
}
function Ff(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ho(e, t) {
  (Oa = e),
    (dp = no = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (dt = !0), (e.firstContext = null));
}
function Dt(e) {
  var t = e._currentValue;
  if (dp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), no === null)) {
      if (Oa === null) throw Error(A(308));
      (no = e), (Oa.dependencies = { lanes: 0, firstContext: e });
    } else no = no.next = e;
  return t;
}
var xr = null;
function mp(e) {
  xr === null ? (xr = [e]) : xr.push(e);
}
function Rv(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), mp(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    En(e, r)
  );
}
function En(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var In = !1;
function gp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Lv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function mn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), re & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      En(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), mp(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    En(e, n)
  );
}
function qs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), tp(e, n);
  }
}
function Am(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ra(e, t, n, r) {
  var o = e.updateQueue;
  In = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var p = e,
            g = a;
          switch (((d = t), (m = n), g.tag)) {
            case 1:
              if (((p = g.payload), typeof p == "function")) {
                f = p.call(m, f, d);
                break e;
              }
              f = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = g.payload),
                (d = typeof p == "function" ? p.call(m, f, d) : p),
                d == null)
              )
                break e;
              f = Ee({}, f, d);
              break e;
            case 2:
              In = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = f)) : (c = c.next = m),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Or |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Om(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(A(191, o));
        o.call(r);
      }
    }
}
var _v = new R0.Component().refs;
function Vf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = st(),
      o = Jn(e),
      i = mn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Xn(e, i, o)),
      t !== null && (Kt(t, e, o, r), qs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = st(),
      o = Jn(e),
      i = mn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Xn(e, i, o)),
      t !== null && (Kt(t, e, o, r), qs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = st(),
      r = Jn(e),
      o = mn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Xn(e, o, r)),
      t !== null && (Kt(t, e, r, n), qs(t, e, r));
  },
};
function Rm(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Di(n, r) || !Di(o, i)
      : !0
  );
}
function Mv(e, t, n) {
  var r = !1,
    o = sr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Dt(i))
      : ((o = ht(t) ? Tr : rt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Co(e, o) : sr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Lm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gl.enqueueReplaceState(t, t.state, null);
}
function Bf(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = _v), gp(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Dt(i))
    : ((i = ht(t) ? Tr : rt.current), (o.context = Co(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Vf(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && gl.enqueueReplaceState(o, o.state, null),
      Ra(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === _v && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Ds(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function _m(e) {
  var t = e._init;
  return t(e._payload);
}
function $v(e) {
  function t(y, h) {
    if (e) {
      var v = y.deletions;
      v === null ? ((y.deletions = [h]), (y.flags |= 16)) : v.push(h);
    }
  }
  function n(y, h) {
    if (!e) return null;
    for (; h !== null; ) t(y, h), (h = h.sibling);
    return null;
  }
  function r(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
    return y;
  }
  function o(y, h) {
    return (y = Zn(y, h)), (y.index = 0), (y.sibling = null), y;
  }
  function i(y, h, v) {
    return (
      (y.index = v),
      e
        ? ((v = y.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((y.flags |= 2), h) : v)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, h, v, w) {
    return h === null || h.tag !== 6
      ? ((h = Uu(v, y.mode, w)), (h.return = y), h)
      : ((h = o(h, v)), (h.return = y), h);
  }
  function l(y, h, v, w) {
    var x = v.type;
    return x === Yr
      ? c(y, h, v.props.children, w, v.key)
      : h !== null &&
        (h.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Nn &&
            _m(x) === h.type))
      ? ((w = o(h, v.props)), (w.ref = Yo(y, h, v)), (w.return = y), w)
      : ((w = ra(v.type, v.key, v.props, null, y.mode, w)),
        (w.ref = Yo(y, h, v)),
        (w.return = y),
        w);
  }
  function u(y, h, v, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = Wu(v, y.mode, w)), (h.return = y), h)
      : ((h = o(h, v.children || [])), (h.return = y), h);
  }
  function c(y, h, v, w, x) {
    return h === null || h.tag !== 7
      ? ((h = kr(v, y.mode, w, x)), (h.return = y), h)
      : ((h = o(h, v)), (h.return = y), h);
  }
  function f(y, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Uu("" + h, y.mode, v)), (h.return = y), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Es:
          return (
            (v = ra(h.type, h.key, h.props, null, y.mode, v)),
            (v.ref = Yo(y, null, h)),
            (v.return = y),
            v
          );
        case Gr:
          return (h = Wu(h, y.mode, v)), (h.return = y), h;
        case Nn:
          var w = h._init;
          return f(y, w(h._payload), v);
      }
      if (oi(h) || Uo(h))
        return (h = kr(h, y.mode, v, null)), (h.return = y), h;
      Ds(y, h);
    }
    return null;
  }
  function d(y, h, v, w) {
    var x = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return x !== null ? null : a(y, h, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Es:
          return v.key === x ? l(y, h, v, w) : null;
        case Gr:
          return v.key === x ? u(y, h, v, w) : null;
        case Nn:
          return (x = v._init), d(y, h, x(v._payload), w);
      }
      if (oi(v) || Uo(v)) return x !== null ? null : c(y, h, v, w, null);
      Ds(y, v);
    }
    return null;
  }
  function m(y, h, v, w, x) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (y = y.get(v) || null), a(h, y, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Es:
          return (y = y.get(w.key === null ? v : w.key) || null), l(h, y, w, x);
        case Gr:
          return (y = y.get(w.key === null ? v : w.key) || null), u(h, y, w, x);
        case Nn:
          var b = w._init;
          return m(y, h, v, b(w._payload), x);
      }
      if (oi(w) || Uo(w)) return (y = y.get(v) || null), c(h, y, w, x, null);
      Ds(h, w);
    }
    return null;
  }
  function p(y, h, v, w) {
    for (
      var x = null, b = null, E = h, T = (h = 0), O = null;
      E !== null && T < v.length;
      T++
    ) {
      E.index > T ? ((O = E), (E = null)) : (O = E.sibling);
      var R = d(y, E, v[T], w);
      if (R === null) {
        E === null && (E = O);
        break;
      }
      e && E && R.alternate === null && t(y, E),
        (h = i(R, h, T)),
        b === null ? (x = R) : (b.sibling = R),
        (b = R),
        (E = O);
    }
    if (T === v.length) return n(y, E), Se && mr(y, T), x;
    if (E === null) {
      for (; T < v.length; T++)
        (E = f(y, v[T], w)),
          E !== null &&
            ((h = i(E, h, T)), b === null ? (x = E) : (b.sibling = E), (b = E));
      return Se && mr(y, T), x;
    }
    for (E = r(y, E); T < v.length; T++)
      (O = m(E, y, T, v[T], w)),
        O !== null &&
          (e && O.alternate !== null && E.delete(O.key === null ? T : O.key),
          (h = i(O, h, T)),
          b === null ? (x = O) : (b.sibling = O),
          (b = O));
    return (
      e &&
        E.forEach(function (H) {
          return t(y, H);
        }),
      Se && mr(y, T),
      x
    );
  }
  function g(y, h, v, w) {
    var x = Uo(v);
    if (typeof x != "function") throw Error(A(150));
    if (((v = x.call(v)), v == null)) throw Error(A(151));
    for (
      var b = (x = null), E = h, T = (h = 0), O = null, R = v.next();
      E !== null && !R.done;
      T++, R = v.next()
    ) {
      E.index > T ? ((O = E), (E = null)) : (O = E.sibling);
      var H = d(y, E, R.value, w);
      if (H === null) {
        E === null && (E = O);
        break;
      }
      e && E && H.alternate === null && t(y, E),
        (h = i(H, h, T)),
        b === null ? (x = H) : (b.sibling = H),
        (b = H),
        (E = O);
    }
    if (R.done) return n(y, E), Se && mr(y, T), x;
    if (E === null) {
      for (; !R.done; T++, R = v.next())
        (R = f(y, R.value, w)),
          R !== null &&
            ((h = i(R, h, T)), b === null ? (x = R) : (b.sibling = R), (b = R));
      return Se && mr(y, T), x;
    }
    for (E = r(y, E); !R.done; T++, R = v.next())
      (R = m(E, y, T, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? T : R.key),
          (h = i(R, h, T)),
          b === null ? (x = R) : (b.sibling = R),
          (b = R));
    return (
      e &&
        E.forEach(function (te) {
          return t(y, te);
        }),
      Se && mr(y, T),
      x
    );
  }
  function S(y, h, v, w) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Yr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Es:
          e: {
            for (var x = v.key, b = h; b !== null; ) {
              if (b.key === x) {
                if (((x = v.type), x === Yr)) {
                  if (b.tag === 7) {
                    n(y, b.sibling),
                      (h = o(b, v.props.children)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                } else if (
                  b.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Nn &&
                    _m(x) === b.type)
                ) {
                  n(y, b.sibling),
                    (h = o(b, v.props)),
                    (h.ref = Yo(y, b, v)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                n(y, b);
                break;
              } else t(y, b);
              b = b.sibling;
            }
            v.type === Yr
              ? ((h = kr(v.props.children, y.mode, w, v.key)),
                (h.return = y),
                (y = h))
              : ((w = ra(v.type, v.key, v.props, null, y.mode, w)),
                (w.ref = Yo(y, h, v)),
                (w.return = y),
                (y = w));
          }
          return s(y);
        case Gr:
          e: {
            for (b = v.key; h !== null; ) {
              if (h.key === b)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(y, h.sibling),
                    (h = o(h, v.children || [])),
                    (h.return = y),
                    (y = h);
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else t(y, h);
              h = h.sibling;
            }
            (h = Wu(v, y.mode, w)), (h.return = y), (y = h);
          }
          return s(y);
        case Nn:
          return (b = v._init), S(y, h, b(v._payload), w);
      }
      if (oi(v)) return p(y, h, v, w);
      if (Uo(v)) return g(y, h, v, w);
      Ds(y, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(y, h.sibling), (h = o(h, v)), (h.return = y), (y = h))
          : (n(y, h), (h = Uu(v, y.mode, w)), (h.return = y), (y = h)),
        s(y))
      : n(y, h);
  }
  return S;
}
var Eo = $v(!0),
  Dv = $v(!1),
  us = {},
  sn = fr(us),
  Fi = fr(us),
  Vi = fr(us);
function Cr(e) {
  if (e === us) throw Error(A(174));
  return e;
}
function yp(e, t) {
  switch ((he(Vi, t), he(Fi, e), he(sn, us), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Sf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Sf(t, e));
  }
  ge(sn), he(sn, t);
}
function ko() {
  ge(sn), ge(Fi), ge(Vi);
}
function jv(e) {
  Cr(Vi.current);
  var t = Cr(sn.current),
    n = Sf(t, e.type);
  t !== n && (he(Fi, e), he(sn, n));
}
function vp(e) {
  Fi.current === e && (ge(sn), ge(Fi));
}
var we = fr(0);
function La(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Nu = [];
function Sp() {
  for (var e = 0; e < Nu.length; e++)
    Nu[e]._workInProgressVersionPrimary = null;
  Nu.length = 0;
}
var Js = Rn.ReactCurrentDispatcher,
  Iu = Rn.ReactCurrentBatchConfig,
  Ar = 0,
  Pe = null,
  De = null,
  Be = null,
  _a = !1,
  hi = !1,
  Bi = 0,
  CP = 0;
function Je() {
  throw Error(A(321));
}
function wp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Yt(e[n], t[n])) return !1;
  return !0;
}
function xp(e, t, n, r, o, i) {
  if (
    ((Ar = i),
    (Pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Js.current = e === null || e.memoizedState === null ? TP : bP),
    (e = n(r, o)),
    hi)
  ) {
    i = 0;
    do {
      if (((hi = !1), (Bi = 0), 25 <= i)) throw Error(A(301));
      (i += 1),
        (Be = De = null),
        (t.updateQueue = null),
        (Js.current = AP),
        (e = n(r, o));
    } while (hi);
  }
  if (
    ((Js.current = Ma),
    (t = De !== null && De.next !== null),
    (Ar = 0),
    (Be = De = Pe = null),
    (_a = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function Cp() {
  var e = Bi !== 0;
  return (Bi = 0), e;
}
function Xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Be === null ? (Pe.memoizedState = Be = e) : (Be = Be.next = e), Be;
}
function jt() {
  if (De === null) {
    var e = Pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = De.next;
  var t = Be === null ? Pe.memoizedState : Be.next;
  if (t !== null) (Be = t), (De = e);
  else {
    if (e === null) throw Error(A(310));
    (De = e),
      (e = {
        memoizedState: De.memoizedState,
        baseState: De.baseState,
        baseQueue: De.baseQueue,
        queue: De.queue,
        next: null,
      }),
      Be === null ? (Pe.memoizedState = Be = e) : (Be = Be.next = e);
  }
  return Be;
}
function zi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Fu(e) {
  var t = jt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = De,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Ar & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (Pe.lanes |= c),
          (Or |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      Yt(r, t.memoizedState) || (dt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Pe.lanes |= i), (Or |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vu(e) {
  var t = jt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Yt(i, t.memoizedState) || (dt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Nv() {}
function Iv(e, t) {
  var n = Pe,
    r = jt(),
    o = t(),
    i = !Yt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (dt = !0)),
    (r = r.queue),
    Pp(Bv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Be !== null && Be.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ui(9, Vv.bind(null, n, r, o, t), void 0, null),
      Ue === null)
    )
      throw Error(A(349));
    Ar & 30 || Fv(n, t, o);
  }
  return o;
}
function Fv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Vv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), zv(t) && Uv(e);
}
function Bv(e, t, n) {
  return n(function () {
    zv(t) && Uv(e);
  });
}
function zv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Yt(e, n);
  } catch {
    return !0;
  }
}
function Uv(e) {
  var t = En(e, 1);
  t !== null && Kt(t, e, 1, -1);
}
function Mm(e) {
  var t = Xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = kP.bind(null, Pe, e)),
    [t.memoizedState, e]
  );
}
function Ui(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wv() {
  return jt().memoizedState;
}
function Zs(e, t, n, r) {
  var o = Xt();
  (Pe.flags |= e),
    (o.memoizedState = Ui(1 | t, n, void 0, r === void 0 ? null : r));
}
function yl(e, t, n, r) {
  var o = jt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (De !== null) {
    var s = De.memoizedState;
    if (((i = s.destroy), r !== null && wp(r, s.deps))) {
      o.memoizedState = Ui(t, n, i, r);
      return;
    }
  }
  (Pe.flags |= e), (o.memoizedState = Ui(1 | t, n, i, r));
}
function $m(e, t) {
  return Zs(8390656, 8, e, t);
}
function Pp(e, t) {
  return yl(2048, 8, e, t);
}
function Hv(e, t) {
  return yl(4, 2, e, t);
}
function Kv(e, t) {
  return yl(4, 4, e, t);
}
function Gv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Yv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), yl(4, 4, Gv.bind(null, t, e), n)
  );
}
function Ep() {}
function Qv(e, t) {
  var n = jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wp(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Xv(e, t) {
  var n = jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qv(e, t, n) {
  return Ar & 21
    ? (Yt(n, t) || ((n = ev()), (Pe.lanes |= n), (Or |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (dt = !0)), (e.memoizedState = n));
}
function PP(e, t) {
  var n = ue;
  (ue = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Iu.transition;
  Iu.transition = {};
  try {
    e(!1), t();
  } finally {
    (ue = n), (Iu.transition = r);
  }
}
function Jv() {
  return jt().memoizedState;
}
function EP(e, t, n) {
  var r = Jn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Zv(e))
  )
    e1(t, n);
  else if (((n = Rv(e, t, n, r)), n !== null)) {
    var o = st();
    Kt(n, e, r, o), t1(n, t, r);
  }
}
function kP(e, t, n) {
  var r = Jn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zv(e)) e1(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Yt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), mp(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Rv(e, t, o, r)),
      n !== null && ((o = st()), Kt(n, e, r, o), t1(n, t, r));
  }
}
function Zv(e) {
  var t = e.alternate;
  return e === Pe || (t !== null && t === Pe);
}
function e1(e, t) {
  hi = _a = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function t1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), tp(e, n);
  }
}
var Ma = {
    readContext: Dt,
    useCallback: Je,
    useContext: Je,
    useEffect: Je,
    useImperativeHandle: Je,
    useInsertionEffect: Je,
    useLayoutEffect: Je,
    useMemo: Je,
    useReducer: Je,
    useRef: Je,
    useState: Je,
    useDebugValue: Je,
    useDeferredValue: Je,
    useTransition: Je,
    useMutableSource: Je,
    useSyncExternalStore: Je,
    useId: Je,
    unstable_isNewReconciler: !1,
  },
  TP = {
    readContext: Dt,
    useCallback: function (e, t) {
      return (Xt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Dt,
    useEffect: $m,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Zs(4194308, 4, Gv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Zs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Zs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Xt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Xt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = EP.bind(null, Pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Xt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Mm,
    useDebugValue: Ep,
    useDeferredValue: function (e) {
      return (Xt().memoizedState = e);
    },
    useTransition: function () {
      var e = Mm(!1),
        t = e[0];
      return (e = PP.bind(null, e[1])), (Xt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Pe,
        o = Xt();
      if (Se) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), Ue === null)) throw Error(A(349));
        Ar & 30 || Fv(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        $m(Bv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ui(9, Vv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Xt(),
        t = Ue.identifierPrefix;
      if (Se) {
        var n = pn,
          r = dn;
        (n = (r & ~(1 << (32 - Ht(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Bi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = CP++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  bP = {
    readContext: Dt,
    useCallback: Qv,
    useContext: Dt,
    useEffect: Pp,
    useImperativeHandle: Yv,
    useInsertionEffect: Hv,
    useLayoutEffect: Kv,
    useMemo: Xv,
    useReducer: Fu,
    useRef: Wv,
    useState: function () {
      return Fu(zi);
    },
    useDebugValue: Ep,
    useDeferredValue: function (e) {
      var t = jt();
      return qv(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = Fu(zi)[0],
        t = jt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nv,
    useSyncExternalStore: Iv,
    useId: Jv,
    unstable_isNewReconciler: !1,
  },
  AP = {
    readContext: Dt,
    useCallback: Qv,
    useContext: Dt,
    useEffect: Pp,
    useImperativeHandle: Yv,
    useInsertionEffect: Hv,
    useLayoutEffect: Kv,
    useMemo: Xv,
    useReducer: Vu,
    useRef: Wv,
    useState: function () {
      return Vu(zi);
    },
    useDebugValue: Ep,
    useDeferredValue: function (e) {
      var t = jt();
      return De === null ? (t.memoizedState = e) : qv(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = Vu(zi)[0],
        t = jt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nv,
    useSyncExternalStore: Iv,
    useId: Jv,
    unstable_isNewReconciler: !1,
  };
function To(e, t) {
  try {
    var n = "",
      r = t;
    do (n += nC(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Bu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var OP = typeof WeakMap == "function" ? WeakMap : Map;
function n1(e, t, n) {
  (n = mn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Da || ((Da = !0), (Jf = r)), zf(e, t);
    }),
    n
  );
}
function r1(e, t, n) {
  (n = mn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        zf(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        zf(e, t),
          typeof r != "function" &&
            (qn === null ? (qn = new Set([this])) : qn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Dm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new OP();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = UP.bind(null, e, t, n)), t.then(e, e));
}
function jm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nm(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = mn(-1, 1)), (t.tag = 2), Xn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var RP = Rn.ReactCurrentOwner,
  dt = !1;
function it(e, t, n, r) {
  t.child = e === null ? Dv(t, null, n, r) : Eo(t, e.child, n, r);
}
function Im(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ho(t, o),
    (r = xp(e, t, n, r, i, o)),
    (n = Cp()),
    e !== null && !dt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        kn(e, t, o))
      : (Se && n && up(t), (t.flags |= 1), it(e, t, r, o), t.child)
  );
}
function Fm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !_p(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), o1(e, t, i, r, o))
      : ((e = ra(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Di), n(s, r) && e.ref === t.ref)
    )
      return kn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Zn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function o1(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Di(i, r) && e.ref === t.ref)
      if (((dt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (dt = !0);
      else return (t.lanes = e.lanes), kn(e, t, o);
  }
  return Uf(e, t, n, r, o);
}
function i1(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        he(oo, St),
        (St |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          he(oo, St),
          (St |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        he(oo, St),
        (St |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      he(oo, St),
      (St |= r);
  return it(e, t, o, n), t.child;
}
function s1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Uf(e, t, n, r, o) {
  var i = ht(n) ? Tr : rt.current;
  return (
    (i = Co(t, i)),
    ho(t, o),
    (n = xp(e, t, n, r, i, o)),
    (r = Cp()),
    e !== null && !dt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        kn(e, t, o))
      : (Se && r && up(t), (t.flags |= 1), it(e, t, n, o), t.child)
  );
}
function Vm(e, t, n, r, o) {
  if (ht(n)) {
    var i = !0;
    ka(t);
  } else i = !1;
  if ((ho(t, o), t.stateNode === null))
    ea(e, t), Mv(t, n, r), Bf(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Dt(u))
      : ((u = ht(n) ? Tr : rt.current), (u = Co(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Lm(t, s, r, u)),
      (In = !1);
    var d = t.memoizedState;
    (s.state = d),
      Ra(t, r, s, o),
      (l = t.memoizedState),
      a !== r || d !== l || pt.current || In
        ? (typeof c == "function" && (Vf(t, n, c, r), (l = t.memoizedState)),
          (a = In || Rm(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Lv(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Bt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Dt(l))
        : ((l = ht(n) ? Tr : rt.current), (l = Co(t, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Lm(t, s, r, l)),
      (In = !1),
      (d = t.memoizedState),
      (s.state = d),
      Ra(t, r, s, o);
    var p = t.memoizedState;
    a !== f || d !== p || pt.current || In
      ? (typeof m == "function" && (Vf(t, n, m, r), (p = t.memoizedState)),
        (u = In || Rm(t, n, u, r, d, p, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, p, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, p, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (s.props = r),
        (s.state = p),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Wf(e, t, n, r, i, o);
}
function Wf(e, t, n, r, o, i) {
  s1(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && km(t, n, !1), kn(e, t, i);
  (r = t.stateNode), (RP.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Eo(t, e.child, null, i)), (t.child = Eo(t, null, a, i)))
      : it(e, t, a, i),
    (t.memoizedState = r.state),
    o && km(t, n, !0),
    t.child
  );
}
function a1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Em(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Em(e, t.context, !1),
    yp(e, t.containerInfo);
}
function Bm(e, t, n, r, o) {
  return Po(), fp(o), (t.flags |= 256), it(e, t, n, r), t.child;
}
var Hf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function l1(e, t, n) {
  var r = t.pendingProps,
    o = we.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    he(we, o & 1),
    e === null)
  )
    return (
      If(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = wl(s, r, 0, null)),
              (e = kr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Kf(n)),
              (t.memoizedState = Hf),
              e)
            : kp(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return LP(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Zn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Zn(a, i)) : ((i = kr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Kf(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Hf),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Zn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function kp(e, t) {
  return (
    (t = wl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function js(e, t, n, r) {
  return (
    r !== null && fp(r),
    Eo(t, e.child, null, n),
    (e = kp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function LP(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bu(Error(A(422)))), js(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = wl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = kr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Eo(t, e.child, null, s),
        (t.child.memoizedState = Kf(s)),
        (t.memoizedState = Hf),
        i);
  if (!(t.mode & 1)) return js(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(A(419))), (r = Bu(i, r, void 0)), js(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), dt || a)) {
    if (((r = Ue), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), En(e, o), Kt(r, e, o, -1));
    }
    return Lp(), (r = Bu(Error(A(421)))), js(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = WP.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (xt = Qn(o.nextSibling)),
      (Ct = t),
      (Se = !0),
      (Ut = null),
      e !== null &&
        ((Lt[_t++] = dn),
        (Lt[_t++] = pn),
        (Lt[_t++] = br),
        (dn = e.id),
        (pn = e.overflow),
        (br = t)),
      (t = kp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function zm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ff(e.return, t, n);
}
function zu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function u1(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((it(e, t, r.children, n), (r = we.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && zm(e, n, t);
        else if (e.tag === 19) zm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((he(we, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && La(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          zu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && La(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        zu(t, !0, n, null, i);
        break;
      case "together":
        zu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ea(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Or |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Zn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Zn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function _P(e, t, n) {
  switch (t.tag) {
    case 3:
      a1(t), Po();
      break;
    case 5:
      jv(t);
      break;
    case 1:
      ht(t.type) && ka(t);
      break;
    case 4:
      yp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      he(Aa, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (he(we, we.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? l1(e, t, n)
          : (he(we, we.current & 1),
            (e = kn(e, t, n)),
            e !== null ? e.sibling : null);
      he(we, we.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return u1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        he(we, we.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), i1(e, t, n);
  }
  return kn(e, t, n);
}
var c1, Gf, f1, d1;
c1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Gf = function () {};
f1 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Cr(sn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = mf(e, o)), (r = mf(e, r)), (i = []);
        break;
      case "select":
        (o = Ee({}, o, { value: void 0 })),
          (r = Ee({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = vf(e, o)), (r = vf(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Pa);
    }
    wf(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ai.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ai.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && me("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
d1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qo(e, t) {
  if (!Se)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function MP(e, t, n) {
  var r = t.pendingProps;
  switch ((cp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ze(t), null;
    case 1:
      return ht(t.type) && Ea(), Ze(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ko(),
        ge(pt),
        ge(rt),
        Sp(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          ($s(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ut !== null && (td(Ut), (Ut = null)))),
        Gf(e, t),
        Ze(t),
        null
      );
    case 5:
      vp(t);
      var o = Cr(Vi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        f1(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Ze(t), null;
        }
        if (((e = Cr(sn.current)), $s(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[en] = t), (r[Ii] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              me("cancel", r), me("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              me("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < si.length; o++) me(si[o], r);
              break;
            case "source":
              me("error", r);
              break;
            case "img":
            case "image":
            case "link":
              me("error", r), me("load", r);
              break;
            case "details":
              me("toggle", r);
              break;
            case "input":
              qh(r, i), me("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                me("invalid", r);
              break;
            case "textarea":
              Zh(r, i), me("invalid", r);
          }
          wf(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ms(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ms(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Ai.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  me("scroll", r);
            }
          switch (n) {
            case "input":
              ks(r), Jh(r, i, !0);
              break;
            case "textarea":
              ks(r), em(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Pa);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = F0(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[en] = t),
            (e[Ii] = r),
            c1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = xf(n, r)), n)) {
              case "dialog":
                me("cancel", e), me("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                me("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < si.length; o++) me(si[o], e);
                o = r;
                break;
              case "source":
                me("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                me("error", e), me("load", e), (o = r);
                break;
              case "details":
                me("toggle", e), (o = r);
                break;
              case "input":
                qh(e, r), (o = mf(e, r)), me("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ee({}, r, { value: void 0 })),
                  me("invalid", e);
                break;
              case "textarea":
                Zh(e, r), (o = vf(e, r)), me("invalid", e);
                break;
              default:
                o = r;
            }
            wf(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? z0(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && V0(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Oi(e, l)
                    : typeof l == "number" && Oi(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ai.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && me("scroll", e)
                      : l != null && Qd(e, i, l, s));
              }
            switch (n) {
              case "input":
                ks(e), Jh(e, r, !1);
                break;
              case "textarea":
                ks(e), em(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ir(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? uo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      uo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Pa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ze(t), null;
    case 6:
      if (e && t.stateNode != null) d1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = Cr(Vi.current)), Cr(sn.current), $s(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[en] = t),
            (i = r.nodeValue !== n) && ((e = Ct), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ms(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ms(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[en] = t),
            (t.stateNode = r);
      }
      return Ze(t), null;
    case 13:
      if (
        (ge(we),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Se && xt !== null && t.mode & 1 && !(t.flags & 128))
          Ov(), Po(), (t.flags |= 98560), (i = !1);
        else if (((i = $s(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(A(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(A(317));
            i[en] = t;
          } else
            Po(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ze(t), (i = !1);
        } else Ut !== null && (td(Ut), (Ut = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || we.current & 1 ? Ne === 0 && (Ne = 3) : Lp())),
          t.updateQueue !== null && (t.flags |= 4),
          Ze(t),
          null);
    case 4:
      return (
        ko(), Gf(e, t), e === null && ji(t.stateNode.containerInfo), Ze(t), null
      );
    case 10:
      return hp(t.type._context), Ze(t), null;
    case 17:
      return ht(t.type) && Ea(), Ze(t), null;
    case 19:
      if ((ge(we), (i = t.memoizedState), i === null)) return Ze(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Qo(i, !1);
        else {
          if (Ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = La(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Qo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return he(we, (we.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Re() > bo &&
            ((t.flags |= 128), (r = !0), Qo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = La(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Qo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !Se)
            )
              return Ze(t), null;
          } else
            2 * Re() - i.renderingStartTime > bo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Qo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Re()),
          (t.sibling = null),
          (n = we.current),
          he(we, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ze(t), null);
    case 22:
    case 23:
      return (
        Rp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? St & 1073741824 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function $P(e, t) {
  switch ((cp(t), t.tag)) {
    case 1:
      return (
        ht(t.type) && Ea(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ko(),
        ge(pt),
        ge(rt),
        Sp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return vp(t), null;
    case 13:
      if (
        (ge(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        Po();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ge(we), null;
    case 4:
      return ko(), null;
    case 10:
      return hp(t.type._context), null;
    case 22:
    case 23:
      return Rp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ns = !1,
  nt = !1,
  DP = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function ro(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ae(e, t, r);
      }
    else n.current = null;
}
function Yf(e, t, n) {
  try {
    n();
  } catch (r) {
    Ae(e, t, r);
  }
}
var Um = !1;
function jP(e, t) {
  if (((Lf = wa), (e = gv()), lp(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (a = s),
                d === i && ++c === r && (l = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_f = { focusedElem: e, selectionRange: n }, wa = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var g = p.memoizedProps,
                    S = p.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Bt(t.type, g),
                      S
                    );
                  y.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (w) {
          Ae(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (p = Um), (Um = !1), p;
}
function mi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Yf(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function vl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Qf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function p1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), p1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[en], delete t[Ii], delete t[Df], delete t[vP], delete t[SP])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function h1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || h1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Xf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Pa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xf(e, t, n), e = e.sibling; e !== null; ) Xf(e, t, n), (e = e.sibling);
}
function qf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qf(e, t, n), e = e.sibling; e !== null; ) qf(e, t, n), (e = e.sibling);
}
var Ge = null,
  zt = !1;
function Mn(e, t, n) {
  for (n = n.child; n !== null; ) m1(e, t, n), (n = n.sibling);
}
function m1(e, t, n) {
  if (on && typeof on.onCommitFiberUnmount == "function")
    try {
      on.onCommitFiberUnmount(cl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      nt || ro(n, t);
    case 6:
      var r = Ge,
        o = zt;
      (Ge = null),
        Mn(e, t, n),
        (Ge = r),
        (zt = o),
        Ge !== null &&
          (zt
            ? ((e = Ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ge.removeChild(n.stateNode));
      break;
    case 18:
      Ge !== null &&
        (zt
          ? ((e = Ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? Du(e.parentNode, n)
              : e.nodeType === 1 && Du(e, n),
            Mi(e))
          : Du(Ge, n.stateNode));
      break;
    case 4:
      (r = Ge),
        (o = zt),
        (Ge = n.stateNode.containerInfo),
        (zt = !0),
        Mn(e, t, n),
        (Ge = r),
        (zt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !nt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Yf(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Mn(e, t, n);
      break;
    case 1:
      if (
        !nt &&
        (ro(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ae(n, t, a);
        }
      Mn(e, t, n);
      break;
    case 21:
      Mn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((nt = (r = nt) || n.memoizedState !== null), Mn(e, t, n), (nt = r))
        : Mn(e, t, n);
      break;
    default:
      Mn(e, t, n);
  }
}
function Hm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new DP()),
      t.forEach(function (r) {
        var o = HP.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Vt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ge = a.stateNode), (zt = !1);
              break e;
            case 3:
              (Ge = a.stateNode.containerInfo), (zt = !0);
              break e;
            case 4:
              (Ge = a.stateNode.containerInfo), (zt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ge === null) throw Error(A(160));
        m1(i, s, o), (Ge = null), (zt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Ae(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) g1(t, e), (t = t.sibling);
}
function g1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Vt(t, e), Qt(e), r & 4)) {
        try {
          mi(3, e, e.return), vl(3, e);
        } catch (g) {
          Ae(e, e.return, g);
        }
        try {
          mi(5, e, e.return);
        } catch (g) {
          Ae(e, e.return, g);
        }
      }
      break;
    case 1:
      Vt(t, e), Qt(e), r & 512 && n !== null && ro(n, n.return);
      break;
    case 5:
      if (
        (Vt(t, e),
        Qt(e),
        r & 512 && n !== null && ro(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Oi(o, "");
        } catch (g) {
          Ae(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && N0(o, i),
              xf(a, s);
            var u = xf(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? z0(o, f)
                : c === "dangerouslySetInnerHTML"
                ? V0(o, f)
                : c === "children"
                ? Oi(o, f)
                : Qd(o, c, f, u);
            }
            switch (a) {
              case "input":
                gf(o, i);
                break;
              case "textarea":
                I0(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? uo(o, !!i.multiple, m, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? uo(o, !!i.multiple, i.defaultValue, !0)
                      : uo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ii] = i;
          } catch (g) {
            Ae(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Vt(t, e), Qt(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          Ae(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Vt(t, e), Qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mi(t.containerInfo);
        } catch (g) {
          Ae(e, e.return, g);
        }
      break;
    case 4:
      Vt(t, e), Qt(e);
      break;
    case 13:
      Vt(t, e),
        Qt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ap = Re())),
        r & 4 && Hm(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((nt = (u = nt) || c), Vt(t, e), (nt = u)) : Vt(t, e),
        Qt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (f = j = c; j !== null; ) {
              switch (((d = j), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mi(4, d, d.return);
                  break;
                case 1:
                  ro(d, d.return);
                  var p = d.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (g) {
                      Ae(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ro(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Gm(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (j = m)) : Gm(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = B0("display", s)));
              } catch (g) {
                Ae(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                Ae(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Vt(t, e), Qt(e), r & 4 && Hm(e);
      break;
    case 21:
      break;
    default:
      Vt(t, e), Qt(e);
  }
}
function Qt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (h1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Oi(o, ""), (r.flags &= -33));
          var i = Wm(e);
          qf(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Wm(e);
          Xf(e, a, s);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      Ae(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function NP(e, t, n) {
  (j = e), y1(e);
}
function y1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ns;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || nt;
        a = Ns;
        var u = nt;
        if (((Ns = s), (nt = l) && !u))
          for (j = o; j !== null; )
            (s = j),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Ym(o)
                : l !== null
                ? ((l.return = s), (j = l))
                : Ym(o);
        for (; i !== null; ) (j = i), y1(i), (i = i.sibling);
        (j = o), (Ns = a), (nt = u);
      }
      Km(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (j = i)) : Km(e);
  }
}
function Km(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              nt || vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !nt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Bt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Om(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Om(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Mi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        nt || (t.flags & 512 && Qf(t));
      } catch (d) {
        Ae(t, t.return, d);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Gm(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Ym(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vl(4, t);
          } catch (l) {
            Ae(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ae(t, o, l);
            }
          }
          var i = t.return;
          try {
            Qf(t);
          } catch (l) {
            Ae(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Qf(t);
          } catch (l) {
            Ae(t, s, l);
          }
      }
    } catch (l) {
      Ae(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var IP = Math.ceil,
  $a = Rn.ReactCurrentDispatcher,
  Tp = Rn.ReactCurrentOwner,
  $t = Rn.ReactCurrentBatchConfig,
  re = 0,
  Ue = null,
  $e = null,
  Qe = 0,
  St = 0,
  oo = fr(0),
  Ne = 0,
  Wi = null,
  Or = 0,
  Sl = 0,
  bp = 0,
  gi = null,
  ft = null,
  Ap = 0,
  bo = 1 / 0,
  cn = null,
  Da = !1,
  Jf = null,
  qn = null,
  Is = !1,
  Wn = null,
  ja = 0,
  yi = 0,
  Zf = null,
  ta = -1,
  na = 0;
function st() {
  return re & 6 ? Re() : ta !== -1 ? ta : (ta = Re());
}
function Jn(e) {
  return e.mode & 1
    ? re & 2 && Qe !== 0
      ? Qe & -Qe
      : xP.transition !== null
      ? (na === 0 && (na = ev()), na)
      : ((e = ue),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : av(e.type))),
        e)
    : 1;
}
function Kt(e, t, n, r) {
  if (50 < yi) throw ((yi = 0), (Zf = null), Error(A(185)));
  ss(e, n, r),
    (!(re & 2) || e !== Ue) &&
      (e === Ue && (!(re & 2) && (Sl |= n), Ne === 4 && Bn(e, Qe)),
      mt(e, r),
      n === 1 && re === 0 && !(t.mode & 1) && ((bo = Re() + 500), ml && dr()));
}
function mt(e, t) {
  var n = e.callbackNode;
  xC(e, t);
  var r = Sa(e, e === Ue ? Qe : 0);
  if (r === 0)
    n !== null && rm(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && rm(n), t === 1))
      e.tag === 0 ? wP(Qm.bind(null, e)) : Tv(Qm.bind(null, e)),
        gP(function () {
          !(re & 6) && dr();
        }),
        (n = null);
    else {
      switch (tv(r)) {
        case 1:
          n = ep;
          break;
        case 4:
          n = J0;
          break;
        case 16:
          n = va;
          break;
        case 536870912:
          n = Z0;
          break;
        default:
          n = va;
      }
      n = k1(n, v1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function v1(e, t) {
  if (((ta = -1), (na = 0), re & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (mo() && e.callbackNode !== n) return null;
  var r = Sa(e, e === Ue ? Qe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Na(e, r);
  else {
    t = r;
    var o = re;
    re |= 2;
    var i = w1();
    (Ue !== e || Qe !== t) && ((cn = null), (bo = Re() + 500), Er(e, t));
    do
      try {
        BP();
        break;
      } catch (a) {
        S1(e, a);
      }
    while (1);
    pp(),
      ($a.current = i),
      (re = o),
      $e !== null ? (t = 0) : ((Ue = null), (Qe = 0), (t = Ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Tf(e)), o !== 0 && ((r = o), (t = ed(e, o)))), t === 1)
    )
      throw ((n = Wi), Er(e, 0), Bn(e, r), mt(e, Re()), n);
    if (t === 6) Bn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !FP(o) &&
          ((t = Na(e, r)),
          t === 2 && ((i = Tf(e)), i !== 0 && ((r = i), (t = ed(e, i)))),
          t === 1))
      )
        throw ((n = Wi), Er(e, 0), Bn(e, r), mt(e, Re()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          gr(e, ft, cn);
          break;
        case 3:
          if (
            (Bn(e, r), (r & 130023424) === r && ((t = Ap + 500 - Re()), 10 < t))
          ) {
            if (Sa(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              st(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = $f(gr.bind(null, e, ft, cn), t);
            break;
          }
          gr(e, ft, cn);
          break;
        case 4:
          if ((Bn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Ht(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Re() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * IP(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $f(gr.bind(null, e, ft, cn), r);
            break;
          }
          gr(e, ft, cn);
          break;
        case 5:
          gr(e, ft, cn);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return mt(e, Re()), e.callbackNode === n ? v1.bind(null, e) : null;
}
function ed(e, t) {
  var n = gi;
  return (
    e.current.memoizedState.isDehydrated && (Er(e, t).flags |= 256),
    (e = Na(e, t)),
    e !== 2 && ((t = ft), (ft = n), t !== null && td(t)),
    e
  );
}
function td(e) {
  ft === null ? (ft = e) : ft.push.apply(ft, e);
}
function FP(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Yt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Bn(e, t) {
  for (
    t &= ~bp,
      t &= ~Sl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ht(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qm(e) {
  if (re & 6) throw Error(A(327));
  mo();
  var t = Sa(e, 0);
  if (!(t & 1)) return mt(e, Re()), null;
  var n = Na(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Tf(e);
    r !== 0 && ((t = r), (n = ed(e, r)));
  }
  if (n === 1) throw ((n = Wi), Er(e, 0), Bn(e, t), mt(e, Re()), n);
  if (n === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    gr(e, ft, cn),
    mt(e, Re()),
    null
  );
}
function Op(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    (re = n), re === 0 && ((bo = Re() + 500), ml && dr());
  }
}
function Rr(e) {
  Wn !== null && Wn.tag === 0 && !(re & 6) && mo();
  var t = re;
  re |= 1;
  var n = $t.transition,
    r = ue;
  try {
    if ((($t.transition = null), (ue = 1), e)) return e();
  } finally {
    (ue = r), ($t.transition = n), (re = t), !(re & 6) && dr();
  }
}
function Rp() {
  (St = oo.current), ge(oo);
}
function Er(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), mP(n)), $e !== null))
    for (n = $e.return; n !== null; ) {
      var r = n;
      switch ((cp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ea();
          break;
        case 3:
          ko(), ge(pt), ge(rt), Sp();
          break;
        case 5:
          vp(r);
          break;
        case 4:
          ko();
          break;
        case 13:
          ge(we);
          break;
        case 19:
          ge(we);
          break;
        case 10:
          hp(r.type._context);
          break;
        case 22:
        case 23:
          Rp();
      }
      n = n.return;
    }
  if (
    ((Ue = e),
    ($e = e = Zn(e.current, null)),
    (Qe = St = t),
    (Ne = 0),
    (Wi = null),
    (bp = Sl = Or = 0),
    (ft = gi = null),
    xr !== null)
  ) {
    for (t = 0; t < xr.length; t++)
      if (((n = xr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    xr = null;
  }
  return e;
}
function S1(e, t) {
  do {
    var n = $e;
    try {
      if ((pp(), (Js.current = Ma), _a)) {
        for (var r = Pe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        _a = !1;
      }
      if (
        ((Ar = 0),
        (Be = De = Pe = null),
        (hi = !1),
        (Bi = 0),
        (Tp.current = null),
        n === null || n.return === null)
      ) {
        (Ne = 1), (Wi = t), ($e = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Qe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = jm(s);
          if (m !== null) {
            (m.flags &= -257),
              Nm(m, s, a, i, t),
              m.mode & 1 && Dm(i, u, t),
              (t = m),
              (l = u);
            var p = t.updateQueue;
            if (p === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else p.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Dm(i, u, t), Lp();
              break e;
            }
            l = Error(A(426));
          }
        } else if (Se && a.mode & 1) {
          var S = jm(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Nm(S, s, a, i, t),
              fp(To(l, a));
            break e;
          }
        }
        (i = l = To(l, a)),
          Ne !== 4 && (Ne = 2),
          gi === null ? (gi = [i]) : gi.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var y = n1(i, l, t);
              Am(i, y);
              break e;
            case 1:
              a = l;
              var h = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (qn === null || !qn.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = r1(i, a, t);
                Am(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      C1(n);
    } catch (x) {
      (t = x), $e === n && n !== null && ($e = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function w1() {
  var e = $a.current;
  return ($a.current = Ma), e === null ? Ma : e;
}
function Lp() {
  (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
    Ue === null || (!(Or & 268435455) && !(Sl & 268435455)) || Bn(Ue, Qe);
}
function Na(e, t) {
  var n = re;
  re |= 2;
  var r = w1();
  (Ue !== e || Qe !== t) && ((cn = null), Er(e, t));
  do
    try {
      VP();
      break;
    } catch (o) {
      S1(e, o);
    }
  while (1);
  if ((pp(), (re = n), ($a.current = r), $e !== null)) throw Error(A(261));
  return (Ue = null), (Qe = 0), Ne;
}
function VP() {
  for (; $e !== null; ) x1($e);
}
function BP() {
  for (; $e !== null && !dC(); ) x1($e);
}
function x1(e) {
  var t = E1(e.alternate, e, St);
  (e.memoizedProps = e.pendingProps),
    t === null ? C1(e) : ($e = t),
    (Tp.current = null);
}
function C1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $P(n, t)), n !== null)) {
        (n.flags &= 32767), ($e = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ne = 6), ($e = null);
        return;
      }
    } else if (((n = MP(n, t, St)), n !== null)) {
      $e = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      $e = t;
      return;
    }
    $e = t = e;
  } while (t !== null);
  Ne === 0 && (Ne = 5);
}
function gr(e, t, n) {
  var r = ue,
    o = $t.transition;
  try {
    ($t.transition = null), (ue = 1), zP(e, t, n, r);
  } finally {
    ($t.transition = o), (ue = r);
  }
  return null;
}
function zP(e, t, n, r) {
  do mo();
  while (Wn !== null);
  if (re & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (CC(e, i),
    e === Ue && (($e = Ue = null), (Qe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Is ||
      ((Is = !0),
      k1(va, function () {
        return mo(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = $t.transition), ($t.transition = null);
    var s = ue;
    ue = 1;
    var a = re;
    (re |= 4),
      (Tp.current = null),
      jP(e, n),
      g1(n, e),
      lP(_f),
      (wa = !!Lf),
      (_f = Lf = null),
      (e.current = n),
      NP(n),
      pC(),
      (re = a),
      (ue = s),
      ($t.transition = i);
  } else e.current = n;
  if (
    (Is && ((Is = !1), (Wn = e), (ja = o)),
    (i = e.pendingLanes),
    i === 0 && (qn = null),
    gC(n.stateNode),
    mt(e, Re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Da) throw ((Da = !1), (e = Jf), (Jf = null), e);
  return (
    ja & 1 && e.tag !== 0 && mo(),
    (i = e.pendingLanes),
    i & 1 ? (e === Zf ? yi++ : ((yi = 0), (Zf = e))) : (yi = 0),
    dr(),
    null
  );
}
function mo() {
  if (Wn !== null) {
    var e = tv(ja),
      t = $t.transition,
      n = ue;
    try {
      if ((($t.transition = null), (ue = 16 > e ? 16 : e), Wn === null))
        var r = !1;
      else {
        if (((e = Wn), (Wn = null), (ja = 0), re & 6)) throw Error(A(331));
        var o = re;
        for (re |= 4, j = e.current; j !== null; ) {
          var i = j,
            s = i.child;
          if (j.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mi(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (j = f);
                  else
                    for (; j !== null; ) {
                      c = j;
                      var d = c.sibling,
                        m = c.return;
                      if ((p1(c), c === u)) {
                        j = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (j = d);
                        break;
                      }
                      j = m;
                    }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var g = p.child;
                if (g !== null) {
                  p.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (j = s);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mi(9, i, i.return);
                }
              var y = i.sibling;
              if (y !== null) {
                (y.return = i.return), (j = y);
                break e;
              }
              j = i.return;
            }
        }
        var h = e.current;
        for (j = h; j !== null; ) {
          s = j;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (j = v);
          else
            e: for (s = h; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vl(9, a);
                  }
                } catch (x) {
                  Ae(a, a.return, x);
                }
              if (a === s) {
                j = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (j = w);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((re = o), dr(), on && typeof on.onPostCommitFiberRoot == "function")
        )
          try {
            on.onPostCommitFiberRoot(cl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ue = n), ($t.transition = t);
    }
  }
  return !1;
}
function Xm(e, t, n) {
  (t = To(n, t)),
    (t = n1(e, t, 1)),
    (e = Xn(e, t, 1)),
    (t = st()),
    e !== null && (ss(e, 1, t), mt(e, t));
}
function Ae(e, t, n) {
  if (e.tag === 3) Xm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (qn === null || !qn.has(r)))
        ) {
          (e = To(n, e)),
            (e = r1(t, e, 1)),
            (t = Xn(t, e, 1)),
            (e = st()),
            t !== null && (ss(t, 1, e), mt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function UP(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = st()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ue === e &&
      (Qe & n) === n &&
      (Ne === 4 || (Ne === 3 && (Qe & 130023424) === Qe && 500 > Re() - Ap)
        ? Er(e, 0)
        : (bp |= n)),
    mt(e, t);
}
function P1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = As), (As <<= 1), !(As & 130023424) && (As = 4194304))
      : (t = 1));
  var n = st();
  (e = En(e, t)), e !== null && (ss(e, t, n), mt(e, n));
}
function WP(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), P1(e, n);
}
function HP(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), P1(e, n);
}
var E1;
E1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pt.current) dt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (dt = !1), _P(e, t, n);
      dt = !!(e.flags & 131072);
    }
  else (dt = !1), Se && t.flags & 1048576 && bv(t, ba, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ea(e, t), (e = t.pendingProps);
      var o = Co(t, rt.current);
      ho(t, n), (o = xp(null, t, r, e, o, n));
      var i = Cp();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ht(r) ? ((i = !0), ka(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            gp(t),
            (o.updater = gl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Bf(t, r, e, n),
            (t = Wf(null, t, r, !0, i, n)))
          : ((t.tag = 0), Se && i && up(t), it(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ea(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = GP(r)),
          (e = Bt(r, e)),
          o)
        ) {
          case 0:
            t = Uf(null, t, r, e, n);
            break e;
          case 1:
            t = Vm(null, t, r, e, n);
            break e;
          case 11:
            t = Im(null, t, r, e, n);
            break e;
          case 14:
            t = Fm(null, t, r, Bt(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Bt(r, o)),
        Uf(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Bt(r, o)),
        Vm(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((a1(t), e === null)) throw Error(A(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Lv(e, t),
          Ra(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = To(Error(A(423)), t)), (t = Bm(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = To(Error(A(424)), t)), (t = Bm(e, t, r, n, o));
            break e;
          } else
            for (
              xt = Qn(t.stateNode.containerInfo.firstChild),
                Ct = t,
                Se = !0,
                Ut = null,
                n = Dv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Po(), r === o)) {
            t = kn(e, t, n);
            break e;
          }
          it(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        jv(t),
        e === null && If(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Mf(r, o) ? (s = null) : i !== null && Mf(r, i) && (t.flags |= 32),
        s1(e, t),
        it(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && If(t), null;
    case 13:
      return l1(e, t, n);
    case 4:
      return (
        yp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Eo(t, null, r, n)) : it(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Bt(r, o)),
        Im(e, t, r, o, n)
      );
    case 7:
      return it(e, t, t.pendingProps, n), t.child;
    case 8:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          he(Aa, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Yt(i.value, s)) {
            if (i.children === o.children && !pt.current) {
              t = kn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = mn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Ff(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(A(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Ff(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        it(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ho(t, n),
        (o = Dt(o)),
        (r = r(o)),
        (t.flags |= 1),
        it(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Bt(r, t.pendingProps)),
        (o = Bt(r.type, o)),
        Fm(e, t, r, o, n)
      );
    case 15:
      return o1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Bt(r, o)),
        ea(e, t),
        (t.tag = 1),
        ht(r) ? ((e = !0), ka(t)) : (e = !1),
        ho(t, n),
        Mv(t, r, o),
        Bf(t, r, o, n),
        Wf(null, t, r, !0, e, n)
      );
    case 19:
      return u1(e, t, n);
    case 22:
      return i1(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function k1(e, t) {
  return q0(e, t);
}
function KP(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Mt(e, t, n, r) {
  return new KP(e, t, n, r);
}
function _p(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function GP(e) {
  if (typeof e == "function") return _p(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qd)) return 11;
    if (e === Jd) return 14;
  }
  return 2;
}
function Zn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ra(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) _p(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Yr:
        return kr(n.children, o, i, t);
      case Xd:
        (s = 8), (o |= 8);
        break;
      case ff:
        return (
          (e = Mt(12, n, t, o | 2)), (e.elementType = ff), (e.lanes = i), e
        );
      case df:
        return (e = Mt(13, n, t, o)), (e.elementType = df), (e.lanes = i), e;
      case pf:
        return (e = Mt(19, n, t, o)), (e.elementType = pf), (e.lanes = i), e;
      case $0:
        return wl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case _0:
              s = 10;
              break e;
            case M0:
              s = 9;
              break e;
            case qd:
              s = 11;
              break e;
            case Jd:
              s = 14;
              break e;
            case Nn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Mt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function kr(e, t, n, r) {
  return (e = Mt(7, e, r, t)), (e.lanes = n), e;
}
function wl(e, t, n, r) {
  return (
    (e = Mt(22, e, r, t)),
    (e.elementType = $0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Uu(e, t, n) {
  return (e = Mt(6, e, null, t)), (e.lanes = n), e;
}
function Wu(e, t, n) {
  return (
    (t = Mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function YP(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Eu(0)),
    (this.expirationTimes = Eu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Eu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Mp(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new YP(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Mt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    gp(i),
    e
  );
}
function QP(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function T1(e) {
  if (!e) return sr;
  e = e._reactInternals;
  e: {
    if (jr(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ht(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ht(n)) return kv(e, n, t);
  }
  return t;
}
function b1(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Mp(n, r, !0, e, o, i, s, a, l)),
    (e.context = T1(null)),
    (n = e.current),
    (r = st()),
    (o = Jn(n)),
    (i = mn(r, o)),
    (i.callback = t ?? null),
    Xn(n, i, o),
    (e.current.lanes = o),
    ss(e, o, r),
    mt(e, r),
    e
  );
}
function xl(e, t, n, r) {
  var o = t.current,
    i = st(),
    s = Jn(o);
  return (
    (n = T1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = mn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xn(o, t, s)),
    e !== null && (Kt(e, o, s, i), qs(e, o, s)),
    s
  );
}
function Ia(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $p(e, t) {
  qm(e, t), (e = e.alternate) && qm(e, t);
}
function XP() {
  return null;
}
var A1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Dp(e) {
  this._internalRoot = e;
}
Cl.prototype.render = Dp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  xl(e, t, null, null);
};
Cl.prototype.unmount = Dp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rr(function () {
      xl(null, e, null, null);
    }),
      (t[Pn] = null);
  }
};
function Cl(e) {
  this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ov();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vn.length && t !== 0 && t < Vn[n].priority; n++);
    Vn.splice(n, 0, e), n === 0 && sv(e);
  }
};
function jp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Jm() {}
function qP(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ia(s);
        i.call(u);
      };
    }
    var s = b1(t, r, e, 0, null, !1, !1, "", Jm);
    return (
      (e._reactRootContainer = s),
      (e[Pn] = s.current),
      ji(e.nodeType === 8 ? e.parentNode : e),
      Rr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ia(l);
      a.call(u);
    };
  }
  var l = Mp(e, 0, !1, null, null, !1, !1, "", Jm);
  return (
    (e._reactRootContainer = l),
    (e[Pn] = l.current),
    ji(e.nodeType === 8 ? e.parentNode : e),
    Rr(function () {
      xl(t, l, n, r);
    }),
    l
  );
}
function El(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Ia(s);
        a.call(l);
      };
    }
    xl(t, s, e, o);
  } else s = qP(n, t, e, o, r);
  return Ia(s);
}
nv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ii(t.pendingLanes);
        n !== 0 &&
          (tp(t, n | 1), mt(t, Re()), !(re & 6) && ((bo = Re() + 500), dr()));
      }
      break;
    case 13:
      Rr(function () {
        var r = En(e, 1);
        if (r !== null) {
          var o = st();
          Kt(r, e, 1, o);
        }
      }),
        $p(e, 1);
  }
};
np = function (e) {
  if (e.tag === 13) {
    var t = En(e, 134217728);
    if (t !== null) {
      var n = st();
      Kt(t, e, 134217728, n);
    }
    $p(e, 134217728);
  }
};
rv = function (e) {
  if (e.tag === 13) {
    var t = Jn(e),
      n = En(e, t);
    if (n !== null) {
      var r = st();
      Kt(n, e, t, r);
    }
    $p(e, t);
  }
};
ov = function () {
  return ue;
};
iv = function (e, t) {
  var n = ue;
  try {
    return (ue = e), t();
  } finally {
    ue = n;
  }
};
Pf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((gf(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = hl(r);
            if (!o) throw Error(A(90));
            j0(r), gf(r, o);
          }
        }
      }
      break;
    case "textarea":
      I0(e, n);
      break;
    case "select":
      (t = n.value), t != null && uo(e, !!n.multiple, t, !1);
  }
};
H0 = Op;
K0 = Rr;
var JP = { usingClientEntryPoint: !1, Events: [ls, Jr, hl, U0, W0, Op] },
  Xo = {
    findFiberByHostInstance: wr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  ZP = {
    bundleType: Xo.bundleType,
    version: Xo.version,
    rendererPackageName: Xo.rendererPackageName,
    rendererConfig: Xo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Q0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Xo.findFiberByHostInstance || XP,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fs.isDisabled && Fs.supportsFiber)
    try {
      (cl = Fs.inject(ZP)), (on = Fs);
    } catch {}
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JP;
bt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!jp(t)) throw Error(A(200));
  return QP(e, t, null, n);
};
bt.createRoot = function (e, t) {
  if (!jp(e)) throw Error(A(299));
  var n = !1,
    r = "",
    o = A1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Mp(e, 1, !1, null, null, n, !1, r, o)),
    (e[Pn] = t.current),
    ji(e.nodeType === 8 ? e.parentNode : e),
    new Dp(t)
  );
};
bt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = Q0(t)), (e = e === null ? null : e.stateNode), e;
};
bt.flushSync = function (e) {
  return Rr(e);
};
bt.hydrate = function (e, t, n) {
  if (!Pl(t)) throw Error(A(200));
  return El(null, e, t, !0, n);
};
bt.hydrateRoot = function (e, t, n) {
  if (!jp(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = A1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = b1(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Pn] = t.current),
    ji(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Cl(t);
};
bt.render = function (e, t, n) {
  if (!Pl(t)) throw Error(A(200));
  return El(null, e, t, !1, n);
};
bt.unmountComponentAtNode = function (e) {
  if (!Pl(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (Rr(function () {
        El(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Pn] = null);
        });
      }),
      !0)
    : !1;
};
bt.unstable_batchedUpdates = Op;
bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pl(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return El(e, t, n, !1, r);
};
bt.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = bt);
})(Xx);
var Zm = ha;
(lf.createRoot = Zm.createRoot), (lf.hydrateRoot = Zm.hydrateRoot);
const eE = "modulepreload",
  tE = function (e) {
    return "/" + e;
  },
  eg = {},
  Nt = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName("link");
    return Promise.all(
      n.map((i) => {
        if (((i = tE(i)), i in eg)) return;
        eg[i] = !0;
        const s = i.endsWith(".css"),
          a = s ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let c = o.length - 1; c >= 0; c--) {
            const f = o[c];
            if (f.href === i && (!s || f.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${a}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = s ? "stylesheet" : eE),
          s || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = i),
          document.head.appendChild(u),
          s)
        )
          return new Promise((c, f) => {
            u.addEventListener("load", c),
              u.addEventListener("error", () =>
                f(new Error(`Unable to preload CSS for ${i}`))
              );
          });
      })
    ).then(() => t());
  };
/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hi() {
  return (
    (Hi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Hi.apply(this, arguments)
  );
}
var Hn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Hn || (Hn = {}));
const tg = "popstate";
function nE(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return nd(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Fa(o);
  }
  return oE(t, n, null, e);
}
function Ie(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Np(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function rE() {
  return Math.random().toString(36).substr(2, 8);
}
function ng(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function nd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Hi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? No(t) : t,
      { state: n, key: (t && t.key) || r || rE() }
    )
  );
}
function Fa(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function No(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function oE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = Hn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Hi({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = Hn.Pop;
    let S = c(),
      y = S == null ? null : S - u;
    (u = S), l && l({ action: a, location: g.location, delta: y });
  }
  function d(S, y) {
    a = Hn.Push;
    let h = nd(g.location, S, y);
    n && n(h, S), (u = c() + 1);
    let v = ng(h, u),
      w = g.createHref(h);
    try {
      s.pushState(v, "", w);
    } catch {
      o.location.assign(w);
    }
    i && l && l({ action: a, location: g.location, delta: 1 });
  }
  function m(S, y) {
    a = Hn.Replace;
    let h = nd(g.location, S, y);
    n && n(h, S), (u = c());
    let v = ng(h, u),
      w = g.createHref(h);
    s.replaceState(v, "", w),
      i && l && l({ action: a, location: g.location, delta: 0 });
  }
  function p(S) {
    let y = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof S == "string" ? S : Fa(S);
    return (
      Ie(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, y)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(S) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(tg, f),
        (l = S),
        () => {
          o.removeEventListener(tg, f), (l = null);
        }
      );
    },
    createHref(S) {
      return t(o, S);
    },
    createURL: p,
    encodeLocation(S) {
      let y = p(S);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: d,
    replace: m,
    go(S) {
      return s.go(S);
    },
  };
  return g;
}
var rg;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(rg || (rg = {}));
function iE(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? No(t) : t,
    o = Ip(r.pathname || "/", n);
  if (o == null) return null;
  let i = O1(e);
  sE(i);
  let s = null;
  for (let a = 0; s == null && a < i.length; ++a) s = mE(i[a], vE(o));
  return s;
}
function O1(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (Ie(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = er([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (Ie(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      O1(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: pE(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of R1(i.path)) o(i, s, l);
    }),
    t
  );
}
function R1(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = R1(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function sE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : hE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const aE = /^:\w+$/,
  lE = 3,
  uE = 2,
  cE = 1,
  fE = 10,
  dE = -2,
  og = (e) => e === "*";
function pE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(og) && (r += dE),
    t && (r += uE),
    n
      .filter((o) => !og(o))
      .reduce((o, i) => o + (aE.test(i) ? lE : i === "" ? cE : fE), r)
  );
}
function hE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function mE(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let a = n[s],
      l = s === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = gE(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = a.route;
    i.push({
      params: r,
      pathname: er([o, c.pathname]),
      pathnameBase: CE(er([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (o = er([o, c.pathnameBase]));
  }
  return i;
}
function gE(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = yE(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      if (c === "*") {
        let d = a[f] || "";
        s = i.slice(0, i.length - d.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = SE(a[f] || "", c)), u;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function yE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Np(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (s, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function vE(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Np(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function SE(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Np(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Ip(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function wE(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? No(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : xE(n, t)) : t,
    search: PE(r),
    hash: EE(o),
  };
}
function xE(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Hu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function L1(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function _1(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = No(e))
    : ((o = Hi({}, e)),
      Ie(
        !o.pathname || !o.pathname.includes("?"),
        Hu("?", "pathname", "search", o)
      ),
      Ie(
        !o.pathname || !o.pathname.includes("#"),
        Hu("#", "pathname", "hash", o)
      ),
      Ie(!o.search || !o.search.includes("#"), Hu("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (r || s == null) a = n;
  else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      o.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = wE(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const er = (e) => e.join("/").replace(/\/\/+/g, "/"),
  CE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  PE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  EE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function kE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function TE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const bE = typeof Object.is == "function" ? Object.is : TE,
  { useState: AE, useEffect: OE, useLayoutEffect: RE, useDebugValue: LE } = bi;
function _E(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = AE({ inst: { value: r, getSnapshot: t } });
  return (
    RE(() => {
      (o.value = r), (o.getSnapshot = t), Ku(o) && i({ inst: o });
    }, [e, r, t]),
    OE(
      () => (
        Ku(o) && i({ inst: o }),
        e(() => {
          Ku(o) && i({ inst: o });
        })
      ),
      [e]
    ),
    LE(r),
    r
  );
}
function Ku(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !bE(n, r);
  } catch {
    return !0;
  }
}
function ME(e, t, n) {
  return t();
}
const $E =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  DE = !$E,
  jE = DE ? ME : _E;
"useSyncExternalStore" in bi && ((e) => e.useSyncExternalStore)(bi);
const M1 = P.createContext(null),
  $1 = P.createContext(null),
  cs = P.createContext(null),
  kl = P.createContext(null),
  Nr = P.createContext({ outlet: null, matches: [] }),
  D1 = P.createContext(null);
function rd() {
  return (
    (rd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rd.apply(this, arguments)
  );
}
function NE(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  fs() || Ie(!1);
  let { basename: r, navigator: o } = P.useContext(cs),
    { hash: i, pathname: s, search: a } = j1(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : er([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function fs() {
  return P.useContext(kl) != null;
}
function Tl() {
  return fs() || Ie(!1), P.useContext(kl).location;
}
function IE() {
  fs() || Ie(!1);
  let { basename: e, navigator: t } = P.useContext(cs),
    { matches: n } = P.useContext(Nr),
    { pathname: r } = Tl(),
    o = JSON.stringify(L1(n).map((a) => a.pathnameBase)),
    i = P.useRef(!1);
  return (
    P.useEffect(() => {
      i.current = !0;
    }),
    P.useCallback(
      function (a, l) {
        if ((l === void 0 && (l = {}), !i.current)) return;
        if (typeof a == "number") {
          t.go(a);
          return;
        }
        let u = _1(a, JSON.parse(o), r, l.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : er([e, u.pathname])),
          (l.replace ? t.replace : t.push)(u, l.state, l);
      },
      [e, t, o, r]
    )
  );
}
function n4() {
  let { matches: e } = P.useContext(Nr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function j1(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = P.useContext(Nr),
    { pathname: o } = Tl(),
    i = JSON.stringify(L1(r).map((s) => s.pathnameBase));
  return P.useMemo(() => _1(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function FE(e, t) {
  fs() || Ie(!1);
  let { navigator: n } = P.useContext(cs),
    r = P.useContext($1),
    { matches: o } = P.useContext(Nr),
    i = o[o.length - 1],
    s = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let l = Tl(),
    u;
  if (t) {
    var c;
    let g = typeof t == "string" ? No(t) : t;
    a === "/" || ((c = g.pathname) != null && c.startsWith(a)) || Ie(!1),
      (u = g);
  } else u = l;
  let f = u.pathname || "/",
    d = a === "/" ? f : f.slice(a.length) || "/",
    m = iE(e, { pathname: d }),
    p = UE(
      m &&
        m.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, s, g.params),
            pathname: er([
              a,
              n.encodeLocation
                ? n.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? a
                : er([
                    a,
                    n.encodeLocation
                      ? n.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      o,
      r || void 0
    );
  return t && p
    ? P.createElement(
        kl.Provider,
        {
          value: {
            location: rd(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Hn.Pop,
          },
        },
        p
      )
    : p;
}
function VE() {
  let e = GE(),
    t = kE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: o }, n) : null,
    i
  );
}
class BE extends P.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? P.createElement(
          Nr.Provider,
          { value: this.props.routeContext },
          P.createElement(D1.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function zE(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = P.useContext(M1);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(Nr.Provider, { value: t }, r)
  );
}
function UE(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let i = r.findIndex(
      (s) => s.route.id && (o == null ? void 0 : o[s.route.id])
    );
    i >= 0 || Ie(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, s, a) => {
    let l = s.route.id ? (o == null ? void 0 : o[s.route.id]) : null,
      u = null;
    n &&
      (s.route.ErrorBoundary
        ? (u = P.createElement(s.route.ErrorBoundary, null))
        : s.route.errorElement
        ? (u = s.route.errorElement)
        : (u = P.createElement(VE, null)));
    let c = t.concat(r.slice(0, a + 1)),
      f = () => {
        let d = i;
        return (
          l
            ? (d = u)
            : s.route.Component
            ? (d = P.createElement(s.route.Component, null))
            : s.route.element && (d = s.route.element),
          P.createElement(zE, {
            match: s,
            routeContext: { outlet: i, matches: c },
            children: d,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? P.createElement(BE, {
          location: n.location,
          component: u,
          error: l,
          children: f(),
          routeContext: { outlet: null, matches: c },
        })
      : f();
  }, null);
}
var ig;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(ig || (ig = {}));
var Va;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Va || (Va = {}));
function WE(e) {
  let t = P.useContext($1);
  return t || Ie(!1), t;
}
function HE(e) {
  let t = P.useContext(Nr);
  return t || Ie(!1), t;
}
function KE(e) {
  let t = HE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ie(!1), n.route.id;
}
function GE() {
  var e;
  let t = P.useContext(D1),
    n = WE(Va.UseRouteError),
    r = KE(Va.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function vt(e) {
  Ie(!1);
}
function YE(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Hn.Pop,
    navigator: i,
    static: s = !1,
  } = e;
  fs() && Ie(!1);
  let a = t.replace(/^\/*/, "/"),
    l = P.useMemo(() => ({ basename: a, navigator: i, static: s }), [a, i, s]);
  typeof r == "string" && (r = No(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: d = null,
      key: m = "default",
    } = r,
    p = P.useMemo(() => {
      let g = Ip(u, a);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: f, state: d, key: m },
            navigationType: o,
          };
    }, [a, u, c, f, d, m, o]);
  return p == null
    ? null
    : P.createElement(
        cs.Provider,
        { value: l },
        P.createElement(kl.Provider, { children: n, value: p })
      );
}
function QE(e) {
  let { children: t, location: n } = e,
    r = P.useContext(M1),
    o = r && !t ? r.router.routes : od(t);
  return FE(o, n);
}
var sg;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(sg || (sg = {}));
new Promise(() => {});
function od(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    P.Children.forEach(e, (r, o) => {
      if (!P.isValidElement(r)) return;
      if (r.type === P.Fragment) {
        n.push.apply(n, od(r.props.children, t));
        return;
      }
      r.type !== vt && Ie(!1), !r.props.index || !r.props.children || Ie(!1);
      let i = [...t, o],
        s = {
          id: r.props.id || i.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
      r.props.children && (s.children = od(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function id() {
  return (
    (id = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    id.apply(this, arguments)
  );
}
function XE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function qE(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function JE(e, t) {
  return e.button === 0 && (!t || t === "_self") && !qE(e);
}
const ZE = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function ek(e) {
  let { basename: t, children: n, window: r } = e,
    o = P.useRef();
  o.current == null && (o.current = nE({ window: r, v5Compat: !0 }));
  let i = o.current,
    [s, a] = P.useState({ action: i.action, location: i.location });
  return (
    P.useLayoutEffect(() => i.listen(a), [i]),
    P.createElement(YE, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: i,
    })
  );
}
const tk =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  nk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  r4 = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
      } = t,
      f = XE(t, ZE),
      { basename: d } = P.useContext(cs),
      m,
      p = !1;
    if (typeof u == "string" && nk.test(u) && ((m = u), tk)) {
      let h = new URL(window.location.href),
        v = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
        w = Ip(v.pathname, d);
      v.origin === h.origin && w != null
        ? (u = w + v.search + v.hash)
        : (p = !0);
    }
    let g = NE(u, { relative: o }),
      S = rk(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: o,
      });
    function y(h) {
      r && r(h), h.defaultPrevented || S(h);
    }
    return P.createElement(
      "a",
      id({}, f, { href: m || g, onClick: p || i ? r : y, ref: n, target: l })
    );
  });
var ag;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(ag || (ag = {}));
var lg;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(lg || (lg = {}));
function rk(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
    } = t === void 0 ? {} : t,
    a = IE(),
    l = Tl(),
    u = j1(e, { relative: s });
  return P.useCallback(
    (c) => {
      if (JE(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : Fa(l) === Fa(u);
        a(e, { replace: f, state: o, preventScrollReset: i, relative: s });
      }
    },
    [l, a, u, r, o, n, e, i, s]
  );
}
function Gt(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function ee() {
  return (
    (ee = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ee.apply(this, arguments)
  );
}
function N1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = N1(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function ok() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = N1(e)) && (r && (r += " "), (r += t));
  return r;
}
function Kr(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function I1(e) {
  if (!Kr(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = I1(e[n]);
    }),
    t
  );
}
function gn(e, t, n = { clone: !0 }) {
  const r = n.clone ? ee({}, e) : e;
  return (
    Kr(e) &&
      Kr(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (Kr(t[o]) && o in e && Kr(e[o])
            ? (r[o] = gn(e[o], t[o], n))
            : n.clone
            ? (r[o] = Kr(t[o]) ? I1(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function Ao(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Ba = {},
  ik = {
    get exports() {
      return Ba;
    },
    set exports(e) {
      Ba = e;
    },
  },
  ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fp = Symbol.for("react.element"),
  Vp = Symbol.for("react.portal"),
  bl = Symbol.for("react.fragment"),
  Al = Symbol.for("react.strict_mode"),
  Ol = Symbol.for("react.profiler"),
  Rl = Symbol.for("react.provider"),
  Ll = Symbol.for("react.context"),
  sk = Symbol.for("react.server_context"),
  _l = Symbol.for("react.forward_ref"),
  Ml = Symbol.for("react.suspense"),
  $l = Symbol.for("react.suspense_list"),
  Dl = Symbol.for("react.memo"),
  jl = Symbol.for("react.lazy"),
  ak = Symbol.for("react.offscreen"),
  F1;
F1 = Symbol.for("react.module.reference");
function It(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Fp:
        switch (((e = e.type), e)) {
          case bl:
          case Ol:
          case Al:
          case Ml:
          case $l:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case sk:
              case Ll:
              case _l:
              case jl:
              case Dl:
              case Rl:
                return e;
              default:
                return t;
            }
        }
      case Vp:
        return t;
    }
  }
}
ce.ContextConsumer = Ll;
ce.ContextProvider = Rl;
ce.Element = Fp;
ce.ForwardRef = _l;
ce.Fragment = bl;
ce.Lazy = jl;
ce.Memo = Dl;
ce.Portal = Vp;
ce.Profiler = Ol;
ce.StrictMode = Al;
ce.Suspense = Ml;
ce.SuspenseList = $l;
ce.isAsyncMode = function () {
  return !1;
};
ce.isConcurrentMode = function () {
  return !1;
};
ce.isContextConsumer = function (e) {
  return It(e) === Ll;
};
ce.isContextProvider = function (e) {
  return It(e) === Rl;
};
ce.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fp;
};
ce.isForwardRef = function (e) {
  return It(e) === _l;
};
ce.isFragment = function (e) {
  return It(e) === bl;
};
ce.isLazy = function (e) {
  return It(e) === jl;
};
ce.isMemo = function (e) {
  return It(e) === Dl;
};
ce.isPortal = function (e) {
  return It(e) === Vp;
};
ce.isProfiler = function (e) {
  return It(e) === Ol;
};
ce.isStrictMode = function (e) {
  return It(e) === Al;
};
ce.isSuspense = function (e) {
  return It(e) === Ml;
};
ce.isSuspenseList = function (e) {
  return It(e) === $l;
};
ce.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === bl ||
    e === Ol ||
    e === Al ||
    e === Ml ||
    e === $l ||
    e === ak ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === jl ||
        e.$$typeof === Dl ||
        e.$$typeof === Rl ||
        e.$$typeof === Ll ||
        e.$$typeof === _l ||
        e.$$typeof === F1 ||
        e.getModuleId !== void 0))
  );
};
ce.typeOf = It;
(function (e) {
  e.exports = ce;
})(ik);
function yn(e) {
  if (typeof e != "string") throw new Error(Ao(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function V1(e, t) {
  const n = ee({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = ee({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = ee({}, i)),
              Object.keys(o).forEach((s) => {
                n[r][s] = V1(o[s], i[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function lk(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== "" && i.push(a), n && n[s] && i.push(n[s]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const ug = (e) => e,
  uk = () => {
    let e = ug;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = ug;
      },
    };
  },
  ck = uk(),
  fk = ck,
  dk = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    readOnly: "readOnly",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    required: "required",
    selected: "selected",
  };
function B1(e, t, n = "Mui") {
  const r = dk[t];
  return r ? `${n}-${r}` : `${fk.generate(e)}-${t}`;
}
function pk(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = B1(e, o, n);
    }),
    r
  );
}
function z1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var hk =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  sd = z1(function (e) {
    return (
      hk.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function mk(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function gk(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var yk = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(gk(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = mk(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  et = "-ms-",
  za = "-moz-",
  ie = "-webkit-",
  U1 = "comm",
  Bp = "rule",
  zp = "decl",
  vk = "@import",
  W1 = "@keyframes",
  Sk = Math.abs,
  Nl = String.fromCharCode,
  wk = Object.assign;
function xk(e, t) {
  return Ye(e, 0) ^ 45
    ? (((((((t << 2) ^ Ye(e, 0)) << 2) ^ Ye(e, 1)) << 2) ^ Ye(e, 2)) << 2) ^
        Ye(e, 3)
    : 0;
}
function H1(e) {
  return e.trim();
}
function Ck(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ae(e, t, n) {
  return e.replace(t, n);
}
function ad(e, t) {
  return e.indexOf(t);
}
function Ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ki(e, t, n) {
  return e.slice(t, n);
}
function Jt(e) {
  return e.length;
}
function Up(e) {
  return e.length;
}
function Vs(e, t) {
  return t.push(e), e;
}
function Pk(e, t) {
  return e.map(t).join("");
}
var Il = 1,
  Oo = 1,
  K1 = 0,
  gt = 0,
  Me = 0,
  Io = "";
function Fl(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Il,
    column: Oo,
    length: s,
    return: "",
  };
}
function qo(e, t) {
  return wk(Fl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ek() {
  return Me;
}
function kk() {
  return (
    (Me = gt > 0 ? Ye(Io, --gt) : 0), Oo--, Me === 10 && ((Oo = 1), Il--), Me
  );
}
function Pt() {
  return (
    (Me = gt < K1 ? Ye(Io, gt++) : 0), Oo++, Me === 10 && ((Oo = 1), Il++), Me
  );
}
function an() {
  return Ye(Io, gt);
}
function oa() {
  return gt;
}
function ds(e, t) {
  return Ki(Io, e, t);
}
function Gi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function G1(e) {
  return (Il = Oo = 1), (K1 = Jt((Io = e))), (gt = 0), [];
}
function Y1(e) {
  return (Io = ""), e;
}
function ia(e) {
  return H1(ds(gt - 1, ld(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Tk(e) {
  for (; (Me = an()) && Me < 33; ) Pt();
  return Gi(e) > 2 || Gi(Me) > 3 ? "" : " ";
}
function bk(e, t) {
  for (
    ;
    --t &&
    Pt() &&
    !(Me < 48 || Me > 102 || (Me > 57 && Me < 65) || (Me > 70 && Me < 97));

  );
  return ds(e, oa() + (t < 6 && an() == 32 && Pt() == 32));
}
function ld(e) {
  for (; Pt(); )
    switch (Me) {
      case e:
        return gt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ld(Me);
        break;
      case 40:
        e === 41 && ld(e);
        break;
      case 92:
        Pt();
        break;
    }
  return gt;
}
function Ak(e, t) {
  for (; Pt() && e + Me !== 47 + 10; )
    if (e + Me === 42 + 42 && an() === 47) break;
  return "/*" + ds(t, gt - 1) + "*" + Nl(e === 47 ? e : Pt());
}
function Ok(e) {
  for (; !Gi(an()); ) Pt();
  return ds(e, gt);
}
function Rk(e) {
  return Y1(sa("", null, null, null, [""], (e = G1(e)), 0, [0], e));
}
function sa(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      m = 0,
      p = 0,
      g = 1,
      S = 1,
      y = 1,
      h = 0,
      v = "",
      w = o,
      x = i,
      b = r,
      E = v;
    S;

  )
    switch (((p = h), (h = Pt()))) {
      case 40:
        if (p != 108 && Ye(E, f - 1) == 58) {
          ad((E += ae(ia(h), "&", "&\f")), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += ia(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Tk(p);
        break;
      case 92:
        E += bk(oa() - 1, 7);
        continue;
      case 47:
        switch (an()) {
          case 42:
          case 47:
            Vs(Lk(Ak(Pt(), oa()), t, n), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * g:
        a[u++] = Jt(E) * y;
      case 125 * g:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            m > 0 &&
              Jt(E) - f &&
              Vs(
                m > 32
                  ? fg(E + ";", r, n, f - 1)
                  : fg(ae(E, " ", "") + ";", r, n, f - 2),
                l
              );
            break;
          case 59:
            E += ";";
          default:
            if (
              (Vs((b = cg(E, t, n, u, c, o, a, v, (w = []), (x = []), f)), i),
              h === 123)
            )
              if (c === 0) sa(E, t, b, b, w, i, f, a, x);
              else
                switch (d === 99 && Ye(E, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    sa(
                      e,
                      b,
                      b,
                      r && Vs(cg(e, b, b, 0, 0, o, a, v, o, (w = []), f), x),
                      o,
                      x,
                      f,
                      a,
                      r ? w : x
                    );
                    break;
                  default:
                    sa(E, b, b, b, [""], x, 0, a, x);
                }
        }
        (u = c = m = 0), (g = y = 1), (v = E = ""), (f = s);
        break;
      case 58:
        (f = 1 + Jt(E)), (m = p);
      default:
        if (g < 1) {
          if (h == 123) --g;
          else if (h == 125 && g++ == 0 && kk() == 125) continue;
        }
        switch (((E += Nl(h)), h * g)) {
          case 38:
            y = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Jt(E) - 1) * y), (y = 1);
            break;
          case 64:
            an() === 45 && (E += ia(Pt())),
              (d = an()),
              (c = f = Jt((v = E += Ok(oa())))),
              h++;
            break;
          case 45:
            p === 45 && Jt(E) == 2 && (g = 0);
        }
    }
  return i;
}
function cg(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var f = o - 1, d = o === 0 ? i : [""], m = Up(d), p = 0, g = 0, S = 0;
    p < r;
    ++p
  )
    for (var y = 0, h = Ki(e, f + 1, (f = Sk((g = s[p])))), v = e; y < m; ++y)
      (v = H1(g > 0 ? d[y] + " " + h : ae(h, /&\f/g, d[y]))) && (l[S++] = v);
  return Fl(e, t, n, o === 0 ? Bp : a, l, u, c);
}
function Lk(e, t, n) {
  return Fl(e, t, n, U1, Nl(Ek()), Ki(e, 2, -2), 0);
}
function fg(e, t, n, r) {
  return Fl(e, t, n, zp, Ki(e, 0, r), Ki(e, r + 1, -1), r);
}
function go(e, t) {
  for (var n = "", r = Up(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function _k(e, t, n, r) {
  switch (e.type) {
    case vk:
    case zp:
      return (e.return = e.return || e.value);
    case U1:
      return "";
    case W1:
      return (e.return = e.value + "{" + go(e.children, r) + "}");
    case Bp:
      e.value = e.props.join(",");
  }
  return Jt((n = go(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Mk(e) {
  var t = Up(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function $k(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Dk = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = an()), o === 38 && i === 12 && (n[r] = 1), !Gi(i);

    )
      Pt();
    return ds(t, gt);
  },
  jk = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Gi(o)) {
        case 0:
          o === 38 && an() === 12 && (n[r] = 1), (t[r] += Dk(gt - 1, n, r));
          break;
        case 2:
          t[r] += ia(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = an() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Nl(o);
      }
    while ((o = Pt()));
    return t;
  },
  Nk = function (t, n) {
    return Y1(jk(G1(t), n));
  },
  dg = new WeakMap(),
  Ik = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !dg.get(r)) &&
        !o
      ) {
        dg.set(t, !0);
        for (
          var i = [], s = Nk(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  Fk = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Q1(e, t) {
  switch (xk(e, t)) {
    case 5103:
      return ie + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ie + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ie + e + za + e + et + e + e;
    case 6828:
    case 4268:
      return ie + e + et + e + e;
    case 6165:
      return ie + e + et + "flex-" + e + e;
    case 5187:
      return (
        ie + e + ae(e, /(\w+).+(:[^]+)/, ie + "box-$1$2" + et + "flex-$1$2") + e
      );
    case 5443:
      return ie + e + et + "flex-item-" + ae(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        ie +
        e +
        et +
        "flex-line-pack" +
        ae(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return ie + e + et + ae(e, "shrink", "negative") + e;
    case 5292:
      return ie + e + et + ae(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        ie +
        "box-" +
        ae(e, "-grow", "") +
        ie +
        e +
        et +
        ae(e, "grow", "positive") +
        e
      );
    case 4554:
      return ie + ae(e, /([^-])(transform)/g, "$1" + ie + "$2") + e;
    case 6187:
      return (
        ae(
          ae(ae(e, /(zoom-|grab)/, ie + "$1"), /(image-set)/, ie + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ae(e, /(image-set\([^]*)/, ie + "$1$`$1");
    case 4968:
      return (
        ae(
          ae(e, /(.+:)(flex-)?(.*)/, ie + "box-pack:$3" + et + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ie +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ae(e, /(.+)-inline(.+)/, ie + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Jt(e) - 1 - t > 6)
        switch (Ye(e, t + 1)) {
          case 109:
            if (Ye(e, t + 4) !== 45) break;
          case 102:
            return (
              ae(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ie +
                  "$2-$3$1" +
                  za +
                  (Ye(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~ad(e, "stretch")
              ? Q1(ae(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ye(e, t + 1) !== 115) break;
    case 6444:
      switch (Ye(e, Jt(e) - 3 - (~ad(e, "!important") && 10))) {
        case 107:
          return ae(e, ":", ":" + ie) + e;
        case 101:
          return (
            ae(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ie +
                (Ye(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ie +
                "$2$3$1" +
                et +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ye(e, t + 11)) {
        case 114:
          return ie + e + et + ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ie + e + et + ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ie + e + et + ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ie + e + et + e + e;
  }
  return e;
}
var Vk = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case zp:
          t.return = Q1(t.value, t.length);
          break;
        case W1:
          return go([qo(t, { value: ae(t.value, "@", "@" + ie) })], o);
        case Bp:
          if (t.length)
            return Pk(t.props, function (i) {
              switch (Ck(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return go(
                    [qo(t, { props: [ae(i, /:(read-\w+)/, ":" + za + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return go(
                    [
                      qo(t, {
                        props: [ae(i, /:(plac\w+)/, ":" + ie + "input-$1")],
                      }),
                      qo(t, { props: [ae(i, /:(plac\w+)/, ":" + za + "$1")] }),
                      qo(t, { props: [ae(i, /:(plac\w+)/, et + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  Bk = [Vk],
  zk = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var S = g.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || Bk,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var S = g.getAttribute("data-emotion").split(" "), y = 1;
            y < S.length;
            y++
          )
            i[S[y]] = !0;
          a.push(g);
        }
      );
    var l,
      u = [Ik, Fk];
    {
      var c,
        f = [
          _k,
          $k(function (g) {
            c.insert(g);
          }),
        ],
        d = Mk(u.concat(o, f)),
        m = function (S) {
          return go(Rk(S), d);
        };
      l = function (S, y, h, v) {
        (c = h),
          m(S ? S + "{" + y.styles + "}" : y.styles),
          v && (p.inserted[y.name] = !0);
      };
    }
    var p = {
      key: n,
      sheet: new yk({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return p.sheet.hydrate(a), p;
  },
  ud = {},
  Uk = {
    get exports() {
      return ud;
    },
    set exports(e) {
      ud = e;
    },
  },
  fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var We = typeof Symbol == "function" && Symbol.for,
  Wp = We ? Symbol.for("react.element") : 60103,
  Hp = We ? Symbol.for("react.portal") : 60106,
  Vl = We ? Symbol.for("react.fragment") : 60107,
  Bl = We ? Symbol.for("react.strict_mode") : 60108,
  zl = We ? Symbol.for("react.profiler") : 60114,
  Ul = We ? Symbol.for("react.provider") : 60109,
  Wl = We ? Symbol.for("react.context") : 60110,
  Kp = We ? Symbol.for("react.async_mode") : 60111,
  Hl = We ? Symbol.for("react.concurrent_mode") : 60111,
  Kl = We ? Symbol.for("react.forward_ref") : 60112,
  Gl = We ? Symbol.for("react.suspense") : 60113,
  Wk = We ? Symbol.for("react.suspense_list") : 60120,
  Yl = We ? Symbol.for("react.memo") : 60115,
  Ql = We ? Symbol.for("react.lazy") : 60116,
  Hk = We ? Symbol.for("react.block") : 60121,
  Kk = We ? Symbol.for("react.fundamental") : 60117,
  Gk = We ? Symbol.for("react.responder") : 60118,
  Yk = We ? Symbol.for("react.scope") : 60119;
function Ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Wp:
        switch (((e = e.type), e)) {
          case Kp:
          case Hl:
          case Vl:
          case zl:
          case Bl:
          case Gl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Wl:
              case Kl:
              case Ql:
              case Yl:
              case Ul:
                return e;
              default:
                return t;
            }
        }
      case Hp:
        return t;
    }
  }
}
function X1(e) {
  return Ot(e) === Hl;
}
fe.AsyncMode = Kp;
fe.ConcurrentMode = Hl;
fe.ContextConsumer = Wl;
fe.ContextProvider = Ul;
fe.Element = Wp;
fe.ForwardRef = Kl;
fe.Fragment = Vl;
fe.Lazy = Ql;
fe.Memo = Yl;
fe.Portal = Hp;
fe.Profiler = zl;
fe.StrictMode = Bl;
fe.Suspense = Gl;
fe.isAsyncMode = function (e) {
  return X1(e) || Ot(e) === Kp;
};
fe.isConcurrentMode = X1;
fe.isContextConsumer = function (e) {
  return Ot(e) === Wl;
};
fe.isContextProvider = function (e) {
  return Ot(e) === Ul;
};
fe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wp;
};
fe.isForwardRef = function (e) {
  return Ot(e) === Kl;
};
fe.isFragment = function (e) {
  return Ot(e) === Vl;
};
fe.isLazy = function (e) {
  return Ot(e) === Ql;
};
fe.isMemo = function (e) {
  return Ot(e) === Yl;
};
fe.isPortal = function (e) {
  return Ot(e) === Hp;
};
fe.isProfiler = function (e) {
  return Ot(e) === zl;
};
fe.isStrictMode = function (e) {
  return Ot(e) === Bl;
};
fe.isSuspense = function (e) {
  return Ot(e) === Gl;
};
fe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Vl ||
    e === Hl ||
    e === zl ||
    e === Bl ||
    e === Gl ||
    e === Wk ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ql ||
        e.$$typeof === Yl ||
        e.$$typeof === Ul ||
        e.$$typeof === Wl ||
        e.$$typeof === Kl ||
        e.$$typeof === Kk ||
        e.$$typeof === Gk ||
        e.$$typeof === Yk ||
        e.$$typeof === Hk))
  );
};
fe.typeOf = Ot;
(function (e) {
  e.exports = fe;
})(Uk);
var Gp = ud,
  Qk = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Xk = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  qk = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  q1 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Yp = {};
Yp[Gp.ForwardRef] = qk;
Yp[Gp.Memo] = q1;
function pg(e) {
  return Gp.isMemo(e) ? q1 : Yp[e.$$typeof] || Qk;
}
var Jk = Object.defineProperty,
  Zk = Object.getOwnPropertyNames,
  hg = Object.getOwnPropertySymbols,
  e2 = Object.getOwnPropertyDescriptor,
  t2 = Object.getPrototypeOf,
  mg = Object.prototype;
function J1(e, t, n) {
  if (typeof t != "string") {
    if (mg) {
      var r = t2(t);
      r && r !== mg && J1(e, r, n);
    }
    var o = Zk(t);
    hg && (o = o.concat(hg(t)));
    for (var i = pg(e), s = pg(t), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!Xk[l] && !(n && n[l]) && !(s && s[l]) && !(i && i[l])) {
        var u = e2(t, l);
        try {
          Jk(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
var n2 = J1,
  r2 = !0;
function o2(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Z1 = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || r2 === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  eS = function (t, n, r) {
    Z1(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function i2(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var s2 = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  a2 = /[A-Z]|^ms/g,
  l2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  tS = function (t) {
    return t.charCodeAt(1) === 45;
  },
  gg = function (t) {
    return t != null && typeof t != "boolean";
  },
  Gu = z1(function (e) {
    return tS(e) ? e : e.replace(a2, "-$&").toLowerCase();
  }),
  yg = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(l2, function (r, o, i) {
            return (Zt = { name: o, styles: i, next: Zt }), o;
          });
    }
    return s2[t] !== 1 && !tS(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Yi(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Zt = { name: n.name, styles: n.styles, next: Zt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Zt = { name: r.name, styles: r.styles, next: Zt }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return u2(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Zt,
          s = n(e);
        return (Zt = i), Yi(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function u2(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Yi(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : gg(s) && (r += Gu(i) + ":" + yg(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          gg(s[a]) && (r += Gu(i) + ":" + yg(i, s[a]) + ";");
      else {
        var l = Yi(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Gu(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var vg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Zt,
  Qp = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Zt = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += Yi(r, n, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += Yi(r, n, t[a])), o && (i += s[a]);
    vg.lastIndex = 0;
    for (var l = "", u; (u = vg.exec(i)) !== null; ) l += "-" + u[1];
    var c = i2(i) + l;
    return { name: c, styles: i, next: Zt };
  },
  c2 = function (t) {
    return t();
  },
  nS = bi["useInsertionEffect"] ? bi["useInsertionEffect"] : !1,
  f2 = nS || c2,
  Sg = nS || P.useLayoutEffect,
  rS = P.createContext(typeof HTMLElement < "u" ? zk({ key: "css" }) : null);
rS.Provider;
var oS = function (t) {
    return P.forwardRef(function (n, r) {
      var o = P.useContext(rS);
      return t(n, o, r);
    });
  },
  Xp = P.createContext({}),
  o4 = oS(function (e, t) {
    var n = e.styles,
      r = Qp([n], void 0, P.useContext(Xp)),
      o = P.useRef();
    return (
      Sg(
        function () {
          var i = t.key + "-global",
            s = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
            (o.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t]
      ),
      Sg(
        function () {
          var i = o.current,
            s = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && eS(t, r.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert("", r, s, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function qp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Qp(t);
}
var iS = function () {
    var t = qp.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  d2 = sd,
  p2 = function (t) {
    return t !== "theme";
  },
  wg = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? d2 : p2;
  },
  xg = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  h2 = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Z1(n, r, o),
      f2(function () {
        return eS(n, r, o);
      }),
      null
    );
  },
  m2 = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = xg(t, n, r),
      l = a || wg(o),
      u = !l("as");
    return function () {
      var c = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && f.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, m = 1; m < d; m++) f.push(c[m], c[0][m]);
      }
      var p = oS(function (g, S, y) {
        var h = (u && g.as) || o,
          v = "",
          w = [],
          x = g;
        if (g.theme == null) {
          x = {};
          for (var b in g) x[b] = g[b];
          x.theme = P.useContext(Xp);
        }
        typeof g.className == "string"
          ? (v = o2(S.registered, w, g.className))
          : g.className != null && (v = g.className + " ");
        var E = Qp(f.concat(w), S.registered, x);
        (v += S.key + "-" + E.name), s !== void 0 && (v += " " + s);
        var T = u && a === void 0 ? wg(h) : l,
          O = {};
        for (var R in g) (u && R === "as") || (T(R) && (O[R] = g[R]));
        return (
          (O.className = v),
          (O.ref = y),
          P.createElement(
            P.Fragment,
            null,
            P.createElement(h2, {
              cache: S,
              serialized: E,
              isStringTag: typeof h == "string",
            }),
            P.createElement(h, O)
          )
        );
      });
      return (
        (p.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (p.defaultProps = t.defaultProps),
        (p.__emotion_real = p),
        (p.__emotion_base = o),
        (p.__emotion_styles = f),
        (p.__emotion_forwardProp = a),
        Object.defineProperty(p, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (p.withComponent = function (g, S) {
          return e(g, ee({}, n, S, { shouldForwardProp: xg(p, S, !0) })).apply(
            void 0,
            f
          );
        }),
        p
      );
    };
  };
const g2 = m2;
var y2 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  cd = g2.bind();
y2.forEach(function (e) {
  cd[e] = cd(e);
});
const v2 = cd;
/**
 * @mui/styled-engine v5.11.16
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function S2(e, t) {
  return v2(e, t);
}
const w2 = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function vi(e, t) {
  return t ? gn(e, t, { clone: !1 }) : e;
}
const Jp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Cg = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Jp[e]}px)`,
  };
function Tn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Cg;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Cg;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Jp).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function x2(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function C2(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Xl(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Ua(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Xl(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function le(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = Xl(l, r) || {};
      return Tn(s, a, (f) => {
        let d = Ua(u, o, f);
        return (
          f === d &&
            typeof f == "string" &&
            (d = Ua(u, o, `${t}${f === "default" ? "" : yn(f)}`, f)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function ql(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? vi(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function P2(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const E2 = { m: "margin", p: "padding" },
  k2 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Pg = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  T2 = P2((e) => {
    if (e.length > 2)
      if (Pg[e]) e = Pg[e];
      else return [e];
    const [t, n] = e.split(""),
      r = E2[t],
      o = k2[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Zp = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  eh = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Zp, ...eh];
function ps(e, t, n, r) {
  var o;
  const i = (o = Xl(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == "string" ? s : i[s])
    : typeof i == "function"
    ? i
    : () => {};
}
function sS(e) {
  return ps(e, "spacing", 8);
}
function hs(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function b2(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = hs(t, n)), r), {});
}
function A2(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = T2(n),
    i = b2(o, r),
    s = e[n];
  return Tn(e, s, i);
}
function aS(e, t) {
  const n = sS(e.theme);
  return Object.keys(e)
    .map((r) => A2(e, t, r, n))
    .reduce(vi, {});
}
function Te(e) {
  return aS(e, Zp);
}
Te.propTypes = {};
Te.filterProps = Zp;
function be(e) {
  return aS(e, eh);
}
be.propTypes = {};
be.filterProps = eh;
function tn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const O2 = le({ prop: "border", themeKey: "borders", transform: tn }),
  R2 = le({ prop: "borderTop", themeKey: "borders", transform: tn }),
  L2 = le({ prop: "borderRight", themeKey: "borders", transform: tn }),
  _2 = le({ prop: "borderBottom", themeKey: "borders", transform: tn }),
  M2 = le({ prop: "borderLeft", themeKey: "borders", transform: tn }),
  $2 = le({ prop: "borderColor", themeKey: "palette" }),
  D2 = le({ prop: "borderTopColor", themeKey: "palette" }),
  j2 = le({ prop: "borderRightColor", themeKey: "palette" }),
  N2 = le({ prop: "borderBottomColor", themeKey: "palette" }),
  I2 = le({ prop: "borderLeftColor", themeKey: "palette" }),
  Jl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = ps(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: hs(t, r) });
      return Tn(e, e.borderRadius, n);
    }
    return null;
  };
Jl.propTypes = {};
Jl.filterProps = ["borderRadius"];
ql(O2, R2, L2, _2, M2, $2, D2, j2, N2, I2, Jl);
const Zl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ps(e.theme, "spacing", 8),
      n = (r) => ({ gap: hs(t, r) });
    return Tn(e, e.gap, n);
  }
  return null;
};
Zl.propTypes = {};
Zl.filterProps = ["gap"];
const eu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ps(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: hs(t, r) });
    return Tn(e, e.columnGap, n);
  }
  return null;
};
eu.propTypes = {};
eu.filterProps = ["columnGap"];
const tu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ps(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: hs(t, r) });
    return Tn(e, e.rowGap, n);
  }
  return null;
};
tu.propTypes = {};
tu.filterProps = ["rowGap"];
const F2 = le({ prop: "gridColumn" }),
  V2 = le({ prop: "gridRow" }),
  B2 = le({ prop: "gridAutoFlow" }),
  z2 = le({ prop: "gridAutoColumns" }),
  U2 = le({ prop: "gridAutoRows" }),
  W2 = le({ prop: "gridTemplateColumns" }),
  H2 = le({ prop: "gridTemplateRows" }),
  K2 = le({ prop: "gridTemplateAreas" }),
  G2 = le({ prop: "gridArea" });
ql(Zl, eu, tu, F2, V2, B2, z2, U2, W2, H2, K2, G2);
function yo(e, t) {
  return t === "grey" ? t : e;
}
const Y2 = le({ prop: "color", themeKey: "palette", transform: yo }),
  Q2 = le({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: yo,
  }),
  X2 = le({ prop: "backgroundColor", themeKey: "palette", transform: yo });
ql(Y2, Q2, X2);
function wt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const q2 = le({ prop: "width", transform: wt }),
  th = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o, i;
        return {
          maxWidth:
            ((r = e.theme) == null ||
            (o = r.breakpoints) == null ||
            (i = o.values) == null
              ? void 0
              : i[n]) ||
            Jp[n] ||
            wt(n),
        };
      };
      return Tn(e, e.maxWidth, t);
    }
    return null;
  };
th.filterProps = ["maxWidth"];
const J2 = le({ prop: "minWidth", transform: wt }),
  Z2 = le({ prop: "height", transform: wt }),
  eT = le({ prop: "maxHeight", transform: wt }),
  tT = le({ prop: "minHeight", transform: wt });
le({ prop: "size", cssProperty: "width", transform: wt });
le({ prop: "size", cssProperty: "height", transform: wt });
const nT = le({ prop: "boxSizing" });
ql(q2, th, J2, Z2, eT, tT, nT);
const rT = {
    border: { themeKey: "borders", transform: tn },
    borderTop: { themeKey: "borders", transform: tn },
    borderRight: { themeKey: "borders", transform: tn },
    borderBottom: { themeKey: "borders", transform: tn },
    borderLeft: { themeKey: "borders", transform: tn },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Jl },
    color: { themeKey: "palette", transform: yo },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: yo,
    },
    backgroundColor: { themeKey: "palette", transform: yo },
    p: { style: be },
    pt: { style: be },
    pr: { style: be },
    pb: { style: be },
    pl: { style: be },
    px: { style: be },
    py: { style: be },
    padding: { style: be },
    paddingTop: { style: be },
    paddingRight: { style: be },
    paddingBottom: { style: be },
    paddingLeft: { style: be },
    paddingX: { style: be },
    paddingY: { style: be },
    paddingInline: { style: be },
    paddingInlineStart: { style: be },
    paddingInlineEnd: { style: be },
    paddingBlock: { style: be },
    paddingBlockStart: { style: be },
    paddingBlockEnd: { style: be },
    m: { style: Te },
    mt: { style: Te },
    mr: { style: Te },
    mb: { style: Te },
    ml: { style: Te },
    mx: { style: Te },
    my: { style: Te },
    margin: { style: Te },
    marginTop: { style: Te },
    marginRight: { style: Te },
    marginBottom: { style: Te },
    marginLeft: { style: Te },
    marginX: { style: Te },
    marginY: { style: Te },
    marginInline: { style: Te },
    marginInlineStart: { style: Te },
    marginInlineEnd: { style: Te },
    marginBlock: { style: Te },
    marginBlockStart: { style: Te },
    marginBlockEnd: { style: Te },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Zl },
    rowGap: { style: tu },
    columnGap: { style: eu },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: wt },
    maxWidth: { style: th },
    minWidth: { transform: wt },
    height: { transform: wt },
    maxHeight: { transform: wt },
    minHeight: { transform: wt },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  nh = rT;
function oT(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function iT(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function sT() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: f } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const d = Xl(o, u) || {};
    return f
      ? f(s)
      : Tn(s, r, (p) => {
          let g = Ua(d, c, p);
          return (
            p === g &&
              typeof p == "string" &&
              (g = Ua(d, c, `${n}${p === "default" ? "" : yn(p)}`, p)),
            l === !1 ? g : { [l]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : nh;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = x2(i.breakpoints),
        f = Object.keys(c);
      let d = c;
      return (
        Object.keys(u).forEach((m) => {
          const p = iT(u[m], i);
          if (p != null)
            if (typeof p == "object")
              if (s[m]) d = vi(d, e(m, p, i, s));
              else {
                const g = Tn({ theme: i }, p, (S) => ({ [m]: S }));
                oT(g, p) ? (d[m] = t({ sx: p, theme: i })) : (d = vi(d, g));
              }
            else d = vi(d, e(m, p, i, s));
        }),
        C2(f, d)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const lS = sT();
lS.filterProps = ["sx"];
const rh = lS,
  aT = ["values", "unit", "step"],
  lT = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => ee({}, n, { [r.key]: r.val }), {})
    );
  };
function uT(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = Gt(e, aT),
    i = lT(t),
    s = Object.keys(i);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function l(d) {
    return `@media (max-width:${
      (typeof t[d] == "number" ? t[d] : d) - r / 100
    }${n})`;
  }
  function u(d, m) {
    const p = s.indexOf(m);
    return `@media (min-width:${
      typeof t[d] == "number" ? t[d] : d
    }${n}) and (max-width:${
      (p !== -1 && typeof t[s[p]] == "number" ? t[s[p]] : m) - r / 100
    }${n})`;
  }
  function c(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const m = s.indexOf(d);
    return m === 0
      ? a(s[1])
      : m === s.length - 1
      ? l(s[m])
      : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return ee(
    {
      keys: s,
      values: i,
      up: a,
      down: l,
      between: u,
      only: c,
      not: f,
      unit: n,
    },
    o
  );
}
const cT = { borderRadius: 4 },
  fT = cT;
function dT(e = 8) {
  if (e.mui) return e;
  const t = sS({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
const pT = ["breakpoints", "palette", "spacing", "shape"];
function oh(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = Gt(e, pT),
    a = uT(n),
    l = dT(o);
  let u = gn(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: ee({ mode: "light" }, r),
      spacing: l,
      shape: ee({}, fT, i),
    },
    s
  );
  return (
    (u = t.reduce((c, f) => gn(c, f), u)),
    (u.unstable_sxConfig = ee(
      {},
      nh,
      s == null ? void 0 : s.unstable_sxConfig
    )),
    (u.unstable_sx = function (f) {
      return rh({ sx: f, theme: this });
    }),
    u
  );
}
const hT = P.createContext(null),
  uS = hT;
function cS() {
  return P.useContext(uS);
}
const mT = typeof Symbol == "function" && Symbol.for,
  gT = mT ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function yT(e, t) {
  return typeof t == "function" ? t(e) : ee({}, e, t);
}
function vT(e) {
  const { children: t, theme: n } = e,
    r = cS(),
    o = P.useMemo(() => {
      const i = r === null ? n : yT(r, n);
      return i != null && (i[gT] = r !== null), i;
    }, [n, r]);
  return W(uS.Provider, { value: o, children: t });
}
function ST(e) {
  return Object.keys(e).length === 0;
}
function wT(e = null) {
  const t = cS();
  return !t || ST(t) ? e : t;
}
const xT = oh();
function fS(e = xT) {
  return wT(e);
}
const CT = ["variant"];
function Eg(e) {
  return e.length === 0;
}
function dS(e) {
  const { variant: t } = e,
    n = Gt(e, CT);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += Eg(r) ? e[o] : yn(e[o]))
          : (r += `${Eg(r) ? o : yn(o)}${yn(e[o].toString())}`);
      }),
    r
  );
}
const PT = [
    "name",
    "slot",
    "skipVariantsResolver",
    "skipSx",
    "overridesResolver",
  ],
  ET = ["theme"],
  kT = ["theme"];
function Jo(e) {
  return Object.keys(e).length === 0;
}
function TT(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const bT = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  AT = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const i = dS(o.props);
        r[i] = o.style;
      }),
      r
    );
  },
  OT = (e, t, n, r) => {
    var o, i;
    const { ownerState: s = {} } = e,
      a = [],
      l =
        n == null || (o = n.components) == null || (i = o[r]) == null
          ? void 0
          : i.variants;
    return (
      l &&
        l.forEach((u) => {
          let c = !0;
          Object.keys(u.props).forEach((f) => {
            s[f] !== u.props[f] && e[f] !== u.props[f] && (c = !1);
          }),
            c && a.push(t[dS(u.props)]);
        }),
      a
    );
  };
function aa(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const RT = oh();
function LT(e = {}) {
  const {
      defaultTheme: t = RT,
      rootShouldForwardProp: n = aa,
      slotShouldForwardProp: r = aa,
    } = e,
    o = (i) => {
      const s = Jo(i.theme) ? t : i.theme;
      return rh(ee({}, i, { theme: s }));
    };
  return (
    (o.__mui_systemSx = !0),
    (i, s = {}) => {
      w2(i, (v) => v.filter((w) => !(w != null && w.__mui_systemSx)));
      const {
          name: a,
          slot: l,
          skipVariantsResolver: u,
          skipSx: c,
          overridesResolver: f,
        } = s,
        d = Gt(s, PT),
        m = u !== void 0 ? u : (l && l !== "Root") || !1,
        p = c || !1;
      let g,
        S = aa;
      l === "Root" ? (S = n) : l ? (S = r) : TT(i) && (S = void 0);
      const y = S2(i, ee({ shouldForwardProp: S, label: g }, d)),
        h = (v, ...w) => {
          const x = w
            ? w.map((O) =>
                typeof O == "function" && O.__emotion_real !== O
                  ? (R) => {
                      let { theme: H } = R,
                        te = Gt(R, ET);
                      return O(ee({ theme: Jo(H) ? t : H }, te));
                    }
                  : O
              )
            : [];
          let b = v;
          a &&
            f &&
            x.push((O) => {
              const R = Jo(O.theme) ? t : O.theme,
                H = bT(a, R);
              if (H) {
                const te = {};
                return (
                  Object.entries(H).forEach(([de, X]) => {
                    te[de] =
                      typeof X == "function" ? X(ee({}, O, { theme: R })) : X;
                  }),
                  f(O, te)
                );
              }
              return null;
            }),
            a &&
              !m &&
              x.push((O) => {
                const R = Jo(O.theme) ? t : O.theme;
                return OT(O, AT(a, R), R, a);
              }),
            p || x.push(o);
          const E = x.length - w.length;
          if (Array.isArray(v) && E > 0) {
            const O = new Array(E).fill("");
            (b = [...v, ...O]), (b.raw = [...v.raw, ...O]);
          } else
            typeof v == "function" &&
              v.__emotion_real !== v &&
              (b = (O) => {
                let { theme: R } = O,
                  H = Gt(O, kT);
                return v(ee({ theme: Jo(R) ? t : R }, H));
              });
          return y(b, ...x);
        };
      return y.withConfig && (h.withConfig = y.withConfig), h;
    }
  );
}
function _T(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : V1(t.components[n].defaultProps, r);
}
function MT({ props: e, name: t, defaultTheme: n }) {
  const r = fS(n);
  return _T({ theme: r, name: t, props: e });
}
function ih(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function $T(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Lr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Lr($T(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Ao(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(Ao(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function nu(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function DT(e) {
  e = Lr(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), nu({ type: a, values: l })
  );
}
function kg(e) {
  e = Lr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Lr(DT(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function jT(e, t) {
  const n = kg(e),
    r = kg(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function i4(e, t) {
  return (
    (e = Lr(e)),
    (t = ih(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    nu(e)
  );
}
function NT(e, t) {
  if (((e = Lr(e)), (t = ih(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return nu(e);
}
function IT(e, t) {
  if (((e = Lr(e)), (t = ih(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return nu(e);
}
const FT = {};
function VT(e) {
  const t = fS();
  return W(Xp.Provider, {
    value: typeof t == "object" ? t : FT,
    children: e.children,
  });
}
function BT(e) {
  const { children: t, theme: n } = e;
  return W(vT, { theme: n, children: W(VT, { children: t }) });
}
function zT(e, t) {
  return ee(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const UT = { black: "#000", white: "#fff" },
  Qi = UT,
  WT = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  HT = WT,
  KT = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Br = KT,
  GT = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  zr = GT,
  YT = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Zo = YT,
  QT = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Ur = QT,
  XT = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Wr = XT,
  qT = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Hr = qT,
  JT = ["mode", "contrastThreshold", "tonalOffset"],
  Tg = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Qi.white, default: Qi.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Yu = {
    text: {
      primary: Qi.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Qi.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function bg(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = IT(e.main, o))
      : t === "dark" && (e.dark = NT(e.main, i)));
}
function ZT(e = "light") {
  return e === "dark"
    ? { main: Ur[200], light: Ur[50], dark: Ur[400] }
    : { main: Ur[700], light: Ur[400], dark: Ur[800] };
}
function eb(e = "light") {
  return e === "dark"
    ? { main: Br[200], light: Br[50], dark: Br[400] }
    : { main: Br[500], light: Br[300], dark: Br[700] };
}
function tb(e = "light") {
  return e === "dark"
    ? { main: zr[500], light: zr[300], dark: zr[700] }
    : { main: zr[700], light: zr[400], dark: zr[800] };
}
function nb(e = "light") {
  return e === "dark"
    ? { main: Wr[400], light: Wr[300], dark: Wr[700] }
    : { main: Wr[700], light: Wr[500], dark: Wr[900] };
}
function rb(e = "light") {
  return e === "dark"
    ? { main: Hr[400], light: Hr[300], dark: Hr[700] }
    : { main: Hr[800], light: Hr[500], dark: Hr[900] };
}
function ob(e = "light") {
  return e === "dark"
    ? { main: Zo[400], light: Zo[300], dark: Zo[700] }
    : { main: "#ed6c02", light: Zo[500], dark: Zo[900] };
}
function ib(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = Gt(e, JT),
    i = e.primary || ZT(t),
    s = e.secondary || eb(t),
    a = e.error || tb(t),
    l = e.info || nb(t),
    u = e.success || rb(t),
    c = e.warning || ob(t);
  function f(g) {
    return jT(g, Yu.text.primary) >= n ? Yu.text.primary : Tg.text.primary;
  }
  const d = ({
      color: g,
      name: S,
      mainShade: y = 500,
      lightShade: h = 300,
      darkShade: v = 700,
    }) => {
      if (
        ((g = ee({}, g)),
        !g.main && g[y] && (g.main = g[y]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(Ao(11, S ? ` (${S})` : "", y));
      if (typeof g.main != "string")
        throw new Error(Ao(12, S ? ` (${S})` : "", JSON.stringify(g.main)));
      return (
        bg(g, "light", h, r),
        bg(g, "dark", v, r),
        g.contrastText || (g.contrastText = f(g.main)),
        g
      );
    },
    m = { dark: Yu, light: Tg };
  return gn(
    ee(
      {
        common: ee({}, Qi),
        mode: t,
        primary: d({ color: i, name: "primary" }),
        secondary: d({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: d({ color: a, name: "error" }),
        warning: d({ color: c, name: "warning" }),
        info: d({ color: l, name: "info" }),
        success: d({ color: u, name: "success" }),
        grey: HT,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: d,
        tonalOffset: r,
      },
      m[t]
    ),
    o
  );
}
const sb = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function ab(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ag = { textTransform: "uppercase" },
  Og = '"Roboto", "Helvetica", "Arial", sans-serif';
function lb(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Og,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: f,
    } = n,
    d = Gt(n, sb),
    m = o / 14,
    p = f || ((y) => `${(y / u) * m}rem`),
    g = (y, h, v, w, x) =>
      ee(
        { fontFamily: r, fontWeight: y, fontSize: p(h), lineHeight: v },
        r === Og ? { letterSpacing: `${ab(w / h)}em` } : {},
        x,
        c
      ),
    S = {
      h1: g(i, 96, 1.167, -1.5),
      h2: g(i, 60, 1.2, -0.5),
      h3: g(s, 48, 1.167, 0),
      h4: g(s, 34, 1.235, 0.25),
      h5: g(s, 24, 1.334, 0),
      h6: g(a, 20, 1.6, 0.15),
      subtitle1: g(s, 16, 1.75, 0.15),
      subtitle2: g(a, 14, 1.57, 0.1),
      body1: g(s, 16, 1.5, 0.15),
      body2: g(s, 14, 1.43, 0.15),
      button: g(a, 14, 1.75, 0.4, Ag),
      caption: g(s, 12, 1.66, 0.4),
      overline: g(s, 12, 2.66, 1, Ag),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return gn(
    ee(
      {
        htmlFontSize: u,
        pxToRem: p,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      S
    ),
    d,
    { clone: !1 }
  );
}
const ub = 0.2,
  cb = 0.14,
  fb = 0.12;
function ye(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ub})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${cb})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${fb})`,
  ].join(",");
}
const db = [
    "none",
    ye(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    ye(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    ye(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    ye(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    ye(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    ye(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    ye(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    ye(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    ye(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    ye(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    ye(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    ye(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    ye(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    ye(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    ye(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    ye(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    ye(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    ye(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    ye(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    ye(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    ye(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    ye(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    ye(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    ye(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  pb = db,
  hb = ["duration", "easing", "delay"],
  mb = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  gb = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Rg(e) {
  return `${Math.round(e)}ms`;
}
function yb(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function vb(e) {
  const t = ee({}, mb, e.easing),
    n = ee({}, gb, e.duration);
  return ee(
    {
      getAutoHeightDuration: yb,
      create: (o = ["all"], i = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          Gt(i, hb),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : Rg(s)} ${a} ${
                  typeof l == "string" ? l : Rg(l)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const Sb = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  wb = Sb,
  xb = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function pS(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = Gt(e, xb);
  if (e.vars) throw new Error(Ao(18));
  const a = ib(r),
    l = oh(e);
  let u = gn(l, {
    mixins: zT(l.breakpoints, n),
    palette: a,
    shadows: pb.slice(),
    typography: lb(a, i),
    transitions: vb(o),
    zIndex: ee({}, wb),
  });
  return (
    (u = gn(u, s)),
    (u = t.reduce((c, f) => gn(c, f), u)),
    (u.unstable_sxConfig = ee(
      {},
      nh,
      s == null ? void 0 : s.unstable_sxConfig
    )),
    (u.unstable_sx = function (f) {
      return rh({ sx: f, theme: this });
    }),
    u
  );
}
const Cb = pS(),
  hS = Cb;
function Pb({ props: e, name: t }) {
  return MT({ props: e, name: t, defaultTheme: hS });
}
const Eb = (e) => aa(e) && e !== "classes",
  kb = LT({ defaultTheme: hS, rootShouldForwardProp: Eb }),
  sh = kb;
function Tb(e) {
  return B1("MuiCircularProgress", e);
}
pk("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const bb = [
  "className",
  "color",
  "disableShrink",
  "size",
  "style",
  "thickness",
  "value",
  "variant",
];
let ru = (e) => e,
  Lg,
  _g,
  Mg,
  $g;
const $n = 44,
  Ab = iS(
    Lg ||
      (Lg = ru`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
  ),
  Ob = iS(
    _g ||
      (_g = ru`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)
  ),
  Rb = (e) => {
    const { classes: t, variant: n, color: r, disableShrink: o } = e,
      i = {
        root: ["root", n, `color${yn(r)}`],
        svg: ["svg"],
        circle: ["circle", `circle${yn(n)}`, o && "circleDisableShrink"],
      };
    return lk(i, Tb, t);
  },
  Lb = sh("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], t[`color${yn(n.color)}`]];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      ee(
        { display: "inline-block" },
        e.variant === "determinate" && {
          transition: t.transitions.create("transform"),
        },
        e.color !== "inherit" && { color: (t.vars || t).palette[e.color].main }
      ),
    ({ ownerState: e }) =>
      e.variant === "indeterminate" &&
      qp(
        Mg ||
          (Mg = ru`
      animation: ${0} 1.4s linear infinite;
    `),
        Ab
      )
  ),
  _b = sh("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, t) => t.svg,
  })({ display: "block" }),
  Mb = sh("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.circle,
        t[`circle${yn(n.variant)}`],
        n.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      ee(
        { stroke: "currentColor" },
        e.variant === "determinate" && {
          transition: t.transitions.create("stroke-dashoffset"),
        },
        e.variant === "indeterminate" && {
          strokeDasharray: "80px, 200px",
          strokeDashoffset: 0,
        }
      ),
    ({ ownerState: e }) =>
      e.variant === "indeterminate" &&
      !e.disableShrink &&
      qp(
        $g ||
          ($g = ru`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
        Ob
      )
  ),
  $b = P.forwardRef(function (t, n) {
    const r = Pb({ props: t, name: "MuiCircularProgress" }),
      {
        className: o,
        color: i = "primary",
        disableShrink: s = !1,
        size: a = 40,
        style: l,
        thickness: u = 3.6,
        value: c = 0,
        variant: f = "indeterminate",
      } = r,
      d = Gt(r, bb),
      m = ee({}, r, {
        color: i,
        disableShrink: s,
        size: a,
        thickness: u,
        value: c,
        variant: f,
      }),
      p = Rb(m),
      g = {},
      S = {},
      y = {};
    if (f === "determinate") {
      const h = 2 * Math.PI * (($n - u) / 2);
      (g.strokeDasharray = h.toFixed(3)),
        (y["aria-valuenow"] = Math.round(c)),
        (g.strokeDashoffset = `${(((100 - c) / 100) * h).toFixed(3)}px`),
        (S.transform = "rotate(-90deg)");
    }
    return W(
      Lb,
      ee(
        {
          className: ok(p.root, o),
          style: ee({ width: a, height: a }, S, l),
          ownerState: m,
          ref: n,
          role: "progressbar",
        },
        y,
        d,
        {
          children: W(_b, {
            className: p.svg,
            ownerState: m,
            viewBox: `${$n / 2} ${$n / 2} ${$n} ${$n}`,
            children: W(Mb, {
              className: p.circle,
              style: g,
              ownerState: m,
              cx: $n,
              cy: $n,
              r: ($n - u) / 2,
              fill: "none",
              strokeWidth: u,
            }),
          }),
        }
      )
    );
  }),
  Db = $b,
  mS = P.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  ou = P.createContext({}),
  ah = P.createContext(null),
  iu = typeof document < "u",
  Dg = iu ? P.useLayoutEffect : P.useEffect,
  gS = P.createContext({ strict: !1 });
function jb(e, t, n, r) {
  const { visualElement: o } = P.useContext(ou),
    i = P.useContext(gS),
    s = P.useContext(ah),
    a = P.useContext(mS).reducedMotion,
    l = P.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  return (
    P.useInsertionEffect(() => {
      u && u.update(n, s);
    }),
    Dg(() => {
      u && u.render();
    }),
    P.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? Dg : P.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function io(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Nb(e, t, n) {
  return P.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : io(n) && (n.current = r));
    },
    [t]
  );
}
function Xi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function su(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const lh = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  uh = ["initial", ...lh];
function au(e) {
  return su(e.animate) || uh.some((t) => Xi(e[t]));
}
function yS(e) {
  return !!(au(e) || e.variants);
}
function Ib(e, t) {
  if (au(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Xi(n) ? n : void 0,
      animate: Xi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Fb(e) {
  const { initial: t, animate: n } = Ib(e, P.useContext(ou));
  return P.useMemo(() => ({ initial: t, animate: n }), [jg(t), jg(n)]);
}
function jg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ng = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  qi = {};
for (const e in Ng) qi[e] = { isEnabled: (t) => Ng[e].some((n) => !!t[n]) };
function Vb(e) {
  for (const t in e) qi[t] = { ...qi[t], ...e[t] };
}
function vS(e) {
  const t = P.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Si = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let Bb = 1;
function zb() {
  return vS(() => {
    if (Si.hasEverUpdated) return Bb++;
  });
}
const SS = P.createContext({}),
  wS = P.createContext({}),
  Ub = Symbol.for("motionComponentSymbol");
function Wb({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && Vb(e);
  function i(a, l) {
    let u;
    const c = { ...P.useContext(mS), ...a, layoutId: Hb(a) },
      { isStatic: f } = c,
      d = Fb(a),
      m = f ? void 0 : zb(),
      p = r(a, f);
    if (!f && iu) {
      d.visualElement = jb(o, p, c, t);
      const g = P.useContext(wS),
        S = P.useContext(gS).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, S, e, m, g));
    }
    return P.createElement(
      ou.Provider,
      { value: d },
      u && d.visualElement
        ? P.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(o, a, m, Nb(p, d.visualElement, l), p, f, d.visualElement)
    );
  }
  const s = P.forwardRef(i);
  return (s[Ub] = o), s;
}
function Hb({ layoutId: e }) {
  const t = P.useContext(SS).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Kb(e) {
  function t(r, o = {}) {
    return Wb(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const Gb = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function ch(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Gb.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Wa = {};
function Yb(e) {
  Object.assign(Wa, e);
}
const ms = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Ir = new Set(ms);
function xS(e, { layout: t, layoutId: n }) {
  return (
    Ir.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Wa[e] || e === "opacity"))
  );
}
const yt = (e) => !!(e && e.getVelocity),
  Qb = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Xb = ms.length;
function qb(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o
) {
  let i = "";
  for (let s = 0; s < Xb; s++) {
    const a = ms[s];
    if (e[a] !== void 0) {
      const l = Qb[a] || a;
      i += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const CS = (e) => (t) => typeof t == "string" && t.startsWith(e),
  PS = CS("--"),
  fd = CS("var(--"),
  Jb =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  Zb = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  _r = (e, t, n) => Math.min(Math.max(n, e), t),
  Fr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  wi = { ...Fr, transform: (e) => _r(0, 1, e) },
  Bs = { ...Fr, default: 1 },
  xi = (e) => Math.round(e * 1e5) / 1e5,
  lu = /(-)?([\d]*\.?[\d])+/g,
  ES =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  eA =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function gs(e) {
  return typeof e == "string";
}
const ys = (e) => ({
    test: (t) => gs(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  jn = ys("deg"),
  ln = ys("%"),
  F = ys("px"),
  tA = ys("vh"),
  nA = ys("vw"),
  Ig = {
    ...ln,
    parse: (e) => ln.parse(e) / 100,
    transform: (e) => ln.transform(e * 100),
  },
  Fg = { ...Fr, transform: Math.round },
  kS = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    radius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    size: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    rotate: jn,
    rotateX: jn,
    rotateY: jn,
    rotateZ: jn,
    scale: Bs,
    scaleX: Bs,
    scaleY: Bs,
    scaleZ: Bs,
    skew: jn,
    skewX: jn,
    skewY: jn,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: wi,
    originX: Ig,
    originY: Ig,
    originZ: F,
    zIndex: Fg,
    fillOpacity: wi,
    strokeOpacity: wi,
    numOctaves: Fg,
  };
function fh(e, t, n, r) {
  const { style: o, vars: i, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (PS(f)) {
      i[f] = d;
      continue;
    }
    const m = kS[f],
      p = Zb(d, m);
    if (Ir.has(f)) {
      if (((l = !0), (s[f] = p), !c)) continue;
      d !== (m.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (a[f] = p)) : (o[f] = p);
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = qb(e.transform, n, c, r))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = a;
    o.transformOrigin = `${f} ${d} ${m}`;
  }
}
const dh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function TS(e, t, n) {
  for (const r in t) !yt(t[r]) && !xS(r, n) && (e[r] = t[r]);
}
function rA({ transformTemplate: e }, t, n) {
  return P.useMemo(() => {
    const r = dh();
    return (
      fh(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function oA(e, t, n) {
  const r = e.style || {},
    o = {};
  return (
    TS(o, r, e),
    Object.assign(o, rA(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function iA(e, t, n) {
  const r = {},
    o = oA(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const sA = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function Ha(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    sA.has(e)
  );
}
let bS = (e) => !Ha(e);
function aA(e) {
  e && (bS = (t) => (t.startsWith("on") ? !Ha(t) : e(t)));
}
try {
  aA(require("@emotion/is-prop-valid").default);
} catch {}
function lA(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((bS(o) ||
        (n === !0 && Ha(o)) ||
        (!t && !Ha(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function Vg(e, t, n) {
  return typeof e == "string" ? e : F.transform(t + n * e);
}
function uA(e, t, n) {
  const r = Vg(t, e.x, e.width),
    o = Vg(n, e.y, e.height);
  return `${r} ${o}`;
}
const cA = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  fA = { offset: "strokeDashoffset", array: "strokeDasharray" };
function dA(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? cA : fA;
  e[i.offset] = F.transform(-r);
  const s = F.transform(t),
    a = F.transform(n);
  e[i.array] = `${s} ${a}`;
}
function ph(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((fh(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: p, dimensions: g } = e;
  m.transform && (g && (p.transform = m.transform), delete m.transform),
    g &&
      (o !== void 0 || i !== void 0 || p.transform) &&
      (p.transformOrigin = uA(
        g,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && dA(m, s, a, l, !1);
}
const AS = () => ({ ...dh(), attrs: {} }),
  hh = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function pA(e, t, n, r) {
  const o = P.useMemo(() => {
    const i = AS();
    return (
      ph(i, t, { enableHardwareAcceleration: !1 }, hh(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    TS(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function hA(e = !1) {
  return (n, r, o, i, { latestValues: s }, a) => {
    const u = (ch(n) ? pA : iA)(r, s, a, n),
      f = { ...lA(r, typeof n == "string", e), ...u, ref: i },
      { children: d } = r,
      m = P.useMemo(() => (yt(d) ? d.get() : d), [d]);
    return (
      o && (f["data-projection-id"] = o),
      P.createElement(n, { ...f, children: m })
    );
  };
}
const mh = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function OS(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const RS = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function LS(e, t, n, r) {
  OS(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(RS.has(o) ? o : mh(o), t.attrs[o]);
}
function gh(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (yt(n[o]) || (t.style && yt(t.style[o])) || xS(o, e)) && (r[o] = n[o]);
  return r;
}
function _S(e, t) {
  const n = gh(e, t);
  for (const r in e)
    if (yt(e[r]) || yt(t[r])) {
      const o =
        ms.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[o] = e[r];
    }
  return n;
}
function yh(e, t, n, r = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
const Ka = (e) => Array.isArray(e),
  mA = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  gA = (e) => (Ka(e) ? e[e.length - 1] || 0 : e);
function la(e) {
  const t = yt(e) ? e.get() : e;
  return mA(t) ? t.toValue() : t;
}
function yA(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const s = { latestValues: vA(r, o, i, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const MS = (e) => (t, n) => {
  const r = P.useContext(ou),
    o = P.useContext(ah),
    i = () => yA(e, t, r, o);
  return n ? i() : vS(i);
};
function vA(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const d in i) o[d] = la(i[d]);
  let { initial: s, animate: a } = e;
  const l = au(e),
    u = yS(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !su(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        const p = yh(e, m);
        if (!p) return;
        const { transitionEnd: g, transition: S, ...y } = p;
        for (const h in y) {
          let v = y[h];
          if (Array.isArray(v)) {
            const w = c ? v.length - 1 : 0;
            v = v[w];
          }
          v !== null && (o[h] = v);
        }
        for (const h in g) o[h] = g[h];
      }),
    o
  );
}
const SA = {
    useVisualState: MS({
      scrapeMotionValuesFromProps: _S,
      createRenderState: AS,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        ph(
          n,
          r,
          { enableHardwareAcceleration: !1 },
          hh(t.tagName),
          e.transformTemplate
        ),
          LS(t, n);
      },
    }),
  },
  wA = {
    useVisualState: MS({
      scrapeMotionValuesFromProps: gh,
      createRenderState: dh,
    }),
  };
function xA(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(ch(e) ? SA : wA),
    preloadedFeatures: n,
    useRender: hA(t),
    createVisualElement: r,
    Component: e,
  };
}
function hn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const $S = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function uu(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const CA = (e) => (t) => $S(t) && e(t, uu(t));
function vn(e, t, n, r) {
  return hn(e, t, CA(n), r);
}
const PA = (e, t) => (n) => t(e(n)),
  tr = (...e) => e.reduce(PA);
function DS(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Bg = DS("dragHorizontal"),
  zg = DS("dragVertical");
function jS(e) {
  let t = !1;
  if (e === "y") t = zg();
  else if (e === "x") t = Bg();
  else {
    const n = Bg(),
      r = zg();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function NS() {
  const e = jS(!0);
  return e ? (e(), !1) : !0;
}
class pr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function EA(e) {
  let t = [],
    n = [],
    r = 0,
    o = !1,
    i = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const f = c && o,
          d = f ? t : n;
        return (
          u && s.add(l),
          d.indexOf(l) === -1 && (d.push(l), f && o && (r = t.length)),
          l
        );
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        u !== -1 && n.splice(u, 1), s.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(l), s.has(c) && (a.schedule(c), e());
          }
        (o = !1), i && ((i = !1), a.process(l));
      },
    };
  return a;
}
const ze = { delta: 0, timestamp: 0, isProcessing: !1 },
  kA = 40;
let dd = !0,
  Ji = !1;
const cu = ["read", "update", "preRender", "render", "postRender"],
  vo = cu.reduce((e, t) => ((e[t] = EA(() => (Ji = !0))), e), {}),
  TA = (e) => vo[e].process(ze),
  IS = (e) => {
    (Ji = !1),
      (ze.delta = dd ? 1e3 / 60 : Math.max(Math.min(e - ze.timestamp, kA), 1)),
      (ze.timestamp = e),
      (ze.isProcessing = !0),
      cu.forEach(TA),
      (ze.isProcessing = !1),
      Ji && ((dd = !1), requestAnimationFrame(IS));
  },
  bA = () => {
    (Ji = !0), (dd = !0), ze.isProcessing || requestAnimationFrame(IS);
  },
  Ce = cu.reduce((e, t) => {
    const n = vo[t];
    return (e[t] = (r, o = !1, i = !1) => (Ji || bA(), n.schedule(r, o, i))), e;
  }, {});
function bn(e) {
  cu.forEach((t) => vo[t].cancel(e));
}
function Ug(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    o = (i, s) => {
      if (i.type === "touch" || NS()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && Ce.update(() => a[r](i, s));
    };
  return vn(e.current, n, o, { passive: !e.getProps()[r] });
}
class AA extends pr {
  mount() {
    this.unmount = tr(Ug(this.node, !0), Ug(this.node, !1));
  }
  unmount() {}
}
class OA extends pr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = tr(
      hn(this.node.current, "focus", () => this.onFocus()),
      hn(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const FS = (e, t) => (t ? (e === t ? !0 : FS(e, t.parentElement)) : !1),
  je = (e) => e;
function Qu(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, uu(n));
}
class RA extends pr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = je),
      (this.removeEndListeners = je),
      (this.removeAccessibleListeners = je),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          i = vn(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              Ce.update(() => {
                FS(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = vn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = tr(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Qu("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && Ce.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = hn(this.node.current, "keyup", s)),
              Qu("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = hn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Qu("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = hn(this.node.current, "blur", r);
        this.removeAccessibleListeners = tr(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && Ce.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !NS()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Ce.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = vn(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = hn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = tr(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const pd = new WeakMap(),
  Xu = new WeakMap(),
  LA = (e) => {
    const t = pd.get(e.target);
    t && t(e);
  },
  _A = (e) => {
    e.forEach(LA);
  };
function MA({ root: e, ...t }) {
  const n = e || document;
  Xu.has(n) || Xu.set(n, {});
  const r = Xu.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(_A, { root: e, ...t })), r[o];
}
function $A(e, t, n) {
  const r = MA(t);
  return (
    pd.set(e, n),
    r.observe(e),
    () => {
      pd.delete(e), r.unobserve(e);
    }
  );
}
const DA = { some: 0, all: 1 };
class jA extends pr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : DA[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return $A(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(NA(t, n)) && this.startObserver();
  }
  unmount() {}
}
function NA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const IA = {
  inView: { Feature: jA },
  tap: { Feature: RA },
  focus: { Feature: OA },
  hover: { Feature: AA },
};
function VS(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function FA(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function VA(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function fu(e, t, n) {
  const r = e.getProps();
  return yh(r, t, n !== void 0 ? n : r.custom, FA(e), VA(e));
}
const BA = "framerAppearId",
  zA = "data-" + mh(BA);
let UA = je,
  vh = je;
const nr = (e) => e * 1e3,
  Sn = (e) => e / 1e3,
  WA = { current: !1 },
  BS = (e) => Array.isArray(e) && typeof e[0] == "number";
function zS(e) {
  return !!(
    !e ||
    (typeof e == "string" && US[e]) ||
    BS(e) ||
    (Array.isArray(e) && e.every(zS))
  );
}
const ai = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  US = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ai([0, 0.65, 0.55, 1]),
    circOut: ai([0.55, 0, 1, 0.45]),
    backIn: ai([0.31, 0.01, 0.66, -0.59]),
    backOut: ai([0.33, 1.53, 0.69, 0.99]),
  };
function WS(e) {
  if (e) return BS(e) ? ai(e) : Array.isArray(e) ? e.map(WS) : US[e];
}
function HA(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = WS(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const Wg = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  },
  qu = {},
  HS = {};
for (const e in Wg)
  HS[e] = () => (qu[e] === void 0 && (qu[e] = Wg[e]()), qu[e]);
function KA(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const KS = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  GA = 1e-7,
  YA = 12;
function QA(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = KS(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > GA && ++a < YA);
  return s;
}
function vs(e, t, n, r) {
  if (e === t && n === r) return je;
  const o = (i) => QA(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : KS(o(i), t, r));
}
const XA = vs(0.42, 0, 1, 1),
  qA = vs(0, 0, 0.58, 1),
  GS = vs(0.42, 0, 0.58, 1),
  JA = (e) => Array.isArray(e) && typeof e[0] != "number",
  YS = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  QS = (e) => (t) => 1 - e(1 - t),
  XS = (e) => 1 - Math.sin(Math.acos(e)),
  Sh = QS(XS),
  ZA = YS(Sh),
  qS = vs(0.33, 1.53, 0.69, 0.99),
  wh = QS(qS),
  eO = YS(wh),
  tO = (e) =>
    (e *= 2) < 1 ? 0.5 * wh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  nO = {
    linear: je,
    easeIn: XA,
    easeInOut: GS,
    easeOut: qA,
    circIn: XS,
    circInOut: ZA,
    circOut: Sh,
    backIn: wh,
    backInOut: eO,
    backOut: qS,
    anticipate: tO,
  },
  Hg = (e) => {
    if (Array.isArray(e)) {
      vh(e.length === 4);
      const [t, n, r, o] = e;
      return vs(t, n, r, o);
    } else if (typeof e == "string") return nO[e];
    return e;
  },
  xh = (e, t) => (n) =>
    !!(
      (gs(n) && eA.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  JS = (e, t, n) => (r) => {
    if (!gs(r)) return r;
    const [o, i, s, a] = r.match(lu);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  rO = (e) => _r(0, 255, e),
  Ju = { ...Fr, transform: (e) => Math.round(rO(e)) },
  Pr = {
    test: xh("rgb", "red"),
    parse: JS("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ju.transform(e) +
      ", " +
      Ju.transform(t) +
      ", " +
      Ju.transform(n) +
      ", " +
      xi(wi.transform(r)) +
      ")",
  };
function oO(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const hd = { test: xh("#"), parse: oO, transform: Pr.transform },
  so = {
    test: xh("hsl", "hue"),
    parse: JS("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      ln.transform(xi(t)) +
      ", " +
      ln.transform(xi(n)) +
      ", " +
      xi(wi.transform(r)) +
      ")",
  },
  ot = {
    test: (e) => Pr.test(e) || hd.test(e) || so.test(e),
    parse: (e) =>
      Pr.test(e) ? Pr.parse(e) : so.test(e) ? so.parse(e) : hd.parse(e),
    transform: (e) =>
      gs(e) ? e : e.hasOwnProperty("red") ? Pr.transform(e) : so.transform(e),
  },
  xe = (e, t, n) => -n * e + n * t + e;
function Zu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function iO({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = Zu(l, a, e + 1 / 3)), (i = Zu(l, a, e)), (s = Zu(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const ec = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  sO = [hd, Pr, so],
  aO = (e) => sO.find((t) => t.test(e));
function Kg(e) {
  const t = aO(e);
  let n = t.parse(e);
  return t === so && (n = iO(n)), n;
}
const ZS = (e, t) => {
  const n = Kg(e),
    r = Kg(t),
    o = { ...n };
  return (i) => (
    (o.red = ec(n.red, r.red, i)),
    (o.green = ec(n.green, r.green, i)),
    (o.blue = ec(n.blue, r.blue, i)),
    (o.alpha = xe(n.alpha, r.alpha, i)),
    Pr.transform(o)
  );
};
function lO(e) {
  var t, n;
  return (
    isNaN(e) &&
    gs(e) &&
    (((t = e.match(lu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(ES)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const ew = { regex: Jb, countKey: "Vars", token: "${v}", parse: je },
  tw = { regex: ES, countKey: "Colors", token: "${c}", parse: ot.parse },
  nw = { regex: lu, countKey: "Numbers", token: "${n}", parse: Fr.parse };
function tc(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i &&
    ((e["num" + n] = i.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...i.map(o)));
}
function Ga(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && tc(n, ew), tc(n, tw), tc(n, nw), n;
}
function rw(e) {
  return Ga(e).values;
}
function ow(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = Ga(e),
    i = t.length;
  return (s) => {
    let a = o;
    for (let l = 0; l < i; l++)
      l < r
        ? (a = a.replace(ew.token, s[l]))
        : l < r + n
        ? (a = a.replace(tw.token, ot.transform(s[l])))
        : (a = a.replace(nw.token, xi(s[l])));
    return a;
  };
}
const uO = (e) => (typeof e == "number" ? 0 : e);
function cO(e) {
  const t = rw(e);
  return ow(e)(t.map(uO));
}
const ar = {
    test: lO,
    parse: rw,
    createTransformer: ow,
    getAnimatableNone: cO,
  },
  iw = (e, t) => (n) => `${n > 0 ? t : e}`;
function sw(e, t) {
  return typeof e == "number"
    ? (n) => xe(e, t, n)
    : ot.test(e)
    ? ZS(e, t)
    : e.startsWith("var(")
    ? iw(e, t)
    : lw(e, t);
}
const aw = (e, t) => {
    const n = [...e],
      r = n.length,
      o = e.map((i, s) => sw(i, t[s]));
    return (i) => {
      for (let s = 0; s < r; s++) n[s] = o[s](i);
      return n;
    };
  },
  fO = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = sw(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  },
  lw = (e, t) => {
    const n = ar.createTransformer(t),
      r = Ga(e),
      o = Ga(t);
    return r.numVars === o.numVars &&
      r.numColors === o.numColors &&
      r.numNumbers >= o.numNumbers
      ? tr(aw(r.values, o.values), n)
      : iw(e, t);
  },
  Zi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Gg = (e, t) => (n) => xe(e, t, n);
function dO(e) {
  return typeof e == "number"
    ? Gg
    : typeof e == "string"
    ? ot.test(e)
      ? ZS
      : lw
    : Array.isArray(e)
    ? aw
    : typeof e == "object"
    ? fO
    : Gg;
}
function pO(e, t, n) {
  const r = [],
    o = n || dO(e[0]),
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || je : t;
      a = tr(l, a);
    }
    r.push(a);
  }
  return r;
}
function uw(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((vh(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = pO(t, r, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Zi(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => l(_r(e[0], e[i - 1], u)) : l;
}
function hO(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Zi(0, t, r);
    e.push(xe(n, 1, o));
  }
}
function mO(e) {
  const t = [0];
  return hO(t, e.length - 1), t;
}
function gO(e, t) {
  return e.map((n) => n * t);
}
function yO(e, t) {
  return e.map(() => t || GS).splice(0, e.length - 1);
}
function Ya({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = JA(r) ? r.map(Hg) : Hg(r),
    i = { done: !1, value: t[0] },
    s = gO(n && n.length === t.length ? n : mO(t), e),
    a = uw(s, t, { ease: Array.isArray(o) ? o : yO(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
function cw(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const vO = 5;
function fw(e, t, n) {
  const r = Math.max(t - vO, 0);
  return cw(n - e(r), t - r);
}
const nc = 0.001,
  SO = 0.01,
  Yg = 10,
  wO = 0.05,
  xO = 1;
function CO({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o, i;
  UA(e <= nr(Yg));
  let s = 1 - t;
  (s = _r(wO, xO, s)),
    (e = _r(SO, Yg, Sn(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            m = md(u, s),
            p = Math.exp(-f);
          return nc - (d / m) * p;
        }),
        (i = (u) => {
          const f = u * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            p = Math.exp(-f),
            g = md(Math.pow(u, 2), s);
          return ((-o(u) + nc > 0 ? -1 : 1) * ((d - m) * p)) / g;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -nc + c * f;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = EO(o, i, a);
  if (((e = nr(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const PO = 12;
function EO(e, t, n) {
  let r = n;
  for (let o = 1; o < PO; o++) r = r - e(r) / t(r);
  return r;
}
function md(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const kO = ["duration", "bounce"],
  TO = ["stiffness", "damping", "mass"];
function Qg(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function bO(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Qg(e, TO) && Qg(e, kO)) {
    const n = CO(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function dw({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = bO(r),
    m = c ? -Sn(c) : 0,
    p = l / (2 * Math.sqrt(a * u)),
    g = i - o,
    S = Sn(Math.sqrt(a / u)),
    y = Math.abs(g) < 5;
  n || (n = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5);
  let h;
  if (p < 1) {
    const v = md(S, p);
    h = (w) => {
      const x = Math.exp(-p * S * w);
      return (
        i - x * (((m + p * S * g) / v) * Math.sin(v * w) + g * Math.cos(v * w))
      );
    };
  } else if (p === 1) h = (v) => i - Math.exp(-S * v) * (g + (m + S * g) * v);
  else {
    const v = S * Math.sqrt(p * p - 1);
    h = (w) => {
      const x = Math.exp(-p * S * w),
        b = Math.min(v * w, 300);
      return (
        i - (x * ((m + p * S * g) * Math.sinh(b) + v * g * Math.cosh(b))) / v
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (v) => {
      const w = h(v);
      if (d) s.done = v >= f;
      else {
        let x = m;
        v !== 0 && (p < 1 ? (x = fw(h, v, w)) : (x = 0));
        const b = Math.abs(x) <= n,
          E = Math.abs(i - w) <= t;
        s.done = b && E;
      }
      return (s.value = s.done ? i : w), s;
    },
  };
}
function Xg({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    m = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    p = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
        ? a
        : l;
  let g = n * t;
  const S = f + g,
    y = s === void 0 ? S : s(S);
  y !== S && (g = y - f);
  const h = (T) => -g * Math.exp(-T / r),
    v = (T) => y + h(T),
    w = (T) => {
      const O = h(T),
        R = v(T);
      (d.done = Math.abs(O) <= u), (d.value = d.done ? y : R);
    };
  let x, b;
  const E = (T) => {
    m(d.value) &&
      ((x = T),
      (b = dw({
        keyframes: [d.value, p(d.value)],
        velocity: fw(v, T, d.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let O = !1;
        return (
          !b && x === void 0 && ((O = !0), w(T), E(T)),
          x !== void 0 && T > x ? b.next(T - x) : (!O && w(T), d)
        );
      },
    }
  );
}
const AO = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Ce.update(t, !0),
      stop: () => bn(t),
      now: () => (ze.isProcessing ? ze.timestamp : performance.now()),
    };
  },
  qg = 2e4;
function Jg(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < qg; ) (t += n), (r = e.next(t));
  return t >= qg ? 1 / 0 : t;
}
const OO = { decay: Xg, inertia: Xg, tween: Ya, keyframes: Ya, spring: dw };
function Qa({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = AO,
  keyframes: r,
  type: o = "keyframes",
  repeat: i = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let m = 1,
    p = !1,
    g,
    S;
  const y = () => {
    g && g(),
      (S = new Promise((I) => {
        g = I;
      }));
  };
  y();
  let h;
  const v = OO[o] || Ya;
  let w;
  v !== Ya &&
    typeof r[0] != "number" &&
    ((w = uw([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const x = v({ ...d, keyframes: r });
  let b;
  a === "mirror" &&
    (b = v({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let E = "idle",
    T = null,
    O = null,
    R = null;
  x.calculatedDuration === null && i && (x.calculatedDuration = Jg(x));
  const { calculatedDuration: H } = x;
  let te = 1 / 0,
    de = 1 / 0;
  H !== null && ((te = H + s), (de = te * (i + 1) - s));
  let X = 0;
  const q = (I) => {
      if (O === null) return;
      m > 0 && (O = Math.min(O, I)), T !== null ? (X = T) : (X = (I - O) * m);
      const L = X - t,
        $ = L < 0;
      (X = Math.max(L, 0)), E === "finished" && T === null && (X = de);
      let D = X,
        B = x;
      if (i) {
        const pe = X / te;
        let Z = Math.floor(pe),
          Q = pe % 1;
        !Q && pe >= 1 && (Q = 1), Q === 1 && Z--, (Z = Math.min(Z, i + 1));
        const z = !!(Z % 2);
        z &&
          (a === "reverse"
            ? ((Q = 1 - Q), s && (Q -= s / te))
            : a === "mirror" && (B = b));
        let Le = _r(0, 1, Q);
        X > de && (Le = a === "reverse" && z ? 1 : 0), (D = Le * te);
      }
      const C = $ ? { done: !1, value: r[0] } : B.next(D);
      w && (C.value = w(C.value));
      let { done: Y } = C;
      !$ && H !== null && (Y = X >= de);
      const M =
        T === null &&
        (E === "finished" || (E === "running" && Y) || (m < 0 && X <= 0));
      return f && f(C.value), M && _(), C;
    },
    Ve = () => {
      h && h.stop(), (h = void 0);
    },
    ke = () => {
      (E = "idle"), Ve(), y(), (O = R = null);
    },
    _ = () => {
      (E = "finished"), c && c(), Ve(), y();
    },
    N = () => {
      if (p) return;
      h || (h = n(q));
      const I = h.now();
      l && l(),
        T !== null ? (O = I - T) : (!O || E === "finished") && (O = I),
        (R = O),
        (T = null),
        (E = "running"),
        h.start();
    };
  e && N();
  const V = {
    then(I, L) {
      return S.then(I, L);
    },
    get time() {
      return Sn(X);
    },
    set time(I) {
      (I = nr(I)),
        (X = I),
        T !== null || !h || m === 0 ? (T = I) : (O = h.now() - I / m);
    },
    get duration() {
      const I = x.calculatedDuration === null ? Jg(x) : x.calculatedDuration;
      return Sn(I);
    },
    get speed() {
      return m;
    },
    set speed(I) {
      I === m || !h || ((m = I), (V.time = Sn(X)));
    },
    get state() {
      return E;
    },
    play: N,
    pause: () => {
      (E = "paused"), (T = X);
    },
    stop: () => {
      (p = !0), E !== "idle" && ((E = "idle"), u && u(), ke());
    },
    cancel: () => {
      R !== null && q(R), ke();
    },
    complete: () => {
      E = "finished";
    },
    sample: (I) => ((O = 0), q(I)),
  };
  return V;
}
const RO = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  zs = 10,
  LO = 2e4,
  _O = (e, t) => t.type === "spring" || e === "backgroundColor" || !zS(t.ease);
function MO(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (
    !(
      HS.waapi() &&
      RO.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0 &&
      o.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    a,
    l;
  const u = () => {
    l = new Promise((y) => {
      a = y;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: m } = o;
  if (_O(t, o)) {
    const y = Qa({ ...o, repeat: 0, delay: 0 });
    let h = { done: !1, value: c[0] };
    const v = [];
    let w = 0;
    for (; !h.done && w < LO; ) (h = y.sample(w)), v.push(h.value), (w += zs);
    (m = void 0), (c = v), (f = w - zs), (d = "linear");
  }
  const p = HA(e.owner.current, t, c, { ...o, duration: f, ease: d, times: m }),
    g = () => p.cancel(),
    S = () => {
      Ce.update(g), a(), u();
    };
  return (
    (p.onfinish = () => {
      e.set(KA(c, o)), r && r(), S();
    }),
    {
      then(y, h) {
        return l.then(y, h);
      },
      get time() {
        return Sn(p.currentTime || 0);
      },
      set time(y) {
        p.currentTime = nr(y);
      },
      get speed() {
        return p.playbackRate;
      },
      set speed(y) {
        p.playbackRate = y;
      },
      get duration() {
        return Sn(f);
      },
      play: () => {
        s || (p.play(), bn(g));
      },
      pause: () => p.pause(),
      stop: () => {
        if (((s = !0), p.playState === "idle")) return;
        const { currentTime: y } = p;
        if (y) {
          const h = Qa({ ...o, autoplay: !1 });
          e.setWithVelocity(h.sample(y - zs).value, h.sample(y).value, zs);
        }
        S();
      },
      complete: () => p.finish(),
      cancel: S,
    }
  );
}
function $O({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: je,
      pause: je,
      stop: je,
      then: (i) => (i(), Promise.resolve()),
      cancel: je,
      complete: je,
    }
  );
  return t
    ? Qa({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const DO = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  jO = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  NO = { type: "keyframes", duration: 0.8 },
  IO = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  FO = (e, { keyframes: t }) =>
    t.length > 2
      ? NO
      : Ir.has(e)
      ? e.startsWith("scale")
        ? jO(t[1])
        : DO
      : IO,
  gd = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" && ar.test(t) && !t.startsWith("url("))
        ),
  VO = new Set(["brightness", "contrast", "saturate", "opacity"]);
function BO(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(lu) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = VO.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const zO = /([a-z-]*)\(.*?\)/g,
  yd = {
    ...ar,
    getAnimatableNone: (e) => {
      const t = e.match(zO);
      return t ? t.map(BO).join(" ") : e;
    },
  },
  UO = {
    ...kS,
    color: ot,
    backgroundColor: ot,
    outlineColor: ot,
    fill: ot,
    stroke: ot,
    borderColor: ot,
    borderTopColor: ot,
    borderRightColor: ot,
    borderBottomColor: ot,
    borderLeftColor: ot,
    filter: yd,
    WebkitFilter: yd,
  },
  Ch = (e) => UO[e];
function Ph(e, t) {
  let n = Ch(e);
  return (
    n !== yd && (n = ar), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
function WO({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Zg(e) {
  return (
    e === 0 ||
    (typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1)
  );
}
function ey(e) {
  return typeof e == "number" ? 0 : Ph("", e);
}
function pw(e, t) {
  return e[t] || e.default || e;
}
function HO(e, [...t]) {
  for (let n = 0; n < t.length; n++)
    t[n] === null && (t[n] = n === 0 ? e : t[n - 1]);
  return t;
}
function KO(e, t, n, r) {
  const o = gd(t, n);
  let i = r.from !== void 0 ? r.from : e.get();
  return (
    i === "none" && o && typeof n == "string"
      ? (i = Ph(t, n))
      : Zg(i) && typeof n == "string"
      ? (i = ey(n))
      : !Array.isArray(n) && Zg(n) && typeof i == "string" && (n = ey(i)),
    Array.isArray(n) ? HO(i, n) : [i, n]
  );
}
const Eh =
  (e, t, n, r = {}) =>
  (o) => {
    const i = pw(r, e) || {},
      s = i.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - nr(s);
    const l = KO(t, e, n, i),
      u = l[0],
      c = l[l.length - 1],
      f = gd(e, u),
      d = gd(e, c);
    let m = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...i,
      delay: -a,
      onUpdate: (p) => {
        t.set(p), i.onUpdate && i.onUpdate(p);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (
      (WO(i) || (m = { ...m, ...FO(e, m) }),
      m.duration && (m.duration = nr(m.duration)),
      m.repeatDelay && (m.repeatDelay = nr(m.repeatDelay)),
      !f || !d || WA.current || i.type === !1)
    )
      return $O(m);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const p = MO(t, e, m);
      if (p) return p;
    }
    return Qa(m);
  };
function Xa(e) {
  return !!(yt(e) && e.add);
}
const GO = (e) => /^\-?\d*\.?\d+$/.test(e),
  YO = (e) => /^0[^.\s]+$/.test(e);
function kh(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Th(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class bh {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return kh(this.subscriptions, t), () => Th(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const QO = (e) => !isNaN(parseFloat(e));
class XO {
  constructor(t, n = {}) {
    (this.version = "10.12.4"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: i, timestamp: s } = ze;
        this.lastUpdated !== s &&
          ((this.timeDelta = i),
          (this.lastUpdated = s),
          Ce.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => Ce.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = QO(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new bh());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Ce.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? cw(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ro(e, t) {
  return new XO(e, t);
}
const hw = (e) => (t) => t.test(e),
  qO = { test: (e) => e === "auto", parse: (e) => e },
  mw = [Fr, F, ln, jn, nA, tA, qO],
  ei = (e) => mw.find(hw(e)),
  JO = [...mw, ot, ar],
  ZO = (e) => JO.find(hw(e));
function eR(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ro(n));
}
function tR(e, t) {
  const n = fu(e, t);
  let {
    transitionEnd: r = {},
    transition: o = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = gA(i[s]);
    eR(e, s, a);
  }
}
function nR(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = i.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = i[a],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == "string" && (GO(c) || YO(c))
            ? (c = parseFloat(c))
            : !ZO(c) && ar.test(u) && (c = Ph(l, u)),
          e.addValue(l, Ro(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function rR(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function oR(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = rR(o, t);
    if (i !== void 0) r[o] = i;
    else {
      const s = n.getValue(o);
      s && (r[o] = s.get());
    }
  }
  return r;
}
function iR({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function gw(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const f in a) {
    const d = e.getValue(f),
      m = a[f];
    if (!d || m === void 0 || (c && iR(c, f))) continue;
    const p = { delay: n, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const S = e.getProps()[zA];
      S && (p.elapsed = window.HandoffAppearAnimations(S, f, d, Ce));
    }
    d.start(Eh(f, d, m, e.shouldReduceMotion && Ir.has(f) ? { type: !1 } : p));
    const g = d.animation;
    Xa(l) && (l.add(f), g.then(() => l.remove(f))), u.push(g);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && tR(e, s);
      }),
    u
  );
}
function vd(e, t, n = {}) {
  const r = fu(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(gw(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = o;
            return sR(e, t, u + l, c, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [i, s] : [s, i];
    return l().then(() => u());
  } else return Promise.all([i(), s(n.delay)]);
}
function sR(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(aR)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            vd(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function aR(e, t) {
  return e.sortNodePosition(t);
}
function lR(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => vd(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = vd(e, t, n);
  else {
    const o = typeof t == "function" ? fu(e, t, n.custom) : t;
    r = Promise.all(gw(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const uR = [...lh].reverse(),
  cR = lh.length;
function fR(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => lR(e, n, r)));
}
function dR(e) {
  let t = fR(e);
  const n = hR();
  let r = !0;
  const o = (l, u) => {
    const c = fu(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...m } = c;
      l = { ...l, ...m, ...d };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function s(l, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      m = new Set();
    let p = {},
      g = 1 / 0;
    for (let y = 0; y < cR; y++) {
      const h = uR[y],
        v = n[h],
        w = c[h] !== void 0 ? c[h] : f[h],
        x = Xi(w),
        b = h === u ? v.isActive : null;
      b === !1 && (g = y);
      let E = w === f[h] && w !== c[h] && x;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (v.protectedKeys = { ...p }),
        (!v.isActive && b === null) ||
          (!w && !v.prevProp) ||
          su(w) ||
          typeof w == "boolean")
      )
        continue;
      const T = pR(v.prevProp, w);
      let O = T || (h === u && v.isActive && !E && x) || (y > g && x);
      const R = Array.isArray(w) ? w : [w];
      let H = R.reduce(o, {});
      b === !1 && (H = {});
      const { prevResolvedValues: te = {} } = v,
        de = { ...te, ...H },
        X = (q) => {
          (O = !0), m.delete(q), (v.needsAnimating[q] = !0);
        };
      for (const q in de) {
        const Ve = H[q],
          ke = te[q];
        p.hasOwnProperty(q) ||
          (Ve !== ke
            ? Ka(Ve) && Ka(ke)
              ? !VS(Ve, ke) || T
                ? X(q)
                : (v.protectedKeys[q] = !0)
              : Ve !== void 0
              ? X(q)
              : m.add(q)
            : Ve !== void 0 && m.has(q)
            ? X(q)
            : (v.protectedKeys[q] = !0));
      }
      (v.prevProp = w),
        (v.prevResolvedValues = H),
        v.isActive && (p = { ...p, ...H }),
        r && e.blockInitialAnimation && (O = !1),
        O &&
          !E &&
          d.push(
            ...R.map((q) => ({ animation: q, options: { type: h, ...l } }))
          );
    }
    if (m.size) {
      const y = {};
      m.forEach((h) => {
        const v = e.getBaseTarget(h);
        v !== void 0 && (y[h] = v);
      }),
        d.push({ animation: y });
    }
    let S = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (S = !1),
      (r = !1),
      S ? t(d) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((m) => {
        var p;
        return (p = m.animationState) === null || p === void 0
          ? void 0
          : p.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(c, l);
    for (const m in n) n[m].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function pR(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !VS(t, e) : !1;
}
function hr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function hR() {
  return {
    animate: hr(!0),
    whileInView: hr(),
    whileHover: hr(),
    whileTap: hr(),
    whileDrag: hr(),
    whileFocus: hr(),
    exit: hr(),
  };
}
class mR extends pr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = dR(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), su(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let gR = 0;
class yR extends pr {
  constructor() {
    super(...arguments), (this.id = gR++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const vR = { animation: { Feature: mR }, exit: { Feature: yR } },
  ty = (e, t) => Math.abs(e - t);
function SR(e, t) {
  const n = ty(e.x, t.x),
    r = ty(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class yw {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = oc(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = SR(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: m } = ze;
        this.history.push({ ...d, timestamp: m });
        const { onStart: p, onMove: g } = this.handlers;
        c ||
          (p && p(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = rc(c, this.transformPagePoint)),
          Ce.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          m = oc(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : rc(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && f && f(u, m), d && d(u, m);
      }),
      !$S(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const o = uu(t),
      i = rc(o, this.transformPagePoint),
      { point: s } = i,
      { timestamp: a } = ze;
    this.history = [{ ...s, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(t, oc(i, this.history)),
      (this.removeListeners = tr(
        vn(window, "pointermove", this.handlePointerMove),
        vn(window, "pointerup", this.handlePointerUp),
        vn(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), bn(this.updatePoint);
  }
}
function rc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ny(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function oc({ point: e }, t) {
  return {
    point: e,
    delta: ny(e, vw(t)),
    offset: ny(e, wR(t)),
    velocity: xR(t, 0.1),
  };
}
function wR(e) {
  return e[0];
}
function vw(e) {
  return e[e.length - 1];
}
function xR(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = vw(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > nr(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Sn(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function kt(e) {
  return e.max - e.min;
}
function Sd(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function ry(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = xe(t.min, t.max, e.origin)),
    (e.scale = kt(n) / kt(t)),
    (Sd(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = xe(n.min, n.max, e.origin) - e.originPoint),
    (Sd(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ci(e, t, n, r) {
  ry(e.x, t.x, n.x, r ? r.originX : void 0),
    ry(e.y, t.y, n.y, r ? r.originY : void 0);
}
function oy(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + kt(t));
}
function CR(e, t, n) {
  oy(e.x, t.x, n.x), oy(e.y, t.y, n.y);
}
function iy(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + kt(t));
}
function Pi(e, t, n) {
  iy(e.x, t.x, n.x), iy(e.y, t.y, n.y);
}
function PR(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? xe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? xe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function sy(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function ER(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: sy(e.x, n, o), y: sy(e.y, t, r) };
}
function ay(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function kR(e, t) {
  return { x: ay(e.x, t.x), y: ay(e.y, t.y) };
}
function TR(e, t) {
  let n = 0.5;
  const r = kt(e),
    o = kt(t);
  return (
    o > r
      ? (n = Zi(t.min, t.max - r, e.min))
      : r > o && (n = Zi(e.min, e.max - o, t.min)),
    _r(0, 1, n)
  );
}
function bR(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const wd = 0.35;
function AR(e = wd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = wd),
    { x: ly(e, "left", "right"), y: ly(e, "top", "bottom") }
  );
}
function ly(e, t, n) {
  return { min: uy(e, t), max: uy(e, n) };
}
function uy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const cy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ei = () => ({ x: cy(), y: cy() }),
  fy = () => ({ min: 0, max: 0 }),
  _e = () => ({ x: fy(), y: fy() });
function qt(e) {
  return [e("x"), e("y")];
}
function Sw({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function OR({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function RR(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function ic(e) {
  return e === void 0 || e === 1;
}
function xd({ scale: e, scaleX: t, scaleY: n }) {
  return !ic(e) || !ic(t) || !ic(n);
}
function yr(e) {
  return xd(e) || ww(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function ww(e) {
  return dy(e.x) || dy(e.y);
}
function dy(e) {
  return e && e !== "0%";
}
function qa(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function py(e, t, n, r, o) {
  return o !== void 0 && (e = qa(e, o, r)), qa(e, n, r) + t;
}
function Cd(e, t = 0, n = 1, r, o) {
  (e.min = py(e.min, t, n, r, o)), (e.max = py(e.max, t, n, r, o));
}
function xw(e, { x: t, y: n }) {
  Cd(e.x, t.translate, t.scale, t.originPoint),
    Cd(e.y, n.translate, n.scale, n.originPoint);
}
function LR(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        ao(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), xw(e, s)),
      r && yr(i.latestValues) && ao(e, i.latestValues));
  }
  (t.x = hy(t.x)), (t.y = hy(t.y));
}
function hy(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Fn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function my(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = xe(e.min, e.max, i);
  Cd(e, t[n], t[r], s, t.scale);
}
const _R = ["x", "scaleX", "originX"],
  MR = ["y", "scaleY", "originY"];
function ao(e, t) {
  my(e.x, t, _R), my(e.y, t, MR);
}
function Cw(e, t) {
  return Sw(RR(e.getBoundingClientRect(), t));
}
function $R(e, t, n) {
  const r = Cw(e, n),
    { scroll: o } = t;
  return o && (Fn(r.x, o.offset.x), Fn(r.y, o.offset.y)), r;
}
const DR = new WeakMap();
class jR {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = _e()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (l) => {
        this.stopAnimation(), n && this.snapToCursor(uu(l, "page").point);
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = jS(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          qt((p) => {
            let g = this.getAxisMotionValue(p).get() || 0;
            if (ln.test(g)) {
              const { projection: S } = this.visualElement;
              if (S && S.layout) {
                const y = S.layout.layoutBox[p];
                y && (g = kt(y) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[p] = g;
          }),
          d && Ce.update(() => d(l, u), !1, !0);
        const { animationState: m } = this.visualElement;
        m && m.setActive("whileDrag", !0);
      },
      s = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: m,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: p } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = NR(p)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, p),
          this.updateAxis("y", u.point, p),
          this.visualElement.render(),
          m && m(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new yw(
      t,
      { onSessionStart: o, onStart: i, onMove: s, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Ce.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Us(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = PR(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      o = this.constraints;
    t && io(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = ER(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = AR(n)),
      o !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        qt((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = bR(r.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !io(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = $R(r, o.root, this.visualElement.getTransformPagePoint());
    let s = kR(o.layout.layoutBox, i);
    if (n) {
      const a = n(OR(s));
      (this.hasMutatedConstraints = !!a), a && (s = Sw(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = qt((c) => {
        if (!Us(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = o ? 200 : 1e6,
          m = o ? 40 : 1e7,
          p = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(c, p);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Eh(t, r, 0, n));
  }
  stopAnimation() {
    qt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    qt((n) => {
      const { drag: r } = this.getProps();
      if (!Us(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - xe(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!io(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    qt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        o[s] = TR({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      qt((s) => {
        if (!Us(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(xe(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    DR.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = vn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        io(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const s = hn(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (qt((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = wd,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Us(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function NR(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class IR extends pr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = je),
      (this.removeListeners = je),
      (this.controls = new jR(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || je);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const gy = (e) => (t, n) => {
  e && Ce.update(() => e(t, n));
};
class FR extends pr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = je);
  }
  onPointerDown(t) {
    this.session = new yw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: gy(t),
      onStart: gy(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && Ce.update(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = vn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function VR() {
  const e = P.useContext(ah);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = P.useId();
  return P.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function yy(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ti = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (F.test(e)) e = parseFloat(e);
        else return e;
      const n = yy(e, t.target.x),
        r = yy(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  BR = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = ar.parse(e);
      if (o.length > 5) return r;
      const i = ar.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const u = xe(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  };
class zR extends On.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    Yb(UR),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Si.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              Ce.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Pw(e) {
  const [t, n] = VR(),
    r = P.useContext(SS);
  return On.createElement(zR, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: P.useContext(wS),
    isPresent: t,
    safeToRemove: n,
  });
}
const UR = {
    borderRadius: {
      ...ti,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ti,
    borderTopRightRadius: ti,
    borderBottomLeftRadius: ti,
    borderBottomRightRadius: ti,
    boxShadow: BR,
  },
  Ew = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  WR = Ew.length,
  vy = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Sy = (e) => typeof e == "number" || F.test(e);
function HR(e, t, n, r, o, i) {
  o
    ? ((e.opacity = xe(0, n.opacity !== void 0 ? n.opacity : 1, KR(r))),
      (e.opacityExit = xe(t.opacity !== void 0 ? t.opacity : 1, 0, GR(r))))
    : i &&
      (e.opacity = xe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < WR; s++) {
    const a = `border${Ew[s]}Radius`;
    let l = wy(t, a),
      u = wy(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Sy(l) === Sy(u)
        ? ((e[a] = Math.max(xe(vy(l), vy(u), r), 0)),
          (ln.test(u) || ln.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = xe(t.rotate || 0, n.rotate || 0, r));
}
function wy(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const KR = kw(0, 0.5, Sh),
  GR = kw(0.5, 0.95, je);
function kw(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Zi(e, t, r)));
}
function xy(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Rt(e, t) {
  xy(e.x, t.x), xy(e.y, t.y);
}
function Cy(e, t, n, r, o) {
  return (
    (e -= t), (e = qa(e, 1 / n, r)), o !== void 0 && (e = qa(e, 1 / o, r)), e
  );
}
function YR(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (ln.test(t) &&
      ((t = parseFloat(t)), (t = xe(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = xe(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = Cy(e.min, t, n, a, o)),
    (e.max = Cy(e.max, t, n, a, o));
}
function Py(e, t, [n, r, o], i, s) {
  YR(e, t[n], t[r], t[o], t.scale, i, s);
}
const QR = ["x", "scaleX", "originX"],
  XR = ["y", "scaleY", "originY"];
function Ey(e, t, n, r) {
  Py(e.x, t, QR, n ? n.x : void 0, r ? r.x : void 0),
    Py(e.y, t, XR, n ? n.y : void 0, r ? r.y : void 0);
}
function ky(e) {
  return e.translate === 0 && e.scale === 1;
}
function Tw(e) {
  return ky(e.x) && ky(e.y);
}
function Pd(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Ty(e) {
  return kt(e.x) / kt(e.y);
}
class qR {
  constructor() {
    this.members = [];
  }
  add(t) {
    kh(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Th(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function by(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const JR = (e, t) => e.depth - t.depth;
class ZR {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    kh(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Th(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(JR),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function eL(e, t) {
  const n = performance.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (bn(r), e(i - t));
    };
  return Ce.read(r, !0), () => bn(r);
}
function tL(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function nL(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function rL(e, t, n) {
  const r = yt(e) ? e : Ro(e);
  return r.start(Eh("", r, t, n)), r.animation;
}
const Ay = ["", "X", "Y", "Z"],
  Oy = 1e3;
let oL = 0;
const vr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function bw({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s, a = {}, l = t == null ? void 0 : t()) {
      (this.id = oL++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (vr.totalNodes =
            vr.resolvedTargetDeltas =
            vr.recalculatedProjection =
              0),
            this.nodes.forEach(aL),
            this.nodes.forEach(fL),
            this.nodes.forEach(dL),
            this.nodes.forEach(lL),
            tL(vr);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.elementId = s),
        (this.latestValues = a),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0),
        s && this.root.registerPotentialNode(s, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ZR());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new bh()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    registerPotentialNode(s, a) {
      this.potentialNodes.set(s, a);
    }
    mount(s, a = !1) {
      if (this.instance) return;
      (this.isSVG = nL(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.elementId && this.root.potentialNodes.delete(this.elementId),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = eL(d, 250)),
            Si.hasAnimatedSinceResize &&
              ((Si.hasAnimatedSinceResize = !1), this.nodes.forEach(Ly));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: p,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || yL,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: y } =
                  c.getProps(),
                h = !this.targetLayout || !Pd(this.targetLayout, p) || m,
                v = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, v);
                const w = { ...pw(g, "layout"), onPlay: S, onComplete: y };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                !d && this.animationProgress === 0 && Ly(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = p;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        bn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(pL),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ry);
        return;
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size &&
          (this.potentialNodes.forEach(vL), this.potentialNodes.clear()),
        this.nodes.forEach(cL),
        this.nodes.forEach(iL),
        this.nodes.forEach(sL),
        this.clearAllSnapshots(),
        vo.update.process(ze),
        vo.preRender.process(ze),
        vo.render.process(ze));
    }
    clearAllSnapshots() {
      this.nodes.forEach(uL), this.sharedNodes.forEach(hL);
    }
    scheduleUpdateProjection() {
      Ce.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Ce.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = _e()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Tw(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || yr(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        SL(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return _e();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Fn(a.x, l.offset.x), Fn(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = _e();
      Rt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Rt(a, s);
            const { scroll: d } = this.root;
            d && (Fn(a.x, -d.offset.x), Fn(a.y, -d.offset.y));
          }
          Fn(a.x, c.offset.x), Fn(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = _e();
      Rt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          ao(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          yr(c.latestValues) && ao(l, c.latestValues);
      }
      return yr(this.latestValues) && ao(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = _e();
      Rt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !yr(u.latestValues)) continue;
        xd(u.latestValues) && u.updateSnapshot();
        const c = _e(),
          f = u.measurePageBox();
        Rt(c, f),
          Ey(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return yr(this.latestValues) && Ey(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ze.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ze.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = _e()),
              (this.relativeTargetOrigin = _e()),
              Pi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              Rt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = _e()), (this.targetWithTransforms = _e())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                CR(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Rt(this.target, this.layout.layoutBox),
                xw(this.target, this.targetDelta))
              : Rt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = _e()),
                (this.relativeTargetOrigin = _e()),
                Pi(this.relativeTargetOrigin, this.target, m.target),
                Rt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          vr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          xd(this.parent.latestValues) ||
          ww(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ze.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Rt(this.layoutCorrected, this.layout.layoutBox),
        LR(this.layoutCorrected, this.treeScale, this.path, l);
      const { target: d } = a;
      if (!d) return;
      this.projectionDelta ||
        ((this.projectionDelta = Ei()),
        (this.projectionDeltaWithTransform = Ei()));
      const m = this.treeScale.x,
        p = this.treeScale.y,
        g = this.projectionTransform;
      Ci(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.projectionTransform = by(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== g ||
          this.treeScale.x !== m ||
          this.treeScale.y !== p) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", d)),
        vr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = Ei();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = _e(),
        m = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        g = m !== p,
        S = this.getStack(),
        y = !S || S.members.length <= 1,
        h = !!(g && !y && this.options.crossfade === !0 && !this.path.some(gL));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (w) => {
        const x = w / 1e3;
        _y(f.x, s.x, x),
          _y(f.y, s.y, x),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Pi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            mL(this.relativeTarget, this.relativeTargetOrigin, d, x),
            v && Pd(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = _e()),
            Rt(v, this.relativeTarget)),
          g &&
            ((this.animationValues = c), HR(c, u, this.latestValues, x, h, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = x);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (bn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ce.update(() => {
          (Si.hasAnimatedSinceResize = !0),
            (this.currentAnimation = rL(0, Oy, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Oy),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Aw(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || _e();
          const f = kt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = kt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        Rt(a, l),
          ao(a, c),
          Ci(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new qR()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < Ay.length; c++) {
        const f = "rotate" + Ay[c];
        l[f] && ((u[f] = l[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var a, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = la(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = la(s.pointerEvents) || "")),
          this.hasProjected &&
            !yr(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = by(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: m, y: p } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${p.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const g in Wa) {
        if (d[g] === void 0) continue;
        const { correct: S, applyTo: y } = Wa[g],
          h = u.transform === "none" ? d[g] : S(d[g], f);
        if (y) {
          const v = y.length;
          for (let w = 0; w < v; w++) u[y[w]] = h;
        } else u[g] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? la(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Ry),
        this.root.sharedNodes.clear();
    }
  };
}
function iL(e) {
  e.updateLayout();
}
function sL(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? qt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = kt(d);
          (d.min = r[f].min), (d.max = d.min + m);
        })
      : Aw(i, n.layoutBox, r) &&
        qt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = kt(r[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    const a = Ei();
    Ci(a, r, n.layoutBox);
    const l = Ei();
    s ? Ci(l, e.applyTransform(o, !0), n.measuredBox) : Ci(l, r, n.layoutBox);
    const u = !Tw(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const p = _e();
          Pi(p, n.layoutBox, d.layoutBox);
          const g = _e();
          Pi(g, r, m.layoutBox),
            Pd(p, g) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = p),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function aL(e) {
  vr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function lL(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function uL(e) {
  e.clearSnapshot();
}
function Ry(e) {
  e.clearMeasurements();
}
function cL(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Ly(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function fL(e) {
  e.resolveTargetDelta();
}
function dL(e) {
  e.calcProjection();
}
function pL(e) {
  e.resetRotation();
}
function hL(e) {
  e.removeLeadSnapshot();
}
function _y(e, t, n) {
  (e.translate = xe(t.translate, 0, n)),
    (e.scale = xe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function My(e, t, n, r) {
  (e.min = xe(t.min, n.min, r)), (e.max = xe(t.max, n.max, r));
}
function mL(e, t, n, r) {
  My(e.x, t.x, n.x, r), My(e.y, t.y, n.y, r);
}
function gL(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const yL = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function vL(e, t) {
  let n = e.root;
  for (let i = e.path.length - 1; i >= 0; i--)
    if (e.path[i].instance) {
      n = e.path[i];
      break;
    }
  const o = (n && n !== e.root ? n.instance : document).querySelector(
    `[data-projection-id="${t}"]`
  );
  o && e.mount(o, !0);
}
function $y(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function SL(e) {
  $y(e.x), $y(e.y);
}
function Aw(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Sd(Ty(t), Ty(n), 0.2))
  );
}
const wL = bw({
    attachResizeListener: (e, t) => hn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  sc = { current: void 0 },
  Ow = bw({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!sc.current) {
        const e = new wL(0, {});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (sc.current = e);
      }
      return sc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  xL = {
    pan: { Feature: FR },
    drag: { Feature: IR, ProjectionNode: Ow, MeasureLayout: Pw },
  },
  CL = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function PL(e) {
  const t = CL.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Ed(e, t, n = 1) {
  const [r, o] = PL(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  return i ? i.trim() : fd(o) ? Ed(o, t, n + 1) : o;
}
function EL(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!fd(i)) return;
      const s = Ed(i, r);
      s && o.set(s);
    });
  for (const o in t) {
    const i = t[o];
    if (!fd(i)) continue;
    const s = Ed(i, r);
    s && ((t[o] = s), n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const kL = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
  ]),
  Rw = (e) => kL.has(e),
  TL = (e) => Object.keys(e).some(Rw),
  Dy = (e) => e === Fr || e === F,
  jy = (e, t) => parseFloat(e.split(", ")[t]),
  Ny =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return jy(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? jy(i[1], e) : 0;
      }
    },
  bL = new Set(["x", "y", "z"]),
  AL = ms.filter((e) => !bL.has(e));
function OL(e) {
  const t = [];
  return (
    AL.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Iy = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Ny(4, 13),
    y: Ny(5, 14),
  },
  RL = (e, t, n) => {
    const r = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: s } = i,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        a[u] = Iy[u](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(a[u]), (e[u] = Iy[u](l, i));
      }),
      e
    );
  },
  LL = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const o = Object.keys(t).filter(Rw);
    let i = [],
      s = !1;
    const a = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          f = ei(c);
        const d = t[l];
        let m;
        if (Ka(d)) {
          const p = d.length,
            g = d[0] === null ? 1 : 0;
          (c = d[g]), (f = ei(c));
          for (let S = g; S < p && d[S] !== null; S++)
            m ? vh(ei(d[S]) === m) : (m = ei(d[S]));
        } else m = ei(d);
        if (f !== m)
          if (Dy(f) && Dy(m)) {
            const p = u.get();
            typeof p == "string" && u.set(parseFloat(p)),
              typeof d == "string"
                ? (t[l] = parseFloat(d))
                : Array.isArray(d) && m === F && (t[l] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            m != null &&
            m.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[l] = f.transform(d))
              : (s || ((i = OL(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(d));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = RL(t, e, a);
      return (
        i.length &&
          i.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        iu && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function _L(e, t, n, r) {
  return TL(t) ? LL(e, t, n, r) : { target: t, transitionEnd: r };
}
const ML = (e, t, n, r) => {
    const o = EL(e, t, r);
    return (t = o.target), (r = o.transitionEnd), _L(e, t, n, r);
  },
  kd = { current: null },
  Lw = { current: !1 };
function $L() {
  if (((Lw.current = !0), !!iu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (kd.current = e.matches);
      e.addListener(t), t();
    } else kd.current = !1;
}
function DL(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      s = n[o];
    if (yt(i)) e.addValue(o, i), Xa(r) && r.add(o);
    else if (yt(s)) e.addValue(o, Ro(i, { owner: e })), Xa(r) && r.remove(o);
    else if (s !== i)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(i);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, Ro(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const Fy = new WeakMap(),
  _w = Object.keys(qi),
  jL = _w.length,
  Vy = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  NL = uh.length;
class IL {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      visualState: i,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => Ce.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = i;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = s),
      (this.isControllingVariants = au(n)),
      (this.isVariantNode = yS(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      a[f] !== void 0 && yt(d) && (d.set(a[f], !1), Xa(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Fy.set(t, this),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Lw.current || $L(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : kd.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Fy.delete(this.current),
      this.projection && this.projection.unmount(),
      bn(this.notifyUpdate),
      bn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Ir.has(t),
      o = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && Ce.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i, s) {
    let a, l;
    for (let u = 0; u < jL; u++) {
      const c = _w[u],
        {
          isEnabled: f,
          Feature: d,
          ProjectionNode: m,
          MeasureLayout: p,
        } = qi[c];
      m && (a = m),
        f(n) &&
          (!this.features[c] && d && (this.features[c] = new d(this)),
          p && (l = p));
    }
    if (!this.projection && a) {
      this.projection = new a(
        i,
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: u,
        layout: c,
        drag: f,
        dragConstraints: d,
        layoutScroll: m,
        layoutRoot: p,
      } = n;
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!f || (d && io(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: s,
        layoutScroll: m,
        layoutRoot: p,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted
        ? n.update(this.props, this.prevProps)
        : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : _e();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Vy.length; r++) {
      const o = Vy[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = DL(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < NL; r++) {
      const o = uh[r],
        i = this.props[o];
      (Xi(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Ro(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      o =
        typeof r == "string" || typeof r == "object"
          ? (n = yh(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !yt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new bh()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Mw extends IL {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: o },
    i
  ) {
    let s = oR(r, t || {}, this);
    if ((o && (n && (n = o(n)), r && (r = o(r)), s && (s = o(s))), i)) {
      nR(this, r, s);
      const a = ML(this, r, s, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function FL(e) {
  return window.getComputedStyle(e);
}
class VL extends Mw {
  readValueFromInstance(t, n) {
    if (Ir.has(n)) {
      const r = Ch(n);
      return (r && r.default) || 0;
    } else {
      const r = FL(t),
        o = (PS(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Cw(t, n);
  }
  build(t, n, r, o) {
    fh(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return gh(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    yt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    OS(t, n, r, o);
  }
}
class BL extends Mw {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ir.has(n)) {
      const r = Ch(n);
      return (r && r.default) || 0;
    }
    return (n = RS.has(n) ? n : mh(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return _e();
  }
  scrapeMotionValuesFromProps(t, n) {
    return _S(t, n);
  }
  build(t, n, r, o) {
    ph(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    LS(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = hh(t.tagName)), super.mount(t);
  }
}
const zL = (e, t) =>
    ch(e)
      ? new BL(t, { enableHardwareAcceleration: !1 })
      : new VL(t, { enableHardwareAcceleration: !0 }),
  UL = { layout: { ProjectionNode: Ow, MeasureLayout: Pw } },
  WL = { ...vR, ...IA, ...xL, ...UL },
  HL = Kb((e, t) => xA(e, t, WL, zL));
function KL(e) {
  function t(L, $, D, B, C) {
    for (
      var Y = 0,
        M = 0,
        pe = 0,
        Z = 0,
        Q,
        z,
        Le = 0,
        ct = 0,
        oe,
        qe = (oe = Q = 0),
        se = 0,
        He = 0,
        Bo = 0,
        Ke = 0,
        Cs = D.length,
        zo = Cs - 1,
        Ft,
        U = "",
        Oe = "",
        yu = "",
        vu = "",
        _n;
      se < Cs;

    ) {
      if (
        ((z = D.charCodeAt(se)),
        se === zo &&
          M + Z + pe + Y !== 0 &&
          (M !== 0 && (z = M === 47 ? 10 : 47), (Z = pe = Y = 0), Cs++, zo++),
        M + Z + pe + Y === 0)
      ) {
        if (
          se === zo &&
          (0 < He && (U = U.replace(d, "")), 0 < U.trim().length)
        ) {
          switch (z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += D.charAt(se);
          }
          z = 59;
        }
        switch (z) {
          case 123:
            for (
              U = U.trim(), Q = U.charCodeAt(0), oe = 1, Ke = ++se;
              se < Cs;

            ) {
              switch ((z = D.charCodeAt(se))) {
                case 123:
                  oe++;
                  break;
                case 125:
                  oe--;
                  break;
                case 47:
                  switch ((z = D.charCodeAt(se + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (qe = se + 1; qe < zo; ++qe)
                          switch (D.charCodeAt(qe)) {
                            case 47:
                              if (
                                z === 42 &&
                                D.charCodeAt(qe - 1) === 42 &&
                                se + 2 !== qe
                              ) {
                                se = qe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (z === 47) {
                                se = qe + 1;
                                break e;
                              }
                          }
                        se = qe;
                      }
                  }
                  break;
                case 91:
                  z++;
                case 40:
                  z++;
                case 34:
                case 39:
                  for (; se++ < zo && D.charCodeAt(se) !== z; );
              }
              if (oe === 0) break;
              se++;
            }
            switch (
              ((oe = D.substring(Ke, se)),
              Q === 0 && (Q = (U = U.replace(f, "").trim()).charCodeAt(0)),
              Q)
            ) {
              case 64:
                switch (
                  (0 < He && (U = U.replace(d, "")), (z = U.charCodeAt(1)), z)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    He = $;
                    break;
                  default:
                    He = Ve;
                }
                if (
                  ((oe = t($, He, oe, z, C + 1)),
                  (Ke = oe.length),
                  0 < _ &&
                    ((He = n(Ve, U, Bo)),
                    (_n = a(3, oe, He, $, de, te, Ke, z, C, B)),
                    (U = He.join("")),
                    _n !== void 0 &&
                      (Ke = (oe = _n.trim()).length) === 0 &&
                      ((z = 0), (oe = ""))),
                  0 < Ke)
                )
                  switch (z) {
                    case 115:
                      U = U.replace(b, s);
                    case 100:
                    case 109:
                    case 45:
                      oe = U + "{" + oe + "}";
                      break;
                    case 107:
                      (U = U.replace(h, "$1 $2")),
                        (oe = U + "{" + oe + "}"),
                        (oe =
                          q === 1 || (q === 2 && i("@" + oe, 3))
                            ? "@-webkit-" + oe + "@" + oe
                            : "@" + oe);
                      break;
                    default:
                      (oe = U + oe), B === 112 && (oe = ((Oe += oe), ""));
                  }
                else oe = "";
                break;
              default:
                oe = t($, n($, U, Bo), oe, B, C + 1);
            }
            (yu += oe),
              (oe = Bo = He = qe = Q = 0),
              (U = ""),
              (z = D.charCodeAt(++se));
            break;
          case 125:
          case 59:
            if (
              ((U = (0 < He ? U.replace(d, "") : U).trim()),
              1 < (Ke = U.length))
            )
              switch (
                (qe === 0 &&
                  ((Q = U.charCodeAt(0)), Q === 45 || (96 < Q && 123 > Q)) &&
                  (Ke = (U = U.replace(" ", ":")).length),
                0 < _ &&
                  (_n = a(1, U, $, L, de, te, Oe.length, B, C, B)) !== void 0 &&
                  (Ke = (U = _n.trim()).length) === 0 &&
                  (U = "\0\0"),
                (Q = U.charCodeAt(0)),
                (z = U.charCodeAt(1)),
                Q)
              ) {
                case 0:
                  break;
                case 64:
                  if (z === 105 || z === 99) {
                    vu += U + D.charAt(se);
                    break;
                  }
                default:
                  U.charCodeAt(Ke - 1) !== 58 &&
                    (Oe += o(U, Q, z, U.charCodeAt(2)));
              }
            (Bo = He = qe = Q = 0), (U = ""), (z = D.charCodeAt(++se));
        }
      }
      switch (z) {
        case 13:
        case 10:
          M === 47
            ? (M = 0)
            : 1 + Q === 0 &&
              B !== 107 &&
              0 < U.length &&
              ((He = 1), (U += "\0")),
            0 < _ * V && a(0, U, $, L, de, te, Oe.length, B, C, B),
            (te = 1),
            de++;
          break;
        case 59:
        case 125:
          if (M + Z + pe + Y === 0) {
            te++;
            break;
          }
        default:
          switch ((te++, (Ft = D.charAt(se)), z)) {
            case 9:
            case 32:
              if (Z + Y + M === 0)
                switch (Le) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ft = "";
                    break;
                  default:
                    z !== 32 && (Ft = " ");
                }
              break;
            case 0:
              Ft = "\\0";
              break;
            case 12:
              Ft = "\\f";
              break;
            case 11:
              Ft = "\\v";
              break;
            case 38:
              Z + M + Y === 0 && ((He = Bo = 1), (Ft = "\f" + Ft));
              break;
            case 108:
              if (Z + M + Y + X === 0 && 0 < qe)
                switch (se - qe) {
                  case 2:
                    Le === 112 && D.charCodeAt(se - 3) === 58 && (X = Le);
                  case 8:
                    ct === 111 && (X = ct);
                }
              break;
            case 58:
              Z + M + Y === 0 && (qe = se);
              break;
            case 44:
              M + pe + Z + Y === 0 && ((He = 1), (Ft += "\r"));
              break;
            case 34:
            case 39:
              M === 0 && (Z = Z === z ? 0 : Z === 0 ? z : Z);
              break;
            case 91:
              Z + M + pe === 0 && Y++;
              break;
            case 93:
              Z + M + pe === 0 && Y--;
              break;
            case 41:
              Z + M + Y === 0 && pe--;
              break;
            case 40:
              if (Z + M + Y === 0) {
                if (Q === 0)
                  switch (2 * Le + 3 * ct) {
                    case 533:
                      break;
                    default:
                      Q = 1;
                  }
                pe++;
              }
              break;
            case 64:
              M + pe + Z + Y + qe + oe === 0 && (oe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Z + Y + pe))
                switch (M) {
                  case 0:
                    switch (2 * z + 3 * D.charCodeAt(se + 1)) {
                      case 235:
                        M = 47;
                        break;
                      case 220:
                        (Ke = se), (M = 42);
                    }
                    break;
                  case 42:
                    z === 47 &&
                      Le === 42 &&
                      Ke + 2 !== se &&
                      (D.charCodeAt(Ke + 2) === 33 &&
                        (Oe += D.substring(Ke, se + 1)),
                      (Ft = ""),
                      (M = 0));
                }
          }
          M === 0 && (U += Ft);
      }
      (ct = Le), (Le = z), se++;
    }
    if (((Ke = Oe.length), 0 < Ke)) {
      if (
        ((He = $),
        0 < _ &&
          ((_n = a(2, Oe, He, L, de, te, Ke, B, C, B)),
          _n !== void 0 && (Oe = _n).length === 0))
      )
        return vu + Oe + yu;
      if (((Oe = He.join(",") + "{" + Oe + "}"), q * X !== 0)) {
        switch ((q !== 2 || i(Oe, 2) || (X = 0), X)) {
          case 111:
            Oe = Oe.replace(w, ":-moz-$1") + Oe;
            break;
          case 112:
            Oe =
              Oe.replace(v, "::-webkit-input-$1") +
              Oe.replace(v, "::-moz-$1") +
              Oe.replace(v, ":-ms-input-$1") +
              Oe;
        }
        X = 0;
      }
    }
    return vu + Oe + yu;
  }
  function n(L, $, D) {
    var B = $.trim().split(S);
    $ = B;
    var C = B.length,
      Y = L.length;
    switch (Y) {
      case 0:
      case 1:
        var M = 0;
        for (L = Y === 0 ? "" : L[0] + " "; M < C; ++M)
          $[M] = r(L, $[M], D).trim();
        break;
      default:
        var pe = (M = 0);
        for ($ = []; M < C; ++M)
          for (var Z = 0; Z < Y; ++Z) $[pe++] = r(L[Z] + " ", B[M], D).trim();
    }
    return $;
  }
  function r(L, $, D) {
    var B = $.charCodeAt(0);
    switch ((33 > B && (B = ($ = $.trim()).charCodeAt(0)), B)) {
      case 38:
        return $.replace(y, "$1" + L.trim());
      case 58:
        return L.trim() + $.replace(y, "$1" + L.trim());
      default:
        if (0 < 1 * D && 0 < $.indexOf("\f"))
          return $.replace(y, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + $;
  }
  function o(L, $, D, B) {
    var C = L + ";",
      Y = 2 * $ + 3 * D + 4 * B;
    if (Y === 944) {
      L = C.indexOf(":", 9) + 1;
      var M = C.substring(L, C.length - 1).trim();
      return (
        (M = C.substring(0, L).trim() + M + ";"),
        q === 1 || (q === 2 && i(M, 1)) ? "-webkit-" + M + M : M
      );
    }
    if (q === 0 || (q === 2 && !i(C, 1))) return C;
    switch (Y) {
      case 1015:
        return C.charCodeAt(10) === 97 ? "-webkit-" + C + C : C;
      case 951:
        return C.charCodeAt(3) === 116 ? "-webkit-" + C + C : C;
      case 963:
        return C.charCodeAt(5) === 110 ? "-webkit-" + C + C : C;
      case 1009:
        if (C.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + C + C;
      case 978:
        return "-webkit-" + C + "-moz-" + C + C;
      case 1019:
      case 983:
        return "-webkit-" + C + "-moz-" + C + "-ms-" + C + C;
      case 883:
        if (C.charCodeAt(8) === 45) return "-webkit-" + C + C;
        if (0 < C.indexOf("image-set(", 11))
          return C.replace(H, "$1-webkit-$2") + C;
        break;
      case 932:
        if (C.charCodeAt(4) === 45)
          switch (C.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                C.replace("-grow", "") +
                "-webkit-" +
                C +
                "-ms-" +
                C.replace("grow", "positive") +
                C
              );
            case 115:
              return (
                "-webkit-" + C + "-ms-" + C.replace("shrink", "negative") + C
              );
            case 98:
              return (
                "-webkit-" +
                C +
                "-ms-" +
                C.replace("basis", "preferred-size") +
                C
              );
          }
        return "-webkit-" + C + "-ms-" + C + C;
      case 964:
        return "-webkit-" + C + "-ms-flex-" + C + C;
      case 1023:
        if (C.charCodeAt(8) !== 99) break;
        return (
          (M = C.substring(C.indexOf(":", 15))
            .replace("flex-", "")
            .replace("space-between", "justify")),
          "-webkit-box-pack" + M + "-webkit-" + C + "-ms-flex-pack" + M + C
        );
      case 1005:
        return p.test(C)
          ? C.replace(m, ":-webkit-") + C.replace(m, ":-moz-") + C
          : C;
      case 1e3:
        switch (
          ((M = C.substring(13).trim()),
          ($ = M.indexOf("-") + 1),
          M.charCodeAt(0) + M.charCodeAt($))
        ) {
          case 226:
            M = C.replace(x, "tb");
            break;
          case 232:
            M = C.replace(x, "tb-rl");
            break;
          case 220:
            M = C.replace(x, "lr");
            break;
          default:
            return C;
        }
        return "-webkit-" + C + "-ms-" + M + C;
      case 1017:
        if (C.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (
          (($ = (C = L).length - 10),
          (M = (C.charCodeAt($) === 33 ? C.substring(0, $) : C)
            .substring(L.indexOf(":", 7) + 1)
            .trim()),
          (Y = M.charCodeAt(0) + (M.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > M.charCodeAt(8)) break;
          case 115:
            C = C.replace(M, "-webkit-" + M) + ";" + C;
            break;
          case 207:
          case 102:
            C =
              C.replace(M, "-webkit-" + (102 < Y ? "inline-" : "") + "box") +
              ";" +
              C.replace(M, "-webkit-" + M) +
              ";" +
              C.replace(M, "-ms-" + M + "box") +
              ";" +
              C;
        }
        return C + ";";
      case 938:
        if (C.charCodeAt(5) === 45)
          switch (C.charCodeAt(6)) {
            case 105:
              return (
                (M = C.replace("-items", "")),
                "-webkit-" + C + "-webkit-box-" + M + "-ms-flex-" + M + C
              );
            case 115:
              return "-webkit-" + C + "-ms-flex-item-" + C.replace(T, "") + C;
            default:
              return (
                "-webkit-" +
                C +
                "-ms-flex-line-pack" +
                C.replace("align-content", "").replace(T, "") +
                C
              );
          }
        break;
      case 973:
      case 989:
        if (C.charCodeAt(3) !== 45 || C.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (R.test(L) === !0)
          return (M = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115
            ? o(L.replace("stretch", "fill-available"), $, D, B).replace(
                ":fill-available",
                ":stretch"
              )
            : C.replace(M, "-webkit-" + M) +
                C.replace(M, "-moz-" + M.replace("fill-", "")) +
                C;
        break;
      case 962:
        if (
          ((C =
            "-webkit-" + C + (C.charCodeAt(5) === 102 ? "-ms-" + C : "") + C),
          D + B === 211 &&
            C.charCodeAt(13) === 105 &&
            0 < C.indexOf("transform", 10))
        )
          return (
            C.substring(0, C.indexOf(";", 27) + 1).replace(g, "$1-webkit-$2") +
            C
          );
    }
    return C;
  }
  function i(L, $) {
    var D = L.indexOf($ === 1 ? ":" : "{"),
      B = L.substring(0, $ !== 3 ? D : 10);
    return (
      (D = L.substring(D + 1, L.length - 1)),
      N($ !== 2 ? B : B.replace(O, "$1"), D, $)
    );
  }
  function s(L, $) {
    var D = o($, $.charCodeAt(0), $.charCodeAt(1), $.charCodeAt(2));
    return D !== $ + ";"
      ? D.replace(E, " or ($1)").substring(4)
      : "(" + $ + ")";
  }
  function a(L, $, D, B, C, Y, M, pe, Z, Q) {
    for (var z = 0, Le = $, ct; z < _; ++z)
      switch ((ct = ke[z].call(c, L, Le, D, B, C, Y, M, pe, Z, Q))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Le = ct;
      }
    if (Le !== $) return Le;
  }
  function l(L) {
    switch (L) {
      case void 0:
      case null:
        _ = ke.length = 0;
        break;
      default:
        if (typeof L == "function") ke[_++] = L;
        else if (typeof L == "object")
          for (var $ = 0, D = L.length; $ < D; ++$) l(L[$]);
        else V = !!L | 0;
    }
    return l;
  }
  function u(L) {
    return (
      (L = L.prefix),
      L !== void 0 &&
        ((N = null),
        L ? (typeof L != "function" ? (q = 1) : ((q = 2), (N = L))) : (q = 0)),
      u
    );
  }
  function c(L, $) {
    var D = L;
    if ((33 > D.charCodeAt(0) && (D = D.trim()), (I = D), (D = [I]), 0 < _)) {
      var B = a(-1, $, D, D, de, te, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && ($ = B);
    }
    var C = t(Ve, D, $, 0, 0);
    return (
      0 < _ &&
        ((B = a(-2, C, D, D, de, te, C.length, 0, 0, 0)),
        B !== void 0 && (C = B)),
      (I = ""),
      (X = 0),
      (te = de = 1),
      C
    );
  }
  var f = /^\0+/g,
    d = /[\0\r\f]/g,
    m = /: */g,
    p = /zoo|gra/,
    g = /([,: ])(transform)/g,
    S = /,\r+?/g,
    y = /([\t\r\n ])*\f?&/g,
    h = /@(k\w+)\s*(\S*)\s*/,
    v = /::(place)/g,
    w = /:(read-only)/g,
    x = /[svh]\w+-[tblr]{2}/,
    b = /\(\s*(.*)\s*\)/g,
    E = /([\s\S]*?);/g,
    T = /-self|flex-/g,
    O = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    R = /stretch|:\s*\w+\-(?:conte|avail)/,
    H = /([^-])(image-set\()/,
    te = 1,
    de = 1,
    X = 0,
    q = 1,
    Ve = [],
    ke = [],
    _ = 0,
    N = null,
    V = 0,
    I = "";
  return (c.use = l), (c.set = u), e !== void 0 && u(e), c;
}
var GL = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function nn() {
  return (nn =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var By = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  Td = function (e) {
    return (
      e !== null &&
      typeof e == "object" &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        "[object Object]" &&
      !Ba.typeOf(e)
    );
  },
  Ja = Object.freeze([]),
  rr = Object.freeze({});
function es(e) {
  return typeof e == "function";
}
function zy(e) {
  return e.displayName || e.name || "Component";
}
function Ah(e) {
  return e && typeof e.styledComponentId == "string";
}
var Lo =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  Oh = typeof window < "u" && "HTMLElement" in window,
  YL = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
        ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
          {}.REACT_APP_SC_DISABLE_SPEEDY
        : {}.SC_DISABLE_SPEEDY !== void 0 &&
          {}.SC_DISABLE_SPEEDY !== "" &&
          {}.SC_DISABLE_SPEEDY !== "false" &&
          {}.SC_DISABLE_SPEEDY)),
  QL = {};
function Ss(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    "An error occurred. See https://git.io/JUIaE#" +
      e +
      " for more information." +
      (n.length > 0 ? " Args: " + n.join(", ") : "")
  );
}
var XL = (function () {
    function e(n) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = n);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
        return r;
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var o = this.groupSizes, i = o.length, s = i; n >= s; )
            (s <<= 1) < 0 && Ss(16, "" + n);
          (this.groupSizes = new Uint32Array(s)),
            this.groupSizes.set(o),
            (this.length = s);
          for (var a = i; a < s; a++) this.groupSizes[a] = 0;
        }
        for (var l = this.indexOfGroup(n + 1), u = 0, c = r.length; u < c; u++)
          this.tag.insertRule(l, r[u]) && (this.groupSizes[n]++, l++);
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            o = this.indexOfGroup(n),
            i = o + r;
          this.groupSizes[n] = 0;
          for (var s = o; s < i; s++) this.tag.deleteRule(o);
        }
      }),
      (t.getGroup = function (n) {
        var r = "";
        if (n >= this.length || this.groupSizes[n] === 0) return r;
        for (
          var o = this.groupSizes[n],
            i = this.indexOfGroup(n),
            s = i + o,
            a = i;
          a < s;
          a++
        )
          r +=
            this.tag.getRule(a) +
            `/*!sc*/
`;
        return r;
      }),
      e
    );
  })(),
  ua = new Map(),
  Za = new Map(),
  ki = 1,
  Ws = function (e) {
    if (ua.has(e)) return ua.get(e);
    for (; Za.has(ki); ) ki++;
    var t = ki++;
    return ua.set(e, t), Za.set(t, e), t;
  },
  qL = function (e) {
    return Za.get(e);
  },
  JL = function (e, t) {
    t >= ki && (ki = t + 1), ua.set(e, t), Za.set(t, e);
  },
  ZL = "style[" + Lo + '][data-styled-version="5.3.9"]',
  e_ = new RegExp("^" + Lo + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  t_ = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  n_ = function (e, t) {
    for (
      var n = (t.textContent || "").split(`/*!sc*/
`),
        r = [],
        o = 0,
        i = n.length;
      o < i;
      o++
    ) {
      var s = n[o].trim();
      if (s) {
        var a = s.match(e_);
        if (a) {
          var l = 0 | parseInt(a[1], 10),
            u = a[2];
          l !== 0 && (JL(u, l), t_(e, u, a[3]), e.getTag().insertRules(l, r)),
            (r.length = 0);
        } else r.push(s);
      }
    }
  },
  r_ = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  },
  $w = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (a) {
        for (var l = a.childNodes, u = l.length; u >= 0; u--) {
          var c = l[u];
          if (c && c.nodeType === 1 && c.hasAttribute(Lo)) return c;
        }
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(Lo, "active"),
      r.setAttribute("data-styled-version", "5.3.9");
    var s = r_();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
  },
  o_ = (function () {
    function e(n) {
      var r = (this.element = $w(n));
      r.appendChild(document.createTextNode("")),
        (this.sheet = (function (o) {
          if (o.sheet) return o.sheet;
          for (var i = document.styleSheets, s = 0, a = i.length; s < a; s++) {
            var l = i[s];
            if (l.ownerNode === o) return l;
          }
          Ss(17);
        })(r)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--;
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n];
        return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
      }),
      e
    );
  })(),
  i_ = (function () {
    function e(n) {
      var r = (this.element = $w(n));
      (this.nodes = r.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var o = document.createTextNode(r),
            i = this.nodes[n];
          return this.element.insertBefore(o, i || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : "";
      }),
      e
    );
  })(),
  s_ = (function () {
    function e(n) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        return (
          n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        );
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : "";
      }),
      e
    );
  })(),
  Uy = Oh,
  a_ = { isServer: !Oh, useCSSOMInjection: !YL },
  el = (function () {
    function e(n, r, o) {
      n === void 0 && (n = rr),
        r === void 0 && (r = {}),
        (this.options = nn({}, a_, {}, n)),
        (this.gs = r),
        (this.names = new Map(o)),
        (this.server = !!n.isServer),
        !this.server &&
          Oh &&
          Uy &&
          ((Uy = !1),
          (function (i) {
            for (
              var s = document.querySelectorAll(ZL), a = 0, l = s.length;
              a < l;
              a++
            ) {
              var u = s[a];
              u &&
                u.getAttribute(Lo) !== "active" &&
                (n_(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this));
    }
    e.registerId = function (n) {
      return Ws(n);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (n, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            nn({}, this.options, {}, n),
            this.gs,
            (r && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((o = (r = this.options).isServer),
            (i = r.useCSSOMInjection),
            (s = r.target),
            (n = o ? new s_(s) : i ? new o_(s) : new i_(s)),
            new XL(n)))
        );
        var n, r, o, i, s;
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r);
      }),
      (t.registerName = function (n, r) {
        if ((Ws(n), this.names.has(n))) this.names.get(n).add(r);
        else {
          var o = new Set();
          o.add(r), this.names.set(n, o);
        }
      }),
      (t.insertRules = function (n, r, o) {
        this.registerName(n, r), this.getTag().insertRules(Ws(n), o);
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(Ws(n)), this.clearNames(n);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), o = r.length, i = "", s = 0; s < o; s++) {
            var a = qL(s);
            if (a !== void 0) {
              var l = n.names.get(a),
                u = r.getGroup(s);
              if (l && u && l.size) {
                var c = Lo + ".g" + s + '[id="' + a + '"]',
                  f = "";
                l !== void 0 &&
                  l.forEach(function (d) {
                    d.length > 0 && (f += d + ",");
                  }),
                  (i +=
                    "" +
                    u +
                    c +
                    '{content:"' +
                    f +
                    `"}/*!sc*/
`);
              }
            }
          }
          return i;
        })(this);
      }),
      e
    );
  })(),
  l_ = /(a)(d)/gi,
  Wy = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function bd(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Wy(t % 52) + n;
  return (Wy(t % 52) + n).replace(l_, "$1-$2");
}
var lo = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Dw = function (e) {
    return lo(5381, e);
  };
function jw(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (es(n) && !Ah(n)) return !1;
  }
  return !0;
}
var u_ = Dw("5.3.9"),
  c_ = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && jw(t)),
        (this.componentId = n),
        (this.baseHash = lo(u_, n)),
        (this.baseStyle = r),
        el.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.componentId,
          i = [];
        if (
          (this.baseStyle &&
            i.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId))
            i.push(this.staticRulesId);
          else {
            var s = Mr(this.rules, t, n, r).join(""),
              a = bd(lo(this.baseHash, s) >>> 0);
            if (!n.hasNameForId(o, a)) {
              var l = r(s, "." + a, void 0, o);
              n.insertRules(o, a, l);
            }
            i.push(a), (this.staticRulesId = a);
          }
        else {
          for (
            var u = this.rules.length,
              c = lo(this.baseHash, r.hash),
              f = "",
              d = 0;
            d < u;
            d++
          ) {
            var m = this.rules[d];
            if (typeof m == "string") f += m;
            else if (m) {
              var p = Mr(m, t, n, r),
                g = Array.isArray(p) ? p.join("") : p;
              (c = lo(c, g + d)), (f += g);
            }
          }
          if (f) {
            var S = bd(c >>> 0);
            if (!n.hasNameForId(o, S)) {
              var y = r(f, "." + S, void 0, o);
              n.insertRules(o, S, y);
            }
            i.push(S);
          }
        }
        return i.join(" ");
      }),
      e
    );
  })(),
  f_ = /^\s*\/\/.*$/gm,
  d_ = [":", "[", ".", "#"];
function p_(e) {
  var t,
    n,
    r,
    o,
    i = e === void 0 ? rr : e,
    s = i.options,
    a = s === void 0 ? rr : s,
    l = i.plugins,
    u = l === void 0 ? Ja : l,
    c = new KL(a),
    f = [],
    d = (function (g) {
      function S(y) {
        if (y)
          try {
            g(y + "}");
          } catch {}
      }
      return function (y, h, v, w, x, b, E, T, O, R) {
        switch (y) {
          case 1:
            if (O === 0 && h.charCodeAt(0) === 64) return g(h + ";"), "";
            break;
          case 2:
            if (T === 0) return h + "/*|*/";
            break;
          case 3:
            switch (T) {
              case 102:
              case 112:
                return g(v[0] + h), "";
              default:
                return h + (R === 0 ? "/*|*/" : "");
            }
          case -2:
            h.split("/*|*/}").forEach(S);
        }
      };
    })(function (g) {
      f.push(g);
    }),
    m = function (g, S, y) {
      return (S === 0 && d_.indexOf(y[n.length]) !== -1) || y.match(o)
        ? g
        : "." + t;
    };
  function p(g, S, y, h) {
    h === void 0 && (h = "&");
    var v = g.replace(f_, ""),
      w = S && y ? y + " " + S + " { " + v + " }" : v;
    return (
      (t = h),
      (n = S),
      (r = new RegExp("\\" + n + "\\b", "g")),
      (o = new RegExp("(\\" + n + "\\b){2,}")),
      c(y || !S ? "" : S, w)
    );
  }
  return (
    c.use(
      [].concat(u, [
        function (g, S, y) {
          g === 2 &&
            y.length &&
            y[0].lastIndexOf(n) > 0 &&
            (y[0] = y[0].replace(r, m));
        },
        d,
        function (g) {
          if (g === -2) {
            var S = f;
            return (f = []), S;
          }
        },
      ])
    ),
    (p.hash = u.length
      ? u
          .reduce(function (g, S) {
            return S.name || Ss(15), lo(g, S.name);
          }, 5381)
          .toString()
      : ""),
    p
  );
}
var Nw = On.createContext();
Nw.Consumer;
var Iw = On.createContext(),
  h_ = (Iw.Consumer, new el()),
  Ad = p_();
function Fw() {
  return P.useContext(Nw) || h_;
}
function Vw() {
  return P.useContext(Iw) || Ad;
}
var m_ = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Ad);
        var s = r.name + i.hash;
        o.hasNameForId(r.id, s) ||
          o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
      }),
        (this.toString = function () {
          return Ss(12, String(r.name));
        }),
        (this.name = t),
        (this.id = "sc-keyframes-" + t),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Ad), this.name + t.hash;
      }),
      e
    );
  })(),
  g_ = /([A-Z])/,
  y_ = /([A-Z])/g,
  v_ = /^ms-/,
  S_ = function (e) {
    return "-" + e.toLowerCase();
  };
function Hy(e) {
  return g_.test(e) ? e.replace(y_, S_).replace(v_, "-ms-") : e;
}
var Ky = function (e) {
  return e == null || e === !1 || e === "";
};
function Mr(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], s = 0, a = e.length; s < a; s += 1)
      (o = Mr(e[s], t, n, r)) !== "" &&
        (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Ky(e)) return "";
  if (Ah(e)) return "." + e.styledComponentId;
  if (es(e)) {
    if (
      typeof (u = e) != "function" ||
      (u.prototype && u.prototype.isReactComponent) ||
      !t
    )
      return e;
    var l = e(t);
    return Mr(l, t, n, r);
  }
  var u;
  return e instanceof m_
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : Td(e)
    ? (function c(f, d) {
        var m,
          p,
          g = [];
        for (var S in f)
          f.hasOwnProperty(S) &&
            !Ky(f[S]) &&
            ((Array.isArray(f[S]) && f[S].isCss) || es(f[S])
              ? g.push(Hy(S) + ":", f[S], ";")
              : Td(f[S])
              ? g.push.apply(g, c(f[S], S))
              : g.push(
                  Hy(S) +
                    ": " +
                    ((m = S),
                    (p = f[S]) == null || typeof p == "boolean" || p === ""
                      ? ""
                      : typeof p != "number" || p === 0 || m in GL
                      ? String(p).trim()
                      : p + "px") +
                    ";"
                ));
        return d ? [d + " {"].concat(g, ["}"]) : g;
      })(e)
    : e.toString();
}
var Gy = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Bw(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return es(e) || Td(e)
    ? Gy(Mr(By(Ja, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == "string"
    ? e
    : Gy(Mr(By(e, n)));
}
var zw = function (e, t, n) {
    return (
      n === void 0 && (n = rr), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  w_ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  x_ = /(^-|-$)/g;
function ac(e) {
  return e.replace(w_, "-").replace(x_, "");
}
var Uw = function (e) {
  return bd(Dw(e) >>> 0);
};
function Hs(e) {
  return typeof e == "string" && !0;
}
var Od = function (e) {
    return (
      typeof e == "function" ||
      (typeof e == "object" && e !== null && !Array.isArray(e))
    );
  },
  C_ = function (e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype";
  };
function P_(e, t, n) {
  var r = e[n];
  Od(t) && Od(r) ? Ww(r, t) : (e[n] = t);
}
function Ww(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var s = i[o];
    if (Od(s)) for (var a in s) C_(a) && P_(e, s[a], a);
  }
  return e;
}
var Rh = On.createContext();
Rh.Consumer;
var lc = {};
function Hw(e, t, n) {
  var r = Ah(e),
    o = !Hs(e),
    i = t.attrs,
    s = i === void 0 ? Ja : i,
    a = t.componentId,
    l =
      a === void 0
        ? (function (h, v) {
            var w = typeof h != "string" ? "sc" : ac(h);
            lc[w] = (lc[w] || 0) + 1;
            var x = w + "-" + Uw("5.3.9" + w + lc[w]);
            return v ? v + "-" + x : x;
          })(t.displayName, t.parentComponentId)
        : a,
    u = t.displayName,
    c =
      u === void 0
        ? (function (h) {
            return Hs(h) ? "styled." + h : "Styled(" + zy(h) + ")";
          })(e)
        : u,
    f =
      t.displayName && t.componentId
        ? ac(t.displayName) + "-" + t.componentId
        : t.componentId || l,
    d = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s,
    m = t.shouldForwardProp;
  r &&
    e.shouldForwardProp &&
    (m = t.shouldForwardProp
      ? function (h, v, w) {
          return e.shouldForwardProp(h, v, w) && t.shouldForwardProp(h, v, w);
        }
      : e.shouldForwardProp);
  var p,
    g = new c_(n, f, r ? e.componentStyle : void 0),
    S = g.isStatic && s.length === 0,
    y = function (h, v) {
      return (function (w, x, b, E) {
        var T = w.attrs,
          O = w.componentStyle,
          R = w.defaultProps,
          H = w.foldedComponentIds,
          te = w.shouldForwardProp,
          de = w.styledComponentId,
          X = w.target,
          q = (function (B, C, Y) {
            B === void 0 && (B = rr);
            var M = nn({}, C, { theme: B }),
              pe = {};
            return (
              Y.forEach(function (Z) {
                var Q,
                  z,
                  Le,
                  ct = Z;
                for (Q in (es(ct) && (ct = ct(M)), ct))
                  M[Q] = pe[Q] =
                    Q === "className"
                      ? ((z = pe[Q]),
                        (Le = ct[Q]),
                        z && Le ? z + " " + Le : z || Le)
                      : ct[Q];
              }),
              [M, pe]
            );
          })(zw(x, P.useContext(Rh), R) || rr, x, T),
          Ve = q[0],
          ke = q[1],
          _ = (function (B, C, Y, M) {
            var pe = Fw(),
              Z = Vw(),
              Q = C
                ? B.generateAndInjectStyles(rr, pe, Z)
                : B.generateAndInjectStyles(Y, pe, Z);
            return Q;
          })(O, E, Ve),
          N = b,
          V = ke.$as || x.$as || ke.as || x.as || X,
          I = Hs(V),
          L = ke !== x ? nn({}, x, {}, ke) : x,
          $ = {};
        for (var D in L)
          D[0] !== "$" &&
            D !== "as" &&
            (D === "forwardedAs"
              ? ($.as = L[D])
              : (te ? te(D, sd, V) : !I || sd(D)) && ($[D] = L[D]));
        return (
          x.style &&
            ke.style !== x.style &&
            ($.style = nn({}, x.style, {}, ke.style)),
          ($.className = Array.prototype
            .concat(H, de, _ !== de ? _ : null, x.className, ke.className)
            .filter(Boolean)
            .join(" ")),
          ($.ref = N),
          P.createElement(V, $)
        );
      })(p, h, v, S);
    };
  return (
    (y.displayName = c),
    ((p = On.forwardRef(y)).attrs = d),
    (p.componentStyle = g),
    (p.displayName = c),
    (p.shouldForwardProp = m),
    (p.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : Ja),
    (p.styledComponentId = f),
    (p.target = r ? e.target : e),
    (p.withComponent = function (h) {
      var v = t.componentId,
        w = (function (b, E) {
          if (b == null) return {};
          var T,
            O,
            R = {},
            H = Object.keys(b);
          for (O = 0; O < H.length; O++)
            (T = H[O]), E.indexOf(T) >= 0 || (R[T] = b[T]);
          return R;
        })(t, ["componentId"]),
        x = v && v + "-" + (Hs(h) ? h : ac(zy(h)));
      return Hw(h, nn({}, w, { attrs: d, componentId: x }), n);
    }),
    Object.defineProperty(p, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (h) {
        this._foldedDefaultProps = r ? Ww({}, e.defaultProps, h) : h;
      },
    }),
    Object.defineProperty(p, "toString", {
      value: function () {
        return "." + p.styledComponentId;
      },
    }),
    o &&
      n2(p, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    p
  );
}
var Rd = function (e) {
  return (function t(n, r, o) {
    if ((o === void 0 && (o = rr), !Ba.isValidElementType(r)))
      return Ss(1, String(r));
    var i = function () {
      return n(r, o, Bw.apply(void 0, arguments));
    };
    return (
      (i.withConfig = function (s) {
        return t(n, r, nn({}, o, {}, s));
      }),
      (i.attrs = function (s) {
        return t(
          n,
          r,
          nn({}, o, {
            attrs: Array.prototype.concat(o.attrs, s).filter(Boolean),
          })
        );
      }),
      i
    );
  })(Hw, e);
};
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "textPath",
  "tspan",
].forEach(function (e) {
  Rd[e] = Rd(e);
});
var E_ = (function () {
  function e(n, r) {
    (this.rules = n),
      (this.componentId = r),
      (this.isStatic = jw(n)),
      el.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return (
    (t.createStyles = function (n, r, o, i) {
      var s = i(Mr(this.rules, r, o, i).join(""), ""),
        a = this.componentId + n;
      o.insertRules(a, a, s);
    }),
    (t.removeStyles = function (n, r) {
      r.clearRules(this.componentId + n);
    }),
    (t.renderStyles = function (n, r, o, i) {
      n > 2 && el.registerId(this.componentId + n),
        this.removeStyles(n, o),
        this.createStyles(n, r, o, i);
    }),
    e
  );
})();
function k_(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = Bw.apply(void 0, [e].concat(n)),
    i = "sc-global-" + Uw(JSON.stringify(o)),
    s = new E_(o, i);
  function a(u) {
    var c = Fw(),
      f = Vw(),
      d = P.useContext(Rh),
      m = P.useRef(c.allocateGSInstance(i)).current;
    return (
      c.server && l(m, u, c, d, f),
      P.useLayoutEffect(
        function () {
          if (!c.server)
            return (
              l(m, u, c, d, f),
              function () {
                return s.removeStyles(m, c);
              }
            );
        },
        [m, u, c, d, f]
      ),
      null
    );
  }
  function l(u, c, f, d, m) {
    if (s.isStatic) s.renderStyles(u, QL, f, m);
    else {
      var p = nn({}, c, { theme: zw(c, d, a.defaultProps) });
      s.renderStyles(u, p, f, m);
    }
  }
  return On.memo(a);
}
const a4 = Rd,
  T_ = k_`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background:#0a131f;
    color: #fafafa;
    font-family: 'League Spartan', sans-serif;
  }

    *::-webkit-scrollbar {
      width: 16px;
  }
  
  *::-webkit-scrollbar-track {
      border-radius: 8px;
      background: transparent; 
  }
  
  *::-webkit-scrollbar-thumb {
      height: 56px;
      border-radius: 8px;
      border: 4px solid transparent;
      background-clip: content-box;
      background-color: #888;
  }
  
  *::-webkit-scrollbar-thumb:hover {
      background-color: #555;
  }

`;
function b_() {
  const e = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  return Kd(A0, {
    children: [
      W(T_, {}),
      W("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          width: "100vw",
        },
        children: W(HL.div, {
          initial: "hidden",
          animate: "visible",
          variants: e,
          children: W(Db, { style: { width: "300px", height: "300px" } }),
        }),
      }),
    ],
  });
}
const A_ = P.lazy(() =>
    Nt(
      () => import("./Loginscreen-8885e8e6.js"),
      ["assets/Loginscreen-8885e8e6.js", "assets/Header-ceecb3b6.js"]
    )
  ),
  O_ = P.lazy(() =>
    Nt(
      () => import("./Registerscreen-bf757f1c.js"),
      ["assets/Registerscreen-bf757f1c.js", "assets/Header-ceecb3b6.js"]
    )
  ),
  R_ = P.lazy(() =>
    Nt(
      () => import("./PremierLeague-39a216d1.js"),
      [
        "assets/PremierLeague-39a216d1.js",
        "assets/Header-ceecb3b6.js",
        "assets/Sidebar-9725e6fe.js",
        "assets/Tabs-dbf2c3e2.js",
      ]
    )
  ),
  L_ = P.lazy(() =>
    Nt(
      () => import("./CL-7b1d5d31.js"),
      [
        "assets/CL-7b1d5d31.js",
        "assets/Header-ceecb3b6.js",
        "assets/Sidebar-9725e6fe.js",
        "assets/Tabs-dbf2c3e2.js",
      ]
    )
  ),
  __ = P.lazy(() =>
    Nt(
      () => import("./Team-7295ccd3.js"),
      [
        "assets/Team-7295ccd3.js",
        "assets/Header-ceecb3b6.js",
        "assets/Tabs-dbf2c3e2.js",
        "assets/Stadium-4746da44.js",
      ]
    )
  ),
  M_ = P.lazy(() =>
    Nt(
      () => import("./SerieA-96b1fb6b.js"),
      [
        "assets/SerieA-96b1fb6b.js",
        "assets/Sidebar-9725e6fe.js",
        "assets/Header-ceecb3b6.js",
        "assets/Tabs-dbf2c3e2.js",
      ]
    )
  ),
  $_ = P.lazy(() =>
    Nt(
      () => import("./Bundesliga-f2648c53.js"),
      [
        "assets/Bundesliga-f2648c53.js",
        "assets/Header-ceecb3b6.js",
        "assets/Sidebar-9725e6fe.js",
        "assets/Tabs-dbf2c3e2.js",
      ]
    )
  ),
  D_ = P.lazy(() =>
    Nt(
      () => import("./Ligue1-0c2be19f.js"),
      [
        "assets/Ligue1-0c2be19f.js",
        "assets/Header-ceecb3b6.js",
        "assets/Sidebar-9725e6fe.js",
        "assets/Tabs-dbf2c3e2.js",
      ]
    )
  ),
  j_ = P.lazy(() =>
    Nt(
      () => import("./LaLiga-2e79115e.js"),
      [
        "assets/LaLiga-2e79115e.js",
        "assets/Header-ceecb3b6.js",
        "assets/Sidebar-9725e6fe.js",
        "assets/Tabs-dbf2c3e2.js",
      ]
    )
  ),
  N_ = P.lazy(() =>
    Nt(
      () => import("./Player-9e255323.js"),
      ["assets/Player-9e255323.js", "assets/Header-ceecb3b6.js"]
    )
  ),
  I_ = P.lazy(() =>
    Nt(
      () => import("./Match-eef4d49a.js"),
      [
        "assets/Match-eef4d49a.js",
        "assets/Header-ceecb3b6.js",
        "assets/Stadium-4746da44.js",
      ]
    )
  ),
  F_ = P.lazy(() =>
    Nt(
      () => import("./Homescreen-70f9e8ef.js"),
      [
        "assets/Homescreen-70f9e8ef.js",
        "assets/Header-ceecb3b6.js",
        "assets/Sidebar-9725e6fe.js",
      ]
    )
  ),
  V_ = () =>
    Kd(QE, {
      children: [
        W(vt, { path: "/login", element: W(A_, {}) }),
        W(vt, { path: "/register", element: W(O_, {}) }),
        W(vt, { path: "/PL", element: W(R_, {}) }),
        W(vt, { path: "/CL", element: W(L_, {}) }),
        W(vt, { path: "/team/:team_id", element: W(__, {}) }),
        W(vt, { path: "/SA", element: W(M_, {}) }),
        W(vt, { path: "/BL1", element: W($_, {}) }),
        W(vt, { path: "/FL1", element: W(D_, {}) }),
        W(vt, { path: "/PD", element: W(j_, {}) }),
        W(vt, { path: "/player/:player_id", element: W(N_, {}) }),
        W(vt, { path: "/match/:match_id", element: W(I_, {}) }),
        W(vt, { path: "/", element: W(F_, {}) }),
      ],
    });
function B_() {
  return W(P.Suspense, { fallback: W(b_, {}), children: W(V_, {}) });
}
function Wt(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (o) {
              return "'" + o + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function lr(e) {
  return !!e && !!e[ve];
}
function An(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var o = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        o === Object ||
        (typeof o == "function" && Function.toString.call(o) === X_)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[e0] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[e0]) ||
      Lh(e) ||
      _h(e))
  );
}
function $r(e, t, n) {
  n === void 0 && (n = !1),
    Fo(e) === 0
      ? (n ? Object.keys : wo)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, o) {
          return t(o, r, e);
        });
}
function Fo(e) {
  var t = e[ve];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Lh(e)
    ? 2
    : _h(e)
    ? 3
    : 0;
}
function So(e, t) {
  return Fo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function z_(e, t) {
  return Fo(e) === 2 ? e.get(t) : e[t];
}
function Kw(e, t, n) {
  var r = Fo(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Gw(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Lh(e) {
  return Y_ && e instanceof Map;
}
function _h(e) {
  return Q_ && e instanceof Set;
}
function Sr(e) {
  return e.o || e.t;
}
function Mh(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Qw(e);
  delete t[ve];
  for (var n = wo(t), r = 0; r < n.length; r++) {
    var o = n[r],
      i = t[o];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function $h(e, t) {
  return (
    t === void 0 && (t = !1),
    Dh(e) ||
      lr(e) ||
      !An(e) ||
      (Fo(e) > 1 && (e.set = e.add = e.clear = e.delete = U_),
      Object.freeze(e),
      t &&
        $r(
          e,
          function (n, r) {
            return $h(r, !0);
          },
          !0
        )),
    e
  );
}
function U_() {
  Wt(2);
}
function Dh(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function un(e) {
  var t = $d[e];
  return t || Wt(18, e), t;
}
function W_(e, t) {
  $d[e] || ($d[e] = t);
}
function Ld() {
  return ts;
}
function uc(e, t) {
  t && (un("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function tl(e) {
  _d(e), e.p.forEach(H_), (e.p = null);
}
function _d(e) {
  e === ts && (ts = e.l);
}
function Yy(e) {
  return (ts = { p: [], l: ts, h: e, m: !0, _: 0 });
}
function H_(e) {
  var t = e[ve];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function cc(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.g || un("ES5").S(t, e, r),
    r
      ? (n[ve].P && (tl(t), Wt(4)),
        An(e) && ((e = nl(t, e)), t.l || rl(t, e)),
        t.u && un("Patches").M(n[ve].t, e, t.u, t.s))
      : (e = nl(t, n, [])),
    tl(t),
    t.u && t.v(t.u, t.s),
    e !== Yw ? e : void 0
  );
}
function nl(e, t, n) {
  if (Dh(t)) return t;
  var r = t[ve];
  if (!r)
    return (
      $r(
        t,
        function (a, l) {
          return Qy(e, r, t, a, l, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return rl(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var o = r.i === 4 || r.i === 5 ? (r.o = Mh(r.k)) : r.o,
      i = o,
      s = !1;
    r.i === 3 && ((i = new Set(o)), o.clear(), (s = !0)),
      $r(i, function (a, l) {
        return Qy(e, r, o, a, l, n, s);
      }),
      rl(e, o, !1),
      n && e.u && un("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function Qy(e, t, n, r, o, i, s) {
  if (lr(o)) {
    var a = nl(e, o, i && t && t.i !== 3 && !So(t.R, r) ? i.concat(r) : void 0);
    if ((Kw(n, r, a), !lr(a))) return;
    e.m = !1;
  } else s && n.add(o);
  if (An(o) && !Dh(o)) {
    if (!e.h.D && e._ < 1) return;
    nl(e, o), (t && t.A.l) || rl(e, o);
  }
}
function rl(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && $h(t, n);
}
function fc(e, t) {
  var n = e[ve];
  return (n ? Sr(n) : e)[t];
}
function Xy(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function zn(e) {
  e.P || ((e.P = !0), e.l && zn(e.l));
}
function dc(e) {
  e.o || (e.o = Mh(e.t));
}
function Md(e, t, n) {
  var r = Lh(t)
    ? un("MapSet").F(t, n)
    : _h(t)
    ? un("MapSet").T(t, n)
    : e.g
    ? (function (o, i) {
        var s = Array.isArray(o),
          a = {
            i: s ? 1 : 0,
            A: i ? i.A : Ld(),
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          l = a,
          u = ns;
        s && ((l = [a]), (u = li));
        var c = Proxy.revocable(l, u),
          f = c.revoke,
          d = c.proxy;
        return (a.k = d), (a.j = f), d;
      })(t, n)
    : un("ES5").J(t, n);
  return (n ? n.A : Ld()).p.push(r), r;
}
function K_(e) {
  return (
    lr(e) || Wt(22, e),
    (function t(n) {
      if (!An(n)) return n;
      var r,
        o = n[ve],
        i = Fo(n);
      if (o) {
        if (!o.P && (o.i < 4 || !un("ES5").K(o))) return o.t;
        (o.I = !0), (r = qy(n, i)), (o.I = !1);
      } else r = qy(n, i);
      return (
        $r(r, function (s, a) {
          (o && z_(o.t, s) === a) || Kw(r, s, t(a));
        }),
        i === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function qy(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Mh(e);
}
function G_() {
  function e(i, s) {
    var a = o[i];
    return (
      a
        ? (a.enumerable = s)
        : (o[i] = a =
            {
              configurable: !0,
              enumerable: s,
              get: function () {
                var l = this[ve];
                return ns.get(l, i);
              },
              set: function (l) {
                var u = this[ve];
                ns.set(u, i, l);
              },
            }),
      a
    );
  }
  function t(i) {
    for (var s = i.length - 1; s >= 0; s--) {
      var a = i[s][ve];
      if (!a.P)
        switch (a.i) {
          case 5:
            r(a) && zn(a);
            break;
          case 4:
            n(a) && zn(a);
        }
    }
  }
  function n(i) {
    for (var s = i.t, a = i.k, l = wo(a), u = l.length - 1; u >= 0; u--) {
      var c = l[u];
      if (c !== ve) {
        var f = s[c];
        if (f === void 0 && !So(s, c)) return !0;
        var d = a[c],
          m = d && d[ve];
        if (m ? m.t !== f : !Gw(d, f)) return !0;
      }
    }
    var p = !!s[ve];
    return l.length !== wo(s).length + (p ? 0 : 1);
  }
  function r(i) {
    var s = i.k;
    if (s.length !== i.t.length) return !0;
    var a = Object.getOwnPropertyDescriptor(s, s.length - 1);
    if (a && !a.get) return !0;
    for (var l = 0; l < s.length; l++) if (!s.hasOwnProperty(l)) return !0;
    return !1;
  }
  var o = {};
  W_("ES5", {
    J: function (i, s) {
      var a = Array.isArray(i),
        l = (function (c, f) {
          if (c) {
            for (var d = Array(f.length), m = 0; m < f.length; m++)
              Object.defineProperty(d, "" + m, e(m, !0));
            return d;
          }
          var p = Qw(f);
          delete p[ve];
          for (var g = wo(p), S = 0; S < g.length; S++) {
            var y = g[S];
            p[y] = e(y, c || !!p[y].enumerable);
          }
          return Object.create(Object.getPrototypeOf(f), p);
        })(a, i),
        u = {
          i: a ? 5 : 4,
          A: s ? s.A : Ld(),
          P: !1,
          I: !1,
          R: {},
          l: s,
          t: i,
          k: l,
          o: null,
          O: !1,
          C: !1,
        };
      return Object.defineProperty(l, ve, { value: u, writable: !0 }), l;
    },
    S: function (i, s, a) {
      a
        ? lr(s) && s[ve].A === i && t(i.p)
        : (i.u &&
            (function l(u) {
              if (u && typeof u == "object") {
                var c = u[ve];
                if (c) {
                  var f = c.t,
                    d = c.k,
                    m = c.R,
                    p = c.i;
                  if (p === 4)
                    $r(d, function (v) {
                      v !== ve &&
                        (f[v] !== void 0 || So(f, v)
                          ? m[v] || l(d[v])
                          : ((m[v] = !0), zn(c)));
                    }),
                      $r(f, function (v) {
                        d[v] !== void 0 || So(d, v) || ((m[v] = !1), zn(c));
                      });
                  else if (p === 5) {
                    if ((r(c) && (zn(c), (m.length = !0)), d.length < f.length))
                      for (var g = d.length; g < f.length; g++) m[g] = !1;
                    else for (var S = f.length; S < d.length; S++) m[S] = !0;
                    for (
                      var y = Math.min(d.length, f.length), h = 0;
                      h < y;
                      h++
                    )
                      d.hasOwnProperty(h) || (m[h] = !0),
                        m[h] === void 0 && l(d[h]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i);
    },
  });
}
var Jy,
  ts,
  jh = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  Y_ = typeof Map < "u",
  Q_ = typeof Set < "u",
  Zy = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  Yw = jh
    ? Symbol.for("immer-nothing")
    : (((Jy = {})["immer-nothing"] = !0), Jy),
  e0 = jh ? Symbol.for("immer-draftable") : "__$immer_draftable",
  ve = jh ? Symbol.for("immer-state") : "__$immer_state",
  X_ = "" + Object.prototype.constructor,
  wo =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  Qw =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        wo(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  $d = {},
  ns = {
    get: function (e, t) {
      if (t === ve) return e;
      var n = Sr(e);
      if (!So(n, t))
        return (function (o, i, s) {
          var a,
            l = Xy(i, s);
          return l
            ? "value" in l
              ? l.value
              : (a = l.get) === null || a === void 0
              ? void 0
              : a.call(o.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !An(r)
        ? r
        : r === fc(e.t, t)
        ? (dc(e), (e.o[t] = Md(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in Sr(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Sr(e));
    },
    set: function (e, t, n) {
      var r = Xy(Sr(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var o = fc(Sr(e), t),
          i = o == null ? void 0 : o[ve];
        if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (Gw(n, o) && (n !== void 0 || So(e.t, t))) return !0;
        dc(e), zn(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        fc(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), dc(e), zn(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Sr(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Wt(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Wt(12);
    },
  },
  li = {};
$r(ns, function (e, t) {
  li[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (li.deleteProperty = function (e, t) {
    return li.set.call(this, e, t, void 0);
  }),
  (li.set = function (e, t, n) {
    return ns.set.call(this, e[0], t, n, e[0]);
  });
var q_ = (function () {
    function e(n) {
      var r = this;
      (this.g = Zy),
        (this.D = !0),
        (this.produce = function (o, i, s) {
          if (typeof o == "function" && typeof i != "function") {
            var a = i;
            i = o;
            var l = r;
            return function (g) {
              var S = this;
              g === void 0 && (g = a);
              for (
                var y = arguments.length, h = Array(y > 1 ? y - 1 : 0), v = 1;
                v < y;
                v++
              )
                h[v - 1] = arguments[v];
              return l.produce(g, function (w) {
                var x;
                return (x = i).call.apply(x, [S, w].concat(h));
              });
            };
          }
          var u;
          if (
            (typeof i != "function" && Wt(6),
            s !== void 0 && typeof s != "function" && Wt(7),
            An(o))
          ) {
            var c = Yy(r),
              f = Md(r, o, void 0),
              d = !0;
            try {
              (u = i(f)), (d = !1);
            } finally {
              d ? tl(c) : _d(c);
            }
            return typeof Promise < "u" && u instanceof Promise
              ? u.then(
                  function (g) {
                    return uc(c, s), cc(g, c);
                  },
                  function (g) {
                    throw (tl(c), g);
                  }
                )
              : (uc(c, s), cc(u, c));
          }
          if (!o || typeof o != "object") {
            if (
              ((u = i(o)) === void 0 && (u = o),
              u === Yw && (u = void 0),
              r.D && $h(u, !0),
              s)
            ) {
              var m = [],
                p = [];
              un("Patches").M(o, u, m, p), s(m, p);
            }
            return u;
          }
          Wt(21, o);
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == "function")
            return function (u) {
              for (
                var c = arguments.length, f = Array(c > 1 ? c - 1 : 0), d = 1;
                d < c;
                d++
              )
                f[d - 1] = arguments[d];
              return r.produceWithPatches(u, function (m) {
                return o.apply(void 0, [m].concat(f));
              });
            };
          var s,
            a,
            l = r.produce(o, i, function (u, c) {
              (s = u), (a = c);
            });
          return typeof Promise < "u" && l instanceof Promise
            ? l.then(function (u) {
                return [u, s, a];
              })
            : [l, s, a];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        An(n) || Wt(8), lr(n) && (n = K_(n));
        var r = Yy(this),
          o = Md(this, n, void 0);
        return (o[ve].C = !0), _d(r), o;
      }),
      (t.finishDraft = function (n, r) {
        var o = n && n[ve],
          i = o.A;
        return uc(i, r), cc(void 0, i);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Zy && Wt(20), (this.g = n);
      }),
      (t.applyPatches = function (n, r) {
        var o;
        for (o = r.length - 1; o >= 0; o--) {
          var i = r[o];
          if (i.path.length === 0 && i.op === "replace") {
            n = i.value;
            break;
          }
        }
        o > -1 && (r = r.slice(o + 1));
        var s = un("Patches").$;
        return lr(n)
          ? s(n, r)
          : this.produce(n, function (a) {
              return s(a, r);
            });
      }),
      e
    );
  })(),
  Tt = new q_(),
  Xw = Tt.produce;
Tt.produceWithPatches.bind(Tt);
Tt.setAutoFreeze.bind(Tt);
Tt.setUseProxies.bind(Tt);
Tt.applyPatches.bind(Tt);
Tt.createDraft.bind(Tt);
Tt.finishDraft.bind(Tt);
function rs(e) {
  return (
    (rs =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    rs(e)
  );
}
function J_(e, t) {
  if (rs(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (rs(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Z_(e) {
  var t = J_(e, "string");
  return rs(t) === "symbol" ? t : String(t);
}
function eM(e, t, n) {
  return (
    (t = Z_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function t0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function n0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? t0(Object(n), !0).forEach(function (r) {
          eM(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : t0(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function tt(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var r0 = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  pc = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  ol = {
    INIT: "@@redux/INIT" + pc(),
    REPLACE: "@@redux/REPLACE" + pc(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + pc();
    },
  };
function tM(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function qw(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(tt(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(tt(1));
    return n(qw)(e, t);
  }
  if (typeof e != "function") throw new Error(tt(2));
  var o = e,
    i = t,
    s = [],
    a = s,
    l = !1;
  function u() {
    a === s && (a = s.slice());
  }
  function c() {
    if (l) throw new Error(tt(3));
    return i;
  }
  function f(g) {
    if (typeof g != "function") throw new Error(tt(4));
    if (l) throw new Error(tt(5));
    var S = !0;
    return (
      u(),
      a.push(g),
      function () {
        if (S) {
          if (l) throw new Error(tt(6));
          (S = !1), u();
          var h = a.indexOf(g);
          a.splice(h, 1), (s = null);
        }
      }
    );
  }
  function d(g) {
    if (!tM(g)) throw new Error(tt(7));
    if (typeof g.type > "u") throw new Error(tt(8));
    if (l) throw new Error(tt(9));
    try {
      (l = !0), (i = o(i, g));
    } finally {
      l = !1;
    }
    for (var S = (s = a), y = 0; y < S.length; y++) {
      var h = S[y];
      h();
    }
    return g;
  }
  function m(g) {
    if (typeof g != "function") throw new Error(tt(10));
    (o = g), d({ type: ol.REPLACE });
  }
  function p() {
    var g,
      S = f;
    return (
      (g = {
        subscribe: function (h) {
          if (typeof h != "object" || h === null) throw new Error(tt(11));
          function v() {
            h.next && h.next(c());
          }
          v();
          var w = S(v);
          return { unsubscribe: w };
        },
      }),
      (g[r0] = function () {
        return this;
      }),
      g
    );
  }
  return (
    d({ type: ol.INIT }),
    (r = { dispatch: d, subscribe: f, getState: c, replaceReducer: m }),
    (r[r0] = p),
    r
  );
}
function nM(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: ol.INIT });
    if (typeof r > "u") throw new Error(tt(12));
    if (typeof n(void 0, { type: ol.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(tt(13));
  });
}
function rM(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  var i = Object.keys(n),
    s;
  try {
    nM(n);
  } catch (a) {
    s = a;
  }
  return function (l, u) {
    if ((l === void 0 && (l = {}), s)) throw s;
    for (var c = !1, f = {}, d = 0; d < i.length; d++) {
      var m = i[d],
        p = n[m],
        g = l[m],
        S = p(g, u);
      if (typeof S > "u") throw (u && u.type, new Error(tt(14)));
      (f[m] = S), (c = c || S !== g);
    }
    return (c = c || i.length !== Object.keys(l).length), c ? f : l;
  };
}
function il() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments));
        };
      });
}
function oM() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(tt(15));
        },
        s = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        a = t.map(function (l) {
          return l(s);
        });
      return (
        (i = il.apply(void 0, a)(o.dispatch)),
        n0(n0({}, o), {}, { dispatch: i })
      );
    };
  };
}
function Jw(e) {
  var t = function (r) {
    var o = r.dispatch,
      i = r.getState;
    return function (s) {
      return function (a) {
        return typeof a == "function" ? a(o, i, e) : s(a);
      };
    };
  };
  return t;
}
var Zw = Jw();
Zw.withExtraArgument = Jw;
const o0 = Zw;
var iM =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o;
              }) ||
            function (r, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  sM =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        s;
      return (
        (s = { next: a(0), throw: a(1), return: a(2) }),
        typeof Symbol == "function" &&
          (s[Symbol.iterator] = function () {
            return this;
          }),
        s
      );
      function a(u) {
        return function (c) {
          return l([u, c]);
        };
      }
      function l(u) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  u[0] & 2
                    ? o.return
                    : u[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, u[1])).done)
            )
              return i;
            switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
              case 0:
              case 1:
                i = u;
                break;
              case 4:
                return n.label++, { value: u[1], done: !1 };
              case 5:
                n.label++, (o = u[1]), (u = [0]);
                continue;
              case 7:
                (u = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (u[0] === 6 || u[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                  n.label = u[1];
                  break;
                }
                if (u[0] === 6 && n.label < i[1]) {
                  (n.label = i[1]), (i = u);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(u);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            u = t.call(e, n);
          } catch (c) {
            (u = [6, c]), (o = 0);
          } finally {
            r = i = 0;
          }
        if (u[0] & 5) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      }
    },
  sl =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  aM = Object.defineProperty,
  lM = Object.defineProperties,
  uM = Object.getOwnPropertyDescriptors,
  i0 = Object.getOwnPropertySymbols,
  cM = Object.prototype.hasOwnProperty,
  fM = Object.prototype.propertyIsEnumerable,
  s0 = function (e, t, n) {
    return t in e
      ? aM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  or = function (e, t) {
    for (var n in t || (t = {})) cM.call(t, n) && s0(e, n, t[n]);
    if (i0)
      for (var r = 0, o = i0(t); r < o.length; r++) {
        var n = o[r];
        fM.call(t, n) && s0(e, n, t[n]);
      }
    return e;
  },
  hc = function (e, t) {
    return lM(e, uM(t));
  },
  dM = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (l) {
          try {
            a(n.next(l));
          } catch (u) {
            o(u);
          }
        },
        s = function (l) {
          try {
            a(n.throw(l));
          } catch (u) {
            o(u);
          }
        },
        a = function (l) {
          return l.done ? r(l.value) : Promise.resolve(l.value).then(i, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  pM =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? il
              : il.apply(null, arguments);
        };
function hM(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var mM = (function (e) {
  iM(t, e);
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    var o = e.apply(this, n) || this;
    return Object.setPrototypeOf(o, t.prototype), o;
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return e.prototype.concat.apply(this, n);
    }),
    (t.prototype.prepend = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return n.length === 1 && Array.isArray(n[0])
        ? new (t.bind.apply(t, sl([void 0], n[0].concat(this))))()
        : new (t.bind.apply(t, sl([void 0], n.concat(this))))();
    }),
    t
  );
})(Array);
function Dd(e) {
  return An(e) ? Xw(e, function () {}) : e;
}
function gM(e) {
  return typeof e == "boolean";
}
function yM() {
  return function (t) {
    return vM(t);
  };
}
function vM(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new mM();
  return (
    n && (gM(n) ? r.push(o0) : r.push(o0.withExtraArgument(n.extraArgument))), r
  );
}
var SM = !0;
function wM(e) {
  var t = yM(),
    n = e || {},
    r = n.reducer,
    o = r === void 0 ? void 0 : r,
    i = n.middleware,
    s = i === void 0 ? t() : i,
    a = n.devTools,
    l = a === void 0 ? !0 : a,
    u = n.preloadedState,
    c = u === void 0 ? void 0 : u,
    f = n.enhancers,
    d = f === void 0 ? void 0 : f,
    m;
  if (typeof o == "function") m = o;
  else if (hM(o)) m = rM(o);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var p = s;
  typeof p == "function" && (p = p(t));
  var g = oM.apply(void 0, p),
    S = il;
  l && (S = pM(or({ trace: !SM }, typeof l == "object" && l)));
  var y = [g];
  Array.isArray(d) ? (y = sl([g], d)) : typeof d == "function" && (y = d(y));
  var h = S.apply(void 0, y);
  return qw(m, c, h);
}
function wn(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    if (t) {
      var i = t.apply(void 0, r);
      if (!i) throw new Error("prepareAction did not return an object");
      return or(
        or({ type: e, payload: i.payload }, "meta" in i && { meta: i.meta }),
        "error" in i && { error: i.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function ex(e) {
  var t = {},
    n = [],
    r,
    o = {
      addCase: function (i, s) {
        var a = typeof i == "string" ? i : i.type;
        if (a in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[a] = s), o;
      },
      addMatcher: function (i, s) {
        return n.push({ matcher: i, reducer: s }), o;
      },
      addDefaultCase: function (i) {
        return (r = i), o;
      },
    };
  return e(o), [t, n, r];
}
function xM(e) {
  return typeof e == "function";
}
function CM(e, t, n, r) {
  n === void 0 && (n = []);
  var o = typeof t == "function" ? ex(t) : [t, n, r],
    i = o[0],
    s = o[1],
    a = o[2],
    l;
  if (xM(e))
    l = function () {
      return Dd(e());
    };
  else {
    var u = Dd(e);
    l = function () {
      return u;
    };
  }
  function c(f, d) {
    f === void 0 && (f = l());
    var m = sl(
      [i[d.type]],
      s
        .filter(function (p) {
          var g = p.matcher;
          return g(d);
        })
        .map(function (p) {
          var g = p.reducer;
          return g;
        })
    );
    return (
      m.filter(function (p) {
        return !!p;
      }).length === 0 && (m = [a]),
      m.reduce(function (p, g) {
        if (g)
          if (lr(p)) {
            var S = p,
              y = g(S, d);
            return y === void 0 ? p : y;
          } else {
            if (An(p))
              return Xw(p, function (h) {
                return g(h, d);
              });
            var y = g(p, d);
            if (y === void 0) {
              if (p === null) return p;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return y;
          }
        return p;
      }, f)
    );
  }
  return (c.getInitialState = l), c;
}
function PM(e, t) {
  return e + "/" + t;
}
function ut(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : Dd(e.initialState),
    r = e.reducers || {},
    o = Object.keys(r),
    i = {},
    s = {},
    a = {};
  o.forEach(function (c) {
    var f = r[c],
      d = PM(t, c),
      m,
      p;
    "reducer" in f ? ((m = f.reducer), (p = f.prepare)) : (m = f),
      (i[c] = m),
      (s[d] = m),
      (a[c] = p ? wn(d, p) : wn(d));
  });
  function l() {
    var c =
        typeof e.extraReducers == "function"
          ? ex(e.extraReducers)
          : [e.extraReducers],
      f = c[0],
      d = f === void 0 ? {} : f,
      m = c[1],
      p = m === void 0 ? [] : m,
      g = c[2],
      S = g === void 0 ? void 0 : g,
      y = or(or({}, d), s);
    return CM(n, function (h) {
      for (var v in y) h.addCase(v, y[v]);
      for (var w = 0, x = p; w < x.length; w++) {
        var b = x[w];
        h.addMatcher(b.matcher, b.reducer);
      }
      S && h.addDefaultCase(S);
    });
  }
  var u;
  return {
    name: t,
    reducer: function (c, f) {
      return u || (u = l()), u(c, f);
    },
    actions: a,
    caseReducers: i,
    getInitialState: function () {
      return u || (u = l()), u.getInitialState();
    },
  };
}
var EM = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  kM = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += EM[(Math.random() * 64) | 0];
    return t;
  },
  TM = ["name", "message", "stack", "code"],
  mc = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  a0 = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  bM = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = TM; n < r.length; n++) {
        var o = r[n];
        typeof e[o] == "string" && (t[o] = e[o]);
      }
      return t;
    }
    return { message: String(e) };
  },
  K = (function () {
    function e(t, n, r) {
      var o = wn(t + "/fulfilled", function (u, c, f, d) {
          return {
            payload: u,
            meta: hc(or({}, d || {}), {
              arg: f,
              requestId: c,
              requestStatus: "fulfilled",
            }),
          };
        }),
        i = wn(t + "/pending", function (u, c, f) {
          return {
            payload: void 0,
            meta: hc(or({}, f || {}), {
              arg: c,
              requestId: u,
              requestStatus: "pending",
            }),
          };
        }),
        s = wn(t + "/rejected", function (u, c, f, d, m) {
          return {
            payload: d,
            error: ((r && r.serializeError) || bM)(u || "Rejected"),
            meta: hc(or({}, m || {}), {
              arg: f,
              requestId: c,
              rejectedWithValue: !!d,
              requestStatus: "rejected",
              aborted: (u == null ? void 0 : u.name) === "AbortError",
              condition: (u == null ? void 0 : u.name) === "ConditionError",
            }),
          };
        }),
        a =
          typeof AbortController < "u"
            ? AbortController
            : (function () {
                function u() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (u.prototype.abort = function () {}), u;
              })();
      function l(u) {
        return function (c, f, d) {
          var m = r != null && r.idGenerator ? r.idGenerator(u) : kM(),
            p = new a(),
            g;
          function S(h) {
            (g = h), p.abort();
          }
          var y = (function () {
            return dM(this, null, function () {
              var h, v, w, x, b, E, T;
              return sM(this, function (O) {
                switch (O.label) {
                  case 0:
                    return (
                      O.trys.push([0, 4, , 5]),
                      (x =
                        (h = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : h.call(r, u, { getState: f, extra: d })),
                      OM(x) ? [4, x] : [3, 2]
                    );
                  case 1:
                    (x = O.sent()), (O.label = 2);
                  case 2:
                    if (x === !1 || p.signal.aborted)
                      throw {
                        name: "ConditionError",
                        message:
                          "Aborted due to condition callback returning false.",
                      };
                    return (
                      (b = new Promise(function (R, H) {
                        return p.signal.addEventListener("abort", function () {
                          return H({
                            name: "AbortError",
                            message: g || "Aborted",
                          });
                        });
                      })),
                      c(
                        i(
                          m,
                          u,
                          (v = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : v.call(
                                r,
                                { requestId: m, arg: u },
                                { getState: f, extra: d }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          b,
                          Promise.resolve(
                            n(u, {
                              dispatch: c,
                              getState: f,
                              extra: d,
                              requestId: m,
                              signal: p.signal,
                              abort: S,
                              rejectWithValue: function (R, H) {
                                return new mc(R, H);
                              },
                              fulfillWithValue: function (R, H) {
                                return new a0(R, H);
                              },
                            })
                          ).then(function (R) {
                            if (R instanceof mc) throw R;
                            return R instanceof a0
                              ? o(R.payload, m, u, R.meta)
                              : o(R, m, u);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (w = O.sent()), [3, 5];
                  case 4:
                    return (
                      (E = O.sent()),
                      (w =
                        E instanceof mc
                          ? s(null, m, u, E.payload, E.meta)
                          : s(E, m, u)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (T =
                        r &&
                        !r.dispatchConditionRejection &&
                        s.match(w) &&
                        w.meta.condition),
                      T || c(w),
                      [2, w]
                    );
                }
              });
            });
          })();
          return Object.assign(y, {
            abort: S,
            requestId: m,
            arg: u,
            unwrap: function () {
              return y.then(AM);
            },
          });
        };
      }
      return Object.assign(l, {
        pending: i,
        rejected: s,
        fulfilled: o,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function AM(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function OM(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Nh = "listenerMiddleware";
wn(Nh + "/add");
wn(Nh + "/removeAll");
wn(Nh + "/remove");
var l0;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
G_();
function tx(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: nx } = Object.prototype,
  { getPrototypeOf: Ih } = Object,
  Fh = ((e) => (t) => {
    const n = nx.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ln = (e) => ((e = e.toLowerCase()), (t) => Fh(t) === e),
  du = (e) => (t) => typeof t === e,
  { isArray: Vo } = Array,
  os = du("undefined");
function RM(e) {
  return (
    e !== null &&
    !os(e) &&
    e.constructor !== null &&
    !os(e.constructor) &&
    ur(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const rx = Ln("ArrayBuffer");
function LM(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && rx(e.buffer)),
    t
  );
}
const _M = du("string"),
  ur = du("function"),
  ox = du("number"),
  Vh = (e) => e !== null && typeof e == "object",
  MM = (e) => e === !0 || e === !1,
  ca = (e) => {
    if (Fh(e) !== "object") return !1;
    const t = Ih(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  $M = Ln("Date"),
  DM = Ln("File"),
  jM = Ln("Blob"),
  NM = Ln("FileList"),
  IM = (e) => Vh(e) && ur(e.pipe),
  FM = (e) => {
    const t = "[object FormData]";
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        nx.call(e) === t ||
        (ur(e.toString) && e.toString() === t))
    );
  },
  VM = Ln("URLSearchParams"),
  BM = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ws(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Vo(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let a;
    for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function ix(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const sx = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  ax = (e) => !os(e) && e !== sx;
function jd() {
  const { caseless: e } = (ax(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && ix(t, o)) || o;
      ca(t[i]) && ca(r)
        ? (t[i] = jd(t[i], r))
        : ca(r)
        ? (t[i] = jd({}, r))
        : Vo(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ws(arguments[r], n);
  return t;
}
const zM = (e, t, n, { allOwnKeys: r } = {}) => (
    ws(
      t,
      (o, i) => {
        n && ur(o) ? (e[i] = tx(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  UM = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  WM = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  HM = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && Ih(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  KM = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  GM = (e) => {
    if (!e) return null;
    if (Vo(e)) return e;
    let t = e.length;
    if (!ox(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  YM = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ih(Uint8Array)),
  QM = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  XM = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  qM = Ln("HTMLFormElement"),
  JM = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  u0 = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  ZM = Ln("RegExp"),
  lx = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ws(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o);
    }),
      Object.defineProperties(e, r);
  },
  e3 = (e) => {
    lx(e, (t, n) => {
      if (ur(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ur(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  t3 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Vo(e) ? r(e) : r(String(e).split(t)), n;
  },
  n3 = () => {},
  r3 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  gc = "abcdefghijklmnopqrstuvwxyz",
  c0 = "0123456789",
  ux = { DIGIT: c0, ALPHA: gc, ALPHA_DIGIT: gc + gc.toUpperCase() + c0 },
  o3 = (e = 16, t = ux.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function i3(e) {
  return !!(
    e &&
    ur(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const s3 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Vh(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = Vo(r) ? [] : {};
            return (
              ws(r, (s, a) => {
                const l = n(s, o + 1);
                !os(l) && (i[a] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  k = {
    isArray: Vo,
    isArrayBuffer: rx,
    isBuffer: RM,
    isFormData: FM,
    isArrayBufferView: LM,
    isString: _M,
    isNumber: ox,
    isBoolean: MM,
    isObject: Vh,
    isPlainObject: ca,
    isUndefined: os,
    isDate: $M,
    isFile: DM,
    isBlob: jM,
    isRegExp: ZM,
    isFunction: ur,
    isStream: IM,
    isURLSearchParams: VM,
    isTypedArray: YM,
    isFileList: NM,
    forEach: ws,
    merge: jd,
    extend: zM,
    trim: BM,
    stripBOM: UM,
    inherits: WM,
    toFlatObject: HM,
    kindOf: Fh,
    kindOfTest: Ln,
    endsWith: KM,
    toArray: GM,
    forEachEntry: QM,
    matchAll: XM,
    isHTMLForm: qM,
    hasOwnProperty: u0,
    hasOwnProp: u0,
    reduceDescriptors: lx,
    freezeMethods: e3,
    toObjectSet: t3,
    toCamelCase: JM,
    noop: n3,
    toFiniteNumber: r3,
    findKey: ix,
    global: sx,
    isContextDefined: ax,
    ALPHABET: ux,
    generateString: o3,
    isSpecCompliantForm: i3,
    toJSONObject: s3,
  };
function ne(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
k.inherits(ne, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: k.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const cx = ne.prototype,
  fx = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  fx[e] = { value: e };
});
Object.defineProperties(ne, fx);
Object.defineProperty(cx, "isAxiosError", { value: !0 });
ne.from = (e, t, n, r, o, i) => {
  const s = Object.create(cx);
  return (
    k.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    ne.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const a3 = null;
function Nd(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function dx(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function f0(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = dx(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function l3(e) {
  return k.isArray(e) && !e.some(Nd);
}
const u3 = k.toFlatObject(k, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function pu(e, t, n) {
  if (!k.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = k.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, S) {
        return !k.isUndefined(S[g]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && k.isSpecCompliantForm(t);
  if (!k.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (k.isDate(p)) return p.toISOString();
    if (!l && k.isBlob(p))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(p) || k.isTypedArray(p)
      ? l && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function c(p, g, S) {
    let y = p;
    if (p && !S && typeof p == "object") {
      if (k.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (k.isArray(p) && l3(p)) ||
        ((k.isFileList(p) || k.endsWith(g, "[]")) && (y = k.toArray(p)))
      )
        return (
          (g = dx(g)),
          y.forEach(function (v, w) {
            !(k.isUndefined(v) || v === null) &&
              t.append(
                s === !0 ? f0([g], w, i) : s === null ? g : g + "[]",
                u(v)
              );
          }),
          !1
        );
    }
    return Nd(p) ? !0 : (t.append(f0(S, g, i), u(p)), !1);
  }
  const f = [],
    d = Object.assign(u3, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Nd,
    });
  function m(p, g) {
    if (!k.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(p),
        k.forEach(p, function (y, h) {
          (!(k.isUndefined(y) || y === null) &&
            o.call(t, y, k.isString(h) ? h.trim() : h, g, d)) === !0 &&
            m(y, g ? g.concat(h) : [h]);
        }),
        f.pop();
    }
  }
  if (!k.isObject(e)) throw new TypeError("data must be an object");
  return m(e), t;
}
function d0(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Bh(e, t) {
  (this._pairs = []), e && pu(e, this, t);
}
const px = Bh.prototype;
px.append = function (t, n) {
  this._pairs.push([t, n]);
};
px.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, d0);
      }
    : d0;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function c3(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function hx(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || c3,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = k.isURLSearchParams(t) ? t.toString() : new Bh(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class f3 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    k.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const p0 = f3,
  mx = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  d3 = typeof URLSearchParams < "u" ? URLSearchParams : Bh,
  p3 = typeof FormData < "u" ? FormData : null,
  h3 = typeof Blob < "u" ? Blob : null,
  m3 = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  g3 = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  rn = {
    isBrowser: !0,
    classes: { URLSearchParams: d3, FormData: p3, Blob: h3 },
    isStandardBrowserEnv: m3,
    isStandardBrowserWebWorkerEnv: g3,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function y3(e, t) {
  return pu(
    e,
    new rn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return rn.isNode && k.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function v3(e) {
  return k
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function S3(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function gx(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    const a = Number.isFinite(+s),
      l = i >= n.length;
    return (
      (s = !s && k.isArray(o) ? o.length : s),
      l
        ? (k.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
        : ((!o[s] || !k.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && k.isArray(o[s]) && (o[s] = S3(o[s])),
          !a)
    );
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {};
    return (
      k.forEachEntry(e, (r, o) => {
        t(v3(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
const w3 = { "Content-Type": void 0 };
function x3(e, t, n) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const hu = {
  transitional: mx,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = k.isObject(t);
      if ((i && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)))
        return o && o ? JSON.stringify(gx(t)) : t;
      if (
        k.isArrayBuffer(t) ||
        k.isBuffer(t) ||
        k.isStream(t) ||
        k.isFile(t) ||
        k.isBlob(t)
      )
        return t;
      if (k.isArrayBufferView(t)) return t.buffer;
      if (k.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return y3(t, this.formSerializer).toString();
        if ((a = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return pu(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), x3(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || hu.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && k.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? ne.from(a, ne.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: rn.classes.FormData, Blob: rn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
k.forEach(["delete", "get", "head"], function (t) {
  hu.headers[t] = {};
});
k.forEach(["post", "put", "patch"], function (t) {
  hu.headers[t] = k.merge(w3);
});
const zh = hu,
  C3 = k.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  P3 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && C3[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  h0 = Symbol("internals");
function ni(e) {
  return e && String(e).trim().toLowerCase();
}
function fa(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(fa) : String(e);
}
function E3(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function k3(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function yc(e, t, n, r, o) {
  if (k.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!k.isString(t))) {
    if (k.isString(r)) return t.indexOf(r) !== -1;
    if (k.isRegExp(r)) return r.test(t);
  }
}
function T3(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function b3(e, t) {
  const n = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class mu {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const c = ni(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = k.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || l] = fa(a));
    }
    const s = (a, l) => k.forEach(a, (u, c) => i(u, c, l));
    return (
      k.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : k.isString(t) && (t = t.trim()) && !k3(t)
        ? s(P3(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = ni(t)), t)) {
      const r = k.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return E3(o);
        if (k.isFunction(n)) return n.call(this, o, r);
        if (k.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ni(t)), t)) {
      const r = k.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || yc(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = ni(s)), s)) {
        const a = k.findKey(r, s);
        a && (!n || yc(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return k.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || yc(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      k.forEach(this, (o, i) => {
        const s = k.findKey(r, i);
        if (s) {
          (n[s] = fa(o)), delete n[i];
          return;
        }
        const a = t ? T3(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = fa(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      k.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && k.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[h0] = this[h0] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const a = ni(s);
      r[a] || (b3(o, s), (r[a] = !0));
    }
    return k.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
mu.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
k.freezeMethods(mu.prototype);
k.freezeMethods(mu);
const xn = mu;
function vc(e, t) {
  const n = this || zh,
    r = t || n,
    o = xn.from(r.headers);
  let i = r.data;
  return (
    k.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function yx(e) {
  return !!(e && e.__CANCEL__);
}
function xs(e, t, n) {
  ne.call(this, e ?? "canceled", ne.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
k.inherits(xs, ne, { __CANCEL__: !0 });
function A3(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ne(
          "Request failed with status code " + n.status,
          [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const O3 = rn.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, s, a) {
          const l = [];
          l.push(n + "=" + encodeURIComponent(r)),
            k.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()),
            k.isString(i) && l.push("path=" + i),
            k.isString(s) && l.push("domain=" + s),
            a === !0 && l.push("secure"),
            (document.cookie = l.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function R3(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function L3(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function vx(e, t) {
  return e && !R3(t) ? L3(e, t) : t;
}
const _3 = rn.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let s = i;
        return (
          t && (n.setAttribute("href", s), (s = n.href)),
          n.setAttribute("href", s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (s) {
          const a = k.isString(s) ? o(s) : s;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function M3(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function $3(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      s || (s = u), (n[o] = l), (r[o] = u);
      let f = i,
        d = 0;
      for (; f !== o; ) (d += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const m = c && u - c;
      return m ? Math.round((d * 1e3) / m) : void 0;
    }
  );
}
function m0(e, t) {
  let n = 0;
  const r = $3(50, 250);
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      a = i - n,
      l = r(a),
      u = i <= s;
    n = i;
    const c = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && s && u ? (s - i) / l : void 0,
      event: o,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const D3 = typeof XMLHttpRequest < "u",
  j3 =
    D3 &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = xn.from(e.headers).normalize(),
          s = e.responseType;
        let a;
        function l() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a);
        }
        k.isFormData(o) &&
          (rn.isStandardBrowserEnv || rn.isStandardBrowserWebWorkerEnv) &&
          i.setContentType(!1);
        let u = new XMLHttpRequest();
        if (e.auth) {
          const m = e.auth.username || "",
            p = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(m + ":" + p));
        }
        const c = vx(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), hx(c, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout);
        function f() {
          if (!u) return;
          const m = xn.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            g = {
              data:
                !s || s === "text" || s === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: m,
              config: e,
              request: u,
            };
          A3(
            function (y) {
              n(y), l();
            },
            function (y) {
              r(y), l();
            },
            g
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = f)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(f);
              }),
          (u.onabort = function () {
            u &&
              (r(new ne("Request aborted", ne.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new ne("Network Error", ne.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let p = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const g = e.transitional || mx;
            e.timeoutErrorMessage && (p = e.timeoutErrorMessage),
              r(
                new ne(
                  p,
                  g.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
                  e,
                  u
                )
              ),
              (u = null);
          }),
          rn.isStandardBrowserEnv)
        ) {
          const m =
            (e.withCredentials || _3(c)) &&
            e.xsrfCookieName &&
            O3.read(e.xsrfCookieName);
          m && i.set(e.xsrfHeaderName, m);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in u &&
            k.forEach(i.toJSON(), function (p, g) {
              u.setRequestHeader(g, p);
            }),
          k.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          s && s !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            u.addEventListener("progress", m0(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", m0(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (m) => {
              u &&
                (r(!m || m.type ? new xs(null, e, u) : m),
                u.abort(),
                (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const d = M3(c);
        if (d && rn.protocols.indexOf(d) === -1) {
          r(new ne("Unsupported protocol " + d + ":", ne.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(o || null);
      });
    },
  da = { http: a3, xhr: j3 };
k.forEach(da, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const N3 = {
  getAdapter: (e) => {
    e = k.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let o = 0;
      o < t && ((n = e[o]), !(r = k.isString(n) ? da[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new ne(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            k.hasOwnProp(da, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!k.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: da,
};
function Sc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new xs(null, e);
}
function g0(e) {
  return (
    Sc(e),
    (e.headers = xn.from(e.headers)),
    (e.data = vc.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    N3.getAdapter(e.adapter || zh.adapter)(e).then(
      function (r) {
        return (
          Sc(e),
          (r.data = vc.call(e, e.transformResponse, r)),
          (r.headers = xn.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          yx(r) ||
            (Sc(e),
            r &&
              r.response &&
              ((r.response.data = vc.call(e, e.transformResponse, r.response)),
              (r.response.headers = xn.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const y0 = (e) => (e instanceof xn ? e.toJSON() : e);
function _o(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f) {
    return k.isPlainObject(u) && k.isPlainObject(c)
      ? k.merge.call({ caseless: f }, u, c)
      : k.isPlainObject(c)
      ? k.merge({}, c)
      : k.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, f) {
    if (k.isUndefined(c)) {
      if (!k.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, c, f);
  }
  function i(u, c) {
    if (!k.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (k.isUndefined(c)) {
      if (!k.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, f) {
    if (f in t) return r(u, c);
    if (f in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, c) => o(y0(u), y0(c), !0),
  };
  return (
    k.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
      const f = l[c] || o,
        d = f(e[c], t[c], c);
      (k.isUndefined(d) && f !== a) || (n[c] = d);
    }),
    n
  );
}
const Sx = "1.3.4",
  Uh = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Uh[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const v0 = {};
Uh.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      Sx +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, a) => {
    if (t === !1)
      throw new ne(
        o(s, " has been removed" + (n ? " in " + n : "")),
        ne.ERR_DEPRECATED
      );
    return (
      n &&
        !v0[s] &&
        ((v0[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, s, a) : !0
    );
  };
};
function I3(e, t, n) {
  if (typeof e != "object")
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new ne("option " + i + " must be " + l, ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ne("Unknown option " + i, ne.ERR_BAD_OPTION);
  }
}
const Id = { assertOptions: I3, validators: Uh },
  Dn = Id.validators;
class al {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new p0(), response: new p0() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = _o(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Id.assertOptions(
        r,
        {
          silentJSONParsing: Dn.transitional(Dn.boolean),
          forcedJSONParsing: Dn.transitional(Dn.boolean),
          clarifyTimeoutError: Dn.transitional(Dn.boolean),
        },
        !1
      ),
      o !== void 0 &&
        Id.assertOptions(
          o,
          { encode: Dn.function, serialize: Dn.function },
          !0
        ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s;
    (s = i && k.merge(i.common, i[n.method])),
      s &&
        k.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (p) => {
            delete i[p];
          }
        ),
      (n.headers = xn.concat(s, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((l = l && g.synchronous), a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let c,
      f = 0,
      d;
    if (!l) {
      const p = [g0.bind(this), void 0];
      for (
        p.unshift.apply(p, a),
          p.push.apply(p, u),
          d = p.length,
          c = Promise.resolve(n);
        f < d;

      )
        c = c.then(p[f++], p[f++]);
      return c;
    }
    d = a.length;
    let m = n;
    for (f = 0; f < d; ) {
      const p = a[f++],
        g = a[f++];
      try {
        m = p(m);
      } catch (S) {
        g.call(this, S);
        break;
      }
    }
    try {
      c = g0.call(this, m);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, d = u.length; f < d; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = _o(this.defaults, t);
    const n = vx(t.baseURL, t.url);
    return hx(n, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function (t) {
  al.prototype[t] = function (n, r) {
    return this.request(
      _o(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
k.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, a) {
      return this.request(
        _o(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        })
      );
    };
  }
  (al.prototype[t] = n()), (al.prototype[t + "Form"] = n(!0));
});
const pa = al;
class Wh {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, a) {
        r.reason || ((r.reason = new xs(i, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Wh(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const F3 = Wh;
function V3(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function B3(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const Fd = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Fd).forEach(([e, t]) => {
  Fd[t] = e;
});
const z3 = Fd;
function wx(e) {
  const t = new pa(e),
    n = tx(pa.prototype.request, t);
  return (
    k.extend(n, pa.prototype, t, { allOwnKeys: !0 }),
    k.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return wx(_o(e, o));
    }),
    n
  );
}
const Fe = wx(zh);
Fe.Axios = pa;
Fe.CanceledError = xs;
Fe.CancelToken = F3;
Fe.isCancel = yx;
Fe.VERSION = Sx;
Fe.toFormData = pu;
Fe.AxiosError = ne;
Fe.Cancel = Fe.CanceledError;
Fe.all = function (t) {
  return Promise.all(t);
};
Fe.spread = V3;
Fe.isAxiosError = B3;
Fe.mergeConfig = _o;
Fe.AxiosHeaders = xn;
Fe.formToJSON = (e) => gx(k.isHTMLForm(e) ? new FormData(e) : e);
Fe.HttpStatusCode = z3;
Fe.default = Fe;
const G = Fe,
  wc = K(
    "user/login",
    async ({ email: e, password: t }, { rejectWithValue: n }) => {
      try {
        const r = { headers: { "Content-type": "application/json" } },
          { data: o } = await G.post(
            "/api/users/login/",
            { username: e, password: t },
            r
          );
        return localStorage.setItem("userInfo", JSON.stringify(o)), o;
      } catch (r) {
        return n(
          r.response && r.response.data.detail
            ? r.response.data.detail
            : r.message
        );
      }
    }
  ),
  xc = K(
    "user/register",
    async ({ name: e, email: t, password: n }, { rejectWithValue: r }) => {
      try {
        const o = { headers: { "Content-type": "application/json" } },
          { data: i } = await G.post(
            "/api/users/register/",
            { name: e, email: t, password: n },
            o
          );
        return localStorage.setItem("userInfo", JSON.stringify(i)), i;
      } catch (o) {
        return r(
          o.response && o.response.data.detail
            ? o.response.data.detail
            : o.message
        );
      }
    }
  ),
  U3 = { userInfo: null, loading: !1, error: null },
  W3 = ut({
    name: "user",
    initialState: U3,
    reducers: {
      userLogout: (e) => {
        (e.userInfo = null), localStorage.removeItem("userInfo");
      },
    },
    extraReducers: (e) => {
      e.addCase(wc.pending, (t) => {
        t.loading = !0;
      })
        .addCase(wc.fulfilled, (t, n) => {
          (t.loading = !1), (t.userInfo = n.payload), (t.error = null);
        })
        .addCase(wc.rejected, (t, n) => {
          (t.loading = !1), (t.error = n.payload);
        })
        .addCase(xc.pending, (t) => {
          t.loading = !0;
        })
        .addCase(xc.fulfilled, (t, n) => {
          (t.loading = !1), (t.userInfo = n.payload), (t.error = null);
        })
        .addCase(xc.rejected, (t, n) => {
          (t.loading = !1), (t.error = n.payload);
        });
    },
  }),
  Cc = K(
    "premierLeague/fetchPremierLeague",
    async () => (await G.get("/api/leagues/PL/")).data
  ),
  Pc = K(
    "topscorerPL/fetchTopScorerPL",
    async () => (await G.get("/api/leagues/PL/topscorer/")).data
  ),
  Ec = K(
    "PLTopAssisits/fetchPLTopAssists",
    async () => (await G.get("/api/leagues/PL/topassits/")).data
  ),
  kc = K(
    "PLUpcommingmatches/fetchPLUpcommingMatches",
    async () => (await G.get("api/leagues/PL/nextmatches/")).data
  ),
  Tc = K(
    "PLLatestMatches/fetchPLLatestMatches",
    async () => (await G.get("/api/leagues/PL/latestmatches/")).data
  ),
  H3 = {
    table: [],
    tableStatus: "idle",
    tableError: null,
    topScorers: [],
    topScorersStatus: "idle",
    topScorersError: null,
    topAssists: [],
    topAssistsStatus: "idle",
    topAssistsError: null,
    upcomingMatches: [],
    upcomingMatchesStatus: "idle",
    upcomingMatchesError: null,
    latestMatches: [],
    latestMatchesStatus: "idle",
    latestMatchesError: null,
  },
  K3 = ut({
    name: "premierLeague",
    initialState: H3,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(Cc.pending, (t) => {
        t.tableStatus = "loading";
      })
        .addCase(Cc.fulfilled, (t, n) => {
          (t.tableStatus = "succeeded"), (t.table = n.payload);
        })
        .addCase(Cc.rejected, (t, n) => {
          (t.tableStatus = "failed"), (t.tableError = n.error.message);
        })
        .addCase(Pc.pending, (t) => {
          t.topScorersStatus = "loading";
        })
        .addCase(Pc.fulfilled, (t, n) => {
          (t.topScorersStatus = "succeded"), (t.topScorers = n.payload);
        })
        .addCase(Pc.rejected, (t, n) => {
          (t.topScorersStatus = "failed"),
            (t.topScorersError = n.error.message);
        })
        .addCase(Ec.pending, (t) => {
          t.topAssistsStatus = "loading";
        })
        .addCase(Ec.fulfilled, (t, n) => {
          (t.topAssistsStatus = "succeded"), (t.topAssists = n.payload);
        })
        .addCase(Ec.rejected, (t, n) => {
          (t.topAssistsStatus = "failed"),
            (t.topAssistsError = n.error.message);
        })
        .addCase(kc.pending, (t) => {
          t.upcomingMatchesStatus = "loading";
        })
        .addCase(kc.fulfilled, (t, n) => {
          (t.upcomingMatchesStatus = "succeded"),
            (t.upcomingMatches = n.payload);
        })
        .addCase(kc.rejected, (t, n) => {
          (t.upcomingMatchesStatus = "failed"),
            (t.upcomingMatchesError = n.error.message);
        })
        .addCase(Tc.pending, (t) => {
          t.latestMatchesStatus = "loading";
        })
        .addCase(Tc.fulfilled, (t, n) => {
          (t.latestMatchesStatus = "succeded"), (t.latestMatches = n.payload);
        })
        .addCase(Tc.rejected, (t, n) => {
          (t.latestMatchesStatus = "failed"),
            (t.latestMatchesError = n.error.message);
        });
    },
  }),
  bc = K(
    "championsLeague/fetchChampionsLeague",
    async () => (await G.get("/api/leagues/CL/")).data
  ),
  Ac = K(
    "topscorerCL/fetchTopScorerCL",
    async () => (await G.get("api/leagues/CL/topscorer/")).data
  ),
  Oc = K(
    "CLTopAssists/fetchCLTopAssists",
    async () => (await G.get("api/leageus/CL/topassits/")).data
  ),
  Rc = K(
    "upcommingMatchesCL/fetchCLUpcommingMatchesCL",
    async () => (await G.get("api/leagues/CL/upcommingmatches/")).data
  ),
  Lc = K(
    "CLLatestMatches/fetchCLLatestMatches",
    async () => (await G.get("/api/leagues/CL/latestmatches/")).data
  ),
  G3 = {
    table: {},
    tableStatus: "idle",
    tableError: null,
    topScorers: [],
    topScorersStatus: "idle",
    topScorersError: null,
    topAssists: [],
    topAssistsStatus: "idle",
    topAssistsError: null,
    upcomingMatches: [],
    upcomingMatchesStatus: "idle",
    upcomingMatchesError: null,
    latestMatches: [],
    latestMatchesStatus: "idle",
    latestMatchesError: null,
  },
  Y3 = ut({
    name: "championsLeague",
    initialState: G3,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(bc.pending, (t) => {
        t.tableStatus = "loading";
      })
        .addCase(bc.fulfilled, (t, n) => {
          (t.tableStatus = "succeeded"), (t.table = n.payload);
        })
        .addCase(bc.rejected, (t, n) => {
          (t.tableStatus = "failed"), (t.tableError = n.error.message);
        })
        .addCase(Ac.pending, (t) => {
          t.topScorersStatus = "loading";
        })
        .addCase(Ac.fulfilled, (t, n) => {
          (t.topScorersStatus = "succeded"), (t.topScorers = n.payload);
        })
        .addCase(Ac.rejected, (t, n) => {
          (t.topScorersStatus = "failed"),
            (t.topScorersError = n.error.message);
        })
        .addCase(Oc.pending, (t) => {
          t.topAssistsStatus = "loading";
        })
        .addCase(Oc.fulfilled, (t, n) => {
          (t.topAssistsStatus = "succeded"), (t.topAssists = n.payload);
        })
        .addCase(Oc.rejected, (t, n) => {
          (t.topAssistsStatus = "failed"),
            (t.topAssistsError = n.error.message);
        })
        .addCase(Rc.pending, (t) => {
          t.upcomingMatchesStatus = "loading";
        })
        .addCase(Rc.fulfilled, (t, n) => {
          (t.upcomingMatchesStatus = "succeded"),
            (t.upcomingMatches = n.payload);
        })
        .addCase(Rc.rejected, (t, n) => {
          (t.upcomingMatchesStatus = "failed"),
            (t.upcomingMatchesError = n.error.message);
        })
        .addCase(Lc.pending, (t) => {
          t.latestMatchesStatus = "loading";
        })
        .addCase(Lc.fulfilled, (t, n) => {
          (t.latestMatchesStatus = "succeded"), (t.latestMatches = n.payload);
        })
        .addCase(Lc.rejected, (t, n) => {
          (t.latestMatchesStatus = "failed"),
            (t.latestMatchesError = n.error.message);
        });
    },
  }),
  _c = K(
    "TeamSquadSlice/fetchTeamSquadSlice",
    async (e) => (await G.get(`/api/team/${e}/`)).data
  ),
  Q3 = { data: {}, status: "idle", error: null },
  X3 = ut({
    name: "fetchTeamSquadSlice",
    initialState: Q3,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(_c.pending, (t) => {
        t.status = "loading";
      })
        .addCase(_c.fulfilled, (t, n) => {
          (t.status = "succeded"), (t.data = n.payload);
        })
        .addCase(_c, (t, n) => {
          (t.status = "failed"), (t.error = n.error.message);
        });
    },
  }),
  Mc = K(
    "Leagues/fetchLeagues",
    async () => (await G.get("/api/leagues/")).data.competitions || []
  ),
  q3 = { data: [], status: "idle", error: null },
  J3 = ut({
    name: "Leagues",
    initialState: q3,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(Mc.pending, (t) => {
        t.status = "loading";
      })
        .addCase(Mc.fulfilled, (t, n) => {
          (t.status = "succeded"), (t.data = n.payload);
        })
        .addCase(Mc.rejected, (t, n) => {
          (t.status = "failed"), (t.error = n.error.message);
        });
    },
  }),
  $c = K(
    "SerieA/fetchSerieA",
    async () => (await G.get("/api/leagues/SA/")).data
  ),
  Dc = K(
    "SerieATopscorers/fetchSerieATopscorers",
    async () => (await G.get("/api/leagues/SA/topscorer/")).data
  ),
  jc = K(
    "SerieATopAssists/fetchSerieATopAssists",
    async () => (await G.get("/api/leagues/SA/topassists/")).data
  ),
  Nc = K(
    "SerieAUpcommingMatches/fetchSerieAUpcommingMatches",
    async () => (await G.get("/api/leagues/SA/upcommingmatches/")).data
  ),
  Ic = K(
    "SerieALatestMatches/fetchSerieALatestMatches",
    async () => (await G.get("/api/leagues/SA/latestmatches/")).data
  ),
  Z3 = {
    table: [],
    tableStatus: "idle",
    tableError: null,
    topScorers: [],
    topScorersStatus: "idle",
    topScorersError: null,
    topAssists: [],
    topAssistsStatus: "idle",
    topAssistsError: null,
    upcomingMatches: [],
    upcomingMatchesStatus: "idle",
    upcomingMatchesError: null,
    latestMatches: [],
    latestMatchesStatus: "idle",
    latestMatchesError: null,
  },
  e5 = ut({
    name: "SerieA",
    initialState: Z3,
    reducers: {},
    extraReducers: (e) => {
      e.addCase($c.pending, (t) => {
        t.tableStatus = "loading";
      })
        .addCase($c.fulfilled, (t, n) => {
          (t.tableStatus = "succeded"), (t.table = n.payload);
        })
        .addCase($c.rejected, (t, n) => {
          (t.tableStatus = "failed"), (t.tableError = n.error.message);
        })
        .addCase(Dc.pending, (t) => {
          t.topScorersStatus = "loading";
        })
        .addCase(Dc.fulfilled, (t, n) => {
          (t.topScorersStatus = "succeded"), (t.topScorers = n.payload);
        })
        .addCase(Dc.rejected, (t, n) => {
          (t.topScorersStatus = "failed"),
            (t.topScorersError = n.error.message);
        })
        .addCase(jc.pending, (t, n) => {
          t.topAssistsStatus = "loading";
        })
        .addCase(jc.fulfilled, (t, n) => {
          (t.topAssistsStatus = "succeded"), (t.topAssists = n.payload);
        })
        .addCase(jc.rejected, (t, n) => {
          (t.topAssistsStatus = "failed"),
            (t.topAssistsError = n.error.message);
        })
        .addCase(Nc.pending, (t) => {
          t.upcomingMatchesStatus = "loading";
        })
        .addCase(Nc.fulfilled, (t, n) => {
          (t.upcomingMatchesStatus = "succeded"),
            (t.upcomingMatches = n.payload);
        })
        .addCase(Nc.rejected, (t, n) => {
          (t.upcomingMatchesStatus = "failed"),
            (t.upcomingMatchesError = n.error.message);
        })
        .addCase(Ic.pending, (t) => {
          t.latestMatchesStatus = "loading";
        })
        .addCase(Ic.fulfilled, (t, n) => {
          (t.latestMatchesStatus = "succeded"), (t.latestMatches = n.payload);
        })
        .addCase(Ic.rejected, (t, n) => {
          (t.latestMatchesStatus = "failed"),
            (t.latestMatchesError = n.error.message);
        });
    },
  }),
  Fc = K(
    "Bundesliga/fetchBundesliga",
    async () => (await G.get("/api/leagues/BL/")).data
  ),
  Vc = K(
    "BundesligaTopScorer/fetchBundesligaTopScorer",
    async () => (await G.get("/api/leagues/BL/topscorer/")).data
  ),
  Bc = K(
    "BundesligaTopAssists/fetchBundesligaTopAssists",
    async () => (await G.get("/api/leagues/BL/topassists/")).data
  ),
  zc = K(
    "BundesligaUpcommingMatches/fetchBundesligaUpcommingMatches",
    async () => (await G.get("/api/leagues/BL/upcommingmatches/")).data
  ),
  Uc = K(
    "fetchBundesligaLatestMatches/BundesligaLatestMatches",
    async () => (await G.get("/api/leagues/BL/latestmatches/")).data
  ),
  t5 = {
    table: [],
    topScorers: [],
    topAssists: [],
    upcomingMatches: [],
    latestMatches: [],
    tableStatus: "idle",
    tableError: null,
    topScorersStatus: "idle",
    topScorersError: null,
    topAssistsStatus: "idle",
    topAssistsError: null,
    upcomingMatchesStatus: "idle",
    upcomingMatchesError: null,
    latestMatchesStatus: "idle",
    latestMatchesError: null,
  },
  n5 = ut({
    name: "Bundesliga",
    initialState: t5,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(Fc.pending, (t) => {
        t.tableStatus = "loading";
      })
        .addCase(Fc.fulfilled, (t, n) => {
          (t.tableStatus = "succeded"), (t.table = n.payload);
        })
        .addCase(Fc.rejected, (t, n) => {
          (t.tableStatus = "failed"), (t.tableError = n.error.message);
        })
        .addCase(Vc.pending, (t) => {
          t.topScorersStatus = "loading";
        })
        .addCase(Vc.fulfilled, (t, n) => {
          (t.topScorersStatus = "succeded"), (t.topScorers = n.payload);
        })
        .addCase(Vc.rejected, (t, n) => {
          (t.topScorersStatus = "failed"),
            (t.topScorersError = n.error.message);
        })
        .addCase(Bc.pending, (t, n) => {
          t.topAssistsStatus = "loading";
        })
        .addCase(Bc.fulfilled, (t, n) => {
          (t.topAssistsStatus = "succeeded"), (t.topAssists = n.payload);
        })
        .addCase(Bc.rejected, (t, n) => {
          (t.topAssistsStatus = "failed"),
            (t.topAssistsError = n.error.message);
        })
        .addCase(zc.pending, (t) => {
          t.upcomingMatchesStatus = "loading";
        })
        .addCase(zc.fulfilled, (t, n) => {
          (t.upcomingMatchesStatus = "succeded"),
            (t.upcomingMatches = n.payload);
        })
        .addCase(zc.rejected, (t, n) => {
          (t.upcomingMatchesStatus = "failed"),
            (t.upcomingMatchesError = n.error.message);
        })
        .addCase(Uc.pending, (t) => {
          t.latestMatchesStatus = "loading";
        })
        .addCase(Uc.fulfilled, (t, n) => {
          (t.latestMatchesStatus = "succeded"), (t.latestMatches = n.payload);
        })
        .addCase(Uc.rejected, (t, n) => {
          (t.latestMatchesStatus = "failed"),
            (t.latestMatchesError = n.error.message);
        });
    },
  }),
  Wc = K(
    "fetchLigue1/Ligue1",
    async () => (await G.get("/api/leagues/FL/")).data
  ),
  Hc = K(
    "Ligue1TopScorer/fetchLigue1TopScorer",
    async () => (await G.get("/api/leagues/FL/topscorer/")).data
  ),
  Kc = K(
    "Ligue1TopAssists/fetchLigue1Topassists",
    async () => (await G.get("/api/leagues/FL/topassists/")).data
  ),
  Gc = K(
    "Ligue1UpcommingMatches/fetchLigue1UpcommingMatches",
    async () => (await G.get("/api/leagues/FL/upcommingmatches/")).data
  ),
  Yc = K(
    "Ligue1LatestMatches/fetchLigue1LatestMatches",
    async () => (await G.get("/api/leagues/FL/latestmatches/")).data
  ),
  r5 = {
    table: [],
    tableStatus: "idle",
    tableError: null,
    topScorers: [],
    topScorersStatus: "idle",
    topScorersError: null,
    topAssists: [],
    topAssistsStatus: "idle",
    topAssistsError: null,
    upcomingMatches: [],
    upcomingMatchesStatus: "idle",
    upcomingMatchesError: null,
    latestMatches: [],
    latestMatchesStatus: "idle",
    latestMatchesError: null,
  },
  o5 = ut({
    name: "Ligue1",
    initialState: r5,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(Wc.pending, (t) => {
        t.tableStatus = "loading";
      })
        .addCase(Wc.fulfilled, (t, n) => {
          (t.tableStatus = "succeded"), (t.table = n.payload);
        })
        .addCase(Wc.rejected, (t, n) => {
          (t.tableStatus = "failed"), (t.tableError = n.error.message);
        })
        .addCase(Hc.pending, (t) => {
          t.topScorersStatus = "loading";
        })
        .addCase(Hc.fulfilled, (t, n) => {
          (t.topScorersStatus = "succeded"), (t.topScorers = n.payload);
        })
        .addCase(Hc.rejected, (t, n) => {
          (t.topScorersStatus = "failed"),
            (t.topScorersError = n.error.message);
        })
        .addCase(Kc.pending, (t) => {
          t.topAssistsStatus = "loading";
        })
        .addCase(Kc.fulfilled, (t, n) => {
          (t.topAssistsStatus = "succeded"), (t.topAssists = n.payload);
        })
        .addCase(Kc.rejected, (t, n) => {
          (t.topAssistsStatus = "failed"),
            (t.topAssistsError = n.error.message);
        })
        .addCase(Gc.pending, (t) => {
          t.upcomingMatchesStatus = "loading";
        })
        .addCase(Gc.fulfilled, (t, n) => {
          (t.upcomingMatchesStatus = "succeded"),
            (t.upcomingMatches = n.payload);
        })
        .addCase(Gc.rejected, (t, n) => {
          (t.upcomingMatchesStatus = "failed"),
            (t.upcomingMatchesError = n.error.message);
        })
        .addCase(Yc.pending, (t) => {
          t.latestMatchesStatus = "loading";
        })
        .addCase(Yc.fulfilled, (t, n) => {
          (t.latestMatchesStatus = "succeded"), (t.latestMatches = n.payload);
        })
        .addCase(Yc.rejected, (t, n) => {
          (t.latestMatchesStatus = "failed"),
            (t.latestMatchesError = n.error.message);
        });
    },
  }),
  Qc = K(
    "LaLiga/fetchLaLiga",
    async () => (await G.get("/api/leagues/PD/")).data
  ),
  Xc = K(
    "LaLigaTopScorers/fetchLaLigaTopScorers",
    async () => (await G.get("/api/leagues/PD/topscorer/")).data
  ),
  qc = K(
    "LaLigaTopAssists/fetchLaLigaTopAssists",
    async () => (await G.get("/api/leagues/PD/topassists/")).data
  ),
  Jc = K(
    "LaLigaUpcomingMatches/fetchLaLigaUpcomingMatches",
    async () => (await G.get("/api/leagues/PD/upcomingmatches/")).data
  ),
  Zc = K(
    "LaLigaLatestMatches/fetchLaLigaLatestMatches",
    async () => (await G.get("/api/leagues/PD/latestmatches/")).data
  ),
  i5 = {
    table: [],
    tableStatus: "idle",
    tableError: null,
    topScorers: [],
    topScorersStatus: "idle",
    topScorersError: null,
    topAssists: [],
    topAssistsStatus: "idle",
    topAssistsError: null,
    upcomingMatches: [],
    upcomingMatchesStatus: "idle",
    upcomingMatchesError: null,
    latestMatches: [],
    latestMatchesStatus: "idle",
    latestMatchesError: null,
  },
  s5 = ut({
    name: "LaLiga",
    initialState: i5,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(Qc.pending, (t) => {
        t.tableStatus = "loading";
      })
        .addCase(Qc.fulfilled, (t, n) => {
          (t.tableStatus = "succeded"), (t.table = n.payload);
        })
        .addCase(Qc.rejected, (t, n) => {
          (t.tableStatus = "failed"), (t.tableError = n.error.message);
        })
        .addCase(Xc.pending, (t) => {
          t.topScorersStatus = "loading";
        })
        .addCase(Xc.fulfilled, (t, n) => {
          (t.topScorersStatus = "succeded"), (t.topScorers = n.payload);
        })
        .addCase(Xc.rejected, (t, n) => {
          (t.topScorersStatus = "failed"),
            (t.topScorersError = n.error.message);
        })
        .addCase(qc.pending, (t) => {
          t.topAssistsStatus = "loading";
        })
        .addCase(qc.fulfilled, (t, n) => {
          (t.topAssistsStatus = "succeded"), (t.topAssists = n.payload);
        })
        .addCase(qc.rejected, (t, n) => {
          (t.topAssistsStatus = "failed"),
            (t.topAssistsError = n.error.message);
        })
        .addCase(Jc.pending, (t) => {
          t.upcomingMatchesStatus = "loading";
        })
        .addCase(Jc.fulfilled, (t, n) => {
          (t.upcomingMatchesStatus = "succeded"),
            (t.upcomingMatches = n.payload);
        })
        .addCase(Jc.rejected, (t, n) => {
          (t.upcomingMatchesStatus = "failed"),
            (t.upcomingMatchesError = n.error.message);
        })
        .addCase(Zc.pending, (t) => {
          t.latestMatchesStatus = "loading";
        })
        .addCase(Zc.fulfilled, (t, n) => {
          (t.latestMatchesStatus = "succeded"), (t.latestMatches = n.payload);
        })
        .addCase(Zc.rejected, (t, n) => {
          (t.latestMatchesStatus = "failed"),
            (t.latestMatchesError = n.error.message);
        });
    },
  }),
  ef = K(
    "fetchPlayerData/playerData",
    async (e) => (await G.get(`/api/player/${e}/`)).data
  ),
  a5 = { data: [], status: "idle", error: null },
  l5 = ut({
    name: "player",
    initialState: a5,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(ef.pending, (t) => {
        t.status = "loading";
      })
        .addCase(ef.fulfilled, (t, n) => {
          (t.status = "succeded"), (t.data = n.payload);
        })
        .addCase(ef.rejected, (t, n) => {
          (t.status = "failed"), (t.error = n.error.message);
        });
    },
  }),
  tf = K("fetchMatchData/matchData", async (e) => {
    const t = await G.get(`/api/match/${e}/`);
    return console.log("API response data:", t.data), t.data;
  }),
  u5 = { data: [], status: "idle", error: null },
  c5 = ut({
    name: "matches",
    initialState: u5,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(tf.pending, (t) => {
        t.status = "loading";
      })
        .addCase(tf.fulfilled, (t, n) => {
          (t.status = "succeded"), (t.data = n.payload);
        })
        .addCase(tf.rejected, (t, n) => {
          (t.status = "failed"), (t.error = n.error.message);
        });
    },
  }),
  nf = K(
    "fetchTodaysMatches/TodaysMatches",
    async () => (await G.get("/api/match/todaysmatches/")).data
  ),
  f5 = { data: [], status: "idle", error: null },
  d5 = ut({
    name: "todaysmatches",
    initialState: f5,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(nf.pending, (t) => {
        t.status = "loading";
      })
        .addCase(nf.fulfilled, (t, n) => {
          (t.status = "succeded"), (t.data = n.payload);
        })
        .addCase(nf.rejected, (t, n) => {
          (t.status = "failed"), (t.data = n.error.message);
        });
    },
  }),
  rf = K(
    "TeamUpcomingMatches/fetchTeamUpcomingMatches",
    async (e) => (await G.get(`/api/team/upcomingmatches/${e}/`)).data
  ),
  p5 = { data: [], status: "idle", error: null },
  h5 = ut({
    name: "TeamUpcomingMatches",
    initialState: p5,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(rf.pending, (t) => {
        t.status = "loading";
      })
        .addCase(rf.fulfilled, (t, n) => {
          (t.status = "succeded"), (t.data = n.payload);
        })
        .addCase(rf.rejected, (t, n) => {
          (t.status = "failed"), (t.error = n.error.message);
        });
    },
  }),
  of = K(
    "TeamLatestMatches/fetchTeamLatestMatches",
    async (e) => (await G.get(`/api/team/latestmatches/${e}/`)).data
  ),
  m5 = { data: [], status: "idle", error: null },
  g5 = wn("teamLatestMatches/reset"),
  y5 = ut({
    name: "TeamLatestMatches",
    initialState: m5,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(of.pending, (t) => {
        t.status = "loading";
      })
        .addCase(of.fulfilled, (t, n) => {
          (t.status = "succeded"), (t.data = n.payload);
        })
        .addCase(of.rejected, (t, n) => {
          (t.status = "failed"), (t.error = n.error.message);
        })
        .addCase(g5, (t) => {
          (t.status = "idle"), (t.data = []), (t.error = null);
        });
    },
  }),
  sf = K(
    "fetchHead2Head/Head2Head",
    async (e) => (await G.get(`/api/match/${e}/head2head/`)).data
  ),
  v5 = { data: [], status: "idle", error: null },
  S5 = ut({
    name: "Head2Head",
    initialState: v5,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(sf.pending, (t) => {
        t.status = "loading";
      })
        .addCase(sf.fulfilled, (t, n) => {
          (t.status = "succeded"), (t.data = n.payload);
        })
        .addCase(sf.rejected, (t, n) => {
          (t.status = "failed"), (t.error = n.error.message);
        });
    },
  }),
  w5 = wM({
    reducer: {
      user: W3.reducer,
      premierLeague: K3.reducer,
      championsLeague: Y3.reducer,
      TeamSquad: X3.reducer,
      Player: l5.reducer,
      Leagues: J3.reducer,
      Match: c5.reducer,
      SerieA: e5.reducer,
      Bundesliga: n5.reducer,
      Ligue1: o5.reducer,
      LaLiga: s5.reducer,
      TodaysMatches: d5.reducer,
      TeamUpcomingMatches: h5.reducer,
      TeamLatestMatches: y5.reducer,
      Head2Head: S5.reducer,
    },
  });
var Vd = {},
  x5 = {
    get exports() {
      return Vd;
    },
    set exports(e) {
      Vd = e;
    },
  },
  xx = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mo = P;
function C5(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var P5 = typeof Object.is == "function" ? Object.is : C5,
  E5 = Mo.useState,
  k5 = Mo.useEffect,
  T5 = Mo.useLayoutEffect,
  b5 = Mo.useDebugValue;
function A5(e, t) {
  var n = t(),
    r = E5({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    T5(
      function () {
        (o.value = n), (o.getSnapshot = t), af(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    k5(
      function () {
        return (
          af(o) && i({ inst: o }),
          e(function () {
            af(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    b5(n),
    n
  );
}
function af(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !P5(e, n);
  } catch {
    return !0;
  }
}
function O5(e, t) {
  return t();
}
var R5 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? O5
    : A5;
xx.useSyncExternalStore =
  Mo.useSyncExternalStore !== void 0 ? Mo.useSyncExternalStore : R5;
(function (e) {
  e.exports = xx;
})(x5);
var Bd = {},
  L5 = {
    get exports() {
      return Bd;
    },
    set exports(e) {
      Bd = e;
    },
  },
  Cx = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gu = P,
  _5 = Vd;
function M5(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $5 = typeof Object.is == "function" ? Object.is : M5,
  D5 = _5.useSyncExternalStore,
  j5 = gu.useRef,
  N5 = gu.useEffect,
  I5 = gu.useMemo,
  F5 = gu.useDebugValue;
Cx.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = j5(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = I5(
    function () {
      function l(m) {
        if (!u) {
          if (((u = !0), (c = m), (m = r(m)), o !== void 0 && s.hasValue)) {
            var p = s.value;
            if (o(p, m)) return (f = p);
          }
          return (f = m);
        }
        if (((p = f), $5(c, m))) return p;
        var g = r(m);
        return o !== void 0 && o(p, g) ? p : ((c = m), (f = g));
      }
      var u = !1,
        c,
        f,
        d = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        d === null
          ? void 0
          : function () {
              return l(d());
            },
      ];
    },
    [t, n, r, o]
  );
  var a = D5(e, i[0], i[1]);
  return (
    N5(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a]
    ),
    F5(a),
    a
  );
};
(function (e) {
  e.exports = Cx;
})(L5);
function V5(e) {
  e();
}
let Px = V5;
const B5 = (e) => (Px = e),
  z5 = () => Px,
  ll = P.createContext(null);
function U5() {
  return P.useContext(ll);
}
const W5 = () => {
  throw new Error("uSES not initialized!");
};
let Ex = W5;
const H5 = (e) => {
    Ex = e;
  },
  K5 = (e, t) => e === t;
function G5(e = ll) {
  const t = e === ll ? U5 : () => P.useContext(e);
  return function (r, o = K5) {
    const { store: i, subscription: s, getServerState: a } = t(),
      l = Ex(s.addNestedSub, i.getState, a || i.getState, r, o);
    return P.useDebugValue(l), l;
  };
}
const l4 = G5();
function Y5() {
  const e = z5();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        o = t;
      for (; o; ) r.push(o), (o = o.next);
      return r;
    },
    subscribe(r) {
      let o = !0,
        i = (n = { callback: r, next: null, prev: n });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const S0 = { notify() {}, get: () => [] };
function Q5(e, t) {
  let n,
    r = S0;
  function o(f) {
    return l(), r.subscribe(f);
  }
  function i() {
    r.notify();
  }
  function s() {
    c.onStateChange && c.onStateChange();
  }
  function a() {
    return !!n;
  }
  function l() {
    n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (r = Y5()));
  }
  function u() {
    n && (n(), (n = void 0), r.clear(), (r = S0));
  }
  const c = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: l,
    tryUnsubscribe: u,
    getListeners: () => r,
  };
  return c;
}
const X5 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  q5 = X5 ? P.useLayoutEffect : P.useEffect;
function J5({ store: e, context: t, children: n, serverState: r }) {
  const o = P.useMemo(() => {
      const a = Q5(e);
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
      };
    }, [e, r]),
    i = P.useMemo(() => e.getState(), [e]);
  q5(() => {
    const { subscription: a } = o;
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      i !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0);
      }
    );
  }, [o, i]);
  const s = t || ll;
  return On.createElement(s.Provider, { value: o }, n);
}
H5(Bd.useSyncExternalStoreWithSelector);
B5(ha.unstable_batchedUpdates);
const Z5 = pS({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: { backgroundColor: "#00FFFF", color: "#fafafa" },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#7e7a7a",
          fontWeight: "700",
          "&.Mui-selected": { color: "#FFFFFF" },
          "@media (max-width: 768px)": {
            fontSize: "14px",
            fontWeight: "400",
            maxWidth: "10px",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { color: "#fafafa", border: "none", width: "80vh" },
        head: { fontWeight: "700", fontSize: "18px" },
      },
    },
  },
});
lf.createRoot(document.getElementById("root")).render(
  W(J5, {
    store: w5,
    children: W(BT, { theme: Z5, children: W(ek, { children: W(B_, {}) }) }),
  })
);
export {
  Pb as $,
  Nc as A,
  Ic as B,
  $c as C,
  Vc as D,
  zc as E,
  A0 as F,
  T_ as G,
  Uc as H,
  Fc as I,
  Hc as J,
  Gc as K,
  r4 as L,
  Yc as M,
  Wc as N,
  Xc as O,
  Jc as P,
  Zc as Q,
  Qc as R,
  ok as S,
  Gt as T,
  fS as U,
  hS as V,
  pk as W,
  B1 as X,
  sh as Y,
  yn as Z,
  ee as _,
  l4 as a,
  lk as a0,
  ef as a1,
  tf as a2,
  sf as a3,
  nf as a4,
  Mc as a5,
  bi as a6,
  ha as a7,
  o4 as a8,
  ll as a9,
  U5 as aa,
  fk as ab,
  On as ac,
  i4 as ad,
  iS as ae,
  Ao as af,
  e4 as ag,
  t4 as ah,
  W as b,
  xc as c,
  b_ as d,
  kc as e,
  Pc as f,
  Ec as g,
  Tc as h,
  Tl as i,
  Kd as j,
  Cc as k,
  wc as l,
  Ac as m,
  Rc as n,
  Lc as o,
  bc as p,
  n4 as q,
  P as r,
  a4 as s,
  rf as t,
  IE as u,
  of as v,
  _c as w,
  g5 as x,
  G as y,
  Dc as z,
};
