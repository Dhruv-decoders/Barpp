import {
    _ as I,
    l as T,
    s as h,
    q as N,
    n as F,
    m as X,
    k as W,
    i as U,
    h as Y,
    aD as R,
    J as t,
    v as j,
    x as B,
    C as n,
    E as r,
    B as q,
    I as x,
    af as H,
    c as z,
    o as G,
    a as A,
    Z as E
} from "./DRwXc3fR.js";
import {
    u as J
} from "./CI8pHMb7.js";
const K = {
        class: "relative overflow-hidden"
    },
    Z = ["width", "height"],
    Q = {
        __name: "index",
        setup($) {
            const w = T(),
                f = h(null),
                c = h(null),
                l = h(false),
                {
                    width: y,
                    height: O,
                    top: b
                } = N(w),
                {
                    pixelRatio: k
                } = F(),
                u = X(w),
                {
                    isMedium: i
                } = J(),
                {
                    gsap: d,
                    Observer: S,
                    Draggable: C
                } = W(),
                p = U(),
                a = Y();
            let g = null,
                s = null,
                m = null;
            const v = R(() => Math.round(t(y))),
                M = R(() => Math.round(t(O)));
            j(async () => {
                await B(), g = t(f).transferControlToOffscreen(), s = new Worker(new URL("" + new URL("worker-jt5RS1AI.js",
                        import.meta.url).href,
                    import.meta.url), {
                    type: "module"
                });
                const e = await D();
                s.postMessage({
                    init: true,
                    canvas: g,
                    width: t(y),
                    height: t(O),
                    texture: e
                }, [g, e]), s.onmessage = (_) => {
                    const {
                        data: o
                    } = _;
                    o.modelLoaded && n.emit(r.WORKER_MODEL_LOADED), o.init && (P(), V(), q(l, true)), o.hover !== void 0 && (a.setCursorState(o.hover && !a.isContactOverlayVisible ? "icon-hover" : "idle"), a.setCursorLabel(o.hover && !a.isContactOverlayVisible ? "drag" : null)), o.mousemove && p.isSoundEnabled && !a.isContactOverlayVisible && i && n.emit(r.PLAY_BALOON_SFX), o.mouseleave && i && n.emit(r.STOP_BALOON_SFX);
                };
            }), x([v, M, l], (e) => {
                e[2] && s.postMessage({
                    resize: true,
                    width: e[0],
                    height: e[1]
                });
            }), x([k, l], (e) => {
                e[1] && s.postMessage({
                    dpr: e[0]
                });
            }), x([u, l, () => p.isInit], async (e) => {
                var _a, _b, _c;
                !e[1] || !e[2] || (s.postMessage({
                    isVisible: e[0]
                }), e[0] ? ((_a = m == null ? void 0 : m[0]) == null ? void 0 : _a.enable(), d.ticker.add(L)) : (d.set(t(c), {
                    x: 0
                }), (_b = m == null ? void 0 : m[0]) == null ? void 0 : _b.update(), (_c = m == null ? void 0 : m[0]) == null ? void 0 : _c.disable(), await B(), d.ticker.remove(L), a.setCursorState("idle"), a.setCursorLabel(null), n.emit(r.STOP_BALOON_SFX)));
            });

            function L() {
                s.postMessage({
                    update: true
                });
            }
            async function D() {
                const e = await H.load("/Inflation_MatcapV2.webp");
                return await createImageBitmap(e.image);
            }

            function P() {
                S.create({
                    type: "pointer",
                    onMove: (e) => {
                        !t(u) || !t(i) || s.postMessage({
                            mouse: true,
                            x: e.x,
                            y: e.y
                        });
                    }
                }), S.create({
                    type: "touch",
                    target: t(f),
                    onPress: (e) => {
                        !t(u) || t(i) || (s.postMessage({
                            mouse: true,
                            x: e.x,
                            y: e.y - t(b)
                        }), p.isSoundEnabled && n.emit(r.PLAY_BALOON_SFX));
                    },
                    onDrag: (e) => {
                        !t(u) || t(i) || (s.postMessage({
                            mouse: true,
                            x: e.x,
                            y: e.y - t(b)
                        }), p.isSoundEnabled && n.emit(r.PLAY_BALOON_SFX));
                    },
                    onRelease: (e) => {
                        !t(u) || t(i) || (s.postMessage({
                            mouse: true,
                            x: 0,
                            y: 0
                        }), n.emit(r.STOP_BALOON_SFX));
                    }
                });
            }

            function V() {
                m = C.create(t(c), {
                    cursor: "default",
                    activeCursor: "default",
                    type: "x",
                    trigger: document.body,
                    inertia: true,
                    throwResistance: 6e3,
                    onDrag: e,
                    onThrowUpdate: e
                });

                function e() {
                    s.postMessage({
                        drag: true,
                        x: d.getProperty(t(c), "x")
                    });
                }
            }
            return (e, _) => (G(), z("div", K, [A("canvas", {
                class: "canvas",
                ref_key: "canvasRef",
                ref: f,
                width: E(v),
                height: E(M)
            }, null, 8, Z), A("div", {
                class: "fixed top-0 left-0 bg-white w-10 aspect-square invisible",
                ref_key: "draggableDummyRef",
                ref: c
            }, null, 512)]));
        }
    },
    se = I(Q, [
        ["__scopeId", "data-v-8c69746a"]
    ]);
export {
    se as _
};