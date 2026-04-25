function px(a, i) {
  for (var r = 0; r < i.length; r++) {
    const c = i[r];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const f in c)
        if (f !== "default" && !(f in a)) {
          const h = Object.getOwnPropertyDescriptor(c, f);
          h &&
            Object.defineProperty(
              a,
              f,
              h.get ? h : { enumerable: !0, get: () => c[f] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f);
  new MutationObserver((f) => {
    for (const h of f)
      if (h.type === "childList")
        for (const m of h.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && c(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(f) {
    const h = {};
    return (
      f.integrity && (h.integrity = f.integrity),
      f.referrerPolicy && (h.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function c(f) {
    if (f.ep) return;
    f.ep = !0;
    const h = r(f);
    fetch(f.href, h);
  }
})();
function tg(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Qc = { exports: {} },
  pi = {};
var ep;
function gx() {
  if (ep) return pi;
  ep = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function r(c, f, h) {
    var m = null;
    if (
      (h !== void 0 && (m = "" + h),
      f.key !== void 0 && (m = "" + f.key),
      "key" in f)
    ) {
      h = {};
      for (var y in f) y !== "key" && (h[y] = f[y]);
    } else h = f;
    return (
      (f = h.ref),
      { $$typeof: a, type: c, key: m, ref: f !== void 0 ? f : null, props: h }
    );
  }
  return (pi.Fragment = i), (pi.jsx = r), (pi.jsxs = r), pi;
}
var tp;
function yx() {
  return tp || ((tp = 1), (Qc.exports = gx())), Qc.exports;
}
var u = yx(),
  Xc = { exports: {} },
  gi = {},
  Kc = { exports: {} },
  Zc = {};
var np;
function vx() {
  return (
    np ||
      ((np = 1),
      (function (a) {
        function i(R, X) {
          var U = R.length;
          R.push(X);
          e: for (; 0 < U; ) {
            var re = (U - 1) >>> 1,
              pe = R[re];
            if (0 < f(pe, X)) (R[re] = X), (R[U] = pe), (U = re);
            else break e;
          }
        }
        function r(R) {
          return R.length === 0 ? null : R[0];
        }
        function c(R) {
          if (R.length === 0) return null;
          var X = R[0],
            U = R.pop();
          if (U !== X) {
            R[0] = U;
            e: for (var re = 0, pe = R.length, A = pe >>> 1; re < A; ) {
              var B = 2 * (re + 1) - 1,
                F = R[B],
                $ = B + 1,
                ce = R[$];
              if (0 > f(F, U))
                $ < pe && 0 > f(ce, F)
                  ? ((R[re] = ce), (R[$] = U), (re = $))
                  : ((R[re] = F), (R[B] = U), (re = B));
              else if ($ < pe && 0 > f(ce, U))
                (R[re] = ce), (R[$] = U), (re = $);
              else break e;
            }
          }
          return X;
        }
        function f(R, X) {
          var U = R.sortIndex - X.sortIndex;
          return U !== 0 ? U : R.id - X.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          a.unstable_now = function () {
            return h.now();
          };
        } else {
          var m = Date,
            y = m.now();
          a.unstable_now = function () {
            return m.now() - y;
          };
        }
        var v = [],
          p = [],
          x = 1,
          b = null,
          E = 3,
          O = !1,
          k = !1,
          N = !1,
          j = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          G = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function Z(R) {
          for (var X = r(p); X !== null; ) {
            if (X.callback === null) c(p);
            else if (X.startTime <= R)
              c(p), (X.sortIndex = X.expirationTime), i(v, X);
            else break;
            X = r(p);
          }
        }
        function P(R) {
          if (((N = !1), Z(R), !k))
            if (r(v) !== null) (k = !0), I || ((I = !0), J());
            else {
              var X = r(p);
              X !== null && de(P, X.startTime - R);
            }
        }
        var I = !1,
          Q = -1,
          K = 5,
          se = -1;
        function ue() {
          return j ? !0 : !(a.unstable_now() - se < K);
        }
        function he() {
          if (((j = !1), I)) {
            var R = a.unstable_now();
            se = R;
            var X = !0;
            try {
              e: {
                (k = !1), N && ((N = !1), G(Q), (Q = -1)), (O = !0);
                var U = E;
                try {
                  t: {
                    for (
                      Z(R), b = r(v);
                      b !== null && !(b.expirationTime > R && ue());

                    ) {
                      var re = b.callback;
                      if (typeof re == "function") {
                        (b.callback = null), (E = b.priorityLevel);
                        var pe = re(b.expirationTime <= R);
                        if (((R = a.unstable_now()), typeof pe == "function")) {
                          (b.callback = pe), Z(R), (X = !0);
                          break t;
                        }
                        b === r(v) && c(v), Z(R);
                      } else c(v);
                      b = r(v);
                    }
                    if (b !== null) X = !0;
                    else {
                      var A = r(p);
                      A !== null && de(P, A.startTime - R), (X = !1);
                    }
                  }
                  break e;
                } finally {
                  (b = null), (E = U), (O = !1);
                }
                X = void 0;
              }
            } finally {
              X ? J() : (I = !1);
            }
          }
        }
        var J;
        if (typeof Y == "function")
          J = function () {
            Y(he);
          };
        else if (typeof MessageChannel < "u") {
          var fe = new MessageChannel(),
            W = fe.port2;
          (fe.port1.onmessage = he),
            (J = function () {
              W.postMessage(null);
            });
        } else
          J = function () {
            L(he, 0);
          };
        function de(R, X) {
          Q = L(function () {
            R(a.unstable_now());
          }, X);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (a.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (K = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (a.unstable_next = function (R) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = E;
            }
            var U = E;
            E = X;
            try {
              return R();
            } finally {
              E = U;
            }
          }),
          (a.unstable_requestPaint = function () {
            j = !0;
          }),
          (a.unstable_runWithPriority = function (R, X) {
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
            var U = E;
            E = R;
            try {
              return X();
            } finally {
              E = U;
            }
          }),
          (a.unstable_scheduleCallback = function (R, X, U) {
            var re = a.unstable_now();
            switch (
              (typeof U == "object" && U !== null
                ? ((U = U.delay),
                  (U = typeof U == "number" && 0 < U ? re + U : re))
                : (U = re),
              R)
            ) {
              case 1:
                var pe = -1;
                break;
              case 2:
                pe = 250;
                break;
              case 5:
                pe = 1073741823;
                break;
              case 4:
                pe = 1e4;
                break;
              default:
                pe = 5e3;
            }
            return (
              (pe = U + pe),
              (R = {
                id: x++,
                callback: X,
                priorityLevel: R,
                startTime: U,
                expirationTime: pe,
                sortIndex: -1,
              }),
              U > re
                ? ((R.sortIndex = U),
                  i(p, R),
                  r(v) === null &&
                    R === r(p) &&
                    (N ? (G(Q), (Q = -1)) : (N = !0), de(P, U - re)))
                : ((R.sortIndex = pe),
                  i(v, R),
                  k || O || ((k = !0), I || ((I = !0), J()))),
              R
            );
          }),
          (a.unstable_shouldYield = ue),
          (a.unstable_wrapCallback = function (R) {
            var X = E;
            return function () {
              var U = E;
              E = X;
              try {
                return R.apply(this, arguments);
              } finally {
                E = U;
              }
            };
          });
      })(Zc)),
    Zc
  );
}
var ap;
function xx() {
  return ap || ((ap = 1), (Kc.exports = vx())), Kc.exports;
}
var Fc = { exports: {} },
  me = {};
var lp;
function bx() {
  if (lp) return me;
  lp = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    m = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    E = Symbol.iterator;
  function O(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (E && A[E]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var k = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    N = Object.assign,
    j = {};
  function L(A, B, F) {
    (this.props = A),
      (this.context = B),
      (this.refs = j),
      (this.updater = F || k);
  }
  (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (A, B) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, A, B, "setState");
    }),
    (L.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    });
  function G() {}
  G.prototype = L.prototype;
  function Y(A, B, F) {
    (this.props = A),
      (this.context = B),
      (this.refs = j),
      (this.updater = F || k);
  }
  var Z = (Y.prototype = new G());
  (Z.constructor = Y), N(Z, L.prototype), (Z.isPureReactComponent = !0);
  var P = Array.isArray;
  function I() {}
  var Q = { H: null, A: null, T: null, S: null },
    K = Object.prototype.hasOwnProperty;
  function se(A, B, F) {
    var $ = F.ref;
    return {
      $$typeof: a,
      type: A,
      key: B,
      ref: $ !== void 0 ? $ : null,
      props: F,
    };
  }
  function ue(A, B) {
    return se(A.type, B, A.props);
  }
  function he(A) {
    return typeof A == "object" && A !== null && A.$$typeof === a;
  }
  function J(A) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (F) {
        return B[F];
      })
    );
  }
  var fe = /\/+/g;
  function W(A, B) {
    return typeof A == "object" && A !== null && A.key != null
      ? J("" + A.key)
      : B.toString(36);
  }
  function de(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(I, I)
            : ((A.status = "pending"),
              A.then(
                function (B) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = B));
                },
                function (B) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = B));
                }
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function R(A, B, F, $, ce) {
    var ge = typeof A;
    (ge === "undefined" || ge === "boolean") && (A = null);
    var le = !1;
    if (A === null) le = !0;
    else
      switch (ge) {
        case "bigint":
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case a:
            case i:
              le = !0;
              break;
            case x:
              return (le = A._init), R(le(A._payload), B, F, $, ce);
          }
      }
    if (le)
      return (
        (ce = ce(A)),
        (le = $ === "" ? "." + W(A, 0) : $),
        P(ce)
          ? ((F = ""),
            le != null && (F = le.replace(fe, "$&/") + "/"),
            R(ce, B, F, "", function (Ot) {
              return Ot;
            }))
          : ce != null &&
            (he(ce) &&
              (ce = ue(
                ce,
                F +
                  (ce.key == null || (A && A.key === ce.key)
                    ? ""
                    : ("" + ce.key).replace(fe, "$&/") + "/") +
                  le
              )),
            B.push(ce)),
        1
      );
    le = 0;
    var qe = $ === "" ? "." : $ + ":";
    if (P(A))
      for (var Re = 0; Re < A.length; Re++)
        ($ = A[Re]), (ge = qe + W($, Re)), (le += R($, B, F, ge, ce));
    else if (((Re = O(A)), typeof Re == "function"))
      for (A = Re.call(A), Re = 0; !($ = A.next()).done; )
        ($ = $.value), (ge = qe + W($, Re++)), (le += R($, B, F, ge, ce));
    else if (ge === "object") {
      if (typeof A.then == "function") return R(de(A), B, F, $, ce);
      throw (
        ((B = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return le;
  }
  function X(A, B, F) {
    if (A == null) return A;
    var $ = [],
      ce = 0;
    return (
      R(A, $, "", "", function (ge) {
        return B.call(F, ge, ce++);
      }),
      $
    );
  }
  function U(A) {
    if (A._status === -1) {
      var B = A._result;
      (B = B()),
        B.then(
          function (F) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = F));
          },
          function (F) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = F));
          }
        ),
        A._status === -1 && ((A._status = 0), (A._result = B));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var re =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var B = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A == "object" &&
                  A !== null &&
                  typeof A.message == "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(B)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    pe = {
      map: X,
      forEach: function (A, B, F) {
        X(
          A,
          function () {
            B.apply(this, arguments);
          },
          F
        );
      },
      count: function (A) {
        var B = 0;
        return (
          X(A, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (A) {
        return (
          X(A, function (B) {
            return B;
          }) || []
        );
      },
      only: function (A) {
        if (!he(A))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return A;
      },
    };
  return (
    (me.Activity = b),
    (me.Children = pe),
    (me.Component = L),
    (me.Fragment = r),
    (me.Profiler = f),
    (me.PureComponent = Y),
    (me.StrictMode = c),
    (me.Suspense = v),
    (me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q),
    (me.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return Q.H.useMemoCache(A);
      },
    }),
    (me.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (me.cacheSignal = function () {
      return null;
    }),
    (me.cloneElement = function (A, B, F) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + "."
        );
      var $ = N({}, A.props),
        ce = A.key;
      if (B != null)
        for (ge in (B.key !== void 0 && (ce = "" + B.key), B))
          !K.call(B, ge) ||
            ge === "key" ||
            ge === "__self" ||
            ge === "__source" ||
            (ge === "ref" && B.ref === void 0) ||
            ($[ge] = B[ge]);
      var ge = arguments.length - 2;
      if (ge === 1) $.children = F;
      else if (1 < ge) {
        for (var le = Array(ge), qe = 0; qe < ge; qe++)
          le[qe] = arguments[qe + 2];
        $.children = le;
      }
      return se(A.type, ce, $);
    }),
    (me.createContext = function (A) {
      return (
        (A = {
          $$typeof: m,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: h, _context: A }),
        A
      );
    }),
    (me.createElement = function (A, B, F) {
      var $,
        ce = {},
        ge = null;
      if (B != null)
        for ($ in (B.key !== void 0 && (ge = "" + B.key), B))
          K.call(B, $) &&
            $ !== "key" &&
            $ !== "__self" &&
            $ !== "__source" &&
            (ce[$] = B[$]);
      var le = arguments.length - 2;
      if (le === 1) ce.children = F;
      else if (1 < le) {
        for (var qe = Array(le), Re = 0; Re < le; Re++)
          qe[Re] = arguments[Re + 2];
        ce.children = qe;
      }
      if (A && A.defaultProps)
        for ($ in ((le = A.defaultProps), le))
          ce[$] === void 0 && (ce[$] = le[$]);
      return se(A, ge, ce);
    }),
    (me.createRef = function () {
      return { current: null };
    }),
    (me.forwardRef = function (A) {
      return { $$typeof: y, render: A };
    }),
    (me.isValidElement = he),
    (me.lazy = function (A) {
      return { $$typeof: x, _payload: { _status: -1, _result: A }, _init: U };
    }),
    (me.memo = function (A, B) {
      return { $$typeof: p, type: A, compare: B === void 0 ? null : B };
    }),
    (me.startTransition = function (A) {
      var B = Q.T,
        F = {};
      Q.T = F;
      try {
        var $ = A(),
          ce = Q.S;
        ce !== null && ce(F, $),
          typeof $ == "object" &&
            $ !== null &&
            typeof $.then == "function" &&
            $.then(I, re);
      } catch (ge) {
        re(ge);
      } finally {
        B !== null && F.types !== null && (B.types = F.types), (Q.T = B);
      }
    }),
    (me.unstable_useCacheRefresh = function () {
      return Q.H.useCacheRefresh();
    }),
    (me.use = function (A) {
      return Q.H.use(A);
    }),
    (me.useActionState = function (A, B, F) {
      return Q.H.useActionState(A, B, F);
    }),
    (me.useCallback = function (A, B) {
      return Q.H.useCallback(A, B);
    }),
    (me.useContext = function (A) {
      return Q.H.useContext(A);
    }),
    (me.useDebugValue = function () {}),
    (me.useDeferredValue = function (A, B) {
      return Q.H.useDeferredValue(A, B);
    }),
    (me.useEffect = function (A, B) {
      return Q.H.useEffect(A, B);
    }),
    (me.useEffectEvent = function (A) {
      return Q.H.useEffectEvent(A);
    }),
    (me.useId = function () {
      return Q.H.useId();
    }),
    (me.useImperativeHandle = function (A, B, F) {
      return Q.H.useImperativeHandle(A, B, F);
    }),
    (me.useInsertionEffect = function (A, B) {
      return Q.H.useInsertionEffect(A, B);
    }),
    (me.useLayoutEffect = function (A, B) {
      return Q.H.useLayoutEffect(A, B);
    }),
    (me.useMemo = function (A, B) {
      return Q.H.useMemo(A, B);
    }),
    (me.useOptimistic = function (A, B) {
      return Q.H.useOptimistic(A, B);
    }),
    (me.useReducer = function (A, B, F) {
      return Q.H.useReducer(A, B, F);
    }),
    (me.useRef = function (A) {
      return Q.H.useRef(A);
    }),
    (me.useState = function (A) {
      return Q.H.useState(A);
    }),
    (me.useSyncExternalStore = function (A, B, F) {
      return Q.H.useSyncExternalStore(A, B, F);
    }),
    (me.useTransition = function () {
      return Q.H.useTransition();
    }),
    (me.version = "19.2.3"),
    me
  );
}
var ip;
function mr() {
  return ip || ((ip = 1), (Fc.exports = bx())), Fc.exports;
}
var Jc = { exports: {} },
  it = {};
var sp;
function wx() {
  if (sp) return it;
  sp = 1;
  var a = mr();
  function i(v) {
    var p = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        p += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var c = {
      d: {
        f: r,
        r: function () {
          throw Error(i(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal");
  function h(v, p, x) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: b == null ? null : "" + b,
      children: v,
      containerInfo: p,
      implementation: x,
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(v, p) {
    if (v === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (it.createPortal = function (v, p) {
      var x =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(i(299));
      return h(v, p, null, x);
    }),
    (it.flushSync = function (v) {
      var p = m.T,
        x = c.p;
      try {
        if (((m.T = null), (c.p = 2), v)) return v();
      } finally {
        (m.T = p), (c.p = x), c.d.f();
      }
    }),
    (it.preconnect = function (v, p) {
      typeof v == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        c.d.C(v, p));
    }),
    (it.prefetchDNS = function (v) {
      typeof v == "string" && c.d.D(v);
    }),
    (it.preinit = function (v, p) {
      if (typeof v == "string" && p && typeof p.as == "string") {
        var x = p.as,
          b = y(x, p.crossOrigin),
          E = typeof p.integrity == "string" ? p.integrity : void 0,
          O = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        x === "style"
          ? c.d.S(v, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: E,
              fetchPriority: O,
            })
          : x === "script" &&
            c.d.X(v, {
              crossOrigin: b,
              integrity: E,
              fetchPriority: O,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (it.preinitModule = function (v, p) {
      if (typeof v == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var x = y(p.as, p.crossOrigin);
            c.d.M(v, {
              crossOrigin: x,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && c.d.M(v);
    }),
    (it.preload = function (v, p) {
      if (
        typeof v == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var x = p.as,
          b = y(x, p.crossOrigin);
        c.d.L(v, x, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (it.preloadModule = function (v, p) {
      if (typeof v == "string")
        if (p) {
          var x = y(p.as, p.crossOrigin);
          c.d.m(v, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: x,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else c.d.m(v);
    }),
    (it.requestFormReset = function (v) {
      c.d.r(v);
    }),
    (it.unstable_batchedUpdates = function (v, p) {
      return v(p);
    }),
    (it.useFormState = function (v, p, x) {
      return m.H.useFormState(v, p, x);
    }),
    (it.useFormStatus = function () {
      return m.H.useHostTransitionStatus();
    }),
    (it.version = "19.2.3"),
    it
  );
}
var rp;
function ng() {
  if (rp) return Jc.exports;
  rp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (Jc.exports = wx()), Jc.exports;
}
var op;
function Sx() {
  if (op) return gi;
  op = 1;
  var a = xx(),
    i = mr(),
    r = ng();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function h(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function m(e) {
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
  function y(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (h(e) !== e) throw Error(c(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = h(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (((l = s.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === n) return v(s), e;
          if (o === l) return v(s), t;
          o = o.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) (n = s), (l = o);
      else {
        for (var d = !1, g = s.child; g; ) {
          if (g === n) {
            (d = !0), (n = s), (l = o);
            break;
          }
          if (g === l) {
            (d = !0), (l = s), (n = o);
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = o.child; g; ) {
            if (g === n) {
              (d = !0), (n = o), (l = s);
              break;
            }
            if (g === l) {
              (d = !0), (l = o), (n = s);
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function x(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = x(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    E = Symbol.for("react.element"),
    O = Symbol.for("react.transitional.element"),
    k = Symbol.for("react.portal"),
    N = Symbol.for("react.fragment"),
    j = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    G = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    I = Symbol.for("react.suspense_list"),
    Q = Symbol.for("react.memo"),
    K = Symbol.for("react.lazy"),
    se = Symbol.for("react.activity"),
    ue = Symbol.for("react.memo_cache_sentinel"),
    he = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (he && e[he]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var fe = Symbol.for("react.client.reference");
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === fe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case N:
        return "Fragment";
      case L:
        return "Profiler";
      case j:
        return "StrictMode";
      case P:
        return "Suspense";
      case I:
        return "SuspenseList";
      case se:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case k:
          return "Portal";
        case Y:
          return e.displayName || "Context";
        case G:
          return (e._context.displayName || "Context") + ".Consumer";
        case Z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Q:
          return (
            (t = e.displayName || null), t !== null ? t : W(e.type) || "Memo"
          );
        case K:
          (t = e._payload), (e = e._init);
          try {
            return W(e(t));
          } catch {}
      }
    return null;
  }
  var de = Array.isArray,
    R = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = { pending: !1, data: null, method: null, action: null },
    re = [],
    pe = -1;
  function A(e) {
    return { current: e };
  }
  function B(e) {
    0 > pe || ((e.current = re[pe]), (re[pe] = null), pe--);
  }
  function F(e, t) {
    pe++, (re[pe] = e.current), (e.current = t);
  }
  var $ = A(null),
    ce = A(null),
    ge = A(null),
    le = A(null);
  function qe(e, t) {
    switch ((F(ge, t), F(ce, e), F($, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Em(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Em(t)), (e = Am(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    B($), F($, e);
  }
  function Re() {
    B($), B(ce), B(ge);
  }
  function Ot(e) {
    e.memoizedState !== null && F(le, e);
    var t = $.current,
      n = Am(t, e.type);
    t !== n && (F(ce, e), F($, n));
  }
  function Ft(e) {
    ce.current === e && (B($), B(ce)),
      le.current === e && (B(le), (fi._currentValue = U));
  }
  var Jt, ia;
  function sa(e) {
    if (Jt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (Jt = (t && t[1]) || ""),
          (ia =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Jt +
      e +
      ia
    );
  }
  var jr = !1;
  function Nr(e, t) {
    if (!e || jr) return "";
    jr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var V = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(V.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(V, []);
                } catch (D) {
                  var z = D;
                }
                Reflect.construct(e, [], V);
              } else {
                try {
                  V.call();
                } catch (D) {
                  z = D;
                }
                e.call(V.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                z = D;
              }
              (V = e()) &&
                typeof V.catch == "function" &&
                V.catch(function () {});
            }
          } catch (D) {
            if (D && z && typeof D.stack == "string") return [D.stack, z.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = l.DetermineComponentFrameRoot(),
        d = o[0],
        g = o[1];
      if (d && g) {
        var S = d.split(`
`),
          _ = g.split(`
`);
        for (
          s = l = 0;
          l < S.length && !S[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; s < _.length && !_[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (l === S.length || s === _.length)
          for (
            l = S.length - 1, s = _.length - 1;
            1 <= l && 0 <= s && S[l] !== _[s];

          )
            s--;
        for (; 1 <= l && 0 <= s; l--, s--)
          if (S[l] !== _[s]) {
            if (l !== 1 || s !== 1)
              do
                if ((l--, s--, 0 > s || S[l] !== _[s])) {
                  var H =
                    `
` + S[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      H.includes("<anonymous>") &&
                      (H = H.replace("<anonymous>", e.displayName)),
                    H
                  );
                }
              while (1 <= l && 0 <= s);
            break;
          }
      }
    } finally {
      (jr = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? sa(n) : "";
  }
  function Ky(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return sa(e.type);
      case 16:
        return sa("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? sa("Suspense Fallback")
          : sa("Suspense");
      case 19:
        return sa("SuspenseList");
      case 0:
      case 15:
        return Nr(e.type, !1);
      case 11:
        return Nr(e.type.render, !1);
      case 1:
        return Nr(e.type, !0);
      case 31:
        return sa("Activity");
      default:
        return "";
    }
  }
  function Iu(e) {
    try {
      var t = "",
        n = null;
      do (t += Ky(e, n)), (n = e), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var Cr = Object.prototype.hasOwnProperty,
    Or = a.unstable_scheduleCallback,
    Rr = a.unstable_cancelCallback,
    Zy = a.unstable_shouldYield,
    Fy = a.unstable_requestPaint,
    gt = a.unstable_now,
    Jy = a.unstable_getCurrentPriorityLevel,
    ef = a.unstable_ImmediatePriority,
    tf = a.unstable_UserBlockingPriority,
    _i = a.unstable_NormalPriority,
    Py = a.unstable_LowPriority,
    nf = a.unstable_IdlePriority,
    $y = a.log,
    Wy = a.unstable_setDisableYieldValue,
    El = null,
    yt = null;
  function Nn(e) {
    if (
      (typeof $y == "function" && Wy(e),
      yt && typeof yt.setStrictMode == "function")
    )
      try {
        yt.setStrictMode(El, e);
      } catch {}
  }
  var vt = Math.clz32 ? Math.clz32 : t0,
    Iy = Math.log,
    e0 = Math.LN2;
  function t0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Iy(e) / e0) | 0)) | 0;
  }
  var zi = 256,
    Di = 262144,
    Ui = 4194304;
  function ra(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Li(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var s = 0,
      o = e.suspendedLanes,
      d = e.pingedLanes;
    e = e.warmLanes;
    var g = l & 134217727;
    return (
      g !== 0
        ? ((l = g & ~o),
          l !== 0
            ? (s = ra(l))
            : ((d &= g),
              d !== 0
                ? (s = ra(d))
                : n || ((n = g & ~e), n !== 0 && (s = ra(n)))))
        : ((g = l & ~o),
          g !== 0
            ? (s = ra(g))
            : d !== 0
            ? (s = ra(d))
            : n || ((n = l & ~e), n !== 0 && (s = ra(n)))),
      s === 0
        ? 0
        : t !== 0 &&
          t !== s &&
          (t & o) === 0 &&
          ((o = s & -s),
          (n = t & -t),
          o >= n || (o === 32 && (n & 4194048) !== 0))
        ? t
        : s
    );
  }
  function Al(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function n0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function af() {
    var e = Ui;
    return (Ui <<= 1), (Ui & 62914560) === 0 && (Ui = 4194304), e;
  }
  function Mr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Tl(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function a0(e, t, n, l, s, o) {
    var d = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var g = e.entanglements,
      S = e.expirationTimes,
      _ = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var H = 31 - vt(n),
        V = 1 << H;
      (g[H] = 0), (S[H] = -1);
      var z = _[H];
      if (z !== null)
        for (_[H] = null, H = 0; H < z.length; H++) {
          var D = z[H];
          D !== null && (D.lane &= -536870913);
        }
      n &= ~V;
    }
    l !== 0 && lf(e, l, 0),
      o !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(d & ~t));
  }
  function lf(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - vt(t);
    (e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930));
  }
  function sf(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - vt(n),
        s = 1 << l;
      (s & t) | (e[l] & t) && (e[l] |= t), (n &= ~s);
    }
  }
  function rf(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : kr(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function kr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function _r(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function of() {
    var e = X.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Zm(e.type));
  }
  function cf(e, t) {
    var n = X.p;
    try {
      return (X.p = e), t();
    } finally {
      X.p = n;
    }
  }
  var Cn = Math.random().toString(36).slice(2),
    Ie = "__reactFiber$" + Cn,
    rt = "__reactProps$" + Cn,
    Ra = "__reactContainer$" + Cn,
    zr = "__reactEvents$" + Cn,
    l0 = "__reactListeners$" + Cn,
    i0 = "__reactHandles$" + Cn,
    uf = "__reactResources$" + Cn,
    jl = "__reactMarker$" + Cn;
  function Dr(e) {
    delete e[Ie], delete e[rt], delete e[zr], delete e[l0], delete e[i0];
  }
  function Ma(e) {
    var t = e[Ie];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ra] || n[Ie])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Mm(e); e !== null; ) {
            if ((n = e[Ie])) return n;
            e = Mm(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function ka(e) {
    if ((e = e[Ie] || e[Ra])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Nl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function _a(e) {
    var t = e[uf];
    return (
      t ||
        (t = e[uf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function $e(e) {
    e[jl] = !0;
  }
  var ff = new Set(),
    df = {};
  function oa(e, t) {
    za(e, t), za(e + "Capture", t);
  }
  function za(e, t) {
    for (df[e] = t, e = 0; e < t.length; e++) ff.add(t[e]);
  }
  var s0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    hf = {},
    mf = {};
  function r0(e) {
    return Cr.call(mf, e)
      ? !0
      : Cr.call(hf, e)
      ? !1
      : s0.test(e)
      ? (mf[e] = !0)
      : ((hf[e] = !0), !1);
  }
  function Hi(e, t, n) {
    if (r0(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Bi(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function sn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function Rt(e) {
    switch (typeof e) {
      case "bigint":
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
  function pf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function o0(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var s = l.get,
        o = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (d) {
            (n = "" + d), o.call(this, d);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (d) {
            n = "" + d;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ur(e) {
    if (!e._valueTracker) {
      var t = pf(e) ? "checked" : "value";
      e._valueTracker = o0(e, t, "" + e[t]);
    }
  }
  function gf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = pf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function qi(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var c0 = /[\n"\\]/g;
  function Mt(e) {
    return e.replace(c0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Lr(e, t, n, l, s, o, d, g) {
    (e.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (e.type = d)
        : e.removeAttribute("type"),
      t != null
        ? d === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Rt(t))
          : e.value !== "" + Rt(t) && (e.value = "" + Rt(t))
        : (d !== "submit" && d !== "reset") || e.removeAttribute("value"),
      t != null
        ? Hr(e, d, Rt(t))
        : n != null
        ? Hr(e, d, Rt(n))
        : l != null && e.removeAttribute("value"),
      s == null && o != null && (e.defaultChecked = !!o),
      s != null &&
        (e.checked = s && typeof s != "function" && typeof s != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.name = "" + Rt(g))
        : e.removeAttribute("name");
  }
  function yf(e, t, n, l, s, o, d, g) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.type = o),
      t != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || t != null)) {
        Ur(e);
        return;
      }
      (n = n != null ? "" + Rt(n) : ""),
        (t = t != null ? "" + Rt(t) : n),
        g || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? s),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = g ? e.checked : !!l),
      (e.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.name = d),
      Ur(e);
  }
  function Hr(e, t, n) {
    (t === "number" && qi(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function Da(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        (s = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Rt(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          (e[s].selected = !0), l && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function vf(e, t, n) {
    if (
      t != null &&
      ((t = "" + Rt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Rt(n) : "";
  }
  function xf(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (de(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (t = n);
    }
    (n = Rt(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== "" && l !== null && (e.value = l),
      Ur(e);
  }
  function Ua(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var u0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function bf(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : l
      ? e.setProperty(t, n)
      : typeof n != "number" || n === 0 || u0.has(t)
      ? t === "float"
        ? (e.cssFloat = n)
        : (e[t] = ("" + n).trim())
      : (e[t] = n + "px");
  }
  function wf(e, t, n) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var s in t)
        (l = t[s]), t.hasOwnProperty(s) && n[s] !== l && bf(e, s, l);
    } else for (var o in t) t.hasOwnProperty(o) && bf(e, o, t[o]);
  }
  function Br(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var f0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    d0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gi(e) {
    return d0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function rn() {}
  var qr = null;
  function Gr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var La = null,
    Ha = null;
  function Sf(e) {
    var t = ka(e);
    if (t && (e = t.stateNode)) {
      var n = e[rt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Lr(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Mt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var s = l[rt] || null;
                if (!s) throw Error(c(90));
                Lr(
                  l,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              (l = n[t]), l.form === e.form && gf(l);
          }
          break e;
        case "textarea":
          vf(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && Da(e, !!n.multiple, t, !1);
      }
    }
  }
  var Vr = !1;
  function Ef(e, t, n) {
    if (Vr) return e(t, n);
    Vr = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Vr = !1),
        (La !== null || Ha !== null) &&
          (Cs(), La && ((t = La), (e = Ha), (Ha = La = null), Sf(t), e)))
      )
        for (t = 0; t < e.length; t++) Sf(e[t]);
    }
  }
  function Cl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[rt] || null;
    if (l === null) return null;
    n = l[t];
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
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var on = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Yr = !1;
  if (on)
    try {
      var Ol = {};
      Object.defineProperty(Ol, "passive", {
        get: function () {
          Yr = !0;
        },
      }),
        window.addEventListener("test", Ol, Ol),
        window.removeEventListener("test", Ol, Ol);
    } catch {
      Yr = !1;
    }
  var On = null,
    Qr = null,
    Vi = null;
  function Af() {
    if (Vi) return Vi;
    var e,
      t = Qr,
      n = t.length,
      l,
      s = "value" in On ? On.value : On.textContent,
      o = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var d = n - e;
    for (l = 1; l <= d && t[n - l] === s[o - l]; l++);
    return (Vi = s.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Yi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Qi() {
    return !0;
  }
  function Tf() {
    return !1;
  }
  function ot(e) {
    function t(n, l, s, o, d) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = l),
        (this.nativeEvent = o),
        (this.target = d),
        (this.currentTarget = null);
      for (var g in e)
        e.hasOwnProperty(g) && ((n = e[g]), (this[g] = n ? n(o) : o[g]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Qi
          : Tf),
        (this.isPropagationStopped = Tf),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Qi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Qi));
        },
        persist: function () {},
        isPersistent: Qi,
      }),
      t
    );
  }
  var ca = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Xi = ot(ca),
    Rl = b({}, ca, { view: 0, detail: 0 }),
    h0 = ot(Rl),
    Xr,
    Kr,
    Ml,
    Ki = b({}, Rl, {
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
      getModifierState: Fr,
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
          : (e !== Ml &&
              (Ml && e.type === "mousemove"
                ? ((Xr = e.screenX - Ml.screenX), (Kr = e.screenY - Ml.screenY))
                : (Kr = Xr = 0),
              (Ml = e)),
            Xr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Kr;
      },
    }),
    jf = ot(Ki),
    m0 = b({}, Ki, { dataTransfer: 0 }),
    p0 = ot(m0),
    g0 = b({}, Rl, { relatedTarget: 0 }),
    Zr = ot(g0),
    y0 = b({}, ca, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    v0 = ot(y0),
    x0 = b({}, ca, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    b0 = ot(x0),
    w0 = b({}, ca, { data: 0 }),
    Nf = ot(w0),
    S0 = {
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
    E0 = {
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
    A0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function T0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = A0[e])
      ? !!t[e]
      : !1;
  }
  function Fr() {
    return T0;
  }
  var j0 = b({}, Rl, {
      key: function (e) {
        if (e.key) {
          var t = S0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Yi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? E0[e.keyCode] || "Unidentified"
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
      getModifierState: Fr,
      charCode: function (e) {
        return e.type === "keypress" ? Yi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Yi(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    N0 = ot(j0),
    C0 = b({}, Ki, {
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
    Cf = ot(C0),
    O0 = b({}, Rl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fr,
    }),
    R0 = ot(O0),
    M0 = b({}, ca, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    k0 = ot(M0),
    _0 = b({}, Ki, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
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
    z0 = ot(_0),
    D0 = b({}, ca, { newState: 0, oldState: 0 }),
    U0 = ot(D0),
    L0 = [9, 13, 27, 32],
    Jr = on && "CompositionEvent" in window,
    kl = null;
  on && "documentMode" in document && (kl = document.documentMode);
  var H0 = on && "TextEvent" in window && !kl,
    Of = on && (!Jr || (kl && 8 < kl && 11 >= kl)),
    Rf = " ",
    Mf = !1;
  function kf(e, t) {
    switch (e) {
      case "keyup":
        return L0.indexOf(t.keyCode) !== -1;
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
  function _f(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ba = !1;
  function B0(e, t) {
    switch (e) {
      case "compositionend":
        return _f(t);
      case "keypress":
        return t.which !== 32 ? null : ((Mf = !0), Rf);
      case "textInput":
        return (e = t.data), e === Rf && Mf ? null : e;
      default:
        return null;
    }
  }
  function q0(e, t) {
    if (Ba)
      return e === "compositionend" || (!Jr && kf(e, t))
        ? ((e = Af()), (Vi = Qr = On = null), (Ba = !1), e)
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
        return Of && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var G0 = {
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
  function zf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!G0[e.type] : t === "textarea";
  }
  function Df(e, t, n, l) {
    La ? (Ha ? Ha.push(l) : (Ha = [l])) : (La = l),
      (t = Ds(t, "onChange")),
      0 < t.length &&
        ((n = new Xi("onChange", "change", null, n, l)),
        e.push({ event: n, listeners: t }));
  }
  var _l = null,
    zl = null;
  function V0(e) {
    ym(e, 0);
  }
  function Zi(e) {
    var t = Nl(e);
    if (gf(t)) return e;
  }
  function Uf(e, t) {
    if (e === "change") return t;
  }
  var Lf = !1;
  if (on) {
    var Pr;
    if (on) {
      var $r = "oninput" in document;
      if (!$r) {
        var Hf = document.createElement("div");
        Hf.setAttribute("oninput", "return;"),
          ($r = typeof Hf.oninput == "function");
      }
      Pr = $r;
    } else Pr = !1;
    Lf = Pr && (!document.documentMode || 9 < document.documentMode);
  }
  function Bf() {
    _l && (_l.detachEvent("onpropertychange", qf), (zl = _l = null));
  }
  function qf(e) {
    if (e.propertyName === "value" && Zi(zl)) {
      var t = [];
      Df(t, zl, e, Gr(e)), Ef(V0, t);
    }
  }
  function Y0(e, t, n) {
    e === "focusin"
      ? (Bf(), (_l = t), (zl = n), _l.attachEvent("onpropertychange", qf))
      : e === "focusout" && Bf();
  }
  function Q0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zi(zl);
  }
  function X0(e, t) {
    if (e === "click") return Zi(t);
  }
  function K0(e, t) {
    if (e === "input" || e === "change") return Zi(t);
  }
  function Z0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var xt = typeof Object.is == "function" ? Object.is : Z0;
  function Dl(e, t) {
    if (xt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var s = n[l];
      if (!Cr.call(t, s) || !xt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function Gf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Vf(e, t) {
    var n = Gf(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
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
      n = Gf(n);
    }
  }
  function Yf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Yf(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Qf(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = qi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = qi(e.document);
    }
    return t;
  }
  function Wr(e) {
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
  var F0 = on && "documentMode" in document && 11 >= document.documentMode,
    qa = null,
    Ir = null,
    Ul = null,
    eo = !1;
  function Xf(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    eo ||
      qa == null ||
      qa !== qi(l) ||
      ((l = qa),
      "selectionStart" in l && Wr(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ul && Dl(Ul, l)) ||
        ((Ul = l),
        (l = Ds(Ir, "onSelect")),
        0 < l.length &&
          ((t = new Xi("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = qa))));
  }
  function ua(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Ga = {
      animationend: ua("Animation", "AnimationEnd"),
      animationiteration: ua("Animation", "AnimationIteration"),
      animationstart: ua("Animation", "AnimationStart"),
      transitionrun: ua("Transition", "TransitionRun"),
      transitionstart: ua("Transition", "TransitionStart"),
      transitioncancel: ua("Transition", "TransitionCancel"),
      transitionend: ua("Transition", "TransitionEnd"),
    },
    to = {},
    Kf = {};
  on &&
    ((Kf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ga.animationend.animation,
      delete Ga.animationiteration.animation,
      delete Ga.animationstart.animation),
    "TransitionEvent" in window || delete Ga.transitionend.transition);
  function fa(e) {
    if (to[e]) return to[e];
    if (!Ga[e]) return e;
    var t = Ga[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Kf) return (to[e] = t[n]);
    return e;
  }
  var Zf = fa("animationend"),
    Ff = fa("animationiteration"),
    Jf = fa("animationstart"),
    J0 = fa("transitionrun"),
    P0 = fa("transitionstart"),
    $0 = fa("transitioncancel"),
    Pf = fa("transitionend"),
    $f = new Map(),
    no =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  no.push("scrollEnd");
  function Vt(e, t) {
    $f.set(e, t), oa(t, [e]);
  }
  var Fi =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    kt = [],
    Va = 0,
    ao = 0;
  function Ji() {
    for (var e = Va, t = (ao = Va = 0); t < e; ) {
      var n = kt[t];
      kt[t++] = null;
      var l = kt[t];
      kt[t++] = null;
      var s = kt[t];
      kt[t++] = null;
      var o = kt[t];
      if (((kt[t++] = null), l !== null && s !== null)) {
        var d = l.pending;
        d === null ? (s.next = s) : ((s.next = d.next), (d.next = s)),
          (l.pending = s);
      }
      o !== 0 && Wf(n, s, o);
    }
  }
  function Pi(e, t, n, l) {
    (kt[Va++] = e),
      (kt[Va++] = t),
      (kt[Va++] = n),
      (kt[Va++] = l),
      (ao |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function lo(e, t, n, l) {
    return Pi(e, t, n, l), $i(e);
  }
  function da(e, t) {
    return Pi(e, null, null, t), $i(e);
  }
  function Wf(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var s = !1, o = e.return; o !== null; )
      (o.childLanes |= n),
        (l = o.alternate),
        l !== null && (l.childLanes |= n),
        o.tag === 22 &&
          ((e = o.stateNode), e === null || e._visibility & 1 || (s = !0)),
        (e = o),
        (o = o.return);
    return e.tag === 3
      ? ((o = e.stateNode),
        s &&
          t !== null &&
          ((s = 31 - vt(n)),
          (e = o.hiddenUpdates),
          (l = e[s]),
          l === null ? (e[s] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        o)
      : null;
  }
  function $i(e) {
    if (50 < li) throw ((li = 0), (mc = null), Error(c(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ya = {};
  function W0(e, t, n, l) {
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
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function bt(e, t, n, l) {
    return new W0(e, t, n, l);
  }
  function io(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function cn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = bt(e.tag, t, e.key, e.mode)),
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
      (n.flags = e.flags & 65011712),
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
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function If(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Wi(e, t, n, l, s, o) {
    var d = 0;
    if (((l = e), typeof e == "function")) io(e) && (d = 1);
    else if (typeof e == "string")
      d = ax(e, n, $.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case se:
          return (e = bt(31, n, t, s)), (e.elementType = se), (e.lanes = o), e;
        case N:
          return ha(n.children, s, o, t);
        case j:
          (d = 8), (s |= 24);
          break;
        case L:
          return (
            (e = bt(12, n, t, s | 2)), (e.elementType = L), (e.lanes = o), e
          );
        case P:
          return (e = bt(13, n, t, s)), (e.elementType = P), (e.lanes = o), e;
        case I:
          return (e = bt(19, n, t, s)), (e.elementType = I), (e.lanes = o), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Y:
                d = 10;
                break e;
              case G:
                d = 9;
                break e;
              case Z:
                d = 11;
                break e;
              case Q:
                d = 14;
                break e;
              case K:
                (d = 16), (l = null);
                break e;
            }
          (d = 29),
            (n = Error(c(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (t = bt(d, n, t, s)), (t.elementType = e), (t.type = l), (t.lanes = o), t
    );
  }
  function ha(e, t, n, l) {
    return (e = bt(7, e, l, t)), (e.lanes = n), e;
  }
  function so(e, t, n) {
    return (e = bt(6, e, null, t)), (e.lanes = n), e;
  }
  function ed(e) {
    var t = bt(18, null, null, 0);
    return (t.stateNode = e), t;
  }
  function ro(e, t, n) {
    return (
      (t = bt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var td = new WeakMap();
  function _t(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = td.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Iu(t) }), td.set(e, t), t);
    }
    return { value: e, source: t, stack: Iu(t) };
  }
  var Qa = [],
    Xa = 0,
    Ii = null,
    Ll = 0,
    zt = [],
    Dt = 0,
    Rn = null,
    Pt = 1,
    $t = "";
  function un(e, t) {
    (Qa[Xa++] = Ll), (Qa[Xa++] = Ii), (Ii = e), (Ll = t);
  }
  function nd(e, t, n) {
    (zt[Dt++] = Pt), (zt[Dt++] = $t), (zt[Dt++] = Rn), (Rn = e);
    var l = Pt;
    e = $t;
    var s = 32 - vt(l) - 1;
    (l &= ~(1 << s)), (n += 1);
    var o = 32 - vt(t) + s;
    if (30 < o) {
      var d = s - (s % 5);
      (o = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (s -= d),
        (Pt = (1 << (32 - vt(t) + s)) | (n << s) | l),
        ($t = o + e);
    } else (Pt = (1 << o) | (n << s) | l), ($t = e);
  }
  function oo(e) {
    e.return !== null && (un(e, 1), nd(e, 1, 0));
  }
  function co(e) {
    for (; e === Ii; )
      (Ii = Qa[--Xa]), (Qa[Xa] = null), (Ll = Qa[--Xa]), (Qa[Xa] = null);
    for (; e === Rn; )
      (Rn = zt[--Dt]),
        (zt[Dt] = null),
        ($t = zt[--Dt]),
        (zt[Dt] = null),
        (Pt = zt[--Dt]),
        (zt[Dt] = null);
  }
  function ad(e, t) {
    (zt[Dt++] = Pt),
      (zt[Dt++] = $t),
      (zt[Dt++] = Rn),
      (Pt = t.id),
      ($t = t.overflow),
      (Rn = e);
  }
  var et = null,
    De = null,
    Ae = !1,
    Mn = null,
    Ut = !1,
    uo = Error(c(519));
  function kn(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Hl(_t(t, e)), uo);
  }
  function ld(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[Ie] = e), (t[rt] = l), n)) {
      case "dialog":
        we("cancel", t), we("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        we("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < si.length; n++) we(si[n], t);
        break;
      case "source":
        we("error", t);
        break;
      case "img":
      case "image":
      case "link":
        we("error", t), we("load", t);
        break;
      case "details":
        we("toggle", t);
        break;
      case "input":
        we("invalid", t),
          yf(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          );
        break;
      case "select":
        we("invalid", t);
        break;
      case "textarea":
        we("invalid", t), xf(t, l.value, l.defaultValue, l.children);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      wm(t.textContent, n)
        ? (l.popover != null && (we("beforetoggle", t), we("toggle", t)),
          l.onScroll != null && we("scroll", t),
          l.onScrollEnd != null && we("scrollend", t),
          l.onClick != null && (t.onclick = rn),
          (t = !0))
        : (t = !1),
      t || kn(e, !0);
  }
  function id(e) {
    for (et = e.return; et; )
      switch (et.tag) {
        case 5:
        case 31:
        case 13:
          Ut = !1;
          return;
        case 27:
        case 3:
          Ut = !0;
          return;
        default:
          et = et.return;
      }
  }
  function Ka(e) {
    if (e !== et) return !1;
    if (!Ae) return id(e), (Ae = !0), !1;
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Oc(e.type, e.memoizedProps))),
        (n = !n)),
      n && De && kn(e),
      id(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      De = Rm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      De = Rm(e);
    } else
      t === 27
        ? ((t = De), Kn(e.type) ? ((e = zc), (zc = null), (De = e)) : (De = t))
        : (De = et ? Ht(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ma() {
    (De = et = null), (Ae = !1);
  }
  function fo() {
    var e = Mn;
    return (
      e !== null &&
        (dt === null ? (dt = e) : dt.push.apply(dt, e), (Mn = null)),
      e
    );
  }
  function Hl(e) {
    Mn === null ? (Mn = [e]) : Mn.push(e);
  }
  var ho = A(null),
    pa = null,
    fn = null;
  function _n(e, t, n) {
    F(ho, t._currentValue), (t._currentValue = n);
  }
  function dn(e) {
    (e._currentValue = ho.current), B(ho);
  }
  function mo(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function po(e, t, n, l) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var o = s.dependencies;
      if (o !== null) {
        var d = s.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var g = o;
          o = s;
          for (var S = 0; S < t.length; S++)
            if (g.context === t[S]) {
              (o.lanes |= n),
                (g = o.alternate),
                g !== null && (g.lanes |= n),
                mo(o.return, n, e),
                l || (d = null);
              break e;
            }
          o = g.next;
        }
      } else if (s.tag === 18) {
        if (((d = s.return), d === null)) throw Error(c(341));
        (d.lanes |= n),
          (o = d.alternate),
          o !== null && (o.lanes |= n),
          mo(d, n, e),
          (d = null);
      } else d = s.child;
      if (d !== null) d.return = s;
      else
        for (d = s; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (((s = d.sibling), s !== null)) {
            (s.return = d.return), (d = s);
            break;
          }
          d = d.return;
        }
      s = d;
    }
  }
  function Za(e, t, n, l) {
    e = null;
    for (var s = t, o = !1; s !== null; ) {
      if (!o) {
        if ((s.flags & 524288) !== 0) o = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var d = s.alternate;
        if (d === null) throw Error(c(387));
        if (((d = d.memoizedProps), d !== null)) {
          var g = s.type;
          xt(s.pendingProps.value, d.value) ||
            (e !== null ? e.push(g) : (e = [g]));
        }
      } else if (s === le.current) {
        if (((d = s.alternate), d === null)) throw Error(c(387));
        d.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (e !== null ? e.push(fi) : (e = [fi]));
      }
      s = s.return;
    }
    e !== null && po(t, e, n, l), (t.flags |= 262144);
  }
  function es(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!xt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ga(e) {
    (pa = e),
      (fn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function tt(e) {
    return sd(pa, e);
  }
  function ts(e, t) {
    return pa === null && ga(e), sd(e, t);
  }
  function sd(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), fn === null)) {
      if (e === null) throw Error(c(308));
      (fn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else fn = fn.next = t;
    return n;
  }
  var I0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    ev = a.unstable_scheduleCallback,
    tv = a.unstable_NormalPriority,
    Ye = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function go() {
    return { controller: new I0(), data: new Map(), refCount: 0 };
  }
  function Bl(e) {
    e.refCount--,
      e.refCount === 0 &&
        ev(tv, function () {
          e.controller.abort();
        });
  }
  var ql = null,
    yo = 0,
    Fa = 0,
    Ja = null;
  function nv(e, t) {
    if (ql === null) {
      var n = (ql = []);
      (yo = 0),
        (Fa = bc()),
        (Ja = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return yo++, t.then(rd, rd), t;
  }
  function rd() {
    if (--yo === 0 && ql !== null) {
      Ja !== null && (Ja.status = "fulfilled");
      var e = ql;
      (ql = null), (Fa = 0), (Ja = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function av(e, t) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = t);
          for (var s = 0; s < n.length; s++) (0, n[s])(t);
        },
        function (s) {
          for (l.status = "rejected", l.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      l
    );
  }
  var od = R.S;
  R.S = function (e, t) {
    (Xh = gt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        nv(e, t),
      od !== null && od(e, t);
  };
  var ya = A(null);
  function vo() {
    var e = ya.current;
    return e !== null ? e : ze.pooledCache;
  }
  function ns(e, t) {
    t === null ? F(ya, ya.current) : F(ya, t.pool);
  }
  function cd() {
    var e = vo();
    return e === null ? null : { parent: Ye._currentValue, pool: e };
  }
  var Pa = Error(c(460)),
    xo = Error(c(474)),
    as = Error(c(542)),
    ls = { then: function () {} };
  function ud(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function fd(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(rn, rn), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), hd(e), e);
      default:
        if (typeof t.status == "string") t.then(rn, rn);
        else {
          if (((e = ze), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var s = t;
                  (s.status = "fulfilled"), (s.value = l);
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var s = t;
                  (s.status = "rejected"), (s.reason = l);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), hd(e), e);
        }
        throw ((xa = t), Pa);
    }
  }
  function va(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((xa = n), Pa)
        : n;
    }
  }
  var xa = null;
  function dd() {
    if (xa === null) throw Error(c(459));
    var e = xa;
    return (xa = null), e;
  }
  function hd(e) {
    if (e === Pa || e === as) throw Error(c(483));
  }
  var $a = null,
    Gl = 0;
  function is(e) {
    var t = Gl;
    return (Gl += 1), $a === null && ($a = []), fd($a, e, t);
  }
  function Vl(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function ss(e, t) {
    throw t.$$typeof === E
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function md(e) {
    function t(C, T) {
      if (e) {
        var M = C.deletions;
        M === null ? ((C.deletions = [T]), (C.flags |= 16)) : M.push(T);
      }
    }
    function n(C, T) {
      if (!e) return null;
      for (; T !== null; ) t(C, T), (T = T.sibling);
      return null;
    }
    function l(C) {
      for (var T = new Map(); C !== null; )
        C.key !== null ? T.set(C.key, C) : T.set(C.index, C), (C = C.sibling);
      return T;
    }
    function s(C, T) {
      return (C = cn(C, T)), (C.index = 0), (C.sibling = null), C;
    }
    function o(C, T, M) {
      return (
        (C.index = M),
        e
          ? ((M = C.alternate),
            M !== null
              ? ((M = M.index), M < T ? ((C.flags |= 67108866), T) : M)
              : ((C.flags |= 67108866), T))
          : ((C.flags |= 1048576), T)
      );
    }
    function d(C) {
      return e && C.alternate === null && (C.flags |= 67108866), C;
    }
    function g(C, T, M, q) {
      return T === null || T.tag !== 6
        ? ((T = so(M, C.mode, q)), (T.return = C), T)
        : ((T = s(T, M)), (T.return = C), T);
    }
    function S(C, T, M, q) {
      var ie = M.type;
      return ie === N
        ? H(C, T, M.props.children, q, M.key)
        : T !== null &&
          (T.elementType === ie ||
            (typeof ie == "object" &&
              ie !== null &&
              ie.$$typeof === K &&
              va(ie) === T.type))
        ? ((T = s(T, M.props)), Vl(T, M), (T.return = C), T)
        : ((T = Wi(M.type, M.key, M.props, null, C.mode, q)),
          Vl(T, M),
          (T.return = C),
          T);
    }
    function _(C, T, M, q) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== M.containerInfo ||
        T.stateNode.implementation !== M.implementation
        ? ((T = ro(M, C.mode, q)), (T.return = C), T)
        : ((T = s(T, M.children || [])), (T.return = C), T);
    }
    function H(C, T, M, q, ie) {
      return T === null || T.tag !== 7
        ? ((T = ha(M, C.mode, q, ie)), (T.return = C), T)
        : ((T = s(T, M)), (T.return = C), T);
    }
    function V(C, T, M) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return (T = so("" + T, C.mode, M)), (T.return = C), T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case O:
            return (
              (M = Wi(T.type, T.key, T.props, null, C.mode, M)),
              Vl(M, T),
              (M.return = C),
              M
            );
          case k:
            return (T = ro(T, C.mode, M)), (T.return = C), T;
          case K:
            return (T = va(T)), V(C, T, M);
        }
        if (de(T) || J(T))
          return (T = ha(T, C.mode, M, null)), (T.return = C), T;
        if (typeof T.then == "function") return V(C, is(T), M);
        if (T.$$typeof === Y) return V(C, ts(C, T), M);
        ss(C, T);
      }
      return null;
    }
    function z(C, T, M, q) {
      var ie = T !== null ? T.key : null;
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return ie !== null ? null : g(C, T, "" + M, q);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case O:
            return M.key === ie ? S(C, T, M, q) : null;
          case k:
            return M.key === ie ? _(C, T, M, q) : null;
          case K:
            return (M = va(M)), z(C, T, M, q);
        }
        if (de(M) || J(M)) return ie !== null ? null : H(C, T, M, q, null);
        if (typeof M.then == "function") return z(C, T, is(M), q);
        if (M.$$typeof === Y) return z(C, T, ts(C, M), q);
        ss(C, M);
      }
      return null;
    }
    function D(C, T, M, q, ie) {
      if (
        (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
      )
        return (C = C.get(M) || null), g(T, C, "" + q, ie);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case O:
            return (
              (C = C.get(q.key === null ? M : q.key) || null), S(T, C, q, ie)
            );
          case k:
            return (
              (C = C.get(q.key === null ? M : q.key) || null), _(T, C, q, ie)
            );
          case K:
            return (q = va(q)), D(C, T, M, q, ie);
        }
        if (de(q) || J(q)) return (C = C.get(M) || null), H(T, C, q, ie, null);
        if (typeof q.then == "function") return D(C, T, M, is(q), ie);
        if (q.$$typeof === Y) return D(C, T, M, ts(T, q), ie);
        ss(T, q);
      }
      return null;
    }
    function ee(C, T, M, q) {
      for (
        var ie = null, Te = null, ae = T, ve = (T = 0), Ee = null;
        ae !== null && ve < M.length;
        ve++
      ) {
        ae.index > ve ? ((Ee = ae), (ae = null)) : (Ee = ae.sibling);
        var je = z(C, ae, M[ve], q);
        if (je === null) {
          ae === null && (ae = Ee);
          break;
        }
        e && ae && je.alternate === null && t(C, ae),
          (T = o(je, T, ve)),
          Te === null ? (ie = je) : (Te.sibling = je),
          (Te = je),
          (ae = Ee);
      }
      if (ve === M.length) return n(C, ae), Ae && un(C, ve), ie;
      if (ae === null) {
        for (; ve < M.length; ve++)
          (ae = V(C, M[ve], q)),
            ae !== null &&
              ((T = o(ae, T, ve)),
              Te === null ? (ie = ae) : (Te.sibling = ae),
              (Te = ae));
        return Ae && un(C, ve), ie;
      }
      for (ae = l(ae); ve < M.length; ve++)
        (Ee = D(ae, C, ve, M[ve], q)),
          Ee !== null &&
            (e &&
              Ee.alternate !== null &&
              ae.delete(Ee.key === null ? ve : Ee.key),
            (T = o(Ee, T, ve)),
            Te === null ? (ie = Ee) : (Te.sibling = Ee),
            (Te = Ee));
      return (
        e &&
          ae.forEach(function ($n) {
            return t(C, $n);
          }),
        Ae && un(C, ve),
        ie
      );
    }
    function oe(C, T, M, q) {
      if (M == null) throw Error(c(151));
      for (
        var ie = null,
          Te = null,
          ae = T,
          ve = (T = 0),
          Ee = null,
          je = M.next();
        ae !== null && !je.done;
        ve++, je = M.next()
      ) {
        ae.index > ve ? ((Ee = ae), (ae = null)) : (Ee = ae.sibling);
        var $n = z(C, ae, je.value, q);
        if ($n === null) {
          ae === null && (ae = Ee);
          break;
        }
        e && ae && $n.alternate === null && t(C, ae),
          (T = o($n, T, ve)),
          Te === null ? (ie = $n) : (Te.sibling = $n),
          (Te = $n),
          (ae = Ee);
      }
      if (je.done) return n(C, ae), Ae && un(C, ve), ie;
      if (ae === null) {
        for (; !je.done; ve++, je = M.next())
          (je = V(C, je.value, q)),
            je !== null &&
              ((T = o(je, T, ve)),
              Te === null ? (ie = je) : (Te.sibling = je),
              (Te = je));
        return Ae && un(C, ve), ie;
      }
      for (ae = l(ae); !je.done; ve++, je = M.next())
        (je = D(ae, C, ve, je.value, q)),
          je !== null &&
            (e &&
              je.alternate !== null &&
              ae.delete(je.key === null ? ve : je.key),
            (T = o(je, T, ve)),
            Te === null ? (ie = je) : (Te.sibling = je),
            (Te = je));
      return (
        e &&
          ae.forEach(function (mx) {
            return t(C, mx);
          }),
        Ae && un(C, ve),
        ie
      );
    }
    function _e(C, T, M, q) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === N &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case O:
            e: {
              for (var ie = M.key; T !== null; ) {
                if (T.key === ie) {
                  if (((ie = M.type), ie === N)) {
                    if (T.tag === 7) {
                      n(C, T.sibling),
                        (q = s(T, M.props.children)),
                        (q.return = C),
                        (C = q);
                      break e;
                    }
                  } else if (
                    T.elementType === ie ||
                    (typeof ie == "object" &&
                      ie !== null &&
                      ie.$$typeof === K &&
                      va(ie) === T.type)
                  ) {
                    n(C, T.sibling),
                      (q = s(T, M.props)),
                      Vl(q, M),
                      (q.return = C),
                      (C = q);
                    break e;
                  }
                  n(C, T);
                  break;
                } else t(C, T);
                T = T.sibling;
              }
              M.type === N
                ? ((q = ha(M.props.children, C.mode, q, M.key)),
                  (q.return = C),
                  (C = q))
                : ((q = Wi(M.type, M.key, M.props, null, C.mode, q)),
                  Vl(q, M),
                  (q.return = C),
                  (C = q));
            }
            return d(C);
          case k:
            e: {
              for (ie = M.key; T !== null; ) {
                if (T.key === ie)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === M.containerInfo &&
                    T.stateNode.implementation === M.implementation
                  ) {
                    n(C, T.sibling),
                      (q = s(T, M.children || [])),
                      (q.return = C),
                      (C = q);
                    break e;
                  } else {
                    n(C, T);
                    break;
                  }
                else t(C, T);
                T = T.sibling;
              }
              (q = ro(M, C.mode, q)), (q.return = C), (C = q);
            }
            return d(C);
          case K:
            return (M = va(M)), _e(C, T, M, q);
        }
        if (de(M)) return ee(C, T, M, q);
        if (J(M)) {
          if (((ie = J(M)), typeof ie != "function")) throw Error(c(150));
          return (M = ie.call(M)), oe(C, T, M, q);
        }
        if (typeof M.then == "function") return _e(C, T, is(M), q);
        if (M.$$typeof === Y) return _e(C, T, ts(C, M), q);
        ss(C, M);
      }
      return (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
        ? ((M = "" + M),
          T !== null && T.tag === 6
            ? (n(C, T.sibling), (q = s(T, M)), (q.return = C), (C = q))
            : (n(C, T), (q = so(M, C.mode, q)), (q.return = C), (C = q)),
          d(C))
        : n(C, T);
    }
    return function (C, T, M, q) {
      try {
        Gl = 0;
        var ie = _e(C, T, M, q);
        return ($a = null), ie;
      } catch (ae) {
        if (ae === Pa || ae === as) throw ae;
        var Te = bt(29, ae, null, C.mode);
        return (Te.lanes = q), (Te.return = C), Te;
      }
    };
  }
  var ba = md(!0),
    pd = md(!1),
    zn = !1;
  function bo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function wo(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Dn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Un(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ne & 2) !== 0)) {
      var s = l.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (l.pending = t),
        (t = $i(e)),
        Wf(e, null, n),
        t
      );
    }
    return Pi(e, l, t, n), $i(e);
  }
  function Yl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), sf(e, n);
    }
  }
  function So(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var s = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          o === null ? (s = o = d) : (o = o.next = d), (n = n.next);
        } while (n !== null);
        o === null ? (s = o = t) : (o = o.next = t);
      } else s = o = t;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var Eo = !1;
  function Ql() {
    if (Eo) {
      var e = Ja;
      if (e !== null) throw e;
    }
  }
  function Xl(e, t, n, l) {
    Eo = !1;
    var s = e.updateQueue;
    zn = !1;
    var o = s.firstBaseUpdate,
      d = s.lastBaseUpdate,
      g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var S = g,
        _ = S.next;
      (S.next = null), d === null ? (o = _) : (d.next = _), (d = S);
      var H = e.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (g = H.lastBaseUpdate),
        g !== d &&
          (g === null ? (H.firstBaseUpdate = _) : (g.next = _),
          (H.lastBaseUpdate = S)));
    }
    if (o !== null) {
      var V = s.baseState;
      (d = 0), (H = _ = S = null), (g = o);
      do {
        var z = g.lane & -536870913,
          D = z !== g.lane;
        if (D ? (Se & z) === z : (l & z) === z) {
          z !== 0 && z === Fa && (Eo = !0),
            H !== null &&
              (H = H.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ee = e,
              oe = g;
            z = t;
            var _e = n;
            switch (oe.tag) {
              case 1:
                if (((ee = oe.payload), typeof ee == "function")) {
                  V = ee.call(_e, V, z);
                  break e;
                }
                V = ee;
                break e;
              case 3:
                ee.flags = (ee.flags & -65537) | 128;
              case 0:
                if (
                  ((ee = oe.payload),
                  (z = typeof ee == "function" ? ee.call(_e, V, z) : ee),
                  z == null)
                )
                  break e;
                V = b({}, V, z);
                break e;
              case 2:
                zn = !0;
            }
          }
          (z = g.callback),
            z !== null &&
              ((e.flags |= 64),
              D && (e.flags |= 8192),
              (D = s.callbacks),
              D === null ? (s.callbacks = [z]) : D.push(z));
        } else
          (D = {
            lane: z,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            H === null ? ((_ = H = D), (S = V)) : (H = H.next = D),
            (d |= z);
        if (((g = g.next), g === null)) {
          if (((g = s.shared.pending), g === null)) break;
          (D = g),
            (g = D.next),
            (D.next = null),
            (s.lastBaseUpdate = D),
            (s.shared.pending = null);
        }
      } while (!0);
      H === null && (S = V),
        (s.baseState = S),
        (s.firstBaseUpdate = _),
        (s.lastBaseUpdate = H),
        o === null && (s.shared.lanes = 0),
        (Gn |= d),
        (e.lanes = d),
        (e.memoizedState = V);
    }
  }
  function gd(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function yd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) gd(n[e], t);
  }
  var Wa = A(null),
    rs = A(0);
  function vd(e, t) {
    (e = wn), F(rs, e), F(Wa, t), (wn = e | t.baseLanes);
  }
  function Ao() {
    F(rs, wn), F(Wa, Wa.current);
  }
  function To() {
    (wn = rs.current), B(Wa), B(rs);
  }
  var wt = A(null),
    Lt = null;
  function Ln(e) {
    var t = e.alternate;
    F(Ge, Ge.current & 1),
      F(wt, e),
      Lt === null &&
        (t === null || Wa.current !== null || t.memoizedState !== null) &&
        (Lt = e);
  }
  function jo(e) {
    F(Ge, Ge.current), F(wt, e), Lt === null && (Lt = e);
  }
  function xd(e) {
    e.tag === 22
      ? (F(Ge, Ge.current), F(wt, e), Lt === null && (Lt = e))
      : Hn();
  }
  function Hn() {
    F(Ge, Ge.current), F(wt, wt.current);
  }
  function St(e) {
    B(wt), Lt === e && (Lt = null), B(Ge);
  }
  var Ge = A(0);
  function os(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || kc(n) || _c(n)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
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
  var hn = 0,
    ye = null,
    Me = null,
    Qe = null,
    cs = !1,
    Ia = !1,
    wa = !1,
    us = 0,
    Kl = 0,
    el = null,
    lv = 0;
  function He() {
    throw Error(c(321));
  }
  function No(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!xt(e[n], t[n])) return !1;
    return !0;
  }
  function Co(e, t, n, l, s, o) {
    return (
      (hn = o),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (R.H = e === null || e.memoizedState === null ? nh : Yo),
      (wa = !1),
      (o = n(l, s)),
      (wa = !1),
      Ia && (o = wd(t, n, l, s)),
      bd(e),
      o
    );
  }
  function bd(e) {
    R.H = Jl;
    var t = Me !== null && Me.next !== null;
    if (((hn = 0), (Qe = Me = ye = null), (cs = !1), (Kl = 0), (el = null), t))
      throw Error(c(300));
    e === null ||
      Xe ||
      ((e = e.dependencies), e !== null && es(e) && (Xe = !0));
  }
  function wd(e, t, n, l) {
    ye = e;
    var s = 0;
    do {
      if ((Ia && (el = null), (Kl = 0), (Ia = !1), 25 <= s))
        throw Error(c(301));
      if (((s += 1), (Qe = Me = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        (o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0);
      }
      (R.H = ah), (o = t(n, l));
    } while (Ia);
    return o;
  }
  function iv() {
    var e = R.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Zl(t) : t),
      (e = e.useState()[0]),
      (Me !== null ? Me.memoizedState : null) !== e && (ye.flags |= 1024),
      t
    );
  }
  function Oo() {
    var e = us !== 0;
    return (us = 0), e;
  }
  function Ro(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function Mo(e) {
    if (cs) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      cs = !1;
    }
    (hn = 0), (Qe = Me = ye = null), (Ia = !1), (Kl = us = 0), (el = null);
  }
  function st() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Qe === null ? (ye.memoizedState = Qe = e) : (Qe = Qe.next = e), Qe;
  }
  function Ve() {
    if (Me === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = Qe === null ? ye.memoizedState : Qe.next;
    if (t !== null) (Qe = t), (Me = e);
    else {
      if (e === null)
        throw ye.alternate === null ? Error(c(467)) : Error(c(310));
      (Me = e),
        (e = {
          memoizedState: Me.memoizedState,
          baseState: Me.baseState,
          baseQueue: Me.baseQueue,
          queue: Me.queue,
          next: null,
        }),
        Qe === null ? (ye.memoizedState = Qe = e) : (Qe = Qe.next = e);
    }
    return Qe;
  }
  function fs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zl(e) {
    var t = Kl;
    return (
      (Kl += 1),
      el === null && (el = []),
      (e = fd(el, e, t)),
      (t = ye),
      (Qe === null ? t.memoizedState : Qe.next) === null &&
        ((t = t.alternate),
        (R.H = t === null || t.memoizedState === null ? nh : Yo)),
      e
    );
  }
  function ds(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Zl(e);
      if (e.$$typeof === Y) return tt(e);
    }
    throw Error(c(438, String(e)));
  }
  function ko(e) {
    var t = null,
      n = ye.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = ye.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = fs()), (ye.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = ue;
    return t.index++, n;
  }
  function mn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hs(e) {
    var t = Ve();
    return _o(t, Me, e);
  }
  function _o(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var s = e.baseQueue,
      o = l.pending;
    if (o !== null) {
      if (s !== null) {
        var d = s.next;
        (s.next = o.next), (o.next = d);
      }
      (t.baseQueue = s = o), (l.pending = null);
    }
    if (((o = e.baseState), s === null)) e.memoizedState = o;
    else {
      t = s.next;
      var g = (d = null),
        S = null,
        _ = t,
        H = !1;
      do {
        var V = _.lane & -536870913;
        if (V !== _.lane ? (Se & V) === V : (hn & V) === V) {
          var z = _.revertLane;
          if (z === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                }),
              V === Fa && (H = !0);
          else if ((hn & z) === z) {
            (_ = _.next), z === Fa && (H = !0);
            continue;
          } else
            (V = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null,
            }),
              S === null ? ((g = S = V), (d = o)) : (S = S.next = V),
              (ye.lanes |= z),
              (Gn |= z);
          (V = _.action),
            wa && n(o, V),
            (o = _.hasEagerState ? _.eagerState : n(o, V));
        } else
          (z = {
            lane: V,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          }),
            S === null ? ((g = S = z), (d = o)) : (S = S.next = z),
            (ye.lanes |= V),
            (Gn |= V);
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (
        (S === null ? (d = o) : (S.next = g),
        !xt(o, e.memoizedState) && ((Xe = !0), H && ((n = Ja), n !== null)))
      )
        throw n;
      (e.memoizedState = o),
        (e.baseState = d),
        (e.baseQueue = S),
        (l.lastRenderedState = o);
    }
    return s === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function zo(e) {
    var t = Ve(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      s = n.pending,
      o = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = (s = s.next);
      do (o = e(o, d.action)), (d = d.next);
      while (d !== s);
      xt(o, t.memoizedState) || (Xe = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, l];
  }
  function Sd(e, t, n) {
    var l = ye,
      s = Ve(),
      o = Ae;
    if (o) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var d = !xt((Me || s).memoizedState, n);
    if (
      (d && ((s.memoizedState = n), (Xe = !0)),
      (s = s.queue),
      Lo(Td.bind(null, l, s, e), [e]),
      s.getSnapshot !== t || d || (Qe !== null && Qe.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        tl(9, { destroy: void 0 }, Ad.bind(null, l, s, n, t), null),
        ze === null)
      )
        throw Error(c(349));
      o || (hn & 127) !== 0 || Ed(l, t, n);
    }
    return n;
  }
  function Ed(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ye.updateQueue),
      t === null
        ? ((t = fs()), (ye.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ad(e, t, n, l) {
    (t.value = n), (t.getSnapshot = l), jd(t) && Nd(e);
  }
  function Td(e, t, n) {
    return n(function () {
      jd(t) && Nd(e);
    });
  }
  function jd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !xt(e, n);
    } catch {
      return !0;
    }
  }
  function Nd(e) {
    var t = da(e, 2);
    t !== null && ht(t, e, 2);
  }
  function Do(e) {
    var t = st();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), wa)) {
        Nn(!0);
        try {
          n();
        } finally {
          Nn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Cd(e, t, n, l) {
    return (e.baseState = n), _o(e, Me, typeof l == "function" ? l : mn);
  }
  function sv(e, t, n, l, s) {
    if (gs(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var o = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          o.listeners.push(d);
        },
      };
      R.T !== null ? n(!0) : (o.isTransition = !1),
        l(o),
        (n = t.pending),
        n === null
          ? ((o.next = t.pending = o), Od(t, o))
          : ((o.next = n.next), (t.pending = n.next = o));
    }
  }
  function Od(e, t) {
    var n = t.action,
      l = t.payload,
      s = e.state;
    if (t.isTransition) {
      var o = R.T,
        d = {};
      R.T = d;
      try {
        var g = n(s, l),
          S = R.S;
        S !== null && S(d, g), Rd(e, t, g);
      } catch (_) {
        Uo(e, t, _);
      } finally {
        o !== null && d.types !== null && (o.types = d.types), (R.T = o);
      }
    } else
      try {
        (o = n(s, l)), Rd(e, t, o);
      } catch (_) {
        Uo(e, t, _);
      }
  }
  function Rd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            Md(e, t, l);
          },
          function (l) {
            return Uo(e, t, l);
          }
        )
      : Md(e, t, n);
  }
  function Md(e, t, n) {
    (t.status = "fulfilled"),
      (t.value = n),
      kd(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Od(e, n)));
  }
  function Uo(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = "rejected"), (t.reason = n), kd(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function kd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function _d(e, t) {
    return t;
  }
  function zd(e, t) {
    if (Ae) {
      var n = ze.formState;
      if (n !== null) {
        e: {
          var l = ye;
          if (Ae) {
            if (De) {
              t: {
                for (var s = De, o = Ut; s.nodeType !== 8; ) {
                  if (!o) {
                    s = null;
                    break t;
                  }
                  if (((s = Ht(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                (o = s.data), (s = o === "F!" || o === "F" ? s : null);
              }
              if (s) {
                (De = Ht(s.nextSibling)), (l = s.data === "F!");
                break e;
              }
            }
            kn(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = st()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _d,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = Id.bind(null, ye, l)),
      (l.dispatch = n),
      (l = Do(!1)),
      (o = Vo.bind(null, ye, !1, l.queue)),
      (l = st()),
      (s = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = s),
      (n = sv.bind(null, ye, s, o, n)),
      (s.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function Dd(e) {
    var t = Ve();
    return Ud(t, Me, e);
  }
  function Ud(e, t, n) {
    if (
      ((t = _o(e, t, _d)[0]),
      (e = hs(mn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = Zl(t);
      } catch (d) {
        throw d === Pa ? as : d;
      }
    else l = t;
    t = Ve();
    var s = t.queue,
      o = s.dispatch;
    return (
      n !== t.memoizedState &&
        ((ye.flags |= 2048),
        tl(9, { destroy: void 0 }, rv.bind(null, s, n), null)),
      [l, o, e]
    );
  }
  function rv(e, t) {
    e.action = t;
  }
  function Ld(e) {
    var t = Ve(),
      n = Me;
    if (n !== null) return Ud(t, n, e);
    Ve(), (t = t.memoizedState), (n = Ve());
    var l = n.queue.dispatch;
    return (n.memoizedState = e), [t, l, !1];
  }
  function tl(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = ye.updateQueue),
      t === null && ((t = fs()), (ye.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Hd() {
    return Ve().memoizedState;
  }
  function ms(e, t, n, l) {
    var s = st();
    (ye.flags |= e),
      (s.memoizedState = tl(
        1 | t,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l
      ));
  }
  function ps(e, t, n, l) {
    var s = Ve();
    l = l === void 0 ? null : l;
    var o = s.memoizedState.inst;
    Me !== null && l !== null && No(l, Me.memoizedState.deps)
      ? (s.memoizedState = tl(t, o, n, l))
      : ((ye.flags |= e), (s.memoizedState = tl(1 | t, o, n, l)));
  }
  function Bd(e, t) {
    ms(8390656, 8, e, t);
  }
  function Lo(e, t) {
    ps(2048, 8, e, t);
  }
  function ov(e) {
    ye.flags |= 4;
    var t = ye.updateQueue;
    if (t === null) (t = fs()), (ye.updateQueue = t), (t.events = [e]);
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function qd(e) {
    var t = Ve().memoizedState;
    return (
      ov({ ref: t, nextImpl: e }),
      function () {
        if ((Ne & 2) !== 0) throw Error(c(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Gd(e, t) {
    return ps(4, 2, e, t);
  }
  function Vd(e, t) {
    return ps(4, 4, e, t);
  }
  function Yd(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Qd(e, t, n) {
    (n = n != null ? n.concat([e]) : null), ps(4, 4, Yd.bind(null, t, e), n);
  }
  function Ho() {}
  function Xd(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && No(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function Kd(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && No(t, l[1])) return l[0];
    if (((l = e()), wa)) {
      Nn(!0);
      try {
        e();
      } finally {
        Nn(!1);
      }
    }
    return (n.memoizedState = [l, t]), l;
  }
  function Bo(e, t, n) {
    return n === void 0 || ((hn & 1073741824) !== 0 && (Se & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Zh()), (ye.lanes |= e), (Gn |= e), n);
  }
  function Zd(e, t, n, l) {
    return xt(n, t)
      ? n
      : Wa.current !== null
      ? ((e = Bo(e, n, l)), xt(e, t) || (Xe = !0), e)
      : (hn & 42) === 0 || ((hn & 1073741824) !== 0 && (Se & 261930) === 0)
      ? ((Xe = !0), (e.memoizedState = n))
      : ((e = Zh()), (ye.lanes |= e), (Gn |= e), t);
  }
  function Fd(e, t, n, l, s) {
    var o = X.p;
    X.p = o !== 0 && 8 > o ? o : 8;
    var d = R.T,
      g = {};
    (R.T = g), Vo(e, !1, t, n);
    try {
      var S = s(),
        _ = R.S;
      if (
        (_ !== null && _(g, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var H = av(S, l);
        Fl(e, t, H, Tt(e));
      } else Fl(e, t, l, Tt(e));
    } catch (V) {
      Fl(e, t, { then: function () {}, status: "rejected", reason: V }, Tt());
    } finally {
      (X.p = o),
        d !== null && g.types !== null && (d.types = g.types),
        (R.T = d);
    }
  }
  function cv() {}
  function qo(e, t, n, l) {
    if (e.tag !== 5) throw Error(c(476));
    var s = Jd(e).queue;
    Fd(
      e,
      s,
      t,
      U,
      n === null
        ? cv
        : function () {
            return Pd(e), n(l);
          }
    );
  }
  function Jd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: U,
      baseState: U,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mn,
        lastRenderedState: U,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: mn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Pd(e) {
    var t = Jd(e);
    t.next === null && (t = e.alternate.memoizedState),
      Fl(e, t.next.queue, {}, Tt());
  }
  function Go() {
    return tt(fi);
  }
  function $d() {
    return Ve().memoizedState;
  }
  function Wd() {
    return Ve().memoizedState;
  }
  function uv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Tt();
          e = Dn(n);
          var l = Un(t, e, n);
          l !== null && (ht(l, t, n), Yl(l, t, n)),
            (t = { cache: go() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function fv(e, t, n) {
    var l = Tt();
    (n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      gs(e)
        ? eh(t, n)
        : ((n = lo(e, t, n, l)), n !== null && (ht(n, e, l), th(n, t, l)));
  }
  function Id(e, t, n) {
    var l = Tt();
    Fl(e, t, n, l);
  }
  function Fl(e, t, n, l) {
    var s = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (gs(e)) eh(t, s);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var d = t.lastRenderedState,
            g = o(d, n);
          if (((s.hasEagerState = !0), (s.eagerState = g), xt(g, d)))
            return Pi(e, t, s, 0), ze === null && Ji(), !1;
        } catch {}
      if (((n = lo(e, t, s, l)), n !== null))
        return ht(n, e, l), th(n, t, l), !0;
    }
    return !1;
  }
  function Vo(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: bc(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gs(e))
    ) {
      if (t) throw Error(c(479));
    } else (t = lo(e, n, l, 2)), t !== null && ht(t, e, 2);
  }
  function gs(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
  }
  function eh(e, t) {
    Ia = cs = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function th(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), sf(e, n);
    }
  }
  var Jl = {
    readContext: tt,
    use: ds,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useLayoutEffect: He,
    useInsertionEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useSyncExternalStore: He,
    useId: He,
    useHostTransitionStatus: He,
    useFormState: He,
    useActionState: He,
    useOptimistic: He,
    useMemoCache: He,
    useCacheRefresh: He,
  };
  Jl.useEffectEvent = He;
  var nh = {
      readContext: tt,
      use: ds,
      useCallback: function (e, t) {
        return (st().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: tt,
      useEffect: Bd,
      useImperativeHandle: function (e, t, n) {
        (n = n != null ? n.concat([e]) : null),
          ms(4194308, 4, Yd.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return ms(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        ms(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = st();
        t = t === void 0 ? null : t;
        var l = e();
        if (wa) {
          Nn(!0);
          try {
            e();
          } finally {
            Nn(!1);
          }
        }
        return (n.memoizedState = [l, t]), l;
      },
      useReducer: function (e, t, n) {
        var l = st();
        if (n !== void 0) {
          var s = n(t);
          if (wa) {
            Nn(!0);
            try {
              n(t);
            } finally {
              Nn(!1);
            }
          }
        } else s = t;
        return (
          (l.memoizedState = l.baseState = s),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: s,
          }),
          (l.queue = e),
          (e = e.dispatch = fv.bind(null, ye, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = st();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Do(e);
        var t = e.queue,
          n = Id.bind(null, ye, t);
        return (t.dispatch = n), [e.memoizedState, n];
      },
      useDebugValue: Ho,
      useDeferredValue: function (e, t) {
        var n = st();
        return Bo(n, e, t);
      },
      useTransition: function () {
        var e = Do(!1);
        return (
          (e = Fd.bind(null, ye, e.queue, !0, !1)),
          (st().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = ye,
          s = st();
        if (Ae) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(c(349));
          (Se & 127) !== 0 || Ed(l, t, n);
        }
        s.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (s.queue = o),
          Bd(Td.bind(null, l, o, e), [e]),
          (l.flags |= 2048),
          tl(9, { destroy: void 0 }, Ad.bind(null, l, o, n, t), null),
          n
        );
      },
      useId: function () {
        var e = st(),
          t = ze.identifierPrefix;
        if (Ae) {
          var n = $t,
            l = Pt;
          (n = (l & ~(1 << (32 - vt(l) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = us++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_");
        } else (n = lv++), (t = "_" + t + "r_" + n.toString(32) + "_");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Go,
      useFormState: zd,
      useActionState: zd,
      useOptimistic: function (e) {
        var t = st();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = Vo.bind(null, ye, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: ko,
      useCacheRefresh: function () {
        return (st().memoizedState = uv.bind(null, ye));
      },
      useEffectEvent: function (e) {
        var t = st(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Ne & 2) !== 0) throw Error(c(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Yo = {
      readContext: tt,
      use: ds,
      useCallback: Xd,
      useContext: tt,
      useEffect: Lo,
      useImperativeHandle: Qd,
      useInsertionEffect: Gd,
      useLayoutEffect: Vd,
      useMemo: Kd,
      useReducer: hs,
      useRef: Hd,
      useState: function () {
        return hs(mn);
      },
      useDebugValue: Ho,
      useDeferredValue: function (e, t) {
        var n = Ve();
        return Zd(n, Me.memoizedState, e, t);
      },
      useTransition: function () {
        var e = hs(mn)[0],
          t = Ve().memoizedState;
        return [typeof e == "boolean" ? e : Zl(e), t];
      },
      useSyncExternalStore: Sd,
      useId: $d,
      useHostTransitionStatus: Go,
      useFormState: Dd,
      useActionState: Dd,
      useOptimistic: function (e, t) {
        var n = Ve();
        return Cd(n, Me, e, t);
      },
      useMemoCache: ko,
      useCacheRefresh: Wd,
    };
  Yo.useEffectEvent = qd;
  var ah = {
    readContext: tt,
    use: ds,
    useCallback: Xd,
    useContext: tt,
    useEffect: Lo,
    useImperativeHandle: Qd,
    useInsertionEffect: Gd,
    useLayoutEffect: Vd,
    useMemo: Kd,
    useReducer: zo,
    useRef: Hd,
    useState: function () {
      return zo(mn);
    },
    useDebugValue: Ho,
    useDeferredValue: function (e, t) {
      var n = Ve();
      return Me === null ? Bo(n, e, t) : Zd(n, Me.memoizedState, e, t);
    },
    useTransition: function () {
      var e = zo(mn)[0],
        t = Ve().memoizedState;
      return [typeof e == "boolean" ? e : Zl(e), t];
    },
    useSyncExternalStore: Sd,
    useId: $d,
    useHostTransitionStatus: Go,
    useFormState: Ld,
    useActionState: Ld,
    useOptimistic: function (e, t) {
      var n = Ve();
      return Me !== null
        ? Cd(n, Me, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: ko,
    useCacheRefresh: Wd,
  };
  ah.useEffectEvent = qd;
  function Qo(e, t, n, l) {
    (t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : b({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Xo = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Tt(),
        s = Dn(l);
      (s.payload = t),
        n != null && (s.callback = n),
        (t = Un(e, s, l)),
        t !== null && (ht(t, e, l), Yl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Tt(),
        s = Dn(l);
      (s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = Un(e, s, l)),
        t !== null && (ht(t, e, l), Yl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Tt(),
        l = Dn(n);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Un(e, l, n)),
        t !== null && (ht(t, e, n), Yl(t, e, n));
    },
  };
  function lh(e, t, n, l, s, o, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, o, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Dl(n, l) || !Dl(s, o)
        : !0
    );
  }
  function ih(e, t, n, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Xo.enqueueReplaceState(t, t.state, null);
  }
  function Sa(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t) l !== "ref" && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = b({}, n));
      for (var s in e) n[s] === void 0 && (n[s] = e[s]);
    }
    return n;
  }
  function sh(e) {
    Fi(e);
  }
  function rh(e) {
    console.error(e);
  }
  function oh(e) {
    Fi(e);
  }
  function ys(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function ch(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Ko(e, t, n) {
    return (
      (n = Dn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ys(e, t);
      }),
      n
    );
  }
  function uh(e) {
    return (e = Dn(e)), (e.tag = 3), e;
  }
  function fh(e, t, n, l) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = l.value;
      (e.payload = function () {
        return s(o);
      }),
        (e.callback = function () {
          ch(t, n, l);
        });
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (e.callback = function () {
        ch(t, n, l),
          typeof s != "function" &&
            (Vn === null ? (Vn = new Set([this])) : Vn.add(this));
        var g = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function dv(e, t, n, l, s) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Za(t, n, s, !0),
        (n = wt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Lt === null ? Os() : n.alternate === null && Be === 0 && (Be = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              l === ls
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  yc(e, l, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === ls
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  yc(e, l, s)),
              !1
            );
        }
        throw Error(c(435, n.tag));
      }
      return yc(e, l, s), Os(), !1;
    }
    if (Ae)
      return (
        (t = wt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = s),
            l !== uo && ((e = Error(c(422), { cause: l })), Hl(_t(e, n))))
          : (l !== uo && ((t = Error(c(423), { cause: l })), Hl(_t(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (s &= -s),
            (e.lanes |= s),
            (l = _t(l, n)),
            (s = Ko(e.stateNode, l, s)),
            So(e, s),
            Be !== 4 && (Be = 2)),
        !1
      );
    var o = Error(c(520), { cause: l });
    if (
      ((o = _t(o, n)),
      ai === null ? (ai = [o]) : ai.push(o),
      Be !== 4 && (Be = 2),
      t === null)
    )
      return !0;
    (l = _t(l, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = s & -s),
            (n.lanes |= e),
            (e = Ko(n.stateNode, l, e)),
            So(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Vn === null || !Vn.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = uh(s)),
              fh(s, e, n, l),
              So(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Zo = Error(c(461)),
    Xe = !1;
  function nt(e, t, n, l) {
    t.child = e === null ? pd(t, null, n, l) : ba(t, e.child, n, l);
  }
  function dh(e, t, n, l, s) {
    n = n.render;
    var o = t.ref;
    if ("ref" in l) {
      var d = {};
      for (var g in l) g !== "ref" && (d[g] = l[g]);
    } else d = l;
    return (
      ga(t),
      (l = Co(e, t, n, d, o, s)),
      (g = Oo()),
      e !== null && !Xe
        ? (Ro(e, t, s), pn(e, t, s))
        : (Ae && g && oo(t), (t.flags |= 1), nt(e, t, l, s), t.child)
    );
  }
  function hh(e, t, n, l, s) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !io(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = o), mh(e, t, o, l, s))
        : ((e = Wi(n.type, null, l, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !tc(e, s))) {
      var d = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Dl), n(d, l) && e.ref === t.ref)
      )
        return pn(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = cn(o, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function mh(e, t, n, l, s) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Dl(o, l) && e.ref === t.ref)
        if (((Xe = !1), (t.pendingProps = l = o), tc(e, s)))
          (e.flags & 131072) !== 0 && (Xe = !0);
        else return (t.lanes = e.lanes), pn(e, t, s);
    }
    return Fo(e, t, n, l, s);
  }
  function ph(e, t, n, l) {
    var s = l.children,
      o = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | n : n), e !== null)) {
          for (l = t.child = e.child, s = 0; l !== null; )
            (s = s | l.lanes | l.childLanes), (l = l.sibling);
          l = s & ~o;
        } else (l = 0), (t.child = null);
        return gh(e, t, o, n, l);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ns(t, o !== null ? o.cachePool : null),
          o !== null ? vd(t, o) : Ao(),
          xd(t);
      else
        return (
          (l = t.lanes = 536870912),
          gh(e, t, o !== null ? o.baseLanes | n : n, n, l)
        );
    } else
      o !== null
        ? (ns(t, o.cachePool), vd(t, o), Hn(), (t.memoizedState = null))
        : (e !== null && ns(t, null), Ao(), Hn());
    return nt(e, t, s, n), t.child;
  }
  function Pl(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function gh(e, t, n, l, s) {
    var o = vo();
    return (
      (o = o === null ? null : { parent: Ye._currentValue, pool: o }),
      (t.memoizedState = { baseLanes: n, cachePool: o }),
      e !== null && ns(t, null),
      Ao(),
      xd(t),
      e !== null && Za(e, t, l, !0),
      (t.childLanes = s),
      null
    );
  }
  function vs(e, t) {
    return (
      (t = bs({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function yh(e, t, n) {
    return (
      ba(t, e.child, null, n),
      (e = vs(t, t.pendingProps)),
      (e.flags |= 2),
      St(t),
      (t.memoizedState = null),
      e
    );
  }
  function hv(e, t, n) {
    var l = t.pendingProps,
      s = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ae) {
        if (l.mode === "hidden")
          return (e = vs(t, l)), (t.lanes = 536870912), Pl(null, e);
        if (
          (jo(t),
          (e = De)
            ? ((e = Om(e, Ut)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Rn !== null ? { id: Pt, overflow: $t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = ed(e)),
                (n.return = t),
                (t.child = n),
                (et = t),
                (De = null)))
            : (e = null),
          e === null)
        )
          throw kn(t);
        return (t.lanes = 536870912), null;
      }
      return vs(t, l);
    }
    var o = e.memoizedState;
    if (o !== null) {
      var d = o.dehydrated;
      if ((jo(t), s))
        if (t.flags & 256) (t.flags &= -257), (t = yh(e, t, n));
        else if (t.memoizedState !== null)
          (t.child = e.child), (t.flags |= 128), (t = null);
        else throw Error(c(558));
      else if (
        (Xe || Za(e, t, n, !1), (s = (n & e.childLanes) !== 0), Xe || s)
      ) {
        if (
          ((l = ze),
          l !== null && ((d = rf(l, n)), d !== 0 && d !== o.retryLane))
        )
          throw ((o.retryLane = d), da(e, d), ht(l, e, d), Zo);
        Os(), (t = yh(e, t, n));
      } else
        (e = o.treeContext),
          (De = Ht(d.nextSibling)),
          (et = t),
          (Ae = !0),
          (Mn = null),
          (Ut = !1),
          e !== null && ad(t, e),
          (t = vs(t, l)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (e = cn(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function xs(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Fo(e, t, n, l, s) {
    return (
      ga(t),
      (n = Co(e, t, n, l, void 0, s)),
      (l = Oo()),
      e !== null && !Xe
        ? (Ro(e, t, s), pn(e, t, s))
        : (Ae && l && oo(t), (t.flags |= 1), nt(e, t, n, s), t.child)
    );
  }
  function vh(e, t, n, l, s, o) {
    return (
      ga(t),
      (t.updateQueue = null),
      (n = wd(t, l, n, s)),
      bd(e),
      (l = Oo()),
      e !== null && !Xe
        ? (Ro(e, t, o), pn(e, t, o))
        : (Ae && l && oo(t), (t.flags |= 1), nt(e, t, n, o), t.child)
    );
  }
  function xh(e, t, n, l, s) {
    if ((ga(t), t.stateNode === null)) {
      var o = Ya,
        d = n.contextType;
      typeof d == "object" && d !== null && (o = tt(d)),
        (o = new n(l, o)),
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = Xo),
        (t.stateNode = o),
        (o._reactInternals = t),
        (o = t.stateNode),
        (o.props = l),
        (o.state = t.memoizedState),
        (o.refs = {}),
        bo(t),
        (d = n.contextType),
        (o.context = typeof d == "object" && d !== null ? tt(d) : Ya),
        (o.state = t.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (Qo(t, n, d, l), (o.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((d = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          d !== o.state && Xo.enqueueReplaceState(o, o.state, null),
          Xl(t, l, o, s),
          Ql(),
          (o.state = t.memoizedState)),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      o = t.stateNode;
      var g = t.memoizedProps,
        S = Sa(n, g);
      o.props = S;
      var _ = o.context,
        H = n.contextType;
      (d = Ya), typeof H == "object" && H !== null && (d = tt(H));
      var V = n.getDerivedStateFromProps;
      (H =
        typeof V == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (g = t.pendingProps !== g),
        H ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((g || _ !== d) && ih(t, o, l, d)),
        (zn = !1);
      var z = t.memoizedState;
      (o.state = z),
        Xl(t, l, o, s),
        Ql(),
        (_ = t.memoizedState),
        g || z !== _ || zn
          ? (typeof V == "function" && (Qo(t, n, V, l), (_ = t.memoizedState)),
            (S = zn || lh(t, n, S, l, z, _, d))
              ? (H ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = _)),
            (o.props = l),
            (o.state = _),
            (o.context = d),
            (l = S))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (o = t.stateNode),
        wo(e, t),
        (d = t.memoizedProps),
        (H = Sa(n, d)),
        (o.props = H),
        (V = t.pendingProps),
        (z = o.context),
        (_ = n.contextType),
        (S = Ya),
        typeof _ == "object" && _ !== null && (S = tt(_)),
        (g = n.getDerivedStateFromProps),
        (_ =
          typeof g == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((d !== V || z !== S) && ih(t, o, l, S)),
        (zn = !1),
        (z = t.memoizedState),
        (o.state = z),
        Xl(t, l, o, s),
        Ql();
      var D = t.memoizedState;
      d !== V ||
      z !== D ||
      zn ||
      (e !== null && e.dependencies !== null && es(e.dependencies))
        ? (typeof g == "function" && (Qo(t, n, g, l), (D = t.memoizedState)),
          (H =
            zn ||
            lh(t, n, H, l, z, D, S) ||
            (e !== null && e.dependencies !== null && es(e.dependencies)))
            ? (_ ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(l, D, S),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(l, D, S)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (d === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = D)),
          (o.props = l),
          (o.state = D),
          (o.context = S),
          (l = H))
        : (typeof o.componentDidUpdate != "function" ||
            (d === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (o = l),
      xs(e, t),
      (l = (t.flags & 128) !== 0),
      o || l
        ? ((o = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = ba(t, e.child, null, s)),
              (t.child = ba(t, null, n, s)))
            : nt(e, t, n, s),
          (t.memoizedState = o.state),
          (e = t.child))
        : (e = pn(e, t, s)),
      e
    );
  }
  function bh(e, t, n, l) {
    return ma(), (t.flags |= 256), nt(e, t, n, l), t.child;
  }
  var Jo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Po(e) {
    return { baseLanes: e, cachePool: cd() };
  }
  function $o(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= At), e;
  }
  function wh(e, t, n) {
    var l = t.pendingProps,
      s = !1,
      o = (t.flags & 128) !== 0,
      d;
    if (
      ((d = o) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0),
      d && ((s = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ae) {
        if (
          (s ? Ln(t) : Hn(),
          (e = De)
            ? ((e = Om(e, Ut)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Rn !== null ? { id: Pt, overflow: $t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = ed(e)),
                (n.return = t),
                (t.child = n),
                (et = t),
                (De = null)))
            : (e = null),
          e === null)
        )
          throw kn(t);
        return _c(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var g = l.children;
      return (
        (l = l.fallback),
        s
          ? (Hn(),
            (s = t.mode),
            (g = bs({ mode: "hidden", children: g }, s)),
            (l = ha(l, s, n, null)),
            (g.return = t),
            (l.return = t),
            (g.sibling = l),
            (t.child = g),
            (l = t.child),
            (l.memoizedState = Po(n)),
            (l.childLanes = $o(e, d, n)),
            (t.memoizedState = Jo),
            Pl(null, l))
          : (Ln(t), Wo(t, g))
      );
    }
    var S = e.memoizedState;
    if (S !== null && ((g = S.dehydrated), g !== null)) {
      if (o)
        t.flags & 256
          ? (Ln(t), (t.flags &= -257), (t = Io(e, t, n)))
          : t.memoizedState !== null
          ? (Hn(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Hn(),
            (g = l.fallback),
            (s = t.mode),
            (l = bs({ mode: "visible", children: l.children }, s)),
            (g = ha(g, s, n, null)),
            (g.flags |= 2),
            (l.return = t),
            (g.return = t),
            (l.sibling = g),
            (t.child = l),
            ba(t, e.child, null, n),
            (l = t.child),
            (l.memoizedState = Po(n)),
            (l.childLanes = $o(e, d, n)),
            (t.memoizedState = Jo),
            (t = Pl(null, l)));
      else if ((Ln(t), _c(g))) {
        if (((d = g.nextSibling && g.nextSibling.dataset), d)) var _ = d.dgst;
        (d = _),
          (l = Error(c(419))),
          (l.stack = ""),
          (l.digest = d),
          Hl({ value: l, source: null, stack: null }),
          (t = Io(e, t, n));
      } else if (
        (Xe || Za(e, t, n, !1), (d = (n & e.childLanes) !== 0), Xe || d)
      ) {
        if (
          ((d = ze),
          d !== null && ((l = rf(d, n)), l !== 0 && l !== S.retryLane))
        )
          throw ((S.retryLane = l), da(e, l), ht(d, e, l), Zo);
        kc(g) || Os(), (t = Io(e, t, n));
      } else
        kc(g)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = S.treeContext),
            (De = Ht(g.nextSibling)),
            (et = t),
            (Ae = !0),
            (Mn = null),
            (Ut = !1),
            e !== null && ad(t, e),
            (t = Wo(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return s
      ? (Hn(),
        (g = l.fallback),
        (s = t.mode),
        (S = e.child),
        (_ = S.sibling),
        (l = cn(S, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = S.subtreeFlags & 65011712),
        _ !== null ? (g = cn(_, g)) : ((g = ha(g, s, n, null)), (g.flags |= 2)),
        (g.return = t),
        (l.return = t),
        (l.sibling = g),
        (t.child = l),
        Pl(null, l),
        (l = t.child),
        (g = e.child.memoizedState),
        g === null
          ? (g = Po(n))
          : ((s = g.cachePool),
            s !== null
              ? ((S = Ye._currentValue),
                (s = s.parent !== S ? { parent: S, pool: S } : s))
              : (s = cd()),
            (g = { baseLanes: g.baseLanes | n, cachePool: s })),
        (l.memoizedState = g),
        (l.childLanes = $o(e, d, n)),
        (t.memoizedState = Jo),
        Pl(e.child, l))
      : (Ln(t),
        (n = e.child),
        (e = n.sibling),
        (n = cn(n, { mode: "visible", children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((d = t.deletions),
          d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Wo(e, t) {
    return (
      (t = bs({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function bs(e, t) {
    return (e = bt(22, e, null, t)), (e.lanes = 0), e;
  }
  function Io(e, t, n) {
    return (
      ba(t, e.child, null, n),
      (e = Wo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Sh(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), mo(e.return, t, n);
  }
  function ec(e, t, n, l, s, o) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: s,
          treeForkCount: o,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = n),
        (d.tailMode = s),
        (d.treeForkCount = o));
  }
  function Eh(e, t, n) {
    var l = t.pendingProps,
      s = l.revealOrder,
      o = l.tail;
    l = l.children;
    var d = Ge.current,
      g = (d & 2) !== 0;
    if (
      (g ? ((d = (d & 1) | 2), (t.flags |= 128)) : (d &= 1),
      F(Ge, d),
      nt(e, t, l, n),
      (l = Ae ? Ll : 0),
      !g && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sh(e, n, t);
        else if (e.tag === 19) Sh(e, n, t);
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
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && os(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          ec(t, !1, s, n, o, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && os(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        ec(t, !0, n, null, o, l);
        break;
      case "together":
        ec(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function pn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Gn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Za(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = cn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function tc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && es(e)));
  }
  function mv(e, t, n) {
    switch (t.tag) {
      case 3:
        qe(t, t.stateNode.containerInfo),
          _n(t, Ye, e.memoizedState.cache),
          ma();
        break;
      case 27:
      case 5:
        Ot(t);
        break;
      case 4:
        qe(t, t.stateNode.containerInfo);
        break;
      case 10:
        _n(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), jo(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Ln(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? wh(e, t, n)
            : (Ln(t), (e = pn(e, t, n)), e !== null ? e.sibling : null);
        Ln(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (Za(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          s)
        ) {
          if (l) return Eh(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          F(Ge, Ge.current),
          l)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), ph(e, t, n, t.pendingProps);
      case 24:
        _n(t, Ye, e.memoizedState.cache);
    }
    return pn(e, t, n);
  }
  function Ah(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Xe = !0;
      else {
        if (!tc(e, n) && (t.flags & 128) === 0) return (Xe = !1), mv(e, t, n);
        Xe = (e.flags & 131072) !== 0;
      }
    else (Xe = !1), Ae && (t.flags & 1048576) !== 0 && nd(t, Ll, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = va(t.elementType)), (t.type = e), typeof e == "function"))
            io(e)
              ? ((l = Sa(e, l)), (t.tag = 1), (t = xh(null, t, e, l, n)))
              : ((t.tag = 0), (t = Fo(null, t, e, l, n)));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === Z) {
                (t.tag = 11), (t = dh(null, t, e, l, n));
                break e;
              } else if (s === Q) {
                (t.tag = 14), (t = hh(null, t, e, l, n));
                break e;
              }
            }
            throw ((t = W(e) || e), Error(c(306, t, "")));
          }
        }
        return t;
      case 0:
        return Fo(e, t, t.type, t.pendingProps, n);
      case 1:
        return (l = t.type), (s = Sa(l, t.pendingProps)), xh(e, t, l, s, n);
      case 3:
        e: {
          if ((qe(t, t.stateNode.containerInfo), e === null))
            throw Error(c(387));
          l = t.pendingProps;
          var o = t.memoizedState;
          (s = o.element), wo(e, t), Xl(t, l, null, n);
          var d = t.memoizedState;
          if (
            ((l = d.cache),
            _n(t, Ye, l),
            l !== o.cache && po(t, [Ye], n, !0),
            Ql(),
            (l = d.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: l, isDehydrated: !1, cache: d.cache }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              t = bh(e, t, l, n);
              break e;
            } else if (l !== s) {
              (s = _t(Error(c(424)), t)), Hl(s), (t = bh(e, t, l, n));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  De = Ht(e.firstChild),
                  et = t,
                  Ae = !0,
                  Mn = null,
                  Ut = !0,
                  n = pd(t, null, l, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((ma(), l === s)) {
              t = pn(e, t, n);
              break e;
            }
            nt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          xs(e, t),
          e === null
            ? (n = Dm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ae ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = Us(ge.current).createElement(n)),
                (l[Ie] = t),
                (l[rt] = e),
                at(l, n, e),
                $e(l),
                (t.stateNode = l))
            : (t.memoizedState = Dm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ot(t),
          e === null &&
            Ae &&
            ((l = t.stateNode = km(t.type, t.pendingProps, ge.current)),
            (et = t),
            (Ut = !0),
            (s = De),
            Kn(t.type) ? ((zc = s), (De = Ht(l.firstChild))) : (De = s)),
          nt(e, t, t.pendingProps.children, n),
          xs(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ae &&
            ((s = l = De) &&
              ((l = Qv(l, t.type, t.pendingProps, Ut)),
              l !== null
                ? ((t.stateNode = l),
                  (et = t),
                  (De = Ht(l.firstChild)),
                  (Ut = !1),
                  (s = !0))
                : (s = !1)),
            s || kn(t)),
          Ot(t),
          (s = t.type),
          (o = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (l = o.children),
          Oc(s, o) ? (l = null) : d !== null && Oc(s, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((s = Co(e, t, iv, null, null, n)), (fi._currentValue = s)),
          xs(e, t),
          nt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ae &&
            ((e = n = De) &&
              ((n = Xv(n, t.pendingProps, Ut)),
              n !== null
                ? ((t.stateNode = n), (et = t), (De = null), (e = !0))
                : (e = !1)),
            e || kn(t)),
          null
        );
      case 13:
        return wh(e, t, n);
      case 4:
        return (
          qe(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = ba(t, null, l, n)) : nt(e, t, l, n),
          t.child
        );
      case 11:
        return dh(e, t, t.type, t.pendingProps, n);
      case 7:
        return nt(e, t, t.pendingProps, n), t.child;
      case 8:
        return nt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return nt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (
          (l = t.pendingProps),
          _n(t, t.type, l.value),
          nt(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (s = t.type._context),
          (l = t.pendingProps.children),
          ga(t),
          (s = tt(s)),
          (l = l(s)),
          (t.flags |= 1),
          nt(e, t, l, n),
          t.child
        );
      case 14:
        return hh(e, t, t.type, t.pendingProps, n);
      case 15:
        return mh(e, t, t.type, t.pendingProps, n);
      case 19:
        return Eh(e, t, n);
      case 31:
        return hv(e, t, n);
      case 22:
        return ph(e, t, n, t.pendingProps);
      case 24:
        return (
          ga(t),
          (l = tt(Ye)),
          e === null
            ? ((s = vo()),
              s === null &&
                ((s = ze),
                (o = go()),
                (s.pooledCache = o),
                o.refCount++,
                o !== null && (s.pooledCacheLanes |= n),
                (s = o)),
              (t.memoizedState = { parent: l, cache: s }),
              bo(t),
              _n(t, Ye, s))
            : ((e.lanes & n) !== 0 && (wo(e, t), Xl(t, null, null, n), Ql()),
              (s = e.memoizedState),
              (o = t.memoizedState),
              s.parent !== l
                ? ((s = { parent: l, cache: l }),
                  (t.memoizedState = s),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = s),
                  _n(t, Ye, l))
                : ((l = o.cache),
                  _n(t, Ye, l),
                  l !== s.cache && po(t, [Ye], n, !0))),
          nt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function gn(e) {
    e.flags |= 4;
  }
  function nc(e, t, n, l, s) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (s & 335544128) === s))
        if (e.stateNode.complete) e.flags |= 8192;
        else if ($h()) e.flags |= 8192;
        else throw ((xa = ls), xo);
    } else e.flags &= -16777217;
  }
  function Th(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !qm(t)))
      if ($h()) e.flags |= 8192;
      else throw ((xa = ls), xo);
  }
  function ws(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? af() : 536870912), (e.lanes |= t), (il |= t));
  }
  function $l(e, t) {
    if (!Ae)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var s = e.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags & 65011712),
          (l |= s.flags & 65011712),
          (s.return = e),
          (s = s.sibling);
    else
      for (s = e.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags),
          (l |= s.flags),
          (s.return = e),
          (s = s.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = n), t;
  }
  function pv(e, t, n) {
    var l = t.pendingProps;
    switch ((co(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(t), null;
      case 1:
        return Ue(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          dn(Ye),
          Re(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ka(t)
              ? gn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), fo())),
          Ue(t),
          null
        );
      case 26:
        var s = t.type,
          o = t.memoizedState;
        return (
          e === null
            ? (gn(t),
              o !== null ? (Ue(t), Th(t, o)) : (Ue(t), nc(t, s, null, l, n)))
            : o
            ? o !== e.memoizedState
              ? (gn(t), Ue(t), Th(t, o))
              : (Ue(t), (t.flags &= -16777217))
            : ((e = e.memoizedProps),
              e !== l && gn(t),
              Ue(t),
              nc(t, s, e, l, n)),
          null
        );
      case 27:
        if (
          (Ft(t),
          (n = ge.current),
          (s = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && gn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return Ue(t), null;
          }
          (e = $.current),
            Ka(t) ? ld(t) : ((e = km(s, l, n)), (t.stateNode = e), gn(t));
        }
        return Ue(t), null;
      case 5:
        if ((Ft(t), (s = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && gn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return Ue(t), null;
          }
          if (((o = $.current), Ka(t))) ld(t);
          else {
            var d = Us(ge.current);
            switch (o) {
              case 1:
                o = d.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                o = d.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    o = d.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    o = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    (o = d.createElement("div")),
                      (o.innerHTML = "<script></script>"),
                      (o = o.removeChild(o.firstChild));
                    break;
                  case "select":
                    (o =
                      typeof l.is == "string"
                        ? d.createElement("select", { is: l.is })
                        : d.createElement("select")),
                      l.multiple
                        ? (o.multiple = !0)
                        : l.size && (o.size = l.size);
                    break;
                  default:
                    o =
                      typeof l.is == "string"
                        ? d.createElement(s, { is: l.is })
                        : d.createElement(s);
                }
            }
            (o[Ie] = t), (o[rt] = l);
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) o.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                (d.child.return = d), (d = d.child);
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t) break e;
                d = d.return;
              }
              (d.sibling.return = d.return), (d = d.sibling);
            }
            t.stateNode = o;
            e: switch ((at(o, s, l), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && gn(t);
          }
        }
        return (
          Ue(t),
          nc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && gn(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(c(166));
          if (((e = ge.current), Ka(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (s = et),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  l = s.memoizedProps;
              }
            (e[Ie] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                wm(e.nodeValue, n)
              )),
              e || kn(t, !0);
          } else (e = Us(e).createTextNode(l)), (e[Ie] = t), (t.stateNode = e);
        }
        return Ue(t), null;
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = Ka(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(c(557));
              e[Ie] = t;
            } else
              ma(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ue(t), (e = !1);
          } else
            (n = fo()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0);
          if (!e) return t.flags & 256 ? (St(t), t) : (St(t), null);
          if ((t.flags & 128) !== 0) throw Error(c(558));
        }
        return Ue(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((s = Ka(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(c(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(c(317));
              s[Ie] = t;
            } else
              ma(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ue(t), (s = !1);
          } else
            (s = fo()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = s),
              (s = !0);
          if (!s) return t.flags & 256 ? (St(t), t) : (St(t), null);
        }
        return (
          St(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = l !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((l = t.child),
                (s = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (s = l.alternate.memoizedState.cachePool.pool),
                (o = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (o = l.memoizedState.cachePool.pool),
                o !== s && (l.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              ws(t, t.updateQueue),
              Ue(t),
              null)
        );
      case 4:
        return Re(), e === null && Ac(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return dn(t.type), Ue(t), null;
      case 19:
        if ((B(Ge), (l = t.memoizedState), l === null)) return Ue(t), null;
        if (((s = (t.flags & 128) !== 0), (o = l.rendering), o === null))
          if (s) $l(l, !1);
          else {
            if (Be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = os(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      $l(l, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      ws(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    If(n, e), (n = n.sibling);
                  return (
                    F(Ge, (Ge.current & 1) | 2),
                    Ae && un(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              gt() > js &&
              ((t.flags |= 128), (s = !0), $l(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = os(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ws(t, e),
                $l(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !o.alternate &&
                  !Ae)
              )
                return Ue(t), null;
            } else
              2 * gt() - l.renderingStartTime > js &&
                n !== 536870912 &&
                ((t.flags |= 128), (s = !0), $l(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((e = l.last),
              e !== null ? (e.sibling = o) : (t.child = o),
              (l.last = o));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = gt()),
            (e.sibling = null),
            (n = Ge.current),
            F(Ge, s ? (n & 1) | 2 : n & 1),
            Ae && un(t, l.treeForkCount),
            e)
          : (Ue(t), null);
      case 22:
      case 23:
        return (
          St(t),
          To(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ue(t),
          (n = t.updateQueue),
          n !== null && ws(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && B(ya),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          dn(Ye),
          Ue(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function gv(e, t) {
    switch ((co(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          dn(Ye),
          Re(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ft(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((St(t), t.alternate === null)) throw Error(c(340));
          ma();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (St(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          ma();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return B(Ge), null;
      case 4:
        return Re(), null;
      case 10:
        return dn(t.type), null;
      case 22:
      case 23:
        return (
          St(t),
          To(),
          e !== null && B(ya),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return dn(Ye), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jh(e, t) {
    switch ((co(t), t.tag)) {
      case 3:
        dn(Ye), Re();
        break;
      case 26:
      case 27:
      case 5:
        Ft(t);
        break;
      case 4:
        Re();
        break;
      case 31:
        t.memoizedState !== null && St(t);
        break;
      case 13:
        St(t);
        break;
      case 19:
        B(Ge);
        break;
      case 10:
        dn(t.type);
        break;
      case 22:
      case 23:
        St(t), To(), e !== null && B(ya);
        break;
      case 24:
        dn(Ye);
    }
  }
  function Wl(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var s = l.next;
        n = s;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var o = n.create,
              d = n.inst;
            (l = o()), (d.destroy = l);
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (g) {
      Oe(t, t.return, g);
    }
  }
  function Bn(e, t, n) {
    try {
      var l = t.updateQueue,
        s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var o = s.next;
        l = o;
        do {
          if ((l.tag & e) === e) {
            var d = l.inst,
              g = d.destroy;
            if (g !== void 0) {
              (d.destroy = void 0), (s = t);
              var S = n,
                _ = g;
              try {
                _();
              } catch (H) {
                Oe(s, S, H);
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (H) {
      Oe(t, t.return, H);
    }
  }
  function Nh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        yd(t, n);
      } catch (l) {
        Oe(e, e.return, l);
      }
    }
  }
  function Ch(e, t, n) {
    (n.props = Sa(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      Oe(e, t, l);
    }
  }
  function Il(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (s) {
      Oe(e, t, s);
    }
  }
  function Wt(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (s) {
          Oe(e, t, s);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Oe(e, t, s);
        }
      else n.current = null;
  }
  function Oh(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (s) {
      Oe(e, e.return, s);
    }
  }
  function ac(e, t, n) {
    try {
      var l = e.stateNode;
      Hv(l, e.type, n, t), (l[rt] = t);
    } catch (s) {
      Oe(e, e.return, s);
    }
  }
  function Rh(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Kn(e.type)) ||
      e.tag === 4
    );
  }
  function lc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Kn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ic(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = rn));
    else if (
      l !== 4 &&
      (l === 27 && Kn(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (ic(e, t, n), e = e.sibling; e !== null; )
        ic(e, t, n), (e = e.sibling);
  }
  function Ss(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && Kn(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (Ss(e, t, n), e = e.sibling; e !== null; )
        Ss(e, t, n), (e = e.sibling);
  }
  function Mh(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      at(t, l, n), (t[Ie] = e), (t[rt] = n);
    } catch (o) {
      Oe(e, e.return, o);
    }
  }
  var yn = !1,
    Ke = !1,
    sc = !1,
    kh = typeof WeakSet == "function" ? WeakSet : Set,
    We = null;
  function yv(e, t) {
    if (((e = e.containerInfo), (Nc = Ys), (e = Qf(e)), Wr(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var s = l.anchorOffset,
              o = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              g = -1,
              S = -1,
              _ = 0,
              H = 0,
              V = e,
              z = null;
            t: for (;;) {
              for (
                var D;
                V !== n || (s !== 0 && V.nodeType !== 3) || (g = d + s),
                  V !== o || (l !== 0 && V.nodeType !== 3) || (S = d + l),
                  V.nodeType === 3 && (d += V.nodeValue.length),
                  (D = V.firstChild) !== null;

              )
                (z = V), (V = D);
              for (;;) {
                if (V === e) break t;
                if (
                  (z === n && ++_ === s && (g = d),
                  z === o && ++H === l && (S = d),
                  (D = V.nextSibling) !== null)
                )
                  break;
                (V = z), (z = V.parentNode);
              }
              V = D;
            }
            n = g === -1 || S === -1 ? null : { start: g, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Cc = { focusedElem: e, selectionRange: n }, Ys = !1, We = t;
      We !== null;

    )
      if (
        ((t = We), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (We = e);
      else
        for (; We !== null; ) {
          switch (((t = We), (o = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  (s = e[n]), (s.ref.impl = s.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && o !== null) {
                (e = void 0),
                  (n = t),
                  (s = o.memoizedProps),
                  (o = o.memoizedState),
                  (l = n.stateNode);
                try {
                  var ee = Sa(n.type, s);
                  (e = l.getSnapshotBeforeUpdate(ee, o)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (oe) {
                  Oe(n, n.return, oe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Mc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Mc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (We = e);
            break;
          }
          We = t.return;
        }
  }
  function _h(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        xn(e, n), l & 4 && Wl(5, n);
        break;
      case 1:
        if ((xn(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (d) {
              Oe(n, n.return, d);
            }
          else {
            var s = Sa(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Oe(n, n.return, d);
            }
          }
        l & 64 && Nh(n), l & 512 && Il(n, n.return);
        break;
      case 3:
        if ((xn(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            yd(e, t);
          } catch (d) {
            Oe(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Mh(n);
      case 26:
      case 5:
        xn(e, n), t === null && l & 4 && Oh(n), l & 512 && Il(n, n.return);
        break;
      case 12:
        xn(e, n);
        break;
      case 31:
        xn(e, n), l & 4 && Uh(e, n);
        break;
      case 13:
        xn(e, n),
          l & 4 && Lh(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = jv.bind(null, n)), Kv(e, n))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || yn), !l)) {
          (t = (t !== null && t.memoizedState !== null) || Ke), (s = yn);
          var o = Ke;
          (yn = l),
            (Ke = t) && !o ? bn(e, n, (n.subtreeFlags & 8772) !== 0) : xn(e, n),
            (yn = s),
            (Ke = o);
        }
        break;
      case 30:
        break;
      default:
        xn(e, n);
    }
  }
  function zh(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), zh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Dr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Le = null,
    ct = !1;
  function vn(e, t, n) {
    for (n = n.child; n !== null; ) Dh(e, t, n), (n = n.sibling);
  }
  function Dh(e, t, n) {
    if (yt && typeof yt.onCommitFiberUnmount == "function")
      try {
        yt.onCommitFiberUnmount(El, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Ke || Wt(n, t),
          vn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Ke || Wt(n, t);
        var l = Le,
          s = ct;
        Kn(n.type) && ((Le = n.stateNode), (ct = !1)),
          vn(e, t, n),
          oi(n.stateNode),
          (Le = l),
          (ct = s);
        break;
      case 5:
        Ke || Wt(n, t);
      case 6:
        if (
          ((l = Le),
          (s = ct),
          (Le = null),
          vn(e, t, n),
          (Le = l),
          (ct = s),
          Le !== null)
        )
          if (ct)
            try {
              (Le.nodeType === 9
                ? Le.body
                : Le.nodeName === "HTML"
                ? Le.ownerDocument.body
                : Le
              ).removeChild(n.stateNode);
            } catch (o) {
              Oe(n, t, o);
            }
          else
            try {
              Le.removeChild(n.stateNode);
            } catch (o) {
              Oe(n, t, o);
            }
        break;
      case 18:
        Le !== null &&
          (ct
            ? ((e = Le),
              Nm(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                n.stateNode
              ),
              hl(e))
            : Nm(Le, n.stateNode));
        break;
      case 4:
        (l = Le),
          (s = ct),
          (Le = n.stateNode.containerInfo),
          (ct = !0),
          vn(e, t, n),
          (Le = l),
          (ct = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Bn(2, n, t), Ke || Bn(4, n, t), vn(e, t, n);
        break;
      case 1:
        Ke ||
          (Wt(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && Ch(n, t, l)),
          vn(e, t, n);
        break;
      case 21:
        vn(e, t, n);
        break;
      case 22:
        (Ke = (l = Ke) || n.memoizedState !== null), vn(e, t, n), (Ke = l);
        break;
      default:
        vn(e, t, n);
    }
  }
  function Uh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        hl(e);
      } catch (n) {
        Oe(t, t.return, n);
      }
    }
  }
  function Lh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        hl(e);
      } catch (n) {
        Oe(t, t.return, n);
      }
  }
  function vv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new kh()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new kh()),
          t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Es(e, t) {
    var n = vv(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var s = Nv.bind(null, e, l);
        l.then(s, s);
      }
    });
  }
  function ut(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var s = n[l],
          o = e,
          d = t,
          g = d;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Kn(g.type)) {
                (Le = g.stateNode), (ct = !1);
                break e;
              }
              break;
            case 5:
              (Le = g.stateNode), (ct = !1);
              break e;
            case 3:
            case 4:
              (Le = g.stateNode.containerInfo), (ct = !0);
              break e;
          }
          g = g.return;
        }
        if (Le === null) throw Error(c(160));
        Dh(o, d, s),
          (Le = null),
          (ct = !1),
          (o = s.alternate),
          o !== null && (o.return = null),
          (s.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) Hh(t, e), (t = t.sibling);
  }
  var Yt = null;
  function Hh(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ut(t, e),
          ft(e),
          l & 4 && (Bn(3, e, e.return), Wl(3, e), Bn(5, e, e.return));
        break;
      case 1:
        ut(t, e),
          ft(e),
          l & 512 && (Ke || n === null || Wt(n, n.return)),
          l & 64 &&
            yn &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var s = Yt;
        if (
          (ut(t, e),
          ft(e),
          l & 512 && (Ke || n === null || Wt(n, n.return)),
          l & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (n = e.memoizedProps),
                    (s = s.ownerDocument || s);
                  t: switch (l) {
                    case "title":
                      (o = s.getElementsByTagName("title")[0]),
                        (!o ||
                          o[jl] ||
                          o[Ie] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = s.createElement(l)),
                          s.head.insertBefore(
                            o,
                            s.querySelector("head > title")
                          )),
                        at(o, l, n),
                        (o[Ie] = e),
                        $e(o),
                        (l = o);
                      break e;
                    case "link":
                      var d = Hm("link", "href", s).get(l + (n.href || ""));
                      if (d) {
                        for (var g = 0; g < d.length; g++)
                          if (
                            ((o = d[g]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      (o = s.createElement(l)),
                        at(o, l, n),
                        s.head.appendChild(o);
                      break;
                    case "meta":
                      if (
                        (d = Hm("meta", "content", s).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (g = 0; g < d.length; g++)
                          if (
                            ((o = d[g]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      (o = s.createElement(l)),
                        at(o, l, n),
                        s.head.appendChild(o);
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  (o[Ie] = e), $e(o), (l = o);
                }
                e.stateNode = l;
              } else Bm(s, e.type, e.stateNode);
            else e.stateNode = Lm(s, l, e.memoizedProps);
          else
            o !== l
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                l === null
                  ? Bm(s, e.type, e.stateNode)
                  : Lm(s, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                ac(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        ut(t, e),
          ft(e),
          l & 512 && (Ke || n === null || Wt(n, n.return)),
          n !== null && l & 4 && ac(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (ut(t, e),
          ft(e),
          l & 512 && (Ke || n === null || Wt(n, n.return)),
          e.flags & 32)
        ) {
          s = e.stateNode;
          try {
            Ua(s, "");
          } catch (ee) {
            Oe(e, e.return, ee);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((s = e.memoizedProps), ac(e, s, n !== null ? n.memoizedProps : s)),
          l & 1024 && (sc = !0);
        break;
      case 6:
        if ((ut(t, e), ft(e), l & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          (l = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = l;
          } catch (ee) {
            Oe(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (
          ((Bs = null),
          (s = Yt),
          (Yt = Ls(t.containerInfo)),
          ut(t, e),
          (Yt = s),
          ft(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            hl(t.containerInfo);
          } catch (ee) {
            Oe(e, e.return, ee);
          }
        sc && ((sc = !1), Bh(e));
        break;
      case 4:
        (l = Yt),
          (Yt = Ls(e.stateNode.containerInfo)),
          ut(t, e),
          ft(e),
          (Yt = l);
        break;
      case 12:
        ut(t, e), ft(e);
        break;
      case 31:
        ut(t, e),
          ft(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Es(e, l)));
        break;
      case 13:
        ut(t, e),
          ft(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Ts = gt()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Es(e, l)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          _ = yn,
          H = Ke;
        if (
          ((yn = _ || s),
          (Ke = H || S),
          ut(t, e),
          (Ke = H),
          (yn = _),
          ft(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = s ? t._visibility & -2 : t._visibility | 1,
              s && (n === null || S || yn || Ke || Ea(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t;
                try {
                  if (((o = S.stateNode), s))
                    (d = o.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none");
                  else {
                    g = S.stateNode;
                    var V = S.memoizedProps.style,
                      z =
                        V != null && V.hasOwnProperty("display")
                          ? V.display
                          : null;
                    g.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (ee) {
                  Oe(S, S.return, ee);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (ee) {
                  Oe(S, S.return, ee);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                S = t;
                try {
                  var D = S.stateNode;
                  s ? Cm(D, !0) : Cm(S.stateNode, !1);
                } catch (ee) {
                  Oe(S, S.return, ee);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Es(e, n))));
        break;
      case 19:
        ut(t, e),
          ft(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Es(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ut(t, e), ft(e);
    }
  }
  function ft(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Rh(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              o = lc(e);
            Ss(e, o, s);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Ua(d, ""), (n.flags &= -33));
            var g = lc(e);
            Ss(e, g, d);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              _ = lc(e);
            ic(e, _, S);
            break;
          default:
            throw Error(c(161));
        }
      } catch (H) {
        Oe(e, e.return, H);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Bh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Bh(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function xn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) _h(e, t.alternate, t), (t = t.sibling);
  }
  function Ea(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Bn(4, t, t.return), Ea(t);
          break;
        case 1:
          Wt(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Ch(t, t.return, n),
            Ea(t);
          break;
        case 27:
          oi(t.stateNode);
        case 26:
        case 5:
          Wt(t, t.return), Ea(t);
          break;
        case 22:
          t.memoizedState === null && Ea(t);
          break;
        case 30:
          Ea(t);
          break;
        default:
          Ea(t);
      }
      e = e.sibling;
    }
  }
  function bn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        s = e,
        o = t,
        d = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          bn(s, o, n), Wl(4, o);
          break;
        case 1:
          if (
            (bn(s, o, n),
            (l = o),
            (s = l.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (_) {
              Oe(l, l.return, _);
            }
          if (((l = o), (s = l.updateQueue), s !== null)) {
            var g = l.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  gd(S[s], g);
            } catch (_) {
              Oe(l, l.return, _);
            }
          }
          n && d & 64 && Nh(o), Il(o, o.return);
          break;
        case 27:
          Mh(o);
        case 26:
        case 5:
          bn(s, o, n), n && l === null && d & 4 && Oh(o), Il(o, o.return);
          break;
        case 12:
          bn(s, o, n);
          break;
        case 31:
          bn(s, o, n), n && d & 4 && Uh(s, o);
          break;
        case 13:
          bn(s, o, n), n && d & 4 && Lh(s, o);
          break;
        case 22:
          o.memoizedState === null && bn(s, o, n), Il(o, o.return);
          break;
        case 30:
          break;
        default:
          bn(s, o, n);
      }
      t = t.sibling;
    }
  }
  function rc(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Bl(n));
  }
  function oc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Bl(e));
  }
  function Qt(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) qh(e, t, n, l), (t = t.sibling);
  }
  function qh(e, t, n, l) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Qt(e, t, n, l), s & 2048 && Wl(9, t);
        break;
      case 1:
        Qt(e, t, n, l);
        break;
      case 3:
        Qt(e, t, n, l),
          s & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Bl(e)));
        break;
      case 12:
        if (s & 2048) {
          Qt(e, t, n, l), (e = t.stateNode);
          try {
            var o = t.memoizedProps,
              d = o.id,
              g = o.onPostCommit;
            typeof g == "function" &&
              g(
                d,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (S) {
            Oe(t, t.return, S);
          }
        } else Qt(e, t, n, l);
        break;
      case 31:
        Qt(e, t, n, l);
        break;
      case 13:
        Qt(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        (o = t.stateNode),
          (d = t.alternate),
          t.memoizedState !== null
            ? o._visibility & 2
              ? Qt(e, t, n, l)
              : ei(e, t)
            : o._visibility & 2
            ? Qt(e, t, n, l)
            : ((o._visibility |= 2),
              nl(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && rc(d, t);
        break;
      case 24:
        Qt(e, t, n, l), s & 2048 && oc(t.alternate, t);
        break;
      default:
        Qt(e, t, n, l);
    }
  }
  function nl(e, t, n, l, s) {
    for (
      s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var o = e,
        d = t,
        g = n,
        S = l,
        _ = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          nl(o, d, g, S, s), Wl(8, d);
          break;
        case 23:
          break;
        case 22:
          var H = d.stateNode;
          d.memoizedState !== null
            ? H._visibility & 2
              ? nl(o, d, g, S, s)
              : ei(o, d)
            : ((H._visibility |= 2), nl(o, d, g, S, s)),
            s && _ & 2048 && rc(d.alternate, d);
          break;
        case 24:
          nl(o, d, g, S, s), s && _ & 2048 && oc(d.alternate, d);
          break;
        default:
          nl(o, d, g, S, s);
      }
      t = t.sibling;
    }
  }
  function ei(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          s = l.flags;
        switch (l.tag) {
          case 22:
            ei(n, l), s & 2048 && rc(l.alternate, l);
            break;
          case 24:
            ei(n, l), s & 2048 && oc(l.alternate, l);
            break;
          default:
            ei(n, l);
        }
        t = t.sibling;
      }
  }
  var ti = 8192;
  function al(e, t, n) {
    if (e.subtreeFlags & ti)
      for (e = e.child; e !== null; ) Gh(e, t, n), (e = e.sibling);
  }
  function Gh(e, t, n) {
    switch (e.tag) {
      case 26:
        al(e, t, n),
          e.flags & ti &&
            e.memoizedState !== null &&
            lx(n, Yt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        al(e, t, n);
        break;
      case 3:
      case 4:
        var l = Yt;
        (Yt = Ls(e.stateNode.containerInfo)), al(e, t, n), (Yt = l);
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = ti), (ti = 16777216), al(e, t, n), (ti = l))
            : al(e, t, n));
        break;
      default:
        al(e, t, n);
    }
  }
  function Vh(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function ni(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (We = l), Qh(l, e);
        }
      Vh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Yh(e), (e = e.sibling);
  }
  function Yh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ni(e), e.flags & 2048 && Bn(9, e, e.return);
        break;
      case 3:
        ni(e);
        break;
      case 12:
        ni(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), As(e))
          : ni(e);
        break;
      default:
        ni(e);
    }
  }
  function As(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (We = l), Qh(l, e);
        }
      Vh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Bn(8, t, t.return), As(t);
          break;
        case 22:
          (n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), As(t));
          break;
        default:
          As(t);
      }
      e = e.sibling;
    }
  }
  function Qh(e, t) {
    for (; We !== null; ) {
      var n = We;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Bn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Bl(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (We = l);
      else
        e: for (n = e; We !== null; ) {
          l = We;
          var s = l.sibling,
            o = l.return;
          if ((zh(l), l === n)) {
            We = null;
            break e;
          }
          if (s !== null) {
            (s.return = o), (We = s);
            break e;
          }
          We = o;
        }
    }
  }
  var xv = {
      getCacheForType: function (e) {
        var t = tt(Ye),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
      cacheSignal: function () {
        return tt(Ye).controller.signal;
      },
    },
    bv = typeof WeakMap == "function" ? WeakMap : Map,
    Ne = 0,
    ze = null,
    be = null,
    Se = 0,
    Ce = 0,
    Et = null,
    qn = !1,
    ll = !1,
    cc = !1,
    wn = 0,
    Be = 0,
    Gn = 0,
    Aa = 0,
    uc = 0,
    At = 0,
    il = 0,
    ai = null,
    dt = null,
    fc = !1,
    Ts = 0,
    Xh = 0,
    js = 1 / 0,
    Ns = null,
    Vn = null,
    Ze = 0,
    Yn = null,
    sl = null,
    Sn = 0,
    dc = 0,
    hc = null,
    Kh = null,
    li = 0,
    mc = null;
  function Tt() {
    return (Ne & 2) !== 0 && Se !== 0 ? Se & -Se : R.T !== null ? bc() : of();
  }
  function Zh() {
    if (At === 0)
      if ((Se & 536870912) === 0 || Ae) {
        var e = Di;
        (Di <<= 1), (Di & 3932160) === 0 && (Di = 262144), (At = e);
      } else At = 536870912;
    return (e = wt.current), e !== null && (e.flags |= 32), At;
  }
  function ht(e, t, n) {
    ((e === ze && (Ce === 2 || Ce === 9)) || e.cancelPendingCommit !== null) &&
      (rl(e, 0), Qn(e, Se, At, !1)),
      Tl(e, n),
      ((Ne & 2) === 0 || e !== ze) &&
        (e === ze &&
          ((Ne & 2) === 0 && (Aa |= n), Be === 4 && Qn(e, Se, At, !1)),
        It(e));
  }
  function Fh(e, t, n) {
    if ((Ne & 6) !== 0) throw Error(c(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Al(e, t),
      s = l ? Ev(e, t) : gc(e, t, !0),
      o = l;
    do {
      if (s === 0) {
        ll && !l && Qn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), o && !wv(n))) {
          (s = gc(e, t, !1)), (o = !1);
          continue;
        }
        if (s === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var d = 0;
          else
            (d = e.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0);
          if (d !== 0) {
            t = d;
            e: {
              var g = e;
              s = ai;
              var S = g.current.memoizedState.isDehydrated;
              if ((S && (rl(g, d).flags |= 256), (d = gc(g, d, !1)), d !== 2)) {
                if (cc && !S) {
                  (g.errorRecoveryDisabledLanes |= o), (Aa |= o), (s = 4);
                  break e;
                }
                (o = dt),
                  (dt = s),
                  o !== null && (dt === null ? (dt = o) : dt.push.apply(dt, o));
              }
              s = d;
            }
            if (((o = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          rl(e, 0), Qn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (o = s), o)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Qn(l, t, At, !qn);
              break e;
            case 2:
              dt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && ((s = Ts + 300 - gt()), 10 < s)) {
            if ((Qn(l, t, At, !qn), Li(l, 0, !0) !== 0)) break e;
            (Sn = t),
              (l.timeoutHandle = Tm(
                Jh.bind(
                  null,
                  l,
                  n,
                  dt,
                  Ns,
                  fc,
                  t,
                  At,
                  Aa,
                  il,
                  qn,
                  o,
                  "Throttled",
                  -0,
                  0
                ),
                s
              ));
            break e;
          }
          Jh(l, n, dt, Ns, fc, t, At, Aa, il, qn, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    It(e);
  }
  function Jh(e, t, n, l, s, o, d, g, S, _, H, V, z, D) {
    if (
      ((e.timeoutHandle = -1),
      (V = t.subtreeFlags),
      V & 8192 || (V & 16785408) === 16785408)
    ) {
      (V = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: rn,
      }),
        Gh(t, o, V);
      var ee =
        (o & 62914560) === o ? Ts - gt() : (o & 4194048) === o ? Xh - gt() : 0;
      if (((ee = ix(V, ee)), ee !== null)) {
        (Sn = o),
          (e.cancelPendingCommit = ee(
            am.bind(null, e, t, o, n, l, s, d, g, S, H, V, null, z, D)
          )),
          Qn(e, o, d, !_);
        return;
      }
    }
    am(e, t, o, n, l, s, d, g, S);
  }
  function wv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var s = n[l],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!xt(o(), s)) return !1;
          } catch {
            return !1;
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
  function Qn(e, t, n, l) {
    (t &= ~uc),
      (t &= ~Aa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var s = t; 0 < s; ) {
      var o = 31 - vt(s),
        d = 1 << o;
      (l[o] = -1), (s &= ~d);
    }
    n !== 0 && lf(e, n, t);
  }
  function Cs() {
    return (Ne & 6) === 0 ? (ii(0), !1) : !0;
  }
  function pc() {
    if (be !== null) {
      if (Ce === 0) var e = be.return;
      else (e = be), (fn = pa = null), Mo(e), ($a = null), (Gl = 0), (e = be);
      for (; e !== null; ) jh(e.alternate, e), (e = e.return);
      be = null;
    }
  }
  function rl(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), Gv(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Sn = 0),
      pc(),
      (ze = e),
      (be = n = cn(e.current, null)),
      (Se = t),
      (Ce = 0),
      (Et = null),
      (qn = !1),
      (ll = Al(e, t)),
      (cc = !1),
      (il = At = uc = Aa = Gn = Be = 0),
      (dt = ai = null),
      (fc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var s = 31 - vt(l),
          o = 1 << s;
        (t |= e[s]), (l &= ~o);
      }
    return (wn = t), Ji(), n;
  }
  function Ph(e, t) {
    (ye = null),
      (R.H = Jl),
      t === Pa || t === as
        ? ((t = dd()), (Ce = 3))
        : t === xo
        ? ((t = dd()), (Ce = 4))
        : (Ce =
            t === Zo
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (Et = t),
      be === null && ((Be = 1), ys(e, _t(t, e.current)));
  }
  function $h() {
    var e = wt.current;
    return e === null
      ? !0
      : (Se & 4194048) === Se
      ? Lt === null
      : (Se & 62914560) === Se || (Se & 536870912) !== 0
      ? e === Lt
      : !1;
  }
  function Wh() {
    var e = R.H;
    return (R.H = Jl), e === null ? Jl : e;
  }
  function Ih() {
    var e = R.A;
    return (R.A = xv), e;
  }
  function Os() {
    (Be = 4),
      qn || ((Se & 4194048) !== Se && wt.current !== null) || (ll = !0),
      ((Gn & 134217727) === 0 && (Aa & 134217727) === 0) ||
        ze === null ||
        Qn(ze, Se, At, !1);
  }
  function gc(e, t, n) {
    var l = Ne;
    Ne |= 2;
    var s = Wh(),
      o = Ih();
    (ze !== e || Se !== t) && ((Ns = null), rl(e, t)), (t = !1);
    var d = Be;
    e: do
      try {
        if (Ce !== 0 && be !== null) {
          var g = be,
            S = Et;
          switch (Ce) {
            case 8:
              pc(), (d = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              wt.current === null && (t = !0);
              var _ = Ce;
              if (((Ce = 0), (Et = null), ol(e, g, S, _), n && ll)) {
                d = 0;
                break e;
              }
              break;
            default:
              (_ = Ce), (Ce = 0), (Et = null), ol(e, g, S, _);
          }
        }
        Sv(), (d = Be);
        break;
      } catch (H) {
        Ph(e, H);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (fn = pa = null),
      (Ne = l),
      (R.H = s),
      (R.A = o),
      be === null && ((ze = null), (Se = 0), Ji()),
      d
    );
  }
  function Sv() {
    for (; be !== null; ) em(be);
  }
  function Ev(e, t) {
    var n = Ne;
    Ne |= 2;
    var l = Wh(),
      s = Ih();
    ze !== e || Se !== t
      ? ((Ns = null), (js = gt() + 500), rl(e, t))
      : (ll = Al(e, t));
    e: do
      try {
        if (Ce !== 0 && be !== null) {
          t = be;
          var o = Et;
          t: switch (Ce) {
            case 1:
              (Ce = 0), (Et = null), ol(e, t, o, 1);
              break;
            case 2:
            case 9:
              if (ud(o)) {
                (Ce = 0), (Et = null), tm(t);
                break;
              }
              (t = function () {
                (Ce !== 2 && Ce !== 9) || ze !== e || (Ce = 7), It(e);
              }),
                o.then(t, t);
              break e;
            case 3:
              Ce = 7;
              break e;
            case 4:
              Ce = 5;
              break e;
            case 7:
              ud(o)
                ? ((Ce = 0), (Et = null), tm(t))
                : ((Ce = 0), (Et = null), ol(e, t, o, 7));
              break;
            case 5:
              var d = null;
              switch (be.tag) {
                case 26:
                  d = be.memoizedState;
                case 5:
                case 27:
                  var g = be;
                  if (d ? qm(d) : g.stateNode.complete) {
                    (Ce = 0), (Et = null);
                    var S = g.sibling;
                    if (S !== null) be = S;
                    else {
                      var _ = g.return;
                      _ !== null ? ((be = _), Rs(_)) : (be = null);
                    }
                    break t;
                  }
              }
              (Ce = 0), (Et = null), ol(e, t, o, 5);
              break;
            case 6:
              (Ce = 0), (Et = null), ol(e, t, o, 6);
              break;
            case 8:
              pc(), (Be = 6);
              break e;
            default:
              throw Error(c(462));
          }
        }
        Av();
        break;
      } catch (H) {
        Ph(e, H);
      }
    while (!0);
    return (
      (fn = pa = null),
      (R.H = l),
      (R.A = s),
      (Ne = n),
      be !== null ? 0 : ((ze = null), (Se = 0), Ji(), Be)
    );
  }
  function Av() {
    for (; be !== null && !Zy(); ) em(be);
  }
  function em(e) {
    var t = Ah(e.alternate, e, wn);
    (e.memoizedProps = e.pendingProps), t === null ? Rs(e) : (be = t);
  }
  function tm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = vh(n, t, t.pendingProps, t.type, void 0, Se);
        break;
      case 11:
        t = vh(n, t, t.pendingProps, t.type.render, t.ref, Se);
        break;
      case 5:
        Mo(t);
      default:
        jh(n, t), (t = be = If(t, wn)), (t = Ah(n, t, wn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Rs(e) : (be = t);
  }
  function ol(e, t, n, l) {
    (fn = pa = null), Mo(t), ($a = null), (Gl = 0);
    var s = t.return;
    try {
      if (dv(e, s, t, n, Se)) {
        (Be = 1), ys(e, _t(n, e.current)), (be = null);
        return;
      }
    } catch (o) {
      if (s !== null) throw ((be = s), o);
      (Be = 1), ys(e, _t(n, e.current)), (be = null);
      return;
    }
    t.flags & 32768
      ? (Ae || l === 1
          ? (e = !0)
          : ll || (Se & 536870912) !== 0
          ? (e = !1)
          : ((qn = e = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = wt.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        nm(t, e))
      : Rs(t);
  }
  function Rs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        nm(t, qn);
        return;
      }
      e = t.return;
      var n = pv(t.alternate, t, wn);
      if (n !== null) {
        be = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function nm(e, t) {
    do {
      var n = gv(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        be = e;
        return;
      }
      be = e = n;
    } while (e !== null);
    (Be = 6), (be = null);
  }
  function am(e, t, n, l, s, o, d, g, S) {
    e.cancelPendingCommit = null;
    do Ms();
    while (Ze !== 0);
    if ((Ne & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (
        ((o = t.lanes | t.childLanes),
        (o |= ao),
        a0(e, n, o, d, g, S),
        e === ze && ((be = ze = null), (Se = 0)),
        (sl = t),
        (Yn = e),
        (Sn = n),
        (dc = o),
        (hc = s),
        (Kh = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Cv(_i, function () {
              return om(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = R.T), (R.T = null), (s = X.p), (X.p = 2), (d = Ne), (Ne |= 4);
        try {
          yv(e, t, n);
        } finally {
          (Ne = d), (X.p = s), (R.T = l);
        }
      }
      (Ze = 1), lm(), im(), sm();
    }
  }
  function lm() {
    if (Ze === 1) {
      Ze = 0;
      var e = Yn,
        t = sl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        (n = R.T), (R.T = null);
        var l = X.p;
        X.p = 2;
        var s = Ne;
        Ne |= 4;
        try {
          Hh(t, e);
          var o = Cc,
            d = Qf(e.containerInfo),
            g = o.focusedElem,
            S = o.selectionRange;
          if (
            d !== g &&
            g &&
            g.ownerDocument &&
            Yf(g.ownerDocument.documentElement, g)
          ) {
            if (S !== null && Wr(g)) {
              var _ = S.start,
                H = S.end;
              if ((H === void 0 && (H = _), "selectionStart" in g))
                (g.selectionStart = _),
                  (g.selectionEnd = Math.min(H, g.value.length));
              else {
                var V = g.ownerDocument || document,
                  z = (V && V.defaultView) || window;
                if (z.getSelection) {
                  var D = z.getSelection(),
                    ee = g.textContent.length,
                    oe = Math.min(S.start, ee),
                    _e = S.end === void 0 ? oe : Math.min(S.end, ee);
                  !D.extend && oe > _e && ((d = _e), (_e = oe), (oe = d));
                  var C = Vf(g, oe),
                    T = Vf(g, _e);
                  if (
                    C &&
                    T &&
                    (D.rangeCount !== 1 ||
                      D.anchorNode !== C.node ||
                      D.anchorOffset !== C.offset ||
                      D.focusNode !== T.node ||
                      D.focusOffset !== T.offset)
                  ) {
                    var M = V.createRange();
                    M.setStart(C.node, C.offset),
                      D.removeAllRanges(),
                      oe > _e
                        ? (D.addRange(M), D.extend(T.node, T.offset))
                        : (M.setEnd(T.node, T.offset), D.addRange(M));
                  }
                }
              }
            }
            for (V = [], D = g; (D = D.parentNode); )
              D.nodeType === 1 &&
                V.push({ element: D, left: D.scrollLeft, top: D.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < V.length;
              g++
            ) {
              var q = V[g];
              (q.element.scrollLeft = q.left), (q.element.scrollTop = q.top);
            }
          }
          (Ys = !!Nc), (Cc = Nc = null);
        } finally {
          (Ne = s), (X.p = l), (R.T = n);
        }
      }
      (e.current = t), (Ze = 2);
    }
  }
  function im() {
    if (Ze === 2) {
      Ze = 0;
      var e = Yn,
        t = sl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        (n = R.T), (R.T = null);
        var l = X.p;
        X.p = 2;
        var s = Ne;
        Ne |= 4;
        try {
          _h(e, t.alternate, t);
        } finally {
          (Ne = s), (X.p = l), (R.T = n);
        }
      }
      Ze = 3;
    }
  }
  function sm() {
    if (Ze === 4 || Ze === 3) {
      (Ze = 0), Fy();
      var e = Yn,
        t = sl,
        n = Sn,
        l = Kh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ze = 5)
        : ((Ze = 0), (sl = Yn = null), rm(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (
        (s === 0 && (Vn = null),
        _r(n),
        (t = t.stateNode),
        yt && typeof yt.onCommitFiberRoot == "function")
      )
        try {
          yt.onCommitFiberRoot(El, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (t = R.T), (s = X.p), (X.p = 2), (R.T = null);
        try {
          for (var o = e.onRecoverableError, d = 0; d < l.length; d++) {
            var g = l[d];
            o(g.value, { componentStack: g.stack });
          }
        } finally {
          (R.T = t), (X.p = s);
        }
      }
      (Sn & 3) !== 0 && Ms(),
        It(e),
        (s = e.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0
          ? e === mc
            ? li++
            : ((li = 0), (mc = e))
          : (li = 0),
        ii(0);
    }
  }
  function rm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Bl(t)));
  }
  function Ms() {
    return lm(), im(), sm(), om();
  }
  function om() {
    if (Ze !== 5) return !1;
    var e = Yn,
      t = dc;
    dc = 0;
    var n = _r(Sn),
      l = R.T,
      s = X.p;
    try {
      (X.p = 32 > n ? 32 : n), (R.T = null), (n = hc), (hc = null);
      var o = Yn,
        d = Sn;
      if (((Ze = 0), (sl = Yn = null), (Sn = 0), (Ne & 6) !== 0))
        throw Error(c(331));
      var g = Ne;
      if (
        ((Ne |= 4),
        Yh(o.current),
        qh(o, o.current, d, n),
        (Ne = g),
        ii(0, !1),
        yt && typeof yt.onPostCommitFiberRoot == "function")
      )
        try {
          yt.onPostCommitFiberRoot(El, o);
        } catch {}
      return !0;
    } finally {
      (X.p = s), (R.T = l), rm(e, t);
    }
  }
  function cm(e, t, n) {
    (t = _t(n, t)),
      (t = Ko(e.stateNode, t, 2)),
      (e = Un(e, t, 2)),
      e !== null && (Tl(e, 2), It(e));
  }
  function Oe(e, t, n) {
    if (e.tag === 3) cm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          cm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Vn === null || !Vn.has(l)))
          ) {
            (e = _t(n, e)),
              (n = uh(2)),
              (l = Un(t, n, 2)),
              l !== null && (fh(n, l, t, e), Tl(l, 2), It(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function yc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new bv();
      var s = new Set();
      l.set(t, s);
    } else (s = l.get(t)), s === void 0 && ((s = new Set()), l.set(t, s));
    s.has(n) ||
      ((cc = !0), s.add(n), (e = Tv.bind(null, e, t, n)), t.then(e, e));
  }
  function Tv(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      ze === e &&
        (Se & n) === n &&
        (Be === 4 || (Be === 3 && (Se & 62914560) === Se && 300 > gt() - Ts)
          ? (Ne & 2) === 0 && rl(e, 0)
          : (uc |= n),
        il === Se && (il = 0)),
      It(e);
  }
  function um(e, t) {
    t === 0 && (t = af()), (e = da(e, t)), e !== null && (Tl(e, t), It(e));
  }
  function jv(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), um(e, n);
  }
  function Nv(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    l !== null && l.delete(t), um(e, n);
  }
  function Cv(e, t) {
    return Or(e, t);
  }
  var ks = null,
    cl = null,
    vc = !1,
    _s = !1,
    xc = !1,
    Xn = 0;
  function It(e) {
    e !== cl &&
      e.next === null &&
      (cl === null ? (ks = cl = e) : (cl = cl.next = e)),
      (_s = !0),
      vc || ((vc = !0), Rv());
  }
  function ii(e, t) {
    if (!xc && _s) {
      xc = !0;
      do
        for (var n = !1, l = ks; l !== null; ) {
          if (e !== 0) {
            var s = l.pendingLanes;
            if (s === 0) var o = 0;
            else {
              var d = l.suspendedLanes,
                g = l.pingedLanes;
              (o = (1 << (31 - vt(42 | e) + 1)) - 1),
                (o &= s & ~(d & ~g)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((n = !0), mm(l, o));
          } else
            (o = Se),
              (o = Li(
                l,
                l === ze ? o : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (o & 3) === 0 || Al(l, o) || ((n = !0), mm(l, o));
          l = l.next;
        }
      while (n);
      xc = !1;
    }
  }
  function Ov() {
    fm();
  }
  function fm() {
    _s = vc = !1;
    var e = 0;
    Xn !== 0 && qv() && (e = Xn);
    for (var t = gt(), n = null, l = ks; l !== null; ) {
      var s = l.next,
        o = dm(l, t);
      o === 0
        ? ((l.next = null),
          n === null ? (ks = s) : (n.next = s),
          s === null && (cl = n))
        : ((n = l), (e !== 0 || (o & 3) !== 0) && (_s = !0)),
        (l = s);
    }
    (Ze !== 0 && Ze !== 5) || ii(e), Xn !== 0 && (Xn = 0);
  }
  function dm(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        s = e.expirationTimes,
        o = e.pendingLanes & -62914561;
      0 < o;

    ) {
      var d = 31 - vt(o),
        g = 1 << d,
        S = s[d];
      S === -1
        ? ((g & n) === 0 || (g & l) !== 0) && (s[d] = n0(g, t))
        : S <= t && (e.expiredLanes |= g),
        (o &= ~g);
    }
    if (
      ((t = ze),
      (n = Se),
      (n = Li(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      n === 0 ||
        (e === t && (Ce === 2 || Ce === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Rr(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Al(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && Rr(l), _r(n))) {
        case 2:
        case 8:
          n = tf;
          break;
        case 32:
          n = _i;
          break;
        case 268435456:
          n = nf;
          break;
        default:
          n = _i;
      }
      return (
        (l = hm.bind(null, e)),
        (n = Or(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && Rr(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function hm(e, t) {
    if (Ze !== 0 && Ze !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (Ms() && e.callbackNode !== n) return null;
    var l = Se;
    return (
      (l = Li(
        e,
        e === ze ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (Fh(e, l, t),
          dm(e, gt()),
          e.callbackNode != null && e.callbackNode === n
            ? hm.bind(null, e)
            : null)
    );
  }
  function mm(e, t) {
    if (Ms()) return null;
    Fh(e, t, !0);
  }
  function Rv() {
    Vv(function () {
      (Ne & 6) !== 0 ? Or(ef, Ov) : fm();
    });
  }
  function bc() {
    if (Xn === 0) {
      var e = Fa;
      e === 0 && ((e = zi), (zi <<= 1), (zi & 261888) === 0 && (zi = 256)),
        (Xn = e);
    }
    return Xn;
  }
  function pm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Gi("" + e);
  }
  function gm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function Mv(e, t, n, l, s) {
    if (t === "submit" && n && n.stateNode === s) {
      var o = pm((s[rt] || null).action),
        d = l.submitter;
      d &&
        ((t = (t = d[rt] || null)
          ? pm(t.formAction)
          : d.getAttribute("formAction")),
        t !== null && ((o = t), (d = null)));
      var g = new Xi("action", "action", null, l, s);
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Xn !== 0) {
                  var S = d ? gm(s, d) : new FormData(s);
                  qo(
                    n,
                    { pending: !0, data: S, method: s.method, action: o },
                    null,
                    S
                  );
                }
              } else
                typeof o == "function" &&
                  (g.preventDefault(),
                  (S = d ? gm(s, d) : new FormData(s)),
                  qo(
                    n,
                    { pending: !0, data: S, method: s.method, action: o },
                    o,
                    S
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var wc = 0; wc < no.length; wc++) {
    var Sc = no[wc],
      kv = Sc.toLowerCase(),
      _v = Sc[0].toUpperCase() + Sc.slice(1);
    Vt(kv, "on" + _v);
  }
  Vt(Zf, "onAnimationEnd"),
    Vt(Ff, "onAnimationIteration"),
    Vt(Jf, "onAnimationStart"),
    Vt("dblclick", "onDoubleClick"),
    Vt("focusin", "onFocus"),
    Vt("focusout", "onBlur"),
    Vt(J0, "onTransitionRun"),
    Vt(P0, "onTransitionStart"),
    Vt($0, "onTransitionCancel"),
    Vt(Pf, "onTransitionEnd"),
    za("onMouseEnter", ["mouseout", "mouseover"]),
    za("onMouseLeave", ["mouseout", "mouseover"]),
    za("onPointerEnter", ["pointerout", "pointerover"]),
    za("onPointerLeave", ["pointerout", "pointerover"]),
    oa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    oa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    oa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    oa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    oa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    oa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var si =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    zv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(si)
    );
  function ym(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        s = l.event;
      l = l.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var d = l.length - 1; 0 <= d; d--) {
            var g = l[d],
              S = g.instance,
              _ = g.currentTarget;
            if (((g = g.listener), S !== o && s.isPropagationStopped()))
              break e;
            (o = g), (s.currentTarget = _);
            try {
              o(s);
            } catch (H) {
              Fi(H);
            }
            (s.currentTarget = null), (o = S);
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((g = l[d]),
              (S = g.instance),
              (_ = g.currentTarget),
              (g = g.listener),
              S !== o && s.isPropagationStopped())
            )
              break e;
            (o = g), (s.currentTarget = _);
            try {
              o(s);
            } catch (H) {
              Fi(H);
            }
            (s.currentTarget = null), (o = S);
          }
      }
    }
  }
  function we(e, t) {
    var n = t[zr];
    n === void 0 && (n = t[zr] = new Set());
    var l = e + "__bubble";
    n.has(l) || (vm(t, e, 2, !1), n.add(l));
  }
  function Ec(e, t, n) {
    var l = 0;
    t && (l |= 4), vm(n, e, l, t);
  }
  var zs = "_reactListening" + Math.random().toString(36).slice(2);
  function Ac(e) {
    if (!e[zs]) {
      (e[zs] = !0),
        ff.forEach(function (n) {
          n !== "selectionchange" && (zv.has(n) || Ec(n, !1, e), Ec(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zs] || ((t[zs] = !0), Ec("selectionchange", !1, t));
    }
  }
  function vm(e, t, n, l) {
    switch (Zm(t)) {
      case 2:
        var s = ox;
        break;
      case 8:
        s = cx;
        break;
      default:
        s = Bc;
    }
    (n = s.bind(null, t, n, e)),
      (s = void 0),
      !Yr ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      l
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1);
  }
  function Tc(e, t, n, l, s) {
    var o = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var g = l.stateNode.containerInfo;
          if (g === s) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var S = d.tag;
              if ((S === 3 || S === 4) && d.stateNode.containerInfo === s)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (((d = Ma(g)), d === null)) return;
            if (((S = d.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              l = o = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
    Ef(function () {
      var _ = o,
        H = Gr(n),
        V = [];
      e: {
        var z = $f.get(e);
        if (z !== void 0) {
          var D = Xi,
            ee = e;
          switch (e) {
            case "keypress":
              if (Yi(n) === 0) break e;
            case "keydown":
            case "keyup":
              D = N0;
              break;
            case "focusin":
              (ee = "focus"), (D = Zr);
              break;
            case "focusout":
              (ee = "blur"), (D = Zr);
              break;
            case "beforeblur":
            case "afterblur":
              D = Zr;
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
              D = jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = p0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = R0;
              break;
            case Zf:
            case Ff:
            case Jf:
              D = v0;
              break;
            case Pf:
              D = k0;
              break;
            case "scroll":
            case "scrollend":
              D = h0;
              break;
            case "wheel":
              D = z0;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = b0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Cf;
              break;
            case "toggle":
            case "beforetoggle":
              D = U0;
          }
          var oe = (t & 4) !== 0,
            _e = !oe && (e === "scroll" || e === "scrollend"),
            C = oe ? (z !== null ? z + "Capture" : null) : z;
          oe = [];
          for (var T = _, M; T !== null; ) {
            var q = T;
            if (
              ((M = q.stateNode),
              (q = q.tag),
              (q !== 5 && q !== 26 && q !== 27) ||
                M === null ||
                C === null ||
                ((q = Cl(T, C)), q != null && oe.push(ri(T, q, M))),
              _e)
            )
              break;
            T = T.return;
          }
          0 < oe.length &&
            ((z = new D(z, ee, null, n, H)),
            V.push({ event: z, listeners: oe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((z = e === "mouseover" || e === "pointerover"),
            (D = e === "mouseout" || e === "pointerout"),
            z &&
              n !== qr &&
              (ee = n.relatedTarget || n.fromElement) &&
              (Ma(ee) || ee[Ra]))
          )
            break e;
          if (
            (D || z) &&
            ((z =
              H.window === H
                ? H
                : (z = H.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            D
              ? ((ee = n.relatedTarget || n.toElement),
                (D = _),
                (ee = ee ? Ma(ee) : null),
                ee !== null &&
                  ((_e = h(ee)),
                  (oe = ee.tag),
                  ee !== _e || (oe !== 5 && oe !== 27 && oe !== 6)) &&
                  (ee = null))
              : ((D = null), (ee = _)),
            D !== ee)
          ) {
            if (
              ((oe = jf),
              (q = "onMouseLeave"),
              (C = "onMouseEnter"),
              (T = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((oe = Cf),
                (q = "onPointerLeave"),
                (C = "onPointerEnter"),
                (T = "pointer")),
              (_e = D == null ? z : Nl(D)),
              (M = ee == null ? z : Nl(ee)),
              (z = new oe(q, T + "leave", D, n, H)),
              (z.target = _e),
              (z.relatedTarget = M),
              (q = null),
              Ma(H) === _ &&
                ((oe = new oe(C, T + "enter", ee, n, H)),
                (oe.target = M),
                (oe.relatedTarget = _e),
                (q = oe)),
              (_e = q),
              D && ee)
            )
              t: {
                for (oe = Dv, C = D, T = ee, M = 0, q = C; q; q = oe(q)) M++;
                q = 0;
                for (var ie = T; ie; ie = oe(ie)) q++;
                for (; 0 < M - q; ) (C = oe(C)), M--;
                for (; 0 < q - M; ) (T = oe(T)), q--;
                for (; M--; ) {
                  if (C === T || (T !== null && C === T.alternate)) {
                    oe = C;
                    break t;
                  }
                  (C = oe(C)), (T = oe(T));
                }
                oe = null;
              }
            else oe = null;
            D !== null && xm(V, z, D, oe, !1),
              ee !== null && _e !== null && xm(V, _e, ee, oe, !0);
          }
        }
        e: {
          if (
            ((z = _ ? Nl(_) : window),
            (D = z.nodeName && z.nodeName.toLowerCase()),
            D === "select" || (D === "input" && z.type === "file"))
          )
            var Te = Uf;
          else if (zf(z))
            if (Lf) Te = K0;
            else {
              Te = Q0;
              var ae = Y0;
            }
          else
            (D = z.nodeName),
              !D ||
              D.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? _ && Br(_.elementType) && (Te = Uf)
                : (Te = X0);
          if (Te && (Te = Te(e, _))) {
            Df(V, Te, n, H);
            break e;
          }
          ae && ae(e, z, _),
            e === "focusout" &&
              _ &&
              z.type === "number" &&
              _.memoizedProps.value != null &&
              Hr(z, "number", z.value);
        }
        switch (((ae = _ ? Nl(_) : window), e)) {
          case "focusin":
            (zf(ae) || ae.contentEditable === "true") &&
              ((qa = ae), (Ir = _), (Ul = null));
            break;
          case "focusout":
            Ul = Ir = qa = null;
            break;
          case "mousedown":
            eo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (eo = !1), Xf(V, n, H);
            break;
          case "selectionchange":
            if (F0) break;
          case "keydown":
          case "keyup":
            Xf(V, n, H);
        }
        var ve;
        if (Jr)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          Ba
            ? kf(e, n) && (Ee = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Ee = "onCompositionStart");
        Ee &&
          (Of &&
            n.locale !== "ko" &&
            (Ba || Ee !== "onCompositionStart"
              ? Ee === "onCompositionEnd" && Ba && (ve = Af())
              : ((On = H),
                (Qr = "value" in On ? On.value : On.textContent),
                (Ba = !0))),
          (ae = Ds(_, Ee)),
          0 < ae.length &&
            ((Ee = new Nf(Ee, e, null, n, H)),
            V.push({ event: Ee, listeners: ae }),
            ve
              ? (Ee.data = ve)
              : ((ve = _f(n)), ve !== null && (Ee.data = ve)))),
          (ve = H0 ? B0(e, n) : q0(e, n)) &&
            ((Ee = Ds(_, "onBeforeInput")),
            0 < Ee.length &&
              ((ae = new Nf("onBeforeInput", "beforeinput", null, n, H)),
              V.push({ event: ae, listeners: Ee }),
              (ae.data = ve))),
          Mv(V, e, _, n, H);
      }
      ym(V, t);
    });
  }
  function ri(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ds(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var s = e,
        o = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          o === null ||
          ((s = Cl(e, n)),
          s != null && l.unshift(ri(e, s, o)),
          (s = Cl(e, t)),
          s != null && l.push(ri(e, s, o))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Dv(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xm(e, t, n, l, s) {
    for (var o = t._reactName, d = []; n !== null && n !== l; ) {
      var g = n,
        S = g.alternate,
        _ = g.stateNode;
      if (((g = g.tag), S !== null && S === l)) break;
      (g !== 5 && g !== 26 && g !== 27) ||
        _ === null ||
        ((S = _),
        s
          ? ((_ = Cl(n, o)), _ != null && d.unshift(ri(n, _, S)))
          : s || ((_ = Cl(n, o)), _ != null && d.push(ri(n, _, S)))),
        (n = n.return);
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Uv = /\r\n?/g,
    Lv = /\u0000|\uFFFD/g;
  function bm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Uv,
        `
`
      )
      .replace(Lv, "");
  }
  function wm(e, t) {
    return (t = bm(t)), bm(e) === t;
  }
  function ke(e, t, n, l, s, o) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Ua(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            Ua(e, "" + l);
        break;
      case "className":
        Bi(e, "class", l);
        break;
      case "tabIndex":
        Bi(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Bi(e, n, l);
        break;
      case "style":
        wf(e, l, o);
        break;
      case "data":
        if (t !== "object") {
          Bi(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        (l = Gi("" + l)), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (t !== "input" && ke(e, t, "name", s.name, s, null),
                ke(e, t, "formEncType", s.formEncType, s, null),
                ke(e, t, "formMethod", s.formMethod, s, null),
                ke(e, t, "formTarget", s.formTarget, s, null))
              : (ke(e, t, "encType", s.encType, s, null),
                ke(e, t, "method", s.method, s, null),
                ke(e, t, "target", s.target, s, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (l = Gi("" + l)), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = rn);
        break;
      case "onScroll":
        l != null && we("scroll", e);
        break;
      case "onScrollEnd":
        l != null && we("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
          if (((n = l.__html), n != null)) {
            if (s.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (n = Gi("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "" + l)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(n, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case "popover":
        we("beforetoggle", e), we("toggle", e), Hi(e, "popover", l);
        break;
      case "xlinkActuate":
        sn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        sn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        sn(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        sn(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        sn(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        sn(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        sn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        sn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        sn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Hi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = f0.get(n) || n), Hi(e, n, l));
    }
  }
  function jc(e, t, n, l, s, o) {
    switch (n) {
      case "style":
        wf(e, l, o);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
          if (((n = l.__html), n != null)) {
            if (s.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Ua(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Ua(e, "" + l);
        break;
      case "onScroll":
        l != null && we("scroll", e);
        break;
      case "onScrollEnd":
        l != null && we("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = rn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!df.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (t = n.slice(2, s ? n.length - 7 : void 0)),
              (o = e[rt] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && e.removeEventListener(t, o, s),
              typeof l == "function")
            ) {
              typeof o != "function" &&
                o !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, s);
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
              ? e.setAttribute(n, "")
              : Hi(e, n, l);
          }
    }
  }
  function at(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        we("error", e), we("load", e);
        var l = !1,
          s = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var d = n[o];
            if (d != null)
              switch (o) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  ke(e, t, o, d, n, null);
              }
          }
        s && ke(e, t, "srcSet", n.srcSet, n, null),
          l && ke(e, t, "src", n.src, n, null);
        return;
      case "input":
        we("invalid", e);
        var g = (o = d = s = null),
          S = null,
          _ = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var H = n[l];
            if (H != null)
              switch (l) {
                case "name":
                  s = H;
                  break;
                case "type":
                  d = H;
                  break;
                case "checked":
                  S = H;
                  break;
                case "defaultChecked":
                  _ = H;
                  break;
                case "value":
                  o = H;
                  break;
                case "defaultValue":
                  g = H;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null) throw Error(c(137, t));
                  break;
                default:
                  ke(e, t, l, H, n, null);
              }
          }
        yf(e, o, g, S, _, d, s, !1);
        return;
      case "select":
        we("invalid", e), (l = d = o = null);
        for (s in n)
          if (n.hasOwnProperty(s) && ((g = n[s]), g != null))
            switch (s) {
              case "value":
                o = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                l = g;
              default:
                ke(e, t, s, g, n, null);
            }
        (t = o),
          (n = d),
          (e.multiple = !!l),
          t != null ? Da(e, !!l, t, !1) : n != null && Da(e, !!l, n, !0);
        return;
      case "textarea":
        we("invalid", e), (o = s = l = null);
        for (d in n)
          if (n.hasOwnProperty(d) && ((g = n[d]), g != null))
            switch (d) {
              case "value":
                l = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                o = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(c(91));
                break;
              default:
                ke(e, t, d, g, n, null);
            }
        xf(e, l, s, o);
        return;
      case "option":
        for (S in n)
          n.hasOwnProperty(S) &&
            ((l = n[S]), l != null) &&
            (S === "selected"
              ? (e.selected =
                  l && typeof l != "function" && typeof l != "symbol")
              : ke(e, t, S, l, n, null));
        return;
      case "dialog":
        we("beforetoggle", e), we("toggle", e), we("cancel", e), we("close", e);
        break;
      case "iframe":
      case "object":
        we("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < si.length; l++) we(si[l], e);
        break;
      case "image":
        we("error", e), we("load", e);
        break;
      case "details":
        we("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        we("error", e), we("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in n)
          if (n.hasOwnProperty(_) && ((l = n[_]), l != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                ke(e, t, _, l, n, null);
            }
        return;
      default:
        if (Br(t)) {
          for (H in n)
            n.hasOwnProperty(H) &&
              ((l = n[H]), l !== void 0 && jc(e, t, H, l, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((l = n[g]), l != null && ke(e, t, g, l, n, null));
  }
  function Hv(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          o = null,
          d = null,
          g = null,
          S = null,
          _ = null,
          H = null;
        for (D in n) {
          var V = n[D];
          if (n.hasOwnProperty(D) && V != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = V;
              default:
                l.hasOwnProperty(D) || ke(e, t, D, null, l, V);
            }
        }
        for (var z in l) {
          var D = l[z];
          if (((V = n[z]), l.hasOwnProperty(z) && (D != null || V != null)))
            switch (z) {
              case "type":
                o = D;
                break;
              case "name":
                s = D;
                break;
              case "checked":
                _ = D;
                break;
              case "defaultChecked":
                H = D;
                break;
              case "value":
                d = D;
                break;
              case "defaultValue":
                g = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(c(137, t));
                break;
              default:
                D !== V && ke(e, t, z, D, l, V);
            }
        }
        Lr(e, d, g, S, _, H, o, s);
        return;
      case "select":
        D = d = g = z = null;
        for (o in n)
          if (((S = n[o]), n.hasOwnProperty(o) && S != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                D = S;
              default:
                l.hasOwnProperty(o) || ke(e, t, o, null, l, S);
            }
        for (s in l)
          if (
            ((o = l[s]),
            (S = n[s]),
            l.hasOwnProperty(s) && (o != null || S != null))
          )
            switch (s) {
              case "value":
                z = o;
                break;
              case "defaultValue":
                g = o;
                break;
              case "multiple":
                d = o;
              default:
                o !== S && ke(e, t, s, o, l, S);
            }
        (t = g),
          (n = d),
          (l = D),
          z != null
            ? Da(e, !!n, z, !1)
            : !!l != !!n &&
              (t != null ? Da(e, !!n, t, !0) : Da(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        D = z = null;
        for (g in n)
          if (
            ((s = n[g]),
            n.hasOwnProperty(g) && s != null && !l.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                ke(e, t, g, null, l, s);
            }
        for (d in l)
          if (
            ((s = l[d]),
            (o = n[d]),
            l.hasOwnProperty(d) && (s != null || o != null))
          )
            switch (d) {
              case "value":
                z = s;
                break;
              case "defaultValue":
                D = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(c(91));
                break;
              default:
                s !== o && ke(e, t, d, s, l, o);
            }
        vf(e, z, D);
        return;
      case "option":
        for (var ee in n)
          (z = n[ee]),
            n.hasOwnProperty(ee) &&
              z != null &&
              !l.hasOwnProperty(ee) &&
              (ee === "selected"
                ? (e.selected = !1)
                : ke(e, t, ee, null, l, z));
        for (S in l)
          (z = l[S]),
            (D = n[S]),
            l.hasOwnProperty(S) &&
              z !== D &&
              (z != null || D != null) &&
              (S === "selected"
                ? (e.selected =
                    z && typeof z != "function" && typeof z != "symbol")
                : ke(e, t, S, z, l, D));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var oe in n)
          (z = n[oe]),
            n.hasOwnProperty(oe) &&
              z != null &&
              !l.hasOwnProperty(oe) &&
              ke(e, t, oe, null, l, z);
        for (_ in l)
          if (
            ((z = l[_]),
            (D = n[_]),
            l.hasOwnProperty(_) && z !== D && (z != null || D != null))
          )
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(c(137, t));
                break;
              default:
                ke(e, t, _, z, l, D);
            }
        return;
      default:
        if (Br(t)) {
          for (var _e in n)
            (z = n[_e]),
              n.hasOwnProperty(_e) &&
                z !== void 0 &&
                !l.hasOwnProperty(_e) &&
                jc(e, t, _e, void 0, l, z);
          for (H in l)
            (z = l[H]),
              (D = n[H]),
              !l.hasOwnProperty(H) ||
                z === D ||
                (z === void 0 && D === void 0) ||
                jc(e, t, H, z, l, D);
          return;
        }
    }
    for (var C in n)
      (z = n[C]),
        n.hasOwnProperty(C) &&
          z != null &&
          !l.hasOwnProperty(C) &&
          ke(e, t, C, null, l, z);
    for (V in l)
      (z = l[V]),
        (D = n[V]),
        !l.hasOwnProperty(V) ||
          z === D ||
          (z == null && D == null) ||
          ke(e, t, V, z, l, D);
  }
  function Sm(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Bv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var s = n[l],
          o = s.transferSize,
          d = s.initiatorType,
          g = s.duration;
        if (o && g && Sm(d)) {
          for (d = 0, g = s.responseEnd, l += 1; l < n.length; l++) {
            var S = n[l],
              _ = S.startTime;
            if (_ > g) break;
            var H = S.transferSize,
              V = S.initiatorType;
            H &&
              Sm(V) &&
              ((S = S.responseEnd), (d += H * (S < g ? 1 : (g - _) / (S - _))));
          }
          if ((--l, (t += (8 * (o + d)) / (s.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Nc = null,
    Cc = null;
  function Us(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Em(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Am(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Oc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Rc = null;
  function qv() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Rc
        ? !1
        : ((Rc = e), !0)
      : ((Rc = null), !1);
  }
  var Tm = typeof setTimeout == "function" ? setTimeout : void 0,
    Gv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jm = typeof Promise == "function" ? Promise : void 0,
    Vv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof jm < "u"
        ? function (e) {
            return jm.resolve(null).then(e).catch(Yv);
          }
        : Tm;
  function Yv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Kn(e) {
    return e === "head";
  }
  function Nm(e, t) {
    var n = t,
      l = 0;
    do {
      var s = n.nextSibling;
      if ((e.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            e.removeChild(s), hl(t);
            return;
          }
          l--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          l++;
        else if (n === "html") oi(e.ownerDocument.documentElement);
        else if (n === "head") {
          (n = e.ownerDocument.head), oi(n);
          for (var o = n.firstChild; o; ) {
            var d = o.nextSibling,
              g = o.nodeName;
            o[jl] ||
              g === "SCRIPT" ||
              g === "STYLE" ||
              (g === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(o),
              (o = d);
          }
        } else n === "body" && oi(e.ownerDocument.body);
      n = s;
    } while (n);
    hl(t);
  }
  function Cm(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = l;
    } while (n);
  }
  function Mc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Mc(n), Dr(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Qv(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var s = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[jl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((o = e.getAttribute("rel")),
                o === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== s.rel ||
                e.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                e.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                e.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((o = e.getAttribute("src")),
                (o !== (s.src == null ? null : s.src) ||
                  e.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  e.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  o &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var o = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === o) return e;
      } else return e;
      if (((e = Ht(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Xv(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Ht(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Om(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Ht(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function kc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function _c(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Kv(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var l = function () {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function Ht(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var zc = null;
  function Rm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return Ht(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Mm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function km(e, t, n) {
    switch (((t = Us(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function oi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Dr(e);
  }
  var Bt = new Map(),
    _m = new Set();
  function Ls(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var En = X.d;
  X.d = { f: Zv, r: Fv, D: Jv, C: Pv, L: $v, m: Wv, X: ex, S: Iv, M: tx };
  function Zv() {
    var e = En.f(),
      t = Cs();
    return e || t;
  }
  function Fv(e) {
    var t = ka(e);
    t !== null && t.tag === 5 && t.type === "form" ? Pd(t) : En.r(e);
  }
  var ul = typeof document > "u" ? null : document;
  function zm(e, t, n) {
    var l = ul;
    if (l && typeof t == "string" && t) {
      var s = Mt(t);
      (s = 'link[rel="' + e + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        _m.has(s) ||
          (_m.add(s),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(s) === null &&
            ((t = l.createElement("link")),
            at(t, "link", e),
            $e(t),
            l.head.appendChild(t)));
    }
  }
  function Jv(e) {
    En.D(e), zm("dns-prefetch", e, null);
  }
  function Pv(e, t) {
    En.C(e, t), zm("preconnect", e, t);
  }
  function $v(e, t, n) {
    En.L(e, t, n);
    var l = ul;
    if (l && e && t) {
      var s = 'link[rel="preload"][as="' + Mt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Mt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Mt(n.imageSizes) + '"]'))
        : (s += '[href="' + Mt(e) + '"]');
      var o = s;
      switch (t) {
        case "style":
          o = fl(e);
          break;
        case "script":
          o = dl(e);
      }
      Bt.has(o) ||
        ((e = b(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        Bt.set(o, e),
        l.querySelector(s) !== null ||
          (t === "style" && l.querySelector(ci(o))) ||
          (t === "script" && l.querySelector(ui(o))) ||
          ((t = l.createElement("link")),
          at(t, "link", e),
          $e(t),
          l.head.appendChild(t)));
    }
  }
  function Wv(e, t) {
    En.m(e, t);
    var n = ul;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Mt(l) + '"][href="' + Mt(e) + '"]',
        o = s;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = dl(e);
      }
      if (
        !Bt.has(o) &&
        ((e = b({ rel: "modulepreload", href: e }, t)),
        Bt.set(o, e),
        n.querySelector(s) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ui(o))) return;
        }
        (l = n.createElement("link")),
          at(l, "link", e),
          $e(l),
          n.head.appendChild(l);
      }
    }
  }
  function Iv(e, t, n) {
    En.S(e, t, n);
    var l = ul;
    if (l && e) {
      var s = _a(l).hoistableStyles,
        o = fl(e);
      t = t || "default";
      var d = s.get(o);
      if (!d) {
        var g = { loading: 0, preload: null };
        if ((d = l.querySelector(ci(o)))) g.loading = 5;
        else {
          (e = b({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Bt.get(o)) && Dc(e, n);
          var S = (d = l.createElement("link"));
          $e(S),
            at(S, "link", e),
            (S._p = new Promise(function (_, H) {
              (S.onload = _), (S.onerror = H);
            })),
            S.addEventListener("load", function () {
              g.loading |= 1;
            }),
            S.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            Hs(d, t, l);
        }
        (d = { type: "stylesheet", instance: d, count: 1, state: g }),
          s.set(o, d);
      }
    }
  }
  function ex(e, t) {
    En.X(e, t);
    var n = ul;
    if (n && e) {
      var l = _a(n).hoistableScripts,
        s = dl(e),
        o = l.get(s);
      o ||
        ((o = n.querySelector(ui(s))),
        o ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = Bt.get(s)) && Uc(e, t),
          (o = n.createElement("script")),
          $e(o),
          at(o, "link", e),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(s, o));
    }
  }
  function tx(e, t) {
    En.M(e, t);
    var n = ul;
    if (n && e) {
      var l = _a(n).hoistableScripts,
        s = dl(e),
        o = l.get(s);
      o ||
        ((o = n.querySelector(ui(s))),
        o ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = Bt.get(s)) && Uc(e, t),
          (o = n.createElement("script")),
          $e(o),
          at(o, "link", e),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(s, o));
    }
  }
  function Dm(e, t, n, l) {
    var s = (s = ge.current) ? Ls(s) : null;
    if (!s) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = fl(n.href)),
            (n = _a(s).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = fl(n.href);
          var o = _a(s).hoistableStyles,
            d = o.get(e);
          if (
            (d ||
              ((s = s.ownerDocument || s),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(e, d),
              (o = s.querySelector(ci(e))) &&
                !o._p &&
                ((d.instance = o), (d.state.loading = 5)),
              Bt.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Bt.set(e, n),
                o || nx(s, e, n, d.state))),
            t && l === null)
          )
            throw Error(c(528, ""));
          return d;
        }
        if (t && l !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = dl(n)),
              (n = _a(s).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, e));
    }
  }
  function fl(e) {
    return 'href="' + Mt(e) + '"';
  }
  function ci(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Um(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function nx(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        at(t, "link", n),
        $e(t),
        e.head.appendChild(t));
  }
  function dl(e) {
    return '[src="' + Mt(e) + '"]';
  }
  function ui(e) {
    return "script[async]" + e;
  }
  function Lm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + Mt(n.href) + '"]');
          if (l) return (t.instance = l), $e(l), l;
          var s = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            $e(l),
            at(l, "style", s),
            Hs(l, n.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          s = fl(n.href);
          var o = e.querySelector(ci(s));
          if (o) return (t.state.loading |= 4), (t.instance = o), $e(o), o;
          (l = Um(n)),
            (s = Bt.get(s)) && Dc(l, s),
            (o = (e.ownerDocument || e).createElement("link")),
            $e(o);
          var d = o;
          return (
            (d._p = new Promise(function (g, S) {
              (d.onload = g), (d.onerror = S);
            })),
            at(o, "link", l),
            (t.state.loading |= 4),
            Hs(o, n.precedence, e),
            (t.instance = o)
          );
        case "script":
          return (
            (o = dl(n.src)),
            (s = e.querySelector(ui(o)))
              ? ((t.instance = s), $e(s), s)
              : ((l = n),
                (s = Bt.get(o)) && ((l = b({}, n)), Uc(l, s)),
                (e = e.ownerDocument || e),
                (s = e.createElement("script")),
                $e(s),
                at(s, "link", l),
                e.head.appendChild(s),
                (t.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Hs(l, n.precedence, e));
    return t.instance;
  }
  function Hs(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = l.length ? l[l.length - 1] : null,
        o = s,
        d = 0;
      d < l.length;
      d++
    ) {
      var g = l[d];
      if (g.dataset.precedence === t) o = g;
      else if (o !== s) break;
    }
    o
      ? o.parentNode.insertBefore(e, o.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Dc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Uc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Bs = null;
  function Hm(e, t, n) {
    if (Bs === null) {
      var l = new Map(),
        s = (Bs = new Map());
      s.set(n, l);
    } else (s = Bs), (l = s.get(n)), l || ((l = new Map()), s.set(n, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), s = 0;
      s < n.length;
      s++
    ) {
      var o = n[s];
      if (
        !(
          o[jl] ||
          o[Ie] ||
          (e === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = o.getAttribute(t) || "";
        d = e + d;
        var g = l.get(d);
        g ? g.push(o) : l.set(d, [o]);
      }
    }
    return l;
  }
  function Bm(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function ax(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function qm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function lx(e, t, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = fl(l.href),
          o = t.querySelector(ci(s));
        if (o) {
          (t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = qs.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = o),
            $e(o);
          return;
        }
        (o = t.ownerDocument || t),
          (l = Um(l)),
          (s = Bt.get(s)) && Dc(l, s),
          (o = o.createElement("link")),
          $e(o);
        var d = o;
        (d._p = new Promise(function (g, S) {
          (d.onload = g), (d.onerror = S);
        })),
          at(o, "link", l),
          (n.instance = o);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = qs.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n));
    }
  }
  var Lc = 0;
  function ix(e, t) {
    return (
      e.stylesheets && e.count === 0 && Vs(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Vs(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                (e.unsuspend = null), o();
              }
            }, 6e4 + t);
            0 < e.imgBytes && Lc === 0 && (Lc = 62500 * Bv());
            var s = setTimeout(function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && Vs(e, e.stylesheets), e.unsuspend))
              ) {
                var o = e.unsuspend;
                (e.unsuspend = null), o();
              }
            }, (e.imgBytes > Lc ? 50 : 800) + t);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(l), clearTimeout(s);
              }
            );
          }
        : null
    );
  }
  function qs() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Vs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Gs = null;
  function Vs(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Gs = new Map()),
        t.forEach(sx, e),
        (Gs = null),
        qs.call(e));
  }
  function sx(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Gs.get(e);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Gs.set(e, n);
        for (
          var s = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < s.length;
          o++
        ) {
          var d = s[o];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (l = d));
        }
        l && n.set(null, l);
      }
      (s = t.instance),
        (d = s.getAttribute("data-precedence")),
        (o = n.get(d) || l),
        o === l && n.set(null, s),
        n.set(d, s),
        this.count++,
        (l = qs.bind(this)),
        s.addEventListener("load", l),
        s.addEventListener("error", l),
        o
          ? o.parentNode.insertBefore(s, o.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(s, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var fi = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: U,
    _currentValue2: U,
    _threadCount: 0,
  };
  function rx(e, t, n, l, s, o, d, g, S) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Mr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Mr(0)),
      (this.hiddenUpdates = Mr(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = s),
      (this.onCaughtError = o),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map());
  }
  function Gm(e, t, n, l, s, o, d, g, S, _, H, V) {
    return (
      (e = new rx(e, t, n, d, S, _, H, V, g)),
      (t = 1),
      o === !0 && (t |= 24),
      (o = bt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (t = go()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (o.memoizedState = { element: l, isDehydrated: n, cache: t }),
      bo(o),
      e
    );
  }
  function Vm(e) {
    return e ? ((e = Ya), e) : Ya;
  }
  function Ym(e, t, n, l, s, o) {
    (s = Vm(s)),
      l.context === null ? (l.context = s) : (l.pendingContext = s),
      (l = Dn(t)),
      (l.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (l.callback = o),
      (n = Un(e, l, t)),
      n !== null && (ht(n, e, t), Yl(n, e, t));
  }
  function Qm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Hc(e, t) {
    Qm(e, t), (e = e.alternate) && Qm(e, t);
  }
  function Xm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = da(e, 67108864);
      t !== null && ht(t, e, 67108864), Hc(e, 67108864);
    }
  }
  function Km(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Tt();
      t = kr(t);
      var n = da(e, t);
      n !== null && ht(n, e, t), Hc(e, t);
    }
  }
  var Ys = !0;
  function ox(e, t, n, l) {
    var s = R.T;
    R.T = null;
    var o = X.p;
    try {
      (X.p = 2), Bc(e, t, n, l);
    } finally {
      (X.p = o), (R.T = s);
    }
  }
  function cx(e, t, n, l) {
    var s = R.T;
    R.T = null;
    var o = X.p;
    try {
      (X.p = 8), Bc(e, t, n, l);
    } finally {
      (X.p = o), (R.T = s);
    }
  }
  function Bc(e, t, n, l) {
    if (Ys) {
      var s = qc(l);
      if (s === null) Tc(e, t, l, Qs, n), Fm(e, l);
      else if (fx(s, e, t, n, l)) l.stopPropagation();
      else if ((Fm(e, l), t & 4 && -1 < ux.indexOf(e))) {
        for (; s !== null; ) {
          var o = ka(s);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var d = ra(o.pendingLanes);
                  if (d !== 0) {
                    var g = o;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var S = 1 << (31 - vt(d));
                      (g.entanglements[1] |= S), (d &= ~S);
                    }
                    It(o), (Ne & 6) === 0 && ((js = gt() + 500), ii(0));
                  }
                }
                break;
              case 31:
              case 13:
                (g = da(o, 2)), g !== null && ht(g, o, 2), Cs(), Hc(o, 2);
            }
          if (((o = qc(l)), o === null && Tc(e, t, l, Qs, n), o === s)) break;
          s = o;
        }
        s !== null && l.stopPropagation();
      } else Tc(e, t, l, null, n);
    }
  }
  function qc(e) {
    return (e = Gr(e)), Gc(e);
  }
  var Qs = null;
  function Gc(e) {
    if (((Qs = null), (e = Ma(e)), e !== null)) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = m(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = y(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Qs = e), null;
  }
  function Zm(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Jy()) {
          case ef:
            return 2;
          case tf:
            return 8;
          case _i:
          case Py:
            return 32;
          case nf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vc = !1,
    Zn = null,
    Fn = null,
    Jn = null,
    di = new Map(),
    hi = new Map(),
    Pn = [],
    ux =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Fm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Fn = null;
        break;
      case "mouseover":
      case "mouseout":
        Jn = null;
        break;
      case "pointerover":
      case "pointerout":
        di.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hi.delete(t.pointerId);
    }
  }
  function mi(e, t, n, l, s, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: o,
          targetContainers: [s],
        }),
        t !== null && ((t = ka(t)), t !== null && Xm(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function fx(e, t, n, l, s) {
    switch (t) {
      case "focusin":
        return (Zn = mi(Zn, e, t, n, l, s)), !0;
      case "dragenter":
        return (Fn = mi(Fn, e, t, n, l, s)), !0;
      case "mouseover":
        return (Jn = mi(Jn, e, t, n, l, s)), !0;
      case "pointerover":
        var o = s.pointerId;
        return di.set(o, mi(di.get(o) || null, e, t, n, l, s)), !0;
      case "gotpointercapture":
        return (
          (o = s.pointerId), hi.set(o, mi(hi.get(o) || null, e, t, n, l, s)), !0
        );
    }
    return !1;
  }
  function Jm(e) {
    var t = Ma(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = m(n)), t !== null)) {
            (e.blockedOn = t),
              cf(e.priority, function () {
                Km(n);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = y(n)), t !== null)) {
            (e.blockedOn = t),
              cf(e.priority, function () {
                Km(n);
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
  function Xs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = qc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        (qr = l), n.target.dispatchEvent(l), (qr = null);
      } else return (t = ka(n)), t !== null && Xm(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Pm(e, t, n) {
    Xs(e) && n.delete(t);
  }
  function dx() {
    (Vc = !1),
      Zn !== null && Xs(Zn) && (Zn = null),
      Fn !== null && Xs(Fn) && (Fn = null),
      Jn !== null && Xs(Jn) && (Jn = null),
      di.forEach(Pm),
      hi.forEach(Pm);
  }
  function Ks(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Vc ||
        ((Vc = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, dx)));
  }
  var Zs = null;
  function $m(e) {
    Zs !== e &&
      ((Zs = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Zs === e && (Zs = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            s = e[t + 2];
          if (typeof l != "function") {
            if (Gc(l || n) === null) continue;
            break;
          }
          var o = ka(n);
          o !== null &&
            (e.splice(t, 3),
            (t -= 3),
            qo(o, { pending: !0, data: s, method: n.method, action: l }, l, s));
        }
      }));
  }
  function hl(e) {
    function t(S) {
      return Ks(S, e);
    }
    Zn !== null && Ks(Zn, e),
      Fn !== null && Ks(Fn, e),
      Jn !== null && Ks(Jn, e),
      di.forEach(t),
      hi.forEach(t);
    for (var n = 0; n < Pn.length; n++) {
      var l = Pn[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Pn.length && ((n = Pn[0]), n.blockedOn === null); )
      Jm(n), n.blockedOn === null && Pn.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var s = n[l],
          o = n[l + 1],
          d = s[rt] || null;
        if (typeof o == "function") d || $m(n);
        else if (d) {
          var g = null;
          if (o && o.hasAttribute("formAction")) {
            if (((s = o), (d = o[rt] || null))) g = d.formAction;
            else if (Gc(s) !== null) continue;
          } else g = d.action;
          typeof g == "function" ? (n[l + 1] = g) : (n.splice(l, 3), (l -= 3)),
            $m(n);
        }
      }
  }
  function Wm() {
    function e(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (s = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      s !== null && (s(), (s = null)), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          (l = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            s !== null && (s(), (s = null));
        }
      );
    }
  }
  function Yc(e) {
    this._internalRoot = e;
  }
  (Fs.prototype.render = Yc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var n = t.current,
        l = Tt();
      Ym(n, l, e, t, null, null);
    }),
    (Fs.prototype.unmount = Yc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Ym(e.current, 2, null, e, null, null), Cs(), (t[Ra] = null);
        }
      });
  function Fs(e) {
    this._internalRoot = e;
  }
  Fs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = of();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Pn.length && t !== 0 && t < Pn[n].priority; n++);
      Pn.splice(n, 0, e), n === 0 && Jm(e);
    }
  };
  var Im = i.version;
  if (Im !== "19.2.3") throw Error(c(527, Im, "19.2.3"));
  X.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(c(188))
        : ((e = Object.keys(e).join(",")), Error(c(268, e)));
    return (
      (e = p(t)),
      (e = e !== null ? x(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var hx = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Js.isDisabled && Js.supportsFiber)
      try {
        (El = Js.inject(hx)), (yt = Js);
      } catch {}
  }
  return (
    (gi.createRoot = function (e, t) {
      if (!f(e)) throw Error(c(299));
      var n = !1,
        l = "",
        s = sh,
        o = rh,
        d = oh;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
          t.onCaughtError !== void 0 && (o = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        (t = Gm(e, 1, !1, null, null, n, l, null, s, o, d, Wm)),
        (e[Ra] = t.current),
        Ac(e),
        new Yc(t)
      );
    }),
    (gi.hydrateRoot = function (e, t, n) {
      if (!f(e)) throw Error(c(299));
      var l = !1,
        s = "",
        o = sh,
        d = rh,
        g = oh,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.formState !== void 0 && (S = n.formState)),
        (t = Gm(e, 1, !0, t, n ?? null, l, s, S, o, d, g, Wm)),
        (t.context = Vm(null)),
        (n = t.current),
        (l = Tt()),
        (l = kr(l)),
        (s = Dn(l)),
        (s.callback = null),
        Un(n, s, l),
        (n = l),
        (t.current.lanes = n),
        Tl(t, n),
        It(t),
        (e[Ra] = t.current),
        Ac(e),
        new Fs(t)
      );
    }),
    (gi.version = "19.2.3"),
    gi
  );
}
var cp;
function Ex() {
  if (cp) return Xc.exports;
  cp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (Xc.exports = Sx()), Xc.exports;
}
var Ax = Ex(),
  w = mr();
const In = tg(w),
  ag = px({ __proto__: null, default: In }, [w]);
function Tx(a, i) {
  if (a instanceof RegExp) return { keys: !1, pattern: a };
  var r,
    c,
    f,
    h,
    m = [],
    y = "",
    v = a.split("/");
  for (v[0] || v.shift(); (f = v.shift()); )
    (r = f[0]),
      r === "*"
        ? (m.push(r), (y += f[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : r === ":"
        ? ((c = f.indexOf("?", 1)),
          (h = f.indexOf(".", 1)),
          m.push(f.substring(1, ~c ? c : ~h ? h : f.length)),
          (y += ~c && !~h ? "(?:/([^/]+?))?" : "/([^/]+?)"),
          ~h && (y += (~c ? "?" : "") + "\\" + f.substring(h)))
        : (y += "/" + f);
  return {
    keys: m,
    pattern: new RegExp("^" + y + (i ? "(?=$|/)" : "/?$"), "i"),
  };
}
var Pc = { exports: {} },
  $c = {};
var up;
function jx() {
  if (up) return $c;
  up = 1;
  var a = mr();
  function i(b, E) {
    return (b === E && (b !== 0 || 1 / b === 1 / E)) || (b !== b && E !== E);
  }
  var r = typeof Object.is == "function" ? Object.is : i,
    c = a.useState,
    f = a.useEffect,
    h = a.useLayoutEffect,
    m = a.useDebugValue;
  function y(b, E) {
    var O = E(),
      k = c({ inst: { value: O, getSnapshot: E } }),
      N = k[0].inst,
      j = k[1];
    return (
      h(
        function () {
          (N.value = O), (N.getSnapshot = E), v(N) && j({ inst: N });
        },
        [b, O, E]
      ),
      f(
        function () {
          return (
            v(N) && j({ inst: N }),
            b(function () {
              v(N) && j({ inst: N });
            })
          );
        },
        [b]
      ),
      m(O),
      O
    );
  }
  function v(b) {
    var E = b.getSnapshot;
    b = b.value;
    try {
      var O = E();
      return !r(b, O);
    } catch {
      return !0;
    }
  }
  function p(b, E) {
    return E();
  }
  var x =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? p
      : y;
  return (
    ($c.useSyncExternalStore =
      a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : x),
    $c
  );
}
var fp;
function Nx() {
  return fp || ((fp = 1), (Pc.exports = jx())), Pc.exports;
}
var Cx = Nx();
const Ox = ag.useInsertionEffect,
  Rx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Mx = Rx ? w.useLayoutEffect : w.useEffect,
  kx = Ox || Mx,
  lg = (a) => {
    const i = w.useRef([a, (...r) => i[0](...r)]).current;
    return (
      kx(() => {
        i[0] = a;
      }),
      i[1]
    );
  },
  _x = "popstate",
  Ru = "pushState",
  Mu = "replaceState",
  zx = "hashchange",
  dp = [_x, Ru, Mu, zx],
  Dx = (a) => {
    for (const i of dp) addEventListener(i, a);
    return () => {
      for (const i of dp) removeEventListener(i, a);
    };
  },
  ig = (a, i) => Cx.useSyncExternalStore(Dx, a, i),
  hp = () => location.search,
  Ux = ({ ssrSearch: a } = {}) => ig(hp, a != null ? () => a : hp),
  mp = () => location.pathname,
  Lx = ({ ssrPath: a } = {}) => ig(mp, a != null ? () => a : mp),
  Hx = (a, { replace: i = !1, state: r = null } = {}) =>
    history[i ? Mu : Ru](r, "", a),
  Bx = (a = {}) => [Lx(a), Hx],
  pp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[pp] > "u") {
  for (const a of [Ru, Mu]) {
    const i = history[a];
    history[a] = function () {
      const r = i.apply(this, arguments),
        c = new Event(a);
      return (c.arguments = arguments), dispatchEvent(c), r;
    };
  }
  Object.defineProperty(window, pp, { value: !0 });
}
const qx = (a, i) =>
    i.toLowerCase().indexOf(a.toLowerCase())
      ? "~" + i
      : i.slice(a.length) || "/",
  sg = (a = "") => (a === "/" ? "" : a),
  Gx = (a, i) => (a[0] === "~" ? a.slice(1) : sg(i) + a),
  Vx = (a = "", i) => qx(gp(sg(a)), gp(i)),
  gp = (a) => {
    try {
      return decodeURI(a);
    } catch {
      return a;
    }
  },
  rg = {
    hook: Bx,
    searchHook: Ux,
    parser: Tx,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (a) => a,
    aroundNav: (a, i, r) => a(i, r),
  },
  og = w.createContext(rg),
  Ci = () => w.useContext(og),
  cg = {},
  ug = w.createContext(cg),
  Yx = () => w.useContext(ug),
  pr = (a) => {
    const [i, r] = a.hook(a);
    return [Vx(a.base, i), lg((c, f) => a.aroundNav(r, Gx(c, a.base), f))];
  },
  Qx = () => pr(Ci()),
  fg = (a, i, r, c) => {
    const { pattern: f, keys: h } =
        i instanceof RegExp ? { keys: !1, pattern: i } : a(i || "*", c),
      m = f.exec(r) || [],
      [y, ...v] = m;
    return y !== void 0
      ? [
          !0,
          (() => {
            const p =
              h !== !1
                ? Object.fromEntries(h.map((b, E) => [b, v[E]]))
                : m.groups;
            let x = { ...v };
            return p && Object.assign(x, p), x;
          })(),
          ...(c ? [y] : []),
        ]
      : [!1, null];
  },
  Xx = ({ children: a, ...i }) => {
    const r = Ci(),
      c = i.hook ? rg : r;
    let f = c;
    const [h, m = i.ssrSearch ?? ""] = i.ssrPath?.split("?") ?? [];
    h && ((i.ssrSearch = m), (i.ssrPath = h)),
      (i.hrefs = i.hrefs ?? i.hook?.hrefs),
      (i.searchHook = i.searchHook ?? i.hook?.searchHook);
    let y = w.useRef({}),
      v = y.current,
      p = v;
    for (let x in c) {
      const b = x === "base" ? c[x] + (i[x] ?? "") : i[x] ?? c[x];
      v === p && b !== p[x] && (y.current = p = { ...p }),
        (p[x] = b),
        (b !== c[x] || b !== f[x]) && (f = p);
    }
    return w.createElement(og.Provider, { value: f, children: a });
  },
  yp = ({ children: a, component: i }, r) =>
    i ? w.createElement(i, { params: r }) : typeof a == "function" ? a(r) : a,
  Kx = (a) => {
    let i = w.useRef(cg);
    const r = i.current;
    return (i.current =
      Object.keys(a).length !== Object.keys(r).length ||
      Object.entries(a).some(([c, f]) => f !== r[c])
        ? a
        : r);
  },
  yi = ({ path: a, nest: i, match: r, ...c }) => {
    const f = Ci(),
      [h] = pr(f),
      [m, y, v] = r ?? fg(f.parser, a, h, i),
      p = Kx({ ...Yx(), ...y });
    if (!m) return null;
    const x = v ? w.createElement(Xx, { base: v }, yp(c, p)) : yp(c, p);
    return w.createElement(ug.Provider, { value: p, children: x });
  };
w.forwardRef((a, i) => {
  const r = Ci(),
    [c, f] = pr(r),
    {
      to: h = "",
      href: m = h,
      onClick: y,
      asChild: v,
      children: p,
      className: x,
      replace: b,
      state: E,
      transition: O,
      ...k
    } = a,
    N = lg((L) => {
      L.ctrlKey ||
        L.metaKey ||
        L.altKey ||
        L.shiftKey ||
        L.button !== 0 ||
        (y?.(L), L.defaultPrevented || (L.preventDefault(), f(m, a)));
    }),
    j = r.hrefs(m[0] === "~" ? m.slice(1) : r.base + m, r);
  return v && w.isValidElement(p)
    ? w.cloneElement(p, { onClick: N, href: j })
    : w.createElement("a", {
        ...k,
        onClick: N,
        href: j,
        className: x?.call ? x(c === m) : x,
        children: p,
        ref: i,
      });
});
const dg = (a) =>
    Array.isArray(a)
      ? a.flatMap((i) => dg(i && i.type === w.Fragment ? i.props.children : i))
      : [a],
  Zx = ({ children: a, location: i }) => {
    const r = Ci(),
      [c] = pr(r);
    for (const f of dg(a)) {
      let h = 0;
      if (
        w.isValidElement(f) &&
        (h = fg(r.parser, f.props.path, i || c, f.props.nest))[0]
      )
        return w.cloneElement(f, { match: h });
    }
    return null;
  };
var Oi = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(a) {
      return (
        this.listeners.add(a),
        this.onSubscribe(),
        () => {
          this.listeners.delete(a), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Fx = {
    setTimeout: (a, i) => setTimeout(a, i),
    clearTimeout: (a) => clearTimeout(a),
    setInterval: (a, i) => setInterval(a, i),
    clearInterval: (a) => clearInterval(a),
  },
  Jx = class {
    #e = Fx;
    #t = !1;
    setTimeoutProvider(a) {
      this.#e = a;
    }
    setTimeout(a, i) {
      return this.#e.setTimeout(a, i);
    }
    clearTimeout(a) {
      this.#e.clearTimeout(a);
    }
    setInterval(a, i) {
      return this.#e.setInterval(a, i);
    }
    clearInterval(a) {
      this.#e.clearInterval(a);
    }
  },
  Na = new Jx();
function Px(a) {
  setTimeout(a, 0);
}
var Ca = typeof window > "u" || "Deno" in globalThis;
function mt() {}
function $x(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function hu(a) {
  return typeof a == "number" && a >= 0 && a !== 1 / 0;
}
function hg(a, i) {
  return Math.max(a + (i || 0) - Date.now(), 0);
}
function ea(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function qt(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function vp(a, i) {
  const {
    type: r = "all",
    exact: c,
    fetchStatus: f,
    predicate: h,
    queryKey: m,
    stale: y,
  } = a;
  if (m) {
    if (c) {
      if (i.queryHash !== ku(m, i.options)) return !1;
    } else if (!Ai(i.queryKey, m)) return !1;
  }
  if (r !== "all") {
    const v = i.isActive();
    if ((r === "active" && !v) || (r === "inactive" && v)) return !1;
  }
  return !(
    (typeof y == "boolean" && i.isStale() !== y) ||
    (f && f !== i.state.fetchStatus) ||
    (h && !h(i))
  );
}
function xp(a, i) {
  const { exact: r, status: c, predicate: f, mutationKey: h } = a;
  if (h) {
    if (!i.options.mutationKey) return !1;
    if (r) {
      if (Ei(i.options.mutationKey) !== Ei(h)) return !1;
    } else if (!Ai(i.options.mutationKey, h)) return !1;
  }
  return !((c && i.state.status !== c) || (f && !f(i)));
}
function ku(a, i) {
  return (i?.queryKeyHashFn || Ei)(a);
}
function Ei(a) {
  return JSON.stringify(a, (i, r) =>
    pu(r)
      ? Object.keys(r)
          .sort()
          .reduce((c, f) => ((c[f] = r[f]), c), {})
      : r
  );
}
function Ai(a, i) {
  return a === i
    ? !0
    : typeof a != typeof i
    ? !1
    : a && i && typeof a == "object" && typeof i == "object"
    ? Object.keys(i).every((r) => Ai(a[r], i[r]))
    : !1;
}
var Wx = Object.prototype.hasOwnProperty;
function mg(a, i, r = 0) {
  if (a === i) return a;
  if (r > 500) return i;
  const c = bp(a) && bp(i);
  if (!c && !(pu(a) && pu(i))) return i;
  const h = (c ? a : Object.keys(a)).length,
    m = c ? i : Object.keys(i),
    y = m.length,
    v = c ? new Array(y) : {};
  let p = 0;
  for (let x = 0; x < y; x++) {
    const b = c ? x : m[x],
      E = a[b],
      O = i[b];
    if (E === O) {
      (v[b] = E), (c ? x < h : Wx.call(a, b)) && p++;
      continue;
    }
    if (
      E === null ||
      O === null ||
      typeof E != "object" ||
      typeof O != "object"
    ) {
      v[b] = O;
      continue;
    }
    const k = mg(E, O, r + 1);
    (v[b] = k), k === E && p++;
  }
  return h === y && p === h ? a : v;
}
function mu(a, i) {
  if (!i || Object.keys(a).length !== Object.keys(i).length) return !1;
  for (const r in a) if (a[r] !== i[r]) return !1;
  return !0;
}
function bp(a) {
  return Array.isArray(a) && a.length === Object.keys(a).length;
}
function pu(a) {
  if (!wp(a)) return !1;
  const i = a.constructor;
  if (i === void 0) return !0;
  const r = i.prototype;
  return !(
    !wp(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(a) !== Object.prototype
  );
}
function wp(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function Ix(a) {
  return new Promise((i) => {
    Na.setTimeout(i, a);
  });
}
function gu(a, i, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(a, i)
    : r.structuralSharing !== !1
    ? mg(a, i)
    : i;
}
function eb(a, i, r = 0) {
  const c = [...a, i];
  return r && c.length > r ? c.slice(1) : c;
}
function tb(a, i, r = 0) {
  const c = [i, ...a];
  return r && c.length > r ? c.slice(0, -1) : c;
}
var _u = Symbol();
function pg(a, i) {
  return !a.queryFn && i?.initialPromise
    ? () => i.initialPromise
    : !a.queryFn || a.queryFn === _u
    ? () => Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`))
    : a.queryFn;
}
function gg(a, i) {
  return typeof a == "function" ? a(...i) : !!a;
}
function nb(a, i, r) {
  let c = !1,
    f;
  return (
    Object.defineProperty(a, "signal", {
      enumerable: !0,
      get: () => (
        (f ??= i()),
        c ||
          ((c = !0),
          f.aborted ? r() : f.addEventListener("abort", r, { once: !0 })),
        f
      ),
    }),
    a
  );
}
var ab = class extends Oi {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (a) => {
          if (!Ca && window.addEventListener) {
            const i = () => a();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(a) {
      (this.#n = a),
        this.#t?.(),
        (this.#t = a((i) => {
          typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
        }));
    }
    setFocused(a) {
      this.#e !== a && ((this.#e = a), this.onFocus());
    }
    onFocus() {
      const a = this.isFocused();
      this.listeners.forEach((i) => {
        i(a);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  zu = new ab();
function yu() {
  let a, i;
  const r = new Promise((f, h) => {
    (a = f), (i = h);
  });
  (r.status = "pending"), r.catch(() => {});
  function c(f) {
    Object.assign(r, f), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (f) => {
      c({ status: "fulfilled", value: f }), a(f);
    }),
    (r.reject = (f) => {
      c({ status: "rejected", reason: f }), i(f);
    }),
    r
  );
}
var lb = Px;
function ib() {
  let a = [],
    i = 0,
    r = (y) => {
      y();
    },
    c = (y) => {
      y();
    },
    f = lb;
  const h = (y) => {
      i
        ? a.push(y)
        : f(() => {
            r(y);
          });
    },
    m = () => {
      const y = a;
      (a = []),
        y.length &&
          f(() => {
            c(() => {
              y.forEach((v) => {
                r(v);
              });
            });
          });
    };
  return {
    batch: (y) => {
      let v;
      i++;
      try {
        v = y();
      } finally {
        i--, i || m();
      }
      return v;
    },
    batchCalls:
      (y) =>
      (...v) => {
        h(() => {
          y(...v);
        });
      },
    schedule: h,
    setNotifyFunction: (y) => {
      r = y;
    },
    setBatchNotifyFunction: (y) => {
      c = y;
    },
    setScheduler: (y) => {
      f = y;
    },
  };
}
var lt = ib(),
  sb = class extends Oi {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (a) => {
          if (!Ca && window.addEventListener) {
            const i = () => a(!0),
              r = () => a(!1);
            return (
              window.addEventListener("online", i, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", i),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(a) {
      (this.#n = a), this.#t?.(), (this.#t = a(this.setOnline.bind(this)));
    }
    setOnline(a) {
      this.#e !== a &&
        ((this.#e = a),
        this.listeners.forEach((r) => {
          r(a);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  or = new sb();
function rb(a) {
  return Math.min(1e3 * 2 ** a, 3e4);
}
function yg(a) {
  return (a ?? "online") === "online" ? or.isOnline() : !0;
}
var vu = class extends Error {
  constructor(a) {
    super("CancelledError"),
      (this.revert = a?.revert),
      (this.silent = a?.silent);
  }
};
function vg(a) {
  let i = !1,
    r = 0,
    c;
  const f = yu(),
    h = () => f.status !== "pending",
    m = (N) => {
      if (!h()) {
        const j = new vu(N);
        E(j), a.onCancel?.(j);
      }
    },
    y = () => {
      i = !0;
    },
    v = () => {
      i = !1;
    },
    p = () =>
      zu.isFocused() &&
      (a.networkMode === "always" || or.isOnline()) &&
      a.canRun(),
    x = () => yg(a.networkMode) && a.canRun(),
    b = (N) => {
      h() || (c?.(), f.resolve(N));
    },
    E = (N) => {
      h() || (c?.(), f.reject(N));
    },
    O = () =>
      new Promise((N) => {
        (c = (j) => {
          (h() || p()) && N(j);
        }),
          a.onPause?.();
      }).then(() => {
        (c = void 0), h() || a.onContinue?.();
      }),
    k = () => {
      if (h()) return;
      let N;
      const j = r === 0 ? a.initialPromise : void 0;
      try {
        N = j ?? a.fn();
      } catch (L) {
        N = Promise.reject(L);
      }
      Promise.resolve(N)
        .then(b)
        .catch((L) => {
          if (h()) return;
          const G = a.retry ?? (Ca ? 0 : 3),
            Y = a.retryDelay ?? rb,
            Z = typeof Y == "function" ? Y(r, L) : Y,
            P =
              G === !0 ||
              (typeof G == "number" && r < G) ||
              (typeof G == "function" && G(r, L));
          if (i || !P) {
            E(L);
            return;
          }
          r++,
            a.onFail?.(r, L),
            Ix(Z)
              .then(() => (p() ? void 0 : O()))
              .then(() => {
                i ? E(L) : k();
              });
        });
    };
  return {
    promise: f,
    status: () => f.status,
    cancel: m,
    continue: () => (c?.(), f),
    cancelRetry: y,
    continueRetry: v,
    canStart: x,
    start: () => (x() ? k() : O().then(k), f),
  };
}
var xg = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        hu(this.gcTime) &&
          (this.#e = Na.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(a) {
      this.gcTime = Math.max(this.gcTime || 0, a ?? (Ca ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e && (Na.clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  ob = class extends xg {
    #e;
    #t;
    #n;
    #l;
    #a;
    #r;
    #s;
    constructor(a) {
      super(),
        (this.#s = !1),
        (this.#r = a.defaultOptions),
        this.setOptions(a.options),
        (this.observers = []),
        (this.#l = a.client),
        (this.#n = this.#l.getQueryCache()),
        (this.queryKey = a.queryKey),
        (this.queryHash = a.queryHash),
        (this.#e = Ep(this.options)),
        (this.state = a.state ?? this.#e),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#a?.promise;
    }
    setOptions(a) {
      if (
        ((this.options = { ...this.#r, ...a }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const i = Ep(this.options);
        i.data !== void 0 &&
          (this.setState(Sp(i.data, i.dataUpdatedAt)), (this.#e = i));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(a, i) {
      const r = gu(this.state.data, a, this.options);
      return (
        this.#i({
          data: r,
          type: "success",
          dataUpdatedAt: i?.updatedAt,
          manual: i?.manual,
        }),
        r
      );
    }
    setState(a, i) {
      this.#i({ type: "setState", state: a, setStateOptions: i });
    }
    cancel(a) {
      const i = this.#a?.promise;
      return this.#a?.cancel(a), i ? i.then(mt).catch(mt) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    reset() {
      this.destroy(), this.setState(this.#e);
    }
    isActive() {
      return this.observers.some((a) => qt(a.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === _u ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((a) => ea(a.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((a) => a.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(a = 0) {
      return this.state.data === void 0
        ? !0
        : a === "static"
        ? !1
        : this.state.isInvalidated
        ? !0
        : !hg(this.state.dataUpdatedAt, a);
    }
    onFocus() {
      this.observers
        .find((i) => i.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue();
    }
    onOnline() {
      this.observers
        .find((i) => i.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue();
    }
    addObserver(a) {
      this.observers.includes(a) ||
        (this.observers.push(a),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: a }));
    }
    removeObserver(a) {
      this.observers.includes(a) &&
        ((this.observers = this.observers.filter((i) => i !== a)),
        this.observers.length ||
          (this.#a &&
            (this.#s ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: a }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#i({ type: "invalidate" });
    }
    async fetch(a, i) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#a?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && i?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
      }
      if ((a && this.setOptions(a), !this.options.queryFn)) {
        const y = this.observers.find((v) => v.options.queryFn);
        y && this.setOptions(y.options);
      }
      const r = new AbortController(),
        c = (y) => {
          Object.defineProperty(y, "signal", {
            enumerable: !0,
            get: () => ((this.#s = !0), r.signal),
          });
        },
        f = () => {
          const y = pg(this.options, i),
            p = (() => {
              const x = {
                client: this.#l,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return c(x), x;
            })();
          return (
            (this.#s = !1),
            this.options.persister ? this.options.persister(y, p, this) : y(p)
          );
        },
        m = (() => {
          const y = {
            fetchOptions: i,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#l,
            state: this.state,
            fetchFn: f,
          };
          return c(y), y;
        })();
      this.options.behavior?.onFetch(m, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== m.fetchOptions?.meta) &&
          this.#i({ type: "fetch", meta: m.fetchOptions?.meta }),
        (this.#a = vg({
          initialPromise: i?.initialPromise,
          fn: m.fetchFn,
          onCancel: (y) => {
            y instanceof vu &&
              y.revert &&
              this.setState({ ...this.#t, fetchStatus: "idle" }),
              r.abort();
          },
          onFail: (y, v) => {
            this.#i({ type: "failed", failureCount: y, error: v });
          },
          onPause: () => {
            this.#i({ type: "pause" });
          },
          onContinue: () => {
            this.#i({ type: "continue" });
          },
          retry: m.options.retry,
          retryDelay: m.options.retryDelay,
          networkMode: m.options.networkMode,
          canRun: () => !0,
        }));
      try {
        const y = await this.#a.start();
        if (y === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(y),
          this.#n.config.onSuccess?.(y, this),
          this.#n.config.onSettled?.(y, this.state.error, this),
          y
        );
      } catch (y) {
        if (y instanceof vu) {
          if (y.silent) return this.#a.promise;
          if (y.revert) {
            if (this.state.data === void 0) throw y;
            return this.state.data;
          }
        }
        throw (
          (this.#i({ type: "error", error: y }),
          this.#n.config.onError?.(y, this),
          this.#n.config.onSettled?.(this.state.data, y, this),
          y)
        );
      } finally {
        this.scheduleGc();
      }
    }
    #i(a) {
      const i = (r) => {
        switch (a.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: a.failureCount,
              fetchFailureReason: a.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...bg(r.data, this.options),
              fetchMeta: a.meta ?? null,
            };
          case "success":
            const c = {
              ...r,
              ...Sp(a.data, a.dataUpdatedAt),
              dataUpdateCount: r.dataUpdateCount + 1,
              ...(!a.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return (this.#t = a.manual ? c : void 0), c;
          case "error":
            const f = a.error;
            return {
              ...r,
              error: f,
              errorUpdateCount: r.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: r.fetchFailureCount + 1,
              fetchFailureReason: f,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...a.state };
        }
      };
      (this.state = i(this.state)),
        lt.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: a });
        });
    }
  };
function bg(a, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: yg(i.networkMode) ? "fetching" : "paused",
    ...(a === void 0 && { error: null, status: "pending" }),
  };
}
function Sp(a, i) {
  return {
    data: a,
    dataUpdatedAt: i ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function Ep(a) {
  const i =
      typeof a.initialData == "function" ? a.initialData() : a.initialData,
    r = i !== void 0,
    c = r
      ? typeof a.initialDataUpdatedAt == "function"
        ? a.initialDataUpdatedAt()
        : a.initialDataUpdatedAt
      : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? c ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var cb = class extends Oi {
  constructor(a, i) {
    super(),
      (this.options = i),
      (this.#e = a),
      (this.#i = null),
      (this.#s = yu()),
      this.bindMethods(),
      this.setOptions(i);
  }
  #e;
  #t = void 0;
  #n = void 0;
  #l = void 0;
  #a;
  #r;
  #s;
  #i;
  #p;
  #d;
  #h;
  #c;
  #u;
  #o;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      Ap(this.#t, this.options) ? this.#f() : this.updateResult(),
      this.#x());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return xu(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return xu(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    (this.listeners = new Set()),
      this.#b(),
      this.#w(),
      this.#t.removeObserver(this);
  }
  setOptions(a) {
    const i = this.options,
      r = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(a)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof qt(this.options.enabled, this.#t) != "boolean")
    )
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    this.#S(),
      this.#t.setOptions(this.options),
      i._defaulted &&
        !mu(this.options, i) &&
        this.#e
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this,
          });
    const c = this.hasListeners();
    c && Tp(this.#t, r, this.options, i) && this.#f(),
      this.updateResult(),
      c &&
        (this.#t !== r ||
          qt(this.options.enabled, this.#t) !== qt(i.enabled, this.#t) ||
          ea(this.options.staleTime, this.#t) !== ea(i.staleTime, this.#t)) &&
        this.#g();
    const f = this.#y();
    c &&
      (this.#t !== r ||
        qt(this.options.enabled, this.#t) !== qt(i.enabled, this.#t) ||
        f !== this.#o) &&
      this.#v(f);
  }
  getOptimisticResult(a) {
    const i = this.#e.getQueryCache().build(this.#e, a),
      r = this.createResult(i, a);
    return (
      fb(this, r) &&
        ((this.#l = r), (this.#r = this.options), (this.#a = this.#t.state)),
      r
    );
  }
  getCurrentResult() {
    return this.#l;
  }
  trackResult(a, i) {
    return new Proxy(a, {
      get: (r, c) => (
        this.trackProp(c),
        i?.(c),
        c === "promise" &&
          (this.trackProp("data"),
          !this.options.experimental_prefetchInRender &&
            this.#s.status === "pending" &&
            this.#s.reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            )),
        Reflect.get(r, c)
      ),
    });
  }
  trackProp(a) {
    this.#m.add(a);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...a } = {}) {
    return this.fetch({ ...a });
  }
  fetchOptimistic(a) {
    const i = this.#e.defaultQueryOptions(a),
      r = this.#e.getQueryCache().build(this.#e, i);
    return r.fetch().then(() => this.createResult(r, i));
  }
  fetch(a) {
    return this.#f({ ...a, cancelRefetch: a.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#l)
    );
  }
  #f(a) {
    this.#S();
    let i = this.#t.fetch(this.options, a);
    return a?.throwOnError || (i = i.catch(mt)), i;
  }
  #g() {
    this.#b();
    const a = ea(this.options.staleTime, this.#t);
    if (Ca || this.#l.isStale || !hu(a)) return;
    const r = hg(this.#l.dataUpdatedAt, a) + 1;
    this.#c = Na.setTimeout(() => {
      this.#l.isStale || this.updateResult();
    }, r);
  }
  #y() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(a) {
    this.#w(),
      (this.#o = a),
      !(
        Ca ||
        qt(this.options.enabled, this.#t) === !1 ||
        !hu(this.#o) ||
        this.#o === 0
      ) &&
        (this.#u = Na.setInterval(() => {
          (this.options.refetchIntervalInBackground || zu.isFocused()) &&
            this.#f();
        }, this.#o));
  }
  #x() {
    this.#g(), this.#v(this.#y());
  }
  #b() {
    this.#c && (Na.clearTimeout(this.#c), (this.#c = void 0));
  }
  #w() {
    this.#u && (Na.clearInterval(this.#u), (this.#u = void 0));
  }
  createResult(a, i) {
    const r = this.#t,
      c = this.options,
      f = this.#l,
      h = this.#a,
      m = this.#r,
      v = a !== r ? a.state : this.#n,
      { state: p } = a;
    let x = { ...p },
      b = !1,
      E;
    if (i._optimisticResults) {
      const K = this.hasListeners(),
        se = !K && Ap(a, i),
        ue = K && Tp(a, r, i, c);
      (se || ue) && (x = { ...x, ...bg(p.data, a.options) }),
        i._optimisticResults === "isRestoring" && (x.fetchStatus = "idle");
    }
    let { error: O, errorUpdatedAt: k, status: N } = x;
    E = x.data;
    let j = !1;
    if (i.placeholderData !== void 0 && E === void 0 && N === "pending") {
      let K;
      f?.isPlaceholderData && i.placeholderData === m?.placeholderData
        ? ((K = f.data), (j = !0))
        : (K =
            typeof i.placeholderData == "function"
              ? i.placeholderData(this.#h?.state.data, this.#h)
              : i.placeholderData),
        K !== void 0 && ((N = "success"), (E = gu(f?.data, K, i)), (b = !0));
    }
    if (i.select && E !== void 0 && !j)
      if (f && E === h?.data && i.select === this.#p) E = this.#d;
      else
        try {
          (this.#p = i.select),
            (E = i.select(E)),
            (E = gu(f?.data, E, i)),
            (this.#d = E),
            (this.#i = null);
        } catch (K) {
          this.#i = K;
        }
    this.#i && ((O = this.#i), (E = this.#d), (k = Date.now()), (N = "error"));
    const L = x.fetchStatus === "fetching",
      G = N === "pending",
      Y = N === "error",
      Z = G && L,
      P = E !== void 0,
      Q = {
        status: N,
        fetchStatus: x.fetchStatus,
        isPending: G,
        isSuccess: N === "success",
        isError: Y,
        isInitialLoading: Z,
        isLoading: Z,
        data: E,
        dataUpdatedAt: x.dataUpdatedAt,
        error: O,
        errorUpdatedAt: k,
        failureCount: x.fetchFailureCount,
        failureReason: x.fetchFailureReason,
        errorUpdateCount: x.errorUpdateCount,
        isFetched: x.dataUpdateCount > 0 || x.errorUpdateCount > 0,
        isFetchedAfterMount:
          x.dataUpdateCount > v.dataUpdateCount ||
          x.errorUpdateCount > v.errorUpdateCount,
        isFetching: L,
        isRefetching: L && !G,
        isLoadingError: Y && !P,
        isPaused: x.fetchStatus === "paused",
        isPlaceholderData: b,
        isRefetchError: Y && P,
        isStale: Du(a, i),
        refetch: this.refetch,
        promise: this.#s,
        isEnabled: qt(i.enabled, a) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      const K = Q.data !== void 0,
        se = Q.status === "error" && !K,
        ue = (fe) => {
          se ? fe.reject(Q.error) : K && fe.resolve(Q.data);
        },
        he = () => {
          const fe = (this.#s = Q.promise = yu());
          ue(fe);
        },
        J = this.#s;
      switch (J.status) {
        case "pending":
          a.queryHash === r.queryHash && ue(J);
          break;
        case "fulfilled":
          (se || Q.data !== J.value) && he();
          break;
        case "rejected":
          (!se || Q.error !== J.reason) && he();
          break;
      }
    }
    return Q;
  }
  updateResult() {
    const a = this.#l,
      i = this.createResult(this.#t, this.options);
    if (
      ((this.#a = this.#t.state),
      (this.#r = this.options),
      this.#a.data !== void 0 && (this.#h = this.#t),
      mu(i, a))
    )
      return;
    this.#l = i;
    const r = () => {
      if (!a) return !0;
      const { notifyOnChangeProps: c } = this.options,
        f = typeof c == "function" ? c() : c;
      if (f === "all" || (!f && !this.#m.size)) return !0;
      const h = new Set(f ?? this.#m);
      return (
        this.options.throwOnError && h.add("error"),
        Object.keys(this.#l).some((m) => {
          const y = m;
          return this.#l[y] !== a[y] && h.has(y);
        })
      );
    };
    this.#E({ listeners: r() });
  }
  #S() {
    const a = this.#e.getQueryCache().build(this.#e, this.options);
    if (a === this.#t) return;
    const i = this.#t;
    (this.#t = a),
      (this.#n = a.state),
      this.hasListeners() && (i?.removeObserver(this), a.addObserver(this));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && this.#x();
  }
  #E(a) {
    lt.batch(() => {
      a.listeners &&
        this.listeners.forEach((i) => {
          i(this.#l);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: "observerResultsUpdated" });
    });
  }
};
function ub(a, i) {
  return (
    qt(i.enabled, a) !== !1 &&
    a.state.data === void 0 &&
    !(a.state.status === "error" && i.retryOnMount === !1)
  );
}
function Ap(a, i) {
  return ub(a, i) || (a.state.data !== void 0 && xu(a, i, i.refetchOnMount));
}
function xu(a, i, r) {
  if (qt(i.enabled, a) !== !1 && ea(i.staleTime, a) !== "static") {
    const c = typeof r == "function" ? r(a) : r;
    return c === "always" || (c !== !1 && Du(a, i));
  }
  return !1;
}
function Tp(a, i, r, c) {
  return (
    (a !== i || qt(c.enabled, a) === !1) &&
    (!r.suspense || a.state.status !== "error") &&
    Du(a, r)
  );
}
function Du(a, i) {
  return qt(i.enabled, a) !== !1 && a.isStaleByTime(ea(i.staleTime, a));
}
function fb(a, i) {
  return !mu(a.getCurrentResult(), i);
}
function jp(a) {
  return {
    onFetch: (i, r) => {
      const c = i.options,
        f = i.fetchOptions?.meta?.fetchMore?.direction,
        h = i.state.data?.pages || [],
        m = i.state.data?.pageParams || [];
      let y = { pages: [], pageParams: [] },
        v = 0;
      const p = async () => {
        let x = !1;
        const b = (k) => {
            nb(
              k,
              () => i.signal,
              () => (x = !0)
            );
          },
          E = pg(i.options, i.fetchOptions),
          O = async (k, N, j) => {
            if (x) return Promise.reject();
            if (N == null && k.pages.length) return Promise.resolve(k);
            const G = (() => {
                const I = {
                  client: i.client,
                  queryKey: i.queryKey,
                  pageParam: N,
                  direction: j ? "backward" : "forward",
                  meta: i.options.meta,
                };
                return b(I), I;
              })(),
              Y = await E(G),
              { maxPages: Z } = i.options,
              P = j ? tb : eb;
            return {
              pages: P(k.pages, Y, Z),
              pageParams: P(k.pageParams, N, Z),
            };
          };
        if (f && h.length) {
          const k = f === "backward",
            N = k ? db : Np,
            j = { pages: h, pageParams: m },
            L = N(c, j);
          y = await O(j, L, k);
        } else {
          const k = a ?? h.length;
          do {
            const N = v === 0 ? m[0] ?? c.initialPageParam : Np(c, y);
            if (v > 0 && N == null) break;
            (y = await O(y, N)), v++;
          } while (v < k);
        }
        return y;
      };
      i.options.persister
        ? (i.fetchFn = () =>
            i.options.persister?.(
              p,
              {
                client: i.client,
                queryKey: i.queryKey,
                meta: i.options.meta,
                signal: i.signal,
              },
              r
            ))
        : (i.fetchFn = p);
    },
  };
}
function Np(a, { pages: i, pageParams: r }) {
  const c = i.length - 1;
  return i.length > 0 ? a.getNextPageParam(i[c], i, r[c], r) : void 0;
}
function db(a, { pages: i, pageParams: r }) {
  return i.length > 0 ? a.getPreviousPageParam?.(i[0], i, r[0], r) : void 0;
}
var hb = class extends xg {
  #e;
  #t;
  #n;
  #l;
  constructor(a) {
    super(),
      (this.#e = a.client),
      (this.mutationId = a.mutationId),
      (this.#n = a.mutationCache),
      (this.#t = []),
      (this.state = a.state || mb()),
      this.setOptions(a.options),
      this.scheduleGc();
  }
  setOptions(a) {
    (this.options = a), this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(a) {
    this.#t.includes(a) ||
      (this.#t.push(a),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: a }));
  }
  removeObserver(a) {
    (this.#t = this.#t.filter((i) => i !== a)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: a });
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#l?.continue() ?? this.execute(this.state.variables);
  }
  async execute(a) {
    const i = () => {
        this.#a({ type: "continue" });
      },
      r = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#l = vg({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(a, r)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (h, m) => {
        this.#a({ type: "failed", failureCount: h, error: m });
      },
      onPause: () => {
        this.#a({ type: "pause" });
      },
      onContinue: i,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const c = this.state.status === "pending",
      f = !this.#l.canStart();
    try {
      if (c) i();
      else {
        this.#a({ type: "pending", variables: a, isPaused: f }),
          await this.#n.config.onMutate?.(a, this, r);
        const m = await this.options.onMutate?.(a, r);
        m !== this.state.context &&
          this.#a({ type: "pending", context: m, variables: a, isPaused: f });
      }
      const h = await this.#l.start();
      return (
        await this.#n.config.onSuccess?.(h, a, this.state.context, this, r),
        await this.options.onSuccess?.(h, a, this.state.context, r),
        await this.#n.config.onSettled?.(
          h,
          null,
          this.state.variables,
          this.state.context,
          this,
          r
        ),
        await this.options.onSettled?.(h, null, a, this.state.context, r),
        this.#a({ type: "success", data: h }),
        h
      );
    } catch (h) {
      try {
        await this.#n.config.onError?.(h, a, this.state.context, this, r);
      } catch (m) {
        Promise.reject(m);
      }
      try {
        await this.options.onError?.(h, a, this.state.context, r);
      } catch (m) {
        Promise.reject(m);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          h,
          this.state.variables,
          this.state.context,
          this,
          r
        );
      } catch (m) {
        Promise.reject(m);
      }
      try {
        await this.options.onSettled?.(void 0, h, a, this.state.context, r);
      } catch (m) {
        Promise.reject(m);
      }
      throw (this.#a({ type: "error", error: h }), h);
    } finally {
      this.#n.runNext(this);
    }
  }
  #a(a) {
    const i = (r) => {
      switch (a.type) {
        case "failed":
          return { ...r, failureCount: a.failureCount, failureReason: a.error };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "pending":
          return {
            ...r,
            context: a.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: a.isPaused,
            status: "pending",
            variables: a.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...r,
            data: a.data,
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
            error: a.error,
            failureCount: r.failureCount + 1,
            failureReason: a.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    (this.state = i(this.state)),
      lt.batch(() => {
        this.#t.forEach((r) => {
          r.onMutationUpdate(a);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: a });
      });
  }
};
function mb() {
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
var pb = class extends Oi {
  constructor(a = {}) {
    super(),
      (this.config = a),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0);
  }
  #e;
  #t;
  #n;
  build(a, i, r) {
    const c = new hb({
      client: a,
      mutationCache: this,
      mutationId: ++this.#n,
      options: a.defaultMutationOptions(i),
      state: r,
    });
    return this.add(c), c;
  }
  add(a) {
    this.#e.add(a);
    const i = Ps(a);
    if (typeof i == "string") {
      const r = this.#t.get(i);
      r ? r.push(a) : this.#t.set(i, [a]);
    }
    this.notify({ type: "added", mutation: a });
  }
  remove(a) {
    if (this.#e.delete(a)) {
      const i = Ps(a);
      if (typeof i == "string") {
        const r = this.#t.get(i);
        if (r)
          if (r.length > 1) {
            const c = r.indexOf(a);
            c !== -1 && r.splice(c, 1);
          } else r[0] === a && this.#t.delete(i);
      }
    }
    this.notify({ type: "removed", mutation: a });
  }
  canRun(a) {
    const i = Ps(a);
    if (typeof i == "string") {
      const c = this.#t.get(i)?.find((f) => f.state.status === "pending");
      return !c || c === a;
    } else return !0;
  }
  runNext(a) {
    const i = Ps(a);
    return typeof i == "string"
      ? this.#t
          .get(i)
          ?.find((c) => c !== a && c.state.isPaused)
          ?.continue() ?? Promise.resolve()
      : Promise.resolve();
  }
  clear() {
    lt.batch(() => {
      this.#e.forEach((a) => {
        this.notify({ type: "removed", mutation: a });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(a) {
    const i = { exact: !0, ...a };
    return this.getAll().find((r) => xp(i, r));
  }
  findAll(a = {}) {
    return this.getAll().filter((i) => xp(a, i));
  }
  notify(a) {
    lt.batch(() => {
      this.listeners.forEach((i) => {
        i(a);
      });
    });
  }
  resumePausedMutations() {
    const a = this.getAll().filter((i) => i.state.isPaused);
    return lt.batch(() => Promise.all(a.map((i) => i.continue().catch(mt))));
  }
};
function Ps(a) {
  return a.options.scope?.id;
}
var gb = class extends Oi {
    constructor(a = {}) {
      super(), (this.config = a), (this.#e = new Map());
    }
    #e;
    build(a, i, r) {
      const c = i.queryKey,
        f = i.queryHash ?? ku(c, i);
      let h = this.get(f);
      return (
        h ||
          ((h = new ob({
            client: a,
            queryKey: c,
            queryHash: f,
            options: a.defaultQueryOptions(i),
            state: r,
            defaultOptions: a.getQueryDefaults(c),
          })),
          this.add(h)),
        h
      );
    }
    add(a) {
      this.#e.has(a.queryHash) ||
        (this.#e.set(a.queryHash, a), this.notify({ type: "added", query: a }));
    }
    remove(a) {
      const i = this.#e.get(a.queryHash);
      i &&
        (a.destroy(),
        i === a && this.#e.delete(a.queryHash),
        this.notify({ type: "removed", query: a }));
    }
    clear() {
      lt.batch(() => {
        this.getAll().forEach((a) => {
          this.remove(a);
        });
      });
    }
    get(a) {
      return this.#e.get(a);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(a) {
      const i = { exact: !0, ...a };
      return this.getAll().find((r) => vp(i, r));
    }
    findAll(a = {}) {
      const i = this.getAll();
      return Object.keys(a).length > 0 ? i.filter((r) => vp(a, r)) : i;
    }
    notify(a) {
      lt.batch(() => {
        this.listeners.forEach((i) => {
          i(a);
        });
      });
    }
    onFocus() {
      lt.batch(() => {
        this.getAll().forEach((a) => {
          a.onFocus();
        });
      });
    }
    onOnline() {
      lt.batch(() => {
        this.getAll().forEach((a) => {
          a.onOnline();
        });
      });
    }
  },
  yb = class {
    #e;
    #t;
    #n;
    #l;
    #a;
    #r;
    #s;
    #i;
    constructor(a = {}) {
      (this.#e = a.queryCache || new gb()),
        (this.#t = a.mutationCache || new pb()),
        (this.#n = a.defaultOptions || {}),
        (this.#l = new Map()),
        (this.#a = new Map()),
        (this.#r = 0);
    }
    mount() {
      this.#r++,
        this.#r === 1 &&
          ((this.#s = zu.subscribe(async (a) => {
            a && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#i = or.subscribe(async (a) => {
            a && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#r--,
        this.#r === 0 &&
          (this.#s?.(), (this.#s = void 0), this.#i?.(), (this.#i = void 0));
    }
    isFetching(a) {
      return this.#e.findAll({ ...a, fetchStatus: "fetching" }).length;
    }
    isMutating(a) {
      return this.#t.findAll({ ...a, status: "pending" }).length;
    }
    getQueryData(a) {
      const i = this.defaultQueryOptions({ queryKey: a });
      return this.#e.get(i.queryHash)?.state.data;
    }
    ensureQueryData(a) {
      const i = this.defaultQueryOptions(a),
        r = this.#e.build(this, i),
        c = r.state.data;
      return c === void 0
        ? this.fetchQuery(a)
        : (a.revalidateIfStale &&
            r.isStaleByTime(ea(i.staleTime, r)) &&
            this.prefetchQuery(i),
          Promise.resolve(c));
    }
    getQueriesData(a) {
      return this.#e.findAll(a).map(({ queryKey: i, state: r }) => {
        const c = r.data;
        return [i, c];
      });
    }
    setQueryData(a, i, r) {
      const c = this.defaultQueryOptions({ queryKey: a }),
        h = this.#e.get(c.queryHash)?.state.data,
        m = $x(i, h);
      if (m !== void 0)
        return this.#e.build(this, c).setData(m, { ...r, manual: !0 });
    }
    setQueriesData(a, i, r) {
      return lt.batch(() =>
        this.#e
          .findAll(a)
          .map(({ queryKey: c }) => [c, this.setQueryData(c, i, r)])
      );
    }
    getQueryState(a) {
      const i = this.defaultQueryOptions({ queryKey: a });
      return this.#e.get(i.queryHash)?.state;
    }
    removeQueries(a) {
      const i = this.#e;
      lt.batch(() => {
        i.findAll(a).forEach((r) => {
          i.remove(r);
        });
      });
    }
    resetQueries(a, i) {
      const r = this.#e;
      return lt.batch(
        () => (
          r.findAll(a).forEach((c) => {
            c.reset();
          }),
          this.refetchQueries({ type: "active", ...a }, i)
        )
      );
    }
    cancelQueries(a, i = {}) {
      const r = { revert: !0, ...i },
        c = lt.batch(() => this.#e.findAll(a).map((f) => f.cancel(r)));
      return Promise.all(c).then(mt).catch(mt);
    }
    invalidateQueries(a, i = {}) {
      return lt.batch(
        () => (
          this.#e.findAll(a).forEach((r) => {
            r.invalidate();
          }),
          a?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...a, type: a?.refetchType ?? a?.type ?? "active" },
                i
              )
        )
      );
    }
    refetchQueries(a, i = {}) {
      const r = { ...i, cancelRefetch: i.cancelRefetch ?? !0 },
        c = lt.batch(() =>
          this.#e
            .findAll(a)
            .filter((f) => !f.isDisabled() && !f.isStatic())
            .map((f) => {
              let h = f.fetch(void 0, r);
              return (
                r.throwOnError || (h = h.catch(mt)),
                f.state.fetchStatus === "paused" ? Promise.resolve() : h
              );
            })
        );
      return Promise.all(c).then(mt);
    }
    fetchQuery(a) {
      const i = this.defaultQueryOptions(a);
      i.retry === void 0 && (i.retry = !1);
      const r = this.#e.build(this, i);
      return r.isStaleByTime(ea(i.staleTime, r))
        ? r.fetch(i)
        : Promise.resolve(r.state.data);
    }
    prefetchQuery(a) {
      return this.fetchQuery(a).then(mt).catch(mt);
    }
    fetchInfiniteQuery(a) {
      return (a.behavior = jp(a.pages)), this.fetchQuery(a);
    }
    prefetchInfiniteQuery(a) {
      return this.fetchInfiniteQuery(a).then(mt).catch(mt);
    }
    ensureInfiniteQueryData(a) {
      return (a.behavior = jp(a.pages)), this.ensureQueryData(a);
    }
    resumePausedMutations() {
      return or.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(a) {
      this.#n = a;
    }
    setQueryDefaults(a, i) {
      this.#l.set(Ei(a), { queryKey: a, defaultOptions: i });
    }
    getQueryDefaults(a) {
      const i = [...this.#l.values()],
        r = {};
      return (
        i.forEach((c) => {
          Ai(a, c.queryKey) && Object.assign(r, c.defaultOptions);
        }),
        r
      );
    }
    setMutationDefaults(a, i) {
      this.#a.set(Ei(a), { mutationKey: a, defaultOptions: i });
    }
    getMutationDefaults(a) {
      const i = [...this.#a.values()],
        r = {};
      return (
        i.forEach((c) => {
          Ai(a, c.mutationKey) && Object.assign(r, c.defaultOptions);
        }),
        r
      );
    }
    defaultQueryOptions(a) {
      if (a._defaulted) return a;
      const i = {
        ...this.#n.queries,
        ...this.getQueryDefaults(a.queryKey),
        ...a,
        _defaulted: !0,
      };
      return (
        i.queryHash || (i.queryHash = ku(i.queryKey, i)),
        i.refetchOnReconnect === void 0 &&
          (i.refetchOnReconnect = i.networkMode !== "always"),
        i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
        !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
        i.queryFn === _u && (i.enabled = !1),
        i
      );
    }
    defaultMutationOptions(a) {
      return a?._defaulted
        ? a
        : {
            ...this.#n.mutations,
            ...(a?.mutationKey && this.getMutationDefaults(a.mutationKey)),
            ...a,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  wg = w.createContext(void 0),
  Sg = (a) => {
    const i = w.useContext(wg);
    if (!i)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return i;
  },
  vb = ({ client: a, children: i }) => (
    w.useEffect(
      () => (
        a.mount(),
        () => {
          a.unmount();
        }
      ),
      [a]
    ),
    u.jsx(wg.Provider, { value: a, children: i })
  ),
  Eg = w.createContext(!1),
  xb = () => w.useContext(Eg);
Eg.Provider;
function bb() {
  let a = !1;
  return {
    clearReset: () => {
      a = !1;
    },
    reset: () => {
      a = !0;
    },
    isReset: () => a,
  };
}
var wb = w.createContext(bb()),
  Sb = () => w.useContext(wb),
  Eb = (a, i, r) => {
    const c =
      r?.state.error && typeof a.throwOnError == "function"
        ? gg(a.throwOnError, [r.state.error, r])
        : a.throwOnError;
    (a.suspense || a.experimental_prefetchInRender || c) &&
      (i.isReset() || (a.retryOnMount = !1));
  },
  Ab = (a) => {
    w.useEffect(() => {
      a.clearReset();
    }, [a]);
  },
  Tb = ({
    result: a,
    errorResetBoundary: i,
    throwOnError: r,
    query: c,
    suspense: f,
  }) =>
    a.isError &&
    !i.isReset() &&
    !a.isFetching &&
    c &&
    ((f && a.data === void 0) || gg(r, [a.error, c])),
  jb = (a) => {
    if (a.suspense) {
      const r = (f) => (f === "static" ? f : Math.max(f ?? 1e3, 1e3)),
        c = a.staleTime;
      (a.staleTime = typeof c == "function" ? (...f) => r(c(...f)) : r(c)),
        typeof a.gcTime == "number" && (a.gcTime = Math.max(a.gcTime, 1e3));
    }
  },
  Nb = (a, i) => a.isLoading && a.isFetching && !i,
  Cb = (a, i) => a?.suspense && i.isPending,
  Cp = (a, i, r) =>
    i.fetchOptimistic(a).catch(() => {
      r.clearReset();
    });
function Ob(a, i, r) {
  const c = xb(),
    f = Sb(),
    h = Sg(),
    m = h.defaultQueryOptions(a);
  h.getDefaultOptions().queries?._experimental_beforeQuery?.(m);
  const y = h.getQueryCache().get(m.queryHash);
  (m._optimisticResults = c ? "isRestoring" : "optimistic"),
    jb(m),
    Eb(m, f, y),
    Ab(f);
  const v = !h.getQueryCache().get(m.queryHash),
    [p] = w.useState(() => new i(h, m)),
    x = p.getOptimisticResult(m),
    b = !c && a.subscribed !== !1;
  if (
    (w.useSyncExternalStore(
      w.useCallback(
        (E) => {
          const O = b ? p.subscribe(lt.batchCalls(E)) : mt;
          return p.updateResult(), O;
        },
        [p, b]
      ),
      () => p.getCurrentResult(),
      () => p.getCurrentResult()
    ),
    w.useEffect(() => {
      p.setOptions(m);
    }, [m, p]),
    Cb(m, x))
  )
    throw Cp(m, p, f);
  if (
    Tb({
      result: x,
      errorResetBoundary: f,
      throwOnError: m.throwOnError,
      query: y,
      suspense: m.suspense,
    })
  )
    throw x.error;
  return (
    h.getDefaultOptions().queries?._experimental_afterQuery?.(m, x),
    m.experimental_prefetchInRender &&
      !Ca &&
      Nb(x, c) &&
      (v ? Cp(m, p, f) : y?.promise)?.catch(mt).finally(() => {
        p.updateResult();
      }),
    m.notifyOnChangeProps ? x : p.trackResult(x)
  );
}
function Ti(a, i) {
  return Ob(a, cb);
}
async function Rb(a) {
  if (!a.ok) {
    const i = (await a.text()) || a.statusText;
    throw new Error(`${a.status}: ${i}`);
  }
}
const Mb =
    ({ on401: a }) =>
    async ({ queryKey: i }) => {
      const r = await fetch(i.join("/"), { credentials: "include" });
      return await Rb(r), await r.json();
    },
  kb = new yb({
    defaultOptions: {
      queries: {
        queryFn: Mb({ on401: "throw" }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1 / 0,
        retry: !1,
      },
      mutations: { retry: !1 },
    },
  }),
  _b = 1,
  zb = 1e6;
let Wc = 0;
function Db() {
  return (Wc = (Wc + 1) % Number.MAX_SAFE_INTEGER), Wc.toString();
}
const Ic = new Map(),
  Op = (a) => {
    if (Ic.has(a)) return;
    const i = setTimeout(() => {
      Ic.delete(a), wi({ type: "REMOVE_TOAST", toastId: a });
    }, zb);
    Ic.set(a, i);
  },
  Ub = (a, i) => {
    switch (i.type) {
      case "ADD_TOAST":
        return { ...a, toasts: [i.toast, ...a.toasts].slice(0, _b) };
      case "UPDATE_TOAST":
        return {
          ...a,
          toasts: a.toasts.map((r) =>
            r.id === i.toast.id ? { ...r, ...i.toast } : r
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: r } = i;
        return (
          r
            ? Op(r)
            : a.toasts.forEach((c) => {
                Op(c.id);
              }),
          {
            ...a,
            toasts: a.toasts.map((c) =>
              c.id === r || r === void 0 ? { ...c, open: !1 } : c
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return i.toastId === void 0
          ? { ...a, toasts: [] }
          : { ...a, toasts: a.toasts.filter((r) => r.id !== i.toastId) };
    }
  },
  ir = [];
let sr = { toasts: [] };
function wi(a) {
  (sr = Ub(sr, a)),
    ir.forEach((i) => {
      i(sr);
    });
}
function Lb({ ...a }) {
  const i = Db(),
    r = (f) => wi({ type: "UPDATE_TOAST", toast: { ...f, id: i } }),
    c = () => wi({ type: "DISMISS_TOAST", toastId: i });
  return (
    wi({
      type: "ADD_TOAST",
      toast: {
        ...a,
        id: i,
        open: !0,
        onOpenChange: (f) => {
          f || c();
        },
      },
    }),
    { id: i, dismiss: c, update: r }
  );
}
function Hb() {
  const [a, i] = w.useState(sr);
  return (
    w.useEffect(
      () => (
        ir.push(i),
        () => {
          const r = ir.indexOf(i);
          r > -1 && ir.splice(r, 1);
        }
      ),
      [a]
    ),
    {
      ...a,
      toast: Lb,
      dismiss: (r) => wi({ type: "DISMISS_TOAST", toastId: r }),
    }
  );
}
var gr = ng();
const Bb = tg(gr);
function Je(a, i, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (f) {
    if ((a?.(f), r === !1 || !f.defaultPrevented)) return i?.(f);
  };
}
function Rp(a, i) {
  if (typeof a == "function") return a(i);
  a != null && (a.current = i);
}
function Uu(...a) {
  return (i) => {
    let r = !1;
    const c = a.map((f) => {
      const h = Rp(f, i);
      return !r && typeof h == "function" && (r = !0), h;
    });
    if (r)
      return () => {
        for (let f = 0; f < c.length; f++) {
          const h = c[f];
          typeof h == "function" ? h() : Rp(a[f], null);
        }
      };
  };
}
function Xt(...a) {
  return w.useCallback(Uu(...a), a);
}
function yr(a, i = []) {
  let r = [];
  function c(h, m) {
    const y = w.createContext(m),
      v = r.length;
    r = [...r, m];
    const p = (b) => {
      const { scope: E, children: O, ...k } = b,
        N = E?.[a]?.[v] || y,
        j = w.useMemo(() => k, Object.values(k));
      return u.jsx(N.Provider, { value: j, children: O });
    };
    p.displayName = h + "Provider";
    function x(b, E) {
      const O = E?.[a]?.[v] || y,
        k = w.useContext(O);
      if (k) return k;
      if (m !== void 0) return m;
      throw new Error(`\`${b}\` must be used within \`${h}\``);
    }
    return [p, x];
  }
  const f = () => {
    const h = r.map((m) => w.createContext(m));
    return function (y) {
      const v = y?.[a] || h;
      return w.useMemo(() => ({ [`__scope${a}`]: { ...y, [a]: v } }), [y, v]);
    };
  };
  return (f.scopeName = a), [c, qb(f, ...i)];
}
function qb(...a) {
  const i = a[0];
  if (a.length === 1) return i;
  const r = () => {
    const c = a.map((f) => ({ useScope: f(), scopeName: f.scopeName }));
    return function (h) {
      const m = c.reduce((y, { useScope: v, scopeName: p }) => {
        const b = v(h)[`__scope${p}`];
        return { ...y, ...b };
      }, {});
      return w.useMemo(() => ({ [`__scope${i.scopeName}`]: m }), [m]);
    };
  };
  return (r.scopeName = i.scopeName), r;
}
function Mp(a) {
  const i = Gb(a),
    r = w.forwardRef((c, f) => {
      const { children: h, ...m } = c,
        y = w.Children.toArray(h),
        v = y.find(Yb);
      if (v) {
        const p = v.props.children,
          x = y.map((b) =>
            b === v
              ? w.Children.count(p) > 1
                ? w.Children.only(null)
                : w.isValidElement(p)
                ? p.props.children
                : null
              : b
          );
        return u.jsx(i, {
          ...m,
          ref: f,
          children: w.isValidElement(p) ? w.cloneElement(p, void 0, x) : null,
        });
      }
      return u.jsx(i, { ...m, ref: f, children: h });
    });
  return (r.displayName = `${a}.Slot`), r;
}
function Gb(a) {
  const i = w.forwardRef((r, c) => {
    const { children: f, ...h } = r;
    if (w.isValidElement(f)) {
      const m = Xb(f),
        y = Qb(h, f.props);
      return (
        f.type !== w.Fragment && (y.ref = c ? Uu(c, m) : m),
        w.cloneElement(f, y)
      );
    }
    return w.Children.count(f) > 1 ? w.Children.only(null) : null;
  });
  return (i.displayName = `${a}.SlotClone`), i;
}
var Vb = Symbol("radix.slottable");
function Yb(a) {
  return (
    w.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === Vb
  );
}
function Qb(a, i) {
  const r = { ...i };
  for (const c in i) {
    const f = a[c],
      h = i[c];
    /^on[A-Z]/.test(c)
      ? f && h
        ? (r[c] = (...y) => {
            const v = h(...y);
            return f(...y), v;
          })
        : f && (r[c] = f)
      : c === "style"
      ? (r[c] = { ...f, ...h })
      : c === "className" && (r[c] = [f, h].filter(Boolean).join(" "));
  }
  return { ...a, ...r };
}
function Xb(a) {
  let i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    r = i && "isReactWarning" in i && i.isReactWarning;
  return r
    ? a.ref
    : ((i = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (r = i && "isReactWarning" in i && i.isReactWarning),
      r ? a.props.ref : a.props.ref || a.ref);
}
function Kb(a) {
  const i = a + "CollectionProvider",
    [r, c] = yr(i),
    [f, h] = r(i, { collectionRef: { current: null }, itemMap: new Map() }),
    m = (N) => {
      const { scope: j, children: L } = N,
        G = In.useRef(null),
        Y = In.useRef(new Map()).current;
      return u.jsx(f, { scope: j, itemMap: Y, collectionRef: G, children: L });
    };
  m.displayName = i;
  const y = a + "CollectionSlot",
    v = Mp(y),
    p = In.forwardRef((N, j) => {
      const { scope: L, children: G } = N,
        Y = h(y, L),
        Z = Xt(j, Y.collectionRef);
      return u.jsx(v, { ref: Z, children: G });
    });
  p.displayName = y;
  const x = a + "CollectionItemSlot",
    b = "data-radix-collection-item",
    E = Mp(x),
    O = In.forwardRef((N, j) => {
      const { scope: L, children: G, ...Y } = N,
        Z = In.useRef(null),
        P = Xt(j, Z),
        I = h(x, L);
      return (
        In.useEffect(
          () => (
            I.itemMap.set(Z, { ref: Z, ...Y }),
            () => {
              I.itemMap.delete(Z);
            }
          )
        ),
        u.jsx(E, { [b]: "", ref: P, children: G })
      );
    });
  O.displayName = x;
  function k(N) {
    const j = h(a + "CollectionConsumer", N);
    return In.useCallback(() => {
      const G = j.collectionRef.current;
      if (!G) return [];
      const Y = Array.from(G.querySelectorAll(`[${b}]`));
      return Array.from(j.itemMap.values()).sort(
        (I, Q) => Y.indexOf(I.ref.current) - Y.indexOf(Q.ref.current)
      );
    }, [j.collectionRef, j.itemMap]);
  }
  return [{ Provider: m, Slot: p, ItemSlot: O }, k, c];
}
function Zb(a) {
  const i = Fb(a),
    r = w.forwardRef((c, f) => {
      const { children: h, ...m } = c,
        y = w.Children.toArray(h),
        v = y.find(Pb);
      if (v) {
        const p = v.props.children,
          x = y.map((b) =>
            b === v
              ? w.Children.count(p) > 1
                ? w.Children.only(null)
                : w.isValidElement(p)
                ? p.props.children
                : null
              : b
          );
        return u.jsx(i, {
          ...m,
          ref: f,
          children: w.isValidElement(p) ? w.cloneElement(p, void 0, x) : null,
        });
      }
      return u.jsx(i, { ...m, ref: f, children: h });
    });
  return (r.displayName = `${a}.Slot`), r;
}
function Fb(a) {
  const i = w.forwardRef((r, c) => {
    const { children: f, ...h } = r;
    if (w.isValidElement(f)) {
      const m = Wb(f),
        y = $b(h, f.props);
      return (
        f.type !== w.Fragment && (y.ref = c ? Uu(c, m) : m),
        w.cloneElement(f, y)
      );
    }
    return w.Children.count(f) > 1 ? w.Children.only(null) : null;
  });
  return (i.displayName = `${a}.SlotClone`), i;
}
var Jb = Symbol("radix.slottable");
function Pb(a) {
  return (
    w.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === Jb
  );
}
function $b(a, i) {
  const r = { ...i };
  for (const c in i) {
    const f = a[c],
      h = i[c];
    /^on[A-Z]/.test(c)
      ? f && h
        ? (r[c] = (...y) => {
            const v = h(...y);
            return f(...y), v;
          })
        : f && (r[c] = f)
      : c === "style"
      ? (r[c] = { ...f, ...h })
      : c === "className" && (r[c] = [f, h].filter(Boolean).join(" "));
  }
  return { ...a, ...r };
}
function Wb(a) {
  let i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    r = i && "isReactWarning" in i && i.isReactWarning;
  return r
    ? a.ref
    : ((i = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (r = i && "isReactWarning" in i && i.isReactWarning),
      r ? a.props.ref : a.props.ref || a.ref);
}
var Ib = [
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
    "select",
    "span",
    "svg",
    "ul",
  ],
  pt = Ib.reduce((a, i) => {
    const r = Zb(`Primitive.${i}`),
      c = w.forwardRef((f, h) => {
        const { asChild: m, ...y } = f,
          v = m ? r : i;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          u.jsx(v, { ...y, ref: h })
        );
      });
    return (c.displayName = `Primitive.${i}`), { ...a, [i]: c };
  }, {});
function Ag(a, i) {
  a && gr.flushSync(() => a.dispatchEvent(i));
}
function ta(a) {
  const i = w.useRef(a);
  return (
    w.useEffect(() => {
      i.current = a;
    }),
    w.useMemo(
      () =>
        (...r) =>
          i.current?.(...r),
      []
    )
  );
}
function e1(a, i = globalThis?.document) {
  const r = ta(a);
  w.useEffect(() => {
    const c = (f) => {
      f.key === "Escape" && r(f);
    };
    return (
      i.addEventListener("keydown", c, { capture: !0 }),
      () => i.removeEventListener("keydown", c, { capture: !0 })
    );
  }, [r, i]);
}
var t1 = "DismissableLayer",
  bu = "dismissableLayer.update",
  n1 = "dismissableLayer.pointerDownOutside",
  a1 = "dismissableLayer.focusOutside",
  kp,
  Tg = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Lu = w.forwardRef((a, i) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: h,
        onInteractOutside: m,
        onDismiss: y,
        ...v
      } = a,
      p = w.useContext(Tg),
      [x, b] = w.useState(null),
      E = x?.ownerDocument ?? globalThis?.document,
      [, O] = w.useState({}),
      k = Xt(i, (Q) => b(Q)),
      N = Array.from(p.layers),
      [j] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      L = N.indexOf(j),
      G = x ? N.indexOf(x) : -1,
      Y = p.layersWithOutsidePointerEventsDisabled.size > 0,
      Z = G >= L,
      P = i1((Q) => {
        const K = Q.target,
          se = [...p.branches].some((ue) => ue.contains(K));
        !Z || se || (f?.(Q), m?.(Q), Q.defaultPrevented || y?.());
      }, E),
      I = s1((Q) => {
        const K = Q.target;
        [...p.branches].some((ue) => ue.contains(K)) ||
          (h?.(Q), m?.(Q), Q.defaultPrevented || y?.());
      }, E);
    return (
      e1((Q) => {
        G === p.layers.size - 1 &&
          (c?.(Q), !Q.defaultPrevented && y && (Q.preventDefault(), y()));
      }, E),
      w.useEffect(() => {
        if (x)
          return (
            r &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((kp = E.body.style.pointerEvents),
                (E.body.style.pointerEvents = "none")),
              p.layersWithOutsidePointerEventsDisabled.add(x)),
            p.layers.add(x),
            _p(),
            () => {
              r &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (E.body.style.pointerEvents = kp);
            }
          );
      }, [x, E, r, p]),
      w.useEffect(
        () => () => {
          x &&
            (p.layers.delete(x),
            p.layersWithOutsidePointerEventsDisabled.delete(x),
            _p());
        },
        [x, p]
      ),
      w.useEffect(() => {
        const Q = () => O({});
        return (
          document.addEventListener(bu, Q),
          () => document.removeEventListener(bu, Q)
        );
      }, []),
      u.jsx(pt.div, {
        ...v,
        ref: k,
        style: {
          pointerEvents: Y ? (Z ? "auto" : "none") : void 0,
          ...a.style,
        },
        onFocusCapture: Je(a.onFocusCapture, I.onFocusCapture),
        onBlurCapture: Je(a.onBlurCapture, I.onBlurCapture),
        onPointerDownCapture: Je(
          a.onPointerDownCapture,
          P.onPointerDownCapture
        ),
      })
    );
  });
Lu.displayName = t1;
var l1 = "DismissableLayerBranch",
  jg = w.forwardRef((a, i) => {
    const r = w.useContext(Tg),
      c = w.useRef(null),
      f = Xt(i, c);
    return (
      w.useEffect(() => {
        const h = c.current;
        if (h)
          return (
            r.branches.add(h),
            () => {
              r.branches.delete(h);
            }
          );
      }, [r.branches]),
      u.jsx(pt.div, { ...a, ref: f })
    );
  });
jg.displayName = l1;
function i1(a, i = globalThis?.document) {
  const r = ta(a),
    c = w.useRef(!1),
    f = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const h = (y) => {
          if (y.target && !c.current) {
            let v = function () {
              Ng(n1, r, p, { discrete: !0 });
            };
            const p = { originalEvent: y };
            y.pointerType === "touch"
              ? (i.removeEventListener("click", f.current),
                (f.current = v),
                i.addEventListener("click", f.current, { once: !0 }))
              : v();
          } else i.removeEventListener("click", f.current);
          c.current = !1;
        },
        m = window.setTimeout(() => {
          i.addEventListener("pointerdown", h);
        }, 0);
      return () => {
        window.clearTimeout(m),
          i.removeEventListener("pointerdown", h),
          i.removeEventListener("click", f.current);
      };
    }, [i, r]),
    { onPointerDownCapture: () => (c.current = !0) }
  );
}
function s1(a, i = globalThis?.document) {
  const r = ta(a),
    c = w.useRef(!1);
  return (
    w.useEffect(() => {
      const f = (h) => {
        h.target &&
          !c.current &&
          Ng(a1, r, { originalEvent: h }, { discrete: !1 });
      };
      return (
        i.addEventListener("focusin", f),
        () => i.removeEventListener("focusin", f)
      );
    }, [i, r]),
    {
      onFocusCapture: () => (c.current = !0),
      onBlurCapture: () => (c.current = !1),
    }
  );
}
function _p() {
  const a = new CustomEvent(bu);
  document.dispatchEvent(a);
}
function Ng(a, i, r, { discrete: c }) {
  const f = r.originalEvent.target,
    h = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: r });
  i && f.addEventListener(a, i, { once: !0 }),
    c ? Ag(f, h) : f.dispatchEvent(h);
}
var r1 = Lu,
  o1 = jg,
  na = globalThis?.document ? w.useLayoutEffect : () => {},
  c1 = "Portal",
  Hu = w.forwardRef((a, i) => {
    const { container: r, ...c } = a,
      [f, h] = w.useState(!1);
    na(() => h(!0), []);
    const m = r || (f && globalThis?.document?.body);
    return m ? Bb.createPortal(u.jsx(pt.div, { ...c, ref: i }), m) : null;
  });
Hu.displayName = c1;
function u1(a, i) {
  return w.useReducer((r, c) => i[r][c] ?? r, a);
}
var vr = (a) => {
  const { present: i, children: r } = a,
    c = f1(i),
    f =
      typeof r == "function" ? r({ present: c.isPresent }) : w.Children.only(r),
    h = Xt(c.ref, d1(f));
  return typeof r == "function" || c.isPresent
    ? w.cloneElement(f, { ref: h })
    : null;
};
vr.displayName = "Presence";
function f1(a) {
  const [i, r] = w.useState(),
    c = w.useRef(null),
    f = w.useRef(a),
    h = w.useRef("none"),
    m = a ? "mounted" : "unmounted",
    [y, v] = u1(m, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const p = $s(c.current);
      h.current = y === "mounted" ? p : "none";
    }, [y]),
    na(() => {
      const p = c.current,
        x = f.current;
      if (x !== a) {
        const E = h.current,
          O = $s(p);
        a
          ? v("MOUNT")
          : O === "none" || p?.display === "none"
          ? v("UNMOUNT")
          : v(x && E !== O ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = a);
      }
    }, [a, v]),
    na(() => {
      if (i) {
        let p;
        const x = i.ownerDocument.defaultView ?? window,
          b = (O) => {
            const N = $s(c.current).includes(CSS.escape(O.animationName));
            if (O.target === i && N && (v("ANIMATION_END"), !f.current)) {
              const j = i.style.animationFillMode;
              (i.style.animationFillMode = "forwards"),
                (p = x.setTimeout(() => {
                  i.style.animationFillMode === "forwards" &&
                    (i.style.animationFillMode = j);
                }));
            }
          },
          E = (O) => {
            O.target === i && (h.current = $s(c.current));
          };
        return (
          i.addEventListener("animationstart", E),
          i.addEventListener("animationcancel", b),
          i.addEventListener("animationend", b),
          () => {
            x.clearTimeout(p),
              i.removeEventListener("animationstart", E),
              i.removeEventListener("animationcancel", b),
              i.removeEventListener("animationend", b);
          }
        );
      } else v("ANIMATION_END");
    }, [i, v]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(y),
      ref: w.useCallback((p) => {
        (c.current = p ? getComputedStyle(p) : null), r(p);
      }, []),
    }
  );
}
function $s(a) {
  return a?.animationName || "none";
}
function d1(a) {
  let i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    r = i && "isReactWarning" in i && i.isReactWarning;
  return r
    ? a.ref
    : ((i = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (r = i && "isReactWarning" in i && i.isReactWarning),
      r ? a.props.ref : a.props.ref || a.ref);
}
var h1 = ag[" useInsertionEffect ".trim().toString()] || na;
function m1({ prop: a, defaultProp: i, onChange: r = () => {}, caller: c }) {
  const [f, h, m] = p1({ defaultProp: i, onChange: r }),
    y = a !== void 0,
    v = y ? a : f;
  {
    const x = w.useRef(a !== void 0);
    w.useEffect(() => {
      const b = x.current;
      b !== y &&
        console.warn(
          `${c} is changing from ${b ? "controlled" : "uncontrolled"} to ${
            y ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (x.current = y);
    }, [y, c]);
  }
  const p = w.useCallback(
    (x) => {
      if (y) {
        const b = g1(x) ? x(a) : x;
        b !== a && m.current?.(b);
      } else h(x);
    },
    [y, a, h, m]
  );
  return [v, p];
}
function p1({ defaultProp: a, onChange: i }) {
  const [r, c] = w.useState(a),
    f = w.useRef(r),
    h = w.useRef(i);
  return (
    h1(() => {
      h.current = i;
    }, [i]),
    w.useEffect(() => {
      f.current !== r && (h.current?.(r), (f.current = r));
    }, [r, f]),
    [r, c, h]
  );
}
function g1(a) {
  return typeof a == "function";
}
var y1 = Object.freeze({
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
  }),
  v1 = "VisuallyHidden",
  xr = w.forwardRef((a, i) =>
    u.jsx(pt.span, { ...a, ref: i, style: { ...y1, ...a.style } })
  );
xr.displayName = v1;
var x1 = xr,
  Bu = "ToastProvider",
  [qu, b1, w1] = Kb("Toast"),
  [Cg] = yr("Toast", [w1]),
  [S1, br] = Cg(Bu),
  Og = (a) => {
    const {
        __scopeToast: i,
        label: r = "Notification",
        duration: c = 5e3,
        swipeDirection: f = "right",
        swipeThreshold: h = 50,
        children: m,
      } = a,
      [y, v] = w.useState(null),
      [p, x] = w.useState(0),
      b = w.useRef(!1),
      E = w.useRef(!1);
    return (
      r.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Bu}\`. Expected non-empty \`string\`.`
        ),
      u.jsx(qu.Provider, {
        scope: i,
        children: u.jsx(S1, {
          scope: i,
          label: r,
          duration: c,
          swipeDirection: f,
          swipeThreshold: h,
          toastCount: p,
          viewport: y,
          onViewportChange: v,
          onToastAdd: w.useCallback(() => x((O) => O + 1), []),
          onToastRemove: w.useCallback(() => x((O) => O - 1), []),
          isFocusedToastEscapeKeyDownRef: b,
          isClosePausedRef: E,
          children: m,
        }),
      })
    );
  };
Og.displayName = Bu;
var Rg = "ToastViewport",
  E1 = ["F8"],
  wu = "toast.viewportPause",
  Su = "toast.viewportResume",
  Mg = w.forwardRef((a, i) => {
    const {
        __scopeToast: r,
        hotkey: c = E1,
        label: f = "Notifications ({hotkey})",
        ...h
      } = a,
      m = br(Rg, r),
      y = b1(r),
      v = w.useRef(null),
      p = w.useRef(null),
      x = w.useRef(null),
      b = w.useRef(null),
      E = Xt(i, b, m.onViewportChange),
      O = c.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      k = m.toastCount > 0;
    w.useEffect(() => {
      const j = (L) => {
        c.length !== 0 &&
          c.every((Y) => L[Y] || L.code === Y) &&
          b.current?.focus();
      };
      return (
        document.addEventListener("keydown", j),
        () => document.removeEventListener("keydown", j)
      );
    }, [c]),
      w.useEffect(() => {
        const j = v.current,
          L = b.current;
        if (k && j && L) {
          const G = () => {
              if (!m.isClosePausedRef.current) {
                const I = new CustomEvent(wu);
                L.dispatchEvent(I), (m.isClosePausedRef.current = !0);
              }
            },
            Y = () => {
              if (m.isClosePausedRef.current) {
                const I = new CustomEvent(Su);
                L.dispatchEvent(I), (m.isClosePausedRef.current = !1);
              }
            },
            Z = (I) => {
              !j.contains(I.relatedTarget) && Y();
            },
            P = () => {
              j.contains(document.activeElement) || Y();
            };
          return (
            j.addEventListener("focusin", G),
            j.addEventListener("focusout", Z),
            j.addEventListener("pointermove", G),
            j.addEventListener("pointerleave", P),
            window.addEventListener("blur", G),
            window.addEventListener("focus", Y),
            () => {
              j.removeEventListener("focusin", G),
                j.removeEventListener("focusout", Z),
                j.removeEventListener("pointermove", G),
                j.removeEventListener("pointerleave", P),
                window.removeEventListener("blur", G),
                window.removeEventListener("focus", Y);
            }
          );
        }
      }, [k, m.isClosePausedRef]);
    const N = w.useCallback(
      ({ tabbingDirection: j }) => {
        const G = y().map((Y) => {
          const Z = Y.ref.current,
            P = [Z, ...U1(Z)];
          return j === "forwards" ? P : P.reverse();
        });
        return (j === "forwards" ? G.reverse() : G).flat();
      },
      [y]
    );
    return (
      w.useEffect(() => {
        const j = b.current;
        if (j) {
          const L = (G) => {
            const Y = G.altKey || G.ctrlKey || G.metaKey;
            if (G.key === "Tab" && !Y) {
              const P = document.activeElement,
                I = G.shiftKey;
              if (G.target === j && I) {
                p.current?.focus();
                return;
              }
              const se = N({ tabbingDirection: I ? "backwards" : "forwards" }),
                ue = se.findIndex((he) => he === P);
              eu(se.slice(ue + 1))
                ? G.preventDefault()
                : I
                ? p.current?.focus()
                : x.current?.focus();
            }
          };
          return (
            j.addEventListener("keydown", L),
            () => j.removeEventListener("keydown", L)
          );
        }
      }, [y, N]),
      u.jsxs(o1, {
        ref: v,
        role: "region",
        "aria-label": f.replace("{hotkey}", O),
        tabIndex: -1,
        style: { pointerEvents: k ? void 0 : "none" },
        children: [
          k &&
            u.jsx(Eu, {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const j = N({ tabbingDirection: "forwards" });
                eu(j);
              },
            }),
          u.jsx(qu.Slot, {
            scope: r,
            children: u.jsx(pt.ol, { tabIndex: -1, ...h, ref: E }),
          }),
          k &&
            u.jsx(Eu, {
              ref: x,
              onFocusFromOutsideViewport: () => {
                const j = N({ tabbingDirection: "backwards" });
                eu(j);
              },
            }),
        ],
      })
    );
  });
Mg.displayName = Rg;
var kg = "ToastFocusProxy",
  Eu = w.forwardRef((a, i) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: c, ...f } = a,
      h = br(kg, r);
    return u.jsx(xr, {
      tabIndex: 0,
      ...f,
      ref: i,
      style: { position: "fixed" },
      onFocus: (m) => {
        const y = m.relatedTarget;
        !h.viewport?.contains(y) && c();
      },
    });
  });
Eu.displayName = kg;
var Ri = "Toast",
  A1 = "toast.swipeStart",
  T1 = "toast.swipeMove",
  j1 = "toast.swipeCancel",
  N1 = "toast.swipeEnd",
  _g = w.forwardRef((a, i) => {
    const { forceMount: r, open: c, defaultOpen: f, onOpenChange: h, ...m } = a,
      [y, v] = m1({ prop: c, defaultProp: f ?? !0, onChange: h, caller: Ri });
    return u.jsx(vr, {
      present: r || y,
      children: u.jsx(R1, {
        open: y,
        ...m,
        ref: i,
        onClose: () => v(!1),
        onPause: ta(a.onPause),
        onResume: ta(a.onResume),
        onSwipeStart: Je(a.onSwipeStart, (p) => {
          p.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Je(a.onSwipeMove, (p) => {
          const { x, y: b } = p.detail.delta;
          p.currentTarget.setAttribute("data-swipe", "move"),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${x}px`
            ),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${b}px`
            );
        }),
        onSwipeCancel: Je(a.onSwipeCancel, (p) => {
          p.currentTarget.setAttribute("data-swipe", "cancel"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Je(a.onSwipeEnd, (p) => {
          const { x, y: b } = p.detail.delta;
          p.currentTarget.setAttribute("data-swipe", "end"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${x}px`
            ),
            p.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${b}px`
            ),
            v(!1);
        }),
      }),
    });
  });
_g.displayName = Ri;
var [C1, O1] = Cg(Ri, { onClose() {} }),
  R1 = w.forwardRef((a, i) => {
    const {
        __scopeToast: r,
        type: c = "foreground",
        duration: f,
        open: h,
        onClose: m,
        onEscapeKeyDown: y,
        onPause: v,
        onResume: p,
        onSwipeStart: x,
        onSwipeMove: b,
        onSwipeCancel: E,
        onSwipeEnd: O,
        ...k
      } = a,
      N = br(Ri, r),
      [j, L] = w.useState(null),
      G = Xt(i, (W) => L(W)),
      Y = w.useRef(null),
      Z = w.useRef(null),
      P = f || N.duration,
      I = w.useRef(0),
      Q = w.useRef(P),
      K = w.useRef(0),
      { onToastAdd: se, onToastRemove: ue } = N,
      he = ta(() => {
        j?.contains(document.activeElement) && N.viewport?.focus(), m();
      }),
      J = w.useCallback(
        (W) => {
          !W ||
            W === 1 / 0 ||
            (window.clearTimeout(K.current),
            (I.current = new Date().getTime()),
            (K.current = window.setTimeout(he, W)));
        },
        [he]
      );
    w.useEffect(() => {
      const W = N.viewport;
      if (W) {
        const de = () => {
            J(Q.current), p?.();
          },
          R = () => {
            const X = new Date().getTime() - I.current;
            (Q.current = Q.current - X), window.clearTimeout(K.current), v?.();
          };
        return (
          W.addEventListener(wu, R),
          W.addEventListener(Su, de),
          () => {
            W.removeEventListener(wu, R), W.removeEventListener(Su, de);
          }
        );
      }
    }, [N.viewport, P, v, p, J]),
      w.useEffect(() => {
        h && !N.isClosePausedRef.current && J(P);
      }, [h, P, N.isClosePausedRef, J]),
      w.useEffect(() => (se(), () => ue()), [se, ue]);
    const fe = w.useMemo(() => (j ? qg(j) : null), [j]);
    return N.viewport
      ? u.jsxs(u.Fragment, {
          children: [
            fe &&
              u.jsx(M1, {
                __scopeToast: r,
                role: "status",
                "aria-live": c === "foreground" ? "assertive" : "polite",
                children: fe,
              }),
            u.jsx(C1, {
              scope: r,
              onClose: he,
              children: gr.createPortal(
                u.jsx(qu.ItemSlot, {
                  scope: r,
                  children: u.jsx(r1, {
                    asChild: !0,
                    onEscapeKeyDown: Je(y, () => {
                      N.isFocusedToastEscapeKeyDownRef.current || he(),
                        (N.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: u.jsx(pt.li, {
                      tabIndex: 0,
                      "data-state": h ? "open" : "closed",
                      "data-swipe-direction": N.swipeDirection,
                      ...k,
                      ref: G,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...a.style,
                      },
                      onKeyDown: Je(a.onKeyDown, (W) => {
                        W.key === "Escape" &&
                          (y?.(W.nativeEvent),
                          W.nativeEvent.defaultPrevented ||
                            ((N.isFocusedToastEscapeKeyDownRef.current = !0),
                            he()));
                      }),
                      onPointerDown: Je(a.onPointerDown, (W) => {
                        W.button === 0 &&
                          (Y.current = { x: W.clientX, y: W.clientY });
                      }),
                      onPointerMove: Je(a.onPointerMove, (W) => {
                        if (!Y.current) return;
                        const de = W.clientX - Y.current.x,
                          R = W.clientY - Y.current.y,
                          X = !!Z.current,
                          U = ["left", "right"].includes(N.swipeDirection),
                          re = ["left", "up"].includes(N.swipeDirection)
                            ? Math.min
                            : Math.max,
                          pe = U ? re(0, de) : 0,
                          A = U ? 0 : re(0, R),
                          B = W.pointerType === "touch" ? 10 : 2,
                          F = { x: pe, y: A },
                          $ = { originalEvent: W, delta: F };
                        X
                          ? ((Z.current = F), Ws(T1, b, $, { discrete: !1 }))
                          : zp(F, N.swipeDirection, B)
                          ? ((Z.current = F),
                            Ws(A1, x, $, { discrete: !1 }),
                            W.target.setPointerCapture(W.pointerId))
                          : (Math.abs(de) > B || Math.abs(R) > B) &&
                            (Y.current = null);
                      }),
                      onPointerUp: Je(a.onPointerUp, (W) => {
                        const de = Z.current,
                          R = W.target;
                        if (
                          (R.hasPointerCapture(W.pointerId) &&
                            R.releasePointerCapture(W.pointerId),
                          (Z.current = null),
                          (Y.current = null),
                          de)
                        ) {
                          const X = W.currentTarget,
                            U = { originalEvent: W, delta: de };
                          zp(de, N.swipeDirection, N.swipeThreshold)
                            ? Ws(N1, O, U, { discrete: !0 })
                            : Ws(j1, E, U, { discrete: !0 }),
                            X.addEventListener(
                              "click",
                              (re) => re.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                N.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  M1 = (a) => {
    const { __scopeToast: i, children: r, ...c } = a,
      f = br(Ri, i),
      [h, m] = w.useState(!1),
      [y, v] = w.useState(!1);
    return (
      z1(() => m(!0)),
      w.useEffect(() => {
        const p = window.setTimeout(() => v(!0), 1e3);
        return () => window.clearTimeout(p);
      }, []),
      y
        ? null
        : u.jsx(Hu, {
            asChild: !0,
            children: u.jsx(xr, {
              ...c,
              children:
                h && u.jsxs(u.Fragment, { children: [f.label, " ", r] }),
            }),
          })
    );
  },
  k1 = "ToastTitle",
  zg = w.forwardRef((a, i) => {
    const { __scopeToast: r, ...c } = a;
    return u.jsx(pt.div, { ...c, ref: i });
  });
zg.displayName = k1;
var _1 = "ToastDescription",
  Dg = w.forwardRef((a, i) => {
    const { __scopeToast: r, ...c } = a;
    return u.jsx(pt.div, { ...c, ref: i });
  });
Dg.displayName = _1;
var Ug = "ToastAction",
  Lg = w.forwardRef((a, i) => {
    const { altText: r, ...c } = a;
    return r.trim()
      ? u.jsx(Bg, {
          altText: r,
          asChild: !0,
          children: u.jsx(Gu, { ...c, ref: i }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Ug}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
Lg.displayName = Ug;
var Hg = "ToastClose",
  Gu = w.forwardRef((a, i) => {
    const { __scopeToast: r, ...c } = a,
      f = O1(Hg, r);
    return u.jsx(Bg, {
      asChild: !0,
      children: u.jsx(pt.button, {
        type: "button",
        ...c,
        ref: i,
        onClick: Je(a.onClick, f.onClose),
      }),
    });
  });
Gu.displayName = Hg;
var Bg = w.forwardRef((a, i) => {
  const { __scopeToast: r, altText: c, ...f } = a;
  return u.jsx(pt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": c || void 0,
    ...f,
    ref: i,
  });
});
function qg(a) {
  const i = [];
  return (
    Array.from(a.childNodes).forEach((c) => {
      if (
        (c.nodeType === c.TEXT_NODE && c.textContent && i.push(c.textContent),
        D1(c))
      ) {
        const f = c.ariaHidden || c.hidden || c.style.display === "none",
          h = c.dataset.radixToastAnnounceExclude === "";
        if (!f)
          if (h) {
            const m = c.dataset.radixToastAnnounceAlt;
            m && i.push(m);
          } else i.push(...qg(c));
      }
    }),
    i
  );
}
function Ws(a, i, r, { discrete: c }) {
  const f = r.originalEvent.currentTarget,
    h = new CustomEvent(a, { bubbles: !0, cancelable: !0, detail: r });
  i && f.addEventListener(a, i, { once: !0 }),
    c ? Ag(f, h) : f.dispatchEvent(h);
}
var zp = (a, i, r = 0) => {
  const c = Math.abs(a.x),
    f = Math.abs(a.y),
    h = c > f;
  return i === "left" || i === "right" ? h && c > r : !h && f > r;
};
function z1(a = () => {}) {
  const i = ta(a);
  na(() => {
    let r = 0,
      c = 0;
    return (
      (r = window.requestAnimationFrame(
        () => (c = window.requestAnimationFrame(i))
      )),
      () => {
        window.cancelAnimationFrame(r), window.cancelAnimationFrame(c);
      }
    );
  }, [i]);
}
function D1(a) {
  return a.nodeType === a.ELEMENT_NODE;
}
function U1(a) {
  const i = [],
    r = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (c) => {
        const f = c.tagName === "INPUT" && c.type === "hidden";
        return c.disabled || c.hidden || f
          ? NodeFilter.FILTER_SKIP
          : c.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) i.push(r.currentNode);
  return i;
}
function eu(a) {
  const i = document.activeElement;
  return a.some((r) =>
    r === i ? !0 : (r.focus(), document.activeElement !== i)
  );
}
var L1 = Og,
  Gg = Mg,
  Vg = _g,
  Yg = zg,
  Qg = Dg,
  Xg = Lg,
  Kg = Gu;
function Zg(a) {
  var i,
    r,
    c = "";
  if (typeof a == "string" || typeof a == "number") c += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var f = a.length;
      for (i = 0; i < f; i++)
        a[i] && (r = Zg(a[i])) && (c && (c += " "), (c += r));
    } else for (r in a) a[r] && (c && (c += " "), (c += r));
  return c;
}
function Fg() {
  for (var a, i, r = 0, c = "", f = arguments.length; r < f; r++)
    (a = arguments[r]) && (i = Zg(a)) && (c && (c += " "), (c += i));
  return c;
}
const Dp = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  Up = Fg,
  H1 = (a, i) => (r) => {
    var c;
    if (i?.variants == null) return Up(a, r?.class, r?.className);
    const { variants: f, defaultVariants: h } = i,
      m = Object.keys(f).map((p) => {
        const x = r?.[p],
          b = h?.[p];
        if (x === null) return null;
        const E = Dp(x) || Dp(b);
        return f[p][E];
      }),
      y =
        r &&
        Object.entries(r).reduce((p, x) => {
          let [b, E] = x;
          return E === void 0 || (p[b] = E), p;
        }, {}),
      v =
        i == null || (c = i.compoundVariants) === null || c === void 0
          ? void 0
          : c.reduce((p, x) => {
              let { class: b, className: E, ...O } = x;
              return Object.entries(O).every((k) => {
                let [N, j] = k;
                return Array.isArray(j)
                  ? j.includes({ ...h, ...y }[N])
                  : { ...h, ...y }[N] === j;
              })
                ? [...p, b, E]
                : p;
            }, []);
    return Up(a, m, v, r?.class, r?.className);
  };
const B1 = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  q1 = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, r, c) =>
      c ? c.toUpperCase() : r.toLowerCase()
    ),
  Lp = (a) => {
    const i = q1(a);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  Jg = (...a) =>
    a
      .filter((i, r, c) => !!i && i.trim() !== "" && c.indexOf(i) === r)
      .join(" ")
      .trim(),
  G1 = (a) => {
    for (const i in a)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
var V1 = {
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
const Y1 = w.forwardRef(
  (
    {
      color: a = "currentColor",
      size: i = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: c,
      className: f = "",
      children: h,
      iconNode: m,
      ...y
    },
    v
  ) =>
    w.createElement(
      "svg",
      {
        ref: v,
        ...V1,
        width: i,
        height: i,
        stroke: a,
        strokeWidth: c ? (Number(r) * 24) / Number(i) : r,
        className: Jg("lucide", f),
        ...(!h && !G1(y) && { "aria-hidden": "true" }),
        ...y,
      },
      [
        ...m.map(([p, x]) => w.createElement(p, x)),
        ...(Array.isArray(h) ? h : [h]),
      ]
    )
);
const Gt = (a, i) => {
  const r = w.forwardRef(({ className: c, ...f }, h) =>
    w.createElement(Y1, {
      ref: h,
      iconNode: i,
      className: Jg(`lucide-${B1(Lp(a))}`, `lucide-${a}`, c),
      ...f,
    })
  );
  return (r.displayName = Lp(a)), r;
};
const Q1 = [
    [
      "path",
      {
        d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
        key: "18u6gg",
      },
    ],
    ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
  ],
  X1 = Gt("camera", Q1);
const K1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  Z1 = Gt("chevron-left", K1);
const F1 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  J1 = Gt("chevron-right", F1);
const P1 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  $1 = Gt("circle-alert", P1);
const W1 = [
    [
      "path",
      {
        d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
        key: "kmsa83",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  I1 = Gt("circle-play", W1);
const e2 = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  t2 = Gt("copy", e2);
const n2 = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  Au = Gt("download", n2);
const a2 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  l2 = Gt("loader-circle", a2);
const i2 = [
    ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
    ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
    ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
    [
      "line",
      { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
    ],
    [
      "line",
      { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" },
    ],
  ],
  tu = Gt("share-2", i2);
const s2 = [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw",
      },
    ],
    ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
    ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
  ],
  r2 = Gt("volume-2", s2);
const o2 = [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw",
      },
    ],
    ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
    ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }],
  ],
  c2 = Gt("volume-x", o2);
const u2 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  f2 = Gt("x", u2),
  d2 = (a, i) => {
    const r = new Array(a.length + i.length);
    for (let c = 0; c < a.length; c++) r[c] = a[c];
    for (let c = 0; c < i.length; c++) r[a.length + c] = i[c];
    return r;
  },
  h2 = (a, i) => ({ classGroupId: a, validator: i }),
  Pg = (a = new Map(), i = null, r) => ({
    nextPart: a,
    validators: i,
    classGroupId: r,
  }),
  cr = "-",
  Hp = [],
  m2 = "arbitrary..",
  p2 = (a) => {
    const i = y2(a),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: c } = a;
    return {
      getClassGroupId: (m) => {
        if (m.startsWith("[") && m.endsWith("]")) return g2(m);
        const y = m.split(cr),
          v = y[0] === "" && y.length > 1 ? 1 : 0;
        return $g(y, v, i);
      },
      getConflictingClassGroupIds: (m, y) => {
        if (y) {
          const v = c[m],
            p = r[m];
          return v ? (p ? d2(p, v) : v) : p || Hp;
        }
        return r[m] || Hp;
      },
    };
  },
  $g = (a, i, r) => {
    if (a.length - i === 0) return r.classGroupId;
    const f = a[i],
      h = r.nextPart.get(f);
    if (h) {
      const p = $g(a, i + 1, h);
      if (p) return p;
    }
    const m = r.validators;
    if (m === null) return;
    const y = i === 0 ? a.join(cr) : a.slice(i).join(cr),
      v = m.length;
    for (let p = 0; p < v; p++) {
      const x = m[p];
      if (x.validator(y)) return x.classGroupId;
    }
  },
  g2 = (a) =>
    a.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const i = a.slice(1, -1),
            r = i.indexOf(":"),
            c = i.slice(0, r);
          return c ? m2 + c : void 0;
        })(),
  y2 = (a) => {
    const { theme: i, classGroups: r } = a;
    return v2(r, i);
  },
  v2 = (a, i) => {
    const r = Pg();
    for (const c in a) {
      const f = a[c];
      Vu(f, r, c, i);
    }
    return r;
  },
  Vu = (a, i, r, c) => {
    const f = a.length;
    for (let h = 0; h < f; h++) {
      const m = a[h];
      x2(m, i, r, c);
    }
  },
  x2 = (a, i, r, c) => {
    if (typeof a == "string") {
      b2(a, i, r);
      return;
    }
    if (typeof a == "function") {
      w2(a, i, r, c);
      return;
    }
    S2(a, i, r, c);
  },
  b2 = (a, i, r) => {
    const c = a === "" ? i : Wg(i, a);
    c.classGroupId = r;
  },
  w2 = (a, i, r, c) => {
    if (E2(a)) {
      Vu(a(c), i, r, c);
      return;
    }
    i.validators === null && (i.validators = []), i.validators.push(h2(r, a));
  },
  S2 = (a, i, r, c) => {
    const f = Object.entries(a),
      h = f.length;
    for (let m = 0; m < h; m++) {
      const [y, v] = f[m];
      Vu(v, Wg(i, y), r, c);
    }
  },
  Wg = (a, i) => {
    let r = a;
    const c = i.split(cr),
      f = c.length;
    for (let h = 0; h < f; h++) {
      const m = c[h];
      let y = r.nextPart.get(m);
      y || ((y = Pg()), r.nextPart.set(m, y)), (r = y);
    }
    return r;
  },
  E2 = (a) => "isThemeGetter" in a && a.isThemeGetter === !0,
  A2 = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let i = 0,
      r = Object.create(null),
      c = Object.create(null);
    const f = (h, m) => {
      (r[h] = m), i++, i > a && ((i = 0), (c = r), (r = Object.create(null)));
    };
    return {
      get(h) {
        let m = r[h];
        if (m !== void 0) return m;
        if ((m = c[h]) !== void 0) return f(h, m), m;
      },
      set(h, m) {
        h in r ? (r[h] = m) : f(h, m);
      },
    };
  },
  Tu = "!",
  Bp = ":",
  T2 = [],
  qp = (a, i, r, c, f) => ({
    modifiers: a,
    hasImportantModifier: i,
    baseClassName: r,
    maybePostfixModifierPosition: c,
    isExternal: f,
  }),
  j2 = (a) => {
    const { prefix: i, experimentalParseClassName: r } = a;
    let c = (f) => {
      const h = [];
      let m = 0,
        y = 0,
        v = 0,
        p;
      const x = f.length;
      for (let N = 0; N < x; N++) {
        const j = f[N];
        if (m === 0 && y === 0) {
          if (j === Bp) {
            h.push(f.slice(v, N)), (v = N + 1);
            continue;
          }
          if (j === "/") {
            p = N;
            continue;
          }
        }
        j === "[" ? m++ : j === "]" ? m-- : j === "(" ? y++ : j === ")" && y--;
      }
      const b = h.length === 0 ? f : f.slice(v);
      let E = b,
        O = !1;
      b.endsWith(Tu)
        ? ((E = b.slice(0, -1)), (O = !0))
        : b.startsWith(Tu) && ((E = b.slice(1)), (O = !0));
      const k = p && p > v ? p - v : void 0;
      return qp(h, O, E, k);
    };
    if (i) {
      const f = i + Bp,
        h = c;
      c = (m) =>
        m.startsWith(f) ? h(m.slice(f.length)) : qp(T2, !1, m, void 0, !0);
    }
    if (r) {
      const f = c;
      c = (h) => r({ className: h, parseClassName: f });
    }
    return c;
  },
  N2 = (a) => {
    const i = new Map();
    return (
      a.orderSensitiveModifiers.forEach((r, c) => {
        i.set(r, 1e6 + c);
      }),
      (r) => {
        const c = [];
        let f = [];
        for (let h = 0; h < r.length; h++) {
          const m = r[h],
            y = m[0] === "[",
            v = i.has(m);
          y || v
            ? (f.length > 0 && (f.sort(), c.push(...f), (f = [])), c.push(m))
            : f.push(m);
        }
        return f.length > 0 && (f.sort(), c.push(...f)), c;
      }
    );
  },
  C2 = (a) => ({
    cache: A2(a.cacheSize),
    parseClassName: j2(a),
    sortModifiers: N2(a),
    ...p2(a),
  }),
  O2 = /\s+/,
  R2 = (a, i) => {
    const {
        parseClassName: r,
        getClassGroupId: c,
        getConflictingClassGroupIds: f,
        sortModifiers: h,
      } = i,
      m = [],
      y = a.trim().split(O2);
    let v = "";
    for (let p = y.length - 1; p >= 0; p -= 1) {
      const x = y[p],
        {
          isExternal: b,
          modifiers: E,
          hasImportantModifier: O,
          baseClassName: k,
          maybePostfixModifierPosition: N,
        } = r(x);
      if (b) {
        v = x + (v.length > 0 ? " " + v : v);
        continue;
      }
      let j = !!N,
        L = c(j ? k.substring(0, N) : k);
      if (!L) {
        if (!j) {
          v = x + (v.length > 0 ? " " + v : v);
          continue;
        }
        if (((L = c(k)), !L)) {
          v = x + (v.length > 0 ? " " + v : v);
          continue;
        }
        j = !1;
      }
      const G = E.length === 0 ? "" : E.length === 1 ? E[0] : h(E).join(":"),
        Y = O ? G + Tu : G,
        Z = Y + L;
      if (m.indexOf(Z) > -1) continue;
      m.push(Z);
      const P = f(L, j);
      for (let I = 0; I < P.length; ++I) {
        const Q = P[I];
        m.push(Y + Q);
      }
      v = x + (v.length > 0 ? " " + v : v);
    }
    return v;
  },
  M2 = (...a) => {
    let i = 0,
      r,
      c,
      f = "";
    for (; i < a.length; )
      (r = a[i++]) && (c = Ig(r)) && (f && (f += " "), (f += c));
    return f;
  },
  Ig = (a) => {
    if (typeof a == "string") return a;
    let i,
      r = "";
    for (let c = 0; c < a.length; c++)
      a[c] && (i = Ig(a[c])) && (r && (r += " "), (r += i));
    return r;
  },
  k2 = (a, ...i) => {
    let r, c, f, h;
    const m = (v) => {
        const p = i.reduce((x, b) => b(x), a());
        return (r = C2(p)), (c = r.cache.get), (f = r.cache.set), (h = y), y(v);
      },
      y = (v) => {
        const p = c(v);
        if (p) return p;
        const x = R2(v, r);
        return f(v, x), x;
      };
    return (h = m), (...v) => h(M2(...v));
  },
  _2 = [],
  Fe = (a) => {
    const i = (r) => r[a] || _2;
    return (i.isThemeGetter = !0), i;
  },
  ey = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  ty = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  z2 = /^\d+\/\d+$/,
  D2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  U2 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  L2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  H2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  B2 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ml = (a) => z2.test(a),
  xe = (a) => !!a && !Number.isNaN(Number(a)),
  Wn = (a) => !!a && Number.isInteger(Number(a)),
  nu = (a) => a.endsWith("%") && xe(a.slice(0, -1)),
  An = (a) => D2.test(a),
  q2 = () => !0,
  G2 = (a) => U2.test(a) && !L2.test(a),
  ny = () => !1,
  V2 = (a) => H2.test(a),
  Y2 = (a) => B2.test(a),
  Q2 = (a) => !te(a) && !ne(a),
  X2 = (a) => xl(a, iy, ny),
  te = (a) => ey.test(a),
  Ta = (a) => xl(a, sy, G2),
  au = (a) => xl(a, P2, xe),
  Gp = (a) => xl(a, ay, ny),
  K2 = (a) => xl(a, ly, Y2),
  Is = (a) => xl(a, ry, V2),
  ne = (a) => ty.test(a),
  vi = (a) => bl(a, sy),
  Z2 = (a) => bl(a, $2),
  Vp = (a) => bl(a, ay),
  F2 = (a) => bl(a, iy),
  J2 = (a) => bl(a, ly),
  er = (a) => bl(a, ry, !0),
  xl = (a, i, r) => {
    const c = ey.exec(a);
    return c ? (c[1] ? i(c[1]) : r(c[2])) : !1;
  },
  bl = (a, i, r = !1) => {
    const c = ty.exec(a);
    return c ? (c[1] ? i(c[1]) : r) : !1;
  },
  ay = (a) => a === "position" || a === "percentage",
  ly = (a) => a === "image" || a === "url",
  iy = (a) => a === "length" || a === "size" || a === "bg-size",
  sy = (a) => a === "length",
  P2 = (a) => a === "number",
  $2 = (a) => a === "family-name",
  ry = (a) => a === "shadow",
  W2 = () => {
    const a = Fe("color"),
      i = Fe("font"),
      r = Fe("text"),
      c = Fe("font-weight"),
      f = Fe("tracking"),
      h = Fe("leading"),
      m = Fe("breakpoint"),
      y = Fe("container"),
      v = Fe("spacing"),
      p = Fe("radius"),
      x = Fe("shadow"),
      b = Fe("inset-shadow"),
      E = Fe("text-shadow"),
      O = Fe("drop-shadow"),
      k = Fe("blur"),
      N = Fe("perspective"),
      j = Fe("aspect"),
      L = Fe("ease"),
      G = Fe("animate"),
      Y = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Z = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      P = () => [...Z(), ne, te],
      I = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Q = () => ["auto", "contain", "none"],
      K = () => [ne, te, v],
      se = () => [ml, "full", "auto", ...K()],
      ue = () => [Wn, "none", "subgrid", ne, te],
      he = () => ["auto", { span: ["full", Wn, ne, te] }, Wn, ne, te],
      J = () => [Wn, "auto", ne, te],
      fe = () => ["auto", "min", "max", "fr", ne, te],
      W = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      de = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      R = () => ["auto", ...K()],
      X = () => [
        ml,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...K(),
      ],
      U = () => [a, ne, te],
      re = () => [...Z(), Vp, Gp, { position: [ne, te] }],
      pe = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      A = () => ["auto", "cover", "contain", F2, X2, { size: [ne, te] }],
      B = () => [nu, vi, Ta],
      F = () => ["", "none", "full", p, ne, te],
      $ = () => ["", xe, vi, Ta],
      ce = () => ["solid", "dashed", "dotted", "double"],
      ge = () => [
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
      le = () => [xe, nu, Vp, Gp],
      qe = () => ["", "none", k, ne, te],
      Re = () => ["none", xe, ne, te],
      Ot = () => ["none", xe, ne, te],
      Ft = () => [xe, ne, te],
      Jt = () => [ml, "full", ...K()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [An],
        breakpoint: [An],
        color: [q2],
        container: [An],
        "drop-shadow": [An],
        ease: ["in", "out", "in-out"],
        font: [Q2],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [An],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [An],
        shadow: [An],
        spacing: ["px", xe],
        text: [An],
        "text-shadow": [An],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", ml, te, ne, j] }],
        container: ["container"],
        columns: [{ columns: [xe, te, ne, y] }],
        "break-after": [{ "break-after": Y() }],
        "break-before": [{ "break-before": Y() }],
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
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: P() }],
        overflow: [{ overflow: I() }],
        "overflow-x": [{ "overflow-x": I() }],
        "overflow-y": [{ "overflow-y": I() }],
        overscroll: [{ overscroll: Q() }],
        "overscroll-x": [{ "overscroll-x": Q() }],
        "overscroll-y": [{ "overscroll-y": Q() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: se() }],
        "inset-x": [{ "inset-x": se() }],
        "inset-y": [{ "inset-y": se() }],
        start: [{ start: se() }],
        end: [{ end: se() }],
        top: [{ top: se() }],
        right: [{ right: se() }],
        bottom: [{ bottom: se() }],
        left: [{ left: se() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Wn, "auto", ne, te] }],
        basis: [{ basis: [ml, "full", "auto", y, ...K()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [xe, ml, "auto", "initial", "none", te] }],
        grow: [{ grow: ["", xe, ne, te] }],
        shrink: [{ shrink: ["", xe, ne, te] }],
        order: [{ order: [Wn, "first", "last", "none", ne, te] }],
        "grid-cols": [{ "grid-cols": ue() }],
        "col-start-end": [{ col: he() }],
        "col-start": [{ "col-start": J() }],
        "col-end": [{ "col-end": J() }],
        "grid-rows": [{ "grid-rows": ue() }],
        "row-start-end": [{ row: he() }],
        "row-start": [{ "row-start": J() }],
        "row-end": [{ "row-end": J() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": fe() }],
        "auto-rows": [{ "auto-rows": fe() }],
        gap: [{ gap: K() }],
        "gap-x": [{ "gap-x": K() }],
        "gap-y": [{ "gap-y": K() }],
        "justify-content": [{ justify: [...W(), "normal"] }],
        "justify-items": [{ "justify-items": [...de(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...de()] }],
        "align-content": [{ content: ["normal", ...W()] }],
        "align-items": [{ items: [...de(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...de(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": W() }],
        "place-items": [{ "place-items": [...de(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...de()] }],
        p: [{ p: K() }],
        px: [{ px: K() }],
        py: [{ py: K() }],
        ps: [{ ps: K() }],
        pe: [{ pe: K() }],
        pt: [{ pt: K() }],
        pr: [{ pr: K() }],
        pb: [{ pb: K() }],
        pl: [{ pl: K() }],
        m: [{ m: R() }],
        mx: [{ mx: R() }],
        my: [{ my: R() }],
        ms: [{ ms: R() }],
        me: [{ me: R() }],
        mt: [{ mt: R() }],
        mr: [{ mr: R() }],
        mb: [{ mb: R() }],
        ml: [{ ml: R() }],
        "space-x": [{ "space-x": K() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": K() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: X() }],
        w: [{ w: [y, "screen", ...X()] }],
        "min-w": [{ "min-w": [y, "screen", "none", ...X()] }],
        "max-w": [
          { "max-w": [y, "screen", "none", "prose", { screen: [m] }, ...X()] },
        ],
        h: [{ h: ["screen", "lh", ...X()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...X()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...X()] }],
        "font-size": [{ text: ["base", r, vi, Ta] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [c, ne, au] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              nu,
              te,
            ],
          },
        ],
        "font-family": [{ font: [Z2, te, i] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [f, ne, te] }],
        "line-clamp": [{ "line-clamp": [xe, "none", ne, au] }],
        leading: [{ leading: [h, ...K()] }],
        "list-image": [{ "list-image": ["none", ne, te] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ne, te] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: U() }],
        "text-color": [{ text: U() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ce(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [xe, "from-font", "auto", ne, Ta] },
        ],
        "text-decoration-color": [{ decoration: U() }],
        "underline-offset": [{ "underline-offset": [xe, "auto", ne, te] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: K() }],
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
              ne,
              te,
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
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ne, te] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: re() }],
        "bg-repeat": [{ bg: pe() }],
        "bg-size": [{ bg: A() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Wn,
                  ne,
                  te,
                ],
                radial: ["", ne, te],
                conic: [Wn, ne, te],
              },
              J2,
              K2,
            ],
          },
        ],
        "bg-color": [{ bg: U() }],
        "gradient-from-pos": [{ from: B() }],
        "gradient-via-pos": [{ via: B() }],
        "gradient-to-pos": [{ to: B() }],
        "gradient-from": [{ from: U() }],
        "gradient-via": [{ via: U() }],
        "gradient-to": [{ to: U() }],
        rounded: [{ rounded: F() }],
        "rounded-s": [{ "rounded-s": F() }],
        "rounded-e": [{ "rounded-e": F() }],
        "rounded-t": [{ "rounded-t": F() }],
        "rounded-r": [{ "rounded-r": F() }],
        "rounded-b": [{ "rounded-b": F() }],
        "rounded-l": [{ "rounded-l": F() }],
        "rounded-ss": [{ "rounded-ss": F() }],
        "rounded-se": [{ "rounded-se": F() }],
        "rounded-ee": [{ "rounded-ee": F() }],
        "rounded-es": [{ "rounded-es": F() }],
        "rounded-tl": [{ "rounded-tl": F() }],
        "rounded-tr": [{ "rounded-tr": F() }],
        "rounded-br": [{ "rounded-br": F() }],
        "rounded-bl": [{ "rounded-bl": F() }],
        "border-w": [{ border: $() }],
        "border-w-x": [{ "border-x": $() }],
        "border-w-y": [{ "border-y": $() }],
        "border-w-s": [{ "border-s": $() }],
        "border-w-e": [{ "border-e": $() }],
        "border-w-t": [{ "border-t": $() }],
        "border-w-r": [{ "border-r": $() }],
        "border-w-b": [{ "border-b": $() }],
        "border-w-l": [{ "border-l": $() }],
        "divide-x": [{ "divide-x": $() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": $() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ce(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ce(), "hidden", "none"] }],
        "border-color": [{ border: U() }],
        "border-color-x": [{ "border-x": U() }],
        "border-color-y": [{ "border-y": U() }],
        "border-color-s": [{ "border-s": U() }],
        "border-color-e": [{ "border-e": U() }],
        "border-color-t": [{ "border-t": U() }],
        "border-color-r": [{ "border-r": U() }],
        "border-color-b": [{ "border-b": U() }],
        "border-color-l": [{ "border-l": U() }],
        "divide-color": [{ divide: U() }],
        "outline-style": [{ outline: [...ce(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [xe, ne, te] }],
        "outline-w": [{ outline: ["", xe, vi, Ta] }],
        "outline-color": [{ outline: U() }],
        shadow: [{ shadow: ["", "none", x, er, Is] }],
        "shadow-color": [{ shadow: U() }],
        "inset-shadow": [{ "inset-shadow": ["none", b, er, Is] }],
        "inset-shadow-color": [{ "inset-shadow": U() }],
        "ring-w": [{ ring: $() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: U() }],
        "ring-offset-w": [{ "ring-offset": [xe, Ta] }],
        "ring-offset-color": [{ "ring-offset": U() }],
        "inset-ring-w": [{ "inset-ring": $() }],
        "inset-ring-color": [{ "inset-ring": U() }],
        "text-shadow": [{ "text-shadow": ["none", E, er, Is] }],
        "text-shadow-color": [{ "text-shadow": U() }],
        opacity: [{ opacity: [xe, ne, te] }],
        "mix-blend": [
          { "mix-blend": [...ge(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": ge() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [xe] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": le() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": le() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": U() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": U() }],
        "mask-image-t-from-pos": [{ "mask-t-from": le() }],
        "mask-image-t-to-pos": [{ "mask-t-to": le() }],
        "mask-image-t-from-color": [{ "mask-t-from": U() }],
        "mask-image-t-to-color": [{ "mask-t-to": U() }],
        "mask-image-r-from-pos": [{ "mask-r-from": le() }],
        "mask-image-r-to-pos": [{ "mask-r-to": le() }],
        "mask-image-r-from-color": [{ "mask-r-from": U() }],
        "mask-image-r-to-color": [{ "mask-r-to": U() }],
        "mask-image-b-from-pos": [{ "mask-b-from": le() }],
        "mask-image-b-to-pos": [{ "mask-b-to": le() }],
        "mask-image-b-from-color": [{ "mask-b-from": U() }],
        "mask-image-b-to-color": [{ "mask-b-to": U() }],
        "mask-image-l-from-pos": [{ "mask-l-from": le() }],
        "mask-image-l-to-pos": [{ "mask-l-to": le() }],
        "mask-image-l-from-color": [{ "mask-l-from": U() }],
        "mask-image-l-to-color": [{ "mask-l-to": U() }],
        "mask-image-x-from-pos": [{ "mask-x-from": le() }],
        "mask-image-x-to-pos": [{ "mask-x-to": le() }],
        "mask-image-x-from-color": [{ "mask-x-from": U() }],
        "mask-image-x-to-color": [{ "mask-x-to": U() }],
        "mask-image-y-from-pos": [{ "mask-y-from": le() }],
        "mask-image-y-to-pos": [{ "mask-y-to": le() }],
        "mask-image-y-from-color": [{ "mask-y-from": U() }],
        "mask-image-y-to-color": [{ "mask-y-to": U() }],
        "mask-image-radial": [{ "mask-radial": [ne, te] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": le() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": le() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": U() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": U() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": Z() }],
        "mask-image-conic-pos": [{ "mask-conic": [xe] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": le() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": le() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": U() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": U() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: re() }],
        "mask-repeat": [{ mask: pe() }],
        "mask-size": [{ mask: A() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ne, te] }],
        filter: [{ filter: ["", "none", ne, te] }],
        blur: [{ blur: qe() }],
        brightness: [{ brightness: [xe, ne, te] }],
        contrast: [{ contrast: [xe, ne, te] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", O, er, Is] }],
        "drop-shadow-color": [{ "drop-shadow": U() }],
        grayscale: [{ grayscale: ["", xe, ne, te] }],
        "hue-rotate": [{ "hue-rotate": [xe, ne, te] }],
        invert: [{ invert: ["", xe, ne, te] }],
        saturate: [{ saturate: [xe, ne, te] }],
        sepia: [{ sepia: ["", xe, ne, te] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ne, te] }],
        "backdrop-blur": [{ "backdrop-blur": qe() }],
        "backdrop-brightness": [{ "backdrop-brightness": [xe, ne, te] }],
        "backdrop-contrast": [{ "backdrop-contrast": [xe, ne, te] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", xe, ne, te] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [xe, ne, te] }],
        "backdrop-invert": [{ "backdrop-invert": ["", xe, ne, te] }],
        "backdrop-opacity": [{ "backdrop-opacity": [xe, ne, te] }],
        "backdrop-saturate": [{ "backdrop-saturate": [xe, ne, te] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", xe, ne, te] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": K() }],
        "border-spacing-x": [{ "border-spacing-x": K() }],
        "border-spacing-y": [{ "border-spacing-y": K() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ne,
              te,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [xe, "initial", ne, te] }],
        ease: [{ ease: ["linear", "initial", L, ne, te] }],
        delay: [{ delay: [xe, ne, te] }],
        animate: [{ animate: ["none", G, ne, te] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [N, ne, te] }],
        "perspective-origin": [{ "perspective-origin": P() }],
        rotate: [{ rotate: Re() }],
        "rotate-x": [{ "rotate-x": Re() }],
        "rotate-y": [{ "rotate-y": Re() }],
        "rotate-z": [{ "rotate-z": Re() }],
        scale: [{ scale: Ot() }],
        "scale-x": [{ "scale-x": Ot() }],
        "scale-y": [{ "scale-y": Ot() }],
        "scale-z": [{ "scale-z": Ot() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Ft() }],
        "skew-x": [{ "skew-x": Ft() }],
        "skew-y": [{ "skew-y": Ft() }],
        transform: [{ transform: [ne, te, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: P() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Jt() }],
        "translate-x": [{ "translate-x": Jt() }],
        "translate-y": [{ "translate-y": Jt() }],
        "translate-z": [{ "translate-z": Jt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: U() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: U() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
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
              ne,
              te,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": K() }],
        "scroll-mx": [{ "scroll-mx": K() }],
        "scroll-my": [{ "scroll-my": K() }],
        "scroll-ms": [{ "scroll-ms": K() }],
        "scroll-me": [{ "scroll-me": K() }],
        "scroll-mt": [{ "scroll-mt": K() }],
        "scroll-mr": [{ "scroll-mr": K() }],
        "scroll-mb": [{ "scroll-mb": K() }],
        "scroll-ml": [{ "scroll-ml": K() }],
        "scroll-p": [{ "scroll-p": K() }],
        "scroll-px": [{ "scroll-px": K() }],
        "scroll-py": [{ "scroll-py": K() }],
        "scroll-ps": [{ "scroll-ps": K() }],
        "scroll-pe": [{ "scroll-pe": K() }],
        "scroll-pt": [{ "scroll-pt": K() }],
        "scroll-pr": [{ "scroll-pr": K() }],
        "scroll-pb": [{ "scroll-pb": K() }],
        "scroll-pl": [{ "scroll-pl": K() }],
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
          {
            "will-change": ["auto", "scroll", "contents", "transform", ne, te],
          },
        ],
        fill: [{ fill: ["none", ...U()] }],
        "stroke-w": [{ stroke: [xe, vi, Ta, au] }],
        stroke: [{ stroke: ["none", ...U()] }],
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
          "border-w-x",
          "border-w-y",
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
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
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
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  I2 = k2(W2);
function Ct(...a) {
  return I2(Fg(a));
}
const ew = L1,
  oy = w.forwardRef(({ className: a, ...i }, r) =>
    u.jsx(Gg, {
      ref: r,
      className: Ct(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        a
      ),
      ...i,
    })
  );
oy.displayName = Gg.displayName;
const tw = H1(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  cy = w.forwardRef(({ className: a, variant: i, ...r }, c) =>
    u.jsx(Vg, { ref: c, className: Ct(tw({ variant: i }), a), ...r })
  );
cy.displayName = Vg.displayName;
const nw = w.forwardRef(({ className: a, ...i }, r) =>
  u.jsx(Xg, {
    ref: r,
    className: Ct(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      a
    ),
    ...i,
  })
);
nw.displayName = Xg.displayName;
const uy = w.forwardRef(({ className: a, ...i }, r) =>
  u.jsx(Kg, {
    ref: r,
    className: Ct(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      a
    ),
    "toast-close": "",
    ...i,
    children: u.jsx(f2, { className: "h-4 w-4" }),
  })
);
uy.displayName = Kg.displayName;
const fy = w.forwardRef(({ className: a, ...i }, r) =>
  u.jsx(Yg, { ref: r, className: Ct("text-sm font-semibold", a), ...i })
);
fy.displayName = Yg.displayName;
const dy = w.forwardRef(({ className: a, ...i }, r) =>
  u.jsx(Qg, { ref: r, className: Ct("text-sm opacity-90", a), ...i })
);
dy.displayName = Qg.displayName;
function aw() {
  const { toasts: a } = Hb();
  return u.jsxs(ew, {
    children: [
      a.map(function ({ id: i, title: r, description: c, action: f, ...h }) {
        return u.jsxs(
          cy,
          {
            ...h,
            children: [
              u.jsxs("div", {
                className: "grid gap-1",
                children: [
                  r && u.jsx(fy, { children: r }),
                  c && u.jsx(dy, { children: c }),
                ],
              }),
              f,
              u.jsx(uy, {}),
            ],
          },
          i
        );
      }),
      u.jsx(oy, {}),
    ],
  });
}
const lw = ["top", "right", "bottom", "left"],
  aa = Math.min,
  jt = Math.max,
  ur = Math.round,
  tr = Math.floor,
  nn = (a) => ({ x: a, y: a }),
  iw = { left: "right", right: "left", bottom: "top", top: "bottom" },
  sw = { start: "end", end: "start" };
function ju(a, i, r) {
  return jt(a, aa(i, r));
}
function Tn(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function jn(a) {
  return a.split("-")[0];
}
function wl(a) {
  return a.split("-")[1];
}
function Yu(a) {
  return a === "x" ? "y" : "x";
}
function Qu(a) {
  return a === "y" ? "height" : "width";
}
const rw = new Set(["top", "bottom"]);
function tn(a) {
  return rw.has(jn(a)) ? "y" : "x";
}
function Xu(a) {
  return Yu(tn(a));
}
function ow(a, i, r) {
  r === void 0 && (r = !1);
  const c = wl(a),
    f = Xu(a),
    h = Qu(f);
  let m =
    f === "x"
      ? c === (r ? "end" : "start")
        ? "right"
        : "left"
      : c === "start"
      ? "bottom"
      : "top";
  return i.reference[h] > i.floating[h] && (m = fr(m)), [m, fr(m)];
}
function cw(a) {
  const i = fr(a);
  return [Nu(a), i, Nu(i)];
}
function Nu(a) {
  return a.replace(/start|end/g, (i) => sw[i]);
}
const Yp = ["left", "right"],
  Qp = ["right", "left"],
  uw = ["top", "bottom"],
  fw = ["bottom", "top"];
function dw(a, i, r) {
  switch (a) {
    case "top":
    case "bottom":
      return r ? (i ? Qp : Yp) : i ? Yp : Qp;
    case "left":
    case "right":
      return i ? uw : fw;
    default:
      return [];
  }
}
function hw(a, i, r, c) {
  const f = wl(a);
  let h = dw(jn(a), r === "start", c);
  return (
    f && ((h = h.map((m) => m + "-" + f)), i && (h = h.concat(h.map(Nu)))), h
  );
}
function fr(a) {
  return a.replace(/left|right|bottom|top/g, (i) => iw[i]);
}
function mw(a) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...a };
}
function hy(a) {
  return typeof a != "number"
    ? mw(a)
    : { top: a, right: a, bottom: a, left: a };
}
function dr(a) {
  const { x: i, y: r, width: c, height: f } = a;
  return {
    width: c,
    height: f,
    top: r,
    left: i,
    right: i + c,
    bottom: r + f,
    x: i,
    y: r,
  };
}
function Xp(a, i, r) {
  let { reference: c, floating: f } = a;
  const h = tn(i),
    m = Xu(i),
    y = Qu(m),
    v = jn(i),
    p = h === "y",
    x = c.x + c.width / 2 - f.width / 2,
    b = c.y + c.height / 2 - f.height / 2,
    E = c[y] / 2 - f[y] / 2;
  let O;
  switch (v) {
    case "top":
      O = { x, y: c.y - f.height };
      break;
    case "bottom":
      O = { x, y: c.y + c.height };
      break;
    case "right":
      O = { x: c.x + c.width, y: b };
      break;
    case "left":
      O = { x: c.x - f.width, y: b };
      break;
    default:
      O = { x: c.x, y: c.y };
  }
  switch (wl(i)) {
    case "start":
      O[m] -= E * (r && p ? -1 : 1);
      break;
    case "end":
      O[m] += E * (r && p ? -1 : 1);
      break;
  }
  return O;
}
const pw = async (a, i, r) => {
  const {
      placement: c = "bottom",
      strategy: f = "absolute",
      middleware: h = [],
      platform: m,
    } = r,
    y = h.filter(Boolean),
    v = await (m.isRTL == null ? void 0 : m.isRTL(i));
  let p = await m.getElementRects({ reference: a, floating: i, strategy: f }),
    { x, y: b } = Xp(p, c, v),
    E = c,
    O = {},
    k = 0;
  for (let N = 0; N < y.length; N++) {
    const { name: j, fn: L } = y[N],
      {
        x: G,
        y: Y,
        data: Z,
        reset: P,
      } = await L({
        x,
        y: b,
        initialPlacement: c,
        placement: E,
        strategy: f,
        middlewareData: O,
        rects: p,
        platform: m,
        elements: { reference: a, floating: i },
      });
    (x = G ?? x),
      (b = Y ?? b),
      (O = { ...O, [j]: { ...O[j], ...Z } }),
      P &&
        k <= 50 &&
        (k++,
        typeof P == "object" &&
          (P.placement && (E = P.placement),
          P.rects &&
            (p =
              P.rects === !0
                ? await m.getElementRects({
                    reference: a,
                    floating: i,
                    strategy: f,
                  })
                : P.rects),
          ({ x, y: b } = Xp(p, E, v))),
        (N = -1));
  }
  return { x, y: b, placement: E, strategy: f, middlewareData: O };
};
async function ji(a, i) {
  var r;
  i === void 0 && (i = {});
  const { x: c, y: f, platform: h, rects: m, elements: y, strategy: v } = a,
    {
      boundary: p = "clippingAncestors",
      rootBoundary: x = "viewport",
      elementContext: b = "floating",
      altBoundary: E = !1,
      padding: O = 0,
    } = Tn(i, a),
    k = hy(O),
    j = y[E ? (b === "floating" ? "reference" : "floating") : b],
    L = dr(
      await h.getClippingRect({
        element:
          (r = await (h.isElement == null ? void 0 : h.isElement(j))) == null ||
          r
            ? j
            : j.contextElement ||
              (await (h.getDocumentElement == null
                ? void 0
                : h.getDocumentElement(y.floating))),
        boundary: p,
        rootBoundary: x,
        strategy: v,
      })
    ),
    G =
      b === "floating"
        ? { x: c, y: f, width: m.floating.width, height: m.floating.height }
        : m.reference,
    Y = await (h.getOffsetParent == null
      ? void 0
      : h.getOffsetParent(y.floating)),
    Z = (await (h.isElement == null ? void 0 : h.isElement(Y)))
      ? (await (h.getScale == null ? void 0 : h.getScale(Y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    P = dr(
      h.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await h.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: y,
            rect: G,
            offsetParent: Y,
            strategy: v,
          })
        : G
    );
  return {
    top: (L.top - P.top + k.top) / Z.y,
    bottom: (P.bottom - L.bottom + k.bottom) / Z.y,
    left: (L.left - P.left + k.left) / Z.x,
    right: (P.right - L.right + k.right) / Z.x,
  };
}
const gw = (a) => ({
    name: "arrow",
    options: a,
    async fn(i) {
      const {
          x: r,
          y: c,
          placement: f,
          rects: h,
          platform: m,
          elements: y,
          middlewareData: v,
        } = i,
        { element: p, padding: x = 0 } = Tn(a, i) || {};
      if (p == null) return {};
      const b = hy(x),
        E = { x: r, y: c },
        O = Xu(f),
        k = Qu(O),
        N = await m.getDimensions(p),
        j = O === "y",
        L = j ? "top" : "left",
        G = j ? "bottom" : "right",
        Y = j ? "clientHeight" : "clientWidth",
        Z = h.reference[k] + h.reference[O] - E[O] - h.floating[k],
        P = E[O] - h.reference[O],
        I = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(p));
      let Q = I ? I[Y] : 0;
      (!Q || !(await (m.isElement == null ? void 0 : m.isElement(I)))) &&
        (Q = y.floating[Y] || h.floating[k]);
      const K = Z / 2 - P / 2,
        se = Q / 2 - N[k] / 2 - 1,
        ue = aa(b[L], se),
        he = aa(b[G], se),
        J = ue,
        fe = Q - N[k] - he,
        W = Q / 2 - N[k] / 2 + K,
        de = ju(J, W, fe),
        R =
          !v.arrow &&
          wl(f) != null &&
          W !== de &&
          h.reference[k] / 2 - (W < J ? ue : he) - N[k] / 2 < 0,
        X = R ? (W < J ? W - J : W - fe) : 0;
      return {
        [O]: E[O] + X,
        data: {
          [O]: de,
          centerOffset: W - de - X,
          ...(R && { alignmentOffset: X }),
        },
        reset: R,
      };
    },
  }),
  yw = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "flip",
        options: a,
        async fn(i) {
          var r, c;
          const {
              placement: f,
              middlewareData: h,
              rects: m,
              initialPlacement: y,
              platform: v,
              elements: p,
            } = i,
            {
              mainAxis: x = !0,
              crossAxis: b = !0,
              fallbackPlacements: E,
              fallbackStrategy: O = "bestFit",
              fallbackAxisSideDirection: k = "none",
              flipAlignment: N = !0,
              ...j
            } = Tn(a, i);
          if ((r = h.arrow) != null && r.alignmentOffset) return {};
          const L = jn(f),
            G = tn(y),
            Y = jn(y) === y,
            Z = await (v.isRTL == null ? void 0 : v.isRTL(p.floating)),
            P = E || (Y || !N ? [fr(y)] : cw(y)),
            I = k !== "none";
          !E && I && P.push(...hw(y, N, k, Z));
          const Q = [y, ...P],
            K = await ji(i, j),
            se = [];
          let ue = ((c = h.flip) == null ? void 0 : c.overflows) || [];
          if ((x && se.push(K[L]), b)) {
            const W = ow(f, m, Z);
            se.push(K[W[0]], K[W[1]]);
          }
          if (
            ((ue = [...ue, { placement: f, overflows: se }]),
            !se.every((W) => W <= 0))
          ) {
            var he, J;
            const W = (((he = h.flip) == null ? void 0 : he.index) || 0) + 1,
              de = Q[W];
            if (
              de &&
              (!(b === "alignment" ? G !== tn(de) : !1) ||
                ue.every((U) =>
                  tn(U.placement) === G ? U.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: W, overflows: ue },
                reset: { placement: de },
              };
            let R =
              (J = ue
                .filter((X) => X.overflows[0] <= 0)
                .sort((X, U) => X.overflows[1] - U.overflows[1])[0]) == null
                ? void 0
                : J.placement;
            if (!R)
              switch (O) {
                case "bestFit": {
                  var fe;
                  const X =
                    (fe = ue
                      .filter((U) => {
                        if (I) {
                          const re = tn(U.placement);
                          return re === G || re === "y";
                        }
                        return !0;
                      })
                      .map((U) => [
                        U.placement,
                        U.overflows
                          .filter((re) => re > 0)
                          .reduce((re, pe) => re + pe, 0),
                      ])
                      .sort((U, re) => U[1] - re[1])[0]) == null
                      ? void 0
                      : fe[0];
                  X && (R = X);
                  break;
                }
                case "initialPlacement":
                  R = y;
                  break;
              }
            if (f !== R) return { reset: { placement: R } };
          }
          return {};
        },
      }
    );
  };
function Kp(a, i) {
  return {
    top: a.top - i.height,
    right: a.right - i.width,
    bottom: a.bottom - i.height,
    left: a.left - i.width,
  };
}
function Zp(a) {
  return lw.some((i) => a[i] >= 0);
}
const vw = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "hide",
        options: a,
        async fn(i) {
          const { rects: r } = i,
            { strategy: c = "referenceHidden", ...f } = Tn(a, i);
          switch (c) {
            case "referenceHidden": {
              const h = await ji(i, { ...f, elementContext: "reference" }),
                m = Kp(h, r.reference);
              return {
                data: { referenceHiddenOffsets: m, referenceHidden: Zp(m) },
              };
            }
            case "escaped": {
              const h = await ji(i, { ...f, altBoundary: !0 }),
                m = Kp(h, r.floating);
              return { data: { escapedOffsets: m, escaped: Zp(m) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  my = new Set(["left", "top"]);
async function xw(a, i) {
  const { placement: r, platform: c, elements: f } = a,
    h = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)),
    m = jn(r),
    y = wl(r),
    v = tn(r) === "y",
    p = my.has(m) ? -1 : 1,
    x = h && v ? -1 : 1,
    b = Tn(i, a);
  let {
    mainAxis: E,
    crossAxis: O,
    alignmentAxis: k,
  } = typeof b == "number"
    ? { mainAxis: b, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: b.mainAxis || 0,
        crossAxis: b.crossAxis || 0,
        alignmentAxis: b.alignmentAxis,
      };
  return (
    y && typeof k == "number" && (O = y === "end" ? k * -1 : k),
    v ? { x: O * x, y: E * p } : { x: E * p, y: O * x }
  );
}
const bw = function (a) {
    return (
      a === void 0 && (a = 0),
      {
        name: "offset",
        options: a,
        async fn(i) {
          var r, c;
          const { x: f, y: h, placement: m, middlewareData: y } = i,
            v = await xw(i, a);
          return m === ((r = y.offset) == null ? void 0 : r.placement) &&
            (c = y.arrow) != null &&
            c.alignmentOffset
            ? {}
            : { x: f + v.x, y: h + v.y, data: { ...v, placement: m } };
        },
      }
    );
  },
  ww = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "shift",
        options: a,
        async fn(i) {
          const { x: r, y: c, placement: f } = i,
            {
              mainAxis: h = !0,
              crossAxis: m = !1,
              limiter: y = {
                fn: (j) => {
                  let { x: L, y: G } = j;
                  return { x: L, y: G };
                },
              },
              ...v
            } = Tn(a, i),
            p = { x: r, y: c },
            x = await ji(i, v),
            b = tn(jn(f)),
            E = Yu(b);
          let O = p[E],
            k = p[b];
          if (h) {
            const j = E === "y" ? "top" : "left",
              L = E === "y" ? "bottom" : "right",
              G = O + x[j],
              Y = O - x[L];
            O = ju(G, O, Y);
          }
          if (m) {
            const j = b === "y" ? "top" : "left",
              L = b === "y" ? "bottom" : "right",
              G = k + x[j],
              Y = k - x[L];
            k = ju(G, k, Y);
          }
          const N = y.fn({ ...i, [E]: O, [b]: k });
          return {
            ...N,
            data: { x: N.x - r, y: N.y - c, enabled: { [E]: h, [b]: m } },
          };
        },
      }
    );
  },
  Sw = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        options: a,
        fn(i) {
          const { x: r, y: c, placement: f, rects: h, middlewareData: m } = i,
            { offset: y = 0, mainAxis: v = !0, crossAxis: p = !0 } = Tn(a, i),
            x = { x: r, y: c },
            b = tn(f),
            E = Yu(b);
          let O = x[E],
            k = x[b];
          const N = Tn(y, i),
            j =
              typeof N == "number"
                ? { mainAxis: N, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...N };
          if (v) {
            const Y = E === "y" ? "height" : "width",
              Z = h.reference[E] - h.floating[Y] + j.mainAxis,
              P = h.reference[E] + h.reference[Y] - j.mainAxis;
            O < Z ? (O = Z) : O > P && (O = P);
          }
          if (p) {
            var L, G;
            const Y = E === "y" ? "width" : "height",
              Z = my.has(jn(f)),
              P =
                h.reference[b] -
                h.floating[Y] +
                ((Z && ((L = m.offset) == null ? void 0 : L[b])) || 0) +
                (Z ? 0 : j.crossAxis),
              I =
                h.reference[b] +
                h.reference[Y] +
                (Z ? 0 : ((G = m.offset) == null ? void 0 : G[b]) || 0) -
                (Z ? j.crossAxis : 0);
            k < P ? (k = P) : k > I && (k = I);
          }
          return { [E]: O, [b]: k };
        },
      }
    );
  },
  Ew = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "size",
        options: a,
        async fn(i) {
          var r, c;
          const { placement: f, rects: h, platform: m, elements: y } = i,
            { apply: v = () => {}, ...p } = Tn(a, i),
            x = await ji(i, p),
            b = jn(f),
            E = wl(f),
            O = tn(f) === "y",
            { width: k, height: N } = h.floating;
          let j, L;
          b === "top" || b === "bottom"
            ? ((j = b),
              (L =
                E ===
                ((await (m.isRTL == null ? void 0 : m.isRTL(y.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((L = b), (j = E === "end" ? "top" : "bottom"));
          const G = N - x.top - x.bottom,
            Y = k - x.left - x.right,
            Z = aa(N - x[j], G),
            P = aa(k - x[L], Y),
            I = !i.middlewareData.shift;
          let Q = Z,
            K = P;
          if (
            ((r = i.middlewareData.shift) != null && r.enabled.x && (K = Y),
            (c = i.middlewareData.shift) != null && c.enabled.y && (Q = G),
            I && !E)
          ) {
            const ue = jt(x.left, 0),
              he = jt(x.right, 0),
              J = jt(x.top, 0),
              fe = jt(x.bottom, 0);
            O
              ? (K =
                  k -
                  2 * (ue !== 0 || he !== 0 ? ue + he : jt(x.left, x.right)))
              : (Q =
                  N - 2 * (J !== 0 || fe !== 0 ? J + fe : jt(x.top, x.bottom)));
          }
          await v({ ...i, availableWidth: K, availableHeight: Q });
          const se = await m.getDimensions(y.floating);
          return k !== se.width || N !== se.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function wr() {
  return typeof window < "u";
}
function Sl(a) {
  return py(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function Nt(a) {
  var i;
  return (
    (a == null || (i = a.ownerDocument) == null ? void 0 : i.defaultView) ||
    window
  );
}
function ln(a) {
  var i;
  return (i = (py(a) ? a.ownerDocument : a.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function py(a) {
  return wr() ? a instanceof Node || a instanceof Nt(a).Node : !1;
}
function Kt(a) {
  return wr() ? a instanceof Element || a instanceof Nt(a).Element : !1;
}
function an(a) {
  return wr() ? a instanceof HTMLElement || a instanceof Nt(a).HTMLElement : !1;
}
function Fp(a) {
  return !wr() || typeof ShadowRoot > "u"
    ? !1
    : a instanceof ShadowRoot || a instanceof Nt(a).ShadowRoot;
}
const Aw = new Set(["inline", "contents"]);
function Mi(a) {
  const { overflow: i, overflowX: r, overflowY: c, display: f } = Zt(a);
  return /auto|scroll|overlay|hidden|clip/.test(i + c + r) && !Aw.has(f);
}
const Tw = new Set(["table", "td", "th"]);
function jw(a) {
  return Tw.has(Sl(a));
}
const Nw = [":popover-open", ":modal"];
function Sr(a) {
  return Nw.some((i) => {
    try {
      return a.matches(i);
    } catch {
      return !1;
    }
  });
}
const Cw = ["transform", "translate", "scale", "rotate", "perspective"],
  Ow = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Rw = ["paint", "layout", "strict", "content"];
function Ku(a) {
  const i = Zu(),
    r = Kt(a) ? Zt(a) : a;
  return (
    Cw.some((c) => (r[c] ? r[c] !== "none" : !1)) ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!i && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!i && (r.filter ? r.filter !== "none" : !1)) ||
    Ow.some((c) => (r.willChange || "").includes(c)) ||
    Rw.some((c) => (r.contain || "").includes(c))
  );
}
function Mw(a) {
  let i = la(a);
  for (; an(i) && !yl(i); ) {
    if (Ku(i)) return i;
    if (Sr(i)) return null;
    i = la(i);
  }
  return null;
}
function Zu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const kw = new Set(["html", "body", "#document"]);
function yl(a) {
  return kw.has(Sl(a));
}
function Zt(a) {
  return Nt(a).getComputedStyle(a);
}
function Er(a) {
  return Kt(a)
    ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop }
    : { scrollLeft: a.scrollX, scrollTop: a.scrollY };
}
function la(a) {
  if (Sl(a) === "html") return a;
  const i = a.assignedSlot || a.parentNode || (Fp(a) && a.host) || ln(a);
  return Fp(i) ? i.host : i;
}
function gy(a) {
  const i = la(a);
  return yl(i)
    ? a.ownerDocument
      ? a.ownerDocument.body
      : a.body
    : an(i) && Mi(i)
    ? i
    : gy(i);
}
function Ni(a, i, r) {
  var c;
  i === void 0 && (i = []), r === void 0 && (r = !0);
  const f = gy(a),
    h = f === ((c = a.ownerDocument) == null ? void 0 : c.body),
    m = Nt(f);
  if (h) {
    const y = Cu(m);
    return i.concat(
      m,
      m.visualViewport || [],
      Mi(f) ? f : [],
      y && r ? Ni(y) : []
    );
  }
  return i.concat(f, Ni(f, [], r));
}
function Cu(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
function yy(a) {
  const i = Zt(a);
  let r = parseFloat(i.width) || 0,
    c = parseFloat(i.height) || 0;
  const f = an(a),
    h = f ? a.offsetWidth : r,
    m = f ? a.offsetHeight : c,
    y = ur(r) !== h || ur(c) !== m;
  return y && ((r = h), (c = m)), { width: r, height: c, $: y };
}
function Fu(a) {
  return Kt(a) ? a : a.contextElement;
}
function gl(a) {
  const i = Fu(a);
  if (!an(i)) return nn(1);
  const r = i.getBoundingClientRect(),
    { width: c, height: f, $: h } = yy(i);
  let m = (h ? ur(r.width) : r.width) / c,
    y = (h ? ur(r.height) : r.height) / f;
  return (
    (!m || !Number.isFinite(m)) && (m = 1),
    (!y || !Number.isFinite(y)) && (y = 1),
    { x: m, y }
  );
}
const _w = nn(0);
function vy(a) {
  const i = Nt(a);
  return !Zu() || !i.visualViewport
    ? _w
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function zw(a, i, r) {
  return i === void 0 && (i = !1), !r || (i && r !== Nt(a)) ? !1 : i;
}
function Oa(a, i, r, c) {
  i === void 0 && (i = !1), r === void 0 && (r = !1);
  const f = a.getBoundingClientRect(),
    h = Fu(a);
  let m = nn(1);
  i && (c ? Kt(c) && (m = gl(c)) : (m = gl(a)));
  const y = zw(h, r, c) ? vy(h) : nn(0);
  let v = (f.left + y.x) / m.x,
    p = (f.top + y.y) / m.y,
    x = f.width / m.x,
    b = f.height / m.y;
  if (h) {
    const E = Nt(h),
      O = c && Kt(c) ? Nt(c) : c;
    let k = E,
      N = Cu(k);
    for (; N && c && O !== k; ) {
      const j = gl(N),
        L = N.getBoundingClientRect(),
        G = Zt(N),
        Y = L.left + (N.clientLeft + parseFloat(G.paddingLeft)) * j.x,
        Z = L.top + (N.clientTop + parseFloat(G.paddingTop)) * j.y;
      (v *= j.x),
        (p *= j.y),
        (x *= j.x),
        (b *= j.y),
        (v += Y),
        (p += Z),
        (k = Nt(N)),
        (N = Cu(k));
    }
  }
  return dr({ width: x, height: b, x: v, y: p });
}
function Ar(a, i) {
  const r = Er(a).scrollLeft;
  return i ? i.left + r : Oa(ln(a)).left + r;
}
function xy(a, i) {
  const r = a.getBoundingClientRect(),
    c = r.left + i.scrollLeft - Ar(a, r),
    f = r.top + i.scrollTop;
  return { x: c, y: f };
}
function Dw(a) {
  let { elements: i, rect: r, offsetParent: c, strategy: f } = a;
  const h = f === "fixed",
    m = ln(c),
    y = i ? Sr(i.floating) : !1;
  if (c === m || (y && h)) return r;
  let v = { scrollLeft: 0, scrollTop: 0 },
    p = nn(1);
  const x = nn(0),
    b = an(c);
  if (
    (b || (!b && !h)) &&
    ((Sl(c) !== "body" || Mi(m)) && (v = Er(c)), an(c))
  ) {
    const O = Oa(c);
    (p = gl(c)), (x.x = O.x + c.clientLeft), (x.y = O.y + c.clientTop);
  }
  const E = m && !b && !h ? xy(m, v) : nn(0);
  return {
    width: r.width * p.x,
    height: r.height * p.y,
    x: r.x * p.x - v.scrollLeft * p.x + x.x + E.x,
    y: r.y * p.y - v.scrollTop * p.y + x.y + E.y,
  };
}
function Uw(a) {
  return Array.from(a.getClientRects());
}
function Lw(a) {
  const i = ln(a),
    r = Er(a),
    c = a.ownerDocument.body,
    f = jt(i.scrollWidth, i.clientWidth, c.scrollWidth, c.clientWidth),
    h = jt(i.scrollHeight, i.clientHeight, c.scrollHeight, c.clientHeight);
  let m = -r.scrollLeft + Ar(a);
  const y = -r.scrollTop;
  return (
    Zt(c).direction === "rtl" && (m += jt(i.clientWidth, c.clientWidth) - f),
    { width: f, height: h, x: m, y }
  );
}
const Jp = 25;
function Hw(a, i) {
  const r = Nt(a),
    c = ln(a),
    f = r.visualViewport;
  let h = c.clientWidth,
    m = c.clientHeight,
    y = 0,
    v = 0;
  if (f) {
    (h = f.width), (m = f.height);
    const x = Zu();
    (!x || (x && i === "fixed")) && ((y = f.offsetLeft), (v = f.offsetTop));
  }
  const p = Ar(c);
  if (p <= 0) {
    const x = c.ownerDocument,
      b = x.body,
      E = getComputedStyle(b),
      O =
        (x.compatMode === "CSS1Compat" &&
          parseFloat(E.marginLeft) + parseFloat(E.marginRight)) ||
        0,
      k = Math.abs(c.clientWidth - b.clientWidth - O);
    k <= Jp && (h -= k);
  } else p <= Jp && (h += p);
  return { width: h, height: m, x: y, y: v };
}
const Bw = new Set(["absolute", "fixed"]);
function qw(a, i) {
  const r = Oa(a, !0, i === "fixed"),
    c = r.top + a.clientTop,
    f = r.left + a.clientLeft,
    h = an(a) ? gl(a) : nn(1),
    m = a.clientWidth * h.x,
    y = a.clientHeight * h.y,
    v = f * h.x,
    p = c * h.y;
  return { width: m, height: y, x: v, y: p };
}
function Pp(a, i, r) {
  let c;
  if (i === "viewport") c = Hw(a, r);
  else if (i === "document") c = Lw(ln(a));
  else if (Kt(i)) c = qw(i, r);
  else {
    const f = vy(a);
    c = { x: i.x - f.x, y: i.y - f.y, width: i.width, height: i.height };
  }
  return dr(c);
}
function by(a, i) {
  const r = la(a);
  return r === i || !Kt(r) || yl(r)
    ? !1
    : Zt(r).position === "fixed" || by(r, i);
}
function Gw(a, i) {
  const r = i.get(a);
  if (r) return r;
  let c = Ni(a, [], !1).filter((y) => Kt(y) && Sl(y) !== "body"),
    f = null;
  const h = Zt(a).position === "fixed";
  let m = h ? la(a) : a;
  for (; Kt(m) && !yl(m); ) {
    const y = Zt(m),
      v = Ku(m);
    !v && y.position === "fixed" && (f = null),
      (
        h
          ? !v && !f
          : (!v && y.position === "static" && !!f && Bw.has(f.position)) ||
            (Mi(m) && !v && by(a, m))
      )
        ? (c = c.filter((x) => x !== m))
        : (f = y),
      (m = la(m));
  }
  return i.set(a, c), c;
}
function Vw(a) {
  let { element: i, boundary: r, rootBoundary: c, strategy: f } = a;
  const m = [
      ...(r === "clippingAncestors"
        ? Sr(i)
          ? []
          : Gw(i, this._c)
        : [].concat(r)),
      c,
    ],
    y = m[0],
    v = m.reduce((p, x) => {
      const b = Pp(i, x, f);
      return (
        (p.top = jt(b.top, p.top)),
        (p.right = aa(b.right, p.right)),
        (p.bottom = aa(b.bottom, p.bottom)),
        (p.left = jt(b.left, p.left)),
        p
      );
    }, Pp(i, y, f));
  return {
    width: v.right - v.left,
    height: v.bottom - v.top,
    x: v.left,
    y: v.top,
  };
}
function Yw(a) {
  const { width: i, height: r } = yy(a);
  return { width: i, height: r };
}
function Qw(a, i, r) {
  const c = an(i),
    f = ln(i),
    h = r === "fixed",
    m = Oa(a, !0, h, i);
  let y = { scrollLeft: 0, scrollTop: 0 };
  const v = nn(0);
  function p() {
    v.x = Ar(f);
  }
  if (c || (!c && !h))
    if (((Sl(i) !== "body" || Mi(f)) && (y = Er(i)), c)) {
      const O = Oa(i, !0, h, i);
      (v.x = O.x + i.clientLeft), (v.y = O.y + i.clientTop);
    } else f && p();
  h && !c && f && p();
  const x = f && !c && !h ? xy(f, y) : nn(0),
    b = m.left + y.scrollLeft - v.x - x.x,
    E = m.top + y.scrollTop - v.y - x.y;
  return { x: b, y: E, width: m.width, height: m.height };
}
function lu(a) {
  return Zt(a).position === "static";
}
function $p(a, i) {
  if (!an(a) || Zt(a).position === "fixed") return null;
  if (i) return i(a);
  let r = a.offsetParent;
  return ln(a) === r && (r = r.ownerDocument.body), r;
}
function wy(a, i) {
  const r = Nt(a);
  if (Sr(a)) return r;
  if (!an(a)) {
    let f = la(a);
    for (; f && !yl(f); ) {
      if (Kt(f) && !lu(f)) return f;
      f = la(f);
    }
    return r;
  }
  let c = $p(a, i);
  for (; c && jw(c) && lu(c); ) c = $p(c, i);
  return c && yl(c) && lu(c) && !Ku(c) ? r : c || Mw(a) || r;
}
const Xw = async function (a) {
  const i = this.getOffsetParent || wy,
    r = this.getDimensions,
    c = await r(a.floating);
  return {
    reference: Qw(a.reference, await i(a.floating), a.strategy),
    floating: { x: 0, y: 0, width: c.width, height: c.height },
  };
};
function Kw(a) {
  return Zt(a).direction === "rtl";
}
const Zw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Dw,
  getDocumentElement: ln,
  getClippingRect: Vw,
  getOffsetParent: wy,
  getElementRects: Xw,
  getClientRects: Uw,
  getDimensions: Yw,
  getScale: gl,
  isElement: Kt,
  isRTL: Kw,
};
function Sy(a, i) {
  return (
    a.x === i.x && a.y === i.y && a.width === i.width && a.height === i.height
  );
}
function Fw(a, i) {
  let r = null,
    c;
  const f = ln(a);
  function h() {
    var y;
    clearTimeout(c), (y = r) == null || y.disconnect(), (r = null);
  }
  function m(y, v) {
    y === void 0 && (y = !1), v === void 0 && (v = 1), h();
    const p = a.getBoundingClientRect(),
      { left: x, top: b, width: E, height: O } = p;
    if ((y || i(), !E || !O)) return;
    const k = tr(b),
      N = tr(f.clientWidth - (x + E)),
      j = tr(f.clientHeight - (b + O)),
      L = tr(x),
      Y = {
        rootMargin: -k + "px " + -N + "px " + -j + "px " + -L + "px",
        threshold: jt(0, aa(1, v)) || 1,
      };
    let Z = !0;
    function P(I) {
      const Q = I[0].intersectionRatio;
      if (Q !== v) {
        if (!Z) return m();
        Q
          ? m(!1, Q)
          : (c = setTimeout(() => {
              m(!1, 1e-7);
            }, 1e3));
      }
      Q === 1 && !Sy(p, a.getBoundingClientRect()) && m(), (Z = !1);
    }
    try {
      r = new IntersectionObserver(P, { ...Y, root: f.ownerDocument });
    } catch {
      r = new IntersectionObserver(P, Y);
    }
    r.observe(a);
  }
  return m(!0), h;
}
function Jw(a, i, r, c) {
  c === void 0 && (c = {});
  const {
      ancestorScroll: f = !0,
      ancestorResize: h = !0,
      elementResize: m = typeof ResizeObserver == "function",
      layoutShift: y = typeof IntersectionObserver == "function",
      animationFrame: v = !1,
    } = c,
    p = Fu(a),
    x = f || h ? [...(p ? Ni(p) : []), ...Ni(i)] : [];
  x.forEach((L) => {
    f && L.addEventListener("scroll", r, { passive: !0 }),
      h && L.addEventListener("resize", r);
  });
  const b = p && y ? Fw(p, r) : null;
  let E = -1,
    O = null;
  m &&
    ((O = new ResizeObserver((L) => {
      let [G] = L;
      G &&
        G.target === p &&
        O &&
        (O.unobserve(i),
        cancelAnimationFrame(E),
        (E = requestAnimationFrame(() => {
          var Y;
          (Y = O) == null || Y.observe(i);
        }))),
        r();
    })),
    p && !v && O.observe(p),
    O.observe(i));
  let k,
    N = v ? Oa(a) : null;
  v && j();
  function j() {
    const L = Oa(a);
    N && !Sy(N, L) && r(), (N = L), (k = requestAnimationFrame(j));
  }
  return (
    r(),
    () => {
      var L;
      x.forEach((G) => {
        f && G.removeEventListener("scroll", r),
          h && G.removeEventListener("resize", r);
      }),
        b?.(),
        (L = O) == null || L.disconnect(),
        (O = null),
        v && cancelAnimationFrame(k);
    }
  );
}
const Pw = bw,
  $w = ww,
  Ww = yw,
  Iw = Ew,
  eS = vw,
  Wp = gw,
  tS = Sw,
  nS = (a, i, r) => {
    const c = new Map(),
      f = { platform: Zw, ...r },
      h = { ...f.platform, _c: c };
    return pw(a, i, { ...f, platform: h });
  };
var aS = typeof document < "u",
  lS = function () {},
  rr = aS ? w.useLayoutEffect : lS;
function hr(a, i) {
  if (a === i) return !0;
  if (typeof a != typeof i) return !1;
  if (typeof a == "function" && a.toString() === i.toString()) return !0;
  let r, c, f;
  if (a && i && typeof a == "object") {
    if (Array.isArray(a)) {
      if (((r = a.length), r !== i.length)) return !1;
      for (c = r; c-- !== 0; ) if (!hr(a[c], i[c])) return !1;
      return !0;
    }
    if (((f = Object.keys(a)), (r = f.length), r !== Object.keys(i).length))
      return !1;
    for (c = r; c-- !== 0; ) if (!{}.hasOwnProperty.call(i, f[c])) return !1;
    for (c = r; c-- !== 0; ) {
      const h = f[c];
      if (!(h === "_owner" && a.$$typeof) && !hr(a[h], i[h])) return !1;
    }
    return !0;
  }
  return a !== a && i !== i;
}
function Ey(a) {
  return typeof window > "u"
    ? 1
    : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ip(a, i) {
  const r = Ey(a);
  return Math.round(i * r) / r;
}
function iu(a) {
  const i = w.useRef(a);
  return (
    rr(() => {
      i.current = a;
    }),
    i
  );
}
function iS(a) {
  a === void 0 && (a = {});
  const {
      placement: i = "bottom",
      strategy: r = "absolute",
      middleware: c = [],
      platform: f,
      elements: { reference: h, floating: m } = {},
      transform: y = !0,
      whileElementsMounted: v,
      open: p,
    } = a,
    [x, b] = w.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: i,
      middlewareData: {},
      isPositioned: !1,
    }),
    [E, O] = w.useState(c);
  hr(E, c) || O(c);
  const [k, N] = w.useState(null),
    [j, L] = w.useState(null),
    G = w.useCallback((U) => {
      U !== I.current && ((I.current = U), N(U));
    }, []),
    Y = w.useCallback((U) => {
      U !== Q.current && ((Q.current = U), L(U));
    }, []),
    Z = h || k,
    P = m || j,
    I = w.useRef(null),
    Q = w.useRef(null),
    K = w.useRef(x),
    se = v != null,
    ue = iu(v),
    he = iu(f),
    J = iu(p),
    fe = w.useCallback(() => {
      if (!I.current || !Q.current) return;
      const U = { placement: i, strategy: r, middleware: E };
      he.current && (U.platform = he.current),
        nS(I.current, Q.current, U).then((re) => {
          const pe = { ...re, isPositioned: J.current !== !1 };
          W.current &&
            !hr(K.current, pe) &&
            ((K.current = pe),
            gr.flushSync(() => {
              b(pe);
            }));
        });
    }, [E, i, r, he, J]);
  rr(() => {
    p === !1 &&
      K.current.isPositioned &&
      ((K.current.isPositioned = !1), b((U) => ({ ...U, isPositioned: !1 })));
  }, [p]);
  const W = w.useRef(!1);
  rr(
    () => (
      (W.current = !0),
      () => {
        W.current = !1;
      }
    ),
    []
  ),
    rr(() => {
      if ((Z && (I.current = Z), P && (Q.current = P), Z && P)) {
        if (ue.current) return ue.current(Z, P, fe);
        fe();
      }
    }, [Z, P, fe, ue, se]);
  const de = w.useMemo(
      () => ({ reference: I, floating: Q, setReference: G, setFloating: Y }),
      [G, Y]
    ),
    R = w.useMemo(() => ({ reference: Z, floating: P }), [Z, P]),
    X = w.useMemo(() => {
      const U = { position: r, left: 0, top: 0 };
      if (!R.floating) return U;
      const re = Ip(R.floating, x.x),
        pe = Ip(R.floating, x.y);
      return y
        ? {
            ...U,
            transform: "translate(" + re + "px, " + pe + "px)",
            ...(Ey(R.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: re, top: pe };
    }, [r, y, R.floating, x.x, x.y]);
  return w.useMemo(
    () => ({ ...x, update: fe, refs: de, elements: R, floatingStyles: X }),
    [x, fe, de, R, X]
  );
}
const sS = (a) => {
    function i(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: a,
      fn(r) {
        const { element: c, padding: f } = typeof a == "function" ? a(r) : a;
        return c && i(c)
          ? c.current != null
            ? Wp({ element: c.current, padding: f }).fn(r)
            : {}
          : c
          ? Wp({ element: c, padding: f }).fn(r)
          : {};
      },
    };
  },
  rS = (a, i) => ({ ...Pw(a), options: [a, i] }),
  oS = (a, i) => ({ ...$w(a), options: [a, i] }),
  cS = (a, i) => ({ ...tS(a), options: [a, i] }),
  uS = (a, i) => ({ ...Ww(a), options: [a, i] }),
  fS = (a, i) => ({ ...Iw(a), options: [a, i] }),
  dS = (a, i) => ({ ...eS(a), options: [a, i] }),
  hS = (a, i) => ({ ...sS(a), options: [a, i] });
var mS = "Arrow",
  Ay = w.forwardRef((a, i) => {
    const { children: r, width: c = 10, height: f = 5, ...h } = a;
    return u.jsx(pt.svg, {
      ...h,
      ref: i,
      width: c,
      height: f,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: a.asChild ? r : u.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Ay.displayName = mS;
var pS = Ay;
function gS(a) {
  const [i, r] = w.useState(void 0);
  return (
    na(() => {
      if (a) {
        r({ width: a.offsetWidth, height: a.offsetHeight });
        const c = new ResizeObserver((f) => {
          if (!Array.isArray(f) || !f.length) return;
          const h = f[0];
          let m, y;
          if ("borderBoxSize" in h) {
            const v = h.borderBoxSize,
              p = Array.isArray(v) ? v[0] : v;
            (m = p.inlineSize), (y = p.blockSize);
          } else (m = a.offsetWidth), (y = a.offsetHeight);
          r({ width: m, height: y });
        });
        return c.observe(a, { box: "border-box" }), () => c.unobserve(a);
      } else r(void 0);
    }, [a]),
    i
  );
}
var Ty = "Popper",
  [jy, Ny] = yr(Ty),
  [pE, Cy] = jy(Ty),
  Oy = "PopperAnchor",
  Ry = w.forwardRef((a, i) => {
    const { __scopePopper: r, virtualRef: c, ...f } = a,
      h = Cy(Oy, r),
      m = w.useRef(null),
      y = Xt(i, m),
      v = w.useRef(null);
    return (
      w.useEffect(() => {
        const p = v.current;
        (v.current = c?.current || m.current),
          p !== v.current && h.onAnchorChange(v.current);
      }),
      c ? null : u.jsx(pt.div, { ...f, ref: y })
    );
  });
Ry.displayName = Oy;
var Ju = "PopperContent",
  [yS, vS] = jy(Ju),
  My = w.forwardRef((a, i) => {
    const {
        __scopePopper: r,
        side: c = "bottom",
        sideOffset: f = 0,
        align: h = "center",
        alignOffset: m = 0,
        arrowPadding: y = 0,
        avoidCollisions: v = !0,
        collisionBoundary: p = [],
        collisionPadding: x = 0,
        sticky: b = "partial",
        hideWhenDetached: E = !1,
        updatePositionStrategy: O = "optimized",
        onPlaced: k,
        ...N
      } = a,
      j = Cy(Ju, r),
      [L, G] = w.useState(null),
      Y = Xt(i, (le) => G(le)),
      [Z, P] = w.useState(null),
      I = gS(Z),
      Q = I?.width ?? 0,
      K = I?.height ?? 0,
      se = c + (h !== "center" ? "-" + h : ""),
      ue =
        typeof x == "number"
          ? x
          : { top: 0, right: 0, bottom: 0, left: 0, ...x },
      he = Array.isArray(p) ? p : [p],
      J = he.length > 0,
      fe = { padding: ue, boundary: he.filter(bS), altBoundary: J },
      {
        refs: W,
        floatingStyles: de,
        placement: R,
        isPositioned: X,
        middlewareData: U,
      } = iS({
        strategy: "fixed",
        placement: se,
        whileElementsMounted: (...le) =>
          Jw(...le, { animationFrame: O === "always" }),
        elements: { reference: j.anchor },
        middleware: [
          rS({ mainAxis: f + K, alignmentAxis: m }),
          v &&
            oS({
              mainAxis: !0,
              crossAxis: !1,
              limiter: b === "partial" ? cS() : void 0,
              ...fe,
            }),
          v && uS({ ...fe }),
          fS({
            ...fe,
            apply: ({
              elements: le,
              rects: qe,
              availableWidth: Re,
              availableHeight: Ot,
            }) => {
              const { width: Ft, height: Jt } = qe.reference,
                ia = le.floating.style;
              ia.setProperty("--radix-popper-available-width", `${Re}px`),
                ia.setProperty("--radix-popper-available-height", `${Ot}px`),
                ia.setProperty("--radix-popper-anchor-width", `${Ft}px`),
                ia.setProperty("--radix-popper-anchor-height", `${Jt}px`);
            },
          }),
          Z && hS({ element: Z, padding: y }),
          wS({ arrowWidth: Q, arrowHeight: K }),
          E && dS({ strategy: "referenceHidden", ...fe }),
        ],
      }),
      [re, pe] = zy(R),
      A = ta(k);
    na(() => {
      X && A?.();
    }, [X, A]);
    const B = U.arrow?.x,
      F = U.arrow?.y,
      $ = U.arrow?.centerOffset !== 0,
      [ce, ge] = w.useState();
    return (
      na(() => {
        L && ge(window.getComputedStyle(L).zIndex);
      }, [L]),
      u.jsx("div", {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...de,
          transform: X ? de.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ce,
          "--radix-popper-transform-origin": [
            U.transformOrigin?.x,
            U.transformOrigin?.y,
          ].join(" "),
          ...(U.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: a.dir,
        children: u.jsx(yS, {
          scope: r,
          placedSide: re,
          onArrowChange: P,
          arrowX: B,
          arrowY: F,
          shouldHideArrow: $,
          children: u.jsx(pt.div, {
            "data-side": re,
            "data-align": pe,
            ...N,
            ref: Y,
            style: { ...N.style, animation: X ? void 0 : "none" },
          }),
        }),
      })
    );
  });
My.displayName = Ju;
var ky = "PopperArrow",
  xS = { top: "bottom", right: "left", bottom: "top", left: "right" },
  _y = w.forwardRef(function (i, r) {
    const { __scopePopper: c, ...f } = i,
      h = vS(ky, c),
      m = xS[h.placedSide];
    return u.jsx("span", {
      ref: h.onArrowChange,
      style: {
        position: "absolute",
        left: h.arrowX,
        top: h.arrowY,
        [m]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[h.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[h.placedSide],
        visibility: h.shouldHideArrow ? "hidden" : void 0,
      },
      children: u.jsx(pS, {
        ...f,
        ref: r,
        style: { ...f.style, display: "block" },
      }),
    });
  });
_y.displayName = ky;
function bS(a) {
  return a !== null;
}
var wS = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(i) {
    const { placement: r, rects: c, middlewareData: f } = i,
      m = f.arrow?.centerOffset !== 0,
      y = m ? 0 : a.arrowWidth,
      v = m ? 0 : a.arrowHeight,
      [p, x] = zy(r),
      b = { start: "0%", center: "50%", end: "100%" }[x],
      E = (f.arrow?.x ?? 0) + y / 2,
      O = (f.arrow?.y ?? 0) + v / 2;
    let k = "",
      N = "";
    return (
      p === "bottom"
        ? ((k = m ? b : `${E}px`), (N = `${-v}px`))
        : p === "top"
        ? ((k = m ? b : `${E}px`), (N = `${c.floating.height + v}px`))
        : p === "right"
        ? ((k = `${-v}px`), (N = m ? b : `${O}px`))
        : p === "left" &&
          ((k = `${c.floating.width + v}px`), (N = m ? b : `${O}px`)),
      { data: { x: k, y: N } }
    );
  },
});
function zy(a) {
  const [i, r = "center"] = a.split("-");
  return [i, r];
}
var SS = Ry,
  ES = My,
  AS = _y,
  TS = Symbol("radix.slottable");
function jS(a) {
  const i = ({ children: r }) => u.jsx(u.Fragment, { children: r });
  return (i.displayName = `${a}.Slottable`), (i.__radixId = TS), i;
}
var [Tr] = yr("Tooltip", [Ny]),
  Pu = Ny(),
  Dy = "TooltipProvider",
  NS = 700,
  eg = "tooltip.open",
  [CS, Uy] = Tr(Dy),
  Ly = (a) => {
    const {
        __scopeTooltip: i,
        delayDuration: r = NS,
        skipDelayDuration: c = 300,
        disableHoverableContent: f = !1,
        children: h,
      } = a,
      m = w.useRef(!0),
      y = w.useRef(!1),
      v = w.useRef(0);
    return (
      w.useEffect(() => {
        const p = v.current;
        return () => window.clearTimeout(p);
      }, []),
      u.jsx(CS, {
        scope: i,
        isOpenDelayedRef: m,
        delayDuration: r,
        onOpen: w.useCallback(() => {
          window.clearTimeout(v.current), (m.current = !1);
        }, []),
        onClose: w.useCallback(() => {
          window.clearTimeout(v.current),
            (v.current = window.setTimeout(() => (m.current = !0), c));
        }, [c]),
        isPointerInTransitRef: y,
        onPointerInTransitChange: w.useCallback((p) => {
          y.current = p;
        }, []),
        disableHoverableContent: f,
        children: h,
      })
    );
  };
Ly.displayName = Dy;
var Hy = "Tooltip",
  [gE, ki] = Tr(Hy),
  Ou = "TooltipTrigger",
  OS = w.forwardRef((a, i) => {
    const { __scopeTooltip: r, ...c } = a,
      f = ki(Ou, r),
      h = Uy(Ou, r),
      m = Pu(r),
      y = w.useRef(null),
      v = Xt(i, y, f.onTriggerChange),
      p = w.useRef(!1),
      x = w.useRef(!1),
      b = w.useCallback(() => (p.current = !1), []);
    return (
      w.useEffect(
        () => () => document.removeEventListener("pointerup", b),
        [b]
      ),
      u.jsx(SS, {
        asChild: !0,
        ...m,
        children: u.jsx(pt.button, {
          "aria-describedby": f.open ? f.contentId : void 0,
          "data-state": f.stateAttribute,
          ...c,
          ref: v,
          onPointerMove: Je(a.onPointerMove, (E) => {
            E.pointerType !== "touch" &&
              !x.current &&
              !h.isPointerInTransitRef.current &&
              (f.onTriggerEnter(), (x.current = !0));
          }),
          onPointerLeave: Je(a.onPointerLeave, () => {
            f.onTriggerLeave(), (x.current = !1);
          }),
          onPointerDown: Je(a.onPointerDown, () => {
            f.open && f.onClose(),
              (p.current = !0),
              document.addEventListener("pointerup", b, { once: !0 });
          }),
          onFocus: Je(a.onFocus, () => {
            p.current || f.onOpen();
          }),
          onBlur: Je(a.onBlur, f.onClose),
          onClick: Je(a.onClick, f.onClose),
        }),
      })
    );
  });
OS.displayName = Ou;
var $u = "TooltipPortal",
  [RS, MS] = Tr($u, { forceMount: void 0 }),
  By = (a) => {
    const { __scopeTooltip: i, forceMount: r, children: c, container: f } = a,
      h = ki($u, i);
    return u.jsx(RS, {
      scope: i,
      forceMount: r,
      children: u.jsx(vr, {
        present: r || h.open,
        children: u.jsx(Hu, { asChild: !0, container: f, children: c }),
      }),
    });
  };
By.displayName = $u;
var vl = "TooltipContent",
  qy = w.forwardRef((a, i) => {
    const r = MS(vl, a.__scopeTooltip),
      { forceMount: c = r.forceMount, side: f = "top", ...h } = a,
      m = ki(vl, a.__scopeTooltip);
    return u.jsx(vr, {
      present: c || m.open,
      children: m.disableHoverableContent
        ? u.jsx(Gy, { side: f, ...h, ref: i })
        : u.jsx(kS, { side: f, ...h, ref: i }),
    });
  }),
  kS = w.forwardRef((a, i) => {
    const r = ki(vl, a.__scopeTooltip),
      c = Uy(vl, a.__scopeTooltip),
      f = w.useRef(null),
      h = Xt(i, f),
      [m, y] = w.useState(null),
      { trigger: v, onClose: p } = r,
      x = f.current,
      { onPointerInTransitChange: b } = c,
      E = w.useCallback(() => {
        y(null), b(!1);
      }, [b]),
      O = w.useCallback(
        (k, N) => {
          const j = k.currentTarget,
            L = { x: k.clientX, y: k.clientY },
            G = LS(L, j.getBoundingClientRect()),
            Y = HS(L, G),
            Z = BS(N.getBoundingClientRect()),
            P = GS([...Y, ...Z]);
          y(P), b(!0);
        },
        [b]
      );
    return (
      w.useEffect(() => () => E(), [E]),
      w.useEffect(() => {
        if (v && x) {
          const k = (j) => O(j, x),
            N = (j) => O(j, v);
          return (
            v.addEventListener("pointerleave", k),
            x.addEventListener("pointerleave", N),
            () => {
              v.removeEventListener("pointerleave", k),
                x.removeEventListener("pointerleave", N);
            }
          );
        }
      }, [v, x, O, E]),
      w.useEffect(() => {
        if (m) {
          const k = (N) => {
            const j = N.target,
              L = { x: N.clientX, y: N.clientY },
              G = v?.contains(j) || x?.contains(j),
              Y = !qS(L, m);
            G ? E() : Y && (E(), p());
          };
          return (
            document.addEventListener("pointermove", k),
            () => document.removeEventListener("pointermove", k)
          );
        }
      }, [v, x, m, p, E]),
      u.jsx(Gy, { ...a, ref: h })
    );
  }),
  [_S, zS] = Tr(Hy, { isInside: !1 }),
  DS = jS("TooltipContent"),
  Gy = w.forwardRef((a, i) => {
    const {
        __scopeTooltip: r,
        children: c,
        "aria-label": f,
        onEscapeKeyDown: h,
        onPointerDownOutside: m,
        ...y
      } = a,
      v = ki(vl, r),
      p = Pu(r),
      { onClose: x } = v;
    return (
      w.useEffect(
        () => (
          document.addEventListener(eg, x),
          () => document.removeEventListener(eg, x)
        ),
        [x]
      ),
      w.useEffect(() => {
        if (v.trigger) {
          const b = (E) => {
            E.target?.contains(v.trigger) && x();
          };
          return (
            window.addEventListener("scroll", b, { capture: !0 }),
            () => window.removeEventListener("scroll", b, { capture: !0 })
          );
        }
      }, [v.trigger, x]),
      u.jsx(Lu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: h,
        onPointerDownOutside: m,
        onFocusOutside: (b) => b.preventDefault(),
        onDismiss: x,
        children: u.jsxs(ES, {
          "data-state": v.stateAttribute,
          ...p,
          ...y,
          ref: i,
          style: {
            ...y.style,
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
            u.jsx(DS, { children: c }),
            u.jsx(_S, {
              scope: r,
              isInside: !0,
              children: u.jsx(x1, {
                id: v.contentId,
                role: "tooltip",
                children: f || c,
              }),
            }),
          ],
        }),
      })
    );
  });
qy.displayName = vl;
var Vy = "TooltipArrow",
  US = w.forwardRef((a, i) => {
    const { __scopeTooltip: r, ...c } = a,
      f = Pu(r);
    return zS(Vy, r).isInside ? null : u.jsx(AS, { ...f, ...c, ref: i });
  });
US.displayName = Vy;
function LS(a, i) {
  const r = Math.abs(i.top - a.y),
    c = Math.abs(i.bottom - a.y),
    f = Math.abs(i.right - a.x),
    h = Math.abs(i.left - a.x);
  switch (Math.min(r, c, f, h)) {
    case h:
      return "left";
    case f:
      return "right";
    case r:
      return "top";
    case c:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function HS(a, i, r = 5) {
  const c = [];
  switch (i) {
    case "top":
      c.push({ x: a.x - r, y: a.y + r }, { x: a.x + r, y: a.y + r });
      break;
    case "bottom":
      c.push({ x: a.x - r, y: a.y - r }, { x: a.x + r, y: a.y - r });
      break;
    case "left":
      c.push({ x: a.x + r, y: a.y - r }, { x: a.x + r, y: a.y + r });
      break;
    case "right":
      c.push({ x: a.x - r, y: a.y - r }, { x: a.x - r, y: a.y + r });
      break;
  }
  return c;
}
function BS(a) {
  const { top: i, right: r, bottom: c, left: f } = a;
  return [
    { x: f, y: i },
    { x: r, y: i },
    { x: r, y: c },
    { x: f, y: c },
  ];
}
function qS(a, i) {
  const { x: r, y: c } = a;
  let f = !1;
  for (let h = 0, m = i.length - 1; h < i.length; m = h++) {
    const y = i[h],
      v = i[m],
      p = y.x,
      x = y.y,
      b = v.x,
      E = v.y;
    x > c != E > c && r < ((b - p) * (c - x)) / (E - x) + p && (f = !f);
  }
  return f;
}
function GS(a) {
  const i = a.slice();
  return (
    i.sort((r, c) =>
      r.x < c.x ? -1 : r.x > c.x ? 1 : r.y < c.y ? -1 : r.y > c.y ? 1 : 0
    ),
    VS(i)
  );
}
function VS(a) {
  if (a.length <= 1) return a.slice();
  const i = [];
  for (let c = 0; c < a.length; c++) {
    const f = a[c];
    for (; i.length >= 2; ) {
      const h = i[i.length - 1],
        m = i[i.length - 2];
      if ((h.x - m.x) * (f.y - m.y) >= (h.y - m.y) * (f.x - m.x)) i.pop();
      else break;
    }
    i.push(f);
  }
  i.pop();
  const r = [];
  for (let c = a.length - 1; c >= 0; c--) {
    const f = a[c];
    for (; r.length >= 2; ) {
      const h = r[r.length - 1],
        m = r[r.length - 2];
      if ((h.x - m.x) * (f.y - m.y) >= (h.y - m.y) * (f.x - m.x)) r.pop();
      else break;
    }
    r.push(f);
  }
  return (
    r.pop(),
    i.length === 1 && r.length === 1 && i[0].x === r[0].x && i[0].y === r[0].y
      ? i
      : i.concat(r)
  );
}
var YS = Ly,
  QS = By,
  Yy = qy;
const XS = YS,
  KS = w.forwardRef(({ className: a, sideOffset: i = 4, ...r }, c) =>
    u.jsx(QS, {
      children: u.jsx(Yy, {
        ref: c,
        sideOffset: i,
        className: Ct(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
          a
        ),
        ...r,
      }),
    })
  );
KS.displayName = Yy.displayName;
const Qy = w.forwardRef(({ className: a, ...i }, r) =>
  u.jsx("div", {
    ref: r,
    className: Ct("rounded-xl border bg-card text-card-foreground shadow", a),
    ...i,
  })
);
Qy.displayName = "Card";
const ZS = w.forwardRef(({ className: a, ...i }, r) =>
  u.jsx("div", {
    ref: r,
    className: Ct("flex flex-col space-y-1.5 p-6", a),
    ...i,
  })
);
ZS.displayName = "CardHeader";
const FS = w.forwardRef(({ className: a, ...i }, r) =>
  u.jsx("div", {
    ref: r,
    className: Ct("font-semibold leading-none tracking-tight", a),
    ...i,
  })
);
FS.displayName = "CardTitle";
const JS = w.forwardRef(({ className: a, ...i }, r) =>
  u.jsx("div", {
    ref: r,
    className: Ct("text-sm text-muted-foreground", a),
    ...i,
  })
);
JS.displayName = "CardDescription";
const Xy = w.forwardRef(({ className: a, ...i }, r) =>
  u.jsx("div", { ref: r, className: Ct("p-6 pt-0", a), ...i })
);
Xy.displayName = "CardContent";
const PS = w.forwardRef(({ className: a, ...i }, r) =>
  u.jsx("div", { ref: r, className: Ct("flex items-center p-6 pt-0", a), ...i })
);
PS.displayName = "CardFooter";
function $S() {
  return u.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: u.jsx(Qy, {
      className: "w-full max-w-md mx-4",
      children: u.jsxs(Xy, {
        className: "pt-6",
        children: [
          u.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              u.jsx($1, { className: "h-8 w-8 text-red-500" }),
              u.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          u.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
const Si = "/assets/space-bg-BTVrci7Y.png",
  WS = "/header-banner.png";
function IS() {
  const [a, i] = w.useState(!1),
    [r, c] = w.useState(null),
    f = "0xcomingsoon";
  w.useEffect(() => {
    const m = "maga_viewed_at",
      y = localStorage.getItem(m),
      v = Date.now(),
      p = !y || v - Number(y) > 864e5;
    p && localStorage.setItem(m, String(v));
    const x = (E) =>
      fetch("https://api-maga-eight.vercel.app/api/views", { method: E ? "POST" : "GET" })
        .then((O) => O.json())
        .then((O) => c(O.count ?? null))
        .catch(() => {});
    x(p);
    const b = setInterval(() => x(!1), 1e4);
    return () => clearInterval(b);
  }, []);
  const h = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText)
        await navigator.clipboard.writeText(f);
      else {
        const m = document.createElement("textarea");
        (m.value = f),
          (m.style.position = "fixed"),
          (m.style.opacity = "0"),
          document.body.appendChild(m),
          m.focus(),
          m.select(),
          document.execCommand("copy"),
          document.body.removeChild(m);
      }
      i(!0), setTimeout(() => i(!1), 2e3);
    } catch {
      const m = document.createElement("textarea");
      (m.value = f),
        (m.style.position = "fixed"),
        (m.style.opacity = "0"),
        document.body.appendChild(m),
        m.focus(),
        m.select(),
        document.execCommand("copy"),
        document.body.removeChild(m),
        i(!0),
        setTimeout(() => i(!1), 2e3);
    }
  };
  return u.jsxs("div", {
    className:
      "min-h-screen bg-background text-foreground overflow-x-hidden relative",
    children: [
      u.jsx("div", { className: "scanlines crt-flicker pointer-events-none" }),
      u.jsxs("div", {
        className: "w-full relative z-40",
        children: [
          u.jsx("img", {
            src: WS,
            alt: "Make Aliens Great Again",
            className:
              "w-full h-auto object-cover max-h-[200px] sm:max-h-[400px]",
          }),
          u.jsx("div", {
            className:
              "absolute -bottom-20 sm:-bottom-24 left-1/2 -translate-x-1/2 z-50",
            children: u.jsx("img", {
              src: "/pixel-alien.png",
              alt: "Pixel Alien",
              className: "w-24 h-24 sm:w-36 sm:h-36 object-contain",
            }),
          }),
        ],
      }),
      u.jsx("div", { className: "h-20 sm:h-28 bg-background" }),
      u.jsxs("div", {
        className:
          "sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-white/10",
        children: [
          u.jsx("div", {
            className: "border-b border-white/5",
            children: u.jsxs("div", {
              className:
                "container mx-auto px-3 py-2 relative flex items-center justify-center",
              children: [
                u.jsxs("div", {
                  className: "flex items-center gap-2 cursor-pointer group",
                  onClick: h,
                  "data-testid": "button-copy-contract",
                  children: [
                    u.jsx("span", {
                      className:
                        "text-white/40 uppercase tracking-widest text-[9px] font-bold shrink-0",
                      children: "CA:",
                    }),
                    u.jsx("code", {
                      className:
                        "text-white/85 font-mono text-[10px] sm:text-xs group-hover:text-white transition-colors",
                      children: f,
                    }),
                    u.jsx("div", {
                      className: "flex items-center gap-1 shrink-0",
                      children: a
                        ? u.jsx("span", {
                            className:
                              "text-primary text-[9px] font-bold tracking-wider",
                            children: "COPIED!",
                          })
                        : u.jsx(t2, {
                            className:
                              "h-3 w-3 text-white/30 group-hover:text-white/70 transition-colors",
                          }),
                    }),
                  ],
                }),
                r !== null &&
                  u.jsxs("div", {
                    className:
                      "absolute right-3 flex items-center gap-1.5 shrink-0",
                    "data-testid": "text-view-count",
                    children: [
                      u.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        className: "w-3 h-3 text-white/25 shrink-0",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                          u.jsx("path", {
                            d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
                          }),
                          u.jsx("circle", { cx: "12", cy: "12", r: "3" }),
                        ],
                      }),
                      u.jsx("span", {
                        className:
                          "text-white/25 font-mono text-[9px] tracking-wider",
                        children: r.toLocaleString(),
                      }),
                    ],
                  }),
              ],
            }),
          }),
          u.jsxs("div", {
            className: "container mx-auto px-2 py-1.5 sm:py-2",
            children: [
              u.jsxs("div", {
                className:
                  "flex items-center justify-center gap-1 sm:gap-1.5 flex-wrap",
                children: [
                  u.jsxs("a", {
                    href: "https://x.com/Aliens_MAGA",
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "nav-link-btn border-white/40 text-white hover:bg-white/10 hover:border-white/70",
                    "data-testid": "link-nav-x-official",
                    children: [
                      u.jsx("svg", {
                        viewBox: "0 0 24 24",
                        className: "nav-icon fill-current",
                        "aria-hidden": "true",
                        children: u.jsx("path", {
                          d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                        }),
                      }),
                      u.jsx("span", {
                        className: "hidden sm:inline",
                        children: "@MAGA_ALIENS",
                      }),
                      u.jsx("span", { className: "sm:hidden", children: "X" }),
                    ],
                  }),
                  u.jsxs("a", {
                    href: "https://t.me/Aliens_MAGA",
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "nav-link-btn border-[#26A5E4]/70 text-[#26A5E4] hover:bg-[#26A5E4]/15 hover:border-[#26A5E4]",
                    "data-testid": "link-nav-telegram",
                    children: [
                      u.jsx("svg", {
                        viewBox: "0 0 24 24",
                        className: "nav-icon",
                        "aria-hidden": "true",
                        children: u.jsx("path", {
                          d: "M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                          fill: "#26A5E4",
                        }),
                      }),
                      u.jsx("span", {
                        className: "hidden sm:inline",
                        children: "TELEGRAM",
                      }),
                      u.jsx("span", { className: "sm:hidden", children: "TG" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.jsxs("main", {
        className: "relative",
        children: [
          u.jsx("div", {
            className:
              "fixed inset-0 z-[-1] bg-cover bg-center opacity-30 pointer-events-none",
            style: { backgroundImage: `url(${Si})` },
          }),
          u.jsx(tE, { spaceBg: Si }),
          u.jsxs("footer", {
            className:
              "py-8 sm:py-12 border-t border-border/50 bg-card text-center relative overflow-hidden",
            children: [
              u.jsx("div", {
                className: "absolute inset-0 z-0 bg-cover bg-center opacity-10",
                style: { backgroundImage: `url(${Si})` },
              }),
              u.jsxs("div", {
                className: "container mx-auto px-4 relative z-10 max-w-2xl",
                children: [
                  u.jsx("div", {
                    className: "flex justify-center mb-6 sm:mb-8",
                    children: u.jsx("img", {
                      src: "/pixel-alien.png",
                      alt: "Pixel Alien",
                      className: "w-16 h-16 sm:w-24 sm:h-24 object-contain",
                    }),
                  }),
                  u.jsxs("div", {
                    className:
                      "flex flex-wrap justify-center gap-2 sm:gap-3 mb-3",
                    children: [
                      u.jsxs("a", {
                        href: "https://t.me/Aliens_MAGA",
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                          "border border-[#26A5E4]/60 text-[#26A5E4] font-mono text-[11px] sm:text-sm font-bold uppercase tracking-wider px-4 py-2.5 hover:bg-[#26A5E4]/15 hover:border-[#26A5E4] transition-all flex items-center gap-2",
                        "data-testid": "link-footer-telegram",
                        style: {
                          background:
                            "linear-gradient(135deg,rgba(38,165,228,0.08),transparent)",
                        },
                        children: [
                          u.jsx("svg", {
                            viewBox: "0 0 24 24",
                            className: "h-4 w-4 flex-shrink-0",
                            "aria-hidden": "true",
                            children: u.jsx("path", {
                              d: "M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                              fill: "#26A5E4",
                            }),
                          }),
                          "TELEGRAM",
                        ],
                      }),
                      u.jsxs("a", {
                        href: "https://x.com/Aliens_MAGA",
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                          "border border-white/30 text-white font-mono text-[11px] sm:text-sm font-bold uppercase tracking-wider px-4 py-2.5 hover:bg-white/10 hover:border-white/60 transition-all flex items-center gap-2",
                        "data-testid": "link-footer-x",
                        style: {
                          background:
                            "linear-gradient(135deg,rgba(255,255,255,0.06),transparent)",
                        }, 
                        children: [
                          u.jsx("svg", {
                            viewBox: "0 0 24 24",
                            className: "h-4 w-4 fill-current flex-shrink-0",
                            "aria-hidden": "true",
                            children: u.jsx("path", {
                              d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                            }),
                          }),
                          "@MAGA_ALIENS",
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className:
                      "flex flex-wrap justify-center gap-2 sm:gap-3 mb-6",
                    children: [
                      u.jsxs("a", {
                        href: "https://dexscreener.com/ethereum/0xcomingsoon",
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                          "border border-green-500/50 text-green-300 font-mono text-[11px] sm:text-sm font-bold uppercase tracking-wider px-4 py-2.5 hover:bg-green-500/15 hover:border-green-400 transition-all flex items-center gap-2",
                        "data-testid": "link-footer-dexscreener",
                        style: {
                          background:
                            "linear-gradient(135deg,rgba(34,197,94,0.08),transparent)",
                        },
                        children: [
                          u.jsx("img", {
                            src: "/dexscreener-logo.png",
                            alt: "",
                            className: "h-4 w-4 flex-shrink-0",
                          }),
                          "DEXSCREENER",
                        ],
                      }),
                      u.jsxs("a", {
                        href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                          "border border-[#05C3FB]/50 text-[#05C3FB] font-mono text-[11px] sm:text-sm font-bold uppercase tracking-wider px-4 py-2.5 hover:bg-[#05C3FB]/15 hover:border-[#05C3FB] transition-all flex items-center gap-2",
                        "data-testid": "link-footer-dextools",
                        style: {
                          background:
                            "linear-gradient(135deg,rgba(5,195,251,0.08),transparent)",
                        },
                        children: [
                          u.jsx("img", {
                            src: "/dextools-logo.png",
                            alt: "",
                            className: "h-4 w-4 flex-shrink-0",
                          }),
                          "DEXTOOLS",
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("p", {
                    className: "text-xs text-muted-foreground/40 font-mono",
                    children: [
                      "© ",
                      new Date().getFullYear(),
                      " MAKE ALIENS GREAT AGAIN · NOT FINANCIAL ADVICE · WE CAME IN PEACE",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function eE({ url: a }) {
  const i = w.useRef(null),
    [r, c] = w.useState(a);
  return (
    w.useEffect(() => {
      fetch("https://api-maga-eight.vercel.app/api/media-url/trailer")
        .then((f) => (f.ok ? f.json() : null))
        .then((f) => {
          f?.url && c(f.url);
        })
        .catch(() => {});
    }, []),
    u.jsx("div", {
      className:
        "border-2 border-primary/30 overflow-hidden hover:border-primary transition-colors relative",
      children: u.jsx(
        "video",
        {
          ref: i,
          controls: !0,
          playsInline: !0,
          preload: "none",
          className: "w-full block aspect-video",
          style: { backgroundColor: "#000" },
          "data-testid": "video-trailer",
          children: u.jsx("source", { src: r, type: "video/mp4" }),
        },
        r
      ),
    })
  );
}
function tE({ spaceBg: a }) {
  const { data: i } = Ti({
      queryKey: ["https://api-maga-eight.vercel.app/api/trailer"],
      queryFn: async () => (await fetch("https://api-maga-eight.vercel.app/api/trailer")).json(),
    }),
    { data: r } = Ti({
      queryKey: ["https://api-maga-eight.vercel.app/api/generated-images"],
      queryFn: async () => (await fetch("https://api-maga-eight.vercel.app/api/generated-images")).json(),
      refetchInterval: 1e4,
    }),
    c = Sg(),
    [f, h] = w.useState(() => {
      try {
        const j = localStorage.getItem("maga-voted-ids");
        return j ? new Set(JSON.parse(j)) : new Set();
        console.log(queryFn);
      } catch {
        return new Set();
      }
    }),
    m = [
      ...(r || []).map((j, L) => ({
        id: String(L + 1).padStart(3, "0"),
        dbId: j.id,
        src: `https://www.makealiensgreatagain.com/${j.url}`.replace(/\/+/g, '/'),
        title:
          j.caption ||
          `AI: ${(j.alienType || "alien").toUpperCase()} - ${(
            j.scene || "scene"
          ).toUpperCase()}`,
        votes: j.votes || 0,
      })),
    ],
    y = w.useRef(null),
    v = async (j) => {
      if (!f.has(j)) {
        y.current = j;
        try {
          await fetch(`https://api-maga-eight.vercel.app/api/generated-images/${j}/vote`, { method: "POST" }),
            h((L) => {
              const G = new Set(L).add(j);
              try {
                localStorage.setItem("maga-voted-ids", JSON.stringify([...G]));
              } catch {}
              return G;
            }),
            c.invalidateQueries({ queryKey: ["https://api-maga-eight.vercel.app/api/generated-images"] });
        } catch {}
      }
    },
    [p, x] = w.useState(0),
    b = w.useRef(!1),
    E = (() => {
      const j = p % (m.length || 1);
      if (y.current && m.length > 0) {
        const L = m.findIndex((G) => G.dbId === y.current);
        if (L !== -1 && L !== j) return L;
      }
      return j;
    })(),
    O = w.useCallback(() => {
      (y.current = null), x((j) => (j + 1) % (m.length || 1));
    }, [m.length]),
    k = w.useCallback(() => {
      (y.current = null), x((j) => (j - 1 + (m.length || 1)) % (m.length || 1));
    }, [m.length]),
    N = w.useRef(0);
  return (
    w.useEffect(() => {
      const j = setInterval(() => {
        const L = Date.now();
        !b.current && L - N.current > 3e3 && O();
      }, 7e3);
      return () => clearInterval(j);
    }, [O]),
    u.jsxs("section", {
      className:
        "container mx-auto px-3 sm:px-4 py-12 sm:py-24 border-b border-border/50 bg-background/90",
      children: [
        u.jsx("div", {
          className: "max-w-5xl mx-auto mb-8 sm:mb-16",
          children: u.jsxs("div", {
            className: "text-center flex flex-col",
            children: [
              u.jsx("h2", {
                className:
                  "text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 text-shadow-neon",
                children: "ALIEN CHRONICLES",
              }),
              u.jsx("a", {
                href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                className:
                  "inline-flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-4 sm:px-12 py-3 sm:py-6 bg-primary hover:bg-primary/80 text-white font-black text-base sm:text-2xl md:text-3xl uppercase tracking-widest transition-all mx-auto border-2 border-white/30 hover:scale-105",
                style: { animation: "glowPulse 1.5s ease-in-out infinite" },
                "data-testid": "link-generator",
                children: "Buy $MAGA",
              }),
              u.jsx("div", {
                className:
                  "border-2 border-primary/30 overflow-hidden hover:border-primary transition-colors relative",
                children: u.jsxs("div", {
                  className:
                    "relative w-full min-h-[280px] sm:min-h-[400px] md:min-h-[500px] cursor-grab active:cursor-grabbing select-none",
                  onMouseDown: () => {
                    b.current = !0;
                  },
                  onMouseUp: () => {
                    b.current = !1;
                  },
                  onMouseLeave: () => {
                    b.current = !1;
                  },
                  onTouchStart: () => {
                    b.current = !0;
                  },
                  onTouchEnd: () => {
                    b.current = !1;
                  },
                  children: [
                    m.length > 0 &&
                      (() => {
                        const j = m.length,
                          L = new Set([E, (E - 1 + j) % j, (E + 1) % j]);
                        return Array.from(L).map((G) =>
                          u.jsx(
                            "img",
                            {
                              src: m[G].src,
                              alt: m[G].title,
                              className:
                                "absolute inset-0 w-full h-full object-contain transition-opacity duration-700",
                              style: { opacity: G === E ? 1 : 0 },
                            },
                            m[G].id + "-" + G
                          )
                        );
                      })(),
                    u.jsx("div", {
                      className:
                        "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4",
                      children: u.jsxs("div", {
                        className: "flex items-end justify-between",
                        children: [
                          u.jsxs("span", {
                            className:
                              "font-mono text-primary font-bold text-sm flex-1 mr-2",
                            children: ["#", m[E]?.id, " - ", m[E]?.title],
                          }),
                          u.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              u.jsxs("button", {
                                onClick: (j) => {
                                  j.stopPropagation(),
                                    j.preventDefault(),
                                    (N.current = Date.now()),
                                    m[E]?.dbId && v(m[E].dbId);
                                },
                                onTouchStart: (j) => {
                                  j.stopPropagation();
                                },
                                onTouchEnd: (j) => {
                                  j.stopPropagation();
                                },
                                className: `flex items-center gap-2 px-4 py-2.5 font-black text-base transition-all ${
                                  f.has(m[E]?.dbId)
                                    ? "bg-orange-500/30 border-2 border-orange-500/50 text-orange-300 cursor-default"
                                    : "bg-black/60 border-2 border-white/20 hover:bg-orange-500/30 hover:border-orange-500/50 text-white hover:text-orange-300 hover:scale-110 active:scale-95 cursor-pointer"
                                }`,
                                "data-testid": "button-vote-fire",
                                children: [
                                  u.jsx("span", {
                                    className: "text-lg",
                                    children: "🔥",
                                  }),
                                  u.jsx("span", {
                                    className: "font-mono tabular-nums",
                                    children: m[E]?.votes || 0,
                                  }),
                                ],
                              }),
                              u.jsxs("span", {
                                className: "font-mono text-white/50 text-xs",
                                children: [E + 1, " / ", m.length],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    u.jsx("button", {
                      onClick: k,
                      className:
                        "absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors",
                      "data-testid": "button-slide-prev",
                      children: u.jsx(Z1, { className: "h-6 w-6" }),
                    }),
                    u.jsx("button", {
                      onClick: O,
                      className:
                        "absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors",
                      "data-testid": "button-slide-next",
                      children: u.jsx(J1, { className: "h-6 w-6" }),
                    }),
                  ],
                }),
              }),
              u.jsx("div", {
                className:
                  "mt-4 sm:mt-6 py-3 sm:py-4 px-4 sm:px-6 border-2 border-primary/30 bg-black/40 flex items-center justify-center gap-3 sm:gap-4",
                "data-testid": "text-aliens-created-count",
                children: u.jsxs("div", {
                  className: "text-center",
                  children: [
                    u.jsx("span", {
                      className:
                        "font-black text-3xl sm:text-4xl md:text-5xl text-primary tabular-nums",
                      children: r?.length || 0,
                    }),
                    u.jsx("p", {
                      className:
                        "font-mono text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-white/70 mt-1",
                      children: "MAGA Aliens Created",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        u.jsxs("div", {
          className: "text-center mb-8 sm:mb-16 px-3 sm:px-0",
          children: [
            u.jsxs("h2", {
              className:
                "text-xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 text-shadow-neon",
              children: [
                u.jsxs("svg", {
                  viewBox: "0 0 24 24",
                  className:
                    "h-10 w-10 sm:h-16 sm:w-16 inline mr-2 sm:mr-3 align-middle",
                  "aria-hidden": "true",
                  children: [
                    u.jsx("circle", {
                      cx: "12",
                      cy: "12",
                      r: "10",
                      fill: "none",
                      stroke: "#a855f7",
                      strokeWidth: "1",
                      opacity: "0.3",
                    }),
                    u.jsx("circle", {
                      cx: "12",
                      cy: "12",
                      r: "7",
                      fill: "none",
                      stroke: "#a855f7",
                      strokeWidth: "1",
                      opacity: "0.4",
                    }),
                    u.jsx("circle", {
                      cx: "12",
                      cy: "12",
                      r: "4",
                      fill: "none",
                      stroke: "#a855f7",
                      strokeWidth: "1",
                      opacity: "0.6",
                    }),
                    u.jsx("circle", {
                      cx: "12",
                      cy: "12",
                      r: "1.5",
                      fill: "#a855f7",
                      opacity: "0.8",
                    }),
                    u.jsx("line", {
                      x1: "12",
                      y1: "12",
                      x2: "18",
                      y2: "6",
                      stroke: "#a855f7",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                    }),
                    u.jsx("circle", {
                      cx: "18",
                      cy: "6",
                      r: "2",
                      fill: "#a855f7",
                      opacity: "0.9",
                      children: u.jsx("animate", {
                        attributeName: "opacity",
                        values: "0.9;0.3;0.9",
                        dur: "1.5s",
                        repeatCount: "indefinite",
                      }),
                    }),
                    u.jsx("line", {
                      x1: "12",
                      y1: "2",
                      x2: "12",
                      y2: "4",
                      stroke: "#a855f7",
                      strokeWidth: "0.8",
                      opacity: "0.3",
                    }),
                    u.jsx("line", {
                      x1: "12",
                      y1: "20",
                      x2: "12",
                      y2: "22",
                      stroke: "#a855f7",
                      strokeWidth: "0.8",
                      opacity: "0.3",
                    }),
                    u.jsx("line", {
                      x1: "2",
                      y1: "12",
                      x2: "4",
                      y2: "12",
                      stroke: "#a855f7",
                      strokeWidth: "0.8",
                      opacity: "0.3",
                    }),
                    u.jsx("line", {
                      x1: "20",
                      y1: "12",
                      x2: "22",
                      y2: "12",
                      stroke: "#a855f7",
                      strokeWidth: "0.8",
                      opacity: "0.3",
                    }),
                  ],
                }),
                "GLOBAL ALIEN SCANNER",
              ],
            }),
            u.jsxs("p", {
              className:
                "font-mono text-muted-foreground mb-4 sm:mb-6 uppercase tracking-widest text-[9px] sm:text-sm px-2",
              children: [
                u.jsx("span", {
                  className: "hidden sm:inline",
                  children:
                    "Click sightings to zoom in · Scroll to zoom · Drag to pan",
                }),
                u.jsx("span", {
                  className: "sm:hidden",
                  children: "Tap sightings · Pinch to zoom · Drag to pan",
                }),
              ],
            }),
            u.jsx("div", {
              className:
                "border-2 border-primary/30 overflow-hidden hover:border-primary transition-colors max-w-7xl mx-auto",
              children: u.jsx("iframe", {
                src: "/alien-scanner.html",
                className: "w-full",
                title: "MAGA Alien Scanner",
                "data-testid": "iframe-alien-scanner",
                style: {
                  border: "none",
                  height: "50vh",
                  minHeight: "280px",
                  maxHeight: "800px",
                },
              }),
            }),
          ],
        }),
        u.jsxs("div", {
          className: "text-center max-w-5xl mx-auto px-3 sm:px-0",
          children: [
            u.jsxs("h2", {
              className:
                "text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 text-shadow-neon",
              children: [
                u.jsxs("svg", {
                  viewBox: "0 0 24 24",
                  className:
                    "h-10 w-10 sm:h-14 sm:w-14 inline mr-2 sm:mr-3 align-middle",
                  "aria-hidden": "true",
                  children: [
                    u.jsx("rect", {
                      x: "2",
                      y: "4",
                      width: "20",
                      height: "14",
                      rx: "1.5",
                      fill: "none",
                      stroke: "#dc2626",
                      strokeWidth: "1.2",
                    }),
                    u.jsx("path", {
                      d: "M2 8h20M2 12h20M7 4v14M12 4v14M17 4v14",
                      stroke: "#dc2626",
                      strokeWidth: "0.6",
                      opacity: "0.4",
                    }),
                    u.jsx("circle", {
                      cx: "12",
                      cy: "2.5",
                      r: "1",
                      fill: "#dc2626",
                      opacity: "0.7",
                    }),
                    u.jsx("line", {
                      x1: "12",
                      y1: "3.5",
                      x2: "12",
                      y2: "4",
                      stroke: "#dc2626",
                      strokeWidth: "0.8",
                    }),
                    u.jsx("path", {
                      d: "M1 20l3-2h16l3 2",
                      fill: "none",
                      stroke: "#dc2626",
                      strokeWidth: "1",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      opacity: "0.6",
                    }),
                    u.jsx("polygon", {
                      points: "10,7 10,15 16,11",
                      fill: "#dc2626",
                      opacity: "0.7",
                    }),
                  ],
                }),
                "OFFICIAL TRAILER",
              ],
            }),
            i
              ? u.jsx(eE, { url: i.url })
              : u.jsxs("div", {
                  className:
                    "aspect-video bg-card border-2 border-primary/30 relative flex items-center justify-center group overflow-hidden",
                  children: [
                    u.jsx("div", {
                      className:
                        "absolute inset-0 bg-cover bg-center opacity-50",
                      style: {
                        backgroundImage: `url(${a})`,
                        filter: "grayscale(50%)",
                      },
                    }),
                    u.jsx("div", { className: "absolute inset-0 bg-black/40" }),
                    u.jsx(I1, {
                      className: "h-24 w-24 text-primary relative z-10",
                    }),
                    u.jsx("div", {
                      className:
                        "absolute bottom-4 left-0 right-0 text-center z-10",
                      children: u.jsx("span", {
                        className:
                          "bg-black/80 px-4 py-2 font-mono text-sm uppercase tracking-widest border border-primary/30",
                        children: "Coming Soon",
                      }),
                    }),
                  ],
                }),
          ],
        }),
      ],
    })
  );
}
const su = [
    {
      id: "grey",
      name: "Grey Alien",
      emoji: "👽",
      desc: "Roswell Classic — Large black almond eyes, thin body, smooth grey skin",
    },
    {
      id: "reptilian",
      name: "Reptilian",
      emoji: "🦎",
      desc: "Scaled skin, vertical slit pupils, muscular humanoid build",
    },
    {
      id: "insectoid",
      name: "Insectoid",
      emoji: "🪲",
      desc: "Exoskeleton, biomechanical details, multi-lens eyes",
    },
    {
      id: "hybrid",
      name: "Custom Hybrid",
      emoji: "🧬",
      desc: "Original AI-designed alien — unique and believable",
    },
  ],
  ru = [
    {
      id: "serious",
      name: "Serious",
      emoji: "😐",
      desc: "Stern, presidential, all business",
    },
    {
      id: "laughing",
      name: "Laughing",
      emoji: "😂",
      desc: "Cracking up, having the time of their lives",
    },
    {
      id: "epic",
      name: "Epic",
      emoji: "⚡",
      desc: "Heroic, dramatic, larger-than-life power poses",
    },
    {
      id: "goofy",
      name: "Goofy",
      emoji: "🤪",
      desc: "Silly faces, ridiculous antics, pure comedy",
    },
  ],
  ou = [
    { id: "photorealistic", name: "Photorealistic" },
    { id: "cinematic", name: "Cinematic Blockbuster" },
    { id: "dark-scifi", name: "Dark Sci-Fi Thriller" },
    { id: "patriotic", name: "Patriotic Americana" },
    { id: "space-opera", name: "Space Opera Epic" },
    { id: "meme", name: "Meme Style" },
    { id: "comic", name: "Comic Book Illustration" },
    { id: "oil-painting", name: "Oil Painting" },
    { id: "retro-80s", name: "Retro 80s Sci-Fi" },
    { id: "documentary", name: "Documentary Realism" },
  ],
  cu = [
    {
      id: "handshake",
      name: "Historic Handshake",
      desc: "A historic first contact handshake between human and alien",
    },
    {
      id: "oval-office",
      name: "Oval Office Meeting",
      desc: "A diplomatic alien meeting in the Oval Office",
    },
    {
      id: "ufo-landing",
      name: "UFO Landing",
      desc: "Standing before a massive landed UFO spacecraft",
    },
    {
      id: "space-station",
      name: "Space Station",
      desc: "Meeting aboard an advanced alien space station",
    },
    {
      id: "rally",
      name: "Alien Rally",
      desc: "A massive Make Aliens Great Again rally with alien supporters",
    },
    {
      id: "mothership",
      name: "Mothership Arrival",
      desc: "A giant alien mothership descending over Washington DC",
    },
    {
      id: "military",
      name: "Military Operation",
      desc: "A joint human-alien military operation with tanks, troops, and advanced alien tech",
    },
    {
      id: "random",
      name: "Random Fun",
      desc: "A completely random, fun, and unexpected scene — anything goes!",
    },
  ],
  uu = [
    "relaxing on beach chairs by a campfire at sunset, toasting marshmallows, ocean waves in the background",
    "duck hunting together in camo gear, standing in a swamp, shotguns raised at birds flying overhead",
    "playing golf on a pristine green course, one putting while the other watches with a golf bag",
    "at a shooting range, firing alien laser weapons and human pistols, shell casings flying, laughing together",
    "working at a fast food restaurant together, wearing aprons, serving burgers to confused customers",
    "closing a big real estate deal in a high-rise office, cutting a red ribbon, SOLD sign on desk",
    "giving the alien a piggyback ride on a tropical beach at sunset, both laughing",
    "giving the alien a bath in a bathtub, splashing water everywhere, soap suds flying",
    "deep sea fishing on a luxury yacht, reeling in a massive alien fish, ocean spray",
    "playing poker at a Vegas casino table, chips stacked high, cigars, dramatic lighting",
    "arm wrestling at a bar, veins popping, crowd cheering in the background",
    "riding ATVs through mud trails in the desert, dirt flying, action shot",
    "building a giant snowman together in a winter wonderland, scarves and mittens",
    "racing go-karts on a track, neck and neck, competitive expressions",
    "singing karaoke together at a neon-lit bar, microphones in hand, crowd going wild",
    "doing a cooking show together in a professional kitchen, chef hats, flames on the stove",
    "skydiving together, free-falling through clouds, parachutes on their backs, wind in their faces",
    "surfing massive waves together, riding the same giant wave, wetsuits on",
    "playing basketball, dunking on each other, slam dunk mid-air action shot",
    "bowling together at a retro bowling alley, neon lights, one throwing a strike",
    "running a lemonade stand together on a suburban sidewalk, hand-painted sign",
    "lifting weights at a gym, spotting each other on bench press, muscles flexing",
    "painting a mural together on a brick wall, covered in paint splatters",
    "riding a roller coaster together, hands up, screaming with joy, theme park background",
    "having a water balloon fight in a backyard, soaking wet, laughing hysterically",
    "playing video games on a giant couch, controllers in hand, snacks everywhere, big TV screen",
    "doing a dance-off on a lit-up dance floor, disco ball, breakdancing moves",
    "racing monster trucks in a stadium, crushing cars, fireworks in the sky",
    "ice fishing together in a frozen lake shack, bundled up in winter gear, catching a fish",
    "competing in a hot dog eating contest, cheeks stuffed, crowd cheering",
    "flying a biplane together through the clouds, goggles on, scarf blowing in the wind",
    "doing yoga together on a mountain cliff at sunrise, peaceful and serene",
    "washing a giant spaceship together with sponges and buckets, soap suds everywhere",
    "playing drums and guitar in a rock band on stage, spotlight, screaming fans",
    "riding camels together through a desert, pyramids in the background, sunset",
    "winning a go-kart trophy together, champagne spray, podium celebration",
    "scuba diving in a coral reef, surrounded by colorful fish and alien sea creatures",
    "having a snowball fight in front of the White House, snow-covered lawn",
    "roasting a whole pig at a backyard BBQ, tiki torches, tropical vibes",
    "playing catch with a football in a stadium, perfect spiral mid-air",
  ];
let xi = [];
function nE() {
  const a = uu.map((c, f) => f).filter((c) => !xi.includes(c)),
    i = a.length > 0 ? a : uu.map((c, f) => f),
    r = i[Math.floor(Math.random() * i.length)];
  return xi.push(r), xi.length > 10 && (xi = xi.slice(-10)), uu[r];
}
function aE(a, i, r, c) {
  const f = {
      grey: "a classic grey alien with large black almond-shaped eyes, thin elongated body, smooth grey skin, small nose and mouth, realistic extraterrestrial appearance",
      reptilian:
        "a reptilian alien with detailed green scaled skin, vertical slit yellow pupils, muscular humanoid build, highly detailed textures, intimidating sci-fi realism",
      insectoid:
        "an insectoid alien with chitinous exoskeleton body, biomechanical details, compound multi-lens eyes, elongated limbs, highly detailed alien anatomy",
      hybrid:
        "a completely original hybrid alien design, unique and believable, combining features from multiple alien species, highly detailed and realistic",
    },
    h = {
      photorealistic:
        "photorealistic, ultra-detailed, sharp focus, natural lighting",
      cinematic:
        "cinematic blockbuster movie still, dramatic lighting, lens flare, IMAX quality, epic composition",
      "dark-scifi":
        "dark sci-fi thriller atmosphere, moody shadows, neon accents, gritty realism, tension",
      patriotic:
        "patriotic Americana style, red white and blue color palette, American flags, bald eagles, dramatic sunset",
      "space-opera":
        "space opera epic, vast cosmic backdrop, nebulas, starships, grand scale, sweeping cinematography",
      meme: "internet meme style, bold text overlay potential, humorous composition, viral-ready, slightly exaggerated",
      comic:
        "comic book illustration style, bold ink outlines, dynamic action poses, halftone dots, vibrant colors",
      "oil-painting":
        "classical oil painting style, rich brush strokes, Renaissance composition, dramatic chiaroscuro lighting",
      "retro-80s":
        "retro 1980s sci-fi movie poster style, VHS aesthetic, neon colors, synthesizer vibes, practical effects look",
      documentary:
        "documentary realism, handheld camera feel, natural grain, authentic journalistic composition",
    },
    O = {
      handshake: [
        "a historic first contact handshake on the steps of the Capitol building, photographers and press everywhere, flash bulbs popping, monumental moment",
        "shaking hands in front of the United Nations building, world flags behind them, diplomats watching in awe, sealing an interplanetary agreement",
        "a firm handshake on the tarmac of an airfield, Air Force One in the background, a UFO parked beside it, red carpet rolled out",
        "shaking hands at the summit of a mountain, dramatic clouds below them, eagles soaring, the most epic handshake location in history",
        "a handshake in the middle of Times Square, giant screens showing the live broadcast, millions watching worldwide, confetti falling",
      ],
      "oval-office": [
        "sitting together on the Oval Office couches having a casual chat, coffee cups on the table, paintings of past presidents watching from the walls",
        "the alien standing at the presidential podium giving a speech while the human leader watches proudly, press corps taking photos",
        "both leaning over the Resolute Desk studying a star map of the galaxy, American flags behind them, late night in the Oval Office, single desk lamp glowing",
        "signing a historic treaty together at the Resolute Desk, pens in hand, cameras flashing, staffers applauding in the background",
        "the alien sitting in the presidential chair for the first time, feet up on the desk, while the human leader shows them around the office",
      ],
      "ufo-landing": [
        "a massive UFO hovering just above the ground in a cornfield at night, bright beam of light shining down, the alien descending from the light",
        "standing in front of a crashed UFO in the desert, smoke rising, military vehicles surrounding the site, reaching out to help the alien from the wreckage",
        "a UFO landing on the White House lawn, the entire Secret Service watching in shock, the alien stepping out casually like arriving at a party",
        "multiple UFOs filling the sky over a city at sunset, one landing in a park, crowds gathering, the human leader walking forward to greet the first alien to step out",
        "a sleek alien spacecraft opening its doors in a massive aircraft hangar, scientists and soldiers watching, the alien emerging into fluorescent light",
      ],
      "space-station": [
        "floating in zero gravity inside a massive space station, Earth visible through a panoramic window, laughing as objects drift around them",
        "walking through a crystalline alien corridor with bioluminescent walls, alien technology pulsing with light, exploring the unknown",
        "on the observation deck of a space station watching a nebula explode with color, drinks in hand, stargazing together",
        "in an alien laboratory aboard the station, examining strange glowing specimens, futuristic equipment everywhere, curious and fascinated",
        "eating dinner together in a space station cafeteria, alien food floating off plates in zero gravity, trying each other's cuisine",
      ],
      rally: [
        "on a massive stage with fireworks exploding behind them, the alien crowd-surfing while the human leader pumps fists, banners reading MAKE ALIENS GREAT AGAIN",
        "riding in an open motorcade through packed streets, alien supporters lining the road, confetti and streamers everywhere, waving to the crowd",
        "backstage at a rally sharing a moment before going on stage, peeking through curtains at the massive crowd, nervous excitement",
        "at an outdoor rally in a stadium, the alien grabbing the mic and firing up the crowd, the human leader watching with a proud grin, MAGA banners everywhere",
        "in a small town diner campaign stop, shaking hands with locals and aliens together, American flags on every table, grassroots energy",
      ],
      mothership: [
        "a mile-wide mothership blocking out the sun over New York City, skyscrapers dwarfed beneath it, the human leader and alien standing on a rooftop looking up",
        "the mothership's cargo bay doors opening to reveal an entire alien civilization inside, the human leader's jaw dropping as they step aboard for the first time",
        "standing on a hillside watching the mothership descend through storm clouds, lightning striking around it, military jets escorting it down, dramatic and awe-inspiring",
        "the mothership hovering over the ocean, a beam of light connecting it to a naval fleet below, both leaders on the deck of an aircraft carrier looking up",
        "inside the mothership's bridge, a massive circular room with a view of Earth below, alien crew at their stations, the human leader being given a tour",
      ],
      military: [
        "storming a beach together in an amphibious assault, explosions in the background, waves crashing, soldiers and aliens charging forward side by side",
        "in the cockpit of a massive alien warship flying over a burning battlefield, screens and controls glowing, giving orders to a fleet",
        "standing back-to-back in a firefight, surrounded by enemy forces in a destroyed city, rubble and smoke everywhere, weapons blazing",
        "parachuting together from a cargo plane into a combat zone at night, tracer rounds lighting up the sky below",
        "riding on top of a tank rolling through a desert, alien troops marching alongside, dust clouds and fighter jets overhead",
        "in a war room deep underground, surrounded by generals and alien commanders, giant screens showing a global threat, tense atmosphere",
        "rappelling from a helicopter onto a rooftop during a covert night operation, city lights below, tactical gear and alien tech",
        "leading a cavalry charge on horseback alongside alien mounted warriors across an open plain, dramatic sunset, dust and glory",
        "aboard an aircraft carrier deck, jets launching behind them, ocean stretching to the horizon, coordinating a massive naval operation",
        "in a muddy trench during a rainstorm, sharing rations with alien soldiers, exhausted but determined, brotherhood forged in combat",
      ],
    },
    k = {};
  for (const [de, R] of Object.entries(O))
    k[de] = R[Math.floor(Math.random() * R.length)];
  const N = {
      serious:
        "both characters have stern, serious, presidential expressions — all business, no smiling, powerful authority, the human leader with his signature pursed lips and chin-up confident stare",
      laughing:
        "both characters are laughing hysterically, cracking up, having the absolute time of their lives — the human leader doing his signature open-mouth laugh with squinted eyes, pointing at the alien, big theatrical gestures, genuine belly laughs",
      epic: "heroic and dramatic poses, larger-than-life energy — the human leader doing his signature double fist pump with jaw set and eyes blazing, power stance with chest out, wind-blown, epic cinematic moment",
      goofy:
        "both making silly goofy faces, ridiculous antics — the human leader doing exaggerated comedic facial expressions, his signature smirk turned into a full goof, thumbs up with a wink, pure unhinged comedy energy",
    },
    j = [
      "STRICT CAMERA: close-up portrait shot, head and shoulders only, intimate and personal, faces clearly visible with detail",
      "STRICT CAMERA: medium shot, waist-up framing, balanced composition showing upper body and some environment",
      "STRICT CAMERA: full body wide shot, entire figures visible from head to toe with significant environment context around them",
      "STRICT CAMERA: epic wide angle shot, expansive environment dominating the frame, characters are smaller in a grand sweeping landscape",
      "STRICT CAMERA: dramatic low angle shot, camera positioned near the ground looking UP at the characters, making them look towering and powerful against the sky",
      "STRICT CAMERA: bird's eye aerial view, camera positioned HIGH ABOVE looking straight down, characters seen from overhead, environment spread out below",
    ],
    L = j[Math.floor(Math.random() * j.length)],
    G = f[a] || f.grey,
    Y = h[i] || h.photorealistic,
    Z = r === "random" ? nE() : k[r] || k.handshake,
    P = N[c] || N.laughing,
    K = `Donald Trump — the 45th President of the United States, extremely photorealistic likeness: distinctive orange-tanned skin tone, iconic swept-back blonde-golden hair with volume on top, strong jawline, slightly pursed lips, prominent brow, blue eyes, tall and broad-shouldered build, navy blue suit with an extra-long red silk tie and white dress shirt${
      Math.random() < 0.5
        ? ', wearing a red MAGA cap with white text reading "MAGA" or "Make Aliens Great Again"'
        : ", NOT wearing any hat — his iconic blonde hair is fully visible and unstyled by any headwear"
    }, confident alpha posture, recognizable hand gestures including the thumb-and-index-finger pinch and open-palm point`,
    se = [
      "Trump and the alien are posing together for a photo — standing side by side, looking at the camera, classic photo-op stance",
      "Trump has his arm around the alien like old friends — casual, relaxed, buddy energy",
      "Both are facing the camera with arms crossed or thumbs up — confident power pose, static but strong",
      "Trump is pointing at the alien while talking, the alien is reacting — animated conversation",
    ],
    ue = {
      handshake: [
        "Trump is gripping the alien's hand firmly, pulling them in close, the alien bracing with both feet — classic Trump power handshake",
        "They're signing documents on a table between them, pens in hand, leaning over the paperwork",
        "Trump is presenting the alien with a gift — a golden key, trophy, or framed photo — the alien receiving it with both hands",
      ],
      "oval-office": [
        "Trump is sitting at the Resolute Desk showing the alien something on a document, the alien leaning over to look, both pointing at it",
        "The alien is trying out the presidential chair, spinning in it, while Trump watches with his arms folded and a smirk",
        "Both are on the phone at the same time — Trump on the desk phone, alien on a glowing alien communicator — coordinating something big",
        "Trump is giving the alien a personal tour, gesturing at the paintings and decor, the alien touching the curtains and furniture curiously",
      ],
      "ufo-landing": [
        "Trump is reaching up toward the UFO beam of light, the alien descending from it, their hands about to touch — first contact moment",
        "Trump is inspecting the UFO hull, knocking on it, kicking the tires, the alien watching him with amusement",
        "The alien is stepping out of the UFO hatch and Trump is offering a hand to help them down the ramp",
        "Both are shielding their eyes from the UFO's blinding lights, wind blowing their clothes and hair, dramatic arrival",
      ],
      "space-station": [
        "Both are floating in zero gravity, Trump grabbing onto a handle while the alien floats effortlessly, objects drifting around them",
        "They're looking out a massive window at Earth together, Trump pointing down at specific locations, the alien pressing their face to the glass",
        "Trump is trying alien food, making a face, the alien laughing — plates and utensils floating in zero-g",
        "Both are pressing buttons and flipping switches on an alien control panel, working together to pilot the station",
      ],
      rally: [
        "Trump is at the podium mic, pointing at the alien in the crowd, the alien waving back from a sea of supporters with signs",
        "The alien is crowd-surfing over a sea of hands while Trump watches from the stage, laughing and clapping",
        "Both are tossing MAGA hats into the roaring crowd, arms extended, hats flying through the air",
        "Trump is handing the mic to the alien to speak, the crowd going wild, the alien grabbing it confidently",
      ],
      mothership: [
        "Trump is at the controls of the mothership, hands on alien steering mechanisms, the alien co-piloting beside him",
        "Both are standing at the edge of the mothership cargo bay doors, looking down at Earth far below, wind rushing in",
        "The alien is showing Trump a holographic map of the galaxy, Trump reaching out to touch one of the glowing planets",
        "Trump is shaking hands with a row of alien crew members as the alien captain introduces them one by one",
      ],
      military: [
        "Both are crouched behind cover in a firefight, Trump loading a weapon while the alien fires an energy blaster over the barricade",
        "Trump is standing on top of a tank pointing forward to direct the advance, the alien beside him scanning the horizon with alien binoculars",
        "They're studying a tactical battle map spread across the hood of a jeep, moving pieces around, planning their next move",
        "Trump is pinning a medal on the alien's chest in a military ceremony, soldiers saluting in formation behind them",
      ],
    },
    he =
      r === "random"
        ? Object.keys(ue)[Math.floor(Math.random() * Object.keys(ue).length)]
        : r,
    J = ue[he] || [],
    fe = [...se, ...J, ...J],
    W = fe[Math.floor(Math.random() * fe.length)];
  return `${Z}, featuring ${G} wearing a red MAGA cap with white text reading "MAGA" or "Make Aliens Great Again" alongside ${K}. ${W}. ${Y}, ${L} — YOU MUST follow this exact camera framing and distance, do NOT default to a close-up if a wide or aerial shot is specified, demeanor and mood: ${P}, high resolution, ultra-detailed, hyperrealistic facial details, skin pores and texture visible, photographic quality face rendering, cinematic composition, Make Aliens Great Again theme. IMPORTANT: The alien MUST always wear a red MAGA hat. Any hats or caps in the image must ONLY display the text "MAGA" or "Make Aliens Great Again" — no other text or variations are allowed on any headwear.`;
}
const fu = [
  "Scanning the galaxy...",
  "Contacting alien homeworld...",
  "Negotiating first contact...",
  "Adjusting the space-time continuum...",
  "Warming up the warp drive...",
  "Intercepting alien transmissions...",
  "Calibrating interdimensional portal...",
  "Decrypting alien DNA sequences...",
  "Summoning extraterrestrial reinforcements...",
  "Beaming up the alien ambassador...",
  "Fueling the mothership...",
  "Establishing galactic Wi-Fi connection...",
  "Translating alien body language...",
  "Loading classified Area 51 files...",
  "Preparing the intergalactic photo op...",
];
function lE() {
  const [a, i] = w.useState(Math.floor(Math.random() * fu.length));
  return (
    w.useEffect(() => {
      const r = setInterval(() => {
        i((c) => {
          let f;
          do f = Math.floor(Math.random() * fu.length);
          while (f === c);
          return f;
        });
      }, 3e3);
      return () => clearInterval(r);
    }, []),
    u.jsxs("div", {
      className: "flex flex-col items-center gap-4 animate-pulse",
      children: [
        u.jsx("img", {
          src: "/alien-maga.png",
          alt: "",
          className: "h-48 w-48",
          style: { mixBlendMode: "lighten" },
        }),
        u.jsx("p", {
          className:
            "font-mono text-primary text-sm uppercase tracking-widest transition-opacity duration-500",
          children: fu[a],
        }),
        u.jsx("div", {
          className: "w-48 h-1 bg-white/10 rounded overflow-hidden",
          children: u.jsx("div", {
            className: "h-full bg-primary rounded",
            style: { animation: "loading 2s ease-in-out infinite" },
          }),
        }),
        u.jsx("style", {
          children: `
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 80%; }
          100% { width: 100%; }
        }
      `,
        }),
      ],
    })
  );
}
function iE() {
  const [a, i] = w.useState("grey"),
    [r, c] = w.useState("laughing"),
    [f, h] = w.useState("photorealistic"),
    [m, y] = w.useState("handshake"),
    [v, p] = w.useState(!1),
    [x, b] = w.useState(null),
    [E, O] = w.useState(null),
    [k, N] = w.useState(null),
    [j, L] = w.useState(!1),
    [G, Y] = w.useState(!1),
    Z = () => {
      i(su[Math.floor(Math.random() * su.length)].id),
        c(ru[Math.floor(Math.random() * ru.length)].id),
        y(cu[Math.floor(Math.random() * cu.length)].id),
        h(ou[Math.floor(Math.random() * ou.length)].id);
    },
    P = async () => {
      p(!0), N(null), b(null), O(null);
      try {
        const J = aE(a, f, m, r),
          fe = await fetch("/api/generate-alien", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              prompt: J,
              alienType: a,
              style: f,
              scene: m,
            }),
          });
        if (!fe.ok) {
          const de = await fe.json();
          throw new Error(de.message || "Generation failed");
        }
        const W = await fe.json();
        b(W.imageUrl), O(W.caption || null);
      } catch (J) {
        N(J.message || "Something went wrong. Please try again.");
      } finally {
        p(!1);
      }
    },
    I = `${E || "MAKE ALIENS GREAT AGAIN"} 👽🇺🇸

Create yours now:
https://MakeAliensGreatAgain.com

#MakeAliensGreatAgain #MAGA`,
    Q = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    K = async () => {
      if (!x) return null;
      try {
        return await (await fetch(x)).blob();
      } catch {
        return null;
      }
    },
    se = async () => {
      const J = await K();
      if (!J) return;
      if (Q && navigator.share)
        try {
          const de = new File([J], "maga-alien.png", { type: "image/png" });
          await navigator.share({ files: [de] });
          return;
        } catch {}
      const fe = URL.createObjectURL(J),
        W = document.createElement("a");
      (W.href = fe),
        (W.download = "maga-alien.png"),
        document.body.appendChild(W),
        W.click(),
        document.body.removeChild(W),
        URL.revokeObjectURL(fe);
    },
    ue = async () => {
      if (!Q) {
        const J = await K();
        if (J && navigator.clipboard && typeof ClipboardItem < "u")
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ "image/png": J }),
            ]),
              L(!0);
          } catch {}
      }
      Y(!0);
    },
    he = () => {
      const J = encodeURIComponent(I);
      window.open(`https://x.com/intent/tweet?text=${J}`, "_blank"),
        setTimeout(() => {
          Y(!1), L(!1);
        }, 1e3);
    };
  return u.jsxs("div", {
    className: "min-h-screen bg-background text-foreground",
    children: [
      u.jsx("div", {
        className:
          "fixed inset-0 z-[-1] bg-cover bg-center opacity-20 pointer-events-none",
        style: { backgroundImage: `url(${Si})` },
      }),
      u.jsx("div", {
        className:
          "sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/[0.06]",
        children: u.jsx("div", {
          className: "container mx-auto px-3 sm:px-4",
          children: u.jsxs("div", {
            className: "flex items-center justify-between py-2.5 sm:py-3",
            children: [
              u.jsxs("a", {
                href: "/",
                className:
                  "text-primary/60 hover:text-primary transition-colors font-mono text-[10px] sm:text-xs group flex items-center gap-1",
                "data-testid": "link-back-home",
                children: [
                  u.jsx("span", {
                    className:
                      "group-hover:-translate-x-1 transition-transform",
                    children: "←",
                  }),
                  " HOME",
                ],
              }),
              u.jsx("span", {
                className: "text-xs sm:text-base font-bold tracking-tight",
                style: { fontFamily: "'Century Schoolbook', Georgia, serif" },
                children: "Alien Image Generator",
              }),
              u.jsx("div", { className: "w-10" }),
            ],
          }),
        }),
      }),
      u.jsx("div", {
        className: "flex justify-center py-5 sm:py-7",
        children: u.jsx("img", {
          src: "/pixel-alien.png",
          alt: "Pixel Alien",
          className: "w-16 h-16 sm:w-24 sm:h-24 object-contain",
        }),
      }),
      u.jsxs("div", {
        className: "container mx-auto px-4 py-8 max-w-6xl",
        children: [
          u.jsxs("div", {
            className: "text-center mb-10",
            children: [
              u.jsx("h2", {
                className:
                  "text-4xl md:text-5xl font-black mb-3 text-shadow-neon",
                children: "GENERATE YOUR OWN ALIEN",
              }),
              u.jsx("p", {
                className:
                  "font-mono text-muted-foreground uppercase tracking-widest text-sm",
                children:
                  "Select alien type · Set demeanor · Pick a scene · Choose a style · Generate",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "grid md:grid-cols-2 gap-8",
            children: [
              u.jsxs("div", {
                className: "space-y-6",
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsxs("h3", {
                        className:
                          "font-mono text-primary font-bold text-sm uppercase tracking-widest mb-3",
                        "data-testid": "label-alien-type",
                        children: [
                          u.jsx("img", {
                            src: "/alien-maga.png",
                            alt: "",
                            className: "h-12 w-12 inline",
                            style: { mixBlendMode: "lighten" },
                          }),
                          " SELECT ALIEN TYPE",
                        ],
                      }),
                      u.jsx("div", {
                        className: "grid gap-2",
                        children: su.map((J) =>
                          u.jsxs(
                            "button",
                            {
                              onClick: () => i(J.id),
                              className: `text-left p-3 border transition-all ${
                                a === J.id
                                  ? "border-primary bg-primary/10 text-white"
                                  : "border-white/20 hover:border-white/40 text-white/70 hover:text-white"
                              }`,
                              "data-testid": `button-alien-${J.id}`,
                              children: [
                                u.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    u.jsx("span", {
                                      className: "text-xl",
                                      style:
                                        J.id === "grey"
                                          ? {
                                              filter:
                                                "grayscale(1) brightness(1.2)",
                                            }
                                          : void 0,
                                      children: J.emoji,
                                    }),
                                    u.jsx("span", {
                                      className:
                                        "font-bold font-mono text-sm uppercase tracking-wider",
                                      children: J.name,
                                    }),
                                  ],
                                }),
                                u.jsx("p", {
                                  className:
                                    "text-xs text-muted-foreground mt-1 ml-8",
                                  children: J.desc,
                                }),
                              ],
                            },
                            J.id
                          )
                        ),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("h3", {
                        className:
                          "font-mono text-primary font-bold text-sm uppercase tracking-widest mb-3",
                        "data-testid": "label-demeanor",
                        children: "🎭 SELECT DEMEANOR",
                      }),
                      u.jsx("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: ru.map((J) =>
                          u.jsxs(
                            "button",
                            {
                              onClick: () => c(J.id),
                              className: `text-left p-3 border transition-all ${
                                r === J.id
                                  ? "border-primary bg-primary/10 text-white"
                                  : "border-white/20 hover:border-white/40 text-white/70 hover:text-white"
                              }`,
                              "data-testid": `button-demeanor-${J.id}`,
                              children: [
                                u.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    u.jsx("span", {
                                      className: "text-lg",
                                      children: J.emoji,
                                    }),
                                    u.jsx("span", {
                                      className:
                                        "font-bold font-mono text-xs uppercase tracking-wider",
                                      children: J.name,
                                    }),
                                  ],
                                }),
                                u.jsx("p", {
                                  className:
                                    "text-[10px] text-muted-foreground mt-1 ml-7",
                                  children: J.desc,
                                }),
                              ],
                            },
                            J.id
                          )
                        ),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("h3", {
                        className:
                          "font-mono text-primary font-bold text-sm uppercase tracking-widest mb-3",
                        "data-testid": "label-scene",
                        children: "🎬 SELECT SCENE",
                      }),
                      u.jsx("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: cu.map((J) =>
                          u.jsxs(
                            "button",
                            {
                              onClick: () => y(J.id),
                              className: `text-left p-3 border transition-all ${
                                m === J.id
                                  ? "border-primary bg-primary/10 text-white"
                                  : "border-white/20 hover:border-white/40 text-white/70 hover:text-white"
                              }`,
                              "data-testid": `button-scene-${J.id}`,
                              children: [
                                u.jsx("span", {
                                  className:
                                    "font-bold font-mono text-xs uppercase tracking-wider",
                                  children: J.name,
                                }),
                                u.jsx("p", {
                                  className:
                                    "text-[10px] text-muted-foreground mt-1",
                                  children: J.desc,
                                }),
                              ],
                            },
                            J.id
                          )
                        ),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("h3", {
                        className:
                          "font-mono text-primary font-bold text-sm uppercase tracking-widest mb-3",
                        "data-testid": "label-style",
                        children: "🎨 SELECT STYLE",
                      }),
                      u.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: ou.map((J) =>
                          u.jsx(
                            "button",
                            {
                              onClick: () => h(J.id),
                              className: `px-3 py-1.5 border font-mono text-xs uppercase tracking-wider transition-all ${
                                f === J.id
                                  ? "border-primary bg-primary/10 text-primary font-bold"
                                  : "border-white/20 hover:border-white/40 text-white/60 hover:text-white"
                              }`,
                              "data-testid": `button-style-${J.id}`,
                              children: J.name,
                            },
                            J.id
                          )
                        ),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      u.jsx("button", {
                        onClick: Z,
                        disabled: v,
                        className:
                          "w-1/3 py-6 bg-white/10 hover:bg-white/20 disabled:bg-white/5 text-white font-black text-sm md:text-base uppercase tracking-widest transition-all flex items-center justify-center gap-2 border-2 border-white/30 hover:scale-105",
                        "data-testid": "button-randomize",
                        children: "🎲 RANDOMIZE",
                      }),
                      u.jsx("button", {
                        onClick: P,
                        disabled: v,
                        className:
                          "w-2/3 py-6 bg-primary hover:bg-primary/80 disabled:bg-primary/40 text-white font-black text-2xl md:text-3xl uppercase tracking-widest transition-all flex items-center justify-center gap-3 border-2 border-white/30 hover:scale-105",
                        style: v
                          ? void 0
                          : {
                              animation: "glowPulse 1.5s ease-in-out infinite",
                            },
                        "data-testid": "button-generate",
                        children: v
                          ? u.jsxs(u.Fragment, {
                              children: [
                                u.jsx(l2, {
                                  className: "h-6 w-6 animate-spin",
                                }),
                                "GENERATING...",
                              ],
                            })
                          : u.jsx(u.Fragment, {
                              children: "GENERATE ALIEN IMAGE",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "flex flex-col",
                children: [
                  u.jsxs("h3", {
                    className:
                      "font-mono text-primary font-bold text-2xl uppercase tracking-widest mb-3 text-center",
                    children: [
                      u.jsx(X1, { className: "h-8 w-8 inline mr-2" }),
                      " GENERATED ALIEN",
                    ],
                  }),
                  u.jsxs("div", {
                    className:
                      "border-2 border-primary/30 flex-1 min-h-[400px] flex items-center justify-center bg-black/40 relative overflow-hidden",
                    children: [
                      v && u.jsx(lE, {}),
                      !v &&
                        !x &&
                        !k &&
                        u.jsxs("div", {
                          className:
                            "flex flex-col items-center gap-4 text-muted-foreground",
                          children: [
                            u.jsx("div", {
                              className: "text-6xl opacity-30",
                              children: "🛸",
                            }),
                            u.jsx("p", {
                              className:
                                "font-mono text-sm uppercase tracking-widest text-center px-8",
                              children:
                                "Select your options and hit Generate to create an alien image",
                            }),
                          ],
                        }),
                      k &&
                        u.jsxs("div", {
                          className:
                            "flex flex-col items-center gap-4 text-red-400 px-8",
                          children: [
                            u.jsx("div", {
                              className: "text-4xl",
                              children: "⚠️",
                            }),
                            u.jsx("p", {
                              className: "font-mono text-sm text-center",
                              children: k,
                            }),
                            u.jsx("button", {
                              onClick: P,
                              className:
                                "px-6 py-2 border border-primary text-primary font-mono text-xs uppercase tracking-wider hover:bg-primary/10 transition-colors",
                              "data-testid": "button-retry",
                              children: "Try Again",
                            }),
                          ],
                        }),
                      x &&
                        !v &&
                        u.jsx("img", {
                          src: x,
                          alt: "Generated Alien",
                          className: "w-full h-full object-contain",
                          "data-testid": "img-generated",
                        }),
                    ],
                  }),
                  x &&
                    !v &&
                    u.jsxs("div", {
                      className: "flex gap-3 mt-4",
                      children: [
                        u.jsxs("a", {
                          href: x,
                          download: "make-aliens-great-again.png",
                          className:
                            "flex-1 py-3 border border-white/40 text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-colors",
                          "data-testid": "button-download",
                          children: [
                            u.jsx(Au, { className: "h-4 w-4" }),
                            "Download",
                          ],
                        }),
                        u.jsxs("button", {
                          onClick: ue,
                          className:
                            "flex-1 py-3 bg-primary hover:bg-primary/80 text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors",
                          "data-testid": "button-share-x",
                          children: [
                            u.jsx(tu, { className: "h-4 w-4" }),
                            "Share on X",
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.jsx("footer", {
        className: "border-t border-border/50 mt-16 py-6 text-center",
        children: u.jsxs("p", {
          className:
            "font-mono text-muted-foreground text-xs uppercase tracking-widest",
          children: [
            "© ",
            new Date().getFullYear(),
            " Make Aliens Great Again — Powered by AI",
          ],
        }),
      }),
      G &&
        u.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",
          "data-testid": "modal-share",
          children: u.jsxs("div", {
            className:
              "bg-background border-2 border-primary/50 max-w-md w-full mx-4 p-8 text-center relative",
            children: [
              u.jsx("button", {
                onClick: () => {
                  Y(!1), L(!1);
                },
                className:
                  "absolute top-3 right-3 text-white/50 hover:text-white text-xl font-bold",
                "data-testid": "button-close-modal",
                children: "X",
              }),
              u.jsx("img", {
                src: "/alien-maga.png",
                alt: "",
                className: "h-36 w-36 mx-auto mb-2",
                style: { mixBlendMode: "lighten" },
              }),
              u.jsx("h3", {
                className:
                  "font-black text-2xl text-primary mb-6 uppercase tracking-wider",
                children: "Ready to Share!",
              }),
              Q
                ? u.jsxs(u.Fragment, {
                    children: [
                      u.jsxs("div", {
                        className: "space-y-4 mb-6",
                        children: [
                          u.jsxs("div", {
                            className:
                              "flex items-center gap-4 text-left bg-white/5 border border-white/10 p-4",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-10 h-10 bg-green-500 text-white font-black text-lg flex items-center justify-center shrink-0",
                                children: "1",
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("p", {
                                    className:
                                      "font-mono text-white font-bold text-sm",
                                    children: "Save the image to your photos",
                                  }),
                                  u.jsx("p", {
                                    className:
                                      "font-mono text-muted-foreground text-xs mt-0.5",
                                    children: "Tap the button below to save it",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("button", {
                            onClick: se,
                            className:
                              "w-full py-3 bg-green-600 hover:bg-green-500 text-white font-black text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2",
                            "data-testid": "button-save-image",
                            children: [
                              u.jsx(Au, { className: "h-4 w-4" }),
                              "Save Image to Photos",
                            ],
                          }),
                          u.jsxs("div", {
                            className:
                              "flex items-center gap-4 text-left bg-white/5 border border-white/10 p-4",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-10 h-10 bg-primary text-white font-black text-lg flex items-center justify-center shrink-0",
                                children: "2",
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("p", {
                                    className:
                                      "font-mono text-white font-bold text-sm",
                                    children: "Open X and attach the image",
                                  }),
                                  u.jsx("p", {
                                    className:
                                      "font-mono text-muted-foreground text-xs mt-0.5",
                                    children:
                                      "Your caption is pre-filled — just attach the saved photo and post!",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("button", {
                        onClick: he,
                        className:
                          "w-full py-4 bg-primary hover:bg-primary/80 text-white font-black text-lg uppercase tracking-widest transition-colors flex items-center justify-center gap-3",
                        "data-testid": "button-open-x",
                        children: [
                          u.jsx(tu, { className: "h-5 w-5" }),
                          "Open X Now",
                        ],
                      }),
                    ],
                  })
                : u.jsxs(u.Fragment, {
                    children: [
                      u.jsxs("div", {
                        className: "space-y-4 mb-6",
                        children: [
                          u.jsxs("div", {
                            className:
                              "flex items-center gap-4 text-left bg-white/5 border border-white/10 p-4",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-10 h-10 bg-green-500 text-white font-black text-lg flex items-center justify-center shrink-0",
                                children: "1",
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("p", {
                                    className:
                                      "font-mono text-white font-bold text-sm",
                                    children: j
                                      ? "Image Copied to Clipboard!"
                                      : "Image Ready",
                                  }),
                                  u.jsx("p", {
                                    className:
                                      "font-mono text-muted-foreground text-xs mt-0.5",
                                    children:
                                      "Your alien image is ready to paste",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className:
                              "flex items-center gap-4 text-left bg-white/5 border border-white/10 p-4",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-10 h-10 bg-primary text-white font-black text-lg flex items-center justify-center shrink-0",
                                children: "2",
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("p", {
                                    className:
                                      "font-mono text-white font-bold text-sm",
                                    children: 'Click "Open X" below',
                                  }),
                                  u.jsx("p", {
                                    className:
                                      "font-mono text-muted-foreground text-xs mt-0.5",
                                    children:
                                      "X will open with your caption pre-filled",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className:
                              "flex items-center gap-4 text-left bg-white/5 border border-white/10 p-4",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-10 h-10 bg-primary text-white font-black text-lg flex items-center justify-center shrink-0",
                                children: "3",
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("p", {
                                    className:
                                      "font-mono text-white font-bold text-sm",
                                    children: "Press Ctrl+V to paste the image",
                                  }),
                                  u.jsx("p", {
                                    className:
                                      "font-mono text-muted-foreground text-xs mt-0.5",
                                    children:
                                      "Or Cmd+V on Mac — then hit Post!",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "flex items-center justify-center gap-3 mb-4 text-white/60",
                        children: [
                          u.jsx("div", {
                            className:
                              "border border-white/30 px-3 py-1.5 font-mono text-sm font-bold",
                            children: "Ctrl",
                          }),
                          u.jsx("span", {
                            className: "text-lg",
                            children: "+",
                          }),
                          u.jsx("div", {
                            className:
                              "border border-white/30 px-3 py-1.5 font-mono text-sm font-bold",
                            children: "V",
                          }),
                          u.jsx("span", {
                            className: "font-mono text-xs ml-2",
                            children: "to paste in X",
                          }),
                        ],
                      }),
                      u.jsxs("button", {
                        onClick: he,
                        className:
                          "w-full py-4 bg-primary hover:bg-primary/80 text-white font-black text-lg uppercase tracking-widest transition-colors flex items-center justify-center gap-3",
                        "data-testid": "button-open-x",
                        children: [
                          u.jsx(tu, { className: "h-5 w-5" }),
                          "Open X Now",
                        ],
                      }),
                    ],
                  }),
            ],
          }),
        }),
    ],
  });
}
function ja({ label: a, value: i, sub: r, color: c }) {
  return u.jsxs("div", {
    className:
      "bg-white/5 border border-white/10 px-2 sm:px-4 py-2 sm:py-3 flex flex-col gap-0.5 min-w-0",
    children: [
      u.jsx("span", {
        className:
          "text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-white/40",
        children: a,
      }),
      u.jsx("span", {
        className: `text-xs sm:text-sm font-bold font-mono truncate ${
          c || "text-white"
        }`,
        "data-testid": `stat-${a.toLowerCase().replace(/\s/g, "-")}`,
        children: i,
      }),
      r &&
        u.jsx("span", {
          className: "text-[8px] sm:text-[10px] font-mono text-white/30",
          children: r,
        }),
    ],
  });
}
function sE() {
  const a = "HVimk99ygSSDnWz9eSqumdThrFz4DADE7j6phmFms6at",
    { data: i } = Ti({
      queryKey: ["/api/giveaway/market"],
      queryFn: async () => (await fetch("/api/giveaway/market")).json(),
      refetchInterval: 15e3,
    }),
    r = i ? parseFloat(i.price) : 0,
    c = i?.priceChange24h ?? 0,
    f = c >= 0;
  return u.jsxs("div", {
    className: "min-h-screen bg-black text-white",
    style: { fontFamily: "'Century Schoolbook', Georgia, serif" },
    children: [
      u.jsx("div", {
        className:
          "border-b border-white/[0.06] bg-black/80 backdrop-blur-md sticky top-0 z-50",
        children: u.jsxs("div", {
          className: "max-w-[1600px] mx-auto px-3 sm:px-4",
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-between py-2.5 sm:py-3",
              children: [
                u.jsxs("a", {
                  href: "/",
                  className:
                    "text-primary/60 hover:text-primary transition-colors font-mono text-[10px] sm:text-xs group flex items-center gap-1",
                  "data-testid": "link-back-home",
                  children: [
                    u.jsx("span", {
                      className:
                        "group-hover:-translate-x-1 transition-transform",
                      children: "←",
                    }),
                    " HOME",
                  ],
                }),
                u.jsx("h1", {
                  className: "text-xs sm:text-base font-bold tracking-tight",
                  style: { fontFamily: "'Century Schoolbook', Georgia, serif" },
                  "data-testid": "text-chart-title",
                  children: "$MAGA Live Chart",
                }),
                u.jsx("a", {
                  href: `https://dexscreener.com/solana/${a}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "text-[9px] sm:text-[10px] font-mono text-white/30 hover:text-white/60 transition-colors",
                  "data-testid": "link-dexscreener-full",
                  children: "DexScreener ↗",
                }),
              ],
            }),
            u.jsx("div", {
              className: "pb-2 sm:pb-3",
              children:
                i &&
                u.jsxs("div", {
                  className:
                    "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 sm:gap-2",
                  children: [
                    u.jsx(ja, {
                      label: "Price",
                      value: `$${r.toFixed(8)}`,
                      color: "text-white",
                    }),
                    u.jsx(ja, {
                      label: "24h Change",
                      value: `${f ? "+" : ""}${c.toFixed(1)}%`,
                      color: f ? "text-green-400" : "text-red-400",
                      sub: f ? "▲ Bullish" : "▼ Bearish",
                    }),
                    u.jsx(ja, {
                      label: "Market Cap",
                      value: `$${i.marketCap.toLocaleString()}`,
                      color: "text-yellow-400",
                    }),
                    u.jsx(ja, {
                      label: "24h Volume",
                      value: `$${i.volume24h.toLocaleString()}`,
                      color: "text-blue-400",
                    }),
                    u.jsx(ja, {
                      label: "Liquidity",
                      value: `$${i.liquidity.toLocaleString()}`,
                      color: "text-purple-400",
                    }),
                    u.jsx(ja, {
                      label: "24h Buys",
                      value: i.buys24h.toString(),
                      color: "text-green-400",
                      sub: `${(
                        (i.buys24h / (i.buys24h + i.sells24h)) *
                        100
                      ).toFixed(0)}% of txns`,
                    }),
                    u.jsx(ja, {
                      label: "24h Sells",
                      value: i.sells24h.toString(),
                      color: "text-red-400",
                      sub: `${(
                        (i.sells24h / (i.buys24h + i.sells24h)) *
                        100
                      ).toFixed(0)}% of txns`,
                    }),
                  ],
                }),
            }),
          ],
        }),
      }),
      u.jsx("div", {
        className: "flex justify-center py-3",
        children: u.jsx("img", {
          src: "/pixel-alien.png",
          alt: "Pixel Alien",
          className: "w-10 h-10 sm:w-16 sm:h-16 object-contain",
        }),
      }),
      u.jsx("div", {
        className: "w-full",
        style: { height: i ? "calc(100vh - 200px)" : "calc(100vh - 120px)" },
        children: u.jsx("iframe", {
          src: `https://dexscreener.com/solana/${a}?embed=1&theme=dark&trades=0&info=0`,
          className: "w-full h-full border-0",
          title: "DexScreener MAGA Chart",
          "data-testid": "iframe-dexscreener",
          allow: "clipboard-write",
        }),
      }),
    ],
  });
}
const Pe = { fontFamily: "'Century Schoolbook', Georgia, serif" };
function pl(a) {
  return a.toLocaleString("en-US", { maximumFractionDigits: 0 });
}
function nr(a, i = 1500) {
  const [r, c] = w.useState(0),
    f = w.useRef(!1);
  return (
    w.useEffect(() => {
      if (a <= 0 || f.current) return;
      f.current = !0;
      const h = performance.now(),
        m = (y) => {
          const v = Math.min((y - h) / i, 1),
            p = 1 - Math.pow(1 - v, 3);
          c(Math.floor(a * p)), v < 1 ? requestAnimationFrame(m) : c(a);
        };
      requestAnimationFrame(m);
    }, [a, i]),
    r
  );
}
function Wu(a = 0.15) {
  const i = w.useRef(null),
    [r, c] = w.useState(!1);
  return (
    w.useEffect(() => {
      if (!i.current) return;
      const f = new IntersectionObserver(
        ([h]) => {
          h.isIntersecting && c(!0);
        },
        { threshold: a }
      );
      return f.observe(i.current), () => f.disconnect();
    }, [a]),
    { ref: i, visible: r }
  );
}
function en({ children: a, delay: i = 0, className: r = "" }) {
  const { ref: c, visible: f } = Wu();
  return u.jsx("div", {
    ref: c,
    className: r,
    style: {
      opacity: f ? 1 : 0,
      transform: f ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.7s ease-out ${i}s, transform 0.7s ease-out ${i}s`,
    },
    children: a,
  });
}
function rE() {
  const { data: a } = Ti({
    queryKey: ["/api/tokenomics"],
    queryFn: async () => {
      const i = await fetch("/api/tokenomics");
      if (!i.ok) return null;
      const r = await i.json();
      return !r || typeof r.totalSupply != "number" ? null : r;
    },
    refetchInterval: 6e4,
  });
  return u.jsxs("div", {
    className: "min-h-screen bg-background text-white relative overflow-hidden",
    children: [
      u.jsx("div", {
        className:
          "fixed inset-0 z-[-1] bg-cover bg-center opacity-30 pointer-events-none",
        style: { backgroundImage: `url(${Si})` },
      }),
      u.jsx("div", {
        className: "fixed inset-0 z-[-1] pointer-events-none",
        style: {
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(220,38,38,0.04) 0%, transparent 60%)",
        },
      }),
      u.jsx("div", {
        className:
          "sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-white/[0.06]",
        children: u.jsx("div", {
          className: "container mx-auto px-3 sm:px-4 max-w-3xl",
          children: u.jsxs("div", {
            className: "flex items-center justify-between py-2.5 sm:py-3",
            children: [
              u.jsxs("a", {
                href: "/",
                className:
                  "text-primary/60 hover:text-primary transition-colors font-mono text-[10px] sm:text-xs group flex items-center gap-1",
                "data-testid": "link-back-home",
                children: [
                  u.jsx("span", {
                    className:
                      "group-hover:-translate-x-1 transition-transform",
                    children: "←",
                  }),
                  " HOME",
                ],
              }),
              u.jsx("span", {
                className: "text-xs sm:text-base font-bold tracking-tight",
                style: Pe,
                children: "Whitepaper",
              }),
              u.jsx("div", { className: "w-10" }),
            ],
          }),
        }),
      }),
      u.jsx("div", {
        className: "flex justify-center py-5 sm:py-7",
        children: u.jsx("img", {
          src: "/pixel-alien.png",
          alt: "Pixel Alien",
          className: "w-16 h-16 sm:w-24 sm:h-24 object-contain",
        }),
      }),
      u.jsxs("div", {
        className: "container mx-auto px-3 sm:px-4 py-6 sm:py-12 max-w-3xl",
        children: [
          u.jsxs("div", {
            className:
              "border border-white/[0.08] bg-black/50 backdrop-blur-sm p-4 sm:p-10 relative",
            children: [
              u.jsx("div", {
                className: "absolute top-0 left-0 right-0 h-px",
                style: {
                  background:
                    "linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)",
                },
              }),
              u.jsxs(en, {
                children: [
                  u.jsxs("h1", {
                    className:
                      "text-xl sm:text-4xl font-bold text-center mb-1 tracking-tight",
                    style: Pe,
                    "data-testid": "text-whitepaper-title",
                    children: [
                      u.jsx("span", {
                        className: "text-primary",
                        children: "$MAGA",
                      }),
                      " ",
                      u.jsx("span", {
                        className: "text-white/40",
                        children: "—",
                      }),
                      " Make Aliens Great Again",
                    ],
                  }),
                  u.jsx("p", {
                    className:
                      "text-center text-white/30 font-mono text-[9px] sm:text-xs mb-1.5 sm:mb-2 tracking-widest",
                    children: "OFFICIAL WHITEPAPER — V1.0 — MARCH 2026",
                  }),
                  u.jsx("p", {
                    className:
                      "text-center font-mono text-[9px] sm:text-xs mb-6 sm:mb-10",
                    children: u.jsx("a", {
                      href: "https://www.makealiensgreatagain.com",
                      className:
                        "text-primary/50 hover:text-primary transition-colors",
                      children: "www.makealiensgreatagain.com",
                    }),
                  }),
                ],
              }),
              u.jsx(du, {}),
              u.jsx(en, {
                children: u.jsxs(bi, {
                  title: "Introduction",
                  children: [
                    u.jsxs("p", {
                      children: [
                        "$MAGA is a community-driven meme token built around one of the most powerful narratives emerging today — ",
                        u.jsx("span", {
                          className: "text-white/80",
                          children: "alien disclosure",
                        }),
                        ".",
                      ],
                    }),
                    u.jsx("p", {
                      children:
                        "As governments begin releasing information about UFOs, UAPs, and extraterrestrial encounters, global curiosity about alien life continues to grow.",
                    }),
                    u.jsx("p", {
                      children:
                        "MakeAliensGreatAgain.com is building the internet's central hub for alien disclosure, UFO sightings, and extraterrestrial culture.",
                    }),
                  ],
                }),
              }),
              u.jsx(en, {
                children: u.jsx(bi, {
                  title: "What We're Building",
                  children: u.jsxs("div", {
                    className:
                      "grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-1",
                    children: [
                      u.jsx(ar, {
                        title: "Disclosure Hub",
                        desc: "Government documents, UFO/UAP reports, disclosure news, research archives, and newly declassified information.",
                      }),
                      u.jsx(ar, {
                        title: "UFO Scanner — V1 Live",
                        desc: "Real-time UFO/UAP sighting reports worldwide. Live data, crowd-submitted encounters, and activity tracking.",
                        tag: "LIVE",
                        tagColor: "bg-purple-500",
                      }),
                      u.jsx(ar, {
                        title: "Alien Meme Generator",
                        desc: "Trump + alien templates, alien filters, instant sharing to X, and community meme contests.",
                        tag: "AI",
                        tagColor: "bg-lime-500",
                      }),
                      u.jsx(ar, {
                        title: "Official Merchandise",
                        desc: "Hats, apparel, and collectibles. Revenue supports marketing and ecosystem expansion.",
                        tag: "APR 2026",
                        tagColor: "bg-orange-500",
                      }),
                    ],
                  }),
                }),
              }),
              u.jsx(oE, { tokenomics: a }),
              u.jsx(en, {
                children: u.jsxs(bi, {
                  title: "Community",
                  children: [
                    u.jsx("p", {
                      children:
                        "Community engagement is a core part of the project. Current initiatives include giveaways, meme contests, milestone competitions, and community rewards.",
                    }),
                    u.jsx("p", {
                      children: "Early supporters help grow the movement.",
                    }),
                  ],
                }),
              }),
              u.jsx(en, {
                children: u.jsx(bi, {
                  title: "Growth Milestones",
                  children: u.jsx("p", {
                    children:
                      "At $50K market cap the project will pursue Jupiter and CoinGecko listings to increase visibility and liquidity.",
                  }),
                }),
              }),
              u.jsx(en, {
                children: u.jsxs(bi, {
                  title: "Why This Narrative Matters",
                  children: [
                    u.jsx("p", {
                      children:
                        "The alien disclosure narrative is accelerating worldwide.",
                    }),
                    u.jsx("div", {
                      className:
                        "border-l-2 border-primary/30 pl-3 sm:pl-4 py-1 my-2 bg-primary/[0.02]",
                      children: u.jsx("p", {
                        className: "text-white/80 text-xs sm:text-sm",
                        children:
                          "Donald Trump is the only major world leader to publicly promise the release of government files related to aliens, UFOs, and extraterrestrial phenomena.",
                      }),
                    }),
                    u.jsx("p", {
                      children:
                        "As disclosure unfolds through documents, reports, and testimonies, global interest in extraterrestrial life will continue to grow. $MAGA positions itself directly inside that narrative.",
                    }),
                    u.jsx("p", {
                      children:
                        "Meme coins succeed when they combine culture, narrative, and community. $MAGA sits at the intersection of politics, internet culture, alien disclosure, and viral social media content.",
                    }),
                  ],
                }),
              }),
              u.jsx(cE, {}),
              u.jsx(du, {}),
              u.jsx(en, {
                children: u.jsxs("div", {
                  className: "text-center py-2 sm:py-4",
                  children: [
                    u.jsx("p", {
                      className: "text-white/40 text-xs sm:text-sm mb-2",
                      style: Pe,
                      children: "The world is asking one question —",
                    }),
                    u.jsx("p", {
                      className:
                        "text-white text-lg sm:text-2xl font-bold mb-2 sm:mb-3",
                      style: Pe,
                      children: "Are we alone?",
                    }),
                    u.jsx("p", {
                      className: "text-primary text-xs sm:text-sm font-bold",
                      style: Pe,
                      children:
                        "$MAGA is building the community and platform around that question.",
                    }),
                  ],
                }),
              }),
              u.jsx(du, {}),
              u.jsx(en, {
                children: u.jsxs("div", {
                  className: "text-center py-2 sm:py-4",
                  children: [
                    u.jsxs("a", {
                      href: "/MAGA_whitepaper_v1.pdf",
                      download: !0,
                      className:
                        "group inline-flex items-center gap-2 sm:gap-2.5 border border-primary/40 text-primary font-mono text-[10px] sm:text-sm uppercase tracking-wider px-4 sm:px-7 py-3 sm:py-3.5 hover:bg-primary/10 hover:border-primary/70 hover:shadow-[0_0_25px_rgba(220,38,38,0.15)] transition-all duration-300",
                      "data-testid": "link-download-whitepaper",
                      children: [
                        u.jsx(Au, {
                          className:
                            "h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-y-0.5 transition-transform",
                        }),
                        "Download Whitepaper (PDF)",
                      ],
                    }),
                    u.jsx("p", {
                      className:
                        "text-white/15 font-mono text-[8px] sm:text-[9px] mt-3 tracking-wider",
                      children: "VERSION 1.0 — MARCH 2026",
                    }),
                  ],
                }),
              }),
              u.jsx("div", {
                className: "absolute bottom-0 left-0 right-0 h-px",
                style: {
                  background:
                    "linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)",
                },
              }),
            ],
          }),
          u.jsx("div", { className: "h-8 sm:h-12" }),
        ],
      }),
    ],
  });
}
function du() {
  return u.jsx("div", {
    className: "my-6 sm:my-10 h-px",
    style: {
      background:
        "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent 95%)",
    },
  });
}
function ar({ title: a, desc: i, tag: r, tagColor: c }) {
  return u.jsxs("div", {
    className:
      "relative border border-white/[0.06] bg-white/[0.015] p-3 sm:p-4 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.025] group",
    children: [
      r &&
        u.jsx("span", {
          className: `absolute -top-1.5 -right-1.5 ${c} text-white text-[6px] sm:text-[7px] font-bold px-1 sm:px-1.5 py-0.5 rounded-sm leading-none tracking-wider font-mono`,
          children: r,
        }),
      u.jsx("h3", {
        className:
          "text-xs sm:text-sm font-bold text-white/80 mb-1 sm:mb-1.5 group-hover:text-white transition-colors",
        style: Pe,
        children: a,
      }),
      u.jsx("p", {
        className: "text-white/40 text-[11px] sm:text-xs leading-relaxed",
        style: Pe,
        children: i,
      }),
    ],
  });
}
function oE({ tokenomics: a }) {
  const { ref: i, visible: r } = Wu(),
    c = nr(r && a ? Math.round(a.currentSupply) : 0),
    f = nr(r && a ? Math.round(a.burned) : 0),
    h = nr(r && a ? Math.round(a.lockedAmount) : 0),
    m = nr(r && a ? Math.round(a.circulatingSupply) : 0),
    y = a ? (a.burned / a.totalSupply) * 100 : 0,
    v = a ? (a.lockedAmount / a.totalSupply) * 100 : 0,
    p = a ? (a.circulatingSupply / a.totalSupply) * 100 : 0,
    x = a?.locks || [];
  return u.jsx(en, {
    children: u.jsxs("div", {
      className: "mb-6 sm:mb-8",
      ref: i,
      children: [
        u.jsxs("h2", {
          className:
            "text-sm sm:text-lg font-bold text-primary mb-3 sm:mb-4 uppercase tracking-wider flex items-center gap-2",
          style: Pe,
          children: [
            "Tokenomics",
            u.jsxs("span", {
              className:
                "inline-flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-[9px] font-mono text-green-400/80 normal-case tracking-normal bg-green-500/[0.08] px-1.5 sm:px-2 py-0.5 rounded-full",
              children: [
                u.jsx("span", {
                  className:
                    "inline-block w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-green-500 animate-pulse",
                }),
                "LIVE",
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "grid grid-cols-3 gap-px mb-4 sm:mb-6",
          children: [
            u.jsxs("div", {
              className:
                "bg-white/[0.03] border border-white/[0.06] p-2 sm:p-4 text-center",
              children: [
                u.jsx("div", {
                  className:
                    "text-white/25 font-mono text-[7px] sm:text-[9px] uppercase tracking-wider mb-0.5 sm:mb-1",
                  children: "Token",
                }),
                u.jsx("div", {
                  className:
                    "text-white/90 text-[9px] sm:text-sm font-bold leading-tight",
                  style: Pe,
                  children: "Make Aliens Great Again",
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "bg-white/[0.03] border border-white/[0.06] p-2 sm:p-4 text-center",
              children: [
                u.jsx("div", {
                  className:
                    "text-white/25 font-mono text-[7px] sm:text-[9px] uppercase tracking-wider mb-0.5 sm:mb-1",
                  children: "Ticker",
                }),
                u.jsx("div", {
                  className: "text-primary text-sm sm:text-lg font-bold",
                  style: Pe,
                  children: "$MAGA",
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "bg-white/[0.03] border border-white/[0.06] p-2 sm:p-4 text-center",
              children: [
                u.jsx("div", {
                  className:
                    "text-white/25 font-mono text-[7px] sm:text-[9px] uppercase tracking-wider mb-0.5 sm:mb-1",
                  children: "Total Supply",
                }),
                u.jsx("div", {
                  className: "text-white/90 text-[9px] sm:text-sm font-bold",
                  style: Pe,
                  children: "1,000,000,000",
                }),
              ],
            }),
          ],
        }),
        a
          ? u.jsxs(u.Fragment, {
              children: [
                u.jsxs("div", {
                  className: "mb-4 sm:mb-6",
                  children: [
                    u.jsxs("div", {
                      className:
                        "flex items-center justify-between mb-1.5 sm:mb-2",
                      children: [
                        u.jsx("span", {
                          className:
                            "text-white/25 font-mono text-[7px] sm:text-[9px] uppercase tracking-wider",
                          children: "Supply Distribution",
                        }),
                        u.jsx("span", {
                          className:
                            "text-white/15 font-mono text-[7px] sm:text-[9px]",
                          children: "1B TOTAL",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className:
                        "h-2 sm:h-3 bg-white/[0.03] border border-white/[0.06] overflow-hidden flex rounded-sm",
                      children: [
                        u.jsx("div", {
                          className:
                            "h-full transition-all duration-[2s] ease-out relative overflow-hidden",
                          style: {
                            width: r ? `${p}%` : "0%",
                            background:
                              "linear-gradient(90deg, rgba(220,38,38,0.5), rgba(220,38,38,0.25))",
                          },
                          children: u.jsx("div", {
                            className: "absolute inset-0 opacity-30",
                            style: {
                              background:
                                "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
                            },
                          }),
                        }),
                        u.jsx("div", {
                          className:
                            "h-full transition-all duration-[2s] ease-out delay-300",
                          style: {
                            width: r ? `${v}%` : "0%",
                            background:
                              "linear-gradient(90deg, rgba(234,179,8,0.5), rgba(234,179,8,0.25))",
                          },
                        }),
                        u.jsx("div", {
                          className:
                            "h-full transition-all duration-[2s] ease-out delay-500",
                          style: {
                            width: r ? `${y}%` : "0%",
                            background:
                              "linear-gradient(90deg, rgba(239,68,68,0.7), rgba(239,68,68,0.35))",
                          },
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "flex gap-3 sm:gap-4 mt-2",
                      children: [
                        u.jsxs("span", {
                          className:
                            "flex items-center gap-1 sm:gap-1.5 text-[7px] sm:text-[9px] font-mono text-white/30",
                          children: [
                            u.jsx("span", {
                              className:
                                "w-1.5 sm:w-2 h-1 bg-primary/40 inline-block rounded-sm",
                            }),
                            " Circulating",
                          ],
                        }),
                        u.jsxs("span", {
                          className:
                            "flex items-center gap-1 sm:gap-1.5 text-[7px] sm:text-[9px] font-mono text-white/30",
                          children: [
                            u.jsx("span", {
                              className:
                                "w-1.5 sm:w-2 h-1 bg-yellow-500/40 inline-block rounded-sm",
                            }),
                            " Locked",
                          ],
                        }),
                        u.jsxs("span", {
                          className:
                            "flex items-center gap-1 sm:gap-1.5 text-[7px] sm:text-[9px] font-mono text-white/30",
                          children: [
                            u.jsx("span", {
                              className:
                                "w-1.5 sm:w-2 h-1 bg-red-500/50 inline-block rounded-sm",
                            }),
                            " Burned",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className:
                    "grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-3 mb-4 sm:mb-6",
                  children: [
                    u.jsx(lr, {
                      label: "Current Supply",
                      value: pl(c),
                      color: "white",
                    }),
                    u.jsx(lr, {
                      label: "Burned",
                      value: `${pl(f)} (${a?.burnedPercent ?? "0"}%)`,
                      color: "red",
                    }),
                    u.jsx(lr, {
                      label: "Total Locked",
                      value: pl(h),
                      color: "yellow",
                      sub: `${x.length} lock${
                        x.length !== 1 ? "s" : ""
                      } via Streamflow`,
                    }),
                    u.jsx(lr, {
                      label: "Circulating",
                      value: pl(m),
                      color: "primary",
                    }),
                  ],
                }),
                x.length > 0 &&
                  u.jsxs("div", {
                    className:
                      "border border-yellow-500/15 bg-yellow-500/[0.02] p-3 sm:p-4",
                    children: [
                      u.jsxs("div", {
                        className:
                          "flex items-center justify-between mb-2 sm:mb-3",
                        children: [
                          u.jsxs("div", {
                            className: "flex items-center gap-1.5 sm:gap-2",
                            children: [
                              u.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                className:
                                  "w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400/60",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                  u.jsx("rect", {
                                    x: "3",
                                    y: "11",
                                    width: "18",
                                    height: "11",
                                    rx: "2",
                                    ry: "2",
                                  }),
                                  u.jsx("path", {
                                    d: "M7 11V7a5 5 0 0110 0v4",
                                  }),
                                ],
                              }),
                              u.jsxs("span", {
                                className:
                                  "text-yellow-400/80 font-mono text-[8px] sm:text-[10px] uppercase tracking-wider font-bold",
                                children: ["Streamflow Locks (", x.length, ")"],
                              }),
                            ],
                          }),
                          u.jsxs("span", {
                            className:
                              "inline-flex items-center gap-1 text-[7px] sm:text-[8px] font-mono text-green-400/60 bg-green-500/[0.06] px-1.5 py-0.5 rounded-full",
                            children: [
                              u.jsx("span", {
                                className:
                                  "w-1 h-1 rounded-full bg-green-500 animate-pulse",
                              }),
                              "LIVE",
                            ],
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "space-y-1.5 sm:space-y-2",
                        children: x.map((b, E) => {
                          const O = ((b.amount / a.totalSupply) * 100).toFixed(
                              2
                            ),
                            k = b.escrow
                              ? `${b.escrow.slice(0, 4)}...${b.escrow.slice(
                                  -4
                                )}`
                              : "";
                          return u.jsxs(
                            "div",
                            {
                              className: `flex items-center justify-between border px-2.5 sm:px-3 py-1.5 sm:py-2 transition-colors group ${
                                b.isExpired
                                  ? "border-white/[0.03] bg-black/20 opacity-60"
                                  : "border-white/[0.04] bg-black/30 hover:border-yellow-500/20"
                              }`,
                              "data-testid": `lock-row-${E}`,
                              children: [
                                u.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 sm:gap-3 min-w-0",
                                  children: [
                                    u.jsx("div", {
                                      className: `w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center shrink-0 ${
                                        b.isExpired
                                          ? "bg-white/[0.03] border-white/10"
                                          : "bg-yellow-500/10 border-yellow-500/20"
                                      }`,
                                      children: u.jsx("span", {
                                        className: `text-[8px] sm:text-[10px] font-mono font-bold ${
                                          b.isExpired
                                            ? "text-white/30"
                                            : "text-yellow-400"
                                        }`,
                                        children: E + 1,
                                      }),
                                    }),
                                    u.jsxs("div", {
                                      className: "min-w-0",
                                      children: [
                                        u.jsxs("div", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            u.jsx("span", {
                                              className:
                                                "text-white/60 text-[9px] sm:text-xs font-bold truncate",
                                              style: Pe,
                                              children: b.label,
                                            }),
                                            b.isExpired &&
                                              u.jsx("span", {
                                                className:
                                                  "text-[6px] sm:text-[7px] font-mono text-orange-400/60 bg-orange-500/[0.08] px-1 py-px rounded tracking-wider shrink-0",
                                                children: "UNLOCKED",
                                              }),
                                          ],
                                        }),
                                        b.escrow &&
                                          u.jsxs("a", {
                                            href: `https://app.streamflow.finance/contract/solana/mainnet/${b.escrow}`,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className:
                                              "text-white/20 hover:text-yellow-400/60 font-mono text-[7px] sm:text-[9px] transition-colors flex items-center gap-0.5",
                                            children: [
                                              k,
                                              u.jsx("svg", {
                                                viewBox: "0 0 24 24",
                                                className:
                                                  "w-2 h-2 sm:w-2.5 sm:h-2.5 opacity-0 group-hover:opacity-100 transition-opacity",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: u.jsx("path", {
                                                  d: "M7 17L17 7M17 7H7M17 7v10",
                                                }),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                u.jsxs("div", {
                                  className: "text-right shrink-0 ml-2",
                                  children: [
                                    u.jsx("div", {
                                      className: `text-[9px] sm:text-xs font-bold font-mono tabular-nums ${
                                        b.isExpired
                                          ? "text-yellow-400/50"
                                          : "text-yellow-400"
                                      }`,
                                      style: Pe,
                                      children: pl(Math.round(b.amount)),
                                    }),
                                    u.jsxs("div", {
                                      className:
                                        "text-white/15 font-mono text-[6px] sm:text-[8px]",
                                      children: [O, "% of supply"],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            E
                          );
                        }),
                      }),
                      u.jsxs("div", {
                        className:
                          "mt-2 sm:mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between",
                        children: [
                          u.jsx("span", {
                            className:
                              "text-white/20 font-mono text-[7px] sm:text-[8px] tracking-wider",
                            children: "TOTAL LOCKED",
                          }),
                          u.jsxs("span", {
                            className:
                              "text-yellow-400 font-mono text-[10px] sm:text-xs font-bold",
                            children: [
                              pl(Math.round(a.lockedAmount)),
                              " (",
                              ((a.lockedAmount / a.totalSupply) * 100).toFixed(
                                2
                              ),
                              "%)",
                            ],
                          }),
                        ],
                      }),
                      u.jsx("p", {
                        className:
                          "text-white/12 font-mono text-[6px] sm:text-[7px] mt-1.5 sm:mt-2 tracking-wider",
                        children:
                          "Data sourced live from Solana blockchain via Streamflow protocol · Updates every 2 minutes",
                      }),
                    ],
                  }),
              ],
            })
          : u.jsx("div", {
              className:
                "border border-white/[0.06] bg-black/40 p-4 sm:p-6 text-center",
              children: u.jsxs("div", {
                className: "flex items-center justify-center gap-2.5",
                children: [
                  u.jsx("div", {
                    className:
                      "w-1.5 h-1.5 rounded-full bg-primary/40 animate-ping",
                  }),
                  u.jsx("span", {
                    className:
                      "text-white/25 font-mono text-[10px] sm:text-xs tracking-wider",
                    children: "CONNECTING TO SOLANA...",
                  }),
                ],
              }),
            }),
      ],
    }),
  });
}
function lr({ label: a, value: i, color: r, sub: c }) {
  const f = {
      white: {
        border: "border-white/[0.08]",
        glow: "0 0 20px rgba(255,255,255,0.02)",
        text: "text-white/90",
      },
      red: {
        border: "border-red-500/15",
        glow: "0 0 25px rgba(239,68,68,0.06)",
        text: "text-red-400",
      },
      yellow: {
        border: "border-yellow-500/15",
        glow: "0 0 25px rgba(234,179,8,0.06)",
        text: "text-yellow-400",
      },
      primary: {
        border: "border-primary/15",
        glow: "0 0 25px rgba(220,38,38,0.06)",
        text: "text-primary",
      },
    },
    h = f[r] || f.white;
  return u.jsxs("div", {
    className: `${h.border} border bg-black/30 p-2 sm:p-4 text-center transition-all duration-500 hover:scale-[1.03] hover:bg-black/50`,
    style: { boxShadow: h.glow },
    children: [
      u.jsxs("div", {
        className:
          "text-white/25 font-mono text-[6px] sm:text-[8px] uppercase tracking-wider mb-1 sm:mb-1.5 flex items-center justify-center gap-1",
        children: [
          a,
          u.jsx("span", {
            className:
              "inline-block w-1 h-1 rounded-full bg-green-500/80 animate-pulse",
          }),
        ],
      }),
      u.jsx("div", {
        className: `${h.text} text-[9px] sm:text-sm font-bold tabular-nums leading-tight`,
        style: Pe,
        children: i,
      }),
      c &&
        u.jsx("div", {
          className:
            "text-white/15 font-mono text-[6px] sm:text-[8px] mt-0.5 sm:mt-1",
          children: c,
        }),
    ],
  });
}
function cE() {
  const { ref: a, visible: i } = Wu(),
    r = [
      {
        num: "1",
        title: "Launch",
        status: "done",
        items: ["Token launch", "Community formation", "Website V1 launch"],
      },
      {
        num: "2",
        title: "Utility",
        status: "active",
        items: ["UFO Scanner V1", "Disclosure archive", "Community growth"],
      },
      {
        num: "3",
        title: "Expansion",
        status: "upcoming",
        items: [
          "Marketing wallet unlock (Mar 31, 2026)",
          "Merchandise launch",
          "Influencer partnerships",
        ],
      },
      {
        num: "4",
        title: "Ecosystem",
        status: "upcoming",
        items: [
          "Advanced UFO tracking",
          "Expanded disclosure database",
          "Crypto exchange listings",
        ],
      },
    ];
  return u.jsx(en, {
    children: u.jsxs("div", {
      className: "mb-6 sm:mb-8",
      ref: a,
      children: [
        u.jsx("h2", {
          className:
            "text-sm sm:text-lg font-bold text-primary mb-4 sm:mb-6 uppercase tracking-wider",
          style: Pe,
          children: "Roadmap",
        }),
        u.jsxs("div", {
          className: "relative",
          children: [
            u.jsx("div", {
              className:
                "absolute left-[13px] sm:left-[19px] top-0 bottom-0 w-px bg-white/[0.04]",
            }),
            u.jsx("div", {
              className:
                "absolute left-[13px] sm:left-[19px] top-0 w-px transition-all duration-[2.5s] ease-out",
              style: {
                height: i ? "42%" : "0%",
                background:
                  "linear-gradient(to bottom, rgba(34,197,94,0.5), rgba(220,38,38,0.4), transparent)",
              },
            }),
            r.map((c, f) =>
              u.jsxs(
                "div",
                {
                  className: "relative pl-8 sm:pl-14 mb-4 sm:mb-6 last:mb-0",
                  style: {
                    opacity: i ? 1 : 0,
                    transform: i ? "translateY(0)" : "translateY(12px)",
                    transition: `all 0.6s ease-out ${f * 0.15 + 0.1}s`,
                  },
                  children: [
                    u.jsx("div", {
                      className: "absolute left-0 top-0",
                      children: u.jsx(uE, { status: c.status, num: c.num }),
                    }),
                    u.jsxs("div", {
                      className: `border ${
                        c.status === "done"
                          ? "border-green-500/15 bg-green-500/[0.02]"
                          : c.status === "active"
                          ? "border-primary/15 bg-primary/[0.02]"
                          : "border-white/[0.04] bg-white/[0.01]"
                      } p-3 sm:p-5 transition-all duration-300 hover:border-white/15`,
                      style: {
                        boxShadow:
                          c.status === "active"
                            ? "0 0 30px rgba(220,38,38,0.04), inset 0 0 30px rgba(220,38,38,0.02)"
                            : "none",
                      },
                      children: [
                        u.jsxs("div", {
                          className:
                            "flex items-center justify-between mb-1.5 sm:mb-2.5",
                          children: [
                            u.jsxs("div", {
                              className: "flex items-center gap-1.5 sm:gap-2",
                              children: [
                                u.jsxs("span", {
                                  className:
                                    "text-white/15 font-mono text-[8px] sm:text-[10px] tracking-wider",
                                  children: ["PHASE ", c.num],
                                }),
                                u.jsx("span", {
                                  className:
                                    "text-white/80 text-xs sm:text-sm font-bold",
                                  style: Pe,
                                  children: c.title,
                                }),
                              ],
                            }),
                            u.jsx(fE, { status: c.status }),
                          ],
                        }),
                        u.jsx("ul", {
                          className: "space-y-1 sm:space-y-1.5",
                          children: c.items.map((h, m) =>
                            u.jsxs(
                              "li",
                              {
                                className:
                                  "flex items-start gap-2 text-white/40 text-xs sm:text-sm",
                                style: {
                                  opacity: i ? 1 : 0,
                                  transition: `opacity 0.5s ease-out ${
                                    f * 0.15 + m * 0.08 + 0.4
                                  }s`,
                                },
                                children: [
                                  u.jsx("span", {
                                    className: `mt-[5px] sm:mt-[7px] w-1 h-1 rounded-full flex-shrink-0 ${
                                      c.status === "done"
                                        ? "bg-green-500/60"
                                        : c.status === "active"
                                        ? "bg-primary/60"
                                        : "bg-white/15"
                                    }`,
                                  }),
                                  u.jsx("span", { style: Pe, children: h }),
                                ],
                              },
                              m
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                },
                c.num
              )
            ),
          ],
        }),
      ],
    }),
  });
}
function uE({ status: a, num: i }) {
  return a === "done"
    ? u.jsx("div", {
        className:
          "w-[26px] h-[26px] sm:w-[38px] sm:h-[38px] rounded-full border border-green-500/40 bg-green-500/[0.08] flex items-center justify-center",
        style: { boxShadow: "0 0 12px rgba(34,197,94,0.1)" },
        children: u.jsx("svg", {
          viewBox: "0 0 24 24",
          className: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5",
          fill: "none",
          stroke: "#22c55e",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: u.jsx("polyline", { points: "20 6 9 17 4 12" }),
        }),
      })
    : a === "active"
    ? u.jsxs("div", {
        className:
          "w-[26px] h-[26px] sm:w-[38px] sm:h-[38px] rounded-full border border-primary/40 bg-primary/[0.08] flex items-center justify-center relative",
        style: { boxShadow: "0 0 15px rgba(220,38,38,0.12)" },
        children: [
          u.jsx("div", {
            className:
              "absolute inset-[-3px] rounded-full border border-primary/20 animate-ping",
            style: { animationDuration: "2.5s" },
          }),
          u.jsx("span", {
            className: "text-primary font-mono text-[9px] sm:text-xs font-bold",
            children: i,
          }),
        ],
      })
    : u.jsx("div", {
        className:
          "w-[26px] h-[26px] sm:w-[38px] sm:h-[38px] rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center",
        children: u.jsx("span", {
          className: "text-white/15 font-mono text-[9px] sm:text-xs",
          children: i,
        }),
      });
}
function fE({ status: a }) {
  return a === "done"
    ? u.jsxs("span", {
        className:
          "flex items-center gap-1 text-green-400/60 font-mono text-[7px] sm:text-[9px] tracking-wider",
        children: [
          u.jsx("svg", {
            viewBox: "0 0 24 24",
            className: "w-2 h-2 sm:w-2.5 sm:h-2.5",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: u.jsx("polyline", { points: "20 6 9 17 4 12" }),
          }),
          "COMPLETE",
        ],
      })
    : a === "active"
    ? u.jsxs("span", {
        className:
          "flex items-center gap-1 sm:gap-1.5 text-primary/70 font-mono text-[7px] sm:text-[9px] tracking-wider",
        children: [
          u.jsx("span", {
            className:
              "inline-block w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-primary animate-pulse",
          }),
          "IN PROGRESS",
        ],
      })
    : u.jsx("span", {
        className:
          "text-white/15 font-mono text-[7px] sm:text-[9px] tracking-wider",
        children: "UPCOMING",
      });
}
function bi({ title: a, children: i }) {
  return u.jsxs("div", {
    className: "mb-6 sm:mb-8",
    children: [
      u.jsx("h2", {
        className:
          "text-sm sm:text-lg font-bold text-primary mb-2 sm:mb-3 uppercase tracking-wider",
        style: Pe,
        children: a,
      }),
      u.jsx("div", {
        className:
          "space-y-2 sm:space-y-3 text-white/50 text-xs sm:text-sm leading-relaxed",
        style: Pe,
        children: i,
      }),
    ],
  });
}
function dE() {
  return u.jsxs(Zx, {
    children: [
      u.jsx(yi, { path: "/", component: IS }),
      u.jsx(yi, { path: "/generator", component: iE }),
      u.jsx(yi, { path: "/chart", component: sE }),
      u.jsx(yi, { component: $S }),
    ],
  });
}
function hE() {
  const [a] = Qx(),
    i = a === "/",
    { data: r } = Ti({
      queryKey: ["https://api-maga-eight.vercel.app/api/audio"],
      queryFn: async () => (await fetch("https://api-maga-eight.vercel.app/api/audio")).json(),
    }),
    [c, f] = w.useState(null),
    h = w.useRef(null),
    [m, y] = w.useState(!0);
  w.useEffect(() => {
    r?.url &&
      fetch("https://api-maga-eight.vercel.app/api/media-url/audio")
        .then((p) => (p.ok ? p.json() : null))
        .then((p) => f(p?.url || r.url))
        .catch(() => f(r.url));
  }, [r]),
    w.useEffect(() => {
      c &&
        h.current &&
        i &&
        ((h.current.volume = 1), h.current.play().catch(() => {}));
    }, [c]),
    w.useEffect(() => {
      h.current && (i || h.current.pause());
    }, [i]);
  const v = () => {
    h.current && (m ? h.current.pause() : h.current.play(), y(!m));
  };
  return !c || !i
    ? null
    : u.jsxs(u.Fragment, {
        children: [
          u.jsx("audio", {
            ref: h,
            src: c,
            loop: !0,
            autoPlay: !0,
            onPlay: () => y(!0),
            onPause: () => y(!1),
          }),
          u.jsx("button", {
            onClick: v,
            className:
              "fixed bottom-4 right-4 z-50 w-10 h-10 sm:w-14 sm:h-14 bg-primary text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-2 border-white/20",
            "data-testid": "button-toggle-audio",
            children: m
              ? u.jsx(r2, { className: "h-4 w-4 sm:h-6 sm:w-6" })
              : u.jsx(c2, { className: "h-4 w-4 sm:h-6 sm:w-6" }),
          }),
        ],
      });
}
function mE() {
  return u.jsx(vb, {
    client: kb,
    children: u.jsxs(XS, {
      children: [u.jsx(aw, {}), u.jsx(dE, {}), u.jsx(hE, {})],
    }),
  });
}
Ax.createRoot(document.getElementById("root")).render(u.jsx(mE, {}));
