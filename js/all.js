/******************************************
    File Name: all.js
    Template Name: EduPress
    Created By: PSD Convert HTML Team
    Envato Profile: http://themeforest.net/user/psdconverthtml
    Website: https://psdconverthtml.com
    Version: 1.0
    Support: support@psdconverthtml.com
/******************************************/

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
      ? b(a, !0)
      : function (a) {
        if (!a.document)
          throw new Error("jQuery requires a window with a document");
        return b(a);
      })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "1.12.4",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
  {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function () {
      return e.call(this);
    },
    get: function (a) {
      return null != a
        ? 0 > a
          ? this[a + this.length]
          : this[a]
        : e.call(this);
    },
    pushStack: function (a) {
      var b = n.merge(this.constructor(), a);
      return (b.prevObject = this), (b.context = this.context), b;
    },
    each: function (a) {
      return n.each(this, a);
    },
    map: function (a) {
      return this.pushStack(
        n.map(this, function (b, c) {
          return a.call(b, c, b);
        })
      );
    },
    slice: function () {
      return this.pushStack(e.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: g,
    sort: c.sort,
    splice: c.splice,
  }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
          "object" == typeof g || n.isFunction(g) || (g = {}),
          h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (e = arguments[h]))
            for (d in e)
              (a = g[d]),
                (c = e[d]),
                g !== c &&
                (j && c && (n.isPlainObject(c) || (b = n.isArray(c)))
                  ? (b
                    ? ((b = !1), (f = a && n.isArray(a) ? a : []))
                    : (f = a && n.isPlainObject(a) ? a : {}),
                    (g[d] = n.extend(j, f, c)))
                  : void 0 !== c && (g[d] = c));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () { },
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === n.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        var b = a && a.toString();
        return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !k.call(a, "constructor") &&
            !k.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        if (!l.ownFirst) for (b in a) return k.call(a, b);
        for (b in a);
        return void 0 === b || k.call(a, b);
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
            ? i[j.call(a)] || "object"
            : typeof a;
      },
      globalEval: function (b) {
        b &&
          n.trim(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (s(a)) {
          for (c = a.length; c > d; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
          (s(Object(a))
            ? n.merge(c, "string" == typeof a ? [a] : a)
            : g.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (h) return h.call(b, a, c);
          for (
            d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
            d > c;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, b) {
        var c = +b.length,
          d = 0,
          e = a.length;
        while (c > d) a[e++] = b[d++];
        if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          g = 0,
          h = [];
        if (s(a))
          for (d = a.length; d > g; g++)
            (e = b(a[g], g, c)), null != e && h.push(e);
        else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
        return f.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, f;
        return (
          "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
          n.isFunction(a)
            ? ((c = e.call(arguments, 2)),
              (d = function () {
                return a.apply(b || this, c.concat(e.call(arguments)));
              }),
              (d.guid = a.guid = a.guid || n.guid++),
              d)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: l,
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
      }
    );

  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : "array" === c ||
      0 === b ||
      ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        L +
        "*\\]",
      O =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        N +
        ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
          L +
          "*(even|odd|(([+-]|)(\\d*)n|)" +
          L +
          "*(?:([+-]|)" +
          L +
          "*(\\d+)|))" +
          L +
          "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
          L +
          "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
          L +
          "*((?:-\\d)?\\d*)" +
          L +
          "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
            ? String.fromCharCode(d + 65536)
            : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length
          ? function (a, b) {
            G.apply(a, I.call(b));
          }
          : function (a, b) {
            var c = a.length,
              d = 0;
            while ((a[c++] = b[d++]));
            a.length = c - 1;
          },
      };
    }

    function fa(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (
        ((d = d || []),
          "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== x && (o = $.exec(a)))
          if ((f = o[1])) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = o[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return H.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) (w = b), (s = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(aa, "\\$&"))
              : b.setAttribute("id", (k = u)),
              (r = g(a)),
              (h = r.length),
              (l = V.test(k) ? "#" + k : "[id='" + k + "']");
            while (h--) r[h] = l + " " + qa(r[h]);
            (s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
          }
          if (s)
            try {
              return H.apply(d, w.querySelectorAll(s)), d;
            } catch (y) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e);
    }

    function ga() {
      var a = [];

      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }

    function ha(a) {
      return (a[u] = !0), a;
    }

    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }

    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }

    function ka(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }

    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }

    function na(a) {
      return ha(function (b) {
        return (
          (b = +b),
          ha(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }

    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = fa.support = {}),
      (f = fa.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = fa.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              (e = n.defaultView) &&
              e.top !== e &&
              (e.addEventListener
                ? e.addEventListener("unload", da, !1)
                : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ia(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ia(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
              (c.getById = ia(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                  if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : [];
                  }
                }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                  return "undefined" != typeof b.getElementsByTagName
                    ? b.getElementsByTagName(a)
                    : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                }
                : function (a, b) {
                  var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                  if ("*" === a) {
                    while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                    return d;
                  }
                  return f;
                }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return "undefined" != typeof b.getElementsByClassName && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = Z.test(n.querySelectorAll)) &&
              (ia(function (a) {
                (o.appendChild(a).innerHTML =
                  "<a id='" +
                  u +
                  "'></a><select id='" +
                  u +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  a.querySelectorAll("[msallowcapture^='']").length &&
                  q.push("[*^$]=" + L + "*(?:''|\"\")"),
                  a.querySelectorAll("[selected]").length ||
                  q.push("\\[" + L + "*(?:value|" + K + ")"),
                  a.querySelectorAll("[id~=" + u + "-]").length ||
                  q.push("~="),
                  a.querySelectorAll(":checked").length || q.push(":checked"),
                  a.querySelectorAll("a#" + u + "+*").length ||
                  q.push(".#.+[+~]");
              }),
                ia(function (a) {
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                    q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                    q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Z.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
              ia(function (a) {
                (c.disconnectedMatch = s.call(a, "div")),
                  s.call(a, "[s!='']:x"),
                  r.push("!=", O);
              }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Z.test(o.compareDocumentPosition)),
              (t =
                b || Z.test(o.contains)
                  ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode;
                    return (
                      a === d ||
                      !(
                        !d ||
                        1 !== d.nodeType ||
                        !(c.contains
                          ? c.contains(d)
                          : a.compareDocumentPosition &&
                          16 & a.compareDocumentPosition(d))
                      )
                    );
                  }
                  : function (a, b) {
                    if (b) while ((b = b.parentNode)) if (b === a) return !0;
                    return !1;
                  }),
              (B = b
                ? function (a, b) {
                  if (a === b) return (l = !0), 0;
                  var d =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                  return d
                    ? d
                    : ((d =
                      (a.ownerDocument || a) === (b.ownerDocument || b)
                        ? a.compareDocumentPosition(b)
                        : 1),
                      1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                        ? a === n || (a.ownerDocument === v && t(v, a))
                          ? -1
                          : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                              ? J(k, a) - J(k, b)
                              : 0
                        : 4 & d
                          ? -1
                          : 1);
                }
                : function (a, b) {
                  if (a === b) return (l = !0), 0;
                  var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                  if (!e || !f)
                    return a === n
                      ? -1
                      : b === n
                        ? 1
                        : e
                          ? -1
                          : f
                            ? 1
                            : k
                              ? J(k, a) - J(k, b)
                              : 0;
                  if (e === f) return ka(a, b);
                  c = a;
                  while ((c = c.parentNode)) g.unshift(c);
                  c = b;
                  while ((c = c.parentNode)) h.unshift(c);
                  while (g[d] === h[d]) d++;
                  return d
                    ? ka(g[d], h[d])
                    : g[d] === v
                      ? -1
                      : h[d] === v
                        ? 1
                        : 0;
                }),
              n)
            : n;
        }),
      (fa.matches = function (a, b) {
        return fa(a, null, null, b);
      }),
      (fa.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
            (b = b.replace(T, "='$1']")),
            c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) { }
        return fa(b, n, null, [a]).length > 0;
      }),
      (fa.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fa.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
            ? a.getAttribute(b)
            : (f = a.getAttributeNode(b)) && f.specified
              ? f.value
              : null;
      }),
      (fa.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (fa.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
            (k = !c.sortStable && a.slice(0)),
            a.sort(B),
            l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fa.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = fa.selectors =
      {
        cacheLength: 50,
        createPseudo: ha,
        match: W,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0,
          },
          " ": {
            dir: "parentNode",
          },
          "+": {
            dir: "previousSibling",
            first: !0,
          },
          "~": {
            dir: "previousSibling",
          },
        },
        preFilter: {
          ATTR: function (a) {
            return (
              (a[1] = a[1].replace(ba, ca)),
              (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            );
          },
          CHILD: function (a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || fa.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && fa.error(a[0]),
              a
            );
          },
          PSEUDO: function (a) {
            var b,
              c = !a[6] && a[2];
            return W.CHILD.test(a[0])
              ? null
              : (a[3]
                ? (a[2] = a[4] || a[5] || "")
                : c &&
                U.test(c) &&
                (b = g(c, !0)) &&
                (b = c.indexOf(")", c.length - b) - c.length) &&
                ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                a.slice(0, 3));
          },
        },
        filter: {
          TAG: function (a) {
            var b = a.replace(ba, ca).toLowerCase();
            return "*" === a
              ? function () {
                return !0;
              }
              : function (a) {
                return a.nodeName && a.nodeName.toLowerCase() === b;
              };
          },
          CLASS: function (a) {
            var b = y[a + " "];
            return (
              b ||
              ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                y(a, function (a) {
                  return b.test(
                    ("string" == typeof a.className && a.className) ||
                    ("undefined" != typeof a.getAttribute &&
                      a.getAttribute("class")) ||
                    ""
                  );
                }))
            );
          },
          ATTR: function (a, b, c) {
            return function (d) {
              var e = fa.attr(d, a);
              return null == e
                ? "!=" === b
                : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                        ? e !== c
                        : "^=" === b
                          ? c && 0 === e.indexOf(c)
                          : "*=" === b
                            ? c && e.indexOf(c) > -1
                            : "$=" === b
                              ? c && e.slice(-c.length) === c
                              : "~=" === b
                                ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                                : "|=" === b
                                  ? e === c || e.slice(0, c.length + 1) === c + "-"
                                  : !1)
                  : !0;
            };
          },
          CHILD: function (a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e
              ? function (a) {
                return !!a.parentNode;
              }
              : function (b, c, i) {
                var j,
                  k,
                  l,
                  m,
                  n,
                  o,
                  p = f !== g ? "nextSibling" : "previousSibling",
                  q = b.parentNode,
                  r = h && b.nodeName.toLowerCase(),
                  s = !i && !h,
                  t = !1;
                if (q) {
                  if (f) {
                    while (p) {
                      m = b;
                      while ((m = m[p]))
                        if (
                          h
                            ? m.nodeName.toLowerCase() === r
                            : 1 === m.nodeType
                        )
                          return !1;
                      o = p = "only" === a && !o && "nextSibling";
                    }
                    return !0;
                  }
                  if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                    (m = q),
                      (l = m[u] || (m[u] = {})),
                      (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                      (j = k[a] || []),
                      (n = j[0] === w && j[1]),
                      (t = n && j[2]),
                      (m = n && q.childNodes[n]);
                    while (
                      (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                    )
                      if (1 === m.nodeType && ++t && m === b) {
                        k[a] = [w, n, t];
                        break;
                      }
                  } else if (
                    (s &&
                      ((m = b),
                        (l = m[u] || (m[u] = {})),
                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                        (j = k[a] || []),
                        (n = j[0] === w && j[1]),
                        (t = n)),
                      t === !1)
                  )
                    while (
                      (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                    )
                      if (
                        (h
                          ? m.nodeName.toLowerCase() === r
                          : 1 === m.nodeType) &&
                        ++t &&
                        (s &&
                          ((l = m[u] || (m[u] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (k[a] = [w, t])),
                          m === b)
                      )
                        break;
                  return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                }
              };
          },
          PSEUDO: function (a, b) {
            var c,
              e =
                d.pseudos[a] ||
                d.setFilters[a.toLowerCase()] ||
                fa.error("unsupported pseudo: " + a);
            return e[u]
              ? e(b)
              : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ha(function (a, c) {
                      var d,
                        f = e(a, b),
                        g = f.length;
                      while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                    })
                    : function (a) {
                      return e(a, 0, c);
                    })
                : e;
          },
        },
        pseudos: {
          not: ha(function (a) {
            var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));
            return d[u]
              ? ha(function (a, b, c, e) {
                var f,
                  g = d(a, null, e, []),
                  h = a.length;
                while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
              })
              : function (a, e, f) {
                return (
                  (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                );
              };
          }),
          has: ha(function (a) {
            return function (b) {
              return fa(a, b).length > 0;
            };
          }),
          contains: ha(function (a) {
            return (
              (a = a.replace(ba, ca)),
              function (b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              }
            );
          }),
          lang: ha(function (a) {
            return (
              V.test(a || "") || fa.error("unsupported lang: " + a),
              (a = a.replace(ba, ca).toLowerCase()),
              function (b) {
                var c;
                do
                  if (
                    (c = p
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()),
                      c === a || 0 === c.indexOf(a + "-")
                    );
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              }
            );
          }),
          target: function (b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function (a) {
            return a === o;
          },
          focus: function (a) {
            return (
              a === n.activeElement &&
              (!n.hasFocus || n.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: function (a) {
            return a.disabled === !1;
          },
          disabled: function (a) {
            return a.disabled === !0;
          },
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return (
              ("input" === b && !!a.checked) ||
              ("option" === b && !!a.selected)
            );
          },
          selected: function (a) {
            return (
              a.parentNode && a.parentNode.selectedIndex, a.selected === !0
            );
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0;
          },
          parent: function (a) {
            return !d.pseudos.empty(a);
          },
          header: function (a) {
            return Y.test(a.nodeName);
          },
          input: function (a) {
            return X.test(a.nodeName);
          },
          button: function (a) {
            var b = a.nodeName.toLowerCase();
            return ("input" === b && "button" === a.type) || "button" === b;
          },
          text: function (a) {
            var b;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            );
          },
          first: na(function () {
            return [0];
          }),
          last: na(function (a, b) {
            return [b - 1];
          }),
          eq: na(function (a, b, c) {
            return [0 > c ? c + b : c];
          }),
          even: na(function (a, b) {
            for (var c = 0; b > c; c += 2) a.push(c);
            return a;
          }),
          odd: na(function (a, b) {
            for (var c = 1; b > c; c += 2) a.push(c);
            return a;
          }),
          lt: na(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
            return a;
          }),
          gt: na(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
            return a;
          }),
        },
      }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0,
    })
      d.pseudos[b] = la(b);
    for (b in {
      submit: !0,
      reset: !0,
    })
      d.pseudos[b] = ma(b);

    function pa() { }
    (pa.prototype = d.filters = d.pseudos),
      (d.setFilters = new pa()),
      (g = fa.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = R.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = S.exec(h)) &&
              ((c = e.shift()),
                f.push({
                  value: c,
                  type: e[0].replace(Q, " "),
                }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = W[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                  f.push({
                    value: c,
                    type: g,
                    matches: e,
                  }),
                  (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        });

    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }

    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
          while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
        }
        : function (b, c, g) {
          var h,
            i,
            j,
            k = [w, f];
          if (g) {
            while ((b = b[d]))
              if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          } else
            while ((b = b[d]))
              if (1 === b.nodeType || e) {
                if (
                  ((j = b[u] || (b[u] = {})),
                    (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                )
                  return (k[2] = h[2]);
                if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
              }
        };
    }

    function sa(a) {
      return a.length > 1
        ? function (b, c, d) {
          var e = a.length;
          while (e--) if (!a[e](b, c, d)) return !1;
          return !0;
        }
        : a[0];
    }

    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c;
    }

    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }

    function va(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = va(d)),
        e && !e[u] && (e = va(e, f)),
        ha(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ua(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ua(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }

    function wa(a) {
      for (
        var b,
        c,
        e,
        f = a.length,
        g = d.relative[a[0].type],
        h = g || d.relative[" "],
        i = g ? 1 : 0,
        k = ra(
          function (a) {
            return a === b;
          },
          h,
          !0
        ),
        l = ra(
          function (a) {
            return J(b, a) > -1;
          },
          h,
          !0
        ),
        m = [
          function (a, c, d) {
            var e =
              (!g && (d || c !== j)) ||
              ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
            return (b = null), e;
          },
        ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return va(
              i > 1 && sa(m),
              i > 1 &&
              qa(
                a.slice(0, i - 1).concat({
                  value: " " === a[i - 2].type ? "*" : "",
                })
              ).replace(Q, "$1"),
              c,
              e > i && wa(a.slice(i, e)),
              f > e && wa((a = a.slice(e))),
              f > e && qa(a)
            );
          }
          m.push(c);
        }
      return sa(m);
    }

    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u);
            }
            H.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ha(f) : f;
    }
    return (
      (h = fa.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xa(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fa.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
                j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]),
                  !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = W.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ba, ca),
                  (_.test(j[0].type) && oa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(
              f,
              b,
              !p,
              e,
              !b || (_.test(a) && oa(b.parentNode)) || b
            ),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ia(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ia(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
      ja("type|href|height|width", function (a, b, c) {
        return c
          ? void 0
          : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
      }),
      (c.attributes &&
        ia(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
      ja("value", function (a, b, c) {
        return c || "input" !== a.nodeName.toLowerCase()
          ? void 0
          : a.defaultValue;
      }),
      ia(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
      ja(K, function (a, b, c) {
        var d;
        return c
          ? void 0
          : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
      }),
      fa
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.uniqueSort = n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = function (a, b, c) {
    var d = [],
      e = void 0 !== c;
    while ((a = a[b]) && 9 !== a.nodeType)
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;
        d.push(a);
      }
    return d;
  },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
          a,
          n.grep(b, function (a) {
            return 1 === a.nodeType;
          })
        )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0;
            })
          );
        for (b = 0; e > b; b++) n.find(a, d[b], c);
        return (
          (c = this.pushStack(e > 1 ? n.unique(c) : c)),
          (c.selector = this.selector ? this.selector + " " + a : a),
          c
        );
      },
      filter: function (a) {
        return this.pushStack(z(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(z(this, a || [], !0));
      },
      is: function (a) {
        return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var A,
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = (n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || A), "string" == typeof a)) {
        if (
          ((e =
            "<" === a.charAt(0) &&
              ">" === a.charAt(a.length - 1) &&
              a.length >= 3
              ? [null, a, null]
              : B.exec(a)),
            !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
              n.merge(
                this,
                n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
              ),
              x.test(e[1]) && n.isPlainObject(b))
          )
            for (e in b)
              n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        if (((f = d.getElementById(e[2])), f && f.parentNode)) {
          if (f.id !== e[2]) return A.find(a);
          (this.length = 1), (this[0] = f);
        }
        return (this.context = d), (this.selector = a), this;
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
          ? "undefined" != typeof c.ready
            ? c.ready(a)
            : a(n)
          : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
            n.makeArray(a, this));
    });
  (C.prototype = n.fn), (A = n(d));
  var D = /^(?:parents|prev(?:Until|All))/,
    E = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  n.fn.extend({
    has: function (a) {
      var b,
        c = n(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0;
      });
    },
    closest: function (a, b) {
      for (
        var c,
        d = 0,
        e = this.length,
        f = [],
        g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
        e > d;
        d++
      )
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (
            c.nodeType < 11 &&
            (g
              ? g.index(c) > -1
              : 1 === c.nodeType && n.find.matchesSelector(c, a))
          ) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? n.inArray(this[0], n(a))
          : n.inArray(a.jquery ? a[0] : a, this)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });

  function F(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return u(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return u(a, "parentNode", c);
      },
      next: function (a) {
        return F(a, "nextSibling");
      },
      prev: function (a) {
        return F(a, "previousSibling");
      },
      nextAll: function (a) {
        return u(a, "nextSibling");
      },
      prevAll: function (a) {
        return u(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return u(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return u(a, "previousSibling", c);
      },
      siblings: function (a) {
        return v((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return v(a.firstChild);
      },
      contents: function (a) {
        return n.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 &&
          (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())),
          this.pushStack(e)
        );
      };
    }
  );
  var G = /\S+/g;

  function H(a) {
    var b = {};
    return (
      n.each(a.match(G) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
            (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                n.each(b, function (b, c) {
                  n.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== n.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            n.each(arguments, function (a, b) {
              var c;
              while ((c = n.inArray(b, f, c)) > -1)
                f.splice(c, 1), h >= c && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = !0), c || j.disable(), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
            ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
          ["resolve", "done", n.Callbacks("once memory"), "resolved"],
          ["reject", "fail", n.Callbacks("once memory"), "rejected"],
          ["notify", "progress", n.Callbacks("memory")],
        ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                          .promise()
                          .progress(c.notify)
                          .done(c.resolve)
                          .fail(c.reject)
                        : c[f[0] + "With"](
                          this === d ? c.promise() : this,
                          g ? [a] : arguments
                        );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
              g.add(
                function () {
                  c = h;
                },
                b[1 ^ a][2].disable,
                b[2][2].lock
              ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (d > 1)
          for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                .promise()
                .progress(h(b, j, i))
                .done(h(b, k, c))
                .fail(g.reject)
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var I;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
            (a !== !0 && --n.readyWait > 0) ||
            (I.resolveWith(d, [n]),
              n.fn.triggerHandler &&
              (n(d).triggerHandler("ready"), n(d).off("ready"))));
      },
    });

  function J() {
    d.addEventListener
      ? (d.removeEventListener("DOMContentLoaded", K),
        a.removeEventListener("load", K))
      : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
  }

  function K() {
    (d.addEventListener ||
      "load" === a.event.type ||
      "complete" === d.readyState) &&
      (J(), n.ready());
  }
  (n.ready.promise = function (b) {
    if (!I)
      if (
        ((I = n.Deferred()),
          "complete" === d.readyState ||
          ("loading" !== d.readyState && !d.documentElement.doScroll))
      )
        a.setTimeout(n.ready);
      else if (d.addEventListener)
        d.addEventListener("DOMContentLoaded", K),
          a.addEventListener("load", K);
      else {
        d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
        var c = !1;
        try {
          c = null == a.frameElement && d.documentElement;
        } catch (e) { }
        c &&
          c.doScroll &&
          !(function f() {
            if (!n.isReady) {
              try {
                c.doScroll("left");
              } catch (b) {
                return a.setTimeout(f, 50);
              }
              J(), n.ready();
            }
          })();
      }
    return I.promise(b);
  }),
    n.ready.promise();
  var L;
  for (L in n(l)) break;
  (l.ownFirst = "0" === L),
    (l.inlineBlockNeedsLayout = !1),
    n(function () {
      var a, b, c, e;
      (c = d.getElementsByTagName("body")[0]),
        c &&
        c.style &&
        ((b = d.createElement("div")),
          (e = d.createElement("div")),
          (e.style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          c.appendChild(e).appendChild(b),
          "undefined" != typeof b.style.zoom &&
          ((b.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
            a && (c.style.zoom = 1)),
          c.removeChild(e));
    }),
    (function () {
      var a = d.createElement("div");
      l.deleteExpando = !0;
      try {
        delete a.test;
      } catch (b) {
        l.deleteExpando = !1;
      }
      a = null;
    })();
  var M = function (a) {
    var b = n.noData[(a.nodeName + " ").toLowerCase()],
      c = +a.nodeType || 1;
    return 1 !== c && 9 !== c
      ? !1
      : !b || (b !== !0 && a.getAttribute("classid") === b);
  },
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;

  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();
      if (((c = a.getAttribute(d)), "string" == typeof c)) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
                ? !1
                : "null" === c
                  ? null
                  : +c + "" === c
                    ? +c
                    : N.test(c)
                      ? n.parseJSON(c)
                      : c;
        } catch (e) { }
        n.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }

  function Q(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }

  function R(a, b, d, e) {
    if (M(a)) {
      var f,
        g,
        h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (
        (k && j[k] && (e || j[k].data)) ||
        void 0 !== d ||
        "string" != typeof b
      )
        return (
          k || (k = i ? (a[h] = c.pop() || n.guid++) : h),
          j[k] ||
          (j[k] = i
            ? {}
            : {
              toJSON: n.noop,
            }),
          ("object" != typeof b && "function" != typeof b) ||
          (e
            ? (j[k] = n.extend(j[k], b))
            : (j[k].data = n.extend(j[k].data, b))),
          (g = j[k]),
          e || (g.data || (g.data = {}), (g = g.data)),
          void 0 !== d && (g[n.camelCase(b)] = d),
          "string" == typeof b
            ? ((f = g[b]), null == f && (f = g[n.camelCase(b)]))
            : (f = g),
          f
        );
    }
  }

  function S(a, b, c) {
    if (M(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? n.cache : a,
        h = f ? a[n.expando] : n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b)
            ? (b = b.concat(n.map(b, n.camelCase)))
            : b in d
              ? (b = [b])
              : ((b = n.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
            (e = b.length);
          while (e--) delete d[b[e]];
          if (c ? !Q(d) : !n.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, Q(g[h]))) &&
          (f
            ? n.cleanData([a], !0)
            : l.deleteExpando || g != g.window
              ? delete g[h]
              : (g[h] = void 0));
      }
    }
  }
  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]), !!a && !Q(a)
      );
    },
    data: function (a, b, c) {
      return R(a, b, c);
    },
    removeData: function (a, b) {
      return S(a, b);
    },
    _data: function (a, b, c) {
      return R(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return S(a, b, !0);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = n.data(f)), 1 === f.nodeType && !n._data(f, "parsedAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                  0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            n._data(f, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
            n.data(this, a);
          })
          : arguments.length > 1
            ? this.each(function () {
              n.data(this, a, b);
            })
            : f
              ? P(f, a, n.data(f, a))
              : void 0;
      },
      removeData: function (a) {
        return this.each(function () {
          n.removeData(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = n._data(a, b)),
            c &&
            (!d || n.isArray(c)
              ? (d = n._data(a, b, n.makeArray(c)))
              : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
          ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          n._data(a, c) ||
          n._data(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              n._removeData(a, b + "queue"), n._removeData(a, c);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
              ? this
              : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = n._data(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    }),
    (function () {
      var a;
      l.shrinkWrapBlocks = function () {
        if (null != a) return a;
        a = !1;
        var b, c, e;
        return (
          (c = d.getElementsByTagName("body")[0]),
          c && c.style
            ? ((b = d.createElement("div")),
              (e = d.createElement("div")),
              (e.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              c.appendChild(e).appendChild(b),
              "undefined" != typeof b.style.zoom &&
              ((b.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (b.appendChild(d.createElement("div")).style.width = "5px"),
                (a = 3 !== b.offsetWidth)),
              c.removeChild(e),
              a)
            : void 0
        );
      };
    })();
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    V = ["Top", "Right", "Bottom", "Left"],
    W = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    };

  function X(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
          return d.cur();
        }
        : function () {
          return n.css(a, b, "");
        },
      i = h(),
      j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || ("px" !== j && +i)) && U.exec(n.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
      ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var Y = function (a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c) Y(a, b, h, c[h], !0, f, g);
    } else if (
      void 0 !== d &&
      ((e = !0),
        n.isFunction(d) || (g = !0),
        j &&
        (g
          ? (b.call(a, d), (b = null))
          : ((j = b),
            (b = function (a, b, c) {
              return j.call(n(a), c);
            }))),
        b)
    )
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
    Z = /^(?:checkbox|radio)$/i,
    $ = /<([\w:-]+)/,
    _ = /^$|\/(?:java|ecma)script/i,
    aa = /^\s+/,
    ba =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

  function ca(a) {
    var b = ba.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  !(function () {
    var a = d.createElement("div"),
      b = d.createDocumentFragment(),
      c = d.createElement("input");
    (a.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (l.leadingWhitespace = 3 === a.firstChild.nodeType),
      (l.tbody = !a.getElementsByTagName("tbody").length),
      (l.htmlSerialize = !!a.getElementsByTagName("link").length),
      (l.html5Clone =
        "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML),
      (c.type = "checkbox"),
      (c.checked = !0),
      b.appendChild(c),
      (l.appendChecked = c.checked),
      (a.innerHTML = "<textarea>x</textarea>"),
      (l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue),
      b.appendChild(a),
      (c = d.createElement("input")),
      c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      a.appendChild(c),
      (l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (l.noCloneEvent = !!a.addEventListener),
      (a[n.expando] = 1),
      (l.attributes = !a.getAttribute(n.expando));
  })();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  };
  (da.optgroup = da.option),
    (da.tbody = da.tfoot = da.colgroup = da.caption = da.thead),
    (da.th = da.td);

  function ea(a, b) {
    var c,
      d,
      e = 0,
      f =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
            ? a.querySelectorAll(b || "*")
            : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], f) : f;
  }

  function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
  }
  var ga = /<|&#?\w+;/,
    ha = /<tbody/i;

  function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked);
  }

  function ja(a, b, c, d, e) {
    for (
      var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0;
      o > r;
      r++
    )
      if (((g = a[r]), g || 0 === g))
        if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
        else if (ga.test(g)) {
          (i = i || p.appendChild(b.createElement("div"))),
            (j = ($.exec(g) || ["", ""])[1].toLowerCase()),
            (m = da[j] || da._default),
            (i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2]),
            (f = m[0]);
          while (f--) i = i.lastChild;
          if (
            (!l.leadingWhitespace &&
              aa.test(g) &&
              q.push(b.createTextNode(aa.exec(g)[0])),
              !l.tbody)
          ) {
            (g =
              "table" !== j || ha.test(g)
                ? "<table>" !== m[1] || ha.test(g)
                  ? 0
                  : i
                : i.firstChild),
              (f = g && g.childNodes.length);
            while (f--)
              n.nodeName((k = g.childNodes[f]), "tbody") &&
                !k.childNodes.length &&
                g.removeChild(k);
          }
          n.merge(q, i.childNodes), (i.textContent = "");
          while (i.firstChild) i.removeChild(i.firstChild);
          i = p.lastChild;
        } else q.push(b.createTextNode(g));
    i && p.removeChild(i),
      l.appendChecked || n.grep(ea(q, "input"), ia),
      (r = 0);
    while ((g = q[r++]))
      if (d && n.inArray(g, d) > -1) e && e.push(g);
      else if (
        ((h = n.contains(g.ownerDocument, g)),
          (i = ea(p.appendChild(g), "script")),
          h && fa(i),
          c)
      ) {
        f = 0;
        while ((g = i[f++])) _.test(g.type || "") && c.push(g);
      }
    return (i = null), p;
  }
  !(function () {
    var b,
      c,
      e = d.createElement("div");
    for (b in {
      submit: !0,
      change: !0,
      focusin: !0,
    })
      (c = "on" + b),
        (l[b] = c in a) ||
        (e.setAttribute(c, "t"), (l[b] = e.attributes[c].expando === !1));
    e = null;
  })();
  var ka = /^(?:input|select|textarea)$/i,
    la = /^key/,
    ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    na = /^(?:focusinfocus|focusoutblur)$/,
    oa = /^([^.]*)(?:\.(.+)|)/;

  function pa() {
    return !0;
  }

  function qa() {
    return !1;
  }

  function ra() {
    try {
      return d.activeElement;
    } catch (a) { }
  }

  function sa(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) sa(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
        ("string" == typeof c
          ? ((e = d), (d = void 0))
          : ((e = d), (d = c), (c = void 0))),
        e === !1)
    )
      e = qa;
    else if (!e) return a;
    return (
      1 === f &&
      ((g = e),
        (e = function (a) {
          return n().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = n.guid++))),
      a.each(function () {
        n.event.add(this, b, e, d, c);
      })
    );
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n._data(a);
      if (r) {
        c.handler && ((i = c), (c = i.handler), (e = i.selector)),
          c.guid || (c.guid = n.guid++),
          (g = r.events) || (g = r.events = {}),
          (k = r.handle) ||
          ((k = r.handle =
            function (a) {
              return "undefined" == typeof n ||
                (a && n.event.triggered === a.type)
                ? void 0
                : n.event.dispatch.apply(k.elem, arguments);
            }),
            (k.elem = a)),
          (b = (b || "").match(G) || [""]),
          (h = b.length);
        while (h--)
          (f = oa.exec(b[h]) || []),
            (o = q = f[1]),
            (p = (f[2] || "").split(".").sort()),
            o &&
            ((j = n.event.special[o] || {}),
              (o = (e ? j.delegateType : j.bindType) || o),
              (j = n.event.special[o] || {}),
              (l = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                i
              )),
              (m = g[o]) ||
              ((m = g[o] = []),
                (m.delegateCount = 0),
                (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                (a.addEventListener
                  ? a.addEventListener(o, k, !1)
                  : a.attachEvent && a.attachEvent("on" + o, k))),
              j.add &&
              (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
              (n.event.global[o] = !0));
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        (b = (b || "").match(G) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = oa.exec(b[j]) || []),
              (o = q = h[1]),
              (p = (h[2] || "").split(".").sort()),
              o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = k[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (i = f = m.length);
            while (f--)
              (g = m[f]),
                (!e && q !== g.origType) ||
                (c && c.guid !== g.guid) ||
                (h && !h.test(g.namespace)) ||
                (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                (m.splice(f, 1),
                  g.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, g));
            i &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
                delete k[o]);
          } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    },
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((i = m = e = e || d),
          3 !== e.nodeType &&
          8 !== e.nodeType &&
          !na.test(q + n.event.triggered) &&
          (q.indexOf(".") > -1 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
            (h = q.indexOf(":") < 0 && "on" + q),
            (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
            (b.isTrigger = f ? 2 : 3),
            (b.namespace = r.join(".")),
            (b.rnamespace = b.namespace
              ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (b.result = void 0),
            b.target || (b.target = e),
            (c = null == c ? [b] : n.makeArray(c, [b])),
            (l = n.event.special[q] || {}),
            f || !l.trigger || l.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (
            j = l.delegateType || q, na.test(j + q) || (i = i.parentNode);
            i;
            i = i.parentNode
          )
            p.push(i), (m = i);
          m === (e.ownerDocument || d) &&
            p.push(m.defaultView || m.parentWindow || a);
        }
        o = 0;
        while ((i = p[o++]) && !b.isPropagationStopped())
          (b.type = o > 1 ? j : l.bindType || q),
            (g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle")),
            g && g.apply(i, c),
            (g = h && i[h]),
            g &&
            g.apply &&
            M(i) &&
            ((b.result = g.apply(i, c)),
              b.result === !1 && b.preventDefault());
        if (
          ((b.type = q),
            !f &&
            !b.isDefaultPrevented() &&
            (!l._default || l._default.apply(p.pop(), c) === !1) &&
            M(e) &&
            h &&
            e[q] &&
            !n.isWindow(e))
        ) {
          (m = e[h]), m && (e[h] = null), (n.event.triggered = q);
          try {
            e[q]();
          } catch (s) { }
          (n.event.triggered = void 0), m && (e[h] = m);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        d,
        f,
        g,
        h = [],
        i = e.call(arguments),
        j = (n._data(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
          (a.delegateTarget = this),
          !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (a.rnamespace && !a.rnamespace.test(g.namespace)) ||
              ((a.handleObj = g),
                (a.data = g.data),
                (d = (
                  (n.event.special[g.origType] || {}).handle || g.handler
                ).apply(f.elem, i)),
                void 0 !== d &&
                (a.result = d) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (
        h &&
        i.nodeType &&
        ("click" !== a.type || isNaN(a.button) || a.button < 1)
      )
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                (d[e] = f.needsContext
                  ? n(e, this).index(i) > -1
                  : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length &&
              g.push({
                elem: i,
                handlers: d,
              });
          }
      return (
        h < b.length &&
        g.push({
          elem: this,
          handlers: b.slice(h),
        }),
        g
      );
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = a.type,
        g = a,
        h = this.fixHooks[f];
      h ||
        (this.fixHooks[f] = h =
          ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
        (e = h.props ? this.props.concat(h.props) : this.props),
        (a = new n.Event(g)),
        (b = e.length);
      while (b--) (c = e[b]), (a[c] = g[c]);
      return (
        a.target || (a.target = g.srcElement || d),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        h.filter ? h.filter(a, g) : a
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
          (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = b.button,
          h = b.fromElement;
        return (
          null == a.pageX &&
          null != b.clientX &&
          ((e = a.target.ownerDocument || d),
            (f = e.documentElement),
            (c = e.body),
            (a.pageX =
              b.clientX +
              ((f && f.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((f && f.clientLeft) || (c && c.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((f && f.scrollTop) || (c && c.scrollTop) || 0) -
              ((f && f.clientTop) || (c && c.clientTop) || 0))),
          !a.relatedTarget &&
          h &&
          (a.relatedTarget = h === a.target ? b.toElement : h),
          a.which ||
          void 0 === g ||
          (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    special: {
      load: {
        noBubble: !0,
      },
      focus: {
        trigger: function () {
          if (this !== ra() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) { }
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return n.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
      });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = d.removeEventListener
      ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
      }
      : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent &&
          ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
      }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
          ? ((this.originalEvent = a),
            (this.type = a.type),
            (this.isDefaultPrevented =
              a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                ? pa
                : qa))
          : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: qa,
      isPropagationStopped: qa,
      isImmediatePropagationStopped: qa,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = pa),
          a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = pa),
          a &&
          !this.isSimulated &&
          (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = pa),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || n.contains(d, e))) ||
              ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    l.submit ||
    (n.event.special.submit = {
      setup: function () {
        return n.nodeName(this, "form")
          ? !1
          : void n.event.add(
            this,
            "click._submit keypress._submit",
            function (a) {
              var b = a.target,
                c =
                  n.nodeName(b, "input") || n.nodeName(b, "button")
                    ? n.prop(b, "form")
                    : void 0;
              c &&
                !n._data(c, "submit") &&
                (n.event.add(c, "submit._submit", function (a) {
                  a._submitBubble = !0;
                }),
                  n._data(c, "submit", !0));
            }
          );
      },
      postDispatch: function (a) {
        a._submitBubble &&
          (delete a._submitBubble,
            this.parentNode &&
            !a.isTrigger &&
            n.event.simulate("submit", this.parentNode, a));
      },
      teardown: function () {
        return n.nodeName(this, "form")
          ? !1
          : void n.event.remove(this, "._submit");
      },
    }),
    l.change ||
    (n.event.special.change = {
      setup: function () {
        return ka.test(this.nodeName)
          ? (("checkbox" !== this.type && "radio" !== this.type) ||
            (n.event.add(this, "propertychange._change", function (a) {
              "checked" === a.originalEvent.propertyName &&
                (this._justChanged = !0);
            }),
              n.event.add(this, "click._change", function (a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1),
                  n.event.simulate("change", this, a);
              })),
            !1)
          : void n.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            ka.test(b.nodeName) &&
              !n._data(b, "change") &&
              (n.event.add(b, "change._change", function (a) {
                !this.parentNode ||
                  a.isSimulated ||
                  a.isTrigger ||
                  n.event.simulate("change", this.parentNode, a);
              }),
                n._data(b, "change", !0));
          });
      },
      handle: function (a) {
        var b = a.target;
        return this !== b ||
          a.isSimulated ||
          a.isTrigger ||
          ("radio" !== b.type && "checkbox" !== b.type)
          ? a.handleObj.handler.apply(this, arguments)
          : void 0;
      },
      teardown: function () {
        return n.event.remove(this, "._change"), !ka.test(this.nodeName);
      },
    }),
    l.focusin ||
    n.each(
      {
        focus: "focusin",
        blur: "focusout",
      },
      function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b);
            e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b) - 1;
            e
              ? n._data(d, b, e)
              : (d.removeEventListener(a, c, !0), n._removeData(d, b));
          },
        };
      }
    ),
    n.fn.extend({
      on: function (a, b, c, d) {
        return sa(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return sa(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = qa),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
    ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
    va =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    wa = /<script|<style|<link/i,
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ya = /^true\/(.*)/,
    za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Aa = ca(d),
    Ba = Aa.appendChild(d.createElement("div"));

  function Ca(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
      a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }

  function Da(a) {
    return (a.type = (null !== n.find.attr(a, "type")) + "/" + a.type), a;
  }

  function Ea(a) {
    var b = ya.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }

  function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
        d,
        e,
        f = n._data(a),
        g = n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = n.extend({}, g.data));
    }
  }

  function Ga(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (((c = b.nodeName.toLowerCase()), !l.noCloneEvent && b[n.expando])) {
        e = n._data(b);
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando);
      }
      "script" === c && b.text !== a.text
        ? ((Da(b).text = a.text), Ea(b))
        : "object" === c
          ? (b.parentNode && (b.outerHTML = a.outerHTML),
            l.html5Clone &&
            a.innerHTML &&
            !n.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
          : "input" === c && Z.test(a.type)
            ? ((b.defaultChecked = b.checked = a.checked),
              b.value !== a.value && (b.value = a.value))
            : "option" === c
              ? (b.defaultSelected = b.selected = a.defaultSelected)
              : ("input" !== c && "textarea" !== c) ||
              (b.defaultValue = a.defaultValue);
    }
  }

  function Ha(a, b, c, d) {
    b = f.apply([], b);
    var e,
      g,
      h,
      i,
      j,
      k,
      m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || (o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
      });
    if (
      o &&
      ((k = ja(b, a[0].ownerDocument, !1, a, d)),
        (e = k.firstChild),
        1 === k.childNodes.length && (k = e),
        e || d)
    ) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++)
        (g = k),
          m !== p &&
          ((g = n.clone(g, !0, !0)), h && n.merge(i, ea(g, "script"))),
          c.call(a[m], g, m);
      if (h)
        for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++)
          (g = i[m]),
            _.test(g.type || "") &&
            !n._data(g, "globalEval") &&
            n.contains(j, g) &&
            (g.src
              ? n._evalUrl && n._evalUrl(g.src)
              : n.globalEval(
                (g.text || g.textContent || g.innerHTML || "").replace(
                  za,
                  ""
                )
              ));
      k = e = null;
    }
    return a;
  }

  function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || n.cleanData(ea(d)),
        d.parentNode &&
        (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(va, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = n.contains(a.ownerDocument, a);
      if (
        (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">")
          ? (f = a.cloneNode(!0))
          : ((Ba.innerHTML = a.outerHTML), Ba.removeChild((f = Ba.firstChild))),
          !(
            (l.noCloneEvent && l.noCloneChecked) ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            n.isXMLDoc(a)
          ))
      )
        for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g)
          d[g] && Ga(e, d[g]);
      if (b)
        if (c)
          for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++)
            Fa(e, d[g]);
        else Fa(a, f);
      return (
        (d = ea(f, "script")),
        d.length > 0 && fa(d, !i && ea(a, "script")),
        (d = h = e = null),
        f
      );
    },
    cleanData: function (a, b) {
      for (
        var d,
        e,
        f,
        g,
        h = 0,
        i = n.expando,
        j = n.cache,
        k = l.attributes,
        m = n.event.special;
        null != (d = a[h]);
        h++
      )
        if ((b || M(d)) && ((f = d[i]), (g = f && j[f]))) {
          if (g.events)
            for (e in g.events)
              m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          j[f] &&
            (delete j[f],
              k || "undefined" == typeof d.removeAttribute
                ? (d[i] = void 0)
                : d.removeAttribute(i),
              c.push(f));
        }
    },
  }),
    n.fn.extend({
      domManip: Ha,
      detach: function (a) {
        return Ia(this, a, !0);
      },
      remove: function (a) {
        return Ia(this, a);
      },
      text: function (a) {
        return Y(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().append(
                ((this[0] && this[0].ownerDocument) || d).createTextNode(a)
              );
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Ha(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ca(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return Ha(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ca(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return Ha(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Ha(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && n.cleanData(ea(a, !1));
          while (a.firstChild) a.removeChild(a.firstChild);
          a.options && n.nodeName(a, "select") && (a.options.length = 0);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return Y(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a)
              return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
            if (
              "string" == typeof a &&
              !wa.test(a) &&
              (l.htmlSerialize || !ua.test(a)) &&
              (l.leadingWhitespace || !aa.test(a)) &&
              !da[($.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = n.htmlPrefilter(a);
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                    (n.cleanData(ea(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) { }
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ha(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            n.inArray(this, a) < 0 &&
              (n.cleanData(ea(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
            (c = d === h ? this : this.clone(!0)),
              n(f[d])[b](c),
              g.apply(e, c.get());
          return this.pushStack(e);
        };
      }
    );
  var Ja,
    Ka = {
      HTML: "block",
      BODY: "block",
    };

  function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d;
  }

  function Ma(a) {
    var b = d,
      c = Ka[a];
    return (
      c ||
      ((c = La(a, b)),
        ("none" !== c && c) ||
        ((Ja = (
          Ja || n("<iframe frameborder='0' width='0' height='0'/>")
        ).appendTo(b.documentElement)),
          (b = (Ja[0].contentWindow || Ja[0].contentDocument).document),
          b.write(),
          b.close(),
          (c = La(a, b)),
          Ja.detach()),
        (Ka[a] = c)),
      c
    );
  }
  var Na = /^margin/,
    Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Pa = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Qa = d.documentElement;
  !(function () {
    var b,
      c,
      e,
      f,
      g,
      h,
      i = d.createElement("div"),
      j = d.createElement("div");
    if (j.style) {
      (j.style.cssText = "float:left;opacity:.5"),
        (l.opacity = "0.5" === j.style.opacity),
        (l.cssFloat = !!j.style.cssFloat),
        (j.style.backgroundClip = "content-box"),
        (j.cloneNode(!0).style.backgroundClip = ""),
        (l.clearCloneStyle = "content-box" === j.style.backgroundClip),
        (i = d.createElement("div")),
        (i.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        (j.innerHTML = ""),
        i.appendChild(j),
        (l.boxSizing =
          "" === j.style.boxSizing ||
          "" === j.style.MozBoxSizing ||
          "" === j.style.WebkitBoxSizing),
        n.extend(l, {
          reliableHiddenOffsets: function () {
            return null == b && k(), f;
          },
          boxSizingReliable: function () {
            return null == b && k(), e;
          },
          pixelMarginRight: function () {
            return null == b && k(), c;
          },
          pixelPosition: function () {
            return null == b && k(), b;
          },
          reliableMarginRight: function () {
            return null == b && k(), g;
          },
          reliableMarginLeft: function () {
            return null == b && k(), h;
          },
        });

      function k() {
        var k,
          l,
          m = d.documentElement;
        m.appendChild(i),
          (j.style.cssText =
            "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (b = e = h = !1),
          (c = g = !0),
          a.getComputedStyle &&
          ((l = a.getComputedStyle(j)),
            (b = "1%" !== (l || {}).top),
            (h = "2px" === (l || {}).marginLeft),
            (e =
              "4px" ===
              (
                l || {
                  width: "4px",
                }
              ).width),
            (j.style.marginRight = "50%"),
            (c =
              "4px" ===
              (
                l || {
                  marginRight: "4px",
                }
              ).marginRight),
            (k = j.appendChild(d.createElement("div"))),
            (k.style.cssText = j.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (k.style.marginRight = k.style.width = "0"),
            (j.style.width = "1px"),
            (g = !parseFloat((a.getComputedStyle(k) || {}).marginRight)),
            j.removeChild(k)),
          (j.style.display = "none"),
          (f = 0 === j.getClientRects().length),
          f &&
          ((j.style.display = ""),
            (j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (j.childNodes[0].style.borderCollapse = "separate"),
            (k = j.getElementsByTagName("td")),
            (k[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
            (f = 0 === k[0].offsetHeight),
            f &&
            ((k[0].style.display = ""),
              (k[1].style.display = "none"),
              (f = 0 === k[0].offsetHeight))),
          m.removeChild(i);
      }
    }
  })();
  var Ra,
    Sa,
    Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle
    ? ((Ra = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    }),
      (Sa = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ra(a)),
          (g = c ? c.getPropertyValue(b) || c[b] : void 0),
          ("" !== g && void 0 !== g) ||
          n.contains(a.ownerDocument, a) ||
          (g = n.style(a, b)),
          c &&
          !l.pixelMarginRight() &&
          Oa.test(g) &&
          Na.test(b) &&
          ((d = h.width),
            (e = h.minWidth),
            (f = h.maxWidth),
            (h.minWidth = h.maxWidth = h.width = g),
            (g = c.width),
            (h.width = d),
            (h.minWidth = e),
            (h.maxWidth = f)),
          void 0 === g ? g : g + ""
        );
      }))
    : Qa.currentStyle &&
    ((Ra = function (a) {
      return a.currentStyle;
    }),
      (Sa = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ra(a)),
          (g = c ? c[b] : void 0),
          null == g && h && h[b] && (g = h[b]),
          Oa.test(g) &&
          !Ta.test(b) &&
          ((d = h.left),
            (e = a.runtimeStyle),
            (f = e && e.left),
            f && (e.left = a.currentStyle.left),
            (h.left = "fontSize" === b ? "1em" : g),
            (g = h.pixelLeft + "px"),
            (h.left = d),
            f && (e.left = f)),
          void 0 === g ? g : g + "" || "auto"
        );
      }));

  function Ua(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Va = /alpha\([^)]*\)/i,
    Wa = /opacity\s*=\s*([^)]*)/i,
    Xa = /^(none|table(?!-c[ea]).+)/,
    Ya = new RegExp("^(" + T + ")(.*)$", "i"),
    Za = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    $a = {
      letterSpacing: "0",
      fontWeight: "400",
    },
    _a = ["Webkit", "O", "Moz", "ms"],
    ab = d.createElement("div").style;

  function bb(a) {
    if (a in ab) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
      c = _a.length;
    while (c--) if (((a = _a[c] + b), a in ab)) return a;
  }

  function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
        ((f[g] = n._data(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
              W(d) &&
              (f[g] = n._data(d, "olddisplay", Ma(d.nodeName))))
            : ((e = W(d)),
              ((c && "none" !== c) || !e) &&
              n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
        ((b && "none" !== d.style.display && "" !== d.style.display) ||
          (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }

  function db(a, b, c) {
    var d = Ya.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }

  function eb(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
      g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + V[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + V[f], !0, e)),
            "padding" !== c &&
            (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    return g;
  }

  function fb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ra(a),
      g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Sa(a, b, f)),
          (0 > e || null == e) && (e = a.style[b]),
          Oa.test(e))
      )
        return e;
      (d = g && (l.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {
      float: l.cssFloat ? "cssFloat" : "styleFloat",
    },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        if (
          ((b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
            (g = n.cssHooks[b] || n.cssHooks[h]),
            void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (
          ((f = typeof c),
            "string" === f &&
            (e = U.exec(c)) &&
            e[1] &&
            ((c = X(a, b, e)), (f = "number")),
            null != c &&
            c === c &&
            ("number" === f &&
              (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
              l.clearCloneStyle ||
              "" !== c ||
              0 !== b.indexOf("background") ||
              (i[b] = "inherit"),
              !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
        )
          try {
            i[b] = c;
          } catch (j) { }
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (f = g.get(a, !0, c)),
        void 0 === f && (f = Sa(a, b, d)),
        "normal" === f && b in $a && (f = $a[b]),
        "" === c || c
          ? ((e = parseFloat(f)), c === !0 || isFinite(e) ? e || 0 : f)
          : f
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? Pa(a, Za, function () {
                return fb(a, b, d);
              })
              : fb(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Ra(a);
          return db(
            a,
            c,
            d
              ? eb(
                a,
                b,
                d,
                l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e),
                e
              )
              : 0
          );
        },
      };
    }),
    l.opacity ||
    (n.cssHooks.opacity = {
      get: function (a, b) {
        return Wa.test(
          (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
        )
          ? 0.01 * parseFloat(RegExp.$1) + ""
          : b
            ? "1"
            : "";
      },
      set: function (a, b) {
        var c = a.style,
          d = a.currentStyle,
          e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = (d && d.filter) || c.filter || "";
        (c.zoom = 1),
          ((b >= 1 || "" === b) &&
            "" === n.trim(f.replace(Va, "")) &&
            c.removeAttribute &&
            (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
          (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
      },
    }),
    (n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
      return b
        ? Pa(
          a,
          {
            display: "inline-block",
          },
          Sa,
          [a, "marginRight"]
        )
        : void 0;
    })),
    (n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
      return b
        ? (parseFloat(Sa(a, "marginLeft")) ||
          (n.contains(a.ownerDocument, a)
            ? a.getBoundingClientRect().left -
            Pa(
              a,
              {
                marginLeft: 0,
              },
              function () {
                return a.getBoundingClientRect().left;
              }
            )
            : 0)) + "px"
        : void 0;
    })),
    n.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (a, b) {
        (n.cssHooks[a + b] = {
          expand: function (c) {
            for (
              var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
              4 > d;
              d++
            )
              e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
            return e;
          },
        }),
          Na.test(a) || (n.cssHooks[a + b].set = db);
      }
    ),
    n.fn.extend({
      css: function (a, b) {
        return Y(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = Ra(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return cb(this, !0);
      },
      hide: function () {
        return cb(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
            W(this) ? n(this).show() : n(this).hide();
          });
      },
    });

  function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e);
  }
  (n.Tween = gb),
    (gb.prototype = {
      constructor: gb,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || n.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = gb.propHooks[this.prop];
        return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = gb.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
              n.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
          this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : gb.propHooks._default.set(this),
          this
        );
      },
    }),
    (gb.prototype.init.prototype = gb.prototype),
    (gb.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop])
              ? (a.elem[a.prop] = a.now)
              : n.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (gb.propHooks.scrollTop = gb.propHooks.scrollLeft =
    {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      },
    }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (n.fx = gb.prototype.init),
    (n.fx.step = {});
  var hb,
    ib,
    jb = /^(?:toggle|show|hide)$/,
    kb = /queueHooks$/;

  function lb() {
    return (
      a.setTimeout(function () {
        hb = void 0;
      }),
      (hb = n.now())
    );
  }

  function mb(a, b) {
    var c,
      d = {
        height: a,
      },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      (c = V[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }

  function nb(a, b, c) {
    for (
      var d,
      e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]),
      f = 0,
      g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }

  function ob(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      m = this,
      o = {},
      p = a.style,
      q = a.nodeType && W(a),
      r = n._data(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
        null == h.unqueued &&
        ((h.unqueued = 0),
          (i = h.empty.fire),
          (h.empty.fire = function () {
            h.unqueued || i();
          })),
        h.unqueued++,
        m.always(function () {
          m.always(function () {
            h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
          });
        })),
      1 === a.nodeType &&
      ("height" in b || "width" in b) &&
      ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j),
        "inline" === k &&
        "none" === n.css(a, "float") &&
        (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName)
          ? (p.zoom = 1)
          : (p.display = "inline-block"))),
      c.overflow &&
      ((p.overflow = "hidden"),
        l.shrinkWrapBlocks() ||
        m.always(function () {
          (p.overflow = c.overflow[0]),
            (p.overflowX = c.overflow[1]),
            (p.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), jb.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }
        o[d] = (r && r[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(o))
      "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : (r = n._data(a, "fxshow", {})),
        f && (r.hidden = !q),
        q
          ? n(a).show()
          : m.done(function () {
            n(a).hide();
          }),
        m.done(function () {
          var b;
          n._removeData(a, "fxshow");
          for (b in o) n.style(a, b, o[b]);
        });
      for (d in o)
        (g = nb(q ? r[d] : 0, d, m)),
          d in r ||
          ((r[d] = g.start),
            q &&
            ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }

  function pb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
          (e = b[d]),
          (f = a[c]),
          n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
          c !== d && ((a[d] = f), delete a[c]),
          (g = n.cssHooks[d]),
          g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }

  function qb(a, b, c) {
    var d,
      e,
      f = 0,
      g = qb.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = hb || lb(),
          c = Math.max(0, j.startTime + j.duration - b),
          d = c / j.duration || 0,
          f = 1 - d,
          g = 0,
          i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(
          !0,
          {
            specialEasing: {},
            easing: n.easing._default,
          },
          c
        ),
        originalProperties: b,
        originalOptions: c,
        startTime: hb || lb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (pb(k, j.opts.specialEasing); g > f; f++)
      if ((d = qb.prefilters[f].call(j, a, k, j.opts)))
        return (
          n.isFunction(d.stop) &&
          (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
          d
        );
    return (
      n.map(k, nb, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(
        n.extend(i, {
          elem: a,
          anim: j,
          queue: j.opts.queue,
        })
      ),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(qb, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return X(c.elem, a, U.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]),
          (qb.tweeners[c] = qb.tweeners[c] || []),
          qb.tweeners[c].unshift(b);
    },
    prefilters: [ob],
    prefilter: function (a, b) {
      b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
            complete: c || (!c && b) || (n.isFunction(a) && a),
            duration: a,
            easing: (c && b) || (b && !n.isFunction(b) && b),
          };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
            ? d.duration
            : d.duration in n.fx.speeds
              ? n.fx.speeds[d.duration]
              : n.fx.speeds._default),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(W).css("opacity", 0).show().end().animate(
          {
            opacity: b,
          },
          a,
          c,
          d
        );
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = qb(this, n.extend({}, a), f);
            (e || n._data(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = n._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
            for (e = f.length; e--;)
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = n._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
              n.queue(this, a, []),
              e && e.stop && e.stop.call(this, !0),
              b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(mb(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = n.timers,
        c = 0;
      for (hb = n.now(); c < b.length; c++)
        (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
      b.length || n.fx.stop(), (hb = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      a.clearInterval(ib), (ib = null);
    }),
    (n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    (n.fn.delay = function (b, c) {
      return (
        (b = n.fx ? n.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a,
        b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
      (c = d.createElement("div")),
        c.setAttribute("className", "t"),
        (c.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (a = c.getElementsByTagName("a")[0]),
        b.setAttribute("type", "checkbox"),
        c.appendChild(b),
        (a = c.getElementsByTagName("a")[0]),
        (a.style.cssText = "top:1px"),
        (l.getSetAttribute = "t" !== c.className),
        (l.style = /top/.test(a.getAttribute("style"))),
        (l.hrefNormalized = "/a" === a.getAttribute("href")),
        (l.checkOn = !!b.value),
        (l.optSelected = f.selected),
        (l.enctype = !!d.createElement("form").enctype),
        (e.disabled = !0),
        (l.optDisabled = !f.disabled),
        (b = d.createElement("input")),
        b.setAttribute("value", ""),
        (l.input = "" === b.getAttribute("value")),
        (b.value = "t"),
        b.setAttribute("type", "radio"),
        (l.radioValue = "t" === b.value);
    })();
  var rb = /\r/g,
    sb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                  null == e
                    ? (e = "")
                    : "number" == typeof e
                      ? (e += "")
                      : n.isArray(e) &&
                      (e = n.map(e, function (a) {
                        return null == a ? "" : a + "";
                      })),
                  (b =
                    n.valHooks[this.type] ||
                    n.valHooks[this.nodeName.toLowerCase()]),
                  (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a)).replace(sb, " ");
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
              c,
              d = a.options,
              e = a.selectedIndex,
              f = "select-one" === a.type || 0 > e,
              g = f ? null : [],
              h = f ? e + 1 : d.length,
              i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                  (c.selected || i === e) &&
                  (l.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute("disabled")) &&
                  (!c.parentNode.disabled ||
                    !n.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              if (((d = e[g]), n.inArray(n.valHooks.option.get(d), f) > -1))
                try {
                  d.selected = c = !0;
                } catch (h) {
                  d.scrollHeight;
                }
              else d.selected = !1;
            return c || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) > -1)
            : void 0;
        },
      }),
        l.checkOn ||
        (n.valHooks[this].get = function (a) {
          return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
  var tb,
    ub,
    vb = n.expr.attrHandle,
    wb = /^(?:checked|selected)$/i,
    xb = l.getSetAttribute,
    yb = l.input;
  n.fn.extend({
    attr: function (a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
              ((b = b.toLowerCase()),
                (e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb))),
              void 0 !== c
                ? null === c
                  ? void n.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                    ? d
                    : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                  ? d
                  : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(G);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c)
                ? (yb && xb) || !wb.test(c)
                  ? (a[d] = !1)
                  : (a[n.camelCase("default-" + c)] = a[d] = !1)
                : n.attr(a, c, ""),
              a.removeAttribute(xb ? c : d);
      },
    }),
    (ub = {
      set: function (a, b, c) {
        return (
          b === !1
            ? n.removeAttr(a, c)
            : (yb && xb) || !wb.test(c)
              ? a.setAttribute((!xb && n.propFix[c]) || c, c)
              : (a[n.camelCase("default-" + c)] = a[c] = !0),
          c
        );
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = vb[b] || n.find.attr;
      (yb && xb) || !wb.test(b)
        ? (vb[b] = function (a, b, d) {
          var e, f;
          return (
            d ||
            ((f = vb[b]),
              (vb[b] = e),
              (e = null != c(a, b, d) ? b.toLowerCase() : null),
              (vb[b] = f)),
            e
          );
        })
        : (vb[b] = function (a, b, c) {
          return c
            ? void 0
            : a[n.camelCase("default-" + b)]
              ? b.toLowerCase()
              : null;
        });
    }),
    (yb && xb) ||
    (n.attrHooks.value = {
      set: function (a, b, c) {
        return n.nodeName(a, "input")
          ? void (a.defaultValue = b)
          : tb && tb.set(a, b, c);
      },
    }),
    xb ||
    ((tb = {
      set: function (a, b, c) {
        var d = a.getAttributeNode(c);
        return (
          d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
          (d.value = b += ""),
          "value" === c || b === a.getAttribute(c) ? b : void 0
        );
      },
    }),
      (vb.id =
        vb.name =
        vb.coords =
        function (a, b, c) {
          var d;
          return c
            ? void 0
            : (d = a.getAttributeNode(b)) && "" !== d.value
              ? d.value
              : null;
        }),
      (n.valHooks.button = {
        get: function (a, b) {
          var c = a.getAttributeNode(b);
          return c && c.specified ? c.value : void 0;
        },
        set: tb.set,
      }),
      (n.attrHooks.contenteditable = {
        set: function (a, b, c) {
          tb.set(a, "" === b ? !1 : b, c);
        },
      }),
      n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
          set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          },
        };
      })),
    l.style ||
    (n.attrHooks.style = {
      get: function (a) {
        return a.style.cssText || void 0;
      },
      set: function (a, b) {
        return (a.style.cssText = b + "");
      },
    });
  var zb = /^(?:input|select|textarea|button|object)$/i,
    Ab = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = n.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = void 0), delete this[a];
          } catch (b) { }
        })
      );
    },
  }),
    n.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && n.isXMLDoc(a)) ||
            ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = n.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : zb.test(a.nodeName) || (Ab.test(a.nodeName) && a.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: {
        for: "htmlFor",
        class: "className",
      },
    }),
    l.hrefNormalized ||
    n.each(["href", "src"], function (a, b) {
      n.propHooks[b] = {
        get: function (a) {
          return a.getAttribute(b, 4);
        },
      };
    }),
    l.optSelected ||
    (n.propHooks.selected = {
      get: function (a) {
        var b = a.parentNode;
        return (
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
          null
        );
      },
      set: function (a) {
        var b = a.parentNode;
        b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
      },
    }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    ),
    l.enctype || (n.propFix.enctype = "encoding");
  var Bb = /[\t\r\n\f]/g;

  function Cb(a) {
    return n.attr(a, "class") || "";
  }
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, Cb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = Cb(c)),
              (d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")))
          ) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = n.trim(d)), e !== h && n.attr(c, "class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, Cb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = Cb(c)),
              (d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")))
          ) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = n.trim(d)), e !== h && n.attr(c, "class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : n.isFunction(a)
          ? this.each(function (c) {
            n(this).toggleClass(a.call(this, c, Cb(this), b), b);
          })
          : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = n(this)), (f = a.match(G) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = Cb(this)), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (
          1 === c.nodeType &&
          (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1
        )
          return !0;
      return !1;
    },
  }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    });
  var Db = a.location,
    Eb = n.now(),
    Fb = /\?/,
    Gb =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = n.trim(b + "");
    return e &&
      !n.trim(
        e.replace(Gb, function (a, b, e, f) {
          return (
            c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
          );
        })
      )
      ? Function("return " + e)()
      : n.error("Invalid JSON: " + b);
  }),
    (n.parseXML = function (b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser
          ? ((d = new a.DOMParser()), (c = d.parseFromString(b, "text/xml")))
          : ((c = new a.ActiveXObject("Microsoft.XMLDOM")),
            (c.async = "false"),
            c.loadXML(b));
      } catch (e) {
        c = void 0;
      }
      return (
        (c &&
          c.documentElement &&
          !c.getElementsByTagName("parsererror").length) ||
        n.error("Invalid XML: " + b),
        c
      );
    });
  var Hb = /#.*$/,
    Ib = /([?&])_=[^&]*/,
    Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Lb = /^(?:GET|HEAD)$/,
    Mb = /^\/\//,
    Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ob = {},
    Pb = {},
    Qb = "*/".concat("*"),
    Rb = Db.href,
    Sb = Nb.exec(Rb.toLowerCase()) || [];

  function Tb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d.charAt(0)
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }

  function Ub(a, b, c, d) {
    var e = {},
      f = a === Pb;

    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }

  function Vb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a;
  }

  function Wb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }

  function Xb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
          !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
          (i = f),
          (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                  h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return {
      state: "success",
      data: b,
    };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Rb,
      type: "GET",
      isLocal: Kb.test(Sb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Qb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/,
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: {
        url: !0,
        context: !0,
      },
    },
    ajaxSetup: function (a, b) {
      return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
    },
    ajaxPrefilter: Tb(Ob),
    ajaxTransport: Tb(Pb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = n.ajaxSetup({}, c),
        m = l.context || l,
        o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
        p = n.Deferred(),
        q = n.Callbacks("once memory"),
        r = l.statusCode || {},
        s = {},
        t = {},
        u = 0,
        v = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === u) {
              if (!k) {
                k = {};
                while ((b = Jb.exec(g))) k[b[1].toLowerCase()] = b[2];
              }
              b = k[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === u ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return u || (l.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > u) for (b in a) r[b] = [r[b], a[b]];
              else w.always(a[w.status]);
            return this;
          },
          abort: function (a) {
            var b = a || v;
            return j && j.abort(b), y(0, b), this;
          },
        };
      if (
        ((p.promise(w).complete = q.add),
          (w.success = w.done),
          (w.error = w.fail),
          (l.url = ((b || l.url || Rb) + "")
            .replace(Hb, "")
            .replace(Mb, Sb[1] + "//")),
          (l.type = c.method || c.type || l.method || l.type),
          (l.dataTypes = n
            .trim(l.dataType || "*")
            .toLowerCase()
            .match(G) || [""]),
          null == l.crossDomain &&
          ((d = Nb.exec(l.url.toLowerCase())),
            (l.crossDomain = !(
              !d ||
              (d[1] === Sb[1] &&
                d[2] === Sb[2] &&
                (d[3] || ("http:" === d[1] ? "80" : "443")) ===
                (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))
            ))),
          l.data &&
          l.processData &&
          "string" != typeof l.data &&
          (l.data = n.param(l.data, l.traditional)),
          Ub(Ob, l, c, w),
          2 === u)
      )
        return w;
      (i = n.event && l.global),
        i && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (l.type = l.type.toUpperCase()),
        (l.hasContent = !Lb.test(l.type)),
        (f = l.url),
        l.hasContent ||
        (l.data &&
          ((f = l.url += (Fb.test(f) ? "&" : "?") + l.data), delete l.data),
          l.cache === !1 &&
          (l.url = Ib.test(f)
            ? f.replace(Ib, "$1_=" + Eb++)
            : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
        l.ifModified &&
        (n.lastModified[f] &&
          w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
          n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
        ((l.data && l.hasContent && l.contentType !== !1) || c.contentType) &&
        w.setRequestHeader("Content-Type", l.contentType),
        w.setRequestHeader(
          "Accept",
          l.dataTypes[0] && l.accepts[l.dataTypes[0]]
            ? l.accepts[l.dataTypes[0]] +
            ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "")
            : l.accepts["*"]
        );
      for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
        return w.abort();
      v = "abort";
      for (e in {
        success: 1,
        error: 1,
        complete: 1,
      })
        w[e](l[e]);
      if ((j = Ub(Pb, l, c, w))) {
        if (((w.readyState = 1), i && o.trigger("ajaxSend", [w, l]), 2 === u))
          return w;
        l.async &&
          l.timeout > 0 &&
          (h = a.setTimeout(function () {
            w.abort("timeout");
          }, l.timeout));
        try {
          (u = 1), j.send(s, y);
        } catch (x) {
          if (!(2 > u)) throw x;
          y(-1, x);
        }
      } else y(-1, "No Transport");

      function y(b, c, d, e) {
        var k,
          s,
          t,
          v,
          x,
          y = c;
        2 !== u &&
          ((u = 2),
            h && a.clearTimeout(h),
            (j = void 0),
            (g = e || ""),
            (w.readyState = b > 0 ? 4 : 0),
            (k = (b >= 200 && 300 > b) || 304 === b),
            d && (v = Wb(l, w, d)),
            (v = Xb(l, v, w, k)),
            k
              ? (l.ifModified &&
                ((x = w.getResponseHeader("Last-Modified")),
                  x && (n.lastModified[f] = x),
                  (x = w.getResponseHeader("etag")),
                  x && (n.etag[f] = x)),
                204 === b || "HEAD" === l.type
                  ? (y = "nocontent")
                  : 304 === b
                    ? (y = "notmodified")
                    : ((y = v.state), (s = v.data), (t = v.error), (k = !t)))
              : ((t = y), (!b && y) || ((y = "error"), 0 > b && (b = 0))),
            (w.status = b),
            (w.statusText = (c || y) + ""),
            k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
            w.statusCode(r),
            (r = void 0),
            i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
            q.fireWith(m, [w, y]),
            i &&
            (o.trigger("ajaxComplete", [w, l]),
              --n.active || n.event.trigger("ajaxStop")));
      }
      return w;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax(
            n.extend(
              {
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d,
              },
              n.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        if (n.isFunction(a))
          return this.each(function (b) {
            n(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return n.isFunction(a)
          ? this.each(function (b) {
            n(this).wrapInner(a.call(this, b));
          })
          : this.each(function () {
            var b = n(this),
              c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a);
          });
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    });

  function Yb(a) {
    return (a.style && a.style.display) || n.css(a, "display");
  }

  function Zb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;
    while (a && 1 === a.nodeType) {
      if ("none" === Yb(a) || "hidden" === a.type) return !0;
      a = a.parentNode;
    }
    return !1;
  }
  (n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets()
      ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length
      : Zb(a);
  }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var $b = /%20/g,
    _b = /\[\]$/,
    ac = /\r?\n/g,
    bc = /^(?:submit|button|image|reset|file)$/i,
    cc = /^(?:input|select|textarea|keygen)/i;

  function dc(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || _b.test(a)
          ? d(a, e)
          : dc(
            a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
            e,
            c,
            d
          );
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) dc(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) dc(c, a[c], b, e);
    return d.join("&").replace($b, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              cc.test(this.nodeName) &&
              !bc.test(a) &&
              (this.checked || !Z.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
                ? n.map(c, function (a) {
                  return {
                    name: b.name,
                    value: a.replace(ac, "\r\n"),
                  };
                })
                : {
                  name: b.name,
                  value: c.replace(ac, "\r\n"),
                };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr =
      void 0 !== a.ActiveXObject
        ? function () {
          return this.isLocal
            ? ic()
            : d.documentMode > 8
              ? hc()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                hc()) ||
              ic();
        }
        : hc);
  var ec = 0,
    fc = {},
    gc = n.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in fc) fc[a](void 0, !0);
    }),
    (l.cors = !!gc && "withCredentials" in gc),
    (gc = l.ajax = !!gc),
    gc &&
    n.ajaxTransport(function (b) {
      if (!b.crossDomain || l.cors) {
        var c;
        return {
          send: function (d, e) {
            var f,
              g = b.xhr(),
              h = ++ec;
            if (
              (g.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
            )
              for (f in b.xhrFields) g[f] = b.xhrFields[f];
            b.mimeType &&
              g.overrideMimeType &&
              g.overrideMimeType(b.mimeType),
              b.crossDomain ||
              d["X-Requested-With"] ||
              (d["X-Requested-With"] = "XMLHttpRequest");
            for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
            g.send((b.hasContent && b.data) || null),
              (c = function (a, d) {
                var f, i, j;
                if (c && (d || 4 === g.readyState))
                  if (
                    (delete fc[h],
                      (c = void 0),
                      (g.onreadystatechange = n.noop),
                      d)
                  )
                    4 !== g.readyState && g.abort();
                  else {
                    (j = {}),
                      (f = g.status),
                      "string" == typeof g.responseText &&
                      (j.text = g.responseText);
                    try {
                      i = g.statusText;
                    } catch (k) {
                      i = "";
                    }
                    f || !b.isLocal || b.crossDomain
                      ? 1223 === f && (f = 204)
                      : (f = j.text ? 200 : 404);
                  }
                j && e(f, i, j, g.getAllResponseHeaders());
              }),
              b.async
                ? 4 === g.readyState
                  ? a.setTimeout(c)
                  : (g.onreadystatechange = fc[h] = c)
                : c();
          },
          abort: function () {
            c && c(void 0, !0);
          },
        };
      }
    });

  function hc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) { }
  }

  function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) { }
  }
  n.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: {
      script: /\b(?:java|ecma)script\b/,
    },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a;
      },
    },
  }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b,
          c = d.head || n("head")[0] || d.documentElement;
        return {
          send: function (e, f) {
            (b = d.createElement("script")),
              (b.async = !0),
              a.scriptCharset && (b.charset = a.scriptCharset),
              (b.src = a.url),
              (b.onload = b.onreadystatechange =
                function (a, c) {
                  (c ||
                    !b.readyState ||
                    /loaded|complete/.test(b.readyState)) &&
                    ((b.onload = b.onreadystatechange = null),
                      b.parentNode && b.parentNode.removeChild(b),
                      (b = null),
                      c || f(200, "success"));
                }),
              c.insertBefore(b, c.firstChild);
          },
          abort: function () {
            b && b.onload(void 0, !0);
          },
        };
      }
    });
  var jc = [],
    kc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = jc.pop() || n.expando + "_" + Eb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (kc.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
            0 ===
            (b.contentType || "").indexOf(
              "application/x-www-form-urlencoded"
            ) &&
            kc.test(b.data) &&
            "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
          n.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(kc, "$1" + e))
            : b.jsonp !== !1 &&
            (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? n(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), jc.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || d);
      var e = x.exec(a),
        f = !c && [];
      return e
        ? [b.createElement(e[1])]
        : ((e = ja([a], b, f)),
          f && f.length && n(f).remove(),
          n.merge([], e.childNodes));
    });
  var lc = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && lc) return lc.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h > -1 && ((d = n.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
      n
        .ajax({
          url: a,
          type: e || "GET",
          dataType: "html",
          data: b,
        })
        .done(function (a) {
          (f = arguments),
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        })
        .always(
          c &&
          function (a, b) {
            g.each(function () {
              c.apply(this, f || [a.responseText, b, a]);
            });
          }
        ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });

  function mc(a) {
    return n.isWindow(a)
      ? a
      : 9 === a.nodeType
        ? a.defaultView || a.parentWindow
        : !1;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) &&
          n.inArray("auto", [f, i]) > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
              n.offset.setOffset(this, a, b);
            });
        var b,
          c,
          d = {
            top: 0,
            left: 0,
          },
          e = this[0],
          f = e && e.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, e)
              ? ("undefined" != typeof e.getBoundingClientRect &&
                (d = e.getBoundingClientRect()),
                (c = mc(f)),
              {
                top:
                  d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left:
                  d.left +
                  (c.pageXOffset || b.scrollLeft) -
                  (b.clientLeft || 0),
              })
              : d
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = {
              top: 0,
              left: 0,
            },
            d = this[0];
          return (
            "fixed" === n.css(d, "position")
              ? (b = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (c = a.offset()),
                (c.top += n.css(a[0], "borderTopWidth", !0)),
                (c.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - c.top - n.css(d, "marginTop", !0),
              left: b.left - c.left - n.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (
            a &&
            !n.nodeName(a, "html") &&
            "static" === n.css(a, "position")
          )
            a = a.offsetParent;
          return a || Qa;
        });
      },
    }),
    n.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
          return Y(
            this,
            function (a, d, e) {
              var f = mc(a);
              return void 0 === e
                ? f
                  ? b in f
                    ? f[b]
                    : f.document.documentElement[d]
                  : a[d]
                : void (f
                  ? f.scrollTo(
                    c ? n(f).scrollLeft() : e,
                    c ? e : n(f).scrollTop()
                  )
                  : (a[d] = e));
            },
            a,
            d,
            arguments.length,
            null
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
        return c
          ? ((c = Sa(a, b)), Oa.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each(
      {
        Height: "height",
        Width: "width",
      },
      function (a, b) {
        n.each(
          {
            padding: "inner" + a,
            content: b,
            "": "outer" + a,
          },
          function (c, d) {
            n.fn[d] = function (d, e) {
              var f = arguments.length && (c || "boolean" != typeof d),
                g = c || (d === !0 || e === !0 ? "margin" : "border");
              return Y(
                this,
                function (b, c, d) {
                  var e;
                  return n.isWindow(b)
                    ? b.document.documentElement["client" + a]
                    : 9 === b.nodeType
                      ? ((e = b.documentElement),
                        Math.max(
                          b.body["scroll" + a],
                          e["scroll" + a],
                          b.body["offset" + a],
                          e["offset" + a],
                          e["client" + a]
                        ))
                      : void 0 === d
                        ? n.css(b, c, g)
                        : n.style(b, c, d, g);
                },
                b,
                f ? d : void 0,
                f,
                null
              );
            };
          }
        );
      }
    ),
    n.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
    define.amd &&
    define("jquery", [], function () {
      return n;
    });
  var nc = a.jQuery,
    oc = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n;
    }),
    b || (a.jQuery = a.$ = n),
    n
  );
});

