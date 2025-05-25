var fx = Object.defineProperty;
var dx = (e, t, r) =>
  t in e
    ? fx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var Eo = (e, t, r) => dx(e, typeof t != "symbol" ? t + "" : t, r);
function px(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(n, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => n[i] }
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
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = r(i);
    fetch(i.href, s);
  }
})();
var Hh =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function mx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Kh = { exports: {} },
  hl = {},
  Vh = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var no = Symbol.for("react.element"),
  hx = Symbol.for("react.portal"),
  gx = Symbol.for("react.fragment"),
  yx = Symbol.for("react.strict_mode"),
  vx = Symbol.for("react.profiler"),
  xx = Symbol.for("react.provider"),
  wx = Symbol.for("react.context"),
  Sx = Symbol.for("react.forward_ref"),
  bx = Symbol.for("react.suspense"),
  Ax = Symbol.for("react.memo"),
  Cx = Symbol.for("react.lazy"),
  pp = Symbol.iterator;
function Ex(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pp && e[pp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yh = Object.assign,
  Xh = {};
function Pi(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xh),
    (this.updater = r || qh);
}
Pi.prototype.isReactComponent = {};
Pi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gh() {}
Gh.prototype = Pi.prototype;
function Uf(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xh),
    (this.updater = r || qh);
}
var Bf = (Uf.prototype = new Gh());
Bf.constructor = Uf;
Yh(Bf, Pi.prototype);
Bf.isPureReactComponent = !0;
var mp = Array.isArray,
  Jh = Object.prototype.hasOwnProperty,
  Ff = { current: null },
  Zh = { key: !0, ref: !0, __self: !0, __source: !0 };
function eg(e, t, r) {
  var n,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Jh.call(t, n) && !Zh.hasOwnProperty(n) && (i[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) i.children = r;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) i[n] === void 0 && (i[n] = a[n]);
  return {
    $$typeof: no,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Ff.current,
  };
}
function kx(e, t) {
  return {
    $$typeof: no,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $f(e) {
  return typeof e == "object" && e !== null && e.$$typeof === no;
}
function jx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var hp = /\/+/g;
function du(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? jx("" + e.key)
    : t.toString(36);
}
function na(e, t, r, n, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case no:
          case hx:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = n === "" ? "." + du(o, 0) : n),
      mp(i)
        ? ((r = ""),
          e != null && (r = e.replace(hp, "$&/") + "/"),
          na(i, t, r, "", function (c) {
            return c;
          }))
        : i != null &&
          ($f(i) &&
            (i = kx(
              i,
              r +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(hp, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (n = n === "" ? "." : n + ":"), mp(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = n + du(s, a);
      o += na(s, t, r, l, i);
    }
  else if (((l = Ex(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = n + du(s, a++)), (o += na(s, t, r, l, i));
  else if (s === "object")
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
  return o;
}
function ko(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    na(e, n, "", "", function (s) {
      return t.call(r, s, i++);
    }),
    n
  );
}
function Nx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Je = { current: null },
  ia = { transition: null },
  Tx = {
    ReactCurrentDispatcher: Je,
    ReactCurrentBatchConfig: ia,
    ReactCurrentOwner: Ff,
  };
Z.Children = {
  map: ko,
  forEach: function (e, t, r) {
    ko(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ko(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ko(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$f(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Z.Component = Pi;
Z.Fragment = gx;
Z.Profiler = vx;
Z.PureComponent = Uf;
Z.StrictMode = yx;
Z.Suspense = bx;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tx;
Z.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = Yh({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Ff.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Jh.call(t, l) &&
        !Zh.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    n.children = a;
  }
  return { $$typeof: no, type: e.type, key: i, ref: s, props: n, _owner: o };
};
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: wx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xx, _context: e }),
    (e.Consumer = e)
  );
};
Z.createElement = eg;
Z.createFactory = function (e) {
  var t = eg.bind(null, e);
  return (t.type = e), t;
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (e) {
  return { $$typeof: Sx, render: e };
};
Z.isValidElement = $f;
Z.lazy = function (e) {
  return { $$typeof: Cx, _payload: { _status: -1, _result: e }, _init: Nx };
};
Z.memo = function (e, t) {
  return { $$typeof: Ax, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
  var t = ia.transition;
  ia.transition = {};
  try {
    e();
  } finally {
    ia.transition = t;
  }
};
Z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Z.useCallback = function (e, t) {
  return Je.current.useCallback(e, t);
};
Z.useContext = function (e) {
  return Je.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
  return Je.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
  return Je.current.useEffect(e, t);
};
Z.useId = function () {
  return Je.current.useId();
};
Z.useImperativeHandle = function (e, t, r) {
  return Je.current.useImperativeHandle(e, t, r);
};
Z.useInsertionEffect = function (e, t) {
  return Je.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
  return Je.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
  return Je.current.useMemo(e, t);
};
Z.useReducer = function (e, t, r) {
  return Je.current.useReducer(e, t, r);
};
Z.useRef = function (e) {
  return Je.current.useRef(e);
};
Z.useState = function (e) {
  return Je.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, r) {
  return Je.current.useSyncExternalStore(e, t, r);
};
Z.useTransition = function () {
  return Je.current.useTransition();
};
Z.version = "18.2.0";
Vh.exports = Z;
var E = Vh.exports;
const q = mx(E),
  lc = px({ __proto__: null, default: q }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _x = E,
  Px = Symbol.for("react.element"),
  Ox = Symbol.for("react.fragment"),
  Rx = Object.prototype.hasOwnProperty,
  Ix = _x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Mx = { key: !0, ref: !0, __self: !0, __source: !0 };
function tg(e, t, r) {
  var n,
    i = {},
    s = null,
    o = null;
  r !== void 0 && (s = "" + r),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (n in t) Rx.call(t, n) && !Mx.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: Px,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Ix.current,
  };
}
hl.Fragment = Ox;
hl.jsx = tg;
hl.jsxs = tg;
Kh.exports = hl;
var u = Kh.exports,
  uc = {},
  rg = { exports: {} },
  xt = {},
  ng = { exports: {} },
  ig = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, I) {
    var D = R.length;
    R.push(I);
    e: for (; 0 < D; ) {
      var B = (D - 1) >>> 1,
        Q = R[B];
      if (0 < i(Q, I)) (R[B] = I), (R[D] = Q), (D = B);
      else break e;
    }
  }
  function r(R) {
    return R.length === 0 ? null : R[0];
  }
  function n(R) {
    if (R.length === 0) return null;
    var I = R[0],
      D = R.pop();
    if (D !== I) {
      R[0] = D;
      e: for (var B = 0, Q = R.length, ie = Q >>> 1; B < ie; ) {
        var H = 2 * (B + 1) - 1,
          F = R[H],
          X = H + 1,
          K = R[X];
        if (0 > i(F, D))
          X < Q && 0 > i(K, F)
            ? ((R[B] = K), (R[X] = D), (B = X))
            : ((R[B] = F), (R[H] = D), (B = H));
        else if (X < Q && 0 > i(K, D)) (R[B] = K), (R[X] = D), (B = X);
        else break e;
      }
    }
    return I;
  }
  function i(R, I) {
    var D = R.sortIndex - I.sortIndex;
    return D !== 0 ? D : R.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    m = 1,
    g = null,
    d = 3,
    v = !1,
    w = !1,
    x = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(R) {
    for (var I = r(c); I !== null; ) {
      if (I.callback === null) n(c);
      else if (I.startTime <= R)
        n(c), (I.sortIndex = I.expirationTime), t(l, I);
      else break;
      I = r(c);
    }
  }
  function y(R) {
    if (((x = !1), h(R), !w))
      if (r(l) !== null) (w = !0), M(S);
      else {
        var I = r(c);
        I !== null && U(y, I.startTime - R);
      }
  }
  function S(R, I) {
    (w = !1), x && ((x = !1), f(k), (k = -1)), (v = !0);
    var D = d;
    try {
      for (
        h(I), g = r(l);
        g !== null && (!(g.expirationTime > I) || (R && !T()));

      ) {
        var B = g.callback;
        if (typeof B == "function") {
          (g.callback = null), (d = g.priorityLevel);
          var Q = B(g.expirationTime <= I);
          (I = e.unstable_now()),
            typeof Q == "function" ? (g.callback = Q) : g === r(l) && n(l),
            h(I);
        } else n(l);
        g = r(l);
      }
      if (g !== null) var ie = !0;
      else {
        var H = r(c);
        H !== null && U(y, H.startTime - I), (ie = !1);
      }
      return ie;
    } finally {
      (g = null), (d = D), (v = !1);
    }
  }
  var C = !1,
    A = null,
    k = -1,
    N = 5,
    j = -1;
  function T() {
    return !(e.unstable_now() - j < N);
  }
  function _() {
    if (A !== null) {
      var R = e.unstable_now();
      j = R;
      var I = !0;
      try {
        I = A(!0, R);
      } finally {
        I ? P() : ((C = !1), (A = null));
      }
    } else C = !1;
  }
  var P;
  if (typeof p == "function")
    P = function () {
      p(_);
    };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(),
      L = O.port2;
    (O.port1.onmessage = _),
      (P = function () {
        L.postMessage(null);
      });
  } else
    P = function () {
      b(_, 0);
    };
  function M(R) {
    (A = R), C || ((C = !0), P());
  }
  function U(R, I) {
    k = b(function () {
      R(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), M(S));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (R) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var D = d;
      d = I;
      try {
        return R();
      } finally {
        d = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, I) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var D = d;
      d = R;
      try {
        return I();
      } finally {
        d = D;
      }
    }),
    (e.unstable_scheduleCallback = function (R, I, D) {
      var B = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? B + D : B))
          : (D = B),
        R)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = D + Q),
        (R = {
          id: m++,
          callback: I,
          priorityLevel: R,
          startTime: D,
          expirationTime: Q,
          sortIndex: -1,
        }),
        D > B
          ? ((R.sortIndex = D),
            t(c, R),
            r(l) === null &&
              R === r(c) &&
              (x ? (f(k), (k = -1)) : (x = !0), U(y, D - B)))
          : ((R.sortIndex = Q), t(l, R), w || v || ((w = !0), M(S))),
        R
      );
    }),
    (e.unstable_shouldYield = T),
    (e.unstable_wrapCallback = function (R) {
      var I = d;
      return function () {
        var D = d;
        d = I;
        try {
          return R.apply(this, arguments);
        } finally {
          d = D;
        }
      };
    });
})(ig);
ng.exports = ig;
var Lx = ng.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sg = E,
  yt = Lx;
function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var og = new Set(),
  Cs = {};
function _n(e, t) {
  pi(e, t), pi(e + "Capture", t);
}
function pi(e, t) {
  for (Cs[e] = t, e = 0; e < t.length; e++) og.add(t[e]);
}
var hr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  cc = Object.prototype.hasOwnProperty,
  Dx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gp = {},
  yp = {};
function zx(e) {
  return cc.call(yp, e)
    ? !0
    : cc.call(gp, e)
    ? !1
    : Dx.test(e)
    ? (yp[e] = !0)
    : ((gp[e] = !0), !1);
}
function Ux(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Bx(e, t, r, n) {
  if (t === null || typeof t > "u" || Ux(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
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
function Ze(e, t, r, n, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Be[e] = new Ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Be[t] = new Ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Be[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Be[e] = new Ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Be[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Be[e] = new Ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Be[e] = new Ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Be[e] = new Ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Be[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qf = /[\-:]([a-z])/g;
function Wf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qf, Wf);
    Be[t] = new Ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qf, Wf);
    Be[t] = new Ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qf, Wf);
  Be[t] = new Ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Be[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Be.xlinkHref = new Ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Be[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hf(e, t, r, n) {
  var i = Be.hasOwnProperty(t) ? Be[t] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Bx(t, r, i, n) && (r = null),
    n || i === null
      ? zx(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : i.mustUseProperty
      ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
      : ((t = i.attributeName),
        (n = i.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var br = sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  jo = Symbol.for("react.element"),
  Wn = Symbol.for("react.portal"),
  Hn = Symbol.for("react.fragment"),
  Kf = Symbol.for("react.strict_mode"),
  fc = Symbol.for("react.profiler"),
  ag = Symbol.for("react.provider"),
  lg = Symbol.for("react.context"),
  Vf = Symbol.for("react.forward_ref"),
  dc = Symbol.for("react.suspense"),
  pc = Symbol.for("react.suspense_list"),
  qf = Symbol.for("react.memo"),
  jr = Symbol.for("react.lazy"),
  ug = Symbol.for("react.offscreen"),
  vp = Symbol.iterator;
function Fi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vp && e[vp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ve = Object.assign,
  pu;
function es(e) {
  if (pu === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      pu = (t && t[1]) || "";
    }
  return (
    `
` +
    pu +
    e
  );
}
var mu = !1;
function hu(e, t) {
  if (!e || mu) return "";
  mu = !0;
  var r = Error.prepareStackTrace;
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
        } catch (c) {
          var n = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          n = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        n = c;
      }
      e();
    }
  } catch (c) {
    if (c && n && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = n.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (mu = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? es(e) : "";
}
function Fx(e) {
  switch (e.tag) {
    case 5:
      return es(e.type);
    case 16:
      return es("Lazy");
    case 13:
      return es("Suspense");
    case 19:
      return es("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = hu(e.type, !1)), e;
    case 11:
      return (e = hu(e.type.render, !1)), e;
    case 1:
      return (e = hu(e.type, !0)), e;
    default:
      return "";
  }
}
function mc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Hn:
      return "Fragment";
    case Wn:
      return "Portal";
    case fc:
      return "Profiler";
    case Kf:
      return "StrictMode";
    case dc:
      return "Suspense";
    case pc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case lg:
        return (e.displayName || "Context") + ".Consumer";
      case ag:
        return (e._context.displayName || "Context") + ".Provider";
      case Vf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qf:
        return (
          (t = e.displayName || null), t !== null ? t : mc(e.type) || "Memo"
        );
      case jr:
        (t = e._payload), (e = e._init);
        try {
          return mc(e(t));
        } catch {}
    }
  return null;
}
function $x(e) {
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
      return mc(t);
    case 8:
      return t === Kf ? "StrictMode" : "Mode";
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
function Kr(e) {
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
function cg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Qx(e) {
  var t = cg(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var i = r.get,
      s = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (n = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (o) {
          n = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function No(e) {
  e._valueTracker || (e._valueTracker = Qx(e));
}
function fg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = cg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function ka(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function hc(e, t) {
  var r = t.checked;
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function xp(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = Kr(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function dg(e, t) {
  (t = t.checked), t != null && Hf(e, "checked", t, !1);
}
function gc(e, t) {
  dg(e, t);
  var r = Kr(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? yc(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && yc(e, t.type, Kr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function wp(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function yc(e, t, r) {
  (t !== "number" || ka(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var ts = Array.isArray;
function ni(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Kr(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function vc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Sp(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(z(92));
      if (ts(r)) {
        if (1 < r.length) throw Error(z(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Kr(r) };
}
function pg(e, t) {
  var r = Kr(t.value),
    n = Kr(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function bp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function mg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? mg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var To,
  hg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        To = To || document.createElement("div"),
          To.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = To.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Es(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ls = {
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
  Wx = ["Webkit", "ms", "Moz", "O"];
Object.keys(ls).forEach(function (e) {
  Wx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ls[t] = ls[e]);
  });
});
function gg(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (ls.hasOwnProperty(e) && ls[e])
    ? ("" + t).trim()
    : t + "px";
}
function yg(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = gg(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var Hx = ve(
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
function wc(e, t) {
  if (t) {
    if (Hx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function Sc(e, t) {
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
var bc = null;
function Yf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ac = null,
  ii = null,
  si = null;
function Ap(e) {
  if ((e = oo(e))) {
    if (typeof Ac != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = wl(t)), Ac(e.stateNode, e.type, t));
  }
}
function vg(e) {
  ii ? (si ? si.push(e) : (si = [e])) : (ii = e);
}
function xg() {
  if (ii) {
    var e = ii,
      t = si;
    if (((si = ii = null), Ap(e), t)) for (e = 0; e < t.length; e++) Ap(t[e]);
  }
}
function wg(e, t) {
  return e(t);
}
function Sg() {}
var gu = !1;
function bg(e, t, r) {
  if (gu) return e(t, r);
  gu = !0;
  try {
    return wg(e, t, r);
  } finally {
    (gu = !1), (ii !== null || si !== null) && (Sg(), xg());
  }
}
function ks(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = wl(r);
  if (n === null) return null;
  r = n[t];
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
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(z(231, t, typeof r));
  return r;
}
var Cc = !1;
if (hr)
  try {
    var $i = {};
    Object.defineProperty($i, "passive", {
      get: function () {
        Cc = !0;
      },
    }),
      window.addEventListener("test", $i, $i),
      window.removeEventListener("test", $i, $i);
  } catch {
    Cc = !1;
  }
function Kx(e, t, r, n, i, s, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, c);
  } catch (m) {
    this.onError(m);
  }
}
var us = !1,
  ja = null,
  Na = !1,
  Ec = null,
  Vx = {
    onError: function (e) {
      (us = !0), (ja = e);
    },
  };
function qx(e, t, r, n, i, s, o, a, l) {
  (us = !1), (ja = null), Kx.apply(Vx, arguments);
}
function Yx(e, t, r, n, i, s, o, a, l) {
  if ((qx.apply(this, arguments), us)) {
    if (us) {
      var c = ja;
      (us = !1), (ja = null);
    } else throw Error(z(198));
    Na || ((Na = !0), (Ec = c));
  }
}
function Pn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Ag(e) {
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
function Cp(e) {
  if (Pn(e) !== e) throw Error(z(188));
}
function Xx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === r) return Cp(i), e;
        if (s === n) return Cp(i), t;
        s = s.sibling;
      }
      throw Error(z(188));
    }
    if (r.return !== n.return) (r = i), (n = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(z(189));
      }
    }
    if (r.alternate !== n) throw Error(z(190));
  }
  if (r.tag !== 3) throw Error(z(188));
  return r.stateNode.current === r ? e : t;
}
function Cg(e) {
  return (e = Xx(e)), e !== null ? Eg(e) : null;
}
function Eg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Eg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var kg = yt.unstable_scheduleCallback,
  Ep = yt.unstable_cancelCallback,
  Gx = yt.unstable_shouldYield,
  Jx = yt.unstable_requestPaint,
  Ae = yt.unstable_now,
  Zx = yt.unstable_getCurrentPriorityLevel,
  Xf = yt.unstable_ImmediatePriority,
  jg = yt.unstable_UserBlockingPriority,
  Ta = yt.unstable_NormalPriority,
  e1 = yt.unstable_LowPriority,
  Ng = yt.unstable_IdlePriority,
  gl = null,
  tr = null;
function t1(e) {
  if (tr && typeof tr.onCommitFiberRoot == "function")
    try {
      tr.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var zt = Math.clz32 ? Math.clz32 : i1,
  r1 = Math.log,
  n1 = Math.LN2;
function i1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((r1(e) / n1) | 0)) | 0;
}
var _o = 64,
  Po = 4194304;
function rs(e) {
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
function _a(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = r & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (n = rs(a)) : ((s &= o), s !== 0 && (n = rs(s)));
  } else (o = r & ~i), o !== 0 ? (n = rs(o)) : s !== 0 && (n = rs(s));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & i) &&
    ((i = n & -n), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - zt(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}
function s1(e, t) {
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
function o1(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - zt(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & r) || a & n) && (i[o] = s1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function kc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Tg() {
  var e = _o;
  return (_o <<= 1), !(_o & 4194240) && (_o = 64), e;
}
function yu(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function io(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - zt(t)),
    (e[t] = r);
}
function a1(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - zt(r),
      s = 1 << i;
    (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~s);
  }
}
function Gf(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - zt(r),
      i = 1 << n;
    (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
  }
}
var ae = 0;
function _g(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Pg,
  Jf,
  Og,
  Rg,
  Ig,
  jc = !1,
  Oo = [],
  Lr = null,
  Dr = null,
  zr = null,
  js = new Map(),
  Ns = new Map(),
  Tr = [],
  l1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function kp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lr = null;
      break;
    case "dragenter":
    case "dragleave":
      Dr = null;
      break;
    case "mouseover":
    case "mouseout":
      zr = null;
      break;
    case "pointerover":
    case "pointerout":
      js.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ns.delete(t.pointerId);
  }
}
function Qi(e, t, r, n, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = oo(t)), t !== null && Jf(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function u1(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return (Lr = Qi(Lr, e, t, r, n, i)), !0;
    case "dragenter":
      return (Dr = Qi(Dr, e, t, r, n, i)), !0;
    case "mouseover":
      return (zr = Qi(zr, e, t, r, n, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return js.set(s, Qi(js.get(s) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Ns.set(s, Qi(Ns.get(s) || null, e, t, r, n, i)), !0
      );
  }
  return !1;
}
function Mg(e) {
  var t = dn(e.target);
  if (t !== null) {
    var r = Pn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Ag(r)), t !== null)) {
          (e.blockedOn = t),
            Ig(e.priority, function () {
              Og(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function sa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Nc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (bc = n), r.target.dispatchEvent(n), (bc = null);
    } else return (t = oo(r)), t !== null && Jf(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function jp(e, t, r) {
  sa(e) && r.delete(t);
}
function c1() {
  (jc = !1),
    Lr !== null && sa(Lr) && (Lr = null),
    Dr !== null && sa(Dr) && (Dr = null),
    zr !== null && sa(zr) && (zr = null),
    js.forEach(jp),
    Ns.forEach(jp);
}
function Wi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    jc ||
      ((jc = !0),
      yt.unstable_scheduleCallback(yt.unstable_NormalPriority, c1)));
}
function Ts(e) {
  function t(i) {
    return Wi(i, e);
  }
  if (0 < Oo.length) {
    Wi(Oo[0], e);
    for (var r = 1; r < Oo.length; r++) {
      var n = Oo[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Lr !== null && Wi(Lr, e),
      Dr !== null && Wi(Dr, e),
      zr !== null && Wi(zr, e),
      js.forEach(t),
      Ns.forEach(t),
      r = 0;
    r < Tr.length;
    r++
  )
    (n = Tr[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Tr.length && ((r = Tr[0]), r.blockedOn === null); )
    Mg(r), r.blockedOn === null && Tr.shift();
}
var oi = br.ReactCurrentBatchConfig,
  Pa = !0;
function f1(e, t, r, n) {
  var i = ae,
    s = oi.transition;
  oi.transition = null;
  try {
    (ae = 1), Zf(e, t, r, n);
  } finally {
    (ae = i), (oi.transition = s);
  }
}
function d1(e, t, r, n) {
  var i = ae,
    s = oi.transition;
  oi.transition = null;
  try {
    (ae = 4), Zf(e, t, r, n);
  } finally {
    (ae = i), (oi.transition = s);
  }
}
function Zf(e, t, r, n) {
  if (Pa) {
    var i = Nc(e, t, r, n);
    if (i === null) ju(e, t, n, Oa, r), kp(e, n);
    else if (u1(i, e, t, r, n)) n.stopPropagation();
    else if ((kp(e, n), t & 4 && -1 < l1.indexOf(e))) {
      for (; i !== null; ) {
        var s = oo(i);
        if (
          (s !== null && Pg(s),
          (s = Nc(e, t, r, n)),
          s === null && ju(e, t, n, Oa, r),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && n.stopPropagation();
    } else ju(e, t, n, null, r);
  }
}
var Oa = null;
function Nc(e, t, r, n) {
  if (((Oa = null), (e = Yf(n)), (e = dn(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Ag(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Oa = e), null;
}
function Lg(e) {
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
      switch (Zx()) {
        case Xf:
          return 1;
        case jg:
          return 4;
        case Ta:
        case e1:
          return 16;
        case Ng:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pr = null,
  ed = null,
  oa = null;
function Dg() {
  if (oa) return oa;
  var e,
    t = ed,
    r = t.length,
    n,
    i = "value" in Pr ? Pr.value : Pr.textContent,
    s = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === i[s - n]; n++);
  return (oa = i.slice(e, 1 < n ? 1 - n : void 0));
}
function aa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ro() {
  return !0;
}
function Np() {
  return !1;
}
function wt(e) {
  function t(r, n, i, s, o) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ro
        : Np),
      (this.isPropagationStopped = Np),
      this
    );
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Ro));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ro));
      },
      persist: function () {},
      isPersistent: Ro,
    }),
    t
  );
}
var Oi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  td = wt(Oi),
  so = ve({}, Oi, { view: 0, detail: 0 }),
  p1 = wt(so),
  vu,
  xu,
  Hi,
  yl = ve({}, so, {
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
    getModifierState: rd,
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
        : (e !== Hi &&
            (Hi && e.type === "mousemove"
              ? ((vu = e.screenX - Hi.screenX), (xu = e.screenY - Hi.screenY))
              : (xu = vu = 0),
            (Hi = e)),
          vu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xu;
    },
  }),
  Tp = wt(yl),
  m1 = ve({}, yl, { dataTransfer: 0 }),
  h1 = wt(m1),
  g1 = ve({}, so, { relatedTarget: 0 }),
  wu = wt(g1),
  y1 = ve({}, Oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  v1 = wt(y1),
  x1 = ve({}, Oi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  w1 = wt(x1),
  S1 = ve({}, Oi, { data: 0 }),
  _p = wt(S1),
  b1 = {
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
  A1 = {
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
  C1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function E1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = C1[e]) ? !!t[e] : !1;
}
function rd() {
  return E1;
}
var k1 = ve({}, so, {
    key: function (e) {
      if (e.key) {
        var t = b1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = aa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? A1[e.keyCode] || "Unidentified"
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
    getModifierState: rd,
    charCode: function (e) {
      return e.type === "keypress" ? aa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? aa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  j1 = wt(k1),
  N1 = ve({}, yl, {
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
  Pp = wt(N1),
  T1 = ve({}, so, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rd,
  }),
  _1 = wt(T1),
  P1 = ve({}, Oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  O1 = wt(P1),
  R1 = ve({}, yl, {
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
  I1 = wt(R1),
  M1 = [9, 13, 27, 32],
  nd = hr && "CompositionEvent" in window,
  cs = null;
hr && "documentMode" in document && (cs = document.documentMode);
var L1 = hr && "TextEvent" in window && !cs,
  zg = hr && (!nd || (cs && 8 < cs && 11 >= cs)),
  Op = " ",
  Rp = !1;
function Ug(e, t) {
  switch (e) {
    case "keyup":
      return M1.indexOf(t.keyCode) !== -1;
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
function Bg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kn = !1;
function D1(e, t) {
  switch (e) {
    case "compositionend":
      return Bg(t);
    case "keypress":
      return t.which !== 32 ? null : ((Rp = !0), Op);
    case "textInput":
      return (e = t.data), e === Op && Rp ? null : e;
    default:
      return null;
  }
}
function z1(e, t) {
  if (Kn)
    return e === "compositionend" || (!nd && Ug(e, t))
      ? ((e = Dg()), (oa = ed = Pr = null), (Kn = !1), e)
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
      return zg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var U1 = {
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
function Ip(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!U1[e.type] : t === "textarea";
}
function Fg(e, t, r, n) {
  vg(n),
    (t = Ra(t, "onChange")),
    0 < t.length &&
      ((r = new td("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var fs = null,
  _s = null;
function B1(e) {
  Jg(e, 0);
}
function vl(e) {
  var t = Yn(e);
  if (fg(t)) return e;
}
function F1(e, t) {
  if (e === "change") return t;
}
var $g = !1;
if (hr) {
  var Su;
  if (hr) {
    var bu = "oninput" in document;
    if (!bu) {
      var Mp = document.createElement("div");
      Mp.setAttribute("oninput", "return;"),
        (bu = typeof Mp.oninput == "function");
    }
    Su = bu;
  } else Su = !1;
  $g = Su && (!document.documentMode || 9 < document.documentMode);
}
function Lp() {
  fs && (fs.detachEvent("onpropertychange", Qg), (_s = fs = null));
}
function Qg(e) {
  if (e.propertyName === "value" && vl(_s)) {
    var t = [];
    Fg(t, _s, e, Yf(e)), bg(B1, t);
  }
}
function $1(e, t, r) {
  e === "focusin"
    ? (Lp(), (fs = t), (_s = r), fs.attachEvent("onpropertychange", Qg))
    : e === "focusout" && Lp();
}
function Q1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return vl(_s);
}
function W1(e, t) {
  if (e === "click") return vl(t);
}
function H1(e, t) {
  if (e === "input" || e === "change") return vl(t);
}
function K1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qt = typeof Object.is == "function" ? Object.is : K1;
function Ps(e, t) {
  if (Qt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!cc.call(t, i) || !Qt(e[i], t[i])) return !1;
  }
  return !0;
}
function Dp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zp(e, t) {
  var r = Dp(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Dp(r);
  }
}
function Wg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Wg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Hg() {
  for (var e = window, t = ka(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = ka(e.document);
  }
  return t;
}
function id(e) {
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
function V1(e) {
  var t = Hg(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Wg(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && id(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = r.textContent.length,
          s = Math.min(n.start, i);
        (n = n.end === void 0 ? s : Math.min(n.end, i)),
          !e.extend && s > n && ((i = n), (n = s), (s = i)),
          (i = zp(r, s));
        var o = zp(r, n);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > n
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var q1 = hr && "documentMode" in document && 11 >= document.documentMode,
  Vn = null,
  Tc = null,
  ds = null,
  _c = !1;
function Up(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  _c ||
    Vn == null ||
    Vn !== ka(n) ||
    ((n = Vn),
    "selectionStart" in n && id(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (ds && Ps(ds, n)) ||
      ((ds = n),
      (n = Ra(Tc, "onSelect")),
      0 < n.length &&
        ((t = new td("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Vn))));
}
function Io(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var qn = {
    animationend: Io("Animation", "AnimationEnd"),
    animationiteration: Io("Animation", "AnimationIteration"),
    animationstart: Io("Animation", "AnimationStart"),
    transitionend: Io("Transition", "TransitionEnd"),
  },
  Au = {},
  Kg = {};
hr &&
  ((Kg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete qn.animationend.animation,
    delete qn.animationiteration.animation,
    delete qn.animationstart.animation),
  "TransitionEvent" in window || delete qn.transitionend.transition);
function xl(e) {
  if (Au[e]) return Au[e];
  if (!qn[e]) return e;
  var t = qn[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Kg) return (Au[e] = t[r]);
  return e;
}
var Vg = xl("animationend"),
  qg = xl("animationiteration"),
  Yg = xl("animationstart"),
  Xg = xl("transitionend"),
  Gg = new Map(),
  Bp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Gr(e, t) {
  Gg.set(e, t), _n(t, [e]);
}
for (var Cu = 0; Cu < Bp.length; Cu++) {
  var Eu = Bp[Cu],
    Y1 = Eu.toLowerCase(),
    X1 = Eu[0].toUpperCase() + Eu.slice(1);
  Gr(Y1, "on" + X1);
}
Gr(Vg, "onAnimationEnd");
Gr(qg, "onAnimationIteration");
Gr(Yg, "onAnimationStart");
Gr("dblclick", "onDoubleClick");
Gr("focusin", "onFocus");
Gr("focusout", "onBlur");
Gr(Xg, "onTransitionEnd");
pi("onMouseEnter", ["mouseout", "mouseover"]);
pi("onMouseLeave", ["mouseout", "mouseover"]);
pi("onPointerEnter", ["pointerout", "pointerover"]);
pi("onPointerLeave", ["pointerout", "pointerover"]);
_n(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
_n(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
_n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_n(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
_n(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
_n(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ns =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  G1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));
function Fp(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), Yx(n, t, void 0, e), (e.currentTarget = null);
}
function Jg(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = n.length - 1; 0 <= o; o--) {
          var a = n[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          Fp(i, a, c), (s = l);
        }
      else
        for (o = 0; o < n.length; o++) {
          if (
            ((a = n[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          Fp(i, a, c), (s = l);
        }
    }
  }
  if (Na) throw ((e = Ec), (Na = !1), (Ec = null), e);
}
function ce(e, t) {
  var r = t[Mc];
  r === void 0 && (r = t[Mc] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Zg(t, e, 2, !1), r.add(n));
}
function ku(e, t, r) {
  var n = 0;
  t && (n |= 4), Zg(r, e, n, t);
}
var Mo = "_reactListening" + Math.random().toString(36).slice(2);
function Os(e) {
  if (!e[Mo]) {
    (e[Mo] = !0),
      og.forEach(function (r) {
        r !== "selectionchange" && (G1.has(r) || ku(r, !1, e), ku(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mo] || ((t[Mo] = !0), ku("selectionchange", !1, t));
  }
}
function Zg(e, t, r, n) {
  switch (Lg(t)) {
    case 1:
      var i = f1;
      break;
    case 4:
      i = d1;
      break;
    default:
      i = Zf;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !Cc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
      ? e.addEventListener(t, r, { passive: i })
      : e.addEventListener(t, r, !1);
}
function ju(e, t, r, n, i) {
  var s = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var o = n.tag;
      if (o === 3 || o === 4) {
        var a = n.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = n.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = dn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            n = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  bg(function () {
    var c = s,
      m = Yf(r),
      g = [];
    e: {
      var d = Gg.get(e);
      if (d !== void 0) {
        var v = td,
          w = e;
        switch (e) {
          case "keypress":
            if (aa(r) === 0) break e;
          case "keydown":
          case "keyup":
            v = j1;
            break;
          case "focusin":
            (w = "focus"), (v = wu);
            break;
          case "focusout":
            (w = "blur"), (v = wu);
            break;
          case "beforeblur":
          case "afterblur":
            v = wu;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Tp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = h1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = _1;
            break;
          case Vg:
          case qg:
          case Yg:
            v = v1;
            break;
          case Xg:
            v = O1;
            break;
          case "scroll":
            v = p1;
            break;
          case "wheel":
            v = I1;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = w1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Pp;
        }
        var x = (t & 4) !== 0,
          b = !x && e === "scroll",
          f = x ? (d !== null ? d + "Capture" : null) : d;
        x = [];
        for (var p = c, h; p !== null; ) {
          h = p;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              f !== null && ((y = ks(p, f)), y != null && x.push(Rs(p, y, h)))),
            b)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((d = new v(d, w, null, r, m)), g.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          d &&
            r !== bc &&
            (w = r.relatedTarget || r.fromElement) &&
            (dn(w) || w[gr]))
        )
          break e;
        if (
          (v || d) &&
          ((d =
            m.window === m
              ? m
              : (d = m.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          v
            ? ((w = r.relatedTarget || r.toElement),
              (v = c),
              (w = w ? dn(w) : null),
              w !== null &&
                ((b = Pn(w)), w !== b || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = c)),
          v !== w)
        ) {
          if (
            ((x = Tp),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Pp),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (p = "pointer")),
            (b = v == null ? d : Yn(v)),
            (h = w == null ? d : Yn(w)),
            (d = new x(y, p + "leave", v, r, m)),
            (d.target = b),
            (d.relatedTarget = h),
            (y = null),
            dn(m) === c &&
              ((x = new x(f, p + "enter", w, r, m)),
              (x.target = h),
              (x.relatedTarget = b),
              (y = x)),
            (b = y),
            v && w)
          )
            t: {
              for (x = v, f = w, p = 0, h = x; h; h = Ln(h)) p++;
              for (h = 0, y = f; y; y = Ln(y)) h++;
              for (; 0 < p - h; ) (x = Ln(x)), p--;
              for (; 0 < h - p; ) (f = Ln(f)), h--;
              for (; p--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                (x = Ln(x)), (f = Ln(f));
              }
              x = null;
            }
          else x = null;
          v !== null && $p(g, d, v, x, !1),
            w !== null && b !== null && $p(g, b, w, x, !0);
        }
      }
      e: {
        if (
          ((d = c ? Yn(c) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === "select" || (v === "input" && d.type === "file"))
        )
          var S = F1;
        else if (Ip(d))
          if ($g) S = H1;
          else {
            S = Q1;
            var C = $1;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = W1);
        if (S && (S = S(e, c))) {
          Fg(g, S, r, m);
          break e;
        }
        C && C(e, d, c),
          e === "focusout" &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === "number" &&
            yc(d, "number", d.value);
      }
      switch (((C = c ? Yn(c) : window), e)) {
        case "focusin":
          (Ip(C) || C.contentEditable === "true") &&
            ((Vn = C), (Tc = c), (ds = null));
          break;
        case "focusout":
          ds = Tc = Vn = null;
          break;
        case "mousedown":
          _c = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_c = !1), Up(g, r, m);
          break;
        case "selectionchange":
          if (q1) break;
        case "keydown":
        case "keyup":
          Up(g, r, m);
      }
      var A;
      if (nd)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Kn
          ? Ug(e, r) && (k = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (zg &&
          r.locale !== "ko" &&
          (Kn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Kn && (A = Dg())
            : ((Pr = m),
              (ed = "value" in Pr ? Pr.value : Pr.textContent),
              (Kn = !0))),
        (C = Ra(c, k)),
        0 < C.length &&
          ((k = new _p(k, e, null, r, m)),
          g.push({ event: k, listeners: C }),
          A ? (k.data = A) : ((A = Bg(r)), A !== null && (k.data = A)))),
        (A = L1 ? D1(e, r) : z1(e, r)) &&
          ((c = Ra(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new _p("onBeforeInput", "beforeinput", null, r, m)),
            g.push({ event: m, listeners: c }),
            (m.data = A)));
    }
    Jg(g, t);
  });
}
function Rs(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Ra(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = ks(e, r)),
      s != null && n.unshift(Rs(e, s, i)),
      (s = ks(e, t)),
      s != null && n.push(Rs(e, s, i))),
      (e = e.return);
  }
  return n;
}
function Ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function $p(e, t, r, n, i) {
  for (var s = t._reactName, o = []; r !== null && r !== n; ) {
    var a = r,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === n) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = ks(r, s)), l != null && o.unshift(Rs(r, l, a)))
        : i || ((l = ks(r, s)), l != null && o.push(Rs(r, l, a)))),
      (r = r.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var J1 = /\r\n?/g,
  Z1 = /\u0000|\uFFFD/g;
function Qp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      J1,
      `
`
    )
    .replace(Z1, "");
}
function Lo(e, t, r) {
  if (((t = Qp(t)), Qp(e) !== t && r)) throw Error(z(425));
}
function Ia() {}
var Pc = null,
  Oc = null;
function Rc(e, t) {
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
var Ic = typeof setTimeout == "function" ? setTimeout : void 0,
  ew = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wp = typeof Promise == "function" ? Promise : void 0,
  tw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wp < "u"
      ? function (e) {
          return Wp.resolve(null).then(e).catch(rw);
        }
      : Ic;
function rw(e) {
  setTimeout(function () {
    throw e;
  });
}
function Nu(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(i), Ts(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  Ts(t);
}
function Ur(e) {
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
function Hp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ri = Math.random().toString(36).slice(2),
  Jt = "__reactFiber$" + Ri,
  Is = "__reactProps$" + Ri,
  gr = "__reactContainer$" + Ri,
  Mc = "__reactEvents$" + Ri,
  nw = "__reactListeners$" + Ri,
  iw = "__reactHandles$" + Ri;
function dn(e) {
  var t = e[Jt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[gr] || r[Jt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Hp(e); e !== null; ) {
          if ((r = e[Jt])) return r;
          e = Hp(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function oo(e) {
  return (
    (e = e[Jt] || e[gr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Yn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function wl(e) {
  return e[Is] || null;
}
var Lc = [],
  Xn = -1;
function Jr(e) {
  return { current: e };
}
function de(e) {
  0 > Xn || ((e.current = Lc[Xn]), (Lc[Xn] = null), Xn--);
}
function ue(e, t) {
  Xn++, (Lc[Xn] = e.current), (e.current = t);
}
var Vr = {},
  Ke = Jr(Vr),
  it = Jr(!1),
  Sn = Vr;
function mi(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Vr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in r) i[s] = t[s];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function st(e) {
  return (e = e.childContextTypes), e != null;
}
function Ma() {
  de(it), de(Ke);
}
function Kp(e, t, r) {
  if (Ke.current !== Vr) throw Error(z(168));
  ue(Ke, t), ue(it, r);
}
function ey(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(z(108, $x(e) || "Unknown", i));
  return ve({}, r, n);
}
function La(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vr),
    (Sn = Ke.current),
    ue(Ke, e),
    ue(it, it.current),
    !0
  );
}
function Vp(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(z(169));
  r
    ? ((e = ey(e, t, Sn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      de(it),
      de(Ke),
      ue(Ke, e))
    : de(it),
    ue(it, r);
}
var ur = null,
  Sl = !1,
  Tu = !1;
function ty(e) {
  ur === null ? (ur = [e]) : ur.push(e);
}
function sw(e) {
  (Sl = !0), ty(e);
}
function Zr() {
  if (!Tu && ur !== null) {
    Tu = !0;
    var e = 0,
      t = ae;
    try {
      var r = ur;
      for (ae = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (ur = null), (Sl = !1);
    } catch (i) {
      throw (ur !== null && (ur = ur.slice(e + 1)), kg(Xf, Zr), i);
    } finally {
      (ae = t), (Tu = !1);
    }
  }
  return null;
}
var Gn = [],
  Jn = 0,
  Da = null,
  za = 0,
  St = [],
  bt = 0,
  bn = null,
  fr = 1,
  dr = "";
function on(e, t) {
  (Gn[Jn++] = za), (Gn[Jn++] = Da), (Da = e), (za = t);
}
function ry(e, t, r) {
  (St[bt++] = fr), (St[bt++] = dr), (St[bt++] = bn), (bn = e);
  var n = fr;
  e = dr;
  var i = 32 - zt(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var s = 32 - zt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (n & ((1 << o) - 1)).toString(32)),
      (n >>= o),
      (i -= o),
      (fr = (1 << (32 - zt(t) + i)) | (r << i) | n),
      (dr = s + e);
  } else (fr = (1 << s) | (r << i) | n), (dr = e);
}
function sd(e) {
  e.return !== null && (on(e, 1), ry(e, 1, 0));
}
function od(e) {
  for (; e === Da; )
    (Da = Gn[--Jn]), (Gn[Jn] = null), (za = Gn[--Jn]), (Gn[Jn] = null);
  for (; e === bn; )
    (bn = St[--bt]),
      (St[bt] = null),
      (dr = St[--bt]),
      (St[bt] = null),
      (fr = St[--bt]),
      (St[bt] = null);
}
var ht = null,
  mt = null,
  he = !1,
  Dt = null;
function ny(e, t) {
  var r = Ct(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function qp(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ht = e), (mt = Ur(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ht = e), (mt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = bn !== null ? { id: fr, overflow: dr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Ct(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (ht = e),
            (mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Dc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zc(e) {
  if (he) {
    var t = mt;
    if (t) {
      var r = t;
      if (!qp(e, t)) {
        if (Dc(e)) throw Error(z(418));
        t = Ur(r.nextSibling);
        var n = ht;
        t && qp(e, t)
          ? ny(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (ht = e));
      }
    } else {
      if (Dc(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (ht = e);
    }
  }
}
function Yp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ht = e;
}
function Do(e) {
  if (e !== ht) return !1;
  if (!he) return Yp(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Rc(e.type, e.memoizedProps))),
    t && (t = mt))
  ) {
    if (Dc(e)) throw (iy(), Error(z(418)));
    for (; t; ) ny(e, t), (t = Ur(t.nextSibling));
  }
  if ((Yp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              mt = Ur(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      mt = null;
    }
  } else mt = ht ? Ur(e.stateNode.nextSibling) : null;
  return !0;
}
function iy() {
  for (var e = mt; e; ) e = Ur(e.nextSibling);
}
function hi() {
  (mt = ht = null), (he = !1);
}
function ad(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
var ow = br.ReactCurrentBatchConfig;
function It(e, t) {
  if (e && e.defaultProps) {
    (t = ve({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Ua = Jr(null),
  Ba = null,
  Zn = null,
  ld = null;
function ud() {
  ld = Zn = Ba = null;
}
function cd(e) {
  var t = Ua.current;
  de(Ua), (e._currentValue = t);
}
function Uc(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function ai(e, t) {
  (Ba = e),
    (ld = Zn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (rt = !0), (e.firstContext = null));
}
function kt(e) {
  var t = e._currentValue;
  if (ld !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Zn === null)) {
      if (Ba === null) throw Error(z(308));
      (Zn = e), (Ba.dependencies = { lanes: 0, firstContext: e });
    } else Zn = Zn.next = e;
  return t;
}
var pn = null;
function fd(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function sy(e, t, r, n) {
  var i = t.interleaved;
  return (
    i === null ? ((r.next = r), fd(t)) : ((r.next = i.next), (i.next = r)),
    (t.interleaved = r),
    yr(e, n)
  );
}
function yr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Nr = !1;
function dd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function oy(e, t) {
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
function pr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Br(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), ee & 2)) {
    var i = n.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (n.pending = t),
      yr(e, r)
    );
  }
  return (
    (i = n.interleaved),
    i === null ? ((t.next = t), fd(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    yr(e, r)
  );
}
function la(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Gf(e, r);
  }
}
function Xp(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      s = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var o = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (r = r.next);
      } while (r !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Fa(e, t, r, n) {
  var i = e.updateQueue;
  Nr = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), o === null ? (s = c) : (o.next = c), (o = l);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (a = m.lastBaseUpdate),
      a !== o &&
        (a === null ? (m.firstBaseUpdate = c) : (a.next = c),
        (m.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var g = i.baseState;
    (o = 0), (m = c = l = null), (a = s);
    do {
      var d = a.lane,
        v = a.eventTime;
      if ((n & d) === d) {
        m !== null &&
          (m = m.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            x = a;
          switch (((d = t), (v = r), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                g = w.call(v, g, d);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (d = typeof w == "function" ? w.call(v, g, d) : w),
                d == null)
              )
                break e;
              g = ve({}, g, d);
              break e;
            case 2:
              Nr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          m === null ? ((c = m = v), (l = g)) : (m = m.next = v),
          (o |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (l = g),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = m),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Cn |= o), (e.lanes = o), (e.memoizedState = g);
  }
}
function Gp(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function"))
          throw Error(z(191, i));
        i.call(n);
      }
    }
}
var ay = new sg.Component().refs;
function Bc(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : ve({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var bl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ge(),
      i = $r(e),
      s = pr(n, i);
    (s.payload = t),
      r != null && (s.callback = r),
      (t = Br(e, s, i)),
      t !== null && (Ut(t, e, i, n), la(t, e, i));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Ge(),
      i = $r(e),
      s = pr(n, i);
    (s.tag = 1),
      (s.payload = t),
      r != null && (s.callback = r),
      (t = Br(e, s, i)),
      t !== null && (Ut(t, e, i, n), la(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Ge(),
      n = $r(e),
      i = pr(r, n);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Br(e, i, n)),
      t !== null && (Ut(t, e, n, r), la(t, e, n));
  },
};
function Jp(e, t, r, n, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ps(r, n) || !Ps(i, s)
      : !0
  );
}
function ly(e, t, r) {
  var n = !1,
    i = Vr,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = kt(s))
      : ((i = st(t) ? Sn : Ke.current),
        (n = t.contextTypes),
        (s = (n = n != null) ? mi(e, i) : Vr)),
    (t = new t(r, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bl),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Zp(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && bl.enqueueReplaceState(t, t.state, null);
}
function Fc(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = ay), dd(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = kt(s))
    : ((s = st(t) ? Sn : Ke.current), (i.context = mi(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Bc(e, t, s, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && bl.enqueueReplaceState(i, i.state, null),
      Fa(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ki(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(z(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(z(147, e));
      var i = n,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            a === ay && (a = i.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!r._owner) throw Error(z(290, e));
  }
  return e;
}
function zo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function em(e) {
  var t = e._init;
  return t(e._payload);
}
function uy(e) {
  function t(f, p) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [p]), (f.flags |= 16)) : h.push(p);
    }
  }
  function r(f, p) {
    if (!e) return null;
    for (; p !== null; ) t(f, p), (p = p.sibling);
    return null;
  }
  function n(f, p) {
    for (f = new Map(); p !== null; )
      p.key !== null ? f.set(p.key, p) : f.set(p.index, p), (p = p.sibling);
    return f;
  }
  function i(f, p) {
    return (f = Qr(f, p)), (f.index = 0), (f.sibling = null), f;
  }
  function s(f, p, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((f.flags |= 2), p) : h)
            : ((f.flags |= 2), p))
        : ((f.flags |= 1048576), p)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, p, h, y) {
    return p === null || p.tag !== 6
      ? ((p = Lu(h, f.mode, y)), (p.return = f), p)
      : ((p = i(p, h)), (p.return = f), p);
  }
  function l(f, p, h, y) {
    var S = h.type;
    return S === Hn
      ? m(f, p, h.props.children, y, h.key)
      : p !== null &&
        (p.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === jr &&
            em(S) === p.type))
      ? ((y = i(p, h.props)), (y.ref = Ki(f, p, h)), (y.return = f), y)
      : ((y = ma(h.type, h.key, h.props, null, f.mode, y)),
        (y.ref = Ki(f, p, h)),
        (y.return = f),
        y);
  }
  function c(f, p, h, y) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = Du(h, f.mode, y)), (p.return = f), p)
      : ((p = i(p, h.children || [])), (p.return = f), p);
  }
  function m(f, p, h, y, S) {
    return p === null || p.tag !== 7
      ? ((p = yn(h, f.mode, y, S)), (p.return = f), p)
      : ((p = i(p, h)), (p.return = f), p);
  }
  function g(f, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Lu("" + p, f.mode, h)), (p.return = f), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case jo:
          return (
            (h = ma(p.type, p.key, p.props, null, f.mode, h)),
            (h.ref = Ki(f, null, p)),
            (h.return = f),
            h
          );
        case Wn:
          return (p = Du(p, f.mode, h)), (p.return = f), p;
        case jr:
          var y = p._init;
          return g(f, y(p._payload), h);
      }
      if (ts(p) || Fi(p))
        return (p = yn(p, f.mode, h, null)), (p.return = f), p;
      zo(f, p);
    }
    return null;
  }
  function d(f, p, h, y) {
    var S = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return S !== null ? null : a(f, p, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case jo:
          return h.key === S ? l(f, p, h, y) : null;
        case Wn:
          return h.key === S ? c(f, p, h, y) : null;
        case jr:
          return (S = h._init), d(f, p, S(h._payload), y);
      }
      if (ts(h) || Fi(h)) return S !== null ? null : m(f, p, h, y, null);
      zo(f, h);
    }
    return null;
  }
  function v(f, p, h, y, S) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(h) || null), a(p, f, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case jo:
          return (f = f.get(y.key === null ? h : y.key) || null), l(p, f, y, S);
        case Wn:
          return (f = f.get(y.key === null ? h : y.key) || null), c(p, f, y, S);
        case jr:
          var C = y._init;
          return v(f, p, h, C(y._payload), S);
      }
      if (ts(y) || Fi(y)) return (f = f.get(h) || null), m(p, f, y, S, null);
      zo(p, y);
    }
    return null;
  }
  function w(f, p, h, y) {
    for (
      var S = null, C = null, A = p, k = (p = 0), N = null;
      A !== null && k < h.length;
      k++
    ) {
      A.index > k ? ((N = A), (A = null)) : (N = A.sibling);
      var j = d(f, A, h[k], y);
      if (j === null) {
        A === null && (A = N);
        break;
      }
      e && A && j.alternate === null && t(f, A),
        (p = s(j, p, k)),
        C === null ? (S = j) : (C.sibling = j),
        (C = j),
        (A = N);
    }
    if (k === h.length) return r(f, A), he && on(f, k), S;
    if (A === null) {
      for (; k < h.length; k++)
        (A = g(f, h[k], y)),
          A !== null &&
            ((p = s(A, p, k)), C === null ? (S = A) : (C.sibling = A), (C = A));
      return he && on(f, k), S;
    }
    for (A = n(f, A); k < h.length; k++)
      (N = v(A, f, k, h[k], y)),
        N !== null &&
          (e && N.alternate !== null && A.delete(N.key === null ? k : N.key),
          (p = s(N, p, k)),
          C === null ? (S = N) : (C.sibling = N),
          (C = N));
    return (
      e &&
        A.forEach(function (T) {
          return t(f, T);
        }),
      he && on(f, k),
      S
    );
  }
  function x(f, p, h, y) {
    var S = Fi(h);
    if (typeof S != "function") throw Error(z(150));
    if (((h = S.call(h)), h == null)) throw Error(z(151));
    for (
      var C = (S = null), A = p, k = (p = 0), N = null, j = h.next();
      A !== null && !j.done;
      k++, j = h.next()
    ) {
      A.index > k ? ((N = A), (A = null)) : (N = A.sibling);
      var T = d(f, A, j.value, y);
      if (T === null) {
        A === null && (A = N);
        break;
      }
      e && A && T.alternate === null && t(f, A),
        (p = s(T, p, k)),
        C === null ? (S = T) : (C.sibling = T),
        (C = T),
        (A = N);
    }
    if (j.done) return r(f, A), he && on(f, k), S;
    if (A === null) {
      for (; !j.done; k++, j = h.next())
        (j = g(f, j.value, y)),
          j !== null &&
            ((p = s(j, p, k)), C === null ? (S = j) : (C.sibling = j), (C = j));
      return he && on(f, k), S;
    }
    for (A = n(f, A); !j.done; k++, j = h.next())
      (j = v(A, f, k, j.value, y)),
        j !== null &&
          (e && j.alternate !== null && A.delete(j.key === null ? k : j.key),
          (p = s(j, p, k)),
          C === null ? (S = j) : (C.sibling = j),
          (C = j));
    return (
      e &&
        A.forEach(function (_) {
          return t(f, _);
        }),
      he && on(f, k),
      S
    );
  }
  function b(f, p, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Hn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case jo:
          e: {
            for (var S = h.key, C = p; C !== null; ) {
              if (C.key === S) {
                if (((S = h.type), S === Hn)) {
                  if (C.tag === 7) {
                    r(f, C.sibling),
                      (p = i(C, h.props.children)),
                      (p.return = f),
                      (f = p);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === jr &&
                    em(S) === C.type)
                ) {
                  r(f, C.sibling),
                    (p = i(C, h.props)),
                    (p.ref = Ki(f, C, h)),
                    (p.return = f),
                    (f = p);
                  break e;
                }
                r(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            h.type === Hn
              ? ((p = yn(h.props.children, f.mode, y, h.key)),
                (p.return = f),
                (f = p))
              : ((y = ma(h.type, h.key, h.props, null, f.mode, y)),
                (y.ref = Ki(f, p, h)),
                (y.return = f),
                (f = y));
          }
          return o(f);
        case Wn:
          e: {
            for (C = h.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  r(f, p.sibling),
                    (p = i(p, h.children || [])),
                    (p.return = f),
                    (f = p);
                  break e;
                } else {
                  r(f, p);
                  break;
                }
              else t(f, p);
              p = p.sibling;
            }
            (p = Du(h, f.mode, y)), (p.return = f), (f = p);
          }
          return o(f);
        case jr:
          return (C = h._init), b(f, p, C(h._payload), y);
      }
      if (ts(h)) return w(f, p, h, y);
      if (Fi(h)) return x(f, p, h, y);
      zo(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (r(f, p.sibling), (p = i(p, h)), (p.return = f), (f = p))
          : (r(f, p), (p = Lu(h, f.mode, y)), (p.return = f), (f = p)),
        o(f))
      : r(f, p);
  }
  return b;
}
var gi = uy(!0),
  cy = uy(!1),
  ao = {},
  rr = Jr(ao),
  Ms = Jr(ao),
  Ls = Jr(ao);
function mn(e) {
  if (e === ao) throw Error(z(174));
  return e;
}
function pd(e, t) {
  switch ((ue(Ls, t), ue(Ms, e), ue(rr, ao), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xc(t, e));
  }
  de(rr), ue(rr, t);
}
function yi() {
  de(rr), de(Ms), de(Ls);
}
function fy(e) {
  mn(Ls.current);
  var t = mn(rr.current),
    r = xc(t, e.type);
  t !== r && (ue(Ms, e), ue(rr, r));
}
function md(e) {
  Ms.current === e && (de(rr), de(Ms));
}
var ge = Jr(0);
function $a(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
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
var _u = [];
function hd() {
  for (var e = 0; e < _u.length; e++)
    _u[e]._workInProgressVersionPrimary = null;
  _u.length = 0;
}
var ua = br.ReactCurrentDispatcher,
  Pu = br.ReactCurrentBatchConfig,
  An = 0,
  ye = null,
  Te = null,
  Pe = null,
  Qa = !1,
  ps = !1,
  Ds = 0,
  aw = 0;
function Fe() {
  throw Error(z(321));
}
function gd(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Qt(e[r], t[r])) return !1;
  return !0;
}
function yd(e, t, r, n, i, s) {
  if (
    ((An = s),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ua.current = e === null || e.memoizedState === null ? fw : dw),
    (e = r(n, i)),
    ps)
  ) {
    s = 0;
    do {
      if (((ps = !1), (Ds = 0), 25 <= s)) throw Error(z(301));
      (s += 1),
        (Pe = Te = null),
        (t.updateQueue = null),
        (ua.current = pw),
        (e = r(n, i));
    } while (ps);
  }
  if (
    ((ua.current = Wa),
    (t = Te !== null && Te.next !== null),
    (An = 0),
    (Pe = Te = ye = null),
    (Qa = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function vd() {
  var e = Ds !== 0;
  return (Ds = 0), e;
}
function qt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Pe === null ? (ye.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
}
function jt() {
  if (Te === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = Pe === null ? ye.memoizedState : Pe.next;
  if (t !== null) (Pe = t), (Te = e);
  else {
    if (e === null) throw Error(z(310));
    (Te = e),
      (e = {
        memoizedState: Te.memoizedState,
        baseState: Te.baseState,
        baseQueue: Te.baseQueue,
        queue: Te.queue,
        next: null,
      }),
      Pe === null ? (ye.memoizedState = Pe = e) : (Pe = Pe.next = e);
  }
  return Pe;
}
function zs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ou(e) {
  var t = jt(),
    r = t.queue;
  if (r === null) throw Error(z(311));
  r.lastRenderedReducer = e;
  var n = Te,
    i = n.baseQueue,
    s = r.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (n.baseQueue = i = s), (r.pending = null);
  }
  if (i !== null) {
    (s = i.next), (n = n.baseState);
    var a = (o = null),
      l = null,
      c = s;
    do {
      var m = c.lane;
      if ((An & m) === m)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (n = c.hasEagerState ? c.eagerState : e(n, c.action));
      else {
        var g = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = g), (o = n)) : (l = l.next = g),
          (ye.lanes |= m),
          (Cn |= m);
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? (o = n) : (l.next = a),
      Qt(n, t.memoizedState) || (rt = !0),
      (t.memoizedState = n),
      (t.baseState = o),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (ye.lanes |= s), (Cn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Ru(e) {
  var t = jt(),
    r = t.queue;
  if (r === null) throw Error(z(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    s = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Qt(s, t.memoizedState) || (rt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (r.lastRenderedState = s);
  }
  return [s, n];
}
function dy() {}
function py(e, t) {
  var r = ye,
    n = jt(),
    i = t(),
    s = !Qt(n.memoizedState, i);
  if (
    (s && ((n.memoizedState = i), (rt = !0)),
    (n = n.queue),
    xd(gy.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || s || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Us(9, hy.bind(null, r, n, i, t), void 0, null),
      Re === null)
    )
      throw Error(z(349));
    An & 30 || my(r, t, i);
  }
  return i;
}
function my(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function hy(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), yy(t) && vy(e);
}
function gy(e, t, r) {
  return r(function () {
    yy(t) && vy(e);
  });
}
function yy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Qt(e, r);
  } catch {
    return !0;
  }
}
function vy(e) {
  var t = yr(e, 1);
  t !== null && Ut(t, e, 1, -1);
}
function tm(e) {
  var t = qt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = cw.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function Us(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function xy() {
  return jt().memoizedState;
}
function ca(e, t, r, n) {
  var i = qt();
  (ye.flags |= e),
    (i.memoizedState = Us(1 | t, r, void 0, n === void 0 ? null : n));
}
function Al(e, t, r, n) {
  var i = jt();
  n = n === void 0 ? null : n;
  var s = void 0;
  if (Te !== null) {
    var o = Te.memoizedState;
    if (((s = o.destroy), n !== null && gd(n, o.deps))) {
      i.memoizedState = Us(t, r, s, n);
      return;
    }
  }
  (ye.flags |= e), (i.memoizedState = Us(1 | t, r, s, n));
}
function rm(e, t) {
  return ca(8390656, 8, e, t);
}
function xd(e, t) {
  return Al(2048, 8, e, t);
}
function wy(e, t) {
  return Al(4, 2, e, t);
}
function Sy(e, t) {
  return Al(4, 4, e, t);
}
function by(e, t) {
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
function Ay(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), Al(4, 4, by.bind(null, t, e), r)
  );
}
function wd() {}
function Cy(e, t) {
  var r = jt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && gd(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Ey(e, t) {
  var r = jt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && gd(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function ky(e, t, r) {
  return An & 21
    ? (Qt(r, t) || ((r = Tg()), (ye.lanes |= r), (Cn |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (rt = !0)), (e.memoizedState = r));
}
function lw(e, t) {
  var r = ae;
  (ae = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = Pu.transition;
  Pu.transition = {};
  try {
    e(!1), t();
  } finally {
    (ae = r), (Pu.transition = n);
  }
}
function jy() {
  return jt().memoizedState;
}
function uw(e, t, r) {
  var n = $r(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ny(e))
  )
    Ty(t, r);
  else if (((r = sy(e, t, r, n)), r !== null)) {
    var i = Ge();
    Ut(r, e, n, i), _y(r, t, n);
  }
}
function cw(e, t, r) {
  var n = $r(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Ny(e)) Ty(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, r);
        if (((i.hasEagerState = !0), (i.eagerState = a), Qt(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), fd(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (r = sy(e, t, i, n)),
      r !== null && ((i = Ge()), Ut(r, e, n, i), _y(r, t, n));
  }
}
function Ny(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function Ty(e, t) {
  ps = Qa = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function _y(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Gf(e, r);
  }
}
var Wa = {
    readContext: kt,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1,
  },
  fw = {
    readContext: kt,
    useCallback: function (e, t) {
      return (qt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: kt,
    useEffect: rm,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ca(4194308, 4, by.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return ca(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ca(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = qt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = qt();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = uw.bind(null, ye, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = qt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: tm,
    useDebugValue: wd,
    useDeferredValue: function (e) {
      return (qt().memoizedState = e);
    },
    useTransition: function () {
      var e = tm(!1),
        t = e[0];
      return (e = lw.bind(null, e[1])), (qt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = ye,
        i = qt();
      if (he) {
        if (r === void 0) throw Error(z(407));
        r = r();
      } else {
        if (((r = t()), Re === null)) throw Error(z(349));
        An & 30 || my(n, t, r);
      }
      i.memoizedState = r;
      var s = { value: r, getSnapshot: t };
      return (
        (i.queue = s),
        rm(gy.bind(null, n, s, e), [e]),
        (n.flags |= 2048),
        Us(9, hy.bind(null, n, s, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = qt(),
        t = Re.identifierPrefix;
      if (he) {
        var r = dr,
          n = fr;
        (r = (n & ~(1 << (32 - zt(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Ds++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = aw++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  dw = {
    readContext: kt,
    useCallback: Cy,
    useContext: kt,
    useEffect: xd,
    useImperativeHandle: Ay,
    useInsertionEffect: wy,
    useLayoutEffect: Sy,
    useMemo: Ey,
    useReducer: Ou,
    useRef: xy,
    useState: function () {
      return Ou(zs);
    },
    useDebugValue: wd,
    useDeferredValue: function (e) {
      var t = jt();
      return ky(t, Te.memoizedState, e);
    },
    useTransition: function () {
      var e = Ou(zs)[0],
        t = jt().memoizedState;
      return [e, t];
    },
    useMutableSource: dy,
    useSyncExternalStore: py,
    useId: jy,
    unstable_isNewReconciler: !1,
  },
  pw = {
    readContext: kt,
    useCallback: Cy,
    useContext: kt,
    useEffect: xd,
    useImperativeHandle: Ay,
    useInsertionEffect: wy,
    useLayoutEffect: Sy,
    useMemo: Ey,
    useReducer: Ru,
    useRef: xy,
    useState: function () {
      return Ru(zs);
    },
    useDebugValue: wd,
    useDeferredValue: function (e) {
      var t = jt();
      return Te === null ? (t.memoizedState = e) : ky(t, Te.memoizedState, e);
    },
    useTransition: function () {
      var e = Ru(zs)[0],
        t = jt().memoizedState;
      return [e, t];
    },
    useMutableSource: dy,
    useSyncExternalStore: py,
    useId: jy,
    unstable_isNewReconciler: !1,
  };
function vi(e, t) {
  try {
    var r = "",
      n = t;
    do (r += Fx(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Iu(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function $c(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var mw = typeof WeakMap == "function" ? WeakMap : Map;
function Py(e, t, r) {
  (r = pr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Ka || ((Ka = !0), (Jc = n)), $c(e, t);
    }),
    r
  );
}
function Oy(e, t, r) {
  (r = pr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        $c(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (r.callback = function () {
        $c(e, t),
          typeof n != "function" &&
            (Fr === null ? (Fr = new Set([this])) : Fr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    r
  );
}
function nm(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new mw();
    var i = new Set();
    n.set(t, i);
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
  i.has(r) || (i.add(r), (e = Nw.bind(null, e, t, r)), t.then(e, e));
}
function im(e) {
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
function sm(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = pr(-1, 1)), (t.tag = 2), Br(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var hw = br.ReactCurrentOwner,
  rt = !1;
function Ye(e, t, r, n) {
  t.child = e === null ? cy(t, null, r, n) : gi(t, e.child, r, n);
}
function om(e, t, r, n, i) {
  r = r.render;
  var s = t.ref;
  return (
    ai(t, i),
    (n = yd(e, t, r, n, s, i)),
    (r = vd()),
    e !== null && !rt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vr(e, t, i))
      : (he && r && sd(t), (t.flags |= 1), Ye(e, t, n, i), t.child)
  );
}
function am(e, t, r, n, i) {
  if (e === null) {
    var s = r.type;
    return typeof s == "function" &&
      !Nd(s) &&
      s.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Ry(e, t, s, n, i))
      : ((e = ma(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Ps), r(o, n) && e.ref === t.ref)
    )
      return vr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Qr(s, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ry(e, t, r, n, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ps(s, n) && e.ref === t.ref)
      if (((rt = !1), (t.pendingProps = n = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (rt = !0);
      else return (t.lanes = e.lanes), vr(e, t, i);
  }
  return Qc(e, t, r, n, i);
}
function Iy(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    s = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(ti, ft),
        (ft |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(ti, ft),
          (ft |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = s !== null ? s.baseLanes : r),
        ue(ti, ft),
        (ft |= n);
    }
  else
    s !== null ? ((n = s.baseLanes | r), (t.memoizedState = null)) : (n = r),
      ue(ti, ft),
      (ft |= n);
  return Ye(e, t, i, r), t.child;
}
function My(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qc(e, t, r, n, i) {
  var s = st(r) ? Sn : Ke.current;
  return (
    (s = mi(t, s)),
    ai(t, i),
    (r = yd(e, t, r, n, s, i)),
    (n = vd()),
    e !== null && !rt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vr(e, t, i))
      : (he && n && sd(t), (t.flags |= 1), Ye(e, t, r, i), t.child)
  );
}
function lm(e, t, r, n, i) {
  if (st(r)) {
    var s = !0;
    La(t);
  } else s = !1;
  if ((ai(t, i), t.stateNode === null))
    fa(e, t), ly(t, r, n), Fc(t, r, n, i), (n = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      c = r.contextType;
    typeof c == "object" && c !== null
      ? (c = kt(c))
      : ((c = st(r) ? Sn : Ke.current), (c = mi(t, c)));
    var m = r.getDerivedStateFromProps,
      g =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== n || l !== c) && Zp(t, o, n, c)),
      (Nr = !1);
    var d = t.memoizedState;
    (o.state = d),
      Fa(t, n, o, i),
      (l = t.memoizedState),
      a !== n || d !== l || it.current || Nr
        ? (typeof m == "function" && (Bc(t, r, m, n), (l = t.memoizedState)),
          (a = Nr || Jp(t, r, a, n, d, l, c))
            ? (g ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (o.props = n),
          (o.state = l),
          (o.context = c),
          (n = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (o = t.stateNode),
      oy(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : It(t.type, a)),
      (o.props = c),
      (g = t.pendingProps),
      (d = o.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = kt(l))
        : ((l = st(r) ? Sn : Ke.current), (l = mi(t, l)));
    var v = r.getDerivedStateFromProps;
    (m =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== g || d !== l) && Zp(t, o, n, l)),
      (Nr = !1),
      (d = t.memoizedState),
      (o.state = d),
      Fa(t, n, o, i);
    var w = t.memoizedState;
    a !== g || d !== w || it.current || Nr
      ? (typeof v == "function" && (Bc(t, r, v, n), (w = t.memoizedState)),
        (c = Nr || Jp(t, r, c, n, d, w, l) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(n, w, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(n, w, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = w)),
        (o.props = n),
        (o.state = w),
        (o.context = l),
        (n = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Wc(e, t, r, n, s, i);
}
function Wc(e, t, r, n, i, s) {
  My(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return i && Vp(t, r, !1), vr(e, t, s);
  (n = t.stateNode), (hw.current = t);
  var a =
    o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = gi(t, e.child, null, s)), (t.child = gi(t, null, a, s)))
      : Ye(e, t, a, s),
    (t.memoizedState = n.state),
    i && Vp(t, r, !0),
    t.child
  );
}
function Ly(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Kp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Kp(e, t.context, !1),
    pd(e, t.containerInfo);
}
function um(e, t, r, n, i) {
  return hi(), ad(i), (t.flags |= 256), Ye(e, t, r, n), t.child;
}
var Hc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dy(e, t, r) {
  var n = t.pendingProps,
    i = ge.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ue(ge, i & 1),
    e === null)
  )
    return (
      zc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = n.children),
          (e = n.fallback),
          s
            ? ((n = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(n & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = kl(o, n, 0, null)),
              (e = yn(e, n, r, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Kc(r)),
              (t.memoizedState = Hc),
              e)
            : Sd(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return gw(e, t, o, n, a, i, r);
  if (s) {
    (s = n.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(o & 1) && t.child !== i
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = Qr(i, l)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Qr(a, s)) : ((s = yn(s, o, r, null)), (s.flags |= 2)),
      (s.return = t),
      (n.return = t),
      (n.sibling = s),
      (t.child = n),
      (n = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Kc(r)
          : {
              baseLanes: o.baseLanes | r,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~r),
      (t.memoizedState = Hc),
      n
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (n = Qr(s, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Sd(e, t) {
  return (
    (t = kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Uo(e, t, r, n) {
  return (
    n !== null && ad(n),
    gi(t, e.child, null, r),
    (e = Sd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gw(e, t, r, n, i, s, o) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Iu(Error(z(422)))), Uo(e, t, o, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = n.fallback),
        (i = t.mode),
        (n = kl({ mode: "visible", children: n.children }, i, 0, null)),
        (s = yn(s, i, o, null)),
        (s.flags |= 2),
        (n.return = t),
        (s.return = t),
        (n.sibling = s),
        (t.child = n),
        t.mode & 1 && gi(t, e.child, null, o),
        (t.child.memoizedState = Kc(o)),
        (t.memoizedState = Hc),
        s);
  if (!(t.mode & 1)) return Uo(e, t, o, null);
  if (i.data === "$!") {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (s = Error(z(419))), (n = Iu(s, n, void 0)), Uo(e, t, o, n);
  }
  if (((a = (o & e.childLanes) !== 0), rt || a)) {
    if (((n = Re), n !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (n.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), yr(e, i), Ut(n, e, i, -1));
    }
    return jd(), (n = Iu(Error(z(421)))), Uo(e, t, o, n);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Tw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (mt = Ur(i.nextSibling)),
      (ht = t),
      (he = !0),
      (Dt = null),
      e !== null &&
        ((St[bt++] = fr),
        (St[bt++] = dr),
        (St[bt++] = bn),
        (fr = e.id),
        (dr = e.overflow),
        (bn = t)),
      (t = Sd(t, n.children)),
      (t.flags |= 4096),
      t);
}
function cm(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Uc(e.return, t, r);
}
function Mu(e, t, r, n, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = n),
      (s.tail = r),
      (s.tailMode = i));
}
function zy(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    s = n.tail;
  if ((Ye(e, t, n.children, r), (n = ge.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cm(e, r, t);
        else if (e.tag === 19) cm(e, r, t);
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
    n &= 1;
  }
  if ((ue(ge, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate),
            e !== null && $a(e) === null && (i = r),
            (r = r.sibling);
        (r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          Mu(t, !1, i, r, s);
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && $a(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        Mu(t, !0, r, null, s);
        break;
      case "together":
        Mu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fa(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Cn |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Qr(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = Qr(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function yw(e, t, r) {
  switch (t.tag) {
    case 3:
      Ly(t), hi();
      break;
    case 5:
      fy(t);
      break;
    case 1:
      st(t.type) && La(t);
      break;
    case 4:
      pd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      ue(Ua, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ue(ge, ge.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? Dy(e, t, r)
          : (ue(ge, ge.current & 1),
            (e = vr(e, t, r)),
            e !== null ? e.sibling : null);
      ue(ge, ge.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return zy(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ue(ge, ge.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Iy(e, t, r);
  }
  return vr(e, t, r);
}
var Uy, Vc, By, Fy;
Uy = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Vc = function () {};
By = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), mn(rr.current);
    var s = null;
    switch (r) {
      case "input":
        (i = hc(e, i)), (n = hc(e, n)), (s = []);
        break;
      case "select":
        (i = ve({}, i, { value: void 0 })),
          (n = ve({}, n, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = vc(e, i)), (n = vc(e, n)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = Ia);
    }
    wc(r, n);
    var o;
    r = null;
    for (c in i)
      if (!n.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (o in a) a.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Cs.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in n) {
      var l = n[c];
      if (
        ((a = i != null ? i[c] : void 0),
        n.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (r || (r = {}), (r[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (r || (r = {}), (r[o] = l[o]));
          } else r || (s || (s = []), s.push(c, r)), (r = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Cs.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && ce("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(c, l));
    }
    r && (s = s || []).push("style", r);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Fy = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Vi(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function vw(e, t, r) {
  var n = t.pendingProps;
  switch ((od(t), t.tag)) {
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
      return $e(t), null;
    case 1:
      return st(t.type) && Ma(), $e(t), null;
    case 3:
      return (
        (n = t.stateNode),
        yi(),
        de(it),
        de(Ke),
        hd(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Do(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Dt !== null && (tf(Dt), (Dt = null)))),
        Vc(e, t),
        $e(t),
        null
      );
    case 5:
      md(t);
      var i = mn(Ls.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        By(e, t, r, n, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(z(166));
          return $e(t), null;
        }
        if (((e = mn(rr.current)), Do(t))) {
          (n = t.stateNode), (r = t.type);
          var s = t.memoizedProps;
          switch (((n[Jt] = t), (n[Is] = s), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              ce("cancel", n), ce("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ns.length; i++) ce(ns[i], n);
              break;
            case "source":
              ce("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", n), ce("load", n);
              break;
            case "details":
              ce("toggle", n);
              break;
            case "input":
              xp(n, s), ce("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!s.multiple }),
                ce("invalid", n);
              break;
            case "textarea":
              Sp(n, s), ce("invalid", n);
          }
          wc(r, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? n.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Lo(n.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    n.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Lo(n.textContent, a, e),
                    (i = ["children", "" + a]))
                : Cs.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ce("scroll", n);
            }
          switch (r) {
            case "input":
              No(n), wp(n, s, !0);
              break;
            case "textarea":
              No(n), bp(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (n.onclick = Ia);
          }
          (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = mg(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = o.createElement(r, { is: n.is }))
                : ((e = o.createElement(r)),
                  r === "select" &&
                    ((o = e),
                    n.multiple
                      ? (o.multiple = !0)
                      : n.size && (o.size = n.size)))
              : (e = o.createElementNS(e, r)),
            (e[Jt] = t),
            (e[Is] = n),
            Uy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Sc(r, n)), r)) {
              case "dialog":
                ce("cancel", e), ce("close", e), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ns.length; i++) ce(ns[i], e);
                i = n;
                break;
              case "source":
                ce("error", e), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", e), ce("load", e), (i = n);
                break;
              case "details":
                ce("toggle", e), (i = n);
                break;
              case "input":
                xp(e, n), (i = hc(e, n)), ce("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = ve({}, n, { value: void 0 })),
                  ce("invalid", e);
                break;
              case "textarea":
                Sp(e, n), (i = vc(e, n)), ce("invalid", e);
                break;
              default:
                i = n;
            }
            wc(r, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? yg(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && hg(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (r !== "textarea" || l !== "") && Es(e, l)
                    : typeof l == "number" && Es(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Cs.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && ce("scroll", e)
                      : l != null && Hf(e, s, l, o));
              }
            switch (r) {
              case "input":
                No(e), wp(e, n, !1);
                break;
              case "textarea":
                No(e), bp(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Kr(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (s = n.value),
                  s != null
                    ? ni(e, !!n.multiple, s, !1)
                    : n.defaultValue != null &&
                      ni(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ia);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) Fy(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(z(166));
        if (((r = mn(Ls.current)), mn(rr.current), Do(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[Jt] = t),
            (s = n.nodeValue !== r) && ((e = ht), e !== null))
          )
            switch (e.tag) {
              case 3:
                Lo(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Lo(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Jt] = t),
            (t.stateNode = n);
      }
      return $e(t), null;
    case 13:
      if (
        (de(ge),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && mt !== null && t.mode & 1 && !(t.flags & 128))
          iy(), hi(), (t.flags |= 98560), (s = !1);
        else if (((s = Do(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(z(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(z(317));
            s[Jt] = t;
          } else
            hi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          $e(t), (s = !1);
        } else Dt !== null && (tf(Dt), (Dt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? _e === 0 && (_e = 3) : jd())),
          t.updateQueue !== null && (t.flags |= 4),
          $e(t),
          null);
    case 4:
      return (
        yi(), Vc(e, t), e === null && Os(t.stateNode.containerInfo), $e(t), null
      );
    case 10:
      return cd(t.type._context), $e(t), null;
    case 17:
      return st(t.type) && Ma(), $e(t), null;
    case 19:
      if ((de(ge), (s = t.memoizedState), s === null)) return $e(t), null;
      if (((n = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (n) Vi(s, !1);
        else {
          if (_e !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = $a(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Vi(s, !1),
                    n = o.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (s = r),
                    (e = n),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return ue(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ae() > xi &&
            ((t.flags |= 128), (n = !0), Vi(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = $a(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Vi(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !he)
            )
              return $e(t), null;
          } else
            2 * Ae() - s.renderingStartTime > xi &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Vi(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((r = s.last),
            r !== null ? (r.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Ae()),
          (t.sibling = null),
          (r = ge.current),
          ue(ge, n ? (r & 1) | 2 : r & 1),
          t)
        : ($e(t), null);
    case 22:
    case 23:
      return (
        kd(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? ft & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function xw(e, t) {
  switch ((od(t), t.tag)) {
    case 1:
      return (
        st(t.type) && Ma(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        yi(),
        de(it),
        de(Ke),
        hd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return md(t), null;
    case 13:
      if (
        (de(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340));
        hi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return de(ge), null;
    case 4:
      return yi(), null;
    case 10:
      return cd(t.type._context), null;
    case 22:
    case 23:
      return kd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bo = !1,
  He = !1,
  ww = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function ei(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Se(e, t, n);
      }
    else r.current = null;
}
function qc(e, t, r) {
  try {
    r();
  } catch (n) {
    Se(e, t, n);
  }
}
var fm = !1;
function Sw(e, t) {
  if (((Pc = Pa), (e = Hg()), id(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            s = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, s.nodeType;
          } catch {
            r = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            m = 0,
            g = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              g !== r || (i !== 0 && g.nodeType !== 3) || (a = o + i),
                g !== s || (n !== 0 && g.nodeType !== 3) || (l = o + n),
                g.nodeType === 3 && (o += g.nodeValue.length),
                (v = g.firstChild) !== null;

            )
              (d = g), (g = v);
            for (;;) {
              if (g === e) break t;
              if (
                (d === r && ++c === i && (a = o),
                d === s && ++m === n && (l = o),
                (v = g.nextSibling) !== null)
              )
                break;
              (g = d), (d = g.parentNode);
            }
            g = v;
          }
          r = a === -1 || l === -1 ? null : { start: a, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Oc = { focusedElem: e, selectionRange: r }, Pa = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    b = w.memoizedState,
                    f = t.stateNode,
                    p = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : It(t.type, x),
                      b
                    );
                  f.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (y) {
          Se(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (w = fm), (fm = !1), w;
}
function ms(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && qc(t, r, s);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Yc(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $y(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $y(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Jt], delete t[Is], delete t[Mc], delete t[nw], delete t[iw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function dm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qy(e.return)) return null;
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
function Xc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Ia));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Xc(e, t, r), e = e.sibling; e !== null; ) Xc(e, t, r), (e = e.sibling);
}
function Gc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Gc(e, t, r), e = e.sibling; e !== null; ) Gc(e, t, r), (e = e.sibling);
}
var Le = null,
  Lt = !1;
function Cr(e, t, r) {
  for (r = r.child; r !== null; ) Wy(e, t, r), (r = r.sibling);
}
function Wy(e, t, r) {
  if (tr && typeof tr.onCommitFiberUnmount == "function")
    try {
      tr.onCommitFiberUnmount(gl, r);
    } catch {}
  switch (r.tag) {
    case 5:
      He || ei(r, t);
    case 6:
      var n = Le,
        i = Lt;
      (Le = null),
        Cr(e, t, r),
        (Le = n),
        (Lt = i),
        Le !== null &&
          (Lt
            ? ((e = Le),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Le.removeChild(r.stateNode));
      break;
    case 18:
      Le !== null &&
        (Lt
          ? ((e = Le),
            (r = r.stateNode),
            e.nodeType === 8
              ? Nu(e.parentNode, r)
              : e.nodeType === 1 && Nu(e, r),
            Ts(e))
          : Nu(Le, r.stateNode));
      break;
    case 4:
      (n = Le),
        (i = Lt),
        (Le = r.stateNode.containerInfo),
        (Lt = !0),
        Cr(e, t, r),
        (Le = n),
        (Lt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !He &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && qc(r, t, o),
            (i = i.next);
        } while (i !== n);
      }
      Cr(e, t, r);
      break;
    case 1:
      if (
        !He &&
        (ei(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (a) {
          Se(r, t, a);
        }
      Cr(e, t, r);
      break;
    case 21:
      Cr(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((He = (n = He) || r.memoizedState !== null), Cr(e, t, r), (He = n))
        : Cr(e, t, r);
      break;
    default:
      Cr(e, t, r);
  }
}
function pm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new ww()),
      t.forEach(function (n) {
        var i = _w.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function _t(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Le = a.stateNode), (Lt = !1);
              break e;
            case 3:
              (Le = a.stateNode.containerInfo), (Lt = !0);
              break e;
            case 4:
              (Le = a.stateNode.containerInfo), (Lt = !0);
              break e;
          }
          a = a.return;
        }
        if (Le === null) throw Error(z(160));
        Wy(s, o, i), (Le = null), (Lt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        Se(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Hy(t, e), (t = t.sibling);
}
function Hy(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_t(t, e), Vt(e), n & 4)) {
        try {
          ms(3, e, e.return), Cl(3, e);
        } catch (x) {
          Se(e, e.return, x);
        }
        try {
          ms(5, e, e.return);
        } catch (x) {
          Se(e, e.return, x);
        }
      }
      break;
    case 1:
      _t(t, e), Vt(e), n & 512 && r !== null && ei(r, r.return);
      break;
    case 5:
      if (
        (_t(t, e),
        Vt(e),
        n & 512 && r !== null && ei(r, r.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Es(i, "");
        } catch (x) {
          Se(e, e.return, x);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = r !== null ? r.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && dg(i, s),
              Sc(a, o);
            var c = Sc(a, s);
            for (o = 0; o < l.length; o += 2) {
              var m = l[o],
                g = l[o + 1];
              m === "style"
                ? yg(i, g)
                : m === "dangerouslySetInnerHTML"
                ? hg(i, g)
                : m === "children"
                ? Es(i, g)
                : Hf(i, m, g, c);
            }
            switch (a) {
              case "input":
                gc(i, s);
                break;
              case "textarea":
                pg(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? ni(i, !!s.multiple, v, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? ni(i, !!s.multiple, s.defaultValue, !0)
                      : ni(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Is] = s;
          } catch (x) {
            Se(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((_t(t, e), Vt(e), n & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          Se(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (_t(t, e), Vt(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Ts(t.containerInfo);
        } catch (x) {
          Se(e, e.return, x);
        }
      break;
    case 4:
      _t(t, e), Vt(e);
      break;
    case 13:
      _t(t, e),
        Vt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Cd = Ae())),
        n & 4 && pm(e);
      break;
    case 22:
      if (
        ((m = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((He = (c = He) || m), _t(t, e), (He = c)) : _t(t, e),
        Vt(e),
        n & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for ($ = e, m = e.child; m !== null; ) {
            for (g = $ = m; $ !== null; ) {
              switch (((d = $), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ms(4, d, d.return);
                  break;
                case 1:
                  ei(d, d.return);
                  var w = d.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (n = d), (r = d.return);
                    try {
                      (t = n),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (x) {
                      Se(n, r, x);
                    }
                  }
                  break;
                case 5:
                  ei(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    hm(g);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), ($ = v)) : hm(g);
            }
            m = m.sibling;
          }
        e: for (m = null, g = e; ; ) {
          if (g.tag === 5) {
            if (m === null) {
              m = g;
              try {
                (i = g.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = g.stateNode),
                      (l = g.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = gg("display", o)));
              } catch (x) {
                Se(e, e.return, x);
              }
            }
          } else if (g.tag === 6) {
            if (m === null)
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (x) {
                Se(e, e.return, x);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            m === g && (m = null), (g = g.return);
          }
          m === g && (m = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      _t(t, e), Vt(e), n & 4 && pm(e);
      break;
    case 21:
      break;
    default:
      _t(t, e), Vt(e);
  }
}
function Vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Qy(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(z(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (Es(i, ""), (n.flags &= -33));
          var s = dm(e);
          Gc(e, s, i);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo,
            a = dm(e);
          Xc(e, a, o);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      Se(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bw(e, t, r) {
  ($ = e), Ky(e);
}
function Ky(e, t, r) {
  for (var n = (e.mode & 1) !== 0; $ !== null; ) {
    var i = $,
      s = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || Bo;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || He;
        a = Bo;
        var c = He;
        if (((Bo = o), (He = l) && !c))
          for ($ = i; $ !== null; )
            (o = $),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? gm(i)
                : l !== null
                ? ((l.return = o), ($ = l))
                : gm(i);
        for (; s !== null; ) ($ = s), Ky(s), (s = s.sibling);
        ($ = i), (Bo = a), (He = c);
      }
      mm(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), ($ = s)) : mm(e);
  }
}
function mm(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              He || Cl(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !He)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : It(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Gp(t, s, n);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Gp(t, o, r);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (r === null && t.flags & 4) {
                r = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var g = m.dehydrated;
                    g !== null && Ts(g);
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
              throw Error(z(163));
          }
        He || (t.flags & 512 && Yc(t));
      } catch (d) {
        Se(t, t.return, d);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), ($ = r);
      break;
    }
    $ = t.return;
  }
}
function hm(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), ($ = r);
      break;
    }
    $ = t.return;
  }
}
function gm(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Cl(4, t);
          } catch (l) {
            Se(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Se(t, i, l);
            }
          }
          var s = t.return;
          try {
            Yc(t);
          } catch (l) {
            Se(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Yc(t);
          } catch (l) {
            Se(t, o, l);
          }
      }
    } catch (l) {
      Se(t, t.return, l);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), ($ = a);
      break;
    }
    $ = t.return;
  }
}
var Aw = Math.ceil,
  Ha = br.ReactCurrentDispatcher,
  bd = br.ReactCurrentOwner,
  Et = br.ReactCurrentBatchConfig,
  ee = 0,
  Re = null,
  Ne = null,
  Ue = 0,
  ft = 0,
  ti = Jr(0),
  _e = 0,
  Bs = null,
  Cn = 0,
  El = 0,
  Ad = 0,
  hs = null,
  tt = null,
  Cd = 0,
  xi = 1 / 0,
  ar = null,
  Ka = !1,
  Jc = null,
  Fr = null,
  Fo = !1,
  Or = null,
  Va = 0,
  gs = 0,
  Zc = null,
  da = -1,
  pa = 0;
function Ge() {
  return ee & 6 ? Ae() : da !== -1 ? da : (da = Ae());
}
function $r(e) {
  return e.mode & 1
    ? ee & 2 && Ue !== 0
      ? Ue & -Ue
      : ow.transition !== null
      ? (pa === 0 && (pa = Tg()), pa)
      : ((e = ae),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lg(e.type))),
        e)
    : 1;
}
function Ut(e, t, r, n) {
  if (50 < gs) throw ((gs = 0), (Zc = null), Error(z(185)));
  io(e, r, n),
    (!(ee & 2) || e !== Re) &&
      (e === Re && (!(ee & 2) && (El |= r), _e === 4 && _r(e, Ue)),
      ot(e, n),
      r === 1 && ee === 0 && !(t.mode & 1) && ((xi = Ae() + 500), Sl && Zr()));
}
function ot(e, t) {
  var r = e.callbackNode;
  o1(e, t);
  var n = _a(e, e === Re ? Ue : 0);
  if (n === 0)
    r !== null && Ep(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Ep(r), t === 1))
      e.tag === 0 ? sw(ym.bind(null, e)) : ty(ym.bind(null, e)),
        tw(function () {
          !(ee & 6) && Zr();
        }),
        (r = null);
    else {
      switch (_g(n)) {
        case 1:
          r = Xf;
          break;
        case 4:
          r = jg;
          break;
        case 16:
          r = Ta;
          break;
        case 536870912:
          r = Ng;
          break;
        default:
          r = Ta;
      }
      r = e0(r, Vy.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function Vy(e, t) {
  if (((da = -1), (pa = 0), ee & 6)) throw Error(z(327));
  var r = e.callbackNode;
  if (li() && e.callbackNode !== r) return null;
  var n = _a(e, e === Re ? Ue : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = qa(e, n);
  else {
    t = n;
    var i = ee;
    ee |= 2;
    var s = Yy();
    (Re !== e || Ue !== t) && ((ar = null), (xi = Ae() + 500), gn(e, t));
    do
      try {
        kw();
        break;
      } catch (a) {
        qy(e, a);
      }
    while (!0);
    ud(),
      (Ha.current = s),
      (ee = i),
      Ne !== null ? (t = 0) : ((Re = null), (Ue = 0), (t = _e));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = kc(e)), i !== 0 && ((n = i), (t = ef(e, i)))), t === 1)
    )
      throw ((r = Bs), gn(e, 0), _r(e, n), ot(e, Ae()), r);
    if (t === 6) _r(e, n);
    else {
      if (
        ((i = e.current.alternate),
        !(n & 30) &&
          !Cw(i) &&
          ((t = qa(e, n)),
          t === 2 && ((s = kc(e)), s !== 0 && ((n = s), (t = ef(e, s)))),
          t === 1))
      )
        throw ((r = Bs), gn(e, 0), _r(e, n), ot(e, Ae()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          an(e, tt, ar);
          break;
        case 3:
          if (
            (_r(e, n), (n & 130023424) === n && ((t = Cd + 500 - Ae()), 10 < t))
          ) {
            if (_a(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              Ge(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ic(an.bind(null, e, tt, ar), t);
            break;
          }
          an(e, tt, ar);
          break;
        case 4:
          if ((_r(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - zt(n);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (n &= ~s);
          }
          if (
            ((n = i),
            (n = Ae() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * Aw(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Ic(an.bind(null, e, tt, ar), n);
            break;
          }
          an(e, tt, ar);
          break;
        case 5:
          an(e, tt, ar);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return ot(e, Ae()), e.callbackNode === r ? Vy.bind(null, e) : null;
}
function ef(e, t) {
  var r = hs;
  return (
    e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
    (e = qa(e, t)),
    e !== 2 && ((t = tt), (tt = r), t !== null && tf(t)),
    e
  );
}
function tf(e) {
  tt === null ? (tt = e) : tt.push.apply(tt, e);
}
function Cw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Qt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
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
function _r(e, t) {
  for (
    t &= ~Ad,
      t &= ~El,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - zt(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function ym(e) {
  if (ee & 6) throw Error(z(327));
  li();
  var t = _a(e, 0);
  if (!(t & 1)) return ot(e, Ae()), null;
  var r = qa(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = kc(e);
    n !== 0 && ((t = n), (r = ef(e, n)));
  }
  if (r === 1) throw ((r = Bs), gn(e, 0), _r(e, t), ot(e, Ae()), r);
  if (r === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    an(e, tt, ar),
    ot(e, Ae()),
    null
  );
}
function Ed(e, t) {
  var r = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = r), ee === 0 && ((xi = Ae() + 500), Sl && Zr());
  }
}
function En(e) {
  Or !== null && Or.tag === 0 && !(ee & 6) && li();
  var t = ee;
  ee |= 1;
  var r = Et.transition,
    n = ae;
  try {
    if (((Et.transition = null), (ae = 1), e)) return e();
  } finally {
    (ae = n), (Et.transition = r), (ee = t), !(ee & 6) && Zr();
  }
}
function kd() {
  (ft = ti.current), de(ti);
}
function gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), ew(r)), Ne !== null))
    for (r = Ne.return; r !== null; ) {
      var n = r;
      switch ((od(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Ma();
          break;
        case 3:
          yi(), de(it), de(Ke), hd();
          break;
        case 5:
          md(n);
          break;
        case 4:
          yi();
          break;
        case 13:
          de(ge);
          break;
        case 19:
          de(ge);
          break;
        case 10:
          cd(n.type._context);
          break;
        case 22:
        case 23:
          kd();
      }
      r = r.return;
    }
  if (
    ((Re = e),
    (Ne = e = Qr(e.current, null)),
    (Ue = ft = t),
    (_e = 0),
    (Bs = null),
    (Ad = El = Cn = 0),
    (tt = hs = null),
    pn !== null)
  ) {
    for (t = 0; t < pn.length; t++)
      if (((r = pn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          s = r.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (n.next = o);
        }
        r.pending = n;
      }
    pn = null;
  }
  return e;
}
function qy(e, t) {
  do {
    var r = Ne;
    try {
      if ((ud(), (ua.current = Wa), Qa)) {
        for (var n = ye.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        Qa = !1;
      }
      if (
        ((An = 0),
        (Pe = Te = ye = null),
        (ps = !1),
        (Ds = 0),
        (bd.current = null),
        r === null || r.return === null)
      ) {
        (_e = 1), (Bs = t), (Ne = null);
        break;
      }
      e: {
        var s = e,
          o = r.return,
          a = r,
          l = t;
        if (
          ((t = Ue),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            m = a,
            g = m.tag;
          if (!(m.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var d = m.alternate;
            d
              ? ((m.updateQueue = d.updateQueue),
                (m.memoizedState = d.memoizedState),
                (m.lanes = d.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var v = im(o);
          if (v !== null) {
            (v.flags &= -257),
              sm(v, o, a, s, t),
              v.mode & 1 && nm(s, c, t),
              (t = v),
              (l = c);
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              nm(s, c, t), jd();
              break e;
            }
            l = Error(z(426));
          }
        } else if (he && a.mode & 1) {
          var b = im(o);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              sm(b, o, a, s, t),
              ad(vi(l, a));
            break e;
          }
        }
        (s = l = vi(l, a)),
          _e !== 4 && (_e = 2),
          hs === null ? (hs = [s]) : hs.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var f = Py(s, l, t);
              Xp(s, f);
              break e;
            case 1:
              a = l;
              var p = s.type,
                h = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Fr === null || !Fr.has(h))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var y = Oy(s, a, t);
                Xp(s, y);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Gy(r);
    } catch (S) {
      (t = S), Ne === r && r !== null && (Ne = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Yy() {
  var e = Ha.current;
  return (Ha.current = Wa), e === null ? Wa : e;
}
function jd() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
    Re === null || (!(Cn & 268435455) && !(El & 268435455)) || _r(Re, Ue);
}
function qa(e, t) {
  var r = ee;
  ee |= 2;
  var n = Yy();
  (Re !== e || Ue !== t) && ((ar = null), gn(e, t));
  do
    try {
      Ew();
      break;
    } catch (i) {
      qy(e, i);
    }
  while (!0);
  if ((ud(), (ee = r), (Ha.current = n), Ne !== null)) throw Error(z(261));
  return (Re = null), (Ue = 0), _e;
}
function Ew() {
  for (; Ne !== null; ) Xy(Ne);
}
function kw() {
  for (; Ne !== null && !Gx(); ) Xy(Ne);
}
function Xy(e) {
  var t = Zy(e.alternate, e, ft);
  (e.memoizedProps = e.pendingProps),
    t === null ? Gy(e) : (Ne = t),
    (bd.current = null);
}
function Gy(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = xw(r, t)), r !== null)) {
        (r.flags &= 32767), (Ne = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (_e = 6), (Ne = null);
        return;
      }
    } else if (((r = vw(r, t, ft)), r !== null)) {
      Ne = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function an(e, t, r) {
  var n = ae,
    i = Et.transition;
  try {
    (Et.transition = null), (ae = 1), jw(e, t, r, n);
  } finally {
    (Et.transition = i), (ae = n);
  }
  return null;
}
function jw(e, t, r, n) {
  do li();
  while (Or !== null);
  if (ee & 6) throw Error(z(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = r.lanes | r.childLanes;
  if (
    (a1(e, s),
    e === Re && ((Ne = Re = null), (Ue = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Fo ||
      ((Fo = !0),
      e0(Ta, function () {
        return li(), null;
      })),
    (s = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || s)
  ) {
    (s = Et.transition), (Et.transition = null);
    var o = ae;
    ae = 1;
    var a = ee;
    (ee |= 4),
      (bd.current = null),
      Sw(e, r),
      Hy(r, e),
      V1(Oc),
      (Pa = !!Pc),
      (Oc = Pc = null),
      (e.current = r),
      bw(r),
      Jx(),
      (ee = a),
      (ae = o),
      (Et.transition = s);
  } else e.current = r;
  if (
    (Fo && ((Fo = !1), (Or = e), (Va = i)),
    (s = e.pendingLanes),
    s === 0 && (Fr = null),
    t1(r.stateNode),
    ot(e, Ae()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ka) throw ((Ka = !1), (e = Jc), (Jc = null), e);
  return (
    Va & 1 && e.tag !== 0 && li(),
    (s = e.pendingLanes),
    s & 1 ? (e === Zc ? gs++ : ((gs = 0), (Zc = e))) : (gs = 0),
    Zr(),
    null
  );
}
function li() {
  if (Or !== null) {
    var e = _g(Va),
      t = Et.transition,
      r = ae;
    try {
      if (((Et.transition = null), (ae = 16 > e ? 16 : e), Or === null))
        var n = !1;
      else {
        if (((e = Or), (Or = null), (Va = 0), ee & 6)) throw Error(z(331));
        var i = ee;
        for (ee |= 4, $ = e.current; $ !== null; ) {
          var s = $,
            o = s.child;
          if ($.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for ($ = c; $ !== null; ) {
                  var m = $;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ms(8, m, s);
                  }
                  var g = m.child;
                  if (g !== null) (g.return = m), ($ = g);
                  else
                    for (; $ !== null; ) {
                      m = $;
                      var d = m.sibling,
                        v = m.return;
                      if (($y(m), m === c)) {
                        $ = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), ($ = d);
                        break;
                      }
                      $ = v;
                    }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var b = x.sibling;
                    (x.sibling = null), (x = b);
                  } while (x !== null);
                }
              }
              $ = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), ($ = o);
          else
            e: for (; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ms(9, s, s.return);
                }
              var f = s.sibling;
              if (f !== null) {
                (f.return = s.return), ($ = f);
                break e;
              }
              $ = s.return;
            }
        }
        var p = e.current;
        for ($ = p; $ !== null; ) {
          o = $;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), ($ = h);
          else
            e: for (o = p; $ !== null; ) {
              if (((a = $), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, a);
                  }
                } catch (S) {
                  Se(a, a.return, S);
                }
              if (a === o) {
                $ = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                (y.return = a.return), ($ = y);
                break e;
              }
              $ = a.return;
            }
        }
        if (
          ((ee = i), Zr(), tr && typeof tr.onPostCommitFiberRoot == "function")
        )
          try {
            tr.onPostCommitFiberRoot(gl, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (ae = r), (Et.transition = t);
    }
  }
  return !1;
}
function vm(e, t, r) {
  (t = vi(r, t)),
    (t = Py(e, t, 1)),
    (e = Br(e, t, 1)),
    (t = Ge()),
    e !== null && (io(e, 1, t), ot(e, t));
}
function Se(e, t, r) {
  if (e.tag === 3) vm(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vm(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Fr === null || !Fr.has(n)))
        ) {
          (e = vi(r, e)),
            (e = Oy(t, e, 1)),
            (t = Br(t, e, 1)),
            (e = Ge()),
            t !== null && (io(t, 1, e), ot(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Nw(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Ge()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Re === e &&
      (Ue & r) === r &&
      (_e === 4 || (_e === 3 && (Ue & 130023424) === Ue && 500 > Ae() - Cd)
        ? gn(e, 0)
        : (Ad |= r)),
    ot(e, t);
}
function Jy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Po), (Po <<= 1), !(Po & 130023424) && (Po = 4194304))
      : (t = 1));
  var r = Ge();
  (e = yr(e, t)), e !== null && (io(e, t, r), ot(e, r));
}
function Tw(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Jy(e, r);
}
function _w(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  n !== null && n.delete(t), Jy(e, r);
}
var Zy;
Zy = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || it.current) rt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (rt = !1), yw(e, t, r);
      rt = !!(e.flags & 131072);
    }
  else (rt = !1), he && t.flags & 1048576 && ry(t, za, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      fa(e, t), (e = t.pendingProps);
      var i = mi(t, Ke.current);
      ai(t, r), (i = yd(null, t, n, e, i, r));
      var s = vd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            st(n) ? ((s = !0), La(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            dd(t),
            (i.updater = bl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Fc(t, n, e, r),
            (t = Wc(null, t, n, !0, s, r)))
          : ((t.tag = 0), he && s && sd(t), Ye(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (fa(e, t),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = Ow(n)),
          (e = It(n, e)),
          i)
        ) {
          case 0:
            t = Qc(null, t, n, e, r);
            break e;
          case 1:
            t = lm(null, t, n, e, r);
            break e;
          case 11:
            t = om(null, t, n, e, r);
            break e;
          case 14:
            t = am(null, t, n, It(n.type, e), r);
            break e;
        }
        throw Error(z(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : It(n, i)),
        Qc(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : It(n, i)),
        lm(e, t, n, i, r)
      );
    case 3:
      e: {
        if ((Ly(t), e === null)) throw Error(z(387));
        (n = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          oy(e, t),
          Fa(t, n, null, r);
        var o = t.memoizedState;
        if (((n = o.element), s.isDehydrated))
          if (
            ((s = {
              element: n,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = vi(Error(z(423)), t)), (t = um(e, t, n, r, i));
            break e;
          } else if (n !== i) {
            (i = vi(Error(z(424)), t)), (t = um(e, t, n, r, i));
            break e;
          } else
            for (
              mt = Ur(t.stateNode.containerInfo.firstChild),
                ht = t,
                he = !0,
                Dt = null,
                r = cy(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((hi(), n === i)) {
            t = vr(e, t, r);
            break e;
          }
          Ye(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        fy(t),
        e === null && zc(t),
        (n = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Rc(n, i) ? (o = null) : s !== null && Rc(n, s) && (t.flags |= 32),
        My(e, t),
        Ye(e, t, o, r),
        t.child
      );
    case 6:
      return e === null && zc(t), null;
    case 13:
      return Dy(e, t, r);
    case 4:
      return (
        pd(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = gi(t, null, n, r)) : Ye(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : It(n, i)),
        om(e, t, n, i, r)
      );
    case 7:
      return Ye(e, t, t.pendingProps, r), t.child;
    case 8:
      return Ye(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Ye(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          ue(Ua, n._currentValue),
          (n._currentValue = o),
          s !== null)
        )
          if (Qt(s.value, o)) {
            if (s.children === i.children && !it.current) {
              t = vr(e, t, r);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (s.tag === 1) {
                      (l = pr(-1, r & -r)), (l.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (l.next = l)
                          : ((l.next = m.next), (m.next = l)),
                          (c.pending = l);
                      }
                    }
                    (s.lanes |= r),
                      (l = s.alternate),
                      l !== null && (l.lanes |= r),
                      Uc(s.return, r, t),
                      (a.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(z(341));
                (o.lanes |= r),
                  (a = o.alternate),
                  a !== null && (a.lanes |= r),
                  Uc(o, r, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ye(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        ai(t, r),
        (i = kt(i)),
        (n = n(i)),
        (t.flags |= 1),
        Ye(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (i = It(n, t.pendingProps)),
        (i = It(n.type, i)),
        am(e, t, n, i, r)
      );
    case 15:
      return Ry(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : It(n, i)),
        fa(e, t),
        (t.tag = 1),
        st(n) ? ((e = !0), La(t)) : (e = !1),
        ai(t, r),
        ly(t, n, i),
        Fc(t, n, i, r),
        Wc(null, t, n, !0, e, r)
      );
    case 19:
      return zy(e, t, r);
    case 22:
      return Iy(e, t, r);
  }
  throw Error(z(156, t.tag));
};
function e0(e, t) {
  return kg(e, t);
}
function Pw(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
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
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ct(e, t, r, n) {
  return new Pw(e, t, r, n);
}
function Nd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ow(e) {
  if (typeof e == "function") return Nd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vf)) return 11;
    if (e === qf) return 14;
  }
  return 2;
}
function Qr(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Ct(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function ma(e, t, r, n, i, s) {
  var o = 2;
  if (((n = e), typeof e == "function")) Nd(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Hn:
        return yn(r.children, i, s, t);
      case Kf:
        (o = 8), (i |= 8);
        break;
      case fc:
        return (
          (e = Ct(12, r, t, i | 2)), (e.elementType = fc), (e.lanes = s), e
        );
      case dc:
        return (e = Ct(13, r, t, i)), (e.elementType = dc), (e.lanes = s), e;
      case pc:
        return (e = Ct(19, r, t, i)), (e.elementType = pc), (e.lanes = s), e;
      case ug:
        return kl(r, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ag:
              o = 10;
              break e;
            case lg:
              o = 9;
              break e;
            case Vf:
              o = 11;
              break e;
            case qf:
              o = 14;
              break e;
            case jr:
              (o = 16), (n = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ct(o, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = s), t
  );
}
function yn(e, t, r, n) {
  return (e = Ct(7, e, n, t)), (e.lanes = r), e;
}
function kl(e, t, r, n) {
  return (
    (e = Ct(22, e, n, t)),
    (e.elementType = ug),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Lu(e, t, r) {
  return (e = Ct(6, e, null, t)), (e.lanes = r), e;
}
function Du(e, t, r) {
  return (
    (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Rw(e, t, r, n, i) {
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
    (this.eventTimes = yu(0)),
    (this.expirationTimes = yu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yu(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Td(e, t, r, n, i, s, o, a, l) {
  return (
    (e = new Rw(e, t, r, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ct(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    dd(s),
    e
  );
}
function Iw(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wn,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function t0(e) {
  if (!e) return Vr;
  e = e._reactInternals;
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (st(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (st(r)) return ey(e, r, t);
  }
  return t;
}
function r0(e, t, r, n, i, s, o, a, l) {
  return (
    (e = Td(r, n, !0, e, i, s, o, a, l)),
    (e.context = t0(null)),
    (r = e.current),
    (n = Ge()),
    (i = $r(r)),
    (s = pr(n, i)),
    (s.callback = t ?? null),
    Br(r, s, i),
    (e.current.lanes = i),
    io(e, i, n),
    ot(e, n),
    e
  );
}
function jl(e, t, r, n) {
  var i = t.current,
    s = Ge(),
    o = $r(i);
  return (
    (r = t0(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = pr(s, o)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Br(i, t, o)),
    e !== null && (Ut(e, i, o, s), la(e, i, o)),
    o
  );
}
function Ya(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function _d(e, t) {
  xm(e, t), (e = e.alternate) && xm(e, t);
}
function Mw() {
  return null;
}
var n0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Pd(e) {
  this._internalRoot = e;
}
Nl.prototype.render = Pd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  jl(e, t, null, null);
};
Nl.prototype.unmount = Pd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function () {
      jl(null, e, null, null);
    }),
      (t[gr] = null);
  }
};
function Nl(e) {
  this._internalRoot = e;
}
Nl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Rg();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Tr.length && t !== 0 && t < Tr[r].priority; r++);
    Tr.splice(r, 0, e), r === 0 && Mg(e);
  }
};
function Od(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Tl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function wm() {}
function Lw(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var s = n;
      n = function () {
        var c = Ya(o);
        s.call(c);
      };
    }
    var o = r0(t, n, e, 0, null, !1, !1, "", wm);
    return (
      (e._reactRootContainer = o),
      (e[gr] = o.current),
      Os(e.nodeType === 8 ? e.parentNode : e),
      En(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var c = Ya(l);
      a.call(c);
    };
  }
  var l = Td(e, 0, !1, null, null, !1, !1, "", wm);
  return (
    (e._reactRootContainer = l),
    (e[gr] = l.current),
    Os(e.nodeType === 8 ? e.parentNode : e),
    En(function () {
      jl(t, l, r, n);
    }),
    l
  );
}
function _l(e, t, r, n, i) {
  var s = r._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Ya(o);
        a.call(l);
      };
    }
    jl(t, o, e, i);
  } else o = Lw(r, t, e, i, n);
  return Ya(o);
}
Pg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = rs(t.pendingLanes);
        r !== 0 &&
          (Gf(t, r | 1), ot(t, Ae()), !(ee & 6) && ((xi = Ae() + 500), Zr()));
      }
      break;
    case 13:
      En(function () {
        var n = yr(e, 1);
        if (n !== null) {
          var i = Ge();
          Ut(n, e, 1, i);
        }
      }),
        _d(e, 1);
  }
};
Jf = function (e) {
  if (e.tag === 13) {
    var t = yr(e, 134217728);
    if (t !== null) {
      var r = Ge();
      Ut(t, e, 134217728, r);
    }
    _d(e, 134217728);
  }
};
Og = function (e) {
  if (e.tag === 13) {
    var t = $r(e),
      r = yr(e, t);
    if (r !== null) {
      var n = Ge();
      Ut(r, e, t, n);
    }
    _d(e, t);
  }
};
Rg = function () {
  return ae;
};
Ig = function (e, t) {
  var r = ae;
  try {
    return (ae = e), t();
  } finally {
    ae = r;
  }
};
Ac = function (e, t, r) {
  switch (t) {
    case "input":
      if ((gc(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = wl(n);
            if (!i) throw Error(z(90));
            fg(n), gc(n, i);
          }
        }
      }
      break;
    case "textarea":
      pg(e, r);
      break;
    case "select":
      (t = r.value), t != null && ni(e, !!r.multiple, t, !1);
  }
};
wg = Ed;
Sg = En;
var Dw = { usingClientEntryPoint: !1, Events: [oo, Yn, wl, vg, xg, Ed] },
  qi = {
    findFiberByHostInstance: dn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  zw = {
    bundleType: qi.bundleType,
    version: qi.version,
    rendererPackageName: qi.rendererPackageName,
    rendererConfig: qi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: br.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Cg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qi.findFiberByHostInstance || Mw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$o.isDisabled && $o.supportsFiber)
    try {
      (gl = $o.inject(zw)), (tr = $o);
    } catch {}
}
xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dw;
xt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Od(t)) throw Error(z(200));
  return Iw(e, t, null, r);
};
xt.createRoot = function (e, t) {
  if (!Od(e)) throw Error(z(299));
  var r = !1,
    n = "",
    i = n0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Td(e, 1, !1, null, null, r, !1, n, i)),
    (e[gr] = t.current),
    Os(e.nodeType === 8 ? e.parentNode : e),
    new Pd(t)
  );
};
xt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = Cg(t)), (e = e === null ? null : e.stateNode), e;
};
xt.flushSync = function (e) {
  return En(e);
};
xt.hydrate = function (e, t, r) {
  if (!Tl(t)) throw Error(z(200));
  return _l(null, e, t, !0, r);
};
xt.hydrateRoot = function (e, t, r) {
  if (!Od(e)) throw Error(z(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    s = "",
    o = n0;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (s = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    (t = r0(t, null, e, 1, r ?? null, i, !1, s, o)),
    (e[gr] = t.current),
    Os(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i);
  return new Nl(t);
};
xt.render = function (e, t, r) {
  if (!Tl(t)) throw Error(z(200));
  return _l(null, e, t, !1, r);
};
xt.unmountComponentAtNode = function (e) {
  if (!Tl(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (En(function () {
        _l(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[gr] = null);
        });
      }),
      !0)
    : !1;
};
xt.unstable_batchedUpdates = Ed;
xt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Tl(r)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return _l(e, t, r, !1, n);
};
xt.version = "18.2.0-next-9e3b772b8-20220608";
function i0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i0);
    } catch (e) {
      console.error(e);
    }
}
i0(), (rg.exports = xt);
var Uw = rg.exports,
  Sm = Uw;
(uc.createRoot = Sm.createRoot), (uc.hydrateRoot = Sm.hydrateRoot);
const Rd = "/assets/Logo-Cyc4cOED.png",
  Bw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAnCAYAAABnlOo2AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL2SURBVHgBxVhLktowEG0b9vHsYDXOCcJ3z5wgcAKSE4Q5wXADyCpLnBMMOUHImgKcE0RZkV3IAYC8dklO4wxYdhnzqlT6S8/drVbLDuVAo9HwKpVKD8Xh8XhsIPd1V+g4jkI+X61WnykHHMqIdrvdB4mJIHEOCuTGWYlVsgxutVpjZJ+QPIvhPKZfr9ed7Xa7IEu4tgM1mSdTh5R2h8NhjNxfr9cOJ9SbSCO0KTH1Sc+1gpXKsOA7ZDNTx6YBsscwDHcvjYeN+VDXBKkv5jxg/IIKIvSDtM3g6+ebzWZgM6/ZbAYgNdRVBSm+TpuTqjI2YkFGIT2SJTB2hMxI0YfkemlzUglh0bemjK9dQOyKLKFVOo03c91h2hwbo24IcgFlBGznm6j20sbbEJJHXFF2qCyDXzTqbrfb2O/3RjITQYpt4g9lg6fXYLAKIxuEpw+Xy2V4kRAfVwycQTU9KgFsk/jw99IuHUkGRrchOy9cJHbaR0XSqppWkPlqyLAXBvs5XQlY3xNO08Pez8gjHxVJSF+Yz4YMUjPL8c6DpEaMJ3c1iTdmIEvm2mQYeo/A1EEu8nfm2Pv0j9CCysN3UfZiQiDhm1aITskZfFMjHZEmlBOYO9VrjGU79o0vZ7armFAKjLsfUX58SKwVAUdeiaofE+KYRnTIQSyxjzofU35MdfwUJNpjCUFakYSiU8biFATuzsU5RYNjcxjzb0MO4cndf4Q48qMSkRSGy/5A9CsqH8oUoLZXbrVa9U1DIhYuC/Kk3VkH+ddCQgj3LvTmm5p+5JUK6YsQaXgsoXvRX8rpSuDEObrnOkuE3NNnQr6p3UJlwE9R9txL91gZSN5nNz9lyfvMvXSPlYST++zEhkAu64uiUELENiR7yrpUL+wZEVKmZvP2Lhr6z0oEaChkQoFpQCgwQ8Cf+v4uCp1Op0finxNsKHQ4JkFhI4//LaD/rDy4rEMUBje66SWZAb9Eon+Mv4BarfaFjx06WHQ1KgGaCP+uiZ/TfwGEUnnMaG3eugAAAABJRU5ErkJggg==",
  Fw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAA2CAYAAABgMA/LAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADLSURBVHgB7dmxDcIwEEbhC2koKTMCZTZDlHQuKTNCVmEDj+GOjMBZSJAGxbJdHPH7JCv9r9jN60SN4+j0c9FzEqwtembv/bXTkSZ5j4TfXBzqKfxJW5aDIEkcahJsmfsQwmMYhnj1znqOgrX4mN/1Mb8JAAAAAAAAAPytTgo00AO/XU8yNdYDXclQLfVAul6qkqFa6oFzL5ka6YF0PQAAAAAAAAA7UNT1ajPYCcu7Xm3GO6GzNJTlTkjXS2VpKMudML/r1Wa0E3663gvhCDx/4CktcwAAAABJRU5ErkJggg==";
function J() {
  return (
    (J = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    J.apply(null, arguments)
  );
}
function cn(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function s0(e) {
  if (!cn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((r) => {
      t[r] = s0(e[r]);
    }),
    t
  );
}
function mr(e, t, r = { clone: !0 }) {
  const n = r.clone ? J({}, e) : e;
  return (
    cn(e) &&
      cn(t) &&
      Object.keys(t).forEach((i) => {
        i !== "__proto__" &&
          (cn(t[i]) && i in e && cn(e[i])
            ? (n[i] = mr(e[i], t[i], r))
            : r.clone
            ? (n[i] = cn(t[i]) ? s0(t[i]) : t[i])
            : (n[i] = t[i]));
      }),
    n
  );
}
var zu = { exports: {} },
  Uu,
  bm;
function $w() {
  if (bm) return Uu;
  bm = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (Uu = e), Uu;
}
var Bu, Am;
function Qw() {
  if (Am) return Bu;
  Am = 1;
  var e = $w();
  function t() {}
  function r() {}
  return (
    (r.resetWarningCache = t),
    (Bu = function () {
      function n(o, a, l, c, m, g) {
        if (g !== e) {
          var d = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((d.name = "Invariant Violation"), d);
        }
      }
      n.isRequired = n;
      function i() {
        return n;
      }
      var s = {
        array: n,
        bigint: n,
        bool: n,
        func: n,
        number: n,
        object: n,
        string: n,
        symbol: n,
        any: n,
        arrayOf: i,
        element: n,
        elementType: n,
        instanceOf: i,
        node: n,
        objectOf: i,
        oneOf: i,
        oneOfType: i,
        shape: i,
        exact: i,
        checkPropTypes: r,
        resetWarningCache: t,
      };
      return (s.PropTypes = s), s;
    }),
    Bu
  );
}
var Cm;
function o0() {
  return Cm || ((Cm = 1), (zu.exports = Qw()())), zu.exports;
}
o0();
function wi(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function Si(e) {
  if (typeof e != "string") throw new Error(wi(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function a0(e, t) {
  const r = J({}, t);
  return (
    Object.keys(e).forEach((n) => {
      if (n.toString().match(/^(components|slots)$/)) r[n] = J({}, e[n], r[n]);
      else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
        const i = e[n] || {},
          s = t[n];
        (r[n] = {}),
          !s || !Object.keys(s)
            ? (r[n] = i)
            : !i || !Object.keys(i)
            ? (r[n] = s)
            : ((r[n] = J({}, s)),
              Object.keys(i).forEach((o) => {
                r[n][o] = a0(i[o], s[o]);
              }));
      } else r[n] === void 0 && (r[n] = e[n]);
    }),
    r
  );
}
function Ww(e, t, r = void 0) {
  const n = {};
  return (
    Object.keys(e).forEach((i) => {
      n[i] = e[i]
        .reduce((s, o) => {
          if (o) {
            const a = t(o);
            a !== "" && s.push(a), r && r[o] && s.push(r[o]);
          }
          return s;
        }, [])
        .join(" ");
    }),
    n
  );
}
const Em = (e) => e,
  Hw = () => {
    let e = Em;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Em;
      },
    };
  },
  Kw = Hw(),
  Vw = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function l0(e, t, r = "Mui") {
  const n = Vw[t];
  return n ? `${r}-${n}` : `${Kw.generate(e)}-${t}`;
}
function qw(e, t, r = "Mui") {
  const n = {};
  return (
    t.forEach((i) => {
      n[i] = l0(e, i, r);
    }),
    n
  );
}
function Yw(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function ir(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function u0(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (r = u0(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function Wr() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
    (e = arguments[r]) && (t = u0(e)) && (n && (n += " "), (n += t));
  return n;
}
function c0(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Xw =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Gw = c0(function (e) {
    return (
      Xw.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function Jw(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Zw(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var eS = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (i) {
        var s;
        n.tags.length === 0
          ? n.insertionPoint
            ? (s = n.insertionPoint.nextSibling)
            : n.prepend
            ? (s = n.container.firstChild)
            : (s = n.before)
          : (s = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(i, s),
          n.tags.push(i);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Zw(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var s = Jw(i);
          try {
            s.insertRule(n, s.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Qe = "-ms-",
  Xa = "-moz-",
  re = "-webkit-",
  f0 = "comm",
  Id = "rule",
  Md = "decl",
  tS = "@import",
  d0 = "@keyframes",
  rS = "@layer",
  nS = Math.abs,
  Pl = String.fromCharCode,
  iS = Object.assign;
function sS(e, t) {
  return De(e, 0) ^ 45
    ? (((((((t << 2) ^ De(e, 0)) << 2) ^ De(e, 1)) << 2) ^ De(e, 2)) << 2) ^
        De(e, 3)
    : 0;
}
function p0(e) {
  return e.trim();
}
function oS(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ne(e, t, r) {
  return e.replace(t, r);
}
function rf(e, t) {
  return e.indexOf(t);
}
function De(e, t) {
  return e.charCodeAt(t) | 0;
}
function Fs(e, t, r) {
  return e.slice(t, r);
}
function Yt(e) {
  return e.length;
}
function Ld(e) {
  return e.length;
}
function Qo(e, t) {
  return t.push(e), e;
}
function aS(e, t) {
  return e.map(t).join("");
}
var Ol = 1,
  bi = 1,
  m0 = 0,
  lt = 0,
  ke = 0,
  Ii = "";
function Rl(e, t, r, n, i, s, o) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: s,
    line: Ol,
    column: bi,
    length: o,
    return: "",
  };
}
function Yi(e, t) {
  return iS(Rl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function lS() {
  return ke;
}
function uS() {
  return (
    (ke = lt > 0 ? De(Ii, --lt) : 0), bi--, ke === 10 && ((bi = 1), Ol--), ke
  );
}
function gt() {
  return (
    (ke = lt < m0 ? De(Ii, lt++) : 0), bi++, ke === 10 && ((bi = 1), Ol++), ke
  );
}
function nr() {
  return De(Ii, lt);
}
function ha() {
  return lt;
}
function lo(e, t) {
  return Fs(Ii, e, t);
}
function $s(e) {
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
function h0(e) {
  return (Ol = bi = 1), (m0 = Yt((Ii = e))), (lt = 0), [];
}
function g0(e) {
  return (Ii = ""), e;
}
function ga(e) {
  return p0(lo(lt - 1, nf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function cS(e) {
  for (; (ke = nr()) && ke < 33; ) gt();
  return $s(e) > 2 || $s(ke) > 3 ? "" : " ";
}
function fS(e, t) {
  for (
    ;
    --t &&
    gt() &&
    !(ke < 48 || ke > 102 || (ke > 57 && ke < 65) || (ke > 70 && ke < 97));

  );
  return lo(e, ha() + (t < 6 && nr() == 32 && gt() == 32));
}
function nf(e) {
  for (; gt(); )
    switch (ke) {
      case e:
        return lt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && nf(ke);
        break;
      case 40:
        e === 41 && nf(e);
        break;
      case 92:
        gt();
        break;
    }
  return lt;
}
function dS(e, t) {
  for (; gt() && e + ke !== 57; ) if (e + ke === 84 && nr() === 47) break;
  return "/*" + lo(t, lt - 1) + "*" + Pl(e === 47 ? e : gt());
}
function pS(e) {
  for (; !$s(nr()); ) gt();
  return lo(e, lt);
}
function mS(e) {
  return g0(ya("", null, null, null, [""], (e = h0(e)), 0, [0], e));
}
function ya(e, t, r, n, i, s, o, a, l) {
  for (
    var c = 0,
      m = 0,
      g = o,
      d = 0,
      v = 0,
      w = 0,
      x = 1,
      b = 1,
      f = 1,
      p = 0,
      h = "",
      y = i,
      S = s,
      C = n,
      A = h;
    b;

  )
    switch (((w = p), (p = gt()))) {
      case 40:
        if (w != 108 && De(A, g - 1) == 58) {
          rf((A += ne(ga(p), "&", "&\f")), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += ga(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += cS(w);
        break;
      case 92:
        A += fS(ha() - 1, 7);
        continue;
      case 47:
        switch (nr()) {
          case 42:
          case 47:
            Qo(hS(dS(gt(), ha()), t, r), l);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * x:
        a[c++] = Yt(A) * f;
      case 125 * x:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            b = 0;
          case 59 + m:
            f == -1 && (A = ne(A, /\f/g, "")),
              v > 0 &&
                Yt(A) - g &&
                Qo(
                  v > 32
                    ? jm(A + ";", n, r, g - 1)
                    : jm(ne(A, " ", "") + ";", n, r, g - 2),
                  l
                );
            break;
          case 59:
            A += ";";
          default:
            if (
              (Qo((C = km(A, t, r, c, m, i, a, h, (y = []), (S = []), g)), s),
              p === 123)
            )
              if (m === 0) ya(A, t, C, C, y, s, g, a, S);
              else
                switch (d === 99 && De(A, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ya(
                      e,
                      C,
                      C,
                      n && Qo(km(e, C, C, 0, 0, i, a, h, i, (y = []), g), S),
                      i,
                      S,
                      g,
                      a,
                      n ? y : S
                    );
                    break;
                  default:
                    ya(A, C, C, C, [""], S, 0, a, S);
                }
        }
        (c = m = v = 0), (x = f = 1), (h = A = ""), (g = o);
        break;
      case 58:
        (g = 1 + Yt(A)), (v = w);
      default:
        if (x < 1) {
          if (p == 123) --x;
          else if (p == 125 && x++ == 0 && uS() == 125) continue;
        }
        switch (((A += Pl(p)), p * x)) {
          case 38:
            f = m > 0 ? 1 : ((A += "\f"), -1);
            break;
          case 44:
            (a[c++] = (Yt(A) - 1) * f), (f = 1);
            break;
          case 64:
            nr() === 45 && (A += ga(gt())),
              (d = nr()),
              (m = g = Yt((h = A += pS(ha())))),
              p++;
            break;
          case 45:
            w === 45 && Yt(A) == 2 && (x = 0);
        }
    }
  return s;
}
function km(e, t, r, n, i, s, o, a, l, c, m) {
  for (
    var g = i - 1, d = i === 0 ? s : [""], v = Ld(d), w = 0, x = 0, b = 0;
    w < n;
    ++w
  )
    for (var f = 0, p = Fs(e, g + 1, (g = nS((x = o[w])))), h = e; f < v; ++f)
      (h = p0(x > 0 ? d[f] + " " + p : ne(p, /&\f/g, d[f]))) && (l[b++] = h);
  return Rl(e, t, r, i === 0 ? Id : a, l, c, m);
}
function hS(e, t, r) {
  return Rl(e, t, r, f0, Pl(lS()), Fs(e, 2, -2), 0);
}
function jm(e, t, r, n) {
  return Rl(e, t, r, Md, Fs(e, 0, n), Fs(e, n + 1, -1), n);
}
function ui(e, t) {
  for (var r = "", n = Ld(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function gS(e, t, r, n) {
  switch (e.type) {
    case rS:
      if (e.children.length) break;
    case tS:
    case Md:
      return (e.return = e.return || e.value);
    case f0:
      return "";
    case d0:
      return (e.return = e.value + "{" + ui(e.children, n) + "}");
    case Id:
      e.value = e.props.join(",");
  }
  return Yt((r = ui(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function yS(e) {
  var t = Ld(e);
  return function (r, n, i, s) {
    for (var o = "", a = 0; a < t; a++) o += e[a](r, n, i, s) || "";
    return o;
  };
}
function vS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var xS = function (t, r, n) {
    for (
      var i = 0, s = 0;
      (i = s), (s = nr()), i === 38 && s === 12 && (r[n] = 1), !$s(s);

    )
      gt();
    return lo(t, lt);
  },
  wS = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch ($s(i)) {
        case 0:
          i === 38 && nr() === 12 && (r[n] = 1), (t[n] += xS(lt - 1, r, n));
          break;
        case 2:
          t[n] += ga(i);
          break;
        case 4:
          if (i === 44) {
            (t[++n] = nr() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += Pl(i);
      }
    while ((i = gt()));
    return t;
  },
  SS = function (t, r) {
    return g0(wS(h0(t), r));
  },
  Nm = new WeakMap(),
  bS = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          i = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Nm.get(n)) &&
        !i
      ) {
        Nm.set(t, !0);
        for (
          var s = [], o = SS(r, s), a = n.props, l = 0, c = 0;
          l < o.length;
          l++
        )
          for (var m = 0; m < a.length; m++, c++)
            t.props[c] = s[l] ? o[l].replace(/&\f/g, a[m]) : a[m] + " " + o[l];
      }
    }
  },
  AS = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function y0(e, t) {
  switch (sS(e, t)) {
    case 5103:
      return re + "print-" + e + e;
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
      return re + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + e + Xa + e + Qe + e + e;
    case 6828:
    case 4268:
      return re + e + Qe + e + e;
    case 6165:
      return re + e + Qe + "flex-" + e + e;
    case 5187:
      return (
        re + e + ne(e, /(\w+).+(:[^]+)/, re + "box-$1$2" + Qe + "flex-$1$2") + e
      );
    case 5443:
      return re + e + Qe + "flex-item-" + ne(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        re +
        e +
        Qe +
        "flex-line-pack" +
        ne(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return re + e + Qe + ne(e, "shrink", "negative") + e;
    case 5292:
      return re + e + Qe + ne(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        re +
        "box-" +
        ne(e, "-grow", "") +
        re +
        e +
        Qe +
        ne(e, "grow", "positive") +
        e
      );
    case 4554:
      return re + ne(e, /([^-])(transform)/g, "$1" + re + "$2") + e;
    case 6187:
      return (
        ne(
          ne(ne(e, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ne(e, /(image-set\([^]*)/, re + "$1$`$1");
    case 4968:
      return (
        ne(
          ne(e, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + Qe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        re +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ne(e, /(.+)-inline(.+)/, re + "$1$2") + e;
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
      if (Yt(e) - 1 - t > 6)
        switch (De(e, t + 1)) {
          case 109:
            if (De(e, t + 4) !== 45) break;
          case 102:
            return (
              ne(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  re +
                  "$2-$3$1" +
                  Xa +
                  (De(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~rf(e, "stretch")
              ? y0(ne(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (De(e, t + 1) !== 115) break;
    case 6444:
      switch (De(e, Yt(e) - 3 - (~rf(e, "!important") && 10))) {
        case 107:
          return ne(e, ":", ":" + re) + e;
        case 101:
          return (
            ne(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                re +
                (De(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                re +
                "$2$3$1" +
                Qe +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (De(e, t + 11)) {
        case 114:
          return re + e + Qe + ne(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return re + e + Qe + ne(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return re + e + Qe + ne(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return re + e + Qe + e + e;
  }
  return e;
}
var CS = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Md:
          t.return = y0(t.value, t.length);
          break;
        case d0:
          return ui([Yi(t, { value: ne(t.value, "@", "@" + re) })], i);
        case Id:
          if (t.length)
            return aS(t.props, function (s) {
              switch (oS(s, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ui(
                    [Yi(t, { props: [ne(s, /:(read-\w+)/, ":" + Xa + "$1")] })],
                    i
                  );
                case "::placeholder":
                  return ui(
                    [
                      Yi(t, {
                        props: [ne(s, /:(plac\w+)/, ":" + re + "input-$1")],
                      }),
                      Yi(t, { props: [ne(s, /:(plac\w+)/, ":" + Xa + "$1")] }),
                      Yi(t, { props: [ne(s, /:(plac\w+)/, Qe + "input-$1")] }),
                    ],
                    i
                  );
              }
              return "";
            });
      }
  },
  ES = [CS],
  kS = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (x) {
        var b = x.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 &&
          (document.head.appendChild(x), x.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || ES,
      s = {},
      o,
      a = [];
    (o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (x) {
          for (
            var b = x.getAttribute("data-emotion").split(" "), f = 1;
            f < b.length;
            f++
          )
            s[b[f]] = !0;
          a.push(x);
        }
      );
    var l,
      c = [bS, AS];
    {
      var m,
        g = [
          gS,
          vS(function (x) {
            m.insert(x);
          }),
        ],
        d = yS(c.concat(i, g)),
        v = function (b) {
          return ui(mS(b), d);
        };
      l = function (b, f, p, h) {
        (m = p),
          v(b ? b + "{" + f.styles + "}" : f.styles),
          h && (w.inserted[f.name] = !0);
      };
    }
    var w = {
      key: r,
      sheet: new eS({
        key: r,
        container: o,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: s,
      registered: {},
      insert: l,
    };
    return w.sheet.hydrate(a), w;
  },
  jS = !0;
function NS(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : (n += i + " ");
    }),
    n
  );
}
var v0 = function (t, r, n) {
    var i = t.key + "-" + r.name;
    (n === !1 || jS === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = r.styles);
  },
  TS = function (t, r, n) {
    v0(t, r, n);
    var i = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var s = r;
      do t.insert(r === s ? "." + i : "", s, t.sheet, !0), (s = s.next);
      while (s !== void 0);
    }
  };
function _S(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var PS = {
    animationIterationCount: 1,
    aspectRatio: 1,
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
  OS = /[A-Z]|^ms/g,
  RS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  x0 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Tm = function (t) {
    return t != null && typeof t != "boolean";
  },
  Fu = c0(function (e) {
    return x0(e) ? e : e.replace(OS, "-$&").toLowerCase();
  }),
  _m = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(RS, function (n, i, s) {
            return (Xt = { name: i, styles: s, next: Xt }), i;
          });
    }
    return PS[t] !== 1 && !x0(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function Qs(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (Xt = { name: r.name, styles: r.styles, next: Xt }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (Xt = { name: n.name, styles: n.styles, next: Xt }), (n = n.next);
        var i = r.styles + ";";
        return i;
      }
      return IS(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = Xt,
          o = r(e);
        return (Xt = s), Qs(e, t, o);
      }
      break;
    }
  }
  if (t == null) return r;
  var a = t[r];
  return a !== void 0 ? a : r;
}
function IS(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++) n += Qs(e, t, r[i]) + ";";
  else
    for (var s in r) {
      var o = r[s];
      if (typeof o != "object")
        t != null && t[o] !== void 0
          ? (n += s + "{" + t[o] + "}")
          : Tm(o) && (n += Fu(s) + ":" + _m(s, o) + ";");
      else if (
        Array.isArray(o) &&
        typeof o[0] == "string" &&
        (t == null || t[o[0]] === void 0)
      )
        for (var a = 0; a < o.length; a++)
          Tm(o[a]) && (n += Fu(s) + ":" + _m(s, o[a]) + ";");
      else {
        var l = Qs(e, t, o);
        switch (s) {
          case "animation":
          case "animationName": {
            n += Fu(s) + ":" + l + ";";
            break;
          }
          default:
            n += s + "{" + l + "}";
        }
      }
    }
  return n;
}
var Pm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Xt,
  MS = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      s = "";
    Xt = void 0;
    var o = t[0];
    o == null || o.raw === void 0
      ? ((i = !1), (s += Qs(n, r, o)))
      : (s += o[0]);
    for (var a = 1; a < t.length; a++) (s += Qs(n, r, t[a])), i && (s += o[a]);
    Pm.lastIndex = 0;
    for (var l = "", c; (c = Pm.exec(s)) !== null; ) l += "-" + c[1];
    var m = _S(s) + l;
    return { name: m, styles: s, next: Xt };
  },
  LS = function (t) {
    return t();
  },
  DS = lc.useInsertionEffect ? lc.useInsertionEffect : !1,
  zS = DS || LS,
  w0 = E.createContext(typeof HTMLElement < "u" ? kS({ key: "css" }) : null);
w0.Provider;
var US = function (t) {
    return E.forwardRef(function (r, n) {
      var i = E.useContext(w0);
      return t(r, i, n);
    });
  },
  S0 = E.createContext({}),
  BS = Gw,
  FS = function (t) {
    return t !== "theme";
  },
  Om = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? BS : FS;
  },
  Rm = function (t, r, n) {
    var i;
    if (r) {
      var s = r.shouldForwardProp;
      i =
        t.__emotion_forwardProp && s
          ? function (o) {
              return t.__emotion_forwardProp(o) && s(o);
            }
          : s;
    }
    return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
  },
  $S = function (t) {
    var r = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      v0(r, n, i),
      zS(function () {
        return TS(r, n, i);
      }),
      null
    );
  },
  QS = function e(t, r) {
    var n = t.__emotion_real === t,
      i = (n && t.__emotion_base) || t,
      s,
      o;
    r !== void 0 && ((s = r.label), (o = r.target));
    var a = Rm(t, r, n),
      l = a || Om(i),
      c = !l("as");
    return function () {
      var m = arguments,
        g =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (s !== void 0 && g.push("label:" + s + ";"),
        m[0] == null || m[0].raw === void 0)
      )
        g.push.apply(g, m);
      else {
        g.push(m[0][0]);
        for (var d = m.length, v = 1; v < d; v++) g.push(m[v], m[0][v]);
      }
      var w = US(function (x, b, f) {
        var p = (c && x.as) || i,
          h = "",
          y = [],
          S = x;
        if (x.theme == null) {
          S = {};
          for (var C in x) S[C] = x[C];
          S.theme = E.useContext(S0);
        }
        typeof x.className == "string"
          ? (h = NS(b.registered, y, x.className))
          : x.className != null && (h = x.className + " ");
        var A = MS(g.concat(y), b.registered, S);
        (h += b.key + "-" + A.name), o !== void 0 && (h += " " + o);
        var k = c && a === void 0 ? Om(p) : l,
          N = {};
        for (var j in x) (c && j === "as") || (k(j) && (N[j] = x[j]));
        return (
          (N.className = h),
          (N.ref = f),
          E.createElement(
            E.Fragment,
            null,
            E.createElement($S, {
              cache: b,
              serialized: A,
              isStringTag: typeof p == "string",
            }),
            E.createElement(p, N)
          )
        );
      });
      return (
        (w.displayName =
          s !== void 0
            ? s
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (w.defaultProps = t.defaultProps),
        (w.__emotion_real = w),
        (w.__emotion_base = i),
        (w.__emotion_styles = g),
        (w.__emotion_forwardProp = a),
        Object.defineProperty(w, "toString", {
          value: function () {
            return "." + o;
          },
        }),
        (w.withComponent = function (x, b) {
          return e(x, J({}, r, b, { shouldForwardProp: Rm(w, b, !0) })).apply(
            void 0,
            g
          );
        }),
        w
      );
    };
  },
  WS = [
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
  sf = QS.bind();
WS.forEach(function (e) {
  sf[e] = sf(e);
});
function HS(e, t) {
  return sf(e, t);
}
const KS = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  VS = ["values", "unit", "step"],
  qS = (e) => {
    const t = Object.keys(e).map((r) => ({ key: r, val: e[r] })) || [];
    return (
      t.sort((r, n) => r.val - n.val),
      t.reduce((r, n) => J({}, r, { [n.key]: n.val }), {})
    );
  };
function YS(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: r = "px",
      step: n = 5,
    } = e,
    i = ir(e, VS),
    s = qS(t),
    o = Object.keys(s);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r})`;
  }
  function l(d) {
    return `@media (max-width:${
      (typeof t[d] == "number" ? t[d] : d) - n / 100
    }${r})`;
  }
  function c(d, v) {
    const w = o.indexOf(v);
    return `@media (min-width:${
      typeof t[d] == "number" ? t[d] : d
    }${r}) and (max-width:${
      (w !== -1 && typeof t[o[w]] == "number" ? t[o[w]] : v) - n / 100
    }${r})`;
  }
  function m(d) {
    return o.indexOf(d) + 1 < o.length ? c(d, o[o.indexOf(d) + 1]) : a(d);
  }
  function g(d) {
    const v = o.indexOf(d);
    return v === 0
      ? a(o[1])
      : v === o.length - 1
      ? l(o[v])
      : c(d, o[o.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return J(
    {
      keys: o,
      values: s,
      up: a,
      down: l,
      between: c,
      only: m,
      not: g,
      unit: r,
    },
    i
  );
}
const XS = { borderRadius: 4 };
function ys(e, t) {
  return t ? mr(e, t, { clone: !1 }) : e;
}
const Dd = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Im = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Dd[e]}px)`,
  };
function xr(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || Im;
    return t.reduce((o, a, l) => ((o[s.up(s.keys[l])] = r(t[l])), o), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || Im;
    return Object.keys(t).reduce((o, a) => {
      if (Object.keys(s.values || Dd).indexOf(a) !== -1) {
        const l = s.up(a);
        o[l] = r(t[a], a);
      } else {
        const l = a;
        o[l] = t[l];
      }
      return o;
    }, {});
  }
  return r(t);
}
function GS(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((n, i) => {
          const s = e.up(i);
          return (n[s] = {}), n;
        }, {})) || {}
  );
}
function JS(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function Il(e, t, r = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`
      .split(".")
      .reduce((i, s) => (i && i[s] ? i[s] : null), e);
    if (n != null) return n;
  }
  return t.split(".").reduce((n, i) => (n && n[i] != null ? n[i] : null), e);
}
function Ga(e, t, r, n = r) {
  let i;
  return (
    typeof e == "function"
      ? (i = e(r))
      : Array.isArray(e)
      ? (i = e[r] || n)
      : (i = Il(e, r) || n),
    t && (i = t(i, n, e)),
    i
  );
}
function Ce(e) {
  const { prop: t, cssProperty: r = e.prop, themeKey: n, transform: i } = e,
    s = (o) => {
      if (o[t] == null) return null;
      const a = o[t],
        l = o.theme,
        c = Il(l, n) || {};
      return xr(o, a, (g) => {
        let d = Ga(c, i, g);
        return (
          g === d &&
            typeof g == "string" &&
            (d = Ga(c, i, `${t}${g === "default" ? "" : Si(g)}`, g)),
          r === !1 ? d : { [r]: d }
        );
      });
    };
  return (s.propTypes = {}), (s.filterProps = [t]), s;
}
function ZS(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const eb = { m: "margin", p: "padding" },
  tb = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Mm = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  rb = ZS((e) => {
    if (e.length > 2)
      if (Mm[e]) e = Mm[e];
      else return [e];
    const [t, r] = e.split(""),
      n = eb[t],
      i = tb[r] || "";
    return Array.isArray(i) ? i.map((s) => n + s) : [n + i];
  }),
  zd = [
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
  Ud = [
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
[...zd, ...Ud];
function uo(e, t, r, n) {
  var i;
  const s = (i = Il(e, t, !1)) != null ? i : r;
  return typeof s == "number"
    ? (o) => (typeof o == "string" ? o : s * o)
    : Array.isArray(s)
    ? (o) => (typeof o == "string" ? o : s[o])
    : typeof s == "function"
    ? s
    : () => {};
}
function b0(e) {
  return uo(e, "spacing", 8);
}
function co(e, t) {
  if (typeof t == "string" || t == null) return t;
  const r = Math.abs(t),
    n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function nb(e, t) {
  return (r) => e.reduce((n, i) => ((n[i] = co(t, r)), n), {});
}
function ib(e, t, r, n) {
  if (t.indexOf(r) === -1) return null;
  const i = rb(r),
    s = nb(i, n),
    o = e[r];
  return xr(e, o, s);
}
function A0(e, t) {
  const r = b0(e.theme);
  return Object.keys(e)
    .map((n) => ib(e, t, n, r))
    .reduce(ys, {});
}
function xe(e) {
  return A0(e, zd);
}
xe.propTypes = {};
xe.filterProps = zd;
function we(e) {
  return A0(e, Ud);
}
we.propTypes = {};
we.filterProps = Ud;
function sb(e = 8) {
  if (e.mui) return e;
  const t = b0({ spacing: e }),
    r = (...n) =>
      (n.length === 0 ? [1] : n)
        .map((s) => {
          const o = t(s);
          return typeof o == "number" ? `${o}px` : o;
        })
        .join(" ");
  return (r.mui = !0), r;
}
function Ml(...e) {
  const t = e.reduce(
      (n, i) => (
        i.filterProps.forEach((s) => {
          n[s] = i;
        }),
        n
      ),
      {}
    ),
    r = (n) => Object.keys(n).reduce((i, s) => (t[s] ? ys(i, t[s](n)) : i), {});
  return (
    (r.propTypes = {}),
    (r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), [])),
    r
  );
}
function At(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Tt(e, t) {
  return Ce({ prop: e, themeKey: "borders", transform: t });
}
const ob = Tt("border", At),
  ab = Tt("borderTop", At),
  lb = Tt("borderRight", At),
  ub = Tt("borderBottom", At),
  cb = Tt("borderLeft", At),
  fb = Tt("borderColor"),
  db = Tt("borderTopColor"),
  pb = Tt("borderRightColor"),
  mb = Tt("borderBottomColor"),
  hb = Tt("borderLeftColor"),
  gb = Tt("outline", At),
  yb = Tt("outlineColor"),
  Ll = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = uo(e.theme, "shape.borderRadius", 4),
        r = (n) => ({ borderRadius: co(t, n) });
      return xr(e, e.borderRadius, r);
    }
    return null;
  };
Ll.propTypes = {};
Ll.filterProps = ["borderRadius"];
Ml(ob, ab, lb, ub, cb, fb, db, pb, mb, hb, Ll, gb, yb);
const Dl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = uo(e.theme, "spacing", 8),
      r = (n) => ({ gap: co(t, n) });
    return xr(e, e.gap, r);
  }
  return null;
};
Dl.propTypes = {};
Dl.filterProps = ["gap"];
const zl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = uo(e.theme, "spacing", 8),
      r = (n) => ({ columnGap: co(t, n) });
    return xr(e, e.columnGap, r);
  }
  return null;
};
zl.propTypes = {};
zl.filterProps = ["columnGap"];
const Ul = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = uo(e.theme, "spacing", 8),
      r = (n) => ({ rowGap: co(t, n) });
    return xr(e, e.rowGap, r);
  }
  return null;
};
Ul.propTypes = {};
Ul.filterProps = ["rowGap"];
const vb = Ce({ prop: "gridColumn" }),
  xb = Ce({ prop: "gridRow" }),
  wb = Ce({ prop: "gridAutoFlow" }),
  Sb = Ce({ prop: "gridAutoColumns" }),
  bb = Ce({ prop: "gridAutoRows" }),
  Ab = Ce({ prop: "gridTemplateColumns" }),
  Cb = Ce({ prop: "gridTemplateRows" }),
  Eb = Ce({ prop: "gridTemplateAreas" }),
  kb = Ce({ prop: "gridArea" });
Ml(Dl, zl, Ul, vb, xb, wb, Sb, bb, Ab, Cb, Eb, kb);
function ci(e, t) {
  return t === "grey" ? t : e;
}
const jb = Ce({ prop: "color", themeKey: "palette", transform: ci }),
  Nb = Ce({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: ci,
  }),
  Tb = Ce({ prop: "backgroundColor", themeKey: "palette", transform: ci });
Ml(jb, Nb, Tb);
function dt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const _b = Ce({ prop: "width", transform: dt }),
  Bd = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var n, i;
        const s =
          ((n = e.theme) == null ||
          (n = n.breakpoints) == null ||
          (n = n.values) == null
            ? void 0
            : n[r]) || Dd[r];
        return s
          ? ((i = e.theme) == null || (i = i.breakpoints) == null
              ? void 0
              : i.unit) !== "px"
            ? { maxWidth: `${s}${e.theme.breakpoints.unit}` }
            : { maxWidth: s }
          : { maxWidth: dt(r) };
      };
      return xr(e, e.maxWidth, t);
    }
    return null;
  };
Bd.filterProps = ["maxWidth"];
const Pb = Ce({ prop: "minWidth", transform: dt }),
  Ob = Ce({ prop: "height", transform: dt }),
  Rb = Ce({ prop: "maxHeight", transform: dt }),
  Ib = Ce({ prop: "minHeight", transform: dt });
Ce({ prop: "size", cssProperty: "width", transform: dt });
Ce({ prop: "size", cssProperty: "height", transform: dt });
const Mb = Ce({ prop: "boxSizing" });
Ml(_b, Bd, Pb, Ob, Rb, Ib, Mb);
const Fd = {
  border: { themeKey: "borders", transform: At },
  borderTop: { themeKey: "borders", transform: At },
  borderRight: { themeKey: "borders", transform: At },
  borderBottom: { themeKey: "borders", transform: At },
  borderLeft: { themeKey: "borders", transform: At },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: At },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: Ll },
  color: { themeKey: "palette", transform: ci },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ci,
  },
  backgroundColor: { themeKey: "palette", transform: ci },
  p: { style: we },
  pt: { style: we },
  pr: { style: we },
  pb: { style: we },
  pl: { style: we },
  px: { style: we },
  py: { style: we },
  padding: { style: we },
  paddingTop: { style: we },
  paddingRight: { style: we },
  paddingBottom: { style: we },
  paddingLeft: { style: we },
  paddingX: { style: we },
  paddingY: { style: we },
  paddingInline: { style: we },
  paddingInlineStart: { style: we },
  paddingInlineEnd: { style: we },
  paddingBlock: { style: we },
  paddingBlockStart: { style: we },
  paddingBlockEnd: { style: we },
  m: { style: xe },
  mt: { style: xe },
  mr: { style: xe },
  mb: { style: xe },
  ml: { style: xe },
  mx: { style: xe },
  my: { style: xe },
  margin: { style: xe },
  marginTop: { style: xe },
  marginRight: { style: xe },
  marginBottom: { style: xe },
  marginLeft: { style: xe },
  marginX: { style: xe },
  marginY: { style: xe },
  marginInline: { style: xe },
  marginInlineStart: { style: xe },
  marginInlineEnd: { style: xe },
  marginBlock: { style: xe },
  marginBlockStart: { style: xe },
  marginBlockEnd: { style: xe },
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
  gap: { style: Dl },
  rowGap: { style: Ul },
  columnGap: { style: zl },
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
  width: { transform: dt },
  maxWidth: { style: Bd },
  minWidth: { transform: dt },
  height: { transform: dt },
  maxHeight: { transform: dt },
  minHeight: { transform: dt },
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
};
function Lb(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []),
    r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Db(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zb() {
  function e(r, n, i, s) {
    const o = { [r]: n, theme: i },
      a = s[r];
    if (!a) return { [r]: n };
    const { cssProperty: l = r, themeKey: c, transform: m, style: g } = a;
    if (n == null) return null;
    if (c === "typography" && n === "inherit") return { [r]: n };
    const d = Il(i, c) || {};
    return g
      ? g(o)
      : xr(o, n, (w) => {
          let x = Ga(d, m, w);
          return (
            w === x &&
              typeof w == "string" &&
              (x = Ga(d, m, `${r}${w === "default" ? "" : Si(w)}`, w)),
            l === !1 ? x : { [l]: x }
          );
        });
  }
  function t(r) {
    var n;
    const { sx: i, theme: s = {} } = r || {};
    if (!i) return null;
    const o = (n = s.unstable_sxConfig) != null ? n : Fd;
    function a(l) {
      let c = l;
      if (typeof l == "function") c = l(s);
      else if (typeof l != "object") return l;
      if (!c) return null;
      const m = GS(s.breakpoints),
        g = Object.keys(m);
      let d = m;
      return (
        Object.keys(c).forEach((v) => {
          const w = Db(c[v], s);
          if (w != null)
            if (typeof w == "object")
              if (o[v]) d = ys(d, e(v, w, s, o));
              else {
                const x = xr({ theme: s }, w, (b) => ({ [v]: b }));
                Lb(x, w) ? (d[v] = t({ sx: w, theme: s })) : (d = ys(d, x));
              }
            else d = ys(d, e(v, w, s, o));
        }),
        JS(g, d)
      );
    }
    return Array.isArray(i) ? i.map(a) : a(i);
  }
  return t;
}
const Bl = zb();
Bl.filterProps = ["sx"];
function Ub(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function"
    ? {
        [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : r.palette.mode === e
    ? t
    : {};
}
const Bb = ["breakpoints", "palette", "spacing", "shape"];
function $d(e = {}, ...t) {
  const { breakpoints: r = {}, palette: n = {}, spacing: i, shape: s = {} } = e,
    o = ir(e, Bb),
    a = YS(r),
    l = sb(i);
  let c = mr(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: J({ mode: "light" }, n),
      spacing: l,
      shape: J({}, XS, s),
    },
    o
  );
  return (
    (c.applyStyles = Ub),
    (c = t.reduce((m, g) => mr(m, g), c)),
    (c.unstable_sxConfig = J({}, Fd, o == null ? void 0 : o.unstable_sxConfig)),
    (c.unstable_sx = function (g) {
      return Bl({ sx: g, theme: this });
    }),
    c
  );
}
function Fb(e) {
  return Object.keys(e).length === 0;
}
function $b(e = null) {
  const t = E.useContext(S0);
  return !t || Fb(t) ? e : t;
}
const Qb = $d();
function Wb(e = Qb) {
  return $b(e);
}
const Hb = ["ownerState"],
  Kb = ["variants"],
  Vb = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function qb(e) {
  return Object.keys(e).length === 0;
}
function Yb(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function va(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Xb = $d(),
  Gb = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Wo({ defaultTheme: e, theme: t, themeId: r }) {
  return qb(t) ? e : t[r] || t;
}
function Jb(e) {
  return e ? (t, r) => r[e] : null;
}
function xa(e, t) {
  let { ownerState: r } = t,
    n = ir(t, Hb);
  const i = typeof e == "function" ? e(J({ ownerState: r }, n)) : e;
  if (Array.isArray(i)) return i.flatMap((s) => xa(s, J({ ownerState: r }, n)));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const { variants: s = [] } = i;
    let a = ir(i, Kb);
    return (
      s.forEach((l) => {
        let c = !0;
        typeof l.props == "function"
          ? (c = l.props(J({ ownerState: r }, n)))
          : Object.keys(l.props).forEach((m) => {
              (r == null ? void 0 : r[m]) !== l.props[m] &&
                n[m] !== l.props[m] &&
                (c = !1);
            }),
          c &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style(J({ ownerState: r }, n))
                : l.style
            ));
      }),
      a
    );
  }
  return i;
}
function Zb(e = {}) {
  const {
      themeId: t,
      defaultTheme: r = Xb,
      rootShouldForwardProp: n = va,
      slotShouldForwardProp: i = va,
    } = e,
    s = (o) =>
      Bl(J({}, o, { theme: Wo(J({}, o, { defaultTheme: r, themeId: t })) }));
  return (
    (s.__mui_systemSx = !0),
    (o, a = {}) => {
      KS(o, (S) => S.filter((C) => !(C != null && C.__mui_systemSx)));
      const {
          name: l,
          slot: c,
          skipVariantsResolver: m,
          skipSx: g,
          overridesResolver: d = Jb(Gb(c)),
        } = a,
        v = ir(a, Vb),
        w = m !== void 0 ? m : (c && c !== "Root" && c !== "root") || !1,
        x = g || !1;
      let b,
        f = va;
      c === "Root" || c === "root"
        ? (f = n)
        : c
        ? (f = i)
        : Yb(o) && (f = void 0);
      const p = HS(o, J({ shouldForwardProp: f, label: b }, v)),
        h = (S) =>
          (typeof S == "function" && S.__emotion_real !== S) || cn(S)
            ? (C) =>
                xa(
                  S,
                  J({}, C, {
                    theme: Wo({ theme: C.theme, defaultTheme: r, themeId: t }),
                  })
                )
            : S,
        y = (S, ...C) => {
          let A = h(S);
          const k = C ? C.map(h) : [];
          l &&
            d &&
            k.push((T) => {
              const _ = Wo(J({}, T, { defaultTheme: r, themeId: t }));
              if (
                !_.components ||
                !_.components[l] ||
                !_.components[l].styleOverrides
              )
                return null;
              const P = _.components[l].styleOverrides,
                O = {};
              return (
                Object.entries(P).forEach(([L, M]) => {
                  O[L] = xa(M, J({}, T, { theme: _ }));
                }),
                d(T, O)
              );
            }),
            l &&
              !w &&
              k.push((T) => {
                var _;
                const P = Wo(J({}, T, { defaultTheme: r, themeId: t })),
                  O =
                    P == null ||
                    (_ = P.components) == null ||
                    (_ = _[l]) == null
                      ? void 0
                      : _.variants;
                return xa({ variants: O }, J({}, T, { theme: P }));
              }),
            x || k.push(s);
          const N = k.length - C.length;
          if (Array.isArray(S) && N > 0) {
            const T = new Array(N).fill("");
            (A = [...S, ...T]), (A.raw = [...S.raw, ...T]);
          }
          const j = p(A, ...k);
          return o.muiName && (j.muiName = o.muiName), j;
        };
      return p.withConfig && (y.withConfig = p.withConfig), y;
    }
  );
}
function eA(e) {
  const { theme: t, name: r, props: n } = e;
  return !t ||
    !t.components ||
    !t.components[r] ||
    !t.components[r].defaultProps
    ? n
    : a0(t.components[r].defaultProps, n);
}
function tA({ props: e, name: t, defaultTheme: r, themeId: n }) {
  let i = Wb(r);
  return (i = i[n] || i), eA({ theme: i, name: t, props: e });
}
function C0(e, t = 0, r = 1) {
  return Yw(e, t, r);
}
function rA(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return (
    r && r[0].length === 1 && (r = r.map((n) => n + n)),
    r
      ? `rgb${r.length === 4 ? "a" : ""}(${r
          .map((n, i) =>
            i < 3
              ? parseInt(n, 16)
              : Math.round((parseInt(n, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Ai(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Ai(rA(e));
  const t = e.indexOf("("),
    r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(wi(9, e));
  let n = e.substring(t + 1, e.length - 1),
    i;
  if (r === "color") {
    if (
      ((n = n.split(" ")),
      (i = n.shift()),
      n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        i
      ) === -1)
    )
      throw new Error(wi(10, i));
  } else n = n.split(",");
  return (
    (n = n.map((s) => parseFloat(s))), { type: r, values: n, colorSpace: i }
  );
}
function Qd(e) {
  const { type: t, colorSpace: r } = e;
  let { values: n } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (n = n.map((i, s) => (s < 3 ? parseInt(i, 10) : i)))
      : t.indexOf("hsl") !== -1 && ((n[1] = `${n[1]}%`), (n[2] = `${n[2]}%`)),
    t.indexOf("color") !== -1
      ? (n = `${r} ${n.join(" ")}`)
      : (n = `${n.join(", ")}`),
    `${t}(${n})`
  );
}
function nA(e) {
  e = Ai(e);
  const { values: t } = e,
    r = t[0],
    n = t[1] / 100,
    i = t[2] / 100,
    s = n * Math.min(i, 1 - i),
    o = (c, m = (c + r / 30) % 12) =>
      i - s * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(o(0) * 255),
    Math.round(o(8) * 255),
    Math.round(o(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), Qd({ type: a, values: l })
  );
}
function Lm(e) {
  e = Ai(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ai(nA(e)).values : e.values;
  return (
    (t = t.map(
      (r) => (
        e.type !== "color" && (r /= 255),
        r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function iA(e, t) {
  const r = Lm(e),
    n = Lm(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function sA(e, t) {
  if (((e = Ai(e)), (t = C0(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
  return Qd(e);
}
function oA(e, t) {
  if (((e = Ai(e)), (t = C0(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
  return Qd(e);
}
function aA(e, t) {
  return J(
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
const Ws = { black: "#000", white: "#fff" },
  lA = {
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
  Dn = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2",
  },
  zn = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828",
  },
  Xi = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100",
  },
  Un = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0",
  },
  Bn = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b",
  },
  Fn = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  uA = ["mode", "contrastThreshold", "tonalOffset"],
  Dm = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Ws.white, default: Ws.white },
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
  $u = {
    text: {
      primary: Ws.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Ws.white,
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
function zm(e, t, r, n) {
  const i = n.light || n,
    s = n.dark || n * 1.5;
  e[t] ||
    (e.hasOwnProperty(r)
      ? (e[t] = e[r])
      : t === "light"
      ? (e.light = oA(e.main, i))
      : t === "dark" && (e.dark = sA(e.main, s)));
}
function cA(e = "light") {
  return e === "dark"
    ? { main: Un[200], light: Un[50], dark: Un[400] }
    : { main: Un[700], light: Un[400], dark: Un[800] };
}
function fA(e = "light") {
  return e === "dark"
    ? { main: Dn[200], light: Dn[50], dark: Dn[400] }
    : { main: Dn[500], light: Dn[300], dark: Dn[700] };
}
function dA(e = "light") {
  return e === "dark"
    ? { main: zn[500], light: zn[300], dark: zn[700] }
    : { main: zn[700], light: zn[400], dark: zn[800] };
}
function pA(e = "light") {
  return e === "dark"
    ? { main: Bn[400], light: Bn[300], dark: Bn[700] }
    : { main: Bn[700], light: Bn[500], dark: Bn[900] };
}
function mA(e = "light") {
  return e === "dark"
    ? { main: Fn[400], light: Fn[300], dark: Fn[700] }
    : { main: Fn[800], light: Fn[500], dark: Fn[900] };
}
function hA(e = "light") {
  return e === "dark"
    ? { main: Xi[400], light: Xi[300], dark: Xi[700] }
    : { main: "#ed6c02", light: Xi[500], dark: Xi[900] };
}
function gA(e) {
  const {
      mode: t = "light",
      contrastThreshold: r = 3,
      tonalOffset: n = 0.2,
    } = e,
    i = ir(e, uA),
    s = e.primary || cA(t),
    o = e.secondary || fA(t),
    a = e.error || dA(t),
    l = e.info || pA(t),
    c = e.success || mA(t),
    m = e.warning || hA(t);
  function g(x) {
    return iA(x, $u.text.primary) >= r ? $u.text.primary : Dm.text.primary;
  }
  const d = ({
      color: x,
      name: b,
      mainShade: f = 500,
      lightShade: p = 300,
      darkShade: h = 700,
    }) => {
      if (
        ((x = J({}, x)),
        !x.main && x[f] && (x.main = x[f]),
        !x.hasOwnProperty("main"))
      )
        throw new Error(wi(11, b ? ` (${b})` : "", f));
      if (typeof x.main != "string")
        throw new Error(wi(12, b ? ` (${b})` : "", JSON.stringify(x.main)));
      return (
        zm(x, "light", p, n),
        zm(x, "dark", h, n),
        x.contrastText || (x.contrastText = g(x.main)),
        x
      );
    },
    v = { dark: $u, light: Dm };
  return mr(
    J(
      {
        common: J({}, Ws),
        mode: t,
        primary: d({ color: s, name: "primary" }),
        secondary: d({
          color: o,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: d({ color: a, name: "error" }),
        warning: d({ color: m, name: "warning" }),
        info: d({ color: l, name: "info" }),
        success: d({ color: c, name: "success" }),
        grey: lA,
        contrastThreshold: r,
        getContrastText: g,
        augmentColor: d,
        tonalOffset: n,
      },
      v[t]
    ),
    i
  );
}
const yA = [
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
function vA(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Um = { textTransform: "uppercase" },
  Bm = '"Roboto", "Helvetica", "Arial", sans-serif';
function xA(e, t) {
  const r = typeof t == "function" ? t(e) : t,
    {
      fontFamily: n = Bm,
      fontSize: i = 14,
      fontWeightLight: s = 300,
      fontWeightRegular: o = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: c = 16,
      allVariants: m,
      pxToRem: g,
    } = r,
    d = ir(r, yA),
    v = i / 14,
    w = g || ((f) => `${(f / c) * v}rem`),
    x = (f, p, h, y, S) =>
      J(
        { fontFamily: n, fontWeight: f, fontSize: w(p), lineHeight: h },
        n === Bm ? { letterSpacing: `${vA(y / p)}em` } : {},
        S,
        m
      ),
    b = {
      h1: x(s, 96, 1.167, -1.5),
      h2: x(s, 60, 1.2, -0.5),
      h3: x(o, 48, 1.167, 0),
      h4: x(o, 34, 1.235, 0.25),
      h5: x(o, 24, 1.334, 0),
      h6: x(a, 20, 1.6, 0.15),
      subtitle1: x(o, 16, 1.75, 0.15),
      subtitle2: x(a, 14, 1.57, 0.1),
      body1: x(o, 16, 1.5, 0.15),
      body2: x(o, 14, 1.43, 0.15),
      button: x(a, 14, 1.75, 0.4, Um),
      caption: x(o, 12, 1.66, 0.4),
      overline: x(o, 12, 2.66, 1, Um),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return mr(
    J(
      {
        htmlFontSize: c,
        pxToRem: w,
        fontFamily: n,
        fontSize: i,
        fontWeightLight: s,
        fontWeightRegular: o,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      b
    ),
    d,
    { clone: !1 }
  );
}
const wA = 0.2,
  SA = 0.14,
  bA = 0.12;
function me(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${wA})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${SA})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${bA})`,
  ].join(",");
}
const AA = [
    "none",
    me(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    me(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    me(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    me(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    me(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    me(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    me(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    me(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    me(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    me(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    me(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    me(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    me(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    me(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    me(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    me(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    me(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    me(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    me(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    me(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    me(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    me(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    me(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    me(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  CA = ["duration", "easing", "delay"],
  EA = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  kA = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Fm(e) {
  return `${Math.round(e)}ms`;
}
function jA(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function NA(e) {
  const t = J({}, EA, e.easing),
    r = J({}, kA, e.duration);
  return J(
    {
      getAutoHeightDuration: jA,
      create: (i = ["all"], s = {}) => {
        const {
          duration: o = r.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = s;
        return (
          ir(s, CA),
          (Array.isArray(i) ? i : [i])
            .map(
              (c) =>
                `${c} ${typeof o == "string" ? o : Fm(o)} ${a} ${
                  typeof l == "string" ? l : Fm(l)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: r }
  );
}
const TA = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  _A = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function PA(e = {}, ...t) {
  const {
      mixins: r = {},
      palette: n = {},
      transitions: i = {},
      typography: s = {},
    } = e,
    o = ir(e, _A);
  if (e.vars) throw new Error(wi(18));
  const a = gA(n),
    l = $d(e);
  let c = mr(l, {
    mixins: aA(l.breakpoints, r),
    palette: a,
    shadows: AA.slice(),
    typography: xA(a, s),
    transitions: NA(i),
    zIndex: J({}, TA),
  });
  return (
    (c = mr(c, o)),
    (c = t.reduce((m, g) => mr(m, g), c)),
    (c.unstable_sxConfig = J({}, Fd, o == null ? void 0 : o.unstable_sxConfig)),
    (c.unstable_sx = function (g) {
      return Bl({ sx: g, theme: this });
    }),
    c
  );
}
const E0 = PA(),
  k0 = "$$material";
function OA({ props: e, name: t }) {
  return tA({ props: e, name: t, defaultTheme: E0, themeId: k0 });
}
const RA = (e) => va(e) && e !== "classes",
  IA = Zb({ themeId: k0, defaultTheme: E0, rootShouldForwardProp: RA });
function MA(e) {
  return l0("MuiSvgIcon", e);
}
qw("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const LA = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  DA = (e) => {
    const { color: t, fontSize: r, classes: n } = e,
      i = {
        root: ["root", t !== "inherit" && `color${Si(t)}`, `fontSize${Si(r)}`],
      };
    return Ww(i, MA, n);
  },
  zA = IA("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color !== "inherit" && t[`color${Si(r.color)}`],
        t[`fontSize${Si(r.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var r, n, i, s, o, a, l, c, m, g, d, v, w;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (r = e.transitions) == null || (n = r.create) == null
          ? void 0
          : n.call(r, "fill", {
              duration:
                (i = e.transitions) == null || (i = i.duration) == null
                  ? void 0
                  : i.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((s = e.typography) == null || (o = s.pxToRem) == null
            ? void 0
            : o.call(s, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (l = a.pxToRem) == null
            ? void 0
            : l.call(a, 24)) || "1.5rem",
        large:
          ((c = e.typography) == null || (m = c.pxToRem) == null
            ? void 0
            : m.call(c, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (g =
          (d = (e.vars || e).palette) == null || (d = d[t.color]) == null
            ? void 0
            : d.main) != null
          ? g
          : {
              action:
                (v = (e.vars || e).palette) == null || (v = v.action) == null
                  ? void 0
                  : v.active,
              disabled:
                (w = (e.vars || e).palette) == null || (w = w.action) == null
                  ? void 0
                  : w.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  of = E.forwardRef(function (t, r) {
    const n = OA({ props: t, name: "MuiSvgIcon" }),
      {
        children: i,
        className: s,
        color: o = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: c,
        inheritViewBox: m = !1,
        titleAccess: g,
        viewBox: d = "0 0 24 24",
      } = n,
      v = ir(n, LA),
      w = E.isValidElement(i) && i.type === "svg",
      x = J({}, n, {
        color: o,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: m,
        viewBox: d,
        hasSvgAsChild: w,
      }),
      b = {};
    m || (b.viewBox = d);
    const f = DA(x);
    return u.jsxs(
      zA,
      J(
        {
          as: a,
          className: Wr(f.root, s),
          focusable: "false",
          color: c,
          "aria-hidden": g ? void 0 : !0,
          role: g ? "img" : void 0,
          ref: r,
        },
        b,
        v,
        w && i.props,
        {
          ownerState: x,
          children: [
            w ? i.props.children : i,
            g ? u.jsx("title", { children: g }) : null,
          ],
        }
      )
    );
  });
of.muiName = "SvgIcon";
function UA(e, t) {
  function r(n, i) {
    return u.jsx(
      of,
      J({ "data-testid": `${t}Icon`, ref: i }, n, { children: e })
    );
  }
  return (r.muiName = of.muiName), E.memo(E.forwardRef(r));
}
const BA = UA(
  u.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
  }),
  "Search"
);
/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hs() {
  return (
    (Hs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Hs.apply(this, arguments)
  );
}
var Rr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Rr || (Rr = {}));
const $m = "popstate";
function FA(e) {
  e === void 0 && (e = {});
  function t(n, i) {
    let { pathname: s, search: o, hash: a } = n.location;
    return af(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function r(n, i) {
    return typeof i == "string" ? i : Ja(i);
  }
  return QA(t, r, null, e);
}
function be(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function j0(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function $A() {
  return Math.random().toString(36).substr(2, 8);
}
function Qm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function af(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    Hs(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Mi(t) : t,
      { state: r, key: (t && t.key) || n || $A() }
    )
  );
}
function Ja(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function Mi(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function QA(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = n,
    o = i.history,
    a = Rr.Pop,
    l = null,
    c = m();
  c == null && ((c = 0), o.replaceState(Hs({}, o.state, { idx: c }), ""));
  function m() {
    return (o.state || { idx: null }).idx;
  }
  function g() {
    a = Rr.Pop;
    let b = m(),
      f = b == null ? null : b - c;
    (c = b), l && l({ action: a, location: x.location, delta: f });
  }
  function d(b, f) {
    a = Rr.Push;
    let p = af(x.location, b, f);
    c = m() + 1;
    let h = Qm(p, c),
      y = x.createHref(p);
    try {
      o.pushState(h, "", y);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      i.location.assign(y);
    }
    s && l && l({ action: a, location: x.location, delta: 1 });
  }
  function v(b, f) {
    a = Rr.Replace;
    let p = af(x.location, b, f);
    c = m();
    let h = Qm(p, c),
      y = x.createHref(p);
    o.replaceState(h, "", y),
      s && l && l({ action: a, location: x.location, delta: 0 });
  }
  function w(b) {
    let f = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof b == "string" ? b : Ja(b);
    return (
      (p = p.replace(/ $/, "%20")),
      be(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, f)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(b) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener($m, g),
        (l = b),
        () => {
          i.removeEventListener($m, g), (l = null);
        }
      );
    },
    createHref(b) {
      return t(i, b);
    },
    createURL: w,
    encodeLocation(b) {
      let f = w(b);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: d,
    replace: v,
    go(b) {
      return o.go(b);
    },
  };
  return x;
}
var Wm;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Wm || (Wm = {}));
function WA(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? Mi(t) : t,
    i = Ci(n.pathname || "/", r);
  if (i == null) return null;
  let s = N0(e);
  HA(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) {
    let l = rC(i);
    o = eC(s[a], l);
  }
  return o;
}
function N0(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (be(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let c = Hr([n, l.relativePath]),
      m = r.concat(l);
    s.children &&
      s.children.length > 0 &&
      (be(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      N0(s.children, t, m, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: JA(c, s.index), routesMeta: m });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of T0(s.path)) i(s, o, l);
    }),
    t
  );
}
function T0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    i = r.endsWith("?"),
    s = r.replace(/\?$/, "");
  if (n.length === 0) return i ? [s, ""] : [s];
  let o = T0(n.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function HA(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : ZA(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const KA = /^:[\w-]+$/,
  VA = 3,
  qA = 2,
  YA = 1,
  XA = 10,
  GA = -2,
  Hm = (e) => e === "*";
function JA(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Hm) && (n += GA),
    t && (n += qA),
    r
      .filter((i) => !Hm(i))
      .reduce((i, s) => i + (KA.test(s) ? VA : s === "" ? YA : XA), n)
  );
}
function ZA(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function eC(e, t) {
  let { routesMeta: r } = e,
    n = {},
    i = "/",
    s = [];
  for (let o = 0; o < r.length; ++o) {
    let a = r[o],
      l = o === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      m = lf(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        c
      );
    if (!m) return null;
    Object.assign(n, m.params);
    let g = a.route;
    s.push({
      params: n,
      pathname: Hr([i, m.pathname]),
      pathnameBase: oC(Hr([i, m.pathnameBase])),
      route: g,
    }),
      m.pathnameBase !== "/" && (i = Hr([i, m.pathnameBase]));
  }
  return s;
}
function lf(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = tC(e.path, e.caseSensitive, e.end),
    i = t.match(r);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: n.reduce((c, m, g) => {
      let { paramName: d, isOptional: v } = m;
      if (d === "*") {
        let x = a[g] || "";
        o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[g];
      return (
        v && !w ? (c[d] = void 0) : (c[d] = (w || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function tC(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    j0(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            n.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), n]
  );
}
function rC(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      j0(
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
function Ci(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function nC(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: i = "",
  } = typeof e == "string" ? Mi(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : iC(r, t)) : t,
    search: aC(n),
    hash: lC(i),
  };
}
function iC(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Qu(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function sC(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function _0(e, t) {
  let r = sC(e);
  return t
    ? r.map((n, i) => (i === e.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function P0(e, t, r, n) {
  n === void 0 && (n = !1);
  let i;
  typeof e == "string"
    ? (i = Mi(e))
    : ((i = Hs({}, e)),
      be(
        !i.pathname || !i.pathname.includes("?"),
        Qu("?", "pathname", "search", i)
      ),
      be(
        !i.pathname || !i.pathname.includes("#"),
        Qu("#", "pathname", "hash", i)
      ),
      be(!i.search || !i.search.includes("#"), Qu("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = r;
  else {
    let g = t.length - 1;
    if (!n && o.startsWith("..")) {
      let d = o.split("/");
      for (; d[0] === ".."; ) d.shift(), (g -= 1);
      i.pathname = d.join("/");
    }
    a = g >= 0 ? t[g] : "/";
  }
  let l = nC(i, a),
    c = o && o !== "/" && o.endsWith("/"),
    m = (s || o === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (c || m) && (l.pathname += "/"), l;
}
const Hr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  oC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  aC = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  lC = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function uC(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const O0 = ["post", "put", "patch", "delete"];
new Set(O0);
const cC = ["get", ...O0];
new Set(cC);
/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ks() {
  return (
    (Ks = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ks.apply(this, arguments)
  );
}
const Fl = E.createContext(null),
  R0 = E.createContext(null),
  en = E.createContext(null),
  $l = E.createContext(null),
  tn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  I0 = E.createContext(null);
function fC(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  fo() || be(!1);
  let { basename: n, navigator: i } = E.useContext(en),
    { hash: s, pathname: o, search: a } = Wl(e, { relative: r }),
    l = o;
  return (
    n !== "/" && (l = o === "/" ? n : Hr([n, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function fo() {
  return E.useContext($l) != null;
}
function On() {
  return fo() || be(!1), E.useContext($l).location;
}
function M0(e) {
  E.useContext(en).static || E.useLayoutEffect(e);
}
function et() {
  let { isDataRoute: e } = E.useContext(tn);
  return e ? CC() : dC();
}
function dC() {
  fo() || be(!1);
  let e = E.useContext(Fl),
    { basename: t, future: r, navigator: n } = E.useContext(en),
    { matches: i } = E.useContext(tn),
    { pathname: s } = On(),
    o = JSON.stringify(_0(i, r.v7_relativeSplatPath)),
    a = E.useRef(!1);
  return (
    M0(() => {
      a.current = !0;
    }),
    E.useCallback(
      function (c, m) {
        if ((m === void 0 && (m = {}), !a.current)) return;
        if (typeof c == "number") {
          n.go(c);
          return;
        }
        let g = P0(c, JSON.parse(o), s, m.relative === "path");
        e == null &&
          t !== "/" &&
          (g.pathname = g.pathname === "/" ? t : Hr([t, g.pathname])),
          (m.replace ? n.replace : n.push)(g, m.state, m);
      },
      [t, n, o, s, e]
    )
  );
}
function Ql() {
  let { matches: e } = E.useContext(tn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Wl(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = E.useContext(en),
    { matches: i } = E.useContext(tn),
    { pathname: s } = On(),
    o = JSON.stringify(_0(i, n.v7_relativeSplatPath));
  return E.useMemo(() => P0(e, JSON.parse(o), s, r === "path"), [e, o, s, r]);
}
function pC(e, t) {
  return mC(e, t);
}
function mC(e, t, r, n) {
  fo() || be(!1);
  let { navigator: i } = E.useContext(en),
    { matches: s } = E.useContext(tn),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let c = On(),
    m;
  if (t) {
    var g;
    let b = typeof t == "string" ? Mi(t) : t;
    l === "/" || ((g = b.pathname) != null && g.startsWith(l)) || be(!1),
      (m = b);
  } else m = c;
  let d = m.pathname || "/",
    v = d;
  if (l !== "/") {
    let b = l.replace(/^\//, "").split("/");
    v = "/" + d.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let w = WA(e, { pathname: v }),
    x = xC(
      w &&
        w.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, a, b.params),
            pathname: Hr([
              l,
              i.encodeLocation
                ? i.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? l
                : Hr([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          })
        ),
      s,
      r,
      n
    );
  return t && x
    ? E.createElement(
        $l.Provider,
        {
          value: {
            location: Ks(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              m
            ),
            navigationType: Rr.Pop,
          },
        },
        x
      )
    : x;
}
function hC() {
  let e = AC(),
    t = uC(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? E.createElement("pre", { style: i }, r) : null,
    null
  );
}
const gC = E.createElement(hC, null);
class yC extends E.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? E.createElement(
          tn.Provider,
          { value: this.props.routeContext },
          E.createElement(I0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function vC(e) {
  let { routeContext: t, match: r, children: n } = e,
    i = E.useContext(Fl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = r.route.id),
    E.createElement(tn.Provider, { value: t }, n)
  );
}
function xC(e, t, r, n) {
  var i;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var s;
    if ((s = r) != null && s.errors) e = r.matches;
    else return null;
  }
  let o = e,
    a = (i = r) == null ? void 0 : i.errors;
  if (a != null) {
    let m = o.findIndex(
      (g) => g.route.id && (a == null ? void 0 : a[g.route.id])
    );
    m >= 0 || be(!1), (o = o.slice(0, Math.min(o.length, m + 1)));
  }
  let l = !1,
    c = -1;
  if (r && n && n.v7_partialHydration)
    for (let m = 0; m < o.length; m++) {
      let g = o[m];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (c = m),
        g.route.id)
      ) {
        let { loaderData: d, errors: v } = r,
          w =
            g.route.loader &&
            d[g.route.id] === void 0 &&
            (!v || v[g.route.id] === void 0);
        if (g.route.lazy || w) {
          (l = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((m, g, d) => {
    let v,
      w = !1,
      x = null,
      b = null;
    r &&
      ((v = a && g.route.id ? a[g.route.id] : void 0),
      (x = g.route.errorElement || gC),
      l &&
        (c < 0 && d === 0
          ? (EC("route-fallback"), (w = !0), (b = null))
          : c === d &&
            ((w = !0), (b = g.route.hydrateFallbackElement || null))));
    let f = t.concat(o.slice(0, d + 1)),
      p = () => {
        let h;
        return (
          v
            ? (h = x)
            : w
            ? (h = b)
            : g.route.Component
            ? (h = E.createElement(g.route.Component, null))
            : g.route.element
            ? (h = g.route.element)
            : (h = m),
          E.createElement(vC, {
            match: g,
            routeContext: { outlet: m, matches: f, isDataRoute: r != null },
            children: h,
          })
        );
      };
    return r && (g.route.ErrorBoundary || g.route.errorElement || d === 0)
      ? E.createElement(yC, {
          location: r.location,
          revalidation: r.revalidation,
          component: x,
          error: v,
          children: p(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var L0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(L0 || {}),
  D0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(D0 || {});
function wC(e) {
  let t = E.useContext(Fl);
  return t || be(!1), t;
}
function SC(e) {
  let t = E.useContext(R0);
  return t || be(!1), t;
}
function bC(e) {
  let t = E.useContext(tn);
  return t || be(!1), t;
}
function z0(e) {
  let t = bC(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || be(!1), r.route.id;
}
function AC() {
  var e;
  let t = E.useContext(I0),
    r = SC(),
    n = z0();
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function CC() {
  let { router: e } = wC(L0.UseNavigateStable),
    t = z0(D0.UseNavigateStable),
    r = E.useRef(!1);
  return (
    M0(() => {
      r.current = !0;
    }),
    E.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          r.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Ks({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const Km = {};
function EC(e, t, r) {
  Km[e] || (Km[e] = !0);
}
function Ve(e) {
  be(!1);
}
function kC(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: i = Rr.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  fo() && be(!1);
  let l = t.replace(/^\/*/, "/"),
    c = E.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: o,
        future: Ks({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, o]
    );
  typeof n == "string" && (n = Mi(n));
  let {
      pathname: m = "/",
      search: g = "",
      hash: d = "",
      state: v = null,
      key: w = "default",
    } = n,
    x = E.useMemo(() => {
      let b = Ci(m, l);
      return b == null
        ? null
        : {
            location: { pathname: b, search: g, hash: d, state: v, key: w },
            navigationType: i,
          };
    }, [l, m, g, d, v, w, i]);
  return x == null
    ? null
    : E.createElement(
        en.Provider,
        { value: c },
        E.createElement($l.Provider, { children: r, value: x })
      );
}
function jC(e) {
  let { children: t, location: r } = e;
  return pC(uf(t), r);
}
new Promise(() => {});
function uf(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    E.Children.forEach(e, (n, i) => {
      if (!E.isValidElement(n)) return;
      let s = [...t, i];
      if (n.type === E.Fragment) {
        r.push.apply(r, uf(n.props.children, s));
        return;
      }
      n.type !== Ve && be(!1), !n.props.index || !n.props.children || be(!1);
      let o = {
        id: n.props.id || s.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (o.children = uf(n.props.children, s)), r.push(o);
    }),
    r
  );
}
/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Za() {
  return (
    (Za = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Za.apply(this, arguments)
  );
}
function U0(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    s;
  for (s = 0; s < n.length; s++)
    (i = n[s]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function NC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function TC(e, t) {
  return e.button === 0 && (!t || t === "_self") && !NC(e);
}
const _C = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  PC = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  OC = "6";
try {
  window.__reactRouterVersion = OC;
} catch {}
const RC = E.createContext({ isTransitioning: !1 }),
  IC = "startTransition",
  Vm = lc[IC];
function MC(e) {
  let { basename: t, children: r, future: n, window: i } = e,
    s = E.useRef();
  s.current == null && (s.current = FA({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, l] = E.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = n || {},
    m = E.useCallback(
      (g) => {
        c && Vm ? Vm(() => l(g)) : l(g);
      },
      [l, c]
    );
  return (
    E.useLayoutEffect(() => o.listen(m), [o, m]),
    E.createElement(kC, {
      basename: t,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: n,
    })
  );
}
const LC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  DC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  is = E.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: c,
        preventScrollReset: m,
        unstable_viewTransition: g,
      } = t,
      d = U0(t, _C),
      { basename: v } = E.useContext(en),
      w,
      x = !1;
    if (typeof c == "string" && DC.test(c) && ((w = c), LC))
      try {
        let h = new URL(window.location.href),
          y = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c),
          S = Ci(y.pathname, v);
        y.origin === h.origin && S != null
          ? (c = S + y.search + y.hash)
          : (x = !0);
      } catch {}
    let b = fC(c, { relative: i }),
      f = UC(c, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: m,
        relative: i,
        unstable_viewTransition: g,
      });
    function p(h) {
      n && n(h), h.defaultPrevented || f(h);
    }
    return E.createElement(
      "a",
      Za({}, d, { href: w || b, onClick: x || s ? n : p, ref: r, target: l })
    );
  }),
  Ir = E.forwardRef(function (t, r) {
    let {
        "aria-current": n = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: o = !1,
        style: a,
        to: l,
        unstable_viewTransition: c,
        children: m,
      } = t,
      g = U0(t, PC),
      d = Wl(l, { relative: g.relative }),
      v = On(),
      w = E.useContext(R0),
      { navigator: x, basename: b } = E.useContext(en),
      f = w != null && BC(d) && c === !0,
      p = x.encodeLocation ? x.encodeLocation(d).pathname : d.pathname,
      h = v.pathname,
      y =
        w && w.navigation && w.navigation.location
          ? w.navigation.location.pathname
          : null;
    i ||
      ((h = h.toLowerCase()),
      (y = y ? y.toLowerCase() : null),
      (p = p.toLowerCase())),
      y && b && (y = Ci(y, b) || y);
    const S = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let C = h === p || (!o && h.startsWith(p) && h.charAt(S) === "/"),
      A =
        y != null &&
        (y === p || (!o && y.startsWith(p) && y.charAt(p.length) === "/")),
      k = { isActive: C, isPending: A, isTransitioning: f },
      N = C ? n : void 0,
      j;
    typeof s == "function"
      ? (j = s(k))
      : (j = [
          s,
          C ? "active" : null,
          A ? "pending" : null,
          f ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let T = typeof a == "function" ? a(k) : a;
    return E.createElement(
      is,
      Za({}, g, {
        "aria-current": N,
        className: j,
        ref: r,
        style: T,
        to: l,
        unstable_viewTransition: c,
      }),
      typeof m == "function" ? m(k) : m
    );
  });
var cf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(cf || (cf = {}));
var qm;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(qm || (qm = {}));
function zC(e) {
  let t = E.useContext(Fl);
  return t || be(!1), t;
}
function UC(e, t) {
  let {
      target: r,
      replace: n,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = et(),
    c = On(),
    m = Wl(e, { relative: o });
  return E.useCallback(
    (g) => {
      if (TC(g, r)) {
        g.preventDefault();
        let d = n !== void 0 ? n : Ja(c) === Ja(m);
        l(e, {
          replace: d,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [c, l, m, n, i, r, e, s, o, a]
  );
}
function BC(e, t) {
  t === void 0 && (t = {});
  let r = E.useContext(RC);
  r == null && be(!1);
  let { basename: n } = zC(cf.useViewTransitionState),
    i = Wl(e, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let s = Ci(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    o = Ci(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return lf(i.pathname, o) != null || lf(i.pathname, s) != null;
}
const FC = "/assets/hero_img-DOCOb6wn.png",
  $C =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFRSURBVHgB7ZfhTcMwFITPEf/JCBkBNggTUCYAJqAj0A1ggzABZYHEbJANmm4QFgicwUJVlTq8F6Wkkj/p5DaX1Ff7pc0zEJLn+ROHB8ElDXVjra0F1yCBHEkoR0ZdQ8gZ9DSUDfgZlUPJqGDcnvtDJrc8x4hgmq08CoZfbAFZDdz5saXWgfNSauFf115/wX3uygX7xPxYuq0sMC/cir2Z/aM7K8jatleYCH9zVP7tI+da7fqzLf4YTMpsg6l++Vm3GX7+M99ZtOuAX9N/gQLtirlJl9QrQ6QBvzjgTxbsd7IkSc4V/iCx+KXEYFJiMCkxmJQYTEoMJkUbrPFjW5blNuCj67oPKNB24s/U1hiz6TNdY8HHnW+/qqoWClTBOLGbrBg4J+gPEYtfykk2I6lvKqYi2AuEgl1QG/wTfVupur1H0uwf6FuxS+oWx6Pt6z2/APN7VZph5zBWAAAAAElFTkSuQmCC",
  QC =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEJwAABCcASbNOjQAAAGASURBVEhLrZa7cYQwFEX5RiRbwpawLoEEhtAVeN2BOzCuxHYFJMzwSWjBJVCCIzLA74KQWRAgBGcG0GOGw9WHERrIsizM8/y9Kw6iJ0lyN03zk9Wh53kfrK2EQbywNgjxAtZWwqiq6pmuP32paUh7RKrjFEXRxXGcgpo31KCu69cgCL5YKU0nBGdJuRBQV6/UZUiv/Z390gchEEnbtn3yfZ+P8xoGu3IoTUmpXGqW/Z1OWNBa5UOxxizhwDRp0zS/uq67W0kXhUBFuioEe6WbQiCSYqIw3qjHzCZFxHSi6HO90FHgRajHSCUcmCallCWldcdJdwnBlnS3EKxJlYQgjuObZVkFxhP1IJWaFBG2bWu0fFj1j5IQXSZZRMdDOqUunzoppy4bGRmQEk5lJFr8njeFe2RgVbhXBhaFKjIgFKrKwEw4lQGaUbVNCnuzQHaXlQEuHG30U9k3K6Xouiz6a1CRAf1MGTDOlAGDlgR/mDaityMyDi2VME3TE36JNe0PEvQ33QXCa5oAAAAASUVORK5CYII=",
  WC =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR1SURBVHgB7ZzrbdswFIVPgQ7QDXI3aDYIN2g6gbRBsoHUCdIN3E4QdAJlg6QT2J0g2SDlhaVaNUTy8iGKMvQB94dhiyIPD5+iBWxsbGxsbGyk4QPKgHRc6/ik42ri+zcdf3Qc+njDwiwlnOrjBifBfHjp45eOJxQg5JywQK2OVx3vieNRR4ULQ+nokF6sqdjjKCBhxSjkE8wk4Krg/uo7lhFsSkDCClA4Zja2wK99OinS4mhRMPcIE2in4w7HEfbKkDa7mAeXLzoedDwH3IuvIRSGj2gsFhf+BnGQjhp+riyu6SrIBGvgP2eTwJXQYaXi2TI+l2Dn1JA5kCuRUAgK07V7jfw0WJnzxq7jfiyHy0zcwr1K4QFjyTz+Q+HUNEuA4G66D8gA145y/KZCWRDc4t1iZnhF0GF9EOzicZOercnS6EYK64MHqUWa7LjjX6PrGNdEXSExKsdNMjE2wHkkN0SX4yaZINinKcnmnYSM1s5Egwx93Q4ZrZ0JHkFNrks2wu5h71AJ64SdNVtLUnCv+XaIh2uYkAZpH6UwY5kauIWLtTZfy2tGdjYhjhbHPFXC33cwlykK29A9jgZhDKIN6cSI157lSSKezRhXiED6DDTEdeeixYjXGvLlEk/BXCaJ8JO4ligxrjOJFiJe68hX5ciH6brgaYmCn3BS17lE8xGvFaTTONIw5eURgdSAl3CSTEpFk4jXJsgPs7PcO4gG8gJKXOcrmk28VnCdRDTmAQUIx1FNpBUq2pR4reD3UtFc5TTyEWE8Wb5TOn6OPrNoHdwT0wPMzZL6NPhY1x3stDq+nV1Llt/bvgvCVBM+FpY6rYJsizvEaSoivSCayAR9RBsghIvXWPLSBaQXvHq4syTqmnaEiDZA8BevceRHeabn27L+o7YkauuvYkQbIMjFc4k20EEu2jsitsxsKwdboW8FmarghuAWTyoaoyAXjSN4AhyzHKkRJ9oAwSyej2gDHeTCuUZvK6ZMPwuurREn2gBN5CNENEZBLtwNIrDtkkrWpTXiRBsgnMQLFW3AZIaQ8hmpEW/lGmmORRAim09PjRkHhgHbQ43oxBfEtc+YooKsHarCOmlgF46QAIUZLb0Q2VqSzdoK68TkugoJsVl7j0JONXoy5bo9EmOzNkeWU40zcG6IpG4bcB2Rmv1U4wyMDZHcbWNsi/eijsB7MEzyZ3HbgILddVxrhHVBSHOMw4ltGVaieC1kT9+y0MEt3hJ/DBnDYvzAqRspYuQnyBbLLZaBkG5HJTkEmXgd8jbdFtNTp2Jcx3BzlIjHscO8Aiqk3TGeHYLfw5WUArKDeCejE967KNcxBP8nUzwnZAco+EE47qmxWL6v4kiyXcSkfGEL1yQLcY8wXmB+kw3h2C0Qwhxz0PG1v0ex1Ej3EoIUsfTfP70g2I/554g94v/3vxiE/AKyYBUuBMJRQC7UXIJ1OL5e42LhwqUSkcVqEHlCPISUo2oI1318xul1aOd/Fnnr49DH8Aq037jw159tbGxsbGxsbFj4C7XOZoyRzeTiAAAAAElFTkSuQmCC",
  HC =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAnCAYAAACBvSFyAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN4SURBVHgBzVg7ctpAGF4BRbrQ2TMuopzAiu2CVMFdOucGOCcInMBwAsMJwCeIXaU0dGQGiLiBUpF0KhmGR75PrMhK6LHi4fE/s7MP7e7/7b//a2WIHejq6qq8Wq0qKGV0TTlss+RyuYfBYNAVGcjIMtmyLDOfz7cl8yTqLJfLhm3bjjgkCACwcMpnNIuaSxwAudYBkhMaRAkAwHcfACThgkEd5cNoNDJYpHQ6yjKuecbaVNB5oUFnZ2dtVCUJwEH5iBM+/QH5c9D8PZlMnk5OTsaGYXzG0BuCRnuK8V7S/qnXIa/hl9/H6d+niRhLqlhzL7uuXOPGzU+9DmxWUbodnTvGnCakZcsur+NTIg+RQhCn5bdxokehSVjX3TDJ5SyxD4jQxm6G6WOlbYpDgYCIdc2T9FZpu3uBoDVsJqeINbSu7LdxjbbYB0RID6o6dk+/gqv7ogz19gIhN/DFWVRMLw5AUXpWjyCRbppFpTorOKEpHNBf5WTW6ekpy098C9w1AxuqH0JRRIC4Ds8LU5bYcYcT1gOL12boSGbUl4DO4CqrkEIrbe+sUXQLSBQxtqAQwIPQoEwgJBAq3X1I8TbMMc4w3tIN4zuBUMAwOJ2DseltZBgMbOOkGPGqaWdJlEolk/VisSjSkxYKBWc6nbq7SEILBBnOZrMbBrNQXhlFBOGg2LQegOyl6UcsCOl0KlRAjZwykaQpt4bD4aM2iMvLSzKmZzRFDNESxPrUfuFcKmuSW4/MOwMgpMY3USoRDG3UPAnduBN394rVWJQiSjliWgN5aX0LhOLzLZU5ShPN1q6mJ5PkOzRvQ586API1AOLi4qKtToTYyLxxKLuPcXI1AGkaEsAtqrYCoA7mDXEEAi/qWlV2vSTYC+UQ+Y0yr3MsACScvMbwLrtUgW8eCFV5+HwTRybw2wQ2KrCf1GzMKkvg2ZVwekfpFjMluoei+XweUHYfxGZQJ4fclyBtm8pPv4NSK8hxR/z3D6y74sikKr8via4/QFt+CWmo5IFgJqSA8B7AiB8V8UKkuu1qRDrPdK3Lxy1qPvld5g380O/3nagN/TwDymficGyfY50p/2nUojxwOIBVpZ8/ynUAzC3C+VbyGzBRPun59wXNjvr8OwRREkxwor4lZlb8QYLqHaRTlgktJeTVcXmDAt5h8ivW8YFv0ae4YPgPspPhtg0cN1gAAAAASUVORK5CYII=",
  KC =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAenSURBVHgB7VyNWRs9DFa+CdiAbFA2IN8EsAF0AmCC0AlIJ0i/CRghdALaCY4NKBPo83uJU0dItnw/SfqU93lESHKXs9+TZEm2j+gDfzaYeRbkIciUPqAD5ARZ8W80Qa7oA78RCDkJsmAbIO2C/nYEEm6DvEp2Xl9fNdKWf6VpbvzSSrKxWq347OyMcch8PuemaTTS7g9B2oQGROjAZXi5cRx6EuQs/eDl5YWur6/p+/fvOwdOp1MKpLXfCbxspIjJZPIvHRM2fkdVgxxgbtCgk5OTVpssCaTx8/Mzd8Scjgkb06jCcrlsSaAMSVKChlmmmQMc4An1xCBmyGv/0cT39/f39PT0lD3n7e2Nfvz4QV0QtJA+ffpUPO7bt2+tGW+wCOZ4R4cGr0epFrjrVKEpY8psNpMadkY90FuzNg14ju/DSEY/f/50nRs602oIzoFAC6A1EtDAX79+ta8YAPCKAcGDMLq219ng6aDOnhOnDh9Ejrv98PBgxVFuIMS4uroq+jx8LzCjQyBc+DptRa7hNzc3fUazLEoDBW5OgoYHcPZV4HUe18QWYPjXGnp5edll9BqUNIQlQpMfaF9gkaJoTh2NhqnsG2jL7e3tu/bgM4Elj5kFsJGiwHeQ0CavT8Jx0AiY6cXFRZvqnJ6etoL/z8/P29+HKdWQr2lZJnUazix5bXKP8iq4uCQqxFjsIQhmCyKoMhyASSEw9RCH9qWE4X+QqB3KfUtBvE5h0PtXrbMyRSkR5U1tvJLpvElYPM/QMnxYH4vxeqR7Z0uWEy0RBTMaiiQpMNfcIKIRBsmkTkuuMU0Wvglqb5lNjig0pou5dRFobS1huIHGeefkRUqWFRbQxplbQFxVmyj3FWXU22kPZUxaaFk3sizNyNh+27CxzK4kMC8LcAfWeWLQGJYsy7kekigPYUi59kqW1RjLNxxCLB9mmeNoZFnmdyxEGQRsoUX5o5BlaVVuIBhbcJM008fnWjaBz/ZClqZV+OwQfgr+J20POiy12zJHpFejkqVUH1vItGcfgmBUg0zslarDlthRydJGwEOUki3zipAjnqVdqTUIst7NgP9jEDULL7P4HiXdiKREu0VpcmJooPyMcrFWgo4IVYud91+/ft3pR0SwiO3/4vtb8oCNUrFlgnEGeR+SC4RTaCO4NjKmplhdguakVAw1T50lak4S+zRBmIynNG21SWu/HBXdJWgulIofH9+VtNrPSpqA/NGKmmtEu75GlBXrKZrTAoXG9IYIXzi3yFqkFyWHGuNuWZ0Lk5w7x2rDulc8RUVP9qANCjKEEMk4TphqWrWFFgp4LhRlsVh07lAXotA2j+/UzFi74UIxlpKsZfxGxh9RNFhJdqkGr6UbmuRKLilg6p7f00xZyzyUwWwWiXLN/2lI7b10rAQ0JtexXK0sRc4VSNHiRCtNE8SuYpx1GjUMsYZ3ajwHT+yFdVfBLNLFG1tgOj90rPgbWISCGGoMiD7M2r+8nph4LTFdo1lWTKZBm4XxxFJdEnevGSptmG9p4/XEaQv4Gy0p1pCrr8sktwT4Jy9RnnUVmmgjukaWGFQakuAkxtLKr1onSgm0t/MRnsnZPpVYTx+UeOxKI2vHdmQgqalwrqYdBR0TkXFn9KnEoh0apHWIQeCZLHBSbZAhhNZhK8zQJDdVNTZRRLYfTbVUGYGnObKgg1tbSFXUqpDWmEStH4uQeWoX0W62rMeLti2phHDQPB6dVkAtNa4t/NX6MWCIyoZ2zXSgEAEwDp56yNoJJVKbLpU5+t5pDUNUYS0TzPRtTl6wUSnVyhxA16pCyY8NNQniqfAOXlb21rNrxFrYMRRRVmlGxmqjzO5YM9F9alZx+RAajBBlyAkQqw4mB4xRyMrNqhx62l6KNYJrGcBoM9KWdnmC1H1JbtTVwpDRyLJ8F+CtVY0paJ9FlOULR11FkyvMHWLSNSXKmtjIuYpRyYLkJhEOQVhpBiiXBQxClrYqmRzqDpSqoUNKKTOwzA99UOYMqsh6pzLQIu3OlBrZZV9hrcAl5Mo7FlGZ8/xkbQiDU2o8nS8RZu186CuI7Upr4q0JCaO9K+661Y7XVYil1nmtaFZKkON5fTXNQ5JGVGabTMO12lQgTd1l0aV+DsRI3VNRgF+J2++8vy9nfYz5R9jgnMYAr6fNmvRqWjRcW+iD38AohruO34uC97XlHBwvb4CRH6LsMf52Ok5qXoCWF5Z2PowBa7uLyDgaHsrkKghbxavnqg4dd8xXIbeOQskPp7RvcKYEbTV6yD2IMF34sNJgUV0qHgtslKBzgs5F4mr3SuMaIMi7H6hTqdjAELvv4SAbWj8ypZ1O//LlS81PtFP1WNZo7b7HcgLs6MerttTRQlxOmSwPuJ1MJuPM9XvBmdWChxTp1KknBntwT2jMijaLJ6ABpcUl0JC7u7tOi1CCadHFRflxWmKx8HXQqv/oGMBiNtsLj4MmKqYoJTzSsYGVCN+DXFWDaJCd/FMaAEM/P2tKyVqvAu4pWWsPwCQ/f/68XRcFZw+TC2mLdPzw8osgT1TGWzC/bk8IOiawkjoB8dEFRlixnxTlWMHrWK0UcK143ynKsYKNUhB/PH7TBv/euNCWTo7J5P4HjGzy6NWNlJwAAAAASUVORK5CYII=",
  VC =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANlSURBVHgBzVi9ctpAEF6JxiWdx5WVNxAeF3SWu3R2myq8gSnTIbqUdpnOrjKpEspUyLVt0CPIFXShTIYB8i3eE8dxQsKAhm9GoPvb+7R7t7d7Dm2I8/PzYDqdXjmO489mMw9VntacoD5Bfey6buf5+TmiLeAU6eT7fhWTNfF6g6dKxZHgifAx7TiOE9oQzp5I2dDu9XrhJgMyyYGYB2JdWjYbwWQjmO4e2ojwH/f7/VdtjI+/U4y7Rr8A7Z4hNsG4y6JadDKI+UKsqpGK8BeCzCMVBMQ0QLBlkBwJwThvvJNHjDWFJ4SsO3onILIJmS1afGwhgo4hhE3Z14jxzrt8z2K2EPSgwa6mRSZYWyfbXSosa2xnxBgsh+WxXKnizdblTUd55M7OzkKSxS+m3BkxkyBeR1LFlrrJ6l/hH1H5T1UJAV8g6DftAcPhcHR8fPwP832UKh/lb6j/a/ada04WqyKWbLP4iwDyb2X3M6pZ2lNmDWhBLqQSgHnaWrFp6+PIWdmVAQn82AcqCVjnf0g2oLiWSG93+RBXBayDiMrFvXqBaa/MRpejC1UA0V9UIjB3etrAar7Z7krYo/BKJWIymaQnhOUcnm+ItLLIebdLGH7UM9tdOmAcPLlEFWq12imVCIn/FBKz3dUOYuuO2ScqlYqnzZ2Y7exK0k0AXxNQiQAh3ceubEZ2wh2t3KByEagXEF3xsa4cGSqEqWIZBFQCcHQ1aBGiJbbwX+3WW1XBMT+Vg5Y2Z2TrMCcH03KINJKOAb6qSXuEyPdUmfNaW795sMmB3snJyREt1kAdAeAPDgxpx5DA9jtej4QYJ08dW9/UCbP2LPG9RzsmZuYpINbO6p+SQ6eRJb7fGUFbki7zUS45ITjPyA2C/W3XII+XlNNbmtx1G+vGFc746e0GKXx5eXmgguAoG9pp8dWEqpPrDF1u5h3K2rsSIwlOSeLhe5IOPiB5enpKPXu9XvfG4zFfjV3Qm0NfyklVLozXzxgb5hHMvQIDyZYhaGNIHsy+9I7XdobcFYKVPMFwJ49wKw9sCkxQNUxShNRXvH7iPFjPTUXu3K9KVQB35gwGg0j1KXR5qANh1QUEXksE4+lmF1fEazPms7LIjdQ6DW5Mbh/IIphr1jKQZeKDIMewETwYcgydIJ+5/wFYW/TpXDoMoAAAAABJRU5ErkJggg==",
  qC =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN7SURBVHgB7ZyLkdowEIb/u6EAOkCpIHSAOjg6wB1AKrBTAUkF0MElFUAquKQCu4MkFXBabM2Axys/JGSJ45vZ8+D3/pJW8sq+J9yeqTKpbKZsXtn0wjT/lBXV8ndlf6pllJCjmbKDspOl/VW2U7ZCBFCpruHG8TZBBAKDnM9Q3uDJowUjhlSWw6/zwYhBpf+KcZ2/tBwWMeMJ/ZHor36h7Igy0hfV8j/KnkAzq86pe5N5tezDN2Vfa+d1zgb9gliK0rmhkCAvKEXvUysEbkTW8SYOyhZwj0ApRo6RhMg6XvgWztcR6FYznAqRdbjgFtejPx8ItNcKJ0JkCKP0OUj4LdrvcXABSXhQ2REp2uNUbwTMVS0kATRtQmzQkx3iEkDTJsS864kSxCmAxiTEoetJTM1ggTggZwc3i8RwcIp4EOCfamm9sbfgakGO+DAN8dkCTQwHrRAnXLNgC/UNlsEkQCT4gpX1nQXurxZouNrwWt8xxf3EgjqU9+wUILmmsEb8kKNcTyEvd+KaQucRVuDs0OzfVu8gcb9NQZOg2UdqAXgGPwqMduangSOzXtAfEmHe88AYKdCcfKVQMHsGP4S8p5pAFMz6+QT8UyGlr+vqkTA/EW4toQJdoazdorZNGI5hewaT5QhrEEWOcD1Am52HAScL22J8qNSpUIb6kAJ2IpDtMB4C9hPB6TPsSTAgf+cAagIHOEj1uxCBoCrle96BhBdwwMSwTdZ+f0LprGjYV0fl7/CHKTDvlf3Ade+WVNYI11aaIGdDyDtItET7BlI4igmk7Bdmm8+Hrc/M+iMG1MYhMeHIrPcZE7hrHTEAV4Exah4i4CHCmYcIeIhw5iECHiKcIRG4d/5kz/U3fXew47UkeEzb2BkaGh7XByX0O0fYw+ZVw/6tk7NrtGeQZLVf3vPit8SUR9hV97xEe8bpLMIU9okJEkfALyns7vlKBGIDuxONMV1napqDRCD2A08yZp6Rnlyt02v1k24RjwAaJ4nWOgm6vS67RDgIWKTcTd87LFA6qpMl+ms1Slv9QpgIlL0CfR6gu/cC5aTREs1jhQQfCK52L/BBEOCbg+8s+Whw32ud30+YIEwk3FRTKmXTt1R7BEoG+wFQVxMIEAF/AqQIFAk/ArwhYExv0rmyAyLoEWwf5jijZ4zGB70hX8j6gCL6C9xQoOX/MLwDomnC/jzse2YAAAAASUVORK5CYII=",
  YC = "/assets/about_img-BAJyTXw9.png",
  XC = "/assets/contact_img-CyOum2vk.png",
  GC = "/assets/razorpay_logo-DrY6yMWi.png",
  JC =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAmCAYAAABedGw2AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAj1SURBVHgB7VppbFTXFf7ubLbxBgZTCq6jxpVoIUqgTYQIqmOlSUppg0KCg/FCjG3coAa1UFVVpTQuUZUfVaWmbUoTjJdgsJO6FLrJKT8il1TQJKURjUgIi2lrXCu4DsZ4neWdfHdmPJp588a7wzjxJz29d7dz7z333HPOPfcBc5jDCERE6QdxjLge3Agq8yXd68AKpZDL5F0c9QpfP+6uP6Z6EKdwIM6xo1j2eA38lEyNEAK7EzbEMWaEsaWlkugysNbtQWd9kzqHKcAQpJiZOhswLYzNzxdXigubOPsvKcFa5cFdPiDBZsNOFk+JsbMV08LY5GTMU248S8laomVLgvlMC6Yf/2UXJ64Dg4hjzKiONYypM1YMnOViPcOd8JqRiNN1daoLswBjMrayUpzz3Ej+wIDd54OnowMDra3KG16np+ffyJiXza9IeyKTlNi8PHG0toLaREltkzrCrCOYJHbvlqTeXiRJFzy1f1A3MAmUbZRU73y4EgfhfeE36FVKjTkvS6NAZs6TftxDa7yZevIOZi0iJScrD/C7m60uUxpPJdjx0vMN6up3SmX+DS/eJRuXmEidYN75kQQZ/UbtYVVdVihFpJUXXnFIYW+iYClpf5PJ5eyvzzOAba5ErGHeRvMYez3Y3dys+sqK5CektThUYMDtceIHDgNZ/N6BgIuWwUcz9T27gcb9jWgeizklJZLM8TzkEzxiE3zBUEglrSG2ahfuHub96kCTej9W+yiJ3VUkWYP9aGCvebYwAQxbgc+RWWtsCgVuHzYwvX7YzWJr5yc3OLERJPCpJq11zK8Ir8hJ6AWr5OeCYH8elQon5XY1kxVmwmnA9/Wb43iYE80JFXAc9EjSmfcgiSSZmn3esGFjRTG2U3gK9u9X12GBihL5LFVQi8EF1vPWRxH//ANLkUPbkce8neXFUlJzSL1iRSOCHZUlkk2RfEVM0jQKXKEvmaJLpPyMWoBpAJn6KF9JMXuiMPhu4Eh5uWSYC8sLZDUl/Q1+LsfoWMQ5/7m0UB62KoxgLH3GJ/haiU8CbPiKGsKPwrN2FsoC2FEvmmnjpGJXeKGyWD4dTT6I3fmSRNF/LAaBDnZ2hu82PsOYPdA24X2BtRHV8y2i6htJDyt8l6/bLaq+xspPc/u/xN1gdvMW+QzsMTcIMXYoBYuomBdGkRQ8V3NYZdHorOI7x+fEfG6mrzH/CN/9ugpPWNZqwMC3EtxIHXmSM2hMRoPyG5gqSsE3aDQKHD3oxeRwjUzYfKkD6RzzEo5jHfMuRneHtCTlP8Rg2zZZqCx0ORn5FGnk1jSpqtpDais5VsBsdwQdhcd37ZKE8LyQ8SJzdIE9irBN61G/+vaven09NxD1sH605cQoYKvhfbTcGB/cNg/urH5ZnQ/PLC+alMd2nEwIuWh02U5tL5YttORvwqT+SH0TT45P2X1Yy+/FJgkZGL6Gn4dnfCYHf7pyEW/xc00YjZShD3AvP1tG8kKdGE5oC9lvGqBmZ2VZEY5XFEmxjgGElzU0qED9NEwZHNywmalToBW1g+oOqX9Sslqj6gqWcfjp9IBWKXM7wZnDLSpi1+zdq2iKcMpMh073HeHpkMRmZ6P7ygWcJOn7zY3Y230kdp/djV/Qxfib8uFJ+nD/gmky8R4p4RiP8nVveB7HnKISkU51cVvU3lC4kzvGyiVLtCCeFZ4MSaxeCZuDXoFCbKlRdIfoH1I9vFlRKNXb8yVTZ3s88RV9kliunxeXLXJtFME0tviURZkTgf1oflzmipSqiH0boW+qD6rzXrvf6f+d6GHEhov6s8LmwkF9ZEScIWag1qF3rEV9n76UiLYvE4JEdhs1hhdfVJeyOrCFK/AgnzoyeLQo/Vev/x9bUhFfkBjxW2UgO6quQHwKfWzRY1WGgAcw5sOKQ+FtLYMwewNBFr/lL31I9jhSsJGdPM30LeaxUjdt5lr/EbMAVGEPmD1aCk//oIHeJMEl82qw7Cpdv9XjIA3vDUR4PyHGVlWJ7col3JqVgzatb0fyg/dKB3nv9HtfAkN4tKKRo0X2gJvxWIuNZB//CWZ6YaFjywpkKV/3W9Tu8HpxTbnwtkXZYsOHTLOhHg9CqqCzk5ZO8Gr7RRyi5V8fdUxbgAEVfeqAssGr5sGnLE43jAhtyA8aOI0qk7s2U6Ck3bajUFaxb/9y001cohx4GRLtGFKCWhkl8/HgcxLRak9Ryvc9tlUsj/mkn1JZJA+UbZVHzGUO04AS2PlW/ZBTXXQ1zjGv09Ax636sIOdyED2y/7S14WrOsmgfmMhNc+Et0jmrTzntHn9w49uYeSynnv17qgtn2Xc/teBKynCGRT1hGHGf/uDB5xzrnuCnOUS5zmHDX8sL5XXO4TKFxcODRgbfS5nO8Wn1qPAcTDHj2IFugZa0TAl621bnH79yt+GoDnznFMppVrzVoppWHcuC7S/gIwL7S+C4v+hPqJiVjlY34u0DTYGkzY7viQ93WwRhFpLGBgmSEjX2fwNTu0JWOJbczS0G/wntx/DvrNkBMqndbceT4QFv7W4ygP84YO2WTQQhxiZf8/ty4z2Y65rHeAwu+2WL8ke7tILnEJ+YAI2ZhI5qxWYObwG4nTfxSP6uuUhfBTEY/nXW+R/GBz3fqJuEEGN/1qwGGYFaRcboCM9xBK4yzCSuK314MJBb06g2US9FKPsDjerXHNQ93CqvIlJ7aHZfUAEXTqONdU6GPyx/HRagjm8319XPkCv2AYZzaOG2Xs8BnDQVdbKfH3b1YSXHejpW+7oG9Rde/axg3W3clf9A9E7Ui/YO5/MsjdvttY3qmahxxyKu3S9eHGa63UjXYS+nDb2Zt+BquCs2GgoZNHY4kGm3w+vsQ/f+ZutrkKmiolguRlzNwL+iv2WYM19/+4PX9GlkEH3PH0XXSJRuIqD1T0p3YaHNi4ShBAwxYNMdjPLFxKz7w8QMK8aSs83cUY/iJiKu/3+aLOLBgn4sGTtDf+BMCB9Lxorp6uRmIO5/4xwLErDQ79FYnGFc9R1+n/AOMqZxkzHrGetU+LK7F4M1k/x9aA5zmIPGh+sBUp3Dt4WYAAAAAElFTkSuQmCC",
  B0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFkSURBVHgBpdW/ToNAHAfwO64QR8Zu4ubIn8VRRyd1dJIESBjxCazvAQm+Qd9ANjeY3Tp2NCwMBPD3S0BJS487+k2a3pVfP/lxHEAJJAgCs+s6PY7jjJyRKIr0siwfNU3LGKJt2xbwu+s4Ds3zPCMLEoahUVXVF6XUBc9UoNPL4SCM33zf3xDJIFrX9ScMjd7RGXT4bdv2FczNvu5WpvMJdAcd3zOcFEWxXYKfQO/SNN2xoUgW56E4Z+NiUXwOPYJFcBEUQ8mJeJ6XwtfLXyGl76vVKhVBufAUDvmBjz6HYhgPnliWCxEUo5CZqKq66Tv9/5OibHnobMejC7U+OHQzt8+ZAGrgHE8fLmAGw+u+hLvPFVEU1zRJkieYfgx1vGcLE0WHNRW9iZgMOkQEZ7KoKM6WoCI4XYqOc3iHgvGqNE2jn4NiYLe4ZLRbYFs+4Btkb1mWDpM9oM+y6BBcFnRguMYH1i/jdovSfDk2aAAAAABJRU5ErkJggg==",
  at = {
    dropdown_icon: QC,
    exchange_icon: WC,
    quality_icon: KC,
    bin_icon: $C,
    support_img: qC,
    about_img: YC,
    contact_img: XC,
    razorpay_logo: GC,
    stripe_logo: JC,
    cross_icon: B0,
  };
function ZC({ showMenu: e, setShowMenu: t }) {
  return u.jsxs("div", {
    className: `fixed bg-[White] sm:hidden w-[100%] top-0 ${e} transition-all delay-0 z-40 h-[100vh]`,
    children: [
      u.jsxs("button", {
        onClick: () => t(!1),
        className: "absolute text-white right-5 top-5 ",
        children: [
          " ",
          u.jsx("img", { src: at.cross_icon, className: "w-4 h-4", alt: "" }),
          " ",
        ],
      }),
      u.jsxs("div", {
        className:
          "flex  p-5 py-10 text-xl  flex-col gap-5 outfit [&>*]:opacity-80",
        children: [
          " ",
          u.jsx(Ir, {
            onClick: () => t(!1),
            to: "/",
            className: "",
            children: "HOME",
          }),
          " ",
          u.jsx(Ir, {
            onClick: () => t(!1),
            to: "Collection",
            className: "",
            children: " COLLECTION",
          }),
          u.jsx(Ir, {
            onClick: () => t(!1),
            to: "/About",
            className: "",
            children: "ABOUT",
          }),
          u.jsx(Ir, {
            onClick: () => t(!1),
            to: "Contact",
            className: "",
            children: "CONTACT",
          }),
        ],
      }),
    ],
  });
}
var F0 = { exports: {} },
  $0 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var po = E;
function eE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tE = typeof Object.is == "function" ? Object.is : eE,
  rE = po.useSyncExternalStore,
  nE = po.useRef,
  iE = po.useEffect,
  sE = po.useMemo,
  oE = po.useDebugValue;
$0.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
  var s = nE(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = sE(
    function () {
      function l(v) {
        if (!c) {
          if (((c = !0), (m = v), (v = n(v)), i !== void 0 && o.hasValue)) {
            var w = o.value;
            if (i(w, v)) return (g = w);
          }
          return (g = v);
        }
        if (((w = g), tE(m, v))) return w;
        var x = n(v);
        return i !== void 0 && i(w, x) ? ((m = v), w) : ((m = v), (g = x));
      }
      var c = !1,
        m,
        g,
        d = r === void 0 ? null : r;
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
    [t, r, n, i]
  );
  var a = rE(e, s[0], s[1]);
  return (
    iE(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    oE(a),
    a
  );
};
F0.exports = $0;
var aE = F0.exports;
function Q0(e) {
  e();
}
function lE() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      Q0(() => {
        let r = e;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; ) r.push(n), (n = n.next);
      return r;
    },
    subscribe(r) {
      let n = !0;
      const i = (t = { callback: r, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !n ||
            e === null ||
            ((n = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var Ym = { notify() {}, get: () => [] };
function uE(e, t) {
  let r,
    n = Ym,
    i = 0,
    s = !1;
  function o(x) {
    m();
    const b = n.subscribe(x);
    let f = !1;
    return () => {
      f || ((f = !0), b(), g());
    };
  }
  function a() {
    n.notify();
  }
  function l() {
    w.onStateChange && w.onStateChange();
  }
  function c() {
    return s;
  }
  function m() {
    i++, r || ((r = e.subscribe(l)), (n = lE()));
  }
  function g() {
    i--, r && i === 0 && (r(), (r = void 0), n.clear(), (n = Ym));
  }
  function d() {
    s || ((s = !0), m());
  }
  function v() {
    s && ((s = !1), g());
  }
  const w = {
    addNestedSub: o,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: v,
    getListeners: () => n,
  };
  return w;
}
var cE = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  fE = cE(),
  dE = () => typeof navigator < "u" && navigator.product === "ReactNative",
  pE = dE(),
  mE = () => (fE || pE ? E.useLayoutEffect : E.useEffect),
  hE = mE();
function Xm(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function vs(e, t) {
  if (Xm(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Xm(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
var Wu = Symbol.for("react-redux-context"),
  Hu = typeof globalThis < "u" ? globalThis : {};
function gE() {
  if (!E.createContext) return {};
  const e = Hu[Wu] ?? (Hu[Wu] = new Map());
  let t = e.get(E.createContext);
  return t || ((t = E.createContext(null)), e.set(E.createContext, t)), t;
}
var qr = gE();
function yE(e) {
  const { children: t, context: r, serverState: n, store: i } = e,
    s = E.useMemo(() => {
      const l = uE(i);
      return {
        store: i,
        subscription: l,
        getServerState: n ? () => n : void 0,
      };
    }, [i, n]),
    o = E.useMemo(() => i.getState(), [i]);
  hE(() => {
    const { subscription: l } = s;
    return (
      (l.onStateChange = l.notifyNestedSubs),
      l.trySubscribe(),
      o !== i.getState() && l.notifyNestedSubs(),
      () => {
        l.tryUnsubscribe(), (l.onStateChange = void 0);
      }
    );
  }, [s, o]);
  const a = r || qr;
  return E.createElement(a.Provider, { value: s }, t);
}
var vE = yE;
function Wd(e = qr) {
  return function () {
    return E.useContext(e);
  };
}
var W0 = Wd();
function H0(e = qr) {
  const t = e === qr ? W0 : Wd(e),
    r = () => {
      const { store: n } = t();
      return n;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var K0 = H0();
function xE(e = qr) {
  const t = e === qr ? K0 : H0(e),
    r = () => t().dispatch;
  return Object.assign(r, { withTypes: () => r }), r;
}
var Hl = xE(),
  wE = (e, t) => e === t;
function SE(e = qr) {
  const t = e === qr ? W0 : Wd(e),
    r = (n, i = {}) => {
      const { equalityFn: s = wE } =
          typeof i == "function" ? { equalityFn: i } : i,
        o = t(),
        { store: a, subscription: l, getServerState: c } = o;
      E.useRef(!0);
      const m = E.useCallback(
          {
            [n.name](d) {
              return n(d);
            },
          }[n.name],
          [n]
        ),
        g = aE.useSyncExternalStoreWithSelector(
          l.addNestedSub,
          a.getState,
          c || a.getState,
          m,
          s
        );
      return E.useDebugValue(g), g;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var Vs = SE(),
  bE = Q0;
function Me(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var AE = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Gm = AE,
  Ku = () => Math.random().toString(36).substring(7).split("").join("."),
  CE = {
    INIT: `@@redux/INIT${Ku()}`,
    REPLACE: `@@redux/REPLACE${Ku()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ku()}`,
  },
  el = CE;
function Yr(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function V0(e, t, r) {
  if (typeof e != "function") throw new Error(Me(2));
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Me(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(Me(1));
    return r(V0)(e, t);
  }
  let n = e,
    i = t,
    s = new Map(),
    o = s,
    a = 0,
    l = !1;
  function c() {
    o === s &&
      ((o = new Map()),
      s.forEach((b, f) => {
        o.set(f, b);
      }));
  }
  function m() {
    if (l) throw new Error(Me(3));
    return i;
  }
  function g(b) {
    if (typeof b != "function") throw new Error(Me(4));
    if (l) throw new Error(Me(5));
    let f = !0;
    c();
    const p = a++;
    return (
      o.set(p, b),
      function () {
        if (f) {
          if (l) throw new Error(Me(6));
          (f = !1), c(), o.delete(p), (s = null);
        }
      }
    );
  }
  function d(b) {
    if (!Yr(b)) throw new Error(Me(7));
    if (typeof b.type > "u") throw new Error(Me(8));
    if (typeof b.type != "string") throw new Error(Me(17));
    if (l) throw new Error(Me(9));
    try {
      (l = !0), (i = n(i, b));
    } finally {
      l = !1;
    }
    return (
      (s = o).forEach((p) => {
        p();
      }),
      b
    );
  }
  function v(b) {
    if (typeof b != "function") throw new Error(Me(10));
    (n = b), d({ type: el.REPLACE });
  }
  function w() {
    const b = g;
    return {
      subscribe(f) {
        if (typeof f != "object" || f === null) throw new Error(Me(11));
        function p() {
          const y = f;
          y.next && y.next(m());
        }
        return p(), { unsubscribe: b(p) };
      },
      [Gm]() {
        return this;
      },
    };
  }
  return (
    d({ type: el.INIT }),
    { dispatch: d, subscribe: g, getState: m, replaceReducer: v, [Gm]: w }
  );
}
function EE(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: el.INIT }) > "u") throw new Error(Me(12));
    if (typeof r(void 0, { type: el.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Me(13));
  });
}
function q0(e) {
  const t = Object.keys(e),
    r = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    typeof e[o] == "function" && (r[o] = e[o]);
  }
  const n = Object.keys(r);
  let i;
  try {
    EE(r);
  } catch (s) {
    i = s;
  }
  return function (o = {}, a) {
    if (i) throw i;
    let l = !1;
    const c = {};
    for (let m = 0; m < n.length; m++) {
      const g = n[m],
        d = r[g],
        v = o[g],
        w = d(v, a);
      if (typeof w > "u") throw (a && a.type, new Error(Me(14)));
      (c[g] = w), (l = l || w !== v);
    }
    return (l = l || n.length !== Object.keys(o).length), l ? c : o;
  };
}
function tl(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, r) =>
          (...n) =>
            t(r(...n))
      );
}
function kE(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let s = () => {
      throw new Error(Me(15));
    };
    const o = { getState: i.getState, dispatch: (l, ...c) => s(l, ...c) },
      a = e.map((l) => l(o));
    return (s = tl(...a)(i.dispatch)), { ...i, dispatch: s };
  };
}
function Y0(e) {
  return Yr(e) && "type" in e && typeof e.type == "string";
}
var Hd = Symbol.for("immer-nothing"),
  xs = Symbol.for("immer-draftable"),
  ut = Symbol.for("immer-state");
function ze(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var kn = Object.getPrototypeOf;
function sr(e) {
  return !!e && !!e[ut];
}
function Wt(e) {
  var t;
  return e
    ? X0(e) ||
        Array.isArray(e) ||
        !!e[xs] ||
        !!((t = e.constructor) != null && t[xs]) ||
        mo(e) ||
        ho(e)
    : !1;
}
var jE = Object.prototype.constructor.toString();
function X0(e) {
  if (!e || typeof e != "object") return !1;
  const t = kn(e);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object
    ? !0
    : typeof r == "function" && Function.toString.call(r) === jE;
}
function NE(e) {
  return sr(e) || ze(15, e), e[ut].base_;
}
function qs(e, t) {
  jn(e) === 0
    ? Reflect.ownKeys(e).forEach((r) => {
        t(r, e[r], e);
      })
    : e.forEach((r, n) => t(n, r, e));
}
function jn(e) {
  const t = e[ut];
  return t ? t.type_ : Array.isArray(e) ? 1 : mo(e) ? 2 : ho(e) ? 3 : 0;
}
function Ys(e, t) {
  return jn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Vu(e, t) {
  return jn(e) === 2 ? e.get(t) : e[t];
}
function G0(e, t, r) {
  const n = jn(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function TE(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function mo(e) {
  return e instanceof Map;
}
function ho(e) {
  return e instanceof Set;
}
function ln(e) {
  return e.copy_ || e.base_;
}
function ff(e, t) {
  if (mo(e)) return new Map(e);
  if (ho(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const r = X0(e);
  if (t === !0 || (t === "class_only" && !r)) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[ut];
    let i = Reflect.ownKeys(n);
    for (let s = 0; s < i.length; s++) {
      const o = i[s],
        a = n[o];
      a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (n[o] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[o],
          });
    }
    return Object.create(kn(e), n);
  } else {
    const n = kn(e);
    if (n !== null && r) return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function Kd(e, t = !1) {
  return (
    Kl(e) ||
      sr(e) ||
      !Wt(e) ||
      (jn(e) > 1 && (e.set = e.add = e.clear = e.delete = _E),
      Object.freeze(e),
      t && Object.entries(e).forEach(([r, n]) => Kd(n, !0))),
    e
  );
}
function _E() {
  ze(2);
}
function Kl(e) {
  return Object.isFrozen(e);
}
var df = {};
function Nn(e) {
  const t = df[e];
  return t || ze(0, e), t;
}
function PE(e, t) {
  df[e] || (df[e] = t);
}
var Xs;
function J0() {
  return Xs;
}
function OE(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Jm(e, t) {
  t &&
    (Nn("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function pf(e) {
  mf(e), e.drafts_.forEach(RE), (e.drafts_ = null);
}
function mf(e) {
  e === Xs && (Xs = e.parent_);
}
function Zm(e) {
  return (Xs = OE(Xs, e));
}
function RE(e) {
  const t = e[ut];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function eh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[ut].modified_ && (pf(t), ze(4)),
        Wt(e) && ((e = rl(t, e)), t.parent_ || nl(t, e)),
        t.patches_ &&
          Nn("Patches").generateReplacementPatches_(
            r[ut].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = rl(t, r, [])),
    pf(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Hd ? e : void 0
  );
}
function rl(e, t, r) {
  if (Kl(t)) return t;
  const n = t[ut];
  if (!n) return qs(t, (i, s) => th(e, n, t, i, s, r)), t;
  if (n.scope_ !== e) return t;
  if (!n.modified_) return nl(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let s = i,
      o = !1;
    n.type_ === 3 && ((s = new Set(i)), i.clear(), (o = !0)),
      qs(s, (a, l) => th(e, n, i, a, l, r, o)),
      nl(e, i, !1),
      r &&
        e.patches_ &&
        Nn("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_);
  }
  return n.copy_;
}
function th(e, t, r, n, i, s, o) {
  if (sr(i)) {
    const a =
        s && t && t.type_ !== 3 && !Ys(t.assigned_, n) ? s.concat(n) : void 0,
      l = rl(e, i, a);
    if ((G0(r, n, l), sr(l))) e.canAutoFreeze_ = !1;
    else return;
  } else o && r.add(i);
  if (Wt(i) && !Kl(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    rl(e, i),
      (!t || !t.scope_.parent_) &&
        typeof n != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(r, n) &&
        nl(e, i);
  }
}
function nl(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Kd(t, r);
}
function IE(e, t) {
  const r = Array.isArray(e),
    n = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : J0(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = n,
    s = Vd;
  r && ((i = [n]), (s = Gs));
  const { revoke: o, proxy: a } = Proxy.revocable(i, s);
  return (n.draft_ = a), (n.revoke_ = o), a;
}
var Vd = {
    get(e, t) {
      if (t === ut) return e;
      const r = ln(e);
      if (!Ys(r, t)) return ME(e, r, t);
      const n = r[t];
      return e.finalized_ || !Wt(n)
        ? n
        : n === qu(e.base_, t)
        ? (Yu(e), (e.copy_[t] = gf(n, e)))
        : n;
    },
    has(e, t) {
      return t in ln(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(ln(e));
    },
    set(e, t, r) {
      const n = Z0(ln(e), t);
      if (n != null && n.set) return n.set.call(e.draft_, r), !0;
      if (!e.modified_) {
        const i = qu(ln(e), t),
          s = i == null ? void 0 : i[ut];
        if (s && s.base_ === r)
          return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
        if (TE(r, i) && (r !== void 0 || Ys(e.base_, t))) return !0;
        Yu(e), hf(e);
      }
      return (
        (e.copy_[t] === r && (r !== void 0 || t in e.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = r), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        qu(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Yu(e), hf(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const r = ln(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: n.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty() {
      ze(11);
    },
    getPrototypeOf(e) {
      return kn(e.base_);
    },
    setPrototypeOf() {
      ze(12);
    },
  },
  Gs = {};
qs(Vd, (e, t) => {
  Gs[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Gs.deleteProperty = function (e, t) {
  return Gs.set.call(this, e, t, void 0);
};
Gs.set = function (e, t, r) {
  return Vd.set.call(this, e[0], t, r, e[0]);
};
function qu(e, t) {
  const r = e[ut];
  return (r ? ln(r) : e)[t];
}
function ME(e, t, r) {
  var i;
  const n = Z0(t, r);
  return n
    ? "value" in n
      ? n.value
      : (i = n.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0;
}
function Z0(e, t) {
  if (!(t in e)) return;
  let r = kn(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = kn(r);
  }
}
function hf(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && hf(e.parent_));
}
function Yu(e) {
  e.copy_ || (e.copy_ = ff(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var LE = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, n) => {
        if (typeof t == "function" && typeof r != "function") {
          const s = r;
          r = t;
          const o = this;
          return function (l = s, ...c) {
            return o.produce(l, (m) => r.call(this, m, ...c));
          };
        }
        typeof r != "function" && ze(6),
          n !== void 0 && typeof n != "function" && ze(7);
        let i;
        if (Wt(t)) {
          const s = Zm(this),
            o = gf(t, void 0);
          let a = !0;
          try {
            (i = r(o)), (a = !1);
          } finally {
            a ? pf(s) : mf(s);
          }
          return Jm(s, n), eh(i, s);
        } else if (!t || typeof t != "object") {
          if (
            ((i = r(t)),
            i === void 0 && (i = t),
            i === Hd && (i = void 0),
            this.autoFreeze_ && Kd(i, !0),
            n)
          ) {
            const s = [],
              o = [];
            Nn("Patches").generateReplacementPatches_(t, i, s, o), n(s, o);
          }
          return i;
        } else ze(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == "function")
          return (o, ...a) => this.produceWithPatches(o, (l) => t(l, ...a));
        let n, i;
        return [
          this.produce(t, r, (o, a) => {
            (n = o), (i = a);
          }),
          n,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Wt(e) || ze(8), sr(e) && (e = DE(e));
    const t = Zm(this),
      r = gf(e, void 0);
    return (r[ut].isManual_ = !0), mf(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[ut];
    (!r || !r.isManual_) && ze(9);
    const { scope_: n } = r;
    return Jm(n, t), eh(void 0, n);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Nn("Patches").applyPatches_;
    return sr(e) ? n(e, t) : this.produce(e, (i) => n(i, t));
  }
};
function gf(e, t) {
  const r = mo(e)
    ? Nn("MapSet").proxyMap_(e, t)
    : ho(e)
    ? Nn("MapSet").proxySet_(e, t)
    : IE(e, t);
  return (t ? t.scope_ : J0()).drafts_.push(r), r;
}
function DE(e) {
  return sr(e) || ze(10, e), ev(e);
}
function ev(e) {
  if (!Wt(e) || Kl(e)) return e;
  const t = e[ut];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (r = ff(e, t.scope_.immer_.useStrictShallowCopy_));
  } else r = ff(e, !0);
  return (
    qs(r, (n, i) => {
      G0(r, n, ev(i));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
function zE() {
  const t = "replace",
    r = "add",
    n = "remove";
  function i(d, v, w, x) {
    switch (d.type_) {
      case 0:
      case 2:
        return o(d, v, w, x);
      case 1:
        return s(d, v, w, x);
      case 3:
        return a(d, v, w, x);
    }
  }
  function s(d, v, w, x) {
    let { base_: b, assigned_: f } = d,
      p = d.copy_;
    p.length < b.length && (([b, p] = [p, b]), ([w, x] = [x, w]));
    for (let h = 0; h < b.length; h++)
      if (f[h] && p[h] !== b[h]) {
        const y = v.concat([h]);
        w.push({ op: t, path: y, value: g(p[h]) }),
          x.push({ op: t, path: y, value: g(b[h]) });
      }
    for (let h = b.length; h < p.length; h++) {
      const y = v.concat([h]);
      w.push({ op: r, path: y, value: g(p[h]) });
    }
    for (let h = p.length - 1; b.length <= h; --h) {
      const y = v.concat([h]);
      x.push({ op: n, path: y });
    }
  }
  function o(d, v, w, x) {
    const { base_: b, copy_: f } = d;
    qs(d.assigned_, (p, h) => {
      const y = Vu(b, p),
        S = Vu(f, p),
        C = h ? (Ys(b, p) ? t : r) : n;
      if (y === S && C === t) return;
      const A = v.concat(p);
      w.push(C === n ? { op: C, path: A } : { op: C, path: A, value: S }),
        x.push(
          C === r
            ? { op: n, path: A }
            : C === n
            ? { op: r, path: A, value: g(y) }
            : { op: t, path: A, value: g(y) }
        );
    });
  }
  function a(d, v, w, x) {
    let { base_: b, copy_: f } = d,
      p = 0;
    b.forEach((h) => {
      if (!f.has(h)) {
        const y = v.concat([p]);
        w.push({ op: n, path: y, value: h }),
          x.unshift({ op: r, path: y, value: h });
      }
      p++;
    }),
      (p = 0),
      f.forEach((h) => {
        if (!b.has(h)) {
          const y = v.concat([p]);
          w.push({ op: r, path: y, value: h }),
            x.unshift({ op: n, path: y, value: h });
        }
        p++;
      });
  }
  function l(d, v, w, x) {
    w.push({ op: t, path: [], value: v === Hd ? void 0 : v }),
      x.push({ op: t, path: [], value: d });
  }
  function c(d, v) {
    return (
      v.forEach((w) => {
        const { path: x, op: b } = w;
        let f = d;
        for (let S = 0; S < x.length - 1; S++) {
          const C = jn(f);
          let A = x[S];
          typeof A != "string" && typeof A != "number" && (A = "" + A),
            (C === 0 || C === 1) &&
              (A === "__proto__" || A === "constructor") &&
              ze(19),
            typeof f == "function" && A === "prototype" && ze(19),
            (f = Vu(f, A)),
            typeof f != "object" && ze(18, x.join("/"));
        }
        const p = jn(f),
          h = m(w.value),
          y = x[x.length - 1];
        switch (b) {
          case t:
            switch (p) {
              case 2:
                return f.set(y, h);
              case 3:
                ze(16);
              default:
                return (f[y] = h);
            }
          case r:
            switch (p) {
              case 1:
                return y === "-" ? f.push(h) : f.splice(y, 0, h);
              case 2:
                return f.set(y, h);
              case 3:
                return f.add(h);
              default:
                return (f[y] = h);
            }
          case n:
            switch (p) {
              case 1:
                return f.splice(y, 1);
              case 2:
                return f.delete(y);
              case 3:
                return f.delete(w.value);
              default:
                return delete f[y];
            }
          default:
            ze(17, b);
        }
      }),
      d
    );
  }
  function m(d) {
    if (!Wt(d)) return d;
    if (Array.isArray(d)) return d.map(m);
    if (mo(d))
      return new Map(Array.from(d.entries()).map(([w, x]) => [w, m(x)]));
    if (ho(d)) return new Set(Array.from(d).map(m));
    const v = Object.create(kn(d));
    for (const w in d) v[w] = m(d[w]);
    return Ys(d, xs) && (v[xs] = d[xs]), v;
  }
  function g(d) {
    return sr(d) ? m(d) : d;
  }
  PE("Patches", {
    applyPatches_: c,
    generatePatches_: i,
    generateReplacementPatches_: l,
  });
}
var vt = new LE(),
  go = vt.produce,
  tv = vt.produceWithPatches.bind(vt);
vt.setAutoFreeze.bind(vt);
vt.setUseStrictShallowCopy.bind(vt);
var rh = vt.applyPatches.bind(vt);
vt.createDraft.bind(vt);
vt.finishDraft.bind(vt);
function UE(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function BE(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function FE(
  e,
  t = "expected all items to be functions, instead received the following types: "
) {
  if (!e.every((r) => typeof r == "function")) {
    const r = e
      .map((n) =>
        typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
      )
      .join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var nh = (e) => (Array.isArray(e) ? e : [e]);
function $E(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    FE(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: "
    ),
    t
  );
}
function QE(e, t) {
  const r = [],
    { length: n } = e;
  for (let i = 0; i < n; i++) r.push(e[i].apply(null, t));
  return r;
}
var WE = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  HE = typeof WeakRef < "u" ? WeakRef : WE,
  KE = 0,
  ih = 1;
function Ho() {
  return { s: KE, v: void 0, o: null, p: null };
}
function il(e, t = {}) {
  let r = Ho();
  const { resultEqualityCheck: n } = t;
  let i,
    s = 0;
  function o() {
    var g;
    let a = r;
    const { length: l } = arguments;
    for (let d = 0, v = l; d < v; d++) {
      const w = arguments[d];
      if (typeof w == "function" || (typeof w == "object" && w !== null)) {
        let x = a.o;
        x === null && (a.o = x = new WeakMap());
        const b = x.get(w);
        b === void 0 ? ((a = Ho()), x.set(w, a)) : (a = b);
      } else {
        let x = a.p;
        x === null && (a.p = x = new Map());
        const b = x.get(w);
        b === void 0 ? ((a = Ho()), x.set(w, a)) : (a = b);
      }
    }
    const c = a;
    let m;
    if (a.s === ih) m = a.v;
    else if (((m = e.apply(null, arguments)), s++, n)) {
      const d =
        ((g = i == null ? void 0 : i.deref) == null ? void 0 : g.call(i)) ?? i;
      d != null && n(d, m) && ((m = d), s !== 0 && s--),
        (i =
          (typeof m == "object" && m !== null) || typeof m == "function"
            ? new HE(m)
            : m);
    }
    return (c.s = ih), (c.v = m), m;
  }
  return (
    (o.clearCache = () => {
      (r = Ho()), o.resetResultsCount();
    }),
    (o.resultsCount = () => s),
    (o.resetResultsCount = () => {
      s = 0;
    }),
    o
  );
}
function VE(e, ...t) {
  const r = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    n = (...i) => {
      let s = 0,
        o = 0,
        a,
        l = {},
        c = i.pop();
      typeof c == "object" && ((l = c), (c = i.pop())),
        UE(
          c,
          `createSelector expects an output function after the inputs, but received: [${typeof c}]`
        );
      const m = { ...r, ...l },
        {
          memoize: g,
          memoizeOptions: d = [],
          argsMemoize: v = il,
          argsMemoizeOptions: w = [],
        } = m,
        x = nh(d),
        b = nh(w),
        f = $E(i),
        p = g(function () {
          return s++, c.apply(null, arguments);
        }, ...x),
        h = v(function () {
          o++;
          const S = QE(f, arguments);
          return (a = p.apply(null, S)), a;
        }, ...b);
      return Object.assign(h, {
        resultFunc: c,
        memoizedResultFunc: p,
        dependencies: f,
        dependencyRecomputations: () => o,
        resetDependencyRecomputations: () => {
          o = 0;
        },
        lastResult: () => a,
        recomputations: () => s,
        resetRecomputations: () => {
          s = 0;
        },
        memoize: g,
        argsMemoize: v,
      });
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var qd = VE(il),
  qE = Object.assign(
    (e, t = qd) => {
      BE(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const r = Object.keys(e),
        n = r.map((s) => e[s]);
      return t(n, (...s) => s.reduce((o, a, l) => ((o[r[l]] = a), o), {}));
    },
    { withTypes: () => qE }
  );
function rv(e) {
  return ({ dispatch: r, getState: n }) =>
    (i) =>
    (s) =>
      typeof s == "function" ? s(r, n, e) : i(s);
}
var YE = rv(),
  XE = rv,
  GE =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? tl
              : tl.apply(null, arguments);
        },
  JE = (e) => e && typeof e.match == "function";
function Bt(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i) throw new Error(Ft(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = () => `${e}`),
    (r.type = e),
    (r.match = (n) => Y0(n) && n.type === e),
    r
  );
}
var nv = class ss extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ss.prototype);
  }
  static get [Symbol.species]() {
    return ss;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new ss(...t[0].concat(this))
      : new ss(...t.concat(this));
  }
};
function sh(e) {
  return Wt(e) ? go(e, () => {}) : e;
}
function Ko(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function ZE(e) {
  return typeof e == "boolean";
}
var ek = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: n = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: s = !0,
      } = t ?? {};
      let o = new nv();
      return r && (ZE(r) ? o.push(YE) : o.push(XE(r.extraArgument))), o;
    },
  Vl = "RTK_autoBatch",
  Gi = () => (e) => ({ payload: e, meta: { [Vl]: !0 } }),
  oh = (e) => (t) => {
    setTimeout(t, e);
  },
  tk =
    (e = { type: "raf" }) =>
    (t) =>
    (...r) => {
      const n = t(...r);
      let i = !0,
        s = !1,
        o = !1;
      const a = new Set(),
        l =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? typeof window < "u" && window.requestAnimationFrame
              ? window.requestAnimationFrame
              : oh(10)
            : e.type === "callback"
            ? e.queueNotification
            : oh(e.timeout),
        c = () => {
          (o = !1), s && ((s = !1), a.forEach((m) => m()));
        };
      return Object.assign({}, n, {
        subscribe(m) {
          const g = () => i && m(),
            d = n.subscribe(g);
          return (
            a.add(m),
            () => {
              d(), a.delete(m);
            }
          );
        },
        dispatch(m) {
          var g;
          try {
            return (
              (i = !((g = m == null ? void 0 : m.meta) != null && g[Vl])),
              (s = !i),
              s && (o || ((o = !0), l(c))),
              n.dispatch(m)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  rk = (e) =>
    function (r) {
      const { autoBatch: n = !0 } = r ?? {};
      let i = new nv(e);
      return n && i.push(tk(typeof n == "object" ? n : void 0)), i;
    };
function nk(e) {
  const t = ek(),
    {
      reducer: r = void 0,
      middleware: n,
      devTools: i = !0,
      preloadedState: s = void 0,
      enhancers: o = void 0,
    } = e || {};
  let a;
  if (typeof r == "function") a = r;
  else if (Yr(r)) a = q0(r);
  else throw new Error(Ft(1));
  let l;
  typeof n == "function" ? (l = n(t)) : (l = t());
  let c = tl;
  i && (c = GE({ trace: !1, ...(typeof i == "object" && i) }));
  const m = kE(...l),
    g = rk(m);
  let d = typeof o == "function" ? o(g) : g();
  const v = c(...d);
  return V0(a, s, v);
}
function iv(e) {
  const t = {},
    r = [];
  let n;
  const i = {
    addCase(s, o) {
      const a = typeof s == "string" ? s : s.type;
      if (!a) throw new Error(Ft(28));
      if (a in t) throw new Error(Ft(29));
      return (t[a] = o), i;
    },
    addMatcher(s, o) {
      return r.push({ matcher: s, reducer: o }), i;
    },
    addDefaultCase(s) {
      return (n = s), i;
    },
  };
  return e(i), [t, r, n];
}
function ik(e) {
  return typeof e == "function";
}
function sk(e, t) {
  let [r, n, i] = iv(t),
    s;
  if (ik(e)) s = () => sh(e());
  else {
    const a = sh(e);
    s = () => a;
  }
  function o(a = s(), l) {
    let c = [
      r[l.type],
      ...n.filter(({ matcher: m }) => m(l)).map(({ reducer: m }) => m),
    ];
    return (
      c.filter((m) => !!m).length === 0 && (c = [i]),
      c.reduce((m, g) => {
        if (g)
          if (sr(m)) {
            const v = g(m, l);
            return v === void 0 ? m : v;
          } else {
            if (Wt(m)) return go(m, (d) => g(d, l));
            {
              const d = g(m, l);
              if (d === void 0) {
                if (m === null) return m;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined"
                );
              }
              return d;
            }
          }
        return m;
      }, a)
    );
  }
  return (o.getInitialState = s), o;
}
var sv = (e, t) => (JE(e) ? e.match(t) : e(t));
function wr(...e) {
  return (t) => e.some((r) => sv(r, t));
}
function ws(...e) {
  return (t) => e.every((r) => sv(r, t));
}
function ql(e, t) {
  if (!e || !e.meta) return !1;
  const r = typeof e.meta.requestId == "string",
    n = t.indexOf(e.meta.requestStatus) > -1;
  return r && n;
}
function yo(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function Yd(...e) {
  return e.length === 0
    ? (t) => ql(t, ["pending"])
    : yo(e)
    ? wr(...e.map((t) => t.pending))
    : Yd()(e[0]);
}
function Ei(...e) {
  return e.length === 0
    ? (t) => ql(t, ["rejected"])
    : yo(e)
    ? wr(...e.map((t) => t.rejected))
    : Ei()(e[0]);
}
function Yl(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0
    ? ws(Ei(...e), t)
    : yo(e)
    ? ws(Ei(...e), t)
    : Yl()(e[0]);
}
function Xr(...e) {
  return e.length === 0
    ? (t) => ql(t, ["fulfilled"])
    : yo(e)
    ? wr(...e.map((t) => t.fulfilled))
    : Xr()(e[0]);
}
function yf(...e) {
  return e.length === 0
    ? (t) => ql(t, ["pending", "fulfilled", "rejected"])
    : yo(e)
    ? wr(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled]))
    : yf()(e[0]);
}
var ok = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Xd = (e = 21) => {
    let t = "",
      r = e;
    for (; r--; ) t += ok[(Math.random() * 64) | 0];
    return t;
  },
  ak = ["name", "message", "stack", "code"],
  Xu = class {
    constructor(e, t) {
      Eo(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  ah = class {
    constructor(e, t) {
      Eo(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  lk = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const r of ak) typeof e[r] == "string" && (t[r] = e[r]);
      return t;
    }
    return { message: String(e) };
  },
  lh = "External signal was aborted",
  uh = (() => {
    function e(t, r, n) {
      const i = Bt(t + "/fulfilled", (l, c, m, g) => ({
          payload: l,
          meta: {
            ...(g || {}),
            arg: m,
            requestId: c,
            requestStatus: "fulfilled",
          },
        })),
        s = Bt(t + "/pending", (l, c, m) => ({
          payload: void 0,
          meta: {
            ...(m || {}),
            arg: c,
            requestId: l,
            requestStatus: "pending",
          },
        })),
        o = Bt(t + "/rejected", (l, c, m, g, d) => ({
          payload: g,
          error: ((n && n.serializeError) || lk)(l || "Rejected"),
          meta: {
            ...(d || {}),
            arg: m,
            requestId: c,
            rejectedWithValue: !!g,
            requestStatus: "rejected",
            aborted: (l == null ? void 0 : l.name) === "AbortError",
            condition: (l == null ? void 0 : l.name) === "ConditionError",
          },
        }));
      function a(l, { signal: c } = {}) {
        return (m, g, d) => {
          const v = n != null && n.idGenerator ? n.idGenerator(l) : Xd(),
            w = new AbortController();
          let x, b;
          function f(h) {
            (b = h), w.abort();
          }
          c &&
            (c.aborted
              ? f(lh)
              : c.addEventListener("abort", () => f(lh), { once: !0 }));
          const p = (async function () {
            var S, C;
            let h;
            try {
              let A =
                (S = n == null ? void 0 : n.condition) == null
                  ? void 0
                  : S.call(n, l, { getState: g, extra: d });
              if ((ck(A) && (A = await A), A === !1 || w.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const k = new Promise((N, j) => {
                (x = () => {
                  j({ name: "AbortError", message: b || "Aborted" });
                }),
                  w.signal.addEventListener("abort", x);
              });
              m(
                s(
                  v,
                  l,
                  (C = n == null ? void 0 : n.getPendingMeta) == null
                    ? void 0
                    : C.call(
                        n,
                        { requestId: v, arg: l },
                        { getState: g, extra: d }
                      )
                )
              ),
                (h = await Promise.race([
                  k,
                  Promise.resolve(
                    r(l, {
                      dispatch: m,
                      getState: g,
                      extra: d,
                      requestId: v,
                      signal: w.signal,
                      abort: f,
                      rejectWithValue: (N, j) => new Xu(N, j),
                      fulfillWithValue: (N, j) => new ah(N, j),
                    })
                  ).then((N) => {
                    if (N instanceof Xu) throw N;
                    return N instanceof ah
                      ? i(N.payload, v, l, N.meta)
                      : i(N, v, l);
                  }),
                ]));
            } catch (A) {
              h =
                A instanceof Xu ? o(null, v, l, A.payload, A.meta) : o(A, v, l);
            } finally {
              x && w.signal.removeEventListener("abort", x);
            }
            return (
              (n &&
                !n.dispatchConditionRejection &&
                o.match(h) &&
                h.meta.condition) ||
                m(h),
              h
            );
          })();
          return Object.assign(p, {
            abort: f,
            requestId: v,
            arg: l,
            unwrap() {
              return p.then(uk);
            },
          });
        };
      }
      return Object.assign(a, {
        pending: s,
        rejected: o,
        fulfilled: i,
        settled: wr(o, i),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function uk(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function ck(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var fk = Symbol.for("rtk-slice-createasyncthunk");
function dk(e, t) {
  return `${e}/${t}`;
}
function pk({ creators: e } = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[fk];
  return function (i) {
    const { name: s, reducerPath: o = s } = i;
    if (!s) throw new Error(Ft(11));
    const a =
        (typeof i.reducers == "function" ? i.reducers(hk()) : i.reducers) || {},
      l = Object.keys(a),
      c = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      m = {
        addCase(y, S) {
          const C = typeof y == "string" ? y : y.type;
          if (!C) throw new Error(Ft(12));
          if (C in c.sliceCaseReducersByType) throw new Error(Ft(13));
          return (c.sliceCaseReducersByType[C] = S), m;
        },
        addMatcher(y, S) {
          return c.sliceMatchers.push({ matcher: y, reducer: S }), m;
        },
        exposeAction(y, S) {
          return (c.actionCreators[y] = S), m;
        },
        exposeCaseReducer(y, S) {
          return (c.sliceCaseReducersByName[y] = S), m;
        },
      };
    l.forEach((y) => {
      const S = a[y],
        C = {
          reducerName: y,
          type: dk(s, y),
          createNotation: typeof i.reducers == "function",
        };
      yk(S) ? xk(C, S, m, t) : gk(C, S, m);
    });
    function g() {
      const [y = {}, S = [], C = void 0] =
          typeof i.extraReducers == "function"
            ? iv(i.extraReducers)
            : [i.extraReducers],
        A = { ...y, ...c.sliceCaseReducersByType };
      return sk(i.initialState, (k) => {
        for (let N in A) k.addCase(N, A[N]);
        for (let N of c.sliceMatchers) k.addMatcher(N.matcher, N.reducer);
        for (let N of S) k.addMatcher(N.matcher, N.reducer);
        C && k.addDefaultCase(C);
      });
    }
    const d = (y) => y,
      v = new Map(),
      w = new WeakMap();
    let x;
    function b(y, S) {
      return x || (x = g()), x(y, S);
    }
    function f() {
      return x || (x = g()), x.getInitialState();
    }
    function p(y, S = !1) {
      function C(k) {
        let N = k[y];
        return typeof N > "u" && S && (N = Ko(w, C, f)), N;
      }
      function A(k = d) {
        const N = Ko(v, S, () => new WeakMap());
        return Ko(N, k, () => {
          const j = {};
          for (const [T, _] of Object.entries(i.selectors ?? {}))
            j[T] = mk(_, k, () => Ko(w, k, f), S);
          return j;
        });
      }
      return {
        reducerPath: y,
        getSelectors: A,
        get selectors() {
          return A(C);
        },
        selectSlice: C,
      };
    }
    const h = {
      name: s,
      reducer: b,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: f,
      ...p(o),
      injectInto(y, { reducerPath: S, ...C } = {}) {
        const A = S ?? o;
        return (
          y.inject({ reducerPath: A, reducer: b }, C), { ...h, ...p(A, !0) }
        );
      },
    };
    return h;
  };
}
function mk(e, t, r, n) {
  function i(s, ...o) {
    let a = t(s);
    return typeof a > "u" && n && (a = r()), e(a, ...o);
  }
  return (i.unwrapped = e), i;
}
var un = pk();
function hk() {
  function e(t, r) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...r };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...r) {
              return t(...r);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, r) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: r,
        };
      },
      asyncThunk: e,
    }
  );
}
function gk({ type: e, reducerName: t, createNotation: r }, n, i) {
  let s, o;
  if ("reducer" in n) {
    if (r && !vk(n)) throw new Error(Ft(17));
    (s = n.reducer), (o = n.prepare);
  } else s = n;
  i.addCase(e, s)
    .exposeCaseReducer(t, s)
    .exposeAction(t, o ? Bt(e, o) : Bt(e));
}
function yk(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function vk(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function xk({ type: e, reducerName: t }, r, n, i) {
  if (!i) throw new Error(Ft(18));
  const {
      payloadCreator: s,
      fulfilled: o,
      pending: a,
      rejected: l,
      settled: c,
      options: m,
    } = r,
    g = i(e, s, m);
  n.exposeAction(t, g),
    o && n.addCase(g.fulfilled, o),
    a && n.addCase(g.pending, a),
    l && n.addCase(g.rejected, l),
    c && n.addMatcher(g.settled, c),
    n.exposeCaseReducer(t, {
      fulfilled: o || Vo,
      pending: a || Vo,
      rejected: l || Vo,
      settled: c || Vo,
    });
}
function Vo() {}
function Ft(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var wk = class extends Error {
    constructor(t) {
      super(t[0].message);
      Eo(this, "issues");
      (this.name = "SchemaError"), (this.issues = t);
    }
  },
  ov = ((e) => (
    (e.uninitialized = "uninitialized"),
    (e.pending = "pending"),
    (e.fulfilled = "fulfilled"),
    (e.rejected = "rejected"),
    e
  ))(ov || {});
function ch(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected",
  };
}
var fh = Yr;
function av(e, t) {
  if (e === t || !((fh(e) && fh(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  const r = Object.keys(t),
    n = Object.keys(e);
  let i = r.length === n.length;
  const s = Array.isArray(t) ? [] : {};
  for (const o of r) (s[o] = av(e[o], t[o])), i && (i = e[o] === s[o]);
  return i ? e : s;
}
function fi(e) {
  let t = 0;
  for (const r in e) t++;
  return t;
}
var dh = (e) => [].concat(...e);
function Sk(e) {
  return new RegExp("(^|:)//").test(e);
}
function bk() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function sl(e) {
  return e != null;
}
function Ak() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
var Ck = (e) => e.replace(/\/$/, ""),
  Ek = (e) => e.replace(/^\//, "");
function kk(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (Sk(t)) return t;
  const r = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return (e = Ck(e)), (t = Ek(t)), `${e}${r}${t}`;
}
function jk(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r).get(t);
}
var ph = (...e) => fetch(...e),
  Nk = (e) => e.status >= 200 && e.status <= 299,
  Tk = (e) => /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
function mh(e) {
  if (!Yr(e)) return e;
  const t = { ...e };
  for (const [r, n] of Object.entries(t)) n === void 0 && delete t[r];
  return t;
}
function lv({
  baseUrl: e,
  prepareHeaders: t = (g) => g,
  fetchFn: r = ph,
  paramsSerializer: n,
  isJsonContentType: i = Tk,
  jsonContentType: s = "application/json",
  jsonReplacer: o,
  timeout: a,
  responseHandler: l,
  validateStatus: c,
  ...m
} = {}) {
  return (
    typeof fetch > "u" &&
      r === ph &&
      console.warn(
        "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."
      ),
    async (d, v, w) => {
      const { getState: x, extra: b, endpoint: f, forced: p, type: h } = v;
      let y,
        {
          url: S,
          headers: C = new Headers(m.headers),
          params: A = void 0,
          responseHandler: k = l ?? "json",
          validateStatus: N = c ?? Nk,
          timeout: j = a,
          ...T
        } = typeof d == "string" ? { url: d } : d,
        _,
        P = v.signal;
      j &&
        ((_ = new AbortController()),
        v.signal.addEventListener("abort", _.abort),
        (P = _.signal));
      let O = { ...m, signal: P, ...T };
      (C = new Headers(mh(C))),
        (O.headers =
          (await t(C, {
            getState: x,
            arg: d,
            extra: b,
            endpoint: f,
            forced: p,
            type: h,
            extraOptions: w,
          })) || C);
      const L = (H) =>
        typeof H == "object" &&
        (Yr(H) || Array.isArray(H) || typeof H.toJSON == "function");
      if (
        (!O.headers.has("content-type") &&
          L(O.body) &&
          O.headers.set("content-type", s),
        L(O.body) && i(O.headers) && (O.body = JSON.stringify(O.body, o)),
        A)
      ) {
        const H = ~S.indexOf("?") ? "&" : "?",
          F = n ? n(A) : new URLSearchParams(mh(A));
        S += H + F;
      }
      S = kk(e, S);
      const M = new Request(S, O);
      y = { request: new Request(S, O) };
      let R,
        I = !1,
        D =
          _ &&
          setTimeout(() => {
            (I = !0), _.abort();
          }, j);
      try {
        R = await r(M);
      } catch (H) {
        return {
          error: {
            status: I ? "TIMEOUT_ERROR" : "FETCH_ERROR",
            error: String(H),
          },
          meta: y,
        };
      } finally {
        D && clearTimeout(D),
          _ == null || _.signal.removeEventListener("abort", _.abort);
      }
      const B = R.clone();
      y.response = B;
      let Q,
        ie = "";
      try {
        let H;
        if (
          (await Promise.all([
            g(R, k).then(
              (F) => (Q = F),
              (F) => (H = F)
            ),
            B.text().then(
              (F) => (ie = F),
              () => {}
            ),
          ]),
          H)
        )
          throw H;
      } catch (H) {
        return {
          error: {
            status: "PARSING_ERROR",
            originalStatus: R.status,
            data: ie,
            error: String(H),
          },
          meta: y,
        };
      }
      return N(R, Q)
        ? { data: Q, meta: y }
        : { error: { status: R.status, data: Q }, meta: y };
    }
  );
  async function g(d, v) {
    if (typeof v == "function") return v(d);
    if (
      (v === "content-type" && (v = i(d.headers) ? "json" : "text"),
      v === "json")
    ) {
      const w = await d.text();
      return w.length ? JSON.parse(w) : null;
    }
    return d.text();
  }
}
var hh = class {
    constructor(e, t = void 0) {
      (this.value = e), (this.meta = t);
    }
  },
  Gd = Bt("__rtkq/focused"),
  uv = Bt("__rtkq/unfocused"),
  Jd = Bt("__rtkq/online"),
  cv = Bt("__rtkq/offline");
function Xl(e) {
  return e.type === "query";
}
function _k(e) {
  return e.type === "mutation";
}
function Gl(e) {
  return e.type === "infinitequery";
}
function ol(e) {
  return Xl(e) || Gl(e);
}
function Zd(e, t, r, n, i, s) {
  return Pk(e)
    ? e(t, r, n, i).filter(sl).map(vf).map(s)
    : Array.isArray(e)
    ? e.map(vf).map(s)
    : [];
}
function Pk(e) {
  return typeof e == "function";
}
function vf(e) {
  return typeof e == "string" ? { type: e } : e;
}
function Ok(e, t) {
  return e.catch(t);
}
var Js = Symbol("forceQueryFn"),
  xf = (e) => typeof e[Js] == "function";
function Rk({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: r,
  mutationThunk: n,
  api: i,
  context: s,
}) {
  const o = new Map(),
    a = new Map(),
    {
      unsubscribeQueryResult: l,
      removeMutationResult: c,
      updateSubscriptionOptions: m,
    } = i.internalActions;
  return {
    buildInitiateQuery: b,
    buildInitiateInfiniteQuery: f,
    buildInitiateMutation: p,
    getRunningQueryThunk: g,
    getRunningMutationThunk: d,
    getRunningQueriesThunk: v,
    getRunningMutationsThunk: w,
  };
  function g(h, y) {
    return (S) => {
      var k;
      const C = s.endpointDefinitions[h],
        A = e({ queryArgs: y, endpointDefinition: C, endpointName: h });
      return (k = o.get(S)) == null ? void 0 : k[A];
    };
  }
  function d(h, y) {
    return (S) => {
      var C;
      return (C = a.get(S)) == null ? void 0 : C[y];
    };
  }
  function v() {
    return (h) => Object.values(o.get(h) || {}).filter(sl);
  }
  function w() {
    return (h) => Object.values(a.get(h) || {}).filter(sl);
  }
  function x(h, y) {
    const S =
      (
        C,
        {
          subscribe: A = !0,
          forceRefetch: k,
          subscriptionOptions: N,
          [Js]: j,
          ...T
        } = {}
      ) =>
      (_, P) => {
        var X;
        const O = e({ queryArgs: C, endpointDefinition: y, endpointName: h });
        let L;
        const M = {
          ...T,
          type: "query",
          subscribe: A,
          forceRefetch: k,
          subscriptionOptions: N,
          endpointName: h,
          originalArgs: C,
          queryCacheKey: O,
          [Js]: j,
        };
        if (Xl(y)) L = t(M);
        else {
          const { direction: K, initialPageParam: Ee } = T;
          L = r({ ...M, direction: K, initialPageParam: Ee });
        }
        const U = i.endpoints[h].select(C),
          R = _(L),
          I = U(P()),
          { requestId: D, abort: B } = R,
          Q = I.requestId !== D,
          ie = (X = o.get(_)) == null ? void 0 : X[O],
          H = () => U(P()),
          F = Object.assign(
            j
              ? R.then(H)
              : Q && !ie
              ? Promise.resolve(I)
              : Promise.all([ie, R]).then(H),
            {
              arg: C,
              requestId: D,
              subscriptionOptions: N,
              queryCacheKey: O,
              abort: B,
              async unwrap() {
                const K = await F;
                if (K.isError) throw K.error;
                return K.data;
              },
              refetch: () => _(S(C, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                A && _(l({ queryCacheKey: O, requestId: D }));
              },
              updateSubscriptionOptions(K) {
                (F.subscriptionOptions = K),
                  _(
                    m({
                      endpointName: h,
                      requestId: D,
                      queryCacheKey: O,
                      options: K,
                    })
                  );
              },
            }
          );
        if (!ie && !Q && !j) {
          const K = jk(o, _, {});
          (K[O] = F),
            F.then(() => {
              delete K[O], fi(K) || o.delete(_);
            });
        }
        return F;
      };
    return S;
  }
  function b(h, y) {
    return x(h, y);
  }
  function f(h, y) {
    return x(h, y);
  }
  function p(h) {
    return (y, { track: S = !0, fixedCacheKey: C } = {}) =>
      (A, k) => {
        const N = n({
            type: "mutation",
            endpointName: h,
            originalArgs: y,
            track: S,
            fixedCacheKey: C,
          }),
          j = A(N),
          { requestId: T, abort: _, unwrap: P } = j,
          O = Ok(
            j.unwrap().then((R) => ({ data: R })),
            (R) => ({ error: R })
          ),
          L = () => {
            A(c({ requestId: T, fixedCacheKey: C }));
          },
          M = Object.assign(O, {
            arg: j.arg,
            requestId: T,
            abort: _,
            unwrap: P,
            reset: L,
          }),
          U = a.get(A) || {};
        return (
          a.set(A, U),
          (U[T] = M),
          M.then(() => {
            delete U[T], fi(U) || a.delete(A);
          }),
          C &&
            ((U[C] = M),
            M.then(() => {
              U[C] === M && (delete U[C], fi(U) || a.delete(A));
            })),
          M
        );
      };
  }
}
var fv = class extends wk {
  constructor(e, t, r, n) {
    super(e), (this.value = t), (this.schemaName = r), (this._bqMeta = n);
  }
};
async function nn(e, t, r, n) {
  const i = await e["~standard"].validate(t);
  if (i.issues) throw new fv(i.issues, t, r, n);
  return i.value;
}
function Ik(e) {
  return e;
}
var Ji = (e = {}) => ({ ...e, [Vl]: !0 });
function Mk({
  reducerPath: e,
  baseQuery: t,
  context: { endpointDefinitions: r },
  serializeQueryArgs: n,
  api: i,
  assertTagType: s,
  selectors: o,
  onSchemaFailure: a,
  catchSchemaFailure: l,
  skipSchemaValidation: c,
}) {
  const m = (T, _, P, O) => (L, M) => {
    const U = r[T],
      R = n({ queryArgs: _, endpointDefinition: U, endpointName: T });
    if (
      (L(
        i.internalActions.queryResultPatched({ queryCacheKey: R, patches: P })
      ),
      !O)
    )
      return;
    const I = i.endpoints[T].select(_)(M()),
      D = Zd(U.providesTags, I.data, void 0, _, {}, s);
    L(
      i.internalActions.updateProvidedBy([
        { queryCacheKey: R, providedTags: D },
      ])
    );
  };
  function g(T, _, P = 0) {
    const O = [_, ...T];
    return P && O.length > P ? O.slice(0, -1) : O;
  }
  function d(T, _, P = 0) {
    const O = [...T, _];
    return P && O.length > P ? O.slice(1) : O;
  }
  const v =
      (T, _, P, O = !0) =>
      (L, M) => {
        const R = i.endpoints[T].select(_)(M()),
          I = {
            patches: [],
            inversePatches: [],
            undo: () => L(i.util.patchQueryData(T, _, I.inversePatches, O)),
          };
        if (R.status === "uninitialized") return I;
        let D;
        if ("data" in R)
          if (Wt(R.data)) {
            const [B, Q, ie] = tv(R.data, P);
            I.patches.push(...Q), I.inversePatches.push(...ie), (D = B);
          } else
            (D = P(R.data)),
              I.patches.push({ op: "replace", path: [], value: D }),
              I.inversePatches.push({ op: "replace", path: [], value: R.data });
        return (
          I.patches.length === 0 ||
            L(i.util.patchQueryData(T, _, I.patches, O)),
          I
        );
      },
    w = (T, _, P) => (O) =>
      O(
        i.endpoints[T].initiate(_, {
          subscribe: !1,
          forceRefetch: !0,
          [Js]: () => ({ data: P }),
        })
      ),
    x = (T, _) => (T.query && T[_] ? T[_] : Ik),
    b = async (
      T,
      {
        signal: _,
        abort: P,
        rejectWithValue: O,
        fulfillWithValue: L,
        dispatch: M,
        getState: U,
        extra: R,
      }
    ) => {
      var Q, ie;
      const I = r[T.endpointName],
        { metaSchema: D, skipSchemaValidation: B = c } = I;
      try {
        let H = x(I, "transformResponse");
        const F = {
            signal: _,
            abort: P,
            dispatch: M,
            getState: U,
            extra: R,
            endpoint: T.endpointName,
            type: T.type,
            forced: T.type === "query" ? f(T, U()) : void 0,
            queryCacheKey: T.type === "query" ? T.queryCacheKey : void 0,
          },
          X = T.type === "query" ? T[Js] : void 0;
        let K;
        const Ee = async (le, te, pe, In) => {
          if (te == null && le.pages.length)
            return Promise.resolve({ data: le });
          const Ht = { queryArg: T.originalArgs, pageParam: te },
            Mn = await Ie(Ht),
            Kt = In ? g : d;
          return {
            data: {
              pages: Kt(le.pages, Mn.data, pe),
              pageParams: Kt(le.pageParams, te, pe),
            },
            meta: Mn.meta,
          };
        };
        async function Ie(le) {
          let te;
          const {
            extraOptions: pe,
            argSchema: In,
            rawResponseSchema: Ht,
            responseSchema: Mn,
          } = I;
          if (
            (In && !B && (le = await nn(In, le, "argSchema", {})),
            X
              ? (te = X())
              : I.query
              ? (te = await t(I.query(le), F, pe))
              : (te = await I.queryFn(le, F, pe, (Bi) => t(Bi, F, pe))),
            typeof process < "u",
            te.error)
          )
            throw new hh(te.error, te.meta);
          let { data: Kt } = te;
          Ht &&
            !B &&
            (Kt = await nn(Ht, te.data, "rawResponseSchema", te.meta));
          let Ar = await H(Kt, te.meta, le);
          return (
            Mn && !B && (Ar = await nn(Mn, Ar, "responseSchema", te.meta)),
            { ...te, data: Ar }
          );
        }
        if (T.type === "query" && "infiniteQueryOptions" in I) {
          const { infiniteQueryOptions: le } = I,
            { maxPages: te = 1 / 0 } = le;
          let pe;
          const In = { pages: [], pageParams: [] },
            Ht =
              (Q = o.selectQueryEntry(U(), T.queryCacheKey)) == null
                ? void 0
                : Q.data,
            Kt = (f(T, U()) && !T.direction) || !Ht ? In : Ht;
          if ("direction" in T && T.direction && Kt.pages.length) {
            const Ar = T.direction === "backward",
              fu = (Ar ? dv : wf)(le, Kt);
            pe = await Ee(Kt, fu, te, Ar);
          } else {
            const { initialPageParam: Ar = le.initialPageParam } = T,
              Bi = (Ht == null ? void 0 : Ht.pageParams) ?? [],
              fu = Bi[0] ?? Ar,
              ux = Bi.length;
            (pe = await Ee(Kt, fu, te)), X && (pe = { data: pe.data.pages[0] });
            for (let dp = 1; dp < ux; dp++) {
              const cx = wf(le, pe.data);
              pe = await Ee(pe.data, cx, te);
            }
          }
          K = pe;
        } else K = await Ie(T.originalArgs);
        return (
          D &&
            !B &&
            K.meta &&
            (K.meta = await nn(D, K.meta, "metaSchema", K.meta)),
          L(
            K.data,
            Ji({ fulfilledTimeStamp: Date.now(), baseQueryMeta: K.meta })
          )
        );
      } catch (H) {
        let F = H;
        if (F instanceof hh) {
          let X = x(I, "transformErrorResponse");
          const { rawErrorResponseSchema: K, errorResponseSchema: Ee } = I;
          let { value: Ie, meta: le } = F;
          try {
            K && !B && (Ie = await nn(K, Ie, "rawErrorResponseSchema", le)),
              D && !B && (le = await nn(D, le, "metaSchema", le));
            let te = await X(Ie, le, T.originalArgs);
            return (
              Ee && !B && (te = await nn(Ee, te, "errorResponseSchema", le)),
              O(te, Ji({ baseQueryMeta: le }))
            );
          } catch (te) {
            F = te;
          }
        }
        try {
          if (F instanceof fv) {
            const X = {
              endpoint: T.endpointName,
              arg: T.originalArgs,
              type: T.type,
              queryCacheKey: T.type === "query" ? T.queryCacheKey : void 0,
            };
            (ie = I.onSchemaFailure) == null || ie.call(I, F, X),
              a == null || a(F, X);
            const { catchSchemaFailure: K = l } = I;
            if (K) return O(K(F, X), Ji({ baseQueryMeta: F._bqMeta }));
          }
        } catch (X) {
          F = X;
        }
        throw (console.error(F), F);
      }
    };
  function f(T, _) {
    const P = o.selectQueryEntry(_, T.queryCacheKey),
      O = o.selectConfig(_).refetchOnMountOrArgChange,
      L = P == null ? void 0 : P.fulfilledTimeStamp,
      M = T.forceRefetch ?? (T.subscribe && O);
    return M ? M === !0 || (Number(new Date()) - Number(L)) / 1e3 >= M : !1;
  }
  const p = () =>
      uh(`${e}/executeQuery`, b, {
        getPendingMeta({ arg: _ }) {
          const P = r[_.endpointName];
          return Ji({
            startedTimeStamp: Date.now(),
            ...(Gl(P) ? { direction: _.direction } : {}),
          });
        },
        condition(_, { getState: P }) {
          var B;
          const O = P(),
            L = o.selectQueryEntry(O, _.queryCacheKey),
            M = L == null ? void 0 : L.fulfilledTimeStamp,
            U = _.originalArgs,
            R = L == null ? void 0 : L.originalArgs,
            I = r[_.endpointName],
            D = _.direction;
          return xf(_)
            ? !0
            : (L == null ? void 0 : L.status) === "pending"
            ? !1
            : f(_, O) ||
              (Xl(I) &&
                (B = I == null ? void 0 : I.forceRefetch) != null &&
                B.call(I, {
                  currentArg: U,
                  previousArg: R,
                  endpointState: L,
                  state: O,
                }))
            ? !0
            : !(M && !D);
        },
        dispatchConditionRejection: !0,
      }),
    h = p(),
    y = p(),
    S = uh(`${e}/executeMutation`, b, {
      getPendingMeta() {
        return Ji({ startedTimeStamp: Date.now() });
      },
    }),
    C = (T) => "force" in T,
    A = (T) => "ifOlderThan" in T,
    k = (T, _, P) => (O, L) => {
      const M = C(P) && P.force,
        U = A(P) && P.ifOlderThan,
        R = (D = !0) => {
          const B = { forceRefetch: D, isPrefetch: !0 };
          return i.endpoints[T].initiate(_, B);
        },
        I = i.endpoints[T].select(_)(L());
      if (M) O(R());
      else if (U) {
        const D = I == null ? void 0 : I.fulfilledTimeStamp;
        if (!D) {
          O(R());
          return;
        }
        (Number(new Date()) - Number(new Date(D))) / 1e3 >= U && O(R());
      } else O(R(!1));
    };
  function N(T) {
    return (_) => {
      var P, O;
      return (
        ((O = (P = _ == null ? void 0 : _.meta) == null ? void 0 : P.arg) ==
        null
          ? void 0
          : O.endpointName) === T
      );
    };
  }
  function j(T, _) {
    return {
      matchPending: ws(Yd(T), N(_)),
      matchFulfilled: ws(Xr(T), N(_)),
      matchRejected: ws(Ei(T), N(_)),
    };
  }
  return {
    queryThunk: h,
    mutationThunk: S,
    infiniteQueryThunk: y,
    prefetch: k,
    updateQueryData: v,
    upsertQueryData: w,
    patchQueryData: m,
    buildMatchThunkActions: j,
  };
}
function wf(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return e.getNextPageParam(t[n], t, r[n], r);
}
function dv(e, { pages: t, pageParams: r }) {
  var n;
  return (n = e.getPreviousPageParam) == null
    ? void 0
    : n.call(e, t[0], t, r[0], r);
}
function pv(e, t, r, n) {
  return Zd(
    r[e.meta.arg.endpointName][t],
    Xr(e) ? e.payload : void 0,
    Yl(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
    n
  );
}
function qo(e, t, r) {
  const n = e[t];
  n && r(n);
}
function Zs(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function gh(e, t, r) {
  const n = e[Zs(t)];
  n && r(n);
}
var Yo = {};
function Lk({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  serializeQueryArgs: n,
  context: {
    endpointDefinitions: i,
    apiUid: s,
    extractRehydrationInfo: o,
    hasRehydrationInfo: a,
  },
  assertTagType: l,
  config: c,
}) {
  const m = Bt(`${e}/resetApiState`);
  function g(N, j, T, _) {
    var P;
    N[(P = j.queryCacheKey)] ??
      (N[P] = { status: "uninitialized", endpointName: j.endpointName }),
      qo(N, j.queryCacheKey, (O) => {
        (O.status = "pending"),
          (O.requestId = T && O.requestId ? O.requestId : _.requestId),
          j.originalArgs !== void 0 && (O.originalArgs = j.originalArgs),
          (O.startedTimeStamp = _.startedTimeStamp);
        const L = i[_.arg.endpointName];
        Gl(L) && "direction" in j && (O.direction = j.direction);
      });
  }
  function d(N, j, T, _) {
    qo(N, j.arg.queryCacheKey, (P) => {
      if (P.requestId !== j.requestId && !_) return;
      const { merge: O } = i[j.arg.endpointName];
      if (((P.status = "fulfilled"), O))
        if (P.data !== void 0) {
          const {
            fulfilledTimeStamp: L,
            arg: M,
            baseQueryMeta: U,
            requestId: R,
          } = j;
          let I = go(P.data, (D) =>
            O(D, T, {
              arg: M.originalArgs,
              baseQueryMeta: U,
              fulfilledTimeStamp: L,
              requestId: R,
            })
          );
          P.data = I;
        } else P.data = T;
      else
        P.data =
          i[j.arg.endpointName].structuralSharing ?? !0
            ? av(sr(P.data) ? NE(P.data) : P.data, T)
            : T;
      delete P.error, (P.fulfilledTimeStamp = j.fulfilledTimeStamp);
    });
  }
  const v = un({
      name: `${e}/queries`,
      initialState: Yo,
      reducers: {
        removeQueryResult: {
          reducer(N, { payload: { queryCacheKey: j } }) {
            delete N[j];
          },
          prepare: Gi(),
        },
        cacheEntriesUpserted: {
          reducer(N, j) {
            for (const T of j.payload) {
              const { queryDescription: _, value: P } = T;
              g(N, _, !0, {
                arg: _,
                requestId: j.meta.requestId,
                startedTimeStamp: j.meta.timestamp,
              }),
                d(
                  N,
                  {
                    arg: _,
                    requestId: j.meta.requestId,
                    fulfilledTimeStamp: j.meta.timestamp,
                    baseQueryMeta: {},
                  },
                  P,
                  !0
                );
            }
          },
          prepare: (N) => ({
            payload: N.map((_) => {
              const { endpointName: P, arg: O, value: L } = _,
                M = i[P];
              return {
                queryDescription: {
                  type: "query",
                  endpointName: P,
                  originalArgs: _.arg,
                  queryCacheKey: n({
                    queryArgs: O,
                    endpointDefinition: M,
                    endpointName: P,
                  }),
                },
                value: L,
              };
            }),
            meta: { [Vl]: !0, requestId: Xd(), timestamp: Date.now() },
          }),
        },
        queryResultPatched: {
          reducer(N, { payload: { queryCacheKey: j, patches: T } }) {
            qo(N, j, (_) => {
              _.data = rh(_.data, T.concat());
            });
          },
          prepare: Gi(),
        },
      },
      extraReducers(N) {
        N.addCase(t.pending, (j, { meta: T, meta: { arg: _ } }) => {
          const P = xf(_);
          g(j, _, P, T);
        })
          .addCase(t.fulfilled, (j, { meta: T, payload: _ }) => {
            const P = xf(T.arg);
            d(j, T, _, P);
          })
          .addCase(
            t.rejected,
            (
              j,
              {
                meta: { condition: T, arg: _, requestId: P },
                error: O,
                payload: L,
              }
            ) => {
              qo(j, _.queryCacheKey, (M) => {
                if (!T) {
                  if (M.requestId !== P) return;
                  (M.status = "rejected"), (M.error = L ?? O);
                }
              });
            }
          )
          .addMatcher(a, (j, T) => {
            const { queries: _ } = o(T);
            for (const [P, O] of Object.entries(_))
              ((O == null ? void 0 : O.status) === "fulfilled" ||
                (O == null ? void 0 : O.status) === "rejected") &&
                (j[P] = O);
          });
      },
    }),
    w = un({
      name: `${e}/mutations`,
      initialState: Yo,
      reducers: {
        removeMutationResult: {
          reducer(N, { payload: j }) {
            const T = Zs(j);
            T in N && delete N[T];
          },
          prepare: Gi(),
        },
      },
      extraReducers(N) {
        N.addCase(
          r.pending,
          (
            j,
            { meta: T, meta: { requestId: _, arg: P, startedTimeStamp: O } }
          ) => {
            P.track &&
              (j[Zs(T)] = {
                requestId: _,
                status: "pending",
                endpointName: P.endpointName,
                startedTimeStamp: O,
              });
          }
        )
          .addCase(r.fulfilled, (j, { payload: T, meta: _ }) => {
            _.arg.track &&
              gh(j, _, (P) => {
                P.requestId === _.requestId &&
                  ((P.status = "fulfilled"),
                  (P.data = T),
                  (P.fulfilledTimeStamp = _.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, (j, { payload: T, error: _, meta: P }) => {
            P.arg.track &&
              gh(j, P, (O) => {
                O.requestId === P.requestId &&
                  ((O.status = "rejected"), (O.error = T ?? _));
              });
          })
          .addMatcher(a, (j, T) => {
            const { mutations: _ } = o(T);
            for (const [P, O] of Object.entries(_))
              ((O == null ? void 0 : O.status) === "fulfilled" ||
                (O == null ? void 0 : O.status) === "rejected") &&
                P !== (O == null ? void 0 : O.requestId) &&
                (j[P] = O);
          });
      },
    }),
    x = { tags: {}, keys: {} },
    b = un({
      name: `${e}/invalidation`,
      initialState: x,
      reducers: {
        updateProvidedBy: {
          reducer(N, j) {
            var T, _, P;
            for (const { queryCacheKey: O, providedTags: L } of j.payload) {
              f(N, O);
              for (const { type: M, id: U } of L) {
                const R =
                  (_ = (T = N.tags)[M] ?? (T[M] = {}))[
                    (P = U || "__internal_without_id")
                  ] ?? (_[P] = []);
                R.includes(O) || R.push(O);
              }
              N.keys[O] = L;
            }
          },
          prepare: Gi(),
        },
      },
      extraReducers(N) {
        N.addCase(
          v.actions.removeQueryResult,
          (j, { payload: { queryCacheKey: T } }) => {
            f(j, T);
          }
        )
          .addMatcher(a, (j, T) => {
            var P, O, L;
            const { provided: _ } = o(T);
            for (const [M, U] of Object.entries(_))
              for (const [R, I] of Object.entries(U)) {
                const D =
                  (O = (P = j.tags)[M] ?? (P[M] = {}))[
                    (L = R || "__internal_without_id")
                  ] ?? (O[L] = []);
                for (const B of I) D.includes(B) || D.push(B);
              }
          })
          .addMatcher(wr(Xr(t), Yl(t)), (j, T) => {
            p(j, [T]);
          })
          .addMatcher(v.actions.cacheEntriesUpserted.match, (j, T) => {
            const _ = T.payload.map(({ queryDescription: P, value: O }) => ({
              type: "UNKNOWN",
              payload: O,
              meta: {
                requestStatus: "fulfilled",
                requestId: "UNKNOWN",
                arg: P,
              },
            }));
            p(j, _);
          });
      },
    });
  function f(N, j) {
    var _;
    const T = N.keys[j] ?? [];
    for (const P of T) {
      const O = P.type,
        L = P.id ?? "__internal_without_id",
        M = (_ = N.tags[O]) == null ? void 0 : _[L];
      M && (N.tags[O][L] = M.filter((U) => U !== j));
    }
    delete N.keys[j];
  }
  function p(N, j) {
    const T = j.map((_) => {
      const P = pv(_, "providesTags", i, l),
        { queryCacheKey: O } = _.meta.arg;
      return { queryCacheKey: O, providedTags: P };
    });
    b.caseReducers.updateProvidedBy(N, b.actions.updateProvidedBy(T));
  }
  const h = un({
      name: `${e}/subscriptions`,
      initialState: Yo,
      reducers: {
        updateSubscriptionOptions(N, j) {},
        unsubscribeQueryResult(N, j) {},
        internal_getRTKQSubscriptions() {},
      },
    }),
    y = un({
      name: `${e}/internalSubscriptions`,
      initialState: Yo,
      reducers: {
        subscriptionsUpdated: {
          reducer(N, j) {
            return rh(N, j.payload);
          },
          prepare: Gi(),
        },
      },
    }),
    S = un({
      name: `${e}/config`,
      initialState: {
        online: Ak(),
        focused: bk(),
        middlewareRegistered: !1,
        ...c,
      },
      reducers: {
        middlewareRegistered(N, { payload: j }) {
          N.middlewareRegistered =
            N.middlewareRegistered === "conflict" || s !== j ? "conflict" : !0;
        },
      },
      extraReducers: (N) => {
        N.addCase(Jd, (j) => {
          j.online = !0;
        })
          .addCase(cv, (j) => {
            j.online = !1;
          })
          .addCase(Gd, (j) => {
            j.focused = !0;
          })
          .addCase(uv, (j) => {
            j.focused = !1;
          })
          .addMatcher(a, (j) => ({ ...j }));
      },
    }),
    C = q0({
      queries: v.reducer,
      mutations: w.reducer,
      provided: b.reducer,
      subscriptions: y.reducer,
      config: S.reducer,
    }),
    A = (N, j) => C(m.match(j) ? void 0 : N, j),
    k = {
      ...S.actions,
      ...v.actions,
      ...h.actions,
      ...y.actions,
      ...w.actions,
      ...b.actions,
      resetApiState: m,
    };
  return { reducer: A, actions: k };
}
var Mt = Symbol.for("RTKQ/skipToken"),
  mv = { status: "uninitialized" },
  yh = go(mv, () => {}),
  vh = go(mv, () => {});
function Dk({ serializeQueryArgs: e, reducerPath: t, createSelector: r }) {
  const n = (h) => yh,
    i = (h) => vh;
  return {
    buildQuerySelector: d,
    buildInfiniteQuerySelector: v,
    buildMutationSelector: w,
    selectInvalidatedBy: x,
    selectCachedArgsForQuery: b,
    selectApiState: o,
    selectQueries: a,
    selectMutations: c,
    selectQueryEntry: l,
    selectConfig: m,
  };
  function s(h) {
    return { ...h, ...ch(h.status) };
  }
  function o(h) {
    return h[t];
  }
  function a(h) {
    var y;
    return (y = o(h)) == null ? void 0 : y.queries;
  }
  function l(h, y) {
    var S;
    return (S = a(h)) == null ? void 0 : S[y];
  }
  function c(h) {
    var y;
    return (y = o(h)) == null ? void 0 : y.mutations;
  }
  function m(h) {
    var y;
    return (y = o(h)) == null ? void 0 : y.config;
  }
  function g(h, y, S) {
    return (C) => {
      if (C === Mt) return r(n, S);
      const A = e({ queryArgs: C, endpointDefinition: y, endpointName: h });
      return r((N) => l(N, A) ?? yh, S);
    };
  }
  function d(h, y) {
    return g(h, y, s);
  }
  function v(h, y) {
    const { infiniteQueryOptions: S } = y;
    function C(A) {
      const k = { ...A, ...ch(A.status) },
        { isLoading: N, isError: j, direction: T } = k,
        _ = T === "forward",
        P = T === "backward";
      return {
        ...k,
        hasNextPage: f(S, k.data),
        hasPreviousPage: p(S, k.data),
        isFetchingNextPage: N && _,
        isFetchingPreviousPage: N && P,
        isFetchNextPageError: j && _,
        isFetchPreviousPageError: j && P,
      };
    }
    return g(h, y, C);
  }
  function w() {
    return (h) => {
      let y;
      return (
        typeof h == "object" ? (y = Zs(h) ?? Mt) : (y = h),
        r(
          y === Mt
            ? i
            : (A) => {
                var k, N;
                return (
                  ((N = (k = o(A)) == null ? void 0 : k.mutations) == null
                    ? void 0
                    : N[y]) ?? vh
                );
              },
          s
        )
      );
    };
  }
  function x(h, y) {
    const S = h[t],
      C = new Set();
    for (const A of y.filter(sl).map(vf)) {
      const k = S.provided.tags[A.type];
      if (!k) continue;
      let N = (A.id !== void 0 ? k[A.id] : dh(Object.values(k))) ?? [];
      for (const j of N) C.add(j);
    }
    return dh(
      Array.from(C.values()).map((A) => {
        const k = S.queries[A];
        return k
          ? [
              {
                queryCacheKey: A,
                endpointName: k.endpointName,
                originalArgs: k.originalArgs,
              },
            ]
          : [];
      })
    );
  }
  function b(h, y) {
    return Object.values(a(h))
      .filter(
        (S) =>
          (S == null ? void 0 : S.endpointName) === y &&
          S.status !== "uninitialized"
      )
      .map((S) => S.originalArgs);
  }
  function f(h, y) {
    return y ? wf(h, y) != null : !1;
  }
  function p(h, y) {
    return !y || !h.getPreviousPageParam ? !1 : dv(h, y) != null;
  }
}
var $n = WeakMap ? new WeakMap() : void 0,
  al = ({ endpointName: e, queryArgs: t }) => {
    let r = "";
    const n = $n == null ? void 0 : $n.get(t);
    if (typeof n == "string") r = n;
    else {
      const i = JSON.stringify(
        t,
        (s, o) => (
          (o = typeof o == "bigint" ? { $bigint: o.toString() } : o),
          (o = Yr(o)
            ? Object.keys(o)
                .sort()
                .reduce((a, l) => ((a[l] = o[l]), a), {})
            : o),
          o
        )
      );
      Yr(t) && ($n == null || $n.set(t, i)), (r = i);
    }
    return `${e}(${r})`;
  };
function hv(...e) {
  return function (r) {
    const n = il((c) => {
        var m;
        return (m = r.extractRehydrationInfo) == null
          ? void 0
          : m.call(r, c, { reducerPath: r.reducerPath ?? "api" });
      }),
      i = {
        reducerPath: "api",
        keepUnusedDataFor: 60,
        refetchOnMountOrArgChange: !1,
        refetchOnFocus: !1,
        refetchOnReconnect: !1,
        invalidationBehavior: "delayed",
        ...r,
        extractRehydrationInfo: n,
        serializeQueryArgs(c) {
          let m = al;
          if ("serializeQueryArgs" in c.endpointDefinition) {
            const g = c.endpointDefinition.serializeQueryArgs;
            m = (d) => {
              const v = g(d);
              return typeof v == "string" ? v : al({ ...d, queryArgs: v });
            };
          } else r.serializeQueryArgs && (m = r.serializeQueryArgs);
          return m(c);
        },
        tagTypes: [...(r.tagTypes || [])],
      },
      s = {
        endpointDefinitions: {},
        batch(c) {
          c();
        },
        apiUid: Xd(),
        extractRehydrationInfo: n,
        hasRehydrationInfo: il((c) => n(c) != null),
      },
      o = {
        injectEndpoints: l,
        enhanceEndpoints({ addTagTypes: c, endpoints: m }) {
          if (c)
            for (const g of c) i.tagTypes.includes(g) || i.tagTypes.push(g);
          if (m)
            for (const [g, d] of Object.entries(m))
              typeof d == "function"
                ? d(s.endpointDefinitions[g])
                : Object.assign(s.endpointDefinitions[g] || {}, d);
          return o;
        },
      },
      a = e.map((c) => c.init(o, i, s));
    function l(c) {
      const m = c.endpoints({
        query: (g) => ({ ...g, type: "query" }),
        mutation: (g) => ({ ...g, type: "mutation" }),
        infiniteQuery: (g) => ({ ...g, type: "infinitequery" }),
      });
      for (const [g, d] of Object.entries(m)) {
        if (c.overrideExisting !== !0 && g in s.endpointDefinitions) {
          if (c.overrideExisting === "throw") throw new Error(Ft(39));
          continue;
        }
        s.endpointDefinitions[g] = d;
        for (const v of a) v.injectEndpoint(g, d);
      }
      return o;
    }
    return o.injectEndpoints({ endpoints: r.endpoints });
  };
}
function or(e, ...t) {
  return Object.assign(e, ...t);
}
var zk = ({ api: e, queryThunk: t, internalState: r }) => {
  const n = `${e.reducerPath}/subscriptions`;
  let i = null,
    s = null;
  const { updateSubscriptionOptions: o, unsubscribeQueryResult: a } =
      e.internalActions,
    l = (v, w) => {
      var b, f, p;
      if (o.match(w)) {
        const { queryCacheKey: h, requestId: y, options: S } = w.payload;
        return (
          (b = v == null ? void 0 : v[h]) != null && b[y] && (v[h][y] = S), !0
        );
      }
      if (a.match(w)) {
        const { queryCacheKey: h, requestId: y } = w.payload;
        return v[h] && delete v[h][y], !0;
      }
      if (e.internalActions.removeQueryResult.match(w))
        return delete v[w.payload.queryCacheKey], !0;
      if (t.pending.match(w)) {
        const {
            meta: { arg: h, requestId: y },
          } = w,
          S = v[(f = h.queryCacheKey)] ?? (v[f] = {});
        return (
          (S[`${y}_running`] = {}),
          h.subscribe && (S[y] = h.subscriptionOptions ?? S[y] ?? {}),
          !0
        );
      }
      let x = !1;
      if (t.fulfilled.match(w) || t.rejected.match(w)) {
        const h = v[w.meta.arg.queryCacheKey] || {},
          y = `${w.meta.requestId}_running`;
        x || (x = !!h[y]), delete h[y];
      }
      if (t.rejected.match(w)) {
        const {
          meta: { condition: h, arg: y, requestId: S },
        } = w;
        if (h && y.subscribe) {
          const C = v[(p = y.queryCacheKey)] ?? (v[p] = {});
          (C[S] = y.subscriptionOptions ?? C[S] ?? {}), (x = !0);
        }
      }
      return x;
    },
    c = () => r.currentSubscriptions,
    d = {
      getSubscriptions: c,
      getSubscriptionCount: (v) => {
        const x = c()[v] ?? {};
        return fi(x);
      },
      isRequestSubscribed: (v, w) => {
        var b;
        const x = c();
        return !!((b = x == null ? void 0 : x[v]) != null && b[w]);
      },
    };
  return (v, w) => {
    if (
      (i || (i = JSON.parse(JSON.stringify(r.currentSubscriptions))),
      e.util.resetApiState.match(v))
    )
      return (i = r.currentSubscriptions = {}), (s = null), [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(v))
      return [!1, d];
    const x = l(r.currentSubscriptions, v);
    let b = !0;
    if (x) {
      s ||
        (s = setTimeout(() => {
          const h = JSON.parse(JSON.stringify(r.currentSubscriptions)),
            [, y] = tv(i, () => h);
          w.next(e.internalActions.subscriptionsUpdated(y)),
            (i = h),
            (s = null);
        }, 500));
      const f = typeof v.type == "string" && !!v.type.startsWith(n),
        p = t.rejected.match(v) && v.meta.condition && !!v.meta.arg.subscribe;
      b = !f && !p;
    }
    return [b, !1];
  };
};
function Uk(e) {
  for (const t in e) return !1;
  return !0;
}
var Bk = 2147483647 / 1e3 - 1,
  Fk = ({
    reducerPath: e,
    api: t,
    queryThunk: r,
    context: n,
    internalState: i,
    selectors: { selectQueryEntry: s, selectConfig: o },
  }) => {
    const {
        removeQueryResult: a,
        unsubscribeQueryResult: l,
        cacheEntriesUpserted: c,
      } = t.internalActions,
      m = wr(l.match, r.fulfilled, r.rejected, c.match);
    function g(b) {
      const f = i.currentSubscriptions[b];
      return !!f && !Uk(f);
    }
    const d = {},
      v = (b, f, p) => {
        const h = f.getState(),
          y = o(h);
        if (m(b)) {
          let S;
          if (c.match(b))
            S = b.payload.map((C) => C.queryDescription.queryCacheKey);
          else {
            const { queryCacheKey: C } = l.match(b) ? b.payload : b.meta.arg;
            S = [C];
          }
          w(S, f, y);
        }
        if (t.util.resetApiState.match(b))
          for (const [S, C] of Object.entries(d))
            C && clearTimeout(C), delete d[S];
        if (n.hasRehydrationInfo(b)) {
          const { queries: S } = n.extractRehydrationInfo(b);
          w(Object.keys(S), f, y);
        }
      };
    function w(b, f, p) {
      const h = f.getState();
      for (const y of b) {
        const S = s(h, y);
        x(y, S == null ? void 0 : S.endpointName, f, p);
      }
    }
    function x(b, f, p, h) {
      const y = n.endpointDefinitions[f],
        S = (y == null ? void 0 : y.keepUnusedDataFor) ?? h.keepUnusedDataFor;
      if (S === 1 / 0) return;
      const C = Math.max(0, Math.min(S, Bk));
      if (!g(b)) {
        const A = d[b];
        A && clearTimeout(A),
          (d[b] = setTimeout(() => {
            g(b) || p.dispatch(a({ queryCacheKey: b })), delete d[b];
          }, C * 1e3));
      }
    }
    return v;
  },
  xh = new Error("Promise never resolved before cacheEntryRemoved."),
  $k = ({
    api: e,
    reducerPath: t,
    context: r,
    queryThunk: n,
    mutationThunk: i,
    internalState: s,
    selectors: { selectQueryEntry: o, selectApiState: a },
  }) => {
    const l = yf(n),
      c = yf(i),
      m = Xr(n, i),
      g = {};
    function d(f, p, h) {
      const y = g[f];
      y != null &&
        y.valueResolved &&
        (y.valueResolved({ data: p, meta: h }), delete y.valueResolved);
    }
    function v(f) {
      const p = g[f];
      p && (delete g[f], p.cacheEntryRemoved());
    }
    const w = (f, p, h) => {
      const y = x(f);
      function S(C, A, k, N) {
        const j = o(h, A),
          T = o(p.getState(), A);
        !j && T && b(C, N, A, p, k);
      }
      if (n.pending.match(f))
        S(
          f.meta.arg.endpointName,
          y,
          f.meta.requestId,
          f.meta.arg.originalArgs
        );
      else if (e.internalActions.cacheEntriesUpserted.match(f))
        for (const { queryDescription: C, value: A } of f.payload) {
          const { endpointName: k, originalArgs: N, queryCacheKey: j } = C;
          S(k, j, f.meta.requestId, N), d(j, A, {});
        }
      else if (i.pending.match(f))
        p.getState()[t].mutations[y] &&
          b(
            f.meta.arg.endpointName,
            f.meta.arg.originalArgs,
            y,
            p,
            f.meta.requestId
          );
      else if (m(f)) d(y, f.payload, f.meta.baseQueryMeta);
      else if (
        e.internalActions.removeQueryResult.match(f) ||
        e.internalActions.removeMutationResult.match(f)
      )
        v(y);
      else if (e.util.resetApiState.match(f))
        for (const C of Object.keys(g)) v(C);
    };
    function x(f) {
      return l(f)
        ? f.meta.arg.queryCacheKey
        : c(f)
        ? f.meta.arg.fixedCacheKey ?? f.meta.requestId
        : e.internalActions.removeQueryResult.match(f)
        ? f.payload.queryCacheKey
        : e.internalActions.removeMutationResult.match(f)
        ? Zs(f.payload)
        : "";
    }
    function b(f, p, h, y, S) {
      const C = r.endpointDefinitions[f],
        A = C == null ? void 0 : C.onCacheEntryAdded;
      if (!A) return;
      const k = {},
        N = new Promise((L) => {
          k.cacheEntryRemoved = L;
        }),
        j = Promise.race([
          new Promise((L) => {
            k.valueResolved = L;
          }),
          N.then(() => {
            throw xh;
          }),
        ]);
      j.catch(() => {}), (g[h] = k);
      const T = e.endpoints[f].select(ol(C) ? p : h),
        _ = y.dispatch((L, M, U) => U),
        P = {
          ...y,
          getCacheEntry: () => T(y.getState()),
          requestId: S,
          extra: _,
          updateCachedData: ol(C)
            ? (L) => y.dispatch(e.util.updateQueryData(f, p, L))
            : void 0,
          cacheDataLoaded: j,
          cacheEntryRemoved: N,
        },
        O = A(p, P);
      Promise.resolve(O).catch((L) => {
        if (L !== xh) throw L;
      });
    }
    return w;
  },
  Qk =
    ({ api: e, context: { apiUid: t }, reducerPath: r }) =>
    (n, i) => {
      e.util.resetApiState.match(n) &&
        i.dispatch(e.internalActions.middlewareRegistered(t));
    },
  Wk = ({
    reducerPath: e,
    context: t,
    context: { endpointDefinitions: r },
    mutationThunk: n,
    queryThunk: i,
    api: s,
    assertTagType: o,
    refetchQuery: a,
    internalState: l,
  }) => {
    const { removeQueryResult: c } = s.internalActions,
      m = wr(Xr(n), Yl(n)),
      g = wr(Xr(n, i), Ei(n, i));
    let d = [];
    const v = (b, f) => {
      m(b)
        ? x(pv(b, "invalidatesTags", r, o), f)
        : g(b)
        ? x([], f)
        : s.util.invalidateTags.match(b) &&
          x(Zd(b.payload, void 0, void 0, void 0, void 0, o), f);
    };
    function w(b) {
      var h;
      const { queries: f, mutations: p } = b;
      for (const y of [f, p])
        for (const S in y)
          if (((h = y[S]) == null ? void 0 : h.status) === "pending") return !0;
      return !1;
    }
    function x(b, f) {
      const p = f.getState(),
        h = p[e];
      if ((d.push(...b), h.config.invalidationBehavior === "delayed" && w(h)))
        return;
      const y = d;
      if (((d = []), y.length === 0)) return;
      const S = s.util.selectInvalidatedBy(p, y);
      t.batch(() => {
        const C = Array.from(S.values());
        for (const { queryCacheKey: A } of C) {
          const k = h.queries[A],
            N = l.currentSubscriptions[A] ?? {};
          k &&
            (fi(N) === 0
              ? f.dispatch(c({ queryCacheKey: A }))
              : k.status !== "uninitialized" && f.dispatch(a(k)));
        }
      });
    }
    return v;
  },
  Hk = ({
    reducerPath: e,
    queryThunk: t,
    api: r,
    refetchQuery: n,
    internalState: i,
  }) => {
    const s = {},
      o = (d, v) => {
        (r.internalActions.updateSubscriptionOptions.match(d) ||
          r.internalActions.unsubscribeQueryResult.match(d)) &&
          l(d.payload, v),
          (t.pending.match(d) || (t.rejected.match(d) && d.meta.condition)) &&
            l(d.meta.arg, v),
          (t.fulfilled.match(d) ||
            (t.rejected.match(d) && !d.meta.condition)) &&
            a(d.meta.arg, v),
          r.util.resetApiState.match(d) && m();
      };
    function a({ queryCacheKey: d }, v) {
      const w = v.getState()[e],
        x = w.queries[d],
        b = i.currentSubscriptions[d];
      if (!x || x.status === "uninitialized") return;
      const { lowestPollingInterval: f, skipPollingIfUnfocused: p } = g(b);
      if (!Number.isFinite(f)) return;
      const h = s[d];
      h != null && h.timeout && (clearTimeout(h.timeout), (h.timeout = void 0));
      const y = Date.now() + f;
      s[d] = {
        nextPollTimestamp: y,
        pollingInterval: f,
        timeout: setTimeout(() => {
          (w.config.focused || !p) && v.dispatch(n(x)),
            a({ queryCacheKey: d }, v);
        }, f),
      };
    }
    function l({ queryCacheKey: d }, v) {
      const x = v.getState()[e].queries[d],
        b = i.currentSubscriptions[d];
      if (!x || x.status === "uninitialized") return;
      const { lowestPollingInterval: f } = g(b);
      if (!Number.isFinite(f)) {
        c(d);
        return;
      }
      const p = s[d],
        h = Date.now() + f;
      (!p || h < p.nextPollTimestamp) && a({ queryCacheKey: d }, v);
    }
    function c(d) {
      const v = s[d];
      v != null && v.timeout && clearTimeout(v.timeout), delete s[d];
    }
    function m() {
      for (const d of Object.keys(s)) c(d);
    }
    function g(d = {}) {
      let v = !1,
        w = Number.POSITIVE_INFINITY;
      for (let x in d)
        d[x].pollingInterval &&
          ((w = Math.min(d[x].pollingInterval, w)),
          (v = d[x].skipPollingIfUnfocused || v));
      return { lowestPollingInterval: w, skipPollingIfUnfocused: v };
    }
    return o;
  },
  Kk = ({ api: e, context: t, queryThunk: r, mutationThunk: n }) => {
    const i = Yd(r, n),
      s = Ei(r, n),
      o = Xr(r, n),
      a = {};
    return (c, m) => {
      var g, d;
      if (i(c)) {
        const {
            requestId: v,
            arg: { endpointName: w, originalArgs: x },
          } = c.meta,
          b = t.endpointDefinitions[w],
          f = b == null ? void 0 : b.onQueryStarted;
        if (f) {
          const p = {},
            h = new Promise((A, k) => {
              (p.resolve = A), (p.reject = k);
            });
          h.catch(() => {}), (a[v] = p);
          const y = e.endpoints[w].select(ol(b) ? x : v),
            S = m.dispatch((A, k, N) => N),
            C = {
              ...m,
              getCacheEntry: () => y(m.getState()),
              requestId: v,
              extra: S,
              updateCachedData: ol(b)
                ? (A) => m.dispatch(e.util.updateQueryData(w, x, A))
                : void 0,
              queryFulfilled: h,
            };
          f(x, C);
        }
      } else if (o(c)) {
        const { requestId: v, baseQueryMeta: w } = c.meta;
        (g = a[v]) == null || g.resolve({ data: c.payload, meta: w }),
          delete a[v];
      } else if (s(c)) {
        const { requestId: v, rejectedWithValue: w, baseQueryMeta: x } = c.meta;
        (d = a[v]) == null ||
          d.reject({
            error: c.payload ?? c.error,
            isUnhandledError: !w,
            meta: x,
          }),
          delete a[v];
      }
    };
  },
  Vk = ({
    reducerPath: e,
    context: t,
    api: r,
    refetchQuery: n,
    internalState: i,
  }) => {
    const { removeQueryResult: s } = r.internalActions,
      o = (l, c) => {
        Gd.match(l) && a(c, "refetchOnFocus"),
          Jd.match(l) && a(c, "refetchOnReconnect");
      };
    function a(l, c) {
      const m = l.getState()[e],
        g = m.queries,
        d = i.currentSubscriptions;
      t.batch(() => {
        for (const v of Object.keys(d)) {
          const w = g[v],
            x = d[v];
          if (!x || !w) continue;
          (Object.values(x).some((f) => f[c] === !0) ||
            (Object.values(x).every((f) => f[c] === void 0) && m.config[c])) &&
            (fi(x) === 0
              ? l.dispatch(s({ queryCacheKey: v }))
              : w.status !== "uninitialized" && l.dispatch(n(w)));
        }
      });
    }
    return o;
  };
function qk(e) {
  const { reducerPath: t, queryThunk: r, api: n, context: i } = e,
    { apiUid: s } = i,
    o = { invalidateTags: Bt(`${t}/invalidateTags`) },
    a = (g) => g.type.startsWith(`${t}/`),
    l = [Qk, Fk, Wk, Hk, $k, Kk];
  return {
    middleware: (g) => {
      let d = !1;
      const w = {
          ...e,
          internalState: { currentSubscriptions: {} },
          refetchQuery: m,
          isThisApiSliceAction: a,
        },
        x = l.map((p) => p(w)),
        b = zk(w),
        f = Vk(w);
      return (p) => (h) => {
        if (!Y0(h)) return p(h);
        d || ((d = !0), g.dispatch(n.internalActions.middlewareRegistered(s)));
        const y = { ...g, next: p },
          S = g.getState(),
          [C, A] = b(h, y, S);
        let k;
        if (
          (C ? (k = p(h)) : (k = A),
          g.getState()[t] && (f(h, y, S), a(h) || i.hasRehydrationInfo(h)))
        )
          for (const N of x) N(h, y, S);
        return k;
      };
    },
    actions: o,
  };
  function m(g) {
    return e.api.endpoints[g.endpointName].initiate(g.originalArgs, {
      subscribe: !1,
      forceRefetch: !0,
    });
  }
}
var wh = Symbol(),
  gv = ({ createSelector: e = qd } = {}) => ({
    name: wh,
    init(
      t,
      {
        baseQuery: r,
        tagTypes: n,
        reducerPath: i,
        serializeQueryArgs: s,
        keepUnusedDataFor: o,
        refetchOnMountOrArgChange: a,
        refetchOnFocus: l,
        refetchOnReconnect: c,
        invalidationBehavior: m,
        onSchemaFailure: g,
        catchSchemaFailure: d,
        skipSchemaValidation: v,
      },
      w
    ) {
      zE();
      const x = (F) => F;
      Object.assign(t, {
        reducerPath: i,
        endpoints: {},
        internalActions: {
          onOnline: Jd,
          onOffline: cv,
          onFocus: Gd,
          onFocusLost: uv,
        },
        util: {},
      });
      const b = Dk({
          serializeQueryArgs: s,
          reducerPath: i,
          createSelector: e,
        }),
        {
          selectInvalidatedBy: f,
          selectCachedArgsForQuery: p,
          buildQuerySelector: h,
          buildInfiniteQuerySelector: y,
          buildMutationSelector: S,
        } = b;
      or(t.util, { selectInvalidatedBy: f, selectCachedArgsForQuery: p });
      const {
          queryThunk: C,
          infiniteQueryThunk: A,
          mutationThunk: k,
          patchQueryData: N,
          updateQueryData: j,
          upsertQueryData: T,
          prefetch: _,
          buildMatchThunkActions: P,
        } = Mk({
          baseQuery: r,
          reducerPath: i,
          context: w,
          api: t,
          serializeQueryArgs: s,
          assertTagType: x,
          selectors: b,
          onSchemaFailure: g,
          catchSchemaFailure: d,
          skipSchemaValidation: v,
        }),
        { reducer: O, actions: L } = Lk({
          context: w,
          queryThunk: C,
          mutationThunk: k,
          serializeQueryArgs: s,
          reducerPath: i,
          assertTagType: x,
          config: {
            refetchOnFocus: l,
            refetchOnReconnect: c,
            refetchOnMountOrArgChange: a,
            keepUnusedDataFor: o,
            reducerPath: i,
            invalidationBehavior: m,
          },
        });
      or(t.util, {
        patchQueryData: N,
        updateQueryData: j,
        upsertQueryData: T,
        prefetch: _,
        resetApiState: L.resetApiState,
        upsertQueryEntries: L.cacheEntriesUpserted,
      }),
        or(t.internalActions, L);
      const { middleware: M, actions: U } = qk({
        reducerPath: i,
        context: w,
        queryThunk: C,
        mutationThunk: k,
        infiniteQueryThunk: A,
        api: t,
        assertTagType: x,
        selectors: b,
      });
      or(t.util, U), or(t, { reducer: O, middleware: M });
      const {
        buildInitiateQuery: R,
        buildInitiateInfiniteQuery: I,
        buildInitiateMutation: D,
        getRunningMutationThunk: B,
        getRunningMutationsThunk: Q,
        getRunningQueriesThunk: ie,
        getRunningQueryThunk: H,
      } = Rk({
        queryThunk: C,
        mutationThunk: k,
        infiniteQueryThunk: A,
        api: t,
        serializeQueryArgs: s,
        context: w,
      });
      return (
        or(t.util, {
          getRunningMutationThunk: B,
          getRunningMutationsThunk: Q,
          getRunningQueryThunk: H,
          getRunningQueriesThunk: ie,
        }),
        {
          name: wh,
          injectEndpoint(F, X) {
            var Ie;
            const Ee = (Ie = t.endpoints)[F] ?? (Ie[F] = {});
            Xl(X) &&
              or(Ee, { name: F, select: h(F, X), initiate: R(F, X) }, P(C, F)),
              _k(X) &&
                or(Ee, { name: F, select: S(), initiate: D(F) }, P(k, F)),
              Gl(X) &&
                or(
                  Ee,
                  { name: F, select: y(F, X), initiate: I(F, X) },
                  P(C, F)
                );
          },
        }
      );
    },
  });
gv();
function Xo(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function Yk(e) {
  return e.type === "query";
}
function Xk(e) {
  return e.type === "mutation";
}
function yv(e) {
  return e.type === "infinitequery";
}
function Zi(e, ...t) {
  return Object.assign(e, ...t);
}
var Gu = Symbol();
function Ju(e, t, r, n) {
  const i = E.useMemo(
      () => ({
        queryArgs: e,
        serialized:
          typeof e == "object"
            ? t({ queryArgs: e, endpointDefinition: r, endpointName: n })
            : e,
      }),
      [e, t, r, n]
    ),
    s = E.useRef(i);
  return (
    E.useEffect(() => {
      s.current.serialized !== i.serialized && (s.current = i);
    }, [i]),
    s.current.serialized === i.serialized ? s.current.queryArgs : e
  );
}
function Go(e) {
  const t = E.useRef(e);
  return (
    E.useEffect(() => {
      vs(t.current, e) || (t.current = e);
    }, [e]),
    vs(t.current, e) ? t.current : e
  );
}
var Gk = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Jk = Gk(),
  Zk = () => typeof navigator < "u" && navigator.product === "ReactNative",
  e2 = Zk(),
  t2 = () => (Jk || e2 ? E.useLayoutEffect : E.useEffect),
  r2 = t2(),
  Sh = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: ov.pending,
        }
      : e;
function Zu(e, ...t) {
  const r = {};
  return (
    t.forEach((n) => {
      r[n] = e[n];
    }),
    r
  );
}
var ec = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function n2({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: { useDispatch: r, useSelector: n, useStore: i },
    unstable__sideEffectsInRender: s,
    createSelector: o,
  },
  serializeQueryArgs: a,
  context: l,
}) {
  const c = s ? (y) => y() : E.useEffect;
  return {
    buildQueryHooks: f,
    buildInfiniteQueryHooks: p,
    buildMutationHook: h,
    usePrefetch: d,
  };
  function m(y, S, C) {
    if (S != null && S.endpointName && y.isUninitialized) {
      const { endpointName: _ } = S,
        P = l.endpointDefinitions[_];
      C !== Mt &&
        a({
          queryArgs: S.originalArgs,
          endpointDefinition: P,
          endpointName: _,
        }) === a({ queryArgs: C, endpointDefinition: P, endpointName: _ }) &&
        (S = void 0);
    }
    let A = y.isSuccess ? y.data : S == null ? void 0 : S.data;
    A === void 0 && (A = y.data);
    const k = A !== void 0,
      N = y.isLoading,
      j = (!S || S.isLoading || S.isUninitialized) && !k && N,
      T =
        y.isSuccess ||
        (k && ((N && !(S != null && S.isError)) || y.isUninitialized));
    return {
      ...y,
      data: A,
      currentData: y.data,
      isFetching: N,
      isLoading: j,
      isSuccess: T,
    };
  }
  function g(y, S, C) {
    if (S != null && S.endpointName && y.isUninitialized) {
      const { endpointName: _ } = S,
        P = l.endpointDefinitions[_];
      C !== Mt &&
        a({
          queryArgs: S.originalArgs,
          endpointDefinition: P,
          endpointName: _,
        }) === a({ queryArgs: C, endpointDefinition: P, endpointName: _ }) &&
        (S = void 0);
    }
    let A = y.isSuccess ? y.data : S == null ? void 0 : S.data;
    A === void 0 && (A = y.data);
    const k = A !== void 0,
      N = y.isLoading,
      j = (!S || S.isLoading || S.isUninitialized) && !k && N,
      T = y.isSuccess || (N && k);
    return {
      ...y,
      data: A,
      currentData: y.data,
      isFetching: N,
      isLoading: j,
      isSuccess: T,
    };
  }
  function d(y, S) {
    const C = r(),
      A = Go(S);
    return E.useCallback(
      (k, N) => C(e.util.prefetch(y, k, { ...A, ...N })),
      [y, C, A]
    );
  }
  function v(
    y,
    S,
    {
      refetchOnReconnect: C,
      refetchOnFocus: A,
      refetchOnMountOrArgChange: k,
      skip: N = !1,
      pollingInterval: j = 0,
      skipPollingIfUnfocused: T = !1,
      ..._
    } = {}
  ) {
    const { initiate: P } = e.endpoints[y],
      O = r(),
      L = E.useRef(void 0);
    if (!L.current) {
      const F = O(e.internalActions.internal_getRTKQSubscriptions());
      L.current = F;
    }
    const M = Ju(N ? Mt : S, al, l.endpointDefinitions[y], y),
      U = Go({
        refetchOnReconnect: C,
        refetchOnFocus: A,
        pollingInterval: j,
        skipPollingIfUnfocused: T,
      }),
      R = _.initialPageParam,
      I = Go(R),
      D = E.useRef(void 0);
    let { queryCacheKey: B, requestId: Q } = D.current || {},
      ie = !1;
    B && Q && (ie = L.current.isRequestSubscribed(B, Q));
    const H = !ie && D.current !== void 0;
    return (
      c(() => {
        H && (D.current = void 0);
      }, [H]),
      c(() => {
        var K;
        const F = D.current;
        if (M === Mt) {
          F == null || F.unsubscribe(), (D.current = void 0);
          return;
        }
        const X = (K = D.current) == null ? void 0 : K.subscriptionOptions;
        if (!F || F.arg !== M) {
          F == null || F.unsubscribe();
          const Ee = O(
            P(M, {
              subscriptionOptions: U,
              forceRefetch: k,
              ...(yv(l.endpointDefinitions[y]) ? { initialPageParam: I } : {}),
            })
          );
          D.current = Ee;
        } else U !== X && F.updateSubscriptionOptions(U);
      }, [O, P, k, M, U, H, I, y]),
      [D, O, P, U]
    );
  }
  function w(y, S) {
    return (A, { skip: k = !1, selectFromResult: N } = {}) => {
      const { select: j } = e.endpoints[y],
        T = Ju(k ? Mt : A, a, l.endpointDefinitions[y], y),
        _ = E.useRef(void 0),
        P = E.useMemo(
          () =>
            o([j(T), (R, I) => I, (R) => T], S, {
              memoizeOptions: { resultEqualityCheck: vs },
            }),
          [j, T]
        ),
        O = E.useMemo(
          () =>
            N
              ? o([P], N, { devModeChecks: { identityFunctionCheck: "never" } })
              : P,
          [P, N]
        ),
        L = n((R) => O(R, _.current), vs),
        M = i(),
        U = P(M.getState(), _.current);
      return (
        r2(() => {
          _.current = U;
        }, [U]),
        L
      );
    };
  }
  function x(y) {
    E.useEffect(
      () => () => {
        var S, C;
        (C = (S = y.current) == null ? void 0 : S.unsubscribe) == null ||
          C.call(S),
          (y.current = void 0);
      },
      [y]
    );
  }
  function b(y) {
    if (!y.current) throw new Error(Ft(38));
    return y.current.refetch();
  }
  function f(y) {
    const S = (k, N = {}) => {
        const [j] = v(y, k, N);
        return x(j), E.useMemo(() => ({ refetch: () => b(j) }), [j]);
      },
      C = ({
        refetchOnReconnect: k,
        refetchOnFocus: N,
        pollingInterval: j = 0,
        skipPollingIfUnfocused: T = !1,
      } = {}) => {
        const { initiate: _ } = e.endpoints[y],
          P = r(),
          [O, L] = E.useState(Gu),
          M = E.useRef(void 0),
          U = Go({
            refetchOnReconnect: k,
            refetchOnFocus: N,
            pollingInterval: j,
            skipPollingIfUnfocused: T,
          });
        c(() => {
          var Q, ie;
          const B = (Q = M.current) == null ? void 0 : Q.subscriptionOptions;
          U !== B &&
            ((ie = M.current) == null || ie.updateSubscriptionOptions(U));
        }, [U]);
        const R = E.useRef(U);
        c(() => {
          R.current = U;
        }, [U]);
        const I = E.useCallback(
            function (B, Q = !1) {
              let ie;
              return (
                t(() => {
                  var H;
                  (H = M.current) == null || H.unsubscribe(),
                    (M.current = ie =
                      P(
                        _(B, {
                          subscriptionOptions: R.current,
                          forceRefetch: !Q,
                        })
                      )),
                    L(B);
                }),
                ie
              );
            },
            [P, _]
          ),
          D = E.useCallback(() => {
            var B, Q;
            (B = M.current) != null &&
              B.queryCacheKey &&
              P(
                e.internalActions.removeQueryResult({
                  queryCacheKey:
                    (Q = M.current) == null ? void 0 : Q.queryCacheKey,
                })
              );
          }, [P]);
        return (
          E.useEffect(
            () => () => {
              var B;
              (B = M == null ? void 0 : M.current) == null || B.unsubscribe();
            },
            []
          ),
          E.useEffect(() => {
            O !== Gu && !M.current && I(O, !0);
          }, [O, I]),
          E.useMemo(() => [I, O, { reset: D }], [I, O, D])
        );
      },
      A = w(y, m);
    return {
      useQueryState: A,
      useQuerySubscription: S,
      useLazyQuerySubscription: C,
      useLazyQuery(k) {
        const [N, j, { reset: T }] = C(k),
          _ = A(j, { ...k, skip: j === Gu }),
          P = E.useMemo(() => ({ lastArg: j }), [j]);
        return E.useMemo(() => [N, { ..._, reset: T }, P], [N, _, T, P]);
      },
      useQuery(k, N) {
        const j = S(k, N),
          T = A(k, {
            selectFromResult: k === Mt || (N != null && N.skip) ? void 0 : Sh,
            ...N,
          }),
          _ = Zu(T, ...ec);
        return E.useDebugValue(_), E.useMemo(() => ({ ...T, ...j }), [T, j]);
      },
    };
  }
  function p(y) {
    const S = (A, k = {}) => {
        const [N, j, T, _] = v(y, A, k),
          P = E.useRef(_);
        c(() => {
          P.current = _;
        }, [_]);
        const O = E.useCallback(
          function (U, R) {
            let I;
            return (
              t(() => {
                var D;
                (D = N.current) == null || D.unsubscribe(),
                  (N.current = I =
                    j(T(U, { subscriptionOptions: P.current, direction: R })));
              }),
              I
            );
          },
          [N, j, T]
        );
        x(N);
        const L = Ju(k.skip ? Mt : A, al, l.endpointDefinitions[y], y),
          M = E.useCallback(() => b(N), [N]);
        return E.useMemo(
          () => ({
            trigger: O,
            refetch: M,
            fetchNextPage: () => O(L, "forward"),
            fetchPreviousPage: () => O(L, "backward"),
          }),
          [M, O, L]
        );
      },
      C = w(y, g);
    return {
      useInfiniteQueryState: C,
      useInfiniteQuerySubscription: S,
      useInfiniteQuery(A, k) {
        const { refetch: N, fetchNextPage: j, fetchPreviousPage: T } = S(A, k),
          _ = C(A, {
            selectFromResult: A === Mt || (k != null && k.skip) ? void 0 : Sh,
            ...k,
          }),
          P = Zu(_, ...ec, "hasNextPage", "hasPreviousPage");
        return (
          E.useDebugValue(P),
          E.useMemo(
            () => ({
              ..._,
              fetchNextPage: j,
              fetchPreviousPage: T,
              refetch: N,
            }),
            [_, j, T, N]
          )
        );
      },
    };
  }
  function h(y) {
    return ({ selectFromResult: S, fixedCacheKey: C } = {}) => {
      const { select: A, initiate: k } = e.endpoints[y],
        N = r(),
        [j, T] = E.useState();
      E.useEffect(
        () => () => {
          (j != null && j.arg.fixedCacheKey) || j == null || j.reset();
        },
        [j]
      );
      const _ = E.useCallback(
          function (B) {
            const Q = N(k(B, { fixedCacheKey: C }));
            return T(Q), Q;
          },
          [N, k, C]
        ),
        { requestId: P } = j || {},
        O = E.useMemo(
          () =>
            A({
              fixedCacheKey: C,
              requestId: j == null ? void 0 : j.requestId,
            }),
          [C, j, A]
        ),
        L = E.useMemo(() => (S ? o([O], S) : O), [S, O]),
        M = n(L, vs),
        U = C == null ? (j == null ? void 0 : j.arg.originalArgs) : void 0,
        R = E.useCallback(() => {
          t(() => {
            j && T(void 0),
              C &&
                N(
                  e.internalActions.removeMutationResult({
                    requestId: P,
                    fixedCacheKey: C,
                  })
                );
          });
        }, [N, C, j, P]),
        I = Zu(M, ...ec, "endpointName");
      E.useDebugValue(I);
      const D = E.useMemo(
        () => ({ ...M, originalArgs: U, reset: R }),
        [M, U, R]
      );
      return E.useMemo(() => [_, D], [_, D]);
    };
  }
}
var i2 = Symbol(),
  s2 = ({
    batch: e = bE,
    hooks: t = { useDispatch: Hl, useSelector: Vs, useStore: K0 },
    createSelector: r = qd,
    unstable__sideEffectsInRender: n = !1,
    ...i
  } = {}) => ({
    name: i2,
    init(s, { serializeQueryArgs: o }, a) {
      const l = s,
        {
          buildQueryHooks: c,
          buildInfiniteQueryHooks: m,
          buildMutationHook: g,
          usePrefetch: d,
        } = n2({
          api: s,
          moduleOptions: {
            batch: e,
            hooks: t,
            unstable__sideEffectsInRender: n,
            createSelector: r,
          },
          serializeQueryArgs: o,
          context: a,
        });
      return (
        Zi(l, { usePrefetch: d }),
        Zi(a, { batch: e }),
        {
          injectEndpoint(v, w) {
            if (Yk(w)) {
              const {
                useQuery: x,
                useLazyQuery: b,
                useLazyQuerySubscription: f,
                useQueryState: p,
                useQuerySubscription: h,
              } = c(v);
              Zi(l.endpoints[v], {
                useQuery: x,
                useLazyQuery: b,
                useLazyQuerySubscription: f,
                useQueryState: p,
                useQuerySubscription: h,
              }),
                (s[`use${Xo(v)}Query`] = x),
                (s[`useLazy${Xo(v)}Query`] = b);
            }
            if (Xk(w)) {
              const x = g(v);
              Zi(l.endpoints[v], { useMutation: x }),
                (s[`use${Xo(v)}Mutation`] = x);
            } else if (yv(w)) {
              const {
                useInfiniteQuery: x,
                useInfiniteQuerySubscription: b,
                useInfiniteQueryState: f,
              } = m(v);
              Zi(l.endpoints[v], {
                useInfiniteQuery: x,
                useInfiniteQuerySubscription: b,
                useInfiniteQueryState: f,
              }),
                (s[`use${Xo(v)}InfiniteQuery`] = x);
            }
          },
        }
      );
    },
  }),
  vv = hv(gv(), s2());
const o2 = "https://vite-build-bigby-s.vercel.app/",
  di = vv({
    reducerPath: "productsApi",
    baseQuery: lv({ baseUrl: o2, credentials: "include" }),
    tagTypes: ["Product", "Cart", "Signup", "Review", "Login"],
    endpoints: (e) => ({
      forgotPassword: e.mutation({
        query: (t) => ({
          url: "api/users/forgot-password",
          method: "POST",
          body: { email: t },
        }),
      }),
      resetPassword: e.mutation({
        query: ({ token: t, password: r }) => ({
          url: `api/users/reset-password/${t}`,
          method: "POST",
          body: { password: r },
        }),
      }),
      getReviews: e.query({
        query: (t) => `api/reviews?prodId=${t}`,
        providesTags: ["Review"],
      }),
      getProducts: e.query({
        query: () => "api/products",
        providesTags: ["Product"],
      }),
      getCart: e.query({
        query: () => "api/users/cart",
        providesTags: ["Cart"],
      }),
      getOrders: e.query({
        query: () => "api/users/orders",
        providesTags: ["Orders"],
      }),
      getAdminOrders: e.query({
        query: () => "api/admin/orders",
        providesTags: ["Orders"],
      }),
      getMe: e.query({ query: () => "api/users/me" }),
      getAdmin: e.query({ query: () => "api/admin/me" }),
      addProduct: e.mutation({
        query: (t) => ({ url: "api/products/add", method: "POST", body: t }),
        invalidatesTags: ["Product"],
      }),
      addtoCart: e.mutation({
        query: (t) => ({ url: "api/users/cart/add", method: "POST", body: t }),
        invalidatesTags: ["Cart"],
      }),
      addOrder: e.mutation({
        query: (t) => ({
          url: "api/users/orders/add",
          method: "POST",
          body: t,
        }),
        invalidatesTags: ["Orders"],
      }),
      directOrder: e.mutation({
        query: (t) => ({
          url: "api/users/orders/directOrder",
          method: "POST",
          body: t,
        }),
        invalidatesTags: ["Orders"],
      }),
      addReview: e.mutation({
        query: (t) => ({ url: "api/reviews/add", method: "POST", body: t }),
        invalidatesTags: ["Review"],
      }),
      updateCart: e.mutation({
        query: ({ itemId: t, quantity: r }) => ({
          url: `api/users/cart/update/${t}`,
          method: "PATCH",
          body: { quantity: r },
        }),
        async onQueryStarted(
          { itemId: t, quantity: r },
          { dispatch: n, queryFulfilled: i }
        ) {
          const s = n(
            di.util.updateQueryData("getCart", void 0, (o) => {
              const a = o.find((l) => l._id === t);
              a && (a.quantity = r);
            })
          );
          try {
            await i;
          } catch {
            s.undo();
          }
        },
      }),
      removefromCart: e.mutation({
        query: (t) => ({ url: `api/users/cart/remove/${t}`, method: "DELETE" }),
        async onQueryStarted(t, { dispatch: r, queryFulfilled: n }) {
          const i = r(
            di.util.updateQueryData("getCart", void 0, (s) =>
              s.filter((o) => o._id !== t)
            )
          );
          try {
            await n;
          } catch {
            i.undo();
          }
        },
      }),
      signup: e.mutation({
        query: (t) => ({ url: "api/users/signup", method: "POST", body: t }),
        invalidatesTags: ["Signup"],
      }),
      loginWithGoogle: e.mutation({
        query: (t) => ({
          url: "/api/users/auth/google",
          method: "POST",
          body: t,
          credentials: "include",
        }),
      }),
      login: e.mutation({
        query: (t) => ({ url: "api/users/login", method: "POST", body: t }),
        invalidatesTags: ["Login"],
      }),
      adminLogin: e.mutation({
        query: (t) => ({ url: "api/admin/login", method: "POST", body: t }),
        invalidatesTags: ["Login"],
      }),
      adminChangeOrderStatus: e.mutation({
        query: (t) => ({
          url: "api/admin/orders/status",
          method: "POST",
          body: t,
        }),
        invalidatesTags: ["Login"],
      }),
      deleteProduct: e.mutation({
        query: (t) => ({
          url: `api/products/delete/${t}`,
          method: "DELETE",
          invalidatesTags: ["Product"],
        }),
      }),
      deleteReview: e.mutation({
        query: (t) => ({
          url: `api/reviews/delete/${t}`,
          method: "DELETE",
          invalidatesTags: ["Review"],
        }),
      }),
      logout: e.mutation({
        query: () => ({ url: "api/users/logout", method: "POST" }),
      }),
      adminLogout: e.mutation({
        query: () => ({ url: "api/admin/logout", method: "POST" }),
      }),
    }),
  }),
  {
    useGetProductsQuery: Li,
    useGetMeQuery: Di,
    useUpdateCartMutation: a2,
    useLogoutMutation: l2,
    useSignupMutation: u2,
    useLoginMutation: c2,
    useGetCartQuery: ep,
    useAddtoCartMutation: f2,
    useRemovefromCartMutation: d2,
    useAdminLoginMutation: p2,
    useAddProductMutation: m2,
    useDeleteProductMutation: h2,
    useAddOrderMutation: g2,
    useGetOrdersQuery: y2,
    useGetAdminOrdersQuery: v2,
    useAdminChangeOrderStatusMutation: x2,
    useGetAdminQuery: w2,
    useAdminLogoutMutation: S2,
    useGetReviewsQuery: xv,
    useAddReviewMutation: b2,
    useDeleteReviewMutation: A2,
    useLoginWithGoogleMutation: C2,
    useForgotPasswordMutation: E2,
    useResetPasswordMutation: k2,
    useDirectOrderMutation: j2,
  } = di;
function N2({
  showForm: e,
  setShowForm: t,
  setShowDropdown: r,
  showDropdown: n,
}) {
  const i = Vs((f) => f.Slice.items),
    { data: s, isLoading: o, isError: a, isSuccess: l, refetch: c } = Di(),
    [m] = l2(),
    g = et(),
    { data: d, isFetching: v } = ep(),
    [w, x] = E.useState(!1),
    b = () =>
      l && !v && Array.isArray(d)
        ? d.reduce((f, p) => f + Number(p.quantity), 0)
        : i.reduce((f, p) => f + Number(p.quantity), 0);
  return u.jsx(u.Fragment, {
    children: u.jsxs("div", {
      className:
        "py-7 border-b border-gray-400 flex justify-between relative items-center",
      children: [
        u.jsx(ZC, { setShowMenu: x, showMenu: w ? "left-0" : "-left-[100%]" }),
        u.jsx("img", {
          onClick: () => g("/"),
          src: Rd,
          className: "h-6 cursor-pointer",
          alt: "",
        }),
        u.jsxs("div", {
          className: "sm:flex text-sm  hidden gap-5 outfit [&>*]:opacity-90",
          children: [
            " ",
            u.jsx(Ir, { to: "/", className: "", children: "HOME" }),
            " ",
            u.jsx(Ir, {
              to: "Collection",
              className: "",
              children: " COLLECTION",
            }),
            u.jsx(Ir, { to: "/About", className: "", children: "ABOUT" }),
            u.jsx(Ir, { to: "Contact", className: "", children: "CONTACT" }),
          ],
        }),
        u.jsxs("div", {
          className: "relative flex items-center gap-6 ",
          children: [
            u.jsx("button", {
              onClick: () => {
                t(!0), g("/collection");
              },
              className: "w-5  h-5",
              children: u.jsx("img", {
                className: "w-full h-full",
                src: VC,
                alt: "",
              }),
            }),
            u.jsxs("button", {
              onClick: () => {
                o || (l && s != null && s.user ? r((f) => !f) : g("/Login"));
              },
              className: "w-5 h-5 ",
              children: [
                u.jsx("img", { className: "w-full h-full ", src: HC, alt: "" }),
                "  ",
              ],
            }),
            u.jsxs("button", {
              onClick: () => g("/Cart"),
              className: "relative w-5 h-5",
              children: [
                " ",
                u.jsx("img", { src: Bw, alt: "", className: "w-full h-full" }),
                " ",
                u.jsx("span", {
                  className:
                    "absolute -bottom-1.5 -right-1.5 text-white bg-black text-[8px] flex justify-center items-center w-3.5 h-3.5 rounded-full",
                  children: b(),
                }),
                " ",
              ],
            }),
            u.jsx("button", {
              onClick: () => x(!0),
              className: "w-5 sm:hidden h-3.5",
              children: u.jsx("img", {
                className: "w-full h-full",
                src: Fw,
                alt: "",
              }),
            }),
            n &&
              (s == null ? void 0 : s.user) &&
              u.jsxs("div", {
                className:
                  "absolute flex z-50 flex-col gap-2 px-5 py-3 text-gray-500 rounded -bottom-32 outfit right-20 sm:right-10 w-36 bg-slate-100",
                children: [
                  u.jsx("p", {
                    className: "cursor-pointer hover:text-black",
                    children: "Source Code",
                  }),
                  u.jsx("p", {
                    onClick: () => g("/orders"),
                    className: "cursor-pointer hover:text-black",
                    children: "Orders",
                  }),
                  u.jsx("p", {
                    onClick: () => {
                      m(), g("/"), window.location.reload();
                    },
                    className: "cursor-pointer hover:text-black",
                    children: "Logout",
                  }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
}
var T2 = {},
  Jl = {},
  tp = {},
  tc = {},
  bh;
function _2() {
  return (
    bh ||
      ((bh = 1),
      (function (e) {
        (function (t, r) {
          r(e, E, o0());
        })(Hh, function (t, r, n) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.setHasSupportToCaptureOption = w);
          var i = o(r),
            s = o(n);
          function o(p) {
            return p && p.__esModule ? p : { default: p };
          }
          var a =
            Object.assign ||
            function (p) {
              for (var h = 1; h < arguments.length; h++) {
                var y = arguments[h];
                for (var S in y)
                  Object.prototype.hasOwnProperty.call(y, S) && (p[S] = y[S]);
              }
              return p;
            };
          function l(p, h) {
            var y = {};
            for (var S in p)
              h.indexOf(S) >= 0 ||
                (Object.prototype.hasOwnProperty.call(p, S) && (y[S] = p[S]));
            return y;
          }
          function c(p, h) {
            if (!(p instanceof h))
              throw new TypeError("Cannot call a class as a function");
          }
          var m = (function () {
            function p(h, y) {
              for (var S = 0; S < y.length; S++) {
                var C = y[S];
                (C.enumerable = C.enumerable || !1),
                  (C.configurable = !0),
                  "value" in C && (C.writable = !0),
                  Object.defineProperty(h, C.key, C);
              }
            }
            return function (h, y, S) {
              return y && p(h.prototype, y), S && p(h, S), h;
            };
          })();
          function g(p, h) {
            if (!p)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return h && (typeof h == "object" || typeof h == "function")
              ? h
              : p;
          }
          function d(p, h) {
            if (typeof h != "function" && h !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof h
              );
            (p.prototype = Object.create(h && h.prototype, {
              constructor: {
                value: p,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              h &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(p, h)
                  : (p.__proto__ = h));
          }
          var v = !1;
          function w(p) {
            v = p;
          }
          try {
            addEventListener(
              "test",
              null,
              Object.defineProperty({}, "capture", {
                get: function () {
                  w(!0);
                },
              })
            );
          } catch {}
          function x() {
            var p =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : { capture: !0 };
            return v ? p : p.capture;
          }
          function b(p) {
            if ("touches" in p) {
              var h = p.touches[0],
                y = h.pageX,
                S = h.pageY;
              return { x: y, y: S };
            }
            var C = p.screenX,
              A = p.screenY;
            return { x: C, y: A };
          }
          var f = (function (p) {
            d(h, p);
            function h() {
              var y;
              c(this, h);
              for (var S = arguments.length, C = Array(S), A = 0; A < S; A++)
                C[A] = arguments[A];
              var k = g(
                this,
                (y = h.__proto__ || Object.getPrototypeOf(h)).call.apply(
                  y,
                  [this].concat(C)
                )
              );
              return (
                (k._handleSwipeStart = k._handleSwipeStart.bind(k)),
                (k._handleSwipeMove = k._handleSwipeMove.bind(k)),
                (k._handleSwipeEnd = k._handleSwipeEnd.bind(k)),
                (k._onMouseDown = k._onMouseDown.bind(k)),
                (k._onMouseMove = k._onMouseMove.bind(k)),
                (k._onMouseUp = k._onMouseUp.bind(k)),
                (k._setSwiperRef = k._setSwiperRef.bind(k)),
                k
              );
            }
            return (
              m(h, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.swiper &&
                      this.swiper.addEventListener(
                        "touchmove",
                        this._handleSwipeMove,
                        x({ capture: !0, passive: !1 })
                      );
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.swiper &&
                      this.swiper.removeEventListener(
                        "touchmove",
                        this._handleSwipeMove,
                        x({ capture: !0, passive: !1 })
                      );
                  },
                },
                {
                  key: "_onMouseDown",
                  value: function (S) {
                    this.props.allowMouseEvents &&
                      ((this.mouseDown = !0),
                      document.addEventListener("mouseup", this._onMouseUp),
                      document.addEventListener("mousemove", this._onMouseMove),
                      this._handleSwipeStart(S));
                  },
                },
                {
                  key: "_onMouseMove",
                  value: function (S) {
                    this.mouseDown && this._handleSwipeMove(S);
                  },
                },
                {
                  key: "_onMouseUp",
                  value: function (S) {
                    (this.mouseDown = !1),
                      document.removeEventListener("mouseup", this._onMouseUp),
                      document.removeEventListener(
                        "mousemove",
                        this._onMouseMove
                      ),
                      this._handleSwipeEnd(S);
                  },
                },
                {
                  key: "_handleSwipeStart",
                  value: function (S) {
                    var C = b(S),
                      A = C.x,
                      k = C.y;
                    (this.moveStart = { x: A, y: k }),
                      this.props.onSwipeStart(S);
                  },
                },
                {
                  key: "_handleSwipeMove",
                  value: function (S) {
                    if (this.moveStart) {
                      var C = b(S),
                        A = C.x,
                        k = C.y,
                        N = A - this.moveStart.x,
                        j = k - this.moveStart.y;
                      this.moving = !0;
                      var T = this.props.onSwipeMove({ x: N, y: j }, S);
                      T && S.cancelable && S.preventDefault(),
                        (this.movePosition = { deltaX: N, deltaY: j });
                    }
                  },
                },
                {
                  key: "_handleSwipeEnd",
                  value: function (S) {
                    this.props.onSwipeEnd(S);
                    var C = this.props.tolerance;
                    this.moving &&
                      this.movePosition &&
                      (this.movePosition.deltaX < -C
                        ? this.props.onSwipeLeft(1, S)
                        : this.movePosition.deltaX > C &&
                          this.props.onSwipeRight(1, S),
                      this.movePosition.deltaY < -C
                        ? this.props.onSwipeUp(1, S)
                        : this.movePosition.deltaY > C &&
                          this.props.onSwipeDown(1, S)),
                      (this.moveStart = null),
                      (this.moving = !1),
                      (this.movePosition = null);
                  },
                },
                {
                  key: "_setSwiperRef",
                  value: function (S) {
                    (this.swiper = S), this.props.innerRef(S);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var S = this.props;
                    S.tagName;
                    var C = S.className,
                      A = S.style,
                      k = S.children;
                    S.allowMouseEvents,
                      S.onSwipeUp,
                      S.onSwipeDown,
                      S.onSwipeLeft,
                      S.onSwipeRight,
                      S.onSwipeStart,
                      S.onSwipeMove,
                      S.onSwipeEnd,
                      S.innerRef,
                      S.tolerance;
                    var N = l(S, [
                      "tagName",
                      "className",
                      "style",
                      "children",
                      "allowMouseEvents",
                      "onSwipeUp",
                      "onSwipeDown",
                      "onSwipeLeft",
                      "onSwipeRight",
                      "onSwipeStart",
                      "onSwipeMove",
                      "onSwipeEnd",
                      "innerRef",
                      "tolerance",
                    ]);
                    return i.default.createElement(
                      this.props.tagName,
                      a(
                        {
                          ref: this._setSwiperRef,
                          onMouseDown: this._onMouseDown,
                          onTouchStart: this._handleSwipeStart,
                          onTouchEnd: this._handleSwipeEnd,
                          className: C,
                          style: A,
                        },
                        N
                      ),
                      k
                    );
                  },
                },
              ]),
              h
            );
          })(r.Component);
          (f.displayName = "ReactSwipe"),
            (f.propTypes = {
              tagName: s.default.string,
              className: s.default.string,
              style: s.default.object,
              children: s.default.node,
              allowMouseEvents: s.default.bool,
              onSwipeUp: s.default.func,
              onSwipeDown: s.default.func,
              onSwipeLeft: s.default.func,
              onSwipeRight: s.default.func,
              onSwipeStart: s.default.func,
              onSwipeMove: s.default.func,
              onSwipeEnd: s.default.func,
              innerRef: s.default.func,
              tolerance: s.default.number.isRequired,
            }),
            (f.defaultProps = {
              tagName: "div",
              allowMouseEvents: !1,
              onSwipeUp: function () {},
              onSwipeDown: function () {},
              onSwipeLeft: function () {},
              onSwipeRight: function () {},
              onSwipeStart: function () {},
              onSwipeMove: function () {},
              onSwipeEnd: function () {},
              innerRef: function () {},
              tolerance: 0,
            }),
            (t.default = f);
        });
      })(tc)),
    tc
  );
}
(function (e) {
  (function (t, r) {
    r(e, _2());
  })(Hh, function (t, r) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = i(r);
    function i(s) {
      return s && s.__esModule ? s : { default: s };
    }
    t.default = n.default;
  });
})(tp);
var vo = {},
  wv = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", o = 0; o < arguments.length; o++) {
        var a = arguments[o];
        a && (s = i(s, n(a)));
      }
      return s;
    }
    function n(s) {
      if (typeof s == "string" || typeof s == "number") return s;
      if (typeof s != "object") return "";
      if (Array.isArray(s)) return r.apply(null, s);
      if (
        s.toString !== Object.prototype.toString &&
        !s.toString.toString().includes("[native code]")
      )
        return s.toString();
      var o = "";
      for (var a in s) t.call(s, a) && s[a] && (o = i(o, a));
      return o;
    }
    function i(s, o) {
      return o ? (s ? s + " " + o : s + o) : s;
    }
    e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
  })();
})(wv);
var P2 = wv.exports;
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.default = void 0;
var Er = O2(P2);
function O2(e) {
  return e && e.__esModule ? e : { default: e };
}
function R2(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var I2 = {
  ROOT: function (t) {
    return (0, Er.default)(R2({ "carousel-root": !0 }, t || "", !!t));
  },
  CAROUSEL: function (t) {
    return (0, Er.default)({ carousel: !0, "carousel-slider": t });
  },
  WRAPPER: function (t, r) {
    return (0, Er.default)({
      "thumbs-wrapper": !t,
      "slider-wrapper": t,
      "axis-horizontal": r === "horizontal",
      "axis-vertical": r !== "horizontal",
    });
  },
  SLIDER: function (t, r) {
    return (0, Er.default)({ thumbs: !t, slider: t, animated: !r });
  },
  ITEM: function (t, r, n) {
    return (0, Er.default)({ thumb: !t, slide: t, selected: r, previous: n });
  },
  ARROW_PREV: function (t) {
    return (0, Er.default)({
      "control-arrow control-prev": !0,
      "control-disabled": t,
    });
  },
  ARROW_NEXT: function (t) {
    return (0, Er.default)({
      "control-arrow control-next": !0,
      "control-disabled": t,
    });
  },
  DOT: function (t) {
    return (0, Er.default)({ dot: !0, selected: t });
  },
};
vo.default = I2;
var xo = {},
  Zl = {};
Object.defineProperty(Zl, "__esModule", { value: !0 });
Zl.outerWidth = void 0;
var M2 = function (t) {
  var r = t.offsetWidth,
    n = getComputedStyle(t);
  return (r += parseInt(n.marginLeft) + parseInt(n.marginRight)), r;
};
Zl.outerWidth = M2;
var zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.default = void 0;
var L2 = function (t, r, n) {
  var i = t === 0 ? t : t + r,
    s = n === "horizontal" ? [i, 0, 0] : [0, i, 0],
    o = "translate3d",
    a = "(" + s.join(",") + ")";
  return o + a;
};
zi.default = L2;
var wo = {};
Object.defineProperty(wo, "__esModule", { value: !0 });
wo.default = void 0;
var D2 = function () {
  return window;
};
wo.default = D2;
Object.defineProperty(xo, "__esModule", { value: !0 });
xo.default = void 0;
var Pt = B2(E),
  sn = eu(vo),
  z2 = Zl,
  Ah = eu(zi),
  U2 = eu(tp),
  Jo = eu(wo);
function eu(e) {
  return e && e.__esModule ? e : { default: e };
}
function Sv() {
  if (typeof WeakMap != "function") return null;
  var e = new WeakMap();
  return (
    (Sv = function () {
      return e;
    }),
    e
  );
}
function B2(e) {
  if (e && e.__esModule) return e;
  if (e === null || (Ss(e) !== "object" && typeof e != "function"))
    return { default: e };
  var t = Sv();
  if (t && t.has(e)) return t.get(e);
  var r = {},
    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      var s = n ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), t && t.set(e, r), r;
}
function Ss(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ss = function (r) {
          return typeof r;
        })
      : (Ss = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Ss(e)
  );
}
function Sf() {
  return (
    (Sf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Sf.apply(this, arguments)
  );
}
function F2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function Q2(e, t, r) {
  return t && $2(e.prototype, t), e;
}
function W2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && bf(e, t);
}
function bf(e, t) {
  return (
    (bf =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    bf(e, t)
  );
}
function H2(e) {
  var t = V2();
  return function () {
    var n = ll(e),
      i;
    if (t) {
      var s = ll(this).constructor;
      i = Reflect.construct(n, arguments, s);
    } else i = n.apply(this, arguments);
    return K2(this, i);
  };
}
function K2(e, t) {
  return t && (Ss(t) === "object" || typeof t == "function") ? t : qe(e);
}
function qe(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function V2() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch {
    return !1;
  }
}
function ll(e) {
  return (
    (ll = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ll(e)
  );
}
function We(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var q2 = function (t) {
    return t.hasOwnProperty("key");
  },
  rp = (function (e) {
    W2(r, e);
    var t = H2(r);
    function r(n) {
      var i;
      return (
        F2(this, r),
        (i = t.call(this, n)),
        We(qe(i), "itemsWrapperRef", void 0),
        We(qe(i), "itemsListRef", void 0),
        We(qe(i), "thumbsRef", void 0),
        We(qe(i), "setItemsWrapperRef", function (s) {
          i.itemsWrapperRef = s;
        }),
        We(qe(i), "setItemsListRef", function (s) {
          i.itemsListRef = s;
        }),
        We(qe(i), "setThumbsRef", function (s, o) {
          i.thumbsRef || (i.thumbsRef = []), (i.thumbsRef[o] = s);
        }),
        We(qe(i), "updateSizes", function () {
          if (!(!i.props.children || !i.itemsWrapperRef || !i.thumbsRef)) {
            var s = Pt.Children.count(i.props.children),
              o = i.itemsWrapperRef.clientWidth,
              a = i.props.thumbWidth
                ? i.props.thumbWidth
                : (0, z2.outerWidth)(i.thumbsRef[0]),
              l = Math.floor(o / a),
              c = l < s,
              m = c ? s - l : 0;
            i.setState(function (g, d) {
              return {
                itemSize: a,
                visibleItems: l,
                firstItem: c ? i.getFirstItem(d.selectedItem) : 0,
                lastPosition: m,
                showArrows: c,
              };
            });
          }
        }),
        We(qe(i), "handleClickItem", function (s, o, a) {
          if (!q2(a) || a.key === "Enter") {
            var l = i.props.onSelectItem;
            typeof l == "function" && l(s, o);
          }
        }),
        We(qe(i), "onSwipeStart", function () {
          i.setState({ swiping: !0 });
        }),
        We(qe(i), "onSwipeEnd", function () {
          i.setState({ swiping: !1 });
        }),
        We(qe(i), "onSwipeMove", function (s) {
          var o = s.x;
          if (!i.state.itemSize || !i.itemsWrapperRef || !i.state.visibleItems)
            return !1;
          var a = 0,
            l = Pt.Children.count(i.props.children),
            c = -(i.state.firstItem * 100) / i.state.visibleItems,
            m = Math.max(l - i.state.visibleItems, 0),
            g = (-m * 100) / i.state.visibleItems;
          c === a && o > 0 && (o = 0), c === g && o < 0 && (o = 0);
          var d = i.itemsWrapperRef.clientWidth,
            v = c + 100 / (d / o);
          return (
            i.itemsListRef &&
              [
                "WebkitTransform",
                "MozTransform",
                "MsTransform",
                "OTransform",
                "transform",
                "msTransform",
              ].forEach(function (w) {
                i.itemsListRef.style[w] = (0, Ah.default)(v, "%", i.props.axis);
              }),
            !0
          );
        }),
        We(qe(i), "slideRight", function (s) {
          i.moveTo(i.state.firstItem - (typeof s == "number" ? s : 1));
        }),
        We(qe(i), "slideLeft", function (s) {
          i.moveTo(i.state.firstItem + (typeof s == "number" ? s : 1));
        }),
        We(qe(i), "moveTo", function (s) {
          (s = s < 0 ? 0 : s),
            (s = s >= i.state.lastPosition ? i.state.lastPosition : s),
            i.setState({ firstItem: s });
        }),
        (i.state = {
          selectedItem: n.selectedItem,
          swiping: !1,
          showArrows: !1,
          firstItem: 0,
          visibleItems: 0,
          lastPosition: 0,
        }),
        i
      );
    }
    return (
      Q2(r, [
        {
          key: "componentDidMount",
          value: function () {
            this.setupThumbs();
          },
        },
        {
          key: "componentDidUpdate",
          value: function (i) {
            this.props.selectedItem !== this.state.selectedItem &&
              this.setState({
                selectedItem: this.props.selectedItem,
                firstItem: this.getFirstItem(this.props.selectedItem),
              }),
              this.props.children !== i.children && this.updateSizes();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.destroyThumbs();
          },
        },
        {
          key: "setupThumbs",
          value: function () {
            (0, Jo.default)().addEventListener("resize", this.updateSizes),
              (0, Jo.default)().addEventListener(
                "DOMContentLoaded",
                this.updateSizes
              ),
              this.updateSizes();
          },
        },
        {
          key: "destroyThumbs",
          value: function () {
            (0, Jo.default)().removeEventListener("resize", this.updateSizes),
              (0, Jo.default)().removeEventListener(
                "DOMContentLoaded",
                this.updateSizes
              );
          },
        },
        {
          key: "getFirstItem",
          value: function (i) {
            var s = i;
            return (
              i >= this.state.lastPosition && (s = this.state.lastPosition),
              i < this.state.firstItem + this.state.visibleItems &&
                (s = this.state.firstItem),
              i < this.state.firstItem && (s = i),
              s
            );
          },
        },
        {
          key: "renderItems",
          value: function () {
            var i = this;
            return this.props.children.map(function (s, o) {
              var a = sn.default.ITEM(!1, o === i.state.selectedItem),
                l = {
                  key: o,
                  ref: function (m) {
                    return i.setThumbsRef(m, o);
                  },
                  className: a,
                  onClick: i.handleClickItem.bind(i, o, i.props.children[o]),
                  onKeyDown: i.handleClickItem.bind(i, o, i.props.children[o]),
                  "aria-label": ""
                    .concat(i.props.labels.item, " ")
                    .concat(o + 1),
                  style: { width: i.props.thumbWidth },
                };
              return Pt.default.createElement(
                "li",
                Sf({}, l, { role: "button", tabIndex: 0 }),
                s
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var i = this;
            if (!this.props.children) return null;
            var s = Pt.Children.count(this.props.children) > 1,
              o = this.state.showArrows && this.state.firstItem > 0,
              a =
                this.state.showArrows &&
                this.state.firstItem < this.state.lastPosition,
              l = {},
              c = -this.state.firstItem * (this.state.itemSize || 0),
              m = (0, Ah.default)(c, "px", this.props.axis),
              g = this.props.transitionTime + "ms";
            return (
              (l = {
                WebkitTransform: m,
                MozTransform: m,
                MsTransform: m,
                OTransform: m,
                transform: m,
                msTransform: m,
                WebkitTransitionDuration: g,
                MozTransitionDuration: g,
                MsTransitionDuration: g,
                OTransitionDuration: g,
                transitionDuration: g,
                msTransitionDuration: g,
              }),
              Pt.default.createElement(
                "div",
                { className: sn.default.CAROUSEL(!1) },
                Pt.default.createElement(
                  "div",
                  {
                    className: sn.default.WRAPPER(!1),
                    ref: this.setItemsWrapperRef,
                  },
                  Pt.default.createElement("button", {
                    type: "button",
                    className: sn.default.ARROW_PREV(!o),
                    onClick: function () {
                      return i.slideRight();
                    },
                    "aria-label": this.props.labels.leftArrow,
                  }),
                  s
                    ? Pt.default.createElement(
                        U2.default,
                        {
                          tagName: "ul",
                          className: sn.default.SLIDER(!1, this.state.swiping),
                          onSwipeLeft: this.slideLeft,
                          onSwipeRight: this.slideRight,
                          onSwipeMove: this.onSwipeMove,
                          onSwipeStart: this.onSwipeStart,
                          onSwipeEnd: this.onSwipeEnd,
                          style: l,
                          innerRef: this.setItemsListRef,
                          allowMouseEvents: this.props.emulateTouch,
                        },
                        this.renderItems()
                      )
                    : Pt.default.createElement(
                        "ul",
                        {
                          className: sn.default.SLIDER(!1, this.state.swiping),
                          ref: function (v) {
                            return i.setItemsListRef(v);
                          },
                          style: l,
                        },
                        this.renderItems()
                      ),
                  Pt.default.createElement("button", {
                    type: "button",
                    className: sn.default.ARROW_NEXT(!a),
                    onClick: function () {
                      return i.slideLeft();
                    },
                    "aria-label": this.props.labels.rightArrow,
                  })
                )
              )
            );
          },
        },
      ]),
      r
    );
  })(Pt.Component);
xo.default = rp;
We(rp, "displayName", "Thumbs");
We(rp, "defaultProps", {
  axis: "horizontal",
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item",
  },
  selectedItem: 0,
  thumbWidth: 80,
  transitionTime: 350,
});
var tu = {};
Object.defineProperty(tu, "__esModule", { value: !0 });
tu.default = void 0;
var Y2 = function () {
  return document;
};
tu.default = Y2;
var pt = {};
Object.defineProperty(pt, "__esModule", { value: !0 });
pt.setPosition =
  pt.getPosition =
  pt.isKeyboardEvent =
  pt.defaultStatusFormatter =
  pt.noop =
    void 0;
var X2 = E,
  G2 = J2(zi);
function J2(e) {
  return e && e.__esModule ? e : { default: e };
}
var Z2 = function () {};
pt.noop = Z2;
var ej = function (t, r) {
  return "".concat(t, " of ").concat(r);
};
pt.defaultStatusFormatter = ej;
var tj = function (t) {
  return t ? t.hasOwnProperty("key") : !1;
};
pt.isKeyboardEvent = tj;
var rj = function (t, r) {
  if ((r.infiniteLoop && ++t, t === 0)) return 0;
  var n = X2.Children.count(r.children);
  if (r.centerMode && r.axis === "horizontal") {
    var i = -t * r.centerSlidePercentage,
      s = n - 1;
    return (
      t && (t !== s || r.infiniteLoop)
        ? (i += (100 - r.centerSlidePercentage) / 2)
        : t === s && (i += 100 - r.centerSlidePercentage),
      i
    );
  }
  return -t * 100;
};
pt.getPosition = rj;
var nj = function (t, r) {
  var n = {};
  return (
    [
      "WebkitTransform",
      "MozTransform",
      "MsTransform",
      "OTransform",
      "transform",
      "msTransform",
    ].forEach(function (i) {
      n[i] = (0, G2.default)(t, "%", r);
    }),
    n
  );
};
pt.setPosition = nj;
var Zt = {};
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.fadeAnimationHandler =
  Zt.slideStopSwipingHandler =
  Zt.slideSwipeAnimationHandler =
  Zt.slideAnimationHandler =
    void 0;
var bv = E,
  ij = sj(zi),
  er = pt;
function sj(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ch(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function fn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ch(Object(r), !0).forEach(function (n) {
          oj(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ch(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function oj(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var aj = function (t, r) {
  var n = {},
    i = r.selectedItem,
    s = i,
    o = bv.Children.count(t.children) - 1,
    a = t.infiniteLoop && (i < 0 || i > o);
  if (a)
    return (
      s < 0
        ? t.centerMode && t.centerSlidePercentage && t.axis === "horizontal"
          ? (n.itemListStyle = (0, er.setPosition)(
              -(o + 2) * t.centerSlidePercentage -
                (100 - t.centerSlidePercentage) / 2,
              t.axis
            ))
          : (n.itemListStyle = (0, er.setPosition)(-(o + 2) * 100, t.axis))
        : s > o && (n.itemListStyle = (0, er.setPosition)(0, t.axis)),
      n
    );
  var l = (0, er.getPosition)(i, t),
    c = (0, ij.default)(l, "%", t.axis),
    m = t.transitionTime + "ms";
  return (
    (n.itemListStyle = {
      WebkitTransform: c,
      msTransform: c,
      OTransform: c,
      transform: c,
    }),
    r.swiping ||
      (n.itemListStyle = fn(
        fn({}, n.itemListStyle),
        {},
        {
          WebkitTransitionDuration: m,
          MozTransitionDuration: m,
          OTransitionDuration: m,
          transitionDuration: m,
          msTransitionDuration: m,
        }
      )),
    n
  );
};
Zt.slideAnimationHandler = aj;
var lj = function (t, r, n, i) {
  var s = {},
    o = r.axis === "horizontal",
    a = bv.Children.count(r.children),
    l = 0,
    c = (0, er.getPosition)(n.selectedItem, r),
    m = r.infiniteLoop
      ? (0, er.getPosition)(a - 1, r) - 100
      : (0, er.getPosition)(a - 1, r),
    g = o ? t.x : t.y,
    d = g;
  c === l && g > 0 && (d = 0), c === m && g < 0 && (d = 0);
  var v = c + 100 / (n.itemSize / d),
    w = Math.abs(g) > r.swipeScrollTolerance;
  return (
    r.infiniteLoop &&
      w &&
      (n.selectedItem === 0 && v > -100
        ? (v -= a * 100)
        : n.selectedItem === a - 1 && v < -a * 100 && (v += a * 100)),
    (!r.preventMovementUntilSwipeScrollTolerance ||
      w ||
      n.swipeMovementStarted) &&
      (n.swipeMovementStarted || i({ swipeMovementStarted: !0 }),
      (s.itemListStyle = (0, er.setPosition)(v, r.axis))),
    w && !n.cancelClick && i({ cancelClick: !0 }),
    s
  );
};
Zt.slideSwipeAnimationHandler = lj;
var uj = function (t, r) {
  var n = (0, er.getPosition)(r.selectedItem, t),
    i = (0, er.setPosition)(n, t.axis);
  return { itemListStyle: i };
};
Zt.slideStopSwipingHandler = uj;
var cj = function (t, r) {
  var n = t.transitionTime + "ms",
    i = "ease-in-out",
    s = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: i,
      msTransitionTimingFunction: i,
      MozTransitionTimingFunction: i,
      WebkitTransitionTimingFunction: i,
      OTransitionTimingFunction: i,
    };
  return (
    r.swiping ||
      (s = fn(
        fn({}, s),
        {},
        {
          WebkitTransitionDuration: n,
          MozTransitionDuration: n,
          OTransitionDuration: n,
          transitionDuration: n,
          msTransitionDuration: n,
        }
      )),
    {
      slideStyle: s,
      selectedStyle: fn(fn({}, s), {}, { opacity: 1, position: "relative" }),
      prevStyle: fn({}, s),
    }
  );
};
Zt.fadeAnimationHandler = cj;
Object.defineProperty(Jl, "__esModule", { value: !0 });
Jl.default = void 0;
var oe = pj(E),
  fj = So(tp),
  cr = So(vo),
  dj = So(xo),
  Zo = So(tu),
  ea = So(wo),
  os = pt,
  ul = Zt;
function So(e) {
  return e && e.__esModule ? e : { default: e };
}
function Av() {
  if (typeof WeakMap != "function") return null;
  var e = new WeakMap();
  return (
    (Av = function () {
      return e;
    }),
    e
  );
}
function pj(e) {
  if (e && e.__esModule) return e;
  if (e === null || (bs(e) !== "object" && typeof e != "function"))
    return { default: e };
  var t = Av();
  if (t && t.has(e)) return t.get(e);
  var r = {},
    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      var s = n ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), t && t.set(e, r), r;
}
function bs(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (bs = function (r) {
          return typeof r;
        })
      : (bs = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    bs(e)
  );
}
function Af() {
  return (
    (Af =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Af.apply(this, arguments)
  );
}
function Eh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Eh(Object(r), !0).forEach(function (n) {
          Y(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Eh(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function mj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hj(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function gj(e, t, r) {
  return t && hj(e.prototype, t), e;
}
function yj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Cf(e, t);
}
function Cf(e, t) {
  return (
    (Cf =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Cf(e, t)
  );
}
function vj(e) {
  var t = wj();
  return function () {
    var n = cl(e),
      i;
    if (t) {
      var s = cl(this).constructor;
      i = Reflect.construct(n, arguments, s);
    } else i = n.apply(this, arguments);
    return xj(this, i);
  };
}
function xj(e, t) {
  return t && (bs(t) === "object" || typeof t == "function") ? t : G(e);
}
function G(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function wj() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch {
    return !1;
  }
}
function cl(e) {
  return (
    (cl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    cl(e)
  );
}
function Y(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var np = (function (e) {
  yj(r, e);
  var t = vj(r);
  function r(n) {
    var i;
    mj(this, r),
      (i = t.call(this, n)),
      Y(G(i), "thumbsRef", void 0),
      Y(G(i), "carouselWrapperRef", void 0),
      Y(G(i), "listRef", void 0),
      Y(G(i), "itemsRef", void 0),
      Y(G(i), "timer", void 0),
      Y(G(i), "animationHandler", void 0),
      Y(G(i), "setThumbsRef", function (o) {
        i.thumbsRef = o;
      }),
      Y(G(i), "setCarouselWrapperRef", function (o) {
        i.carouselWrapperRef = o;
      }),
      Y(G(i), "setListRef", function (o) {
        i.listRef = o;
      }),
      Y(G(i), "setItemsRef", function (o, a) {
        i.itemsRef || (i.itemsRef = []), (i.itemsRef[a] = o);
      }),
      Y(G(i), "autoPlay", function () {
        oe.Children.count(i.props.children) <= 1 ||
          (i.clearAutoPlay(),
          i.props.autoPlay &&
            (i.timer = setTimeout(function () {
              i.increment();
            }, i.props.interval)));
      }),
      Y(G(i), "clearAutoPlay", function () {
        i.timer && clearTimeout(i.timer);
      }),
      Y(G(i), "resetAutoPlay", function () {
        i.clearAutoPlay(), i.autoPlay();
      }),
      Y(G(i), "stopOnHover", function () {
        i.setState({ isMouseEntered: !0 }, i.clearAutoPlay);
      }),
      Y(G(i), "startOnLeave", function () {
        i.setState({ isMouseEntered: !1 }, i.autoPlay);
      }),
      Y(G(i), "isFocusWithinTheCarousel", function () {
        return i.carouselWrapperRef
          ? !!(
              (0, Zo.default)().activeElement === i.carouselWrapperRef ||
              i.carouselWrapperRef.contains((0, Zo.default)().activeElement)
            )
          : !1;
      }),
      Y(G(i), "navigateWithKeyboard", function (o) {
        if (i.isFocusWithinTheCarousel()) {
          var a = i.props.axis,
            l = a === "horizontal",
            c = { ArrowUp: 38, ArrowRight: 39, ArrowDown: 40, ArrowLeft: 37 },
            m = l ? c.ArrowRight : c.ArrowDown,
            g = l ? c.ArrowLeft : c.ArrowUp;
          m === o.keyCode ? i.increment() : g === o.keyCode && i.decrement();
        }
      }),
      Y(G(i), "updateSizes", function () {
        if (!(!i.state.initialized || !i.itemsRef || i.itemsRef.length === 0)) {
          var o = i.props.axis === "horizontal",
            a = i.itemsRef[0];
          if (a) {
            var l = o ? a.clientWidth : a.clientHeight;
            i.setState({ itemSize: l }),
              i.thumbsRef && i.thumbsRef.updateSizes();
          }
        }
      }),
      Y(G(i), "setMountState", function () {
        i.setState({ hasMount: !0 }), i.updateSizes();
      }),
      Y(G(i), "handleClickItem", function (o, a) {
        if (oe.Children.count(i.props.children) !== 0) {
          if (i.state.cancelClick) {
            i.setState({ cancelClick: !1 });
            return;
          }
          i.props.onClickItem(o, a),
            o !== i.state.selectedItem && i.setState({ selectedItem: o });
        }
      }),
      Y(G(i), "handleOnChange", function (o, a) {
        oe.Children.count(i.props.children) <= 1 || i.props.onChange(o, a);
      }),
      Y(G(i), "handleClickThumb", function (o, a) {
        i.props.onClickThumb(o, a), i.moveTo(o);
      }),
      Y(G(i), "onSwipeStart", function (o) {
        i.setState({ swiping: !0 }), i.props.onSwipeStart(o);
      }),
      Y(G(i), "onSwipeEnd", function (o) {
        i.setState({ swiping: !1, cancelClick: !1, swipeMovementStarted: !1 }),
          i.props.onSwipeEnd(o),
          i.clearAutoPlay(),
          i.state.autoPlay && i.autoPlay();
      }),
      Y(G(i), "onSwipeMove", function (o, a) {
        i.props.onSwipeMove(a);
        var l = i.props.swipeAnimationHandler(
          o,
          i.props,
          i.state,
          i.setState.bind(G(i))
        );
        return i.setState(Ot({}, l)), !!Object.keys(l).length;
      }),
      Y(G(i), "decrement", function () {
        var o =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        i.moveTo(i.state.selectedItem - (typeof o == "number" ? o : 1));
      }),
      Y(G(i), "increment", function () {
        var o =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        i.moveTo(i.state.selectedItem + (typeof o == "number" ? o : 1));
      }),
      Y(G(i), "moveTo", function (o) {
        if (typeof o == "number") {
          var a = oe.Children.count(i.props.children) - 1;
          o < 0 && (o = i.props.infiniteLoop ? a : 0),
            o > a && (o = i.props.infiniteLoop ? 0 : a),
            i.selectItem({ selectedItem: o }),
            i.state.autoPlay &&
              i.state.isMouseEntered === !1 &&
              i.resetAutoPlay();
        }
      }),
      Y(G(i), "onClickNext", function () {
        i.increment(1);
      }),
      Y(G(i), "onClickPrev", function () {
        i.decrement(1);
      }),
      Y(G(i), "onSwipeForward", function () {
        i.increment(1), i.props.emulateTouch && i.setState({ cancelClick: !0 });
      }),
      Y(G(i), "onSwipeBackwards", function () {
        i.decrement(1), i.props.emulateTouch && i.setState({ cancelClick: !0 });
      }),
      Y(G(i), "changeItem", function (o) {
        return function (a) {
          (!(0, os.isKeyboardEvent)(a) || a.key === "Enter") && i.moveTo(o);
        };
      }),
      Y(G(i), "selectItem", function (o) {
        i.setState(Ot({ previousItem: i.state.selectedItem }, o), function () {
          i.setState(i.animationHandler(i.props, i.state));
        }),
          i.handleOnChange(
            o.selectedItem,
            oe.Children.toArray(i.props.children)[o.selectedItem]
          );
      }),
      Y(G(i), "getInitialImage", function () {
        var o = i.props.selectedItem,
          a = i.itemsRef && i.itemsRef[o],
          l = (a && a.getElementsByTagName("img")) || [];
        return l[0];
      }),
      Y(G(i), "getVariableItemHeight", function (o) {
        var a = i.itemsRef && i.itemsRef[o];
        if (i.state.hasMount && a && a.children.length) {
          var l = a.children[0].getElementsByTagName("img") || [];
          if (l.length > 0) {
            var c = l[0];
            if (!c.complete) {
              var m = function v() {
                i.forceUpdate(), c.removeEventListener("load", v);
              };
              c.addEventListener("load", m);
            }
          }
          var g = l[0] || a.children[0],
            d = g.clientHeight;
          return d > 0 ? d : null;
        }
        return null;
      });
    var s = {
      initialized: !1,
      previousItem: n.selectedItem,
      selectedItem: n.selectedItem,
      hasMount: !1,
      isMouseEntered: !1,
      autoPlay: n.autoPlay,
      swiping: !1,
      swipeMovementStarted: !1,
      cancelClick: !1,
      itemSize: 1,
      itemListStyle: {},
      slideStyle: {},
      selectedStyle: {},
      prevStyle: {},
    };
    return (
      (i.animationHandler =
        (typeof n.animationHandler == "function" && n.animationHandler) ||
        (n.animationHandler === "fade" && ul.fadeAnimationHandler) ||
        ul.slideAnimationHandler),
      (i.state = Ot(Ot({}, s), i.animationHandler(n, s))),
      i
    );
  }
  return (
    gj(r, [
      {
        key: "componentDidMount",
        value: function () {
          this.props.children && this.setupCarousel();
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i, s) {
          !i.children &&
            this.props.children &&
            !this.state.initialized &&
            this.setupCarousel(),
            !i.autoFocus && this.props.autoFocus && this.forceFocus(),
            s.swiping &&
              !this.state.swiping &&
              this.setState(
                Ot({}, this.props.stopSwipingHandler(this.props, this.state))
              ),
            (i.selectedItem !== this.props.selectedItem ||
              i.centerMode !== this.props.centerMode) &&
              (this.updateSizes(), this.moveTo(this.props.selectedItem)),
            i.autoPlay !== this.props.autoPlay &&
              (this.props.autoPlay
                ? this.setupAutoPlay()
                : this.destroyAutoPlay(),
              this.setState({ autoPlay: this.props.autoPlay }));
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.destroyCarousel();
        },
      },
      {
        key: "setupCarousel",
        value: function () {
          var i = this;
          this.bindEvents(),
            this.state.autoPlay &&
              oe.Children.count(this.props.children) > 1 &&
              this.setupAutoPlay(),
            this.props.autoFocus && this.forceFocus(),
            this.setState({ initialized: !0 }, function () {
              var s = i.getInitialImage();
              s && !s.complete
                ? s.addEventListener("load", i.setMountState)
                : i.setMountState();
            });
        },
      },
      {
        key: "destroyCarousel",
        value: function () {
          this.state.initialized &&
            (this.unbindEvents(), this.destroyAutoPlay());
        },
      },
      {
        key: "setupAutoPlay",
        value: function () {
          this.autoPlay();
          var i = this.carouselWrapperRef;
          this.props.stopOnHover &&
            i &&
            (i.addEventListener("mouseenter", this.stopOnHover),
            i.addEventListener("mouseleave", this.startOnLeave));
        },
      },
      {
        key: "destroyAutoPlay",
        value: function () {
          this.clearAutoPlay();
          var i = this.carouselWrapperRef;
          this.props.stopOnHover &&
            i &&
            (i.removeEventListener("mouseenter", this.stopOnHover),
            i.removeEventListener("mouseleave", this.startOnLeave));
        },
      },
      {
        key: "bindEvents",
        value: function () {
          (0, ea.default)().addEventListener("resize", this.updateSizes),
            (0, ea.default)().addEventListener(
              "DOMContentLoaded",
              this.updateSizes
            ),
            this.props.useKeyboardArrows &&
              (0, Zo.default)().addEventListener(
                "keydown",
                this.navigateWithKeyboard
              );
        },
      },
      {
        key: "unbindEvents",
        value: function () {
          (0, ea.default)().removeEventListener("resize", this.updateSizes),
            (0, ea.default)().removeEventListener(
              "DOMContentLoaded",
              this.updateSizes
            );
          var i = this.getInitialImage();
          i && i.removeEventListener("load", this.setMountState),
            this.props.useKeyboardArrows &&
              (0, Zo.default)().removeEventListener(
                "keydown",
                this.navigateWithKeyboard
              );
        },
      },
      {
        key: "forceFocus",
        value: function () {
          var i;
          (i = this.carouselWrapperRef) === null || i === void 0 || i.focus();
        },
      },
      {
        key: "renderItems",
        value: function (i) {
          var s = this;
          return this.props.children
            ? oe.Children.map(this.props.children, function (o, a) {
                var l = a === s.state.selectedItem,
                  c = a === s.state.previousItem,
                  m =
                    (l && s.state.selectedStyle) ||
                    (c && s.state.prevStyle) ||
                    s.state.slideStyle ||
                    {};
                s.props.centerMode &&
                  s.props.axis === "horizontal" &&
                  (m = Ot(
                    Ot({}, m),
                    {},
                    { minWidth: s.props.centerSlidePercentage + "%" }
                  )),
                  s.state.swiping &&
                    s.state.swipeMovementStarted &&
                    (m = Ot(Ot({}, m), {}, { pointerEvents: "none" }));
                var g = {
                  ref: function (v) {
                    return s.setItemsRef(v, a);
                  },
                  key: "itemKey" + a + (i ? "clone" : ""),
                  className: cr.default.ITEM(
                    !0,
                    a === s.state.selectedItem,
                    a === s.state.previousItem
                  ),
                  onClick: s.handleClickItem.bind(s, a, o),
                  style: m,
                };
                return oe.default.createElement(
                  "li",
                  g,
                  s.props.renderItem(o, {
                    isSelected: a === s.state.selectedItem,
                    isPrevious: a === s.state.previousItem,
                  })
                );
              })
            : [];
        },
      },
      {
        key: "renderControls",
        value: function () {
          var i = this,
            s = this.props,
            o = s.showIndicators,
            a = s.labels,
            l = s.renderIndicator,
            c = s.children;
          return o
            ? oe.default.createElement(
                "ul",
                { className: "control-dots" },
                oe.Children.map(c, function (m, g) {
                  return (
                    l &&
                    l(i.changeItem(g), g === i.state.selectedItem, g, a.item)
                  );
                })
              )
            : null;
        },
      },
      {
        key: "renderStatus",
        value: function () {
          return this.props.showStatus
            ? oe.default.createElement(
                "p",
                { className: "carousel-status" },
                this.props.statusFormatter(
                  this.state.selectedItem + 1,
                  oe.Children.count(this.props.children)
                )
              )
            : null;
        },
      },
      {
        key: "renderThumbs",
        value: function () {
          return !this.props.showThumbs ||
            !this.props.children ||
            oe.Children.count(this.props.children) === 0
            ? null
            : oe.default.createElement(
                dj.default,
                {
                  ref: this.setThumbsRef,
                  onSelectItem: this.handleClickThumb,
                  selectedItem: this.state.selectedItem,
                  transitionTime: this.props.transitionTime,
                  thumbWidth: this.props.thumbWidth,
                  labels: this.props.labels,
                  emulateTouch: this.props.emulateTouch,
                },
                this.props.renderThumbs(this.props.children)
              );
        },
      },
      {
        key: "render",
        value: function () {
          var i = this;
          if (
            !this.props.children ||
            oe.Children.count(this.props.children) === 0
          )
            return null;
          var s =
              this.props.swipeable &&
              oe.Children.count(this.props.children) > 1,
            o = this.props.axis === "horizontal",
            a =
              this.props.showArrows &&
              oe.Children.count(this.props.children) > 1,
            l =
              (a && (this.state.selectedItem > 0 || this.props.infiniteLoop)) ||
              !1,
            c =
              (a &&
                (this.state.selectedItem <
                  oe.Children.count(this.props.children) - 1 ||
                  this.props.infiniteLoop)) ||
              !1,
            m = this.renderItems(!0),
            g = m.shift(),
            d = m.pop(),
            v = {
              className: cr.default.SLIDER(!0, this.state.swiping),
              onSwipeMove: this.onSwipeMove,
              onSwipeStart: this.onSwipeStart,
              onSwipeEnd: this.onSwipeEnd,
              style: this.state.itemListStyle,
              tolerance: this.props.swipeScrollTolerance,
            },
            w = {};
          if (o) {
            if (
              ((v.onSwipeLeft = this.onSwipeForward),
              (v.onSwipeRight = this.onSwipeBackwards),
              this.props.dynamicHeight)
            ) {
              var x = this.getVariableItemHeight(this.state.selectedItem);
              w.height = x || "auto";
            }
          } else
            (v.onSwipeUp =
              this.props.verticalSwipe === "natural"
                ? this.onSwipeBackwards
                : this.onSwipeForward),
              (v.onSwipeDown =
                this.props.verticalSwipe === "natural"
                  ? this.onSwipeForward
                  : this.onSwipeBackwards),
              (v.style = Ot(
                Ot({}, v.style),
                {},
                { height: this.state.itemSize }
              )),
              (w.height = this.state.itemSize);
          return oe.default.createElement(
            "div",
            {
              "aria-label": this.props.ariaLabel,
              className: cr.default.ROOT(this.props.className),
              ref: this.setCarouselWrapperRef,
              tabIndex: this.props.useKeyboardArrows ? 0 : void 0,
            },
            oe.default.createElement(
              "div",
              {
                className: cr.default.CAROUSEL(!0),
                style: { width: this.props.width },
              },
              this.renderControls(),
              this.props.renderArrowPrev(
                this.onClickPrev,
                l,
                this.props.labels.leftArrow
              ),
              oe.default.createElement(
                "div",
                {
                  className: cr.default.WRAPPER(!0, this.props.axis),
                  style: w,
                },
                s
                  ? oe.default.createElement(
                      fj.default,
                      Af({ tagName: "ul", innerRef: this.setListRef }, v, {
                        allowMouseEvents: this.props.emulateTouch,
                      }),
                      this.props.infiniteLoop && d,
                      this.renderItems(),
                      this.props.infiniteLoop && g
                    )
                  : oe.default.createElement(
                      "ul",
                      {
                        className: cr.default.SLIDER(!0, this.state.swiping),
                        ref: function (f) {
                          return i.setListRef(f);
                        },
                        style: this.state.itemListStyle || {},
                      },
                      this.props.infiniteLoop && d,
                      this.renderItems(),
                      this.props.infiniteLoop && g
                    )
              ),
              this.props.renderArrowNext(
                this.onClickNext,
                c,
                this.props.labels.rightArrow
              ),
              this.renderStatus()
            ),
            this.renderThumbs()
          );
        },
      },
    ]),
    r
  );
})(oe.default.Component);
Jl.default = np;
Y(np, "displayName", "Carousel");
Y(np, "defaultProps", {
  ariaLabel: void 0,
  axis: "horizontal",
  centerSlidePercentage: 80,
  interval: 3e3,
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item",
  },
  onClickItem: os.noop,
  onClickThumb: os.noop,
  onChange: os.noop,
  onSwipeStart: function () {},
  onSwipeEnd: function () {},
  onSwipeMove: function () {
    return !1;
  },
  preventMovementUntilSwipeScrollTolerance: !1,
  renderArrowPrev: function (t, r, n) {
    return oe.default.createElement("button", {
      type: "button",
      "aria-label": n,
      className: cr.default.ARROW_PREV(!r),
      onClick: t,
    });
  },
  renderArrowNext: function (t, r, n) {
    return oe.default.createElement("button", {
      type: "button",
      "aria-label": n,
      className: cr.default.ARROW_NEXT(!r),
      onClick: t,
    });
  },
  renderIndicator: function (t, r, n, i) {
    return oe.default.createElement("li", {
      className: cr.default.DOT(r),
      onClick: t,
      onKeyDown: t,
      value: n,
      key: n,
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(i, " ").concat(n + 1),
    });
  },
  renderItem: function (t) {
    return t;
  },
  renderThumbs: function (t) {
    var r = oe.Children.map(t, function (n) {
      var i = n;
      if (
        (n.type !== "img" &&
          (i = oe.Children.toArray(n.props.children).find(function (s) {
            return s.type === "img";
          })),
        !!i)
      )
        return i;
    });
    return r.filter(function (n) {
      return n;
    }).length === 0
      ? (console.warn(
          "No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"
        ),
        [])
      : r;
  },
  statusFormatter: os.defaultStatusFormatter,
  selectedItem: 0,
  showArrows: !0,
  showIndicators: !0,
  showStatus: !0,
  showThumbs: !0,
  stopOnHover: !0,
  swipeScrollTolerance: 5,
  swipeable: !0,
  transitionTime: 350,
  verticalSwipe: "standard",
  width: "100%",
  animationHandler: "slide",
  swipeAnimationHandler: ul.slideSwipeAnimationHandler,
  stopSwipingHandler: ul.slideStopSwipingHandler,
});
var Sj = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.defineProperty(e, "Carousel", {
      enumerable: !0,
      get: function () {
        return t.default;
      },
    }),
    Object.defineProperty(e, "CarouselProps", {
      enumerable: !0,
      get: function () {
        return r.CarouselProps;
      },
    }),
    Object.defineProperty(e, "Thumbs", {
      enumerable: !0,
      get: function () {
        return n.default;
      },
    });
  var t = i(Jl),
    r = Sj,
    n = i(xo);
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
})(T2);
function bj() {
  return u.jsxs("div", {
    className:
      "flex flex-col items-center mb-10 border border-gray-400 sm:flex-row",
    children: [
      u.jsx("div", {
        className:
          "flex flex-col justify-center gap-2 sm:items-center sm:w-1/2 my-9",
        children: u.jsxs("div", {
          children: [
            u.jsxs("p", {
              className:
                "flex items-center gap-4 text-sm outfit text-opacity-60",
              children: [
                u.jsx("span", { className: "h-[2px] w-8 bg-black" }),
                "OUR BESTSELLERS",
              ],
            }),
            u.jsx("h1", {
              className: "text-3xl md:text-5xl opacity-70 prata",
              children: "Latest Arrivals",
            }),
            u.jsxs("p", {
              className:
                "flex items-center gap-4 text-sm outfit text-opacity-90",
              children: [
                "SHOP NOW",
                u.jsx("span", { className: "h-[2px] w-8 bg-black" }),
              ],
            }),
          ],
        }),
      }),
      u.jsx("img", { src: FC, className: "sm:w-1/2", alt: "" }),
    ],
  });
}
var nt = function () {
  return (
    (nt =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var s in r)
            Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
        }
        return t;
      }),
    nt.apply(this, arguments)
  );
};
function eo(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, n)), (s[n] = t[n]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var fe = "-ms-",
  As = "-moz-",
  se = "-webkit-",
  Cv = "comm",
  ru = "rule",
  ip = "decl",
  Aj = "@import",
  Ev = "@keyframes",
  Cj = "@layer",
  kv = Math.abs,
  sp = String.fromCharCode,
  Ef = Object.assign;
function Ej(e, t) {
  return Oe(e, 0) ^ 45
    ? (((((((t << 2) ^ Oe(e, 0)) << 2) ^ Oe(e, 1)) << 2) ^ Oe(e, 2)) << 2) ^
        Oe(e, 3)
    : 0;
}
function jv(e) {
  return e.trim();
}
function lr(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function V(e, t, r) {
  return e.replace(t, r);
}
function wa(e, t, r) {
  return e.indexOf(t, r);
}
function Oe(e, t) {
  return e.charCodeAt(t) | 0;
}
function ki(e, t, r) {
  return e.slice(t, r);
}
function Gt(e) {
  return e.length;
}
function Nv(e) {
  return e.length;
}
function as(e, t) {
  return t.push(e), e;
}
function kj(e, t) {
  return e.map(t).join("");
}
function kh(e, t) {
  return e.filter(function (r) {
    return !lr(r, t);
  });
}
var nu = 1,
  ji = 1,
  Tv = 0,
  Nt = 0,
  je = 0,
  Ui = "";
function iu(e, t, r, n, i, s, o, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: s,
    line: nu,
    column: ji,
    length: o,
    return: "",
    siblings: a,
  };
}
function kr(e, t) {
  return Ef(
    iu("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Qn(e) {
  for (; e.root; ) e = kr(e.root, { children: [e] });
  as(e, e.siblings);
}
function jj() {
  return je;
}
function Nj() {
  return (
    (je = Nt > 0 ? Oe(Ui, --Nt) : 0), ji--, je === 10 && ((ji = 1), nu--), je
  );
}
function $t() {
  return (
    (je = Nt < Tv ? Oe(Ui, Nt++) : 0), ji++, je === 10 && ((ji = 1), nu++), je
  );
}
function vn() {
  return Oe(Ui, Nt);
}
function Sa() {
  return Nt;
}
function su(e, t) {
  return ki(Ui, e, t);
}
function kf(e) {
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
function Tj(e) {
  return (nu = ji = 1), (Tv = Gt((Ui = e))), (Nt = 0), [];
}
function _j(e) {
  return (Ui = ""), e;
}
function rc(e) {
  return jv(su(Nt - 1, jf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Pj(e) {
  for (; (je = vn()) && je < 33; ) $t();
  return kf(e) > 2 || kf(je) > 3 ? "" : " ";
}
function Oj(e, t) {
  for (
    ;
    --t &&
    $t() &&
    !(je < 48 || je > 102 || (je > 57 && je < 65) || (je > 70 && je < 97));

  );
  return su(e, Sa() + (t < 6 && vn() == 32 && $t() == 32));
}
function jf(e) {
  for (; $t(); )
    switch (je) {
      case e:
        return Nt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && jf(je);
        break;
      case 40:
        e === 41 && jf(e);
        break;
      case 92:
        $t();
        break;
    }
  return Nt;
}
function Rj(e, t) {
  for (; $t() && e + je !== 57; ) if (e + je === 84 && vn() === 47) break;
  return "/*" + su(t, Nt - 1) + "*" + sp(e === 47 ? e : $t());
}
function Ij(e) {
  for (; !kf(vn()); ) $t();
  return su(e, Nt);
}
function Mj(e) {
  return _j(ba("", null, null, null, [""], (e = Tj(e)), 0, [0], e));
}
function ba(e, t, r, n, i, s, o, a, l) {
  for (
    var c = 0,
      m = 0,
      g = o,
      d = 0,
      v = 0,
      w = 0,
      x = 1,
      b = 1,
      f = 1,
      p = 0,
      h = "",
      y = i,
      S = s,
      C = n,
      A = h;
    b;

  )
    switch (((w = p), (p = $t()))) {
      case 40:
        if (w != 108 && Oe(A, g - 1) == 58) {
          wa((A += V(rc(p), "&", "&\f")), "&\f", kv(c ? a[c - 1] : 0)) != -1 &&
            (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += rc(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += Pj(w);
        break;
      case 92:
        A += Oj(Sa() - 1, 7);
        continue;
      case 47:
        switch (vn()) {
          case 42:
          case 47:
            as(Lj(Rj($t(), Sa()), t, r, l), l);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * x:
        a[c++] = Gt(A) * f;
      case 125 * x:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            b = 0;
          case 59 + m:
            f == -1 && (A = V(A, /\f/g, "")),
              v > 0 &&
                Gt(A) - g &&
                as(
                  v > 32
                    ? Nh(A + ";", n, r, g - 1, l)
                    : Nh(V(A, " ", "") + ";", n, r, g - 2, l),
                  l
                );
            break;
          case 59:
            A += ";";
          default:
            if (
              (as(
                (C = jh(A, t, r, c, m, i, a, h, (y = []), (S = []), g, s)),
                s
              ),
              p === 123)
            )
              if (m === 0) ba(A, t, C, C, y, s, g, a, S);
              else
                switch (d === 99 && Oe(A, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ba(
                      e,
                      C,
                      C,
                      n && as(jh(e, C, C, 0, 0, i, a, h, i, (y = []), g, S), S),
                      i,
                      S,
                      g,
                      a,
                      n ? y : S
                    );
                    break;
                  default:
                    ba(A, C, C, C, [""], S, 0, a, S);
                }
        }
        (c = m = v = 0), (x = f = 1), (h = A = ""), (g = o);
        break;
      case 58:
        (g = 1 + Gt(A)), (v = w);
      default:
        if (x < 1) {
          if (p == 123) --x;
          else if (p == 125 && x++ == 0 && Nj() == 125) continue;
        }
        switch (((A += sp(p)), p * x)) {
          case 38:
            f = m > 0 ? 1 : ((A += "\f"), -1);
            break;
          case 44:
            (a[c++] = (Gt(A) - 1) * f), (f = 1);
            break;
          case 64:
            vn() === 45 && (A += rc($t())),
              (d = vn()),
              (m = g = Gt((h = A += Ij(Sa())))),
              p++;
            break;
          case 45:
            w === 45 && Gt(A) == 2 && (x = 0);
        }
    }
  return s;
}
function jh(e, t, r, n, i, s, o, a, l, c, m, g) {
  for (
    var d = i - 1, v = i === 0 ? s : [""], w = Nv(v), x = 0, b = 0, f = 0;
    x < n;
    ++x
  )
    for (var p = 0, h = ki(e, d + 1, (d = kv((b = o[x])))), y = e; p < w; ++p)
      (y = jv(b > 0 ? v[p] + " " + h : V(h, /&\f/g, v[p]))) && (l[f++] = y);
  return iu(e, t, r, i === 0 ? ru : a, l, c, m, g);
}
function Lj(e, t, r, n) {
  return iu(e, t, r, Cv, sp(jj()), ki(e, 2, -2), 0, n);
}
function Nh(e, t, r, n, i) {
  return iu(e, t, r, ip, ki(e, 0, n), ki(e, n + 1, -1), n, i);
}
function _v(e, t, r) {
  switch (Ej(e, t)) {
    case 5103:
      return se + "print-" + e + e;
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
      return se + e + e;
    case 4789:
      return As + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + e + As + e + fe + e + e;
    case 5936:
      switch (Oe(e, t + 11)) {
        case 114:
          return se + e + fe + V(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return se + e + fe + V(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return se + e + fe + V(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return se + e + fe + e + e;
    case 6165:
      return se + e + fe + "flex-" + e + e;
    case 5187:
      return (
        se + e + V(e, /(\w+).+(:[^]+)/, se + "box-$1$2" + fe + "flex-$1$2") + e
      );
    case 5443:
      return (
        se +
        e +
        fe +
        "flex-item-" +
        V(e, /flex-|-self/g, "") +
        (lr(e, /flex-|baseline/)
          ? ""
          : fe + "grid-row-" + V(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        se +
        e +
        fe +
        "flex-line-pack" +
        V(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return se + e + fe + V(e, "shrink", "negative") + e;
    case 5292:
      return se + e + fe + V(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        se +
        "box-" +
        V(e, "-grow", "") +
        se +
        e +
        fe +
        V(e, "grow", "positive") +
        e
      );
    case 4554:
      return se + V(e, /([^-])(transform)/g, "$1" + se + "$2") + e;
    case 6187:
      return (
        V(V(V(e, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"), e, "") +
        e
      );
    case 5495:
    case 3959:
      return V(e, /(image-set\([^]*)/, se + "$1$`$1");
    case 4968:
      return (
        V(
          V(e, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + fe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        se +
        e +
        e
      );
    case 4200:
      if (!lr(e, /flex-|baseline/))
        return fe + "grid-column-align" + ki(e, t) + e;
      break;
    case 2592:
    case 3360:
      return fe + V(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r &&
        r.some(function (n, i) {
          return (t = i), lr(n.props, /grid-\w+-end/);
        })
        ? ~wa(e + (r = r[t].value), "span", 0)
          ? e
          : fe +
            V(e, "-start", "") +
            e +
            fe +
            "grid-row-span:" +
            (~wa(r, "span", 0) ? lr(r, /\d+/) : +lr(r, /\d+/) - +lr(e, /\d+/)) +
            ";"
        : fe + V(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r &&
        r.some(function (n) {
          return lr(n.props, /grid-\w+-start/);
        })
        ? e
        : fe + V(V(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return V(e, /(.+)-inline(.+)/, se + "$1$2") + e;
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
      if (Gt(e) - 1 - t > 6)
        switch (Oe(e, t + 1)) {
          case 109:
            if (Oe(e, t + 4) !== 45) break;
          case 102:
            return (
              V(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  se +
                  "$2-$3$1" +
                  As +
                  (Oe(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~wa(e, "stretch", 0)
              ? _v(V(e, "stretch", "fill-available"), t, r) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return V(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (n, i, s, o, a, l, c) {
          return (
            fe +
            i +
            ":" +
            s +
            c +
            (o ? fe + i + "-span:" + (a ? l : +l - +s) + c : "") +
            e
          );
        }
      );
    case 4949:
      if (Oe(e, t + 6) === 121) return V(e, ":", ":" + se) + e;
      break;
    case 6444:
      switch (Oe(e, Oe(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            V(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                se +
                (Oe(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                se +
                "$2$3$1" +
                fe +
                "$2box$3"
            ) + e
          );
        case 100:
          return V(e, ":", ":" + fe) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return V(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function fl(e, t) {
  for (var r = "", n = 0; n < e.length; n++) r += t(e[n], n, e, t) || "";
  return r;
}
function Dj(e, t, r, n) {
  switch (e.type) {
    case Cj:
      if (e.children.length) break;
    case Aj:
    case ip:
      return (e.return = e.return || e.value);
    case Cv:
      return "";
    case Ev:
      return (e.return = e.value + "{" + fl(e.children, n) + "}");
    case ru:
      if (!Gt((e.value = e.props.join(",")))) return "";
  }
  return Gt((r = fl(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function zj(e) {
  var t = Nv(e);
  return function (r, n, i, s) {
    for (var o = "", a = 0; a < t; a++) o += e[a](r, n, i, s) || "";
    return o;
  };
}
function Uj(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Bj(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ip:
        e.return = _v(e.value, e.length, r);
        return;
      case Ev:
        return fl([kr(e, { value: V(e.value, "@", "@" + se) })], n);
      case ru:
        if (e.length)
          return kj((r = e.props), function (i) {
            switch (lr(i, (n = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Qn(kr(e, { props: [V(i, /:(read-\w+)/, ":" + As + "$1")] })),
                  Qn(kr(e, { props: [i] })),
                  Ef(e, { props: kh(r, n) });
                break;
              case "::placeholder":
                Qn(
                  kr(e, { props: [V(i, /:(plac\w+)/, ":" + se + "input-$1")] })
                ),
                  Qn(kr(e, { props: [V(i, /:(plac\w+)/, ":" + As + "$1")] })),
                  Qn(kr(e, { props: [V(i, /:(plac\w+)/, fe + "input-$1")] })),
                  Qn(kr(e, { props: [i] })),
                  Ef(e, { props: kh(r, n) });
                break;
            }
            return "";
          });
    }
}
var Fj = {
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
  ct = {},
  Ni =
    (typeof process < "u" &&
      ct !== void 0 &&
      (ct.REACT_APP_SC_ATTR || ct.SC_ATTR)) ||
    "data-styled",
  Pv = "active",
  Ov = "data-styled-version",
  ou = "6.1.8",
  op = `/*!sc*/
`,
  ap = typeof window < "u" && "HTMLElement" in window,
  $j = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      ct !== void 0 &&
      ct.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      ct.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? ct.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      ct.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      ct !== void 0 &&
      ct.SC_DISABLE_SPEEDY !== void 0 &&
      ct.SC_DISABLE_SPEEDY !== "" &&
      ct.SC_DISABLE_SPEEDY !== "false" &&
      ct.SC_DISABLE_SPEEDY),
  au = Object.freeze([]),
  Ti = Object.freeze({});
function Qj(e, t, r) {
  return (
    r === void 0 && (r = Ti), (e.theme !== r.theme && e.theme) || t || r.theme
  );
}
var Rv = new Set([
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
    "tr",
    "track",
    "u",
    "ul",
    "use",
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
    "tspan",
  ]),
  Wj = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Hj = /(^-|-$)/g;
function Th(e) {
  return e.replace(Wj, "-").replace(Hj, "");
}
var Kj = /(a)(d)/gi,
  ta = 52,
  _h = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Nf(e) {
  var t,
    r = "";
  for (t = Math.abs(e); t > ta; t = (t / ta) | 0) r = _h(t % ta) + r;
  return (_h(t % ta) + r).replace(Kj, "$1-$2");
}
var nc,
  Iv = 5381,
  ri = function (e, t) {
    for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
    return e;
  },
  Mv = function (e) {
    return ri(Iv, e);
  };
function Lv(e) {
  return Nf(Mv(e) >>> 0);
}
function Vj(e) {
  return e.displayName || e.name || "Component";
}
function ic(e) {
  return typeof e == "string" && !0;
}
var Dv = typeof Symbol == "function" && Symbol.for,
  zv = Dv ? Symbol.for("react.memo") : 60115,
  qj = Dv ? Symbol.for("react.forward_ref") : 60112,
  Yj = {
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
  Xj = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Uv = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Gj =
    (((nc = {})[qj] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (nc[zv] = Uv),
    nc);
function Ph(e) {
  return ("type" in (t = e) && t.type.$$typeof) === zv
    ? Uv
    : "$$typeof" in e
    ? Gj[e.$$typeof]
    : Yj;
  var t;
}
var Jj = Object.defineProperty,
  Zj = Object.getOwnPropertyNames,
  Oh = Object.getOwnPropertySymbols,
  eN = Object.getOwnPropertyDescriptor,
  tN = Object.getPrototypeOf,
  Rh = Object.prototype;
function Bv(e, t, r) {
  if (typeof t != "string") {
    if (Rh) {
      var n = tN(t);
      n && n !== Rh && Bv(e, n, r);
    }
    var i = Zj(t);
    Oh && (i = i.concat(Oh(t)));
    for (var s = Ph(e), o = Ph(t), a = 0; a < i.length; ++a) {
      var l = i[a];
      if (!(l in Xj || (r && r[l]) || (o && l in o) || (s && l in s))) {
        var c = eN(t, l);
        try {
          Jj(e, l, c);
        } catch {}
      }
    }
  }
  return e;
}
function _i(e) {
  return typeof e == "function";
}
function lp(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function hn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Tf(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function to(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function _f(e, t, r) {
  if ((r === void 0 && (r = !1), !r && !to(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++) e[n] = _f(e[n], t[n]);
  else if (to(t)) for (var n in t) e[n] = _f(e[n], t[n]);
  return e;
}
function up(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function bo(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var rN = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
        return r;
      }),
      (e.prototype.insertRules = function (t, r) {
        if (t >= this.groupSizes.length) {
          for (var n = this.groupSizes, i = n.length, s = i; t >= s; )
            if ((s <<= 1) < 0) throw bo(16, "".concat(t));
          (this.groupSizes = new Uint32Array(s)),
            this.groupSizes.set(n),
            (this.length = s);
          for (var o = i; o < s; o++) this.groupSizes[o] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), l = ((o = 0), r.length);
          o < l;
          o++
        )
          this.tag.insertRule(a, r[o]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var r = this.groupSizes[t],
            n = this.indexOfGroup(t),
            i = n + r;
          this.groupSizes[t] = 0;
          for (var s = n; s < i; s++) this.tag.deleteRule(n);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var r = "";
        if (t >= this.length || this.groupSizes[t] === 0) return r;
        for (
          var n = this.groupSizes[t],
            i = this.indexOfGroup(t),
            s = i + n,
            o = i;
          o < s;
          o++
        )
          r += "".concat(this.tag.getRule(o)).concat(op);
        return r;
      }),
      e
    );
  })(),
  Aa = new Map(),
  dl = new Map(),
  Ca = 1,
  ra = function (e) {
    if (Aa.has(e)) return Aa.get(e);
    for (; dl.has(Ca); ) Ca++;
    var t = Ca++;
    return Aa.set(e, t), dl.set(t, e), t;
  },
  nN = function (e, t) {
    (Ca = t + 1), Aa.set(e, t), dl.set(t, e);
  },
  iN = "style[".concat(Ni, "][").concat(Ov, '="').concat(ou, '"]'),
  sN = new RegExp(
    "^".concat(Ni, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  oN = function (e, t, r) {
    for (var n, i = r.split(","), s = 0, o = i.length; s < o; s++)
      (n = i[s]) && e.registerName(t, n);
  },
  aN = function (e, t) {
    for (
      var r,
        n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(op),
        i = [],
        s = 0,
        o = n.length;
      s < o;
      s++
    ) {
      var a = n[s].trim();
      if (a) {
        var l = a.match(sN);
        if (l) {
          var c = 0 | parseInt(l[1], 10),
            m = l[2];
          c !== 0 && (nN(m, c), oN(e, m, l[3]), e.getTag().insertRules(c, i)),
            (i.length = 0);
        } else i.push(a);
      }
    }
  };
function lN() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Fv = function (e) {
    var t = document.head,
      r = e || t,
      n = document.createElement("style"),
      i = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(Ni, "]")));
        return l[l.length - 1];
      })(r),
      s = i !== void 0 ? i.nextSibling : null;
    n.setAttribute(Ni, Pv), n.setAttribute(Ov, ou);
    var o = lN();
    return o && n.setAttribute("nonce", o), r.insertBefore(n, s), n;
  },
  uN = (function () {
    function e(t) {
      (this.element = Fv(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (r) {
          if (r.sheet) return r.sheet;
          for (var n = document.styleSheets, i = 0, s = n.length; i < s; i++) {
            var o = n[i];
            if (o.ownerNode === r) return o;
          }
          throw bo(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        try {
          return this.sheet.insertRule(r, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var r = this.sheet.cssRules[t];
        return r && r.cssText ? r.cssText : "";
      }),
      e
    );
  })(),
  cN = (function () {
    function e(t) {
      (this.element = Fv(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        if (t <= this.length && t >= 0) {
          var n = document.createTextNode(r);
          return (
            this.element.insertBefore(n, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  fN = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, r) {
        return (
          t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Ih = ap,
  dN = { isServer: !ap, useCSSOMInjection: !$j },
  $v = (function () {
    function e(t, r, n) {
      t === void 0 && (t = Ti), r === void 0 && (r = {});
      var i = this;
      (this.options = nt(nt({}, dN), t)),
        (this.gs = r),
        (this.names = new Map(n)),
        (this.server = !!t.isServer),
        !this.server &&
          ap &&
          Ih &&
          ((Ih = !1),
          (function (s) {
            for (
              var o = document.querySelectorAll(iN), a = 0, l = o.length;
              a < l;
              a++
            ) {
              var c = o[a];
              c &&
                c.getAttribute(Ni) !== Pv &&
                (aN(s, c), c.parentNode && c.parentNode.removeChild(c));
            }
          })(this)),
        up(this, function () {
          return (function (s) {
            for (
              var o = s.getTag(),
                a = o.length,
                l = "",
                c = function (g) {
                  var d = (function (f) {
                    return dl.get(f);
                  })(g);
                  if (d === void 0) return "continue";
                  var v = s.names.get(d),
                    w = o.getGroup(g);
                  if (v === void 0 || w.length === 0) return "continue";
                  var x = ""
                      .concat(Ni, ".g")
                      .concat(g, '[id="')
                      .concat(d, '"]'),
                    b = "";
                  v !== void 0 &&
                    v.forEach(function (f) {
                      f.length > 0 && (b += "".concat(f, ","));
                    }),
                    (l += ""
                      .concat(w)
                      .concat(x, '{content:"')
                      .concat(b, '"}')
                      .concat(op));
                },
                m = 0;
              m < a;
              m++
            )
              c(m);
            return l;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return ra(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            nt(nt({}, this.options), t),
            this.gs,
            (r && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (r) {
              var n = r.useCSSOMInjection,
                i = r.target;
              return r.isServer ? new fN(i) : n ? new uN(i) : new cN(i);
            })(this.options)),
            new rN(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, r) {
        return this.names.has(t) && this.names.get(t).has(r);
      }),
      (e.prototype.registerName = function (t, r) {
        if ((ra(t), this.names.has(t))) this.names.get(t).add(r);
        else {
          var n = new Set();
          n.add(r), this.names.set(t, n);
        }
      }),
      (e.prototype.insertRules = function (t, r, n) {
        this.registerName(t, r), this.getTag().insertRules(ra(t), n);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(ra(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  pN = /&/g,
  mN = /^\s*\/\/.*$/gm;
function Qv(e, t) {
  return e.map(function (r) {
    return (
      r.type === "rule" &&
        ((r.value = "".concat(t, " ").concat(r.value)),
        (r.value = r.value.replaceAll(",", ",".concat(t, " "))),
        (r.props = r.props.map(function (n) {
          return "".concat(t, " ").concat(n);
        }))),
      Array.isArray(r.children) &&
        r.type !== "@keyframes" &&
        (r.children = Qv(r.children, t)),
      r
    );
  });
}
function hN(e) {
  var t,
    r,
    n,
    i = Ti,
    s = i.options,
    o = s === void 0 ? Ti : s,
    a = i.plugins,
    l = a === void 0 ? au : a,
    c = function (d, v, w) {
      return w.startsWith(r) && w.endsWith(r) && w.replaceAll(r, "").length > 0
        ? ".".concat(t)
        : d;
    },
    m = l.slice();
  m.push(function (d) {
    d.type === ru &&
      d.value.includes("&") &&
      (d.props[0] = d.props[0].replace(pN, r).replace(n, c));
  }),
    o.prefix && m.push(Bj),
    m.push(Dj);
  var g = function (d, v, w, x) {
    v === void 0 && (v = ""),
      w === void 0 && (w = ""),
      x === void 0 && (x = "&"),
      (t = x),
      (r = v),
      (n = new RegExp("\\".concat(r, "\\b"), "g"));
    var b = d.replace(mN, ""),
      f = Mj(w || v ? "".concat(w, " ").concat(v, " { ").concat(b, " }") : b);
    o.namespace && (f = Qv(f, o.namespace));
    var p = [];
    return (
      fl(
        f,
        zj(
          m.concat(
            Uj(function (h) {
              return p.push(h);
            })
          )
        )
      ),
      p
    );
  };
  return (
    (g.hash = l.length
      ? l
          .reduce(function (d, v) {
            return v.name || bo(15), ri(d, v.name);
          }, Iv)
          .toString()
      : ""),
    g
  );
}
var gN = new $v(),
  Pf = hN(),
  Wv = q.createContext({
    shouldForwardProp: void 0,
    styleSheet: gN,
    stylis: Pf,
  });
Wv.Consumer;
q.createContext(void 0);
function Mh() {
  return E.useContext(Wv);
}
var Hv = (function () {
    function e(t, r) {
      var n = this;
      (this.inject = function (i, s) {
        s === void 0 && (s = Pf);
        var o = n.name + s.hash;
        i.hasNameForId(n.id, o) ||
          i.insertRules(n.id, o, s(n.rules, o, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = r),
        up(this, function () {
          throw bo(12, String(n.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Pf), this.name + t.hash;
      }),
      e
    );
  })(),
  yN = function (e) {
    return e >= "A" && e <= "Z";
  };
function Lh(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    yN(n) ? (t += "-" + n.toLowerCase()) : (t += n);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Kv = function (e) {
    return e == null || e === !1 || e === "";
  },
  Vv = function (e) {
    var t,
      r,
      n = [];
    for (var i in e) {
      var s = e[i];
      e.hasOwnProperty(i) &&
        !Kv(s) &&
        ((Array.isArray(s) && s.isCss) || _i(s)
          ? n.push("".concat(Lh(i), ":"), s, ";")
          : to(s)
          ? n.push.apply(n, eo(eo(["".concat(i, " {")], Vv(s), !1), ["}"], !1))
          : n.push(
              ""
                .concat(Lh(i), ": ")
                .concat(
                  ((t = i),
                  (r = s) == null || typeof r == "boolean" || r === ""
                    ? ""
                    : typeof r != "number" ||
                      r === 0 ||
                      t in Fj ||
                      t.startsWith("--")
                    ? String(r).trim()
                    : "".concat(r, "px")),
                  ";"
                )
            ));
    }
    return n;
  };
function xn(e, t, r, n) {
  if (Kv(e)) return [];
  if (lp(e)) return [".".concat(e.styledComponentId)];
  if (_i(e)) {
    if (!_i((s = e)) || (s.prototype && s.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return xn(i, t, r, n);
  }
  var s;
  return e instanceof Hv
    ? r
      ? (e.inject(r, n), [e.getName(n)])
      : [e]
    : to(e)
    ? Vv(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        au,
        e.map(function (o) {
          return xn(o, t, r, n);
        })
      )
    : [e.toString()];
}
function vN(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (_i(r) && !lp(r)) return !1;
  }
  return !0;
}
var xN = Mv(ou),
  wN = (function () {
    function e(t, r, n) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (n === void 0 || n.isStatic) && vN(t)),
        (this.componentId = r),
        (this.baseHash = ri(xN, r)),
        (this.baseStyle = n),
        $v.registerId(r);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, r, n) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, r, n)
          : "";
        if (this.isStatic && !n.hash)
          if (
            this.staticRulesId &&
            r.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = hn(i, this.staticRulesId);
          else {
            var s = Tf(xn(this.rules, t, r, n)),
              o = Nf(ri(this.baseHash, s) >>> 0);
            if (!r.hasNameForId(this.componentId, o)) {
              var a = n(s, ".".concat(o), void 0, this.componentId);
              r.insertRules(this.componentId, o, a);
            }
            (i = hn(i, o)), (this.staticRulesId = o);
          }
        else {
          for (
            var l = ri(this.baseHash, n.hash), c = "", m = 0;
            m < this.rules.length;
            m++
          ) {
            var g = this.rules[m];
            if (typeof g == "string") c += g;
            else if (g) {
              var d = Tf(xn(g, t, r, n));
              (l = ri(l, d + m)), (c += d);
            }
          }
          if (c) {
            var v = Nf(l >>> 0);
            r.hasNameForId(this.componentId, v) ||
              r.insertRules(
                this.componentId,
                v,
                n(c, ".".concat(v), void 0, this.componentId)
              ),
              (i = hn(i, v));
          }
        }
        return i;
      }),
      e
    );
  })(),
  qv = q.createContext(void 0);
qv.Consumer;
var sc = {};
function SN(e, t, r) {
  var n = lp(e),
    i = e,
    s = !ic(e),
    o = t.attrs,
    a = o === void 0 ? au : o,
    l = t.componentId,
    c =
      l === void 0
        ? (function (y, S) {
            var C = typeof y != "string" ? "sc" : Th(y);
            sc[C] = (sc[C] || 0) + 1;
            var A = "".concat(C, "-").concat(Lv(ou + C + sc[C]));
            return S ? "".concat(S, "-").concat(A) : A;
          })(t.displayName, t.parentComponentId)
        : l,
    m = t.displayName,
    g =
      m === void 0
        ? (function (y) {
            return ic(y) ? "styled.".concat(y) : "Styled(".concat(Vj(y), ")");
          })(e)
        : m,
    d =
      t.displayName && t.componentId
        ? "".concat(Th(t.displayName), "-").concat(t.componentId)
        : t.componentId || c,
    v = n && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
    w = t.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var x = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var b = t.shouldForwardProp;
      w = function (y, S) {
        return x(y, S) && b(y, S);
      };
    } else w = x;
  }
  var f = new wN(r, d, n ? i.componentStyle : void 0);
  function p(y, S) {
    return (function (C, A, k) {
      var N = C.attrs,
        j = C.componentStyle,
        T = C.defaultProps,
        _ = C.foldedComponentIds,
        P = C.styledComponentId,
        O = C.target,
        L = q.useContext(qv),
        M = Mh(),
        U = C.shouldForwardProp || M.shouldForwardProp,
        R = Qj(A, L, T) || Ti,
        I = (function (F, X, K) {
          for (
            var Ee, Ie = nt(nt({}, X), { className: void 0, theme: K }), le = 0;
            le < F.length;
            le += 1
          ) {
            var te = _i((Ee = F[le])) ? Ee(Ie) : Ee;
            for (var pe in te)
              Ie[pe] =
                pe === "className"
                  ? hn(Ie[pe], te[pe])
                  : pe === "style"
                  ? nt(nt({}, Ie[pe]), te[pe])
                  : te[pe];
          }
          return (
            X.className && (Ie.className = hn(Ie.className, X.className)), Ie
          );
        })(N, A, R),
        D = I.as || O,
        B = {};
      for (var Q in I)
        I[Q] === void 0 ||
          Q[0] === "$" ||
          Q === "as" ||
          (Q === "theme" && I.theme === R) ||
          (Q === "forwardedAs"
            ? (B.as = I.forwardedAs)
            : (U && !U(Q, D)) || (B[Q] = I[Q]));
      var ie = (function (F, X) {
          var K = Mh(),
            Ee = F.generateAndInjectStyles(X, K.styleSheet, K.stylis);
          return Ee;
        })(j, I),
        H = hn(_, P);
      return (
        ie && (H += " " + ie),
        I.className && (H += " " + I.className),
        (B[ic(D) && !Rv.has(D) ? "class" : "className"] = H),
        (B.ref = k),
        E.createElement(D, B)
      );
    })(h, y, S);
  }
  p.displayName = g;
  var h = q.forwardRef(p);
  return (
    (h.attrs = v),
    (h.componentStyle = f),
    (h.displayName = g),
    (h.shouldForwardProp = w),
    (h.foldedComponentIds = n
      ? hn(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (h.styledComponentId = d),
    (h.target = n ? i.target : e),
    Object.defineProperty(h, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (y) {
        this._foldedDefaultProps = n
          ? (function (S) {
              for (var C = [], A = 1; A < arguments.length; A++)
                C[A - 1] = arguments[A];
              for (var k = 0, N = C; k < N.length; k++) _f(S, N[k], !0);
              return S;
            })({}, i.defaultProps, y)
          : y;
      },
    }),
    up(h, function () {
      return ".".concat(h.styledComponentId);
    }),
    s &&
      Bv(h, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    h
  );
}
function Dh(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}
var zh = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function Yv(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (_i(e) || to(e)) return zh(xn(Dh(au, eo([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string"
    ? xn(n)
    : zh(xn(Dh(n, t)));
}
function Of(e, t, r) {
  if ((r === void 0 && (r = Ti), !t)) throw bo(1, t);
  var n = function (i) {
    for (var s = [], o = 1; o < arguments.length; o++) s[o - 1] = arguments[o];
    return e(t, r, Yv.apply(void 0, eo([i], s, !1)));
  };
  return (
    (n.attrs = function (i) {
      return Of(
        e,
        t,
        nt(nt({}, r), {
          attrs: Array.prototype.concat(r.attrs, i).filter(Boolean),
        })
      );
    }),
    (n.withConfig = function (i) {
      return Of(e, t, nt(nt({}, r), i));
    }),
    n
  );
}
var Xv = function (e) {
    return Of(SN, e);
  },
  Rn = Xv;
Rv.forEach(function (e) {
  Rn[e] = Xv(e);
});
function cp(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = Tf(Yv.apply(void 0, eo([e], t, !1))),
    i = Lv(n);
  return new Hv(i, n);
}
const Uh = "#4fa94d",
  bN = { "aria-busy": !0, role: "progressbar" },
  AN = Rn.div`
  display: ${(e) => (e.$visible ? "flex" : "none")};
`,
  Rt = 242.776657104492,
  CN = 1.6,
  EN = cp`
12.5% {
  stroke-dasharray: ${Rt * 0.14}px, ${Rt}px;
  stroke-dashoffset: -${Rt * 0.11}px;
}
43.75% {
  stroke-dasharray: ${Rt * 0.35}px, ${Rt}px;
  stroke-dashoffset: -${Rt * 0.35}px;
}
100% {
  stroke-dasharray: ${Rt * 0.01}px, ${Rt}px;
  stroke-dashoffset: -${Rt * 0.99}px;
}
`;
Rn.path`
  stroke-dasharray: ${Rt * 0.01}px, ${Rt};
  stroke-dashoffset: 0;
  animation: ${EN} ${CN}s linear infinite;
`;
const oc = 20,
  kN = (e) => ["M" + e + " 0c0-9.94-8.06", e, e, e].join("-"),
  jN = (e, t, r) => {
    const n = Math.max(e, t),
      i = -20 - n / 2 + 1,
      s = r * 2 + n;
    return [i, i, s, s].join(" ");
  },
  rn = ({
    height: e = 80,
    width: t = 80,
    color: r = Uh,
    secondaryColor: n = Uh,
    ariaLabel: i = "oval-loading",
    wrapperStyle: s,
    wrapperClass: o,
    visible: a = !0,
    strokeWidth: l = 2,
    strokeWidthSecondary: c,
  }) =>
    u.jsx(AN, {
      style: s,
      $visible: a,
      className: o,
      "data-testid": "oval-loading",
      "aria-label": i,
      ...bN,
      children: u.jsx("svg", {
        width: t,
        height: e,
        viewBox: jN(Number(l), Number(c || l), oc),
        xmlns: "http://www.w3.org/2000/svg",
        stroke: r,
        "data-testid": "oval-svg",
        children: u.jsx("g", {
          fill: "none",
          fillRule: "evenodd",
          children: u.jsxs("g", {
            transform: "translate(1 1)",
            strokeWidth: Number(c || l),
            "data-testid": "oval-secondary-group",
            children: [
              u.jsx("circle", {
                strokeOpacity: ".5",
                cx: "0",
                cy: "0",
                r: oc,
                stroke: n,
                strokeWidth: l,
              }),
              u.jsx("path", {
                d: kN(oc),
                children: u.jsx("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  from: "0 0 0",
                  to: "360 0 0",
                  dur: "1s",
                  repeatCount: "indefinite",
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  NN = cp`
to {
   transform: rotate(360deg);
 }
`;
Rn.svg`
  animation: ${NN} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;
Rn.polyline`
  stroke-width: ${(e) => e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;
const TN = cp`
to {
   stroke-dashoffset: 136;
 }
`;
Rn.polygon`
  stroke-dasharray: 17;
  animation: ${TN} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
Rn.svg`
  transform-origin: 50% 65%;
`;
function _N() {
  const e = et(),
    { isFetching: t, data: r = [] } = Li();
  return u.jsxs("div", {
    className: "flex flex-col items-center gap-10 mb-20",
    children: [
      u.jsxs("div", {
        className: "flex flex-col items-center gap-4",
        children: [
          u.jsxs("h2", {
            className: "flex items-center gap-3 text-2xl md:text-3xl outfit",
            children: [
              u.jsx("span", { className: "opacity-70", children: "LATEST" }),
              " COLLECTIONS",
              u.jsx("span", { className: "h-[2px] w-8 bg-black" }),
            ],
          }),
          u.jsx("p", {
            className: "opacity-70",
            children: "Explore our latest collections!",
          }),
        ],
      }),
      t
        ? u.jsx("div", {
            className: "flex items-center justify-center w-full my-14",
            children: u.jsx(rn, {
              visible: !0,
              height: 40,
              width: 40,
              color: "gray",
              ariaLabel: "oval-loading",
              secondaryColor: "lightgray",
              strokeWidth: 4,
              strokeWidthSecondary: 4,
            }),
          })
        : u.jsx("div", {
            className:
              "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-5",
            children: r
              .slice(0, 10)
              .map((n) =>
                u.jsxs(
                  "div",
                  {
                    onClick: () => e(`/product/${n._id}`),
                    className:
                      "flex flex-col gap-2 text-xs cursor-pointer group",
                    children: [
                      u.jsx("div", {
                        className: "overflow-hidden",
                        children: u.jsx("img", {
                          src: n.image[0] || n.image[1] || n.image[2],
                          className:
                            "transition-all delay-50 group-hover:scale-110",
                          alt: n.name,
                        }),
                      }),
                      u.jsxs("div", {
                        className: "[&>p]:opacity-70 flex flex-col gap-1 px-2",
                        children: [
                          u.jsx("p", { children: n.name }),
                          u.jsxs("p", {
                            className: "font-bold",
                            children: ["$", n.price],
                          }),
                        ],
                      }),
                    ],
                  },
                  n._id
                )
              ),
          }),
    ],
  });
}
function PN() {
  const e = et(),
    { isFetching: t, data: r = [] } = Li(),
    n = r.filter((i) => i.bestseller === !0);
  return u.jsxs("div", {
    className: "flex flex-col items-center gap-10 border-b-2 mb-14 pb-14",
    children: [
      u.jsxs("div", {
        className: "flex flex-col items-center gap-4",
        children: [
          u.jsxs("h2", {
            className: "flex items-center gap-3 text-2xl md:text-3xl outfit",
            children: [
              u.jsx("span", { className: "opacity-70", children: "BEST" }),
              " SELLERS",
              u.jsx("span", { className: "h-[2px] w-8 bg-black" }),
            ],
          }),
          u.jsx("p", {
            className: "opacity-70",
            children: "Explore our bestseller collection!",
          }),
        ],
      }),
      t
        ? u.jsx("div", {
            className: "flex items-center justify-center w-full my-14",
            children: u.jsx(rn, {
              visible: !0,
              height: 40,
              width: 40,
              color: "gray",
              ariaLabel: "oval-loading",
              secondaryColor: "lightgray",
              strokeWidth: 4,
              strokeWidthSecondary: 4,
            }),
          })
        : u.jsx("div", {
            className:
              "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-5",
            children: n.map((i) =>
              u.jsxs(
                "div",
                {
                  onClick: () => e(`/product/${i._id}`),
                  className:
                    "flex flex-col gap-2 text-xs break-all whitespace-normal cursor-pointer group",
                  children: [
                    u.jsx("div", {
                      className: "overflow-hidden",
                      children: u.jsx("img", {
                        src: i.image[0] || i.image[1] || i.image[2],
                        className:
                          "transition-all delay-50 group-hover:scale-110",
                        alt: i.name,
                      }),
                    }),
                    u.jsxs("div", {
                      className: "[&>p]:opacity-70 flex flex-col gap-1 px-2",
                      children: [
                        u.jsx("p", { children: i.name }),
                        u.jsxs("p", {
                          className: "font-bold",
                          children: ["$", i.price],
                        }),
                      ],
                    }),
                  ],
                },
                i._id
              )
            ),
          }),
    ],
  });
}
function ON() {
  return u.jsxs("div", {
    className:
      "flex flex-col items-center mb-20 text-xs md:text-base sm:justify-center sm:flex-row md:gap-32 lg:gap-40 sm:gap-28 gap-14",
    children: [
      u.jsxs("div", {
        className: "flex flex-col items-center gap-1",
        children: [
          u.jsx("img", {
            className: "w-12 h-12",
            src: at.exchange_icon,
            alt: "",
          }),
          u.jsx("p", {
            className: "font-semibold",
            children: "Easy Exchange Policy",
          }),
          u.jsx("p", {
            className: "text-center opacity-65",
            children: "We offer hasle free exchange policy",
          }),
        ],
      }),
      u.jsxs("div", {
        className: "flex flex-col items-center gap-1",
        children: [
          u.jsx("img", {
            className: "w-12 h-12",
            src: at.quality_icon,
            alt: "",
          }),
          u.jsx("p", {
            className: "font-semibold",
            children: "7 Days Return Policy",
          }),
          u.jsx("p", {
            className: "text-center opacity-65",
            children: "We provide 7 days free policy",
          }),
        ],
      }),
      u.jsxs("div", {
        className: "flex flex-col items-center gap-1",
        children: [
          u.jsx("img", {
            className: "w-12 h-12",
            src: at.support_img,
            alt: "",
          }),
          u.jsx("p", {
            className: "font-semibold",
            children: "Best Customer Support",
          }),
          u.jsx("p", {
            className: "text-center opacity-65",
            children: "We provide 24/7  customer support",
          }),
        ],
      }),
    ],
  });
}
function RN() {
  return u.jsxs("div", {
    className: "flex flex-col items-center gap-5 mb-32",
    children: [
      u.jsx("h2", {
        className: "text-2xl font-semibold opacity-90 outfit",
        children: "Subscribe now & get 20% off ",
      }),
      u.jsx("p", {
        className: "text-sm opacity-65",
        children: "subcribe now to get latest updates about our products",
      }),
      u.jsxs("form", {
        onSubmit: (e) => e.preventDefault(),
        className: "flex w-full h-12 border border-gray-400 sm:w-1/2",
        action: "",
        children: [
          u.jsx("input", {
            placeholder: "Enter your email id",
            className: "w-full h-full px-2 outline-none",
            type: "email",
          }),
          u.jsx("button", {
            className: "p-3 px-8 text-xs text-white bg-black",
            children: "SUBSCRIBE",
          }),
        ],
      }),
    ],
  });
}
function IN() {
  return u.jsxs("div", {
    className: "",
    children: [
      u.jsx(bj, {}),
      u.jsx(_N, {}),
      u.jsx(PN, {}),
      u.jsx(ON, {}),
      u.jsx(RN, {}),
    ],
  });
}
function MN() {
  return u.jsxs(u.Fragment, {
    children: [
      u.jsxs("div", {
        className:
          "flex flex-col gap-12 mt-20 mb-5 text-sm sm:gap-32 sm:flex-row outfit",
        children: [
          u.jsxs("div", {
            className: "flex flex-col gap-6 ",
            children: [
              u.jsx("img", { src: Rd, className: "h-7 w-36", alt: "" }),
              u.jsx("p", {
                className: "opacity-85",
                children:
                  "Get all types of top wear,bottom wear and foot wear on bigby's with the best customer services and regular updates and easy payment methods",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "flex flex-col gap-2 outfit [&>*]:opacity-90",
            children: [
              " ",
              u.jsx("h1", {
                className: "text-xl font-semibold",
                children: "COMPANY",
              }),
              " ",
              u.jsx(is, { className: "", children: "Home" }),
              " ",
              u.jsx(is, { className: "", children: "About us" }),
              u.jsx(is, { className: "", children: "Delivery" }),
              u.jsx(is, { className: "", children: "Privacy Policy" }),
            ],
          }),
          u.jsxs("div", {
            className: "flex flex-col outfit gap-2 [&>*]:opacity-90",
            children: [
              " ",
              u.jsx("h1", {
                className: "text-xl font-semibold",
                children: "GET IN TOUCH",
              }),
              u.jsx("p", {
                className: "outfit",
                children: "(415) 555-0132 (dummy) ",
              }),
              u.jsx("span", { children: "@mudasir8482289@gmail.com" }),
            ],
          }),
        ],
      }),
      " ",
      u.jsx("div", {
        className:
          "py-3 text-xs text-center border-t border-black opacity-85 outfit",
        children: "Copyright 2025 © Mudasir Ahmed - All Rights Reserved",
      }),
    ],
  });
}
function LN({ category: e }) {
  const { isfetching: t, data: r = [] } = Li(),
    n = r;
  if (t) return u.jsx("p", { children: "Loading" });
  const [i, s] = E.useState([...n]),
    o = et(),
    a = () => {
      if (i.length > 0) {
        let l = i.slice();
        (l = l.filter((c) => c.category.includes(e))), s(l);
      }
    };
  return (
    E.useEffect(() => {
      a();
    }, [e]),
    u.jsxs("div", {
      className: "flex flex-col items-center gap-10 mt-20 mb-20",
      children: [
        u.jsx("div", {
          className: "flex flex-col items-center gap-4",
          children: u.jsxs("h2", {
            className: "flex items-center gap-3 text-2xl md:text-3xl outfit",
            children: [
              u.jsx("span", { className: "opacity-70", children: "RELATED " }),
              "  PRODUCTS",
              u.jsx("span", { className: "h-[2px] w-8 bg-black" }),
            ],
          }),
        }),
        u.jsx("div", {
          className:
            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-5",
          children: i.map((l, c) => {
            if (c <= 4)
              return u.jsxs(
                "div",
                {
                  onClick: () => {
                    o(`/product/${l._id}`),
                      window.scrollTo({ top: 0, behavior: "smooth" });
                  },
                  className: "flex flex-col gap-2 text-xs cursor-pointer group",
                  children: [
                    u.jsx("div", {
                      className: "overflow-hidden",
                      children: u.jsx("img", {
                        src: l.image[0] || l.image[1] || l.image[2],
                        className:
                          "transition-all delay-50 group-hover:scale-110",
                        alt: "",
                      }),
                    }),
                    u.jsxs("div", {
                      className: " [&>p]:opacity-70 flex flex-col gap-1 px-2",
                      children: [
                        u.jsx("p", { className: "", children: l.name }),
                        u.jsxs("p", {
                          className: "font-bold",
                          children: ["$", l.price],
                        }),
                      ],
                    }),
                  ],
                },
                l._id
              );
          }),
        }),
      ],
    })
  );
}
function DN(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
DN(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var Ao = (e) => typeof e == "number" && !isNaN(e),
  Tn = (e) => typeof e == "string",
  Sr = (e) => typeof e == "function",
  zN = (e) => Tn(e) || Ao(e),
  Rf = (e) => (Tn(e) || Sr(e) ? e : null),
  UN = (e, t) => (e === !1 || (Ao(e) && e > 0) ? e : t),
  If = (e) => E.isValidElement(e) || Tn(e) || Sr(e) || Ao(e);
function BN(e, t, r = 300) {
  let { scrollHeight: n, style: i } = e;
  requestAnimationFrame(() => {
    (i.minHeight = "initial"),
      (i.height = n + "px"),
      (i.transition = `all ${r}ms`),
      requestAnimationFrame(() => {
        (i.height = "0"), (i.padding = "0"), (i.margin = "0"), setTimeout(t, r);
      });
  });
}
function FN({
  enter: e,
  exit: t,
  appendPosition: r = !1,
  collapse: n = !0,
  collapseDuration: i = 300,
}) {
  return function ({
    children: s,
    position: o,
    preventExitTransition: a,
    done: l,
    nodeRef: c,
    isIn: m,
    playToast: g,
  }) {
    let d = r ? `${e}--${o}` : e,
      v = r ? `${t}--${o}` : t,
      w = E.useRef(0);
    return (
      E.useLayoutEffect(() => {
        let x = c.current,
          b = d.split(" "),
          f = (p) => {
            p.target === c.current &&
              (g(),
              x.removeEventListener("animationend", f),
              x.removeEventListener("animationcancel", f),
              w.current === 0 &&
                p.type !== "animationcancel" &&
                x.classList.remove(...b));
          };
        x.classList.add(...b),
          x.addEventListener("animationend", f),
          x.addEventListener("animationcancel", f);
      }, []),
      E.useEffect(() => {
        let x = c.current,
          b = () => {
            x.removeEventListener("animationend", b), n ? BN(x, l, i) : l();
          };
        m ||
          (a
            ? b()
            : ((w.current = 1),
              (x.className += ` ${v}`),
              x.addEventListener("animationend", b)));
      }, [m]),
      q.createElement(q.Fragment, null, s)
    );
  };
}
function Bh(e, t) {
  return {
    content: Gv(e.content, e.props),
    containerId: e.props.containerId,
    id: e.props.toastId,
    theme: e.props.theme,
    type: e.props.type,
    data: e.props.data || {},
    isLoading: e.props.isLoading,
    icon: e.props.icon,
    reason: e.removalReason,
    status: t,
  };
}
function Gv(e, t, r = !1) {
  return E.isValidElement(e) && !Tn(e.type)
    ? E.cloneElement(e, {
        closeToast: t.closeToast,
        toastProps: t,
        data: t.data,
        isPaused: r,
      })
    : Sr(e)
    ? e({ closeToast: t.closeToast, toastProps: t, data: t.data, isPaused: r })
    : e;
}
function $N({ closeToast: e, theme: t, ariaLabel: r = "close" }) {
  return q.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${t}`,
      type: "button",
      onClick: (n) => {
        n.stopPropagation(), e(!0);
      },
      "aria-label": r,
    },
    q.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      q.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function QN({
  delay: e,
  isRunning: t,
  closeToast: r,
  type: n = "default",
  hide: i,
  className: s,
  controlledProgress: o,
  progress: a,
  rtl: l,
  isIn: c,
  theme: m,
}) {
  let g = i || (o && a === 0),
    d = {
      animationDuration: `${e}ms`,
      animationPlayState: t ? "running" : "paused",
    };
  o && (d.transform = `scaleX(${a})`);
  let v = Wr(
      "Toastify__progress-bar",
      o
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${m}`,
      `Toastify__progress-bar--${n}`,
      { "Toastify__progress-bar--rtl": l }
    ),
    w = Sr(s) ? s({ rtl: l, type: n, defaultClassName: v }) : Wr(v, s),
    x = {
      [o && a >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        o && a < 1
          ? null
          : () => {
              c && r();
            },
    };
  return q.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": g },
    q.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${n}`,
    }),
    q.createElement("div", {
      role: "progressbar",
      "aria-hidden": g ? "true" : "false",
      "aria-label": "notification timer",
      className: w,
      style: d,
      ...x,
    })
  );
}
var WN = 1,
  Jv = () => `${WN++}`;
function HN(e, t, r) {
  let n = 1,
    i = 0,
    s = [],
    o = [],
    a = t,
    l = new Map(),
    c = new Set(),
    m = (p) => (c.add(p), () => c.delete(p)),
    g = () => {
      (o = Array.from(l.values())), c.forEach((p) => p());
    },
    d = ({ containerId: p, toastId: h, updateId: y }) => {
      let S = p ? p !== e : e !== 1,
        C = l.has(h) && y == null;
      return S || C;
    },
    v = (p, h) => {
      l.forEach((y) => {
        var S;
        (h == null || h === y.props.toastId) &&
          ((S = y.toggle) == null || S.call(y, p));
      });
    },
    w = (p) => {
      var h, y;
      (y = (h = p.props) == null ? void 0 : h.onClose) == null ||
        y.call(h, p.removalReason),
        (p.isActive = !1);
    },
    x = (p) => {
      if (p == null) l.forEach(w);
      else {
        let h = l.get(p);
        h && w(h);
      }
      g();
    },
    b = () => {
      (i -= s.length), (s = []);
    },
    f = (p) => {
      var h, y;
      let { toastId: S, updateId: C } = p.props,
        A = C == null;
      p.staleId && l.delete(p.staleId),
        (p.isActive = !0),
        l.set(S, p),
        g(),
        r(Bh(p, A ? "added" : "updated")),
        A && ((y = (h = p.props).onOpen) == null || y.call(h));
    };
  return {
    id: e,
    props: a,
    observe: m,
    toggle: v,
    removeToast: x,
    toasts: l,
    clearQueue: b,
    buildToast: (p, h) => {
      if (d(h)) return;
      let { toastId: y, updateId: S, data: C, staleId: A, delay: k } = h,
        N = S == null;
      N && i++;
      let j = {
        ...a,
        style: a.toastStyle,
        key: n++,
        ...Object.fromEntries(Object.entries(h).filter(([_, P]) => P != null)),
        toastId: y,
        updateId: S,
        data: C,
        isIn: !1,
        className: Rf(h.className || a.toastClassName),
        progressClassName: Rf(h.progressClassName || a.progressClassName),
        autoClose: h.isLoading ? !1 : UN(h.autoClose, a.autoClose),
        closeToast(_) {
          (l.get(y).removalReason = _), x(y);
        },
        deleteToast() {
          let _ = l.get(y);
          if (_ != null) {
            if (
              (r(Bh(_, "removed")),
              l.delete(y),
              i--,
              i < 0 && (i = 0),
              s.length > 0)
            ) {
              f(s.shift());
              return;
            }
            g();
          }
        },
      };
      (j.closeButton = a.closeButton),
        h.closeButton === !1 || If(h.closeButton)
          ? (j.closeButton = h.closeButton)
          : h.closeButton === !0 &&
            (j.closeButton = If(a.closeButton) ? a.closeButton : !0);
      let T = { content: p, props: j, staleId: A };
      a.limit && a.limit > 0 && i > a.limit && N
        ? s.push(T)
        : Ao(k)
        ? setTimeout(() => {
            f(T);
          }, k)
        : f(T);
    },
    setProps(p) {
      a = p;
    },
    setToggle: (p, h) => {
      let y = l.get(p);
      y && (y.toggle = h);
    },
    isToastActive: (p) => {
      var h;
      return (h = l.get(p)) == null ? void 0 : h.isActive;
    },
    getSnapshot: () => o,
  };
}
var Xe = new Map(),
  ro = [],
  Mf = new Set(),
  KN = (e) => Mf.forEach((t) => t(e)),
  Zv = () => Xe.size > 0;
function VN() {
  ro.forEach((e) => tx(e.content, e.options)), (ro = []);
}
var qN = (e, { containerId: t }) => {
  var r;
  return (r = Xe.get(t || 1)) == null ? void 0 : r.toasts.get(e);
};
function ex(e, t) {
  var r;
  if (t) return !!((r = Xe.get(t)) != null && r.isToastActive(e));
  let n = !1;
  return (
    Xe.forEach((i) => {
      i.isToastActive(e) && (n = !0);
    }),
    n
  );
}
function YN(e) {
  if (!Zv()) {
    ro = ro.filter((t) => e != null && t.options.toastId !== e);
    return;
  }
  if (e == null || zN(e))
    Xe.forEach((t) => {
      t.removeToast(e);
    });
  else if (e && ("containerId" in e || "id" in e)) {
    let t = Xe.get(e.containerId);
    t
      ? t.removeToast(e.id)
      : Xe.forEach((r) => {
          r.removeToast(e.id);
        });
  }
}
var XN = (e = {}) => {
  Xe.forEach((t) => {
    t.props.limit &&
      (!e.containerId || t.id === e.containerId) &&
      t.clearQueue();
  });
};
function tx(e, t) {
  If(e) &&
    (Zv() || ro.push({ content: e, options: t }),
    Xe.forEach((r) => {
      r.buildToast(e, t);
    }));
}
function GN(e) {
  var t;
  (t = Xe.get(e.containerId || 1)) == null || t.setToggle(e.id, e.fn);
}
function rx(e, t) {
  Xe.forEach((r) => {
    (t == null ||
      !(t != null && t.containerId) ||
      (t == null ? void 0 : t.containerId) === r.id) &&
      r.toggle(e, t == null ? void 0 : t.id);
  });
}
function JN(e) {
  let t = e.containerId || 1;
  return {
    subscribe(r) {
      let n = HN(t, e, KN);
      Xe.set(t, n);
      let i = n.observe(r);
      return (
        VN(),
        () => {
          i(), Xe.delete(t);
        }
      );
    },
    setProps(r) {
      var n;
      (n = Xe.get(t)) == null || n.setProps(r);
    },
    getSnapshot() {
      var r;
      return (r = Xe.get(t)) == null ? void 0 : r.getSnapshot();
    },
  };
}
function ZN(e) {
  return (
    Mf.add(e),
    () => {
      Mf.delete(e);
    }
  );
}
function eT(e) {
  return e && (Tn(e.toastId) || Ao(e.toastId)) ? e.toastId : Jv();
}
function Co(e, t) {
  return tx(e, t), t.toastId;
}
function lu(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: eT(t) };
}
function uu(e) {
  return (t, r) => Co(t, lu(e, r));
}
function W(e, t) {
  return Co(e, lu("default", t));
}
W.loading = (e, t) =>
  Co(
    e,
    lu("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  );
function tT(e, { pending: t, error: r, success: n }, i) {
  let s;
  t && (s = Tn(t) ? W.loading(t, i) : W.loading(t.render, { ...i, ...t }));
  let o = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    a = (c, m, g) => {
      if (m == null) {
        W.dismiss(s);
        return;
      }
      let d = { type: c, ...o, ...i, data: g },
        v = Tn(m) ? { render: m } : m;
      return s ? W.update(s, { ...d, ...v }) : W(v.render, { ...d, ...v }), g;
    },
    l = Sr(e) ? e() : e;
  return l.then((c) => a("success", n, c)).catch((c) => a("error", r, c)), l;
}
W.promise = tT;
W.success = uu("success");
W.info = uu("info");
W.error = uu("error");
W.warning = uu("warning");
W.warn = W.warning;
W.dark = (e, t) => Co(e, lu("default", { theme: "dark", ...t }));
function rT(e) {
  YN(e);
}
W.dismiss = rT;
W.clearWaitingQueue = XN;
W.isActive = ex;
W.update = (e, t = {}) => {
  let r = qN(e, t);
  if (r) {
    let { props: n, content: i } = r,
      s = { delay: 100, ...n, ...t, toastId: t.toastId || e, updateId: Jv() };
    s.toastId !== e && (s.staleId = e);
    let o = s.render || i;
    delete s.render, Co(o, s);
  }
};
W.done = (e) => {
  W.update(e, { progress: 1 });
};
W.onChange = ZN;
W.play = (e) => rx(!0, e);
W.pause = (e) => rx(!1, e);
function nT(e) {
  var t;
  let { subscribe: r, getSnapshot: n, setProps: i } = E.useRef(JN(e)).current;
  i(e);
  let s = (t = E.useSyncExternalStore(r, n, n)) == null ? void 0 : t.slice();
  function o(a) {
    if (!s) return [];
    let l = new Map();
    return (
      e.newestOnTop && s.reverse(),
      s.forEach((c) => {
        let { position: m } = c.props;
        l.has(m) || l.set(m, []), l.get(m).push(c);
      }),
      Array.from(l, (c) => a(c[0], c[1]))
    );
  }
  return {
    getToastToRender: o,
    isToastActive: ex,
    count: s == null ? void 0 : s.length,
  };
}
function iT(e) {
  let [t, r] = E.useState(!1),
    [n, i] = E.useState(!1),
    s = E.useRef(null),
    o = E.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: a,
      pauseOnHover: l,
      closeToast: c,
      onClick: m,
      closeOnClick: g,
    } = e;
  GN({ id: e.toastId, containerId: e.containerId, fn: r }),
    E.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          d(),
          () => {
            v();
          }
        );
    }, [e.pauseOnFocusLoss]);
  function d() {
    document.hasFocus() || f(),
      window.addEventListener("focus", b),
      window.addEventListener("blur", f);
  }
  function v() {
    window.removeEventListener("focus", b),
      window.removeEventListener("blur", f);
  }
  function w(A) {
    if (e.draggable === !0 || e.draggable === A.pointerType) {
      p();
      let k = s.current;
      (o.canCloseOnClick = !0),
        (o.canDrag = !0),
        (k.style.transition = "none"),
        e.draggableDirection === "x"
          ? ((o.start = A.clientX),
            (o.removalDistance = k.offsetWidth * (e.draggablePercent / 100)))
          : ((o.start = A.clientY),
            (o.removalDistance =
              (k.offsetHeight *
                (e.draggablePercent === 80
                  ? e.draggablePercent * 1.5
                  : e.draggablePercent)) /
              100));
    }
  }
  function x(A) {
    let {
      top: k,
      bottom: N,
      left: j,
      right: T,
    } = s.current.getBoundingClientRect();
    A.nativeEvent.type !== "touchend" &&
    e.pauseOnHover &&
    A.clientX >= j &&
    A.clientX <= T &&
    A.clientY >= k &&
    A.clientY <= N
      ? f()
      : b();
  }
  function b() {
    r(!0);
  }
  function f() {
    r(!1);
  }
  function p() {
    (o.didMove = !1),
      document.addEventListener("pointermove", y),
      document.addEventListener("pointerup", S);
  }
  function h() {
    document.removeEventListener("pointermove", y),
      document.removeEventListener("pointerup", S);
  }
  function y(A) {
    let k = s.current;
    if (o.canDrag && k) {
      (o.didMove = !0),
        t && f(),
        e.draggableDirection === "x"
          ? (o.delta = A.clientX - o.start)
          : (o.delta = A.clientY - o.start),
        o.start !== A.clientX && (o.canCloseOnClick = !1);
      let N =
        e.draggableDirection === "x"
          ? `${o.delta}px, var(--y)`
          : `0, calc(${o.delta}px + var(--y))`;
      (k.style.transform = `translate3d(${N},0)`),
        (k.style.opacity = `${1 - Math.abs(o.delta / o.removalDistance)}`);
    }
  }
  function S() {
    h();
    let A = s.current;
    if (o.canDrag && o.didMove && A) {
      if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance)) {
        i(!0), e.closeToast(!0), e.collapseAll();
        return;
      }
      (A.style.transition = "transform 0.2s, opacity 0.2s"),
        A.style.removeProperty("transform"),
        A.style.removeProperty("opacity");
    }
  }
  let C = { onPointerDown: w, onPointerUp: x };
  return (
    a && l && ((C.onMouseEnter = f), e.stacked || (C.onMouseLeave = b)),
    g &&
      (C.onClick = (A) => {
        m && m(A), o.canCloseOnClick && c(!0);
      }),
    {
      playToast: b,
      pauseToast: f,
      isRunning: t,
      preventExitTransition: n,
      toastRef: s,
      eventHandlers: C,
    }
  );
}
var sT = typeof window < "u" ? E.useLayoutEffect : E.useEffect,
  cu = ({ theme: e, type: t, isLoading: r, ...n }) =>
    q.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        e === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`,
      ...n,
    });
function oT(e) {
  return q.createElement(
    cu,
    { ...e },
    q.createElement("path", {
      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
    })
  );
}
function aT(e) {
  return q.createElement(
    cu,
    { ...e },
    q.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
    })
  );
}
function lT(e) {
  return q.createElement(
    cu,
    { ...e },
    q.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
    })
  );
}
function uT(e) {
  return q.createElement(
    cu,
    { ...e },
    q.createElement("path", {
      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
    })
  );
}
function cT() {
  return q.createElement("div", { className: "Toastify__spinner" });
}
var Lf = { info: aT, warning: oT, success: lT, error: uT, spinner: cT },
  fT = (e) => e in Lf;
function dT({ theme: e, type: t, isLoading: r, icon: n }) {
  let i = null,
    s = { theme: e, type: t };
  return (
    n === !1 ||
      (Sr(n)
        ? (i = n({ ...s, isLoading: r }))
        : E.isValidElement(n)
        ? (i = E.cloneElement(n, s))
        : r
        ? (i = Lf.spinner())
        : fT(t) && (i = Lf[t](s))),
    i
  );
}
var pT = (e) => {
    let {
        isRunning: t,
        preventExitTransition: r,
        toastRef: n,
        eventHandlers: i,
        playToast: s,
      } = iT(e),
      {
        closeButton: o,
        children: a,
        autoClose: l,
        onClick: c,
        type: m,
        hideProgressBar: g,
        closeToast: d,
        transition: v,
        position: w,
        className: x,
        style: b,
        progressClassName: f,
        updateId: p,
        role: h,
        progress: y,
        rtl: S,
        toastId: C,
        deleteToast: A,
        isIn: k,
        isLoading: N,
        closeOnClick: j,
        theme: T,
        ariaLabel: _,
      } = e,
      P = Wr(
        "Toastify__toast",
        `Toastify__toast-theme--${T}`,
        `Toastify__toast--${m}`,
        { "Toastify__toast--rtl": S },
        { "Toastify__toast--close-on-click": j }
      ),
      O = Sr(x)
        ? x({ rtl: S, position: w, type: m, defaultClassName: P })
        : Wr(P, x),
      L = dT(e),
      M = !!y || !l,
      U = { closeToast: d, type: m, theme: T },
      R = null;
    return (
      o === !1 ||
        (Sr(o)
          ? (R = o(U))
          : E.isValidElement(o)
          ? (R = E.cloneElement(o, U))
          : (R = $N(U))),
      q.createElement(
        v,
        {
          isIn: k,
          done: A,
          position: w,
          preventExitTransition: r,
          nodeRef: n,
          playToast: s,
        },
        q.createElement(
          "div",
          {
            id: C,
            tabIndex: 0,
            onClick: c,
            "data-in": k,
            className: O,
            ...i,
            style: b,
            ref: n,
            ...(k && { role: h, "aria-label": _ }),
          },
          L != null &&
            q.createElement(
              "div",
              {
                className: Wr("Toastify__toast-icon", {
                  "Toastify--animate-icon Toastify__zoom-enter": !N,
                }),
              },
              L
            ),
          Gv(a, e, !t),
          R,
          !e.customProgressBar &&
            q.createElement(QN, {
              ...(p && !M ? { key: `p-${p}` } : {}),
              rtl: S,
              theme: T,
              delay: l,
              isRunning: t,
              isIn: k,
              closeToast: d,
              hide: g,
              type: m,
              className: f,
              controlledProgress: M,
              progress: y || 0,
            })
        )
      )
    );
  },
  mT = (e, t = !1) => ({
    enter: `Toastify--animate Toastify__${e}-enter`,
    exit: `Toastify--animate Toastify__${e}-exit`,
    appendPosition: t,
  }),
  hT = FN(mT("bounce", !0)),
  gT = {
    position: "top-right",
    transition: hT,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
    "aria-label": "Notifications Alt+T",
    hotKeys: (e) => e.altKey && e.code === "KeyT",
  };
function yT(e) {
  let t = { ...gT, ...e },
    r = e.stacked,
    [n, i] = E.useState(!0),
    s = E.useRef(null),
    { getToastToRender: o, isToastActive: a, count: l } = nT(t),
    { className: c, style: m, rtl: g, containerId: d, hotKeys: v } = t;
  function w(b) {
    let f = Wr("Toastify__toast-container", `Toastify__toast-container--${b}`, {
      "Toastify__toast-container--rtl": g,
    });
    return Sr(c)
      ? c({ position: b, rtl: g, defaultClassName: f })
      : Wr(f, Rf(c));
  }
  function x() {
    r && (i(!0), W.play());
  }
  return (
    sT(() => {
      var b;
      if (r) {
        let f = s.current.querySelectorAll('[data-in="true"]'),
          p = 12,
          h = (b = t.position) == null ? void 0 : b.includes("top"),
          y = 0,
          S = 0;
        Array.from(f)
          .reverse()
          .forEach((C, A) => {
            let k = C;
            k.classList.add("Toastify__toast--stacked"),
              A > 0 && (k.dataset.collapsed = `${n}`),
              k.dataset.pos || (k.dataset.pos = h ? "top" : "bot");
            let N = y * (n ? 0.2 : 1) + (n ? 0 : p * A);
            k.style.setProperty("--y", `${h ? N : N * -1}px`),
              k.style.setProperty("--g", `${p}`),
              k.style.setProperty("--s", `${1 - (n ? S : 0)}`),
              (y += k.offsetHeight),
              (S += 0.025);
          });
      }
    }, [n, l, r]),
    E.useEffect(() => {
      function b(f) {
        var p;
        let h = s.current;
        v(f) &&
          ((p = h.querySelector('[tabIndex="0"]')) == null || p.focus(),
          i(!1),
          W.pause()),
          f.key === "Escape" &&
            (document.activeElement === h ||
              (h != null && h.contains(document.activeElement))) &&
            (i(!0), W.play());
      }
      return (
        document.addEventListener("keydown", b),
        () => {
          document.removeEventListener("keydown", b);
        }
      );
    }, [v]),
    q.createElement(
      "section",
      {
        ref: s,
        className: "Toastify",
        id: d,
        onMouseEnter: () => {
          r && (i(!1), W.pause());
        },
        onMouseLeave: x,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": t["aria-label"],
      },
      o((b, f) => {
        let p = f.length ? { ...m } : { ...m, pointerEvents: "none" };
        return q.createElement(
          "div",
          {
            tabIndex: -1,
            className: w(b),
            "data-stacked": r,
            style: p,
            key: `c-${b}`,
          },
          f.map(({ content: h, props: y }) =>
            q.createElement(
              pT,
              {
                ...y,
                stacked: r,
                collapseAll: x,
                isIn: a(y.toastId, y.containerId),
                key: `t-${y.key}`,
              },
              h
            )
          )
        );
      })
    )
  );
}
const vT = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Fh = (e = 21) => {
  let t = "",
    r = crypto.getRandomValues(new Uint8Array((e |= 0)));
  for (; e--; ) t += vT[r[e] & 63];
  return t;
};
const Df = un({
    name: "Slice",
    initialState: {
      items: JSON.parse(sessionStorage.getItem("items")) || [],
      orderItem: JSON.parse(sessionStorage.getItem("orderItem")) || {},
    },
    reducers: {
      setCart(e, t) {
        e.items = t.payload;
      },
      updateItemQuantity(e, t) {
        const { itemId: r, quantity: n } = t.payload,
          i = e.items.find((s) => s._id === r);
        i && n > 0 && (i.quantity = n);
      },
      removeItem(e, t) {
        e.items = e.items.filter((r) => r._id !== t.payload);
      },
      addItem(e, t) {
        const r = e.items.find(
          (n) =>
            n.productId === t.payload.productId && n.size === t.payload.size
        );
        r ? (r.quantity += 1) : e.items.push(t.payload);
      },
      addOrderItem(e, t) {
        (e.orderItem = {}), (e.orderItem = t.payload);
      },
      incrementOrderQuantity(e) {
        e.orderItem.quantity++;
      },
      decrementOrderQuantity(e) {
        e.orderItem.quantity > 1 && e.orderItem.quantity--;
      },
    },
  }),
  wn = Df.actions;
var nx = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  $h = q.createContext && q.createContext(nx),
  xT = ["attr", "size", "title"];
function wT(e, t) {
  if (e == null) return {};
  var r = ST(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (n = s[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function ST(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function pl() {
  return (
    (pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    pl.apply(this, arguments)
  );
}
function Qh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ml(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qh(Object(r), !0).forEach(function (n) {
          bT(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Qh(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function bT(e, t, r) {
  return (
    (t = AT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function AT(e) {
  var t = CT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function CT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ix(e) {
  return (
    e &&
    e.map((t, r) => q.createElement(t.tag, ml({ key: r }, t.attr), ix(t.child)))
  );
}
function ET(e) {
  return (t) =>
    q.createElement(kT, pl({ attr: ml({}, e.attr) }, t), ix(e.child));
}
function kT(e) {
  var t = (r) => {
    var { attr: n, size: i, title: s } = e,
      o = wT(e, xT),
      a = i || r.size || "1em",
      l;
    return (
      r.className && (l = r.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      q.createElement(
        "svg",
        pl(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          o,
          {
            className: l,
            style: ml(ml({ color: e.color || r.color }, r.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && q.createElement("title", null, s),
        e.children
      )
    );
  };
  return $h !== void 0
    ? q.createElement($h.Consumer, null, (r) => t(r))
    : t(nx);
}
function fp(e) {
  return ET({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
        },
        child: [],
      },
    ],
  })(e);
}
const sx = ({ rating: e }) =>
    u.jsx("div", {
      className: "flex m-1",
      children: [...Array(5)].map((t, r) => {
        const n = r + 1;
        return u.jsx(
          fp,
          {
            className: `${n <= e ? "text-yellow-500" : "text-gray-300"}`,
            size: 13,
          },
          r
        );
      }),
    }),
  jT =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFUUlEQVR4nO1ZW6iUVRReNmv9erpZkUVlEUFl14eo6G5QUPpQdIUeKrToqXtEDwn6lkUF3ShNsDISps6sNXP0hJWdFIrqQSOyspCgTEvJSjme2XusHWv/658z6TnOaP+MM9AHPwyz9/+ttfbe/7ptgP/RHGEuHOSYVjmhj/Q39CpqUrjaCwV9aly4CnoVnnFpZogXfAt6EaEIRzmmESe0Kz5MI/of9Bq84P26E05o0DG9G3eF8T7oNXjBtap8lZObqpLcbMfrS+gl+ApeEHeDaWsYhImhCIkT+tWMOR96BU7oFTtWT9f/Y3rGjHsZegGhCH1O6Pd4rCQ5M/u/WkmmmXF/hAocDN0OV6Y7TeGP9xgT+sTG7oBuhxNabcrO3mOM6S47Xqugm1EtJac5pr+d0I4gcNju46EIhzqm7fHYVZJp0K1wQvPNM7063hwvuMh25QnoRoQhQCe0KRpSxovGm+dLeLEZ8ktYAATdhmo5ud6i9zfN5nrGdebVroNugxes2LF6uOlcxkfM6DJ0OjaEIkwZeWfiKa5C53nBK2qlwgxXTm7xTPd4wUcdU80JOZ3XAt8Unavv6LvKoVy1UmGGcqsMlaXzVHZLSjqm273gYs/4tmN63zF96hm/8oI/OKZtmrmOpuJNHsZiq4ujc1vldWn2vE11Ut1UR9VVdVbd1Qb1NFuaEmk6zrTVC27wjGs0VmhWG5VhXOiYnvWCc0M/HNeqIcPSd7y+E99lXKhcTjNljUOMa1SWylTZLRi6BWrlwrWaNpjC212JbnX9dPYITzw5LIMjQxEKcIARilBQXVQn1S3qaPFIdVcb4sTqQHKqF/w6y1hrXLgSuhSe8RLHtNmO8veN+VxEGITDM88TP8Iy3gtdBsd0tzoJ24kVukvjbuFodI7Pgm4IWiENtv/Wawiw6YuuRLc5oZ1m+erQD8fAgaz9hT6wk1J1QrP2icDixY8W5DboRwYdRlWS0z3jt7agm/aW+jR1kU7oMyPaUZXkBugQalyYmXlTdcc7K5NO+k+EWnN7xtdsazVFn9/OrmEIMMEzPuaE/jIjluZaUXrBB+pRnrEYVsAhkDPCEEzyjEvqi8Y0Tw1r73YLrt3Jk07Mi1u5vLWQYpDjwkxoJ9ImAq43YxbnxZsdXy+4vmPVo2N6wYTOzZFznu3G89ApZOmML+OluXGW8DL7/tZBJ5BmrWmCmWfUj9Gb6U/lHu7vmwod7FsN5M7NtKxjfS8v+IYdgQfbwP2Qcb+eN/dYwn6Kq9aGlMUxnWOG/AztRLWUnGHfx+ZWApW6Ub0b0acVlxoCTMhqDZUF7YJe1NiKLdmrQkOAMc1oKFOdkI/pTRGSJjLeNI/YvnrIM4opNW4q7Ut4oV7oZGlG2lnERenv9LJH54z3vhOaZYslbTHCiq54XTBWamLXCfNHuy64QW916wYyXq7NO1sITQgXaC94d57h/r6p9euHVoqnfUXW6tT6YIyx6Z7xu6xMdkzPjZVURmOZ5mXlqrZ3aly4Zg8+sRRof+uPvRoiOMcUfbGuGMMRurINx+YLvXZrxuXKdK5j+ryxHxYqcHR9XOgl43s8d0Oc0JD1a2NxpZ3B7F5Qy+KYcu9DpI8OIS0NdhjHb9px1LFqObnRFu3DXI3Qwsbq5V2uTGd5xlKDN1qtJen+csc2LNN7DXzL446l9/Mu17pHz3HDyqeNsbSdOjuPwifGD6HZaVvUGoXW/BjrG9pvOKandmtRDgwP9J0AOSOU4dh6CjQq68ncBDimlfZRbtR7EOjEXQvjRtudlbkRR/cqOCcUYTJ0CKEIk6OnLOH0TsnsCvwDWX7fQ0vMjVAAAAAASUVORK5CYII=",
  NT =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiklEQVR4nO2aT4hVdRTHj75z7jiLtBKyrI0QRqUuTEQQdBMouDFCIcwI+rOoIN0k4mLAEMKF4kJBCKzAzeDcc24OE5QxGOE/ghb9IQNbFGXQQsUZ553zdH7xe+/5fKM+333T/d13L/SFs72/3+ecc889v/O7AP+ru9w4zFOms8r0tXMwB8oqjekVE3INw3VQVinTl20gx6CMmhwZfEqFbt4GUaYJNwbzoWwywaE70WjBvAllknMwxwQv3QMidAbKpJpUXrwb4rZVJXoOyiITPN4JRJn2QxnkhmGBMk0+AORvdxQIii4TfLcTRCu9ONoMRZcJfdcNxBgTKLKUaXlXiEZ61dwIPAFFlTIdSgPSjMoHUES5YYiU6Z/UIIIXC9lIakxb00M0LcG1UDQp0xc9gwh+nOsmHcPDvgmsxtGzFuNq/+WucvSyMr1uCb5ngnvaG8S0pkLXjXGXMb6jQq9VJXqp0RXgqqpEz0yeHHwydaOpQm+Z4GfGGCvTV/XyyfiLMf6pTNd693IYU6GrJviHCf6sTBcae8UTxviJJtEWnxIT/d7kfze8BLWksrFB2+/NzD5SNa5sqKfXVDLwtDH+1O9NWa/G+Kt/b2e+0AIPmSCXKBJjvgh1PhAx7lKhW4UFYJpWoY/cEMztXsmSaEsRi4AyTWlMr6Yqx3dgaIUx/tbvzVvL8HdjeqEniFaqxbBQhU71G0KFvnEj8NisIFow44A+J/sIcjTTE6UKbVOhGzm+D1VleiMzgBkwn9PKeq6GT6W/LME1EFKTMrjY9zoBI3HBrwF5SIUOBgQ5AHnJGH8Ml1r4Qy4QbhQe91/XgBGZzmUw4Q9AwV92pu3BQeqHsMAgxvhpUAjfVNZLY/iIXA46YdERWhY8GtKESej5YCDGuCMvEBN8PxiIMo325FUhU6F9TbMe02s03CTRj2/Se/T79rbbz4VV6HwPIBNuDAYyB7EY16eMwg1/ynTDULnHGUMw15jeTu8QzP5KW5k+TOHF09U4WtrtWVPJwJKZV9cdnbI3BMi5Byx4xXu615LZPFJ3HHwr09lMIfy0otNIVIVO+tHmrJ+dwKJOH1kVuulG4ZHMQPxM9j7euuznv1mtUZPKpvuddTK9plOhI20A096DbhgehTAXqYfax1EqdDizBZTp22YVuZjHzzEmuK6xVsY/GdQfnOBu/9sS5CQ3DvNMcKcv+3mtWQj9C8UT9VehiHK2AAAAAElFTkSuQmCC",
  TT =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEn0lEQVR4nO2ZW4hcRRCGK07V2V0VWc2LNxRBoz6IoGKEICqKSkAQ86ARvIBE8ALqQ/Qh4uVBjPqgICqLosG86Jg9VbPJLnhdYxQvRDEq8fKQoCS4gkSj7u6pHk1LnUt2djLjzGzOmZ0Bfxg4HPp09zd16epugP/VWt7DEmV6T5netWfoV1W5dKkT8vEvxEugX+UYNx4EEXwV+lGeYViFZgxChf6xZ3sH/SZXwbszayjT26lV7oJ+k2P8ogbkxviZcQf0k5zgBXOxQd5PwqAy7Utg6HzoFynTC7Ug8Tuh59J4eR76Qb4MQyr0Wz1IZiUV+t2PwZHQ69IK3VILkYGYnOCXKczN0OtSoQ+agjDemwb/VuhlRWGwTJkONAPxISxVpsjeRWFwNvSqlOnJeohaEJNjfCN1ryegF+UnAZXp51YgVS6tTN1ryo8AQa8p4mBVI4h6EP8wHOEEf4rdqxJcB70mFZpoByRt+1jqXuNdnaRnGJ4eHTrZAtSFeGFVSleYBZTp1qSmwnUq9He7ILOVgdMtKSTf4Drrw/qKOFhlfdsYNpaN2XahqUJrrMR2jGFa3G13jN85xr3KtL/Z5Dr5NRn3/U76UJsL4954bkLb47kyhjZ3Y7AO/8xjsp2CzGwaPFWZHlWmZ5zgS46xrExvKdPHjvEbx/ij1WeN0nkDyFmoVkpXW9nQbZBO5MtwtB+FE2ydsqJTmW7LDGAQGtLquGG0OTjDCe7sVZBauQqusNQd9824x+JpXgM/Acc4wbFeBlGhNSqksSWEPvJb4PiGDX0ZSiq0vtdAvC22tfNi3Gh7nNbkIa3O9tuLDeLLcJwKvZPGQ9UxPtBRBzpG52Ur8GKBRBKcmaZbc6Vfq1y6fEEdTcvQiSr06WKAVLm08mA2ZdwxWxk4DQ5HfgIGHOOGboF4D0vMfewIKYUo+zfhKMhLTvCe/ypD8gDxkzAYVxlJPFgJs96KTMhb88ydM4jVVc7Ko7QciTi4BopUNBac5QS/zxvECb6eutIPXds9drrWtNnnU6k1HoduyTF+njeI1XwuAfmseILsACHLKDmC2FmXMkWWUPwWOLZwEGW6vqispUxbrX3EwbXFUiRB+WJRIE7wodS9nu1GfOwqDKSCK5JvcGehEMm+ZQGrO2PZ1olW/fsRIGX6w76Z3jx0UmEgjvHOBYEk7vKXlR6tVmoVGk/b31QkyGiHkz/gBF9xjC9ne28V2maLatMxBO9LrbihEIh405Vd1rTnTruqYenKmj/hYsf4bQrj4jqqDEH9ODpK56bf7ykExFXworaskKwxI3ZgcMifkdxcPZJtV53g105weYO7+ak4DYfBsvxBBB9sDYJfHXIY0EDKdI4yfdIM3Am+FvcX4h25g2SLVRMrNHWVZorPgJluz7KUE9xd5dJVc4eG8btNuULYxia712gQ0B8eTrVqu9DkxHAuVTvB5Wnf+yw2cwPJrgLqAPab6fPa+KjQDVlsqNAv8UFD3rfAKvR0nSuNz4wNngI5yzMMW7zMOyZlvD+3ASz3p1aYsqIRClZVSpfZBiv3OLFqNA7mEJZCF6+5neBag+rWmD2hfwGKo+xcO6v/zgAAAABJRU5ErkJggg==";
function ox({ averageRating: e }) {
  const t = Array.from({ length: 5 }, (r, n) => {
    let i = n + 0.5;
    return u.jsx(
      "span",
      {
        children:
          e >= n + 1
            ? u.jsx("img", { src: NT, className: "w-4 h-4", alt: "" })
            : e >= i
            ? u.jsx("img", { src: TT, className: "w-4 h-4", alt: "" })
            : u.jsx("img", { src: jT, className: "w-4 h-4", alt: "" }),
      },
      n
    );
  });
  return u.jsx("div", { className: "flex gap-1", children: t });
}
const _T = ({ ratings: e, averageRating: t }) => {
    const r = e && e.length,
      n = Array(5).fill(0);
    return (
      e &&
        e.forEach(({ rating: i }) => {
          i >= 1 && i <= 5 && n[i - 1]++;
        }),
      u.jsxs("div", {
        className: "mt-4",
        children: [
          u.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              u.jsx("span", {
                className: "font-bold sm:text-4xl opacity-90",
                children: t,
              }),
              u.jsx(ox, { averageRating: t }),
              u.jsxs("span", {
                className: "text-xs",
                children: [" ", r, " Reviews"],
              }),
            ],
          }),
          u.jsx("div", {
            className: "mt-4",
            children: n
              .slice(0)
              .reverse()
              .map((i, s) => {
                const o = 5 - s,
                  a = r ? (i / r) * 100 : 0;
                return u.jsxs(
                  "div",
                  {
                    className: "flex items-center my-2",
                    children: [
                      u.jsxs("span", {
                        className:
                          "flex items-center justify-center gap-1 mr-1 text-sm opacity-95",
                        children: [
                          o,
                          " ",
                          u.jsx(fp, {
                            className: "text-yellow-500 ",
                            size: 15,
                          }),
                          " ",
                        ],
                      }),
                      u.jsx("div", {
                        className: "relative w-full h-2 bg-gray-200 rounded",
                        children: u.jsx("div", {
                          className: "absolute h-full bg-yellow-500 rounded",
                          style: { width: `${a}%` },
                        }),
                      }),
                      u.jsx("span", {
                        className: "ml-2 text-xs opacity-75",
                        children: i,
                      }),
                    ],
                  },
                  o
                );
              }),
          }),
        ],
      })
    );
  },
  PT = ({ rating: e, onRatingChange: t }) => {
    const [r, n] = E.useState(null),
      i = (o) => {
        n(o);
      },
      s = () => {
        n(null);
      };
    return u.jsx("div", {
      className: "flex",
      children: [...Array(5)].map((o, a) => {
        const l = a + 1;
        return u.jsxs(
          "label",
          {
            className: "relative cursor-pointer",
            onMouseEnter: () => i(l),
            onMouseLeave: s,
            children: [
              u.jsx("input", {
                type: "radio",
                name: "rating",
                value: l,
                className: "absolute opacity-0 left-2 top-2",
                checked: l === e,
                onChange: () => t(l),
              }),
              u.jsx(fp, {
                className: `${
                  l <= (r || e) ? "text-yellow-500" : "text-gray-300"
                }`,
                size: 20,
              }),
            ],
          },
          a
        );
      }),
    });
  },
  OT =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFVUlEQVR4nO3dX4hVRQDH8W8aFCrt1d0Ne6kelgjKKKKEgkB6sD/0ZyNfKsvyT5GV0kNYoRD9cTG0CHqIwF56CIQCySIjKMvSMG9/KHopU6PIB0NJ1w3aG2Nz43I5M2fmnpl75s7MD+Zld+eeOfPZc+f8mXMO5PjMGcBFwIjXpeQY5RzgA6AF/A08blYtx0dmA59IjM4y4WVpOdrMAnYXYLTLMzjOHGABcAOwZEDLODCGnzyhwWiXZ10s6DZgBzBpsMBBKP8Aa3Cf1wyX/0KvC7gQ+CyADmx5KMeBGW49WCSxTZZvPaYsBI4E0HEtT+UvYCbu8yAwbdiGF222jJgxWsDT+Mtai3ZsNvlA1dfUYWAL8DCwakDLA8AVFTtcbFmLgZuBsxR/85QFyoayAby7gtgEN2oWntpB366OvvlKczT+vCHISeBM1QJ3FFQQGDmcxvi8oH+2KTpH7DTsMwD5U7WDIY4yT3X98aG8ZfyP8YWiQ8V4q8orJRji22e5qvJlBRVe0iwslQxpMHRbiDjBuLcEQ+wAKLO4oNJDpJ0hYI+mU7/VjCETJRilB6e3F1RcRroZKsH4AZivqPtcVQyRDNIfjMcwTAYJCEMkg3AaY28IGBkErxiP2mKkDtIIDSNlkEaIGKmCNIAvPWE8UrVxqYE0QsZIDaQROkZKIA2PGKtdNjQFkGFgv6ZTvwdGFXU3lmA4P+8XO8gw0NR0qihX9YghrqU7T8wgwwYYLXlNyAfGHXLXerc8q540yAjwtQGGKEstMcR1+rKMyTm+7XonNGNU9CAjFhjt69tiyufdwHYHGCJ3FdS/KUWQUeAbCwzTMi1n3phmWcFniL5OCmQ0EAyR5EFG5aVV1xhimuiKHv45kgfZHhBGBuG/gdk1hnKqTgYpz8cBYYgk/5V1PnDAEYaYC1w1yYO0UX6quDfl6txUUiBzgLM1t1Uc6HHLuN9hG5MAmQG8LjvvmGYPyBbFNUYyICsL2rpWg/KbIYaP9U0C5DtFp6pQlhtg3OeprdGDXFfSuUUo19aEkQTIWwZ7SN1jymYNxr2e2xs1yHxgymA8EChvyK+qN2vEiB5kvcUeU11jRjIgM4FfBgwjapDxAcSIGuTDAcSIFmTM4pEVIWFEC7Kl4nNN7qmx7dGBzAKO9gDxu5xBcl7N7Y8OZIUlxD45RUd1FrjfiQ5kjwHCpDwQvJLwEh3IKQ3EQWBd4I9jjQ7ko642TcufjXt6CJnrRAdyAfAe8CPwKnAJg5XoQAY9GSSwZJDAkkECSwYJLBkksGSQwJJBAksGCSwZxGHmyTtztwI75Zlk21I0lTUfqVtmLrDJ4ys6MohFFji6v0RXkrwtuleMY54xxOefa9KY1EHmlmwZ4tr8z/JGoLJyQvEZYtblLaYNSh1kk6IT3waulo8ON8mtiumuU/J3xkkZZJ5iAH/S8nOcYaQOsrRg3d+pEyN1kK0F6y6+pmrDSB1kZ8EA3vcxozspg+wvmM1SK0bqIM2u9Ra7v2W5UTFFaUq+y6tyMgjGIN4xMgjGW0hfMDIIRiB9w8gglIL0FSODoAXpO0YGQQlSC0bqr81rKkC8HmeUJeUXSzYLQGrFQD5me7LgDdGh3InUT5CTdWPoXk4s3lgZe5oF6107hu713RORbynNEDHa+VTRqF+Bl+VLS1YFWlYCiyzO1JqA1IrRfgLbEYNNOOSyzRFI7RjtLAT+CKBjWxXKxRVBgsHovLdvVwAd2+qxiMdxmOb90DE6Ixr2rsdZfC0PRTyx1CbXAMc75k0ZT9WpM+I45VJ5RL8k0HIncHmFtypcbzqJLScnJycnh0DyL8vMuuIBI4ZQAAAAAElFTkSuQmCC";
function RT({ colorMapping: e, reviews: t, timeAgo: r, refetch: n }) {
  var A, k;
  const [i] = b2(),
    [s, o] = E.useState(""),
    [a, l] = E.useState(""),
    [c, m] = E.useState(5),
    { productId: g } = Ql(),
    [d] = A2(),
    { data: v, isLoading: w, isError: x, isSuccess: b } = Di(),
    f = b && t.find((N) => N.userId === v.user.userId),
    [p, h] = E.useState(!1);
  E.useEffect(() => {
    f && (m(f.rating), l(f.reviewDesc), o(f.reviewTitle));
  }, [f]);
  const y = (N) => {
      m(N);
    },
    S = (N) => {
      N.preventDefault(),
        i({
          prodId: g,
          userName: v.user.name,
          reviewTitle: s,
          reviewDesc: a,
          rating: c,
        });
    },
    C = !f && !p;
  return u.jsxs("div", {
    children: [
      x &&
        u.jsx("p", {
          className: "text-center text-red-600",
          children: "You must Login to give reviews",
        }),
      f &&
        !p &&
        b &&
        u.jsxs("div", {
          className:
            "relative w-full p-3 py-5 space-y-6 bg-white border rounded-xl",
          children: [
            u.jsxs("div", {
              className: "flex items-center gap-2 space-y-1",
              children: [
                u.jsx("div", {
                  className: `flex items-center justify-center w-8 h-8 text-white ${
                    e[(A = f.userName[0]) == null ? void 0 : A.toUpperCase()] ||
                    "bg-gray-400"
                  } rounded-full`,
                  children:
                    (k = f.userName[0]) == null ? void 0 : k.toUpperCase(),
                }),
                u.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    u.jsx("h1", { children: f == null ? void 0 : f.userName }),
                    u.jsx("span", {
                      className: "text-[10px] opacity-70",
                      children: r(f == null ? void 0 : f.createdAt),
                    }),
                  ],
                }),
              ],
            }),
            u.jsx(sx, { rating: f == null ? void 0 : f.rating }),
            u.jsx("h1", {
              className: "font-semibold text-",
              children: f.reviewTitle,
            }),
            u.jsx("p", {
              className: "break-words text-",
              children: f == null ? void 0 : f.reviewDesc,
            }),
            u.jsx("button", {
              className: "absolute top-0 right-4",
              onClick: () => h(!0),
              children: u.jsx("img", { className: "w-5 h-5", src: OT }),
            }),
            u.jsx("button", {
              className: "absolute top-0 right-12",
              onClick: async () => {
                await d(g), n();
              },
              children: u.jsx("img", {
                className: "w-5 h-5",
                src: at.bin_icon,
              }),
            }),
          ],
        }),
      (p || C) &&
        b &&
        u.jsxs("div", {
          className:
            "relative w-full p-3 space-y-4 bg-white border-2 rounded-xl",
          children: [
            " ",
            u.jsxs("div", {
              className: "flex items-center gap-2 space-y-1",
              children: [
                u.jsx("div", {
                  className: `flex items-center justify-center w-8 h-8 text-white ${
                    e[Array.from(v.user.name)[0].toUpperCase()]
                  } rounded-full`,
                  children: Array.from(v.user.name)[0].toUpperCase(),
                }),
                u.jsx("div", {
                  className: "flex flex-col",
                  children: u.jsx("h1", {
                    className: "capitalize",
                    children: v.user.name,
                  }),
                }),
              ],
            }),
            " ",
            u.jsxs("form", {
              onSubmit: S,
              action: "",
              className: "space-y-4 ",
              children: [
                u.jsx(PT, { rating: c, onRatingChange: y }),
                " ",
                u.jsx("input", {
                  value: s,
                  onChange: (N) => o(N.target.value),
                  type: "text",
                  className: "p-2 border-2 outline-none",
                  placeholder: "Title",
                }),
                " ",
                u.jsx("textarea", {
                  value: a,
                  onChange: (N) => l(N.target.value),
                  name: "",
                  className: "w-full p-2 border-2 outline-none",
                  placeholder: "Description",
                  id: "",
                }),
                u.jsx("div", {
                  className: "flex justify-end w-full",
                  children: u.jsx("button", {
                    className:
                      "bottom-0 right-0 p-2 px-12 text-white bg-black ",
                    children: f ? "Update" : "Add",
                  }),
                }),
              ],
            }),
            p &&
              u.jsx("button", {
                onClick: () => h(!1),
                className: "absolute top-0 right-4",
                children: u.jsx("img", {
                  src: at.cross_icon,
                  alt: "",
                  className: "w-5 h-5",
                }),
              }),
          ],
        }),
    ],
  });
}
function IT() {
  var l;
  const { productId: e } = Ql(),
    { data: t, isFetching: r, refetch: n } = xv(e),
    i =
      ((l = t == null ? void 0 : t.reviews) == null
        ? void 0
        : l.slice().reverse()) || [],
    s =
      i.length > 0
        ? (i.reduce((c, m) => c + m.rating, 0) / i.length).toFixed(1)
        : "No ratings yet",
    o = {
      A: "bg-red-500",
      B: "bg-blue-500",
      C: "bg-green-500",
      D: "bg-yellow-500",
      E: "bg-purple-500",
      F: "bg-pink-500",
      G: "bg-indigo-500",
      H: "bg-teal-500",
      I: "bg-orange-500",
      J: "bg-gray-500",
      K: "bg-red-300",
      L: "bg-blue-300",
      M: "bg-green-300",
      N: "bg-yellow-300",
      O: "bg-purple-300",
      P: "bg-pink-300",
      Q: "bg-indigo-300",
      R: "bg-teal-300",
      S: "bg-orange-300",
      T: "bg-gray-300",
      U: "bg-red-200",
      V: "bg-blue-200",
      W: "bg-green-200",
      X: "bg-yellow-200",
      Y: "bg-purple-200",
      Z: "bg-pink-200",
    };
  function a(c) {
    const m = Math.floor((new Date() - new Date(c)) / 1e3),
      g = [
        { label: "year", seconds: 31536e3 },
        { label: "month", seconds: 2592e3 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
      ];
    for (const d of g) {
      const v = Math.floor(m / d.seconds);
      if (v >= 1) return `${v} ${d.label}${v > 1 ? "s" : ""} ago`;
    }
    return `${m} seconds ago`;
  }
  return r
    ? u.jsx("div", {
        className: "flex items-center justify-center w-full py-10",
        children: u.jsx(rn, { width: 40, height: 40, color: "gray" }),
      })
    : u.jsxs("div", {
        className: "w-full my-6 space-y-12",
        children: [
          u.jsx(RT, { refetch: n, timeAgo: a, reviews: i, colorMapping: o }),
          u.jsx(_T, { ratings: i, averageRating: s }),
          u.jsx("div", {
            className: "flex flex-col grid-cols-2 gap-6 lg:grid",
            children:
              i.length > 0
                ? i.map((c) => {
                    var m, g;
                    return u.jsxs(
                      "div",
                      {
                        className:
                          "w-full p-3 space-y-4 bg-white border rounded-xl",
                        children: [
                          u.jsxs("div", {
                            className: "flex items-center gap-2 space-y-1",
                            children: [
                              u.jsx("div", {
                                className: `flex items-center justify-center w-8 h-8 text-white ${
                                  o[
                                    (m = c.userName[0]) == null
                                      ? void 0
                                      : m.toUpperCase()
                                  ] || "bg-gray-400"
                                } rounded-full`,
                                children:
                                  (g = c.userName[0]) == null
                                    ? void 0
                                    : g.toUpperCase(),
                              }),
                              u.jsxs("div", {
                                className: "flex flex-col",
                                children: [
                                  u.jsx("h1", {
                                    children: c == null ? void 0 : c.userName,
                                  }),
                                  u.jsx("span", {
                                    className: "text-[10px] opacity-70",
                                    children: a(
                                      c == null ? void 0 : c.createdAt
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsx(sx, { rating: c == null ? void 0 : c.rating }),
                          u.jsx("h1", {
                            className: "text-xs font-semibold",
                            children: c.reviewTitle,
                          }),
                          u.jsx("p", {
                            className: "text-xs break-words",
                            children: c == null ? void 0 : c.reviewDesc,
                          }),
                        ],
                      },
                      c == null ? void 0 : c._id
                    );
                  })
                : u.jsx("div", {
                    className:
                      "col-span-2 py-4 text-sm italic text-center text-gray-500",
                    children:
                      "No reviews yet. Be the first to review this product!",
                  }),
          }),
        ],
      });
}
function MT() {
  var j, T;
  const e = et(),
    { productId: t } = Ql(),
    { data: r, refetch: n } = xv(t),
    i =
      ((j = r == null ? void 0 : r.reviews) == null ? void 0 : j.length) > 0
        ? (
            r.reviews.reduce((_, P) => _ + P.rating, 0) / r.reviews.length
          ).toFixed(1)
        : "No ratings yet",
    s = ((T = r == null ? void 0 : r.reviews) == null ? void 0 : T.length) || 0,
    [o, a] = E.useState(!1),
    { data: l, isSuccess: c } = Di(),
    [m] = f2(),
    g = Hl(),
    [d, v] = E.useState(""),
    w = () =>
      W.success("Item added to cart", {
        position: "top-right",
        autoClose: 5e3,
        hideProgressBar: !1,
        closeOnClick: !1,
        pauseOnHover: !0,
        draggable: !0,
        progress: void 0,
        theme: "light",
      }),
    x = () =>
      W.error("Please Select A Size", {
        position: "top-right",
        autoClose: 5e3,
        hideProgressBar: !1,
        closeOnClick: !1,
        pauseOnHover: !0,
        draggable: !0,
        progress: void 0,
        theme: "light",
      }),
    { isfetching: b, data: f = [] } = Li(),
    [p, h] = E.useState();
  if (b) return u.jsx("p", { children: "Loading" });
  const y = f,
    [S, C] = E.useState(),
    A = () => {
      const _ = y.find((P) => P._id === t);
      _ && (C(_.image[0]), h(_));
    };
  E.useEffect(() => {
    y.length > 0 && (A(), n());
  }, [t, f]);
  const k = () => {
      d.length > 0 &&
        g(
          wn.addOrderItem({
            productId: p._id,
            name: p.name,
            price: p.price,
            size: d,
            imgUrl: p.image[0],
            quantity: 1,
            _id: Fh(),
          })
        ),
        d.length > 0 && e("/place-order");
    },
    N = () => {
      d.length <= 0 && x(),
        c
          ? d.length > 0 &&
            m({
              productId: p._id,
              name: p.name,
              price: p.price,
              size: d,
              imgUrl: p.image[0],
              quantity: 1,
            })
          : d.length > 0 &&
            g(
              wn.addItem({
                productId: p._id,
                name: p.name,
                price: p.price,
                size: d,
                imgUrl: p.image[0],
                quantity: 1,
                _id: Fh(),
              })
            ),
        d.length > 0 && w();
    };
  return p
    ? u.jsxs("div", {
        className: "mt-5 outfit",
        children: [
          u.jsxs("div", {
            className: "flex flex-col pt-5 sm:flex-row",
            children: [
              u.jsxs("div", {
                className:
                  "flex flex-col flex-1 gap-2 sm:w-1/2 sm:flex-row-reverse",
                children: [
                  " ",
                  u.jsxs("div", {
                    className: "w-full sm:w-[80%]",
                    children: [
                      " ",
                      u.jsx("img", {
                        className: "w-full h-auto ",
                        src: S,
                        alt: "",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className:
                      "sm:flex grid grid-cols-4 gap-3 sm:w-[18.7%] sm:h-full sm:flex-col",
                    children: [
                      p.image.map((_, P) =>
                        u.jsx(
                          "button",
                          {
                            className: `${
                              _ === S && "border-2 sm:w-full border-orange-400"
                            }`,
                            onClick: () => {
                              C(_);
                            },
                            children: u.jsx("img", {
                              src: _,
                              className: "",
                              alt: "",
                            }),
                          },
                          P
                        )
                      ),
                      " ",
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "break-all whitespace-normal sm:w-1/2 sm:px-8",
                children: [
                  u.jsxs("div", {
                    className: "flex flex-col gap-4 py-8 sm:p-0",
                    children: [
                      u.jsx("h1", { className: "text-2xl", children: p.name }),
                      u.jsxs("div", {
                        className: "flex items-center gap-1",
                        children: [
                          u.jsx(ox, { averageRating: i }),
                          "   (",
                          s,
                          ")",
                        ],
                      }),
                      u.jsxs("h1", {
                        className: "text-2xl font-semibold",
                        children: ["$", p.price],
                      }),
                      u.jsx("p", {
                        className: " opacity-70",
                        children: p.description,
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "mb-10 space-y-5",
                    children: [
                      u.jsx("h1", { children: "Select Size" }),
                      u.jsx("div", {
                        children: p.sizes.map((_, P) =>
                          u.jsx(
                            "button",
                            {
                              onClick: (O) => v(_),
                              className: `p-2 px-4 ${
                                _ === d && "border border-orange-400"
                              } mr-2 bg-gray-100 `,
                              children: _,
                            },
                            P
                          )
                        ),
                      }),
                      " ",
                      u.jsxs("div", {
                        className: "space-y-1.5",
                        children: [
                          u.jsx("button", {
                            onClick: N,
                            className: "py-3 text-sm text-white bg-black px-7",
                            children: "ADD TO CART",
                          }),
                          u.jsx("br", {}),
                          u.jsx("button", {
                            onClick: k,
                            className:
                              "w-[146.98px] py-2.5 text-sm text-white bg-yellow-300 px-7",
                            children: "BUY NOW",
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "flex flex-col gap-1 py-5 mt-5 text-sm text-gray-500 border-t border-gray-300",
                        children: [
                          u.jsx("p", { children: "100% Original product." }),
                          u.jsx("p", {
                            children:
                              "Cash on delivery is available on this product.",
                          }),
                          u.jsx("p", {
                            children:
                              "Easy return and exchange policy within 7 days.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "my-20 sm:my-5",
            children: [
              u.jsxs("div", {
                className: "flex",
                children: [
                  u.jsx("p", {
                    className: `px-5 cursor-pointer py-3 text-sm border ${
                      !o && "border-[#00000073]"
                    }`,
                    onClick: () => a(!1),
                    children: "Description",
                  }),
                  u.jsxs("p", {
                    className: `px-5 py-3 text-sm border ${
                      o && "border-[#00000073]"
                    } cursor-pointer`,
                    onClick: () => a(!0),
                    children: ["Reviews (", s, ")"],
                  }),
                ],
              }),
              o
                ? u.jsx(IT, {})
                : u.jsxs("div", {
                    className:
                      "flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border",
                    children: [
                      u.jsx("p", {
                        children:
                          "An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.",
                      }),
                      u.jsx("p", {
                        children:
                          "E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.",
                      }),
                    ],
                  }),
            ],
          }),
          u.jsx(LN, { category: p.category }),
        ],
      })
    : u.jsx("div", {
        className: "flex items-center justify-center w-full my-14",
        children: u.jsx(rn, {
          visible: !0,
          height: "30",
          width: "30",
          color: "gray",
          ariaLabel: "oval-loading",
          wrapperStyle: {},
          wrapperClass: "",
          strokeWidthSecondary: 5,
          strokeWidth: 5,
        }),
      });
}
function LT({
  setCategory: e,
  setSubCategory: t,
  subCategory: r,
  category: n,
}) {
  const [i, s] = E.useState(!1),
    o = (l) => {
      n.includes(l.target.value)
        ? e((c) => c.filter((m) => m !== l.target.value))
        : e((c) => [...c, l.target.value]);
    },
    a = (l) => {
      r.includes(l.target.value)
        ? t((c) => c.filter((m) => m !== l.target.value))
        : t((c) => [...c, l.target.value]);
    };
  return u.jsxs("div", {
    children: [
      u.jsxs("button", {
        onClick: () => s((l) => !l),
        className: "flex items-center gap-2 my-5 text-xl",
        children: [
          "FILTERS",
          u.jsx("img", {
            className: `h-3 sm:hidden ${i && "rotate-90"}`,
            src: at.dropdown_icon,
          }),
        ],
      }),
      u.jsxs("div", {
        className: `sm:flex ${i ? "flex" : "hidden"} flex-col gap-4`,
        children: [
          u.jsxs("div", {
            className:
              "flex flex-col gap-3 p-6 py-3 text-sm border border-gray-400 rounded-sm md:pr-24 opacity-80 ",
            children: [
              u.jsx("h1", { className: "font-bold", children: "CATEGORIES" }),
              u.jsxs("label", {
                className: "flex items-center gap-2",
                htmlFor: "",
                children: [
                  u.jsx("input", {
                    onChange: o,
                    type: "checkbox",
                    value: "Men",
                  }),
                  " Men ",
                ],
              }),
              u.jsxs("label", {
                className: "flex items-center gap-2",
                htmlFor: "",
                children: [
                  u.jsx("input", {
                    onChange: o,
                    type: "checkbox",
                    value: "Women",
                  }),
                  " Women ",
                ],
              }),
              u.jsxs("label", {
                className: "flex items-center gap-2",
                htmlFor: "",
                children: [
                  u.jsx("input", {
                    onChange: o,
                    type: "checkbox",
                    value: "Kids",
                  }),
                  " Kids ",
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className:
              "flex flex-col gap-3 p-6 py-3 text-sm border border-gray-400 rounded-sm opacity-80 ",
            children: [
              u.jsx("h1", { className: "font-bold", children: "TYPE" }),
              u.jsxs("label", {
                className: "flex items-center gap-2",
                htmlFor: "",
                children: [
                  u.jsx("input", {
                    type: "checkbox",
                    onChange: a,
                    value: "Topwear",
                  }),
                  " Topwear ",
                ],
              }),
              u.jsxs("label", {
                className: "flex items-center gap-2",
                htmlFor: "",
                children: [
                  u.jsx("input", {
                    type: "checkbox",
                    onChange: a,
                    value: "Bottomwear",
                  }),
                  " Bottomwear ",
                ],
              }),
              u.jsxs("label", {
                className: "flex items-center gap-2",
                htmlFor: "",
                children: [
                  u.jsx("input", {
                    type: "checkbox",
                    onChange: a,
                    value: "Winterwear",
                  }),
                  " Winterwear ",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function DT({ products: e, setSortType: t }) {
  const r = et(),
    [n, i] = E.useState([]);
  return (
    E.useEffect(() => {
      i(e);
    }, [e]),
    u.jsxs("div", {
      className: "relative flex flex-col items-center gap-10 my-20",
      children: [
        u.jsxs("select", {
          onChange: (s) => t(s.target.value),
          className:
            "absolute right-0 px-2 py-3 text-sm border-2 border-gray-300 outline-none lg::-top-8 -top-16",
          children: [
            u.jsx("option", {
              value: "relavent",
              children: "Sort by: Relavent",
            }),
            u.jsx("option", {
              value: "low-high",
              children: "Sort by: Low to High",
            }),
            u.jsx("option", {
              value: "high-low",
              children: "Sort by: High to Low",
            }),
          ],
        }),
        u.jsx("div", {
          className: "flex flex-col items-center gap-4",
          children: u.jsxs("h2", {
            className: "flex items-center gap-3 text-2xl md:text-3xl outfit",
            children: [
              u.jsx("span", { className: "opacity-70", children: "ALL " }),
              "  COLLECTIONS",
              u.jsx("span", { className: "h-[2px] w-8 bg-black" }),
            ],
          }),
        }),
        u.jsx("div", {
          className:
            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-5",
          children:
            n.length > 0 &&
            n.map((s, o) =>
              u.jsxs(
                "div",
                {
                  onClick: () => r(`/product/${s._id}`),
                  className: "flex flex-col gap-2 text-xs cursor-pointer group",
                  children: [
                    u.jsx("div", {
                      className: "overflow-hidden",
                      children: u.jsx("img", {
                        src: s.image[0] || s.image[1] || s.image[2],
                        className:
                          "transition-all delay-50 group-hover:scale-110",
                        alt: "",
                      }),
                    }),
                    u.jsxs("div", {
                      className: " [&>p]:opacity-70 flex flex-col gap-1 px-2",
                      children: [
                        u.jsx("p", { className: "", children: s.name }),
                        u.jsxs("p", {
                          className: "font-bold",
                          children: ["$", s.price],
                        }),
                      ],
                    }),
                  ],
                },
                s._id
              )
            ),
        }),
      ],
    })
  );
}
function zT({ showForm: e, setShowForm: t }) {
  const { isFetching: r, data: n = [] } = Li(),
    [i, s] = E.useState([]),
    [o, a] = E.useState([]),
    [l, c] = E.useState([]),
    [m, g] = E.useState([]),
    [d, v] = E.useState(""),
    [w, x] = E.useState("");
  return (
    E.useEffect(() => {
      n.length && (s(n), a(n));
    }, [n]),
    E.useEffect(() => {
      let b = [...i];
      w &&
        (b = b.filter(
          (f) =>
            f.name.toLowerCase().includes(w.toLowerCase()) ||
            f.category.toLowerCase().includes(w.toLowerCase()) ||
            f.subCategory.toLowerCase().includes(w.toLowerCase())
        )),
        l.length > 0 && (b = b.filter((f) => l.includes(f.category))),
        m.length > 0 && (b = b.filter((f) => m.includes(f.subCategory))),
        d === "low-high"
          ? (b = b.sort((f, p) => f.price - p.price))
          : d === "high-low" && (b = b.sort((f, p) => p.price - f.price)),
        a(b);
    }, [i, l, m, w, d]),
    u.jsxs(u.Fragment, {
      children: [
        e &&
          u.jsxs("div", {
            className: "flex items-center justify-center gap-2 mt-3 mb-5",
            children: [
              u.jsx("button", {
                onClick: () => t((b) => !b),
                className: "w-3 h-3",
                children: u.jsx("img", {
                  className: "w-full h-full",
                  src: B0,
                  alt: "",
                }),
              }),
              u.jsxs("form", {
                onSubmit: (b) => b.preventDefault(),
                className:
                  "flex w-full h-10 px-4 border border-gray-400 sm:w-1/2 rounded-3xl",
                children: [
                  u.jsx("input", {
                    autoFocus: !0,
                    value: w,
                    onChange: (b) => x(b.target.value),
                    type: "text",
                    placeholder: "Search Items here...",
                    className: "w-full h-full px-1 outline-none",
                  }),
                  u.jsx("button", { children: u.jsx(BA, {}) }),
                ],
              }),
            ],
          }),
        u.jsxs("div", {
          className: "flex flex-col sm:gap-3 sm:flex-row outfit",
          children: [
            u.jsx(LT, {
              setSubCategory: g,
              subCategory: m,
              category: l,
              setCategory: c,
            }),
            r
              ? u.jsx("div", {
                  className: "flex items-center justify-center w-full my-14",
                  children: u.jsx(rn, {
                    visible: !0,
                    height: "30",
                    width: "30",
                    color: "gray",
                    ariaLabel: "oval-loading",
                    wrapperStyle: {},
                    wrapperClass: "",
                    strokeWidthSecondary: 5,
                    strokeWidth: 5,
                  }),
                })
              : u.jsx(DT, { setSortType: v, products: o }),
          ],
        }),
      ],
    })
  );
}
function UT() {
  return u.jsx("div", {
    children: u.jsxs("div", {
      children: [
        u.jsx("div", {
          className: "pt-8 text-2xl text-center border-t",
          children: u.jsxs("div", {
            className: "inline-flex items-center gap-2 mb-3",
            children: [
              u.jsxs("p", {
                className: "text-gray-500",
                children: [
                  "ABOUT ",
                  u.jsx("span", {
                    className: "font-medium text-gray-700",
                    children: "US",
                  }),
                ],
              }),
              u.jsx("p", {
                className: "w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700",
              }),
            ],
          }),
        }),
        u.jsxs("div", {
          className: "flex flex-col gap-16 my-10 md:flex-row",
          children: [
            u.jsx("img", {
              className: "w-full md:max-w-[450px]",
              src: at.about_img,
              alt: "",
            }),
            u.jsxs("div", {
              className:
                "flex flex-col justify-center gap-6 text-gray-600 md:w-2/4",
              children: [
                u.jsx("p", {
                  children:
                    "Bigby's was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.",
                }),
                u.jsx("p", {
                  children:
                    "Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.",
                }),
                u.jsx("b", {
                  className: "text-gray-800",
                  children: "Our Mission",
                }),
                u.jsx("p", {
                  children:
                    "Our mission at Bigby's is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.",
                }),
              ],
            }),
          ],
        }),
        u.jsx("div", {
          className: "py-4 text-xl ",
          children: u.jsxs("div", {
            className: "inline-flex items-center gap-2 mb-3",
            children: [
              u.jsxs("p", {
                className: "text-gray-500",
                children: [
                  "WHY ",
                  u.jsx("span", {
                    className: "font-medium text-gray-700",
                    children: "CHOOSE US",
                  }),
                ],
              }),
              u.jsx("p", {
                className: "w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700",
              }),
            ],
          }),
        }),
        u.jsxs("div", {
          className: "flex flex-col mb-20 text-sm md:flex-row",
          children: [
            u.jsxs("div", {
              className:
                "flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20",
              children: [
                u.jsx("b", { children: "Quality Assurance:" }),
                u.jsx("p", {
                  className: "text-gray-600 ",
                  children:
                    "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20",
              children: [
                u.jsx("b", { children: "Convenience:" }),
                u.jsx("p", {
                  className: "text-gray-600 ",
                  children:
                    "With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20",
              children: [
                u.jsx("b", { children: "Exceptional Customer Service:" }),
                u.jsx("p", {
                  className: "text-gray-600 ",
                  children:
                    "Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.",
                }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "text-center ",
          children: [
            u.jsx("p", {
              className: "text-2xl font-medium text-gray-800",
              children: "Subscribe now & get 20% off",
            }),
            u.jsx("p", {
              className: "mt-3 text-gray-400",
              children:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            }),
            u.jsxs("form", {
              onSubmit: (e) => e.preventDefault(),
              className:
                "flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2",
              children: [
                u.jsx("input", {
                  className: "w-full outline-none sm:flex-1",
                  type: "email",
                  placeholder: "Enter your email",
                  required: "",
                }),
                u.jsx("button", {
                  type: "submit",
                  className: "px-10 py-4 text-xs text-white bg-black",
                  children: "SUBSCRIBE",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function BT() {
  return u.jsx("div", {
    children: u.jsxs("div", {
      children: [
        u.jsx("div", {
          className: "pt-10 text-2xl text-center border-t",
          children: u.jsxs("div", {
            className: "inline-flex items-center gap-2 mb-3",
            children: [
              u.jsxs("p", {
                className: "text-gray-500",
                children: [
                  "CONTACT ",
                  u.jsx("span", {
                    className: "font-medium text-gray-700",
                    children: "US",
                  }),
                ],
              }),
              u.jsx("p", {
                className: "w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700",
              }),
            ],
          }),
        }),
        u.jsxs("div", {
          className:
            "flex flex-col justify-center gap-10 my-10 md:flex-row mb-28",
          children: [
            u.jsx("img", {
              className: "w-full md:max-w-[480px]",
              src: at.contact_img,
              alt: "",
            }),
            u.jsxs("div", {
              className: "flex flex-col items-start justify-center gap-6",
              children: [
                u.jsx("p", {
                  className: "text-xl font-semibold text-gray-600",
                  children: "Our Store",
                }),
                u.jsxs("p", {
                  className: "text-gray-500 ",
                  children: [
                    "54709 Willms Station ",
                    u.jsx("br", {}),
                    " Suite 350, Washington, USA (dummy)",
                  ],
                }),
                u.jsxs("p", {
                  className: "text-gray-500 ",
                  children: [
                    "Tel: (415) 555-0132 (dummy)",
                    u.jsx("br", {}),
                    " Email: mudasir8482289@gmail.com",
                  ],
                }),
                u.jsx("p", {
                  className: "text-xl font-semibold text-gray-600",
                  children: "Careers at Bigby's",
                }),
                u.jsx("p", {
                  className: "text-gray-500 ",
                  children: "Learn more about our teams and job openings.",
                }),
                u.jsx("button", {
                  className:
                    "px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white",
                  children: "Explore Jobs",
                }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "text-center ",
          children: [
            u.jsx("p", {
              className: "text-2xl font-medium text-gray-800",
              children: "Subscribe now & get 20% off",
            }),
            u.jsx("p", {
              className: "mt-3 text-gray-400",
              children:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            }),
            u.jsxs("form", {
              onSubmit: (e) => e.preventDefault(),
              className:
                "flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2",
              children: [
                u.jsx("input", {
                  className: "w-full outline-none sm:flex-1",
                  type: "email",
                  placeholder: "Enter your email",
                  required: "",
                }),
                u.jsx("button", {
                  type: "submit",
                  className: "px-10 py-4 text-xs text-white bg-black",
                  children: "SUBSCRIBE",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function FT({ showCart: e, setShowCart: t }) {
  const { data: r, isSuccess: n } = Di(),
    i = Vs((x) => x.Slice.items),
    s = et(),
    { data: o, isFetching: a } = ep(),
    [l] = d2(),
    [c] = a2(),
    m = Hl(),
    g = o ?? [],
    d = (x) => {
      n ? l(x) : m(wn.removeItem(x));
    },
    v = (x, b) => {
      n
        ? b > 0 && c({ itemId: x, quantity: b })
        : m(wn.updateItemQuantity({ itemId: x, quantity: b }));
    },
    w = () =>
      n && !a && Array.isArray(g)
        ? g.reduce((x, b) => x + Number(b.price) * Number(b.quantity), 0)
        : i.reduce((x, b) => x + Number(b.price) * Number(b.quantity), 0);
  return (
    E.useEffect(() => {
      window.sessionStorage.setItem("items", JSON.stringify(i));
    }, [i]),
    u.jsx("div", {
      children: u.jsxs("div", {
        className: "border-t pt-14",
        children: [
          u.jsx("div", {
            className: "mb-3 text-2xl ",
            children: u.jsxs("div", {
              className: "inline-flex items-center gap-2 mb-3",
              children: [
                u.jsxs("p", {
                  className: "text-gray-500",
                  children: [
                    "YOUR ",
                    u.jsx("span", {
                      className: "font-medium text-gray-700",
                      children: "CART",
                    }),
                  ],
                }),
                u.jsx("p", {
                  className: "w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700",
                }),
              ],
            }),
          }),
          u.jsxs("div", {
            className: "",
            children: [
              n &&
                !a &&
                Array.isArray(g) &&
                g.map((x, b) =>
                  u.jsxs(
                    "div",
                    {
                      className:
                        "py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-start gap-6 ",
                          children: [
                            u.jsx("button", {
                              onClick: () => s(`/product/${x.productId}`),
                              children: u.jsx("img", {
                                className: "w-16 sm:w-20",
                                src: x.imgUrl,
                                alt: "",
                              }),
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("p", {
                                  className: "text-xs font-medium sm:text-lg",
                                  children: x.name,
                                }),
                                u.jsxs("div", {
                                  className: "flex items-center gap-5 mt-2",
                                  children: [
                                    u.jsxs("p", { children: ["$", x.price] }),
                                    u.jsx("p", {
                                      className:
                                        "px-2 border sm:px-3 sm:py-1 bg-slate-50",
                                      children: x.size,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex",
                          children: [
                            u.jsx("button", {
                              onClick: () => v(x._id, Number(x.quantity) + 1),
                              className: "p-1.5 font-bold text-white bg-black",
                              children: "+",
                            }),
                            u.jsx("input", {
                              className:
                                "px-1 py-1 text-center border max-w-10 sm:max-w-20 sm:px-2",
                              type: "number",
                              min: "1",
                              disabled: !0,
                              value: x.quantity,
                            }),
                            u.jsx("button", {
                              onClick: () => v(x._id, Number(x.quantity) - 1),
                              className: "p-2 font-bold text-white bg-black",
                              children: "-",
                            }),
                          ],
                        }),
                        u.jsx("button", {
                          onClick: () => d(x._id),
                          children: u.jsx("img", {
                            className: "w-4 mr-4 cursor-pointer sm:w-5",
                            src: at.bin_icon,
                            alt: "",
                          }),
                        }),
                      ],
                    },
                    b
                  )
                ),
              !n &&
                i &&
                i.map((x, b) =>
                  u.jsxs(
                    "div",
                    {
                      className:
                        "py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-start gap-6 ",
                          children: [
                            u.jsx("button", {
                              onClick: () => s(`/product/${x.productId}`),
                              children: u.jsx("img", {
                                className: "w-16 sm:w-20",
                                src: x.imgUrl,
                                alt: "",
                              }),
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("p", {
                                  className: "text-xs font-medium sm:text-lg",
                                  children: x.name,
                                }),
                                u.jsxs("div", {
                                  className: "flex items-center gap-5 mt-2",
                                  children: [
                                    u.jsxs("p", { children: ["$", x.price] }),
                                    u.jsx("p", {
                                      className:
                                        "px-2 border sm:px-3 sm:py-1 bg-slate-50",
                                      children: x.size,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex",
                          children: [
                            u.jsx("button", {
                              onClick: () => v(x._id, Number(x.quantity) + 1),
                              className: "p-1.5 font-bold text-white bg-black",
                              children: "+",
                            }),
                            u.jsx("input", {
                              className:
                                "px-1 py-1 text-center border max-w-10 sm:max-w-20 sm:px-2",
                              type: "number",
                              min: "1",
                              disabled: !0,
                              value: x.quantity,
                            }),
                            u.jsx("button", {
                              onClick: () => v(x._id, Number(x.quantity) - 1),
                              className: "p-2 font-bold text-white bg-black",
                              children: "-",
                            }),
                          ],
                        }),
                        u.jsx("button", {
                          onClick: () => d(x._id),
                          children: u.jsx("img", {
                            className: "w-4 mr-4 cursor-pointer sm:w-5",
                            src: at.bin_icon,
                            alt: "",
                          }),
                        }),
                      ],
                    },
                    b
                  )
                ),
            ],
          }),
          u.jsx("div", {
            className: "flex justify-end my-20",
            children: u.jsxs("div", {
              className: "w-full sm:w-[450px]",
              children: [
                u.jsxs("div", {
                  className: "w-full",
                  children: [
                    u.jsx("div", {
                      className: "text-2xl",
                      children: u.jsxs("div", {
                        className: "inline-flex items-center gap-2 mb-3",
                        children: [
                          u.jsxs("p", {
                            className: "text-gray-500",
                            children: [
                              "CART ",
                              u.jsx("span", {
                                className: "font-medium text-gray-700",
                                children: "TOTALS",
                              }),
                            ],
                          }),
                          u.jsx("p", {
                            className:
                              "w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700",
                          }),
                        ],
                      }),
                    }),
                    u.jsxs("div", {
                      className: "flex flex-col gap-2 mt-2 text-sm",
                      children: [
                        u.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            u.jsx("p", { children: "Subtotal" }),
                            u.jsxs("p", { children: ["$", w().toFixed(2)] }),
                          ],
                        }),
                        u.jsx("hr", {}),
                        u.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            u.jsx("p", { children: "Shipping Fee" }),
                            u.jsx("p", {
                              children:
                                (i && i.length > 0) || (g && g.length > 0)
                                  ? "$10.00"
                                  : "$0.00",
                            }),
                          ],
                        }),
                        u.jsx("hr", {}),
                        u.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            u.jsx("b", { children: "Total" }),
                            u.jsxs("b", {
                              children: [
                                "$",
                                (
                                  w() +
                                  ((i && i.length > 0) || (g && g.length > 0)
                                    ? 10
                                    : 0)
                                ).toFixed(2),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx("div", {
                  className: "w-full text-end",
                  children: u.jsx("button", {
                    onClick: () => {
                      s("/place-order"), m(wn.addOrderItem({}));
                    },
                    disabled: g.length <= 0 && i.length <= 0,
                    className:
                      "px-8 py-3 my-8 text-sm text-white bg-black disabled:opacity-50 disabled:cursor-not-allowed",
                    children: "PROCEED TO CHECKOUT",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
function $T(e = {}) {
  const { nonce: t, onScriptLoadSuccess: r, onScriptLoadError: n } = e,
    [i, s] = E.useState(!1),
    o = E.useRef(r);
  o.current = r;
  const a = E.useRef(n);
  return (
    (a.current = n),
    E.useEffect(() => {
      const l = document.createElement("script");
      return (
        (l.src = "https://accounts.google.com/gsi/client"),
        (l.async = !0),
        (l.defer = !0),
        (l.nonce = t),
        (l.onload = () => {
          var c;
          s(!0), (c = o.current) === null || c === void 0 || c.call(o);
        }),
        (l.onerror = () => {
          var c;
          s(!1), (c = a.current) === null || c === void 0 || c.call(a);
        }),
        document.body.appendChild(l),
        () => {
          document.body.removeChild(l);
        }
      );
    }, [t]),
    i
  );
}
const ax = E.createContext(null);
function QT({
  clientId: e,
  nonce: t,
  onScriptLoadSuccess: r,
  onScriptLoadError: n,
  children: i,
}) {
  const s = $T({ nonce: t, onScriptLoadSuccess: r, onScriptLoadError: n }),
    o = E.useMemo(() => ({ clientId: e, scriptLoadedSuccessfully: s }), [e, s]);
  return q.createElement(ax.Provider, { value: o }, i);
}
function WT() {
  const e = E.useContext(ax);
  if (!e)
    throw new Error(
      "Google OAuth components must be used within GoogleOAuthProvider"
    );
  return e;
}
function HT(e) {
  var t;
  return (t = e == null ? void 0 : e.clientId) !== null && t !== void 0
    ? t
    : e == null
    ? void 0
    : e.client_id;
}
const KT = { large: 40, medium: 32, small: 20 };
function VT({
  onSuccess: e,
  onError: t,
  useOneTap: r,
  promptMomentNotification: n,
  type: i = "standard",
  theme: s = "outline",
  size: o = "large",
  text: a,
  shape: l,
  logo_alignment: c,
  width: m,
  locale: g,
  click_listener: d,
  containerProps: v,
  ...w
}) {
  const x = E.useRef(null),
    { clientId: b, scriptLoadedSuccessfully: f } = WT(),
    p = E.useRef(e);
  p.current = e;
  const h = E.useRef(t);
  h.current = t;
  const y = E.useRef(n);
  return (
    (y.current = n),
    E.useEffect(() => {
      var S, C, A, k, N, j, T, _, P;
      if (f)
        return (
          (A =
            (C =
              (S = window == null ? void 0 : window.google) === null ||
              S === void 0
                ? void 0
                : S.accounts) === null || C === void 0
              ? void 0
              : C.id) === null ||
            A === void 0 ||
            A.initialize({
              client_id: b,
              callback: (O) => {
                var L;
                if (!(O != null && O.credential))
                  return (L = h.current) === null || L === void 0
                    ? void 0
                    : L.call(h);
                const { credential: M, select_by: U } = O;
                p.current({ credential: M, clientId: HT(O), select_by: U });
              },
              ...w,
            }),
          (j =
            (N =
              (k = window == null ? void 0 : window.google) === null ||
              k === void 0
                ? void 0
                : k.accounts) === null || N === void 0
              ? void 0
              : N.id) === null ||
            j === void 0 ||
            j.renderButton(x.current, {
              type: i,
              theme: s,
              size: o,
              text: a,
              shape: l,
              logo_alignment: c,
              width: m,
              locale: g,
              click_listener: d,
            }),
          r &&
            ((P =
              (_ =
                (T = window == null ? void 0 : window.google) === null ||
                T === void 0
                  ? void 0
                  : T.accounts) === null || _ === void 0
                ? void 0
                : _.id) === null ||
              P === void 0 ||
              P.prompt(y.current)),
          () => {
            var O, L, M;
            r &&
              ((M =
                (L =
                  (O = window == null ? void 0 : window.google) === null ||
                  O === void 0
                    ? void 0
                    : O.accounts) === null || L === void 0
                  ? void 0
                  : L.id) === null ||
                M === void 0 ||
                M.cancel());
          }
        );
    }, [b, f, r, i, s, o, a, l, c, m, g]),
    q.createElement("div", {
      ...v,
      ref: x,
      style: { height: KT[o], ...(v == null ? void 0 : v.style) },
    })
  );
}
function lx() {
  const [e] = C2(),
    t = et();
  return u.jsx("div", {
    className: "flex justify-center mt-4",
    children: u.jsx(VT, {
      onSuccess: async (r) => {
        var n;
        try {
          const i = await e({ credential: r.credential }).unwrap();
          W.success("Google login successful"), t("/");
        } catch (i) {
          W.error(
            ((n = i == null ? void 0 : i.data) == null ? void 0 : n.message) ||
              "Google login failed"
          );
        }
      },
      onError: () => {
        W.error("Google Login Failed");
      },
    }),
  });
}
function qT() {
  const [e, t] = E.useState(""),
    [r, n] = E.useState(""),
    [i, { isError: s, error: o, isSuccess: a }] = c2(),
    l = (g, d) => {
      g === "error"
        ? W.error(d, {
            position: "top-right",
            autoClose: 5e3,
            hideProgressBar: !1,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "light",
          })
        : g === "success" &&
          W.success(d, {
            position: "top-right",
            autoClose: 5e3,
            hideProgressBar: !1,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "light",
          });
    },
    c = async (g) => {
      g.preventDefault();
      try {
        e.length > 0 && r.length > 0
          ? await i({ email: e, password: r })
          : l("error", "Please fill in all the details");
      } catch {}
    };
  E.useEffect(() => {
    s && o
      ? l("error", o == null ? void 0 : o.data.message)
      : a &&
        (l("success", "Logged in Successfulyy"),
        m("/"),
        window.location.reload());
  }, [s, o, a]);
  const m = et();
  return u.jsxs("div", {
    children: [
      u.jsxs("form", {
        onSubmit: c,
        className:
          "flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800",
        children: [
          u.jsxs("div", {
            className: "inline-flex items-center gap-2 mt-10 mb-2",
            children: [
              u.jsx("p", {
                className: "text-3xl prata-regular",
                children: "Login",
              }),
              u.jsx("hr", {
                className: "border-none h-[1.5px] w-8 bg-gray-800",
              }),
            ],
          }),
          u.jsx("input", {
            value: e,
            onChange: (g) => t(g.target.value),
            type: "email",
            className: "w-full px-3 py-2 border border-gray-800",
            placeholder: "Email",
            required: "",
          }),
          u.jsx("input", {
            type: "password",
            className: "w-full px-3 py-2 border border-gray-800",
            placeholder: "Password",
            required: "",
            value: r,
            onChange: (g) => n(g.target.value),
          }),
          u.jsxs("div", {
            className: "w-full flex justify-between text-sm mt-[-8px]",
            children: [
              u.jsx("p", {
                onClick: () => m("/forgot-password"),
                className: "cursor-pointer ",
                children: "Forgot your password?",
              }),
              u.jsx("p", {
                onClick: () => m("/Signin"),
                className: "cursor-pointer ",
                children: "Create account",
              }),
            ],
          }),
          u.jsx("button", {
            className: "px-8 py-2 mt-4 font-light text-white bg-black",
            children: "Sign In",
          }),
        ],
      }),
      u.jsx(lx, {}),
    ],
  });
}
function YT() {
  const [e, t] = E.useState(""),
    [r, n] = E.useState(""),
    [i, s] = E.useState(""),
    [o, { isError: a, error: l }] = u2(),
    c = (d, v) => {
      d === "error"
        ? W.error(v, {
            position: "top-right",
            autoClose: 5e3,
            hideProgressBar: !1,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "light",
          })
        : d === "success" &&
          W.success(v, {
            position: "top-right",
            autoClose: 5e3,
            hideProgressBar: !1,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "light",
          });
    },
    m = async (d) => {
      d.preventDefault();
      try {
        e.length > 0 && r.length > 0 && i.length > 0
          ? (await o({ name: e, email: r, password: i }),
            c("success", "Signed in Successfulyy"),
            g("/"),
            window.location.reload())
          : c("error", "Please fill in all the details");
      } catch {}
    },
    g = et();
  return (
    E.useEffect(() => {
      a && l && c("error", l == null ? void 0 : l.data.message);
    }, [a, l]),
    u.jsxs("div", {
      children: [
        u.jsxs("form", {
          onSubmit: m,
          className:
            "flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800",
          children: [
            u.jsxs("div", {
              className: "inline-flex items-center gap-2 mt-10 mb-2",
              children: [
                u.jsx("p", {
                  className: "text-3xl prata-regular",
                  children: "Sign Up",
                }),
                u.jsx("hr", {
                  className: "border-none h-[1.5px] w-8 bg-gray-800",
                }),
              ],
            }),
            u.jsx("input", {
              type: "text",
              value: e,
              onChange: (d) => t(d.target.value),
              className: "w-full px-3 py-2 border border-gray-800",
              placeholder: "Name",
              required: "",
            }),
            u.jsx("input", {
              value: r,
              onChange: (d) => n(d.target.value),
              type: "email",
              className: "w-full px-3 py-2 border border-gray-800",
              placeholder: "Email",
              required: "",
            }),
            u.jsx("input", {
              value: i,
              onChange: (d) => s(d.target.value),
              type: "password",
              className: "w-full px-3 py-2 border border-gray-800",
              placeholder: "Password",
              required: "",
            }),
            u.jsxs("div", {
              className: "w-full flex justify-between text-sm mt-[-8px]",
              children: [
                u.jsx("p", {
                  className: "cursor-pointer ",
                  children: "Forgot your password?",
                }),
                u.jsx("p", {
                  onClick: () => g("/Login"),
                  className: "cursor-pointer ",
                  children: "Login Here",
                }),
              ],
            }),
            u.jsx("button", {
              className: "px-8 py-2 mt-4 font-light text-white bg-black",
              children: "Sign Up",
            }),
          ],
        }),
        u.jsx(lx, {}),
      ],
    })
  );
}
function XT() {
  const [e, t] = E.useState(""),
    [r, n] = E.useState(""),
    [i, { isError: s, error: o, isSuccess: a }] = p2(),
    l = (g, d) => {
      g === "error"
        ? W.error(d, {
            position: "top-right",
            autoClose: 5e3,
            hideProgressBar: !1,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "light",
          })
        : g === "success" &&
          W.success(d, {
            position: "top-right",
            autoClose: 5e3,
            hideProgressBar: !1,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "light",
          });
    },
    c = async (g) => {
      g.preventDefault();
      try {
        e.length > 0 && r.length > 0
          ? await i({ email: e, password: r })
          : l("error", "Please fill in all the details");
      } catch {}
    };
  E.useEffect(() => {
    s && o
      ? l("error", o == null ? void 0 : o.data.message)
      : a &&
        (l("success", "Logged in Successfulyy"),
        m("/AdminPanel"),
        window.location.reload());
  }, [s, o, a]);
  const m = et();
  return u.jsx(u.Fragment, {
    children: u.jsx("div", {
      className: "flex items-center justify-center w-full min-h-screen",
      children: u.jsxs("div", {
        className: "max-w-md px-8 py-6 bg-white rounded-lg shadow-md",
        children: [
          u.jsx("h1", {
            className: "mb-4 text-2xl font-bold",
            children: "Admin Panel",
          }),
          u.jsxs("form", {
            onSubmit: c,
            children: [
              u.jsxs("div", {
                className: "mb-3 min-w-72",
                children: [
                  u.jsx("p", {
                    className: "mb-2 text-sm font-medium text-gray-700",
                    children: "Email Address",
                  }),
                  u.jsx("input", {
                    className:
                      "w-full px-3 py-2 border border-gray-300 rounded-md outline-none",
                    onChange: (g) => t(g.target.value),
                    type: "email",
                    placeholder: "your@email.com",
                    required: "",
                    value: e,
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "mb-3 min-w-72",
                children: [
                  u.jsx("p", {
                    className: "mb-2 text-sm font-medium text-gray-700",
                    children: "Password",
                  }),
                  u.jsx("input", {
                    onChange: (g) => n(g.target.value),
                    className:
                      "w-full px-3 py-2 border border-gray-300 rounded-md outline-none",
                    type: "password",
                    placeholder: "Enter your password",
                    required: "",
                    value: r,
                  }),
                ],
              }),
              u.jsx("button", {
                className:
                  "w-full px-4 py-2 mt-2 text-white bg-black rounded-md",
                type: "submit",
                children: " Login ",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const GT =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI5SURBVHgBtZZbS5RRFIZfzaKgIDrQUAbaiamgA3S6ncv6DXXRrwjGoAuDsh/RTXZRPyAJSu/0QlEQL2QuxtHxjEcURhTB93WtTx3Rz/3N4YVnDvvb31p7r31YqwFhaiYZ0kpaSMrbl0me5MhfMo8qdZ/8csPbZJz8Iz+d/6RAtsgG+e3vJNZ58pmskWnSQR6S00f0bfJnX8kiWfd3LyBQCl8/bEZt5BLCpYFmyQrpdVsnOtOaTJKnqFwvYOEfQ4xTja7POz5C9XpMimQEx4RXcVconqN2UpS23XaZtLO02FnUXlm3nT7YqO28AAtriFLYP4sn6RSZch+7ugo7Qx0IVxf5k6D/N9hyNTfy4zXsLP1IYOAsOZegfyds42Tk8C5syjnUT6Puo1UOb8POyybqp0330aJQXiSzMZ21Ob6jPIRP/LvnQFuJvCdzx9iRj1Sj/2lA9Qqy0eQjuhXTRyN7c6gtmlkG4VKkipqhYqs8dwb1k2xrUvnI4Q1UmMcCpVvmOsnJocKjvPcugYGSE6q3sJ3aFTXo2lGivRxo4JoTIl1tS7DKYU+asmb5CbVXm9tOH36gFKJU8gy100uyStqPeqhMMUBmUF22j6QEXCBDiMlCN2ElxgR5hcqlARfdVlBdMwgLxUfYoodKu/4DbGmGEeAskkKguGuxVfp9QXyZ+MD7FP2ddoQn8zJpZ+nIlHzUBVgh3Onoty4OFcKr3jcdZzD00r4Cu0/vkTuwDKN3dc/m3Wk3rLyM1Q7IrnrJFjF9QAAAAABJRU5ErkJggg==",
  JT =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgB1ZaNDYIwEIWfhgEYoW7gCk7gCo7gBnQDR3AFnQA3kA3ACXADvJMDmyjaUo7EL3mQ8HMfR5umQIuh5JSa0kwYrneU+lg4Ij7fKQWmw0gqygZi5q/IoEMm9XPujFvljlbQgx1YUlK0bWrCQ5MuMSOJnNdox04LwwceswYz0XV2oeygx4myTpwLN+jBsx2zTpC/le0ph18PPZcSxGGlTjlwP5f70TLriAwiZKkkRuQtK78Usp4ib1k2UNDCX+Qt+yS0CBMFyVxhPUIULHOFoaJRMmY7QtTLksCXzoiAlytekQ10MeLp/6eFDlbqH7t94xXtSlF0XzARXJO3HBVk3wi8NqqNQnLoD9M7D/ctiPZPx1n1AAAAAElFTkSuQmCC",
  ZT =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqOSURBVHgB7d3PTxR5Gsfxr4qCugo4E1ATlMm6QnY3ajyoJ/WkR2968z/wn/Km3rzpST2Q6MGo2Z2Ia1YUwwiiCxh+NMPMbH9q5mGKturpbzfVgNXvV2IUuru6wOfT3x9PNWwbGRn5LVSdPn06pD19+nTNx9zO7e14+/YAINe2paWl3wKATIwggIOAAA4CAjg6bLVeu4oH2hm7WEAEAgI4CAjgoA8COBhBAAcBARwEBHDQBwEy0AcBIhAQwEFAAAd9EMDBCAI4CAjgICCAgz4IkIE+CBCBgAAOAgI46IMADkYQwEFAAAcBARz0QYAM9EGACAQEcBAQwEEfBHAwggAOAgI4CAjgoA8CZKAPAkQgIICDgAAO+iCAgxEEcBAQwEFAAAd9ECADfRAgAgEBHAQEcNAHARyMIICDgAAOAgI46IMAGeiDABEICOAgIICDPgjgYAQBHAQEcBAQwEEfBMhAHwSI0BGw5ays/Bo+fpoLs18Ww/zicqhUVlZv6+zsCJ27OkL3vt3hQM/esHdPZ0DrEJAtZKnyc3g9NhXmvizl3kdh0R/dZ3zif9Ww7AwDh3tD3/f7AopHH2SLmJicCe+rBb/yy6+hGfurI8rfBvuSEQbFISBbwH+qo8bH6S9hvTSa/HPoMCEpEIv0Tfbf8elCwiGV5Z/Dv0Ynmh6F8DUCsok0rfowORuKpJC8fjMVUAz6IBtAi+raaY8W5FpztMLnmflkB0w7XWiO5YLJaouoQMcnPoeFheXVKc+ePbtC33f7wnc9f0l2oFo5FdLxu4cIyHoRkIKph/Hmffa6QmEZW/gUfpqcS6ZCrTRXDagC2LGDWfR68N0r2OuIHalWh8NoqoX1YZu3QFPTc9WAfAxbxaH+7vDDwPcBzWMEKdDUp2K2a4uiKR3Wh4AUyLtEZDMsbdBUrswISEEqFYqxjOiDrJN2reYXK9WdqZmw1fyiHbV308mFjFz12xj6IOukYExM/d4J36qXdui8fpqaTf7s39cVBg4foHnYIKZYTZhfqITnP46v6+pbz4HevYX3L7Q++vfoRHgz/olrtRpAQBqkcKjQKssroRUO9feE4b8eDP9o0VW5mgpyQWM8+iAN0PVTL35837Li0hRIb35afb7qLlQSxkrxYdS7EYePHQzwMYI0YGx8esPCIV27drZsJLELGuEjIJFUTJ9nFkIrqNtdGw7TypCMt+hq4jIhIJFacV1TR8f2cGywL7kkxKOQnPz7QNhT8FatXdCIfPRBImlxXiSFQyPD3t1xRa9dLb2d9k2B70AUhUTrEaxFH6RBRe5aqdgHDvUmvRRbB2iUyJtGpdcKej/J/PxyWFgsJrCMID4CsglUlOpHpGkNooV6LV3Cop2sVuH9Ij6+O5F2lLSQunbxGunpYO0RR5dolO3y8c7OnYUv/MvCcsEIEqmMC9m8rWX8iYBEsp+FWxYaPbTgh4+ANODYD+X40Z4Kh7aMUR99kAZox0cNu6J7ERtJI2ESdBbnLvogTVJI9EOi+6vTk4nJ2W/mJ4coGFpz7Of9IA0hIE1SoemPehoL1S777B+XbehdfM3I203a0bGjqbXCjmqnXmHWOwl1nvQ7mkNA1kmFZ2Fp1fE1JcLm4P0ggINxF3AQEMBBQAAHfRAgA78nHYhAQAAHAQEc9EEAB530DXD//v2wuLgYhoeHw9DQUPiWVV9Qw71795J/X7x4MXR3d4cyK21AHj58mPytouzv73fv+/z58zAzMxMOHjzYkgIeHR1Njt/T01OKgLx48SL596lTpwjIt+rRo0fJ3yrKmIC8ffs2nDhx4psvYBSLPgiQgT4IEIFFukNrh5cvX4aurq5w+fLl5HP6WHPwycnJ5GPdduTIkXD27NlkOtessbGx5PnevXuXzPNF8/uTJ0+Go0eP1j22HvP48eNkqjg7O5v5eE0l9Txaa+l8vfN49erV6tfX19eXrDd0nHZDQBwfPnxIwqDiUkHdvXs3KcCs+z158iRcuHAhnD9/PjRKu0J6fC0t7PV8KnQdW8Wed563b99eDUbW469du5YUv74e3S8rIHnnYd+HM2fO5AarrPi5WJFUgBo19CqqItHCX6/a+pw2BFSM2jnr7OxsqIjSRekdW+GU2pDotps3b4ZKpZK82uvxOo5CodtU2Bo5dB9vs0LnbuehEcY2LNLnodtt5Cw7ywUjSAQVmmSNECqmwcHBcOvWrdVC0nREQalHhWtFmXdsFamKW8dWP0Xb1uljp8Nx/fr1NSHQyKdz0yu/7pc1+olGFtv10/NduXJlzXPoPBRMPb+mce2ERXokFUje9MmmMGJrgRjWq/GOrcLXsVWwtcdWYdu06tKlS7kjhApcAcxjx1SgasORpudot3UIAYlUb9qkkFjxaJFbj+b1Vtz1ei86tt1Ho46x51GI8tYnRuefV/i2INdz1Bv52q1PtF37vbbni3z1mo1iAbEpmSe9oI45tkaB2mPbeiDm8eljpKWPF1P87RIQywUjSITY7Vu7n23TetL3iTm+Rok8sZd7xKyLsBYBSdm9O/tH98SMCOn7ecVs0veJOX5W6CwYU1NTIYYW855mz6PMShsQe7WM+Q/VekC8V+K8HaCs+8RMedL3idk61YJc0otkG3lU2PWKX98H+zrTdAz7XsWcR7ts85rt2u8tYy8kdsGswrPiypqjG9txymNNOam3YBYVpp1jvV0vHdsW0ulj2+Njds50e16I7Jh2VXMePU+970NZWC5KO4LYrpOK1vb4a6UbcOmCzVLvOOoz2HHUe4hhhdnIsdUHMXoeO2cVbl5IVPh5x5dz584lfysAd+7cyQyJblMfpLZbX3albRSqeBQSFY2K59mzZ8nHNvfXdEOFk26y5VFh6nqk9HE02qiQ0scR9QpiF80KiKYsteeYdWyd49WrV79aaKtvoQDp/ipgPUZfu85Zn7NL+fWxzitrqqjP67zt8TqedqsURpua2Qikc05vNZddqTvp+k9XQenVU698KoBaKhwVXr2iViHqOCqUrONYATfaSGvkHLPWNjpvhdtCoktL7A1NRoHT4x88eJB7HgqmwmDnoQ5/7XVZajbqEpS2CkjZ3w+i/1Rd+qGrcG29oYLs7e1NXiVjC1oBUDEfP348KUCbhuhYesX2Li/R8+gtt3lrnPQ5ptdMKv6Yq2h1vxs3biSFq2PYaKbPp9/ma1M/fe2x51H7vVKIFBL7npSV5WLbyMhI8kMbuGjxa5r26BVVr+AqQLQP3jAFRCAggIP3gwAZ+D3pQAQCAjh4R6FDW6TawSrzdiZ8bPMCGdjmBSIQEMBBQAAHvx8EcDCCAA4CAjgICODg94MAGeiDABEICOAgIICDPgjgYAQBHAQEcBAQwEEfBMhAHwSIQEAABwEBHPRBAAcjCOAgIICDgAAO+iBABvogQAQCAjgICOCgDwI4GEEABwEBHAQEcNAHATLQBwEiEBDAQUAAB30QwMEIAjgICOAgIICDPgiQgT4IEIGAAA4CAjjogwAORhDAQUAABwEBHPRBgAz0QYAIBARwEBDAQR8EcDCCAA4CAjgICOCgDwJkoA8CRCAggIOAAA76IICDEQRwEBDAQUAAR24fxD5vuJ3b2/F2RhDA8X8FuOVvI2Jq2AAAAABJRU5ErkJggg==",
  e_ =
    "data:image/svg+xml,%3csvg%20width='73'%20height='73'%20viewBox='0%200%2073%2073'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='72'%20height='72'%20fill='%23F9FAFB'%20stroke='%23D2D2D2'/%3e%3cpath%20d='M41.1484%2037.4871L38.6348%2038.9418V65.0908L61.2694%2052.0221V25.873L41.1484%2037.4871Z'%20fill='%23565656'/%3e%3cpath%20d='M45.247%2014.039L36.5423%209L13.2793%2022.4295L21.9956%2027.4684L45.247%2014.039Z'%20fill='%23565656'/%3e%3cpath%20d='M59.7945%2022.4307L49.7631%2016.7168L26.5117%2030.1463L27.8384%2030.8329L36.5431%2035.8602L45.2013%2030.8678L59.7945%2022.4307Z'%20fill='%23565656'/%3e%3cpath%20d='M24.7545%2039.7573L20.5883%2037.6161V30.9595L12%2026.0137V51.9765L34.4717%2064.9521V38.9893L24.7545%2033.3917V39.7573Z'%20fill='%23565656'/%3e%3c/svg%3e",
  Mr = { add_icon: GT, order_icon: JT, upload_area: ZT, parcel_icon: e_ },
  Ea = vv({
    reducerPath: "cloudinaryApi",
    baseQuery: lv({ baseUrl: "https://api.cloudinary.com/v1_1/dpoxhiyts/" }),
    endpoints: (e) => ({
      uploadImage: e.mutation({
        query: (t) => {
          const r = new FormData();
          return (
            r.append("file", t),
            r.append("upload_preset", "ml_default"),
            { url: "image/upload", method: "POST", body: r }
          );
        },
      }),
    }),
  }),
  { useUploadImageMutation: t_ } = Ea,
  r_ = "/assets/loading-BcqW5jIi.gif";
function zf() {
  const [e, { isSuccess: t, isError: r, error: n }] = m2(),
    [i, s] = E.useState(),
    [o, a] = E.useState(),
    [l, c] = E.useState(),
    [m, g] = E.useState(),
    [d, v] = E.useState(""),
    [w, x] = E.useState(""),
    [b, f] = E.useState("Men"),
    [p, h] = E.useState("Topwear"),
    [y, S] = E.useState(""),
    [C, A] = E.useState([]),
    [k, N] = E.useState(!1),
    [j, { isLoading: T }] = t_(),
    _ = (M, U) => {
      M === "error"
        ? W.error(U, {
            position: "top-right",
            autoClose: 5e3,
            hideProgressBar: !1,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "light",
          })
        : M === "success" &&
          W.success(U, {
            position: "top-right",
            autoClose: 5e3,
            hideProgressBar: !1,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "light",
          });
    },
    P = async (M, U) => {
      const R = M.target.files[0];
      if (R)
        try {
          const D = (await j(R).unwrap()).secure_url.replace(
            "/upload/",
            "/upload/c_fill,w_390,h_450/"
          );
          U(D);
        } catch (I) {
          console.error("Upload failed:", I);
        }
    },
    O = (M) => {
      if (C.includes(M.target.innerText)) {
        let U = [...C];
        A(U.filter((R) => R !== M.target.innerText));
      } else A((U) => [...U, M.target.innerText]);
    },
    L = (M) => {
      M.preventDefault(),
        i && C.length > 0
          ? e({
              name: d,
              description: w,
              price: y,
              image: [i, o, l, m],
              category: b,
              subCategory: p,
              sizes: C,
              bestseller: k,
            })
          : i
          ? _("error", "You must select atleast one size")
          : _("error", "You must add the first image");
    };
  return (
    E.useEffect(() => {
      r && n
        ? _("error", n == null ? void 0 : n.data.message)
        : t && _("success", "Item added Successfully");
    }, [r, n, t]),
    u.jsx(u.Fragment, {
      children: u.jsxs("form", {
        onSubmit: L,
        className: "flex flex-col items-start w-full gap-3",
        children: [
          u.jsx("p", { className: "mb-2", children: "Upload Image" }),
          u.jsxs("div", {
            className: "flex gap-2",
            children: [
              u.jsxs("label", {
                htmlFor: "image1",
                children: [
                  u.jsx("img", {
                    className: "w-20",
                    src: i || Mr.upload_area,
                    alt: "",
                  }),
                  u.jsx("input", {
                    onChange: (M) => P(M, s),
                    type: "file",
                    id: "image1",
                    className: "hidden",
                  }),
                ],
              }),
              u.jsxs("label", {
                htmlFor: "image2",
                children: [
                  u.jsx("img", {
                    className: "w-20",
                    src: o || Mr.upload_area,
                    alt: "",
                  }),
                  u.jsx("input", {
                    onChange: (M) => P(M, a),
                    type: "file",
                    id: "image2",
                    className: "hidden",
                  }),
                ],
              }),
              u.jsxs("label", {
                htmlFor: "image3",
                children: [
                  u.jsx("img", {
                    className: "w-20",
                    src: l || Mr.upload_area,
                    alt: "",
                  }),
                  u.jsx("input", {
                    onChange: (M) => P(M, c),
                    type: "file",
                    id: "image3",
                    className: "hidden",
                  }),
                ],
              }),
              u.jsxs("label", {
                htmlFor: "image4",
                children: [
                  u.jsx("img", {
                    className: "w-20",
                    src: m || Mr.upload_area,
                    alt: "",
                  }),
                  u.jsx("input", {
                    onChange: (M) => P(M, g),
                    type: "file",
                    id: "image4",
                    className: "hidden",
                  }),
                ],
              }),
              T &&
                u.jsx("img", {
                  src: r_,
                  className: "w-10 h-10 m-auto",
                  alt: "",
                }),
            ],
          }),
          u.jsxs("div", {
            className: "w-full",
            children: [
              u.jsx("p", { className: "mb-2", children: "Product name" }),
              u.jsx("input", {
                maxLength: 50,
                className: "w-full outline-[#c586a5] max-w-[500px] px-3 py-2",
                type: "text",
                value: d,
                onChange: (M) => v(M.target.value),
                placeholder: "Type here",
                required: !0,
              }),
            ],
          }),
          u.jsxs("div", {
            className: "w-full",
            children: [
              u.jsx("p", {
                className: "mb-2",
                children: "Product description",
              }),
              u.jsx("textarea", {
                maxLength: 120,
                value: w,
                onChange: (M) => x(M.target.value),
                className: "w-full outline-[#c586a5] max-w-[500px] px-3 py-2",
                type: "text",
                placeholder: "Write content here",
                required: !0,
              }),
            ],
          }),
          u.jsxs("div", {
            className: "flex flex-col w-full gap-2 sm:flex-row sm:gap-8",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsx("p", {
                    className: "mb-2",
                    children: "Product category",
                  }),
                  u.jsxs("select", {
                    onChange: (M) => f(M.target.value),
                    className: "w-full outline-[#c586a5] px-3 py-2",
                    children: [
                      u.jsx("option", { value: "Men", children: "Men" }),
                      u.jsx("option", { value: "Women", children: "Women" }),
                      u.jsx("option", { value: "Kids", children: "Kids" }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("p", { className: "mb-2", children: "Sub category" }),
                  u.jsxs("select", {
                    onChange: (M) => h(M.target.value),
                    className: "w-full outline-[#c586a5] px-3 py-2",
                    children: [
                      u.jsx("option", {
                        value: "Topwear",
                        children: "Topwear",
                      }),
                      u.jsx("option", {
                        value: "Bottomwear",
                        children: "Bottomwear",
                      }),
                      u.jsx("option", {
                        value: "Winterwear",
                        children: "Winterwear",
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("p", {
                    className: "mb-2",
                    children: "Product Price in $USD",
                  }),
                  u.jsx("input", {
                    className:
                      "w-full outline-[#c586a5] px-3 py-2 sm:w-[120px]",
                    required: !0,
                    value: y,
                    onChange: (M) =>
                      M.target.value.length < 4 && S(M.target.value),
                    type: "Number",
                    placeholder: "25",
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            children: [
              u.jsx("p", { className: "mb-2", children: "Product Sizes" }),
              u.jsxs("div", {
                className: "flex gap-3",
                children: [
                  u.jsx("div", {
                    children: u.jsx("p", {
                      onClick: O,
                      className: `px-3 py-1 cursor-pointer  ${
                        C.includes("S") ? " bg-pink-100" : "bg-slate-200"
                      }`,
                      children: "S",
                    }),
                  }),
                  u.jsx("div", {
                    children: u.jsx("p", {
                      onClick: O,
                      className: `px-3 py-1 cursor-pointer ${
                        C.includes("M") ? " bg-pink-100" : "bg-slate-200"
                      }`,
                      children: "M",
                    }),
                  }),
                  u.jsx("div", {
                    children: u.jsx("p", {
                      onClick: O,
                      className: `px-3 py-1 cursor-pointer  ${
                        C.includes("L") ? "bg-pink-100" : "bg-slate-200"
                      }`,
                      children: "L",
                    }),
                  }),
                  u.jsx("div", {
                    children: u.jsx("p", {
                      onClick: O,
                      className: `px-3 py-1 cursor-pointer  ${
                        C.includes("XL") ? " bg-pink-100" : "bg-slate-200"
                      }`,
                      children: "XL",
                    }),
                  }),
                  u.jsx("div", {
                    children: u.jsx("p", {
                      onClick: O,
                      className: `px-3 py-1 cursor-pointer  ${
                        C.includes("XXL") ? " bg-pink-100" : "bg-slate-200"
                      }`,
                      children: "XXL",
                    }),
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "flex gap-2 mt-2",
            children: [
              u.jsx("input", {
                onChange: () => N(!0),
                type: "checkbox",
                id: "bestseller",
              }),
              u.jsx("label", {
                className: "cursor-pointer",
                htmlFor: "bestseller",
                children: "Add to bestseller",
              }),
            ],
          }),
          u.jsx("button", {
            type: "submit",
            className: "py-3 mt-4 text-white bg-black w-28",
            children: "ADD",
          }),
        ],
      }),
    })
  );
}
function n_() {
  const e = (c, m) => {
      c === "error"
        ? W.error(m, {
            position: "top-right",
            autoClose: 5e3,
            hideProgressBar: !1,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "light",
          })
        : c === "success" &&
          W.success(m, {
            position: "top-right",
            autoClose: 5e3,
            hideProgressBar: !1,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "light",
          });
    },
    [t, { isSuccess: r, isError: n, error: i }] = h2(),
    { data: s, isFetching: o, refetch: a } = Li();
  E.useEffect(() => {
    n && i
      ? e("error", i == null ? void 0 : i.data.message)
      : r && e("success", "Item removed Successfully");
  }, [n, i, r]);
  const l = (c, m) => {
    c > 51
      ? (t(m), a())
      : e(
          "error",
          "You are not allowed to delete the products added by other admins"
        );
  };
  return u.jsx(u.Fragment, {
    children: u.jsxs("div", {
      className:
        " sm:mx-auto sm:ml-[max(5vw,25px)] sm:my-8 text-gray-600 text-base",
      children: [
        u.jsx("p", { className: "mb-2", children: "All Products List" }),
        u.jsxs("div", {
          className: "flex flex-col gap-2",
          children: [
            u.jsxs("div", {
              className:
                "hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm",
              children: [
                u.jsx("b", { children: "Image" }),
                u.jsx("b", { children: "Name" }),
                u.jsx("b", { children: "Category" }),
                u.jsx("b", { children: "Price" }),
                u.jsx("b", { className: "text-center", children: "Action" }),
              ],
            }),
            o &&
              u.jsx("div", {
                className: "flex items-center justify-center w-full my-14",
                children: u.jsx(rn, {
                  visible: !0,
                  height: "30",
                  width: "30",
                  color: "gray",
                  ariaLabel: "oval-loading",
                  wrapperStyle: {},
                  wrapperClass: "",
                  strokeWidthSecondary: 5,
                  strokeWidth: 5,
                }),
              }),
            s &&
              s.map((c, m) =>
                u.jsxs(
                  "div",
                  {
                    className:
                      "grid relative grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm",
                    children: [
                      u.jsx("img", {
                        className: "w-12",
                        src: c.image[0],
                        alt: "",
                      }),
                      u.jsx("p", {
                        className: "text-xs sm:text-base",
                        children: c.name,
                      }),
                      u.jsx("p", {
                        className:
                          "text-xs text-center sm:text-start sm:text-base",
                        children: c.category,
                      }),
                      u.jsxs("p", {
                        className: "text-xs sm:text-base",
                        children: ["$", c.price],
                      }),
                      u.jsx("button", {
                        className:
                          "absolute right-0 bottom-3 sm:bottom-6 lg:right-8 xl:right-11 md:right-5",
                        onClick: () => l(m, c._id),
                        children: u.jsx("img", {
                          className: "w-4 mr-4 cursor-pointer sm:w-4",
                          src: at.bin_icon,
                          alt: "",
                        }),
                      }),
                    ],
                  },
                  c._id
                )
              ),
          ],
        }),
      ],
    }),
  });
}
function i_() {
  const [e, { isSuccess: t }] = x2(),
    { data: r, isFetching: n } = v2(),
    i = async (s, o) => {
      try {
        await e({ orderId: s, newStatus: o });
      } catch {}
    };
  return u.jsxs("div", {
    className:
      " sm:mx-auto sm:ml-[max(5vw,25px)] sm:my-8 text-gray-600 text-base",
    children: [
      u.jsx("div", { children: u.jsx("h3", { children: "Order Page" }) }),
      u.jsxs("div", {
        children: [
          n &&
            u.jsx("div", {
              className: "flex items-center justify-center w-full my-14",
              children: u.jsx(rn, {
                visible: !0,
                height: "30",
                width: "30",
                color: "gray",
                ariaLabel: "oval-loading",
                wrapperStyle: {},
                wrapperClass: "",
                strokeWidthSecondary: 5,
                strokeWidth: 5,
              }),
            }),
          r &&
            r.map((s, o) =>
              u.jsxs(
                "div",
                {
                  className:
                    "grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700",
                  children: [
                    u.jsx("img", {
                      className: "w-12",
                      src: Mr.parcel_icon,
                      alt: "",
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsxs("div", {
                          children: [
                            " ",
                            s.ordersData.map((a, l) =>
                              u.jsxs(
                                "p",
                                {
                                  className: "py-0.5",
                                  children: [
                                    " ",
                                    a.name,
                                    " x ",
                                    a.quantity,
                                    " ",
                                    u.jsxs("span", {
                                      children: [" ", a.size, " "],
                                    }),
                                  ],
                                },
                                l
                              )
                            ),
                            " ",
                          ],
                        }),
                        u.jsxs("p", {
                          className: "mt-3 mb-2 font-medium",
                          children: [s.fName, " ", s.lName],
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsxs("p", { children: [s.address, ","] }),
                            u.jsxs("p", {
                              children: [
                                s.city,
                                ", ",
                                s.state,
                                ", ",
                                s.country,
                                ", ",
                                s.zipcode,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsxs("p", {
                          className: "text-sm sm:text-[15px]",
                          children: ["Items : ", s.ordersData.length],
                        }),
                        u.jsxs("p", {
                          className: "mt-3",
                          children: ["Method : ", s.payment],
                        }),
                        u.jsx("p", { children: "Payment : Pending" }),
                        u.jsxs("p", {
                          children: ["Date : ", s.createdAt.slice(0, 10)],
                        }),
                      ],
                    }),
                    u.jsxs("p", {
                      className: "text-sm sm:text-[15px]",
                      children: ["$", s.total],
                    }),
                    u.jsxs("select", {
                      onChange: (a) => i(s._id, a.target.value),
                      className: "p-2 font-semibold",
                      children: [
                        u.jsx("option", {
                          value: "Order Placed",
                          children: "Order Placed",
                        }),
                        u.jsx("option", {
                          value: "Packing",
                          children: "Packing",
                        }),
                        u.jsx("option", {
                          value: "Shipped",
                          children: "Shipped",
                        }),
                        u.jsx("option", {
                          value: "Out for delivery",
                          children: "Out for delivery",
                        }),
                        u.jsx("option", {
                          value: "Delivered",
                          children: "Delivered",
                        }),
                      ],
                    }),
                  ],
                },
                o
              )
            ),
        ],
      }),
    ],
  });
}
function s_() {
  const [e] = S2(),
    [t, r] = E.useState(u.jsx(zf, {})),
    [n, i] = E.useState(1),
    { data: s, isFetching: o, isSuccess: a, refetch: l } = w2(),
    c = async () => {
      try {
        await e(), window.location.reload();
      } catch (m) {
        console.log(m);
      }
    };
  return a
    ? u.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          u.jsx("div", { className: "Toastify" }),
          u.jsxs("div", {
            className: "flex items-center py-2 px-[4%] justify-between",
            children: [
              u.jsx("img", {
                className: "w-[max(10%,80px)]",
                src: Rd,
                alt: "",
              }),
              u.jsx("button", {
                onClick: () => c(),
                className:
                  "px-5 py-2 text-xs text-white bg-gray-600 rounded-full sm:px-7 sm:py-2 sm:text-sm",
                children: "Logout",
              }),
            ],
          }),
          u.jsx("hr", {}),
          u.jsxs("div", {
            className: "flex w-full",
            children: [
              u.jsx("div", {
                className: "w-[18%] min-h-screen border-r-2",
                children: u.jsxs("div", {
                  className: "flex flex-col gap-4 pt-6 pl-[20%] text-[15px]",
                  children: [
                    u.jsxs("button", {
                      onClick: () => {
                        r(u.jsx(zf, {})), i(1);
                      },
                      className: `flex ${
                        n === 1
                          ? " bg-[#ffebf5] border-[#c586a5] "
                          : "border-gray-300"
                      }items-center gap-3 px-3 py-2 border border-r-0 rounded-l`,
                      children: [
                        u.jsx("img", {
                          className: "w-5 h-5",
                          src: Mr.add_icon,
                          alt: "",
                        }),
                        u.jsx("p", {
                          className: "hidden md:block",
                          children: "Add Items",
                        }),
                      ],
                    }),
                    u.jsxs("button", {
                      onClick: () => {
                        r(u.jsx(n_, {})), i(2);
                      },
                      className: `flex ${
                        n === 2
                          ? " bg-[#ffebf5] border-[#c586a5] "
                          : "border-gray-300"
                      }items-center gap-3 px-3 py-2 border border-r-0 rounded-l`,
                      children: [
                        u.jsx("img", {
                          className: "w-5 h-5",
                          src: Mr.order_icon,
                          alt: "",
                        }),
                        u.jsx("p", {
                          className: "hidden md:block",
                          children: "List Items",
                        }),
                      ],
                    }),
                    u.jsxs("button", {
                      onClick: () => {
                        r(u.jsx(i_, {})), i(3);
                      },
                      className: `flex ${
                        n === 3
                          ? " bg-[#ffebf5] border-[#c586a5] "
                          : "border-gray-300"
                      }items-center gap-3 px-3 py-2 border border-r-0 rounded-l`,
                      href: "/orders",
                      children: [
                        u.jsx("img", {
                          className: "w-5 h-5",
                          src: Mr.order_icon,
                          alt: "",
                        }),
                        u.jsx("p", {
                          className: "hidden md:block",
                          children: "Orders",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              u.jsx("div", {
                className:
                  "w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base",
                children: t,
              }),
            ],
          }),
        ],
      })
    : u.jsx(XT, {});
}
function o_() {
  const e = et(),
    { data: t, isFetching: r } = y2(),
    n =
      (t == null
        ? void 0
        : t.flatMap((i) =>
            i.ordersData.map((s) => ({
              ...s,
              status: i.orderStatus,
              method: i.payment,
            }))
          )) || [];
  return r
    ? u.jsx("div", {
        className: "flex items-center justify-center w-full my-14",
        children: u.jsx(rn, {
          visible: !0,
          height: "30",
          width: "30",
          color: "gray",
          ariaLabel: "oval-loading",
          wrapperStyle: {},
          wrapperClass: "",
          strokeWidthSecondary: 5,
          strokeWidth: 5,
        }),
      })
    : u.jsxs("div", {
        className: "pt-16 border-t",
        children: [
          u.jsx("div", {
            className: "text-2xl",
            children: u.jsxs("div", {
              className: "inline-flex items-center gap-2 mb-3",
              children: [
                u.jsxs("p", {
                  className: "text-gray-500",
                  children: [
                    "MY ",
                    u.jsx("span", {
                      className: "font-medium text-gray-700",
                      children: "ORDERS",
                    }),
                  ],
                }),
                u.jsx("p", {
                  className: "w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700",
                }),
              ],
            }),
          }),
          u.jsx("div", {
            children:
              n &&
              n.map((i, s) => {
                var o;
                return u.jsxs(
                  "div",
                  {
                    className:
                      "flex flex-col gap-4 py-4 text-gray-700 border-t border-b md:flex-row md:items-center md:justify-between",
                    children: [
                      u.jsxs("div", {
                        className: "flex items-start gap-6 text-sm",
                        children: [
                          u.jsx("img", {
                            onClick: () => e(`/product/${i.productId}`),
                            className: "w-16 cursor-pointer sm:w-20",
                            src: i.imgUrl,
                            alt: "",
                          }),
                          u.jsxs("div", {
                            children: [
                              u.jsx("p", {
                                className: "font-medium sm:text-base",
                                children: i.name,
                              }),
                              u.jsxs("div", {
                                className:
                                  "flex items-center gap-3 mt-1 text-base text-gray-700",
                                children: [
                                  u.jsxs("p", { children: ["$", i.price] }),
                                  u.jsxs("p", {
                                    children: ["Quantity: ", i.quantity],
                                  }),
                                  u.jsxs("p", { children: ["Size: ", i.size] }),
                                ],
                              }),
                              u.jsxs("p", {
                                className: "mt-1",
                                children: [
                                  "Date: ",
                                  u.jsx("span", {
                                    className: "text-gray-400 ",
                                    children:
                                      (o = i.createdAt) == null
                                        ? void 0
                                        : o.slice(0, 10),
                                  }),
                                ],
                              }),
                              u.jsxs("p", {
                                className: "mt-1",
                                children: [
                                  "Payment: ",
                                  u.jsx("span", {
                                    className: "text-gray-400 ",
                                    children: i.method,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "flex justify-between md:w-1/2",
                        children: [
                          u.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              u.jsx("p", {
                                className:
                                  "h-2 bg-green-500 rounded-full min-w-2",
                              }),
                              u.jsx("p", {
                                className: "text-sm md:text-base",
                                children: i.status,
                              }),
                            ],
                          }),
                          u.jsx("button", {
                            className:
                              "px-4 py-2 text-sm font-medium border rounded-sm",
                            children: "Track Order",
                          }),
                        ],
                      }),
                    ],
                  },
                  s
                );
              }),
          }),
        ],
      });
}
function a_() {
  const [e] = j2(),
    t = Vs((b) => b.Slice.orderItem),
    r = Vs((b) => b.Slice.items),
    n = Hl(),
    i = et();
  E.useEffect(() => {
    window.sessionStorage.setItem("orderItem", JSON.stringify(t));
  }, [t]);
  const { data: s, isSuccess: o } = Di(),
    { data: a, isFetching: l, refetch: c } = ep(),
    [m] = g2(),
    g = (b, f) => {
      W[b](f, {
        position: "top-right",
        autoClose: 5e3,
        hideProgressBar: !1,
        closeOnClick: !1,
        pauseOnHover: !0,
        draggable: !0,
        theme: "light",
      });
    },
    d = () =>
      o && !l && Array.isArray(a)
        ? a.reduce((b, f) => b + Number(f.price) * Number(f.quantity), 0)
        : r.reduce((b, f) => b + Number(f.price) * Number(f.quantity), 0),
    [v, w] = E.useState({
      fName: "",
      lName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      phone: "",
      orderStatus: "Order Placed",
      total: d() + 10,
      payment: "COD",
    }),
    x = async (b) => {
      b.preventDefault();
      try {
        if (!o) return g("error", "You must login to place orders");
        Object.keys(t).length === 0 && (await m(v)),
          Object.keys(t).length != 0 &&
            (await e({
              ...v,
              productId: t.productId,
              name: t.name,
              price: t.price,
              size: t.size,
              imgUrl: t.imgUrl,
              quantity: t.quantity,
            })),
          c(),
          i("/orders");
      } catch (f) {
        console.log(f);
      }
    };
  return u.jsxs("form", {
    onSubmit: x,
    className:
      "flex flex-col sm:flex-row justify-between gap-6 py-10 px-4 border-t min-h-[80vh]",
    children: [
      u.jsxs("div", {
        className: "w-full sm:max-w-[480px] space-y-5",
        children: [
          u.jsx("div", {
            className: "my-3 text-xl sm:text-2xl",
            children: u.jsxs("div", {
              className: "inline-flex items-center gap-2 mb-3",
              children: [
                u.jsxs("p", {
                  className: "text-gray-500",
                  children: [
                    "DELIVERY ",
                    u.jsx("span", {
                      className: "font-medium text-gray-700",
                      children: "INFORMATION",
                    }),
                  ],
                }),
                u.jsx("p", {
                  className: "w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700",
                }),
              ],
            }),
          }),
          u.jsxs("div", {
            className: "flex gap-3",
            children: [
              u.jsx("input", {
                required: !0,
                type: "text",
                placeholder: "First name",
                value: v.fName,
                onChange: (b) => w((f) => ({ ...f, fName: b.target.value })),
                className:
                  "border border-gray-300 rounded py-1.5 px-3.5 w-full",
              }),
              u.jsx("input", {
                required: !0,
                type: "text",
                placeholder: "Last name",
                value: v.lName,
                onChange: (b) => w((f) => ({ ...f, lName: b.target.value })),
                className:
                  "border border-gray-300 rounded py-1.5 px-3.5 w-full",
              }),
            ],
          }),
          u.jsx("input", {
            required: !0,
            type: "email",
            placeholder: "Email address",
            value: v.email,
            onChange: (b) => w((f) => ({ ...f, email: b.target.value })),
            className: "border border-gray-300 rounded py-1.5 px-3.5 w-full",
          }),
          u.jsx("input", {
            required: !0,
            type: "text",
            placeholder: "Street Address",
            value: v.address,
            onChange: (b) => w((f) => ({ ...f, address: b.target.value })),
            className: "border border-gray-300 rounded py-1.5 px-3.5 w-full",
          }),
          u.jsxs("div", {
            className: "flex gap-3",
            children: [
              u.jsx("input", {
                required: !0,
                type: "text",
                placeholder: "City",
                value: v.city,
                onChange: (b) => w((f) => ({ ...f, city: b.target.value })),
                className:
                  "border border-gray-300 rounded py-1.5 px-3.5 w-full",
              }),
              u.jsx("input", {
                required: !0,
                type: "text",
                placeholder: "State",
                value: v.state,
                onChange: (b) => w((f) => ({ ...f, state: b.target.value })),
                className:
                  "border border-gray-300 rounded py-1.5 px-3.5 w-full",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "flex gap-3",
            children: [
              u.jsx("input", {
                required: !0,
                type: "number",
                placeholder: "Zipcode",
                value: v.zipcode,
                onChange: (b) =>
                  w((f) => ({ ...f, zipcode: Number(b.target.value) })),
                className:
                  "border border-gray-300 rounded py-1.5 px-3.5 w-full",
              }),
              u.jsx("input", {
                required: !0,
                type: "text",
                placeholder: "Country",
                value: v.country,
                onChange: (b) => w((f) => ({ ...f, country: b.target.value })),
                className:
                  "border border-gray-300 rounded py-1.5 px-3.5 w-full",
              }),
            ],
          }),
          u.jsx("input", {
            required: !0,
            type: "number",
            placeholder: "Phone",
            value: v.phone,
            onChange: (b) =>
              w((f) => ({ ...f, phone: Number(b.target.value) })),
            className: "border border-gray-300 rounded py-1.5 px-3.5 w-full",
          }),
        ],
      }),
      u.jsxs("div", {
        className: "w-full space-y-8 sm:max-w-xl",
        children: [
          u.jsxs("div", {
            className: "p-4 space-y-4 bg-white border shadow-sm rounded-xl",
            children: [
              u.jsx("h2", {
                className: "text-lg font-semibold text-gray-700",
                children:
                  Object.keys(t).length === 0
                    ? "Cart Summary"
                    : "Product Summary",
              }),
              u.jsx("div", { className: "w-12 mb-2 border-b border-gray-700" }),
              Object.keys(t).length === 0
                ? u.jsxs("div", {
                    className: "space-y-3 text-sm",
                    children: [
                      u.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          u.jsx("p", { children: "Subtotal" }),
                          u.jsxs("p", { children: ["$", d().toFixed(2)] }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          u.jsx("p", { children: "Shipping Fee" }),
                          u.jsx("p", {
                            children: a && a.length > 0 ? "$10.00" : "$0.00",
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "flex justify-between font-semibold",
                        children: [
                          u.jsx("p", { children: "Total" }),
                          u.jsxs("p", {
                            children: ["$", (d() + 10).toFixed(2)],
                          }),
                        ],
                      }),
                    ],
                  })
                : u.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      u.jsxs("div", {
                        className: "flex gap-4",
                        children: [
                          u.jsx("img", {
                            onClick: () => i(`/product/${t.productId}`),
                            src: t.imgUrl,
                            alt: t.name,
                            className:
                              "object-cover w-20 h-20 rounded cursor-pointer",
                          }),
                          u.jsxs("div", {
                            className: "flex flex-col justify-between",
                            children: [
                              u.jsx("p", {
                                className: "font-medium",
                                children: t.name,
                              }),
                              u.jsxs("p", {
                                className: "text-sm text-gray-600",
                                children: ["Price: $", t.price],
                              }),
                              u.jsxs("p", {
                                className: "text-sm text-gray-600",
                                children: ["Size: ", t.size],
                              }),
                              u.jsxs("p", {
                                className: "text-sm text-gray-600",
                                children: ["Quantity: ", t.quantity],
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "space-y-2 text-sm",
                        children: [
                          u.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              u.jsx("p", { children: "Subtotal" }),
                              u.jsxs("p", {
                                children: [
                                  "$",
                                  (t.price * t.quantity).toFixed(2),
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              u.jsx("p", { children: "Shipping Fee" }),
                              u.jsx("p", { children: "$10.00" }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "flex justify-between font-semibold",
                            children: [
                              u.jsx("p", { children: "Total" }),
                              u.jsxs("p", {
                                children: [
                                  "$",
                                  (t.price * t.quantity + 10).toFixed(2),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          u.jsx("button", {
                            type: "button",
                            onClick: () => n(wn.decrementOrderQuantity()),
                            className:
                              "px-3 py-1 text-lg font-bold text-white bg-black rounded hover:bg-gray-800",
                            children: "-",
                          }),
                          u.jsx("input", {
                            type: "number",
                            disabled: !0,
                            value: t.quantity,
                            className:
                              "w-16 px-2 py-1 text-center border rounded",
                          }),
                          u.jsx("button", {
                            type: "button",
                            onClick: () => n(wn.incrementOrderQuantity()),
                            className:
                              "px-3 py-1 text-lg font-bold text-white bg-black rounded hover:bg-gray-800",
                            children: "+",
                          }),
                        ],
                      }),
                    ],
                  }),
            ],
          }),
          u.jsxs("div", {
            className: "p-4 space-y-4 bg-white border shadow-sm rounded-xl",
            children: [
              u.jsx("h2", {
                className: "text-lg font-semibold text-gray-700",
                children: "Payment Method",
              }),
              u.jsx("div", { className: "w-12 mb-2 border-b border-gray-700" }),
              [
                { name: "Stripe", logo: at.stripe_logo },
                { name: "Razorpay", logo: at.razorpay_logo },
                { name: "COD", logo: null },
              ].map((b) =>
                u.jsxs(
                  "div",
                  {
                    onClick: () => w((f) => ({ ...f, payment: b.name })),
                    className:
                      "flex items-center gap-3 p-2 border rounded cursor-pointer hover:bg-gray-50",
                    children: [
                      u.jsx("div", {
                        className: `min-w-4 h-4 border rounded-full ${
                          v.payment === b.name ? "bg-green-400" : ""
                        }`,
                      }),
                      b.logo
                        ? u.jsx("img", {
                            src: b.logo,
                            alt: b.name,
                            className: "h-5 mx-4",
                          })
                        : u.jsx("span", {
                            className: "mx-4 text-sm font-medium text-gray-600",
                            children: "Cash on Delivery",
                          }),
                    ],
                  },
                  b.name
                )
              ),
            ],
          }),
          u.jsx("div", {
            className: "w-full text-end",
            children: u.jsx("button", {
              type: "submit",
              className:
                "px-8 py-3 text-sm text-white bg-black rounded hover:bg-gray-800",
              children: "PLACE ORDER",
            }),
          }),
        ],
      }),
    ],
  });
}
const ac = 60,
  Wh = "reset_cooldown_timestamp",
  l_ = (e) => {
    const t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
    return t ? t[2] : null;
  },
  u_ = (e, t, r) => {
    const n = new Date(Date.now() + r * 1e3).toUTCString();
    document.cookie = `${e}=${t}; expires=${n}; path=/`;
  },
  c_ = () => {
    const [e, t] = E.useState(""),
      [r, n] = E.useState(0),
      [i] = E2();
    E.useEffect(() => {
      const o = l_(Wh);
      if (o) {
        const a = Math.floor((Date.now() - Number(o)) / 1e3),
          l = ac - a;
        l > 0 && n(l);
      }
    }, []),
      E.useEffect(() => {
        if (r > 0) {
          const o = setTimeout(() => n(r - 1), 1e3);
          return () => clearTimeout(o);
        }
      }, [r]);
    const s = async (o) => {
      var a;
      o.preventDefault();
      try {
        const l = Date.now();
        u_(Wh, l, ac),
          n(ac),
          await i(e).unwrap(),
          W.success("Reset link sent to your email"),
          t("");
      } catch (l) {
        W.error(
          ((a = l.data) == null ? void 0 : a.message) ||
            "Error sending reset link"
        );
      }
    };
    return u.jsx(u.Fragment, {
      children: u.jsxs("form", {
        onSubmit: s,
        className:
          "flex flex-col items-center w-[90%] sm:max-w-96 m-auto my-14 gap-4 text-gray-800",
        children: [
          u.jsxs("div", {
            className: "inline-flex items-center gap-2 mt-10 mb-2",
            children: [
              u.jsx("p", {
                className: "text-2xl prata-regular",
                children: "Recover Password",
              }),
              u.jsx("hr", {
                className: "border-none h-[1.5px] w-8 bg-gray-800",
              }),
            ],
          }),
          u.jsx("input", {
            value: e,
            onChange: (o) => t(o.target.value),
            type: "email",
            className: "w-full px-3 py-2 border border-gray-800",
            placeholder: "Email",
            required: !0,
          }),
          u.jsx("button", {
            className:
              "px-8 py-2 mt-4 font-light text-white bg-black disabled:opacity-50 disabled:cursor-not-allowed",
            type: "submit",
            disabled: r > 0,
            children: r > 0 ? `Resend in ${r}s` : "Send Reset Link",
          }),
        ],
      }),
    });
  },
  f_ = () => {
    const { token: e } = Ql(),
      t = et(),
      [r, n] = E.useState(""),
      [i] = k2(),
      s = async (o) => {
        var a;
        o.preventDefault();
        try {
          await i({ token: e, password: r }).unwrap(),
            W.success("Password reset successful"),
            t("/login");
        } catch (l) {
          W.error(
            ((a = l.data) == null ? void 0 : a.message) || "Reset failed"
          );
        }
      };
    return u.jsx(u.Fragment, {
      children: u.jsxs("form", {
        onSubmit: s,
        className:
          "flex flex-col items-center w-[90%] sm:max-w-96 m-auto my-14 gap-4 text-gray-800",
        children: [
          u.jsxs("div", {
            className: "inline-flex items-center gap-2 mt-10 mb-2",
            children: [
              u.jsx("p", {
                className: "text-2xl prata-regular",
                children: "Set Password",
              }),
              u.jsx("hr", {
                className: "border-none h-[1.5px] w-8 bg-gray-800",
              }),
            ],
          }),
          u.jsx("input", {
            value: r,
            onChange: (o) => n(o.target.value),
            type: "password",
            className: "w-full px-3 py-2 border border-gray-800",
            placeholder: "New Password",
            required: "",
          }),
          u.jsx("button", {
            className: "px-8 py-2 mt-4 font-light text-white bg-black",
            children: "Confirm",
          }),
        ],
      }),
    });
  };
function d_() {
  const { pathname: e } = On();
  return (
    E.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [e]),
    null
  );
}
function p_() {
  const e = On(),
    [t, r] = E.useState(!1);
  E.useEffect(() => {
    r(!1);
  }, [e.pathname]);
  const { data: n, isSuccess: i, isError: s } = Di(),
    o = ["/AdminLogin", "/AdminPanel"].includes(e.pathname),
    [a, l] = E.useState(!1);
  return u.jsxs("div", {
    className: ` ${o ? "p-0" : "px-5 sm:px-12  md:px-16 lg:px-28"}`,
    children: [
      u.jsx(d_, {}),
      u.jsx(yT, {
        position: "top-right",
        autoClose: 2e3,
        hideProgressBar: !1,
        newestOnTop: !0,
        closeOnClick: !0,
        rtl: !1,
        pauseOnFocusLoss: !0,
        draggable: !0,
        pauseOnHover: !1,
        theme: "light",
      }),
      !o &&
        u.jsx(N2, {
          showDropdown: t,
          setShowDropdown: r,
          showForm: a,
          setShowForm: l,
        }),
      u.jsxs(jC, {
        children: [
          u.jsx(Ve, {
            path: "/Collection",
            element: u.jsx(zT, { showForm: a, setShowForm: l }),
          }),
          u.jsx(Ve, { path: "/", element: u.jsx(IN, {}) }),
          u.jsx(Ve, { path: "/product/:productId", element: u.jsx(MT, {}) }),
          u.jsx(Ve, { path: "About", element: u.jsx(UT, {}) }),
          u.jsx(Ve, { path: "/Contact", element: u.jsx(BT, {}) }),
          u.jsx(Ve, { path: "/Cart", element: u.jsx(FT, {}) }),
          s && u.jsx(Ve, { path: "/Login", element: u.jsx(qT, {}) }),
          s && u.jsx(Ve, { path: "/Signin", element: u.jsx(YT, {}) }),
          u.jsx(Ve, { path: "/AdminPanel", element: u.jsx(s_, {}) }),
          u.jsx(Ve, { path: "/AdminPanel/add", element: u.jsx(zf, {}) }),
          u.jsx(Ve, { path: "/orders", element: u.jsx(o_, {}) }),
          u.jsx(Ve, { path: "/place-order", element: u.jsx(a_, {}) }),
          u.jsx(Ve, { path: "/forgot-password", element: u.jsx(c_, {}) }),
          u.jsx(Ve, { path: "/reset-password/:token", element: u.jsx(f_, {}) }),
        ],
      }),
      !o && u.jsx(MN, {}),
    ],
  });
}
const m_ = nk({
  reducer: {
    [di.reducerPath]: di.reducer,
    [Df.reducerPath]: Df.reducer,
    [Ea.reducerPath]: Ea.reducer,
  },
  middleware: (e) => e().concat(di.middleware).concat(Ea.middleware),
});
uc.createRoot(document.getElementById("root")).render(
  u.jsx(vE, {
    store: m_,
    children: u.jsxs(MC, {
      children: [
        " ",
        u.jsxs(QT, {
          clientId:
            "963059768068-5m52ac22hi9dshtaos2pgn38lggjrcb7.apps.googleusercontent.com",
          children: [" ", u.jsx(p_, {})],
        }),
      ],
    }),
  })
);
