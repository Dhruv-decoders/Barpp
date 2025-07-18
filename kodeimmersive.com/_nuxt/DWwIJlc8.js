import Te from "./EOBYE-xC.js";
import {
    _ as D,
    s as d,
    k as X,
    p as Ve,
    q as fe,
    j as be,
    h as ee,
    aD as ne,
    I as G,
    a2 as j,
    o as O,
    w as c,
    a as e,
    b as l,
    e as ie,
    Z as t,
    C as P,
    E as A,
    d as p,
    t as pe,
    a8 as q,
    a7 as $e,
    J as o,
    A as ye,
    a3 as le,
    aF as ce,
    v as ke,
    x as ge,
    c as z,
    ad as _e,
    aG as Ce,
    l as ae,
    m as Ne,
    i as he,
    aH as ve,
    ab as de,
    aI as we,
    aJ as Se,
    aa as Y,
    aK as se,
    B as T,
    n as Oe,
    a1 as xe,
    ac as Me
} from "./DRwXc3fR.js";
import ue from "./CxVmN9ol.js";
import me from "./BxRX0Qpb.js";
import {
    u as Pe
} from "./CI8pHMb7.js";
import {
    _ as Ae
} from "./Dk9mXss7.js";
import {
    _ as Be
} from "./DhyUotyb.js";
const Le = {
        class: "inner | text-white",
        "data-site-header-white": ""
    },
    He = {
        class: "scroller | body-5"
    },
    Ue = {
        class: "inner | text-black",
        style: {
            "clip-path": "polygon(0 0, 0 0, 0 0, 0 0)"
        },
        "aria-hidden": "true",
        "data-site-header-black": ""
    },
    ze = {
        class: "buttons"
    },
    Qe = {
        class: "scroller | body-5"
    },
    Ie = {
        class: "lettering | body-1"
    },
    Ke = {
        __name: "Header",
        setup(Z) {
            const m = d(null),
                y = d(null),
                k = d(null),
                w = d(null),
                V = d(null),
                S = d(null),
                f = d(null),
                g = d(null),
                {
                    gsap: b
                } = X(),
                {
                    height: $,
                    width: _
                } = Ve(),
                {
                    width: B
                } = fe(m),
                E = be(),
                v = ee(),
                L = ne(() => ye("alt_layout")),
                C = ne(() => {
                    const u = b.utils.mapRange(0, 1, 1, 100, E.getProgress);
                    return parseInt(u).toString().padStart(3, "0");
                }),
                H = ne(() => `translateY(calc(${o($)}px * ${E.getProgress} - calc(100% * ${E.getProgress})))`);
            G(() => v.getHeaderAnimationProgress, (u) => {
                const r = window.matchMedia("(max-width: 767px)").matches ? 20 : 44;
                b.set(o(y).$el, {
                    scale: () => 1 + ((o(_) - r) / o(B) - 1) * u
                }), b.set([o(k).$el, o(w), o(V), o(S), o(f), o(g)], {
                    opacity: () => 1 - ce(0, 0.35, u),
                    pointerEvents: () => ce(0, 0.35, u) === 1 ? "none" : "auto"
                });
            });
            const x = () => {
                v.setMobileMenuVisible(!v.isMobileMenuVisible);
                const u = E.getProgress < 0.9 ? 0.1 : -0.1;
                for (const r of [o(f), o(g)]) b.fromTo(r.querySelectorAll("li"), {
                    opacity: () => v.isMobileMenuVisible ? 0 : 1,
                    yPercent: () => v.isMobileMenuVisible ? 40 : 0
                }, {
                    opacity: () => v.isMobileMenuVisible ? 1 : 0,
                    yPercent: 0,
                    stagger: u,
                    duration: 0.3,
                    overwrite: true
                });
            };
            return (u, r) => {
                const N = ie,
                    M = ue,
                    Q = me,
                    K = le;
                return O(), j(K, {
                    tag: "header",
                    class: "site-header",
                    style: $e({
                        transform: t(H)
                    }),
                    "data-alt-layout": t(L)
                }, {
                    default: c(() => [e("div", Le, [l(N, {
                        class: "logo link | body-1",
                        to: "https://kodemedia.com",
                        target: "_blank",
                        rel: "noopener",
                        ref_key: "logoLinkRef",
                        ref: k,
                        onPointerenter: r[0] || (r[0] = (R) => ("emitter" in u ? u.emitter : t(P)).emit(("EVENTS" in u ? u.EVENTS : t(A)).BUTTON_HOVER))
                    }, {
                        default: c(() => r[6] || (r[6] = [p("Kode")])),
                        _: 1
                    }, 512), e("div", {
                        class: "buttons",
                        ref_key: "buttonsRef",
                        ref: w
                    }, [l(M, {
                        class: "audio-button | body-1",
                        theme: "white"
                    }), e("div", He, [r[7] || (r[7] = e("span", null, "[", -1)), e("span", null, pe(t(C)), 1), r[8] || (r[8] = e("span", null, "]", -1))])], 512), e("span", {
                        class: "lettering | body-1",
                        ref_key: "letteringRef",
                        ref: m
                    }, [l(Q, {
                        class: "h-[0.9em] origin-[bottom_left] md:origin-bottom",
                        ref_key: "logoRef",
                        ref: y
                    }, null, 512)], 512), e("button", {
                        class: "menu-btn | body-5",
                        onClick: x,
                        ref_key: "menuBtnRef",
                        ref: S
                    }, " Menu ", 512), e("nav", {
                        class: q(["mobile-menu | body-5", {
                            "top-full": t(E).getProgress <= 0.9,
                            "bottom-full": t(E).getProgress > 0.9,
                            "pointer-events-auto": t(v).isMobileMenuVisible
                        }]),
                        ref_key: "mobileMenuRef01",
                        ref: f
                    }, [e("ul", null, [e("li", null, [l(N, {
                        to: "https://kodemedia.com",
                        target: "_blank",
                        rel: "noopener"
                    }, {
                        default: c(() => r[9] || (r[9] = [p("Visit Kode")])),
                        _: 1
                    })]), e("li", null, [l(M, {
                        class: "body-5",
                        theme: "black"
                    })]), e("li", null, [l(N, {
                        to: "mailto:info@kodemedia.com"
                    }, {
                        default: c(() => r[10] || (r[10] = [p("Contact")])),
                        _: 1
                    })])])], 2), e("button", {
                        class: "connect-link link | body-1",
                        onPointerenter: r[1] || (r[1] = (R) => ("emitter" in u ? u.emitter : t(P)).emit(("EVENTS" in u ? u.EVENTS : t(A)).BUTTON_HOVER)),
                        onClick: r[2] || (r[2] = (R) => t(v).setContactOverlayVisible(true)),
                        ref_key: "connectLinkRef",
                        ref: V
                    }, " Contact ", 544)]), e("div", Ue, [l(N, {
                        class: "logo link | body-1",
                        to: "https://kodemedia.com",
                        target: "_blank",
                        rel: "noopener",
                        onPointerenter: r[3] || (r[3] = (R) => ("emitter" in u ? u.emitter : t(P)).emit(("EVENTS" in u ? u.EVENTS : t(A)).BUTTON_HOVER))
                    }, {
                        default: c(() => r[11] || (r[11] = [p("Kode")])),
                        _: 1
                    }), e("div", ze, [l(M, {
                        class: "audio-button | body-1",
                        theme: "black"
                    }), e("div", Qe, [r[12] || (r[12] = e("span", null, "[", -1)), e("span", null, pe(t(C)), 1), r[13] || (r[13] = e("span", null, "]", -1))])]), e("span", Ie, [l(Q, {
                        class: "h-[0.9em] origin-[bottom_left] md:origin-bottom"
                    })]), e("button", {
                        class: "menu-btn | body-5",
                        onClick: x
                    }, " Menu "), e("nav", {
                        class: q(["mobile-menu | body-5", {
                            "top-full": t(E).getProgress <= 0.9,
                            "bottom-full": t(E).getProgress > 0.9,
                            "pointer-events-auto": t(v).isMobileMenuVisible
                        }]),
                        ref_key: "mobileMenuRef02",
                        ref: g
                    }, [e("ul", null, [e("li", null, [l(N, {
                        to: "https://kodemedia.com",
                        target: "_blank",
                        rel: "noopener"
                    }, {
                        default: c(() => r[14] || (r[14] = [p("Visit Kode")])),
                        _: 1
                    })]), e("li", null, [l(M, {
                        class: "body-5",
                        theme: "black"
                    })]), e("li", null, [l(N, {
                        to: "mailto:info@kodemedia.com"
                    }, {
                        default: c(() => r[15] || (r[15] = [p("Contact")])),
                        _: 1
                    })])])], 2), e("button", {
                        class: "connect-link link | body-1",
                        onPointerenter: r[4] || (r[4] = (R) => ("emitter" in u ? u.emitter : t(P)).emit(("EVENTS" in u ? u.EVENTS : t(A)).BUTTON_HOVER)),
                        onClick: r[5] || (r[5] = (R) => t(v).setContactOverlayVisible(true))
                    }, " Contact ", 32)])]),
                    _: 1
                }, 8, ["style", "data-alt-layout"]);
            };
        }
    },
    We = D(Ke, [
        ["__scopeId", "data-v-b65cf57d"]
    ]),
    qe = {
        class: "component-bottom-bar",
        "data-bottom-bar": ""
    },
    De = {
        __name: "BottomBar",
        setup(Z) {
            const m = ee(),
                y = be(),
                {
                    isMedium: k
                } = Pe(),
                {
                    Observer: w
                } = X();
            ke(async () => {
                await ge(), w.create({
                    type: "pointer,touch",
                    onPress: (S) => {
                        S.event.target.dataset.arButton === void 0 && m.setQrCodeVisible(false);
                    }
                });
            });

            function V() {
                m.setQrCodeVisible(!m.isQrCodeVisible);
            }
            return (S, f) => {
                const g = Ce,
                    b = _e,
                    $ = le;
                return O(), z("div", qe, [l($, {
                    class: "text-white col-start-1 row-start-1 py-[1.125rem]",
                    "data-bottom-bar-white": ""
                }, {
                    default: c(() => [e("span", {
                        class: q(["scroll-label-wrapper", {
                            "opacity-0": t(y).getAnimatedScroll >= 100
                        }])
                    }, f[0] || (f[0] = [e("span", {
                        class: "scroll-label | body-1"
                    }, "Scroll for more", -1)]), 2), l(b, null, {
                        default: c(() => [e("span", {
                            class: q(["ar-button-wrapper", {
                                "opacity-0 pointer-events-none": !t(m).isQrButtonVisible
                            }])
                        }, [t(k) ? (O(), j(g, {
                            key: 0,
                            class: "ar-button | body-5",
                            theme: "white",
                            "aria-label": "Click to toggle the QR code",
                            onClick: V,
                            "data-ar-button": ""
                        }, {
                            default: c(() => f[1] || (f[1] = [p("AR")])),
                            _: 1
                        })) : (O(), j(g, {
                            key: 1,
                            class: "ar-button | body-5",
                            theme: "white",
                            to: "https://kodeimmersive-ar.pages.dev/",
                            target: "_blank",
                            rel: "noopener"
                        }, {
                            default: c(() => f[2] || (f[2] = [p("AR")])),
                            _: 1
                        }))], 2)]),
                        _: 1
                    })]),
                    _: 1
                }), l($, {
                    class: "text-black col-start-1 row-start-1 py-[1.125rem]",
                    "data-bottom-bar-black": ""
                }, {
                    default: c(() => [e("span", {
                        class: q(["scroll-label-wrapper", {
                            "opacity-0": t(y).getAnimatedScroll >= 100
                        }])
                    }, f[3] || (f[3] = [e("span", {
                        class: "scroll-label | body-1"
                    }, "Scroll for more", -1)]), 2), l(b, null, {
                        default: c(() => [e("span", {
                            class: q(["ar-button-wrapper", {
                                "opacity-0 pointer-events-none": !t(m).isQrButtonVisible
                            }])
                        }, [t(k) ? (O(), j(g, {
                            key: 0,
                            class: "ar-button | body-5",
                            theme: "black",
                            "aria-label": "Click to toggle the QR code",
                            onClick: V,
                            "data-ar-button": ""
                        }, {
                            default: c(() => f[4] || (f[4] = [p("AR")])),
                            _: 1
                        })) : (O(), j(g, {
                            key: 1,
                            class: "ar-button | body-5",
                            theme: "black",
                            to: "https://kodeimmersive-ar.pages.dev/",
                            target: "_blank",
                            rel: "noopener"
                        }, {
                            default: c(() => f[5] || (f[5] = [p("AR")])),
                            _: 1
                        }))], 2)]),
                        _: 1
                    })]),
                    _: 1
                })]);
            };
        }
    },
    Ze = D(De, [
        ["__scopeId", "data-v-7e3056ed"]
    ]),
    Je = ["data-alt-layout"],
    Fe = {
        class: "links | body-5"
    },
    je = {
        class: "field-wrapper | body-5"
    },
    Ge = {
        class: "email-states"
    },
    Ye = {
        key: 0,
        class: "body-2 | text-green col-start-1 row-start-1 py-2"
    },
    Xe = {
        key: 0,
        class: "body-2 | text-orange col-start-1 row-start-1 py-2"
    },
    et = {
        __name: "Footer",
        setup(Z) {
            const {
                gsap: m,
                ScrollTrigger: y,
                SplitText: k
            } = X(), w = ae(), V = Ne(w, {
                rootMargin: "0px 0px 300px"
            }), S = ne(() => ye("alt_layout")), f = d(null), g = d(null), b = d(null), $ = d(null), _ = d(null), B = d(null), E = d(null), v = d(null), L = d(null), C = d(null), H = d(null), x = d(null), u = ee(), r = he();
            let N, M, Q, K, R, J;
            const n = G(V, (a) => {
                r.isInit && a && (s(), n());
            });

            function s() {
                const a = m.matchMedia(),
                    i = {
                        value: 0
                    },
                    U = m.fromTo(i, {
                        value: 0
                    }, {
                        value: 1,
                        ease: "none"
                    });
                a.add({
                    isDesktop: "(min-width: 768px)",
                    isMobile: "(max-width: 767px)"
                }, (F) => {
                    const {
                        isMobile: te
                    } = F.conditions;
                    y.create({
                        trigger: o(w),
                        animation: U,
                        start: () => te ? "top 30%" : "top 50%",
                        end: () => te ? "bottom bottom" : "top top",
                        onUpdate: () => {
                            u.setHeaderAnimationProgress(i.value);
                        },
                        scrub: true
                    }), y.create({
                        trigger: o(w),
                        animation: m.fromTo(o(E).$el.querySelector("canvas"), {
                            yPercent: -20
                        }, {
                            yPercent: 0,
                            ease: "none"
                        }),
                        start: () => "top bottom",
                        end: () => "top 10%",
                        onEnter: () => {
                            u.setQrButtonVisible(false), u.setQrCodeVisible(false);
                        },
                        onLeaveBack: () => {
                            u.setQrButtonVisible(true);
                        },
                        scrub: true
                    }), y.create({
                        trigger: o(w),
                        start: () => "top bottom",
                        end: () => "top 50%",
                        onEnter: () => {
                            N = new k(o(f), {
                                type: "lines"
                            }), h(N), M = new k(o(g), {
                                type: "lines"
                            }), h(M), Q = new k([...o(b).querySelectorAll("p, a")], {
                                type: "lines"
                            }), h(Q), K = new k(o($), {
                                type: "lines"
                            }), h(K), R = new k(o(_).$el, {
                                type: "lines"
                            }), h(R), J = new k(o(B).$el, {
                                type: "lines"
                            }), h(J);
                        },
                        onLeave: () => {
                            W();
                        },
                        once: true
                    });
                });
            }

            function W() {
                const a = m.timeline({
                    overwrite: true
                });
                a.addLabel("start"), a.add(I(N), "start"), a.add(I(M), "start+=0.15"), a.add(I(Q), "start+=0.25"), a.add(I(K), "start+=0.5"), a.add(I(R), "start+=0.35"), a.add(I(J), "start+=0.45"), a.fromTo(o(v), {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 1
                }, "start+=0.55");
            }

            function h(a) {
                const i = [...a.lines].map((U) => U.parentElement);
                m.set(i, {
                    whiteSpace: "nowrap",
                    visibility: "hidden"
                });
            }

            function I(a) {
                const i = [...a.lines].map((U) => U.textContent);
                return m.fromTo(a.lines, {
                    scrambleText: "."
                }, {
                    scrambleText: (U) => i[U],
                    duration: 0.6,
                    stagger: {
                        each: 0.15,
                        onStart: function() {
                            m.set(this.targets()[0].parentElement, {
                                clearProps: "visibility"
                            });
                        }
                    }
                });
            }
            async function re() {
                if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o(C))) {
                    T(x, true);
                    return;
                }
                try {
                    const i = await $fetch("/subscribeToMailchimp", {
                        method: "POST",
                        params: {
                            email: o(C)
                        }
                    });
                    JSON.parse(i).status === 200 ? (T(x, false), T(H, true), o(L).reset(), o(L).querySelector("input").blur(), m.delayedCall(3, () => T(H, false))) : T(x, true);
                } catch (i) {
                    console.error("Newsletter submission error:", i), T(x, true), T(H, false);
                }
            }
            return (a, i) => {
                const U = ue,
                    F = ie,
                    te = me,
                    Re = le,
                    Ee = Ae;
                return O(), z("footer", {
                    class: "site-footer",
                    "data-alt-layout": t(S)
                }, [l(Re, {
                    class: "inner",
                    tag: "div"
                }, {
                    default: c(() => [e("span", {
                        class: "person-01 | body-1",
                        ref_key: "person01Ref",
                        ref: f
                    }, i[4] || (i[4] = [p(" Alex Harman"), e("br", null, null, -1), p(" CEO ")]), 512), e("span", {
                        class: "person-02 | body-1",
                        ref_key: "person02Ref",
                        ref: g
                    }, i[5] || (i[5] = [p(" Jerome Botbol"), e("br", null, null, -1), p(" Head of Immersive ")]), 512), l(U, {
                        class: "sound-btn | body-5",
                        theme: "orange"
                    }), e("div", {
                        class: "colophon | body-6",
                        ref_key: "colophonRef",
                        ref: b
                    }, [i[7] || (i[7] = e("p", null, "London", -1)), i[8] || (i[8] = e("p", null, "+44 (0)20 8133 5633", -1)), l(F, {
                        class: "link link-inverse | md:hover:text-orange md:transition-colors md:duration-300 md:ease-out",
                        target: "_blank",
                        href: "mailto:info@kodemedia.com",
                        onPointerenter: i[0] || (i[0] = (oe) => ("emitter" in a ? a.emitter : t(P)).emit(("EVENTS" in a ? a.EVENTS : t(A)).BUTTON_HOVER))
                    }, {
                        default: c(() => i[6] || (i[6] = [p("info@kodemedia.com")])),
                        _: 1
                    }), i[9] || (i[9] = e("p", null, [p(" 41 Mitchell Street"), e("br"), p(" London EC1V 3QD"), e("br"), p(" United Kingdom ")], -1))], 512), e("p", {
                        class: "credits | body-6",
                        ref_key: "creditsRef",
                        ref: $
                    }, " 2025 KODE\xA0\xA0\xA0/\xA0\xA0\xA0All rights reserved ", 512), e("div", Fe, [l(F, {
                        to: "https://kodemedia.com",
                        target: "_blank",
                        rel: "noopener",
                        class: "link-01 link link-inverse | display-2",
                        ref_key: "link01Ref",
                        ref: _,
                        onPointerenter: i[1] || (i[1] = (oe) => ("emitter" in a ? a.emitter : t(P)).emit(("EVENTS" in a ? a.EVENTS : t(A)).BUTTON_HOVER))
                    }, {
                        default: c(() => i[10] || (i[10] = [p("Kode")])),
                        _: 1
                    }, 512), l(F, {
                        to: "mailto:jerome.botbol@kodemedia.com",
                        target: "_blank",
                        rel: "noopener",
                        class: "link-02 link link-inverse | display-2",
                        ref_key: "link02Ref",
                        ref: B,
                        onPointerenter: i[2] || (i[2] = (oe) => ("emitter" in a ? a.emitter : t(P)).emit(("EVENTS" in a ? a.EVENTS : t(A)).BUTTON_HOVER))
                    }, {
                        default: c(() => i[11] || (i[11] = [p("Let's Connect")])),
                        _: 1
                    }, 512)]), e("div", {
                        class: "form-wrapper",
                        ref_key: "formWrapperRef",
                        ref: v
                    }, [i[14] || (i[14] = e("p", {
                        class: "body-6 | font-normal uppercase w-full max-w-[23rem]"
                    }, " Sign up to be part of our growing tech community ", -1)), e("form", {
                        onSubmit: ve(re, ["prevent"]),
                        class: "form",
                        ref_key: "formRef",
                        ref: L
                    }, [e("div", je, [i[12] || (i[12] = e("span", {
                        class: "bracket bracket-left | col-start-1"
                    }, "[", -1)), de(e("input", {
                        class: "email-field",
                        type: "email",
                        autocomplete: "email",
                        maxlength: "256",
                        placeholder: "Enter your email address",
                        inputmode: "email",
                        "onUpdate:modelValue": i[3] || (i[3] = (oe) => we(C) ? C.value = oe : null),
                        required: ""
                    }, null, 512), [
                        [Se, t(C)]
                    ]), i[13] || (i[13] = e("span", {
                        class: "bracket bracket-right | col-start-3"
                    }, "]", -1))]), e("div", Ge, [l(Y, {
                        name: "states"
                    }, {
                        default: c(() => [t(H) ? (O(), z("div", Ye, " Subscribed! ")) : se("", true)]),
                        _: 1
                    }), l(Y, {
                        name: "states"
                    }, {
                        default: c(() => [t(x) ? (O(), z("div", Xe, " Please enter a valid email address ")) : se("", true)]),
                        _: 1
                    })])], 544)], 512), l(te, {
                        class: "logo"
                    })]),
                    _: 1
                }), l(Ee, {
                    class: "webgl",
                    ref_key: "webglRef",
                    ref: E
                }, null, 512)], 8, Je);
            };
        }
    },
    tt = D(et, [
        ["__scopeId", "data-v-92e4eb56"]
    ]),
    ot = ["data-open"],
    nt = {
        class: "buttons | body-3"
    },
    st = {
        class: "links | body-1"
    },
    lt = {
        class: "field-wrapper | body-5"
    },
    rt = {
        class: "email-states"
    },
    it = {
        key: 0,
        class: "body-2 | text-green col-start-1 row-start-1 py-2"
    },
    at = {
        key: 0,
        class: "body-2 | text-orange col-start-1 row-start-1 py-2"
    },
    dt = {
        __name: "ConnectOverlay",
        setup(Z) {
            const {
                gsap: m,
                SplitText: y
            } = X(), k = ee(), w = ae(), V = d(null), S = d(null), f = d(null), g = d(null), b = d(null), $ = d(null), _ = d(null), B = d(null), E = d(null), v = d(null), L = d(null), C = d(null);
            let H, x, u, r, N, M;
            G(() => k.isContactOverlayVisible, (n) => {
                n ? Q() : K();
            });

            function Q() {
                H == null ? void 0 : H.revert(), x == null ? void 0 : x.revert(), u == null ? void 0 : u.revert(), r == null ? void 0 : r.revert(), N == null ? void 0 : N.revert(), M == null ? void 0 : M.revert(), H = new y(o(V), {
                    type: "lines"
                }), x = new y(o(S), {
                    type: "lines"
                }), u = new y([...o(f).querySelectorAll("p, a")], {
                    type: "lines"
                }), r = new y(o(g), {
                    type: "lines"
                }), N = new y(o($).$el, {
                    type: "lines"
                }), M = new y(o(_).$el, {
                    type: "lines"
                });
                const n = m.timeline({
                    overwrite: true
                });
                n.addLabel("start"), n.fromTo(o(w), {
                    clipPath: "inset(0 0 100%)"
                }, {
                    clipPath: "inset(0 0 0%)",
                    duration: 0.75,
                    ease: "power2.out"
                }, "start"), n.fromTo(o(b).$el, {
                    scale: 0.4
                }, {
                    scale: 1,
                    duration: 1,
                    ease: "power2.out"
                }, "start+=0.3"), n.addLabel("textAppears", "start+=0.3"), n.add(R(H), "textAppears"), n.add(R(x), "textAppears+=0.15"), n.add(R(u), "textAppears+=0.25"), n.add(R(r), "textAppears+=0.5"), n.add(R(N), "textAppears+=0.35"), n.add(R(M), "textAppears+=0.45"), n.fromTo(o(B), {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 1
                }, "start+=0.55");
            }

            function K() {
                const n = m.timeline({
                    overwrite: true
                });
                n.addLabel("start"), n.to(o(w), {
                    clipPath: () => m.utils.random(["inset(100% 0 0)", "inset(0 100% 0 0)", "inset(0 0 0 100%)"]),
                    duration: 0.6,
                    ease: "power2.out"
                }, "start");
            }

            function R(n) {
                const s = n.elements[0].classList.contains("link"),
                    W = [...n.lines].map((h) => h.textContent);
                return m.set(n.lines, {
                    whiteSpace: "nowrap",
                    visibility: "hidden"
                }), s && m.set(n.elements[0], {
                    visibility: "hidden"
                }), m.fromTo(n.lines, {
                    scrambleText: "."
                }, {
                    scrambleText: (h) => W[h],
                    duration: 0.6,
                    onStart: () => {
                        s && m.set(n.elements[0], {
                            clearProps: "visibility"
                        });
                    },
                    stagger: {
                        each: 0.15,
                        onStart: function() {
                            m.set(this.targets()[0], {
                                clearProps: "visibility"
                            });
                        }
                    }
                });
            }
            async function J() {
                if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o(v))) {
                    T(C, true);
                    return;
                }
                try {
                    const s = await $fetch("/subscribeToMailchimp", {
                        method: "POST",
                        params: {
                            email: o(v)
                        }
                    });
                    JSON.parse(s).status === 200 ? (T(C, false), T(L, true), o(E).reset(), o(E).querySelector("input").blur(), m.delayedCall(3, () => T(L, false))) : T(C, true);
                } catch (s) {
                    console.error("Newsletter submission error:", s), T(C, true), T(L, false);
                }
            }
            return (n, s) => {
                const W = ue,
                    h = ie,
                    I = me,
                    re = le;
                return O(), z("div", {
                    class: "connect-overlay",
                    "data-open": t(k).isContactOverlayVisible
                }, [l(re, {
                    class: "inner",
                    tag: "div"
                }, {
                    default: c(() => [e("span", {
                        class: "person-01 | body-1",
                        ref_key: "person01Ref",
                        ref: V
                    }, s[6] || (s[6] = [p(" Alex Harman"), e("br", null, null, -1), p(" CEO ")]), 512), e("span", {
                        class: "person-02 | body-1",
                        ref_key: "person02Ref",
                        ref: S
                    }, s[7] || (s[7] = [p(" Jerome Botbol"), e("br", null, null, -1), p(" Head of Immersive ")]), 512), e("div", nt, [e("button", {
                        class: "close-btn | link link-inverse",
                        onPointerenter: s[0] || (s[0] = (a) => ("emitter" in n ? n.emitter : t(P)).emit(("EVENTS" in n ? n.EVENTS : t(A)).BUTTON_HOVER)),
                        onClick: s[1] || (s[1] = (a) => t(k).setContactOverlayVisible(false)),
                        "aria-label": "Close the contact overlay"
                    }, " Close ", 32), l(W, {
                        class: "audio-btn",
                        theme: "orange"
                    })]), e("div", {
                        class: "colophon | body-1",
                        ref_key: "colophonRef",
                        ref: f
                    }, [s[9] || (s[9] = e("p", null, "London", -1)), s[10] || (s[10] = e("p", null, "+44 (0)20 8133 5633", -1)), l(h, {
                        class: "email-link link link-inverse",
                        target: "_blank",
                        href: "mailto:info@kodemedia.com",
                        onPointerenter: s[2] || (s[2] = (a) => ("emitter" in n ? n.emitter : t(P)).emit(("EVENTS" in n ? n.EVENTS : t(A)).BUTTON_HOVER))
                    }, {
                        default: c(() => s[8] || (s[8] = [p("info@kodemedia.com")])),
                        _: 1
                    }), s[11] || (s[11] = e("p", null, [p(" 41 Mitchell Street"), e("br"), p(" London EC1V 3QD"), e("br"), p(" United Kingdom ")], -1))], 512), e("p", {
                        class: "credits | body-1",
                        ref_key: "creditsRef",
                        ref: g
                    }, " 2025 KODE\xA0\xA0\xA0/\xA0\xA0\xA0All rights reserved ", 512), e("div", st, [l(h, {
                        to: "https://kodemedia.com",
                        target: "_blank",
                        rel: "noopener",
                        class: "link-01 link link-inverse | display-2",
                        ref_key: "link01Ref",
                        ref: $,
                        onPointerenter: s[3] || (s[3] = (a) => ("emitter" in n ? n.emitter : t(P)).emit(("EVENTS" in n ? n.EVENTS : t(A)).BUTTON_HOVER))
                    }, {
                        default: c(() => s[12] || (s[12] = [p("Kode")])),
                        _: 1
                    }, 512), l(h, {
                        to: "mailto:jerome.botbol@kodemedia.com",
                        target: "_blank",
                        class: "link-02 link link-inverse | display-2",
                        ref_key: "link02Ref",
                        ref: _,
                        onPointerenter: s[4] || (s[4] = (a) => ("emitter" in n ? n.emitter : t(P)).emit(("EVENTS" in n ? n.EVENTS : t(A)).BUTTON_HOVER))
                    }, {
                        default: c(() => s[13] || (s[13] = [p("Let's Connect")])),
                        _: 1
                    }, 512)]), e("div", {
                        class: "form-wrapper",
                        ref_key: "formWrapperRef",
                        ref: B
                    }, [s[16] || (s[16] = e("p", {
                        class: "body-6 | font-normal uppercase w-full max-w-[23rem]"
                    }, " Sign up to be part of our growing tech community ", -1)), e("form", {
                        onSubmit: ve(J, ["prevent"]),
                        class: "form",
                        ref_key: "formRef",
                        ref: E
                    }, [e("div", lt, [s[14] || (s[14] = e("span", {
                        class: "bracket bracket-left | col-start-1"
                    }, "[", -1)), de(e("input", {
                        class: "email-field",
                        type: "email",
                        autocomplete: "email",
                        maxlength: "256",
                        placeholder: "Enter your email address",
                        inputmode: "email",
                        "onUpdate:modelValue": s[5] || (s[5] = (a) => we(v) ? v.value = a : null),
                        required: ""
                    }, null, 512), [
                        [Se, t(v)]
                    ]), s[15] || (s[15] = e("span", {
                        class: "bracket bracket-right | col-start-3"
                    }, "]", -1))]), e("div", rt, [l(Y, {
                        name: "states"
                    }, {
                        default: c(() => [t(L) ? (O(), z("div", it, " Subscribed! ")) : se("", true)]),
                        _: 1
                    }), l(Y, {
                        name: "states"
                    }, {
                        default: c(() => [t(C) ? (O(), z("div", at, " Please enter a valid email address ")) : se("", true)]),
                        _: 1
                    })])], 544)], 512), l(I, {
                        class: "logo",
                        ref_key: "logoRef",
                        ref: b
                    }, null, 512)]),
                    _: 1
                })], 8, ot);
            };
        }
    },
    ut = D(dt, [
        ["__scopeId", "data-v-272c87d9"]
    ]),
    mt = {
        class: "webgl-noise"
    },
    pt = {
        class: "canvas-wrapper"
    },
    ct = {
        __name: "index",
        setup(Z) {
            const m = ae(),
                y = d(null),
                k = d(false),
                {
                    gsap: w
                } = X(),
                {
                    pixelRatio: V
                } = Oe(),
                {
                    width: S,
                    height: f
                } = fe(m);
            let g = null,
                b = null;
            ke(async () => {
                await ge(), g = o(y).transferControlToOffscreen(), b = new Worker(new URL("" + new URL("worker-DOkQpgnQ.js",
                        import.meta.url).href,
                    import.meta.url), {
                    type: "module"
                }), b.postMessage({
                    init: true,
                    canvas: g,
                    width: o(S),
                    height: o(f)
                }, [g]), b.onmessage = (_) => {
                    const {
                        data: B
                    } = _;
                    B.init && (T(k, true), w.ticker.add($));
                };
            }), G([S, f, k], (_) => {
                _[2] && b.postMessage({
                    resize: true,
                    width: _[0],
                    height: _[1]
                });
            }), G([V, k], (_) => {
                _[1] && b.postMessage({
                    dpr: _[0]
                });
            });

            function $(_) {
                b.postMessage({
                    update: true,
                    tick: _
                });
            }
            return (_, B) => (O(), z("div", mt, [e("div", pt, [e("canvas", {
                class: "size-full",
                ref_key: "canvasRef",
                ref: y
            }, null, 512)])]));
        }
    },
    ft = D(ct, [
        ["__scopeId", "data-v-20c8b94d"]
    ]),
    bt = {
        class: "relative z-[1]"
    },
    yt = {
        class: "fixed right-[0.625rem] md:right-[1.375rem] bottom-[4.5rem] md:bottom-20 z-[60] w-[70vw] md:w-[267px]",
        src: Be,
        alt: "QR Code",
        loading: "eager",
        decoding: "async",
        draggable: "false"
    },
    kt = {
        __name: "default",
        setup(Z) {
            const m = ee();
            return (y, k) => {
                const w = Te,
                    V = We,
                    S = _e,
                    f = Ze,
                    g = tt,
                    b = ut,
                    $ = ft;
                return O(), z("div", bt, [l(w, {
                    class: "fixed inset-0 z-40 md-down:invisible",
                    "trail-lifetime": 400,
                    "trail-color": "#ffffff",
                    "data-mouse-trail-white": ""
                }), l(w, {
                    class: "fixed inset-0 z-40 md-down:invisible",
                    style: {
                        "clip-path": "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)"
                    },
                    "trail-lifetime": 400,
                    "trail-color": "#FF4C00",
                    "data-mouse-trail-orange": ""
                }), l(S, null, {
                    default: c(() => [l(V, {
                        class: "fixed z-10 inset-x-0 top-0"
                    })]),
                    _: 1
                }), l(f, {
                    class: "text-black fixed z-10 inset-x-0 bottom-0"
                }), e("main", null, [xe(y.$slots, "default", {}, void 0, true)]), l(S, null, {
                    default: c(() => [l(g, {
                        "data-footer": ""
                    })]),
                    _: 1
                }), l(b), l(Y, {
                    name: "qr-code"
                }, {
                    default: c(() => [de(e("img", yt, null, 512), [
                        [Me, t(m).isQrCodeVisible]
                    ])]),
                    _: 1
                }), l($, {
                    class: "fixed inset-0 z-[70] pointer-events-none md-down:opacity-50"
                })]);
            };
        }
    },
    Tt = D(kt, [
        ["__scopeId", "data-v-28a59ef0"]
    ]);
export {
    Tt as
    default
};