/*!
 * BOOTSTRAP
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (
    (b[0] < 2 && b[1] < 9) ||
    (1 == b[0] && 9 == b[1] && b[2] < 1) ||
    b[0] > 2
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3"
    );
})(jQuery),
  +(function (a) {
    "use strict";

    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b)
        if (void 0 !== a.style[c])
          return {
            end: b[c],
          };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
          (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
              return a(b.target).is(this)
                ? b.handleObj.handler.apply(this, arguments)
                : void 0;
            },
          });
      });
  })(jQuery),
  +(function (a) {
    "use strict";

    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.6"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a(f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
          (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                .one("bsTransitionEnd", c)
                .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";

    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.6"),
      (c.DEFAULTS = {
        loadingText: "loading...",
      }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                  : this.isLoading &&
                  ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
            (c.prop("checked") !== this.$element.hasClass("active") &&
              (a = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target);
            d.hasClass("btn") || (d = d.closest(".btn")),
              b.call(d, "toggle"),
              a(c.target).is('input[type="radio"]') ||
              a(c.target).is('input[type="checkbox"]') ||
              c.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";

    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
              ? e[g]()
              : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
        this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
        !("ontouchstart" in document.documentElement) &&
        this.$element
          .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
          .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.6"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0,
      }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
          !this.paused &&
          (this.interval = setInterval(
            a.proxy(this.next, this),
            this.options.interval
          )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return a > this.$items.length - 1 || 0 > a
          ? void 0
          : this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
              b.to(a);
            })
            : c == a
              ? this.pause().cycle()
              : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
          a.support.transition &&
          (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
          ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";

    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }

    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
          b.id +
          '"],[data-toggle="collapse"][data-target="#' +
          b.id +
          '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.6"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = {
        toggle: !0,
      }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
              [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
              [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                .one("bsTransitionEnd", a.proxy(e, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
            this.options.parent +
            '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";

    function b(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
          (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }

    function c(c) {
      (c && 3 === c.which) ||
        (a(e).remove(),
          a(f).each(function () {
            var d = a(this),
              e = b(d),
              f = {
                relatedTarget: this,
              };
            e.hasClass("open") &&
              ((c &&
                "click" == c.type &&
                /input|textarea/i.test(c.target.tagName) &&
                a.contains(e[0], c.target)) ||
                (e.trigger((c = a.Event("hide.bs.dropdown", f))),
                  c.isDefaultPrevented() ||
                  (d.attr("aria-expanded", "false"),
                    e
                      .removeClass("open")
                      .trigger(a.Event("hidden.bs.dropdown", f)))));
          }));
    }

    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.6"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = b(e),
            g = f.hasClass("open");
          if ((c(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", c);
            var h = {
              relatedTarget: this,
            };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
                d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this);
          if (
            (c.preventDefault(),
              c.stopPropagation(),
              !d.is(".disabled, :disabled"))
          ) {
            var e = b(d),
              g = e.hasClass("open");
            if ((!g && 27 != c.which) || (g && 27 == c.which))
              return (
                27 == c.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find(".dropdown-menu" + h);
            if (i.length) {
              var j = i.index(c.target);
              38 == c.which && j > 0 && j--,
                40 == c.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", c)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";

    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
        this.$element.find(".modal-content").load(
          this.options.remote,
          a.proxy(function () {
            this.$element.trigger("loaded.bs.modal");
          }, this)
        );
    };
    (c.VERSION = "3.3.6"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0,
      }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", {
            relatedTarget: b,
          });
        this.$element.trigger(e),
          this.isShown ||
          e.isDefaultPrevented() ||
          ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", {
                relatedTarget: b,
              });
              e
                ? d.$dialog
                  .one("bsTransitionEnd", function () {
                    d.$element.trigger("focus").trigger(f);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
          !b.isDefaultPrevented() &&
          ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
            "keydown.dismiss.bs.modal",
            a.proxy(function (a) {
              27 == a.which && this.hide();
            }, this)
          )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body)),
              this.$element.on(
                "click.dismiss.bs.modal",
                a.proxy(function (a) {
                  return this.ignoreBackdropClick
                    ? void (this.ignoreBackdropClick = !1)
                    : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
                }, this)
              ),
              f && this.$backdrop[0].offsetWidth,
              this.$backdrop.addClass("in"),
              !b)
          )
            return;
          f
            ? this.$backdrop
              .one("bsTransitionEnd", b)
              .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
              .one("bsTransitionEnd", g)
              .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({
          paddingLeft: "",
          paddingRight: "",
        });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
          this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend(
                {
                  remote: !/#/.test(e) && e,
                },
                f.data(),
                d.data()
              );
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";

    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.tooltip", (e = new c(this, f))),
            "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.6"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
          selector: "body",
          padding: 0,
        },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
            (this.type = b),
            (this.$element = a(c)),
            (this.options = this.getOptions(d)),
            (this.$viewport =
              this.options.viewport &&
              a(
                a.isFunction(this.options.viewport)
                  ? this.options.viewport.call(this, this.$element)
                  : this.options.viewport.selector || this.options.viewport
              )),
            (this.inState = {
              click: !1,
              hover: !1,
              focus: !1,
            }),
            this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
            this.type +
            " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: "",
          }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
          "number" == typeof b.delay &&
          (b.delay = {
            show: b.delay,
            hide: b.delay,
          }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
          a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d);
          }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
          ((c = new this.constructor(
            b.currentTarget,
            this.getDelegateOptions()
          )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
          (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                  "in" == c.hoverState && c.show();
                }, c.options.delay.show))
                : c.show())
        );
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
          ((c = new this.constructor(
            b.currentTarget,
            this.getDelegateOptions()
          )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
          (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          c.isInStateTrue()
            ? void 0
            : (clearTimeout(c.timeout),
              (c.hoverState = "out"),
              c.options.delay && c.options.delay.hide
                ? void (c.timeout = setTimeout(function () {
                  "out" == c.hoverState && c.hide();
                }, c.options.delay.hide))
                : c.hide())
        );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
            "function" == typeof this.options.placement
              ? this.options.placement.call(this, f[0], this.$element[0])
              : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({
                top: 0,
                left: 0,
                display: "block",
              })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport);
            (h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                  ? "bottom"
                  : "right" == h && k.right + l > o.width
                    ? "left"
                    : "left" == h && k.left - l < o.left
                      ? "right"
                      : h),
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
              .one("bsTransitionEnd", q)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left),
                  });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass("in"),
              a.support.transition && f.hasClass("fade")
                ? f
                  .one("bsTransitionEnd", d)
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = d
          ? {
            top: 0,
            left: 0,
          }
          : b.offset(),
          g = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          h = d
            ? {
              width: a(window).width(),
              height: a(window).height(),
            }
            : null;
        return a.extend({}, e, g, h, f);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2,
          }
          : "top" == a
            ? {
              top: b.top - d,
              left: b.left + b.width / 2 - c / 2,
            }
            : "left" == a
              ? {
                top: b.top + b.height / 2 - d / 2,
                left: b.left - c,
              }
              : {
                top: b.top + b.height / 2 - d / 2,
                left: b.left + b.width,
              };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {
          top: 0,
          left: 0,
        };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
            " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
            c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
              a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
              ? c.leave(c)
              : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";

    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.popover", (e = new c(this, f))),
            "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.6"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
          [
            this.options.html
              ? "string" == typeof c
                ? "html"
                : "append"
              : "text"
          ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";

    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }

    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.6"),
      (b.DEFAULTS = {
        offset: 10,
      }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
          ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--;)
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
          this.selector +
          '[data-target="' +
          b +
          '"],' +
          this.selector +
          '[href="' +
          b +
          '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";

    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.6"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
            !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", {
              relatedTarget: b[0],
            }),
            g = a.Event("show.bs.tab", {
              relatedTarget: e[0],
            });
          if (
            (e.trigger(f),
              b.trigger(g),
              !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({
                  type: "hidden.bs.tab",
                  relatedTarget: b[0],
                }),
                  b.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: e[0],
                  });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
            b
              .closest("li.dropdown")
              .addClass("active")
              .end()
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
            .one("bsTransitionEnd", f)
            .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";

    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.6"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = {
        offset: 0,
        target: window,
      }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != c
            ? e + this.unpin <= f.top
              ? !1
              : "bottom"
            : a - d >= e + g
              ? !1
              : "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && c >= e
          ? "top"
          : null != d && i + j >= a - d
            ? "bottom"
            : !1;
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h &&
            this.$element.offset({
              top: g - b - f,
            });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);

/*!
 * CONTACT
 */
