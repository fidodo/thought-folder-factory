var lh = (e) => {
  throw TypeError(e);
};
var hu = (e, t, n) => t.has(e) || lh("Cannot " + n);
var k = (e, t, n) => (
    hu(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  ne = (e, t, n) =>
    t.has(e)
      ? lh("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  q = (e, t, n, r) => (
    hu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  ze = (e, t, n) => (hu(e, t, "access private method"), n);
var Hs = (e, t, n, r) => ({
  set _(o) {
    q(e, t, o, n);
  },
  get _() {
    return k(e, t, r);
  },
});
function e1(e, t) {
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
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
function Gm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ym = { exports: {} },
  Tl = {},
  Qm = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ts = Symbol.for("react.element"),
  t1 = Symbol.for("react.portal"),
  n1 = Symbol.for("react.fragment"),
  r1 = Symbol.for("react.strict_mode"),
  o1 = Symbol.for("react.profiler"),
  i1 = Symbol.for("react.provider"),
  s1 = Symbol.for("react.context"),
  a1 = Symbol.for("react.forward_ref"),
  l1 = Symbol.for("react.suspense"),
  u1 = Symbol.for("react.memo"),
  c1 = Symbol.for("react.lazy"),
  uh = Symbol.iterator;
function d1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (uh && e[uh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xm = Object.assign,
  Jm = {};
function ri(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Jm),
    (this.updater = n || qm);
}
ri.prototype.isReactComponent = {};
ri.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ri.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zm() {}
Zm.prototype = ri.prototype;
function Id(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Jm),
    (this.updater = n || qm);
}
var Pd = (Id.prototype = new Zm());
Pd.constructor = Id;
Xm(Pd, ri.prototype);
Pd.isPureReactComponent = !0;
var ch = Array.isArray,
  eg = Object.prototype.hasOwnProperty,
  Rd = { current: null },
  tg = { key: !0, ref: !0, __self: !0, __source: !0 };
function ng(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      eg.call(t, r) && !tg.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ts,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Rd.current,
  };
}
function f1(e, t) {
  return {
    $$typeof: Ts,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ad(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ts;
}
function h1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var dh = /\/+/g;
function pu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? h1("" + e.key)
    : t.toString(36);
}
function va(e, t, n, r, o) {
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
          case Ts:
          case t1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + pu(s, 0) : r),
      ch(o)
        ? ((n = ""),
          e != null && (n = e.replace(dh, "$&/") + "/"),
          va(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ad(o) &&
            (o = f1(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(dh, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ch(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + pu(i, a);
      s += va(i, t, n, l, o);
    }
  else if (((l = d1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + pu(i, a++)), (s += va(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function Ks(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    va(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function p1(e) {
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
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var nt = { current: null },
  ya = { transition: null },
  m1 = {
    ReactCurrentDispatcher: nt,
    ReactCurrentBatchConfig: ya,
    ReactCurrentOwner: Rd,
  };
function rg() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
  map: Ks,
  forEach: function (e, t, n) {
    Ks(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ks(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ks(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ad(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
J.Component = ri;
J.Fragment = n1;
J.Profiler = o1;
J.PureComponent = Id;
J.StrictMode = r1;
J.Suspense = l1;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m1;
J.act = rg;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Xm({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Rd.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      eg.call(t, l) &&
        !tg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ts, type: e.type, key: o, ref: i, props: r, _owner: s };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: s1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: i1, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = ng;
J.createFactory = function (e) {
  var t = ng.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: a1, render: e };
};
J.isValidElement = Ad;
J.lazy = function (e) {
  return { $$typeof: c1, _payload: { _status: -1, _result: e }, _init: p1 };
};
J.memo = function (e, t) {
  return { $$typeof: u1, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = ya.transition;
  ya.transition = {};
  try {
    e();
  } finally {
    ya.transition = t;
  }
};
J.unstable_act = rg;
J.useCallback = function (e, t) {
  return nt.current.useCallback(e, t);
};
J.useContext = function (e) {
  return nt.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return nt.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return nt.current.useEffect(e, t);
};
J.useId = function () {
  return nt.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return nt.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return nt.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return nt.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return nt.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return nt.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return nt.current.useRef(e);
};
J.useState = function (e) {
  return nt.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return nt.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return nt.current.useTransition();
};
J.version = "18.3.1";
Qm.exports = J;
var p = Qm.exports;
const I = Gm(p),
  og = e1({ __proto__: null, default: I }, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var g1 = p,
  v1 = Symbol.for("react.element"),
  y1 = Symbol.for("react.fragment"),
  w1 = Object.prototype.hasOwnProperty,
  E1 = g1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  b1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function ig(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) w1.call(t, r) && !b1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: v1,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: E1.current,
  };
}
Tl.Fragment = y1;
Tl.jsx = ig;
Tl.jsxs = ig;
Ym.exports = Tl;
var N = Ym.exports,
  sg = { exports: {} },
  St = {},
  ag = { exports: {} },
  lg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, A) {
    var $ = T.length;
    T.push(A);
    e: for (; 0 < $; ) {
      var F = ($ - 1) >>> 1,
        z = T[F];
      if (0 < o(z, A)) (T[F] = A), (T[$] = z), ($ = F);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var A = T[0],
      $ = T.pop();
    if ($ !== A) {
      T[0] = $;
      e: for (var F = 0, z = T.length, K = z >>> 1; F < K; ) {
        var ee = 2 * (F + 1) - 1,
          xe = T[ee],
          Y = ee + 1,
          Ue = T[Y];
        if (0 > o(xe, $))
          Y < z && 0 > o(Ue, xe)
            ? ((T[F] = Ue), (T[Y] = $), (F = Y))
            : ((T[F] = xe), (T[ee] = $), (F = ee));
        else if (Y < z && 0 > o(Ue, $)) (T[F] = Ue), (T[Y] = $), (F = Y);
        else break e;
      }
    }
    return A;
  }
  function o(T, A) {
    var $ = T.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : T.id - A.id;
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
    d = 1,
    f = null,
    c = 3,
    g = !1,
    w = !1,
    v = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(T) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= T)
        r(u), (A.sortIndex = A.expirationTime), t(l, A);
      else break;
      A = n(u);
    }
  }
  function b(T) {
    if (((v = !1), y(T), !w))
      if (n(l) !== null) (w = !0), j(S);
      else {
        var A = n(u);
        A !== null && V(b, A.startTime - T);
      }
  }
  function S(T, A) {
    (w = !1), v && ((v = !1), m(x), (x = -1)), (g = !0);
    var $ = c;
    try {
      for (
        y(A), f = n(l);
        f !== null && (!(f.expirationTime > A) || (T && !M()));

      ) {
        var F = f.callback;
        if (typeof F == "function") {
          (f.callback = null), (c = f.priorityLevel);
          var z = F(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof z == "function" ? (f.callback = z) : f === n(l) && r(l),
            y(A);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var K = !0;
      else {
        var ee = n(u);
        ee !== null && V(b, ee.startTime - A), (K = !1);
      }
      return K;
    } finally {
      (f = null), (c = $), (g = !1);
    }
  }
  var C = !1,
    _ = null,
    x = -1,
    O = 5,
    P = -1;
  function M() {
    return !(e.unstable_now() - P < O);
  }
  function L() {
    if (_ !== null) {
      var T = e.unstable_now();
      P = T;
      var A = !0;
      try {
        A = _(!0, T);
      } finally {
        A ? B() : ((C = !1), (_ = null));
      }
    } else C = !1;
  }
  var B;
  if (typeof h == "function")
    B = function () {
      h(L);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      H = D.port2;
    (D.port1.onmessage = L),
      (B = function () {
        H.postMessage(null);
      });
  } else
    B = function () {
      E(L, 0);
    };
  function j(T) {
    (_ = T), C || ((C = !0), B());
  }
  function V(T, A) {
    x = E(function () {
      T(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), j(S));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (O = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (T) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = c;
      }
      var $ = c;
      c = A;
      try {
        return T();
      } finally {
        c = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, A) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var $ = c;
      c = T;
      try {
        return A();
      } finally {
        c = $;
      }
    }),
    (e.unstable_scheduleCallback = function (T, A, $) {
      var F = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? F + $ : F))
          : ($ = F),
        T)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = $ + z),
        (T = {
          id: d++,
          callback: A,
          priorityLevel: T,
          startTime: $,
          expirationTime: z,
          sortIndex: -1,
        }),
        $ > F
          ? ((T.sortIndex = $),
            t(u, T),
            n(l) === null &&
              T === n(u) &&
              (v ? (m(x), (x = -1)) : (v = !0), V(b, $ - F)))
          : ((T.sortIndex = z), t(l, T), w || g || ((w = !0), j(S))),
        T
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (T) {
      var A = c;
      return function () {
        var $ = c;
        c = A;
        try {
          return T.apply(this, arguments);
        } finally {
          c = $;
        }
      };
    });
})(lg);
ag.exports = lg;
var S1 = ag.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var x1 = p,
  bt = S1;
function R(e) {
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
var ug = new Set(),
  qi = {};
function oo(e, t) {
  Go(e, t), Go(e + "Capture", t);
}
function Go(e, t) {
  for (qi[e] = t, e = 0; e < t.length; e++) ug.add(t[e]);
}
var Pn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ic = Object.prototype.hasOwnProperty,
  C1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fh = {},
  hh = {};
function _1(e) {
  return ic.call(hh, e)
    ? !0
    : ic.call(fh, e)
      ? !1
      : C1.test(e)
        ? (hh[e] = !0)
        : ((fh[e] = !0), !1);
}
function T1(e, t, n, r) {
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
function k1(e, t, n, r) {
  if (t === null || typeof t > "u" || T1(e, t, n, r)) return !0;
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
function rt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new rt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new rt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new rt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Fe[e] = new rt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new rt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new rt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new rt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new rt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new rt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Od = /[\-:]([a-z])/g;
function Dd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Od, Dd);
    Fe[t] = new rt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Od, Dd);
    Fe[t] = new rt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Od, Dd);
  Fe[t] = new rt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new rt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new rt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new rt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Nd(e, t, n, r) {
  var o = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (k1(t, n, o, r) && (n = null),
    r || o === null
      ? _1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ln = x1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Gs = Symbol.for("react.element"),
  ho = Symbol.for("react.portal"),
  po = Symbol.for("react.fragment"),
  Md = Symbol.for("react.strict_mode"),
  sc = Symbol.for("react.profiler"),
  cg = Symbol.for("react.provider"),
  dg = Symbol.for("react.context"),
  Ld = Symbol.for("react.forward_ref"),
  ac = Symbol.for("react.suspense"),
  lc = Symbol.for("react.suspense_list"),
  Fd = Symbol.for("react.memo"),
  Kn = Symbol.for("react.lazy"),
  fg = Symbol.for("react.offscreen"),
  ph = Symbol.iterator;
function wi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ph && e[ph]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ge = Object.assign,
  mu;
function Ai(e) {
  if (mu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      mu = (t && t[1]) || "";
    }
  return (
    `
` +
    mu +
    e
  );
}
var gu = !1;
function vu(e, t) {
  if (!e || gu) return "";
  gu = !0;
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
    (gu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ai(e) : "";
}
function I1(e) {
  switch (e.tag) {
    case 5:
      return Ai(e.type);
    case 16:
      return Ai("Lazy");
    case 13:
      return Ai("Suspense");
    case 19:
      return Ai("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vu(e.type, !1)), e;
    case 11:
      return (e = vu(e.type.render, !1)), e;
    case 1:
      return (e = vu(e.type, !0)), e;
    default:
      return "";
  }
}
function uc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case po:
      return "Fragment";
    case ho:
      return "Portal";
    case sc:
      return "Profiler";
    case Md:
      return "StrictMode";
    case ac:
      return "Suspense";
    case lc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case dg:
        return (e.displayName || "Context") + ".Consumer";
      case cg:
        return (e._context.displayName || "Context") + ".Provider";
      case Ld:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Fd:
        return (
          (t = e.displayName || null), t !== null ? t : uc(e.type) || "Memo"
        );
      case Kn:
        (t = e._payload), (e = e._init);
        try {
          return uc(e(t));
        } catch {}
    }
  return null;
}
function P1(e) {
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
      return uc(t);
    case 8:
      return t === Md ? "StrictMode" : "Mode";
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
function wr(e) {
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
function hg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function R1(e) {
  var t = hg(e) ? "checked" : "value",
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
function Ys(e) {
  e._valueTracker || (e._valueTracker = R1(e));
}
function pg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = hg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function La(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function cc(e, t) {
  var n = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = wr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function mg(e, t) {
  (t = t.checked), t != null && Nd(e, "checked", t, !1);
}
function dc(e, t) {
  mg(e, t);
  var n = wr(t.value),
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
    ? fc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fc(e, t.type, wr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function gh(e, t, n) {
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
function fc(e, t, n) {
  (t !== "number" || La(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Oi = Array.isArray;
function _o(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function hc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function vh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Oi(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: wr(n) };
}
function gg(e, t) {
  var n = wr(t.value),
    r = wr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function yh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Qs,
  yg = (function (e) {
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
        Qs = Qs || document.createElement("div"),
          Qs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Qs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fi = {
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
  A1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fi).forEach(function (e) {
  A1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fi[t] = Fi[e]);
  });
});
function wg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fi.hasOwnProperty(e) && Fi[e])
      ? ("" + t).trim()
      : t + "px";
}
function Eg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = wg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var O1 = ge(
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
  },
);
function mc(e, t) {
  if (t) {
    if (O1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function gc(e, t) {
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
var vc = null;
function Ud(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yc = null,
  To = null,
  ko = null;
function wh(e) {
  if ((e = Ps(e))) {
    if (typeof yc != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Al(t)), yc(e.stateNode, e.type, t));
  }
}
function bg(e) {
  To ? (ko ? ko.push(e) : (ko = [e])) : (To = e);
}
function Sg() {
  if (To) {
    var e = To,
      t = ko;
    if (((ko = To = null), wh(e), t)) for (e = 0; e < t.length; e++) wh(t[e]);
  }
}
function xg(e, t) {
  return e(t);
}
function Cg() {}
var yu = !1;
function _g(e, t, n) {
  if (yu) return e(t, n);
  yu = !0;
  try {
    return xg(e, t, n);
  } finally {
    (yu = !1), (To !== null || ko !== null) && (Cg(), Sg());
  }
}
function Ji(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Al(n);
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
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var wc = !1;
if (Pn)
  try {
    var Ei = {};
    Object.defineProperty(Ei, "passive", {
      get: function () {
        wc = !0;
      },
    }),
      window.addEventListener("test", Ei, Ei),
      window.removeEventListener("test", Ei, Ei);
  } catch {
    wc = !1;
  }
function D1(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Ui = !1,
  Fa = null,
  Ua = !1,
  Ec = null,
  N1 = {
    onError: function (e) {
      (Ui = !0), (Fa = e);
    },
  };
function M1(e, t, n, r, o, i, s, a, l) {
  (Ui = !1), (Fa = null), D1.apply(N1, arguments);
}
function L1(e, t, n, r, o, i, s, a, l) {
  if ((M1.apply(this, arguments), Ui)) {
    if (Ui) {
      var u = Fa;
      (Ui = !1), (Fa = null);
    } else throw Error(R(198));
    Ua || ((Ua = !0), (Ec = u));
  }
}
function io(e) {
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
function Tg(e) {
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
function Eh(e) {
  if (io(e) !== e) throw Error(R(188));
}
function F1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = io(e)), t === null)) throw Error(R(188));
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
        if (i === n) return Eh(o), e;
        if (i === r) return Eh(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
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
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function kg(e) {
  return (e = F1(e)), e !== null ? Ig(e) : null;
}
function Ig(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ig(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pg = bt.unstable_scheduleCallback,
  bh = bt.unstable_cancelCallback,
  U1 = bt.unstable_shouldYield,
  z1 = bt.unstable_requestPaint,
  Ee = bt.unstable_now,
  $1 = bt.unstable_getCurrentPriorityLevel,
  zd = bt.unstable_ImmediatePriority,
  Rg = bt.unstable_UserBlockingPriority,
  za = bt.unstable_NormalPriority,
  j1 = bt.unstable_LowPriority,
  Ag = bt.unstable_IdlePriority,
  kl = null,
  dn = null;
function B1(e) {
  if (dn && typeof dn.onCommitFiberRoot == "function")
    try {
      dn.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ht = Math.clz32 ? Math.clz32 : H1,
  V1 = Math.log,
  W1 = Math.LN2;
function H1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((V1(e) / W1) | 0)) | 0;
}
var qs = 64,
  Xs = 4194304;
function Di(e) {
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
function $a(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Di(a)) : ((i &= s), i !== 0 && (r = Di(i)));
  } else (s = n & ~o), s !== 0 ? (r = Di(s)) : i !== 0 && (r = Di(i));
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
function K1(e, t) {
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
function G1(e, t) {
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
      ? (!(a & n) || a & r) && (o[s] = K1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function bc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Og() {
  var e = qs;
  return (qs <<= 1), !(qs & 4194240) && (qs = 64), e;
}
function wu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ks(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ht(t)),
    (e[t] = n);
}
function Y1(e, t) {
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
function $d(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ht(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var re = 0;
function Dg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ng,
  jd,
  Mg,
  Lg,
  Fg,
  Sc = !1,
  Js = [],
  ur = null,
  cr = null,
  dr = null,
  Zi = new Map(),
  es = new Map(),
  Qn = [],
  Q1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Sh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ur = null;
      break;
    case "dragenter":
    case "dragleave":
      cr = null;
      break;
    case "mouseover":
    case "mouseout":
      dr = null;
      break;
    case "pointerover":
    case "pointerout":
      Zi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      es.delete(t.pointerId);
  }
}
function bi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ps(t)), t !== null && jd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function q1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (ur = bi(ur, e, t, n, r, o)), !0;
    case "dragenter":
      return (cr = bi(cr, e, t, n, r, o)), !0;
    case "mouseover":
      return (dr = bi(dr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Zi.set(i, bi(Zi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), es.set(i, bi(es.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Ug(e) {
  var t = Ur(e.target);
  if (t !== null) {
    var n = io(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Tg(n)), t !== null)) {
          (e.blockedOn = t),
            Fg(e.priority, function () {
              Mg(n);
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
function wa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (vc = r), n.target.dispatchEvent(r), (vc = null);
    } else return (t = Ps(n)), t !== null && jd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xh(e, t, n) {
  wa(e) && n.delete(t);
}
function X1() {
  (Sc = !1),
    ur !== null && wa(ur) && (ur = null),
    cr !== null && wa(cr) && (cr = null),
    dr !== null && wa(dr) && (dr = null),
    Zi.forEach(xh),
    es.forEach(xh);
}
function Si(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Sc ||
      ((Sc = !0),
      bt.unstable_scheduleCallback(bt.unstable_NormalPriority, X1)));
}
function ts(e) {
  function t(o) {
    return Si(o, e);
  }
  if (0 < Js.length) {
    Si(Js[0], e);
    for (var n = 1; n < Js.length; n++) {
      var r = Js[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ur !== null && Si(ur, e),
      cr !== null && Si(cr, e),
      dr !== null && Si(dr, e),
      Zi.forEach(t),
      es.forEach(t),
      n = 0;
    n < Qn.length;
    n++
  )
    (r = Qn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qn.length && ((n = Qn[0]), n.blockedOn === null); )
    Ug(n), n.blockedOn === null && Qn.shift();
}
var Io = Ln.ReactCurrentBatchConfig,
  ja = !0;
function J1(e, t, n, r) {
  var o = re,
    i = Io.transition;
  Io.transition = null;
  try {
    (re = 1), Bd(e, t, n, r);
  } finally {
    (re = o), (Io.transition = i);
  }
}
function Z1(e, t, n, r) {
  var o = re,
    i = Io.transition;
  Io.transition = null;
  try {
    (re = 4), Bd(e, t, n, r);
  } finally {
    (re = o), (Io.transition = i);
  }
}
function Bd(e, t, n, r) {
  if (ja) {
    var o = xc(e, t, n, r);
    if (o === null) Pu(e, t, r, Ba, n), Sh(e, r);
    else if (q1(o, e, t, n, r)) r.stopPropagation();
    else if ((Sh(e, r), t & 4 && -1 < Q1.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ps(o);
        if (
          (i !== null && Ng(i),
          (i = xc(e, t, n, r)),
          i === null && Pu(e, t, r, Ba, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Pu(e, t, r, null, n);
  }
}
var Ba = null;
function xc(e, t, n, r) {
  if (((Ba = null), (e = Ud(r)), (e = Ur(e)), e !== null))
    if (((t = io(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Tg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ba = e), null;
}
function zg(e) {
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
      switch ($1()) {
        case zd:
          return 1;
        case Rg:
          return 4;
        case za:
        case j1:
          return 16;
        case Ag:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var sr = null,
  Vd = null,
  Ea = null;
function $g() {
  if (Ea) return Ea;
  var e,
    t = Vd,
    n = t.length,
    r,
    o = "value" in sr ? sr.value : sr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Ea = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ba(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Zs() {
  return !0;
}
function Ch() {
  return !1;
}
function xt(e) {
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
        ? Zs
        : Ch),
      (this.isPropagationStopped = Ch),
      this
    );
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Zs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Zs));
      },
      persist: function () {},
      isPersistent: Zs,
    }),
    t
  );
}
var oi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Wd = xt(oi),
  Is = ge({}, oi, { view: 0, detail: 0 }),
  eE = xt(Is),
  Eu,
  bu,
  xi,
  Il = ge({}, Is, {
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
    getModifierState: Hd,
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
        : (e !== xi &&
            (xi && e.type === "mousemove"
              ? ((Eu = e.screenX - xi.screenX), (bu = e.screenY - xi.screenY))
              : (bu = Eu = 0),
            (xi = e)),
          Eu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bu;
    },
  }),
  _h = xt(Il),
  tE = ge({}, Il, { dataTransfer: 0 }),
  nE = xt(tE),
  rE = ge({}, Is, { relatedTarget: 0 }),
  Su = xt(rE),
  oE = ge({}, oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iE = xt(oE),
  sE = ge({}, oi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  aE = xt(sE),
  lE = ge({}, oi, { data: 0 }),
  Th = xt(lE),
  uE = {
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
  cE = {
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
  dE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dE[e]) ? !!t[e] : !1;
}
function Hd() {
  return fE;
}
var hE = ge({}, Is, {
    key: function (e) {
      if (e.key) {
        var t = uE[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ba(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? cE[e.keyCode] || "Unidentified"
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
    getModifierState: Hd,
    charCode: function (e) {
      return e.type === "keypress" ? ba(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ba(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  pE = xt(hE),
  mE = ge({}, Il, {
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
  kh = xt(mE),
  gE = ge({}, Is, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hd,
  }),
  vE = xt(gE),
  yE = ge({}, oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wE = xt(yE),
  EE = ge({}, Il, {
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
  bE = xt(EE),
  SE = [9, 13, 27, 32],
  Kd = Pn && "CompositionEvent" in window,
  zi = null;
Pn && "documentMode" in document && (zi = document.documentMode);
var xE = Pn && "TextEvent" in window && !zi,
  jg = Pn && (!Kd || (zi && 8 < zi && 11 >= zi)),
  Ih = " ",
  Ph = !1;
function Bg(e, t) {
  switch (e) {
    case "keyup":
      return SE.indexOf(t.keyCode) !== -1;
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
function Vg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var mo = !1;
function CE(e, t) {
  switch (e) {
    case "compositionend":
      return Vg(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ph = !0), Ih);
    case "textInput":
      return (e = t.data), e === Ih && Ph ? null : e;
    default:
      return null;
  }
}
function _E(e, t) {
  if (mo)
    return e === "compositionend" || (!Kd && Bg(e, t))
      ? ((e = $g()), (Ea = Vd = sr = null), (mo = !1), e)
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
      return jg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var TE = {
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
function Rh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!TE[e.type] : t === "textarea";
}
function Wg(e, t, n, r) {
  bg(r),
    (t = Va(t, "onChange")),
    0 < t.length &&
      ((n = new Wd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $i = null,
  ns = null;
function kE(e) {
  tv(e, 0);
}
function Pl(e) {
  var t = yo(e);
  if (pg(t)) return e;
}
function IE(e, t) {
  if (e === "change") return t;
}
var Hg = !1;
if (Pn) {
  var xu;
  if (Pn) {
    var Cu = "oninput" in document;
    if (!Cu) {
      var Ah = document.createElement("div");
      Ah.setAttribute("oninput", "return;"),
        (Cu = typeof Ah.oninput == "function");
    }
    xu = Cu;
  } else xu = !1;
  Hg = xu && (!document.documentMode || 9 < document.documentMode);
}
function Oh() {
  $i && ($i.detachEvent("onpropertychange", Kg), (ns = $i = null));
}
function Kg(e) {
  if (e.propertyName === "value" && Pl(ns)) {
    var t = [];
    Wg(t, ns, e, Ud(e)), _g(kE, t);
  }
}
function PE(e, t, n) {
  e === "focusin"
    ? (Oh(), ($i = t), (ns = n), $i.attachEvent("onpropertychange", Kg))
    : e === "focusout" && Oh();
}
function RE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pl(ns);
}
function AE(e, t) {
  if (e === "click") return Pl(t);
}
function OE(e, t) {
  if (e === "input" || e === "change") return Pl(t);
}
function DE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Gt = typeof Object.is == "function" ? Object.is : DE;
function rs(e, t) {
  if (Gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ic.call(t, o) || !Gt(e[o], t[o])) return !1;
  }
  return !0;
}
function Dh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nh(e, t) {
  var n = Dh(e);
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
    n = Dh(n);
  }
}
function Gg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Gg(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Yg() {
  for (var e = window, t = La(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = La(e.document);
  }
  return t;
}
function Gd(e) {
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
function NE(e) {
  var t = Yg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Gd(n)) {
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
          (o = Nh(n, i));
        var s = Nh(n, r);
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
var ME = Pn && "documentMode" in document && 11 >= document.documentMode,
  go = null,
  Cc = null,
  ji = null,
  _c = !1;
function Mh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _c ||
    go == null ||
    go !== La(r) ||
    ((r = go),
    "selectionStart" in r && Gd(r)
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
    (ji && rs(ji, r)) ||
      ((ji = r),
      (r = Va(Cc, "onSelect")),
      0 < r.length &&
        ((t = new Wd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = go))));
}
function ea(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var vo = {
    animationend: ea("Animation", "AnimationEnd"),
    animationiteration: ea("Animation", "AnimationIteration"),
    animationstart: ea("Animation", "AnimationStart"),
    transitionend: ea("Transition", "TransitionEnd"),
  },
  _u = {},
  Qg = {};
Pn &&
  ((Qg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vo.animationend.animation,
    delete vo.animationiteration.animation,
    delete vo.animationstart.animation),
  "TransitionEvent" in window || delete vo.transitionend.transition);
function Rl(e) {
  if (_u[e]) return _u[e];
  if (!vo[e]) return e;
  var t = vo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Qg) return (_u[e] = t[n]);
  return e;
}
var qg = Rl("animationend"),
  Xg = Rl("animationiteration"),
  Jg = Rl("animationstart"),
  Zg = Rl("transitionend"),
  ev = new Map(),
  Lh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Tr(e, t) {
  ev.set(e, t), oo(t, [e]);
}
for (var Tu = 0; Tu < Lh.length; Tu++) {
  var ku = Lh[Tu],
    LE = ku.toLowerCase(),
    FE = ku[0].toUpperCase() + ku.slice(1);
  Tr(LE, "on" + FE);
}
Tr(qg, "onAnimationEnd");
Tr(Xg, "onAnimationIteration");
Tr(Jg, "onAnimationStart");
Tr("dblclick", "onDoubleClick");
Tr("focusin", "onFocus");
Tr("focusout", "onBlur");
Tr(Zg, "onTransitionEnd");
Go("onMouseEnter", ["mouseout", "mouseover"]);
Go("onMouseLeave", ["mouseout", "mouseover"]);
Go("onPointerEnter", ["pointerout", "pointerover"]);
Go("onPointerLeave", ["pointerout", "pointerover"]);
oo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
oo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
oo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
oo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
oo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
oo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Ni =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  UE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));
function Fh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), L1(r, t, void 0, e), (e.currentTarget = null);
}
function tv(e, t) {
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
          Fh(o, a, u), (i = l);
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
          Fh(o, a, u), (i = l);
        }
    }
  }
  if (Ua) throw ((e = Ec), (Ua = !1), (Ec = null), e);
}
function de(e, t) {
  var n = t[Rc];
  n === void 0 && (n = t[Rc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (nv(t, e, 2, !1), n.add(r));
}
function Iu(e, t, n) {
  var r = 0;
  t && (r |= 4), nv(n, e, r, t);
}
var ta = "_reactListening" + Math.random().toString(36).slice(2);
function os(e) {
  if (!e[ta]) {
    (e[ta] = !0),
      ug.forEach(function (n) {
        n !== "selectionchange" && (UE.has(n) || Iu(n, !1, e), Iu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ta] || ((t[ta] = !0), Iu("selectionchange", !1, t));
  }
}
function nv(e, t, n, r) {
  switch (zg(t)) {
    case 1:
      var o = J1;
      break;
    case 4:
      o = Z1;
      break;
    default:
      o = Bd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !wc ||
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
function Pu(e, t, n, r, o) {
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
          if (((s = Ur(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  _g(function () {
    var u = i,
      d = Ud(n),
      f = [];
    e: {
      var c = ev.get(e);
      if (c !== void 0) {
        var g = Wd,
          w = e;
        switch (e) {
          case "keypress":
            if (ba(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = pE;
            break;
          case "focusin":
            (w = "focus"), (g = Su);
            break;
          case "focusout":
            (w = "blur"), (g = Su);
            break;
          case "beforeblur":
          case "afterblur":
            g = Su;
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
            g = _h;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = nE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = vE;
            break;
          case qg:
          case Xg:
          case Jg:
            g = iE;
            break;
          case Zg:
            g = wE;
            break;
          case "scroll":
            g = eE;
            break;
          case "wheel":
            g = bE;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = aE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = kh;
        }
        var v = (t & 4) !== 0,
          E = !v && e === "scroll",
          m = v ? (c !== null ? c + "Capture" : null) : c;
        v = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var b = y.stateNode;
          if (
            (y.tag === 5 &&
              b !== null &&
              ((y = b),
              m !== null && ((b = Ji(h, m)), b != null && v.push(is(h, b, y)))),
            E)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((c = new g(c, w, null, n, d)), f.push({ event: c, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          c &&
            n !== vc &&
            (w = n.relatedTarget || n.fromElement) &&
            (Ur(w) || w[Rn]))
        )
          break e;
        if (
          (g || c) &&
          ((c =
            d.window === d
              ? d
              : (c = d.ownerDocument)
                ? c.defaultView || c.parentWindow
                : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = u),
              (w = w ? Ur(w) : null),
              w !== null &&
                ((E = io(w)), w !== E || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = u)),
          g !== w)
        ) {
          if (
            ((v = _h),
            (b = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = kh),
              (b = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (E = g == null ? c : yo(g)),
            (y = w == null ? c : yo(w)),
            (c = new v(b, h + "leave", g, n, d)),
            (c.target = E),
            (c.relatedTarget = y),
            (b = null),
            Ur(d) === u &&
              ((v = new v(m, h + "enter", w, n, d)),
              (v.target = y),
              (v.relatedTarget = E),
              (b = v)),
            (E = b),
            g && w)
          )
            t: {
              for (v = g, m = w, h = 0, y = v; y; y = fo(y)) h++;
              for (y = 0, b = m; b; b = fo(b)) y++;
              for (; 0 < h - y; ) (v = fo(v)), h--;
              for (; 0 < y - h; ) (m = fo(m)), y--;
              for (; h--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = fo(v)), (m = fo(m));
              }
              v = null;
            }
          else v = null;
          g !== null && Uh(f, c, g, v, !1),
            w !== null && E !== null && Uh(f, E, w, v, !0);
        }
      }
      e: {
        if (
          ((c = u ? yo(u) : window),
          (g = c.nodeName && c.nodeName.toLowerCase()),
          g === "select" || (g === "input" && c.type === "file"))
        )
          var S = IE;
        else if (Rh(c))
          if (Hg) S = OE;
          else {
            S = RE;
            var C = PE;
          }
        else
          (g = c.nodeName) &&
            g.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (S = AE);
        if (S && (S = S(e, u))) {
          Wg(f, S, n, d);
          break e;
        }
        C && C(e, c, u),
          e === "focusout" &&
            (C = c._wrapperState) &&
            C.controlled &&
            c.type === "number" &&
            fc(c, "number", c.value);
      }
      switch (((C = u ? yo(u) : window), e)) {
        case "focusin":
          (Rh(C) || C.contentEditable === "true") &&
            ((go = C), (Cc = u), (ji = null));
          break;
        case "focusout":
          ji = Cc = go = null;
          break;
        case "mousedown":
          _c = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_c = !1), Mh(f, n, d);
          break;
        case "selectionchange":
          if (ME) break;
        case "keydown":
        case "keyup":
          Mh(f, n, d);
      }
      var _;
      if (Kd)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        mo
          ? Bg(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x &&
        (jg &&
          n.locale !== "ko" &&
          (mo || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && mo && (_ = $g())
            : ((sr = d),
              (Vd = "value" in sr ? sr.value : sr.textContent),
              (mo = !0))),
        (C = Va(u, x)),
        0 < C.length &&
          ((x = new Th(x, e, null, n, d)),
          f.push({ event: x, listeners: C }),
          _ ? (x.data = _) : ((_ = Vg(n)), _ !== null && (x.data = _)))),
        (_ = xE ? CE(e, n) : _E(e, n)) &&
          ((u = Va(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Th("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = _)));
    }
    tv(f, t);
  });
}
function is(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Va(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ji(e, n)),
      i != null && r.unshift(is(e, i, o)),
      (i = Ji(e, t)),
      i != null && r.push(is(e, i, o))),
      (e = e.return);
  }
  return r;
}
function fo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uh(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Ji(n, i)), l != null && s.unshift(is(n, l, a)))
        : o || ((l = Ji(n, i)), l != null && s.push(is(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var zE = /\r\n?/g,
  $E = /\u0000|\uFFFD/g;
function zh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zE,
      `
`,
    )
    .replace($E, "");
}
function na(e, t, n) {
  if (((t = zh(t)), zh(e) !== t && n)) throw Error(R(425));
}
function Wa() {}
var Tc = null,
  kc = null;
function Ic(e, t) {
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
var Pc = typeof setTimeout == "function" ? setTimeout : void 0,
  jE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $h = typeof Promise == "function" ? Promise : void 0,
  BE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $h < "u"
        ? function (e) {
            return $h.resolve(null).then(e).catch(VE);
          }
        : Pc;
function VE(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ru(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ts(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ts(t);
}
function fr(e) {
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
function jh(e) {
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
var ii = Math.random().toString(36).slice(2),
  un = "__reactFiber$" + ii,
  ss = "__reactProps$" + ii,
  Rn = "__reactContainer$" + ii,
  Rc = "__reactEvents$" + ii,
  WE = "__reactListeners$" + ii,
  HE = "__reactHandles$" + ii;
function Ur(e) {
  var t = e[un];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rn] || n[un])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = jh(e); e !== null; ) {
          if ((n = e[un])) return n;
          e = jh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ps(e) {
  return (
    (e = e[un] || e[Rn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function yo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Al(e) {
  return e[ss] || null;
}
var Ac = [],
  wo = -1;
function kr(e) {
  return { current: e };
}
function fe(e) {
  0 > wo || ((e.current = Ac[wo]), (Ac[wo] = null), wo--);
}
function ue(e, t) {
  wo++, (Ac[wo] = e.current), (e.current = t);
}
var Er = {},
  He = kr(Er),
  at = kr(!1),
  Qr = Er;
function Yo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Er;
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
function lt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ha() {
  fe(at), fe(He);
}
function Bh(e, t, n) {
  if (He.current !== Er) throw Error(R(168));
  ue(He, t), ue(at, n);
}
function rv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, P1(e) || "Unknown", o));
  return ge({}, n, r);
}
function Ka(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Er),
    (Qr = He.current),
    ue(He, e),
    ue(at, at.current),
    !0
  );
}
function Vh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = rv(e, t, Qr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      fe(at),
      fe(He),
      ue(He, e))
    : fe(at),
    ue(at, n);
}
var xn = null,
  Ol = !1,
  Au = !1;
function ov(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function KE(e) {
  (Ol = !0), ov(e);
}
function Ir() {
  if (!Au && xn !== null) {
    Au = !0;
    var e = 0,
      t = re;
    try {
      var n = xn;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xn = null), (Ol = !1);
    } catch (o) {
      throw (xn !== null && (xn = xn.slice(e + 1)), Pg(zd, Ir), o);
    } finally {
      (re = t), (Au = !1);
    }
  }
  return null;
}
var Eo = [],
  bo = 0,
  Ga = null,
  Ya = 0,
  Pt = [],
  Rt = 0,
  qr = null,
  Cn = 1,
  _n = "";
function Mr(e, t) {
  (Eo[bo++] = Ya), (Eo[bo++] = Ga), (Ga = e), (Ya = t);
}
function iv(e, t, n) {
  (Pt[Rt++] = Cn), (Pt[Rt++] = _n), (Pt[Rt++] = qr), (qr = e);
  var r = Cn;
  e = _n;
  var o = 32 - Ht(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Ht(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Cn = (1 << (32 - Ht(t) + o)) | (n << o) | r),
      (_n = i + e);
  } else (Cn = (1 << i) | (n << o) | r), (_n = e);
}
function Yd(e) {
  e.return !== null && (Mr(e, 1), iv(e, 1, 0));
}
function Qd(e) {
  for (; e === Ga; )
    (Ga = Eo[--bo]), (Eo[bo] = null), (Ya = Eo[--bo]), (Eo[bo] = null);
  for (; e === qr; )
    (qr = Pt[--Rt]),
      (Pt[Rt] = null),
      (_n = Pt[--Rt]),
      (Pt[Rt] = null),
      (Cn = Pt[--Rt]),
      (Pt[Rt] = null);
}
var wt = null,
  yt = null,
  he = !1,
  Wt = null;
function sv(e, t) {
  var n = At(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Wh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (wt = e), (yt = fr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (wt = e), (yt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qr !== null ? { id: Cn, overflow: _n } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = At(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (wt = e),
            (yt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Oc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Dc(e) {
  if (he) {
    var t = yt;
    if (t) {
      var n = t;
      if (!Wh(e, t)) {
        if (Oc(e)) throw Error(R(418));
        t = fr(n.nextSibling);
        var r = wt;
        t && Wh(e, t)
          ? sv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (wt = e));
      }
    } else {
      if (Oc(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (wt = e);
    }
  }
}
function Hh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  wt = e;
}
function ra(e) {
  if (e !== wt) return !1;
  if (!he) return Hh(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ic(e.type, e.memoizedProps))),
    t && (t = yt))
  ) {
    if (Oc(e)) throw (av(), Error(R(418)));
    for (; t; ) sv(e, t), (t = fr(t.nextSibling));
  }
  if ((Hh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              yt = fr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      yt = null;
    }
  } else yt = wt ? fr(e.stateNode.nextSibling) : null;
  return !0;
}
function av() {
  for (var e = yt; e; ) e = fr(e.nextSibling);
}
function Qo() {
  (yt = wt = null), (he = !1);
}
function qd(e) {
  Wt === null ? (Wt = [e]) : Wt.push(e);
}
var GE = Ln.ReactCurrentBatchConfig;
function Ci(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function oa(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Kh(e) {
  var t = e._init;
  return t(e._payload);
}
function lv(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function o(m, h) {
    return (m = gr(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, y, b) {
    return h === null || h.tag !== 6
      ? ((h = Uu(y, m.mode, b)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h);
  }
  function l(m, h, y, b) {
    var S = y.type;
    return S === po
      ? d(m, h, y.props.children, b, y.key)
      : h !== null &&
          (h.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === Kn &&
              Kh(S) === h.type))
        ? ((b = o(h, y.props)), (b.ref = Ci(m, h, y)), (b.return = m), b)
        : ((b = Ia(y.type, y.key, y.props, null, m.mode, b)),
          (b.ref = Ci(m, h, y)),
          (b.return = m),
          b);
  }
  function u(m, h, y, b) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = zu(y, m.mode, b)), (h.return = m), h)
      : ((h = o(h, y.children || [])), (h.return = m), h);
  }
  function d(m, h, y, b, S) {
    return h === null || h.tag !== 7
      ? ((h = Gr(y, m.mode, b, S)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h);
  }
  function f(m, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Uu("" + h, m.mode, y)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Gs:
          return (
            (y = Ia(h.type, h.key, h.props, null, m.mode, y)),
            (y.ref = Ci(m, null, h)),
            (y.return = m),
            y
          );
        case ho:
          return (h = zu(h, m.mode, y)), (h.return = m), h;
        case Kn:
          var b = h._init;
          return f(m, b(h._payload), y);
      }
      if (Oi(h) || wi(h))
        return (h = Gr(h, m.mode, y, null)), (h.return = m), h;
      oa(m, h);
    }
    return null;
  }
  function c(m, h, y, b) {
    var S = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return S !== null ? null : a(m, h, "" + y, b);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Gs:
          return y.key === S ? l(m, h, y, b) : null;
        case ho:
          return y.key === S ? u(m, h, y, b) : null;
        case Kn:
          return (S = y._init), c(m, h, S(y._payload), b);
      }
      if (Oi(y) || wi(y)) return S !== null ? null : d(m, h, y, b, null);
      oa(m, y);
    }
    return null;
  }
  function g(m, h, y, b, S) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (m = m.get(y) || null), a(h, m, "" + b, S);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Gs:
          return (m = m.get(b.key === null ? y : b.key) || null), l(h, m, b, S);
        case ho:
          return (m = m.get(b.key === null ? y : b.key) || null), u(h, m, b, S);
        case Kn:
          var C = b._init;
          return g(m, h, y, C(b._payload), S);
      }
      if (Oi(b) || wi(b)) return (m = m.get(y) || null), d(h, m, b, S, null);
      oa(h, b);
    }
    return null;
  }
  function w(m, h, y, b) {
    for (
      var S = null, C = null, _ = h, x = (h = 0), O = null;
      _ !== null && x < y.length;
      x++
    ) {
      _.index > x ? ((O = _), (_ = null)) : (O = _.sibling);
      var P = c(m, _, y[x], b);
      if (P === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && P.alternate === null && t(m, _),
        (h = i(P, h, x)),
        C === null ? (S = P) : (C.sibling = P),
        (C = P),
        (_ = O);
    }
    if (x === y.length) return n(m, _), he && Mr(m, x), S;
    if (_ === null) {
      for (; x < y.length; x++)
        (_ = f(m, y[x], b)),
          _ !== null &&
            ((h = i(_, h, x)), C === null ? (S = _) : (C.sibling = _), (C = _));
      return he && Mr(m, x), S;
    }
    for (_ = r(m, _); x < y.length; x++)
      (O = g(_, m, x, y[x], b)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? x : O.key),
          (h = i(O, h, x)),
          C === null ? (S = O) : (C.sibling = O),
          (C = O));
    return (
      e &&
        _.forEach(function (M) {
          return t(m, M);
        }),
      he && Mr(m, x),
      S
    );
  }
  function v(m, h, y, b) {
    var S = wi(y);
    if (typeof S != "function") throw Error(R(150));
    if (((y = S.call(y)), y == null)) throw Error(R(151));
    for (
      var C = (S = null), _ = h, x = (h = 0), O = null, P = y.next();
      _ !== null && !P.done;
      x++, P = y.next()
    ) {
      _.index > x ? ((O = _), (_ = null)) : (O = _.sibling);
      var M = c(m, _, P.value, b);
      if (M === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && M.alternate === null && t(m, _),
        (h = i(M, h, x)),
        C === null ? (S = M) : (C.sibling = M),
        (C = M),
        (_ = O);
    }
    if (P.done) return n(m, _), he && Mr(m, x), S;
    if (_ === null) {
      for (; !P.done; x++, P = y.next())
        (P = f(m, P.value, b)),
          P !== null &&
            ((h = i(P, h, x)), C === null ? (S = P) : (C.sibling = P), (C = P));
      return he && Mr(m, x), S;
    }
    for (_ = r(m, _); !P.done; x++, P = y.next())
      (P = g(_, m, x, P.value, b)),
        P !== null &&
          (e && P.alternate !== null && _.delete(P.key === null ? x : P.key),
          (h = i(P, h, x)),
          C === null ? (S = P) : (C.sibling = P),
          (C = P));
    return (
      e &&
        _.forEach(function (L) {
          return t(m, L);
        }),
      he && Mr(m, x),
      S
    );
  }
  function E(m, h, y, b) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === po &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Gs:
          e: {
            for (var S = y.key, C = h; C !== null; ) {
              if (C.key === S) {
                if (((S = y.type), S === po)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (h = o(C, y.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Kn &&
                    Kh(S) === C.type)
                ) {
                  n(m, C.sibling),
                    (h = o(C, y.props)),
                    (h.ref = Ci(m, C, y)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            y.type === po
              ? ((h = Gr(y.props.children, m.mode, b, y.key)),
                (h.return = m),
                (m = h))
              : ((b = Ia(y.type, y.key, y.props, null, m.mode, b)),
                (b.ref = Ci(m, h, y)),
                (b.return = m),
                (m = b));
          }
          return s(m);
        case ho:
          e: {
            for (C = y.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(m, h.sibling),
                    (h = o(h, y.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = zu(y, m.mode, b)), (h.return = m), (m = h);
          }
          return s(m);
        case Kn:
          return (C = y._init), E(m, h, C(y._payload), b);
      }
      if (Oi(y)) return w(m, h, y, b);
      if (wi(y)) return v(m, h, y, b);
      oa(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = o(h, y)), (h.return = m), (m = h))
          : (n(m, h), (h = Uu(y, m.mode, b)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return E;
}
var qo = lv(!0),
  uv = lv(!1),
  Qa = kr(null),
  qa = null,
  So = null,
  Xd = null;
function Jd() {
  Xd = So = qa = null;
}
function Zd(e) {
  var t = Qa.current;
  fe(Qa), (e._currentValue = t);
}
function Nc(e, t, n) {
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
function Po(e, t) {
  (qa = e),
    (Xd = So = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (st = !0), (e.firstContext = null));
}
function Dt(e) {
  var t = e._currentValue;
  if (Xd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), So === null)) {
      if (qa === null) throw Error(R(308));
      (So = e), (qa.dependencies = { lanes: 0, firstContext: e });
    } else So = So.next = e;
  return t;
}
var zr = null;
function ef(e) {
  zr === null ? (zr = [e]) : zr.push(e);
}
function cv(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ef(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    An(e, r)
  );
}
function An(e, t) {
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
var Gn = !1;
function tf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function dv(e, t) {
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
function In(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function hr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      An(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ef(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    An(e, n)
  );
}
function Sa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $d(e, n);
  }
}
function Gh(e, t) {
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
function Xa(e, t, n, r) {
  var o = e.updateQueue;
  Gn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (d = u = l = null), (a = i);
    do {
      var c = a.lane,
        g = a.eventTime;
      if ((r & c) === c) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            v = a;
          switch (((c = t), (g = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                f = w.call(g, f, c);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (c = typeof w == "function" ? w.call(g, f, c) : w),
                c == null)
              )
                break e;
              f = ge({}, f, c);
              break e;
            case 2:
              Gn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (c = o.effects),
          c === null ? (o.effects = [a]) : c.push(a));
      } else
        (g = {
          eventTime: g,
          lane: c,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = g), (l = f)) : (d = d.next = g),
          (s |= c);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (c = a),
          (a = c.next),
          (c.next = null),
          (o.lastBaseUpdate = c),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Jr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Yh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var Rs = {},
  fn = kr(Rs),
  as = kr(Rs),
  ls = kr(Rs);
function $r(e) {
  if (e === Rs) throw Error(R(174));
  return e;
}
function nf(e, t) {
  switch ((ue(ls, t), ue(as, e), ue(fn, Rs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pc(t, e));
  }
  fe(fn), ue(fn, t);
}
function Xo() {
  fe(fn), fe(as), fe(ls);
}
function fv(e) {
  $r(ls.current);
  var t = $r(fn.current),
    n = pc(t, e.type);
  t !== n && (ue(as, e), ue(fn, n));
}
function rf(e) {
  as.current === e && (fe(fn), fe(as));
}
var pe = kr(0);
function Ja(e) {
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
var Ou = [];
function of() {
  for (var e = 0; e < Ou.length; e++)
    Ou[e]._workInProgressVersionPrimary = null;
  Ou.length = 0;
}
var xa = Ln.ReactCurrentDispatcher,
  Du = Ln.ReactCurrentBatchConfig,
  Xr = 0,
  me = null,
  Ce = null,
  Pe = null,
  Za = !1,
  Bi = !1,
  us = 0,
  YE = 0;
function $e() {
  throw Error(R(321));
}
function sf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Gt(e[n], t[n])) return !1;
  return !0;
}
function af(e, t, n, r, o, i) {
  if (
    ((Xr = i),
    (me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (xa.current = e === null || e.memoizedState === null ? JE : ZE),
    (e = n(r, o)),
    Bi)
  ) {
    i = 0;
    do {
      if (((Bi = !1), (us = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (Pe = Ce = null),
        (t.updateQueue = null),
        (xa.current = eb),
        (e = n(r, o));
    } while (Bi);
  }
  if (
    ((xa.current = el),
    (t = Ce !== null && Ce.next !== null),
    (Xr = 0),
    (Pe = Ce = me = null),
    (Za = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function lf() {
  var e = us !== 0;
  return (us = 0), e;
}
function on() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Pe === null ? (me.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
}
function Nt() {
  if (Ce === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = Pe === null ? me.memoizedState : Pe.next;
  if (t !== null) (Pe = t), (Ce = e);
  else {
    if (e === null) throw Error(R(310));
    (Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      Pe === null ? (me.memoizedState = Pe = e) : (Pe = Pe.next = e);
  }
  return Pe;
}
function cs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Nu(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Ce,
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
      var d = u.lane;
      if ((Xr & d) === d)
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
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (me.lanes |= d),
          (Jr |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      Gt(r, t.memoizedState) || (st = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (me.lanes |= i), (Jr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Mu(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Gt(i, t.memoizedState) || (st = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function hv() {}
function pv(e, t) {
  var n = me,
    r = Nt(),
    o = t(),
    i = !Gt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (st = !0)),
    (r = r.queue),
    uf(vv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ds(9, gv.bind(null, n, r, o, t), void 0, null),
      Ae === null)
    )
      throw Error(R(349));
    Xr & 30 || mv(n, t, o);
  }
  return o;
}
function mv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function gv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), yv(t) && wv(e);
}
function vv(e, t, n) {
  return n(function () {
    yv(t) && wv(e);
  });
}
function yv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Gt(e, n);
  } catch {
    return !0;
  }
}
function wv(e) {
  var t = An(e, 1);
  t !== null && Kt(t, e, 1, -1);
}
function Qh(e) {
  var t = on();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = XE.bind(null, me, e)),
    [t.memoizedState, e]
  );
}
function ds(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ev() {
  return Nt().memoizedState;
}
function Ca(e, t, n, r) {
  var o = on();
  (me.flags |= e),
    (o.memoizedState = ds(1 | t, n, void 0, r === void 0 ? null : r));
}
function Dl(e, t, n, r) {
  var o = Nt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ce !== null) {
    var s = Ce.memoizedState;
    if (((i = s.destroy), r !== null && sf(r, s.deps))) {
      o.memoizedState = ds(t, n, i, r);
      return;
    }
  }
  (me.flags |= e), (o.memoizedState = ds(1 | t, n, i, r));
}
function qh(e, t) {
  return Ca(8390656, 8, e, t);
}
function uf(e, t) {
  return Dl(2048, 8, e, t);
}
function bv(e, t) {
  return Dl(4, 2, e, t);
}
function Sv(e, t) {
  return Dl(4, 4, e, t);
}
function xv(e, t) {
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
function Cv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Dl(4, 4, xv.bind(null, t, e), n)
  );
}
function cf() {}
function _v(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Tv(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function kv(e, t, n) {
  return Xr & 21
    ? (Gt(n, t) || ((n = Og()), (me.lanes |= n), (Jr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = n));
}
function QE(e, t) {
  var n = re;
  (re = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Du.transition;
  Du.transition = {};
  try {
    e(!1), t();
  } finally {
    (re = n), (Du.transition = r);
  }
}
function Iv() {
  return Nt().memoizedState;
}
function qE(e, t, n) {
  var r = mr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pv(e))
  )
    Rv(t, n);
  else if (((n = cv(e, t, n, r)), n !== null)) {
    var o = tt();
    Kt(n, e, r, o), Av(n, t, r);
  }
}
function XE(e, t, n) {
  var r = mr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pv(e)) Rv(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = a), Gt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), ef(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = cv(e, t, o, r)),
      n !== null && ((o = tt()), Kt(n, e, r, o), Av(n, t, r));
  }
}
function Pv(e) {
  var t = e.alternate;
  return e === me || (t !== null && t === me);
}
function Rv(e, t) {
  Bi = Za = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Av(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $d(e, n);
  }
}
var el = {
    readContext: Dt,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useInsertionEffect: $e,
    useLayoutEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useMutableSource: $e,
    useSyncExternalStore: $e,
    useId: $e,
    unstable_isNewReconciler: !1,
  },
  JE = {
    readContext: Dt,
    useCallback: function (e, t) {
      return (on().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Dt,
    useEffect: qh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ca(4194308, 4, xv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ca(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ca(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = on();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = on();
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
        (e = e.dispatch = qE.bind(null, me, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = on();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qh,
    useDebugValue: cf,
    useDeferredValue: function (e) {
      return (on().memoizedState = e);
    },
    useTransition: function () {
      var e = Qh(!1),
        t = e[0];
      return (e = QE.bind(null, e[1])), (on().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = me,
        o = on();
      if (he) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Ae === null)) throw Error(R(349));
        Xr & 30 || mv(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        qh(vv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ds(9, gv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = on(),
        t = Ae.identifierPrefix;
      if (he) {
        var n = _n,
          r = Cn;
        (n = (r & ~(1 << (32 - Ht(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = us++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = YE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ZE = {
    readContext: Dt,
    useCallback: _v,
    useContext: Dt,
    useEffect: uf,
    useImperativeHandle: Cv,
    useInsertionEffect: bv,
    useLayoutEffect: Sv,
    useMemo: Tv,
    useReducer: Nu,
    useRef: Ev,
    useState: function () {
      return Nu(cs);
    },
    useDebugValue: cf,
    useDeferredValue: function (e) {
      var t = Nt();
      return kv(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Nu(cs)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: hv,
    useSyncExternalStore: pv,
    useId: Iv,
    unstable_isNewReconciler: !1,
  },
  eb = {
    readContext: Dt,
    useCallback: _v,
    useContext: Dt,
    useEffect: uf,
    useImperativeHandle: Cv,
    useInsertionEffect: bv,
    useLayoutEffect: Sv,
    useMemo: Tv,
    useReducer: Mu,
    useRef: Ev,
    useState: function () {
      return Mu(cs);
    },
    useDebugValue: cf,
    useDeferredValue: function (e) {
      var t = Nt();
      return Ce === null ? (t.memoizedState = e) : kv(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Mu(cs)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: hv,
    useSyncExternalStore: pv,
    useId: Iv,
    unstable_isNewReconciler: !1,
  };
function $t(e, t) {
  if (e && e.defaultProps) {
    (t = ge({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Mc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Nl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? io(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = tt(),
      o = mr(e),
      i = In(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = hr(e, i, o)),
      t !== null && (Kt(t, e, o, r), Sa(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = tt(),
      o = mr(e),
      i = In(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = hr(e, i, o)),
      t !== null && (Kt(t, e, o, r), Sa(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = tt(),
      r = mr(e),
      o = In(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = hr(e, o, r)),
      t !== null && (Kt(t, e, r, n), Sa(t, e, r));
  },
};
function Xh(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !rs(n, r) || !rs(o, i)
        : !0
  );
}
function Ov(e, t, n) {
  var r = !1,
    o = Er,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Dt(i))
      : ((o = lt(t) ? Qr : He.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Yo(e, o) : Er)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Nl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Jh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Nl.enqueueReplaceState(t, t.state, null);
}
function Lc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), tf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Dt(i))
    : ((i = lt(t) ? Qr : He.current), (o.context = Yo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Mc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Nl.enqueueReplaceState(o, o.state, null),
      Xa(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Jo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += I1(r)), (r = r.return);
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
function Lu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Fc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var tb = typeof WeakMap == "function" ? WeakMap : Map;
function Dv(e, t, n) {
  (n = In(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      nl || ((nl = !0), (Gc = r)), Fc(e, t);
    }),
    n
  );
}
function Nv(e, t, n) {
  (n = In(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Fc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Fc(e, t),
          typeof r != "function" &&
            (pr === null ? (pr = new Set([this])) : pr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Zh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tb();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = mb.bind(null, e, t, n)), t.then(e, e));
}
function ep(e) {
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
function tp(e, t, n, r, o) {
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
              : ((t = In(-1, 1)), (t.tag = 2), hr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var nb = Ln.ReactCurrentOwner,
  st = !1;
function Ze(e, t, n, r) {
  t.child = e === null ? uv(t, null, n, r) : qo(t, e.child, n, r);
}
function np(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Po(t, o),
    (r = af(e, t, n, r, i, o)),
    (n = lf()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        On(e, t, o))
      : (he && n && Yd(t), (t.flags |= 1), Ze(e, t, r, o), t.child)
  );
}
function rp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !yf(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Mv(e, t, i, r, o))
      : ((e = Ia(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : rs), n(s, r) && e.ref === t.ref)
    )
      return On(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = gr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Mv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (rs(i, r) && e.ref === t.ref)
      if (((st = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (st = !0);
      else return (t.lanes = e.lanes), On(e, t, o);
  }
  return Uc(e, t, n, r, o);
}
function Lv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(Co, gt),
        (gt |= n);
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
          ue(Co, gt),
          (gt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ue(Co, gt),
        (gt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(Co, gt),
      (gt |= r);
  return Ze(e, t, o, n), t.child;
}
function Fv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Uc(e, t, n, r, o) {
  var i = lt(n) ? Qr : He.current;
  return (
    (i = Yo(t, i)),
    Po(t, o),
    (n = af(e, t, n, r, i, o)),
    (r = lf()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        On(e, t, o))
      : (he && r && Yd(t), (t.flags |= 1), Ze(e, t, n, o), t.child)
  );
}
function op(e, t, n, r, o) {
  if (lt(n)) {
    var i = !0;
    Ka(t);
  } else i = !1;
  if ((Po(t, o), t.stateNode === null))
    _a(e, t), Ov(t, n, r), Lc(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Dt(u))
      : ((u = lt(n) ? Qr : He.current), (u = Yo(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Jh(t, s, r, u)),
      (Gn = !1);
    var c = t.memoizedState;
    (s.state = c),
      Xa(t, r, s, o),
      (l = t.memoizedState),
      a !== r || c !== l || at.current || Gn
        ? (typeof d == "function" && (Mc(t, n, d, r), (l = t.memoizedState)),
          (a = Gn || Xh(t, n, a, r, c, l, u))
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
      dv(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : $t(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (c = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Dt(l))
        : ((l = lt(n) ? Qr : He.current), (l = Yo(t, l)));
    var g = n.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || c !== l) && Jh(t, s, r, l)),
      (Gn = !1),
      (c = t.memoizedState),
      (s.state = c),
      Xa(t, r, s, o);
    var w = t.memoizedState;
    a !== f || c !== w || at.current || Gn
      ? (typeof g == "function" && (Mc(t, n, g, r), (w = t.memoizedState)),
        (u = Gn || Xh(t, n, u, r, c, w, l) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zc(e, t, n, r, i, o);
}
function zc(e, t, n, r, o, i) {
  Fv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Vh(t, n, !1), On(e, t, i);
  (r = t.stateNode), (nb.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = qo(t, e.child, null, i)), (t.child = qo(t, null, a, i)))
      : Ze(e, t, a, i),
    (t.memoizedState = r.state),
    o && Vh(t, n, !0),
    t.child
  );
}
function Uv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bh(e, t.context, !1),
    nf(e, t.containerInfo);
}
function ip(e, t, n, r, o) {
  return Qo(), qd(o), (t.flags |= 256), Ze(e, t, n, r), t.child;
}
var $c = { dehydrated: null, treeContext: null, retryLane: 0 };
function jc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zv(e, t, n) {
  var r = t.pendingProps,
    o = pe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ue(pe, o & 1),
    e === null)
  )
    return (
      Dc(t),
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
                : (i = Fl(s, r, 0, null)),
              (e = Gr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = jc(n)),
              (t.memoizedState = $c),
              e)
            : df(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return rb(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = gr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = gr(a, i)) : ((i = Gr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? jc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = $c),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = gr(i, { mode: "visible", children: r.children })),
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
function df(e, t) {
  return (
    (t = Fl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ia(e, t, n, r) {
  return (
    r !== null && qd(r),
    qo(t, e.child, null, n),
    (e = df(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rb(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Lu(Error(R(422)))), ia(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Fl({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Gr(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && qo(t, e.child, null, s),
          (t.child.memoizedState = jc(s)),
          (t.memoizedState = $c),
          i);
  if (!(t.mode & 1)) return ia(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(R(419))), (r = Lu(i, r, void 0)), ia(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), st || a)) {
    if (((r = Ae), r !== null)) {
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
          ((i.retryLane = o), An(e, o), Kt(r, e, o, -1));
    }
    return vf(), (r = Lu(Error(R(421)))), ia(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = gb.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (yt = fr(o.nextSibling)),
      (wt = t),
      (he = !0),
      (Wt = null),
      e !== null &&
        ((Pt[Rt++] = Cn),
        (Pt[Rt++] = _n),
        (Pt[Rt++] = qr),
        (Cn = e.id),
        (_n = e.overflow),
        (qr = t)),
      (t = df(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Nc(e.return, t, n);
}
function Fu(e, t, n, r, o) {
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
function $v(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ze(e, t, r.children, n), (r = pe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sp(e, n, t);
        else if (e.tag === 19) sp(e, n, t);
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
  if ((ue(pe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ja(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Fu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ja(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Fu(t, !0, n, null, i);
        break;
      case "together":
        Fu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _a(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function On(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Jr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = gr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = gr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ob(e, t, n) {
  switch (t.tag) {
    case 3:
      Uv(t), Qo();
      break;
    case 5:
      fv(t);
      break;
    case 1:
      lt(t.type) && Ka(t);
      break;
    case 4:
      nf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ue(Qa, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(pe, pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? zv(e, t, n)
            : (ue(pe, pe.current & 1),
              (e = On(e, t, n)),
              e !== null ? e.sibling : null);
      ue(pe, pe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $v(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ue(pe, pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Lv(e, t, n);
  }
  return On(e, t, n);
}
var jv, Bc, Bv, Vv;
jv = function (e, t) {
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
Bc = function () {};
Bv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), $r(fn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = cc(e, o)), (r = cc(e, r)), (i = []);
        break;
      case "select":
        (o = ge({}, o, { value: void 0 })),
          (r = ge({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = hc(e, o)), (r = hc(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Wa);
    }
    mc(n, r);
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
            (qi.hasOwnProperty(u)
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
                (qi.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && de("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Vv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _i(e, t) {
  if (!he)
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
function je(e) {
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
function ib(e, t, n) {
  var r = t.pendingProps;
  switch ((Qd(t), t.tag)) {
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
      return je(t), null;
    case 1:
      return lt(t.type) && Ha(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Xo(),
        fe(at),
        fe(He),
        of(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ra(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Wt !== null && (qc(Wt), (Wt = null)))),
        Bc(e, t),
        je(t),
        null
      );
    case 5:
      rf(t);
      var o = $r(ls.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Bv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return je(t), null;
        }
        if (((e = $r(fn.current)), ra(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[un] = t), (r[ss] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              de("cancel", r), de("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              de("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ni.length; o++) de(Ni[o], r);
              break;
            case "source":
              de("error", r);
              break;
            case "img":
            case "image":
            case "link":
              de("error", r), de("load", r);
              break;
            case "details":
              de("toggle", r);
              break;
            case "input":
              mh(r, i), de("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                de("invalid", r);
              break;
            case "textarea":
              vh(r, i), de("invalid", r);
          }
          mc(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      na(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      na(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : qi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  de("scroll", r);
            }
          switch (n) {
            case "input":
              Ys(r), gh(r, i, !0);
              break;
            case "textarea":
              Ys(r), yh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Wa);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
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
            (e[un] = t),
            (e[ss] = r),
            jv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = gc(n, r)), n)) {
              case "dialog":
                de("cancel", e), de("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                de("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ni.length; o++) de(Ni[o], e);
                o = r;
                break;
              case "source":
                de("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                de("error", e), de("load", e), (o = r);
                break;
              case "details":
                de("toggle", e), (o = r);
                break;
              case "input":
                mh(e, r), (o = cc(e, r)), de("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ge({}, r, { value: void 0 })),
                  de("invalid", e);
                break;
              case "textarea":
                vh(e, r), (o = hc(e, r)), de("invalid", e);
                break;
              default:
                o = r;
            }
            mc(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Eg(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && yg(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Xi(e, l)
                        : typeof l == "number" && Xi(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (qi.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && de("scroll", e)
                          : l != null && Nd(e, i, l, s));
              }
            switch (n) {
              case "input":
                Ys(e), gh(e, r, !1);
                break;
              case "textarea":
                Ys(e), yh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? _o(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      _o(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Wa);
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
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) Vv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = $r(ls.current)), $r(fn.current), ra(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[un] = t),
            (i = r.nodeValue !== n) && ((e = wt), e !== null))
          )
            switch (e.tag) {
              case 3:
                na(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  na(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[un] = t),
            (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (fe(pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && yt !== null && t.mode & 1 && !(t.flags & 128))
          av(), Qo(), (t.flags |= 98560), (i = !1);
        else if (((i = ra(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[un] = t;
          } else
            Qo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (i = !1);
        } else Wt !== null && (qc(Wt), (Wt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || pe.current & 1 ? Te === 0 && (Te = 3) : vf())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        Xo(), Bc(e, t), e === null && os(t.stateNode.containerInfo), je(t), null
      );
    case 10:
      return Zd(t.type._context), je(t), null;
    case 17:
      return lt(t.type) && Ha(), je(t), null;
    case 19:
      if ((fe(pe), (i = t.memoizedState), i === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) _i(i, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ja(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    _i(i, !1),
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
                return ue(pe, (pe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ee() > Zo &&
            ((t.flags |= 128), (r = !0), _i(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ja(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _i(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !he)
            )
              return je(t), null;
          } else
            2 * Ee() - i.renderingStartTime > Zo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _i(i, !1), (t.lanes = 4194304));
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
          (i.renderingStartTime = Ee()),
          (t.sibling = null),
          (n = pe.current),
          ue(pe, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        gf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? gt & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function sb(e, t) {
  switch ((Qd(t), t.tag)) {
    case 1:
      return (
        lt(t.type) && Ha(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Xo(),
        fe(at),
        fe(He),
        of(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return rf(t), null;
    case 13:
      if (
        (fe(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        Qo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return fe(pe), null;
    case 4:
      return Xo(), null;
    case 10:
      return Zd(t.type._context), null;
    case 22:
    case 23:
      return gf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var sa = !1,
  Ve = !1,
  ab = typeof WeakSet == "function" ? WeakSet : Set,
  U = null;
function xo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ye(e, t, r);
      }
    else n.current = null;
}
function Vc(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var ap = !1;
function lb(e, t) {
  if (((Tc = ja), (e = Yg()), Gd(e))) {
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
            d = 0,
            f = e,
            c = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (c = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (c === n && ++u === o && (a = s),
                c === i && ++d === r && (l = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = c), (c = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (kc = { focusedElem: e, selectionRange: n }, ja = !1, U = t; U !== null; )
    if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (U = e);
    else
      for (; U !== null; ) {
        t = U;
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
                  var v = w.memoizedProps,
                    E = w.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : $t(t.type, v),
                      E,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (b) {
          ye(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (U = e);
          break;
        }
        U = t.return;
      }
  return (w = ap), (ap = !1), w;
}
function Vi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Vc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ml(e, t) {
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
function Wc(e) {
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
function Wv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Wv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[un], delete t[ss], delete t[Rc], delete t[WE], delete t[HE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hv(e.return)) return null;
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
function Hc(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Wa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hc(e, t, n), e = e.sibling; e !== null; ) Hc(e, t, n), (e = e.sibling);
}
function Kc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Kc(e, t, n), e = e.sibling; e !== null; ) Kc(e, t, n), (e = e.sibling);
}
var Me = null,
  Vt = !1;
function jn(e, t, n) {
  for (n = n.child; n !== null; ) Kv(e, t, n), (n = n.sibling);
}
function Kv(e, t, n) {
  if (dn && typeof dn.onCommitFiberUnmount == "function")
    try {
      dn.onCommitFiberUnmount(kl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ve || xo(n, t);
    case 6:
      var r = Me,
        o = Vt;
      (Me = null),
        jn(e, t, n),
        (Me = r),
        (Vt = o),
        Me !== null &&
          (Vt
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Me.removeChild(n.stateNode));
      break;
    case 18:
      Me !== null &&
        (Vt
          ? ((e = Me),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ru(e.parentNode, n)
              : e.nodeType === 1 && Ru(e, n),
            ts(e))
          : Ru(Me, n.stateNode));
      break;
    case 4:
      (r = Me),
        (o = Vt),
        (Me = n.stateNode.containerInfo),
        (Vt = !0),
        jn(e, t, n),
        (Me = r),
        (Vt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Vc(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      jn(e, t, n);
      break;
    case 1:
      if (
        !Ve &&
        (xo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ye(n, t, a);
        }
      jn(e, t, n);
      break;
    case 21:
      jn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ve = (r = Ve) || n.memoizedState !== null), jn(e, t, n), (Ve = r))
        : jn(e, t, n);
      break;
    default:
      jn(e, t, n);
  }
}
function up(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ab()),
      t.forEach(function (r) {
        var o = vb.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function zt(e, t) {
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
              (Me = a.stateNode), (Vt = !1);
              break e;
            case 3:
              (Me = a.stateNode.containerInfo), (Vt = !0);
              break e;
            case 4:
              (Me = a.stateNode.containerInfo), (Vt = !0);
              break e;
          }
          a = a.return;
        }
        if (Me === null) throw Error(R(160));
        Kv(i, s, o), (Me = null), (Vt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        ye(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Gv(t, e), (t = t.sibling);
}
function Gv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((zt(t, e), rn(e), r & 4)) {
        try {
          Vi(3, e, e.return), Ml(3, e);
        } catch (v) {
          ye(e, e.return, v);
        }
        try {
          Vi(5, e, e.return);
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      break;
    case 1:
      zt(t, e), rn(e), r & 512 && n !== null && xo(n, n.return);
      break;
    case 5:
      if (
        (zt(t, e),
        rn(e),
        r & 512 && n !== null && xo(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Xi(o, "");
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && mg(o, i),
              gc(a, s);
            var u = gc(a, i);
            for (s = 0; s < l.length; s += 2) {
              var d = l[s],
                f = l[s + 1];
              d === "style"
                ? Eg(o, f)
                : d === "dangerouslySetInnerHTML"
                  ? yg(o, f)
                  : d === "children"
                    ? Xi(o, f)
                    : Nd(o, d, f, u);
            }
            switch (a) {
              case "input":
                dc(o, i);
                break;
              case "textarea":
                gg(o, i);
                break;
              case "select":
                var c = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? _o(o, !!i.multiple, g, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? _o(o, !!i.multiple, i.defaultValue, !0)
                      : _o(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ss] = i;
          } catch (v) {
            ye(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((zt(t, e), rn(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (zt(t, e), rn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ts(t.containerInfo);
        } catch (v) {
          ye(e, e.return, v);
        }
      break;
    case 4:
      zt(t, e), rn(e);
      break;
    case 13:
      zt(t, e),
        rn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (pf = Ee())),
        r & 4 && up(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ve = (u = Ve) || d), zt(t, e), (Ve = u)) : zt(t, e),
        rn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (U = e, d = e.child; d !== null; ) {
            for (f = U = d; U !== null; ) {
              switch (((c = U), (g = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vi(4, c, c.return);
                  break;
                case 1:
                  xo(c, c.return);
                  var w = c.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (v) {
                      ye(r, n, v);
                    }
                  }
                  break;
                case 5:
                  xo(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    dp(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = c), (U = g)) : dp(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
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
                      (a.style.display = wg("display", s)));
              } catch (v) {
                ye(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                ye(e, e.return, v);
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
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      zt(t, e), rn(e), r & 4 && up(e);
      break;
    case 21:
      break;
    default:
      zt(t, e), rn(e);
  }
}
function rn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Xi(o, ""), (r.flags &= -33));
          var i = lp(e);
          Kc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = lp(e);
          Hc(e, a, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ub(e, t, n) {
  (U = e), Yv(e);
}
function Yv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var o = U,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || sa;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Ve;
        a = sa;
        var u = Ve;
        if (((sa = s), (Ve = l) && !u))
          for (U = o; U !== null; )
            (s = U),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? fp(o)
                : l !== null
                  ? ((l.return = s), (U = l))
                  : fp(o);
        for (; i !== null; ) (U = i), Yv(i), (i = i.sibling);
        (U = o), (sa = a), (Ve = u);
      }
      cp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (U = i)) : cp(e);
  }
}
function cp(e) {
  for (; U !== null; ) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ve || Ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ve)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $t(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Yh(t, i, r);
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
                Yh(t, s, n);
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
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && ts(f);
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
              throw Error(R(163));
          }
        Ve || (t.flags & 512 && Wc(t));
      } catch (c) {
        ye(t, t.return, c);
      }
    }
    if (t === e) {
      U = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function dp(e) {
  for (; U !== null; ) {
    var t = U;
    if (t === e) {
      U = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function fp(e) {
  for (; U !== null; ) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ml(4, t);
          } catch (l) {
            ye(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ye(t, o, l);
            }
          }
          var i = t.return;
          try {
            Wc(t);
          } catch (l) {
            ye(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Wc(t);
          } catch (l) {
            ye(t, s, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      U = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (U = a);
      break;
    }
    U = t.return;
  }
}
var cb = Math.ceil,
  tl = Ln.ReactCurrentDispatcher,
  ff = Ln.ReactCurrentOwner,
  Ot = Ln.ReactCurrentBatchConfig,
  Z = 0,
  Ae = null,
  be = null,
  Le = 0,
  gt = 0,
  Co = kr(0),
  Te = 0,
  fs = null,
  Jr = 0,
  Ll = 0,
  hf = 0,
  Wi = null,
  it = null,
  pf = 0,
  Zo = 1 / 0,
  Sn = null,
  nl = !1,
  Gc = null,
  pr = null,
  aa = !1,
  ar = null,
  rl = 0,
  Hi = 0,
  Yc = null,
  Ta = -1,
  ka = 0;
function tt() {
  return Z & 6 ? Ee() : Ta !== -1 ? Ta : (Ta = Ee());
}
function mr(e) {
  return e.mode & 1
    ? Z & 2 && Le !== 0
      ? Le & -Le
      : GE.transition !== null
        ? (ka === 0 && (ka = Og()), ka)
        : ((e = re),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zg(e.type))),
          e)
    : 1;
}
function Kt(e, t, n, r) {
  if (50 < Hi) throw ((Hi = 0), (Yc = null), Error(R(185)));
  ks(e, n, r),
    (!(Z & 2) || e !== Ae) &&
      (e === Ae && (!(Z & 2) && (Ll |= n), Te === 4 && qn(e, Le)),
      ut(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Zo = Ee() + 500), Ol && Ir()));
}
function ut(e, t) {
  var n = e.callbackNode;
  G1(e, t);
  var r = $a(e, e === Ae ? Le : 0);
  if (r === 0)
    n !== null && bh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bh(n), t === 1))
      e.tag === 0 ? KE(hp.bind(null, e)) : ov(hp.bind(null, e)),
        BE(function () {
          !(Z & 6) && Ir();
        }),
        (n = null);
    else {
      switch (Dg(r)) {
        case 1:
          n = zd;
          break;
        case 4:
          n = Rg;
          break;
        case 16:
          n = za;
          break;
        case 536870912:
          n = Ag;
          break;
        default:
          n = za;
      }
      n = ny(n, Qv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Qv(e, t) {
  if (((Ta = -1), (ka = 0), Z & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Ro() && e.callbackNode !== n) return null;
  var r = $a(e, e === Ae ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ol(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var i = Xv();
    (Ae !== e || Le !== t) && ((Sn = null), (Zo = Ee() + 500), Kr(e, t));
    do
      try {
        hb();
        break;
      } catch (a) {
        qv(e, a);
      }
    while (!0);
    Jd(),
      (tl.current = i),
      (Z = o),
      be !== null ? (t = 0) : ((Ae = null), (Le = 0), (t = Te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = bc(e)), o !== 0 && ((r = o), (t = Qc(e, o)))), t === 1)
    )
      throw ((n = fs), Kr(e, 0), qn(e, r), ut(e, Ee()), n);
    if (t === 6) qn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !db(o) &&
          ((t = ol(e, r)),
          t === 2 && ((i = bc(e)), i !== 0 && ((r = i), (t = Qc(e, i)))),
          t === 1))
      )
        throw ((n = fs), Kr(e, 0), qn(e, r), ut(e, Ee()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Lr(e, it, Sn);
          break;
        case 3:
          if (
            (qn(e, r), (r & 130023424) === r && ((t = pf + 500 - Ee()), 10 < t))
          ) {
            if ($a(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              tt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Pc(Lr.bind(null, e, it, Sn), t);
            break;
          }
          Lr(e, it, Sn);
          break;
        case 4:
          if ((qn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Ht(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ee() - r),
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
                          : 1960 * cb(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Pc(Lr.bind(null, e, it, Sn), r);
            break;
          }
          Lr(e, it, Sn);
          break;
        case 5:
          Lr(e, it, Sn);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return ut(e, Ee()), e.callbackNode === n ? Qv.bind(null, e) : null;
}
function Qc(e, t) {
  var n = Wi;
  return (
    e.current.memoizedState.isDehydrated && (Kr(e, t).flags |= 256),
    (e = ol(e, t)),
    e !== 2 && ((t = it), (it = n), t !== null && qc(t)),
    e
  );
}
function qc(e) {
  it === null ? (it = e) : it.push.apply(it, e);
}
function db(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Gt(i(), o)) return !1;
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
function qn(e, t) {
  for (
    t &= ~hf,
      t &= ~Ll,
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
function hp(e) {
  if (Z & 6) throw Error(R(327));
  Ro();
  var t = $a(e, 0);
  if (!(t & 1)) return ut(e, Ee()), null;
  var n = ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bc(e);
    r !== 0 && ((t = r), (n = Qc(e, r)));
  }
  if (n === 1) throw ((n = fs), Kr(e, 0), qn(e, t), ut(e, Ee()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Lr(e, it, Sn),
    ut(e, Ee()),
    null
  );
}
function mf(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Zo = Ee() + 500), Ol && Ir());
  }
}
function Zr(e) {
  ar !== null && ar.tag === 0 && !(Z & 6) && Ro();
  var t = Z;
  Z |= 1;
  var n = Ot.transition,
    r = re;
  try {
    if (((Ot.transition = null), (re = 1), e)) return e();
  } finally {
    (re = r), (Ot.transition = n), (Z = t), !(Z & 6) && Ir();
  }
}
function gf() {
  (gt = Co.current), fe(Co);
}
function Kr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), jE(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((Qd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ha();
          break;
        case 3:
          Xo(), fe(at), fe(He), of();
          break;
        case 5:
          rf(r);
          break;
        case 4:
          Xo();
          break;
        case 13:
          fe(pe);
          break;
        case 19:
          fe(pe);
          break;
        case 10:
          Zd(r.type._context);
          break;
        case 22:
        case 23:
          gf();
      }
      n = n.return;
    }
  if (
    ((Ae = e),
    (be = e = gr(e.current, null)),
    (Le = gt = t),
    (Te = 0),
    (fs = null),
    (hf = Ll = Jr = 0),
    (it = Wi = null),
    zr !== null)
  ) {
    for (t = 0; t < zr.length; t++)
      if (((n = zr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    zr = null;
  }
  return e;
}
function qv(e, t) {
  do {
    var n = be;
    try {
      if ((Jd(), (xa.current = el), Za)) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Za = !1;
      }
      if (
        ((Xr = 0),
        (Pe = Ce = me = null),
        (Bi = !1),
        (us = 0),
        (ff.current = null),
        n === null || n.return === null)
      ) {
        (Te = 1), (fs = t), (be = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Le),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var c = d.alternate;
            c
              ? ((d.updateQueue = c.updateQueue),
                (d.memoizedState = c.memoizedState),
                (d.lanes = c.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = ep(s);
          if (g !== null) {
            (g.flags &= -257),
              tp(g, s, a, i, t),
              g.mode & 1 && Zh(i, u, t),
              (t = g),
              (l = u);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Zh(i, u, t), vf();
              break e;
            }
            l = Error(R(426));
          }
        } else if (he && a.mode & 1) {
          var E = ep(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              tp(E, s, a, i, t),
              qd(Jo(l, a));
            break e;
          }
        }
        (i = l = Jo(l, a)),
          Te !== 4 && (Te = 2),
          Wi === null ? (Wi = [i]) : Wi.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Dv(i, l, t);
              Gh(i, m);
              break e;
            case 1:
              a = l;
              var h = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (pr === null || !pr.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var b = Nv(i, a, t);
                Gh(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Zv(n);
    } catch (S) {
      (t = S), be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xv() {
  var e = tl.current;
  return (tl.current = el), e === null ? el : e;
}
function vf() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    Ae === null || (!(Jr & 268435455) && !(Ll & 268435455)) || qn(Ae, Le);
}
function ol(e, t) {
  var n = Z;
  Z |= 2;
  var r = Xv();
  (Ae !== e || Le !== t) && ((Sn = null), Kr(e, t));
  do
    try {
      fb();
      break;
    } catch (o) {
      qv(e, o);
    }
  while (!0);
  if ((Jd(), (Z = n), (tl.current = r), be !== null)) throw Error(R(261));
  return (Ae = null), (Le = 0), Te;
}
function fb() {
  for (; be !== null; ) Jv(be);
}
function hb() {
  for (; be !== null && !U1(); ) Jv(be);
}
function Jv(e) {
  var t = ty(e.alternate, e, gt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Zv(e) : (be = t),
    (ff.current = null);
}
function Zv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = sb(n, t)), n !== null)) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Te = 6), (be = null);
        return;
      }
    } else if (((n = ib(n, t, gt)), n !== null)) {
      be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function Lr(e, t, n) {
  var r = re,
    o = Ot.transition;
  try {
    (Ot.transition = null), (re = 1), pb(e, t, n, r);
  } finally {
    (Ot.transition = o), (re = r);
  }
  return null;
}
function pb(e, t, n, r) {
  do Ro();
  while (ar !== null);
  if (Z & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Y1(e, i),
    e === Ae && ((be = Ae = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      aa ||
      ((aa = !0),
      ny(za, function () {
        return Ro(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ot.transition), (Ot.transition = null);
    var s = re;
    re = 1;
    var a = Z;
    (Z |= 4),
      (ff.current = null),
      lb(e, n),
      Gv(n, e),
      NE(kc),
      (ja = !!Tc),
      (kc = Tc = null),
      (e.current = n),
      ub(n),
      z1(),
      (Z = a),
      (re = s),
      (Ot.transition = i);
  } else e.current = n;
  if (
    (aa && ((aa = !1), (ar = e), (rl = o)),
    (i = e.pendingLanes),
    i === 0 && (pr = null),
    B1(n.stateNode),
    ut(e, Ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (nl) throw ((nl = !1), (e = Gc), (Gc = null), e);
  return (
    rl & 1 && e.tag !== 0 && Ro(),
    (i = e.pendingLanes),
    i & 1 ? (e === Yc ? Hi++ : ((Hi = 0), (Yc = e))) : (Hi = 0),
    Ir(),
    null
  );
}
function Ro() {
  if (ar !== null) {
    var e = Dg(rl),
      t = Ot.transition,
      n = re;
    try {
      if (((Ot.transition = null), (re = 16 > e ? 16 : e), ar === null))
        var r = !1;
      else {
        if (((e = ar), (ar = null), (rl = 0), Z & 6)) throw Error(R(331));
        var o = Z;
        for (Z |= 4, U = e.current; U !== null; ) {
          var i = U,
            s = i.child;
          if (U.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (U = u; U !== null; ) {
                  var d = U;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vi(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (U = f);
                  else
                    for (; U !== null; ) {
                      d = U;
                      var c = d.sibling,
                        g = d.return;
                      if ((Wv(d), d === u)) {
                        U = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = g), (U = c);
                        break;
                      }
                      U = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var E = v.sibling;
                    (v.sibling = null), (v = E);
                  } while (v !== null);
                }
              }
              U = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (U = s);
          else
            e: for (; U !== null; ) {
              if (((i = U), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vi(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (U = m);
                break e;
              }
              U = i.return;
            }
        }
        var h = e.current;
        for (U = h; U !== null; ) {
          s = U;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (U = y);
          else
            e: for (s = h; U !== null; ) {
              if (((a = U), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ml(9, a);
                  }
                } catch (S) {
                  ye(a, a.return, S);
                }
              if (a === s) {
                U = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (U = b);
                break e;
              }
              U = a.return;
            }
        }
        if (
          ((Z = o), Ir(), dn && typeof dn.onPostCommitFiberRoot == "function")
        )
          try {
            dn.onPostCommitFiberRoot(kl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (re = n), (Ot.transition = t);
    }
  }
  return !1;
}
function pp(e, t, n) {
  (t = Jo(n, t)),
    (t = Dv(e, t, 1)),
    (e = hr(e, t, 1)),
    (t = tt()),
    e !== null && (ks(e, 1, t), ut(e, t));
}
function ye(e, t, n) {
  if (e.tag === 3) pp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (pr === null || !pr.has(r)))
        ) {
          (e = Jo(n, e)),
            (e = Nv(t, e, 1)),
            (t = hr(t, e, 1)),
            (e = tt()),
            t !== null && (ks(t, 1, e), ut(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function mb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = tt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ae === e &&
      (Le & n) === n &&
      (Te === 4 || (Te === 3 && (Le & 130023424) === Le && 500 > Ee() - pf)
        ? Kr(e, 0)
        : (hf |= n)),
    ut(e, t);
}
function ey(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Xs), (Xs <<= 1), !(Xs & 130023424) && (Xs = 4194304))
      : (t = 1));
  var n = tt();
  (e = An(e, t)), e !== null && (ks(e, t, n), ut(e, n));
}
function gb(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ey(e, n);
}
function vb(e, t) {
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
      throw Error(R(314));
  }
  r !== null && r.delete(t), ey(e, n);
}
var ty;
ty = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || at.current) st = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (st = !1), ob(e, t, n);
      st = !!(e.flags & 131072);
    }
  else (st = !1), he && t.flags & 1048576 && iv(t, Ya, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _a(e, t), (e = t.pendingProps);
      var o = Yo(t, He.current);
      Po(t, n), (o = af(null, t, r, e, o, n));
      var i = lf();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            lt(r) ? ((i = !0), Ka(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            tf(t),
            (o.updater = Nl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Lc(t, r, e, n),
            (t = zc(null, t, r, !0, i, n)))
          : ((t.tag = 0), he && i && Yd(t), Ze(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_a(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = wb(r)),
          (e = $t(r, e)),
          o)
        ) {
          case 0:
            t = Uc(null, t, r, e, n);
            break e;
          case 1:
            t = op(null, t, r, e, n);
            break e;
          case 11:
            t = np(null, t, r, e, n);
            break e;
          case 14:
            t = rp(null, t, r, $t(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $t(r, o)),
        Uc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $t(r, o)),
        op(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Uv(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          dv(e, t),
          Xa(t, r, null, n);
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
            (o = Jo(Error(R(423)), t)), (t = ip(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Jo(Error(R(424)), t)), (t = ip(e, t, r, n, o));
            break e;
          } else
            for (
              yt = fr(t.stateNode.containerInfo.firstChild),
                wt = t,
                he = !0,
                Wt = null,
                n = uv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qo(), r === o)) {
            t = On(e, t, n);
            break e;
          }
          Ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        fv(t),
        e === null && Dc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Ic(r, o) ? (s = null) : i !== null && Ic(r, i) && (t.flags |= 32),
        Fv(e, t),
        Ze(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Dc(t), null;
    case 13:
      return zv(e, t, n);
    case 4:
      return (
        nf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = qo(t, null, r, n)) : Ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $t(r, o)),
        np(e, t, r, o, n)
      );
    case 7:
      return Ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ue(Qa, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Gt(i.value, s)) {
            if (i.children === o.children && !at.current) {
              t = On(e, t, n);
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
                      (l = In(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Nc(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Nc(s, n, t),
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
        Ze(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Po(t, n),
        (o = Dt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = $t(r, t.pendingProps)),
        (o = $t(r.type, o)),
        rp(e, t, r, o, n)
      );
    case 15:
      return Mv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $t(r, o)),
        _a(e, t),
        (t.tag = 1),
        lt(r) ? ((e = !0), Ka(t)) : (e = !1),
        Po(t, n),
        Ov(t, r, o),
        Lc(t, r, o, n),
        zc(null, t, r, !0, e, n)
      );
    case 19:
      return $v(e, t, n);
    case 22:
      return Lv(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function ny(e, t) {
  return Pg(e, t);
}
function yb(e, t, n, r) {
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
function At(e, t, n, r) {
  return new yb(e, t, n, r);
}
function yf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function wb(e) {
  if (typeof e == "function") return yf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ld)) return 11;
    if (e === Fd) return 14;
  }
  return 2;
}
function gr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = At(e.tag, t, e.key, e.mode)),
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
function Ia(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) yf(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case po:
        return Gr(n.children, o, i, t);
      case Md:
        (s = 8), (o |= 8);
        break;
      case sc:
        return (
          (e = At(12, n, t, o | 2)), (e.elementType = sc), (e.lanes = i), e
        );
      case ac:
        return (e = At(13, n, t, o)), (e.elementType = ac), (e.lanes = i), e;
      case lc:
        return (e = At(19, n, t, o)), (e.elementType = lc), (e.lanes = i), e;
      case fg:
        return Fl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case cg:
              s = 10;
              break e;
            case dg:
              s = 9;
              break e;
            case Ld:
              s = 11;
              break e;
            case Fd:
              s = 14;
              break e;
            case Kn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = At(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Gr(e, t, n, r) {
  return (e = At(7, e, r, t)), (e.lanes = n), e;
}
function Fl(e, t, n, r) {
  return (
    (e = At(22, e, r, t)),
    (e.elementType = fg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Uu(e, t, n) {
  return (e = At(6, e, null, t)), (e.lanes = n), e;
}
function zu(e, t, n) {
  return (
    (t = At(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Eb(e, t, n, r, o) {
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
    (this.eventTimes = wu(0)),
    (this.expirationTimes = wu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function wf(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new Eb(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = At(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    tf(i),
    e
  );
}
function bb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ho,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ry(e) {
  if (!e) return Er;
  e = e._reactInternals;
  e: {
    if (io(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (lt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (lt(n)) return rv(e, n, t);
  }
  return t;
}
function oy(e, t, n, r, o, i, s, a, l) {
  return (
    (e = wf(n, r, !0, e, o, i, s, a, l)),
    (e.context = ry(null)),
    (n = e.current),
    (r = tt()),
    (o = mr(n)),
    (i = In(r, o)),
    (i.callback = t ?? null),
    hr(n, i, o),
    (e.current.lanes = o),
    ks(e, o, r),
    ut(e, r),
    e
  );
}
function Ul(e, t, n, r) {
  var o = t.current,
    i = tt(),
    s = mr(o);
  return (
    (n = ry(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = In(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = hr(o, t, s)),
    e !== null && (Kt(e, o, s, i), Sa(e, o, s)),
    s
  );
}
function il(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ef(e, t) {
  mp(e, t), (e = e.alternate) && mp(e, t);
}
function Sb() {
  return null;
}
var iy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function bf(e) {
  this._internalRoot = e;
}
zl.prototype.render = bf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Ul(e, t, null, null);
};
zl.prototype.unmount = bf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zr(function () {
      Ul(null, e, null, null);
    }),
      (t[Rn] = null);
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qn.length && t !== 0 && t < Qn[n].priority; n++);
    Qn.splice(n, 0, e), n === 0 && Ug(e);
  }
};
function Sf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $l(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gp() {}
function xb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = il(s);
        i.call(u);
      };
    }
    var s = oy(t, r, e, 0, null, !1, !1, "", gp);
    return (
      (e._reactRootContainer = s),
      (e[Rn] = s.current),
      os(e.nodeType === 8 ? e.parentNode : e),
      Zr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = il(l);
      a.call(u);
    };
  }
  var l = wf(e, 0, !1, null, null, !1, !1, "", gp);
  return (
    (e._reactRootContainer = l),
    (e[Rn] = l.current),
    os(e.nodeType === 8 ? e.parentNode : e),
    Zr(function () {
      Ul(t, l, n, r);
    }),
    l
  );
}
function jl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = il(s);
        a.call(l);
      };
    }
    Ul(t, s, e, o);
  } else s = xb(n, t, e, o, r);
  return il(s);
}
Ng = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Di(t.pendingLanes);
        n !== 0 &&
          ($d(t, n | 1), ut(t, Ee()), !(Z & 6) && ((Zo = Ee() + 500), Ir()));
      }
      break;
    case 13:
      Zr(function () {
        var r = An(e, 1);
        if (r !== null) {
          var o = tt();
          Kt(r, e, 1, o);
        }
      }),
        Ef(e, 1);
  }
};
jd = function (e) {
  if (e.tag === 13) {
    var t = An(e, 134217728);
    if (t !== null) {
      var n = tt();
      Kt(t, e, 134217728, n);
    }
    Ef(e, 134217728);
  }
};
Mg = function (e) {
  if (e.tag === 13) {
    var t = mr(e),
      n = An(e, t);
    if (n !== null) {
      var r = tt();
      Kt(n, e, t, r);
    }
    Ef(e, t);
  }
};
Lg = function () {
  return re;
};
Fg = function (e, t) {
  var n = re;
  try {
    return (re = e), t();
  } finally {
    re = n;
  }
};
yc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((dc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Al(r);
            if (!o) throw Error(R(90));
            pg(r), dc(r, o);
          }
        }
      }
      break;
    case "textarea":
      gg(e, n);
      break;
    case "select":
      (t = n.value), t != null && _o(e, !!n.multiple, t, !1);
  }
};
xg = mf;
Cg = Zr;
var Cb = { usingClientEntryPoint: !1, Events: [Ps, yo, Al, bg, Sg, mf] },
  Ti = {
    findFiberByHostInstance: Ur,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  _b = {
    bundleType: Ti.bundleType,
    version: Ti.version,
    rendererPackageName: Ti.rendererPackageName,
    rendererConfig: Ti.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ln.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = kg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ti.findFiberByHostInstance || Sb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var la = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!la.isDisabled && la.supportsFiber)
    try {
      (kl = la.inject(_b)), (dn = la);
    } catch {}
}
St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cb;
St.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Sf(t)) throw Error(R(200));
  return bb(e, t, null, n);
};
St.createRoot = function (e, t) {
  if (!Sf(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = iy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = wf(e, 1, !1, null, null, n, !1, r, o)),
    (e[Rn] = t.current),
    os(e.nodeType === 8 ? e.parentNode : e),
    new bf(t)
  );
};
St.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = kg(t)), (e = e === null ? null : e.stateNode), e;
};
St.flushSync = function (e) {
  return Zr(e);
};
St.hydrate = function (e, t, n) {
  if (!$l(t)) throw Error(R(200));
  return jl(null, e, t, !0, n);
};
St.hydrateRoot = function (e, t, n) {
  if (!Sf(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = iy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = oy(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Rn] = t.current),
    os(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new zl(t);
};
St.render = function (e, t, n) {
  if (!$l(t)) throw Error(R(200));
  return jl(null, e, t, !1, n);
};
St.unmountComponentAtNode = function (e) {
  if (!$l(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Zr(function () {
        jl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rn] = null);
        });
      }),
      !0)
    : !1;
};
St.unstable_batchedUpdates = mf;
St.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$l(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return jl(e, t, n, !1, r);
};
St.version = "18.3.1-next-f1338f8080-20240426";
function sy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sy);
    } catch (e) {
      console.error(e);
    }
}
sy(), (sg.exports = St);
var cn = sg.exports;
const ay = Gm(cn);
var Tb,
  vp = cn;
(Tb = vp.createRoot), vp.hydrateRoot;
function ie(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function kb(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ly(...e) {
  return (t) => e.forEach((n) => kb(n, t));
}
function Mt(...e) {
  return p.useCallback(ly(...e), e);
}
function Ib(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = p.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: c, children: g, ...w } = f,
        v = (c == null ? void 0 : c[e][l]) || a,
        E = p.useMemo(() => w, Object.values(w));
      return N.jsx(v.Provider, { value: E, children: g });
    }
    function d(f, c) {
      const g = (c == null ? void 0 : c[e][l]) || a,
        w = p.useContext(g);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, d];
  }
  const o = () => {
    const i = n.map((s) => p.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return p.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, Pb(o, ...t)];
}
function Pb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var sl = p.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = p.Children.toArray(n),
    i = o.find(Rb);
  if (i) {
    const s = i.props.children,
      a = o.map((l) =>
        l === i
          ? p.Children.count(s) > 1
            ? p.Children.only(null)
            : p.isValidElement(s)
              ? s.props.children
              : null
          : l,
      );
    return N.jsx(Xc, {
      ...r,
      ref: t,
      children: p.isValidElement(s) ? p.cloneElement(s, void 0, a) : null,
    });
  }
  return N.jsx(Xc, { ...r, ref: t, children: n });
});
sl.displayName = "Slot";
var Xc = p.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (p.isValidElement(n)) {
    const o = Ob(n);
    return p.cloneElement(n, { ...Ab(r, n.props), ref: t ? ly(t, o) : o });
  }
  return p.Children.count(n) > 1 ? p.Children.only(null) : null;
});
Xc.displayName = "SlotClone";
var uy = ({ children: e }) => N.jsx(N.Fragment, { children: e });
function Rb(e) {
  return p.isValidElement(e) && e.type === uy;
}
function Ab(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            i(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ob(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function cy(e) {
  const t = e + "CollectionProvider",
    [n, r] = Ib(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: w, children: v } = g,
        E = I.useRef(null),
        m = I.useRef(new Map()).current;
      return N.jsx(o, { scope: w, itemMap: m, collectionRef: E, children: v });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = I.forwardRef((g, w) => {
      const { scope: v, children: E } = g,
        m = i(a, v),
        h = Mt(w, m.collectionRef);
      return N.jsx(sl, { ref: h, children: E });
    });
  l.displayName = a;
  const u = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = I.forwardRef((g, w) => {
      const { scope: v, children: E, ...m } = g,
        h = I.useRef(null),
        y = Mt(w, h),
        b = i(u, v);
      return (
        I.useEffect(
          () => (
            b.itemMap.set(h, { ref: h, ...m }), () => void b.itemMap.delete(h)
          ),
        ),
        N.jsx(sl, { [d]: "", ref: y, children: E })
      );
    });
  f.displayName = u;
  function c(g) {
    const w = i(e + "CollectionConsumer", g);
    return I.useCallback(() => {
      const E = w.collectionRef.current;
      if (!E) return [];
      const m = Array.from(E.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (b, S) => m.indexOf(b.ref.current) - m.indexOf(S.ref.current),
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: l, ItemSlot: f }, c, r];
}
function xf(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = p.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (f) => {
      var m;
      const { scope: c, children: g, ...w } = f,
        v = ((m = c == null ? void 0 : c[e]) == null ? void 0 : m[l]) || a,
        E = p.useMemo(() => w, Object.values(w));
      return N.jsx(v.Provider, { value: E, children: g });
    };
    u.displayName = i + "Provider";
    function d(f, c) {
      var v;
      const g = ((v = c == null ? void 0 : c[e]) == null ? void 0 : v[l]) || a,
        w = p.useContext(g);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const o = () => {
    const i = n.map((s) => p.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return p.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, Db(o, ...t)];
}
function Db(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var Nb = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Se = Nb.reduce((e, t) => {
    const n = p.forwardRef((r, o) => {
      const { asChild: i, ...s } = r,
        a = i ? sl : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        N.jsx(a, { ...s, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function dy(e, t) {
  e && cn.flushSync(() => e.dispatchEvent(t));
}
function Yt(e) {
  const t = p.useRef(e);
  return (
    p.useEffect(() => {
      t.current = e;
    }),
    p.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function Mb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Yt(e);
  p.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Lb = "DismissableLayer",
  Jc = "dismissableLayer.update",
  Fb = "dismissableLayer.pointerDownOutside",
  Ub = "dismissableLayer.focusOutside",
  yp,
  fy = p.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Cf = p.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = p.useContext(fy),
      [d, f] = p.useState(null),
      c =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, g] = p.useState({}),
      w = Mt(t, (_) => f(_)),
      v = Array.from(u.layers),
      [E] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = v.indexOf(E),
      h = d ? v.indexOf(d) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      b = h >= m,
      S = $b((_) => {
        const x = _.target,
          O = [...u.branches].some((P) => P.contains(x));
        !b ||
          O ||
          (o == null || o(_),
          s == null || s(_),
          _.defaultPrevented || a == null || a());
      }, c),
      C = jb((_) => {
        const x = _.target;
        [...u.branches].some((P) => P.contains(x)) ||
          (i == null || i(_),
          s == null || s(_),
          _.defaultPrevented || a == null || a());
      }, c);
    return (
      Mb((_) => {
        h === u.layers.size - 1 &&
          (r == null || r(_),
          !_.defaultPrevented && a && (_.preventDefault(), a()));
      }, c),
      p.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((yp = c.body.style.pointerEvents),
                (c.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            wp(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (c.body.style.pointerEvents = yp);
            }
          );
      }, [d, c, n, u]),
      p.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            wp());
        },
        [d, u],
      ),
      p.useEffect(() => {
        const _ = () => g({});
        return (
          document.addEventListener(Jc, _),
          () => document.removeEventListener(Jc, _)
        );
      }, []),
      N.jsx(Se.div, {
        ...l,
        ref: w,
        style: {
          pointerEvents: y ? (b ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ie(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: ie(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: ie(
          e.onPointerDownCapture,
          S.onPointerDownCapture,
        ),
      })
    );
  });
Cf.displayName = Lb;
var zb = "DismissableLayerBranch",
  hy = p.forwardRef((e, t) => {
    const n = p.useContext(fy),
      r = p.useRef(null),
      o = Mt(t, r);
    return (
      p.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      N.jsx(Se.div, { ...e, ref: o })
    );
  });
hy.displayName = zb;
function $b(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Yt(e),
    r = p.useRef(!1),
    o = p.useRef(() => {});
  return (
    p.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              py(Fb, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function jb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Yt(e),
    r = p.useRef(!1);
  return (
    p.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          py(Ub, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function wp() {
  const e = new CustomEvent(Jc);
  document.dispatchEvent(e);
}
function py(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? dy(o, i) : o.dispatchEvent(i);
}
var Bb = Cf,
  Vb = hy,
  br = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {},
  Wb = "Portal",
  my = p.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, i] = p.useState(!1);
    br(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? ay.createPortal(N.jsx(Se.div, { ...r, ref: t }), s) : null;
  });
my.displayName = Wb;
function Hb(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
var Bl = (e) => {
  const { present: t, children: n } = e,
    r = Kb(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : p.Children.only(n),
    i = Mt(r.ref, Gb(o));
  return typeof n == "function" || r.isPresent
    ? p.cloneElement(o, { ref: i })
    : null;
};
Bl.displayName = "Presence";
function Kb(e) {
  const [t, n] = p.useState(),
    r = p.useRef({}),
    o = p.useRef(e),
    i = p.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = Hb(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    p.useEffect(() => {
      const u = ua(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    br(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const c = i.current,
          g = ua(u);
        e
          ? l("MOUNT")
          : g === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(d && c !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, l]),
    br(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          f = (g) => {
            const v = ua(r.current).includes(g.animationName);
            if (g.target === t && v && (l("ANIMATION_END"), !o.current)) {
              const E = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = E);
                }));
            }
          },
          c = (g) => {
            g.target === t && (i.current = ua(r.current));
          };
        return (
          t.addEventListener("animationstart", c),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            d.clearTimeout(u),
              t.removeEventListener("animationstart", c),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: p.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function ua(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Gb(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function _f({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Yb({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    a = Yt(n),
    l = p.useCallback(
      (u) => {
        if (i) {
          const f = typeof u == "function" ? u(e) : u;
          f !== e && a(f);
        } else o(u);
      },
      [i, e, o, a],
    );
  return [s, l];
}
function Yb({ defaultProp: e, onChange: t }) {
  const n = p.useState(e),
    [r] = n,
    o = p.useRef(r),
    i = Yt(t);
  return (
    p.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var Qb = "VisuallyHidden",
  Vl = p.forwardRef((e, t) =>
    N.jsx(Se.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
Vl.displayName = Qb;
var qb = Vl,
  Tf = "ToastProvider",
  [kf, Xb, Jb] = cy("Toast"),
  [gy, LO] = xf("Toast", [Jb]),
  [Zb, Wl] = gy(Tf),
  vy = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [a, l] = p.useState(null),
      [u, d] = p.useState(0),
      f = p.useRef(!1),
      c = p.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Tf}\`. Expected non-empty \`string\`.`,
        ),
      N.jsx(kf.Provider, {
        scope: t,
        children: N.jsx(Zb, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: p.useCallback(() => d((g) => g + 1), []),
          onToastRemove: p.useCallback(() => d((g) => g - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: c,
          children: s,
        }),
      })
    );
  };
vy.displayName = Tf;
var yy = "ToastViewport",
  eS = ["F8"],
  Zc = "toast.viewportPause",
  ed = "toast.viewportResume",
  wy = p.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = eS,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = Wl(yy, n),
      a = Xb(n),
      l = p.useRef(null),
      u = p.useRef(null),
      d = p.useRef(null),
      f = p.useRef(null),
      c = Mt(t, f, s.onViewportChange),
      g = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = s.toastCount > 0;
    p.useEffect(() => {
      const E = (m) => {
        var y;
        r.length !== 0 &&
          r.every((b) => m[b] || m.code === b) &&
          ((y = f.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", E),
        () => document.removeEventListener("keydown", E)
      );
    }, [r]),
      p.useEffect(() => {
        const E = l.current,
          m = f.current;
        if (w && E && m) {
          const h = () => {
              if (!s.isClosePausedRef.current) {
                const C = new CustomEvent(Zc);
                m.dispatchEvent(C), (s.isClosePausedRef.current = !0);
              }
            },
            y = () => {
              if (s.isClosePausedRef.current) {
                const C = new CustomEvent(ed);
                m.dispatchEvent(C), (s.isClosePausedRef.current = !1);
              }
            },
            b = (C) => {
              !E.contains(C.relatedTarget) && y();
            },
            S = () => {
              E.contains(document.activeElement) || y();
            };
          return (
            E.addEventListener("focusin", h),
            E.addEventListener("focusout", b),
            E.addEventListener("pointermove", h),
            E.addEventListener("pointerleave", S),
            window.addEventListener("blur", h),
            window.addEventListener("focus", y),
            () => {
              E.removeEventListener("focusin", h),
                E.removeEventListener("focusout", b),
                E.removeEventListener("pointermove", h),
                E.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", y);
            }
          );
        }
      }, [w, s.isClosePausedRef]);
    const v = p.useCallback(
      ({ tabbingDirection: E }) => {
        const h = a().map((y) => {
          const b = y.ref.current,
            S = [b, ...hS(b)];
          return E === "forwards" ? S : S.reverse();
        });
        return (E === "forwards" ? h.reverse() : h).flat();
      },
      [a],
    );
    return (
      p.useEffect(() => {
        const E = f.current;
        if (E) {
          const m = (h) => {
            var S, C, _;
            const y = h.altKey || h.ctrlKey || h.metaKey;
            if (h.key === "Tab" && !y) {
              const x = document.activeElement,
                O = h.shiftKey;
              if (h.target === E && O) {
                (S = u.current) == null || S.focus();
                return;
              }
              const L = v({ tabbingDirection: O ? "backwards" : "forwards" }),
                B = L.findIndex((D) => D === x);
              $u(L.slice(B + 1))
                ? h.preventDefault()
                : O
                  ? (C = u.current) == null || C.focus()
                  : (_ = d.current) == null || _.focus();
            }
          };
          return (
            E.addEventListener("keydown", m),
            () => E.removeEventListener("keydown", m)
          );
        }
      }, [a, v]),
      N.jsxs(Vb, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            N.jsx(td, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const E = v({ tabbingDirection: "forwards" });
                $u(E);
              },
            }),
          N.jsx(kf.Slot, {
            scope: n,
            children: N.jsx(Se.ol, { tabIndex: -1, ...i, ref: c }),
          }),
          w &&
            N.jsx(td, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const E = v({ tabbingDirection: "backwards" });
                $u(E);
              },
            }),
        ],
      })
    );
  });
wy.displayName = yy;
var Ey = "ToastFocusProxy",
  td = p.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = Wl(Ey, n);
    return N.jsx(Vl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const a = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(a)) && r();
      },
    });
  });
td.displayName = Ey;
var Hl = "Toast",
  tS = "toast.swipeStart",
  nS = "toast.swipeMove",
  rS = "toast.swipeCancel",
  oS = "toast.swipeEnd",
  by = p.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [a = !0, l] = _f({ prop: r, defaultProp: o, onChange: i });
    return N.jsx(Bl, {
      present: n || a,
      children: N.jsx(aS, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: Yt(e.onPause),
        onResume: Yt(e.onResume),
        onSwipeStart: ie(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ie(e.onSwipeMove, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`,
            );
        }),
        onSwipeCancel: ie(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ie(e.onSwipeEnd, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`,
            ),
            l(!1);
        }),
      }),
    });
  });
by.displayName = Hl;
var [iS, sS] = gy(Hl, { onClose() {} }),
  aS = p.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: c,
        onSwipeEnd: g,
        ...w
      } = e,
      v = Wl(Hl, n),
      [E, m] = p.useState(null),
      h = Mt(t, (D) => m(D)),
      y = p.useRef(null),
      b = p.useRef(null),
      S = o || v.duration,
      C = p.useRef(0),
      _ = p.useRef(S),
      x = p.useRef(0),
      { onToastAdd: O, onToastRemove: P } = v,
      M = Yt(() => {
        var H;
        (E == null ? void 0 : E.contains(document.activeElement)) &&
          ((H = v.viewport) == null || H.focus()),
          s();
      }),
      L = p.useCallback(
        (D) => {
          !D ||
            D === 1 / 0 ||
            (window.clearTimeout(x.current),
            (C.current = new Date().getTime()),
            (x.current = window.setTimeout(M, D)));
        },
        [M],
      );
    p.useEffect(() => {
      const D = v.viewport;
      if (D) {
        const H = () => {
            L(_.current), u == null || u();
          },
          j = () => {
            const V = new Date().getTime() - C.current;
            (_.current = _.current - V),
              window.clearTimeout(x.current),
              l == null || l();
          };
        return (
          D.addEventListener(Zc, j),
          D.addEventListener(ed, H),
          () => {
            D.removeEventListener(Zc, j), D.removeEventListener(ed, H);
          }
        );
      }
    }, [v.viewport, S, l, u, L]),
      p.useEffect(() => {
        i && !v.isClosePausedRef.current && L(S);
      }, [i, S, v.isClosePausedRef, L]),
      p.useEffect(() => (O(), () => P()), [O, P]);
    const B = p.useMemo(() => (E ? Iy(E) : null), [E]);
    return v.viewport
      ? N.jsxs(N.Fragment, {
          children: [
            B &&
              N.jsx(lS, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: B,
              }),
            N.jsx(iS, {
              scope: n,
              onClose: M,
              children: cn.createPortal(
                N.jsx(kf.ItemSlot, {
                  scope: n,
                  children: N.jsx(Bb, {
                    asChild: !0,
                    onEscapeKeyDown: ie(a, () => {
                      v.isFocusedToastEscapeKeyDownRef.current || M(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: N.jsx(Se.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": v.swipeDirection,
                      ...w,
                      ref: h,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ie(e.onKeyDown, (D) => {
                        D.key === "Escape" &&
                          (a == null || a(D.nativeEvent),
                          D.nativeEvent.defaultPrevented ||
                            ((v.isFocusedToastEscapeKeyDownRef.current = !0),
                            M()));
                      }),
                      onPointerDown: ie(e.onPointerDown, (D) => {
                        D.button === 0 &&
                          (y.current = { x: D.clientX, y: D.clientY });
                      }),
                      onPointerMove: ie(e.onPointerMove, (D) => {
                        if (!y.current) return;
                        const H = D.clientX - y.current.x,
                          j = D.clientY - y.current.y,
                          V = !!b.current,
                          T = ["left", "right"].includes(v.swipeDirection),
                          A = ["left", "up"].includes(v.swipeDirection)
                            ? Math.min
                            : Math.max,
                          $ = T ? A(0, H) : 0,
                          F = T ? 0 : A(0, j),
                          z = D.pointerType === "touch" ? 10 : 2,
                          K = { x: $, y: F },
                          ee = { originalEvent: D, delta: K };
                        V
                          ? ((b.current = K), ca(nS, f, ee, { discrete: !1 }))
                          : Ep(K, v.swipeDirection, z)
                            ? ((b.current = K),
                              ca(tS, d, ee, { discrete: !1 }),
                              D.target.setPointerCapture(D.pointerId))
                            : (Math.abs(H) > z || Math.abs(j) > z) &&
                              (y.current = null);
                      }),
                      onPointerUp: ie(e.onPointerUp, (D) => {
                        const H = b.current,
                          j = D.target;
                        if (
                          (j.hasPointerCapture(D.pointerId) &&
                            j.releasePointerCapture(D.pointerId),
                          (b.current = null),
                          (y.current = null),
                          H)
                        ) {
                          const V = D.currentTarget,
                            T = { originalEvent: D, delta: H };
                          Ep(H, v.swipeDirection, v.swipeThreshold)
                            ? ca(oS, g, T, { discrete: !0 })
                            : ca(rS, c, T, { discrete: !0 }),
                            V.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 },
                            );
                        }
                      }),
                    }),
                  }),
                }),
                v.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  lS = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Wl(Hl, t),
      [i, s] = p.useState(!1),
      [a, l] = p.useState(!1);
    return (
      dS(() => s(!0)),
      p.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : N.jsx(my, {
            asChild: !0,
            children: N.jsx(Vl, {
              ...r,
              children:
                i && N.jsxs(N.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  uS = "ToastTitle",
  Sy = p.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return N.jsx(Se.div, { ...r, ref: t });
  });
Sy.displayName = uS;
var cS = "ToastDescription",
  xy = p.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return N.jsx(Se.div, { ...r, ref: t });
  });
xy.displayName = cS;
var Cy = "ToastAction",
  _y = p.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? N.jsx(ky, {
          altText: n,
          asChild: !0,
          children: N.jsx(If, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Cy}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
_y.displayName = Cy;
var Ty = "ToastClose",
  If = p.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = sS(Ty, n);
    return N.jsx(ky, {
      asChild: !0,
      children: N.jsx(Se.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ie(e.onClick, o.onClose),
      }),
    });
  });
If.displayName = Ty;
var ky = p.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return N.jsx(Se.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Iy(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        fS(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...Iy(r));
      }
    }),
    t
  );
}
function ca(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? dy(o, i) : o.dispatchEvent(i);
}
var Ep = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function dS(e = () => {}) {
  const t = Yt(e);
  br(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function fS(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function hS(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function $u(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var FO = vy,
  UO = wy,
  zO = by,
  $O = Sy,
  jO = xy,
  BO = _y,
  VO = If;
function Py(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Py(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function pS() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Py(e)) && (r && (r += " "), (r += t));
  return r;
}
const bp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Sp = pS,
  WO = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Sp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          f = i == null ? void 0 : i[u];
        if (d === null) return null;
        const c = bp(d) || bp(f);
        return o[u][c];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [f, c] = d;
          return c === void 0 || (u[f] = c), u;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: f, className: c, ...g } = d;
              return Object.entries(g).every((w) => {
                let [v, E] = w;
                return Array.isArray(E)
                  ? E.includes({ ...i, ...a }[v])
                  : { ...i, ...a }[v] === E;
              })
                ? [...u, f, c]
                : u;
            }, []);
    return Sp(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mS = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ry = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var gS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vS = p.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...a
    },
    l,
  ) =>
    p.createElement(
      "svg",
      {
        ref: l,
        ...gS,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Ry("lucide", o),
        ...a,
      },
      [
        ...s.map(([u, d]) => p.createElement(u, d)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ge = (e, t) => {
  const n = p.forwardRef(({ className: r, ...o }, i) =>
    p.createElement(vS, {
      ref: i,
      iconNode: t,
      className: Ry(`lucide-${mS(e)}`, r),
      ...o,
    }),
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HO = Ge("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KO = Ge("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GO = Ge("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YO = Ge("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QO = Ge("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qO = Ge("FolderPlus", [
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XO = Ge("Folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JO = Ge("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZO = Ge("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb",
    },
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eD = Ge("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tD = Ge("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nD = Ge("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rD = Ge("SquarePen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g",
    },
  ],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oD = Ge("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iD = Ge("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sD = Ge("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Pf = "-",
  yS = (e) => {
    const t = ES(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(Pf);
        return a[0] === "" && a.length !== 1 && a.shift(), Ay(a, t) || wS(s);
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  Ay = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Ay(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Pf);
    return (s = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : s.classGroupId;
  },
  xp = /^\[(.+)\]$/,
  wS = (e) => {
    if (xp.test(e)) {
      const t = xp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  ES = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      SS(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        nd(s, r, i, t);
      }),
      r
    );
  },
  nd = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Cp(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (bS(o)) {
          nd(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        nd(s, Cp(t, i), n, r);
      });
    });
  },
  Cp = (e, t) => {
    let n = e;
    return (
      t.split(Pf).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  bS = (e) => e.isThemeGetter,
  SS = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([s, a]) => [t + s, a]),
                  )
                : i,
          );
          return [n, o];
        })
      : e,
  xS = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  Oy = "!",
  CS = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          d = 0,
          f;
        for (let E = 0; E < a.length; E++) {
          let m = a[E];
          if (u === 0) {
            if (m === o && (r || a.slice(E, E + i) === t)) {
              l.push(a.slice(d, E)), (d = E + i);
              continue;
            }
            if (m === "/") {
              f = E;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const c = l.length === 0 ? a : a.substring(d),
          g = c.startsWith(Oy),
          w = g ? c.substring(1) : c,
          v = f && f > d ? f - d : void 0;
        return {
          modifiers: l,
          hasImportantModifier: g,
          baseClassName: w,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  _S = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  TS = (e) => ({ cache: xS(e.cacheSize), parseClassName: CS(e), ...yS(e) }),
  kS = /\s+/,
  IS = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(kS);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: c,
          maybePostfixModifierPosition: g,
        } = n(u);
      let w = !!g,
        v = r(w ? c.substring(0, g) : c);
      if (!v) {
        if (!w) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((v = r(c)), !v)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        w = !1;
      }
      const E = _S(d).join(":"),
        m = f ? E + Oy : E,
        h = m + v;
      if (i.includes(h)) continue;
      i.push(h);
      const y = o(v, w);
      for (let b = 0; b < y.length; ++b) {
        const S = y[b];
        i.push(m + S);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function PS() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Dy(t)) && (r && (r += " "), (r += n));
  return r;
}
const Dy = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Dy(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function RS(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(l) {
    const u = t.reduce((d, f) => f(d), e());
    return (n = TS(u)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const d = IS(l, n);
    return o(l, d), d;
  }
  return function () {
    return i(PS.apply(null, arguments));
  };
}
const ce = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Ny = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  AS = /^\d+\/\d+$/,
  OS = new Set(["px", "full", "screen"]),
  DS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  NS =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  MS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  LS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  FS =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  En = (e) => Ao(e) || OS.has(e) || AS.test(e),
  Bn = (e) => si(e, "length", HS),
  Ao = (e) => !!e && !Number.isNaN(Number(e)),
  ju = (e) => si(e, "number", Ao),
  ki = (e) => !!e && Number.isInteger(Number(e)),
  US = (e) => e.endsWith("%") && Ao(e.slice(0, -1)),
  Q = (e) => Ny.test(e),
  Vn = (e) => DS.test(e),
  zS = new Set(["length", "size", "percentage"]),
  $S = (e) => si(e, zS, My),
  jS = (e) => si(e, "position", My),
  BS = new Set(["image", "url"]),
  VS = (e) => si(e, BS, GS),
  WS = (e) => si(e, "", KS),
  Ii = () => !0,
  si = (e, t, n) => {
    const r = Ny.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  HS = (e) => NS.test(e) && !MS.test(e),
  My = () => !1,
  KS = (e) => LS.test(e),
  GS = (e) => FS.test(e),
  YS = () => {
    const e = ce("colors"),
      t = ce("spacing"),
      n = ce("blur"),
      r = ce("brightness"),
      o = ce("borderColor"),
      i = ce("borderRadius"),
      s = ce("borderSpacing"),
      a = ce("borderWidth"),
      l = ce("contrast"),
      u = ce("grayscale"),
      d = ce("hueRotate"),
      f = ce("invert"),
      c = ce("gap"),
      g = ce("gradientColorStops"),
      w = ce("gradientColorStopPositions"),
      v = ce("inset"),
      E = ce("margin"),
      m = ce("opacity"),
      h = ce("padding"),
      y = ce("saturate"),
      b = ce("scale"),
      S = ce("sepia"),
      C = ce("skew"),
      _ = ce("space"),
      x = ce("translate"),
      O = () => ["auto", "contain", "none"],
      P = () => ["auto", "hidden", "clip", "visible", "scroll"],
      M = () => ["auto", Q, t],
      L = () => [Q, t],
      B = () => ["", En, Bn],
      D = () => ["auto", Ao, Q],
      H = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      j = () => ["solid", "dashed", "dotted", "double", "none"],
      V = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      T = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", Q],
      $ = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      F = () => [Ao, Q];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Ii],
        spacing: [En, Bn],
        blur: ["none", "", Vn, Q],
        brightness: F(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Vn, Q],
        borderSpacing: L(),
        borderWidth: B(),
        contrast: F(),
        grayscale: A(),
        hueRotate: F(),
        invert: A(),
        gap: L(),
        gradientColorStops: [e],
        gradientColorStopPositions: [US, Bn],
        inset: M(),
        margin: M(),
        opacity: F(),
        padding: L(),
        saturate: F(),
        scale: F(),
        sepia: A(),
        skew: F(),
        space: L(),
        translate: L(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Q] }],
        container: ["container"],
        columns: [{ columns: [Vn] }],
        "break-after": [{ "break-after": $() }],
        "break-before": [{ "break-before": $() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...H(), Q] }],
        overflow: [{ overflow: P() }],
        "overflow-x": [{ "overflow-x": P() }],
        "overflow-y": [{ "overflow-y": P() }],
        overscroll: [{ overscroll: O() }],
        "overscroll-x": [{ "overscroll-x": O() }],
        "overscroll-y": [{ "overscroll-y": O() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", ki, Q] }],
        basis: [{ basis: M() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", ki, Q] }],
        "grid-cols": [{ "grid-cols": [Ii] }],
        "col-start-end": [{ col: ["auto", { span: ["full", ki, Q] }, Q] }],
        "col-start": [{ "col-start": D() }],
        "col-end": [{ "col-end": D() }],
        "grid-rows": [{ "grid-rows": [Ii] }],
        "row-start-end": [{ row: ["auto", { span: [ki, Q] }, Q] }],
        "row-start": [{ "row-start": D() }],
        "row-end": [{ "row-end": D() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
        gap: [{ gap: [c] }],
        "gap-x": [{ "gap-x": [c] }],
        "gap-y": [{ "gap-y": [c] }],
        "justify-content": [{ justify: ["normal", ...T()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...T(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...T(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [E] }],
        mx: [{ mx: [E] }],
        my: [{ my: [E] }],
        ms: [{ ms: [E] }],
        me: [{ me: [E] }],
        mt: [{ mt: [E] }],
        mr: [{ mr: [E] }],
        mb: [{ mb: [E] }],
        ml: [{ ml: [E] }],
        "space-x": [{ "space-x": [_] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [_] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
        "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Q,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Vn] },
              Vn,
            ],
          },
        ],
        h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Vn, Bn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              ju,
            ],
          },
        ],
        "font-family": [{ font: [Ii] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Q,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Ao, ju] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              En,
              Q,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Q] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...j(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", En, Bn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", En, Q] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Q] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...H(), jS] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", $S] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              VS,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [g] }],
        "gradient-via": [{ via: [g] }],
        "gradient-to": [{ to: [g] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...j(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: j() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...j()] }],
        "outline-offset": [{ "outline-offset": [En, Q] }],
        "outline-w": [{ outline: [En, Bn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: B() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [En, Bn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Vn, WS] }],
        "shadow-color": [{ shadow: [Ii] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": V() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Vn, Q] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Q,
            ],
          },
        ],
        duration: [{ duration: F() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
        delay: [{ delay: F() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [b] }],
        "scale-x": [{ "scale-x": [b] }],
        "scale-y": [{ "scale-y": [b] }],
        rotate: [{ rotate: [ki, Q] }],
        "translate-x": [{ "translate-x": [x] }],
        "translate-y": [{ "translate-y": [x] }],
        "skew-x": [{ "skew-x": [C] }],
        "skew-y": [{ "skew-y": [C] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Q,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Q,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Q] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [En, Bn, ju] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  aD = RS(YS);
var _p = ["light", "dark"],
  QS = "(prefers-color-scheme: dark)",
  qS = p.createContext(void 0),
  XS = { setTheme: (e) => {}, themes: [] },
  lD = () => {
    var e;
    return (e = p.useContext(qS)) != null ? e : XS;
  };
p.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: a,
    nonce: l,
  }) => {
    let u = i === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((w) => `'${w}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = o
        ? _p.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      c = (w, v = !1, E = !0) => {
        let m = s ? s[w] : w,
          h = v ? w + "|| ''" : `'${m}'`,
          y = "";
        return (
          o &&
            E &&
            !v &&
            _p.includes(w) &&
            (y += `d.style.colorScheme = '${w}';`),
          n === "class"
            ? v || m
              ? (y += `c.add(${h})`)
              : (y += "null")
            : m && (y += `d[s](n,${h})`),
          y
        );
      },
      g = e
        ? `!function(){${d}${c(e)}}()`
        : r
          ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${QS}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c("dark")}}else{${c("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${c(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + c(i, !1, !1) + "}"}${f}}catch(e){}}()`
          : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${c(s ? "x[e]" : "e", !0)}}else{${c(i, !1, !1)};}${f}}catch(t){}}();`;
    return p.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: g },
    });
  },
);
var JS = (e) => {
    switch (e) {
      case "success":
        return tx;
      case "info":
        return rx;
      case "warning":
        return nx;
      case "error":
        return ox;
      default:
        return null;
    }
  },
  ZS = Array(12).fill(0),
  ex = ({ visible: e }) =>
    I.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": e },
      I.createElement(
        "div",
        { className: "sonner-spinner" },
        ZS.map((t, n) =>
          I.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          }),
        ),
      ),
    ),
  tx = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  nx = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  rx = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  ox = I.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    I.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  ix = () => {
    let [e, t] = I.useState(document.hidden);
    return (
      I.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  rd = 1,
  sx = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : rd++,
            i = this.toasts.find((a) => a.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === o
                    ? (this.publish({ ...a, ...e, id: o, title: n }),
                      { ...a, ...e, id: o, dismissible: s, title: n })
                    : a,
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0;
          return (
            r
              .then(async (i) => {
                if (lx(i) && !i.ok) {
                  o = !1;
                  let s =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${i.status}`)
                        : t.error,
                    a =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${i.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: s,
                    description: a,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let s =
                      typeof t.success == "function"
                        ? await t.success(i)
                        : t.success,
                    a =
                      typeof t.description == "function"
                        ? await t.description(i)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: s,
                    description: a,
                  });
                }
              })
              .catch(async (i) => {
                if (t.error !== void 0) {
                  o = !1;
                  let s =
                      typeof t.error == "function" ? await t.error(i) : t.error,
                    a =
                      typeof t.description == "function"
                        ? await t.description(i)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: s,
                    description: a,
                  });
                }
              })
              .finally(() => {
                var i;
                o && (this.dismiss(n), (n = void 0)),
                  (i = t.finally) == null || i.call(t);
              }),
            n
          );
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || rd++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  mt = new sx(),
  ax = (e, t) => {
    let n = (t == null ? void 0 : t.id) || rd++;
    return mt.addToast({ title: e, ...t, id: n }), n;
  },
  lx = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  ux = ax,
  cx = () => mt.toasts;
Object.assign(
  ux,
  {
    success: mt.success,
    info: mt.info,
    warning: mt.warning,
    error: mt.error,
    custom: mt.custom,
    message: mt.message,
    promise: mt.promise,
    dismiss: mt.dismiss,
    loading: mt.loading,
  },
  { getHistory: cx },
);
function dx(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
dx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function da(e) {
  return e.label !== void 0;
}
var fx = 3,
  hx = "32px",
  px = 4e3,
  mx = 356,
  gx = 14,
  vx = 20,
  yx = 200;
function wx(...e) {
  return e.filter(Boolean).join(" ");
}
var Ex = (e) => {
  var t, n, r, o, i, s, a, l, u, d;
  let {
      invert: f,
      toast: c,
      unstyled: g,
      interacting: w,
      setHeights: v,
      visibleToasts: E,
      heights: m,
      index: h,
      toasts: y,
      expanded: b,
      removeToast: S,
      defaultRichColors: C,
      closeButton: _,
      style: x,
      cancelButtonStyle: O,
      actionButtonStyle: P,
      className: M = "",
      descriptionClassName: L = "",
      duration: B,
      position: D,
      gap: H,
      loadingIcon: j,
      expandByDefault: V,
      classNames: T,
      icons: A,
      closeButtonAriaLabel: $ = "Close toast",
      pauseWhenPageIsHidden: F,
      cn: z,
    } = e,
    [K, ee] = I.useState(!1),
    [xe, Y] = I.useState(!1),
    [Ue, Oe] = I.useState(!1),
    [ke, X] = I.useState(!1),
    [Zt, De] = I.useState(0),
    [ot, Ye] = I.useState(0),
    Ft = I.useRef(null),
    Qe = I.useRef(null),
    so = h === 0,
    ao = h + 1 <= E,
    we = c.type,
    qe = c.dismissible !== !1,
    lo = c.className || "",
    uo = c.descriptionClassName || "",
    Dr = I.useMemo(
      () => m.findIndex((G) => G.toastId === c.id) || 0,
      [m, c.id],
    ),
    Bs = I.useMemo(() => {
      var G;
      return (G = c.closeButton) != null ? G : _;
    }, [c.closeButton, _]),
    Vs = I.useMemo(() => c.duration || B || px, [c.duration, B]),
    hi = I.useRef(0),
    ft = I.useRef(0),
    yn = I.useRef(0),
    Ct = I.useRef(null),
    [pi, en] = D.split("-"),
    mi = I.useMemo(
      () => m.reduce((G, se, oe) => (oe >= Dr ? G : G + se.height), 0),
      [m, Dr],
    ),
    Ws = ix(),
    cu = c.invert || f,
    Nr = we === "loading";
  (ft.current = I.useMemo(() => Dr * H + mi, [Dr, mi])),
    I.useEffect(() => {
      ee(!0);
    }, []),
    I.useLayoutEffect(() => {
      if (!K) return;
      let G = Qe.current,
        se = G.style.height;
      G.style.height = "auto";
      let oe = G.getBoundingClientRect().height;
      (G.style.height = se),
        Ye(oe),
        v((_t) =>
          _t.find((ae) => ae.toastId === c.id)
            ? _t.map((ae) => (ae.toastId === c.id ? { ...ae, height: oe } : ae))
            : [{ toastId: c.id, height: oe, position: c.position }, ..._t],
        );
    }, [K, c.title, c.description, v, c.id]);
  let Ut = I.useCallback(() => {
    Y(!0),
      De(ft.current),
      v((G) => G.filter((se) => se.toastId !== c.id)),
      setTimeout(() => {
        S(c);
      }, yx);
  }, [c, S, v, ft]);
  I.useEffect(() => {
    if (
      (c.promise && we === "loading") ||
      c.duration === 1 / 0 ||
      c.type === "loading"
    )
      return;
    let G,
      se = Vs;
    return (
      b || w || (F && Ws)
        ? (() => {
            if (yn.current < hi.current) {
              let oe = new Date().getTime() - hi.current;
              se = se - oe;
            }
            yn.current = new Date().getTime();
          })()
        : se !== 1 / 0 &&
          ((hi.current = new Date().getTime()),
          (G = setTimeout(() => {
            var oe;
            (oe = c.onAutoClose) == null || oe.call(c, c), Ut();
          }, se))),
      () => clearTimeout(G)
    );
  }, [b, w, V, c, Vs, Ut, c.promise, we, F, Ws]),
    I.useEffect(() => {
      let G = Qe.current;
      if (G) {
        let se = G.getBoundingClientRect().height;
        return (
          Ye(se),
          v((oe) => [
            { toastId: c.id, height: se, position: c.position },
            ...oe,
          ]),
          () => v((oe) => oe.filter((_t) => _t.toastId !== c.id))
        );
      }
    }, [v, c.id]),
    I.useEffect(() => {
      c.delete && Ut();
    }, [Ut, c.delete]);
  function du() {
    return A != null && A.loading
      ? I.createElement(
          "div",
          { className: "sonner-loader", "data-visible": we === "loading" },
          A.loading,
        )
      : j
        ? I.createElement(
            "div",
            { className: "sonner-loader", "data-visible": we === "loading" },
            j,
          )
        : I.createElement(ex, { visible: we === "loading" });
  }
  return I.createElement(
    "li",
    {
      "aria-live": c.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: Qe,
      className: z(
        M,
        lo,
        T == null ? void 0 : T.toast,
        (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast,
        T == null ? void 0 : T.default,
        T == null ? void 0 : T[we],
        (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[we],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = c.richColors) != null ? r : C,
      "data-styled": !(c.jsx || c.unstyled || g),
      "data-mounted": K,
      "data-promise": !!c.promise,
      "data-removed": xe,
      "data-visible": ao,
      "data-y-position": pi,
      "data-x-position": en,
      "data-index": h,
      "data-front": so,
      "data-swiping": Ue,
      "data-dismissible": qe,
      "data-type": we,
      "data-invert": cu,
      "data-swipe-out": ke,
      "data-expanded": !!(b || (V && K)),
      style: {
        "--index": h,
        "--toasts-before": h,
        "--z-index": y.length - h,
        "--offset": `${xe ? Zt : ft.current}px`,
        "--initial-height": V ? "auto" : `${ot}px`,
        ...x,
        ...c.style,
      },
      onPointerDown: (G) => {
        Nr ||
          !qe ||
          ((Ft.current = new Date()),
          De(ft.current),
          G.target.setPointerCapture(G.pointerId),
          G.target.tagName !== "BUTTON" &&
            (Oe(!0), (Ct.current = { x: G.clientX, y: G.clientY })));
      },
      onPointerUp: () => {
        var G, se, oe, _t;
        if (ke || !qe) return;
        Ct.current = null;
        let ae = Number(
            ((G = Qe.current) == null
              ? void 0
              : G.style.getPropertyValue("--swipe-amount").replace("px", "")) ||
              0,
          ),
          Ie =
            new Date().getTime() -
            ((se = Ft.current) == null ? void 0 : se.getTime()),
          Xe = Math.abs(ae) / Ie;
        if (Math.abs(ae) >= vx || Xe > 0.11) {
          De(ft.current),
            (oe = c.onDismiss) == null || oe.call(c, c),
            Ut(),
            X(!0);
          return;
        }
        (_t = Qe.current) == null ||
          _t.style.setProperty("--swipe-amount", "0px"),
          Oe(!1);
      },
      onPointerMove: (G) => {
        var se;
        if (!Ct.current || !qe) return;
        let oe = G.clientY - Ct.current.y,
          _t = G.clientX - Ct.current.x,
          ae = (pi === "top" ? Math.min : Math.max)(0, oe),
          Ie = G.pointerType === "touch" ? 10 : 2;
        Math.abs(ae) > Ie
          ? (se = Qe.current) == null ||
            se.style.setProperty("--swipe-amount", `${oe}px`)
          : Math.abs(_t) > Ie && (Ct.current = null);
      },
    },
    Bs && !c.jsx
      ? I.createElement(
          "button",
          {
            "aria-label": $,
            "data-disabled": Nr,
            "data-close-button": !0,
            onClick:
              Nr || !qe
                ? () => {}
                : () => {
                    var G;
                    Ut(), (G = c.onDismiss) == null || G.call(c, c);
                  },
            className: z(
              T == null ? void 0 : T.closeButton,
              (o = c == null ? void 0 : c.classNames) == null
                ? void 0
                : o.closeButton,
            ),
          },
          I.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            I.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            I.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
          ),
        )
      : null,
    c.jsx || I.isValidElement(c.title)
      ? c.jsx || c.title
      : I.createElement(
          I.Fragment,
          null,
          we || c.icon || c.promise
            ? I.createElement(
                "div",
                {
                  "data-icon": "",
                  className: z(
                    T == null ? void 0 : T.icon,
                    (i = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : i.icon,
                  ),
                },
                c.promise || (c.type === "loading" && !c.icon)
                  ? c.icon || du()
                  : null,
                c.type !== "loading"
                  ? c.icon || (A == null ? void 0 : A[we]) || JS(we)
                  : null,
              )
            : null,
          I.createElement(
            "div",
            {
              "data-content": "",
              className: z(
                T == null ? void 0 : T.content,
                (s = c == null ? void 0 : c.classNames) == null
                  ? void 0
                  : s.content,
              ),
            },
            I.createElement(
              "div",
              {
                "data-title": "",
                className: z(
                  T == null ? void 0 : T.title,
                  (a = c == null ? void 0 : c.classNames) == null
                    ? void 0
                    : a.title,
                ),
              },
              c.title,
            ),
            c.description
              ? I.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: z(
                      L,
                      uo,
                      T == null ? void 0 : T.description,
                      (l = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : l.description,
                    ),
                  },
                  c.description,
                )
              : null,
          ),
          I.isValidElement(c.cancel)
            ? c.cancel
            : c.cancel && da(c.cancel)
              ? I.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: c.cancelButtonStyle || O,
                    onClick: (G) => {
                      var se, oe;
                      da(c.cancel) &&
                        qe &&
                        ((oe = (se = c.cancel).onClick) == null ||
                          oe.call(se, G),
                        Ut());
                    },
                    className: z(
                      T == null ? void 0 : T.cancelButton,
                      (u = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : u.cancelButton,
                    ),
                  },
                  c.cancel.label,
                )
              : null,
          I.isValidElement(c.action)
            ? c.action
            : c.action && da(c.action)
              ? I.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: c.actionButtonStyle || P,
                    onClick: (G) => {
                      var se, oe;
                      da(c.action) &&
                        (G.defaultPrevented ||
                          ((oe = (se = c.action).onClick) == null ||
                            oe.call(se, G),
                          Ut()));
                    },
                    className: z(
                      T == null ? void 0 : T.actionButton,
                      (d = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : d.actionButton,
                    ),
                  },
                  c.action.label,
                )
              : null,
        ),
  );
};
function Tp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var uD = (e) => {
    let {
        invert: t,
        position: n = "bottom-right",
        hotkey: r = ["altKey", "KeyT"],
        expand: o,
        closeButton: i,
        className: s,
        offset: a,
        theme: l = "light",
        richColors: u,
        duration: d,
        style: f,
        visibleToasts: c = fx,
        toastOptions: g,
        dir: w = Tp(),
        gap: v = gx,
        loadingIcon: E,
        icons: m,
        containerAriaLabel: h = "Notifications",
        pauseWhenPageIsHidden: y,
        cn: b = wx,
      } = e,
      [S, C] = I.useState([]),
      _ = I.useMemo(
        () =>
          Array.from(
            new Set(
              [n].concat(S.filter((F) => F.position).map((F) => F.position)),
            ),
          ),
        [S, n],
      ),
      [x, O] = I.useState([]),
      [P, M] = I.useState(!1),
      [L, B] = I.useState(!1),
      [D, H] = I.useState(
        l !== "system"
          ? l
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
      ),
      j = I.useRef(null),
      V = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      T = I.useRef(null),
      A = I.useRef(!1),
      $ = I.useCallback(
        (F) => {
          var z;
          ((z = S.find((K) => K.id === F.id)) != null && z.delete) ||
            mt.dismiss(F.id),
            C((K) => K.filter(({ id: ee }) => ee !== F.id));
        },
        [S],
      );
    return (
      I.useEffect(
        () =>
          mt.subscribe((F) => {
            if (F.dismiss) {
              C((z) =>
                z.map((K) => (K.id === F.id ? { ...K, delete: !0 } : K)),
              );
              return;
            }
            setTimeout(() => {
              ay.flushSync(() => {
                C((z) => {
                  let K = z.findIndex((ee) => ee.id === F.id);
                  return K !== -1
                    ? [...z.slice(0, K), { ...z[K], ...F }, ...z.slice(K + 1)]
                    : [F, ...z];
                });
              });
            });
          }),
        [],
      ),
      I.useEffect(() => {
        if (l !== "system") {
          H(l);
          return;
        }
        l === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? H("dark")
            : H("light")),
          typeof window < "u" &&
            window
              .matchMedia("(prefers-color-scheme: dark)")
              .addEventListener("change", ({ matches: F }) => {
                H(F ? "dark" : "light");
              });
      }, [l]),
      I.useEffect(() => {
        S.length <= 1 && M(!1);
      }, [S]),
      I.useEffect(() => {
        let F = (z) => {
          var K, ee;
          r.every((xe) => z[xe] || z.code === xe) &&
            (M(!0), (K = j.current) == null || K.focus()),
            z.code === "Escape" &&
              (document.activeElement === j.current ||
                ((ee = j.current) != null &&
                  ee.contains(document.activeElement))) &&
              M(!1);
        };
        return (
          document.addEventListener("keydown", F),
          () => document.removeEventListener("keydown", F)
        );
      }, [r]),
      I.useEffect(() => {
        if (j.current)
          return () => {
            T.current &&
              (T.current.focus({ preventScroll: !0 }),
              (T.current = null),
              (A.current = !1));
          };
      }, [j.current]),
      S.length
        ? I.createElement(
            "section",
            { "aria-label": `${h} ${V}`, tabIndex: -1 },
            _.map((F, z) => {
              var K;
              let [ee, xe] = F.split("-");
              return I.createElement(
                "ol",
                {
                  key: F,
                  dir: w === "auto" ? Tp() : w,
                  tabIndex: -1,
                  ref: j,
                  className: s,
                  "data-sonner-toaster": !0,
                  "data-theme": D,
                  "data-y-position": ee,
                  "data-x-position": xe,
                  style: {
                    "--front-toast-height": `${((K = x[0]) == null ? void 0 : K.height) || 0}px`,
                    "--offset": typeof a == "number" ? `${a}px` : a || hx,
                    "--width": `${mx}px`,
                    "--gap": `${v}px`,
                    ...f,
                  },
                  onBlur: (Y) => {
                    A.current &&
                      !Y.currentTarget.contains(Y.relatedTarget) &&
                      ((A.current = !1),
                      T.current &&
                        (T.current.focus({ preventScroll: !0 }),
                        (T.current = null)));
                  },
                  onFocus: (Y) => {
                    (Y.target instanceof HTMLElement &&
                      Y.target.dataset.dismissible === "false") ||
                      A.current ||
                      ((A.current = !0), (T.current = Y.relatedTarget));
                  },
                  onMouseEnter: () => M(!0),
                  onMouseMove: () => M(!0),
                  onMouseLeave: () => {
                    L || M(!1);
                  },
                  onPointerDown: (Y) => {
                    (Y.target instanceof HTMLElement &&
                      Y.target.dataset.dismissible === "false") ||
                      B(!0);
                  },
                  onPointerUp: () => B(!1),
                },
                S.filter(
                  (Y) => (!Y.position && z === 0) || Y.position === F,
                ).map((Y, Ue) => {
                  var Oe, ke;
                  return I.createElement(Ex, {
                    key: Y.id,
                    icons: m,
                    index: Ue,
                    toast: Y,
                    defaultRichColors: u,
                    duration:
                      (Oe = g == null ? void 0 : g.duration) != null ? Oe : d,
                    className: g == null ? void 0 : g.className,
                    descriptionClassName:
                      g == null ? void 0 : g.descriptionClassName,
                    invert: t,
                    visibleToasts: c,
                    closeButton:
                      (ke = g == null ? void 0 : g.closeButton) != null
                        ? ke
                        : i,
                    interacting: L,
                    position: F,
                    style: g == null ? void 0 : g.style,
                    unstyled: g == null ? void 0 : g.unstyled,
                    classNames: g == null ? void 0 : g.classNames,
                    cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                    actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                    removeToast: $,
                    toasts: S.filter((X) => X.position == Y.position),
                    heights: x.filter((X) => X.position == Y.position),
                    setHeights: O,
                    expandByDefault: o,
                    gap: v,
                    loadingIcon: E,
                    expanded: P,
                    pauseWhenPageIsHidden: y,
                    cn: b,
                  });
                }),
              );
            }),
          )
        : null
    );
  },
  bx = og.useId || (() => {}),
  Sx = 0;
function Ly(e) {
  const [t, n] = p.useState(bx());
  return (
    br(() => {
      e || n((r) => r ?? String(Sx++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const xx = ["top", "right", "bottom", "left"],
  Sr = Math.min,
  vt = Math.max,
  al = Math.round,
  fa = Math.floor,
  xr = (e) => ({ x: e, y: e }),
  Cx = { left: "right", right: "left", bottom: "top", top: "bottom" },
  _x = { start: "end", end: "start" };
function od(e, t, n) {
  return vt(e, Sr(t, n));
}
function Dn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Nn(e) {
  return e.split("-")[0];
}
function ai(e) {
  return e.split("-")[1];
}
function Rf(e) {
  return e === "x" ? "y" : "x";
}
function Af(e) {
  return e === "y" ? "height" : "width";
}
function Cr(e) {
  return ["top", "bottom"].includes(Nn(e)) ? "y" : "x";
}
function Of(e) {
  return Rf(Cr(e));
}
function Tx(e, t, n) {
  n === void 0 && (n = !1);
  const r = ai(e),
    o = Of(e),
    i = Af(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return t.reference[i] > t.floating[i] && (s = ll(s)), [s, ll(s)];
}
function kx(e) {
  const t = ll(e);
  return [id(e), t, id(t)];
}
function id(e) {
  return e.replace(/start|end/g, (t) => _x[t]);
}
function Ix(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Px(e, t, n, r) {
  const o = ai(e);
  let i = Ix(Nn(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(id)))), i
  );
}
function ll(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Cx[t]);
}
function Rx(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Fy(e) {
  return typeof e != "number"
    ? Rx(e)
    : { top: e, right: e, bottom: e, left: e };
}
function ul(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function kp(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Cr(t),
    s = Of(t),
    a = Af(s),
    l = Nn(t),
    u = i === "y",
    d = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    c = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      g = { x: d, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: f };
      break;
    case "left":
      g = { x: r.x - o.width, y: f };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (ai(t)) {
    case "start":
      g[s] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += c * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Ax = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    a = i.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: f } = kp(u, r, l),
    c = r,
    g = {},
    w = 0;
  for (let v = 0; v < a.length; v++) {
    const { name: E, fn: m } = a[v],
      {
        x: h,
        y,
        data: b,
        reset: S,
      } = await m({
        x: d,
        y: f,
        initialPlacement: r,
        placement: c,
        strategy: o,
        middlewareData: g,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = h ?? d),
      (f = y ?? f),
      (g = { ...g, [E]: { ...g[E], ...b } }),
      S &&
        w <= 50 &&
        (w++,
        typeof S == "object" &&
          (S.placement && (c = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : S.rects),
          ({ x: d, y: f } = kp(u, c, l))),
        (v = -1));
  }
  return { x: d, y: f, placement: c, strategy: o, middlewareData: g };
};
async function hs(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: c = !1,
      padding: g = 0,
    } = Dn(t, e),
    w = Fy(g),
    E = a[c ? (f === "floating" ? "reference" : "floating") : f],
    m = ul(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(E))) == null ||
          n
            ? E
            : E.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: l,
      }),
    ),
    h =
      f === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    b = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = ul(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: h,
            offsetParent: y,
            strategy: l,
          })
        : h,
    );
  return {
    top: (m.top - S.top + w.top) / b.y,
    bottom: (S.bottom - m.bottom + w.bottom) / b.y,
    left: (m.left - S.left + w.left) / b.x,
    right: (S.right - m.right + w.right) / b.x,
  };
}
const Ox = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: d = 0 } = Dn(e, t) || {};
      if (u == null) return {};
      const f = Fy(d),
        c = { x: n, y: r },
        g = Of(o),
        w = Af(g),
        v = await s.getDimensions(u),
        E = g === "y",
        m = E ? "top" : "left",
        h = E ? "bottom" : "right",
        y = E ? "clientHeight" : "clientWidth",
        b = i.reference[w] + i.reference[g] - c[g] - i.floating[w],
        S = c[g] - i.reference[g],
        C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let _ = C ? C[y] : 0;
      (!_ || !(await (s.isElement == null ? void 0 : s.isElement(C)))) &&
        (_ = a.floating[y] || i.floating[w]);
      const x = b / 2 - S / 2,
        O = _ / 2 - v[w] / 2 - 1,
        P = Sr(f[m], O),
        M = Sr(f[h], O),
        L = P,
        B = _ - v[w] - M,
        D = _ / 2 - v[w] / 2 + x,
        H = od(L, D, B),
        j =
          !l.arrow &&
          ai(o) != null &&
          D !== H &&
          i.reference[w] / 2 - (D < L ? P : M) - v[w] / 2 < 0,
        V = j ? (D < L ? D - L : D - B) : 0;
      return {
        [g]: c[g] + V,
        data: {
          [g]: H,
          centerOffset: D - H - V,
          ...(j && { alignmentOffset: V }),
        },
        reset: j,
      };
    },
  }),
  Dx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: c,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: v = !0,
              ...E
            } = Dn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = Nn(o),
            h = Cr(a),
            y = Nn(a) === a,
            b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            S = c || (y || !v ? [ll(a)] : kx(a)),
            C = w !== "none";
          !c && C && S.push(...Px(a, v, w, b));
          const _ = [a, ...S],
            x = await hs(t, E),
            O = [];
          let P = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && O.push(x[m]), f)) {
            const D = Tx(o, s, b);
            O.push(x[D[0]], x[D[1]]);
          }
          if (
            ((P = [...P, { placement: o, overflows: O }]),
            !O.every((D) => D <= 0))
          ) {
            var M, L;
            const D = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1,
              H = _[D];
            if (H)
              return {
                data: { index: D, overflows: P },
                reset: { placement: H },
              };
            let j =
              (L = P.filter((V) => V.overflows[0] <= 0).sort(
                (V, T) => V.overflows[1] - T.overflows[1],
              )[0]) == null
                ? void 0
                : L.placement;
            if (!j)
              switch (g) {
                case "bestFit": {
                  var B;
                  const V =
                    (B = P.filter((T) => {
                      if (C) {
                        const A = Cr(T.placement);
                        return A === h || A === "y";
                      }
                      return !0;
                    })
                      .map((T) => [
                        T.placement,
                        T.overflows
                          .filter((A) => A > 0)
                          .reduce((A, $) => A + $, 0),
                      ])
                      .sort((T, A) => T[1] - A[1])[0]) == null
                      ? void 0
                      : B[0];
                  V && (j = V);
                  break;
                }
                case "initialPlacement":
                  j = a;
                  break;
              }
            if (o !== j) return { reset: { placement: j } };
          }
          return {};
        },
      }
    );
  };
function Ip(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Pp(e) {
  return xx.some((t) => e[t] >= 0);
}
const Nx = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Dn(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await hs(t, { ...o, elementContext: "reference" }),
              s = Ip(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: Pp(s) },
            };
          }
          case "escaped": {
            const i = await hs(t, { ...o, altBoundary: !0 }),
              s = Ip(i, n.floating);
            return { data: { escapedOffsets: s, escaped: Pp(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Mx(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Nn(n),
    a = ai(n),
    l = Cr(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    d = i && l ? -1 : 1,
    f = Dn(t, e);
  let {
    mainAxis: c,
    crossAxis: g,
    alignmentAxis: w,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    a && typeof w == "number" && (g = a === "end" ? w * -1 : w),
    l ? { x: g * d, y: c * u } : { x: c * u, y: g * d }
  );
}
const Lx = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: a } = t,
            l = await Mx(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  Fx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (E) => {
                  let { x: m, y: h } = E;
                  return { x: m, y: h };
                },
              },
              ...l
            } = Dn(e, t),
            u = { x: n, y: r },
            d = await hs(t, l),
            f = Cr(Nn(o)),
            c = Rf(f);
          let g = u[c],
            w = u[f];
          if (i) {
            const E = c === "y" ? "top" : "left",
              m = c === "y" ? "bottom" : "right",
              h = g + d[E],
              y = g - d[m];
            g = od(h, g, y);
          }
          if (s) {
            const E = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              h = w + d[E],
              y = w - d[m];
            w = od(h, w, y);
          }
          const v = a.fn({ ...t, [c]: g, [f]: w });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [c]: i, [f]: s } },
          };
        },
      }
    );
  },
  Ux = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = Dn(e, t),
            d = { x: n, y: r },
            f = Cr(o),
            c = Rf(f);
          let g = d[c],
            w = d[f];
          const v = Dn(a, t),
            E =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (l) {
            const y = c === "y" ? "height" : "width",
              b = i.reference[c] - i.floating[y] + E.mainAxis,
              S = i.reference[c] + i.reference[y] - E.mainAxis;
            g < b ? (g = b) : g > S && (g = S);
          }
          if (u) {
            var m, h;
            const y = c === "y" ? "width" : "height",
              b = ["top", "left"].includes(Nn(o)),
              S =
                i.reference[f] -
                i.floating[y] +
                ((b && ((m = s.offset) == null ? void 0 : m[f])) || 0) +
                (b ? 0 : E.crossAxis),
              C =
                i.reference[f] +
                i.reference[y] +
                (b ? 0 : ((h = s.offset) == null ? void 0 : h[f]) || 0) -
                (b ? E.crossAxis : 0);
            w < S ? (w = S) : w > C && (w = C);
          }
          return { [c]: g, [f]: w };
        },
      }
    );
  },
  zx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: a } = t,
            { apply: l = () => {}, ...u } = Dn(e, t),
            d = await hs(t, u),
            f = Nn(o),
            c = ai(o),
            g = Cr(o) === "y",
            { width: w, height: v } = i.floating;
          let E, m;
          f === "top" || f === "bottom"
            ? ((E = f),
              (m =
                c ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = f), (E = c === "end" ? "top" : "bottom"));
          const h = v - d.top - d.bottom,
            y = w - d.left - d.right,
            b = Sr(v - d[E], h),
            S = Sr(w - d[m], y),
            C = !t.middlewareData.shift;
          let _ = b,
            x = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (x = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (_ = h),
            C && !c)
          ) {
            const P = vt(d.left, 0),
              M = vt(d.right, 0),
              L = vt(d.top, 0),
              B = vt(d.bottom, 0);
            g
              ? (x = w - 2 * (P !== 0 || M !== 0 ? P + M : vt(d.left, d.right)))
              : (_ =
                  v - 2 * (L !== 0 || B !== 0 ? L + B : vt(d.top, d.bottom)));
          }
          await l({ ...t, availableWidth: x, availableHeight: _ });
          const O = await s.getDimensions(a.floating);
          return w !== O.width || v !== O.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Kl() {
  return typeof window < "u";
}
function li(e) {
  return Uy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Et(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function vn(e) {
  var t;
  return (t = (Uy(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Uy(e) {
  return Kl() ? e instanceof Node || e instanceof Et(e).Node : !1;
}
function Qt(e) {
  return Kl() ? e instanceof Element || e instanceof Et(e).Element : !1;
}
function mn(e) {
  return Kl() ? e instanceof HTMLElement || e instanceof Et(e).HTMLElement : !1;
}
function Rp(e) {
  return !Kl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Et(e).ShadowRoot;
}
function As(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = qt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function $x(e) {
  return ["table", "td", "th"].includes(li(e));
}
function Gl(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Df(e) {
  const t = Nf(),
    n = Qt(e) ? qt(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function jx(e) {
  let t = _r(e);
  for (; mn(t) && !ei(t); ) {
    if (Df(t)) return t;
    if (Gl(t)) return null;
    t = _r(t);
  }
  return null;
}
function Nf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function ei(e) {
  return ["html", "body", "#document"].includes(li(e));
}
function qt(e) {
  return Et(e).getComputedStyle(e);
}
function Yl(e) {
  return Qt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function _r(e) {
  if (li(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Rp(e) && e.host) || vn(e);
  return Rp(t) ? t.host : t;
}
function zy(e) {
  const t = _r(e);
  return ei(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : mn(t) && As(t)
      ? t
      : zy(t);
}
function ps(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = zy(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = Et(o);
  if (i) {
    const a = sd(s);
    return t.concat(
      s,
      s.visualViewport || [],
      As(o) ? o : [],
      a && n ? ps(a) : [],
    );
  }
  return t.concat(o, ps(o, [], n));
}
function sd(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function $y(e) {
  const t = qt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = mn(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = al(n) !== i || al(r) !== s;
  return a && ((n = i), (r = s)), { width: n, height: r, $: a };
}
function Mf(e) {
  return Qt(e) ? e : e.contextElement;
}
function Oo(e) {
  const t = Mf(e);
  if (!mn(t)) return xr(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = $y(t);
  let s = (i ? al(n.width) : n.width) / r,
    a = (i ? al(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const Bx = xr(0);
function jy(e) {
  const t = Et(e);
  return !Nf() || !t.visualViewport
    ? Bx
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Vx(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Et(e)) ? !1 : t;
}
function eo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Mf(e);
  let s = xr(1);
  t && (r ? Qt(r) && (s = Oo(r)) : (s = Oo(e)));
  const a = Vx(i, n, r) ? jy(i) : xr(0);
  let l = (o.left + a.x) / s.x,
    u = (o.top + a.y) / s.y,
    d = o.width / s.x,
    f = o.height / s.y;
  if (i) {
    const c = Et(i),
      g = r && Qt(r) ? Et(r) : r;
    let w = c,
      v = sd(w);
    for (; v && r && g !== w; ) {
      const E = Oo(v),
        m = v.getBoundingClientRect(),
        h = qt(v),
        y = m.left + (v.clientLeft + parseFloat(h.paddingLeft)) * E.x,
        b = m.top + (v.clientTop + parseFloat(h.paddingTop)) * E.y;
      (l *= E.x),
        (u *= E.y),
        (d *= E.x),
        (f *= E.y),
        (l += y),
        (u += b),
        (w = Et(v)),
        (v = sd(w));
    }
  }
  return ul({ width: d, height: f, x: l, y: u });
}
function Wx(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = vn(r),
    a = t ? Gl(t.floating) : !1;
  if (r === s || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = xr(1);
  const d = xr(0),
    f = mn(r);
  if (
    (f || (!f && !i)) &&
    ((li(r) !== "body" || As(s)) && (l = Yl(r)), mn(r))
  ) {
    const c = eo(r);
    (u = Oo(r)), (d.x = c.x + r.clientLeft), (d.y = c.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y,
  };
}
function Hx(e) {
  return Array.from(e.getClientRects());
}
function ad(e, t) {
  const n = Yl(e).scrollLeft;
  return t ? t.left + n : eo(vn(e)).left + n;
}
function Kx(e) {
  const t = vn(e),
    n = Yl(e),
    r = e.ownerDocument.body,
    o = vt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = vt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ad(e);
  const a = -n.scrollTop;
  return (
    qt(r).direction === "rtl" && (s += vt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: a }
  );
}
function Gx(e, t) {
  const n = Et(e),
    r = vn(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = Nf();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a, y: l };
}
function Yx(e, t) {
  const n = eo(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = mn(e) ? Oo(e) : xr(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = o * i.x,
    u = r * i.y;
  return { width: s, height: a, x: l, y: u };
}
function Ap(e, t, n) {
  let r;
  if (t === "viewport") r = Gx(e, n);
  else if (t === "document") r = Kx(vn(e));
  else if (Qt(t)) r = Yx(t, n);
  else {
    const o = jy(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return ul(r);
}
function By(e, t) {
  const n = _r(e);
  return n === t || !Qt(n) || ei(n)
    ? !1
    : qt(n).position === "fixed" || By(n, t);
}
function Qx(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ps(e, [], !1).filter((a) => Qt(a) && li(a) !== "body"),
    o = null;
  const i = qt(e).position === "fixed";
  let s = i ? _r(e) : e;
  for (; Qt(s) && !ei(s); ) {
    const a = qt(s),
      l = Df(s);
    !l && a.position === "fixed" && (o = null),
      (
        i
          ? !l && !o
          : (!l &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (As(s) && !l && By(e, s))
      )
        ? (r = r.filter((d) => d !== s))
        : (o = a),
      (s = _r(s));
  }
  return t.set(e, r), r;
}
function qx(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Gl(t)
          ? []
          : Qx(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce(
      (u, d) => {
        const f = Ap(t, d, o);
        return (
          (u.top = vt(f.top, u.top)),
          (u.right = Sr(f.right, u.right)),
          (u.bottom = Sr(f.bottom, u.bottom)),
          (u.left = vt(f.left, u.left)),
          u
        );
      },
      Ap(t, a, o),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Xx(e) {
  const { width: t, height: n } = $y(e);
  return { width: t, height: n };
}
function Jx(e, t, n) {
  const r = mn(t),
    o = vn(t),
    i = n === "fixed",
    s = eo(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = xr(0);
  if (r || (!r && !i))
    if (((li(t) !== "body" || As(o)) && (a = Yl(t)), r)) {
      const g = eo(t, !0, i, t);
      (l.x = g.x + t.clientLeft), (l.y = g.y + t.clientTop);
    } else o && (l.x = ad(o));
  let u = 0,
    d = 0;
  if (o && !r && !i) {
    const g = o.getBoundingClientRect();
    (d = g.top + a.scrollTop), (u = g.left + a.scrollLeft - ad(o, g));
  }
  const f = s.left + a.scrollLeft - l.x - u,
    c = s.top + a.scrollTop - l.y - d;
  return { x: f, y: c, width: s.width, height: s.height };
}
function Bu(e) {
  return qt(e).position === "static";
}
function Op(e, t) {
  if (!mn(e) || qt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return vn(e) === n && (n = n.ownerDocument.body), n;
}
function Vy(e, t) {
  const n = Et(e);
  if (Gl(e)) return n;
  if (!mn(e)) {
    let o = _r(e);
    for (; o && !ei(o); ) {
      if (Qt(o) && !Bu(o)) return o;
      o = _r(o);
    }
    return n;
  }
  let r = Op(e, t);
  for (; r && $x(r) && Bu(r); ) r = Op(r, t);
  return r && ei(r) && Bu(r) && !Df(r) ? n : r || jx(e) || n;
}
const Zx = async function (e) {
  const t = this.getOffsetParent || Vy,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Jx(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function eC(e) {
  return qt(e).direction === "rtl";
}
const tC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wx,
  getDocumentElement: vn,
  getClippingRect: qx,
  getOffsetParent: Vy,
  getElementRects: Zx,
  getClientRects: Hx,
  getDimensions: Xx,
  getScale: Oo,
  isElement: Qt,
  isRTL: eC,
};
function nC(e, t) {
  let n = null,
    r;
  const o = vn(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const { left: u, top: d, width: f, height: c } = e.getBoundingClientRect();
    if ((a || t(), !f || !c)) return;
    const g = fa(d),
      w = fa(o.clientWidth - (u + f)),
      v = fa(o.clientHeight - (d + c)),
      E = fa(u),
      h = {
        rootMargin: -g + "px " + -w + "px " + -v + "px " + -E + "px",
        threshold: vt(0, Sr(1, l)) || 1,
      };
    let y = !0;
    function b(S) {
      const C = S[0].intersectionRatio;
      if (C !== l) {
        if (!y) return s();
        C
          ? s(!1, C)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(b, { ...h, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, h);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function rC(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = Mf(e),
    d = o || i ? [...(u ? ps(u) : []), ...ps(t)] : [];
  d.forEach((m) => {
    o && m.addEventListener("scroll", n, { passive: !0 }),
      i && m.addEventListener("resize", n);
  });
  const f = u && a ? nC(u, n) : null;
  let c = -1,
    g = null;
  s &&
    ((g = new ResizeObserver((m) => {
      let [h] = m;
      h &&
        h.target === u &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(c),
        (c = requestAnimationFrame(() => {
          var y;
          (y = g) == null || y.observe(t);
        }))),
        n();
    })),
    u && !l && g.observe(u),
    g.observe(t));
  let w,
    v = l ? eo(e) : null;
  l && E();
  function E() {
    const m = eo(e);
    v &&
      (m.x !== v.x ||
        m.y !== v.y ||
        m.width !== v.width ||
        m.height !== v.height) &&
      n(),
      (v = m),
      (w = requestAnimationFrame(E));
  }
  return (
    n(),
    () => {
      var m;
      d.forEach((h) => {
        o && h.removeEventListener("scroll", n),
          i && h.removeEventListener("resize", n);
      }),
        f == null || f(),
        (m = g) == null || m.disconnect(),
        (g = null),
        l && cancelAnimationFrame(w);
    }
  );
}
const oC = Lx,
  iC = Fx,
  sC = Dx,
  aC = zx,
  lC = Nx,
  Dp = Ox,
  uC = Ux,
  cC = (e, t, n) => {
    const r = new Map(),
      o = { platform: tC, ...n },
      i = { ...o.platform, _c: r };
    return Ax(e, t, { ...o, platform: i });
  };
var Pa = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function cl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!cl(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !cl(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Wy(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Np(e, t) {
  const n = Wy(e);
  return Math.round(t * n) / n;
}
function Vu(e) {
  const t = p.useRef(e);
  return (
    Pa(() => {
      t.current = e;
    }),
    t
  );
}
function dC(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [d, f] = p.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [c, g] = p.useState(r);
  cl(c, r) || g(r);
  const [w, v] = p.useState(null),
    [E, m] = p.useState(null),
    h = p.useCallback((T) => {
      T !== C.current && ((C.current = T), v(T));
    }, []),
    y = p.useCallback((T) => {
      T !== _.current && ((_.current = T), m(T));
    }, []),
    b = i || w,
    S = s || E,
    C = p.useRef(null),
    _ = p.useRef(null),
    x = p.useRef(d),
    O = l != null,
    P = Vu(l),
    M = Vu(o),
    L = Vu(u),
    B = p.useCallback(() => {
      if (!C.current || !_.current) return;
      const T = { placement: t, strategy: n, middleware: c };
      M.current && (T.platform = M.current),
        cC(C.current, _.current, T).then((A) => {
          const $ = { ...A, isPositioned: L.current !== !1 };
          D.current &&
            !cl(x.current, $) &&
            ((x.current = $),
            cn.flushSync(() => {
              f($);
            }));
        });
    }, [c, t, n, M, L]);
  Pa(() => {
    u === !1 &&
      x.current.isPositioned &&
      ((x.current.isPositioned = !1), f((T) => ({ ...T, isPositioned: !1 })));
  }, [u]);
  const D = p.useRef(!1);
  Pa(
    () => (
      (D.current = !0),
      () => {
        D.current = !1;
      }
    ),
    [],
  ),
    Pa(() => {
      if ((b && (C.current = b), S && (_.current = S), b && S)) {
        if (P.current) return P.current(b, S, B);
        B();
      }
    }, [b, S, B, P, O]);
  const H = p.useMemo(
      () => ({ reference: C, floating: _, setReference: h, setFloating: y }),
      [h, y],
    ),
    j = p.useMemo(() => ({ reference: b, floating: S }), [b, S]),
    V = p.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!j.floating) return T;
      const A = Np(j.floating, d.x),
        $ = Np(j.floating, d.y);
      return a
        ? {
            ...T,
            transform: "translate(" + A + "px, " + $ + "px)",
            ...(Wy(j.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: A, top: $ };
    }, [n, a, j.floating, d.x, d.y]);
  return p.useMemo(
    () => ({ ...d, update: B, refs: H, elements: j, floatingStyles: V }),
    [d, B, H, j, V],
  );
}
const fC = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Dp({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? Dp({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  hC = (e, t) => ({ ...oC(e), options: [e, t] }),
  pC = (e, t) => ({ ...iC(e), options: [e, t] }),
  mC = (e, t) => ({ ...uC(e), options: [e, t] }),
  gC = (e, t) => ({ ...sC(e), options: [e, t] }),
  vC = (e, t) => ({ ...aC(e), options: [e, t] }),
  yC = (e, t) => ({ ...lC(e), options: [e, t] }),
  wC = (e, t) => ({ ...fC(e), options: [e, t] });
var EC = "Arrow",
  Hy = p.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return N.jsx(Se.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : N.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Hy.displayName = EC;
var bC = Hy;
function SC(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = p.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: c, children: g, ...w } = f,
        v = (c == null ? void 0 : c[e][l]) || a,
        E = p.useMemo(() => w, Object.values(w));
      return N.jsx(v.Provider, { value: E, children: g });
    }
    function d(f, c) {
      const g = (c == null ? void 0 : c[e][l]) || a,
        w = p.useContext(g);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, d];
  }
  const o = () => {
    const i = n.map((s) => p.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return p.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, xC(o, ...t)];
}
function xC(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function CC(e) {
  const [t, n] = p.useState(void 0);
  return (
    br(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (s = u.inlineSize), (a = u.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Ky = "Popper",
  [Gy, Yy] = SC(Ky),
  [cD, Qy] = Gy(Ky),
  qy = "PopperAnchor",
  Xy = p.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Qy(qy, n),
      s = p.useRef(null),
      a = Mt(t, s);
    return (
      p.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : N.jsx(Se.div, { ...o, ref: a })
    );
  });
Xy.displayName = qy;
var Lf = "PopperContent",
  [_C, TC] = Gy(Lf),
  Jy = p.forwardRef((e, t) => {
    var Ue, Oe, ke, X, Zt, De;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: f = "partial",
        hideWhenDetached: c = !1,
        updatePositionStrategy: g = "optimized",
        onPlaced: w,
        ...v
      } = e,
      E = Qy(Lf, n),
      [m, h] = p.useState(null),
      y = Mt(t, (ot) => h(ot)),
      [b, S] = p.useState(null),
      C = CC(b),
      _ = (C == null ? void 0 : C.width) ?? 0,
      x = (C == null ? void 0 : C.height) ?? 0,
      O = r + (i !== "center" ? "-" + i : ""),
      P =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      M = Array.isArray(u) ? u : [u],
      L = M.length > 0,
      B = { padding: P, boundary: M.filter(IC), altBoundary: L },
      {
        refs: D,
        floatingStyles: H,
        placement: j,
        isPositioned: V,
        middlewareData: T,
      } = dC({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...ot) =>
          rC(...ot, { animationFrame: g === "always" }),
        elements: { reference: E.anchor },
        middleware: [
          hC({ mainAxis: o + x, alignmentAxis: s }),
          l &&
            pC({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? mC() : void 0,
              ...B,
            }),
          l && gC({ ...B }),
          vC({
            ...B,
            apply: ({
              elements: ot,
              rects: Ye,
              availableWidth: Ft,
              availableHeight: Qe,
            }) => {
              const { width: so, height: ao } = Ye.reference,
                we = ot.floating.style;
              we.setProperty("--radix-popper-available-width", `${Ft}px`),
                we.setProperty("--radix-popper-available-height", `${Qe}px`),
                we.setProperty("--radix-popper-anchor-width", `${so}px`),
                we.setProperty("--radix-popper-anchor-height", `${ao}px`);
            },
          }),
          b && wC({ element: b, padding: a }),
          PC({ arrowWidth: _, arrowHeight: x }),
          c && yC({ strategy: "referenceHidden", ...B }),
        ],
      }),
      [A, $] = t0(j),
      F = Yt(w);
    br(() => {
      V && (F == null || F());
    }, [V, F]);
    const z = (Ue = T.arrow) == null ? void 0 : Ue.x,
      K = (Oe = T.arrow) == null ? void 0 : Oe.y,
      ee = ((ke = T.arrow) == null ? void 0 : ke.centerOffset) !== 0,
      [xe, Y] = p.useState();
    return (
      br(() => {
        m && Y(window.getComputedStyle(m).zIndex);
      }, [m]),
      N.jsx("div", {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: V ? H.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: xe,
          "--radix-popper-transform-origin": [
            (X = T.transformOrigin) == null ? void 0 : X.x,
            (Zt = T.transformOrigin) == null ? void 0 : Zt.y,
          ].join(" "),
          ...(((De = T.hide) == null ? void 0 : De.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: N.jsx(_C, {
          scope: n,
          placedSide: A,
          onArrowChange: S,
          arrowX: z,
          arrowY: K,
          shouldHideArrow: ee,
          children: N.jsx(Se.div, {
            "data-side": A,
            "data-align": $,
            ...v,
            ref: y,
            style: { ...v.style, animation: V ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Jy.displayName = Lf;
var Zy = "PopperArrow",
  kC = { top: "bottom", right: "left", bottom: "top", left: "right" },
  e0 = p.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = TC(Zy, r),
      s = kC[i.placedSide];
    return N.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: N.jsx(bC, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
e0.displayName = Zy;
function IC(e) {
  return e !== null;
}
var PC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var E, m, h;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((E = o.arrow) == null ? void 0 : E.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [u, d] = t0(n),
      f = { start: "0%", center: "50%", end: "100%" }[d],
      c = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
      g = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
    let w = "",
      v = "";
    return (
      u === "bottom"
        ? ((w = s ? f : `${c}px`), (v = `${-l}px`))
        : u === "top"
          ? ((w = s ? f : `${c}px`), (v = `${r.floating.height + l}px`))
          : u === "right"
            ? ((w = `${-l}px`), (v = s ? f : `${g}px`))
            : u === "left" &&
              ((w = `${r.floating.width + l}px`), (v = s ? f : `${g}px`)),
      { data: { x: w, y: v } }
    );
  },
});
function t0(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var RC = Xy,
  AC = Jy,
  OC = e0,
  [Ql, dD] = xf("Tooltip", [Yy]),
  Ff = Yy(),
  n0 = "TooltipProvider",
  DC = 700,
  Mp = "tooltip.open",
  [NC, r0] = Ql(n0),
  o0 = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = DC,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      [s, a] = p.useState(!0),
      l = p.useRef(!1),
      u = p.useRef(0);
    return (
      p.useEffect(() => {
        const d = u.current;
        return () => window.clearTimeout(d);
      }, []),
      N.jsx(NC, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: p.useCallback(() => {
          window.clearTimeout(u.current), a(!1);
        }, []),
        onClose: p.useCallback(() => {
          window.clearTimeout(u.current),
            (u.current = window.setTimeout(() => a(!0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: p.useCallback((d) => {
          l.current = d;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
o0.displayName = n0;
var i0 = "Tooltip",
  [fD, ql] = Ql(i0),
  ld = "TooltipTrigger",
  MC = p.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = ql(ld, n),
      i = r0(ld, n),
      s = Ff(n),
      a = p.useRef(null),
      l = Mt(t, a, o.onTriggerChange),
      u = p.useRef(!1),
      d = p.useRef(!1),
      f = p.useCallback(() => (u.current = !1), []);
    return (
      p.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f],
      ),
      N.jsx(RC, {
        asChild: !0,
        ...s,
        children: N.jsx(Se.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: ie(e.onPointerMove, (c) => {
            c.pointerType !== "touch" &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: ie(e.onPointerLeave, () => {
            o.onTriggerLeave(), (d.current = !1);
          }),
          onPointerDown: ie(e.onPointerDown, () => {
            (u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 });
          }),
          onFocus: ie(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: ie(e.onBlur, o.onClose),
          onClick: ie(e.onClick, o.onClose),
        }),
      })
    );
  });
MC.displayName = ld;
var LC = "TooltipPortal",
  [hD, FC] = Ql(LC, { forceMount: void 0 }),
  ti = "TooltipContent",
  s0 = p.forwardRef((e, t) => {
    const n = FC(ti, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = ql(ti, e.__scopeTooltip);
    return N.jsx(Bl, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? N.jsx(a0, { side: o, ...i, ref: t })
        : N.jsx(UC, { side: o, ...i, ref: t }),
    });
  }),
  UC = p.forwardRef((e, t) => {
    const n = ql(ti, e.__scopeTooltip),
      r = r0(ti, e.__scopeTooltip),
      o = p.useRef(null),
      i = Mt(t, o),
      [s, a] = p.useState(null),
      { trigger: l, onClose: u } = n,
      d = o.current,
      { onPointerInTransitChange: f } = r,
      c = p.useCallback(() => {
        a(null), f(!1);
      }, [f]),
      g = p.useCallback(
        (w, v) => {
          const E = w.currentTarget,
            m = { x: w.clientX, y: w.clientY },
            h = BC(m, E.getBoundingClientRect()),
            y = VC(m, h),
            b = WC(v.getBoundingClientRect()),
            S = KC([...y, ...b]);
          a(S), f(!0);
        },
        [f],
      );
    return (
      p.useEffect(() => () => c(), [c]),
      p.useEffect(() => {
        if (l && d) {
          const w = (E) => g(E, d),
            v = (E) => g(E, l);
          return (
            l.addEventListener("pointerleave", w),
            d.addEventListener("pointerleave", v),
            () => {
              l.removeEventListener("pointerleave", w),
                d.removeEventListener("pointerleave", v);
            }
          );
        }
      }, [l, d, g, c]),
      p.useEffect(() => {
        if (s) {
          const w = (v) => {
            const E = v.target,
              m = { x: v.clientX, y: v.clientY },
              h =
                (l == null ? void 0 : l.contains(E)) ||
                (d == null ? void 0 : d.contains(E)),
              y = !HC(m, s);
            h ? c() : y && (c(), u());
          };
          return (
            document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
          );
        }
      }, [l, d, s, u, c]),
      N.jsx(a0, { ...e, ref: i })
    );
  }),
  [zC, $C] = Ql(i0, { isInside: !1 }),
  a0 = p.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...a
      } = e,
      l = ql(ti, n),
      u = Ff(n),
      { onClose: d } = l;
    return (
      p.useEffect(
        () => (
          document.addEventListener(Mp, d),
          () => document.removeEventListener(Mp, d)
        ),
        [d],
      ),
      p.useEffect(() => {
        if (l.trigger) {
          const f = (c) => {
            const g = c.target;
            g != null && g.contains(l.trigger) && d();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [l.trigger, d]),
      N.jsx(Cf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: N.jsxs(AC, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            N.jsx(uy, { children: r }),
            N.jsx(zC, {
              scope: n,
              isInside: !0,
              children: N.jsx(qb, {
                id: l.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
s0.displayName = ti;
var l0 = "TooltipArrow",
  jC = p.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Ff(n);
    return $C(l0, n).isInside ? null : N.jsx(OC, { ...o, ...r, ref: t });
  });
jC.displayName = l0;
function BC(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function VC(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function WC(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function HC(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x,
      l = t[i].y,
      u = t[s].x,
      d = t[s].y;
    l > r != d > r && n < ((u - a) * (r - l)) / (d - l) + a && (o = !o);
  }
  return o;
}
function KC(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    GC(t)
  );
}
function GC(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var pD = o0,
  mD = s0,
  Xl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Jl = typeof window > "u" || "Deno" in globalThis;
function jt() {}
function YC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function QC(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function qC(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Lp(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function XC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fp(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== Uf(s, t.options)) return !1;
    } else if (!gs(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Up(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (ms(t.options.mutationKey) !== ms(i)) return !1;
    } else if (!gs(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function Uf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ms)(e);
}
function ms(e) {
  return JSON.stringify(e, (t, n) =>
    ud(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n,
  );
}
function gs(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? !Object.keys(t).some((n) => !gs(e[n], t[n]))
        : !1;
}
function u0(e, t) {
  if (e === t) return e;
  const n = zp(e) && zp(t);
  if (n || (ud(e) && ud(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      a = n ? [] : {};
    let l = 0;
    for (let u = 0; u < s; u++) {
      const d = n ? u : i[u];
      ((!n && r.includes(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), l++)
        : ((a[d] = u0(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && l++);
    }
    return o === s && l === o ? e : a;
  }
  return t;
}
function zp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ud(e) {
  if (!$p(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !$p(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function $p(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function JC(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function ZC(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? u0(e, t)
      : t;
}
function e_(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function t_(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var zf = Symbol();
function c0(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === zf
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Br,
  tr,
  Uo,
  zm,
  n_ =
    ((zm = class extends Xl {
      constructor() {
        super();
        ne(this, Br);
        ne(this, tr);
        ne(this, Uo);
        q(this, Uo, (t) => {
          if (!Jl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        k(this, tr) || this.setEventListener(k(this, Uo));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = k(this, tr)) == null || t.call(this), q(this, tr, void 0));
      }
      setEventListener(t) {
        var n;
        q(this, Uo, t),
          (n = k(this, tr)) == null || n.call(this),
          q(
            this,
            tr,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          );
      }
      setFocused(t) {
        k(this, Br) !== t && (q(this, Br, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof k(this, Br) == "boolean"
          ? k(this, Br)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Br = new WeakMap()),
    (tr = new WeakMap()),
    (Uo = new WeakMap()),
    zm),
  d0 = new n_(),
  zo,
  nr,
  $o,
  $m,
  r_ =
    (($m = class extends Xl {
      constructor() {
        super();
        ne(this, zo, !0);
        ne(this, nr);
        ne(this, $o);
        q(this, $o, (t) => {
          if (!Jl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        k(this, nr) || this.setEventListener(k(this, $o));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = k(this, nr)) == null || t.call(this), q(this, nr, void 0));
      }
      setEventListener(t) {
        var n;
        q(this, $o, t),
          (n = k(this, nr)) == null || n.call(this),
          q(this, nr, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        k(this, zo) !== t &&
          (q(this, zo, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return k(this, zo);
      }
    }),
    (zo = new WeakMap()),
    (nr = new WeakMap()),
    ($o = new WeakMap()),
    $m),
  dl = new r_();
function o_() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function i_(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function f0(e) {
  return (e ?? "online") === "online" ? dl.isOnline() : !0;
}
var h0 = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Wu(e) {
  return e instanceof h0;
}
function p0(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = o_(),
    s = (v) => {
      var E;
      r || (c(new h0(v)), (E = e.abort) == null || E.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      d0.isFocused() &&
      (e.networkMode === "always" || dl.isOnline()) &&
      e.canRun(),
    d = () => f0(e.networkMode) && e.canRun(),
    f = (v) => {
      var E;
      r ||
        ((r = !0),
        (E = e.onSuccess) == null || E.call(e, v),
        o == null || o(),
        i.resolve(v));
    },
    c = (v) => {
      var E;
      r ||
        ((r = !0),
        (E = e.onError) == null || E.call(e, v),
        o == null || o(),
        i.reject(v));
    },
    g = () =>
      new Promise((v) => {
        var E;
        (o = (m) => {
          (r || u()) && v(m);
        }),
          (E = e.onPause) == null || E.call(e);
      }).then(() => {
        var v;
        (o = void 0), r || (v = e.onContinue) == null || v.call(e);
      }),
    w = () => {
      if (r) return;
      let v;
      const E = n === 0 ? e.initialPromise : void 0;
      try {
        v = E ?? e.fn();
      } catch (m) {
        v = Promise.reject(m);
      }
      Promise.resolve(v)
        .then(f)
        .catch((m) => {
          var C;
          if (r) return;
          const h = e.retry ?? (Jl ? 0 : 3),
            y = e.retryDelay ?? i_,
            b = typeof y == "function" ? y(n, m) : y,
            S =
              h === !0 ||
              (typeof h == "number" && n < h) ||
              (typeof h == "function" && h(n, m));
          if (t || !S) {
            c(m);
            return;
          }
          n++,
            (C = e.onFail) == null || C.call(e, n, m),
            JC(b)
              .then(() => (u() ? void 0 : g()))
              .then(() => {
                t ? c(m) : w();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: d,
    start: () => (d() ? w() : g().then(w), i),
  };
}
function s_() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    o = (a) => setTimeout(a, 0);
  const i = (a) => {
      t
        ? e.push(a)
        : o(() => {
            n(a);
          });
    },
    s = () => {
      const a = e;
      (e = []),
        a.length &&
          o(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        t--, t || s();
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      o = a;
    },
  };
}
var et = s_(),
  Vr,
  jm,
  m0 =
    ((jm = class {
      constructor() {
        ne(this, Vr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          QC(this.gcTime) &&
            q(
              this,
              Vr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Jl ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        k(this, Vr) && (clearTimeout(k(this, Vr)), q(this, Vr, void 0));
      }
    }),
    (Vr = new WeakMap()),
    jm),
  jo,
  Bo,
  kt,
  Be,
  Cs,
  Wr,
  Bt,
  bn,
  Bm,
  a_ =
    ((Bm = class extends m0 {
      constructor(t) {
        super();
        ne(this, Bt);
        ne(this, jo);
        ne(this, Bo);
        ne(this, kt);
        ne(this, Be);
        ne(this, Cs);
        ne(this, Wr);
        q(this, Wr, !1),
          q(this, Cs, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          q(this, kt, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          q(this, jo, u_(this.options)),
          (this.state = t.state ?? k(this, jo)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = k(this, Be)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...k(this, Cs), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          k(this, kt).remove(this);
      }
      setData(t, n) {
        const r = ZC(this.state.data, t, this.options);
        return (
          ze(this, Bt, bn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        ze(this, Bt, bn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = k(this, Be)) == null ? void 0 : r.promise;
        return (
          (o = k(this, Be)) == null || o.cancel(t),
          n ? n.then(jt).catch(jt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(k(this, jo));
      }
      isActive() {
        return this.observers.some((t) => XC(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === zf ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !qC(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = k(this, Be)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = k(this, Be)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          k(this, kt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (k(this, Be) &&
              (k(this, Wr)
                ? k(this, Be).cancel({ revert: !0 })
                : k(this, Be).cancelRetry()),
            this.scheduleGc()),
          k(this, kt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ze(this, Bt, bn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var l, u, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (k(this, Be))
            return k(this, Be).continueRetry(), k(this, Be).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((c) => c.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          o = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (q(this, Wr, !0), r.signal),
            });
          },
          i = () => {
            const f = c0(this.options, n),
              c = { queryKey: this.queryKey, meta: this.meta };
            return (
              o(c),
              q(this, Wr, !1),
              this.options.persister ? this.options.persister(f, c, this) : f(c)
            );
          },
          s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        o(s),
          (l = this.options.behavior) == null || l.onFetch(s, this),
          q(this, Bo, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = s.fetchOptions) == null ? void 0 : u.meta)) &&
            ze(this, Bt, bn).call(this, {
              type: "fetch",
              meta: (d = s.fetchOptions) == null ? void 0 : d.meta,
            });
        const a = (f) => {
          var c, g, w, v;
          (Wu(f) && f.silent) ||
            ze(this, Bt, bn).call(this, { type: "error", error: f }),
            Wu(f) ||
              ((g = (c = k(this, kt).config).onError) == null ||
                g.call(c, f, this),
              (v = (w = k(this, kt).config).onSettled) == null ||
                v.call(w, this.state.data, f, this)),
            this.scheduleGc();
        };
        return (
          q(
            this,
            Be,
            p0({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: s.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var c, g, w, v;
                if (f === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (E) {
                  a(E);
                  return;
                }
                (g = (c = k(this, kt).config).onSuccess) == null ||
                  g.call(c, f, this),
                  (v = (w = k(this, kt).config).onSettled) == null ||
                    v.call(w, f, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (f, c) => {
                ze(this, Bt, bn).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: c,
                });
              },
              onPause: () => {
                ze(this, Bt, bn).call(this, { type: "pause" });
              },
              onContinue: () => {
                ze(this, Bt, bn).call(this, { type: "continue" });
              },
              retry: s.options.retry,
              retryDelay: s.options.retryDelay,
              networkMode: s.options.networkMode,
              canRun: () => !0,
            }),
          ),
          k(this, Be).start()
        );
      }
    }),
    (jo = new WeakMap()),
    (Bo = new WeakMap()),
    (kt = new WeakMap()),
    (Be = new WeakMap()),
    (Cs = new WeakMap()),
    (Wr = new WeakMap()),
    (Bt = new WeakSet()),
    (bn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...l_(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = t.error;
            return Wu(o) && o.revert && k(this, Bo)
              ? { ...k(this, Bo), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        et.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            k(this, kt).notify({ query: this, type: "updated", action: t });
        });
    }),
    Bm);
function l_(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: f0(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function u_(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var sn,
  Vm,
  c_ =
    ((Vm = class extends Xl {
      constructor(t = {}) {
        super();
        ne(this, sn);
        (this.config = t), q(this, sn, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? Uf(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new a_({
              cache: this,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        k(this, sn).has(t.queryHash) ||
          (k(this, sn).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = k(this, sn).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && k(this, sn).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        et.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return k(this, sn).get(t);
      }
      getAll() {
        return [...k(this, sn).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Fp(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Fp(t, r)) : n;
      }
      notify(t) {
        et.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        et.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        et.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (sn = new WeakMap()),
    Vm),
  an,
  Je,
  Hr,
  ln,
  Hn,
  Wm,
  d_ =
    ((Wm = class extends m0 {
      constructor(t) {
        super();
        ne(this, ln);
        ne(this, an);
        ne(this, Je);
        ne(this, Hr);
        (this.mutationId = t.mutationId),
          q(this, Je, t.mutationCache),
          q(this, an, []),
          (this.state = t.state || f_()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        k(this, an).includes(t) ||
          (k(this, an).push(t),
          this.clearGcTimeout(),
          k(this, Je).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        q(
          this,
          an,
          k(this, an).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          k(this, Je).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        k(this, an).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : k(this, Je).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = k(this, Hr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, i, s, a, l, u, d, f, c, g, w, v, E, m, h, y, b, S, C, _;
        q(
          this,
          Hr,
          p0({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (x, O) => {
              ze(this, ln, Hn).call(this, {
                type: "failed",
                failureCount: x,
                error: O,
              });
            },
            onPause: () => {
              ze(this, ln, Hn).call(this, { type: "pause" });
            },
            onContinue: () => {
              ze(this, ln, Hn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => k(this, Je).canRun(this),
          }),
        );
        const n = this.state.status === "pending",
          r = !k(this, Hr).canStart();
        try {
          if (!n) {
            ze(this, ln, Hn).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (o = k(this, Je).config).onMutate) == null
                ? void 0
                : i.call(o, t, this));
            const O = await ((a = (s = this.options).onMutate) == null
              ? void 0
              : a.call(s, t));
            O !== this.state.context &&
              ze(this, ln, Hn).call(this, {
                type: "pending",
                context: O,
                variables: t,
                isPaused: r,
              });
          }
          const x = await k(this, Hr).start();
          return (
            await ((u = (l = k(this, Je).config).onSuccess) == null
              ? void 0
              : u.call(l, x, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, x, t, this.state.context)),
            await ((g = (c = k(this, Je).config).onSettled) == null
              ? void 0
              : g.call(
                  c,
                  x,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((v = (w = this.options).onSettled) == null
              ? void 0
              : v.call(w, x, null, t, this.state.context)),
            ze(this, ln, Hn).call(this, { type: "success", data: x }),
            x
          );
        } catch (x) {
          try {
            throw (
              (await ((m = (E = k(this, Je).config).onError) == null
                ? void 0
                : m.call(E, x, t, this.state.context, this)),
              await ((y = (h = this.options).onError) == null
                ? void 0
                : y.call(h, x, t, this.state.context)),
              await ((S = (b = k(this, Je).config).onSettled) == null
                ? void 0
                : S.call(
                    b,
                    void 0,
                    x,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((_ = (C = this.options).onSettled) == null
                ? void 0
                : _.call(C, void 0, x, t, this.state.context)),
              x)
            );
          } finally {
            ze(this, ln, Hn).call(this, { type: "error", error: x });
          }
        } finally {
          k(this, Je).runNext(this);
        }
      }
    }),
    (an = new WeakMap()),
    (Je = new WeakMap()),
    (Hr = new WeakMap()),
    (ln = new WeakSet()),
    (Hn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        et.batch(() => {
          k(this, an).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            k(this, Je).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Wm);
function f_() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var pt,
  _s,
  Hm,
  h_ =
    ((Hm = class extends Xl {
      constructor(t = {}) {
        super();
        ne(this, pt);
        ne(this, _s);
        (this.config = t), q(this, pt, new Map()), q(this, _s, Date.now());
      }
      build(t, n, r) {
        const o = new d_({
          mutationCache: this,
          mutationId: ++Hs(this, _s)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        const n = ha(t),
          r = k(this, pt).get(n) ?? [];
        r.push(t),
          k(this, pt).set(n, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const n = ha(t);
        if (k(this, pt).has(n)) {
          const o =
            (r = k(this, pt).get(n)) == null
              ? void 0
              : r.filter((i) => i !== t);
          o && (o.length === 0 ? k(this, pt).delete(n) : k(this, pt).set(n, o));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = k(this, pt).get(ha(t))) == null
            ? void 0
            : r.find((o) => o.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = k(this, pt).get(ha(t))) == null
            ? void 0
            : r.find((o) => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        et.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...k(this, pt).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Up(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Up(t, n));
      }
      notify(t) {
        et.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return et.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(jt))),
        );
      }
    }),
    (pt = new WeakMap()),
    (_s = new WeakMap()),
    Hm);
function ha(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function jp(e) {
  return {
    onFetch: (t, n) => {
      var d, f, c, g, w;
      const r = t.options,
        o =
          (c =
            (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : c.direction,
        i = ((g = t.state.data) == null ? void 0 : g.pages) || [],
        s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let v = !1;
        const E = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (v = !0)
                  : t.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                t.signal
              ),
            });
          },
          m = c0(t.options, t.fetchOptions),
          h = async (y, b, S) => {
            if (v) return Promise.reject();
            if (b == null && y.pages.length) return Promise.resolve(y);
            const C = {
              queryKey: t.queryKey,
              pageParam: b,
              direction: S ? "backward" : "forward",
              meta: t.options.meta,
            };
            E(C);
            const _ = await m(C),
              { maxPages: x } = t.options,
              O = S ? t_ : e_;
            return {
              pages: O(y.pages, _, x),
              pageParams: O(y.pageParams, b, x),
            };
          };
        if (o && i.length) {
          const y = o === "backward",
            b = y ? p_ : Bp,
            S = { pages: i, pageParams: s },
            C = b(r, S);
          a = await h(S, C, y);
        } else {
          const y = e ?? i.length;
          do {
            const b = l === 0 ? (s[0] ?? r.initialPageParam) : Bp(r, a);
            if (l > 0 && b == null) break;
            (a = await h(a, b)), l++;
          } while (l < y);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var v, E;
            return (E = (v = t.options).persister) == null
              ? void 0
              : E.call(
                  v,
                  u,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Bp(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function p_(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var ve,
  rr,
  or,
  Vo,
  Wo,
  ir,
  Ho,
  Ko,
  Km,
  gD =
    ((Km = class {
      constructor(e = {}) {
        ne(this, ve);
        ne(this, rr);
        ne(this, or);
        ne(this, Vo);
        ne(this, Wo);
        ne(this, ir);
        ne(this, Ho);
        ne(this, Ko);
        q(this, ve, e.queryCache || new c_()),
          q(this, rr, e.mutationCache || new h_()),
          q(this, or, e.defaultOptions || {}),
          q(this, Vo, new Map()),
          q(this, Wo, new Map()),
          q(this, ir, 0);
      }
      mount() {
        Hs(this, ir)._++,
          k(this, ir) === 1 &&
            (q(
              this,
              Ho,
              d0.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), k(this, ve).onFocus());
              }),
            ),
            q(
              this,
              Ko,
              dl.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), k(this, ve).onOnline());
              }),
            ));
      }
      unmount() {
        var e, t;
        Hs(this, ir)._--,
          k(this, ir) === 0 &&
            ((e = k(this, Ho)) == null || e.call(this),
            q(this, Ho, void 0),
            (t = k(this, Ko)) == null || t.call(this),
            q(this, Ko, void 0));
      }
      isFetching(e) {
        return k(this, ve).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return k(this, rr).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = k(this, ve).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = k(this, ve).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(Lp(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return k(this, ve)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = k(this, ve).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = YC(t, i);
        if (s !== void 0)
          return k(this, ve)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return et.batch(() =>
          k(this, ve)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = k(this, ve).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = k(this, ve);
        et.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = k(this, ve),
          r = { type: "active", ...e };
        return et.batch(
          () => (
            n.findAll(e).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(r, t)
          ),
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = et.batch(() =>
            k(this, ve)
              .findAll(e)
              .map((o) => o.cancel(n)),
          );
        return Promise.all(r).then(jt).catch(jt);
      }
      invalidateQueries(e = {}, t = {}) {
        return et.batch(() => {
          if (
            (k(this, ve)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = et.batch(() =>
            k(this, ve)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(jt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              }),
          );
        return Promise.all(r).then(jt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = k(this, ve).build(this, t);
        return n.isStaleByTime(Lp(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(jt).catch(jt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = jp(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(jt).catch(jt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = jp(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return dl.isOnline()
          ? k(this, rr).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return k(this, ve);
      }
      getMutationCache() {
        return k(this, rr);
      }
      getDefaultOptions() {
        return k(this, or);
      }
      setDefaultOptions(e) {
        q(this, or, e);
      }
      setQueryDefaults(e, t) {
        k(this, Vo).set(ms(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...k(this, Vo).values()];
        let n = {};
        return (
          t.forEach((r) => {
            gs(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        k(this, Wo).set(ms(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...k(this, Wo).values()];
        let n = {};
        return (
          t.forEach((r) => {
            gs(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...k(this, or).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Uf(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === zf && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...k(this, or).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        k(this, ve).clear(), k(this, rr).clear();
      }
    }),
    (ve = new WeakMap()),
    (rr = new WeakMap()),
    (or = new WeakMap()),
    (Vo = new WeakMap()),
    (Wo = new WeakMap()),
    (ir = new WeakMap()),
    (Ho = new WeakMap()),
    (Ko = new WeakMap()),
    Km),
  m_ = p.createContext(void 0),
  vD = ({ client: e, children: t }) => (
    p.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    N.jsx(m_.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fl() {
  return (
    (fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fl.apply(this, arguments)
  );
}
var lr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(lr || (lr = {}));
const Vp = "popstate";
function g_(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return cd(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : v0(o);
  }
  return y_(t, n, null, e);
}
function ct(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function g0(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function v_() {
  return Math.random().toString(36).substr(2, 8);
}
function Wp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function cd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    fl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Zl(t) : t,
      { state: n, key: (t && t.key) || r || v_() },
    )
  );
}
function v0(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Zl(e) {
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
function y_(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = lr.Pop,
    l = null,
    u = d();
  u == null && ((u = 0), s.replaceState(fl({}, s.state, { idx: u }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = lr.Pop;
    let E = d(),
      m = E == null ? null : E - u;
    (u = E), l && l({ action: a, location: v.location, delta: m });
  }
  function c(E, m) {
    a = lr.Push;
    let h = cd(v.location, E, m);
    u = d() + 1;
    let y = Wp(h, u),
      b = v.createHref(h);
    try {
      s.pushState(y, "", b);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      o.location.assign(b);
    }
    i && l && l({ action: a, location: v.location, delta: 1 });
  }
  function g(E, m) {
    a = lr.Replace;
    let h = cd(v.location, E, m);
    u = d();
    let y = Wp(h, u),
      b = v.createHref(h);
    s.replaceState(y, "", b),
      i && l && l({ action: a, location: v.location, delta: 0 });
  }
  function w(E) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof E == "string" ? E : v0(E);
    return (
      (h = h.replace(/ $/, "%20")),
      ct(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          h,
      ),
      new URL(h, m)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(E) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Vp, f),
        (l = E),
        () => {
          o.removeEventListener(Vp, f), (l = null);
        }
      );
    },
    createHref(E) {
      return t(o, E);
    },
    createURL: w,
    encodeLocation(E) {
      let m = w(E);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: c,
    replace: g,
    go(E) {
      return s.go(E);
    },
  };
  return v;
}
var Hp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Hp || (Hp = {}));
function w_(e, t, n) {
  return n === void 0 && (n = "/"), E_(e, t, n, !1);
}
function E_(e, t, n, r) {
  let o = typeof t == "string" ? Zl(t) : t,
    i = E0(o.pathname || "/", n);
  if (i == null) return null;
  let s = y0(e);
  b_(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = O_(i);
    a = R_(s[l], u, r);
  }
  return a;
}
function y0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (ct(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Do([r, l.relativePath]),
      d = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (ct(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      y0(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: I_(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of w0(i.path)) o(i, s, l);
    }),
    t
  );
}
function w0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = w0(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function b_(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : P_(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const S_ = /^:[\w-]+$/,
  x_ = 3,
  C_ = 2,
  __ = 1,
  T_ = 10,
  k_ = -2,
  Kp = (e) => e === "*";
function I_(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Kp) && (r += k_),
    t && (r += C_),
    n
      .filter((o) => !Kp(o))
      .reduce((o, i) => o + (S_.test(i) ? x_ : i === "" ? __ : T_), r)
  );
}
function P_(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function R_(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      f = Gp(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        d,
      ),
      c = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Gp(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          d,
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: Do([i, f.pathname]),
        pathnameBase: D_(Do([i, f.pathnameBase])),
        route: c,
      }),
      f.pathnameBase !== "/" && (i = Do([i, f.pathnameBase]));
  }
  return s;
}
function Gp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = A_(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: c, isOptional: g } = d;
      if (c === "*") {
        let v = a[f] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[f];
      return (
        g && !w ? (u[c] = void 0) : (u[c] = (w || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function A_(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    g0(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function O_(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      g0(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function E0(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Do = (e) => e.join("/").replace(/\/\/+/g, "/"),
  D_ = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function N_(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const b0 = ["post", "put", "patch", "delete"];
new Set(b0);
const M_ = ["get", ...b0];
new Set(M_);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hl() {
  return (
    (hl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hl.apply(this, arguments)
  );
}
const L_ = p.createContext(null),
  F_ = p.createContext(null),
  S0 = p.createContext(null),
  eu = p.createContext(null),
  tu = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  x0 = p.createContext(null);
function $f() {
  return p.useContext(eu) != null;
}
function U_() {
  return $f() || ct(!1), p.useContext(eu).location;
}
function z_(e, t) {
  return $_(e, t);
}
function $_(e, t, n, r) {
  $f() || ct(!1);
  let { navigator: o } = p.useContext(S0),
    { matches: i } = p.useContext(tu),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = U_(),
    d;
  if (t) {
    var f;
    let E = typeof t == "string" ? Zl(t) : t;
    l === "/" || ((f = E.pathname) != null && f.startsWith(l)) || ct(!1),
      (d = E);
  } else d = u;
  let c = d.pathname || "/",
    g = c;
  if (l !== "/") {
    let E = l.replace(/^\//, "").split("/");
    g = "/" + c.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let w = w_(e, { pathname: g }),
    v = H_(
      w &&
        w.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, a, E.params),
            pathname: Do([
              l,
              o.encodeLocation
                ? o.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? l
                : Do([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && v
    ? p.createElement(
        eu.Provider,
        {
          value: {
            location: hl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d,
            ),
            navigationType: lr.Pop,
          },
        },
        v,
      )
    : v;
}
function j_() {
  let e = Q_(),
    t = N_(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return p.createElement(
    p.Fragment,
    null,
    p.createElement("h2", null, "Unexpected Application Error!"),
    p.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? p.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const B_ = p.createElement(j_, null);
class V_ extends p.Component {
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
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? p.createElement(
          tu.Provider,
          { value: this.props.routeContext },
          p.createElement(x0.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function W_(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = p.useContext(L_);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    p.createElement(tu.Provider, { value: t }, r)
  );
}
function H_(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let d = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    d >= 0 || ct(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let f = s[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: c, errors: g } = n,
          w =
            f.route.loader &&
            c[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0);
        if (f.route.lazy || w) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, f, c) => {
    let g,
      w = !1,
      v = null,
      E = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (v = f.route.errorElement || B_),
      l &&
        (u < 0 && c === 0
          ? ((w = !0), (E = null))
          : u === c &&
            ((w = !0), (E = f.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, c + 1)),
      h = () => {
        let y;
        return (
          g
            ? (y = v)
            : w
              ? (y = E)
              : f.route.Component
                ? (y = p.createElement(f.route.Component, null))
                : f.route.element
                  ? (y = f.route.element)
                  : (y = d),
          p.createElement(W_, {
            match: f,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || c === 0)
      ? p.createElement(V_, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var dd = (function (e) {
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
})(dd || {});
function K_(e) {
  let t = p.useContext(F_);
  return t || ct(!1), t;
}
function G_(e) {
  let t = p.useContext(tu);
  return t || ct(!1), t;
}
function Y_(e) {
  let t = G_(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ct(!1), n.route.id;
}
function Q_() {
  var e;
  let t = p.useContext(x0),
    n = K_(dd.UseRouteError),
    r = Y_(dd.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function q_(e) {
  ct(!1);
}
function X_(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = lr.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  $f() && ct(!1);
  let l = t.replace(/^\/*/, "/"),
    u = p.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: hl({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s],
    );
  typeof r == "string" && (r = Zl(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: c = "",
      state: g = null,
      key: w = "default",
    } = r,
    v = p.useMemo(() => {
      let E = E0(d, l);
      return E == null
        ? null
        : {
            location: { pathname: E, search: f, hash: c, state: g, key: w },
            navigationType: o,
          };
    }, [l, d, f, c, g, w, o]);
  return v == null
    ? null
    : p.createElement(
        S0.Provider,
        { value: u },
        p.createElement(eu.Provider, { children: n, value: v }),
      );
}
function yD(e) {
  let { children: t, location: n } = e;
  return z_(fd(t), n);
}
new Promise(() => {});
function fd(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    p.Children.forEach(e, (r, o) => {
      if (!p.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === p.Fragment) {
        n.push.apply(n, fd(r.props.children, i));
        return;
      }
      r.type !== q_ && ct(!1), !r.props.index || !r.props.children || ct(!1);
      let s = {
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
      r.props.children && (s.children = fd(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const J_ = "6";
try {
  window.__reactRouterVersion = J_;
} catch {}
const Z_ = "startTransition",
  Yp = og[Z_];
function wD(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = p.useRef();
  i.current == null && (i.current = g_({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = p.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    d = p.useCallback(
      (f) => {
        u && Yp ? Yp(() => l(f)) : l(f);
      },
      [l, u],
    );
  return (
    p.useLayoutEffect(() => s.listen(d), [s, d]),
    p.createElement(X_, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var Qp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Qp || (Qp = {}));
var qp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(qp || (qp = {}));
function eT() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return p.useMemo(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    t,
  );
}
const nu =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function ui(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]";
}
function jf(e) {
  return "nodeType" in e;
}
function dt(e) {
  var t, n;
  return e
    ? ui(e)
      ? e
      : jf(e) &&
          (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null
        ? t
        : window
    : window;
}
function Bf(e) {
  const { Document: t } = dt(e);
  return e instanceof t;
}
function Os(e) {
  return ui(e) ? !1 : e instanceof dt(e).HTMLElement;
}
function C0(e) {
  return e instanceof dt(e).SVGElement;
}
function ci(e) {
  return e
    ? ui(e)
      ? e.document
      : jf(e)
        ? Bf(e)
          ? e
          : Os(e) || C0(e)
            ? e.ownerDocument
            : document
        : document
    : document;
}
const gn = nu ? p.useLayoutEffect : p.useEffect;
function Vf(e) {
  const t = p.useRef(e);
  return (
    gn(() => {
      t.current = e;
    }),
    p.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
function tT() {
  const e = p.useRef(null),
    t = p.useCallback((r, o) => {
      e.current = setInterval(r, o);
    }, []),
    n = p.useCallback(() => {
      e.current !== null && (clearInterval(e.current), (e.current = null));
    }, []);
  return [t, n];
}
function vs(e, t) {
  t === void 0 && (t = [e]);
  const n = p.useRef(e);
  return (
    gn(() => {
      n.current !== e && (n.current = e);
    }, t),
    n
  );
}
function Ds(e, t) {
  const n = p.useRef();
  return p.useMemo(() => {
    const r = e(n.current);
    return (n.current = r), r;
  }, [...t]);
}
function pl(e) {
  const t = Vf(e),
    n = p.useRef(null),
    r = p.useCallback((o) => {
      o !== n.current && (t == null || t(o, n.current)), (n.current = o);
    }, []);
  return [n, r];
}
function hd(e) {
  const t = p.useRef();
  return (
    p.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
let Hu = {};
function Ns(e, t) {
  return p.useMemo(() => {
    if (t) return t;
    const n = Hu[e] == null ? 0 : Hu[e] + 1;
    return (Hu[e] = n), e + "-" + n;
  }, [e, t]);
}
function _0(e) {
  return function (t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    return r.reduce(
      (i, s) => {
        const a = Object.entries(s);
        for (const [l, u] of a) {
          const d = i[l];
          d != null && (i[l] = d + e * u);
        }
        return i;
      },
      { ...t },
    );
  };
}
const No = _0(1),
  ml = _0(-1);
function nT(e) {
  return "clientX" in e && "clientY" in e;
}
function Wf(e) {
  if (!e) return !1;
  const { KeyboardEvent: t } = dt(e.target);
  return t && e instanceof t;
}
function rT(e) {
  if (!e) return !1;
  const { TouchEvent: t } = dt(e.target);
  return t && e instanceof t;
}
function pd(e) {
  if (rT(e)) {
    if (e.touches && e.touches.length) {
      const { clientX: t, clientY: n } = e.touches[0];
      return { x: t, y: n };
    } else if (e.changedTouches && e.changedTouches.length) {
      const { clientX: t, clientY: n } = e.changedTouches[0];
      return { x: t, y: n };
    }
  }
  return nT(e) ? { x: e.clientX, y: e.clientY } : null;
}
const gl = Object.freeze({
    Translate: {
      toString(e) {
        if (!e) return;
        const { x: t, y: n } = e;
        return (
          "translate3d(" +
          (t ? Math.round(t) : 0) +
          "px, " +
          (n ? Math.round(n) : 0) +
          "px, 0)"
        );
      },
    },
    Scale: {
      toString(e) {
        if (!e) return;
        const { scaleX: t, scaleY: n } = e;
        return "scaleX(" + t + ") scaleY(" + n + ")";
      },
    },
    Transform: {
      toString(e) {
        if (e)
          return [gl.Translate.toString(e), gl.Scale.toString(e)].join(" ");
      },
    },
    Transition: {
      toString(e) {
        let { property: t, duration: n, easing: r } = e;
        return t + " " + n + "ms " + r;
      },
    },
  }),
  Xp =
    "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function oT(e) {
  return e.matches(Xp) ? e : e.querySelector(Xp);
}
const iT = { display: "none" };
function sT(e) {
  let { id: t, value: n } = e;
  return I.createElement("div", { id: t, style: iT }, n);
}
function aT(e) {
  let { id: t, announcement: n, ariaLiveType: r = "assertive" } = e;
  const o = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap",
  };
  return I.createElement(
    "div",
    { id: t, style: o, role: "status", "aria-live": r, "aria-atomic": !0 },
    n,
  );
}
function lT() {
  const [e, t] = p.useState("");
  return {
    announce: p.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e,
  };
}
const T0 = p.createContext(null);
function uT(e) {
  const t = p.useContext(T0);
  p.useEffect(() => {
    if (!t)
      throw new Error(
        "useDndMonitor must be used within a children of <DndContext>",
      );
    return t(e);
  }, [e, t]);
}
function cT() {
  const [e] = p.useState(() => new Set()),
    t = p.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [
    p.useCallback(
      (r) => {
        let { type: o, event: i } = r;
        e.forEach((s) => {
          var a;
          return (a = s[o]) == null ? void 0 : a.call(s, i);
        });
      },
      [e],
    ),
    t,
  ];
}
const dT = {
    draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
  },
  fT = {
    onDragStart(e) {
      let { active: t } = e;
      return "Picked up draggable item " + t.id + ".";
    },
    onDragOver(e) {
      let { active: t, over: n } = e;
      return n
        ? "Draggable item " +
            t.id +
            " was moved over droppable area " +
            n.id +
            "."
        : "Draggable item " + t.id + " is no longer over a droppable area.";
    },
    onDragEnd(e) {
      let { active: t, over: n } = e;
      return n
        ? "Draggable item " + t.id + " was dropped over droppable area " + n.id
        : "Draggable item " + t.id + " was dropped.";
    },
    onDragCancel(e) {
      let { active: t } = e;
      return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
    },
  };
function hT(e) {
  let {
    announcements: t = fT,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = dT,
  } = e;
  const { announce: i, announcement: s } = lT(),
    a = Ns("DndLiveRegion"),
    [l, u] = p.useState(!1);
  if (
    (p.useEffect(() => {
      u(!0);
    }, []),
    uT(
      p.useMemo(
        () => ({
          onDragStart(f) {
            let { active: c } = f;
            i(t.onDragStart({ active: c }));
          },
          onDragMove(f) {
            let { active: c, over: g } = f;
            t.onDragMove && i(t.onDragMove({ active: c, over: g }));
          },
          onDragOver(f) {
            let { active: c, over: g } = f;
            i(t.onDragOver({ active: c, over: g }));
          },
          onDragEnd(f) {
            let { active: c, over: g } = f;
            i(t.onDragEnd({ active: c, over: g }));
          },
          onDragCancel(f) {
            let { active: c, over: g } = f;
            i(t.onDragCancel({ active: c, over: g }));
          },
        }),
        [i, t],
      ),
    ),
    !l)
  )
    return null;
  const d = I.createElement(
    I.Fragment,
    null,
    I.createElement(sT, { id: r, value: o.draggable }),
    I.createElement(aT, { id: a, announcement: s }),
  );
  return n ? cn.createPortal(d, n) : d;
}
var _e;
(function (e) {
  (e.DragStart = "dragStart"),
    (e.DragMove = "dragMove"),
    (e.DragEnd = "dragEnd"),
    (e.DragCancel = "dragCancel"),
    (e.DragOver = "dragOver"),
    (e.RegisterDroppable = "registerDroppable"),
    (e.SetDroppableDisabled = "setDroppableDisabled"),
    (e.UnregisterDroppable = "unregisterDroppable");
})(_e || (_e = {}));
function vl() {}
const Xt = Object.freeze({ x: 0, y: 0 });
function pT(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function mT(e, t) {
  let {
      data: { value: n },
    } = e,
    {
      data: { value: r },
    } = t;
  return n - r;
}
function gT(e, t) {
  let {
      data: { value: n },
    } = e,
    {
      data: { value: r },
    } = t;
  return r - n;
}
function vT(e, t) {
  if (!e || e.length === 0) return null;
  const [n] = e;
  return n[t];
}
function Jp(e, t, n) {
  return (
    t === void 0 && (t = e.left),
    n === void 0 && (n = e.top),
    { x: t + e.width * 0.5, y: n + e.height * 0.5 }
  );
}
const ED = (e) => {
  let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
  const o = Jp(t, t.left, t.top),
    i = [];
  for (const s of r) {
    const { id: a } = s,
      l = n.get(a);
    if (l) {
      const u = pT(Jp(l), o);
      i.push({ id: a, data: { droppableContainer: s, value: u } });
    }
  }
  return i.sort(mT);
};
function yT(e, t) {
  const n = Math.max(t.top, e.top),
    r = Math.max(t.left, e.left),
    o = Math.min(t.left + t.width, e.left + e.width),
    i = Math.min(t.top + t.height, e.top + e.height),
    s = o - r,
    a = i - n;
  if (r < o && n < i) {
    const l = t.width * t.height,
      u = e.width * e.height,
      d = s * a,
      f = d / (l + u - d);
    return Number(f.toFixed(4));
  }
  return 0;
}
const wT = (e) => {
  let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
  const o = [];
  for (const i of r) {
    const { id: s } = i,
      a = n.get(s);
    if (a) {
      const l = yT(a, t);
      l > 0 && o.push({ id: s, data: { droppableContainer: i, value: l } });
    }
  }
  return o.sort(gT);
};
function ET(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1,
  };
}
function k0(e, t) {
  return e && t ? { x: e.left - t.left, y: e.top - t.top } : Xt;
}
function bT(e) {
  return function (n) {
    for (
      var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1;
      i < r;
      i++
    )
      o[i - 1] = arguments[i];
    return o.reduce(
      (s, a) => ({
        ...s,
        top: s.top + e * a.y,
        bottom: s.bottom + e * a.y,
        left: s.left + e * a.x,
        right: s.right + e * a.x,
      }),
      { ...n },
    );
  };
}
const ST = bT(1);
function xT(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
  }
  return null;
}
function CT(e, t, n) {
  const r = xT(t);
  if (!r) return e;
  const { scaleX: o, scaleY: i, x: s, y: a } = r,
    l = e.left - s - (1 - o) * parseFloat(n),
    u = e.top - a - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)),
    d = o ? e.width / o : e.width,
    f = i ? e.height / i : e.height;
  return { width: d, height: f, top: u, right: l + d, bottom: u + f, left: l };
}
const _T = { ignoreTransform: !1 };
function di(e, t) {
  t === void 0 && (t = _T);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const { transform: u, transformOrigin: d } = dt(e).getComputedStyle(e);
    u && (n = CT(n, u, d));
  }
  const { top: r, left: o, width: i, height: s, bottom: a, right: l } = n;
  return { top: r, left: o, width: i, height: s, bottom: a, right: l };
}
function Zp(e) {
  return di(e, { ignoreTransform: !0 });
}
function TT(e) {
  const t = e.innerWidth,
    n = e.innerHeight;
  return { top: 0, left: 0, right: t, bottom: n, width: t, height: n };
}
function kT(e, t) {
  return (
    t === void 0 && (t = dt(e).getComputedStyle(e)), t.position === "fixed"
  );
}
function IT(e, t) {
  t === void 0 && (t = dt(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function Hf(e, t) {
  const n = [];
  function r(o) {
    if ((t != null && n.length >= t) || !o) return n;
    if (Bf(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!Os(o) || C0(o) || n.includes(o)) return n;
    const i = dt(e).getComputedStyle(o);
    return o !== e && IT(o, i) && n.push(o), kT(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function I0(e) {
  const [t] = Hf(e, 1);
  return t ?? null;
}
function Ku(e) {
  return !nu || !e
    ? null
    : ui(e)
      ? e
      : jf(e)
        ? Bf(e) || e === ci(e).scrollingElement
          ? window
          : Os(e)
            ? e
            : null
        : null;
}
function P0(e) {
  return ui(e) ? e.scrollX : e.scrollLeft;
}
function R0(e) {
  return ui(e) ? e.scrollY : e.scrollTop;
}
function md(e) {
  return { x: P0(e), y: R0(e) };
}
var Re;
(function (e) {
  (e[(e.Forward = 1)] = "Forward"), (e[(e.Backward = -1)] = "Backward");
})(Re || (Re = {}));
function A0(e) {
  return !nu || !e ? !1 : e === document.scrollingElement;
}
function O0(e) {
  const t = { x: 0, y: 0 },
    n = A0(e)
      ? { height: window.innerHeight, width: window.innerWidth }
      : { height: e.clientHeight, width: e.clientWidth },
    r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height },
    o = e.scrollTop <= t.y,
    i = e.scrollLeft <= t.x,
    s = e.scrollTop >= r.y,
    a = e.scrollLeft >= r.x;
  return {
    isTop: o,
    isLeft: i,
    isBottom: s,
    isRight: a,
    maxScroll: r,
    minScroll: t,
  };
}
const PT = { x: 0.2, y: 0.2 };
function RT(e, t, n, r, o) {
  let { top: i, left: s, right: a, bottom: l } = n;
  r === void 0 && (r = 10), o === void 0 && (o = PT);
  const { isTop: u, isBottom: d, isLeft: f, isRight: c } = O0(e),
    g = { x: 0, y: 0 },
    w = { x: 0, y: 0 },
    v = { height: t.height * o.y, width: t.width * o.x };
  return (
    !u && i <= t.top + v.height
      ? ((g.y = Re.Backward),
        (w.y = r * Math.abs((t.top + v.height - i) / v.height)))
      : !d &&
        l >= t.bottom - v.height &&
        ((g.y = Re.Forward),
        (w.y = r * Math.abs((t.bottom - v.height - l) / v.height))),
    !c && a >= t.right - v.width
      ? ((g.x = Re.Forward),
        (w.x = r * Math.abs((t.right - v.width - a) / v.width)))
      : !f &&
        s <= t.left + v.width &&
        ((g.x = Re.Backward),
        (w.x = r * Math.abs((t.left + v.width - s) / v.width))),
    { direction: g, speed: w }
  );
}
function AT(e) {
  if (e === document.scrollingElement) {
    const { innerWidth: i, innerHeight: s } = window;
    return { top: 0, left: 0, right: i, bottom: s, width: i, height: s };
  }
  const { top: t, left: n, right: r, bottom: o } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: o,
    width: e.clientWidth,
    height: e.clientHeight,
  };
}
function D0(e) {
  return e.reduce((t, n) => No(t, md(n)), Xt);
}
function OT(e) {
  return e.reduce((t, n) => t + P0(n), 0);
}
function DT(e) {
  return e.reduce((t, n) => t + R0(n), 0);
}
function NT(e, t) {
  if ((t === void 0 && (t = di), !e)) return;
  const { top: n, left: r, bottom: o, right: i } = t(e);
  I0(e) &&
    (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) &&
    e.scrollIntoView({ block: "center", inline: "center" });
}
const MT = [
  ["x", ["left", "right"], OT],
  ["y", ["top", "bottom"], DT],
];
class Kf {
  constructor(t, n) {
    (this.rect = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.right = void 0),
      (this.left = void 0);
    const r = Hf(n),
      o = D0(r);
    (this.rect = { ...t }), (this.width = t.width), (this.height = t.height);
    for (const [i, s, a] of MT)
      for (const l of s)
        Object.defineProperty(this, l, {
          get: () => {
            const u = a(r),
              d = o[i] - u;
            return this.rect[l] + d;
          },
          enumerable: !0,
        });
    Object.defineProperty(this, "rect", { enumerable: !1 });
  }
}
class Ki {
  constructor(t) {
    (this.target = void 0),
      (this.listeners = []),
      (this.removeAll = () => {
        this.listeners.forEach((n) => {
          var r;
          return (r = this.target) == null
            ? void 0
            : r.removeEventListener(...n);
        });
      }),
      (this.target = t);
  }
  add(t, n, r) {
    var o;
    (o = this.target) == null || o.addEventListener(t, n, r),
      this.listeners.push([t, n, r]);
  }
}
function LT(e) {
  const { EventTarget: t } = dt(e);
  return e instanceof t ? e : ci(e);
}
function Gu(e, t) {
  const n = Math.abs(e.x),
    r = Math.abs(e.y);
  return typeof t == "number"
    ? Math.sqrt(n ** 2 + r ** 2) > t
    : "x" in t && "y" in t
      ? n > t.x && r > t.y
      : "x" in t
        ? n > t.x
        : "y" in t
          ? r > t.y
          : !1;
}
var It;
(function (e) {
  (e.Click = "click"),
    (e.DragStart = "dragstart"),
    (e.Keydown = "keydown"),
    (e.ContextMenu = "contextmenu"),
    (e.Resize = "resize"),
    (e.SelectionChange = "selectionchange"),
    (e.VisibilityChange = "visibilitychange");
})(It || (It = {}));
function em(e) {
  e.preventDefault();
}
function FT(e) {
  e.stopPropagation();
}
var te;
(function (e) {
  (e.Space = "Space"),
    (e.Down = "ArrowDown"),
    (e.Right = "ArrowRight"),
    (e.Left = "ArrowLeft"),
    (e.Up = "ArrowUp"),
    (e.Esc = "Escape"),
    (e.Enter = "Enter"),
    (e.Tab = "Tab");
})(te || (te = {}));
const N0 = {
    start: [te.Space, te.Enter],
    cancel: [te.Esc],
    end: [te.Space, te.Enter, te.Tab],
  },
  UT = (e, t) => {
    let { currentCoordinates: n } = t;
    switch (e.code) {
      case te.Right:
        return { ...n, x: n.x + 25 };
      case te.Left:
        return { ...n, x: n.x - 25 };
      case te.Down:
        return { ...n, y: n.y + 25 };
      case te.Up:
        return { ...n, y: n.y - 25 };
    }
  };
class M0 {
  constructor(t) {
    (this.props = void 0),
      (this.autoScrollEnabled = !1),
      (this.referenceCoordinates = void 0),
      (this.listeners = void 0),
      (this.windowListeners = void 0),
      (this.props = t);
    const {
      event: { target: n },
    } = t;
    (this.props = t),
      (this.listeners = new Ki(ci(n))),
      (this.windowListeners = new Ki(dt(n))),
      (this.handleKeyDown = this.handleKeyDown.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      this.attach();
  }
  attach() {
    this.handleStart(),
      this.windowListeners.add(It.Resize, this.handleCancel),
      this.windowListeners.add(It.VisibilityChange, this.handleCancel),
      setTimeout(() => this.listeners.add(It.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const { activeNode: t, onStart: n } = this.props,
      r = t.node.current;
    r && NT(r), n(Xt);
  }
  handleKeyDown(t) {
    if (Wf(t)) {
      const { active: n, context: r, options: o } = this.props,
        {
          keyboardCodes: i = N0,
          coordinateGetter: s = UT,
          scrollBehavior: a = "smooth",
        } = o,
        { code: l } = t;
      if (i.end.includes(l)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(l)) {
        this.handleCancel(t);
        return;
      }
      const { collisionRect: u } = r.current,
        d = u ? { x: u.left, y: u.top } : Xt;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const f = s(t, { active: n, context: r.current, currentCoordinates: d });
      if (f) {
        const c = ml(f, d),
          g = { x: 0, y: 0 },
          { scrollableAncestors: w } = r.current;
        for (const v of w) {
          const E = t.code,
            {
              isTop: m,
              isRight: h,
              isLeft: y,
              isBottom: b,
              maxScroll: S,
              minScroll: C,
            } = O0(v),
            _ = AT(v),
            x = {
              x: Math.min(
                E === te.Right ? _.right - _.width / 2 : _.right,
                Math.max(E === te.Right ? _.left : _.left + _.width / 2, f.x),
              ),
              y: Math.min(
                E === te.Down ? _.bottom - _.height / 2 : _.bottom,
                Math.max(E === te.Down ? _.top : _.top + _.height / 2, f.y),
              ),
            },
            O = (E === te.Right && !h) || (E === te.Left && !y),
            P = (E === te.Down && !b) || (E === te.Up && !m);
          if (O && x.x !== f.x) {
            const M = v.scrollLeft + c.x,
              L = (E === te.Right && M <= S.x) || (E === te.Left && M >= C.x);
            if (L && !c.y) {
              v.scrollTo({ left: M, behavior: a });
              return;
            }
            L
              ? (g.x = v.scrollLeft - M)
              : (g.x =
                  E === te.Right ? v.scrollLeft - S.x : v.scrollLeft - C.x),
              g.x && v.scrollBy({ left: -g.x, behavior: a });
            break;
          } else if (P && x.y !== f.y) {
            const M = v.scrollTop + c.y,
              L = (E === te.Down && M <= S.y) || (E === te.Up && M >= C.y);
            if (L && !c.x) {
              v.scrollTo({ top: M, behavior: a });
              return;
            }
            L
              ? (g.y = v.scrollTop - M)
              : (g.y = E === te.Down ? v.scrollTop - S.y : v.scrollTop - C.y),
              g.y && v.scrollBy({ top: -g.y, behavior: a });
            break;
          }
        }
        this.handleMove(t, No(ml(f, this.referenceCoordinates), g));
      }
    }
  }
  handleMove(t, n) {
    const { onMove: r } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const { onEnd: n } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const { onCancel: n } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
M0.activators = [
  {
    eventName: "onKeyDown",
    handler: (e, t, n) => {
      let { keyboardCodes: r = N0, onActivation: o } = t,
        { active: i } = n;
      const { code: s } = e.nativeEvent;
      if (r.start.includes(s)) {
        const a = i.activatorNode.current;
        return a && e.target !== a
          ? !1
          : (e.preventDefault(), o == null || o({ event: e.nativeEvent }), !0);
      }
      return !1;
    },
  },
];
function tm(e) {
  return !!(e && "distance" in e);
}
function nm(e) {
  return !!(e && "delay" in e);
}
class Gf {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = LT(t.event.target)),
      (this.props = void 0),
      (this.events = void 0),
      (this.autoScrollEnabled = !0),
      (this.document = void 0),
      (this.activated = !1),
      (this.initialCoordinates = void 0),
      (this.timeoutId = null),
      (this.listeners = void 0),
      (this.documentListeners = void 0),
      (this.windowListeners = void 0),
      (this.props = t),
      (this.events = n);
    const { event: i } = t,
      { target: s } = i;
    (this.props = t),
      (this.events = n),
      (this.document = ci(s)),
      (this.documentListeners = new Ki(this.document)),
      (this.listeners = new Ki(r)),
      (this.windowListeners = new Ki(dt(s))),
      (this.initialCoordinates = (o = pd(i)) != null ? o : Xt),
      (this.handleStart = this.handleStart.bind(this)),
      (this.handleMove = this.handleMove.bind(this)),
      (this.handleEnd = this.handleEnd.bind(this)),
      (this.handleCancel = this.handleCancel.bind(this)),
      (this.handleKeydown = this.handleKeydown.bind(this)),
      (this.removeTextSelection = this.removeTextSelection.bind(this)),
      this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: { activationConstraint: n, bypassActivationConstraint: r },
      },
    } = this;
    if (
      (this.listeners.add(t.move.name, this.handleMove, { passive: !1 }),
      this.listeners.add(t.end.name, this.handleEnd),
      t.cancel && this.listeners.add(t.cancel.name, this.handleCancel),
      this.windowListeners.add(It.Resize, this.handleCancel),
      this.windowListeners.add(It.DragStart, em),
      this.windowListeners.add(It.VisibilityChange, this.handleCancel),
      this.windowListeners.add(It.ContextMenu, em),
      this.documentListeners.add(It.Keydown, this.handleKeydown),
      n)
    ) {
      if (
        r != null &&
        r({
          event: this.props.event,
          activeNode: this.props.activeNode,
          options: this.props.options,
        })
      )
        return this.handleStart();
      if (nm(n)) {
        (this.timeoutId = setTimeout(this.handleStart, n.delay)),
          this.handlePending(n);
        return;
      }
      if (tm(n)) {
        this.handlePending(n);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(),
      this.windowListeners.removeAll(),
      setTimeout(this.documentListeners.removeAll, 50),
      this.timeoutId !== null &&
        (clearTimeout(this.timeoutId), (this.timeoutId = null));
  }
  handlePending(t, n) {
    const { active: r, onPending: o } = this.props;
    o(r, t, this.initialCoordinates, n);
  }
  handleStart() {
    const { initialCoordinates: t } = this,
      { onStart: n } = this.props;
    t &&
      ((this.activated = !0),
      this.documentListeners.add(It.Click, FT, { capture: !0 }),
      this.removeTextSelection(),
      this.documentListeners.add(It.SelectionChange, this.removeTextSelection),
      n(t));
  }
  handleMove(t) {
    var n;
    const { activated: r, initialCoordinates: o, props: i } = this,
      {
        onMove: s,
        options: { activationConstraint: a },
      } = i;
    if (!o) return;
    const l = (n = pd(t)) != null ? n : Xt,
      u = ml(o, l);
    if (!r && a) {
      if (tm(a)) {
        if (a.tolerance != null && Gu(u, a.tolerance))
          return this.handleCancel();
        if (Gu(u, a.distance)) return this.handleStart();
      }
      if (nm(a) && Gu(u, a.tolerance)) return this.handleCancel();
      this.handlePending(a, u);
      return;
    }
    t.cancelable && t.preventDefault(), s(l);
  }
  handleEnd() {
    const { onAbort: t, onEnd: n } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleCancel() {
    const { onAbort: t, onCancel: n } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleKeydown(t) {
    t.code === te.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const zT = {
  cancel: { name: "pointercancel" },
  move: { name: "pointermove" },
  end: { name: "pointerup" },
};
class L0 extends Gf {
  constructor(t) {
    const { event: n } = t,
      r = ci(n.target);
    super(t, zT, r);
  }
}
L0.activators = [
  {
    eventName: "onPointerDown",
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      return !n.isPrimary || n.button !== 0
        ? !1
        : (r == null || r({ event: n }), !0);
    },
  },
];
const $T = { move: { name: "mousemove" }, end: { name: "mouseup" } };
var gd;
(function (e) {
  e[(e.RightClick = 2)] = "RightClick";
})(gd || (gd = {}));
class jT extends Gf {
  constructor(t) {
    super(t, $T, ci(t.event.target));
  }
}
jT.activators = [
  {
    eventName: "onMouseDown",
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      return n.button === gd.RightClick
        ? !1
        : (r == null || r({ event: n }), !0);
    },
  },
];
const Yu = {
  cancel: { name: "touchcancel" },
  move: { name: "touchmove" },
  end: { name: "touchend" },
};
class BT extends Gf {
  constructor(t) {
    super(t, Yu);
  }
  static setup() {
    return (
      window.addEventListener(Yu.move.name, t, { capture: !1, passive: !1 }),
      function () {
        window.removeEventListener(Yu.move.name, t);
      }
    );
    function t() {}
  }
}
BT.activators = [
  {
    eventName: "onTouchStart",
    handler: (e, t) => {
      let { nativeEvent: n } = e,
        { onActivation: r } = t;
      const { touches: o } = n;
      return o.length > 1 ? !1 : (r == null || r({ event: n }), !0);
    },
  },
];
var Gi;
(function (e) {
  (e[(e.Pointer = 0)] = "Pointer"),
    (e[(e.DraggableRect = 1)] = "DraggableRect");
})(Gi || (Gi = {}));
var yl;
(function (e) {
  (e[(e.TreeOrder = 0)] = "TreeOrder"),
    (e[(e.ReversedTreeOrder = 1)] = "ReversedTreeOrder");
})(yl || (yl = {}));
function VT(e) {
  let {
    acceleration: t,
    activator: n = Gi.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: s = 5,
    order: a = yl.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: u,
    scrollableAncestorRects: d,
    delta: f,
    threshold: c,
  } = e;
  const g = HT({ delta: f, disabled: !i }),
    [w, v] = tT(),
    E = p.useRef({ x: 0, y: 0 }),
    m = p.useRef({ x: 0, y: 0 }),
    h = p.useMemo(() => {
      switch (n) {
        case Gi.Pointer:
          return l ? { top: l.y, bottom: l.y, left: l.x, right: l.x } : null;
        case Gi.DraggableRect:
          return o;
      }
    }, [n, o, l]),
    y = p.useRef(null),
    b = p.useCallback(() => {
      const C = y.current;
      if (!C) return;
      const _ = E.current.x * m.current.x,
        x = E.current.y * m.current.y;
      C.scrollBy(_, x);
    }, []),
    S = p.useMemo(() => (a === yl.TreeOrder ? [...u].reverse() : u), [a, u]);
  p.useEffect(() => {
    if (!i || !u.length || !h) {
      v();
      return;
    }
    for (const C of S) {
      if ((r == null ? void 0 : r(C)) === !1) continue;
      const _ = u.indexOf(C),
        x = d[_];
      if (!x) continue;
      const { direction: O, speed: P } = RT(C, x, h, t, c);
      for (const M of ["x", "y"]) g[M][O[M]] || ((P[M] = 0), (O[M] = 0));
      if (P.x > 0 || P.y > 0) {
        v(), (y.current = C), w(b, s), (E.current = P), (m.current = O);
        return;
      }
    }
    (E.current = { x: 0, y: 0 }), (m.current = { x: 0, y: 0 }), v();
  }, [
    t,
    b,
    r,
    v,
    i,
    s,
    JSON.stringify(h),
    JSON.stringify(g),
    w,
    u,
    S,
    d,
    JSON.stringify(c),
  ]);
}
const WT = {
  x: { [Re.Backward]: !1, [Re.Forward]: !1 },
  y: { [Re.Backward]: !1, [Re.Forward]: !1 },
};
function HT(e) {
  let { delta: t, disabled: n } = e;
  const r = hd(t);
  return Ds(
    (o) => {
      if (n || !r || !o) return WT;
      const i = { x: Math.sign(t.x - r.x), y: Math.sign(t.y - r.y) };
      return {
        x: {
          [Re.Backward]: o.x[Re.Backward] || i.x === -1,
          [Re.Forward]: o.x[Re.Forward] || i.x === 1,
        },
        y: {
          [Re.Backward]: o.y[Re.Backward] || i.y === -1,
          [Re.Forward]: o.y[Re.Forward] || i.y === 1,
        },
      };
    },
    [n, t, r],
  );
}
function KT(e, t) {
  const n = t != null ? e.get(t) : void 0,
    r = n ? n.node.current : null;
  return Ds(
    (o) => {
      var i;
      return t == null ? null : (i = r ?? o) != null ? i : null;
    },
    [r, t],
  );
}
function GT(e, t) {
  return p.useMemo(
    () =>
      e.reduce((n, r) => {
        const { sensor: o } = r,
          i = o.activators.map((s) => ({
            eventName: s.eventName,
            handler: t(s.handler, r),
          }));
        return [...n, ...i];
      }, []),
    [e, t],
  );
}
var ys;
(function (e) {
  (e[(e.Always = 0)] = "Always"),
    (e[(e.BeforeDragging = 1)] = "BeforeDragging"),
    (e[(e.WhileDragging = 2)] = "WhileDragging");
})(ys || (ys = {}));
var vd;
(function (e) {
  e.Optimized = "optimized";
})(vd || (vd = {}));
const rm = new Map();
function YT(e, t) {
  let { dragging: n, dependencies: r, config: o } = t;
  const [i, s] = p.useState(null),
    { frequency: a, measure: l, strategy: u } = o,
    d = p.useRef(e),
    f = E(),
    c = vs(f),
    g = p.useCallback(
      function (m) {
        m === void 0 && (m = []),
          !c.current &&
            s((h) =>
              h === null ? m : h.concat(m.filter((y) => !h.includes(y))),
            );
      },
      [c],
    ),
    w = p.useRef(null),
    v = Ds(
      (m) => {
        if (f && !n) return rm;
        if (!m || m === rm || d.current !== e || i != null) {
          const h = new Map();
          for (let y of e) {
            if (!y) continue;
            if (i && i.length > 0 && !i.includes(y.id) && y.rect.current) {
              h.set(y.id, y.rect.current);
              continue;
            }
            const b = y.node.current,
              S = b ? new Kf(l(b), b) : null;
            (y.rect.current = S), S && h.set(y.id, S);
          }
          return h;
        }
        return m;
      },
      [e, i, n, f, l],
    );
  return (
    p.useEffect(() => {
      d.current = e;
    }, [e]),
    p.useEffect(() => {
      f || g();
    }, [n, f]),
    p.useEffect(() => {
      i && i.length > 0 && s(null);
    }, [JSON.stringify(i)]),
    p.useEffect(() => {
      f ||
        typeof a != "number" ||
        w.current !== null ||
        (w.current = setTimeout(() => {
          g(), (w.current = null);
        }, a));
    }, [a, f, g, ...r]),
    {
      droppableRects: v,
      measureDroppableContainers: g,
      measuringScheduled: i != null,
    }
  );
  function E() {
    switch (u) {
      case ys.Always:
        return !1;
      case ys.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function F0(e, t) {
  return Ds(
    (n) => (e ? n || (typeof t == "function" ? t(e) : e) : null),
    [t, e],
  );
}
function QT(e, t) {
  return F0(e, t);
}
function qT(e) {
  let { callback: t, disabled: n } = e;
  const r = Vf(t),
    o = p.useMemo(() => {
      if (n || typeof window > "u" || typeof window.MutationObserver > "u")
        return;
      const { MutationObserver: i } = window;
      return new i(r);
    }, [r, n]);
  return p.useEffect(() => () => (o == null ? void 0 : o.disconnect()), [o]), o;
}
function ru(e) {
  let { callback: t, disabled: n } = e;
  const r = Vf(t),
    o = p.useMemo(() => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const { ResizeObserver: i } = window;
      return new i(r);
    }, [n]);
  return p.useEffect(() => () => (o == null ? void 0 : o.disconnect()), [o]), o;
}
function XT(e) {
  return new Kf(di(e), e);
}
function om(e, t, n) {
  t === void 0 && (t = XT);
  const [r, o] = p.useState(null);
  function i() {
    o((l) => {
      if (!e) return null;
      if (e.isConnected === !1) {
        var u;
        return (u = l ?? n) != null ? u : null;
      }
      const d = t(e);
      return JSON.stringify(l) === JSON.stringify(d) ? l : d;
    });
  }
  const s = qT({
      callback(l) {
        if (e)
          for (const u of l) {
            const { type: d, target: f } = u;
            if (
              d === "childList" &&
              f instanceof HTMLElement &&
              f.contains(e)
            ) {
              i();
              break;
            }
          }
      },
    }),
    a = ru({ callback: i });
  return (
    gn(() => {
      i(),
        e
          ? (a == null || a.observe(e),
            s == null ||
              s.observe(document.body, { childList: !0, subtree: !0 }))
          : (a == null || a.disconnect(), s == null || s.disconnect());
    }, [e]),
    r
  );
}
function JT(e) {
  const t = F0(e);
  return k0(e, t);
}
const im = [];
function ZT(e) {
  const t = p.useRef(e),
    n = Ds(
      (r) =>
        e
          ? r &&
            r !== im &&
            e &&
            t.current &&
            e.parentNode === t.current.parentNode
            ? r
            : Hf(e)
          : im,
      [e],
    );
  return (
    p.useEffect(() => {
      t.current = e;
    }, [e]),
    n
  );
}
function ek(e) {
  const [t, n] = p.useState(null),
    r = p.useRef(e),
    o = p.useCallback((i) => {
      const s = Ku(i.target);
      s && n((a) => (a ? (a.set(s, md(s)), new Map(a)) : null));
    }, []);
  return (
    p.useEffect(() => {
      const i = r.current;
      if (e !== i) {
        s(i);
        const a = e
          .map((l) => {
            const u = Ku(l);
            return u
              ? (u.addEventListener("scroll", o, { passive: !0 }), [u, md(u)])
              : null;
          })
          .filter((l) => l != null);
        n(a.length ? new Map(a) : null), (r.current = e);
      }
      return () => {
        s(e), s(i);
      };
      function s(a) {
        a.forEach((l) => {
          const u = Ku(l);
          u == null || u.removeEventListener("scroll", o);
        });
      }
    }, [o, e]),
    p.useMemo(
      () =>
        e.length
          ? t
            ? Array.from(t.values()).reduce((i, s) => No(i, s), Xt)
            : D0(e)
          : Xt,
      [e, t],
    )
  );
}
function sm(e, t) {
  t === void 0 && (t = []);
  const n = p.useRef(null);
  return (
    p.useEffect(() => {
      n.current = null;
    }, t),
    p.useEffect(() => {
      const r = e !== Xt;
      r && !n.current && (n.current = e), !r && n.current && (n.current = null);
    }, [e]),
    n.current ? ml(e, n.current) : Xt
  );
}
function tk(e) {
  p.useEffect(
    () => {
      if (!nu) return;
      const t = e.map((n) => {
        let { sensor: r } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t) n == null || n();
      };
    },
    e.map((t) => {
      let { sensor: n } = t;
      return n;
    }),
  );
}
function nk(e, t) {
  return p.useMemo(
    () =>
      e.reduce((n, r) => {
        let { eventName: o, handler: i } = r;
        return (
          (n[o] = (s) => {
            i(s, t);
          }),
          n
        );
      }, {}),
    [e, t],
  );
}
function U0(e) {
  return p.useMemo(() => (e ? TT(e) : null), [e]);
}
const am = [];
function rk(e, t) {
  t === void 0 && (t = di);
  const [n] = e,
    r = U0(n ? dt(n) : null),
    [o, i] = p.useState(am);
  function s() {
    i(() => (e.length ? e.map((l) => (A0(l) ? r : new Kf(t(l), l))) : am));
  }
  const a = ru({ callback: s });
  return (
    gn(() => {
      a == null || a.disconnect(),
        s(),
        e.forEach((l) => (a == null ? void 0 : a.observe(l)));
    }, [e]),
    o
  );
}
function ok(e) {
  if (!e) return null;
  if (e.children.length > 1) return e;
  const t = e.children[0];
  return Os(t) ? t : e;
}
function ik(e) {
  let { measure: t } = e;
  const [n, r] = p.useState(null),
    o = p.useCallback(
      (u) => {
        for (const { target: d } of u)
          if (Os(d)) {
            r((f) => {
              const c = t(d);
              return f ? { ...f, width: c.width, height: c.height } : c;
            });
            break;
          }
      },
      [t],
    ),
    i = ru({ callback: o }),
    s = p.useCallback(
      (u) => {
        const d = ok(u);
        i == null || i.disconnect(),
          d && (i == null || i.observe(d)),
          r(d ? t(d) : null);
      },
      [t, i],
    ),
    [a, l] = pl(s);
  return p.useMemo(() => ({ nodeRef: a, rect: n, setRef: l }), [n, a, l]);
}
const sk = [
    { sensor: L0, options: {} },
    { sensor: M0, options: {} },
  ],
  ak = { current: {} },
  Ra = {
    draggable: { measure: Zp },
    droppable: {
      measure: Zp,
      strategy: ys.WhileDragging,
      frequency: vd.Optimized,
    },
    dragOverlay: { measure: di },
  };
class Yi extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let { disabled: n } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null
      ? n
      : void 0;
  }
}
const lk = {
    activatorEvent: null,
    active: null,
    activeNode: null,
    activeNodeRect: null,
    collisions: null,
    containerNodeRect: null,
    draggableNodes: new Map(),
    droppableRects: new Map(),
    droppableContainers: new Yi(),
    over: null,
    dragOverlay: { nodeRef: { current: null }, rect: null, setRef: vl },
    scrollableAncestors: [],
    scrollableAncestorRects: [],
    measuringConfiguration: Ra,
    measureDroppableContainers: vl,
    windowRect: null,
    measuringScheduled: !1,
  },
  uk = {
    activatorEvent: null,
    activators: [],
    active: null,
    activeNodeRect: null,
    ariaDescribedById: { draggable: "" },
    dispatch: vl,
    draggableNodes: new Map(),
    over: null,
    measureDroppableContainers: vl,
  },
  ou = p.createContext(uk),
  z0 = p.createContext(lk);
function ck() {
  return {
    draggable: {
      active: null,
      initialCoordinates: { x: 0, y: 0 },
      nodes: new Map(),
      translate: { x: 0, y: 0 },
    },
    droppable: { containers: new Yi() },
  };
}
function dk(e, t) {
  switch (t.type) {
    case _e.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active,
        },
      };
    case _e.DragMove:
      return e.draggable.active == null
        ? e
        : {
            ...e,
            draggable: {
              ...e.draggable,
              translate: {
                x: t.coordinates.x - e.draggable.initialCoordinates.x,
                y: t.coordinates.y - e.draggable.initialCoordinates.y,
              },
            },
          };
    case _e.DragEnd:
    case _e.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: { x: 0, y: 0 },
          translate: { x: 0, y: 0 },
        },
      };
    case _e.RegisterDroppable: {
      const { element: n } = t,
        { id: r } = n,
        o = new Yi(e.droppable.containers);
      return (
        o.set(r, n), { ...e, droppable: { ...e.droppable, containers: o } }
      );
    }
    case _e.SetDroppableDisabled: {
      const { id: n, key: r, disabled: o } = t,
        i = e.droppable.containers.get(n);
      if (!i || r !== i.key) return e;
      const s = new Yi(e.droppable.containers);
      return (
        s.set(n, { ...i, disabled: o }),
        { ...e, droppable: { ...e.droppable, containers: s } }
      );
    }
    case _e.UnregisterDroppable: {
      const { id: n, key: r } = t,
        o = e.droppable.containers.get(n);
      if (!o || r !== o.key) return e;
      const i = new Yi(e.droppable.containers);
      return (
        i.delete(n), { ...e, droppable: { ...e.droppable, containers: i } }
      );
    }
    default:
      return e;
  }
}
function fk(e) {
  let { disabled: t } = e;
  const { active: n, activatorEvent: r, draggableNodes: o } = p.useContext(ou),
    i = hd(r),
    s = hd(n == null ? void 0 : n.id);
  return (
    p.useEffect(() => {
      if (!t && !r && i && s != null) {
        if (!Wf(i) || document.activeElement === i.target) return;
        const a = o.get(s);
        if (!a) return;
        const { activatorNode: l, node: u } = a;
        if (!l.current && !u.current) return;
        requestAnimationFrame(() => {
          for (const d of [l.current, u.current]) {
            if (!d) continue;
            const f = oT(d);
            if (f) {
              f.focus();
              break;
            }
          }
        });
      }
    }, [r, t, o, s, i]),
    null
  );
}
function hk(e, t) {
  let { transform: n, ...r } = t;
  return e != null && e.length
    ? e.reduce((o, i) => i({ transform: o, ...r }), n)
    : n;
}
function pk(e) {
  return p.useMemo(
    () => ({
      draggable: { ...Ra.draggable, ...(e == null ? void 0 : e.draggable) },
      droppable: { ...Ra.droppable, ...(e == null ? void 0 : e.droppable) },
      dragOverlay: {
        ...Ra.dragOverlay,
        ...(e == null ? void 0 : e.dragOverlay),
      },
    }),
    [
      e == null ? void 0 : e.draggable,
      e == null ? void 0 : e.droppable,
      e == null ? void 0 : e.dragOverlay,
    ],
  );
}
function mk(e) {
  let { activeNode: t, measure: n, initialRect: r, config: o = !0 } = e;
  const i = p.useRef(!1),
    { x: s, y: a } = typeof o == "boolean" ? { x: o, y: o } : o;
  gn(() => {
    if ((!s && !a) || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r) return;
    const u = t == null ? void 0 : t.node.current;
    if (!u || u.isConnected === !1) return;
    const d = n(u),
      f = k0(d, r);
    if (
      (s || (f.x = 0),
      a || (f.y = 0),
      (i.current = !0),
      Math.abs(f.x) > 0 || Math.abs(f.y) > 0)
    ) {
      const c = I0(u);
      c && c.scrollBy({ top: f.y, left: f.x });
    }
  }, [t, s, a, r, n]);
}
const $0 = p.createContext({ ...Xt, scaleX: 1, scaleY: 1 });
var Yn;
(function (e) {
  (e[(e.Uninitialized = 0)] = "Uninitialized"),
    (e[(e.Initializing = 1)] = "Initializing"),
    (e[(e.Initialized = 2)] = "Initialized");
})(Yn || (Yn = {}));
const bD = p.memo(function (t) {
    var n, r, o, i;
    let {
      id: s,
      accessibility: a,
      autoScroll: l = !0,
      children: u,
      sensors: d = sk,
      collisionDetection: f = wT,
      measuring: c,
      modifiers: g,
      ...w
    } = t;
    const v = p.useReducer(dk, void 0, ck),
      [E, m] = v,
      [h, y] = cT(),
      [b, S] = p.useState(Yn.Uninitialized),
      C = b === Yn.Initialized,
      {
        draggable: { active: _, nodes: x, translate: O },
        droppable: { containers: P },
      } = E,
      M = _ != null ? x.get(_) : null,
      L = p.useRef({ initial: null, translated: null }),
      B = p.useMemo(() => {
        var ae;
        return _ != null
          ? {
              id: _,
              data: (ae = M == null ? void 0 : M.data) != null ? ae : ak,
              rect: L,
            }
          : null;
      }, [_, M]),
      D = p.useRef(null),
      [H, j] = p.useState(null),
      [V, T] = p.useState(null),
      A = vs(w, Object.values(w)),
      $ = Ns("DndDescribedBy", s),
      F = p.useMemo(() => P.getEnabled(), [P]),
      z = pk(c),
      {
        droppableRects: K,
        measureDroppableContainers: ee,
        measuringScheduled: xe,
      } = YT(F, { dragging: C, dependencies: [O.x, O.y], config: z.droppable }),
      Y = KT(x, _),
      Ue = p.useMemo(() => (V ? pd(V) : null), [V]),
      Oe = _t(),
      ke = QT(Y, z.draggable.measure);
    mk({
      activeNode: _ != null ? x.get(_) : null,
      config: Oe.layoutShiftCompensation,
      initialRect: ke,
      measure: z.draggable.measure,
    });
    const X = om(Y, z.draggable.measure, ke),
      Zt = om(Y ? Y.parentElement : null),
      De = p.useRef({
        activatorEvent: null,
        active: null,
        activeNode: Y,
        collisionRect: null,
        collisions: null,
        droppableRects: K,
        draggableNodes: x,
        draggingNode: null,
        draggingNodeRect: null,
        droppableContainers: P,
        over: null,
        scrollableAncestors: [],
        scrollAdjustedTranslate: null,
      }),
      ot = P.getNodeFor((n = De.current.over) == null ? void 0 : n.id),
      Ye = ik({ measure: z.dragOverlay.measure }),
      Ft = (r = Ye.nodeRef.current) != null ? r : Y,
      Qe = C ? ((o = Ye.rect) != null ? o : X) : null,
      so = !!(Ye.nodeRef.current && Ye.rect),
      ao = JT(so ? null : X),
      we = U0(Ft ? dt(Ft) : null),
      qe = ZT(C ? (ot ?? Y) : null),
      lo = rk(qe),
      uo = hk(g, {
        transform: { x: O.x - ao.x, y: O.y - ao.y, scaleX: 1, scaleY: 1 },
        activatorEvent: V,
        active: B,
        activeNodeRect: X,
        containerNodeRect: Zt,
        draggingNodeRect: Qe,
        over: De.current.over,
        overlayNodeRect: Ye.rect,
        scrollableAncestors: qe,
        scrollableAncestorRects: lo,
        windowRect: we,
      }),
      Dr = Ue ? No(Ue, O) : null,
      Bs = ek(qe),
      Vs = sm(Bs),
      hi = sm(Bs, [X]),
      ft = No(uo, Vs),
      yn = Qe ? ST(Qe, uo) : null,
      Ct =
        B && yn
          ? f({
              active: B,
              collisionRect: yn,
              droppableRects: K,
              droppableContainers: F,
              pointerCoordinates: Dr,
            })
          : null,
      pi = vT(Ct, "id"),
      [en, mi] = p.useState(null),
      Ws = so ? uo : No(uo, hi),
      cu = ET(Ws, (i = en == null ? void 0 : en.rect) != null ? i : null, X),
      Nr = p.useRef(null),
      Ut = p.useCallback(
        (ae, Ie) => {
          let { sensor: Xe, options: Un } = Ie;
          if (D.current == null) return;
          const Tt = x.get(D.current);
          if (!Tt) return;
          const ht = ae.nativeEvent,
            tn = new Xe({
              active: D.current,
              activeNode: Tt,
              event: ht,
              options: Un,
              context: De,
              onAbort(Ne) {
                if (!x.get(Ne)) return;
                const { onDragAbort: nn } = A.current,
                  wn = { id: Ne };
                nn == null || nn(wn), h({ type: "onDragAbort", event: wn });
              },
              onPending(Ne, zn, nn, wn) {
                if (!x.get(Ne)) return;
                const { onDragPending: vi } = A.current,
                  $n = {
                    id: Ne,
                    constraint: zn,
                    initialCoordinates: nn,
                    offset: wn,
                  };
                vi == null || vi($n), h({ type: "onDragPending", event: $n });
              },
              onStart(Ne) {
                const zn = D.current;
                if (zn == null) return;
                const nn = x.get(zn);
                if (!nn) return;
                const { onDragStart: wn } = A.current,
                  gi = {
                    activatorEvent: ht,
                    active: { id: zn, data: nn.data, rect: L },
                  };
                cn.unstable_batchedUpdates(() => {
                  wn == null || wn(gi),
                    S(Yn.Initializing),
                    m({
                      type: _e.DragStart,
                      initialCoordinates: Ne,
                      active: zn,
                    }),
                    h({ type: "onDragStart", event: gi }),
                    j(Nr.current),
                    T(ht);
                });
              },
              onMove(Ne) {
                m({ type: _e.DragMove, coordinates: Ne });
              },
              onEnd: co(_e.DragEnd),
              onCancel: co(_e.DragCancel),
            });
          Nr.current = tn;
          function co(Ne) {
            return async function () {
              const {
                active: nn,
                collisions: wn,
                over: gi,
                scrollAdjustedTranslate: vi,
              } = De.current;
              let $n = null;
              if (nn && vi) {
                const { cancelDrop: yi } = A.current;
                ($n = {
                  activatorEvent: ht,
                  active: nn,
                  collisions: wn,
                  delta: vi,
                  over: gi,
                }),
                  Ne === _e.DragEnd &&
                    typeof yi == "function" &&
                    (await Promise.resolve(yi($n))) &&
                    (Ne = _e.DragCancel);
              }
              (D.current = null),
                cn.unstable_batchedUpdates(() => {
                  m({ type: Ne }),
                    S(Yn.Uninitialized),
                    mi(null),
                    j(null),
                    T(null),
                    (Nr.current = null);
                  const yi = Ne === _e.DragEnd ? "onDragEnd" : "onDragCancel";
                  if ($n) {
                    const fu = A.current[yi];
                    fu == null || fu($n), h({ type: yi, event: $n });
                  }
                });
            };
          }
        },
        [x],
      ),
      du = p.useCallback(
        (ae, Ie) => (Xe, Un) => {
          const Tt = Xe.nativeEvent,
            ht = x.get(Un);
          if (D.current !== null || !ht || Tt.dndKit || Tt.defaultPrevented)
            return;
          const tn = { active: ht };
          ae(Xe, Ie.options, tn) === !0 &&
            ((Tt.dndKit = { capturedBy: Ie.sensor }),
            (D.current = Un),
            Ut(Xe, Ie));
        },
        [x, Ut],
      ),
      G = GT(d, du);
    tk(d),
      gn(() => {
        X && b === Yn.Initializing && S(Yn.Initialized);
      }, [X, b]),
      p.useEffect(() => {
        const { onDragMove: ae } = A.current,
          {
            active: Ie,
            activatorEvent: Xe,
            collisions: Un,
            over: Tt,
          } = De.current;
        if (!Ie || !Xe) return;
        const ht = {
          active: Ie,
          activatorEvent: Xe,
          collisions: Un,
          delta: { x: ft.x, y: ft.y },
          over: Tt,
        };
        cn.unstable_batchedUpdates(() => {
          ae == null || ae(ht), h({ type: "onDragMove", event: ht });
        });
      }, [ft.x, ft.y]),
      p.useEffect(() => {
        const {
          active: ae,
          activatorEvent: Ie,
          collisions: Xe,
          droppableContainers: Un,
          scrollAdjustedTranslate: Tt,
        } = De.current;
        if (!ae || D.current == null || !Ie || !Tt) return;
        const { onDragOver: ht } = A.current,
          tn = Un.get(pi),
          co =
            tn && tn.rect.current
              ? {
                  id: tn.id,
                  rect: tn.rect.current,
                  data: tn.data,
                  disabled: tn.disabled,
                }
              : null,
          Ne = {
            active: ae,
            activatorEvent: Ie,
            collisions: Xe,
            delta: { x: Tt.x, y: Tt.y },
            over: co,
          };
        cn.unstable_batchedUpdates(() => {
          mi(co), ht == null || ht(Ne), h({ type: "onDragOver", event: Ne });
        });
      }, [pi]),
      gn(() => {
        (De.current = {
          activatorEvent: V,
          active: B,
          activeNode: Y,
          collisionRect: yn,
          collisions: Ct,
          droppableRects: K,
          draggableNodes: x,
          draggingNode: Ft,
          draggingNodeRect: Qe,
          droppableContainers: P,
          over: en,
          scrollableAncestors: qe,
          scrollAdjustedTranslate: ft,
        }),
          (L.current = { initial: Qe, translated: yn });
      }, [B, Y, Ct, yn, x, Ft, Qe, K, P, en, qe, ft]),
      VT({
        ...Oe,
        delta: O,
        draggingRect: yn,
        pointerCoordinates: Dr,
        scrollableAncestors: qe,
        scrollableAncestorRects: lo,
      });
    const se = p.useMemo(
        () => ({
          active: B,
          activeNode: Y,
          activeNodeRect: X,
          activatorEvent: V,
          collisions: Ct,
          containerNodeRect: Zt,
          dragOverlay: Ye,
          draggableNodes: x,
          droppableContainers: P,
          droppableRects: K,
          over: en,
          measureDroppableContainers: ee,
          scrollableAncestors: qe,
          scrollableAncestorRects: lo,
          measuringConfiguration: z,
          measuringScheduled: xe,
          windowRect: we,
        }),
        [B, Y, X, V, Ct, Zt, Ye, x, P, K, en, ee, qe, lo, z, xe, we],
      ),
      oe = p.useMemo(
        () => ({
          activatorEvent: V,
          activators: G,
          active: B,
          activeNodeRect: X,
          ariaDescribedById: { draggable: $ },
          dispatch: m,
          draggableNodes: x,
          over: en,
          measureDroppableContainers: ee,
        }),
        [V, G, B, X, m, $, x, en, ee],
      );
    return I.createElement(
      T0.Provider,
      { value: y },
      I.createElement(
        ou.Provider,
        { value: oe },
        I.createElement(
          z0.Provider,
          { value: se },
          I.createElement($0.Provider, { value: cu }, u),
        ),
        I.createElement(fk, {
          disabled: (a == null ? void 0 : a.restoreFocus) === !1,
        }),
      ),
      I.createElement(hT, { ...a, hiddenTextDescribedById: $ }),
    );
    function _t() {
      const ae = (H == null ? void 0 : H.autoScrollEnabled) === !1,
        Ie = typeof l == "object" ? l.enabled === !1 : l === !1,
        Xe = C && !ae && !Ie;
      return typeof l == "object" ? { ...l, enabled: Xe } : { enabled: Xe };
    }
  }),
  gk = p.createContext(null),
  lm = "button",
  vk = "Draggable";
function yk(e) {
  let { id: t, data: n, disabled: r = !1, attributes: o } = e;
  const i = Ns(vk),
    {
      activators: s,
      activatorEvent: a,
      active: l,
      activeNodeRect: u,
      ariaDescribedById: d,
      draggableNodes: f,
      over: c,
    } = p.useContext(ou),
    {
      role: g = lm,
      roleDescription: w = "draggable",
      tabIndex: v = 0,
    } = o ?? {},
    E = (l == null ? void 0 : l.id) === t,
    m = p.useContext(E ? $0 : gk),
    [h, y] = pl(),
    [b, S] = pl(),
    C = nk(s, t),
    _ = vs(n);
  gn(
    () => (
      f.set(t, { id: t, key: i, node: h, activatorNode: b, data: _ }),
      () => {
        const O = f.get(t);
        O && O.key === i && f.delete(t);
      }
    ),
    [f, t],
  );
  const x = p.useMemo(
    () => ({
      role: g,
      tabIndex: v,
      "aria-disabled": r,
      "aria-pressed": E && g === lm ? !0 : void 0,
      "aria-roledescription": w,
      "aria-describedby": d.draggable,
    }),
    [r, g, v, E, w, d.draggable],
  );
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: u,
    attributes: x,
    isDragging: E,
    listeners: r ? void 0 : C,
    node: h,
    over: c,
    setNodeRef: y,
    setActivatorNodeRef: S,
    transform: m,
  };
}
function wk() {
  return p.useContext(z0);
}
const Ek = "Droppable",
  bk = { timeout: 25 };
function Sk(e) {
  let { data: t, disabled: n = !1, id: r, resizeObserverConfig: o } = e;
  const i = Ns(Ek),
    {
      active: s,
      dispatch: a,
      over: l,
      measureDroppableContainers: u,
    } = p.useContext(ou),
    d = p.useRef({ disabled: n }),
    f = p.useRef(!1),
    c = p.useRef(null),
    g = p.useRef(null),
    { disabled: w, updateMeasurementsFor: v, timeout: E } = { ...bk, ...o },
    m = vs(v ?? r),
    h = p.useCallback(() => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      g.current != null && clearTimeout(g.current),
        (g.current = setTimeout(() => {
          u(Array.isArray(m.current) ? m.current : [m.current]),
            (g.current = null);
        }, E));
    }, [E]),
    y = ru({ callback: h, disabled: w || !s }),
    b = p.useCallback(
      (x, O) => {
        y && (O && (y.unobserve(O), (f.current = !1)), x && y.observe(x));
      },
      [y],
    ),
    [S, C] = pl(b),
    _ = vs(t);
  return (
    p.useEffect(() => {
      !y ||
        !S.current ||
        (y.disconnect(), (f.current = !1), y.observe(S.current));
    }, [S, y]),
    p.useEffect(
      () => (
        a({
          type: _e.RegisterDroppable,
          element: { id: r, key: i, disabled: n, node: S, rect: c, data: _ },
        }),
        () => a({ type: _e.UnregisterDroppable, key: i, id: r })
      ),
      [r],
    ),
    p.useEffect(() => {
      n !== d.current.disabled &&
        (a({ type: _e.SetDroppableDisabled, id: r, key: i, disabled: n }),
        (d.current.disabled = n));
    }, [r, i, n, a]),
    {
      active: s,
      rect: c,
      isOver: (l == null ? void 0 : l.id) === r,
      node: S,
      over: l,
      setNodeRef: C,
    }
  );
}
function j0(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function xk(e, t) {
  return e.reduce((n, r, o) => {
    const i = t.get(r);
    return i && (n[o] = i), n;
  }, Array(e.length));
}
function pa(e) {
  return e !== null && e >= 0;
}
function Ck(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function _k(e) {
  return typeof e == "boolean" ? { draggable: e, droppable: e } : e;
}
const B0 = (e) => {
    let { rects: t, activeIndex: n, overIndex: r, index: o } = e;
    const i = j0(t, r, n),
      s = t[o],
      a = i[o];
    return !a || !s
      ? null
      : {
          x: a.left - s.left,
          y: a.top - s.top,
          scaleX: a.width / s.width,
          scaleY: a.height / s.height,
        };
  },
  ma = { scaleX: 1, scaleY: 1 },
  SD = (e) => {
    var t;
    let {
      activeIndex: n,
      activeNodeRect: r,
      index: o,
      rects: i,
      overIndex: s,
    } = e;
    const a = (t = i[n]) != null ? t : r;
    if (!a) return null;
    if (o === n) {
      const u = i[s];
      return u
        ? {
            x: 0,
            y: n < s ? u.top + u.height - (a.top + a.height) : u.top - a.top,
            ...ma,
          }
        : null;
    }
    const l = Tk(i, o, n);
    return o > n && o <= s
      ? { x: 0, y: -a.height - l, ...ma }
      : o < n && o >= s
        ? { x: 0, y: a.height + l, ...ma }
        : { x: 0, y: 0, ...ma };
  };
function Tk(e, t, n) {
  const r = e[t],
    o = e[t - 1],
    i = e[t + 1];
  return r
    ? n < t
      ? o
        ? r.top - (o.top + o.height)
        : i
          ? i.top - (r.top + r.height)
          : 0
      : i
        ? i.top - (r.top + r.height)
        : o
          ? r.top - (o.top + o.height)
          : 0
    : 0;
}
const V0 = "Sortable",
  W0 = I.createContext({
    activeIndex: -1,
    containerId: V0,
    disableTransforms: !1,
    items: [],
    overIndex: -1,
    useDragOverlay: !1,
    sortedRects: [],
    strategy: B0,
    disabled: { draggable: !1, droppable: !1 },
  });
function xD(e) {
  let { children: t, id: n, items: r, strategy: o = B0, disabled: i = !1 } = e;
  const {
      active: s,
      dragOverlay: a,
      droppableRects: l,
      over: u,
      measureDroppableContainers: d,
    } = wk(),
    f = Ns(V0, n),
    c = a.rect !== null,
    g = p.useMemo(
      () => r.map((C) => (typeof C == "object" && "id" in C ? C.id : C)),
      [r],
    ),
    w = s != null,
    v = s ? g.indexOf(s.id) : -1,
    E = u ? g.indexOf(u.id) : -1,
    m = p.useRef(g),
    h = !Ck(g, m.current),
    y = (E !== -1 && v === -1) || h,
    b = _k(i);
  gn(() => {
    h && w && d(g);
  }, [h, g, w, d]),
    p.useEffect(() => {
      m.current = g;
    }, [g]);
  const S = p.useMemo(
    () => ({
      activeIndex: v,
      containerId: f,
      disabled: b,
      disableTransforms: y,
      items: g,
      overIndex: E,
      useDragOverlay: c,
      sortedRects: xk(g, l),
      strategy: o,
    }),
    [v, f, b.draggable, b.droppable, y, g, E, l, c, o],
  );
  return I.createElement(W0.Provider, { value: S }, t);
}
const kk = (e) => {
    let { id: t, items: n, activeIndex: r, overIndex: o } = e;
    return j0(n, r, o).indexOf(t);
  },
  Ik = (e) => {
    let {
      containerId: t,
      isSorting: n,
      wasDragging: r,
      index: o,
      items: i,
      newIndex: s,
      previousItems: a,
      previousContainerId: l,
      transition: u,
    } = e;
    return !u || !r || (a !== i && o === s) ? !1 : n ? !0 : s !== o && t === l;
  },
  Pk = { duration: 200, easing: "ease" },
  H0 = "transform",
  Rk = gl.Transition.toString({ property: H0, duration: 0, easing: "linear" }),
  Ak = { roleDescription: "sortable" };
function Ok(e) {
  let { disabled: t, index: n, node: r, rect: o } = e;
  const [i, s] = p.useState(null),
    a = p.useRef(n);
  return (
    gn(() => {
      if (!t && n !== a.current && r.current) {
        const l = o.current;
        if (l) {
          const u = di(r.current, { ignoreTransform: !0 }),
            d = {
              x: l.left - u.left,
              y: l.top - u.top,
              scaleX: l.width / u.width,
              scaleY: l.height / u.height,
            };
          (d.x || d.y) && s(d);
        }
      }
      n !== a.current && (a.current = n);
    }, [t, n, r, o]),
    p.useEffect(() => {
      i && s(null);
    }, [i]),
    i
  );
}
function CD(e) {
  let {
    animateLayoutChanges: t = Ik,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: i = kk,
    id: s,
    strategy: a,
    resizeObserverConfig: l,
    transition: u = Pk,
  } = e;
  const {
      items: d,
      containerId: f,
      activeIndex: c,
      disabled: g,
      disableTransforms: w,
      sortedRects: v,
      overIndex: E,
      useDragOverlay: m,
      strategy: h,
    } = p.useContext(W0),
    y = Dk(r, g),
    b = d.indexOf(s),
    S = p.useMemo(
      () => ({ sortable: { containerId: f, index: b, items: d }, ...o }),
      [f, o, b, d],
    ),
    C = p.useMemo(() => d.slice(d.indexOf(s)), [d, s]),
    {
      rect: _,
      node: x,
      isOver: O,
      setNodeRef: P,
    } = Sk({
      id: s,
      data: S,
      disabled: y.droppable,
      resizeObserverConfig: { updateMeasurementsFor: C, ...l },
    }),
    {
      active: M,
      activatorEvent: L,
      activeNodeRect: B,
      attributes: D,
      setNodeRef: H,
      listeners: j,
      isDragging: V,
      over: T,
      setActivatorNodeRef: A,
      transform: $,
    } = yk({
      id: s,
      data: S,
      attributes: { ...Ak, ...n },
      disabled: y.draggable,
    }),
    F = eT(P, H),
    z = !!M,
    K = z && !w && pa(c) && pa(E),
    ee = !m && V,
    xe = ee && K ? $ : null,
    Ue = K
      ? (xe ??
        (a ?? h)({
          rects: v,
          activeNodeRect: B,
          activeIndex: c,
          overIndex: E,
          index: b,
        }))
      : null,
    Oe =
      pa(c) && pa(E) ? i({ id: s, items: d, activeIndex: c, overIndex: E }) : b,
    ke = M == null ? void 0 : M.id,
    X = p.useRef({ activeId: ke, items: d, newIndex: Oe, containerId: f }),
    Zt = d !== X.current.items,
    De = t({
      active: M,
      containerId: f,
      isDragging: V,
      isSorting: z,
      id: s,
      index: b,
      items: d,
      newIndex: X.current.newIndex,
      previousItems: X.current.items,
      previousContainerId: X.current.containerId,
      transition: u,
      wasDragging: X.current.activeId != null,
    }),
    ot = Ok({ disabled: !De, index: b, node: x, rect: _ });
  return (
    p.useEffect(() => {
      z && X.current.newIndex !== Oe && (X.current.newIndex = Oe),
        f !== X.current.containerId && (X.current.containerId = f),
        d !== X.current.items && (X.current.items = d);
    }, [z, Oe, f, d]),
    p.useEffect(() => {
      if (ke === X.current.activeId) return;
      if (ke && !X.current.activeId) {
        X.current.activeId = ke;
        return;
      }
      const Ft = setTimeout(() => {
        X.current.activeId = ke;
      }, 50);
      return () => clearTimeout(Ft);
    }, [ke]),
    {
      active: M,
      activeIndex: c,
      attributes: D,
      data: S,
      rect: _,
      index: b,
      newIndex: Oe,
      items: d,
      isOver: O,
      isSorting: z,
      isDragging: V,
      listeners: j,
      node: x,
      overIndex: E,
      over: T,
      setNodeRef: F,
      setActivatorNodeRef: A,
      setDroppableNodeRef: P,
      setDraggableNodeRef: H,
      transform: ot ?? Ue,
      transition: Ye(),
    }
  );
  function Ye() {
    if (ot || (Zt && X.current.newIndex === b)) return Rk;
    if (!((ee && !Wf(L)) || !u) && (z || De))
      return gl.Transition.toString({ ...u, property: H0 });
  }
}
function Dk(e, t) {
  var n, r;
  return typeof e == "boolean"
    ? { draggable: e, droppable: !1 }
    : {
        draggable:
          (n = e == null ? void 0 : e.draggable) != null ? n : t.draggable,
        droppable:
          (r = e == null ? void 0 : e.droppable) != null ? r : t.droppable,
      };
}
te.Down, te.Right, te.Up, te.Left;
var um = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const K0 = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let o = e.charCodeAt(r);
      o < 128
        ? (t[n++] = o)
        : o < 2048
          ? ((t[n++] = (o >> 6) | 192), (t[n++] = (o & 63) | 128))
          : (o & 64512) === 55296 &&
              r + 1 < e.length &&
              (e.charCodeAt(r + 1) & 64512) === 56320
            ? ((o = 65536 + ((o & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
              (t[n++] = (o >> 18) | 240),
              (t[n++] = ((o >> 12) & 63) | 128),
              (t[n++] = ((o >> 6) & 63) | 128),
              (t[n++] = (o & 63) | 128))
            : ((t[n++] = (o >> 12) | 224),
              (t[n++] = ((o >> 6) & 63) | 128),
              (t[n++] = (o & 63) | 128));
    }
    return t;
  },
  Nk = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const o = e[n++];
      if (o < 128) t[r++] = String.fromCharCode(o);
      else if (o > 191 && o < 224) {
        const i = e[n++];
        t[r++] = String.fromCharCode(((o & 31) << 6) | (i & 63));
      } else if (o > 239 && o < 365) {
        const i = e[n++],
          s = e[n++],
          a = e[n++],
          l =
            (((o & 7) << 18) | ((i & 63) << 12) | ((s & 63) << 6) | (a & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (l >> 10))),
          (t[r++] = String.fromCharCode(56320 + (l & 1023)));
      } else {
        const i = e[n++],
          s = e[n++];
        t[r++] = String.fromCharCode(
          ((o & 15) << 12) | ((i & 63) << 6) | (s & 63),
        );
      }
    }
    return t.join("");
  },
  G0 = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let o = 0; o < e.length; o += 3) {
        const i = e[o],
          s = o + 1 < e.length,
          a = s ? e[o + 1] : 0,
          l = o + 2 < e.length,
          u = l ? e[o + 2] : 0,
          d = i >> 2,
          f = ((i & 3) << 4) | (a >> 4);
        let c = ((a & 15) << 2) | (u >> 6),
          g = u & 63;
        l || ((g = 64), s || (c = 64)), r.push(n[d], n[f], n[c], n[g]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(K0(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : Nk(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let o = 0; o < e.length; ) {
        const i = n[e.charAt(o++)],
          a = o < e.length ? n[e.charAt(o)] : 0;
        ++o;
        const u = o < e.length ? n[e.charAt(o)] : 64;
        ++o;
        const f = o < e.length ? n[e.charAt(o)] : 64;
        if ((++o, i == null || a == null || u == null || f == null))
          throw new Mk();
        const c = (i << 2) | (a >> 4);
        if ((r.push(c), u !== 64)) {
          const g = ((a << 4) & 240) | (u >> 2);
          if ((r.push(g), f !== 64)) {
            const w = ((u << 6) & 192) | f;
            r.push(w);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class Mk extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const Lk = function (e) {
    const t = K0(e);
    return G0.encodeByteArray(t, !0);
  },
  Y0 = function (e) {
    return Lk(e).replace(/\./g, "");
  },
  Q0 = function (e) {
    try {
      return G0.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fk() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Uk = () => Fk().__FIREBASE_DEFAULTS__,
  zk = () => {
    if (typeof process > "u" || typeof um > "u") return;
    const e = um.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  $k = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && Q0(e[1]);
    return t && JSON.parse(t);
  },
  Yf = () => {
    try {
      return Uk() || zk() || $k();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  jk = (e) => {
    var t, n;
    return (n =
      (t = Yf()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  q0 = () => {
    var e;
    return (e = Yf()) === null || e === void 0 ? void 0 : e.config;
  },
  X0 = (e) => {
    var t;
    return (t = Yf()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bk {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ke() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function Vk() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())
  );
}
function Wk() {
  const e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
        ? browser.runtime
        : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function Hk() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Kk() {
  const e = Ke();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function Gk() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Yk() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        o = self.indexedDB.open(r);
      (o.onsuccess = () => {
        o.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (o.onupgradeneeded = () => {
          n = !1;
        }),
        (o.onerror = () => {
          var i;
          t(
            ((i = o.error) === null || i === void 0 ? void 0 : i.message) || "",
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qk = "FirebaseError";
class Pr extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = Qk),
      Object.setPrototypeOf(this, Pr.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Ms.prototype.create);
  }
}
class Ms {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      o = `${this.service}/${t}`,
      i = this.errors[t],
      s = i ? qk(i, r) : "Error",
      a = `${this.serviceName}: ${s} (${o}).`;
    return new Pr(o, a, r);
  }
}
function qk(e, t) {
  return e.replace(Xk, (n, r) => {
    const o = t[r];
    return o != null ? String(o) : `<${r}?>`;
  });
}
const Xk = /\{\$([^}]+)}/g;
function Jk(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function wl(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const o of n) {
    if (!r.includes(o)) return !1;
    const i = e[o],
      s = t[o];
    if (cm(i) && cm(s)) {
      if (!wl(i, s)) return !1;
    } else if (i !== s) return !1;
  }
  for (const o of r) if (!n.includes(o)) return !1;
  return !0;
}
function cm(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ls(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((o) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(o));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function Mi(e) {
  const t = {};
  return (
    e
      .replace(/^\?/, "")
      .split("&")
      .forEach((r) => {
        if (r) {
          const [o, i] = r.split("=");
          t[decodeURIComponent(o)] = decodeURIComponent(i);
        }
      }),
    t
  );
}
function Li(e) {
  const t = e.indexOf("?");
  if (!t) return "";
  const n = e.indexOf("#", t);
  return e.substring(t, n > 0 ? n : void 0);
}
function Zk(e, t) {
  const n = new eI(e, t);
  return n.subscribe.bind(n);
}
class eI {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let o;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    tI(t, ["next", "error", "complete"])
      ? (o = t)
      : (o = { next: t, error: n, complete: r }),
      o.next === void 0 && (o.next = Qu),
      o.error === void 0 && (o.error = Qu),
      o.complete === void 0 && (o.complete = Qu);
    const i = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? o.error(this.finalError) : o.complete();
          } catch {}
        }),
      this.observers.push(o),
      i
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function tI(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function Qu() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fn(e) {
  return e && e._delegate ? e._delegate : e;
}
class ni {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fr = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nI {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new Bk();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: n });
          o && r.resolve(o);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier,
      ),
      o =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (i) {
        if (o) return null;
        throw i;
      }
    else {
      if (o) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (oI(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Fr });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const o = this.normalizeInstanceIdentifier(n);
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: o });
          r.resolve(i);
        } catch {}
      }
    }
  }
  clearInstance(t = Fr) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Fr) {
    return this.instances.has(t);
  }
  getOptions(t = Fr) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const o = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [i, s] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(i);
      r === a && s.resolve(o);
    }
    return o;
  }
  onInit(t, n) {
    var r;
    const o = this.normalizeInstanceIdentifier(n),
      i =
        (r = this.onInitCallbacks.get(o)) !== null && r !== void 0
          ? r
          : new Set();
    i.add(t), this.onInitCallbacks.set(o, i);
    const s = this.instances.get(o);
    return (
      s && t(s, o),
      () => {
        i.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const o of r)
        try {
          o(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: rI(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = Fr) {
    return this.component ? (this.component.multipleInstances ? t : Fr) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function rI(e) {
  return e === Fr ? void 0 : e;
}
function oI(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iI {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`,
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new nI(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var le;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(le || (le = {}));
const sI = {
    debug: le.DEBUG,
    verbose: le.VERBOSE,
    info: le.INFO,
    warn: le.WARN,
    error: le.ERROR,
    silent: le.SILENT,
  },
  aI = le.INFO,
  lI = {
    [le.DEBUG]: "log",
    [le.VERBOSE]: "log",
    [le.INFO]: "info",
    [le.WARN]: "warn",
    [le.ERROR]: "error",
  },
  uI = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      o = lI[t];
    if (o) console[o](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`,
      );
  };
class J0 {
  constructor(t) {
    (this.name = t),
      (this._logLevel = aI),
      (this._logHandler = uI),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in le))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? sI[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, le.DEBUG, ...t),
      this._logHandler(this, le.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, le.VERBOSE, ...t),
      this._logHandler(this, le.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, le.INFO, ...t),
      this._logHandler(this, le.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, le.WARN, ...t),
      this._logHandler(this, le.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, le.ERROR, ...t),
      this._logHandler(this, le.ERROR, ...t);
  }
}
const cI = (e, t) => t.some((n) => e instanceof n);
let dm, fm;
function dI() {
  return (
    dm ||
    (dm = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function fI() {
  return (
    fm ||
    (fm = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Z0 = new WeakMap(),
  yd = new WeakMap(),
  ew = new WeakMap(),
  qu = new WeakMap(),
  Qf = new WeakMap();
function hI(e) {
  const t = new Promise((n, r) => {
    const o = () => {
        e.removeEventListener("success", i), e.removeEventListener("error", s);
      },
      i = () => {
        n(vr(e.result)), o();
      },
      s = () => {
        r(e.error), o();
      };
    e.addEventListener("success", i), e.addEventListener("error", s);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && Z0.set(n, e);
      })
      .catch(() => {}),
    Qf.set(t, e),
    t
  );
}
function pI(e) {
  if (yd.has(e)) return;
  const t = new Promise((n, r) => {
    const o = () => {
        e.removeEventListener("complete", i),
          e.removeEventListener("error", s),
          e.removeEventListener("abort", s);
      },
      i = () => {
        n(), o();
      },
      s = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), o();
      };
    e.addEventListener("complete", i),
      e.addEventListener("error", s),
      e.addEventListener("abort", s);
  });
  yd.set(e, t);
}
let wd = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return yd.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || ew.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return vr(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function mI(e) {
  wd = e(wd);
}
function gI(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(Xu(this), t, ...n);
        return ew.set(r, t.sort ? t.sort() : [t]), vr(r);
      }
    : fI().includes(e)
      ? function (...t) {
          return e.apply(Xu(this), t), vr(Z0.get(this));
        }
      : function (...t) {
          return vr(e.apply(Xu(this), t));
        };
}
function vI(e) {
  return typeof e == "function"
    ? gI(e)
    : (e instanceof IDBTransaction && pI(e),
      cI(e, dI()) ? new Proxy(e, wd) : e);
}
function vr(e) {
  if (e instanceof IDBRequest) return hI(e);
  if (qu.has(e)) return qu.get(e);
  const t = vI(e);
  return t !== e && (qu.set(e, t), Qf.set(t, e)), t;
}
const Xu = (e) => Qf.get(e);
function yI(e, t, { blocked: n, upgrade: r, blocking: o, terminated: i } = {}) {
  const s = indexedDB.open(e, t),
    a = vr(s);
  return (
    r &&
      s.addEventListener("upgradeneeded", (l) => {
        r(vr(s.result), l.oldVersion, l.newVersion, vr(s.transaction), l);
      }),
    n && s.addEventListener("blocked", (l) => n(l.oldVersion, l.newVersion, l)),
    a
      .then((l) => {
        i && l.addEventListener("close", () => i()),
          o &&
            l.addEventListener("versionchange", (u) =>
              o(u.oldVersion, u.newVersion, u),
            );
      })
      .catch(() => {}),
    a
  );
}
const wI = ["get", "getKey", "getAll", "getAllKeys", "count"],
  EI = ["put", "add", "delete", "clear"],
  Ju = new Map();
function hm(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (Ju.get(t)) return Ju.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    o = EI.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(o || wI.includes(n))
  )
    return;
  const i = async function (s, ...a) {
    const l = this.transaction(s, o ? "readwrite" : "readonly");
    let u = l.store;
    return (
      r && (u = u.index(a.shift())),
      (await Promise.all([u[n](...a), o && l.done]))[0]
    );
  };
  return Ju.set(t, i), i;
}
mI((e) => ({
  ...e,
  get: (t, n, r) => hm(t, n) || e.get(t, n, r),
  has: (t, n) => !!hm(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bI {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (SI(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function SI(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const Ed = "@firebase/app",
  pm = "0.9.29";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const to = new J0("@firebase/app"),
  xI = "@firebase/app-compat",
  CI = "@firebase/analytics-compat",
  _I = "@firebase/analytics",
  TI = "@firebase/app-check-compat",
  kI = "@firebase/app-check",
  II = "@firebase/auth",
  PI = "@firebase/auth-compat",
  RI = "@firebase/database",
  AI = "@firebase/database-compat",
  OI = "@firebase/functions",
  DI = "@firebase/functions-compat",
  NI = "@firebase/installations",
  MI = "@firebase/installations-compat",
  LI = "@firebase/messaging",
  FI = "@firebase/messaging-compat",
  UI = "@firebase/performance",
  zI = "@firebase/performance-compat",
  $I = "@firebase/remote-config",
  jI = "@firebase/remote-config-compat",
  BI = "@firebase/storage",
  VI = "@firebase/storage-compat",
  WI = "@firebase/firestore",
  HI = "@firebase/firestore-compat",
  KI = "firebase",
  GI = "10.9.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const bd = "[DEFAULT]",
  YI = {
    [Ed]: "fire-core",
    [xI]: "fire-core-compat",
    [_I]: "fire-analytics",
    [CI]: "fire-analytics-compat",
    [kI]: "fire-app-check",
    [TI]: "fire-app-check-compat",
    [II]: "fire-auth",
    [PI]: "fire-auth-compat",
    [RI]: "fire-rtdb",
    [AI]: "fire-rtdb-compat",
    [OI]: "fire-fn",
    [DI]: "fire-fn-compat",
    [NI]: "fire-iid",
    [MI]: "fire-iid-compat",
    [LI]: "fire-fcm",
    [FI]: "fire-fcm-compat",
    [UI]: "fire-perf",
    [zI]: "fire-perf-compat",
    [$I]: "fire-rc",
    [jI]: "fire-rc-compat",
    [BI]: "fire-gcs",
    [VI]: "fire-gcs-compat",
    [WI]: "fire-fst",
    [HI]: "fire-fst-compat",
    "fire-js": "fire-js",
    [KI]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const El = new Map(),
  Sd = new Map();
function QI(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    to.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n,
    );
  }
}
function ws(e) {
  const t = e.name;
  if (Sd.has(t))
    return (
      to.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Sd.set(t, e);
  for (const n of El.values()) QI(n, e);
  return !0;
}
function tw(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qI = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  yr = new Ms("app", "Firebase", qI);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class XI {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new ni("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw yr.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fs = GI;
function JI(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: bd, automaticDataCollectionEnabled: !1 }, t),
    o = r.name;
  if (typeof o != "string" || !o)
    throw yr.create("bad-app-name", { appName: String(o) });
  if ((n || (n = q0()), !n)) throw yr.create("no-options");
  const i = El.get(o);
  if (i) {
    if (wl(n, i.options) && wl(r, i.config)) return i;
    throw yr.create("duplicate-app", { appName: o });
  }
  const s = new iI(o);
  for (const l of Sd.values()) s.addComponent(l);
  const a = new XI(n, r, s);
  return El.set(o, a), a;
}
function ZI(e = bd) {
  const t = El.get(e);
  if (!t && e === bd && q0()) return JI();
  if (!t) throw yr.create("no-app", { appName: e });
  return t;
}
function Mo(e, t, n) {
  var r;
  let o = (r = YI[e]) !== null && r !== void 0 ? r : e;
  n && (o += `-${n}`);
  const i = o.match(/\s|\//),
    s = t.match(/\s|\//);
  if (i || s) {
    const a = [`Unable to register library "${o}" with version "${t}":`];
    i &&
      a.push(
        `library name "${o}" contains illegal characters (whitespace or "/")`,
      ),
      i && s && a.push("and"),
      s &&
        a.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`,
        ),
      to.warn(a.join(" "));
    return;
  }
  ws(new ni(`${o}-version`, () => ({ library: o, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eP = "firebase-heartbeat-database",
  tP = 1,
  Es = "firebase-heartbeat-store";
let Zu = null;
function nw() {
  return (
    Zu ||
      (Zu = yI(eP, tP, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Es);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw yr.create("idb-open", { originalErrorMessage: e.message });
      })),
    Zu
  );
}
async function nP(e) {
  try {
    const n = (await nw()).transaction(Es),
      r = await n.objectStore(Es).get(rw(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof Pr) to.warn(t.message);
    else {
      const n = yr.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      to.warn(n.message);
    }
  }
}
async function mm(e, t) {
  try {
    const r = (await nw()).transaction(Es, "readwrite");
    await r.objectStore(Es).put(t, rw(e)), await r.done;
  } catch (n) {
    if (n instanceof Pr) to.warn(n.message);
    else {
      const r = yr.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      to.warn(r.message);
    }
  }
}
function rw(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rP = 1024,
  oP = 30 * 24 * 60 * 60 * 1e3;
class iP {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new aP(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    const o = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      i = gm();
    if (
      !(
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === i ||
        this._heartbeatsCache.heartbeats.some((s) => s.date === i)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: i, agent: o }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((s) => {
            const a = new Date(s.date).valueOf();
            return Date.now() - a <= oP;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var t;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const n = gm(),
      { heartbeatsToSend: r, unsentEntries: o } = sP(
        this._heartbeatsCache.heartbeats,
      ),
      i = Y0(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      o.length > 0
        ? ((this._heartbeatsCache.heartbeats = o),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function gm() {
  return new Date().toISOString().substring(0, 10);
}
function sP(e, t = rP) {
  const n = [];
  let r = e.slice();
  for (const o of e) {
    const i = n.find((s) => s.agent === o.agent);
    if (i) {
      if ((i.dates.push(o.date), vm(n) > t)) {
        i.dates.pop();
        break;
      }
    } else if ((n.push({ agent: o.agent, dates: [o.date] }), vm(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class aP {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Gk()
      ? Yk()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await nP(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const o = await this.read();
      return mm(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : o.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const o = await this.read();
      return mm(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : o.lastSentHeartbeatDate,
        heartbeats: [...o.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function vm(e) {
  return Y0(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lP(e) {
  ws(new ni("platform-logger", (t) => new bI(t), "PRIVATE")),
    ws(new ni("heartbeat", (t) => new iP(t), "PRIVATE")),
    Mo(Ed, pm, e),
    Mo(Ed, pm, "esm2017"),
    Mo("fire-js", "");
}
lP("");
var uP = "firebase",
  cP = "10.9.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Mo(uP, cP, "app");
function qf(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function ow() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const dP = ow,
  iw = new Ms("auth", "Firebase", ow());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const bl = new J0("@firebase/auth");
function fP(e, ...t) {
  bl.logLevel <= le.WARN && bl.warn(`Auth (${Fs}): ${e}`, ...t);
}
function Aa(e, ...t) {
  bl.logLevel <= le.ERROR && bl.error(`Auth (${Fs}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Lt(e, ...t) {
  throw Xf(e, ...t);
}
function hn(e, ...t) {
  return Xf(e, ...t);
}
function sw(e, t, n) {
  const r = Object.assign(Object.assign({}, dP()), { [t]: n });
  return new Ms("auth", "Firebase", r).create(t, { appName: e.name });
}
function hP(e, t, n) {
  const r = n;
  if (!(t instanceof r))
    throw (
      (r.name !== t.constructor.name && Lt(e, "argument-error"),
      sw(
        e,
        "argument-error",
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`,
      ))
    );
}
function Xf(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return iw.create(e, ...t);
}
function W(e, t, ...n) {
  if (!e) throw Xf(t, ...n);
}
function Tn(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (Aa(t), new Error(t));
}
function Mn(e, t) {
  e || Tn(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xd() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.href)) ||
    ""
  );
}
function pP() {
  return ym() === "http:" || ym() === "https:";
}
function ym() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mP() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (pP() || Wk() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function gP() {
  if (typeof navigator > "u") return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Us {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      Mn(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = Vk() || Hk());
  }
  get() {
    return mP()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Jf(e, t) {
  Mn(e.emulator, "Emulator should always be set here");
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aw {
  static initialize(t, n, r) {
    (this.fetchImpl = t),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    Tn(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    Tn(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    Tn(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vP = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yP = new Us(3e4, 6e4);
function Rr(e, t) {
  return e.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
    : t;
}
async function Ar(e, t, n, r, o = {}) {
  return lw(e, o, async () => {
    let i = {},
      s = {};
    r && (t === "GET" ? (s = r) : (i = { body: JSON.stringify(r) }));
    const a = Ls(Object.assign({ key: e.config.apiKey }, s)).slice(1),
      l = await e._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/json"),
      e.languageCode && (l["X-Firebase-Locale"] = e.languageCode),
      aw.fetch()(
        uw(e, e.config.apiHost, n, a),
        Object.assign(
          { method: t, headers: l, referrerPolicy: "no-referrer" },
          i,
        ),
      )
    );
  });
}
async function lw(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, vP), t);
  try {
    const o = new EP(e),
      i = await Promise.race([n(), o.promise]);
    o.clearNetworkTimeout();
    const s = await i.json();
    if ("needConfirmation" in s)
      throw ga(e, "account-exists-with-different-credential", s);
    if (i.ok && !("errorMessage" in s)) return s;
    {
      const a = i.ok ? s.errorMessage : s.error.message,
        [l, u] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw ga(e, "credential-already-in-use", s);
      if (l === "EMAIL_EXISTS") throw ga(e, "email-already-in-use", s);
      if (l === "USER_DISABLED") throw ga(e, "user-disabled", s);
      const d = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (u) throw sw(e, d, u);
      Lt(e, d);
    }
  } catch (o) {
    if (o instanceof Pr) throw o;
    Lt(e, "network-request-failed", { message: String(o) });
  }
}
async function zs(e, t, n, r, o = {}) {
  const i = await Ar(e, t, n, r, o);
  return (
    "mfaPendingCredential" in i &&
      Lt(e, "multi-factor-auth-required", { _serverResponse: i }),
    i
  );
}
function uw(e, t, n, r) {
  const o = `${t}${n}?${r}`;
  return e.config.emulator ? Jf(e.config, o) : `${e.config.apiScheme}://${o}`;
}
function wP(e) {
  switch (e) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class EP {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(hn(this.auth, "network-request-failed")),
          yP.get(),
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function ga(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const o = hn(e, t, r);
  return (o.customData._tokenResponse = n), o;
}
function wm(e) {
  return e !== void 0 && e.enterprise !== void 0;
}
class bP {
  constructor(t) {
    if (
      ((this.siteKey = ""),
      (this.recaptchaEnforcementState = []),
      t.recaptchaKey === void 0)
    )
      throw new Error("recaptchaKey undefined");
    (this.siteKey = t.recaptchaKey.split("/")[3]),
      (this.recaptchaEnforcementState = t.recaptchaEnforcementState);
  }
  getProviderEnforcementState(t) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const n of this.recaptchaEnforcementState)
      if (n.provider && n.provider === t) return wP(n.enforcementState);
    return null;
  }
  isProviderEnabled(t) {
    return (
      this.getProviderEnforcementState(t) === "ENFORCE" ||
      this.getProviderEnforcementState(t) === "AUDIT"
    );
  }
}
async function SP(e, t) {
  return Ar(e, "GET", "/v2/recaptchaConfig", Rr(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function xP(e, t) {
  return Ar(e, "POST", "/v1/accounts:delete", t);
}
async function CP(e, t) {
  return Ar(e, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qi(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function _P(e, t = !1) {
  const n = Fn(e),
    r = await n.getIdToken(t),
    o = Zf(r);
  W(o && o.exp && o.auth_time && o.iat, n.auth, "internal-error");
  const i = typeof o.firebase == "object" ? o.firebase : void 0,
    s = i == null ? void 0 : i.sign_in_provider;
  return {
    claims: o,
    token: r,
    authTime: Qi(ec(o.auth_time)),
    issuedAtTime: Qi(ec(o.iat)),
    expirationTime: Qi(ec(o.exp)),
    signInProvider: s || null,
    signInSecondFactor: (i == null ? void 0 : i.sign_in_second_factor) || null,
  };
}
function ec(e) {
  return Number(e) * 1e3;
}
function Zf(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0)
    return Aa("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const o = Q0(n);
    return o
      ? JSON.parse(o)
      : (Aa("Failed to decode base64 JWT payload"), null);
  } catch (o) {
    return (
      Aa(
        "Caught error parsing JWT payload as JSON",
        o == null ? void 0 : o.toString(),
      ),
      null
    );
  }
}
function TP(e) {
  const t = Zf(e);
  return (
    W(t, "internal-error"),
    W(typeof t.exp < "u", "internal-error"),
    W(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function bs(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      (r instanceof Pr &&
        kP(r) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      r)
    );
  }
}
function kP({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class IP {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var n;
    if (t) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const o =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, o);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cw {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Qi(this.lastLoginAt)),
      (this.creationTime = Qi(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Sl(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    o = await bs(e, CP(n, { idToken: r }));
  W(o == null ? void 0 : o.users.length, n, "internal-error");
  const i = o.users[0];
  e._notifyReloadListener(i);
  const s =
      !((t = i.providerUserInfo) === null || t === void 0) && t.length
        ? AP(i.providerUserInfo)
        : [],
    a = RP(e.providerData, s),
    l = e.isAnonymous,
    u = !(e.email && i.passwordHash) && !(a != null && a.length),
    d = l ? u : !1,
    f = {
      uid: i.localId,
      displayName: i.displayName || null,
      photoURL: i.photoUrl || null,
      email: i.email || null,
      emailVerified: i.emailVerified || !1,
      phoneNumber: i.phoneNumber || null,
      tenantId: i.tenantId || null,
      providerData: a,
      metadata: new cw(i.createdAt, i.lastLoginAt),
      isAnonymous: d,
    };
  Object.assign(e, f);
}
async function PP(e) {
  const t = Fn(e);
  await Sl(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function RP(e, t) {
  return [
    ...e.filter((r) => !t.some((o) => o.providerId === r.providerId)),
    ...t,
  ];
}
function AP(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = qf(t, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function OP(e, t) {
  const n = await lw(e, {}, async () => {
    const r = Ls({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: o, apiKey: i } = e.config,
      s = uw(e, o, "/v1/token", `key=${i}`),
      a = await e._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/x-www-form-urlencoded"),
      aw.fetch()(s, { method: "POST", headers: a, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function DP(e, t) {
  return Ar(e, "POST", "/v2/accounts:revokeToken", Rr(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ss {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    W(t.idToken, "internal-error"),
      W(typeof t.idToken < "u", "internal-error"),
      W(typeof t.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : TP(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  async getToken(t, n = !1) {
    return (
      W(!this.accessToken || this.refreshToken, t, "user-token-expired"),
      !n && this.accessToken && !this.isExpired
        ? this.accessToken
        : this.refreshToken
          ? (await this.refresh(t, this.refreshToken), this.accessToken)
          : null
    );
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: o, expiresIn: i } = await OP(t, n);
    this.updateTokensAndExpiration(r, o, Number(i));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: o, expirationTime: i } = n,
      s = new Ss();
    return (
      r &&
        (W(typeof r == "string", "internal-error", { appName: t }),
        (s.refreshToken = r)),
      o &&
        (W(typeof o == "string", "internal-error", { appName: t }),
        (s.accessToken = o)),
      i &&
        (W(typeof i == "number", "internal-error", { appName: t }),
        (s.expirationTime = i)),
      s
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new Ss(), this.toJSON());
  }
  _performRefresh() {
    return Tn("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Wn(e, t) {
  W(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class Yr {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: o } = t,
      i = qf(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new IP(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = o),
      (this.accessToken = o.accessToken),
      (this.displayName = i.displayName || null),
      (this.email = i.email || null),
      (this.emailVerified = i.emailVerified || !1),
      (this.phoneNumber = i.phoneNumber || null),
      (this.photoURL = i.photoURL || null),
      (this.isAnonymous = i.isAnonymous || !1),
      (this.tenantId = i.tenantId || null),
      (this.providerData = i.providerData ? [...i.providerData] : []),
      (this.metadata = new cw(i.createdAt || void 0, i.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await bs(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      W(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return _P(this, t);
  }
  reload() {
    return PP(this);
  }
  _assign(t) {
    this !== t &&
      (W(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new Yr(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      }),
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    W(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await Sl(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const t = await this.getIdToken();
    return (
      await bs(this, xP(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON(),
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name },
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, n) {
    var r, o, i, s, a, l, u, d;
    const f = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      c = (o = n.email) !== null && o !== void 0 ? o : void 0,
      g = (i = n.phoneNumber) !== null && i !== void 0 ? i : void 0,
      w = (s = n.photoURL) !== null && s !== void 0 ? s : void 0,
      v = (a = n.tenantId) !== null && a !== void 0 ? a : void 0,
      E = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
      m = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      h = (d = n.lastLoginAt) !== null && d !== void 0 ? d : void 0,
      {
        uid: y,
        emailVerified: b,
        isAnonymous: S,
        providerData: C,
        stsTokenManager: _,
      } = n;
    W(y && _, t, "internal-error");
    const x = Ss.fromJSON(this.name, _);
    W(typeof y == "string", t, "internal-error"),
      Wn(f, t.name),
      Wn(c, t.name),
      W(typeof b == "boolean", t, "internal-error"),
      W(typeof S == "boolean", t, "internal-error"),
      Wn(g, t.name),
      Wn(w, t.name),
      Wn(v, t.name),
      Wn(E, t.name),
      Wn(m, t.name),
      Wn(h, t.name);
    const O = new Yr({
      uid: y,
      auth: t,
      email: c,
      emailVerified: b,
      displayName: f,
      isAnonymous: S,
      photoURL: w,
      phoneNumber: g,
      tenantId: v,
      stsTokenManager: x,
      createdAt: m,
      lastLoginAt: h,
    });
    return (
      C &&
        Array.isArray(C) &&
        (O.providerData = C.map((P) => Object.assign({}, P))),
      E && (O._redirectEventId = E),
      O
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const o = new Ss();
    o.updateFromServerResponse(n);
    const i = new Yr({
      uid: n.localId,
      auth: t,
      stsTokenManager: o,
      isAnonymous: r,
    });
    return await Sl(i), i;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Em = new Map();
function kn(e) {
  Mn(e instanceof Function, "Expected a class definition");
  let t = Em.get(e);
  return t
    ? (Mn(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), Em.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dw {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
dw.type = "NONE";
const bm = dw;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Oa(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class Lo {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: o, name: i } = this.auth;
    (this.fullUserKey = Oa(this.userKey, o.apiKey, i)),
      (this.fullPersistenceKey = Oa("persistence", o.apiKey, i)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? Yr._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type,
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = "authUser") {
    if (!n.length) return new Lo(kn(bm), t, r);
    const o = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        }),
      )
    ).filter((u) => u);
    let i = o[0] || kn(bm);
    const s = Oa(r, t.config.apiKey, t.name);
    let a = null;
    for (const u of n)
      try {
        const d = await u._get(s);
        if (d) {
          const f = Yr._fromJSON(t, d);
          u !== i && (a = f), (i = u);
          break;
        }
      } catch {}
    const l = o.filter((u) => u._shouldAllowMigration);
    return !i._shouldAllowMigration || !l.length
      ? new Lo(i, t, r)
      : ((i = l[0]),
        a && (await i._set(s, a.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== i)
              try {
                await u._remove(s);
              } catch {}
          }),
        ),
        new Lo(i, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Sm(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (pw(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (fw(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (gw(t)) return "Blackberry";
  if (vw(t)) return "Webos";
  if (eh(t)) return "Safari";
  if ((t.includes("chrome/") || hw(t)) && !t.includes("edge/")) return "Chrome";
  if (mw(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function fw(e = Ke()) {
  return /firefox\//i.test(e);
}
function eh(e = Ke()) {
  const t = e.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function hw(e = Ke()) {
  return /crios\//i.test(e);
}
function pw(e = Ke()) {
  return /iemobile/i.test(e);
}
function mw(e = Ke()) {
  return /android/i.test(e);
}
function gw(e = Ke()) {
  return /blackberry/i.test(e);
}
function vw(e = Ke()) {
  return /webos/i.test(e);
}
function iu(e = Ke()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function NP(e = Ke()) {
  var t;
  return (
    iu(e) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function MP() {
  return Kk() && document.documentMode === 10;
}
function yw(e = Ke()) {
  return iu(e) || mw(e) || vw(e) || gw(e) || /windows phone/i.test(e) || pw(e);
}
function LP() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ww(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = Sm(Ke());
      break;
    case "Worker":
      n = `${Sm(Ke())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Fs}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FP {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (i) =>
      new Promise((s, a) => {
        try {
          const l = t(i);
          s(l);
        } catch (l) {
          a(l);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const o = this.queue.length - 1;
    return () => {
      this.queue[o] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const o of n)
        try {
          o();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function UP(e, t = {}) {
  return Ar(e, "GET", "/v2/passwordPolicy", Rr(e, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zP = 6;
class $P {
  constructor(t) {
    var n, r, o, i;
    const s = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (n = s.minPasswordLength) !== null && n !== void 0 ? n : zP),
      s.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength),
      s.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          s.containsLowercaseCharacter),
      s.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          s.containsUppercaseCharacter),
      s.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          s.containsNumericCharacter),
      s.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          s.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (o =
          (r = t.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join("")) !== null && o !== void 0
          ? o
          : ""),
      (this.forceUpgradeOnSignin =
        (i = t.forceUpgradeOnSignin) !== null && i !== void 0 ? i : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var n, r, o, i, s, a;
    const l = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, l),
      this.validatePasswordCharacterOptions(t, l),
      l.isValid &&
        (l.isValid =
          (n = l.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      l.isValid &&
        (l.isValid =
          (r = l.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      l.isValid &&
        (l.isValid =
          (o = l.containsLowercaseLetter) !== null && o !== void 0 ? o : !0),
      l.isValid &&
        (l.isValid =
          (i = l.containsUppercaseLetter) !== null && i !== void 0 ? i : !0),
      l.isValid &&
        (l.isValid =
          (s = l.containsNumericCharacter) !== null && s !== void 0 ? s : !0),
      l.isValid &&
        (l.isValid =
          (a = l.containsNonAlphanumericCharacter) !== null && a !== void 0
            ? a
            : !0),
      l
    );
  }
  validatePasswordLengthOptions(t, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      o = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = t.length >= r),
      o && (n.meetsMaxPasswordLength = t.length <= o);
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let o = 0; o < t.length; o++)
      (r = t.charAt(o)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r),
        );
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, o, i) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = o)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = i));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jP {
  constructor(t, n, r, o) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = o),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new xm(this)),
      (this.idTokenSubscription = new xm(this)),
      (this.beforeStateQueue = new FP(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = iw),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = o.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = kn(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, o;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Lo.create(this, t)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((o = this.currentUser) === null || o === void 0
                ? void 0
                : o.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    const r = await this.assertedPersistence.getCurrentUser();
    let o = r,
      i = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const s =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        a = o == null ? void 0 : o._redirectEventId,
        l = await this.tryRedirectSignIn(t);
      (!s || s === a) && l != null && l.user && ((o = l.user), (i = !0));
    }
    if (!o) return this.directlySetCurrentUser(null);
    if (!o._redirectEventId) {
      if (i)
        try {
          await this.beforeStateQueue.runMiddleware(o);
        } catch (s) {
          (o = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(s),
            );
        }
      return o
        ? this.reloadAndSetCurrentUserOrClear(o)
        : this.directlySetCurrentUser(null);
    }
    return (
      W(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === o._redirectEventId
        ? this.directlySetCurrentUser(o)
        : this.reloadAndSetCurrentUserOrClear(o)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await Sl(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = gP();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    const n = t ? Fn(t) : null;
    return (
      n &&
        W(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token",
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && W(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return (
      await this.beforeStateQueue.runMiddleware(null),
      (this.redirectPersistenceManager || this._popupRedirectResolver) &&
        (await this._setRedirectUser(null)),
      this._updateCurrentUser(null, !0)
    );
  }
  setPersistence(t) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(kn(t));
    });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {},
          ),
        )
      : n.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await UP(this),
      n = new $P(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new Ms("auth", "Firebase", t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  authStateReady() {
    return new Promise((t, n) => {
      if (this.currentUser) t();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), t();
        }, n);
      }
    });
  }
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: t,
          idToken: n,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await DP(this, r);
    }
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && kn(t)) || this._popupRedirectResolver;
      W(n, this, "argument-error"),
        (this.redirectPersistenceManager = await Lo.create(
          this,
          [kn(n._redirectPersistence)],
          "redirectUser",
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === t
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
              ? void 0
              : r._redirectEventId) === t
          ? this.redirectUser
          : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, o) {
    if (this._deleted) return () => {};
    const i = typeof n == "function" ? n : n.next.bind(n);
    let s = !1;
    const a = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (W(a, this, "internal-error"),
      a.then(() => {
        s || i(this.currentUser);
      }),
      typeof n == "function")
    ) {
      const l = t.addObserver(n, r, o);
      return () => {
        (s = !0), l();
      };
    } else {
      const l = t.addObserver(n);
      return () => {
        (s = !0), l();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      W(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = ww(
        this.config.clientPlatform,
        this._getFrameworks(),
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    r && (n["X-Firebase-Client"] = r);
    const o = await this._getAppCheckToken();
    return o && (n["X-Firebase-AppCheck"] = o), n;
  }
  async _getAppCheckToken() {
    var t;
    const n = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      n != null &&
        n.error &&
        fP(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function Or(e) {
  return Fn(e);
}
class xm {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = Zk((n) => (this.observer = n)));
  }
  get next() {
    return (
      W(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let su = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function BP(e) {
  su = e;
}
function Ew(e) {
  return su.loadJS(e);
}
function VP() {
  return su.recaptchaEnterpriseScript;
}
function WP() {
  return su.gapiScript;
}
function HP(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
const KP = "recaptcha-enterprise",
  GP = "NO_RECAPTCHA";
class YP {
  constructor(t) {
    (this.type = KP), (this.auth = Or(t));
  }
  async verify(t = "verify", n = !1) {
    async function r(i) {
      if (!n) {
        if (i.tenantId == null && i._agentRecaptchaConfig != null)
          return i._agentRecaptchaConfig.siteKey;
        if (
          i.tenantId != null &&
          i._tenantRecaptchaConfigs[i.tenantId] !== void 0
        )
          return i._tenantRecaptchaConfigs[i.tenantId].siteKey;
      }
      return new Promise(async (s, a) => {
        SP(i, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((l) => {
            if (l.recaptchaKey === void 0)
              a(new Error("recaptcha Enterprise site key undefined"));
            else {
              const u = new bP(l);
              return (
                i.tenantId == null
                  ? (i._agentRecaptchaConfig = u)
                  : (i._tenantRecaptchaConfigs[i.tenantId] = u),
                s(u.siteKey)
              );
            }
          })
          .catch((l) => {
            a(l);
          });
      });
    }
    function o(i, s, a) {
      const l = window.grecaptcha;
      wm(l)
        ? l.enterprise.ready(() => {
            l.enterprise
              .execute(i, { action: t })
              .then((u) => {
                s(u);
              })
              .catch(() => {
                s(GP);
              });
          })
        : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((i, s) => {
      r(this.auth)
        .then((a) => {
          if (!n && wm(window.grecaptcha)) o(a, i, s);
          else {
            if (typeof window > "u") {
              s(new Error("RecaptchaVerifier is only supported in browser"));
              return;
            }
            let l = VP();
            l.length !== 0 && (l += a),
              Ew(l)
                .then(() => {
                  o(a, i, s);
                })
                .catch((u) => {
                  s(u);
                });
          }
        })
        .catch((a) => {
          s(a);
        });
    });
  }
}
async function Cm(e, t, n, r = !1) {
  const o = new YP(e);
  let i;
  try {
    i = await o.verify(n);
  } catch {
    i = await o.verify(n, !0);
  }
  const s = Object.assign({}, t);
  return (
    r
      ? Object.assign(s, { captchaResp: i })
      : Object.assign(s, { captchaResponse: i }),
    Object.assign(s, { clientType: "CLIENT_TYPE_WEB" }),
    Object.assign(s, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
    s
  );
}
async function Cd(e, t, n, r) {
  var o;
  if (
    !((o = e._getRecaptchaConfig()) === null || o === void 0) &&
    o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
  ) {
    const i = await Cm(e, t, n, n === "getOobCode");
    return r(e, i);
  } else
    return r(e, t).catch(async (i) => {
      if (i.code === "auth/missing-recaptcha-token") {
        console.log(
          `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`,
        );
        const s = await Cm(e, t, n, n === "getOobCode");
        return r(e, s);
      } else return Promise.reject(i);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function QP(e, t) {
  const n = tw(e, "auth");
  if (n.isInitialized()) {
    const o = n.getImmediate(),
      i = n.getOptions();
    if (wl(i, t ?? {})) return o;
    Lt(o, "already-initialized");
  }
  return n.initialize({ options: t });
}
function qP(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(kn);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(
      r,
      t == null ? void 0 : t.popupRedirectResolver,
    );
}
function XP(e, t, n) {
  const r = Or(e);
  W(r._canInitEmulator, r, "emulator-config-failed"),
    W(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
  const o = !1,
    i = bw(t),
    { host: s, port: a } = JP(t),
    l = a === null ? "" : `:${a}`;
  (r.config.emulator = { url: `${i}//${s}${l}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: s,
      port: a,
      protocol: i.replace(":", ""),
      options: Object.freeze({ disableWarnings: o }),
    })),
    ZP();
}
function bw(e) {
  const t = e.indexOf(":");
  return t < 0 ? "" : e.substr(0, t + 1);
}
function JP(e) {
  const t = bw(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    o = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (o) {
    const i = o[1];
    return { host: i, port: _m(r.substr(i.length + 1)) };
  } else {
    const [i, s] = r.split(":");
    return { host: i, port: _m(s) };
  }
}
function _m(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function ZP() {
  function e() {
    const t = document.createElement("p"),
      n = t.style;
    (t.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      t.classList.add("firebase-emulator-warning"),
      document.body.appendChild(t);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.",
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", e)
        : e());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class th {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return Tn("not implemented");
  }
  _getIdTokenResponse(t) {
    return Tn("not implemented");
  }
  _linkToIdToken(t, n) {
    return Tn("not implemented");
  }
  _getReauthenticationResolver(t) {
    return Tn("not implemented");
  }
}
async function eR(e, t) {
  return Ar(e, "POST", "/v1/accounts:signUp", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tR(e, t) {
  return zs(e, "POST", "/v1/accounts:signInWithPassword", Rr(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nR(e, t) {
  return zs(e, "POST", "/v1/accounts:signInWithEmailLink", Rr(e, t));
}
async function rR(e, t) {
  return zs(e, "POST", "/v1/accounts:signInWithEmailLink", Rr(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xs extends th {
  constructor(t, n, r, o = null) {
    super("password", r),
      (this._email = t),
      (this._password = n),
      (this._tenantId = o);
  }
  static _fromEmailAndPassword(t, n) {
    return new xs(t, n, "password");
  }
  static _fromEmailAndCode(t, n, r = null) {
    return new xs(t, n, "emailLink", r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t;
    if (n != null && n.email && n != null && n.password) {
      if (n.signInMethod === "password")
        return this._fromEmailAndPassword(n.email, n.password);
      if (n.signInMethod === "emailLink")
        return this._fromEmailAndCode(n.email, n.password, n.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(t) {
    switch (this.signInMethod) {
      case "password":
        const n = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Cd(t, n, "signInWithPassword", tR);
      case "emailLink":
        return nR(t, { email: this._email, oobCode: this._password });
      default:
        Lt(t, "internal-error");
    }
  }
  async _linkToIdToken(t, n) {
    switch (this.signInMethod) {
      case "password":
        const r = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Cd(t, r, "signUpPassword", eR);
      case "emailLink":
        return rR(t, {
          idToken: n,
          email: this._email,
          oobCode: this._password,
        });
      default:
        Lt(t, "internal-error");
    }
  }
  _getReauthenticationResolver(t) {
    return this._getIdTokenResponse(t);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Fo(e, t) {
  return zs(e, "POST", "/v1/accounts:signInWithIdp", Rr(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const oR = "http://localhost";
class no extends th {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new no(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
          ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
          : Lt("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: r, signInMethod: o } = n,
      i = qf(n, ["providerId", "signInMethod"]);
    if (!r || !o) return null;
    const s = new no(r, o);
    return (
      (s.idToken = i.idToken || void 0),
      (s.accessToken = i.accessToken || void 0),
      (s.secret = i.secret),
      (s.nonce = i.nonce),
      (s.pendingToken = i.pendingToken || null),
      s
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return Fo(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Fo(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Fo(t, n);
  }
  buildRequest() {
    const t = { requestUri: oR, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = Ls(n));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iR(e) {
  switch (e) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function sR(e) {
  const t = Mi(Li(e)).link,
    n = t ? Mi(Li(t)).deep_link_id : null,
    r = Mi(Li(e)).deep_link_id;
  return (r ? Mi(Li(r)).link : null) || r || n || t || e;
}
class nh {
  constructor(t) {
    var n, r, o, i, s, a;
    const l = Mi(Li(t)),
      u = (n = l.apiKey) !== null && n !== void 0 ? n : null,
      d = (r = l.oobCode) !== null && r !== void 0 ? r : null,
      f = iR((o = l.mode) !== null && o !== void 0 ? o : null);
    W(u && d && f, "argument-error"),
      (this.apiKey = u),
      (this.operation = f),
      (this.code = d),
      (this.continueUrl =
        (i = l.continueUrl) !== null && i !== void 0 ? i : null),
      (this.languageCode =
        (s = l.languageCode) !== null && s !== void 0 ? s : null),
      (this.tenantId = (a = l.tenantId) !== null && a !== void 0 ? a : null);
  }
  static parseLink(t) {
    const n = sR(t);
    try {
      return new nh(n);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fi {
  constructor() {
    this.providerId = fi.PROVIDER_ID;
  }
  static credential(t, n) {
    return xs._fromEmailAndPassword(t, n);
  }
  static credentialWithLink(t, n) {
    const r = nh.parseLink(n);
    return W(r, "argument-error"), xs._fromEmailAndCode(t, r.code, r.tenantId);
  }
}
fi.PROVIDER_ID = "password";
fi.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
fi.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rh {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $s extends rh {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xn extends $s {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return no._fromParams({
      providerId: Xn.PROVIDER_ID,
      signInMethod: Xn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Xn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Xn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Xn.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Xn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Xn.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jn extends $s {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, n) {
    return no._fromParams({
      providerId: Jn.PROVIDER_ID,
      signInMethod: Jn.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return Jn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Jn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return Jn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Jn.GOOGLE_SIGN_IN_METHOD = "google.com";
Jn.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zn extends $s {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return no._fromParams({
      providerId: Zn.PROVIDER_ID,
      signInMethod: Zn.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Zn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Zn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Zn.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Zn.GITHUB_SIGN_IN_METHOD = "github.com";
Zn.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class er extends $s {
  constructor() {
    super("twitter.com");
  }
  static credential(t, n) {
    return no._fromParams({
      providerId: er.PROVIDER_ID,
      signInMethod: er.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return er.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return er.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return er.credential(n, r);
    } catch {
      return null;
    }
  }
}
er.TWITTER_SIGN_IN_METHOD = "twitter.com";
er.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aR(e, t) {
  return zs(e, "POST", "/v1/accounts:signUp", Rr(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ro {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, o = !1) {
    const i = await Yr._fromIdTokenResponse(t, r, o),
      s = Tm(r);
    return new ro({
      user: i,
      providerId: s,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const o = Tm(r);
    return new ro({
      user: t,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function Tm(e) {
  return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xl extends Pr {
  constructor(t, n, r, o) {
    var i;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = o),
      Object.setPrototypeOf(this, xl.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (i = t.tenantId) !== null && i !== void 0 ? i : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, o) {
    return new xl(t, n, r, o);
  }
}
function Sw(e, t, n, r) {
  return (
    t === "reauthenticate"
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((i) => {
    throw i.code === "auth/multi-factor-auth-required"
      ? xl._fromErrorAndOperation(e, i, t, r)
      : i;
  });
}
async function lR(e, t, n = !1) {
  const r = await bs(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return ro._forOperation(e, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function uR(e, t, n = !1) {
  const { auth: r } = e,
    o = "reauthenticate";
  try {
    const i = await bs(e, Sw(r, o, t, e), n);
    W(i.idToken, r, "internal-error");
    const s = Zf(i.idToken);
    W(s, r, "internal-error");
    const { sub: a } = s;
    return W(e.uid === a, r, "user-mismatch"), ro._forOperation(e, o, i);
  } catch (i) {
    throw (
      ((i == null ? void 0 : i.code) === "auth/user-not-found" &&
        Lt(r, "user-mismatch"),
      i)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function xw(e, t, n = !1) {
  const r = "signIn",
    o = await Sw(e, r, t),
    i = await ro._fromIdTokenResponse(e, r, o);
  return n || (await e._updateCurrentUser(i.user)), i;
}
async function cR(e, t) {
  return xw(Or(e), t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Cw(e) {
  const t = Or(e);
  t._getPasswordPolicyInternal() && (await t._updatePasswordPolicy());
}
async function _D(e, t, n) {
  const r = Or(e),
    s = await Cd(
      r,
      {
        returnSecureToken: !0,
        email: t,
        password: n,
        clientType: "CLIENT_TYPE_WEB",
      },
      "signUpPassword",
      aR,
    ).catch((l) => {
      throw (l.code === "auth/password-does-not-meet-requirements" && Cw(e), l);
    }),
    a = await ro._fromIdTokenResponse(r, "signIn", s);
  return await r._updateCurrentUser(a.user), a;
}
function TD(e, t, n) {
  return cR(Fn(e), fi.credential(t, n)).catch(async (r) => {
    throw (r.code === "auth/password-does-not-meet-requirements" && Cw(e), r);
  });
}
function dR(e, t, n, r) {
  return Fn(e).onIdTokenChanged(t, n, r);
}
function fR(e, t, n) {
  return Fn(e).beforeAuthStateChanged(t, n);
}
function kD(e, t, n, r) {
  return Fn(e).onAuthStateChanged(t, n, r);
}
function ID(e) {
  return Fn(e).signOut();
}
const Cl = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _w {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Cl, "1"),
          this.storage.removeItem(Cl),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hR() {
  const e = Ke();
  return eh(e) || iu(e);
}
const pR = 1e3,
  mR = 10;
class Tw extends _w {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = hR() && LP()),
      (this.fallbackToPolling = yw()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        o = this.localCache[n];
      r !== o && t(n, o, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((s, a, l) => {
        this.notifyListeners(s, l);
      });
      return;
    }
    const r = t.key;
    if (
      (n ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const s = this.storage.getItem(r);
      if (t.newValue !== s)
        t.newValue !== null
          ? this.storage.setItem(r, t.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === t.newValue && !n) return;
    }
    const o = () => {
        const s = this.storage.getItem(r);
        (!n && this.localCache[r] === s) || this.notifyListeners(r, s);
      },
      i = this.storage.getItem(r);
    MP() && i !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(o, mR)
      : o();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const o of Array.from(r)) o(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: t, oldValue: n, newValue: r }),
            !0,
          );
        });
      }, pR));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, n) {
    await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
  }
  async _get(t) {
    const n = await super._get(t);
    return (this.localCache[t] = JSON.stringify(n)), n;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
Tw.type = "LOCAL";
const gR = Tw;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kw extends _w {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
kw.type = "SESSION";
const Iw = kw;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vR(e) {
  return Promise.all(
    e.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    }),
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class au {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((o) => o.isListeningto(t));
    if (n) return n;
    const r = new au(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: o, data: i } = n.data,
      s = this.handlersMap[o];
    if (!(s != null && s.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: o });
    const a = Array.from(s).map(async (u) => u(n.origin, i)),
      l = await vR(a);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: o,
      response: l,
    });
  }
  _subscribe(t, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n);
  }
  _unsubscribe(t, n) {
    this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
au.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oh(e = "", t = 10) {
  let n = "";
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yR {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const o = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!o) throw new Error("connection_unavailable");
    let i, s;
    return new Promise((a, l) => {
      const u = oh("", 20);
      o.port1.start();
      const d = setTimeout(() => {
        l(new Error("unsupported_event"));
      }, r);
      (s = {
        messageChannel: o,
        onMessage(f) {
          const c = f;
          if (c.data.eventId === u)
            switch (c.data.status) {
              case "ack":
                clearTimeout(d),
                  (i = setTimeout(() => {
                    l(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(i), a(c.data.response);
                break;
              default:
                clearTimeout(d),
                  clearTimeout(i),
                  l(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(s),
        o.port1.addEventListener("message", s.onMessage),
        this.target.postMessage({ eventType: t, eventId: u, data: n }, [
          o.port2,
        ]);
    }).finally(() => {
      s && this.removeMessageHandler(s);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pn() {
  return window;
}
function wR(e) {
  pn().location.href = e;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pw() {
  return (
    typeof pn().WorkerGlobalScope < "u" &&
    typeof pn().importScripts == "function"
  );
}
async function ER() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function bR() {
  var e;
  return (
    ((e = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    e === void 0
      ? void 0
      : e.controller) || null
  );
}
function SR() {
  return Pw() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Rw = "firebaseLocalStorageDb",
  xR = 1,
  _l = "firebaseLocalStorage",
  Aw = "fbase_key";
class js {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function lu(e, t) {
  return e.transaction([_l], t ? "readwrite" : "readonly").objectStore(_l);
}
function CR() {
  const e = indexedDB.deleteDatabase(Rw);
  return new js(e).toPromise();
}
function _d() {
  const e = indexedDB.open(Rw, xR);
  return new Promise((t, n) => {
    e.addEventListener("error", () => {
      n(e.error);
    }),
      e.addEventListener("upgradeneeded", () => {
        const r = e.result;
        try {
          r.createObjectStore(_l, { keyPath: Aw });
        } catch (o) {
          n(o);
        }
      }),
      e.addEventListener("success", async () => {
        const r = e.result;
        r.objectStoreNames.contains(_l)
          ? t(r)
          : (r.close(), await CR(), t(await _d()));
      });
  });
}
async function km(e, t, n) {
  const r = lu(e, !0).put({ [Aw]: t, value: n });
  return new js(r).toPromise();
}
async function _R(e, t) {
  const n = lu(e, !1).get(t),
    r = await new js(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Im(e, t) {
  const n = lu(e, !0).delete(t);
  return new js(n).toPromise();
}
const TR = 800,
  kR = 3;
class Ow {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {},
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await _d()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > kR) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Pw() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = au._getInstance(SR())),
      this.receiver._subscribe("keyChanged", async (t, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, n;
    if (((this.activeServiceWorker = await ER()), !this.activeServiceWorker))
      return;
    this.sender = new yR(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((t = r[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        bR() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: t },
          this.serviceWorkerReceiverAvailable ? 800 : 50,
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await _d();
      return await km(t, Cl, "1"), await Im(t, Cl), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => km(r, t, n)),
        (this.localCache[t] = n),
        this.notifyServiceWorker(t)
      ),
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => _R(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => Im(n, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      ),
    );
  }
  async _poll() {
    const t = await this._withRetries((o) => {
      const i = lu(o, !1).getAll();
      return new js(i).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (t.length !== 0)
      for (const { fbase_key: o, value: i } of t)
        r.add(o),
          JSON.stringify(this.localCache[o]) !== JSON.stringify(i) &&
            (this.notifyListeners(o, i), n.push(o));
    for (const o of Object.keys(this.localCache))
      this.localCache[o] &&
        !r.has(o) &&
        (this.notifyListeners(o, null), n.push(o));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const o of Array.from(r)) o(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), TR));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Ow.type = "LOCAL";
const IR = Ow;
new Us(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Dw(e, t) {
  return t
    ? kn(t)
    : (W(e._popupRedirectResolver, e, "argument-error"),
      e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ih extends th {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Fo(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return Fo(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return Fo(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (n.idToken = t), n;
  }
}
function PR(e) {
  return xw(e.auth, new ih(e), e.bypassAuthState);
}
function RR(e) {
  const { auth: t, user: n } = e;
  return W(n, t, "internal-error"), uR(n, new ih(e), e.bypassAuthState);
}
async function AR(e) {
  const { auth: t, user: n } = e;
  return W(n, t, "internal-error"), lR(n, new ih(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nw {
  constructor(t, n, r, o, i = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = o),
      (this.bypassAuthState = i),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = { resolve: t, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: o,
      tenantId: i,
      error: s,
      type: a,
    } = t;
    if (s) {
      this.reject(s);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: i || void 0,
      postBody: o || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(a)(l));
    } catch (u) {
      this.reject(u);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return PR;
      case "linkViaPopup":
      case "linkViaRedirect":
        return AR;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return RR;
      default:
        Lt(this.auth, "internal-error");
    }
  }
  resolve(t) {
    Mn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    Mn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const OR = new Us(2e3, 1e4);
async function PD(e, t, n) {
  const r = Or(e);
  hP(e, t, rh);
  const o = Dw(r, n);
  return new jr(r, "signInViaPopup", t, o).executeNotNull();
}
class jr extends Nw {
  constructor(t, n, r, o, i) {
    super(t, n, o, i),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      jr.currentPopupAction && jr.currentPopupAction.cancel(),
      (jr.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return W(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    Mn(this.filter.length === 1, "Popup operations only handle one event");
    const t = oh();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t,
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(hn(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return (
      ((t = this.authWindow) === null || t === void 0
        ? void 0
        : t.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(hn(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (jr.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(hn(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, OR.get());
    };
    t();
  }
}
jr.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DR = "pendingRedirect",
  Da = new Map();
class NR extends Nw {
  constructor(t, n, r = !1) {
    super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r,
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = Da.get(this.auth._key());
    if (!t) {
      try {
        const r = (await MR(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      Da.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        Da.set(this.auth._key(), () => Promise.resolve(null)),
      t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const n = await this.auth._redirectUserForId(t.eventId);
      if (n) return (this.user = n), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function MR(e, t) {
  const n = UR(t),
    r = FR(e);
  if (!(await r._isAvailable())) return !1;
  const o = (await r._get(n)) === "true";
  return await r._remove(n), o;
}
function LR(e, t) {
  Da.set(e._key(), t);
}
function FR(e) {
  return kn(e._redirectPersistence);
}
function UR(e) {
  return Oa(DR, e.config.apiKey, e.name);
}
async function zR(e, t, n = !1) {
  const r = Or(e),
    o = Dw(r, t),
    s = await new NR(r, o, n).execute();
  return (
    s &&
      !n &&
      (delete s.user._redirectEventId,
      await r._persistUserIfCurrent(s.user),
      await r._setRedirectUser(null, t)),
    s
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $R = 10 * 60 * 1e3;
class jR {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(t, r) &&
          ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !BR(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    var r;
    if (t.error && !Mw(t)) {
      const o =
        ((r = t.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(hn(this.auth, o));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= $R &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(Pm(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(Pm(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function Pm(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((t) => t)
    .join("-");
}
function Mw({ type: e, error: t }) {
  return (
    e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
  );
}
function BR(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Mw(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function VR(e, t = {}) {
  return Ar(e, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const WR = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  HR = /^https?/;
async function KR(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await VR(e);
  for (const n of t)
    try {
      if (GR(n)) return;
    } catch {}
  Lt(e, "unauthorized-domain");
}
function GR(e) {
  const t = xd(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const s = new URL(e);
    return s.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          e.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : n === "chrome-extension:" && s.hostname === r;
  }
  if (!HR.test(n)) return !1;
  if (WR.test(e)) return r === e;
  const o = e.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const YR = new Us(3e4, 6e4);
function Rm() {
  const e = pn().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function QR(e) {
  return new Promise((t, n) => {
    var r, o, i;
    function s() {
      Rm(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            Rm(), n(hn(e, "network-request-failed"));
          },
          timeout: YR.get(),
        });
    }
    if (
      !(
        (o = (r = pn().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || o === void 0
      ) &&
      o.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((i = pn().gapi) === null || i === void 0) && i.load) s();
    else {
      const a = HP("iframefcb");
      return (
        (pn()[a] = () => {
          gapi.load ? s() : n(hn(e, "network-request-failed"));
        }),
        Ew(`${WP()}?onload=${a}`).catch((l) => n(l))
      );
    }
  }).catch((t) => {
    throw ((Na = null), t);
  });
}
let Na = null;
function qR(e) {
  return (Na = Na || QR(e)), Na;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const XR = new Us(5e3, 15e3),
  JR = "__/auth/iframe",
  ZR = "emulator/auth/iframe",
  eA = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  tA = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function nA(e) {
  const t = e.config;
  W(t.authDomain, e, "auth-domain-config-required");
  const n = t.emulator ? Jf(t, ZR) : `https://${e.config.authDomain}/${JR}`,
    r = { apiKey: t.apiKey, appName: e.name, v: Fs },
    o = tA.get(e.config.apiHost);
  o && (r.eid = o);
  const i = e._getFrameworks();
  return i.length && (r.fw = i.join(",")), `${n}?${Ls(r).slice(1)}`;
}
async function rA(e) {
  const t = await qR(e),
    n = pn().gapi;
  return (
    W(n, e, "internal-error"),
    t.open(
      {
        where: document.body,
        url: nA(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: eA,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (o, i) => {
          await r.restyle({ setHideOnLeave: !1 });
          const s = hn(e, "network-request-failed"),
            a = pn().setTimeout(() => {
              i(s);
            }, XR.get());
          function l() {
            pn().clearTimeout(a), o(r);
          }
          r.ping(l).then(l, () => {
            i(s);
          });
        }),
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const oA = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  iA = 500,
  sA = 600,
  aA = "_blank",
  lA = "http://localhost";
class Am {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function uA(e, t, n, r = iA, o = sA) {
  const i = Math.max((window.screen.availHeight - o) / 2, 0).toString(),
    s = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = "";
  const l = Object.assign(Object.assign({}, oA), {
      width: r.toString(),
      height: o.toString(),
      top: i,
      left: s,
    }),
    u = Ke().toLowerCase();
  n && (a = hw(u) ? aA : n), fw(u) && ((t = t || lA), (l.scrollbars = "yes"));
  const d = Object.entries(l).reduce((c, [g, w]) => `${c}${g}=${w},`, "");
  if (NP(u) && a !== "_self") return cA(t || "", a), new Am(null);
  const f = window.open(t || "", a, d);
  W(f, e, "popup-blocked");
  try {
    f.focus();
  } catch {}
  return new Am(f);
}
function cA(e, t) {
  const n = document.createElement("a");
  (n.href = e), (n.target = t);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null,
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dA = "__/auth/handler",
  fA = "emulator/auth/handler",
  hA = encodeURIComponent("fac");
async function Om(e, t, n, r, o, i) {
  W(e.config.authDomain, e, "auth-domain-config-required"),
    W(e.config.apiKey, e, "invalid-api-key");
  const s = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: Fs,
    eventId: o,
  };
  if (t instanceof rh) {
    t.setDefaultLanguage(e.languageCode),
      (s.providerId = t.providerId || ""),
      Jk(t.getCustomParameters()) ||
        (s.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [d, f] of Object.entries({})) s[d] = f;
  }
  if (t instanceof $s) {
    const d = t.getScopes().filter((f) => f !== "");
    d.length > 0 && (s.scopes = d.join(","));
  }
  e.tenantId && (s.tid = e.tenantId);
  const a = s;
  for (const d of Object.keys(a)) a[d] === void 0 && delete a[d];
  const l = await e._getAppCheckToken(),
    u = l ? `#${hA}=${encodeURIComponent(l)}` : "";
  return `${pA(e)}?${Ls(a).slice(1)}${u}`;
}
function pA({ config: e }) {
  return e.emulator ? Jf(e, fA) : `https://${e.authDomain}/${dA}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tc = "webStorageSupport";
class mA {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Iw),
      (this._completeRedirectFn = zR),
      (this._overrideRedirectResult = LR);
  }
  async _openPopup(t, n, r, o) {
    var i;
    Mn(
      (i = this.eventManagers[t._key()]) === null || i === void 0
        ? void 0
        : i.manager,
      "_initialize() not called before _openPopup()",
    );
    const s = await Om(t, n, r, xd(), o);
    return uA(t, s, oh());
  }
  async _openRedirect(t, n, r, o) {
    await this._originValidation(t);
    const i = await Om(t, n, r, xd(), o);
    return wR(i), new Promise(() => {});
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: o, promise: i } = this.eventManagers[n];
      return o
        ? Promise.resolve(o)
        : (Mn(i, "If manager is not set, promise should be"), i);
    }
    const r = this.initAndGetManager(t);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(t) {
    const n = await rA(t),
      r = new jR(t);
    return (
      n.register(
        "authEvent",
        (o) => (
          W(o == null ? void 0 : o.authEvent, t, "invalid-auth-event"),
          { status: r.onEvent(o.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      ),
      (this.eventManagers[t._key()] = { manager: r }),
      (this.iframes[t._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(t, n) {
    this.iframes[t._key()].send(
      tc,
      { type: tc },
      (o) => {
        var i;
        const s =
          (i = o == null ? void 0 : o[0]) === null || i === void 0
            ? void 0
            : i[tc];
        s !== void 0 && n(!!s), Lt(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = KR(t)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return yw() || eh() || iu();
  }
}
const gA = mA;
var Dm = "@firebase/auth",
  Nm = "1.6.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vA {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
        null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    W(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth",
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yA(e) {
  switch (e) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function wA(e) {
  ws(
    new ni(
      "auth",
      (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate(),
          o = t.getProvider("heartbeat"),
          i = t.getProvider("app-check-internal"),
          { apiKey: s, authDomain: a } = r.options;
        W(s && !s.includes(":"), "invalid-api-key", { appName: r.name });
        const l = {
            apiKey: s,
            authDomain: a,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: ww(e),
          },
          u = new jP(r, o, i, l);
        return qP(u, n), u;
      },
      "PUBLIC",
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      }),
  ),
    ws(
      new ni(
        "auth-internal",
        (t) => {
          const n = Or(t.getProvider("auth").getImmediate());
          return ((r) => new vA(r))(n);
        },
        "PRIVATE",
      ).setInstantiationMode("EXPLICIT"),
    ),
    Mo(Dm, Nm, yA(e)),
    Mo(Dm, Nm, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const EA = 5 * 60,
  bA = X0("authIdTokenMaxAge") || EA;
let Mm = null;
const SA = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > bA) return;
  const o = n == null ? void 0 : n.token;
  Mm !== o &&
    ((Mm = o),
    await fetch(e, {
      method: o ? "POST" : "DELETE",
      headers: o ? { Authorization: `Bearer ${o}` } : {},
    }));
};
function RD(e = ZI()) {
  const t = tw(e, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const n = QP(e, { popupRedirectResolver: gA, persistence: [IR, gR, Iw] }),
    r = X0("authTokenSyncURL");
  if (r && r.match(/^\/[^\/].*/)) {
    const i = SA(r);
    fR(n, i, () => i(n.currentUser)), dR(n, (s) => i(s));
  }
  const o = jk("auth");
  return o && XP(n, `http://${o}`), n;
}
function xA() {
  var e, t;
  return (t =
    (e = document.getElementsByTagName("head")) === null || e === void 0
      ? void 0
      : e[0]) !== null && t !== void 0
    ? t
    : document;
}
BP({
  loadJS(e) {
    return new Promise((t, n) => {
      const r = document.createElement("script");
      r.setAttribute("src", e),
        (r.onload = t),
        (r.onerror = (o) => {
          const i = hn("internal-error");
          (i.customData = o), n(i);
        }),
        (r.type = "text/javascript"),
        (r.charset = "UTF-8"),
        xA().appendChild(r);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
wA("Browser");
function Td(e) {
  "@babel/helpers - typeof";
  return (
    (Td =
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
    Td(e)
  );
}
function Jt(e, t) {
  if (t.length < e)
    throw new TypeError(
      e +
        " argument" +
        (e > 1 ? "s" : "") +
        " required, but only " +
        t.length +
        " present",
    );
}
function We(e) {
  Jt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || (Td(e) === "object" && t === "[object Date]")
    ? new Date(e.getTime())
    : typeof e == "number" || t === "[object Number]"
      ? new Date(e)
      : ((typeof e == "string" || t === "[object String]") &&
          typeof console < "u" &&
          (console.warn(
            "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
          ),
          console.warn(new Error().stack)),
        new Date(NaN));
}
var CA = {};
function _A() {
  return CA;
}
function Lm(e) {
  var t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds(),
    ),
  );
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Ma(e, t) {
  Jt(2, arguments);
  var n = We(e),
    r = We(t),
    o = n.getTime() - r.getTime();
  return o < 0 ? -1 : o > 0 ? 1 : o;
}
function TA(e, t) {
  Jt(2, arguments);
  var n = We(e),
    r = We(t),
    o = n.getFullYear() - r.getFullYear(),
    i = n.getMonth() - r.getMonth();
  return o * 12 + i;
}
function kA(e, t) {
  return Jt(2, arguments), We(e).getTime() - We(t).getTime();
}
var Fm = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: function (t) {
      return t < 0 ? Math.ceil(t) : Math.floor(t);
    },
  },
  IA = "trunc";
function PA(e) {
  return e ? Fm[e] : Fm[IA];
}
function RA(e) {
  Jt(1, arguments);
  var t = We(e);
  return t.setHours(23, 59, 59, 999), t;
}
function AA(e) {
  Jt(1, arguments);
  var t = We(e),
    n = t.getMonth();
  return (
    t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  );
}
function OA(e) {
  Jt(1, arguments);
  var t = We(e);
  return RA(t).getTime() === AA(t).getTime();
}
function DA(e, t) {
  Jt(2, arguments);
  var n = We(e),
    r = We(t),
    o = Ma(n, r),
    i = Math.abs(TA(n, r)),
    s;
  if (i < 1) s = 0;
  else {
    n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30),
      n.setMonth(n.getMonth() - o * i);
    var a = Ma(n, r) === -o;
    OA(We(e)) && i === 1 && Ma(e, r) === 1 && (a = !1),
      (s = o * (i - Number(a)));
  }
  return s === 0 ? 0 : s;
}
function NA(e, t, n) {
  Jt(2, arguments);
  var r = kA(e, t) / 1e3;
  return PA(void 0)(r);
}
var MA = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  LA = function (t, n, r) {
    var o,
      i = MA[t];
    return (
      typeof i == "string"
        ? (o = i)
        : n === 1
          ? (o = i.one)
          : (o = i.other.replace("{{count}}", n.toString())),
      r != null && r.addSuffix
        ? r.comparison && r.comparison > 0
          ? "in " + o
          : o + " ago"
        : o
    );
  };
function nc(e) {
  return function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.width ? String(t.width) : e.defaultWidth,
      r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var FA = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  UA = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  zA = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  $A = {
    date: nc({ formats: FA, defaultWidth: "full" }),
    time: nc({ formats: UA, defaultWidth: "full" }),
    dateTime: nc({ formats: zA, defaultWidth: "full" }),
  },
  jA = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  BA = function (t, n, r, o) {
    return jA[t];
  };
function Pi(e) {
  return function (t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone",
      o;
    if (r === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      var a = e.defaultWidth,
        l = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[l] || e.values[a];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[u];
  };
}
var VA = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  WA = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  HA = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  KA = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  GA = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  YA = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  QA = function (t, n) {
    var r = Number(t),
      o = r % 100;
    if (o > 20 || o < 10)
      switch (o % 10) {
        case 1:
          return r + "st";
        case 2:
          return r + "nd";
        case 3:
          return r + "rd";
      }
    return r + "th";
  },
  qA = {
    ordinalNumber: QA,
    era: Pi({ values: VA, defaultWidth: "wide" }),
    quarter: Pi({
      values: WA,
      defaultWidth: "wide",
      argumentCallback: function (t) {
        return t - 1;
      },
    }),
    month: Pi({ values: HA, defaultWidth: "wide" }),
    day: Pi({ values: KA, defaultWidth: "wide" }),
    dayPeriod: Pi({
      values: GA,
      defaultWidth: "wide",
      formattingValues: YA,
      defaultFormattingWidth: "wide",
    }),
  };
function Ri(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.width,
      o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(o);
    if (!i) return null;
    var s = i[0],
      a = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(a)
        ? JA(a, function (f) {
            return f.test(s);
          })
        : XA(a, function (f) {
            return f.test(s);
          }),
      u;
    (u = e.valueCallback ? e.valueCallback(l) : l),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    var d = t.slice(s.length);
    return { value: u, rest: d };
  };
}
function XA(e, t) {
  for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
}
function JA(e, t) {
  for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function ZA(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = t.match(e.matchPattern);
    if (!r) return null;
    var o = r[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    var s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    var a = t.slice(o.length);
    return { value: s, rest: a };
  };
}
var eO = /^(\d+)(th|st|nd|rd)?/i,
  tO = /\d+/i,
  nO = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  rO = { any: [/^b/i, /^(a|c)/i] },
  oO = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  iO = { any: [/1/i, /2/i, /3/i, /4/i] },
  sO = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  aO = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  lO = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  uO = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  cO = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  dO = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  fO = {
    ordinalNumber: ZA({
      matchPattern: eO,
      parsePattern: tO,
      valueCallback: function (t) {
        return parseInt(t, 10);
      },
    }),
    era: Ri({
      matchPatterns: nO,
      defaultMatchWidth: "wide",
      parsePatterns: rO,
      defaultParseWidth: "any",
    }),
    quarter: Ri({
      matchPatterns: oO,
      defaultMatchWidth: "wide",
      parsePatterns: iO,
      defaultParseWidth: "any",
      valueCallback: function (t) {
        return t + 1;
      },
    }),
    month: Ri({
      matchPatterns: sO,
      defaultMatchWidth: "wide",
      parsePatterns: aO,
      defaultParseWidth: "any",
    }),
    day: Ri({
      matchPatterns: lO,
      defaultMatchWidth: "wide",
      parsePatterns: uO,
      defaultParseWidth: "any",
    }),
    dayPeriod: Ri({
      matchPatterns: cO,
      defaultMatchWidth: "any",
      parsePatterns: dO,
      defaultParseWidth: "any",
    }),
  },
  hO = {
    code: "en-US",
    formatDistance: LA,
    formatLong: $A,
    formatRelative: BA,
    localize: qA,
    match: fO,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Lw(e, t) {
  if (e == null)
    throw new TypeError(
      "assign requires that input parameter not be null or undefined",
    );
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function pO(e) {
  return Lw({}, e);
}
var Um = 1440,
  mO = 2520,
  rc = 43200,
  gO = 86400;
function vO(e, t, n) {
  var r, o;
  Jt(2, arguments);
  var i = _A(),
    s =
      (r =
        (o = n == null ? void 0 : n.locale) !== null && o !== void 0
          ? o
          : i.locale) !== null && r !== void 0
        ? r
        : hO;
  if (!s.formatDistance)
    throw new RangeError("locale must contain formatDistance property");
  var a = Ma(e, t);
  if (isNaN(a)) throw new RangeError("Invalid time value");
  var l = Lw(pO(n), { addSuffix: !!(n != null && n.addSuffix), comparison: a }),
    u,
    d;
  a > 0 ? ((u = We(t)), (d = We(e))) : ((u = We(e)), (d = We(t)));
  var f = NA(d, u),
    c = (Lm(d) - Lm(u)) / 1e3,
    g = Math.round((f - c) / 60),
    w;
  if (g < 2)
    return n != null && n.includeSeconds
      ? f < 5
        ? s.formatDistance("lessThanXSeconds", 5, l)
        : f < 10
          ? s.formatDistance("lessThanXSeconds", 10, l)
          : f < 20
            ? s.formatDistance("lessThanXSeconds", 20, l)
            : f < 40
              ? s.formatDistance("halfAMinute", 0, l)
              : f < 60
                ? s.formatDistance("lessThanXMinutes", 1, l)
                : s.formatDistance("xMinutes", 1, l)
      : g === 0
        ? s.formatDistance("lessThanXMinutes", 1, l)
        : s.formatDistance("xMinutes", g, l);
  if (g < 45) return s.formatDistance("xMinutes", g, l);
  if (g < 90) return s.formatDistance("aboutXHours", 1, l);
  if (g < Um) {
    var v = Math.round(g / 60);
    return s.formatDistance("aboutXHours", v, l);
  } else {
    if (g < mO) return s.formatDistance("xDays", 1, l);
    if (g < rc) {
      var E = Math.round(g / Um);
      return s.formatDistance("xDays", E, l);
    } else if (g < gO)
      return (w = Math.round(g / rc)), s.formatDistance("aboutXMonths", w, l);
  }
  if (((w = DA(d, u)), w < 12)) {
    var m = Math.round(g / rc);
    return s.formatDistance("xMonths", m, l);
  } else {
    var h = w % 12,
      y = Math.floor(w / 12);
    return h < 3
      ? s.formatDistance("aboutXYears", y, l)
      : h < 9
        ? s.formatDistance("overXYears", y, l)
        : s.formatDistance("almostXYears", y + 1, l);
  }
}
function AD(e, t) {
  return Jt(1, arguments), vO(e, Date.now(), t);
}
function yO(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = p.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: c, children: g, ...w } = f,
        v = (c == null ? void 0 : c[e][l]) || a,
        E = p.useMemo(() => w, Object.values(w));
      return N.jsx(v.Provider, { value: E, children: g });
    }
    function d(f, c) {
      const g = (c == null ? void 0 : c[e][l]) || a,
        w = p.useContext(g);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, d];
  }
  const o = () => {
    const i = n.map((s) => p.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return p.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, wO(o, ...t)];
}
function wO(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var EO = p.createContext(void 0);
function Fw(e) {
  const t = p.useContext(EO);
  return e || t || "ltr";
}
var oc = "rovingFocusGroup.onEntryFocus",
  bO = { bubbles: !1, cancelable: !0 },
  uu = "RovingFocusGroup",
  [kd, Uw, SO] = cy(uu),
  [xO, zw] = yO(uu, [SO]),
  [CO, _O] = xO(uu),
  $w = p.forwardRef((e, t) =>
    N.jsx(kd.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: N.jsx(kd.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: N.jsx(TO, { ...e, ref: t }),
      }),
    }),
  );
$w.displayName = uu;
var TO = p.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: s,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: l,
        onEntryFocus: u,
        preventScrollOnEntryFocus: d = !1,
        ...f
      } = e,
      c = p.useRef(null),
      g = Mt(t, c),
      w = Fw(i),
      [v = null, E] = _f({ prop: s, defaultProp: a, onChange: l }),
      [m, h] = p.useState(!1),
      y = Yt(u),
      b = Uw(n),
      S = p.useRef(!1),
      [C, _] = p.useState(0);
    return (
      p.useEffect(() => {
        const x = c.current;
        if (x)
          return x.addEventListener(oc, y), () => x.removeEventListener(oc, y);
      }, [y]),
      N.jsx(CO, {
        scope: n,
        orientation: r,
        dir: w,
        loop: o,
        currentTabStopId: v,
        onItemFocus: p.useCallback((x) => E(x), [E]),
        onItemShiftTab: p.useCallback(() => h(!0), []),
        onFocusableItemAdd: p.useCallback(() => _((x) => x + 1), []),
        onFocusableItemRemove: p.useCallback(() => _((x) => x - 1), []),
        children: N.jsx(Se.div, {
          tabIndex: m || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: ie(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: ie(e.onFocus, (x) => {
            const O = !S.current;
            if (x.target === x.currentTarget && O && !m) {
              const P = new CustomEvent(oc, bO);
              if ((x.currentTarget.dispatchEvent(P), !P.defaultPrevented)) {
                const M = b().filter((j) => j.focusable),
                  L = M.find((j) => j.active),
                  B = M.find((j) => j.id === v),
                  H = [L, B, ...M].filter(Boolean).map((j) => j.ref.current);
                Vw(H, d);
              }
            }
            S.current = !1;
          }),
          onBlur: ie(e.onBlur, () => h(!1)),
        }),
      })
    );
  }),
  jw = "RovingFocusGroupItem",
  Bw = p.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: i,
        ...s
      } = e,
      a = Ly(),
      l = i || a,
      u = _O(jw, n),
      d = u.currentTabStopId === l,
      f = Uw(n),
      { onFocusableItemAdd: c, onFocusableItemRemove: g } = u;
    return (
      p.useEffect(() => {
        if (r) return c(), () => g();
      }, [r, c, g]),
      N.jsx(kd.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: N.jsx(Se.span, {
          tabIndex: d ? 0 : -1,
          "data-orientation": u.orientation,
          ...s,
          ref: t,
          onMouseDown: ie(e.onMouseDown, (w) => {
            r ? u.onItemFocus(l) : w.preventDefault();
          }),
          onFocus: ie(e.onFocus, () => u.onItemFocus(l)),
          onKeyDown: ie(e.onKeyDown, (w) => {
            if (w.key === "Tab" && w.shiftKey) {
              u.onItemShiftTab();
              return;
            }
            if (w.target !== w.currentTarget) return;
            const v = PO(w, u.orientation, u.dir);
            if (v !== void 0) {
              if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
              w.preventDefault();
              let m = f()
                .filter((h) => h.focusable)
                .map((h) => h.ref.current);
              if (v === "last") m.reverse();
              else if (v === "prev" || v === "next") {
                v === "prev" && m.reverse();
                const h = m.indexOf(w.currentTarget);
                m = u.loop ? RO(m, h + 1) : m.slice(h + 1);
              }
              setTimeout(() => Vw(m));
            }
          }),
        }),
      })
    );
  });
Bw.displayName = jw;
var kO = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function IO(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function PO(e, t, n) {
  const r = IO(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return kO[r];
}
function Vw(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function RO(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var AO = $w,
  OO = Bw,
  sh = "Tabs",
  [DO, OD] = xf(sh, [zw]),
  Ww = zw(),
  [NO, ah] = DO(sh),
  Hw = p.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: r,
        onValueChange: o,
        defaultValue: i,
        orientation: s = "horizontal",
        dir: a,
        activationMode: l = "automatic",
        ...u
      } = e,
      d = Fw(a),
      [f, c] = _f({ prop: r, onChange: o, defaultProp: i });
    return N.jsx(NO, {
      scope: n,
      baseId: Ly(),
      value: f,
      onValueChange: c,
      orientation: s,
      dir: d,
      activationMode: l,
      children: N.jsx(Se.div, { dir: d, "data-orientation": s, ...u, ref: t }),
    });
  });
Hw.displayName = sh;
var Kw = "TabsList",
  Gw = p.forwardRef((e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e,
      i = ah(Kw, n),
      s = Ww(n);
    return N.jsx(AO, {
      asChild: !0,
      ...s,
      orientation: i.orientation,
      dir: i.dir,
      loop: r,
      children: N.jsx(Se.div, {
        role: "tablist",
        "aria-orientation": i.orientation,
        ...o,
        ref: t,
      }),
    });
  });
Gw.displayName = Kw;
var Yw = "TabsTrigger",
  Qw = p.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...i } = e,
      s = ah(Yw, n),
      a = Ww(n),
      l = Jw(s.baseId, r),
      u = Zw(s.baseId, r),
      d = r === s.value;
    return N.jsx(OO, {
      asChild: !0,
      ...a,
      focusable: !o,
      active: d,
      children: N.jsx(Se.button, {
        type: "button",
        role: "tab",
        "aria-selected": d,
        "aria-controls": u,
        "data-state": d ? "active" : "inactive",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        id: l,
        ...i,
        ref: t,
        onMouseDown: ie(e.onMouseDown, (f) => {
          !o && f.button === 0 && f.ctrlKey === !1
            ? s.onValueChange(r)
            : f.preventDefault();
        }),
        onKeyDown: ie(e.onKeyDown, (f) => {
          [" ", "Enter"].includes(f.key) && s.onValueChange(r);
        }),
        onFocus: ie(e.onFocus, () => {
          const f = s.activationMode !== "manual";
          !d && !o && f && s.onValueChange(r);
        }),
      }),
    });
  });
Qw.displayName = Yw;
var qw = "TabsContent",
  Xw = p.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: i, ...s } = e,
      a = ah(qw, n),
      l = Jw(a.baseId, r),
      u = Zw(a.baseId, r),
      d = r === a.value,
      f = p.useRef(d);
    return (
      p.useEffect(() => {
        const c = requestAnimationFrame(() => (f.current = !1));
        return () => cancelAnimationFrame(c);
      }, []),
      N.jsx(Bl, {
        present: o || d,
        children: ({ present: c }) =>
          N.jsx(Se.div, {
            "data-state": d ? "active" : "inactive",
            "data-orientation": a.orientation,
            role: "tabpanel",
            "aria-labelledby": l,
            hidden: !c,
            id: u,
            tabIndex: 0,
            ...s,
            ref: t,
            style: { ...e.style, animationDuration: f.current ? "0s" : void 0 },
            children: c && i,
          }),
      })
    );
  });
Xw.displayName = qw;
function Jw(e, t) {
  return `${e}-trigger-${t}`;
}
function Zw(e, t) {
  return `${e}-content-${t}`;
}
var DD = Hw,
  ND = Gw,
  MD = Qw,
  LD = Xw;
export {
  ID as $,
  BO as A,
  GO as B,
  VO as C,
  jO as D,
  YO as E,
  XO as F,
  JO as G,
  iD as H,
  j0 as I,
  sl as J,
  ND as K,
  ZO as L,
  MD as M,
  LD as N,
  DD as O,
  FO as P,
  kD as Q,
  zO as R,
  nD as S,
  $O as T,
  eD as U,
  UO as V,
  _D as W,
  sD as X,
  TD as Y,
  Jn as Z,
  PD as _,
  WO as a,
  U_ as a0,
  gD as a1,
  vD as a2,
  wD as a3,
  yD as a4,
  q_ as a5,
  Tb as a6,
  lD as b,
  pS as c,
  uD as d,
  mD as e,
  pD as f,
  RD as g,
  gR as h,
  JI as i,
  N as j,
  tD as k,
  gl as l,
  AD as m,
  HO as n,
  KO as o,
  qO as p,
  rD as q,
  p as r,
  oD as s,
  aD as t,
  CD as u,
  bD as v,
  ED as w,
  xD as x,
  SD as y,
  QO as z,
};
