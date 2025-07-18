import I from "./EOBYE-xC.js";
import { _ as v, a2 as p, o as s, w as d, b as c, a as t, e as L, d as y, a3 as B, k as P, s as u, h as R, v as $, x as V, B as r, A, aW as Z, c as x, aK as b, aH as E, aa as k, Z as l, ab as N, aI as J, aJ as K, aG as O, J as g, a1 as G, ac as U } from "./DRwXc3fR.js";
import z from "./CxVmN9ol.js";
import D from "./BxRX0Qpb.js";
import { u as W } from "./CI8pHMb7.js";
import { _ as j } from "./DhyUotyb.js";
const X = {}, Y = { class: "colophon | body-1" };
function ee(w, o) {
  const i = L, a = z, f = D, n = B;
  return s(), p(n, { tag: "header", class: "holding-site-header" }, { default: d(() => [c(i, { to: "https://kodemedia.com/", target: "_blank", rel: "noopener", class: "logo | body-1" }, { default: d(() => o[0] || (o[0] = [y("Kode")])), _: 1 }), c(a, { class: "audio-button", theme: "black" }), t("span", Y, [c(f, { class: "h-[0.9em]" })]), o[1] || (o[1] = t("div", { class: "timer | body-1 | md-down:hidden" }, " Full experience launching soon ", -1)), o[2] || (o[2] = t("div", { class: "timer | body-1 | md:hidden !leading-[1.45]" }, [y(" Full experience"), t("br"), y("launching soon ")], -1))]), _: 1 });
}
const te = v(X, [["render", ee], ["__scopeId", "data-v-deee47c6"]]), oe = { class: "newsletter | body-1" }, se = { class: "email-states" }, ae = { key: 0, class: "body-2 | col-start-1 row-start-1 py-2" }, ne = { key: 0, class: "body-2 | col-start-1 row-start-1 py-2" }, re = { class: "field-wrapper" }, le = { class: "buttons" }, ie = { key: 0, class: "countdown | body-1" }, de = { __name: "SiteFooter", setup(w) {
  const { gsap: o } = P(), i = u(null), a = u(null), f = u(null), n = u(false), _ = u(false), m = R(), { isMedium: Q } = W(), h = u(false);
  $(async () => {
    await V(), r(h, A("alt_layout"));
  }), Z(f, () => m.setQrCodeVisible(false));
  async function T() {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(g(a))) {
      r(n, true);
      return;
    }
    try {
      const e = await $fetch("/subscribeToMailchimp", { method: "POST", params: { email: g(a) } });
      JSON.parse(e).status === 200 ? (r(n, false), r(_, true), g(i).reset(), g(i).querySelector("input").blur(), o.delayedCall(3, () => r(_, false))) : r(n, true);
    } catch (e) {
      console.error("Newsletter submission error:", e), r(n, true), r(_, false);
    }
  }
  function M() {
    m.setQrCodeVisible(!m.isQrCodeVisible);
  }
  return (F, e) => {
    const S = z, C = O, q = B;
    return s(), p(q, { tag: "footer", class: "holding-site-footer" }, { default: d(() => [e[5] || (e[5] = t("span", { class: "copyright | body-1" }, "\xA9\xA02024", -1)), t("div", oe, [t("form", { class: "form", onSubmit: E(T, ["prevent"]), ref_key: "formRef", ref: i }, [t("div", se, [c(k, { name: "states" }, { default: d(() => [l(_) ? (s(), x("div", ae, " Subscribed! ")) : b("", true)]), _: 1 }), c(k, { name: "states" }, { default: d(() => [l(n) ? (s(), x("div", ne, " Please enter a valid email address ")) : b("", true)]), _: 1 })]), t("div", re, [e[1] || (e[1] = t("span", { class: "bracket bracket-left | col-start-1" }, "[", -1)), N(t("input", { class: "email-field", type: "email", autocomplete: "email", maxlength: "256", placeholder: "Enter your email address", inputmode: "email", "onUpdate:modelValue": e[0] || (e[0] = (H) => J(a) ? a.value = H : null), required: "" }, null, 512), [[K, l(a)]]), e[2] || (e[2] = t("span", { class: "bracket bracket-right | col-start-3" }, "]", -1))])], 544)]), t("div", le, [l(h) ? (s(), p(S, { key: 0, class: "pointer-events-auto", theme: "orange" })) : b("", true), l(Q) ? (s(), p(C, { key: 1, class: "button-ar | body-1", onClick: M, "data-qr-visible": l(m).isQrCodeVisible, ref_key: "arButtonRef", ref: f }, { default: d(() => e[3] || (e[3] = [y("AR")])), _: 1 }, 8, ["data-qr-visible"])) : (s(), p(C, { key: 2, to: "https://kodeimmersive-ar.pages.dev/", target: "_blank", rel: "noopener", class: "button-ar | body-1" }, { default: d(() => e[4] || (e[4] = [y("AR")])), _: 1 }))]), e[6] || (e[6] = t("p", { class: "colophon | body-1" }, " Sign up to be part of our growing tech community ", -1)), l(h) ? (s(), x("div", ie, " Full experience launching soon ")) : b("", true)]), _: 1 });
  };
} }, ce = v(de, [["__scopeId", "data-v-3f5d7b0e"]]), ue = { class: "fixed right-[0.625rem] md:right-[1.375rem] bottom-12 md:bottom-14 z-[60] w-[70vw] md:w-[267px]", src: j, alt: "QR Code", loading: "eager", decoding: "async", draggable: "false" }, _e = { __name: "holding", setup(w) {
  const o = R(), i = u(false);
  return $(async () => {
    await V(), r(i, A("alt_layout"));
  }), (a, f) => {
    const n = I, _ = te, m = ce;
    return s(), x("div", null, [c(n, { class: "fixed inset-0 z-40 md-down:invisible", "trail-lifetime": 400 }), l(i) ? b("", true) : (s(), p(_, { key: 0, class: "fixed z-10 inset-x-0 top-0" })), t("main", null, [G(a.$slots, "default", {}, void 0, true)]), c(m, { class: "fixed z-10 inset-x-0 bottom-0" }), c(k, null, { default: d(() => [N(t("img", ue, null, 512), [[U, l(o).isQrCodeVisible]])]), _: 1 })]);
  };
} }, xe = v(_e, [["__scopeId", "data-v-d0605a4b"]]);
export {
  xe as default
};