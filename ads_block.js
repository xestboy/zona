(function (e) {
        var t = window,
                n = document,
                o = function () {
                        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_", t = e.charAt(Math.floor(50 * Math.random())), n = Math.floor(4 * Math.random()) + 4, o = 0; n > o; o++) t += e.charAt(Math.floor(Math.random() * e.length));
                        return t
                },
                a = o(),
                i = o(),
                r = function () {
                        if (!d(navigator.userAgent.toLowerCase())) {
                                var e = n.createElement("iframe"),
                                        t = ["<!doctype html><html><head><script>function u() {", "setTimeout(function(){", 'var i = parent.document.getElementById("' + i + '");', 'var isB = i.offsetHeight > 2 && document.getElementById("banner").offsetHeight > 2 ? 0 : 2;', "if(isB){", 'parent.window["' + a + '"].call(parent.window, isB);', "} else {", 'var script = document.createElement("script");', 'script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";', "document.body.appendChild(script);", 'script.onload = function() {parent.window["' + a + '"].call(parent.window, 0);};', 'script.onerror = function() {parent.window["' + a + '"].call(parent.window, 1);};', "}", "}, 100);", "}</", 'script></head><body onload="u()">', '<div id="banner" class="advblock">', '<a class="AdSense" href="#"><img width="728" height="90" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAJCAYAAADzRkbkAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AkbCA4o9b3XAQAAAAxpVFh0Q29tbWVudAAAAAAAvK6ymQAAAAxJREFUCNdjYCABAAAALQABFPTf2QAAAABJRU5ErkJggg==" alt="advertisement"></a>', "</div>", "</body></html>"].join(""),
                                        o = null,
                                        r = {
                                                display: "block",
                                                position: "absolute",
                                                left: "-9999px",
                                                top: "0",
                                                width: "2px",
                                                height: "auto",
                                                border: "0"
                                        };
                                e.src = "about:blank",
                                e.id = i,
                                e.name = i,
                                e.width = "728",
                                e.height = "90",
                                e.frameBorder = "0",
                                e.allowtransparency = "1",
                                e.scrolling = "no",
                                e.className = "advblock AdSense",
                                n.body.appendChild(e);
                                for (var l in r) e.style[l] = r[l];
                                o = e.contentWindow.document,
                                o.open(),
                                o.write(t),
                                o.close()
                        }
                },
                d = function (e) {
                        var t = ["aolbuild", "baidu", "bingbot", "bingpreview", "msnbot", "duckduckgo", "adsbot-google", "googlebot", "mediapartners-google", "teoma", "slurp", "yandex", "bot", "spider", "crawl"],
                                n = null;
                        for (var o in t) if (n = new RegExp(t[o]), n.test(e)) return !0;
                        return !1
                };
        t.adregain_wall = !0,
        t.addEventListener ? t.addEventListener("load", r, !1) : t.attachEvent && t.attachEvent("onload", r),
        t[a] = function (e) {
                function t(e, t, n, o) {
                        "insertRule" in e ? e.insertRule(t + "{" + n + "}", o) : "addRule" in e && e.addRule(t, n, o)
                }
                if (e) try {
                        var n = new Date,
                                a = 0,
                                i = !1;
                        n.setDate(n.getDate() + 1);
                        var r = null;
                        if (a > 0 && (r = function (e) {
                                var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                                return t ? parseInt(decodeURIComponent(t[1])) : null
                        }("arns")), null === r || isNaN(r) || r > n.getTime()) {
                                var d = 0e3,
                                        l = o(),
                                        c = o(),
                                        s = function () {
                                                var e = document.createElement("style");
                                                return e.appendChild(document.createTextNode("")),
                                                document.head.appendChild(e),
                                                e.sheet
                                        }(),
                                        p = {
                                                isArray: function (e) {
                                                        return "[object Array]" === Object.prototype.toString.call(e)
                                                },
                                                make: function (e) {
                                                        if (!this.isArray(e)) return this.make.call(this, Array.prototype.slice.call(arguments));
                                                        var t = e[0],
                                                                n = e[1],
                                                                o = document.createElement(t),
                                                                a = 1;
                                                        if ("object" == typeof n && null !== n && !this.isArray(n)) {
                                                                for (var i in n) o[i] = n[i];
                                                                a = 2
                                                        }
                                                        for (var r = a; r < e.length; r++) if (this.isArray(e[r])) o.appendChild(this.make(e[r]));
                                                        else {
                                                                var d = document.createElement("span");
                                                                d.innerHTML = e[r],
                                                                o.appendChild(d)
                                                        }
                                                        return o
                                                }
                                        },
                                        f = ["position:absolute", "top:0", "right:0", "display:block", "display:none !important", "height:20px", "width:20px;", "background:#000", "color:#ffffff", "font:bold 21px/21px sans-serif", "vertical-align:middle", "text-align:center", "cursor:pointer"],

                                        u = ["position:fixed", "max-width:400px", "text-align:center", "right:38px", "bottom:5px", "background:#fdfdfd", "color:#000", "width:100%", "display:none", "z-index:9999", "font-weight:600", "border:1px solid #000", "font-size:12px"],

                                        A = ["text-align:center", 'content:"\u270b"', "display:block", "width:30px", "color:#ffffff", "background:#c00", "position:absolute", "left:0", "top:0", "height:100%", "font-size:18px", "line-height:3.0em", "vertical-align:bottom"];
                                t(s, "#" + c, f.sort(function () {
                                        return.5 - Math.random()
                                }).join(";"), 0),
                                t(s, "#" + l, u.sort(function () {
                                        return.5 - Math.random()
                                }).join(";"), 1),
                                t(s, "#" + l + " > div", "padding:3px 3px 3px 30px", 2),
                                t(s, "#" + l + " > div:before", A.sort(function () {
                                        return.5 - Math.random()
                                }).join(";"), 3);
                                var h = p.make("div", {
                                        id: l
                                }, ["div", "<h6>Уважаемый пользователь!</h6>У вас включен Ad Blocker, из-за этого некоторые функции сайта не работают.<style>blockquote8,.m3u8{-ms-user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-moz-user-select:none;-webkit-user-select:none;font-size:100%;}.spoiler-judul .button-zi,.down-link,a.download{pointer-events:none;}</style>"], ["span", {
                                        id: c
                                },
                                "&times;"]);
                                document.body.insertBefore(h, document.body.childNodes[0]),
                                "undefined" != typeof window.localStorage && null === window.localStorage.getItem("regainShow") && window.localStorage.setItem("regainShow", 0),
                                setTimeout(function () {
                                        var e = document.getElementById(l),
                                                t = null;
                                        if (e.style.display = "block", !i) {
                                                var t = document.createElement("div");
                                                e.parentNode.insertBefore(t, e),
                                                t.style.height = e.offsetHeight + "px"
                                        }
                                        document.getElementById(c).onclick = function () {
                                                if (t && e.parentNode.removeChild(t), e.parentNode.removeChild(e), a > 0) {
                                                        var o = (new Date).getTime() + 36e5 * a;
                                                        n = new Date(o),
                                                        document.cookie = "arns=" + o + "; path=/; expires=" + n.toUTCString()
                                                }
                                        }
                                }, d)
                        }
                } catch (m) {}
        }
}).call(this, "06ddf090aa8af321907fe97e7b020f71-611-1584599730");
