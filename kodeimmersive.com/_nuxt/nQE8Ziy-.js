import {
    aB as P,
    aC as N
} from "./DRwXc3fR.js";
const D = `
    
#ifdef IS_VERTEX
    vec3 csm_Position;
    vec4 csm_PositionRaw;
    vec3 csm_Normal;

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize;
    #endif
#else
    vec4 csm_DiffuseColor;
    vec4 csm_FragColor;
    float csm_UnlitFac;

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive;
        float csm_Roughness;
        float csm_Metalness;
        float csm_Iridescence;
        
        #if defined IS_MESHPHYSICALMATERIAL
            float csm_Clearcoat;
            float csm_ClearcoatRoughness;
            vec3 csm_ClearcoatNormal;
            float csm_Transmission;
            float csm_Thickness;
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump;
        vec3 csm_FragNormal;
    #endif

    float csm_DepthAlpha;
#endif
`,
    H = `

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        csm_Position = vec3(0.0);
        csm_PositionRaw = vec4(0.0);
        csm_Normal = vec3(0.0);
    #else
        csm_Position = position;
        csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        csm_PointSize = size;
    #endif
#else
    csm_UnlitFac = 0.0;

    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHDISTANCEMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            csm_DiffuseColor = vec4(diffuse, opacity);
            csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        csm_Emissive = emissive;
        csm_Roughness = roughness;
        csm_Metalness = metalness;

        #ifdef USE_IRIDESCENCE
            csm_Iridescence = iridescence;
        #else
            csm_Iridescence = 0.0;
        #endif

        #if defined IS_MESHPHYSICALMATERIAL
            #ifdef USE_CLEARCOAT
                csm_Clearcoat = clearcoat;
                csm_ClearcoatRoughness = clearcoatRoughness;
            #else
                csm_Clearcoat = 0.0;
                csm_ClearcoatRoughness = 0.0;
            #endif

            #ifdef USE_TRANSMISSION
                csm_Transmission = transmission;
                csm_Thickness = thickness;
            #else
                csm_Transmission = 0.0;
                csm_Thickness = 0.0;
            #endif
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        csm_Bump = vec3(0.0);
        #ifdef FLAT_SHADED
            vec3 fdx = dFdx( vViewPosition );
            vec3 fdy = dFdy( vViewPosition );
            csm_FragNormal = normalize( cross( fdx, fdy ) );
        #else
            csm_FragNormal = normalize(vNormal);
            #ifdef DOUBLE_SIDED
                csm_FragNormal *= gl_FrontFacing ? 1.0 : - 1.0;
            #endif
        #endif
    #endif

    csm_DepthAlpha = 1.0;
#endif
`,
    y = `
    varying mat4 csm_internal_vModelViewMatrix;
`,
    x = `
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,
    O = `
    varying mat4 csm_internal_vModelViewMatrix;
`,
    b = `
    