jQuery(document).ready(function () {
  $("#contactform").submit(function () {
    var e = $(this).attr("action");
    return (
      $("#message").slideUp(750, function () {
        $("#message").hide(),
          $("#submit")
            .after('<img src="images/ajax-loader.gif" class="loader" />')
            .attr("disabled", "disabled"),
          $.post(
            e,
            {
              name: $("#name").val(),
              email: $("#email").val(),
              phone: $("#phone").val(),
              comments: $("#comments").val(),
              verify: $("#verify").val(),
            },
            function (e) {
              (document.getElementById("message").innerHTML = e),
                $("#message").slideDown("slow"),
                $("#contactform img.loader").fadeOut("slow", function () {
                  $(this).remove();
                }),
                $("#submit").removeAttr("disabled"),
                null != e.match("success") && $("#contactform").slideUp("slow");
            }
          );
      }),
      !1
    );
  });
});

/*!
 * ANIMATE
 */
(function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function () {
    function a() { }
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent("CustomEvent")),
              e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
              ? ((e = document.createEventObject()), (e.eventType = a))
              : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
            ? a[b]()
            : "on" + b in (null != a)
              ? a["on" + b]()
              : void 0;
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
            ? a.attachEvent("on" + b, c)
            : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
            ? a.detachEvent("on" + b, c)
            : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
            null !== console &&
            console.warn(
              "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
            );
        }
        return (a.notSupported = !0), (a.prototype.observe = function () { }), a;
      })())),
    (d =
      this.getComputedStyle ||
      function (a, b) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
              b.replace(e, function (a, b) {
                return b.toUpperCase();
              }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer &&
          (this.config.scrollContainer = document.querySelector(
            a.scrollContainer
          )),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
              (this.boxes = function () {
                var a, c, d, e;
                for (
                  d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                  c > a;
                  a++
                )
                  (b = d[a]), e.push(b);
                return e;
              }.call(this)),
              (this.all = function () {
                var a, c, d, e;
                for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                  (b = d[a]), e.push(b);
                return e;
              }.call(this)),
              this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
            (this.util().addEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                (function (a) {
                  return function (b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++)
                      (f = b[c]),
                        g.push(
                          function () {
                            var a, b, c, d;
                            for (
                              c = f.addedNodes || [],
                              d = [],
                              a = 0,
                              b = c.length;
                              b > a;
                              a++
                            )
                              (e = c[a]), d.push(this.doSync(e));
                            return d;
                          }.call(a)
                        );
                    return g;
                  };
                })(this)
              ).observe(document.body, {
                childList: !0,
                subtree: !0,
              })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function (b) {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
              e = a.querySelectorAll("." + this.config.boxClass),
              f = [],
              c = 0,
              d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
              return window.requestAnimationFrame(a);
            }
            : function (a) {
              return a();
            };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = "visible"));
          return e;
        }),
        (e.prototype.resetAnimation = function (a) {
          var b;
          return a.type.toLowerCase().indexOf("animationend") >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className
                .replace(this.config.animateClass, "")
                .trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c &&
            this.vendorSet(a.style, {
              animationDuration: c,
            }),
            d &&
            this.vendorSet(a.style, {
              animationDelay: d,
            }),
            e &&
            this.vendorSet(a.style, {
              animationIterationCount: e,
            }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a["" + c] = e),
              d.push(
                function () {
                  var b, d, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, d = g.length;
                    d > b;
                    b++
                  )
                    (f = g[b]),
                      h.push(
                        (a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                          e)
                      );
                  return h;
                }.call(this)
              );
          return d;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (
            h = d(a),
            g = h.getPropertyCSSValue(b),
            f = this.vendors,
            c = 0,
            e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
          return g;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
              (this.boxes = function () {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                  (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e;
              }.call(this)),
              this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop;) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent);) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}).call(this);

var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: false, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window
});
wow.init();

/*!
 * PORTFOLIO
 */
!(function (t, i, s) {
  "use strict";
  var e,
    n = t.document,
    o = t.Modernizr,
    r = function (t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    },
    a = "Moz Webkit O Ms".split(" "),
    h = function (t) {
      var i,
        s = n.documentElement.style;
      if ("string" == typeof s[t]) return t;
      t = r(t);
      for (var e = 0, o = a.length; o > e; e++)
        if (((i = a[e] + t), "string" == typeof s[i])) return i;
    },
    l = h("transform"),
    u = h("transitionProperty"),
    c = {
      csstransforms: function () {
        return !!l;
      },
      csstransforms3d: function () {
        var t = !!h("perspective");
        if (t) {
          var s = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
            e = "@media (" + s.join("transform-3d),(") + "modernizr)",
            n = i("<style>" + e + "{#modernizr{height:3px}}</style>").appendTo(
              "head"
            ),
            o = i('<div id="modernizr" />').appendTo("html");
          (t = 3 === o.height()), o.remove(), n.remove();
        }
        return t;
      },
      csstransitions: function () {
        return !!u;
      },
    };
  if (o) for (e in c) o.hasOwnProperty(e) || o.addTest(e, c[e]);
  else {
    o = t.Modernizr = {
      _version: "1.6ish: miniModernizr for Isotope",
    };
    var d,
      f = " ";
    for (e in c) (d = c[e]()), (o[e] = d), (f += " " + (d ? "" : "no-") + e);
    i("html").addClass(f);
  }
  if (o.csstransforms) {
    var m = o.csstransforms3d
      ? {
        translate: function (t) {
          return "translate3d(" + t[0] + "px, " + t[1] + "px, 0) ";
        },
        scale: function (t) {
          return "scale3d(" + t + ", " + t + ", 1) ";
        },
      }
      : {
        translate: function (t) {
          return "translate(" + t[0] + "px, " + t[1] + "px) ";
        },
        scale: function (t) {
          return "scale(" + t + ") ";
        },
      },
      p = function (t, s, e) {
        var n,
          o,
          r = i.data(t, "isoTransform") || {},
          a = {},
          h = {};
        (a[s] = e), i.extend(r, a);
        for (n in r) (o = r[n]), (h[n] = m[n](o));
        var u = h.translate || "",
          c = h.scale || "",
          d = u + c;
        i.data(t, "isoTransform", r), (t.style[l] = d);
      };
    (i.cssNumber.scale = !0),
      (i.cssHooks.scale = {
        set: function (t, i) {
          p(t, "scale", i);
        },
        get: function (t, s) {
          var e = i.data(t, "isoTransform");
          return e && e.scale ? e.scale : 1;
        },
      }),
      (i.fx.step.scale = function (t) {
        i.cssHooks.scale.set(t.elem, t.now + t.unit);
      }),
      (i.cssNumber.translate = !0),
      (i.cssHooks.translate = {
        set: function (t, i) {
          p(t, "translate", i);
        },
        get: function (t, s) {
          var e = i.data(t, "isoTransform");
          return e && e.translate ? e.translate : [0, 0];
        },
      });
  }
  var y, g;
  o.csstransitions &&
    ((y = {
      WebkitTransitionProperty: "webkitTransitionEnd",
      MozTransitionProperty: "transitionend",
      OTransitionProperty: "oTransitionEnd otransitionend",
      transitionProperty: "transitionend",
    }[u]),
      (g = h("transitionDuration")));
  var v,
    _ = i.event,
    A = i.event.handle ? "handle" : "dispatch";
  (_.special.smartresize = {
    setup: function () {
      i(this).bind("resize", _.special.smartresize.handler);
    },
    teardown: function () {
      i(this).unbind("resize", _.special.smartresize.handler);
    },
    handler: function (t, i) {
      var s = this,
        e = arguments;
      (t.type = "smartresize"),
        v && clearTimeout(v),
        (v = setTimeout(
          function () {
            _[A].apply(s, e);
          },
          "execAsap" === i ? 0 : 100
        ));
    },
  }),
    (i.fn.smartresize = function (t) {
      return t
        ? this.bind("smartresize", t)
        : this.trigger("smartresize", ["execAsap"]);
    }),
    (i.Isotope = function (t, s, e) {
      (this.element = i(s)), this._create(t), this._init(e);
    });
  var w = ["width", "height"],
    C = i(t);
  (i.Isotope.settings = {
    resizable: !0,
    layoutMode: "masonry",
    containerClass: "isotope",
    itemClass: "isotope-item",
    hiddenClass: "isotope-hidden",
    hiddenStyle: {
      opacity: 0,
      scale: 0.001,
    },
    visibleStyle: {
      opacity: 1,
      scale: 1,
    },
    containerStyle: {
      position: "relative",
      overflow: "hidden",
    },
    animationEngine: "best-available",
    animationOptions: {
      queue: !1,
      duration: 800,
    },
    sortBy: "original-order",
    sortAscending: !0,
    resizesContainer: !0,
    transformsEnabled: !0,
    itemPositionDataEnabled: !1,
  }),
    (i.Isotope.prototype = {
      _create: function (t) {
        (this.options = i.extend({}, i.Isotope.settings, t)),
          (this.styleQueue = []),
          (this.elemCount = 0);
        var s = this.element[0].style;
        this.originalStyle = {};
        var e = w.slice(0);
        for (var n in this.options.containerStyle) e.push(n);
        for (var o = 0, r = e.length; r > o; o++)
          (n = e[o]), (this.originalStyle[n] = s[n] || "");
        this.element.css(this.options.containerStyle),
          this._updateAnimationEngine(),
          this._updateUsingTransforms();
        var a = {
          "original-order": function (t, i) {
            return i.elemCount++, i.elemCount;
          },
          random: function () {
            return Math.random();
          },
        };
        (this.options.getSortData = i.extend(this.options.getSortData, a)),
          this.reloadItems(),
          (this.offset = {
            left: parseInt(this.element.css("padding-left") || 0, 10),
            top: parseInt(this.element.css("padding-top") || 0, 10),
          });
        var h = this;
        setTimeout(function () {
          h.element.addClass(h.options.containerClass);
        }, 0),
          this.options.resizable &&
          C.bind("smartresize.isotope", function () {
            h.resize();
          }),
          this.element.delegate(
            "." + this.options.hiddenClass,
            "click",
            function () {
              return !1;
            }
          );
      },
      _getAtoms: function (t) {
        var i = this.options.itemSelector,
          s = i ? t.filter(i).add(t.find(i)) : t,
          e = {
            position: "absolute",
          };
        return (
          (s = s.filter(function (t, i) {
            return 1 === i.nodeType;
          })),
          this.usingTransforms && ((e.left = 0), (e.top = 0)),
          s.css(e).addClass(this.options.itemClass),
          this.updateSortData(s, !0),
          s
        );
      },
      _init: function (t) {
        (this.$filteredAtoms = this._filter(this.$allAtoms)),
          this._sort(),
          this.reLayout(t);
      },
      option: function (t) {
        if (i.isPlainObject(t)) {
          this.options = i.extend(!0, this.options, t);
          var s;
          for (var e in t) (s = "_update" + r(e)), this[s] && this[s]();
        }
      },
      _updateAnimationEngine: function () {
        var t,
          i = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
        switch (i) {
          case "css":
          case "none":
            t = !1;
            break;
          case "jquery":
            t = !0;
            break;
          default:
            t = !o.csstransitions;
        }
        (this.isUsingJQueryAnimation = t), this._updateUsingTransforms();
      },
      _updateTransformsEnabled: function () {
        this._updateUsingTransforms();
      },
      _updateUsingTransforms: function () {
        var t = (this.usingTransforms =
          this.options.transformsEnabled &&
          o.csstransforms &&
          o.csstransitions &&
          !this.isUsingJQueryAnimation);
        t ||
          (delete this.options.hiddenStyle.scale,
            delete this.options.visibleStyle.scale),
          (this.getPositionStyles = t ? this._translate : this._positionAbs);
      },
      _filter: function (t) {
        var i = "" === this.options.filter ? "*" : this.options.filter;
        if (!i) return t;
        var s = this.options.hiddenClass,
          e = "." + s,
          n = t.filter(e),
          o = n;
        if ("*" !== i) {
          o = n.filter(i);
          var r = t.not(e).not(i).addClass(s);
          this.styleQueue.push({
            $el: r,
            style: this.options.hiddenStyle,
          });
        }
        return (
          this.styleQueue.push({
            $el: o,
            style: this.options.visibleStyle,
          }),
          o.removeClass(s),
          t.filter(i)
        );
      },
      updateSortData: function (t, s) {
        var e,
          n,
          o = this,
          r = this.options.getSortData;
        t.each(function () {
          (e = i(this)), (n = {});
          for (var t in r)
            s || "original-order" !== t
              ? (n[t] = r[t](e, o))
              : (n[t] = i.data(this, "isotope-sort-data")[t]);
          i.data(this, "isotope-sort-data", n);
        });
      },
      _sort: function () {
        var t = this.options.sortBy,
          i = this._getSorter,
          s = this.options.sortAscending ? 1 : -1,
          e = function (e, n) {
            var o = i(e, t),
              r = i(n, t);
            return (
              o === r &&
              "original-order" !== t &&
              ((o = i(e, "original-order")), (r = i(n, "original-order"))),
              (o > r ? 1 : r > o ? -1 : 0) * s
            );
          };
        this.$filteredAtoms.sort(e);
      },
      _getSorter: function (t, s) {
        return i.data(t, "isotope-sort-data")[s];
      },
      _translate: function (t, i) {
        return {
          translate: [t, i],
        };
      },
      _positionAbs: function (t, i) {
        return {
          left: t,
          top: i,
        };
      },
      _pushPosition: function (t, i, s) {
        (i = Math.round(i + this.offset.left)),
          (s = Math.round(s + this.offset.top));
        var e = this.getPositionStyles(i, s);
        this.styleQueue.push({
          $el: t,
          style: e,
        }),
          this.options.itemPositionDataEnabled &&
          t.data("isotope-item-position", {
            x: i,
            y: s,
          });
      },
      layout: function (t, i) {
        var s = this.options.layoutMode;
        if ((this["_" + s + "Layout"](t), this.options.resizesContainer)) {
          var e = this["_" + s + "GetContainerSize"]();
          this.styleQueue.push({
            $el: this.element,
            style: e,
          });
        }
        this._processStyleQueue(t, i), (this.isLaidOut = !0);
      },
      _processStyleQueue: function (t, s) {
        var e,
          n,
          r,
          a,
          h = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css",
          l = this.options.animationOptions,
          u = this.options.onLayout;
        if (
          ((n = function (t, i) {
            i.$el[h](i.style, l);
          }),
            this._isInserting && this.isUsingJQueryAnimation)
        )
          n = function (t, i) {
            (e = i.$el.hasClass("no-transition") ? "css" : h),
              i.$el[e](i.style, l);
          };
        else if (s || u || l.complete) {
          var c = !1,
            d = [s, u, l.complete],
            f = this;
          if (
            ((r = !0),
              (a = function () {
                if (!c) {
                  for (var i, s = 0, e = d.length; e > s; s++)
                    (i = d[s]), "function" == typeof i && i.call(f.element, t, f);
                  c = !0;
                }
              }),
              this.isUsingJQueryAnimation && "animate" === h)
          )
            (l.complete = a), (r = !1);
          else if (o.csstransitions) {
            for (
              var m, p = 0, v = this.styleQueue[0], _ = v && v.$el;
              !_ || !_.length;

            ) {
              if (((m = this.styleQueue[p++]), !m)) return;
              _ = m.$el;
            }
            var A = parseFloat(getComputedStyle(_[0])[g]);
            A > 0 &&
              ((n = function (t, i) {
                i.$el[h](i.style, l).one(y, a);
              }),
                (r = !1));
          }
        }
        i.each(this.styleQueue, n), r && a(), (this.styleQueue = []);
      },
      resize: function () {
        this["_" + this.options.layoutMode + "ResizeChanged"]() &&
          this.reLayout();
      },
      reLayout: function (t) {
        this["_" + this.options.layoutMode + "Reset"](),
          this.layout(this.$filteredAtoms, t);
      },
      addItems: function (t, i) {
        var s = this._getAtoms(t);
        (this.$allAtoms = this.$allAtoms.add(s)), i && i(s);
      },
      insert: function (t, i) {
        this.element.append(t);
        var s = this;
        this.addItems(t, function (t) {
          var e = s._filter(t);
          s._addHideAppended(e),
            s._sort(),
            s.reLayout(),
            s._revealAppended(e, i);
        });
      },
      appended: function (t, i) {
        var s = this;
        this.addItems(t, function (t) {
          s._addHideAppended(t), s.layout(t), s._revealAppended(t, i);
        });
      },
      _addHideAppended: function (t) {
        (this.$filteredAtoms = this.$filteredAtoms.add(t)),
          t.addClass("no-transition"),
          (this._isInserting = !0),
          this.styleQueue.push({
            $el: t,
            style: this.options.hiddenStyle,
          });
      },
      _revealAppended: function (t, i) {
        var s = this;
        setTimeout(function () {
          t.removeClass("no-transition"),
            s.styleQueue.push({
              $el: t,
              style: s.options.visibleStyle,
            }),
            (s._isInserting = !1),
            s._processStyleQueue(t, i);
        }, 10);
      },
      reloadItems: function () {
        this.$allAtoms = this._getAtoms(this.element.children());
      },
      remove: function (t, i) {
        (this.$allAtoms = this.$allAtoms.not(t)),
          (this.$filteredAtoms = this.$filteredAtoms.not(t));
        var s = this,
          e = function () {
            t.remove(), i && i.call(s.element);
          };
        t.filter(":not(." + this.options.hiddenClass + ")").length
          ? (this.styleQueue.push({
            $el: t,
            style: this.options.hiddenStyle,
          }),
            this._sort(),
            this.reLayout(e))
          : e();
      },
      shuffle: function (t) {
        this.updateSortData(this.$allAtoms),
          (this.options.sortBy = "random"),
          this._sort(),
          this.reLayout(t);
      },
      destroy: function () {
        var t = this.usingTransforms,
          i = this.options;
        this.$allAtoms
          .removeClass(i.hiddenClass + " " + i.itemClass)
          .each(function () {
            var i = this.style;
            (i.position = ""),
              (i.top = ""),
              (i.left = ""),
              (i.opacity = ""),
              t && (i[l] = "");
          });
        var s = this.element[0].style;
        for (var e in this.originalStyle) s[e] = this.originalStyle[e];
        this.element
          .unbind(".isotope")
          .undelegate("." + i.hiddenClass, "click")
          .removeClass(i.containerClass)
          .removeData("isotope"),
          C.unbind(".isotope");
      },
      _getSegments: function (t) {
        var i,
          s = this.options.layoutMode,
          e = t ? "rowHeight" : "columnWidth",
          n = t ? "height" : "width",
          o = t ? "rows" : "cols",
          a = this.element[n](),
          h =
            (this.options[s] && this.options[s][e]) ||
            this.$filteredAtoms["outer" + r(n)](!0) ||
            a;
        (i = Math.floor(a / h)),
          (i = Math.max(i, 1)),
          (this[s][o] = i),
          (this[s][e] = h);
      },
      _checkIfSegmentsChanged: function (t) {
        var i = this.options.layoutMode,
          s = t ? "rows" : "cols",
          e = this[i][s];
        return this._getSegments(t), this[i][s] !== e;
      },
      _masonryReset: function () {
        (this.masonry = {}), this._getSegments();
        var t = this.masonry.cols;
        for (this.masonry.colYs = []; t--;) this.masonry.colYs.push(0);
      },
      _masonryLayout: function (t) {
        var s = this,
          e = s.masonry;
        t.each(function () {
          var t = i(this),
            n = Math.ceil(t.outerWidth(!0) / e.columnWidth);
          if (((n = Math.min(n, e.cols)), 1 === n))
            s._masonryPlaceBrick(t, e.colYs);
          else {
            var o,
              r,
              a = e.cols + 1 - n,
              h = [];
            for (r = 0; a > r; r++)
              (o = e.colYs.slice(r, r + n)), (h[r] = Math.max.apply(Math, o));
            s._masonryPlaceBrick(t, h);
          }
        });
      },
      _masonryPlaceBrick: function (t, i) {
        for (
          var s = Math.min.apply(Math, i), e = 0, n = 0, o = i.length;
          o > n;
          n++
        )
          if (i[n] === s) {
            e = n;
            break;
          }
        var r = this.masonry.columnWidth * e,
          a = s;
        this._pushPosition(t, r, a);
        var h = s + t.outerHeight(!0),
          l = this.masonry.cols + 1 - o;
        for (n = 0; l > n; n++) this.masonry.colYs[e + n] = h;
      },
      _masonryGetContainerSize: function () {
        var t = Math.max.apply(Math, this.masonry.colYs);
        return {
          height: t,
        };
      },
      _masonryResizeChanged: function () {
        return this._checkIfSegmentsChanged();
      },
      _fitRowsReset: function () {
        this.fitRows = {
          x: 0,
          y: 0,
          height: 0,
        };
      },
      _fitRowsLayout: function (t) {
        var s = this,
          e = this.element.width(),
          n = this.fitRows;
        t.each(function () {
          var t = i(this),
            o = t.outerWidth(!0),
            r = t.outerHeight(!0);
          0 !== n.x && o + n.x > e && ((n.x = 0), (n.y = n.height)),
            s._pushPosition(t, n.x, n.y),
            (n.height = Math.max(n.y + r, n.height)),
            (n.x += o);
        });
      },
      _fitRowsGetContainerSize: function () {
        return {
          height: this.fitRows.height,
        };
      },
      _fitRowsResizeChanged: function () {
        return !0;
      },
      _cellsByRowReset: function () {
        (this.cellsByRow = {
          index: 0,
        }),
          this._getSegments(),
          this._getSegments(!0);
      },
      _cellsByRowLayout: function (t) {
        var s = this,
          e = this.cellsByRow;
        t.each(function () {
          var t = i(this),
            n = e.index % e.cols,
            o = Math.floor(e.index / e.cols),
            r = (n + 0.5) * e.columnWidth - t.outerWidth(!0) / 2,
            a = (o + 0.5) * e.rowHeight - t.outerHeight(!0) / 2;
          s._pushPosition(t, r, a), e.index++;
        });
      },
      _cellsByRowGetContainerSize: function () {
        return {
          height:
            Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) *
            this.cellsByRow.rowHeight +
            this.offset.top,
        };
      },
      _cellsByRowResizeChanged: function () {
        return this._checkIfSegmentsChanged();
      },
      _straightDownReset: function () {
        this.straightDown = {
          y: 0,
        };
      },
      _straightDownLayout: function (t) {
        var s = this;
        t.each(function (t) {
          var e = i(this);
          s._pushPosition(e, 0, s.straightDown.y),
            (s.straightDown.y += e.outerHeight(!0));
        });
      },
      _straightDownGetContainerSize: function () {
        return {
          height: this.straightDown.y,
        };
      },
      _straightDownResizeChanged: function () {
        return !0;
      },
      _masonryHorizontalReset: function () {
        (this.masonryHorizontal = {}), this._getSegments(!0);
        var t = this.masonryHorizontal.rows;
        for (this.masonryHorizontal.rowXs = []; t--;)
          this.masonryHorizontal.rowXs.push(0);
      },
      _masonryHorizontalLayout: function (t) {
        var s = this,
          e = s.masonryHorizontal;
        t.each(function () {
          var t = i(this),
            n = Math.ceil(t.outerHeight(!0) / e.rowHeight);
          if (((n = Math.min(n, e.rows)), 1 === n))
            s._masonryHorizontalPlaceBrick(t, e.rowXs);
          else {
            var o,
              r,
              a = e.rows + 1 - n,
              h = [];
            for (r = 0; a > r; r++)
              (o = e.rowXs.slice(r, r + n)), (h[r] = Math.max.apply(Math, o));
            s._masonryHorizontalPlaceBrick(t, h);
          }
        });
      },
      _masonryHorizontalPlaceBrick: function (t, i) {
        for (
          var s = Math.min.apply(Math, i), e = 0, n = 0, o = i.length;
          o > n;
          n++
        )
          if (i[n] === s) {
            e = n;
            break;
          }
        var r = s,
          a = this.masonryHorizontal.rowHeight * e;
        this._pushPosition(t, r, a);
        var h = s + t.outerWidth(!0),
          l = this.masonryHorizontal.rows + 1 - o;
        for (n = 0; l > n; n++) this.masonryHorizontal.rowXs[e + n] = h;
      },
      _masonryHorizontalGetContainerSize: function () {
        var t = Math.max.apply(Math, this.masonryHorizontal.rowXs);
        return {
          width: t,
        };
      },
      _masonryHorizontalResizeChanged: function () {
        return this._checkIfSegmentsChanged(!0);
      },
      _fitColumnsReset: function () {
        this.fitColumns = {
          x: 0,
          y: 0,
          width: 0,
        };
      },
      _fitColumnsLayout: function (t) {
        var s = this,
          e = this.element.height(),
          n = this.fitColumns;
        t.each(function () {
          var t = i(this),
            o = t.outerWidth(!0),
            r = t.outerHeight(!0);
          0 !== n.y && r + n.y > e && ((n.x = n.width), (n.y = 0)),
            s._pushPosition(t, n.x, n.y),
            (n.width = Math.max(n.x + o, n.width)),
            (n.y += r);
        });
      },
      _fitColumnsGetContainerSize: function () {
        return {
          width: this.fitColumns.width,
        };
      },
      _fitColumnsResizeChanged: function () {
        return !0;
      },
      _cellsByColumnReset: function () {
        (this.cellsByColumn = {
          index: 0,
        }),
          this._getSegments(),
          this._getSegments(!0);
      },
      _cellsByColumnLayout: function (t) {
        var s = this,
          e = this.cellsByColumn;
        t.each(function () {
          var t = i(this),
            n = Math.floor(e.index / e.rows),
            o = e.index % e.rows,
            r = (n + 0.5) * e.columnWidth - t.outerWidth(!0) / 2,
            a = (o + 0.5) * e.rowHeight - t.outerHeight(!0) / 2;
          s._pushPosition(t, r, a), e.index++;
        });
      },
      _cellsByColumnGetContainerSize: function () {
        return {
          width:
            Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) *
            this.cellsByColumn.columnWidth,
        };
      },
      _cellsByColumnResizeChanged: function () {
        return this._checkIfSegmentsChanged(!0);
      },
      _straightAcrossReset: function () {
        this.straightAcross = {
          x: 0,
        };
      },
      _straightAcrossLayout: function (t) {
        var s = this;
        t.each(function (t) {
          var e = i(this);
          s._pushPosition(e, s.straightAcross.x, 0),
            (s.straightAcross.x += e.outerWidth(!0));
        });
      },
      _straightAcrossGetContainerSize: function () {
        return {
          width: this.straightAcross.x,
        };
      },
      _straightAcrossResizeChanged: function () {
        return !0;
      },
    }),
    (i.fn.imagesLoaded = function (t) {
      function s() {
        t.call(n, o);
      }

      function e(t) {
        var n = t.target;
        n.src !== a &&
          -1 === i.inArray(n, h) &&
          (h.push(n),
            --r <= 0 && (setTimeout(s), o.unbind(".imagesLoaded", e)));
      }
      var n = this,
        o = n.find("img").add(n.filter("img")),
        r = o.length,
        a =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
        h = [];
      return (
        r || s(),
        o.bind("load.imagesLoaded error.imagesLoaded", e).each(function () {
          var t = this.src;
          (this.src = a), (this.src = t);
        }),
        n
      );
    });
  var z = function (i) {
    t.console && t.console.error(i);
  };
  i.fn.isotope = function (t, s) {
    if ("string" == typeof t) {
      var e = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        var s = i.data(this, "isotope");
        return s
          ? i.isFunction(s[t]) && "_" !== t.charAt(0)
            ? void s[t].apply(s, e)
            : void z("no such method '" + t + "' for isotope instance")
          : void z(
            "cannot call methods on isotope prior to initialization; attempted to call method '" +
            t +
            "'"
          );
      });
    } else
      this.each(function () {
        var e = i.data(this, "isotope");
        e
          ? (e.option(t), e._init(s))
          : i.data(this, "isotope", new i.Isotope(t, this, s));
      });
    return this;
  };
})(window, jQuery);

/*!
 * IMAGESLOAD PORTFOLIO
 */
