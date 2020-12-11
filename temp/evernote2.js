! function (e) {
    function t(t) {
        for (var r, a, s = t[0], c = t[1], u = t[2], f = 0, h = []; f < s.length; f++) a = s[f], Object.prototype.hasOwnProperty.call(o, a) && o[a] && h.push(o[a][0]), o[a] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (l && l(t); h.length;) h.shift()();
        return i.push.apply(i, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], r = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== o[c] && (r = !1)
            }
            r && (i.splice(t--, 1), e = a(a.s = n[0]))
        }
        return e
    }
    var r = {},
        o = {
            17: 0
        },
        i = [];

    function a(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.e = function (e) {
        var t = [],
            n = o[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var r = new Promise((function (t, r) {
                    n = o[e] = [t, r]
                }));
                t.push(n[2] = r);
                var i, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.src = function (e) {
                    return a.p + "" + ({
                        3: "ar",
                        4: "cs",
                        5: "da",
                        6: "de",
                        7: "en",
                        8: "en_XA",
                        9: "es",
                        10: "fi",
                        11: "fr",
                        12: "id",
                        13: "it",
                        14: "ja",
                        15: "keys",
                        16: "ko",
                        18: "ms",
                        19: "nl",
                        20: "no",
                        21: "pl",
                        22: "pt",
                        23: "pt_BR",
                        24: "ru",
                        25: "sv",
                        26: "th",
                        27: "tr",
                        29: "vi",
                        30: "zh_CN",
                        31: "zh_CN_yxbj",
                        32: "zh_TW"
                    } [e] || e) + "." + {
                        0: "b9501c8258a40b4ab6fb",
                        1: "42954308e606ad827ca4",
                        2: "dd40d8c2a62705d4ad77",
                        3: "80964e67abcea30da031",
                        4: "1de5e64b4246afc82c0e",
                        5: "7b550127060cab6c5472",
                        6: "9a78d3254325bda53fef",
                        7: "aae5bca41a5740b45f2a",
                        8: "ef22cbaad153559d3cb2",
                        9: "08f3db1316aa4d2a52b5",
                        10: "e969f477cea0ff289cb3",
                        11: "7a6d8191ab848f492cb9",
                        12: "0e4ef7cff0fcfc1b2159",
                        13: "128a231c3dd16da96fe5",
                        14: "31643f23b882f94a6372",
                        15: "5c387c34c6f73d61c94c",
                        16: "f5b15fd76cf77a389889",
                        18: "4b9f327a1a5c069437e6",
                        19: "e9cf98510ce061a94e88",
                        20: "1548b8ceb93a6dd744c1",
                        21: "bc50ca821ed1c6429906",
                        22: "06e82dba660f5ec3522a",
                        23: "ccad60e708b4e0ebf1a0",
                        24: "52da3ec064fc9e6a48d4",
                        25: "0f606389f373df6a35dd",
                        26: "af7679852d2de5a5e6d6",
                        27: "756a0a31ab06eec33dc3",
                        29: "fee8779e0daeb64ad716",
                        30: "f9f5f2e14e64ae7bb10e",
                        31: "d9987829422fa8dd7013",
                        32: "df25c0ec86bfeb6757f8",
                        33: "65de112fc95a8d926253",
                        34: "1457a6c3a5477c3cfe7b",
                        35: "d2f7e5875fecfaae7374",
                        36: "eaf70a2e01a636a09f2b",
                        37: "70ca1df393e4a1fe5828",
                        38: "29969ab3efdbf8989d00",
                        39: "c1aa4850c66412bf644a",
                        40: "1aa14a3de43a9223c7d2",
                        41: "090a13ef2004d9d46545",
                        42: "cbc6f125bb69d0885bdf",
                        43: "e8153415e426403a8616",
                        44: "b09637f260db55a2b3c7",
                        45: "ee703fb0011d432c4b3e",
                        46: "c418762748e7aea9ed3d",
                        47: "c8d53c5464cbbda0d309",
                        48: "be0f374fe8782f5a0177",
                        49: "a44f5e4030b8c8b1f60f",
                        50: "c8ea747591dcdd75dfe0",
                        51: "5574a64000d842e8ba1d",
                        52: "850e47cf8f352fd82c0d",
                        53: "e3146887046f65a54a4a",
                        54: "3f7c09d7ac9d383280f5",
                        55: "c9255337ebfecf987528",
                        56: "e9503830ad8d2d27bed9",
                        57: "483b4d6d2ec4d6546e77",
                        58: "155b1898036d9f6ac4a6",
                        59: "4d60795f8e573fea63bb",
                        60: "d603c4e04c2753740bcb",
                        61: "1758bbe1409d50d9434b",
                        62: "374206477014b038a9db",
                        63: "8ec84f8c3433576f78df",
                        64: "b3c9e97d32173b27634b",
                        65: "96b3f67d47317a202644",
                        66: "1e20210313e2d1b9a317",
                        67: "f28ce27d08370859aa5b",
                        68: "56e6bb733ac69ce11d21",
                        69: "7c933d471e009f590d15",
                        70: "3d773c65e3a6529e68c8"
                    } [e] + ".js"
                }(e);
                var c = new Error;
                i = function (t) {
                    s.onerror = s.onload = null, clearTimeout(u);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + r + ": " + i + ")", c.name = "ChunkLoadError", c.type = r, c.request = i, n[1](c)
                        }
                        o[e] = void 0
                    }
                };
                var u = setTimeout((function () {
                    i({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = i, document.head.appendChild(s)
            } return Promise.all(t)
    }, a.m = e, a.c = r, a.d = function (e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) a.d(n, r, function (t) {
                return e[t]
            }.bind(null, r));
        return n
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "https://cdn1.evernote.com/ion/dist/main/", a.oe = function (e) {
        throw console.error(e), e
    };
    var s = window.webpackJsonp = window.webpackJsonp || [],
        c = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var u = 0; u < s.length; u++) t(s[u]);
    var l = c;
    i.push([610, 28]), n()
}({
    122: function (e, t, n) {
        "use strict";
        var r = n(19),
            o = n(187);

        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach((function (t) {
                    s(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function c(e, t) {
            if (null == e) return {};
            var n, r, o = function (e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }

        function u(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function f(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function d(e, t) {
            return (d = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function p(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = v(e);
                if (t) {
                    var o = v(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return _(this, n)
            }
        }

        function _(e, t) {
            return !t || "object" !== l(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function v(e) {
            return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var b = Object(r.default)("ion:config:BaseEmbedLoader"),
            g = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(_, e);
                var t, n, r, o, i, s = p(_);

                function _() {
                    return f(this, _), s.apply(this, arguments)
                }
                return t = _, (n = [{
                    key: "getEmbeddedJson",
                    value: function () {
                        var e;
                        if ("object" === ("undefined" == typeof window ? "undefined" : l(window)) && "object" === l(window.__ionOpts)) e = window.__ionOpts, b.info("BaseEmbedLoader._values = ".concat(JSON.stringify(e, null, 2)));
                        else if ("object" === ("undefined" == typeof document ? "undefined" : l(document))) {
                            var t = document.getElementById("baseEmbed");
                            if (t && t.innerText) try {
                                e = JSON.parse(t.innerText)
                            } catch (e) {
                                return null
                            }
                        }
                        return e
                    }
                }, {
                    key: "init",
                    value: (o = regeneratorRuntime.mark((function e() {
                        var t, n, r;
                        return regeneratorRuntime.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    null == this._values && (this._values = this.getEmbeddedJson() || {}, "object" === l(this._values.STATIC_CONFIGS) && (t = this._values, n = t.STATIC_CONFIGS, r = c(t, ["STATIC_CONFIGS"]), this._values = a({}, n, {}, r)));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function () {
                        var e = this,
                            t = arguments;
                        return new Promise((function (n, r) {
                            var i = o.apply(e, t);

                            function a(e) {
                                u(i, n, r, a, s, "next", e)
                            }

                            function s(e) {
                                u(i, n, r, a, s, "throw", e)
                            }
                            a(void 0)
                        }))
                    }, function () {
                        return i.apply(this, arguments)
                    })
                }]) && h(t.prototype, n), r && h(t, r), _
            }(o.a);
        t.a = new g
    },
    168: function (e, t, n) {
        "use strict";
        n.r(t),
            function (e) {
                var r = n(258),
                    o = n.n(r),
                    i = n(9);
                var a = function () {
                        switch (e.platform) {
                            case "darwin":
                                return "mac";
                            case "win32":
                                return "win";
                            case "linux":
                                return "linux";
                            case "aix":
                            case "freebsd":
                            case "openbsd":
                            case "netbsd":
                            case "sunos":
                            case "android":
                            case "cygwin":
                                throw new Error("Unsupported platform: ".concat(e.platform));
                            default:
                                throw Object(i.absurd)(e.platform, "getPlatformName")
                        }
                    }(),
                    s = {
                        platformName: a,
                        isPackaged: !o.a,
                        isMac: "mac" === a,
                        isWin: "win" === a,
                        isLinux: "linux" === a,
                        isNode: !0
                    };
                t.default = s
            }.call(this, n(87))
    },
    173: function (e, t, n) {
        "use strict";
        n.d(t, "e", (function () {
            return c
        })), n.d(t, "d", (function () {
            return u
        })), n.d(t, "f", (function () {
            return l
        })), n.d(t, "a", (function () {
            return f
        })), n.d(t, "b", (function () {
            return d
        })), n.d(t, "c", (function () {
            return p
        }));
        var r = n(68),
            o = n.n(r);

        function i(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function a(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (r, o) {
                    var a = e.apply(t, n);

                    function s(e) {
                        i(a, r, o, s, c, "next", e)
                    }

                    function c(e) {
                        i(a, r, o, s, c, "throw", e)
                    }
                    s(void 0)
                }))
            }
        }
        var s = {
            CHROME: {
                name: "Chrome",
                majorVersion: null
            },
            FIREFOX: {
                name: "Firefox",
                majorVersion: null
            },
            SAFARI: {
                name: "Safari",
                majorVersion: 11
            },
            OPERA: {
                name: "Opera",
                majorVersion: null
            },
            ELECTRON: {
                name: "Electron",
                majorVersion: null
            }
        };

        function c() {
            return function (e) {
                try {
                    var t = o.a.name,
                        n = o.a.version;
                    if (null == t || null == n) return !1;
                    var r = Object.values(e).find((function (e) {
                        return e.name === t
                    }));
                    if (null == r) return !1;
                    var i = r.majorVersion;
                    if (null == i) return !0;
                    var a = parseInt(n.split(".")[0], 10);
                    return "number" == typeof a && a >= i
                } catch (e) {
                    return !1
                }
            }(s)
        }

        function u() {
            return (o.a.name || "") === s.FIREFOX.name
        }

        function l() {
            return (o.a.name || "") === s.SAFARI.name
        }

        function f() {
            return h.apply(this, arguments)
        }

        function h() {
            return (h = a(regeneratorRuntime.mark((function e() {
                var t;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, t = globalThis.indexedDB.open("en-test"), e.abrupt("return", new Promise((function (e) {
                                t.onsuccess = function () {
                                    return e(!0)
                                }, t.onerror = function () {
                                    return e(!1)
                                }
                            })));
                        case 5:
                            return e.prev = 5, e.t0 = e.catch(0), e.abrupt("return", Promise.resolve(!1));
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 5]
                ])
            })))).apply(this, arguments)
        }
        var d = Boolean(!1),
            p = "beta" === Object({
                BRANCH_NAME: void 0,
                NODE_ENV: "production",
                COMMIT_SHA: "d5c232a71f",
                BORON: !1,
                BUILD_NUMBER: "221",
                SERVICE_ID: "ion",
                BUILD_MAS: !1,
                DEFAULT_UPDATE_CHANNEL: "public",
                CE_VERSION: "113.0.14585",
                disableServiceWorker: !0
            }).BORON_ENV
    },
    174: function (e, t, n) {
        "use strict";
        var r = n(45);

        function o(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var a = new(function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n, a, s, c;
            return t = e, (n = [{
                key: "subscribe",
                value: function (e, t, n) {
                    return Object(r.b)().broker.subscribe(e, t, n)
                }
            }, {
                key: "publish",
                value: function (e, t, n, o) {
                    Object(r.b)().broker.publish(e, t, n, o)
                }
            }, {
                key: "register",
                value: function (e, t) {
                    return Object(r.b)().broker.register(e, t)
                }
            }, {
                key: "call",
                value: (s = regeneratorRuntime.mark((function e(t, n) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Object(r.b)().broker.call(t, n));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })), c = function () {
                    var e = this,
                        t = arguments;
                    return new Promise((function (n, r) {
                        var i = s.apply(e, t);

                        function a(e) {
                            o(i, n, r, a, c, "next", e)
                        }

                        function c(e) {
                            o(i, n, r, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }, function (e, t) {
                    return c.apply(this, arguments)
                })
            }, {
                key: "clearTopics",
                value: function (e) {
                    return Object(r.b)().broker.clearTopics(e)
                }
            }]) && i(t.prototype, n), a && i(t, a), e
        }());
        t.a = a
    },
    176: function (e, t, n) {
        "use strict";
        var r;
        n.r(t), n.d(t, "FlowPromotions", (function () {
                return r
            })), n.d(t, "FlePromotions", (function () {
                return o
            })), n.d(t, "BoronFlePromotions", (function () {
                return i
            })),
            function (e) {
                e.CREATE_NOTE_CHECKLIST = "create_note_checklist", e.EXPLORE_TEMPLATES_CHECKLIST = "explore_templates_checklist", e.ADD_ATTACHMENTS_CHECKLIST = "add_attachments_checklist", e.INSTALL_WEBCLIPPER_CHECKLIST = "install_web_clipper_checklist", e.SYNC_DEVICES_CHECKLIST = "sync_devices_checklist", e.HIGHLIGHT_CHECKLIST_MENU = "highlight_checklist_menu", e.ADD_ATTACHMENTS_PERSONALIZATION_CHECKLIST = "add_attachments_p_checklist", e.EXPLORE_EDITOR_CHECKLIST = "explore_editor_checklist", e.ORGANIZE_NOTES_CHECKLIST = "organize_notes_checklist", e.SHARE_CHECKLIST = "share_checklist", e.SEND_ME_A_LINK_CHECKLIST = "send_me_a_link_checklist", e.DOWNLOAD_DESKTOP_CHECKLIST = "download_desktop_checklist", e.DOWNLOAD_DESKTOP_CHECKLIST_FLOW = "download_desktop_checklist_flow", e.USE_TABLES_CHECKLIST = "use_tables_checklist", e.SHORTCUT_CHECKLIST = "shortcut_checklist", e.BOB_MIGRATION_USER = "bob_Migration_User", e.FIRST_LAUNCH_EXISTING_USER = "onboarding_Ion_FLE", e.FIRST_LAUNCH_EXISTING_PERSONAL_USER = "onboarding_Ion_Personal_FLE", e.FIRST_LAUNCH_NEW_PERSONAL_USER = "onboarding_Ion_NewPersonal_FLE", e.FIRST_LAUNCH_WITH_TRIAL_NEW_PERSONAL_USER = "ion7808_FT_Ion_NewPersonal_FLE", e.FIRST_LAUNCH_NEW_ADMIN_FIRST_MODAL_ION7237 = "ion7237_FLE_NewAdmin_FirstModal", e.FIRST_LAUNCH_NEW_ADMIN_ION7237 = "ion7237_FLE_NewAdmin", e.FIRST_LAUNCH_EXISTING_BORON_USER = "onboarding_existing_boron_obe", e.CELEBRATORY_MODAL = "celebratory_modal", e.DEVICE_LIMIT_UPSELL_MODAL = "device_limit_upsell_modal", e.HOME_FLE = "Home_FLE", e.FIRST_LAUNCH_NEW_ADMIN_FIRST_MODAL = "spacy248_FLE_NewAdmin_FirstModal", e.FIRST_LAUNCH_NEW_ADMIN = "spacy248_FLE_NewAdmin", e.FIRST_LAUNCH_NEW_USER = "spacy249_FLE_NewUser", e.CREATED_SPACE = "onboarding_Ion_CreatedSpace", e.INVITED_TO_SPACE = "onboarding_Ion_InviteToSpace", e.WAS_EMPTY_SPACE = "spacy256_wasEmptySpace", e.SPACE_DIRECTORY_FLE = "onboarding_Ion_SpaceDirectoryFLE", e.DOWNLOAD_EVERNOTE = "ion4983_DownloadEvernote", e.FREE_TRIAL_WITH_DOWNLOAD_EVERNOTE = "ion7808_FT_DownloadEvernote", e.FREE_TRIAL = "ion7808_newUserFreeTrialFlow", e.NEW_FEATURE_COLLAPSIBLE_NAV = "newFeature_Ion_collapsible_nav", e.NEW_FEATURE_STACKS = "newFeature_Ion_stacks", e.PESO_INSERT_MENU_EDUCATION = "peso3134_Peso_insert_menu_edu", e.PESO_INSERT_MENU_MOVED = "peso4888_Peso_insert_moved", e.LIMITED_DOWNSYNC_IN_PROGRESS = "limited_downsync_in_progress", e.ION_MIGRATION_FIRST_TIMER_MODAL = "ion_migration_first_timer_modal", e.ION_PREFERENCES_TOOLTIP = "ion_preferences_tooltip", e.ION_PREFERENCES_BADGE = "ion_preferences_badge", e.LISTS_UPSELL = "lists_tooltip", e.PESO_BETA = "peso545_Peso_Beta", e.ATTACHMENT_NUMBER = "attachment_number_ion", e.TSD_SHARED = "tierdisplay_shared", e.TSD_WEB = "tierdisplay_web", e.BORON_EXISTING_USER = "boronExistingUser", e.BORON_DOC_SEARCH_PAYWALL_SHOWN = "boronDocSearchPaywallShown", e.START_SKETCHING = "startSketchingShown", e.START_ANNOTATIONS = "startAnnotationsShown", e.ALL_NOTES_NOTE_LIST_FILTERS = "allNotesNotelistFilters", e.SEARCH_NOTE_LIST_FILTERS = "searchNotelistFilters", e.FILTERED_NOTE_LIST_FILTERS = "filteredNotelistFilters", e.NOTEBOOK_NOTE_LIST_FILTERS = "notebookNotelistFilters", e.BACKGROUND_SYNC_CHECKLIST = "background_sync_checklist", e.REMINDERS_TAGS_CHECKLIST = "reminders_tags_checklist", e.YOUR_EDITOR_CHECKLIST = "your_editor_checklist", e.CREATE_A_NOTE_CHECKLIST = "create_a_note_checklist", e.SEARCH_CHECKLIST = "search_checklist", e.LOCAL_NOTEBOOKS_FOUND_MODAL = "local_notebooks_found_modal"
            }(r || (r = {}));
        var o = [r.FIRST_LAUNCH_EXISTING_USER, r.FIRST_LAUNCH_EXISTING_PERSONAL_USER, r.FIRST_LAUNCH_NEW_PERSONAL_USER, r.FIRST_LAUNCH_WITH_TRIAL_NEW_PERSONAL_USER, r.FIRST_LAUNCH_NEW_ADMIN_ION7237, r.FIRST_LAUNCH_EXISTING_BORON_USER, r.FIRST_LAUNCH_NEW_ADMIN, r.FIRST_LAUNCH_NEW_USER],
            i = [r.HIGHLIGHT_CHECKLIST_MENU, r.CREATE_A_NOTE_CHECKLIST, r.BACKGROUND_SYNC_CHECKLIST, r.REMINDERS_TAGS_CHECKLIST, r.YOUR_EDITOR_CHECKLIST, r.SEARCH_CHECKLIST]
    },
    177: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "customerJourneyPromotions", (function () {
            return i
        })), n.d(t, "personalizationPromtoions", (function () {
            return a
        })), n.d(t, "Surveys", (function () {
            return f
        })), n.d(t, "PROMOTION_IDS", (function () {
            return m
        })), n.d(t, "promotionCheck", (function () {
            return y
        }));
        var r, o, i, a, s, c, u, l, f, h, d, p, _, v = n(176);

        function b(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function g(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }! function (e) {
            e.CAN_SHOW_CHECKLIST = "AllNotes_Checklist_CanShow", e.CLOSE_CHECKLIST = "AllNotes_Checklist_Close", e.OPENED_CHECKLIST = "AllNotes_Checklist_Opened", e.FIRST_NOTE_MODAL = "AllNotes_Checklist_FirstModal"
        }(r || (r = {})),
        function (e) {
            e.DOC_SEARCH_UPSELLS_NEW_USER = "ion8777_DocSearchUpsellsNewUser"
        }(o || (o = {})),
        function (e) {
            e.INSTALL_WEB_CLIPPER_MODAL = "journey_Ion_InstallWebClipper"
        }(i || (i = {})),
        function (e) {
            e.WORK_FLOW = "personalization_work_flow", e.SCHOOL_FLOW = "personalization_school_flow", e.PERSONAL_FLOW = "personalization_personal_flow", e.MEETING_USE_CASE = "personalization_meeting_use", e.PROJECT_USE_CASE = "personalization_project_use", e.TODO_USE_CASE = "personalization_todo_use", e.CLASS_NOTES_USE_CASE = "personalization_class_use", e.RESEARCH_USE_CASE = "personal_research_use", e.TIME_MANAGEMENT_USE_CASE = "personalization_time_use", e.WRITING_USE_CASE = "personalization_writing_use", e.PLANNING_USE_CASE = "personalization_plan_use", e.ORGANIZING_USE_CASE = "personalization_org_use"
        }(a || (a = {})),
        function (e) {
            e.QUOTA_SPEED_BUMP_95_CLOSED = "quota_speed_bump_95_closed", e.QUOTA_SPEED_BUMP_75_CLOSED = "quota_speed_bump_75_closed", e.QUOTA_SPEED_BUMP_50_CLOSED = "quota_speed_bump_50_closed"
        }(s || (s = {})),
        function (e) {
            e.OBE_FREE_TRIAL_BANNER = "ion13457_newUserFreeTrialBanner", e.FIVE_NOTES_FREE_TRIAL_BANNER = "ion13457_fiveNotesFTBanner", e.EIGHT_NOTES_FREE_TRIAL_BANNER = "ion13457_eightNotesFTBanner", e.OBE_FREE_TRIAL_MODAL = "newUserFreeTrialModal", e.NEW_USER_FREE_TRIAL_BANNER = "ion7808_newUserFreeTrialBanner", e.NEW_USER_FREE_TRIAL_MODAL = "ion7808_newUserFreeTrialModal"
        }(c || (c = {})),
        function (e) {
            e.DEVICE_LIMIT_MODAL_DISMISSED = "device_limit_modal_dismissed"
        }(u || (u = {})),
        function (e) {
            e.HOME_TESTDRIVE = "Home_TestDrive"
        }(l || (l = {})),
        function (e) {
            e.QUALTRICS_INITIAL_SURVEY = "qualtrics_survey_15days", e.QUALTRICS_NINETY_DAYS_SURVEY = "qualtrics_survey_90days", e.QUALTRICS_RECURRING_SURVEY = "qualtrics_survey_recurring"
        }(f || (f = {})),
        function (e) {
            e.PESO_BETA_SWITCH_INTERCEPT = "peso545_Peso_switch_intercept"
        }(h || (h = {})),
        function (e) {
            e.DOCUMENT_SEARCH_ANY = "document_search_any", e.DOCUMENT_SEARCH_CHOICE = "document_search_choice_ion", e.DOCUMENT_SEARCH_BANNER = "document_search_banner", e.DOCUMENT_SEARCH_UPSELL_SEARCH_V4 = "doc_search_upsell_search_v4"
        }(d || (d = {})),
        function (e) {
            e.SESSION_COUNT = "ion7808_sessionCount"
        }(p || (p = {})),
        function (e) {
            e.ADAPTIVE_NOTE_EDIT = "adaptiveNoteEdit"
        }(_ || (_ = {}));
        var m = function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(n), !0).forEach((function (t) {
                    g(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }({}, h, {}, d, {}, p, {}, _, {}, r, {}, o, {}, i, {}, a, {}, s, {}, c, {}, u, {}, l, {}, v.FlowPromotions);

        function y(e) {
            for (var t = new Set, n = 0, r = Object.values(e); n < r.length; n++) {
                var o = r[n];
                if (o.length > 32) throw Error('promotionId "'.concat(o, '" is too long. Character limit is 32.'));
                if (t.has(o)) throw Error("promotionId ".concat(o, " is duplicated. Use unique promotionIds"));
                t.add(o)
            }
        }
        y(m)
    },
    179: function (e, t, n) {
        "use strict";
        var r = n(19),
            o = n(51);

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var a = Object(r.default)("client:utils:TimestampPrinter"),
            s = function () {
                function e() {
                    var t = this;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.timestampGenerator = {
                        now: function () {
                            return 0
                        }
                    }, this.createdNote = null, this.selectedNote = null, this.startCreatingNoteTime = null, this.startSelectingNoteTime = null, this.userAuthenticatedTime = null, this.notesCount = null, this.handleVisibilityChange = function () {
                        document.hidden && (t.startCreatingNoteTime = null, t.startSelectingNoteTime = null, t.createdNote = null, t.selectedNote = null)
                    }, document.addEventListener("visibilitychange", this.handleVisibilityChange)
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "setTimestampGenerator",
                    value: function (e) {
                        "now" in e ? this.timestampGenerator = e : a.error('invalid timestamp generator! It has no "now" function')
                    }
                }, {
                    key: "startSelectingNote",
                    value: function (e) {
                        this.selectedNote = e;
                        var t = this.timestampGenerator.now();
                        return this.startSelectingNoteTime = t, a.automation("select_note_started: ".concat(t)), t
                    }
                }, {
                    key: "endRenderingNote",
                    value: function (e, t) {
                        var n = this.timestampGenerator.now();
                        return null != this.startCreatingNoteTime && e === this.createdNote ? (Object(o.b)("createNote", n - this.startCreatingNoteTime, this.notesCount), this.startCreatingNoteTime = null, this.createdNote = null) : null != this.startSelectingNoteTime && e === this.selectedNote && (t > 1e7 ? Object(o.b)("large_note_load_time", n - this.startSelectingNoteTime, this.notesCount) : t > 5e6 ? Object(o.b)("medium_note_load_time", n - this.startSelectingNoteTime, this.notesCount) : Object(o.b)("small_note_load_time", n - this.startSelectingNoteTime, this.notesCount), this.startSelectingNoteTime = null, this.selectedNote = null), a.automation("rendering_note_ended: ".concat(n)), n
                    }
                }, {
                    key: "startCreatingNote",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return this.startCreatingNoteTime = e, a.automation("create_note_started: ".concat(e)), e
                    }
                }, {
                    key: "endCreatingNote",
                    value: function (e) {
                        null != this.startCreatingNoteTime && (this.createdNote = e);
                        var t = this.timestampGenerator.now();
                        return a.automation("create_note_ended: ".concat(t)), t
                    }
                }, {
                    key: "markCreatingNoteFailure",
                    value: function () {
                        a.automation("create_note_ended: -1")
                    }
                }, {
                    key: "startAddingAttachments",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("add_attachment_started: ".concat(e))
                    }
                }, {
                    key: "endAddingAttachments",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("add_attachment_ended: ".concat(e))
                    }
                }, {
                    key: "markAddingAttachmentsFailure",
                    value: function () {
                        a.automation("add_attachment_ended: -1")
                    }
                }, {
                    key: "startSearchingNotes",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("search_note_started: ".concat(e)), e
                    }
                }, {
                    key: "endSearchingNotes",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("search_note_ended: ".concat(e)), e
                    }
                }, {
                    key: "startDeletingNote",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("delete_note_started: ".concat(e))
                    }
                }, {
                    key: "endDeletingNote",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("delete_note_ended: ".concat(e))
                    }
                }, {
                    key: "markDeletingNoteFailure",
                    value: function () {
                        a.automation("delete_note_ended: -1")
                    }
                }, {
                    key: "startExpungeNote",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("expunge_note_started: ".concat(e))
                    }
                }, {
                    key: "endExpungeNote",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("expunge_note_ended: ".concat(e))
                    }
                }, {
                    key: "markExpungeNoteFailure",
                    value: function () {
                        a.automation("expunge_note_ended: -1")
                    }
                }, {
                    key: "startDeletingNotebook",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("delete_notebook_started: ".concat(e))
                    }
                }, {
                    key: "endDeletingNotebook",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("delete_notebook_ended: ".concat(e))
                    }
                }, {
                    key: "markDeletingNotebookFailure",
                    value: function () {
                        a.automation("delete_notebook_ended: -1")
                    }
                }, {
                    key: "startRenderingIon",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("rendering_ion_started: ".concat(e)), e
                    }
                }, {
                    key: "endRenderingIon",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("rendering_ion_ended: ".concat(e))
                    }
                }, {
                    key: "startRenderingNoteListView",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("navigate_to_notelist_view_started: ".concat(e)), e
                    }
                }, {
                    key: "endRenderingNoteListView",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("navigate_to_notelist_view_ended: ".concat(e)), e
                    }
                }, {
                    key: "startGoingToAllNotebooks",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("navigate_to_notebook_kingdom_started: ".concat(e))
                    }
                }, {
                    key: "endGoingToAllNotebooks",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("navigate_to_notebook_kingdom_ended: ".concat(e))
                    }
                }, {
                    key: "startSharingNote",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("share_note_started: ".concat(e))
                    }
                }, {
                    key: "endSharingNote",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        a.automation("share_note_ended: ".concat(e))
                    }
                }, {
                    key: "markSharingNoteFailure",
                    value: function () {
                        a.automation("share_note_ended: -1")
                    }
                }, {
                    key: "startMovingNotebooktoBusiness",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("moving_notebook_to_business_start: ".concat(e)), e
                    }
                }, {
                    key: "endMovingNotebooktoBusiness",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("moving_notebook_to_business_end: ".concat(e)), e
                    }
                }, {
                    key: "startShowingFirstNote",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("start_showing_first_note: ".concat(e)), e
                    }
                }, {
                    key: "endRenderingFirstNote",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("end_rendering_first_note: ".concat(e)), e
                    }
                }, {
                    key: "startRenderingNoteInAllNotesView",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("start_rendering_all_notes_view: ".concat(e)), e
                    }
                }, {
                    key: "endRenderingNoteInAllNotesView",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("end_rendering_note_in_all_notes_view: ".concat(e)), e
                    }
                }, {
                    key: "beginRenderingAllNotebooks",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("start_rendering_all_notebooks_view: ".concat(e)), e
                    }
                }, {
                    key: "endRenderingAllNotebooks",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("end_rendering_all_notebooks_view: ".concat(e)), e
                    }
                }, {
                    key: "beginRenderingSharedWithMe",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("start_rendering_shared_with_me: ".concat(e)), e
                    }
                }, {
                    key: "endRenderingSharedWithMe",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("end_rendering_shared_with_me: ".concat(e)), e
                    }
                }, {
                    key: "startRenderingTagDuchy",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("start_rendering_tag_duchy: ".concat(e)), e
                    }
                }, {
                    key: "endRenderingTagDuchy",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("end_rendering_tag_duchy: ".concat(e)), e
                    }
                }, {
                    key: "startFocusOnSearchView",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("start_focus_search_view: ".concat(e)), e
                    }
                }, {
                    key: "endFocusOnSearchView",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("end_focus_search_view: ".concat(e)), e
                    }
                }, {
                    key: "startUpdatingNoteToService",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("start_update_note_to_service: ".concat(e)), e
                    }
                }, {
                    key: "endUpdatingNoteToService",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("end_update_note_to_service: ".concat(e)), e
                    }
                }, {
                    key: "setNotesCount",
                    value: function (e) {
                        this.notesCount = e
                    }
                }, {
                    key: "startDownSync",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("start_down_sync: ".concat(e)), e
                    }
                }, {
                    key: "endDownSync",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return a.automation("end_down_sync: ".concat(e)), e
                    }
                }, {
                    key: "markUserAuthenticated",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return this.userAuthenticatedTime = e, a.automation("user_authenticated: ".concat(e)), e
                    }
                }, {
                    key: "endInitialDownSync",
                    value: function () {
                        var e = this.timestampGenerator.now();
                        return null != this.userAuthenticatedTime && Object(o.b)("init_load_time", e - this.userAuthenticatedTime, this.notesCount), this.userAuthenticatedTime = null, a.automation("end_initial_down_sync: ".concat(e)), e
                    }
                }]) && i(t.prototype, n), r && i(t, r), e
            }();
        t.a = new s
    },
    180: function (e, t, n) {
        "use strict";
        (function (e, r, o) {
            var i, a = n(19),
                s = Object(a.default)("boron:env");
            if (void 0 !== e && e.__boronEnv) i = e.__boronEnv;
            else if (r && "renderer" === r.type) {
                var c = n(609).default;
                i = c, window.__boronEnv = c
            } else i = r && "browser" === r.type ? n(168).default : window && window.__boronEnv || {
                platformName: "web",
                isPackaged: !1,
                isMac: !1,
                isWin: !1,
                isLinux: !1,
                isNode: !1
            };
            t.a = i, s.info("Using boronEnv: ".concat(JSON.stringify(o.exports)))
        }).call(this, n(31), n(87), n(268)(e))
    },
    187: function (e, t, n) {
        "use strict";

        function r(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var i = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._values = void 0
            }
            var t, n, i, a, s;
            return t = e, (n = [{
                key: "init",
                value: (a = regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                throw new Error("init must be overridden for specific loader");
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })), s = function () {
                    var e = this,
                        t = arguments;
                    return new Promise((function (n, o) {
                        var i = a.apply(e, t);

                        function s(e) {
                            r(i, n, o, s, c, "next", e)
                        }

                        function c(e) {
                            r(i, n, o, s, c, "throw", e)
                        }
                        s(void 0)
                    }))
                }, function () {
                    return s.apply(this, arguments)
                })
            }, {
                key: "isEmpty",
                value: function () {
                    return !this._values || 0 === Object.keys(this._values).length
                }
            }, {
                key: "getValue",
                value: function (e) {
                    return this._values[e]
                }
            }]) && o(t.prototype, n), i && o(t, i), e
        }();
        t.a = i
    },
    19: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "Logger", (function () {
            return l
        })), n.d(t, "enable", (function () {
            return p
        })), n.d(t, "setTransport", (function () {
            return v
        })), n.d(t, "default", (function () {
            return b
        }));
        var r = n(169),
            o = n.n(r);

        function i(e) {
            return function (e) {
                if (Array.isArray(e)) return a(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function c(e, t, n) {
            return t && s(e.prototype, t), n && s(e, n), e
        }
        var u = function (e) {
                e.log = e.safeLog.bind(e, e.topicStr), e.info = e.safeLog.bind(e, e.topicStr), e.automation = e.safeLog.bind(e), e.warn = f.bind(e, e.topicStr), e.error = h.bind(e, e.topicStr), e.trace = d.bind(e, e.topicStr)
            },
            l = function () {
                function e(t) {
                    if (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.topicStr = void 0, this._debugOut = void 0, this.log = void 0, this.info = void 0, this.warn = void 0, this.error = void 0, this.trace = void 0, this.automation = void 0, 0 === t.length) throw new Error("Logger: A topic string must be provided on init");
                    if (e.existingLoggers[t]) return e.existingLoggers[t];
                    this.topicStr = t, this._debugOut = o()(t), u(this), e.existingLoggers[t] = this
                }
                return c(e, null, [{
                    key: "rebindAllLoggers",
                    value: function () {
                        Object.keys(e.existingLoggers).forEach((function (t) {
                            u(e.existingLoggers[t])
                        }))
                    }
                }]), c(e, [{
                    key: "safeLog",
                    value: function () {
                        if (this.isInitialized()) {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            var r = t[0],
                                o = t.slice(1);
                            this._debugOut.apply(this, [r].concat(i(_(o))))
                        }
                    }
                }, {
                    key: "isInitialized",
                    value: function () {
                        return null != this._debugOut && this._debugOut.enabled
                    }
                }]), e
            }();

        function f() {
            if (this.isInitialized()) {
                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                (e = console).warn.apply(e, i(_(n)))
            }
        }

        function h() {
            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            (e = console).error.apply(e, i(_(n)))
        }

        function d() {
            if (this.isInitialized()) {
                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                (e = console).trace.apply(e, i(_(n)))
            }
        }

        function p(e) {
            o.a.enable(e)
        }

        function _(e) {
            return e.map((function (e) {
                return e instanceof Object ? JSON.stringify(e) : e
            }))
        }

        function v(e) {
            u = e, l.rebindAllLoggers()
        }

        function b(e) {
            return new l(e)
        }
        l.existingLoggers = {}
    },
    195: function (e, t, n) {
        "use strict";
        var r = n(174),
            o = n(19),
            i = Object(o.default)("ion:lib:logout");
        t.a = function () {
            try {
                r.a.call("app.logout")
            } catch (e) {
                i.error(e)
            }
        }
    },
    196: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return o
        }));
        var r = n(52),
            o = function () {
                var e;
                window.location.assign((e = encodeURIComponent(window.location.href), "".concat(r.a.getBaseUrl(), "Login.action?targetUrl=").concat(e)))
            }
    },
    238: function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        n.d(t, "a", (function () {
            return s
        }));
        var o = {
                NAME: "En-Client",
                VALUE: "ion"
            },
            i = "Ion-Version",
            a = {
                NAME: "X-Feature-Version",
                VALUE: "3"
            };

        function s() {
            var e, t = {};
            return t.headers = (r(e = {}, o.NAME, o.VALUE), r(e, a.NAME, a.VALUE), r(e, i, "".concat("10.5.1", "(").concat("221", ")")), e), t
        }
    },
    257: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        })), n.d(t, "b", (function () {
            return s
        })), n.d(t, "c", (function () {
            return u
        }));
        var r, o = n(15);

        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }! function (e) {
            e.TOOLTIPS_PINNING_ERROR = "Tooltips_pinning_error"
        }(r || (r = {}));

        function s() {
            try {
                o.c.createLogger("experimentsLogger", {
                    handler: o.b.http
                })
            } catch (e) {}
        }
        var c = new Set;

        function u(e, t, n) {
            try {
                var r = JSON.stringify(n);
                if (t && c.has(r)) return;
                c.add(r);
                var s = o.c.getLogger("experimentsLogger");
                s && s.error("Experiments Log", function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? i(Object(n), !0).forEach((function (t) {
                            a(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    type: e,
                    environment: "production"
                }, n))
            } catch (e) {}
        }
    },
    269: function (e, t) {
        e.exports = electron
    },
    45: function (e, t, n) {
        "use strict";
        var r;

        function o(e) {
            r = Object.freeze(e)
        }
        n.d(t, "a", (function () {
            return o
        })), t.b = function () {
            return r
        }
    },
    51: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        })), n.d(t, "e", (function () {
            return a
        })), n.d(t, "b", (function () {
            return s
        })), n.d(t, "d", (function () {
            return c
        })), n.d(t, "c", (function () {
            return u
        }));
        var r = n(15),
            o = n(180);

        function i() {
            try {
                r.c.init({
                    clientToken: "pub3565e35d01d4f9e0dfcb06bad0a97342",
                    forwardErrorsToLogs: !1,
                    datacenter: r.a.US
                }), r.c.addLoggerGlobalContext("platform", o.a.platformName), r.c.addLoggerGlobalContext("view", {
                    referrer: ""
                }), r.c.addLoggerGlobalContext("release", "10.5.1"), r.c.addLoggerGlobalContext("environment", "production")
            } catch (e) {}
        }

        function a(e) {
            try {
                r.c.addLoggerGlobalContext("userid", e)
            } catch (e) {}
        }

        function s(e, t, n) {
            try {
                r.c.logger.info(e, {
                    duration: t,
                    notesCount: n || 0
                })
            } catch (e) {}
        }

        function c(e, t) {
            try {
                r.c.logger.info(e, {
                    count: t
                })
            } catch (e) {}
        }

        function u(e, t) {
            try {
                if (t) try {
                    return void r.c.logger.error("".concat(e, ", ").concat(t))
                } catch (e) {}
                r.c.logger.error(e)
            } catch (e) {}
        }
    },
    52: function (e, t, n) {
        "use strict";
        var r = n(89),
            o = n.n(r),
            i = n(122);

        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var c = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?$", "i"),
            u = /^{%.*%}$/,
            l = function () {
                function e() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.baseUrl = void 0, this.userSlotUrlPrefix = void 0, i.a.init()
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "getBaseUrlFromBaseEmbed",
                    value: function () {
                        var e = i.a.getValue("SERVICE_BASE_URL");
                        return c.test(e) ? e : null
                    }
                }, {
                    key: "getUserSlotUrlPrefixFromBaseEmbed",
                    value: function () {
                        var e = i.a.getValue("userSlotUrlPrefix");
                        return u.test(e) ? null : e
                    }
                }, {
                    key: "setBaseUrl",
                    value: function (e) {
                        this.baseUrl = e, this.baseUrl.endsWith("/") || (this.baseUrl += "/")
                    }
                }, {
                    key: "getBaseUrl",
                    value: function () {
                        return null == this.baseUrl && this.setBaseUrl(this.getBaseUrlFromBaseEmbed() || "https://www.evernote.com/"), this.baseUrl
                    }
                }, {
                    key: "getBaseUrlHost",
                    value: function () {
                        return new URL(this.getBaseUrl()).host
                    }
                }, {
                    key: "getBaseUrlWithoutTrailingSlash",
                    value: function () {
                        var e = this.getBaseUrl();
                        return e.endsWith("/") ? e.slice(0, -1) : e
                    }
                }, {
                    key: "getUserSlotUrlPrefix",
                    value: function () {
                        return null == this.userSlotUrlPrefix && (this.userSlotUrlPrefix = this.getUserSlotUrlPrefixFromBaseEmbed() || String("object" === ("undefined" == typeof window ? "undefined" : a(window)) && window.location && o.a.parse(window.location.search).USER_SLOT_URL_PREFIX || "")), this.userSlotUrlPrefix
                    }
                }, {
                    key: "getBaseUrlWithPathPrefix",
                    value: function () {
                        var e, t = this,
                            n = "".concat(this.getBaseUrl()).concat((e = /^\/*(.*)$/.exec(t.getUserSlotUrlPrefix())) ? e[1] : t.getUserSlotUrlPrefix());
                        return n.endsWith("/") || (n += "/"), n
                    }
                }]) && s(t.prototype, n), r && s(t, r), e
            }();
        t.a = new l
    },
    609: function (e, t, n) {
        "use strict";

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        n.r(t);
        var i = function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function (t) {
                    o(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }({}, n(168).default, {
            isNode: !1
        });
        t.default = i
    },
    610: function (e, t, n) {
        "use strict";
        n.r(t);
        n(284), n(272);

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var i = {
                "stage.evernote.com": {
                    host: "https://cec.svc-stage.evernote.com",
                    secret: "368E6D34-3944-40BF-B78F-080545FD9E8D",
                    apiKey: "ion"
                },
                "www.evernote.com": {
                    host: "https://cec.svc.evernote.com",
                    secret: "A03CDD6E-5CF8-459F-986F-F8E2A2342F2E",
                    apiKey: "ion"
                }
            },
            a = {
                "stage.evernote.com": {
                    apiKey: "UA-285778-111",
                    sandboxMode: !1
                },
                "www.evernote.com": {
                    apiKey: "UA-285778-106",
                    sandboxMode: !1
                }
            };

        function s(e) {
            return function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function (t) {
                        o(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({}, {
                GA: a[e],
                CEC: i[e]
            }, {}, {
                featureFlags: {
                    isBoardPluginEnabled: !0,
                    isOfflineSearchEnabled: !0,
                    isNSyncEnabled: !1,
                    isMonetizationServiceEnabled: !0,
                    isTaskPluginEnabled: !0
                }
            })
        }
        var c = n(238),
            u = {
                version: 0,
                hostInformation: {
                    "https://www.evernote.com": {
                        Command: "https://api.evernote.com/command",
                        File: "https://api.evernote.com/file",
                        Sync: "https://api.evernote.com/sync"
                    },
                    "https://stage.evernote.com": {
                        Command: "https://api.stage.evernote.com/command",
                        File: "https://api.stage.evernote.com/file",
                        Sync: "https://api.stage.evernote.com/sync"
                    },
                    "https://app.preprod3.evernote.com": {
                        Command: "https://api.preprod3.evernote.com/command",
                        File: "https://api.preprod3.evernote.com/file",
                        Sync: "https://api.preprod3.evernote.com/sync"
                    }
                }
            },
            l = n(177),
            f = n(52),
            h = n(45),
            d = n(19);

        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function _(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var v = function e(t) {
                _(this, e), this.value = void 0, this.next = void 0, this.prev = void 0, this.value = t, this.next = null, this.prev = null
            },
            b = function () {
                function e() {
                    _(this, e), this.length = void 0, this.head = void 0, this.tail = void 0, this.length = 0, this.head = null, this.tail = null
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "clear",
                    value: function () {
                        this.length = 0, this.head = null, this.tail = null
                    }
                }, {
                    key: "push",
                    value: function (e) {
                        if (0 === this.length) {
                            var t = new v(e);
                            return this.head = t, this.tail = t, void this.length++
                        }
                        if (!this.tail) throw new Error("cannot push: tail is null");
                        this.tail.next = new v(e), this.tail.next.prev = this.tail, this.tail = this.tail.next, this.length++
                    }
                }, {
                    key: "pop",
                    value: function () {
                        if (0 === this.length) throw new Error("cannot pop: list is empty");
                        if (1 === this.length && this.head) {
                            this.length = 0;
                            var e = this.head;
                            return this.head = null, this.tail = null, e.value
                        }
                        if (null == this.tail || null == this.tail.prev) throw new Error("cannot pop: tail and/or second to last nodes were null");
                        var t = this.tail;
                        return this.tail = this.tail.prev, t.prev = null, this.tail.next = null, this.length--, t.value
                    }
                }, {
                    key: "insert",
                    value: function (e, t) {
                        if (0 === e) return this.unshift(t);
                        if (e === this.length - 1) return this.push(t);
                        var n = this._findTargetNodeByIndex(e - 1);
                        if (!n || !n.next) throw new Error("cannot insert: target index is last element in list");
                        var r = new v(t),
                            o = n.next;
                        r.next = o, r.prev = n, o.prev = r, n.next = r, this.length++
                    }
                }, {
                    key: "unshift",
                    value: function (e) {
                        if (0 === this.length || null == this.head) return this.push(e);
                        var t = new v(e),
                            n = this.head;
                        t.next = n, n.prev = t, this.head = t, this.length++
                    }
                }, {
                    key: "shift",
                    value: function () {
                        if (0 === this.length || null == this.head) throw new Error("cannot shift: list is empty");
                        if (1 === this.length || null == this.head.next) return this.pop();
                        var e = this.head,
                            t = this.head.next;
                        return t.prev = null, this.head = t, e.next = null, this.length--, e.value
                    }
                }, {
                    key: "slice",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        if (0 === this.length) throw new Error("cannot slice: list is empty");
                        if (e !== this.length - 1) {
                            var n = e + t > this.length ? this.length - e : t;
                            if (0 === e) return n === this.length ? void this.clear() : (this.head = this._findTargetNodeByIndex(n), this.head && this.head.prev && (this.head.prev.next = null, this.head.prev = null), void(this.length -= n));
                            if (e + t === this.length) {
                                var r = this._findTargetNodeByIndex(e);
                                if (!r || !r.prev) throw new Error("cannot slice: unknown error");
                                return this.tail = r.prev, this.tail.next = null, r.prev = null, void(this.length -= t)
                            }
                            var o = this._findTargetNodeByIndex(e);
                            if (null == o) throw new Error("cannot slice: startingNode was null");
                            for (var i = o, a = 0; a < t; a++) {
                                if (null == i.next) throw new Error("cannot slice: finalNode.next was null");
                                i = i.next
                            }
                            if (null == o.prev || null == i.next) throw new Error("cannot slice: unknown error");
                            var s = o.prev,
                                c = i.next;
                            o.prev = null, i.next = null, s.next = c, c.prev = s, this.length -= t
                        } else this.pop()
                    }
                }, {
                    key: "sliceNode",
                    value: function (e) {
                        if (e === this.head) return this.shift();
                        if (e === this.tail) return this.pop();
                        var t = e.prev,
                            n = e.next;
                        return t && n && (t.next = n, n.prev = t), e.next = null, e.prev = null, this.length--, e.value
                    }
                }, {
                    key: "get",
                    value: function (e) {
                        var t = this._findTargetNodeByIndex(e);
                        if (!t) throw new Error("cannot get: retrieved node was null");
                        return t.value
                    }
                }, {
                    key: "remove",
                    value: function (e) {
                        var t = this._findTargetNodeByIndex(e);
                        if (!t) throw new Error("cannot remove: retrieved node was null");
                        return this.sliceNode(t), t.value
                    }
                }, {
                    key: "first",
                    value: function () {
                        return this.head ? this.head.value : null
                    }
                }, {
                    key: "last",
                    value: function () {
                        return this.tail ? this.tail.value : null
                    }
                }, {
                    key: "find",
                    value: function (e) {
                        return this._findTargetNodeByValue(e)
                    }
                }, {
                    key: "forEach",
                    value: function (e) {
                        if (0 !== this.length)
                            for (var t = this.head, n = 0; null != t; n++) e(t.value, n), t = t.next
                    }
                }, {
                    key: "forEachReverse",
                    value: function (e) {
                        if (0 !== this.length)
                            for (var t = this.tail, n = this.length - 1; null != t; n--) e(t.value, n), t = t.prev
                    }
                }, {
                    key: "map",
                    value: function (t) {
                        if (0 === this.length) return this;
                        for (var n = this.head, r = new e, o = 0; null != n; o++) r.push(t(n.value, o)), n = n.next;
                        return r
                    }
                }, {
                    key: "mapReverse",
                    value: function (t) {
                        if (0 === this.length) return this;
                        for (var n = this.tail, r = new e, o = this.length - 1; null != n; o--) r.push(t(n.value, o)), n = n.prev;
                        return r
                    }
                }, {
                    key: "filter",
                    value: function (t) {
                        if (0 === this.length) return this;
                        for (var n = this.head, r = new e, o = 0; null != n; o++) t(n.value, o) && r.push(n.value), n = n.next;
                        return r
                    }
                }, {
                    key: "_findTargetNodeByValue",
                    value: function (e) {
                        if (0 === this.length) throw new Error("cannot find node: list is empty");
                        for (var t = this.head, n = 0; null != t; n++) {
                            if (t.value === e) return {
                                index: n,
                                node: t
                            };
                            t = t.next
                        }
                        return {
                            index: -1,
                            err: "A node with that value was not found in the list.",
                            node: null
                        }
                    }
                }, {
                    key: "_findTargetNodeByIndex",
                    value: function (e) {
                        if (e > this.length - 1) throw new ReferenceError("index out of bounds");
                        if (0 === e) return this.head;
                        if (e === this.length - 1) return this.tail;
                        if (e < this.length / 2) {
                            for (var t = this.head, n = 0; n < e; n++) t && (t = t.next);
                            return t
                        }
                        for (var r = this.tail, o = this.length - 1; o > e; o--) r && (r = r.prev);
                        return r
                    }
                }]) && p(t.prototype, n), r && p(t, r), e
            }();

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function m(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function E(e, t) {
            return (E = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function w(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = O(e);
                if (t) {
                    var o = O(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return S(this, n)
            }
        }

        function S(e, t) {
            return !t || "object" !== g(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function O(e) {
            return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var T = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && E(e, t)
            }(i, e);
            var t, n, r, o = w(i);

            function i() {
                return m(this, i), o.apply(this, arguments)
            }
            return t = i, (n = [{
                key: "subscribe",
                value: function (e) {
                    var t = this,
                        n = new v(e);
                    if (null == this.head && null == this.tail) return this.head = n, this.tail = n, this.length++,
                        function () {
                            t.unsubscribe(n)
                        };
                    if (null == this.tail) throw new Error("cannot subscribe: tail is unexpectedly null");
                    var r = this.tail;
                    return r.next = n, n.prev = r, this.tail = n, this.length++,
                        function () {
                            t.unsubscribe(n)
                        }
                }
            }, {
                key: "unsubscribe",
                value: function (e) {
                    this.sliceNode(e)
                }
            }]) && y(t.prototype, n), r && y(t, r), i
        }(b);
        var N = function e(t, n, r) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.topicPaths = void 0, this.type = void 0, this.data = void 0, this.createdTime = void 0, this.topicPaths = t, this.type = n, this.data = r, this.createdTime = Date.now()
        };

        function k(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var C = function () {
                function e(t) {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.handler = void 0, this.handler = t
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "emit",
                    value: function (e) {
                        this.handler(e)
                    }
                }]) && k(t.prototype, n), r && k(t, r), e
            }(),
            I = n(90),
            A = n.n(I);

        function R(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function L(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function P(e, t, n) {
            return t && L(e.prototype, t), n && L(e, n), e
        }
        var j = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
                R(this, e), this.forwardMap = void 0, this.inwardMap = void 0, this.forwardMap = t, this.inwardMap = n
            }
            return P(e, [{
                key: "set",
                value: function (e, t) {
                    if (!this.isValueStorable(e) || !this.isValueStorable(t)) throw new TypeError("Invalid value to use as key or value");
                    var n = this.getKey(t);
                    if (null != n) {
                        var r = this.getValuesAsSet(n);
                        null != r && (r.delete(t), 0 === r.size && this.removeKey(n))
                    }
                    var o = this.getValuesAsSet(e);
                    null != o ? o.add(t) : this.forwardMap.set(e, new Set([t])), this.inwardMap.set(t, e)
                }
            }, {
                key: "getValuesAsArray",
                value: function (e) {
                    var t = this.getValuesAsSet(e);
                    return t ? Array.from(t) : null
                }
            }, {
                key: "getKey",
                value: function (e) {
                    return this.inwardMap.get(e)
                }
            }, {
                key: "hasKey",
                value: function (e) {
                    return this.forwardMap.has(e)
                }
            }, {
                key: "hasValue",
                value: function (e) {
                    return this.inwardMap.has(e)
                }
            }, {
                key: "removeKey",
                value: function (e) {
                    var t = this,
                        n = this.getValuesAsSet(e);
                    null != n && (this.forwardMap.delete(e), n.forEach((function (e) {
                        return t.inwardMap.delete(e)
                    })))
                }
            }, {
                key: "removeValue",
                value: function (e) {
                    var t = this.getKey(e);
                    if (null != t) {
                        this.inwardMap.delete(e);
                        var n = this.getValuesAsSet(t);
                        null != n && (n.delete(e), 0 === n.size && this.removeKey(t))
                    }
                }
            }, {
                key: "clone",
                value: function () {
                    return e.createFromSameInstance(A()(this))
                }
            }], [{
                key: "createFromSameInstance",
                value: function (t) {
                    if (null == t) return e.createEmptyMap();
                    var n = t.forwardMap || new Map,
                        r = t.inwardMap || new Map;
                    return new e(A()(n), A()(r))
                }
            }, {
                key: "createEmptyMap",
                value: function () {
                    return new e
                }
            }, {
                key: "createFromObject",
                value: function (t) {
                    var n = new e;
                    return Object.keys(t).forEach((function (e) {
                        t[e].forEach((function (t) {
                            n.set(e, t)
                        }))
                    })), n
                }
            }]), P(e, [{
                key: "getValuesAsSet",
                value: function (e) {
                    return this.forwardMap.get(e)
                }
            }, {
                key: "isValueStorable",
                value: function (e) {
                    return null != e
                }
            }, {
                key: "getForwardObject",
                value: function () {
                    var e = {};
                    return this.forwardMap.forEach((function (t, n) {
                        e[n] = Array.from(t)
                    })), e
                }
            }, {
                key: "getInwardObject",
                value: function () {
                    var e = {};
                    return this.inwardMap.forEach((function (t, n) {
                        e[n] = t
                    })), e
                }
            }]), e
        }();

        function U(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var D = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.data = void 0, this.data = new b
            }
            var t, n, r;
            return t = e, (n = [{
                key: "enqueue",
                value: function (e) {
                    this.data.unshift(e)
                }
            }, {
                key: "dequeue",
                value: function () {
                    return this.data.pop()
                }
            }, {
                key: "peek",
                value: function () {
                    return this.data.last()
                }
            }, {
                key: "forEach",
                value: function (e) {
                    this.data.forEachReverse(e)
                }
            }, {
                key: "clear",
                value: function () {
                    this.data.clear()
                }
            }, {
                key: "length",
                get: function () {
                    return this.data.length
                }
            }]) && U(t.prototype, n), r && U(t, r), e
        }();

        function F(e) {
            return (F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function x(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function M(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function H(e, t) {
            return (H = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function B(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = W(e);
                if (t) {
                    var o = W(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return G(this, n)
            }
        }

        function G(e, t) {
            return !t || "object" !== F(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function W(e) {
            return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var V = function (e) {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && H(e, t)
            }(i, e);
            var t, n, r, o = B(i);

            function i() {
                return x(this, i), o.apply(this, arguments)
            }
            return t = i, (n = [{
                key: "add",
                value: function (e) {
                    this.length >= 10 && this.dequeue(), this.enqueue(e)
                }
            }, {
                key: "clearMessages",
                value: function () {
                    this.clear()
                }
            }]) && M(t.prototype, n), r && M(t, r), i
        }({
            DoublyLinkedList: b,
            MultiBiMap: j,
            Queue: D
        }.Queue);

        function K(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var z = Object(d.default)("ion-broker:topic"),
            q = ["message"],
            Y = function () {
                function e(t, n) {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.name = void 0, this.subscribers = void 0, this.messages = void 0, this.registrant = void 0, this.children = void 0, this.topicPath = void 0, this.name = t, this.topicPath = n, this.subscribers = new T, this.children = new Map, this.messages = new V
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "subscribe",
                    value: function (e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = new C(e),
                            r = this.subscribers.subscribe(n);
                        return t && this._replay(n), r
                    }
                }, {
                    key: "clearTopics",
                    value: function () {
                        z.log("Clearing all messages for topic ".concat(this.name)), this.messages.clearMessages()
                    }
                }, {
                    key: "publish",
                    value: function (e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !q.includes(e),
                            o = new N(e, t, n);
                        r && this._saveMessage(o);
                        try {
                            this.subscribers.forEach((function (e) {
                                return e.handler(o)
                            }))
                        } catch (e) {
                            z.log("Error caught in Broker subscription handler: ".concat(e.message))
                        }
                    }
                }, {
                    key: "register",
                    value: function (e) {
                        var t = this;
                        return this.registrant = e,
                            function () {
                                t.registrant = void 0
                            }
                    }
                }, {
                    key: "call",
                    value: function (e) {
                        if (!this.registrant) throw new Error("The topic ".concat(this.topicPath, " does not have a registrant. ") + "Did you unregister the handler?");
                        return this.registrant(e)
                    }
                }, {
                    key: "_saveMessage",
                    value: function (e) {
                        z.log("Saving message to topic ".concat(this.name, " as there are not yet any\n      subscribers to receive it.")), this.messages.add(e)
                    }
                }, {
                    key: "_replay",
                    value: function (e) {
                        z.log("Replaying messages from topic ".concat(this.name, " for subscriber")), this.messages.forEach((function (t) {
                            return e.handler(t)
                        }))
                    }
                }]) && K(t.prototype, n), r && K(t, r), e
            }(),
            X = ",",
            J = ".",
            Q = {
                attachments: {
                    actions: ".*"
                },
                client: ".*",
                notifications: {
                    action: ".*"
                },
                system: {
                    network: null
                },
                app: {
                    actions: ".*",
                    businessmode: ".*",
                    events: ".*",
                    fullysynced: ".*",
                    i18n: ".*",
                    loading: ".*",
                    logout: ".*",
                    progress: ".*",
                    service: ".*",
                    validuser: ".*",
                    synced: ".*"
                },
                config: {
                    actions: ".*"
                },
                message: ".*",
                editor: ".*",
                note: {
                    actions: ".*",
                    datasource: ".*",
                    utils: ".*",
                    error: ".*"
                },
                stack: {
                    actions: ".*"
                },
                notebook: {
                    actions: ".*"
                },
                flow: {
                    actions: ".*",
                    utils: ".*"
                },
                search: ".*",
                workspace: {
                    actions: ".*",
                    utils: ".*"
                },
                tag: {
                    actions: ".*"
                },
                tests: ".*",
                user: {
                    actions: ".*",
                    events: ".*",
                    access: ".*"
                },
                autoupdater: {
                    events: ".*"
                },
                login: {
                    events: ".*"
                },
                threads: {
                    actions: ".*"
                },
                service: {
                    note: ".*",
                    notebook: ".*",
                    search: ".*",
                    tag: ".*",
                    user: ".*",
                    threads: ".*"
                },
                sync: {
                    initialsyncdone: "*",
                    actions: ".*",
                    persist: ".*"
                },
                promotion: {
                    actions: ".*",
                    utils: ".*"
                },
                crosspromotion: {
                    actions: ".*"
                },
                business: {
                    getshard: ".*"
                },
                personal: {
                    getshard: ".*"
                },
                identity: {
                    actions: ".*"
                },
                profile: {
                    actions: ".*"
                },
                logrequest: {
                    actions: ".*"
                },
                experiments: {
                    actions: ".*"
                },
                commengine: {
                    actions: ".*"
                },
                workchat: {
                    actions: ".*"
                },
                shortcut: {
                    actions: ".*"
                },
                dropdown: ".*",
                rtsclient: {
                    actions: ".*"
                },
                boron: ".*",
                ui: {
                    notes: ".*",
                    window: ".*"
                },
                worker: {
                    status: null
                }
            };

        function $(e) {
            return ($ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var Z = Object(d.default)("ion:broker:validation");
        var ee = function (e) {
            var t = Q;
            return e.split(J).every((function (e, n, r) {
                if (null == t && n !== r.length - 1) return !1;
                if ("string" == typeof t) try {
                    return new RegExp(t).test(e)
                } catch (e) {
                    return Z.error("An error occurred while compiling regexp:", e), !1
                }
                return "object" === $(t) ? e in t && (t = t[e], !0) : (Z.log("branch had an unexpected type:", $(t)), !1)
            }))
        };
        var te, ne = Object(d.default)("ion-broker"),
            re = Object(d.default)("ion-broker:recents"),
            oe = new Y("", ""),
            ie = new function e() {
                var t = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.recentTopics = [], this.subscriptions = [], this.registrations = [], this.logToRecents = function (e, n, r) {
                    switch (e) {
                        case "recentTopics":
                            t.recentTopics.push(n), t.recentTopics.length > r && t.recentTopics.shift();
                            break;
                        case "subscriptions":
                            t.subscriptions.push(n), t.subscriptions.length > r && t.subscriptions.shift();
                            break;
                        case "registrations":
                            t.registrations.push(n), t.registrations.length > r && t.registrations.shift();
                            break;
                        default:
                            re.log("Error: only logToRecents for topics, subscriptions, or registrations.")
                    }
                }, this.findLeafTopic = function (e, t) {
                    if (!ee(e)) throw new Error("invalid topic provided for to findLeafTopic: (".concat(e, ")"));
                    var n = oe;
                    return e.split(J).forEach((function (r) {
                        var o = n.children.get(r);
                        o || (o = new Y(r, e), n.children.set(r, o)), n = o, t && t.add(o)
                    })), n
                }, this.subscribe = function (e, n) {
                    var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    t.logToRecents("subscriptions", e, 25);
                    var o = e.toLowerCase().split(X);
                    ne.log("New subscribe request for topics %o", o);
                    var i = [];
                    return o.forEach((function (e) {
                            var o = t.findLeafTopic(e);
                            i.push(o.subscribe(n, r))
                        })),
                        function () {
                            var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            i.forEach((function (e) {
                                ne.log("Unsubscribing function"), e()
                            })), n && t.clearTopics(e)
                        }
                }, this.publish = function (e, n, r, o) {
                    var i = e.toLowerCase().split(X);
                    ne.log('New "%s" message published to topics %o with content %o', n, i, r), t.logToRecents("recentTopics", {
                        type: n,
                        topics: e,
                        timestamp: Date.now()
                    }, 25);
                    var a = new Set;
                    i.forEach((function (e) {
                        t.findLeafTopic(e, a)
                    })), a.forEach((function (t) {
                        return t.publish(e, n || "", r, o)
                    }))
                }, this.clearTopics = function (e) {
                    var n = e.toLowerCase().split(X);
                    ne.log("Clearing topics %o", n);
                    var r = new Set;
                    n.forEach((function (e) {
                        t.findLeafTopic(e, r)
                    })), r.forEach((function (e) {
                        return e.clearTopics()
                    }))
                }, this.register = function (e, n) {
                    var r = e.toLowerCase().split(X);
                    ne.log("New register request for topics %o", r);
                    var o = {};
                    return r.forEach((function (r) {
                            if (t.registrations.includes(r)) throw new Error("The topic, ".concat(r, ", is already registered to another handler. If you'd like to change handlers please unregister it first."));
                            t.logToRecents("registrations", e, 25), o[r] = t.findLeafTopic(r).register(n)
                        })),
                        function () {
                            Object.keys(o).forEach((function (e) {
                                var n = t.registrations.indexOf(e);
                                n > -1 && t.registrations.splice(n, 1), o[e]()
                            }))
                        }
                }, this.call = function (e, n) {
                    var r = e.toLowerCase();
                    if (r.includes(X)) throw new Error('Only 1 leaf topic to call should be provided to the topicPath parameter. "topicPath" was: '.concat(e));
                    return t.findLeafTopic(r).call(n)
                }
            },
            ae = function () {
                re.log("Broker recent topics", ie.recentTopics), re.log("Broker recent subscriptions", ie.subscriptions), re.log("Broker recent registrations", ie.registrations)
            },
            se = ie,
            ce = n(196),
            ue = n(195),
            le = n(170),
            fe = n.n(le),
            he = n(89),
            de = n.n(he),
            pe = n(173),
            _e = n(246),
            ve = n(9),
            be = n(165),
            ge = n(51),
            me = n(257),
            ye = n(179);

        function Ee(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function we(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise((function (r, o) {
                    var i = e.apply(t, n);

                    function a(e) {
                        Ee(i, r, o, a, s, "next", e)
                    }

                    function s(e) {
                        Ee(i, r, o, a, s, "throw", e)
                    }
                    a(void 0)
                }))
            }
        }
        ve.logger.configure({
            name: "ion-conduit",
            console: {
                level: ve.logger.WARN
            }
        }, be.ClientLogger), Object(ge.a)(), Object(me.b)(), ye.a.markUserAuthenticated(), fe.a.config({
            name: "evernote",
            storeName: "sugar"
        }), Object(h.a)({
            applicationTitle: "Evernote Web",
            applicationRole: "web",
            isAutoUpdateAllowed: !1,
            feedbackURL: "https://evernote.qualtrics.com/jfe/form/SV_3CbP6Qf3FW5qxGR",
            broker: se,
            localizedAppTitleKey: "Account.header.title",
            objectPersistence: fe.a,
            triggerLogin: ce.a,
            triggerLogout: ue.a,
            initConduit: (te = we(regeneratorRuntime.mark((function e(t) {
                var n, r, o;
                return regeneratorRuntime.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = de.a.parse(window.location.search), r = n && n.branch, (o = s(f.a.getBaseUrlHost())).featureFlags.isOfflineSearchEnabled = !1, e.abrupt("return", Object(_e.init)({
                                params: {
                                    backgroundNoteMetadataSyncConfig: {
                                        notesPerFetch: 20,
                                        pollingIntervalMilliseconds: 1e4
                                    },
                                    cachePolicy: {
                                        softCap: 500,
                                        hardCap: 1e3
                                    },
                                    customHeaders: Object(c.a)().headers || {},
                                    cookieAuth: {
                                        defaultServiceHost: t
                                    },
                                    noFreezeImmutable: !0,
                                    nSyncEntityFilter: ["Home", "Tasks"],
                                    workerRelativePath: r ? "/IonConduitWorker.action?branch=".concat(r) : "/IonConduitWorker.action",
                                    servicesConfig: o,
                                    hostDefaults: u,
                                    overrideFileServiceUrl: "".concat(f.a.getBaseUrlWithoutTrailingSlash(), "/file"),
                                    promotionIDs: Object.values(l.PROMOTION_IDS),
                                    maestroClientType: 6,
                                    maestroPlatform: "PLATFORM_UNKNOWN",
                                    singleTabMode: Object(pe.f)(),
                                    webWorkerStateChangeHandler: function (e) {
                                        try {
                                            ve.logger.info(e), se.publish("worker.status", e)
                                        } catch (e) {
                                            ve.logger.error(e)
                                        }
                                    }
                                }
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), function (e) {
                return te.apply(this, arguments)
            })
        }), we(regeneratorRuntime.mark((function e() {
            return regeneratorRuntime.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, Promise.all([n.e(2), n.e(0)]).then(n.bind(null, 664));
                    case 2:
                        return e.next = 4, Promise.all([n.e(2), n.e(34), n.e(0), n.e(33)]).then(n.bind(null, 5500));
                    case 4:
                        window.logRecentBroker = ae, window.enableTracing = function (e) {
                            se.publish("app.events.enableTracing", "", e)
                        };
                    case 6:
                    case "end":
                        return e.stop()
                }
            }), e)
        })))()
    }
});