! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("vue")) : "function" == typeof define && define.amd ? define(["vue"], t) : "object" == typeof exports ? exports.DemoBoxVue = t(require("vue")) : e.DemoBoxVue = t(e.Vue)
}(this, function (__WEBPACK_EXTERNAL_MODULE_14__) {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = 29)
    }([function (e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (e, t, n) {
        var r = n(24)("wks"),
            i = n(25),
            o = n(0).Symbol,
            s = "function" == typeof o;
        (e.exports = function (e) {
            return r[e] || (r[e] = s && o[e] || (s ? o : i)("Symbol." + e))
        }).store = r
    }, function (e, t) {
        var n = e.exports = {
            version: "2.6.5"
        };
        "number" == typeof __e && (__e = n)
    }, function (e, t, n) {
        var r = n(10),
            i = n(22);
        e.exports = n(5) ? function (e, t, n) {
            return r.f(e, t, i(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    }, function (e, t, n) {
        var r = n(9);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, function (e, t, n) {
        e.exports = !n(19)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    }, function (e, t) {
        e.exports = {}
    }, function (e, t) {
        e.exports = function (e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function (e, t, n) {
        var r = n(4),
            i = n(42),
            o = n(56),
            s = Object.defineProperty;
        t.f = n(5) ? Object.defineProperty : function (e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return s(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, function (e, t, n) {
        var r = n(24)("keys"),
            i = n(25);
        e.exports = function (e) {
            return r[e] || (r[e] = i(e))
        }
    }, function (e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    }, function (e, t, n) {
        var r = n(43),
            i = n(8);
        e.exports = function (e) {
            return r(i(e))
        }
    }, function (e, t) {
        e.exports = __WEBPACK_EXTERNAL_MODULE_14__
    }, function (e, t) {
        t.strip = function (e, t) {
            var n = document.createElement("DIV");
            return n.innerHTML = e, t = t ? [].concat(t) : [], t.forEach(function (e) {
                var t = n.querySelector(e);
                t && n.removeChild(t)
            }), n.innerHTML.trim()
        }, t.fetch = function (e, t) {
            var n = document.createElement("DIV");
            return n.innerHTML = e, n.querySelector(t) ? n.querySelector(t).innerHTML.trim() : ""
        }
    }, function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    }, function (e, t, n) {
        var r = n(9),
            i = n(0).document,
            o = r(i) && r(i.createElement);
        e.exports = function (e) {
            return o ? i.createElement(e) : {}
        }
    }, function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(21),
            i = n(40),
            o = n(51),
            s = n(3),
            a = n(7),
            l = n(44),
            c = n(23),
            u = n(48),
            p = n(1)("iterator"),
            d = !([].keys && "next" in [].keys()),
            h = function () {
                return this
            };
        e.exports = function (e, t, n, f, g, _, m) {
            l(n, t, f);
            var b, y, x, v = function (e) {
                    if (!d && e in S) return S[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, e)
                            }
                    }
                    return function () {
                        return new n(this, e)
                    }
                },
                k = t + " Iterator",
                w = "values" == g,
                E = !1,
                S = e.prototype,
                C = S[p] || S["@@iterator"] || g && S[g],
                O = C || v(g),
                P = g ? w ? v("entries") : O : void 0,
                A = "Array" == t ? S.entries || C : C;
            if (A && (x = u(A.call(new e))) !== Object.prototype && x.next && (c(x, k, !0), r || "function" == typeof x[p] || s(x, p, h)), w && C && "values" !== C.name && (E = !0, O = function () {
                    return C.call(this)
                }), r && !m || !d && !E && S[p] || s(S, p, O), a[t] = O, a[k] = h, g)
                if (b = {
                        values: w ? O : v("values"),
                        keys: _ ? O : v("keys"),
                        entries: P
                    }, m)
                    for (y in b) y in S || o(S, y, b[y]);
                else i(i.P + i.F * (d || E), t, b);
            return b
        }
    }, function (e, t) {
        e.exports = !0
    }, function (e, t) {
        e.exports = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function (e, t, n) {
        var r = n(10).f,
            i = n(6),
            o = n(1)("toStringTag");
        e.exports = function (e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    }, function (e, t, n) {
        var r = n(2),
            i = n(0),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (e.exports = function (e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(21) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, function (e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    }, function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return generateComponent
        });
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(32),
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),
            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(31),
            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__),
            __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(14),
            __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__),
            __WEBPACK_IMPORTED_MODULE_3__util_strip_tags__ = __webpack_require__(15),
            __WEBPACK_IMPORTED_MODULE_3__util_strip_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__util_strip_tags__),
            __WEBPACK_IMPORTED_MODULE_4__demo_block__ = __webpack_require__(66),
            __WEBPACK_IMPORTED_MODULE_4__demo_block___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__demo_block__),
            __WEBPACK_IMPORTED_MODULE_5_marked__ = __webpack_require__(64),
            __WEBPACK_IMPORTED_MODULE_5_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_marked__),
            install = function () {
                __WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_4__demo_block___default.a.name, __WEBPACK_IMPORTED_MODULE_4__demo_block___default.a)
            },
            generateComponent = function generateComponent(code, lang, jsResources, cssResources, bootCode) {
                var html = __WEBPACK_IMPORTED_MODULE_3__util_strip_tags___default.a.fetch(code, "template"),
                    style = __WEBPACK_IMPORTED_MODULE_3__util_strip_tags___default.a.fetch(code, "style"),
                    script = __WEBPACK_IMPORTED_MODULE_3__util_strip_tags___default.a.fetch(code, "script"),
                    descOrg = __WEBPACK_IMPORTED_MODULE_3__util_strip_tags___default.a.fetch(code, "desc"),
                    desc = __WEBPACK_IMPORTED_MODULE_5_marked___default.a && __WEBPACK_IMPORTED_MODULE_5_marked___default()(descOrg) || descOrg,
                    noBootCode = code.indexOf("/*no-boot-code*/") > -1;
                noBootCode && (bootCode = "");
                var allJsResources = jsResources,
                    extraJsMatchStrList = code.match(/\/\*\s*jsResource\s*(.*\S)\s*\*\//);
                if (extraJsMatchStrList) {
                    var jsList = extraJsMatchStrList[1].split(" "),
                        _iteratorNormalCompletion = !0,
                        _didIteratorError = !1,
                        _iteratorError = void 0;
                    try {
                        for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(jsList), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                            var js = _step.value;
                            allJsResources += '\n<script src="' + js + '"><\/script>'
                        }
                    } catch (e) {
                        _didIteratorError = !0, _iteratorError = e
                    } finally {
                        try {
                            !_iteratorNormalCompletion && _iterator.return && _iterator.return()
                        } finally {
                            if (_didIteratorError) throw _iteratorError
                        }
                    }
                }
                var scripts = script.split("export default"),
                    scriptStrOrg = "(function() {" + scripts[0] + " ; return " + scripts[1] + "})()",
                    scriptStr = Babel && Babel.transform(scriptStrOrg, {
                        presets: ["es2015"]
                    }).code || scriptStrOrg,
                    scriptObj = eval(scriptStr);
                scriptObj.template = html, scriptObj.style = style;
                var jsfiddleStr = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()({
                    html: html,
                    style: style,
                    script: script
                });
                return {
                    template: '\n      <demo-block class="demo-box"\n        :jsfiddle="jsfiddle"\n        :code="code"\n        :desc="desc"\n        :lang="lang"\n        :js-resources="allJsResources"\n        :css-resources="cssResources"\n        :boot-code="bootCode"\n        :no-boot-code="noBootCode"\n      >\n        <div class="source" slot="source">\n          <my-code></my-code>\n        </div>\n      </demo-block>\n    ',
                    components: {
                        DemoBlock: __WEBPACK_IMPORTED_MODULE_4__demo_block___default.a,
                        MyCode: scriptObj
                    },
                    data: function () {
                        return {
                            jsfiddle: {
                                html: html,
                                style: style,
                                script: script
                            },
                            code: code,
                            desc: desc,
                            lang: lang,
                            allJsResources: allJsResources,
                            cssResources: cssResources,
                            bootCode: bootCode,
                            noBootCode: noBootCode
                        }
                    }
                }
            }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(15),
            i = n.n(r),
            o = n(65),
            s = n.n(o),
            a = n(30);
        t.default = {
            name: "demo-block",
            data: function () {
                return {
                    hovering: !1,
                    isExpanded: !1,
                    fixedControl: !1,
                    scrollParent: null
                }
            },
            props: {
                jsfiddle: {
                    default: function () {
                        return {}
                    },
                    type: Object
                },
                desc: {
                    type: String,
                    default: ""
                },
                code: {
                    type: String,
                    default: ""
                },
                lang: {
                    type: String,
                    default: ""
                },
                jsResources: {
                    type: String,
                    default: ""
                },
                cssResources: {
                    type: String,
                    default: ""
                },
                bootCode: {
                    type: String,
                    default: ""
                },
                scrollParentSelector: {
                    type: String,
                    default: ".section"
                }
            },
            methods: {
                goJsfiddle: function () {
                    var e = this.jsfiddle,
                        t = e.script,
                        n = e.html,
                        r = e.style,
                        i = this.bootCode + "\n" + (t || "").replace(/export default/, "var Main =").trim(),
                        o = this.jsResources + '\n<div id="app">\n' + n.trim() + "\n</div>",
                        s = this.cssResources + "\n" + (r || "").trim() + "\n";
                    i = i ? i + "\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount('#app')" : "new Vue().$mount('#app')";
                    var a = {
                            js: i,
                            css: s,
                            html: o,
                            panel_js: 3,
                            panel_css: 1
                        },
                        l = document.getElementById("fiddle-form") || document.createElement("form");
                    l.innerHTML = "";
                    var c = document.createElement("textarea");
                    l.method = "post", l.action = "https://jsfiddle.net/api/post/library/pure/", l.target = "_blank";
                    for (var u in a) c.name = u, c.value = a[u].toString(), l.appendChild(c.cloneNode());
                    l.setAttribute("id", "fiddle-form"), l.style.display = "none", document.body.appendChild(l), l.submit()
                },
                scrollHandler: function () {
                    var e = this.$refs.meta.getBoundingClientRect(),
                        t = e.top,
                        n = e.bottom,
                        r = e.left,
                        i = e.right;
                    this.fixedControl = n > document.documentElement.clientHeight && t + 36 <= document.documentElement.clientHeight, this.$refs.control.style.left = this.fixedControl ? r + "px" : "0", this.$refs.control.style.width = this.fixedControl ? i - r + "px" : "auto"
                },
                removeScrollHandler: function () {
                    this.scrollParent && this.scrollParent.removeEventListener("scroll", this.scrollHandler)
                }
            },
            computed: {
                controlText: function () {
                    return this.isExpanded ? "Hide" : "Expand"
                },
                codeArea: function () {
                    return this.$el.getElementsByClassName("meta")[0]
                },
                codeAreaHeight: function () {
                    return this.$el.getElementsByClassName("description").length > 0 ? Math.max(this.$el.getElementsByClassName("description")[0].clientHeight, this.$el.getElementsByClassName("highlight")[0].clientHeight) : this.$el.getElementsByClassName("highlight")[0].clientHeight
                },
                codePrismed: function () {
                    n.i(a.a)(this.jsfiddle.style);
                    var e = s.a.highlight(i.a.strip(this.code, ["desc", "lang", "no-boot-code"]).replace(/\/\*.*\*\/\s*/g, ""), s.a.languages[this.lang] || s.a.languages.markup);
                    return '<pre data-lang="' + this.lang + '">\n        <code class="lang-' + this.lang + '">' + e + "</code>\n      </pre>"
                }
            },
            watch: {
                isExpanded: function (e) {
                    var t = this;
                    this.codeArea.style.height = e ? this.codeAreaHeight + 1 + "px" : "0", e || (this.fixedControl = !1, this.removeScrollHandler(), this.scrollHandler()), setTimeout(function () {
                        t.scrollParent = document.querySelector(t.scrollParentSelector) || window, t.scrollParent && t.scrollParent.addEventListener("scroll", t.scrollHandler), t.scrollHandler()
                    }, 200)
                }
            },
            mounted: function () {
                var e = this;
                this.$nextTick(function () {
                    var t = e.$el.getElementsByClassName("highlight")[0];
                    0 === e.$el.getElementsByClassName("description").length && (t.style.width = "100%", t.borderRight = "none")
                })
            },
            beforeDestroy: function () {
                this.removeScrollHandler()
            }
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "create", function () {
            return a
        });
        var r = n(14),
            i = n.n(r),
            o = n(27),
            s = function (e) {
                var t = 0;
                return function (r, s) {
                    if (/^\s*\/\*\s*vue\s*\*\//.test(r)) {
                        t++;
                        var a = n.i(o.a)(r, s, jsResources, cssResources, bootCode);
                        return i.a.component("DemoBox" + t, a), "<demo-box-" + t + "></demo-box-" + t + ">"
                    }
                    return e ? e.apply(this, arguments) : '<pre v-pre data-lang="' + (s = s || "") + '"><code class="lang-' + s + '">' + Prism.highlight(r, Prism.languages[s] || Prism.languages.markup) + "</code></pre>"
                }
            },
            a = function (e, t, n) {
                return function (e, t) {
                    window.$docsify.markdown = window.$docsify.markdown || {}, window.$docsify.markdown.renderer = window.$docsify.markdown.renderer || {}, window.$docsify.markdown.renderer.code = s(window.$docsify.markdown.renderer.code)
                }
            }
    }, function (e, t, n) {
        "use strict";
        t.a = function (e) {
            var t = document.createElement("style");
            t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t)
        }
    }, function (e, t, n) {
        e.exports = {
            default: n(33),
            __esModule: !0
        }
    }, function (e, t, n) {
        e.exports = {
            default: n(34),
            __esModule: !0
        }
    }, function (e, t, n) {
        n(61), n(60), e.exports = n(58)
    }, function (e, t, n) {
        var r = n(2),
            i = r.JSON || (r.JSON = {
                stringify: JSON.stringify
            });
        e.exports = function (e) {
            return i.stringify.apply(i, arguments)
        }
    }, function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function (e, t) {
        e.exports = function () {}
    }, function (e, t, n) {
        var r = n(13),
            i = n(54),
            o = n(53);
        e.exports = function (e) {
            return function (t, n, s) {
                var a, l = r(t),
                    c = i(l.length),
                    u = o(s, c);
                if (e && n != n) {
                    for (; c > u;)
                        if ((a = l[u++]) != a) return !0
                } else
                    for (; c > u; u++)
                        if ((e || u in l) && l[u] === n) return e || u || 0;
                return !e && -1
            }
        }
    }, function (e, t, n) {
        var r = n(16),
            i = n(1)("toStringTag"),
            o = "Arguments" == r(function () {
                return arguments
            }()),
            s = function (e, t) {
                try {
                    return e[t]
                } catch (e) {}
            };
        e.exports = function (e) {
            var t, n, a;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = s(t = Object(e), i)) ? n : o ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
        }
    }, function (e, t, n) {
        var r = n(35);
        e.exports = function (e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function (n, r, i) {
                        return e.call(t, n, r, i)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
    }, function (e, t, n) {
        var r = n(0),
            i = n(2),
            o = n(39),
            s = n(3),
            a = n(6),
            l = function (e, t, n) {
                var c, u, p, d = e & l.F,
                    h = e & l.G,
                    f = e & l.S,
                    g = e & l.P,
                    _ = e & l.B,
                    m = e & l.W,
                    b = h ? i : i[t] || (i[t] = {}),
                    y = b.prototype,
                    x = h ? r : f ? r[t] : (r[t] || {}).prototype;
                h && (n = t);
                for (c in n)(u = !d && x && void 0 !== x[c]) && a(b, c) || (p = u ? x[c] : n[c], b[c] = h && "function" != typeof x[c] ? n[c] : _ && u ? o(p, r) : m && x[c] == p ? function (e) {
                    var t = function (t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n)
                            }
                            return new e(t, n, r)
                        }
                        return e.apply(this, arguments)
                    };
                    return t.prototype = e.prototype, t
                }(p) : g && "function" == typeof p ? o(Function.call, p) : p, g && ((b.virtual || (b.virtual = {}))[c] = p, e & l.R && y && !y[c] && s(y, c, p)))
            };
        l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
    }, function (e, t, n) {
        var r = n(0).document;
        e.exports = r && r.documentElement
    }, function (e, t, n) {
        e.exports = !n(5) && !n(19)(function () {
            return 7 != Object.defineProperty(n(17)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (e, t, n) {
        var r = n(16);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(46),
            i = n(22),
            o = n(23),
            s = {};
        n(3)(s, n(1)("iterator"), function () {
            return this
        }), e.exports = function (e, t, n) {
            e.prototype = r(s, {
                next: i(1, n)
            }), o(e, t + " Iterator")
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }, function (e, t, n) {
        var r = n(4),
            i = n(47),
            o = n(18),
            s = n(11)("IE_PROTO"),
            a = function () {},
            l = function () {
                var e, t = n(17)("iframe"),
                    r = o.length;
                for (t.style.display = "none", n(41).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; r--;) delete l.prototype[o[r]];
                return l()
            };
        e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (a.prototype = r(e), n = new a, a.prototype = null, n[s] = e) : n = l(), void 0 === t ? n : i(n, t)
        }
    }, function (e, t, n) {
        var r = n(10),
            i = n(4),
            o = n(50);
        e.exports = n(5) ? Object.defineProperties : function (e, t) {
            i(e);
            for (var n, s = o(t), a = s.length, l = 0; a > l;) r.f(e, n = s[l++], t[n]);
            return e
        }
    }, function (e, t, n) {
        var r = n(6),
            i = n(55),
            o = n(11)("IE_PROTO"),
            s = Object.prototype;
        e.exports = Object.getPrototypeOf || function (e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
        }
    }, function (e, t, n) {
        var r = n(6),
            i = n(13),
            o = n(37)(!1),
            s = n(11)("IE_PROTO");
        e.exports = function (e, t) {
            var n, a = i(e),
                l = 0,
                c = [];
            for (n in a) n != s && r(a, n) && c.push(n);
            for (; t.length > l;) r(a, n = t[l++]) && (~o(c, n) || c.push(n));
            return c
        }
    }, function (e, t, n) {
        var r = n(49),
            i = n(18);
        e.exports = Object.keys || function (e) {
            return r(e, i)
        }
    }, function (e, t, n) {
        e.exports = n(3)
    }, function (e, t, n) {
        var r = n(12),
            i = n(8);
        e.exports = function (e) {
            return function (t, n) {
                var o, s, a = String(i(t)),
                    l = r(n),
                    c = a.length;
                return l < 0 || l >= c ? e ? "" : void 0 : (o = a.charCodeAt(l), o < 55296 || o > 56319 || l + 1 === c || (s = a.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? a.charAt(l) : o : e ? a.slice(l, l + 2) : s - 56320 + (o - 55296 << 10) + 65536)
            }
        }
    }, function (e, t, n) {
        var r = n(12),
            i = Math.max,
            o = Math.min;
        e.exports = function (e, t) {
            return e = r(e), e < 0 ? i(e + t, 0) : o(e, t)
        }
    }, function (e, t, n) {
        var r = n(12),
            i = Math.min;
        e.exports = function (e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0
        }
    }, function (e, t, n) {
        var r = n(8);
        e.exports = function (e) {
            return Object(r(e))
        }
    }, function (e, t, n) {
        var r = n(9);
        e.exports = function (e, t) {
            if (!r(e)) return e;
            var n, i;
            if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
            if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) return i;
            if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (e, t, n) {
        var r = n(38),
            i = n(1)("iterator"),
            o = n(7);
        e.exports = n(2).getIteratorMethod = function (e) {
            if (void 0 != e) return e[i] || e["@@iterator"] || o[r(e)]
        }
    }, function (e, t, n) {
        var r = n(4),
            i = n(57);
        e.exports = n(2).getIterator = function (e) {
            var t = i(e);
            if ("function" != typeof t) throw TypeError(e + " is not iterable!");
            return r(t.call(e))
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(36),
            i = n(45),
            o = n(7),
            s = n(13);
        e.exports = n(20)(Array, "Array", function (e, t) {
            this._t = s(e), this._i = 0, this._k = t
        }, function () {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]])
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    }, function (e, t, n) {
        "use strict";
        var r = n(52)(!0);
        n(20)(String, "String", function (e) {
            this._t = String(e), this._i = 0
        }, function () {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        })
    }, function (e, t, n) {
        n(59);
        for (var r = n(0), i = n(3), o = n(7), s = n(1)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < a.length; l++) {
            var c = a[l],
                u = r[c],
                p = u && u.prototype;
            p && !p[s] && i(p, s, c), o[c] = o.Array
        }
    }, function (e, t, n) {
        t = e.exports = n(63)(!1), t.push([e.i, ".demo-block{border:1px solid #eaeefb;border-radius:4px;transition:.2s}.demo-block.hover{box-shadow:0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5)}.demo-block code{font-family:Menlo,Monaco,Consolas,Courier,monospace}.demo-block .demo-button{float:right}.demo-block .source{padding:24px}.demo-block .meta{background-color:#f9fafc;border-top:1px solid #eaeefb;clear:both;overflow:hidden;height:0;transition:height .2s}.demo-block .description{padding:18px 24px;width:40%;box-sizing:border-box;border-left:1px solid #eaeefb;float:right;font-size:14px;line-height:1.8;color:#5e6d82;word-break:break-word}.demo-block .description p{margin:0 0 12px;line-height:1.8}.demo-block .description code{color:#5e6d82;background-color:#e6effb;margin:0 4px;display:inline-block;padding:1px 5px;font-size:12px;border-radius:3px;height:18px;line-height:18px}.demo-block .description button{height:36px;line-height:36px;text-align:center;background:#20a0ff;border:none;outline:none;border-radius:5px;color:#fff;display:block;font-size:14px;padding-left:10px;padding-right:10px}.demo-block .description button:hover{background:#4db3ff}.demo-block .highlight{width:60%;border-right:1px solid #eaeefb}.demo-block .highlight pre{margin:0}.demo-block .highlight code.hljs{margin:0;border:none;max-height:none;border-radius:0}.demo-block .highlight code.hljs:before{content:none}.demo-block .lang-css{padding-bottom:0}.demo-block .demo-block-control{border-top:1px solid #eaeefb;height:36px;box-sizing:border-box;background-color:#fff;border-bottom-left-radius:4px;border-bottom-right-radius:4px;text-align:center;margin-top:-1px;color:#d3dce6;cursor:pointer;transition:.2s;position:relative}.demo-block .demo-block-control.is-fixed{position:fixed;bottom:0;width:868px}.demo-block .demo-block-control i{font-size:12px;line-height:36px;transition:.3s}.demo-block .demo-block-control i.hovering{transform:translateX(-40px)}.demo-block .demo-block-control span{position:absolute;transform:translateX(-30px);font-size:14px;line-height:36px;transition:.3s;display:inline-block;color:#58b7ff}.demo-block .demo-block-control span:hover{color:#1d8ce0}.demo-block .demo-block-control .text-slide-enter,.demo-block .demo-block-control .text-slide-leave-active{opacity:0;transform:translateX(10px)}", ""])
    }, function (e, t) {
        function n(e, t) {
            var n = e[1] || "",
                i = e[3];
            if (!i) return n;
            if (t && "function" == typeof btoa) {
                var o = r(i);
                return [n].concat(i.sources.map(function (e) {
                    return "/*# sourceURL=" + i.sourceRoot + e + " */"
                })).concat([o]).join("\n")
            }
            return [n].join("\n")
        }

        function r(e) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
        }
        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var r = n(t, e);
                    return t[2] ? "@media " + t[2] + "{" + r + "}" : r
                }).join("")
            }, t.i = function (e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var r = {}, i = 0; i < this.length; i++) {
                    var o = this[i][0];
                    "number" == typeof o && (r[o] = !0)
                }
                for (i = 0; i < e.length; i++) {
                    var s = e[i];
                    "number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
                }
            }, t
        }
    }, function (e, t, n) {
        (function (t) {
            ! function (t) {
                "use strict";

                function n(e) {
                    this.tokens = [], this.tokens.links = {}, this.options = e || h.defaults, this.rules = f.normal, this.options.gfm && (this.options.tables ? this.rules = f.tables : this.rules = f.gfm)
                }

                function r(e, t) {
                    if (this.options = t || h.defaults, this.links = e, this.rules = g.normal, this.renderer = this.options.renderer || new i, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                    this.options.gfm ? this.options.breaks ? this.rules = g.breaks : this.rules = g.gfm : this.options.pedantic && (this.rules = g.pedantic)
                }

                function i(e) {
                    this.options = e || {}
                }

                function o() {}

                function s(e) {
                    this.tokens = [], this.token = null, this.options = e || h.defaults, this.options.renderer = this.options.renderer || new i, this.renderer = this.options.renderer, this.renderer.options = this.options
                }

                function a(e, t) {
                    return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
                }

                function l(e) {
                    return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (e, t) {
                        return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
                    })
                }

                function c(e, t) {
                    return e = e.source, t = t || "", {
                        replace: function (t, n) {
                            return n = n.source || n, n = n.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(t, n), this
                        },
                        getRegex: function () {
                            return new RegExp(e, t)
                        }
                    }
                }

                function u(e, t) {
                    return _[" " + e] || (/^[^:]+:\/*[^\/]*$/.test(e) ? _[" " + e] = e + "/" : _[" " + e] = e.replace(/[^\/]*$/, "")), e = _[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + t : e + t
                }

                function p() {}

                function d(e) {
                    for (var t, n, r = 1; r < arguments.length; r++) {
                        t = arguments[r];
                        for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }

                function h(e, t, r) {
                    if (void 0 === e || null === e) throw new Error("marked(): input parameter is undefined or null");
                    if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                    if (r || "function" == typeof t) {
                        r || (r = t, t = null), t = d({}, h.defaults, t || {});
                        var i, o, l = t.highlight,
                            c = 0;
                        try {
                            i = n.lex(e, t)
                        } catch (e) {
                            return r(e)
                        }
                        o = i.length;
                        var u = function (e) {
                            if (e) return t.highlight = l, r(e);
                            var n;
                            try {
                                n = s.parse(i, t)
                            } catch (t) {
                                e = t
                            }
                            return t.highlight = l, e ? r(e) : r(null, n)
                        };
                        if (!l || l.length < 3) return u();
                        if (delete t.highlight, !o) return u();
                        for (; c < i.length; c++) ! function (e) {
                            "code" !== e.type ? --o || u() : l(e.text, e.lang, function (t, n) {
                                return t ? u(t) : null == n || n === e.text ? --o || u() : (e.text = n, e.escaped = !0, void(--o || u()))
                            })
                        }(i[c])
                    } else try {
                        return t && (t = d({}, h.defaults, t)), s.parse(n.lex(e, t), t)
                    } catch (e) {
                        if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", (t || h.defaults).silent) return "<p>An error occurred:</p><pre>" + a(e.message + "", !0) + "</pre>";
                        throw e
                    }
                }
                var f = {
                    newline: /^\n+/,
                    code: /^( {4}[^\n]+\n*)+/,
                    fences: p,
                    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
                    nptable: p,
                    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                    html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
                    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                    table: p,
                    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                    paragraph: /^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,
                    text: /^[^\n]+/
                };
                f._label = /(?:\\[\[\]]|[^\[\]])+/, f._title = /(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/, f.def = c(f.def).replace("label", f._label).replace("title", f._title).getRegex(), f.bullet = /(?:[*+-]|\d+\.)/, f.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, f.item = c(f.item, "gm").replace(/bull/g, f.bullet).getRegex(), f.list = c(f.list).replace(/bull/g, f.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + f.def.source + ")").getRegex(), f._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b", f.html = c(f.html).replace("comment", /<!--[\s\S]*?-->/).replace("closed", /<(tag)[\s\S]+?<\/\1>/).replace("closing", /<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/).replace(/tag/g, f._tag).getRegex(), f.paragraph = c(f.paragraph).replace("hr", f.hr).replace("heading", f.heading).replace("lheading", f.lheading).replace("tag", "<" + f._tag).getRegex(), f.blockquote = c(f.blockquote).replace("paragraph", f.paragraph).getRegex(), f.normal = d({}, f), f.gfm = d({}, f.normal, {
                    fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
                    paragraph: /^/,
                    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
                }), f.gfm.paragraph = c(f.paragraph).replace("(?!", "(?!" + f.gfm.fences.source.replace("\\1", "\\2") + "|" + f.list.source.replace("\\1", "\\3") + "|").getRegex(), f.tables = d({}, f.gfm, {
                    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
                    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
                }), n.rules = f, n.lex = function (e, t) {
                    return new n(t).lex(e)
                }, n.prototype.lex = function (e) {
                    return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
                }, n.prototype.token = function (e, t) {
                    e = e.replace(/^ +$/gm, "");
                    for (var n, r, i, o, s, a, l, c, u, p, d; e;)
                        if ((i = this.rules.newline.exec(e)) && (e = e.substring(i[0].length), i[0].length > 1 && this.tokens.push({
                                type: "space"
                            })), i = this.rules.code.exec(e)) e = e.substring(i[0].length), i = i[0].replace(/^ {4}/gm, ""), this.tokens.push({
                            type: "code",
                            text: this.options.pedantic ? i : i.replace(/\n+$/, "")
                        });
                        else if (i = this.rules.fences.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: "code",
                        lang: i[2],
                        text: i[3] || ""
                    });
                    else if (i = this.rules.heading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: "heading",
                        depth: i[1].length,
                        text: i[2]
                    });
                    else if (t && (i = this.rules.nptable.exec(e))) {
                        for (e = e.substring(i[0].length), a = {
                                type: "table",
                                header: i[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                                align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: i[3].replace(/\n$/, "").split("\n")
                            }, c = 0; c < a.align.length; c++) /^ *-+: *$/.test(a.align[c]) ? a.align[c] = "right" : /^ *:-+: *$/.test(a.align[c]) ? a.align[c] = "center" : /^ *:-+ *$/.test(a.align[c]) ? a.align[c] = "left" : a.align[c] = null;
                        for (c = 0; c < a.cells.length; c++) a.cells[c] = a.cells[c].split(/ *\| */);
                        this.tokens.push(a)
                    } else if (i = this.rules.hr.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: "hr"
                    });
                    else if (i = this.rules.blockquote.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: "blockquote_start"
                    }), i = i[0].replace(/^ *> ?/gm, ""), this.token(i, t), this.tokens.push({
                        type: "blockquote_end"
                    });
                    else if (i = this.rules.list.exec(e)) {
                        for (e = e.substring(i[0].length), o = i[2], d = o.length > 1, this.tokens.push({
                                type: "list_start",
                                ordered: d,
                                start: d ? +o : ""
                            }), i = i[0].match(this.rules.item), n = !1, p = i.length, c = 0; c < p; c++) a = i[c], l = a.length, a = a.replace(/^ *([*+-]|\d+\.) +/, ""), ~a.indexOf("\n ") && (l -= a.length, a = this.options.pedantic ? a.replace(/^ {1,4}/gm, "") : a.replace(new RegExp("^ {1," + l + "}", "gm"), "")), this.options.smartLists && c !== p - 1 && (s = f.bullet.exec(i[c + 1])[0], o === s || o.length > 1 && s.length > 1 || (e = i.slice(c + 1).join("\n") + e, c = p - 1)), r = n || /\n\n(?!\s*$)/.test(a), c !== p - 1 && (n = "\n" === a.charAt(a.length - 1), r || (r = n)), this.tokens.push({
                            type: r ? "loose_item_start" : "list_item_start"
                        }), this.token(a, !1), this.tokens.push({
                            type: "list_item_end"
                        });
                        this.tokens.push({
                            type: "list_end"
                        })
                    } else if (i = this.rules.html.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: this.options.sanitize ? "paragraph" : "html",
                        pre: !this.options.sanitizer && ("pre" === i[1] || "script" === i[1] || "style" === i[1]),
                        text: i[0]
                    });
                    else if (t && (i = this.rules.def.exec(e))) e = e.substring(i[0].length), i[3] && (i[3] = i[3].substring(1, i[3].length - 1)), u = i[1].toLowerCase(), this.tokens.links[u] || (this.tokens.links[u] = {
                        href: i[2],
                        title: i[3]
                    });
                    else if (t && (i = this.rules.table.exec(e))) {
                        for (e = e.substring(i[0].length), a = {
                                type: "table",
                                header: i[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                                align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: i[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                            }, c = 0; c < a.align.length; c++) /^ *-+: *$/.test(a.align[c]) ? a.align[c] = "right" : /^ *:-+: *$/.test(a.align[c]) ? a.align[c] = "center" : /^ *:-+ *$/.test(a.align[c]) ? a.align[c] = "left" : a.align[c] = null;
                        for (c = 0; c < a.cells.length; c++) a.cells[c] = a.cells[c].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                        this.tokens.push(a)
                    } else if (i = this.rules.lheading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: "heading",
                        depth: "=" === i[2] ? 1 : 2,
                        text: i[1]
                    });
                    else if (t && (i = this.rules.paragraph.exec(e))) e = e.substring(i[0].length), this.tokens.push({
                        type: "paragraph",
                        text: "\n" === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1) : i[1]
                    });
                    else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: "text",
                        text: i[0]
                    });
                    else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                    return this.tokens
                };
                var g = {
                    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
                    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                    url: p,
                    tag: /^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,
                    link: /^!?\[(inside)\]\(href\)/,
                    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
                    nolink: /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,
                    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
                    em: /^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,
                    code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
                    br: /^ {2,}\n(?!\s*$)/,
                    del: p,
                    text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
                };
                g._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, g._email = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, g.autolink = c(g.autolink).replace("scheme", g._scheme).replace("email", g._email).getRegex(), g._inside = /(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/, g._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, g.link = c(g.link).replace("inside", g._inside).replace("href", g._href).getRegex(), g.reflink = c(g.reflink).replace("inside", g._inside).getRegex(), g.normal = d({}, g), g.pedantic = d({}, g.normal, {
                    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
                }), g.gfm = d({}, g.normal, {
                    escape: c(g.escape).replace("])", "~|])").getRegex(),
                    url: c(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email", g._email).getRegex(),
                    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                    del: /^~~(?=\S)([\s\S]*?\S)~~/,
                    text: c(g.text).replace("]|", "~]|").replace("|", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()
                }), g.breaks = d({}, g.gfm, {
                    br: c(g.br).replace("{2,}", "*").getRegex(),
                    text: c(g.gfm.text).replace("{2,}", "*").getRegex()
                }), r.rules = g, r.output = function (e, t, n) {
                    return new r(t, n).output(e)
                }, r.prototype.output = function (e) {
                    for (var t, n, r, i, o = ""; e;)
                        if (i = this.rules.escape.exec(e)) e = e.substring(i[0].length), o += i[1];
                        else if (i = this.rules.autolink.exec(e)) e = e.substring(i[0].length), "@" === i[2] ? (n = a(this.mangle(i[1])), r = "mailto:" + n) : (n = a(i[1]), r = n), o += this.renderer.link(r, null, n);
                    else if (this.inLink || !(i = this.rules.url.exec(e))) {
                        if (i = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1), e = e.substring(i[0].length), o += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : a(i[0]) : i[0];
                        else if (i = this.rules.link.exec(e)) e = e.substring(i[0].length), this.inLink = !0, o += this.outputLink(i, {
                            href: i[2],
                            title: i[3]
                        }), this.inLink = !1;
                        else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) {
                            if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
                                o += i[0].charAt(0), e = i[0].substring(1) + e;
                                continue
                            }
                            this.inLink = !0, o += this.outputLink(i, t), this.inLink = !1
                        } else if (i = this.rules.strong.exec(e)) e = e.substring(i[0].length), o += this.renderer.strong(this.output(i[2] || i[1]));
                        else if (i = this.rules.em.exec(e)) e = e.substring(i[0].length), o += this.renderer.em(this.output(i[2] || i[1]));
                        else if (i = this.rules.code.exec(e)) e = e.substring(i[0].length), o += this.renderer.codespan(a(i[2].trim(), !0));
                        else if (i = this.rules.br.exec(e)) e = e.substring(i[0].length), o += this.renderer.br();
                        else if (i = this.rules.del.exec(e)) e = e.substring(i[0].length), o += this.renderer.del(this.output(i[1]));
                        else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), o += this.renderer.text(a(this.smartypants(i[0])));
                        else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
                    } else i[0] = this.rules._backpedal.exec(i[0])[0], e = e.substring(i[0].length), "@" === i[2] ? (n = a(i[0]), r = "mailto:" + n) : (n = a(i[0]), r = "www." === i[1] ? "http://" + n : n), o += this.renderer.link(r, null, n);
                    return o
                }, r.prototype.outputLink = function (e, t) {
                    var n = a(t.href),
                        r = t.title ? a(t.title) : null;
                    return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, a(e[1]))
                }, r.prototype.smartypants = function (e) {
                    return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
                }, r.prototype.mangle = function (e) {
                    if (!this.options.mangle) return e;
                    for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
                    return n
                }, i.prototype.code = function (e, t, n) {
                    if (this.options.highlight) {
                        var r = this.options.highlight(e, t);
                        null != r && r !== e && (n = !0, e = r)
                    }
                    return t ? '<pre><code class="' + this.options.langPrefix + a(t, !0) + '">' + (n ? e : a(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : a(e, !0)) + "\n</code></pre>"
                }, i.prototype.blockquote = function (e) {
                    return "<blockquote>\n" + e + "</blockquote>\n"
                }, i.prototype.html = function (e) {
                    return e
                }, i.prototype.heading = function (e, t, n) {
                    return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
                }, i.prototype.hr = function () {
                    return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                }, i.prototype.list = function (e, t, n) {
                    var r = t ? "ol" : "ul";
                    return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
                }, i.prototype.listitem = function (e) {
                    return "<li>" + e + "</li>\n"
                }, i.prototype.paragraph = function (e) {
                    return "<p>" + e + "</p>\n"
                }, i.prototype.table = function (e, t) {
                    return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
                }, i.prototype.tablerow = function (e) {
                    return "<tr>\n" + e + "</tr>\n"
                }, i.prototype.tablecell = function (e, t) {
                    var n = t.header ? "th" : "td";
                    return (t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
                }, i.prototype.strong = function (e) {
                    return "<strong>" + e + "</strong>"
                }, i.prototype.em = function (e) {
                    return "<em>" + e + "</em>"
                }, i.prototype.codespan = function (e) {
                    return "<code>" + e + "</code>"
                }, i.prototype.br = function () {
                    return this.options.xhtml ? "<br/>" : "<br>"
                }, i.prototype.del = function (e) {
                    return "<del>" + e + "</del>"
                }, i.prototype.link = function (e, t, n) {
                    if (this.options.sanitize) {
                        try {
                            var r = decodeURIComponent(l(e)).replace(/[^\w:]/g, "").toLowerCase()
                        } catch (e) {
                            return n
                        }
                        if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return n
                    }
                    this.options.baseUrl && !m.test(e) && (e = u(this.options.baseUrl, e));
                    var i = '<a href="' + e + '"';
                    return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>"
                }, i.prototype.image = function (e, t, n) {
                    this.options.baseUrl && !m.test(e) && (e = u(this.options.baseUrl, e));
                    var r = '<img src="' + e + '" alt="' + n + '"';
                    return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
                }, i.prototype.text = function (e) {
                    return e
                }, o.prototype.strong = o.prototype.em = o.prototype.codespan = o.prototype.del = o.prototype.text = function (e) {
                    return e
                }, o.prototype.link = o.prototype.image = function (e, t, n) {
                    return "" + n
                }, o.prototype.br = function () {
                    return ""
                }, s.parse = function (e, t) {
                    return new s(t).parse(e)
                }, s.prototype.parse = function (e) {
                    this.inline = new r(e.links, this.options), this.inlineText = new r(e.links, d({}, this.options, {
                        renderer: new o
                    })), this.tokens = e.reverse();
                    for (var t = ""; this.next();) t += this.tok();
                    return t
                }, s.prototype.next = function () {
                    return this.token = this.tokens.pop()
                }, s.prototype.peek = function () {
                    return this.tokens[this.tokens.length - 1] || 0
                }, s.prototype.parseText = function () {
                    for (var e = this.token.text;
                        "text" === this.peek().type;) e += "\n" + this.next().text;
                    return this.inline.output(e)
                }, s.prototype.tok = function () {
                    switch (this.token.type) {
                        case "space":
                            return "";
                        case "hr":
                            return this.renderer.hr();
                        case "heading":
                            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, l(this.inlineText.output(this.token.text)));
                        case "code":
                            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                        case "table":
                            var e, t, n, r, i = "",
                                o = "";
                            for (n = "", e = 0; e < this.token.header.length; e++) n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                                header: !0,
                                align: this.token.align[e]
                            });
                            for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                                for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                                    header: !1,
                                    align: this.token.align[r]
                                });
                                o += this.renderer.tablerow(n)
                            }
                            return this.renderer.table(i, o);
                        case "blockquote_start":
                            for (o = "";
                                "blockquote_end" !== this.next().type;) o += this.tok();
                            return this.renderer.blockquote(o);
                        case "list_start":
                            o = "";
                            for (var s = this.token.ordered, a = this.token.start;
                                "list_end" !== this.next().type;) o += this.tok();
                            return this.renderer.list(o, s, a);
                        case "list_item_start":
                            for (o = "";
                                "list_item_end" !== this.next().type;) o += "text" === this.token.type ? this.parseText() : this.tok();
                            return this.renderer.listitem(o);
                        case "loose_item_start":
                            for (o = "";
                                "list_item_end" !== this.next().type;) o += this.tok();
                            return this.renderer.listitem(o);
                        case "html":
                            var c = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                            return this.renderer.html(c);
                        case "paragraph":
                            return this.renderer.paragraph(this.inline.output(this.token.text));
                        case "text":
                            return this.renderer.paragraph(this.parseText())
                    }
                };
                var _ = {},
                    m = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
                p.exec = p, h.options = h.setOptions = function (e) {
                    return d(h.defaults, e), h
                }, h.defaults = {
                    gfm: !0,
                    tables: !0,
                    breaks: !1,
                    pedantic: !1,
                    sanitize: !1,
                    sanitizer: null,
                    mangle: !0,
                    smartLists: !1,
                    silent: !1,
                    highlight: null,
                    langPrefix: "lang-",
                    smartypants: !1,
                    headerPrefix: "",
                    renderer: new i,
                    xhtml: !1,
                    baseUrl: null
                }, h.Parser = s, h.parser = s.parse, h.Renderer = i, h.TextRenderer = o, h.Lexer = n, h.lexer = n.lex, h.InlineLexer = r, h.inlineLexer = r.output, h.parse = h, e.exports = h
            }(this || "undefined" != typeof window && window)
        }).call(t, n(26))
    }, function (e, t, n) {
        (function (t) {
            var n = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
                r = function () {
                    var e = /\blang(?:uage)?-([\w-]+)\b/i,
                        t = 0,
                        r = n.Prism = {
                            manual: n.Prism && n.Prism.manual,
                            disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
                            util: {
                                encode: function (e) {
                                    return e instanceof i ? new i(e.type, r.util.encode(e.content), e.alias) : "Array" === r.util.type(e) ? e.map(r.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                                },
                                type: function (e) {
                                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                                },
                                objId: function (e) {
                                    return e.__id || Object.defineProperty(e, "__id", {
                                        value: ++t
                                    }), e.__id
                                },
                                clone: function (e, t) {
                                    var n = r.util.type(e);
                                    switch (t = t || {}, n) {
                                        case "Object":
                                            if (t[r.util.objId(e)]) return t[r.util.objId(e)];
                                            var i = {};
                                            t[r.util.objId(e)] = i;
                                            for (var o in e) e.hasOwnProperty(o) && (i[o] = r.util.clone(e[o], t));
                                            return i;
                                        case "Array":
                                            if (t[r.util.objId(e)]) return t[r.util.objId(e)];
                                            var i = [];
                                            return t[r.util.objId(e)] = i, e.forEach(function (e, n) {
                                                i[n] = r.util.clone(e, t)
                                            }), i
                                    }
                                    return e
                                }
                            },
                            languages: {
                                extend: function (e, t) {
                                    var n = r.util.clone(r.languages[e]);
                                    for (var i in t) n[i] = t[i];
                                    return n
                                },
                                insertBefore: function (e, t, n, i) {
                                    i = i || r.languages;
                                    var o = i[e];
                                    if (2 == arguments.length) {
                                        n = arguments[1];
                                        for (var s in n) n.hasOwnProperty(s) && (o[s] = n[s]);
                                        return o
                                    }
                                    var a = {};
                                    for (var l in o)
                                        if (o.hasOwnProperty(l)) {
                                            if (l == t)
                                                for (var s in n) n.hasOwnProperty(s) && (a[s] = n[s]);
                                            a[l] = o[l]
                                        } return r.languages.DFS(r.languages, function (t, n) {
                                        n === i[e] && t != e && (this[t] = a)
                                    }), i[e] = a
                                },
                                DFS: function (e, t, n, i) {
                                    i = i || {};
                                    for (var o in e) e.hasOwnProperty(o) && (t.call(e, o, e[o], n || o), "Object" !== r.util.type(e[o]) || i[r.util.objId(e[o])] ? "Array" !== r.util.type(e[o]) || i[r.util.objId(e[o])] || (i[r.util.objId(e[o])] = !0, r.languages.DFS(e[o], t, o, i)) : (i[r.util.objId(e[o])] = !0, r.languages.DFS(e[o], t, null, i)))
                                }
                            },
                            plugins: {},
                            highlightAll: function (e, t) {
                                r.highlightAllUnder(document, e, t)
                            },
                            highlightAllUnder: function (e, t, n) {
                                var i = {
                                    callback: n,
                                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                                };
                                r.hooks.run("before-highlightall", i);
                                for (var o, s = i.elements || e.querySelectorAll(i.selector), a = 0; o = s[a++];) r.highlightElement(o, !0 === t, i.callback)
                            },
                            highlightElement: function (t, i, o) {
                                for (var s, a, l = t; l && !e.test(l.className);) l = l.parentNode;
                                l && (s = (l.className.match(e) || [, ""])[1].toLowerCase(), a = r.languages[s]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s, t.parentNode && (l = t.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s));
                                var c = t.textContent,
                                    u = {
                                        element: t,
                                        language: s,
                                        grammar: a,
                                        code: c
                                    };
                                if (r.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (r.hooks.run("before-highlight", u), u.element.textContent = u.code, r.hooks.run("after-highlight", u)), void r.hooks.run("complete", u);
                                if (r.hooks.run("before-highlight", u), i && n.Worker) {
                                    var p = new Worker(r.filename);
                                    p.onmessage = function (e) {
                                        u.highlightedCode = e.data, r.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, o && o.call(u.element), r.hooks.run("after-highlight", u), r.hooks.run("complete", u)
                                    }, p.postMessage(JSON.stringify({
                                        language: u.language,
                                        code: u.code,
                                        immediateClose: !0
                                    }))
                                } else u.highlightedCode = r.highlight(u.code, u.grammar, u.language), r.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, o && o.call(t), r.hooks.run("after-highlight", u), r.hooks.run("complete", u)
                            },
                            highlight: function (e, t, n) {
                                var o = {
                                    code: e,
                                    grammar: t,
                                    language: n
                                };
                                return r.hooks.run("before-tokenize", o), o.tokens = r.tokenize(o.code, o.grammar), r.hooks.run("after-tokenize", o), i.stringify(r.util.encode(o.tokens), o.language)
                            },
                            matchGrammar: function (e, t, n, i, o, s, a) {
                                var l = r.Token;
                                for (var c in n)
                                    if (n.hasOwnProperty(c) && n[c]) {
                                        if (c == a) return;
                                        var u = n[c];
                                        u = "Array" === r.util.type(u) ? u : [u];
                                        for (var p = 0; p < u.length; ++p) {
                                            var d = u[p],
                                                h = d.inside,
                                                f = !!d.lookbehind,
                                                g = !!d.greedy,
                                                _ = 0,
                                                m = d.alias;
                                            if (g && !d.pattern.global) {
                                                var b = d.pattern.toString().match(/[imuy]*$/)[0];
                                                d.pattern = RegExp(d.pattern.source, b + "g")
                                            }
                                            d = d.pattern || d;
                                            for (var y = i, x = o; y < t.length; x += t[y].length, ++y) {
                                                var v = t[y];
                                                if (t.length > e.length) return;
                                                if (!(v instanceof l)) {
                                                    if (g && y != t.length - 1) {
                                                        d.lastIndex = x;
                                                        var k = d.exec(e);
                                                        if (!k) break;
                                                        for (var w = k.index + (f ? k[1].length : 0), E = k.index + k[0].length, S = y, C = x, O = t.length; S < O && (C < E || !t[S].type && !t[S - 1].greedy); ++S) C += t[S].length, w >= C && (++y, x = C);
                                                        if (t[y] instanceof l) continue;
                                                        P = S - y, v = e.slice(x, C), k.index -= x
                                                    } else {
                                                        d.lastIndex = 0;
                                                        var k = d.exec(v),
                                                            P = 1
                                                    }
                                                    if (k) {
                                                        f && (_ = k[1] ? k[1].length : 0);
                                                        var w = k.index + _,
                                                            k = k[0].slice(_),
                                                            E = w + k.length,
                                                            A = v.slice(0, w),
                                                            M = v.slice(E),
                                                            j = [y, P];
                                                        A && (++y, x += A.length, j.push(A));
                                                        var L = new l(c, h ? r.tokenize(k, h) : k, m, k, g);
                                                        if (j.push(L), M && j.push(M), Array.prototype.splice.apply(t, j), 1 != P && r.matchGrammar(e, t, n, y, x, !0, c), s) break
                                                    } else if (s) break
                                                }
                                            }
                                        }
                                    }
                            },
                            tokenize: function (e, t, n) {
                                var i = [e],
                                    o = t.rest;
                                if (o) {
                                    for (var s in o) t[s] = o[s];
                                    delete t.rest
                                }
                                return r.matchGrammar(e, i, t, 0, 0, !1), i
                            },
                            hooks: {
                                all: {},
                                add: function (e, t) {
                                    var n = r.hooks.all;
                                    n[e] = n[e] || [], n[e].push(t)
                                },
                                run: function (e, t) {
                                    var n = r.hooks.all[e];
                                    if (n && n.length)
                                        for (var i, o = 0; i = n[o++];) i(t)
                                }
                            }
                        },
                        i = r.Token = function (e, t, n, r, i) {
                            this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, this.greedy = !!i
                        };
                    if (i.stringify = function (e, t, n) {
                            if ("string" == typeof e) return e;
                            if ("Array" === r.util.type(e)) return e.map(function (n) {
                                return i.stringify(n, t, e)
                            }).join("");
                            var o = {
                                type: e.type,
                                content: i.stringify(e.content, t, n),
                                tag: "span",
                                classes: ["token", e.type],
                                attributes: {},
                                language: t,
                                parent: n
                            };
                            if (e.alias) {
                                var s = "Array" === r.util.type(e.alias) ? e.alias : [e.alias];
                                Array.prototype.push.apply(o.classes, s)
                            }
                            r.hooks.run("wrap", o);
                            var a = Object.keys(o.attributes).map(function (e) {
                                return e + '="' + (o.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                            }).join(" ");
                            return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (a ? " " + a : "") + ">" + o.content + "</" + o.tag + ">"
                        }, !n.document) return n.addEventListener ? (r.disableWorkerMessageHandler || n.addEventListener("message", function (e) {
                        var t = JSON.parse(e.data),
                            i = t.language,
                            o = t.code,
                            s = t.immediateClose;
                        n.postMessage(r.highlight(o, r.languages[i], i)), s && n.close()
                    }, !1), n.Prism) : n.Prism;
                    var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
                    return o && (r.filename = o.src, r.manual || o.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(r.highlightAll) : window.setTimeout(r.highlightAll, 16) : document.addEventListener("DOMContentLoaded", r.highlightAll))), n.Prism
                }();
            void 0 !== e && e.exports && (e.exports = r), void 0 !== t && (t.Prism = r), r.languages.markup = {
                    comment: /<!--[\s\S]*?-->/,
                    prolog: /<\?[\s\S]+?\?>/,
                    doctype: /<!DOCTYPE[\s\S]+?>/i,
                    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
                    tag: {
                        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
                        greedy: !0,
                        inside: {
                            tag: {
                                pattern: /^<\/?[^\s>\/]+/i,
                                inside: {
                                    punctuation: /^<\/?/,
                                    namespace: /^[^\s>\/:]+:/
                                }
                            },
                            "attr-value": {
                                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                                inside: {
                                    punctuation: [/^=/, {
                                        pattern: /(^|[^\\])["']/,
                                        lookbehind: !0
                                    }]
                                }
                            },
                            punctuation: /\/?>/,
                            "attr-name": {
                                pattern: /[^\s>\/]+/,
                                inside: {
                                    namespace: /^[^\s>\/:]+:/
                                }
                            }
                        }
                    },
                    entity: /&#?[\da-z]{1,8};/i
                }, r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity, r.hooks.add("wrap", function (e) {
                    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
                }), r.languages.xml = r.languages.markup, r.languages.html = r.languages.markup, r.languages.mathml = r.languages.markup, r.languages.svg = r.languages.markup, r.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
                        inside: {
                            rule: /@[\w-]+/
                        }
                    },
                    url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
                    selector: /[^{}\s][^{};]*?(?=\s*\{)/,
                    string: {
                        pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    },
                    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
                    important: /\B!important\b/i,
                    function: /[-a-z0-9]+(?=\()/i,
                    punctuation: /[(){};:]/
                }, r.languages.css.atrule.inside.rest = r.languages.css, r.languages.markup && (r.languages.insertBefore("markup", "tag", {
                    style: {
                        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
                        lookbehind: !0,
                        inside: r.languages.css,
                        alias: "language-css",
                        greedy: !0
                    }
                }), r.languages.insertBefore("inside", "attr-value", {
                    "style-attr": {
                        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                        inside: {
                            "attr-name": {
                                pattern: /^\s*style/i,
                                inside: r.languages.markup.tag.inside
                            },
                            punctuation: /^\s*=\s*['"]|['"]\s*$/,
                            "attr-value": {
                                pattern: /.+/i,
                                inside: r.languages.css
                            }
                        },
                        alias: "language-css"
                    }
                }, r.languages.markup.tag)), r.languages.clike = {
                    comment: [{
                        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    string: {
                        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    },
                    "class-name": {
                        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /[.\\]/
                        }
                    },
                    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                    boolean: /\b(?:true|false)\b/,
                    function: /[a-z0-9_]+(?=\()/i,
                    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
                    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
                    punctuation: /[{}[\];(),.:]/
                }, r.languages.javascript = r.languages.extend("clike", {
                    keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
                    number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
                    function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
                    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
                }), r.languages.insertBefore("javascript", "keyword", {
                    regex: {
                        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
                        lookbehind: !0,
                        greedy: !0
                    },
                    "function-variable": {
                        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
                        alias: "function"
                    },
                    constant: /\b[A-Z][A-Z\d_]*\b/
                }), r.languages.insertBefore("javascript", "string", {
                    "template-string": {
                        pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
                        greedy: !0,
                        inside: {
                            interpolation: {
                                pattern: /\${[^}]+}/,
                                inside: {
                                    "interpolation-punctuation": {
                                        pattern: /^\${|}$/,
                                        alias: "punctuation"
                                    },
                                    rest: null
                                }
                            },
                            string: /[\s\S]+/
                        }
                    }
                }), r.languages.javascript["template-string"].inside.interpolation.inside.rest = r.languages.javascript, r.languages.markup && r.languages.insertBefore("markup", "tag", {
                    script: {
                        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                        lookbehind: !0,
                        inside: r.languages.javascript,
                        alias: "language-javascript",
                        greedy: !0
                    }
                }), r.languages.js = r.languages.javascript,
                function () {
                    "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function () {
                        var e = {
                            js: "javascript",
                            py: "python",
                            rb: "ruby",
                            ps1: "powershell",
                            psm1: "powershell",
                            sh: "bash",
                            bat: "batch",
                            h: "c",
                            tex: "latex"
                        };
                        Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function (t) {
                            for (var n, i = t.getAttribute("data-src"), o = t, s = /\blang(?:uage)?-([\w-]+)\b/i; o && !s.test(o.className);) o = o.parentNode;
                            if (o && (n = (t.className.match(s) || [, ""])[1]), !n) {
                                var a = (i.match(/\.(\w+)$/) || [, ""])[1];
                                n = e[a] || a
                            }
                            var l = document.createElement("code");
                            l.className = "language-" + n, t.textContent = "", l.textContent = "Loading…", t.appendChild(l);
                            var c = new XMLHttpRequest;
                            c.open("GET", i, !0), c.onreadystatechange = function () {
                                4 == c.readyState && (c.status < 400 && c.responseText ? (l.textContent = c.responseText, r.highlightElement(l)) : c.status >= 400 ? l.textContent = "✖ Error " + c.status + " while fetching file: " + c.statusText : l.textContent = "✖ Error: File does not exist or is empty")
                            }, c.send(null)
                        }), r.plugins.toolbar && r.plugins.toolbar.registerButton("download-file", function (e) {
                            var t = e.element.parentNode;
                            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-src") && t.hasAttribute("data-download-link")) {
                                var n = t.getAttribute("data-src"),
                                    r = document.createElement("a");
                                return r.textContent = t.getAttribute("data-download-link-label") || "Download", r.setAttribute("download", ""), r.href = n, r
                            }
                        })
                    }, document.addEventListener("DOMContentLoaded", self.Prism.fileHighlight))
                }()
        }).call(t, n(26))
    }, function (e, t, n) {
        function r(e) {
            n(69)
        }
        var i = n(67)(n(28), n(68), r, null, null);
        e.exports = i.exports
    }, function (e, t) {
        e.exports = function (e, t, n, r, i) {
            var o, s = e = e || {},
                a = typeof e.default;
            "object" !== a && "function" !== a || (o = e, s = e.default);
            var l = "function" == typeof s ? s.options : s;
            t && (l.render = t.render, l.staticRenderFns = t.staticRenderFns), r && (l._scopeId = r);
            var c;
            if (i ? (c = function (e) {
                    e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
                }, l._ssrRegister = c) : n && (c = n), c) {
                var u = l.functional,
                    p = u ? l.render : l.beforeCreate;
                u ? l.render = function (e, t) {
                    return c.call(t), p(e, t)
                } : l.beforeCreate = p ? [].concat(p, c) : [c]
            }
            return {
                esModule: o,
                exports: s,
                options: l
            }
        }
    }, function (e, t) {
        e.exports = {
            render: function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "demo-block",
                    class: {
                        hover: e.hovering
                    },
                    on: {
                        mouseenter: function (t) {
                            e.hovering = !0
                        },
                        mouseleave: function (t) {
                            e.hovering = !1
                        }
                    }
                }, [e._t("source"), e._v(" "), n("div", {
                    ref: "meta",
                    staticClass: "meta"
                }, [n("div", {
                    staticClass: "description"
                }, [n("div", {
                    domProps: {
                        innerHTML: e._s(e.desc)
                    }
                }), e._v(" "), n("button", {
                    staticClass: "go",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: e.goJsfiddle
                    }
                }, [e._v("Try in Jsfiddle!")])]), e._v(" "), n("div", {
                    staticClass: "highlight",
                    domProps: {
                        innerHTML: e._s(e.codePrismed)
                    }
                })]), e._v(" "), n("div", {
                    ref: "control",
                    staticClass: "demo-block-control",
                    class: {
                        "is-fixed": e.fixedControl
                    },
                    on: {
                        click: function (t) {
                            e.isExpanded = !e.isExpanded
                        }
                    }
                }, [n("transition", {
                    attrs: {
                        name: "arrow-slide"
                    }
                }), e._v(" "), n("transition", {
                    attrs: {
                        name: "text-slide"
                    }
                }, [n("span", [e._v(e._s(e.controlText))])])], 1)], 2)
            },
            staticRenderFns: []
        }
    }, function (e, t, n) {
        var r = n(62);
        "string" == typeof r && (r = [
            [e.i, r, ""]
        ]), r.locals && (e.exports = r.locals);
        n(70)("57087a60", r, !0, {})
    }, function (e, t, n) {
        function r(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t],
                    r = u[n.id];
                if (r) {
                    r.refs++;
                    for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
                    for (; i < n.parts.length; i++) r.parts.push(o(n.parts[i]));
                    r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                } else {
                    for (var s = [], i = 0; i < n.parts.length; i++) s.push(o(n.parts[i]));
                    u[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }

        function i() {
            var e = document.createElement("style");
            return e.type = "text/css", p.appendChild(e), e
        }

        function o(e) {
            var t, n, r = document.querySelector("style[" + m + '~="' + e.id + '"]');
            if (r) {
                if (f) return g;
                r.parentNode.removeChild(r)
            }
            if (b) {
                var o = h++;
                r = d || (d = i()), t = s.bind(null, r, o, !1), n = s.bind(null, r, o, !0)
            } else r = i(), t = a.bind(null, r), n = function () {
                r.parentNode.removeChild(r)
            };
            return t(e),
                function (r) {
                    if (r) {
                        if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                        t(e = r)
                    } else n()
                }
        }

        function s(e, t, n, r) {
            var i = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, i);
            else {
                var o = document.createTextNode(i),
                    s = e.childNodes;
                s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o)
            }
        }

        function a(e, t) {
            var n = t.css,
                r = t.media,
                i = t.sourceMap;
            if (r && e.setAttribute("media", r), _.ssrId && e.setAttribute(m, t.id), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        var l = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !l) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var c = n(71),
            u = {},
            p = l && (document.head || document.getElementsByTagName("head")[0]),
            d = null,
            h = 0,
            f = !1,
            g = function () {},
            _ = null,
            m = "data-vue-ssr-id",
            b = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        e.exports = function (e, t, n, i) {
            f = n, _ = i || {};
            var o = c(e, t);
            return r(o),
                function (t) {
                    for (var n = [], i = 0; i < o.length; i++) {
                        var s = o[i],
                            a = u[s.id];
                        a.refs--, n.push(a)
                    }
                    t ? (o = c(e, t), r(o)) : o = [];
                    for (var i = 0; i < n.length; i++) {
                        var a = n[i];
                        if (0 === a.refs) {
                            for (var l = 0; l < a.parts.length; l++) a.parts[l]();
                            delete u[a.id]
                        }
                    }
                }
        };
        var y = function () {
            var e = [];
            return function (t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }, function (e, t) {
        e.exports = function (e, t) {
            for (var n = [], r = {}, i = 0; i < t.length; i++) {
                var o = t[i],
                    s = o[0],
                    a = o[1],
                    l = o[2],
                    c = o[3],
                    u = {
                        id: e + ":" + i,
                        css: a,
                        media: l,
                        sourceMap: c
                    };
                r[s] ? r[s].parts.push(u) : n.push(r[s] = {
                    id: s,
                    parts: [u]
                })
            }
            return n
        }
    }])
});
//# sourceMappingURL=docsify-demo-box-vue.min.js.map