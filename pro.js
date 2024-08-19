!function() {
    "use strict";
    var t = ()=>{}
    ;
    let e = {}
      , a = {}
      , n = null
      , r = {
        mark: t,
        measure: t
    };
    try {
        "undefined" != typeof window && (e = window),
        "undefined" != typeof document && (a = document),
        "undefined" != typeof MutationObserver && (n = MutationObserver),
        "undefined" != typeof performance && (r = performance)
    } catch (t) {}
    const {userAgent: i=""} = e.navigator || {}
      , y = e
      , x = a
      , c = n;
    var o = r;
    const s = !!y.document
      , f = !!x.documentElement && !!x.head && "function" == typeof x.addEventListener && "function" == typeof x.createElement
      , u = ~i.indexOf("MSIE") || ~i.indexOf("Trident/");
    var l = "classic"
      , m = "duotone"
      , d = "sharp"
      , p = "sharp-duotone"
      , h = [l, m, d, p]
      , g = {
        fas: "solid",
        far: "regular",
        fal: "light",
        fat: "thin",
        fad: "duotone",
        fab: "brands",
        fass: "sharp-solid",
        fasr: "sharp-regular",
        fasl: "sharp-light",
        fast: "sharp-thin",
        fasds: "sharp-duotone-solid"
    }
      , v = {
        fak: "kit",
        "fa-kit": "kit"
    }
      , b = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
    }
      , k = {
        classic: {
            fa: "solid",
            fas: "solid",
            "fa-solid": "solid",
            far: "regular",
            "fa-regular": "regular",
            fal: "light",
            "fa-light": "light",
            fat: "thin",
            "fa-thin": "thin",
            fad: "duotone",
            "fa-duotone": "duotone",
            fab: "brands",
            "fa-brands": "brands"
        },
        sharp: {
            fa: "solid",
            fass: "solid",
            "fa-solid": "solid",
            fasr: "regular",
            "fa-regular": "regular",
            fasl: "light",
            "fa-light": "light",
            fast: "thin",
            "fa-thin": "thin"
        },
        "sharp-duotone": {
            fa: "solid",
            fasds: "solid",
            "fa-solid": "solid"
        }
    }
      , w = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      , A = w.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
      , S = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
    }
      , N = [...Object.keys({
        classic: ["fas", "far", "fal", "fat"],
        sharp: ["fass", "fasr", "fasl", "fast"],
        "sharp-duotone": ["fasds"]
    }), "solid", "regular", "light", "thin", "duotone", "brands", "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", S.GROUP, S.SWAP_OPACITY, S.PRIMARY, S.SECONDARY].concat(w.map(t=>"".concat(t, "x"))).concat(A.map(t=>"w-".concat(t)))
      , t = {
        kit: "fak"
    }
      , w = {
        "kit-duotone": "fakd"
    }
      , A = "___FONT_AWESOME___";
    const C = 16
      , O = "svg-inline--fa"
      , P = "data-fa-i2svg"
      , F = "data-fa-pseudo-element"
      , E = "data-fa-pseudo-element-pending"
      , M = "data-prefix"
      , j = "data-icon"
      , z = "fontawesome-i2svg"
      , L = "async"
      , R = ["HTML", "HEAD", "STYLE", "SCRIPT"]
      , I = (()=>{
        try {
            return !0
        } catch (t) {
            return !1
        }
    }
    )()
      , D = [l, d, p];
    function T(t) {
        return new Proxy(t,{
            get(t, e) {
                return e in t ? t[e] : t[l]
            }
        })
    }
    const U = {
        ...k
    };
    U[l] = {
        ...k[l],
        ...v,
        ...b
    };
    const Y = T(U)
      , H = {
        classic: {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab"
        },
        sharp: {
            solid: "fass",
            regular: "fasr",
            light: "fasl",
            thin: "fast"
        },
        "sharp-duotone": {
            solid: "fasds"
        }
    };
    H[l] = {
        ...H[l],
        ...t,
        ...w
    };
    const W = T(H)
      , V = {
        classic: {
            fab: "fa-brands",
            fad: "fa-duotone",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin"
        },
        sharp: {
            fass: "fa-solid",
            fasr: "fa-regular",
            fasl: "fa-light",
            fast: "fa-thin"
        },
        "sharp-duotone": {
            fasds: "fa-solid"
        }
    };
    V[l] = {
        ...V[l],
        fak: "fa-kit"
    };
    const _ = T(V)
      , B = {
        classic: {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat"
        },
        sharp: {
            "fa-solid": "fass",
            "fa-regular": "fasr",
            "fa-light": "fasl",
            "fa-thin": "fast"
        },
        "sharp-duotone": {
            "fa-solid": "fasds"
        }
    };
    B[l] = {
        ...B[l],
        "fa-kit": "fak"
    };
    const G = T(B)
      , K = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/
      , X = "fa-layers-text"
      , q = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
    T({
        classic: {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat"
        },
        sharp: {
            900: "fass",
            400: "fasr",
            300: "fasl",
            100: "fast"
        },
        "sharp-duotone": {
            900: "fasds"
        }
    });
    const J = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]
      , Q = S
      , Z = new Set;
    Object.keys(W[l]).map(Z.add.bind(Z)),
    Object.keys(W[d]).map(Z.add.bind(Z)),
    Object.keys(W[p]).map(Z.add.bind(Z));
    const $ = ["kit", ...N]
      , tt = y.FontAwesomeConfig || {};
    if (x && "function" == typeof x.querySelector) {
        const ra = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
        ra.push(["data-auto-fetch-svg", "autoFetchSvg"], ["data-fetch-svg-from", "fetchSvgFrom"], ["data-fetch-uploaded-svg-from", "fetchUploadedSvgFrom"]),
        ra.forEach(t=>{
            var [e,t] = t
              , e = "" === (e = function(t) {
                var e = x.querySelector("script[" + t + "]");
                if (e)
                    return e.getAttribute(t)
            }(e)) || "false" !== e && ("true" === e || e);
            null != e && (tt[t] = e)
        }
        )
    }
    const et = {
        styleDefault: "solid",
        familyDefault: "classic",
        cssPrefix: "fa",
        replacementClass: O,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
        autoFetchSvg: !1,
        fetchSvgFrom: null,
        fetchUploadedSvgFrom: null
    };
    tt.familyPrefix && (tt.cssPrefix = tt.familyPrefix);
    const at = {
        ...et,
        ...tt
    };
    at.autoReplaceSvg || (at.observeMutations = !1);
    w = /\/js\/.*\.js.*/,
    S = 'Manually set config.fetchSvgFrom = "URL" or use <script data-fetch-svg-from="URL" ...> to explicitly configure.';
    if (at.autoFetchSvg && !at.fetchSvgFrom && x && x.currentScript) {
        const ia = x.currentScript.getAttribute("src");
        -1 < ia.search(w) && (I || console.info("Font Awesome SVG Auto-fetching URL has been determined using document.currentScript. This features is not supported in any version of Internet Explorer. ".concat(S)),
        at.fetchSvgFrom = ia.replace(w, "/svgs"))
    }
    if (at.fetchSvgFrom) {
        const l = x.createElement("a");
        l.href = at.fetchSvgFrom,
        at.fetchSvgFrom = l.href
    }
    !at.autoFetchSvg || at.fetchSvgFrom || I || (console.error("Disabling Font Awesome auto-fetching of SVG icons (it was enabled) because we could not guess the correct URL to load them from. ".concat(S)),
    at.autoFetchSvg = !1);
    const nt = {};
    Object.keys(et).forEach(e=>{
        Object.defineProperty(nt, e, {
            enumerable: !0,
            set: function(t) {
                at[e] = t,
                rt.forEach(t=>t(nt))
            },
            get: function() {
                return at[e]
            }
        })
    }
    ),
    Object.defineProperty(nt, "familyPrefix", {
        enumerable: !0,
        set: function(t) {
            at.cssPrefix = t,
            rt.forEach(t=>t(nt))
        },
        get: function() {
            return at.cssPrefix
        }
    }),
    y.FontAwesomeConfig = nt;
    const rt = [];
    const it = C
      , ot = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
    };
    const st = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    function ct() {
        let t = 12
          , e = "";
        for (; 0 < t--; )
            e += st[62 * Math.random() | 0];
        return e
    }
    function lt(e) {
        const a = [];
        for (let t = (e || []).length >>> 0; t--; )
            a[t] = e[t];
        return a
    }
    function ft(t) {
        return t.classList ? lt(t.classList) : (t.getAttribute("class") || "").split(" ").filter(t=>t)
    }
    function ut(t) {
        return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function mt(a) {
        return Object.keys(a || {}).reduce((t,e)=>t + "".concat(e, ": ").concat(a[e].trim(), ";"), "")
    }
    function dt(t) {
        return t.size !== ot.size || t.x !== ot.x || t.y !== ot.y || t.rotate !== ot.rotate || t.flipX || t.flipY
    }
    function pt() {
        var t, e, a = O, n = nt.cssPrefix, r = nt.replacementClass;
        let i = ':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Pro";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Pro";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Pro";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Pro";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands";--fa-font-sharp-solid:normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular:normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-light:normal 300 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-thin:normal 100 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-duotone-solid:normal 900 1em/1 "Font Awesome 6 Sharp Duotone"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);transform:scale(var(--fa-counter-scale,.25));transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(-1 * var(--fa-li-width,2em));position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{animation-name:fa-beat;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{animation-name:fa-bounce;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{animation-name:fa-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{animation-name:fa-beat-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{animation-name:fa-flip;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{animation-name:fa-shake;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{animation-name:fa-spin;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,2s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{animation-name:fa-spin;animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{animation-delay:-1ms;animation-duration:1ms;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-bounce{0%{transform:scale(1,1) translateY(0)}10%{transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{transform:scale(1,1) translateY(0)}100%{transform:scale(1,1) translateY(0)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);transform:scale(1)}50%{opacity:1;transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-flip{50%{transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}24%,8%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}100%,40%{transform:rotate(0)}}@keyframes fa-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scale(-1,1)}.fa-flip-vertical{transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1,-1)}.fa-rotate-by{transform:rotate(var(--fa-rotate-angle,0))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}';
        return "fa" === n && r === a || (t = new RegExp("\\.".concat("fa", "\\-"),"g"),
        e = new RegExp("\\--".concat("fa", "\\-"),"g"),
        a = new RegExp("\\.".concat(a),"g"),
        i = i.replace(t, ".".concat(n, "-")).replace(e, "--".concat(n, "-")).replace(a, ".".concat(r))),
        i
    }
    let ht = !1;
    function gt() {
        nt.autoAddCss && !ht && (function(t) {
            if (t && f) {
                const r = x.createElement("style");
                r.setAttribute("type", "text/css"),
                r.innerHTML = t;
                var a = x.head.childNodes;
                let e = null;
                for (let t = a.length - 1; -1 < t; t--) {
                    const i = a[t];
                    var n = (i.tagName || "").toUpperCase();
                    -1 < ["STYLE", "LINK"].indexOf(n) && (e = i)
                }
                x.head.insertBefore(r, e)
            }
        }(pt()),
        ht = !0)
    }
    N = {
        mixout() {
            return {
                dom: {
                    css: pt,
                    insertCss: gt
                }
            }
        },
        hooks() {
            return {
                beforeDOMElementCreation() {
                    gt()
                },
                beforeI2svg() {
                    gt()
                }
            }
        }
    };
    const vt = y || {};
    vt[A] || (vt[A] = {}),
    vt[A].styles || (vt[A].styles = {}),
    vt[A].hooks || (vt[A].hooks = {}),
    vt[A].shims || (vt[A].shims = []);
    var bt = vt[A];
    function yt() {
        x.removeEventListener("DOMContentLoaded", yt),
        kt = 1,
        xt.map(t=>t())
    }
    const xt = [];
    let kt = !1;
    function wt(t) {
        f && (kt ? setTimeout(t, 0) : xt.push(t))
    }
    function At(t) {
        const {tag: e, attributes: a={}, children: n=[]} = t;
        return "string" == typeof t ? ut(t) : "<".concat(e, " ").concat((r = a,
        Object.keys(r || {}).reduce((t,e)=>t + "".concat(e, '="').concat(ut(r[e]), '" '), "").trim()), ">").concat(n.map(At).join(""), "</").concat(e, ">");
        var r
    }
    function St(t, e, a) {
        if (t && t[e] && t[e][a])
            return {
                prefix: e,
                iconName: a,
                icon: t[e][a]
            }
    }
    f && (kt = (x.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(x.readyState),
    kt || x.addEventListener("DOMContentLoaded", yt));
    function Nt(t, e, a, n) {
        for (var r, i, o = Object.keys(t), s = o.length, c = void 0 !== n ? Ct(e, n) : e, l = void 0 === a ? (r = 1,
        t[o[0]]) : (r = 0,
        a); r < s; r++)
            l = c(l, t[i = o[r]], i, t);
        return l
    }
    var Ct = function(r, i) {
        return function(t, e, a, n) {
            return r.call(i, t, e, a, n)
        }
    };
    function Ot(t) {
        const e = function(t) {
            const e = [];
            let a = 0;
            for (var n = t.length; a < n; ) {
                var r, i = t.charCodeAt(a++);
                55296 <= i && i <= 56319 && a < n ? 56320 == (64512 & (r = t.charCodeAt(a++))) ? e.push(((1023 & i) << 10) + (1023 & r) + 65536) : (e.push(i),
                a--) : e.push(i)
            }
            return e
        }(t);
        return 1 === e.length ? e[0].toString(16) : null
    }
    function Pt(t, e) {
        var a, n = t.length, r = t.charCodeAt(e);
        return 55296 <= r && r <= 56319 && e + 1 < n && 56320 <= (a = t.charCodeAt(e + 1)) && a <= 57343 ? 1024 * (r - 55296) + a - 56320 + 65536 : r
    }
    function Ft(t) {
        if (1 === t.length) {
            t = Pt(t, 0);
            return 57344 <= t && t <= 63743
        }
    }
    function Et(n) {
        return Object.keys(n).reduce((t,e)=>{
            var a = n[e];
            return !!a.icon ? t[a.iconName] = a.icon : t[e] = a,
            t
        }
        , {})
    }
    function Mt(t, e, a) {
        var {skipHooks: n=!1} = 2 < arguments.length && void 0 !== a ? a : {}
          , a = Et(e);
        "function" != typeof bt.hooks.addPack || n ? bt.styles[t] = {
            ...bt.styles[t] || {},
            ...a
        } : bt.hooks.addPack(t, Et(e)),
        "fas" === t && Mt("fa", e)
    }
    const jt = /viewBox="0 0 ([0-9]+) ([0-9]+)"/
      , zt = /path d="([^"]+)"/
      , Lt = [/path d="(?<d1>[^"]+)".*path d="(?<d2>[^"]+)"/, /path class="(?<cls1>[^"]+)".*d="(?<d1>[^"]+)".*path class="(?<cls2>[^"]+)".*d="(?<d2>[^"]+)"/, /path class="(?<cls1>[^"]+)".*d="(?<d1>[^"]+)"/];
    const {styles: Rt, shims: It} = bt
      , Dt = {
        [l]: Object.values(_[l]),
        sharp: Object.values(_[d]),
        "sharp-duotone": Object.values(_[p])
    };
    let Tt = null
      , Ut = {}
      , Yt = {}
      , Ht = {}
      , Wt = {}
      , Vt = {};
    const _t = {
        [l]: Object.keys(Y[l]),
        sharp: Object.keys(Y[d]),
        "sharp-duotone": Object.keys(Y[p])
    };
    function Bt(t, e, a) {
        const n = function(t) {
            let e = null
              , a = null;
            var n = t.match(jt)
              , r = t.match(zt);
            if (t = t.match(Lt[0]) || t.match(Lt[1]) || t.match(Lt[2])) {
                const {cls1: i, d1: o, cls2: s, d2: c} = t.groups;
                o && c && !i && !s ? a = [o, c] : o && i && !c ? a = -1 < i.indexOf("primary") ? ["", o] : [o, ""] : o && c && i && s && (a = -1 < i.indexOf("primary") ? [c, o] : [o, c])
            } else
                r && 2 === r.length && (a = r[1]);
            return n && a && (e = [parseInt(n[1], 10), parseInt(n[2], 10), [], null, a]),
            e
        }(a);
        n && !Ft(e) && (Mt(t, {
            [e]: n
        }, {
            skipHooks: !0
        }),
        qt()),
        Gt[t][e].map(t=>{
            t(n)
        }
        ),
        delete Gt[t][e]
    }
    const Gt = {};
    function Kt(t, e) {
        return (Ft(t) || function(t) {
            if (1 === t.length) {
                t = Pt(t, 0);
                return 0 <= t && t <= 127
            }
        }(t) ? "unicode/".concat(Ot(t)) : "".concat(t)).concat(void 0 === e ? "" : "-".concat(e), ".svg")
    }
    function Xt(t, e) {
        const a = e.split("-");
        var n = a[0]
          , e = a.slice(1).join("-");
        return n !== t || "" === e || (t = e,
        ~$.indexOf(t)) ? null : e
    }
    const qt = ()=>{
        var t = n=>Nt(Rt, (t,e,a)=>(t[a] = Nt(e, n, {}),
        t), {});
        Ut = t((e,t,a)=>{
            if (t[3] && (e[t[3]] = a),
            t[2]) {
                const n = t[2].filter(t=>"number" == typeof t);
                n.forEach(t=>{
                    e[t.toString(16)] = a
                }
                )
            }
            return e
        }
        ),
        Yt = t((e,t,a)=>{
            if (e[a] = a,
            t[2]) {
                const n = t[2].filter(t=>"string" == typeof t);
                n.forEach(t=>{
                    e[t] = a
                }
                )
            }
            return e
        }
        ),
        Vt = t((e,t,a)=>{
            const n = t[2];
            return e[a] = a,
            n.forEach(t=>{
                e[t] = a
            }
            ),
            e
        }
        );
        const r = "far"in Rt || nt.autoFetchSvg;
        t = Nt(It, (t,e)=>{
            const a = e[0];
            let n = e[1];
            e = e[2];
            return "far" !== n || r || (n = "fas"),
            "string" == typeof a && (t.names[a] = {
                prefix: n,
                iconName: e
            }),
            "number" == typeof a && (t.unicodes[a.toString(16)] = {
                prefix: n,
                iconName: e
            }),
            t
        }
        , {
            names: {},
            unicodes: {}
        });
        Ht = t.names,
        Wt = t.unicodes,
        Tt = te(nt.styleDefault, {
            family: nt.familyDefault
        })
    }
    ;
    function Jt(t, e) {
        return (Ut[t] || {})[e]
    }
    function Qt(t, e) {
        return (Vt[t] || {})[e]
    }
    function Zt(t) {
        return Ht[t] || {
            prefix: null,
            iconName: null
        }
    }
    w = t=>{
        Tt = te(t.styleDefault, {
            family: nt.familyDefault
        })
    }
    ,
    rt.push(w),
    qt();
    const $t = ()=>({
        prefix: null,
        iconName: null,
        rest: []
    });
    function te(t, e) {
        var {family: a=l} = 1 < arguments.length && void 0 !== e ? e : {}
          , e = Y[a][t]
          , e = W[a][t] || W[a][e]
          , t = t in bt.styles ? t : null;
        return e || t || null
    }
    const ee = {
        [l]: Object.keys(_[l]),
        sharp: Object.keys(_[d]),
        "sharp-duotone": Object.keys(_[p])
    };
    function ae(t, e) {
        const {skipLookups: r=!1} = 1 < arguments.length && void 0 !== e ? e : {}
          , i = {
            [l]: "".concat(nt.cssPrefix, "-").concat(l),
            sharp: "".concat(nt.cssPrefix, "-").concat(d),
            "sharp-duotone": "".concat(nt.cssPrefix, "-").concat(p)
        };
        let o = null
          , s = l;
        const c = h.filter(t=>t !== m);
        c.forEach(e=>{
            (t.includes(i[e]) || t.some(t=>ee[e].includes(t))) && (s = e)
        }
        );
        const a = t.reduce((t,e)=>{
            var a, n = Xt(nt.cssPrefix, e);
            return Rt[e] ? (e = Dt[s].includes(e) ? G[s][e] : e,
            o = e,
            t.prefix = e) : -1 < _t[s].indexOf(e) ? (o = e,
            t.prefix = te(e, {
                family: s
            })) : n ? t.iconName = n : e === nt.replacementClass || c.some(t=>e === i[t]) || t.rest.push(e),
            !r && t.prefix && t.iconName && (a = "fa" === o ? Zt(t.iconName) : {},
            n = Qt(t.prefix, t.iconName),
            a.prefix && (o = null),
            t.iconName = a.iconName || n || t.iconName,
            t.prefix = a.prefix || t.prefix,
            "far" !== t.prefix || Rt.far || !Rt.fas || nt.autoFetchSvg || (t.prefix = "fas")),
            t
        }
        , $t());
        return (t.includes("fa-brands") || t.includes("fab")) && (a.prefix = "fab"),
        (t.includes("fa-duotone") || t.includes("fad")) && (a.prefix = "fad"),
        a.prefix || s !== d || !Rt.fass && !nt.autoFetchSvg || (a.prefix = "fass",
        a.iconName = Qt(a.prefix, a.iconName) || a.iconName),
        a.prefix || s !== p || !Rt.fasds && !nt.autoFetchSvg || (a.prefix = "fasds",
        a.iconName = Qt(a.prefix, a.iconName) || a.iconName),
        "fa" !== a.prefix && "fa" !== o || (a.prefix = Tt || "fas"),
        a
    }
    let ne = []
      , re = {};
    const ie = {}
      , oe = Object.keys(ie);
    function se(t, e) {
        for (var a = arguments.length, n = new Array(2 < a ? a - 2 : 0), r = 2; r < a; r++)
            n[r - 2] = arguments[r];
        const i = re[t] || [];
        return i.forEach(t=>{
            e = t.apply(null, [e, ...n])
        }
        ),
        e
    }
    function ce(t) {
        for (var e = arguments.length, a = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++)
            a[n - 1] = arguments[n];
        const r = re[t] || [];
        r.forEach(t=>{
            t.apply(null, a)
        }
        )
    }
    function le(t) {
        var e = t
          , t = Array.prototype.slice.call(arguments, 1);
        return ie[e] ? ie[e].apply(null, t) : void 0
    }
    function fe(t) {
        "fa" === t.prefix && (t.prefix = "fas");
        let e = t["iconName"];
        t = t.prefix || Tt;
        if (e)
            return e = Qt(t, e) || e,
            St(ue.definitions, t, e) || St(bt.styles, t, e)
    }
    const ue = new class {
        constructor() {
            this.definitions = {}
        }
        add() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++)
                e[a] = arguments[a];
            const n = e.reduce(this._pullDefinitions, {});
            Object.keys(n).forEach(t=>{
                this.definitions[t] = {
                    ...this.definitions[t] || {},
                    ...n[t]
                },
                Mt(t, n[t]);
                var e = _[l][t];
                e && Mt(e, n[t]),
                qt()
            }
            )
        }
        reset() {
            this.definitions = {}
        }
        _pullDefinitions(i, t) {
            const o = t.prefix && t.iconName && t.icon ? {
                0: t
            } : t;
            return Object.keys(o).map(t=>{
                const {prefix: e, iconName: a, icon: n} = o[t]
                  , r = n[2];
                i[e] || (i[e] = {}),
                0 < r.length && r.forEach(t=>{
                    "string" == typeof t && (i[e][t] = n)
                }
                ),
                i[e][a] = n
            }
            ),
            i
        }
    }
    ;
    const me = {
        noAuto: ()=>{
            nt.autoReplaceSvg = !1,
            nt.observeMutations = !1,
            ce("noAuto")
        }
        ,
        config: nt,
        dom: {
            i2svg: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return f ? (ce("beforeI2svg", t),
                le("pseudoElements2svg", t),
                le("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
            },
            watch: function() {
                let t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                const e = t["autoReplaceSvgRoot"];
                !1 === nt.autoReplaceSvg && (nt.autoReplaceSvg = !0),
                nt.observeMutations = !0,
                wt(()=>{
                    de({
                        autoReplaceSvgRoot: e
                    }),
                    ce("watch", t)
                }
                )
            }
        },
        parse: {
            icon: t=>{
                if (null === t)
                    return null;
                if ("object" == typeof t && t.prefix && t.iconName)
                    return {
                        prefix: t.prefix,
                        iconName: Qt(t.prefix, t.iconName) || t.iconName
                    };
                if (Array.isArray(t) && 2 === t.length) {
                    var e = 0 === t[1].indexOf("fa-") ? t[1].slice(3) : t[1]
                      , a = te(t[0]);
                    return {
                        prefix: a,
                        iconName: Qt(a, e) || e
                    }
                }
                if ("string" == typeof t && (-1 < t.indexOf("".concat(nt.cssPrefix, "-")) || t.match(K))) {
                    e = ae(t.split(" "), {
                        skipLookups: !0
                    });
                    return {
                        prefix: e.prefix || Tt,
                        iconName: Qt(e.prefix, e.iconName) || e.iconName
                    }
                }
                return "string" == typeof t ? {
                    prefix: Tt,
                    iconName: Qt(Tt, t) || t
                } : void 0
            }
        },
        library: ue,
        findIconDefinition: fe,
        toHtml: At
    }
      , de = function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
          , {autoReplaceSvgRoot: t=x} = t;
        (0 < Object.keys(bt.styles).length || nt.autoFetchSvg) && f && nt.autoReplaceSvg && me.dom.i2svg({
            node: t
        })
    };
    function pe(e, t) {
        return Object.defineProperty(e, "abstract", {
            get: t
        }),
        Object.defineProperty(e, "html", {
            get: function() {
                return e.abstract.map(t=>At(t))
            }
        }),
        Object.defineProperty(e, "node", {
            get: function() {
                if (f) {
                    const t = x.createElement("div");
                    return t.innerHTML = e.html,
                    t.children
                }
            }
        }),
        e
    }
    function he(t) {
        const {icons: {main: e, mask: a}, prefix: n, iconName: r, transform: i, symbol: o, title: s, maskId: c, titleId: l, extra: f, watchable: u=!1} = t;
        var {width: m, height: d} = a.found ? a : e
          , p = "fak" === n
          , t = [nt.replacementClass, r ? "".concat(nt.cssPrefix, "-").concat(r) : ""].filter(t=>-1 === f.classes.indexOf(t)).filter(t=>"" !== t || !!t).concat(f.classes).join(" ");
        let h = {
            children: [],
            attributes: {
                ...f.attributes,
                "data-prefix": n,
                "data-icon": r,
                class: t,
                role: f.attributes.role || "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 ".concat(m, " ").concat(d)
            }
        };
        m = p && !~f.classes.indexOf("fa-fw") ? {
            width: "".concat(m / d * 16 * .0625, "em")
        } : {};
        u && (h.attributes[P] = ""),
        s && (h.children.push({
            tag: "title",
            attributes: {
                id: h.attributes["aria-labelledby"] || "title-".concat(l || ct())
            },
            children: [s]
        }),
        delete h.attributes.title);
        const g = {
            ...h,
            prefix: n,
            iconName: r,
            main: e,
            mask: a,
            maskId: c,
            transform: i,
            symbol: o,
            styles: {
                ...m,
                ...f.styles
            }
        };
        var {children: d, attributes: m} = a.found && e.found ? le("generateAbstractMask", g) || {
            children: [],
            attributes: {}
        } : le("generateAbstractIcon", g) || {
            children: [],
            attributes: {}
        };
        return g.children = d,
        g.attributes = m,
        (o ? function(t) {
            var {prefix: e, iconName: a, children: n, attributes: r, symbol: t} = t
              , t = !0 === t ? "".concat(e, "-").concat(nt.cssPrefix, "-").concat(a) : t;
            return [{
                tag: "svg",
                attributes: {
                    style: "display: none;"
                },
                children: [{
                    tag: "symbol",
                    attributes: {
                        ...r,
                        id: t
                    },
                    children: n
                }]
            }]
        }
        : function(t) {
            let {children: e, main: a, mask: n, attributes: r, styles: i, transform: o} = t;
            if (dt(o) && a.found && !n.found) {
                var {width: s, height: t} = a;
                const c = s / t / 2
                  , l = .5;
                r.style = mt({
                    ...i,
                    "transform-origin": "".concat(c + o.x / 16, "em ").concat(l + o.y / 16, "em")
                })
            }
            return [{
                tag: "svg",
                attributes: r,
                children: e
            }]
        }
        )(g)
    }
    function ge(t) {
        const {content: e, width: a, height: n, transform: r, title: i, extra: o, watchable: s=!1} = t
          , c = {
            ...o.attributes,
            ...i ? {
                title: i
            } : {},
            class: o.classes.join(" ")
        };
        s && (c[P] = "");
        const l = {
            ...o.styles
        };
        dt(r) && (l.transform = function(t) {
            var {transform: e, width: a=C, height: n=C, startCentered: t=!1} = t;
            let r = "";
            return t && u ? r += "translate(".concat(e.x / it - a / 2, "em, ").concat(e.y / it - n / 2, "em) ") : r += t ? "translate(calc(-50% + ".concat(e.x / it, "em), calc(-50% + ").concat(e.y / it, "em)) ") : "translate(".concat(e.x / it, "em, ").concat(e.y / it, "em) "),
            r += "scale(".concat(e.size / it * (e.flipX ? -1 : 1), ", ").concat(e.size / it * (e.flipY ? -1 : 1), ") "),
            r += "rotate(".concat(e.rotate, "deg) "),
            r
        }({
            transform: r,
            startCentered: !0,
            width: a,
            height: n
        }),
        l["-webkit-transform"] = l.transform);
        t = mt(l);
        0 < t.length && (c.style = t);
        const f = [];
        return f.push({
            tag: "span",
            attributes: c,
            children: [e]
        }),
        i && f.push({
            tag: "span",
            attributes: {
                class: "sr-only"
            },
            children: [i]
        }),
        f
    }
    const ve = bt["styles"];
    function be(t) {
        var e = t[0]
          , a = t[1]
          , [t] = t.slice(4);
        let n = null;
        return n = Array.isArray(t) ? {
            tag: "g",
            attributes: {
                class: "".concat(nt.cssPrefix, "-").concat(Q.GROUP)
            },
            children: [{
                tag: "path",
                attributes: {
                    class: "".concat(nt.cssPrefix, "-").concat(Q.SECONDARY),
                    fill: "currentColor",
                    d: t[0]
                }
            }, {
                tag: "path",
                attributes: {
                    class: "".concat(nt.cssPrefix, "-").concat(Q.PRIMARY),
                    fill: "currentColor",
                    d: t[1]
                }
            }]
        } : {
            tag: "path",
            attributes: {
                fill: "currentColor",
                d: t
            }
        },
        {
            found: !0,
            width: e,
            height: a,
            icon: n
        }
    }
    const ye = {
        found: !1,
        width: 512,
        height: 512
    };
    function xe(t, e) {
        I || nt.showMissingIcons || !t || console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'))
    }
    function ke(i, o) {
        let s = o;
        return "fa" === o && null !== nt.styleDefault && (o = Tt),
        new Promise((e,t)=>{
            var a;
            if ("fa" === s && (a = Zt(i) || {},
            i = a.iconName || i,
            o = a.prefix || o),
            i && o && ve[o] && ve[o][i]) {
                var n = ve[o][i];
                return e(be(n))
            }
            const r = {};
            n = function(t, e) {
                t = 0 < arguments.length && void 0 !== t ? t : {};
                let a = 1 < arguments.length ? e : void 0;
                if (a && Ft(a)) {
                    if (t && t.iconUploads) {
                        const n = t.iconUploads;
                        e = Object.keys(n).find(t=>n[t] && n[t].u && n[t].u === Ot(a));
                        if (e)
                            return n[e].v
                    }
                } else if (t && t.iconUploads && t.iconUploads[a] && t.iconUploads[a].v)
                    return t.iconUploads[a].v
            }(y.FontAwesomeKitConfig, i);
            if (y.FontAwesomeKitConfig && y.FontAwesomeKitConfig.token && (r.token = y.FontAwesomeKitConfig.token),
            "fak" === o && (r.version = n),
            i && o && nt.autoFetchSvg)
                return function(n, r) {
                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    const i = "fak" === n;
                    let {url: o=nt.fetchSvgFrom, uploadedSvgUrl: s=nt.fetchUploadedSvgFrom, token: c, version: l} = t;
                    return Gt[n] && Gt[n][r] || (Gt[n] = {
                        ...Gt[n] || {},
                        [r]: []
                    }),
                    new Promise((e,t)=>{
                        if (!o)
                            return t(new Error("No URL available to fetch SVGs from. Specify in params or by setting config.fetchSvgFrom"));
                        if (i && !s)
                            return t(new Error("No URL available to fetch kit SVGs from. Specify in params or by setting config.fetchKitSvgFrom"));
                        let a = i ? "".concat(s, "/").concat(c, "/icons/").concat(Kt(r, l)) : "".concat(o, "/").concat(g[n], "/").concat(Kt(r));
                        if (c && (a = "".concat(a, "?token=").concat(c)),
                        bt.styles[n] && bt.styles[n][r])
                            return e(bt.styles[n][r]);
                        Gt[n][r].push(t=>{
                            e(t)
                        }
                        ),
                        1 === Gt[n][r].length && ("function" == typeof fetch ? fetch(a, {
                            mode: "cors"
                        }).then(t=>t.text()).then(t=>{
                            Bt(n, r, t)
                        }
                        ).catch(()=>{
                            Bt(n, r, "")
                        }
                        ) : Bt(n, r, ""))
                    }
                    )
                }(o, i, {
                    ...r
                }).then(t=>{
                    t ? e(be(t)) : (xe(i, o),
                    e({
                        ...ye,
                        icon: nt.showMissingIcons && i && le("missingIconAbstract") || {}
                    }))
                }
                ).catch(t);
            xe(i, o),
            e({
                ...ye,
                icon: nt.showMissingIcons && i && le("missingIconAbstract") || {}
            })
        }
        )
    }
    S = ()=>{}
    ;
    const we = nt.measurePerformance && o && o.mark && o.measure ? o : {
        mark: S,
        measure: S
    }
      , Ae = 'FA "6.6.0"';
    const Se = t=>{
        we.mark("".concat(Ae, " ").concat(t, " ends")),
        we.measure("".concat(Ae, " ").concat(t), "".concat(Ae, " ").concat(t, " begins"), "".concat(Ae, " ").concat(t, " ends"))
    }
    ;
    var Ne = {
        begin: t=>(we.mark("".concat(Ae, " ").concat(t, " begins")),
        ()=>Se(t)),
        end: Se
    };
    const Ce = ()=>{}
    ;
    function Oe(t) {
        return "string" == typeof (t.getAttribute ? t.getAttribute(P) : null)
    }
    function Pe(e, t) {
        const {ceFn: a="svg" === e.tag ? function(t) {
            return x.createElementNS("http://www.w3.org/2000/svg", t)
        }
        : function(t) {
            return x.createElement(t)
        }
        } = 1 < arguments.length && void 0 !== t ? t : {};
        if ("string" == typeof e)
            return x.createTextNode(e);
        const n = a(e.tag);
        Object.keys(e.attributes || []).forEach(function(t) {
            n.setAttribute(t, e.attributes[t])
        });
        const r = e.children || [];
        return r.forEach(function(t) {
            n.appendChild(Pe(t, {
                ceFn: a
            }))
        }),
        n
    }
    const Fe = {
        replace: function(t) {
            const e = t[0];
            e.parentNode && (t[1].forEach(t=>{
                e.parentNode.insertBefore(Pe(t), e)
            }
            ),
            null === e.getAttribute(P) && nt.keepOriginalSource ? (t = x.createComment((t = e,
            " ".concat(t.outerHTML, " "))),
            e.parentNode.replaceChild(t, e)) : e.remove())
        },
        nest: function(t) {
            const e = t[0]
              , a = t[1];
            if (~ft(e).indexOf(nt.replacementClass))
                return Fe.replace(t);
            const n = new RegExp("".concat(nt.cssPrefix, "-.*"));
            if (delete a[0].attributes.id,
            a[0].attributes.class) {
                const r = a[0].attributes.class.split(" ").reduce((t,e)=>((e === nt.replacementClass || e.match(n) ? t.toSvg : t.toNode).push(e),
                t), {
                    toNode: [],
                    toSvg: []
                });
                a[0].attributes.class = r.toSvg.join(" "),
                0 === r.toNode.length ? e.removeAttribute("class") : e.setAttribute("class", r.toNode.join(" "))
            }
            t = a.map(t=>At(t)).join("\n");
            e.setAttribute(P, ""),
            e.innerHTML = t
        }
    };
    function Ee(t) {
        t()
    }
    function Me(a, t) {
        const n = "function" == typeof t ? t : Ce;
        if (0 === a.length)
            n();
        else {
            let t = Ee;
            nt.mutateApproach === L && (t = y.requestAnimationFrame || Ee),
            t(()=>{
                var t = !0 !== nt.autoReplaceSvg && Fe[nt.autoReplaceSvg] || Fe.replace;
                const e = Ne.begin("mutate");
                a.map(t),
                e(),
                n()
            }
            )
        }
    }
    let je = !1;
    function ze() {
        je = !0
    }
    function Le() {
        je = !1
    }
    let Re = null;
    function Ie(t) {
        if (!c)
            return;
        if (!nt.observeMutations)
            return;
        const {treeCallback: i=Ce, nodeCallback: o=Ce, pseudoElementsCallback: s=Ce, observeMutationsRoot: e=x} = t;
        Re = new c(t=>{
            if (!je) {
                const r = Tt;
                lt(t).forEach(t=>{
                    var e, a, n;
                    "childList" === t.type && 0 < t.addedNodes.length && !Oe(t.addedNodes[0]) && (nt.searchPseudoElements && s(t.target),
                    i(t.target)),
                    "attributes" === t.type && t.target.parentNode && nt.searchPseudoElements && s(t.target.parentNode),
                    "attributes" === t.type && Oe(t.target) && ~J.indexOf(t.attributeName) && ("class" === t.attributeName && (a = t.target,
                    n = a.getAttribute ? a.getAttribute(M) : null,
                    a = a.getAttribute ? a.getAttribute(j) : null,
                    n && a) ? ({prefix: a, iconName: e} = ae(ft(t.target)),
                    t.target.setAttribute(M, a || r),
                    e && t.target.setAttribute(j, e)) : (e = t.target) && e.classList && e.classList.contains && e.classList.contains(nt.replacementClass) && o(t.target))
                }
                )
            }
        }
        ),
        f && Re.observe(e, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        })
    }
    function De(t) {
        var e = t.getAttribute("data-prefix")
          , a = t.getAttribute("data-icon")
          , n = void 0 !== t.innerText ? t.innerText.trim() : "";
        let r = ae(ft(t));
        return r.prefix || (r.prefix = Tt),
        e && a && (r.prefix = e,
        r.iconName = a),
        r.iconName && r.prefix || (r.prefix && 0 < n.length && (r.iconName = (a = r.prefix,
        n = t.innerText,
        (Yt[a] || {})[n] || Jt(r.prefix, Ot(t.innerText)))),
        !r.iconName && nt.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t.firstChild.data)),
        r
    }
    function Te(t, e) {
        var a = 1 < arguments.length && void 0 !== e ? e : {
            styleParser: !0
        }
          , {iconName: n, prefix: r, rest: i} = De(t)
          , o = function(t) {
            const e = lt(t.attributes).reduce((t,e)=>("class" !== t.name && "style" !== t.name && (t[e.name] = e.value),
            t), {});
            var a = t.getAttribute("title")
              , t = t.getAttribute("data-fa-title-id");
            return nt.autoA11y && (a ? e["aria-labelledby"] = "".concat(nt.replacementClass, "-title-").concat(t || ct()) : (e["aria-hidden"] = "true",
            e.focusable = "false")),
            e
        }(t)
          , e = se("parseNodeAttributes", {}, t)
          , a = a.styleParser ? function(t) {
            const e = t.getAttribute("style");
            let a = [];
            return e && (a = e.split(";").reduce((t,e)=>{
                const a = e.split(":");
                e = a[0];
                const n = a.slice(1);
                return e && 0 < n.length && (t[e] = n.join(":").trim()),
                t
            }
            , {})),
            a
        }(t) : [];
        return {
            iconName: n,
            title: t.getAttribute("title"),
            titleId: t.getAttribute("data-fa-title-id"),
            prefix: r,
            transform: ot,
            mask: {
                iconName: null,
                prefix: null,
                rest: []
            },
            maskId: null,
            symbol: !1,
            extra: {
                classes: i,
                styles: a,
                attributes: o
            },
            ...e
        }
    }
    const Ue = bt["styles"];
    function Ye(t) {
        const e = "nest" === nt.autoReplaceSvg ? Te(t, {
            styleParser: !1
        }) : Te(t);
        return ~e.extra.classes.indexOf(X) ? le("generateLayersText", t, e) : le("generateSvgReplacementMutation", t, e)
    }
    let He = new Set;
    function We(t) {
        let n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if (!f)
            return Promise.resolve();
        const e = x.documentElement.classList
          , r = t=>e.add("".concat(z, "-").concat(t))
          , i = t=>e.remove("".concat(z, "-").concat(t))
          , a = nt.autoFetchSvg ? He : D.map(t=>"fa-".concat(t)).concat(Object.keys(Ue));
        a.includes("fa") || a.push("fa");
        var o = [".".concat(X, ":not([").concat(P, "])")].concat(a.map(t=>".".concat(t, ":not([").concat(P, "])"))).join(", ");
        if (0 === o.length)
            return Promise.resolve();
        let s = [];
        try {
            s = lt(t.querySelectorAll(o))
        } catch (t) {}
        if (!(0 < s.length))
            return Promise.resolve();
        r("pending"),
        i("complete");
        const c = Ne.begin("onTree")
          , l = s.reduce((t,e)=>{
            try {
                var a = Ye(e);
                a && t.push(a)
            } catch (t) {
                I || "MissingIcon" === t.name && console.error(t)
            }
            return t
        }
        , []);
        return new Promise((e,a)=>{
            Promise.all(l).then(t=>{
                Me(t, ()=>{
                    r("active"),
                    r("complete"),
                    i("pending"),
                    "function" == typeof n && n(),
                    c(),
                    e()
                }
                )
            }
            ).catch(t=>{
                c(),
                a(t)
            }
            )
        }
        )
    }
    function Ve(t) {
        let e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        Ye(t).then(t=>{
            t && Me([t], e)
        }
        )
    }
    D.map(t=>{
        He.add("fa-".concat(t))
    }
    ),
    Object.keys(Y[l]).map(He.add.bind(He)),
    Object.keys(Y[d]).map(He.add.bind(He)),
    Object.keys(Y[p]).map(He.add.bind(He)),
    He = [...He];
    function _e(t) {
        let e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        const {transform: a=ot, symbol: n=!1, mask: r=null, maskId: i=null, title: o=null, titleId: s=null, classes: c=[], attributes: l={}, styles: f={}} = e;
        if (t) {
            const {prefix: u, iconName: m, icon: d} = t;
            return pe({
                type: "icon",
                ...t
            }, ()=>(ce("beforeDOMElementCreation", {
                iconDefinition: t,
                params: e
            }),
            nt.autoA11y && (o ? l["aria-labelledby"] = "".concat(nt.replacementClass, "-title-").concat(s || ct()) : (l["aria-hidden"] = "true",
            l.focusable = "false")),
            he({
                icons: {
                    main: be(d),
                    mask: r ? be(r.icon) : {
                        found: !1,
                        width: null,
                        height: null,
                        icon: {}
                    }
                },
                prefix: u,
                iconName: m,
                transform: {
                    ...ot,
                    ...a
                },
                symbol: n,
                title: o,
                maskId: i,
                titleId: s,
                extra: {
                    attributes: l,
                    styles: f,
                    classes: c
                }
            })))
        }
    }
    A = {
        mixout() {
            return {
                icon: (n = _e,
                function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                      , t = (t || {}).icon ? t : fe(t || {});
                    let a = e["mask"];
                    return a = a && ((a || {}).icon ? a : fe(a || {})),
                    n(t, {
                        ...e,
                        mask: a
                    })
                }
                )
            };
            var n
        },
        hooks() {
            return {
                mutationObserverCallbacks(t) {
                    return t.treeCallback = We,
                    t.nodeCallback = Ve,
                    t
                }
            }
        },
        provides(t) {
            t.i2svg = function(t) {
                var {node: e=x, callback: t=()=>{}
                } = t;
                return We(e, t)
            }
            ,
            t.generateSvgReplacementMutation = function(n, t) {
                const {iconName: r, title: i, titleId: o, prefix: s, transform: c, symbol: l, mask: e, maskId: f, extra: u} = t;
                return new Promise((a,t)=>{
                    Promise.all([ke(r, s), e.iconName ? ke(e.iconName, e.prefix) : Promise.resolve({
                        found: !1,
                        width: 512,
                        height: 512,
                        icon: {}
                    })]).then(t=>{
                        var [e,t] = t;
                        a([n, he({
                            icons: {
                                main: e,
                                mask: t
                            },
                            prefix: s,
                            iconName: r,
                            transform: c,
                            symbol: l,
                            maskId: f,
                            title: i,
                            titleId: o,
                            extra: u,
                            watchable: !0
                        })])
                    }
                    ).catch(t)
                }
                )
            }
            ,
            t.generateAbstractIcon = function(t) {
                let {children: e, attributes: a, main: n, transform: r, styles: i} = t;
                t = mt(i);
                0 < t.length && (a.style = t);
                let o;
                return dt(r) && (o = le("generateAbstractTransformGrouping", {
                    main: n,
                    transform: r,
                    containerWidth: n.width,
                    iconWidth: n.width
                })),
                e.push(o || n.icon),
                {
                    children: e,
                    attributes: a
                }
            }
        }
    },
    w = {
        mixout() {
            return {
                layer(t) {
                    let a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    const {classes: n=[]} = a;
                    return pe({
                        type: "layer"
                    }, ()=>{
                        ce("beforeDOMElementCreation", {
                            assembler: t,
                            params: a
                        });
                        let e = [];
                        return t(t=>{
                            Array.isArray(t) ? t.map(t=>{
                                e = e.concat(t.abstract)
                            }
                            ) : e = e.concat(t.abstract)
                        }
                        ),
                        [{
                            tag: "span",
                            attributes: {
                                class: ["".concat(nt.cssPrefix, "-layers"), ...n].join(" ")
                            },
                            children: e
                        }]
                    }
                    )
                }
            }
        }
    },
    o = {
        mixout() {
            return {
                counter(t) {
                    let e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    const {title: a=null, classes: n=[], attributes: r={}, styles: i={}} = e;
                    return pe({
                        type: "counter",
                        content: t
                    }, ()=>(ce("beforeDOMElementCreation", {
                        content: t,
                        params: e
                    }),
                    function(t) {
                        const {content: e, title: a, extra: n} = t
                          , r = {
                            ...n.attributes,
                            ...a ? {
                                title: a
                            } : {},
                            class: n.classes.join(" ")
                        };
                        0 < (t = mt(n.styles)).length && (r.style = t);
                        const i = [];
                        return i.push({
                            tag: "span",
                            attributes: r,
                            children: [e]
                        }),
                        a && i.push({
                            tag: "span",
                            attributes: {
                                class: "sr-only"
                            },
                            children: [a]
                        }),
                        i
                    }({
                        content: t.toString(),
                        title: a,
                        extra: {
                            attributes: r,
                            styles: i,
                            classes: ["".concat(nt.cssPrefix, "-layers-counter"), ...n]
                        }
                    })))
                }
            }
        }
    },
    S = {
        mixout() {
            return {
                text(t) {
                    let e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    const {transform: a=ot, title: n=null, classes: r=[], attributes: i={}, styles: o={}} = e;
                    return pe({
                        type: "text",
                        content: t
                    }, ()=>(ce("beforeDOMElementCreation", {
                        content: t,
                        params: e
                    }),
                    ge({
                        content: t,
                        transform: {
                            ...ot,
                            ...a
                        },
                        title: n,
                        extra: {
                            attributes: i,
                            styles: o,
                            classes: ["".concat(nt.cssPrefix, "-layers-text"), ...r]
                        }
                    })))
                }
            }
        },
        provides(t) {
            t.generateLayersText = function(t, e) {
                const {title: a, transform: n, extra: r} = e;
                let i = null
                  , o = null;
                var s;
                return u && (s = parseInt(getComputedStyle(t).fontSize, 10),
                e = t.getBoundingClientRect(),
                i = e.width / s,
                o = e.height / s),
                nt.autoA11y && !a && (r.attributes["aria-hidden"] = "true"),
                Promise.resolve([t, ge({
                    content: t.innerHTML,
                    width: i,
                    height: o,
                    transform: n,
                    title: a,
                    extra: r,
                    watchable: !0
                })])
            }
        }
    };
    const Be = new RegExp('"',"ug")
      , Ge = [1105920, 1112319]
      , Ke = {
        FontAwesome: {
            normal: "fas",
            400: "fas"
        },
        "Font Awesome 6 Free": {
            900: "fas",
            400: "far"
        },
        "Font Awesome 6 Pro": {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat"
        },
        "Font Awesome 6 Brands": {
            400: "fab",
            normal: "fab"
        },
        "Font Awesome 6 Duotone": {
            900: "fad"
        },
        "Font Awesome 6 Sharp": {
            900: "fass",
            400: "fasr",
            normal: "fasr",
            300: "fasl",
            100: "fast"
        },
        "Font Awesome 6 Sharp Duotone": {
            900: "fasds"
        },
        "Font Awesome 5 Free": {
            900: "fas",
            400: "far"
        },
        "Font Awesome 5 Pro": {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal"
        },
        "Font Awesome 5 Brands": {
            400: "fab",
            normal: "fab"
        },
        "Font Awesome 5 Duotone": {
            900: "fad"
        },
        "Font Awesome Kit": {
            400: "fak",
            normal: "fak"
        },
        "Font Awesome Kit Duotone": {
            400: "fakd",
            normal: "fakd"
        }
    }
      , Xe = Object.keys(Ke).reduce((t,e)=>(t[e.toLowerCase()] = Ke[e],
    t), {})
      , qe = Object.keys(Xe).reduce((t,e)=>{
        var a = Xe[e];
        return t[e] = a[900] || [...Object.entries(a)][0][1],
        t
    }
    , {});
    function Je(g, v) {
        const b = "".concat(E).concat(v.replace(":", "-"));
        return new Promise((i,e)=>{
            if (null !== g.getAttribute(b))
                return i();
            const t = lt(g.children)
              , a = t.filter(t=>t.getAttribute(F) === v)[0]
              , o = y.getComputedStyle(g, v)
              , s = o.getPropertyValue("font-family")
              , c = s.match(q);
            var l = o.getPropertyValue("font-weight");
            const f = o.getPropertyValue("content");
            if (a && !c)
                return g.removeChild(a),
                i();
            if (c && "none" !== f && "" !== f) {
                const f = o.getPropertyValue("content");
                let n = (m = s,
                u = l,
                m = m.replace(/^['"]|['"]$/g, "").toLowerCase(),
                u = parseInt(u),
                u = isNaN(u) ? "normal" : u,
                (Xe[m] || {})[u] || qe[m]);
                var u, {value: m, isSecondary: l} = (d = f,
                l = d.replace(Be, ""),
                u = Pt(l, 0),
                d = u >= Ge[0] && u <= Ge[1],
                {
                    value: Ot((u = 2 === l.length && l[0] === l[1]) ? l[0] : l),
                    isSecondary: d || u
                }), d = c[0].startsWith("FontAwesome");
                let t = Jt(n, m)
                  , r = t;
                if (d && (u = m,
                d = Wt[u],
                u = Jt("fas", u),
                (u = d || (u ? {
                    prefix: "fas",
                    iconName: u
                } : null) || {
                    prefix: null,
                    iconName: null
                }).iconName && u.prefix && (t = u.iconName,
                n = u.prefix)),
                r = r || m,
                t = t || String.fromCharCode(parseInt(m, 16)),
                !t || l || a && a.getAttribute(M) === n && a.getAttribute(j) === r)
                    i();
                else {
                    g.setAttribute(b, r),
                    a && g.removeChild(a);
                    const p = {
                        iconName: null,
                        title: null,
                        titleId: null,
                        prefix: null,
                        transform: ot,
                        symbol: !1,
                        mask: {
                            iconName: null,
                            prefix: null,
                            rest: []
                        },
                        maskId: null,
                        extra: {
                            classes: [],
                            styles: {},
                            attributes: {}
                        }
                    }
                      , h = p["extra"];
                    h.attributes[F] = v,
                    ke(t, n).then(t=>{
                        const e = he({
                            ...p,
                            icons: {
                                main: t,
                                mask: $t()
                            },
                            prefix: n,
                            iconName: r,
                            extra: h,
                            watchable: !0
                        })
                          , a = x.createElementNS("http://www.w3.org/2000/svg", "svg");
                        "::before" === v ? g.insertBefore(a, g.firstChild) : g.appendChild(a),
                        a.outerHTML = e.map(t=>At(t)).join("\n"),
                        g.removeAttribute(b),
                        i()
                    }
                    ).catch(e)
                }
            } else
                i()
        }
        )
    }
    function Qe(t) {
        return Promise.all([Je(t, "::before"), Je(t, "::after")])
    }
    function Ze(t) {
        return !(t.parentNode === document.head || ~R.indexOf(t.tagName.toUpperCase()) || t.getAttribute(F) || t.parentNode && "svg" === t.parentNode.tagName)
    }
    function $e(r) {
        if (f)
            return new Promise((t,e)=>{
                var a = lt(r.querySelectorAll("*")).filter(Ze).map(Qe);
                const n = Ne.begin("searchPseudoElements");
                ze(),
                Promise.all(a).then(()=>{
                    n(),
                    Le(),
                    t()
                }
                ).catch(()=>{
                    n(),
                    Le(),
                    e()
                }
                )
            }
            )
    }
    let ta = !1;
    const ea = t=>{
        return t.toLowerCase().split(" ").reduce((t,e)=>{
            const a = e.toLowerCase().split("-");
            e = a[0];
            let n = a.slice(1).join("-");
            if (e && "h" === n)
                return t.flipX = !0,
                t;
            if (e && "v" === n)
                return t.flipY = !0,
                t;
            if (n = parseFloat(n),
            isNaN(n))
                return t;
            switch (e) {
            case "grow":
                t.size = t.size + n;
                break;
            case "shrink":
                t.size = t.size - n;
                break;
            case "left":
                t.x = t.x - n;
                break;
            case "right":
                t.x = t.x + n;
                break;
            case "up":
                t.y = t.y - n;
                break;
            case "down":
                t.y = t.y + n;
                break;
            case "rotate":
                t.rotate = t.rotate + n
            }
            return t
        }
        , {
            size: 16,
            x: 0,
            y: 0,
            flipX: !1,
            flipY: !1,
            rotate: 0
        })
    }
      , aa = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    };
    function na(t) {
        return t.attributes && (t.attributes.fill || (!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1])) && (t.attributes.fill = "black"),
        t
    }
    !function(t, e) {
        let n = e["mixoutsTo"];
        ne = t,
        re = {},
        Object.keys(ie).forEach(t=>{
            -1 === oe.indexOf(t) && delete ie[t]
        }
        ),
        ne.forEach(t=>{
            const a = t.mixout ? t.mixout() : {};
            if (Object.keys(a).forEach(e=>{
                "function" == typeof a[e] && (n[e] = a[e]),
                "object" == typeof a[e] && Object.keys(a[e]).forEach(t=>{
                    n[e] || (n[e] = {}),
                    n[e][t] = a[e][t]
                }
                )
            }
            ),
            t.hooks) {
                const e = t.hooks();
                Object.keys(e).forEach(t=>{
                    re[t] || (re[t] = []),
                    re[t].push(e[t])
                }
                )
            }
            t.provides && t.provides(ie)
        }
        ),
        n
    }([N, A, w, o, S, {
        hooks() {
            return {
                mutationObserverCallbacks(t) {
                    return t.pseudoElementsCallback = $e,
                    t
                }
            }
        },
        provides(t) {
            t.pseudoElements2svg = function(t) {
                var {node: t=x} = t;
                nt.searchPseudoElements && $e(t)
            }
        }
    }, {
        mixout() {
            return {
                dom: {
                    unwatch() {
                        ze(),
                        ta = !0
                    }
                }
            }
        },
        hooks() {
            return {
                bootstrap() {
                    Ie(se("mutationObserverCallbacks", {}))
                },
                noAuto() {
                    Re && Re.disconnect()
                },
                watch(t) {
                    t = t.observeMutationsRoot;
                    ta ? Le() : Ie(se("mutationObserverCallbacks", {
                        observeMutationsRoot: t
                    }))
                }
            }
        }
    }, {
        mixout() {
            return {
                parse: {
                    transform: t=>ea(t)
                }
            }
        },
        hooks() {
            return {
                parseNodeAttributes(t, e) {
                    e = e.getAttribute("data-fa-transform");
                    return e && (t.transform = ea(e)),
                    t
                }
            }
        },
        provides(t) {
            t.generateAbstractTransformGrouping = function(t) {
                var {main: e, transform: a, containerWidth: n, iconWidth: r} = t
                  , i = {
                    transform: "translate(".concat(n / 2, " 256)")
                }
                  , t = "translate(".concat(32 * a.x, ", ").concat(32 * a.y, ") ")
                  , n = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") ")
                  , a = "rotate(".concat(a.rotate, " 0 0)");
                const o = i
                  , s = {
                    transform: "".concat(t, " ").concat(n, " ").concat(a)
                }
                  , c = {
                    transform: "translate(".concat(r / 2 * -1, " -256)")
                };
                return {
                    tag: "g",
                    attributes: {
                        ...o
                    },
                    children: [{
                        tag: "g",
                        attributes: {
                            ...s
                        },
                        children: [{
                            tag: e.icon.tag,
                            children: e.icon.children,
                            attributes: {
                                ...e.icon.attributes,
                                ...c
                            }
                        }]
                    }]
                }
            }
        }
    }, {
        hooks() {
            return {
                parseNodeAttributes(t, e) {
                    const a = e.getAttribute("data-fa-mask")
                      , n = a ? ae(a.split(" ").map(t=>t.trim())) : $t();
                    return n.prefix || (n.prefix = Tt),
                    t.mask = n,
                    t.maskId = e.getAttribute("data-fa-mask-id"),
                    t
                }
            }
        },
        provides(t) {
            t.generateAbstractMask = function(t) {
                let {children: e, attributes: a, main: n, mask: r, maskId: i, transform: o} = t;
                const {width: s, icon: c} = n;
                var {width: l, icon: f} = r
                  , u = function(t) {
                    var {transform: e, containerWidth: a, iconWidth: n} = t
                      , r = {
                        transform: "translate(".concat(a / 2, " 256)")
                    }
                      , t = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") ")
                      , a = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") ")
                      , e = "rotate(".concat(e.rotate, " 0 0)");
                    return {
                        outer: r,
                        inner: {
                            transform: "".concat(t, " ").concat(a, " ").concat(e)
                        },
                        path: {
                            transform: "translate(".concat(n / 2 * -1, " -256)")
                        }
                    }
                }({
                    transform: o,
                    containerWidth: l,
                    iconWidth: s
                })
                  , m = {
                    tag: "rect",
                    attributes: {
                        ...aa,
                        fill: "white"
                    }
                }
                  , t = c.children ? {
                    children: c.children.map(na)
                } : {}
                  , l = {
                    tag: "g",
                    attributes: {
                        ...u.inner
                    },
                    children: [na({
                        tag: c.tag,
                        attributes: {
                            ...c.attributes,
                            ...u.path
                        },
                        ...t
                    })]
                }
                  , t = {
                    tag: "g",
                    attributes: {
                        ...u.outer
                    },
                    children: [l]
                }
                  , u = "mask-".concat(i || ct())
                  , l = "clip-".concat(i || ct())
                  , t = {
                    tag: "mask",
                    attributes: {
                        ...aa,
                        id: u,
                        maskUnits: "userSpaceOnUse",
                        maskContentUnits: "userSpaceOnUse"
                    },
                    children: [m, t]
                }
                  , t = {
                    tag: "defs",
                    children: [{
                        tag: "clipPath",
                        attributes: {
                            id: l
                        },
                        children: "g" === (f = f).tag ? f.children : [f]
                    }, t]
                };
                return e.push(t, {
                    tag: "rect",
                    attributes: {
                        fill: "currentColor",
                        "clip-path": "url(#".concat(l, ")"),
                        mask: "url(#".concat(u, ")"),
                        ...aa
                    }
                }),
                {
                    children: e,
                    attributes: a
                }
            }
        }
    }, {
        provides(t) {
            let i = !1;
            y.matchMedia && (i = y.matchMedia("(prefers-reduced-motion: reduce)").matches),
            t.missingIconAbstract = function() {
                const t = [];
                var e = {
                    fill: "currentColor"
                }
                  , a = {
                    attributeType: "XML",
                    repeatCount: "indefinite",
                    dur: "2s"
                };
                t.push({
                    tag: "path",
                    attributes: {
                        ...e,
                        d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                    }
                });
                var n = {
                    ...a,
                    attributeName: "opacity"
                };
                const r = {
                    tag: "circle",
                    attributes: {
                        ...e,
                        cx: "256",
                        cy: "364",
                        r: "28"
                    },
                    children: []
                };
                return i || r.children.push({
                    tag: "animate",
                    attributes: {
                        ...a,
                        attributeName: "r",
                        values: "28;14;28;28;14;28;"
                    }
                }, {
                    tag: "animate",
                    attributes: {
                        ...n,
                        values: "1;0;1;1;0;1;"
                    }
                }),
                t.push(r),
                t.push({
                    tag: "path",
                    attributes: {
                        ...e,
                        opacity: "1",
                        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                    },
                    children: i ? [] : [{
                        tag: "animate",
                        attributes: {
                            ...n,
                            values: "1;0;0;0;0;1;"
                        }
                    }]
                }),
                i || t.push({
                    tag: "path",
                    attributes: {
                        ...e,
                        opacity: "0",
                        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                    },
                    children: [{
                        tag: "animate",
                        attributes: {
                            ...n,
                            values: "0;0;1;1;0;0;"
                        }
                    }]
                }),
                {
                    tag: "g",
                    attributes: {
                        class: "missing"
                    },
                    children: t
                }
            }
        }
    }, {
        hooks() {
            return {
                parseNodeAttributes(t, e) {
                    e = e.getAttribute("data-fa-symbol");
                    return t.symbol = null !== e && ("" === e || e),
                    t
                }
            }
        }
    }], {
        mixoutsTo: me
    }),
    function(t) {
        try {
            for (var e = arguments.length, a = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++)
                a[n - 1] = arguments[n];
            t(...a)
        } catch (t) {
            if (!I)
                throw t
        }
    }(function(t) {
        s && (y.FontAwesome || (y.FontAwesome = me),
        wt(()=>{
            de(),
            ce("bootstrap")
        }
        )),
        bt.hooks = {
            ...bt.hooks,
            addPack: (t,e)=>{
                bt.styles[t] = {
                    ...bt.styles[t] || {},
                    ...e
                },
                qt(),
                de()
            }
            ,
            addPacks: t=>{
                t.forEach(t=>{
                    var [e,t] = t;
                    bt.styles[e] = {
                        ...bt.styles[e] || {},
                        ...t
                    }
                }
                ),
                qt(),
                de()
            }
            ,
            addShims: t=>{
                bt.shims.push(...t),
                qt(),
                de()
            }
        }
    })
}();
