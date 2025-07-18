const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./CDSQ2Wi9.js", "./BXg6ZhiP.js", "./DRwXc3fR.js", "./entry.D2K20ird.css"]))) => i.map(i => d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import {
    aL as Dt,
    a0 as d,
    aM as O,
    aN as S,
    aO as I,
    aP as $,
    V as _,
    av as Tt,
    an as nt,
    aQ as St,
    aR as Ot,
    I as v,
    aw as Rt,
    aS as L,
    aT as At,
    aU as xt,
    $ as at,
    G as Ct,
    i as ht,
    C as jt,
    E as kt,
    l as Lt,
    s as tt,
    q as Nt,
    n as vt,
    m as It,
    k as Bt,
    v as zt,
    x as Yt,
    y as Ut,
    z as Zt,
    B as Kt,
    S as Ft,
    P as Ht,
    J as f,
    W as Xt,
    ai as Vt,
    af as Wt,
    ag as qt,
    N as Gt,
    ah as Qt,
    Q as Jt,
    aV as $t,
    X as te,
    Y as ee,
    c as se,
    o as ie,
    a as oe,
    Z as K,
    a8 as ne,
    __tla as __tla_0
} from "./DRwXc3fR.js";
let Te;
let __tla = Promise.all([
    (() => {
        try {
            return __tla_0;
        } catch {}
    })()
]).then(async () => {
    const et = {
            type: "change"
        },
        H = {
            type: "start"
        },
        rt = {
            type: "end"
        },
        N = new Tt(),
        st = new nt(),
        ae = Math.cos(70 * St.DEG2RAD),
        c = new d(),
        u = 2 * Math.PI,
        a = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_PAN: 4,
            TOUCH_DOLLY_PAN: 5,
            TOUCH_DOLLY_ROTATE: 6
        },
        F = 1e-6;
    class he extends Dt {
        constructor(t, e = null) {
            super(t, e), this.state = a.NONE, this.target = new d(), this.cursor = new d(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = {
                LEFT: "ArrowLeft",
                UP: "ArrowUp",
                RIGHT: "ArrowRight",
                BOTTOM: "ArrowDown"
            }, this.mouseButtons = {
                LEFT: O.ROTATE,
                MIDDLE: O.DOLLY,
                RIGHT: O.PAN
            }, this.touches = {
                ONE: S.ROTATE,
                TWO: S.DOLLY_PAN
            }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new d(), this._lastQuaternion = new I(), this._lastTargetPosition = new d(), this._quat = new I().setFromUnitVectors(t.up, new d(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new $(), this._sphericalDelta = new $(), this._scale = 1, this._panOffset = new d(), this._rotateStart = new _(), this._rotateEnd = new _(), this._rotateDelta = new _(), this._panStart = new _(), this._panEnd = new _(), this._panDelta = new _(), this._dollyStart = new _(), this._dollyEnd = new _(), this._dollyDelta = new _(), this._dollyDirection = new d(), this._mouse = new _(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = le.bind(this), this._onPointerDown = re.bind(this), this._onPointerUp = ce.bind(this), this._onContextMenu = fe.bind(this), this._onMouseWheel = ue.bind(this), this._onKeyDown = _e.bind(this), this._onTouchStart = me.bind(this), this._onTouchMove = ye.bind(this), this._onMouseDown = de.bind(this), this._onMouseMove = pe.bind(this), this._interceptControlDown = be.bind(this), this._interceptControlUp = ge.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
        }
        connect(t) {
            super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, {
                passive: false
            }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
                passive: true,
                capture: true
            }), this.domElement.style.touchAction = "none";
        }
        disconnect() {
            this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, {
                capture: true
            }), this.domElement.style.touchAction = "auto";
        }
        dispose() {
            this.disconnect();
        }
        getPolarAngle() {
            return this._spherical.phi;
        }
        getAzimuthalAngle() {
            return this._spherical.theta;
        }
        getDistance() {
            return this.object.position.distanceTo(this.target);
        }
        listenToKeyEvents(t) {
            t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
        }
        stopListenToKeyEvents() {
            this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
        }
        saveState() {
            this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
        }
        reset() {
            this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(et), this.update(), this.state = a.NONE;
        }
        update(t = null) {
            const e = this.object.position;
            c.copy(e).sub(this.target), c.applyQuaternion(this._quat), this._spherical.setFromVector3(c), this.autoRotate && this.state === a.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
            let s = this.minAzimuthAngle,
                o = this.maxAzimuthAngle;
            isFinite(s) && isFinite(o) && (s < -Math.PI ? s += u : s > Math.PI && (s -= u), o < -Math.PI ? o += u : o > Math.PI && (o -= u), s <= o ? this._spherical.theta = Math.max(s, Math.min(o, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + o) / 2 ? Math.max(s, this._spherical.theta) : Math.min(o, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
            let n = false;
            if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
            else {
                const r = this._spherical.radius;
                this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), n = r != this._spherical.radius;
            }
            if (c.setFromSpherical(this._spherical), c.applyQuaternion(this._quatInverse), e.copy(this.target).add(c), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
                let r = null;
                if (this.object.isPerspectiveCamera) {
                    const p = c.length();
                    r = this._clampDistance(p * this._scale);
                    const b = p - r;
                    this.object.position.addScaledVector(this._dollyDirection, b), this.object.updateMatrixWorld(), n = !!b;
                } else if (this.object.isOrthographicCamera) {
                    const p = new d(this._mouse.x, this._mouse.y, 0);
                    p.unproject(this.object);
                    const b = this.object.zoom;
                    this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), n = b !== this.object.zoom;
                    const m = new d(this._mouse.x, this._mouse.y, 0);
                    m.unproject(this.object), this.object.position.sub(m).add(p), this.object.updateMatrixWorld(), r = c.length();
                } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
                r !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position) : (N.origin.copy(this.object.position), N.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(N.direction)) < ae ? this.object.lookAt(this.target) : (st.setFromNormalAndCoplanarPoint(this.object.up, this.target), N.intersectPlane(st, this.target))));
            } else if (this.object.isOrthographicCamera) {
                const r = this.object.zoom;
                this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), r !== this.object.zoom && (this.object.updateProjectionMatrix(), n = true);
            }
            return this._scale = 1, this._performCursorZoom = false, n || this._lastPosition.distanceToSquared(this.object.position) > F || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > F || this._lastTargetPosition.distanceToSquared(this.target) > F ? (this.dispatchEvent(et), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
        }
        _getAutoRotationAngle(t) {
            return t !== null ? u / 60 * this.autoRotateSpeed * t : u / 60 / 60 * this.autoRotateSpeed;
        }
        _getZoomScale(t) {
            const e = Math.abs(t * 0.01);
            return Math.pow(0.95, this.zoomSpeed * e);
        }
        _rotateLeft(t) {
            this._sphericalDelta.theta -= t;
        }
        _rotateUp(t) {
            this._sphericalDelta.phi -= t;
        }
        _panLeft(t, e) {
            c.setFromMatrixColumn(e, 0), c.multiplyScalar(-t), this._panOffset.add(c);
        }
        _panUp(t, e) {
            this.screenSpacePanning === true ? c.setFromMatrixColumn(e, 1) : (c.setFromMatrixColumn(e, 0), c.crossVectors(this.object.up, c)), c.multiplyScalar(t), this._panOffset.add(c);
        }
        _pan(t, e) {
            const s = this.domElement;
            if (this.object.isPerspectiveCamera) {
                const o = this.object.position;
                c.copy(o).sub(this.target);
                let n = c.length();
                n *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * n / s.clientHeight, this.object.matrix), this._panUp(2 * e * n / s.clientHeight, this.object.matrix);
            } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / s.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / s.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
        }
        _dollyOut(t) {
            this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
        }
        _dollyIn(t) {
            this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
        }
        _updateZoomParameters(t, e) {
            if (!this.zoomToCursor) return;
            this._performCursorZoom = true;
            const s = this.domElement.getBoundingClientRect(),
                o = t - s.left,
                n = e - s.top,
                r = s.width,
                p = s.height;
            this._mouse.x = o / r * 2 - 1, this._mouse.y = -(n / p) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
        }
        _clampDistance(t) {
            return Math.max(this.minDistance, Math.min(this.maxDistance, t));
        }
        _handleMouseDownRotate(t) {
            this._rotateStart.set(t.clientX, t.clientY);
        }
        _handleMouseDownDolly(t) {
            this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
        }
        _handleMouseDownPan(t) {
            this._panStart.set(t.clientX, t.clientY);
        }
        _handleMouseMoveRotate(t) {
            this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
            const e = this.domElement;
            this._rotateLeft(u * this._rotateDelta.x / e.clientHeight), this._rotateUp(u * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
        }
        _handleMouseMoveDolly(t) {
            this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
        }
        _handleMouseMovePan(t) {
            this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
        }
        _handleMouseWheel(t) {
            this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
        }
        _handleKeyDown(t) {
            let e = false;
            switch (t.code) {
                case this.keys.UP:
                    t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(u * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = true;
                    break;
                case this.keys.BOTTOM:
                    t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-u * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = true;
                    break;
                case this.keys.LEFT:
                    t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(u * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = true;
                    break;
                case this.keys.RIGHT:
                    t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-u * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = true;
                    break;
            }
            e && (t.preventDefault(), this.update());
        }
        _handleTouchStartRotate(t) {
            if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
            else {
                const e = this._getSecondPointerPosition(t),
                    s = 0.5 * (t.pageX + e.x),
                    o = 0.5 * (t.pageY + e.y);
                this._rotateStart.set(s, o);
            }
        }
        _handleTouchStartPan(t) {
            if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
            else {
                const e = this._getSecondPointerPosition(t),
                    s = 0.5 * (t.pageX + e.x),
                    o = 0.5 * (t.pageY + e.y);
                this._panStart.set(s, o);
            }
        }
        _handleTouchStartDolly(t) {
            const e = this._getSecondPointerPosition(t),
                s = t.pageX - e.x,
                o = t.pageY - e.y,
                n = Math.sqrt(s * s + o * o);
            this._dollyStart.set(0, n);
        }
        _handleTouchStartDollyPan(t) {
            this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
        }
        _handleTouchStartDollyRotate(t) {
            this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
        }
        _handleTouchMoveRotate(t) {
            if (this._pointers.length == 1) this._rotateEnd.set(t.pageX, t.pageY);
            else {
                const s = this._getSecondPointerPosition(t),
                    o = 0.5 * (t.pageX + s.x),
                    n = 0.5 * (t.pageY + s.y);
                this._rotateEnd.set(o, n);
            }
            this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
            const e = this.domElement;
            this._rotateLeft(u * this._rotateDelta.x / e.clientHeight), this._rotateUp(u * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
        }
        _handleTouchMovePan(t) {
            if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
            else {
                const e = this._getSecondPointerPosition(t),
                    s = 0.5 * (t.pageX + e.x),
                    o = 0.5 * (t.pageY + e.y);
                this._panEnd.set(s, o);
            }
            this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
        }
        _handleTouchMoveDolly(t) {
            const e = this._getSecondPointerPosition(t),
                s = t.pageX - e.x,
                o = t.pageY - e.y,
                n = Math.sqrt(s * s + o * o);
            this._dollyEnd.set(0, n), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
            const r = (t.pageX + e.x) * 0.5,
                p = (t.pageY + e.y) * 0.5;
            this._updateZoomParameters(r, p);
        }
        _handleTouchMoveDollyPan(t) {
            this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
        }
        _handleTouchMoveDollyRotate(t) {
            this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
        }
        _addPointer(t) {
            this._pointers.push(t.pointerId);
        }
        _removePointer(t) {
            delete this._pointerPositions[t.pointerId];
            for (let e = 0; e < this._pointers.length; e++)
                if (this._pointers[e] == t.pointerId) {
                    this._pointers.splice(e, 1);
                    return;
                }
        }
        _isTrackingPointer(t) {
            for (let e = 0; e < this._pointers.length; e++)
                if (this._pointers[e] == t.pointerId) return true;
            return false;
        }
        _trackPointer(t) {
            let e = this._pointerPositions[t.pointerId];
            e === void 0 && (e = new _(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
        }
        _getSecondPointerPosition(t) {
            const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
            return this._pointerPositions[e];
        }
        _customWheelEvent(t) {
            const e = t.deltaMode,
                s = {
                    clientX: t.clientX,
                    clientY: t.clientY,
                    deltaY: t.deltaY
                };
            switch (e) {
                case 1:
                    s.deltaY *= 16;
                    break;
                case 2:
                    s.deltaY *= 100;
                    break;
            }
            return t.ctrlKey && !this._controlActive && (s.deltaY *= 10), s;
        }
    }

    function re(i) {
        this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
    }

    function le(i) {
        this.enabled !== false && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
    }

    function ce(i) {
        switch (this._removePointer(i), this._pointers.length) {
            case 0:
                this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(rt), this.state = a.NONE;
                break;
            case 1:
                const t = this._pointers[0],
                    e = this._pointerPositions[t];
                this._onTouchStart({
                    pointerId: t,
                    pageX: e.x,
                    pageY: e.y
                });
                break;
        }
    }

    function de(i) {
        let t;
        switch (i.button) {
            case 0:
                t = this.mouseButtons.LEFT;
                break;
            case 1:
                t = this.mouseButtons.MIDDLE;
                break;
            case 2:
                t = this.mouseButtons.RIGHT;
                break;
            default:
                t = -1;
        }
        switch (t) {
            case O.DOLLY:
                if (this.enableZoom === false) return;
                this._handleMouseDownDolly(i), this.state = a.DOLLY;
                break;
            case O.ROTATE:
                if (i.ctrlKey || i.metaKey || i.shiftKey) {
                    if (this.enablePan === false) return;
                    this._handleMouseDownPan(i), this.state = a.PAN;
                } else {
                    if (this.enableRotate === false) return;
                    this._handleMouseDownRotate(i), this.state = a.ROTATE;
                }
                break;
            case O.PAN:
                if (i.ctrlKey || i.metaKey || i.shiftKey) {
                    if (this.enableRotate === false) return;
                    this._handleMouseDownRotate(i), this.state = a.ROTATE;
                } else {
                    if (this.enablePan === false) return;
                    this._handleMouseDownPan(i), this.state = a.PAN;
                }
                break;
            default:
                this.state = a.NONE;
        }
        this.state !== a.NONE && this.dispatchEvent(H);
    }

    function pe(i) {
        switch (this.state) {
            case a.ROTATE:
                if (this.enableRotate === false) return;
                this._handleMouseMoveRotate(i);
                break;
            case a.DOLLY:
                if (this.enableZoom === false) return;
                this._handleMouseMoveDolly(i);
                break;
            case a.PAN:
                if (this.enablePan === false) return;
                this._handleMouseMovePan(i);
                break;
        }
    }

    function ue(i) {
        this.enabled === false || this.enableZoom === false || this.state !== a.NONE || (i.preventDefault(), this.dispatchEvent(H), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(rt));
    }

    function _e(i) {
        this.enabled !== false && this._handleKeyDown(i);
    }

    function me(i) {
        switch (this._trackPointer(i), this._pointers.length) {
            case 1:
                switch (this.touches.ONE) {
                    case S.ROTATE:
                        if (this.enableRotate === false) return;
                        this._handleTouchStartRotate(i), this.state = a.TOUCH_ROTATE;
                        break;
                    case S.PAN:
                        if (this.enablePan === false) return;
                        this._handleTouchStartPan(i), this.state = a.TOUCH_PAN;
                        break;
                    default:
                        this.state = a.NONE;
                }
                break;
            case 2:
                switch (this.touches.TWO) {
                    case S.DOLLY_PAN:
                        if (this.enableZoom === false && this.enablePan === false) return;
                        this._handleTouchStartDollyPan(i), this.state = a.TOUCH_DOLLY_PAN;
                        break;
                    case S.DOLLY_ROTATE:
                        if (this.enableZoom === false && this.enableRotate === false) return;
                        this._handleTouchStartDollyRotate(i), this.state = a.TOUCH_DOLLY_ROTATE;
                        break;
                    default:
                        this.state = a.NONE;
                }
                break;
            default:
                this.state = a.NONE;
        }
        this.state !== a.NONE && this.dispatchEvent(H);
    }

    function ye(i) {
        switch (this._trackPointer(i), this.state) {
            case a.TOUCH_ROTATE:
                if (this.enableRotate === false) return;
                this._handleTouchMoveRotate(i), this.update();
                break;
            case a.TOUCH_PAN:
                if (this.enablePan === false) return;
                this._handleTouchMovePan(i), this.update();
                break;
            case a.TOUCH_DOLLY_PAN:
                if (this.enableZoom === false && this.enablePan === false) return;
                this._handleTouchMoveDollyPan(i), this.update();
                break;
            case a.TOUCH_DOLLY_ROTATE:
                if (this.enableZoom === false && this.enableRotate === false) return;
                this._handleTouchMoveDollyRotate(i), this.update();
                break;
            default:
                this.state = a.NONE;
        }
    }

    function fe(i) {
        this.enabled !== false && i.preventDefault();
    }

    function be(i) {
        i.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
            passive: true,
            capture: true
        }));
    }

    function ge(i) {
        i.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
            passive: true,
            capture: true
        }));
    }
    class Ee {
        constructor() {
            __publicField(this, "physics", null);
            __publicField(this, "world", null);
            __publicField(this, "scene", null);
            __publicField(this, "debug", false);
            __publicField(this, "debugMesh", null);
        }
        async init() {
            return this.physics = window.RAPIER, await this.physics.init(), this.world = new this.physics.World({
                x: 0,
                y: 0,
                z: 0
            }), this.initDebug(), true;
        }
        initDebug() {
            const {
                d: t
            } = Ot();
            v(t, (e) => {
                e && this.toggleDebug();
            });
        }
        toggleDebug() {
            if (this.debug = !this.debug, this.debug) {
                const {
                    vertices: t,
                    colors: e
                } = this.world.debugRender(), s = new Rt();
                s.setAttribute("position", new L(t, 3)), s.setAttribute("color", new L(e, 4));
                const o = new At({
                    color: 65280
                });
                this.debugMesh = new xt(s, o), this.scene.add(this.debugMesh);
            } else this.debugMesh.geometry.dispose(), this.debugMesh.material.dispose(), this.debugMesh.removeFromParent(), this.debugMesh = null;
        }
        step(t = null) {
            if (this.world.step(t), this.debug) {
                const {
                    vertices: e,
                    colors: s
                } = this.world.debugRender();
                this.debugMesh.geometry.setAttribute("position", new L(e, 3)), this.debugMesh.geometry.setAttribute("color", new L(s, 4));
            }
        }
        addScene(t) {
            this.scene = t;
        }
    }
    const it = ht(),
        Pe = Ct(() => {
            !it.isInit || !it.isSoundEnabled || jt.emit(kt.PLAY_FOOTER_SFX);
        }, 400);
    class we extends Ee {
        constructor() {
            super();
            __publicField(this, "cursor", null);
            __publicField(this, "mesh", null);
            __publicField(this, "bodies", []);
            __publicField(this, "instancePosition", new d());
            __publicField(this, "instanceQuaternion", new I());
            __publicField(this, "instanceMatrix", new at());
            __publicField(this, "scaleVector", new d(1, 1, 1));
            __publicField(this, "relativePoint", new d());
            __publicField(this, "collisionMagnitudeThreshold", 2);
        }
        async init() {
            return await super.init(), this.eventQueue = new this.physics.EventQueue(true), true;
        }
        addScene(t, e = []) {
            if (super.addScene(t), this.mesh = t.getObjectByName("Symbols"), !e.length) return;
            let s;
            for (s = 0; s < e.length; s++) this.addBody(e[s]);
        }
        step() {
            super.step(this.eventQueue), this.eventQueue.drainCollisionEvents((t, e, s) => {
                const o = this.world.getCollider(t),
                    n = this.world.getCollider(e);
                if (!o || !n) return;
                const r = o.parent(),
                    p = n.parent();
                if (!r || !p || !s) return;
                const b = ot(r.linvel()),
                    m = ot(p.linvel());
                b < this.collisionMagnitudeThreshold && m < this.collisionMagnitudeThreshold || Pe();
            });
            for (let t = 0; t < this.bodies.length; t++) {
                const e = this.bodies[t];
                this.instanceQuaternion.copy(e.rotation()), this.instancePosition.copy(e.translation());
                const s = this.instancePosition.clone().normalize().multiplyScalar(-0.4);
                e.resetForces(), e.addForce(s), this.instanceMatrix.compose(this.instancePosition, this.instanceQuaternion, this.scaleVector), this.mesh.setMatrixAt(t, this.instanceMatrix);
            }
        }
        addBody(t) {
            const e = this.physics.RigidBodyDesc.dynamic();
            e.setTranslation(t.position.x, t.position.y, t.position.z), e.setRotation(t.quaternion);
            const s = this.world.createRigidBody(e);
            s.userData = {
                mesh: t
            };
            const o = t.geometry.attributes.position.array,
                n = t.geometry.index.array,
                r = this.physics.ColliderDesc.trimesh(o, n);
            r.setActiveEvents(this.physics.ActiveEvents.COLLISION_EVENTS), this.world.createCollider(r, s), this.bodies.push(s);
        }
        addCursor(t) {
            const e = this.physics.RigidBodyDesc.kinematicPositionBased();
            e.setTranslation(t.position.x, t.position.y, t.position.z);
            const s = this.world.createRigidBody(e);
            s.userData = {
                mesh: t,
                id: t.uuid,
                type: "cursor"
            };
            const {
                radius: o
            } = t.geometry.parameters, n = this.physics.ColliderDesc.ball(o);
            this.world.createCollider(n, s), this.cursor = s;
        }
        moveCursor(t = 0, e = 0) {
            this.cursor.setTranslation({
                x: t,
                y: e,
                z: 0
            }), this.scene.getObjectByName("Cursor").position.copy(this.cursor.translation());
        }
    }

    function ot(i) {
        const {
            x: t,
            y: e,
            z: s
        } = i;
        return Math.sqrt(t * t + e * e + s * s);
    }
    let Me;
    Me = [
        "width",
        "height"
    ];
    Te = {
        __name: "Attraction",
        setup(i) {
            const t = Lt(),
                e = tt(null),
                s = tt(false),
                {
                    width: o,
                    height: n,
                    top: r
                } = Nt(t),
                {
                    pixelRatio: p
                } = vt(),
                b = It(t),
                {
                    gsap: m,
                    Observer: lt
                } = Bt(),
                X = ht();
            let E, y, g, w, B, M, V = [],
                D;
            zt(async () => {
                await Yt(), ct();
            }), v([
                b,
                s,
                () => X.isInit
            ], (h) => {
                h.every((l) => l) ? m.ticker.add(W) : m.ticker.remove(W);
            }), v([
                p,
                s
            ], (h) => {
                h[1] && g.setPixelRatio(Math.min(h[0], 1));
            }), v([
                o,
                n,
                s
            ], (h) => {
                h[2] && (y.aspect = h[0] / h[1], y.updateProjectionMatrix(), g.setSize(h[0], h[1]));
            });
            async function ct() {
                if (M = new we(), await M.init(), pt(), ut(), _t(), await mt(), M.addScene(E, V), yt(), ft(), Ut("debug", "attractor")) {
                    bt();
                    const {
                        createAttractorDebug: h
                    } = await Zt(async () => {
                            const {
                                createAttractorDebug: l
                            } = await
                            import ("./CDSQ2Wi9.js");
                            return {
                                createAttractorDebug: l
                            };
                        }, __vite__mapDeps([0, 1, 2, 3]),
                        import.meta.url);
                    h(E, g);
                }
                Kt(s, true);
            }

            function W(h = 0) {
                !f(s) || !X.isInit || (M.step(), dt(h), g.render(E, y));
            }

            function dt(h = 0) {
                B == null ? void 0 : B.update();
            }

            function pt() {
                E = new Ft();
            }

            function ut() {
                y = new Ht(40, f(o) / f(n), 0.1, 100), y.position.set(0, 0, 5);
            }

            function _t() {
                g = new Xt({
                    canvas: f(e),
                    alpha: true,
                    powerPreference: "high-performance",
                    antialias: true
                }), g.toneMapping = Vt, g.setSize(f(o), f(n));
            }
            async function mt() {
                const h = await Wt.load("/FooterParticles_MatCapV3.webp");
                h.colorSpace = qt;
                const l = await Gt.load("/symbols.glb"),
                    T = l.scene.getObjectByName("Asterisk_Mesh"),
                    x = l.scene.getObjectByName("Asterisk_Body"),
                    R = l.scene.getObjectByName("Chevron_Mesh"),
                    z = l.scene.getObjectByName("Chevron_Body"),
                    C = l.scene.getObjectByName("O_Mesh"),
                    j = l.scene.getObjectByName("O_Body"),
                    q = l.scene.getObjectByName("Plus_Mesh"),
                    gt = l.scene.getObjectByName("Plus_Body"),
                    k = 10;
                let G = 0,
                    Q = 0;
                const Et = new Qt({
                    matcap: h
                });
                [
                    T,
                    R,
                    C,
                    q
                ].forEach((A) => {
                    G += A.geometry.attributes.position.count * k, Q += A.geometry.index.count * k;
                }), w = new Jt(k * l.scene.children.length, G, Q, Et), w.name = "Symbols";
                const J = new at(),
                    Y = new I(),
                    U = new d(),
                    Pt = new d(1, 1, 1);
                [
                    T,
                    R,
                    C,
                    q
                ].forEach((A) => {
                    let Z;
                    for (Z = 0; Z < k; Z++) {
                        const wt = w.addGeometry(A.geometry),
                            Mt = w.addInstance(wt);
                        U.set(m.utils.random(-2, 2), m.utils.random(-2, 2), m.utils.random(-2, 2)), Y.random(), J.compose(U, Y, Pt), w.setMatrixAt(Mt, J);
                        let P;
                        switch (A.name) {
                            case "Asterisk_Mesh":
                                P = x.clone();
                                break;
                            case "Chevron_Mesh":
                                P = z.clone();
                                break;
                            case "O_Mesh":
                                P = j.clone();
                                break;
                            case "Plus_Mesh":
                                P = gt.clone();
                                break;
                        }
                        P.quaternion.copy(Y), P.position.copy(U), V.push(P);
                    }
                }), E.add(w);
            }

            function yt() {
                new nt(new d(0, 1, 0), 0);
                const h = new $t(0.7),
                    l = new te({
                        color: 4456533
                    });
                D = new ee(h, l), D.position.set(-10, 0, 0), D.name = "Cursor", D.visible = false, E.add(D), M.addCursor(D);
            }

            function ft() {
                let h = 0,
                    l = 0;
                const T = new d();
                lt.create({
                    type: "pointer",
                    onMove: (x) => {
                        if (!E.getObjectByName("Cursor")) return;
                        h = x.x / f(o) * 2 - 1, l = -((x.y - f(r)) / f(n)) * 2 + 1, T.set(h, l, 0), T.unproject(y);
                        const R = T.sub(y.position).normalize(),
                            z = -y.position.z / R.z,
                            C = R.multiplyScalar(z),
                            j = y.position.clone().add(C);
                        M.moveCursor(j.x, j.y);
                    }
                });
            }

            function bt() {
                B = new he(y, g.domElement), B.enableDamping = true;
            }
            return (h, l) => (ie(), se("div", {
                class: ne([
                    "transition-opacity duration-500 ease-out",
                    {
                        "opacity-0": !K(s)
                    }
                ])
            }, [
                oe("canvas", {
                    class: "canvas",
                    ref_key: "canvasRef",
                    ref: e,
                    width: K(o),
                    height: K(n)
                }, null, 8, Me)
            ], 2));
        }
    };
});
export {
    Te as _,
    __tla
};