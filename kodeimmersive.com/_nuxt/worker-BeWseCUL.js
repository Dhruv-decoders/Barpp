(function() {
    "use strict";
    /**
     * @license
     * Copyright 2010-2025 Three.js Authors
     * SPDX-License-Identifier: MIT
     */
    const Ii = "177",
        Kt = "",
        Rt = "srgb",
        Mn = "srgb-linear",
        ri = "linear",
        $e = "srgb",
        vr = "300 es";
    class En {
        addEventListener(e, t) {
            this._listeners === void 0 && (this._listeners = {});
            const n = this._listeners;
            n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t)
        }
        hasEventListener(e, t) {
            const n = this._listeners;
            return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1
        }
        removeEventListener(e, t) {
            const n = this._listeners;
            if (n === void 0) return;
            const r = n[e];
            if (r !== void 0) {
                const s = r.indexOf(t);
                s !== -1 && r.splice(s, 1)
            }
        }
        dispatchEvent(e) {
            const t = this._listeners;
            if (t === void 0) return;
            const n = t[e.type];
            if (n !== void 0) {
                e.target = this;
                const r = n.slice(0);
                for (let s = 0, a = r.length; s < a; s++) r[s].call(this, e);
                e.target = null
            }
        }
    }
    const pt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"],
        Ui = Math.PI / 180,
        Fi = 180 / Math.PI;

    function Wn() {
        const i = Math.random() * 4294967295 | 0,
            e = Math.random() * 4294967295 | 0,
            t = Math.random() * 4294967295 | 0,
            n = Math.random() * 4294967295 | 0;
        return (pt[i & 255] + pt[i >> 8 & 255] + pt[i >> 16 & 255] + pt[i >> 24 & 255] + "-" + pt[e & 255] + pt[e >> 8 & 255] + "-" + pt[e >> 16 & 15 | 64] + pt[e >> 24 & 255] + "-" + pt[t & 63 | 128] + pt[t >> 8 & 255] + "-" + pt[t >> 16 & 255] + pt[t >> 24 & 255] + pt[n & 255] + pt[n >> 8 & 255] + pt[n >> 16 & 255] + pt[n >> 24 & 255]).toLowerCase()
    }

    function Oe(i, e, t) {
        return Math.max(e, Math.min(t, i))
    }

    function Is(i, e) {
        return (i % e + e) % e
    }

    function Ni(i, e, t) {
        return (1 - t) * i + t * e
    }

    function Xn(i, e) {
        switch (e.constructor) {
            case Float32Array:
                return i;
            case Uint32Array:
                return i / 4294967295;
            case Uint16Array:
                return i / 65535;
            case Uint8Array:
                return i / 255;
            case Int32Array:
                return Math.max(i / 2147483647, -1);
            case Int16Array:
                return Math.max(i / 32767, -1);
            case Int8Array:
                return Math.max(i / 127, -1);
            default:
                throw new Error("Invalid component type.")
        }
    }

    function St(i, e) {
        switch (e.constructor) {
            case Float32Array:
                return i;
            case Uint32Array:
                return Math.round(i * 4294967295);
            case Uint16Array:
                return Math.round(i * 65535);
            case Uint8Array:
                return Math.round(i * 255);
            case Int32Array:
                return Math.round(i * 2147483647);
            case Int16Array:
                return Math.round(i * 32767);
            case Int8Array:
                return Math.round(i * 127);
            default:
                throw new Error("Invalid component type.")
        }
    }
    class Ze {
        constructor(e = 0, t = 0) {
            Ze.prototype.isVector2 = !0, this.x = e, this.y = t
        }
        get width() {
            return this.x
        }
        set width(e) {
            this.x = e
        }
        get height() {
            return this.y
        }
        set height(e) {
            this.y = e
        }
        set(e, t) {
            return this.x = e, this.y = t, this
        }
        setScalar(e) {
            return this.x = e, this.y = e, this
        }
        setX(e) {
            return this.x = e, this
        }
        setY(e) {
            return this.y = e, this
        }
        setComponent(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
            }
            return this
        }
        getComponent(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + e)
            }
        }
        clone() {
            return new this.constructor(this.x, this.y)
        }
        copy(e) {
            return this.x = e.x, this.y = e.y, this
        }
        add(e) {
            return this.x += e.x, this.y += e.y, this
        }
        addScalar(e) {
            return this.x += e, this.y += e, this
        }
        addVectors(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this
        }
        addScaledVector(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this
        }
        sub(e) {
            return this.x -= e.x, this.y -= e.y, this
        }
        subScalar(e) {
            return this.x -= e, this.y -= e, this
        }
        subVectors(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this
        }
        multiply(e) {
            return this.x *= e.x, this.y *= e.y, this
        }
        multiplyScalar(e) {
            return this.x *= e, this.y *= e, this
        }
        divide(e) {
            return this.x /= e.x, this.y /= e.y, this
        }
        divideScalar(e) {
            return this.multiplyScalar(1 / e)
        }
        applyMatrix3(e) {
            const t = this.x,
                n = this.y,
                r = e.elements;
            return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this
        }
        min(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
        }
        max(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
        }
        clamp(e, t) {
            return this.x = Oe(this.x, e.x, t.x), this.y = Oe(this.y, e.y, t.y), this
        }
        clampScalar(e, t) {
            return this.x = Oe(this.x, e, t), this.y = Oe(this.y, e, t), this
        }
        clampLength(e, t) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t))
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        }
        roundToZero() {
            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this
        }
        dot(e) {
            return this.x * e.x + this.y * e.y
        }
        cross(e) {
            return this.x * e.y - this.y * e.x
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI
        }
        angleTo(e) {
            const t = Math.sqrt(this.lengthSq() * e.lengthSq());
            if (t === 0) return Math.PI / 2;
            const n = this.dot(e) / t;
            return Math.acos(Oe(n, -1, 1))
        }
        distanceTo(e) {
            return Math.sqrt(this.distanceToSquared(e))
        }
        distanceToSquared(e) {
            const t = this.x - e.x,
                n = this.y - e.y;
            return t * t + n * n
        }
        manhattanDistanceTo(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
        }
        setLength(e) {
            return this.normalize().multiplyScalar(e)
        }
        lerp(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
        }
        lerpVectors(e, t, n) {
            return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this
        }
        equals(e) {
            return e.x === this.x && e.y === this.y
        }
        fromArray(e, t = 0) {
            return this.x = e[t], this.y = e[t + 1], this
        }
        toArray(e = [], t = 0) {
            return e[t] = this.x, e[t + 1] = this.y, e
        }
        fromBufferAttribute(e, t) {
            return this.x = e.getX(t), this.y = e.getY(t), this
        }
        rotateAround(e, t) {
            const n = Math.cos(t),
                r = Math.sin(t),
                s = this.x - e.x,
                a = this.y - e.y;
            return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this
        }*[Symbol.iterator]() {
            yield this.x, yield this.y
        }
    }
    class qn {
        constructor(e = 0, t = 0, n = 0, r = 1) {
            this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r
        }
        static slerpFlat(e, t, n, r, s, a, o) {
            let l = n[r + 0],
                c = n[r + 1],
                d = n[r + 2],
                f = n[r + 3];
            const h = s[a + 0],
                m = s[a + 1],
                v = s[a + 2],
                S = s[a + 3];
            if (o === 0) {
                e[t + 0] = l, e[t + 1] = c, e[t + 2] = d, e[t + 3] = f;
                return
            }
            if (o === 1) {
                e[t + 0] = h, e[t + 1] = m, e[t + 2] = v, e[t + 3] = S;
                return
            }
            if (f !== S || l !== h || c !== m || d !== v) {
                let p = 1 - o;
                const u = l * h + c * m + d * v + f * S,
                    A = u >= 0 ? 1 : -1,
                    y = 1 - u * u;
                if (y > Number.EPSILON) {
                    const I = Math.sqrt(y),
                        w = Math.atan2(I, u * A);
                    p = Math.sin(p * w) / I, o = Math.sin(o * w) / I
                }
                const M = o * A;
                if (l = l * p + h * M, c = c * p + m * M, d = d * p + v * M, f = f * p + S * M, p === 1 - o) {
                    const I = 1 / Math.sqrt(l * l + c * c + d * d + f * f);
                    l *= I, c *= I, d *= I, f *= I
                }
            }
            e[t] = l, e[t + 1] = c, e[t + 2] = d, e[t + 3] = f
        }
        static multiplyQuaternionsFlat(e, t, n, r, s, a) {
            const o = n[r],
                l = n[r + 1],
                c = n[r + 2],
                d = n[r + 3],
                f = s[a],
                h = s[a + 1],
                m = s[a + 2],
                v = s[a + 3];
            return e[t] = o * v + d * f + l * m - c * h, e[t + 1] = l * v + d * h + c * f - o * m, e[t + 2] = c * v + d * m + o * h - l * f, e[t + 3] = d * v - o * f - l * h - c * m, e
        }
        get x() {
            return this._x
        }
        set x(e) {
            this._x = e, this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(e) {
            this._y = e, this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(e) {
            this._z = e, this._onChangeCallback()
        }
        get w() {
            return this._w
        }
        set w(e) {
            this._w = e, this._onChangeCallback()
        }
        set(e, t, n, r) {
            return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w)
        }
        copy(e) {
            return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
        }
        setFromEuler(e, t = !0) {
            const n = e._x,
                r = e._y,
                s = e._z,
                a = e._order,
                o = Math.cos,
                l = Math.sin,
                c = o(n / 2),
                d = o(r / 2),
                f = o(s / 2),
                h = l(n / 2),
                m = l(r / 2),
                v = l(s / 2);
            switch (a) {
                case "XYZ":
                    this._x = h * d * f + c * m * v, this._y = c * m * f - h * d * v, this._z = c * d * v + h * m * f, this._w = c * d * f - h * m * v;
                    break;
                case "YXZ":
                    this._x = h * d * f + c * m * v, this._y = c * m * f - h * d * v, this._z = c * d * v - h * m * f, this._w = c * d * f + h * m * v;
                    break;
                case "ZXY":
                    this._x = h * d * f - c * m * v, this._y = c * m * f + h * d * v, this._z = c * d * v + h * m * f, this._w = c * d * f - h * m * v;
                    break;
                case "ZYX":
                    this._x = h * d * f - c * m * v, this._y = c * m * f + h * d * v, this._z = c * d * v - h * m * f, this._w = c * d * f + h * m * v;
                    break;
                case "YZX":
                    this._x = h * d * f + c * m * v, this._y = c * m * f + h * d * v, this._z = c * d * v - h * m * f, this._w = c * d * f - h * m * v;
                    break;
                case "XZY":
                    this._x = h * d * f - c * m * v, this._y = c * m * f - h * d * v, this._z = c * d * v + h * m * f, this._w = c * d * f + h * m * v;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
            }
            return t === !0 && this._onChangeCallback(), this
        }
        setFromAxisAngle(e, t) {
            const n = t / 2,
                r = Math.sin(n);
            return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this
        }
        setFromRotationMatrix(e) {
            const t = e.elements,
                n = t[0],
                r = t[4],
                s = t[8],
                a = t[1],
                o = t[5],
                l = t[9],
                c = t[2],
                d = t[6],
                f = t[10],
                h = n + o + f;
            if (h > 0) {
                const m = .5 / Math.sqrt(h + 1);
                this._w = .25 / m, this._x = (d - l) * m, this._y = (s - c) * m, this._z = (a - r) * m
            } else if (n > o && n > f) {
                const m = 2 * Math.sqrt(1 + n - o - f);
                this._w = (d - l) / m, this._x = .25 * m, this._y = (r + a) / m, this._z = (s + c) / m
            } else if (o > f) {
                const m = 2 * Math.sqrt(1 + o - n - f);
                this._w = (s - c) / m, this._x = (r + a) / m, this._y = .25 * m, this._z = (l + d) / m
            } else {
                const m = 2 * Math.sqrt(1 + f - n - o);
                this._w = (a - r) / m, this._x = (s + c) / m, this._y = (l + d) / m, this._z = .25 * m
            }
            return this._onChangeCallback(), this
        }
        setFromUnitVectors(e, t) {
            let n = e.dot(t) + 1;
            return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize()
        }
        angleTo(e) {
            return 2 * Math.acos(Math.abs(Oe(this.dot(e), -1, 1)))
        }
        rotateTowards(e, t) {
            const n = this.angleTo(e);
            if (n === 0) return this;
            const r = Math.min(1, t / n);
            return this.slerp(e, r), this
        }
        identity() {
            return this.set(0, 0, 0, 1)
        }
        invert() {
            return this.conjugate()
        }
        conjugate() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
        }
        dot(e) {
            return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        }
        normalize() {
            let e = this.length();
            return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
        }
        multiply(e) {
            return this.multiplyQuaternions(this, e)
        }
        premultiply(e) {
            return this.multiplyQuaternions(e, this)
        }
        multiplyQuaternions(e, t) {
            const n = e._x,
                r = e._y,
                s = e._z,
                a = e._w,
                o = t._x,
                l = t._y,
                c = t._z,
                d = t._w;
            return this._x = n * d + a * o + r * c - s * l, this._y = r * d + a * l + s * o - n * c, this._z = s * d + a * c + n * l - r * o, this._w = a * d - n * o - r * l - s * c, this._onChangeCallback(), this
        }
        slerp(e, t) {
            if (t === 0) return this;
            if (t === 1) return this.copy(e);
            const n = this._x,
                r = this._y,
                s = this._z,
                a = this._w;
            let o = a * e._w + n * e._x + r * e._y + s * e._z;
            if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = s, this;
            const l = 1 - o * o;
            if (l <= Number.EPSILON) {
                const m = 1 - t;
                return this._w = m * a + t * this._w, this._x = m * n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this
            }
            const c = Math.sqrt(l),
                d = Math.atan2(c, o),
                f = Math.sin((1 - t) * d) / c,
                h = Math.sin(t * d) / c;
            return this._w = a * f + this._w * h, this._x = n * f + this._x * h, this._y = r * f + this._y * h, this._z = s * f + this._z * h, this._onChangeCallback(), this
        }
        slerpQuaternions(e, t, n) {
            return this.copy(e).slerp(t, n)
        }
        random() {
            const e = 2 * Math.PI * Math.random(),
                t = 2 * Math.PI * Math.random(),
                n = Math.random(),
                r = Math.sqrt(1 - n),
                s = Math.sqrt(n);
            return this.set(r * Math.sin(e), r * Math.cos(e), s * Math.sin(t), s * Math.cos(t))
        }
        equals(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
        }
        fromArray(e, t = 0) {
            return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
        }
        toArray(e = [], t = 0) {
            return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
        }
        fromBufferAttribute(e, t) {
            return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this
        }
        toJSON() {
            return this.toArray()
        }
        _onChange(e) {
            return this._onChangeCallback = e, this
        }
        _onChangeCallback() {}*[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._w
        }
    }
    class B {
        constructor(e = 0, t = 0, n = 0) {
            B.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n
        }
        set(e, t, n) {
            return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this
        }
        setScalar(e) {
            return this.x = e, this.y = e, this.z = e, this
        }
        setX(e) {
            return this.x = e, this
        }
        setY(e) {
            return this.y = e, this
        }
        setZ(e) {
            return this.z = e, this
        }
        setComponent(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
            }
            return this
        }
        getComponent(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + e)
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z)
        }
        copy(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this
        }
        add(e) {
            return this.x += e.x, this.y += e.y, this.z += e.z, this
        }
        addScalar(e) {
            return this.x += e, this.y += e, this.z += e, this
        }
        addVectors(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
        }
        addScaledVector(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
        }
        sub(e) {
            return this.x -= e.x, this.y -= e.y, this.z -= e.z, this
        }
        subScalar(e) {
            return this.x -= e, this.y -= e, this.z -= e, this
        }
        subVectors(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
        }
        multiply(e) {
            return this.x *= e.x, this.y *= e.y, this.z *= e.z, this
        }
        multiplyScalar(e) {
            return this.x *= e, this.y *= e, this.z *= e, this
        }
        multiplyVectors(e, t) {
            return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
        }
        applyEuler(e) {
            return this.applyQuaternion(xr.setFromEuler(e))
        }
        applyAxisAngle(e, t) {
            return this.applyQuaternion(xr.setFromAxisAngle(e, t))
        }
        applyMatrix3(e) {
            const t = this.x,
                n = this.y,
                r = this.z,
                s = e.elements;
            return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this
        }
        applyNormalMatrix(e) {
            return this.applyMatrix3(e).normalize()
        }
        applyMatrix4(e) {
            const t = this.x,
                n = this.y,
                r = this.z,
                s = e.elements,
                a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
            return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this
        }
        applyQuaternion(e) {
            const t = this.x,
                n = this.y,
                r = this.z,
                s = e.x,
                a = e.y,
                o = e.z,
                l = e.w,
                c = 2 * (a * r - o * n),
                d = 2 * (o * t - s * r),
                f = 2 * (s * n - a * t);
            return this.x = t + l * c + a * f - o * d, this.y = n + l * d + o * c - s * f, this.z = r + l * f + s * d - a * c, this
        }
        project(e) {
            return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
        }
        unproject(e) {
            return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
        }
        transformDirection(e) {
            const t = this.x,
                n = this.y,
                r = this.z,
                s = e.elements;
            return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize()
        }
        divide(e) {
            return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
        }
        divideScalar(e) {
            return this.multiplyScalar(1 / e)
        }
        min(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
        }
        max(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
        }
        clamp(e, t) {
            return this.x = Oe(this.x, e.x, t.x), this.y = Oe(this.y, e.y, t.y), this.z = Oe(this.z, e.z, t.z), this
        }
        clampScalar(e, t) {
            return this.x = Oe(this.x, e, t), this.y = Oe(this.y, e, t), this.z = Oe(this.z, e, t), this
        }
        clampLength(e, t) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t))
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        }
        roundToZero() {
            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        }
        dot(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(e) {
            return this.normalize().multiplyScalar(e)
        }
        lerp(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
        }
        lerpVectors(e, t, n) {
            return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this
        }
        cross(e) {
            return this.crossVectors(this, e)
        }
        crossVectors(e, t) {
            const n = e.x,
                r = e.y,
                s = e.z,
                a = t.x,
                o = t.y,
                l = t.z;
            return this.x = r * l - s * o, this.y = s * a - n * l, this.z = n * o - r * a, this
        }
        projectOnVector(e) {
            const t = e.lengthSq();
            if (t === 0) return this.set(0, 0, 0);
            const n = e.dot(this) / t;
            return this.copy(e).multiplyScalar(n)
        }
        projectOnPlane(e) {
            return Oi.copy(this).projectOnVector(e), this.sub(Oi)
        }
        reflect(e) {
            return this.sub(Oi.copy(e).multiplyScalar(2 * this.dot(e)))
        }
        angleTo(e) {
            const t = Math.sqrt(this.lengthSq() * e.lengthSq());
            if (t === 0) return Math.PI / 2;
            const n = this.dot(e) / t;
            return Math.acos(Oe(n, -1, 1))
        }
        distanceTo(e) {
            return Math.sqrt(this.distanceToSquared(e))
        }
        distanceToSquared(e) {
            const t = this.x - e.x,
                n = this.y - e.y,
                r = this.z - e.z;
            return t * t + n * n + r * r
        }
        manhattanDistanceTo(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
        }
        setFromSpherical(e) {
            return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
        }
        setFromSphericalCoords(e, t, n) {
            const r = Math.sin(t) * e;
            return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this
        }
        setFromCylindrical(e) {
            return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
        }
        setFromCylindricalCoords(e, t, n) {
            return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this
        }
        setFromMatrixPosition(e) {
            const t = e.elements;
            return this.x = t[12], this.y = t[13], this.z = t[14], this
        }
        setFromMatrixScale(e) {
            const t = this.setFromMatrixColumn(e, 0).length(),
                n = this.setFromMatrixColumn(e, 1).length(),
                r = this.setFromMatrixColumn(e, 2).length();
            return this.x = t, this.y = n, this.z = r, this
        }
        setFromMatrixColumn(e, t) {
            return this.fromArray(e.elements, t * 4)
        }
        setFromMatrix3Column(e, t) {
            return this.fromArray(e.elements, t * 3)
        }
        setFromEuler(e) {
            return this.x = e._x, this.y = e._y, this.z = e._z, this
        }
        setFromColor(e) {
            return this.x = e.r, this.y = e.g, this.z = e.b, this
        }
        equals(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z
        }
        fromArray(e, t = 0) {
            return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
        }
        toArray(e = [], t = 0) {
            return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
        }
        fromBufferAttribute(e, t) {
            return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
        }
        randomDirection() {
            const e = Math.random() * Math.PI * 2,
                t = Math.random() * 2 - 1,
                n = Math.sqrt(1 - t * t);
            return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this
        }*[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z
        }
    }
    const Oi = new B,
        xr = new qn;
    class Ue {
        constructor(e, t, n, r, s, a, o, l, c) {
            Ue.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c)
        }
        set(e, t, n, r, s, a, o, l, c) {
            const d = this.elements;
            return d[0] = e, d[1] = r, d[2] = o, d[3] = t, d[4] = s, d[5] = l, d[6] = n, d[7] = a, d[8] = c, this
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        }
        copy(e) {
            const t = this.elements,
                n = e.elements;
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
        }
        extractBasis(e, t, n) {
            return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
        }
        setFromMatrix4(e) {
            const t = e.elements;
            return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
        }
        multiply(e) {
            return this.multiplyMatrices(this, e)
        }
        premultiply(e) {
            return this.multiplyMatrices(e, this)
        }
        multiplyMatrices(e, t) {
            const n = e.elements,
                r = t.elements,
                s = this.elements,
                a = n[0],
                o = n[3],
                l = n[6],
                c = n[1],
                d = n[4],
                f = n[7],
                h = n[2],
                m = n[5],
                v = n[8],
                S = r[0],
                p = r[3],
                u = r[6],
                A = r[1],
                y = r[4],
                M = r[7],
                I = r[2],
                w = r[5],
                C = r[8];
            return s[0] = a * S + o * A + l * I, s[3] = a * p + o * y + l * w, s[6] = a * u + o * M + l * C, s[1] = c * S + d * A + f * I, s[4] = c * p + d * y + f * w, s[7] = c * u + d * M + f * C, s[2] = h * S + m * A + v * I, s[5] = h * p + m * y + v * w, s[8] = h * u + m * M + v * C, this
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
        }
        determinant() {
            const e = this.elements,
                t = e[0],
                n = e[1],
                r = e[2],
                s = e[3],
                a = e[4],
                o = e[5],
                l = e[6],
                c = e[7],
                d = e[8];
            return t * a * d - t * o * c - n * s * d + n * o * l + r * s * c - r * a * l
        }
        invert() {
            const e = this.elements,
                t = e[0],
                n = e[1],
                r = e[2],
                s = e[3],
                a = e[4],
                o = e[5],
                l = e[6],
                c = e[7],
                d = e[8],
                f = d * a - o * c,
                h = o * l - d * s,
                m = c * s - a * l,
                v = t * f + n * h + r * m;
            if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const S = 1 / v;
            return e[0] = f * S, e[1] = (r * c - d * n) * S, e[2] = (o * n - r * a) * S, e[3] = h * S, e[4] = (d * t - r * l) * S, e[5] = (r * s - o * t) * S, e[6] = m * S, e[7] = (n * l - c * t) * S, e[8] = (a * t - n * s) * S, this
        }
        transpose() {
            let e;
            const t = this.elements;
            return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
        }
        getNormalMatrix(e) {
            return this.setFromMatrix4(e).invert().transpose()
        }
        transposeIntoArray(e) {
            const t = this.elements;
            return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
        }
        setUvTransform(e, t, n, r, s, a, o) {
            const l = Math.cos(s),
                c = Math.sin(s);
            return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -r * c, r * l, -r * (-c * a + l * o) + o + t, 0, 0, 1), this
        }
        scale(e, t) {
            return this.premultiply(Bi.makeScale(e, t)), this
        }
        rotate(e) {
            return this.premultiply(Bi.makeRotation(-e)), this
        }
        translate(e, t) {
            return this.premultiply(Bi.makeTranslation(e, t)), this
        }
        makeTranslation(e, t) {
            return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this
        }
        makeRotation(e) {
            const t = Math.cos(e),
                n = Math.sin(e);
            return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this
        }
        makeScale(e, t) {
            return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this
        }
        equals(e) {
            const t = this.elements,
                n = e.elements;
            for (let r = 0; r < 9; r++)
                if (t[r] !== n[r]) return !1;
            return !0
        }
        fromArray(e, t = 0) {
            for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
            return this
        }
        toArray(e = [], t = 0) {
            const n = this.elements;
            return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
        }
        clone() {
            return new this.constructor().fromArray(this.elements)
        }
    }
    const Bi = new Ue;

    function Sr(i) {
        for (let e = i.length - 1; e >= 0; --e)
            if (i[e] >= 65535) return !0;
        return !1
    }

    function si(i) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", i)
    }

    function Us() {
        const i = si("canvas");
        return i.style.display = "block", i
    }
    const Mr = {};

    function Tn(i) {
        i in Mr || (Mr[i] = !0, console.warn(i))
    }

    function Fs(i, e, t) {
        return new Promise(function(n, r) {
            function s() {
                switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
                    case i.WAIT_FAILED:
                        r();
                        break;
                    case i.TIMEOUT_EXPIRED:
                        setTimeout(s, t);
                        break;
                    default:
                        n()
                }
            }
            setTimeout(s, t)
        })
    }

    function Ns(i) {
        const e = i.elements;
        e[2] = .5 * e[2] + .5 * e[3], e[6] = .5 * e[6] + .5 * e[7], e[10] = .5 * e[10] + .5 * e[11], e[14] = .5 * e[14] + .5 * e[15]
    }

    function Os(i) {
        const e = i.elements;
        e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1)
    }
    const Er = new Ue().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322),
        Tr = new Ue().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);

    function Bs() {
        const i = {
                enabled: !0,
                workingColorSpace: Mn,
                spaces: {},
                convert: function(r, s, a) {
                    return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === $e && (r.r = Ht(r.r), r.g = Ht(r.g), r.b = Ht(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === $e && (r.r = yn(r.r), r.g = yn(r.g), r.b = yn(r.b))), r
                },
                workingToColorSpace: function(r, s) {
                    return this.convert(r, this.workingColorSpace, s)
                },
                colorSpaceToWorking: function(r, s) {
                    return this.convert(r, s, this.workingColorSpace)
                },
                getPrimaries: function(r) {
                    return this.spaces[r].primaries
                },
                getTransfer: function(r) {
                    return r === Kt ? ri : this.spaces[r].transfer
                },
                getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
                    return r.fromArray(this.spaces[s].luminanceCoefficients)
                },
                define: function(r) {
                    Object.assign(this.spaces, r)
                },
                _getMatrix: function(r, s, a) {
                    return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)
                },
                _getDrawingBufferColorSpace: function(r) {
                    return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace
                },
                _getUnpackColorSpace: function(r = this.workingColorSpace) {
                    return this.spaces[r].workingColorSpaceConfig.unpackColorSpace
                },
                fromWorkingColorSpace: function(r, s) {
                    return Tn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, s)
                },
                toWorkingColorSpace: function(r, s) {
                    return Tn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, s)
                }
            },
            e = [.64, .33, .3, .6, .15, .06],
            t = [.2126, .7152, .0722],
            n = [.3127, .329];
        return i.define({
            [Mn]: {
                primaries: e,
                whitePoint: n,
                transfer: ri,
                toXYZ: Er,
                fromXYZ: Tr,
                luminanceCoefficients: t,
                workingColorSpaceConfig: {
                    unpackColorSpace: Rt
                },
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: Rt
                }
            },
            [Rt]: {
                primaries: e,
                whitePoint: n,
                transfer: $e,
                toXYZ: Er,
                fromXYZ: Tr,
                luminanceCoefficients: t,
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: Rt
                }
            }
        }), i
    }
    const ze = Bs();

    function Ht(i) {
        return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4)
    }

    function yn(i) {
        return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055
    }
    let An;
    class zs {
        static getDataURL(e, t = "image/png") {
            if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
            let n;
            if (e instanceof HTMLCanvasElement) n = e;
            else {
                An === void 0 && (An = si("canvas")), An.width = e.width, An.height = e.height;
                const r = An.getContext("2d");
                e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = An
            }
            return n.toDataURL(t)
        }
        static sRGBToLinear(e) {
            if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
                const t = si("canvas");
                t.width = e.width, t.height = e.height;
                const n = t.getContext("2d");
                n.drawImage(e, 0, 0, e.width, e.height);
                const r = n.getImageData(0, 0, e.width, e.height),
                    s = r.data;
                for (let a = 0; a < s.length; a++) s[a] = Ht(s[a] / 255) * 255;
                return n.putImageData(r, 0, 0), t
            } else if (e.data) {
                const t = e.data.slice(0);
                for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Ht(t[n] / 255) * 255) : t[n] = Ht(t[n]);
                return {
                    data: t,
                    width: e.width,
                    height: e.height
                }
            } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e
        }
    }
    let Gs = 0;
    class zi {
        constructor(e = null) {
            this.isSource = !0, Object.defineProperty(this, "id", {
                value: Gs++
            }), this.uuid = Wn(), this.data = e, this.dataReady = !0, this.version = 0
        }
        getSize(e) {
            const t = this.data;
            return t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e
        }
        set needsUpdate(e) {
            e === !0 && this.version++
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string";
            if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
            const n = {
                    uuid: this.uuid,
                    url: ""
                },
                r = this.data;
            if (r !== null) {
                let s;
                if (Array.isArray(r)) {
                    s = [];
                    for (let a = 0, o = r.length; a < o; a++) r[a].isDataTexture ? s.push(Gi(r[a].image)) : s.push(Gi(r[a]))
                } else s = Gi(r);
                n.url = s
            }
            return t || (e.images[this.uuid] = n), n
        }
    }

    function Gi(i) {
        return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? zs.getDataURL(i) : i.data ? {
            data: Array.from(i.data),
            width: i.width,
            height: i.height,
            type: i.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
    }
    let Hs = 0;
    const Hi = new B;
    class _t extends En {
        constructor(e = _t.DEFAULT_IMAGE, t = _t.DEFAULT_MAPPING, n = 1001, r = 1001, s = 1006, a = 1008, o = 1023, l = 1009, c = _t.DEFAULT_ANISOTROPY, d = Kt) {
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: Hs++
            }), this.uuid = Wn(), this.name = "", this.source = new zi(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Ze(0, 0), this.repeat = new Ze(1, 1), this.center = new Ze(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ue, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = d, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0
        }
        get width() {
            return this.source.getSize(Hi).x
        }
        get height() {
            return this.source.getSize(Hi).y
        }
        get depth() {
            return this.source.getSize(Hi).z
        }
        get image() {
            return this.source.data
        }
        set image(e = null) {
            this.source.data = e
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        }
        addUpdateRange(e, t) {
            this.updateRanges.push({
                start: e,
                count: t
            })
        }
        clearUpdateRanges() {
            this.updateRanges.length = 0
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(e) {
            return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this
        }
        setValues(e) {
            for (const t in e) {
                const n = e[t];
                if (n === void 0) {
                    console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);
                    continue
                }
                const r = this[t];
                if (r === void 0) {
                    console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);
                    continue
                }
                r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n
            }
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string";
            if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
            const n = {
                metadata: {
                    version: 4.7,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                image: this.source.toJSON(e).uuid,
                mapping: this.mapping,
                channel: this.channel,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                internalFormat: this.internalFormat,
                type: this.type,
                colorSpace: this.colorSpace,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                generateMipmaps: this.generateMipmaps,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
        transformUv(e) {
            if (this.mapping !== 300) return e;
            if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
                case 1e3:
                    e.x = e.x - Math.floor(e.x);
                    break;
                case 1001:
                    e.x = e.x < 0 ? 0 : 1;
                    break;
                case 1002:
                    Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                    break
            }
            if (e.y < 0 || e.y > 1) switch (this.wrapT) {
                case 1e3:
                    e.y = e.y - Math.floor(e.y);
                    break;
                case 1001:
                    e.y = e.y < 0 ? 0 : 1;
                    break;
                case 1002:
                    Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                    break
            }
            return this.flipY && (e.y = 1 - e.y), e
        }
        set needsUpdate(e) {
            e === !0 && (this.version++, this.source.needsUpdate = !0)
        }
        set needsPMREMUpdate(e) {
            e === !0 && this.pmremVersion++
        }
    }
    _t.DEFAULT_IMAGE = null, _t.DEFAULT_MAPPING = 300, _t.DEFAULT_ANISOTROPY = 1;
    class at {
        constructor(e = 0, t = 0, n = 0, r = 1) {
            at.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r
        }
        get width() {
            return this.z
        }
        set width(e) {
            this.z = e
        }
        get height() {
            return this.w
        }
        set height(e) {
            this.w = e
        }
        set(e, t, n, r) {
            return this.x = e, this.y = t, this.z = n, this.w = r, this
        }
        setScalar(e) {
            return this.x = e, this.y = e, this.z = e, this.w = e, this
        }
        setX(e) {
            return this.x = e, this
        }
        setY(e) {
            return this.y = e, this
        }
        setZ(e) {
            return this.z = e, this
        }
        setW(e) {
            return this.w = e, this
        }
        setComponent(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                case 3:
                    this.w = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
            }
            return this
        }
        getComponent(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + e)
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w)
        }
        copy(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this
        }
        add(e) {
            return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this
        }
        addScalar(e) {
            return this.x += e, this.y += e, this.z += e, this.w += e, this
        }
        addVectors(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
        }
        addScaledVector(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
        }
        sub(e) {
            return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this
        }
        subScalar(e) {
            return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
        }
        subVectors(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
        }
        multiply(e) {
            return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
        }
        multiplyScalar(e) {
            return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
        }
        applyMatrix4(e) {
            const t = this.x,
                n = this.y,
                r = this.z,
                s = this.w,
                a = e.elements;
            return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this
        }
        divide(e) {
            return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this
        }
        divideScalar(e) {
            return this.multiplyScalar(1 / e)
        }
        setAxisAngleFromQuaternion(e) {
            this.w = 2 * Math.acos(e.w);
            const t = Math.sqrt(1 - e.w * e.w);
            return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
        }
        setAxisAngleFromRotationMatrix(e) {
            let t, n, r, s;
            const l = e.elements,
                c = l[0],
                d = l[4],
                f = l[8],
                h = l[1],
                m = l[5],
                v = l[9],
                S = l[2],
                p = l[6],
                u = l[10];
            if (Math.abs(d - h) < .01 && Math.abs(f - S) < .01 && Math.abs(v - p) < .01) {
                if (Math.abs(d + h) < .1 && Math.abs(f + S) < .1 && Math.abs(v + p) < .1 && Math.abs(c + m + u - 3) < .1) return this.set(1, 0, 0, 0), this;
                t = Math.PI;
                const y = (c + 1) / 2,
                    M = (m + 1) / 2,
                    I = (u + 1) / 2,
                    w = (d + h) / 4,
                    C = (f + S) / 4,
                    U = (v + p) / 4;
                return y > M && y > I ? y < .01 ? (n = 0, r = .707106781, s = .707106781) : (n = Math.sqrt(y), r = w / n, s = C / n) : M > I ? M < .01 ? (n = .707106781, r = 0, s = .707106781) : (r = Math.sqrt(M), n = w / r, s = U / r) : I < .01 ? (n = .707106781, r = .707106781, s = 0) : (s = Math.sqrt(I), n = C / s, r = U / s), this.set(n, r, s, t), this
            }
            let A = Math.sqrt((p - v) * (p - v) + (f - S) * (f - S) + (h - d) * (h - d));
            return Math.abs(A) < .001 && (A = 1), this.x = (p - v) / A, this.y = (f - S) / A, this.z = (h - d) / A, this.w = Math.acos((c + m + u - 1) / 2), this
        }
        setFromMatrixPosition(e) {
            const t = e.elements;
            return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this
        }
        min(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
        }
        max(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
        }
        clamp(e, t) {
            return this.x = Oe(this.x, e.x, t.x), this.y = Oe(this.y, e.y, t.y), this.z = Oe(this.z, e.z, t.z), this.w = Oe(this.w, e.w, t.w), this
        }
        clampScalar(e, t) {
            return this.x = Oe(this.x, e, t), this.y = Oe(this.y, e, t), this.z = Oe(this.z, e, t), this.w = Oe(this.w, e, t), this
        }
        clampLength(e, t) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t))
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        }
        roundToZero() {
            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        }
        dot(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(e) {
            return this.normalize().multiplyScalar(e)
        }
        lerp(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
        }
        lerpVectors(e, t, n) {
            return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this
        }
        equals(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
        }
        fromArray(e, t = 0) {
            return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
        }
        toArray(e = [], t = 0) {
            return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
        }
        fromBufferAttribute(e, t) {
            return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
        }*[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z, yield this.w
        }
    }
    class Vs extends En {
        constructor(e = 1, t = 1, n = {}) {
            super(), n = Object.assign({
                generateMipmaps: !1,
                internalFormat: null,
                minFilter: 1006,
                depthBuffer: !0,
                stencilBuffer: !1,
                resolveDepthBuffer: !0,
                resolveStencilBuffer: !0,
                depthTexture: null,
                samples: 0,
                count: 1,
                depth: 1,
                multiview: !1
            }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new at(0, 0, e, t), this.scissorTest = !1, this.viewport = new at(0, 0, e, t);
            const r = {
                    width: e,
                    height: t,
                    depth: n.depth
                },
                s = new _t(r);
            this.textures = [];
            const a = n.count;
            for (let o = 0; o < a; o++) this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
            this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview
        }
        _setTextureOptions(e = {}) {
            const t = {
                minFilter: 1006,
                generateMipmaps: !1,
                flipY: !1,
                internalFormat: null
            };
            e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
            for (let n = 0; n < this.textures.length; n++) this.textures[n].setValues(t)
        }
        get texture() {
            return this.textures[0]
        }
        set texture(e) {
            this.textures[0] = e
        }
        set depthTexture(e) {
            this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e
        }
        get depthTexture() {
            return this._depthTexture
        }
        setSize(e, t, n = 1) {
            if (this.width !== e || this.height !== t || this.depth !== n) {
                this.width = e, this.height = t, this.depth = n;
                for (let r = 0, s = this.textures.length; r < s; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isArrayTexture = this.textures[r].image.depth > 1;
                this.dispose()
            }
            this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(e) {
            this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
            for (let t = 0, n = e.textures.length; t < n; t++) {
                this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
                const r = Object.assign({}, e.textures[t].image);
                this.textures[t].source = new zi(r)
            }
            return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    class an extends Vs {
        constructor(e = 1, t = 1, n = {}) {
            super(e, t, n), this.isWebGLRenderTarget = !0
        }
    }
    class yr extends _t {
        constructor(e = null, t = 1, n = 1, r = 1) {
            super(null), this.isDataArrayTexture = !0, this.image = {
                data: e,
                width: t,
                height: n,
                depth: r
            }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = new Set
        }
        addLayerUpdate(e) {
            this.layerUpdates.add(e)
        }
        clearLayerUpdates() {
            this.layerUpdates.clear()
        }
    }
    class ks extends _t {
        constructor(e = null, t = 1, n = 1, r = 1) {
            super(null), this.isData3DTexture = !0, this.image = {
                data: e,
                width: t,
                height: n,
                depth: r
            }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
        }
    }
    class Yn {
        constructor(e = new B(1 / 0, 1 / 0, 1 / 0), t = new B(-1 / 0, -1 / 0, -1 / 0)) {
            this.isBox3 = !0, this.min = e, this.max = t
        }
        set(e, t) {
            return this.min.copy(e), this.max.copy(t), this
        }
        setFromArray(e) {
            this.makeEmpty();
            for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Pt.fromArray(e, t));
            return this
        }
        setFromBufferAttribute(e) {
            this.makeEmpty();
            for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Pt.fromBufferAttribute(e, t));
            return this
        }
        setFromPoints(e) {
            this.makeEmpty();
            for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
            return this
        }
        setFromCenterAndSize(e, t) {
            const n = Pt.copy(t).multiplyScalar(.5);
            return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
        }
        setFromObject(e, t = !1) {
            return this.makeEmpty(), this.expandByObject(e, t)
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(e) {
            return this.min.copy(e.min), this.max.copy(e.max), this
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        }
        getCenter(e) {
            return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        }
        getSize(e) {
            return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
        }
        expandByPoint(e) {
            return this.min.min(e), this.max.max(e), this
        }
        expandByVector(e) {
            return this.min.sub(e), this.max.add(e), this
        }
        expandByScalar(e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this
        }
        expandByObject(e, t = !1) {
            e.updateWorldMatrix(!1, !1);
            const n = e.geometry;
            if (n !== void 0) {
                const s = n.getAttribute("position");
                if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
                    for (let a = 0, o = s.count; a < o; a++) e.isMesh === !0 ? e.getVertexPosition(a, Pt) : Pt.fromBufferAttribute(s, a), Pt.applyMatrix4(e.matrixWorld), this.expandByPoint(Pt);
                else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ai.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ai.copy(n.boundingBox)), ai.applyMatrix4(e.matrixWorld), this.union(ai)
            }
            const r = e.children;
            for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], t);
            return this
        }
        containsPoint(e) {
            return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z
        }
        containsBox(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
        }
        getParameter(e, t) {
            return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
        }
        intersectsBox(e) {
            return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z
        }
        intersectsSphere(e) {
            return this.clampPoint(e.center, Pt), Pt.distanceToSquared(e.center) <= e.radius * e.radius
        }
        intersectsPlane(e) {
            let t, n;
            return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant
        }
        intersectsTriangle(e) {
            if (this.isEmpty()) return !1;
            this.getCenter($n), oi.subVectors(this.max, $n), Rn.subVectors(e.a, $n), bn.subVectors(e.b, $n), Cn.subVectors(e.c, $n), Zt.subVectors(bn, Rn), jt.subVectors(Cn, bn), on.subVectors(Rn, Cn);
            let t = [0, -Zt.z, Zt.y, 0, -jt.z, jt.y, 0, -on.z, on.y, Zt.z, 0, -Zt.x, jt.z, 0, -jt.x, on.z, 0, -on.x, -Zt.y, Zt.x, 0, -jt.y, jt.x, 0, -on.y, on.x, 0];
            return !Vi(t, Rn, bn, Cn, oi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Vi(t, Rn, bn, Cn, oi)) ? !1 : (li.crossVectors(Zt, jt), t = [li.x, li.y, li.z], Vi(t, Rn, bn, Cn, oi))
        }
        clampPoint(e, t) {
            return t.copy(e).clamp(this.min, this.max)
        }
        distanceToPoint(e) {
            return this.clampPoint(e, Pt).distanceTo(e)
        }
        getBoundingSphere(e) {
            return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Pt).length() * .5), e
        }
        intersect(e) {
            return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
        }
        union(e) {
            return this.min.min(e.min), this.max.max(e.max), this
        }
        applyMatrix4(e) {
            return this.isEmpty() ? this : (Vt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Vt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Vt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Vt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Vt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Vt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Vt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Vt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Vt), this)
        }
        translate(e) {
            return this.min.add(e), this.max.add(e), this
        }
        equals(e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
        toJSON() {
            return {
                min: this.min.toArray(),
                max: this.max.toArray()
            }
        }
        fromJSON(e) {
            return this.min.fromArray(e.min), this.max.fromArray(e.max), this
        }
    }
    const Vt = [new B, new B, new B, new B, new B, new B, new B, new B],
        Pt = new B,
        ai = new Yn,
        Rn = new B,
        bn = new B,
        Cn = new B,
        Zt = new B,
        jt = new B,
        on = new B,
        $n = new B,
        oi = new B,
        li = new B,
        ln = new B;

    function Vi(i, e, t, n, r) {
        for (let s = 0, a = i.length - 3; s <= a; s += 3) {
            ln.fromArray(i, s);
            const o = r.x * Math.abs(ln.x) + r.y * Math.abs(ln.y) + r.z * Math.abs(ln.z),
                l = e.dot(ln),
                c = t.dot(ln),
                d = n.dot(ln);
            if (Math.max(-Math.max(l, c, d), Math.min(l, c, d)) > o) return !1
        }
        return !0
    }
    const Ws = new Yn,
        Kn = new B,
        ki = new B;
    class Wi {
        constructor(e = new B, t = -1) {
            this.isSphere = !0, this.center = e, this.radius = t
        }
        set(e, t) {
            return this.center.copy(e), this.radius = t, this
        }
        setFromPoints(e, t) {
            const n = this.center;
            t !== void 0 ? n.copy(t) : Ws.setFromPoints(e).getCenter(n);
            let r = 0;
            for (let s = 0, a = e.length; s < a; s++) r = Math.max(r, n.distanceToSquared(e[s]));
            return this.radius = Math.sqrt(r), this
        }
        copy(e) {
            return this.center.copy(e.center), this.radius = e.radius, this
        }
        isEmpty() {
            return this.radius < 0
        }
        makeEmpty() {
            return this.center.set(0, 0, 0), this.radius = -1, this
        }
        containsPoint(e) {
            return e.distanceToSquared(this.center) <= this.radius * this.radius
        }
        distanceToPoint(e) {
            return e.distanceTo(this.center) - this.radius
        }
        intersectsSphere(e) {
            const t = this.radius + e.radius;
            return e.center.distanceToSquared(this.center) <= t * t
        }
        intersectsBox(e) {
            return e.intersectsSphere(this)
        }
        intersectsPlane(e) {
            return Math.abs(e.distanceToPoint(this.center)) <= this.radius
        }
        clampPoint(e, t) {
            const n = this.center.distanceToSquared(e);
            return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
        }
        getBoundingBox(e) {
            return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e)
        }
        applyMatrix4(e) {
            return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
        }
        translate(e) {
            return this.center.add(e), this
        }
        expandByPoint(e) {
            if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
            Kn.subVectors(e, this.center);
            const t = Kn.lengthSq();
            if (t > this.radius * this.radius) {
                const n = Math.sqrt(t),
                    r = (n - this.radius) * .5;
                this.center.addScaledVector(Kn, r / n), this.radius += r
            }
            return this
        }
        union(e) {
            return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ki.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Kn.copy(e.center).add(ki)), this.expandByPoint(Kn.copy(e.center).sub(ki))), this)
        }
        equals(e) {
            return e.center.equals(this.center) && e.radius === this.radius
        }
        clone() {
            return new this.constructor().copy(this)
        }
        toJSON() {
            return {
                radius: this.radius,
                center: this.center.toArray()
            }
        }
        fromJSON(e) {
            return this.radius = e.radius, this.center.fromArray(e.center), this
        }
    }
    const kt = new B,
        Xi = new B,
        ci = new B,
        Jt = new B,
        qi = new B,
        ui = new B,
        Yi = new B;
    class Xs {
        constructor(e = new B, t = new B(0, 0, -1)) {
            this.origin = e, this.direction = t
        }
        set(e, t) {
            return this.origin.copy(e), this.direction.copy(t), this
        }
        copy(e) {
            return this.origin.copy(e.origin), this.direction.copy(e.direction), this
        }
        at(e, t) {
            return t.copy(this.origin).addScaledVector(this.direction, e)
        }
        lookAt(e) {
            return this.direction.copy(e).sub(this.origin).normalize(), this
        }
        recast(e) {
            return this.origin.copy(this.at(e, kt)), this
        }
        closestPointToPoint(e, t) {
            t.subVectors(e, this.origin);
            const n = t.dot(this.direction);
            return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n)
        }
        distanceToPoint(e) {
            return Math.sqrt(this.distanceSqToPoint(e))
        }
        distanceSqToPoint(e) {
            const t = kt.subVectors(e, this.origin).dot(this.direction);
            return t < 0 ? this.origin.distanceToSquared(e) : (kt.copy(this.origin).addScaledVector(this.direction, t), kt.distanceToSquared(e))
        }
        distanceSqToSegment(e, t, n, r) {
            Xi.copy(e).add(t).multiplyScalar(.5), ci.copy(t).sub(e).normalize(), Jt.copy(this.origin).sub(Xi);
            const s = e.distanceTo(t) * .5,
                a = -this.direction.dot(ci),
                o = Jt.dot(this.direction),
                l = -Jt.dot(ci),
                c = Jt.lengthSq(),
                d = Math.abs(1 - a * a);
            let f, h, m, v;
            if (d > 0)
                if (f = a * l - o, h = a * o - l, v = s * d, f >= 0)
                    if (h >= -v)
                        if (h <= v) {
                            const S = 1 / d;
                            f *= S, h *= S, m = f * (f + a * h + 2 * o) + h * (a * f + h + 2 * l) + c
                        } else h = s, f = Math.max(0, -(a * h + o)), m = -f * f + h * (h + 2 * l) + c;
            else h = -s, f = Math.max(0, -(a * h + o)), m = -f * f + h * (h + 2 * l) + c;
            else h <= -v ? (f = Math.max(0, -(-a * s + o)), h = f > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -f * f + h * (h + 2 * l) + c) : h <= v ? (f = 0, h = Math.min(Math.max(-s, -l), s), m = h * (h + 2 * l) + c) : (f = Math.max(0, -(a * s + o)), h = f > 0 ? s : Math.min(Math.max(-s, -l), s), m = -f * f + h * (h + 2 * l) + c);
            else h = a > 0 ? -s : s, f = Math.max(0, -(a * h + o)), m = -f * f + h * (h + 2 * l) + c;
            return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(Xi).addScaledVector(ci, h), m
        }
        intersectSphere(e, t) {
            kt.subVectors(e.center, this.origin);
            const n = kt.dot(this.direction),
                r = kt.dot(kt) - n * n,
                s = e.radius * e.radius;
            if (r > s) return null;
            const a = Math.sqrt(s - r),
                o = n - a,
                l = n + a;
            return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t)
        }
        intersectsSphere(e) {
            return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius
        }
        distanceToPlane(e) {
            const t = e.normal.dot(this.direction);
            if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
            const n = -(this.origin.dot(e.normal) + e.constant) / t;
            return n >= 0 ? n : null
        }
        intersectPlane(e, t) {
            const n = this.distanceToPlane(e);
            return n === null ? null : this.at(n, t)
        }
        intersectsPlane(e) {
            const t = e.distanceToPoint(this.origin);
            return t === 0 || e.normal.dot(this.direction) * t < 0
        }
        intersectBox(e, t) {
            let n, r, s, a, o, l;
            const c = 1 / this.direction.x,
                d = 1 / this.direction.y,
                f = 1 / this.direction.z,
                h = this.origin;
            return c >= 0 ? (n = (e.min.x - h.x) * c, r = (e.max.x - h.x) * c) : (n = (e.max.x - h.x) * c, r = (e.min.x - h.x) * c), d >= 0 ? (s = (e.min.y - h.y) * d, a = (e.max.y - h.y) * d) : (s = (e.max.y - h.y) * d, a = (e.min.y - h.y) * d), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), f >= 0 ? (o = (e.min.z - h.z) * f, l = (e.max.z - h.z) * f) : (o = (e.max.z - h.z) * f, l = (e.min.z - h.z) * f), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t)
        }
        intersectsBox(e) {
            return this.intersectBox(e, kt) !== null
        }
        intersectTriangle(e, t, n, r, s) {
            qi.subVectors(t, e), ui.subVectors(n, e), Yi.crossVectors(qi, ui);
            let a = this.direction.dot(Yi),
                o;
            if (a > 0) {
                if (r) return null;
                o = 1
            } else if (a < 0) o = -1, a = -a;
            else return null;
            Jt.subVectors(this.origin, e);
            const l = o * this.direction.dot(ui.crossVectors(Jt, ui));
            if (l < 0) return null;
            const c = o * this.direction.dot(qi.cross(Jt));
            if (c < 0 || l + c > a) return null;
            const d = -o * Jt.dot(Yi);
            return d < 0 ? null : this.at(d / a, s)
        }
        applyMatrix4(e) {
            return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
        }
        equals(e) {
            return e.origin.equals(this.origin) && e.direction.equals(this.direction)
        }
        clone() {
            return new this.constructor().copy(this)
        }
    }
    class ot {
        constructor(e, t, n, r, s, a, o, l, c, d, f, h, m, v, S, p) {
            ot.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, d, f, h, m, v, S, p)
        }
        set(e, t, n, r, s, a, o, l, c, d, f, h, m, v, S, p) {
            const u = this.elements;
            return u[0] = e, u[4] = t, u[8] = n, u[12] = r, u[1] = s, u[5] = a, u[9] = o, u[13] = l, u[2] = c, u[6] = d, u[10] = f, u[14] = h, u[3] = m, u[7] = v, u[11] = S, u[15] = p, this
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }
        clone() {
            return new ot().fromArray(this.elements)
        }
        copy(e) {
            const t = this.elements,
                n = e.elements;
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
        }
        copyPosition(e) {
            const t = this.elements,
                n = e.elements;
            return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
        }
        setFromMatrix3(e) {
            const t = e.elements;
            return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this
        }
        extractBasis(e, t, n) {
            return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
        }
        makeBasis(e, t, n) {
            return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
        }
        extractRotation(e) {
            const t = this.elements,
                n = e.elements,
                r = 1 / wn.setFromMatrixColumn(e, 0).length(),
                s = 1 / wn.setFromMatrixColumn(e, 1).length(),
                a = 1 / wn.setFromMatrixColumn(e, 2).length();
            return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        }
        makeRotationFromEuler(e) {
            const t = this.elements,
                n = e.x,
                r = e.y,
                s = e.z,
                a = Math.cos(n),
                o = Math.sin(n),
                l = Math.cos(r),
                c = Math.sin(r),
                d = Math.cos(s),
                f = Math.sin(s);
            if (e.order === "XYZ") {
                const h = a * d,
                    m = a * f,
                    v = o * d,
                    S = o * f;
                t[0] = l * d, t[4] = -l * f, t[8] = c, t[1] = m + v * c, t[5] = h - S * c, t[9] = -o * l, t[2] = S - h * c, t[6] = v + m * c, t[10] = a * l
            } else if (e.order === "YXZ") {
                const h = l * d,
                    m = l * f,
                    v = c * d,
                    S = c * f;
                t[0] = h + S * o, t[4] = v * o - m, t[8] = a * c, t[1] = a * f, t[5] = a * d, t[9] = -o, t[2] = m * o - v, t[6] = S + h * o, t[10] = a * l
            } else if (e.order === "ZXY") {
                const h = l * d,
                    m = l * f,
                    v = c * d,
                    S = c * f;
                t[0] = h - S * o, t[4] = -a * f, t[8] = v + m * o, t[1] = m + v * o, t[5] = a * d, t[9] = S - h * o, t[2] = -a * c, t[6] = o, t[10] = a * l
            } else if (e.order === "ZYX") {
                const h = a * d,
                    m = a * f,
                    v = o * d,
                    S = o * f;
                t[0] = l * d, t[4] = v * c - m, t[8] = h * c + S, t[1] = l * f, t[5] = S * c + h, t[9] = m * c - v, t[2] = -c, t[6] = o * l, t[10] = a * l
            } else if (e.order === "YZX") {
                const h = a * l,
                    m = a * c,
                    v = o * l,
                    S = o * c;
                t[0] = l * d, t[4] = S - h * f, t[8] = v * f + m, t[1] = f, t[5] = a * d, t[9] = -o * d, t[2] = -c * d, t[6] = m * f + v, t[10] = h - S * f
            } else if (e.order === "XZY") {
                const h = a * l,
                    m = a * c,
                    v = o * l,
                    S = o * c;
                t[0] = l * d, t[4] = -f, t[8] = c * d, t[1] = h * f + S, t[5] = a * d, t[9] = m * f - v, t[2] = v * f - m, t[6] = o * d, t[10] = S * f + h
            }
            return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        }
        makeRotationFromQuaternion(e) {
            return this.compose(qs, e, Ys)
        }
        lookAt(e, t, n) {
            const r = this.elements;
            return Et.subVectors(e, t), Et.lengthSq() === 0 && (Et.z = 1), Et.normalize(), Qt.crossVectors(n, Et), Qt.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Et.x += 1e-4 : Et.z += 1e-4, Et.normalize(), Qt.crossVectors(n, Et)), Qt.normalize(), hi.crossVectors(Et, Qt), r[0] = Qt.x, r[4] = hi.x, r[8] = Et.x, r[1] = Qt.y, r[5] = hi.y, r[9] = Et.y, r[2] = Qt.z, r[6] = hi.z, r[10] = Et.z, this
        }
        multiply(e) {
            return this.multiplyMatrices(this, e)
        }
        premultiply(e) {
            return this.multiplyMatrices(e, this)
        }
        multiplyMatrices(e, t) {
            const n = e.elements,
                r = t.elements,
                s = this.elements,
                a = n[0],
                o = n[4],
                l = n[8],
                c = n[12],
                d = n[1],
                f = n[5],
                h = n[9],
                m = n[13],
                v = n[2],
                S = n[6],
                p = n[10],
                u = n[14],
                A = n[3],
                y = n[7],
                M = n[11],
                I = n[15],
                w = r[0],
                C = r[4],
                U = r[8],
                E = r[12],
                x = r[1],
                P = r[5],
                q = r[9],
                z = r[13],
                W = r[2],
                j = r[6],
                V = r[10],
                ee = r[14],
                G = r[3],
                oe = r[7],
                de = r[11],
                Te = r[15];
            return s[0] = a * w + o * x + l * W + c * G, s[4] = a * C + o * P + l * j + c * oe, s[8] = a * U + o * q + l * V + c * de, s[12] = a * E + o * z + l * ee + c * Te, s[1] = d * w + f * x + h * W + m * G, s[5] = d * C + f * P + h * j + m * oe, s[9] = d * U + f * q + h * V + m * de, s[13] = d * E + f * z + h * ee + m * Te, s[2] = v * w + S * x + p * W + u * G, s[6] = v * C + S * P + p * j + u * oe, s[10] = v * U + S * q + p * V + u * de, s[14] = v * E + S * z + p * ee + u * Te, s[3] = A * w + y * x + M * W + I * G, s[7] = A * C + y * P + M * j + I * oe, s[11] = A * U + y * q + M * V + I * de, s[15] = A * E + y * z + M * ee + I * Te, this
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
        }
        determinant() {
            const e = this.elements,
                t = e[0],
                n = e[4],
                r = e[8],
                s = e[12],
                a = e[1],
                o = e[5],
                l = e[9],
                c = e[13],
                d = e[2],
                f = e[6],
                h = e[10],
                m = e[14],
                v = e[3],
                S = e[7],
                p = e[11],
                u = e[15];
            return v * (+s * l * f - r * c * f - s * o * h + n * c * h + r * o * m - n * l * m) + S * (+t * l * m - t * c * h + s * a * h - r * a * m + r * c * d - s * l * d) + p * (+t * c * f - t * o * m - s * a * f + n * a * m + s * o * d - n * c * d) + u * (-r * o * d - t * l * f + t * o * h + r * a * f - n * a * h + n * l * d)
        }
        transpose() {
            const e = this.elements;
            let t;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        }
        setPosition(e, t, n) {
            const r = this.elements;
            return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this
        }
        invert() {
            const e = this.elements,
                t = e[0],
                n = e[1],
                r = e[2],
                s = e[3],
                a = e[4],
                o = e[5],
                l = e[6],
                c = e[7],
                d = e[8],
                f = e[9],
                h = e[10],
                m = e[11],
                v = e[12],
                S = e[13],
                p = e[14],
                u = e[15],
                A = f * p * c - S * h * c + S * l * m - o * p * m - f * l * u + o * h * u,
                y = v * h * c - d * p * c - v * l * m + a * p * m + d * l * u - a * h * u,
                M = d * S * c - v * f * c + v * o * m - a * S * m - d * o * u + a * f * u,
                I = v * f * l - d * S * l - v * o * h + a * S * h + d * o * p - a * f * p,
                w = t * A + n * y + r * M + s * I;
            if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const C = 1 / w;
            return e[0] = A * C, e[1] = (S * h * s - f * p * s - S * r * m + n * p * m + f * r * u - n * h * u) * C, e[2] = (o * p * s - S * l * s + S * r * c - n * p * c - o * r * u + n * l * u) * C, e[3] = (f * l * s - o * h * s - f * r * c + n * h * c + o * r * m - n * l * m) * C, e[4] = y * C, e[5] = (d * p * s - v * h * s + v * r * m - t * p * m - d * r * u + t * h * u) * C, e[6] = (v * l * s - a * p * s - v * r * c + t * p * c + a * r * u - t * l * u) * C, e[7] = (a * h * s - d * l * s + d * r * c - t * h * c - a * r * m + t * l * m) * C, e[8] = M * C, e[9] = (v * f * s - d * S * s - v * n * m + t * S * m + d * n * u - t * f * u) * C, e[10] = (a * S * s - v * o * s + v * n * c - t * S * c - a * n * u + t * o * u) * C, e[11] = (d * o * s - a * f * s - d * n * c + t * f * c + a * n * m - t * o * m) * C, e[12] = I * C, e[13] = (d * S * r - v * f * r + v * n * h - t * S * h - d * n * p + t * f * p) * C, e[14] = (v * o * r - a * S * r - v * n * l + t * S * l + a * n * p - t * o * p) * C, e[15] = (a * f * r - d * o * r + d * n * l - t * f * l - a * n * h + t * o * h) * C, this
        }
        scale(e) {
            const t = this.elements,
                n = e.x,
                r = e.y,
                s = e.z;
            return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this
        }
        getMaxScaleOnAxis() {
            const e = this.elements,
                t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
                r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
            return Math.sqrt(Math.max(t, n, r))
        }
        makeTranslation(e, t, n) {
            return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
        }
        makeRotationX(e) {
            const t = Math.cos(e),
                n = Math.sin(e);
            return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
        }
        makeRotationY(e) {
            const t = Math.cos(e),
                n = Math.sin(e);
            return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
        }
        makeRotationZ(e) {
            const t = Math.cos(e),
                n = Math.sin(e);
            return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }
        makeRotationAxis(e, t) {
            const n = Math.cos(t),
                r = Math.sin(t),
                s = 1 - n,
                a = e.x,
                o = e.y,
                l = e.z,
                c = s * a,
                d = s * o;
            return this.set(c * a + n, c * o - r * l, c * l + r * o, 0, c * o + r * l, d * o + n, d * l - r * a, 0, c * l - r * o, d * l + r * a, s * l * l + n, 0, 0, 0, 0, 1), this
        }
        makeScale(e, t, n) {
            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
        }
        makeShear(e, t, n, r, s, a) {
            return this.set(1, n, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this
        }
        compose(e, t, n) {
            const r = this.elements,
                s = t._x,
                a = t._y,
                o = t._z,
                l = t._w,
                c = s + s,
                d = a + a,
                f = o + o,
                h = s * c,
                m = s * d,
                v = s * f,
                S = a * d,
                p = a * f,
                u = o * f,
                A = l * c,
                y = l * d,
                M = l * f,
                I = n.x,
                w = n.y,
                C = n.z;
            return r[0] = (1 - (S + u)) * I, r[1] = (m + M) * I, r[2] = (v - y) * I, r[3] = 0, r[4] = (m - M) * w, r[5] = (1 - (h + u)) * w, r[6] = (p + A) * w, r[7] = 0, r[8] = (v + y) * C, r[9] = (p - A) * C, r[10] = (1 - (h + S)) * C, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this
        }
        decompose(e, t, n) {
            const r = this.elements;
            let s = wn.set(r[0], r[1], r[2]).length();
            const a = wn.set(r[4], r[5], r[6]).length(),
                o = wn.set(r[8], r[9], r[10]).length();
            this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Dt.copy(this);
            const c = 1 / s,
                d = 1 / a,
                f = 1 / o;
            return Dt.elements[0] *= c, Dt.elements[1] *= c, Dt.elements[2] *= c, Dt.elements[4] *= d, Dt.elements[5] *= d, Dt.elements[6] *= d, Dt.elements[8] *= f, Dt.elements[9] *= f, Dt.elements[10] *= f, t.setFromRotationMatrix(Dt), n.x = s, n.y = a, n.z = o, this
        }
        makePerspective(e, t, n, r, s, a, o = 2e3) {
            const l = this.elements,
                c = 2 * s / (t - e),
                d = 2 * s / (n - r),
                f = (t + e) / (t - e),
                h = (n + r) / (n - r);
            let m, v;
            if (o === 2e3) m = -(a + s) / (a - s), v = -2 * a * s / (a - s);
            else if (o === 2001) m = -a / (a - s), v = -a * s / (a - s);
            else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
            return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = d, l[9] = h, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this
        }
        makeOrthographic(e, t, n, r, s, a, o = 2e3) {
            const l = this.elements,
                c = 1 / (t - e),
                d = 1 / (n - r),
                f = 1 / (a - s),
                h = (t + e) * c,
                m = (n + r) * d;
            let v, S;
            if (o === 2e3) v = (a + s) * f, S = -2 * f;
            else if (o === 2001) v = s * f, S = -1 * f;
            else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
            return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -h, l[1] = 0, l[5] = 2 * d, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = S, l[14] = -v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this
        }
        equals(e) {
            const t = this.elements,
                n = e.elements;
            for (let r = 0; r < 16; r++)
                if (t[r] !== n[r]) return !1;
            return !0
        }
        fromArray(e, t = 0) {
            for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
            return this
        }
        toArray(e = [], t = 0) {
            const n = this.elements;
            return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
        }
    }
    const wn = new B,
        Dt = new ot,
        qs = new B(0, 0, 0),
        Ys = new B(1, 1, 1),
        Qt = new B,
        hi = new B,
        Et = new B,
        Ar = new ot,
        Rr = new qn;
    class Wt {
        constructor(e = 0, t = 0, n = 0, r = Wt.DEFAULT_ORDER) {
            this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r
        }
        get x() {
            return this._x
        }
        set x(e) {
            this._x = e, this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(e) {
            this._y = e, this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(e) {
            this._z = e, this._onChangeCallback()
        }
        get order() {
            return this._order
        }
        set order(e) {
            this._order = e, this._onChangeCallback()
        }
        set(e, t, n, r = this._order) {
            return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order)
        }
        copy(e) {
            return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
        }
        setFromRotationMatrix(e, t = this._order, n = !0) {
            const r = e.elements,
                s = r[0],
                a = r[4],
                o = r[8],
                l = r[1],
                c = r[5],
                d = r[9],
                f = r[2],
                h = r[6],
                m = r[10];
            switch (t) {
                case "XYZ":
                    this._y = Math.asin(Oe(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-d, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(h, c), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-Oe(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, s), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(Oe(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(-f, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
                    break;
                case "ZYX":
                    this._y = Math.asin(-Oe(f, -1, 1)), Math.abs(f) < .9999999 ? (this._x = Math.atan2(h, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
                    break;
                case "YZX":
                    this._z = Math.asin(Oe(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-d, c), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(o, m));
                    break;
                case "XZY":
                    this._z = Math.asin(-Oe(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(h, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-d, m), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
            }
            return this._order = t, n === !0 && this._onChangeCallback(), this
        }
        setFromQuaternion(e, t, n) {
            return Ar.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ar, t, n)
        }
        setFromVector3(e, t = this._order) {
            return this.set(e.x, e.y, e.z, t)
        }
        reorder(e) {
            return Rr.setFromEuler(this), this.setFromQuaternion(Rr, e)
        }
        equals(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
        }
        fromArray(e) {
            return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this
        }
        toArray(e = [], t = 0) {
            return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
        }
        _onChange(e) {
            return this._onChangeCallback = e, this
        }
        _onChangeCallback() {}*[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._order
        }
    }
    Wt.DEFAULT_ORDER = "XYZ";
    class br {
        constructor() {
            this.mask = 1
        }
        set(e) {
            this.mask = (1 << e | 0) >>> 0
        }
        enable(e) {
            this.mask |= 1 << e | 0
        }
        enableAll() {
            this.mask = -1
        }
        toggle(e) {
            this.mask ^= 1 << e | 0
        }
        disable(e) {
            this.mask &= ~(1 << e | 0)
        }
        disableAll() {
            this.mask = 0
        }
        test(e) {
            return (this.mask & e.mask) !== 0
        }
        isEnabled(e) {
            return (this.mask & (1 << e | 0)) !== 0
        }
    }
    let $s = 0;
    const Cr = new B,
        Pn = new qn,
        Xt = new ot,
        di = new B,
        Zn = new B,
        Ks = new B,
        Zs = new qn,
        wr = new B(1, 0, 0),
        Pr = new B(0, 1, 0),
        Dr = new B(0, 0, 1),
        Lr = {
            type: "added"
        },
        js = {
            type: "removed"
        },
        Dn = {
            type: "childadded",
            child: null
        },
        $i = {
            type: "childremoved",
            child: null
        };
    class Tt extends En {
        constructor() {
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: $s++
            }), this.uuid = Wn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Tt.DEFAULT_UP.clone();
            const e = new B,
                t = new Wt,
                n = new qn,
                r = new B(1, 1, 1);

            function s() {
                n.setFromEuler(t, !1)
            }

            function a() {
                t.setFromQuaternion(n, void 0, !1)
            }
            t._onChange(s), n._onChange(a), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: r
                },
                modelViewMatrix: {
                    value: new ot
                },
                normalMatrix: {
                    value: new Ue
                }
            }), this.matrix = new ot, this.matrixWorld = new ot, this.matrixAutoUpdate = Tt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new br, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {}
        }
        onBeforeShadow() {}
        onAfterShadow() {}
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(e) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
        }
        applyQuaternion(e) {
            return this.quaternion.premultiply(e), this
        }
        setRotationFromAxisAngle(e, t) {
            this.quaternion.setFromAxisAngle(e, t)
        }
        setRotationFromEuler(e) {
            this.quaternion.setFromEuler(e, !0)
        }
        setRotationFromMatrix(e) {
            this.quaternion.setFromRotationMatrix(e)
        }
        setRotationFromQuaternion(e) {
            this.quaternion.copy(e)
        }
        rotateOnAxis(e, t) {
            return Pn.setFromAxisAngle(e, t), this.quaternion.multiply(Pn), this
        }
        rotateOnWorldAxis(e, t) {
            return Pn.setFromAxisAngle(e, t), this.quaternion.premultiply(Pn), this
        }
        rotateX(e) {
            return this.rotateOnAxis(wr, e)
        }
        rotateY(e) {
            return this.rotateOnAxis(Pr, e)
        }
        rotateZ(e) {
            return this.rotateOnAxis(Dr, e)
        }
        translateOnAxis(e, t) {
            return Cr.copy(e).applyQuaternion(this.quaternion), this.position.add(Cr.multiplyScalar(t)), this
        }
        translateX(e) {
            return this.translateOnAxis(wr, e)
        }
        translateY(e) {
            return this.translateOnAxis(Pr, e)
        }
        translateZ(e) {
            return this.translateOnAxis(Dr, e)
        }
        localToWorld(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld)
        }
        worldToLocal(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Xt.copy(this.matrixWorld).invert())
        }
        lookAt(e, t, n) {
            e.isVector3 ? di.copy(e) : di.set(e, t, n);
            const r = this.parent;
            this.updateWorldMatrix(!0, !1), Zn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Xt.lookAt(Zn, di, this.up) : Xt.lookAt(di, Zn, this.up), this.quaternion.setFromRotationMatrix(Xt), r && (Xt.extractRotation(r.matrixWorld), Pn.setFromRotationMatrix(Xt), this.quaternion.premultiply(Pn.invert()))
        }
        add(e) {
            if (arguments.length > 1) {
                for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
                return this
            }
            return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Lr), Dn.child = e, this.dispatchEvent(Dn), Dn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
        }
        remove(e) {
            if (arguments.length > 1) {
                for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
                return this
            }
            const t = this.children.indexOf(e);
            return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(js), $i.child = e, this.dispatchEvent($i), $i.child = null), this
        }
        removeFromParent() {
            const e = this.parent;
            return e !== null && e.remove(this), this
        }
        clear() {
            return this.remove(...this.children)
        }
        attach(e) {
            return this.updateWorldMatrix(!0, !1), Xt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Xt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Xt), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Lr), Dn.child = e, this.dispatchEvent(Dn), Dn.child = null, this
        }
        getObjectById(e) {
            return this.getObjectByProperty("id", e)
        }
        getObjectByName(e) {
            return this.getObjectByProperty("name", e)
        }
        getObjectByProperty(e, t) {
            if (this[e] === t) return this;
            for (let n = 0, r = this.children.length; n < r; n++) {
                const a = this.children[n].getObjectByProperty(e, t);
                if (a !== void 0) return a
            }
        }
        getObjectsByProperty(e, t, n = []) {
            this[e] === t && n.push(this);
            const r = this.children;
            for (let s = 0, a = r.length; s < a; s++) r[s].getObjectsByProperty(e, t, n);
            return n
        }
        getWorldPosition(e) {
            return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
        }
        getWorldQuaternion(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Zn, e, Ks), e
        }
        getWorldScale(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Zn, Zs, e), e
        }
        getWorldDirection(e) {
            this.updateWorldMatrix(!0, !1);
            const t = this.matrixWorld.elements;
            return e.set(t[8], t[9], t[10]).normalize()
        }
        raycast() {}
        traverse(e) {
            e(this);
            const t = this.children;
            for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e)
        }
        traverseVisible(e) {
            if (this.visible === !1) return;
            e(this);
            const t = this.children;
            for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e)
        }
        traverseAncestors(e) {
            const t = this.parent;
            t !== null && (e(t), t.traverseAncestors(e))
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        }
        updateMatrixWorld(e) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
            const t = this.children;
            for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e)
        }
        updateWorldMatrix(e, t) {
            const n = this.parent;
            if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
                const r = this.children;
                for (let s = 0, a = r.length; s < a; s++) r[s].updateWorldMatrix(!1, !0)
            }
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string",
                n = {};
            t && (e = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {},
                nodes: {}
            }, n.metadata = {
                version: 4.7,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const r = {};
            r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map(o => ({ ...o,
                boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
                boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
            })), r.instanceInfo = this._instanceInfo.map(o => ({ ...o
            })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));

            function s(o, l) {
                return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid
            }
            if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                r.geometry = s(e.geometries, this.geometry);
                const o = this.geometry.parameters;
                if (o !== void 0 && o.shapes !== void 0) {
                    const l = o.shapes;
                    if (Array.isArray(l))
                        for (let c = 0, d = l.length; c < d; c++) {
                            const f = l[c];
                            s(e.shapes, f)
                        } else s(e.shapes, l)
                }
            }
            if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
                if (Array.isArray(this.material)) {
                    const o = [];
                    for (let l = 0, c = this.material.length; l < c; l++) o.push(s(e.materials, this.material[l]));
                    r.material = o
                } else r.material = s(e.materials, this.material);
            if (this.children.length > 0) {
                r.children = [];
                for (let o = 0; o < this.children.length; o++) r.children.push(this.children[o].toJSON(e).object)
            }
            if (this.animations.length > 0) {
                r.animations = [];
                for (let o = 0; o < this.animations.length; o++) {
                    const l = this.animations[o];
                    r.animations.push(s(e.animations, l))
                }
            }
            if (t) {
                const o = a(e.geometries),
                    l = a(e.materials),
                    c = a(e.textures),
                    d = a(e.images),
                    f = a(e.shapes),
                    h = a(e.skeletons),
                    m = a(e.animations),
                    v = a(e.nodes);
                o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), d.length > 0 && (n.images = d), f.length > 0 && (n.shapes = f), h.length > 0 && (n.skeletons = h), m.length > 0 && (n.animations = m), v.length > 0 && (n.nodes = v)
            }
            return n.object = r, n;

            function a(o) {
                const l = [];
                for (const c in o) {
                    const d = o[c];
                    delete d.metadata, l.push(d)
                }
                return l
            }
        }
        clone(e) {
            return new this.constructor().copy(this, e)
        }
        copy(e, t = !0) {
            if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
                for (let n = 0; n < e.children.length; n++) {
                    const r = e.children[n];
                    this.add(r.clone())
                }
            return this
        }
    }
    Tt.DEFAULT_UP = new B(0, 1, 0), Tt.DEFAULT_MATRIX_AUTO_UPDATE = !0, Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const Lt = new B,
        qt = new B,
        Ki = new B,
        Yt = new B,
        Ln = new B,
        In = new B,
        Ir = new B,
        Zi = new B,
        ji = new B,
        Ji = new B,
        Qi = new at,
        er = new at,
        tr = new at;
    class It {
        constructor(e = new B, t = new B, n = new B) {
            this.a = e, this.b = t, this.c = n
        }
        static getNormal(e, t, n, r) {
            r.subVectors(n, t), Lt.subVectors(e, t), r.cross(Lt);
            const s = r.lengthSq();
            return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0)
        }
        static getBarycoord(e, t, n, r, s) {
            Lt.subVectors(r, t), qt.subVectors(n, t), Ki.subVectors(e, t);
            const a = Lt.dot(Lt),
                o = Lt.dot(qt),
                l = Lt.dot(Ki),
                c = qt.dot(qt),
                d = qt.dot(Ki),
                f = a * c - o * o;
            if (f === 0) return s.set(0, 0, 0), null;
            const h = 1 / f,
                m = (c * l - o * d) * h,
                v = (a * d - o * l) * h;
            return s.set(1 - m - v, v, m)
        }
        static containsPoint(e, t, n, r) {
            return this.getBarycoord(e, t, n, r, Yt) === null ? !1 : Yt.x >= 0 && Yt.y >= 0 && Yt.x + Yt.y <= 1
        }
        static getInterpolation(e, t, n, r, s, a, o, l) {
            return this.getBarycoord(e, t, n, r, Yt) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Yt.x), l.addScaledVector(a, Yt.y), l.addScaledVector(o, Yt.z), l)
        }
        static getInterpolatedAttribute(e, t, n, r, s, a) {
            return Qi.setScalar(0), er.setScalar(0), tr.setScalar(0), Qi.fromBufferAttribute(e, t), er.fromBufferAttribute(e, n), tr.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(Qi, s.x), a.addScaledVector(er, s.y), a.addScaledVector(tr, s.z), a
        }
        static isFrontFacing(e, t, n, r) {
            return Lt.subVectors(n, t), qt.subVectors(e, t), Lt.cross(qt).dot(r) < 0
        }
        set(e, t, n) {
            return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
        }
        setFromPointsAndIndices(e, t, n, r) {
            return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this
        }
        setFromAttributeAndIndices(e, t, n, r) {
            return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(e) {
            return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
        }
        getArea() {
            return Lt.subVectors(this.c, this.b), qt.subVectors(this.a, this.b), Lt.cross(qt).length() * .5
        }
        getMidpoint(e) {
            return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        }
        getNormal(e) {
            return It.getNormal(this.a, this.b, this.c, e)
        }
        getPlane(e) {
            return e.setFromCoplanarPoints(this.a, this.b, this.c)
        }
        getBarycoord(e, t) {
            return It.getBarycoord(e, this.a, this.b, this.c, t)
        }
        getInterpolation(e, t, n, r, s) {
            return It.getInterpolation(e, this.a, this.b, this.c, t, n, r, s)
        }
        containsPoint(e) {
            return It.containsPoint(e, this.a, this.b, this.c)
        }
        isFrontFacing(e) {
            return It.isFrontFacing(this.a, this.b, this.c, e)
        }
        intersectsBox(e) {
            return e.intersectsTriangle(this)
        }
        closestPointToPoint(e, t) {
            const n = this.a,
                r = this.b,
                s = this.c;
            let a, o;
            Ln.subVectors(r, n), In.subVectors(s, n), Zi.subVectors(e, n);
            const l = Ln.dot(Zi),
                c = In.dot(Zi);
            if (l <= 0 && c <= 0) return t.copy(n);
            ji.subVectors(e, r);
            const d = Ln.dot(ji),
                f = In.dot(ji);
            if (d >= 0 && f <= d) return t.copy(r);
            const h = l * f - d * c;
            if (h <= 0 && l >= 0 && d <= 0) return a = l / (l - d), t.copy(n).addScaledVector(Ln, a);
            Ji.subVectors(e, s);
            const m = Ln.dot(Ji),
                v = In.dot(Ji);
            if (v >= 0 && m <= v) return t.copy(s);
            const S = m * c - l * v;
            if (S <= 0 && c >= 0 && v <= 0) return o = c / (c - v), t.copy(n).addScaledVector(In, o);
            const p = d * v - m * f;
            if (p <= 0 && f - d >= 0 && m - v >= 0) return Ir.subVectors(s, r), o = (f - d) / (f - d + (m - v)), t.copy(r).addScaledVector(Ir, o);
            const u = 1 / (p + S + h);
            return a = S * u, o = h * u, t.copy(n).addScaledVector(Ln, a).addScaledVector(In, o)
        }
        equals(e) {
            return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
        }
    }
    const Ur = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        },
        en = {
            h: 0,
            s: 0,
            l: 0
        },
        fi = {
            h: 0,
            s: 0,
            l: 0
        };

    function nr(i, e, t) {
        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i
    }
    class Ke {
        constructor(e, t, n) {
            return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n)
        }
        set(e, t, n) {
            if (t === void 0 && n === void 0) {
                const r = e;
                r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r)
            } else this.setRGB(e, t, n);
            return this
        }
        setScalar(e) {
            return this.r = e, this.g = e, this.b = e, this
        }
        setHex(e, t = Rt) {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ze.colorSpaceToWorking(this, t), this
        }
        setRGB(e, t, n, r = ze.workingColorSpace) {
            return this.r = e, this.g = t, this.b = n, ze.colorSpaceToWorking(this, r), this
        }
        setHSL(e, t, n, r = ze.workingColorSpace) {
            if (e = Is(e, 1), t = Oe(t, 0, 1), n = Oe(n, 0, 1), t === 0) this.r = this.g = this.b = n;
            else {
                const s = n <= .5 ? n * (1 + t) : n + t - n * t,
                    a = 2 * n - s;
                this.r = nr(a, s, e + 1 / 3), this.g = nr(a, s, e), this.b = nr(a, s, e - 1 / 3)
            }
            return ze.colorSpaceToWorking(this, r), this
        }
        setStyle(e, t = Rt) {
            function n(s) {
                s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
            }
            let r;
            if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
                let s;
                const a = r[1],
                    o = r[2];
                switch (a) {
                    case "rgb":
                    case "rgba":
                        if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
                        if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
                        break;
                    case "hsl":
                    case "hsla":
                        if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
                        break;
                    default:
                        console.warn("THREE.Color: Unknown color model " + e)
                }
            } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                const s = r[1],
                    a = s.length;
                if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
                if (a === 6) return this.setHex(parseInt(s, 16), t);
                console.warn("THREE.Color: Invalid hex color " + e)
            } else if (e && e.length > 0) return this.setColorName(e, t);
            return this
        }
        setColorName(e, t = Rt) {
            const n = Ur[e.toLowerCase()];
            return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b)
        }
        copy(e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this
        }
        copySRGBToLinear(e) {
            return this.r = Ht(e.r), this.g = Ht(e.g), this.b = Ht(e.b), this
        }
        copyLinearToSRGB(e) {
            return this.r = yn(e.r), this.g = yn(e.g), this.b = yn(e.b), this
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this
        }
        getHex(e = Rt) {
            return ze.workingToColorSpace(mt.copy(this), e), Math.round(Oe(mt.r * 255, 0, 255)) * 65536 + Math.round(Oe(mt.g * 255, 0, 255)) * 256 + Math.round(Oe(mt.b * 255, 0, 255))
        }
        getHexString(e = Rt) {
            return ("000000" + this.getHex(e).toString(16)).slice(-6)
        }
        getHSL(e, t = ze.workingColorSpace) {
            ze.workingToColorSpace(mt.copy(this), t);
            const n = mt.r,
                r = mt.g,
                s = mt.b,
                a = Math.max(n, r, s),
                o = Math.min(n, r, s);
            let l, c;
            const d = (o + a) / 2;
            if (o === a) l = 0, c = 0;
            else {
                const f = a - o;
                switch (c = d <= .5 ? f / (a + o) : f / (2 - a - o), a) {
                    case n:
                        l = (r - s) / f + (r < s ? 6 : 0);
                        break;
                    case r:
                        l = (s - n) / f + 2;
                        break;
                    case s:
                        l = (n - r) / f + 4;
                        break
                }
                l /= 6
            }
            return e.h = l, e.s = c, e.l = d, e
        }
        getRGB(e, t = ze.workingColorSpace) {
            return ze.workingToColorSpace(mt.copy(this), t), e.r = mt.r, e.g = mt.g, e.b = mt.b, e
        }
        getStyle(e = Rt) {
            ze.workingToColorSpace(mt.copy(this), e);
            const t = mt.r,
                n = mt.g,
                r = mt.b;
            return e !== Rt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`
        }
        offsetHSL(e, t, n) {
            return this.getHSL(en), this.setHSL(en.h + e, en.s + t, en.l + n)
        }
        add(e) {
            return this.r += e.r, this.g += e.g, this.b += e.b, this
        }
        addColors(e, t) {
            return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
        }
        addScalar(e) {
            return this.r += e, this.g += e, this.b += e, this
        }
        sub(e) {
            return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
        }
        multiply(e) {
            return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
        }
        multiplyScalar(e) {
            return this.r *= e, this.g *= e, this.b *= e, this
        }
        lerp(e, t) {
            return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
        }
        lerpColors(e, t, n) {
            return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this
        }
        lerpHSL(e, t) {
            this.getHSL(en), e.getHSL(fi);
            const n = Ni(en.h, fi.h, t),
                r = Ni(en.s, fi.s, t),
                s = Ni(en.l, fi.l, t);
            return this.setHSL(n, r, s), this
        }
        setFromVector3(e) {
            return this.r = e.x, this.g = e.y, this.b = e.z, this
        }
        applyMatrix3(e) {
            const t = this.r,
                n = this.g,
                r = this.b,
                s = e.elements;
            return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this
        }
        equals(e) {
            return e.r === this.r && e.g === this.g && e.b === this.b
        }
        fromArray(e, t = 0) {
            return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
        }
        toArray(e = [], t = 0) {
            return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
        }
        fromBufferAttribute(e, t) {
            return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this
        }
        toJSON() {
            return this.getHex()
        }*[Symbol.iterator]() {
            yield this.r, yield this.g, yield this.b
        }
    }
    const mt = new Ke;
    Ke.NAMES = Ur;
    let Js = 0;
    class jn extends En {
        constructor() {
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: Js++
            }), this.uuid = Wn(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ke(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
        }
        get alphaTest() {
            return this._alphaTest
        }
        set alphaTest(e) {
            this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e
        }
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString()
        }
        setValues(e) {
            if (e !== void 0)
                for (const t in e) {
                    const n = e[t];
                    if (n === void 0) {
                        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
                        continue
                    }
                    const r = this[t];
                    if (r === void 0) {
                        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
                        continue
                    }
                    r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n
                }
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string";
            t && (e = {
                textures: {},
                images: {}
            });
            const n = {
                metadata: {
                    version: 4.7,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);

            function r(s) {
                const a = [];
                for (const o in s) {
                    const l = s[o];
                    delete l.metadata, a.push(l)
                }
                return a
            }
            if (t) {
                const s = r(e.textures),
                    a = r(e.images);
                s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a)
            }
            return n
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(e) {
            this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
            const t = e.clippingPlanes;
            let n = null;
            if (t !== null) {
                const r = t.length;
                n = new Array(r);
                for (let s = 0; s !== r; ++s) n[s] = t[s].clone()
            }
            return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
        set needsUpdate(e) {
            e === !0 && this.version++
        }
    }
    class ir extends jn {
        constructor(e) {
            super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ke(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Wt, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this
        }
    }
    const lt = new B,
        pi = new Ze;
    let Qs = 0;
    class Ot {
        constructor(e, t, n = !1) {
            if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.isBufferAttribute = !0, Object.defineProperty(this, "id", {
                value: Qs++
            }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0
        }
        onUploadCallback() {}
        set needsUpdate(e) {
            e === !0 && this.version++
        }
        setUsage(e) {
            return this.usage = e, this
        }
        addUpdateRange(e, t) {
            this.updateRanges.push({
                start: e,
                count: t
            })
        }
        clearUpdateRanges() {
            this.updateRanges.length = 0
        }
        copy(e) {
            return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this
        }
        copyAt(e, t, n) {
            e *= this.itemSize, n *= t.itemSize;
            for (let r = 0, s = this.itemSize; r < s; r++) this.array[e + r] = t.array[n + r];
            return this
        }
        copyArray(e) {
            return this.array.set(e), this
        }
        applyMatrix3(e) {
            if (this.itemSize === 2)
                for (let t = 0, n = this.count; t < n; t++) pi.fromBufferAttribute(this, t), pi.applyMatrix3(e), this.setXY(t, pi.x, pi.y);
            else if (this.itemSize === 3)
                for (let t = 0, n = this.count; t < n; t++) lt.fromBufferAttribute(this, t), lt.applyMatrix3(e), this.setXYZ(t, lt.x, lt.y, lt.z);
            return this
        }
        applyMatrix4(e) {
            for (let t = 0, n = this.count; t < n; t++) lt.fromBufferAttribute(this, t), lt.applyMatrix4(e), this.setXYZ(t, lt.x, lt.y, lt.z);
            return this
        }
        applyNormalMatrix(e) {
            for (let t = 0, n = this.count; t < n; t++) lt.fromBufferAttribute(this, t), lt.applyNormalMatrix(e), this.setXYZ(t, lt.x, lt.y, lt.z);
            return this
        }
        transformDirection(e) {
            for (let t = 0, n = this.count; t < n; t++) lt.fromBufferAttribute(this, t), lt.transformDirection(e), this.setXYZ(t, lt.x, lt.y, lt.z);
            return this
        }
        set(e, t = 0) {
            return this.array.set(e, t), this
        }
        getComponent(e, t) {
            let n = this.array[e * this.itemSize + t];
            return this.normalized && (n = Xn(n, this.array)), n
        }
        setComponent(e, t, n) {
            return this.normalized && (n = St(n, this.array)), this.array[e * this.itemSize + t] = n, this
        }
        getX(e) {
            let t = this.array[e * this.itemSize];
            return this.normalized && (t = Xn(t, this.array)), t
        }
        setX(e, t) {
            return this.normalized && (t = St(t, this.array)), this.array[e * this.itemSize] = t, this
        }
        getY(e) {
            let t = this.array[e * this.itemSize + 1];
            return this.normalized && (t = Xn(t, this.array)), t
        }
        setY(e, t) {
            return this.normalized && (t = St(t, this.array)), this.array[e * this.itemSize + 1] = t, this
        }
        getZ(e) {
            let t = this.array[e * this.itemSize + 2];
            return this.normalized && (t = Xn(t, this.array)), t
        }
        setZ(e, t) {
            return this.normalized && (t = St(t, this.array)), this.array[e * this.itemSize + 2] = t, this
        }
        getW(e) {
            let t = this.array[e * this.itemSize + 3];
            return this.normalized && (t = Xn(t, this.array)), t
        }
        setW(e, t) {
            return this.normalized && (t = St(t, this.array)), this.array[e * this.itemSize + 3] = t, this
        }
        setXY(e, t, n) {
            return e *= this.itemSize, this.normalized && (t = St(t, this.array), n = St(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this
        }
        setXYZ(e, t, n, r) {
            return e *= this.itemSize, this.normalized && (t = St(t, this.array), n = St(n, this.array), r = St(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this
        }
        setXYZW(e, t, n, r, s) {
            return e *= this.itemSize, this.normalized && (t = St(t, this.array), n = St(n, this.array), r = St(r, this.array), s = St(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this
        }
        onUpload(e) {
            return this.onUploadCallback = e, this
        }
        clone() {
            return new this.constructor(this.array, this.itemSize).copy(this)
        }
        toJSON() {
            const e = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.from(this.array),
                normalized: this.normalized
            };
            return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e
        }
    }
    class Fr extends Ot {
        constructor(e, t, n) {
            super(new Uint16Array(e), t, n)
        }
    }
    class Nr extends Ot {
        constructor(e, t, n) {
            super(new Uint32Array(e), t, n)
        }
    }
    class cn extends Ot {
        constructor(e, t, n) {
            super(new Float32Array(e), t, n)
        }
    }
    let ea = 0;
    const bt = new ot,
        rr = new Tt,
        Un = new B,
        yt = new Yn,
        Jn = new Yn,
        dt = new B;
    class un extends En {
        constructor() {
            super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
                value: ea++
            }), this.uuid = Wn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {}
        }
        getIndex() {
            return this.index
        }
        setIndex(e) {
            return Array.isArray(e) ? this.index = new(Sr(e) ? Nr : Fr)(e, 1) : this.index = e, this
        }
        setIndirect(e) {
            return this.indirect = e, this
        }
        getIndirect() {
            return this.indirect
        }
        getAttribute(e) {
            return this.attributes[e]
        }
        setAttribute(e, t) {
            return this.attributes[e] = t, this
        }
        deleteAttribute(e) {
            return delete this.attributes[e], this
        }
        hasAttribute(e) {
            return this.attributes[e] !== void 0
        }
        addGroup(e, t, n = 0) {
            this.groups.push({
                start: e,
                count: t,
                materialIndex: n
            })
        }
        clearGroups() {
            this.groups = []
        }
        setDrawRange(e, t) {
            this.drawRange.start = e, this.drawRange.count = t
        }
        applyMatrix4(e) {
            const t = this.attributes.position;
            t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
            const n = this.attributes.normal;
            if (n !== void 0) {
                const s = new Ue().getNormalMatrix(e);
                n.applyNormalMatrix(s), n.needsUpdate = !0
            }
            const r = this.attributes.tangent;
            return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this
        }
        applyQuaternion(e) {
            return bt.makeRotationFromQuaternion(e), this.applyMatrix4(bt), this
        }
        rotateX(e) {
            return bt.makeRotationX(e), this.applyMatrix4(bt), this
        }
        rotateY(e) {
            return bt.makeRotationY(e), this.applyMatrix4(bt), this
        }
        rotateZ(e) {
            return bt.makeRotationZ(e), this.applyMatrix4(bt), this
        }
        translate(e, t, n) {
            return bt.makeTranslation(e, t, n), this.applyMatrix4(bt), this
        }
        scale(e, t, n) {
            return bt.makeScale(e, t, n), this.applyMatrix4(bt), this
        }
        lookAt(e) {
            return rr.lookAt(e), rr.updateMatrix(), this.applyMatrix4(rr.matrix), this
        }
        center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(Un).negate(), this.translate(Un.x, Un.y, Un.z), this
        }
        setFromPoints(e) {
            const t = this.getAttribute("position");
            if (t === void 0) {
                const n = [];
                for (let r = 0, s = e.length; r < s; r++) {
                    const a = e[r];
                    n.push(a.x, a.y, a.z || 0)
                }
                this.setAttribute("position", new cn(n, 3))
            } else {
                const n = Math.min(e.length, t.count);
                for (let r = 0; r < n; r++) {
                    const s = e[r];
                    t.setXYZ(r, s.x, s.y, s.z || 0)
                }
                e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0
            }
            return this
        }
        computeBoundingBox() {
            this.boundingBox === null && (this.boundingBox = new Yn);
            const e = this.attributes.position,
                t = this.morphAttributes.position;
            if (e && e.isGLBufferAttribute) {
                console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new B(-1 / 0, -1 / 0, -1 / 0), new B(1 / 0, 1 / 0, 1 / 0));
                return
            }
            if (e !== void 0) {
                if (this.boundingBox.setFromBufferAttribute(e), t)
                    for (let n = 0, r = t.length; n < r; n++) {
                        const s = t[n];
                        yt.setFromBufferAttribute(s), this.morphTargetsRelative ? (dt.addVectors(this.boundingBox.min, yt.min), this.boundingBox.expandByPoint(dt), dt.addVectors(this.boundingBox.max, yt.max), this.boundingBox.expandByPoint(dt)) : (this.boundingBox.expandByPoint(yt.min), this.boundingBox.expandByPoint(yt.max))
                    }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
        computeBoundingSphere() {
            this.boundingSphere === null && (this.boundingSphere = new Wi);
            const e = this.attributes.position,
                t = this.morphAttributes.position;
            if (e && e.isGLBufferAttribute) {
                console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new B, 1 / 0);
                return
            }
            if (e) {
                const n = this.boundingSphere.center;
                if (yt.setFromBufferAttribute(e), t)
                    for (let s = 0, a = t.length; s < a; s++) {
                        const o = t[s];
                        Jn.setFromBufferAttribute(o), this.morphTargetsRelative ? (dt.addVectors(yt.min, Jn.min), yt.expandByPoint(dt), dt.addVectors(yt.max, Jn.max), yt.expandByPoint(dt)) : (yt.expandByPoint(Jn.min), yt.expandByPoint(Jn.max))
                    }
                yt.getCenter(n);
                let r = 0;
                for (let s = 0, a = e.count; s < a; s++) dt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(dt));
                if (t)
                    for (let s = 0, a = t.length; s < a; s++) {
                        const o = t[s],
                            l = this.morphTargetsRelative;
                        for (let c = 0, d = o.count; c < d; c++) dt.fromBufferAttribute(o, c), l && (Un.fromBufferAttribute(e, c), dt.add(Un)), r = Math.max(r, n.distanceToSquared(dt))
                    }
                this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
        computeTangents() {
            const e = this.index,
                t = this.attributes;
            if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
                console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                return
            }
            const n = t.position,
                r = t.normal,
                s = t.uv;
            this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ot(new Float32Array(4 * n.count), 4));
            const a = this.getAttribute("tangent"),
                o = [],
                l = [];
            for (let U = 0; U < n.count; U++) o[U] = new B, l[U] = new B;
            const c = new B,
                d = new B,
                f = new B,
                h = new Ze,
                m = new Ze,
                v = new Ze,
                S = new B,
                p = new B;

            function u(U, E, x) {
                c.fromBufferAttribute(n, U), d.fromBufferAttribute(n, E), f.fromBufferAttribute(n, x), h.fromBufferAttribute(s, U), m.fromBufferAttribute(s, E), v.fromBufferAttribute(s, x), d.sub(c), f.sub(c), m.sub(h), v.sub(h);
                const P = 1 / (m.x * v.y - v.x * m.y);
                isFinite(P) && (S.copy(d).multiplyScalar(v.y).addScaledVector(f, -m.y).multiplyScalar(P), p.copy(f).multiplyScalar(m.x).addScaledVector(d, -v.x).multiplyScalar(P), o[U].add(S), o[E].add(S), o[x].add(S), l[U].add(p), l[E].add(p), l[x].add(p))
            }
            let A = this.groups;
            A.length === 0 && (A = [{
                start: 0,
                count: e.count
            }]);
            for (let U = 0, E = A.length; U < E; ++U) {
                const x = A[U],
                    P = x.start,
                    q = x.count;
                for (let z = P, W = P + q; z < W; z += 3) u(e.getX(z + 0), e.getX(z + 1), e.getX(z + 2))
            }
            const y = new B,
                M = new B,
                I = new B,
                w = new B;

            function C(U) {
                I.fromBufferAttribute(r, U), w.copy(I);
                const E = o[U];
                y.copy(E), y.sub(I.multiplyScalar(I.dot(E))).normalize(), M.crossVectors(w, E);
                const P = M.dot(l[U]) < 0 ? -1 : 1;
                a.setXYZW(U, y.x, y.y, y.z, P)
            }
            for (let U = 0, E = A.length; U < E; ++U) {
                const x = A[U],
                    P = x.start,
                    q = x.count;
                for (let z = P, W = P + q; z < W; z += 3) C(e.getX(z + 0)), C(e.getX(z + 1)), C(e.getX(z + 2))
            }
        }
        computeVertexNormals() {
            const e = this.index,
                t = this.getAttribute("position");
            if (t !== void 0) {
                let n = this.getAttribute("normal");
                if (n === void 0) n = new Ot(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
                else
                    for (let h = 0, m = n.count; h < m; h++) n.setXYZ(h, 0, 0, 0);
                const r = new B,
                    s = new B,
                    a = new B,
                    o = new B,
                    l = new B,
                    c = new B,
                    d = new B,
                    f = new B;
                if (e)
                    for (let h = 0, m = e.count; h < m; h += 3) {
                        const v = e.getX(h + 0),
                            S = e.getX(h + 1),
                            p = e.getX(h + 2);
                        r.fromBufferAttribute(t, v), s.fromBufferAttribute(t, S), a.fromBufferAttribute(t, p), d.subVectors(a, s), f.subVectors(r, s), d.cross(f), o.fromBufferAttribute(n, v), l.fromBufferAttribute(n, S), c.fromBufferAttribute(n, p), o.add(d), l.add(d), c.add(d), n.setXYZ(v, o.x, o.y, o.z), n.setXYZ(S, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z)
                    } else
                        for (let h = 0, m = t.count; h < m; h += 3) r.fromBufferAttribute(t, h + 0), s.fromBufferAttribute(t, h + 1), a.fromBufferAttribute(t, h + 2), d.subVectors(a, s), f.subVectors(r, s), d.cross(f), n.setXYZ(h + 0, d.x, d.y, d.z), n.setXYZ(h + 1, d.x, d.y, d.z), n.setXYZ(h + 2, d.x, d.y, d.z);
                this.normalizeNormals(), n.needsUpdate = !0
            }
        }
        normalizeNormals() {
            const e = this.attributes.normal;
            for (let t = 0, n = e.count; t < n; t++) dt.fromBufferAttribute(e, t), dt.normalize(), e.setXYZ(t, dt.x, dt.y, dt.z)
        }
        toNonIndexed() {
            function e(o, l) {
                const c = o.array,
                    d = o.itemSize,
                    f = o.normalized,
                    h = new c.constructor(l.length * d);
                let m = 0,
                    v = 0;
                for (let S = 0, p = l.length; S < p; S++) {
                    o.isInterleavedBufferAttribute ? m = l[S] * o.data.stride + o.offset : m = l[S] * d;
                    for (let u = 0; u < d; u++) h[v++] = c[m++]
                }
                return new Ot(h, d, f)
            }
            if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const t = new un,
                n = this.index.array,
                r = this.attributes;
            for (const o in r) {
                const l = r[o],
                    c = e(l, n);
                t.setAttribute(o, c)
            }
            const s = this.morphAttributes;
            for (const o in s) {
                const l = [],
                    c = s[o];
                for (let d = 0, f = c.length; d < f; d++) {
                    const h = c[d],
                        m = e(h, n);
                    l.push(m)
                }
                t.morphAttributes[o] = l
            }
            t.morphTargetsRelative = this.morphTargetsRelative;
            const a = this.groups;
            for (let o = 0, l = a.length; o < l; o++) {
                const c = a[o];
                t.addGroup(c.start, c.count, c.materialIndex)
            }
            return t
        }
        toJSON() {
            const e = {
                metadata: {
                    version: 4.7,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
                const l = this.parameters;
                for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
                return e
            }
            e.data = {
                attributes: {}
            };
            const t = this.index;
            t !== null && (e.data.index = {
                type: t.array.constructor.name,
                array: Array.prototype.slice.call(t.array)
            });
            const n = this.attributes;
            for (const l in n) {
                const c = n[l];
                e.data.attributes[l] = c.toJSON(e.data)
            }
            const r = {};
            let s = !1;
            for (const l in this.morphAttributes) {
                const c = this.morphAttributes[l],
                    d = [];
                for (let f = 0, h = c.length; f < h; f++) {
                    const m = c[f];
                    d.push(m.toJSON(e.data))
                }
                d.length > 0 && (r[l] = d, s = !0)
            }
            s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
            const a = this.groups;
            a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
            const o = this.boundingSphere;
            return o !== null && (e.data.boundingSphere = o.toJSON()), e
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(e) {
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
            const t = {};
            this.name = e.name;
            const n = e.index;
            n !== null && this.setIndex(n.clone());
            const r = e.attributes;
            for (const c in r) {
                const d = r[c];
                this.setAttribute(c, d.clone(t))
            }
            const s = e.morphAttributes;
            for (const c in s) {
                const d = [],
                    f = s[c];
                for (let h = 0, m = f.length; h < m; h++) d.push(f[h].clone(t));
                this.morphAttributes[c] = d
            }
            this.morphTargetsRelative = e.morphTargetsRelative;
            const a = e.groups;
            for (let c = 0, d = a.length; c < d; c++) {
                const f = a[c];
                this.addGroup(f.start, f.count, f.materialIndex)
            }
            const o = e.boundingBox;
            o !== null && (this.boundingBox = o.clone());
            const l = e.boundingSphere;
            return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    const Or = new ot,
        hn = new Xs,
        mi = new Wi,
        Br = new B,
        _i = new B,
        gi = new B,
        vi = new B,
        sr = new B,
        xi = new B,
        zr = new B,
        Si = new B;
    class Bt extends Tt {
        constructor(e = new un, t = new ir) {
            super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets()
        }
        copy(e, t) {
            return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this
        }
        updateMorphTargets() {
            const t = this.geometry.morphAttributes,
                n = Object.keys(t);
            if (n.length > 0) {
                const r = t[n[0]];
                if (r !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for (let s = 0, a = r.length; s < a; s++) {
                        const o = r[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s
                    }
                }
            }
        }
        getVertexPosition(e, t) {
            const n = this.geometry,
                r = n.attributes.position,
                s = n.morphAttributes.position,
                a = n.morphTargetsRelative;
            t.fromBufferAttribute(r, e);
            const o = this.morphTargetInfluences;
            if (s && o) {
                xi.set(0, 0, 0);
                for (let l = 0, c = s.length; l < c; l++) {
                    const d = o[l],
                        f = s[l];
                    d !== 0 && (sr.fromBufferAttribute(f, e), a ? xi.addScaledVector(sr, d) : xi.addScaledVector(sr.sub(t), d))
                }
                t.add(xi)
            }
            return t
        }
        raycast(e, t) {
            const n = this.geometry,
                r = this.material,
                s = this.matrixWorld;
            r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), mi.copy(n.boundingSphere), mi.applyMatrix4(s), hn.copy(e.ray).recast(e.near), !(mi.containsPoint(hn.origin) === !1 && (hn.intersectSphere(mi, Br) === null || hn.origin.distanceToSquared(Br) > (e.far - e.near) ** 2)) && (Or.copy(s).invert(), hn.copy(e.ray).applyMatrix4(Or), !(n.boundingBox !== null && hn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, hn)))
        }
        _computeIntersections(e, t, n) {
            let r;
            const s = this.geometry,
                a = this.material,
                o = s.index,
                l = s.attributes.position,
                c = s.attributes.uv,
                d = s.attributes.uv1,
                f = s.attributes.normal,
                h = s.groups,
                m = s.drawRange;
            if (o !== null)
                if (Array.isArray(a))
                    for (let v = 0, S = h.length; v < S; v++) {
                        const p = h[v],
                            u = a[p.materialIndex],
                            A = Math.max(p.start, m.start),
                            y = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
                        for (let M = A, I = y; M < I; M += 3) {
                            const w = o.getX(M),
                                C = o.getX(M + 1),
                                U = o.getX(M + 2);
                            r = Mi(this, u, e, n, c, d, f, w, C, U), r && (r.faceIndex = Math.floor(M / 3), r.face.materialIndex = p.materialIndex, t.push(r))
                        }
                    } else {
                        const v = Math.max(0, m.start),
                            S = Math.min(o.count, m.start + m.count);
                        for (let p = v, u = S; p < u; p += 3) {
                            const A = o.getX(p),
                                y = o.getX(p + 1),
                                M = o.getX(p + 2);
                            r = Mi(this, a, e, n, c, d, f, A, y, M), r && (r.faceIndex = Math.floor(p / 3), t.push(r))
                        }
                    } else if (l !== void 0)
                        if (Array.isArray(a))
                            for (let v = 0, S = h.length; v < S; v++) {
                                const p = h[v],
                                    u = a[p.materialIndex],
                                    A = Math.max(p.start, m.start),
                                    y = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
                                for (let M = A, I = y; M < I; M += 3) {
                                    const w = M,
                                        C = M + 1,
                                        U = M + 2;
                                    r = Mi(this, u, e, n, c, d, f, w, C, U), r && (r.faceIndex = Math.floor(M / 3), r.face.materialIndex = p.materialIndex, t.push(r))
                                }
                            } else {
                                const v = Math.max(0, m.start),
                                    S = Math.min(l.count, m.start + m.count);
                                for (let p = v, u = S; p < u; p += 3) {
                                    const A = p,
                                        y = p + 1,
                                        M = p + 2;
                                    r = Mi(this, a, e, n, c, d, f, A, y, M), r && (r.faceIndex = Math.floor(p / 3), t.push(r))
                                }
                            }
        }
    }

    function ta(i, e, t, n, r, s, a, o) {
        let l;
        if (e.side === 1 ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, e.side === 0, o), l === null) return null;
        Si.copy(o), Si.applyMatrix4(i.matrixWorld);
        const c = t.ray.origin.distanceTo(Si);
        return c < t.near || c > t.far ? null : {
            distance: c,
            point: Si.clone(),
            object: i
        }
    }

    function Mi(i, e, t, n, r, s, a, o, l, c) {
        i.getVertexPosition(o, _i), i.getVertexPosition(l, gi), i.getVertexPosition(c, vi);
        const d = ta(i, e, t, n, _i, gi, vi, zr);
        if (d) {
            const f = new B;
            It.getBarycoord(zr, _i, gi, vi, f), r && (d.uv = It.getInterpolatedAttribute(r, o, l, c, f, new Ze)), s && (d.uv1 = It.getInterpolatedAttribute(s, o, l, c, f, new Ze)), a && (d.normal = It.getInterpolatedAttribute(a, o, l, c, f, new B), d.normal.dot(n.direction) > 0 && d.normal.multiplyScalar(-1));
            const h = {
                a: o,
                b: l,
                c,
                normal: new B,
                materialIndex: 0
            };
            It.getNormal(_i, gi, vi, h.normal), d.face = h, d.barycoord = f
        }
        return d
    }
    class Qn extends un {
        constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
            super(), this.type = "BoxGeometry", this.parameters = {
                width: e,
                height: t,
                depth: n,
                widthSegments: r,
                heightSegments: s,
                depthSegments: a
            };
            const o = this;
            r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
            const l = [],
                c = [],
                d = [],
                f = [];
            let h = 0,
                m = 0;
            v("z", "y", "x", -1, -1, n, t, e, a, s, 0), v("z", "y", "x", 1, -1, n, t, -e, a, s, 1), v("x", "z", "y", 1, 1, e, n, t, r, a, 2), v("x", "z", "y", 1, -1, e, n, -t, r, a, 3), v("x", "y", "z", 1, -1, e, t, n, r, s, 4), v("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new cn(c, 3)), this.setAttribute("normal", new cn(d, 3)), this.setAttribute("uv", new cn(f, 2));

            function v(S, p, u, A, y, M, I, w, C, U, E) {
                const x = M / C,
                    P = I / U,
                    q = M / 2,
                    z = I / 2,
                    W = w / 2,
                    j = C + 1,
                    V = U + 1;
                let ee = 0,
                    G = 0;
                const oe = new B;
                for (let de = 0; de < V; de++) {
                    const Te = de * P - z;
                    for (let Ne = 0; Ne < j; Ne++) {
                        const je = Ne * x - q;
                        oe[S] = je * A, oe[p] = Te * y, oe[u] = W, c.push(oe.x, oe.y, oe.z), oe[S] = 0, oe[p] = 0, oe[u] = w > 0 ? 1 : -1, d.push(oe.x, oe.y, oe.z), f.push(Ne / C), f.push(1 - de / U), ee += 1
                    }
                }
                for (let de = 0; de < U; de++)
                    for (let Te = 0; Te < C; Te++) {
                        const Ne = h + Te + j * de,
                            je = h + Te + j * (de + 1),
                            X = h + (Te + 1) + j * (de + 1),
                            te = h + (Te + 1) + j * de;
                        l.push(Ne, je, te), l.push(je, X, te), G += 6
                    }
                o.addGroup(m, G, E), m += G, h += ee
            }
        }
        copy(e) {
            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this
        }
        static fromJSON(e) {
            return new Qn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
        }
    }

    function Fn(i) {
        const e = {};
        for (const t in i) {
            e[t] = {};
            for (const n in i[t]) {
                const r = i[t][n];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r
            }
        }
        return e
    }

    function gt(i) {
        const e = {};
        for (let t = 0; t < i.length; t++) {
            const n = Fn(i[t]);
            for (const r in n) e[r] = n[r]
        }
        return e
    }

    function na(i) {
        const e = [];
        for (let t = 0; t < i.length; t++) e.push(i[t].clone());
        return e
    }

    function Gr(i) {
        const e = i.getRenderTarget();
        return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : ze.workingColorSpace
    }
    const ia = {
        clone: Fn,
        merge: gt
    };
    var ra = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
        sa = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
    class tn extends jn {
        constructor(e) {
            super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ra, this.fragmentShader = sa, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
                clipCullDistance: !1,
                multiDraw: !1
            }, this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv1: [0, 0]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Fn(e.uniforms), this.uniformsGroups = na(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this
        }
        toJSON(e) {
            const t = super.toJSON(e);
            t.glslVersion = this.glslVersion, t.uniforms = {};
            for (const r in this.uniforms) {
                const a = this.uniforms[r].value;
                a && a.isTexture ? t.uniforms[r] = {
                    type: "t",
                    value: a.toJSON(e).uuid
                } : a && a.isColor ? t.uniforms[r] = {
                    type: "c",
                    value: a.getHex()
                } : a && a.isVector2 ? t.uniforms[r] = {
                    type: "v2",
                    value: a.toArray()
                } : a && a.isVector3 ? t.uniforms[r] = {
                    type: "v3",
                    value: a.toArray()
                } : a && a.isVector4 ? t.uniforms[r] = {
                    type: "v4",
                    value: a.toArray()
                } : a && a.isMatrix3 ? t.uniforms[r] = {
                    type: "m3",
                    value: a.toArray()
                } : a && a.isMatrix4 ? t.uniforms[r] = {
                    type: "m4",
                    value: a.toArray()
                } : t.uniforms[r] = {
                    value: a
                }
            }
            Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
            const n = {};
            for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
            return Object.keys(n).length > 0 && (t.extensions = n), t
        }
    }
    class Hr extends Tt {
        constructor() {
            super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ot, this.projectionMatrix = new ot, this.projectionMatrixInverse = new ot, this.coordinateSystem = 2e3
        }
        copy(e, t) {
            return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this
        }
        getWorldDirection(e) {
            return super.getWorldDirection(e).negate()
        }
        updateMatrixWorld(e) {
            super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
        }
        updateWorldMatrix(e, t) {
            super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
        }
        clone() {
            return new this.constructor().copy(this)
        }
    }
    const nn = new B,
        Vr = new Ze,
        kr = new Ze;
    class Ut extends Hr {
        constructor(e = 50, t = 1, n = .1, r = 2e3) {
            super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
        }
        copy(e, t) {
            return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
        }
        setFocalLength(e) {
            const t = .5 * this.getFilmHeight() / e;
            this.fov = Fi * 2 * Math.atan(t), this.updateProjectionMatrix()
        }
        getFocalLength() {
            const e = Math.tan(Ui * .5 * this.fov);
            return .5 * this.getFilmHeight() / e
        }
        getEffectiveFOV() {
            return Fi * 2 * Math.atan(Math.tan(Ui * .5 * this.fov) / this.zoom)
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1)
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1)
        }
        getViewBounds(e, t, n) {
            nn.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(nn.x, nn.y).multiplyScalar(-e / nn.z), nn.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(nn.x, nn.y).multiplyScalar(-e / nn.z)
        }
        getViewSize(e, t) {
            return this.getViewBounds(e, Vr, kr), t.subVectors(kr, Vr)
        }
        setViewOffset(e, t, n, r, s, a) {
            this.aspect = e / t, this.view === null && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix()
        }
        clearViewOffset() {
            this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
            const e = this.near;
            let t = e * Math.tan(Ui * .5 * this.fov) / this.zoom,
                n = 2 * t,
                r = this.aspect * n,
                s = -.5 * r;
            const a = this.view;
            if (this.view !== null && this.view.enabled) {
                const l = a.fullWidth,
                    c = a.fullHeight;
                s += a.offsetX * r / l, t -= a.offsetY * n / c, r *= a.width / l, n *= a.height / c
            }
            const o = this.filmOffset;
            o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
        }
    }
    const Nn = -90,
        On = 1;
    class aa extends Tt {
        constructor(e, t, n) {
            super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
            const r = new Ut(Nn, On, e, t);
            r.layers = this.layers, this.add(r);
            const s = new Ut(Nn, On, e, t);
            s.layers = this.layers, this.add(s);
            const a = new Ut(Nn, On, e, t);
            a.layers = this.layers, this.add(a);
            const o = new Ut(Nn, On, e, t);
            o.layers = this.layers, this.add(o);
            const l = new Ut(Nn, On, e, t);
            l.layers = this.layers, this.add(l);
            const c = new Ut(Nn, On, e, t);
            c.layers = this.layers, this.add(c)
        }
        updateCoordinateSystem() {
            const e = this.coordinateSystem,
                t = this.children.concat(),
                [n, r, s, a, o, l] = t;
            for (const c of t) this.remove(c);
            if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
            else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
            else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
            for (const c of t) this.add(c), c.updateMatrixWorld()
        }
        update(e, t) {
            this.parent === null && this.updateMatrixWorld();
            const {
                renderTarget: n,
                activeMipmapLevel: r
            } = this;
            this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
            const [s, a, o, l, c, d] = this.children, f = e.getRenderTarget(), h = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), v = e.xr.enabled;
            e.xr.enabled = !1;
            const S = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, a), e.setRenderTarget(n, 2, r), e.render(t, o), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = S, e.setRenderTarget(n, 5, r), e.render(t, d), e.setRenderTarget(f, h, m), e.xr.enabled = v, n.texture.needsPMREMUpdate = !0
        }
    }
    class Wr extends _t {
        constructor(e = [], t = 301, n, r, s, a, o, l, c, d) {
            super(e, t, n, r, s, a, o, l, c, d), this.isCubeTexture = !0, this.flipY = !1
        }
        get images() {
            return this.image
        }
        set images(e) {
            this.image = e
        }
    }
    class oa extends an {
        constructor(e = 1, t = {}) {
            super(e, e, t), this.isWebGLCubeRenderTarget = !0;
            const n = {
                    width: e,
                    height: e,
                    depth: 1
                },
                r = [n, n, n, n, n, n];
            this.texture = new Wr(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0
        }
        fromEquirectangularTexture(e, t) {
            this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
            const n = {
                    uniforms: {
                        tEquirect: {
                            value: null
                        }
                    },
                    vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
                    fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
                },
                r = new Qn(5, 5, 5),
                s = new tn({
                    name: "CubemapFromEquirect",
                    uniforms: Fn(n.uniforms),
                    vertexShader: n.vertexShader,
                    fragmentShader: n.fragmentShader,
                    side: 1,
                    blending: 0
                });
            s.uniforms.tEquirect.value = t;
            const a = new Bt(r, s),
                o = t.minFilter;
            return t.minFilter === 1008 && (t.minFilter = 1006), new aa(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this
        }
        clear(e, t = !0, n = !0, r = !0) {
            const s = e.getRenderTarget();
            for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, r);
            e.setRenderTarget(s)
        }
    }
    class Ei extends Tt {
        constructor() {
            super(), this.isGroup = !0, this.type = "Group"
        }
    }
    const la = {
        type: "move"
    };
    class ar {
        constructor() {
            this._targetRay = null, this._grip = null, this._hand = null
        }
        getHandSpace() {
            return this._hand === null && (this._hand = new Ei, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                pinching: !1
            }), this._hand
        }
        getTargetRaySpace() {
            return this._targetRay === null && (this._targetRay = new Ei, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new B, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new B), this._targetRay
        }
        getGripSpace() {
            return this._grip === null && (this._grip = new Ei, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new B, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new B), this._grip
        }
        dispatchEvent(e) {
            return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this
        }
        connect(e) {
            if (e && e.hand) {
                const t = this._hand;
                if (t)
                    for (const n of e.hand.values()) this._getHandJoint(t, n)
            }
            return this.dispatchEvent({
                type: "connected",
                data: e
            }), this
        }
        disconnect(e) {
            return this.dispatchEvent({
                type: "disconnected",
                data: e
            }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this
        }
        update(e, t, n) {
            let r = null,
                s = null,
                a = null;
            const o = this._targetRay,
                l = this._grip,
                c = this._hand;
            if (e && t.session.visibilityState !== "visible-blurred") {
                if (c && e.hand) {
                    a = !0;
                    for (const S of e.hand.values()) {
                        const p = t.getJointPose(S, n),
                            u = this._getHandJoint(c, S);
                        p !== null && (u.matrix.fromArray(p.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = p.radius), u.visible = p !== null
                    }
                    const d = c.joints["index-finger-tip"],
                        f = c.joints["thumb-tip"],
                        h = d.position.distanceTo(f.position),
                        m = .02,
                        v = .005;
                    c.inputState.pinching && h > m + v ? (c.inputState.pinching = !1, this.dispatchEvent({
                        type: "pinchend",
                        handedness: e.handedness,
                        target: this
                    })) : !c.inputState.pinching && h <= m - v && (c.inputState.pinching = !0, this.dispatchEvent({
                        type: "pinchstart",
                        handedness: e.handedness,
                        target: this
                    }))
                } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
                o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(la)))
            }
            return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this
        }
        _getHandJoint(e, t) {
            if (e.joints[t.jointName] === void 0) {
                const n = new Ei;
                n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n)
            }
            return e.joints[t.jointName]
        }
    }
    class ca extends Tt {
        constructor() {
            super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Wt, this.environmentIntensity = 1, this.environmentRotation = new Wt, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }))
        }
        copy(e, t) {
            return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t
        }
    }
    class ua extends _t {
        constructor(e = null, t = 1, n = 1, r, s, a, o, l, c = 1003, d = 1003, f, h) {
            super(null, a, o, l, c, d, r, s, f, h), this.isDataTexture = !0, this.image = {
                data: e,
                width: t,
                height: n
            }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
        }
    }
    const or = new B,
        ha = new B,
        da = new Ue;
    class dn {
        constructor(e = new B(1, 0, 0), t = 0) {
            this.isPlane = !0, this.normal = e, this.constant = t
        }
        set(e, t) {
            return this.normal.copy(e), this.constant = t, this
        }
        setComponents(e, t, n, r) {
            return this.normal.set(e, t, n), this.constant = r, this
        }
        setFromNormalAndCoplanarPoint(e, t) {
            return this.normal.copy(e), this.constant = -t.dot(this.normal), this
        }
        setFromCoplanarPoints(e, t, n) {
            const r = or.subVectors(n, t).cross(ha.subVectors(e, t)).normalize();
            return this.setFromNormalAndCoplanarPoint(r, e), this
        }
        copy(e) {
            return this.normal.copy(e.normal), this.constant = e.constant, this
        }
        normalize() {
            const e = 1 / this.normal.length();
            return this.normal.multiplyScalar(e), this.constant *= e, this
        }
        negate() {
            return this.constant *= -1, this.normal.negate(), this
        }
        distanceToPoint(e) {
            return this.normal.dot(e) + this.constant
        }
        distanceToSphere(e) {
            return this.distanceToPoint(e.center) - e.radius
        }
        projectPoint(e, t) {
            return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e))
        }
        intersectLine(e, t) {
            const n = e.delta(or),
                r = this.normal.dot(n);
            if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
            const s = -(e.start.dot(this.normal) + this.constant) / r;
            return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s)
        }
        intersectsLine(e) {
            const t = this.distanceToPoint(e.start),
                n = this.distanceToPoint(e.end);
            return t < 0 && n > 0 || n < 0 && t > 0
        }
        intersectsBox(e) {
            return e.intersectsPlane(this)
        }
        intersectsSphere(e) {
            return e.intersectsPlane(this)
        }
        coplanarPoint(e) {
            return e.copy(this.normal).multiplyScalar(-this.constant)
        }
        applyMatrix4(e, t) {
            const n = t || da.getNormalMatrix(e),
                r = this.coplanarPoint(or).applyMatrix4(e),
                s = this.normal.applyMatrix3(n).normalize();
            return this.constant = -r.dot(s), this
        }
        translate(e) {
            return this.constant -= e.dot(this.normal), this
        }
        equals(e) {
            return e.normal.equals(this.normal) && e.constant === this.constant
        }
        clone() {
            return new this.constructor().copy(this)
        }
    }
    const fn = new Wi,
        Ti = new B;
    class Xr {
        constructor(e = new dn, t = new dn, n = new dn, r = new dn, s = new dn, a = new dn) {
            this.planes = [e, t, n, r, s, a]
        }
        set(e, t, n, r, s, a) {
            const o = this.planes;
            return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this
        }
        copy(e) {
            const t = this.planes;
            for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
            return this
        }
        setFromProjectionMatrix(e, t = 2e3) {
            const n = this.planes,
                r = e.elements,
                s = r[0],
                a = r[1],
                o = r[2],
                l = r[3],
                c = r[4],
                d = r[5],
                f = r[6],
                h = r[7],
                m = r[8],
                v = r[9],
                S = r[10],
                p = r[11],
                u = r[12],
                A = r[13],
                y = r[14],
                M = r[15];
            if (n[0].setComponents(l - s, h - c, p - m, M - u).normalize(), n[1].setComponents(l + s, h + c, p + m, M + u).normalize(), n[2].setComponents(l + a, h + d, p + v, M + A).normalize(), n[3].setComponents(l - a, h - d, p - v, M - A).normalize(), n[4].setComponents(l - o, h - f, p - S, M - y).normalize(), t === 2e3) n[5].setComponents(l + o, h + f, p + S, M + y).normalize();
            else if (t === 2001) n[5].setComponents(o, f, S, y).normalize();
            else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
            return this
        }
        intersectsObject(e) {
            if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
            else {
                const t = e.geometry;
                t.boundingSphere === null && t.computeBoundingSphere(), fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)
            }
            return this.intersectsSphere(fn)
        }
        intersectsSprite(e) {
            return fn.center.set(0, 0, 0), fn.radius = .7071067811865476, fn.applyMatrix4(e.matrixWorld), this.intersectsSphere(fn)
        }
        intersectsSphere(e) {
            const t = this.planes,
                n = e.center,
                r = -e.radius;
            for (let s = 0; s < 6; s++)
                if (t[s].distanceToPoint(n) < r) return !1;
            return !0
        }
        intersectsBox(e) {
            const t = this.planes;
            for (let n = 0; n < 6; n++) {
                const r = t[n];
                if (Ti.x = r.normal.x > 0 ? e.max.x : e.min.x, Ti.y = r.normal.y > 0 ? e.max.y : e.min.y, Ti.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Ti) < 0) return !1
            }
            return !0
        }
        containsPoint(e) {
            const t = this.planes;
            for (let n = 0; n < 6; n++)
                if (t[n].distanceToPoint(e) < 0) return !1;
            return !0
        }
        clone() {
            return new this.constructor().copy(this)
        }
    }
    class qr extends _t {
        constructor(e, t, n = 1014, r, s, a, o = 1003, l = 1003, c, d = 1026, f = 1) {
            if (d !== 1026 && d !== 1027) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            const h = {
                width: e,
                height: t,
                depth: f
            };
            super(h, r, s, a, o, l, d, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null
        }
        copy(e) {
            return super.copy(e), this.source = new zi(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t
        }
    }
    class ei extends un {
        constructor(e = 1, t = 1, n = 1, r = 1) {
            super(), this.type = "PlaneGeometry", this.parameters = {
                width: e,
                height: t,
                widthSegments: n,
                heightSegments: r
            };
            const s = e / 2,
                a = t / 2,
                o = Math.floor(n),
                l = Math.floor(r),
                c = o + 1,
                d = l + 1,
                f = e / o,
                h = t / l,
                m = [],
                v = [],
                S = [],
                p = [];
            for (let u = 0; u < d; u++) {
                const A = u * h - a;
                for (let y = 0; y < c; y++) {
                    const M = y * f - s;
                    v.push(M, -A, 0), S.push(0, 0, 1), p.push(y / o), p.push(1 - u / l)
                }
            }
            for (let u = 0; u < l; u++)
                for (let A = 0; A < o; A++) {
                    const y = A + c * u,
                        M = A + c * (u + 1),
                        I = A + 1 + c * (u + 1),
                        w = A + 1 + c * u;
                    m.push(y, M, w), m.push(M, I, w)
                }
            this.setIndex(m), this.setAttribute("position", new cn(v, 3)), this.setAttribute("normal", new cn(S, 3)), this.setAttribute("uv", new cn(p, 2))
        }
        copy(e) {
            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this
        }
        static fromJSON(e) {
            return new ei(e.width, e.height, e.widthSegments, e.heightSegments)
        }
    }
    class fa extends jn {
        constructor(e) {
            super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
        }
    }
    class pa extends jn {
        constructor(e) {
            super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
        }
    }
    class Yr extends Hr {
        constructor(e = -1, t = 1, n = 1, r = -1, s = .1, a = 2e3) {
            super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix()
        }
        copy(e, t) {
            return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this
        }
        setViewOffset(e, t, n, r, s, a) {
            this.view === null && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix()
        }
        clearViewOffset() {
            this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
            const e = (this.right - this.left) / (2 * this.zoom),
                t = (this.top - this.bottom) / (2 * this.zoom),
                n = (this.right + this.left) / 2,
                r = (this.top + this.bottom) / 2;
            let s = n - e,
                a = n + e,
                o = r + t,
                l = r - t;
            if (this.view !== null && this.view.enabled) {
                const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
                    d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                s += c * this.view.offsetX, a = s + c * this.view.width, o -= d * this.view.offsetY, l = o - d * this.view.height
            }
            this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t
        }
    }
    class ma extends Ut {
        constructor(e = []) {
            super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e
        }
    }

    function $r(i, e, t, n) {
        const r = _a(n);
        switch (t) {
            case 1021:
                return i * e;
            case 1028:
                return i * e / r.components * r.byteLength;
            case 1029:
                return i * e / r.components * r.byteLength;
            case 1030:
                return i * e * 2 / r.components * r.byteLength;
            case 1031:
                return i * e * 2 / r.components * r.byteLength;
            case 1022:
                return i * e * 3 / r.components * r.byteLength;
            case 1023:
                return i * e * 4 / r.components * r.byteLength;
            case 1033:
                return i * e * 4 / r.components * r.byteLength;
            case 33776:
            case 33777:
                return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
            case 33778:
            case 33779:
                return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
            case 35841:
            case 35843:
                return Math.max(i, 16) * Math.max(e, 8) / 4;
            case 35840:
            case 35842:
                return Math.max(i, 8) * Math.max(e, 8) / 2;
            case 36196:
            case 37492:
                return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
            case 37496:
                return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
            case 37808:
                return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
            case 37809:
                return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
            case 37810:
                return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
            case 37811:
                return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
            case 37812:
                return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
            case 37813:
                return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
            case 37814:
                return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
            case 37815:
                return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
            case 37816:
                return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
            case 37817:
                return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
            case 37818:
                return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
            case 37819:
                return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
            case 37820:
                return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
            case 37821:
                return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
            case 36492:
            case 36494:
            case 36495:
                return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
            case 36283:
            case 36284:
                return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
            case 36285:
            case 36286:
                return Math.ceil(i / 4) * Math.ceil(e / 4) * 16
        }
        throw new Error(`Unable to determine texture byte length for ${t} format.`)
    }

    function _a(i) {
        switch (i) {
            case 1009:
            case 1010:
                return {
                    byteLength: 1,
                    components: 1
                };
            case 1012:
            case 1011:
            case 1016:
                return {
                    byteLength: 2,
                    components: 1
                };
            case 1017:
            case 1018:
                return {
                    byteLength: 2,
                    components: 4
                };
            case 1014:
            case 1013:
            case 1015:
                return {
                    byteLength: 4,
                    components: 1
                };
            case 35902:
                return {
                    byteLength: 4,
                    components: 3
                }
        }
        throw new Error(`Unknown texture type ${i}.`)
    }
    typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: Ii
        }
    })), typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ii);
    /**
     * @license
     * Copyright 2010-2025 Three.js Authors
     * SPDX-License-Identifier: MIT
     */
    function Kr() {
        let i = null,
            e = !1,
            t = null,
            n = null;

        function r(s, a) {
            t(s, a), n = i.requestAnimationFrame(r)
        }
        return {
            start: function() {
                e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0)
            },
            stop: function() {
                i.cancelAnimationFrame(n), e = !1
            },
            setAnimationLoop: function(s) {
                t = s
            },
            setContext: function(s) {
                i = s
            }
        }
    }

    function ga(i) {
        const e = new WeakMap;

        function t(o, l) {
            const c = o.array,
                d = o.usage,
                f = c.byteLength,
                h = i.createBuffer();
            i.bindBuffer(l, h), i.bufferData(l, c, d), o.onUploadCallback();
            let m;
            if (c instanceof Float32Array) m = i.FLOAT;
            else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
            else if (c instanceof Int16Array) m = i.SHORT;
            else if (c instanceof Uint32Array) m = i.UNSIGNED_INT;
            else if (c instanceof Int32Array) m = i.INT;
            else if (c instanceof Int8Array) m = i.BYTE;
            else if (c instanceof Uint8Array) m = i.UNSIGNED_BYTE;
            else if (c instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
            else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
            return {
                buffer: h,
                type: m,
                bytesPerElement: c.BYTES_PER_ELEMENT,
                version: o.version,
                size: f
            }
        }

        function n(o, l, c) {
            const d = l.array,
                f = l.updateRanges;
            if (i.bindBuffer(c, o), f.length === 0) i.bufferSubData(c, 0, d);
            else {
                f.sort((m, v) => m.start - v.start);
                let h = 0;
                for (let m = 1; m < f.length; m++) {
                    const v = f[h],
                        S = f[m];
                    S.start <= v.start + v.count + 1 ? v.count = Math.max(v.count, S.start + S.count - v.start) : (++h, f[h] = S)
                }
                f.length = h + 1;
                for (let m = 0, v = f.length; m < v; m++) {
                    const S = f[m];
                    i.bufferSubData(c, S.start * d.BYTES_PER_ELEMENT, d, S.start, S.count)
                }
                l.clearUpdateRanges()
            }
            l.onUploadCallback()
        }

        function r(o) {
            return o.isInterleavedBufferAttribute && (o = o.data), e.get(o)
        }

        function s(o) {
            o.isInterleavedBufferAttribute && (o = o.data);
            const l = e.get(o);
            l && (i.deleteBuffer(l.buffer), e.delete(o))
        }

        function a(o, l) {
            if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
                const d = e.get(o);
                (!d || d.version < o.version) && e.set(o, {
                    buffer: o.buffer,
                    type: o.type,
                    bytesPerElement: o.elementSize,
                    version: o.version
                });
                return
            }
            const c = e.get(o);
            if (c === void 0) e.set(o, t(o, l));
            else if (c.version < o.version) {
                if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
                n(c.buffer, o, l), c.version = o.version
            }
        }
        return {
            get: r,
            remove: s,
            update: a
        }
    }
    var va = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
        xa = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
        Sa = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
        Ma = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
        Ea = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
        Ta = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
        ya = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
        Aa = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
        Ra = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
        ba = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
        Ca = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
        wa = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
        Pa = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
        Da = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
        La = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
        Ia = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
        Ua = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
        Fa = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
        Na = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
        Oa = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
        Ba = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
        za = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
        Ga = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
        Ha = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
        Va = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
        ka = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
        Wa = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
        Xa = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
        qa = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
        Ya = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
        $a = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        Ka = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
        Za = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
        ja = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
        Ja = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
        Qa = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
        eo = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
        to = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
        no = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
        io = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
        ro = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
        so = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
        ao = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
        oo = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
        lo = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
        co = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
        uo = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
        ho = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
        fo = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
        po = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
        mo = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
        _o = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
        go = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
        vo = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
        xo = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
        So = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
        Mo = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
        Eo = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
        To = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
        yo = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
        Ao = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
        Ro = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
        bo = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
        Co = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
        wo = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
        Po = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
        Do = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
        Lo = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
        Io = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
        Uo = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
        Fo = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
        No = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
        Oo = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
        Bo = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
        zo = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
        Go = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
        Ho = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
        Vo = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
        ko = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
        Wo = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
        Xo = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
        qo = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
        Yo = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
        $o = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
        Ko = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
        Zo = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
        jo = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
        Jo = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
        Qo = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
        el = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
        tl = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
        nl = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
        il = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
        rl = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
        sl = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
        al = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
        ol = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
        ll = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
        cl = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
        ul = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
        hl = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
        dl = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
        fl = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
        pl = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
        ml = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
        _l = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
        gl = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
    const Ie = {
            alphahash_fragment: va,
            alphahash_pars_fragment: xa,
            alphamap_fragment: Sa,
            alphamap_pars_fragment: Ma,
            alphatest_fragment: Ea,
            alphatest_pars_fragment: Ta,
            aomap_fragment: ya,
            aomap_pars_fragment: Aa,
            batching_pars_vertex: Ra,
            batching_vertex: ba,
            begin_vertex: Ca,
            beginnormal_vertex: wa,
            bsdfs: Pa,
            iridescence_fragment: Da,
            bumpmap_pars_fragment: La,
            clipping_planes_fragment: Ia,
            clipping_planes_pars_fragment: Ua,
            clipping_planes_pars_vertex: Fa,
            clipping_planes_vertex: Na,
            color_fragment: Oa,
            color_pars_fragment: Ba,
            color_pars_vertex: za,
            color_vertex: Ga,
            common: Ha,
            cube_uv_reflection_fragment: Va,
            defaultnormal_vertex: ka,
            displacementmap_pars_vertex: Wa,
            displacementmap_vertex: Xa,
            emissivemap_fragment: qa,
            emissivemap_pars_fragment: Ya,
            colorspace_fragment: $a,
            colorspace_pars_fragment: Ka,
            envmap_fragment: Za,
            envmap_common_pars_fragment: ja,
            envmap_pars_fragment: Ja,
            envmap_pars_vertex: Qa,
            envmap_physical_pars_fragment: uo,
            envmap_vertex: eo,
            fog_vertex: to,
            fog_pars_vertex: no,
            fog_fragment: io,
            fog_pars_fragment: ro,
            gradientmap_pars_fragment: so,
            lightmap_pars_fragment: ao,
            lights_lambert_fragment: oo,
            lights_lambert_pars_fragment: lo,
            lights_pars_begin: co,
            lights_toon_fragment: ho,
            lights_toon_pars_fragment: fo,
            lights_phong_fragment: po,
            lights_phong_pars_fragment: mo,
            lights_physical_fragment: _o,
            lights_physical_pars_fragment: go,
            lights_fragment_begin: vo,
            lights_fragment_maps: xo,
            lights_fragment_end: So,
            logdepthbuf_fragment: Mo,
            logdepthbuf_pars_fragment: Eo,
            logdepthbuf_pars_vertex: To,
            logdepthbuf_vertex: yo,
            map_fragment: Ao,
            map_pars_fragment: Ro,
            map_particle_fragment: bo,
            map_particle_pars_fragment: Co,
            metalnessmap_fragment: wo,
            metalnessmap_pars_fragment: Po,
            morphinstance_vertex: Do,
            morphcolor_vertex: Lo,
            morphnormal_vertex: Io,
            morphtarget_pars_vertex: Uo,
            morphtarget_vertex: Fo,
            normal_fragment_begin: No,
            normal_fragment_maps: Oo,
            normal_pars_fragment: Bo,
            normal_pars_vertex: zo,
            normal_vertex: Go,
            normalmap_pars_fragment: Ho,
            clearcoat_normal_fragment_begin: Vo,
            clearcoat_normal_fragment_maps: ko,
            clearcoat_pars_fragment: Wo,
            iridescence_pars_fragment: Xo,
            opaque_fragment: qo,
            packing: Yo,
            premultiplied_alpha_fragment: $o,
            project_vertex: Ko,
            dithering_fragment: Zo,
            dithering_pars_fragment: jo,
            roughnessmap_fragment: Jo,
            roughnessmap_pars_fragment: Qo,
            shadowmap_pars_fragment: el,
            shadowmap_pars_vertex: tl,
            shadowmap_vertex: nl,
            shadowmask_pars_fragment: il,
            skinbase_vertex: rl,
            skinning_pars_vertex: sl,
            skinning_vertex: al,
            skinnormal_vertex: ol,
            specularmap_fragment: ll,
            specularmap_pars_fragment: cl,
            tonemapping_fragment: ul,
            tonemapping_pars_fragment: hl,
            transmission_fragment: dl,
            transmission_pars_fragment: fl,
            uv_pars_fragment: pl,
            uv_pars_vertex: ml,
            uv_vertex: _l,
            worldpos_vertex: gl,
            background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
            background_frag: `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
            backgroundCube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
            backgroundCube_frag: `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
            cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
            cube_frag: `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
            depth_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
            depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
            distanceRGBA_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
            distanceRGBA_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
            equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
            equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
            linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
            linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
            meshbasic_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
            meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
            meshlambert_vert: `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
            meshlambert_frag: `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
            meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
            meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
            meshnormal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
            meshnormal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
            meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
            meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
            meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
            meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
            meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
            meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
            points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
            points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
            shadow_vert: `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
            shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
            sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
            sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
        },
        ne = {
            common: {
                diffuse: {
                    value: new Ke(16777215)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                mapTransform: {
                    value: new Ue
                },
                alphaMap: {
                    value: null
                },
                alphaMapTransform: {
                    value: new Ue
                },
                alphaTest: {
                    value: 0
                }
            },
            specularmap: {
                specularMap: {
                    value: null
                },
                specularMapTransform: {
                    value: new Ue
                }
            },
            envmap: {
                envMap: {
                    value: null
                },
                envMapRotation: {
                    value: new Ue
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                ior: {
                    value: 1.5
                },
                refractionRatio: {
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                },
                aoMapTransform: {
                    value: new Ue
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                },
                lightMapTransform: {
                    value: new Ue
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpMapTransform: {
                    value: new Ue
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalMapTransform: {
                    value: new Ue
                },
                normalScale: {
                    value: new Ze(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementMapTransform: {
                    value: new Ue
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                },
                emissiveMapTransform: {
                    value: new Ue
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                },
                metalnessMapTransform: {
                    value: new Ue
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                },
                roughnessMapTransform: {
                    value: new Ue
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 25e-5
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2e3
                },
                fogColor: {
                    value: new Ke(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                lightProbe: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {}
                    }
                },
                directionalLightShadows: {
                    value: [],
                    properties: {
                        shadowIntensity: 1,
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {}
                    }
                },
                spotLightShadows: {
                    value: [],
                    properties: {
                        shadowIntensity: 1,
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotLightMap: {
                    value: []
                },
                spotShadowMap: {
                    value: []
                },
                spotLightMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {}
                    }
                },
                pointLightShadows: {
                    value: [],
                    properties: {
                        shadowIntensity: 1,
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {},
                        shadowCameraNear: {},
                        shadowCameraFar: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                },
                ltc_1: {
                    value: null
                },
                ltc_2: {
                    value: null
                }
            },
            points: {
                diffuse: {
                    value: new Ke(16777215)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                alphaMap: {
                    value: null
                },
                alphaMapTransform: {
                    value: new Ue
                },
                alphaTest: {
                    value: 0
                },
                uvTransform: {
                    value: new Ue
                }
            },
            sprite: {
                diffuse: {
                    value: new Ke(16777215)
                },
                opacity: {
                    value: 1
                },
                center: {
                    value: new Ze(.5, .5)
                },
                rotation: {
                    value: 0
                },
                map: {
                    value: null
                },
                mapTransform: {
                    value: new Ue
                },
                alphaMap: {
                    value: null
                },
                alphaMapTransform: {
                    value: new Ue
                },
                alphaTest: {
                    value: 0
                }
            }
        },
        zt = {
            basic: {
                uniforms: gt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.fog]),
                vertexShader: Ie.meshbasic_vert,
                fragmentShader: Ie.meshbasic_frag
            },
            lambert: {
                uniforms: gt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, ne.lights, {
                    emissive: {
                        value: new Ke(0)
                    }
                }]),
                vertexShader: Ie.meshlambert_vert,
                fragmentShader: Ie.meshlambert_frag
            },
            phong: {
                uniforms: gt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, ne.lights, {
                    emissive: {
                        value: new Ke(0)
                    },
                    specular: {
                        value: new Ke(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: Ie.meshphong_vert,
                fragmentShader: Ie.meshphong_frag
            },
            standard: {
                uniforms: gt([ne.common, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.roughnessmap, ne.metalnessmap, ne.fog, ne.lights, {
                    emissive: {
                        value: new Ke(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: Ie.meshphysical_vert,
                fragmentShader: Ie.meshphysical_frag
            },
            toon: {
                uniforms: gt([ne.common, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.gradientmap, ne.fog, ne.lights, {
                    emissive: {
                        value: new Ke(0)
                    }
                }]),
                vertexShader: Ie.meshtoon_vert,
                fragmentShader: Ie.meshtoon_frag
            },
            matcap: {
                uniforms: gt([ne.common, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, {
                    matcap: {
                        value: null
                    }
                }]),
                vertexShader: Ie.meshmatcap_vert,
                fragmentShader: Ie.meshmatcap_frag
            },
            points: {
                uniforms: gt([ne.points, ne.fog]),
                vertexShader: Ie.points_vert,
                fragmentShader: Ie.points_frag
            },
            dashed: {
                uniforms: gt([ne.common, ne.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: Ie.linedashed_vert,
                fragmentShader: Ie.linedashed_frag
            },
            depth: {
                uniforms: gt([ne.common, ne.displacementmap]),
                vertexShader: Ie.depth_vert,
                fragmentShader: Ie.depth_frag
            },
            normal: {
                uniforms: gt([ne.common, ne.bumpmap, ne.normalmap, ne.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: Ie.meshnormal_vert,
                fragmentShader: Ie.meshnormal_frag
            },
            sprite: {
                uniforms: gt([ne.sprite, ne.fog]),
                vertexShader: Ie.sprite_vert,
                fragmentShader: Ie.sprite_frag
            },
            background: {
                uniforms: {
                    uvTransform: {
                        value: new Ue
                    },
                    t2D: {
                        value: null
                    },
                    backgroundIntensity: {
                        value: 1
                    }
                },
                vertexShader: Ie.background_vert,
                fragmentShader: Ie.background_frag
            },
            backgroundCube: {
                uniforms: {
                    envMap: {
                        value: null
                    },
                    flipEnvMap: {
                        value: -1
                    },
                    backgroundBlurriness: {
                        value: 0
                    },
                    backgroundIntensity: {
                        value: 1
                    },
                    backgroundRotation: {
                        value: new Ue
                    }
                },
                vertexShader: Ie.backgroundCube_vert,
                fragmentShader: Ie.backgroundCube_frag
            },
            cube: {
                uniforms: {
                    tCube: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    },
                    opacity: {
                        value: 1
                    }
                },
                vertexShader: Ie.cube_vert,
                fragmentShader: Ie.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: Ie.equirect_vert,
                fragmentShader: Ie.equirect_frag
            },
            distanceRGBA: {
                uniforms: gt([ne.common, ne.displacementmap, {
                    referencePosition: {
                        value: new B
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }]),
                vertexShader: Ie.distanceRGBA_vert,
                fragmentShader: Ie.distanceRGBA_frag
            },
            shadow: {
                uniforms: gt([ne.lights, ne.fog, {
                    color: {
                        value: new Ke(0)
                    },
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: Ie.shadow_vert,
                fragmentShader: Ie.shadow_frag
            }
        };
    zt.physical = {
        uniforms: gt([zt.standard.uniforms, {
            clearcoat: {
                value: 0
            },
            clearcoatMap: {
                value: null
            },
            clearcoatMapTransform: {
                value: new Ue
            },
            clearcoatNormalMap: {
                value: null
            },
            clearcoatNormalMapTransform: {
                value: new Ue
            },
            clearcoatNormalScale: {
                value: new Ze(1, 1)
            },
            clearcoatRoughness: {
                value: 0
            },
            clearcoatRoughnessMap: {
                value: null
            },
            clearcoatRoughnessMapTransform: {
                value: new Ue
            },
            dispersion: {
                value: 0
            },
            iridescence: {
                value: 0
            },
            iridescenceMap: {
                value: null
            },
            iridescenceMapTransform: {
                value: new Ue
            },
            iridescenceIOR: {
                value: 1.3
            },
            iridescenceThicknessMinimum: {
                value: 100
            },
            iridescenceThicknessMaximum: {
                value: 400
            },
            iridescenceThicknessMap: {
                value: null
            },
            iridescenceThicknessMapTransform: {
                value: new Ue
            },
            sheen: {
                value: 0
            },
            sheenColor: {
                value: new Ke(0)
            },
            sheenColorMap: {
                value: null
            },
            sheenColorMapTransform: {
                value: new Ue
            },
            sheenRoughness: {
                value: 1
            },
            sheenRoughnessMap: {
                value: null
            },
            sheenRoughnessMapTransform: {
                value: new Ue
            },
            transmission: {
                value: 0
            },
            transmissionMap: {
                value: null
            },
            transmissionMapTransform: {
                value: new Ue
            },
            transmissionSamplerSize: {
                value: new Ze
            },
            transmissionSamplerMap: {
                value: null
            },
            thickness: {
                value: 0
            },
            thicknessMap: {
                value: null
            },
            thicknessMapTransform: {
                value: new Ue
            },
            attenuationDistance: {
                value: 0
            },
            attenuationColor: {
                value: new Ke(0)
            },
            specularColor: {
                value: new Ke(1, 1, 1)
            },
            specularColorMap: {
                value: null
            },
            specularColorMapTransform: {
                value: new Ue
            },
            specularIntensity: {
                value: 1
            },
            specularIntensityMap: {
                value: null
            },
            specularIntensityMapTransform: {
                value: new Ue
            },
            anisotropyVector: {
                value: new Ze
            },
            anisotropyMap: {
                value: null
            },
            anisotropyMapTransform: {
                value: new Ue
            }
        }]),
        vertexShader: Ie.meshphysical_vert,
        fragmentShader: Ie.meshphysical_frag
    };
    const yi = {
            r: 0,
            b: 0,
            g: 0
        },
        pn = new Wt,
        vl = new ot;

    function xl(i, e, t, n, r, s, a) {
        const o = new Ke(0);
        let l = s === !0 ? 0 : 1,
            c, d, f = null,
            h = 0,
            m = null;

        function v(y) {
            let M = y.isScene === !0 ? y.background : null;
            return M && M.isTexture && (M = (y.backgroundBlurriness > 0 ? t : e).get(M)), M
        }

        function S(y) {
            let M = !1;
            const I = v(y);
            I === null ? u(o, l) : I && I.isColor && (u(I, 1), M = !0);
            const w = i.xr.getEnvironmentBlendMode();
            w === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : w === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || M) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil))
        }

        function p(y, M) {
            const I = v(M);
            I && (I.isCubeTexture || I.mapping === 306) ? (d === void 0 && (d = new Bt(new Qn(1, 1, 1), new tn({
                name: "BackgroundCubeMaterial",
                uniforms: Fn(zt.backgroundCube.uniforms),
                vertexShader: zt.backgroundCube.vertexShader,
                fragmentShader: zt.backgroundCube.fragmentShader,
                side: 1,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
                allowOverride: !1
            })), d.geometry.deleteAttribute("normal"), d.geometry.deleteAttribute("uv"), d.onBeforeRender = function(w, C, U) {
                this.matrixWorld.copyPosition(U.matrixWorld)
            }, Object.defineProperty(d.material, "envMap", {
                get: function() {
                    return this.uniforms.envMap.value
                }
            }), r.update(d)), pn.copy(M.backgroundRotation), pn.x *= -1, pn.y *= -1, pn.z *= -1, I.isCubeTexture && I.isRenderTargetTexture === !1 && (pn.y *= -1, pn.z *= -1), d.material.uniforms.envMap.value = I, d.material.uniforms.flipEnvMap.value = I.isCubeTexture && I.isRenderTargetTexture === !1 ? -1 : 1, d.material.uniforms.backgroundBlurriness.value = M.backgroundBlurriness, d.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, d.material.uniforms.backgroundRotation.value.setFromMatrix4(vl.makeRotationFromEuler(pn)), d.material.toneMapped = ze.getTransfer(I.colorSpace) !== $e, (f !== I || h !== I.version || m !== i.toneMapping) && (d.material.needsUpdate = !0, f = I, h = I.version, m = i.toneMapping), d.layers.enableAll(), y.unshift(d, d.geometry, d.material, 0, 0, null)) : I && I.isTexture && (c === void 0 && (c = new Bt(new ei(2, 2), new tn({
                name: "BackgroundMaterial",
                uniforms: Fn(zt.background.uniforms),
                vertexShader: zt.background.vertexShader,
                fragmentShader: zt.background.fragmentShader,
                side: 0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
                allowOverride: !1
            })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
                get: function() {
                    return this.uniforms.t2D.value
                }
            }), r.update(c)), c.material.uniforms.t2D.value = I, c.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, c.material.toneMapped = ze.getTransfer(I.colorSpace) !== $e, I.matrixAutoUpdate === !0 && I.updateMatrix(), c.material.uniforms.uvTransform.value.copy(I.matrix), (f !== I || h !== I.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, f = I, h = I.version, m = i.toneMapping), c.layers.enableAll(), y.unshift(c, c.geometry, c.material, 0, 0, null))
        }

        function u(y, M) {
            y.getRGB(yi, Gr(i)), n.buffers.color.setClear(yi.r, yi.g, yi.b, M, a)
        }

        function A() {
            d !== void 0 && (d.geometry.dispose(), d.material.dispose(), d = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0)
        }
        return {
            getClearColor: function() {
                return o
            },
            setClearColor: function(y, M = 1) {
                o.set(y), l = M, u(o, l)
            },
            getClearAlpha: function() {
                return l
            },
            setClearAlpha: function(y) {
                l = y, u(o, l)
            },
            render: S,
            addToRenderList: p,
            dispose: A
        }
    }

    function Sl(i, e) {
        const t = i.getParameter(i.MAX_VERTEX_ATTRIBS),
            n = {},
            r = h(null);
        let s = r,
            a = !1;

        function o(x, P, q, z, W) {
            let j = !1;
            const V = f(z, q, P);
            s !== V && (s = V, c(s.object)), j = m(x, z, q, W), j && v(x, z, q, W), W !== null && e.update(W, i.ELEMENT_ARRAY_BUFFER), (j || a) && (a = !1, M(x, P, q, z), W !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(W).buffer))
        }

        function l() {
            return i.createVertexArray()
        }

        function c(x) {
            return i.bindVertexArray(x)
        }

        function d(x) {
            return i.deleteVertexArray(x)
        }

        function f(x, P, q) {
            const z = q.wireframe === !0;
            let W = n[x.id];
            W === void 0 && (W = {}, n[x.id] = W);
            let j = W[P.id];
            j === void 0 && (j = {}, W[P.id] = j);
            let V = j[z];
            return V === void 0 && (V = h(l()), j[z] = V), V
        }

        function h(x) {
            const P = [],
                q = [],
                z = [];
            for (let W = 0; W < t; W++) P[W] = 0, q[W] = 0, z[W] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: P,
                enabledAttributes: q,
                attributeDivisors: z,
                object: x,
                attributes: {},
                index: null
            }
        }

        function m(x, P, q, z) {
            const W = s.attributes,
                j = P.attributes;
            let V = 0;
            const ee = q.getAttributes();
            for (const G in ee)
                if (ee[G].location >= 0) {
                    const de = W[G];
                    let Te = j[G];
                    if (Te === void 0 && (G === "instanceMatrix" && x.instanceMatrix && (Te = x.instanceMatrix), G === "instanceColor" && x.instanceColor && (Te = x.instanceColor)), de === void 0 || de.attribute !== Te || Te && de.data !== Te.data) return !0;
                    V++
                }
            return s.attributesNum !== V || s.index !== z
        }

        function v(x, P, q, z) {
            const W = {},
                j = P.attributes;
            let V = 0;
            const ee = q.getAttributes();
            for (const G in ee)
                if (ee[G].location >= 0) {
                    let de = j[G];
                    de === void 0 && (G === "instanceMatrix" && x.instanceMatrix && (de = x.instanceMatrix), G === "instanceColor" && x.instanceColor && (de = x.instanceColor));
                    const Te = {};
                    Te.attribute = de, de && de.data && (Te.data = de.data), W[G] = Te, V++
                }
            s.attributes = W, s.attributesNum = V, s.index = z
        }

        function S() {
            const x = s.newAttributes;
            for (let P = 0, q = x.length; P < q; P++) x[P] = 0
        }

        function p(x) {
            u(x, 0)
        }

        function u(x, P) {
            const q = s.newAttributes,
                z = s.enabledAttributes,
                W = s.attributeDivisors;
            q[x] = 1, z[x] === 0 && (i.enableVertexAttribArray(x), z[x] = 1), W[x] !== P && (i.vertexAttribDivisor(x, P), W[x] = P)
        }

        function A() {
            const x = s.newAttributes,
                P = s.enabledAttributes;
            for (let q = 0, z = P.length; q < z; q++) P[q] !== x[q] && (i.disableVertexAttribArray(q), P[q] = 0)
        }

        function y(x, P, q, z, W, j, V) {
            V === !0 ? i.vertexAttribIPointer(x, P, q, W, j) : i.vertexAttribPointer(x, P, q, z, W, j)
        }

        function M(x, P, q, z) {
            S();
            const W = z.attributes,
                j = q.getAttributes(),
                V = P.defaultAttributeValues;
            for (const ee in j) {
                const G = j[ee];
                if (G.location >= 0) {
                    let oe = W[ee];
                    if (oe === void 0 && (ee === "instanceMatrix" && x.instanceMatrix && (oe = x.instanceMatrix), ee === "instanceColor" && x.instanceColor && (oe = x.instanceColor)), oe !== void 0) {
                        const de = oe.normalized,
                            Te = oe.itemSize,
                            Ne = e.get(oe);
                        if (Ne === void 0) continue;
                        const je = Ne.buffer,
                            X = Ne.type,
                            te = Ne.bytesPerElement,
                            Se = X === i.INT || X === i.UNSIGNED_INT || oe.gpuType === 1013;
                        if (oe.isInterleavedBufferAttribute) {
                            const le = oe.data,
                                Me = le.stride,
                                Ve = oe.offset;
                            if (le.isInstancedInterleavedBuffer) {
                                for (let Ce = 0; Ce < G.locationSize; Ce++) u(G.location + Ce, le.meshPerAttribute);
                                x.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = le.meshPerAttribute * le.count)
                            } else
                                for (let Ce = 0; Ce < G.locationSize; Ce++) p(G.location + Ce);
                            i.bindBuffer(i.ARRAY_BUFFER, je);
                            for (let Ce = 0; Ce < G.locationSize; Ce++) y(G.location + Ce, Te / G.locationSize, X, de, Me * te, (Ve + Te / G.locationSize * Ce) * te, Se)
                        } else {
                            if (oe.isInstancedBufferAttribute) {
                                for (let le = 0; le < G.locationSize; le++) u(G.location + le, oe.meshPerAttribute);
                                x.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = oe.meshPerAttribute * oe.count)
                            } else
                                for (let le = 0; le < G.locationSize; le++) p(G.location + le);
                            i.bindBuffer(i.ARRAY_BUFFER, je);
                            for (let le = 0; le < G.locationSize; le++) y(G.location + le, Te / G.locationSize, X, de, Te * te, Te / G.locationSize * le * te, Se)
                        }
                    } else if (V !== void 0) {
                        const de = V[ee];
                        if (de !== void 0) switch (de.length) {
                            case 2:
                                i.vertexAttrib2fv(G.location, de);
                                break;
                            case 3:
                                i.vertexAttrib3fv(G.location, de);
                                break;
                            case 4:
                                i.vertexAttrib4fv(G.location, de);
                                break;
                            default:
                                i.vertexAttrib1fv(G.location, de)
                        }
                    }
                }
            }
            A()
        }

        function I() {
            U();
            for (const x in n) {
                const P = n[x];
                for (const q in P) {
                    const z = P[q];
                    for (const W in z) d(z[W].object), delete z[W];
                    delete P[q]
                }
                delete n[x]
            }
        }

        function w(x) {
            if (n[x.id] === void 0) return;
            const P = n[x.id];
            for (const q in P) {
                const z = P[q];
                for (const W in z) d(z[W].object), delete z[W];
                delete P[q]
            }
            delete n[x.id]
        }

        function C(x) {
            for (const P in n) {
                const q = n[P];
                if (q[x.id] === void 0) continue;
                const z = q[x.id];
                for (const W in z) d(z[W].object), delete z[W];
                delete q[x.id]
            }
        }

        function U() {
            E(), a = !0, s !== r && (s = r, c(s.object))
        }

        function E() {
            r.geometry = null, r.program = null, r.wireframe = !1
        }
        return {
            setup: o,
            reset: U,
            resetDefaultState: E,
            dispose: I,
            releaseStatesOfGeometry: w,
            releaseStatesOfProgram: C,
            initAttributes: S,
            enableAttribute: p,
            disableUnusedAttributes: A
        }
    }

    function Ml(i, e, t) {
        let n;

        function r(c) {
            n = c
        }

        function s(c, d) {
            i.drawArrays(n, c, d), t.update(d, n, 1)
        }

        function a(c, d, f) {
            f !== 0 && (i.drawArraysInstanced(n, c, d, f), t.update(d, n, f))
        }

        function o(c, d, f) {
            if (f === 0) return;
            e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, d, 0, f);
            let m = 0;
            for (let v = 0; v < f; v++) m += d[v];
            t.update(m, n, 1)
        }

        function l(c, d, f, h) {
            if (f === 0) return;
            const m = e.get("WEBGL_multi_draw");
            if (m === null)
                for (let v = 0; v < c.length; v++) a(c[v], d[v], h[v]);
            else {
                m.multiDrawArraysInstancedWEBGL(n, c, 0, d, 0, h, 0, f);
                let v = 0;
                for (let S = 0; S < f; S++) v += d[S] * h[S];
                t.update(v, n, 1)
            }
        }
        this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l
    }

    function El(i, e, t, n) {
        let r;

        function s() {
            if (r !== void 0) return r;
            if (e.has("EXT_texture_filter_anisotropic") === !0) {
                const C = e.get("EXT_texture_filter_anisotropic");
                r = i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            } else r = 0;
            return r
        }

        function a(C) {
            return !(C !== 1023 && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))
        }

        function o(C) {
            const U = C === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
            return !(C !== 1009 && n.convert(C) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && C !== 1015 && !U)
        }

        function l(C) {
            if (C === "highp") {
                if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
                C = "mediump"
            }
            return C === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
        }
        let c = t.precision !== void 0 ? t.precision : "highp";
        const d = l(c);
        d !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", d, "instead."), c = d);
        const f = t.logarithmicDepthBuffer === !0,
            h = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"),
            m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
            v = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            S = i.getParameter(i.MAX_TEXTURE_SIZE),
            p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
            u = i.getParameter(i.MAX_VERTEX_ATTRIBS),
            A = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
            y = i.getParameter(i.MAX_VARYING_VECTORS),
            M = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
            I = v > 0,
            w = i.getParameter(i.MAX_SAMPLES);
        return {
            isWebGL2: !0,
            getMaxAnisotropy: s,
            getMaxPrecision: l,
            textureFormatReadable: a,
            textureTypeReadable: o,
            precision: c,
            logarithmicDepthBuffer: f,
            reverseDepthBuffer: h,
            maxTextures: m,
            maxVertexTextures: v,
            maxTextureSize: S,
            maxCubemapSize: p,
            maxAttributes: u,
            maxVertexUniforms: A,
            maxVaryings: y,
            maxFragmentUniforms: M,
            vertexTextures: I,
            maxSamples: w
        }
    }

    function Tl(i) {
        const e = this;
        let t = null,
            n = 0,
            r = !1,
            s = !1;
        const a = new dn,
            o = new Ue,
            l = {
                value: null,
                needsUpdate: !1
            };
        this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, h) {
            const m = f.length !== 0 || h || n !== 0 || r;
            return r = h, n = f.length, m
        }, this.beginShadows = function() {
            s = !0, d(null)
        }, this.endShadows = function() {
            s = !1
        }, this.setGlobalState = function(f, h) {
            t = d(f, h, 0)
        }, this.setState = function(f, h, m) {
            const v = f.clippingPlanes,
                S = f.clipIntersection,
                p = f.clipShadows,
                u = i.get(f);
            if (!r || v === null || v.length === 0 || s && !p) s ? d(null) : c();
            else {
                const A = s ? 0 : n,
                    y = A * 4;
                let M = u.clippingState || null;
                l.value = M, M = d(v, h, y, m);
                for (let I = 0; I !== y; ++I) M[I] = t[I];
                u.clippingState = M, this.numIntersection = S ? this.numPlanes : 0, this.numPlanes += A
            }
        };

        function c() {
            l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
        }

        function d(f, h, m, v) {
            const S = f !== null ? f.length : 0;
            let p = null;
            if (S !== 0) {
                if (p = l.value, v !== !0 || p === null) {
                    const u = m + S * 4,
                        A = h.matrixWorldInverse;
                    o.getNormalMatrix(A), (p === null || p.length < u) && (p = new Float32Array(u));
                    for (let y = 0, M = m; y !== S; ++y, M += 4) a.copy(f[y]).applyMatrix4(A, o), a.normal.toArray(p, M), p[M + 3] = a.constant
                }
                l.value = p, l.needsUpdate = !0
            }
            return e.numPlanes = S, e.numIntersection = 0, p
        }
    }

    function yl(i) {
        let e = new WeakMap;

        function t(a, o) {
            return o === 303 ? a.mapping = 301 : o === 304 && (a.mapping = 302), a
        }

        function n(a) {
            if (a && a.isTexture) {
                const o = a.mapping;
                if (o === 303 || o === 304)
                    if (e.has(a)) {
                        const l = e.get(a).texture;
                        return t(l, a.mapping)
                    } else {
                        const l = a.image;
                        if (l && l.height > 0) {
                            const c = new oa(l.height);
                            return c.fromEquirectangularTexture(i, a), e.set(a, c), a.addEventListener("dispose", r), t(c.texture, a.mapping)
                        } else return null
                    }
            }
            return a
        }

        function r(a) {
            const o = a.target;
            o.removeEventListener("dispose", r);
            const l = e.get(o);
            l !== void 0 && (e.delete(o), l.dispose())
        }

        function s() {
            e = new WeakMap
        }
        return {
            get: n,
            dispose: s
        }
    }
    const Bn = 4,
        Zr = [.125, .215, .35, .446, .526, .582],
        mn = 20,
        lr = new Yr,
        jr = new Ke;
    let cr = null,
        ur = 0,
        hr = 0,
        dr = !1;
    const _n = (1 + Math.sqrt(5)) / 2,
        zn = 1 / _n,
        Jr = [new B(-_n, zn, 0), new B(_n, zn, 0), new B(-zn, 0, _n), new B(zn, 0, _n), new B(0, _n, -zn), new B(0, _n, zn), new B(-1, 1, -1), new B(1, 1, -1), new B(-1, 1, 1), new B(1, 1, 1)],
        Al = new B;
    class Qr {
        constructor(e) {
            this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
        }
        fromScene(e, t = 0, n = .1, r = 100, s = {}) {
            const {
                size: a = 256,
                position: o = Al
            } = s;
            cr = this._renderer.getRenderTarget(), ur = this._renderer.getActiveCubeFace(), hr = this._renderer.getActiveMipmapLevel(), dr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
            const l = this._allocateTargets();
            return l.depthBuffer = !0, this._sceneToCubeUV(e, n, r, l, o), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l
        }
        fromEquirectangular(e, t = null) {
            return this._fromTexture(e, t)
        }
        fromCubemap(e, t = null) {
            return this._fromTexture(e, t)
        }
        compileCubemapShader() {
            this._cubemapMaterial === null && (this._cubemapMaterial = ns(), this._compileMaterial(this._cubemapMaterial))
        }
        compileEquirectangularShader() {
            this._equirectMaterial === null && (this._equirectMaterial = ts(), this._compileMaterial(this._equirectMaterial))
        }
        dispose() {
            this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose()
        }
        _setSize(e) {
            this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax)
        }
        _dispose() {
            this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
            for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose()
        }
        _cleanup(e) {
            this._renderer.setRenderTarget(cr, ur, hr), this._renderer.xr.enabled = dr, e.scissorTest = !1, Ai(e, 0, 0, e.width, e.height)
        }
        _fromTexture(e, t) {
            e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), cr = this._renderer.getRenderTarget(), ur = this._renderer.getActiveCubeFace(), hr = this._renderer.getActiveMipmapLevel(), dr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
            const n = t || this._allocateTargets();
            return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
        }
        _allocateTargets() {
            const e = 3 * Math.max(this._cubeSize, 112),
                t = 4 * this._cubeSize,
                n = {
                    magFilter: 1006,
                    minFilter: 1006,
                    generateMipmaps: !1,
                    type: 1016,
                    format: 1023,
                    colorSpace: Mn,
                    depthBuffer: !1
                },
                r = es(e, t, n);
            if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
                this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = es(e, t, n);
                const {
                    _lodMax: s
                } = this;
                ({
                    sizeLods: this._sizeLods,
                    lodPlanes: this._lodPlanes,
                    sigmas: this._sigmas
                } = Rl(s)), this._blurMaterial = bl(s, e, t)
            }
            return r
        }
        _compileMaterial(e) {
            const t = new Bt(this._lodPlanes[0], e);
            this._renderer.compile(t, lr)
        }
        _sceneToCubeUV(e, t, n, r, s) {
            const l = new Ut(90, 1, t, n),
                c = [1, -1, 1, 1, 1, 1],
                d = [1, 1, 1, -1, -1, -1],
                f = this._renderer,
                h = f.autoClear,
                m = f.toneMapping;
            f.getClearColor(jr), f.toneMapping = 0, f.autoClear = !1;
            const v = new ir({
                    name: "PMREM.Background",
                    side: 1,
                    depthWrite: !1,
                    depthTest: !1
                }),
                S = new Bt(new Qn, v);
            let p = !1;
            const u = e.background;
            u ? u.isColor && (v.color.copy(u), e.background = null, p = !0) : (v.color.copy(jr), p = !0);
            for (let A = 0; A < 6; A++) {
                const y = A % 3;
                y === 0 ? (l.up.set(0, c[A], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x + d[A], s.y, s.z)) : y === 1 ? (l.up.set(0, 0, c[A]), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y + d[A], s.z)) : (l.up.set(0, c[A], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y, s.z + d[A]));
                const M = this._cubeSize;
                Ai(r, y * M, A > 2 ? M : 0, M, M), f.setRenderTarget(r), p && f.render(S, l), f.render(e, l)
            }
            S.geometry.dispose(), S.material.dispose(), f.toneMapping = m, f.autoClear = h, e.background = u
        }
        _textureToCubeUV(e, t) {
            const n = this._renderer,
                r = e.mapping === 301 || e.mapping === 302;
            r ? (this._cubemapMaterial === null && (this._cubemapMaterial = ns()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ts());
            const s = r ? this._cubemapMaterial : this._equirectMaterial,
                a = new Bt(this._lodPlanes[0], s),
                o = s.uniforms;
            o.envMap.value = e;
            const l = this._cubeSize;
            Ai(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, lr)
        }
        _applyPMREM(e) {
            const t = this._renderer,
                n = t.autoClear;
            t.autoClear = !1;
            const r = this._lodPlanes.length;
            for (let s = 1; s < r; s++) {
                const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]),
                    o = Jr[(r - s - 1) % Jr.length];
                this._blur(e, s - 1, s, a, o)
            }
            t.autoClear = n
        }
        _blur(e, t, n, r, s) {
            const a = this._pingPongRenderTarget;
            this._halfBlur(e, a, t, n, r, "latitudinal", s), this._halfBlur(a, e, n, n, r, "longitudinal", s)
        }
        _halfBlur(e, t, n, r, s, a, o) {
            const l = this._renderer,
                c = this._blurMaterial;
            a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
            const d = 3,
                f = new Bt(this._lodPlanes[r], c),
                h = c.uniforms,
                m = this._sizeLods[n] - 1,
                v = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * mn - 1),
                S = s / v,
                p = isFinite(s) ? 1 + Math.floor(d * S) : mn;
            p > mn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mn}`);
            const u = [];
            let A = 0;
            for (let C = 0; C < mn; ++C) {
                const U = C / S,
                    E = Math.exp(-U * U / 2);
                u.push(E), C === 0 ? A += E : C < p && (A += 2 * E)
            }
            for (let C = 0; C < u.length; C++) u[C] = u[C] / A;
            h.envMap.value = e.texture, h.samples.value = p, h.weights.value = u, h.latitudinal.value = a === "latitudinal", o && (h.poleAxis.value = o);
            const {
                _lodMax: y
            } = this;
            h.dTheta.value = v, h.mipInt.value = y - n;
            const M = this._sizeLods[r],
                I = 3 * M * (r > y - Bn ? r - y + Bn : 0),
                w = 4 * (this._cubeSize - M);
            Ai(t, I, w, 3 * M, 2 * M), l.setRenderTarget(t), l.render(f, lr)
        }
    }

    function Rl(i) {
        const e = [],
            t = [],
            n = [];
        let r = i;
        const s = i - Bn + 1 + Zr.length;
        for (let a = 0; a < s; a++) {
            const o = Math.pow(2, r);
            t.push(o);
            let l = 1 / o;
            a > i - Bn ? l = Zr[a - i + Bn - 1] : a === 0 && (l = 0), n.push(l);
            const c = 1 / (o - 2),
                d = -c,
                f = 1 + c,
                h = [d, d, f, d, f, f, d, d, f, f, d, f],
                m = 6,
                v = 6,
                S = 3,
                p = 2,
                u = 1,
                A = new Float32Array(S * v * m),
                y = new Float32Array(p * v * m),
                M = new Float32Array(u * v * m);
            for (let w = 0; w < m; w++) {
                const C = w % 3 * 2 / 3 - 1,
                    U = w > 2 ? 0 : -1,
                    E = [C, U, 0, C + 2 / 3, U, 0, C + 2 / 3, U + 1, 0, C, U, 0, C + 2 / 3, U + 1, 0, C, U + 1, 0];
                A.set(E, S * v * w), y.set(h, p * v * w);
                const x = [w, w, w, w, w, w];
                M.set(x, u * v * w)
            }
            const I = new un;
            I.setAttribute("position", new Ot(A, S)), I.setAttribute("uv", new Ot(y, p)), I.setAttribute("faceIndex", new Ot(M, u)), e.push(I), r > Bn && r--
        }
        return {
            lodPlanes: e,
            sizeLods: t,
            sigmas: n
        }
    }

    function es(i, e, t) {
        const n = new an(i, e, t);
        return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n
    }

    function Ai(i, e, t, n, r) {
        i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r)
    }

    function bl(i, e, t) {
        const n = new Float32Array(mn),
            r = new B(0, 1, 0);
        return new tn({
            name: "SphericalGaussianBlur",
            defines: {
                n: mn,
                CUBEUV_TEXEL_WIDTH: 1 / e,
                CUBEUV_TEXEL_HEIGHT: 1 / t,
                CUBEUV_MAX_MIP: `${i}.0`
            },
            uniforms: {
                envMap: {
                    value: null
                },
                samples: {
                    value: 1
                },
                weights: {
                    value: n
                },
                latitudinal: {
                    value: !1
                },
                dTheta: {
                    value: 0
                },
                mipInt: {
                    value: 0
                },
                poleAxis: {
                    value: r
                }
            },
            vertexShader: fr(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        })
    }

    function ts() {
        return new tn({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                }
            },
            vertexShader: fr(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        })
    }

    function ns() {
        return new tn({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                }
            },
            vertexShader: fr(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        })
    }

    function fr() {
        return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
    }

    function Cl(i) {
        let e = new WeakMap,
            t = null;

        function n(o) {
            if (o && o.isTexture) {
                const l = o.mapping,
                    c = l === 303 || l === 304,
                    d = l === 301 || l === 302;
                if (c || d) {
                    let f = e.get(o);
                    const h = f !== void 0 ? f.texture.pmremVersion : 0;
                    if (o.isRenderTargetTexture && o.pmremVersion !== h) return t === null && (t = new Qr(i)), f = c ? t.fromEquirectangular(o, f) : t.fromCubemap(o, f), f.texture.pmremVersion = o.pmremVersion, e.set(o, f), f.texture;
                    if (f !== void 0) return f.texture; {
                        const m = o.image;
                        return c && m && m.height > 0 || d && m && r(m) ? (t === null && (t = new Qr(i)), f = c ? t.fromEquirectangular(o) : t.fromCubemap(o), f.texture.pmremVersion = o.pmremVersion, e.set(o, f), o.addEventListener("dispose", s), f.texture) : null
                    }
                }
            }
            return o
        }

        function r(o) {
            let l = 0;
            const c = 6;
            for (let d = 0; d < c; d++) o[d] !== void 0 && l++;
            return l === c
        }

        function s(o) {
            const l = o.target;
            l.removeEventListener("dispose", s);
            const c = e.get(l);
            c !== void 0 && (e.delete(l), c.dispose())
        }

        function a() {
            e = new WeakMap, t !== null && (t.dispose(), t = null)
        }
        return {
            get: n,
            dispose: a
        }
    }

    function wl(i) {
        const e = {};

        function t(n) {
            if (e[n] !== void 0) return e[n];
            let r;
            switch (n) {
                case "WEBGL_depth_texture":
                    r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    r = i.getExtension(n)
            }
            return e[n] = r, r
        }
        return {
            has: function(n) {
                return t(n) !== null
            },
            init: function() {
                t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent")
            },
            get: function(n) {
                const r = t(n);
                return r === null && Tn("THREE.WebGLRenderer: " + n + " extension not supported."), r
            }
        }
    }

    function Pl(i, e, t, n) {
        const r = {},
            s = new WeakMap;

        function a(f) {
            const h = f.target;
            h.index !== null && e.remove(h.index);
            for (const v in h.attributes) e.remove(h.attributes[v]);
            h.removeEventListener("dispose", a), delete r[h.id];
            const m = s.get(h);
            m && (e.remove(m), s.delete(h)), n.releaseStatesOfGeometry(h), h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount, t.memory.geometries--
        }

        function o(f, h) {
            return r[h.id] === !0 || (h.addEventListener("dispose", a), r[h.id] = !0, t.memory.geometries++), h
        }

        function l(f) {
            const h = f.attributes;
            for (const m in h) e.update(h[m], i.ARRAY_BUFFER)
        }

        function c(f) {
            const h = [],
                m = f.index,
                v = f.attributes.position;
            let S = 0;
            if (m !== null) {
                const A = m.array;
                S = m.version;
                for (let y = 0, M = A.length; y < M; y += 3) {
                    const I = A[y + 0],
                        w = A[y + 1],
                        C = A[y + 2];
                    h.push(I, w, w, C, C, I)
                }
            } else if (v !== void 0) {
                const A = v.array;
                S = v.version;
                for (let y = 0, M = A.length / 3 - 1; y < M; y += 3) {
                    const I = y + 0,
                        w = y + 1,
                        C = y + 2;
                    h.push(I, w, w, C, C, I)
                }
            } else return;
            const p = new(Sr(h) ? Nr : Fr)(h, 1);
            p.version = S;
            const u = s.get(f);
            u && e.remove(u), s.set(f, p)
        }

        function d(f) {
            const h = s.get(f);
            if (h) {
                const m = f.index;
                m !== null && h.version < m.version && c(f)
            } else c(f);
            return s.get(f)
        }
        return {
            get: o,
            update: l,
            getWireframeAttribute: d
        }
    }

    function Dl(i, e, t) {
        let n;

        function r(h) {
            n = h
        }
        let s, a;

        function o(h) {
            s = h.type, a = h.bytesPerElement
        }

        function l(h, m) {
            i.drawElements(n, m, s, h * a), t.update(m, n, 1)
        }

        function c(h, m, v) {
            v !== 0 && (i.drawElementsInstanced(n, m, s, h * a, v), t.update(m, n, v))
        }

        function d(h, m, v) {
            if (v === 0) return;
            e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, s, h, 0, v);
            let p = 0;
            for (let u = 0; u < v; u++) p += m[u];
            t.update(p, n, 1)
        }

        function f(h, m, v, S) {
            if (v === 0) return;
            const p = e.get("WEBGL_multi_draw");
            if (p === null)
                for (let u = 0; u < h.length; u++) c(h[u] / a, m[u], S[u]);
            else {
                p.multiDrawElementsInstancedWEBGL(n, m, 0, s, h, 0, S, 0, v);
                let u = 0;
                for (let A = 0; A < v; A++) u += m[A] * S[A];
                t.update(u, n, 1)
            }
        }
        this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = d, this.renderMultiDrawInstances = f
    }

    function Ll(i) {
        const e = {
                geometries: 0,
                textures: 0
            },
            t = {
                frame: 0,
                calls: 0,
                triangles: 0,
                points: 0,
                lines: 0
            };

        function n(s, a, o) {
            switch (t.calls++, a) {
                case i.TRIANGLES:
                    t.triangles += o * (s / 3);
                    break;
                case i.LINES:
                    t.lines += o * (s / 2);
                    break;
                case i.LINE_STRIP:
                    t.lines += o * (s - 1);
                    break;
                case i.LINE_LOOP:
                    t.lines += o * s;
                    break;
                case i.POINTS:
                    t.points += o * s;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", a);
                    break
            }
        }

        function r() {
            t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
        }
        return {
            memory: e,
            render: t,
            programs: null,
            autoReset: !0,
            reset: r,
            update: n
        }
    }

    function Il(i, e, t) {
        const n = new WeakMap,
            r = new at;

        function s(a, o, l) {
            const c = a.morphTargetInfluences,
                d = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color,
                f = d !== void 0 ? d.length : 0;
            let h = n.get(o);
            if (h === void 0 || h.count !== f) {
                let E = function() {
                    C.dispose(), n.delete(o), o.removeEventListener("dispose", E)
                };
                h !== void 0 && h.texture.dispose();
                const m = o.morphAttributes.position !== void 0,
                    v = o.morphAttributes.normal !== void 0,
                    S = o.morphAttributes.color !== void 0,
                    p = o.morphAttributes.position || [],
                    u = o.morphAttributes.normal || [],
                    A = o.morphAttributes.color || [];
                let y = 0;
                m === !0 && (y = 1), v === !0 && (y = 2), S === !0 && (y = 3);
                let M = o.attributes.position.count * y,
                    I = 1;
                M > e.maxTextureSize && (I = Math.ceil(M / e.maxTextureSize), M = e.maxTextureSize);
                const w = new Float32Array(M * I * 4 * f),
                    C = new yr(w, M, I, f);
                C.type = 1015, C.needsUpdate = !0;
                const U = y * 4;
                for (let x = 0; x < f; x++) {
                    const P = p[x],
                        q = u[x],
                        z = A[x],
                        W = M * I * 4 * x;
                    for (let j = 0; j < P.count; j++) {
                        const V = j * U;
                        m === !0 && (r.fromBufferAttribute(P, j), w[W + V + 0] = r.x, w[W + V + 1] = r.y, w[W + V + 2] = r.z, w[W + V + 3] = 0), v === !0 && (r.fromBufferAttribute(q, j), w[W + V + 4] = r.x, w[W + V + 5] = r.y, w[W + V + 6] = r.z, w[W + V + 7] = 0), S === !0 && (r.fromBufferAttribute(z, j), w[W + V + 8] = r.x, w[W + V + 9] = r.y, w[W + V + 10] = r.z, w[W + V + 11] = z.itemSize === 4 ? r.w : 1)
                    }
                }
                h = {
                    count: f,
                    texture: C,
                    size: new Ze(M, I)
                }, n.set(o, h), o.addEventListener("dispose", E)
            }
            if (a.isInstancedMesh === !0 && a.morphTexture !== null) l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
            else {
                let m = 0;
                for (let S = 0; S < c.length; S++) m += c[S];
                const v = o.morphTargetsRelative ? 1 : 1 - m;
                l.getUniforms().setValue(i, "morphTargetBaseInfluence", v), l.getUniforms().setValue(i, "morphTargetInfluences", c)
            }
            l.getUniforms().setValue(i, "morphTargetsTexture", h.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", h.size)
        }
        return {
            update: s
        }
    }

    function Ul(i, e, t, n) {
        let r = new WeakMap;

        function s(l) {
            const c = n.render.frame,
                d = l.geometry,
                f = e.get(l, d);
            if (r.get(f) !== c && (e.update(f), r.set(f, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
                const h = l.skeleton;
                r.get(h) !== c && (h.update(), r.set(h, c))
            }
            return f
        }

        function a() {
            r = new WeakMap
        }

        function o(l) {
            const c = l.target;
            c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor)
        }
        return {
            update: s,
            dispose: a
        }
    }
    const is = new _t,
        rs = new qr(1, 1),
        ss = new yr,
        as = new ks,
        os = new Wr,
        ls = [],
        cs = [],
        us = new Float32Array(16),
        hs = new Float32Array(9),
        ds = new Float32Array(4);

    function Gn(i, e, t) {
        const n = i[0];
        if (n <= 0 || n > 0) return i;
        const r = e * t;
        let s = ls[r];
        if (s === void 0 && (s = new Float32Array(r), ls[r] = s), e !== 0) {
            n.toArray(s, 0);
            for (let a = 1, o = 0; a !== e; ++a) o += t, i[a].toArray(s, o)
        }
        return s
    }

    function ct(i, e) {
        if (i.length !== e.length) return !1;
        for (let t = 0, n = i.length; t < n; t++)
            if (i[t] !== e[t]) return !1;
        return !0
    }

    function ut(i, e) {
        for (let t = 0, n = e.length; t < n; t++) i[t] = e[t]
    }

    function Ri(i, e) {
        let t = cs[e];
        t === void 0 && (t = new Int32Array(e), cs[e] = t);
        for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
        return t
    }

    function Fl(i, e) {
        const t = this.cache;
        t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e)
    }

    function Nl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
        else {
            if (ct(t, e)) return;
            i.uniform2fv(this.addr, e), ut(t, e)
        }
    }

    function Ol(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
        else if (e.r !== void 0)(t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
        else {
            if (ct(t, e)) return;
            i.uniform3fv(this.addr, e), ut(t, e)
        }
    }

    function Bl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
        else {
            if (ct(t, e)) return;
            i.uniform4fv(this.addr, e), ut(t, e)
        }
    }

    function zl(i, e) {
        const t = this.cache,
            n = e.elements;
        if (n === void 0) {
            if (ct(t, e)) return;
            i.uniformMatrix2fv(this.addr, !1, e), ut(t, e)
        } else {
            if (ct(t, n)) return;
            ds.set(n), i.uniformMatrix2fv(this.addr, !1, ds), ut(t, n)
        }
    }

    function Gl(i, e) {
        const t = this.cache,
            n = e.elements;
        if (n === void 0) {
            if (ct(t, e)) return;
            i.uniformMatrix3fv(this.addr, !1, e), ut(t, e)
        } else {
            if (ct(t, n)) return;
            hs.set(n), i.uniformMatrix3fv(this.addr, !1, hs), ut(t, n)
        }
    }

    function Hl(i, e) {
        const t = this.cache,
            n = e.elements;
        if (n === void 0) {
            if (ct(t, e)) return;
            i.uniformMatrix4fv(this.addr, !1, e), ut(t, e)
        } else {
            if (ct(t, n)) return;
            us.set(n), i.uniformMatrix4fv(this.addr, !1, us), ut(t, n)
        }
    }

    function Vl(i, e) {
        const t = this.cache;
        t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e)
    }

    function kl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
        else {
            if (ct(t, e)) return;
            i.uniform2iv(this.addr, e), ut(t, e)
        }
    }

    function Wl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
        else {
            if (ct(t, e)) return;
            i.uniform3iv(this.addr, e), ut(t, e)
        }
    }

    function Xl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
        else {
            if (ct(t, e)) return;
            i.uniform4iv(this.addr, e), ut(t, e)
        }
    }

    function ql(i, e) {
        const t = this.cache;
        t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e)
    }

    function Yl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
        else {
            if (ct(t, e)) return;
            i.uniform2uiv(this.addr, e), ut(t, e)
        }
    }

    function $l(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
        else {
            if (ct(t, e)) return;
            i.uniform3uiv(this.addr, e), ut(t, e)
        }
    }

    function Kl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
        else {
            if (ct(t, e)) return;
            i.uniform4uiv(this.addr, e), ut(t, e)
        }
    }

    function Zl(i, e, t) {
        const n = this.cache,
            r = t.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
        let s;
        this.type === i.SAMPLER_2D_SHADOW ? (rs.compareFunction = 515, s = rs) : s = is, t.setTexture2D(e || s, r)
    }

    function jl(i, e, t) {
        const n = this.cache,
            r = t.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || as, r)
    }

    function Jl(i, e, t) {
        const n = this.cache,
            r = t.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || os, r)
    }

    function Ql(i, e, t) {
        const n = this.cache,
            r = t.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || ss, r)
    }

    function ec(i) {
        switch (i) {
            case 5126:
                return Fl;
            case 35664:
                return Nl;
            case 35665:
                return Ol;
            case 35666:
                return Bl;
            case 35674:
                return zl;
            case 35675:
                return Gl;
            case 35676:
                return Hl;
            case 5124:
            case 35670:
                return Vl;
            case 35667:
            case 35671:
                return kl;
            case 35668:
            case 35672:
                return Wl;
            case 35669:
            case 35673:
                return Xl;
            case 5125:
                return ql;
            case 36294:
                return Yl;
            case 36295:
                return $l;
            case 36296:
                return Kl;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return Zl;
            case 35679:
            case 36299:
            case 36307:
                return jl;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return Jl;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return Ql
        }
    }

    function tc(i, e) {
        i.uniform1fv(this.addr, e)
    }

    function nc(i, e) {
        const t = Gn(e, this.size, 2);
        i.uniform2fv(this.addr, t)
    }

    function ic(i, e) {
        const t = Gn(e, this.size, 3);
        i.uniform3fv(this.addr, t)
    }

    function rc(i, e) {
        const t = Gn(e, this.size, 4);
        i.uniform4fv(this.addr, t)
    }

    function sc(i, e) {
        const t = Gn(e, this.size, 4);
        i.uniformMatrix2fv(this.addr, !1, t)
    }

    function ac(i, e) {
        const t = Gn(e, this.size, 9);
        i.uniformMatrix3fv(this.addr, !1, t)
    }

    function oc(i, e) {
        const t = Gn(e, this.size, 16);
        i.uniformMatrix4fv(this.addr, !1, t)
    }

    function lc(i, e) {
        i.uniform1iv(this.addr, e)
    }

    function cc(i, e) {
        i.uniform2iv(this.addr, e)
    }

    function uc(i, e) {
        i.uniform3iv(this.addr, e)
    }

    function hc(i, e) {
        i.uniform4iv(this.addr, e)
    }

    function dc(i, e) {
        i.uniform1uiv(this.addr, e)
    }

    function fc(i, e) {
        i.uniform2uiv(this.addr, e)
    }

    function pc(i, e) {
        i.uniform3uiv(this.addr, e)
    }

    function mc(i, e) {
        i.uniform4uiv(this.addr, e)
    }

    function _c(i, e, t) {
        const n = this.cache,
            r = e.length,
            s = Ri(t, r);
        ct(n, s) || (i.uniform1iv(this.addr, s), ut(n, s));
        for (let a = 0; a !== r; ++a) t.setTexture2D(e[a] || is, s[a])
    }

    function gc(i, e, t) {
        const n = this.cache,
            r = e.length,
            s = Ri(t, r);
        ct(n, s) || (i.uniform1iv(this.addr, s), ut(n, s));
        for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || as, s[a])
    }

    function vc(i, e, t) {
        const n = this.cache,
            r = e.length,
            s = Ri(t, r);
        ct(n, s) || (i.uniform1iv(this.addr, s), ut(n, s));
        for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || os, s[a])
    }

    function xc(i, e, t) {
        const n = this.cache,
            r = e.length,
            s = Ri(t, r);
        ct(n, s) || (i.uniform1iv(this.addr, s), ut(n, s));
        for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || ss, s[a])
    }

    function Sc(i) {
        switch (i) {
            case 5126:
                return tc;
            case 35664:
                return nc;
            case 35665:
                return ic;
            case 35666:
                return rc;
            case 35674:
                return sc;
            case 35675:
                return ac;
            case 35676:
                return oc;
            case 5124:
            case 35670:
                return lc;
            case 35667:
            case 35671:
                return cc;
            case 35668:
            case 35672:
                return uc;
            case 35669:
            case 35673:
                return hc;
            case 5125:
                return dc;
            case 36294:
                return fc;
            case 36295:
                return pc;
            case 36296:
                return mc;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return _c;
            case 35679:
            case 36299:
            case 36307:
                return gc;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return vc;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return xc
        }
    }
    class Mc {
        constructor(e, t, n) {
            this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = ec(t.type)
        }
    }
    class Ec {
        constructor(e, t, n) {
            this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Sc(t.type)
        }
    }
    class Tc {
        constructor(e) {
            this.id = e, this.seq = [], this.map = {}
        }
        setValue(e, t, n) {
            const r = this.seq;
            for (let s = 0, a = r.length; s !== a; ++s) {
                const o = r[s];
                o.setValue(e, t[o.id], n)
            }
        }
    }
    const pr = /(\w+)(\])?(\[|\.)?/g;

    function fs(i, e) {
        i.seq.push(e), i.map[e.id] = e
    }

    function yc(i, e, t) {
        const n = i.name,
            r = n.length;
        for (pr.lastIndex = 0;;) {
            const s = pr.exec(n),
                a = pr.lastIndex;
            let o = s[1];
            const l = s[2] === "]",
                c = s[3];
            if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
                fs(t, c === void 0 ? new Mc(o, i, e) : new Ec(o, i, e));
                break
            } else {
                let f = t.map[o];
                f === void 0 && (f = new Tc(o), fs(t, f)), t = f
            }
        }
    }
    class bi {
        constructor(e, t) {
            this.seq = [], this.map = {};
            const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
            for (let r = 0; r < n; ++r) {
                const s = e.getActiveUniform(t, r),
                    a = e.getUniformLocation(t, s.name);
                yc(s, a, this)
            }
        }
        setValue(e, t, n, r) {
            const s = this.map[t];
            s !== void 0 && s.setValue(e, n, r)
        }
        setOptional(e, t, n) {
            const r = t[n];
            r !== void 0 && this.setValue(e, n, r)
        }
        static upload(e, t, n, r) {
            for (let s = 0, a = t.length; s !== a; ++s) {
                const o = t[s],
                    l = n[o.id];
                l.needsUpdate !== !1 && o.setValue(e, l.value, r)
            }
        }
        static seqWithValue(e, t) {
            const n = [];
            for (let r = 0, s = e.length; r !== s; ++r) {
                const a = e[r];
                a.id in t && n.push(a)
            }
            return n
        }
    }

    function ps(i, e, t) {
        const n = i.createShader(e);
        return i.shaderSource(n, t), i.compileShader(n), n
    }
    const Ac = 37297;
    let Rc = 0;

    function bc(i, e) {
        const t = i.split(`
`),
            n = [],
            r = Math.max(e - 6, 0),
            s = Math.min(e + 6, t.length);
        for (let a = r; a < s; a++) {
            const o = a + 1;
            n.push(`${o===e?">":" "} ${o}: ${t[a]}`)
        }
        return n.join(`
`)
    }
    const ms = new Ue;

    function Cc(i) {
        ze._getMatrix(ms, ze.workingColorSpace, i);
        const e = `mat3( ${ms.elements.map(t=>t.toFixed(4))} )`;
        switch (ze.getTransfer(i)) {
            case ri:
                return [e, "LinearTransferOETF"];
            case $e:
                return [e, "sRGBTransferOETF"];
            default:
                return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"]
        }
    }

    function _s(i, e, t) {
        const n = i.getShaderParameter(e, i.COMPILE_STATUS),
            r = i.getShaderInfoLog(e).trim();
        if (n && r === "") return "";
        const s = /ERROR: 0:(\d+)/.exec(r);
        if (s) {
            const a = parseInt(s[1]);
            return t.toUpperCase() + `

` + r + `

` + bc(i.getShaderSource(e), a)
        } else return r
    }

    function wc(i, e) {
        const t = Cc(e);
        return [`vec4 ${i}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`)
    }

    function Pc(i, e) {
        let t;
        switch (e) {
            case 1:
                t = "Linear";
                break;
            case 2:
                t = "Reinhard";
                break;
            case 3:
                t = "Cineon";
                break;
            case 4:
                t = "ACESFilmic";
                break;
            case 6:
                t = "AgX";
                break;
            case 7:
                t = "Neutral";
                break;
            case 5:
                t = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear"
        }
        return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
    }
    const Ci = new B;

    function Dc() {
        ze.getLuminanceCoefficients(Ci);
        const i = Ci.x.toFixed(4),
            e = Ci.y.toFixed(4),
            t = Ci.z.toFixed(4);
        return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`)
    }

    function Lc(i) {
        return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(ti).join(`
`)
    }

    function Ic(i) {
        const e = [];
        for (const t in i) {
            const n = i[t];
            n !== !1 && e.push("#define " + t + " " + n)
        }
        return e.join(`
`)
    }

    function Uc(i, e) {
        const t = {},
            n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
        for (let r = 0; r < n; r++) {
            const s = i.getActiveAttrib(e, r),
                a = s.name;
            let o = 1;
            s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), t[a] = {
                type: s.type,
                location: i.getAttribLocation(e, a),
                locationSize: o
            }
        }
        return t
    }

    function ti(i) {
        return i !== ""
    }

    function gs(i, e) {
        const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
        return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
    }

    function vs(i, e) {
        return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
    }
    const Fc = /^[ \t]*#include +<([\w\d./]+)>/gm;

    function mr(i) {
        return i.replace(Fc, Oc)
    }
    const Nc = new Map;

    function Oc(i, e) {
        let t = Ie[e];
        if (t === void 0) {
            const n = Nc.get(e);
            if (n !== void 0) t = Ie[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
            else throw new Error("Can not resolve #include <" + e + ">")
        }
        return mr(t)
    }
    const Bc = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

    function xs(i) {
        return i.replace(Bc, zc)
    }

    function zc(i, e, t, n) {
        let r = "";
        for (let s = parseInt(e); s < parseInt(t); s++) r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
        return r
    }

    function Ss(i) {
        let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
        return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
    }

    function Gc(i) {
        let e = "SHADOWMAP_TYPE_BASIC";
        return i.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e
    }

    function Hc(i) {
        let e = "ENVMAP_TYPE_CUBE";
        if (i.envMap) switch (i.envMapMode) {
            case 301:
            case 302:
                e = "ENVMAP_TYPE_CUBE";
                break;
            case 306:
                e = "ENVMAP_TYPE_CUBE_UV";
                break
        }
        return e
    }

    function Vc(i) {
        let e = "ENVMAP_MODE_REFLECTION";
        if (i.envMap) switch (i.envMapMode) {
            case 302:
                e = "ENVMAP_MODE_REFRACTION";
                break
        }
        return e
    }

    function kc(i) {
        let e = "ENVMAP_BLENDING_NONE";
        if (i.envMap) switch (i.combine) {
            case 0:
                e = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case 1:
                e = "ENVMAP_BLENDING_MIX";
                break;
            case 2:
                e = "ENVMAP_BLENDING_ADD";
                break
        }
        return e
    }

    function Wc(i) {
        const e = i.envMapCubeUVHeight;
        if (e === null) return null;
        const t = Math.log2(e) - 2,
            n = 1 / e;
        return {
            texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
            texelHeight: n,
            maxMip: t
        }
    }

    function Xc(i, e, t, n) {
        const r = i.getContext(),
            s = t.defines;
        let a = t.vertexShader,
            o = t.fragmentShader;
        const l = Gc(t),
            c = Hc(t),
            d = Vc(t),
            f = kc(t),
            h = Wc(t),
            m = Lc(t),
            v = Ic(s),
            S = r.createProgram();
        let p, u, A = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
        t.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v].filter(ti).join(`
`), p.length > 0 && (p += `
`), u = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v].filter(ti).join(`
`), u.length > 0 && (u += `
`)) : (p = [Ss(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + d : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(ti).join(`
`), u = [Ss(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + d : "", t.envMap ? "#define " + f : "", h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "", h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "", h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== 0 ? "#define TONE_MAPPING" : "", t.toneMapping !== 0 ? Ie.tonemapping_pars_fragment : "", t.toneMapping !== 0 ? Pc("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ie.colorspace_pars_fragment, wc("linearToOutputTexel", t.outputColorSpace), Dc(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(ti).join(`
`)), a = mr(a), a = gs(a, t), a = vs(a, t), o = mr(o), o = gs(o, t), o = vs(o, t), a = xs(a), o = xs(o), t.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, u = ["#define varying in", t.glslVersion === vr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === vr ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + u);
        const y = A + p + a,
            M = A + u + o,
            I = ps(r, r.VERTEX_SHADER, y),
            w = ps(r, r.FRAGMENT_SHADER, M);
        r.attachShader(S, I), r.attachShader(S, w), t.index0AttributeName !== void 0 ? r.bindAttribLocation(S, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(S, 0, "position"), r.linkProgram(S);

        function C(P) {
            if (i.debug.checkShaderErrors) {
                const q = r.getProgramInfoLog(S).trim(),
                    z = r.getShaderInfoLog(I).trim(),
                    W = r.getShaderInfoLog(w).trim();
                let j = !0,
                    V = !0;
                if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
                    if (j = !1, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, S, I, w);
                    else {
                        const ee = _s(r, I, "vertex"),
                            G = _s(r, w, "fragment");
                        console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(S, r.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + q + `
` + ee + `
` + G)
                    }
                else q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (z === "" || W === "") && (V = !1);
                V && (P.diagnostics = {
                    runnable: j,
                    programLog: q,
                    vertexShader: {
                        log: z,
                        prefix: p
                    },
                    fragmentShader: {
                        log: W,
                        prefix: u
                    }
                })
            }
            r.deleteShader(I), r.deleteShader(w), U = new bi(r, S), E = Uc(r, S)
        }
        let U;
        this.getUniforms = function() {
            return U === void 0 && C(this), U
        };
        let E;
        this.getAttributes = function() {
            return E === void 0 && C(this), E
        };
        let x = t.rendererExtensionParallelShaderCompile === !1;
        return this.isReady = function() {
            return x === !1 && (x = r.getProgramParameter(S, Ac)), x
        }, this.destroy = function() {
            n.releaseStatesOfProgram(this), r.deleteProgram(S), this.program = void 0
        }, this.type = t.shaderType, this.name = t.shaderName, this.id = Rc++, this.cacheKey = e, this.usedTimes = 1, this.program = S, this.vertexShader = I, this.fragmentShader = w, this
    }
    let qc = 0;
    class Yc {
        constructor() {
            this.shaderCache = new Map, this.materialCache = new Map
        }
        update(e) {
            const t = e.vertexShader,
                n = e.fragmentShader,
                r = this._getShaderStage(t),
                s = this._getShaderStage(n),
                a = this._getShaderCacheForMaterial(e);
            return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this
        }
        remove(e) {
            const t = this.materialCache.get(e);
            for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
            return this.materialCache.delete(e), this
        }
        getVertexShaderID(e) {
            return this._getShaderStage(e.vertexShader).id
        }
        getFragmentShaderID(e) {
            return this._getShaderStage(e.fragmentShader).id
        }
        dispose() {
            this.shaderCache.clear(), this.materialCache.clear()
        }
        _getShaderCacheForMaterial(e) {
            const t = this.materialCache;
            let n = t.get(e);
            return n === void 0 && (n = new Set, t.set(e, n)), n
        }
        _getShaderStage(e) {
            const t = this.shaderCache;
            let n = t.get(e);
            return n === void 0 && (n = new $c(e), t.set(e, n)), n
        }
    }
    class $c {
        constructor(e) {
            this.id = qc++, this.code = e, this.usedTimes = 0
        }
    }

    function Kc(i, e, t, n, r, s, a) {
        const o = new br,
            l = new Yc,
            c = new Set,
            d = [],
            f = r.logarithmicDepthBuffer,
            h = r.vertexTextures;
        let m = r.precision;
        const v = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        };

        function S(E) {
            return c.add(E), E === 0 ? "uv" : `uv${E}`
        }

        function p(E, x, P, q, z) {
            const W = q.fog,
                j = z.geometry,
                V = E.isMeshStandardMaterial ? q.environment : null,
                ee = (E.isMeshStandardMaterial ? t : e).get(E.envMap || V),
                G = ee && ee.mapping === 306 ? ee.image.height : null,
                oe = v[E.type];
            E.precision !== null && (m = r.getMaxPrecision(E.precision), m !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", m, "instead."));
            const de = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color,
                Te = de !== void 0 ? de.length : 0;
            let Ne = 0;
            j.morphAttributes.position !== void 0 && (Ne = 1), j.morphAttributes.normal !== void 0 && (Ne = 2), j.morphAttributes.color !== void 0 && (Ne = 3);
            let je, X, te, Se;
            if (oe) {
                const qe = zt[oe];
                je = qe.vertexShader, X = qe.fragmentShader
            } else je = E.vertexShader, X = E.fragmentShader, l.update(E), te = l.getVertexShaderID(E), Se = l.getFragmentShaderID(E);
            const le = i.getRenderTarget(),
                Me = i.state.buffers.depth.getReversed(),
                Ve = z.isInstancedMesh === !0,
                Ce = z.isBatchedMesh === !0,
                tt = !!E.map,
                nt = !!E.matcap,
                ke = !!ee,
                R = !!E.aoMap,
                vt = !!E.lightMap,
                We = !!E.bumpMap,
                Je = !!E.normalMap,
                ge = !!E.displacementMap,
                Ge = !!E.emissiveMap,
                ye = !!E.metalnessMap,
                Fe = !!E.roughnessMap,
                ht = E.anisotropy > 0,
                T = E.clearcoat > 0,
                _ = E.dispersion > 0,
                F = E.iridescence > 0,
                k = E.sheen > 0,
                $ = E.transmission > 0,
                H = ht && !!E.anisotropyMap,
                ve = T && !!E.clearcoatMap,
                re = T && !!E.clearcoatNormalMap,
                _e = T && !!E.clearcoatRoughnessMap,
                xe = F && !!E.iridescenceMap,
                K = F && !!E.iridescenceThicknessMap,
                ue = k && !!E.sheenColorMap,
                be = k && !!E.sheenRoughnessMap,
                Re = !!E.specularMap,
                ie = !!E.specularColorMap,
                De = !!E.specularIntensityMap,
                b = $ && !!E.transmissionMap,
                se = $ && !!E.thicknessMap,
                Z = !!E.gradientMap,
                fe = !!E.alphaMap,
                J = E.alphaTest > 0,
                Y = !!E.alphaHash,
                pe = !!E.extensions;
            let Le = 0;
            E.toneMapped && (le === null || le.isXRRenderTarget === !0) && (Le = i.toneMapping);
            const Qe = {
                shaderID: oe,
                shaderType: E.type,
                shaderName: E.name,
                vertexShader: je,
                fragmentShader: X,
                defines: E.defines,
                customVertexShaderID: te,
                customFragmentShaderID: Se,
                isRawShaderMaterial: E.isRawShaderMaterial === !0,
                glslVersion: E.glslVersion,
                precision: m,
                batching: Ce,
                batchingColor: Ce && z._colorsTexture !== null,
                instancing: Ve,
                instancingColor: Ve && z.instanceColor !== null,
                instancingMorph: Ve && z.morphTexture !== null,
                supportsVertexTextures: h,
                outputColorSpace: le === null ? i.outputColorSpace : le.isXRRenderTarget === !0 ? le.texture.colorSpace : Mn,
                alphaToCoverage: !!E.alphaToCoverage,
                map: tt,
                matcap: nt,
                envMap: ke,
                envMapMode: ke && ee.mapping,
                envMapCubeUVHeight: G,
                aoMap: R,
                lightMap: vt,
                bumpMap: We,
                normalMap: Je,
                displacementMap: h && ge,
                emissiveMap: Ge,
                normalMapObjectSpace: Je && E.normalMapType === 1,
                normalMapTangentSpace: Je && E.normalMapType === 0,
                metalnessMap: ye,
                roughnessMap: Fe,
                anisotropy: ht,
                anisotropyMap: H,
                clearcoat: T,
                clearcoatMap: ve,
                clearcoatNormalMap: re,
                clearcoatRoughnessMap: _e,
                dispersion: _,
                iridescence: F,
                iridescenceMap: xe,
                iridescenceThicknessMap: K,
                sheen: k,
                sheenColorMap: ue,
                sheenRoughnessMap: be,
                specularMap: Re,
                specularColorMap: ie,
                specularIntensityMap: De,
                transmission: $,
                transmissionMap: b,
                thicknessMap: se,
                gradientMap: Z,
                opaque: E.transparent === !1 && E.blending === 1 && E.alphaToCoverage === !1,
                alphaMap: fe,
                alphaTest: J,
                alphaHash: Y,
                combine: E.combine,
                mapUv: tt && S(E.map.channel),
                aoMapUv: R && S(E.aoMap.channel),
                lightMapUv: vt && S(E.lightMap.channel),
                bumpMapUv: We && S(E.bumpMap.channel),
                normalMapUv: Je && S(E.normalMap.channel),
                displacementMapUv: ge && S(E.displacementMap.channel),
                emissiveMapUv: Ge && S(E.emissiveMap.channel),
                metalnessMapUv: ye && S(E.metalnessMap.channel),
                roughnessMapUv: Fe && S(E.roughnessMap.channel),
                anisotropyMapUv: H && S(E.anisotropyMap.channel),
                clearcoatMapUv: ve && S(E.clearcoatMap.channel),
                clearcoatNormalMapUv: re && S(E.clearcoatNormalMap.channel),
                clearcoatRoughnessMapUv: _e && S(E.clearcoatRoughnessMap.channel),
                iridescenceMapUv: xe && S(E.iridescenceMap.channel),
                iridescenceThicknessMapUv: K && S(E.iridescenceThicknessMap.channel),
                sheenColorMapUv: ue && S(E.sheenColorMap.channel),
                sheenRoughnessMapUv: be && S(E.sheenRoughnessMap.channel),
                specularMapUv: Re && S(E.specularMap.channel),
                specularColorMapUv: ie && S(E.specularColorMap.channel),
                specularIntensityMapUv: De && S(E.specularIntensityMap.channel),
                transmissionMapUv: b && S(E.transmissionMap.channel),
                thicknessMapUv: se && S(E.thicknessMap.channel),
                alphaMapUv: fe && S(E.alphaMap.channel),
                vertexTangents: !!j.attributes.tangent && (Je || ht),
                vertexColors: E.vertexColors,
                vertexAlphas: E.vertexColors === !0 && !!j.attributes.color && j.attributes.color.itemSize === 4,
                pointsUvs: z.isPoints === !0 && !!j.attributes.uv && (tt || fe),
                fog: !!W,
                useFog: E.fog === !0,
                fogExp2: !!W && W.isFogExp2,
                flatShading: E.flatShading === !0,
                sizeAttenuation: E.sizeAttenuation === !0,
                logarithmicDepthBuffer: f,
                reverseDepthBuffer: Me,
                skinning: z.isSkinnedMesh === !0,
                morphTargets: j.morphAttributes.position !== void 0,
                morphNormals: j.morphAttributes.normal !== void 0,
                morphColors: j.morphAttributes.color !== void 0,
                morphTargetsCount: Te,
                morphTextureStride: Ne,
                numDirLights: x.directional.length,
                numPointLights: x.point.length,
                numSpotLights: x.spot.length,
                numSpotLightMaps: x.spotLightMap.length,
                numRectAreaLights: x.rectArea.length,
                numHemiLights: x.hemi.length,
                numDirLightShadows: x.directionalShadowMap.length,
                numPointLightShadows: x.pointShadowMap.length,
                numSpotLightShadows: x.spotShadowMap.length,
                numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps,
                numLightProbes: x.numLightProbes,
                numClippingPlanes: a.numPlanes,
                numClipIntersection: a.numIntersection,
                dithering: E.dithering,
                shadowMapEnabled: i.shadowMap.enabled && P.length > 0,
                shadowMapType: i.shadowMap.type,
                toneMapping: Le,
                decodeVideoTexture: tt && E.map.isVideoTexture === !0 && ze.getTransfer(E.map.colorSpace) === $e,
                decodeVideoTextureEmissive: Ge && E.emissiveMap.isVideoTexture === !0 && ze.getTransfer(E.emissiveMap.colorSpace) === $e,
                premultipliedAlpha: E.premultipliedAlpha,
                doubleSided: E.side === 2,
                flipSided: E.side === 1,
                useDepthPacking: E.depthPacking >= 0,
                depthPacking: E.depthPacking || 0,
                index0AttributeName: E.index0AttributeName,
                extensionClipCullDistance: pe && E.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
                extensionMultiDraw: (pe && E.extensions.multiDraw === !0 || Ce) && n.has("WEBGL_multi_draw"),
                rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
                customProgramCacheKey: E.customProgramCacheKey()
            };
            return Qe.vertexUv1s = c.has(1), Qe.vertexUv2s = c.has(2), Qe.vertexUv3s = c.has(3), c.clear(), Qe
        }

        function u(E) {
            const x = [];
            if (E.shaderID ? x.push(E.shaderID) : (x.push(E.customVertexShaderID), x.push(E.customFragmentShaderID)), E.defines !== void 0)
                for (const P in E.defines) x.push(P), x.push(E.defines[P]);
            return E.isRawShaderMaterial === !1 && (A(x, E), y(x, E), x.push(i.outputColorSpace)), x.push(E.customProgramCacheKey), x.join()
        }

        function A(E, x) {
            E.push(x.precision), E.push(x.outputColorSpace), E.push(x.envMapMode), E.push(x.envMapCubeUVHeight), E.push(x.mapUv), E.push(x.alphaMapUv), E.push(x.lightMapUv), E.push(x.aoMapUv), E.push(x.bumpMapUv), E.push(x.normalMapUv), E.push(x.displacementMapUv), E.push(x.emissiveMapUv), E.push(x.metalnessMapUv), E.push(x.roughnessMapUv), E.push(x.anisotropyMapUv), E.push(x.clearcoatMapUv), E.push(x.clearcoatNormalMapUv), E.push(x.clearcoatRoughnessMapUv), E.push(x.iridescenceMapUv), E.push(x.iridescenceThicknessMapUv), E.push(x.sheenColorMapUv), E.push(x.sheenRoughnessMapUv), E.push(x.specularMapUv), E.push(x.specularColorMapUv), E.push(x.specularIntensityMapUv), E.push(x.transmissionMapUv), E.push(x.thicknessMapUv), E.push(x.combine), E.push(x.fogExp2), E.push(x.sizeAttenuation), E.push(x.morphTargetsCount), E.push(x.morphAttributeCount), E.push(x.numDirLights), E.push(x.numPointLights), E.push(x.numSpotLights), E.push(x.numSpotLightMaps), E.push(x.numHemiLights), E.push(x.numRectAreaLights), E.push(x.numDirLightShadows), E.push(x.numPointLightShadows), E.push(x.numSpotLightShadows), E.push(x.numSpotLightShadowsWithMaps), E.push(x.numLightProbes), E.push(x.shadowMapType), E.push(x.toneMapping), E.push(x.numClippingPlanes), E.push(x.numClipIntersection), E.push(x.depthPacking)
        }

        function y(E, x) {
            o.disableAll(), x.supportsVertexTextures && o.enable(0), x.instancing && o.enable(1), x.instancingColor && o.enable(2), x.instancingMorph && o.enable(3), x.matcap && o.enable(4), x.envMap && o.enable(5), x.normalMapObjectSpace && o.enable(6), x.normalMapTangentSpace && o.enable(7), x.clearcoat && o.enable(8), x.iridescence && o.enable(9), x.alphaTest && o.enable(10), x.vertexColors && o.enable(11), x.vertexAlphas && o.enable(12), x.vertexUv1s && o.enable(13), x.vertexUv2s && o.enable(14), x.vertexUv3s && o.enable(15), x.vertexTangents && o.enable(16), x.anisotropy && o.enable(17), x.alphaHash && o.enable(18), x.batching && o.enable(19), x.dispersion && o.enable(20), x.batchingColor && o.enable(21), E.push(o.mask), o.disableAll(), x.fog && o.enable(0), x.useFog && o.enable(1), x.flatShading && o.enable(2), x.logarithmicDepthBuffer && o.enable(3), x.reverseDepthBuffer && o.enable(4), x.skinning && o.enable(5), x.morphTargets && o.enable(6), x.morphNormals && o.enable(7), x.morphColors && o.enable(8), x.premultipliedAlpha && o.enable(9), x.shadowMapEnabled && o.enable(10), x.doubleSided && o.enable(11), x.flipSided && o.enable(12), x.useDepthPacking && o.enable(13), x.dithering && o.enable(14), x.transmission && o.enable(15), x.sheen && o.enable(16), x.opaque && o.enable(17), x.pointsUvs && o.enable(18), x.decodeVideoTexture && o.enable(19), x.decodeVideoTextureEmissive && o.enable(20), x.alphaToCoverage && o.enable(21), E.push(o.mask)
        }

        function M(E) {
            const x = v[E.type];
            let P;
            if (x) {
                const q = zt[x];
                P = ia.clone(q.uniforms)
            } else P = E.uniforms;
            return P
        }

        function I(E, x) {
            let P;
            for (let q = 0, z = d.length; q < z; q++) {
                const W = d[q];
                if (W.cacheKey === x) {
                    P = W, ++P.usedTimes;
                    break
                }
            }
            return P === void 0 && (P = new Xc(i, x, E, s), d.push(P)), P
        }

        function w(E) {
            if (--E.usedTimes === 0) {
                const x = d.indexOf(E);
                d[x] = d[d.length - 1], d.pop(), E.destroy()
            }
        }

        function C(E) {
            l.remove(E)
        }

        function U() {
            l.dispose()
        }
        return {
            getParameters: p,
            getProgramCacheKey: u,
            getUniforms: M,
            acquireProgram: I,
            releaseProgram: w,
            releaseShaderCache: C,
            programs: d,
            dispose: U
        }
    }

    function Zc() {
        let i = new WeakMap;

        function e(a) {
            return i.has(a)
        }

        function t(a) {
            let o = i.get(a);
            return o === void 0 && (o = {}, i.set(a, o)), o
        }

        function n(a) {
            i.delete(a)
        }

        function r(a, o, l) {
            i.get(a)[o] = l
        }

        function s() {
            i = new WeakMap
        }
        return {
            has: e,
            get: t,
            remove: n,
            update: r,
            dispose: s
        }
    }

    function jc(i, e) {
        return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id
    }

    function Ms(i, e) {
        return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id
    }

    function Es() {
        const i = [];
        let e = 0;
        const t = [],
            n = [],
            r = [];

        function s() {
            e = 0, t.length = 0, n.length = 0, r.length = 0
        }

        function a(f, h, m, v, S, p) {
            let u = i[e];
            return u === void 0 ? (u = {
                id: f.id,
                object: f,
                geometry: h,
                material: m,
                groupOrder: v,
                renderOrder: f.renderOrder,
                z: S,
                group: p
            }, i[e] = u) : (u.id = f.id, u.object = f, u.geometry = h, u.material = m, u.groupOrder = v, u.renderOrder = f.renderOrder, u.z = S, u.group = p), e++, u
        }

        function o(f, h, m, v, S, p) {
            const u = a(f, h, m, v, S, p);
            m.transmission > 0 ? n.push(u) : m.transparent === !0 ? r.push(u) : t.push(u)
        }

        function l(f, h, m, v, S, p) {
            const u = a(f, h, m, v, S, p);
            m.transmission > 0 ? n.unshift(u) : m.transparent === !0 ? r.unshift(u) : t.unshift(u)
        }

        function c(f, h) {
            t.length > 1 && t.sort(f || jc), n.length > 1 && n.sort(h || Ms), r.length > 1 && r.sort(h || Ms)
        }

        function d() {
            for (let f = e, h = i.length; f < h; f++) {
                const m = i[f];
                if (m.id === null) break;
                m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null
            }
        }
        return {
            opaque: t,
            transmissive: n,
            transparent: r,
            init: s,
            push: o,
            unshift: l,
            finish: d,
            sort: c
        }
    }

    function Jc() {
        let i = new WeakMap;

        function e(n, r) {
            const s = i.get(n);
            let a;
            return s === void 0 ? (a = new Es, i.set(n, [a])) : r >= s.length ? (a = new Es, s.push(a)) : a = s[r], a
        }

        function t() {
            i = new WeakMap
        }
        return {
            get: e,
            dispose: t
        }
    }

    function Qc() {
        const i = {};
        return {
            get: function(e) {
                if (i[e.id] !== void 0) return i[e.id];
                let t;
                switch (e.type) {
                    case "DirectionalLight":
                        t = {
                            direction: new B,
                            color: new Ke
                        };
                        break;
                    case "SpotLight":
                        t = {
                            position: new B,
                            direction: new B,
                            color: new Ke,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        t = {
                            position: new B,
                            color: new Ke,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        t = {
                            direction: new B,
                            skyColor: new Ke,
                            groundColor: new Ke
                        };
                        break;
                    case "RectAreaLight":
                        t = {
                            color: new Ke,
                            position: new B,
                            halfWidth: new B,
                            halfHeight: new B
                        };
                        break
                }
                return i[e.id] = t, t
            }
        }
    }

    function eu() {
        const i = {};
        return {
            get: function(e) {
                if (i[e.id] !== void 0) return i[e.id];
                let t;
                switch (e.type) {
                    case "DirectionalLight":
                        t = {
                            shadowIntensity: 1,
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new Ze
                        };
                        break;
                    case "SpotLight":
                        t = {
                            shadowIntensity: 1,
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new Ze
                        };
                        break;
                    case "PointLight":
                        t = {
                            shadowIntensity: 1,
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new Ze,
                            shadowCameraNear: 1,
                            shadowCameraFar: 1e3
                        };
                        break
                }
                return i[e.id] = t, t
            }
        }
    }
    let tu = 0;

    function nu(i, e) {
        return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0)
    }

    function iu(i) {
        const e = new Qc,
            t = eu(),
            n = {
                version: 0,
                hash: {
                    directionalLength: -1,
                    pointLength: -1,
                    spotLength: -1,
                    rectAreaLength: -1,
                    hemiLength: -1,
                    numDirectionalShadows: -1,
                    numPointShadows: -1,
                    numSpotShadows: -1,
                    numSpotMaps: -1,
                    numLightProbes: -1
                },
                ambient: [0, 0, 0],
                probe: [],
                directional: [],
                directionalShadow: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotLightMap: [],
                spotShadow: [],
                spotShadowMap: [],
                spotLightMatrix: [],
                rectArea: [],
                rectAreaLTC1: null,
                rectAreaLTC2: null,
                point: [],
                pointShadow: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: [],
                numSpotLightShadowsWithMaps: 0,
                numLightProbes: 0
            };
        for (let c = 0; c < 9; c++) n.probe.push(new B);
        const r = new B,
            s = new ot,
            a = new ot;

        function o(c) {
            let d = 0,
                f = 0,
                h = 0;
            for (let E = 0; E < 9; E++) n.probe[E].set(0, 0, 0);
            let m = 0,
                v = 0,
                S = 0,
                p = 0,
                u = 0,
                A = 0,
                y = 0,
                M = 0,
                I = 0,
                w = 0,
                C = 0;
            c.sort(nu);
            for (let E = 0, x = c.length; E < x; E++) {
                const P = c[E],
                    q = P.color,
                    z = P.intensity,
                    W = P.distance,
                    j = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
                if (P.isAmbientLight) d += q.r * z, f += q.g * z, h += q.b * z;
                else if (P.isLightProbe) {
                    for (let V = 0; V < 9; V++) n.probe[V].addScaledVector(P.sh.coefficients[V], z);
                    C++
                } else if (P.isDirectionalLight) {
                    const V = e.get(P);
                    if (V.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
                        const ee = P.shadow,
                            G = t.get(P);
                        G.shadowIntensity = ee.intensity, G.shadowBias = ee.bias, G.shadowNormalBias = ee.normalBias, G.shadowRadius = ee.radius, G.shadowMapSize = ee.mapSize, n.directionalShadow[m] = G, n.directionalShadowMap[m] = j, n.directionalShadowMatrix[m] = P.shadow.matrix, A++
                    }
                    n.directional[m] = V, m++
                } else if (P.isSpotLight) {
                    const V = e.get(P);
                    V.position.setFromMatrixPosition(P.matrixWorld), V.color.copy(q).multiplyScalar(z), V.distance = W, V.coneCos = Math.cos(P.angle), V.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), V.decay = P.decay, n.spot[S] = V;
                    const ee = P.shadow;
                    if (P.map && (n.spotLightMap[I] = P.map, I++, ee.updateMatrices(P), P.castShadow && w++), n.spotLightMatrix[S] = ee.matrix, P.castShadow) {
                        const G = t.get(P);
                        G.shadowIntensity = ee.intensity, G.shadowBias = ee.bias, G.shadowNormalBias = ee.normalBias, G.shadowRadius = ee.radius, G.shadowMapSize = ee.mapSize, n.spotShadow[S] = G, n.spotShadowMap[S] = j, M++
                    }
                    S++
                } else if (P.isRectAreaLight) {
                    const V = e.get(P);
                    V.color.copy(q).multiplyScalar(z), V.halfWidth.set(P.width * .5, 0, 0), V.halfHeight.set(0, P.height * .5, 0), n.rectArea[p] = V, p++
                } else if (P.isPointLight) {
                    const V = e.get(P);
                    if (V.color.copy(P.color).multiplyScalar(P.intensity), V.distance = P.distance, V.decay = P.decay, P.castShadow) {
                        const ee = P.shadow,
                            G = t.get(P);
                        G.shadowIntensity = ee.intensity, G.shadowBias = ee.bias, G.shadowNormalBias = ee.normalBias, G.shadowRadius = ee.radius, G.shadowMapSize = ee.mapSize, G.shadowCameraNear = ee.camera.near, G.shadowCameraFar = ee.camera.far, n.pointShadow[v] = G, n.pointShadowMap[v] = j, n.pointShadowMatrix[v] = P.shadow.matrix, y++
                    }
                    n.point[v] = V, v++
                } else if (P.isHemisphereLight) {
                    const V = e.get(P);
                    V.skyColor.copy(P.color).multiplyScalar(z), V.groundColor.copy(P.groundColor).multiplyScalar(z), n.hemi[u] = V, u++
                }
            }
            p > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ne.LTC_FLOAT_1, n.rectAreaLTC2 = ne.LTC_FLOAT_2) : (n.rectAreaLTC1 = ne.LTC_HALF_1, n.rectAreaLTC2 = ne.LTC_HALF_2)), n.ambient[0] = d, n.ambient[1] = f, n.ambient[2] = h;
            const U = n.hash;
            (U.directionalLength !== m || U.pointLength !== v || U.spotLength !== S || U.rectAreaLength !== p || U.hemiLength !== u || U.numDirectionalShadows !== A || U.numPointShadows !== y || U.numSpotShadows !== M || U.numSpotMaps !== I || U.numLightProbes !== C) && (n.directional.length = m, n.spot.length = S, n.rectArea.length = p, n.point.length = v, n.hemi.length = u, n.directionalShadow.length = A, n.directionalShadowMap.length = A, n.pointShadow.length = y, n.pointShadowMap.length = y, n.spotShadow.length = M, n.spotShadowMap.length = M, n.directionalShadowMatrix.length = A, n.pointShadowMatrix.length = y, n.spotLightMatrix.length = M + I - w, n.spotLightMap.length = I, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = C, U.directionalLength = m, U.pointLength = v, U.spotLength = S, U.rectAreaLength = p, U.hemiLength = u, U.numDirectionalShadows = A, U.numPointShadows = y, U.numSpotShadows = M, U.numSpotMaps = I, U.numLightProbes = C, n.version = tu++)
        }

        function l(c, d) {
            let f = 0,
                h = 0,
                m = 0,
                v = 0,
                S = 0;
            const p = d.matrixWorldInverse;
            for (let u = 0, A = c.length; u < A; u++) {
                const y = c[u];
                if (y.isDirectionalLight) {
                    const M = n.directional[f];
                    M.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), M.direction.sub(r), M.direction.transformDirection(p), f++
                } else if (y.isSpotLight) {
                    const M = n.spot[m];
                    M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(p), M.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), M.direction.sub(r), M.direction.transformDirection(p), m++
                } else if (y.isRectAreaLight) {
                    const M = n.rectArea[v];
                    M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(p), a.identity(), s.copy(y.matrixWorld), s.premultiply(p), a.extractRotation(s), M.halfWidth.set(y.width * .5, 0, 0), M.halfHeight.set(0, y.height * .5, 0), M.halfWidth.applyMatrix4(a), M.halfHeight.applyMatrix4(a), v++
                } else if (y.isPointLight) {
                    const M = n.point[h];
                    M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(p), h++
                } else if (y.isHemisphereLight) {
                    const M = n.hemi[S];
                    M.direction.setFromMatrixPosition(y.matrixWorld), M.direction.transformDirection(p), S++
                }
            }
        }
        return {
            setup: o,
            setupView: l,
            state: n
        }
    }

    function Ts(i) {
        const e = new iu(i),
            t = [],
            n = [];

        function r(d) {
            c.camera = d, t.length = 0, n.length = 0
        }

        function s(d) {
            t.push(d)
        }

        function a(d) {
            n.push(d)
        }

        function o() {
            e.setup(t)
        }

        function l(d) {
            e.setupView(t, d)
        }
        const c = {
            lightsArray: t,
            shadowsArray: n,
            camera: null,
            lights: e,
            transmissionRenderTarget: {}
        };
        return {
            init: r,
            state: c,
            setupLights: o,
            setupLightsView: l,
            pushLight: s,
            pushShadow: a
        }
    }

    function ru(i) {
        let e = new WeakMap;

        function t(r, s = 0) {
            const a = e.get(r);
            let o;
            return a === void 0 ? (o = new Ts(i), e.set(r, [o])) : s >= a.length ? (o = new Ts(i), a.push(o)) : o = a[s], o
        }

        function n() {
            e = new WeakMap
        }
        return {
            get: t,
            dispose: n
        }
    }
    const su = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
        au = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;

    function ou(i, e, t) {
        let n = new Xr;
        const r = new Ze,
            s = new Ze,
            a = new at,
            o = new fa({
                depthPacking: 3201
            }),
            l = new pa,
            c = {},
            d = t.maxTextureSize,
            f = {
                0: 1,
                1: 0,
                2: 2
            },
            h = new tn({
                defines: {
                    VSM_SAMPLES: 8
                },
                uniforms: {
                    shadow_pass: {
                        value: null
                    },
                    resolution: {
                        value: new Ze
                    },
                    radius: {
                        value: 4
                    }
                },
                vertexShader: su,
                fragmentShader: au
            }),
            m = h.clone();
        m.defines.HORIZONTAL_PASS = 1;
        const v = new un;
        v.setAttribute("position", new Ot(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
        const S = new Bt(v, h),
            p = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
        let u = this.type;
        this.render = function(w, C, U) {
            if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || w.length === 0) return;
            const E = i.getRenderTarget(),
                x = i.getActiveCubeFace(),
                P = i.getActiveMipmapLevel(),
                q = i.state;
            q.setBlending(0), q.buffers.color.setClear(1, 1, 1, 1), q.buffers.depth.setTest(!0), q.setScissorTest(!1);
            const z = u !== 3 && this.type === 3,
                W = u === 3 && this.type !== 3;
            for (let j = 0, V = w.length; j < V; j++) {
                const ee = w[j],
                    G = ee.shadow;
                if (G === void 0) {
                    console.warn("THREE.WebGLShadowMap:", ee, "has no shadow.");
                    continue
                }
                if (G.autoUpdate === !1 && G.needsUpdate === !1) continue;
                r.copy(G.mapSize);
                const oe = G.getFrameExtents();
                if (r.multiply(oe), s.copy(G.mapSize), (r.x > d || r.y > d) && (r.x > d && (s.x = Math.floor(d / oe.x), r.x = s.x * oe.x, G.mapSize.x = s.x), r.y > d && (s.y = Math.floor(d / oe.y), r.y = s.y * oe.y, G.mapSize.y = s.y)), G.map === null || z === !0 || W === !0) {
                    const Te = this.type !== 3 ? {
                        minFilter: 1003,
                        magFilter: 1003
                    } : {};
                    G.map !== null && G.map.dispose(), G.map = new an(r.x, r.y, Te), G.map.texture.name = ee.name + ".shadowMap", G.camera.updateProjectionMatrix()
                }
                i.setRenderTarget(G.map), i.clear();
                const de = G.getViewportCount();
                for (let Te = 0; Te < de; Te++) {
                    const Ne = G.getViewport(Te);
                    a.set(s.x * Ne.x, s.y * Ne.y, s.x * Ne.z, s.y * Ne.w), q.viewport(a), G.updateMatrices(ee, Te), n = G.getFrustum(), M(C, U, G.camera, ee, this.type)
                }
                G.isPointLightShadow !== !0 && this.type === 3 && A(G, U), G.needsUpdate = !1
            }
            u = this.type, p.needsUpdate = !1, i.setRenderTarget(E, x, P)
        };

        function A(w, C) {
            const U = e.update(S);
            h.defines.VSM_SAMPLES !== w.blurSamples && (h.defines.VSM_SAMPLES = w.blurSamples, m.defines.VSM_SAMPLES = w.blurSamples, h.needsUpdate = !0, m.needsUpdate = !0), w.mapPass === null && (w.mapPass = new an(r.x, r.y)), h.uniforms.shadow_pass.value = w.map.texture, h.uniforms.resolution.value = w.mapSize, h.uniforms.radius.value = w.radius, i.setRenderTarget(w.mapPass), i.clear(), i.renderBufferDirect(C, null, U, h, S, null), m.uniforms.shadow_pass.value = w.mapPass.texture, m.uniforms.resolution.value = w.mapSize, m.uniforms.radius.value = w.radius, i.setRenderTarget(w.map), i.clear(), i.renderBufferDirect(C, null, U, m, S, null)
        }

        function y(w, C, U, E) {
            let x = null;
            const P = U.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
            if (P !== void 0) x = P;
            else if (x = U.isPointLight === !0 ? l : o, i.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === !0) {
                const q = x.uuid,
                    z = C.uuid;
                let W = c[q];
                W === void 0 && (W = {}, c[q] = W);
                let j = W[z];
                j === void 0 && (j = x.clone(), W[z] = j, C.addEventListener("dispose", I)), x = j
            }
            if (x.visible = C.visible, x.wireframe = C.wireframe, E === 3 ? x.side = C.shadowSide !== null ? C.shadowSide : C.side : x.side = C.shadowSide !== null ? C.shadowSide : f[C.side], x.alphaMap = C.alphaMap, x.alphaTest = C.alphaToCoverage === !0 ? .5 : C.alphaTest, x.map = C.map, x.clipShadows = C.clipShadows, x.clippingPlanes = C.clippingPlanes, x.clipIntersection = C.clipIntersection, x.displacementMap = C.displacementMap, x.displacementScale = C.displacementScale, x.displacementBias = C.displacementBias, x.wireframeLinewidth = C.wireframeLinewidth, x.linewidth = C.linewidth, U.isPointLight === !0 && x.isMeshDistanceMaterial === !0) {
                const q = i.properties.get(x);
                q.light = U
            }
            return x
        }

        function M(w, C, U, E, x) {
            if (w.visible === !1) return;
            if (w.layers.test(C.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && x === 3) && (!w.frustumCulled || n.intersectsObject(w))) {
                w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, w.matrixWorld);
                const z = e.update(w),
                    W = w.material;
                if (Array.isArray(W)) {
                    const j = z.groups;
                    for (let V = 0, ee = j.length; V < ee; V++) {
                        const G = j[V],
                            oe = W[G.materialIndex];
                        if (oe && oe.visible) {
                            const de = y(w, oe, E, x);
                            w.onBeforeShadow(i, w, C, U, z, de, G), i.renderBufferDirect(U, null, z, de, w, G), w.onAfterShadow(i, w, C, U, z, de, G)
                        }
                    }
                } else if (W.visible) {
                    const j = y(w, W, E, x);
                    w.onBeforeShadow(i, w, C, U, z, j, null), i.renderBufferDirect(U, null, z, j, w, null), w.onAfterShadow(i, w, C, U, z, j, null)
                }
            }
            const q = w.children;
            for (let z = 0, W = q.length; z < W; z++) M(q[z], C, U, E, x)
        }

        function I(w) {
            w.target.removeEventListener("dispose", I);
            for (const U in c) {
                const E = c[U],
                    x = w.target.uuid;
                x in E && (E[x].dispose(), delete E[x])
            }
        }
    }
    const lu = {
        0: 1,
        2: 6,
        4: 7,
        3: 5,
        1: 0,
        6: 2,
        7: 4,
        5: 3
    };

    function cu(i, e) {
        function t() {
            let b = !1;
            const se = new at;
            let Z = null;
            const fe = new at(0, 0, 0, 0);
            return {
                setMask: function(J) {
                    Z !== J && !b && (i.colorMask(J, J, J, J), Z = J)
                },
                setLocked: function(J) {
                    b = J
                },
                setClear: function(J, Y, pe, Le, Qe) {
                    Qe === !0 && (J *= Le, Y *= Le, pe *= Le), se.set(J, Y, pe, Le), fe.equals(se) === !1 && (i.clearColor(J, Y, pe, Le), fe.copy(se))
                },
                reset: function() {
                    b = !1, Z = null, fe.set(-1, 0, 0, 0)
                }
            }
        }

        function n() {
            let b = !1,
                se = !1,
                Z = null,
                fe = null,
                J = null;
            return {
                setReversed: function(Y) {
                    if (se !== Y) {
                        const pe = e.get("EXT_clip_control");
                        Y ? pe.clipControlEXT(pe.LOWER_LEFT_EXT, pe.ZERO_TO_ONE_EXT) : pe.clipControlEXT(pe.LOWER_LEFT_EXT, pe.NEGATIVE_ONE_TO_ONE_EXT), se = Y;
                        const Le = J;
                        J = null, this.setClear(Le)
                    }
                },
                getReversed: function() {
                    return se
                },
                setTest: function(Y) {
                    Y ? le(i.DEPTH_TEST) : Me(i.DEPTH_TEST)
                },
                setMask: function(Y) {
                    Z !== Y && !b && (i.depthMask(Y), Z = Y)
                },
                setFunc: function(Y) {
                    if (se && (Y = lu[Y]), fe !== Y) {
                        switch (Y) {
                            case 0:
                                i.depthFunc(i.NEVER);
                                break;
                            case 1:
                                i.depthFunc(i.ALWAYS);
                                break;
                            case 2:
                                i.depthFunc(i.LESS);
                                break;
                            case 3:
                                i.depthFunc(i.LEQUAL);
                                break;
                            case 4:
                                i.depthFunc(i.EQUAL);
                                break;
                            case 5:
                                i.depthFunc(i.GEQUAL);
                                break;
                            case 6:
                                i.depthFunc(i.GREATER);
                                break;
                            case 7:
                                i.depthFunc(i.NOTEQUAL);
                                break;
                            default:
                                i.depthFunc(i.LEQUAL)
                        }
                        fe = Y
                    }
                },
                setLocked: function(Y) {
                    b = Y
                },
                setClear: function(Y) {
                    J !== Y && (se && (Y = 1 - Y), i.clearDepth(Y), J = Y)
                },
                reset: function() {
                    b = !1, Z = null, fe = null, J = null, se = !1
                }
            }
        }

        function r() {
            let b = !1,
                se = null,
                Z = null,
                fe = null,
                J = null,
                Y = null,
                pe = null,
                Le = null,
                Qe = null;
            return {
                setTest: function(qe) {
                    b || (qe ? le(i.STENCIL_TEST) : Me(i.STENCIL_TEST))
                },
                setMask: function(qe) {
                    se !== qe && !b && (i.stencilMask(qe), se = qe)
                },
                setFunc: function(qe, Ft, $t) {
                    (Z !== qe || fe !== Ft || J !== $t) && (i.stencilFunc(qe, Ft, $t), Z = qe, fe = Ft, J = $t)
                },
                setOp: function(qe, Ft, $t) {
                    (Y !== qe || pe !== Ft || Le !== $t) && (i.stencilOp(qe, Ft, $t), Y = qe, pe = Ft, Le = $t)
                },
                setLocked: function(qe) {
                    b = qe
                },
                setClear: function(qe) {
                    Qe !== qe && (i.clearStencil(qe), Qe = qe)
                },
                reset: function() {
                    b = !1, se = null, Z = null, fe = null, J = null, Y = null, pe = null, Le = null, Qe = null
                }
            }
        }
        const s = new t,
            a = new n,
            o = new r,
            l = new WeakMap,
            c = new WeakMap;
        let d = {},
            f = {},
            h = new WeakMap,
            m = [],
            v = null,
            S = !1,
            p = null,
            u = null,
            A = null,
            y = null,
            M = null,
            I = null,
            w = null,
            C = new Ke(0, 0, 0),
            U = 0,
            E = !1,
            x = null,
            P = null,
            q = null,
            z = null,
            W = null;
        const j = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        let V = !1,
            ee = 0;
        const G = i.getParameter(i.VERSION);
        G.indexOf("WebGL") !== -1 ? (ee = parseFloat(/^WebGL (\d)/.exec(G)[1]), V = ee >= 1) : G.indexOf("OpenGL ES") !== -1 && (ee = parseFloat(/^OpenGL ES (\d)/.exec(G)[1]), V = ee >= 2);
        let oe = null,
            de = {};
        const Te = i.getParameter(i.SCISSOR_BOX),
            Ne = i.getParameter(i.VIEWPORT),
            je = new at().fromArray(Te),
            X = new at().fromArray(Ne);

        function te(b, se, Z, fe) {
            const J = new Uint8Array(4),
                Y = i.createTexture();
            i.bindTexture(b, Y), i.texParameteri(b, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(b, i.TEXTURE_MAG_FILTER, i.NEAREST);
            for (let pe = 0; pe < Z; pe++) b === i.TEXTURE_3D || b === i.TEXTURE_2D_ARRAY ? i.texImage3D(se, 0, i.RGBA, 1, 1, fe, 0, i.RGBA, i.UNSIGNED_BYTE, J) : i.texImage2D(se + pe, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, J);
            return Y
        }
        const Se = {};
        Se[i.TEXTURE_2D] = te(i.TEXTURE_2D, i.TEXTURE_2D, 1), Se[i.TEXTURE_CUBE_MAP] = te(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Se[i.TEXTURE_2D_ARRAY] = te(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Se[i.TEXTURE_3D] = te(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), le(i.DEPTH_TEST), a.setFunc(3), We(!1), Je(1), le(i.CULL_FACE), R(0);

        function le(b) {
            d[b] !== !0 && (i.enable(b), d[b] = !0)
        }

        function Me(b) {
            d[b] !== !1 && (i.disable(b), d[b] = !1)
        }

        function Ve(b, se) {
            return f[b] !== se ? (i.bindFramebuffer(b, se), f[b] = se, b === i.DRAW_FRAMEBUFFER && (f[i.FRAMEBUFFER] = se), b === i.FRAMEBUFFER && (f[i.DRAW_FRAMEBUFFER] = se), !0) : !1
        }

        function Ce(b, se) {
            let Z = m,
                fe = !1;
            if (b) {
                Z = h.get(se), Z === void 0 && (Z = [], h.set(se, Z));
                const J = b.textures;
                if (Z.length !== J.length || Z[0] !== i.COLOR_ATTACHMENT0) {
                    for (let Y = 0, pe = J.length; Y < pe; Y++) Z[Y] = i.COLOR_ATTACHMENT0 + Y;
                    Z.length = J.length, fe = !0
                }
            } else Z[0] !== i.BACK && (Z[0] = i.BACK, fe = !0);
            fe && i.drawBuffers(Z)
        }

        function tt(b) {
            return v !== b ? (i.useProgram(b), v = b, !0) : !1
        }
        const nt = {
            100: i.FUNC_ADD,
            101: i.FUNC_SUBTRACT,
            102: i.FUNC_REVERSE_SUBTRACT
        };
        nt[103] = i.MIN, nt[104] = i.MAX;
        const ke = {
            200: i.ZERO,
            201: i.ONE,
            202: i.SRC_COLOR,
            204: i.SRC_ALPHA,
            210: i.SRC_ALPHA_SATURATE,
            208: i.DST_COLOR,
            206: i.DST_ALPHA,
            203: i.ONE_MINUS_SRC_COLOR,
            205: i.ONE_MINUS_SRC_ALPHA,
            209: i.ONE_MINUS_DST_COLOR,
            207: i.ONE_MINUS_DST_ALPHA,
            211: i.CONSTANT_COLOR,
            212: i.ONE_MINUS_CONSTANT_COLOR,
            213: i.CONSTANT_ALPHA,
            214: i.ONE_MINUS_CONSTANT_ALPHA
        };

        function R(b, se, Z, fe, J, Y, pe, Le, Qe, qe) {
            if (b === 0) {
                S === !0 && (Me(i.BLEND), S = !1);
                return
            }
            if (S === !1 && (le(i.BLEND), S = !0), b !== 5) {
                if (b !== p || qe !== E) {
                    if ((u !== 100 || M !== 100) && (i.blendEquation(i.FUNC_ADD), u = 100, M = 100), qe) switch (b) {
                        case 1:
                            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                            break;
                        case 2:
                            i.blendFunc(i.ONE, i.ONE);
                            break;
                        case 3:
                            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                            break;
                        case 4:
                            i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", b);
                            break
                    } else switch (b) {
                        case 1:
                            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                            break;
                        case 2:
                            i.blendFunc(i.SRC_ALPHA, i.ONE);
                            break;
                        case 3:
                            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                            break;
                        case 4:
                            i.blendFunc(i.ZERO, i.SRC_COLOR);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", b);
                            break
                    }
                    A = null, y = null, I = null, w = null, C.set(0, 0, 0), U = 0, p = b, E = qe
                }
                return
            }
            J = J || se, Y = Y || Z, pe = pe || fe, (se !== u || J !== M) && (i.blendEquationSeparate(nt[se], nt[J]), u = se, M = J), (Z !== A || fe !== y || Y !== I || pe !== w) && (i.blendFuncSeparate(ke[Z], ke[fe], ke[Y], ke[pe]), A = Z, y = fe, I = Y, w = pe), (Le.equals(C) === !1 || Qe !== U) && (i.blendColor(Le.r, Le.g, Le.b, Qe), C.copy(Le), U = Qe), p = b, E = !1
        }

        function vt(b, se) {
            b.side === 2 ? Me(i.CULL_FACE) : le(i.CULL_FACE);
            let Z = b.side === 1;
            se && (Z = !Z), We(Z), b.blending === 1 && b.transparent === !1 ? R(0) : R(b.blending, b.blendEquation, b.blendSrc, b.blendDst, b.blendEquationAlpha, b.blendSrcAlpha, b.blendDstAlpha, b.blendColor, b.blendAlpha, b.premultipliedAlpha), a.setFunc(b.depthFunc), a.setTest(b.depthTest), a.setMask(b.depthWrite), s.setMask(b.colorWrite);
            const fe = b.stencilWrite;
            o.setTest(fe), fe && (o.setMask(b.stencilWriteMask), o.setFunc(b.stencilFunc, b.stencilRef, b.stencilFuncMask), o.setOp(b.stencilFail, b.stencilZFail, b.stencilZPass)), Ge(b.polygonOffset, b.polygonOffsetFactor, b.polygonOffsetUnits), b.alphaToCoverage === !0 ? le(i.SAMPLE_ALPHA_TO_COVERAGE) : Me(i.SAMPLE_ALPHA_TO_COVERAGE)
        }

        function We(b) {
            x !== b && (b ? i.frontFace(i.CW) : i.frontFace(i.CCW), x = b)
        }

        function Je(b) {
            b !== 0 ? (le(i.CULL_FACE), b !== P && (b === 1 ? i.cullFace(i.BACK) : b === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Me(i.CULL_FACE), P = b
        }

        function ge(b) {
            b !== q && (V && i.lineWidth(b), q = b)
        }

        function Ge(b, se, Z) {
            b ? (le(i.POLYGON_OFFSET_FILL), (z !== se || W !== Z) && (i.polygonOffset(se, Z), z = se, W = Z)) : Me(i.POLYGON_OFFSET_FILL)
        }

        function ye(b) {
            b ? le(i.SCISSOR_TEST) : Me(i.SCISSOR_TEST)
        }

        function Fe(b) {
            b === void 0 && (b = i.TEXTURE0 + j - 1), oe !== b && (i.activeTexture(b), oe = b)
        }

        function ht(b, se, Z) {
            Z === void 0 && (oe === null ? Z = i.TEXTURE0 + j - 1 : Z = oe);
            let fe = de[Z];
            fe === void 0 && (fe = {
                type: void 0,
                texture: void 0
            }, de[Z] = fe), (fe.type !== b || fe.texture !== se) && (oe !== Z && (i.activeTexture(Z), oe = Z), i.bindTexture(b, se || Se[b]), fe.type = b, fe.texture = se)
        }

        function T() {
            const b = de[oe];
            b !== void 0 && b.type !== void 0 && (i.bindTexture(b.type, null), b.type = void 0, b.texture = void 0)
        }

        function _() {
            try {
                i.compressedTexImage2D(...arguments)
            } catch (b) {
                console.error("THREE.WebGLState:", b)
            }
        }

        function F() {
            try {
                i.compressedTexImage3D(...arguments)
            } catch (b) {
                console.error("THREE.WebGLState:", b)
            }
        }

        function k() {
            try {
                i.texSubImage2D(...arguments)
            } catch (b) {
                console.error("THREE.WebGLState:", b)
            }
        }

        function $() {
            try {
                i.texSubImage3D(...arguments)
            } catch (b) {
                console.error("THREE.WebGLState:", b)
            }
        }

        function H() {
            try {
                i.compressedTexSubImage2D(...arguments)
            } catch (b) {
                console.error("THREE.WebGLState:", b)
            }
        }

        function ve() {
            try {
                i.compressedTexSubImage3D(...arguments)
            } catch (b) {
                console.error("THREE.WebGLState:", b)
            }
        }

        function re() {
            try {
                i.texStorage2D(...arguments)
            } catch (b) {
                console.error("THREE.WebGLState:", b)
            }
        }

        function _e() {
            try {
                i.texStorage3D(...arguments)
            } catch (b) {
                console.error("THREE.WebGLState:", b)
            }
        }

        function xe() {
            try {
                i.texImage2D(...arguments)
            } catch (b) {
                console.error("THREE.WebGLState:", b)
            }
        }

        function K() {
            try {
                i.texImage3D(...arguments)
            } catch (b) {
                console.error("THREE.WebGLState:", b)
            }
        }

        function ue(b) {
            je.equals(b) === !1 && (i.scissor(b.x, b.y, b.z, b.w), je.copy(b))
        }

        function be(b) {
            X.equals(b) === !1 && (i.viewport(b.x, b.y, b.z, b.w), X.copy(b))
        }

        function Re(b, se) {
            let Z = c.get(se);
            Z === void 0 && (Z = new WeakMap, c.set(se, Z));
            let fe = Z.get(b);
            fe === void 0 && (fe = i.getUniformBlockIndex(se, b.name), Z.set(b, fe))
        }

        function ie(b, se) {
            const fe = c.get(se).get(b);
            l.get(se) !== fe && (i.uniformBlockBinding(se, fe, b.__bindingPointIndex), l.set(se, fe))
        }

        function De() {
            i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), d = {}, oe = null, de = {}, f = {}, h = new WeakMap, m = [], v = null, S = !1, p = null, u = null, A = null, y = null, M = null, I = null, w = null, C = new Ke(0, 0, 0), U = 0, E = !1, x = null, P = null, q = null, z = null, W = null, je.set(0, 0, i.canvas.width, i.canvas.height), X.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset()
        }
        return {
            buffers: {
                color: s,
                depth: a,
                stencil: o
            },
            enable: le,
            disable: Me,
            bindFramebuffer: Ve,
            drawBuffers: Ce,
            useProgram: tt,
            setBlending: R,
            setMaterial: vt,
            setFlipSided: We,
            setCullFace: Je,
            setLineWidth: ge,
            setPolygonOffset: Ge,
            setScissorTest: ye,
            activeTexture: Fe,
            bindTexture: ht,
            unbindTexture: T,
            compressedTexImage2D: _,
            compressedTexImage3D: F,
            texImage2D: xe,
            texImage3D: K,
            updateUBOMapping: Re,
            uniformBlockBinding: ie,
            texStorage2D: re,
            texStorage3D: _e,
            texSubImage2D: k,
            texSubImage3D: $,
            compressedTexSubImage2D: H,
            compressedTexSubImage3D: ve,
            scissor: ue,
            viewport: be,
            reset: De
        }
    }

    function uu(i, e, t, n, r, s, a) {
        const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
            l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
            c = new Ze,
            d = new WeakMap;
        let f;
        const h = new WeakMap;
        let m = !1;
        try {
            m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null
        } catch {}

        function v(T, _) {
            return m ? new OffscreenCanvas(T, _) : si("canvas")
        }

        function S(T, _, F) {
            let k = 1;
            const $ = ht(T);
            if (($.width > F || $.height > F) && (k = F / Math.max($.width, $.height)), k < 1)
                if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
                    const H = Math.floor(k * $.width),
                        ve = Math.floor(k * $.height);
                    f === void 0 && (f = v(H, ve));
                    const re = _ ? v(H, ve) : f;
                    return re.width = H, re.height = ve, re.getContext("2d").drawImage(T, 0, 0, H, ve), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + H + "x" + ve + ")."), re
                } else return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + $.width + "x" + $.height + ")."), T;
            return T
        }

        function p(T) {
            return T.generateMipmaps
        }

        function u(T) {
            i.generateMipmap(T)
        }

        function A(T) {
            return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D
        }

        function y(T, _, F, k, $ = !1) {
            if (T !== null) {
                if (i[T] !== void 0) return i[T];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'")
            }
            let H = _;
            if (_ === i.RED && (F === i.FLOAT && (H = i.R32F), F === i.HALF_FLOAT && (H = i.R16F), F === i.UNSIGNED_BYTE && (H = i.R8)), _ === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (H = i.R8UI), F === i.UNSIGNED_SHORT && (H = i.R16UI), F === i.UNSIGNED_INT && (H = i.R32UI), F === i.BYTE && (H = i.R8I), F === i.SHORT && (H = i.R16I), F === i.INT && (H = i.R32I)), _ === i.RG && (F === i.FLOAT && (H = i.RG32F), F === i.HALF_FLOAT && (H = i.RG16F), F === i.UNSIGNED_BYTE && (H = i.RG8)), _ === i.RG_INTEGER && (F === i.UNSIGNED_BYTE && (H = i.RG8UI), F === i.UNSIGNED_SHORT && (H = i.RG16UI), F === i.UNSIGNED_INT && (H = i.RG32UI), F === i.BYTE && (H = i.RG8I), F === i.SHORT && (H = i.RG16I), F === i.INT && (H = i.RG32I)), _ === i.RGB_INTEGER && (F === i.UNSIGNED_BYTE && (H = i.RGB8UI), F === i.UNSIGNED_SHORT && (H = i.RGB16UI), F === i.UNSIGNED_INT && (H = i.RGB32UI), F === i.BYTE && (H = i.RGB8I), F === i.SHORT && (H = i.RGB16I), F === i.INT && (H = i.RGB32I)), _ === i.RGBA_INTEGER && (F === i.UNSIGNED_BYTE && (H = i.RGBA8UI), F === i.UNSIGNED_SHORT && (H = i.RGBA16UI), F === i.UNSIGNED_INT && (H = i.RGBA32UI), F === i.BYTE && (H = i.RGBA8I), F === i.SHORT && (H = i.RGBA16I), F === i.INT && (H = i.RGBA32I)), _ === i.RGB && F === i.UNSIGNED_INT_5_9_9_9_REV && (H = i.RGB9_E5), _ === i.RGBA) {
                const ve = $ ? ri : ze.getTransfer(k);
                F === i.FLOAT && (H = i.RGBA32F), F === i.HALF_FLOAT && (H = i.RGBA16F), F === i.UNSIGNED_BYTE && (H = ve === $e ? i.SRGB8_ALPHA8 : i.RGBA8), F === i.UNSIGNED_SHORT_4_4_4_4 && (H = i.RGBA4), F === i.UNSIGNED_SHORT_5_5_5_1 && (H = i.RGB5_A1)
            }
            return (H === i.R16F || H === i.R32F || H === i.RG16F || H === i.RG32F || H === i.RGBA16F || H === i.RGBA32F) && e.get("EXT_color_buffer_float"), H
        }

        function M(T, _) {
            let F;
            return T ? _ === null || _ === 1014 || _ === 1020 ? F = i.DEPTH24_STENCIL8 : _ === 1015 ? F = i.DEPTH32F_STENCIL8 : _ === 1012 && (F = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === 1014 || _ === 1020 ? F = i.DEPTH_COMPONENT24 : _ === 1015 ? F = i.DEPTH_COMPONENT32F : _ === 1012 && (F = i.DEPTH_COMPONENT16), F
        }

        function I(T, _) {
            return p(T) === !0 || T.isFramebufferTexture && T.minFilter !== 1003 && T.minFilter !== 1006 ? Math.log2(Math.max(_.width, _.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? _.mipmaps.length : 1
        }

        function w(T) {
            const _ = T.target;
            _.removeEventListener("dispose", w), U(_), _.isVideoTexture && d.delete(_)
        }

        function C(T) {
            const _ = T.target;
            _.removeEventListener("dispose", C), x(_)
        }

        function U(T) {
            const _ = n.get(T);
            if (_.__webglInit === void 0) return;
            const F = T.source,
                k = h.get(F);
            if (k) {
                const $ = k[_.__cacheKey];
                $.usedTimes--, $.usedTimes === 0 && E(T), Object.keys(k).length === 0 && h.delete(F)
            }
            n.remove(T)
        }

        function E(T) {
            const _ = n.get(T);
            i.deleteTexture(_.__webglTexture);
            const F = T.source,
                k = h.get(F);
            delete k[_.__cacheKey], a.memory.textures--
        }

        function x(T) {
            const _ = n.get(T);
            if (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)), T.isWebGLCubeRenderTarget)
                for (let k = 0; k < 6; k++) {
                    if (Array.isArray(_.__webglFramebuffer[k]))
                        for (let $ = 0; $ < _.__webglFramebuffer[k].length; $++) i.deleteFramebuffer(_.__webglFramebuffer[k][$]);
                    else i.deleteFramebuffer(_.__webglFramebuffer[k]);
                    _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[k])
                } else {
                    if (Array.isArray(_.__webglFramebuffer))
                        for (let k = 0; k < _.__webglFramebuffer.length; k++) i.deleteFramebuffer(_.__webglFramebuffer[k]);
                    else i.deleteFramebuffer(_.__webglFramebuffer);
                    if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer)
                        for (let k = 0; k < _.__webglColorRenderbuffer.length; k++) _.__webglColorRenderbuffer[k] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);
                    _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer)
                }
            const F = T.textures;
            for (let k = 0, $ = F.length; k < $; k++) {
                const H = n.get(F[k]);
                H.__webglTexture && (i.deleteTexture(H.__webglTexture), a.memory.textures--), n.remove(F[k])
            }
            n.remove(T)
        }
        let P = 0;

        function q() {
            P = 0
        }

        function z() {
            const T = P;
            return T >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + r.maxTextures), P += 1, T
        }

        function W(T) {
            const _ = [];
            return _.push(T.wrapS), _.push(T.wrapT), _.push(T.wrapR || 0), _.push(T.magFilter), _.push(T.minFilter), _.push(T.anisotropy), _.push(T.internalFormat), _.push(T.format), _.push(T.type), _.push(T.generateMipmaps), _.push(T.premultiplyAlpha), _.push(T.flipY), _.push(T.unpackAlignment), _.push(T.colorSpace), _.join()
        }

        function j(T, _) {
            const F = n.get(T);
            if (T.isVideoTexture && ye(T), T.isRenderTargetTexture === !1 && T.version > 0 && F.__version !== T.version) {
                const k = T.image;
                if (k === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                else if (k.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                else {
                    Se(F, T, _);
                    return
                }
            }
            t.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + _)
        }

        function V(T, _) {
            const F = n.get(T);
            if (T.version > 0 && F.__version !== T.version) {
                Se(F, T, _);
                return
            }
            t.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + _)
        }

        function ee(T, _) {
            const F = n.get(T);
            if (T.version > 0 && F.__version !== T.version) {
                Se(F, T, _);
                return
            }
            t.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + _)
        }

        function G(T, _) {
            const F = n.get(T);
            if (T.version > 0 && F.__version !== T.version) {
                le(F, T, _);
                return
            }
            t.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + _)
        }
        const oe = {
                1e3: i.REPEAT,
                1001: i.CLAMP_TO_EDGE,
                1002: i.MIRRORED_REPEAT
            },
            de = {
                1003: i.NEAREST,
                1004: i.NEAREST_MIPMAP_NEAREST,
                1005: i.NEAREST_MIPMAP_LINEAR,
                1006: i.LINEAR,
                1007: i.LINEAR_MIPMAP_NEAREST,
                1008: i.LINEAR_MIPMAP_LINEAR
            },
            Te = {
                512: i.NEVER,
                519: i.ALWAYS,
                513: i.LESS,
                515: i.LEQUAL,
                514: i.EQUAL,
                518: i.GEQUAL,
                516: i.GREATER,
                517: i.NOTEQUAL
            };

        function Ne(T, _) {
            if (_.type === 1015 && e.has("OES_texture_float_linear") === !1 && (_.magFilter === 1006 || _.magFilter === 1007 || _.magFilter === 1005 || _.magFilter === 1008 || _.minFilter === 1006 || _.minFilter === 1007 || _.minFilter === 1005 || _.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, oe[_.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, oe[_.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, oe[_.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, de[_.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, de[_.minFilter]), _.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, Te[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
                if (_.magFilter === 1003 || _.minFilter !== 1005 && _.minFilter !== 1008 || _.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
                if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
                    const F = e.get("EXT_texture_filter_anisotropic");
                    i.texParameterf(T, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy
                }
            }
        }

        function je(T, _) {
            let F = !1;
            T.__webglInit === void 0 && (T.__webglInit = !0, _.addEventListener("dispose", w));
            const k = _.source;
            let $ = h.get(k);
            $ === void 0 && ($ = {}, h.set(k, $));
            const H = W(_);
            if (H !== T.__cacheKey) {
                $[H] === void 0 && ($[H] = {
                    texture: i.createTexture(),
                    usedTimes: 0
                }, a.memory.textures++, F = !0), $[H].usedTimes++;
                const ve = $[T.__cacheKey];
                ve !== void 0 && ($[T.__cacheKey].usedTimes--, ve.usedTimes === 0 && E(_)), T.__cacheKey = H, T.__webglTexture = $[H].texture
            }
            return F
        }

        function X(T, _, F) {
            return Math.floor(Math.floor(T / F) / _)
        }

        function te(T, _, F, k) {
            const H = T.updateRanges;
            if (H.length === 0) t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, F, k, _.data);
            else {
                H.sort((K, ue) => K.start - ue.start);
                let ve = 0;
                for (let K = 1; K < H.length; K++) {
                    const ue = H[ve],
                        be = H[K],
                        Re = ue.start + ue.count,
                        ie = X(be.start, _.width, 4),
                        De = X(ue.start, _.width, 4);
                    be.start <= Re + 1 && ie === De && X(be.start + be.count - 1, _.width, 4) === ie ? ue.count = Math.max(ue.count, be.start + be.count - ue.start) : (++ve, H[ve] = be)
                }
                H.length = ve + 1;
                const re = i.getParameter(i.UNPACK_ROW_LENGTH),
                    _e = i.getParameter(i.UNPACK_SKIP_PIXELS),
                    xe = i.getParameter(i.UNPACK_SKIP_ROWS);
                i.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
                for (let K = 0, ue = H.length; K < ue; K++) {
                    const be = H[K],
                        Re = Math.floor(be.start / 4),
                        ie = Math.ceil(be.count / 4),
                        De = Re % _.width,
                        b = Math.floor(Re / _.width),
                        se = ie,
                        Z = 1;
                    i.pixelStorei(i.UNPACK_SKIP_PIXELS, De), i.pixelStorei(i.UNPACK_SKIP_ROWS, b), t.texSubImage2D(i.TEXTURE_2D, 0, De, b, se, Z, F, k, _.data)
                }
                T.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, re), i.pixelStorei(i.UNPACK_SKIP_PIXELS, _e), i.pixelStorei(i.UNPACK_SKIP_ROWS, xe)
            }
        }

        function Se(T, _, F) {
            let k = i.TEXTURE_2D;
            (_.isDataArrayTexture || _.isCompressedArrayTexture) && (k = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (k = i.TEXTURE_3D);
            const $ = je(T, _),
                H = _.source;
            t.bindTexture(k, T.__webglTexture, i.TEXTURE0 + F);
            const ve = n.get(H);
            if (H.version !== ve.__version || $ === !0) {
                t.activeTexture(i.TEXTURE0 + F);
                const re = ze.getPrimaries(ze.workingColorSpace),
                    _e = _.colorSpace === Kt ? null : ze.getPrimaries(_.colorSpace),
                    xe = _.colorSpace === Kt || re === _e ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
                i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe);
                let K = S(_.image, !1, r.maxTextureSize);
                K = Fe(_, K);
                const ue = s.convert(_.format, _.colorSpace),
                    be = s.convert(_.type);
                let Re = y(_.internalFormat, ue, be, _.colorSpace, _.isVideoTexture);
                Ne(k, _);
                let ie;
                const De = _.mipmaps,
                    b = _.isVideoTexture !== !0,
                    se = ve.__version === void 0 || $ === !0,
                    Z = H.dataReady,
                    fe = I(_, K);
                if (_.isDepthTexture) Re = M(_.format === 1027, _.type), se && (b ? t.texStorage2D(i.TEXTURE_2D, 1, Re, K.width, K.height) : t.texImage2D(i.TEXTURE_2D, 0, Re, K.width, K.height, 0, ue, be, null));
                else if (_.isDataTexture)
                    if (De.length > 0) {
                        b && se && t.texStorage2D(i.TEXTURE_2D, fe, Re, De[0].width, De[0].height);
                        for (let J = 0, Y = De.length; J < Y; J++) ie = De[J], b ? Z && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ie.width, ie.height, ue, be, ie.data) : t.texImage2D(i.TEXTURE_2D, J, Re, ie.width, ie.height, 0, ue, be, ie.data);
                        _.generateMipmaps = !1
                    } else b ? (se && t.texStorage2D(i.TEXTURE_2D, fe, Re, K.width, K.height), Z && te(_, K, ue, be)) : t.texImage2D(i.TEXTURE_2D, 0, Re, K.width, K.height, 0, ue, be, K.data);
                else if (_.isCompressedTexture)
                    if (_.isCompressedArrayTexture) {
                        b && se && t.texStorage3D(i.TEXTURE_2D_ARRAY, fe, Re, De[0].width, De[0].height, K.depth);
                        for (let J = 0, Y = De.length; J < Y; J++)
                            if (ie = De[J], _.format !== 1023)
                                if (ue !== null)
                                    if (b) {
                                        if (Z)
                                            if (_.layerUpdates.size > 0) {
                                                const pe = $r(ie.width, ie.height, _.format, _.type);
                                                for (const Le of _.layerUpdates) {
                                                    const Qe = ie.data.subarray(Le * pe / ie.data.BYTES_PER_ELEMENT, (Le + 1) * pe / ie.data.BYTES_PER_ELEMENT);
                                                    t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, Le, ie.width, ie.height, 1, ue, Qe)
                                                }
                                                _.clearLayerUpdates()
                                            } else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, ie.width, ie.height, K.depth, ue, ie.data)
                                    } else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, J, Re, ie.width, ie.height, K.depth, 0, ie.data, 0, 0);
                        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
                        else b ? Z && t.texSubImage3D(i.TEXTURE_2D_ARRAY, J, 0, 0, 0, ie.width, ie.height, K.depth, ue, be, ie.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, J, Re, ie.width, ie.height, K.depth, 0, ue, be, ie.data)
                    } else {
                        b && se && t.texStorage2D(i.TEXTURE_2D, fe, Re, De[0].width, De[0].height);
                        for (let J = 0, Y = De.length; J < Y; J++) ie = De[J], _.format !== 1023 ? ue !== null ? b ? Z && t.compressedTexSubImage2D(i.TEXTURE_2D, J, 0, 0, ie.width, ie.height, ue, ie.data) : t.compressedTexImage2D(i.TEXTURE_2D, J, Re, ie.width, ie.height, 0, ie.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : b ? Z && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ie.width, ie.height, ue, be, ie.data) : t.texImage2D(i.TEXTURE_2D, J, Re, ie.width, ie.height, 0, ue, be, ie.data)
                    }
                else if (_.isDataArrayTexture)
                    if (b) {
                        if (se && t.texStorage3D(i.TEXTURE_2D_ARRAY, fe, Re, K.width, K.height, K.depth), Z)
                            if (_.layerUpdates.size > 0) {
                                const J = $r(K.width, K.height, _.format, _.type);
                                for (const Y of _.layerUpdates) {
                                    const pe = K.data.subarray(Y * J / K.data.BYTES_PER_ELEMENT, (Y + 1) * J / K.data.BYTES_PER_ELEMENT);
                                    t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Y, K.width, K.height, 1, ue, be, pe)
                                }
                                _.clearLayerUpdates()
                            } else t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, K.width, K.height, K.depth, ue, be, K.data)
                    } else t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Re, K.width, K.height, K.depth, 0, ue, be, K.data);
                else if (_.isData3DTexture) b ? (se && t.texStorage3D(i.TEXTURE_3D, fe, Re, K.width, K.height, K.depth), Z && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, K.width, K.height, K.depth, ue, be, K.data)) : t.texImage3D(i.TEXTURE_3D, 0, Re, K.width, K.height, K.depth, 0, ue, be, K.data);
                else if (_.isFramebufferTexture) {
                    if (se)
                        if (b) t.texStorage2D(i.TEXTURE_2D, fe, Re, K.width, K.height);
                        else {
                            let J = K.width,
                                Y = K.height;
                            for (let pe = 0; pe < fe; pe++) t.texImage2D(i.TEXTURE_2D, pe, Re, J, Y, 0, ue, be, null), J >>= 1, Y >>= 1
                        }
                } else if (De.length > 0) {
                    if (b && se) {
                        const J = ht(De[0]);
                        t.texStorage2D(i.TEXTURE_2D, fe, Re, J.width, J.height)
                    }
                    for (let J = 0, Y = De.length; J < Y; J++) ie = De[J], b ? Z && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ue, be, ie) : t.texImage2D(i.TEXTURE_2D, J, Re, ue, be, ie);
                    _.generateMipmaps = !1
                } else if (b) {
                    if (se) {
                        const J = ht(K);
                        t.texStorage2D(i.TEXTURE_2D, fe, Re, J.width, J.height)
                    }
                    Z && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ue, be, K)
                } else t.texImage2D(i.TEXTURE_2D, 0, Re, ue, be, K);
                p(_) && u(k), ve.__version = H.version, _.onUpdate && _.onUpdate(_)
            }
            T.__version = _.version
        }

        function le(T, _, F) {
            if (_.image.length !== 6) return;
            const k = je(T, _),
                $ = _.source;
            t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + F);
            const H = n.get($);
            if ($.version !== H.__version || k === !0) {
                t.activeTexture(i.TEXTURE0 + F);
                const ve = ze.getPrimaries(ze.workingColorSpace),
                    re = _.colorSpace === Kt ? null : ze.getPrimaries(_.colorSpace),
                    _e = _.colorSpace === Kt || ve === re ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
                i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, _e);
                const xe = _.isCompressedTexture || _.image[0].isCompressedTexture,
                    K = _.image[0] && _.image[0].isDataTexture,
                    ue = [];
                for (let Y = 0; Y < 6; Y++) !xe && !K ? ue[Y] = S(_.image[Y], !0, r.maxCubemapSize) : ue[Y] = K ? _.image[Y].image : _.image[Y], ue[Y] = Fe(_, ue[Y]);
                const be = ue[0],
                    Re = s.convert(_.format, _.colorSpace),
                    ie = s.convert(_.type),
                    De = y(_.internalFormat, Re, ie, _.colorSpace),
                    b = _.isVideoTexture !== !0,
                    se = H.__version === void 0 || k === !0,
                    Z = $.dataReady;
                let fe = I(_, be);
                Ne(i.TEXTURE_CUBE_MAP, _);
                let J;
                if (xe) {
                    b && se && t.texStorage2D(i.TEXTURE_CUBE_MAP, fe, De, be.width, be.height);
                    for (let Y = 0; Y < 6; Y++) {
                        J = ue[Y].mipmaps;
                        for (let pe = 0; pe < J.length; pe++) {
                            const Le = J[pe];
                            _.format !== 1023 ? Re !== null ? b ? Z && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe, 0, 0, Le.width, Le.height, Re, Le.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe, De, Le.width, Le.height, 0, Le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : b ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe, 0, 0, Le.width, Le.height, Re, ie, Le.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe, De, Le.width, Le.height, 0, Re, ie, Le.data)
                        }
                    }
                } else {
                    if (J = _.mipmaps, b && se) {
                        J.length > 0 && fe++;
                        const Y = ht(ue[0]);
                        t.texStorage2D(i.TEXTURE_CUBE_MAP, fe, De, Y.width, Y.height)
                    }
                    for (let Y = 0; Y < 6; Y++)
                        if (K) {
                            b ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, ue[Y].width, ue[Y].height, Re, ie, ue[Y].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, De, ue[Y].width, ue[Y].height, 0, Re, ie, ue[Y].data);
                            for (let pe = 0; pe < J.length; pe++) {
                                const Qe = J[pe].image[Y].image;
                                b ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe + 1, 0, 0, Qe.width, Qe.height, Re, ie, Qe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe + 1, De, Qe.width, Qe.height, 0, Re, ie, Qe.data)
                            }
                        } else {
                            b ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, Re, ie, ue[Y]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, De, Re, ie, ue[Y]);
                            for (let pe = 0; pe < J.length; pe++) {
                                const Le = J[pe];
                                b ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe + 1, 0, 0, Re, ie, Le.image[Y]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe + 1, De, Re, ie, Le.image[Y])
                            }
                        }
                }
                p(_) && u(i.TEXTURE_CUBE_MAP), H.__version = $.version, _.onUpdate && _.onUpdate(_)
            }
            T.__version = _.version
        }

        function Me(T, _, F, k, $, H) {
            const ve = s.convert(F.format, F.colorSpace),
                re = s.convert(F.type),
                _e = y(F.internalFormat, ve, re, F.colorSpace),
                xe = n.get(_),
                K = n.get(F);
            if (K.__renderTarget = _, !xe.__hasExternalTextures) {
                const ue = Math.max(1, _.width >> H),
                    be = Math.max(1, _.height >> H);
                $ === i.TEXTURE_3D || $ === i.TEXTURE_2D_ARRAY ? t.texImage3D($, H, _e, ue, be, _.depth, 0, ve, re, null) : t.texImage2D($, H, _e, ue, be, 0, ve, re, null)
            }
            t.bindFramebuffer(i.FRAMEBUFFER, T), Ge(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, k, $, K.__webglTexture, 0, ge(_)) : ($ === i.TEXTURE_2D || $ >= i.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, k, $, K.__webglTexture, H), t.bindFramebuffer(i.FRAMEBUFFER, null)
        }

        function Ve(T, _, F) {
            if (i.bindRenderbuffer(i.RENDERBUFFER, T), _.depthBuffer) {
                const k = _.depthTexture,
                    $ = k && k.isDepthTexture ? k.type : null,
                    H = M(_.stencilBuffer, $),
                    ve = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
                    re = ge(_);
                Ge(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, re, H, _.width, _.height) : F ? i.renderbufferStorageMultisample(i.RENDERBUFFER, re, H, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, H, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, ve, i.RENDERBUFFER, T)
            } else {
                const k = _.textures;
                for (let $ = 0; $ < k.length; $++) {
                    const H = k[$],
                        ve = s.convert(H.format, H.colorSpace),
                        re = s.convert(H.type),
                        _e = y(H.internalFormat, ve, re, H.colorSpace),
                        xe = ge(_);
                    F && Ge(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, xe, _e, _.width, _.height) : Ge(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, xe, _e, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, _e, _.width, _.height)
                }
            }
            i.bindRenderbuffer(i.RENDERBUFFER, null)
        }

        function Ce(T, _) {
            if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
            if (t.bindFramebuffer(i.FRAMEBUFFER, T), !(_.depthTexture && _.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            const k = n.get(_.depthTexture);
            k.__renderTarget = _, (!k.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), j(_.depthTexture, 0);
            const $ = k.__webglTexture,
                H = ge(_);
            if (_.depthTexture.format === 1026) Ge(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0, H) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0);
            else if (_.depthTexture.format === 1027) Ge(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0, H) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0);
            else throw new Error("Unknown depthTexture format")
        }

        function tt(T) {
            const _ = n.get(T),
                F = T.isWebGLCubeRenderTarget === !0;
            if (_.__boundDepthTexture !== T.depthTexture) {
                const k = T.depthTexture;
                if (_.__depthDisposeCallback && _.__depthDisposeCallback(), k) {
                    const $ = () => {
                        delete _.__boundDepthTexture, delete _.__depthDisposeCallback, k.removeEventListener("dispose", $)
                    };
                    k.addEventListener("dispose", $), _.__depthDisposeCallback = $
                }
                _.__boundDepthTexture = k
            }
            if (T.depthTexture && !_.__autoAllocateDepthBuffer) {
                if (F) throw new Error("target.depthTexture not supported in Cube render targets");
                const k = T.texture.mipmaps;
                k && k.length > 0 ? Ce(_.__webglFramebuffer[0], T) : Ce(_.__webglFramebuffer, T)
            } else if (F) {
                _.__webglDepthbuffer = [];
                for (let k = 0; k < 6; k++)
                    if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[k]), _.__webglDepthbuffer[k] === void 0) _.__webglDepthbuffer[k] = i.createRenderbuffer(), Ve(_.__webglDepthbuffer[k], T, !1);
                    else {
                        const $ = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
                            H = _.__webglDepthbuffer[k];
                        i.bindRenderbuffer(i.RENDERBUFFER, H), i.framebufferRenderbuffer(i.FRAMEBUFFER, $, i.RENDERBUFFER, H)
                    }
            } else {
                const k = T.texture.mipmaps;
                if (k && k.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0) _.__webglDepthbuffer = i.createRenderbuffer(), Ve(_.__webglDepthbuffer, T, !1);
                else {
                    const $ = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
                        H = _.__webglDepthbuffer;
                    i.bindRenderbuffer(i.RENDERBUFFER, H), i.framebufferRenderbuffer(i.FRAMEBUFFER, $, i.RENDERBUFFER, H)
                }
            }
            t.bindFramebuffer(i.FRAMEBUFFER, null)
        }

        function nt(T, _, F) {
            const k = n.get(T);
            _ !== void 0 && Me(k.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), F !== void 0 && tt(T)
        }

        function ke(T) {
            const _ = T.texture,
                F = n.get(T),
                k = n.get(_);
            T.addEventListener("dispose", C);
            const $ = T.textures,
                H = T.isWebGLCubeRenderTarget === !0,
                ve = $.length > 1;
            if (ve || (k.__webglTexture === void 0 && (k.__webglTexture = i.createTexture()), k.__version = _.version, a.memory.textures++), H) {
                F.__webglFramebuffer = [];
                for (let re = 0; re < 6; re++)
                    if (_.mipmaps && _.mipmaps.length > 0) {
                        F.__webglFramebuffer[re] = [];
                        for (let _e = 0; _e < _.mipmaps.length; _e++) F.__webglFramebuffer[re][_e] = i.createFramebuffer()
                    } else F.__webglFramebuffer[re] = i.createFramebuffer()
            } else {
                if (_.mipmaps && _.mipmaps.length > 0) {
                    F.__webglFramebuffer = [];
                    for (let re = 0; re < _.mipmaps.length; re++) F.__webglFramebuffer[re] = i.createFramebuffer()
                } else F.__webglFramebuffer = i.createFramebuffer();
                if (ve)
                    for (let re = 0, _e = $.length; re < _e; re++) {
                        const xe = n.get($[re]);
                        xe.__webglTexture === void 0 && (xe.__webglTexture = i.createTexture(), a.memory.textures++)
                    }
                if (T.samples > 0 && Ge(T) === !1) {
                    F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
                    for (let re = 0; re < $.length; re++) {
                        const _e = $[re];
                        F.__webglColorRenderbuffer[re] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[re]);
                        const xe = s.convert(_e.format, _e.colorSpace),
                            K = s.convert(_e.type),
                            ue = y(_e.internalFormat, xe, K, _e.colorSpace, T.isXRRenderTarget === !0),
                            be = ge(T);
                        i.renderbufferStorageMultisample(i.RENDERBUFFER, be, ue, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + re, i.RENDERBUFFER, F.__webglColorRenderbuffer[re])
                    }
                    i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(), Ve(F.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null)
                }
            }
            if (H) {
                t.bindTexture(i.TEXTURE_CUBE_MAP, k.__webglTexture), Ne(i.TEXTURE_CUBE_MAP, _);
                for (let re = 0; re < 6; re++)
                    if (_.mipmaps && _.mipmaps.length > 0)
                        for (let _e = 0; _e < _.mipmaps.length; _e++) Me(F.__webglFramebuffer[re][_e], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + re, _e);
                    else Me(F.__webglFramebuffer[re], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0);
                p(_) && u(i.TEXTURE_CUBE_MAP), t.unbindTexture()
            } else if (ve) {
                for (let re = 0, _e = $.length; re < _e; re++) {
                    const xe = $[re],
                        K = n.get(xe);
                    t.bindTexture(i.TEXTURE_2D, K.__webglTexture), Ne(i.TEXTURE_2D, xe), Me(F.__webglFramebuffer, T, xe, i.COLOR_ATTACHMENT0 + re, i.TEXTURE_2D, 0), p(xe) && u(i.TEXTURE_2D)
                }
                t.unbindTexture()
            } else {
                let re = i.TEXTURE_2D;
                if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (re = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(re, k.__webglTexture), Ne(re, _), _.mipmaps && _.mipmaps.length > 0)
                    for (let _e = 0; _e < _.mipmaps.length; _e++) Me(F.__webglFramebuffer[_e], T, _, i.COLOR_ATTACHMENT0, re, _e);
                else Me(F.__webglFramebuffer, T, _, i.COLOR_ATTACHMENT0, re, 0);
                p(_) && u(re), t.unbindTexture()
            }
            T.depthBuffer && tt(T)
        }

        function R(T) {
            const _ = T.textures;
            for (let F = 0, k = _.length; F < k; F++) {
                const $ = _[F];
                if (p($)) {
                    const H = A(T),
                        ve = n.get($).__webglTexture;
                    t.bindTexture(H, ve), u(H), t.unbindTexture()
                }
            }
        }
        const vt = [],
            We = [];

        function Je(T) {
            if (T.samples > 0) {
                if (Ge(T) === !1) {
                    const _ = T.textures,
                        F = T.width,
                        k = T.height;
                    let $ = i.COLOR_BUFFER_BIT;
                    const H = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
                        ve = n.get(T),
                        re = _.length > 1;
                    if (re)
                        for (let xe = 0; xe < _.length; xe++) t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.TEXTURE_2D, null, 0);
                    t.bindFramebuffer(i.READ_FRAMEBUFFER, ve.__webglMultisampledFramebuffer);
                    const _e = T.texture.mipmaps;
                    _e && _e.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ve.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ve.__webglFramebuffer);
                    for (let xe = 0; xe < _.length; xe++) {
                        if (T.resolveDepthBuffer && (T.depthBuffer && ($ |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && ($ |= i.STENCIL_BUFFER_BIT)), re) {
                            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, ve.__webglColorRenderbuffer[xe]);
                            const K = n.get(_[xe]).__webglTexture;
                            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, K, 0)
                        }
                        i.blitFramebuffer(0, 0, F, k, 0, 0, F, k, $, i.NEAREST), l === !0 && (vt.length = 0, We.length = 0, vt.push(i.COLOR_ATTACHMENT0 + xe), T.depthBuffer && T.resolveDepthBuffer === !1 && (vt.push(H), We.push(H), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, We)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, vt))
                    }
                    if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), re)
                        for (let xe = 0; xe < _.length; xe++) {
                            t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.RENDERBUFFER, ve.__webglColorRenderbuffer[xe]);
                            const K = n.get(_[xe]).__webglTexture;
                            t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + xe, i.TEXTURE_2D, K, 0)
                        }
                    t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ve.__webglMultisampledFramebuffer)
                } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && l) {
                    const _ = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
                    i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_])
                }
            }
        }

        function ge(T) {
            return Math.min(r.maxSamples, T.samples)
        }

        function Ge(T) {
            const _ = n.get(T);
            return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1
        }

        function ye(T) {
            const _ = a.render.frame;
            d.get(T) !== _ && (d.set(T, _), T.update())
        }

        function Fe(T, _) {
            const F = T.colorSpace,
                k = T.format,
                $ = T.type;
            return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || F !== Mn && F !== Kt && (ze.getTransfer(F) === $e ? (k !== 1023 || $ !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), _
        }

        function ht(T) {
            return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (c.width = T.naturalWidth || T.width, c.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (c.width = T.displayWidth, c.height = T.displayHeight) : (c.width = T.width, c.height = T.height), c
        }
        this.allocateTextureUnit = z, this.resetTextureUnits = q, this.setTexture2D = j, this.setTexture2DArray = V, this.setTexture3D = ee, this.setTextureCube = G, this.rebindTextures = nt, this.setupRenderTarget = ke, this.updateRenderTargetMipmap = R, this.updateMultisampleRenderTarget = Je, this.setupDepthRenderbuffer = tt, this.setupFrameBufferTexture = Me, this.useMultisampledRTT = Ge
    }

    function hu(i, e) {
        function t(n, r = Kt) {
            let s;
            const a = ze.getTransfer(r);
            if (n === 1009) return i.UNSIGNED_BYTE;
            if (n === 1017) return i.UNSIGNED_SHORT_4_4_4_4;
            if (n === 1018) return i.UNSIGNED_SHORT_5_5_5_1;
            if (n === 35902) return i.UNSIGNED_INT_5_9_9_9_REV;
            if (n === 1010) return i.BYTE;
            if (n === 1011) return i.SHORT;
            if (n === 1012) return i.UNSIGNED_SHORT;
            if (n === 1013) return i.INT;
            if (n === 1014) return i.UNSIGNED_INT;
            if (n === 1015) return i.FLOAT;
            if (n === 1016) return i.HALF_FLOAT;
            if (n === 1021) return i.ALPHA;
            if (n === 1022) return i.RGB;
            if (n === 1023) return i.RGBA;
            if (n === 1026) return i.DEPTH_COMPONENT;
            if (n === 1027) return i.DEPTH_STENCIL;
            if (n === 1028) return i.RED;
            if (n === 1029) return i.RED_INTEGER;
            if (n === 1030) return i.RG;
            if (n === 1031) return i.RG_INTEGER;
            if (n === 1033) return i.RGBA_INTEGER;
            if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
                if (a === $e)
                    if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
                        if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                        if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                        if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                        if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                    } else return null;
            else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
                if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT
            } else return null;
            if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
                if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
                    if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                } else return null;
            if (n === 36196 || n === 37492 || n === 37496)
                if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
                    if (n === 36196 || n === 37492) return a === $e ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
                    if (n === 37496) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC
                } else return null;
            if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
                if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
                    if (n === 37808) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
                    if (n === 37809) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
                    if (n === 37810) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
                    if (n === 37811) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
                    if (n === 37812) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
                    if (n === 37813) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
                    if (n === 37814) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
                    if (n === 37815) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
                    if (n === 37816) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
                    if (n === 37817) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
                    if (n === 37818) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
                    if (n === 37819) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
                    if (n === 37820) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
                    if (n === 37821) return a === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR
                } else return null;
            if (n === 36492 || n === 36494 || n === 36495)
                if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
                    if (n === 36492) return a === $e ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                    if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                    if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
                } else return null;
            if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
                if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
                    if (n === 36492) return s.COMPRESSED_RED_RGTC1_EXT;
                    if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                    if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
                    if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
                } else return null;
            return n === 1020 ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null
        }
        return {
            convert: t
        }
    }
    const du = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
        fu = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
    class pu {
        constructor() {
            this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0
        }
        init(e, t, n) {
            if (this.texture === null) {
                const r = new _t,
                    s = e.properties.get(r);
                s.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r
            }
        }
        getMesh(e) {
            if (this.texture !== null && this.mesh === null) {
                const t = e.cameras[0].viewport,
                    n = new tn({
                        vertexShader: du,
                        fragmentShader: fu,
                        uniforms: {
                            depthColor: {
                                value: this.texture
                            },
                            depthWidth: {
                                value: t.z
                            },
                            depthHeight: {
                                value: t.w
                            }
                        }
                    });
                this.mesh = new Bt(new ei(20, 20), n)
            }
            return this.mesh
        }
        reset() {
            this.texture = null, this.mesh = null
        }
        getDepthTexture() {
            return this.texture
        }
    }
    class mu extends En {
        constructor(e, t) {
            super();
            const n = this;
            let r = null,
                s = 1,
                a = null,
                o = "local-floor",
                l = 1,
                c = null,
                d = null,
                f = null,
                h = null,
                m = null,
                v = null;
            const S = new pu,
                p = t.getContextAttributes();
            let u = null,
                A = null;
            const y = [],
                M = [],
                I = new Ze;
            let w = null;
            const C = new Ut;
            C.viewport = new at;
            const U = new Ut;
            U.viewport = new at;
            const E = [C, U],
                x = new ma;
            let P = null,
                q = null;
            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(X) {
                let te = y[X];
                return te === void 0 && (te = new ar, y[X] = te), te.getTargetRaySpace()
            }, this.getControllerGrip = function(X) {
                let te = y[X];
                return te === void 0 && (te = new ar, y[X] = te), te.getGripSpace()
            }, this.getHand = function(X) {
                let te = y[X];
                return te === void 0 && (te = new ar, y[X] = te), te.getHandSpace()
            };

            function z(X) {
                const te = M.indexOf(X.inputSource);
                if (te === -1) return;
                const Se = y[te];
                Se !== void 0 && (Se.update(X.inputSource, X.frame, c || a), Se.dispatchEvent({
                    type: X.type,
                    data: X.inputSource
                }))
            }

            function W() {
                r.removeEventListener("select", z), r.removeEventListener("selectstart", z), r.removeEventListener("selectend", z), r.removeEventListener("squeeze", z), r.removeEventListener("squeezestart", z), r.removeEventListener("squeezeend", z), r.removeEventListener("end", W), r.removeEventListener("inputsourceschange", j);
                for (let X = 0; X < y.length; X++) {
                    const te = M[X];
                    te !== null && (M[X] = null, y[X].disconnect(te))
                }
                P = null, q = null, S.reset(), e.setRenderTarget(u), m = null, h = null, f = null, r = null, A = null, je.stop(), n.isPresenting = !1, e.setPixelRatio(w), e.setSize(I.width, I.height, !1), n.dispatchEvent({
                    type: "sessionend"
                })
            }
            this.setFramebufferScaleFactor = function(X) {
                s = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
            }, this.setReferenceSpaceType = function(X) {
                o = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
            }, this.getReferenceSpace = function() {
                return c || a
            }, this.setReferenceSpace = function(X) {
                c = X
            }, this.getBaseLayer = function() {
                return h !== null ? h : m
            }, this.getBinding = function() {
                return f
            }, this.getFrame = function() {
                return v
            }, this.getSession = function() {
                return r
            }, this.setSession = async function(X) {
                if (r = X, r !== null) {
                    if (u = e.getRenderTarget(), r.addEventListener("select", z), r.addEventListener("selectstart", z), r.addEventListener("selectend", z), r.addEventListener("squeeze", z), r.addEventListener("squeezestart", z), r.addEventListener("squeezeend", z), r.addEventListener("end", W), r.addEventListener("inputsourceschange", j), p.xrCompatible !== !0 && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(I), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
                        let Se = null,
                            le = null,
                            Me = null;
                        p.depth && (Me = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Se = p.stencil ? 1027 : 1026, le = p.stencil ? 1020 : 1014);
                        const Ve = {
                            colorFormat: t.RGBA8,
                            depthFormat: Me,
                            scaleFactor: s
                        };
                        f = new XRWebGLBinding(r, t), h = f.createProjectionLayer(Ve), r.updateRenderState({
                            layers: [h]
                        }), e.setPixelRatio(1), e.setSize(h.textureWidth, h.textureHeight, !1), A = new an(h.textureWidth, h.textureHeight, {
                            format: 1023,
                            type: 1009,
                            depthTexture: new qr(h.textureWidth, h.textureHeight, le, void 0, void 0, void 0, void 0, void 0, void 0, Se),
                            stencilBuffer: p.stencil,
                            colorSpace: e.outputColorSpace,
                            samples: p.antialias ? 4 : 0,
                            resolveDepthBuffer: h.ignoreDepthValues === !1,
                            resolveStencilBuffer: h.ignoreDepthValues === !1
                        })
                    } else {
                        const Se = {
                            antialias: p.antialias,
                            alpha: !0,
                            depth: p.depth,
                            stencil: p.stencil,
                            framebufferScaleFactor: s
                        };
                        m = new XRWebGLLayer(r, t, Se), r.updateRenderState({
                            baseLayer: m
                        }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), A = new an(m.framebufferWidth, m.framebufferHeight, {
                            format: 1023,
                            type: 1009,
                            colorSpace: e.outputColorSpace,
                            stencilBuffer: p.stencil,
                            resolveDepthBuffer: m.ignoreDepthValues === !1,
                            resolveStencilBuffer: m.ignoreDepthValues === !1
                        })
                    }
                    A.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), je.setContext(r), je.start(), n.isPresenting = !0, n.dispatchEvent({
                        type: "sessionstart"
                    })
                }
            }, this.getEnvironmentBlendMode = function() {
                if (r !== null) return r.environmentBlendMode
            }, this.getDepthTexture = function() {
                return S.getDepthTexture()
            };

            function j(X) {
                for (let te = 0; te < X.removed.length; te++) {
                    const Se = X.removed[te],
                        le = M.indexOf(Se);
                    le >= 0 && (M[le] = null, y[le].disconnect(Se))
                }
                for (let te = 0; te < X.added.length; te++) {
                    const Se = X.added[te];
                    let le = M.indexOf(Se);
                    if (le === -1) {
                        for (let Ve = 0; Ve < y.length; Ve++)
                            if (Ve >= M.length) {
                                M.push(Se), le = Ve;
                                break
                            } else if (M[Ve] === null) {
                            M[Ve] = Se, le = Ve;
                            break
                        }
                        if (le === -1) break
                    }
                    const Me = y[le];
                    Me && Me.connect(Se)
                }
            }
            const V = new B,
                ee = new B;

            function G(X, te, Se) {
                V.setFromMatrixPosition(te.matrixWorld), ee.setFromMatrixPosition(Se.matrixWorld);
                const le = V.distanceTo(ee),
                    Me = te.projectionMatrix.elements,
                    Ve = Se.projectionMatrix.elements,
                    Ce = Me[14] / (Me[10] - 1),
                    tt = Me[14] / (Me[10] + 1),
                    nt = (Me[9] + 1) / Me[5],
                    ke = (Me[9] - 1) / Me[5],
                    R = (Me[8] - 1) / Me[0],
                    vt = (Ve[8] + 1) / Ve[0],
                    We = Ce * R,
                    Je = Ce * vt,
                    ge = le / (-R + vt),
                    Ge = ge * -R;
                if (te.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(Ge), X.translateZ(ge), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), Me[10] === -1) X.projectionMatrix.copy(te.projectionMatrix), X.projectionMatrixInverse.copy(te.projectionMatrixInverse);
                else {
                    const ye = Ce + ge,
                        Fe = tt + ge,
                        ht = We - Ge,
                        T = Je + (le - Ge),
                        _ = nt * tt / Fe * ye,
                        F = ke * tt / Fe * ye;
                    X.projectionMatrix.makePerspective(ht, T, _, F, ye, Fe), X.projectionMatrixInverse.copy(X.projectionMatrix).invert()
                }
            }

            function oe(X, te) {
                te === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(te.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert()
            }
            this.updateCamera = function(X) {
                if (r === null) return;
                let te = X.near,
                    Se = X.far;
                S.texture !== null && (S.depthNear > 0 && (te = S.depthNear), S.depthFar > 0 && (Se = S.depthFar)), x.near = U.near = C.near = te, x.far = U.far = C.far = Se, (P !== x.near || q !== x.far) && (r.updateRenderState({
                    depthNear: x.near,
                    depthFar: x.far
                }), P = x.near, q = x.far), C.layers.mask = X.layers.mask | 2, U.layers.mask = X.layers.mask | 4, x.layers.mask = C.layers.mask | U.layers.mask;
                const le = X.parent,
                    Me = x.cameras;
                oe(x, le);
                for (let Ve = 0; Ve < Me.length; Ve++) oe(Me[Ve], le);
                Me.length === 2 ? G(x, C, U) : x.projectionMatrix.copy(C.projectionMatrix), de(X, x, le)
            };

            function de(X, te, Se) {
                Se === null ? X.matrix.copy(te.matrixWorld) : (X.matrix.copy(Se.matrixWorld), X.matrix.invert(), X.matrix.multiply(te.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(!0), X.projectionMatrix.copy(te.projectionMatrix), X.projectionMatrixInverse.copy(te.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = Fi * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1)
            }
            this.getCamera = function() {
                return x
            }, this.getFoveation = function() {
                if (!(h === null && m === null)) return l
            }, this.setFoveation = function(X) {
                l = X, h !== null && (h.fixedFoveation = X), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = X)
            }, this.hasDepthSensing = function() {
                return S.texture !== null
            }, this.getDepthSensingMesh = function() {
                return S.getMesh(x)
            };
            let Te = null;

            function Ne(X, te) {
                if (d = te.getViewerPose(c || a), v = te, d !== null) {
                    const Se = d.views;
                    m !== null && (e.setRenderTargetFramebuffer(A, m.framebuffer), e.setRenderTarget(A));
                    let le = !1;
                    Se.length !== x.cameras.length && (x.cameras.length = 0, le = !0);
                    for (let Ce = 0; Ce < Se.length; Ce++) {
                        const tt = Se[Ce];
                        let nt = null;
                        if (m !== null) nt = m.getViewport(tt);
                        else {
                            const R = f.getViewSubImage(h, tt);
                            nt = R.viewport, Ce === 0 && (e.setRenderTargetTextures(A, R.colorTexture, R.depthStencilTexture), e.setRenderTarget(A))
                        }
                        let ke = E[Ce];
                        ke === void 0 && (ke = new Ut, ke.layers.enable(Ce), ke.viewport = new at, E[Ce] = ke), ke.matrix.fromArray(tt.transform.matrix), ke.matrix.decompose(ke.position, ke.quaternion, ke.scale), ke.projectionMatrix.fromArray(tt.projectionMatrix), ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(), ke.viewport.set(nt.x, nt.y, nt.width, nt.height), Ce === 0 && (x.matrix.copy(ke.matrix), x.matrix.decompose(x.position, x.quaternion, x.scale)), le === !0 && x.cameras.push(ke)
                    }
                    const Me = r.enabledFeatures;
                    if (Me && Me.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && f) {
                        const Ce = f.getDepthInformation(Se[0]);
                        Ce && Ce.isValid && Ce.texture && S.init(e, Ce, r.renderState)
                    }
                }
                for (let Se = 0; Se < y.length; Se++) {
                    const le = M[Se],
                        Me = y[Se];
                    le !== null && Me !== void 0 && Me.update(le, te, c || a)
                }
                Te && Te(X, te), te.detectedPlanes && n.dispatchEvent({
                    type: "planesdetected",
                    data: te
                }), v = null
            }
            const je = new Kr;
            je.setAnimationLoop(Ne), this.setAnimationLoop = function(X) {
                Te = X
            }, this.dispose = function() {}
        }
    }
    const gn = new Wt,
        _u = new ot;

    function gu(i, e) {
        function t(p, u) {
            p.matrixAutoUpdate === !0 && p.updateMatrix(), u.value.copy(p.matrix)
        }

        function n(p, u) {
            u.color.getRGB(p.fogColor.value, Gr(i)), u.isFog ? (p.fogNear.value = u.near, p.fogFar.value = u.far) : u.isFogExp2 && (p.fogDensity.value = u.density)
        }

        function r(p, u, A, y, M) {
            u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(p, u) : u.isMeshToonMaterial ? (s(p, u), f(p, u)) : u.isMeshPhongMaterial ? (s(p, u), d(p, u)) : u.isMeshStandardMaterial ? (s(p, u), h(p, u), u.isMeshPhysicalMaterial && m(p, u, M)) : u.isMeshMatcapMaterial ? (s(p, u), v(p, u)) : u.isMeshDepthMaterial ? s(p, u) : u.isMeshDistanceMaterial ? (s(p, u), S(p, u)) : u.isMeshNormalMaterial ? s(p, u) : u.isLineBasicMaterial ? (a(p, u), u.isLineDashedMaterial && o(p, u)) : u.isPointsMaterial ? l(p, u, A, y) : u.isSpriteMaterial ? c(p, u) : u.isShadowMaterial ? (p.color.value.copy(u.color), p.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1)
        }

        function s(p, u) {
            p.opacity.value = u.opacity, u.color && p.diffuse.value.copy(u.color), u.emissive && p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.bumpMap && (p.bumpMap.value = u.bumpMap, t(u.bumpMap, p.bumpMapTransform), p.bumpScale.value = u.bumpScale, u.side === 1 && (p.bumpScale.value *= -1)), u.normalMap && (p.normalMap.value = u.normalMap, t(u.normalMap, p.normalMapTransform), p.normalScale.value.copy(u.normalScale), u.side === 1 && p.normalScale.value.negate()), u.displacementMap && (p.displacementMap.value = u.displacementMap, t(u.displacementMap, p.displacementMapTransform), p.displacementScale.value = u.displacementScale, p.displacementBias.value = u.displacementBias), u.emissiveMap && (p.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, p.emissiveMapTransform)), u.specularMap && (p.specularMap.value = u.specularMap, t(u.specularMap, p.specularMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
            const A = e.get(u),
                y = A.envMap,
                M = A.envMapRotation;
            y && (p.envMap.value = y, gn.copy(M), gn.x *= -1, gn.y *= -1, gn.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === !1 && (gn.y *= -1, gn.z *= -1), p.envMapRotation.value.setFromMatrix4(_u.makeRotationFromEuler(gn)), p.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = u.reflectivity, p.ior.value = u.ior, p.refractionRatio.value = u.refractionRatio), u.lightMap && (p.lightMap.value = u.lightMap, p.lightMapIntensity.value = u.lightMapIntensity, t(u.lightMap, p.lightMapTransform)), u.aoMap && (p.aoMap.value = u.aoMap, p.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, p.aoMapTransform))
        }

        function a(p, u) {
            p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, u.map && (p.map.value = u.map, t(u.map, p.mapTransform))
        }

        function o(p, u) {
            p.dashSize.value = u.dashSize, p.totalSize.value = u.dashSize + u.gapSize, p.scale.value = u.scale
        }

        function l(p, u, A, y) {
            p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.size.value = u.size * A, p.scale.value = y * .5, u.map && (p.map.value = u.map, t(u.map, p.uvTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest)
        }

        function c(p, u) {
            p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.rotation.value = u.rotation, u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest)
        }

        function d(p, u) {
            p.specular.value.copy(u.specular), p.shininess.value = Math.max(u.shininess, 1e-4)
        }

        function f(p, u) {
            u.gradientMap && (p.gradientMap.value = u.gradientMap)
        }

        function h(p, u) {
            p.metalness.value = u.metalness, u.metalnessMap && (p.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, p.metalnessMapTransform)), p.roughness.value = u.roughness, u.roughnessMap && (p.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, p.roughnessMapTransform)), u.envMap && (p.envMapIntensity.value = u.envMapIntensity)
        }

        function m(p, u, A) {
            p.ior.value = u.ior, u.sheen > 0 && (p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), p.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (p.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, p.sheenColorMapTransform)), u.sheenRoughnessMap && (p.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, p.sheenRoughnessMapTransform))), u.clearcoat > 0 && (p.clearcoat.value = u.clearcoat, p.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (p.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, p.clearcoatMapTransform)), u.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (p.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === 1 && p.clearcoatNormalScale.value.negate())), u.dispersion > 0 && (p.dispersion.value = u.dispersion), u.iridescence > 0 && (p.iridescence.value = u.iridescence, p.iridescenceIOR.value = u.iridescenceIOR, p.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (p.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, p.iridescenceMapTransform)), u.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), u.transmission > 0 && (p.transmission.value = u.transmission, p.transmissionSamplerMap.value = A.texture, p.transmissionSamplerSize.value.set(A.width, A.height), u.transmissionMap && (p.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, p.transmissionMapTransform)), p.thickness.value = u.thickness, u.thicknessMap && (p.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = u.attenuationDistance, p.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (p.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (p.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = u.specularIntensity, p.specularColor.value.copy(u.specularColor), u.specularColorMap && (p.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, p.specularColorMapTransform)), u.specularIntensityMap && (p.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, p.specularIntensityMapTransform))
        }

        function v(p, u) {
            u.matcap && (p.matcap.value = u.matcap)
        }

        function S(p, u) {
            const A = e.get(u).light;
            p.referencePosition.value.setFromMatrixPosition(A.matrixWorld), p.nearDistance.value = A.shadow.camera.near, p.farDistance.value = A.shadow.camera.far
        }
        return {
            refreshFogUniforms: n,
            refreshMaterialUniforms: r
        }
    }

    function vu(i, e, t, n) {
        let r = {},
            s = {},
            a = [];
        const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);

        function l(A, y) {
            const M = y.program;
            n.uniformBlockBinding(A, M)
        }

        function c(A, y) {
            let M = r[A.id];
            M === void 0 && (v(A), M = d(A), r[A.id] = M, A.addEventListener("dispose", p));
            const I = y.program;
            n.updateUBOMapping(A, I);
            const w = e.render.frame;
            s[A.id] !== w && (h(A), s[A.id] = w)
        }

        function d(A) {
            const y = f();
            A.__bindingPointIndex = y;
            const M = i.createBuffer(),
                I = A.__size,
                w = A.usage;
            return i.bindBuffer(i.UNIFORM_BUFFER, M), i.bufferData(i.UNIFORM_BUFFER, I, w), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, y, M), M
        }

        function f() {
            for (let A = 0; A < o; A++)
                if (a.indexOf(A) === -1) return a.push(A), A;
            return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0
        }

        function h(A) {
            const y = r[A.id],
                M = A.uniforms,
                I = A.__cache;
            i.bindBuffer(i.UNIFORM_BUFFER, y);
            for (let w = 0, C = M.length; w < C; w++) {
                const U = Array.isArray(M[w]) ? M[w] : [M[w]];
                for (let E = 0, x = U.length; E < x; E++) {
                    const P = U[E];
                    if (m(P, w, E, I) === !0) {
                        const q = P.__offset,
                            z = Array.isArray(P.value) ? P.value : [P.value];
                        let W = 0;
                        for (let j = 0; j < z.length; j++) {
                            const V = z[j],
                                ee = S(V);
                            typeof V == "number" || typeof V == "boolean" ? (P.__data[0] = V, i.bufferSubData(i.UNIFORM_BUFFER, q + W, P.__data)) : V.isMatrix3 ? (P.__data[0] = V.elements[0], P.__data[1] = V.elements[1], P.__data[2] = V.elements[2], P.__data[3] = 0, P.__data[4] = V.elements[3], P.__data[5] = V.elements[4], P.__data[6] = V.elements[5], P.__data[7] = 0, P.__data[8] = V.elements[6], P.__data[9] = V.elements[7], P.__data[10] = V.elements[8], P.__data[11] = 0) : (V.toArray(P.__data, W), W += ee.storage / Float32Array.BYTES_PER_ELEMENT)
                        }
                        i.bufferSubData(i.UNIFORM_BUFFER, q, P.__data)
                    }
                }
            }
            i.bindBuffer(i.UNIFORM_BUFFER, null)
        }

        function m(A, y, M, I) {
            const w = A.value,
                C = y + "_" + M;
            if (I[C] === void 0) return typeof w == "number" || typeof w == "boolean" ? I[C] = w : I[C] = w.clone(), !0; {
                const U = I[C];
                if (typeof w == "number" || typeof w == "boolean") {
                    if (U !== w) return I[C] = w, !0
                } else if (U.equals(w) === !1) return U.copy(w), !0
            }
            return !1
        }

        function v(A) {
            const y = A.uniforms;
            let M = 0;
            const I = 16;
            for (let C = 0, U = y.length; C < U; C++) {
                const E = Array.isArray(y[C]) ? y[C] : [y[C]];
                for (let x = 0, P = E.length; x < P; x++) {
                    const q = E[x],
                        z = Array.isArray(q.value) ? q.value : [q.value];
                    for (let W = 0, j = z.length; W < j; W++) {
                        const V = z[W],
                            ee = S(V),
                            G = M % I,
                            oe = G % ee.boundary,
                            de = G + oe;
                        M += oe, de !== 0 && I - de < ee.storage && (M += I - de), q.__data = new Float32Array(ee.storage / Float32Array.BYTES_PER_ELEMENT), q.__offset = M, M += ee.storage
                    }
                }
            }
            const w = M % I;
            return w > 0 && (M += I - w), A.__size = M, A.__cache = {}, this
        }

        function S(A) {
            const y = {
                boundary: 0,
                storage: 0
            };
            return typeof A == "number" || typeof A == "boolean" ? (y.boundary = 4, y.storage = 4) : A.isVector2 ? (y.boundary = 8, y.storage = 8) : A.isVector3 || A.isColor ? (y.boundary = 16, y.storage = 12) : A.isVector4 ? (y.boundary = 16, y.storage = 16) : A.isMatrix3 ? (y.boundary = 48, y.storage = 48) : A.isMatrix4 ? (y.boundary = 64, y.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), y
        }

        function p(A) {
            const y = A.target;
            y.removeEventListener("dispose", p);
            const M = a.indexOf(y.__bindingPointIndex);
            a.splice(M, 1), i.deleteBuffer(r[y.id]), delete r[y.id], delete s[y.id]
        }

        function u() {
            for (const A in r) i.deleteBuffer(r[A]);
            a = [], r = {}, s = {}
        }
        return {
            bind: l,
            update: c,
            dispose: u
        }
    }
    class xu {
        constructor(e = {}) {
            const {
                canvas: t = Us(),
                context: n = null,
                depth: r = !0,
                stencil: s = !1,
                alpha: a = !1,
                antialias: o = !1,
                premultipliedAlpha: l = !0,
                preserveDrawingBuffer: c = !1,
                powerPreference: d = "default",
                failIfMajorPerformanceCaveat: f = !1,
                reverseDepthBuffer: h = !1
            } = e;
            this.isWebGLRenderer = !0;
            let m;
            if (n !== null) {
                if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
                m = n.getContextAttributes().alpha
            } else m = a;
            const v = new Uint32Array(4),
                S = new Int32Array(4);
            let p = null,
                u = null;
            const A = [],
                y = [];
            this.domElement = t, this.debug = {
                checkShaderErrors: !0,
                onShaderError: null
            }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
            const M = this;
            let I = !1;
            this._outputColorSpace = Rt;
            let w = 0,
                C = 0,
                U = null,
                E = -1,
                x = null;
            const P = new at,
                q = new at;
            let z = null;
            const W = new Ke(0);
            let j = 0,
                V = t.width,
                ee = t.height,
                G = 1,
                oe = null,
                de = null;
            const Te = new at(0, 0, V, ee),
                Ne = new at(0, 0, V, ee);
            let je = !1;
            const X = new Xr;
            let te = !1,
                Se = !1;
            const le = new ot,
                Me = new ot,
                Ve = new B,
                Ce = new at,
                tt = {
                    background: null,
                    fog: null,
                    environment: null,
                    overrideMaterial: null,
                    isScene: !0
                };
            let nt = !1;

            function ke() {
                return U === null ? G : 1
            }
            let R = n;

            function vt(g, D) {
                return t.getContext(g, D)
            }
            try {
                const g = {
                    alpha: !0,
                    depth: r,
                    stencil: s,
                    antialias: o,
                    premultipliedAlpha: l,
                    preserveDrawingBuffer: c,
                    powerPreference: d,
                    failIfMajorPerformanceCaveat: f
                };
                if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Ii}`), t.addEventListener("webglcontextlost", fe, !1), t.addEventListener("webglcontextrestored", J, !1), t.addEventListener("webglcontextcreationerror", Y, !1), R === null) {
                    const D = "webgl2";
                    if (R = vt(D, g), R === null) throw vt(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
                }
            } catch (g) {
                throw console.error("THREE.WebGLRenderer: " + g.message), g
            }
            let We, Je, ge, Ge, ye, Fe, ht, T, _, F, k, $, H, ve, re, _e, xe, K, ue, be, Re, ie, De, b;

            function se() {
                We = new wl(R), We.init(), ie = new hu(R, We), Je = new El(R, We, e, ie), ge = new cu(R, We), Je.reverseDepthBuffer && h && ge.buffers.depth.setReversed(!0), Ge = new Ll(R), ye = new Zc, Fe = new uu(R, We, ge, ye, Je, ie, Ge), ht = new yl(M), T = new Cl(M), _ = new ga(R), De = new Sl(R, _), F = new Pl(R, _, Ge, De), k = new Ul(R, F, _, Ge), ue = new Il(R, Je, Fe), _e = new Tl(ye), $ = new Kc(M, ht, T, We, Je, De, _e), H = new gu(M, ye), ve = new Jc, re = new ru(We), K = new xl(M, ht, T, ge, k, m, l), xe = new ou(M, k, Je), b = new vu(R, Ge, Je, ge), be = new Ml(R, We, Ge), Re = new Dl(R, We, Ge), Ge.programs = $.programs, M.capabilities = Je, M.extensions = We, M.properties = ye, M.renderLists = ve, M.shadowMap = xe, M.state = ge, M.info = Ge
            }
            se();
            const Z = new mu(M, R);
            this.xr = Z, this.getContext = function() {
                return R
            }, this.getContextAttributes = function() {
                return R.getContextAttributes()
            }, this.forceContextLoss = function() {
                const g = We.get("WEBGL_lose_context");
                g && g.loseContext()
            }, this.forceContextRestore = function() {
                const g = We.get("WEBGL_lose_context");
                g && g.restoreContext()
            }, this.getPixelRatio = function() {
                return G
            }, this.setPixelRatio = function(g) {
                g !== void 0 && (G = g, this.setSize(V, ee, !1))
            }, this.getSize = function(g) {
                return g.set(V, ee)
            }, this.setSize = function(g, D, N = !0) {
                if (Z.isPresenting) {
                    console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                    return
                }
                V = g, ee = D, t.width = Math.floor(g * G), t.height = Math.floor(D * G), N === !0 && (t.style.width = g + "px", t.style.height = D + "px"), this.setViewport(0, 0, g, D)
            }, this.getDrawingBufferSize = function(g) {
                return g.set(V * G, ee * G).floor()
            }, this.setDrawingBufferSize = function(g, D, N) {
                V = g, ee = D, G = N, t.width = Math.floor(g * N), t.height = Math.floor(D * N), this.setViewport(0, 0, g, D)
            }, this.getCurrentViewport = function(g) {
                return g.copy(P)
            }, this.getViewport = function(g) {
                return g.copy(Te)
            }, this.setViewport = function(g, D, N, O) {
                g.isVector4 ? Te.set(g.x, g.y, g.z, g.w) : Te.set(g, D, N, O), ge.viewport(P.copy(Te).multiplyScalar(G).round())
            }, this.getScissor = function(g) {
                return g.copy(Ne)
            }, this.setScissor = function(g, D, N, O) {
                g.isVector4 ? Ne.set(g.x, g.y, g.z, g.w) : Ne.set(g, D, N, O), ge.scissor(q.copy(Ne).multiplyScalar(G).round())
            }, this.getScissorTest = function() {
                return je
            }, this.setScissorTest = function(g) {
                ge.setScissorTest(je = g)
            }, this.setOpaqueSort = function(g) {
                oe = g
            }, this.setTransparentSort = function(g) {
                de = g
            }, this.getClearColor = function(g) {
                return g.copy(K.getClearColor())
            }, this.setClearColor = function() {
                K.setClearColor(...arguments)
            }, this.getClearAlpha = function() {
                return K.getClearAlpha()
            }, this.setClearAlpha = function() {
                K.setClearAlpha(...arguments)
            }, this.clear = function(g = !0, D = !0, N = !0) {
                let O = 0;
                if (g) {
                    let L = !1;
                    if (U !== null) {
                        const Q = U.texture.format;
                        L = Q === 1033 || Q === 1031 || Q === 1029
                    }
                    if (L) {
                        const Q = U.texture.type,
                            ae = Q === 1009 || Q === 1014 || Q === 1012 || Q === 1020 || Q === 1017 || Q === 1018,
                            me = K.getClearColor(),
                            he = K.getClearAlpha(),
                            we = me.r,
                            Pe = me.g,
                            Ee = me.b;
                        ae ? (v[0] = we, v[1] = Pe, v[2] = Ee, v[3] = he, R.clearBufferuiv(R.COLOR, 0, v)) : (S[0] = we, S[1] = Pe, S[2] = Ee, S[3] = he, R.clearBufferiv(R.COLOR, 0, S))
                    } else O |= R.COLOR_BUFFER_BIT
                }
                D && (O |= R.DEPTH_BUFFER_BIT), N && (O |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(O)
            }, this.clearColor = function() {
                this.clear(!0, !1, !1)
            }, this.clearDepth = function() {
                this.clear(!1, !0, !1)
            }, this.clearStencil = function() {
                this.clear(!1, !1, !0)
            }, this.dispose = function() {
                t.removeEventListener("webglcontextlost", fe, !1), t.removeEventListener("webglcontextrestored", J, !1), t.removeEventListener("webglcontextcreationerror", Y, !1), K.dispose(), ve.dispose(), re.dispose(), ye.dispose(), ht.dispose(), T.dispose(), k.dispose(), De.dispose(), b.dispose(), $.dispose(), Z.dispose(), Z.removeEventListener("sessionstart", Rs), Z.removeEventListener("sessionend", bs), xn.stop()
            };

            function fe(g) {
                g.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), I = !0
            }

            function J() {
                console.log("THREE.WebGLRenderer: Context Restored."), I = !1;
                const g = Ge.autoReset,
                    D = xe.enabled,
                    N = xe.autoUpdate,
                    O = xe.needsUpdate,
                    L = xe.type;
                se(), Ge.autoReset = g, xe.enabled = D, xe.autoUpdate = N, xe.needsUpdate = O, xe.type = L
            }

            function Y(g) {
                console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", g.statusMessage)
            }

            function pe(g) {
                const D = g.target;
                D.removeEventListener("dispose", pe), Le(D)
            }

            function Le(g) {
                Qe(g), ye.remove(g)
            }

            function Qe(g) {
                const D = ye.get(g).programs;
                D !== void 0 && (D.forEach(function(N) {
                    $.releaseProgram(N)
                }), g.isShaderMaterial && $.releaseShaderCache(g))
            }
            this.renderBufferDirect = function(g, D, N, O, L, Q) {
                D === null && (D = tt);
                const ae = L.isMesh && L.matrixWorld.determinant() < 0,
                    me = Xu(g, D, N, O, L);
                ge.setMaterial(O, ae);
                let he = N.index,
                    we = 1;
                if (O.wireframe === !0) {
                    if (he = F.getWireframeAttribute(N), he === void 0) return;
                    we = 2
                }
                const Pe = N.drawRange,
                    Ee = N.attributes.position;
                let Be = Pe.start * we,
                    Ye = (Pe.start + Pe.count) * we;
                Q !== null && (Be = Math.max(Be, Q.start * we), Ye = Math.min(Ye, (Q.start + Q.count) * we)), he !== null ? (Be = Math.max(Be, 0), Ye = Math.min(Ye, he.count)) : Ee != null && (Be = Math.max(Be, 0), Ye = Math.min(Ye, Ee.count));
                const it = Ye - Be;
                if (it < 0 || it === 1 / 0) return;
                De.setup(L, O, me, N, he);
                let st, He = be;
                if (he !== null && (st = _.get(he), He = Re, He.setIndex(st)), L.isMesh) O.wireframe === !0 ? (ge.setLineWidth(O.wireframeLinewidth * ke()), He.setMode(R.LINES)) : He.setMode(R.TRIANGLES);
                else if (L.isLine) {
                    let Ae = O.linewidth;
                    Ae === void 0 && (Ae = 1), ge.setLineWidth(Ae * ke()), L.isLineSegments ? He.setMode(R.LINES) : L.isLineLoop ? He.setMode(R.LINE_LOOP) : He.setMode(R.LINE_STRIP)
                } else L.isPoints ? He.setMode(R.POINTS) : L.isSprite && He.setMode(R.TRIANGLES);
                if (L.isBatchedMesh)
                    if (L._multiDrawInstances !== null) Tn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), He.renderMultiDrawInstances(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount, L._multiDrawInstances);
                    else if (We.get("WEBGL_multi_draw")) He.renderMultiDraw(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount);
                else {
                    const Ae = L._multiDrawStarts,
                        ft = L._multiDrawCounts,
                        Xe = L._multiDrawCount,
                        Nt = he ? _.get(he).bytesPerElement : 1,
                        kn = ye.get(O).currentProgram.getUniforms();
                    for (let At = 0; At < Xe; At++) kn.setValue(R, "_gl_DrawID", At), He.render(Ae[At] / Nt, ft[At])
                } else if (L.isInstancedMesh) He.renderInstances(Be, it, L.count);
                else if (N.isInstancedBufferGeometry) {
                    const Ae = N._maxInstanceCount !== void 0 ? N._maxInstanceCount : 1 / 0,
                        ft = Math.min(N.instanceCount, Ae);
                    He.renderInstances(Be, it, ft)
                } else He.render(Be, it)
            };

            function qe(g, D, N) {
                g.transparent === !0 && g.side === 2 && g.forceSinglePass === !1 ? (g.side = 1, g.needsUpdate = !0, Li(g, D, N), g.side = 0, g.needsUpdate = !0, Li(g, D, N), g.side = 2) : Li(g, D, N)
            }
            this.compile = function(g, D, N = null) {
                N === null && (N = g), u = re.get(N), u.init(D), y.push(u), N.traverseVisible(function(L) {
                    L.isLight && L.layers.test(D.layers) && (u.pushLight(L), L.castShadow && u.pushShadow(L))
                }), g !== N && g.traverseVisible(function(L) {
                    L.isLight && L.layers.test(D.layers) && (u.pushLight(L), L.castShadow && u.pushShadow(L))
                }), u.setupLights();
                const O = new Set;
                return g.traverse(function(L) {
                    if (!(L.isMesh || L.isPoints || L.isLine || L.isSprite)) return;
                    const Q = L.material;
                    if (Q)
                        if (Array.isArray(Q))
                            for (let ae = 0; ae < Q.length; ae++) {
                                const me = Q[ae];
                                qe(me, N, L), O.add(me)
                            } else qe(Q, N, L), O.add(Q)
                }), u = y.pop(), O
            }, this.compileAsync = function(g, D, N = null) {
                const O = this.compile(g, D, N);
                return new Promise(L => {
                    function Q() {
                        if (O.forEach(function(ae) {
                                ye.get(ae).currentProgram.isReady() && O.delete(ae)
                            }), O.size === 0) {
                            L(g);
                            return
                        }
                        setTimeout(Q, 10)
                    }
                    We.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10)
                })
            };
            let Ft = null;

            function $t(g) {
                Ft && Ft(g)
            }

            function Rs() {
                xn.stop()
            }

            function bs() {
                xn.start()
            }
            const xn = new Kr;
            xn.setAnimationLoop($t), typeof self < "u" && xn.setContext(self), this.setAnimationLoop = function(g) {
                Ft = g, Z.setAnimationLoop(g), g === null ? xn.stop() : xn.start()
            }, Z.addEventListener("sessionstart", Rs), Z.addEventListener("sessionend", bs), this.render = function(g, D) {
                if (D !== void 0 && D.isCamera !== !0) {
                    console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                    return
                }
                if (I === !0) return;
                if (g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === !0 && D.updateMatrixWorld(), Z.enabled === !0 && Z.isPresenting === !0 && (Z.cameraAutoUpdate === !0 && Z.updateCamera(D), D = Z.getCamera()), g.isScene === !0 && g.onBeforeRender(M, g, D, U), u = re.get(g, y.length), u.init(D), y.push(u), Me.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), X.setFromProjectionMatrix(Me), Se = this.localClippingEnabled, te = _e.init(this.clippingPlanes, Se), p = ve.get(g, A.length), p.init(), A.push(p), Z.enabled === !0 && Z.isPresenting === !0) {
                    const Q = M.xr.getDepthSensingMesh();
                    Q !== null && _r(Q, D, -1 / 0, M.sortObjects)
                }
                _r(g, D, 0, M.sortObjects), p.finish(), M.sortObjects === !0 && p.sort(oe, de), nt = Z.enabled === !1 || Z.isPresenting === !1 || Z.hasDepthSensing() === !1, nt && K.addToRenderList(p, g), this.info.render.frame++, te === !0 && _e.beginShadows();
                const N = u.state.shadowsArray;
                xe.render(N, g, D), te === !0 && _e.endShadows(), this.info.autoReset === !0 && this.info.reset();
                const O = p.opaque,
                    L = p.transmissive;
                if (u.setupLights(), D.isArrayCamera) {
                    const Q = D.cameras;
                    if (L.length > 0)
                        for (let ae = 0, me = Q.length; ae < me; ae++) {
                            const he = Q[ae];
                            ws(O, L, g, he)
                        }
                    nt && K.render(g);
                    for (let ae = 0, me = Q.length; ae < me; ae++) {
                        const he = Q[ae];
                        Cs(p, g, he, he.viewport)
                    }
                } else L.length > 0 && ws(O, L, g, D), nt && K.render(g), Cs(p, g, D);
                U !== null && C === 0 && (Fe.updateMultisampleRenderTarget(U), Fe.updateRenderTargetMipmap(U)), g.isScene === !0 && g.onAfterRender(M, g, D), De.resetDefaultState(), E = -1, x = null, y.pop(), y.length > 0 ? (u = y[y.length - 1], te === !0 && _e.setGlobalState(M.clippingPlanes, u.state.camera)) : u = null, A.pop(), A.length > 0 ? p = A[A.length - 1] : p = null
            };

            function _r(g, D, N, O) {
                if (g.visible === !1) return;
                if (g.layers.test(D.layers)) {
                    if (g.isGroup) N = g.renderOrder;
                    else if (g.isLOD) g.autoUpdate === !0 && g.update(D);
                    else if (g.isLight) u.pushLight(g), g.castShadow && u.pushShadow(g);
                    else if (g.isSprite) {
                        if (!g.frustumCulled || X.intersectsSprite(g)) {
                            O && Ce.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Me);
                            const ae = k.update(g),
                                me = g.material;
                            me.visible && p.push(g, ae, me, N, Ce.z, null)
                        }
                    } else if ((g.isMesh || g.isLine || g.isPoints) && (!g.frustumCulled || X.intersectsObject(g))) {
                        const ae = k.update(g),
                            me = g.material;
                        if (O && (g.boundingSphere !== void 0 ? (g.boundingSphere === null && g.computeBoundingSphere(), Ce.copy(g.boundingSphere.center)) : (ae.boundingSphere === null && ae.computeBoundingSphere(), Ce.copy(ae.boundingSphere.center)), Ce.applyMatrix4(g.matrixWorld).applyMatrix4(Me)), Array.isArray(me)) {
                            const he = ae.groups;
                            for (let we = 0, Pe = he.length; we < Pe; we++) {
                                const Ee = he[we],
                                    Be = me[Ee.materialIndex];
                                Be && Be.visible && p.push(g, ae, Be, N, Ce.z, Ee)
                            }
                        } else me.visible && p.push(g, ae, me, N, Ce.z, null)
                    }
                }
                const Q = g.children;
                for (let ae = 0, me = Q.length; ae < me; ae++) _r(Q[ae], D, N, O)
            }

            function Cs(g, D, N, O) {
                const L = g.opaque,
                    Q = g.transmissive,
                    ae = g.transparent;
                u.setupLightsView(N), te === !0 && _e.setGlobalState(M.clippingPlanes, N), O && ge.viewport(P.copy(O)), L.length > 0 && Di(L, D, N), Q.length > 0 && Di(Q, D, N), ae.length > 0 && Di(ae, D, N), ge.buffers.depth.setTest(!0), ge.buffers.depth.setMask(!0), ge.buffers.color.setMask(!0), ge.setPolygonOffset(!1)
            }

            function ws(g, D, N, O) {
                if ((N.isScene === !0 ? N.overrideMaterial : null) !== null) return;
                u.state.transmissionRenderTarget[O.id] === void 0 && (u.state.transmissionRenderTarget[O.id] = new an(1, 1, {
                    generateMipmaps: !0,
                    type: We.has("EXT_color_buffer_half_float") || We.has("EXT_color_buffer_float") ? 1016 : 1009,
                    minFilter: 1008,
                    samples: 4,
                    stencilBuffer: s,
                    resolveDepthBuffer: !1,
                    resolveStencilBuffer: !1,
                    colorSpace: ze.workingColorSpace
                }));
                const Q = u.state.transmissionRenderTarget[O.id],
                    ae = O.viewport || P;
                Q.setSize(ae.z * M.transmissionResolutionScale, ae.w * M.transmissionResolutionScale);
                const me = M.getRenderTarget();
                M.setRenderTarget(Q), M.getClearColor(W), j = M.getClearAlpha(), j < 1 && M.setClearColor(16777215, .5), M.clear(), nt && K.render(N);
                const he = M.toneMapping;
                M.toneMapping = 0;
                const we = O.viewport;
                if (O.viewport !== void 0 && (O.viewport = void 0), u.setupLightsView(O), te === !0 && _e.setGlobalState(M.clippingPlanes, O), Di(g, N, O), Fe.updateMultisampleRenderTarget(Q), Fe.updateRenderTargetMipmap(Q), We.has("WEBGL_multisampled_render_to_texture") === !1) {
                    let Pe = !1;
                    for (let Ee = 0, Be = D.length; Ee < Be; Ee++) {
                        const Ye = D[Ee],
                            it = Ye.object,
                            st = Ye.geometry,
                            He = Ye.material,
                            Ae = Ye.group;
                        if (He.side === 2 && it.layers.test(O.layers)) {
                            const ft = He.side;
                            He.side = 1, He.needsUpdate = !0, Ps(it, N, O, st, He, Ae), He.side = ft, He.needsUpdate = !0, Pe = !0
                        }
                    }
                    Pe === !0 && (Fe.updateMultisampleRenderTarget(Q), Fe.updateRenderTargetMipmap(Q))
                }
                M.setRenderTarget(me), M.setClearColor(W, j), we !== void 0 && (O.viewport = we), M.toneMapping = he
            }

            function Di(g, D, N) {
                const O = D.isScene === !0 ? D.overrideMaterial : null;
                for (let L = 0, Q = g.length; L < Q; L++) {
                    const ae = g[L],
                        me = ae.object,
                        he = ae.geometry,
                        we = ae.group;
                    let Pe = ae.material;
                    Pe.allowOverride === !0 && O !== null && (Pe = O), me.layers.test(N.layers) && Ps(me, D, N, he, Pe, we)
                }
            }

            function Ps(g, D, N, O, L, Q) {
                g.onBeforeRender(M, D, N, O, L, Q), g.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, g.matrixWorld), g.normalMatrix.getNormalMatrix(g.modelViewMatrix), L.onBeforeRender(M, D, N, O, g, Q), L.transparent === !0 && L.side === 2 && L.forceSinglePass === !1 ? (L.side = 1, L.needsUpdate = !0, M.renderBufferDirect(N, D, O, L, g, Q), L.side = 0, L.needsUpdate = !0, M.renderBufferDirect(N, D, O, L, g, Q), L.side = 2) : M.renderBufferDirect(N, D, O, L, g, Q), g.onAfterRender(M, D, N, O, L, Q)
            }

            function Li(g, D, N) {
                D.isScene !== !0 && (D = tt);
                const O = ye.get(g),
                    L = u.state.lights,
                    Q = u.state.shadowsArray,
                    ae = L.state.version,
                    me = $.getParameters(g, L.state, Q, D, N),
                    he = $.getProgramCacheKey(me);
                let we = O.programs;
                O.environment = g.isMeshStandardMaterial ? D.environment : null, O.fog = D.fog, O.envMap = (g.isMeshStandardMaterial ? T : ht).get(g.envMap || O.environment), O.envMapRotation = O.environment !== null && g.envMap === null ? D.environmentRotation : g.envMapRotation, we === void 0 && (g.addEventListener("dispose", pe), we = new Map, O.programs = we);
                let Pe = we.get(he);
                if (Pe !== void 0) {
                    if (O.currentProgram === Pe && O.lightsStateVersion === ae) return Ls(g, me), Pe
                } else me.uniforms = $.getUniforms(g), g.onBeforeCompile(me, M), Pe = $.acquireProgram(me, he), we.set(he, Pe), O.uniforms = me.uniforms;
                const Ee = O.uniforms;
                return (!g.isShaderMaterial && !g.isRawShaderMaterial || g.clipping === !0) && (Ee.clippingPlanes = _e.uniform), Ls(g, me), O.needsLights = Yu(g), O.lightsStateVersion = ae, O.needsLights && (Ee.ambientLightColor.value = L.state.ambient, Ee.lightProbe.value = L.state.probe, Ee.directionalLights.value = L.state.directional, Ee.directionalLightShadows.value = L.state.directionalShadow, Ee.spotLights.value = L.state.spot, Ee.spotLightShadows.value = L.state.spotShadow, Ee.rectAreaLights.value = L.state.rectArea, Ee.ltc_1.value = L.state.rectAreaLTC1, Ee.ltc_2.value = L.state.rectAreaLTC2, Ee.pointLights.value = L.state.point, Ee.pointLightShadows.value = L.state.pointShadow, Ee.hemisphereLights.value = L.state.hemi, Ee.directionalShadowMap.value = L.state.directionalShadowMap, Ee.directionalShadowMatrix.value = L.state.directionalShadowMatrix, Ee.spotShadowMap.value = L.state.spotShadowMap, Ee.spotLightMatrix.value = L.state.spotLightMatrix, Ee.spotLightMap.value = L.state.spotLightMap, Ee.pointShadowMap.value = L.state.pointShadowMap, Ee.pointShadowMatrix.value = L.state.pointShadowMatrix), O.currentProgram = Pe, O.uniformsList = null, Pe
            }

            function Ds(g) {
                if (g.uniformsList === null) {
                    const D = g.currentProgram.getUniforms();
                    g.uniformsList = bi.seqWithValue(D.seq, g.uniforms)
                }
                return g.uniformsList
            }

            function Ls(g, D) {
                const N = ye.get(g);
                N.outputColorSpace = D.outputColorSpace, N.batching = D.batching, N.batchingColor = D.batchingColor, N.instancing = D.instancing, N.instancingColor = D.instancingColor, N.instancingMorph = D.instancingMorph, N.skinning = D.skinning, N.morphTargets = D.morphTargets, N.morphNormals = D.morphNormals, N.morphColors = D.morphColors, N.morphTargetsCount = D.morphTargetsCount, N.numClippingPlanes = D.numClippingPlanes, N.numIntersection = D.numClipIntersection, N.vertexAlphas = D.vertexAlphas, N.vertexTangents = D.vertexTangents, N.toneMapping = D.toneMapping
            }

            function Xu(g, D, N, O, L) {
                D.isScene !== !0 && (D = tt), Fe.resetTextureUnits();
                const Q = D.fog,
                    ae = O.isMeshStandardMaterial ? D.environment : null,
                    me = U === null ? M.outputColorSpace : U.isXRRenderTarget === !0 ? U.texture.colorSpace : Mn,
                    he = (O.isMeshStandardMaterial ? T : ht).get(O.envMap || ae),
                    we = O.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4,
                    Pe = !!N.attributes.tangent && (!!O.normalMap || O.anisotropy > 0),
                    Ee = !!N.morphAttributes.position,
                    Be = !!N.morphAttributes.normal,
                    Ye = !!N.morphAttributes.color;
                let it = 0;
                O.toneMapped && (U === null || U.isXRRenderTarget === !0) && (it = M.toneMapping);
                const st = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color,
                    He = st !== void 0 ? st.length : 0,
                    Ae = ye.get(O),
                    ft = u.state.lights;
                if (te === !0 && (Se === !0 || g !== x)) {
                    const xt = g === x && O.id === E;
                    _e.setState(O, g, xt)
                }
                let Xe = !1;
                O.version === Ae.__version ? (Ae.needsLights && Ae.lightsStateVersion !== ft.state.version || Ae.outputColorSpace !== me || L.isBatchedMesh && Ae.batching === !1 || !L.isBatchedMesh && Ae.batching === !0 || L.isBatchedMesh && Ae.batchingColor === !0 && L.colorTexture === null || L.isBatchedMesh && Ae.batchingColor === !1 && L.colorTexture !== null || L.isInstancedMesh && Ae.instancing === !1 || !L.isInstancedMesh && Ae.instancing === !0 || L.isSkinnedMesh && Ae.skinning === !1 || !L.isSkinnedMesh && Ae.skinning === !0 || L.isInstancedMesh && Ae.instancingColor === !0 && L.instanceColor === null || L.isInstancedMesh && Ae.instancingColor === !1 && L.instanceColor !== null || L.isInstancedMesh && Ae.instancingMorph === !0 && L.morphTexture === null || L.isInstancedMesh && Ae.instancingMorph === !1 && L.morphTexture !== null || Ae.envMap !== he || O.fog === !0 && Ae.fog !== Q || Ae.numClippingPlanes !== void 0 && (Ae.numClippingPlanes !== _e.numPlanes || Ae.numIntersection !== _e.numIntersection) || Ae.vertexAlphas !== we || Ae.vertexTangents !== Pe || Ae.morphTargets !== Ee || Ae.morphNormals !== Be || Ae.morphColors !== Ye || Ae.toneMapping !== it || Ae.morphTargetsCount !== He) && (Xe = !0) : (Xe = !0, Ae.__version = O.version);
                let Nt = Ae.currentProgram;
                Xe === !0 && (Nt = Li(O, D, L));
                let kn = !1,
                    At = !1,
                    ii = !1;
                const et = Nt.getUniforms(),
                    Ct = Ae.uniforms;
                if (ge.useProgram(Nt.program) && (kn = !0, At = !0, ii = !0), O.id !== E && (E = O.id, At = !0), kn || x !== g) {
                    ge.buffers.depth.getReversed() ? (le.copy(g.projectionMatrix), Ns(le), Os(le), et.setValue(R, "projectionMatrix", le)) : et.setValue(R, "projectionMatrix", g.projectionMatrix), et.setValue(R, "viewMatrix", g.matrixWorldInverse);
                    const Mt = et.map.cameraPosition;
                    Mt !== void 0 && Mt.setValue(R, Ve.setFromMatrixPosition(g.matrixWorld)), Je.logarithmicDepthBuffer && et.setValue(R, "logDepthBufFC", 2 / (Math.log(g.far + 1) / Math.LN2)), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && et.setValue(R, "isOrthographic", g.isOrthographicCamera === !0), x !== g && (x = g, At = !0, ii = !0)
                }
                if (L.isSkinnedMesh) {
                    et.setOptional(R, L, "bindMatrix"), et.setOptional(R, L, "bindMatrixInverse");
                    const xt = L.skeleton;
                    xt && (xt.boneTexture === null && xt.computeBoneTexture(), et.setValue(R, "boneTexture", xt.boneTexture, Fe))
                }
                L.isBatchedMesh && (et.setOptional(R, L, "batchingTexture"), et.setValue(R, "batchingTexture", L._matricesTexture, Fe), et.setOptional(R, L, "batchingIdTexture"), et.setValue(R, "batchingIdTexture", L._indirectTexture, Fe), et.setOptional(R, L, "batchingColorTexture"), L._colorsTexture !== null && et.setValue(R, "batchingColorTexture", L._colorsTexture, Fe));
                const wt = N.morphAttributes;
                if ((wt.position !== void 0 || wt.normal !== void 0 || wt.color !== void 0) && ue.update(L, N, Nt), (At || Ae.receiveShadow !== L.receiveShadow) && (Ae.receiveShadow = L.receiveShadow, et.setValue(R, "receiveShadow", L.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (Ct.envMap.value = he, Ct.flipEnvMap.value = he.isCubeTexture && he.isRenderTargetTexture === !1 ? -1 : 1), O.isMeshStandardMaterial && O.envMap === null && D.environment !== null && (Ct.envMapIntensity.value = D.environmentIntensity), At && (et.setValue(R, "toneMappingExposure", M.toneMappingExposure), Ae.needsLights && qu(Ct, ii), Q && O.fog === !0 && H.refreshFogUniforms(Ct, Q), H.refreshMaterialUniforms(Ct, O, G, ee, u.state.transmissionRenderTarget[g.id]), bi.upload(R, Ds(Ae), Ct, Fe)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (bi.upload(R, Ds(Ae), Ct, Fe), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && et.setValue(R, "center", L.center), et.setValue(R, "modelViewMatrix", L.modelViewMatrix), et.setValue(R, "normalMatrix", L.normalMatrix), et.setValue(R, "modelMatrix", L.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) {
                    const xt = O.uniformsGroups;
                    for (let Mt = 0, gr = xt.length; Mt < gr; Mt++) {
                        const Sn = xt[Mt];
                        b.update(Sn, Nt), b.bind(Sn, Nt)
                    }
                }
                return Nt
            }

            function qu(g, D) {
                g.ambientLightColor.needsUpdate = D, g.lightProbe.needsUpdate = D, g.directionalLights.needsUpdate = D, g.directionalLightShadows.needsUpdate = D, g.pointLights.needsUpdate = D, g.pointLightShadows.needsUpdate = D, g.spotLights.needsUpdate = D, g.spotLightShadows.needsUpdate = D, g.rectAreaLights.needsUpdate = D, g.hemisphereLights.needsUpdate = D
            }

            function Yu(g) {
                return g.isMeshLambertMaterial || g.isMeshToonMaterial || g.isMeshPhongMaterial || g.isMeshStandardMaterial || g.isShadowMaterial || g.isShaderMaterial && g.lights === !0
            }
            this.getActiveCubeFace = function() {
                return w
            }, this.getActiveMipmapLevel = function() {
                return C
            }, this.getRenderTarget = function() {
                return U
            }, this.setRenderTargetTextures = function(g, D, N) {
                const O = ye.get(g);
                O.__autoAllocateDepthBuffer = g.resolveDepthBuffer === !1, O.__autoAllocateDepthBuffer === !1 && (O.__useRenderToTexture = !1), ye.get(g.texture).__webglTexture = D, ye.get(g.depthTexture).__webglTexture = O.__autoAllocateDepthBuffer ? void 0 : N, O.__hasExternalTextures = !0
            }, this.setRenderTargetFramebuffer = function(g, D) {
                const N = ye.get(g);
                N.__webglFramebuffer = D, N.__useDefaultFramebuffer = D === void 0
            };
            const $u = R.createFramebuffer();
            this.setRenderTarget = function(g, D = 0, N = 0) {
                U = g, w = D, C = N;
                let O = !0,
                    L = null,
                    Q = !1,
                    ae = !1;
                if (g) {
                    const he = ye.get(g);
                    if (he.__useDefaultFramebuffer !== void 0) ge.bindFramebuffer(R.FRAMEBUFFER, null), O = !1;
                    else if (he.__webglFramebuffer === void 0) Fe.setupRenderTarget(g);
                    else if (he.__hasExternalTextures) Fe.rebindTextures(g, ye.get(g.texture).__webglTexture, ye.get(g.depthTexture).__webglTexture);
                    else if (g.depthBuffer) {
                        const Ee = g.depthTexture;
                        if (he.__boundDepthTexture !== Ee) {
                            if (Ee !== null && ye.has(Ee) && (g.width !== Ee.image.width || g.height !== Ee.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
                            Fe.setupDepthRenderbuffer(g)
                        }
                    }
                    const we = g.texture;
                    (we.isData3DTexture || we.isDataArrayTexture || we.isCompressedArrayTexture) && (ae = !0);
                    const Pe = ye.get(g).__webglFramebuffer;
                    g.isWebGLCubeRenderTarget ? (Array.isArray(Pe[D]) ? L = Pe[D][N] : L = Pe[D], Q = !0) : g.samples > 0 && Fe.useMultisampledRTT(g) === !1 ? L = ye.get(g).__webglMultisampledFramebuffer : Array.isArray(Pe) ? L = Pe[N] : L = Pe, P.copy(g.viewport), q.copy(g.scissor), z = g.scissorTest
                } else P.copy(Te).multiplyScalar(G).floor(), q.copy(Ne).multiplyScalar(G).floor(), z = je;
                if (N !== 0 && (L = $u), ge.bindFramebuffer(R.FRAMEBUFFER, L) && O && ge.drawBuffers(g, L), ge.viewport(P), ge.scissor(q), ge.setScissorTest(z), Q) {
                    const he = ye.get(g.texture);
                    R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + D, he.__webglTexture, N)
                } else if (ae) {
                    const he = ye.get(g.texture),
                        we = D;
                    R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, he.__webglTexture, N, we)
                } else if (g !== null && N !== 0) {
                    const he = ye.get(g.texture);
                    R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, he.__webglTexture, N)
                }
                E = -1
            }, this.readRenderTargetPixels = function(g, D, N, O, L, Q, ae, me = 0) {
                if (!(g && g.isWebGLRenderTarget)) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                    return
                }
                let he = ye.get(g).__webglFramebuffer;
                if (g.isWebGLCubeRenderTarget && ae !== void 0 && (he = he[ae]), he) {
                    ge.bindFramebuffer(R.FRAMEBUFFER, he);
                    try {
                        const we = g.textures[me],
                            Pe = we.format,
                            Ee = we.type;
                        if (!Je.textureFormatReadable(Pe)) {
                            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                            return
                        }
                        if (!Je.textureTypeReadable(Ee)) {
                            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                            return
                        }
                        D >= 0 && D <= g.width - O && N >= 0 && N <= g.height - L && (g.textures.length > 1 && R.readBuffer(R.COLOR_ATTACHMENT0 + me), R.readPixels(D, N, O, L, ie.convert(Pe), ie.convert(Ee), Q))
                    } finally {
                        const we = U !== null ? ye.get(U).__webglFramebuffer : null;
                        ge.bindFramebuffer(R.FRAMEBUFFER, we)
                    }
                }
            }, this.readRenderTargetPixelsAsync = async function(g, D, N, O, L, Q, ae, me = 0) {
                if (!(g && g.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                let he = ye.get(g).__webglFramebuffer;
                if (g.isWebGLCubeRenderTarget && ae !== void 0 && (he = he[ae]), he)
                    if (D >= 0 && D <= g.width - O && N >= 0 && N <= g.height - L) {
                        ge.bindFramebuffer(R.FRAMEBUFFER, he);
                        const we = g.textures[me],
                            Pe = we.format,
                            Ee = we.type;
                        if (!Je.textureFormatReadable(Pe)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
                        if (!Je.textureTypeReadable(Ee)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
                        const Be = R.createBuffer();
                        R.bindBuffer(R.PIXEL_PACK_BUFFER, Be), R.bufferData(R.PIXEL_PACK_BUFFER, Q.byteLength, R.STREAM_READ), g.textures.length > 1 && R.readBuffer(R.COLOR_ATTACHMENT0 + me), R.readPixels(D, N, O, L, ie.convert(Pe), ie.convert(Ee), 0);
                        const Ye = U !== null ? ye.get(U).__webglFramebuffer : null;
                        ge.bindFramebuffer(R.FRAMEBUFFER, Ye);
                        const it = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
                        return R.flush(), await Fs(R, it, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, Be), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, Q), R.deleteBuffer(Be), R.deleteSync(it), Q
                    } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")
            }, this.copyFramebufferToTexture = function(g, D = null, N = 0) {
                const O = Math.pow(2, -N),
                    L = Math.floor(g.image.width * O),
                    Q = Math.floor(g.image.height * O),
                    ae = D !== null ? D.x : 0,
                    me = D !== null ? D.y : 0;
                Fe.setTexture2D(g, 0), R.copyTexSubImage2D(R.TEXTURE_2D, N, 0, 0, ae, me, L, Q), ge.unbindTexture()
            };
            const Ku = R.createFramebuffer(),
                Zu = R.createFramebuffer();
            this.copyTextureToTexture = function(g, D, N = null, O = null, L = 0, Q = null) {
                Q === null && (L !== 0 ? (Tn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), Q = L, L = 0) : Q = 0);
                let ae, me, he, we, Pe, Ee, Be, Ye, it;
                const st = g.isCompressedTexture ? g.mipmaps[Q] : g.image;
                if (N !== null) ae = N.max.x - N.min.x, me = N.max.y - N.min.y, he = N.isBox3 ? N.max.z - N.min.z : 1, we = N.min.x, Pe = N.min.y, Ee = N.isBox3 ? N.min.z : 0;
                else {
                    const wt = Math.pow(2, -L);
                    ae = Math.floor(st.width * wt), me = Math.floor(st.height * wt), g.isDataArrayTexture ? he = st.depth : g.isData3DTexture ? he = Math.floor(st.depth * wt) : he = 1, we = 0, Pe = 0, Ee = 0
                }
                O !== null ? (Be = O.x, Ye = O.y, it = O.z) : (Be = 0, Ye = 0, it = 0);
                const He = ie.convert(D.format),
                    Ae = ie.convert(D.type);
                let ft;
                D.isData3DTexture ? (Fe.setTexture3D(D, 0), ft = R.TEXTURE_3D) : D.isDataArrayTexture || D.isCompressedArrayTexture ? (Fe.setTexture2DArray(D, 0), ft = R.TEXTURE_2D_ARRAY) : (Fe.setTexture2D(D, 0), ft = R.TEXTURE_2D), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, D.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, D.unpackAlignment);
                const Xe = R.getParameter(R.UNPACK_ROW_LENGTH),
                    Nt = R.getParameter(R.UNPACK_IMAGE_HEIGHT),
                    kn = R.getParameter(R.UNPACK_SKIP_PIXELS),
                    At = R.getParameter(R.UNPACK_SKIP_ROWS),
                    ii = R.getParameter(R.UNPACK_SKIP_IMAGES);
                R.pixelStorei(R.UNPACK_ROW_LENGTH, st.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, st.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, we), R.pixelStorei(R.UNPACK_SKIP_ROWS, Pe), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Ee);
                const et = g.isDataArrayTexture || g.isData3DTexture,
                    Ct = D.isDataArrayTexture || D.isData3DTexture;
                if (g.isDepthTexture) {
                    const wt = ye.get(g),
                        xt = ye.get(D),
                        Mt = ye.get(wt.__renderTarget),
                        gr = ye.get(xt.__renderTarget);
                    ge.bindFramebuffer(R.READ_FRAMEBUFFER, Mt.__webglFramebuffer), ge.bindFramebuffer(R.DRAW_FRAMEBUFFER, gr.__webglFramebuffer);
                    for (let Sn = 0; Sn < he; Sn++) et && (R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, ye.get(g).__webglTexture, L, Ee + Sn), R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, ye.get(D).__webglTexture, Q, it + Sn)), R.blitFramebuffer(we, Pe, ae, me, Be, Ye, ae, me, R.DEPTH_BUFFER_BIT, R.NEAREST);
                    ge.bindFramebuffer(R.READ_FRAMEBUFFER, null), ge.bindFramebuffer(R.DRAW_FRAMEBUFFER, null)
                } else if (L !== 0 || g.isRenderTargetTexture || ye.has(g)) {
                    const wt = ye.get(g),
                        xt = ye.get(D);
                    ge.bindFramebuffer(R.READ_FRAMEBUFFER, Ku), ge.bindFramebuffer(R.DRAW_FRAMEBUFFER, Zu);
                    for (let Mt = 0; Mt < he; Mt++) et ? R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, wt.__webglTexture, L, Ee + Mt) : R.framebufferTexture2D(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, wt.__webglTexture, L), Ct ? R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, xt.__webglTexture, Q, it + Mt) : R.framebufferTexture2D(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, xt.__webglTexture, Q), L !== 0 ? R.blitFramebuffer(we, Pe, ae, me, Be, Ye, ae, me, R.COLOR_BUFFER_BIT, R.NEAREST) : Ct ? R.copyTexSubImage3D(ft, Q, Be, Ye, it + Mt, we, Pe, ae, me) : R.copyTexSubImage2D(ft, Q, Be, Ye, we, Pe, ae, me);
                    ge.bindFramebuffer(R.READ_FRAMEBUFFER, null), ge.bindFramebuffer(R.DRAW_FRAMEBUFFER, null)
                } else Ct ? g.isDataTexture || g.isData3DTexture ? R.texSubImage3D(ft, Q, Be, Ye, it, ae, me, he, He, Ae, st.data) : D.isCompressedArrayTexture ? R.compressedTexSubImage3D(ft, Q, Be, Ye, it, ae, me, he, He, st.data) : R.texSubImage3D(ft, Q, Be, Ye, it, ae, me, he, He, Ae, st) : g.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, Q, Be, Ye, ae, me, He, Ae, st.data) : g.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, Q, Be, Ye, st.width, st.height, He, st.data) : R.texSubImage2D(R.TEXTURE_2D, Q, Be, Ye, ae, me, He, Ae, st);
                R.pixelStorei(R.UNPACK_ROW_LENGTH, Xe), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, Nt), R.pixelStorei(R.UNPACK_SKIP_PIXELS, kn), R.pixelStorei(R.UNPACK_SKIP_ROWS, At), R.pixelStorei(R.UNPACK_SKIP_IMAGES, ii), Q === 0 && D.generateMipmaps && R.generateMipmap(ft), ge.unbindTexture()
            }, this.copyTextureToTexture3D = function(g, D, N = null, O = null, L = 0) {
                return Tn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(g, D, N, O, L)
            }, this.initRenderTarget = function(g) {
                ye.get(g).__webglFramebuffer === void 0 && Fe.setupRenderTarget(g)
            }, this.initTexture = function(g) {
                g.isCubeTexture ? Fe.setTextureCube(g, 0) : g.isData3DTexture ? Fe.setTexture3D(g, 0) : g.isDataArrayTexture || g.isCompressedArrayTexture ? Fe.setTexture2DArray(g, 0) : Fe.setTexture2D(g, 0), ge.unbindTexture()
            }, this.resetState = function() {
                w = 0, C = 0, U = null, ge.reset(), De.reset()
            }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }))
        }
        get coordinateSystem() {
            return 2e3
        }
        get outputColorSpace() {
            return this._outputColorSpace
        }
        set outputColorSpace(e) {
            this._outputColorSpace = e;
            const t = this.getContext();
            t.drawingBufferColorSpace = ze._getDrawingBufferColorSpace(e), t.unpackColorSpace = ze._getUnpackColorSpace()
        }
    }
    const Su = `
    
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
        Mu = `

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
        Eu = `
    varying mat4 csm_internal_vModelViewMatrix;
`,
        Tu = `
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,
        yu = `
    varying mat4 csm_internal_vModelViewMatrix;
`,
        Au = `
    
`,
        ce = {
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
        Ru = {
            [`${ce.position}`]: "*",
            [`${ce.positionRaw}`]: "*",
            [`${ce.normal}`]: "*",
            [`${ce.depthAlpha}`]: "*",
            [`${ce.pointSize}`]: ["PointsMaterial"],
            [`${ce.diffuse}`]: "*",
            [`${ce.fragColor}`]: "*",
            [`${ce.fragNormal}`]: "*",
            [`${ce.unlitFac}`]: "*",
            [`${ce.emissive}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
            [`${ce.roughness}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
            [`${ce.metalness}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
            [`${ce.iridescence}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial"],
            [`${ce.ao}`]: ["MeshStandardMaterial", "MeshPhysicalMaterial", "MeshBasicMaterial", "MeshLambertMaterial", "MeshPhongMaterial", "MeshToonMaterial"],
            [`${ce.bump}`]: ["MeshLambertMaterial", "MeshMatcapMaterial", "MeshNormalMaterial", "MeshPhongMaterial", "MeshPhysicalMaterial", "MeshStandardMaterial", "MeshToonMaterial", "ShadowMaterial"],
            [`${ce.clearcoat}`]: ["MeshPhysicalMaterial"],
            [`${ce.clearcoatRoughness}`]: ["MeshPhysicalMaterial"],
            [`${ce.clearcoatNormal}`]: ["MeshPhysicalMaterial"],
            [`${ce.transmission}`]: ["MeshPhysicalMaterial"],
            [`${ce.thickness}`]: ["MeshPhysicalMaterial"]
        },
        bu = {
            "*": {
                "#include <lights_physical_fragment>": Ie.lights_physical_fragment,
                "#include <transmission_fragment>": Ie.transmission_fragment
            },
            [`${ce.normal}`]: {
                "#include <beginnormal_vertex>": `
    vec3 objectNormal = ${ce.normal};
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `
            },
            [`${ce.position}`]: {
                "#include <begin_vertex>": `
    vec3 transformed = ${ce.position};
  `
            },
            [`${ce.positionRaw}`]: {
                "#include <begin_vertex>": `
    vec4 csm_internal_positionUnprojected = ${ce.positionRaw};
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `
            },
            [`${ce.pointSize}`]: {
                "gl_PointSize = size;": `
    gl_PointSize = ${ce.pointSize};
    `
            },
            [`${ce.diffuse}`]: {
                "#include <color_fragment>": `
    #include <color_fragment>
    diffuseColor = ${ce.diffuse};
  `
            },
            [`${ce.fragColor}`]: {
                "#include <opaque_fragment>": `
    #include <opaque_fragment>
    gl_FragColor = mix(gl_FragColor, ${ce.fragColor}, ${ce.unlitFac});
  `
            },
            [`${ce.emissive}`]: {
                "vec3 totalEmissiveRadiance = emissive;": `
    vec3 totalEmissiveRadiance = ${ce.emissive};
    `
            },
            [`${ce.roughness}`]: {
                "#include <roughnessmap_fragment>": `
    #include <roughnessmap_fragment>
    roughnessFactor = ${ce.roughness};
    `
            },
            [`${ce.metalness}`]: {
                "#include <metalnessmap_fragment>": `
    #include <metalnessmap_fragment>
    metalnessFactor = ${ce.metalness};
    `
            },
            [`${ce.ao}`]: {
                "#include <aomap_fragment>": `
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - ${ce.ao};
    `
            },
            [`${ce.bump}`]: {
                "#include <normal_fragment_maps>": `
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = ${ce.bump} - (dot(${ce.bump}, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `
            },
            [`${ce.fragNormal}`]: {
                "#include <normal_fragment_maps>": `
      #include <normal_fragment_maps>
      normal = ${ce.fragNormal};
    `
            },
            [`${ce.depthAlpha}`]: {
                "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );": `
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * 1.0 - ${ce.depthAlpha} );
    `,
                "gl_FragColor = packDepthToRGBA( fragCoordZ );": `
      if(${ce.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `,
                "gl_FragColor = packDepthToRGBA( dist );": `
      if(${ce.depthAlpha} < 1.0) discard;
      gl_FragColor = packDepthToRGBA( dist );
    `
            },
            [`${ce.clearcoat}`]: {
                "material.clearcoat = clearcoat;": `material.clearcoat = ${ce.clearcoat};`
            },
            [`${ce.clearcoatRoughness}`]: {
                "material.clearcoatRoughness = clearcoatRoughness;": `material.clearcoatRoughness = ${ce.clearcoatRoughness};`
            },
            [`${ce.clearcoatNormal}`]: {
                "#include <clearcoat_normal_fragment_begin>": `
      vec3 csm_coat_internal_orthogonal = csm_ClearcoatNormal - (dot(csm_ClearcoatNormal, nonPerturbedNormal) * nonPerturbedNormal);
      vec3 csm_coat_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_coat_internal_orthogonal;
      vec3 clearcoatNormal = normalize(nonPerturbedNormal - csm_coat_internal_projectedbump);
    `
            },
            [`${ce.transmission}`]: {
                "material.transmission = transmission;": `
      material.transmission = ${ce.transmission};
    `
            },
            [`${ce.thickness}`]: {
                "material.thickness = thickness;": `
      material.thickness = ${ce.thickness};
    `
            },
            [`${ce.iridescence}`]: {
                "material.iridescence = iridescence;": `
      material.iridescence = ${ce.iridescence};
    `
            }
        },
        Cu = {
            clearcoat: [ce.clearcoat, ce.clearcoatNormal, ce.clearcoatRoughness],
            transmission: [ce.transmission],
            iridescence: [ce.iridescence]
        };

    function wu(i) {
        let e = 0;
        for (let n = 0; n < i.length; n++) e = i.charCodeAt(n) + (e << 6) + (e << 16) - e;
        const t = e >>> 0;
        return String(t)
    }

    function Pu(i) {
        try {
            new i
        } catch (e) {
            if (e.message.indexOf("is not a constructor") >= 0) return !1
        }
        return !0
    }

    function ys(i) {
        return i.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "")
    }
    class Du extends jn {
        constructor({
            baseMaterial: e,
            vertexShader: t,
            fragmentShader: n,
            uniforms: r,
            patchMap: s,
            cacheKey: a,
            ...o
        }) {
            if (!e) throw new Error("CustomShaderMaterial: baseMaterial is required.");
            let l;
            if (Pu(e)) {
                const h = Object.keys(o).length === 0;
                l = new e(h ? void 0 : o)
            } else l = e, Object.assign(l, o);
            if (["ShaderMaterial", "RawShaderMaterial"].includes(l.type)) throw new Error(`CustomShaderMaterial does not support ${l.type} as a base material.`);
            super(), this.uniforms = {}, this.vertexShader = "", this.fragmentShader = "";
            const c = l;
            c.name = `CustomShaderMaterial<${l.name||l.type}>`, c.update = this.update.bind(c), c.__csm = {
                prevOnBeforeCompile: l.onBeforeCompile,
                baseMaterial: l,
                vertexShader: t,
                fragmentShader: n,
                uniforms: r,
                patchMap: s,
                cacheKey: a
            };
            const d = { ...c.uniforms || {},
                ...r || {}
            };
            c.uniforms = this.uniforms = d, c.vertexShader = this.vertexShader = t || "", c.fragmentShader = this.fragmentShader = n || "", c.update({
                fragmentShader: c.fragmentShader,
                vertexShader: c.vertexShader,
                uniforms: c.uniforms,
                patchMap: s,
                cacheKey: a
            }), Object.assign(this, c);
            const f = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(c));
            for (const h in f) {
                const m = f[h];
                (m.get || m.set) && Object.defineProperty(this, h, m)
            }
            return Object.defineProperty(this, "type", {
                get() {
                    return l.type
                },
                set(h) {
                    l.type = h
                }
            }), this
        }
        update({
            fragmentShader: e,
            vertexShader: t,
            uniforms: n,
            cacheKey: r,
            patchMap: s
        }) {
            const a = ys(t || ""),
                o = ys(e || ""),
                l = this;
            n && (l.uniforms = n), t && (l.vertexShader = t), e && (l.fragmentShader = e), Object.entries(Cu).forEach(([h, m]) => {
                for (const v in m) {
                    const S = m[v];
                    (o && o.includes(S) || a && a.includes(S)) && (l[h] || (l[h] = 1))
                }
            });
            const c = l.__csm.prevOnBeforeCompile,
                d = (h, m, v) => {
                    let S, p = "";
                    if (m) {
                        const u = m.search(/void\s+main\s*\(\s*\)\s*{/);
                        if (u !== -1) {
                            p = m.slice(0, u);
                            let A = 0,
                                y = -1;
                            for (let M = u; M < m.length; M++)
                                if (m[M] === "{" && A++, m[M] === "}" && (A--, A === 0)) {
                                    y = M;
                                    break
                                }
                            if (y !== -1) {
                                const M = m.slice(u, y + 1);
                                S = M.slice(M.indexOf("{") + 1, -1)
                            }
                        } else p = m
                    }
                    if (v && m && m.includes(ce.fragColor) && S && (S = `csm_UnlitFac = 1.0;
` + S), h.includes("//~CSM_DEFAULTS")) {
                        h = h.replace("void main() {", `
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          ${p}
          
          void main() {
          `);
                        const u = h.lastIndexOf("//~CSM_MAIN_END");
                        if (u !== -1) {
                            const A = `
            ${S?`${S}`:""}
            //~CSM_MAIN_END
          `;
                            h = h.slice(0, u) + A + h.slice(u)
                        }
                    } else {
                        const u = /void\s*main\s*\(\s*\)\s*{/gm;
                        h = h.replace(u, `
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          //~CSM_DEFAULTS
          ${v?yu:Eu}
          ${Su}
  
          ${p}
          
          void main() {
            {
              ${Mu}
            }
            ${v?Au:Tu}

            ${S?`${S}`:""}
            //~CSM_MAIN_END
          `)
                    }
                    return h
                };
            l.onBeforeCompile = (h, m) => {
                c ? .(h, m);
                const v = s || {},
                    S = l.type,
                    p = S ? `#define IS_${S.toUpperCase()};
` : `#define IS_UNKNOWN;
`;
                h.vertexShader = p + `#define IS_VERTEX
` + h.vertexShader, h.fragmentShader = p + `#define IS_FRAGMENT
` + h.fragmentShader;
                const u = A => {
                    for (const y in A) {
                        const M = y === "*" || a && a.includes(y);
                        if (y === "*" || o && o.includes(y) || M) {
                            const I = Ru[y];
                            if (I && I !== "*" && (Array.isArray(I) ? !I.includes(S) : I !== S)) {
                                console.error(`CustomShaderMaterial: ${y} is not available in ${S}. Shader cannot compile.`);
                                return
                            }
                            const w = A[y];
                            for (const C in w) {
                                const U = w[C];
                                if (typeof U == "object") {
                                    const E = U.type,
                                        x = U.value;
                                    E === "fs" ? h.fragmentShader = h.fragmentShader.replace(C, x) : E === "vs" && (h.vertexShader = h.vertexShader.replace(C, x))
                                } else U && (h.vertexShader = h.vertexShader.replace(C, U), h.fragmentShader = h.fragmentShader.replace(C, U))
                            }
                        }
                    }
                };
                u(bu), u(v), h.vertexShader = d(h.vertexShader, a, !1), h.fragmentShader = d(h.fragmentShader, o, !0), n && (h.uniforms = { ...h.uniforms,
                    ...l.uniforms
                }), l.uniforms = h.uniforms
            };
            const f = l.customProgramCacheKey;
            l.customProgramCacheKey = () => (r ? .() || wu((a || "") + (o || ""))) + f ? .call(l), l.needsUpdate = !0
        }
        clone() {
            const e = this;
            return new e.constructor({
                baseMaterial: e.__csm.baseMaterial.clone(),
                vertexShader: e.__csm.vertexShader,
                fragmentShader: e.__csm.fragmentShader,
                uniforms: e.__csm.uniforms,
                patchMap: e.__csm.patchMap,
                cacheKey: e.__csm.cacheKey
            })
        }
    }
    var Lu = `uniform float u_Time;
uniform float u_Width;
uniform float u_Height;

uniform sampler2D u_DataTexture;

//	Simplex 3D Noise
//	by Ian McEwan, Stefan Gustavson (https://github.com/stegu/webgl-noise)
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //  x0 = x0 - 0. + 0.0 * C
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

// Permutations
  i = mod(i, 289.0 );
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients
// ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0/7.0; // N=7
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

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

//Normalise gradients
vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

float map(in float v, in float iMin, in float iMax, in float oMin, in float oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }

#define COLOR_1 vec3(255.0, 30.0, 0.0) / 255.0
#define COLOR_2 vec3(255.0, 5.0, 0.0) / 255.0

void main() {
  vec2 uv = gl_FragCoord.xy / vec2(u_Width, u_Height);
  vec4 offset = texture2D(u_DataTexture, uv);
  uv = uv - offset.rg * 0.02;

  float noise = snoise(vec3(uv * 1.0 + u_Time*0.1, u_Time*0.2));
  noise = map(noise, 0.0, 1.0, 0.5, 1.0);
  vec3 col = mix(COLOR_1, COLOR_2, noise);

  // csm_FragColor = vec4(noise, noise, noise, 1.0);
  csm_FragColor = vec4(col, 1.0);
}
`;
    let wi, Hn, Pi, ni, vn, rn, sn, As = 0,
        Gt = 14;
    const rt = {
            x: 0,
            y: 0,
            prevX: 0,
            prevY: 0,
            vX: 0,
            vY: 0
        },
        Vn = Object.freeze({
            relaxation: .9,
            strength: 1
        });
    self.addEventListener("message", ({
        data: i
    }) => {
        i.init && Uu(i.canvas, i.width, i.height)
    }, {
        once: !0
    }), self.addEventListener("message", ({
        data: i
    }) => {
        i.resize && zu(i.width, i.height), i.dpr && Gu(i.dpr), i.update && Bu(i.tick), i.mouse && Wu(i.x, i.y)
    });

    function Iu(i, e, t) {
        return Math.max(e, Math.min(i, t))
    }

    function Uu(i, e, t) {
        rn = e, sn = t, Fu(), Nu(), Ou(i), Vu(), Hu(), postMessage({
            init: !0
        })
    }

    function Fu() {
        wi = new ca
    }

    function Nu() {
        Hn = new Yr(-1, 1, 1, -1, 0, 1), Hn.position.set(0, 0, .1), wi.add(Hn)
    }

    function Ou(i) {
        Pi = new xu({
            canvas: i,
            alpha: !0,
            antialias: !1
        })
    }

    function Bu(i) {
        As = i, ni.material.uniforms.u_Time.value = As, ku(), Pi.render(wi, Hn)
    }

    function zu(i, e) {
        rn = i, sn = e, ni.material.uniforms.u_Width.value = rn, ni.material.uniforms.u_Height.value = sn, Hn.aspect = rn / sn, Hn.updateProjectionMatrix(), Pi.setSize(rn, sn, !1)
    }

    function Gu(i) {
        Pi.setPixelRatio(Math.min(i, 1))
    }

    function Hu() {
        ni = new Bt(new ei(2, 2), new Du({
            baseMaterial: ir,
            fragmentShader: Lu,
            uniforms: {
                u_Time: {
                    value: 0
                },
                u_Width: {
                    value: rn
                },
                u_Height: {
                    value: sn
                },
                u_DataTexture: {
                    value: vn
                }
            }
        })), wi.add(ni)
    }

    function Vu() {
        const i = Gt * Gt,
            e = new Float32Array(4 * i);
        for (let t = 0; t < i; t++) {
            const n = t * 4;
            let r = Math.random(),
                s = Math.random();
            e[n] = r, e[n + 1] = s, e[n + 2] = 0, e[n + 3] = 1
        }
        vn = new ua(e, Gt, Gt, 1023, 1015), vn.magFilter = vn.minFilter = 1003, vn.needsUpdate = !0
    }

    function ku() {
        const {
            data: i
        } = vn.image;
        for (let l = 0; l < i.length; l += 4) i[l] *= Vn.relaxation, i[l + 1] *= Vn.relaxation;
        const e = rt.x * Gt,
            t = (1 - rt.y) * Gt,
            n = .25 * Gt,
            r = n ** 2,
            s = sn / rn;
        let a, o;
        for (a = 0; a < Gt; a++)
            for (o = 0; o < Gt; o++) {
                const l = (e - a) ** 2 / s + (t - o) ** 2;
                if (l < r) {
                    const c = 4 * (a + o * Gt);
                    let d = n / Math.sqrt(l);
                    d = Iu(d, 0, 10), i[c] += Vn.strength * 40 * rt.vX * d, i[c + 1] -= Vn.strength * 40 * rt.vY * d
                }
            }
        rt.vX *= Vn.relaxation, rt.vY *= Vn.relaxation, Math.abs(rt.vX) < 1e-6 && (rt.vX = 0), Math.abs(rt.vY) < 1e-6 && (rt.vY = 0), vn.needsUpdate = !0
    }

    function Wu(i, e) {
        rt.x = i / rn, rt.y = e / sn, rt.vX = rt.x - rt.prevX, rt.vY = rt.y - rt.prevY, rt.prevX = rt.x, rt.prevY = rt.y
    }
})();