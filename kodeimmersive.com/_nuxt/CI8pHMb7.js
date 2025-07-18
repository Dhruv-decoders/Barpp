import {
    p as u,
    aD as t
} from "./DRwXc3fR.js";

function r() {
    const {
        width: e
    } = u(), o = t(() => e.value < 1024), i = t(() => e.value >= 768), s = t(() => e.value >= 1024);
    return {
        isMobile: o,
        isMedium: i,
        isDesktop: s
    };
}
export {
    r as u
};