`,
    e = {
        diffuse: "csm_DiffuseColor",
        roughness: "csm_Roughness",
        metalness: "csm_Metalness",
        emissive: "csm_Emissive",
        ao: "csm_AO",
        bump: "csm_Bump",
        fragNormal: "csm_FragNormal",
        clearcoat: "csm_Clearcoat",
        clearcoatRoughness: "csm_ClearcoatRoughness",
        clearcoatNormal: "csm_ClearcoatNormal",
        transmission: "csm_Transmission",
        thickness: "csm_Thickness",
        iridescence: "csm_Iridescence",
        pointSize: "csm_PointSize",
        fragColor: "csm_FragColor",
        depthAlpha: "csm_DepthAlpha",
        unlitFac: "csm_UnlitFac",
        position: "csm_Position",
        positionRaw: "csm_PositionRaw",
        normal: "csm_Normal"
    },
    F = {
        [`${e.position}`]: "*",
        [`${e.positionRaw}`]: "*",
        [`${e.normal}`]: "*",
        [`${e.depthAlpha}`]: "*",
        [`${e.pointSize}`]: ["PointsMaterial"],
        [`${e.diffuse}`]: "*",
        [`${e.fragColor}`]: "*",
        [`${e.fragNormal}`]: "*",
        [`${e.unlitFac}`]: "*",
        [`${e.emissive}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
        [`${e.roughness}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
        [`${e.metalness}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
        [`${e.iridescence}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
        [`${e.ao}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial", "MeshBasicMaterial", "MeshLambertMaterial", "MeshPhongMaterial", "MeshToonMaterial"],
        [`${e.bump}`]: ["MeshLambertMaterial", "MeshMatcapMaterial", "MeshNormalMaterial", "MeshPhongMaterial", "MeshPhysicalMaterial", "MeshStandardMaterial", "MeshToonMaterial", "ShadowMaterial"],
        [`${e.clearcoat}`]: ["MeshPhysicalMaterial"],
        [`${e.clearcoatRoughness}`]: ["MeshPhysicalMaterial"],
        [`${e.clearcoatNormal}`]: ["MeshPhysicalMaterial"],
        [`${e.transmission}`]: ["MeshPhysicalMaterial"],
        [`${e.thickness}`]: ["MeshPhysicalMaterial"]
    },
    w = {
        "*": {
            "#include <lights_physical_fragment>": N.lights_physical_fragment,
            "#include <transmission_fragment>": N.transmission_fragment
        },
        [`${e.normal}`]: {
            "#include <beginnormal_vertex>": `
    vec3 objectNormal = ${e.normal};
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `
        },
        [`${e.position}`]: {
            "#include <begin_vertex>": `
    vec3 transformed = ${e.position};
  `
        },
        [`${e.positionRaw}`]: {
            "#include <begin_vertex>": `
    vec4 csm_internal_positionUnprojected = ${e.positionRaw};
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `
        },
        [`${e.pointSize}`]: {
            "gl_PointSize = size;": `
    gl_PointSize = ${e.pointSize};
    `
        },
        [`${e.diffuse}`]: {
            "#include <color_fragment>": `
    #include <color_fragment>
    diffuseColor = ${e.diffuse};
  `
        },
        [`${e.fragColor}`]: {
            "#include <opaque_fragment>": `
    #include <opaque_fragment>
    gl_FragColor = mix(gl_FragColor, ${e.fragColor}, ${e.unlitFac});
  `
        },
        [`${e.emissive}`]: {
            "vec3 totalEmissiveRadiance = emissive;": `
    vec3 totalEmissiveRadiance = ${e.emissive};
    `
        },
        [`${e.roughness}`]: {
            "#include <roughnessmap_fragment>": `
    #include <roughnessmap_fragment>
    roughnessFactor = ${e.roughness};
    `
        },
        [`${e.metalness}`]: {
            "#include <metalnessmap_fragment>": `
    #include <metalnessmap_fragment>
    metalnessFactor = ${e.metalness};
    `
        },
        [`${e.ao}`]: {
            "#include <aomap_fragment>": `
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - ${e.ao};
    `
        },
        [`${e.bump}`]: {
            "#include <normal_fragment_maps>": `
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = ${e.bump} - (dot(${e.bump}, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `
        },
        [`${e.fragNormal}`]: {
            "#include <normal_fragment_maps>": `
      #include <normal_fragment_maps>
      normal = ${e.fragNormal};
    `
        },
        [`${e.depthAlpha}`]: {
            "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );": `
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * 1.0 - ${e.depthAlpha} );
    `,
            "gl_FragColor = packDepthToRGBA( fragCoordZ );": `
      if(${e.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `,
            "gl_FragColor = packDepthToRGBA( dist );": `
      if(${e.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `
        },
        [`${e.clearcoat}`]: {
            "material.clearcoat = clearcoat;": `material.clearcoat = ${e.clearcoat};`
        },
        [`${e.clearcoatRoughness}`]: {
            "material.clearcoatRoughness = clearcoatRoughness;": `material.clearcoatRoughness = ${e.clearcoatRoughness};`
        },
        [`${e.clearcoatNormal}`]: {
            "#include <clearcoat_normal_fragment_begin>": `
      vec3 csm_coat_internal_orthogonal = csm_ClearcoatNormal - (dot(csm_ClearcoatNormal, nonPerturbedNormal) * nonPerturbedNormal);
      vec3 csm_coat_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_coat_internal_orthogonal;
      vec3 clearcoatNormal = normalize(nonPerturbedNormal - csm_coat_internal_projectedbump);
    `
        },
        [`${e.transmission}`]: {
            "material.transmission = transmission;": `
      material.transmission = ${e.transmission};
    `
        },
        [`${e.thickness}`]: {
            "material.thickness = thickness;": `
      material.thickness = ${e.thickness};
    `
        },
        [`${e.iridescence}`]: {
            "material.iridescence = iridescence;": `
      material.iridescence = ${e.iridescence};
    `
        }
    },
    j = {
        clearcoat: [e.clearcoat, e.clearcoatNormal, e.clearcoatRoughness],
        transmission: [e.transmission],
        iridescence: [e.iridescence]
    };

function z(S) {
    let i = 0;
    for (let l = 0; l < S.length; l++) i = S.charCodeAt(l) + (i << 6) + (i << 16) - i;
    const _ = i >>> 0;
    return String(_);
}

function U(S) {
    try {
        new S();
    } catch (i) {
        if (i.message.indexOf("is not a constructor") >= 0) return false;
    }
    return true;
}

function L(S) {
    return S.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
}
class B extends P {
    constructor({
        baseMaterial: i,
        vertexShader: _,
        fragmentShader: l,
        uniforms: A,
        patchMap: v,
        cacheKey: f,
        ...m
    }) {
        if (!i) throw new Error("CustomShaderMaterial: baseMaterial is required.");
        let s;
        if (U(i)) {
            const a = Object.keys(m).length === 0;
            s = new i(a ? void 0 : m);
        } else s = i, Object.assign(s, m);
        if (["ShaderMaterial", "RawShaderMaterial"].includes(s.type)) throw new Error(`CustomShaderMaterial does not support ${s.type} as a base material.`);
        super(), this.uniforms = {}, this.vertexShader = "", this.fragmentShader = "";
        const t = s;
        t.name = `CustomShaderMaterial<${s.name || s.type}>`, t.update = this.update.bind(t), t.__csm = {
            prevOnBeforeCompile: s.onBeforeCompile,
            baseMaterial: s,
            vertexShader: _,
            fragmentShader: l,
            uniforms: A,
            patchMap: v,
            cacheKey: f
        };
        const R = { ...t.uniforms || {},
            ...A || {}
        };
        t.uniforms = this.uniforms = R, t.vertexShader = this.vertexShader = _ || "", t.fragmentShader = this.fragmentShader = l || "", t.update({
            fragmentShader: t.fragmentShader,
            vertexShader: t.vertexShader,
            uniforms: t.uniforms,
            patchMap: v,
            cacheKey: f
        }), Object.assign(this, t);
        const g = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(t));
        for (const a in g) {
            const r = g[a];
            (r.get || r.set) && Object.defineProperty(this, a, r);
        }
        return Object.defineProperty(this, "type", {
            get() {
                return s.type;
            },
            set(a) {
                s.type = a;
            }
        }), this;
    }
    update({
        fragmentShader: i,
        vertexShader: _,
        uniforms: l,
        cacheKey: A,
        patchMap: v
    }) {
        const f = L(_ || ""),
            m = L(i || ""),
            s = this;
        l && (s.uniforms = l), _ && (s.vertexShader = _), i && (s.fragmentShader = i), Object.entries(j).forEach(([a, r]) => {
            for (const M in r) {
                const n = r[M];
                (m && m.includes(n) || f && f.includes(n)) && (s[a] || (s[a] = 1));
            }
        });
        const t = s.__csm.prevOnBeforeCompile,
            R = (a, r, M) => {
                let n, u = "";
                if (r) {
                    const o = r.search(/void\s+main\s*\(\s*\)\s*{/);
                    if (o !== -1) {
                        u = r.slice(0, o);
                        let h = 0,
                            c = -1;
                        for (let d = o; d < r.length; d++)
                            if (r[d] === "{" && h++, r[d] === "}" && (h--, h === 0)) {
                                c = d;
                                break;
                            }
                        if (c !== -1) {
                            const d = r.slice(o, c + 1);
                            n = d.slice(d.indexOf("{") + 1, -1);
                        }
                    } else u = r;
                }
                if (M && r && r.includes(e.fragColor) && n && (n = `csm_UnlitFac = 1.0;
` + n), a.includes("//~CSM_DEFAULTS")) {
                    a = a.replace("void main() {", `
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          ${u}
          
          void main() {
          `);
                    const o = a.lastIndexOf("//~CSM_MAIN_END");
                    if (o !== -1) {
                        const h = `
            ${n ? `${n}` : ""}
            //~CSM_MAIN_END
          `;
                        a = a.slice(0, o) + h + a.slice(o);
                    }
                } else {
                    const o = /void\s*main\s*\(\s*\)\s*{/gm;
                    a = a.replace(o, `
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          //~CSM_DEFAULTS
          ${M ? O : y}
          ${D}
  
          ${u}
          
          void main() {
            {
              ${H}
            }
            ${M ? b : x}

            ${n ? `${n}` : ""}
            //~CSM_MAIN_END
          `);
                }
                return a;
            };
        s.onBeforeCompile = (a, r) => {
            t == null ? void 0 : t(a, r);
            const M = v || {},
                n = s.type,
                u = n ? `#define IS_${n.toUpperCase()};
` : `#define IS_UNKNOWN;
`;
            a.vertexShader = u + `#define IS_VERTEX
` + a.vertexShader, a.fragmentShader = u + `#define IS_FRAGMENT
` + a.fragmentShader;
            const o = (h) => {
                for (const c in h) {
                    const d = c === "*" || f && f.includes(c);
                    if (c === "*" || m && m.includes(c) || d) {
                        const E = F[c];
                        if (E && E !== "*" && (Array.isArray(E) ? !E.includes(n) : E !== n)) {
                            console.error(`CustomShaderMaterial: ${c} is not available in ${n}. Shader cannot compile.`);
                            return;
                        }
                        const T = h[c];
                        for (const I in T) {
                            const p = T[I];
                            if (typeof p == "object") {
                                const C = p.type,
                                    $ = p.value;
                                C === "fs" ? a.fragmentShader = a.fragmentShader.replace(I, $) : C === "vs" && (a.vertexShader = a.vertexShader.replace(I, $));
                            } else p && (a.vertexShader = a.vertexShader.replace(I, p), a.fragmentShader = a.fragmentShader.replace(I, p));
                        }
                    }
                }
            };
            o(w), o(M), a.vertexShader = R(a.vertexShader, f, false), a.fragmentShader = R(a.fragmentShader, m, true), l && (a.uniforms = { ...a.uniforms,
                ...s.uniforms
            }), s.uniforms = a.uniforms;
        };
        const g = s.customProgramCacheKey;
        s.customProgramCacheKey = () => ((A == null ? void 0 : A()) || z((f || "") + (m || ""))) + (g == null ? void 0 : g.call(s)), s.needsUpdate = true;
    }
    clone() {
        const i = this;
        return new i.constructor({
            baseMaterial: i.__csm.baseMaterial.clone(),
            vertexShader: i.__csm.vertexShader,
            fragmentShader: i.__csm.fragmentShader,
            uniforms: i.__csm.uniforms,
            patchMap: i.__csm.patchMap,
            cacheKey: i.__csm.cacheKey
        });
    }
}
export {
    B as z
};