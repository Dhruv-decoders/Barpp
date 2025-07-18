const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./DD1_Hh7X.js", "./BXg6ZhiP.js", "./DRwXc3fR.js", "./entry.D2K20ird.css", "./nQE8Ziy-.js", "./DF1vY5yY.js", "./CI8pHMb7.js", "./index.D3n3syXv.css", "./Pw6zLrTA.js", "./index.-yFVtmFo.css", "./BzFVioGV.js", "./index.dX3FytUd.css"]))) => i.map(i => d[i]);
import {
    D as Je,
    H as ue,
    F as _e,
    f as de,
    L as Qe,
    g as De,
    _ as ae,
    h as Ie,
    i as Re,
    j as Ke,
    k as ie,
    l as me,
    s as O,
    m as re,
    n as Fe,
    p as Te,
    q as Me,
    R as en,
    V as ve,
    r as nn,
    v as Oe,
    x as Se,
    y as tn,
    z as an,
    A as on,
    B as q,
    C as Z,
    E as X,
    G as sn,
    I as te,
    J as n,
    S as rn,
    P as ln,
    W as cn,
    K as pn,
    M as un,
    N as dn,
    O as mn,
    Q as fn,
    T as _n,
    U as vn,
    X as hn,
    Y as gn,
    c as J,
    o as G,
    a as e,
    Z as I,
    $ as yn,
    a0 as ke,
    a1 as We,
    a2 as se,
    w as B,
    b as E,
    a3 as le,
    a4 as wn,
    a5 as Le,
    a6 as Be,
    a7 as xn,
    t as he,
    a8 as ge,
    a9 as ye,
    aa as we,
    ab as xe,
    ac as be,
    ad as bn,
    __tla as __tla_0
} from "./DRwXc3fR.js";
import {
    z as In
} from "./nQE8Ziy-.js";
import {
    _ as Rn
} from "./DF1vY5yY.js";
import {
    _ as Tn,
    __tla as __tla_1
} from "./Pw6zLrTA.js";
import {
    _ as Mn
} from "./BzFVioGV.js";
import {
    u as Sn
} from "./CI8pHMb7.js";
let Cn, dt;
let __tla = Promise.all([
    (() => {
        try {
            return __tla_0;
        } catch {}
    })(),
    (() => {
        try {
            return __tla_1;
        } catch {}
    })()
]).then(async () => {
    Cn = class extends Je {
        constructor(d) {
            super(d), this.type = ue;
        }
        parse(d) {
            const a = function(t, r) {
                    switch (t) {
                        case 1:
                            throw new Error("THREE.RGBELoader: Read Error: " + (r || ""));
                        case 2:
                            throw new Error("THREE.RGBELoader: Write Error: " + (r || ""));
                        case 3:
                            throw new Error("THREE.RGBELoader: Bad File Format: " + (r || ""));
                        default:
                        case 4:
                            throw new Error("THREE.RGBELoader: Memory Error: " + (r || ""));
                    }
                },
                A = `
`,
                p = function(t, r, m) {
                    r = r || 1024;
                    let v = t.pos,
                        T = -1,
                        f = 0,
                        S = "",
                        y = String.fromCharCode.apply(null, new Uint16Array(t.subarray(v, v + 128)));
                    for (; 0 > (T = y.indexOf(A)) && f < r && v < t.byteLength;) S += y, f += y.length, v += 128, y += String.fromCharCode.apply(null, new Uint16Array(t.subarray(v, v + 128)));
                    return -1 < T ? (t.pos += f + T + 1, S + y.slice(0, T)) : false;
                },
                L = function(t) {
                    const r = /^#\?(\S+)/,
                        m = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
                        s = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
                        v = /^\s*FORMAT=(\S+)\s*$/,
                        T = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
                        f = {
                            valid: 0,
                            string: "",
                            comments: "",
                            programtype: "RGBE",
                            format: "",
                            gamma: 1,
                            exposure: 1,
                            width: 0,
                            height: 0
                        };
                    let S, y;
                    for ((t.pos >= t.byteLength || !(S = p(t))) && a(1, "no header found"), (y = S.match(r)) || a(3, "bad initial token"), f.valid |= 1, f.programtype = y[1], f.string += S + `
`; S = p(t), S !== false;) {
                        if (f.string += S + `
`, S.charAt(0) === "#") {
                            f.comments += S + `
`;
                            continue;
                        }
                        if ((y = S.match(m)) && (f.gamma = parseFloat(y[1])), (y = S.match(s)) && (f.exposure = parseFloat(y[1])), (y = S.match(v)) && (f.valid |= 2, f.format = y[1]), (y = S.match(T)) && (f.valid |= 4, f.height = parseInt(y[1], 10), f.width = parseInt(y[2], 10)), f.valid & 2 && f.valid & 4) break;
                    }
                    return f.valid & 2 || a(3, "missing format specifier"), f.valid & 4 || a(3, "missing image size specifier"), f;
                },
                R = function(t, r, m) {
                    const s = r;
                    if (s < 8 || s > 32767 || t[0] !== 2 || t[1] !== 2 || t[2] & 128) return new Uint8Array(t);
                    s !== (t[2] << 8 | t[3]) && a(3, "wrong scanline width");
                    const v = new Uint8Array(4 * r * m);
                    v.length || a(4, "unable to allocate buffer space");
                    let T = 0,
                        f = 0;
                    const S = 4 * s,
                        y = new Uint8Array(4),
                        N = new Uint8Array(S);
                    let ce = m;
                    for (; ce > 0 && f < t.byteLength;) {
                        f + 4 > t.byteLength && a(1), y[0] = t[f++], y[1] = t[f++], y[2] = t[f++], y[3] = t[f++], (y[0] != 2 || y[1] != 2 || (y[2] << 8 | y[3]) != s) && a(3, "bad rgbe scanline format");
                        let K = 0,
                            H;
                        for (; K < S && f < t.byteLength;) {
                            H = t[f++];
                            const j = H > 128;
                            if (j && (H -= 128), (H === 0 || K + H > S) && a(3, "bad scanline data"), j) {
                                const Y = t[f++];
                                for (let pe = 0; pe < H; pe++) N[K++] = Y;
                            } else N.set(t.subarray(f, f + H), K), K += H, f += H;
                        }
                        const fe = s;
                        for (let j = 0; j < fe; j++) {
                            let Y = 0;
                            v[T] = N[j + Y], Y += s, v[T + 1] = N[j + Y], Y += s, v[T + 2] = N[j + Y], Y += s, v[T + 3] = N[j + Y], T += 4;
                        }
                        ce--;
                    }
                    return v;
                },
                k = function(t, r, m, s) {
                    const v = t[r + 3],
                        T = Math.pow(2, v - 128) / 255;
                    m[s + 0] = t[r + 0] * T, m[s + 1] = t[r + 1] * T, m[s + 2] = t[r + 2] * T, m[s + 3] = 1;
                },
                b = function(t, r, m, s) {
                    const v = t[r + 3],
                        T = Math.pow(2, v - 128) / 255;
                    m[s + 0] = de.toHalfFloat(Math.min(t[r + 0] * T, 65504)), m[s + 1] = de.toHalfFloat(Math.min(t[r + 1] * T, 65504)), m[s + 2] = de.toHalfFloat(Math.min(t[r + 2] * T, 65504)), m[s + 3] = de.toHalfFloat(1);
                },
                D = new Uint8Array(d);
            D.pos = 0;
            const z = L(D),
                C = z.width,
                _ = z.height,
                c = R(D.subarray(D.pos), C, _);
            let u, i, P;
            switch (this.type) {
                case _e:
                    P = c.length / 4;
                    const t = new Float32Array(P * 4);
                    for (let m = 0; m < P; m++) k(c, m * 4, t, m * 4);
                    u = t, i = _e;
                    break;
                case ue:
                    P = c.length / 4;
                    const r = new Uint16Array(P * 4);
                    for (let m = 0; m < P; m++) b(c, m * 4, r, m * 4);
                    u = r, i = ue;
                    break;
                default:
                    throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
            }
            return {
                width: C,
                height: _,
                data: u,
                header: z.string,
                gamma: z.gamma,
                exposure: z.exposure,
                type: i
            };
        }
        setDataType(d) {
            return this.type = d, this;
        }
        load(d, w, o, g) {
            function V(a, F) {
                switch (a.type) {
                    case _e:
                    case ue:
                        a.colorSpace = Qe, a.minFilter = De, a.magFilter = De, a.generateMipmaps = false, a.flipY = true;
                        break;
                }
                w && w(a, F);
            }
            return super.load(d, V, o, g);
        }
    };
    var En = `varying float v_Displace;
varying float v_AnimateIn;

uniform vec3 u_InstancePositions[40];
uniform vec3 u_TargetPositions[40];
uniform vec3 u_TargetRotations[40];
uniform float u_Random[40];
uniform float u_Time;
uniform vec2 u_MousePosition;
uniform float u_Displacement;
uniform float u_AnimateIn;

#ifndef FNC_CUBICOUT
#define FNC_CUBICOUT
float cubicOut(in float t) {
    float f = t - 1.0;
    return f * f * f + 1.0;
}
#endif

mat4 rotateX(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat4(
        1.0, 0.0, 0.0, 0.0,
        0.0, c, -s, 0.0,
        0.0, s, c, 0.0,
        0.0, 0.0, 0.0, 1.0
    );
}

mat4 rotateY(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat4(
        c, 0.0, s, 0.0,
        0.0, 1.0, 0.0, 0.0,
        -s, 0.0, c, 0.0,
        0.0, 0.0, 0.0, 1.0
    );
}

mat4 rotateZ(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat4(
        c, -s, 0.0, 0.0,
        s, c, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
    );
}

float map(in float v, in float iMin, in float iMax, in float oMin, in float oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }

float sineOut(in float t) { return sin(t * PI_HALF); }
float exponentialOut(in float t) { return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t); }

void main() {
  float instanceIndex = getIndirectIndex(gl_DrawID);
  float random = u_Random[int(instanceIndex)];

  vec3 instancePosition = u_InstancePositions[int(instanceIndex)];
  vec3 targetPosition = u_TargetPositions[int(instanceIndex)];
  vec3 targetRotation = u_TargetRotations[int(instanceIndex)];

  float dist = distance(vec3(u_MousePosition, 0.0), instancePosition);

  float delay = random * 0.2;
  float normalizedDelay = delay * (1.0 - u_AnimateIn);
  float delayedAnimateIn = max(0.0, u_AnimateIn - (normalizedDelay));

  float animateIn = map(delayedAnimateIn, 0.0, 1.0, -2.0, 2.5);
  animateIn = smoothstep(random*0.6, 1.0 - random*0.06, delayedAnimateIn);
  animateIn = cubicOut(animateIn);
  v_AnimateIn = animateIn;

  dist = smoothstep(1.5, 0.3, dist);
  float displace = dist * u_Displacement;
  v_Displace = displace;

  mat4 rotMatrix = rotateZ(targetRotation.z * displace * random * 1.7) *
                    rotateY(targetRotation.y * displace * random * 2.13) *
                    rotateX(targetRotation.x * displace * random * 1.32);

  float floatingY = sin(u_Time*(0.7 + random) + random*3.0)*0.1*random*displace;
  vec3 floatingPosition = position + vec3(0.0, floatingY, 0.0);

  vec4 pos = rotMatrix*vec4(floatingPosition, 1.0);

  vec3 animateInPosition = targetPosition*(1.0 - animateIn)*0.6;
  vec3 displacedPosition = pos.xyz + targetPosition*displace*0.45;

  csm_Position = displacedPosition + animateInPosition;
}`,
        An = `varying float v_Displace;
varying float v_AnimateIn;
uniform vec2 u_Resolution;
uniform float u_Time;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  i = mod(i, 289.0 );
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 1.0/7.0; 
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

float map(in float v, in float iMin, in float iMax, in float oMin, in float oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }

#define COLOR_1 vec3(255.0, 30.0, 0.0) / 255.0
#define COLOR_2 vec3(255.0, 5.0, 0.0) / 255.0

void main() {
  
  vec2 screenUV = gl_FragCoord.xy / u_Resolution;

  float noise = snoise(vec3(screenUV * 1.0 + u_Time*0.1, u_Time*0.2));
  noise = map(noise, 0.0, 1.0, 0.5, 1.0);
  vec3 col = mix(COLOR_1, COLOR_2, noise);

  
  float csm_Alpha = smoothstep(0.0, 0.35, v_AnimateIn);

  csm_DiffuseColor = vec4(col, 1.0);
}`;
    const Pn = {
            class: "webgl-chevron"
        },
        Dn = [
            "width",
            "height"
        ],
        ze = 3.7,
        Ve = 3.9,
        kn = {
            __name: "index",
            setup(Q) {
                const d = Ie(),
                    w = Re(),
                    o = Ke(),
                    {
                        gsap: g,
                        Observer: V,
                        Draggable: a
                    } = ie(),
                    F = me(),
                    x = O(null),
                    M = O(null),
                    A = O(null),
                    p = re(F),
                    {
                        pixelRatio: L
                    } = Fe(),
                    {
                        width: R,
                        height: k
                    } = Te(),
                    {
                        width: b,
                        height: D
                    } = Me(x),
                    z = O(false),
                    C = O(false),
                    _ = O(false),
                    c = new en(),
                    u = new ve(),
                    i = O(null);
                nn({
                    source: i
                });
                const P = {
                    x: 0,
                    y: 0
                };
                let t, r, m, s, v, T, f, S, y, N;
                Oe(async () => {
                    if (await Se(), Y(), pe(), Ge(), await Ue(), await $e(), K(), S = g.quickTo(v.rotation, "x", {
                            duration: 0.4,
                            ease: "power2.out"
                        }), y = g.quickTo(v.rotation, "y", {
                            duration: 0.4,
                            ease: "power2.out"
                        }), ce(), tn("debug", "chevron")) {
                        const {
                            createChevronDebug: l
                        } = await an(async () => {
                                const {
                                    createChevronDebug: h
                                } = await
                                import ("./DD1_Hh7X.js");
                                return {
                                    createChevronDebug: h
                                };
                            }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
                            import.meta.url);
                        l(s);
                    }
                    on("alt_layout") ? (s.material.uniforms.u_AnimateIn.value = 1, d.setCursorColor("white"), q(z, true)) : Z.once(X.START_ANIMATE_IN, () => {
                        q(z, true), g.fromTo(s.material.uniforms.u_AnimateIn, {
                            value: 0
                        }, {
                            value: 1,
                            duration: 2.3,
                            ease: "circ.out",
                            delay: 0.2
                        });
                    }), window.addEventListener("resize", Ye), q(_, true);
                }), te([
                    p,
                    _
                ], ([l, h]) => {
                    h && (l ? g.ticker.add(H) : (g.ticker.remove(H), d.setCursorState("idle"), d.setCursorLabel(null)));
                }), te([
                    L,
                    _
                ], ([l, h]) => {
                    h && m.setPixelRatio(Math.min(l, 1));
                }), te([
                    C,
                    z,
                    () => w.isInit,
                    () => d.isContactOverlayVisible
                ], ([l, h, W, U]) => {
                    !h || !W || U || (d.setCursorState(l ? "icon-hover" : "idle"), d.setCursorLabel(l ? "drag" : null), g.to(s.material.uniforms.u_Displacement, {
                        value: () => l ? 1 : 0,
                        overwrite: true,
                        ease: "power2.out",
                        duration: () => l ? 0.4 : 0.3
                    }), l && w.isSoundEnabled && !d.isContactOverlayVisible && Z.emit(X.PLAY_RANDOM_SHATTER_SFX));
                });

                function ce() {
                    V.create({
                        target: window,
                        type: "pointer",
                        onMove: (h) => {
                            l(h), Ee(h);
                        }
                    }), V.create({
                        target: window,
                        type: "touch",
                        onChange: (h) => {
                            l(h), Ee(h);
                        },
                        onPress: () => {
                            g.to(s.material.uniforms.u_Displacement, {
                                value: 1,
                                overwrite: true,
                                ease: "power2.out",
                                duration: 0.3
                            });
                        },
                        onRelease: () => {
                            g.to(s.material.uniforms.u_Displacement, {
                                value: 0,
                                overwrite: true,
                                ease: "power2.out",
                                duration: 0.4
                            }), S(0), y(0);
                        }
                    });

                    function l(h) {
                        const W = h.x / n(R) * 2 - 1,
                            U = -(h.y / n(k)) * 2 + 1;
                        S(U * Math.PI * 0.08), y(W * Math.PI * -0.08);
                    }
                }

                function K() {
                    a.create(n(A), {
                        cursor: "default",
                        activeCursor: "default",
                        type: "x",
                        trigger: n(x),
                        inertia: true,
                        throwResistance: 6e3,
                        onDrag: l,
                        onThrowUpdate: l
                    });

                    function l() {
                        const h = g.getProperty(n(A), "x");
                        s.rotation.y = Math.PI * -0.15 + h * 35e-4;
                    }
                }

                function H(l = 0) {
                    n(_) && (fe(l), j());
                }

                function fe(l = 0) {
                    r.position.z = n(b) >= 1024 ? ze : Ve, s.material.uniforms.u_Time.value = l, He();
                }

                function j() {
                    m.render(t, r);
                }

                function Y() {
                    t = new rn();
                }

                function pe() {
                    r = new ln(75, n(b) / n(D), 0.1, 100), r.position.set(0, 0, n(b) >= 1024 ? ze : Ve);
                }

                function Ge() {
                    m = new cn({
                        canvas: n(M),
                        alpha: true,
                        antialias: true
                    }), m.setSize(n(b), n(D)), m.setPixelRatio(Math.min(n(L), 1));
                }

                function Ee(l) {
                    P.x = l.x, P.y = l.y;
                }

                function He() {
                    u.set(P.x / n(R) * 2 - 1, (P.y + o.getAnimatedScroll) / n(k) * -2 + 1), c.setFromCamera(u, r);
                    const l = c.intersectObject(T);
                    q(C, l.length > 0), l.length > 0 && s.material.uniforms.u_MousePosition.value.set(u.x, u.y);
                }
                async function Ue() {
                    return new Promise((l) => {
                        f = new Cn(pn).setPath("/hdr/").load("option_8.hdr", function() {
                            f.mapping = un, l();
                        });
                    });
                }
                async function $e() {
                    const l = await dn.load("/Chevron_BaseState.glb"),
                        h = l.scene.children[0],
                        W = await fetch("/chevron.json"),
                        {
                            targetPositions: U,
                            targetRotations: ee
                        } = await W.json(),
                        oe = new Float32Array(h.children.length);
                    for (let $ = 0; $ < h.children.length; $++) oe[$] = Math.random();
                    const Pe = new In({
                            baseMaterial: mn,
                            uniforms: {
                                u_MousePosition: {
                                    value: new ve()
                                },
                                u_InstancePositions: {
                                    value: null
                                },
                                u_TargetPositions: {
                                    value: U
                                },
                                u_TargetRotations: {
                                    value: ee
                                },
                                u_Random: {
                                    value: oe
                                },
                                u_Time: {
                                    value: 0
                                },
                                u_Displacement: {
                                    value: 0
                                },
                                u_AnimateIn: {
                                    value: 0
                                },
                                u_Resolution: {
                                    value: new ve(n(b), n(D))
                                }
                            },
                            vertexShader: En,
                            fragmentShader: An,
                            patchMap: {
                                "*": {
                                    "#include <opaque_fragment>": `
						#ifdef OPAQUE
						diffuseColor.a = 1.0;
						#endif

						#ifdef USE_TRANSMISSION
						diffuseColor.a *= material.transmissionAlpha;
						#endif

						gl_FragColor = vec4(outgoingLight, diffuseColor.a )*csm_Alpha;
					`
                                }
                            },
                            color: 16731136,
                            envMap: f,
                            envMapIntensity: 0.25,
                            transmission: 1,
                            opacity: 1,
                            metalness: 0,
                            roughness: 0,
                            ior: 2,
                            thickness: 5,
                            specularIntensity: 1,
                            specularColor: 16777215
                        }),
                        qe = h.children.reduce(($, ne) => $ + ne.geometry.attributes.position.count, 0),
                        Xe = h.children.reduce(($, ne) => $ + ne.geometry.index.count, 0);
                    s = new fn(h.children.length, qe, Xe, Pe), h.children.forEach(($) => {
                        const ne = s.addGeometry($.geometry),
                            Ze = s.addInstance(ne);
                        s.setMatrixAt(Ze, $.matrix);
                    }), je(s), s.rotation.y = Math.PI * -0.15, v = new _n(), v.add(s), t.add(v); {
                        const $ = new vn(2.6, 4.2),
                            ne = new hn({
                                color: 65280,
                                visible: false
                            });
                        T = new gn($, ne), t.add(T);
                    }
                    N = l.scene.getObjectByName("Text"), N.position.set(0, 0.2, -0.7), Ae(), t.add(N);
                }

                function Ne(l) {
                    const h = new yn(),
                        W = new ke(),
                        U = [],
                        {
                            maxInstanceCount: ee
                        } = l;
                    for (let oe = 0; oe < ee; oe++) l.getMatrixAt(oe, h), W.setFromMatrixPosition(h), new ke().setFromMatrixPosition(h), l.parent && W.applyMatrix4(l.parent.matrixWorld), U.push(W.clone());
                    return U;
                }

                function je(l) {
                    const h = Ne(l),
                        W = new Float32Array(h.length * 3);
                    h.forEach((U, ee) => {
                        W[ee * 3 + 0] = U.x, W[ee * 3 + 1] = U.y, W[ee * 3 + 2] = U.z;
                    }), l.material.uniforms.u_InstancePositions.value = W;
                }

                function Ae() {
                    const h = Math.min(n(b) / 1050, 1);
                    N.scale.setScalar(h);
                }
                const Ye = sn(async () => {
                    m && r && (r.aspect = n(b) / n(D), r.updateProjectionMatrix(), s.material.uniforms.u_Resolution.value.set(n(b), n(D)), Ae(), m.setSize(n(b), n(D)));
                }, 100);
                return (l, h) => (G(), J("div", Pn, [
                    e("div", {
                        class: "canvas-wrapper",
                        ref_key: "canvasWrapperRef",
                        ref: x
                    }, [
                        e("canvas", {
                            class: "canvas",
                            ref_key: "canvasRef",
                            ref: M,
                            width: I(b),
                            height: I(D)
                        }, null, 8, Dn)
                    ], 512),
                    e("div", {
                        class: "fixed top-0 left-0 bg-white w-10 aspect-square invisible",
                        ref_key: "draggableDummyRef",
                        ref: A
                    }, null, 512)
                ]));
            }
        },
        Ln = ae(kn, [
            [
                "__scopeId",
                "data-v-520e4343"
            ]
        ]),
        Bn = {
            class: "typewriter"
        },
        zn = {
            __name: "Typewriter",
            setup(Q) {
                const d = me(),
                    w = re(d, {
                        rootMargin: "0px 0px 100px"
                    }),
                    {
                        gsap: o,
                        SplitText: g,
                        ScrollTrigger: V
                    } = ie(),
                    a = Re(),
                    F = te(w, (M) => {
                        a.isInit && M && (x(), F());
                    });

                function x() {
                    const M = new g(n(d), {
                            type: "words"
                        }),
                        A = M.words.map((R) => R.innerHTML);
                    o.set(M.words, {
                        height: (R, k) => o.getProperty(k, "height", "em"),
                        width: (R, k) => o.getProperty(k, "width", "em"),
                        overflow: "hidden"
                    }), o.set(M.words[0], {
                        marginLeft: "3em"
                    });
                    const p = o.timeline();
                    p.fromTo(M.words, {
                        scrambleText: " "
                    }, {
                        scrambleText: (R) => A[R],
                        duration: 0.95,
                        ease: "power1.out",
                        stagger: {
                            each: 0.035,
                            from: "random"
                        },
                        onComplete: () => {}
                    }), o.matchMedia().add({
                        isDesktop: "(min-width: 768px)",
                        isMobile: "(max-width: 767px)"
                    }, (R) => {
                        const {
                            isMobile: k
                        } = R.conditions;
                        V.create({
                            animation: p,
                            trigger: n(d),
                            start: () => k ? "top 80%" : "top 95%",
                            end: () => k ? "top 80%" : "top 95%",
                            once: true
                        });
                    });
                }
                return (M, A) => (G(), J("div", Bn, [
                    We(M.$slots, "default", {}, void 0, true)
                ]));
            }
        },
        Ce = ae(zn, [
            [
                "__scopeId",
                "data-v-092f5597"
            ]
        ]),
        Vn = {};

    function Fn(Q, d) {
        const w = Ce,
            o = le;
        return G(), se(o, {
            class: "sub-hero"
        }, {
            default: B(() => [
                E(w, {
                    class: "copy | display-3"
                }, {
                    default: B(() => d[0] || (d[0] = [
                        e("p", null, " We see no limit to the potential of emerging technology. We blend artistry with innovation, and create new worlds where dreams know no bounds. ", -1),
                        e("p", null, "Come with us into the emerging world of immersive storytelling.", -1)
                    ])),
                    _: 1
                })
            ]),
            _: 1
        });
    }
    let On, Wn, Gn, Hn, Un, $n, Nn, jn, Yn, qn, Xn, Zn, Jn, Qn, Kn, et, nt, tt, at, ot, st;
    On = ae(Vn, [
        [
            "render",
            Fn
        ],
        [
            "__scopeId",
            "data-v-a2bab3a6"
        ]
    ]);
    Wn = {
        __name: "JustifiedText",
        setup(Q) {
            const d = me(),
                w = re(d),
                {
                    height: o
                } = Te(),
                {
                    gsap: g,
                    ScrollTrigger: V,
                    Flip: a,
                    Observer: F
                } = ie();
            let x = [];
            wn(w, () => {
                M();
            });

            function M() {
                const A = [
                    ...n(d).querySelectorAll(".line")
                ];
                x = A.map((C) => Me(C));
                const p = new Array(A.length),
                    L = new Array(A.length);
                for (const [C, _] of A.entries()) p[C] = a.getState(_), g.set(_, {
                    [g.utils.wrap([
                        "marginLeft",
                        "marginRight"
                    ], C)]: "auto"
                }), L[C] = a.from(p[C], {
                    duration: 1,
                    ease: "power1.inOut",
                    paused: true
                });
                let R, k;
                g.matchMedia().add({
                    isDesktop: "(min-width: 768px)",
                    isMobile: "(max-width: 767px)"
                }, (C) => {
                    const {
                        isDesktop: _,
                        isMobile: c
                    } = C.conditions;
                    k == null ? void 0 : k.kill(), R == null ? void 0 : R.kill(), _ && (R = F.create({
                        target: window,
                        type: "pointer",
                        axis: "y",
                        onMove: (u) => {
                            n(w) && D(u);
                        }
                    })), c && (k = V.create({
                        trigger: n(d),
                        start: () => "top bottom",
                        end: () => "bottom top",
                        scrub: true,
                        onUpdate: () => {
                            n(w) && z();
                        }
                    }));
                });

                function D(C) {
                    for (const [_, c] of x.entries()) {
                        const u = n(c.top) + n(c.height) / 2;
                        let i = Math.abs(C.y - u);
                        i = Math.min(1, i / n(o) * 3), i = g.utils.mapRange(0, 1, 1.2, 0, i), g.to(L[_], {
                            progress: () => i,
                            duration: 1.1,
                            ease: "sine.out",
                            overwrite: true
                        });
                    }
                }

                function z() {
                    for (const [C, _] of x.entries()) {
                        const c = n(_.top) + n(_.height) / 2,
                            u = Math.min(1, Math.abs(n(o) * 0.5 - c) / n(o) * 5);
                        g.to(L[C], {
                            progress: () => 1 - u,
                            duration: 1.1,
                            ease: "power2.out",
                            overwrite: true
                        });
                    }
                }
            }
            return (A, p) => {
                const L = le;
                return G(), se(L, {
                    class: "justified-text | display-0",
                    tag: "div"
                }, {
                    default: B(() => [
                        We(A.$slots, "default", {}, void 0, true)
                    ]),
                    _: 3
                });
            };
        }
    };
    Gn = ae(Wn, [
        [
            "__scopeId",
            "data-v-014f0b0b"
        ]
    ]);
    Hn = [
        "width",
        "height"
    ];
    Un = {
        __name: "LogoDraw",
        setup(Q) {
            const d = O(null),
                w = O(null),
                o = O({
                    x: 0,
                    y: 0
                }),
                {
                    width: g,
                    height: V
                } = Me(d),
                {
                    pixelRatio: a
                } = Fe(),
                F = re(d),
                {
                    gsap: x,
                    Observer: M,
                    ScrollTrigger: A
                } = ie();
            let p = null,
                L = null,
                R = [],
                k = false;
            Oe(async () => {
                await Se(), p = n(w).getContext("2d", {
                    antialias: true
                }), p.lineCap = "round", p.lineJoin = "round";
            }), te(F, () => {
                n(F) ? (!k && C(), b(), x.ticker.add(D), k = true) : (L == null ? void 0 : L.kill(), x.ticker.remove(D));
            });

            function b() {
                L = M.create({
                    target: n(d),
                    type: "pointer",
                    onHover: (_) => {
                        R.push([{
                            x: parseInt(_.event.offsetX),
                            y: parseInt(_.event.offsetY)
                        }]), q(o, {
                            x: parseInt(_.event.offsetX),
                            y: parseInt(_.event.offsetY)
                        });
                    },
                    onMove: (_) => {
                        q(o, {
                            x: parseInt(_.event.offsetX),
                            y: parseInt(_.event.offsetY)
                        }), z();
                    }
                });
            }

            function D() {
                p.clearRect(0, 0, n(g) * n(a), n(g) * n(a)), p.strokeStyle = "#FF4C00";
                for (const _ of R) _.length > 1 && (p.beginPath(), p.lineWidth = 3 * n(a), _.forEach((c, u) => {
                    u === 0 ? p.moveTo(c.x * n(a), c.y * n(a)) : p.lineTo(c.x * n(a), c.y * n(a));
                }), p.stroke());
            }

            function z() {
                const _ = x.utils.random(20, 80),
                    c = R[R.length - 1];
                c !== void 0 && (c.length === 0 || Math.sqrt(Math.pow(n(o).x - c[c.length - 1].x, 2) + Math.pow(n(o).y - c[c.length - 1].y, 2)) >= _) && c.push({
                    x: n(o).x,
                    y: n(o).y
                });
            }

            function C() {
                R.push([]);
                const _ = 35;
                let c = 0;
                A.create({
                    trigger: n(d),
                    start: () => "top 70%",
                    end: () => "top 70%",
                    onEnter: () => {
                        u();
                    },
                    markers: false,
                    once: true
                });

                function u() {
                    const i = n(g) / 4,
                        P = n(V) / 3,
                        t = x.utils.random([
                            0,
                            1,
                            2,
                            3
                        ]),
                        r = x.utils.random(i * t, i * t + i),
                        m = x.utils.random([
                            0,
                            1,
                            2
                        ]),
                        s = x.utils.random(P * m, P * m + P);
                    c++, q(o, {
                        x: r,
                        y: s
                    }), z(), c < _ && x.delayedCall(0.07, () => {
                        u();
                    });
                }
            }
            return (_, c) => {
                const u = Ce,
                    i = le;
                return G(), se(i, {
                    class: "logo-draw"
                }, {
                    default: B(() => [
                        c[3] || (c[3] = e("p", {
                            class: "instructions | body-1"
                        }, "Scratch around", -1)),
                        e("div", {
                            class: "canvas-wrapper",
                            ref_key: "canvasWrapperRef",
                            ref: d
                        }, [
                            e("canvas", {
                                class: "canvas",
                                width: I(g) * I(a),
                                height: I(V) * I(a),
                                ref_key: "canvasRef",
                                ref: w
                            }, null, 8, Hn),
                            c[0] || (c[0] = e("svg", {
                                class: "image | md-down:hidden",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 53 17",
                                fill: "none",
                                "aria-hidden": "true"
                            }, [
                                e("path", {
                                    fill: "#fff",
                                    "fill-rule": "evenodd",
                                    d: "M22.733 0c4.553 0 8.42 3.317 8.42 8.465 0 5.125-3.867 8.442-8.42 8.442-4.576 0-8.442-3.317-8.442-8.442C14.291 3.317 18.157 0 22.733 0ZM0 .05V0h53v17H0v-.144h4.268V.05H0Zm22.733 13.156c2.182 0 4.541-1.47 4.541-4.764 0-3.295-2.36-4.787-4.54-4.787-2.205 0-4.565 1.492-4.565 4.787 0 3.294 2.36 4.764 4.564 4.764Zm19.622 3.65V.05H52.93v3.5h-6.863v3.242h6.205v3.266h-6.206v3.272h6.864v3.525H42.355ZM35.367.05H30.48l5.399 8.414-5.377 8.392h4.884l5.377-8.392L35.368.05Zm-20.409 0h-4.885L4.676 8.464l5.378 8.393h4.885L9.561 8.465 14.959.05Z",
                                    "clip-rule": "evenodd"
                                })
                            ], -1)),
                            c[1] || (c[1] = e("svg", {
                                class: "image | md:hidden",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 11 17",
                                fill: "none",
                                "aria-hidden": "true"
                            }, [
                                e("path", {
                                    fill: "#fff",
                                    "fill-rule": "evenodd",
                                    d: "M5.398 8.413 0 0v17h11V0H4.885l5.398 8.413-5.378 8.393H.02l5.378-8.393Z",
                                    "clip-rule": "evenodd"
                                })
                            ], -1))
                        ], 512),
                        E(u, {
                            class: "copy | display-3"
                        }, {
                            default: B(() => c[2] || (c[2] = [
                                e("p", null, " We already make great content. This is the next level of creative expression - we won't let you be left behind. ", -1)
                            ])),
                            _: 1
                        })
                    ]),
                    _: 1
                });
            };
        }
    };
    $n = ae(Un, [
        [
            "__scopeId",
            "data-v-26f2c569"
        ]
    ]);
    Nn = [
        "data-fully-visible"
    ];
    jn = {
        class: "service-header | display-4"
    };
    Yn = {
        class: "flex"
    };
    qn = {
        class: "overflow-hidden grid"
    };
    Xn = [
        "innerHTML"
    ];
    Zn = {
        class: "buttons"
    };
    Jn = {
        class: "col-start-1 row-start-1 relative z-[1] overflow-hidden size-full grid grid-cols-1 grid-rows-1 pointer-events-none"
    };
    Qn = {
        __name: "Services",
        setup(Q) {
            const d = Re(),
                w = Ie(),
                {
                    gsap: o,
                    ScrollTrigger: g,
                    SplitText: V
                } = ie(),
                a = me(),
                F = O(null),
                x = O(null),
                M = O(null),
                A = O(null),
                p = O(-1),
                {
                    height: L
                } = Te(),
                {
                    isMedium: R
                } = Sn(),
                k = re(a),
                b = [{
                        title: "Ideate",
                        description: `
			We<br>
			define objectives<br>
			share ideas<br>
			explore the possibilities with tech<br>
			and agree a concept
		`,
                        items: [
                            "Virtual, Mixed & Augmented Reality",
                            "Spatial Computing & Generative AI",
                            "Holographic & Projection Mapping",
                            "Stereoscopic Filming & 3D Capture",
                            "Location-Based & Interactive Experiences",
                            "Experiential & Immersive Brand Activations",
                            "Immersive Storytelling & Narrative",
                            "Creative Strategy & Concept Development",
                            "Innovative Tech-Driven Solutions"
                        ]
                    },
                    {
                        title: "Create",
                        description: `
			We<br>
			reimagine stories<br>
			cut through the noise<br>
			elevate the brand experience<br>
			and bring bold, visionary ideas to life
		`,
                        items: [
                            "Virtual, Mixed & Augmented Reality",
                            "Spatial Computing & Generative AI",
                            "Holographic & Projection Mapping",
                            "Stereoscopic Filming & 3D Capture",
                            "Location-Based & Interactive Experiences",
                            "Experiential & Immersive Brand Activations",
                            "Immersive Storytelling & Narrative",
                            "Creative Strategy & Concept Development",
                            "Innovative Tech-Driven Solutions"
                        ]
                    },
                    {
                        title: "Deliver",
                        description: `
			We<br>
			Blend the physical and virtual world<br>
			Build immersive, tech-driven experiences<br>
			work with a proven collective of talent<br>
			and so deliver visionary work
		`,
                        items: [
                            "Virtual, Mixed & Augmented Reality",
                            "Spatial Computing & Generative AI",
                            "Holographic & Projection Mapping",
                            "Stereoscopic Filming & 3D Capture",
                            "Location-Based & Interactive Experiences",
                            "Experiential & Immersive Brand Activations",
                            "Immersive Storytelling & Narrative",
                            "Creative Strategy & Concept Development",
                            "Innovative Tech-Driven Solutions"
                        ]
                    }
                ];
            let D = null,
                z = null;
            const C = te(k, (u) => {
                u && (c(), C());
            });
            te(p, async (u, i) => {
                if (u === -1 || u === i) return;
                D == null ? void 0 : D.kill(), z == null ? void 0 : z.kill(), o.set([
                    n(x),
                    n(M)
                ], {
                    visibility: "hidden"
                }), await Se(), o.set(n(x), {
                    textContent: b[u].title
                }), o.set(n(M), {
                    innerHTML: b[u].description
                });
                const P = new V(n(x), {
                    types: "words,chars"
                });
                D = o.fromTo(P.chars, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: 0.5,
                    stagger: {
                        amount: 0.35,
                        ease: "power1.in",
                        from: "random"
                    },
                    onStart: () => {
                        o.set(n(x), {
                            visibility: "visible"
                        });
                    }
                }), z = o.fromTo(n(M), {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: 0.5,
                    ease: "power1.out"
                });
            });

            function _(u) {
                q(p, o.utils.clamp(0, b.length - 1, n(p) + u));
                const i = n(L) + n(L) * n(p) * 3;
                Z.emit(X.SCROLL_TO, {
                    target: n(a),
                    options: {
                        immediate: true,
                        force: true,
                        offset: i
                    }
                });
            }
            async function c() {
                g.create({
                    trigger: n(a),
                    start: () => "top top",
                    end: () => "top top-=100%",
                    onUpdate: (i) => {
                        d.isInit && (q(p, i.progress > 0.45 ? 0 : -1), w.setServicesVisible(i.progress > 0.45), w.setForceUiWhite(i.progress > 0.45), Z.emit(i.progress > 0.45 ? X.BG_SWITCH_TO_FILTERED : X.BG_SWITCH_TO_DEFAULT));
                    },
                    scrub: true,
                    markers: false
                }), g.create({
                    trigger: n(a),
                    start: () => "bottom bottom+=50%",
                    end: () => "bottom bottom+=50%",
                    onEnter: () => {
                        d.isInit && (Z.emit(X.BG_SWITCH_TO_DEFAULT), w.setServicesVisible(false), w.setForceUiWhite(false));
                    },
                    onLeaveBack: () => {
                        d.isInit && (Z.emit(X.BG_SWITCH_TO_FILTERED), w.setServicesVisible(true), w.setForceUiWhite(true));
                    },
                    scrub: false,
                    markers: false
                }), g.create({
                    trigger: n(a),
                    start: () => "top top-=100%",
                    end: () => `+=${n(L) * 9}`,
                    onUpdate: (i) => {
                        if (!d.isInit) return;
                        const P = Math.min(Math.floor(i.progress * 3), b.length - 1);
                        q(p, P);
                    },
                    scrub: true,
                    markers: false
                });
            }
            return (u, i) => {
                const P = le,
                    t = Rn,
                    r = bn,
                    m = Tn,
                    s = Mn;
                return G(), J("div", {
                    class: "services",
                    "data-fully-visible": I(w).isServicesVisible
                }, [
                    e("div", {
                        class: "wrapper",
                        ref_key: "wrapperRef",
                        ref: F
                    }, [
                        E(P, {
                            class: "inner",
                            tag: "div"
                        }, {
                            default: B(() => {
                                var _a;
                                return [
                                    i[5] || (i[5] = e("header", {
                                        class: "header"
                                    }, [
                                        e("h2", {
                                            class: "title | body-1"
                                        }, "Our services")
                                    ], -1)),
                                    i[6] || (i[6] = e("div", {
                                        class: "canvas-mobile-wrapper",
                                        id: "canvas-mobile-wrapper"
                                    }, null, -1)),
                                    e("div", jn, [
                                        e("span", Yn, [
                                            i[4] || (i[4] = e("span", null, "00", -1)),
                                            e("span", qn, [
                                                (G(true), J(Le, null, Be(b.length, (v) => (G(), J("span", {
                                                    class: "number",
                                                    style: xn({
                                                        transform: `translateY(${(v - 1) * 100 - 100 * I(p)}%)`
                                                    }),
                                                    key: v
                                                }, he(v), 5))), 128))
                                            ])
                                        ]),
                                        e("span", {
                                            ref_key: "titleRef",
                                            ref: x
                                        }, he(b[0].title), 513)
                                    ]),
                                    e("p", {
                                        class: "description | body-1 | !leading-[1.2]",
                                        ref_key: "descriptionRef",
                                        ref: M,
                                        innerHTML: b[0].description
                                    }, null, 8, Xn),
                                    e("ul", {
                                        class: "items | body-1",
                                        ref_key: "itemsRef",
                                        ref: A
                                    }, [
                                        (G(true), J(Le, null, Be((_a = b == null ? void 0 : b[I(p)]) == null ? void 0 : _a.items, (v) => (G(), J("li", {
                                            key: v
                                        }, he(v), 1))), 128))
                                    ], 512),
                                    e("div", Zn, [
                                        e("button", {
                                            class: ge([
                                                "button | body-1 | uppercase transition-opacity duration-200 ease-out",
                                                {
                                                    "opacity-0 pointer-events-none": I(p) === 0,
                                                    "pointer-events-auto": I(p) !== 0
                                                }
                                            ]),
                                            onClick: i[0] || (i[0] = (v) => _(-1)),
                                            onPointerenter: i[1] || (i[1] = (v) => ("emitter" in u ? u.emitter : I(Z)).emit(("EVENTS" in u ? u.EVENTS : I(X)).BUTTON_HOVER))
                                        }, " Prev ", 34),
                                        e("span", {
                                            class: ge([
                                                "body-1 | uppercase pointer-events-none transition-opacity duration-200 ease-out",
                                                {
                                                    "opacity-0": I(p) === 0 || I(p) === b.length - 1
                                                }
                                            ])
                                        }, "/", 2),
                                        e("button", {
                                            class: ge([
                                                "button | body-1 | uppercase transition-opacity duration-200 ease-out",
                                                {
                                                    "opacity-0 pointer-events-none": I(p) === b.length - 1,
                                                    "pointer-events-auto": I(p) !== b.length - 1
                                                }
                                            ]),
                                            onClick: i[2] || (i[2] = (v) => _(1)),
                                            onPointerenter: i[3] || (i[3] = (v) => ("emitter" in u ? u.emitter : I(Z)).emit(("EVENTS" in u ? u.EVENTS : I(X)).BUTTON_HOVER))
                                        }, " Next ", 34)
                                    ])
                                ];
                            }),
                            _: 1
                        }),
                        e("div", Jn, [
                            E(r, null, {
                                default: B(() => [
                                    (G(), se(ye, {
                                        to: "#canvas-mobile-wrapper",
                                        disabled: I(R)
                                    }, [
                                        E(we, {
                                            name: "webgl"
                                        }, {
                                            default: B(() => [
                                                xe(E(t, {
                                                    class: "col-start-1 row-start-1"
                                                }, null, 512), [
                                                    [
                                                        be,
                                                        I(p) === 0
                                                    ]
                                                ])
                                            ]),
                                            _: 1
                                        })
                                    ], 8, [
                                        "disabled"
                                    ]))
                                ]),
                                _: 1
                            }),
                            E(r, null, {
                                default: B(() => [
                                    (G(), se(ye, {
                                        to: "#canvas-mobile-wrapper",
                                        disabled: I(R)
                                    }, [
                                        E(we, {
                                            name: "webgl"
                                        }, {
                                            default: B(() => [
                                                xe(E(m, {
                                                    class: "col-start-1 row-start-1"
                                                }, null, 512), [
                                                    [
                                                        be,
                                                        I(p) === 1
                                                    ]
                                                ])
                                            ]),
                                            _: 1
                                        })
                                    ], 8, [
                                        "disabled"
                                    ]))
                                ]),
                                _: 1
                            }),
                            E(r, null, {
                                default: B(() => [
                                    (G(), se(ye, {
                                        to: "#canvas-mobile-wrapper",
                                        disabled: I(R)
                                    }, [
                                        E(we, {
                                            name: "webgl"
                                        }, {
                                            default: B(() => [
                                                xe(E(s, {
                                                    class: "col-start-1 row-start-1"
                                                }, null, 512), [
                                                    [
                                                        be,
                                                        I(p) === 2 && I(w).isServicesVisible
                                                    ]
                                                ])
                                            ]),
                                            _: 1
                                        })
                                    ], 8, [
                                        "disabled"
                                    ]))
                                ]),
                                _: 1
                            })
                        ])
                    ], 512)
                ], 8, Nn);
            };
        }
    };
    Kn = ae(Qn, [
        [
            "__scopeId",
            "data-v-da81d76f"
        ]
    ]);
    et = [
        "data-services-visible"
    ];
    nt = {
        class: "justified-text-01",
        ref: "justifiedText01Ref"
    };
    tt = {
        class: "absolute inset-0 z-[0] bg-white",
        "aria-hidden": "true",
        "data-panel-01": "",
        ref: "panel01Ref"
    };
    at = {
        class: "justified-text-02",
        "data-panel-02": "",
        ref: "justifiedText02Ref"
    };
    ot = {
        __name: "index",
        setup(Q) {
            const d = Ie();
            return (w, o) => {
                const g = Ln,
                    V = On,
                    a = Gn,
                    F = $n,
                    x = Kn,
                    M = Ce,
                    A = le;
                return G(), J("div", {
                    "data-services-visible": I(d).isServicesVisible
                }, [
                    E(g),
                    E(V),
                    e("section", nt, [
                        E(a, {
                            class: "md-down:hidden relative z-[1]"
                        }, {
                            default: B(() => o[0] || (o[0] = [
                                e("p", null, [
                                    e("span", {
                                        class: "line | pl-[1.3em]"
                                    }, [
                                        e("span", null, "With"),
                                        e("span", null, "the"),
                                        e("span", null, "help"),
                                        e("span", null, "of")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "technology,"),
                                        e("span", null, "you"),
                                        e("span", null, "can")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "now"),
                                        e("span", null, "step"),
                                        e("span", null, "right"),
                                        e("span", null, "into")
                                    ]),
                                    e("span", {
                                        class: "line",
                                        style: {
                                            "margin-bottom": "0.8em"
                                        }
                                    }, [
                                        e("span", null, "the stories.")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "The"),
                                        e("span", null, "emotional"),
                                        e("span", null, "impact")
                                    ]),
                                    e("span", {
                                        class: "line",
                                        style: {
                                            "margin-bottom": "0.8em"
                                        }
                                    }, [
                                        e("span", null, "is off the scale.")
                                    ]),
                                    e("span", {
                                        class: "line | pl-[1.3em]"
                                    }, [
                                        e("span", null, "Tell"),
                                        e("span", null, "stories"),
                                        e("span", null, "people")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "love, share"),
                                        e("span", null, "&")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "remember.")
                                    ])
                                ], -1)
                            ])),
                            _: 1
                        }),
                        E(a, {
                            class: "md:hidden relative z-[1]"
                        }, {
                            default: B(() => o[1] || (o[1] = [
                                e("p", null, [
                                    e("span", {
                                        class: "line | pl-[0.5em]"
                                    }, [
                                        e("span", null, "With"),
                                        e("span", null, "the")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "help"),
                                        e("span", null, "of")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "tech-")
                                    ]),
                                    e("span", {
                                        class: "line | !justify-end"
                                    }, [
                                        e("span", null, "nology")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "you"),
                                        e("span", null, "can")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "now")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "step")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "right"),
                                        e("span", null, "into")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "the")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "stories.")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "The")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "emotional")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "impact is")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "off"),
                                        e("span", null, "the")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "scale.")
                                    ])
                                ], -1)
                            ])),
                            _: 1
                        }),
                        e("div", tt, null, 512)
                    ], 512),
                    E(F, {
                        class: "logo-draw"
                    }),
                    E(x, {
                        class: "relative z-0",
                        "data-services": ""
                    }),
                    e("section", at, [
                        E(a, {
                            class: "md-down:hidden relative z-[1]"
                        }, {
                            default: B(() => o[2] || (o[2] = [
                                e("p", null, [
                                    e("span", {
                                        class: "line | pl-[3.7em]"
                                    }, [
                                        e("span", null, "Creating"),
                                        e("span", null, "new")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "physical"),
                                        e("span", null, "and")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "virtual")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "worlds,"),
                                        e("span", null, "where")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "creativity")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "knows"),
                                        e("span", null, "no")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "bounds.")
                                    ])
                                ], -1)
                            ])),
                            _: 1
                        }),
                        E(a, {
                            class: "md:hidden relative z-[1]"
                        }, {
                            default: B(() => o[3] || (o[3] = [
                                e("p", null, [
                                    e("span", {
                                        class: "line | !justify-end"
                                    }, [
                                        e("span", null, "Creating")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "new")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "physical")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "and")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "virtual")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "worlds,")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "where")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "creativity")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "knows")
                                    ]),
                                    e("span", {
                                        class: "line"
                                    }, [
                                        e("span", null, "no bounds")
                                    ])
                                ], -1)
                            ])),
                            _: 1
                        }),
                        E(A, {
                            class: "text-black relative z-[1]",
                            tag: "div"
                        }, {
                            default: B(() => [
                                E(M, {
                                    class: "display-3 | col-span-full md:col-start-4 md:col-end-6 uppercase"
                                }, {
                                    default: B(() => o[4] || (o[4] = [
                                        e("p", null, " We help our clients stay bold, and form strong, enduring connections with their customers. ", -1)
                                    ])),
                                    _: 1
                                })
                            ]),
                            _: 1
                        })
                    ], 512)
                ], 8, et);
            };
        }
    };
    st = ae(ot, [
        [
            "__scopeId",
            "data-v-537b86c7"
        ]
    ]);
    dt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: st
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export {
    Cn as R,
    __tla,
    dt as i
};