// This file is prepended to build/selectorgadget_combined.js to generate the final contentScript.

(function () {
  if (typeof SelectorGadget == "undefined") {
    /*!
     * jQuery JavaScript Library v1.4.3
     * http://jquery.com/
     *
     * Copyright 2010, John Resig
     * Dual licensed under the MIT or GPL Version 2 licenses.
     * http://jquery.org/license
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     * Copyright 2010, The Dojo Foundation
     * Released under the MIT, BSD, and GPL Licenses.
     *
     * Date: Thu Oct 14 23:10:06 2010 -0400
     */
    function diff_match_patch() {
      function e() {
        var e = 0,
          t = 1,
          n = 2;
        while (t != n) e++, (t = n), (n <<= 1);
        return e;
      }
      (this.Diff_Timeout = 1),
        (this.Diff_EditCost = 4),
        (this.Diff_DualThreshold = 32),
        (this.Match_Balance = 0.5),
        (this.Match_Threshold = 0.5),
        (this.Match_MinLength = 100),
        (this.Match_MaxLength = 1e3),
        (this.Patch_Margin = 4),
        (this.Match_MaxBits = e());
    }
    function patch_obj() {
      (this.diffs = []),
        (this.start1 = null),
        (this.start2 = null),
        (this.length1 = 0),
        (this.length2 = 0);
    }
    (function (e, t) {
      function E() {
        return !1;
      }
      function S() {
        return !0;
      }
      function L(e, t, n) {
        return (n[0].type = e), r.event.handle.apply(t, n);
      }
      function O(e) {
        var t,
          n,
          i = [],
          s = [],
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          v,
          m,
          g,
          y = r.data(this, this.nodeType ? "events" : "__events__");
        typeof y == "function" && (y = y.events);
        if (
          e.liveFired === this ||
          !y ||
          !y.live ||
          (e.button && e.type === "click")
        )
          return;
        e.namespace &&
          (m = new RegExp(
            "(^|\\.)" + e.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"
          )),
          (e.liveFired = this);
        var b = y.live.slice(0);
        for (l = 0; l < b.length; l++)
          (a = b[l]),
            a.origType.replace(d, "") === e.type
              ? s.push(a.selector)
              : b.splice(l--, 1);
        u = r(e.target).closest(s, e.currentTarget);
        for (c = 0, h = u.length; c < h; c++) {
          v = u[c];
          for (l = 0; l < b.length; l++) {
            a = b[l];
            if (v.selector === a.selector && (!m || m.test(a.namespace))) {
              (f = v.elem), (o = null);
              if (a.preType === "mouseenter" || a.preType === "mouseleave")
                (e.type = a.preType),
                  (o = r(e.relatedTarget).closest(a.selector)[0]);
              (!o || o !== f) &&
                i.push({ elem: f, handleObj: a, level: v.level });
            }
          }
        }
        for (c = 0, h = i.length; c < h; c++) {
          u = i[c];
          if (n && u.level > n) break;
          (e.currentTarget = u.elem),
            (e.data = u.handleObj.data),
            (e.handleObj = u.handleObj),
            (g = u.handleObj.origHandler.apply(u.elem, arguments));
          if (g === !1 || e.isPropagationStopped())
            (n = u.level), g === !1 && (t = !1);
        }
        return t;
      }
      function M(e, t) {
        return (
          (e && e !== "*" ? e + "." : "") + t.replace(m, "`").replace(g, "&")
        );
      }
      function F(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11;
      }
      function I(e, t, n) {
        if (r.isFunction(t))
          return r.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n;
          });
        if (t.nodeType)
          return r.grep(e, function (e, r) {
            return (e === t) === n;
          });
        if (typeof t == "string") {
          var i = r.grep(e, function (e) {
            return e.nodeType === 1;
          });
          if (H.test(t)) return r.filter(t, i, !n);
          t = r.filter(t, i);
        }
        return r.grep(e, function (e, i) {
          return r.inArray(e, t) >= 0 === n;
        });
      }
      function Q(e, t) {
        return r.nodeName(e, "table")
          ? e.getElementsByTagName("tbody")[0] ||
              e.appendChild(e.ownerDocument.createElement("tbody"))
          : e;
      }
      function G(e, t) {
        var n = 0;
        t.each(function () {
          if (this.nodeName !== (e[n] && e[n].nodeName)) return;
          var t = r.data(e[n++]),
            i = r.data(this, t),
            s = t && t.events;
          if (s) {
            delete i.handle, (i.events = {});
            for (var o in s)
              for (var u in s[o]) r.event.add(this, o, s[o][u], s[o][u].data);
          }
        });
      }
      function Y(e, t) {
        t.src
          ? r.ajax({ url: t.src, async: !1, dataType: "script" })
          : r.globalEval(t.text || t.textContent || t.innerHTML || ""),
          t.parentNode && t.parentNode.removeChild(t);
      }
      function ct(e, t, n) {
        var i = t === "width" ? ot : ut,
          s = t === "width" ? e.offsetWidth : e.offsetHeight;
        return n === "border"
          ? s
          : (r.each(i, function () {
              n || (s -= parseFloat(r.css(e, "padding" + this)) || 0),
                n === "margin"
                  ? (s += parseFloat(r.css(e, "margin" + this)) || 0)
                  : (s -= parseFloat(r.css(e, "border" + this + "Width")) || 0);
            }),
            s);
      }
      function Nt(e, t, n, i) {
        r.isArray(t) && t.length
          ? r.each(t, function (t, s) {
              n || gt.test(e)
                ? i(e, s)
                : Nt(
                    e +
                      "[" +
                      (typeof s == "object" || r.isArray(s) ? t : "") +
                      "]",
                    s,
                    n,
                    i
                  );
            })
          : !n && t != null && typeof t == "object"
          ? r.isEmptyObject(t)
            ? i(e, "")
            : r.each(t, function (t, r) {
                Nt(e + "[" + t + "]", r, n, i);
              })
          : i(e, t);
      }
      function Mt(e, t) {
        var n = {};
        return (
          r.each(Ot.concat.apply([], Ot.slice(0, t)), function () {
            n[this] = e;
          }),
          n
        );
      }
      function _t(e) {
        if (!Ct[e]) {
          var t = r("<" + e + ">").appendTo("body"),
            n = t.css("display");
          t.remove();
          if (n === "none" || n === "") n = "block";
          Ct[e] = n;
        }
        return Ct[e];
      }
      function Ht(e) {
        return r.isWindow(e)
          ? e
          : e.nodeType === 9
          ? e.defaultView || e.parentWindow
          : !1;
      }
      var n = e.document,
        r = (function () {
          function B() {
            if (r.isReady) return;
            try {
              n.documentElement.doScroll("left");
            } catch (e) {
              setTimeout(B, 1);
              return;
            }
            r.ready();
          }
          var r = function (e, t) {
              return new r.fn.init(e, t);
            },
            i = e.jQuery,
            s = e.$,
            o,
            u = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
            a = /^.[^:#\[\.,]*$/,
            f = /\S/,
            l = /\s/,
            c = /^\s+/,
            h = /\s+$/,
            p = /\W/,
            d = /\d/,
            v = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
            m = /^[\],:{}\s]*$/,
            g = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            y = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            b = /(?:^|:|,)(?:\s*\[)+/g,
            w = /(webkit)[ \/]([\w.]+)/,
            E = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            S = /(msie) ([\w.]+)/,
            x = /(mozilla)(?:.*? rv:([\w.]+))?/,
            T = navigator.userAgent,
            N,
            C = !1,
            k = [],
            L,
            A = Object.prototype.toString,
            O = Object.prototype.hasOwnProperty,
            M = Array.prototype.push,
            _ = Array.prototype.slice,
            D = String.prototype.trim,
            P = Array.prototype.indexOf,
            H = {};
          return (
            (r.fn = r.prototype = {
              init: function (e, i) {
                var s, a, f, l;
                if (!e) return this;
                if (e.nodeType)
                  return (this.context = this[0] = e), (this.length = 1), this;
                if (e === "body" && !i && n.body)
                  return (
                    (this.context = n),
                    (this[0] = n.body),
                    (this.selector = "body"),
                    (this.length = 1),
                    this
                  );
                if (typeof e == "string") {
                  s = u.exec(e);
                  if (s && (s[1] || !i)) {
                    if (s[1])
                      return (
                        (l = i ? i.ownerDocument || i : n),
                        (f = v.exec(e)),
                        f
                          ? r.isPlainObject(i)
                            ? ((e = [n.createElement(f[1])]),
                              r.fn.attr.call(e, i, !0))
                            : (e = [l.createElement(f[1])])
                          : ((f = r.buildFragment([s[1]], [l])),
                            (e = (f.cacheable
                              ? f.fragment.cloneNode(!0)
                              : f.fragment
                            ).childNodes)),
                        r.merge(this, e)
                      );
                    a = n.getElementById(s[2]);
                    if (a && a.parentNode) {
                      if (a.id !== s[2]) return o.find(e);
                      (this.length = 1), (this[0] = a);
                    }
                    return (this.context = n), (this.selector = e), this;
                  }
                  return !i && !p.test(e)
                    ? ((this.selector = e),
                      (this.context = n),
                      (e = n.getElementsByTagName(e)),
                      r.merge(this, e))
                    : !i || i.jquery
                    ? (i || o).find(e)
                    : r(i).find(e);
                }
                return r.isFunction(e)
                  ? o.ready(e)
                  : (e.selector !== t &&
                      ((this.selector = e.selector),
                      (this.context = e.context)),
                    r.makeArray(e, this));
              },
              selector: "",
              jquery: "1.4.3",
              length: 0,
              size: function () {
                return this.length;
              },
              toArray: function () {
                return _.call(this, 0);
              },
              get: function (e) {
                return e == null
                  ? this.toArray()
                  : e < 0
                  ? this.slice(e)[0]
                  : this[e];
              },
              pushStack: function (e, t, n) {
                var i = r();
                return (
                  r.isArray(e) ? M.apply(i, e) : r.merge(i, e),
                  (i.prevObject = this),
                  (i.context = this.context),
                  t === "find"
                    ? (i.selector =
                        this.selector + (this.selector ? " " : "") + n)
                    : t &&
                      (i.selector = this.selector + "." + t + "(" + n + ")"),
                  i
                );
              },
              each: function (e, t) {
                return r.each(this, e, t);
              },
              ready: function (e) {
                return (
                  r.bindReady(), r.isReady ? e.call(n, r) : k && k.push(e), this
                );
              },
              eq: function (e) {
                return e === -1 ? this.slice(e) : this.slice(e, +e + 1);
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              slice: function () {
                return this.pushStack(
                  _.apply(this, arguments),
                  "slice",
                  _.call(arguments).join(",")
                );
              },
              map: function (e) {
                return this.pushStack(
                  r.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              end: function () {
                return this.prevObject || r(null);
              },
              push: M,
              sort: [].sort,
              splice: [].splice,
            }),
            (r.fn.init.prototype = r.fn),
            (r.extend = r.fn.extend = function () {
              var e = arguments[0] || {},
                n = 1,
                i = arguments.length,
                s = !1,
                o,
                u,
                a,
                f,
                l;
              typeof e == "boolean" &&
                ((s = e), (e = arguments[1] || {}), (n = 2)),
                typeof e != "object" && !r.isFunction(e) && (e = {}),
                i === n && ((e = this), --n);
              for (; n < i; n++)
                if ((o = arguments[n]) != null)
                  for (u in o) {
                    (a = e[u]), (f = o[u]);
                    if (e === f) continue;
                    s && f && (r.isPlainObject(f) || (l = r.isArray(f)))
                      ? (l
                          ? ((l = !1), (clone = a && r.isArray(a) ? a : []))
                          : (clone = a && r.isPlainObject(a) ? a : {}),
                        (e[u] = r.extend(s, clone, f)))
                      : f !== t && (e[u] = f);
                  }
              return e;
            }),
            r.extend({
              noConflict: function (t) {
                return (e.$ = s), t && (e.jQuery = i), r;
              },
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                e === !0 && r.readyWait--;
                if (!r.readyWait || (e !== !0 && !r.isReady)) {
                  if (!n.body) return setTimeout(r.ready, 1);
                  r.isReady = !0;
                  if (e !== !0 && --r.readyWait > 0) return;
                  if (k) {
                    var t,
                      i = 0;
                    while ((t = k[i++])) t.call(n, r);
                    k = null;
                  }
                  r.fn.triggerHandler && r(n).triggerHandler("ready");
                }
              },
              bindReady: function () {
                if (C) return;
                C = !0;
                if (n.readyState === "complete") return setTimeout(r.ready, 1);
                if (n.addEventListener)
                  n.addEventListener("DOMContentLoaded", L, !1),
                    e.addEventListener("load", r.ready, !1);
                else if (n.attachEvent) {
                  n.attachEvent("onreadystatechange", L),
                    e.attachEvent("onload", r.ready);
                  var t = !1;
                  try {
                    t = e.frameElement == null;
                  } catch (i) {}
                  n.documentElement.doScroll && t && B();
                }
              },
              isFunction: function (e) {
                return r.type(e) === "function";
              },
              isArray:
                Array.isArray ||
                function (e) {
                  return r.type(e) === "array";
                },
              isWindow: function (e) {
                return e && typeof e == "object" && "setInterval" in e;
              },
              isNaN: function (e) {
                return e == null || !d.test(e) || isNaN(e);
              },
              type: function (e) {
                return e == null ? String(e) : H[A.call(e)] || "object";
              },
              isPlainObject: function (e) {
                if (!e || r.type(e) !== "object" || e.nodeType || r.isWindow(e))
                  return !1;
                if (
                  e.constructor &&
                  !O.call(e, "constructor") &&
                  !O.call(e.constructor.prototype, "isPrototypeOf")
                )
                  return !1;
                var n;
                for (n in e);
                return n === t || O.call(e, n);
              },
              isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
              },
              error: function (e) {
                throw e;
              },
              parseJSON: function (t) {
                if (typeof t != "string" || !t) return null;
                t = r.trim(t);
                if (m.test(t.replace(g, "@").replace(y, "]").replace(b, "")))
                  return e.JSON && e.JSON.parse
                    ? e.JSON.parse(t)
                    : new Function("return " + t)();
                r.error("Invalid JSON: " + t);
              },
              noop: function () {},
              globalEval: function (e) {
                if (e && f.test(e)) {
                  var t =
                      n.getElementsByTagName("head")[0] || n.documentElement,
                    i = n.createElement("script");
                  (i.type = "text/javascript"),
                    r.support.scriptEval
                      ? i.appendChild(n.createTextNode(e))
                      : (i.text = e),
                    t.insertBefore(i, t.firstChild),
                    t.removeChild(i);
                }
              },
              nodeName: function (e, t) {
                return (
                  e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                );
              },
              each: function (e, n, i) {
                var s,
                  o = 0,
                  u = e.length,
                  a = u === t || r.isFunction(e);
                if (i) {
                  if (a) {
                    for (s in e) if (n.apply(e[s], i) === !1) break;
                  } else for (; o < u; ) if (n.apply(e[o++], i) === !1) break;
                } else if (a) {
                  for (s in e) if (n.call(e[s], s, e[s]) === !1) break;
                } else
                  for (
                    var f = e[0];
                    o < u && n.call(f, o, f) !== !1;
                    f = e[++o]
                  );
                return e;
              },
              trim: D
                ? function (e) {
                    return e == null ? "" : D.call(e);
                  }
                : function (e) {
                    return e == null
                      ? ""
                      : e.toString().replace(c, "").replace(h, "");
                  },
              makeArray: function (e, t) {
                var n = t || [];
                if (e != null) {
                  var i = r.type(e);
                  e.length == null ||
                  i === "string" ||
                  i === "function" ||
                  i === "regexp" ||
                  r.isWindow(e)
                    ? M.call(n, e)
                    : r.merge(n, e);
                }
                return n;
              },
              inArray: function (e, t) {
                if (t.indexOf) return t.indexOf(e);
                for (var n = 0, r = t.length; n < r; n++)
                  if (t[n] === e) return n;
                return -1;
              },
              merge: function (e, n) {
                var r = e.length,
                  i = 0;
                if (typeof n.length == "number")
                  for (var s = n.length; i < s; i++) e[r++] = n[i];
                else while (n[i] !== t) e[r++] = n[i++];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                var r = [],
                  i;
                n = !!n;
                for (var s = 0, o = e.length; s < o; s++)
                  (i = !!t(e[s], s)), n !== i && r.push(e[s]);
                return r;
              },
              map: function (e, t, n) {
                var r = [],
                  i;
                for (var s = 0, o = e.length; s < o; s++)
                  (i = t(e[s], s, n)), i != null && (r[r.length] = i);
                return r.concat.apply([], r);
              },
              guid: 1,
              proxy: function (e, n, i) {
                return (
                  arguments.length === 2 &&
                    (typeof n == "string"
                      ? ((i = e), (e = i[n]), (n = t))
                      : n && !r.isFunction(n) && ((i = n), (n = t))),
                  !n &&
                    e &&
                    (n = function () {
                      return e.apply(i || this, arguments);
                    }),
                  e && (n.guid = e.guid = e.guid || n.guid || r.guid++),
                  n
                );
              },
              access: function (e, n, i, s, o, u) {
                var a = e.length;
                if (typeof n == "object") {
                  for (var f in n) r.access(e, f, n[f], s, o, i);
                  return e;
                }
                if (i !== t) {
                  s = !u && s && r.isFunction(i);
                  for (var l = 0; l < a; l++)
                    o(e[l], n, s ? i.call(e[l], l, o(e[l], n)) : i, u);
                  return e;
                }
                return a ? o(e[0], n) : t;
              },
              now: function () {
                return new Date().getTime();
              },
              uaMatch: function (e) {
                e = e.toLowerCase();
                var t =
                  w.exec(e) ||
                  E.exec(e) ||
                  S.exec(e) ||
                  (e.indexOf("compatible") < 0 && x.exec(e)) ||
                  [];
                return { browser: t[1] || "", version: t[2] || "0" };
              },
              browser: {},
            }),
            r.each(
              "Boolean Number String Function Array Date RegExp Object".split(
                " "
              ),
              function (e, t) {
                H["[object " + t + "]"] = t.toLowerCase();
              }
            ),
            (N = r.uaMatch(T)),
            N.browser &&
              ((r.browser[N.browser] = !0), (r.browser.version = N.version)),
            r.browser.webkit && (r.browser.safari = !0),
            P &&
              (r.inArray = function (e, t) {
                return P.call(t, e);
              }),
            l.test(" ") || ((c = /^[\s\xA0]+/), (h = /[\s\xA0]+$/)),
            (o = r(n)),
            n.addEventListener
              ? (L = function () {
                  n.removeEventListener("DOMContentLoaded", L, !1), r.ready();
                })
              : n.attachEvent &&
                (L = function () {
                  n.readyState === "complete" &&
                    (n.detachEvent("onreadystatechange", L), r.ready());
                }),
            (e.jQuery = e.$ = r)
          );
        })();
      (function () {
        r.support = {};
        var t = n.documentElement,
          i = n.createElement("script"),
          s = n.createElement("div"),
          o = "script" + r.now();
        (s.style.display = "none"),
          (s.innerHTML =
            "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>");
        var u = s.getElementsByTagName("*"),
          a = s.getElementsByTagName("a")[0],
          f = n.createElement("select"),
          l = f.appendChild(n.createElement("option"));
        if (!u || !u.length || !a) return;
        (r.support = {
          leadingWhitespace: s.firstChild.nodeType === 3,
          tbody: !s.getElementsByTagName("tbody").length,
          htmlSerialize: !!s.getElementsByTagName("link").length,
          style: /red/.test(a.getAttribute("style")),
          hrefNormalized: a.getAttribute("href") === "/a",
          opacity: /^0.55$/.test(a.style.opacity),
          cssFloat: !!a.style.cssFloat,
          checkOn: s.getElementsByTagName("input")[0].value === "on",
          optSelected: l.selected,
          optDisabled: !1,
          checkClone: !1,
          scriptEval: !1,
          noCloneEvent: !0,
          boxModel: null,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableHiddenOffsets: !0,
        }),
          (f.disabled = !0),
          (r.support.optDisabled = !l.disabled),
          (i.type = "text/javascript");
        try {
          i.appendChild(n.createTextNode("window." + o + "=1;"));
        } catch (c) {}
        t.insertBefore(i, t.firstChild),
          e[o] && ((r.support.scriptEval = !0), delete e[o]),
          t.removeChild(i),
          s.attachEvent &&
            s.fireEvent &&
            (s.attachEvent("onclick", function d() {
              (r.support.noCloneEvent = !1), s.detachEvent("onclick", d);
            }),
            s.cloneNode(!0).fireEvent("onclick")),
          (s = n.createElement("div")),
          (s.innerHTML =
            "<input type='radio' name='radiotest' checked='checked'/>");
        var h = n.createDocumentFragment();
        h.appendChild(s.firstChild),
          (r.support.checkClone = h
            .cloneNode(!0)
            .cloneNode(!0).lastChild.checked),
          r(function () {
            var e = n.createElement("div");
            (e.style.width = e.style.paddingLeft = "1px"),
              n.body.appendChild(e),
              (r.boxModel = r.support.boxModel = e.offsetWidth === 2),
              "zoom" in e.style &&
                ((e.style.display = "inline"),
                (e.style.zoom = 1),
                (r.support.inlineBlockNeedsLayout = e.offsetWidth === 2),
                (e.style.display = ""),
                (e.innerHTML = "<div style='width:4px;'></div>"),
                (r.support.shrinkWrapBlocks = e.offsetWidth !== 2)),
              (e.innerHTML =
                "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>");
            var t = e.getElementsByTagName("td");
            (r.support.reliableHiddenOffsets = t[0].offsetHeight === 0),
              (t[0].style.display = ""),
              (t[1].style.display = "none"),
              (r.support.reliableHiddenOffsets =
                r.support.reliableHiddenOffsets && t[0].offsetHeight === 0),
              (e.innerHTML = ""),
              (n.body.removeChild(e).style.display = "none"),
              (e = t = null);
          });
        var p = function (e) {
          var t = n.createElement("div");
          e = "on" + e;
          var r = e in t;
          return (
            r ||
              (t.setAttribute(e, "return;"), (r = typeof t[e] == "function")),
            (t = null),
            r
          );
        };
        (r.support.submitBubbles = p("submit")),
          (r.support.changeBubbles = p("change")),
          (t = i = s = u = a = null);
      })(),
        (r.props = {
          for: "htmlFor",
          class: "className",
          readonly: "readOnly",
          maxlength: "maxLength",
          cellspacing: "cellSpacing",
          rowspan: "rowSpan",
          colspan: "colSpan",
          tabindex: "tabIndex",
          usemap: "useMap",
          frameborder: "frameBorder",
        });
      var i = {},
        s = /^(?:\{.*\}|\[.*\])$/;
      r.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + r.now(),
        noData: {
          embed: !0,
          object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
          applet: !0,
        },
        data: function (n, s, o) {
          if (!r.acceptData(n)) return;
          n = n == e ? i : n;
          var u = n.nodeType,
            a = u ? n[r.expando] : null,
            f = r.cache,
            l;
          if (u && !a && typeof s == "string" && o === t) return;
          return (
            u ? a || (n[r.expando] = a = ++r.uuid) : (f = n),
            typeof s == "object"
              ? u
                ? (f[a] = r.extend(f[a], s))
                : r.extend(f, s)
              : u && !f[a] && (f[a] = {}),
            (l = u ? f[a] : f),
            o !== t && (l[s] = o),
            typeof s == "string" ? l[s] : l
          );
        },
        removeData: function (t, n) {
          if (!r.acceptData(t)) return;
          t = t == e ? i : t;
          var s = t.nodeType,
            o = s ? t[r.expando] : t,
            u = r.cache,
            a = s ? u[o] : o;
          if (n) a && (delete a[n], s && r.isEmptyObject(a) && r.removeData(t));
          else if (s && r.support.deleteExpando) delete t[r.expando];
          else if (t.removeAttribute) t.removeAttribute(r.expando);
          else if (s) delete u[o];
          else for (var f in t) delete t[f];
        },
        acceptData: function (e) {
          if (e.nodeName) {
            var t = r.noData[e.nodeName.toLowerCase()];
            if (t) return t !== !0 && e.getAttribute("classid") === t;
          }
          return !0;
        },
      }),
        r.fn.extend({
          data: function (e, n) {
            if (typeof e == "undefined")
              return this.length ? r.data(this[0]) : null;
            if (typeof e == "object")
              return this.each(function () {
                r.data(this, e);
              });
            var i = e.split(".");
            i[1] = i[1] ? "." + i[1] : "";
            if (n === t) {
              var o = this.triggerHandler("getData" + i[1] + "!", [i[0]]);
              if (o === t && this.length) {
                o = r.data(this[0], e);
                if (o === t && this[0].nodeType === 1) {
                  o = this[0].getAttribute("data-" + e);
                  if (typeof o == "string")
                    try {
                      o =
                        o === "true"
                          ? !0
                          : o === "false"
                          ? !1
                          : o === "null"
                          ? null
                          : r.isNaN(o)
                          ? s.test(o)
                            ? r.parseJSON(o)
                            : o
                          : parseFloat(o);
                    } catch (u) {}
                  else o = t;
                }
              }
              return o === t && i[1] ? this.data(i[0]) : o;
            }
            return this.each(function () {
              var t = r(this),
                s = [i[0], n];
              t.triggerHandler("setData" + i[1] + "!", s),
                r.data(this, e, n),
                t.triggerHandler("changeData" + i[1] + "!", s);
            });
          },
          removeData: function (e) {
            return this.each(function () {
              r.removeData(this, e);
            });
          },
        }),
        r.extend({
          queue: function (e, t, n) {
            if (!e) return;
            t = (t || "fx") + "queue";
            var i = r.data(e, t);
            return n
              ? (!i || r.isArray(n)
                  ? (i = r.data(e, t, r.makeArray(n)))
                  : i.push(n),
                i)
              : i || [];
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = r.queue(e, t),
              i = n.shift();
            i === "inprogress" && (i = n.shift()),
              i &&
                (t === "fx" && n.unshift("inprogress"),
                i.call(e, function () {
                  r.dequeue(e, t);
                }));
          },
        }),
        r.fn.extend({
          queue: function (e, n) {
            return (
              typeof e != "string" && ((n = e), (e = "fx")),
              n === t
                ? r.queue(this[0], e)
                : this.each(function (t) {
                    var i = r.queue(this, e, n);
                    e === "fx" && i[0] !== "inprogress" && r.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              r.dequeue(this, e);
            });
          },
          delay: function (e, t) {
            return (
              (e = r.fx ? r.fx.speeds[e] || e : e),
              (t = t || "fx"),
              this.queue(t, function () {
                var n = this;
                setTimeout(function () {
                  r.dequeue(n, t);
                }, e);
              })
            );
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
        });
      var o = /[\n\t]/g,
        u = /\s+/,
        a = /\r/g,
        f = /^(?:href|src|style)$/,
        l = /^(?:button|input)$/i,
        c = /^(?:button|input|object|select|textarea)$/i,
        h = /^a(?:rea)?$/i,
        p = /^(?:radio|checkbox)$/i;
      r.fn.extend({
        attr: function (e, t) {
          return r.access(this, e, t, !0, r.attr);
        },
        removeAttr: function (e, t) {
          return this.each(function () {
            r.attr(this, e, ""), this.nodeType === 1 && this.removeAttribute(e);
          });
        },
        addClass: function (e) {
          if (r.isFunction(e))
            return this.each(function (t) {
              var n = r(this);
              n.addClass(e.call(this, t, n.attr("class")));
            });
          if (e && typeof e == "string") {
            var t = (e || "").split(u);
            for (var n = 0, i = this.length; n < i; n++) {
              var s = this[n];
              if (s.nodeType === 1)
                if (!s.className) s.className = e;
                else {
                  var o = " " + s.className + " ",
                    a = s.className;
                  for (var f = 0, l = t.length; f < l; f++)
                    o.indexOf(" " + t[f] + " ") < 0 && (a += " " + t[f]);
                  s.className = r.trim(a);
                }
            }
          }
          return this;
        },
        removeClass: function (e) {
          if (r.isFunction(e))
            return this.each(function (t) {
              var n = r(this);
              n.removeClass(e.call(this, t, n.attr("class")));
            });
          if ((e && typeof e == "string") || e === t) {
            var n = (e || "").split(u);
            for (var i = 0, s = this.length; i < s; i++) {
              var a = this[i];
              if (a.nodeType === 1 && a.className)
                if (e) {
                  var f = (" " + a.className + " ").replace(o, " ");
                  for (var l = 0, c = n.length; l < c; l++)
                    f = f.replace(" " + n[l] + " ", " ");
                  a.className = r.trim(f);
                } else a.className = "";
            }
          }
          return this;
        },
        toggleClass: function (e, t) {
          var n = typeof e,
            i = typeof t == "boolean";
          return r.isFunction(e)
            ? this.each(function (n) {
                var i = r(this);
                i.toggleClass(e.call(this, n, i.attr("class"), t), t);
              })
            : this.each(function () {
                if (n === "string") {
                  var s,
                    o = 0,
                    a = r(this),
                    f = t,
                    l = e.split(u);
                  while ((s = l[o++]))
                    (f = i ? f : !a.hasClass(s)),
                      a[f ? "addClass" : "removeClass"](s);
                } else if (n === "undefined" || n === "boolean") this.className && r.data(this, "__className__", this.className), (this.className = this.className || e === !1 ? "" : r.data(this, "__className__") || "");
              });
        },
        hasClass: function (e) {
          var t = " " + e + " ";
          for (var n = 0, r = this.length; n < r; n++)
            if ((" " + this[n].className + " ").replace(o, " ").indexOf(t) > -1)
              return !0;
          return !1;
        },
        val: function (e) {
          if (!arguments.length) {
            var n = this[0];
            if (n) {
              if (r.nodeName(n, "option")) {
                var i = n.attributes.value;
                return !i || i.specified ? n.value : n.text;
              }
              if (r.nodeName(n, "select")) {
                var s = n.selectedIndex,
                  o = [],
                  u = n.options,
                  f = n.type === "select-one";
                if (s < 0) return null;
                for (var l = f ? s : 0, c = f ? s + 1 : u.length; l < c; l++) {
                  var h = u[l];
                  if (
                    h.selected &&
                    (r.support.optDisabled
                      ? !h.disabled
                      : h.getAttribute("disabled") === null) &&
                    (!h.parentNode.disabled ||
                      !r.nodeName(h.parentNode, "optgroup"))
                  ) {
                    e = r(h).val();
                    if (f) return e;
                    o.push(e);
                  }
                }
                return o;
              }
              return p.test(n.type) && !r.support.checkOn
                ? n.getAttribute("value") === null
                  ? "on"
                  : n.value
                : (n.value || "").replace(a, "");
            }
            return t;
          }
          var d = r.isFunction(e);
          return this.each(function (t) {
            var n = r(this),
              i = e;
            if (this.nodeType !== 1) return;
            d && (i = e.call(this, t, n.val())),
              i == null
                ? (i = "")
                : typeof i == "number"
                ? (i += "")
                : r.isArray(i) &&
                  (i = r.map(i, function (e) {
                    return e == null ? "" : e + "";
                  }));
            if (r.isArray(i) && p.test(this.type))
              this.checked = r.inArray(n.val(), i) >= 0;
            else if (r.nodeName(this, "select")) {
              var s = r.makeArray(i);
              r("option", this).each(function () {
                this.selected = r.inArray(r(this).val(), s) >= 0;
              }),
                s.length || (this.selectedIndex = -1);
            } else this.value = i;
          });
        },
      }),
        r.extend({
          attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0,
          },
          attr: function (e, n, i, s) {
            if (!e || e.nodeType === 3 || e.nodeType === 8) return t;
            if (s && n in r.attrFn) return r(e)[n](i);
            var o = e.nodeType !== 1 || !r.isXMLDoc(e),
              u = i !== t;
            n = (o && r.props[n]) || n;
            if (e.nodeType === 1) {
              var a = f.test(n);
              if (n === "selected" && !r.support.optSelected) {
                var p = e.parentNode;
                p &&
                  (p.selectedIndex, p.parentNode && p.parentNode.selectedIndex);
              }
              if ((n in e || e[n] !== t) && o && !a) {
                u &&
                  (n === "type" &&
                    l.test(e.nodeName) &&
                    e.parentNode &&
                    r.error("type property can't be changed"),
                  i === null
                    ? e.nodeType === 1 && e.removeAttribute(n)
                    : (e[n] = i));
                if (r.nodeName(e, "form") && e.getAttributeNode(n))
                  return e.getAttributeNode(n).nodeValue;
                if (n === "tabIndex") {
                  var d = e.getAttributeNode("tabIndex");
                  return d && d.specified
                    ? d.value
                    : c.test(e.nodeName) || (h.test(e.nodeName) && e.href)
                    ? 0
                    : t;
                }
                return e[n];
              }
              if (!r.support.style && o && n === "style")
                return u && (e.style.cssText = "" + i), e.style.cssText;
              u && e.setAttribute(n, "" + i);
              if (!e.attributes[n] && e.hasAttribute && !e.hasAttribute(n))
                return t;
              var v =
                !r.support.hrefNormalized && o && a
                  ? e.getAttribute(n, 2)
                  : e.getAttribute(n);
              return v === null ? t : v;
            }
          },
        });
      var d = /\.(.*)$/,
        v = /^(?:textarea|input|select)$/i,
        m = /\./g,
        g = / /g,
        y = /[^\w\s.|`]/g,
        b = function (e) {
          return e.replace(y, "\\$&");
        },
        w = { focusin: 0, focusout: 0 };
      (r.event = {
        add: function (n, i, s, o) {
          if (n.nodeType === 3 || n.nodeType === 8) return;
          r.isWindow(n) && n !== e && !n.frameElement && (n = e),
            s === !1 && (s = E);
          var u, a;
          s.handler && ((u = s), (s = u.handler)),
            s.guid || (s.guid = r.guid++);
          var f = r.data(n);
          if (!f) return;
          var l = n.nodeType ? "events" : "__events__",
            c = f[l],
            h = f.handle;
          typeof c == "function"
            ? ((h = c.handle), (c = c.events))
            : c ||
              (n.nodeType || (f[l] = f = function () {}), (f.events = c = {})),
            h ||
              (f.handle = h = function () {
                return typeof r != "undefined" && !r.event.triggered
                  ? r.event.handle.apply(h.elem, arguments)
                  : t;
              }),
            (h.elem = n),
            (i = i.split(" "));
          var p,
            d = 0,
            v;
          while ((p = i[d++])) {
            (a = u ? r.extend({}, u) : { handler: s, data: o }),
              p.indexOf(".") > -1
                ? ((v = p.split(".")),
                  (p = v.shift()),
                  (a.namespace = v.slice(0).sort().join(".")))
                : ((v = []), (a.namespace = "")),
              (a.type = p),
              a.guid || (a.guid = s.guid);
            var m = c[p],
              g = r.event.special[p] || {};
            if (!m) {
              m = c[p] = [];
              if (!g.setup || g.setup.call(n, o, v, h) === !1)
                n.addEventListener
                  ? n.addEventListener(p, h, !1)
                  : n.attachEvent && n.attachEvent("on" + p, h);
            }
            g.add &&
              (g.add.call(n, a), a.handler.guid || (a.handler.guid = s.guid)),
              m.push(a),
              (r.event.global[p] = !0);
          }
          n = null;
        },
        global: {},
        remove: function (e, t, n, i) {
          if (e.nodeType === 3 || e.nodeType === 8) return;
          n === !1 && (n = E);
          var s,
            o,
            u,
            a,
            f = 0,
            l,
            c,
            h,
            p,
            d,
            v,
            m,
            g = e.nodeType ? "events" : "__events__",
            y = r.data(e),
            w = y && y[g];
          if (!y || !w) return;
          typeof w == "function" && ((y = w), (w = w.events)),
            t && t.type && ((n = t.handler), (t = t.type));
          if (!t || (typeof t == "string" && t.charAt(0) === ".")) {
            t = t || "";
            for (o in w) r.event.remove(e, o + t);
            return;
          }
          t = t.split(" ");
          while ((o = t[f++])) {
            (m = o),
              (v = null),
              (l = o.indexOf(".") < 0),
              (c = []),
              l ||
                ((c = o.split(".")),
                (o = c.shift()),
                (h = new RegExp(
                  "(^|\\.)" +
                    r.map(c.slice(0).sort(), b).join("\\.(?:.*\\.)?") +
                    "(\\.|$)"
                ))),
              (d = w[o]);
            if (!d) continue;
            if (!n) {
              for (a = 0; a < d.length; a++) {
                v = d[a];
                if (l || h.test(v.namespace))
                  r.event.remove(e, m, v.handler, a), d.splice(a--, 1);
              }
              continue;
            }
            p = r.event.special[o] || {};
            for (a = i || 0; a < d.length; a++) {
              v = d[a];
              if (n.guid === v.guid) {
                if (l || h.test(v.namespace))
                  i == null && d.splice(a--, 1),
                    p.remove && p.remove.call(e, v);
                if (i != null) break;
              }
            }
            if (d.length === 0 || (i != null && d.length === 1))
              (!p.teardown || p.teardown.call(e, c) === !1) &&
                r.removeEvent(e, o, y.handle),
                (s = null),
                delete w[o];
          }
          if (r.isEmptyObject(w)) {
            var S = y.handle;
            S && (S.elem = null),
              delete y.events,
              delete y.handle,
              typeof y == "function"
                ? r.removeData(e, g)
                : r.isEmptyObject(y) && r.removeData(e);
          }
        },
        trigger: function (e, n, i) {
          var s = e.type || e,
            o = arguments[3];
          if (!o) {
            (e =
              typeof e == "object"
                ? e[r.expando]
                  ? e
                  : r.extend(r.Event(s), e)
                : r.Event(s)),
              s.indexOf("!") >= 0 &&
                ((e.type = s = s.slice(0, -1)), (e.exclusive = !0)),
              i ||
                (e.stopPropagation(),
                r.event.global[s] &&
                  r.each(r.cache, function () {
                    this.events &&
                      this.events[s] &&
                      r.event.trigger(e, n, this.handle.elem);
                  }));
            if (!i || i.nodeType === 3 || i.nodeType === 8) return t;
            (e.result = t), (e.target = i), (n = r.makeArray(n)), n.unshift(e);
          }
          e.currentTarget = i;
          var u = i.nodeType
            ? r.data(i, "handle")
            : (r.data(i, "__events__") || {}).handle;
          u && u.apply(i, n);
          var a = i.parentNode || i.ownerDocument;
          try {
            (i && i.nodeName && r.noData[i.nodeName.toLowerCase()]) ||
              (i["on" + s] &&
                i["on" + s].apply(i, n) === !1 &&
                ((e.result = !1), e.preventDefault()));
          } catch (f) {}
          if (!e.isPropagationStopped() && a) r.event.trigger(e, n, a, !0);
          else if (!e.isDefaultPrevented()) {
            var l = e.target,
              c,
              h = s.replace(d, ""),
              p = r.nodeName(l, "a") && h === "click",
              v = r.event.special[h] || {};
            if (
              (!v._default || v._default.call(i, e) === !1) &&
              !p &&
              !(l && l.nodeName && r.noData[l.nodeName.toLowerCase()])
            ) {
              try {
                l[h] &&
                  ((c = l["on" + h]),
                  c && (l["on" + h] = null),
                  (r.event.triggered = !0),
                  l[h]());
              } catch (m) {}
              c && (l["on" + h] = c), (r.event.triggered = !1);
            }
          }
        },
        handle: function (n) {
          var i,
            s,
            o,
            u = [],
            a,
            f,
            l = r.makeArray(arguments);
          (n = l[0] = r.event.fix(n || e.event)),
            (n.currentTarget = this),
            (i = n.type.indexOf(".") < 0 && !n.exclusive),
            i ||
              ((o = n.type.split(".")),
              (n.type = o.shift()),
              (u = o.slice(0).sort()),
              (a = new RegExp(
                "(^|\\.)" + u.join("\\.(?:.*\\.)?") + "(\\.|$)"
              ))),
            (n.namespace = n.namespace || u.join(".")),
            (f = r.data(this, this.nodeType ? "events" : "__events__")),
            typeof f == "function" && (f = f.events),
            (s = (f || {})[n.type]);
          if (f && s) {
            s = s.slice(0);
            for (var c = 0, h = s.length; c < h; c++) {
              var p = s[c];
              if (i || a.test(p.namespace)) {
                (n.handler = p.handler), (n.data = p.data), (n.handleObj = p);
                var d = p.handler.apply(this, l);
                d !== t &&
                  ((n.result = d),
                  d === !1 && (n.preventDefault(), n.stopPropagation()));
                if (n.isImmediatePropagationStopped()) break;
              }
            }
          }
          return n.result;
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(
          " "
        ),
        fix: function (e) {
          if (e[r.expando]) return e;
          var i = e;
          e = r.Event(i);
          for (var s = this.props.length, o; s; )
            (o = this.props[--s]), (e[o] = i[o]);
          e.target || (e.target = e.srcElement || n),
            e.target.nodeType === 3 && (e.target = e.target.parentNode),
            !e.relatedTarget &&
              e.fromElement &&
              (e.relatedTarget =
                e.fromElement === e.target ? e.toElement : e.fromElement);
          if (e.pageX == null && e.clientX != null) {
            var u = n.documentElement,
              a = n.body;
            (e.pageX =
              e.clientX +
              ((u && u.scrollLeft) || (a && a.scrollLeft) || 0) -
              ((u && u.clientLeft) || (a && a.clientLeft) || 0)),
              (e.pageY =
                e.clientY +
                ((u && u.scrollTop) || (a && a.scrollTop) || 0) -
                ((u && u.clientTop) || (a && a.clientTop) || 0));
          }
          return (
            e.which == null &&
              (e.charCode != null || e.keyCode != null) &&
              (e.which = e.charCode != null ? e.charCode : e.keyCode),
            !e.metaKey && e.ctrlKey && (e.metaKey = e.ctrlKey),
            !e.which &&
              e.button !== t &&
              (e.which =
                e.button & 1 ? 1 : e.button & 2 ? 3 : e.button & 4 ? 2 : 0),
            e
          );
        },
        guid: 1e8,
        proxy: r.proxy,
        special: {
          ready: { setup: r.bindReady, teardown: r.noop },
          live: {
            add: function (e) {
              r.event.add(
                this,
                M(e.origType, e.selector),
                r.extend({}, e, { handler: O, guid: e.handler.guid })
              );
            },
            remove: function (e) {
              r.event.remove(this, M(e.origType, e.selector), e);
            },
          },
          beforeunload: {
            setup: function (e, t, n) {
              r.isWindow(this) && (this.onbeforeunload = n);
            },
            teardown: function (e, t) {
              this.onbeforeunload === t && (this.onbeforeunload = null);
            },
          },
        },
      }),
        (r.removeEvent = n.removeEventListener
          ? function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n, !1);
            }
          : function (e, t, n) {
              e.detachEvent && e.detachEvent("on" + t, n);
            }),
        (r.Event = function (e) {
          if (!this.preventDefault) return new r.Event(e);
          e && e.type
            ? ((this.originalEvent = e), (this.type = e.type))
            : (this.type = e),
            (this.timeStamp = r.now()),
            (this[r.expando] = !0);
        }),
        (r.Event.prototype = {
          preventDefault: function () {
            this.isDefaultPrevented = S;
            var e = this.originalEvent;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
          },
          stopPropagation: function () {
            this.isPropagationStopped = S;
            var e = this.originalEvent;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0);
          },
          stopImmediatePropagation: function () {
            (this.isImmediatePropagationStopped = S), this.stopPropagation();
          },
          isDefaultPrevented: E,
          isPropagationStopped: E,
          isImmediatePropagationStopped: E,
        });
      var x = function (e) {
          var t = e.relatedTarget;
          try {
            while (t && t !== this) t = t.parentNode;
            t !== this &&
              ((e.type = e.data), r.event.handle.apply(this, arguments));
          } catch (n) {}
        },
        T = function (e) {
          (e.type = e.data), r.event.handle.apply(this, arguments);
        };
      r.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (
        e,
        t
      ) {
        r.event.special[e] = {
          setup: function (n) {
            r.event.add(this, t, n && n.selector ? T : x, e);
          },
          teardown: function (e) {
            r.event.remove(this, t, e && e.selector ? T : x);
          },
        };
      }),
        r.support.submitBubbles ||
          (r.event.special.submit = {
            setup: function (e, n) {
              if (this.nodeName.toLowerCase() === "form") return !1;
              r.event.add(this, "click.specialSubmit", function (e) {
                var n = e.target,
                  i = n.type;
                if (
                  (i === "submit" || i === "image") &&
                  r(n).closest("form").length
                )
                  return (e.liveFired = t), L("submit", this, arguments);
              }),
                r.event.add(this, "keypress.specialSubmit", function (e) {
                  var n = e.target,
                    i = n.type;
                  if (
                    (i === "text" || i === "password") &&
                    r(n).closest("form").length &&
                    e.keyCode === 13
                  )
                    return (e.liveFired = t), L("submit", this, arguments);
                });
            },
            teardown: function (e) {
              r.event.remove(this, ".specialSubmit");
            },
          });
      if (!r.support.changeBubbles) {
        var N,
          C = function (e) {
            var t = e.type,
              n = e.value;
            return (
              t === "radio" || t === "checkbox"
                ? (n = e.checked)
                : t === "select-multiple"
                ? (n =
                    e.selectedIndex > -1
                      ? r
                          .map(e.options, function (e) {
                            return e.selected;
                          })
                          .join("-")
                      : "")
                : e.nodeName.toLowerCase() === "select" &&
                  (n = e.selectedIndex),
              n
            );
          },
          k = function (n) {
            var i = n.target,
              s,
              o;
            if (!v.test(i.nodeName) || i.readOnly) return;
            (s = r.data(i, "_change_data")),
              (o = C(i)),
              (n.type !== "focusout" || i.type !== "radio") &&
                r.data(i, "_change_data", o);
            if (s === t || o === s) return;
            if (s != null || o)
              return (
                (n.type = "change"),
                (n.liveFired = t),
                r.event.trigger(n, arguments[1], i)
              );
          };
        (r.event.special.change = {
          filters: {
            focusout: k,
            beforedeactivate: k,
            click: function (e) {
              var t = e.target,
                n = t.type;
              if (
                n === "radio" ||
                n === "checkbox" ||
                t.nodeName.toLowerCase() === "select"
              )
                return k.call(this, e);
            },
            keydown: function (e) {
              var t = e.target,
                n = t.type;
              if (
                (e.keyCode === 13 && t.nodeName.toLowerCase() !== "textarea") ||
                (e.keyCode === 32 && (n === "checkbox" || n === "radio")) ||
                n === "select-multiple"
              )
                return k.call(this, e);
            },
            beforeactivate: function (e) {
              var t = e.target;
              r.data(t, "_change_data", C(t));
            },
          },
          setup: function (e, t) {
            if (this.type === "file") return !1;
            for (var n in N) r.event.add(this, n + ".specialChange", N[n]);
            return v.test(this.nodeName);
          },
          teardown: function (e) {
            return (
              r.event.remove(this, ".specialChange"), v.test(this.nodeName)
            );
          },
        }),
          (N = r.event.special.change.filters),
          (N.focus = N.beforeactivate);
      }
      n.addEventListener &&
        r.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          function i(e) {
            return (
              (e = r.event.fix(e)),
              (e.type = t),
              r.event.trigger(e, null, e.target)
            );
          }
          r.event.special[t] = {
            setup: function () {
              w[t]++ === 0 && n.addEventListener(e, i, !0);
            },
            teardown: function () {
              --w[t] === 0 && n.removeEventListener(e, i, !0);
            },
          };
        }),
        r.each(["bind", "one"], function (e, n) {
          r.fn[n] = function (e, i, s) {
            if (typeof e == "object") {
              for (var o in e) this[n](o, i, e[o], s);
              return this;
            }
            if (r.isFunction(i) || i === !1) (s = i), (i = t);
            var u =
              n === "one"
                ? r.proxy(s, function (e) {
                    return r(this).unbind(e, u), s.apply(this, arguments);
                  })
                : s;
            if (e === "unload" && n !== "one") this.one(e, i, s);
            else
              for (var a = 0, f = this.length; a < f; a++)
                r.event.add(this[a], e, u, i);
            return this;
          };
        }),
        r.fn.extend({
          unbind: function (e, t) {
            if (typeof e == "object" && !e.preventDefault)
              for (var n in e) this.unbind(n, e[n]);
            else
              for (var i = 0, s = this.length; i < s; i++)
                r.event.remove(this[i], e, t);
            return this;
          },
          delegate: function (e, t, n, r) {
            return this.live(t, n, r, e);
          },
          undelegate: function (e, t, n) {
            return arguments.length === 0
              ? this.unbind("live")
              : this.die(t, null, n, e);
          },
          trigger: function (e, t) {
            return this.each(function () {
              r.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            if (this[0]) {
              var n = r.Event(e);
              return (
                n.preventDefault(),
                n.stopPropagation(),
                r.event.trigger(n, t, this[0]),
                n.result
              );
            }
          },
          toggle: function (e) {
            var t = arguments,
              n = 1;
            while (n < t.length) r.proxy(e, t[n++]);
            return this.click(
              r.proxy(e, function (i) {
                var s = (r.data(this, "lastToggle" + e.guid) || 0) % n;
                return (
                  r.data(this, "lastToggle" + e.guid, s + 1),
                  i.preventDefault(),
                  t[s].apply(this, arguments) || !1
                );
              })
            );
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        });
      var A = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout",
      };
      r.each(["live", "die"], function (e, n) {
        r.fn[n] = function (e, i, s, o) {
          var u,
            a = 0,
            f,
            l,
            c,
            h = o || this.selector,
            p = o ? this : r(this.context);
          if (typeof e == "object" && !e.preventDefault) {
            for (var v in e) p[n](v, i, e[v], h);
            return this;
          }
          r.isFunction(i) && ((s = i), (i = t)), (e = (e || "").split(" "));
          while ((u = e[a++]) != null) {
            (f = d.exec(u)),
              (l = ""),
              f && ((l = f[0]), (u = u.replace(d, "")));
            if (u === "hover") {
              e.push("mouseenter" + l, "mouseleave" + l);
              continue;
            }
            (c = u),
              u === "focus" || u === "blur"
                ? (e.push(A[u] + l), (u += l))
                : (u = (A[u] || u) + l);
            if (n === "live")
              for (var m = 0, g = p.length; m < g; m++)
                r.event.add(p[m], "live." + M(u, h), {
                  data: i,
                  selector: h,
                  handler: s,
                  origType: u,
                  origHandler: s,
                  preType: c,
                });
            else p.unbind("live." + M(u, h), s);
          }
          return this;
        };
      }),
        r.each(
          "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(
            " "
          ),
          function (e, t) {
            (r.fn[t] = function (e, n) {
              return (
                n == null && ((n = e), (e = null)),
                arguments.length > 0 ? this.bind(t, e, n) : this.trigger(t)
              );
            }),
              r.attrFn && (r.attrFn[t] = !0);
          }
        ),
        e.attachEvent &&
          !e.addEventListener &&
          r(e).bind("unload", function () {
            for (var e in r.cache)
              if (r.cache[e].handle)
                try {
                  r.event.remove(r.cache[e].handle.elem);
                } catch (t) {}
          }),
        (function () {
          function g(e, t, n, r, i, s) {
            for (var o = 0, u = r.length; o < u; o++) {
              var a = r[o];
              if (a) {
                a = a[e];
                var f = !1;
                while (a) {
                  if (a.sizcache === n) {
                    f = r[a.sizset];
                    break;
                  }
                  a.nodeType === 1 && !s && ((a.sizcache = n), (a.sizset = o));
                  if (a.nodeName.toLowerCase() === t) {
                    f = a;
                    break;
                  }
                  a = a[e];
                }
                r[o] = f;
              }
            }
          }
          function y(e, t, n, r, i, s) {
            for (var o = 0, u = r.length; o < u; o++) {
              var f = r[o];
              if (f) {
                f = f[e];
                var l = !1;
                while (f) {
                  if (f.sizcache === n) {
                    l = r[f.sizset];
                    break;
                  }
                  if (f.nodeType === 1) {
                    s || ((f.sizcache = n), (f.sizset = o));
                    if (typeof t != "string") {
                      if (f === t) {
                        l = !0;
                        break;
                      }
                    } else if (a.filter(t, [f]).length > 0) {
                      l = f;
                      break;
                    }
                  }
                  f = f[e];
                }
                r[o] = l;
              }
            }
          }
          var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            i = 0,
            s = Object.prototype.toString,
            o = !1,
            u = !0;
          [0, 0].sort(function () {
            return (u = !1), 0;
          });
          var a = function (t, r, i, o) {
            (i = i || []), (r = r || n);
            var u = r;
            if (r.nodeType !== 1 && r.nodeType !== 9) return [];
            if (!t || typeof t != "string") return i;
            var c = [],
              h,
              d,
              v,
              m,
              g = !0,
              y = a.isXML(r),
              w = t,
              E,
              S,
              x,
              T;
            do {
              e.exec(""), (h = e.exec(w));
              if (h) {
                (w = h[3]), c.push(h[1]);
                if (h[2]) {
                  m = h[3];
                  break;
                }
              }
            } while (h);
            if (c.length > 1 && l.exec(t))
              if (c.length === 2 && f.relative[c[0]]) d = b(c[0] + c[1], r);
              else {
                d = f.relative[c[0]] ? [r] : a(c.shift(), r);
                while (c.length)
                  (t = c.shift()),
                    f.relative[t] && (t += c.shift()),
                    (d = b(t, d));
              }
            else {
              !o &&
                c.length > 1 &&
                r.nodeType === 9 &&
                !y &&
                f.match.ID.test(c[0]) &&
                !f.match.ID.test(c[c.length - 1]) &&
                ((E = a.find(c.shift(), r, y)),
                (r = E.expr ? a.filter(E.expr, E.set)[0] : E.set[0]));
              if (r) {
                (E = o
                  ? { expr: c.pop(), set: p(o) }
                  : a.find(
                      c.pop(),
                      c.length !== 1 ||
                        (c[0] !== "~" && c[0] !== "+") ||
                        !r.parentNode
                        ? r
                        : r.parentNode,
                      y
                    )),
                  (d = E.expr ? a.filter(E.expr, E.set) : E.set),
                  c.length > 0 ? (v = p(d)) : (g = !1);
                while (c.length)
                  (S = c.pop()),
                    (x = S),
                    f.relative[S] ? (x = c.pop()) : (S = ""),
                    x == null && (x = r),
                    f.relative[S](v, x, y);
              } else v = c = [];
            }
            v || (v = d), v || a.error(S || t);
            if (s.call(v) === "[object Array]")
              if (!g) i.push.apply(i, v);
              else if (r && r.nodeType === 1)
                for (T = 0; v[T] != null; T++)
                  v[T] &&
                    (v[T] === !0 ||
                      (v[T].nodeType === 1 && a.contains(r, v[T]))) &&
                    i.push(d[T]);
              else
                for (T = 0; v[T] != null; T++)
                  v[T] && v[T].nodeType === 1 && i.push(d[T]);
            else p(v, i);
            return m && (a(m, u, i, o), a.uniqueSort(i)), i;
          };
          (a.uniqueSort = function (e) {
            if (v) {
              (o = u), e.sort(v);
              if (o)
                for (var t = 1; t < e.length; t++)
                  e[t] === e[t - 1] && e.splice(t--, 1);
            }
            return e;
          }),
            (a.matches = function (e, t) {
              return a(e, null, null, t);
            }),
            (a.matchesSelector = function (e, t) {
              return a(t, null, null, [e]).length > 0;
            }),
            (a.find = function (e, t, n) {
              var r;
              if (!e) return [];
              for (var i = 0, s = f.order.length; i < s; i++) {
                var o = f.order[i],
                  u;
                if ((u = f.leftMatch[o].exec(e))) {
                  var a = u[1];
                  u.splice(1, 1);
                  if (a.substr(a.length - 1) !== "\\") {
                    (u[1] = (u[1] || "").replace(/\\/g, "")),
                      (r = f.find[o](u, t, n));
                    if (r != null) {
                      e = e.replace(f.match[o], "");
                      break;
                    }
                  }
                }
              }
              return (
                r || (r = t.getElementsByTagName("*")), { set: r, expr: e }
              );
            }),
            (a.filter = function (e, n, r, i) {
              var s = e,
                o = [],
                u = n,
                l,
                c,
                h = n && n[0] && a.isXML(n[0]);
              while (e && n.length) {
                for (var p in f.filter)
                  if ((l = f.leftMatch[p].exec(e)) != null && l[2]) {
                    var d = f.filter[p],
                      v,
                      m,
                      g = l[1];
                    (c = !1), l.splice(1, 1);
                    if (g.substr(g.length - 1) === "\\") continue;
                    u === o && (o = []);
                    if (f.preFilter[p]) {
                      l = f.preFilter[p](l, u, r, o, i, h);
                      if (!l) c = v = !0;
                      else if (l === !0) continue;
                    }
                    if (l)
                      for (var y = 0; (m = u[y]) != null; y++)
                        if (m) {
                          v = d(m, l, y, u);
                          var b = i ^ !!v;
                          r && v != null
                            ? b
                              ? (c = !0)
                              : (u[y] = !1)
                            : b && (o.push(m), (c = !0));
                        }
                    if (v !== t) {
                      r || (u = o), (e = e.replace(f.match[p], ""));
                      if (!c) return [];
                      break;
                    }
                  }
                if (e === s) {
                  if (c != null) break;
                  a.error(e);
                }
                s = e;
              }
              return u;
            }),
            (a.error = function (e) {
              throw "Syntax error, unrecognized expression: " + e;
            });
          var f = (a.selectors = {
              order: ["ID", "NAME", "TAG"],
              match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
              },
              leftMatch: {},
              attrMap: { class: "className", for: "htmlFor" },
              attrHandle: {
                href: function (e) {
                  return e.getAttribute("href");
                },
              },
              relative: {
                "+": function (e, t) {
                  var n = typeof t == "string",
                    r = n && !/\W/.test(t),
                    i = n && !r;
                  r && (t = t.toLowerCase());
                  for (var s = 0, o = e.length, u; s < o; s++)
                    if ((u = e[s])) {
                      while ((u = u.previousSibling) && u.nodeType !== 1);
                      e[s] =
                        i || (u && u.nodeName.toLowerCase() === t)
                          ? u || !1
                          : u === t;
                    }
                  i && a.filter(t, e, !0);
                },
                ">": function (e, t) {
                  var n = typeof t == "string",
                    r,
                    i = 0,
                    s = e.length;
                  if (n && !/\W/.test(t)) {
                    t = t.toLowerCase();
                    for (; i < s; i++) {
                      r = e[i];
                      if (r) {
                        var o = r.parentNode;
                        e[i] = o.nodeName.toLowerCase() === t ? o : !1;
                      }
                    }
                  } else {
                    for (; i < s; i++)
                      (r = e[i]),
                        r && (e[i] = n ? r.parentNode : r.parentNode === t);
                    n && a.filter(t, e, !0);
                  }
                },
                "": function (e, t, n) {
                  var r = i++,
                    s = y,
                    o;
                  typeof t == "string" &&
                    !/\W/.test(t) &&
                    ((t = t.toLowerCase()), (o = t), (s = g)),
                    s("parentNode", t, r, e, o, n);
                },
                "~": function (e, t, n) {
                  var r = i++,
                    s = y,
                    o;
                  typeof t == "string" &&
                    !/\W/.test(t) &&
                    ((t = t.toLowerCase()), (o = t), (s = g)),
                    s("previousSibling", t, r, e, o, n);
                },
              },
              find: {
                ID: function (e, t, n) {
                  if (typeof t.getElementById != "undefined" && !n) {
                    var r = t.getElementById(e[1]);
                    return r && r.parentNode ? [r] : [];
                  }
                },
                NAME: function (e, t) {
                  if (typeof t.getElementsByName != "undefined") {
                    var n = [],
                      r = t.getElementsByName(e[1]);
                    for (var i = 0, s = r.length; i < s; i++)
                      r[i].getAttribute("name") === e[1] && n.push(r[i]);
                    return n.length === 0 ? null : n;
                  }
                },
                TAG: function (e, t) {
                  return t.getElementsByTagName(e[1]);
                },
              },
              preFilter: {
                CLASS: function (e, t, n, r, i, s) {
                  e = " " + e[1].replace(/\\/g, "") + " ";
                  if (s) return e;
                  for (var o = 0, u; (u = t[o]) != null; o++)
                    u &&
                      (i ^
                      (u.className &&
                        (" " + u.className + " ")
                          .replace(/[\t\n]/g, " ")
                          .indexOf(e) >= 0)
                        ? n || r.push(u)
                        : n && (t[o] = !1));
                  return !1;
                },
                ID: function (e) {
                  return e[1].replace(/\\/g, "");
                },
                TAG: function (e, t) {
                  return e[1].toLowerCase();
                },
                CHILD: function (e) {
                  if (e[1] === "nth") {
                    var t = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
                      (e[2] === "even" && "2n") ||
                        (e[2] === "odd" && "2n+1") ||
                        (!/\D/.test(e[2]) && "0n+" + e[2]) ||
                        e[2]
                    );
                    (e[2] = t[1] + (t[2] || 1) - 0), (e[3] = t[3] - 0);
                  }
                  return (e[0] = i++), e;
                },
                ATTR: function (e, t, n, r, i, s) {
                  var o = e[1].replace(/\\/g, "");
                  return (
                    !s && f.attrMap[o] && (e[1] = f.attrMap[o]),
                    e[2] === "~=" && (e[4] = " " + e[4] + " "),
                    e
                  );
                },
                PSEUDO: function (t, n, r, i, s) {
                  if (t[1] === "not") {
                    if (
                      !((e.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))
                    ) {
                      var o = a.filter(t[3], n, r, !0 ^ s);
                      return r || i.push.apply(i, o), !1;
                    }
                    t[3] = a(t[3], null, null, n);
                  } else if (f.match.POS.test(t[0]) || f.match.CHILD.test(t[0]))
                    return !0;
                  return t;
                },
                POS: function (e) {
                  return e.unshift(!0), e;
                },
              },
              filters: {
                enabled: function (e) {
                  return e.disabled === !1 && e.type !== "hidden";
                },
                disabled: function (e) {
                  return e.disabled === !0;
                },
                checked: function (e) {
                  return e.checked === !0;
                },
                selected: function (e) {
                  return e.parentNode.selectedIndex, e.selected === !0;
                },
                parent: function (e) {
                  return !!e.firstChild;
                },
                empty: function (e) {
                  return !e.firstChild;
                },
                has: function (e, t, n) {
                  return !!a(n[3], e).length;
                },
                header: function (e) {
                  return /h\d/i.test(e.nodeName);
                },
                text: function (e) {
                  return "text" === e.type;
                },
                radio: function (e) {
                  return "radio" === e.type;
                },
                checkbox: function (e) {
                  return "checkbox" === e.type;
                },
                file: function (e) {
                  return "file" === e.type;
                },
                password: function (e) {
                  return "password" === e.type;
                },
                submit: function (e) {
                  return "submit" === e.type;
                },
                image: function (e) {
                  return "image" === e.type;
                },
                reset: function (e) {
                  return "reset" === e.type;
                },
                button: function (e) {
                  return (
                    "button" === e.type || e.nodeName.toLowerCase() === "button"
                  );
                },
                input: function (e) {
                  return /input|select|textarea|button/i.test(e.nodeName);
                },
              },
              setFilters: {
                first: function (e, t) {
                  return t === 0;
                },
                last: function (e, t, n, r) {
                  return t === r.length - 1;
                },
                even: function (e, t) {
                  return t % 2 === 0;
                },
                odd: function (e, t) {
                  return t % 2 === 1;
                },
                lt: function (e, t, n) {
                  return t < n[3] - 0;
                },
                gt: function (e, t, n) {
                  return t > n[3] - 0;
                },
                nth: function (e, t, n) {
                  return n[3] - 0 === t;
                },
                eq: function (e, t, n) {
                  return n[3] - 0 === t;
                },
              },
              filter: {
                PSEUDO: function (e, t, n, r) {
                  var i = t[1],
                    s = f.filters[i];
                  if (s) return s(e, n, t, r);
                  if (i === "contains")
                    return (
                      (
                        e.textContent ||
                        e.innerText ||
                        a.getText([e]) ||
                        ""
                      ).indexOf(t[3]) >= 0
                    );
                  if (i === "not") {
                    var o = t[3];
                    for (var u = 0, l = o.length; u < l; u++)
                      if (o[u] === e) return !1;
                    return !0;
                  }
                  a.error("Syntax error, unrecognized expression: " + i);
                },
                CHILD: function (e, t) {
                  var n = t[1],
                    r = e;
                  switch (n) {
                    case "only":
                    case "first":
                      while ((r = r.previousSibling))
                        if (r.nodeType === 1) return !1;
                      if (n === "first") return !0;
                      r = e;
                    case "last":
                      while ((r = r.nextSibling))
                        if (r.nodeType === 1) return !1;
                      return !0;
                    case "nth":
                      var i = t[2],
                        s = t[3];
                      if (i === 1 && s === 0) return !0;
                      var o = t[0],
                        u = e.parentNode;
                      if (u && (u.sizcache !== o || !e.nodeIndex)) {
                        var a = 0;
                        for (r = u.firstChild; r; r = r.nextSibling)
                          r.nodeType === 1 && (r.nodeIndex = ++a);
                        u.sizcache = o;
                      }
                      var f = e.nodeIndex - s;
                      return i === 0 ? f === 0 : f % i === 0 && f / i >= 0;
                  }
                },
                ID: function (e, t) {
                  return e.nodeType === 1 && e.getAttribute("id") === t;
                },
                TAG: function (e, t) {
                  return (
                    (t === "*" && e.nodeType === 1) ||
                    e.nodeName.toLowerCase() === t
                  );
                },
                CLASS: function (e, t) {
                  return (
                    (
                      " " +
                      (e.className || e.getAttribute("class")) +
                      " "
                    ).indexOf(t) > -1
                  );
                },
                ATTR: function (e, t) {
                  var n = t[1],
                    r = f.attrHandle[n]
                      ? f.attrHandle[n](e)
                      : e[n] != null
                      ? e[n]
                      : e.getAttribute(n),
                    i = r + "",
                    s = t[2],
                    o = t[4];
                  return r == null
                    ? s === "!="
                    : s === "="
                    ? i === o
                    : s === "*="
                    ? i.indexOf(o) >= 0
                    : s === "~="
                    ? (" " + i + " ").indexOf(o) >= 0
                    : o
                    ? s === "!="
                      ? i !== o
                      : s === "^="
                      ? i.indexOf(o) === 0
                      : s === "$="
                      ? i.substr(i.length - o.length) === o
                      : s === "|="
                      ? i === o || i.substr(0, o.length + 1) === o + "-"
                      : !1
                    : i && r !== !1;
                },
                POS: function (e, t, n, r) {
                  var i = t[2],
                    s = f.setFilters[i];
                  if (s) return s(e, n, t, r);
                },
              },
            }),
            l = f.match.POS,
            c = function (e, t) {
              return "\\" + (t - 0 + 1);
            };
          for (var h in f.match)
            (f.match[h] = new RegExp(
              f.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source
            )),
              (f.leftMatch[h] = new RegExp(
                /(^(?:.|\r|\n)*?)/.source +
                  f.match[h].source.replace(/\\(\d+)/g, c)
              ));
          var p = function (e, t) {
            return (
              (e = Array.prototype.slice.call(e, 0)),
              t ? (t.push.apply(t, e), t) : e
            );
          };
          try {
            Array.prototype.slice.call(n.documentElement.childNodes, 0)[0]
              .nodeType;
          } catch (d) {
            p = function (e, t) {
              var n = t || [],
                r = 0;
              if (s.call(e) === "[object Array]")
                Array.prototype.push.apply(n, e);
              else if (typeof e.length == "number")
                for (var i = e.length; r < i; r++) n.push(e[r]);
              else for (; e[r]; r++) n.push(e[r]);
              return n;
            };
          }
          var v, m;
          n.documentElement.compareDocumentPosition
            ? (v = function (e, t) {
                return e === t
                  ? ((o = !0), 0)
                  : !e.compareDocumentPosition || !t.compareDocumentPosition
                  ? e.compareDocumentPosition
                    ? -1
                    : 1
                  : e.compareDocumentPosition(t) & 4
                  ? -1
                  : 1;
              })
            : ((v = function (e, t) {
                var n = [],
                  r = [],
                  i = e.parentNode,
                  s = t.parentNode,
                  u = i,
                  a,
                  f;
                if (e === t) return (o = !0), 0;
                if (i === s) return m(e, t);
                if (!i) return -1;
                if (!s) return 1;
                while (u) n.unshift(u), (u = u.parentNode);
                u = s;
                while (u) r.unshift(u), (u = u.parentNode);
                (a = n.length), (f = r.length);
                for (var l = 0; l < a && l < f; l++)
                  if (n[l] !== r[l]) return m(n[l], r[l]);
                return l === a ? m(e, r[l], -1) : m(n[l], t, 1);
              }),
              (m = function (e, t, n) {
                if (e === t) return n;
                var r = e.nextSibling;
                while (r) {
                  if (r === t) return -1;
                  r = r.nextSibling;
                }
                return 1;
              })),
            (a.getText = function (e) {
              var t = "",
                n;
              for (var r = 0; e[r]; r++)
                (n = e[r]),
                  n.nodeType === 3 || n.nodeType === 4
                    ? (t += n.nodeValue)
                    : n.nodeType !== 8 && (t += a.getText(n.childNodes));
              return t;
            }),
            (function () {
              var e = n.createElement("div"),
                r = "script" + new Date().getTime();
              e.innerHTML = "<a name='" + r + "'/>";
              var i = n.documentElement;
              i.insertBefore(e, i.firstChild),
                n.getElementById(r) &&
                  ((f.find.ID = function (e, n, r) {
                    if (typeof n.getElementById != "undefined" && !r) {
                      var i = n.getElementById(e[1]);
                      return i
                        ? i.id === e[1] ||
                          (typeof i.getAttributeNode != "undefined" &&
                            i.getAttributeNode("id").nodeValue === e[1])
                          ? [i]
                          : t
                        : [];
                    }
                  }),
                  (f.filter.ID = function (e, t) {
                    var n =
                      typeof e.getAttributeNode != "undefined" &&
                      e.getAttributeNode("id");
                    return e.nodeType === 1 && n && n.nodeValue === t;
                  })),
                i.removeChild(e),
                (i = e = null);
            })(),
            (function () {
              var e = n.createElement("div");
              e.appendChild(n.createComment("")),
                e.getElementsByTagName("*").length > 0 &&
                  (f.find.TAG = function (e, t) {
                    var n = t.getElementsByTagName(e[1]);
                    if (e[1] === "*") {
                      var r = [];
                      for (var i = 0; n[i]; i++)
                        n[i].nodeType === 1 && r.push(n[i]);
                      n = r;
                    }
                    return n;
                  }),
                (e.innerHTML = "<a href='#'></a>"),
                e.firstChild &&
                  typeof e.firstChild.getAttribute != "undefined" &&
                  e.firstChild.getAttribute("href") !== "#" &&
                  (f.attrHandle.href = function (e) {
                    return e.getAttribute("href", 2);
                  }),
                (e = null);
            })(),
            n.querySelectorAll &&
              (function () {
                var e = a,
                  t = n.createElement("div");
                t.innerHTML = "<p class='TEST'></p>";
                if (
                  t.querySelectorAll &&
                  t.querySelectorAll(".TEST").length === 0
                )
                  return;
                a = function (t, r, i, s) {
                  r = r || n;
                  if (!s && !a.isXML(r))
                    if (r.nodeType === 9)
                      try {
                        return p(r.querySelectorAll(t), i);
                      } catch (o) {}
                    else if (
                      r.nodeType === 1 &&
                      r.nodeName.toLowerCase() !== "object"
                    ) {
                      var u = r.id,
                        f = (r.id = "__sizzle__");
                      try {
                        return p(r.querySelectorAll("#" + f + " " + t), i);
                      } catch (l) {
                      } finally {
                        u ? (r.id = u) : r.removeAttribute("id");
                      }
                    }
                  return e(t, r, i, s);
                };
                for (var r in e) a[r] = e[r];
                t = null;
              })(),
            (function () {
              var e = n.documentElement,
                t =
                  e.matchesSelector ||
                  e.mozMatchesSelector ||
                  e.webkitMatchesSelector ||
                  e.msMatchesSelector,
                r = !1;
              try {
                t.call(n.documentElement, ":sizzle");
              } catch (i) {
                r = !0;
              }
              t &&
                (a.matchesSelector = function (e, n) {
                  try {
                    if (r || !f.match.PSEUDO.test(n)) return t.call(e, n);
                  } catch (i) {}
                  return a(n, null, null, [e]).length > 0;
                });
            })(),
            (function () {
              var e = n.createElement("div");
              e.innerHTML =
                "<div class='test e'></div><div class='test'></div>";
              if (
                !e.getElementsByClassName ||
                e.getElementsByClassName("e").length === 0
              )
                return;
              e.lastChild.className = "e";
              if (e.getElementsByClassName("e").length === 1) return;
              f.order.splice(1, 0, "CLASS"),
                (f.find.CLASS = function (e, t, n) {
                  if (typeof t.getElementsByClassName != "undefined" && !n)
                    return t.getElementsByClassName(e[1]);
                }),
                (e = null);
            })(),
            (a.contains = n.documentElement.contains
              ? function (e, t) {
                  return e !== t && (e.contains ? e.contains(t) : !0);
                }
              : function (e, t) {
                  return !!(e.compareDocumentPosition(t) & 16);
                }),
            (a.isXML = function (e) {
              var t = (e ? e.ownerDocument || e : 0).documentElement;
              return t ? t.nodeName !== "HTML" : !1;
            });
          var b = function (e, t) {
            var n = [],
              r = "",
              i,
              s = t.nodeType ? [t] : t;
            while ((i = f.match.PSEUDO.exec(e)))
              (r += i[0]), (e = e.replace(f.match.PSEUDO, ""));
            e = f.relative[e] ? e + "*" : e;
            for (var o = 0, u = s.length; o < u; o++) a(e, s[o], n);
            return a.filter(r, n);
          };
          (r.find = a),
            (r.expr = a.selectors),
            (r.expr[":"] = r.expr.filters),
            (r.unique = a.uniqueSort),
            (r.text = a.getText),
            (r.isXMLDoc = a.isXML),
            (r.contains = a.contains);
        })();
      var _ = /Until$/,
        D = /^(?:parents|prevUntil|prevAll)/,
        P = /,/,
        H = /^.[^:#\[\.,]*$/,
        B = Array.prototype.slice,
        j = r.expr.match.POS;
      r.fn.extend({
        find: function (e) {
          var t = this.pushStack("", "find", e),
            n = 0;
          for (var i = 0, s = this.length; i < s; i++) {
            (n = t.length), r.find(e, this[i], t);
            if (i > 0)
              for (var o = n; o < t.length; o++)
                for (var u = 0; u < n; u++)
                  if (t[u] === t[o]) {
                    t.splice(o--, 1);
                    break;
                  }
          }
          return t;
        },
        has: function (e) {
          var t = r(e);
          return this.filter(function () {
            for (var e = 0, n = t.length; e < n; e++)
              if (r.contains(this, t[e])) return !0;
          });
        },
        not: function (e) {
          return this.pushStack(I(this, e, !1), "not", e);
        },
        filter: function (e) {
          return this.pushStack(I(this, e, !0), "filter", e);
        },
        is: function (e) {
          return !!e && r.filter(e, this).length > 0;
        },
        closest: function (e, t) {
          var n = [],
            i,
            s,
            o = this[0];
          if (r.isArray(e)) {
            var u,
              a = {},
              f,
              l = 1;
            if (o && e.length) {
              for (i = 0, s = e.length; i < s; i++)
                (f = e[i]),
                  a[f] ||
                    (a[f] = r.expr.match.POS.test(f)
                      ? r(f, t || this.context)
                      : f);
              while (o && o.ownerDocument && o !== t) {
                for (f in a)
                  (u = a[f]),
                    (u.jquery ? u.index(o) > -1 : r(o).is(u)) &&
                      n.push({ selector: f, elem: o, level: l });
                (o = o.parentNode), l++;
              }
            }
            return n;
          }
          var c = j.test(e) ? r(e, t || this.context) : null;
          for (i = 0, s = this.length; i < s; i++) {
            o = this[i];
            while (o) {
              if (c ? c.index(o) > -1 : r.find.matchesSelector(o, e)) {
                n.push(o);
                break;
              }
              o = o.parentNode;
              if (!o || !o.ownerDocument || o === t) break;
            }
          }
          return (
            (n = n.length > 1 ? r.unique(n) : n),
            this.pushStack(n, "closest", e)
          );
        },
        index: function (e) {
          return !e || typeof e == "string"
            ? r.inArray(this[0], e ? r(e) : this.parent().children())
            : r.inArray(e.jquery ? e[0] : e, this);
        },
        add: function (e, t) {
          var n =
              typeof e == "string" ? r(e, t || this.context) : r.makeArray(e),
            i = r.merge(this.get(), n);
          return this.pushStack(F(n[0]) || F(i[0]) ? i : r.unique(i));
        },
        andSelf: function () {
          return this.add(this.prevObject);
        },
      }),
        r.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && t.nodeType !== 11 ? t : null;
            },
            parents: function (e) {
              return r.dir(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return r.dir(e, "parentNode", n);
            },
            next: function (e) {
              return r.nth(e, 2, "nextSibling");
            },
            prev: function (e) {
              return r.nth(e, 2, "previousSibling");
            },
            nextAll: function (e) {
              return r.dir(e, "nextSibling");
            },
            prevAll: function (e) {
              return r.dir(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return r.dir(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return r.dir(e, "previousSibling", n);
            },
            siblings: function (e) {
              return r.sibling(e.parentNode.firstChild, e);
            },
            children: function (e) {
              return r.sibling(e.firstChild);
            },
            contents: function (e) {
              return r.nodeName(e, "iframe")
                ? e.contentDocument || e.contentWindow.document
                : r.makeArray(e.childNodes);
            },
          },
          function (e, t) {
            r.fn[e] = function (n, i) {
              var s = r.map(this, t, n);
              return (
                _.test(e) || (i = n),
                i && typeof i == "string" && (s = r.filter(i, s)),
                (s = this.length > 1 ? r.unique(s) : s),
                (this.length > 1 || P.test(i)) &&
                  D.test(e) &&
                  (s = s.reverse()),
                this.pushStack(s, e, B.call(arguments).join(","))
              );
            };
          }
        ),
        r.extend({
          filter: function (e, t, n) {
            return (
              n && (e = ":not(" + e + ")"),
              t.length === 1
                ? r.find.matchesSelector(t[0], e)
                  ? [t[0]]
                  : []
                : r.find.matches(e, t)
            );
          },
          dir: function (e, n, i) {
            var s = [],
              o = e[n];
            while (
              o &&
              o.nodeType !== 9 &&
              (i === t || o.nodeType !== 1 || !r(o).is(i))
            )
              o.nodeType === 1 && s.push(o), (o = o[n]);
            return s;
          },
          nth: function (e, t, n, r) {
            t = t || 1;
            var i = 0;
            for (; e; e = e[n]) if (e.nodeType === 1 && ++i === t) break;
            return e;
          },
          sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling)
              e.nodeType === 1 && e !== t && n.push(e);
            return n;
          },
        });
      var q = / jQuery\d+="(?:\d+|null)"/g,
        R = /^\s+/,
        U = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        z = /<([\w:]+)/,
        W = /<tbody/i,
        X = /<|&#?\w+;/,
        V = /<(?:script|object|embed|option|style)/i,
        $ = /checked\s*(?:[^=]|=\s*.checked.)/i,
        J = /\=([^="'>\s]+\/)>/g,
        K = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          legend: [1, "<fieldset>", "</fieldset>"],
          thead: [1, "<table>", "</table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
          area: [1, "<map>", "</map>"],
          _default: [0, "", ""],
        };
      (K.optgroup = K.option),
        (K.tbody = K.tfoot = K.colgroup = K.caption = K.thead),
        (K.th = K.td),
        r.support.htmlSerialize || (K._default = [1, "div<div>", "</div>"]),
        r.fn.extend({
          text: function (e) {
            return r.isFunction(e)
              ? this.each(function (t) {
                  var n = r(this);
                  n.text(e.call(this, t, n.text()));
                })
              : typeof e != "object" && e !== t
              ? this.empty().append(
                  ((this[0] && this[0].ownerDocument) || n).createTextNode(e)
                )
              : r.text(this);
          },
          wrapAll: function (e) {
            if (r.isFunction(e))
              return this.each(function (t) {
                r(this).wrapAll(e.call(this, t));
              });
            if (this[0]) {
              var t = r(e, this[0].ownerDocument).eq(0).clone(!0);
              this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1)
                      e = e.firstChild;
                    return e;
                  })
                  .append(this);
            }
            return this;
          },
          wrapInner: function (e) {
            return r.isFunction(e)
              ? this.each(function (t) {
                  r(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = r(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            return this.each(function () {
              r(this).wrapAll(e);
            });
          },
          unwrap: function () {
            return this.parent()
              .each(function () {
                r.nodeName(this, "body") ||
                  r(this).replaceWith(this.childNodes);
              })
              .end();
          },
          append: function () {
            return this.domManip(arguments, !0, function (e) {
              this.nodeType === 1 && this.appendChild(e);
            });
          },
          prepend: function () {
            return this.domManip(arguments, !0, function (e) {
              this.nodeType === 1 && this.insertBefore(e, this.firstChild);
            });
          },
          before: function () {
            if (this[0] && this[0].parentNode)
              return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this);
              });
            if (arguments.length) {
              var e = r(arguments[0]);
              return (
                e.push.apply(e, this.toArray()),
                this.pushStack(e, "before", arguments)
              );
            }
          },
          after: function () {
            if (this[0] && this[0].parentNode)
              return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling);
              });
            if (arguments.length) {
              var e = this.pushStack(this, "after", arguments);
              return e.push.apply(e, r(arguments[0]).toArray()), e;
            }
          },
          remove: function (e, t) {
            for (var n = 0, i; (i = this[n]) != null; n++)
              if (!e || r.filter(e, [i]).length)
                !t &&
                  i.nodeType === 1 &&
                  (r.cleanData(i.getElementsByTagName("*")), r.cleanData([i])),
                  i.parentNode && i.parentNode.removeChild(i);
            return this;
          },
          empty: function () {
            for (var e = 0, t; (t = this[e]) != null; e++) {
              t.nodeType === 1 && r.cleanData(t.getElementsByTagName("*"));
              while (t.firstChild) t.removeChild(t.firstChild);
            }
            return this;
          },
          clone: function (e) {
            var t = this.map(function () {
              if (!r.support.noCloneEvent && !r.isXMLDoc(this)) {
                var e = this.outerHTML,
                  t = this.ownerDocument;
                if (!e) {
                  var n = t.createElement("div");
                  n.appendChild(this.cloneNode(!0)), (e = n.innerHTML);
                }
                return r.clean(
                  [e.replace(q, "").replace(J, '="$1">').replace(R, "")],
                  t
                )[0];
              }
              return this.cloneNode(!0);
            });
            return e === !0 && (G(this, t), G(this.find("*"), t.find("*"))), t;
          },
          html: function (e) {
            if (e === t)
              return this[0] && this[0].nodeType === 1
                ? this[0].innerHTML.replace(q, "")
                : null;
            if (
              typeof e == "string" &&
              !V.test(e) &&
              (r.support.leadingWhitespace || !R.test(e)) &&
              !K[(z.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = e.replace(U, "<$1></$2>");
              try {
                for (var n = 0, i = this.length; n < i; n++)
                  this[n].nodeType === 1 &&
                    (r.cleanData(this[n].getElementsByTagName("*")),
                    (this[n].innerHTML = e));
              } catch (s) {
                this.empty().append(e);
              }
            } else
              r.isFunction(e)
                ? this.each(function (t) {
                    var n = r(this);
                    n.html(e.call(this, t, n.html()));
                  })
                : this.empty().append(e);
            return this;
          },
          replaceWith: function (e) {
            return this[0] && this[0].parentNode
              ? r.isFunction(e)
                ? this.each(function (t) {
                    var n = r(this),
                      i = n.html();
                    n.replaceWith(e.call(this, t, i));
                  })
                : (typeof e != "string" && (e = r(e).detach()),
                  this.each(function () {
                    var t = this.nextSibling,
                      n = this.parentNode;
                    r(this).remove(), t ? r(t).before(e) : r(n).append(e);
                  }))
              : this.pushStack(r(r.isFunction(e) ? e() : e), "replaceWith", e);
          },
          detach: function (e) {
            return this.remove(e, !0);
          },
          domManip: function (e, n, i) {
            var s,
              o,
              u = e[0],
              a = [],
              f,
              l;
            if (
              !r.support.checkClone &&
              arguments.length === 3 &&
              typeof u == "string" &&
              $.test(u)
            )
              return this.each(function () {
                r(this).domManip(e, n, i, !0);
              });
            if (r.isFunction(u))
              return this.each(function (s) {
                var o = r(this);
                (e[0] = u.call(this, s, n ? o.html() : t)), o.domManip(e, n, i);
              });
            if (this[0]) {
              (l = u && u.parentNode),
                r.support.parentNode &&
                l &&
                l.nodeType === 11 &&
                l.childNodes.length === this.length
                  ? (s = { fragment: l })
                  : (s = r.buildFragment(e, this, a)),
                (f = s.fragment),
                f.childNodes.length === 1
                  ? (o = f = f.firstChild)
                  : (o = f.firstChild);
              if (o) {
                n = n && r.nodeName(o, "tr");
                for (var c = 0, h = this.length; c < h; c++)
                  i.call(
                    n ? Q(this[c], o) : this[c],
                    c > 0 || s.cacheable || this.length > 1
                      ? f.cloneNode(!0)
                      : f
                  );
              }
              a.length && r.each(a, Y);
            }
            return this;
          },
        }),
        (r.buildFragment = function (e, t, i) {
          var s,
            o,
            u,
            a = t && t[0] ? t[0].ownerDocument || t[0] : n;
          return (
            e.length === 1 &&
              typeof e[0] == "string" &&
              e[0].length < 512 &&
              a === n &&
              !V.test(e[0]) &&
              (r.support.checkClone || !$.test(e[0])) &&
              ((o = !0), (u = r.fragments[e[0]]), u && u !== 1 && (s = u)),
            s || ((s = a.createDocumentFragment()), r.clean(e, a, s, i)),
            o && (r.fragments[e[0]] = u ? s : 1),
            { fragment: s, cacheable: o }
          );
        }),
        (r.fragments = {}),
        r.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            r.fn[e] = function (n) {
              var i = [],
                s = r(n),
                o = this.length === 1 && this[0].parentNode;
              if (
                o &&
                o.nodeType === 11 &&
                o.childNodes.length === 1 &&
                s.length === 1
              )
                return s[t](this[0]), this;
              for (var u = 0, a = s.length; u < a; u++) {
                var f = (u > 0 ? this.clone(!0) : this).get();
                r(s[u])[t](f), (i = i.concat(f));
              }
              return this.pushStack(i, e, s.selector);
            };
          }
        ),
        r.extend({
          clean: function (e, t, i, s) {
            (t = t || n),
              typeof t.createElement == "undefined" &&
                (t = t.ownerDocument || (t[0] && t[0].ownerDocument) || n);
            var o = [];
            for (var u = 0, a; (a = e[u]) != null; u++) {
              typeof a == "number" && (a += "");
              if (!a) continue;
              if (typeof a == "string" && !X.test(a)) a = t.createTextNode(a);
              else if (typeof a == "string") {
                a = a.replace(U, "<$1></$2>");
                var f = (z.exec(a) || ["", ""])[1].toLowerCase(),
                  l = K[f] || K._default,
                  c = l[0],
                  h = t.createElement("div");
                h.innerHTML = l[1] + a + l[2];
                while (c--) h = h.lastChild;
                if (!r.support.tbody) {
                  var p = W.test(a),
                    d =
                      f === "table" && !p
                        ? h.firstChild && h.firstChild.childNodes
                        : l[1] === "<table>" && !p
                        ? h.childNodes
                        : [];
                  for (var v = d.length - 1; v >= 0; --v)
                    r.nodeName(d[v], "tbody") &&
                      !d[v].childNodes.length &&
                      d[v].parentNode.removeChild(d[v]);
                }
                !r.support.leadingWhitespace &&
                  R.test(a) &&
                  h.insertBefore(t.createTextNode(R.exec(a)[0]), h.firstChild),
                  (a = h.childNodes);
              }
              a.nodeType ? o.push(a) : (o = r.merge(o, a));
            }
            if (i)
              for (u = 0; o[u]; u++)
                s &&
                r.nodeName(o[u], "script") &&
                (!o[u].type || o[u].type.toLowerCase() === "text/javascript")
                  ? s.push(
                      o[u].parentNode ? o[u].parentNode.removeChild(o[u]) : o[u]
                    )
                  : (o[u].nodeType === 1 &&
                      o.splice.apply(
                        o,
                        [u + 1, 0].concat(
                          r.makeArray(o[u].getElementsByTagName("script"))
                        )
                      ),
                    i.appendChild(o[u]));
            return o;
          },
          cleanData: function (e) {
            var t,
              n,
              i = r.cache,
              s = r.event.special,
              o = r.support.deleteExpando;
            for (var u = 0, a; (a = e[u]) != null; u++) {
              if (a.nodeName && r.noData[a.nodeName.toLowerCase()]) continue;
              n = a[r.expando];
              if (n) {
                t = i[n];
                if (t && t.events)
                  for (var f in t.events)
                    s[f] ? r.event.remove(a, f) : r.removeEvent(a, f, t.handle);
                o
                  ? delete a[r.expando]
                  : a.removeAttribute && a.removeAttribute(r.expando),
                  delete i[n];
              }
            }
          },
        });
      var Z = /alpha\([^)]*\)/i,
        et = /opacity=([^)]*)/,
        tt = /-([a-z])/gi,
        nt = /([A-Z])/g,
        rt = /^-?\d+(?:px)?$/i,
        it = /^-?\d/,
        st = { position: "absolute", visibility: "hidden", display: "block" },
        ot = ["Left", "Right"],
        ut = ["Top", "Bottom"],
        at,
        ft = n.defaultView && n.defaultView.getComputedStyle,
        lt = function (e, t) {
          return t.toUpperCase();
        };
      (r.fn.css = function (e, n) {
        return arguments.length === 2 && n === t
          ? this
          : r.access(this, e, n, !0, function (e, n, i) {
              return i !== t ? r.style(e, n, i) : r.css(e, n);
            });
      }),
        r.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = at(e, "opacity", "opacity");
                  return n === "" ? "1" : n;
                }
                return e.style.opacity;
              },
            },
          },
          cssNumber: {
            zIndex: !0,
            fontWeight: !0,
            opacity: !0,
            zoom: !0,
            lineHeight: !0,
          },
          cssProps: { float: r.support.cssFloat ? "cssFloat" : "styleFloat" },
          style: function (e, n, i, s) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var o,
              u = r.camelCase(n),
              a = e.style,
              f = r.cssHooks[u];
            n = r.cssProps[u] || u;
            if (i === t)
              return f && "get" in f && (o = f.get(e, !1, s)) !== t ? o : a[n];
            if ((typeof i == "number" && isNaN(i)) || i == null) return;
            typeof i == "number" && !r.cssNumber[u] && (i += "px");
            if (!f || !("set" in f) || (i = f.set(e, i)) !== t)
              try {
                a[n] = i;
              } catch (l) {}
          },
          css: function (e, n, i) {
            var s,
              o = r.camelCase(n),
              u = r.cssHooks[o];
            n = r.cssProps[o] || o;
            if (u && "get" in u && (s = u.get(e, !0, i)) !== t) return s;
            if (at) return at(e, n, o);
          },
          swap: function (e, t, n) {
            var r = {};
            for (var i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
            n.call(e);
            for (i in t) e.style[i] = r[i];
          },
          camelCase: function (e) {
            return e.replace(tt, lt);
          },
        }),
        (r.curCSS = r.css),
        r.each(["height", "width"], function (e, t) {
          r.cssHooks[t] = {
            get: function (e, n, i) {
              var s;
              if (n)
                return (
                  e.offsetWidth !== 0
                    ? (s = ct(e, t, i))
                    : r.swap(e, st, function () {
                        s = ct(e, t, i);
                      }),
                  s + "px"
                );
            },
            set: function (e, t) {
              if (!rt.test(t)) return t;
              t = parseFloat(t);
              if (t >= 0) return t + "px";
            },
          };
        }),
        r.support.opacity ||
          (r.cssHooks.opacity = {
            get: function (e, t) {
              return et.test(
                (t && e.currentStyle
                  ? e.currentStyle.filter
                  : e.style.filter) || ""
              )
                ? parseFloat(RegExp.$1) / 100 + ""
                : t
                ? "1"
                : "";
            },
            set: function (e, t) {
              var n = e.style;
              n.zoom = 1;
              var i = r.isNaN(t) ? "" : "alpha(opacity=" + t * 100 + ")",
                s = n.filter || "";
              n.filter = Z.test(s) ? s.replace(Z, i) : n.filter + " " + i;
            },
          }),
        ft
          ? (at = function (e, n, i) {
              var s, o, u;
              i = i.replace(nt, "-$1").toLowerCase();
              if (!(o = e.ownerDocument.defaultView)) return t;
              if ((u = o.getComputedStyle(e, null)))
                (s = u.getPropertyValue(i)),
                  s === "" &&
                    !r.contains(e.ownerDocument.documentElement, e) &&
                    (s = r.style(e, i));
              return s;
            })
          : n.documentElement.currentStyle &&
            (at = function (e, t) {
              var n,
                r,
                i = e.currentStyle && e.currentStyle[t],
                s = e.style;
              return (
                !rt.test(i) &&
                  it.test(i) &&
                  ((n = s.left),
                  (r = e.runtimeStyle.left),
                  (e.runtimeStyle.left = e.currentStyle.left),
                  (s.left = t === "fontSize" ? "1em" : i || 0),
                  (i = s.pixelLeft + "px"),
                  (s.left = n),
                  (e.runtimeStyle.left = r)),
                i
              );
            }),
        r.expr &&
          r.expr.filters &&
          ((r.expr.filters.hidden = function (e) {
            var t = e.offsetWidth,
              n = e.offsetHeight;
            return (
              (t === 0 && n === 0) ||
              (!r.support.reliableHiddenOffsets &&
                (e.style.display || r.css(e, "display")) === "none")
            );
          }),
          (r.expr.filters.visible = function (e) {
            return !r.expr.filters.hidden(e);
          }));
      var ht = r.now(),
        pt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        dt = /^(?:select|textarea)/i,
        vt = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        mt = /^(?:GET|HEAD|DELETE)$/,
        gt = /\[\]$/,
        yt = /\=\?(&|$)/,
        bt = /\?/,
        wt = /([?&])_=[^&]*/,
        Et = /^(\w+:)?\/\/([^\/?#]+)/,
        St = /%20/g,
        xt = /#.*$/,
        Tt = r.fn.load;
      r.fn.extend({
        load: function (e, t, n) {
          if (typeof e != "string" && Tt) return Tt.apply(this, arguments);
          if (!this.length) return this;
          var i = e.indexOf(" ");
          if (i >= 0) {
            var s = e.slice(i, e.length);
            e = e.slice(0, i);
          }
          var o = "GET";
          t &&
            (r.isFunction(t)
              ? ((n = t), (t = null))
              : typeof t == "object" &&
                ((t = r.param(t, r.ajaxSettings.traditional)), (o = "POST")));
          var u = this;
          return (
            r.ajax({
              url: e,
              type: o,
              dataType: "html",
              data: t,
              complete: function (e, t) {
                (t === "success" || t === "notmodified") &&
                  u.html(
                    s
                      ? r("<div>")
                          .append(e.responseText.replace(pt, ""))
                          .find(s)
                      : e.responseText
                  ),
                  n && u.each(n, [e.responseText, t, e]);
              },
            }),
            this
          );
        },
        serialize: function () {
          return r.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            return this.elements ? r.makeArray(this.elements) : this;
          })
            .filter(function () {
              return (
                this.name &&
                !this.disabled &&
                (this.checked || dt.test(this.nodeName) || vt.test(this.type))
              );
            })
            .map(function (e, t) {
              var n = r(this).val();
              return n == null
                ? null
                : r.isArray(n)
                ? r.map(n, function (e, n) {
                    return { name: t.name, value: e };
                  })
                : { name: t.name, value: n };
            })
            .get();
        },
      }),
        r.each(
          "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
            " "
          ),
          function (e, t) {
            r.fn[t] = function (e) {
              return this.bind(t, e);
            };
          }
        ),
        r.extend({
          get: function (e, t, n, i) {
            return (
              r.isFunction(t) && ((i = i || n), (n = t), (t = null)),
              r.ajax({ type: "GET", url: e, data: t, success: n, dataType: i })
            );
          },
          getScript: function (e, t) {
            return r.get(e, null, t, "script");
          },
          getJSON: function (e, t, n) {
            return r.get(e, t, n, "json");
          },
          post: function (e, t, n, i) {
            return (
              r.isFunction(t) && ((i = i || n), (n = t), (t = {})),
              r.ajax({ type: "POST", url: e, data: t, success: n, dataType: i })
            );
          },
          ajaxSetup: function (e) {
            r.extend(r.ajaxSettings, e);
          },
          ajaxSettings: {
            url: location.href,
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            xhr: function () {
              return new e.XMLHttpRequest();
            },
            accepts: {
              xml: "application/xml, text/xml",
              html: "text/html",
              script: "text/javascript, application/javascript",
              json: "application/json, text/javascript",
              text: "text/plain",
              _default: "*/*",
            },
          },
          ajax: function (i) {
            var s = r.extend(!0, {}, r.ajaxSettings, i),
              o,
              u,
              a,
              f = s.type.toUpperCase(),
              l = mt.test(f);
            (s.url = s.url.replace(xt, "")),
              (s.context = i && i.context != null ? i.context : s),
              s.data &&
                s.processData &&
                typeof s.data != "string" &&
                (s.data = r.param(s.data, s.traditional));
            if (s.dataType === "jsonp") {
              if (f === "GET")
                yt.test(s.url) ||
                  (s.url +=
                    (bt.test(s.url) ? "&" : "?") +
                    (s.jsonp || "callback") +
                    "=?");
              else if (!s.data || !yt.test(s.data))
                s.data =
                  (s.data ? s.data + "&" : "") + (s.jsonp || "callback") + "=?";
              s.dataType = "json";
            }
            if (
              s.dataType === "json" &&
              ((s.data && yt.test(s.data)) || yt.test(s.url))
            ) {
              (o = s.jsonpCallback || "jsonp" + ht++),
                s.data && (s.data = (s.data + "").replace(yt, "=" + o + "$1")),
                (s.url = s.url.replace(yt, "=" + o + "$1")),
                (s.dataType = "script");
              var c = e[o];
              e[o] = function (n) {
                (a = n),
                  r.handleSuccess(s, w, u, a),
                  r.handleComplete(s, w, u, a);
                if (r.isFunction(c)) c(n);
                else {
                  e[o] = t;
                  try {
                    delete e[o];
                  } catch (i) {}
                }
                m && m.removeChild(g);
              };
            }
            s.dataType === "script" && s.cache === null && (s.cache = !1);
            if (s.cache === !1 && f === "GET") {
              var h = r.now(),
                p = s.url.replace(wt, "$1_=" + h);
              s.url =
                p +
                (p === s.url ? (bt.test(s.url) ? "&" : "?") + "_=" + h : "");
            }
            s.data &&
              f === "GET" &&
              (s.url += (bt.test(s.url) ? "&" : "?") + s.data),
              s.global && r.active++ === 0 && r.event.trigger("ajaxStart");
            var d = Et.exec(s.url),
              v =
                d &&
                ((d[1] && d[1] !== location.protocol) ||
                  d[2] !== location.host);
            if (s.dataType === "script" && f === "GET" && v) {
              var m = n.getElementsByTagName("head")[0] || n.documentElement,
                g = n.createElement("script");
              s.scriptCharset && (g.charset = s.scriptCharset), (g.src = s.url);
              if (!o) {
                var y = !1;
                g.onload = g.onreadystatechange = function () {
                  !y &&
                    (!this.readyState ||
                      this.readyState === "loaded" ||
                      this.readyState === "complete") &&
                    ((y = !0),
                    r.handleSuccess(s, w, u, a),
                    r.handleComplete(s, w, u, a),
                    (g.onload = g.onreadystatechange = null),
                    m && g.parentNode && m.removeChild(g));
                };
              }
              return m.insertBefore(g, m.firstChild), t;
            }
            var b = !1,
              w = s.xhr();
            if (!w) return;
            s.username
              ? w.open(f, s.url, s.async, s.username, s.password)
              : w.open(f, s.url, s.async);
            try {
              ((s.data != null && !l) || (i && i.contentType)) &&
                w.setRequestHeader("Content-Type", s.contentType),
                s.ifModified &&
                  (r.lastModified[s.url] &&
                    w.setRequestHeader(
                      "If-Modified-Since",
                      r.lastModified[s.url]
                    ),
                  r.etag[s.url] &&
                    w.setRequestHeader("If-None-Match", r.etag[s.url])),
                v || w.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                w.setRequestHeader(
                  "Accept",
                  s.dataType && s.accepts[s.dataType]
                    ? s.accepts[s.dataType] + ", */*; q=0.01"
                    : s.accepts._default
                );
            } catch (E) {}
            if (s.beforeSend && s.beforeSend.call(s.context, w, s) === !1)
              return (
                s.global && r.active-- === 1 && r.event.trigger("ajaxStop"),
                w.abort(),
                !1
              );
            s.global && r.triggerGlobal(s, "ajaxSend", [w, s]);
            var S = (w.onreadystatechange = function (e) {
              if (!w || w.readyState === 0 || e === "abort")
                b || r.handleComplete(s, w, u, a),
                  (b = !0),
                  w && (w.onreadystatechange = r.noop);
              else if (!b && w && (w.readyState === 4 || e === "timeout")) {
                (b = !0),
                  (w.onreadystatechange = r.noop),
                  (u =
                    e === "timeout"
                      ? "timeout"
                      : r.httpSuccess(w)
                      ? s.ifModified && r.httpNotModified(w, s.url)
                        ? "notmodified"
                        : "success"
                      : "error");
                var t;
                if (u === "success")
                  try {
                    a = r.httpData(w, s.dataType, s);
                  } catch (n) {
                    (u = "parsererror"), (t = n);
                  }
                u === "success" || u === "notmodified"
                  ? o || r.handleSuccess(s, w, u, a)
                  : r.handleError(s, w, u, t),
                  o || r.handleComplete(s, w, u, a),
                  e === "timeout" && w.abort(),
                  s.async && (w = null);
              }
            });
            try {
              var x = w.abort;
              w.abort = function () {
                w && x.call && x.call(w), S("abort");
              };
            } catch (T) {}
            s.async &&
              s.timeout > 0 &&
              setTimeout(function () {
                w && !b && S("timeout");
              }, s.timeout);
            try {
              w.send(l || s.data == null ? null : s.data);
            } catch (N) {
              r.handleError(s, w, null, N), r.handleComplete(s, w, u, a);
            }
            return s.async || S(), w;
          },
          param: function (e, n) {
            var i = [],
              s = function (e, t) {
                (t = r.isFunction(t) ? t() : t),
                  (i[i.length] =
                    encodeURIComponent(e) + "=" + encodeURIComponent(t));
              };
            n === t && (n = r.ajaxSettings.traditional);
            if (r.isArray(e) || e.jquery)
              r.each(e, function () {
                s(this.name, this.value);
              });
            else for (var o in e) Nt(o, e[o], n, s);
            return i.join("&").replace(St, "+");
          },
        }),
        r.extend({
          active: 0,
          lastModified: {},
          etag: {},
          handleError: function (e, t, n, i) {
            e.error && e.error.call(e.context, t, n, i),
              e.global && r.triggerGlobal(e, "ajaxError", [t, e, i]);
          },
          handleSuccess: function (e, t, n, i) {
            e.success && e.success.call(e.context, i, n, t),
              e.global && r.triggerGlobal(e, "ajaxSuccess", [t, e]);
          },
          handleComplete: function (e, t, n) {
            e.complete && e.complete.call(e.context, t, n),
              e.global && r.triggerGlobal(e, "ajaxComplete", [t, e]),
              e.global && r.active-- === 1 && r.event.trigger("ajaxStop");
          },
          triggerGlobal: function (e, t, n) {
            (e.context && e.context.url == null
              ? r(e.context)
              : r.event
            ).trigger(t, n);
          },
          httpSuccess: function (e) {
            try {
              return (
                (!e.status && location.protocol === "file:") ||
                (e.status >= 200 && e.status < 300) ||
                e.status === 304 ||
                e.status === 1223
              );
            } catch (t) {}
            return !1;
          },
          httpNotModified: function (e, t) {
            var n = e.getResponseHeader("Last-Modified"),
              i = e.getResponseHeader("Etag");
            return (
              n && (r.lastModified[t] = n),
              i && (r.etag[t] = i),
              e.status === 304
            );
          },
          httpData: function (e, t, n) {
            var i = e.getResponseHeader("content-type") || "",
              s = t === "xml" || (!t && i.indexOf("xml") >= 0),
              o = s ? e.responseXML : e.responseText;
            return (
              s &&
                o.documentElement.nodeName === "parsererror" &&
                r.error("parsererror"),
              n && n.dataFilter && (o = n.dataFilter(o, t)),
              typeof o == "string" &&
                (t === "json" || (!t && i.indexOf("json") >= 0)
                  ? (o = r.parseJSON(o))
                  : (t === "script" || (!t && i.indexOf("javascript") >= 0)) &&
                    r.globalEval(o)),
              o
            );
          },
        }),
        e.ActiveXObject &&
          (r.ajaxSettings.xhr = function () {
            if (e.location.protocol !== "file:")
              try {
                return new e.XMLHttpRequest();
              } catch (t) {}
            try {
              return new e.ActiveXObject("Microsoft.XMLHTTP");
            } catch (n) {}
          }),
        (r.support.ajax = !!r.ajaxSettings.xhr());
      var Ct = {},
        kt = /^(?:toggle|show|hide)$/,
        Lt = /^([+\-]=)?([\d+.\-]+)(.*)$/,
        At,
        Ot = [
          [
            "height",
            "marginTop",
            "marginBottom",
            "paddingTop",
            "paddingBottom",
          ],
          ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
          ["opacity"],
        ];
      r.fn.extend({
        show: function (e, t, n) {
          if (e || e === 0) return this.animate(Mt("show", 3), e, t, n);
          for (var i = 0, s = this.length; i < s; i++)
            !r.data(this[i], "olddisplay") &&
              this[i].style.display === "none" &&
              (this[i].style.display = ""),
              this[i].style.display === "" &&
                r.css(this[i], "display") === "none" &&
                r.data(this[i], "olddisplay", _t(this[i].nodeName));
          for (i = 0; i < s; i++)
            this[i].style.display = r.data(this[i], "olddisplay") || "";
          return this;
        },
        hide: function (e, t, n) {
          if (e || e === 0) return this.animate(Mt("hide", 3), e, t, n);
          for (var i = 0, s = this.length; i < s; i++) {
            var o = r.css(this[i], "display");
            o !== "none" && r.data(this[i], "olddisplay", o);
          }
          for (i = 0; i < s; i++) this[i].style.display = "none";
          return this;
        },
        _toggle: r.fn.toggle,
        toggle: function (e, t, n) {
          var i = typeof e == "boolean";
          return (
            r.isFunction(e) && r.isFunction(t)
              ? this._toggle.apply(this, arguments)
              : e == null || i
              ? this.each(function () {
                  var t = i ? e : r(this).is(":hidden");
                  r(this)[t ? "show" : "hide"]();
                })
              : this.animate(Mt("toggle", 3), e, t, n),
            this
          );
        },
        fadeTo: function (e, t, n, r) {
          return this.filter(":hidden")
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, i) {
          var s = r.speed(t, n, i);
          return r.isEmptyObject(e)
            ? this.each(s.complete)
            : this[s.queue === !1 ? "each" : "queue"](function () {
                var t = r.extend({}, s),
                  n,
                  i = this.nodeType === 1,
                  o = i && r(this).is(":hidden"),
                  u = this;
                for (n in e) {
                  var a = r.camelCase(n);
                  n !== a && ((e[a] = e[n]), delete e[n], (n = a));
                  if ((e[n] === "hide" && o) || (e[n] === "show" && !o))
                    return t.complete.call(this);
                  if (i && (n === "height" || n === "width")) {
                    t.overflow = [
                      this.style.overflow,
                      this.style.overflowX,
                      this.style.overflowY,
                    ];
                    if (
                      r.css(this, "display") === "inline" &&
                      r.css(this, "float") === "none"
                    )
                      if (!r.support.inlineBlockNeedsLayout)
                        this.style.display = "inline-block";
                      else {
                        var f = _t(this.nodeName);
                        f === "inline"
                          ? (this.style.display = "inline-block")
                          : ((this.style.display = "inline"),
                            (this.style.zoom = 1));
                      }
                  }
                  r.isArray(e[n]) &&
                    (((t.specialEasing = t.specialEasing || {})[n] = e[n][1]),
                    (e[n] = e[n][0]));
                }
                return (
                  t.overflow != null && (this.style.overflow = "hidden"),
                  (t.curAnim = r.extend({}, e)),
                  r.each(e, function (n, i) {
                    var s = new r.fx(u, t, n);
                    if (kt.test(i))
                      s[i === "toggle" ? (o ? "show" : "hide") : i](e);
                    else {
                      var a = Lt.exec(i),
                        f = s.cur(!0) || 0;
                      if (a) {
                        var l = parseFloat(a[2]),
                          c = a[3] || "px";
                        c !== "px" &&
                          (r.style(u, n, (l || 1) + c),
                          (f = ((l || 1) / s.cur(!0)) * f),
                          r.style(u, n, f + c)),
                          a[1] && (l = (a[1] === "-=" ? -1 : 1) * l + f),
                          s.custom(f, l, c);
                      } else s.custom(f, i, "");
                    }
                  }),
                  !0
                );
              });
        },
        stop: function (e, t) {
          var n = r.timers;
          return (
            e && this.queue([]),
            this.each(function () {
              for (var e = n.length - 1; e >= 0; e--)
                n[e].elem === this && (t && n[e](!0), n.splice(e, 1));
            }),
            t || this.dequeue(),
            this
          );
        },
      }),
        r.each(
          {
            slideDown: Mt("show", 1),
            slideUp: Mt("hide", 1),
            slideToggle: Mt("toggle", 1),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
          },
          function (e, t) {
            r.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        r.extend({
          speed: function (e, t, n) {
            var i =
              e && typeof e == "object"
                ? r.extend({}, e)
                : {
                    complete: n || (!n && t) || (r.isFunction(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !r.isFunction(t) && t),
                  };
            return (
              (i.duration = r.fx.off
                ? 0
                : typeof i.duration == "number"
                ? i.duration
                : i.duration in r.fx.speeds
                ? r.fx.speeds[i.duration]
                : r.fx.speeds._default),
              (i.old = i.complete),
              (i.complete = function () {
                i.queue !== !1 && r(this).dequeue(),
                  r.isFunction(i.old) && i.old.call(this);
              }),
              i
            );
          },
          easing: {
            linear: function (e, t, n, r) {
              return n + r * e;
            },
            swing: function (e, t, n, r) {
              return (-Math.cos(e * Math.PI) / 2 + 0.5) * r + n;
            },
          },
          timers: [],
          fx: function (e, t, n) {
            (this.options = t),
              (this.elem = e),
              (this.prop = n),
              t.orig || (t.orig = {});
          },
        }),
        (r.fx.prototype = {
          update: function () {
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
              (r.fx.step[this.prop] || r.fx.step._default)(this);
          },
          cur: function () {
            if (
              this.elem[this.prop] == null ||
              (!!this.elem.style && this.elem.style[this.prop] != null)
            ) {
              var e = parseFloat(r.css(this.elem, this.prop));
              return e && e > -1e4 ? e : 0;
            }
            return this.elem[this.prop];
          },
          custom: function (e, t, n) {
            function o(e) {
              return i.step(e);
            }
            (this.startTime = r.now()),
              (this.start = e),
              (this.end = t),
              (this.unit = n || this.unit || "px"),
              (this.now = this.start),
              (this.pos = this.state = 0);
            var i = this,
              s = r.fx;
            (o.elem = this.elem),
              o() &&
                r.timers.push(o) &&
                !At &&
                (At = setInterval(s.tick, s.interval));
          },
          show: function () {
            (this.options.orig[this.prop] = r.style(this.elem, this.prop)),
              (this.options.show = !0),
              this.custom(
                this.prop === "width" || this.prop === "height" ? 1 : 0,
                this.cur()
              ),
              r(this.elem).show();
          },
          hide: function () {
            (this.options.orig[this.prop] = r.style(this.elem, this.prop)),
              (this.options.hide = !0),
              this.custom(this.cur(), 0);
          },
          step: function (e) {
            var t = r.now(),
              n = !0;
            if (e || t >= this.options.duration + this.startTime) {
              (this.now = this.end),
                (this.pos = this.state = 1),
                this.update(),
                (this.options.curAnim[this.prop] = !0);
              for (var i in this.options.curAnim)
                this.options.curAnim[i] !== !0 && (n = !1);
              if (n) {
                if (
                  this.options.overflow != null &&
                  !r.support.shrinkWrapBlocks
                ) {
                  var s = this.elem,
                    o = this.options;
                  r.each(["", "X", "Y"], function (e, t) {
                    s.style["overflow" + t] = o.overflow[e];
                  });
                }
                this.options.hide && r(this.elem).hide();
                if (this.options.hide || this.options.show)
                  for (var u in this.options.curAnim)
                    r.style(this.elem, u, this.options.orig[u]);
                this.options.complete.call(this.elem);
              }
              return !1;
            }
            var a = t - this.startTime;
            this.state = a / this.options.duration;
            var f =
                this.options.specialEasing &&
                this.options.specialEasing[this.prop],
              l = this.options.easing || (r.easing.swing ? "swing" : "linear");
            return (
              (this.pos = r.easing[f || l](
                this.state,
                a,
                0,
                1,
                this.options.duration
              )),
              (this.now = this.start + (this.end - this.start) * this.pos),
              this.update(),
              !0
            );
          },
        }),
        r.extend(r.fx, {
          tick: function () {
            var e = r.timers;
            for (var t = 0; t < e.length; t++) e[t]() || e.splice(t--, 1);
            e.length || r.fx.stop();
          },
          interval: 13,
          stop: function () {
            clearInterval(At), (At = null);
          },
          speeds: { slow: 600, fast: 200, _default: 400 },
          step: {
            opacity: function (e) {
              r.style(e.elem, "opacity", e.now);
            },
            _default: function (e) {
              e.elem.style && e.elem.style[e.prop] != null
                ? (e.elem.style[e.prop] =
                    (e.prop === "width" || e.prop === "height"
                      ? Math.max(0, e.now)
                      : e.now) + e.unit)
                : (e.elem[e.prop] = e.now);
            },
          },
        }),
        r.expr &&
          r.expr.filters &&
          (r.expr.filters.animated = function (e) {
            return r.grep(r.timers, function (t) {
              return e === t.elem;
            }).length;
          });
      var Dt = /^t(?:able|d|h)$/i,
        Pt = /^(?:body|html)$/i;
      "getBoundingClientRect" in n.documentElement
        ? (r.fn.offset = function (e) {
            var t = this[0],
              n;
            if (e)
              return this.each(function (t) {
                r.offset.setOffset(this, e, t);
              });
            if (!t || !t.ownerDocument) return null;
            if (t === t.ownerDocument.body) return r.offset.bodyOffset(t);
            try {
              n = t.getBoundingClientRect();
            } catch (i) {}
            var s = t.ownerDocument,
              o = s.documentElement;
            if (!n || !r.contains(o, t)) return n || { top: 0, left: 0 };
            var u = s.body,
              a = Ht(s),
              f = o.clientTop || u.clientTop || 0,
              l = o.clientLeft || u.clientLeft || 0,
              c =
                a.pageYOffset ||
                (r.support.boxModel && o.scrollTop) ||
                u.scrollTop,
              h =
                a.pageXOffset ||
                (r.support.boxModel && o.scrollLeft) ||
                u.scrollLeft,
              p = n.top + c - f,
              d = n.left + h - l;
            return { top: p, left: d };
          })
        : (r.fn.offset = function (e) {
            var t = this[0];
            if (e)
              return this.each(function (t) {
                r.offset.setOffset(this, e, t);
              });
            if (!t || !t.ownerDocument) return null;
            if (t === t.ownerDocument.body) return r.offset.bodyOffset(t);
            r.offset.initialize();
            var n = t.offsetParent,
              i = t,
              s = t.ownerDocument,
              o,
              u = s.documentElement,
              a = s.body,
              f = s.defaultView,
              l = f ? f.getComputedStyle(t, null) : t.currentStyle,
              c = t.offsetTop,
              h = t.offsetLeft;
            while ((t = t.parentNode) && t !== a && t !== u) {
              if (r.offset.supportsFixedPosition && l.position === "fixed")
                break;
              (o = f ? f.getComputedStyle(t, null) : t.currentStyle),
                (c -= t.scrollTop),
                (h -= t.scrollLeft),
                t === n &&
                  ((c += t.offsetTop),
                  (h += t.offsetLeft),
                  r.offset.doesNotAddBorder &&
                    (!r.offset.doesAddBorderForTableAndCells ||
                      !Dt.test(t.nodeName)) &&
                    ((c += parseFloat(o.borderTopWidth) || 0),
                    (h += parseFloat(o.borderLeftWidth) || 0)),
                  (i = n),
                  (n = t.offsetParent)),
                r.offset.subtractsBorderForOverflowNotVisible &&
                  o.overflow !== "visible" &&
                  ((c += parseFloat(o.borderTopWidth) || 0),
                  (h += parseFloat(o.borderLeftWidth) || 0)),
                (l = o);
            }
            if (l.position === "relative" || l.position === "static")
              (c += a.offsetTop), (h += a.offsetLeft);
            return (
              r.offset.supportsFixedPosition &&
                l.position === "fixed" &&
                ((c += Math.max(u.scrollTop, a.scrollTop)),
                (h += Math.max(u.scrollLeft, a.scrollLeft))),
              { top: c, left: h }
            );
          }),
        (r.offset = {
          initialize: function () {
            var e = n.body,
              t = n.createElement("div"),
              i,
              s,
              o,
              u,
              a = parseFloat(r.css(e, "marginTop")) || 0,
              f =
                "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            r.extend(t.style, {
              position: "absolute",
              top: 0,
              left: 0,
              margin: 0,
              border: 0,
              width: "1px",
              height: "1px",
              visibility: "hidden",
            }),
              (t.innerHTML = f),
              e.insertBefore(t, e.firstChild),
              (i = t.firstChild),
              (s = i.firstChild),
              (u = i.nextSibling.firstChild.firstChild),
              (this.doesNotAddBorder = s.offsetTop !== 5),
              (this.doesAddBorderForTableAndCells = u.offsetTop === 5),
              (s.style.position = "fixed"),
              (s.style.top = "20px"),
              (this.supportsFixedPosition =
                s.offsetTop === 20 || s.offsetTop === 15),
              (s.style.position = s.style.top = ""),
              (i.style.overflow = "hidden"),
              (i.style.position = "relative"),
              (this.subtractsBorderForOverflowNotVisible = s.offsetTop === -5),
              (this.doesNotIncludeMarginInBodyOffset = e.offsetTop !== a),
              e.removeChild(t),
              (e = t = i = s = o = u = null),
              (r.offset.initialize = r.noop);
          },
          bodyOffset: function (e) {
            var t = e.offsetTop,
              n = e.offsetLeft;
            return (
              r.offset.initialize(),
              r.offset.doesNotIncludeMarginInBodyOffset &&
                ((t += parseFloat(r.css(e, "marginTop")) || 0),
                (n += parseFloat(r.css(e, "marginLeft")) || 0)),
              { top: t, left: n }
            );
          },
          setOffset: function (e, t, n) {
            var i = r.css(e, "position");
            i === "static" && (e.style.position = "relative");
            var s = r(e),
              o = s.offset(),
              u = r.css(e, "top"),
              a = r.css(e, "left"),
              f = i === "absolute" && r.inArray("auto", [u, a]) > -1,
              l = {},
              c = {},
              h,
              p;
            f && (c = s.position()),
              (h = f ? c.top : parseInt(u, 10) || 0),
              (p = f ? c.left : parseInt(a, 10) || 0),
              r.isFunction(t) && (t = t.call(e, n, o)),
              t.top != null && (l.top = t.top - o.top + h),
              t.left != null && (l.left = t.left - o.left + p),
              "using" in t ? t.using.call(e, l) : s.css(l);
          },
        }),
        r.fn.extend({
          position: function () {
            if (!this[0]) return null;
            var e = this[0],
              t = this.offsetParent(),
              n = this.offset(),
              i = Pt.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
            return (
              (n.top -= parseFloat(r.css(e, "marginTop")) || 0),
              (n.left -= parseFloat(r.css(e, "marginLeft")) || 0),
              (i.top += parseFloat(r.css(t[0], "borderTopWidth")) || 0),
              (i.left += parseFloat(r.css(t[0], "borderLeftWidth")) || 0),
              { top: n.top - i.top, left: n.left - i.left }
            );
          },
          offsetParent: function () {
            return this.map(function () {
              var e = this.offsetParent || n.body;
              while (
                e &&
                !Pt.test(e.nodeName) &&
                r.css(e, "position") === "static"
              )
                e = e.offsetParent;
              return e;
            });
          },
        }),
        r.each(["Left", "Top"], function (e, n) {
          var i = "scroll" + n;
          r.fn[i] = function (n) {
            var s = this[0],
              o;
            return s
              ? n !== t
                ? this.each(function () {
                    (o = Ht(this)),
                      o
                        ? o.scrollTo(
                            e ? r(o).scrollLeft() : n,
                            e ? n : r(o).scrollTop()
                          )
                        : (this[i] = n);
                  })
                : ((o = Ht(s)),
                  o
                    ? "pageXOffset" in o
                      ? o[e ? "pageYOffset" : "pageXOffset"]
                      : (r.support.boxModel && o.document.documentElement[i]) ||
                        o.document.body[i]
                    : s[i])
              : null;
          };
        }),
        r.each(["Height", "Width"], function (e, n) {
          var i = n.toLowerCase();
          (r.fn["inner" + n] = function () {
            return this[0] ? parseFloat(r.css(this[0], i, "padding")) : null;
          }),
            (r.fn["outer" + n] = function (e) {
              return this[0]
                ? parseFloat(r.css(this[0], i, e ? "margin" : "border"))
                : null;
            }),
            (r.fn[i] = function (e) {
              var s = this[0];
              return s
                ? r.isFunction(e)
                  ? this.each(function (t) {
                      var n = r(this);
                      n[i](e.call(this, t, n[i]()));
                    })
                  : r.isWindow(s)
                  ? (s.document.compatMode === "CSS1Compat" &&
                      s.document.documentElement["client" + n]) ||
                    s.document.body["client" + n]
                  : s.nodeType === 9
                  ? Math.max(
                      s.documentElement["client" + n],
                      s.body["scroll" + n],
                      s.documentElement["scroll" + n],
                      s.body["offset" + n],
                      s.documentElement["offset" + n]
                    )
                  : e === t
                  ? parseFloat(r.css(s, i))
                  : this.css(i, typeof e == "string" ? e : e + "px")
                : e == null
                ? null
                : this;
            });
        });
    })(window),
      function () {
        window.jQuerySG = jQuery.noConflict(!0);
      }.call(this);
    var DIFF_DELETE = -1,
      DIFF_INSERT = 1,
      DIFF_EQUAL = 0;
    (diff_match_patch.prototype.diff_main = function (e, t, n) {
      if (e == t) return [[DIFF_EQUAL, e]];
      typeof n == "undefined" && (n = !0);
      var r = n,
        i = this.diff_commonPrefix(e, t),
        s = e.substring(0, i);
      (e = e.substring(i)),
        (t = t.substring(i)),
        (i = this.diff_commonSuffix(e, t));
      var o = e.substring(e.length - i);
      (e = e.substring(0, e.length - i)), (t = t.substring(0, t.length - i));
      var u = this.diff_compute(e, t, r);
      return (
        s && u.unshift([DIFF_EQUAL, s]),
        o && u.push([DIFF_EQUAL, o]),
        this.diff_cleanupMerge(u),
        u
      );
    }),
      (diff_match_patch.prototype.diff_compute = function (e, t, n) {
        var r;
        if (!e) return [[DIFF_INSERT, t]];
        if (!t) return [[DIFF_DELETE, e]];
        var i = e.length > t.length ? e : t,
          s = e.length > t.length ? t : e,
          o = i.indexOf(s);
        if (o != -1)
          return (
            (r = [
              [DIFF_INSERT, i.substring(0, o)],
              [DIFF_EQUAL, s],
              [DIFF_INSERT, i.substring(o + s.length)],
            ]),
            e.length > t.length && (r[0][0] = r[2][0] = DIFF_DELETE),
            r
          );
        i = s = null;
        var u = this.diff_halfMatch(e, t);
        if (u) {
          var a = u[0],
            f = u[1],
            l = u[2],
            c = u[3],
            h = u[4],
            p = this.diff_main(a, l, n),
            d = this.diff_main(f, c, n);
          return p.concat([[DIFF_EQUAL, h]], d);
        }
        n && (e.length < 100 || t.length < 100) && (n = !1);
        var v;
        if (n) {
          var m = this.diff_linesToChars(e, t);
          (e = m[0]), (t = m[1]), (v = m[2]);
        }
        (r = this.diff_map(e, t)),
          r ||
            (r = [
              [DIFF_DELETE, e],
              [DIFF_INSERT, t],
            ]);
        if (n) {
          this.diff_charsToLines(r, v),
            this.diff_cleanupSemantic(r),
            r.push([DIFF_EQUAL, ""]);
          var g = 0,
            y = 0,
            b = 0,
            w = "",
            E = "";
          while (g < r.length) {
            switch (r[g][0]) {
              case DIFF_INSERT:
                b++, (E += r[g][1]);
                break;
              case DIFF_DELETE:
                y++, (w += r[g][1]);
                break;
              case DIFF_EQUAL:
                if (y >= 1 && b >= 1) {
                  var m = this.diff_main(w, E, !1);
                  r.splice(g - y - b, y + b), (g = g - y - b);
                  for (var S = m.length - 1; S >= 0; S--) r.splice(g, 0, m[S]);
                  g += m.length;
                }
                (b = 0), (y = 0), (w = ""), (E = "");
            }
            g++;
          }
          r.pop();
        }
        return r;
      }),
      (diff_match_patch.prototype.diff_linesToChars = function (e, t) {
        function i(e) {
          var t = "",
            i = 0,
            s = -1,
            o = n.length;
          while (s < e.length - 1) {
            (s = e.indexOf("\n", i)), s == -1 && (s = e.length - 1);
            var u = e.substring(i, s + 1);
            (i = s + 1),
              (r.hasOwnProperty ? r.hasOwnProperty(u) : r[u] !== undefined)
                ? (t += String.fromCharCode(r[u]))
                : ((t += String.fromCharCode(o)), (r[u] = o), (n[o++] = u));
          }
          return t;
        }
        var n = [],
          r = {};
        n[0] = "";
        var s = i(e),
          o = i(t);
        return [s, o, n];
      }),
      (diff_match_patch.prototype.diff_charsToLines = function (e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n][1],
            i = [];
          for (var s = 0; s < r.length; s++) i[s] = t[r.charCodeAt(s)];
          e[n][1] = i.join("");
        }
      }),
      (diff_match_patch.prototype.diff_map = function (e, t) {
        var n = new Date().getTime() + this.Diff_Timeout * 1e3,
          r = e.length + t.length - 1,
          i = this.Diff_DualThreshold * 2 < r,
          s = [],
          o = [],
          u = {},
          a = {};
        (u[1] = 0), (a[1] = 0);
        var f,
          l,
          c,
          h = {},
          p = !1,
          d = !!h.hasOwnProperty,
          v = (e.length + t.length) % 2;
        for (var m = 0; m < r; m++) {
          if (this.Diff_Timeout > 0 && new Date().getTime() > n) return null;
          s[m] = {};
          for (var g = -m; g <= m; g += 2) {
            g == -m || (g != m && u[g - 1] < u[g + 1])
              ? (f = u[g + 1])
              : (f = u[g - 1] + 1),
              (l = f - g),
              i &&
                ((c = f + "," + l),
                v && (d ? h.hasOwnProperty(c) : h[c] !== undefined) && (p = !0),
                v || (h[c] = m));
            while (
              !p &&
              f < e.length &&
              l < t.length &&
              e.charAt(f) == t.charAt(l)
            )
              f++,
                l++,
                i &&
                  ((c = f + "," + l),
                  v &&
                    (d ? h.hasOwnProperty(c) : h[c] !== undefined) &&
                    (p = !0),
                  v || (h[c] = m));
            (u[g] = f), (s[m][f + "," + l] = !0);
            if (f == e.length && l == t.length) return this.diff_path1(s, e, t);
            if (p) {
              o = o.slice(0, h[c] + 1);
              var y = this.diff_path1(s, e.substring(0, f), t.substring(0, l));
              return y.concat(
                this.diff_path2(o, e.substring(f), t.substring(l))
              );
            }
          }
          if (i) {
            o[m] = {};
            for (var g = -m; g <= m; g += 2) {
              g == -m || (g != m && a[g - 1] < a[g + 1])
                ? (f = a[g + 1])
                : (f = a[g - 1] + 1),
                (l = f - g),
                (c = e.length - f + "," + (t.length - l)),
                !v &&
                  (d ? h.hasOwnProperty(c) : h[c] !== undefined) &&
                  (p = !0),
                v && (h[c] = m);
              while (
                !p &&
                f < e.length &&
                l < t.length &&
                e.charAt(e.length - f - 1) == t.charAt(t.length - l - 1)
              )
                f++,
                  l++,
                  (c = e.length - f + "," + (t.length - l)),
                  !v &&
                    (d ? h.hasOwnProperty(c) : h[c] !== undefined) &&
                    (p = !0),
                  v && (h[c] = m);
              (a[g] = f), (o[m][f + "," + l] = !0);
              if (p) {
                s = s.slice(0, h[c] + 1);
                var y = this.diff_path1(
                  s,
                  e.substring(0, e.length - f),
                  t.substring(0, t.length - l)
                );
                return y.concat(
                  this.diff_path2(
                    o,
                    e.substring(e.length - f),
                    t.substring(t.length - l)
                  )
                );
              }
            }
          }
        }
        return null;
      }),
      (diff_match_patch.prototype.diff_path1 = function (e, t, n) {
        var r = [],
          i = t.length,
          s = n.length,
          o = null;
        for (var u = e.length - 2; u >= 0; u--)
          for (;;) {
            if (
              e[u].hasOwnProperty
                ? e[u].hasOwnProperty(i - 1 + "," + s)
                : e[u][i - 1 + "," + s] !== undefined
            ) {
              i--,
                o === DIFF_DELETE
                  ? (r[0][1] = t.charAt(i) + r[0][1])
                  : r.unshift([DIFF_DELETE, t.charAt(i)]),
                (o = DIFF_DELETE);
              break;
            }
            if (
              e[u].hasOwnProperty
                ? e[u].hasOwnProperty(i + "," + (s - 1))
                : e[u][i + "," + (s - 1)] !== undefined
            ) {
              s--,
                o === DIFF_INSERT
                  ? (r[0][1] = n.charAt(s) + r[0][1])
                  : r.unshift([DIFF_INSERT, n.charAt(s)]),
                (o = DIFF_INSERT);
              break;
            }
            i--,
              s--,
              o === DIFF_EQUAL
                ? (r[0][1] = t.charAt(i) + r[0][1])
                : r.unshift([DIFF_EQUAL, t.charAt(i)]),
              (o = DIFF_EQUAL);
          }
        return r;
      }),
      (diff_match_patch.prototype.diff_path2 = function (e, t, n) {
        var r = [],
          i = 0,
          s = t.length,
          o = n.length,
          u = null;
        for (var a = e.length - 2; a >= 0; a--)
          for (;;) {
            if (
              e[a].hasOwnProperty
                ? e[a].hasOwnProperty(s - 1 + "," + o)
                : e[a][s - 1 + "," + o] !== undefined
            ) {
              s--,
                u === DIFF_DELETE
                  ? (r[i - 1][1] += t.charAt(t.length - s - 1))
                  : (r[i++] = [DIFF_DELETE, t.charAt(t.length - s - 1)]),
                (u = DIFF_DELETE);
              break;
            }
            if (
              e[a].hasOwnProperty
                ? e[a].hasOwnProperty(s + "," + (o - 1))
                : e[a][s + "," + (o - 1)] !== undefined
            ) {
              o--,
                u === DIFF_INSERT
                  ? (r[i - 1][1] += n.charAt(n.length - o - 1))
                  : (r[i++] = [DIFF_INSERT, n.charAt(n.length - o - 1)]),
                (u = DIFF_INSERT);
              break;
            }
            s--,
              o--,
              u === DIFF_EQUAL
                ? (r[i - 1][1] += t.charAt(t.length - s - 1))
                : (r[i++] = [DIFF_EQUAL, t.charAt(t.length - s - 1)]),
              (u = DIFF_EQUAL);
          }
        return r;
      }),
      (diff_match_patch.prototype.diff_commonPrefix = function (e, t) {
        if (!e || !t || e.charCodeAt(0) !== t.charCodeAt(0)) return 0;
        var n = 0,
          r = Math.min(e.length, t.length),
          i = r,
          s = 0;
        while (n < i)
          e.substring(s, i) == t.substring(s, i) ? ((n = i), (s = n)) : (r = i),
            (i = Math.floor((r - n) / 2 + n));
        return i;
      }),
      (diff_match_patch.prototype.diff_commonSuffix = function (e, t) {
        if (
          !e ||
          !t ||
          e.charCodeAt(e.length - 1) !== t.charCodeAt(t.length - 1)
        )
          return 0;
        var n = 0,
          r = Math.min(e.length, t.length),
          i = r,
          s = 0;
        while (n < i)
          e.substring(e.length - i, e.length - s) ==
          t.substring(t.length - i, t.length - s)
            ? ((n = i), (s = n))
            : (r = i),
            (i = Math.floor((r - n) / 2 + n));
        return i;
      }),
      (diff_match_patch.prototype.diff_halfMatch = function (e, t) {
        function s(e, t, n) {
          var r = e.substring(n, n + Math.floor(e.length / 4)),
            s = -1,
            o = "",
            u,
            a,
            f,
            l;
          while ((s = t.indexOf(r, s + 1)) != -1) {
            var c = i.diff_commonPrefix(e.substring(n), t.substring(s)),
              h = i.diff_commonSuffix(e.substring(0, n), t.substring(0, s));
            o.length < h + c &&
              ((o = t.substring(s - h, s) + t.substring(s, s + c)),
              (u = e.substring(0, n - h)),
              (a = e.substring(n + c)),
              (f = t.substring(0, s - h)),
              (l = t.substring(s + c)));
          }
          return o.length >= e.length / 2 ? [u, a, f, l, o] : null;
        }
        var n = e.length > t.length ? e : t,
          r = e.length > t.length ? t : e;
        if (n.length < 10 || r.length < 1) return null;
        var i = this,
          o = s(n, r, Math.ceil(n.length / 4)),
          u = s(n, r, Math.ceil(n.length / 2)),
          a;
        if (!o && !u) return null;
        u ? (o ? (a = o[4].length > u[4].length ? o : u) : (a = u)) : (a = o);
        var f, l, c, h;
        e.length > t.length
          ? ((f = a[0]), (l = a[1]), (c = a[2]), (h = a[3]))
          : ((c = a[0]), (h = a[1]), (f = a[2]), (l = a[3]));
        var p = a[4];
        return [f, l, c, h, p];
      }),
      (diff_match_patch.prototype.diff_cleanupSemantic = function (e) {
        var t = !1,
          n = [],
          r = 0,
          i = null,
          s = 0,
          o = 0,
          u = 0;
        while (s < e.length)
          e[s][0] == DIFF_EQUAL
            ? ((n[r++] = s), (o = u), (u = 0), (i = e[s][1]))
            : ((u += e[s][1].length),
              i !== null &&
                i.length <= o &&
                i.length <= u &&
                (e.splice(n[r - 1], 0, [DIFF_DELETE, i]),
                (e[n[r - 1] + 1][0] = DIFF_INSERT),
                r--,
                r--,
                (s = r > 0 ? n[r - 1] : -1),
                (o = 0),
                (u = 0),
                (i = null),
                (t = !0))),
            s++;
        t && this.diff_cleanupMerge(e), this.diff_cleanupSemanticLossless(e);
      }),
      (diff_match_patch.prototype.diff_cleanupSemanticLossless = function (e) {
        function o(e, o) {
          if (!e || !o) return 5;
          var u = 0;
          if (e.charAt(e.length - 1).match(t) || o.charAt(0).match(t)) {
            u++;
            if (e.charAt(e.length - 1).match(n) || o.charAt(0).match(n)) {
              u++;
              if (e.charAt(e.length - 1).match(r) || o.charAt(0).match(r))
                u++, (e.match(i) || o.match(s)) && u++;
            }
          }
          return u;
        }
        var t = /[^a-zA-Z0-9]/,
          n = /\s/,
          r = /[\r\n]/,
          i = /\n\r?\n$/,
          s = /^\r?\n\r?\n/,
          u = 1;
        while (u < e.length - 1) {
          if (e[u - 1][0] == DIFF_EQUAL && e[u + 1][0] == DIFF_EQUAL) {
            var a = e[u - 1][1],
              f = e[u][1],
              l = e[u + 1][1],
              c = this.diff_commonSuffix(a, f);
            if (c) {
              var h = f.substring(f.length - c);
              (a = a.substring(0, a.length - c)),
                (f = h + f.substring(0, f.length - c)),
                (l = h + l);
            }
            var p = a,
              d = f,
              v = l,
              m = o(a, f) + o(f, l);
            while (f.charAt(0) === l.charAt(0)) {
              (a += f.charAt(0)),
                (f = f.substring(1) + l.charAt(0)),
                (l = l.substring(1));
              var g = o(a, f) + o(f, l);
              g >= m && ((m = g), (p = a), (d = f), (v = l));
            }
            e[u - 1][1] != p &&
              (p ? (e[u - 1][1] = p) : (e.splice(u - 1, 1), u--),
              (e[u][1] = d),
              v ? (e[u + 1][1] = v) : (e.splice(u + 1, 1), u--));
          }
          u++;
        }
      }),
      (diff_match_patch.prototype.diff_cleanupEfficiency = function (e) {
        var t = !1,
          n = [],
          r = 0,
          i = "",
          s = 0,
          o = !1,
          u = !1,
          a = !1,
          f = !1;
        while (s < e.length)
          e[s][0] == DIFF_EQUAL
            ? (e[s][1].length < this.Diff_EditCost && (a || f)
                ? ((n[r++] = s), (o = a), (u = f), (i = e[s][1]))
                : ((r = 0), (i = "")),
              (a = f = !1))
            : (e[s][0] == DIFF_DELETE ? (f = !0) : (a = !0),
              i &&
                ((o && u && a && f) ||
                  (i.length < this.Diff_EditCost / 2 && o + u + a + f == 3)) &&
                (e.splice(n[r - 1], 0, [DIFF_DELETE, i]),
                (e[n[r - 1] + 1][0] = DIFF_INSERT),
                r--,
                (i = ""),
                o && u
                  ? ((a = f = !0), (r = 0))
                  : (r--, (s = r > 0 ? n[r - 1] : -1), (a = f = !1)),
                (t = !0))),
            s++;
        t && this.diff_cleanupMerge(e);
      }),
      (diff_match_patch.prototype.diff_cleanupMerge = function (e) {
        e.push([DIFF_EQUAL, ""]);
        var t = 0,
          n = 0,
          r = 0,
          i = "",
          s = "",
          o;
        while (t < e.length)
          switch (e[t][0]) {
            case DIFF_INSERT:
              r++, (s += e[t][1]), t++;
              break;
            case DIFF_DELETE:
              n++, (i += e[t][1]), t++;
              break;
            case DIFF_EQUAL:
              n !== 0 || r !== 0
                ? (n !== 0 &&
                    r !== 0 &&
                    ((o = this.diff_commonPrefix(s, i)),
                    o !== 0 &&
                      (t - n - r > 0 && e[t - n - r - 1][0] == DIFF_EQUAL
                        ? (e[t - n - r - 1][1] += s.substring(0, o))
                        : (e.splice(0, 0, [DIFF_EQUAL, s.substring(0, o)]),
                          t++),
                      (s = s.substring(o)),
                      (i = i.substring(o))),
                    (o = this.diff_commonSuffix(s, i)),
                    o !== 0 &&
                      ((e[t][1] = s.substring(s.length - o) + e[t][1]),
                      (s = s.substring(0, s.length - o)),
                      (i = i.substring(0, i.length - o)))),
                  n === 0
                    ? e.splice(t - n - r, n + r, [DIFF_INSERT, s])
                    : r === 0
                    ? e.splice(t - n - r, n + r, [DIFF_DELETE, i])
                    : e.splice(
                        t - n - r,
                        n + r,
                        [DIFF_DELETE, i],
                        [DIFF_INSERT, s]
                      ),
                  (t = t - n - r + (n ? 1 : 0) + (r ? 1 : 0) + 1))
                : t !== 0 && e[t - 1][0] == DIFF_EQUAL
                ? ((e[t - 1][1] += e[t][1]), e.splice(t, 1))
                : t++,
                (r = 0),
                (n = 0),
                (i = ""),
                (s = "");
          }
        e[e.length - 1][1] === "" && e.pop();
        var u = !1;
        t = 1;
        while (t < e.length - 1)
          e[t - 1][0] == DIFF_EQUAL &&
            e[t + 1][0] == DIFF_EQUAL &&
            (e[t][1].substring(e[t][1].length - e[t - 1][1].length) ==
            e[t - 1][1]
              ? ((e[t][1] =
                  e[t - 1][1] +
                  e[t][1].substring(0, e[t][1].length - e[t - 1][1].length)),
                (e[t + 1][1] = e[t - 1][1] + e[t + 1][1]),
                e.splice(t - 1, 1),
                (u = !0))
              : e[t][1].substring(0, e[t + 1][1].length) == e[t + 1][1] &&
                ((e[t - 1][1] += e[t + 1][1]),
                (e[t][1] = e[t][1].substring(e[t + 1][1].length) + e[t + 1][1]),
                e.splice(t + 1, 1),
                (u = !0))),
            t++;
        u && this.diff_cleanupMerge(e);
      }),
      (diff_match_patch.prototype.diff_xIndex = function (e, t) {
        var n = 0,
          r = 0,
          i = 0,
          s = 0,
          o;
        for (o = 0; o < e.length; o++) {
          e[o][0] !== DIFF_INSERT && (n += e[o][1].length),
            e[o][0] !== DIFF_DELETE && (r += e[o][1].length);
          if (n > t) break;
          (i = n), (s = r);
        }
        return e.length != o && e[o][0] === DIFF_DELETE ? s : s + (t - i);
      }),
      (diff_match_patch.prototype.diff_prettyHtml = function (e) {
        var t = [],
          n = 0;
        for (var r = 0; r < e.length; r++) {
          var i = e[r][0],
            s = e[r][1],
            o = s
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/\n/g, "&para;<BR>");
          switch (i) {
            case DIFF_INSERT:
              t[r] =
                '<INS STYLE="background:#E6FFE6;" TITLE="i=' +
                n +
                '">' +
                o +
                "</INS>";
              break;
            case DIFF_DELETE:
              t[r] =
                '<DEL STYLE="background:#FFE6E6;" TITLE="i=' +
                n +
                '">' +
                o +
                "</DEL>";
              break;
            case DIFF_EQUAL:
              t[r] = '<SPAN TITLE="i=' + n + '">' + o + "</SPAN>";
          }
          i !== DIFF_DELETE && (n += s.length);
        }
        return t.join("");
      }),
      (diff_match_patch.prototype.diff_text1 = function (e) {
        var t = [];
        for (var n = 0; n < e.length; n++)
          e[n][0] !== DIFF_INSERT && (t[n] = e[n][1]);
        return t.join("");
      }),
      (diff_match_patch.prototype.diff_text2 = function (e) {
        var t = [];
        for (var n = 0; n < e.length; n++)
          e[n][0] !== DIFF_DELETE && (t[n] = e[n][1]);
        return t.join("");
      }),
      (diff_match_patch.prototype.diff_toDelta = function (e) {
        var t = [];
        for (var n = 0; n < e.length; n++)
          switch (e[n][0]) {
            case DIFF_INSERT:
              t[n] = "+" + encodeURI(e[n][1]);
              break;
            case DIFF_DELETE:
              t[n] = "-" + e[n][1].length;
              break;
            case DIFF_EQUAL:
              t[n] = "=" + e[n][1].length;
          }
        return t.join("	").replace(/\0/g, "%00").replace(/%20/g, " ");
      }),
      (diff_match_patch.prototype.diff_fromDelta = function (e, t) {
        var n = [],
          r = 0,
          i = 0;
        t = t.replace(/%00/g, "\0");
        var s = t.split(/\t/g);
        for (var o = 0; o < s.length; o++) {
          var u = s[o].substring(1);
          switch (s[o].charAt(0)) {
            case "+":
              try {
                n[r++] = [DIFF_INSERT, decodeURI(u)];
              } catch (a) {
                throw new Error("Illegal escape in diff_fromDelta: " + u);
              }
              break;
            case "-":
            case "=":
              var f = parseInt(u, 10);
              if (isNaN(f) || f < 0)
                throw new Error("Invalid number in diff_fromDelta: " + u);
              var l = e.substring(i, (i += f));
              s[o].charAt(0) == "="
                ? (n[r++] = [DIFF_EQUAL, l])
                : (n[r++] = [DIFF_DELETE, l]);
              break;
            default:
              if (s[o])
                throw new Error(
                  "Invalid diff operation in diff_fromDelta: " + s[o]
                );
          }
        }
        if (i != e.length)
          throw new Error(
            "Delta length (" +
              i +
              ") does not equal source text length (" +
              e.length +
              ")."
          );
        return n;
      }),
      (diff_match_patch.prototype.match_main = function (e, t, n) {
        return (
          (n = Math.max(0, Math.min(n, e.length - t.length))),
          e == t
            ? 0
            : e.length === 0
            ? null
            : e.substring(n, n + t.length) == t
            ? n
            : this.match_bitap(e, t, n)
        );
      }),
      (diff_match_patch.prototype.match_bitap = function (e, t, n) {
        function o(e, r) {
          var o = Math.abs(n - r);
          return e / t.length / s.Match_Balance + o / i / (1 - s.Match_Balance);
        }
        if (t.length > this.Match_MaxBits)
          throw new Error("Pattern too long for this browser.");
        var r = this.match_alphabet(t),
          i = e.length;
        (i = Math.max(i, this.Match_MinLength)),
          (i = Math.min(i, this.Match_MaxLength));
        var s = this,
          u = this.Match_Threshold,
          a = e.indexOf(t, n);
        a != -1 && (u = Math.min(o(0, a), u)),
          (a = e.lastIndexOf(t, n + t.length)),
          a != -1 && (u = Math.min(o(0, a), u));
        var f = 1 << (t.length - 1);
        a = null;
        var l,
          c,
          h = Math.max(n + n, e.length),
          p;
        for (var d = 0; d < t.length; d++) {
          var v = Array(e.length);
          (l = n), (c = h);
          while (l < c)
            o(d, c) < u ? (l = c) : (h = c), (c = Math.floor((h - l) / 2 + l));
          h = c;
          var m = Math.max(0, n - (c - n) - 1),
            g = Math.min(e.length - 1, t.length + c);
          e.charAt(g) == t.charAt(t.length - 1)
            ? (v[g] = (1 << (d + 1)) - 1)
            : (v[g] = (1 << d) - 1);
          for (var y = g - 1; y >= m; y--) {
            d === 0
              ? (v[y] = ((v[y + 1] << 1) | 1) & r[e.charAt(y)])
              : (v[y] =
                  (((v[y + 1] << 1) | 1) & r[e.charAt(y)]) |
                  ((p[y + 1] << 1) | 1) |
                  ((p[y] << 1) | 1) |
                  p[y + 1]);
            if (v[y] & f) {
              var b = o(d, y);
              if (b <= u) {
                (u = b), (a = y);
                if (!(y > n)) break;
                m = Math.max(0, n - (y - n));
              }
            }
          }
          if (o(d + 1, n) > u) break;
          p = v;
        }
        return a;
      }),
      (diff_match_patch.prototype.match_alphabet = function (e) {
        var t = {};
        for (var n = 0; n < e.length; n++) t[e.charAt(n)] = 0;
        for (var n = 0; n < e.length; n++)
          t[e.charAt(n)] |= 1 << (e.length - n - 1);
        return t;
      }),
      (diff_match_patch.prototype.patch_addContext = function (e, t) {
        var n = t.substring(e.start2, e.start2 + e.length1),
          r = 0;
        while (
          t.indexOf(n) != t.lastIndexOf(n) &&
          n.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin
        )
          (r += this.Patch_Margin),
            (n = t.substring(e.start2 - r, e.start2 + e.length1 + r));
        r += this.Patch_Margin;
        var i = t.substring(e.start2 - r, e.start2);
        i !== "" && e.diffs.unshift([DIFF_EQUAL, i]);
        var s = t.substring(e.start2 + e.length1, e.start2 + e.length1 + r);
        s !== "" && e.diffs.push([DIFF_EQUAL, s]),
          (e.start1 -= i.length),
          (e.start2 -= i.length),
          (e.length1 += i.length + s.length),
          (e.length2 += i.length + s.length);
      }),
      (diff_match_patch.prototype.patch_make = function (e, t, n) {
        var r, i, s;
        typeof t == "undefined"
          ? ((s = e), (r = this.diff_text1(s)), (i = ""))
          : ((r = e),
            (i = t),
            typeof n != "undefined"
              ? (s = n)
              : ((s = this.diff_main(r, i, !0)),
                s.length > 2 &&
                  (this.diff_cleanupSemantic(s),
                  this.diff_cleanupEfficiency(s))));
        if (s.length === 0) return [];
        var o = [],
          u = new patch_obj(),
          a = 0,
          f = 0,
          l = 0,
          c = r,
          h = r;
        for (var p = 0; p < s.length; p++) {
          var d = s[p][0],
            v = s[p][1];
          !a && d !== DIFF_EQUAL && ((u.start1 = f), (u.start2 = l));
          switch (d) {
            case DIFF_INSERT:
              (u.diffs[a++] = s[p]),
                (u.length2 += v.length),
                (h = h.substring(0, l) + v + h.substring(l));
              break;
            case DIFF_DELETE:
              (u.length1 += v.length),
                (u.diffs[a++] = s[p]),
                (h = h.substring(0, l) + h.substring(l + v.length));
              break;
            case DIFF_EQUAL:
              v.length <= 2 * this.Patch_Margin && a && s.length != p + 1
                ? ((u.diffs[a++] = s[p]),
                  (u.length1 += v.length),
                  (u.length2 += v.length))
                : v.length >= 2 * this.Patch_Margin &&
                  a &&
                  (this.patch_addContext(u, c),
                  o.push(u),
                  (u = new patch_obj()),
                  (a = 0),
                  (c = h));
          }
          d !== DIFF_INSERT && (f += v.length),
            d !== DIFF_DELETE && (l += v.length);
        }
        return a && (this.patch_addContext(u, c), o.push(u)), o;
      }),
      (diff_match_patch.prototype.patch_apply = function (e, t) {
        if (e.length == 0) return [t, []];
        var n = [];
        for (var r = 0; r < e.length; r++) {
          var i = e[r],
            s = new patch_obj();
          (s.diffs = i.diffs.slice()),
            (s.start1 = i.start1),
            (s.start2 = i.start2),
            (s.length1 = i.length1),
            (s.length2 = i.length2),
            (n[r] = s);
        }
        e = n;
        var o = this.patch_addPadding(e);
        (t = o + t + o), this.patch_splitMax(e);
        var u = 0,
          a = [];
        for (var r = 0; r < e.length; r++) {
          var f = e[r].start2 + u,
            l = this.diff_text1(e[r].diffs),
            c = this.match_main(t, l, f);
          if (c === null) a[r] = !1;
          else {
            (a[r] = !0), (u = c - f);
            var h = t.substring(c, c + l.length);
            if (l == h)
              t =
                t.substring(0, c) +
                this.diff_text2(e[r].diffs) +
                t.substring(c + l.length);
            else {
              var p = this.diff_main(l, h, !1);
              this.diff_cleanupSemanticLossless(p);
              var d = 0,
                v;
              for (var m = 0; m < e[r].diffs.length; m++) {
                var g = e[r].diffs[m];
                g[0] !== DIFF_EQUAL && (v = this.diff_xIndex(p, d)),
                  g[0] === DIFF_INSERT
                    ? (t = t.substring(0, c + v) + g[1] + t.substring(c + v))
                    : g[0] === DIFF_DELETE &&
                      (t =
                        t.substring(0, c + v) +
                        t.substring(c + this.diff_xIndex(p, d + g[1].length))),
                  g[0] !== DIFF_DELETE && (d += g[1].length);
              }
            }
          }
        }
        return (t = t.substring(o.length, t.length - o.length)), [t, a];
      }),
      (diff_match_patch.prototype.patch_addPadding = function (e) {
        var t = "";
        for (var n = 0; n < this.Patch_Margin; n++) t += String.fromCharCode(n);
        for (var n = 0; n < e.length; n++)
          (e[n].start1 += t.length), (e[n].start2 += t.length);
        var r = e[0],
          i = r.diffs;
        if (i.length == 0 || i[0][0] != DIFF_EQUAL)
          i.unshift([DIFF_EQUAL, t]),
            (r.start1 -= t.length),
            (r.start2 -= t.length),
            (r.length1 += t.length),
            (r.length2 += t.length);
        else if (t.length > i[0][1].length) {
          var s = t.length - i[0][1].length;
          (i[0][1] = t.substring(i[0][1].length) + i[0][1]),
            (r.start1 -= s),
            (r.start2 -= s),
            (r.length1 += s),
            (r.length2 += s);
        }
        (r = e[e.length - 1]), (i = r.diffs);
        if (i.length == 0 || i[i.length - 1][0] != DIFF_EQUAL)
          i.push([DIFF_EQUAL, t]),
            (r.length1 += t.length),
            (r.length2 += t.length);
        else if (t.length > i[i.length - 1][1].length) {
          var s = t.length - i[i.length - 1][1].length;
          (i[i.length - 1][1] += t.substring(0, s)),
            (r.length1 += s),
            (r.length2 += s);
        }
        return t;
      }),
      (diff_match_patch.prototype.patch_splitMax = function (e) {
        for (var t = 0; t < e.length; t++)
          if (e[t].length1 > this.Match_MaxBits) {
            var n = e[t];
            e.splice(t, 1);
            var r = this.Match_MaxBits,
              i = n.start1,
              s = n.start2,
              o = "";
            while (n.diffs.length !== 0) {
              var u = new patch_obj(),
                a = !0;
              (u.start1 = i - o.length),
                (u.start2 = s - o.length),
                o !== "" &&
                  ((u.length1 = u.length2 = o.length),
                  u.diffs.push([DIFF_EQUAL, o]));
              while (
                n.diffs.length !== 0 &&
                u.length1 < r - this.Patch_Margin
              ) {
                var f = n.diffs[0][0],
                  l = n.diffs[0][1];
                f === DIFF_INSERT
                  ? ((u.length2 += l.length),
                    (s += l.length),
                    u.diffs.push(n.diffs.shift()),
                    (a = !1))
                  : ((l = l.substring(0, r - u.length1 - this.Patch_Margin)),
                    (u.length1 += l.length),
                    (i += l.length),
                    f === DIFF_EQUAL
                      ? ((u.length2 += l.length), (s += l.length))
                      : (a = !1),
                    u.diffs.push([f, l]),
                    l == n.diffs[0][1]
                      ? n.diffs.shift()
                      : (n.diffs[0][1] = n.diffs[0][1].substring(l.length)));
              }
              (o = this.diff_text2(u.diffs)),
                (o = o.substring(o.length - this.Patch_Margin));
              var c = this.diff_text1(n.diffs).substring(0, this.Patch_Margin);
              c !== "" &&
                ((u.length1 += c.length),
                (u.length2 += c.length),
                u.diffs.length !== 0 &&
                u.diffs[u.diffs.length - 1][0] === DIFF_EQUAL
                  ? (u.diffs[u.diffs.length - 1][1] += c)
                  : u.diffs.push([DIFF_EQUAL, c])),
                a || e.splice(t++, 0, u);
            }
          }
      }),
      (diff_match_patch.prototype.patch_toText = function (e) {
        var t = [];
        for (var n = 0; n < e.length; n++) t[n] = e[n];
        return t.join("");
      }),
      (diff_match_patch.prototype.patch_fromText = function (e) {
        var t = [];
        if (!e) return t;
        e = e.replace(/%00/g, "\0");
        var n = e.split("\n"),
          r = 0;
        while (r < n.length) {
          var i = n[r].match(/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/);
          if (!i) throw new Error("Invalid patch string: " + n[r]);
          var s = new patch_obj();
          t.push(s),
            (s.start1 = parseInt(i[1], 10)),
            i[2] === ""
              ? (s.start1--, (s.length1 = 1))
              : i[2] == "0"
              ? (s.length1 = 0)
              : (s.start1--, (s.length1 = parseInt(i[2], 10))),
            (s.start2 = parseInt(i[3], 10)),
            i[4] === ""
              ? (s.start2--, (s.length2 = 1))
              : i[4] == "0"
              ? (s.length2 = 0)
              : (s.start2--, (s.length2 = parseInt(i[4], 10))),
            r++;
          while (r < n.length) {
            var o = n[r].charAt(0);
            try {
              var u = decodeURI(n[r].substring(1));
            } catch (a) {
              throw new Error("Illegal escape in patch_fromText: " + u);
            }
            if (o == "-") s.diffs.push([DIFF_DELETE, u]);
            else if (o == "+") s.diffs.push([DIFF_INSERT, u]);
            else if (o == " ") s.diffs.push([DIFF_EQUAL, u]);
            else {
              if (o == "@") break;
              if (o !== "")
                throw new Error('Invalid patch mode "' + o + '" in: ' + u);
            }
            r++;
          }
        }
        return t;
      }),
      (patch_obj.prototype.toString = function () {
        var e, t;
        this.length1 === 0
          ? (e = this.start1 + ",0")
          : this.length1 == 1
          ? (e = this.start1 + 1)
          : (e = this.start1 + 1 + "," + this.length1),
          this.length2 === 0
            ? (t = this.start2 + ",0")
            : this.length2 == 1
            ? (t = this.start2 + 1)
            : (t = this.start2 + 1 + "," + this.length2);
        var n = ["@@ -" + e + " +" + t + " @@\n"],
          r;
        for (var i = 0; i < this.diffs.length; i++) {
          switch (this.diffs[i][0]) {
            case DIFF_INSERT:
              r = "+";
              break;
            case DIFF_DELETE:
              r = "-";
              break;
            case DIFF_EQUAL:
              r = " ";
          }
          n[i + 1] = r + encodeURI(this.diffs[i][1]) + "\n";
        }
        return n.join("").replace(/\0/g, "%00").replace(/%20/g, " ");
      }),
      function () {
        var e;
        window.DomPredictionHelper = e = (function () {
          function e() {}
          return (
            (e.prototype.recursiveNodes = function (e) {
              var t;
              return (
                e.nodeName && e.parentNode && e !== document.body
                  ? (t = this.recursiveNodes(e.parentNode))
                  : (t = new Array()),
                t.push(e),
                t
              );
            }),
            (e.prototype.escapeCssNames = function (e) {
              if (!e) return "";
              try {
                return e
                  .replace(/\bselectorgadget_\w+\b/g, "")
                  .replace(/\\/g, "\\\\")
                  .replace(
                    /[\#\;\&\,\.\+\*\~\'\:\"\!\^\$\[\]\(\)\=\>\|\/]/g,
                    function (e) {
                      return "\\" + e;
                    }
                  )
                  .replace(/\s+/, "");
              } catch (t) {
                return (
                  window.console &&
                    (console.log("---"),
                    console.log("exception in escapeCssNames"),
                    console.log(e),
                    console.log("---")),
                  ""
                );
              }
            }),
            (e.prototype.childElemNumber = function (e) {
              var t;
              t = 0;
              while (e.previousSibling && (e = e.previousSibling))
                e.nodeType === 1 && t++;
              return t;
            }),
            (e.prototype.siblingsWithoutTextNodes = function (e) {
              var t, n, r, i, s;
              (r = e.parentNode.childNodes), (t = []);
              for (i = 0, s = r.length; i < s; i++) {
                n = r[i];
                if (n.nodeName.substring(0, 1) === "#") continue;
                if (n === e) break;
                t.push(n);
              }
              return t;
            }),
            (e.prototype.pathOf = function (e) {
              var t, n, r, i, s, o, u;
              (r = ""), (u = this.recursiveNodes(e));
              for (s = 0, o = u.length; s < o; s++) {
                t = u[s];
                if (t) {
                  i = this.siblingsWithoutTextNodes(t);
                  if (t.nodeName.toLowerCase() !== "body") {
                    n = i.length - 2 < 0 ? 0 : i.length - 2;
                    while (n < i.length) {
                      if (i[n] === t) break;
                      i[n].nodeName.match(/^(script|#.*?)$/i) ||
                        (r +=
                          this.cssDescriptor(i[n]) +
                          (n + 1 === i.length ? "+ " : "~ ")),
                        n++;
                    }
                  }
                  r += this.cssDescriptor(t) + " > ";
                }
              }
              return this.cleanCss(r);
            }),
            (e.prototype.cssDescriptor = function (e) {
              var t, n, r, i, s, o;
              (r = e.nodeName.toLowerCase()),
                (n = e.id && this.escapeCssNames(new String(e.id))),
                n && n.length > 0 && (r += "#" + n);
              if (e.className) {
                o = e.className.split(" ");
                for (i = 0, s = o.length; i < s; i++)
                  (t = o[i]),
                    (n = this.escapeCssNames(t)),
                    t && n.length > 0 && (r += "." + n);
              }
              return (
                e.nodeName.toLowerCase() !== "body" &&
                  (r += ":nth-child(" + (this.childElemNumber(e) + 1) + ")"),
                r
              );
            }),
            (e.prototype.cssDiff = function (e) {
              var t, n, r, i, s, o, u, a, f, l, c;
              try {
                i = new diff_match_patch();
              } catch (h) {
                throw "Please include the diff_match_patch library.";
              }
              if (typeof e == "undefined" || e.length === 0) return "";
              (o = {}), (s = this.encodeCssForDiff(e, o)), (t = s.pop());
              for (a = 0, l = s.length; a < l; a++) {
                (n = s[a]), (r = i.diff_main(t, n)), (t = "");
                for (f = 0, c = r.length; f < c; f++)
                  (u = r[f]), u[0] === 0 && (t += u[1]);
              }
              return this.decodeCss(t, o);
            }),
            (e.prototype.tokenizeCss = function (e) {
              var t, n, r, i, s, o, u;
              (n = !1), (i = ""), (r = []), (u = this.cleanCss(e));
              for (s = 0, o = u.length; s < o; s++) {
                t = u[s];
                if (n) n = !1;
                else if (t === "\\") n = !0;
                else if (
                  t === "." ||
                  t === " " ||
                  t === "#" ||
                  t === ">" ||
                  t === ":" ||
                  t === "," ||
                  t === "+" ||
                  t === "~"
                )
                  i.length > 0 && r.push(i), (i = "");
                i += t;
                if (t === " " || t === ",") r.push(i), (i = "");
              }
              return i.length > 0 && r.push(i), r;
            }),
            (e.prototype.tokenizeCssForDiff = function (e) {
              var t, n, r, i, s, o;
              (n = []), (t = []), (o = this.tokenizeCss(e));
              for (i = 0, s = o.length; i < s; i++) {
                (r = o[i]), t.push(r);
                if (r === " " && t.length > 0) (n = n.concat(t)), (t = []);
                else if (r === "+" || r === "~") t = [t.join("")];
              }
              return t.length > 0 ? n.concat(t) : n;
            }),
            (e.prototype.decodeCss = function (e, t) {
              var n, r, i, s, o, u;
              (r = this.invertObject(t)), (i = ""), (u = e.split(""));
              for (s = 0, o = u.length; s < o; s++) (n = u[s]), (i += r[n]);
              return this.cleanCss(i);
            }),
            (e.prototype.encodeCssForDiff = function (e, t) {
              var n, r, i, s, o, u, a, f, l, c;
              (n = 50), (s = []);
              for (u = 0, f = e.length; u < f; u++) {
                (i = e[u]),
                  (r = new String()),
                  (c = this.tokenizeCssForDiff(i));
                for (a = 0, l = c.length; a < l; a++)
                  (o = c[a]),
                    t[o] || (t[o] = String.fromCharCode(n++)),
                    (r += t[o]);
                s.push(r);
              }
              return s;
            }),
            (e.prototype.tokenPriorities = function (e) {
              var t, n, r, i, s, o, u, a;
              (t = 0.001), (i = new Array()), (r = 0);
              for (u = 0, a = e.length; u < a; u++)
                (o = e[u]),
                  (n = o.substring(0, 1)),
                  (s = o.substring(1, 2)),
                  n === ":" && s === "n"
                    ? (i[r] = 0)
                    : n === ">"
                    ? (i[r] = 2)
                    : n === "+" || n === "~"
                    ? (i[r] = 3)
                    : n !== ":" &&
                      n !== "." &&
                      n !== "#" &&
                      n !== " " &&
                      n !== ">" &&
                      n !== "+" &&
                      n !== "~"
                    ? (i[r] = 4)
                    : n === "."
                    ? (i[r] = 5)
                    : (n = "#")
                    ? ((i[r] = 6), o.match(/\d{3,}/) && (i[r] = 2.5))
                    : (i[r] = 0),
                  (i[r] += r * t),
                  r++;
              return i;
            }),
            (e.prototype.orderFromPriorities = function (e) {
              var t, n, r, i, s, o, u;
              (r = new Array()), (n = new Array());
              for (
                t = i = 0, o = e.length;
                0 <= o ? i < o : i > o;
                t = 0 <= o ? ++i : --i
              )
                r[t] = { value: e[t], original: t };
              r.sort(function (e, t) {
                return e.value - t.value;
              });
              for (
                t = s = 0, u = e.length;
                0 <= u ? s < u : s > u;
                t = 0 <= u ? ++s : --s
              )
                n[t] = r[t].original;
              return n;
            }),
            (e.prototype.simplifyCss = function (e, t, n) {
              var r,
                i,
                s,
                o,
                u,
                a,
                f,
                l,
                c,
                h,
                p,
                d,
                v,
                m = this;
              (l = this.tokenizeCss(e)),
                (c = this.tokenPriorities(l)),
                (a = this.orderFromPriorities(c)),
                (p = this.cleanCss(e)),
                (u = -1),
                (r = ""),
                this.selectorGets("all", t, p) &&
                  this.selectorGets("none", n, p) &&
                  (r = p),
                (s = !0);
              while (s) {
                s = !1;
                for (
                  o = d = 0, v = l.length;
                  0 <= v ? d < v : d > v;
                  o = 0 <= v ? ++d : --d
                ) {
                  f = a[o];
                  if (l[f].length === 0) continue;
                  (i = l[f].substring(0, 1)), (h = l[f].substring(1, 2));
                  if (i === " ") continue;
                  if (this.wouldLeaveFreeFloatingNthChild(l, f)) continue;
                  this._removeElements(f, l, i, function (e) {
                    return m.selectorGets("all", t, e) &&
                      m.selectorGets("none", n, e) &&
                      (e.length < r.length || r.length === 0)
                      ? ((r = e), (s = !0), !0)
                      : !1;
                  });
                }
              }
              return this.cleanCss(r);
            }),
            (e.prototype._removeElements = function (e, t, n, r) {
              var i, s, o, u, a, f;
              n === "+" || n === "~"
                ? (s = this.positionOfSpaceBeforeIndexOrLineStart(e, t))
                : (s = e),
                (u = t.slice(s, e + 1));
              for (i = a = s; s <= e ? a <= e : a >= e; i = s <= e ? ++a : --a)
                t[i] = "";
              o = this.cleanCss(t.join(""));
              if (o === "" || !r(o))
                for (
                  i = f = s;
                  s <= e ? f <= e : f >= e;
                  i = s <= e ? ++f : --f
                )
                  t[i] = u[i - s];
              return t;
            }),
            (e.prototype.positionOfSpaceBeforeIndexOrLineStart = function (
              e,
              t
            ) {
              var n;
              n = e;
              while (n >= 0 && t[n] !== " ") n--;
              return n < 0 && (n = 0), n;
            }),
            (e.prototype.wouldLeaveFreeFloatingNthChild = function (e, t) {
              var n, r, i;
              (i = r = !1), (n = t + 1);
              while (n < e.length && e[n].length === 0) n++;
              n < e.length && e[n].substring(0, 2) === ":n" && (r = !0),
                (n = t - 1);
              while (n > -1 && e[n].length === 0) n--;
              if (n < 0 || e[n] === " ") i = !0;
              return i && r;
            }),
            (e.prototype.cleanCss = function (e) {
              var t, n;
              (t = e), (n = null);
              while (n !== t)
                (n = t),
                  (t = t
                    .replace(/(^|\s+)(\+|\~)/, "")
                    .replace(/(\+|\~)\s*$/, "")
                    .replace(/>/g, " > ")
                    .replace(/\s*(>\s*)+/g, " > ")
                    .replace(/,/g, " , ")
                    .replace(/\s+/g, " ")
                    .replace(/^\s+|\s+$/g, "")
                    .replace(/\s*,$/g, "")
                    .replace(/^\s*,\s*/g, "")
                    .replace(/\s*>$/g, "")
                    .replace(/^>\s*/g, "")
                    .replace(/[\+\~\>]\s*,/g, ",")
                    .replace(/[\+\~]\s*>/g, ">")
                    .replace(/\s*(,\s*)+/g, " , "));
              return t;
            }),
            (e.prototype.getPathsFor = function (e) {
              var t, n, r, i;
              n = [];
              for (r = 0, i = e.length; r < i; r++)
                (t = e[r]), t && t.nodeName && n.push(this.pathOf(t));
              return n;
            }),
            (e.prototype.predictCss = function (e, t) {
              var n, r, i, s, o, u, a;
              if (e.length === 0) return "";
              (i = this.getPathsFor(e)),
                (n = this.cssDiff(i)),
                (s = this.simplifyCss(n, e, t));
              if (s.length > 0) return s;
              o = "";
              for (u = 0, a = e.length; u < a; u++)
                (r = e[u]), (o = this.pathOf(r) + ", " + o);
              return (o = this.cleanCss(o)), this.simplifyCss(o, e, t);
            }),
            (e.prototype.selectorGets = function (e, t, n) {
              if (t.length === 0 && e === "all") return !1;
              if (t.length === 0 && e === "none") return !0;
              try {
                return e === "all" ? t.not(n).length === 0 : !t.is(n);
              } catch (r) {
                throw (
                  (window.console && console.log("Error on selector: " + n), r)
                );
              }
            }),
            (e.prototype.invertObject = function (e) {
              var t, n, r;
              n = {};
              for (t in e) (r = e[t]), (n[r] = t);
              return n;
            }),
            (e.prototype.cssToXPath = function (e) {
              var t, n, r, i, s, o;
              (i = this.tokenizeCss(e)),
                i[0] && i[0] === " " && i.splice(0, 1),
                i[i.length - 1] &&
                  i[i.length - 1] === " " &&
                  i.splice(i.length - 1, 1),
                (t = []),
                (n = "");
              for (s = 0, o = i.length; s < o; s++)
                (r = i[s]),
                  r === " "
                    ? ((n += this.cssToXPathBlockHelper(t)), (t = []))
                    : t.push(r);
              return n + this.cssToXPathBlockHelper(t);
            }),
            (e.prototype.cssToXPathBlockHelper = function (e) {
              var t, n, r, i, s, o, u, a, f, l, c;
              if (e.length === 0) return "//";
              (s = "//"), (r = e[0].substring(0, 1));
              if (r === ",") return " | ";
              if (r === ":" || r === "#" || r === ".") s += "*";
              (n = []), (o = null);
              for (a = 0, l = e.length; a < l; a++)
                (t = e[a]),
                  (r = t.substring(0, 1)),
                  (u = t.substring(1)),
                  r === ":"
                    ? (o = u.match(/^nth-child\((\d+)\)$/)) &&
                      n.push(
                        "(((count(preceding-sibling::*) + 1) = " +
                          o[1] +
                          ") and parent::*)"
                      )
                    : r === "."
                    ? n.push(
                        'contains(concat( " ", @class, " " ), concat( " ", "' +
                          u +
                          '", " " ))'
                      )
                    : r === "#"
                    ? n.push('(@id = "' + u + '")')
                    : r !== "," && (s += t);
              n.length > 0 && (s += "[");
              for (
                i = f = 0, c = n.length;
                0 <= c ? f < c : f > c;
                i = 0 <= c ? ++f : --f
              )
                (s += n[i]), i < n.length - 1 && (s += " and ");
              return n.length > 0 && (s += "]"), s;
            }),
            e
          );
        })();
      }.call(this),
      (function() {
        var SelectorGadget;
      
        window.SelectorGadget = SelectorGadget = (function() {
      
          function SelectorGadget() {}
      
          SelectorGadget.prototype.border_width = 5;
      
          SelectorGadget.prototype.border_padding = 2;
      
          SelectorGadget.prototype.b_top = null;
      
          SelectorGadget.prototype.b_left = null;
      
          SelectorGadget.prototype.b_right = null;
      
          SelectorGadget.prototype.b_bottom = null;
      
          SelectorGadget.prototype.selected = [];
      
          SelectorGadget.prototype.rejected = [];
      
          SelectorGadget.prototype.special_mode = null;
      
          SelectorGadget.prototype.path_output_field = null;
      
          SelectorGadget.prototype.sg_div = null;
      
          SelectorGadget.prototype.ignore_class = 'selectorgadget_ignore';
      
          SelectorGadget.prototype.unbound = false;
      
          SelectorGadget.prototype.prediction_helper = new DomPredictionHelper();
      
          SelectorGadget.prototype.restricted_elements = jQuerySG.map(['html', 'body', 'head', 'base'], function(selector) {
            return jQuerySG(selector).get(0);
          });
      
          SelectorGadget.prototype.makeBorders = function(orig_elem, makeRed) {
            var elem, height, left, p, path_to_show, top, width;
            this.removeBorders();
            this.setupBorders();
            if (orig_elem.parentNode) {
              path_to_show = orig_elem.parentNode.tagName.toLowerCase() + ' ' + orig_elem.tagName.toLowerCase();
            } else {
              path_to_show = orig_elem.tagName.toLowerCase();
            }
            elem = jQuerySG(orig_elem);
            p = elem.offset();
            top = p.top;
            left = p.left;
            width = elem.outerWidth();
            height = elem.outerHeight();
            this.b_top.css('width', this.px(width + this.border_padding * 2 + this.border_width * 2)).css('top', this.px(top - this.border_width - this.border_padding)).css('left', this.px(left - this.border_padding - this.border_width));
            this.b_bottom.css('width', this.px(width + this.border_padding * 2 + this.border_width * 2 - 5)).css('top', this.px(top + height + this.border_padding)).css('left', this.px(left - this.border_padding - this.border_width)).text(path_to_show);
            this.b_left.css('height', this.px(height + this.border_padding * 2)).css('top', this.px(top - this.border_padding)).css('left', this.px(left - this.border_padding - this.border_width));
            this.b_right.css('height', this.px(height + this.border_padding * 2)).css('top', this.px(top - this.border_padding)).css('left', this.px(left + width + this.border_padding));
            this.b_right.get(0).target_elem = this.b_left.get(0).target_elem = this.b_top.get(0).target_elem = this.b_bottom.get(0).target_elem = orig_elem;
            if (makeRed || elem.hasClass("selectorgadget_suggested") || elem.hasClass("selectorgadget_selected")) {
              this.b_top.addClass('selectorgadget_border_red');
              this.b_bottom.addClass('selectorgadget_border_red');
              this.b_left.addClass('selectorgadget_border_red');
              this.b_right.addClass('selectorgadget_border_red');
            } else {
              if (this.b_top.hasClass('selectorgadget_border_red')) {
                this.b_top.removeClass('selectorgadget_border_red');
                this.b_bottom.removeClass('selectorgadget_border_red');
                this.b_left.removeClass('selectorgadget_border_red');
                this.b_right.removeClass('selectorgadget_border_red');
              }
            }
            return this.showBorders();
          };
      
          SelectorGadget.prototype.px = function(p) {
            return p + 'px';
          };
      
          SelectorGadget.prototype.showBorders = function() {
            this.b_top.show();
            this.b_bottom.show();
            this.b_left.show();
            return this.b_right.show();
          };
      
          SelectorGadget.prototype.removeBorders = function() {
            if (this.b_top) {
              this.b_top.hide();
              this.b_bottom.hide();
              this.b_left.hide();
              return this.b_right.hide();
            }
          };
      
          SelectorGadget.prototype.setupBorders = function() {
            var width;
            if (!this.b_top) {
              width = this.border_width + 'px';
              this.b_top = jQuerySG('<div>').addClass('selectorgadget_border').css('height', width).hide().bind("mousedown.sg", {
                'self': this
              }, this.sgMousedown);
              this.b_bottom = jQuerySG('<div>').addClass('selectorgadget_border').addClass('selectorgadget_bottom_border').css('height', this.px(this.border_width + 6)).hide().bind("mousedown.sg", {
                'self': this
              }, this.sgMousedown);
              this.b_left = jQuerySG('<div>').addClass('selectorgadget_border').css('width', width).hide().bind("mousedown.sg", {
                'self': this
              }, this.sgMousedown);
              this.b_right = jQuerySG('<div>').addClass('selectorgadget_border').css('width', width).hide().bind("mousedown.sg", {
                'self': this
              }, this.sgMousedown);
              return this.addBorderToDom();
            }
          };
      
          SelectorGadget.prototype.addBorderToDom = function() {
            document.body.appendChild(this.b_top.get(0));
            document.body.appendChild(this.b_bottom.get(0));
            document.body.appendChild(this.b_left.get(0));
            return document.body.appendChild(this.b_right.get(0));
          };
      
          SelectorGadget.prototype.removeBorderFromDom = function() {
            if (this.b_top) {
              this.b_top.remove();
              this.b_bottom.remove();
              this.b_left.remove();
              this.b_right.remove();
              return this.b_top = this.b_bottom = this.b_left = this.b_right = null;
            }
          };
      
          SelectorGadget.prototype.selectable = function(elem) {
            return !this.css_restriction || (this.css_restriction && jQuerySG(elem).is(this.css_restriction));
          };
      
          SelectorGadget.prototype.sgMouseover = function(e) {
            var gadget, parent, self;
            gadget = e.data.self;
            if (gadget.unbound) {
              return true;
            }
            if (this === document.body || this === document.body.parentNode) {
              return false;
            }
            self = jQuerySG(this);
            gadget.unhighlightIframes();
            if (self.is("iframe")) {
              gadget.highlightIframe(self, e);
            }
            if (gadget.special_mode !== 'd') {
              parent = gadget.firstSelectedOrSuggestedParent(this);
              if (parent !== null && parent !== this && gadget.selectable(parent)) {
                gadget.makeBorders(parent, true);
              } else {
                if (gadget.selectable(self)) {
                  gadget.makeBorders(this);
                }
              }
            } else {
              if (!jQuerySG('.selectorgadget_selected', this).get(0)) {
                if (gadget.selectable(self)) {
                  gadget.makeBorders(this);
                }
              }
            }
            return false;
          };
      
          SelectorGadget.prototype.firstSelectedOrSuggestedParent = function(elem) {
            var orig;
            orig = elem;
            if (jQuerySG(elem).hasClass('selectorgadget_suggested') || jQuerySG(elem).hasClass('selectorgadget_selected')) {
              return elem;
            }
            while (elem.parentNode && (elem = elem.parentNode)) {
              if (jQuerySG.inArray(elem, this.restricted_elements) === -1) {
                if (jQuerySG(elem).hasClass('selectorgadget_suggested') || jQuerySG(elem).hasClass('selectorgadget_selected')) {
                  return elem;
                }
              }
            }
            return null;
          };
      
          SelectorGadget.prototype.sgMouseout = function(e) {
            var elem, gadget;
            gadget = e.data.self;
            if (gadget.unbound) {
              return true;
            }
            if (this === document.body || this === document.body.parentNode) {
              return false;
            }
            elem = jQuerySG(this);
            gadget.removeBorders();
            return false;
          };
      
          SelectorGadget.prototype.highlightIframe = function(elem, click) {
            var block, instructions, p, self, src, target;
            p = elem.offset();
            self = this;
            target = jQuerySG(click.target);
            block = jQuerySG('<div>').css('position', 'absolute').css('z-index', '99998').css('width', this.px(elem.outerWidth())).css('height', this.px(elem.outerHeight())).css('top', this.px(p.top)).css('left', this.px(p.left)).css('background-color', '#AAA').css('opacity', '0.6').addClass("selectorgadget_iframe").addClass('selectorgadget_clean');
            instructions = jQuerySG("<div><span>This is an iframe.  To select in it, </span></div>").addClass("selectorgadget_iframe_info").addClass("selectorgadget_iframe").addClass('selectorgadget_clean');
            instructions.css({
              width: "200px",
              border: "1px solid #888"
            }, {
              padding: "5px",
              "background-color": "white",
              position: "absolute",
              "z-index": "99999",
              top: this.px(p.top + (elem.outerHeight() / 4.0)),
              left: this.px(p.left + (elem.outerWidth() - 200) / 2.0),
              height: "150px"
            });
            src = null;
            try {
              src = elem.contents().get(0).location.href;
            } catch (e) {
              src = elem.attr("src");
            }
            instructions.append(jQuerySG("<a target='_top'>click here to open it</a>").attr("href", src));
            instructions.append(jQuerySG("<span>, then relaunch SelectorGadget.</span>"));
            document.body.appendChild(instructions.get(0));
            block.click(function() {
              if (self.selectable(target)) {
                return target.mousedown();
              }
            });
            return document.body.appendChild(block.get(0));
          };
      
          SelectorGadget.prototype.unhighlightIframes = function(elem, click) {
            return jQuerySG(".selectorgadget_iframe").remove();
          };
      
          SelectorGadget.prototype.sgMousedown = function(e) {
            var elem, gadget, potential_elem, prediction, w_elem, countSelected, countRejected;
            gadget = e.data.self;
            if (gadget.unbound) {
              return true;
            }
            elem = this;
            w_elem = jQuerySG(elem);
            if (w_elem.hasClass('selectorgadget_border')) {
              elem = elem.target_elem || elem;
              w_elem = jQuerySG(elem);
            }
            if (elem === document.body || elem === document.body.parentNode) {
              return;
            }
            if (gadget.special_mode !== 'd') {
              potential_elem = gadget.firstSelectedOrSuggestedParent(elem);
              if (potential_elem !== null && potential_elem !== elem) {
                elem = potential_elem;
                w_elem = jQuerySG(elem);
              }
            } else {
              if (jQuerySG('.selectorgadget_selected', this).get(0)) {
                gadget.blockClicksOn(elem);
              }
            }
            if (!gadget.selectable(w_elem)) {
              gadget.removeBorders();
              gadget.blockClicksOn(elem);
              return false;
            }
            if (w_elem.hasClass('selectorgadget_selected')) {
              w_elem.removeClass('selectorgadget_selected');
              gadget.selected.splice(jQuerySG.inArray(elem, gadget.selected), 1);
            } else if (w_elem.hasClass("selectorgadget_rejected")) {
              w_elem.removeClass('selectorgadget_rejected');
              gadget.rejected.splice(jQuerySG.inArray(elem, gadget.rejected), 1);
            } else if (w_elem.hasClass("selectorgadget_suggested")) {
              w_elem.addClass('selectorgadget_rejected');
              gadget.rejected.push(elem);
            } else {
              w_elem.addClass('selectorgadget_selected');
              countSelected = gadget.selected.push(elem);
              
              // const elemNon = document.querySelectorAll(elem.parentNode);
              // elemNon.forEach(el => {
              //   if(el !== elem){
              //     countRejected = gadget.rejected.push(el);
              //     //for(int i = 0; i < el.children)
              //   }
              // });

            }
            gadget.clearSuggested();
            prediction = gadget.prediction_helper.predictCss(jQuerySG(gadget.selected), jQuerySG(gadget.rejected.concat(gadget.restricted_elements)));
            gadget.suggestPredicted(prediction);
            gadget.setPath(prediction);

            //after set path must unselect and unreject
            while(countSelected > 0){
              gadget.selected.pop();
              countSelected--;
            }
            while(countRejected > 0){
              gadget.rejeced.pop();
              countRejected--;
            }

            gadget.removeBorders();
            gadget.blockClicksOn(elem);
            w_elem.trigger("mouseover.sg", {
              'self': gadget
            });
            return false;
          };
      
          SelectorGadget.prototype.setupEventHandlers = function() {
            jQuerySG("*:not(.selectorgadget_ignore)").bind("mouseover.sg", {
              'self': this
            }, this.sgMouseover);
            jQuerySG("*:not(.selectorgadget_ignore)").bind("mouseout.sg", {
              'self': this
            }, this.sgMouseout);
            jQuerySG("*:not(.selectorgadget_ignore)").bind("mousedown.sg", {
              'self': this
            }, this.sgMousedown);
            jQuerySG("html").bind("keydown.sg", {
              'self': this
            }, this.listenForActionKeys);
            return jQuerySG("html").bind("keyup.sg", {
              'self': this
            }, this.clearActionKeys);
          };
      
          SelectorGadget.prototype.listenForActionKeys = function(e) {
            var gadget;
            gadget = e.data.self;
            if (gadget.unbound) {
              return true;
            }
            if (e.keyCode === 16 || e.keyCode === 68) {
              gadget.special_mode = 'd';
              return gadget.removeBorders();
            }
          };
      
          SelectorGadget.prototype.clearActionKeys = function(e) {
            var gadget;
            gadget = e.data.self;
            if (gadget.unbound) {
              return true;
            }
            gadget.removeBorders();
            return gadget.special_mode = null;
          };
      
          SelectorGadget.prototype.blockClicksOn = function(elem) {
            var block, p;
            elem = jQuerySG(elem);
            p = elem.offset();
            block = jQuerySG('<div>').css('position', 'absolute').css('z-index', '9999999').css('width', this.px(elem.outerWidth())).css('height', this.px(elem.outerHeight())).css('top', this.px(p.top)).css('left', this.px(p.left)).css('background-color', '');
            document.body.appendChild(block.get(0));
            setTimeout((function() {
              return block.remove();
            }), 400);
            return false;
          };
      
          SelectorGadget.prototype.setMode = function(mode) {
            if (mode === 'browse') {
              this.removeEventHandlers();
            } else if (mode === 'interactive') {
              this.setupEventHandlers();
            }
            return this.clearSelected();
          };
      
          SelectorGadget.prototype.suggestPredicted = function(prediction) {
            var count;
            if (prediction && prediction !== '') {
              count = 0;
              jQuerySG(prediction).each(function() {
                count += 1;
                if (!jQuerySG(this).hasClass('selectorgadget_selected') && !jQuerySG(this).hasClass('selectorgadget_ignore') && !jQuerySG(this).hasClass('selectorgadget_rejected')) {
                  return jQuerySG(this).addClass('selectorgadget_suggested');
                }
              });
              if (this.clear_button) {
                if (count > 0) {
                  return this.clear_button.attr('value', 'Clear (' + count + ')');
                } else {
                  return this.clear_button.attr('value', 'Clear');
                }
              }
            }
          };
      
          SelectorGadget.prototype.setPath = function(prediction) {
            if (prediction && prediction.length > 0) {
              chrome.runtime.sendMessage({
                url: window.location.href,
                cssVal: prediction
              })
              return this.path_output_field.value = prediction;
            } else {
              return this.path_output_field.value = 'No valid path found.';
            }
          };
      
          SelectorGadget.prototype.refreshFromPath = function(e) {
            var path, self;
            self = (e && e.data && e.data.self) || this;
            path = self.path_output_field.value;
            self.clearSelected();
            self.suggestPredicted(path);
            return self.setPath(path);
          };
      
          SelectorGadget.prototype.showXPath = function(e) {
            var path, self;
            self = (e && e.data && e.data.self) || this;
            path = self.path_output_field.value;
            if (path === 'No valid path found.') {
              return;
            }
            return prompt("The CSS selector '" + path + "' as an XPath is shown below.  Please report any bugs that you find with this converter.", self.prediction_helper.cssToXPath(path));
          };
      
          SelectorGadget.prototype.clearSelected = function(e) {
            var self;
            self = (e && e.data && e.data.self) || this;
            self.selected = [];
            self.rejected = [];
            jQuerySG('.selectorgadget_selected').removeClass('selectorgadget_selected');
            jQuerySG('.selectorgadget_rejected').removeClass('selectorgadget_rejected');
            self.removeBorders();
            return self.clearSuggested();
          };
      
          SelectorGadget.prototype.clearEverything = function(e) {
            var self;
            self = (e && e.data && e.data.self) || this;
            self.clearSelected();
            return self.resetOutputs();
          };
      
          SelectorGadget.prototype.resetOutputs = function() {
            return this.setPath();
          };
      
          SelectorGadget.prototype.clearSuggested = function() {
            jQuerySG('.selectorgadget_suggested').removeClass('selectorgadget_suggested');
            if (this.clear_button) {
              return this.clear_button.attr('value', 'Clear');
            }
          };
      
          SelectorGadget.prototype.showHelp = function() {
            return alert("Click on a page element that you would like your selector to match (it will turn green). SelectorGadget will then generate a minimal CSS selector for that element, and will highlight (yellow) everything that is matched by the selector. Now click on a highlighted element to reject it (red), or click on an unhighlighted element to add it (green). Through this process of selection and rejection, SelectorGadget helps you to come up with the perfect CSS selector for your needs.\n\nHolding 'shift' while moving the mouse will let you select elements inside of other selected elements.");
          };
      
          SelectorGadget.prototype.useRemoteInterface = function() {
            return window.sg_options && window.sg_options.remote_interface;
          };
      
          SelectorGadget.prototype.updateRemoteInterface = function(data_obj) {
            return this.addScript(this.composeRemoteUrl(window.sg_options.remote_interface, data_obj));
          };
      
          SelectorGadget.prototype.composeRemoteUrl = function(url, data_obj) {
            var key, params;
            params = (url.split("?")[1] && url.split("?")[1].split("&")) || [];
            params.push("t=" + (new Date()).getTime());
            params.push("url=" + encodeURIComponent(window.location.href));
            if (data_obj) {
              for (key in data_obj) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data_obj[key]));
              }
            }
            if (this.remote_data) {
              for (key in this.remote_data) {
                params.push(encodeURIComponent("data[" + key + "]") + '=' + encodeURIComponent(this.remote_data[key]));
              }
            }
            return url.split("?")[0] + "?" + params.join("&");
          };
      
          SelectorGadget.prototype.addScript = function(src) {
            var head, s;
            s = document.createElement('script');
            s.setAttribute('type', 'text/javascript');
            s.setAttribute('src', src);
            head = document.getElementsByTagName('head')[0];
            if (head) {
              return head.appendChild(s);
            } else {
              return document.body.appendChild(s);
            }
          };
      
          SelectorGadget.prototype.makeInterface = function() {
            this.sg_div = jQuerySG('<div>').attr('id', 'selectorgadget_main').addClass('selectorgadget_bottom').addClass('selectorgadget_ignore');
            if (this.useRemoteInterface()) {
              this.path_output_field = {
                value: null
              };
              this.remote_data = {};
              this.updateRemoteInterface();
            } else {
              this.makeStandardInterface();
            }
            return jQuerySG('body').append(this.sg_div);
          };
      
          SelectorGadget.prototype.makeStandardInterface = function() {
            var path, self;
            self = this;
            path = jQuerySG('<input>').attr('id', 'selectorgadget_path_field').addClass('selectorgadget_ignore').addClass('selectorgadget_input_field').keydown(function(e) {
              if (e.keyCode === 13) {
                return self.refreshFromPath(e);
              }
            }).focus(function() {
              return jQuerySG(this).select();
            });
            this.sg_div.append(path);
            this.clear_button = jQuerySG('<input type="button" value="Clear"/>').bind("click", {
              'self': this
            }, this.clearEverything).addClass('selectorgadget_ignore').addClass('selectorgadget_input_field');
            this.sg_div.append(this.clear_button);
            this.sg_div.append(jQuerySG('<input type="button" value="Toggle Position"/>').click(function() {
              if (self.sg_div.hasClass('selectorgadget_top')) {
                return self.sg_div.removeClass('selectorgadget_top').addClass('selectorgadget_bottom');
              } else {
                return self.sg_div.removeClass('selectorgadget_bottom').addClass('selectorgadget_top');
              }
            }).addClass('selectorgadget_ignore').addClass('selectorgadget_input_field'));
            this.sg_div.append(jQuerySG('<input type="button" value="XPath"/>').bind("click", {
              'self': this
            }, this.showXPath).addClass('selectorgadget_ignore').addClass('selectorgadget_input_field'));
            this.sg_div.append(jQuerySG('<input type="button" value="?"/>').bind("click", {
              'self': this
            }, this.showHelp).addClass('selectorgadget_ignore').addClass('selectorgadget_input_field'));
            this.sg_div.append(jQuerySG('<input type="button" value="X"/>').bind("click", {
              'self': this
            }, this.unbindAndRemoveInterface).addClass('selectorgadget_ignore').addClass('selectorgadget_input_field'));
            return this.path_output_field = path.get(0);
          };
      
          SelectorGadget.prototype.removeInterface = function(e) {
            this.sg_div.remove();
            return this.sg_div = null;
          };
      
          SelectorGadget.prototype.unbind = function(e) {
            var self;
            self = (e && e.data && e.data.self) || this;
            self.unbound = true;
            self.removeBorderFromDom();
            return self.clearSelected();
          };
      
          SelectorGadget.prototype.unbindAndRemoveInterface = function(e) {
            var self;
            self = (e && e.data && e.data.self) || this;
            self.unbind();
            return self.removeInterface();
          };
      
          SelectorGadget.prototype.setOutputMode = function(e, output_mode) {
            var self;
            self = (e && e.data && e.data.self) || this;
            return self.output_mode = (e && e.data && e.data.mode) || output_mode;
          };
      
          SelectorGadget.prototype.rebind = function() {
            this.unbound = false;
            this.clearEverything();
            return this.setupBorders();
          };
      
          SelectorGadget.prototype.rebindAndMakeInterface = function() {
            this.makeInterface();
            return this.rebind();
          };
      
          SelectorGadget.prototype.randBetween = function(a, b) {
            return Math.floor(Math.random() * b) + a;
          };
      
          SelectorGadget.toggle = function(options) {
            if (!window.selector_gadget) {
              window.selector_gadget = new SelectorGadget();
              window.selector_gadget.makeInterface();
              window.selector_gadget.clearEverything();
              window.selector_gadget.setMode('interactive');
              if ((options != null ? options.analytics : void 0) !== false) {
                window.selector_gadget.analytics();
              }
            } else if (window.selector_gadget.unbound) {
              window.selector_gadget.rebindAndMakeInterface();
            } else {
              window.selector_gadget.unbindAndRemoveInterface();
            }
            return jQuerySG('.selector_gadget_loading').remove();
          };
      
          SelectorGadget.prototype.analytics = function() {
            var cookie, random, referer, today, urchinUrl, uservar, utmac, utmhn, utmn, utmp;
            utmac = 'UA-148948-9';
            utmhn = encodeURIComponent('www.selectorgadget.com');
            utmn = this.randBetween(1000000000, 9999999999);
            cookie = this.randBetween(10000000, 99999999);
            random = this.randBetween(1000000000, 2147483647);
            today = Math.round(new Date().getTime() / 1000.0);
            referer = encodeURIComponent(window.location.href);
            uservar = '-';
            utmp = 'sg';
            urchinUrl = 'http://www.google-analytics.com/__utm.gif?utmwv=1&utmn=' + utmn + '&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt=-&utmhn=' + utmhn + '&utmr=' + referer + '&utmp=' + utmp + '&utmac=' + utmac + '&utmcc=__utma%3D' + cookie + '.' + random + '.' + today + '.' + today + '.' + today + '.2%3B%2B__utmb%3D' + cookie + '%3B%2B__utmc%3D' + cookie + '%3B%2B__utmz%3D' + cookie + '.' + today + '.2.2.utmccn%3D(direct)%7Cutmcsr%3D(direct)%7Cutmcmd%3D(none)%3B%2B__utmv%3D' + cookie + '.' + uservar + '%3B';
            return document.body.appendChild(jQuerySG('<img />').attr('src', urchinUrl).get(0));
          };
      
          return SelectorGadget;
      
        })();
      
      }).call(this); // This file is appended to build/selectorgadget_combined.js to generate the final contentScript.
  }

  var interval = setInterval(function () {
    if (typeof SelectorGadget != "undefined") {
      clearInterval(interval);
      SelectorGadget.toggle();
    }
  }, 50);
})();
