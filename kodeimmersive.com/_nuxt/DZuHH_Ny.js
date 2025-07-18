function M(v, G) {
    for (var x = 0; x < G.length; x++) {
        const b = G[x];
        if (typeof b != "string" && !Array.isArray(b)) {
            for (const N in b)
                if (N !== "default" && !(N in v)) {
                    const e = Object.getOwnPropertyDescriptor(b, N);
                    e && Object.defineProperty(v, N, e.get ? e : {
                        enumerable: true,
                        get: () => b[N]
                    });
                }
        }
    }
    return Object.freeze(Object.defineProperty(v, Symbol.toStringTag, {
        value: "Module"
    }));
}
var q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function A(v) {
    return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var R = {
        exports: {}
    },
    O;

function V() {
    return O || (O = 1, function(v) {
        (function(G) {
            function x(t, n) {
                this.options = {}, t = t || this.options;
                var i = {
                    frequency: 350,
                    peak: 1
                };
                this.inputNode = this.filterNode = o.context.createBiquadFilter(), this.filterNode.type = n, this.outputNode = e.context.createGain(), this.filterNode.connect(this.outputNode);
                for (var s in i) this[s] = t[s], this[s] = this[s] === void 0 || this[s] === null ? i[s] : this[s];
            }

            function b() {
                var t, n, i = o.context.sampleRate * this.time,
                    s = e.context.createBuffer(2, i, o.context.sampleRate),
                    r = s.getChannelData(0),
                    c = s.getChannelData(1);
                for (n = 0; i > n; n++) t = this.reverse ? i - n : n, r[n] = (2 * Math.random() - 1) * Math.pow(1 - t / i, this.decay), c[n] = (2 * Math.random() - 1) * Math.pow(1 - t / i, this.decay);
                this.reverbNode.buffer && (this.inputNode.disconnect(this.reverbNode), this.reverbNode.disconnect(this.wetGainNode), this.reverbNode = e.context.createConvolver(), this.inputNode.connect(this.reverbNode), this.reverbNode.connect(this.wetGainNode)), this.reverbNode.buffer = s;
            }

            function N(t) {
                for (var n = o.context.sampleRate, i = new Float32Array(n), s = Math.PI / 180, r = 0; n > r; r++) {
                    var c = 2 * r / n - 1;
                    i[r] = (3 + t) * c * 20 * s / (Math.PI + t * Math.abs(c));
                }
                return i;
            }
            var e = {},
                o = e,
                T = v.exports;
            T ? v.exports = e : G.Pizzicato = G.Pz = e;
            var E = G.AudioContext || G.webkitAudioContext;
            if (!E) return void console.error("No AudioContext found in this environment. Please ensure your window or global object contains a working AudioContext constructor function.");
            e.context = new E();
            var U = e.context.createGain();
            U.connect(e.context.destination), e.Util = {
                isString: function(t) {
                    return toString.call(t) === "[object String]";
                },
                isObject: function(t) {
                    return toString.call(t) === "[object Object]";
                },
                isFunction: function(t) {
                    return toString.call(t) === "[object Function]";
                },
                isNumber: function(t) {
                    return toString.call(t) === "[object Number]" && t === +t;
                },
                isArray: function(t) {
                    return toString.call(t) === "[object Array]";
                },
                isInRange: function(t, n, i) {
                    return o.Util.isNumber(t) && o.Util.isNumber(n) && o.Util.isNumber(i) ? t >= n && i >= t : false;
                },
                isBool: function(t) {
                    return typeof t == "boolean";
                },
                isOscillator: function(t) {
                    return t && t.toString() === "[object OscillatorNode]";
                },
                isAudioBufferSourceNode: function(t) {
                    return t && t.toString() === "[object AudioBufferSourceNode]";
                },
                isSound: function(t) {
                    return t instanceof o.Sound;
                },
                isEffect: function(t) {
                    for (var n in e.Effects)
                        if (t instanceof e.Effects[n]) return true;
                    return false;
                },
                normalize: function(t, n, i) {
                    return o.Util.isNumber(t) && o.Util.isNumber(n) && o.Util.isNumber(i) ? (i - n) * t / 1 + n : void 0;
                },
                getDryLevel: function(t) {
                    return !o.Util.isNumber(t) || t > 1 || 0 > t ? 0 : 0.5 >= t ? 1 : 1 - 2 * (t - 0.5);
                },
                getWetLevel: function(t) {
                    return !o.Util.isNumber(t) || t > 1 || 0 > t ? 0 : t >= 0.5 ? 1 : 1 - 2 * (0.5 - t);
                }
            };
            var j = e.context.createGain(),
                D = Object.getPrototypeOf(Object.getPrototypeOf(j)),
                F = D.connect;
            D.connect = function(t) {
                var n = o.Util.isEffect(t) ? t.inputNode : t;
                return F.call(this, n), t;
            }, Object.defineProperty(e, "volume", {
                enumerable: true,
                get: function() {
                    return U.gain.value;
                },
                set: function(t) {
                    o.Util.isInRange(t, 0, 1) && U && (U.gain.value = t);
                }
            }), Object.defineProperty(e, "masterGainNode", {
                enumerable: false,
                get: function() {
                    return U;
                },
                set: function(t) {
                    console.error("Can't set the master gain node");
                }
            }), e.Events = {
                on: function(t, n, i) {
                    if (t && n) {
                        this._events = this._events || {};
                        var s = this._events[t] || (this._events[t] = []);
                        s.push({
                            callback: n,
                            context: i || this,
                            handler: this
                        });
                    }
                },
                trigger: function(t) {
                    if (t) {
                        var n, i, s, r;
                        if (this._events = this._events || {}, n = this._events[t] || (this._events[t] = [])) {
                            for (i = Math.max(0, arguments.length - 1), s = [], r = 0; i > r; r++) s[r] = arguments[r + 1];
                            for (r = 0; r < n.length; r++) n[r].callback.apply(n[r].context, s);
                        }
                    }
                },
                off: function(t) {
                    t ? this._events[t] = void 0 : this._events = {};
                }
            }, e.Sound = function(t, n) {
                function i(a) {
                    var h = ["wave", "file", "input", "script", "sound"];
                    if (a && !u.isFunction(a) && !u.isString(a) && !u.isObject(a)) return "Description type not supported. Initialize a sound using an object, a function or a string.";
                    if (u.isObject(a)) {
                        if (!u.isString(a.source) || h.indexOf(a.source) === -1) return "Specified source not supported. Sources can be wave, file, input or script";
                        if (!(a.source !== "file" || a.options && a.options.path)) return "A path is needed for sounds with a file source";
                        if (!(a.source !== "script" || a.options && a.options.audioFunction)) return "An audio function is needed for sounds with a script source";
                    }
                }

                function s(a, h) {
                    a = a || {}, this.getRawSourceNode = function() {
                        var d = this.sourceNode ? this.sourceNode.frequency.value : a.frequency,
                            f = e.context.createOscillator();
                        return f.type = a.type || "sine", f.frequency.value = d || 440, f;
                    }, this.sourceNode = this.getRawSourceNode(), this.sourceNode.gainSuccessor = o.context.createGain(), this.sourceNode.connect(this.sourceNode.gainSuccessor), u.isFunction(h) && h();
                }

                function r(a, h) {
                    a = u.isArray(a) ? a : [a];
                    var d = new XMLHttpRequest();
                    d.open("GET", a[0], true), d.responseType = "arraybuffer", d.onload = function(f) {
                        e.context.decodeAudioData(f.target.response, (function(p) {
                            m.getRawSourceNode = function() {
                                var k = e.context.createBufferSource();
                                return k.loop = this.loop, k.buffer = p, k;
                            }, u.isFunction(h) && h();
                        }).bind(m), (function(p) {
                            return console.error("Error decoding audio file " + a[0]), a.length > 1 ? (a.shift(), void r(a, h)) : (p = p || new Error("Error decoding audio file " + a[0]), void(u.isFunction(h) && h(p)));
                        }).bind(m));
                    }, d.onreadystatechange = function(f) {
                        d.readyState === 4 && d.status !== 200 && console.error("Error while fetching " + a[0] + ". " + d.statusText);
                    }, d.send();
                }

                function c(a, h) {
                    if (navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, !navigator.getUserMedia && !navigator.mediaDevices.getUserMedia) return void console.error("Your browser does not support getUserMedia");
                    var d = (function(p) {
                            m.getRawSourceNode = function() {
                                return e.context.createMediaStreamSource(p);
                            }, u.isFunction(h) && h();
                        }).bind(m),
                        f = function(p) {
                            u.isFunction(h) && h(p);
                        };
                    navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
                        audio: true
                    }).then(d).catch(f) : navigator.getUserMedia({
                        audio: true
                    }, d, f);
                }

                function g(a, h) {
                    var d = u.isFunction(a) ? a : a.audioFunction,
                        f = u.isObject(a) && a.bufferSize ? a.bufferSize : null;
                    if (!f) try {
                        e.context.createScriptProcessor();
                    } catch {
                        f = 2048;
                    }
                    this.getRawSourceNode = function() {
                        var p = e.context.createScriptProcessor(f, 1, 1);
                        return p.onaudioprocess = d, p;
                    };
                }

                function I(a, h) {
                    this.getRawSourceNode = a.sound.getRawSourceNode, a.sound.sourceNode && o.Util.isOscillator(a.sound.sourceNode) && (this.sourceNode = this.getRawSourceNode(), this.frequency = a.sound.frequency);
                }
                var m = this,
                    u = e.Util,
                    S = i(t),
                    w = u.isObject(t) && u.isObject(t.options),
                    z = 0.04,
                    C = 0.04;
                if (S) throw console.error(S), new Error("Error initializing Pizzicato Sound: " + S);
                this.detached = w && t.options.detached, this.masterVolume = e.context.createGain(), this.fadeNode = e.context.createGain(), this.fadeNode.gain.value = 0, this.detached || this.masterVolume.connect(e.masterGainNode), this.lastTimePlayed = 0, this.effects = [], this.effectConnectors = [], this.playing = this.paused = false, this.loop = w && t.options.loop, this.attack = w && u.isNumber(t.options.attack) ? t.options.attack : z, this.volume = w && u.isNumber(t.options.volume) ? t.options.volume : 1, w && u.isNumber(t.options.release) ? this.release = t.options.release : w && u.isNumber(t.options.sustain) ? (console.warn("'sustain' is deprecated. Use 'release' instead."), this.release = t.options.sustain) : this.release = C, t ? u.isString(t) ? r.bind(this)(t, n) : u.isFunction(t) ? g.bind(this)(t, n) : t.source === "file" ? r.bind(this)(t.options.path, n) : t.source === "wave" ? s.bind(this)(t.options, n) : t.source === "input" ? c.bind(this)(t, n) : t.source === "script" ? g.bind(this)(t.options, n) : t.source === "sound" && I.bind(this)(t.options, n) : s.bind(this)({}, n);
            }, e.Sound.prototype = Object.create(e.Events, {
                play: {
                    enumerable: true,
                    value: function(t, n) {
                        this.playing || (o.Util.isNumber(n) || (n = this.offsetTime || 0), o.Util.isNumber(t) || (t = 0), this.playing = true, this.paused = false, this.sourceNode = this.getSourceNode(), this.applyAttack(), o.Util.isFunction(this.sourceNode.start) && (this.lastTimePlayed = e.context.currentTime - n, this.sourceNode.start(o.context.currentTime + t, n)), this.trigger("play"));
                    }
                },
                stop: {
                    enumerable: true,
                    value: function() {
                        (this.paused || this.playing) && (this.paused = this.playing = false, this.stopWithRelease(), this.offsetTime = 0, this.trigger("stop"));
                    }
                },
                pause: {
                    enumerable: true,
                    value: function() {
                        if (!this.paused && this.playing) {
                            this.paused = true, this.playing = false, this.stopWithRelease();
                            var t = o.context.currentTime - this.lastTimePlayed;
                            this.sourceNode.buffer ? this.offsetTime = t % (this.sourceNode.buffer.length / o.context.sampleRate) : this.offsetTime = t, this.trigger("pause");
                        }
                    }
                },
                clone: {
                    enumerable: true,
                    value: function() {
                        for (var t = new e.Sound({
                                source: "sound",
                                options: {
                                    loop: this.loop,
                                    attack: this.attack,
                                    release: this.release,
                                    volume: this.volume,
                                    sound: this
                                }
                            }), n = 0; n < this.effects.length; n++) t.addEffect(this.effects[n]);
                        return t;
                    }
                },
                onEnded: {
                    enumerable: true,
                    value: function(t) {
                        return function() {
                            this.sourceNode && this.sourceNode !== t || (this.playing && this.stop(), this.paused || this.trigger("end"));
                        };
                    }
                },
                addEffect: {
                    enumerable: true,
                    value: function(t) {
                        if (!o.Util.isEffect(t)) return console.error("The object provided is not a Pizzicato effect."), this;
                        this.effects.push(t);
                        var n = this.effectConnectors.length > 0 ? this.effectConnectors[this.effectConnectors.length - 1] : this.fadeNode;
                        n.disconnect(), n.connect(t);
                        var i = o.context.createGain();
                        return this.effectConnectors.push(i), t.connect(i), i.connect(this.masterVolume), this;
                    }
                },
                removeEffect: {
                    enumerable: true,
                    value: function(t) {
                        var n = this.effects.indexOf(t);
                        if (n === -1) return console.warn("Cannot remove effect that is not applied to this sound."), this;
                        var i = this.playing;
                        i && this.pause();
                        var s = n === 0 ? this.fadeNode : this.effectConnectors[n - 1];
                        s.disconnect();
                        var r = this.effectConnectors[n];
                        r.disconnect(), t.disconnect(r), this.effectConnectors.splice(n, 1), this.effects.splice(n, 1);
                        var c;
                        return c = n > this.effects.length - 1 || this.effects.length === 0 ? this.masterVolume : this.effects[n], s.connect(c), i && this.play(), this;
                    }
                },
                connect: {
                    enumerable: true,
                    value: function(t) {
                        return this.masterVolume.connect(t), this;
                    }
                },
                disconnect: {
                    enumerable: true,
                    value: function(t) {
                        return this.masterVolume.disconnect(t), this;
                    }
                },
                connectEffects: {
                    enumerable: true,
                    value: function() {
                        for (var t = [], n = 0; n < this.effects.length; n++) {
                            var i = n === this.effects.length - 1,
                                s = i ? this.masterVolume : this.effects[n + 1].inputNode;
                            t[n] = o.context.createGain(), this.effects[n].outputNode.disconnect(this.effectConnectors[n]), this.effects[n].outputNode.connect(s);
                        }
                    }
                },
                volume: {
                    enumerable: true,
                    get: function() {
                        return this.masterVolume ? this.masterVolume.gain.value : void 0;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && this.masterVolume && (this.masterVolume.gain.value = t);
                    }
                },
                frequency: {
                    enumerable: true,
                    get: function() {
                        return this.sourceNode && o.Util.isOscillator(this.sourceNode) ? this.sourceNode.frequency.value : null;
                    },
                    set: function(t) {
                        this.sourceNode && o.Util.isOscillator(this.sourceNode) && (this.sourceNode.frequency.value = t);
                    }
                },
                sustain: {
                    enumerable: true,
                    get: function() {
                        return console.warn("'sustain' is deprecated. Use 'release' instead."), this.release;
                    },
                    set: function(t) {
                        console.warn("'sustain' is deprecated. Use 'release' instead."), o.Util.isInRange(t, 0, 10) && (this.release = t);
                    }
                },
                getSourceNode: {
                    enumerable: true,
                    value: function() {
                        if (this.sourceNode) {
                            var t = this.sourceNode;
                            t.gainSuccessor.gain.setValueAtTime(t.gainSuccessor.gain.value, o.context.currentTime), t.gainSuccessor.gain.linearRampToValueAtTime(1e-4, o.context.currentTime + 0.2), setTimeout(function() {
                                t.disconnect(), t.gainSuccessor.disconnect();
                            }, 200);
                        }
                        var n = this.getRawSourceNode();
                        return n.gainSuccessor = o.context.createGain(), n.connect(n.gainSuccessor), n.gainSuccessor.connect(this.fadeNode), this.fadeNode.connect(this.getInputNode()), o.Util.isAudioBufferSourceNode(n) && (n.onended = this.onEnded(n).bind(this)), n;
                    }
                },
                getInputNode: {
                    enumerable: true,
                    value: function() {
                        return this.effects.length > 0 ? this.effects[0].inputNode : this.masterVolume;
                    }
                },
                applyAttack: {
                    enumerable: false,
                    value: function() {
                        if (this.fadeNode.gain.value, this.fadeNode.gain.cancelScheduledValues(o.context.currentTime), !this.attack) return void this.fadeNode.gain.setTargetAtTime(1, o.context.currentTime, 1e-3);
                        var t = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                            n = this.attack;
                        t || (n = (1 - this.fadeNode.gain.value) * this.attack), this.fadeNode.gain.setTargetAtTime(1, o.context.currentTime, 2 * n);
                    }
                },
                stopWithRelease: {
                    enumerable: false,
                    value: function(t) {
                        var n = this.sourceNode,
                            i = function() {
                                return o.Util.isFunction(n.stop) ? n.stop(0) : n.disconnect();
                            };
                        if (this.fadeNode.gain.value, this.fadeNode.gain.cancelScheduledValues(o.context.currentTime), !this.release) return this.fadeNode.gain.setTargetAtTime(0, o.context.currentTime, 1e-3), void i();
                        var s = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                            r = this.release;
                        s || (r = this.fadeNode.gain.value * this.release), this.fadeNode.gain.setTargetAtTime(1e-5, o.context.currentTime, r / 5), window.setTimeout(function() {
                            i();
                        }, 1e3 * r);
                    }
                }
            }), e.Group = function(t) {
                t = t || [], this.mergeGainNode = o.context.createGain(), this.masterVolume = o.context.createGain(), this.sounds = [], this.effects = [], this.effectConnectors = [], this.mergeGainNode.connect(this.masterVolume), this.masterVolume.connect(o.masterGainNode);
                for (var n = 0; n < t.length; n++) this.addSound(t[n]);
            }, e.Group.prototype = Object.create(o.Events, {
                connect: {
                    enumerable: true,
                    value: function(t) {
                        return this.masterVolume.connect(t), this;
                    }
                },
                disconnect: {
                    enumerable: true,
                    value: function(t) {
                        return this.masterVolume.disconnect(t), this;
                    }
                },
                addSound: {
                    enumerable: true,
                    value: function(t) {
                        return o.Util.isSound(t) ? this.sounds.indexOf(t) > -1 ? void console.warn("The Pizzicato.Sound object was already added to this group") : t.detached ? void console.warn("Groups do not support detached sounds. You can manually create an audio graph to group detached sounds together.") : (t.disconnect(o.masterGainNode), t.connect(this.mergeGainNode), void this.sounds.push(t)) : void console.error("You can only add Pizzicato.Sound objects");
                    }
                },
                removeSound: {
                    enumerable: true,
                    value: function(t) {
                        var n = this.sounds.indexOf(t);
                        return n === -1 ? void console.warn("Cannot remove a sound that is not part of this group.") : (t.disconnect(this.mergeGainNode), t.connect(o.masterGainNode), void this.sounds.splice(n, 1));
                    }
                },
                volume: {
                    enumerable: true,
                    get: function() {
                        return this.masterVolume ? this.masterVolume.gain.value : void 0;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.masterVolume.gain.value = t);
                    }
                },
                play: {
                    enumerable: true,
                    value: function() {
                        for (var t = 0; t < this.sounds.length; t++) this.sounds[t].play();
                        this.trigger("play");
                    }
                },
                stop: {
                    enumerable: true,
                    value: function() {
                        for (var t = 0; t < this.sounds.length; t++) this.sounds[t].stop();
                        this.trigger("stop");
                    }
                },
                pause: {
                    enumerable: true,
                    value: function() {
                        for (var t = 0; t < this.sounds.length; t++) this.sounds[t].pause();
                        this.trigger("pause");
                    }
                },
                addEffect: {
                    enumerable: true,
                    value: function(t) {
                        if (!o.Util.isEffect(t)) return console.error("The object provided is not a Pizzicato effect."), this;
                        this.effects.push(t);
                        var n = this.effectConnectors.length > 0 ? this.effectConnectors[this.effectConnectors.length - 1] : this.mergeGainNode;
                        n.disconnect(), n.connect(t);
                        var i = o.context.createGain();
                        return this.effectConnectors.push(i), t.connect(i), i.connect(this.masterVolume), this;
                    }
                },
                removeEffect: {
                    enumerable: true,
                    value: function(t) {
                        var n = this.effects.indexOf(t);
                        if (n === -1) return console.warn("Cannot remove effect that is not applied to this group."), this;
                        var i = n === 0 ? this.mergeGainNode : this.effectConnectors[n - 1];
                        i.disconnect();
                        var s = this.effectConnectors[n];
                        s.disconnect(), t.disconnect(s), this.effectConnectors.splice(n, 1), this.effects.splice(n, 1);
                        var r;
                        return r = n > this.effects.length - 1 || this.effects.length === 0 ? this.masterVolume : this.effects[n], i.connect(r), this;
                    }
                }
            }), e.Effects = {};
            var l = Object.create(null, {
                connect: {
                    enumerable: true,
                    value: function(t) {
                        return this.outputNode.connect(t), this;
                    }
                },
                disconnect: {
                    enumerable: true,
                    value: function(t) {
                        return this.outputNode.disconnect(t), this;
                    }
                }
            });
            e.Effects.Delay = function(t) {
                this.options = {}, t = t || this.options;
                var n = {
                    feedback: 0.5,
                    time: 0.3,
                    mix: 0.5
                };
                this.inputNode = e.context.createGain(), this.outputNode = e.context.createGain(), this.dryGainNode = e.context.createGain(), this.wetGainNode = e.context.createGain(), this.feedbackGainNode = e.context.createGain(), this.delayNode = e.context.createDelay(), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.delayNode.connect(this.feedbackGainNode), this.feedbackGainNode.connect(this.delayNode), this.inputNode.connect(this.delayNode), this.delayNode.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                for (var i in n) this[i] = t[i], this[i] = this[i] === void 0 || this[i] === null ? n[i] : this[i];
            }, e.Effects.Delay.prototype = Object.create(l, {
                mix: {
                    enumerable: true,
                    get: function() {
                        return this.options.mix;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = e.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = e.Util.getWetLevel(this.mix));
                    }
                },
                time: {
                    enumerable: true,
                    get: function() {
                        return this.options.time;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 180) && (this.options.time = t, this.delayNode.delayTime.value = t);
                    }
                },
                feedback: {
                    enumerable: true,
                    get: function() {
                        return this.options.feedback;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.feedback = parseFloat(t, 10), this.feedbackGainNode.gain.value = this.feedback);
                    }
                }
            }), e.Effects.Compressor = function(t) {
                this.options = {}, t = t || this.options;
                var n = {
                    threshold: -24,
                    knee: 30,
                    attack: 3e-3,
                    release: 0.25,
                    ratio: 12
                };
                this.inputNode = this.compressorNode = e.context.createDynamicsCompressor(), this.outputNode = e.context.createGain(), this.compressorNode.connect(this.outputNode);
                for (var i in n) this[i] = t[i], this[i] = this[i] === void 0 || this[i] === null ? n[i] : this[i];
            }, e.Effects.Compressor.prototype = Object.create(l, {
                threshold: {
                    enumerable: true,
                    get: function() {
                        return this.compressorNode.threshold.value;
                    },
                    set: function(t) {
                        e.Util.isInRange(t, -100, 0) && (this.compressorNode.threshold.value = t);
                    }
                },
                knee: {
                    enumerable: true,
                    get: function() {
                        return this.compressorNode.knee.value;
                    },
                    set: function(t) {
                        e.Util.isInRange(t, 0, 40) && (this.compressorNode.knee.value = t);
                    }
                },
                attack: {
                    enumerable: true,
                    get: function() {
                        return this.compressorNode.attack.value;
                    },
                    set: function(t) {
                        e.Util.isInRange(t, 0, 1) && (this.compressorNode.attack.value = t);
                    }
                },
                release: {
                    enumerable: true,
                    get: function() {
                        return this.compressorNode.release.value;
                    },
                    set: function(t) {
                        e.Util.isInRange(t, 0, 1) && (this.compressorNode.release.value = t);
                    }
                },
                ratio: {
                    enumerable: true,
                    get: function() {
                        return this.compressorNode.ratio.value;
                    },
                    set: function(t) {
                        e.Util.isInRange(t, 1, 20) && (this.compressorNode.ratio.value = t);
                    }
                },
                getCurrentGainReduction: function() {
                    return this.compressorNode.reduction;
                }
            }), e.Effects.LowPassFilter = function(t) {
                x.call(this, t, "lowpass");
            }, e.Effects.HighPassFilter = function(t) {
                x.call(this, t, "highpass");
            };
            var L = Object.create(l, {
                frequency: {
                    enumerable: true,
                    get: function() {
                        return this.filterNode.frequency.value;
                    },
                    set: function(t) {
                        e.Util.isInRange(t, 10, 22050) && (this.filterNode.frequency.value = t);
                    }
                },
                peak: {
                    enumerable: true,
                    get: function() {
                        return this.filterNode.Q.value;
                    },
                    set: function(t) {
                        e.Util.isInRange(t, 1e-4, 1e3) && (this.filterNode.Q.value = t);
                    }
                }
            });
            e.Effects.LowPassFilter.prototype = L, e.Effects.HighPassFilter.prototype = L, e.Effects.Distortion = function(t) {
                this.options = {}, t = t || this.options;
                var n = {
                    gain: 0.5
                };
                this.waveShaperNode = e.context.createWaveShaper(), this.inputNode = this.outputNode = this.waveShaperNode;
                for (var i in n) this[i] = t[i], this[i] = this[i] === void 0 || this[i] === null ? n[i] : this[i];
            }, e.Effects.Distortion.prototype = Object.create(l, {
                gain: {
                    enumerable: true,
                    get: function() {
                        return this.options.gain;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.gain = t, this.adjustGain());
                    }
                },
                adjustGain: {
                    writable: false,
                    configurable: false,
                    enumerable: false,
                    value: function() {
                        for (var t, n = o.Util.isNumber(this.options.gain) ? parseInt(100 * this.options.gain, 10) : 50, i = 44100, s = new Float32Array(i), r = Math.PI / 180, c = 0; i > c; ++c) t = 2 * c / i - 1, s[c] = (3 + n) * t * 20 * r / (Math.PI + n * Math.abs(t));
                        this.waveShaperNode.curve = s;
                    }
                }
            }), e.Effects.Flanger = function(t) {
                this.options = {}, t = t || this.options;
                var n = {
                    time: 0.45,
                    speed: 0.2,
                    depth: 0.1,
                    feedback: 0.1,
                    mix: 0.5
                };
                this.inputNode = e.context.createGain(), this.outputNode = e.context.createGain(), this.inputFeedbackNode = e.context.createGain(), this.wetGainNode = e.context.createGain(), this.dryGainNode = e.context.createGain(), this.delayNode = e.context.createDelay(), this.oscillatorNode = e.context.createOscillator(), this.gainNode = e.context.createGain(), this.feedbackNode = e.context.createGain(), this.oscillatorNode.type = "sine", this.inputNode.connect(this.inputFeedbackNode), this.inputNode.connect(this.dryGainNode), this.inputFeedbackNode.connect(this.delayNode), this.inputFeedbackNode.connect(this.wetGainNode), this.delayNode.connect(this.wetGainNode), this.delayNode.connect(this.feedbackNode), this.feedbackNode.connect(this.inputFeedbackNode), this.oscillatorNode.connect(this.gainNode), this.gainNode.connect(this.delayNode.delayTime), this.dryGainNode.connect(this.outputNode), this.wetGainNode.connect(this.outputNode), this.oscillatorNode.start(0);
                for (var i in n) this[i] = t[i], this[i] = this[i] === void 0 || this[i] === null ? n[i] : this[i];
            }, e.Effects.Flanger.prototype = Object.create(l, {
                time: {
                    enumberable: true,
                    get: function() {
                        return this.options.time;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.time = t, this.delayNode.delayTime.value = o.Util.normalize(t, 1e-3, 0.02));
                    }
                },
                speed: {
                    enumberable: true,
                    get: function() {
                        return this.options.speed;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.speed = t, this.oscillatorNode.frequency.value = o.Util.normalize(t, 0.5, 5));
                    }
                },
                depth: {
                    enumberable: true,
                    get: function() {
                        return this.options.depth;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.depth = t, this.gainNode.gain.value = o.Util.normalize(t, 5e-4, 5e-3));
                    }
                },
                feedback: {
                    enumberable: true,
                    get: function() {
                        return this.options.feedback;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.feedback = t, this.feedbackNode.gain.value = o.Util.normalize(t, 0, 0.8));
                    }
                },
                mix: {
                    enumberable: true,
                    get: function() {
                        return this.options.mix;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = e.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = e.Util.getWetLevel(this.mix));
                    }
                }
            }), e.Effects.StereoPanner = function(t) {
                this.options = {}, t = t || this.options;
                var n = {
                    pan: 0
                };
                this.inputNode = e.context.createGain(), this.outputNode = e.context.createGain(), e.context.createStereoPanner ? (this.pannerNode = e.context.createStereoPanner(), this.inputNode.connect(this.pannerNode), this.pannerNode.connect(this.outputNode)) : e.context.createPanner ? (console.warn("Your browser does not support the StereoPannerNode. Will use PannerNode instead."), this.pannerNode = e.context.createPanner(), this.pannerNode.type = "equalpower", this.inputNode.connect(this.pannerNode), this.pannerNode.connect(this.outputNode)) : (console.warn("Your browser does not support the Panner effect."), this.inputNode.connect(this.outputNode));
                for (var i in n) this[i] = t[i], this[i] = this[i] === void 0 || this[i] === null ? n[i] : this[i];
            }, e.Effects.StereoPanner.prototype = Object.create(l, {
                pan: {
                    enumerable: true,
                    get: function() {
                        return this.options.pan;
                    },
                    set: function(t) {
                        if (o.Util.isInRange(t, -1, 1) && (this.options.pan = t, this.pannerNode)) {
                            var n = this.pannerNode.toString().indexOf("StereoPannerNode") > -1;
                            n ? this.pannerNode.pan.value = t : this.pannerNode.setPosition(t, 0, 1 - Math.abs(t));
                        }
                    }
                }
            }), e.Effects.Convolver = function(t, n) {
                this.options = {}, t = t || this.options;
                var i = this,
                    s = new XMLHttpRequest(),
                    r = {
                        mix: 0.5
                    };
                this.callback = n, this.inputNode = e.context.createGain(), this.convolverNode = e.context.createConvolver(), this.outputNode = e.context.createGain(), this.wetGainNode = e.context.createGain(), this.dryGainNode = e.context.createGain(), this.inputNode.connect(this.convolverNode), this.convolverNode.connect(this.wetGainNode), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.wetGainNode.connect(this.outputNode);
                for (var c in r) this[c] = t[c], this[c] = this[c] === void 0 || this[c] === null ? r[c] : this[c];
                return t.impulse ? (s.open("GET", t.impulse, true), s.responseType = "arraybuffer", s.onload = function(g) {
                    var I = g.target.response;
                    e.context.decodeAudioData(I, function(m) {
                        i.convolverNode.buffer = m, i.callback && o.Util.isFunction(i.callback) && i.callback();
                    }, function(m) {
                        m = m || new Error("Error decoding impulse file"), i.callback && o.Util.isFunction(i.callback) && i.callback(m);
                    });
                }, s.onreadystatechange = function(g) {
                    s.readyState === 4 && s.status !== 200 && console.error("Error while fetching " + t.impulse + ". " + s.statusText);
                }, void s.send()) : void console.error("No impulse file specified.");
            }, e.Effects.Convolver.prototype = Object.create(l, {
                mix: {
                    enumerable: true,
                    get: function() {
                        return this.options.mix;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = e.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = e.Util.getWetLevel(this.mix));
                    }
                }
            }), e.Effects.PingPongDelay = function(t) {
                this.options = {}, t = t || this.options;
                var n = {
                    feedback: 0.5,
                    time: 0.3,
                    mix: 0.5
                };
                this.inputNode = e.context.createGain(), this.outputNode = e.context.createGain(), this.delayNodeLeft = e.context.createDelay(), this.delayNodeRight = e.context.createDelay(), this.dryGainNode = e.context.createGain(), this.wetGainNode = e.context.createGain(), this.feedbackGainNode = e.context.createGain(), this.channelMerger = e.context.createChannelMerger(2), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.delayNodeLeft.connect(this.channelMerger, 0, 0), this.delayNodeRight.connect(this.channelMerger, 0, 1), this.delayNodeLeft.connect(this.delayNodeRight), this.feedbackGainNode.connect(this.delayNodeLeft), this.delayNodeRight.connect(this.feedbackGainNode), this.inputNode.connect(this.feedbackGainNode), this.channelMerger.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                for (var i in n) this[i] = t[i], this[i] = this[i] === void 0 || this[i] === null ? n[i] : this[i];
            }, e.Effects.PingPongDelay.prototype = Object.create(l, {
                mix: {
                    enumerable: true,
                    get: function() {
                        return this.options.mix;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = e.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = e.Util.getWetLevel(this.mix));
                    }
                },
                time: {
                    enumerable: true,
                    get: function() {
                        return this.options.time;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 180) && (this.options.time = t, this.delayNodeLeft.delayTime.value = t, this.delayNodeRight.delayTime.value = t);
                    }
                },
                feedback: {
                    enumerable: true,
                    get: function() {
                        return this.options.feedback;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.feedback = parseFloat(t, 10), this.feedbackGainNode.gain.value = this.feedback);
                    }
                }
            }), e.Effects.Reverb = function(t) {
                this.options = {}, t = t || this.options;
                var n = {
                    mix: 0.5,
                    time: 0.01,
                    decay: 0.01,
                    reverse: false
                };
                this.inputNode = e.context.createGain(), this.reverbNode = e.context.createConvolver(), this.outputNode = e.context.createGain(), this.wetGainNode = e.context.createGain(), this.dryGainNode = e.context.createGain(), this.inputNode.connect(this.reverbNode), this.reverbNode.connect(this.wetGainNode), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.wetGainNode.connect(this.outputNode);
                for (var i in n) this[i] = t[i], this[i] = this[i] === void 0 || this[i] === null ? n[i] : this[i];
                b.bind(this)();
            }, e.Effects.Reverb.prototype = Object.create(l, {
                mix: {
                    enumerable: true,
                    get: function() {
                        return this.options.mix;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = e.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = e.Util.getWetLevel(this.mix));
                    }
                },
                time: {
                    enumerable: true,
                    get: function() {
                        return this.options.time;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 1e-4, 10) && (this.options.time = t, b.bind(this)());
                    }
                },
                decay: {
                    enumerable: true,
                    get: function() {
                        return this.options.decay;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 1e-4, 10) && (this.options.decay = t, b.bind(this)());
                    }
                },
                reverse: {
                    enumerable: true,
                    get: function() {
                        return this.options.reverse;
                    },
                    set: function(t) {
                        o.Util.isBool(t) && (this.options.reverse = t, b.bind(this)());
                    }
                }
            }), e.Effects.Tremolo = function(t) {
                this.options = {}, t = t || this.options;
                var n = {
                    speed: 4,
                    depth: 1,
                    mix: 0.8
                };
                this.inputNode = e.context.createGain(), this.outputNode = e.context.createGain(), this.dryGainNode = e.context.createGain(), this.wetGainNode = e.context.createGain(), this.tremoloGainNode = e.context.createGain(), this.tremoloGainNode.gain.value = 0, this.lfoNode = e.context.createOscillator(), this.shaperNode = e.context.createWaveShaper(), this.shaperNode.curve = new Float32Array([0, 1]), this.shaperNode.connect(this.tremoloGainNode.gain), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.lfoNode.connect(this.shaperNode), this.lfoNode.type = "sine", this.lfoNode.start(0), this.inputNode.connect(this.tremoloGainNode), this.tremoloGainNode.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                for (var i in n) this[i] = t[i], this[i] = this[i] === void 0 || this[i] === null ? n[i] : this[i];
            }, e.Effects.Tremolo.prototype = Object.create(l, {
                mix: {
                    enumerable: true,
                    get: function() {
                        return this.options.mix;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = e.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = e.Util.getWetLevel(this.mix));
                    }
                },
                speed: {
                    enumerable: true,
                    get: function() {
                        return this.options.speed;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 20) && (this.options.speed = t, this.lfoNode.frequency.value = t);
                    }
                },
                depth: {
                    enumerable: true,
                    get: function() {
                        return this.options.depth;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.depth = t, this.shaperNode.curve = new Float32Array([1 - t, 1]));
                    }
                }
            }), e.Effects.DubDelay = function(t) {
                this.options = {}, t = t || this.options;
                var n = {
                    feedback: 0.6,
                    time: 0.7,
                    mix: 0.5,
                    cutoff: 700
                };
                this.inputNode = e.context.createGain(), this.outputNode = e.context.createGain(), this.dryGainNode = e.context.createGain(), this.wetGainNode = e.context.createGain(), this.feedbackGainNode = e.context.createGain(), this.delayNode = e.context.createDelay(), this.bqFilterNode = e.context.createBiquadFilter(), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.inputNode.connect(this.wetGainNode), this.inputNode.connect(this.feedbackGainNode), this.feedbackGainNode.connect(this.bqFilterNode), this.bqFilterNode.connect(this.delayNode), this.delayNode.connect(this.feedbackGainNode), this.delayNode.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                for (var i in n) this[i] = t[i], this[i] = this[i] === void 0 || this[i] === null ? n[i] : this[i];
            }, e.Effects.DubDelay.prototype = Object.create(l, {
                mix: {
                    enumerable: true,
                    get: function() {
                        return this.options.mix;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = e.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = e.Util.getWetLevel(this.mix));
                    }
                },
                time: {
                    enumerable: true,
                    get: function() {
                        return this.options.time;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 180) && (this.options.time = t, this.delayNode.delayTime.value = t);
                    }
                },
                feedback: {
                    enumerable: true,
                    get: function() {
                        return this.options.feedback;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.feedback = parseFloat(t, 10), this.feedbackGainNode.gain.value = this.feedback);
                    }
                },
                cutoff: {
                    enumerable: true,
                    get: function() {
                        return this.options.cutoff;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 4e3) && (this.options.cutoff = t, this.bqFilterNode.frequency.value = this.cutoff);
                    }
                }
            }), e.Effects.RingModulator = function(t) {
                this.options = {}, t = t || this.options;
                var n = {
                    speed: 30,
                    distortion: 1,
                    mix: 0.5
                };
                this.inputNode = e.context.createGain(), this.outputNode = e.context.createGain(), this.dryGainNode = e.context.createGain(), this.wetGainNode = e.context.createGain(), this.vIn = e.context.createOscillator(), this.vIn.start(0), this.vInGain = e.context.createGain(), this.vInGain.gain.value = 0.5, this.vInInverter1 = e.context.createGain(), this.vInInverter1.gain.value = -1, this.vInInverter2 = e.context.createGain(), this.vInInverter2.gain.value = -1, this.vInDiode1 = new y(e.context), this.vInDiode2 = new y(e.context), this.vInInverter3 = e.context.createGain(), this.vInInverter3.gain.value = -1, this.vcInverter1 = e.context.createGain(), this.vcInverter1.gain.value = -1, this.vcDiode3 = new y(e.context), this.vcDiode4 = new y(e.context), this.outGain = e.context.createGain(), this.outGain.gain.value = 3, this.compressor = e.context.createDynamicsCompressor(), this.compressor.threshold.value = -24, this.compressor.ratio.value = 16, this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.inputNode.connect(this.vcInverter1), this.inputNode.connect(this.vcDiode4.node), this.vcInverter1.connect(this.vcDiode3.node), this.vIn.connect(this.vInGain), this.vInGain.connect(this.vInInverter1), this.vInGain.connect(this.vcInverter1), this.vInGain.connect(this.vcDiode4.node), this.vInInverter1.connect(this.vInInverter2), this.vInInverter1.connect(this.vInDiode2.node), this.vInInverter2.connect(this.vInDiode1.node), this.vInDiode1.connect(this.vInInverter3), this.vInDiode2.connect(this.vInInverter3), this.vInInverter3.connect(this.compressor), this.vcDiode3.connect(this.compressor), this.vcDiode4.connect(this.compressor), this.compressor.connect(this.outGain), this.outGain.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                for (var i in n) this[i] = t[i], this[i] = this[i] === void 0 || this[i] === null ? n[i] : this[i];
            };
            var y = function(t) {
                this.context = t, this.node = this.context.createWaveShaper(), this.vb = 0.2, this.vl = 0.4, this.h = 1, this.setCurve();
            };
            return y.prototype.setDistortion = function(t) {
                return this.h = t, this.setCurve();
            }, y.prototype.setCurve = function() {
                var t, n, i, s, r, c, g;
                for (n = 1024, r = new Float32Array(n), t = c = 0, g = r.length; g >= 0 ? g > c : c > g; t = g >= 0 ? ++c : --c) i = (t - n / 2) / (n / 2), i = Math.abs(i), s = i <= this.vb ? 0 : this.vb < i && i <= this.vl ? this.h * (Math.pow(i - this.vb, 2) / (2 * this.vl - 2 * this.vb)) : this.h * i - this.h * this.vl + this.h * (Math.pow(this.vl - this.vb, 2) / (2 * this.vl - 2 * this.vb)), r[t] = s;
                return this.node.curve = r;
            }, y.prototype.connect = function(t) {
                return this.node.connect(t);
            }, e.Effects.RingModulator.prototype = Object.create(l, {
                mix: {
                    enumerable: true,
                    get: function() {
                        return this.options.mix;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = e.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = e.Util.getWetLevel(this.mix));
                    }
                },
                speed: {
                    enumerable: true,
                    get: function() {
                        return this.options.speed;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 2e3) && (this.options.speed = t, this.vIn.frequency.value = t);
                    }
                },
                distortion: {
                    enumerable: true,
                    get: function() {
                        return this.options.distortion;
                    },
                    set: function(t) {
                        if (o.Util.isInRange(t, 0.2, 50)) {
                            this.options.distortion = parseFloat(t, 10);
                            for (var n = [this.vInDiode1, this.vInDiode2, this.vcDiode3, this.vcDiode4], i = 0, s = n.length; s > i; i++) n[i].setDistortion(t);
                        }
                    }
                }
            }), e.Effects.Quadrafuzz = function(t) {
                this.options = {}, t = t || this.options;
                var n = {
                    lowGain: 0.6,
                    midLowGain: 0.8,
                    midHighGain: 0.5,
                    highGain: 0.6
                };
                this.inputNode = o.context.createGain(), this.outputNode = o.context.createGain(), this.dryGainNode = o.context.createGain(), this.wetGainNode = o.context.createGain(), this.lowpassLeft = o.context.createBiquadFilter(), this.lowpassLeft.type = "lowpass", this.lowpassLeft.frequency.value = 147, this.lowpassLeft.Q.value = 0.7071, this.bandpass1Left = o.context.createBiquadFilter(), this.bandpass1Left.type = "bandpass", this.bandpass1Left.frequency.value = 587, this.bandpass1Left.Q.value = 0.7071, this.bandpass2Left = o.context.createBiquadFilter(), this.bandpass2Left.type = "bandpass", this.bandpass2Left.frequency.value = 2490, this.bandpass2Left.Q.value = 0.7071, this.highpassLeft = o.context.createBiquadFilter(), this.highpassLeft.type = "highpass", this.highpassLeft.frequency.value = 4980, this.highpassLeft.Q.value = 0.7071, this.overdrives = [];
                for (var i = 0; 4 > i; i++) this.overdrives[i] = o.context.createWaveShaper(), this.overdrives[i].curve = N();
                this.inputNode.connect(this.wetGainNode), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode);
                var s = [this.lowpassLeft, this.bandpass1Left, this.bandpass2Left, this.highpassLeft];
                for (i = 0; i < s.length; i++) this.wetGainNode.connect(s[i]), s[i].connect(this.overdrives[i]), this.overdrives[i].connect(this.outputNode);
                for (var r in n) this[r] = t[r], this[r] = this[r] === void 0 || this[r] === null ? n[r] : this[r];
            }, e.Effects.Quadrafuzz.prototype = Object.create(l, {
                lowGain: {
                    enumerable: true,
                    get: function() {
                        return this.options.lowGain;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.lowGain = t, this.overdrives[0].curve = N(o.Util.normalize(this.lowGain, 0, 150)));
                    }
                },
                midLowGain: {
                    enumerable: true,
                    get: function() {
                        return this.options.midLowGain;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.midLowGain = t, this.overdrives[1].curve = N(o.Util.normalize(this.midLowGain, 0, 150)));
                    }
                },
                midHighGain: {
                    enumerable: true,
                    get: function() {
                        return this.options.midHighGain;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.midHighGain = t, this.overdrives[2].curve = N(o.Util.normalize(this.midHighGain, 0, 150)));
                    }
                },
                highGain: {
                    enumerable: true,
                    get: function() {
                        return this.options.highGain;
                    },
                    set: function(t) {
                        o.Util.isInRange(t, 0, 1) && (this.options.highGain = t, this.overdrives[3].curve = N(o.Util.normalize(this.highGain, 0, 150)));
                    }
                }
            }), e;
        })(typeof window < "u" ? window : q);
    }(R)), R.exports;
}
var P = V();
const _ = A(P),
    W = M({
        __proto__: null,
        default: _
    }, [P]);
export {
    W as P
};