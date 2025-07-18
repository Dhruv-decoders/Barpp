import {
    _ as v,
    h as S,
    k as R,
    n as k,
    s as m,
    q as b,
    v as C,
    x as T,
    J as e,
    B as f,
    aZ as D,
    c as M,
    o as B,
    b as E,
    w as F,
    ab as P,
    ac as $,
    Z as I,
    a as A,
    aa as J
} from "./DRwXc3fR.js";
const N = {
        __name: "MouseTrail",
        props: {
            trailColor: {
                type: String,
                default: "#fff",
                validator: (r) => /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(r)
            },
            trailLifetime: {
                type: Number,
                default: 800,
                validator: (r) => r > 0
            }
        },
        setup(r) {
            const g = r,
                y = S(),
                {
                    gsap: x,
                    Observer: w
                } = R(),
                {
                    pixelRatio: s
                } = k(),
                p = m(null),
                n = m(null),
                i = m({
                    x: 0,
                    y: 0
                }),
                {
                    width: c,
                    height: h
                } = b(p);
            let t, o = [];
            return C(async () => {
                await T(), t = e(n).getContext("2d", {
                    antialias: true
                }), t.imageSmoothingEnabled = true, t.imageSmoothingQuality = "high", t.lineCap = "round", t.lineJoin = "round", e(n).width = e(c) * e(s), e(n).height = e(h) * e(s), t.scale(e(s), e(s)), e(n).style.width = `${e(c)}px`, e(n).style.height = `${e(h)}px`, w.create({
                    type: "pointer,touch",
                    onPress: (a) => {
                        f(i, {
                            x: parseInt(a.x),
                            y: parseFloat(a.y)
                        });
                    },
                    onMove: (a) => {
                        f(i, {
                            x: parseInt(a.x),
                            y: parseFloat(a.y)
                        });
                    },
                    onDrag: (a) => {
                        f(i, {
                            x: parseInt(a.x),
                            y: parseFloat(a.y)
                        });
                    }
                });

                function u() {
                    const a = x.utils.random(20, 150);
                    (o.length === 0 || Math.sqrt(Math.pow(e(i).x - o[o.length - 1].x, 2) + Math.pow(e(i).y - o[o.length - 1].y, 2)) >= a) && o.push({
                        x: e(i).x,
                        y: e(i).y,
                        timestamp: Date.now()
                    });
                }

                function d() {
                    t.clearRect(0, 0, e(c), e(h));
                    const a = Date.now();
                    for (; o.length > 0 && a - o[0].timestamp > g.trailLifetime;) o.shift();
                    o.length > 1 && (t.beginPath(), t.strokeStyle = g.trailColor, t.lineWidth = 3, o.forEach((l, _) => {
                        _ === 0 ? t.moveTo(l.x, l.y) : t.lineTo(l.x, l.y);
                    }), t.stroke()), u();
                }
                x.ticker.add(d);
            }), D(p, (u) => {
                const d = u[0],
                    {
                        width: a,
                        height: l
                    } = d.contentRect;
                e(n).width = e(c) * e(s), e(n).height = e(h) * e(s), t.scale(e(s), e(s)), e(n).style.width = `${a}px`, e(n).style.height = `${l}px`, t.imageSmoothingEnabled = true, t.imageSmoothingQuality = "high", t.lineCap = "round", t.lineJoin = "round";
            }), (u, d) => (B(), M("div", {
                class: "flex pointer-events-none",
                ref_key: "componentRef",
                ref: p
            }, [E(J, null, {
                default: F(() => [P(A("canvas", {
                    class: "w-full h-full",
                    ref_key: "canvasRef",
                    ref: n
                }, null, 512), [
                    [$, I(y).cursorState === "idle"]
                ])]),
                _: 1
            })], 512));
        }
    },
    L = v(N, [
        ["__scopeId", "data-v-24d93c86"]
    ]);
export {
    L as
    default
};