(function () {
  function e() { }

  function t(e, t) {
    for (var n = e.length; n--;) if (e[n].listener === t) return n;
    return -1;
  }

  function n(e) {
    return function () {
      return this[e].apply(this, arguments);
    };
  }
  var i = e.prototype,
    r = this,
    o = r.EventEmitter;
  (i.getListeners = function (e) {
    var t,
      n,
      i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
    } else t = i[e] || (i[e] = []);
    return t;
  }),
    (i.flattenListeners = function (e) {
      var t,
        n = [];
      for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
      return n;
    }),
    (i.getListenersAsObject = function (e) {
      var t,
        n = this.getListeners(e);
      return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
    }),
    (i.addListener = function (e, n) {
      var i,
        r = this.getListenersAsObject(e),
        o = "object" == typeof n;
      for (i in r)
        r.hasOwnProperty(i) &&
          -1 === t(r[i], n) &&
          r[i].push(
            o
              ? n
              : {
                listener: n,
                once: !1,
              }
          );
      return this;
    }),
    (i.on = n("addListener")),
    (i.addOnceListener = function (e, t) {
      return this.addListener(e, {
        listener: t,
        once: !0,
      });
    }),
    (i.once = n("addOnceListener")),
    (i.defineEvent = function (e) {
      return this.getListeners(e), this;
    }),
    (i.defineEvents = function (e) {
      for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
      return this;
    }),
    (i.removeListener = function (e, n) {
      var i,
        r,
        o = this.getListenersAsObject(e);
      for (r in o)
        o.hasOwnProperty(r) &&
          ((i = t(o[r], n)), -1 !== i && o[r].splice(i, 1));
      return this;
    }),
    (i.off = n("removeListener")),
    (i.addListeners = function (e, t) {
      return this.manipulateListeners(!1, e, t);
    }),
    (i.removeListeners = function (e, t) {
      return this.manipulateListeners(!0, e, t);
    }),
    (i.manipulateListeners = function (e, t, n) {
      var i,
        r,
        o = e ? this.removeListener : this.addListener,
        s = e ? this.removeListeners : this.addListeners;
      if ("object" != typeof t || t instanceof RegExp)
        for (i = n.length; i--;) o.call(this, t, n[i]);
      else
        for (i in t)
          t.hasOwnProperty(i) &&
            (r = t[i]) &&
            ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
      return this;
    }),
    (i.removeEvent = function (e) {
      var t,
        n = typeof e,
        i = this._getEvents();
      if ("string" === n) delete i[e];
      else if ("object" === n)
        for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
      else delete this._events;
      return this;
    }),
    (i.removeAllListeners = n("removeEvent")),
    (i.emitEvent = function (e, t) {
      var n,
        i,
        r,
        o,
        s = this.getListenersAsObject(e);
      for (r in s)
        if (s.hasOwnProperty(r))
          for (i = s[r].length; i--;)
            (n = s[r][i]),
              n.once === !0 && this.removeListener(e, n.listener),
              (o = n.listener.apply(this, t || [])),
              o === this._getOnceReturnValue() &&
              this.removeListener(e, n.listener);
      return this;
    }),
    (i.trigger = n("emitEvent")),
    (i.emit = function (e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(e, t);
    }),
    (i.setOnceReturnValue = function (e) {
      return (this._onceReturnValue = e), this;
    }),
    (i._getOnceReturnValue = function () {
      return this.hasOwnProperty("_onceReturnValue")
        ? this._onceReturnValue
        : !0;
    }),
    (i._getEvents = function () {
      return this._events || (this._events = {});
    }),
    (e.noConflict = function () {
      return (r.EventEmitter = o), e;
    }),
    "function" == typeof define && define.amd
      ? define("eventEmitter/EventEmitter", [], function () {
        return e;
      })
      : "object" == typeof module && module.exports
        ? (module.exports = e)
        : (this.EventEmitter = e);
}).call(this),
  (function (e) {
    function t(t) {
      var n = e.event;
      return (n.target = n.target || n.srcElement || t), n;
    }
    var n = document.documentElement,
      i = function () { };
    n.addEventListener
      ? (i = function (e, t, n) {
        e.addEventListener(t, n, !1);
      })
      : n.attachEvent &&
      (i = function (e, n, i) {
        (e[n + i] = i.handleEvent
          ? function () {
            var n = t(e);
            i.handleEvent.call(i, n);
          }
          : function () {
            var n = t(e);
            i.call(e, n);
          }),
          e.attachEvent("on" + n, e[n + i]);
      });
    var r = function () { };
    n.removeEventListener
      ? (r = function (e, t, n) {
        e.removeEventListener(t, n, !1);
      })
      : n.detachEvent &&
      (r = function (e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
          delete e[t + n];
        } catch (i) {
          e[t + n] = void 0;
        }
      });
    var o = {
      bind: i,
      unbind: r,
    };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", o)
      : (e.eventie = o);
  })(this),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(
        ["eventEmitter/EventEmitter", "eventie/eventie"],
        function (n, i) {
          return t(e, n, i);
        }
      )
      : "object" == typeof exports ||
      (e.imagesLoaded = t(e, e.EventEmitter, e.eventie));
  })(window, function (e, t, n) {
    function i(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }

    function r(e) {
      return "[object Array]" === d.call(e);
    }

    function o(e) {
      var t = [];
      if (r(e)) t = e;
      else if ("number" == typeof e.length)
        for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
      else t.push(e);
      return t;
    }

    function s(e, t, n) {
      if (!(this instanceof s)) return new s(e, t);
      "string" == typeof e && (e = document.querySelectorAll(e)),
        (this.elements = o(e)),
        (this.options = i({}, this.options)),
        "function" == typeof t ? (n = t) : i(this.options, t),
        n && this.on("always", n),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred());
      var r = this;
      setTimeout(function () {
        r.check();
      });
    }

    function f(e) {
      this.img = e;
    }

    function c(e) {
      (this.src = e), (v[e] = this);
    }
    var a = e.jQuery,
      h = e.console,
      u = "undefined" != typeof h,
      d = Object.prototype.toString;
    (s.prototype = new t()),
      (s.prototype.options = {}),
      (s.prototype.getImages = function () {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
          var n = this.elements[e];
          "IMG" === n.nodeName && this.addImage(n);
          var i = n.nodeType;
          if (i && (1 === i || 9 === i || 11 === i))
            for (
              var r = n.querySelectorAll("img"), o = 0, s = r.length;
              s > o;
              o++
            ) {
              var f = r[o];
              this.addImage(f);
            }
        }
      }),
      (s.prototype.addImage = function (e) {
        var t = new f(e);
        this.images.push(t);
      }),
      (s.prototype.check = function () {
        function e(e, r) {
          return (
            t.options.debug && u && h.log("confirm", e, r),
            t.progress(e),
            n++,
            n === i && t.complete(),
            !0
          );
        }
        var t = this,
          n = 0,
          i = this.images.length;
        if (((this.hasAnyBroken = !1), !i)) return void this.complete();
        for (var r = 0; i > r; r++) {
          var o = this.images[r];
          o.on("confirm", e), o.check();
        }
      }),
      (s.prototype.progress = function (e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function () {
          t.emit("progress", t, e),
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
        });
      }),
      (s.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function () {
          if ((t.emit(e, t), t.emit("always", t), t.jqDeferred)) {
            var n = t.hasAnyBroken ? "reject" : "resolve";
            t.jqDeferred[n](t);
          }
        });
      }),
      a &&
      (a.fn.imagesLoaded = function (e, t) {
        var n = new s(this, e, t);
        return n.jqDeferred.promise(a(this));
      }),
      (f.prototype = new t()),
      (f.prototype.check = function () {
        var e = v[this.img.src] || new c(this.img.src);
        if (e.isConfirmed)
          return void this.confirm(e.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth)
          return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var t = this;
        e.on("confirm", function (e, n) {
          return t.confirm(e.isLoaded, n), !0;
        }),
          e.check();
      }),
      (f.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emit("confirm", this, t);
      });
    var v = {};
    return (
      (c.prototype = new t()),
      (c.prototype.check = function () {
        if (!this.isChecked) {
          var e = new Image();
          n.bind(e, "load", this),
            n.bind(e, "error", this),
            (e.src = this.src),
            (this.isChecked = !0);
        }
      }),
      (c.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (c.prototype.onload = function (e) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(e);
      }),
      (c.prototype.onerror = function (e) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(e);
      }),
      (c.prototype.confirm = function (e, t) {
        (this.isConfirmed = !0),
          (this.isLoaded = e),
          this.emit("confirm", this, t);
      }),
      (c.prototype.unbindProxyEvents = function (e) {
        n.unbind(e.target, "load", this), n.unbind(e.target, "error", this);
      }),
      s
    );
  });

/*!
 * DEVICE JS
 */
(function () {
  var e, i, n, o, d, t, c, r, a;
  (window.device = {}),
    (i = window.document.documentElement),
    (a = window.navigator.userAgent.toLowerCase()),
    (device.ios = function () {
      return device.iphone() || device.ipod() || device.ipad();
    }),
    (device.iphone = function () {
      return n("iphone");
    }),
    (device.ipod = function () {
      return n("ipod");
    }),
    (device.ipad = function () {
      return n("ipad");
    }),
    (device.android = function () {
      return n("android");
    }),
    (device.androidPhone = function () {
      return device.android() && n("mobile");
    }),
    (device.androidTablet = function () {
      return device.android() && !n("mobile");
    }),
    (device.blackberry = function () {
      return n("blackberry") || n("bb10") || n("rim");
    }),
    (device.blackberryPhone = function () {
      return device.blackberry() && !n("tablet");
    }),
    (device.blackberryTablet = function () {
      return device.blackberry() && n("tablet");
    }),
    (device.windows = function () {
      return n("windows");
    }),
    (device.windowsPhone = function () {
      return device.windows() && n("phone");
    }),
    (device.windowsTablet = function () {
      return device.windows() && n("touch");
    }),
    (device.fxos = function () {
      return n("(mobile; rv:") || n("(tablet; rv:");
    }),
    (device.fxosPhone = function () {
      return device.fxos() && n("mobile");
    }),
    (device.fxosTablet = function () {
      return device.fxos() && n("tablet");
    }),
    (device.mobile = function () {
      return (
        device.androidPhone() ||
        device.iphone() ||
        device.ipod() ||
        device.windowsPhone() ||
        device.blackberryPhone() ||
        device.fxosPhone()
      );
    }),
    (device.tablet = function () {
      return (
        device.ipad() ||
        device.androidTablet() ||
        device.blackberryTablet() ||
        device.windowsTablet() ||
        device.fxosTablet()
      );
    }),
    (device.portrait = function () {
      return 90 !== Math.abs(window.orientation);
    }),
    (device.landscape = function () {
      return 90 === Math.abs(window.orientation);
    }),
    (n = function (e) {
      return -1 !== a.indexOf(e);
    }),
    (d = function (e) {
      var n;
      return (n = new RegExp(e, "i")), i.className.match(n);
    }),
    (e = function (e) {
      return d(e) ? void 0 : (i.className += " " + e);
    }),
    (c = function (e) {
      return d(e) ? (i.className = i.className.replace(e, "")) : void 0;
    }),
    device.ios()
      ? device.ipad()
        ? e("ios ipad tablet")
        : device.iphone()
          ? e("ios iphone mobile")
          : device.ipod() && e("ios ipod mobile")
      : e(
        device.android()
          ? device.androidTablet()
            ? "android tablet"
            : "android mobile"
          : device.blackberry()
            ? device.blackberryTablet()
              ? "blackberry tablet"
              : "blackberry mobile"
            : device.windows()
              ? device.windowsTablet()
                ? "windows tablet"
                : device.windowsPhone()
                  ? "windows mobile"
                  : "desktop"
              : device.fxos()
                ? device.fxosTablet()
                  ? "fxos tablet"
                  : "fxos mobile"
                : "desktop"
      ),
    (o = function () {
      return device.landscape()
        ? (c("portrait"), e("landscape"))
        : (c("landscape"), e("portrait"));
    }),
    (r = "onorientationchange" in window),
    (t = r ? "orientationchange" : "resize"),
    window.addEventListener
      ? window.addEventListener(t, o, !1)
      : window.attachEvent
        ? window.attachEvent(t, o)
        : (window[t] = o),
    o();
}).call(this);

/*!
 * PARALLAX JS
 */
!(function (t, e, i, s) {
  function o(e, i) {
    (this.element = e),
      (this.options = t.extend({}, r, i)),
      (this._defaults = r),
      (this._name = n),
      this.init();
  }
  var n = "stellar",
    r = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function (t) {
        t.hide();
      },
      showElement: function (t) {
        t.show();
      },
    },
    a = {
      scroll: {
        getLeft: function (t) {
          return t.scrollLeft();
        },
        setLeft: function (t, e) {
          t.scrollLeft(e);
        },
        getTop: function (t) {
          return t.scrollTop();
        },
        setTop: function (t, e) {
          t.scrollTop(e);
        },
      },
      position: {
        getLeft: function (t) {
          return -1 * parseInt(t.css("left"), 10);
        },
        getTop: function (t) {
          return -1 * parseInt(t.css("top"), 10);
        },
      },
      margin: {
        getLeft: function (t) {
          return -1 * parseInt(t.css("margin-left"), 10);
        },
        getTop: function (t) {
          return -1 * parseInt(t.css("margin-top"), 10);
        },
      },
      transform: {
        getLeft: function (t) {
          var e = getComputedStyle(t[0])[c];
          return "none" !== e
            ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10)
            : 0;
        },
        getTop: function (t) {
          var e = getComputedStyle(t[0])[c];
          return "none" !== e
            ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10)
            : 0;
        },
      },
    },
    l = {
      position: {
        setLeft: function (t, e) {
          t.css("left", e);
        },
        setTop: function (t, e) {
          t.css("top", e);
        },
      },
      transform: {
        setPosition: function (t, e, i, s, o) {
          t[0].style[c] =
            "translate3d(" + (e - i) + "px, " + (s - o) + "px, 0)";
        },
      },
    },
    f = (function () {
      var e,
        i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        s = t("script")[0].style,
        o = "";
      for (e in s)
        if (i.test(e)) {
          o = e.match(i)[0];
          break;
        }
      return (
        "WebkitOpacity" in s && (o = "Webkit"),
        "KhtmlOpacity" in s && (o = "Khtml"),
        function (t) {
          return (
            o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
          );
        }
      );
    })(),
    c = f("transform"),
    p =
      t("<div />", {
        style: "background:#fff",
      }).css("background-position-x") !== s,
    h = p
      ? function (t, e, i) {
        t.css({
          "background-position-x": e,
          "background-position-y": i,
        });
      }
      : function (t, e, i) {
        t.css("background-position", e + " " + i);
      },
    d = p
      ? function (t) {
        return [
          t.css("background-position-x"),
          t.css("background-position-y"),
        ];
      }
      : function (t) {
        return t.css("background-position").split(" ");
      },
    u =
      e.requestAnimationFrame ||
      e.webkitRequestAnimationFrame ||
      e.mozRequestAnimationFrame ||
      e.oRequestAnimationFrame ||
      e.msRequestAnimationFrame ||
      function (t) {
        setTimeout(t, 1e3 / 60);
      };
  (o.prototype = {
    init: function () {
      (this.options.name = n + "_" + Math.floor(1e9 * Math.random())),
        this._defineElements(),
        this._defineGetters(),
        this._defineSetters(),
        this._handleWindowLoadAndResize(),
        this._detectViewport(),
        this.refresh({
          firstLoad: !0,
        }),
        "scroll" === this.options.scrollProperty
          ? this._handleScrollEvent()
          : this._startAnimationLoop();
    },
    _defineElements: function () {
      this.element === i.body && (this.element = e),
        (this.$scrollElement = t(this.element)),
        (this.$element = this.element === e ? t("body") : this.$scrollElement),
        (this.$viewportElement =
          this.options.viewportElement !== s
            ? t(this.options.viewportElement)
            : this.$scrollElement[0] === e ||
              "scroll" === this.options.scrollProperty
              ? this.$scrollElement
              : this.$scrollElement.parent());
    },
    _defineGetters: function () {
      var t = this,
        e = a[t.options.scrollProperty];
      (this._getScrollLeft = function () {
        return e.getLeft(t.$scrollElement);
      }),
        (this._getScrollTop = function () {
          return e.getTop(t.$scrollElement);
        });
    },
    _defineSetters: function () {
      var e = this,
        i = a[e.options.scrollProperty],
        s = l[e.options.positionProperty],
        o = i.setLeft,
        n = i.setTop;
      (this._setScrollLeft =
        "function" == typeof o
          ? function (t) {
            o(e.$scrollElement, t);
          }
          : t.noop),
        (this._setScrollTop =
          "function" == typeof n
            ? function (t) {
              n(e.$scrollElement, t);
            }
            : t.noop),
        (this._setPosition =
          s.setPosition ||
          function (t, i, o, n, r) {
            e.options.horizontalScrolling && s.setLeft(t, i, o),
              e.options.verticalScrolling && s.setTop(t, n, r);
          });
    },
    _handleWindowLoadAndResize: function () {
      var i = this,
        s = t(e);
      i.options.responsive &&
        s.bind("load." + this.name, function () {
          i.refresh();
        }),
        s.bind("resize." + this.name, function () {
          i._detectViewport(), i.options.responsive && i.refresh();
        });
    },
    refresh: function (i) {
      var s = this,
        o = s._getScrollLeft(),
        n = s._getScrollTop();
      (i && i.firstLoad) || this._reset(),
        this._setScrollLeft(0),
        this._setScrollTop(0),
        this._setOffsets(),
        this._findParticles(),
        this._findBackgrounds(),
        i &&
        i.firstLoad &&
        /WebKit/.test(navigator.userAgent) &&
        t(e).load(function () {
          var t = s._getScrollLeft(),
            e = s._getScrollTop();
          s._setScrollLeft(t + 1),
            s._setScrollTop(e + 1),
            s._setScrollLeft(t),
            s._setScrollTop(e);
        }),
        this._setScrollLeft(o),
        this._setScrollTop(n);
    },
    _detectViewport: function () {
      var t = this.$viewportElement.offset(),
        e = null !== t && t !== s;
      (this.viewportWidth = this.$viewportElement.width()),
        (this.viewportHeight = this.$viewportElement.height()),
        (this.viewportOffsetTop = e ? t.top : 0),
        (this.viewportOffsetLeft = e ? t.left : 0);
    },
    _findParticles: function () {
      var e = this;
      if ((this._getScrollLeft(), this._getScrollTop(), this.particles !== s))
        for (var i = this.particles.length - 1; i >= 0; i--)
          this.particles[i].$element.data("stellar-elementIsActive", s);
      (this.particles = []),
        this.options.parallaxElements &&
        this.$element.find("[data-stellar-ratio]").each(function () {
          var i,
            o,
            n,
            r,
            a,
            l,
            f,
            c,
            p,
            h = t(this),
            d = 0,
            u = 0,
            g = 0,
            m = 0;
          if (h.data("stellar-elementIsActive")) {
            if (h.data("stellar-elementIsActive") !== this) return;
          } else h.data("stellar-elementIsActive", this);
          e.options.showElement(h),
            h.data("stellar-startingLeft")
              ? (h.css("left", h.data("stellar-startingLeft")),
                h.css("top", h.data("stellar-startingTop")))
              : (h.data("stellar-startingLeft", h.css("left")),
                h.data("stellar-startingTop", h.css("top"))),
            (n = h.position().left),
            (r = h.position().top),
            (a =
              "auto" === h.css("margin-left")
                ? 0
                : parseInt(h.css("margin-left"), 10)),
            (l =
              "auto" === h.css("margin-top")
                ? 0
                : parseInt(h.css("margin-top"), 10)),
            (c = h.offset().left - a),
            (p = h.offset().top - l),
            h.parents().each(function () {
              var e = t(this);
              return e.data("stellar-offset-parent") === !0
                ? ((d = g), (u = m), (f = e), !1)
                : ((g += e.position().left), void (m += e.position().top));
            }),
            (i =
              h.data("stellar-horizontal-offset") !== s
                ? h.data("stellar-horizontal-offset")
                : f !== s && f.data("stellar-horizontal-offset") !== s
                  ? f.data("stellar-horizontal-offset")
                  : e.horizontalOffset),
            (o =
              h.data("stellar-vertical-offset") !== s
                ? h.data("stellar-vertical-offset")
                : f !== s && f.data("stellar-vertical-offset") !== s
                  ? f.data("stellar-vertical-offset")
                  : e.verticalOffset),
            e.particles.push({
              $element: h,
              $offsetParent: f,
              isFixed: "fixed" === h.css("position"),
              horizontalOffset: i,
              verticalOffset: o,
              startingPositionLeft: n,
              startingPositionTop: r,
              startingOffsetLeft: c,
              startingOffsetTop: p,
              parentOffsetLeft: d,
              parentOffsetTop: u,
              stellarRatio:
                h.data("stellar-ratio") !== s ? h.data("stellar-ratio") : 1,
              width: h.outerWidth(!0),
              height: h.outerHeight(!0),
              isHidden: !1,
            });
        });
    },
    _findBackgrounds: function () {
      var e,
        i = this,
        o = this._getScrollLeft(),
        n = this._getScrollTop();
      (this.backgrounds = []),
        this.options.parallaxBackgrounds &&
        ((e = this.$element.find("[data-stellar-background-ratio]")),
          this.$element.data("stellar-background-ratio") &&
          (e = e.add(this.$element)),
          e.each(function () {
            var e,
              r,
              a,
              l,
              f,
              c,
              p,
              u = t(this),
              g = d(u),
              m = 0,
              v = 0,
              L = 0,
              _ = 0;
            if (u.data("stellar-backgroundIsActive")) {
              if (u.data("stellar-backgroundIsActive") !== this) return;
            } else u.data("stellar-backgroundIsActive", this);
            u.data("stellar-backgroundStartingLeft")
              ? h(
                u,
                u.data("stellar-backgroundStartingLeft"),
                u.data("stellar-backgroundStartingTop")
              )
              : (u.data("stellar-backgroundStartingLeft", g[0]),
                u.data("stellar-backgroundStartingTop", g[1])),
              (a =
                "auto" === u.css("margin-left")
                  ? 0
                  : parseInt(u.css("margin-left"), 10)),
              (l =
                "auto" === u.css("margin-top")
                  ? 0
                  : parseInt(u.css("margin-top"), 10)),
              (f = u.offset().left - a - o),
              (c = u.offset().top - l - n),
              u.parents().each(function () {
                var e = t(this);
                return e.data("stellar-offset-parent") === !0
                  ? ((m = L), (v = _), (p = e), !1)
                  : ((L += e.position().left), void (_ += e.position().top));
              }),
              (e =
                u.data("stellar-horizontal-offset") !== s
                  ? u.data("stellar-horizontal-offset")
                  : p !== s && p.data("stellar-horizontal-offset") !== s
                    ? p.data("stellar-horizontal-offset")
                    : i.horizontalOffset),
              (r =
                u.data("stellar-vertical-offset") !== s
                  ? u.data("stellar-vertical-offset")
                  : p !== s && p.data("stellar-vertical-offset") !== s
                    ? p.data("stellar-vertical-offset")
                    : i.verticalOffset),
              i.backgrounds.push({
                $element: u,
                $offsetParent: p,
                isFixed: "fixed" === u.css("background-attachment"),
                horizontalOffset: e,
                verticalOffset: r,
                startingValueLeft: g[0],
                startingValueTop: g[1],
                startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10))
                  ? 0
                  : parseInt(g[0], 10),
                startingBackgroundPositionTop: isNaN(parseInt(g[1], 10))
                  ? 0
                  : parseInt(g[1], 10),
                startingPositionLeft: u.position().left,
                startingPositionTop: u.position().top,
                startingOffsetLeft: f,
                startingOffsetTop: c,
                parentOffsetLeft: m,
                parentOffsetTop: v,
                stellarRatio:
                  u.data("stellar-background-ratio") === s
                    ? 1
                    : u.data("stellar-background-ratio"),
              });
          }));
    },
    _reset: function () {
      var t, e, i, s, o;
      for (o = this.particles.length - 1; o >= 0; o--)
        (t = this.particles[o]),
          (e = t.$element.data("stellar-startingLeft")),
          (i = t.$element.data("stellar-startingTop")),
          this._setPosition(t.$element, e, e, i, i),
          this.options.showElement(t.$element),
          t.$element
            .data("stellar-startingLeft", null)
            .data("stellar-elementIsActive", null)
            .data("stellar-backgroundIsActive", null);
      for (o = this.backgrounds.length - 1; o >= 0; o--)
        (s = this.backgrounds[o]),
          s.$element
            .data("stellar-backgroundStartingLeft", null)
            .data("stellar-backgroundStartingTop", null),
          h(s.$element, s.startingValueLeft, s.startingValueTop);
    },
    destroy: function () {
      this._reset(),
        this.$scrollElement
          .unbind("resize." + this.name)
          .unbind("scroll." + this.name),
        (this._animationLoop = t.noop),
        t(e)
          .unbind("load." + this.name)
          .unbind("resize." + this.name);
    },
    _setOffsets: function () {
      var i = this,
        s = t(e);
      s
        .unbind("resize.horizontal-" + this.name)
        .unbind("resize.vertical-" + this.name),
        "function" == typeof this.options.horizontalOffset
          ? ((this.horizontalOffset = this.options.horizontalOffset()),
            s.bind("resize.horizontal-" + this.name, function () {
              i.horizontalOffset = i.options.horizontalOffset();
            }))
          : (this.horizontalOffset = this.options.horizontalOffset),
        "function" == typeof this.options.verticalOffset
          ? ((this.verticalOffset = this.options.verticalOffset()),
            s.bind("resize.vertical-" + this.name, function () {
              i.verticalOffset = i.options.verticalOffset();
            }))
          : (this.verticalOffset = this.options.verticalOffset);
    },
    _repositionElements: function () {
      var t,
        e,
        i,
        s,
        o,
        n,
        r,
        a,
        l,
        f,
        c = this._getScrollLeft(),
        p = this._getScrollTop(),
        d = !0,
        u = !0;
      if (
        this.currentScrollLeft !== c ||
        this.currentScrollTop !== p ||
        this.currentWidth !== this.viewportWidth ||
        this.currentHeight !== this.viewportHeight
      ) {
        for (
          this.currentScrollLeft = c,
          this.currentScrollTop = p,
          this.currentWidth = this.viewportWidth,
          this.currentHeight = this.viewportHeight,
          f = this.particles.length - 1;
          f >= 0;
          f--
        )
          (t = this.particles[f]),
            (e = t.isFixed ? 1 : 0),
            this.options.horizontalScrolling
              ? ((n =
                (c +
                  t.horizontalOffset +
                  this.viewportOffsetLeft +
                  t.startingPositionLeft -
                  t.startingOffsetLeft +
                  t.parentOffsetLeft) *
                -(t.stellarRatio + e - 1) +
                t.startingPositionLeft),
                (a = n - t.startingPositionLeft + t.startingOffsetLeft))
              : ((n = t.startingPositionLeft), (a = t.startingOffsetLeft)),
            this.options.verticalScrolling
              ? ((r =
                (p +
                  t.verticalOffset +
                  this.viewportOffsetTop +
                  t.startingPositionTop -
                  t.startingOffsetTop +
                  t.parentOffsetTop) *
                -(t.stellarRatio + e - 1) +
                t.startingPositionTop),
                (l = r - t.startingPositionTop + t.startingOffsetTop))
              : ((r = t.startingPositionTop), (l = t.startingOffsetTop)),
            this.options.hideDistantElements &&
            ((u =
              !this.options.horizontalScrolling ||
              (a + t.width > (t.isFixed ? 0 : c) &&
                a <
                (t.isFixed ? 0 : c) +
                this.viewportWidth +
                this.viewportOffsetLeft)),
              (d =
                !this.options.verticalScrolling ||
                (l + t.height > (t.isFixed ? 0 : p) &&
                  l <
                  (t.isFixed ? 0 : p) +
                  this.viewportHeight +
                  this.viewportOffsetTop))),
            u && d
              ? (t.isHidden &&
                (this.options.showElement(t.$element), (t.isHidden = !1)),
                this._setPosition(
                  t.$element,
                  n,
                  t.startingPositionLeft,
                  r,
                  t.startingPositionTop
                ))
              : t.isHidden ||
              (this.options.hideElement(t.$element), (t.isHidden = !0));
        for (f = this.backgrounds.length - 1; f >= 0; f--)
          (i = this.backgrounds[f]),
            (e = i.isFixed ? 0 : 1),
            (s = this.options.horizontalScrolling
              ? (c +
                i.horizontalOffset -
                this.viewportOffsetLeft -
                i.startingOffsetLeft +
                i.parentOffsetLeft -
                i.startingBackgroundPositionLeft) *
              (e - i.stellarRatio) +
              "px"
              : i.startingValueLeft),
            (o = this.options.verticalScrolling
              ? (p +
                i.verticalOffset -
                this.viewportOffsetTop -
                i.startingOffsetTop +
                i.parentOffsetTop -
                i.startingBackgroundPositionTop) *
              (e - i.stellarRatio) +
              "px"
              : i.startingValueTop),
            h(i.$element, s, o);
      }
    },
    _handleScrollEvent: function () {
      var t = this,
        e = !1,
        i = function () {
          t._repositionElements(), (e = !1);
        },
        s = function () {
          e || (u(i), (e = !0));
        };
      this.$scrollElement.bind("scroll." + this.name, s), s();
    },
    _startAnimationLoop: function () {
      var t = this;
      (this._animationLoop = function () {
        u(t._animationLoop), t._repositionElements();
      }),
        this._animationLoop();
    },
  }),
    (t.fn[n] = function (e) {
      var i = arguments;
      return e === s || "object" == typeof e
        ? this.each(function () {
          t.data(this, "plugin_" + n) ||
            t.data(this, "plugin_" + n, new o(this, e));
        })
        : "string" == typeof e && "_" !== e[0] && "init" !== e
          ? this.each(function () {
            var s = t.data(this, "plugin_" + n);
            s instanceof o &&
              "function" == typeof s[e] &&
              s[e].apply(s, Array.prototype.slice.call(i, 1)),
              "destroy" === e && t.data(this, "plugin_" + n, null);
          })
          : void 0;
    }),
    (t[n] = function () {
      var i = t(e);
      return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0));
    }),
    (t[n].scrollProperty = a),
    (t[n].positionProperty = l),
    (e.Stellar = o);
})(jQuery, this, document),
  (function () {
    "use strict";

    function t() {
      $.stellar({
        positionProperty: "transform",
      });
    }
    device.tablet() || device.mobile()
      ? $(".parallax, .parallax-layer").addClass("no-parallax")
      : $(window).bind("load", function () {
        t();
      });
  })();

/*!
 * TYPED
 */
!(function (t) {
  "use strict";
  var s = function (s, e) {
    (this.el = t(s)),
      (this.options = t.extend({}, t.fn.typed.defaults, e)),
      (this.isInput = this.el.is("input")),
      (this.attr = this.options.attr),
      (this.showCursor = this.isInput ? !1 : this.options.showCursor),
      (this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()),
      (this.contentType = this.options.contentType),
      (this.typeSpeed = this.options.typeSpeed),
      (this.startDelay = this.options.startDelay),
      (this.backSpeed = this.options.backSpeed),
      (this.backDelay = this.options.backDelay),
      (this.stringsElement = this.options.stringsElement),
      (this.strings = this.options.strings),
      (this.strPos = 0),
      (this.arrayPos = 0),
      (this.stopNum = 0),
      (this.loop = this.options.loop),
      (this.loopCount = this.options.loopCount),
      (this.curLoop = 0),
      (this.stop = !1),
      (this.cursorChar = this.options.cursorChar),
      (this.shuffle = this.options.shuffle),
      (this.sequence = []),
      this.build();
  };
  (s.prototype = {
    constructor: s,
    init: function () {
      var t = this;
      t.timeout = setTimeout(function () {
        for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
        t.shuffle && (t.sequence = t.shuffleArray(t.sequence)),
          t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
      }, t.startDelay);
    },
    build: function () {
      var s = this;
      if (
        (this.showCursor === !0 &&
          ((this.cursor = t(
            '<span class="typed-cursor">' + this.cursorChar + "</span>"
          )),
            this.el.after(this.cursor)),
          this.stringsElement)
      ) {
        (s.strings = []), this.stringsElement.hide();
        var e = this.stringsElement.find("p");
        t.each(e, function (e, i) {
          s.strings.push(t(i).html());
        });
      }
      this.init();
    },
    typewrite: function (t, s) {
      if (this.stop !== !0) {
        var e = Math.round(70 * Math.random()) + this.typeSpeed,
          i = this;
        i.timeout = setTimeout(function () {
          var e = 0,
            r = t.substr(s);
          if ("^" === r.charAt(0)) {
            var o = 1;
            /^\^\d+/.test(r) &&
              ((r = /\d+/.exec(r)[0]), (o += r.length), (e = parseInt(r))),
              (t = t.substring(0, s) + t.substring(s + o));
          }
          if ("html" === i.contentType) {
            var n = t.substr(s).charAt(0);
            if ("<" === n || "&" === n) {
              var a = "",
                h = "";
              for (h = "<" === n ? ">" : ";"; t.substr(s).charAt(0) !== h;)
                (a += t.substr(s).charAt(0)), s++;
              s++, (a += h);
            }
          }
          i.timeout = setTimeout(function () {
            if (s === t.length) {
              if (
                (i.options.onStringTyped(i.arrayPos),
                  i.arrayPos === i.strings.length - 1 &&
                  (i.options.callback(),
                    i.curLoop++,
                    i.loop === !1 || i.curLoop === i.loopCount))
              )
                return;
              i.timeout = setTimeout(function () {
                i.backspace(t, s);
              }, i.backDelay);
            } else {
              0 === s && i.options.preStringTyped(i.arrayPos);
              var e = t.substr(0, s + 1);
              i.attr
                ? i.el.attr(i.attr, e)
                : i.isInput
                  ? i.el.val(e)
                  : "html" === i.contentType
                    ? i.el.html(e)
                    : i.el.text(e),
                s++,
                i.typewrite(t, s);
            }
          }, e);
        }, e);
      }
    },
    backspace: function (t, s) {
      if (this.stop !== !0) {
        var e = Math.round(70 * Math.random()) + this.backSpeed,
          i = this;
        i.timeout = setTimeout(function () {
          if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
            for (var e = ""; "<" !== t.substr(s).charAt(0);)
              (e -= t.substr(s).charAt(0)), s--;
            s--, (e += "<");
          }
          var r = t.substr(0, s);
          i.attr
            ? i.el.attr(i.attr, r)
            : i.isInput
              ? i.el.val(r)
              : "html" === i.contentType
                ? i.el.html(r)
                : i.el.text(r),
            s > i.stopNum
              ? (s--, i.backspace(t, s))
              : s <= i.stopNum &&
              (i.arrayPos++,
                i.arrayPos === i.strings.length
                  ? ((i.arrayPos = 0),
                    i.shuffle && (i.sequence = i.shuffleArray(i.sequence)),
                    i.init())
                  : i.typewrite(i.strings[i.sequence[i.arrayPos]], s));
        }, e);
      }
    },
    shuffleArray: function (t) {
      var s,
        e,
        i = t.length;
      if (i)
        for (; --i;)
          (e = Math.floor(Math.random() * (i + 1))),
            (s = t[e]),
            (t[e] = t[i]),
            (t[i] = s);
      return t;
    },
    reset: function () {
      var t = this;
      clearInterval(t.timeout);
      var s = this.el.attr("id");
      this.el.after('<span id="' + s + '"/>'),
        this.el.remove(),
        "undefined" != typeof this.cursor && this.cursor.remove(),
        t.options.resetCallback();
    },
  }),
    (t.fn.typed = function (e) {
      return this.each(function () {
        var i = t(this),
          r = i.data("typed"),
          o = "object" == typeof e && e;
        r || i.data("typed", (r = new s(this, o))),
          "string" == typeof e && r[e]();
      });
    }),
    (t.fn.typed.defaults = {
      strings: [
        "These are the default values...",
        "You know what you should do?",
        "Use your own!",
        "Have a great day!",
      ],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      shuffle: !1,
      backDelay: 500,
      loop: !1,
      loopCount: !1,
      showCursor: !0,
      cursorChar: "|",
      attr: null,
      contentType: "html",
      callback: function () { },
      preStringTyped: function () { },
      onStringTyped: function () { },
      resetCallback: function () { },
    });
})(window.jQuery);

$(function () {
  $(".element").typed({
    strings: ["Learning", "Education", "University", "Course"],
    typeSpeed: 150,
  });
});

/* ==============================================
CAROUSEL -->
=============================================== */

