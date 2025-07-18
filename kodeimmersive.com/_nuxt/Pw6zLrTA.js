const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./B9N9hGhc.js", "./BXg6ZhiP.js"]))) => i.map(i => d[i]);
import {
    _ as H,
    l as ee,
    s as h,
    q as ne,
    n as te,
    m as ae,
    k as ie,
    i as oe,
    h as re,
    v as se,
    x as ce,
    y as le,
    z as ue,
    B as N,
    I as y,
    S as ve,
    P as fe,
    J as n,
    T as F,
    W as me,
    ai as ge,
    aj as pe,
    ak as de,
    al as L,
    Y as xe,
    af as ye,
    ag as _e,
    N as Me,
    V as O,
    ah as Pe,
    R as ze,
    C as S,
    E as _,
    c as we,
    o as he,
    a as k,
    Z as V,
    __tla as __tla_0
} from "./DRwXc3fR.js";
import {
    z as Se
} from "./nQE8Ziy-.js";
import {
    u as Ce
} from "./CI8pHMb7.js";
let Fe;
let __tla = Promise.all([
    (() => {
        try {
            return __tla_0;
        } catch {}
    })()
]).then(async () => {
    var be = `varying float v_AnimateInAlpha;
varying float vPattern;
varying float v_Distance;

uniform vec2 u_MousePosition;
uniform float u_AnimateIn;
uniform float u_Time;
uniform float u_DisplacementStrength;
uniform float u_Speed;
uniform float u_NoiseStrength;
uniform float u_FractAmount;

#ifndef FNC_ROTATE3DY
#define FNC_ROTATE3DY
mat3 rotate3dY(const in float r){
    float c = cos(r);
    float s = sin(r);
    return mat3(vec3(c,0.,-s),
                vec3(0.,1.,0.),
                vec3(s,0.,c));
}
#endif
#ifndef FNC_MAP
#define FNC_MAP
float map(float v, float iMin, float iMax ) { return (v-iMin)/(iMax-iMin); }
vec2 map(vec2 v, vec2 iMin, vec2 iMax ) { return (v-iMin)/(iMax-iMin); }
vec3 map(vec3 v, vec3 iMin, vec3 iMax ) { return (v-iMin)/(iMax-iMin); }
vec4 map(vec4 v, vec4 iMin, vec4 iMax ) { return (v-iMin)/(iMax-iMin); }

float map(in float v, in float iMin, in float iMax, in float oMin, in float oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }
vec2 map(in vec2 v, in vec2 iMin, in vec2 iMax, in vec2 oMin, in vec2 oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }
vec3 map(in vec3 v, in vec3 iMin, in vec3 iMax, in vec3 oMin, in vec3 oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }
vec4 map(in vec4 v, in vec4 iMin, in vec4 iMax, in vec4 oMin, in vec4 oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }
#endif

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float smoothMod(float axis, float amp, float rad) {
    float top = cos(PI * (axis / amp)) * sin(PI * (axis / amp));
    float bottom = pow(sin(PI * (axis / amp)), 2.0) + pow(rad, 2.0);
    float at = atan(top / bottom);
    return amp * (1.0 / 2.0) - (1.0 / PI) * at;
}

float getDisplacement(vec3 position) {
    vec3 pos = position;

    float dist = distance(vec3(pos.xy, 0.0), vec3(u_MousePosition, 0.0));
    dist = smoothstep(0.65, 0.05, dist);
    dist = map(dist, 0.0, 1.0, 0.2, 1.0);

    float fractAmount = map(dist, 0.2, 1.0, u_FractAmount, u_FractAmount * 1.3);

    pos.y -= u_Time * u_Speed;
    pos += cnoise(pos * 2.65) * u_NoiseStrength;

    return smoothMod(pos.y + fractAmount, 1., 0.8) * u_DisplacementStrength * dist;
}

void main() {
  float animateIn = map(u_AnimateIn, 0.0, 1.0, -1.0, 1.0);
  float animateInRotation = smoothstep(animateIn - 0.4, animateIn + 0.4, position.y);
  csm_Position *= rotate3dY(animateInRotation + (1.0 - u_AnimateIn) * PI * 0.35);

  float dist = distance(position, vec3(u_MousePosition, 0.0));
  dist = smoothstep(0.65, 0.05, dist);
  v_Distance = dist;

  float pattern = getDisplacement(position);

  csm_Position += normal * pattern;

  
  float epsilon = 0.001;

  
  float dx = (getDisplacement(position + vec3(epsilon, 0.0, 0.0)) - pattern) / epsilon;
  float dy = (getDisplacement(position + vec3(0.0, epsilon, 0.0)) - pattern) / epsilon;
  float dz = (getDisplacement(position + vec3(0.0, 0.0, epsilon)) - pattern) / epsilon;

  
  vec3 newNormal = normalize(normal - vec3(dx, dy, dz));

  csm_Normal = newNormal;

  
  vPattern = pattern;
}`;
    let Ie, Re, De;
    Ie = {
        class: "relative overflow-hidden"
    };
    Re = [
        "width",
        "height"
    ];
    De = {
        __name: "index",
        setup(Ae) {
            const B = ee(),
                M = h(null),
                P = h(null);
            let z, g, t, s, p, C, a, b, I, v = -10,
                f = -10,
                w = {
                    x: 0,
                    y: 0
                };
            const {
                width: c,
                height: l,
                top: R
            } = ne(B), {
                pixelRatio: D
            } = te(), {
                isMedium: r
            } = Ce(), d = ae(M), m = h(false), A = h(false), {
                gsap: i,
                Observer: T,
                Draggable: Y
            } = ie(), x = oe(), u = re();
            se(async () => {
                if (await ce(), q(), X(), j(), W(), U(), await J(), z.add(p), Z(), K(), $(), le("debug", "circle")) {
                    const {
                        createCircleDebug: e
                    } = await ue(async () => {
                            const {
                                createCircleDebug: o
                            } = await
                            import ("./B9N9hGhc.js");
                            return {
                                createCircleDebug: o
                            };
                        }, __vite__mapDeps([0, 1]),
                        import.meta.url);
                    e(a);
                }
                N(m, true);
            }), y([
                d,
                m
            ], (e) => {
                var _a;
                e[1] && (e[0] ? (n(r) && i.fromTo(p.position, {
                    y: 0.5
                }, {
                    y: 0,
                    duration: 1,
                    ease: "power1.out",
                    overwrite: true
                }), i.fromTo(a.material.uniforms.u_AnimateIn, {
                    value: 0
                }, {
                    value: 1,
                    duration: 1,
                    ease: "power1.out",
                    overwrite: true
                }), i.set(n(P), {
                    x: 0
                }), g.rotation.y = 0, (_a = I == null ? void 0 : I[0]) == null ? void 0 : _a.update(), i.ticker.add(E)) : (S.emit(_.STOP_CIRCLE_SFX), i.ticker.remove(E), u.setCursorState("idle"), u.setCursorLabel(null)));
            }), y([
                D,
                m
            ], (e) => {
                e[1] && s.setPixelRatio(Math.min(e[0], 1));
            }), y([
                c,
                l,
                m
            ], (e) => {
                e[2] && (t.aspect = e[0] / e[1], t.updateProjectionMatrix(), s.setSize(e[0], e[1]));
            }), y([
                r,
                m,
                () => x.isInit
            ], (e) => {
                !e[1] || !e[2] || (t.position.z = e[0] ? 2.65 : 2.3);
            }), y([
                A,
                () => x.isInit
            ], ([e, o]) => {
                o && n(r) && (S.emit(e && x.isSoundEnabled && !u.isContactOverlayVisible ? _.PLAY_CIRCLE_SFX : _.STOP_CIRCLE_SFX), u.setCursorState(e && !u.isContactOverlayVisible ? "icon-hover" : "idle"), u.setCursorLabel(e && !u.isContactOverlayVisible ? "drag" : null), i.to(a.material.uniforms.u_DisplacementStrength, {
                    value: () => e ? 0.25 : 0.1,
                    duration: () => e ? 0.3 : 0.5,
                    ease: "power2.out",
                    overwrite: true
                }));
            });

            function E(e = 0) {
                !n(m) || !x.isInit || (G(e), s.render(z, t));
            }

            function G(e = 0) {
                t.position.x = w.x, t.position.y = w.y, t.lookAt(a.position), Q(), t.lookAt(a.position), a.material.uniforms.u_Time.value = e * 0.5;
            }

            function q() {
                z = new ve();
            }

            function X() {
                t = new fe(45, n(c) / n(l), 0.1, 100), t.position.set(0, 0, n(r) ? 2.65 : 4), g = new F(), g.add(t), z.add(g);
            }

            function j() {
                s = new me({
                    canvas: n(M),
                    alpha: true,
                    antialias: true
                }), s.toneMapping = ge, s.setSize(n(c), n(l)), s.setPixelRatio(Math.min(n(D), 1));
            }

            function W() {
                p = new F();
            }

            function U() {
                const e = new pe(1, 16),
                    o = new de({
                        visible: false,
                        side: L
                    });
                C = new xe(e, o), p.add(C);
            }
            async function J() {
                const e = await ye.load("/Displacement_MatcapV4.webp");
                e.colorSpace = _e, a = (await Me.load("/circle.glb", true)).scene.getObjectByName("Circle"), a.material = new Se({
                    baseMaterial: Pe,
                    matcap: e,
                    side: L,
                    uniforms: {
                        u_MousePosition: {
                            value: new O(-9999, 0)
                        },
                        u_AnimateIn: {
                            value: 1
                        },
                        u_DisplacementStrength: {
                            value: 0.1
                        },
                        u_Speed: {
                            value: 0.5
                        },
                        u_Time: {
                            value: 0
                        },
                        u_NoiseStrength: {
                            value: 0.5
                        },
                        u_FractAmount: {
                            value: 4
                        }
                    },
                    vertexShader: be,
                    fragmentShader: `
			varying float vPattern;
			varying float v_Distance;

			void main() {
				vec3 color = vec3(v_Distance);

			// csm_FragColor = vec4(color, 1.);
			}
		`
                }), p.add(a);
            }

            function Z() {
                b = new ze();
            }

            function K() {
                T.create({
                    type: "pointer",
                    onMove: (e) => {
                        !n(d) || !n(r) || (v = e.x / n(c) * 2 - 1, f = -(e.y / n(l)) * 2 + 1, i.to(w, {
                            x: () => v * 0.8,
                            y: () => f * 0.8,
                            duration: 0.4,
                            ease: "power2.out",
                            overwrite: true
                        }));
                    }
                }), T.create({
                    type: "touch",
                    target: n(M),
                    onPress: (e) => {
                        !n(d) || n(r) || (v = e.x / n(c) * 2 - 1, f = -((e.y - n(R)) / n(l)) * 2 + 1, i.to(a.material.uniforms.u_DisplacementStrength, {
                            value: () => 0.25,
                            duration: () => 0.3,
                            ease: "power2.out",
                            overwrite: true
                        }), x.isSoundEnabled && S.emit(_.PLAY_CIRCLE_SFX));
                    },
                    onDrag: (e) => {
                        !n(d) || n(r) || (v = e.x / n(c) * 2 - 1, f = -((e.y - n(R)) / n(l)) * 2 + 1, i.to(w, {
                            x: () => v * 0.2,
                            y: () => f * 0.2,
                            duration: 0.4,
                            ease: "power2.out",
                            overwrite: true
                        }));
                    },
                    onRelease: () => {
                        !n(d) || n(r) || (i.to(a.material.uniforms.u_DisplacementStrength, {
                            value: () => 0.1,
                            duration: () => 0.5,
                            ease: "power2.out",
                            overwrite: true
                        }), S.emit(_.STOP_CIRCLE_SFX));
                    }
                });
            }

            function Q() {
                b.setFromCamera(new O(v, f), t);
                const e = b.intersectObject(C);
                N(A, e.length > 0), e.length && a.material.uniforms.u_MousePosition.value.set(e[0].point.x, e[0].point.y);
            }

            function $() {
                I = Y.create(n(P), {
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
                    const o = i.getProperty(n(P), "x");
                    g.rotation.y = -(o * 35e-4);
                }
            }
            return (e, o) => (he(), we("div", Ie, [
                k("canvas", {
                    class: "canvas",
                    ref_key: "canvasRef",
                    ref: M,
                    width: V(c),
                    height: V(l)
                }, null, 8, Re),
                k("div", {
                    class: "fixed top-0 left-0 bg-white w-10 aspect-square invisible",
                    ref_key: "draggableDummyRef",
                    ref: P
                }, null, 512)
            ]));
        }
    };
    Fe = H(De, [
        [
            "__scopeId",
            "data-v-97c1c28a"
        ]
    ]);
});
export {
    Fe as _,
    __tla
};