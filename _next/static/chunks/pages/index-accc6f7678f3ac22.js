(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    6825: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return f;
        },
      });
      var r = n(2809),
        i = n(37),
        a = n(9711),
        o = n(6038),
        l = n(7294),
        s = n(131),
        c = n(2757),
        u = n(7946),
        d = n(946);
      o.ZP.registerPlugin(c.SplitText),
        o.ZP.registerPlugin(u.ScrambleTextPlugin);
      var f = function () {
          var e = (0, l.useRef)([]),
            t = (0, s.YD)({ triggerOnce: !0, threshold: 0.25 }),
            n = (0, a.Z)(t, 2),
            r = n[0],
            i = n[1],
            o = (0, d.e)().hasRouted,
            c = (0, l.useMemo)(function () {
              return (
                (e.current = []),
                function (t) {
                  t && e.current.push(t);
                }
              );
            }, []);
          return (
            (0, l.useEffect)(
              function () {
                i &&
                  m(
                    e.current.filter(function (e) {
                      return !!e;
                    }),
                    o
                  );
              },
              [i]
            ),
            [r, c]
          );
        },
        m = function (e, t) {
          e.forEach(function (e, n) {
            switch (e.getAttribute("data-type")) {
              case "title":
                p(e, n, t);
                break;
              case "text":
                !t && h(e, n, t);
            }
          });
        },
        p = function (e, t, n) {
          var r = (n ? 0 : 0.2) + 0.05 * t;
          new c.SplitText(e, {
            charsClass: "js-char",
            type: "lines, chars",
          }).lines.forEach(function (n, a) {
            var l = (0, i.Z)(n.querySelectorAll(".js-char"));
            t % 2 !== 0 && l.reverse(),
              o.ZP.set(l, { opacity: 0 }),
              o.ZP.set(e, { opacity: 1 }),
              l.forEach(function (e, t) {
                0 === t
                  ? o.ZP.set(e, {
                      backgroundColor: "#ffffff",
                      color: "transparent",
                      delay: 0,
                      opacity: 1,
                    })
                  : o.ZP.set(e, {
                      backgroundColor: "#ffffff",
                      color: "transparent",
                      delay: 0.05 * t + 0.15 * a + r,
                      opacity: 1,
                    }),
                  o.ZP.set(e, {
                    backgroundColor: "transparent",
                    color: "#fff",
                    delay: 0.065 * t + 0.15 * a + r,
                  });
              });
          });
        },
        h = function (e, t, n) {
          new c.SplitText(e, { type: "lines" }).lines.forEach(function (e, t) {
            var i;
            o.ZP.set(e, { opacity: 0 });
            var a = (n ? 0.2 : 0.4) + 0.05 * t,
              l = e.textContent;
            o.ZP.to(e, {
              duration: 1,
              scrambleText:
                ((i = { tweenLength: !1, revealDelay: a }),
                (0, r.Z)(i, "tweenLength", !1),
                (0, r.Z)(i, "rightToLeft", t % 2 !== 0),
                (0, r.Z)(i, "text", l),
                (0, r.Z)(i, "chars", " "),
                (0, r.Z)(i, "speed", 0.05),
                i),
            }),
              o.ZP.set(e, { opacity: 1, delay: 0.2 }),
              2 === t &&
                (o.ZP.set(e, { opacity: 0, delay: 0.6 }),
                o.ZP.set(e, { opacity: 1, delay: 0.7 }));
          }),
            o.ZP.set(e, { opacity: 1 });
        };
    },
    3579: function (e, t, n) {
      "use strict";
      var r = n(1682);
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      t.default = function (e, t) {
        var n = o.default,
          r = {
            loading: function (e) {
              e.error, e.isLoading;
              return e.pastDelay, null;
            },
          };
        e instanceof Promise
          ? (r.loader = function () {
              return e;
            })
          : "function" === typeof e
          ? (r.loader = e)
          : "object" === typeof e && (r = a(a({}, r), e));
        var i = (r = a(a({}, r), t));
        if (i.suspense)
          throw new Error(
            "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
          );
        if (i.suspense) return n(i);
        r.loadableGenerated &&
          delete (r = a(a({}, r), r.loadableGenerated)).loadableGenerated;
        if ("boolean" === typeof r.ssr) {
          if (!r.ssr) return delete r.ssr, s(n, r);
          delete r.ssr;
        }
        return n(r);
      };
      l(n(7294));
      var o = l(n(6922));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
    },
    173: function (e, t, n) {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoadableContext = void 0);
      var i = (
        (r = n(7294)) && r.__esModule ? r : { default: r }
      ).default.createContext(null);
      t.LoadableContext = i;
    },
    6922: function (e, t, n) {
      "use strict";
      var r = n(2553),
        i = n(2012),
        a = n(1682);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return c(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          o = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (l = !0), (a = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (l) throw a;
            }
          },
        };
      }
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var u,
        d = (u = n(7294)) && u.__esModule ? u : { default: u },
        f = n(7161),
        m = n(173);
      var p = [],
        h = [],
        y = !1;
      function v(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      var w = (function () {
        function e(t, n) {
          r(this, e),
            (this._loadFn = t),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          i(e, [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  n = this._opts;
                t.loading &&
                  ("number" === typeof n.delay &&
                    (0 === n.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, n.delay))),
                  "number" === typeof n.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, n.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = l(
                  l({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function g(e) {
        return (function (e, t) {
          var n = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              webpack: null,
              modules: null,
              suspense: !1,
            },
            t
          );
          n.suspense && (n.lazy = d.default.lazy(n.loader));
          var r = null;
          function i() {
            if (!r) {
              var t = new w(e, n);
              r = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return r.promise();
          }
          if (!y && "function" === typeof n.webpack && !n.suspense) {
            var a = n.webpack();
            h.push(function (e) {
              var t,
                n = s(a);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r = t.value;
                  if (-1 !== e.indexOf(r)) return i();
                }
              } catch (o) {
                n.e(o);
              } finally {
                n.f();
              }
            });
          }
          var o = n.suspense
            ? function (e, t) {
                return d.default.createElement(
                  n.lazy,
                  l(l({}, e), {}, { ref: t })
                );
              }
            : function (e, t) {
                i();
                var a = d.default.useContext(m.LoadableContext),
                  o = f.useSubscription(r);
                return (
                  d.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: r.retry };
                    },
                    []
                  ),
                  a &&
                    Array.isArray(n.modules) &&
                    n.modules.forEach(function (e) {
                      a(e);
                    }),
                  d.default.useMemo(
                    function () {
                      return o.loading || o.error
                        ? d.default.createElement(n.loading, {
                            isLoading: o.loading,
                            pastDelay: o.pastDelay,
                            timedOut: o.timedOut,
                            error: o.error,
                            retry: r.retry,
                          })
                        : o.loaded
                        ? d.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e;
                            })(o.loaded),
                            e
                          )
                        : null;
                    },
                    [e, o]
                  )
                );
              };
          return (
            (o.preload = function () {
              return !n.suspense && i();
            }),
            (o.displayName = "LoadableComponent"),
            d.default.forwardRef(o)
          );
        })(v, e);
      }
      function b(e, t) {
        for (var n = []; e.length; ) {
          var r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(function () {
          if (e.length) return b(e, t);
        });
      }
      (g.preloadAll = function () {
        return new Promise(function (e, t) {
          b(p).then(e, t);
        });
      }),
        (g.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var n = function () {
              return (y = !0), t();
            };
            b(h, e).then(n, n);
          });
        }),
        (window.__NEXT_PRELOADREADY = g.preloadReady);
      var x = g;
      t.default = x;
    },
    3263: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        });
      var r = n(3685),
        i = n(9711),
        a = n(7294),
        o = n(6038),
        l = n(2004),
        s = n(946),
        c = n(6825),
        u = n(5068),
        d = n(8064),
        f = n(6885),
        m = n(2192);
      var p = (0, m.Z)("section", { target: "e1rjaysv3" })({
          name: "18fplge",
          styles:
            "min-height:100vh;display:flex;flex-direction:column;h1{font-size:calc(40 / 375 * 100vw);width:calc(335 / 375 * 100vw);@media (min-width: 768px){font-size:calc(82 / 1440 * 100vw);width:calc(759 / 1440 * 100vw);}@media (min-width: 1920px){width:calc(998 / 1920 * 100vw);font-size:calc(108 / 1920 * 100vw);}}.video{position:absolute;left:50%;top:50%;transform:translate(-50%, 0);}",
        }),
        h = (0, m.Z)("p", { target: "e1rjaysv2" })({
          name: "10wl9g3",
          styles:
            "width:calc(335 / 375 * 100vw);margin:0 auto;font-size:calc(14 / 375 * 100vw);@media (min-width: 768px){font-size:calc(16 / 1440 * 100vw);width:calc(520 / 1440 * 100vw);}@media (min-width: 1920px){width:calc(693 / 1920 * 100vw);font-size:calc(20 / 1920 * 100vw);}&:first-letter{margin-left:calc(130 / 375 * 100vw + 0.7rem);@media (min-width: 400px){margin-left:calc(130 / 375 * 100vw + 0.5rem);}@media (min-width: 600px){margin-left:calc(130 / 375 * 100vw);}@media (min-width: 768px){margin-left:16.3vw;}@media (min-width: 1024px){margin-left:15.75vw;}@media (min-width: 1200px){margin-left:15.35vw;}@media (min-width: 1440px){margin-left:15.1vw;}@media (min-width: 1660px){margin-left:15vw;}@media (min-width: 1800px){margin-left:14.8vw;}@media (min-width: 1920px){margin-left:calc(310 / 1920 * 100vw);}@media (min-width: 2300px){margin-left:calc(306 / 1920 * 100vw);}}>div{&:first-of-type{&:first-letter{margin-left:calc(130 / 375 * 100vw + 0.7rem);@media (min-width: 400px){margin-left:calc(130 / 375 * 100vw + 0.5rem);}@media (min-width: 600px){margin-left:calc(130 / 375 * 100vw);}@media (min-width: 768px){margin-left:16.3vw;}@media (min-width: 1024px){margin-left:15.75vw;}@media (min-width: 1200px){margin-left:15.35vw;}@media (min-width: 1440px){margin-left:15.1vw;}@media (min-width: 1660px){margin-left:15vw;}@media (min-width: 1800px){margin-left:14.8vw;}@media (min-width: 1920px){margin-left:calc(310 / 1920 * 100vw);}@media (min-width: 2300px){margin-left:calc(306 / 1920 * 100vw);}}}}",
        }),
        y = (0, m.Z)("div", { target: "e1rjaysv1" })({
          name: "h1zj2t",
          styles:
            "position:relative;@media (max-width: 768px){height:30vh;}video{object-fit:cover;}",
        }),
        v = (0, m.Z)("div", { target: "e1rjaysv0" })({
          name: "1bzbaaa",
          styles:
            "position:absolute;top:20px;left:0;width:100%;height:100%;background-image:url('/videos/video-overlay.png');background-repeat:repeat-x;z-index:10;@media (max-width: 768px){top:0;}",
        }),
        w = n(5944);
      var g = {
          name: "ca3dus",
          styles:
            "padding-top:7rem;@media (min-width: 1920px){padding-top:9rem;}",
        },
        b = {
          name: "1gizpvr",
          styles:
            "display:flex;flex-direction:column;margin-left:auto;margin-right:auto;margin-bottom:0.5rem",
        },
        x = { name: "1infa4c", styles: "margin-left:auto;margin-right:auto" },
        Z = { name: "1o3nkn", styles: "margin-left:auto" },
        _ = { name: "1b52848", styles: "grid-column:span 10 / span 10" },
        P = {
          name: "z5nvre",
          styles:
            "flex-direction:column;align-items:center;margin-top:auto;@media (min-width: 1024px){display:flex;}",
        },
        O = {
          name: "1xrz2pp",
          styles:
            "grid-column:span 10 / span 10;display:flex;flex-direction:column;@media (min-width: 1024px){width:40%;margin-left:auto;margin-right:auto;}",
        },
        j = {
          name: "cfn7vf",
          styles:
            "margin-left:auto;margin-right:auto;margin-top:2rem;margin-bottom:2rem;@media (min-width: 1920px){padding-top:2.5rem;padding-bottom:2.5rem;}",
        };
      var k = function (e) {
          e.current &&
            (o.ZP.set(e.current, { opacity: 0 }),
            setTimeout(function () {
              o.ZP.set(e.current, { opacity: 1 }),
                o.ZP.set(e.current, { opacity: 0, delay: 0.25 / 1.5 }),
                o.ZP.set(e.current, { opacity: 1, delay: 0.35 / 1.5 }),
                o.ZP.set(e.current, { opacity: 0, delay: 0.3 }),
                o.ZP.set(e.current, { opacity: 1, delay: 0.55 / 1.5 });
            }, 500));
        },
        E = function () {
          var e = (0, a.useRef)(!1),
            t = (0, c.M)(),
            n = (0, i.Z)(t, 2),
            r = n[0],
            o = n[1],
            m = (0, s.e)().hasRouted;
          return (
            (0, a.useEffect)(function () {
              !m && k(e);
            }, []),
            (0, w.BX)(p, {
              children: [
                (0, w.BX)("section", {
                  className: "flex-col items-center",
                  css: g,
                  ref: r,
                  children: [
                    (0, w.BX)("h1", {
                      className: "text-82",
                      css: b,
                      children: [
                        (0, w.tZ)("span", {
                          ref: o,
                          style: { opacity: m ? 1 : 0 },
                          "data-type": "title",
                          children: "Seamlessly",
                        }),
                        (0, w.tZ)("span", {
                          ref: o,
                          style: { opacity: m ? 1 : 0 },
                          css: x,
                          "data-type": "title",
                          children: "Connected",
                        }),
                        (0, w.tZ)("span", {
                          ref: o,
                          style: { opacity: m ? 1 : 0 },
                          css: Z,
                          "data-type": "title",
                          children: "Blockchains",
                        }),
                      ],
                    }),
                    (0, w.tZ)("article", {
                      css: _,
                      children: (0, w.tZ)(h, {
                        className: "text-16 is-uppercase",
                        style: { opacity: m ? 1 : 0 },
                        ref: o,
                        "data-type": "text",
                        children:
                          "Say hello to LayerZero, an omnichain interoperability protocol. LayerZero enables the realization of cross-chain applications with a low level communication primitive.",
                      }),
                    }),
                  ],
                }),
                (0, w.BX)(y, {
                  children: [
                    (0, w.tZ)(v, {}),
                    (0, w.tZ)(l.Z, {
                      height: "100%",
                      loop: !0,
                      playing: !0,
                      playsinline: !0,
                      muted: !0,
                      style: { marginTop: "20px" },
                      url: (0, f.n)("header-animation.mp4"),
                      width: "100%",
                    }),
                  ],
                }),
                (0, w.tZ)("section", {
                  className: "connectButton",
                  css: P,
                  children: (0, w.BX)("div", {
                    css: O,
                    children: [
                      (0, w.tZ)(d.Z, {
                        label: "GET ELIGIBLE",
                        href: "",
                        hasAnimation: !m,
                      }),
                      (0, w.tZ)("div", {
                        css: j,
                        className: "text-12 is-uppercase",
                        ref: e,
                        children: (0, w.tZ)(u.Z, {
                          label: "</A> Download Whitepaper",
                          href: "/pdf/LayerZero_Whitepaper_Release.pdf",
                          external: !0,
                          hasAnimation: !m,
                          delay: 500,
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        S = n(5152),
        D = (0, S.default)(
          function () {
            return Promise.all([n.e(750), n.e(993)]).then(n.bind(n, 1530));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [1530];
              },
              modules: ["index.js -> ../src/sections/Develop"],
            },
          }
        ),
        T = (0, S.default)(
          function () {
            return n.e(34).then(n.bind(n, 5034));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [5034];
              },
              modules: ["index.js -> ../src/sections/Examples"],
            },
          }
        ),
        A = (0, S.default)(
          function () {
            return Promise.all([n.e(908), n.e(266)]).then(n.bind(n, 9908));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [9908];
              },
              modules: ["index.js -> ../src/sections/Newsletter"],
            },
          }
        ),
        C = (0, S.default)(
          function () {
            return Promise.all([n.e(750), n.e(256)]).then(n.bind(n, 116));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [116];
              },
              modules: ["index.js -> ../src/sections/Funds"],
            },
          }
        ),
        z = (0, S.default)(
          function () {
            return n.e(636).then(n.bind(n, 5636));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [5636];
              },
              modules: ["index.js -> ../src/sections/Core"],
            },
          }
        );
      function L() {
        return (0, w.BX)(w.HY, {
          children: [
            (0, w.tZ)(r.Z, {
              title: "Home | LayerZero",
              description: "",
              url: "",
            }),
            (0, w.tZ)(E, {}),
            (0, w.tZ)(z, {}),
            (0, w.tZ)(C, {}),
            (0, w.tZ)(D, {}),
            (0, w.tZ)(T, {}),
            (0, w.tZ)(A, {}),
          ],
        });
      }
    },
    3685: function (e, t, n) {
      "use strict";
      var r = n(9008),
        i = n(5944);
      t.Z = function (e) {
        var t = e.title,
          n = e.description,
          a = e.url;
        return (0, i.BX)(r.default, {
          children: [
            (0, i.tZ)("title", { children: t }),
            n &&
              (0, i.BX)(i.HY, {
                children: [
                  (0, i.tZ)("meta", { name: "description", content: n }),
                  (0, i.tZ)("meta", { name: "og:description", content: n }),
                  (0, i.tZ)("meta", {
                    name: "twitter:description",
                    content: n,
                  }),
                ],
              }),
            (0, i.tZ)("meta", { name: "og:title", content: t }),
            (0, i.tZ)("meta", { name: "twitter:title", content: t }),
            (0, i.tZ)("meta", { name: "og:url", content: a }),
            (0, i.tZ)("meta", { name: "twitter:url", content: a }),
            (0, i.tZ)("meta", { name: "og:site_name", content: t }),
          ],
        });
      };
    },
    6885: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return r;
        },
      });
      var r = function (e) {
        return new URL(
          e,
          (function () {
            var e;
            return null !==
              (e = "https://d3a2dpnnrypp5h.cloudfront.net/layerzero-network/")
              ? e
              : "";
          })()
        ).toString();
      };
    },
    8581: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(3263);
        },
      ]);
    },
    5152: function (e, t, n) {
      e.exports = n(3579);
    },
    37: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(6586);
      var i = n(6988);
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, i.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
  },
  function (e) {
    e.O(0, [774, 222, 4, 888, 179], function () {
      return (t = 8581), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