!(function (t, e, i, s) {
  function n(e, i) {
    (this.settings = null),
      (this.options = t.extend({}, n.Defaults, i)),
      (this.$element = t(e)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: {
          start: null,
          current: null,
        },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      t.each(
        ["onResize", "onThrottledResize"],
        t.proxy(function (e, i) {
          this._handlers[i] = t.proxy(this[i], this);
        }, this)
      ),
      t.each(
        n.Plugins,
        t.proxy(function (t, e) {
          this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
        }, this)
      ),
      t.each(
        n.Workers,
        t.proxy(function (e, i) {
          this._pipe.push({
            filter: i.filter,
            run: t.proxy(i.run, this),
          });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (n.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: e,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (n.Width = {
      Default: "default",
      Inner: "inner",
      Outer: "outer",
    }),
    (n.Type = {
      Event: "event",
      State: "state",
    }),
    (n.Plugins = {}),
    (n.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          t.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e = this.settings.margin || "",
            i = !this.settings.autoWidth,
            s = this.settings.rtl,
            n = {
              width: "auto",
              "margin-left": s ? e : "",
              "margin-right": s ? "" : e,
            };
          !i && this.$stage.children().css(n), (t.css = n);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e =
            (this.width() / this.settings.items).toFixed(3) -
            this.settings.margin,
            i = null,
            s = this._items.length,
            n = !this.settings.autoWidth,
            o = [];
          for (
            t.items = {
              merge: !1,
              width: e,
            };
            s--;

          )
            (i = this._mergers[s]),
              (i =
                (this.settings.mergeFit && Math.min(i, this.settings.items)) ||
                i),
              (t.items.merge = i > 1 || t.items.merge),
              (o[s] = n ? e * i : this._items[s].width());
          this._widths = o;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var e = [],
            i = this._items,
            s = this.settings,
            n = Math.max(2 * s.items, 4),
            o = 2 * Math.ceil(i.length / 2),
            r = s.loop && i.length ? (s.rewind ? n : Math.max(n, o)) : 0,
            a = "",
            h = "";
          for (r /= 2; r--;)
            e.push(this.normalize(e.length / 2, !0)),
              (a += i[e[e.length - 1]][0].outerHTML),
              e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
              (h = i[e[e.length - 1]][0].outerHTML + h);
          (this._clones = e),
            t(a).addClass("cloned").appendTo(this.$stage),
            t(h).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var t = this.settings.rtl ? 1 : -1,
            e = this._clones.length + this._items.length,
            i = -1,
            s = 0,
            n = 0,
            o = [];
            ++i < e;

          )
            (s = o[i - 1] || 0),
              (n = this._widths[this.relative(i)] + this.settings.margin),
              o.push(s + n * t);
          this._coordinates = o;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var t = this.settings.stagePadding,
            e = this._coordinates,
            i = {
              width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
              "padding-left": t || "",
              "padding-right": t || "",
            };
          this.$stage.css(i);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e = this._coordinates.length,
            i = !this.settings.autoWidth,
            s = this.$stage.children();
          if (i && t.items.merge)
            for (; e--;)
              (t.css.width = this._widths[this.relative(e)]),
                s.eq(e).css(t.css);
          else i && ((t.css.width = t.items.width), s.css(t.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          (t.current = t.current ? this.$stage.children().index(t.current) : 0),
            (t.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), t.current)
            )),
            this.reset(t.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var t,
            e,
            i,
            s,
            n = this.settings.rtl ? 1 : -1,
            o = 2 * this.settings.stagePadding,
            r = this.coordinates(this.current()) + o,
            a = r + this.width() * n,
            h = [];
          for (i = 0, s = this._coordinates.length; s > i; i++)
            (t = this._coordinates[i - 1] || 0),
              (e = Math.abs(this._coordinates[i]) + o * n),
              ((this.op(t, "<=", r) && this.op(t, ">", a)) ||
                (this.op(e, "<", r) && this.op(e, ">", a))) &&
              h.push(i);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + h.join("), :eq(") + ")")
              .addClass("active"),
            this.settings.center &&
            (this.$stage.children(".center").removeClass("center"),
              this.$stage.children().eq(this.current()).addClass("center"));
        },
      },
    ]),
    (n.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
          this.trigger("initialize"),
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
          this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var e, i, n;
        (e = this.$element.find("img")),
          (i = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : s),
          (n = this.$element.children(i).width()),
          e.length && 0 >= n && this.preloadAutoWidthImages(e);
      }
      this.$element.addClass(this.options.loadingClass),
        (this.$stage = t(
          "<" +
          this.settings.stageElement +
          ' class="' +
          this.settings.stageClass +
          '"/>'
        ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.$element.is(":visible")
          ? this.refresh()
          : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (n.prototype.setup = function () {
      var e = this.viewport(),
        i = this.options.responsive,
        s = -1,
        n = null;
      i
        ? (t.each(i, function (t) {
          e >= t && t > s && (s = Number(t));
        }),
          (n = t.extend({}, this.options, i[s])),
          delete n.responsive,
          n.responsiveClass &&
          this.$element.attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(
                  "(" + this.options.responsiveClass + "-)\\S+\\s",
                  "g"
                ),
                "$1" + s
              )
          ))
        : (n = t.extend({}, this.options)),
        (null === this.settings || this._breakpoint !== s) &&
        (this.trigger("change", {
          property: {
            name: "settings",
            value: n,
          },
        }),
          (this._breakpoint = s),
          (this.settings = n),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: {
              name: "settings",
              value: this.settings,
            },
          }));
    }),
    (n.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (n.prototype.prepare = function (e) {
      var i = this.trigger("prepare", {
        content: e,
      });
      return (
        i.data ||
        (i.data = t("<" + this.settings.itemElement + "/>")
          .addClass(this.options.itemClass)
          .append(e)),
        this.trigger("prepared", {
          content: i.data,
        }),
        i.data
      );
    }),
    (n.prototype.update = function () {
      for (
        var e = 0,
        i = this._pipe.length,
        s = t.proxy(function (t) {
          return this[t];
        }, this._invalidated),
        n = {};
        i > e;

      )
        (this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) &&
          this._pipe[e].run(n),
          e++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (n.prototype.width = function (t) {
      switch ((t = t || n.Width.Default)) {
        case n.Width.Inner:
        case n.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (n.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (n.prototype.onThrottledResize = function () {
      e.clearTimeout(this.resizeTimer),
        (this.resizeTimer = e.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (n.prototype.onResize = function () {
      return this._items.length
        ? this._width === this.$element.width()
          ? !1
          : this.$element.is(":visible")
            ? (this.enter("resizing"),
              this.trigger("resize").isDefaultPrevented()
                ? (this.leave("resizing"), !1)
                : (this.invalidate("width"),
                  this.refresh(),
                  this.leave("resizing"),
                  void this.trigger("resized")))
            : !1
        : !1;
    }),
    (n.prototype.registerEventHandlers = function () {
      t.support.transition &&
        this.$stage.on(
          t.support.transition.end + ".owl.core",
          t.proxy(this.onTransitionEnd, this)
        ),
        this.settings.responsive !== !1 &&
        this.on(e, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
        (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
        (this.$stage.on(
          "touchstart.owl.core",
          t.proxy(this.onDragStart, this)
        ),
          this.$stage.on(
            "touchcancel.owl.core",
            t.proxy(this.onDragEnd, this)
          ));
    }),
    (n.prototype.onDragStart = function (e) {
      var s = null;
      3 !== e.which &&
        (t.support.transform
          ? ((s = this.$stage
            .css("transform")
            .replace(/.*\(|\)| /g, "")
            .split(",")),
            (s = {
              x: s[16 === s.length ? 12 : 4],
              y: s[16 === s.length ? 13 : 5],
            }))
          : ((s = this.$stage.position()),
            (s = {
              x: this.settings.rtl
                ? s.left +
                this.$stage.width() -
                this.width() +
                this.settings.margin
                : s.left,
              y: s.top,
            })),
          this.is("animating") &&
          (t.support.transform ? this.animate(s.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            "mousedown" === e.type
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = t(e.target)),
          (this._drag.stage.start = s),
          (this._drag.stage.current = s),
          (this._drag.pointer = this.pointer(e)),
          t(i).on(
            "mouseup.owl.core touchend.owl.core",
            t.proxy(this.onDragEnd, this)
          ),
          t(i).one(
            "mousemove.owl.core touchmove.owl.core",
            t.proxy(function (e) {
              var s = this.difference(this._drag.pointer, this.pointer(e));
              t(i).on(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(this.onDragMove, this)
              ),
                (Math.abs(s.x) < Math.abs(s.y) && this.is("valid")) ||
                (e.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
    }),
    (n.prototype.onDragMove = function (t) {
      var e = null,
        i = null,
        s = null,
        n = this.difference(this._drag.pointer, this.pointer(t)),
        o = this.difference(this._drag.stage.start, n);
      this.is("dragging") &&
        (t.preventDefault(),
          this.settings.loop
            ? ((e = this.coordinates(this.minimum())),
              (i = this.coordinates(this.maximum() + 1) - e),
              (o.x = ((((o.x - e) % i) + i) % i) + e))
            : ((e = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
              (i = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum())),
              (s = this.settings.pullDrag ? (-1 * n.x) / 5 : 0),
              (o.x = Math.max(Math.min(o.x, e + s), i + s))),
          (this._drag.stage.current = o),
          this.animate(o.x));
    }),
    (n.prototype.onDragEnd = function (e) {
      var s = this.difference(this._drag.pointer, this.pointer(e)),
        n = this._drag.stage.current,
        o = (s.x > 0) ^ this.settings.rtl ? "left" : "right";
      t(i).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== s.x && this.is("dragging")) || !this.is("valid")) &&
        (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(n.x, 0 !== s.x ? o : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = o),
          (Math.abs(s.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
          this._drag.target.one("click.owl.core", function () {
            return !1;
          })),
        this.is("dragging") &&
        (this.leave("dragging"), this.trigger("dragged"));
    }),
    (n.prototype.closest = function (e, i) {
      var s = -1,
        n = 30,
        o = this.width(),
        r = this.coordinates();
      return (
        this.settings.freeDrag ||
        t.each(
          r,
          t.proxy(function (t, a) {
            return (
              "left" === i && e > a - n && a + n > e
                ? (s = t)
                : "right" === i && e > a - o - n && a - o + n > e
                  ? (s = t + 1)
                  : this.op(e, "<", a) &&
                  this.op(e, ">", r[t + 1] || a - o) &&
                  (s = "left" === i ? t + 1 : t),
              -1 === s
            );
          }, this)
        ),
        this.settings.loop ||
        (this.op(e, ">", r[this.minimum()])
          ? (s = e = this.minimum())
          : this.op(e, "<", r[this.maximum()]) && (s = e = this.maximum())),
        s
      );
    }),
    (n.prototype.animate = function (e) {
      var i = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        i && (this.enter("animating"), this.trigger("translate")),
        t.support.transform3d && t.support.transition
          ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s",
          })
          : i
            ? this.$stage.animate(
              {
                left: e + "px",
              },
              this.speed(),
              this.settings.fallbackEasing,
              t.proxy(this.onTransitionEnd, this)
            )
            : this.$stage.css({
              left: e + "px",
            });
    }),
    (n.prototype.is = function (t) {
      return this._states.current[t] && this._states.current[t] > 0;
    }),
    (n.prototype.current = function (t) {
      if (t === s) return this._current;
      if (0 === this._items.length) return s;
      if (((t = this.normalize(t)), this._current !== t)) {
        var e = this.trigger("change", {
          property: {
            name: "position",
            value: t,
          },
        });
        e.data !== s && (t = this.normalize(e.data)),
          (this._current = t),
          this.invalidate("position"),
          this.trigger("changed", {
            property: {
              name: "position",
              value: this._current,
            },
          });
      }
      return this._current;
    }),
    (n.prototype.invalidate = function (e) {
      return (
        "string" === t.type(e) &&
        ((this._invalidated[e] = !0),
          this.is("valid") && this.leave("valid")),
        t.map(this._invalidated, function (t, e) {
          return e;
        })
      );
    }),
    (n.prototype.reset = function (t) {
      (t = this.normalize(t)),
        t !== s &&
        ((this._speed = 0),
          (this._current = t),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(t)),
          this.release(["translate", "translated"]));
    }),
    (n.prototype.normalize = function (t, e) {
      var i = this._items.length,
        n = e ? 0 : this._clones.length;
      return (
        !this.isNumeric(t) || 1 > i
          ? (t = s)
          : (0 > t || t >= i + n) &&
          (t = ((((t - n / 2) % i) + i) % i) + n / 2),
        t
      );
    }),
    (n.prototype.relative = function (t) {
      return (t -= this._clones.length / 2), this.normalize(t, !0);
    }),
    (n.prototype.maximum = function (t) {
      var e,
        i = this.settings,
        s = this._coordinates.length,
        n = Math.abs(this._coordinates[s - 1]) - this._width,
        o = -1;
      if (i.loop) s = this._clones.length / 2 + this._items.length - 1;
      else if (i.autoWidth || i.merge)
        for (; s - o > 1;)
          Math.abs(this._coordinates[(e = (s + o) >> 1)]) < n
            ? (o = e)
            : (s = e);
      else s = i.center ? this._items.length - 1 : this._items.length - i.items;
      return t && (s -= this._clones.length / 2), Math.max(s, 0);
    }),
    (n.prototype.minimum = function (t) {
      return t ? 0 : this._clones.length / 2;
    }),
    (n.prototype.items = function (t) {
      return t === s
        ? this._items.slice()
        : ((t = this.normalize(t, !0)), this._items[t]);
    }),
    (n.prototype.mergers = function (t) {
      return t === s
        ? this._mergers.slice()
        : ((t = this.normalize(t, !0)), this._mergers[t]);
    }),
    (n.prototype.clones = function (e) {
      var i = this._clones.length / 2,
        n = i + this._items.length,
        o = function (t) {
          return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2;
        };
      return e === s
        ? t.map(this._clones, function (t, e) {
          return o(e);
        })
        : t.map(this._clones, function (t, i) {
          return t === e ? o(i) : null;
        });
    }),
    (n.prototype.speed = function (t) {
      return t !== s && (this._speed = t), this._speed;
    }),
    (n.prototype.coordinates = function (e) {
      var i,
        n = 1,
        o = e - 1;
      return e === s
        ? t.map(
          this._coordinates,
          t.proxy(function (t, e) {
            return this.coordinates(e);
          }, this)
        )
        : (this.settings.center
          ? (this.settings.rtl && ((n = -1), (o = e + 1)),
            (i = this._coordinates[e]),
            (i += ((this.width() - i + (this._coordinates[o] || 0)) / 2) * n))
          : (i = this._coordinates[o] || 0),
          (i = Math.ceil(i)));
    }),
    (n.prototype.duration = function (t, e, i) {
      return 0 === i
        ? 0
        : Math.min(Math.max(Math.abs(e - t), 1), 6) *
        Math.abs(i || this.settings.smartSpeed);
    }),
    (n.prototype.to = function (t, e) {
      var i = this.current(),
        s = null,
        n = t - this.relative(i),
        o = (n > 0) - (0 > n),
        r = this._items.length,
        a = this.minimum(),
        h = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r),
          (t = i + n),
          (s = ((((t - a) % r) + r) % r) + a),
          s !== t &&
          h >= s - n &&
          s - n > 0 &&
          ((i = s - n), (t = s), this.reset(i)))
        : this.settings.rewind
          ? ((h += 1), (t = ((t % h) + h) % h))
          : (t = Math.max(a, Math.min(h, t))),
        this.speed(this.duration(i, t, e)),
        this.current(t),
        this.$element.is(":visible") && this.update();
    }),
    (n.prototype.next = function (t) {
      (t = t || !1), this.to(this.relative(this.current()) + 1, t);
    }),
    (n.prototype.prev = function (t) {
      (t = t || !1), this.to(this.relative(this.current()) - 1, t);
    }),
    (n.prototype.onTransitionEnd = function (t) {
      return t !== s &&
        (t.stopPropagation(),
          (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
        ? !1
        : (this.leave("animating"), void this.trigger("translated"));
    }),
    (n.prototype.viewport = function () {
      var s;
      if (this.options.responsiveBaseElement !== e)
        s = t(this.options.responsiveBaseElement).width();
      else if (e.innerWidth) s = e.innerWidth;
      else {
        if (!i.documentElement || !i.documentElement.clientWidth)
          throw "Can not detect viewport width.";
        s = i.documentElement.clientWidth;
      }
      return s;
    }),
    (n.prototype.replace = function (e) {
      this.$stage.empty(),
        (this._items = []),
        e && (e = e instanceof jQuery ? e : t(e)),
        this.settings.nestedItemSelector &&
        (e = e.find("." + this.settings.nestedItemSelector)),
        e
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            t.proxy(function (t, e) {
              (e = this.prepare(e)),
                this.$stage.append(e),
                this._items.push(e),
                this._mergers.push(
                  1 *
                  e
                    .find("[data-merge]")
                    .andSelf("[data-merge]")
                    .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (n.prototype.add = function (e, i) {
      var n = this.relative(this._current);
      (i = i === s ? this._items.length : this.normalize(i, !0)),
        (e = e instanceof jQuery ? e : t(e)),
        this.trigger("add", {
          content: e,
          position: i,
        }),
        (e = this.prepare(e)),
        0 === this._items.length || i === this._items.length
          ? (0 === this._items.length && this.$stage.append(e),
            0 !== this._items.length && this._items[i - 1].after(e),
            this._items.push(e),
            this._mergers.push(
              1 *
              e
                .find("[data-merge]")
                .andSelf("[data-merge]")
                .attr("data-merge") || 1
            ))
          : (this._items[i].before(e),
            this._items.splice(i, 0, e),
            this._mergers.splice(
              i,
              0,
              1 *
              e
                .find("[data-merge]")
                .andSelf("[data-merge]")
                .attr("data-merge") || 1
            )),
        this._items[n] && this.reset(this._items[n].index()),
        this.invalidate("items"),
        this.trigger("added", {
          content: e,
          position: i,
        });
    }),
    (n.prototype.remove = function (t) {
      (t = this.normalize(t, !0)),
        t !== s &&
        (this.trigger("remove", {
          content: this._items[t],
          position: t,
        }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate("items"),
          this.trigger("removed", {
            content: null,
            position: t,
          }));
    }),
    (n.prototype.preloadAutoWidthImages = function (e) {
      e.each(
        t.proxy(function (e, i) {
          this.enter("pre-loading"),
            (i = t(i)),
            t(new Image())
              .one(
                "load",
                t.proxy(function (t) {
                  i.attr("src", t.target.src),
                    i.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                    !this.is("initializing") &&
                    this.refresh();
                }, this)
              )
              .attr(
                "src",
                i.attr("src") || i.attr("data-src") || i.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (n.prototype.destroy = function () {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(i).off(".owl.core"),
        this.settings.responsive !== !1 &&
        (e.clearTimeout(this.resizeTimer),
          this.off(e, "resize", this._handlers.onThrottledResize));
      for (var s in this._plugins) this._plugins[s].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (n.prototype.op = function (t, e, i) {
      var s = this.settings.rtl;
      switch (e) {
        case "<":
          return s ? t > i : i > t;
        case ">":
          return s ? i > t : t > i;
        case ">=":
          return s ? i >= t : t >= i;
        case "<=":
          return s ? t >= i : i >= t;
      }
    }),
    (n.prototype.on = function (t, e, i, s) {
      t.addEventListener
        ? t.addEventListener(e, i, s)
        : t.attachEvent && t.attachEvent("on" + e, i);
    }),
    (n.prototype.off = function (t, e, i, s) {
      t.removeEventListener
        ? t.removeEventListener(e, i, s)
        : t.detachEvent && t.detachEvent("on" + e, i);
    }),
    (n.prototype.trigger = function (e, i, s, o, r) {
      var a = {
        item: {
          count: this._items.length,
          index: this.current(),
        },
      },
        h = t.camelCase(
          t
            .grep(["on", e, s], function (t) {
              return t;
            })
            .join("-")
            .toLowerCase()
        ),
        l = t.Event(
          [e, "owl", s || "carousel"].join(".").toLowerCase(),
          t.extend(
            {
              relatedTarget: this,
            },
            a,
            i
          )
        );
      return (
        this._supress[e] ||
        (t.each(this._plugins, function (t, e) {
          e.onTrigger && e.onTrigger(l);
        }),
          this.register({
            type: n.Type.Event,
            name: e,
          }),
          this.$element.trigger(l),
          this.settings &&
          "function" == typeof this.settings[h] &&
          this.settings[h].call(this, l)),
        l
      );
    }),
    (n.prototype.enter = function (e) {
      t.each(
        [e].concat(this._states.tags[e] || []),
        t.proxy(function (t, e) {
          this._states.current[e] === s && (this._states.current[e] = 0),
            this._states.current[e]++;
        }, this)
      );
    }),
    (n.prototype.leave = function (e) {
      t.each(
        [e].concat(this._states.tags[e] || []),
        t.proxy(function (t, e) {
          this._states.current[e]--;
        }, this)
      );
    }),
    (n.prototype.register = function (e) {
      if (e.type === n.Type.Event) {
        if (
          (t.event.special[e.name] || (t.event.special[e.name] = {}),
            !t.event.special[e.name].owl)
        ) {
          var i = t.event.special[e.name]._default;
          (t.event.special[e.name]._default = function (t) {
            return !i ||
              !i.apply ||
              (t.namespace && -1 !== t.namespace.indexOf("owl"))
              ? t.namespace && t.namespace.indexOf("owl") > -1
              : i.apply(this, arguments);
          }),
            (t.event.special[e.name].owl = !0);
        }
      } else
        e.type === n.Type.State &&
          (this._states.tags[e.name]
            ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
              e.tags
            ))
            : (this._states.tags[e.name] = e.tags),
            (this._states.tags[e.name] = t.grep(
              this._states.tags[e.name],
              t.proxy(function (i, s) {
                return t.inArray(i, this._states.tags[e.name]) === s;
              }, this)
            )));
    }),
    (n.prototype.suppress = function (e) {
      t.each(
        e,
        t.proxy(function (t, e) {
          this._supress[e] = !0;
        }, this)
      );
    }),
    (n.prototype.release = function (e) {
      t.each(
        e,
        t.proxy(function (t, e) {
          delete this._supress[e];
        }, this)
      );
    }),
    (n.prototype.pointer = function (t) {
      var i = {
        x: null,
        y: null,
      };
      return (
        (t = t.originalEvent || t || e.event),
        (t =
          t.touches && t.touches.length
            ? t.touches[0]
            : t.changedTouches && t.changedTouches.length
              ? t.changedTouches[0]
              : t),
        t.pageX
          ? ((i.x = t.pageX), (i.y = t.pageY))
          : ((i.x = t.clientX), (i.y = t.clientY)),
        i
      );
    }),
    (n.prototype.isNumeric = function (t) {
      return !isNaN(parseFloat(t));
    }),
    (n.prototype.difference = function (t, e) {
      return {
        x: t.x - e.x,
        y: t.y - e.y,
      };
    }),
    (t.fn.owlCarousel = function (e) {
      var i = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var s = t(this),
          o = s.data("owl.carousel");
        o ||
          ((o = new n(this, "object" == typeof e && e)),
            s.data("owl.carousel", o),
            t.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove",
              ],
              function (e, i) {
                o.register({
                  type: n.Type.Event,
                  name: i,
                }),
                  o.$element.on(
                    i + ".owl.carousel.core",
                    t.proxy(function (t) {
                      t.namespace &&
                        t.relatedTarget !== this &&
                        (this.suppress([i]),
                          o[i].apply(this, [].slice.call(arguments, 1)),
                          this.release([i]));
                    }, o)
                  );
              }
            )),
          "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i);
      });
    }),
    (t.fn.owlCarousel.Constructor = n);
})(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (n.Defaults = {
      autoRefresh: !0,
      autoRefreshInterval: 500,
    }),
      (n.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
            (this._interval = e.setInterval(
              t.proxy(this.refresh, this),
              this._core.settings.autoRefreshInterval
            )));
      }),
      (n.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
            this._core.$element.toggleClass("owl-hidden", !this._visible),
            this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (n.prototype.destroy = function () {
        var t, i;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            t.proxy(function (e) {
              if (
                e.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((e.property && "position" == e.property.name) ||
                  "initialized" == e.type)
              )
                for (
                  var i = this._core.settings,
                  n = (i.center && Math.ceil(i.items / 2)) || i.items,
                  o = (i.center && -1 * n) || 0,
                  r =
                    (e.property && e.property.value !== s
                      ? e.property.value
                      : this._core.current()) + o,
                  a = this._core.clones().length,
                  h = t.proxy(function (t, e) {
                    this.load(e);
                  }, this);
                  o++ < n;

                )
                  this.load(a / 2 + this._core.relative(r)),
                    a && t.each(this._core.clones(this._core.relative(r)), h),
                    r++;
            }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (n.Defaults = {
      lazyLoad: !1,
    }),
      (n.prototype.load = function (i) {
        var s = this._core.$stage.children().eq(i),
          n = s && s.find(".owl-lazy");
        !n ||
          t.inArray(s.get(0), this._loaded) > -1 ||
          (n.each(
            t.proxy(function (i, s) {
              var n,
                o = t(s),
                r =
                  (e.devicePixelRatio > 1 && o.attr("data-src-retina")) ||
                  o.attr("data-src");
              this._core.trigger(
                "load",
                {
                  element: o,
                  url: r,
                },
                "lazy"
              ),
                o.is("img")
                  ? o
                    .one(
                      "load.owl.lazy",
                      t.proxy(function () {
                        o.css("opacity", 1),
                          this._core.trigger(
                            "loaded",
                            {
                              element: o,
                              url: r,
                            },
                            "lazy"
                          );
                      }, this)
                    )
                    .attr("src", r)
                  : ((n = new Image()),
                    (n.onload = t.proxy(function () {
                      o.css({
                        "background-image": "url(" + r + ")",
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          {
                            element: o,
                            url: r,
                          },
                          "lazy"
                        );
                    }, this)),
                    (n.src = r));
            }, this)
          ),
            this._loaded.push(s.get(0)));
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Lazy = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
            this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" == t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
              this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (n.Defaults = {
      autoHeight: !1,
      autoHeightClass: "owl-height",
    }),
      (n.prototype.update = function () {
        var e = this._core._current,
          i = e + this._core.settings.items,
          s = this._core.$stage.children().toArray().slice(e, i),
          n = [],
          o = 0;
        t.each(s, function (e, i) {
          n.push(t(i).height());
        }),
          (o = Math.max.apply(null, n)),
          this._core.$stage
            .parent()
            .height(o)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find(".owl-video");
              i.length &&
                (i.css("display", "none"), this.fetch(i, t(e.content)));
            }
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          t.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (n.Defaults = {
      video: !1,
      videoHeight: !1,
      videoWidth: !1,
    }),
      (n.prototype.fetch = function (t, e) {
        var i = (function () {
          return t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
        })(),
          s =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          n = t.attr("data-width") || this._core.settings.videoWidth,
          o = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (
          ((s = r.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
            s[3].indexOf("youtu") > -1)
        )
          i = "youtube";
        else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
          if (!(s[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          i = "vzaar";
        }
        (s = s[6]),
          (this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o,
          }),
          e.attr("data-video", r),
          this.thumbnail(t, this._videos[r]);
      }),
      (n.prototype.thumbnail = function (e, i) {
        var s,
          n,
          o,
          r =
            i.width && i.height
              ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"'
              : "",
          a = e.find("img"),
          h = "src",
          l = "",
          c = this._core.settings,
          p = function (t) {
            (n = '<div class="owl-video-play-icon"></div>'),
              (s = c.lazyLoad
                ? '<div class="owl-video-tn ' +
                l +
                '" ' +
                h +
                '="' +
                t +
                '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                t +
                ')"></div>'),
              e.after(s),
              e.after(n);
          };
        return (
          e.wrap('<div class="owl-video-wrapper"' + r + "></div>"),
          this._core.settings.lazyLoad && ((h = "data-src"), (l = "owl-lazy")),
          a.length
            ? (p(a.attr(h)), a.remove(), !1)
            : void ("youtube" === i.type
              ? ((o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"),
                p(o))
              : "vimeo" === i.type
                ? t.ajax({
                  type: "GET",
                  url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                  jsonp: "callback",
                  dataType: "jsonp",
                  success: function (t) {
                    (o = t[0].thumbnail_large), p(o);
                  },
                })
                : "vzaar" === i.type &&
                t.ajax({
                  type: "GET",
                  url: "//vzaar.com/api/videos/" + i.id + ".json",
                  jsonp: "callback",
                  dataType: "jsonp",
                  success: function (t) {
                    (o = t.framegrab_url), p(o);
                  },
                }))
        );
      }),
      (n.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (n.prototype.play = function (e) {
        var i,
          s = t(e.target),
          n = s.closest("." + this._core.settings.itemClass),
          o = this._videos[n.attr("data-video")],
          r = o.width || "100%",
          a = o.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
            this._core.trigger("play", null, "video"),
            (n = this._core.items(this._core.relative(n.index()))),
            this._core.reset(n.index()),
            "youtube" === o.type
              ? (i =
                '<iframe width="' +
                r +
                '" height="' +
                a +
                '" src="//www.youtube.com/embed/' +
                o.id +
                "?autoplay=1&v=" +
                o.id +
                '" frameborder="0" allowfullscreen></iframe>')
              : "vimeo" === o.type
                ? (i =
                  '<iframe src="//player.vimeo.com/video/' +
                  o.id +
                  '?autoplay=1" width="' +
                  r +
                  '" height="' +
                  a +
                  '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
                : "vzaar" === o.type &&
                (i =
                  '<iframe frameborder="0"height="' +
                  a +
                  '"width="' +
                  r +
                  '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                  o.id +
                  '/player?autoplay=true"></iframe>'),
            t('<div class="owl-video-frame">' + i + "</div>").insertAfter(
              n.find(".owl-video")
            ),
            (this._playing = n.addClass("owl-video-playing")));
      }),
      (n.prototype.isInFullScreen = function () {
        var e =
          i.fullscreenElement ||
          i.mozFullScreenElement ||
          i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame");
      }),
      (n.prototype.destroy = function () {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Video = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this.core = e),
        (this.core.options = t.extend({}, n.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = s),
        (this.next = s),
        (this.handlers = {
          "change.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
                (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            t.proxy(function (t) {
              t.namespace && (this.swapping = "translated" == t.type);
            }, this),
          "translate.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (n.Defaults = {
      animateOut: !1,
      animateIn: !1,
    }),
      (n.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          t.support.animation &&
          t.support.transition
        ) {
          this.core.speed(0);
          var e,
            i = t.proxy(this.clear, this),
            s = this.core.$stage.children().eq(this.previous),
            n = this.core.$stage.children().eq(this.next),
            o = this.core.settings.animateIn,
            r = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (r &&
              ((e =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
                s
                  .one(t.support.animation.end, i)
                  .css({
                    left: e + "px",
                  })
                  .addClass("animated owl-animated-out")
                  .addClass(r)),
              o &&
              n
                .one(t.support.animation.end, i)
                .addClass("animated owl-animated-in")
                .addClass(o));
        }
      }),
      (n.prototype.clear = function (e) {
        t(e.target)
          .css({
            left: "",
          })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Animate = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
              "position" === t.property.name &&
              this._core.settings.autoplay &&
              this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": t.proxy(function (t, e, i) {
            t.namespace && this.play(e, i);
          }, this),
          "stop.owl.autoplay": t.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, n.Defaults, this._core.options));
    };
    (n.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (n.prototype.play = function (t, e) {
        (this._paused = !1),
          this._core.is("rotating") ||
          (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (n.prototype._getNextTimeout = function (s, n) {
        return (
          this._timeout && e.clearTimeout(this._timeout),
          e.setTimeout(
            t.proxy(function () {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                i.hidden ||
                this._core.next(n || this._core.settings.autoplaySpeed);
            }, this),
            s || this._core.settings.autoplayTimeout
          )
        );
      }),
      (n.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
      }),
      (n.prototype.stop = function () {
        this._core.is("rotating") &&
          (e.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (n.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (n.prototype.destroy = function () {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    "use strict";
    var n = function (e) {
      (this._core = e),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": t.proxy(function (e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                this._core.settings.dotClass +
                '">' +
                t(e.content)
                  .find("[data-dot]")
                  .addBack("[data-dot]")
                  .attr("data-dot") +
                "</div>"
              );
          }, this),
          "added.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                (this._initialized = !0),
                this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (n.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (n.prototype.initialize = function () {
        var e,
          i = this._core.settings;
        (this._controls.$relative = (
          i.navContainer
            ? t(i.navContainer)
            : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = t("<" + i.navElement + ">")
            .addClass(i.navClass[0])
            .html(i.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              t.proxy(function (t) {
                this.prev(i.navSpeed);
              }, this)
            )),
          (this._controls.$next = t("<" + i.navElement + ">")
            .addClass(i.navClass[1])
            .html(i.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              t.proxy(function (t) {
                this.next(i.navSpeed);
              }, this)
            )),
          i.dotsData ||
          (this._templates = [
            t("<div>")
              .addClass(i.dotClass)
              .append(t("<span>"))
              .prop("outerHTML"),
          ]),
          (this._controls.$absolute = (
            i.dotsContainer
              ? t(i.dotsContainer)
              : t("<div>").addClass(i.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "div",
            t.proxy(function (e) {
              var s = t(e.target).parent().is(this._controls.$absolute)
                ? t(e.target).index()
                : t(e.target).parent().index();
              e.preventDefault(), this.to(s, i.dotsSpeed);
            }, this)
          );
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this);
      }),
      (n.prototype.destroy = function () {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (n.prototype.update = function () {
        var t,
          e,
          i,
          s = this._core.clones().length / 2,
          n = s + this._core.items().length,
          o = this._core.maximum(!0),
          r = this._core.settings,
          a = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if (
          ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)),
            r.dots || "page" == r.slideBy)
        )
          for (this._pages = [], t = s, e = 0, i = 0; n > t; t++) {
            if (e >= a || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(o, t - s),
                  end: t - s + a - 1,
                }),
                  Math.min(o, t - s) === o)
              )
                break;
              (e = 0), ++i;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (n.prototype.draw = function () {
        var e,
          i = this._core.settings,
          s = this._core.items().length <= i.items,
          n = this._core.relative(this._core.current()),
          o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || s),
          i.nav &&
          (this._controls.$previous.toggleClass(
            "disabled",
            !o && n <= this._core.minimum(!0)
          ),
            this._controls.$next.toggleClass(
              "disabled",
              !o && n >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !i.dots || s),
          i.dots &&
          ((e =
            this._pages.length - this._controls.$absolute.children().length),
            i.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(""))
              : e > 0
                ? this._controls.$absolute.append(
                  new Array(e + 1).join(this._templates[0])
                )
                : 0 > e && this._controls.$absolute.children().slice(e).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(t.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (n.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            i &&
            (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items),
        };
      }),
      (n.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t
          .grep(
            this._pages,
            t.proxy(function (t, i) {
              return t.start <= e && t.end >= e;
            }, this)
          )
          .pop();
      }),
      (n.prototype.getPosition = function (e) {
        var i,
          s,
          n = this._core.settings;
        return (
          "page" == n.slideBy
            ? ((i = t.inArray(this.current(), this._pages)),
              (s = this._pages.length),
              e ? ++i : --i,
              (i = this._pages[((i % s) + s) % s].start))
            : ((i = this._core.relative(this._core.current())),
              (s = this._core.items().length),
              e ? (i += n.slideBy) : (i -= n.slideBy)),
          i
        );
      }),
      (n.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (n.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (n.prototype.to = function (e, i, s) {
        var n;
        !s && this._pages.length
          ? ((n = this._pages.length),
            t.proxy(this._overrides.to, this._core)(
              this._pages[((e % n) + n) % n].start,
              i
            ))
          : t.proxy(this._overrides.to, this._core)(e, i);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Navigation = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    "use strict";
    var n = function (i) {
      (this._core = i),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (i) {
            i.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              t(e).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!i) return;
              this._hashes[i] = e.content;
            }
          }, this),
          "changed.owl.carousel": t.proxy(function (i) {
            if (i.namespace && "position" === i.property.name) {
              var s = this._core.items(
                this._core.relative(this._core.current())
              ),
                n = t
                  .map(this._hashes, function (t, e) {
                    return t === s ? e : null;
                  })
                  .join();
              if (!n || e.location.hash.slice(1) === n) return;
              e.location.hash = n;
            }
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          "hashchange.owl.navigation",
          t.proxy(function (t) {
            var i = e.location.hash.substring(1),
              n = this._core.$stage.children(),
              o = this._hashes[i] && n.index(this._hashes[i]);
            o !== s &&
              o !== this._core.current() &&
              this._core.to(this._core.relative(o), !1, !0);
          }, this)
        );
    };
    (n.Defaults = {
      URLhashListener: !1,
    }),
      (n.prototype.destroy = function () {
        var i, s;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this))
          "function" != typeof this[s] && (this[s] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Hash = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    function n(e, i) {
      var n = !1,
        o = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        t.each((e + " " + a.join(o + " ") + o).split(" "), function (t, e) {
          return r[e] !== s ? ((n = i ? e : !0), !1) : void 0;
        }),
        n
      );
    }

    function o(t) {
      return n(t, !0);
    }
    var r = t("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      h = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      l = {
        csstransforms: function () {
          return !!n("transform");
        },
        csstransforms3d: function () {
          return !!n("perspective");
        },
        csstransitions: function () {
          return !!n("transition");
        },
        cssanimations: function () {
          return !!n("animation");
        },
      };
    l.csstransitions() &&
      ((t.support.transition = new String(o("transition"))),
        (t.support.transition.end = h.transition.end[t.support.transition])),
      l.cssanimations() &&
      ((t.support.animation = new String(o("animation"))),
        (t.support.animation.end = h.animation.end[t.support.animation])),
      l.csstransforms() &&
      ((t.support.transform = new String(o("transform"))),
        (t.support.transform3d = l.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

$(".course-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsiveClass: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});
$(".sidebar-course-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsiveClass: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
      loop: false,
    },
  },
});

$(".testi-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsiveClass: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: true,
      loop: false,
    },
  },
});

/************************************************
VIDEO PLAYER
************************************************/
var mejs = mejs || {};
(mejs.version = "2.20.1"),
  (mejs.meIndex = 0),
  (mejs.plugins = {
    silverlight: [
      {
        version: [3, 0],
        types: [
          "video/mp4",
          "video/m4v",
          "video/mov",
          "video/wmv",
          "audio/wma",
          "audio/m4a",
          "audio/mp3",
          "audio/wav",
          "audio/mpeg",
        ],
      },
    ],
    flash: [
      {
        version: [9, 0, 124],
        types: [
          "video/mp4",
          "video/m4v",
          "video/mov",
          "video/flv",
          "video/rtmp",
          "video/x-flv",
          "audio/flv",
          "audio/x-flv",
          "audio/mp3",
          "audio/m4a",
          "audio/mpeg",
          "video/dailymotion",
          "video/x-dailymotion",
          "application/x-mpegURL",
        ],
      },
    ],
    youtube: [
      {
        version: null,
        types: [
          "video/youtube",
          "video/x-youtube",
          "audio/youtube",
          "audio/x-youtube",
        ],
      },
    ],
    vimeo: [
      {
        version: null,
        types: ["video/vimeo", "video/x-vimeo"],
      },
    ],
  }),
  (mejs.Utility = {
    encodeUrl: function (a) {
      return encodeURIComponent(a);
    },
    escapeHTML: function (a) {
      return a
        .toString()
        .split("&")
        .join("&amp;")
        .split("<")
        .join("&lt;")
        .split('"')
        .join("&quot;");
    },
    absolutizeUrl: function (a) {
      var b = document.createElement("div");
      return (
        (b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>'),
        b.firstChild.href
      );
    },
    getScriptPath: function (a) {
      for (
        var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = "",
        j = "",
        k = document.getElementsByTagName("script"),
        l = k.length,
        m = a.length;
        l > h;
        h++
      ) {
        for (
          e = k[h].src,
          c = e.lastIndexOf("/"),
          c > -1
            ? ((g = e.substring(c + 1)), (f = e.substring(0, c + 1)))
            : ((g = e), (f = "")),
          b = 0;
          m > b;
          b++
        )
          if (((j = a[b]), (d = g.indexOf(j)), d > -1)) {
            i = f;
            break;
          }
        if ("" !== i) break;
      }
      return i;
    },
    calculateTimeFormat: function (a, b, c) {
      0 > a && (a = 0), "undefined" == typeof c && (c = 25);
      var d = b.timeFormat,
        e = d[0],
        f = d[1] == d[0],
        g = f ? 2 : 1,
        h = ":",
        i = Math.floor(a / 3600) % 24,
        j = Math.floor(a / 60) % 60,
        k = Math.floor(a % 60),
        l = Math.floor(((a % 1) * c).toFixed(3)),
        m = [
          [l, "f"],
          [k, "s"],
          [j, "m"],
          [i, "h"],
        ];
      d.length < g && (h = d[g]);
      for (var n = !1, o = 0, p = m.length; p > o; o++)
        if (-1 !== d.indexOf(m[o][1])) n = !0;
        else if (n) {
          for (var q = !1, r = o; p > r; r++)
            if (m[r][0] > 0) {
              q = !0;
              break;
            }
          if (!q) break;
          f || (d = e + d),
            (d = m[o][1] + h + d),
            f && (d = m[o][1] + d),
            (e = m[o][1]);
        }
      b.currentTimeFormat = d;
    },
    twoDigitsString: function (a) {
      return 10 > a ? "0" + a : String(a);
    },
    secondsToTimeCode: function (a, b) {
      if ((0 > a && (a = 0), "object" != typeof b)) {
        var c = "m:ss";
        (c = arguments[1] ? "hh:mm:ss" : c),
          (c = arguments[2] ? c + ":ff" : c),
          (b = {
            currentTimeFormat: c,
            framesPerSecond: arguments[3] || 25,
          });
      }
      var d = b.framesPerSecond;
      "undefined" == typeof d && (d = 25);
      var c = b.currentTimeFormat,
        e = Math.floor(a / 3600) % 24,
        f = Math.floor(a / 60) % 60,
        g = Math.floor(a % 60),
        h = Math.floor(((a % 1) * d).toFixed(3));
      lis = [
        [h, "f"],
        [g, "s"],
        [f, "m"],
        [e, "h"],
      ];
      var j = c;
      for (i = 0, len = lis.length; i < len; i++)
        (j = j.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0]))),
          (j = j.replace(lis[i][1], lis[i][0]));
      return j;
    },
    timeCodeToSeconds: function (a, b, c, d) {
      "undefined" == typeof c ? (c = !1) : "undefined" == typeof d && (d = 25);
      var e = a.split(":"),
        f = parseInt(e[0], 10),
        g = parseInt(e[1], 10),
        h = parseInt(e[2], 10),
        i = 0,
        j = 0;
      return c && (i = parseInt(e[3]) / d), (j = 3600 * f + 60 * g + h + i);
    },
    convertSMPTEtoSeconds: function (a) {
      if ("string" != typeof a) return !1;
      a = a.replace(",", ".");
      var b = 0,
        c = -1 != a.indexOf(".") ? a.split(".")[1].length : 0,
        d = 1;
      a = a.split(":").reverse();
      for (var e = 0; e < a.length; e++)
        (d = 1), e > 0 && (d = Math.pow(60, e)), (b += Number(a[e]) * d);
      return Number(b.toFixed(c));
    },
    removeSwf: function (a) {
      var b = document.getElementById(a);
      b &&
        /object|embed/i.test(b.nodeName) &&
        (mejs.MediaFeatures.isIE
          ? ((b.style.display = "none"),
            (function () {
              4 == b.readyState
                ? mejs.Utility.removeObjectInIE(a)
                : setTimeout(arguments.callee, 10);
            })())
          : b.parentNode.removeChild(b));
    },
    removeObjectInIE: function (a) {
      var b = document.getElementById(a);
      if (b) {
        for (var c in b) "function" == typeof b[c] && (b[c] = null);
        b.parentNode.removeChild(b);
      }
    },
  }),
  (mejs.PluginDetector = {
    hasPluginVersion: function (a, b) {
      var c = this.plugins[a];
      return (
        (b[1] = b[1] || 0),
        (b[2] = b[2] || 0),
        c[0] > b[0] ||
          (c[0] == b[0] && c[1] > b[1]) ||
          (c[0] == b[0] && c[1] == b[1] && c[2] >= b[2])
          ? !0
          : !1
      );
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (a, b, c, d, e) {
      this.plugins[a] = this.detectPlugin(b, c, d, e);
    },
    detectPlugin: function (a, b, c, d) {
      var e,
        f,
        g,
        h = [0, 0, 0];
      if (
        "undefined" != typeof this.nav.plugins &&
        "object" == typeof this.nav.plugins[a]
      ) {
        if (
          ((e = this.nav.plugins[a].description),
            e &&
            ("undefined" == typeof this.nav.mimeTypes ||
              !this.nav.mimeTypes[b] ||
              this.nav.mimeTypes[b].enabledPlugin))
        )
          for (
            h = e
              .replace(a, "")
              .replace(/^\s+/, "")
              .replace(/\sr/gi, ".")
              .split("."),
            f = 0;
            f < h.length;
            f++
          )
            h[f] = parseInt(h[f].match(/\d+/), 10);
      } else if ("undefined" != typeof window.ActiveXObject)
        try {
          (g = new ActiveXObject(c)), g && (h = d(g));
        } catch (i) { }
      return h;
    },
  }),
  mejs.PluginDetector.addPlugin(
    "flash",
    "Shockwave Flash",
    "application/x-shockwave-flash",
    "ShockwaveFlash.ShockwaveFlash",
    function (a) {
      var b = [],
        c = a.GetVariable("$version");
      return (
        c &&
        ((c = c.split(" ")[1].split(",")),
          (b = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)])),
        b
      );
    }
  ),
  mejs.PluginDetector.addPlugin(
    "silverlight",
    "Silverlight Plug-In",
    "application/x-silverlight-2",
    "AgControl.AgControl",
    function (a) {
      var b = [0, 0, 0, 0],
        c = function (a, b, c, d) {
          for (
            ;
            a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);

          )
            b[c] += d;
          b[c] -= d;
        };
      return (
        c(a, b, 0, 1),
        c(a, b, 1, 1),
        c(a, b, 2, 1e4),
        c(a, b, 2, 1e3),
        c(a, b, 2, 100),
        c(a, b, 2, 10),
        c(a, b, 2, 1),
        c(a, b, 3, 1),
        b
      );
    }
  ),
  (mejs.MediaFeatures = {
    init: function () {
      var a,
        b,
        c = this,
        d = document,
        e = mejs.PluginDetector.nav,
        f = mejs.PluginDetector.ua.toLowerCase(),
        g = ["source", "track", "audio", "video"];
      (c.isiPad = null !== f.match(/ipad/i)),
        (c.isiPhone = null !== f.match(/iphone/i)),
        (c.isiOS = c.isiPhone || c.isiPad),
        (c.isAndroid = null !== f.match(/android/i)),
        (c.isBustedAndroid = null !== f.match(/android 2\.[12]/)),
        (c.isBustedNativeHTTPS =
          "https:" === location.protocol &&
          (null !== f.match(/android [12]\./) ||
            null !== f.match(/macintosh.* version.* safari/))),
        (c.isIE =
          -1 != e.appName.toLowerCase().indexOf("microsoft") ||
          null !== e.appName.toLowerCase().match(/trident/gi)),
        (c.isChrome = null !== f.match(/chrome/gi)),
        (c.isChromium = null !== f.match(/chromium/gi)),
        (c.isFirefox = null !== f.match(/firefox/gi)),
        (c.isWebkit = null !== f.match(/webkit/gi)),
        (c.isGecko = null !== f.match(/gecko/gi) && !c.isWebkit && !c.isIE),
        (c.isOpera = null !== f.match(/opera/gi)),
        (c.hasTouch = "ontouchstart" in window),
        (c.svgAsImg = !!document.implementation.hasFeature(
          "http://www.w3.org/TR/SVG11/feature#Image",
          "1.1"
        ));
      for (a = 0; a < g.length; a++) b = document.createElement(g[a]);
      c.supportsMediaTag =
        "undefined" != typeof b.canPlayType || c.isBustedAndroid;
      try {
        b.canPlayType("video/mp4");
      } catch (h) {
        c.supportsMediaTag = !1;
      }
      (c.supportsPointerEvents = (function () {
        var a,
          b = document.createElement("x"),
          c = document.documentElement,
          d = window.getComputedStyle;
        return "pointerEvents" in b.style
          ? ((b.style.pointerEvents = "auto"),
            (b.style.pointerEvents = "x"),
            c.appendChild(b),
            (a = d && "auto" === d(b, "").pointerEvents),
            c.removeChild(b),
            !!a)
          : !1;
      })()),
        (c.hasFirefoxPluginMovingProblem = !1),
        (c.hasiOSFullScreen = "undefined" != typeof b.webkitEnterFullscreen),
        (c.hasNativeFullscreen = "undefined" != typeof b.requestFullscreen),
        (c.hasWebkitNativeFullScreen =
          "undefined" != typeof b.webkitRequestFullScreen),
        (c.hasMozNativeFullScreen =
          "undefined" != typeof b.mozRequestFullScreen),
        (c.hasMsNativeFullScreen = "undefined" != typeof b.msRequestFullscreen),
        (c.hasTrueNativeFullScreen =
          c.hasWebkitNativeFullScreen ||
          c.hasMozNativeFullScreen ||
          c.hasMsNativeFullScreen),
        (c.nativeFullScreenEnabled = c.hasTrueNativeFullScreen),
        c.hasMozNativeFullScreen
          ? (c.nativeFullScreenEnabled = document.mozFullScreenEnabled)
          : c.hasMsNativeFullScreen &&
          (c.nativeFullScreenEnabled = document.msFullscreenEnabled),
        c.isChrome && (c.hasiOSFullScreen = !1),
        c.hasTrueNativeFullScreen &&
        ((c.fullScreenEventName = ""),
          c.hasWebkitNativeFullScreen
            ? (c.fullScreenEventName = "webkitfullscreenchange")
            : c.hasMozNativeFullScreen
              ? (c.fullScreenEventName = "mozfullscreenchange")
              : c.hasMsNativeFullScreen &&
              (c.fullScreenEventName = "MSFullscreenChange"),
          (c.isFullScreen = function () {
            return c.hasMozNativeFullScreen
              ? d.mozFullScreen
              : c.hasWebkitNativeFullScreen
                ? d.webkitIsFullScreen
                : c.hasMsNativeFullScreen
                  ? null !== d.msFullscreenElement
                  : void 0;
          }),
          (c.requestFullScreen = function (a) {
            c.hasWebkitNativeFullScreen
              ? a.webkitRequestFullScreen()
              : c.hasMozNativeFullScreen
                ? a.mozRequestFullScreen()
                : c.hasMsNativeFullScreen && a.msRequestFullscreen();
          }),
          (c.cancelFullScreen = function () {
            c.hasWebkitNativeFullScreen
              ? document.webkitCancelFullScreen()
              : c.hasMozNativeFullScreen
                ? document.mozCancelFullScreen()
                : c.hasMsNativeFullScreen && document.msExitFullscreen();
          })),
        c.hasiOSFullScreen &&
        f.match(/mac os x 10_5/i) &&
        ((c.hasNativeFullScreen = !1), (c.hasiOSFullScreen = !1));
    },
  }),
  mejs.MediaFeatures.init(),
  (mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function (a) {
      this.currentTime = a;
    },
    setMuted: function (a) {
      this.muted = a;
    },
    setVolume: function (a) {
      this.volume = a;
    },
    stop: function () {
      this.pause();
    },
    setSrc: function (a) {
      for (var b = this.getElementsByTagName("source"); b.length > 0;)
        this.removeChild(b[0]);
      if ("string" == typeof a) this.src = a;
      else {
        var c, d;
        for (c = 0; c < a.length; c++)
          if (((d = a[c]), this.canPlayType(d.type))) {
            this.src = d.src;
            break;
          }
      }
    },
    setVideoSize: function (a, b) {
      (this.width = a), (this.height = b);
    },
  }),
  (mejs.PluginMediaElement = function (a, b, c) {
    (this.id = a),
      (this.pluginType = b),
      (this.src = c),
      (this.events = {}),
      (this.attributes = {});
  }),
  (mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function () {
      null != this.pluginApi &&
        ("youtube" == this.pluginType || "vimeo" == this.pluginType
          ? this.pluginApi.playVideo()
          : this.pluginApi.playMedia(),
          (this.paused = !1));
    },
    load: function () {
      null != this.pluginApi &&
        ("youtube" == this.pluginType ||
          "vimeo" == this.pluginType ||
          this.pluginApi.loadMedia(),
          (this.paused = !1));
    },
    pause: function () {
      null != this.pluginApi &&
        ("youtube" == this.pluginType || "vimeo" == this.pluginType
          ? this.pluginApi.pauseVideo()
          : this.pluginApi.pauseMedia(),
          (this.paused = !0));
    },
    stop: function () {
      null != this.pluginApi &&
        ("youtube" == this.pluginType || "vimeo" == this.pluginType
          ? this.pluginApi.stopVideo()
          : this.pluginApi.stopMedia(),
          (this.paused = !0));
    },
    canPlayType: function (a) {
      var b,
        c,
        d,
        e = mejs.plugins[this.pluginType];
      for (b = 0; b < e.length; b++)
        if (
          ((d = e[b]),
            mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version))
        )
          for (c = 0; c < d.types.length; c++)
            if (a == d.types[c]) return "probably";
      return "";
    },
    positionFullscreenButton: function (a, b, c) {
      null != this.pluginApi &&
        this.pluginApi.positionFullscreenButton &&
        this.pluginApi.positionFullscreenButton(
          Math.floor(a),
          Math.floor(b),
          c
        );
    },
    hideFullscreenButton: function () {
      null != this.pluginApi &&
        this.pluginApi.hideFullscreenButton &&
        this.pluginApi.hideFullscreenButton();
    },
    setSrc: function (a) {
      if ("string" == typeof a)
        this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)),
          (this.src = mejs.Utility.absolutizeUrl(a));
      else {
        var b, c;
        for (b = 0; b < a.length; b++)
          if (((c = a[b]), this.canPlayType(c.type))) {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)),
              (this.src = mejs.Utility.absolutizeUrl(c.src));
            break;
          }
      }
    },
    setCurrentTime: function (a) {
      null != this.pluginApi &&
        ("youtube" == this.pluginType || "vimeo" == this.pluginType
          ? this.pluginApi.seekTo(a)
          : this.pluginApi.setCurrentTime(a),
          (this.currentTime = a));
    },
    setVolume: function (a) {
      null != this.pluginApi &&
        ("youtube" == this.pluginType
          ? this.pluginApi.setVolume(100 * a)
          : this.pluginApi.setVolume(a),
          (this.volume = a));
    },
    setMuted: function (a) {
      null != this.pluginApi &&
        ("youtube" == this.pluginType
          ? (a ? this.pluginApi.mute() : this.pluginApi.unMute(),
            (this.muted = a),
            this.dispatchEvent({
              type: "volumechange",
            }))
          : this.pluginApi.setMuted(a),
          (this.muted = a));
    },
    setVideoSize: function (a, b) {
      this.pluginElement &&
        this.pluginElement.style &&
        ((this.pluginElement.style.width = a + "px"),
          (this.pluginElement.style.height = b + "px")),
        null != this.pluginApi &&
        this.pluginApi.setVideoSize &&
        this.pluginApi.setVideoSize(a, b);
    },
    setFullscreen: function (a) {
      null != this.pluginApi &&
        this.pluginApi.setFullscreen &&
        this.pluginApi.setFullscreen(a);
    },
    enterFullScreen: function () {
      null != this.pluginApi &&
        this.pluginApi.setFullscreen &&
        this.setFullscreen(!0);
    },
    exitFullScreen: function () {
      null != this.pluginApi &&
        this.pluginApi.setFullscreen &&
        this.setFullscreen(!1);
    },
    addEventListener: function (a, b, c) {
      (this.events[a] = this.events[a] || []), this.events[a].push(b);
    },
    removeEventListener: function (a, b) {
      if (!a) return (this.events = {}), !0;
      var c = this.events[a];
      if (!c) return !0;
      if (!b) return (this.events[a] = []), !0;
      for (var d = 0; d < c.length; d++)
        if (c[d] === b) return this.events[a].splice(d, 1), !0;
      return !1;
    },
    dispatchEvent: function (a) {
      var b,
        c = this.events[a.type];
      if (c) for (b = 0; b < c.length; b++) c[b].apply(this, [a]);
    },
    hasAttribute: function (a) {
      return a in this.attributes;
    },
    removeAttribute: function (a) {
      delete this.attributes[a];
    },
    getAttribute: function (a) {
      return this.hasAttribute(a) ? this.attributes[a] : "";
    },
    setAttribute: function (a, b) {
      this.attributes[a] = b;
    },
    remove: function () {
      mejs.Utility.removeSwf(this.pluginElement.id),
        mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id);
    },
  }),
  (mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function (a, b, c) {
      (this.pluginMediaElements[a] = b), (this.htmlMediaElements[a] = c);
    },
    unregisterPluginElement: function (a) {
      delete this.pluginMediaElements[a], delete this.htmlMediaElements[a];
    },
    initPlugin: function (a) {
      var b = this.pluginMediaElements[a],
        c = this.htmlMediaElements[a];
      if (b) {
        switch (b.pluginType) {
          case "flash":
            b.pluginElement = b.pluginApi = document.getElementById(a);
            break;
          case "silverlight":
            (b.pluginElement = document.getElementById(b.id)),
              (b.pluginApi = b.pluginElement.Content.MediaElementJS);
        }
        null != b.pluginApi && b.success && b.success(b, c);
      }
    },
    fireEvent: function (a, b, c) {
      var d,
        e,
        f,
        g = this.pluginMediaElements[a];
      if (g) {
        d = {
          type: b,
          target: g,
        };
        for (e in c) (g[e] = c[e]), (d[e] = c[e]);
        (f = c.bufferedTime || 0),
          (d.target.buffered = d.buffered =
          {
            start: function (a) {
              return 0;
            },
            end: function (a) {
              return f;
            },
            length: 1,
          }),
          g.dispatchEvent(d);
      }
    },
  }),
  (mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath([
      "mediaelement.js",
      "mediaelement.min.js",
      "mediaelement-and-player.js",
      "mediaelement-and-player.min.js",
    ]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    flashScriptAccess: "sameDomain",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: 0.8,
    success: function () { },
    error: function () { },
  }),
  (mejs.MediaElement = function (a, b) {
    return mejs.HtmlMediaElementShim.create(a, b);
  }),
  (mejs.HtmlMediaElementShim = {
    create: function (a, b) {
      var c,
        d,
        e = {},
        f = "string" == typeof a ? document.getElementById(a) : a,
        g = f.tagName.toLowerCase(),
        h = "audio" === g || "video" === g,
        i = h ? f.getAttribute("src") : f.getAttribute("href"),
        j = f.getAttribute("poster"),
        k = f.getAttribute("autoplay"),
        l = f.getAttribute("preload"),
        m = f.getAttribute("controls");
      for (d in mejs.MediaElementDefaults) e[d] = mejs.MediaElementDefaults[d];
      for (d in b) e[d] = b[d];
      return (
        (i = "undefined" == typeof i || null === i || "" == i ? null : i),
        (j = "undefined" == typeof j || null === j ? "" : j),
        (l =
          "undefined" == typeof l || null === l || "false" === l ? "none" : l),
        (k = !("undefined" == typeof k || null === k || "false" === k)),
        (m = !("undefined" == typeof m || null === m || "false" === m)),
        (c = this.determinePlayback(
          f,
          e,
          mejs.MediaFeatures.supportsMediaTag,
          h,
          i
        )),
        (c.url = null !== c.url ? mejs.Utility.absolutizeUrl(c.url) : ""),
        "native" == c.method
          ? (mejs.MediaFeatures.isBustedAndroid &&
            ((f.src = c.url),
              f.addEventListener(
                "click",
                function () {
                  f.play();
                },
                !1
              )),
            this.updateNative(c, e, k, l))
          : "" !== c.method
            ? this.createPlugin(c, e, j, k, l, m)
            : (this.createErrorMessage(c, e, j), this)
      );
    },
    determinePlayback: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = [],
        r = {
          method: "",
          url: "",
          htmlMediaElement: a,
          isVideo: "audio" != a.tagName.toLowerCase(),
        };
      if ("undefined" != typeof b.type && "" !== b.type)
        if ("string" == typeof b.type)
          q.push({
            type: b.type,
            url: e,
          });
        else
          for (f = 0; f < b.type.length; f++)
            q.push({
              type: b.type[f],
              url: e,
            });
      else if (null !== e)
        (k = this.formatType(e, a.getAttribute("type"))),
          q.push({
            type: k,
            url: e,
          });
      else
        for (f = 0; f < a.childNodes.length; f++)
          (j = a.childNodes[f]),
            1 == j.nodeType &&
            "source" == j.tagName.toLowerCase() &&
            ((e = j.getAttribute("src")),
              (k = this.formatType(e, j.getAttribute("type"))),
              (p = j.getAttribute("media")),
              (!p ||
                !window.matchMedia ||
                (window.matchMedia && window.matchMedia(p).matches)) &&
              q.push({
                type: k,
                url: e,
              }));
      if (
        (!d &&
          q.length > 0 &&
          null !== q[0].url &&
          this.getTypeFromFile(q[0].url).indexOf("audio") > -1 &&
          (r.isVideo = !1),
          mejs.MediaFeatures.isBustedAndroid &&
          (a.canPlayType = function (a) {
            return null !== a.match(/video\/(mp4|m4v)/gi) ? "maybe" : "";
          }),
          mejs.MediaFeatures.isChromium &&
          (a.canPlayType = function (a) {
            return null !== a.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : "";
          }),
          c &&
          ("auto" === b.mode ||
            "auto_plugin" === b.mode ||
            "native" === b.mode) &&
          (!mejs.MediaFeatures.isBustedNativeHTTPS ||
            b.httpsBasicAuthSite !== !0))
      ) {
        for (
          d ||
          ((o = document.createElement(r.isVideo ? "video" : "audio")),
            a.parentNode.insertBefore(o, a),
            (a.style.display = "none"),
            (r.htmlMediaElement = a = o)),
          f = 0;
          f < q.length;
          f++
        )
          if (
            "video/m3u8" == q[f].type ||
            "" !== a.canPlayType(q[f].type).replace(/no/, "") ||
            "" !==
            a
              .canPlayType(q[f].type.replace(/mp3/, "mpeg"))
              .replace(/no/, "") ||
            "" !==
            a.canPlayType(q[f].type.replace(/m4a/, "mp4")).replace(/no/, "")
          ) {
            (r.method = "native"), (r.url = q[f].url);
            break;
          }
        if (
          "native" === r.method &&
          (null !== r.url && (a.src = r.url), "auto_plugin" !== b.mode)
        )
          return r;
      }
      if ("auto" === b.mode || "auto_plugin" === b.mode || "shim" === b.mode)
        for (f = 0; f < q.length; f++)
          for (k = q[f].type, g = 0; g < b.plugins.length; g++)
            for (
              l = b.plugins[g], m = mejs.plugins[l], h = 0;
              h < m.length;
              h++
            )
              if (
                ((n = m[h]),
                  null == n.version ||
                  mejs.PluginDetector.hasPluginVersion(l, n.version))
              )
                for (i = 0; i < n.types.length; i++)
                  if (k.toLowerCase() == n.types[i].toLowerCase())
                    return (r.method = l), (r.url = q[f].url), r;
      return "auto_plugin" === b.mode && "native" === r.method
        ? r
        : ("" === r.method && q.length > 0 && (r.url = q[0].url), r);
    },
    formatType: function (a, b) {
      return a && !b
        ? this.getTypeFromFile(a)
        : b && ~b.indexOf(";")
          ? b.substr(0, b.indexOf(";"))
          : b;
    },
    getTypeFromFile: function (a) {
      a = a.split("?")[0];
      var b = a.substring(a.lastIndexOf(".") + 1).toLowerCase(),
        c = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b)
          ? "video/"
          : "audio/";
      return this.getTypeFromExtension(b, c);
    },
    getTypeFromExtension: function (a, b) {
      switch (((b = b || ""), a)) {
        case "mp4":
        case "m4v":
        case "m4a":
        case "f4v":
        case "f4a":
          return b + "mp4";
        case "flv":
          return b + "x-flv";
        case "webm":
        case "webma":
        case "webmv":
          return b + "webm";
        case "ogg":
        case "oga":
        case "ogv":
          return b + "ogg";
        case "m3u8":
          return "application/x-mpegurl";
        case "ts":
          return b + "mp2t";
        default:
          return b + a;
      }
    },
    createErrorMessage: function (a, b, c) {
      var d = a.htmlMediaElement,
        e = document.createElement("div"),
        f = b.customError;
      e.className = "me-cannotplay";
      try {
        (e.style.width = d.width + "px"), (e.style.height = d.height + "px");
      } catch (g) { }
      f ||
        ((f = '<a href="' + a.url + '">'),
          "" !== c &&
          (f += '<img src="' + c + '" width="100%" height="100%" alt="" />'),
          (f += "<span>" + mejs.i18n.t("Download File") + "</span></a>")),
        (e.innerHTML = f),
        d.parentNode.insertBefore(e, d),
        (d.style.display = "none"),
        b.error(d);
    },
    createPlugin: function (a, b, c, d, e, f) {
      var g,
        h,
        i,
        j = a.htmlMediaElement,
        k = 1,
        l = 1,
        m = "me_" + a.method + "_" + mejs.meIndex++,
        n = new mejs.PluginMediaElement(m, a.method, a.url),
        o = document.createElement("div");
      n.tagName = j.tagName;
      for (var p = 0; p < j.attributes.length; p++) {
        var q = j.attributes[p];
        q.specified && n.setAttribute(q.name, q.value);
      }
      for (
        h = j.parentNode;
        null !== h &&
        null != h.tagName &&
        "body" !== h.tagName.toLowerCase() &&
        null != h.parentNode &&
        null != h.parentNode.tagName &&
        null != h.parentNode.constructor &&
        "ShadowRoot" === h.parentNode.constructor.name;

      ) {
        if ("p" === h.parentNode.tagName.toLowerCase()) {
          h.parentNode.parentNode.insertBefore(h, h.parentNode);
          break;
        }
        h = h.parentNode;
      }
      switch (
      (a.isVideo
        ? ((k =
          b.pluginWidth > 0
            ? b.pluginWidth
            : b.videoWidth > 0
              ? b.videoWidth
              : null !== j.getAttribute("width")
                ? j.getAttribute("width")
                : b.defaultVideoWidth),
          (l =
            b.pluginHeight > 0
              ? b.pluginHeight
              : b.videoHeight > 0
                ? b.videoHeight
                : null !== j.getAttribute("height")
                  ? j.getAttribute("height")
                  : b.defaultVideoHeight),
          (k = mejs.Utility.encodeUrl(k)),
          (l = mejs.Utility.encodeUrl(l)))
        : b.enablePluginDebug && ((k = 320), (l = 240)),
        (n.success = b.success),
        mejs.MediaPluginBridge.registerPluginElement(m, n, j),
        (o.className = "me-plugin"),
        (o.id = m + "_container"),
        a.isVideo
          ? j.parentNode.insertBefore(o, j)
          : document.body.insertBefore(o, document.body.childNodes[0]),
        (i = [
          "id=" + m,
          "jsinitfunction=mejs.MediaPluginBridge.initPlugin",
          "jscallbackfunction=mejs.MediaPluginBridge.fireEvent",
          "isvideo=" + (a.isVideo ? "true" : "false"),
          "autoplay=" + (d ? "true" : "false"),
          "preload=" + e,
          "width=" + k,
          "startvolume=" + b.startVolume,
          "timerrate=" + b.timerRate,
          "flashstreamer=" + b.flashStreamer,
          "height=" + l,
          "pseudostreamstart=" + b.pseudoStreamingStartQueryParam,
        ]),
        null !== a.url &&
        ("flash" == a.method
          ? i.push("file=" + mejs.Utility.encodeUrl(a.url))
          : i.push("file=" + a.url)),
        b.enablePluginDebug && i.push("debug=true"),
        b.enablePluginSmoothing && i.push("smoothing=true"),
        b.enablePseudoStreaming && i.push("pseudostreaming=true"),
        f && i.push("controls=true"),
        b.pluginVars && (i = i.concat(b.pluginVars)),
        a.method)
      ) {
        case "silverlight":
          o.innerHTML =
            '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' +
            m +
            '" name="' +
            m +
            '" width="' +
            k +
            '" height="' +
            l +
            '" class="mejs-shim"><param name="initParams" value="' +
            i.join(",") +
            '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' +
            b.pluginPath +
            b.silverlightName +
            '" /></object>';
          break;
        case "flash":
          mejs.MediaFeatures.isIE
            ? ((g = document.createElement("div")),
              o.appendChild(g),
              (g.outerHTML =
                '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' +
                m +
                '" width="' +
                k +
                '" height="' +
                l +
                '" class="mejs-shim"><param name="movie" value="' +
                b.pluginPath +
                b.flashName +
                "?x=" +
                new Date() +
                '" /><param name="flashvars" value="' +
                i.join("&amp;") +
                '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' +
                b.flashScriptAccess +
                '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'))
            : (o.innerHTML =
              '<embed id="' +
              m +
              '" name="' +
              m +
              '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' +
              b.flashScriptAccess +
              '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' +
              b.pluginPath +
              b.flashName +
              '" flashvars="' +
              i.join("&") +
              '" width="' +
              k +
              '" height="' +
              l +
              '" scale="default"class="mejs-shim"></embed>');
          break;
        case "youtube":
          var r;
          -1 != a.url.lastIndexOf("youtu.be")
            ? ((r = a.url.substr(a.url.lastIndexOf("/") + 1)),
              -1 != r.indexOf("?") && (r = r.substr(0, r.indexOf("?"))))
            : (r = a.url.substr(a.url.lastIndexOf("=") + 1)),
            (youtubeSettings = {
              container: o,
              containerId: o.id,
              pluginMediaElement: n,
              pluginId: m,
              videoId: r,
              height: l,
              width: k,
            }),
            window.postMessage
              ? mejs.YouTubeApi.enqueueIframe(youtubeSettings)
              : mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) &&
              mejs.YouTubeApi.createFlash(youtubeSettings, b);
          break;
        case "vimeo":
          var s = m + "_player";
          if (
            ((n.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1)),
              (o.innerHTML =
                '<iframe src="//player.vimeo.com/video/' +
                n.vimeoid +
                "?api=1&portrait=0&byline=0&title=0&player_id=" +
                s +
                '" width="' +
                k +
                '" height="' +
                l +
                '" frameborder="0" class="mejs-shim" id="' +
                s +
                '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
              "function" == typeof $f)
          ) {
            var t = $f(o.childNodes[0]);
            t.addEvent("ready", function () {
              function a(a, b, c, d) {
                var e = {
                  type: c,
                  target: b,
                };
                "timeupdate" == c &&
                  ((b.currentTime = e.currentTime = d.seconds),
                    (b.duration = e.duration = d.duration)),
                  b.dispatchEvent(e);
              }
              (t.playVideo = function () {
                t.api("play");
              }),
                (t.stopVideo = function () {
                  t.api("unload");
                }),
                (t.pauseVideo = function () {
                  t.api("pause");
                }),
                (t.seekTo = function (a) {
                  t.api("seekTo", a);
                }),
                (t.setVolume = function (a) {
                  t.api("setVolume", a);
                }),
                (t.setMuted = function (a) {
                  a
                    ? ((t.lastVolume = t.api("getVolume")),
                      t.api("setVolume", 0))
                    : (t.api("setVolume", t.lastVolume), delete t.lastVolume);
                }),
                t.addEvent("play", function () {
                  a(t, n, "play"), a(t, n, "playing");
                }),
                t.addEvent("pause", function () {
                  a(t, n, "pause");
                }),
                t.addEvent("finish", function () {
                  a(t, n, "ended");
                }),
                t.addEvent("playProgress", function (b) {
                  a(t, n, "timeupdate", b);
                }),
                (n.pluginElement = o),
                (n.pluginApi = t),
                mejs.MediaPluginBridge.initPlugin(m);
            });
          } else
            console.warn("You need to include froogaloop for vimeo to work");
      }
      return (j.style.display = "none"), j.removeAttribute("autoplay"), n;
    },
    updateNative: function (a, b, c, d) {
      var e,
        f = a.htmlMediaElement;
      for (e in mejs.HtmlMediaElement) f[e] = mejs.HtmlMediaElement[e];
      return b.success(f, f), f;
    },
  }),
  (mejs.YouTubeApi = {
    isIframeStarted: !1,
    isIframeLoaded: !1,
    loadIframeApi: function () {
      if (!this.isIframeStarted) {
        var a = document.createElement("script");
        a.src = "//www.youtube.com/player_api";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b), (this.isIframeStarted = !0);
      }
    },
    iframeQueue: [],
    enqueueIframe: function (a) {
      this.isLoaded
        ? this.createIframe(a)
        : (this.loadIframeApi(), this.iframeQueue.push(a));
    },
    createIframe: function (a) {
      var b = a.pluginMediaElement,
        c = new YT.Player(a.containerId, {
          height: a.height,
          width: a.width,
          videoId: a.videoId,
          playerVars: {
            controls: 0,
            wmode: "transparent",
          },
          events: {
            onReady: function () {
              (c.setVideoSize = function (a, b) {
                c.setSize(a, b);
              }),
                (a.pluginMediaElement.pluginApi = c),
                (a.pluginMediaElement.pluginElement = document.getElementById(
                  a.containerId
                )),
                mejs.MediaPluginBridge.initPlugin(a.pluginId),
                setInterval(function () {
                  mejs.YouTubeApi.createEvent(c, b, "timeupdate");
                }, 250);
            },
            onStateChange: function (a) {
              mejs.YouTubeApi.handleStateChange(a.data, c, b);
            },
          },
        });
    },
    createEvent: function (a, b, c) {
      var d = {
        type: c,
        target: b,
      };
      if (a && a.getDuration) {
        (b.currentTime = d.currentTime = a.getCurrentTime()),
          (b.duration = d.duration = a.getDuration()),
          (d.paused = b.paused),
          (d.ended = b.ended),
          (d.muted = a.isMuted()),
          (d.volume = a.getVolume() / 100),
          (d.bytesTotal = a.getVideoBytesTotal()),
          (d.bufferedBytes = a.getVideoBytesLoaded());
        var e = (d.bufferedBytes / d.bytesTotal) * d.duration;
        d.target.buffered = d.buffered = {
          start: function (a) {
            return 0;
          },
          end: function (a) {
            return e;
          },
          length: 1,
        };
      }
      b.dispatchEvent(d);
    },
    iFrameReady: function () {
      for (
        this.isLoaded = !0, this.isIframeLoaded = !0;
        this.iframeQueue.length > 0;

      ) {
        var a = this.iframeQueue.pop();
        this.createIframe(a);
      }
    },
    flashPlayers: {},
    createFlash: function (a) {
      this.flashPlayers[a.pluginId] = a;
      var b,
        c =
          "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" +
          a.pluginId +
          "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
      mejs.MediaFeatures.isIE
        ? ((b = document.createElement("div")),
          a.container.appendChild(b),
          (b.outerHTML =
            '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' +
            a.pluginId +
            '" width="' +
            a.width +
            '" height="' +
            a.height +
            '" class="mejs-shim"><param name="movie" value="' +
            c +
            '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' +
            options.flashScriptAccess +
            '" /><param name="allowFullScreen" value="true" /></object>'))
        : (a.container.innerHTML =
          '<object type="application/x-shockwave-flash" id="' +
          a.pluginId +
          '" data="' +
          c +
          '" width="' +
          a.width +
          '" height="' +
          a.height +
          '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' +
          options.flashScriptAccess +
          '"><param name="wmode" value="transparent"></object>');
    },
    flashReady: function (a) {
      var b = this.flashPlayers[a],
        c = document.getElementById(a),
        d = b.pluginMediaElement;
      (d.pluginApi = d.pluginElement = c),
        mejs.MediaPluginBridge.initPlugin(a),
        c.cueVideoById(b.videoId);
      var e = b.containerId + "_callback";
      (window[e] = function (a) {
        mejs.YouTubeApi.handleStateChange(a, c, d);
      }),
        c.addEventListener("onStateChange", e),
        setInterval(function () {
          mejs.YouTubeApi.createEvent(c, d, "timeupdate");
        }, 250),
        mejs.YouTubeApi.createEvent(c, d, "canplay");
    },
    handleStateChange: function (a, b, c) {
      switch (a) {
        case -1:
          (c.paused = !0),
            (c.ended = !0),
            mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
          break;
        case 0:
          (c.paused = !1),
            (c.ended = !0),
            mejs.YouTubeApi.createEvent(b, c, "ended");
          break;
        case 1:
          (c.paused = !1),
            (c.ended = !1),
            mejs.YouTubeApi.createEvent(b, c, "play"),
            mejs.YouTubeApi.createEvent(b, c, "playing");
          break;
        case 2:
          (c.paused = !0),
            (c.ended = !1),
            mejs.YouTubeApi.createEvent(b, c, "pause");
          break;
        case 3:
          mejs.YouTubeApi.createEvent(b, c, "progress");
          break;
        case 5:
      }
    },
  }),
  (window.onYouTubePlayerAPIReady = function () {
    mejs.YouTubeApi.iFrameReady();
  }),
  (window.onYouTubePlayerReady = function (a) {
    mejs.YouTubeApi.flashReady(a);
  }),
  (window.mejs = mejs),
  (window.MediaElement = mejs.MediaElement),
  (function (a, b, c) {
    "use strict";
    var d = {
      locale: {
        language: (b.i18n && b.i18n.locale.language) || "",
        strings: (b.i18n && b.i18n.locale.strings) || {},
      },
      ietf_lang_regex: /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
      methods: {},
    };
    (d.getLanguage = function () {
      var a =
        d.locale.language ||
        window.navigator.userLanguage ||
        window.navigator.language;
      return d.ietf_lang_regex.exec(a) ? a : null;
    }),
      "undefined" != typeof mejsL10n && (d.locale.language = mejsL10n.language),
      (d.methods.checkPlain = function (a) {
        var b,
          c,
          d = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;",
          };
        a = String(a);
        for (b in d)
          d.hasOwnProperty(b) &&
            ((c = new RegExp(b, "g")), (a = a.replace(c, d[b])));
        return a;
      }),
      (d.methods.t = function (a, b) {
        return (
          d.locale.strings &&
          d.locale.strings[b.context] &&
          d.locale.strings[b.context][a] &&
          (a = d.locale.strings[b.context][a]),
          d.methods.checkPlain(a)
        );
      }),
      (d.t = function (a, b) {
        if ("string" == typeof a && a.length > 0) {
          var c = d.getLanguage();
          return (
            (b = b || {
              context: c,
            }),
            d.methods.t(a, b)
          );
        }
        throw {
          name: "InvalidArgumentException",
          message: "First argument is either not a string or empty.",
        };
      }),
      (b.i18n = d);
  })(document, mejs),
  (function (a, b) {
    "use strict";
    "undefined" != typeof mejsL10n && (a[mejsL10n.language] = mejsL10n.strings);
  })(mejs.i18n.locale.strings),
  /*!
   *
   * MediaElementPlayer
   * http://mediaelementjs.com/
   *
   * Creates a controller bar for HTML5 <video> add <audio> tags
   * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
   *
   * Copyright 2010-2013, John Dyer (http://j.hn/)
   * License: MIT
   *
   */
  "undefined" != typeof jQuery
    ? (mejs.$ = jQuery)
    : "undefined" != typeof Zepto
      ? ((mejs.$ = Zepto),
        (Zepto.fn.outerWidth = function (a) {
          var b = $(this).width();
          return (
            a &&
            ((b += parseInt($(this).css("margin-right"), 10)),
              (b += parseInt($(this).css("margin-left"), 10))),
            b
          );
        }))
      : "undefined" != typeof ender && (mejs.$ = ender),
  (function (a) {
    (mejs.MepDefaults = {
      poster: "",
      showPosterWhenEnded: !1,
      defaultVideoWidth: 480,
      defaultVideoHeight: 270,
      videoWidth: -1,
      videoHeight: -1,
      defaultAudioWidth: 400,
      defaultAudioHeight: 30,
      defaultSeekBackwardInterval: function (a) {
        return 0.05 * a.duration;
      },
      defaultSeekForwardInterval: function (a) {
        return 0.05 * a.duration;
      },
      setDimensions: !0,
      audioWidth: -1,
      audioHeight: -1,
      startVolume: 0.8,
      loop: !1,
      autoRewind: !0,
      enableAutosize: !0,
      timeFormat: "",
      alwaysShowHours: !1,
      showTimecodeFrameCount: !1,
      framesPerSecond: 25,
      autosizeProgress: !0,
      alwaysShowControls: !1,
      hideVideoControlsOnLoad: !1,
      clickToPlayPause: !0,
      iPadUseNativeControls: !1,
      iPhoneUseNativeControls: !1,
      AndroidUseNativeControls: !1,
      features: [
        "playpause",
        "current",
        "progress",
        "duration",
        "tracks",
        "volume",
        "fullscreen",
      ],
      isVideo: !0,
      enableKeyboard: !0,
      pauseOtherPlayers: !0,
      keyActions: [
        {
          keys: [32, 179],
          action: function (a, b) {
            b.paused || b.ended ? b.play() : b.pause();
          },
        },
        {
          keys: [38],
          action: function (a, b) {
            a.container.find(".mejs-volume-slider").css("display", "block"),
              a.isVideo && (a.showControls(), a.startControlsTimer());
            var c = Math.min(b.volume + 0.1, 1);
            b.setVolume(c);
          },
        },
        {
          keys: [40],
          action: function (a, b) {
            a.container.find(".mejs-volume-slider").css("display", "block"),
              a.isVideo && (a.showControls(), a.startControlsTimer());
            var c = Math.max(b.volume - 0.1, 0);
            b.setVolume(c);
          },
        },
        {
          keys: [37, 227],
          action: function (a, b) {
            if (!isNaN(b.duration) && b.duration > 0) {
              a.isVideo && (a.showControls(), a.startControlsTimer());
              var c = Math.max(
                b.currentTime - a.options.defaultSeekBackwardInterval(b),
                0
              );
              b.setCurrentTime(c);
            }
          },
        },
        {
          keys: [39, 228],
          action: function (a, b) {
            if (!isNaN(b.duration) && b.duration > 0) {
              a.isVideo && (a.showControls(), a.startControlsTimer());
              var c = Math.min(
                b.currentTime + a.options.defaultSeekForwardInterval(b),
                b.duration
              );
              b.setCurrentTime(c);
            }
          },
        },
        {
          keys: [70],
          action: function (a, b) {
            "undefined" != typeof a.enterFullScreen &&
              (a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen());
          },
        },
        {
          keys: [77],
          action: function (a, b) {
            a.container.find(".mejs-volume-slider").css("display", "block"),
              a.isVideo && (a.showControls(), a.startControlsTimer()),
              a.media.muted ? a.setMuted(!1) : a.setMuted(!0);
          },
        },
      ],
    }),
      (mejs.mepIndex = 0),
      (mejs.players = {}),
      (mejs.MediaElementPlayer = function (b, c) {
        if (!(this instanceof mejs.MediaElementPlayer))
          return new mejs.MediaElementPlayer(b, c);
        var d = this;
        return (
          (d.$media = d.$node = a(b)),
          (d.node = d.media = d.$media[0]),
          d.node
            ? "undefined" != typeof d.node.player
              ? d.node.player
              : ("undefined" == typeof c && (c = d.$node.data("mejsoptions")),
                (d.options = a.extend({}, mejs.MepDefaults, c)),
                d.options.timeFormat ||
                ((d.options.timeFormat = "mm:ss"),
                  d.options.alwaysShowHours &&
                  (d.options.timeFormat = "hh:mm:ss"),
                  d.options.showTimecodeFrameCount &&
                  (d.options.timeFormat += ":ff")),
                mejs.Utility.calculateTimeFormat(
                  0,
                  d.options,
                  d.options.framesPerSecond || 25
                ),
                (d.id = "mep_" + mejs.mepIndex++),
                (mejs.players[d.id] = d),
                d.init(),
                d)
            : void 0
        );
      }),
      (mejs.MediaElementPlayer.prototype = {
        hasFocus: !1,
        controlsAreVisible: !0,
        init: function () {
          var b = this,
            c = mejs.MediaFeatures,
            d = a.extend(!0, {}, b.options, {
              success: function (a, c) {
                b.meReady(a, c);
              },
              error: function (a) {
                b.handleError(a);
              },
            }),
            e = b.media.tagName.toLowerCase();
          if (
            ((b.isDynamic = "audio" !== e && "video" !== e),
              b.isDynamic
                ? (b.isVideo = b.options.isVideo)
                : (b.isVideo = "audio" !== e && b.options.isVideo),
              (c.isiPad && b.options.iPadUseNativeControls) ||
              (c.isiPhone && b.options.iPhoneUseNativeControls))
          )
            b.$media.attr("controls", "controls"),
              c.isiPad && null !== b.media.getAttribute("autoplay") && b.play();
          else if (c.isAndroid && b.options.AndroidUseNativeControls);
          else {
            b.$media.removeAttr("controls");
            var f = b.isVideo
              ? mejs.i18n.t("Video Player")
              : mejs.i18n.t("Audio Player");
            a('<span class="mejs-offscreen">' + f + "</span>").insertBefore(
              b.$media
            ),
              (b.container = a(
                '<div id="' +
                b.id +
                '" class="mejs-container ' +
                (mejs.MediaFeatures.svgAsImg ? "svg" : "no-svg") +
                '" tabindex="0" role="application" aria-label="' +
                f +
                '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>'
              )
                .addClass(b.$media[0].className)
                .insertBefore(b.$media)
                .focus(function (a) {
                  if (!b.controlsAreVisible) {
                    b.showControls(!0);
                    var c = b.container.find(".mejs-playpause-button > button");
                    c.focus();
                  }
                })),
              b.container.addClass(
                (c.isAndroid ? "mejs-android " : "") +
                (c.isiOS ? "mejs-ios " : "") +
                (c.isiPad ? "mejs-ipad " : "") +
                (c.isiPhone ? "mejs-iphone " : "") +
                (b.isVideo ? "mejs-video " : "mejs-audio ")
              ),
              b.container.find(".mejs-mediaelement").append(b.$media),
              (b.node.player = b),
              (b.controls = b.container.find(".mejs-controls")),
              (b.layers = b.container.find(".mejs-layers"));
            var g = b.isVideo ? "video" : "audio",
              h = g.substring(0, 1).toUpperCase() + g.substring(1);
            b.options[g + "Width"] > 0 ||
              b.options[g + "Width"].toString().indexOf("%") > -1
              ? (b.width = b.options[g + "Width"])
              : "" !== b.media.style.width && null !== b.media.style.width
                ? (b.width = b.media.style.width)
                : null !== b.media.getAttribute("width")
                  ? (b.width = b.$media.attr("width"))
                  : (b.width = b.options["default" + h + "Width"]),
              b.options[g + "Height"] > 0 ||
                b.options[g + "Height"].toString().indexOf("%") > -1
                ? (b.height = b.options[g + "Height"])
                : "" !== b.media.style.height && null !== b.media.style.height
                  ? (b.height = b.media.style.height)
                  : null !== b.$media[0].getAttribute("height")
                    ? (b.height = b.$media.attr("height"))
                    : (b.height = b.options["default" + h + "Height"]),
              b.setPlayerSize(b.width, b.height),
              (d.pluginWidth = b.width),
              (d.pluginHeight = b.height);
          }
          mejs.MediaElement(b.$media[0], d),
            "undefined" != typeof b.container &&
            b.controlsAreVisible &&
            b.container.trigger("controlsshown");
        },
        showControls: function (a) {
          var b = this;
          (a = "undefined" == typeof a || a),
            b.controlsAreVisible ||
            (a
              ? (b.controls
                .removeClass("mejs-offscreen")
                .stop(!0, !0)
                .fadeIn(200, function () {
                  (b.controlsAreVisible = !0),
                    b.container.trigger("controlsshown");
                }),
                b.container
                  .find(".mejs-control")
                  .removeClass("mejs-offscreen")
                  .stop(!0, !0)
                  .fadeIn(200, function () {
                    b.controlsAreVisible = !0;
                  }))
              : (b.controls
                .removeClass("mejs-offscreen")
                .css("display", "block"),
                b.container
                  .find(".mejs-control")
                  .removeClass("mejs-offscreen")
                  .css("display", "block"),
                (b.controlsAreVisible = !0),
                b.container.trigger("controlsshown")),
              b.setControlsSize());
        },
        hideControls: function (b) {
          var c = this;
          (b = "undefined" == typeof b || b),
            !c.controlsAreVisible ||
            c.options.alwaysShowControls ||
            c.keyboardAction ||
            (b
              ? (c.controls.stop(!0, !0).fadeOut(200, function () {
                a(this).addClass("mejs-offscreen").css("display", "block"),
                  (c.controlsAreVisible = !1),
                  c.container.trigger("controlshidden");
              }),
                c.container
                  .find(".mejs-control")
                  .stop(!0, !0)
                  .fadeOut(200, function () {
                    a(this)
                      .addClass("mejs-offscreen")
                      .css("display", "block");
                  }))
              : (c.controls
                .addClass("mejs-offscreen")
                .css("display", "block"),
                c.container
                  .find(".mejs-control")
                  .addClass("mejs-offscreen")
                  .css("display", "block"),
                (c.controlsAreVisible = !1),
                c.container.trigger("controlshidden")));
        },
        controlsTimer: null,
        startControlsTimer: function (a) {
          var b = this;
          (a = "undefined" != typeof a ? a : 1500),
            b.killControlsTimer("start"),
            (b.controlsTimer = setTimeout(function () {
              b.hideControls(), b.killControlsTimer("hide");
            }, a));
        },
        killControlsTimer: function (a) {
          var b = this;
          null !== b.controlsTimer &&
            (clearTimeout(b.controlsTimer),
              delete b.controlsTimer,
              (b.controlsTimer = null));
        },
        controlsEnabled: !0,
        disableControls: function () {
          var a = this;
          a.killControlsTimer(),
            a.hideControls(!1),
            (this.controlsEnabled = !1);
        },
        enableControls: function () {
          var a = this;
          a.showControls(!1), (a.controlsEnabled = !0);
        },
        meReady: function (b, c) {
          var d,
            e,
            f = this,
            g = mejs.MediaFeatures,
            h = c.getAttribute("autoplay"),
            i = !("undefined" == typeof h || null === h || "false" === h);
          if (!f.created) {
            if (
              ((f.created = !0),
                (f.media = b),
                (f.domNode = c),
                !(
                  (g.isAndroid && f.options.AndroidUseNativeControls) ||
                  (g.isiPad && f.options.iPadUseNativeControls) ||
                  (g.isiPhone && f.options.iPhoneUseNativeControls)
                ))
            ) {
              f.buildposter(f, f.controls, f.layers, f.media),
                f.buildkeyboard(f, f.controls, f.layers, f.media),
                f.buildoverlays(f, f.controls, f.layers, f.media),
                f.findTracks();
              for (d in f.options.features)
                if (((e = f.options.features[d]), f["build" + e]))
                  try {
                    f["build" + e](f, f.controls, f.layers, f.media);
                  } catch (j) { }
              f.container.trigger("controlsready"),
                f.setPlayerSize(f.width, f.height),
                f.setControlsSize(),
                f.isVideo &&
                (mejs.MediaFeatures.hasTouch
                  ? f.$media.bind("touchstart", function () {
                    f.controlsAreVisible
                      ? f.hideControls(!1)
                      : f.controlsEnabled && f.showControls(!1);
                  })
                  : ((f.clickToPlayPauseCallback = function () {
                    f.options.clickToPlayPause &&
                      (f.media.paused ? f.play() : f.pause());
                  }),
                    f.media.addEventListener(
                      "click",
                      f.clickToPlayPauseCallback,
                      !1
                    ),
                    f.container
                      .bind("mouseenter", function () {
                        f.controlsEnabled &&
                          (f.options.alwaysShowControls ||
                            (f.killControlsTimer("enter"),
                              f.showControls(),
                              f.startControlsTimer(2500)));
                      })
                      .bind("mousemove", function () {
                        f.controlsEnabled &&
                          (f.controlsAreVisible || f.showControls(),
                            f.options.alwaysShowControls ||
                            f.startControlsTimer(2500));
                      })
                      .bind("mouseleave", function () {
                        f.controlsEnabled &&
                          (f.media.paused ||
                            f.options.alwaysShowControls ||
                            f.startControlsTimer(1e3));
                      })),
                  f.options.hideVideoControlsOnLoad && f.hideControls(!1),
                  i && !f.options.alwaysShowControls && f.hideControls(),
                  f.options.enableAutosize &&
                  f.media.addEventListener(
                    "loadedmetadata",
                    function (a) {
                      f.options.videoHeight <= 0 &&
                        null === f.domNode.getAttribute("height") &&
                        !isNaN(a.target.videoHeight) &&
                        (f.setPlayerSize(
                          a.target.videoWidth,
                          a.target.videoHeight
                        ),
                          f.setControlsSize(),
                          f.media.setVideoSize(
                            a.target.videoWidth,
                            a.target.videoHeight
                          ));
                    },
                    !1
                  )),
                b.addEventListener(
                  "play",
                  function () {
                    var a;
                    for (a in mejs.players) {
                      var b = mejs.players[a];
                      b.id == f.id ||
                        !f.options.pauseOtherPlayers ||
                        b.paused ||
                        b.ended ||
                        b.pause(),
                        (b.hasFocus = !1);
                    }
                    f.hasFocus = !0;
                  },
                  !1
                ),
                f.media.addEventListener(
                  "ended",
                  function (b) {
                    if (f.options.autoRewind)
                      try {
                        f.media.setCurrentTime(0),
                          window.setTimeout(function () {
                            a(f.container)
                              .find(".mejs-overlay-loading")
                              .parent()
                              .hide();
                          }, 20);
                      } catch (c) { }
                    f.media.pause(),
                      f.setProgressRail && f.setProgressRail(),
                      f.setCurrentRail && f.setCurrentRail(),
                      f.options.loop
                        ? f.play()
                        : !f.options.alwaysShowControls &&
                        f.controlsEnabled &&
                        f.showControls();
                  },
                  !1
                ),
                f.media.addEventListener(
                  "loadedmetadata",
                  function (a) {
                    f.updateDuration && f.updateDuration(),
                      f.updateCurrent && f.updateCurrent(),
                      f.isFullScreen ||
                      (f.setPlayerSize(f.width, f.height),
                        f.setControlsSize());
                  },
                  !1
                );
              var k = null;
              f.media.addEventListener(
                "timeupdate",
                function () {
                  k !== this.duration &&
                    ((k = this.duration),
                      mejs.Utility.calculateTimeFormat(
                        k,
                        f.options,
                        f.options.framesPerSecond || 25
                      ));
                },
                !1
              ),
                f.container.focusout(function (b) {
                  if (b.relatedTarget) {
                    var c = a(b.relatedTarget);
                    f.keyboardAction &&
                      0 === c.parents(".mejs-container").length &&
                      ((f.keyboardAction = !1), f.hideControls(!0));
                  }
                }),
                setTimeout(function () {
                  f.setPlayerSize(f.width, f.height), f.setControlsSize();
                }, 50),
                f.globalBind("resize", function () {
                  f.isFullScreen ||
                    (mejs.MediaFeatures.hasTrueNativeFullScreen &&
                      document.webkitIsFullScreen) ||
                    f.setPlayerSize(f.width, f.height),
                    f.setControlsSize();
                }),
                "youtube" == f.media.pluginType &&
                (g.isiOS || g.isAndroid) &&
                f.container.find(".mejs-overlay-play").hide();
            }
            i && "native" == b.pluginType && f.play(),
              f.options.success &&
              ("string" == typeof f.options.success
                ? window[f.options.success](f.media, f.domNode, f)
                : f.options.success(f.media, f.domNode, f));
          }
        },
        handleError: function (a) {
          var b = this;
          b.controls && b.controls.hide(),
            b.options.error && b.options.error(a);
        },
        setPlayerSize: function (b, c) {
          var d = this;
          if (!d.options.setDimensions) return !1;
          if (
            ("undefined" != typeof b && (d.width = b),
              "undefined" != typeof c && (d.height = c),
              d.height.toString().indexOf("%") > 0 ||
              ("none" !== d.$node.css("max-width") &&
                "t.width" !== d.$node.css("max-width")) ||
              (d.$node[0].currentStyle &&
                "100%" === d.$node[0].currentStyle.maxWidth))
          ) {
            var e = (function () {
              return d.isVideo
                ? d.media.videoWidth && d.media.videoWidth > 0
                  ? d.media.videoWidth
                  : null !== d.media.getAttribute("width")
                    ? d.media.getAttribute("width")
                    : d.options.defaultVideoWidth
                : d.options.defaultAudioWidth;
            })(),
              f = (function () {
                return d.isVideo
                  ? d.media.videoHeight && d.media.videoHeight > 0
                    ? d.media.videoHeight
                    : null !== d.media.getAttribute("height")
                      ? d.media.getAttribute("height")
                      : d.options.defaultVideoHeight
                  : d.options.defaultAudioHeight;
              })(),
              g = d.container.parent().closest(":visible").width(),
              h = d.container.parent().closest(":visible").height(),
              i =
                d.isVideo || !d.options.autosizeProgress
                  ? parseInt((g * f) / e, 10)
                  : f;
            isNaN(i) && (i = h),
              d.container.parent().length > 0 &&
              "body" === d.container.parent()[0].tagName.toLowerCase() &&
              ((g = a(window).width()), (i = a(window).height())),
              i &&
              g &&
              (d.container.width(g).height(i),
                d.$media
                  .add(d.container.find(".mejs-shim"))
                  .width("100%")
                  .height("100%"),
                d.isVideo && d.media.setVideoSize && d.media.setVideoSize(g, i),
                d.layers.children(".mejs-layer").width("100%").height("100%"));
          } else
            d.container.width(d.width).height(d.height),
              d.layers.children(".mejs-layer").width(d.width).height(d.height);
        },
        setControlsSize: function () {
          var b = this,
            c = 0,
            d = 0,
            e = b.controls.find(".mejs-time-rail"),
            f = b.controls.find(".mejs-time-total"),
            g = e.siblings(),
            h = g.last(),
            i = null;
          if (b.container.is(":visible") && e.length && e.is(":visible")) {
            b.options &&
              !b.options.autosizeProgress &&
              (d = parseInt(e.css("width"), 10)),
              (0 !== d && d) ||
              (g.each(function () {
                var b = a(this);
                "absolute" != b.css("position") &&
                  b.is(":visible") &&
                  (c += a(this).outerWidth(!0));
              }),
                (d = b.controls.width() - c - (e.outerWidth(!0) - e.width())));
            do
              e.width(d),
                f.width(d - (f.outerWidth(!0) - f.width())),
                "absolute" != h.css("position") &&
                ((i = h.length ? h.position() : null), d--);
            while (null !== i && i.top > 0 && d > 0);
            b.container.trigger("controlsresize");
          }
        },
        buildposter: function (b, c, d, e) {
          var f = this,
            g = a('<div class="mejs-poster mejs-layer"></div>').appendTo(d),
            h = b.$media.attr("poster");
          "" !== b.options.poster && (h = b.options.poster),
            h ? f.setPoster(h) : g.hide(),
            e.addEventListener(
              "play",
              function () {
                g.hide();
              },
              !1
            ),
            b.options.showPosterWhenEnded &&
            b.options.autoRewind &&
            e.addEventListener(
              "ended",
              function () {
                g.show();
              },
              !1
            );
        },
        setPoster: function (b) {
          var c = this,
            d = c.container.find(".mejs-poster"),
            e = d.find("img");
          0 === e.length &&
            (e = a('<img width="100%" height="100%" alt="" />').appendTo(d)),
            e.attr("src", b),
            d.css({
              "background-image": "url(" + b + ")",
            });
        },
        buildoverlays: function (b, c, d, e) {
          var f = this;
          if (b.isVideo) {
            var g = a(
              '<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>'
            )
              .hide()
              .appendTo(d),
              h = a(
                '<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>'
              )
                .hide()
                .appendTo(d),
              i = a(
                '<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>'
              )
                .appendTo(d)
                .bind("click", function () {
                  f.options.clickToPlayPause && e.paused && e.play();
                });
            e.addEventListener(
              "play",
              function () {
                i.hide(),
                  g.hide(),
                  c.find(".mejs-time-buffering").hide(),
                  h.hide();
              },
              !1
            ),
              e.addEventListener(
                "playing",
                function () {
                  i.hide(),
                    g.hide(),
                    c.find(".mejs-time-buffering").hide(),
                    h.hide();
                },
                !1
              ),
              e.addEventListener(
                "seeking",
                function () {
                  g.show(), c.find(".mejs-time-buffering").show();
                },
                !1
              ),
              e.addEventListener(
                "seeked",
                function () {
                  g.hide(), c.find(".mejs-time-buffering").hide();
                },
                !1
              ),
              e.addEventListener(
                "pause",
                function () {
                  mejs.MediaFeatures.isiPhone || i.show();
                },
                !1
              ),
              e.addEventListener(
                "waiting",
                function () {
                  g.show(), c.find(".mejs-time-buffering").show();
                },
                !1
              ),
              e.addEventListener(
                "loadeddata",
                function () {
                  g.show(),
                    c.find(".mejs-time-buffering").show(),
                    mejs.MediaFeatures.isAndroid &&
                    (e.canplayTimeout = window.setTimeout(function () {
                      if (document.createEvent) {
                        var a = document.createEvent("HTMLEvents");
                        return (
                          a.initEvent("canplay", !0, !0), e.dispatchEvent(a)
                        );
                      }
                    }, 300));
                },
                !1
              ),
              e.addEventListener(
                "canplay",
                function () {
                  g.hide(),
                    c.find(".mejs-time-buffering").hide(),
                    clearTimeout(e.canplayTimeout);
                },
                !1
              ),
              e.addEventListener(
                "error",
                function (a) {
                  f.handleError(a),
                    g.hide(),
                    i.hide(),
                    h.show(),
                    h
                      .find(".mejs-overlay-error")
                      .html("Error loading this resource");
                },
                !1
              ),
              e.addEventListener(
                "keydown",
                function (a) {
                  f.onkeydown(b, e, a);
                },
                !1
              );
          }
        },
        buildkeyboard: function (b, c, d, e) {
          var f = this;
          f.container.keydown(function () {
            f.keyboardAction = !0;
          }),
            f.globalBind("keydown", function (c) {
              return (
                (b.hasFocus =
                  0 !== a(c.target).closest(".mejs-container").length),
                f.onkeydown(b, e, c)
              );
            }),
            f.globalBind("click", function (c) {
              b.hasFocus = 0 !== a(c.target).closest(".mejs-container").length;
            });
        },
        onkeydown: function (a, b, c) {
          if (a.hasFocus && a.options.enableKeyboard)
            for (var d = 0, e = a.options.keyActions.length; e > d; d++)
              for (
                var f = a.options.keyActions[d], g = 0, h = f.keys.length;
                h > g;
                g++
              )
                if (c.keyCode == f.keys[g])
                  return (
                    "function" == typeof c.preventDefault && c.preventDefault(),
                    f.action(a, b, c.keyCode),
                    !1
                  );
          return !0;
        },
        findTracks: function () {
          var b = this,
            c = b.$media.find("track");
          (b.tracks = []),
            c.each(function (c, d) {
              (d = a(d)),
                b.tracks.push({
                  srclang: d.attr("srclang")
                    ? d.attr("srclang").toLowerCase()
                    : "",
                  src: d.attr("src"),
                  kind: d.attr("kind"),
                  label: d.attr("label") || "",
                  entries: [],
                  isLoaded: !1,
                });
            });
        },
        changeSkin: function (a) {
          (this.container[0].className = "mejs-container " + a),
            this.setPlayerSize(this.width, this.height),
            this.setControlsSize();
        },
        play: function () {
          this.load(), this.media.play();
        },
        pause: function () {
          try {
            this.media.pause();
          } catch (a) { }
        },
        load: function () {
          this.isLoaded || this.media.load(), (this.isLoaded = !0);
        },
        setMuted: function (a) {
          this.media.setMuted(a);
        },
        setCurrentTime: function (a) {
          this.media.setCurrentTime(a);
        },
        getCurrentTime: function () {
          return this.media.currentTime;
        },
        setVolume: function (a) {
          this.media.setVolume(a);
        },
        getVolume: function () {
          return this.media.volume;
        },
        setSrc: function (a) {
          this.media.setSrc(a);
        },
        remove: function () {
          var a,
            b,
            c = this;
          c.container.prev(".mejs-offscreen").remove();
          for (a in c.options.features)
            if (((b = c.options.features[a]), c["clean" + b]))
              try {
                c["clean" + b](c);
              } catch (d) { }
          c.isDynamic
            ? c.$node.insertBefore(c.container)
            : (c.$media.prop("controls", !0),
              c.$node.clone().insertBefore(c.container).show(),
              c.$node.remove()),
            "native" !== c.media.pluginType && c.media.remove(),
            delete mejs.players[c.id],
            "object" == typeof c.container && c.container.remove(),
            c.globalUnbind(),
            delete c.node.player;
        },
        rebuildtracks: function () {
          var a = this;
          a.findTracks(), a.buildtracks(a, a.controls, a.layers, a.media);
        },
        resetSize: function () {
          var a = this;
          setTimeout(function () {
            a.setPlayerSize(a.width, a.height), a.setControlsSize();
          }, 50);
        },
      }),
      (function () {
        function b(b, d) {
          var e = {
            d: [],
            w: [],
          };
          return (
            a.each((b || "").split(" "), function (a, b) {
              var f = b + "." + d;
              0 === f.indexOf(".")
                ? (e.d.push(f), e.w.push(f))
                : e[c.test(b) ? "w" : "d"].push(f);
            }),
            (e.d = e.d.join(" ")),
            (e.w = e.w.join(" ")),
            e
          );
        }
        var c =
          /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        (mejs.MediaElementPlayer.prototype.globalBind = function (c, d, e) {
          var f = this,
            g = f.node ? f.node.ownerDocument : document;
          (c = b(c, f.id)),
            c.d && a(g).bind(c.d, d, e),
            c.w && a(window).bind(c.w, d, e);
        }),
          (mejs.MediaElementPlayer.prototype.globalUnbind = function (c, d) {
            var e = this,
              f = e.node ? e.node.ownerDocument : document;
            (c = b(c, e.id)),
              c.d && a(f).unbind(c.d, d),
              c.w && a(window).unbind(c.w, d);
          });
      })(),
      "undefined" != typeof a &&
      ((a.fn.mediaelementplayer = function (b) {
        return (
          b === !1
            ? this.each(function () {
              var b = a(this).data("mediaelementplayer");
              b && b.remove(), a(this).removeData("mediaelementplayer");
            })
            : this.each(function () {
              a(this).data(
                "mediaelementplayer",
                new mejs.MediaElementPlayer(this, b)
              );
            }),
          this
        );
      }),
        a(document).ready(function () {
          a(".mejs-player").mediaelementplayer();
        })),
      (window.MediaElementPlayer = mejs.MediaElementPlayer);
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      playText: mejs.i18n.t("Play"),
      pauseText: mejs.i18n.t("Pause"),
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildplaypause: function (b, c, d, e) {
          function f(a) {
            "play" === a
              ? (i.removeClass("mejs-play").addClass("mejs-pause"),
                j.attr({
                  title: h.pauseText,
                  "aria-label": h.pauseText,
                }))
              : (i.removeClass("mejs-pause").addClass("mejs-play"),
                j.attr({
                  title: h.playText,
                  "aria-label": h.playText,
                }));
          }
          var g = this,
            h = g.options,
            i = a(
              '<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' +
              g.id +
              '" title="' +
              h.playText +
              '" aria-label="' +
              h.playText +
              '"></button></div>'
            )
              .appendTo(c)
              .click(function (a) {
                return a.preventDefault(), e.paused ? e.play() : e.pause(), !1;
              }),
            j = i.find("button");
          f("pse"),
            e.addEventListener(
              "play",
              function () {
                f("play");
              },
              !1
            ),
            e.addEventListener(
              "playing",
              function () {
                f("play");
              },
              !1
            ),
            e.addEventListener(
              "pause",
              function () {
                f("pse");
              },
              !1
            ),
            e.addEventListener(
              "paused",
              function () {
                f("pse");
              },
              !1
            );
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      stopText: "Stop",
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildstop: function (b, c, d, e) {
          var f = this;
          a(
            '<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' +
            f.id +
            '" title="' +
            f.options.stopText +
            '" aria-label="' +
            f.options.stopText +
            '"></button></div>'
          )
            .appendTo(c)
            .click(function () {
              e.paused || e.pause(),
                e.currentTime > 0 &&
                (e.setCurrentTime(0),
                  e.pause(),
                  c.find(".mejs-time-current").width("0px"),
                  c.find(".mejs-time-handle").css("left", "0px"),
                  c
                    .find(".mejs-time-float-current")
                    .html(mejs.Utility.secondsToTimeCode(0, b.options)),
                  c
                    .find(".mejs-currenttime")
                    .html(mejs.Utility.secondsToTimeCode(0, b.options)),
                  d.find(".mejs-poster").show());
            });
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      progessHelpText: mejs.i18n.t(
        "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds."
      ),
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildprogress: function (b, c, d, e) {
          a(
            '<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>'
          ).appendTo(c),
            c.find(".mejs-time-buffering").hide();
          var f = this,
            g = c.find(".mejs-time-total"),
            h = c.find(".mejs-time-loaded"),
            i = c.find(".mejs-time-current"),
            j = c.find(".mejs-time-handle"),
            k = c.find(".mejs-time-float"),
            l = c.find(".mejs-time-float-current"),
            m = c.find(".mejs-time-slider"),
            n = function (a) {
              var c,
                d = g.offset(),
                f = g.width(),
                h = 0,
                i = 0,
                j = 0;
              (c =
                a.originalEvent && a.originalEvent.changedTouches
                  ? a.originalEvent.changedTouches[0].pageX
                  : a.changedTouches
                    ? a.changedTouches[0].pageX
                    : a.pageX),
                e.duration &&
                (c < d.left
                  ? (c = d.left)
                  : c > f + d.left && (c = f + d.left),
                  (j = c - d.left),
                  (h = j / f),
                  (i = 0.02 >= h ? 0 : h * e.duration),
                  o && i !== e.currentTime && e.setCurrentTime(i),
                  mejs.MediaFeatures.hasTouch ||
                  (k.css("left", j),
                    l.html(mejs.Utility.secondsToTimeCode(i, b.options)),
                    k.show()));
            },
            o = !1,
            p = !1,
            q = 0,
            r = !1,
            s = b.options.autoRewind,
            t = function (a) {
              var c = e.currentTime,
                d = mejs.i18n.t("Time Slider"),
                f = mejs.Utility.secondsToTimeCode(c, b.options),
                g = e.duration;
              m.attr({
                "aria-label": d,
                "aria-valuemin": 0,
                "aria-valuemax": g,
                "aria-valuenow": c,
                "aria-valuetext": f,
                role: "slider",
                tabindex: 0,
              });
            },
            u = function () {
              var a = new Date();
              a - q >= 1e3 && e.play();
            };
          m.bind("focus", function (a) {
            b.options.autoRewind = !1;
          }),
            m.bind("blur", function (a) {
              b.options.autoRewind = s;
            }),
            m.bind("keydown", function (a) {
              new Date() - q >= 1e3 && (r = e.paused);
              var b = a.keyCode,
                c = e.duration,
                d = e.currentTime;
              switch (b) {
                case 37:
                  d -= 1;
                  break;
                case 39:
                  d += 1;
                  break;
                case 38:
                  d += Math.floor(0.1 * c);
                  break;
                case 40:
                  d -= Math.floor(0.1 * c);
                  break;
                case 36:
                  d = 0;
                  break;
                case 35:
                  d = c;
                  break;
                case 10:
                  return void (e.paused ? e.play() : e.pause());
                case 13:
                  return void (e.paused ? e.play() : e.pause());
                default:
                  return;
              }
              return (
                (d = 0 > d ? 0 : d >= c ? c : Math.floor(d)),
                (q = new Date()),
                r || e.pause(),
                d < e.duration && !r && setTimeout(u, 1100),
                e.setCurrentTime(d),
                a.preventDefault(),
                a.stopPropagation(),
                !1
              );
            }),
            g
              .bind("mousedown touchstart", function (a) {
                (1 === a.which || 0 === a.which) &&
                  ((o = !0),
                    n(a),
                    f.globalBind("mousemove.dur touchmove.dur", function (a) {
                      n(a);
                    }),
                    f.globalBind("mouseup.dur touchend.dur", function (a) {
                      (o = !1), k.hide(), f.globalUnbind(".dur");
                    }));
              })
              .bind("mouseenter", function (a) {
                (p = !0),
                  f.globalBind("mousemove.dur", function (a) {
                    n(a);
                  }),
                  mejs.MediaFeatures.hasTouch || k.show();
              })
              .bind("mouseleave", function (a) {
                (p = !1), o || (f.globalUnbind(".dur"), k.hide());
              }),
            e.addEventListener(
              "progress",
              function (a) {
                b.setProgressRail(a), b.setCurrentRail(a);
              },
              !1
            ),
            e.addEventListener(
              "timeupdate",
              function (a) {
                b.setProgressRail(a), b.setCurrentRail(a), t(a);
              },
              !1
            ),
            f.container.on("controlsresize", function () {
              b.setProgressRail(), b.setCurrentRail();
            }),
            (f.loaded = h),
            (f.total = g),
            (f.current = i),
            (f.handle = j);
        },
        setProgressRail: function (a) {
          var b = this,
            c = void 0 !== a ? a.target : b.media,
            d = null;
          c &&
            c.buffered &&
            c.buffered.length > 0 &&
            c.buffered.end &&
            c.duration
            ? (d = c.buffered.end(c.buffered.length - 1) / c.duration)
            : c &&
              void 0 !== c.bytesTotal &&
              c.bytesTotal > 0 &&
              void 0 !== c.bufferedBytes
              ? (d = c.bufferedBytes / c.bytesTotal)
              : a &&
              a.lengthComputable &&
              0 !== a.total &&
              (d = a.loaded / a.total),
            null !== d &&
            ((d = Math.min(1, Math.max(0, d))),
              b.loaded && b.total && b.loaded.width(b.total.width() * d));
        },
        setCurrentRail: function () {
          var a = this;
          if (
            void 0 !== a.media.currentTime &&
            a.media.duration &&
            a.total &&
            a.handle
          ) {
            var b = Math.round(
              (a.total.width() * a.media.currentTime) / a.media.duration
            ),
              c = b - Math.round(a.handle.outerWidth(!0) / 2);
            a.current.width(b), a.handle.css("left", c);
          }
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      duration: -1,
      timeAndDurationSeparator: "<span> | </span>",
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildcurrent: function (b, c, d, e) {
          var f = this;
          a(
            '<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' +
            mejs.Utility.secondsToTimeCode(0, b.options) +
            "</span></div>"
          ).appendTo(c),
            (f.currenttime = f.controls.find(".mejs-currenttime")),
            e.addEventListener(
              "timeupdate",
              function () {
                b.updateCurrent();
              },
              !1
            );
        },
        buildduration: function (b, c, d, e) {
          var f = this;
          c.children().last().find(".mejs-currenttime").length > 0
            ? a(
              f.options.timeAndDurationSeparator +
              '<span class="mejs-duration">' +
              mejs.Utility.secondsToTimeCode(
                f.options.duration,
                f.options
              ) +
              "</span>"
            ).appendTo(c.find(".mejs-time"))
            : (c
              .find(".mejs-currenttime")
              .parent()
              .addClass("mejs-currenttime-container"),
              a(
                '<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' +
                mejs.Utility.secondsToTimeCode(
                  f.options.duration,
                  f.options
                ) +
                "</span></div>"
              ).appendTo(c)),
            (f.durationD = f.controls.find(".mejs-duration")),
            e.addEventListener(
              "timeupdate",
              function () {
                b.updateDuration();
              },
              !1
            );
        },
        updateCurrent: function () {
          var a = this,
            b = a.media.currentTime;
          isNaN(b) && (b = 0),
            a.currenttime &&
            a.currenttime.html(mejs.Utility.secondsToTimeCode(b, a.options));
        },
        updateDuration: function () {
          var a = this,
            b = a.media.duration;
          a.options.duration > 0 && (b = a.options.duration),
            isNaN(b) && (b = 0),
            a.container.toggleClass("mejs-long-video", b > 3600),
            a.durationD &&
            b > 0 &&
            a.durationD.html(mejs.Utility.secondsToTimeCode(b, a.options));
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      muteText: mejs.i18n.t("Mute Toggle"),
      allyVolumeControlText: mejs.i18n.t(
        "Use Up/Down Arrow keys to increase or decrease volume."
      ),
      hideVolumeOnTouchDevices: !0,
      audioVolume: "horizontal",
      videoVolume: "vertical",
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildvolume: function (b, c, d, e) {
          if (
            (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS) ||
            !this.options.hideVolumeOnTouchDevices
          ) {
            var f = this,
              g = f.isVideo ? f.options.videoVolume : f.options.audioVolume,
              h =
                "horizontal" == g
                  ? a(
                    '<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' +
                    f.id +
                    '" title="' +
                    f.options.muteText +
                    '" aria-label="' +
                    f.options.muteText +
                    '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' +
                    f.options.allyVolumeControlText +
                    '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>'
                  ).appendTo(c)
                  : a(
                    '<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' +
                    f.id +
                    '" title="' +
                    f.options.muteText +
                    '" aria-label="' +
                    f.options.muteText +
                    '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' +
                    f.options.allyVolumeControlText +
                    '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>'
                  ).appendTo(c),
              i = f.container.find(
                ".mejs-volume-slider, .mejs-horizontal-volume-slider"
              ),
              j = f.container.find(
                ".mejs-volume-total, .mejs-horizontal-volume-total"
              ),
              k = f.container.find(
                ".mejs-volume-current, .mejs-horizontal-volume-current"
              ),
              l = f.container.find(
                ".mejs-volume-handle, .mejs-horizontal-volume-handle"
              ),
              m = function (a, b) {
                if (!i.is(":visible") && "undefined" == typeof b)
                  return i.show(), m(a, !0), void i.hide();
                (a = Math.max(0, a)),
                  (a = Math.min(a, 1)),
                  0 === a
                    ? (h.removeClass("mejs-mute").addClass("mejs-unmute"),
                      h
                        .children("button")
                        .attr("title", mejs.i18n.t("Unmute"))
                        .attr("aria-label", mejs.i18n.t("Unmute")))
                    : (h.removeClass("mejs-unmute").addClass("mejs-mute"),
                      h
                        .children("button")
                        .attr("title", mejs.i18n.t("Mute"))
                        .attr("aria-label", mejs.i18n.t("Mute")));
                var c = j.position();
                if ("vertical" == g) {
                  var d = j.height(),
                    e = d - d * a;
                  l.css("top", Math.round(c.top + e - l.height() / 2)),
                    k.height(d - e),
                    k.css("top", c.top + e);
                } else {
                  var f = j.width(),
                    n = f * a;
                  l.css("left", Math.round(c.left + n - l.width() / 2)),
                    k.width(Math.round(n));
                }
              },
              n = function (a) {
                var b = null,
                  c = j.offset();
                if ("vertical" === g) {
                  var d = j.height(),
                    f = a.pageY - c.top;
                  if (((b = (d - f) / d), 0 === c.top || 0 === c.left)) return;
                } else {
                  var h = j.width(),
                    i = a.pageX - c.left;
                  b = i / h;
                }
                (b = Math.max(0, b)),
                  (b = Math.min(b, 1)),
                  m(b),
                  0 === b ? e.setMuted(!0) : e.setMuted(!1),
                  e.setVolume(b);
              },
              o = !1,
              p = !1;
            h.hover(
              function () {
                i.show(), (p = !0);
              },
              function () {
                (p = !1), o || "vertical" != g || i.hide();
              }
            );
            var q = function (a) {
              var b = Math.floor(100 * e.volume);
              i.attr({
                "aria-label": mejs.i18n.t("volumeSlider"),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": b,
                "aria-valuetext": b + "%",
                role: "slider",
                tabindex: 0,
              });
            };
            i
              .bind("mouseover", function () {
                p = !0;
              })
              .bind("mousedown", function (a) {
                return (
                  n(a),
                  f.globalBind("mousemove.vol", function (a) {
                    n(a);
                  }),
                  f.globalBind("mouseup.vol", function () {
                    (o = !1),
                      f.globalUnbind(".vol"),
                      p || "vertical" != g || i.hide();
                  }),
                  (o = !0),
                  !1
                );
              })
              .bind("keydown", function (a) {
                var b = a.keyCode,
                  c = e.volume;
                switch (b) {
                  case 38:
                    c += 0.1;
                    break;
                  case 40:
                    c -= 0.1;
                    break;
                  default:
                    return !0;
                }
                return (o = !1), m(c), e.setVolume(c), !1;
              }),
              h.find("button").click(function () {
                e.setMuted(!e.muted);
              }),
              h.find("button").bind("focus", function () {
                i.show();
              }),
              e.addEventListener(
                "volumechange",
                function (a) {
                  o ||
                    (e.muted
                      ? (m(0),
                        h.removeClass("mejs-mute").addClass("mejs-unmute"))
                      : (m(e.volume),
                        h.removeClass("mejs-unmute").addClass("mejs-mute"))),
                    q(a);
                },
                !1
              ),
              0 === b.options.startVolume && e.setMuted(!0),
              "native" === e.pluginType && e.setVolume(b.options.startVolume),
              f.container.on("controlsresize", function () {
                m(e.volume);
              });
          }
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      usePluginFullScreen: !0,
      newWindowCallback: function () {
        return "";
      },
      fullscreenText: mejs.i18n.t("Fullscreen"),
    }),
      a.extend(MediaElementPlayer.prototype, {
        isFullScreen: !1,
        isNativeFullScreen: !1,
        isInIframe: !1,
        fullscreenMode: "",
        buildfullscreen: function (b, c, d, e) {
          if (b.isVideo) {
            (b.isInIframe = window.location != window.parent.location),
              e.addEventListener("play", function () {
                b.detectFullscreenMode();
              });
            var f = this,
              g = null,
              h = a(
                '<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' +
                f.id +
                '" title="' +
                f.options.fullscreenText +
                '" aria-label="' +
                f.options.fullscreenText +
                '"></button></div>'
              )
                .appendTo(c)
                .on("click", function () {
                  var a =
                    (mejs.MediaFeatures.hasTrueNativeFullScreen &&
                      mejs.MediaFeatures.isFullScreen()) ||
                    b.isFullScreen;
                  a ? b.exitFullScreen() : b.enterFullScreen();
                })
                .on("mouseover", function () {
                  if ("plugin-hover" == f.fullscreenMode) {
                    null !== g && (clearTimeout(g), delete g);
                    var a = h.offset(),
                      c = b.container.offset();
                    e.positionFullscreenButton(
                      a.left - c.left,
                      a.top - c.top,
                      !0
                    );
                  }
                })
                .on("mouseout", function () {
                  "plugin-hover" == f.fullscreenMode &&
                    (null !== g && (clearTimeout(g), delete g),
                      (g = setTimeout(function () {
                        e.hideFullscreenButton();
                      }, 1500)));
                });
            if (
              ((b.fullscreenBtn = h),
                f.globalBind("keydown", function (a) {
                  27 == a.keyCode &&
                    ((mejs.MediaFeatures.hasTrueNativeFullScreen &&
                      mejs.MediaFeatures.isFullScreen()) ||
                      f.isFullScreen) &&
                    b.exitFullScreen();
                }),
                (f.normalHeight = 0),
                (f.normalWidth = 0),
                mejs.MediaFeatures.hasTrueNativeFullScreen)
            ) {
              var i = function (a) {
                b.isFullScreen &&
                  (mejs.MediaFeatures.isFullScreen()
                    ? ((b.isNativeFullScreen = !0), b.setControlsSize())
                    : ((b.isNativeFullScreen = !1), b.exitFullScreen()));
              };
              b.globalBind(mejs.MediaFeatures.fullScreenEventName, i);
            }
          }
        },
        detectFullscreenMode: function () {
          var a = this,
            b = "",
            c = mejs.MediaFeatures;
          return (
            c.hasTrueNativeFullScreen && "native" === a.media.pluginType
              ? (b = "native-native")
              : c.hasTrueNativeFullScreen &&
                "native" !== a.media.pluginType &&
                !c.hasFirefoxPluginMovingProblem
                ? (b = "plugin-native")
                : a.usePluginFullScreen
                  ? mejs.MediaFeatures.supportsPointerEvents
                    ? ((b = "plugin-click"), a.createPluginClickThrough())
                    : (b = "plugin-hover")
                  : (b = "fullwindow"),
            (a.fullscreenMode = b),
            b
          );
        },
        isPluginClickThroughCreated: !1,
        createPluginClickThrough: function () {
          var b = this;
          if (!b.isPluginClickThroughCreated) {
            var c,
              d,
              e = !1,
              f = function () {
                if (e) {
                  for (var a in g) g[a].hide();
                  b.fullscreenBtn.css("pointer-events", ""),
                    b.controls.css("pointer-events", ""),
                    b.media.removeEventListener(
                      "click",
                      b.clickToPlayPauseCallback
                    ),
                    (e = !1);
                }
              },
              g = {},
              h = ["top", "left", "right", "bottom"],
              i = function () {
                var a = fullscreenBtn.offset().left - b.container.offset().left,
                  d = fullscreenBtn.offset().top - b.container.offset().top,
                  e = fullscreenBtn.outerWidth(!0),
                  f = fullscreenBtn.outerHeight(!0),
                  h = b.container.width(),
                  i = b.container.height();
                for (c in g)
                  g[c].css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                  });
                g.top.width(h).height(d),
                  g.left.width(a).height(f).css({
                    top: d,
                  }),
                  g.right
                    .width(h - a - e)
                    .height(f)
                    .css({
                      top: d,
                      left: a + e,
                    }),
                  g.bottom
                    .width(h)
                    .height(i - f - d)
                    .css({
                      top: d + f,
                    });
              };
            for (
              b.globalBind("resize", function () {
                i();
              }),
              c = 0,
              d = h.length;
              d > c;
              c++
            )
              g[h[c]] = a('<div class="mejs-fullscreen-hover" />')
                .appendTo(b.container)
                .mouseover(f)
                .hide();
            fullscreenBtn.on("mouseover", function () {
              if (!b.isFullScreen) {
                var a = fullscreenBtn.offset(),
                  d = player.container.offset();
                media.positionFullscreenButton(
                  a.left - d.left,
                  a.top - d.top,
                  !1
                ),
                  b.fullscreenBtn.css("pointer-events", "none"),
                  b.controls.css("pointer-events", "none"),
                  b.media.addEventListener("click", b.clickToPlayPauseCallback);
                for (c in g) g[c].show();
                i(), (e = !0);
              }
            }),
              media.addEventListener("fullscreenchange", function (a) {
                (b.isFullScreen = !b.isFullScreen),
                  b.isFullScreen
                    ? b.media.removeEventListener(
                      "click",
                      b.clickToPlayPauseCallback
                    )
                    : b.media.addEventListener(
                      "click",
                      b.clickToPlayPauseCallback
                    ),
                  f();
              }),
              b.globalBind("mousemove", function (a) {
                if (e) {
                  var c = fullscreenBtn.offset();
                  (a.pageY < c.top ||
                    a.pageY > c.top + fullscreenBtn.outerHeight(!0) ||
                    a.pageX < c.left ||
                    a.pageX > c.left + fullscreenBtn.outerWidth(!0)) &&
                    (fullscreenBtn.css("pointer-events", ""),
                      b.controls.css("pointer-events", ""),
                      (e = !1));
                }
              }),
              (b.isPluginClickThroughCreated = !0);
          }
        },
        cleanfullscreen: function (a) {
          a.exitFullScreen();
        },
        containerSizeTimeout: null,
        enterFullScreen: function () {
          var b = this;
          return mejs.MediaFeatures.hasiOSFullScreen
            ? void b.media.webkitEnterFullscreen()
            : (a(document.documentElement).addClass("mejs-fullscreen"),
              (b.normalHeight = b.container.height()),
              (b.normalWidth = b.container.width()),
              "native-native" === b.fullscreenMode ||
                "plugin-native" === b.fullscreenMode
                ? (mejs.MediaFeatures.requestFullScreen(b.container[0]),
                  b.isInIframe &&
                  setTimeout(function c() {
                    if (b.isNativeFullScreen) {
                      var d = window.devicePixelRatio || 1,
                        e = 0.002,
                        f = d * a(window).width(),
                        g = screen.width,
                        h = d * f;
                      Math.abs(g - f) > Math.abs(g - h) && (f = h);
                      var i = Math.abs(g - f),
                        j = g * e;
                      i > j ? b.exitFullScreen() : setTimeout(c, 500);
                    }
                  }, 1e3))
                : "fullwindow" == b.fullscreeMode,
              b.container
                .addClass("mejs-container-fullscreen")
                .width("100%")
                .height("100%"),
              (b.containerSizeTimeout = setTimeout(function () {
                b.container.css({
                  width: "100%",
                  height: "100%",
                }),
                  b.setControlsSize();
              }, 500)),
              "native" === b.media.pluginType
                ? b.$media.width("100%").height("100%")
                : (b.container.find(".mejs-shim").width("100%").height("100%"),
                  setTimeout(function () {
                    var c = a(window),
                      d = c.width(),
                      e = c.height();
                    b.media.setVideoSize(d, e);
                  }, 500)),
              b.layers.children("div").width("100%").height("100%"),
              b.fullscreenBtn &&
              b.fullscreenBtn
                .removeClass("mejs-fullscreen")
                .addClass("mejs-unfullscreen"),
              b.setControlsSize(),
              (b.isFullScreen = !0),
              b.container
                .find(".mejs-captions-text")
                .css("font-size", (screen.width / b.width) * 1 * 100 + "%"),
              b.container.find(".mejs-captions-position").css("bottom", "45px"),
              void b.container.trigger("enteredfullscreen"));
        },
        exitFullScreen: function () {
          var b = this;
          clearTimeout(b.containerSizeTimeout),
            mejs.MediaFeatures.hasTrueNativeFullScreen &&
            (mejs.MediaFeatures.isFullScreen() || b.isFullScreen) &&
            mejs.MediaFeatures.cancelFullScreen(),
            a(document.documentElement).removeClass("mejs-fullscreen"),
            b.container
              .removeClass("mejs-container-fullscreen")
              .width(b.normalWidth)
              .height(b.normalHeight),
            "native" === b.media.pluginType
              ? b.$media.width(b.normalWidth).height(b.normalHeight)
              : (b.container
                .find(".mejs-shim")
                .width(b.normalWidth)
                .height(b.normalHeight),
                b.media.setVideoSize(b.normalWidth, b.normalHeight)),
            b.layers
              .children("div")
              .width(b.normalWidth)
              .height(b.normalHeight),
            b.fullscreenBtn
              .removeClass("mejs-unfullscreen")
              .addClass("mejs-fullscreen"),
            b.setControlsSize(),
            (b.isFullScreen = !1),
            b.container.find(".mejs-captions-text").css("font-size", ""),
            b.container.find(".mejs-captions-position").css("bottom", ""),
            b.container.trigger("exitedfullscreen");
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      speeds: ["2.00", "1.50", "1.25", "1.00", "0.75"],
      defaultSpeed: "1.00",
      speedChar: "x",
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildspeed: function (b, c, d, e) {
          var f = this;
          if ("native" == f.media.pluginType) {
            for (
              var g = null,
              h = null,
              i = null,
              j = null,
              k = [],
              l = !1,
              m = 0,
              n = f.options.speeds.length;
              n > m;
              m++
            ) {
              var o = f.options.speeds[m];
              "string" == typeof o
                ? (k.push({
                  name: o + f.options.speedChar,
                  value: o,
                }),
                  o === f.options.defaultSpeed && (l = !0))
                : (k.push(o), o.value === f.options.defaultSpeed && (l = !0));
            }
            l ||
              k.push({
                name: f.options.defaultSpeed + f.options.speedChar,
                value: f.options.defaultSpeed,
              }),
              k.sort(function (a, b) {
                return parseFloat(b.value) - parseFloat(a.value);
              });
            var p = function (a) {
              for (m = 0, n = k.length; n > m; m++)
                if (k[m].value === a) return k[m].name;
            },
              q =
                '<div class="mejs-button mejs-speed-button"><button type="button">' +
                p(f.options.defaultSpeed) +
                '</button><div class="mejs-speed-selector"><ul>';
            for (m = 0, il = k.length; m < il; m++)
              (j = f.id + "-speed-" + k[m].value),
                (q +=
                  '<li><input type="radio" name="speed" value="' +
                  k[m].value +
                  '" id="' +
                  j +
                  '" ' +
                  (k[m].value === f.options.defaultSpeed ? " checked" : "") +
                  ' /><label for="' +
                  j +
                  '" ' +
                  (k[m].value === f.options.defaultSpeed
                    ? ' class="mejs-speed-selected"'
                    : "") +
                  ">" +
                  k[m].name +
                  "</label></li>");
            (q += "</ul></div></div>"),
              (g = a(q).appendTo(c)),
              (h = g.find(".mejs-speed-selector")),
              (i = f.options.defaultSpeed),
              e.addEventListener(
                "loadedmetadata",
                function (a) {
                  i && (e.playbackRate = parseFloat(i));
                },
                !0
              ),
              h.on("click", 'input[type="radio"]', function () {
                var b = a(this).attr("value");
                (i = b),
                  (e.playbackRate = parseFloat(b)),
                  g.find("button").html(p(b)),
                  g
                    .find(".mejs-speed-selected")
                    .removeClass("mejs-speed-selected"),
                  g
                    .find('input[type="radio"]:checked')
                    .next()
                    .addClass("mejs-speed-selected");
              }),
              g.one("mouseenter focusin", function () {
                h.height(
                  g.find(".mejs-speed-selector ul").outerHeight(!0) +
                  g.find(".mejs-speed-translations").outerHeight(!0)
                ).css("top", -1 * h.height() + "px");
              });
          }
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      startLanguage: "",
      tracksText: mejs.i18n.t("Captions/Subtitles"),
      tracksAriaLive: !1,
      hideCaptionsButtonWhenEmpty: !0,
      toggleCaptionsButtonWhenOnlyOne: !1,
      slidesSelector: "",
    }),
      a.extend(MediaElementPlayer.prototype, {
        hasChapters: !1,
        cleartracks: function (a, b, c, d) {
          a &&
            (a.captions && a.captions.remove(),
              a.chapters && a.chapters.remove(),
              a.captionsText && a.captionsText.remove(),
              a.captionsButton && a.captionsButton.remove());
        },
        buildtracks: function (b, c, d, e) {
          if (0 !== b.tracks.length) {
            var f,
              g = this,
              h = g.options.tracksAriaLive
                ? 'role="log" aria-live="assertive" aria-atomic="false"'
                : "";
            if (g.domNode.textTracks)
              for (f = g.domNode.textTracks.length - 1; f >= 0; f--)
                g.domNode.textTracks[f].mode = "hidden";
            g.cleartracks(b, c, d, e),
              (b.chapters = a('<div class="mejs-chapters mejs-layer"></div>')
                .prependTo(d)
                .hide()),
              (b.captions = a(
                '<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' +
                h +
                '><span class="mejs-captions-text"></span></div></div>'
              )
                .prependTo(d)
                .hide()),
              (b.captionsText = b.captions.find(".mejs-captions-text")),
              (b.captionsButton = a(
                '<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' +
                g.id +
                '" title="' +
                g.options.tracksText +
                '" aria-label="' +
                g.options.tracksText +
                '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' +
                b.id +
                '_captions" id="' +
                b.id +
                '_captions_none" value="none" checked="checked" /><label for="' +
                b.id +
                '_captions_none">' +
                mejs.i18n.t("None") +
                "</label></li></ul></div></div>"
              ).appendTo(c));
            var i = 0;
            for (f = 0; f < b.tracks.length; f++)
              "subtitles" == b.tracks[f].kind && i++;
            for (
              g.options.toggleCaptionsButtonWhenOnlyOne && 1 == i
                ? b.captionsButton.on("click", function () {
                  null === b.selectedTrack
                    ? (lang = b.tracks[0].srclang)
                    : (lang = "none"),
                    b.setTrack(lang);
                })
                : (b.captionsButton
                  .on("mouseenter focusin", function () {
                    a(this)
                      .find(".mejs-captions-selector")
                      .removeClass("mejs-offscreen");
                  })
                  .on("click", "input[type=radio]", function () {
                    (lang = this.value), b.setTrack(lang);
                  }),
                  b.captionsButton.on("mouseleave focusout", function () {
                    a(this)
                      .find(".mejs-captions-selector")
                      .addClass("mejs-offscreen");
                  })),
              b.options.alwaysShowControls
                ? b.container
                  .find(".mejs-captions-position")
                  .addClass("mejs-captions-position-hover")
                : b.container
                  .bind("controlsshown", function () {
                    b.container
                      .find(".mejs-captions-position")
                      .addClass("mejs-captions-position-hover");
                  })
                  .bind("controlshidden", function () {
                    e.paused ||
                      b.container
                        .find(".mejs-captions-position")
                        .removeClass("mejs-captions-position-hover");
                  }),
              b.trackToLoad = -1,
              b.selectedTrack = null,
              b.isLoadingTrack = !1,
              f = 0;
              f < b.tracks.length;
              f++
            )
              "subtitles" == b.tracks[f].kind &&
                b.addTrackButton(b.tracks[f].srclang, b.tracks[f].label);
            b.loadNextTrack(),
              e.addEventListener(
                "timeupdate",
                function (a) {
                  b.displayCaptions();
                },
                !1
              ),
              "" !== b.options.slidesSelector &&
              ((b.slidesContainer = a(b.options.slidesSelector)),
                e.addEventListener(
                  "timeupdate",
                  function (a) {
                    b.displaySlides();
                  },
                  !1
                )),
              e.addEventListener(
                "loadedmetadata",
                function (a) {
                  b.displayChapters();
                },
                !1
              ),
              b.container.hover(
                function () {
                  b.hasChapters &&
                    (b.chapters.removeClass("mejs-offscreen"),
                      b.chapters
                        .fadeIn(200)
                        .height(b.chapters.find(".mejs-chapter").outerHeight()));
                },
                function () {
                  b.hasChapters &&
                    !e.paused &&
                    b.chapters.fadeOut(200, function () {
                      a(this).addClass("mejs-offscreen"),
                        a(this).css("display", "block");
                    });
                }
              ),
              g.container.on("controlsresize", function () {
                g.adjustLanguageBox();
              }),
              null !== b.node.getAttribute("autoplay") &&
              b.chapters.addClass("mejs-offscreen");
          }
        },
        setTrack: function (a) {
          var b,
            c = this;
          if ("none" == a)
            (c.selectedTrack = null),
              c.captionsButton.removeClass("mejs-captions-enabled");
          else
            for (b = 0; b < c.tracks.length; b++)
              if (c.tracks[b].srclang == a) {
                null === c.selectedTrack &&
                  c.captionsButton.addClass("mejs-captions-enabled"),
                  (c.selectedTrack = c.tracks[b]),
                  c.captions.attr("lang", c.selectedTrack.srclang),
                  c.displayCaptions();
                break;
              }
        },
        loadNextTrack: function () {
          var a = this;
          a.trackToLoad++,
            a.trackToLoad < a.tracks.length
              ? ((a.isLoadingTrack = !0), a.loadTrack(a.trackToLoad))
              : ((a.isLoadingTrack = !1), a.checkForTracks());
        },
        loadTrack: function (b) {
          var c = this,
            d = c.tracks[b],
            e = function () {
              (d.isLoaded = !0),
                c.enableTrackButton(d.srclang, d.label),
                c.loadNextTrack();
            };
          a.ajax({
            url: d.src,
            dataType: "text",
            success: function (a) {
              "string" == typeof a && /<tt\s+xml/gi.exec(a)
                ? (d.entries = mejs.TrackFormatParser.dfxp.parse(a))
                : (d.entries = mejs.TrackFormatParser.webvtt.parse(a)),
                e(),
                "chapters" == d.kind &&
                c.media.addEventListener(
                  "play",
                  function (a) {
                    c.media.duration > 0 && c.displayChapters(d);
                  },
                  !1
                ),
                "slides" == d.kind && c.setupSlides(d);
            },
            error: function () {
              c.removeTrackButton(d.srclang), c.loadNextTrack();
            },
          });
        },
        enableTrackButton: function (b, c) {
          var d = this;
          "" === c && (c = mejs.language.codes[b] || b),
            d.captionsButton
              .find("input[value=" + b + "]")
              .prop("disabled", !1)
              .siblings("label")
              .html(c),
            d.options.startLanguage == b &&
            a("#" + d.id + "_captions_" + b)
              .prop("checked", !0)
              .trigger("click"),
            d.adjustLanguageBox();
        },
        removeTrackButton: function (a) {
          var b = this;
          b.captionsButton
            .find("input[value=" + a + "]")
            .closest("li")
            .remove(),
            b.adjustLanguageBox();
        },
        addTrackButton: function (b, c) {
          var d = this;
          "" === c && (c = mejs.language.codes[b] || b),
            d.captionsButton
              .find("ul")
              .append(
                a(
                  '<li><input type="radio" name="' +
                  d.id +
                  '_captions" id="' +
                  d.id +
                  "_captions_" +
                  b +
                  '" value="' +
                  b +
                  '" disabled="disabled" /><label for="' +
                  d.id +
                  "_captions_" +
                  b +
                  '">' +
                  c +
                  " (loading)</label></li>"
                )
              ),
            d.adjustLanguageBox(),
            d.container
              .find(".mejs-captions-translations option[value=" + b + "]")
              .remove();
        },
        adjustLanguageBox: function () {
          var a = this;
          a.captionsButton
            .find(".mejs-captions-selector")
            .height(
              a.captionsButton
                .find(".mejs-captions-selector ul")
                .outerHeight(!0) +
              a.captionsButton
                .find(".mejs-captions-translations")
                .outerHeight(!0)
            );
        },
        checkForTracks: function () {
          var a = this,
            b = !1;
          if (a.options.hideCaptionsButtonWhenEmpty) {
            for (i = 0; i < a.tracks.length; i++)
              if ("subtitles" == a.tracks[i].kind && a.tracks[i].isLoaded) {
                b = !0;
                break;
              }
            b || (a.captionsButton.hide(), a.setControlsSize());
          }
        },
        displayCaptions: function () {
          if ("undefined" != typeof this.tracks) {
            var a,
              b = this,
              c = b.selectedTrack;
            if (null !== c && c.isLoaded) {
              for (a = 0; a < c.entries.times.length; a++)
                if (
                  b.media.currentTime >= c.entries.times[a].start &&
                  b.media.currentTime <= c.entries.times[a].stop
                )
                  return (
                    b.captionsText
                      .html(c.entries.text[a])
                      .attr(
                        "class",
                        "mejs-captions-text " +
                        (c.entries.times[a].identifier || "")
                      ),
                    void b.captions.show().height(0)
                  );
              b.captions.hide();
            } else b.captions.hide();
          }
        },
        setupSlides: function (a) {
          var b = this;
          (b.slides = a),
            (b.slides.entries.imgs = [b.slides.entries.text.length]),
            b.showSlide(0);
        },
        showSlide: function (b) {
          if (
            "undefined" != typeof this.tracks &&
            "undefined" != typeof this.slidesContainer
          ) {
            var c = this,
              d = c.slides.entries.text[b],
              e = c.slides.entries.imgs[b];
            "undefined" == typeof e || "undefined" == typeof e.fadeIn
              ? (c.slides.entries.imgs[b] = e =
                a('<img src="' + d + '">').on("load", function () {
                  e.appendTo(c.slidesContainer)
                    .hide()
                    .fadeIn()
                    .siblings(":visible")
                    .fadeOut();
                }))
              : e.is(":visible") ||
              e.is(":animated") ||
              e.fadeIn().siblings(":visible").fadeOut();
          }
        },
        displaySlides: function () {
          if ("undefined" != typeof this.slides) {
            var a,
              b = this,
              c = b.slides;
            for (a = 0; a < c.entries.times.length; a++)
              if (
                b.media.currentTime >= c.entries.times[a].start &&
                b.media.currentTime <= c.entries.times[a].stop
              )
                return void b.showSlide(a);
          }
        },
        displayChapters: function () {
          var a,
            b = this;
          for (a = 0; a < b.tracks.length; a++)
            if ("chapters" == b.tracks[a].kind && b.tracks[a].isLoaded) {
              b.drawChapters(b.tracks[a]), (b.hasChapters = !0);
              break;
            }
        },
        drawChapters: function (b) {
          var c,
            d,
            e = this,
            f = 0,
            g = 0;
          for (e.chapters.empty(), c = 0; c < b.entries.times.length; c++)
            (d = b.entries.times[c].stop - b.entries.times[c].start),
              (f = Math.floor((d / e.media.duration) * 100)),
              (f + g > 100 ||
                (c == b.entries.times.length - 1 && 100 > f + g)) &&
              (f = 100 - g),
              e.chapters.append(
                a(
                  '<div class="mejs-chapter" rel="' +
                  b.entries.times[c].start +
                  '" style="left: ' +
                  g.toString() +
                  "%;width: " +
                  f.toString() +
                  '%;"><div class="mejs-chapter-block' +
                  (c == b.entries.times.length - 1
                    ? " mejs-chapter-block-last"
                    : "") +
                  '"><span class="ch-title">' +
                  b.entries.text[c] +
                  '</span><span class="ch-time">' +
                  mejs.Utility.secondsToTimeCode(
                    b.entries.times[c].start,
                    e.options
                  ) +
                  "&ndash;" +
                  mejs.Utility.secondsToTimeCode(
                    b.entries.times[c].stop,
                    e.options
                  ) +
                  "</span></div></div>"
                )
              ),
              (g += f);
          e.chapters.find("div.mejs-chapter").click(function () {
            e.media.setCurrentTime(parseFloat(a(this).attr("rel"))),
              e.media.paused && e.media.play();
          }),
            e.chapters.show();
        },
      }),
      (mejs.language = {
        codes: {
          af: "Afrikaans",
          sq: "Albanian",
          ar: "Arabic",
          be: "Belarusian",
          bg: "Bulgarian",
          ca: "Catalan",
          zh: "Chinese",
          "zh-cn": "Chinese Simplified",
          "zh-tw": "Chinese Traditional",
          hr: "Croatian",
          cs: "Czech",
          da: "Danish",
          nl: "Dutch",
          en: "English",
          et: "Estonian",
          fl: "Filipino",
          fi: "Finnish",
          fr: "French",
          gl: "Galician",
          de: "German",
          el: "Greek",
          ht: "Haitian Creole",
          iw: "Hebrew",
          hi: "Hindi",
          hu: "Hungarian",
          is: "Icelandic",
          id: "Indonesian",
          ga: "Irish",
          it: "Italian",
          ja: "Japanese",
          ko: "Korean",
          lv: "Latvian",
          lt: "Lithuanian",
          mk: "Macedonian",
          ms: "Malay",
          mt: "Maltese",
          no: "Norwegian",
          fa: "Persian",
          pl: "Polish",
          pt: "Portuguese",
          ro: "Romanian",
          ru: "Russian",
          sr: "Serbian",
          sk: "Slovak",
          sl: "Slovenian",
          es: "Spanish",
          sw: "Swahili",
          sv: "Swedish",
          tl: "Tagalog",
          th: "Thai",
          tr: "Turkish",
          uk: "Ukrainian",
          vi: "Vietnamese",
          cy: "Welsh",
          yi: "Yiddish",
        },
      }),
      (mejs.TrackFormatParser = {
        webvtt: {
          pattern_timecode:
            /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
          parse: function (b) {
            for (
              var c,
              d,
              e,
              f = 0,
              g = mejs.TrackFormatParser.split2(b, /\r?\n/),
              h = {
                text: [],
                times: [],
              };
              f < g.length;
              f++
            ) {
              if (((c = this.pattern_timecode.exec(g[f])), c && f < g.length)) {
                for (
                  f - 1 >= 0 && "" !== g[f - 1] && (e = g[f - 1]),
                  f++,
                  d = g[f],
                  f++;
                  "" !== g[f] && f < g.length;

                )
                  (d = d + "\n" + g[f]), f++;
                (d = a
                  .trim(d)
                  .replace(
                    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                    "<a href='$1' target='_blank'>$1</a>"
                  )),
                  h.text.push(d),
                  h.times.push({
                    identifier: e,
                    start:
                      0 === mejs.Utility.convertSMPTEtoSeconds(c[1])
                        ? 0.2
                        : mejs.Utility.convertSMPTEtoSeconds(c[1]),
                    stop: mejs.Utility.convertSMPTEtoSeconds(c[3]),
                    settings: c[5],
                  });
              }
              e = "";
            }
            return h;
          },
        },
        dfxp: {
          parse: function (b) {
            b = a(b).filter("tt");
            var c,
              d,
              e = 0,
              f = b.children("div").eq(0),
              g = f.find("p"),
              h = b.find("#" + f.attr("style")),
              i = {
                text: [],
                times: [],
              };
            if (h.length) {
              var j = h.removeAttr("id").get(0).attributes;
              if (j.length)
                for (c = {}, e = 0; e < j.length; e++)
                  c[j[e].name.split(":")[1]] = j[e].value;
            }
            for (e = 0; e < g.length; e++) {
              var k,
                l = {
                  start: null,
                  stop: null,
                  style: null,
                };
              if (
                (g.eq(e).attr("begin") &&
                  (l.start = mejs.Utility.convertSMPTEtoSeconds(
                    g.eq(e).attr("begin")
                  )),
                  !l.start &&
                  g.eq(e - 1).attr("end") &&
                  (l.start = mejs.Utility.convertSMPTEtoSeconds(
                    g.eq(e - 1).attr("end")
                  )),
                  g.eq(e).attr("end") &&
                  (l.stop = mejs.Utility.convertSMPTEtoSeconds(
                    g.eq(e).attr("end")
                  )),
                  !l.stop &&
                  g.eq(e + 1).attr("begin") &&
                  (l.stop = mejs.Utility.convertSMPTEtoSeconds(
                    g.eq(e + 1).attr("begin")
                  )),
                  c)
              ) {
                k = "";
                for (var m in c) k += m + ":" + c[m] + ";";
              }
              k && (l.style = k),
                0 === l.start && (l.start = 0.2),
                i.times.push(l),
                (d = a
                  .trim(g.eq(e).html())
                  .replace(
                    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                    "<a href='$1' target='_blank'>$1</a>"
                  )),
                i.text.push(d),
                0 === i.times.start && (i.times.start = 2);
            }
            return i;
          },
        },
        split2: function (a, b) {
          return a.split(b);
        },
      }),
      3 != "x\n\ny".split(/\n/gi).length &&
      (mejs.TrackFormatParser.split2 = function (a, b) {
        var c,
          d = [],
          e = "";
        for (c = 0; c < a.length; c++)
          (e += a.substring(c, c + 1)),
            b.test(e) && (d.push(e.replace(b, "")), (e = ""));
        return d.push(e), d;
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      contextMenuItems: [
        {
          render: function (a) {
            return "undefined" == typeof a.enterFullScreen
              ? null
              : a.isFullScreen
                ? mejs.i18n.t("Turn off Fullscreen")
                : mejs.i18n.t("Go Fullscreen");
          },
          click: function (a) {
            a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen();
          },
        },
        {
          render: function (a) {
            return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute");
          },
          click: function (a) {
            a.media.muted ? a.setMuted(!1) : a.setMuted(!0);
          },
        },
        {
          isSeparator: !0,
        },
        {
          render: function (a) {
            return mejs.i18n.t("Download Video");
          },
          click: function (a) {
            window.location.href = a.media.currentSrc;
          },
        },
      ],
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function (b, c, d, e) {
          (b.contextMenu = a('<div class="mejs-contextmenu"></div>')
            .appendTo(a("body"))
            .hide()),
            b.container.bind("contextmenu", function (a) {
              return b.isContextMenuEnabled
                ? (a.preventDefault(),
                  b.renderContextMenu(a.clientX - 1, a.clientY - 1),
                  !1)
                : void 0;
            }),
            b.container.bind("click", function () {
              b.contextMenu.hide();
            }),
            b.contextMenu.bind("mouseleave", function () {
              b.startContextMenuTimer();
            });
        },
        cleancontextmenu: function (a) {
          a.contextMenu.remove();
        },
        isContextMenuEnabled: !0,
        enableContextMenu: function () {
          this.isContextMenuEnabled = !0;
        },
        disableContextMenu: function () {
          this.isContextMenuEnabled = !1;
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function () {
          var a = this;
          a.killContextMenuTimer(),
            (a.contextMenuTimer = setTimeout(function () {
              a.hideContextMenu(), a.killContextMenuTimer();
            }, 750));
        },
        killContextMenuTimer: function () {
          var a = this.contextMenuTimer;
          null != a && (clearTimeout(a), delete a, (a = null));
        },
        hideContextMenu: function () {
          this.contextMenu.hide();
        },
        renderContextMenu: function (b, c) {
          for (
            var d = this,
            e = "",
            f = d.options.contextMenuItems,
            g = 0,
            h = f.length;
            h > g;
            g++
          )
            if (f[g].isSeparator)
              e += '<div class="mejs-contextmenu-separator"></div>';
            else {
              var i = f[g].render(d);
              null != i &&
                (e +=
                  '<div class="mejs-contextmenu-item" data-itemindex="' +
                  g +
                  '" id="element-' +
                  1e6 * Math.random() +
                  '">' +
                  i +
                  "</div>");
            }
          d.contextMenu
            .empty()
            .append(a(e))
            .css({
              top: c,
              left: b,
            })
            .show(),
            d.contextMenu.find(".mejs-contextmenu-item").each(function () {
              var b = a(this),
                c = parseInt(b.data("itemindex"), 10),
                e = d.options.contextMenuItems[c];
              "undefined" != typeof e.show && e.show(b, d),
                b.click(function () {
                  "undefined" != typeof e.click && e.click(d),
                    d.contextMenu.hide();
                });
            }),
            setTimeout(function () {
              d.killControlsTimer("rev3");
            }, 100);
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      skipBackInterval: 30,
      skipBackText: mejs.i18n.t("Skip back %1 seconds"),
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildskipback: function (b, c, d, e) {
          var f = this,
            g = f.options.skipBackText.replace(
              "%1",
              f.options.skipBackInterval
            );
          a(
            '<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="' +
            f.id +
            '" title="' +
            g +
            '" aria-label="' +
            g +
            '">' +
            f.options.skipBackInterval +
            "</button></div>"
          )
            .appendTo(c)
            .click(function () {
              e.setCurrentTime(
                Math.max(e.currentTime - f.options.skipBackInterval, 0)
              ),
                a(this).find("button").blur();
            });
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      postrollCloseText: mejs.i18n.t("Close"),
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildpostroll: function (b, c, d, e) {
          var f = this,
            g = f.container.find('link[rel="postroll"]').attr("href");
          "undefined" != typeof g &&
            ((b.postroll = a(
              '<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' +
              f.options.postrollCloseText +
              '</a><div class="mejs-postroll-layer-content"></div></div>'
            )
              .prependTo(d)
              .hide()),
              f.media.addEventListener(
                "ended",
                function (c) {
                  a.ajax({
                    dataType: "html",
                    url: g,
                    success: function (a, b) {
                      d.find(".mejs-postroll-layer-content").html(a);
                    },
                  }),
                    b.postroll.show();
                },
                !1
              ));
        },
      });
  })(mejs.$);

/************************************************
FITVIDEO
************************************************/

!(function (t) {
  "use strict";
  (t.fn.fitVids = function (e) {
    var i = {
      customSelector: null,
      ignore: null,
    };
    if (!document.getElementById("fit-vids-style")) {
      var r = document.head || document.getElementsByTagName("head")[0],
        a =
          ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
        d = document.createElement("div");
      (d.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>"),
        r.appendChild(d.childNodes[1]);
    }
    return (
      e && t.extend(i, e),
      this.each(function () {
        var e = [
          'iframe[src*="player.vimeo.com"]',
          'iframe[src*="youtube.com"]',
          'iframe[src*="youtube-nocookie.com"]',
          'iframe[src*="kickstarter.com"][src*="video.html"]',
          "object",
          "embed",
        ];
        i.customSelector && e.push(i.customSelector);
        var r = ".fitvidsignore";
        i.ignore && (r = r + ", " + i.ignore);
        var a = t(this).find(e.join(","));
        (a = a.not("object object")),
          (a = a.not(r)),
          a.each(function () {
            var e = t(this);
            if (
              !(
                e.parents(r).length > 0 ||
                ("embed" === this.tagName.toLowerCase() &&
                  e.parent("object").length) ||
                e.parent(".fluid-width-video-wrapper").length
              )
            ) {
              e.css("height") ||
                e.css("width") ||
                (!isNaN(e.attr("height")) && !isNaN(e.attr("width"))) ||
                (e.attr("height", 9), e.attr("width", 16));
              var i =
                "object" === this.tagName.toLowerCase() ||
                  (e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)))
                  ? parseInt(e.attr("height"), 10)
                  : e.height(),
                a = isNaN(parseInt(e.attr("width"), 10))
                  ? e.width()
                  : parseInt(e.attr("width"), 10),
                d = i / a;
              if (!e.attr("name")) {
                var o = "fitvid" + t.fn.fitVids._count;
                e.attr("name", o), t.fn.fitVids._count++;
              }
              e
                .wrap('<div class="fluid-width-video-wrapper"></div>')
                .parent(".fluid-width-video-wrapper")
                .css("padding-top", 100 * d + "%"),
                e.removeAttr("height").removeAttr("width");
            }
          });
      })
    );
  }),
    (t.fn.fitVids._count = 0);
})(window.jQuery || window.Zepto);

/************************************************
ELEMENTS
************************************************/

$(document).ready(function () {
  // Target your .container, .wrapper, .post, etc.
  $(".post-media").fitVids();

  $("video").mediaelementplayer({
    // if the <video width> is not specified, this is the default
    defaultVideoWidth: 750,
    // if the <video height> is not specified, this is the default
    defaultVideoHeight: 420,
    // if set, overrides <video width>
    videoWidth: -1,
    // if set, overrides <video height>
    videoHeight: -1,
    // width of audio player
    // initial volume when the player starts
    startVolume: 0.8,
    // useful for <audio> player loops
    loop: false,
    // enables Flash and Silverlight to resize to content size
    enableAutosize: false,
    // the order of controls you want on the control bar (and other plugins below)
    features: [
      "playpause",
      "progress",
      "current",
      "duration",
      "tracks",
      "volume",
      "fullscreen",
    ],
    // Hide controls when playing and mouse is not over the video
    alwaysShowControls: true,
    keyActions: [],
  });
});

/*!
FILE UPLOAD
 */
!(function (e) {
  var t = function (t, n) {
    (this.$element = e(t)),
      (this.type =
        this.$element.data("uploadtype") ||
        (this.$element.find(".thumbnail").length > 0 ? "image" : "file")),
      (this.$input = this.$element.find(":file"));
    if (this.$input.length === 0) return;
    (this.name = this.$input.attr("name") || n.name),
      (this.$hidden = this.$element.find(
        'input[type=hidden][name="' + this.name + '"]'
      )),
      this.$hidden.length === 0 &&
      ((this.$hidden = e('<input type="hidden" />')),
        this.$element.prepend(this.$hidden)),
      (this.$preview = this.$element.find(".fileupload-preview"));
    var r = this.$preview.css("height");
    this.$preview.css("display") != "inline" &&
      r != "0px" &&
      r != "none" &&
      this.$preview.css("line-height", r),
      (this.original = {
        exists: this.$element.hasClass("fileupload-exists"),
        preview: this.$preview.html(),
        hiddenVal: this.$hidden.val(),
      }),
      (this.$remove = this.$element.find('[data-dismiss="fileupload"]')),
      this.$element
        .find('[data-trigger="fileupload"]')
        .on("click.fileupload", e.proxy(this.trigger, this)),
      this.listen();
  };
  (t.prototype = {
    listen: function () {
      this.$input.on("change.fileupload", e.proxy(this.change, this)),
        e(this.$input[0].form).on(
          "reset.fileupload",
          e.proxy(this.reset, this)
        ),
        this.$remove &&
        this.$remove.on("click.fileupload", e.proxy(this.clear, this));
    },
    change: function (e, t) {
      if (t === "clear") return;
      var n =
        e.target.files !== undefined
          ? e.target.files[0]
          : e.target.value
            ? {
              name: e.target.value.replace(/^.+\\/, ""),
            }
            : null;
      if (!n) {
        this.clear();
        return;
      }
      this.$hidden.val(""),
        this.$hidden.attr("name", ""),
        this.$input.attr("name", this.name);
      if (
        this.type === "image" &&
        this.$preview.length > 0 &&
        (typeof n.type != "undefined"
          ? n.type.match("image.*")
          : n.name.match(/\.(gif|png|jpe?g)$/i)) &&
        typeof FileReader != "undefined"
      ) {
        var r = new FileReader(),
          i = this.$preview,
          s = this.$element;
        (r.onload = function (e) {
          i.html(
            '<img src="' +
            e.target.result +
            '" ' +
            (i.css("max-height") != "none"
              ? 'style="max-height: ' + i.css("max-height") + ';"'
              : "") +
            " />"
          ),
            s.addClass("fileupload-exists").removeClass("fileupload-new");
        }),
          r.readAsDataURL(n);
      } else
        this.$preview.text(n.name),
          this.$element
            .addClass("fileupload-exists")
            .removeClass("fileupload-new");
    },
    clear: function (e) {
      this.$hidden.val(""),
        this.$hidden.attr("name", this.name),
        this.$input.attr("name", "");
      if (navigator.userAgent.match(/msie/i)) {
        var t = this.$input.clone(!0);
        this.$input.after(t), this.$input.remove(), (this.$input = t);
      } else this.$input.val("");
      this.$preview.html(""),
        this.$element
          .addClass("fileupload-new")
          .removeClass("fileupload-exists"),
        e && (this.$input.trigger("change", ["clear"]), e.preventDefault());
    },
    reset: function (e) {
      this.clear(),
        this.$hidden.val(this.original.hiddenVal),
        this.$preview.html(this.original.preview),
        this.original.exists
          ? this.$element
            .addClass("fileupload-exists")
            .removeClass("fileupload-new")
          : this.$element
            .addClass("fileupload-new")
            .removeClass("fileupload-exists");
    },
    trigger: function (e) {
      this.$input.trigger("click"), e.preventDefault();
    },
  }),
    (e.fn.fileupload = function (n) {
      return this.each(function () {
        var r = e(this),
          i = r.data("fileupload");
        i || r.data("fileupload", (i = new t(this, n))),
          typeof n == "string" && i[n]();
      });
    }),
    (e.fn.fileupload.Constructor = t),
    e(document).on(
      "click.fileupload.data-api",
      '[data-provides="fileupload"]',
      function (t) {
        var n = e(this);
        if (n.data("fileupload")) return;
        n.fileupload(n.data());
        var r = e(t.target).closest(
          '[data-dismiss="fileupload"],[data-trigger="fileupload"]'
        );
        r.length > 0 && (r.trigger("click.fileupload"), t.preventDefault());
      }
    );
})(window.jQuery);
