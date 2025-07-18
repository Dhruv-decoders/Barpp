import {
    _ as i,
    i as l,
    c as d,
    o as p,
    a as e,
    a8 as s,
    Z as n,
    C as u,
    E as _
} from "./DRwXc3fR.js";
const b = ["data-theme"],
    m = {
        class: "label"
    },
    S = {
        __name: "AudioButton",
        props: {
            theme: {
                type: String,
                required: true
            }
        },
        setup(o) {
            const t = l();

            function r() {
                t.isSoundEnabled && u.emit(_.BUTTON_HOVER);
            }

            function c() {
                t.setSoundEnabled(!t.isSoundEnabled);
            }
            return (f, a) => (p(), d("button", {
                class: "component-audio-button",
                "data-theme": o.theme,
                onClick: c,
                onPointerenter: r
            }, [a[0] || (a[0] = e("span", {
                class: "bracket bracket-left | col-start-1"
            }, "[", -1)), e("span", m, [e("span", {
                class: s(["col-start-1 row-start-1 whitespace-nowrap", {
                    invisible: !n(t).isSoundEnabled
                }])
            }, "Sound On", 2), e("span", {
                class: s(["col-start-1 row-start-1 whitespace-nowrap", {
                    invisible: n(t).isSoundEnabled
                }])
            }, "Sound Off", 2)]), a[1] || (a[1] = e("span", {
                class: "bracket bracket-right | col-start-3"
            }, "]", -1))], 40, b));
        }
    },
    h = i(S, [
        ["__scopeId", "data-v-8cca7120"]
    ]);
export {
    h as
    default
};