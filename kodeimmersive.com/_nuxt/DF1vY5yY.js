import {
    _ as I,
    l as L,
    s as w,
    q as P,
    n as V,
    m as B,
    k as K,
    i as F,
    h as X,
    v as U,
    x as v,
    J as t,
    C as i,
    E as o,
    B as W,
    I as x,
    af as j,
    c as q,
    o as H,
    a as E,
    Z as M
} from "./DRwXc3fR.js";
import {
    u as N
} from "./CI8pHMb7.js";
const Y = {
        class: "relative overflow-hidden"
    },
    z = ["width", "height"],
    G = {
        __name: "index",
        setup(J) {
            const b = L(),
                f = w(null),
                c = w(null),
                u = w(false),
                {
                    width: m,
                    height: g,
                    top: T
                } = P(b),
                {
                    pixelRatio: k
                } = V(),
                n = B(b),
                {
                    isMedium: l
                } = N(),
                {
                    gsap: d,
                    Observer: y,
                    Draggable: C
                } = K(),
                _ = F(),
                a = X();
            let h = null,
                s = null,
                p = null;
            U(async () => {
                await v(), h = t(f).transferControlToOffscreen(), s = new Worker(new URL("" + new URL("worker-jdgwM7Hs.js",
                        import.meta.url).href,
                    import.meta.url), {
                    type: "module"
                });
                const e = await O();
                s.postMessage({
                    init: true,
                    canvas: h,
                    width: t(m),
                    height: t(g),
                    texture: e
                }, [h, e]), s.onmessage = (S) => {
                    const {
                        data: r
                    } = S;
                    r.modelLoaded && i.emit(o.WORKER_MODEL_LOADED), r.init && (A(), D(), W(u, true)), r.hover !== void 0 && (a.setCursorState(r.hover && !a.isContactOverlayVisible ? "icon-hover" : "idle"), a.setCursorLabel(r.hover && !a.isContactOverlayVisible ? "drag" : null), i.emit(r.hover && _.isSoundEnabled && !a.isContactOverlayVisible ? o.PLAY_ASTERISK_SFX : o.STOP_ASTERISK_SFX));
                };
            }), x([m, g, u], (e) => {
                e[2] && s.postMessage({
                    resize: true,
                    width: e[0],
                    height: e[1]
                });
            }), x([k, u], (e) => {
                e[1] && s.postMessage({
                    dpr: e[0]
                });
            }), x([n, u, () => _.isInit], async (e) => {
                var _a, _b, _c;
                !e[1] || !e[2] || (s.postMessage({
                    isVisible: e[0]
                }), e[0] ? ((_a = p == null ? void 0 : p[0]) == null ? void 0 : _a.enable(), d.ticker.add(R)) : (d.set(t(c), {
                    x: 0
                }), (_b = p == null ? void 0 : p[0]) == null ? void 0 : _b.update(), (_c = p == null ? void 0 : p[0]) == null ? void 0 : _c.disable(), await v(), d.ticker.remove(R), a.setCursorState("idle"), a.setCursorLabel(null), i.emit(o.STOP_ASTERISK_SFX)));
            });

            function R(e) {
                s.postMessage({
                    update: true,
                    tick: e
                });
            }
            async function O() {
                const e = await j.load("/Metallic_MatCap.webp");
                return await createImageBitmap(e.image);
            }

            function A() {
                y.create({
                    type: "pointer",
                    onMove: (e) => {
                        !t(n) || !t(l) || s.postMessage({
                            mouse: true,
                            x: e.x,
                            y: e.y
                        });
                    }
                }), y.create({
                    type: "touch",
                    target: t(f),
                    onPress: () => {
                        !t(n) || t(l) || _.isSoundEnabled && i.emit(o.PLAY_ASTERISK_SFX);
                    },
                    onDrag: (e) => {
                        !t(n) || t(l) || s.postMessage({
                            mouse: true,
                            x: e.x,
                            y: e.y - t(T)
                        });
                    },
                    onRelease: () => {
                        !t(n) || t(l) || i.emit(o.STOP_ASTERISK_SFX);
                    }
                });
            }

            function D() {
                p = C.create(t(c), {
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
            return (e, S) => (H(), q("div", Y, [E("canvas", {
                class: "canvas",
                ref_key: "canvasRef",
                ref: f,
                width: M(m),
                height: M(g)
            }, null, 8, z), E("div", {
                class: "fixed top-0 left-0 bg-white w-10 aspect-square invisible",
                ref_key: "draggableDummyRef",
                ref: c
            }, null, 512)]));
        }
    },
    $ = I(G, [
        ["__scopeId", "data-v-ff7a7df1"]
    ]);
export {
    $ as _
};