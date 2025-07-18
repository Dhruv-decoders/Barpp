(function() {
    "use strict";
    /**
     * @license
     * Copyright 2010-2025 Three.js Authors
     * SPDX-License-Identifier: MIT
     */
    const wi = "177",
        Yt = "",
        yt = "srgb",
        _n = "srgb-linear",
        ei = "linear",
        $e = "srgb",
        pr = "300 es";
    class gn {
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
    const ht = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"],
        Pi = Math.PI / 180,
        Di = 180 / Math.PI;

    function zn() {
        const i = Math.random() * 4294967295 | 0,
            e = Math.random() * 4294967295 | 0,
            t = Math.random() * 4294967295 | 0,
            n = Math.random() * 4294967295 | 0;
        return (ht[i & 255] + ht[i >> 8 & 255] + ht[i >> 16 & 255] + ht[i >> 24 & 255] + "-" + ht[e & 255] + ht[e >> 8 & 255] + "-" + ht[e >> 16 & 15 | 64] + ht[e >> 24 & 255] + "-" + ht[t & 63 | 128] + ht[t >> 8 & 255] + "-" + ht[t >> 16 & 255] + ht[t >> 24 & 255] + ht[n & 255] + ht[n >> 8 & 255] + ht[n >> 16 & 255] + ht[n >> 24 & 255]).toLowerCase()
    }

    function Oe(i, e, t) {
        return Math.max(e, Math.min(t, i))
    }

    function ws(i, e) {
        return (i % e + e) % e
    }

    function Li(i, e, t) {
        return (1 - t) * i + t * e
    }

    function Hn(i, e) {
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

    function vt(i, e) {
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
    class Vn {
        constructor(e = 0, t = 0, n = 0, r = 1) {
            this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r
        }
        static slerpFlat(e, t, n, r, s, a, o) {
            let l = n[r + 0],
                c = n[r + 1],
                f = n[r + 2],
                h = n[r + 3];
            const d = s[a + 0],
                m = s[a + 1],
                v = s[a + 2],
                S = s[a + 3];
            if (o === 0) {
                e[t + 0] = l, e[t + 1] = c, e[t + 2] = f, e[t + 3] = h;
                return
            }
            if (o === 1) {
                e[t + 0] = d, e[t + 1] = m, e[t + 2] = v, e[t + 3] = S;
                return
            }
            if (h !== S || l !== d || c !== m || f !== v) {
                let p = 1 - o;
                const u = l * d + c * m + f * v + h * S,
                    y = u >= 0 ? 1 : -1,
                    A = 1 - u * u;
                if (A > Number.EPSILON) {
                    const I = Math.sqrt(A),
                        w = Math.atan2(I, u * y);
                    p = Math.sin(p * w) / I, o = Math.sin(o * w) / I
                }
                const M = o * y;
                if (l = l * p + d * M, c = c * p + m * M, f = f * p + v * M, h = h * p + S * M, p === 1 - o) {
                    const I = 1 / Math.sqrt(l * l + c * c + f * f + h * h);
                    l *= I, c *= I, f *= I, h *= I
                }
            }
            e[t] = l, e[t + 1] = c, e[t + 2] = f, e[t + 3] = h
        }
        static multiplyQuaternionsFlat(e, t, n, r, s, a) {
            const o = n[r],
                l = n[r + 1],
                c = n[r + 2],
                f = n[r + 3],
                h = s[a],
                d = s[a + 1],
                m = s[a + 2],
                v = s[a + 3];
            return e[t] = o * v + f * h + l * m - c * d, e[t + 1] = l * v + f * d + c * h - o * m, e[t + 2] = c * v + f * m + o * d - l * h, e[t + 3] = f * v - o * h - l * d - c * m, e
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
                f = o(r / 2),
                h = o(s / 2),
                d = l(n / 2),
                m = l(r / 2),
                v = l(s / 2);
            switch (a) {
                case "XYZ":
                    this._x = d * f * h + c * m * v, this._y = c * m * h - d * f * v, this._z = c * f * v + d * m * h, this._w = c * f * h - d * m * v;
                    break;
                case "YXZ":
                    this._x = d * f * h + c * m * v, this._y = c * m * h - d * f * v, this._z = c * f * v - d * m * h, this._w = c * f * h + d * m * v;
                    break;
                case "ZXY":
                    this._x = d * f * h - c * m * v, this._y = c * m * h + d * f * v, this._z = c * f * v + d * m * h, this._w = c * f * h - d * m * v;
                    break;
                case "ZYX":
                    this._x = d * f * h - c * m * v, this._y = c * m * h + d * f * v, this._z = c * f * v - d * m * h, this._w = c * f * h + d * m * v;
                    break;
                case "YZX":
                    this._x = d * f * h + c * m * v, this._y = c * m * h + d * f * v, this._z = c * f * v - d * m * h, this._w = c * f * h - d * m * v;
                    break;
                case "XZY":
                    this._x = d * f * h - c * m * v, this._y = c * m * h - d * f * v, this._z = c * f * v + d * m * h, this._w = c * f * h + d * m * v;
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
                f = t[6],
                h = t[10],
                d = n + o + h;
            if (d > 0) {
                const m = .5 / Math.sqrt(d + 1);
                this._w = .25 / m, this._x = (f - l) * m, this._y = (s - c) * m, this._z = (a - r) * m
            } else if (n > o && n > h) {
                const m = 2 * Math.sqrt(1 + n - o - h);
                this._w = (f - l) / m, this._x = .25 * m, this._y = (r + a) / m, this._z = (s + c) / m
            } else if (o > h) {
                const m = 2 * Math.sqrt(1 + o - n - h);
                this._w = (s - c) / m, this._x = (r + a) / m, this._y = .25 * m, this._z = (l + f) / m
            } else {
                const m = 2 * Math.sqrt(1 + h - n - o);
                this._w = (a - r) / m, this._x = (s + c) / m, this._y = (l + f) / m, this._z = .25 * m
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
                f = t._w;
            return this._x = n * f + a * o + r * c - s * l, this._y = r * f + a * l + s * o - n * c, this._z = s * f + a * c + n * l - r * o, this._w = a * f - n * o - r * l - s * c, this._onChangeCallback(), this
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
                f = Math.atan2(c, o),
                h = Math.sin((1 - t) * f) / c,
                d = Math.sin(t * f) / c;
            return this._w = a * h + this._w * d, this._x = n * h + this._x * d, this._y = r * h + this._y * d, this._z = s * h + this._z * d, this._onChangeCallback(), this
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
            return this.applyQuaternion(mr.setFromEuler(e))
        }
        applyAxisAngle(e, t) {
            return this.applyQuaternion(mr.setFromAxisAngle(e, t))
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
                f = 2 * (o * t - s * r),
                h = 2 * (s * n - a * t);
            return this.x = t + l * c + a * h - o * f, this.y = n + l * f + o * c - s * h, this.z = r + l * h + s * f - a * c, this
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
            return Ii.copy(this).projectOnVector(e), this.sub(Ii)
        }
        reflect(e) {
            return this.sub(Ii.copy(e).multiplyScalar(2 * this.dot(e)))
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
    const Ii = new B,
        mr = new Vn;
    class Ue {
        constructor(e, t, n, r, s, a, o, l, c) {
            Ue.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c)
        }
        set(e, t, n, r, s, a, o, l, c) {
            const f = this.elements;
            return f[0] = e, f[1] = r, f[2] = o, f[3] = t, f[4] = s, f[5] = l, f[6] = n, f[7] = a, f[8] = c, this
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
                f = n[4],
                h = n[7],
                d = n[2],
                m = n[5],
                v = n[8],
                S = r[0],
                p = r[3],
                u = r[6],
                y = r[1],
                A = r[4],
                M = r[7],
                I = r[2],
                w = r[5],
                C = r[8];
            return s[0] = a * S + o * y + l * I, s[3] = a * p + o * A + l * w, s[6] = a * u + o * M + l * C, s[1] = c * S + f * y + h * I, s[4] = c * p + f * A + h * w, s[7] = c * u + f * M + h * C, s[2] = d * S + m * y + v * I, s[5] = d * p + m * A + v * w, s[8] = d * u + m * M + v * C, this
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
                f = e[8];
            return t * a * f - t * o * c - n * s * f + n * o * l + r * s * c - r * a * l
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
                f = e[8],
                h = f * a - o * c,
                d = o * l - f * s,
                m = c * s - a * l,
                v = t * h + n * d + r * m;
            if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const S = 1 / v;
            return e[0] = h * S, e[1] = (r * c - f * n) * S, e[2] = (o * n - r * a) * S, e[3] = d * S, e[4] = (f * t - r * l) * S, e[5] = (r * s - o * t) * S, e[6] = m * S, e[7] = (n * l - c * t) * S, e[8] = (a * t - n * s) * S, this
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
            return this.premultiply(Ui.makeScale(e, t)), this
        }
        rotate(e) {
            return this.premultiply(Ui.makeRotation(-e)), this
        }
        translate(e, t) {
            return this.premultiply(Ui.makeTranslation(e, t)), this
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
    const Ui = new Ue;

    function _r(i) {
        for (let e = i.length - 1; e >= 0; --e)
            if (i[e] >= 65535) return !0;
        return !1
    }

    function ti(i) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", i)
    }

    function Ps() {
        const i = ti("canvas");
        return i.style.display = "block", i
    }
    const gr = {};

    function vn(i) {
        i in gr || (gr[i] = !0, console.warn(i))
    }

    function Ds(i, e, t) {
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

    function Ls(i) {
        const e = i.elements;
        e[2] = .5 * e[2] + .5 * e[3], e[6] = .5 * e[6] + .5 * e[7], e[10] = .5 * e[10] + .5 * e[11], e[14] = .5 * e[14] + .5 * e[15]
    }

    function Is(i) {
        const e = i.elements;
        e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1)
    }
    const vr = new Ue().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322),
        xr = new Ue().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);

    function Us() {
        const i = {
                enabled: !0,
                workingColorSpace: _n,
                spaces: {},
                convert: function(r, s, a) {
                    return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === $e && (r.r = Gt(r.r), r.g = Gt(r.g), r.b = Gt(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === $e && (r.r = xn(r.r), r.g = xn(r.g), r.b = xn(r.b))), r
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
                    return r === Yt ? ei : this.spaces[r].transfer
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
                    return vn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, s)
                },
                toWorkingColorSpace: function(r, s) {
                    return vn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, s)
                }
            },
            e = [.64, .33, .3, .6, .15, .06],
            t = [.2126, .7152, .0722],
            n = [.3127, .329];
        return i.define({
            [_n]: {
                primaries: e,
                whitePoint: n,
                transfer: ei,
                toXYZ: vr,
                fromXYZ: xr,
                luminanceCoefficients: t,
                workingColorSpaceConfig: {
                    unpackColorSpace: yt
                },
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: yt
                }
            },
            [yt]: {
                primaries: e,
                whitePoint: n,
                transfer: $e,
                toXYZ: vr,
                fromXYZ: xr,
                luminanceCoefficients: t,
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: yt
                }
            }
        }), i
    }
    const Ge = Us();

    function Gt(i) {
        return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4)
    }

    function xn(i) {
        return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055
    }
    let Sn;
    class Fs {
        static getDataURL(e, t = "image/png") {
            if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
            let n;
            if (e instanceof HTMLCanvasElement) n = e;
            else {
                Sn === void 0 && (Sn = ti("canvas")), Sn.width = e.width, Sn.height = e.height;
                const r = Sn.getContext("2d");
                e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = Sn
            }
            return n.toDataURL(t)
        }
        static sRGBToLinear(e) {
            if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
                const t = ti("canvas");
                t.width = e.width, t.height = e.height;
                const n = t.getContext("2d");
                n.drawImage(e, 0, 0, e.width, e.height);
                const r = n.getImageData(0, 0, e.width, e.height),
                    s = r.data;
                for (let a = 0; a < s.length; a++) s[a] = Gt(s[a] / 255) * 255;
                return n.putImageData(r, 0, 0), t
            } else if (e.data) {
                const t = e.data.slice(0);
                for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Gt(t[n] / 255) * 255) : t[n] = Gt(t[n]);
                return {
                    data: t,
                    width: e.width,
                    height: e.height
                }
            } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e
        }
    }
    let Ns = 0;
    class Fi {
        constructor(e = null) {
            this.isSource = !0, Object.defineProperty(this, "id", {
                value: Ns++
            }), this.uuid = zn(), this.data = e, this.dataReady = !0, this.version = 0
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
                    for (let a = 0, o = r.length; a < o; a++) r[a].isDataTexture ? s.push(Ni(r[a].image)) : s.push(Ni(r[a]))
                } else s = Ni(r);
                n.url = s
            }
            return t || (e.images[this.uuid] = n), n
        }
    }

    function Ni(i) {
        return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Fs.getDataURL(i) : i.data ? {
            data: Array.from(i.data),
            width: i.width,
            height: i.height,
            type: i.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
    }
    let Os = 0;
    const Oi = new B;
    class xt extends gn {
        constructor(e = xt.DEFAULT_IMAGE, t = xt.DEFAULT_MAPPING, n = 1001, r = 1001, s = 1006, a = 1008, o = 1023, l = 1009, c = xt.DEFAULT_ANISOTROPY, f = Yt) {
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: Os++
            }), this.uuid = zn(), this.name = "", this.source = new Fi(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Ze(0, 0), this.repeat = new Ze(1, 1), this.center = new Ze(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ue, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = f, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0
        }
        get width() {
            return this.source.getSize(Oi).x
        }
        get height() {
            return this.source.getSize(Oi).y
        }
        get depth() {
            return this.source.getSize(Oi).z
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
    xt.DEFAULT_IMAGE = null, xt.DEFAULT_MAPPING = 300, xt.DEFAULT_ANISOTROPY = 1;
    class st {
        constructor(e = 0, t = 0, n = 0, r = 1) {
            st.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r
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
                f = l[4],
                h = l[8],
                d = l[1],
                m = l[5],
                v = l[9],
                S = l[2],
                p = l[6],
                u = l[10];
            if (Math.abs(f - d) < .01 && Math.abs(h - S) < .01 && Math.abs(v - p) < .01) {
                if (Math.abs(f + d) < .1 && Math.abs(h + S) < .1 && Math.abs(v + p) < .1 && Math.abs(c + m + u - 3) < .1) return this.set(1, 0, 0, 0), this;
                t = Math.PI;
                const A = (c + 1) / 2,
                    M = (m + 1) / 2,
                    I = (u + 1) / 2,
                    w = (f + d) / 4,
                    C = (h + S) / 4,
                    U = (v + p) / 4;
                return A > M && A > I ? A < .01 ? (n = 0, r = .707106781, s = .707106781) : (n = Math.sqrt(A), r = w / n, s = C / n) : M > I ? M < .01 ? (n = .707106781, r = 0, s = .707106781) : (r = Math.sqrt(M), n = w / r, s = U / r) : I < .01 ? (n = .707106781, r = .707106781, s = 0) : (s = Math.sqrt(I), n = C / s, r = U / s), this.set(n, r, s, t), this
            }
            let y = Math.sqrt((p - v) * (p - v) + (h - S) * (h - S) + (d - f) * (d - f));
            return Math.abs(y) < .001 && (y = 1), this.x = (p - v) / y, this.y = (h - S) / y, this.z = (d - f) / y, this.w = Math.acos((c + m + u - 1) / 2), this
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
    class Bs extends gn {
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
            }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new st(0, 0, e, t), this.scissorTest = !1, this.viewport = new st(0, 0, e, t);
            const r = {
                    width: e,
                    height: t,
                    depth: n.depth
                },
                s = new xt(r);
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
                this.textures[t].source = new Fi(r)
            }
            return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    class tn extends Bs {
        constructor(e = 1, t = 1, n = {}) {
            super(e, t, n), this.isWebGLRenderTarget = !0
        }
    }
    class Sr extends xt {
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
    class Gs extends xt {
        constructor(e = null, t = 1, n = 1, r = 1) {
            super(null), this.isData3DTexture = !0, this.image = {
                data: e,
                width: t,
                height: n,
                depth: r
            }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
        }
    }
    class kn {
        constructor(e = new B(1 / 0, 1 / 0, 1 / 0), t = new B(-1 / 0, -1 / 0, -1 / 0)) {
            this.isBox3 = !0, this.min = e, this.max = t
        }
        set(e, t) {
            return this.min.copy(e), this.max.copy(t), this
        }
        setFromArray(e) {
            this.makeEmpty();
            for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(wt.fromArray(e, t));
            return this
        }
        setFromBufferAttribute(e) {
            this.makeEmpty();
            for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(wt.fromBufferAttribute(e, t));
            return this
        }
        setFromPoints(e) {
            this.makeEmpty();
            for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
            return this
        }
        setFromCenterAndSize(e, t) {
            const n = wt.copy(t).multiplyScalar(.5);
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
                    for (let a = 0, o = s.count; a < o; a++) e.isMesh === !0 ? e.getVertexPosition(a, wt) : wt.fromBufferAttribute(s, a), wt.applyMatrix4(e.matrixWorld), this.expandByPoint(wt);
                else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ni.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ni.copy(n.boundingBox)), ni.applyMatrix4(e.matrixWorld), this.union(ni)
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
            return this.clampPoint(e.center, wt), wt.distanceToSquared(e.center) <= e.radius * e.radius
        }
        intersectsPlane(e) {
            let t, n;
            return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant
        }
        intersectsTriangle(e) {
            if (this.isEmpty()) return !1;
            this.getCenter(Wn), ii.subVectors(this.max, Wn), Mn.subVectors(e.a, Wn), En.subVectors(e.b, Wn), Tn.subVectors(e.c, Wn), $t.subVectors(En, Mn), Kt.subVectors(Tn, En), nn.subVectors(Mn, Tn);
            let t = [0, -$t.z, $t.y, 0, -Kt.z, Kt.y, 0, -nn.z, nn.y, $t.z, 0, -$t.x, Kt.z, 0, -Kt.x, nn.z, 0, -nn.x, -$t.y, $t.x, 0, -Kt.y, Kt.x, 0, -nn.y, nn.x, 0];
            return !Bi(t, Mn, En, Tn, ii) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Bi(t, Mn, En, Tn, ii)) ? !1 : (ri.crossVectors($t, Kt), t = [ri.x, ri.y, ri.z], Bi(t, Mn, En, Tn, ii))
        }
        clampPoint(e, t) {
            return t.copy(e).clamp(this.min, this.max)
        }
        distanceToPoint(e) {
            return this.clampPoint(e, wt).distanceTo(e)
        }
        getBoundingSphere(e) {
            return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(wt).length() * .5), e
        }
        intersect(e) {
            return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
        }
        union(e) {
            return this.min.min(e.min), this.max.max(e.max), this
        }
        applyMatrix4(e) {
            return this.isEmpty() ? this : (zt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), zt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), zt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), zt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), zt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), zt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), zt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), zt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(zt), this)
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
    const zt = [new B, new B, new B, new B, new B, new B, new B, new B],
        wt = new B,
        ni = new kn,
        Mn = new B,
        En = new B,
        Tn = new B,
        $t = new B,
        Kt = new B,
        nn = new B,
        Wn = new B,
        ii = new B,
        ri = new B,
        rn = new B;

    function Bi(i, e, t, n, r) {
        for (let s = 0, a = i.length - 3; s <= a; s += 3) {
            rn.fromArray(i, s);
            const o = r.x * Math.abs(rn.x) + r.y * Math.abs(rn.y) + r.z * Math.abs(rn.z),
                l = e.dot(rn),
                c = t.dot(rn),
                f = n.dot(rn);
            if (Math.max(-Math.max(l, c, f), Math.min(l, c, f)) > o) return !1
        }
        return !0
    }
    const zs = new kn,
        Xn = new B,
        Gi = new B;
    class zi {
        constructor(e = new B, t = -1) {
            this.isSphere = !0, this.center = e, this.radius = t
        }
        set(e, t) {
            return this.center.copy(e), this.radius = t, this
        }
        setFromPoints(e, t) {
            const n = this.center;
            t !== void 0 ? n.copy(t) : zs.setFromPoints(e).getCenter(n);
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
            Xn.subVectors(e, this.center);
            const t = Xn.lengthSq();
            if (t > this.radius * this.radius) {
                const n = Math.sqrt(t),
                    r = (n - this.radius) * .5;
                this.center.addScaledVector(Xn, r / n), this.radius += r
            }
            return this
        }
        union(e) {
            return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Gi.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Xn.copy(e.center).add(Gi)), this.expandByPoint(Xn.copy(e.center).sub(Gi))), this)
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
    const Ht = new B,
        Hi = new B,
        si = new B,
        Zt = new B,
        Vi = new B,
        ai = new B,
        ki = new B;
    class Hs {
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
            return this.origin.copy(this.at(e, Ht)), this
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
            const t = Ht.subVectors(e, this.origin).dot(this.direction);
            return t < 0 ? this.origin.distanceToSquared(e) : (Ht.copy(this.origin).addScaledVector(this.direction, t), Ht.distanceToSquared(e))
        }
        distanceSqToSegment(e, t, n, r) {
            Hi.copy(e).add(t).multiplyScalar(.5), si.copy(t).sub(e).normalize(), Zt.copy(this.origin).sub(Hi);
            const s = e.distanceTo(t) * .5,
                a = -this.direction.dot(si),
                o = Zt.dot(this.direction),
                l = -Zt.dot(si),
                c = Zt.lengthSq(),
                f = Math.abs(1 - a * a);
            let h, d, m, v;
            if (f > 0)
                if (h = a * l - o, d = a * o - l, v = s * f, h >= 0)
                    if (d >= -v)
                        if (d <= v) {
                            const S = 1 / f;
                            h *= S, d *= S, m = h * (h + a * d + 2 * o) + d * (a * h + d + 2 * l) + c
                        } else d = s, h = Math.max(0, -(a * d + o)), m = -h * h + d * (d + 2 * l) + c;
            else d = -s, h = Math.max(0, -(a * d + o)), m = -h * h + d * (d + 2 * l) + c;
            else d <= -v ? (h = Math.max(0, -(-a * s + o)), d = h > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -h * h + d * (d + 2 * l) + c) : d <= v ? (h = 0, d = Math.min(Math.max(-s, -l), s), m = d * (d + 2 * l) + c) : (h = Math.max(0, -(a * s + o)), d = h > 0 ? s : Math.min(Math.max(-s, -l), s), m = -h * h + d * (d + 2 * l) + c);
            else d = a > 0 ? -s : s, h = Math.max(0, -(a * d + o)), m = -h * h + d * (d + 2 * l) + c;
            return n && n.copy(this.origin).addScaledVector(this.direction, h), r && r.copy(Hi).addScaledVector(si, d), m
        }
        intersectSphere(e, t) {
            Ht.subVectors(e.center, this.origin);
            const n = Ht.dot(this.direction),
                r = Ht.dot(Ht) - n * n,
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
                f = 1 / this.direction.y,
                h = 1 / this.direction.z,
                d = this.origin;
            return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), f >= 0 ? (s = (e.min.y - d.y) * f, a = (e.max.y - d.y) * f) : (s = (e.max.y - d.y) * f, a = (e.min.y - d.y) * f), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), h >= 0 ? (o = (e.min.z - d.z) * h, l = (e.max.z - d.z) * h) : (o = (e.max.z - d.z) * h, l = (e.min.z - d.z) * h), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t)
        }
        intersectsBox(e) {
            return this.intersectBox(e, Ht) !== null
        }
        intersectTriangle(e, t, n, r, s) {
            Vi.subVectors(t, e), ai.subVectors(n, e), ki.crossVectors(Vi, ai);
            let a = this.direction.dot(ki),
                o;
            if (a > 0) {
                if (r) return null;
                o = 1
            } else if (a < 0) o = -1, a = -a;
            else return null;
            Zt.subVectors(this.origin, e);
            const l = o * this.direction.dot(ai.crossVectors(Zt, ai));
            if (l < 0) return null;
            const c = o * this.direction.dot(Vi.cross(Zt));
            if (c < 0 || l + c > a) return null;
            const f = -o * Zt.dot(ki);
            return f < 0 ? null : this.at(f / a, s)
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
    class at {
        constructor(e, t, n, r, s, a, o, l, c, f, h, d, m, v, S, p) {
            at.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, f, h, d, m, v, S, p)
        }
        set(e, t, n, r, s, a, o, l, c, f, h, d, m, v, S, p) {
            const u = this.elements;
            return u[0] = e, u[4] = t, u[8] = n, u[12] = r, u[1] = s, u[5] = a, u[9] = o, u[13] = l, u[2] = c, u[6] = f, u[10] = h, u[14] = d, u[3] = m, u[7] = v, u[11] = S, u[15] = p, this
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }
        clone() {
            return new at().fromArray(this.elements)
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
                r = 1 / An.setFromMatrixColumn(e, 0).length(),
                s = 1 / An.setFromMatrixColumn(e, 1).length(),
                a = 1 / An.setFromMatrixColumn(e, 2).length();
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
                f = Math.cos(s),
                h = Math.sin(s);
            if (e.order === "XYZ") {
                const d = a * f,
                    m = a * h,
                    v = o * f,
                    S = o * h;
                t[0] = l * f, t[4] = -l * h, t[8] = c, t[1] = m + v * c, t[5] = d - S * c, t[9] = -o * l, t[2] = S - d * c, t[6] = v + m * c, t[10] = a * l
            } else if (e.order === "YXZ") {
                const d = l * f,
                    m = l * h,
                    v = c * f,
                    S = c * h;
                t[0] = d + S * o, t[4] = v * o - m, t[8] = a * c, t[1] = a * h, t[5] = a * f, t[9] = -o, t[2] = m * o - v, t[6] = S + d * o, t[10] = a * l
            } else if (e.order === "ZXY") {
                const d = l * f,
                    m = l * h,
                    v = c * f,
                    S = c * h;
                t[0] = d - S * o, t[4] = -a * h, t[8] = v + m * o, t[1] = m + v * o, t[5] = a * f, t[9] = S - d * o, t[2] = -a * c, t[6] = o, t[10] = a * l
            } else if (e.order === "ZYX") {
                const d = a * f,
                    m = a * h,
                    v = o * f,
                    S = o * h;
                t[0] = l * f, t[4] = v * c - m, t[8] = d * c + S, t[1] = l * h, t[5] = S * c + d, t[9] = m * c - v, t[2] = -c, t[6] = o * l, t[10] = a * l
            } else if (e.order === "YZX") {
                const d = a * l,
                    m = a * c,
                    v = o * l,
                    S = o * c;
                t[0] = l * f, t[4] = S - d * h, t[8] = v * h + m, t[1] = h, t[5] = a * f, t[9] = -o * f, t[2] = -c * f, t[6] = m * h + v, t[10] = d - S * h
            } else if (e.order === "XZY") {
                const d = a * l,
                    m = a * c,
                    v = o * l,
                    S = o * c;
                t[0] = l * f, t[4] = -h, t[8] = c * f, t[1] = d * h + S, t[5] = a * f, t[9] = m * h - v, t[2] = v * h - m, t[6] = o * f, t[10] = S * h + d
            }
            return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        }
        makeRotationFromQuaternion(e) {
            return this.compose(Vs, e, ks)
        }
        lookAt(e, t, n) {
            const r = this.elements;
            return Mt.subVectors(e, t), Mt.lengthSq() === 0 && (Mt.z = 1), Mt.normalize(), jt.crossVectors(n, Mt), jt.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Mt.x += 1e-4 : Mt.z += 1e-4, Mt.normalize(), jt.crossVectors(n, Mt)), jt.normalize(), oi.crossVectors(Mt, jt), r[0] = jt.x, r[4] = oi.x, r[8] = Mt.x, r[1] = jt.y, r[5] = oi.y, r[9] = Mt.y, r[2] = jt.z, r[6] = oi.z, r[10] = Mt.z, this
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
                f = n[1],
                h = n[5],
                d = n[9],
                m = n[13],
                v = n[2],
                S = n[6],
                p = n[10],
                u = n[14],
                y = n[3],
                A = n[7],
                M = n[11],
                I = n[15],
                w = r[0],
                C = r[4],
                U = r[8],
                E = r[12],
                x = r[1],
                P = r[5],
                q = r[9],
                G = r[13],
                W = r[2],
                j = r[6],
                V = r[10],
                ee = r[14],
                z = r[3],
                oe = r[7],
                fe = r[11],
                Te = r[15];
            return s[0] = a * w + o * x + l * W + c * z, s[4] = a * C + o * P + l * j + c * oe, s[8] = a * U + o * q + l * V + c * fe, s[12] = a * E + o * G + l * ee + c * Te, s[1] = f * w + h * x + d * W + m * z, s[5] = f * C + h * P + d * j + m * oe, s[9] = f * U + h * q + d * V + m * fe, s[13] = f * E + h * G + d * ee + m * Te, s[2] = v * w + S * x + p * W + u * z, s[6] = v * C + S * P + p * j + u * oe, s[10] = v * U + S * q + p * V + u * fe, s[14] = v * E + S * G + p * ee + u * Te, s[3] = y * w + A * x + M * W + I * z, s[7] = y * C + A * P + M * j + I * oe, s[11] = y * U + A * q + M * V + I * fe, s[15] = y * E + A * G + M * ee + I * Te, this
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
                f = e[2],
                h = e[6],
                d = e[10],
                m = e[14],
                v = e[3],
                S = e[7],
                p = e[11],
                u = e[15];
            return v * (+s * l * h - r * c * h - s * o * d + n * c * d + r * o * m - n * l * m) + S * (+t * l * m - t * c * d + s * a * d - r * a * m + r * c * f - s * l * f) + p * (+t * c * h - t * o * m - s * a * h + n * a * m + s * o * f - n * c * f) + u * (-r * o * f - t * l * h + t * o * d + r * a * h - n * a * d + n * l * f)
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
                f = e[8],
                h = e[9],
                d = e[10],
                m = e[11],
                v = e[12],
                S = e[13],
                p = e[14],
                u = e[15],
                y = h * p * c - S * d * c + S * l * m - o * p * m - h * l * u + o * d * u,
                A = v * d * c - f * p * c - v * l * m + a * p * m + f * l * u - a * d * u,
                M = f * S * c - v * h * c + v * o * m - a * S * m - f * o * u + a * h * u,
                I = v * h * l - f * S * l - v * o * d + a * S * d + f * o * p - a * h * p,
                w = t * y + n * A + r * M + s * I;
            if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const C = 1 / w;
            return e[0] = y * C, e[1] = (S * d * s - h * p * s - S * r * m + n * p * m + h * r * u - n * d * u) * C, e[2] = (o * p * s - S * l * s + S * r * c - n * p * c - o * r * u + n * l * u) * C, e[3] = (h * l * s - o * d * s - h * r * c + n * d * c + o * r * m - n * l * m) * C, e[4] = A * C, e[5] = (f * p * s - v * d * s + v * r * m - t * p * m - f * r * u + t * d * u) * C, e[6] = (v * l * s - a * p * s - v * r * c + t * p * c + a * r * u - t * l * u) * C, e[7] = (a * d * s - f * l * s + f * r * c - t * d * c - a * r * m + t * l * m) * C, e[8] = M * C, e[9] = (v * h * s - f * S * s - v * n * m + t * S * m + f * n * u - t * h * u) * C, e[10] = (a * S * s - v * o * s + v * n * c - t * S * c - a * n * u + t * o * u) * C, e[11] = (f * o * s - a * h * s - f * n * c + t * h * c + a * n * m - t * o * m) * C, e[12] = I * C, e[13] = (f * S * r - v * h * r + v * n * d - t * S * d - f * n * p + t * h * p) * C, e[14] = (v * o * r - a * S * r - v * n * l + t * S * l + a * n * p - t * o * p) * C, e[15] = (a * h * r - f * o * r + f * n * l - t * h * l - a * n * d + t * o * d) * C, this
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
                f = s * o;
            return this.set(c * a + n, c * o - r * l, c * l + r * o, 0, c * o + r * l, f * o + n, f * l - r * a, 0, c * l - r * o, f * l + r * a, s * l * l + n, 0, 0, 0, 0, 1), this
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
                f = a + a,
                h = o + o,
                d = s * c,
                m = s * f,
                v = s * h,
                S = a * f,
                p = a * h,
                u = o * h,
                y = l * c,
                A = l * f,
                M = l * h,
                I = n.x,
                w = n.y,
                C = n.z;
            return r[0] = (1 - (S + u)) * I, r[1] = (m + M) * I, r[2] = (v - A) * I, r[3] = 0, r[4] = (m - M) * w, r[5] = (1 - (d + u)) * w, r[6] = (p + y) * w, r[7] = 0, r[8] = (v + A) * C, r[9] = (p - y) * C, r[10] = (1 - (d + S)) * C, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this
        }
        decompose(e, t, n) {
            const r = this.elements;
            let s = An.set(r[0], r[1], r[2]).length();
            const a = An.set(r[4], r[5], r[6]).length(),
                o = An.set(r[8], r[9], r[10]).length();
            this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Pt.copy(this);
            const c = 1 / s,
                f = 1 / a,
                h = 1 / o;
            return Pt.elements[0] *= c, Pt.elements[1] *= c, Pt.elements[2] *= c, Pt.elements[4] *= f, Pt.elements[5] *= f, Pt.elements[6] *= f, Pt.elements[8] *= h, Pt.elements[9] *= h, Pt.elements[10] *= h, t.setFromRotationMatrix(Pt), n.x = s, n.y = a, n.z = o, this
        }
        makePerspective(e, t, n, r, s, a, o = 2e3) {
            const l = this.elements,
                c = 2 * s / (t - e),
                f = 2 * s / (n - r),
                h = (t + e) / (t - e),
                d = (n + r) / (n - r);
            let m, v;
            if (o === 2e3) m = -(a + s) / (a - s), v = -2 * a * s / (a - s);
            else if (o === 2001) m = -a / (a - s), v = -a * s / (a - s);
            else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
            return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = f, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this
        }
        makeOrthographic(e, t, n, r, s, a, o = 2e3) {
            const l = this.elements,
                c = 1 / (t - e),
                f = 1 / (n - r),
                h = 1 / (a - s),
                d = (t + e) * c,
                m = (n + r) * f;
            let v, S;
            if (o === 2e3) v = (a + s) * h, S = -2 * h;
            else if (o === 2001) v = s * h, S = -1 * h;
            else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
            return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * f, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = S, l[14] = -v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this
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
    const An = new B,
        Pt = new at,
        Vs = new B(0, 0, 0),
        ks = new B(1, 1, 1),
        jt = new B,
        oi = new B,
        Mt = new B,
        Mr = new at,
        Er = new Vn;
    class Vt {
        constructor(e = 0, t = 0, n = 0, r = Vt.DEFAULT_ORDER) {
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
                f = r[9],
                h = r[2],
                d = r[6],
                m = r[10];
            switch (t) {
                case "XYZ":
                    this._y = Math.asin(Oe(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-f, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-Oe(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(Oe(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-h, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
                    break;
                case "ZYX":
                    this._y = Math.asin(-Oe(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
                    break;
                case "YZX":
                    this._z = Math.asin(Oe(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-f, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(o, m));
                    break;
                case "XZY":
                    this._z = Math.asin(-Oe(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-f, m), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
            }
            return this._order = t, n === !0 && this._onChangeCallback(), this
        }
        setFromQuaternion(e, t, n) {
            return Mr.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Mr, t, n)
        }
        setFromVector3(e, t = this._order) {
            return this.set(e.x, e.y, e.z, t)
        }
        reorder(e) {
            return Er.setFromEuler(this), this.setFromQuaternion(Er, e)
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
    Vt.DEFAULT_ORDER = "XYZ";
    class Tr {
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
    let Ws = 0;
    const Ar = new B,
        yn = new Vn,
        kt = new at,
        li = new B,
        qn = new B,
        Xs = new B,
        qs = new Vn,
        yr = new B(1, 0, 0),
        Rr = new B(0, 1, 0),
        br = new B(0, 0, 1),
        Cr = {
            type: "added"
        },
        Ys = {
            type: "removed"
        },
        Rn = {
            type: "childadded",
            child: null
        },
        Wi = {
            type: "childremoved",
            child: null
        };
    class Et extends gn {
        constructor() {
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: Ws++
            }), this.uuid = zn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Et.DEFAULT_UP.clone();
            const e = new B,
                t = new Vt,
                n = new Vn,
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
                    value: new at
                },
                normalMatrix: {
                    value: new Ue
                }
            }), this.matrix = new at, this.matrixWorld = new at, this.matrixAutoUpdate = Et.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Tr, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {}
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
            return yn.setFromAxisAngle(e, t), this.quaternion.multiply(yn), this
        }
        rotateOnWorldAxis(e, t) {
            return yn.setFromAxisAngle(e, t), this.quaternion.premultiply(yn), this
        }
        rotateX(e) {
            return this.rotateOnAxis(yr, e)
        }
        rotateY(e) {
            return this.rotateOnAxis(Rr, e)
        }
        rotateZ(e) {
            return this.rotateOnAxis(br, e)
        }
        translateOnAxis(e, t) {
            return Ar.copy(e).applyQuaternion(this.quaternion), this.position.add(Ar.multiplyScalar(t)), this
        }
        translateX(e) {
            return this.translateOnAxis(yr, e)
        }
        translateY(e) {
            return this.translateOnAxis(Rr, e)
        }
        translateZ(e) {
            return this.translateOnAxis(br, e)
        }
        localToWorld(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld)
        }
        worldToLocal(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(kt.copy(this.matrixWorld).invert())
        }
        lookAt(e, t, n) {
            e.isVector3 ? li.copy(e) : li.set(e, t, n);
            const r = this.parent;
            this.updateWorldMatrix(!0, !1), qn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? kt.lookAt(qn, li, this.up) : kt.lookAt(li, qn, this.up), this.quaternion.setFromRotationMatrix(kt), r && (kt.extractRotation(r.matrixWorld), yn.setFromRotationMatrix(kt), this.quaternion.premultiply(yn.invert()))
        }
        add(e) {
            if (arguments.length > 1) {
                for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
                return this
            }
            return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Cr), Rn.child = e, this.dispatchEvent(Rn), Rn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
        }
        remove(e) {
            if (arguments.length > 1) {
                for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
                return this
            }
            const t = this.children.indexOf(e);
            return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ys), Wi.child = e, this.dispatchEvent(Wi), Wi.child = null), this
        }
        removeFromParent() {
            const e = this.parent;
            return e !== null && e.remove(this), this
        }
        clear() {
            return this.remove(...this.children)
        }
        attach(e) {
            return this.updateWorldMatrix(!0, !1), kt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), kt.multiply(e.parent.matrixWorld)), e.applyMatrix4(kt), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Cr), Rn.child = e, this.dispatchEvent(Rn), Rn.child = null, this
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
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(qn, e, Xs), e
        }
        getWorldScale(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(qn, qs, e), e
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
                        for (let c = 0, f = l.length; c < f; c++) {
                            const h = l[c];
                            s(e.shapes, h)
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
                    f = a(e.images),
                    h = a(e.shapes),
                    d = a(e.skeletons),
                    m = a(e.animations),
                    v = a(e.nodes);
                o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), f.length > 0 && (n.images = f), h.length > 0 && (n.shapes = h), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), v.length > 0 && (n.nodes = v)
            }
            return n.object = r, n;

            function a(o) {
                const l = [];
                for (const c in o) {
                    const f = o[c];
                    delete f.metadata, l.push(f)
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
    Et.DEFAULT_UP = new B(0, 1, 0), Et.DEFAULT_MATRIX_AUTO_UPDATE = !0, Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const Dt = new B,
        Wt = new B,
        Xi = new B,
        Xt = new B,
        bn = new B,
        Cn = new B,
        wr = new B,
        qi = new B,
        Yi = new B,
        $i = new B,
        Ki = new st,
        Zi = new st,
        ji = new st;
    class Lt {
        constructor(e = new B, t = new B, n = new B) {
            this.a = e, this.b = t, this.c = n
        }
        static getNormal(e, t, n, r) {
            r.subVectors(n, t), Dt.subVectors(e, t), r.cross(Dt);
            const s = r.lengthSq();
            return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0)
        }
        static getBarycoord(e, t, n, r, s) {
            Dt.subVectors(r, t), Wt.subVectors(n, t), Xi.subVectors(e, t);
            const a = Dt.dot(Dt),
                o = Dt.dot(Wt),
                l = Dt.dot(Xi),
                c = Wt.dot(Wt),
                f = Wt.dot(Xi),
                h = a * c - o * o;
            if (h === 0) return s.set(0, 0, 0), null;
            const d = 1 / h,
                m = (c * l - o * f) * d,
                v = (a * f - o * l) * d;
            return s.set(1 - m - v, v, m)
        }
        static containsPoint(e, t, n, r) {
            return this.getBarycoord(e, t, n, r, Xt) === null ? !1 : Xt.x >= 0 && Xt.y >= 0 && Xt.x + Xt.y <= 1
        }
        static getInterpolation(e, t, n, r, s, a, o, l) {
            return this.getBarycoord(e, t, n, r, Xt) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Xt.x), l.addScaledVector(a, Xt.y), l.addScaledVector(o, Xt.z), l)
        }
        static getInterpolatedAttribute(e, t, n, r, s, a) {
            return Ki.setScalar(0), Zi.setScalar(0), ji.setScalar(0), Ki.fromBufferAttribute(e, t), Zi.fromBufferAttribute(e, n), ji.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(Ki, s.x), a.addScaledVector(Zi, s.y), a.addScaledVector(ji, s.z), a
        }
        static isFrontFacing(e, t, n, r) {
            return Dt.subVectors(n, t), Wt.subVectors(e, t), Dt.cross(Wt).dot(r) < 0
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
            return Dt.subVectors(this.c, this.b), Wt.subVectors(this.a, this.b), Dt.cross(Wt).length() * .5
        }
        getMidpoint(e) {
            return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        }
        getNormal(e) {
            return Lt.getNormal(this.a, this.b, this.c, e)
        }
        getPlane(e) {
            return e.setFromCoplanarPoints(this.a, this.b, this.c)
        }
        getBarycoord(e, t) {
            return Lt.getBarycoord(e, this.a, this.b, this.c, t)
        }
        getInterpolation(e, t, n, r, s) {
            return Lt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s)
        }
        containsPoint(e) {
            return Lt.containsPoint(e, this.a, this.b, this.c)
        }
        isFrontFacing(e) {
            return Lt.isFrontFacing(this.a, this.b, this.c, e)
        }
        intersectsBox(e) {
            return e.intersectsTriangle(this)
        }
        closestPointToPoint(e, t) {
            const n = this.a,
                r = this.b,
                s = this.c;
            let a, o;
            bn.subVectors(r, n), Cn.subVectors(s, n), qi.subVectors(e, n);
            const l = bn.dot(qi),
                c = Cn.dot(qi);
            if (l <= 0 && c <= 0) return t.copy(n);
            Yi.subVectors(e, r);
            const f = bn.dot(Yi),
                h = Cn.dot(Yi);
            if (f >= 0 && h <= f) return t.copy(r);
            const d = l * h - f * c;
            if (d <= 0 && l >= 0 && f <= 0) return a = l / (l - f), t.copy(n).addScaledVector(bn, a);
            $i.subVectors(e, s);
            const m = bn.dot($i),
                v = Cn.dot($i);
            if (v >= 0 && m <= v) return t.copy(s);
            const S = m * c - l * v;
            if (S <= 0 && c >= 0 && v <= 0) return o = c / (c - v), t.copy(n).addScaledVector(Cn, o);
            const p = f * v - m * h;
            if (p <= 0 && h - f >= 0 && m - v >= 0) return wr.subVectors(s, r), o = (h - f) / (h - f + (m - v)), t.copy(r).addScaledVector(wr, o);
            const u = 1 / (p + S + d);
            return a = S * u, o = d * u, t.copy(n).addScaledVector(bn, a).addScaledVector(Cn, o)
        }
        equals(e) {
            return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
        }
    }
    const Pr = {
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
        Jt = {
            h: 0,
            s: 0,
            l: 0
        },
        ci = {
            h: 0,
            s: 0,
            l: 0
        };

    function Ji(i, e, t) {
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
        setHex(e, t = yt) {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ge.colorSpaceToWorking(this, t), this
        }
        setRGB(e, t, n, r = Ge.workingColorSpace) {
            return this.r = e, this.g = t, this.b = n, Ge.colorSpaceToWorking(this, r), this
        }
        setHSL(e, t, n, r = Ge.workingColorSpace) {
            if (e = ws(e, 1), t = Oe(t, 0, 1), n = Oe(n, 0, 1), t === 0) this.r = this.g = this.b = n;
            else {
                const s = n <= .5 ? n * (1 + t) : n + t - n * t,
                    a = 2 * n - s;
                this.r = Ji(a, s, e + 1 / 3), this.g = Ji(a, s, e), this.b = Ji(a, s, e - 1 / 3)
            }
            return Ge.colorSpaceToWorking(this, r), this
        }
        setStyle(e, t = yt) {
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
        setColorName(e, t = yt) {
            const n = Pr[e.toLowerCase()];
            return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b)
        }
        copy(e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this
        }
        copySRGBToLinear(e) {
            return this.r = Gt(e.r), this.g = Gt(e.g), this.b = Gt(e.b), this
        }
        copyLinearToSRGB(e) {
            return this.r = xn(e.r), this.g = xn(e.g), this.b = xn(e.b), this
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this
        }
        getHex(e = yt) {
            return Ge.workingToColorSpace(pt.copy(this), e), Math.round(Oe(pt.r * 255, 0, 255)) * 65536 + Math.round(Oe(pt.g * 255, 0, 255)) * 256 + Math.round(Oe(pt.b * 255, 0, 255))
        }
        getHexString(e = yt) {
            return ("000000" + this.getHex(e).toString(16)).slice(-6)
        }
        getHSL(e, t = Ge.workingColorSpace) {
            Ge.workingToColorSpace(pt.copy(this), t);
            const n = pt.r,
                r = pt.g,
                s = pt.b,
                a = Math.max(n, r, s),
                o = Math.min(n, r, s);
            let l, c;
            const f = (o + a) / 2;
            if (o === a) l = 0, c = 0;
            else {
                const h = a - o;
                switch (c = f <= .5 ? h / (a + o) : h / (2 - a - o), a) {
                    case n:
                        l = (r - s) / h + (r < s ? 6 : 0);
                        break;
                    case r:
                        l = (s - n) / h + 2;
                        break;
                    case s:
                        l = (n - r) / h + 4;
                        break
                }
                l /= 6
            }
            return e.h = l, e.s = c, e.l = f, e
        }
        getRGB(e, t = Ge.workingColorSpace) {
            return Ge.workingToColorSpace(pt.copy(this), t), e.r = pt.r, e.g = pt.g, e.b = pt.b, e
        }
        getStyle(e = yt) {
            Ge.workingToColorSpace(pt.copy(this), e);
            const t = pt.r,
                n = pt.g,
                r = pt.b;
            return e !== yt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`
        }
        offsetHSL(e, t, n) {
            return this.getHSL(Jt), this.setHSL(Jt.h + e, Jt.s + t, Jt.l + n)
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
            this.getHSL(Jt), e.getHSL(ci);
            const n = Li(Jt.h, ci.h, t),
                r = Li(Jt.s, ci.s, t),
                s = Li(Jt.l, ci.l, t);
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
    const pt = new Ke;
    Ke.NAMES = Pr;
    let $s = 0;
    class Yn extends gn {
        constructor() {
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: $s++
            }), this.uuid = zn(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ke(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
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
    class Qi extends Yn {
        constructor(e) {
            super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ke(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Vt, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this
        }
    }
    const ot = new B,
        ui = new Ze;
    let Ks = 0;
    class Nt {
        constructor(e, t, n = !1) {
            if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.isBufferAttribute = !0, Object.defineProperty(this, "id", {
                value: Ks++
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
                for (let t = 0, n = this.count; t < n; t++) ui.fromBufferAttribute(this, t), ui.applyMatrix3(e), this.setXY(t, ui.x, ui.y);
            else if (this.itemSize === 3)
                for (let t = 0, n = this.count; t < n; t++) ot.fromBufferAttribute(this, t), ot.applyMatrix3(e), this.setXYZ(t, ot.x, ot.y, ot.z);
            return this
        }
        applyMatrix4(e) {
            for (let t = 0, n = this.count; t < n; t++) ot.fromBufferAttribute(this, t), ot.applyMatrix4(e), this.setXYZ(t, ot.x, ot.y, ot.z);
            return this
        }
        applyNormalMatrix(e) {
            for (let t = 0, n = this.count; t < n; t++) ot.fromBufferAttribute(this, t), ot.applyNormalMatrix(e), this.setXYZ(t, ot.x, ot.y, ot.z);
            return this
        }
        transformDirection(e) {
            for (let t = 0, n = this.count; t < n; t++) ot.fromBufferAttribute(this, t), ot.transformDirection(e), this.setXYZ(t, ot.x, ot.y, ot.z);
            return this
        }
        set(e, t = 0) {
            return this.array.set(e, t), this
        }
        getComponent(e, t) {
            let n = this.array[e * this.itemSize + t];
            return this.normalized && (n = Hn(n, this.array)), n
        }
        setComponent(e, t, n) {
            return this.normalized && (n = vt(n, this.array)), this.array[e * this.itemSize + t] = n, this
        }
        getX(e) {
            let t = this.array[e * this.itemSize];
            return this.normalized && (t = Hn(t, this.array)), t
        }
        setX(e, t) {
            return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize] = t, this
        }
        getY(e) {
            let t = this.array[e * this.itemSize + 1];
            return this.normalized && (t = Hn(t, this.array)), t
        }
        setY(e, t) {
            return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize + 1] = t, this
        }
        getZ(e) {
            let t = this.array[e * this.itemSize + 2];
            return this.normalized && (t = Hn(t, this.array)), t
        }
        setZ(e, t) {
            return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize + 2] = t, this
        }
        getW(e) {
            let t = this.array[e * this.itemSize + 3];
            return this.normalized && (t = Hn(t, this.array)), t
        }
        setW(e, t) {
            return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize + 3] = t, this
        }
        setXY(e, t, n) {
            return e *= this.itemSize, this.normalized && (t = vt(t, this.array), n = vt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this
        }
        setXYZ(e, t, n, r) {
            return e *= this.itemSize, this.normalized && (t = vt(t, this.array), n = vt(n, this.array), r = vt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this
        }
        setXYZW(e, t, n, r, s) {
            return e *= this.itemSize, this.normalized && (t = vt(t, this.array), n = vt(n, this.array), r = vt(r, this.array), s = vt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this
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
    class Dr extends Nt {
        constructor(e, t, n) {
            super(new Uint16Array(e), t, n)
        }
    }
    class Lr extends Nt {
        constructor(e, t, n) {
            super(new Uint32Array(e), t, n)
        }
    }
    class sn extends Nt {
        constructor(e, t, n) {
            super(new Float32Array(e), t, n)
        }
    }
    let Zs = 0;
    const Rt = new at,
        er = new Et,
        wn = new B,
        Tt = new kn,
        $n = new kn,
        dt = new B;
    class an extends gn {
        constructor() {
            super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
                value: Zs++
            }), this.uuid = zn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {}
        }
        getIndex() {
            return this.index
        }
        setIndex(e) {
            return Array.isArray(e) ? this.index = new(_r(e) ? Lr : Dr)(e, 1) : this.index = e, this
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
            return Rt.makeRotationFromQuaternion(e), this.applyMatrix4(Rt), this
        }
        rotateX(e) {
            return Rt.makeRotationX(e), this.applyMatrix4(Rt), this
        }
        rotateY(e) {
            return Rt.makeRotationY(e), this.applyMatrix4(Rt), this
        }
        rotateZ(e) {
            return Rt.makeRotationZ(e), this.applyMatrix4(Rt), this
        }
        translate(e, t, n) {
            return Rt.makeTranslation(e, t, n), this.applyMatrix4(Rt), this
        }
        scale(e, t, n) {
            return Rt.makeScale(e, t, n), this.applyMatrix4(Rt), this
        }
        lookAt(e) {
            return er.lookAt(e), er.updateMatrix(), this.applyMatrix4(er.matrix), this
        }
        center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(wn).negate(), this.translate(wn.x, wn.y, wn.z), this
        }
        setFromPoints(e) {
            const t = this.getAttribute("position");
            if (t === void 0) {
                const n = [];
                for (let r = 0, s = e.length; r < s; r++) {
                    const a = e[r];
                    n.push(a.x, a.y, a.z || 0)
                }
                this.setAttribute("position", new sn(n, 3))
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
            this.boundingBox === null && (this.boundingBox = new kn);
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
                        Tt.setFromBufferAttribute(s), this.morphTargetsRelative ? (dt.addVectors(this.boundingBox.min, Tt.min), this.boundingBox.expandByPoint(dt), dt.addVectors(this.boundingBox.max, Tt.max), this.boundingBox.expandByPoint(dt)) : (this.boundingBox.expandByPoint(Tt.min), this.boundingBox.expandByPoint(Tt.max))
                    }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
        computeBoundingSphere() {
            this.boundingSphere === null && (this.boundingSphere = new zi);
            const e = this.attributes.position,
                t = this.morphAttributes.position;
            if (e && e.isGLBufferAttribute) {
                console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new B, 1 / 0);
                return
            }
            if (e) {
                const n = this.boundingSphere.center;
                if (Tt.setFromBufferAttribute(e), t)
                    for (let s = 0, a = t.length; s < a; s++) {
                        const o = t[s];
                        $n.setFromBufferAttribute(o), this.morphTargetsRelative ? (dt.addVectors(Tt.min, $n.min), Tt.expandByPoint(dt), dt.addVectors(Tt.max, $n.max), Tt.expandByPoint(dt)) : (Tt.expandByPoint($n.min), Tt.expandByPoint($n.max))
                    }
                Tt.getCenter(n);
                let r = 0;
                for (let s = 0, a = e.count; s < a; s++) dt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(dt));
                if (t)
                    for (let s = 0, a = t.length; s < a; s++) {
                        const o = t[s],
                            l = this.morphTargetsRelative;
                        for (let c = 0, f = o.count; c < f; c++) dt.fromBufferAttribute(o, c), l && (wn.fromBufferAttribute(e, c), dt.add(wn)), r = Math.max(r, n.distanceToSquared(dt))
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
            this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Nt(new Float32Array(4 * n.count), 4));
            const a = this.getAttribute("tangent"),
                o = [],
                l = [];
            for (let U = 0; U < n.count; U++) o[U] = new B, l[U] = new B;
            const c = new B,
                f = new B,
                h = new B,
                d = new Ze,
                m = new Ze,
                v = new Ze,
                S = new B,
                p = new B;

            function u(U, E, x) {
                c.fromBufferAttribute(n, U), f.fromBufferAttribute(n, E), h.fromBufferAttribute(n, x), d.fromBufferAttribute(s, U), m.fromBufferAttribute(s, E), v.fromBufferAttribute(s, x), f.sub(c), h.sub(c), m.sub(d), v.sub(d);
                const P = 1 / (m.x * v.y - v.x * m.y);
                isFinite(P) && (S.copy(f).multiplyScalar(v.y).addScaledVector(h, -m.y).multiplyScalar(P), p.copy(h).multiplyScalar(m.x).addScaledVector(f, -v.x).multiplyScalar(P), o[U].add(S), o[E].add(S), o[x].add(S), l[U].add(p), l[E].add(p), l[x].add(p))
            }
            let y = this.groups;
            y.length === 0 && (y = [{
                start: 0,
                count: e.count
            }]);
            for (let U = 0, E = y.length; U < E; ++U) {
                const x = y[U],
                    P = x.start,
                    q = x.count;
                for (let G = P, W = P + q; G < W; G += 3) u(e.getX(G + 0), e.getX(G + 1), e.getX(G + 2))
            }
            const A = new B,
                M = new B,
                I = new B,
                w = new B;

            function C(U) {
                I.fromBufferAttribute(r, U), w.copy(I);
                const E = o[U];
                A.copy(E), A.sub(I.multiplyScalar(I.dot(E))).normalize(), M.crossVectors(w, E);
                const P = M.dot(l[U]) < 0 ? -1 : 1;
                a.setXYZW(U, A.x, A.y, A.z, P)
            }
            for (let U = 0, E = y.length; U < E; ++U) {
                const x = y[U],
                    P = x.start,
                    q = x.count;
                for (let G = P, W = P + q; G < W; G += 3) C(e.getX(G + 0)), C(e.getX(G + 1)), C(e.getX(G + 2))
            }
        }
        computeVertexNormals() {
            const e = this.index,
                t = this.getAttribute("position");
            if (t !== void 0) {
                let n = this.getAttribute("normal");
                if (n === void 0) n = new Nt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
                else
                    for (let d = 0, m = n.count; d < m; d++) n.setXYZ(d, 0, 0, 0);
                const r = new B,
                    s = new B,
                    a = new B,
                    o = new B,
                    l = new B,
                    c = new B,
                    f = new B,
                    h = new B;
                if (e)
                    for (let d = 0, m = e.count; d < m; d += 3) {
                        const v = e.getX(d + 0),
                            S = e.getX(d + 1),
                            p = e.getX(d + 2);
                        r.fromBufferAttribute(t, v), s.fromBufferAttribute(t, S), a.fromBufferAttribute(t, p), f.subVectors(a, s), h.subVectors(r, s), f.cross(h), o.fromBufferAttribute(n, v), l.fromBufferAttribute(n, S), c.fromBufferAttribute(n, p), o.add(f), l.add(f), c.add(f), n.setXYZ(v, o.x, o.y, o.z), n.setXYZ(S, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z)
                    } else
                        for (let d = 0, m = t.count; d < m; d += 3) r.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), f.subVectors(a, s), h.subVectors(r, s), f.cross(h), n.setXYZ(d + 0, f.x, f.y, f.z), n.setXYZ(d + 1, f.x, f.y, f.z), n.setXYZ(d + 2, f.x, f.y, f.z);
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
                    f = o.itemSize,
                    h = o.normalized,
                    d = new c.constructor(l.length * f);
                let m = 0,
                    v = 0;
                for (let S = 0, p = l.length; S < p; S++) {
                    o.isInterleavedBufferAttribute ? m = l[S] * o.data.stride + o.offset : m = l[S] * f;
                    for (let u = 0; u < f; u++) d[v++] = c[m++]
                }
                return new Nt(d, f, h)
            }
            if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const t = new an,
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
                for (let f = 0, h = c.length; f < h; f++) {
                    const d = c[f],
                        m = e(d, n);
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
                    f = [];
                for (let h = 0, d = c.length; h < d; h++) {
                    const m = c[h];
                    f.push(m.toJSON(e.data))
                }
                f.length > 0 && (r[l] = f, s = !0)
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
                const f = r[c];
                this.setAttribute(c, f.clone(t))
            }
            const s = e.morphAttributes;
            for (const c in s) {
                const f = [],
                    h = s[c];
                for (let d = 0, m = h.length; d < m; d++) f.push(h[d].clone(t));
                this.morphAttributes[c] = f
            }
            this.morphTargetsRelative = e.morphTargetsRelative;
            const a = e.groups;
            for (let c = 0, f = a.length; c < f; c++) {
                const h = a[c];
                this.addGroup(h.start, h.count, h.materialIndex)
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
    const Ir = new at,
        on = new Hs,
        di = new zi,
        Ur = new B,
        fi = new B,
        hi = new B,
        pi = new B,
        tr = new B,
        mi = new B,
        Fr = new B,
        _i = new B;
    class Ot extends Et {
        constructor(e = new an, t = new Qi) {
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
                mi.set(0, 0, 0);
                for (let l = 0, c = s.length; l < c; l++) {
                    const f = o[l],
                        h = s[l];
                    f !== 0 && (tr.fromBufferAttribute(h, e), a ? mi.addScaledVector(tr, f) : mi.addScaledVector(tr.sub(t), f))
                }
                t.add(mi)
            }
            return t
        }
        raycast(e, t) {
            const n = this.geometry,
                r = this.material,
                s = this.matrixWorld;
            r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), di.copy(n.boundingSphere), di.applyMatrix4(s), on.copy(e.ray).recast(e.near), !(di.containsPoint(on.origin) === !1 && (on.intersectSphere(di, Ur) === null || on.origin.distanceToSquared(Ur) > (e.far - e.near) ** 2)) && (Ir.copy(s).invert(), on.copy(e.ray).applyMatrix4(Ir), !(n.boundingBox !== null && on.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, on)))
        }
        _computeIntersections(e, t, n) {
            let r;
            const s = this.geometry,
                a = this.material,
                o = s.index,
                l = s.attributes.position,
                c = s.attributes.uv,
                f = s.attributes.uv1,
                h = s.attributes.normal,
                d = s.groups,
                m = s.drawRange;
            if (o !== null)
                if (Array.isArray(a))
                    for (let v = 0, S = d.length; v < S; v++) {
                        const p = d[v],
                            u = a[p.materialIndex],
                            y = Math.max(p.start, m.start),
                            A = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
                        for (let M = y, I = A; M < I; M += 3) {
                            const w = o.getX(M),
                                C = o.getX(M + 1),
                                U = o.getX(M + 2);
                            r = gi(this, u, e, n, c, f, h, w, C, U), r && (r.faceIndex = Math.floor(M / 3), r.face.materialIndex = p.materialIndex, t.push(r))
                        }
                    } else {
                        const v = Math.max(0, m.start),
                            S = Math.min(o.count, m.start + m.count);
                        for (let p = v, u = S; p < u; p += 3) {
                            const y = o.getX(p),
                                A = o.getX(p + 1),
                                M = o.getX(p + 2);
                            r = gi(this, a, e, n, c, f, h, y, A, M), r && (r.faceIndex = Math.floor(p / 3), t.push(r))
                        }
                    } else if (l !== void 0)
                        if (Array.isArray(a))
                            for (let v = 0, S = d.length; v < S; v++) {
                                const p = d[v],
                                    u = a[p.materialIndex],
                                    y = Math.max(p.start, m.start),
                                    A = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
                                for (let M = y, I = A; M < I; M += 3) {
                                    const w = M,
                                        C = M + 1,
                                        U = M + 2;
                                    r = gi(this, u, e, n, c, f, h, w, C, U), r && (r.faceIndex = Math.floor(M / 3), r.face.materialIndex = p.materialIndex, t.push(r))
                                }
                            } else {
                                const v = Math.max(0, m.start),
                                    S = Math.min(l.count, m.start + m.count);
                                for (let p = v, u = S; p < u; p += 3) {
                                    const y = p,
                                        A = p + 1,
                                        M = p + 2;
                                    r = gi(this, a, e, n, c, f, h, y, A, M), r && (r.faceIndex = Math.floor(p / 3), t.push(r))
                                }
                            }
        }
    }

    function js(i, e, t, n, r, s, a, o) {
        let l;
        if (e.side === 1 ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, e.side === 0, o), l === null) return null;
        _i.copy(o), _i.applyMatrix4(i.matrixWorld);
        const c = t.ray.origin.distanceTo(_i);
        return c < t.near || c > t.far ? null : {
            distance: c,
            point: _i.clone(),
            object: i
        }
    }

    function gi(i, e, t, n, r, s, a, o, l, c) {
        i.getVertexPosition(o, fi), i.getVertexPosition(l, hi), i.getVertexPosition(c, pi);
        const f = js(i, e, t, n, fi, hi, pi, Fr);
        if (f) {
            const h = new B;
            Lt.getBarycoord(Fr, fi, hi, pi, h), r && (f.uv = Lt.getInterpolatedAttribute(r, o, l, c, h, new Ze)), s && (f.uv1 = Lt.getInterpolatedAttribute(s, o, l, c, h, new Ze)), a && (f.normal = Lt.getInterpolatedAttribute(a, o, l, c, h, new B), f.normal.dot(n.direction) > 0 && f.normal.multiplyScalar(-1));
            const d = {
                a: o,
                b: l,
                c,
                normal: new B,
                materialIndex: 0
            };
            Lt.getNormal(fi, hi, pi, d.normal), f.face = d, f.barycoord = h
        }
        return f
    }
    class Kn extends an {
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
                f = [],
                h = [];
            let d = 0,
                m = 0;
            v("z", "y", "x", -1, -1, n, t, e, a, s, 0), v("z", "y", "x", 1, -1, n, t, -e, a, s, 1), v("x", "z", "y", 1, 1, e, n, t, r, a, 2), v("x", "z", "y", 1, -1, e, n, -t, r, a, 3), v("x", "y", "z", 1, -1, e, t, n, r, s, 4), v("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new sn(c, 3)), this.setAttribute("normal", new sn(f, 3)), this.setAttribute("uv", new sn(h, 2));

            function v(S, p, u, y, A, M, I, w, C, U, E) {
                const x = M / C,
                    P = I / U,
                    q = M / 2,
                    G = I / 2,
                    W = w / 2,
                    j = C + 1,
                    V = U + 1;
                let ee = 0,
                    z = 0;
                const oe = new B;
                for (let fe = 0; fe < V; fe++) {
                    const Te = fe * P - G;
                    for (let Ne = 0; Ne < j; Ne++) {
                        const je = Ne * x - q;
                        oe[S] = je * y, oe[p] = Te * A, oe[u] = W, c.push(oe.x, oe.y, oe.z), oe[S] = 0, oe[p] = 0, oe[u] = w > 0 ? 1 : -1, f.push(oe.x, oe.y, oe.z), h.push(Ne / C), h.push(1 - fe / U), ee += 1
                    }
                }
                for (let fe = 0; fe < U; fe++)
                    for (let Te = 0; Te < C; Te++) {
                        const Ne = d + Te + j * fe,
                            je = d + Te + j * (fe + 1),
                            X = d + (Te + 1) + j * (fe + 1),
                            te = d + (Te + 1) + j * fe;
                        l.push(Ne, je, te), l.push(je, X, te), z += 6
                    }
                o.addGroup(m, z, E), m += z, d += ee
            }
        }
        copy(e) {
            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this
        }
        static fromJSON(e) {
            return new Kn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
        }
    }

    function Pn(i) {
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

    function mt(i) {
        const e = {};
        for (let t = 0; t < i.length; t++) {
            const n = Pn(i[t]);
            for (const r in n) e[r] = n[r]
        }
        return e
    }

    function Js(i) {
        const e = [];
        for (let t = 0; t < i.length; t++) e.push(i[t].clone());
        return e
    }

    function Nr(i) {
        const e = i.getRenderTarget();
        return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Ge.workingColorSpace
    }
    const Qs = {
        clone: Pn,
        merge: mt
    };
    var ea = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
        ta = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
    class Qt extends Yn {
        constructor(e) {
            super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ea, this.fragmentShader = ta, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
                clipCullDistance: !1,
                multiDraw: !1
            }, this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv1: [0, 0]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Pn(e.uniforms), this.uniformsGroups = Js(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this
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
    class Or extends Et {
        constructor() {
            super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new at, this.projectionMatrix = new at, this.projectionMatrixInverse = new at, this.coordinateSystem = 2e3
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
    const en = new B,
        Br = new Ze,
        Gr = new Ze;
    class It extends Or {
        constructor(e = 50, t = 1, n = .1, r = 2e3) {
            super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
        }
        copy(e, t) {
            return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
        }
        setFocalLength(e) {
            const t = .5 * this.getFilmHeight() / e;
            this.fov = Di * 2 * Math.atan(t), this.updateProjectionMatrix()
        }
        getFocalLength() {
            const e = Math.tan(Pi * .5 * this.fov);
            return .5 * this.getFilmHeight() / e
        }
        getEffectiveFOV() {
            return Di * 2 * Math.atan(Math.tan(Pi * .5 * this.fov) / this.zoom)
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1)
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1)
        }
        getViewBounds(e, t, n) {
            en.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(en.x, en.y).multiplyScalar(-e / en.z), en.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(en.x, en.y).multiplyScalar(-e / en.z)
        }
        getViewSize(e, t) {
            return this.getViewBounds(e, Br, Gr), t.subVectors(Gr, Br)
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
            let t = e * Math.tan(Pi * .5 * this.fov) / this.zoom,
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
    const Dn = -90,
        Ln = 1;
    class na extends Et {
        constructor(e, t, n) {
            super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
            const r = new It(Dn, Ln, e, t);
            r.layers = this.layers, this.add(r);
            const s = new It(Dn, Ln, e, t);
            s.layers = this.layers, this.add(s);
            const a = new It(Dn, Ln, e, t);
            a.layers = this.layers, this.add(a);
            const o = new It(Dn, Ln, e, t);
            o.layers = this.layers, this.add(o);
            const l = new It(Dn, Ln, e, t);
            l.layers = this.layers, this.add(l);
            const c = new It(Dn, Ln, e, t);
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
            const [s, a, o, l, c, f] = this.children, h = e.getRenderTarget(), d = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), v = e.xr.enabled;
            e.xr.enabled = !1;
            const S = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, a), e.setRenderTarget(n, 2, r), e.render(t, o), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = S, e.setRenderTarget(n, 5, r), e.render(t, f), e.setRenderTarget(h, d, m), e.xr.enabled = v, n.texture.needsPMREMUpdate = !0
        }
    }
    class zr extends xt {
        constructor(e = [], t = 301, n, r, s, a, o, l, c, f) {
            super(e, t, n, r, s, a, o, l, c, f), this.isCubeTexture = !0, this.flipY = !1
        }
        get images() {
            return this.image
        }
        set images(e) {
            this.image = e
        }
    }
    class ia extends tn {
        constructor(e = 1, t = {}) {
            super(e, e, t), this.isWebGLCubeRenderTarget = !0;
            const n = {
                    width: e,
                    height: e,
                    depth: 1
                },
                r = [n, n, n, n, n, n];
            this.texture = new zr(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0
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
                r = new Kn(5, 5, 5),
                s = new Qt({
                    name: "CubemapFromEquirect",
                    uniforms: Pn(n.uniforms),
                    vertexShader: n.vertexShader,
                    fragmentShader: n.fragmentShader,
                    side: 1,
                    blending: 0
                });
            s.uniforms.tEquirect.value = t;
            const a = new Ot(r, s),
                o = t.minFilter;
            return t.minFilter === 1008 && (t.minFilter = 1006), new na(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this
        }
        clear(e, t = !0, n = !0, r = !0) {
            const s = e.getRenderTarget();
            for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, r);
            e.setRenderTarget(s)
        }
    }
    class vi extends Et {
        constructor() {
            super(), this.isGroup = !0, this.type = "Group"
        }
    }
    const ra = {
        type: "move"
    };
    class nr {
        constructor() {
            this._targetRay = null, this._grip = null, this._hand = null
        }
        getHandSpace() {
            return this._hand === null && (this._hand = new vi, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                pinching: !1
            }), this._hand
        }
        getTargetRaySpace() {
            return this._targetRay === null && (this._targetRay = new vi, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new B, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new B), this._targetRay
        }
        getGripSpace() {
            return this._grip === null && (this._grip = new vi, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new B, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new B), this._grip
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
                    const f = c.joints["index-finger-tip"],
                        h = c.joints["thumb-tip"],
                        d = f.position.distanceTo(h.position),
                        m = .02,
                        v = .005;
                    c.inputState.pinching && d > m + v ? (c.inputState.pinching = !1, this.dispatchEvent({
                        type: "pinchend",
                        handedness: e.handedness,
                        target: this
                    })) : !c.inputState.pinching && d <= m - v && (c.inputState.pinching = !0, this.dispatchEvent({
                        type: "pinchstart",
                        handedness: e.handedness,
                        target: this
                    }))
                } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
                o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(ra)))
            }
            return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this
        }
        _getHandJoint(e, t) {
            if (e.joints[t.jointName] === void 0) {
                const n = new vi;
                n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n)
            }
            return e.joints[t.jointName]
        }
    }
    class sa extends Et {
        constructor() {
            super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Vt, this.environmentIntensity = 1, this.environmentRotation = new Vt, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
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
    const ir = new B,
        aa = new B,
        oa = new Ue;
    class ln {
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
            const r = ir.subVectors(n, t).cross(aa.subVectors(e, t)).normalize();
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
            const n = e.delta(ir),
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
            const n = t || oa.getNormalMatrix(e),
                r = this.coplanarPoint(ir).applyMatrix4(e),
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
    const cn = new zi,
        xi = new B;
    class Hr {
        constructor(e = new ln, t = new ln, n = new ln, r = new ln, s = new ln, a = new ln) {
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
                f = r[5],
                h = r[6],
                d = r[7],
                m = r[8],
                v = r[9],
                S = r[10],
                p = r[11],
                u = r[12],
                y = r[13],
                A = r[14],
                M = r[15];
            if (n[0].setComponents(l - s, d - c, p - m, M - u).normalize(), n[1].setComponents(l + s, d + c, p + m, M + u).normalize(), n[2].setComponents(l + a, d + f, p + v, M + y).normalize(), n[3].setComponents(l - a, d - f, p - v, M - y).normalize(), n[4].setComponents(l - o, d - h, p - S, M - A).normalize(), t === 2e3) n[5].setComponents(l + o, d + h, p + S, M + A).normalize();
            else if (t === 2001) n[5].setComponents(o, h, S, A).normalize();
            else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
            return this
        }
        intersectsObject(e) {
            if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
            else {
                const t = e.geometry;
                t.boundingSphere === null && t.computeBoundingSphere(), cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)
            }
            return this.intersectsSphere(cn)
        }
        intersectsSprite(e) {
            return cn.center.set(0, 0, 0), cn.radius = .7071067811865476, cn.applyMatrix4(e.matrixWorld), this.intersectsSphere(cn)
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
                if (xi.x = r.normal.x > 0 ? e.max.x : e.min.x, xi.y = r.normal.y > 0 ? e.max.y : e.min.y, xi.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(xi) < 0) return !1
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
    class Vr extends xt {
        constructor(e, t, n = 1014, r, s, a, o = 1003, l = 1003, c, f = 1026, h = 1) {
            if (f !== 1026 && f !== 1027) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            const d = {
                width: e,
                height: t,
                depth: h
            };
            super(d, r, s, a, o, l, f, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null
        }
        copy(e) {
            return super.copy(e), this.source = new Fi(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t
        }
    }
    class Zn extends an {
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
                f = l + 1,
                h = e / o,
                d = t / l,
                m = [],
                v = [],
                S = [],
                p = [];
            for (let u = 0; u < f; u++) {
                const y = u * d - a;
                for (let A = 0; A < c; A++) {
                    const M = A * h - s;
                    v.push(M, -y, 0), S.push(0, 0, 1), p.push(A / o), p.push(1 - u / l)
                }
            }
            for (let u = 0; u < l; u++)
                for (let y = 0; y < o; y++) {
                    const A = y + c * u,
                        M = y + c * (u + 1),
                        I = y + 1 + c * (u + 1),
                        w = y + 1 + c * u;
                    m.push(A, M, w), m.push(M, I, w)
                }
            this.setIndex(m), this.setAttribute("position", new sn(v, 3)), this.setAttribute("normal", new sn(S, 3)), this.setAttribute("uv", new sn(p, 2))
        }
        copy(e) {
            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this
        }
        static fromJSON(e) {
            return new Zn(e.width, e.height, e.widthSegments, e.heightSegments)
        }
    }
    class la extends Yn {
        constructor(e) {
            super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
        }
    }
    class ca extends Yn {
        constructor(e) {
            super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e)
        }
        copy(e) {
            return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
        }
    }
    class kr extends Or {
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
                    f = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                s += c * this.view.offsetX, a = s + c * this.view.width, o -= f * this.view.offsetY, l = o - f * this.view.height
            }
            this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t
        }
    }
    class ua extends It {
        constructor(e = []) {
            super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e
        }
    }

    function Wr(i, e, t, n) {
        const r = da(n);
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

    function da(i) {
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
            revision: wi
        }
    })), typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = wi);
    /**
     * @license
     * Copyright 2010-2025 Three.js Authors
     * SPDX-License-Identifier: MIT
     */
    function Xr() {
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

    function fa(i) {
        const e = new WeakMap;

        function t(o, l) {
            const c = o.array,
                f = o.usage,
                h = c.byteLength,
                d = i.createBuffer();
            i.bindBuffer(l, d), i.bufferData(l, c, f), o.onUploadCallback();
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
                buffer: d,
                type: m,
                bytesPerElement: c.BYTES_PER_ELEMENT,
                version: o.version,
                size: h
            }
        }

        function n(o, l, c) {
            const f = l.array,
                h = l.updateRanges;
            if (i.bindBuffer(c, o), h.length === 0) i.bufferSubData(c, 0, f);
            else {
                h.sort((m, v) => m.start - v.start);
                let d = 0;
                for (let m = 1; m < h.length; m++) {
                    const v = h[d],
                        S = h[m];
                    S.start <= v.start + v.count + 1 ? v.count = Math.max(v.count, S.start + S.count - v.start) : (++d, h[d] = S)
                }
                h.length = d + 1;
                for (let m = 0, v = h.length; m < v; m++) {
                    const S = h[m];
                    i.bufferSubData(c, S.start * f.BYTES_PER_ELEMENT, f, S.start, S.count)
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
                const f = e.get(o);
                (!f || f.version < o.version) && e.set(o, {
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
    var ha = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
        pa = `#ifdef USE_ALPHAHASH
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
        ma = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
        _a = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
        ga = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
        va = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
        xa = `#ifdef USE_AOMAP
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
        Sa = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
        Ma = `#ifdef USE_BATCHING
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
        Ea = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
        Ta = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
        Aa = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
        ya = `float G_BlinnPhong_Implicit( ) {
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
        Ra = `#ifdef USE_IRIDESCENCE
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
        ba = `#ifdef USE_BUMPMAP
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
        Ca = `#if NUM_CLIPPING_PLANES > 0
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
        wa = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
        Pa = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
        Da = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
        La = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
        Ia = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
        Ua = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
        Fa = `#if defined( USE_COLOR_ALPHA )
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
        Na = `#define PI 3.141592653589793
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
        Oa = `#ifdef ENVMAP_TYPE_CUBE_UV
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
        Ba = `vec3 transformedNormal = objectNormal;
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
        Ga = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
        za = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
        Ha = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
        Va = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
        ka = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        Wa = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
        Xa = `#ifdef USE_ENVMAP
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
        qa = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
        Ya = `#ifdef USE_ENVMAP
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
        $a = `#ifdef USE_ENVMAP
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
        Ka = `#ifdef USE_ENVMAP
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
        Za = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
        ja = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
        Ja = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
        Qa = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
        eo = `#ifdef USE_GRADIENTMAP
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
        to = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
        no = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
        io = `varying vec3 vViewPosition;
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
        ro = `uniform bool receiveShadow;
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
        so = `#ifdef USE_ENVMAP
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
        ao = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
        oo = `varying vec3 vViewPosition;
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
        lo = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
        co = `varying vec3 vViewPosition;
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
        uo = `PhysicalMaterial material;
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
        fo = `struct PhysicalMaterial {
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
        ho = `
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
        po = `#if defined( RE_IndirectDiffuse )
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
        mo = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
        _o = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
        go = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
        vo = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
        xo = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
        So = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
        Mo = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
        Eo = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
        To = `#if defined( USE_POINTS_UV )
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
        Ao = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
        yo = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
        Ro = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
        bo = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
        Co = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
        wo = `#ifdef USE_MORPHTARGETS
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
        Po = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
        Do = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
        Lo = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
        Io = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
        Uo = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
        Fo = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
        No = `#ifdef USE_NORMALMAP
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
        Oo = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
        Bo = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
        Go = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
        zo = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
        Ho = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
        Vo = `vec3 packNormalToRGB( const in vec3 normal ) {
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
        ko = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
        Wo = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
        Xo = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
        qo = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
        Yo = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
        $o = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
        Ko = `#if NUM_SPOT_LIGHT_COORDS > 0
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
        Zo = `#if NUM_SPOT_LIGHT_COORDS > 0
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
        jo = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
        Jo = `float getShadowMask() {
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
        Qo = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
        el = `#ifdef USE_SKINNING
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
        tl = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
        nl = `#ifdef USE_SKINNING
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
        il = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
        rl = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
        sl = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
        al = `#ifndef saturate
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
        ol = `#ifdef USE_TRANSMISSION
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
        ll = `#ifdef USE_TRANSMISSION
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
        cl = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
        ul = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
        dl = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
        fl = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
            alphahash_fragment: ha,
            alphahash_pars_fragment: pa,
            alphamap_fragment: ma,
            alphamap_pars_fragment: _a,
            alphatest_fragment: ga,
            alphatest_pars_fragment: va,
            aomap_fragment: xa,
            aomap_pars_fragment: Sa,
            batching_pars_vertex: Ma,
            batching_vertex: Ea,
            begin_vertex: Ta,
            beginnormal_vertex: Aa,
            bsdfs: ya,
            iridescence_fragment: Ra,
            bumpmap_pars_fragment: ba,
            clipping_planes_fragment: Ca,
            clipping_planes_pars_fragment: wa,
            clipping_planes_pars_vertex: Pa,
            clipping_planes_vertex: Da,
            color_fragment: La,
            color_pars_fragment: Ia,
            color_pars_vertex: Ua,
            color_vertex: Fa,
            common: Na,
            cube_uv_reflection_fragment: Oa,
            defaultnormal_vertex: Ba,
            displacementmap_pars_vertex: Ga,
            displacementmap_vertex: za,
            emissivemap_fragment: Ha,
            emissivemap_pars_fragment: Va,
            colorspace_fragment: ka,
            colorspace_pars_fragment: Wa,
            envmap_fragment: Xa,
            envmap_common_pars_fragment: qa,
            envmap_pars_fragment: Ya,
            envmap_pars_vertex: $a,
            envmap_physical_pars_fragment: so,
            envmap_vertex: Ka,
            fog_vertex: Za,
            fog_pars_vertex: ja,
            fog_fragment: Ja,
            fog_pars_fragment: Qa,
            gradientmap_pars_fragment: eo,
            lightmap_pars_fragment: to,
            lights_lambert_fragment: no,
            lights_lambert_pars_fragment: io,
            lights_pars_begin: ro,
            lights_toon_fragment: ao,
            lights_toon_pars_fragment: oo,
            lights_phong_fragment: lo,
            lights_phong_pars_fragment: co,
            lights_physical_fragment: uo,
            lights_physical_pars_fragment: fo,
            lights_fragment_begin: ho,
            lights_fragment_maps: po,
            lights_fragment_end: mo,
            logdepthbuf_fragment: _o,
            logdepthbuf_pars_fragment: go,
            logdepthbuf_pars_vertex: vo,
            logdepthbuf_vertex: xo,
            map_fragment: So,
            map_pars_fragment: Mo,
            map_particle_fragment: Eo,
            map_particle_pars_fragment: To,
            metalnessmap_fragment: Ao,
            metalnessmap_pars_fragment: yo,
            morphinstance_vertex: Ro,
            morphcolor_vertex: bo,
            morphnormal_vertex: Co,
            morphtarget_pars_vertex: wo,
            morphtarget_vertex: Po,
            normal_fragment_begin: Do,
            normal_fragment_maps: Lo,
            normal_pars_fragment: Io,
            normal_pars_vertex: Uo,
            normal_vertex: Fo,
            normalmap_pars_fragment: No,
            clearcoat_normal_fragment_begin: Oo,
            clearcoat_normal_fragment_maps: Bo,
            clearcoat_pars_fragment: Go,
            iridescence_pars_fragment: zo,
            opaque_fragment: Ho,
            packing: Vo,
            premultiplied_alpha_fragment: ko,
            project_vertex: Wo,
            dithering_fragment: Xo,
            dithering_pars_fragment: qo,
            roughnessmap_fragment: Yo,
            roughnessmap_pars_fragment: $o,
            shadowmap_pars_fragment: Ko,
            shadowmap_pars_vertex: Zo,
            shadowmap_vertex: jo,
            shadowmask_pars_fragment: Jo,
            skinbase_vertex: Qo,
            skinning_pars_vertex: el,
            skinning_vertex: tl,
            skinnormal_vertex: nl,
            specularmap_fragment: il,
            specularmap_pars_fragment: rl,
            tonemapping_fragment: sl,
            tonemapping_pars_fragment: al,
            transmission_fragment: ol,
            transmission_pars_fragment: ll,
            uv_pars_fragment: cl,
            uv_pars_vertex: ul,
            uv_vertex: dl,
            worldpos_vertex: fl,
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
        Bt = {
            basic: {
                uniforms: mt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.fog]),
                vertexShader: Ie.meshbasic_vert,
                fragmentShader: Ie.meshbasic_frag
            },
            lambert: {
                uniforms: mt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, ne.lights, {
                    emissive: {
                        value: new Ke(0)
                    }
                }]),
                vertexShader: Ie.meshlambert_vert,
                fragmentShader: Ie.meshlambert_frag
            },
            phong: {
                uniforms: mt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, ne.lights, {
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
                uniforms: mt([ne.common, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.roughnessmap, ne.metalnessmap, ne.fog, ne.lights, {
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
                uniforms: mt([ne.common, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.gradientmap, ne.fog, ne.lights, {
                    emissive: {
                        value: new Ke(0)
                    }
                }]),
                vertexShader: Ie.meshtoon_vert,
                fragmentShader: Ie.meshtoon_frag
            },
            matcap: {
                uniforms: mt([ne.common, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, {
                    matcap: {
                        value: null
                    }
                }]),
                vertexShader: Ie.meshmatcap_vert,
                fragmentShader: Ie.meshmatcap_frag
            },
            points: {
                uniforms: mt([ne.points, ne.fog]),
                vertexShader: Ie.points_vert,
                fragmentShader: Ie.points_frag
            },
            dashed: {
                uniforms: mt([ne.common, ne.fog, {
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
                uniforms: mt([ne.common, ne.displacementmap]),
                vertexShader: Ie.depth_vert,
                fragmentShader: Ie.depth_frag
            },
            normal: {
                uniforms: mt([ne.common, ne.bumpmap, ne.normalmap, ne.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: Ie.meshnormal_vert,
                fragmentShader: Ie.meshnormal_frag
            },
            sprite: {
                uniforms: mt([ne.sprite, ne.fog]),
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
                uniforms: mt([ne.common, ne.displacementmap, {
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
                uniforms: mt([ne.lights, ne.fog, {
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
    Bt.physical = {
        uniforms: mt([Bt.standard.uniforms, {
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
    const Si = {
            r: 0,
            b: 0,
            g: 0
        },
        un = new Vt,
        hl = new at;

    function pl(i, e, t, n, r, s, a) {
        const o = new Ke(0);
        let l = s === !0 ? 0 : 1,
            c, f, h = null,
            d = 0,
            m = null;

        function v(A) {
            let M = A.isScene === !0 ? A.background : null;
            return M && M.isTexture && (M = (A.backgroundBlurriness > 0 ? t : e).get(M)), M
        }

        function S(A) {
            let M = !1;
            const I = v(A);
            I === null ? u(o, l) : I && I.isColor && (u(I, 1), M = !0);
            const w = i.xr.getEnvironmentBlendMode();
            w === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : w === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || M) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil))
        }

        function p(A, M) {
            const I = v(M);
            I && (I.isCubeTexture || I.mapping === 306) ? (f === void 0 && (f = new Ot(new Kn(1, 1, 1), new Qt({
                name: "BackgroundCubeMaterial",
                uniforms: Pn(Bt.backgroundCube.uniforms),
                vertexShader: Bt.backgroundCube.vertexShader,
                fragmentShader: Bt.backgroundCube.fragmentShader,
                side: 1,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
                allowOverride: !1
            })), f.geometry.deleteAttribute("normal"), f.geometry.deleteAttribute("uv"), f.onBeforeRender = function(w, C, U) {
                this.matrixWorld.copyPosition(U.matrixWorld)
            }, Object.defineProperty(f.material, "envMap", {
                get: function() {
                    return this.uniforms.envMap.value
                }
            }), r.update(f)), un.copy(M.backgroundRotation), un.x *= -1, un.y *= -1, un.z *= -1, I.isCubeTexture && I.isRenderTargetTexture === !1 && (un.y *= -1, un.z *= -1), f.material.uniforms.envMap.value = I, f.material.uniforms.flipEnvMap.value = I.isCubeTexture && I.isRenderTargetTexture === !1 ? -1 : 1, f.material.uniforms.backgroundBlurriness.value = M.backgroundBlurriness, f.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, f.material.uniforms.backgroundRotation.value.setFromMatrix4(hl.makeRotationFromEuler(un)), f.material.toneMapped = Ge.getTransfer(I.colorSpace) !== $e, (h !== I || d !== I.version || m !== i.toneMapping) && (f.material.needsUpdate = !0, h = I, d = I.version, m = i.toneMapping), f.layers.enableAll(), A.unshift(f, f.geometry, f.material, 0, 0, null)) : I && I.isTexture && (c === void 0 && (c = new Ot(new Zn(2, 2), new Qt({
                name: "BackgroundMaterial",
                uniforms: Pn(Bt.background.uniforms),
                vertexShader: Bt.background.vertexShader,
                fragmentShader: Bt.background.fragmentShader,
                side: 0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
                allowOverride: !1
            })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
                get: function() {
                    return this.uniforms.t2D.value
                }
            }), r.update(c)), c.material.uniforms.t2D.value = I, c.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, c.material.toneMapped = Ge.getTransfer(I.colorSpace) !== $e, I.matrixAutoUpdate === !0 && I.updateMatrix(), c.material.uniforms.uvTransform.value.copy(I.matrix), (h !== I || d !== I.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, h = I, d = I.version, m = i.toneMapping), c.layers.enableAll(), A.unshift(c, c.geometry, c.material, 0, 0, null))
        }

        function u(A, M) {
            A.getRGB(Si, Nr(i)), n.buffers.color.setClear(Si.r, Si.g, Si.b, M, a)
        }

        function y() {
            f !== void 0 && (f.geometry.dispose(), f.material.dispose(), f = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0)
        }
        return {
            getClearColor: function() {
                return o
            },
            setClearColor: function(A, M = 1) {
                o.set(A), l = M, u(o, l)
            },
            getClearAlpha: function() {
                return l
            },
            setClearAlpha: function(A) {
                l = A, u(o, l)
            },
            render: S,
            addToRenderList: p,
            dispose: y
        }
    }

    function ml(i, e) {
        const t = i.getParameter(i.MAX_VERTEX_ATTRIBS),
            n = {},
            r = d(null);
        let s = r,
            a = !1;

        function o(x, P, q, G, W) {
            let j = !1;
            const V = h(G, q, P);
            s !== V && (s = V, c(s.object)), j = m(x, G, q, W), j && v(x, G, q, W), W !== null && e.update(W, i.ELEMENT_ARRAY_BUFFER), (j || a) && (a = !1, M(x, P, q, G), W !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(W).buffer))
        }

        function l() {
            return i.createVertexArray()
        }

        function c(x) {
            return i.bindVertexArray(x)
        }

        function f(x) {
            return i.deleteVertexArray(x)
        }

        function h(x, P, q) {
            const G = q.wireframe === !0;
            let W = n[x.id];
            W === void 0 && (W = {}, n[x.id] = W);
            let j = W[P.id];
            j === void 0 && (j = {}, W[P.id] = j);
            let V = j[G];
            return V === void 0 && (V = d(l()), j[G] = V), V
        }

        function d(x) {
            const P = [],
                q = [],
                G = [];
            for (let W = 0; W < t; W++) P[W] = 0, q[W] = 0, G[W] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: P,
                enabledAttributes: q,
                attributeDivisors: G,
                object: x,
                attributes: {},
                index: null
            }
        }

        function m(x, P, q, G) {
            const W = s.attributes,
                j = P.attributes;
            let V = 0;
            const ee = q.getAttributes();
            for (const z in ee)
                if (ee[z].location >= 0) {
                    const fe = W[z];
                    let Te = j[z];
                    if (Te === void 0 && (z === "instanceMatrix" && x.instanceMatrix && (Te = x.instanceMatrix), z === "instanceColor" && x.instanceColor && (Te = x.instanceColor)), fe === void 0 || fe.attribute !== Te || Te && fe.data !== Te.data) return !0;
                    V++
                }
            return s.attributesNum !== V || s.index !== G
        }

        function v(x, P, q, G) {
            const W = {},
                j = P.attributes;
            let V = 0;
            const ee = q.getAttributes();
            for (const z in ee)
                if (ee[z].location >= 0) {
                    let fe = j[z];
                    fe === void 0 && (z === "instanceMatrix" && x.instanceMatrix && (fe = x.instanceMatrix), z === "instanceColor" && x.instanceColor && (fe = x.instanceColor));
                    const Te = {};
                    Te.attribute = fe, fe && fe.data && (Te.data = fe.data), W[z] = Te, V++
                }
            s.attributes = W, s.attributesNum = V, s.index = G
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
                G = s.enabledAttributes,
                W = s.attributeDivisors;
            q[x] = 1, G[x] === 0 && (i.enableVertexAttribArray(x), G[x] = 1), W[x] !== P && (i.vertexAttribDivisor(x, P), W[x] = P)
        }

        function y() {
            const x = s.newAttributes,
                P = s.enabledAttributes;
            for (let q = 0, G = P.length; q < G; q++) P[q] !== x[q] && (i.disableVertexAttribArray(q), P[q] = 0)
        }

        function A(x, P, q, G, W, j, V) {
            V === !0 ? i.vertexAttribIPointer(x, P, q, W, j) : i.vertexAttribPointer(x, P, q, G, W, j)
        }

        function M(x, P, q, G) {
            S();
            const W = G.attributes,
                j = q.getAttributes(),
                V = P.defaultAttributeValues;
            for (const ee in j) {
                const z = j[ee];
                if (z.location >= 0) {
                    let oe = W[ee];
                    if (oe === void 0 && (ee === "instanceMatrix" && x.instanceMatrix && (oe = x.instanceMatrix), ee === "instanceColor" && x.instanceColor && (oe = x.instanceColor)), oe !== void 0) {
                        const fe = oe.normalized,
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
                                for (let Ce = 0; Ce < z.locationSize; Ce++) u(z.location + Ce, le.meshPerAttribute);
                                x.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = le.meshPerAttribute * le.count)
                            } else
                                for (let Ce = 0; Ce < z.locationSize; Ce++) p(z.location + Ce);
                            i.bindBuffer(i.ARRAY_BUFFER, je);
                            for (let Ce = 0; Ce < z.locationSize; Ce++) A(z.location + Ce, Te / z.locationSize, X, fe, Me * te, (Ve + Te / z.locationSize * Ce) * te, Se)
                        } else {
                            if (oe.isInstancedBufferAttribute) {
                                for (let le = 0; le < z.locationSize; le++) u(z.location + le, oe.meshPerAttribute);
                                x.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = oe.meshPerAttribute * oe.count)
                            } else
                                for (let le = 0; le < z.locationSize; le++) p(z.location + le);
                            i.bindBuffer(i.ARRAY_BUFFER, je);
                            for (let le = 0; le < z.locationSize; le++) A(z.location + le, Te / z.locationSize, X, fe, Te * te, Te / z.locationSize * le * te, Se)
                        }
                    } else if (V !== void 0) {
                        const fe = V[ee];
                        if (fe !== void 0) switch (fe.length) {
                            case 2:
                                i.vertexAttrib2fv(z.location, fe);
                                break;
                            case 3:
                                i.vertexAttrib3fv(z.location, fe);
                                break;
                            case 4:
                                i.vertexAttrib4fv(z.location, fe);
                                break;
                            default:
                                i.vertexAttrib1fv(z.location, fe)
                        }
                    }
                }
            }
            y()
        }

        function I() {
            U();
            for (const x in n) {
                const P = n[x];
                for (const q in P) {
                    const G = P[q];
                    for (const W in G) f(G[W].object), delete G[W];
                    delete P[q]
                }
                delete n[x]
            }
        }

        function w(x) {
            if (n[x.id] === void 0) return;
            const P = n[x.id];
            for (const q in P) {
                const G = P[q];
                for (const W in G) f(G[W].object), delete G[W];
                delete P[q]
            }
            delete n[x.id]
        }

        function C(x) {
            for (const P in n) {
                const q = n[P];
                if (q[x.id] === void 0) continue;
                const G = q[x.id];
                for (const W in G) f(G[W].object), delete G[W];
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
            disableUnusedAttributes: y
        }
    }

    function _l(i, e, t) {
        let n;

        function r(c) {
            n = c
        }

        function s(c, f) {
            i.drawArrays(n, c, f), t.update(f, n, 1)
        }

        function a(c, f, h) {
            h !== 0 && (i.drawArraysInstanced(n, c, f, h), t.update(f, n, h))
        }

        function o(c, f, h) {
            if (h === 0) return;
            e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, f, 0, h);
            let m = 0;
            for (let v = 0; v < h; v++) m += f[v];
            t.update(m, n, 1)
        }

        function l(c, f, h, d) {
            if (h === 0) return;
            const m = e.get("WEBGL_multi_draw");
            if (m === null)
                for (let v = 0; v < c.length; v++) a(c[v], f[v], d[v]);
            else {
                m.multiDrawArraysInstancedWEBGL(n, c, 0, f, 0, d, 0, h);
                let v = 0;
                for (let S = 0; S < h; S++) v += f[S] * d[S];
                t.update(v, n, 1)
            }
        }
        this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l
    }

    function gl(i, e, t, n) {
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
        const f = l(c);
        f !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", f, "instead."), c = f);
        const h = t.logarithmicDepthBuffer === !0,
            d = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"),
            m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
            v = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            S = i.getParameter(i.MAX_TEXTURE_SIZE),
            p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
            u = i.getParameter(i.MAX_VERTEX_ATTRIBS),
            y = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
            A = i.getParameter(i.MAX_VARYING_VECTORS),
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
            logarithmicDepthBuffer: h,
            reverseDepthBuffer: d,
            maxTextures: m,
            maxVertexTextures: v,
            maxTextureSize: S,
            maxCubemapSize: p,
            maxAttributes: u,
            maxVertexUniforms: y,
            maxVaryings: A,
            maxFragmentUniforms: M,
            vertexTextures: I,
            maxSamples: w
        }
    }

    function vl(i) {
        const e = this;
        let t = null,
            n = 0,
            r = !1,
            s = !1;
        const a = new ln,
            o = new Ue,
            l = {
                value: null,
                needsUpdate: !1
            };
        this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d) {
            const m = h.length !== 0 || d || n !== 0 || r;
            return r = d, n = h.length, m
        }, this.beginShadows = function() {
            s = !0, f(null)
        }, this.endShadows = function() {
            s = !1
        }, this.setGlobalState = function(h, d) {
            t = f(h, d, 0)
        }, this.setState = function(h, d, m) {
            const v = h.clippingPlanes,
                S = h.clipIntersection,
                p = h.clipShadows,
                u = i.get(h);
            if (!r || v === null || v.length === 0 || s && !p) s ? f(null) : c();
            else {
                const y = s ? 0 : n,
                    A = y * 4;
                let M = u.clippingState || null;
                l.value = M, M = f(v, d, A, m);
                for (let I = 0; I !== A; ++I) M[I] = t[I];
                u.clippingState = M, this.numIntersection = S ? this.numPlanes : 0, this.numPlanes += y
            }
        };

        function c() {
            l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
        }

        function f(h, d, m, v) {
            const S = h !== null ? h.length : 0;
            let p = null;
            if (S !== 0) {
                if (p = l.value, v !== !0 || p === null) {
                    const u = m + S * 4,
                        y = d.matrixWorldInverse;
                    o.getNormalMatrix(y), (p === null || p.length < u) && (p = new Float32Array(u));
                    for (let A = 0, M = m; A !== S; ++A, M += 4) a.copy(h[A]).applyMatrix4(y, o), a.normal.toArray(p, M), p[M + 3] = a.constant
                }
                l.value = p, l.needsUpdate = !0
            }
            return e.numPlanes = S, e.numIntersection = 0, p
        }
    }

    function xl(i) {
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
                            const c = new ia(l.height);
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
    const In = 4,
        qr = [.125, .215, .35, .446, .526, .582],
        dn = 20,
        rr = new kr,
        Yr = new Ke;
    let sr = null,
        ar = 0,
        or = 0,
        lr = !1;
    const fn = (1 + Math.sqrt(5)) / 2,
        Un = 1 / fn,
        $r = [new B(-fn, Un, 0), new B(fn, Un, 0), new B(-Un, 0, fn), new B(Un, 0, fn), new B(0, fn, -Un), new B(0, fn, Un), new B(-1, 1, -1), new B(1, 1, -1), new B(-1, 1, 1), new B(1, 1, 1)],
        Sl = new B;
    class Kr {
        constructor(e) {
            this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
        }
        fromScene(e, t = 0, n = .1, r = 100, s = {}) {
            const {
                size: a = 256,
                position: o = Sl
            } = s;
            sr = this._renderer.getRenderTarget(), ar = this._renderer.getActiveCubeFace(), or = this._renderer.getActiveMipmapLevel(), lr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
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
            this._cubemapMaterial === null && (this._cubemapMaterial = Jr(), this._compileMaterial(this._cubemapMaterial))
        }
        compileEquirectangularShader() {
            this._equirectMaterial === null && (this._equirectMaterial = jr(), this._compileMaterial(this._equirectMaterial))
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
            this._renderer.setRenderTarget(sr, ar, or), this._renderer.xr.enabled = lr, e.scissorTest = !1, Mi(e, 0, 0, e.width, e.height)
        }
        _fromTexture(e, t) {
            e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), sr = this._renderer.getRenderTarget(), ar = this._renderer.getActiveCubeFace(), or = this._renderer.getActiveMipmapLevel(), lr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
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
                    colorSpace: _n,
                    depthBuffer: !1
                },
                r = Zr(e, t, n);
            if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
                this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Zr(e, t, n);
                const {
                    _lodMax: s
                } = this;
                ({
                    sizeLods: this._sizeLods,
                    lodPlanes: this._lodPlanes,
                    sigmas: this._sigmas
                } = Ml(s)), this._blurMaterial = El(s, e, t)
            }
            return r
        }
        _compileMaterial(e) {
            const t = new Ot(this._lodPlanes[0], e);
            this._renderer.compile(t, rr)
        }
        _sceneToCubeUV(e, t, n, r, s) {
            const l = new It(90, 1, t, n),
                c = [1, -1, 1, 1, 1, 1],
                f = [1, 1, 1, -1, -1, -1],
                h = this._renderer,
                d = h.autoClear,
                m = h.toneMapping;
            h.getClearColor(Yr), h.toneMapping = 0, h.autoClear = !1;
            const v = new Qi({
                    name: "PMREM.Background",
                    side: 1,
                    depthWrite: !1,
                    depthTest: !1
                }),
                S = new Ot(new Kn, v);
            let p = !1;
            const u = e.background;
            u ? u.isColor && (v.color.copy(u), e.background = null, p = !0) : (v.color.copy(Yr), p = !0);
            for (let y = 0; y < 6; y++) {
                const A = y % 3;
                A === 0 ? (l.up.set(0, c[y], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x + f[y], s.y, s.z)) : A === 1 ? (l.up.set(0, 0, c[y]), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y + f[y], s.z)) : (l.up.set(0, c[y], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y, s.z + f[y]));
                const M = this._cubeSize;
                Mi(r, A * M, y > 2 ? M : 0, M, M), h.setRenderTarget(r), p && h.render(S, l), h.render(e, l)
            }
            S.geometry.dispose(), S.material.dispose(), h.toneMapping = m, h.autoClear = d, e.background = u
        }
        _textureToCubeUV(e, t) {
            const n = this._renderer,
                r = e.mapping === 301 || e.mapping === 302;
            r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Jr()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = jr());
            const s = r ? this._cubemapMaterial : this._equirectMaterial,
                a = new Ot(this._lodPlanes[0], s),
                o = s.uniforms;
            o.envMap.value = e;
            const l = this._cubeSize;
            Mi(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, rr)
        }
        _applyPMREM(e) {
            const t = this._renderer,
                n = t.autoClear;
            t.autoClear = !1;
            const r = this._lodPlanes.length;
            for (let s = 1; s < r; s++) {
                const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]),
                    o = $r[(r - s - 1) % $r.length];
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
            const f = 3,
                h = new Ot(this._lodPlanes[r], c),
                d = c.uniforms,
                m = this._sizeLods[n] - 1,
                v = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * dn - 1),
                S = s / v,
                p = isFinite(s) ? 1 + Math.floor(f * S) : dn;
            p > dn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${dn}`);
            const u = [];
            let y = 0;
            for (let C = 0; C < dn; ++C) {
                const U = C / S,
                    E = Math.exp(-U * U / 2);
                u.push(E), C === 0 ? y += E : C < p && (y += 2 * E)
            }
            for (let C = 0; C < u.length; C++) u[C] = u[C] / y;
            d.envMap.value = e.texture, d.samples.value = p, d.weights.value = u, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
            const {
                _lodMax: A
            } = this;
            d.dTheta.value = v, d.mipInt.value = A - n;
            const M = this._sizeLods[r],
                I = 3 * M * (r > A - In ? r - A + In : 0),
                w = 4 * (this._cubeSize - M);
            Mi(t, I, w, 3 * M, 2 * M), l.setRenderTarget(t), l.render(h, rr)
        }
    }

    function Ml(i) {
        const e = [],
            t = [],
            n = [];
        let r = i;
        const s = i - In + 1 + qr.length;
        for (let a = 0; a < s; a++) {
            const o = Math.pow(2, r);
            t.push(o);
            let l = 1 / o;
            a > i - In ? l = qr[a - i + In - 1] : a === 0 && (l = 0), n.push(l);
            const c = 1 / (o - 2),
                f = -c,
                h = 1 + c,
                d = [f, f, h, f, h, h, f, f, h, h, f, h],
                m = 6,
                v = 6,
                S = 3,
                p = 2,
                u = 1,
                y = new Float32Array(S * v * m),
                A = new Float32Array(p * v * m),
                M = new Float32Array(u * v * m);
            for (let w = 0; w < m; w++) {
                const C = w % 3 * 2 / 3 - 1,
                    U = w > 2 ? 0 : -1,
                    E = [C, U, 0, C + 2 / 3, U, 0, C + 2 / 3, U + 1, 0, C, U, 0, C + 2 / 3, U + 1, 0, C, U + 1, 0];
                y.set(E, S * v * w), A.set(d, p * v * w);
                const x = [w, w, w, w, w, w];
                M.set(x, u * v * w)
            }
            const I = new an;
            I.setAttribute("position", new Nt(y, S)), I.setAttribute("uv", new Nt(A, p)), I.setAttribute("faceIndex", new Nt(M, u)), e.push(I), r > In && r--
        }
        return {
            lodPlanes: e,
            sizeLods: t,
            sigmas: n
        }
    }

    function Zr(i, e, t) {
        const n = new tn(i, e, t);
        return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n
    }

    function Mi(i, e, t, n, r) {
        i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r)
    }

    function El(i, e, t) {
        const n = new Float32Array(dn),
            r = new B(0, 1, 0);
        return new Qt({
            name: "SphericalGaussianBlur",
            defines: {
                n: dn,
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
            vertexShader: cr(),
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

    function jr() {
        return new Qt({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                }
            },
            vertexShader: cr(),
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

    function Jr() {
        return new Qt({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                }
            },
            vertexShader: cr(),
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

    function cr() {
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

    function Tl(i) {
        let e = new WeakMap,
            t = null;

        function n(o) {
            if (o && o.isTexture) {
                const l = o.mapping,
                    c = l === 303 || l === 304,
                    f = l === 301 || l === 302;
                if (c || f) {
                    let h = e.get(o);
                    const d = h !== void 0 ? h.texture.pmremVersion : 0;
                    if (o.isRenderTargetTexture && o.pmremVersion !== d) return t === null && (t = new Kr(i)), h = c ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h), h.texture.pmremVersion = o.pmremVersion, e.set(o, h), h.texture;
                    if (h !== void 0) return h.texture; {
                        const m = o.image;
                        return c && m && m.height > 0 || f && m && r(m) ? (t === null && (t = new Kr(i)), h = c ? t.fromEquirectangular(o) : t.fromCubemap(o), h.texture.pmremVersion = o.pmremVersion, e.set(o, h), o.addEventListener("dispose", s), h.texture) : null
                    }
                }
            }
            return o
        }

        function r(o) {
            let l = 0;
            const c = 6;
            for (let f = 0; f < c; f++) o[f] !== void 0 && l++;
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

    function Al(i) {
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
                return r === null && vn("THREE.WebGLRenderer: " + n + " extension not supported."), r
            }
        }
    }

    function yl(i, e, t, n) {
        const r = {},
            s = new WeakMap;

        function a(h) {
            const d = h.target;
            d.index !== null && e.remove(d.index);
            for (const v in d.attributes) e.remove(d.attributes[v]);
            d.removeEventListener("dispose", a), delete r[d.id];
            const m = s.get(d);
            m && (e.remove(m), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--
        }

        function o(h, d) {
            return r[d.id] === !0 || (d.addEventListener("dispose", a), r[d.id] = !0, t.memory.geometries++), d
        }

        function l(h) {
            const d = h.attributes;
            for (const m in d) e.update(d[m], i.ARRAY_BUFFER)
        }

        function c(h) {
            const d = [],
                m = h.index,
                v = h.attributes.position;
            let S = 0;
            if (m !== null) {
                const y = m.array;
                S = m.version;
                for (let A = 0, M = y.length; A < M; A += 3) {
                    const I = y[A + 0],
                        w = y[A + 1],
                        C = y[A + 2];
                    d.push(I, w, w, C, C, I)
                }
            } else if (v !== void 0) {
                const y = v.array;
                S = v.version;
                for (let A = 0, M = y.length / 3 - 1; A < M; A += 3) {
                    const I = A + 0,
                        w = A + 1,
                        C = A + 2;
                    d.push(I, w, w, C, C, I)
                }
            } else return;
            const p = new(_r(d) ? Lr : Dr)(d, 1);
            p.version = S;
            const u = s.get(h);
            u && e.remove(u), s.set(h, p)
        }

        function f(h) {
            const d = s.get(h);
            if (d) {
                const m = h.index;
                m !== null && d.version < m.version && c(h)
            } else c(h);
            return s.get(h)
        }
        return {
            get: o,
            update: l,
            getWireframeAttribute: f
        }
    }

    function Rl(i, e, t) {
        let n;

        function r(d) {
            n = d
        }
        let s, a;

        function o(d) {
            s = d.type, a = d.bytesPerElement
        }

        function l(d, m) {
            i.drawElements(n, m, s, d * a), t.update(m, n, 1)
        }

        function c(d, m, v) {
            v !== 0 && (i.drawElementsInstanced(n, m, s, d * a, v), t.update(m, n, v))
        }

        function f(d, m, v) {
            if (v === 0) return;
            e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, s, d, 0, v);
            let p = 0;
            for (let u = 0; u < v; u++) p += m[u];
            t.update(p, n, 1)
        }

        function h(d, m, v, S) {
            if (v === 0) return;
            const p = e.get("WEBGL_multi_draw");
            if (p === null)
                for (let u = 0; u < d.length; u++) c(d[u] / a, m[u], S[u]);
            else {
                p.multiDrawElementsInstancedWEBGL(n, m, 0, s, d, 0, S, 0, v);
                let u = 0;
                for (let y = 0; y < v; y++) u += m[y] * S[y];
                t.update(u, n, 1)
            }
        }
        this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = f, this.renderMultiDrawInstances = h
    }

    function bl(i) {
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

    function Cl(i, e, t) {
        const n = new WeakMap,
            r = new st;

        function s(a, o, l) {
            const c = a.morphTargetInfluences,
                f = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color,
                h = f !== void 0 ? f.length : 0;
            let d = n.get(o);
            if (d === void 0 || d.count !== h) {
                let E = function() {
                    C.dispose(), n.delete(o), o.removeEventListener("dispose", E)
                };
                d !== void 0 && d.texture.dispose();
                const m = o.morphAttributes.position !== void 0,
                    v = o.morphAttributes.normal !== void 0,
                    S = o.morphAttributes.color !== void 0,
                    p = o.morphAttributes.position || [],
                    u = o.morphAttributes.normal || [],
                    y = o.morphAttributes.color || [];
                let A = 0;
                m === !0 && (A = 1), v === !0 && (A = 2), S === !0 && (A = 3);
                let M = o.attributes.position.count * A,
                    I = 1;
                M > e.maxTextureSize && (I = Math.ceil(M / e.maxTextureSize), M = e.maxTextureSize);
                const w = new Float32Array(M * I * 4 * h),
                    C = new Sr(w, M, I, h);
                C.type = 1015, C.needsUpdate = !0;
                const U = A * 4;
                for (let x = 0; x < h; x++) {
                    const P = p[x],
                        q = u[x],
                        G = y[x],
                        W = M * I * 4 * x;
                    for (let j = 0; j < P.count; j++) {
                        const V = j * U;
                        m === !0 && (r.fromBufferAttribute(P, j), w[W + V + 0] = r.x, w[W + V + 1] = r.y, w[W + V + 2] = r.z, w[W + V + 3] = 0), v === !0 && (r.fromBufferAttribute(q, j), w[W + V + 4] = r.x, w[W + V + 5] = r.y, w[W + V + 6] = r.z, w[W + V + 7] = 0), S === !0 && (r.fromBufferAttribute(G, j), w[W + V + 8] = r.x, w[W + V + 9] = r.y, w[W + V + 10] = r.z, w[W + V + 11] = G.itemSize === 4 ? r.w : 1)
                    }
                }
                d = {
                    count: h,
                    texture: C,
                    size: new Ze(M, I)
                }, n.set(o, d), o.addEventListener("dispose", E)
            }
            if (a.isInstancedMesh === !0 && a.morphTexture !== null) l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
            else {
                let m = 0;
                for (let S = 0; S < c.length; S++) m += c[S];
                const v = o.morphTargetsRelative ? 1 : 1 - m;
                l.getUniforms().setValue(i, "morphTargetBaseInfluence", v), l.getUniforms().setValue(i, "morphTargetInfluences", c)
            }
            l.getUniforms().setValue(i, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", d.size)
        }
        return {
            update: s
        }
    }

    function wl(i, e, t, n) {
        let r = new WeakMap;

        function s(l) {
            const c = n.render.frame,
                f = l.geometry,
                h = e.get(l, f);
            if (r.get(h) !== c && (e.update(h), r.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
                const d = l.skeleton;
                r.get(d) !== c && (d.update(), r.set(d, c))
            }
            return h
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
    const Qr = new xt,
        es = new Vr(1, 1),
        ts = new Sr,
        ns = new Gs,
        is = new zr,
        rs = [],
        ss = [],
        as = new Float32Array(16),
        os = new Float32Array(9),
        ls = new Float32Array(4);

    function Fn(i, e, t) {
        const n = i[0];
        if (n <= 0 || n > 0) return i;
        const r = e * t;
        let s = rs[r];
        if (s === void 0 && (s = new Float32Array(r), rs[r] = s), e !== 0) {
            n.toArray(s, 0);
            for (let a = 1, o = 0; a !== e; ++a) o += t, i[a].toArray(s, o)
        }
        return s
    }

    function lt(i, e) {
        if (i.length !== e.length) return !1;
        for (let t = 0, n = i.length; t < n; t++)
            if (i[t] !== e[t]) return !1;
        return !0
    }

    function ct(i, e) {
        for (let t = 0, n = e.length; t < n; t++) i[t] = e[t]
    }

    function Ei(i, e) {
        let t = ss[e];
        t === void 0 && (t = new Int32Array(e), ss[e] = t);
        for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
        return t
    }

    function Pl(i, e) {
        const t = this.cache;
        t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e)
    }

    function Dl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
        else {
            if (lt(t, e)) return;
            i.uniform2fv(this.addr, e), ct(t, e)
        }
    }

    function Ll(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
        else if (e.r !== void 0)(t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
        else {
            if (lt(t, e)) return;
            i.uniform3fv(this.addr, e), ct(t, e)
        }
    }

    function Il(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
        else {
            if (lt(t, e)) return;
            i.uniform4fv(this.addr, e), ct(t, e)
        }
    }

    function Ul(i, e) {
        const t = this.cache,
            n = e.elements;
        if (n === void 0) {
            if (lt(t, e)) return;
            i.uniformMatrix2fv(this.addr, !1, e), ct(t, e)
        } else {
            if (lt(t, n)) return;
            ls.set(n), i.uniformMatrix2fv(this.addr, !1, ls), ct(t, n)
        }
    }

    function Fl(i, e) {
        const t = this.cache,
            n = e.elements;
        if (n === void 0) {
            if (lt(t, e)) return;
            i.uniformMatrix3fv(this.addr, !1, e), ct(t, e)
        } else {
            if (lt(t, n)) return;
            os.set(n), i.uniformMatrix3fv(this.addr, !1, os), ct(t, n)
        }
    }

    function Nl(i, e) {
        const t = this.cache,
            n = e.elements;
        if (n === void 0) {
            if (lt(t, e)) return;
            i.uniformMatrix4fv(this.addr, !1, e), ct(t, e)
        } else {
            if (lt(t, n)) return;
            as.set(n), i.uniformMatrix4fv(this.addr, !1, as), ct(t, n)
        }
    }

    function Ol(i, e) {
        const t = this.cache;
        t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e)
    }

    function Bl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
        else {
            if (lt(t, e)) return;
            i.uniform2iv(this.addr, e), ct(t, e)
        }
    }

    function Gl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
        else {
            if (lt(t, e)) return;
            i.uniform3iv(this.addr, e), ct(t, e)
        }
    }

    function zl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
        else {
            if (lt(t, e)) return;
            i.uniform4iv(this.addr, e), ct(t, e)
        }
    }

    function Hl(i, e) {
        const t = this.cache;
        t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e)
    }

    function Vl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
        else {
            if (lt(t, e)) return;
            i.uniform2uiv(this.addr, e), ct(t, e)
        }
    }

    function kl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
        else {
            if (lt(t, e)) return;
            i.uniform3uiv(this.addr, e), ct(t, e)
        }
    }

    function Wl(i, e) {
        const t = this.cache;
        if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
        else {
            if (lt(t, e)) return;
            i.uniform4uiv(this.addr, e), ct(t, e)
        }
    }

    function Xl(i, e, t) {
        const n = this.cache,
            r = t.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
        let s;
        this.type === i.SAMPLER_2D_SHADOW ? (es.compareFunction = 515, s = es) : s = Qr, t.setTexture2D(e || s, r)
    }

    function ql(i, e, t) {
        const n = this.cache,
            r = t.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || ns, r)
    }

    function Yl(i, e, t) {
        const n = this.cache,
            r = t.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || is, r)
    }

    function $l(i, e, t) {
        const n = this.cache,
            r = t.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || ts, r)
    }

    function Kl(i) {
        switch (i) {
            case 5126:
                return Pl;
            case 35664:
                return Dl;
            case 35665:
                return Ll;
            case 35666:
                return Il;
            case 35674:
                return Ul;
            case 35675:
                return Fl;
            case 35676:
                return Nl;
            case 5124:
            case 35670:
                return Ol;
            case 35667:
            case 35671:
                return Bl;
            case 35668:
            case 35672:
                return Gl;
            case 35669:
            case 35673:
                return zl;
            case 5125:
                return Hl;
            case 36294:
                return Vl;
            case 36295:
                return kl;
            case 36296:
                return Wl;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return Xl;
            case 35679:
            case 36299:
            case 36307:
                return ql;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return Yl;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return $l
        }
    }

    function Zl(i, e) {
        i.uniform1fv(this.addr, e)
    }

    function jl(i, e) {
        const t = Fn(e, this.size, 2);
        i.uniform2fv(this.addr, t)
    }

    function Jl(i, e) {
        const t = Fn(e, this.size, 3);
        i.uniform3fv(this.addr, t)
    }

    function Ql(i, e) {
        const t = Fn(e, this.size, 4);
        i.uniform4fv(this.addr, t)
    }

    function ec(i, e) {
        const t = Fn(e, this.size, 4);
        i.uniformMatrix2fv(this.addr, !1, t)
    }

    function tc(i, e) {
        const t = Fn(e, this.size, 9);
        i.uniformMatrix3fv(this.addr, !1, t)
    }

    function nc(i, e) {
        const t = Fn(e, this.size, 16);
        i.uniformMatrix4fv(this.addr, !1, t)
    }

    function ic(i, e) {
        i.uniform1iv(this.addr, e)
    }

    function rc(i, e) {
        i.uniform2iv(this.addr, e)
    }

    function sc(i, e) {
        i.uniform3iv(this.addr, e)
    }

    function ac(i, e) {
        i.uniform4iv(this.addr, e)
    }

    function oc(i, e) {
        i.uniform1uiv(this.addr, e)
    }

    function lc(i, e) {
        i.uniform2uiv(this.addr, e)
    }

    function cc(i, e) {
        i.uniform3uiv(this.addr, e)
    }

    function uc(i, e) {
        i.uniform4uiv(this.addr, e)
    }

    function dc(i, e, t) {
        const n = this.cache,
            r = e.length,
            s = Ei(t, r);
        lt(n, s) || (i.uniform1iv(this.addr, s), ct(n, s));
        for (let a = 0; a !== r; ++a) t.setTexture2D(e[a] || Qr, s[a])
    }

    function fc(i, e, t) {
        const n = this.cache,
            r = e.length,
            s = Ei(t, r);
        lt(n, s) || (i.uniform1iv(this.addr, s), ct(n, s));
        for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || ns, s[a])
    }

    function hc(i, e, t) {
        const n = this.cache,
            r = e.length,
            s = Ei(t, r);
        lt(n, s) || (i.uniform1iv(this.addr, s), ct(n, s));
        for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || is, s[a])
    }

    function pc(i, e, t) {
        const n = this.cache,
            r = e.length,
            s = Ei(t, r);
        lt(n, s) || (i.uniform1iv(this.addr, s), ct(n, s));
        for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || ts, s[a])
    }

    function mc(i) {
        switch (i) {
            case 5126:
                return Zl;
            case 35664:
                return jl;
            case 35665:
                return Jl;
            case 35666:
                return Ql;
            case 35674:
                return ec;
            case 35675:
                return tc;
            case 35676:
                return nc;
            case 5124:
            case 35670:
                return ic;
            case 35667:
            case 35671:
                return rc;
            case 35668:
            case 35672:
                return sc;
            case 35669:
            case 35673:
                return ac;
            case 5125:
                return oc;
            case 36294:
                return lc;
            case 36295:
                return cc;
            case 36296:
                return uc;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return dc;
            case 35679:
            case 36299:
            case 36307:
                return fc;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return hc;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return pc
        }
    }
    class _c {
        constructor(e, t, n) {
            this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Kl(t.type)
        }
    }
    class gc {
        constructor(e, t, n) {
            this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = mc(t.type)
        }
    }
    class vc {
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
    const ur = /(\w+)(\])?(\[|\.)?/g;

    function cs(i, e) {
        i.seq.push(e), i.map[e.id] = e
    }

    function xc(i, e, t) {
        const n = i.name,
            r = n.length;
        for (ur.lastIndex = 0;;) {
            const s = ur.exec(n),
                a = ur.lastIndex;
            let o = s[1];
            const l = s[2] === "]",
                c = s[3];
            if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
                cs(t, c === void 0 ? new _c(o, i, e) : new gc(o, i, e));
                break
            } else {
                let h = t.map[o];
                h === void 0 && (h = new vc(o), cs(t, h)), t = h
            }
        }
    }
    class Ti {
        constructor(e, t) {
            this.seq = [], this.map = {};
            const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
            for (let r = 0; r < n; ++r) {
                const s = e.getActiveUniform(t, r),
                    a = e.getUniformLocation(t, s.name);
                xc(s, a, this)
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

    function us(i, e, t) {
        const n = i.createShader(e);
        return i.shaderSource(n, t), i.compileShader(n), n
    }
    const Sc = 37297;
    let Mc = 0;

    function Ec(i, e) {
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
    const ds = new Ue;

    function Tc(i) {
        Ge._getMatrix(ds, Ge.workingColorSpace, i);
        const e = `mat3( ${ds.elements.map(t=>t.toFixed(4))} )`;
        switch (Ge.getTransfer(i)) {
            case ei:
                return [e, "LinearTransferOETF"];
            case $e:
                return [e, "sRGBTransferOETF"];
            default:
                return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"]
        }
    }

    function fs(i, e, t) {
        const n = i.getShaderParameter(e, i.COMPILE_STATUS),
            r = i.getShaderInfoLog(e).trim();
        if (n && r === "") return "";
        const s = /ERROR: 0:(\d+)/.exec(r);
        if (s) {
            const a = parseInt(s[1]);
            return t.toUpperCase() + `

` + r + `

` + Ec(i.getShaderSource(e), a)
        } else return r
    }

    function Ac(i, e) {
        const t = Tc(e);
        return [`vec4 ${i}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`)
    }

    function yc(i, e) {
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
    const Ai = new B;

    function Rc() {
        Ge.getLuminanceCoefficients(Ai);
        const i = Ai.x.toFixed(4),
            e = Ai.y.toFixed(4),
            t = Ai.z.toFixed(4);
        return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`)
    }

    function bc(i) {
        return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(jn).join(`
`)
    }

    function Cc(i) {
        const e = [];
        for (const t in i) {
            const n = i[t];
            n !== !1 && e.push("#define " + t + " " + n)
        }
        return e.join(`
`)
    }

    function wc(i, e) {
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

    function jn(i) {
        return i !== ""
    }

    function hs(i, e) {
        const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
        return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
    }

    function ps(i, e) {
        return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
    }
    const Pc = /^[ \t]*#include +<([\w\d./]+)>/gm;

    function dr(i) {
        return i.replace(Pc, Lc)
    }
    const Dc = new Map;

    function Lc(i, e) {
        let t = Ie[e];
        if (t === void 0) {
            const n = Dc.get(e);
            if (n !== void 0) t = Ie[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
            else throw new Error("Can not resolve #include <" + e + ">")
        }
        return dr(t)
    }
    const Ic = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

    function ms(i) {
        return i.replace(Ic, Uc)
    }

    function Uc(i, e, t, n) {
        let r = "";
        for (let s = parseInt(e); s < parseInt(t); s++) r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
        return r
    }

    function _s(i) {
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

    function Fc(i) {
        let e = "SHADOWMAP_TYPE_BASIC";
        return i.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e
    }

    function Nc(i) {
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

    function Oc(i) {
        let e = "ENVMAP_MODE_REFLECTION";
        if (i.envMap) switch (i.envMapMode) {
            case 302:
                e = "ENVMAP_MODE_REFRACTION";
                break
        }
        return e
    }

    function Bc(i) {
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

    function Gc(i) {
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

    function zc(i, e, t, n) {
        const r = i.getContext(),
            s = t.defines;
        let a = t.vertexShader,
            o = t.fragmentShader;
        const l = Fc(t),
            c = Nc(t),
            f = Oc(t),
            h = Bc(t),
            d = Gc(t),
            m = bc(t),
            v = Cc(s),
            S = r.createProgram();
        let p, u, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
        t.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v].filter(jn).join(`
`), p.length > 0 && (p += `
`), u = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v].filter(jn).join(`
`), u.length > 0 && (u += `
`)) : (p = [_s(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + f : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(jn).join(`
`), u = [_s(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + f : "", t.envMap ? "#define " + h : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== 0 ? "#define TONE_MAPPING" : "", t.toneMapping !== 0 ? Ie.tonemapping_pars_fragment : "", t.toneMapping !== 0 ? yc("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ie.colorspace_pars_fragment, Ac("linearToOutputTexel", t.outputColorSpace), Rc(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(jn).join(`
`)), a = dr(a), a = hs(a, t), a = ps(a, t), o = dr(o), o = hs(o, t), o = ps(o, t), a = ms(a), o = ms(o), t.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, u = ["#define varying in", t.glslVersion === pr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === pr ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + u);
        const A = y + p + a,
            M = y + u + o,
            I = us(r, r.VERTEX_SHADER, A),
            w = us(r, r.FRAGMENT_SHADER, M);
        r.attachShader(S, I), r.attachShader(S, w), t.index0AttributeName !== void 0 ? r.bindAttribLocation(S, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(S, 0, "position"), r.linkProgram(S);

        function C(P) {
            if (i.debug.checkShaderErrors) {
                const q = r.getProgramInfoLog(S).trim(),
                    G = r.getShaderInfoLog(I).trim(),
                    W = r.getShaderInfoLog(w).trim();
                let j = !0,
                    V = !0;
                if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
                    if (j = !1, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, S, I, w);
                    else {
                        const ee = fs(r, I, "vertex"),
                            z = fs(r, w, "fragment");
                        console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(S, r.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + q + `
` + ee + `
` + z)
                    }
                else q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (G === "" || W === "") && (V = !1);
                V && (P.diagnostics = {
                    runnable: j,
                    programLog: q,
                    vertexShader: {
                        log: G,
                        prefix: p
                    },
                    fragmentShader: {
                        log: W,
                        prefix: u
                    }
                })
            }
            r.deleteShader(I), r.deleteShader(w), U = new Ti(r, S), E = wc(r, S)
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
            return x === !1 && (x = r.getProgramParameter(S, Sc)), x
        }, this.destroy = function() {
            n.releaseStatesOfProgram(this), r.deleteProgram(S), this.program = void 0
        }, this.type = t.shaderType, this.name = t.shaderName, this.id = Mc++, this.cacheKey = e, this.usedTimes = 1, this.program = S, this.vertexShader = I, this.fragmentShader = w, this
    }
    let Hc = 0;
    class Vc {
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
            return n === void 0 && (n = new kc(e), t.set(e, n)), n
        }
    }
    class kc {
        constructor(e) {
            this.id = Hc++, this.code = e, this.usedTimes = 0
        }
    }

    function Wc(i, e, t, n, r, s, a) {
        const o = new Tr,
            l = new Vc,
            c = new Set,
            f = [],
            h = r.logarithmicDepthBuffer,
            d = r.vertexTextures;
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

        function p(E, x, P, q, G) {
            const W = q.fog,
                j = G.geometry,
                V = E.isMeshStandardMaterial ? q.environment : null,
                ee = (E.isMeshStandardMaterial ? t : e).get(E.envMap || V),
                z = ee && ee.mapping === 306 ? ee.image.height : null,
                oe = v[E.type];
            E.precision !== null && (m = r.getMaxPrecision(E.precision), m !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", m, "instead."));
            const fe = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color,
                Te = fe !== void 0 ? fe.length : 0;
            let Ne = 0;
            j.morphAttributes.position !== void 0 && (Ne = 1), j.morphAttributes.normal !== void 0 && (Ne = 2), j.morphAttributes.color !== void 0 && (Ne = 3);
            let je, X, te, Se;
            if (oe) {
                const qe = Bt[oe];
                je = qe.vertexShader, X = qe.fragmentShader
            } else je = E.vertexShader, X = E.fragmentShader, l.update(E), te = l.getVertexShaderID(E), Se = l.getFragmentShaderID(E);
            const le = i.getRenderTarget(),
                Me = i.state.buffers.depth.getReversed(),
                Ve = G.isInstancedMesh === !0,
                Ce = G.isBatchedMesh === !0,
                tt = !!E.map,
                nt = !!E.matcap,
                ke = !!ee,
                R = !!E.aoMap,
                _t = !!E.lightMap,
                We = !!E.bumpMap,
                Je = !!E.normalMap,
                ge = !!E.displacementMap,
                ze = !!E.emissiveMap,
                Ae = !!E.metalnessMap,
                Fe = !!E.roughnessMap,
                ut = E.anisotropy > 0,
                T = E.clearcoat > 0,
                _ = E.dispersion > 0,
                F = E.iridescence > 0,
                k = E.sheen > 0,
                $ = E.transmission > 0,
                H = ut && !!E.anisotropyMap,
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
                he = !!E.alphaMap,
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
                batchingColor: Ce && G._colorsTexture !== null,
                instancing: Ve,
                instancingColor: Ve && G.instanceColor !== null,
                instancingMorph: Ve && G.morphTexture !== null,
                supportsVertexTextures: d,
                outputColorSpace: le === null ? i.outputColorSpace : le.isXRRenderTarget === !0 ? le.texture.colorSpace : _n,
                alphaToCoverage: !!E.alphaToCoverage,
                map: tt,
                matcap: nt,
                envMap: ke,
                envMapMode: ke && ee.mapping,
                envMapCubeUVHeight: z,
                aoMap: R,
                lightMap: _t,
                bumpMap: We,
                normalMap: Je,
                displacementMap: d && ge,
                emissiveMap: ze,
                normalMapObjectSpace: Je && E.normalMapType === 1,
                normalMapTangentSpace: Je && E.normalMapType === 0,
                metalnessMap: Ae,
                roughnessMap: Fe,
                anisotropy: ut,
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
                alphaMap: he,
                alphaTest: J,
                alphaHash: Y,
                combine: E.combine,
                mapUv: tt && S(E.map.channel),
                aoMapUv: R && S(E.aoMap.channel),
                lightMapUv: _t && S(E.lightMap.channel),
                bumpMapUv: We && S(E.bumpMap.channel),
                normalMapUv: Je && S(E.normalMap.channel),
                displacementMapUv: ge && S(E.displacementMap.channel),
                emissiveMapUv: ze && S(E.emissiveMap.channel),
                metalnessMapUv: Ae && S(E.metalnessMap.channel),
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
                alphaMapUv: he && S(E.alphaMap.channel),
                vertexTangents: !!j.attributes.tangent && (Je || ut),
                vertexColors: E.vertexColors,
                vertexAlphas: E.vertexColors === !0 && !!j.attributes.color && j.attributes.color.itemSize === 4,
                pointsUvs: G.isPoints === !0 && !!j.attributes.uv && (tt || he),
                fog: !!W,
                useFog: E.fog === !0,
                fogExp2: !!W && W.isFogExp2,
                flatShading: E.flatShading === !0,
                sizeAttenuation: E.sizeAttenuation === !0,
                logarithmicDepthBuffer: h,
                reverseDepthBuffer: Me,
                skinning: G.isSkinnedMesh === !0,
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
                decodeVideoTexture: tt && E.map.isVideoTexture === !0 && Ge.getTransfer(E.map.colorSpace) === $e,
                decodeVideoTextureEmissive: ze && E.emissiveMap.isVideoTexture === !0 && Ge.getTransfer(E.emissiveMap.colorSpace) === $e,
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
            return E.isRawShaderMaterial === !1 && (y(x, E), A(x, E), x.push(i.outputColorSpace)), x.push(E.customProgramCacheKey), x.join()
        }

        function y(E, x) {
            E.push(x.precision), E.push(x.outputColorSpace), E.push(x.envMapMode), E.push(x.envMapCubeUVHeight), E.push(x.mapUv), E.push(x.alphaMapUv), E.push(x.lightMapUv), E.push(x.aoMapUv), E.push(x.bumpMapUv), E.push(x.normalMapUv), E.push(x.displacementMapUv), E.push(x.emissiveMapUv), E.push(x.metalnessMapUv), E.push(x.roughnessMapUv), E.push(x.anisotropyMapUv), E.push(x.clearcoatMapUv), E.push(x.clearcoatNormalMapUv), E.push(x.clearcoatRoughnessMapUv), E.push(x.iridescenceMapUv), E.push(x.iridescenceThicknessMapUv), E.push(x.sheenColorMapUv), E.push(x.sheenRoughnessMapUv), E.push(x.specularMapUv), E.push(x.specularColorMapUv), E.push(x.specularIntensityMapUv), E.push(x.transmissionMapUv), E.push(x.thicknessMapUv), E.push(x.combine), E.push(x.fogExp2), E.push(x.sizeAttenuation), E.push(x.morphTargetsCount), E.push(x.morphAttributeCount), E.push(x.numDirLights), E.push(x.numPointLights), E.push(x.numSpotLights), E.push(x.numSpotLightMaps), E.push(x.numHemiLights), E.push(x.numRectAreaLights), E.push(x.numDirLightShadows), E.push(x.numPointLightShadows), E.push(x.numSpotLightShadows), E.push(x.numSpotLightShadowsWithMaps), E.push(x.numLightProbes), E.push(x.shadowMapType), E.push(x.toneMapping), E.push(x.numClippingPlanes), E.push(x.numClipIntersection), E.push(x.depthPacking)
        }

        function A(E, x) {
            o.disableAll(), x.supportsVertexTextures && o.enable(0), x.instancing && o.enable(1), x.instancingColor && o.enable(2), x.instancingMorph && o.enable(3), x.matcap && o.enable(4), x.envMap && o.enable(5), x.normalMapObjectSpace && o.enable(6), x.normalMapTangentSpace && o.enable(7), x.clearcoat && o.enable(8), x.iridescence && o.enable(9), x.alphaTest && o.enable(10), x.vertexColors && o.enable(11), x.vertexAlphas && o.enable(12), x.vertexUv1s && o.enable(13), x.vertexUv2s && o.enable(14), x.vertexUv3s && o.enable(15), x.vertexTangents && o.enable(16), x.anisotropy && o.enable(17), x.alphaHash && o.enable(18), x.batching && o.enable(19), x.dispersion && o.enable(20), x.batchingColor && o.enable(21), E.push(o.mask), o.disableAll(), x.fog && o.enable(0), x.useFog && o.enable(1), x.flatShading && o.enable(2), x.logarithmicDepthBuffer && o.enable(3), x.reverseDepthBuffer && o.enable(4), x.skinning && o.enable(5), x.morphTargets && o.enable(6), x.morphNormals && o.enable(7), x.morphColors && o.enable(8), x.premultipliedAlpha && o.enable(9), x.shadowMapEnabled && o.enable(10), x.doubleSided && o.enable(11), x.flipSided && o.enable(12), x.useDepthPacking && o.enable(13), x.dithering && o.enable(14), x.transmission && o.enable(15), x.sheen && o.enable(16), x.opaque && o.enable(17), x.pointsUvs && o.enable(18), x.decodeVideoTexture && o.enable(19), x.decodeVideoTextureEmissive && o.enable(20), x.alphaToCoverage && o.enable(21), E.push(o.mask)
        }

        function M(E) {
            const x = v[E.type];
            let P;
            if (x) {
                const q = Bt[x];
                P = Qs.clone(q.uniforms)
            } else P = E.uniforms;
            return P
        }

        function I(E, x) {
            let P;
            for (let q = 0, G = f.length; q < G; q++) {
                const W = f[q];
                if (W.cacheKey === x) {
                    P = W, ++P.usedTimes;
                    break
                }
            }
            return P === void 0 && (P = new zc(i, x, E, s), f.push(P)), P
        }

        function w(E) {
            if (--E.usedTimes === 0) {
                const x = f.indexOf(E);
                f[x] = f[f.length - 1], f.pop(), E.destroy()
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
            programs: f,
            dispose: U
        }
    }

    function Xc() {
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

    function qc(i, e) {
        return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id
    }

    function gs(i, e) {
        return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id
    }

    function vs() {
        const i = [];
        let e = 0;
        const t = [],
            n = [],
            r = [];

        function s() {
            e = 0, t.length = 0, n.length = 0, r.length = 0
        }

        function a(h, d, m, v, S, p) {
            let u = i[e];
            return u === void 0 ? (u = {
                id: h.id,
                object: h,
                geometry: d,
                material: m,
                groupOrder: v,
                renderOrder: h.renderOrder,
                z: S,
                group: p
            }, i[e] = u) : (u.id = h.id, u.object = h, u.geometry = d, u.material = m, u.groupOrder = v, u.renderOrder = h.renderOrder, u.z = S, u.group = p), e++, u
        }

        function o(h, d, m, v, S, p) {
            const u = a(h, d, m, v, S, p);
            m.transmission > 0 ? n.push(u) : m.transparent === !0 ? r.push(u) : t.push(u)
        }

        function l(h, d, m, v, S, p) {
            const u = a(h, d, m, v, S, p);
            m.transmission > 0 ? n.unshift(u) : m.transparent === !0 ? r.unshift(u) : t.unshift(u)
        }

        function c(h, d) {
            t.length > 1 && t.sort(h || qc), n.length > 1 && n.sort(d || gs), r.length > 1 && r.sort(d || gs)
        }

        function f() {
            for (let h = e, d = i.length; h < d; h++) {
                const m = i[h];
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
            finish: f,
            sort: c
        }
    }

    function Yc() {
        let i = new WeakMap;

        function e(n, r) {
            const s = i.get(n);
            let a;
            return s === void 0 ? (a = new vs, i.set(n, [a])) : r >= s.length ? (a = new vs, s.push(a)) : a = s[r], a
        }

        function t() {
            i = new WeakMap
        }
        return {
            get: e,
            dispose: t
        }
    }

    function $c() {
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

    function Kc() {
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
    let Zc = 0;

    function jc(i, e) {
        return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0)
    }

    function Jc(i) {
        const e = new $c,
            t = Kc(),
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
            s = new at,
            a = new at;

        function o(c) {
            let f = 0,
                h = 0,
                d = 0;
            for (let E = 0; E < 9; E++) n.probe[E].set(0, 0, 0);
            let m = 0,
                v = 0,
                S = 0,
                p = 0,
                u = 0,
                y = 0,
                A = 0,
                M = 0,
                I = 0,
                w = 0,
                C = 0;
            c.sort(jc);
            for (let E = 0, x = c.length; E < x; E++) {
                const P = c[E],
                    q = P.color,
                    G = P.intensity,
                    W = P.distance,
                    j = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
                if (P.isAmbientLight) f += q.r * G, h += q.g * G, d += q.b * G;
                else if (P.isLightProbe) {
                    for (let V = 0; V < 9; V++) n.probe[V].addScaledVector(P.sh.coefficients[V], G);
                    C++
                } else if (P.isDirectionalLight) {
                    const V = e.get(P);
                    if (V.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
                        const ee = P.shadow,
                            z = t.get(P);
                        z.shadowIntensity = ee.intensity, z.shadowBias = ee.bias, z.shadowNormalBias = ee.normalBias, z.shadowRadius = ee.radius, z.shadowMapSize = ee.mapSize, n.directionalShadow[m] = z, n.directionalShadowMap[m] = j, n.directionalShadowMatrix[m] = P.shadow.matrix, y++
                    }
                    n.directional[m] = V, m++
                } else if (P.isSpotLight) {
                    const V = e.get(P);
                    V.position.setFromMatrixPosition(P.matrixWorld), V.color.copy(q).multiplyScalar(G), V.distance = W, V.coneCos = Math.cos(P.angle), V.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), V.decay = P.decay, n.spot[S] = V;
                    const ee = P.shadow;
                    if (P.map && (n.spotLightMap[I] = P.map, I++, ee.updateMatrices(P), P.castShadow && w++), n.spotLightMatrix[S] = ee.matrix, P.castShadow) {
                        const z = t.get(P);
                        z.shadowIntensity = ee.intensity, z.shadowBias = ee.bias, z.shadowNormalBias = ee.normalBias, z.shadowRadius = ee.radius, z.shadowMapSize = ee.mapSize, n.spotShadow[S] = z, n.spotShadowMap[S] = j, M++
                    }
                    S++
                } else if (P.isRectAreaLight) {
                    const V = e.get(P);
                    V.color.copy(q).multiplyScalar(G), V.halfWidth.set(P.width * .5, 0, 0), V.halfHeight.set(0, P.height * .5, 0), n.rectArea[p] = V, p++
                } else if (P.isPointLight) {
                    const V = e.get(P);
                    if (V.color.copy(P.color).multiplyScalar(P.intensity), V.distance = P.distance, V.decay = P.decay, P.castShadow) {
                        const ee = P.shadow,
                            z = t.get(P);
                        z.shadowIntensity = ee.intensity, z.shadowBias = ee.bias, z.shadowNormalBias = ee.normalBias, z.shadowRadius = ee.radius, z.shadowMapSize = ee.mapSize, z.shadowCameraNear = ee.camera.near, z.shadowCameraFar = ee.camera.far, n.pointShadow[v] = z, n.pointShadowMap[v] = j, n.pointShadowMatrix[v] = P.shadow.matrix, A++
                    }
                    n.point[v] = V, v++
                } else if (P.isHemisphereLight) {
                    const V = e.get(P);
                    V.skyColor.copy(P.color).multiplyScalar(G), V.groundColor.copy(P.groundColor).multiplyScalar(G), n.hemi[u] = V, u++
                }
            }
            p > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ne.LTC_FLOAT_1, n.rectAreaLTC2 = ne.LTC_FLOAT_2) : (n.rectAreaLTC1 = ne.LTC_HALF_1, n.rectAreaLTC2 = ne.LTC_HALF_2)), n.ambient[0] = f, n.ambient[1] = h, n.ambient[2] = d;
            const U = n.hash;
            (U.directionalLength !== m || U.pointLength !== v || U.spotLength !== S || U.rectAreaLength !== p || U.hemiLength !== u || U.numDirectionalShadows !== y || U.numPointShadows !== A || U.numSpotShadows !== M || U.numSpotMaps !== I || U.numLightProbes !== C) && (n.directional.length = m, n.spot.length = S, n.rectArea.length = p, n.point.length = v, n.hemi.length = u, n.directionalShadow.length = y, n.directionalShadowMap.length = y, n.pointShadow.length = A, n.pointShadowMap.length = A, n.spotShadow.length = M, n.spotShadowMap.length = M, n.directionalShadowMatrix.length = y, n.pointShadowMatrix.length = A, n.spotLightMatrix.length = M + I - w, n.spotLightMap.length = I, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = C, U.directionalLength = m, U.pointLength = v, U.spotLength = S, U.rectAreaLength = p, U.hemiLength = u, U.numDirectionalShadows = y, U.numPointShadows = A, U.numSpotShadows = M, U.numSpotMaps = I, U.numLightProbes = C, n.version = Zc++)
        }

        function l(c, f) {
            let h = 0,
                d = 0,
                m = 0,
                v = 0,
                S = 0;
            const p = f.matrixWorldInverse;
            for (let u = 0, y = c.length; u < y; u++) {
                const A = c[u];
                if (A.isDirectionalLight) {
                    const M = n.directional[h];
                    M.direction.setFromMatrixPosition(A.matrixWorld), r.setFromMatrixPosition(A.target.matrixWorld), M.direction.sub(r), M.direction.transformDirection(p), h++
                } else if (A.isSpotLight) {
                    const M = n.spot[m];
                    M.position.setFromMatrixPosition(A.matrixWorld), M.position.applyMatrix4(p), M.direction.setFromMatrixPosition(A.matrixWorld), r.setFromMatrixPosition(A.target.matrixWorld), M.direction.sub(r), M.direction.transformDirection(p), m++
                } else if (A.isRectAreaLight) {
                    const M = n.rectArea[v];
                    M.position.setFromMatrixPosition(A.matrixWorld), M.position.applyMatrix4(p), a.identity(), s.copy(A.matrixWorld), s.premultiply(p), a.extractRotation(s), M.halfWidth.set(A.width * .5, 0, 0), M.halfHeight.set(0, A.height * .5, 0), M.halfWidth.applyMatrix4(a), M.halfHeight.applyMatrix4(a), v++
                } else if (A.isPointLight) {
                    const M = n.point[d];
                    M.position.setFromMatrixPosition(A.matrixWorld), M.position.applyMatrix4(p), d++
                } else if (A.isHemisphereLight) {
                    const M = n.hemi[S];
                    M.direction.setFromMatrixPosition(A.matrixWorld), M.direction.transformDirection(p), S++
                }
            }
        }
        return {
            setup: o,
            setupView: l,
            state: n
        }
    }

    function xs(i) {
        const e = new Jc(i),
            t = [],
            n = [];

        function r(f) {
            c.camera = f, t.length = 0, n.length = 0
        }

        function s(f) {
            t.push(f)
        }

        function a(f) {
            n.push(f)
        }

        function o() {
            e.setup(t)
        }

        function l(f) {
            e.setupView(t, f)
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

    function Qc(i) {
        let e = new WeakMap;

        function t(r, s = 0) {
            const a = e.get(r);
            let o;
            return a === void 0 ? (o = new xs(i), e.set(r, [o])) : s >= a.length ? (o = new xs(i), a.push(o)) : o = a[s], o
        }

        function n() {
            e = new WeakMap
        }
        return {
            get: t,
            dispose: n
        }
    }
    const eu = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
        tu = `uniform sampler2D shadow_pass;
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

    function nu(i, e, t) {
        let n = new Hr;
        const r = new Ze,
            s = new Ze,
            a = new st,
            o = new la({
                depthPacking: 3201
            }),
            l = new ca,
            c = {},
            f = t.maxTextureSize,
            h = {
                0: 1,
                1: 0,
                2: 2
            },
            d = new Qt({
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
                vertexShader: eu,
                fragmentShader: tu
            }),
            m = d.clone();
        m.defines.HORIZONTAL_PASS = 1;
        const v = new an;
        v.setAttribute("position", new Nt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
        const S = new Ot(v, d),
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
            const G = u !== 3 && this.type === 3,
                W = u === 3 && this.type !== 3;
            for (let j = 0, V = w.length; j < V; j++) {
                const ee = w[j],
                    z = ee.shadow;
                if (z === void 0) {
                    console.warn("THREE.WebGLShadowMap:", ee, "has no shadow.");
                    continue
                }
                if (z.autoUpdate === !1 && z.needsUpdate === !1) continue;
                r.copy(z.mapSize);
                const oe = z.getFrameExtents();
                if (r.multiply(oe), s.copy(z.mapSize), (r.x > f || r.y > f) && (r.x > f && (s.x = Math.floor(f / oe.x), r.x = s.x * oe.x, z.mapSize.x = s.x), r.y > f && (s.y = Math.floor(f / oe.y), r.y = s.y * oe.y, z.mapSize.y = s.y)), z.map === null || G === !0 || W === !0) {
                    const Te = this.type !== 3 ? {
                        minFilter: 1003,
                        magFilter: 1003
                    } : {};
                    z.map !== null && z.map.dispose(), z.map = new tn(r.x, r.y, Te), z.map.texture.name = ee.name + ".shadowMap", z.camera.updateProjectionMatrix()
                }
                i.setRenderTarget(z.map), i.clear();
                const fe = z.getViewportCount();
                for (let Te = 0; Te < fe; Te++) {
                    const Ne = z.getViewport(Te);
                    a.set(s.x * Ne.x, s.y * Ne.y, s.x * Ne.z, s.y * Ne.w), q.viewport(a), z.updateMatrices(ee, Te), n = z.getFrustum(), M(C, U, z.camera, ee, this.type)
                }
                z.isPointLightShadow !== !0 && this.type === 3 && y(z, U), z.needsUpdate = !1
            }
            u = this.type, p.needsUpdate = !1, i.setRenderTarget(E, x, P)
        };

        function y(w, C) {
            const U = e.update(S);
            d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples, m.defines.VSM_SAMPLES = w.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), w.mapPass === null && (w.mapPass = new tn(r.x, r.y)), d.uniforms.shadow_pass.value = w.map.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, i.setRenderTarget(w.mapPass), i.clear(), i.renderBufferDirect(C, null, U, d, S, null), m.uniforms.shadow_pass.value = w.mapPass.texture, m.uniforms.resolution.value = w.mapSize, m.uniforms.radius.value = w.radius, i.setRenderTarget(w.map), i.clear(), i.renderBufferDirect(C, null, U, m, S, null)
        }

        function A(w, C, U, E) {
            let x = null;
            const P = U.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
            if (P !== void 0) x = P;
            else if (x = U.isPointLight === !0 ? l : o, i.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === !0) {
                const q = x.uuid,
                    G = C.uuid;
                let W = c[q];
                W === void 0 && (W = {}, c[q] = W);
                let j = W[G];
                j === void 0 && (j = x.clone(), W[G] = j, C.addEventListener("dispose", I)), x = j
            }
            if (x.visible = C.visible, x.wireframe = C.wireframe, E === 3 ? x.side = C.shadowSide !== null ? C.shadowSide : C.side : x.side = C.shadowSide !== null ? C.shadowSide : h[C.side], x.alphaMap = C.alphaMap, x.alphaTest = C.alphaToCoverage === !0 ? .5 : C.alphaTest, x.map = C.map, x.clipShadows = C.clipShadows, x.clippingPlanes = C.clippingPlanes, x.clipIntersection = C.clipIntersection, x.displacementMap = C.displacementMap, x.displacementScale = C.displacementScale, x.displacementBias = C.displacementBias, x.wireframeLinewidth = C.wireframeLinewidth, x.linewidth = C.linewidth, U.isPointLight === !0 && x.isMeshDistanceMaterial === !0) {
                const q = i.properties.get(x);
                q.light = U
            }
            return x
        }

        function M(w, C, U, E, x) {
            if (w.visible === !1) return;
            if (w.layers.test(C.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && x === 3) && (!w.frustumCulled || n.intersectsObject(w))) {
                w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, w.matrixWorld);
                const G = e.update(w),
                    W = w.material;
                if (Array.isArray(W)) {
                    const j = G.groups;
                    for (let V = 0, ee = j.length; V < ee; V++) {
                        const z = j[V],
                            oe = W[z.materialIndex];
                        if (oe && oe.visible) {
                            const fe = A(w, oe, E, x);
                            w.onBeforeShadow(i, w, C, U, G, fe, z), i.renderBufferDirect(U, null, G, fe, w, z), w.onAfterShadow(i, w, C, U, G, fe, z)
                        }
                    }
                } else if (W.visible) {
                    const j = A(w, W, E, x);
                    w.onBeforeShadow(i, w, C, U, G, j, null), i.renderBufferDirect(U, null, G, j, w, null), w.onAfterShadow(i, w, C, U, G, j, null)
                }
            }
            const q = w.children;
            for (let G = 0, W = q.length; G < W; G++) M(q[G], C, U, E, x)
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
    const iu = {
        0: 1,
        2: 6,
        4: 7,
        3: 5,
        1: 0,
        6: 2,
        7: 4,
        5: 3
    };

    function ru(i, e) {
        function t() {
            let b = !1;
            const se = new st;
            let Z = null;
            const he = new st(0, 0, 0, 0);
            return {
                setMask: function(J) {
                    Z !== J && !b && (i.colorMask(J, J, J, J), Z = J)
                },
                setLocked: function(J) {
                    b = J
                },
                setClear: function(J, Y, pe, Le, Qe) {
                    Qe === !0 && (J *= Le, Y *= Le, pe *= Le), se.set(J, Y, pe, Le), he.equals(se) === !1 && (i.clearColor(J, Y, pe, Le), he.copy(se))
                },
                reset: function() {
                    b = !1, Z = null, he.set(-1, 0, 0, 0)
                }
            }
        }

        function n() {
            let b = !1,
                se = !1,
                Z = null,
                he = null,
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
                    if (se && (Y = iu[Y]), he !== Y) {
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
                        he = Y
                    }
                },
                setLocked: function(Y) {
                    b = Y
                },
                setClear: function(Y) {
                    J !== Y && (se && (Y = 1 - Y), i.clearDepth(Y), J = Y)
                },
                reset: function() {
                    b = !1, Z = null, he = null, J = null, se = !1
                }
            }
        }

        function r() {
            let b = !1,
                se = null,
                Z = null,
                he = null,
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
                setFunc: function(qe, Ut, qt) {
                    (Z !== qe || he !== Ut || J !== qt) && (i.stencilFunc(qe, Ut, qt), Z = qe, he = Ut, J = qt)
                },
                setOp: function(qe, Ut, qt) {
                    (Y !== qe || pe !== Ut || Le !== qt) && (i.stencilOp(qe, Ut, qt), Y = qe, pe = Ut, Le = qt)
                },
                setLocked: function(qe) {
                    b = qe
                },
                setClear: function(qe) {
                    Qe !== qe && (i.clearStencil(qe), Qe = qe)
                },
                reset: function() {
                    b = !1, se = null, Z = null, he = null, J = null, Y = null, pe = null, Le = null, Qe = null
                }
            }
        }
        const s = new t,
            a = new n,
            o = new r,
            l = new WeakMap,
            c = new WeakMap;
        let f = {},
            h = {},
            d = new WeakMap,
            m = [],
            v = null,
            S = !1,
            p = null,
            u = null,
            y = null,
            A = null,
            M = null,
            I = null,
            w = null,
            C = new Ke(0, 0, 0),
            U = 0,
            E = !1,
            x = null,
            P = null,
            q = null,
            G = null,
            W = null;
        const j = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        let V = !1,
            ee = 0;
        const z = i.getParameter(i.VERSION);
        z.indexOf("WebGL") !== -1 ? (ee = parseFloat(/^WebGL (\d)/.exec(z)[1]), V = ee >= 1) : z.indexOf("OpenGL ES") !== -1 && (ee = parseFloat(/^OpenGL ES (\d)/.exec(z)[1]), V = ee >= 2);
        let oe = null,
            fe = {};
        const Te = i.getParameter(i.SCISSOR_BOX),
            Ne = i.getParameter(i.VIEWPORT),
            je = new st().fromArray(Te),
            X = new st().fromArray(Ne);

        function te(b, se, Z, he) {
            const J = new Uint8Array(4),
                Y = i.createTexture();
            i.bindTexture(b, Y), i.texParameteri(b, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(b, i.TEXTURE_MAG_FILTER, i.NEAREST);
            for (let pe = 0; pe < Z; pe++) b === i.TEXTURE_3D || b === i.TEXTURE_2D_ARRAY ? i.texImage3D(se, 0, i.RGBA, 1, 1, he, 0, i.RGBA, i.UNSIGNED_BYTE, J) : i.texImage2D(se + pe, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, J);
            return Y
        }
        const Se = {};
        Se[i.TEXTURE_2D] = te(i.TEXTURE_2D, i.TEXTURE_2D, 1), Se[i.TEXTURE_CUBE_MAP] = te(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Se[i.TEXTURE_2D_ARRAY] = te(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Se[i.TEXTURE_3D] = te(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), le(i.DEPTH_TEST), a.setFunc(3), We(!1), Je(1), le(i.CULL_FACE), R(0);

        function le(b) {
            f[b] !== !0 && (i.enable(b), f[b] = !0)
        }

        function Me(b) {
            f[b] !== !1 && (i.disable(b), f[b] = !1)
        }

        function Ve(b, se) {
            return h[b] !== se ? (i.bindFramebuffer(b, se), h[b] = se, b === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = se), b === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = se), !0) : !1
        }

        function Ce(b, se) {
            let Z = m,
                he = !1;
            if (b) {
                Z = d.get(se), Z === void 0 && (Z = [], d.set(se, Z));
                const J = b.textures;
                if (Z.length !== J.length || Z[0] !== i.COLOR_ATTACHMENT0) {
                    for (let Y = 0, pe = J.length; Y < pe; Y++) Z[Y] = i.COLOR_ATTACHMENT0 + Y;
                    Z.length = J.length, he = !0
                }
            } else Z[0] !== i.BACK && (Z[0] = i.BACK, he = !0);
            he && i.drawBuffers(Z)
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

        function R(b, se, Z, he, J, Y, pe, Le, Qe, qe) {
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
                    y = null, A = null, I = null, w = null, C.set(0, 0, 0), U = 0, p = b, E = qe
                }
                return
            }
            J = J || se, Y = Y || Z, pe = pe || he, (se !== u || J !== M) && (i.blendEquationSeparate(nt[se], nt[J]), u = se, M = J), (Z !== y || he !== A || Y !== I || pe !== w) && (i.blendFuncSeparate(ke[Z], ke[he], ke[Y], ke[pe]), y = Z, A = he, I = Y, w = pe), (Le.equals(C) === !1 || Qe !== U) && (i.blendColor(Le.r, Le.g, Le.b, Qe), C.copy(Le), U = Qe), p = b, E = !1
        }

        function _t(b, se) {
            b.side === 2 ? Me(i.CULL_FACE) : le(i.CULL_FACE);
            let Z = b.side === 1;
            se && (Z = !Z), We(Z), b.blending === 1 && b.transparent === !1 ? R(0) : R(b.blending, b.blendEquation, b.blendSrc, b.blendDst, b.blendEquationAlpha, b.blendSrcAlpha, b.blendDstAlpha, b.blendColor, b.blendAlpha, b.premultipliedAlpha), a.setFunc(b.depthFunc), a.setTest(b.depthTest), a.setMask(b.depthWrite), s.setMask(b.colorWrite);
            const he = b.stencilWrite;
            o.setTest(he), he && (o.setMask(b.stencilWriteMask), o.setFunc(b.stencilFunc, b.stencilRef, b.stencilFuncMask), o.setOp(b.stencilFail, b.stencilZFail, b.stencilZPass)), ze(b.polygonOffset, b.polygonOffsetFactor, b.polygonOffsetUnits), b.alphaToCoverage === !0 ? le(i.SAMPLE_ALPHA_TO_COVERAGE) : Me(i.SAMPLE_ALPHA_TO_COVERAGE)
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

        function ze(b, se, Z) {
            b ? (le(i.POLYGON_OFFSET_FILL), (G !== se || W !== Z) && (i.polygonOffset(se, Z), G = se, W = Z)) : Me(i.POLYGON_OFFSET_FILL)
        }

        function Ae(b) {
            b ? le(i.SCISSOR_TEST) : Me(i.SCISSOR_TEST)
        }

        function Fe(b) {
            b === void 0 && (b = i.TEXTURE0 + j - 1), oe !== b && (i.activeTexture(b), oe = b)
        }

        function ut(b, se, Z) {
            Z === void 0 && (oe === null ? Z = i.TEXTURE0 + j - 1 : Z = oe);
            let he = fe[Z];
            he === void 0 && (he = {
                type: void 0,
                texture: void 0
            }, fe[Z] = he), (he.type !== b || he.texture !== se) && (oe !== Z && (i.activeTexture(Z), oe = Z), i.bindTexture(b, se || Se[b]), he.type = b, he.texture = se)
        }

        function T() {
            const b = fe[oe];
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
            let he = Z.get(b);
            he === void 0 && (he = i.getUniformBlockIndex(se, b.name), Z.set(b, he))
        }

        function ie(b, se) {
            const he = c.get(se).get(b);
            l.get(se) !== he && (i.uniformBlockBinding(se, he, b.__bindingPointIndex), l.set(se, he))
        }

        function De() {
            i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), f = {}, oe = null, fe = {}, h = {}, d = new WeakMap, m = [], v = null, S = !1, p = null, u = null, y = null, A = null, M = null, I = null, w = null, C = new Ke(0, 0, 0), U = 0, E = !1, x = null, P = null, q = null, G = null, W = null, je.set(0, 0, i.canvas.width, i.canvas.height), X.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset()
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
            setMaterial: _t,
            setFlipSided: We,
            setCullFace: Je,
            setLineWidth: ge,
            setPolygonOffset: ze,
            setScissorTest: Ae,
            activeTexture: Fe,
            bindTexture: ut,
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

    function su(i, e, t, n, r, s, a) {
        const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
            l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
            c = new Ze,
            f = new WeakMap;
        let h;
        const d = new WeakMap;
        let m = !1;
        try {
            m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null
        } catch {}

        function v(T, _) {
            return m ? new OffscreenCanvas(T, _) : ti("canvas")
        }

        function S(T, _, F) {
            let k = 1;
            const $ = ut(T);
            if (($.width > F || $.height > F) && (k = F / Math.max($.width, $.height)), k < 1)
                if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
                    const H = Math.floor(k * $.width),
                        ve = Math.floor(k * $.height);
                    h === void 0 && (h = v(H, ve));
                    const re = _ ? v(H, ve) : h;
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

        function y(T) {
            return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D
        }

        function A(T, _, F, k, $ = !1) {
            if (T !== null) {
                if (i[T] !== void 0) return i[T];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'")
            }
            let H = _;
            if (_ === i.RED && (F === i.FLOAT && (H = i.R32F), F === i.HALF_FLOAT && (H = i.R16F), F === i.UNSIGNED_BYTE && (H = i.R8)), _ === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (H = i.R8UI), F === i.UNSIGNED_SHORT && (H = i.R16UI), F === i.UNSIGNED_INT && (H = i.R32UI), F === i.BYTE && (H = i.R8I), F === i.SHORT && (H = i.R16I), F === i.INT && (H = i.R32I)), _ === i.RG && (F === i.FLOAT && (H = i.RG32F), F === i.HALF_FLOAT && (H = i.RG16F), F === i.UNSIGNED_BYTE && (H = i.RG8)), _ === i.RG_INTEGER && (F === i.UNSIGNED_BYTE && (H = i.RG8UI), F === i.UNSIGNED_SHORT && (H = i.RG16UI), F === i.UNSIGNED_INT && (H = i.RG32UI), F === i.BYTE && (H = i.RG8I), F === i.SHORT && (H = i.RG16I), F === i.INT && (H = i.RG32I)), _ === i.RGB_INTEGER && (F === i.UNSIGNED_BYTE && (H = i.RGB8UI), F === i.UNSIGNED_SHORT && (H = i.RGB16UI), F === i.UNSIGNED_INT && (H = i.RGB32UI), F === i.BYTE && (H = i.RGB8I), F === i.SHORT && (H = i.RGB16I), F === i.INT && (H = i.RGB32I)), _ === i.RGBA_INTEGER && (F === i.UNSIGNED_BYTE && (H = i.RGBA8UI), F === i.UNSIGNED_SHORT && (H = i.RGBA16UI), F === i.UNSIGNED_INT && (H = i.RGBA32UI), F === i.BYTE && (H = i.RGBA8I), F === i.SHORT && (H = i.RGBA16I), F === i.INT && (H = i.RGBA32I)), _ === i.RGB && F === i.UNSIGNED_INT_5_9_9_9_REV && (H = i.RGB9_E5), _ === i.RGBA) {
                const ve = $ ? ei : Ge.getTransfer(k);
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
            _.removeEventListener("dispose", w), U(_), _.isVideoTexture && f.delete(_)
        }

        function C(T) {
            const _ = T.target;
            _.removeEventListener("dispose", C), x(_)
        }

        function U(T) {
            const _ = n.get(T);
            if (_.__webglInit === void 0) return;
            const F = T.source,
                k = d.get(F);
            if (k) {
                const $ = k[_.__cacheKey];
                $.usedTimes--, $.usedTimes === 0 && E(T), Object.keys(k).length === 0 && d.delete(F)
            }
            n.remove(T)
        }

        function E(T) {
            const _ = n.get(T);
            i.deleteTexture(_.__webglTexture);
            const F = T.source,
                k = d.get(F);
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

        function G() {
            const T = P;
            return T >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + r.maxTextures), P += 1, T
        }

        function W(T) {
            const _ = [];
            return _.push(T.wrapS), _.push(T.wrapT), _.push(T.wrapR || 0), _.push(T.magFilter), _.push(T.minFilter), _.push(T.anisotropy), _.push(T.internalFormat), _.push(T.format), _.push(T.type), _.push(T.generateMipmaps), _.push(T.premultiplyAlpha), _.push(T.flipY), _.push(T.unpackAlignment), _.push(T.colorSpace), _.join()
        }

        function j(T, _) {
            const F = n.get(T);
            if (T.isVideoTexture && Ae(T), T.isRenderTargetTexture === !1 && T.version > 0 && F.__version !== T.version) {
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

        function z(T, _) {
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
            fe = {
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
            if (_.type === 1015 && e.has("OES_texture_float_linear") === !1 && (_.magFilter === 1006 || _.magFilter === 1007 || _.magFilter === 1005 || _.magFilter === 1008 || _.minFilter === 1006 || _.minFilter === 1007 || _.minFilter === 1005 || _.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, oe[_.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, oe[_.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, oe[_.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, fe[_.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, fe[_.minFilter]), _.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, Te[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
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
            let $ = d.get(k);
            $ === void 0 && ($ = {}, d.set(k, $));
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
                const re = Ge.getPrimaries(Ge.workingColorSpace),
                    _e = _.colorSpace === Yt ? null : Ge.getPrimaries(_.colorSpace),
                    xe = _.colorSpace === Yt || re === _e ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
                i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe);
                let K = S(_.image, !1, r.maxTextureSize);
                K = Fe(_, K);
                const ue = s.convert(_.format, _.colorSpace),
                    be = s.convert(_.type);
                let Re = A(_.internalFormat, ue, be, _.colorSpace, _.isVideoTexture);
                Ne(k, _);
                let ie;
                const De = _.mipmaps,
                    b = _.isVideoTexture !== !0,
                    se = ve.__version === void 0 || $ === !0,
                    Z = H.dataReady,
                    he = I(_, K);
                if (_.isDepthTexture) Re = M(_.format === 1027, _.type), se && (b ? t.texStorage2D(i.TEXTURE_2D, 1, Re, K.width, K.height) : t.texImage2D(i.TEXTURE_2D, 0, Re, K.width, K.height, 0, ue, be, null));
                else if (_.isDataTexture)
                    if (De.length > 0) {
                        b && se && t.texStorage2D(i.TEXTURE_2D, he, Re, De[0].width, De[0].height);
                        for (let J = 0, Y = De.length; J < Y; J++) ie = De[J], b ? Z && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ie.width, ie.height, ue, be, ie.data) : t.texImage2D(i.TEXTURE_2D, J, Re, ie.width, ie.height, 0, ue, be, ie.data);
                        _.generateMipmaps = !1
                    } else b ? (se && t.texStorage2D(i.TEXTURE_2D, he, Re, K.width, K.height), Z && te(_, K, ue, be)) : t.texImage2D(i.TEXTURE_2D, 0, Re, K.width, K.height, 0, ue, be, K.data);
                else if (_.isCompressedTexture)
                    if (_.isCompressedArrayTexture) {
                        b && se && t.texStorage3D(i.TEXTURE_2D_ARRAY, he, Re, De[0].width, De[0].height, K.depth);
                        for (let J = 0, Y = De.length; J < Y; J++)
                            if (ie = De[J], _.format !== 1023)
                                if (ue !== null)
                                    if (b) {
                                        if (Z)
                                            if (_.layerUpdates.size > 0) {
                                                const pe = Wr(ie.width, ie.height, _.format, _.type);
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
                        b && se && t.texStorage2D(i.TEXTURE_2D, he, Re, De[0].width, De[0].height);
                        for (let J = 0, Y = De.length; J < Y; J++) ie = De[J], _.format !== 1023 ? ue !== null ? b ? Z && t.compressedTexSubImage2D(i.TEXTURE_2D, J, 0, 0, ie.width, ie.height, ue, ie.data) : t.compressedTexImage2D(i.TEXTURE_2D, J, Re, ie.width, ie.height, 0, ie.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : b ? Z && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ie.width, ie.height, ue, be, ie.data) : t.texImage2D(i.TEXTURE_2D, J, Re, ie.width, ie.height, 0, ue, be, ie.data)
                    }
                else if (_.isDataArrayTexture)
                    if (b) {
                        if (se && t.texStorage3D(i.TEXTURE_2D_ARRAY, he, Re, K.width, K.height, K.depth), Z)
                            if (_.layerUpdates.size > 0) {
                                const J = Wr(K.width, K.height, _.format, _.type);
                                for (const Y of _.layerUpdates) {
                                    const pe = K.data.subarray(Y * J / K.data.BYTES_PER_ELEMENT, (Y + 1) * J / K.data.BYTES_PER_ELEMENT);
                                    t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Y, K.width, K.height, 1, ue, be, pe)
                                }
                                _.clearLayerUpdates()
                            } else t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, K.width, K.height, K.depth, ue, be, K.data)
                    } else t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Re, K.width, K.height, K.depth, 0, ue, be, K.data);
                else if (_.isData3DTexture) b ? (se && t.texStorage3D(i.TEXTURE_3D, he, Re, K.width, K.height, K.depth), Z && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, K.width, K.height, K.depth, ue, be, K.data)) : t.texImage3D(i.TEXTURE_3D, 0, Re, K.width, K.height, K.depth, 0, ue, be, K.data);
                else if (_.isFramebufferTexture) {
                    if (se)
                        if (b) t.texStorage2D(i.TEXTURE_2D, he, Re, K.width, K.height);
                        else {
                            let J = K.width,
                                Y = K.height;
                            for (let pe = 0; pe < he; pe++) t.texImage2D(i.TEXTURE_2D, pe, Re, J, Y, 0, ue, be, null), J >>= 1, Y >>= 1
                        }
                } else if (De.length > 0) {
                    if (b && se) {
                        const J = ut(De[0]);
                        t.texStorage2D(i.TEXTURE_2D, he, Re, J.width, J.height)
                    }
                    for (let J = 0, Y = De.length; J < Y; J++) ie = De[J], b ? Z && t.texSubImage2D(i.TEXTURE_2D, J, 0, 0, ue, be, ie) : t.texImage2D(i.TEXTURE_2D, J, Re, ue, be, ie);
                    _.generateMipmaps = !1
                } else if (b) {
                    if (se) {
                        const J = ut(K);
                        t.texStorage2D(i.TEXTURE_2D, he, Re, J.width, J.height)
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
                const ve = Ge.getPrimaries(Ge.workingColorSpace),
                    re = _.colorSpace === Yt ? null : Ge.getPrimaries(_.colorSpace),
                    _e = _.colorSpace === Yt || ve === re ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
                i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, _e);
                const xe = _.isCompressedTexture || _.image[0].isCompressedTexture,
                    K = _.image[0] && _.image[0].isDataTexture,
                    ue = [];
                for (let Y = 0; Y < 6; Y++) !xe && !K ? ue[Y] = S(_.image[Y], !0, r.maxCubemapSize) : ue[Y] = K ? _.image[Y].image : _.image[Y], ue[Y] = Fe(_, ue[Y]);
                const be = ue[0],
                    Re = s.convert(_.format, _.colorSpace),
                    ie = s.convert(_.type),
                    De = A(_.internalFormat, Re, ie, _.colorSpace),
                    b = _.isVideoTexture !== !0,
                    se = H.__version === void 0 || k === !0,
                    Z = $.dataReady;
                let he = I(_, be);
                Ne(i.TEXTURE_CUBE_MAP, _);
                let J;
                if (xe) {
                    b && se && t.texStorage2D(i.TEXTURE_CUBE_MAP, he, De, be.width, be.height);
                    for (let Y = 0; Y < 6; Y++) {
                        J = ue[Y].mipmaps;
                        for (let pe = 0; pe < J.length; pe++) {
                            const Le = J[pe];
                            _.format !== 1023 ? Re !== null ? b ? Z && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe, 0, 0, Le.width, Le.height, Re, Le.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe, De, Le.width, Le.height, 0, Le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : b ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe, 0, 0, Le.width, Le.height, Re, ie, Le.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe, De, Le.width, Le.height, 0, Re, ie, Le.data)
                        }
                    }
                } else {
                    if (J = _.mipmaps, b && se) {
                        J.length > 0 && he++;
                        const Y = ut(ue[0]);
                        t.texStorage2D(i.TEXTURE_CUBE_MAP, he, De, Y.width, Y.height)
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
                _e = A(F.internalFormat, ve, re, F.colorSpace),
                xe = n.get(_),
                K = n.get(F);
            if (K.__renderTarget = _, !xe.__hasExternalTextures) {
                const ue = Math.max(1, _.width >> H),
                    be = Math.max(1, _.height >> H);
                $ === i.TEXTURE_3D || $ === i.TEXTURE_2D_ARRAY ? t.texImage3D($, H, _e, ue, be, _.depth, 0, ve, re, null) : t.texImage2D($, H, _e, ue, be, 0, ve, re, null)
            }
            t.bindFramebuffer(i.FRAMEBUFFER, T), ze(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, k, $, K.__webglTexture, 0, ge(_)) : ($ === i.TEXTURE_2D || $ >= i.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, k, $, K.__webglTexture, H), t.bindFramebuffer(i.FRAMEBUFFER, null)
        }

        function Ve(T, _, F) {
            if (i.bindRenderbuffer(i.RENDERBUFFER, T), _.depthBuffer) {
                const k = _.depthTexture,
                    $ = k && k.isDepthTexture ? k.type : null,
                    H = M(_.stencilBuffer, $),
                    ve = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
                    re = ge(_);
                ze(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, re, H, _.width, _.height) : F ? i.renderbufferStorageMultisample(i.RENDERBUFFER, re, H, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, H, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, ve, i.RENDERBUFFER, T)
            } else {
                const k = _.textures;
                for (let $ = 0; $ < k.length; $++) {
                    const H = k[$],
                        ve = s.convert(H.format, H.colorSpace),
                        re = s.convert(H.type),
                        _e = A(H.internalFormat, ve, re, H.colorSpace),
                        xe = ge(_);
                    F && ze(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, xe, _e, _.width, _.height) : ze(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, xe, _e, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, _e, _.width, _.height)
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
            if (_.depthTexture.format === 1026) ze(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0, H) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0);
            else if (_.depthTexture.format === 1027) ze(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0, H) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0);
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
                if (T.samples > 0 && ze(T) === !1) {
                    F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
                    for (let re = 0; re < $.length; re++) {
                        const _e = $[re];
                        F.__webglColorRenderbuffer[re] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[re]);
                        const xe = s.convert(_e.format, _e.colorSpace),
                            K = s.convert(_e.type),
                            ue = A(_e.internalFormat, xe, K, _e.colorSpace, T.isXRRenderTarget === !0),
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
                    const H = y(T),
                        ve = n.get($).__webglTexture;
                    t.bindTexture(H, ve), u(H), t.unbindTexture()
                }
            }
        }
        const _t = [],
            We = [];

        function Je(T) {
            if (T.samples > 0) {
                if (ze(T) === !1) {
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
                        i.blitFramebuffer(0, 0, F, k, 0, 0, F, k, $, i.NEAREST), l === !0 && (_t.length = 0, We.length = 0, _t.push(i.COLOR_ATTACHMENT0 + xe), T.depthBuffer && T.resolveDepthBuffer === !1 && (_t.push(H), We.push(H), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, We)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, _t))
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

        function ze(T) {
            const _ = n.get(T);
            return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1
        }

        function Ae(T) {
            const _ = a.render.frame;
            f.get(T) !== _ && (f.set(T, _), T.update())
        }

        function Fe(T, _) {
            const F = T.colorSpace,
                k = T.format,
                $ = T.type;
            return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || F !== _n && F !== Yt && (Ge.getTransfer(F) === $e ? (k !== 1023 || $ !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), _
        }

        function ut(T) {
            return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (c.width = T.naturalWidth || T.width, c.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (c.width = T.displayWidth, c.height = T.displayHeight) : (c.width = T.width, c.height = T.height), c
        }
        this.allocateTextureUnit = G, this.resetTextureUnits = q, this.setTexture2D = j, this.setTexture2DArray = V, this.setTexture3D = ee, this.setTextureCube = z, this.rebindTextures = nt, this.setupRenderTarget = ke, this.updateRenderTargetMipmap = R, this.updateMultisampleRenderTarget = Je, this.setupDepthRenderbuffer = tt, this.setupFrameBufferTexture = Me, this.useMultisampledRTT = ze
    }

    function au(i, e) {
        function t(n, r = Yt) {
            let s;
            const a = Ge.getTransfer(r);
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
    const ou = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
        lu = `
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
    class cu {
        constructor() {
            this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0
        }
        init(e, t, n) {
            if (this.texture === null) {
                const r = new xt,
                    s = e.properties.get(r);
                s.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r
            }
        }
        getMesh(e) {
            if (this.texture !== null && this.mesh === null) {
                const t = e.cameras[0].viewport,
                    n = new Qt({
                        vertexShader: ou,
                        fragmentShader: lu,
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
                this.mesh = new Ot(new Zn(20, 20), n)
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
    class uu extends gn {
        constructor(e, t) {
            super();
            const n = this;
            let r = null,
                s = 1,
                a = null,
                o = "local-floor",
                l = 1,
                c = null,
                f = null,
                h = null,
                d = null,
                m = null,
                v = null;
            const S = new cu,
                p = t.getContextAttributes();
            let u = null,
                y = null;
            const A = [],
                M = [],
                I = new Ze;
            let w = null;
            const C = new It;
            C.viewport = new st;
            const U = new It;
            U.viewport = new st;
            const E = [C, U],
                x = new ua;
            let P = null,
                q = null;
            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(X) {
                let te = A[X];
                return te === void 0 && (te = new nr, A[X] = te), te.getTargetRaySpace()
            }, this.getControllerGrip = function(X) {
                let te = A[X];
                return te === void 0 && (te = new nr, A[X] = te), te.getGripSpace()
            }, this.getHand = function(X) {
                let te = A[X];
                return te === void 0 && (te = new nr, A[X] = te), te.getHandSpace()
            };

            function G(X) {
                const te = M.indexOf(X.inputSource);
                if (te === -1) return;
                const Se = A[te];
                Se !== void 0 && (Se.update(X.inputSource, X.frame, c || a), Se.dispatchEvent({
                    type: X.type,
                    data: X.inputSource
                }))
            }

            function W() {
                r.removeEventListener("select", G), r.removeEventListener("selectstart", G), r.removeEventListener("selectend", G), r.removeEventListener("squeeze", G), r.removeEventListener("squeezestart", G), r.removeEventListener("squeezeend", G), r.removeEventListener("end", W), r.removeEventListener("inputsourceschange", j);
                for (let X = 0; X < A.length; X++) {
                    const te = M[X];
                    te !== null && (M[X] = null, A[X].disconnect(te))
                }
                P = null, q = null, S.reset(), e.setRenderTarget(u), m = null, d = null, h = null, r = null, y = null, je.stop(), n.isPresenting = !1, e.setPixelRatio(w), e.setSize(I.width, I.height, !1), n.dispatchEvent({
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
                return d !== null ? d : m
            }, this.getBinding = function() {
                return h
            }, this.getFrame = function() {
                return v
            }, this.getSession = function() {
                return r
            }, this.setSession = async function(X) {
                if (r = X, r !== null) {
                    if (u = e.getRenderTarget(), r.addEventListener("select", G), r.addEventListener("selectstart", G), r.addEventListener("selectend", G), r.addEventListener("squeeze", G), r.addEventListener("squeezestart", G), r.addEventListener("squeezeend", G), r.addEventListener("end", W), r.addEventListener("inputsourceschange", j), p.xrCompatible !== !0 && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(I), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
                        let Se = null,
                            le = null,
                            Me = null;
                        p.depth && (Me = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Se = p.stencil ? 1027 : 1026, le = p.stencil ? 1020 : 1014);
                        const Ve = {
                            colorFormat: t.RGBA8,
                            depthFormat: Me,
                            scaleFactor: s
                        };
                        h = new XRWebGLBinding(r, t), d = h.createProjectionLayer(Ve), r.updateRenderState({
                            layers: [d]
                        }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), y = new tn(d.textureWidth, d.textureHeight, {
                            format: 1023,
                            type: 1009,
                            depthTexture: new Vr(d.textureWidth, d.textureHeight, le, void 0, void 0, void 0, void 0, void 0, void 0, Se),
                            stencilBuffer: p.stencil,
                            colorSpace: e.outputColorSpace,
                            samples: p.antialias ? 4 : 0,
                            resolveDepthBuffer: d.ignoreDepthValues === !1,
                            resolveStencilBuffer: d.ignoreDepthValues === !1
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
                        }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), y = new tn(m.framebufferWidth, m.framebufferHeight, {
                            format: 1023,
                            type: 1009,
                            colorSpace: e.outputColorSpace,
                            stencilBuffer: p.stencil,
                            resolveDepthBuffer: m.ignoreDepthValues === !1,
                            resolveStencilBuffer: m.ignoreDepthValues === !1
                        })
                    }
                    y.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), je.setContext(r), je.start(), n.isPresenting = !0, n.dispatchEvent({
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
                    le >= 0 && (M[le] = null, A[le].disconnect(Se))
                }
                for (let te = 0; te < X.added.length; te++) {
                    const Se = X.added[te];
                    let le = M.indexOf(Se);
                    if (le === -1) {
                        for (let Ve = 0; Ve < A.length; Ve++)
                            if (Ve >= M.length) {
                                M.push(Se), le = Ve;
                                break
                            } else if (M[Ve] === null) {
                            M[Ve] = Se, le = Ve;
                            break
                        }
                        if (le === -1) break
                    }
                    const Me = A[le];
                    Me && Me.connect(Se)
                }
            }
            const V = new B,
                ee = new B;

            function z(X, te, Se) {
                V.setFromMatrixPosition(te.matrixWorld), ee.setFromMatrixPosition(Se.matrixWorld);
                const le = V.distanceTo(ee),
                    Me = te.projectionMatrix.elements,
                    Ve = Se.projectionMatrix.elements,
                    Ce = Me[14] / (Me[10] - 1),
                    tt = Me[14] / (Me[10] + 1),
                    nt = (Me[9] + 1) / Me[5],
                    ke = (Me[9] - 1) / Me[5],
                    R = (Me[8] - 1) / Me[0],
                    _t = (Ve[8] + 1) / Ve[0],
                    We = Ce * R,
                    Je = Ce * _t,
                    ge = le / (-R + _t),
                    ze = ge * -R;
                if (te.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(ze), X.translateZ(ge), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), Me[10] === -1) X.projectionMatrix.copy(te.projectionMatrix), X.projectionMatrixInverse.copy(te.projectionMatrixInverse);
                else {
                    const Ae = Ce + ge,
                        Fe = tt + ge,
                        ut = We - ze,
                        T = Je + (le - ze),
                        _ = nt * tt / Fe * Ae,
                        F = ke * tt / Fe * Ae;
                    X.projectionMatrix.makePerspective(ut, T, _, F, Ae, Fe), X.projectionMatrixInverse.copy(X.projectionMatrix).invert()
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
                Me.length === 2 ? z(x, C, U) : x.projectionMatrix.copy(C.projectionMatrix), fe(X, x, le)
            };

            function fe(X, te, Se) {
                Se === null ? X.matrix.copy(te.matrixWorld) : (X.matrix.copy(Se.matrixWorld), X.matrix.invert(), X.matrix.multiply(te.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(!0), X.projectionMatrix.copy(te.projectionMatrix), X.projectionMatrixInverse.copy(te.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = Di * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1)
            }
            this.getCamera = function() {
                return x
            }, this.getFoveation = function() {
                if (!(d === null && m === null)) return l
            }, this.setFoveation = function(X) {
                l = X, d !== null && (d.fixedFoveation = X), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = X)
            }, this.hasDepthSensing = function() {
                return S.texture !== null
            }, this.getDepthSensingMesh = function() {
                return S.getMesh(x)
            };
            let Te = null;

            function Ne(X, te) {
                if (f = te.getViewerPose(c || a), v = te, f !== null) {
                    const Se = f.views;
                    m !== null && (e.setRenderTargetFramebuffer(y, m.framebuffer), e.setRenderTarget(y));
                    let le = !1;
                    Se.length !== x.cameras.length && (x.cameras.length = 0, le = !0);
                    for (let Ce = 0; Ce < Se.length; Ce++) {
                        const tt = Se[Ce];
                        let nt = null;
                        if (m !== null) nt = m.getViewport(tt);
                        else {
                            const R = h.getViewSubImage(d, tt);
                            nt = R.viewport, Ce === 0 && (e.setRenderTargetTextures(y, R.colorTexture, R.depthStencilTexture), e.setRenderTarget(y))
                        }
                        let ke = E[Ce];
                        ke === void 0 && (ke = new It, ke.layers.enable(Ce), ke.viewport = new st, E[Ce] = ke), ke.matrix.fromArray(tt.transform.matrix), ke.matrix.decompose(ke.position, ke.quaternion, ke.scale), ke.projectionMatrix.fromArray(tt.projectionMatrix), ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(), ke.viewport.set(nt.x, nt.y, nt.width, nt.height), Ce === 0 && (x.matrix.copy(ke.matrix), x.matrix.decompose(x.position, x.quaternion, x.scale)), le === !0 && x.cameras.push(ke)
                    }
                    const Me = r.enabledFeatures;
                    if (Me && Me.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && h) {
                        const Ce = h.getDepthInformation(Se[0]);
                        Ce && Ce.isValid && Ce.texture && S.init(e, Ce, r.renderState)
                    }
                }
                for (let Se = 0; Se < A.length; Se++) {
                    const le = M[Se],
                        Me = A[Se];
                    le !== null && Me !== void 0 && Me.update(le, te, c || a)
                }
                Te && Te(X, te), te.detectedPlanes && n.dispatchEvent({
                    type: "planesdetected",
                    data: te
                }), v = null
            }
            const je = new Xr;
            je.setAnimationLoop(Ne), this.setAnimationLoop = function(X) {
                Te = X
            }, this.dispose = function() {}
        }
    }
    const hn = new Vt,
        du = new at;

    function fu(i, e) {
        function t(p, u) {
            p.matrixAutoUpdate === !0 && p.updateMatrix(), u.value.copy(p.matrix)
        }

        function n(p, u) {
            u.color.getRGB(p.fogColor.value, Nr(i)), u.isFog ? (p.fogNear.value = u.near, p.fogFar.value = u.far) : u.isFogExp2 && (p.fogDensity.value = u.density)
        }

        function r(p, u, y, A, M) {
            u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(p, u) : u.isMeshToonMaterial ? (s(p, u), h(p, u)) : u.isMeshPhongMaterial ? (s(p, u), f(p, u)) : u.isMeshStandardMaterial ? (s(p, u), d(p, u), u.isMeshPhysicalMaterial && m(p, u, M)) : u.isMeshMatcapMaterial ? (s(p, u), v(p, u)) : u.isMeshDepthMaterial ? s(p, u) : u.isMeshDistanceMaterial ? (s(p, u), S(p, u)) : u.isMeshNormalMaterial ? s(p, u) : u.isLineBasicMaterial ? (a(p, u), u.isLineDashedMaterial && o(p, u)) : u.isPointsMaterial ? l(p, u, y, A) : u.isSpriteMaterial ? c(p, u) : u.isShadowMaterial ? (p.color.value.copy(u.color), p.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1)
        }

        function s(p, u) {
            p.opacity.value = u.opacity, u.color && p.diffuse.value.copy(u.color), u.emissive && p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.bumpMap && (p.bumpMap.value = u.bumpMap, t(u.bumpMap, p.bumpMapTransform), p.bumpScale.value = u.bumpScale, u.side === 1 && (p.bumpScale.value *= -1)), u.normalMap && (p.normalMap.value = u.normalMap, t(u.normalMap, p.normalMapTransform), p.normalScale.value.copy(u.normalScale), u.side === 1 && p.normalScale.value.negate()), u.displacementMap && (p.displacementMap.value = u.displacementMap, t(u.displacementMap, p.displacementMapTransform), p.displacementScale.value = u.displacementScale, p.displacementBias.value = u.displacementBias), u.emissiveMap && (p.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, p.emissiveMapTransform)), u.specularMap && (p.specularMap.value = u.specularMap, t(u.specularMap, p.specularMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
            const y = e.get(u),
                A = y.envMap,
                M = y.envMapRotation;
            A && (p.envMap.value = A, hn.copy(M), hn.x *= -1, hn.y *= -1, hn.z *= -1, A.isCubeTexture && A.isRenderTargetTexture === !1 && (hn.y *= -1, hn.z *= -1), p.envMapRotation.value.setFromMatrix4(du.makeRotationFromEuler(hn)), p.flipEnvMap.value = A.isCubeTexture && A.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = u.reflectivity, p.ior.value = u.ior, p.refractionRatio.value = u.refractionRatio), u.lightMap && (p.lightMap.value = u.lightMap, p.lightMapIntensity.value = u.lightMapIntensity, t(u.lightMap, p.lightMapTransform)), u.aoMap && (p.aoMap.value = u.aoMap, p.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, p.aoMapTransform))
        }

        function a(p, u) {
            p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, u.map && (p.map.value = u.map, t(u.map, p.mapTransform))
        }

        function o(p, u) {
            p.dashSize.value = u.dashSize, p.totalSize.value = u.dashSize + u.gapSize, p.scale.value = u.scale
        }

        function l(p, u, y, A) {
            p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.size.value = u.size * y, p.scale.value = A * .5, u.map && (p.map.value = u.map, t(u.map, p.uvTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest)
        }

        function c(p, u) {
            p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.rotation.value = u.rotation, u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest)
        }

        function f(p, u) {
            p.specular.value.copy(u.specular), p.shininess.value = Math.max(u.shininess, 1e-4)
        }

        function h(p, u) {
            u.gradientMap && (p.gradientMap.value = u.gradientMap)
        }

        function d(p, u) {
            p.metalness.value = u.metalness, u.metalnessMap && (p.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, p.metalnessMapTransform)), p.roughness.value = u.roughness, u.roughnessMap && (p.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, p.roughnessMapTransform)), u.envMap && (p.envMapIntensity.value = u.envMapIntensity)
        }

        function m(p, u, y) {
            p.ior.value = u.ior, u.sheen > 0 && (p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), p.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (p.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, p.sheenColorMapTransform)), u.sheenRoughnessMap && (p.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, p.sheenRoughnessMapTransform))), u.clearcoat > 0 && (p.clearcoat.value = u.clearcoat, p.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (p.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, p.clearcoatMapTransform)), u.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (p.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === 1 && p.clearcoatNormalScale.value.negate())), u.dispersion > 0 && (p.dispersion.value = u.dispersion), u.iridescence > 0 && (p.iridescence.value = u.iridescence, p.iridescenceIOR.value = u.iridescenceIOR, p.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (p.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, p.iridescenceMapTransform)), u.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), u.transmission > 0 && (p.transmission.value = u.transmission, p.transmissionSamplerMap.value = y.texture, p.transmissionSamplerSize.value.set(y.width, y.height), u.transmissionMap && (p.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, p.transmissionMapTransform)), p.thickness.value = u.thickness, u.thicknessMap && (p.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = u.attenuationDistance, p.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (p.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (p.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = u.specularIntensity, p.specularColor.value.copy(u.specularColor), u.specularColorMap && (p.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, p.specularColorMapTransform)), u.specularIntensityMap && (p.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, p.specularIntensityMapTransform))
        }

        function v(p, u) {
            u.matcap && (p.matcap.value = u.matcap)
        }

        function S(p, u) {
            const y = e.get(u).light;
            p.referencePosition.value.setFromMatrixPosition(y.matrixWorld), p.nearDistance.value = y.shadow.camera.near, p.farDistance.value = y.shadow.camera.far
        }
        return {
            refreshFogUniforms: n,
            refreshMaterialUniforms: r
        }
    }

    function hu(i, e, t, n) {
        let r = {},
            s = {},
            a = [];
        const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);

        function l(y, A) {
            const M = A.program;
            n.uniformBlockBinding(y, M)
        }

        function c(y, A) {
            let M = r[y.id];
            M === void 0 && (v(y), M = f(y), r[y.id] = M, y.addEventListener("dispose", p));
            const I = A.program;
            n.updateUBOMapping(y, I);
            const w = e.render.frame;
            s[y.id] !== w && (d(y), s[y.id] = w)
        }

        function f(y) {
            const A = h();
            y.__bindingPointIndex = A;
            const M = i.createBuffer(),
                I = y.__size,
                w = y.usage;
            return i.bindBuffer(i.UNIFORM_BUFFER, M), i.bufferData(i.UNIFORM_BUFFER, I, w), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, A, M), M
        }

        function h() {
            for (let y = 0; y < o; y++)
                if (a.indexOf(y) === -1) return a.push(y), y;
            return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0
        }

        function d(y) {
            const A = r[y.id],
                M = y.uniforms,
                I = y.__cache;
            i.bindBuffer(i.UNIFORM_BUFFER, A);
            for (let w = 0, C = M.length; w < C; w++) {
                const U = Array.isArray(M[w]) ? M[w] : [M[w]];
                for (let E = 0, x = U.length; E < x; E++) {
                    const P = U[E];
                    if (m(P, w, E, I) === !0) {
                        const q = P.__offset,
                            G = Array.isArray(P.value) ? P.value : [P.value];
                        let W = 0;
                        for (let j = 0; j < G.length; j++) {
                            const V = G[j],
                                ee = S(V);
                            typeof V == "number" || typeof V == "boolean" ? (P.__data[0] = V, i.bufferSubData(i.UNIFORM_BUFFER, q + W, P.__data)) : V.isMatrix3 ? (P.__data[0] = V.elements[0], P.__data[1] = V.elements[1], P.__data[2] = V.elements[2], P.__data[3] = 0, P.__data[4] = V.elements[3], P.__data[5] = V.elements[4], P.__data[6] = V.elements[5], P.__data[7] = 0, P.__data[8] = V.elements[6], P.__data[9] = V.elements[7], P.__data[10] = V.elements[8], P.__data[11] = 0) : (V.toArray(P.__data, W), W += ee.storage / Float32Array.BYTES_PER_ELEMENT)
                        }
                        i.bufferSubData(i.UNIFORM_BUFFER, q, P.__data)
                    }
                }
            }
            i.bindBuffer(i.UNIFORM_BUFFER, null)
        }

        function m(y, A, M, I) {
            const w = y.value,
                C = A + "_" + M;
            if (I[C] === void 0) return typeof w == "number" || typeof w == "boolean" ? I[C] = w : I[C] = w.clone(), !0; {
                const U = I[C];
                if (typeof w == "number" || typeof w == "boolean") {
                    if (U !== w) return I[C] = w, !0
                } else if (U.equals(w) === !1) return U.copy(w), !0
            }
            return !1
        }

        function v(y) {
            const A = y.uniforms;
            let M = 0;
            const I = 16;
            for (let C = 0, U = A.length; C < U; C++) {
                const E = Array.isArray(A[C]) ? A[C] : [A[C]];
                for (let x = 0, P = E.length; x < P; x++) {
                    const q = E[x],
                        G = Array.isArray(q.value) ? q.value : [q.value];
                    for (let W = 0, j = G.length; W < j; W++) {
                        const V = G[W],
                            ee = S(V),
                            z = M % I,
                            oe = z % ee.boundary,
                            fe = z + oe;
                        M += oe, fe !== 0 && I - fe < ee.storage && (M += I - fe), q.__data = new Float32Array(ee.storage / Float32Array.BYTES_PER_ELEMENT), q.__offset = M, M += ee.storage
                    }
                }
            }
            const w = M % I;
            return w > 0 && (M += I - w), y.__size = M, y.__cache = {}, this
        }

        function S(y) {
            const A = {
                boundary: 0,
                storage: 0
            };
            return typeof y == "number" || typeof y == "boolean" ? (A.boundary = 4, A.storage = 4) : y.isVector2 ? (A.boundary = 8, A.storage = 8) : y.isVector3 || y.isColor ? (A.boundary = 16, A.storage = 12) : y.isVector4 ? (A.boundary = 16, A.storage = 16) : y.isMatrix3 ? (A.boundary = 48, A.storage = 48) : y.isMatrix4 ? (A.boundary = 64, A.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), A
        }

        function p(y) {
            const A = y.target;
            A.removeEventListener("dispose", p);
            const M = a.indexOf(A.__bindingPointIndex);
            a.splice(M, 1), i.deleteBuffer(r[A.id]), delete r[A.id], delete s[A.id]
        }

        function u() {
            for (const y in r) i.deleteBuffer(r[y]);
            a = [], r = {}, s = {}
        }
        return {
            bind: l,
            update: c,
            dispose: u
        }
    }
    class pu {
        constructor(e = {}) {
            const {
                canvas: t = Ps(),
                context: n = null,
                depth: r = !0,
                stencil: s = !1,
                alpha: a = !1,
                antialias: o = !1,
                premultipliedAlpha: l = !0,
                preserveDrawingBuffer: c = !1,
                powerPreference: f = "default",
                failIfMajorPerformanceCaveat: h = !1,
                reverseDepthBuffer: d = !1
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
            const y = [],
                A = [];
            this.domElement = t, this.debug = {
                checkShaderErrors: !0,
                onShaderError: null
            }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
            const M = this;
            let I = !1;
            this._outputColorSpace = yt;
            let w = 0,
                C = 0,
                U = null,
                E = -1,
                x = null;
            const P = new st,
                q = new st;
            let G = null;
            const W = new Ke(0);
            let j = 0,
                V = t.width,
                ee = t.height,
                z = 1,
                oe = null,
                fe = null;
            const Te = new st(0, 0, V, ee),
                Ne = new st(0, 0, V, ee);
            let je = !1;
            const X = new Hr;
            let te = !1,
                Se = !1;
            const le = new at,
                Me = new at,
                Ve = new B,
                Ce = new st,
                tt = {
                    background: null,
                    fog: null,
                    environment: null,
                    overrideMaterial: null,
                    isScene: !0
                };
            let nt = !1;

            function ke() {
                return U === null ? z : 1
            }
            let R = n;

            function _t(g, D) {
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
                    powerPreference: f,
                    failIfMajorPerformanceCaveat: h
                };
                if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${wi}`), t.addEventListener("webglcontextlost", he, !1), t.addEventListener("webglcontextrestored", J, !1), t.addEventListener("webglcontextcreationerror", Y, !1), R === null) {
                    const D = "webgl2";
                    if (R = _t(D, g), R === null) throw _t(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
                }
            } catch (g) {
                throw console.error("THREE.WebGLRenderer: " + g.message), g
            }
            let We, Je, ge, ze, Ae, Fe, ut, T, _, F, k, $, H, ve, re, _e, xe, K, ue, be, Re, ie, De, b;

            function se() {
                We = new Al(R), We.init(), ie = new au(R, We), Je = new gl(R, We, e, ie), ge = new ru(R, We), Je.reverseDepthBuffer && d && ge.buffers.depth.setReversed(!0), ze = new bl(R), Ae = new Xc, Fe = new su(R, We, ge, Ae, Je, ie, ze), ut = new xl(M), T = new Tl(M), _ = new fa(R), De = new ml(R, _), F = new yl(R, _, ze, De), k = new wl(R, F, _, ze), ue = new Cl(R, Je, Fe), _e = new vl(Ae), $ = new Wc(M, ut, T, We, Je, De, _e), H = new fu(M, Ae), ve = new Yc, re = new Qc(We), K = new pl(M, ut, T, ge, k, m, l), xe = new nu(M, k, Je), b = new hu(R, ze, Je, ge), be = new _l(R, We, ze), Re = new Rl(R, We, ze), ze.programs = $.programs, M.capabilities = Je, M.extensions = We, M.properties = Ae, M.renderLists = ve, M.shadowMap = xe, M.state = ge, M.info = ze
            }
            se();
            const Z = new uu(M, R);
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
                return z
            }, this.setPixelRatio = function(g) {
                g !== void 0 && (z = g, this.setSize(V, ee, !1))
            }, this.getSize = function(g) {
                return g.set(V, ee)
            }, this.setSize = function(g, D, N = !0) {
                if (Z.isPresenting) {
                    console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                    return
                }
                V = g, ee = D, t.width = Math.floor(g * z), t.height = Math.floor(D * z), N === !0 && (t.style.width = g + "px", t.style.height = D + "px"), this.setViewport(0, 0, g, D)
            }, this.getDrawingBufferSize = function(g) {
                return g.set(V * z, ee * z).floor()
            }, this.setDrawingBufferSize = function(g, D, N) {
                V = g, ee = D, z = N, t.width = Math.floor(g * N), t.height = Math.floor(D * N), this.setViewport(0, 0, g, D)
            }, this.getCurrentViewport = function(g) {
                return g.copy(P)
            }, this.getViewport = function(g) {
                return g.copy(Te)
            }, this.setViewport = function(g, D, N, O) {
                g.isVector4 ? Te.set(g.x, g.y, g.z, g.w) : Te.set(g, D, N, O), ge.viewport(P.copy(Te).multiplyScalar(z).round())
            }, this.getScissor = function(g) {
                return g.copy(Ne)
            }, this.setScissor = function(g, D, N, O) {
                g.isVector4 ? Ne.set(g.x, g.y, g.z, g.w) : Ne.set(g, D, N, O), ge.scissor(q.copy(Ne).multiplyScalar(z).round())
            }, this.getScissorTest = function() {
                return je
            }, this.setScissorTest = function(g) {
                ge.setScissorTest(je = g)
            }, this.setOpaqueSort = function(g) {
                oe = g
            }, this.setTransparentSort = function(g) {
                fe = g
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
                            de = K.getClearAlpha(),
                            we = me.r,
                            Pe = me.g,
                            Ee = me.b;
                        ae ? (v[0] = we, v[1] = Pe, v[2] = Ee, v[3] = de, R.clearBufferuiv(R.COLOR, 0, v)) : (S[0] = we, S[1] = Pe, S[2] = Ee, S[3] = de, R.clearBufferiv(R.COLOR, 0, S))
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
                t.removeEventListener("webglcontextlost", he, !1), t.removeEventListener("webglcontextrestored", J, !1), t.removeEventListener("webglcontextcreationerror", Y, !1), K.dispose(), ve.dispose(), re.dispose(), Ae.dispose(), ut.dispose(), T.dispose(), k.dispose(), De.dispose(), b.dispose(), $.dispose(), Z.dispose(), Z.removeEventListener("sessionstart", Es), Z.removeEventListener("sessionend", Ts), pn.stop()
            };

            function he(g) {
                g.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), I = !0
            }

            function J() {
                console.log("THREE.WebGLRenderer: Context Restored."), I = !1;
                const g = ze.autoReset,
                    D = xe.enabled,
                    N = xe.autoUpdate,
                    O = xe.needsUpdate,
                    L = xe.type;
                se(), ze.autoReset = g, xe.enabled = D, xe.autoUpdate = N, xe.needsUpdate = O, xe.type = L
            }

            function Y(g) {
                console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", g.statusMessage)
            }

            function pe(g) {
                const D = g.target;
                D.removeEventListener("dispose", pe), Le(D)
            }

            function Le(g) {
                Qe(g), Ae.remove(g)
            }

            function Qe(g) {
                const D = Ae.get(g).programs;
                D !== void 0 && (D.forEach(function(N) {
                    $.releaseProgram(N)
                }), g.isShaderMaterial && $.releaseShaderCache(g))
            }
            this.renderBufferDirect = function(g, D, N, O, L, Q) {
                D === null && (D = tt);
                const ae = L.isMesh && L.matrixWorld.determinant() < 0,
                    me = Nu(g, D, N, O, L);
                ge.setMaterial(O, ae);
                let de = N.index,
                    we = 1;
                if (O.wireframe === !0) {
                    if (de = F.getWireframeAttribute(N), de === void 0) return;
                    we = 2
                }
                const Pe = N.drawRange,
                    Ee = N.attributes.position;
                let Be = Pe.start * we,
                    Ye = (Pe.start + Pe.count) * we;
                Q !== null && (Be = Math.max(Be, Q.start * we), Ye = Math.min(Ye, (Q.start + Q.count) * we)), de !== null ? (Be = Math.max(Be, 0), Ye = Math.min(Ye, de.count)) : Ee != null && (Be = Math.max(Be, 0), Ye = Math.min(Ye, Ee.count));
                const it = Ye - Be;
                if (it < 0 || it === 1 / 0) return;
                De.setup(L, O, me, N, de);
                let rt, He = be;
                if (de !== null && (rt = _.get(de), He = Re, He.setIndex(rt)), L.isMesh) O.wireframe === !0 ? (ge.setLineWidth(O.wireframeLinewidth * ke()), He.setMode(R.LINES)) : He.setMode(R.TRIANGLES);
                else if (L.isLine) {
                    let ye = O.linewidth;
                    ye === void 0 && (ye = 1), ge.setLineWidth(ye * ke()), L.isLineSegments ? He.setMode(R.LINES) : L.isLineLoop ? He.setMode(R.LINE_LOOP) : He.setMode(R.LINE_STRIP)
                } else L.isPoints ? He.setMode(R.POINTS) : L.isSprite && He.setMode(R.TRIANGLES);
                if (L.isBatchedMesh)
                    if (L._multiDrawInstances !== null) vn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), He.renderMultiDrawInstances(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount, L._multiDrawInstances);
                    else if (We.get("WEBGL_multi_draw")) He.renderMultiDraw(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount);
                else {
                    const ye = L._multiDrawStarts,
                        ft = L._multiDrawCounts,
                        Xe = L._multiDrawCount,
                        Ft = de ? _.get(de).bytesPerElement : 1,
                        Gn = Ae.get(O).currentProgram.getUniforms();
                    for (let At = 0; At < Xe; At++) Gn.setValue(R, "_gl_DrawID", At), He.render(ye[At] / Ft, ft[At])
                } else if (L.isInstancedMesh) He.renderInstances(Be, it, L.count);
                else if (N.isInstancedBufferGeometry) {
                    const ye = N._maxInstanceCount !== void 0 ? N._maxInstanceCount : 1 / 0,
                        ft = Math.min(N.instanceCount, ye);
                    He.renderInstances(Be, it, ft)
                } else He.render(Be, it)
            };

            function qe(g, D, N) {
                g.transparent === !0 && g.side === 2 && g.forceSinglePass === !1 ? (g.side = 1, g.needsUpdate = !0, Ci(g, D, N), g.side = 0, g.needsUpdate = !0, Ci(g, D, N), g.side = 2) : Ci(g, D, N)
            }
            this.compile = function(g, D, N = null) {
                N === null && (N = g), u = re.get(N), u.init(D), A.push(u), N.traverseVisible(function(L) {
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
                }), u = A.pop(), O
            }, this.compileAsync = function(g, D, N = null) {
                const O = this.compile(g, D, N);
                return new Promise(L => {
                    function Q() {
                        if (O.forEach(function(ae) {
                                Ae.get(ae).currentProgram.isReady() && O.delete(ae)
                            }), O.size === 0) {
                            L(g);
                            return
                        }
                        setTimeout(Q, 10)
                    }
                    We.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10)
                })
            };
            let Ut = null;

            function qt(g) {
                Ut && Ut(g)
            }

            function Es() {
                pn.stop()
            }

            function Ts() {
                pn.start()
            }
            const pn = new Xr;
            pn.setAnimationLoop(qt), typeof self < "u" && pn.setContext(self), this.setAnimationLoop = function(g) {
                Ut = g, Z.setAnimationLoop(g), g === null ? pn.stop() : pn.start()
            }, Z.addEventListener("sessionstart", Es), Z.addEventListener("sessionend", Ts), this.render = function(g, D) {
                if (D !== void 0 && D.isCamera !== !0) {
                    console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                    return
                }
                if (I === !0) return;
                if (g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === !0 && D.updateMatrixWorld(), Z.enabled === !0 && Z.isPresenting === !0 && (Z.cameraAutoUpdate === !0 && Z.updateCamera(D), D = Z.getCamera()), g.isScene === !0 && g.onBeforeRender(M, g, D, U), u = re.get(g, A.length), u.init(D), A.push(u), Me.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), X.setFromProjectionMatrix(Me), Se = this.localClippingEnabled, te = _e.init(this.clippingPlanes, Se), p = ve.get(g, y.length), p.init(), y.push(p), Z.enabled === !0 && Z.isPresenting === !0) {
                    const Q = M.xr.getDepthSensingMesh();
                    Q !== null && fr(Q, D, -1 / 0, M.sortObjects)
                }
                fr(g, D, 0, M.sortObjects), p.finish(), M.sortObjects === !0 && p.sort(oe, fe), nt = Z.enabled === !1 || Z.isPresenting === !1 || Z.hasDepthSensing() === !1, nt && K.addToRenderList(p, g), this.info.render.frame++, te === !0 && _e.beginShadows();
                const N = u.state.shadowsArray;
                xe.render(N, g, D), te === !0 && _e.endShadows(), this.info.autoReset === !0 && this.info.reset();
                const O = p.opaque,
                    L = p.transmissive;
                if (u.setupLights(), D.isArrayCamera) {
                    const Q = D.cameras;
                    if (L.length > 0)
                        for (let ae = 0, me = Q.length; ae < me; ae++) {
                            const de = Q[ae];
                            ys(O, L, g, de)
                        }
                    nt && K.render(g);
                    for (let ae = 0, me = Q.length; ae < me; ae++) {
                        const de = Q[ae];
                        As(p, g, de, de.viewport)
                    }
                } else L.length > 0 && ys(O, L, g, D), nt && K.render(g), As(p, g, D);
                U !== null && C === 0 && (Fe.updateMultisampleRenderTarget(U), Fe.updateRenderTargetMipmap(U)), g.isScene === !0 && g.onAfterRender(M, g, D), De.resetDefaultState(), E = -1, x = null, A.pop(), A.length > 0 ? (u = A[A.length - 1], te === !0 && _e.setGlobalState(M.clippingPlanes, u.state.camera)) : u = null, y.pop(), y.length > 0 ? p = y[y.length - 1] : p = null
            };

            function fr(g, D, N, O) {
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
                            const de = ae.groups;
                            for (let we = 0, Pe = de.length; we < Pe; we++) {
                                const Ee = de[we],
                                    Be = me[Ee.materialIndex];
                                Be && Be.visible && p.push(g, ae, Be, N, Ce.z, Ee)
                            }
                        } else me.visible && p.push(g, ae, me, N, Ce.z, null)
                    }
                }
                const Q = g.children;
                for (let ae = 0, me = Q.length; ae < me; ae++) fr(Q[ae], D, N, O)
            }

            function As(g, D, N, O) {
                const L = g.opaque,
                    Q = g.transmissive,
                    ae = g.transparent;
                u.setupLightsView(N), te === !0 && _e.setGlobalState(M.clippingPlanes, N), O && ge.viewport(P.copy(O)), L.length > 0 && bi(L, D, N), Q.length > 0 && bi(Q, D, N), ae.length > 0 && bi(ae, D, N), ge.buffers.depth.setTest(!0), ge.buffers.depth.setMask(!0), ge.buffers.color.setMask(!0), ge.setPolygonOffset(!1)
            }

            function ys(g, D, N, O) {
                if ((N.isScene === !0 ? N.overrideMaterial : null) !== null) return;
                u.state.transmissionRenderTarget[O.id] === void 0 && (u.state.transmissionRenderTarget[O.id] = new tn(1, 1, {
                    generateMipmaps: !0,
                    type: We.has("EXT_color_buffer_half_float") || We.has("EXT_color_buffer_float") ? 1016 : 1009,
                    minFilter: 1008,
                    samples: 4,
                    stencilBuffer: s,
                    resolveDepthBuffer: !1,
                    resolveStencilBuffer: !1,
                    colorSpace: Ge.workingColorSpace
                }));
                const Q = u.state.transmissionRenderTarget[O.id],
                    ae = O.viewport || P;
                Q.setSize(ae.z * M.transmissionResolutionScale, ae.w * M.transmissionResolutionScale);
                const me = M.getRenderTarget();
                M.setRenderTarget(Q), M.getClearColor(W), j = M.getClearAlpha(), j < 1 && M.setClearColor(16777215, .5), M.clear(), nt && K.render(N);
                const de = M.toneMapping;
                M.toneMapping = 0;
                const we = O.viewport;
                if (O.viewport !== void 0 && (O.viewport = void 0), u.setupLightsView(O), te === !0 && _e.setGlobalState(M.clippingPlanes, O), bi(g, N, O), Fe.updateMultisampleRenderTarget(Q), Fe.updateRenderTargetMipmap(Q), We.has("WEBGL_multisampled_render_to_texture") === !1) {
                    let Pe = !1;
                    for (let Ee = 0, Be = D.length; Ee < Be; Ee++) {
                        const Ye = D[Ee],
                            it = Ye.object,
                            rt = Ye.geometry,
                            He = Ye.material,
                            ye = Ye.group;
                        if (He.side === 2 && it.layers.test(O.layers)) {
                            const ft = He.side;
                            He.side = 1, He.needsUpdate = !0, Rs(it, N, O, rt, He, ye), He.side = ft, He.needsUpdate = !0, Pe = !0
                        }
                    }
                    Pe === !0 && (Fe.updateMultisampleRenderTarget(Q), Fe.updateRenderTargetMipmap(Q))
                }
                M.setRenderTarget(me), M.setClearColor(W, j), we !== void 0 && (O.viewport = we), M.toneMapping = de
            }

            function bi(g, D, N) {
                const O = D.isScene === !0 ? D.overrideMaterial : null;
                for (let L = 0, Q = g.length; L < Q; L++) {
                    const ae = g[L],
                        me = ae.object,
                        de = ae.geometry,
                        we = ae.group;
                    let Pe = ae.material;
                    Pe.allowOverride === !0 && O !== null && (Pe = O), me.layers.test(N.layers) && Rs(me, D, N, de, Pe, we)
                }
            }

            function Rs(g, D, N, O, L, Q) {
                g.onBeforeRender(M, D, N, O, L, Q), g.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, g.matrixWorld), g.normalMatrix.getNormalMatrix(g.modelViewMatrix), L.onBeforeRender(M, D, N, O, g, Q), L.transparent === !0 && L.side === 2 && L.forceSinglePass === !1 ? (L.side = 1, L.needsUpdate = !0, M.renderBufferDirect(N, D, O, L, g, Q), L.side = 0, L.needsUpdate = !0, M.renderBufferDirect(N, D, O, L, g, Q), L.side = 2) : M.renderBufferDirect(N, D, O, L, g, Q), g.onAfterRender(M, D, N, O, L, Q)
            }

            function Ci(g, D, N) {
                D.isScene !== !0 && (D = tt);
                const O = Ae.get(g),
                    L = u.state.lights,
                    Q = u.state.shadowsArray,
                    ae = L.state.version,
                    me = $.getParameters(g, L.state, Q, D, N),
                    de = $.getProgramCacheKey(me);
                let we = O.programs;
                O.environment = g.isMeshStandardMaterial ? D.environment : null, O.fog = D.fog, O.envMap = (g.isMeshStandardMaterial ? T : ut).get(g.envMap || O.environment), O.envMapRotation = O.environment !== null && g.envMap === null ? D.environmentRotation : g.envMapRotation, we === void 0 && (g.addEventListener("dispose", pe), we = new Map, O.programs = we);
                let Pe = we.get(de);
                if (Pe !== void 0) {
                    if (O.currentProgram === Pe && O.lightsStateVersion === ae) return Cs(g, me), Pe
                } else me.uniforms = $.getUniforms(g), g.onBeforeCompile(me, M), Pe = $.acquireProgram(me, de), we.set(de, Pe), O.uniforms = me.uniforms;
                const Ee = O.uniforms;
                return (!g.isShaderMaterial && !g.isRawShaderMaterial || g.clipping === !0) && (Ee.clippingPlanes = _e.uniform), Cs(g, me), O.needsLights = Bu(g), O.lightsStateVersion = ae, O.needsLights && (Ee.ambientLightColor.value = L.state.ambient, Ee.lightProbe.value = L.state.probe, Ee.directionalLights.value = L.state.directional, Ee.directionalLightShadows.value = L.state.directionalShadow, Ee.spotLights.value = L.state.spot, Ee.spotLightShadows.value = L.state.spotShadow, Ee.rectAreaLights.value = L.state.rectArea, Ee.ltc_1.value = L.state.rectAreaLTC1, Ee.ltc_2.value = L.state.rectAreaLTC2, Ee.pointLights.value = L.state.point, Ee.pointLightShadows.value = L.state.pointShadow, Ee.hemisphereLights.value = L.state.hemi, Ee.directionalShadowMap.value = L.state.directionalShadowMap, Ee.directionalShadowMatrix.value = L.state.directionalShadowMatrix, Ee.spotShadowMap.value = L.state.spotShadowMap, Ee.spotLightMatrix.value = L.state.spotLightMatrix, Ee.spotLightMap.value = L.state.spotLightMap, Ee.pointShadowMap.value = L.state.pointShadowMap, Ee.pointShadowMatrix.value = L.state.pointShadowMatrix), O.currentProgram = Pe, O.uniformsList = null, Pe
            }

            function bs(g) {
                if (g.uniformsList === null) {
                    const D = g.currentProgram.getUniforms();
                    g.uniformsList = Ti.seqWithValue(D.seq, g.uniforms)
                }
                return g.uniformsList
            }

            function Cs(g, D) {
                const N = Ae.get(g);
                N.outputColorSpace = D.outputColorSpace, N.batching = D.batching, N.batchingColor = D.batchingColor, N.instancing = D.instancing, N.instancingColor = D.instancingColor, N.instancingMorph = D.instancingMorph, N.skinning = D.skinning, N.morphTargets = D.morphTargets, N.morphNormals = D.morphNormals, N.morphColors = D.morphColors, N.morphTargetsCount = D.morphTargetsCount, N.numClippingPlanes = D.numClippingPlanes, N.numIntersection = D.numClipIntersection, N.vertexAlphas = D.vertexAlphas, N.vertexTangents = D.vertexTangents, N.toneMapping = D.toneMapping
            }

            function Nu(g, D, N, O, L) {
                D.isScene !== !0 && (D = tt), Fe.resetTextureUnits();
                const Q = D.fog,
                    ae = O.isMeshStandardMaterial ? D.environment : null,
                    me = U === null ? M.outputColorSpace : U.isXRRenderTarget === !0 ? U.texture.colorSpace : _n,
                    de = (O.isMeshStandardMaterial ? T : ut).get(O.envMap || ae),
                    we = O.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4,
                    Pe = !!N.attributes.tangent && (!!O.normalMap || O.anisotropy > 0),
                    Ee = !!N.morphAttributes.position,
                    Be = !!N.morphAttributes.normal,
                    Ye = !!N.morphAttributes.color;
                let it = 0;
                O.toneMapped && (U === null || U.isXRRenderTarget === !0) && (it = M.toneMapping);
                const rt = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color,
                    He = rt !== void 0 ? rt.length : 0,
                    ye = Ae.get(O),
                    ft = u.state.lights;
                if (te === !0 && (Se === !0 || g !== x)) {
                    const gt = g === x && O.id === E;
                    _e.setState(O, g, gt)
                }
                let Xe = !1;
                O.version === ye.__version ? (ye.needsLights && ye.lightsStateVersion !== ft.state.version || ye.outputColorSpace !== me || L.isBatchedMesh && ye.batching === !1 || !L.isBatchedMesh && ye.batching === !0 || L.isBatchedMesh && ye.batchingColor === !0 && L.colorTexture === null || L.isBatchedMesh && ye.batchingColor === !1 && L.colorTexture !== null || L.isInstancedMesh && ye.instancing === !1 || !L.isInstancedMesh && ye.instancing === !0 || L.isSkinnedMesh && ye.skinning === !1 || !L.isSkinnedMesh && ye.skinning === !0 || L.isInstancedMesh && ye.instancingColor === !0 && L.instanceColor === null || L.isInstancedMesh && ye.instancingColor === !1 && L.instanceColor !== null || L.isInstancedMesh && ye.instancingMorph === !0 && L.morphTexture === null || L.isInstancedMesh && ye.instancingMorph === !1 && L.morphTexture !== null || ye.envMap !== de || O.fog === !0 && ye.fog !== Q || ye.numClippingPlanes !== void 0 && (ye.numClippingPlanes !== _e.numPlanes || ye.numIntersection !== _e.numIntersection) || ye.vertexAlphas !== we || ye.vertexTangents !== Pe || ye.morphTargets !== Ee || ye.morphNormals !== Be || ye.morphColors !== Ye || ye.toneMapping !== it || ye.morphTargetsCount !== He) && (Xe = !0) : (Xe = !0, ye.__version = O.version);
                let Ft = ye.currentProgram;
                Xe === !0 && (Ft = Ci(O, D, L));
                let Gn = !1,
                    At = !1,
                    Qn = !1;
                const et = Ft.getUniforms(),
                    bt = ye.uniforms;
                if (ge.useProgram(Ft.program) && (Gn = !0, At = !0, Qn = !0), O.id !== E && (E = O.id, At = !0), Gn || x !== g) {
                    ge.buffers.depth.getReversed() ? (le.copy(g.projectionMatrix), Ls(le), Is(le), et.setValue(R, "projectionMatrix", le)) : et.setValue(R, "projectionMatrix", g.projectionMatrix), et.setValue(R, "viewMatrix", g.matrixWorldInverse);
                    const St = et.map.cameraPosition;
                    St !== void 0 && St.setValue(R, Ve.setFromMatrixPosition(g.matrixWorld)), Je.logarithmicDepthBuffer && et.setValue(R, "logDepthBufFC", 2 / (Math.log(g.far + 1) / Math.LN2)), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && et.setValue(R, "isOrthographic", g.isOrthographicCamera === !0), x !== g && (x = g, At = !0, Qn = !0)
                }
                if (L.isSkinnedMesh) {
                    et.setOptional(R, L, "bindMatrix"), et.setOptional(R, L, "bindMatrixInverse");
                    const gt = L.skeleton;
                    gt && (gt.boneTexture === null && gt.computeBoneTexture(), et.setValue(R, "boneTexture", gt.boneTexture, Fe))
                }
                L.isBatchedMesh && (et.setOptional(R, L, "batchingTexture"), et.setValue(R, "batchingTexture", L._matricesTexture, Fe), et.setOptional(R, L, "batchingIdTexture"), et.setValue(R, "batchingIdTexture", L._indirectTexture, Fe), et.setOptional(R, L, "batchingColorTexture"), L._colorsTexture !== null && et.setValue(R, "batchingColorTexture", L._colorsTexture, Fe));
                const Ct = N.morphAttributes;
                if ((Ct.position !== void 0 || Ct.normal !== void 0 || Ct.color !== void 0) && ue.update(L, N, Ft), (At || ye.receiveShadow !== L.receiveShadow) && (ye.receiveShadow = L.receiveShadow, et.setValue(R, "receiveShadow", L.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (bt.envMap.value = de, bt.flipEnvMap.value = de.isCubeTexture && de.isRenderTargetTexture === !1 ? -1 : 1), O.isMeshStandardMaterial && O.envMap === null && D.environment !== null && (bt.envMapIntensity.value = D.environmentIntensity), At && (et.setValue(R, "toneMappingExposure", M.toneMappingExposure), ye.needsLights && Ou(bt, Qn), Q && O.fog === !0 && H.refreshFogUniforms(bt, Q), H.refreshMaterialUniforms(bt, O, z, ee, u.state.transmissionRenderTarget[g.id]), Ti.upload(R, bs(ye), bt, Fe)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (Ti.upload(R, bs(ye), bt, Fe), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && et.setValue(R, "center", L.center), et.setValue(R, "modelViewMatrix", L.modelViewMatrix), et.setValue(R, "normalMatrix", L.normalMatrix), et.setValue(R, "modelMatrix", L.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) {
                    const gt = O.uniformsGroups;
                    for (let St = 0, hr = gt.length; St < hr; St++) {
                        const mn = gt[St];
                        b.update(mn, Ft), b.bind(mn, Ft)
                    }
                }
                return Ft
            }

            function Ou(g, D) {
                g.ambientLightColor.needsUpdate = D, g.lightProbe.needsUpdate = D, g.directionalLights.needsUpdate = D, g.directionalLightShadows.needsUpdate = D, g.pointLights.needsUpdate = D, g.pointLightShadows.needsUpdate = D, g.spotLights.needsUpdate = D, g.spotLightShadows.needsUpdate = D, g.rectAreaLights.needsUpdate = D, g.hemisphereLights.needsUpdate = D
            }

            function Bu(g) {
                return g.isMeshLambertMaterial || g.isMeshToonMaterial || g.isMeshPhongMaterial || g.isMeshStandardMaterial || g.isShadowMaterial || g.isShaderMaterial && g.lights === !0
            }
            this.getActiveCubeFace = function() {
                return w
            }, this.getActiveMipmapLevel = function() {
                return C
            }, this.getRenderTarget = function() {
                return U
            }, this.setRenderTargetTextures = function(g, D, N) {
                const O = Ae.get(g);
                O.__autoAllocateDepthBuffer = g.resolveDepthBuffer === !1, O.__autoAllocateDepthBuffer === !1 && (O.__useRenderToTexture = !1), Ae.get(g.texture).__webglTexture = D, Ae.get(g.depthTexture).__webglTexture = O.__autoAllocateDepthBuffer ? void 0 : N, O.__hasExternalTextures = !0
            }, this.setRenderTargetFramebuffer = function(g, D) {
                const N = Ae.get(g);
                N.__webglFramebuffer = D, N.__useDefaultFramebuffer = D === void 0
            };
            const Gu = R.createFramebuffer();
            this.setRenderTarget = function(g, D = 0, N = 0) {
                U = g, w = D, C = N;
                let O = !0,
                    L = null,
                    Q = !1,
                    ae = !1;
                if (g) {
                    const de = Ae.get(g);
                    if (de.__useDefaultFramebuffer !== void 0) ge.bindFramebuffer(R.FRAMEBUFFER, null), O = !1;
                    else if (de.__webglFramebuffer === void 0) Fe.setupRenderTarget(g);
                    else if (de.__hasExternalTextures) Fe.rebindTextures(g, Ae.get(g.texture).__webglTexture, Ae.get(g.depthTexture).__webglTexture);
                    else if (g.depthBuffer) {
                        const Ee = g.depthTexture;
                        if (de.__boundDepthTexture !== Ee) {
                            if (Ee !== null && Ae.has(Ee) && (g.width !== Ee.image.width || g.height !== Ee.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
                            Fe.setupDepthRenderbuffer(g)
                        }
                    }
                    const we = g.texture;
                    (we.isData3DTexture || we.isDataArrayTexture || we.isCompressedArrayTexture) && (ae = !0);
                    const Pe = Ae.get(g).__webglFramebuffer;
                    g.isWebGLCubeRenderTarget ? (Array.isArray(Pe[D]) ? L = Pe[D][N] : L = Pe[D], Q = !0) : g.samples > 0 && Fe.useMultisampledRTT(g) === !1 ? L = Ae.get(g).__webglMultisampledFramebuffer : Array.isArray(Pe) ? L = Pe[N] : L = Pe, P.copy(g.viewport), q.copy(g.scissor), G = g.scissorTest
                } else P.copy(Te).multiplyScalar(z).floor(), q.copy(Ne).multiplyScalar(z).floor(), G = je;
                if (N !== 0 && (L = Gu), ge.bindFramebuffer(R.FRAMEBUFFER, L) && O && ge.drawBuffers(g, L), ge.viewport(P), ge.scissor(q), ge.setScissorTest(G), Q) {
                    const de = Ae.get(g.texture);
                    R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + D, de.__webglTexture, N)
                } else if (ae) {
                    const de = Ae.get(g.texture),
                        we = D;
                    R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, de.__webglTexture, N, we)
                } else if (g !== null && N !== 0) {
                    const de = Ae.get(g.texture);
                    R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, de.__webglTexture, N)
                }
                E = -1
            }, this.readRenderTargetPixels = function(g, D, N, O, L, Q, ae, me = 0) {
                if (!(g && g.isWebGLRenderTarget)) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                    return
                }
                let de = Ae.get(g).__webglFramebuffer;
                if (g.isWebGLCubeRenderTarget && ae !== void 0 && (de = de[ae]), de) {
                    ge.bindFramebuffer(R.FRAMEBUFFER, de);
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
                        const we = U !== null ? Ae.get(U).__webglFramebuffer : null;
                        ge.bindFramebuffer(R.FRAMEBUFFER, we)
                    }
                }
            }, this.readRenderTargetPixelsAsync = async function(g, D, N, O, L, Q, ae, me = 0) {
                if (!(g && g.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                let de = Ae.get(g).__webglFramebuffer;
                if (g.isWebGLCubeRenderTarget && ae !== void 0 && (de = de[ae]), de)
                    if (D >= 0 && D <= g.width - O && N >= 0 && N <= g.height - L) {
                        ge.bindFramebuffer(R.FRAMEBUFFER, de);
                        const we = g.textures[me],
                            Pe = we.format,
                            Ee = we.type;
                        if (!Je.textureFormatReadable(Pe)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
                        if (!Je.textureTypeReadable(Ee)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
                        const Be = R.createBuffer();
                        R.bindBuffer(R.PIXEL_PACK_BUFFER, Be), R.bufferData(R.PIXEL_PACK_BUFFER, Q.byteLength, R.STREAM_READ), g.textures.length > 1 && R.readBuffer(R.COLOR_ATTACHMENT0 + me), R.readPixels(D, N, O, L, ie.convert(Pe), ie.convert(Ee), 0);
                        const Ye = U !== null ? Ae.get(U).__webglFramebuffer : null;
                        ge.bindFramebuffer(R.FRAMEBUFFER, Ye);
                        const it = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
                        return R.flush(), await Ds(R, it, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, Be), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, Q), R.deleteBuffer(Be), R.deleteSync(it), Q
                    } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")
            }, this.copyFramebufferToTexture = function(g, D = null, N = 0) {
                const O = Math.pow(2, -N),
                    L = Math.floor(g.image.width * O),
                    Q = Math.floor(g.image.height * O),
                    ae = D !== null ? D.x : 0,
                    me = D !== null ? D.y : 0;
                Fe.setTexture2D(g, 0), R.copyTexSubImage2D(R.TEXTURE_2D, N, 0, 0, ae, me, L, Q), ge.unbindTexture()
            };
            const zu = R.createFramebuffer(),
                Hu = R.createFramebuffer();
            this.copyTextureToTexture = function(g, D, N = null, O = null, L = 0, Q = null) {
                Q === null && (L !== 0 ? (vn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), Q = L, L = 0) : Q = 0);
                let ae, me, de, we, Pe, Ee, Be, Ye, it;
                const rt = g.isCompressedTexture ? g.mipmaps[Q] : g.image;
                if (N !== null) ae = N.max.x - N.min.x, me = N.max.y - N.min.y, de = N.isBox3 ? N.max.z - N.min.z : 1, we = N.min.x, Pe = N.min.y, Ee = N.isBox3 ? N.min.z : 0;
                else {
                    const Ct = Math.pow(2, -L);
                    ae = Math.floor(rt.width * Ct), me = Math.floor(rt.height * Ct), g.isDataArrayTexture ? de = rt.depth : g.isData3DTexture ? de = Math.floor(rt.depth * Ct) : de = 1, we = 0, Pe = 0, Ee = 0
                }
                O !== null ? (Be = O.x, Ye = O.y, it = O.z) : (Be = 0, Ye = 0, it = 0);
                const He = ie.convert(D.format),
                    ye = ie.convert(D.type);
                let ft;
                D.isData3DTexture ? (Fe.setTexture3D(D, 0), ft = R.TEXTURE_3D) : D.isDataArrayTexture || D.isCompressedArrayTexture ? (Fe.setTexture2DArray(D, 0), ft = R.TEXTURE_2D_ARRAY) : (Fe.setTexture2D(D, 0), ft = R.TEXTURE_2D), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, D.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, D.unpackAlignment);
                const Xe = R.getParameter(R.UNPACK_ROW_LENGTH),
                    Ft = R.getParameter(R.UNPACK_IMAGE_HEIGHT),
                    Gn = R.getParameter(R.UNPACK_SKIP_PIXELS),
                    At = R.getParameter(R.UNPACK_SKIP_ROWS),
                    Qn = R.getParameter(R.UNPACK_SKIP_IMAGES);
                R.pixelStorei(R.UNPACK_ROW_LENGTH, rt.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, rt.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, we), R.pixelStorei(R.UNPACK_SKIP_ROWS, Pe), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Ee);
                const et = g.isDataArrayTexture || g.isData3DTexture,
                    bt = D.isDataArrayTexture || D.isData3DTexture;
                if (g.isDepthTexture) {
                    const Ct = Ae.get(g),
                        gt = Ae.get(D),
                        St = Ae.get(Ct.__renderTarget),
                        hr = Ae.get(gt.__renderTarget);
                    ge.bindFramebuffer(R.READ_FRAMEBUFFER, St.__webglFramebuffer), ge.bindFramebuffer(R.DRAW_FRAMEBUFFER, hr.__webglFramebuffer);
                    for (let mn = 0; mn < de; mn++) et && (R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, Ae.get(g).__webglTexture, L, Ee + mn), R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, Ae.get(D).__webglTexture, Q, it + mn)), R.blitFramebuffer(we, Pe, ae, me, Be, Ye, ae, me, R.DEPTH_BUFFER_BIT, R.NEAREST);
                    ge.bindFramebuffer(R.READ_FRAMEBUFFER, null), ge.bindFramebuffer(R.DRAW_FRAMEBUFFER, null)
                } else if (L !== 0 || g.isRenderTargetTexture || Ae.has(g)) {
                    const Ct = Ae.get(g),
                        gt = Ae.get(D);
                    ge.bindFramebuffer(R.READ_FRAMEBUFFER, zu), ge.bindFramebuffer(R.DRAW_FRAMEBUFFER, Hu);
                    for (let St = 0; St < de; St++) et ? R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, Ct.__webglTexture, L, Ee + St) : R.framebufferTexture2D(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, Ct.__webglTexture, L), bt ? R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, gt.__webglTexture, Q, it + St) : R.framebufferTexture2D(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, gt.__webglTexture, Q), L !== 0 ? R.blitFramebuffer(we, Pe, ae, me, Be, Ye, ae, me, R.COLOR_BUFFER_BIT, R.NEAREST) : bt ? R.copyTexSubImage3D(ft, Q, Be, Ye, it + St, we, Pe, ae, me) : R.copyTexSubImage2D(ft, Q, Be, Ye, we, Pe, ae, me);
                    ge.bindFramebuffer(R.READ_FRAMEBUFFER, null), ge.bindFramebuffer(R.DRAW_FRAMEBUFFER, null)
                } else bt ? g.isDataTexture || g.isData3DTexture ? R.texSubImage3D(ft, Q, Be, Ye, it, ae, me, de, He, ye, rt.data) : D.isCompressedArrayTexture ? R.compressedTexSubImage3D(ft, Q, Be, Ye, it, ae, me, de, He, rt.data) : R.texSubImage3D(ft, Q, Be, Ye, it, ae, me, de, He, ye, rt) : g.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, Q, Be, Ye, ae, me, He, ye, rt.data) : g.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, Q, Be, Ye, rt.width, rt.height, He, rt.data) : R.texSubImage2D(R.TEXTURE_2D, Q, Be, Ye, ae, me, He, ye, rt);
                R.pixelStorei(R.UNPACK_ROW_LENGTH, Xe), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, Ft), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Gn), R.pixelStorei(R.UNPACK_SKIP_ROWS, At), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Qn), Q === 0 && D.generateMipmaps && R.generateMipmap(ft), ge.unbindTexture()
            }, this.copyTextureToTexture3D = function(g, D, N = null, O = null, L = 0) {
                return vn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(g, D, N, O, L)
            }, this.initRenderTarget = function(g) {
                Ae.get(g).__webglFramebuffer === void 0 && Fe.setupRenderTarget(g)
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
            t.drawingBufferColorSpace = Ge._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ge._getUnpackColorSpace()
        }
    }
    const mu = `
    
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
        _u = `

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
        gu = `
    varying mat4 csm_internal_vModelViewMatrix;
`,
        vu = `
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,
        xu = `
    varying mat4 csm_internal_vModelViewMatrix;
`,
        Su = `
    
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
        Mu = {
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
        Eu = {
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
        Tu = {
            clearcoat: [ce.clearcoat, ce.clearcoatNormal, ce.clearcoatRoughness],
            transmission: [ce.transmission],
            iridescence: [ce.iridescence]
        };

    function Au(i) {
        let e = 0;
        for (let n = 0; n < i.length; n++) e = i.charCodeAt(n) + (e << 6) + (e << 16) - e;
        const t = e >>> 0;
        return String(t)
    }

    function yu(i) {
        try {
            new i
        } catch (e) {
            if (e.message.indexOf("is not a constructor") >= 0) return !1
        }
        return !0
    }

    function Ss(i) {
        return i.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "")
    }
    class Ru extends Yn {
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
            if (yu(e)) {
                const d = Object.keys(o).length === 0;
                l = new e(d ? void 0 : o)
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
            const f = { ...c.uniforms || {},
                ...r || {}
            };
            c.uniforms = this.uniforms = f, c.vertexShader = this.vertexShader = t || "", c.fragmentShader = this.fragmentShader = n || "", c.update({
                fragmentShader: c.fragmentShader,
                vertexShader: c.vertexShader,
                uniforms: c.uniforms,
                patchMap: s,
                cacheKey: a
            }), Object.assign(this, c);
            const h = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(c));
            for (const d in h) {
                const m = h[d];
                (m.get || m.set) && Object.defineProperty(this, d, m)
            }
            return Object.defineProperty(this, "type", {
                get() {
                    return l.type
                },
                set(d) {
                    l.type = d
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
            const a = Ss(t || ""),
                o = Ss(e || ""),
                l = this;
            n && (l.uniforms = n), t && (l.vertexShader = t), e && (l.fragmentShader = e), Object.entries(Tu).forEach(([d, m]) => {
                for (const v in m) {
                    const S = m[v];
                    (o && o.includes(S) || a && a.includes(S)) && (l[d] || (l[d] = 1))
                }
            });
            const c = l.__csm.prevOnBeforeCompile,
                f = (d, m, v) => {
                    let S, p = "";
                    if (m) {
                        const u = m.search(/void\s+main\s*\(\s*\)\s*{/);
                        if (u !== -1) {
                            p = m.slice(0, u);
                            let y = 0,
                                A = -1;
                            for (let M = u; M < m.length; M++)
                                if (m[M] === "{" && y++, m[M] === "}" && (y--, y === 0)) {
                                    A = M;
                                    break
                                }
                            if (A !== -1) {
                                const M = m.slice(u, A + 1);
                                S = M.slice(M.indexOf("{") + 1, -1)
                            }
                        } else p = m
                    }
                    if (v && m && m.includes(ce.fragColor) && S && (S = `csm_UnlitFac = 1.0;
` + S), d.includes("//~CSM_DEFAULTS")) {
                        d = d.replace("void main() {", `
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          ${p}
          
          void main() {
          `);
                        const u = d.lastIndexOf("//~CSM_MAIN_END");
                        if (u !== -1) {
                            const y = `
            ${S?`${S}`:""}
            //~CSM_MAIN_END
          `;
                            d = d.slice(0, u) + y + d.slice(u)
                        }
                    } else {
                        const u = /void\s*main\s*\(\s*\)\s*{/gm;
                        d = d.replace(u, `
          // THREE-CustomShaderMaterial by Faraz Shaikh: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
  
          //~CSM_DEFAULTS
          ${v?xu:gu}
          ${mu}
  
          ${p}
          
          void main() {
            {
              ${_u}
            }
            ${v?Su:vu}

            ${S?`${S}`:""}
            //~CSM_MAIN_END
          `)
                    }
                    return d
                };
            l.onBeforeCompile = (d, m) => {
                c ? .(d, m);
                const v = s || {},
                    S = l.type,
                    p = S ? `#define IS_${S.toUpperCase()};
` : `#define IS_UNKNOWN;
`;
                d.vertexShader = p + `#define IS_VERTEX
` + d.vertexShader, d.fragmentShader = p + `#define IS_FRAGMENT
` + d.fragmentShader;
                const u = y => {
                    for (const A in y) {
                        const M = A === "*" || a && a.includes(A);
                        if (A === "*" || o && o.includes(A) || M) {
                            const I = Mu[A];
                            if (I && I !== "*" && (Array.isArray(I) ? !I.includes(S) : I !== S)) {
                                console.error(`CustomShaderMaterial: ${A} is not available in ${S}. Shader cannot compile.`);
                                return
                            }
                            const w = y[A];
                            for (const C in w) {
                                const U = w[C];
                                if (typeof U == "object") {
                                    const E = U.type,
                                        x = U.value;
                                    E === "fs" ? d.fragmentShader = d.fragmentShader.replace(C, x) : E === "vs" && (d.vertexShader = d.vertexShader.replace(C, x))
                                } else U && (d.vertexShader = d.vertexShader.replace(C, U), d.fragmentShader = d.fragmentShader.replace(C, U))
                            }
                        }
                    }
                };
                u(Eu), u(v), d.vertexShader = f(d.vertexShader, a, !1), d.fragmentShader = f(d.fragmentShader, o, !0), n && (d.uniforms = { ...d.uniforms,
                    ...l.uniforms
                }), l.uniforms = d.uniforms
            };
            const h = l.customProgramCacheKey;
            l.customProgramCacheKey = () => (r ? .() || Au((a || "") + (o || ""))) + h ? .call(l), l.needsUpdate = !0
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
    var bu = `uniform float u_Time;
uniform float u_Width;
uniform float u_Height;

// Perm texture texel-size
#define PERM_TEX_UNIT 1.0/256.0

// Half perm texture texel-size
#define PERM_TEX_UNIT_HALF 0.5/256.0

// Grain amount
#define GRAIN_AMOUNT 0.05

// Colored noise?
#define COLORED true

#define COLOR_AMOUNT 0.6

#define GRAIN_SIZE 1.6

#define LUM_AMOUNT 1.0

vec4 rnm(in vec2 tc) {
  float noise = sin(dot(tc + vec2(u_Time, u_Time), vec2(12.9898, 78.233))) * 43758.5453;

  float noiseR = fract(noise) * 2.0 - 1.0;
  float noiseG = fract(noise * 1.2154) * 2.0 - 1.0;
  float noiseB = fract(noise * 1.3453) * 2.0 - 1.0;
  float noiseA = fract(noise * 1.3647) * 2.0 - 1.0;

  return vec4(noiseR, noiseG, noiseB, noiseA);
}

float fade(in float t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float pnoise3D(in vec3 p) {
  vec3 pi = PERM_TEX_UNIT * floor(p) + PERM_TEX_UNIT_HALF; // Integer part, scaled so +1 moves PERM_TEX_UNIT texel
  // and offset 1/2 texel to sample texel centers
  vec3 pf = fract(p); // Fractional part for interpolation

	// Noise contributions from (x=0, y=0), z=0 and z=1
	float perm00 = rnm(pi.xy).a ;
	vec3  grad000 = rnm(vec2(perm00, pi.z)).rgb * 4.0 - 1.0;
	float n000 = dot(grad000, pf);
	vec3  grad001 = rnm(vec2(perm00, pi.z + PERM_TEX_UNIT)).rgb * 4.0 - 1.0;
	float n001 = dot(grad001, pf - vec3(0.0, 0.0, 1.0));

	// Noise contributions from (x=0, y=1), z=0 and z=1
	float perm01 = rnm(pi.xy + vec2(0.0, PERM_TEX_UNIT)).a ;
	vec3  grad010 = rnm(vec2(perm01, pi.z)).rgb * 4.0 - 1.0;
	float n010 = dot(grad010, pf - vec3(0.0, 1.0, 0.0));
	vec3  grad011 = rnm(vec2(perm01, pi.z + PERM_TEX_UNIT)).rgb * 4.0 - 1.0;
	float n011 = dot(grad011, pf - vec3(0.0, 1.0, 1.0));

	// Noise contributions from (x=1, y=0), z=0 and z=1
	float perm10 = rnm(pi.xy + vec2(PERM_TEX_UNIT, 0.0)).a ;
	vec3  grad100 = rnm(vec2(perm10, pi.z)).rgb * 4.0 - 1.0;
	float n100 = dot(grad100, pf - vec3(1.0, 0.0, 0.0));
	vec3  grad101 = rnm(vec2(perm10, pi.z + PERM_TEX_UNIT)).rgb * 4.0 - 1.0;
	float n101 = dot(grad101, pf - vec3(1.0, 0.0, 1.0));

	// Noise contributions from (x=1, y=1), z=0 and z=1
	float perm11 = rnm(pi.xy + vec2(PERM_TEX_UNIT, PERM_TEX_UNIT)).a ;
	vec3  grad110 = rnm(vec2(perm11, pi.z)).rgb * 4.0 - 1.0;
	float n110 = dot(grad110, pf - vec3(1.0, 1.0, 0.0));
	vec3  grad111 = rnm(vec2(perm11, pi.z + PERM_TEX_UNIT)).rgb * 4.0 - 1.0;
	float n111 = dot(grad111, pf - vec3(1.0, 1.0, 1.0));

	// Blend contributions along x
	vec4 n_x = mix(vec4(n000, n001, n010, n011), vec4(n100, n101, n110, n111), fade(pf.x));

	// Blend contributions along y
	vec2 n_xy = mix(n_x.xy, n_x.zw, fade(pf.y));

	// Blend contributions along z
	float n_xyz = mix(n_xy.x, n_xy.y, fade(pf.z));

	// We're done, return the final noise value.
	return n_xyz;
}

vec2 coordRot(in vec2 tc, in float angle) {
	float aspect = u_Width / u_Height;
	float rotX = ((tc.x * 2.0 - 1.0) * aspect * cos(angle)) - ((tc.y * 2.0 - 1.0) * sin(angle));
	float rotY = ((tc.y * 2.0 - 1.0) * cos(angle)) + ((tc.x * 2.0 - 1.0) * aspect * sin(angle));
	rotX = ((rotX / aspect) * 0.5 + 0.5);
	rotY = rotY * 0.5 + 0.5;
	return vec2(rotX, rotY);
}

void main() {
	vec2 texCoord = gl_FragCoord.xy / vec2(u_Width, u_Height);

	vec3 rotOffset = vec3(1.425,3.892,5.835); //rotation offset values
	vec2 rotCoordsR = coordRot(texCoord, u_Time + rotOffset.x);
	vec3 noise = vec3(pnoise3D(vec3(rotCoordsR*vec2(u_Width/GRAIN_SIZE,u_Height/GRAIN_SIZE),0.0)));

	if (COLORED) {
		vec2 rotCoordsG = coordRot(texCoord, u_Time + rotOffset.y);
		vec2 rotCoordsB = coordRot(texCoord, u_Time + rotOffset.z);
		noise.g = mix(noise.r,pnoise3D(vec3(rotCoordsG*vec2(u_Width/GRAIN_SIZE,u_Height/GRAIN_SIZE),1.0)),COLOR_AMOUNT);
		noise.b = mix(noise.r,pnoise3D(vec3(rotCoordsB*vec2(u_Width/GRAIN_SIZE,u_Height/GRAIN_SIZE),2.0)),COLOR_AMOUNT);
	}

	vec3 col = vec3(0.04);

	//noisiness response curve based on scene luminance
	vec3 lumcoeff = vec3(0.299,0.587,0.114);
	float luminance = mix(0.0,dot(col, lumcoeff), LUM_AMOUNT);
	float lum = smoothstep(0.2,0.0,luminance);
	lum += luminance;

	noise = mix(noise,vec3(0.0),pow(lum,4.0));
	col = noise*GRAIN_AMOUNT;

	csm_FragColor = vec4(col, col.r);
}
`;
    let yi, Nn, Ri, Jn, On, Bn, Ms = 0;
    self.addEventListener("message", ({
        data: i
    }) => {
        i.init && Cu(i.canvas, i.width, i.height)
    }, {
        once: !0
    }), self.addEventListener("message", ({
        data: i
    }) => {
        i.resize && Iu(i.width, i.height), i.dpr && Uu(i.dpr), i.update && Lu(i.tick)
    });

    function Cu(i, e, t) {
        On = e, Bn = t, wu(), Pu(), Du(i), Fu(), postMessage({
            init: !0
        })
    }

    function wu() {
        yi = new sa
    }

    function Pu() {
        Nn = new kr(-1, 1, 1, -1, 0, 1), Nn.position.set(0, 0, .1), yi.add(Nn)
    }

    function Du(i) {
        Ri = new pu({
            canvas: i,
            alpha: !0,
            antialias: !1
        })
    }

    function Lu(i) {
        Ms = i, Jn.material.uniforms.u_Time.value = Ms, Ri.render(yi, Nn)
    }

    function Iu(i, e) {
        On = i, Bn = e, Jn.material.uniforms.u_Width.value = On, Jn.material.uniforms.u_Height.value = Bn, Nn.aspect = On / Bn, Nn.updateProjectionMatrix(), Ri.setSize(On, Bn, !1)
    }

    function Uu(i) {
        Ri.setPixelRatio(Math.min(i, 1))
    }

    function Fu() {
        Jn = new Ot(new Zn(2, 2), new Ru({
            baseMaterial: Qi,
            fragmentShader: bu,
            uniforms: {
                u_Time: {
                    value: 0
                },
                u_Width: {
                    value: On
                },
                u_Height: {
                    value: Bn
                }
            }
        })), yi.add(Jn)
    }
})();