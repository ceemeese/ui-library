import { defineComponent as O, useModel as Kt, openBlock as f, createBlock as $, unref as y, mergeProps as G, mergeModels as Gt, useAttrs as qt, computed as de, createElementBlock as b, createVNode as h, createElementVNode as c, toDisplayString as w, withCtx as _, normalizeClass as Z, createCommentVNode as C, createTextVNode as U, renderSlot as I, reactive as Pe, resolveComponent as H, ref as fe, onMounted as pt, onUnmounted as ht, Fragment as T, renderList as N, createSlots as Yt, normalizeStyle as ne, withModifiers as Xt } from "vue";
import gt from "primevue/inputtext";
import Re from "primevue/iconfield";
import De from "primevue/inputicon";
import ke from "primevue/iftalabel";
import bt from "primevue/message";
import Qt from "primevue/checkbox";
import en from "primevue/select";
import tn from "primevue/datepicker";
import le from "primevue/button";
import nn from "primevue/password";
import { Form as he } from "@primevue/forms";
import { zodResolver as on } from "@primevue/forms/resolvers/zod";
import { RouterLink as rn } from "vue-router";
import sn from "primevue/menu";
import Be from "primevue/avatar";
import an from "primevue/datatable";
import xe from "primevue/column";
import { FilterMatchMode as un } from "@primevue/core";
import ln from "primevue/dialog";
import cn from "primevue/treetable";
import be from "primevue/tag";
import dn from "primevue/progressspinner";
const Fe = /* @__PURE__ */ O({
  __name: "BaseDatePicker",
  props: /* @__PURE__ */ Gt({
    invalid: { type: Boolean },
    disabled: { type: Boolean },
    variant: {},
    fluid: { type: Boolean },
    size: {},
    showIcon: { type: Boolean },
    showButtonBar: { type: Boolean },
    stepMinute: {},
    placeholder: {},
    hourFormat: {},
    showTime: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Kt(e, "modelValue");
    return (n, o) => (f(), $(y(tn), G({
      modelValue: t.value,
      "onUpdate:modelValue": o[0] || (o[0] = (i) => t.value = i)
    }, n.$attrs, {
      fluid: e.fluid,
      disabled: e.disabled,
      invalid: e.invalid,
      variant: e.variant,
      size: e.size,
      "show-icon": e.showIcon,
      "show-button-bar": e.showButtonBar,
      "show-time": e.showTime,
      "hour-format": e.hourFormat,
      "step-minute": e.stepMinute,
      placeholder: e.placeholder,
      class: "ui:w-full custom-datepicker",
      dateFormat: "dd/mm/yy"
    }), null, 16, ["modelValue", "fluid", "disabled", "invalid", "variant", "size", "show-icon", "show-button-bar", "show-time", "hour-format", "step-minute", "placeholder"]));
  }
}), fn = { class: "ui:flex ui:flex-col ui:gap-1 ui:w-full" }, mn = {
  key: 0,
  class: "ui:flex ui:items-center ui:gap-3 ui:pt-2"
}, pn = ["for"], hn = ["for"], gn = ["for"], bn = ["for"], vn = { class: "ui:h-[24px] ui:w-full" }, yn = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "BaseInput",
  props: {
    modelValue: { type: [String, Number, Boolean, Date] },
    field: {},
    label: {},
    type: { default: "text" },
    placeholder: { default: "" },
    error: {},
    icon: {},
    size: { default: "medium" },
    primary: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    options: {},
    optionLabel: {},
    optionValue: {},
    stepMinute: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = qt(), i = de(() => o.id || n.label), s = t, r = (a) => {
      const u = a?.target ? a.target.value : a;
      s("update:modelValue", u);
    };
    return (a, u) => (f(), b("div", fn, [
      e.type === "boolean" ? (f(), b("div", mn, [
        h(y(Qt), G(a.$attrs, {
          id: i.value,
          "model-value": e.modelValue,
          binary: !0,
          invalid: !!e.error,
          "onUpdate:modelValue": r
        }), null, 16, ["id", "model-value", "invalid"]),
        c("label", { for: e.label }, w(e.label), 9, pn)
      ])) : e.type === "select" ? (f(), $(y(ke), {
        key: 1,
        variant: "on"
      }, {
        default: _(() => [
          h(y(en), G(a.$attrs, {
            id: i.value,
            type: e.type,
            "model-value": e.modelValue,
            invalid: !!e.error,
            class: "ui:w-full",
            options: e.options,
            "option-label": e.optionLabel,
            "option-value": e.optionValue,
            placeholder: e.placeholder,
            checkmark: "",
            highlightOnSelect: !1,
            disabled: e.disabled,
            "onUpdate:modelValue": r
          }), null, 16, ["id", "type", "model-value", "invalid", "options", "option-label", "option-value", "placeholder", "disabled"]),
          c("label", { for: e.label }, w(e.label), 9, hn)
        ]),
        _: 1
      })) : e.type === "date" || e.type === "time" ? (f(), $(y(ke), {
        key: 2,
        variant: "on"
      }, {
        default: _(() => [
          h(y(Re), null, {
            default: _(() => [
              e.icon ? (f(), $(y(De), {
                key: 0,
                class: Z(["pi", e.icon])
              }, null, 8, ["class"])) : C("", !0),
              h(Fe, G(a.$attrs, {
                id: i.value,
                "model-value": e.modelValue,
                "onUpdate:modelValue": r,
                updateModelType: e.type === "time" ? "string" : "date",
                "time-only": e.type === "time",
                fluid: !0,
                invalid: !!e.error,
                placeholder: e.placeholder,
                disabled: e.disabled,
                "step-minute": e.stepMinute
              }), null, 16, ["id", "model-value", "updateModelType", "time-only", "invalid", "placeholder", "disabled", "step-minute"])
            ]),
            _: 1
          }),
          c("label", { for: e.label }, w(e.label), 9, gn)
        ]),
        _: 1
      })) : (f(), $(y(ke), {
        key: 3,
        variant: "on"
      }, {
        default: _(() => [
          h(y(Re), null, {
            default: _(() => [
              e.icon ? (f(), $(y(De), {
                key: 0,
                class: Z(["pi", e.icon])
              }, null, 8, ["class"])) : C("", !0),
              h(y(gt), G(a.$attrs, {
                id: i.value,
                type: e.type,
                value: e.modelValue,
                onInput: r,
                class: ["ui:w-full ui:transition-all ui:duration-200", []],
                disabled: e.disabled,
                invalid: !!e.error
              }), null, 16, ["id", "type", "value", "disabled", "invalid"])
            ]),
            _: 1
          }),
          c("label", { for: e.label }, w(e.label), 9, bn)
        ]),
        _: 1
      })),
      c("div", vn, [
        e.error ? (f(), $(y(bt), {
          key: 0,
          severity: "error",
          size: "small",
          class: "animate-fade-in ui:!text-[10px]",
          variant: "simple"
        }, {
          default: _(() => [
            U(w(e.error), 1)
          ]),
          _: 1
        })) : C("", !0)
      ])
    ]));
  }
}), _n = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, W = /* @__PURE__ */ _n(yn, [["__scopeId", "data-v-e67eb9fc"]]), R = /* @__PURE__ */ O({
  __name: "BaseButton",
  props: {
    label: {},
    disabled: { type: Boolean, default: !1 },
    raised: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    variant: {},
    badge: {},
    icon: {},
    size: {},
    loading: { type: Boolean, default: !1 },
    ariaLabel: {},
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    return (i, s) => (f(), $(y(le), {
      label: n.label,
      disabled: n.disabled || n.loading,
      raised: n.raised,
      rounded: n.rounded,
      variant: n.variant,
      badge: n.badge,
      icon: n.icon,
      size: n.size,
      "aria-label": n.ariaLabel,
      loading: n.loading,
      type: n.type,
      onClick: s[0] || (s[0] = (r) => o("click", r)),
      class: Z(["ui:!transition-transform ui:!transform ui:!duration-200 ui:active:!scale-95 ui:!ease-in-out ui:whitespace-nowrap ui:flex-shrink-0 ui:!text-[10px] ui:font-black ui:uppercase ui:tracking-wider ui:px-4 ui:py-2.5 ui:rounded-xl", i.$attrs.class])
    }, {
      default: _(() => [
        I(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["label", "disabled", "raised", "rounded", "variant", "badge", "icon", "size", "aria-label", "loading", "type", "class"]));
  }
}), wn = { class: "ui:flex ui:flex-col ui:gap-1 ui:w-full" }, kn = ["for"], xn = { class: "ui:h-[24px] ui:w-full" }, ie = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "BasePassword",
  props: {
    modelValue: {},
    label: {},
    error: {},
    feedback: { type: Boolean, default: !1 },
    toggleMask: { type: Boolean, default: !0 },
    showClear: { type: Boolean, default: !1 },
    size: { default: "medium" },
    disabled: { type: Boolean, default: !1 },
    name: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = (i) => {
      const s = i.target;
      n("update:modelValue", s.value);
    };
    return (i, s) => (f(), b("div", wn, [
      h(y(ke), null, {
        default: _(() => [
          h(y(nn), G({ name: e.name }, i.$attrs, {
            id: e.label,
            value: e.modelValue,
            onInput: o,
            feedback: e.feedback,
            toggleMask: e.toggleMask,
            invalid: !!e.error,
            size: e.size,
            showClear: e.showClear,
            disabled: e.disabled,
            fluid: "",
            pt: {
              input: {
                class: "ui:w-full ui:transition-all ui:duration-200"
              }
            }
          }), null, 16, ["name", "id", "value", "feedback", "toggleMask", "invalid", "size", "showClear", "disabled"]),
          c("label", { for: e.label }, w(e.label), 9, kn)
        ]),
        _: 1
      }),
      c("div", xn, [
        e.error ? (f(), $(y(bt), {
          key: 0,
          severity: "error",
          size: "small",
          class: "animate-fade-in ui:!text-[10px]",
          variant: "simple"
        }, {
          default: _(() => [
            U(w(e.error), 1)
          ]),
          _: 1
        })) : C("", !0)
      ])
    ]));
  }
}), $n = { class: "ui:max-w-md ui:mx-auto ui:p-8 ui:bg-white ui:rounded-2xl ui:shadow-xl ui:border ui:border-gray-100 ui:shrink-0" }, zn = {
  key: 0,
  class: "ui:flex ui:justify-center ui:mt-2"
}, Zn = {
  key: 1,
  class: "ui:text-center ui:text-xs ui:text-gray-500 ui:mt-6"
}, Sn = /* @__PURE__ */ O({
  __name: "LoginForm",
  props: {
    forgotPasswordLabel: {},
    forgotPasswordRoute: {},
    registerLabel: {},
    registerRoute: {},
    loading: { type: Boolean },
    resolver: {}
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = Pe({
      username: "",
      password: ""
    }), o = t, i = (s) => {
      s.valid && o("submit", s.values);
    };
    return (s, r) => {
      const a = H("RouterLink");
      return f(), b("div", $n, [
        r[3] || (r[3] = c("div", { class: "ui:text-center ui:mb-8" }, [
          c("h2", { class: "ui:text-2xl ui:font-extrabold ui:text-gray-900" }, "Bienvenido"),
          c("p", { class: "ui:text-gray-500 ui:mt-2" }, "Introduce tus credenciales para acceder")
        ], -1)),
        h(y(he), {
          initialValues: n,
          onSubmit: i,
          class: "ui:flex ui:flex-col",
          resolver: e.resolver
        }, {
          default: _((u) => [
            h(W, {
              modelValue: n.username,
              "onUpdate:modelValue": r[0] || (r[0] = (l) => n.username = l),
              name: "username",
              label: "Usuario",
              icon: "pi-user",
              error: u.username?.error?.message
            }, null, 8, ["modelValue", "error"]),
            h(ie, {
              modelValue: n.password,
              "onUpdate:modelValue": r[1] || (r[1] = (l) => n.password = l),
              name: "password",
              label: "Contraseña",
              error: u.password?.error?.message
            }, null, 8, ["modelValue", "error"]),
            e.forgotPasswordRoute ? (f(), b("div", zn, [
              h(a, {
                to: { name: e.forgotPasswordRoute },
                class: "ui:text-sm ui:font-medium ui:hover:text-blue-500 ui:transition-colors"
              }, {
                default: _(() => [
                  U(w(e.forgotPasswordLabel || "¿Has olvidado tu contraseña?"), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ])) : C("", !0),
            h(R, {
              type: "submit",
              label: "Entrar",
              class: "ui:mt-6 ui:w-full ui:py-3",
              loading: e.loading
            }, null, 8, ["loading"]),
            e.registerRoute ? (f(), b("p", Zn, [
              r[2] || (r[2] = U(" ¿No tienes cuenta? ", -1)),
              h(a, {
                class: "ui:font-semibold ui:text-blue-600 ui:hover:underline",
                to: { name: e.registerRoute }
              }, {
                default: _(() => [
                  U(w(e.registerLabel || "Regístrate gratis"), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ])) : C("", !0)
          ]),
          _: 1
        }, 8, ["initialValues", "resolver"])
      ]);
    };
  }
});
function d(e, t, n) {
  function o(a, u) {
    if (a._zod || Object.defineProperty(a, "_zod", {
      value: {
        def: u,
        constr: r,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), a._zod.traits.has(e))
      return;
    a._zod.traits.add(e), t(a, u);
    const l = r.prototype, p = Object.keys(l);
    for (let g = 0; g < p.length; g++) {
      const m = p[g];
      m in a || (a[m] = l[m].bind(a));
    }
  }
  const i = n?.Parent ?? Object;
  class s extends i {
  }
  Object.defineProperty(s, "name", { value: e });
  function r(a) {
    var u;
    const l = n?.Parent ? new s() : this;
    o(l, a), (u = l._zod).deferred ?? (u.deferred = []);
    for (const p of l._zod.deferred)
      p();
    return l;
  }
  return Object.defineProperty(r, "init", { value: o }), Object.defineProperty(r, Symbol.hasInstance, {
    value: (a) => n?.Parent && a instanceof n.Parent ? !0 : a?._zod?.traits?.has(e)
  }), Object.defineProperty(r, "name", { value: e }), r;
}
class re extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class vt extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const yt = {};
function X(e) {
  return yt;
}
function _t(e) {
  const t = Object.values(e).filter((o) => typeof o == "number");
  return Object.entries(e).filter(([o, i]) => t.indexOf(+o) === -1).map(([o, i]) => i);
}
function Ve(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Le(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function Me(e) {
  return e == null;
}
function Je(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
const qe = /* @__PURE__ */ Symbol("evaluating");
function z(e, t, n) {
  let o;
  Object.defineProperty(e, t, {
    get() {
      if (o !== qe)
        return o === void 0 && (o = qe, o = n()), o;
    },
    set(i) {
      Object.defineProperty(e, t, {
        value: i
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function ee(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function q(...e) {
  const t = {};
  for (const n of e) {
    const o = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, o);
  }
  return Object.defineProperties({}, t);
}
function Ye(e) {
  return JSON.stringify(e);
}
function On(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const wt = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function $e(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Cn = Le(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function me(e) {
  if ($e(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !($e(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function kt(e) {
  return me(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const Pn = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Ee(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Y(e, t, n) {
  const o = new e._zod.constr(t ?? e._zod.def);
  return (!t || n?.parent) && (o._zod.parent = e), o;
}
function k(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function En(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function Tn(e, t) {
  const n = e._zod.def, o = n.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = q(e._zod.def, {
    get shape() {
      const r = {};
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && (r[a] = n.shape[a]);
      }
      return ee(this, "shape", r), r;
    },
    checks: []
  });
  return Y(e, s);
}
function In(e, t) {
  const n = e._zod.def, o = n.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const s = q(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape };
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && delete r[a];
      }
      return ee(this, "shape", r), r;
    },
    checks: []
  });
  return Y(e, s);
}
function An(e, t) {
  if (!me(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const s = e._zod.def.shape;
    for (const r in t)
      if (Object.getOwnPropertyDescriptor(s, r) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const i = q(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return ee(this, "shape", s), s;
    }
  });
  return Y(e, i);
}
function jn(e, t) {
  if (!me(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = q(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return ee(this, "shape", o), o;
    }
  });
  return Y(e, n);
}
function Rn(e, t) {
  const n = q(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t._zod.def.shape };
      return ee(this, "shape", o), o;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Y(e, n);
}
function Dn(e, t, n) {
  const i = t._zod.def.checks;
  if (i && i.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const r = q(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, u = { ...a };
      if (n)
        for (const l in n) {
          if (!(l in a))
            throw new Error(`Unrecognized key: "${l}"`);
          n[l] && (u[l] = e ? new e({
            type: "optional",
            innerType: a[l]
          }) : a[l]);
        }
      else
        for (const l in a)
          u[l] = e ? new e({
            type: "optional",
            innerType: a[l]
          }) : a[l];
      return ee(this, "shape", u), u;
    },
    checks: []
  });
  return Y(t, r);
}
function Vn(e, t, n) {
  const o = q(t._zod.def, {
    get shape() {
      const i = t._zod.def.shape, s = { ...i };
      if (n)
        for (const r in n) {
          if (!(r in s))
            throw new Error(`Unrecognized key: "${r}"`);
          n[r] && (s[r] = new e({
            type: "nonoptional",
            innerType: i[r]
          }));
        }
      else
        for (const r in i)
          s[r] = new e({
            type: "nonoptional",
            innerType: i[r]
          });
      return ee(this, "shape", s), s;
    }
  });
  return Y(t, o);
}
function oe(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function xt(e, t) {
  return t.map((n) => {
    var o;
    return (o = n).path ?? (o.path = []), n.path.unshift(e), n;
  });
}
function ve(e) {
  return typeof e == "string" ? e : e?.message;
}
function Q(e, t, n) {
  const o = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const i = ve(e.inst?._zod.def?.error?.(e)) ?? ve(t?.error?.(e)) ?? ve(n.customError?.(e)) ?? ve(n.localeError?.(e)) ?? "Invalid input";
    o.message = i;
  }
  return delete o.inst, delete o.continue, t?.reportInput || delete o.input, o;
}
function We(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function pe(...e) {
  const [t, n, o] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: o
  } : { ...t };
}
const $t = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Ve, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, zt = d("$ZodError", $t), Zt = d("$ZodError", $t, { Parent: Error });
function Nn(e, t = (n) => n.message) {
  const n = {}, o = [];
  for (const i of e.issues)
    i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : o.push(t(i));
  return { formErrors: o, fieldErrors: n };
}
function Un(e, t = (n) => n.message) {
  const n = { _errors: [] }, o = (i) => {
    for (const s of i.issues)
      if (s.code === "invalid_union" && s.errors.length)
        s.errors.map((r) => o({ issues: r }));
      else if (s.code === "invalid_key")
        o({ issues: s.issues });
      else if (s.code === "invalid_element")
        o({ issues: s.issues });
      else if (s.path.length === 0)
        n._errors.push(t(s));
      else {
        let r = n, a = 0;
        for (; a < s.path.length; ) {
          const u = s.path[a];
          a === s.path.length - 1 ? (r[u] = r[u] || { _errors: [] }, r[u]._errors.push(t(s))) : r[u] = r[u] || { _errors: [] }, r = r[u], a++;
        }
      }
  };
  return o(e), n;
}
const He = (e) => (t, n, o, i) => {
  const s = o ? Object.assign(o, { async: !1 }) : { async: !1 }, r = t._zod.run({ value: n, issues: [] }, s);
  if (r instanceof Promise)
    throw new re();
  if (r.issues.length) {
    const a = new (i?.Err ?? e)(r.issues.map((u) => Q(u, s, X())));
    throw wt(a, i?.callee), a;
  }
  return r.value;
}, Ke = (e) => async (t, n, o, i) => {
  const s = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let r = t._zod.run({ value: n, issues: [] }, s);
  if (r instanceof Promise && (r = await r), r.issues.length) {
    const a = new (i?.Err ?? e)(r.issues.map((u) => Q(u, s, X())));
    throw wt(a, i?.callee), a;
  }
  return r.value;
}, Te = (e) => (t, n, o) => {
  const i = o ? { ...o, async: !1 } : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise)
    throw new re();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? zt)(s.issues.map((r) => Q(r, i, X())))
  } : { success: !0, data: s.value };
}, Bn = /* @__PURE__ */ Te(Zt), Ie = (e) => async (t, n, o) => {
  const i = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, i);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((r) => Q(r, i, X())))
  } : { success: !0, data: s.value };
}, Fn = /* @__PURE__ */ Ie(Zt), Ln = (e) => (t, n, o) => {
  const i = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return He(e)(t, n, i);
}, Mn = (e) => (t, n, o) => He(e)(t, n, o), Jn = (e) => async (t, n, o) => {
  const i = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Ke(e)(t, n, i);
}, Wn = (e) => async (t, n, o) => Ke(e)(t, n, o), Hn = (e) => (t, n, o) => {
  const i = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Te(e)(t, n, i);
}, Kn = (e) => (t, n, o) => Te(e)(t, n, o), Gn = (e) => async (t, n, o) => {
  const i = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Ie(e)(t, n, i);
}, qn = (e) => async (t, n, o) => Ie(e)(t, n, o), Yn = /^[cC][^\s-]{8,}$/, Xn = /^[0-9a-z]+$/, Qn = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, eo = /^[0-9a-vA-V]{20}$/, to = /^[A-Za-z0-9]{27}$/, no = /^[a-zA-Z0-9_-]{21}$/, oo = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, io = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Xe = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ro = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, so = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function ao() {
  return new RegExp(so, "u");
}
const uo = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, lo = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, co = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, fo = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, mo = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, St = /^[A-Za-z0-9_-]*$/, po = /^\+[1-9]\d{6,14}$/, Ot = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", ho = /* @__PURE__ */ new RegExp(`^${Ot}$`);
function Ct(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function go(e) {
  return new RegExp(`^${Ct(e)}$`);
}
function bo(e) {
  const t = Ct({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const o = `${t}(?:${n.join("|")})`;
  return new RegExp(`^${Ot}T(?:${o})$`);
}
const vo = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, yo = /^[^A-Z]*$/, _o = /^[^a-z]*$/, J = /* @__PURE__ */ d("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), wo = /* @__PURE__ */ d("$ZodCheckMaxLength", (e, t) => {
  var n;
  J.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const i = o.value;
    return !Me(i) && i.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const i = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < i && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const i = o.value;
    if (i.length <= t.maximum)
      return;
    const r = We(i);
    o.issues.push({
      origin: r,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: i,
      inst: e,
      continue: !t.abort
    });
  };
}), ko = /* @__PURE__ */ d("$ZodCheckMinLength", (e, t) => {
  var n;
  J.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const i = o.value;
    return !Me(i) && i.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const i = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > i && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const i = o.value;
    if (i.length >= t.minimum)
      return;
    const r = We(i);
    o.issues.push({
      origin: r,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: i,
      inst: e,
      continue: !t.abort
    });
  };
}), xo = /* @__PURE__ */ d("$ZodCheckLengthEquals", (e, t) => {
  var n;
  J.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const i = o.value;
    return !Me(i) && i.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.minimum = t.length, i.maximum = t.length, i.length = t.length;
  }), e._zod.check = (o) => {
    const i = o.value, s = i.length;
    if (s === t.length)
      return;
    const r = We(i), a = s > t.length;
    o.issues.push({
      origin: r,
      ...a ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ae = /* @__PURE__ */ d("$ZodCheckStringFormat", (e, t) => {
  var n, o;
  J.init(e, t), e._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(t.pattern));
  }), t.pattern ? (n = e._zod).check ?? (n.check = (i) => {
    t.pattern.lastIndex = 0, !t.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: i.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (o = e._zod).check ?? (o.check = () => {
  });
}), $o = /* @__PURE__ */ d("$ZodCheckRegex", (e, t) => {
  Ae.init(e, t), e._zod.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: n.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), zo = /* @__PURE__ */ d("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = yo), Ae.init(e, t);
}), Zo = /* @__PURE__ */ d("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = _o), Ae.init(e, t);
}), So = /* @__PURE__ */ d("$ZodCheckIncludes", (e, t) => {
  J.init(e, t);
  const n = Ee(t.includes), o = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
  t.pattern = o, e._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(o);
  }), e._zod.check = (i) => {
    i.value.includes(t.includes, t.position) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Oo = /* @__PURE__ */ d("$ZodCheckStartsWith", (e, t) => {
  J.init(e, t);
  const n = new RegExp(`^${Ee(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(n);
  }), e._zod.check = (o) => {
    o.value.startsWith(t.prefix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Co = /* @__PURE__ */ d("$ZodCheckEndsWith", (e, t) => {
  J.init(e, t);
  const n = new RegExp(`.*${Ee(t.suffix)}$`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(n);
  }), e._zod.check = (o) => {
    o.value.endsWith(t.suffix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Po = /* @__PURE__ */ d("$ZodCheckOverwrite", (e, t) => {
  J.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class Eo {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const o = t.split(`
`).filter((r) => r), i = Math.min(...o.map((r) => r.length - r.trimStart().length)), s = o.map((r) => r.slice(i)).map((r) => " ".repeat(this.indent * 2) + r);
    for (const r of s)
      this.content.push(r);
  }
  compile() {
    const t = Function, n = this?.args, i = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new t(...n, i.join(`
`));
  }
}
const To = {
  major: 4,
  minor: 3,
  patch: 6
}, A = /* @__PURE__ */ d("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = To;
  const o = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && o.unshift(e);
  for (const i of o)
    for (const s of i._zod.onattach)
      s(e);
  if (o.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const i = (r, a, u) => {
      let l = oe(r), p;
      for (const g of a) {
        if (g._zod.def.when) {
          if (!g._zod.def.when(r))
            continue;
        } else if (l)
          continue;
        const m = r.issues.length, v = g._zod.check(r);
        if (v instanceof Promise && u?.async === !1)
          throw new re();
        if (p || v instanceof Promise)
          p = (p ?? Promise.resolve()).then(async () => {
            await v, r.issues.length !== m && (l || (l = oe(r, m)));
          });
        else {
          if (r.issues.length === m)
            continue;
          l || (l = oe(r, m));
        }
      }
      return p ? p.then(() => r) : r;
    }, s = (r, a, u) => {
      if (oe(r))
        return r.aborted = !0, r;
      const l = i(a, o, u);
      if (l instanceof Promise) {
        if (u.async === !1)
          throw new re();
        return l.then((p) => e._zod.parse(p, u));
      }
      return e._zod.parse(l, u);
    };
    e._zod.run = (r, a) => {
      if (a.skipChecks)
        return e._zod.parse(r, a);
      if (a.direction === "backward") {
        const l = e._zod.parse({ value: r.value, issues: [] }, { ...a, skipChecks: !0 });
        return l instanceof Promise ? l.then((p) => s(p, r, a)) : s(l, r, a);
      }
      const u = e._zod.parse(r, a);
      if (u instanceof Promise) {
        if (a.async === !1)
          throw new re();
        return u.then((l) => i(l, o, a));
      }
      return i(u, o, a);
    };
  }
  z(e, "~standard", () => ({
    validate: (i) => {
      try {
        const s = Bn(e, i);
        return s.success ? { value: s.data } : { issues: s.error?.issues };
      } catch {
        return Fn(e, i).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Ge = /* @__PURE__ */ d("$ZodString", (e, t) => {
  A.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? vo(e._zod.bag), e._zod.parse = (n, o) => {
    if (t.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), P = /* @__PURE__ */ d("$ZodStringFormat", (e, t) => {
  Ae.init(e, t), Ge.init(e, t);
}), Io = /* @__PURE__ */ d("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = io), P.init(e, t);
}), Ao = /* @__PURE__ */ d("$ZodUUID", (e, t) => {
  if (t.version) {
    const o = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (o === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = Xe(o));
  } else
    t.pattern ?? (t.pattern = Xe());
  P.init(e, t);
}), jo = /* @__PURE__ */ d("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = ro), P.init(e, t);
}), Ro = /* @__PURE__ */ d("$ZodURL", (e, t) => {
  P.init(e, t), e._zod.check = (n) => {
    try {
      const o = n.value.trim(), i = new URL(o);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(i.hostname) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? n.value = i.href : n.value = o;
      return;
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "url",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Do = /* @__PURE__ */ d("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = ao()), P.init(e, t);
}), Vo = /* @__PURE__ */ d("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = no), P.init(e, t);
}), No = /* @__PURE__ */ d("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Yn), P.init(e, t);
}), Uo = /* @__PURE__ */ d("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Xn), P.init(e, t);
}), Bo = /* @__PURE__ */ d("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Qn), P.init(e, t);
}), Fo = /* @__PURE__ */ d("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = eo), P.init(e, t);
}), Lo = /* @__PURE__ */ d("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = to), P.init(e, t);
}), Mo = /* @__PURE__ */ d("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = bo(t)), P.init(e, t);
}), Jo = /* @__PURE__ */ d("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = ho), P.init(e, t);
}), Wo = /* @__PURE__ */ d("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = go(t)), P.init(e, t);
}), Ho = /* @__PURE__ */ d("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = oo), P.init(e, t);
}), Ko = /* @__PURE__ */ d("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = uo), P.init(e, t), e._zod.bag.format = "ipv4";
}), Go = /* @__PURE__ */ d("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = lo), P.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
    try {
      new URL(`http://[${n.value}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), qo = /* @__PURE__ */ d("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = co), P.init(e, t);
}), Yo = /* @__PURE__ */ d("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = fo), P.init(e, t), e._zod.check = (n) => {
    const o = n.value.split("/");
    try {
      if (o.length !== 2)
        throw new Error();
      const [i, s] = o;
      if (!s)
        throw new Error();
      const r = Number(s);
      if (`${r}` !== s)
        throw new Error();
      if (r < 0 || r > 128)
        throw new Error();
      new URL(`http://[${i}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function Pt(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const Xo = /* @__PURE__ */ d("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = mo), P.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    Pt(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Qo(e) {
  if (!St.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Pt(n);
}
const ei = /* @__PURE__ */ d("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = St), P.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    Qo(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ti = /* @__PURE__ */ d("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = po), P.init(e, t);
});
function ni(e, t = null) {
  try {
    const n = e.split(".");
    if (n.length !== 3)
      return !1;
    const [o] = n;
    if (!o)
      return !1;
    const i = JSON.parse(atob(o));
    return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
  } catch {
    return !1;
  }
}
const oi = /* @__PURE__ */ d("$ZodJWT", (e, t) => {
  P.init(e, t), e._zod.check = (n) => {
    ni(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ii = /* @__PURE__ */ d("$ZodUnknown", (e, t) => {
  A.init(e, t), e._zod.parse = (n) => n;
}), ri = /* @__PURE__ */ d("$ZodNever", (e, t) => {
  A.init(e, t), e._zod.parse = (n, o) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function Qe(e, t, n) {
  e.issues.length && t.issues.push(...xt(n, e.issues)), t.value[n] = e.value;
}
const si = /* @__PURE__ */ d("$ZodArray", (e, t) => {
  A.init(e, t), e._zod.parse = (n, o) => {
    const i = n.value;
    if (!Array.isArray(i))
      return n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: i,
        inst: e
      }), n;
    n.value = Array(i.length);
    const s = [];
    for (let r = 0; r < i.length; r++) {
      const a = i[r], u = t.element._zod.run({
        value: a,
        issues: []
      }, o);
      u instanceof Promise ? s.push(u.then((l) => Qe(l, n, r))) : Qe(u, n, r);
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
});
function ze(e, t, n, o, i) {
  if (e.issues.length) {
    if (i && !(n in o))
      return;
    t.issues.push(...xt(n, e.issues));
  }
  e.value === void 0 ? n in o && (t.value[n] = void 0) : t.value[n] = e.value;
}
function Et(e) {
  const t = Object.keys(e.shape);
  for (const o of t)
    if (!e.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const n = En(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function Tt(e, t, n, o, i, s) {
  const r = [], a = i.keySet, u = i.catchall._zod, l = u.def.type, p = u.optout === "optional";
  for (const g in t) {
    if (a.has(g))
      continue;
    if (l === "never") {
      r.push(g);
      continue;
    }
    const m = u.run({ value: t[g], issues: [] }, o);
    m instanceof Promise ? e.push(m.then((v) => ze(v, n, g, t, p))) : ze(m, n, g, t, p);
  }
  return r.length && n.issues.push({
    code: "unrecognized_keys",
    keys: r,
    input: t,
    inst: s
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const ai = /* @__PURE__ */ d("$ZodObject", (e, t) => {
  if (A.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const a = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const u = { ...a };
        return Object.defineProperty(t, "shape", {
          value: u
        }), u;
      }
    });
  }
  const o = Le(() => Et(t));
  z(e._zod, "propValues", () => {
    const a = t.shape, u = {};
    for (const l in a) {
      const p = a[l]._zod;
      if (p.values) {
        u[l] ?? (u[l] = /* @__PURE__ */ new Set());
        for (const g of p.values)
          u[l].add(g);
      }
    }
    return u;
  });
  const i = $e, s = t.catchall;
  let r;
  e._zod.parse = (a, u) => {
    r ?? (r = o.value);
    const l = a.value;
    if (!i(l))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: l,
        inst: e
      }), a;
    a.value = {};
    const p = [], g = r.shape;
    for (const m of r.keys) {
      const v = g[m], x = v._zod.optout === "optional", S = v._zod.run({ value: l[m], issues: [] }, u);
      S instanceof Promise ? p.push(S.then((K) => ze(K, a, m, l, x))) : ze(S, a, m, l, x);
    }
    return s ? Tt(p, l, a, u, o.value, e) : p.length ? Promise.all(p).then(() => a) : a;
  };
}), ui = /* @__PURE__ */ d("$ZodObjectJIT", (e, t) => {
  ai.init(e, t);
  const n = e._zod.parse, o = Le(() => Et(t)), i = (m) => {
    const v = new Eo(["shape", "payload", "ctx"]), x = o.value, S = (M) => {
      const B = Ye(M);
      return `shape[${B}]._zod.run({ value: input[${B}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const K = /* @__PURE__ */ Object.create(null);
    let ae = 0;
    for (const M of x.keys)
      K[M] = `key_${ae++}`;
    v.write("const newResult = {};");
    for (const M of x.keys) {
      const B = K[M], L = Ye(M), Ht = m[M]?._zod?.optout === "optional";
      v.write(`const ${B} = ${S(M)};`), Ht ? v.write(`
        if (${B}.issues.length) {
          if (${L} in input) {
            payload.issues = payload.issues.concat(${B}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${L}, ...iss.path] : [${L}]
            })));
          }
        }
        
        if (${B}.value === undefined) {
          if (${L} in input) {
            newResult[${L}] = undefined;
          }
        } else {
          newResult[${L}] = ${B}.value;
        }
        
      `) : v.write(`
        if (${B}.issues.length) {
          payload.issues = payload.issues.concat(${B}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${L}, ...iss.path] : [${L}]
          })));
        }
        
        if (${B}.value === undefined) {
          if (${L} in input) {
            newResult[${L}] = undefined;
          }
        } else {
          newResult[${L}] = ${B}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const ge = v.compile();
    return (M, B) => ge(m, M, B);
  };
  let s;
  const r = $e, a = !yt.jitless, l = a && Cn.value, p = t.catchall;
  let g;
  e._zod.parse = (m, v) => {
    g ?? (g = o.value);
    const x = m.value;
    return r(x) ? a && l && v?.async === !1 && v.jitless !== !0 ? (s || (s = i(t.shape)), m = s(m, v), p ? Tt([], x, m, v, g, e) : m) : n(m, v) : (m.issues.push({
      expected: "object",
      code: "invalid_type",
      input: x,
      inst: e
    }), m);
  };
});
function et(e, t, n, o) {
  for (const s of e)
    if (s.issues.length === 0)
      return t.value = s.value, t;
  const i = e.filter((s) => !oe(s));
  return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((s) => s.issues.map((r) => Q(r, o, X())))
  }), t);
}
const li = /* @__PURE__ */ d("$ZodUnion", (e, t) => {
  A.init(e, t), z(e._zod, "optin", () => t.options.some((i) => i._zod.optin === "optional") ? "optional" : void 0), z(e._zod, "optout", () => t.options.some((i) => i._zod.optout === "optional") ? "optional" : void 0), z(e._zod, "values", () => {
    if (t.options.every((i) => i._zod.values))
      return new Set(t.options.flatMap((i) => Array.from(i._zod.values)));
  }), z(e._zod, "pattern", () => {
    if (t.options.every((i) => i._zod.pattern)) {
      const i = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${i.map((s) => Je(s.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1, o = t.options[0]._zod.run;
  e._zod.parse = (i, s) => {
    if (n)
      return o(i, s);
    let r = !1;
    const a = [];
    for (const u of t.options) {
      const l = u._zod.run({
        value: i.value,
        issues: []
      }, s);
      if (l instanceof Promise)
        a.push(l), r = !0;
      else {
        if (l.issues.length === 0)
          return l;
        a.push(l);
      }
    }
    return r ? Promise.all(a).then((u) => et(u, i, e, s)) : et(a, i, e, s);
  };
}), ci = /* @__PURE__ */ d("$ZodIntersection", (e, t) => {
  A.init(e, t), e._zod.parse = (n, o) => {
    const i = n.value, s = t.left._zod.run({ value: i, issues: [] }, o), r = t.right._zod.run({ value: i, issues: [] }, o);
    return s instanceof Promise || r instanceof Promise ? Promise.all([s, r]).then(([u, l]) => tt(n, u, l)) : tt(n, s, r);
  };
});
function Ne(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (me(e) && me(t)) {
    const n = Object.keys(t), o = Object.keys(e).filter((s) => n.indexOf(s) !== -1), i = { ...e, ...t };
    for (const s of o) {
      const r = Ne(e[s], t[s]);
      if (!r.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...r.mergeErrorPath]
        };
      i[s] = r.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let o = 0; o < e.length; o++) {
      const i = e[o], s = t[o], r = Ne(i, s);
      if (!r.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...r.mergeErrorPath]
        };
      n.push(r.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function tt(e, t, n) {
  const o = /* @__PURE__ */ new Map();
  let i;
  for (const a of t.issues)
    if (a.code === "unrecognized_keys") {
      i ?? (i = a);
      for (const u of a.keys)
        o.has(u) || o.set(u, {}), o.get(u).l = !0;
    } else
      e.issues.push(a);
  for (const a of n.issues)
    if (a.code === "unrecognized_keys")
      for (const u of a.keys)
        o.has(u) || o.set(u, {}), o.get(u).r = !0;
    else
      e.issues.push(a);
  const s = [...o].filter(([, a]) => a.l && a.r).map(([a]) => a);
  if (s.length && i && e.issues.push({ ...i, keys: s }), oe(e))
    return e;
  const r = Ne(t.value, n.value);
  if (!r.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
  return e.value = r.data, e;
}
const di = /* @__PURE__ */ d("$ZodEnum", (e, t) => {
  A.init(e, t);
  const n = _t(t.entries), o = new Set(n);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${n.filter((i) => Pn.has(typeof i)).map((i) => typeof i == "string" ? Ee(i) : i.toString()).join("|")})$`), e._zod.parse = (i, s) => {
    const r = i.value;
    return o.has(r) || i.issues.push({
      code: "invalid_value",
      values: n,
      input: r,
      inst: e
    }), i;
  };
}), fi = /* @__PURE__ */ d("$ZodTransform", (e, t) => {
  A.init(e, t), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new vt(e.constructor.name);
    const i = t.transform(n.value, n);
    if (o.async)
      return (i instanceof Promise ? i : Promise.resolve(i)).then((r) => (n.value = r, n));
    if (i instanceof Promise)
      throw new re();
    return n.value = i, n;
  };
});
function nt(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const It = /* @__PURE__ */ d("$ZodOptional", (e, t) => {
  A.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", z(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), z(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Je(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, o) => {
    if (t.innerType._zod.optin === "optional") {
      const i = t.innerType._zod.run(n, o);
      return i instanceof Promise ? i.then((s) => nt(s, n.value)) : nt(i, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, o);
  };
}), mi = /* @__PURE__ */ d("$ZodExactOptional", (e, t) => {
  It.init(e, t), z(e._zod, "values", () => t.innerType._zod.values), z(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, o) => t.innerType._zod.run(n, o);
}), pi = /* @__PURE__ */ d("$ZodNullable", (e, t) => {
  A.init(e, t), z(e._zod, "optin", () => t.innerType._zod.optin), z(e._zod, "optout", () => t.innerType._zod.optout), z(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Je(n.source)}|null)$`) : void 0;
  }), z(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, o) => n.value === null ? n : t.innerType._zod.run(n, o);
}), hi = /* @__PURE__ */ d("$ZodDefault", (e, t) => {
  A.init(e, t), e._zod.optin = "optional", z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const i = t.innerType._zod.run(n, o);
    return i instanceof Promise ? i.then((s) => ot(s, t)) : ot(i, t);
  };
});
function ot(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const gi = /* @__PURE__ */ d("$ZodPrefault", (e, t) => {
  A.init(e, t), e._zod.optin = "optional", z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => (o.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, o));
}), bi = /* @__PURE__ */ d("$ZodNonOptional", (e, t) => {
  A.init(e, t), z(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((o) => o !== void 0)) : void 0;
  }), e._zod.parse = (n, o) => {
    const i = t.innerType._zod.run(n, o);
    return i instanceof Promise ? i.then((s) => it(s, e)) : it(i, e);
  };
});
function it(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const vi = /* @__PURE__ */ d("$ZodCatch", (e, t) => {
  A.init(e, t), z(e._zod, "optin", () => t.innerType._zod.optin), z(e._zod, "optout", () => t.innerType._zod.optout), z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const i = t.innerType._zod.run(n, o);
    return i instanceof Promise ? i.then((s) => (n.value = s.value, s.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: s.issues.map((r) => Q(r, o, X()))
      },
      input: n.value
    }), n.issues = []), n)) : (n.value = i.value, i.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: i.issues.map((s) => Q(s, o, X()))
      },
      input: n.value
    }), n.issues = []), n);
  };
}), yi = /* @__PURE__ */ d("$ZodPipe", (e, t) => {
  A.init(e, t), z(e._zod, "values", () => t.in._zod.values), z(e._zod, "optin", () => t.in._zod.optin), z(e._zod, "optout", () => t.out._zod.optout), z(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, o) => {
    if (o.direction === "backward") {
      const s = t.out._zod.run(n, o);
      return s instanceof Promise ? s.then((r) => ye(r, t.in, o)) : ye(s, t.in, o);
    }
    const i = t.in._zod.run(n, o);
    return i instanceof Promise ? i.then((s) => ye(s, t.out, o)) : ye(i, t.out, o);
  };
});
function ye(e, t, n) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const _i = /* @__PURE__ */ d("$ZodReadonly", (e, t) => {
  A.init(e, t), z(e._zod, "propValues", () => t.innerType._zod.propValues), z(e._zod, "values", () => t.innerType._zod.values), z(e._zod, "optin", () => t.innerType?._zod?.optin), z(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const i = t.innerType._zod.run(n, o);
    return i instanceof Promise ? i.then(rt) : rt(i);
  };
});
function rt(e) {
  return e.value = Object.freeze(e.value), e;
}
const wi = /* @__PURE__ */ d("$ZodCustom", (e, t) => {
  J.init(e, t), A.init(e, t), e._zod.parse = (n, o) => n, e._zod.check = (n) => {
    const o = n.value, i = t.fn(o);
    if (i instanceof Promise)
      return i.then((s) => st(s, n, o, e));
    st(i, n, o, e);
  };
});
function st(e, t, n, o) {
  if (!e) {
    const i = {
      code: "custom",
      input: n,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (i.params = o._zod.def.params), t.issues.push(pe(i));
  }
}
var at;
class ki {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...n) {
    const o = n[0];
    return this._map.set(t, o), o && typeof o == "object" && "id" in o && this._idmap.set(o.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const n = this._map.get(t);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const o = { ...this.get(n) ?? {} };
      delete o.id;
      const i = { ...o, ...this._map.get(t) };
      return Object.keys(i).length ? i : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function xi() {
  return new ki();
}
(at = globalThis).__zod_globalRegistry ?? (at.__zod_globalRegistry = xi());
const ce = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function $i(e, t) {
  return new e({
    type: "string",
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function At(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ut(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function zi(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zi(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Si(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Oi(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ci(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Pi(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ei(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ti(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ii(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ai(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ji(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ri(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Di(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vi(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ni(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ui(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Bi(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fi(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Li(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Mi(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ji(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wi(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hi(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ki(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gi(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function qi(e, t) {
  return new e({
    type: "never",
    ...k(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jt(e, t) {
  return new wo({
    check: "max_length",
    ...k(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ze(e, t) {
  return new ko({
    check: "min_length",
    ...k(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Rt(e, t) {
  return new xo({
    check: "length_equals",
    ...k(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function Yi(e, t) {
  return new $o({
    check: "string_format",
    format: "regex",
    ...k(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function Xi(e) {
  return new zo({
    check: "string_format",
    format: "lowercase",
    ...k(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Qi(e) {
  return new Zo({
    check: "string_format",
    format: "uppercase",
    ...k(e)
  });
}
// @__NO_SIDE_EFFECTS__
function er(e, t) {
  return new So({
    check: "string_format",
    format: "includes",
    ...k(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function tr(e, t) {
  return new Oo({
    check: "string_format",
    format: "starts_with",
    ...k(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function nr(e, t) {
  return new Co({
    check: "string_format",
    format: "ends_with",
    ...k(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  return new Po({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  return /* @__PURE__ */ se((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function ir() {
  return /* @__PURE__ */ se((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function rr() {
  return /* @__PURE__ */ se((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function sr() {
  return /* @__PURE__ */ se((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function ar() {
  return /* @__PURE__ */ se((e) => On(e));
}
// @__NO_SIDE_EFFECTS__
function ur(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...k(n)
  });
}
// @__NO_SIDE_EFFECTS__
function lr(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...k(n)
  });
}
// @__NO_SIDE_EFFECTS__
function cr(e) {
  const t = /* @__PURE__ */ dr((n) => (n.addIssue = (o) => {
    if (typeof o == "string")
      n.issues.push(pe(o, n.value, t._zod.def));
    else {
      const i = o;
      i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = n.value), i.inst ?? (i.inst = t), i.continue ?? (i.continue = !t._zod.def.abort), n.issues.push(pe(i));
    }
  }, e(n.value, n)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function dr(e, t) {
  const n = new J({
    check: "custom",
    ...k(t)
  });
  return n._zod.check = e, n;
}
function Dt(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? ce,
    target: t,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {
    }),
    io: e?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    external: e?.external ?? void 0
  };
}
function D(e, t, n = { path: [], schemaPath: [] }) {
  var o;
  const i = e._zod.def, s = t.seen.get(e);
  if (s)
    return s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema;
  const r = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, r);
  const a = e._zod.toJSONSchema?.();
  if (a)
    r.schema = a;
  else {
    const p = {
      ...n,
      schemaPath: [...n.schemaPath, e],
      path: n.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, r.schema, p);
    else {
      const m = r.schema, v = t.processors[i.type];
      if (!v)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
      v(e, t, m, p);
    }
    const g = e._zod.parent;
    g && (r.ref || (r.ref = g), D(g, t, p), t.seen.get(g).isParent = !0);
  }
  const u = t.metadataRegistry.get(e);
  return u && Object.assign(r.schema, u), t.io === "input" && V(e) && (delete r.schema.examples, delete r.schema.default), t.io === "input" && r.schema._prefault && ((o = r.schema).default ?? (o.default = r.schema._prefault)), delete r.schema._prefault, t.seen.get(e).schema;
}
function Vt(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = /* @__PURE__ */ new Map();
  for (const r of e.seen.entries()) {
    const a = e.metadataRegistry.get(r[0])?.id;
    if (a) {
      const u = o.get(a);
      if (u && u !== r[0])
        throw new Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      o.set(a, r[0]);
    }
  }
  const i = (r) => {
    const a = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const g = e.external.registry.get(r[0])?.id, m = e.external.uri ?? ((x) => x);
      if (g)
        return { ref: m(g) };
      const v = r[1].defId ?? r[1].schema.id ?? `schema${e.counter++}`;
      return r[1].defId = v, { defId: v, ref: `${m("__shared")}#/${a}/${v}` };
    }
    if (r[1] === n)
      return { ref: "#" };
    const l = `#/${a}/`, p = r[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: p, ref: l + p };
  }, s = (r) => {
    if (r[1].schema.$ref)
      return;
    const a = r[1], { ref: u, defId: l } = i(r);
    a.def = { ...a.schema }, l && (a.defId = l);
    const p = a.schema;
    for (const g in p)
      delete p[g];
    p.$ref = u;
  };
  if (e.cycles === "throw")
    for (const r of e.seen.entries()) {
      const a = r[1];
      if (a.cycle)
        throw new Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const r of e.seen.entries()) {
    const a = r[1];
    if (t === r[0]) {
      s(r);
      continue;
    }
    if (e.external) {
      const l = e.external.registry.get(r[0])?.id;
      if (t !== r[0] && l) {
        s(r);
        continue;
      }
    }
    if (e.metadataRegistry.get(r[0])?.id) {
      s(r);
      continue;
    }
    if (a.cycle) {
      s(r);
      continue;
    }
    if (a.count > 1 && e.reused === "ref") {
      s(r);
      continue;
    }
  }
}
function Nt(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (r) => {
    const a = e.seen.get(r);
    if (a.ref === null)
      return;
    const u = a.def ?? a.schema, l = { ...u }, p = a.ref;
    if (a.ref = null, p) {
      o(p);
      const m = e.seen.get(p), v = m.schema;
      if (v.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (u.allOf = u.allOf ?? [], u.allOf.push(v)) : Object.assign(u, v), Object.assign(u, l), r._zod.parent === p)
        for (const S in u)
          S === "$ref" || S === "allOf" || S in l || delete u[S];
      if (v.$ref && m.def)
        for (const S in u)
          S === "$ref" || S === "allOf" || S in m.def && JSON.stringify(u[S]) === JSON.stringify(m.def[S]) && delete u[S];
    }
    const g = r._zod.parent;
    if (g && g !== p) {
      o(g);
      const m = e.seen.get(g);
      if (m?.schema.$ref && (u.$ref = m.schema.$ref, m.def))
        for (const v in u)
          v === "$ref" || v === "allOf" || v in m.def && JSON.stringify(u[v]) === JSON.stringify(m.def[v]) && delete u[v];
    }
    e.override({
      zodSchema: r,
      jsonSchema: u,
      path: a.path ?? []
    });
  };
  for (const r of [...e.seen.entries()].reverse())
    o(r[0]);
  const i = {};
  if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const r = e.external.registry.get(t)?.id;
    if (!r)
      throw new Error("Schema is missing an `id` property");
    i.$id = e.external.uri(r);
  }
  Object.assign(i, n.def ?? n.schema);
  const s = e.external?.defs ?? {};
  for (const r of e.seen.entries()) {
    const a = r[1];
    a.def && a.defId && (s[a.defId] = a.def);
  }
  e.external || Object.keys(s).length > 0 && (e.target === "draft-2020-12" ? i.$defs = s : i.definitions = s);
  try {
    const r = JSON.parse(JSON.stringify(i));
    return Object.defineProperty(r, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: Se(t, "input", e.processors),
          output: Se(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), r;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function V(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const o = e._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return V(o.element, n);
  if (o.type === "set")
    return V(o.valueType, n);
  if (o.type === "lazy")
    return V(o.getter(), n);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault")
    return V(o.innerType, n);
  if (o.type === "intersection")
    return V(o.left, n) || V(o.right, n);
  if (o.type === "record" || o.type === "map")
    return V(o.keyType, n) || V(o.valueType, n);
  if (o.type === "pipe")
    return V(o.in, n) || V(o.out, n);
  if (o.type === "object") {
    for (const i in o.shape)
      if (V(o.shape[i], n))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const i of o.options)
      if (V(i, n))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const i of o.items)
      if (V(i, n))
        return !0;
    return !!(o.rest && V(o.rest, n));
  }
  return !1;
}
const fr = (e, t = {}) => (n) => {
  const o = Dt({ ...n, processors: t });
  return D(e, o), Vt(o, e), Nt(o, e);
}, Se = (e, t, n = {}) => (o) => {
  const { libraryOptions: i, target: s } = o ?? {}, r = Dt({ ...i ?? {}, target: s, io: t, processors: n });
  return D(e, r), Vt(r, e), Nt(r, e);
}, mr = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, pr = (e, t, n, o) => {
  const i = n;
  i.type = "string";
  const { minimum: s, maximum: r, format: a, patterns: u, contentEncoding: l } = e._zod.bag;
  if (typeof s == "number" && (i.minLength = s), typeof r == "number" && (i.maxLength = r), a && (i.format = mr[a] ?? a, i.format === "" && delete i.format, a === "time" && delete i.format), l && (i.contentEncoding = l), u && u.size > 0) {
    const p = [...u];
    p.length === 1 ? i.pattern = p[0].source : p.length > 1 && (i.allOf = [
      ...p.map((g) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: g.source
      }))
    ]);
  }
}, hr = (e, t, n, o) => {
  n.not = {};
}, gr = (e, t, n, o) => {
}, br = (e, t, n, o) => {
  const i = e._zod.def, s = _t(i.entries);
  s.every((r) => typeof r == "number") && (n.type = "number"), s.every((r) => typeof r == "string") && (n.type = "string"), n.enum = s;
}, vr = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, yr = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, _r = (e, t, n, o) => {
  const i = n, s = e._zod.def, { minimum: r, maximum: a } = e._zod.bag;
  typeof r == "number" && (i.minItems = r), typeof a == "number" && (i.maxItems = a), i.type = "array", i.items = D(s.element, t, { ...o, path: [...o.path, "items"] });
}, wr = (e, t, n, o) => {
  const i = n, s = e._zod.def;
  i.type = "object", i.properties = {};
  const r = s.shape;
  for (const l in r)
    i.properties[l] = D(r[l], t, {
      ...o,
      path: [...o.path, "properties", l]
    });
  const a = new Set(Object.keys(r)), u = new Set([...a].filter((l) => {
    const p = s.shape[l]._zod;
    return t.io === "input" ? p.optin === void 0 : p.optout === void 0;
  }));
  u.size > 0 && (i.required = Array.from(u)), s.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : s.catchall ? s.catchall && (i.additionalProperties = D(s.catchall, t, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : t.io === "output" && (i.additionalProperties = !1);
}, kr = (e, t, n, o) => {
  const i = e._zod.def, s = i.inclusive === !1, r = i.options.map((a, u) => D(a, t, {
    ...o,
    path: [...o.path, s ? "oneOf" : "anyOf", u]
  }));
  s ? n.oneOf = r : n.anyOf = r;
}, xr = (e, t, n, o) => {
  const i = e._zod.def, s = D(i.left, t, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), r = D(i.right, t, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), a = (l) => "allOf" in l && Object.keys(l).length === 1, u = [
    ...a(s) ? s.allOf : [s],
    ...a(r) ? r.allOf : [r]
  ];
  n.allOf = u;
}, $r = (e, t, n, o) => {
  const i = e._zod.def, s = D(i.innerType, t, o), r = t.seen.get(e);
  t.target === "openapi-3.0" ? (r.ref = i.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
}, zr = (e, t, n, o) => {
  const i = e._zod.def;
  D(i.innerType, t, o);
  const s = t.seen.get(e);
  s.ref = i.innerType;
}, Zr = (e, t, n, o) => {
  const i = e._zod.def;
  D(i.innerType, t, o);
  const s = t.seen.get(e);
  s.ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
}, Sr = (e, t, n, o) => {
  const i = e._zod.def;
  D(i.innerType, t, o);
  const s = t.seen.get(e);
  s.ref = i.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, Or = (e, t, n, o) => {
  const i = e._zod.def;
  D(i.innerType, t, o);
  const s = t.seen.get(e);
  s.ref = i.innerType;
  let r;
  try {
    r = i.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = r;
}, Cr = (e, t, n, o) => {
  const i = e._zod.def, s = t.io === "input" ? i.in._zod.def.type === "transform" ? i.out : i.in : i.out;
  D(s, t, o);
  const r = t.seen.get(e);
  r.ref = s;
}, Pr = (e, t, n, o) => {
  const i = e._zod.def;
  D(i.innerType, t, o);
  const s = t.seen.get(e);
  s.ref = i.innerType, n.readOnly = !0;
}, Ut = (e, t, n, o) => {
  const i = e._zod.def;
  D(i.innerType, t, o);
  const s = t.seen.get(e);
  s.ref = i.innerType;
}, Er = /* @__PURE__ */ d("ZodISODateTime", (e, t) => {
  Mo.init(e, t), E.init(e, t);
});
function Tr(e) {
  return /* @__PURE__ */ Ji(Er, e);
}
const Ir = /* @__PURE__ */ d("ZodISODate", (e, t) => {
  Jo.init(e, t), E.init(e, t);
});
function Ar(e) {
  return /* @__PURE__ */ Wi(Ir, e);
}
const jr = /* @__PURE__ */ d("ZodISOTime", (e, t) => {
  Wo.init(e, t), E.init(e, t);
});
function Rr(e) {
  return /* @__PURE__ */ Hi(jr, e);
}
const Dr = /* @__PURE__ */ d("ZodISODuration", (e, t) => {
  Ho.init(e, t), E.init(e, t);
});
function Vr(e) {
  return /* @__PURE__ */ Ki(Dr, e);
}
const Nr = (e, t) => {
  zt.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => Un(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => Nn(e, n)
      // enumerable: false,
    },
    addIssue: {
      value: (n) => {
        e.issues.push(n), e.message = JSON.stringify(e.issues, Ve, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (n) => {
        e.issues.push(...n), e.message = JSON.stringify(e.issues, Ve, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, F = d("ZodError", Nr, {
  Parent: Error
}), Ur = /* @__PURE__ */ He(F), Br = /* @__PURE__ */ Ke(F), Fr = /* @__PURE__ */ Te(F), Lr = /* @__PURE__ */ Ie(F), Mr = /* @__PURE__ */ Ln(F), Jr = /* @__PURE__ */ Mn(F), Wr = /* @__PURE__ */ Jn(F), Hr = /* @__PURE__ */ Wn(F), Kr = /* @__PURE__ */ Hn(F), Gr = /* @__PURE__ */ Kn(F), qr = /* @__PURE__ */ Gn(F), Yr = /* @__PURE__ */ qn(F), j = /* @__PURE__ */ d("ZodType", (e, t) => (A.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: Se(e, "input"),
    output: Se(e, "output")
  }
}), e.toJSONSchema = fr(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(q(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (n, o) => Y(e, n, o), e.brand = () => e, e.register = ((n, o) => (n.add(e, o), e)), e.parse = (n, o) => Ur(e, n, o, { callee: e.parse }), e.safeParse = (n, o) => Fr(e, n, o), e.parseAsync = async (n, o) => Br(e, n, o, { callee: e.parseAsync }), e.safeParseAsync = async (n, o) => Lr(e, n, o), e.spa = e.safeParseAsync, e.encode = (n, o) => Mr(e, n, o), e.decode = (n, o) => Jr(e, n, o), e.encodeAsync = async (n, o) => Wr(e, n, o), e.decodeAsync = async (n, o) => Hr(e, n, o), e.safeEncode = (n, o) => Kr(e, n, o), e.safeDecode = (n, o) => Gr(e, n, o), e.safeEncodeAsync = async (n, o) => qr(e, n, o), e.safeDecodeAsync = async (n, o) => Yr(e, n, o), e.refine = (n, o) => e.check(Ms(n, o)), e.superRefine = (n) => e.check(Js(n)), e.overwrite = (n) => e.check(/* @__PURE__ */ se(n)), e.optional = () => dt(e), e.exactOptional = () => Es(e), e.nullable = () => ft(e), e.nullish = () => dt(ft(e)), e.nonoptional = (n) => Ds(e, n), e.array = () => _s(e), e.or = (n) => $s([e, n]), e.and = (n) => Zs(e, n), e.transform = (n) => mt(e, Cs(n)), e.default = (n) => As(e, n), e.prefault = (n) => Rs(e, n), e.catch = (n) => Ns(e, n), e.pipe = (n) => mt(e, n), e.readonly = () => Fs(e), e.describe = (n) => {
  const o = e.clone();
  return ce.add(o, { description: n }), o;
}, Object.defineProperty(e, "description", {
  get() {
    return ce.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...n) => {
  if (n.length === 0)
    return ce.get(e);
  const o = e.clone();
  return ce.add(o, n[0]), o;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), Bt = /* @__PURE__ */ d("_ZodString", (e, t) => {
  Ge.init(e, t), j.init(e, t), e._zod.processJSONSchema = (o, i, s) => pr(e, o, i);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...o) => e.check(/* @__PURE__ */ Yi(...o)), e.includes = (...o) => e.check(/* @__PURE__ */ er(...o)), e.startsWith = (...o) => e.check(/* @__PURE__ */ tr(...o)), e.endsWith = (...o) => e.check(/* @__PURE__ */ nr(...o)), e.min = (...o) => e.check(/* @__PURE__ */ Ze(...o)), e.max = (...o) => e.check(/* @__PURE__ */ jt(...o)), e.length = (...o) => e.check(/* @__PURE__ */ Rt(...o)), e.nonempty = (...o) => e.check(/* @__PURE__ */ Ze(1, ...o)), e.lowercase = (o) => e.check(/* @__PURE__ */ Xi(o)), e.uppercase = (o) => e.check(/* @__PURE__ */ Qi(o)), e.trim = () => e.check(/* @__PURE__ */ ir()), e.normalize = (...o) => e.check(/* @__PURE__ */ or(...o)), e.toLowerCase = () => e.check(/* @__PURE__ */ rr()), e.toUpperCase = () => e.check(/* @__PURE__ */ sr()), e.slugify = () => e.check(/* @__PURE__ */ ar());
}), Xr = /* @__PURE__ */ d("ZodString", (e, t) => {
  Ge.init(e, t), Bt.init(e, t), e.email = (n) => e.check(/* @__PURE__ */ At(Ft, n)), e.url = (n) => e.check(/* @__PURE__ */ Ci(es, n)), e.jwt = (n) => e.check(/* @__PURE__ */ Mi(hs, n)), e.emoji = (n) => e.check(/* @__PURE__ */ Pi(ts, n)), e.guid = (n) => e.check(/* @__PURE__ */ ut(lt, n)), e.uuid = (n) => e.check(/* @__PURE__ */ zi(_e, n)), e.uuidv4 = (n) => e.check(/* @__PURE__ */ Zi(_e, n)), e.uuidv6 = (n) => e.check(/* @__PURE__ */ Si(_e, n)), e.uuidv7 = (n) => e.check(/* @__PURE__ */ Oi(_e, n)), e.nanoid = (n) => e.check(/* @__PURE__ */ Ei(ns, n)), e.guid = (n) => e.check(/* @__PURE__ */ ut(lt, n)), e.cuid = (n) => e.check(/* @__PURE__ */ Ti(os, n)), e.cuid2 = (n) => e.check(/* @__PURE__ */ Ii(is, n)), e.ulid = (n) => e.check(/* @__PURE__ */ Ai(rs, n)), e.base64 = (n) => e.check(/* @__PURE__ */ Bi(fs, n)), e.base64url = (n) => e.check(/* @__PURE__ */ Fi(ms, n)), e.xid = (n) => e.check(/* @__PURE__ */ ji(ss, n)), e.ksuid = (n) => e.check(/* @__PURE__ */ Ri(as, n)), e.ipv4 = (n) => e.check(/* @__PURE__ */ Di(us, n)), e.ipv6 = (n) => e.check(/* @__PURE__ */ Vi(ls, n)), e.cidrv4 = (n) => e.check(/* @__PURE__ */ Ni(cs, n)), e.cidrv6 = (n) => e.check(/* @__PURE__ */ Ui(ds, n)), e.e164 = (n) => e.check(/* @__PURE__ */ Li(ps, n)), e.datetime = (n) => e.check(Tr(n)), e.date = (n) => e.check(Ar(n)), e.time = (n) => e.check(Rr(n)), e.duration = (n) => e.check(Vr(n));
});
function ue(e) {
  return /* @__PURE__ */ $i(Xr, e);
}
const E = /* @__PURE__ */ d("ZodStringFormat", (e, t) => {
  P.init(e, t), Bt.init(e, t);
}), Ft = /* @__PURE__ */ d("ZodEmail", (e, t) => {
  jo.init(e, t), E.init(e, t);
});
function Qr(e) {
  return /* @__PURE__ */ At(Ft, e);
}
const lt = /* @__PURE__ */ d("ZodGUID", (e, t) => {
  Io.init(e, t), E.init(e, t);
}), _e = /* @__PURE__ */ d("ZodUUID", (e, t) => {
  Ao.init(e, t), E.init(e, t);
}), es = /* @__PURE__ */ d("ZodURL", (e, t) => {
  Ro.init(e, t), E.init(e, t);
}), ts = /* @__PURE__ */ d("ZodEmoji", (e, t) => {
  Do.init(e, t), E.init(e, t);
}), ns = /* @__PURE__ */ d("ZodNanoID", (e, t) => {
  Vo.init(e, t), E.init(e, t);
}), os = /* @__PURE__ */ d("ZodCUID", (e, t) => {
  No.init(e, t), E.init(e, t);
}), is = /* @__PURE__ */ d("ZodCUID2", (e, t) => {
  Uo.init(e, t), E.init(e, t);
}), rs = /* @__PURE__ */ d("ZodULID", (e, t) => {
  Bo.init(e, t), E.init(e, t);
}), ss = /* @__PURE__ */ d("ZodXID", (e, t) => {
  Fo.init(e, t), E.init(e, t);
}), as = /* @__PURE__ */ d("ZodKSUID", (e, t) => {
  Lo.init(e, t), E.init(e, t);
}), us = /* @__PURE__ */ d("ZodIPv4", (e, t) => {
  Ko.init(e, t), E.init(e, t);
}), ls = /* @__PURE__ */ d("ZodIPv6", (e, t) => {
  Go.init(e, t), E.init(e, t);
}), cs = /* @__PURE__ */ d("ZodCIDRv4", (e, t) => {
  qo.init(e, t), E.init(e, t);
}), ds = /* @__PURE__ */ d("ZodCIDRv6", (e, t) => {
  Yo.init(e, t), E.init(e, t);
}), fs = /* @__PURE__ */ d("ZodBase64", (e, t) => {
  Xo.init(e, t), E.init(e, t);
}), ms = /* @__PURE__ */ d("ZodBase64URL", (e, t) => {
  ei.init(e, t), E.init(e, t);
}), ps = /* @__PURE__ */ d("ZodE164", (e, t) => {
  ti.init(e, t), E.init(e, t);
}), hs = /* @__PURE__ */ d("ZodJWT", (e, t) => {
  oi.init(e, t), E.init(e, t);
}), gs = /* @__PURE__ */ d("ZodUnknown", (e, t) => {
  ii.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => gr();
});
function ct() {
  return /* @__PURE__ */ Gi(gs);
}
const bs = /* @__PURE__ */ d("ZodNever", (e, t) => {
  ri.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => hr(e, n, o);
});
function vs(e) {
  return /* @__PURE__ */ qi(bs, e);
}
const ys = /* @__PURE__ */ d("ZodArray", (e, t) => {
  si.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => _r(e, n, o, i), e.element = t.element, e.min = (n, o) => e.check(/* @__PURE__ */ Ze(n, o)), e.nonempty = (n) => e.check(/* @__PURE__ */ Ze(1, n)), e.max = (n, o) => e.check(/* @__PURE__ */ jt(n, o)), e.length = (n, o) => e.check(/* @__PURE__ */ Rt(n, o)), e.unwrap = () => e.element;
});
function _s(e, t) {
  return /* @__PURE__ */ ur(ys, e, t);
}
const ws = /* @__PURE__ */ d("ZodObject", (e, t) => {
  ui.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => wr(e, n, o, i), z(e, "shape", () => t.shape), e.keyof = () => Ss(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: ct() }), e.loose = () => e.clone({ ...e._zod.def, catchall: ct() }), e.strict = () => e.clone({ ...e._zod.def, catchall: vs() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => An(e, n), e.safeExtend = (n) => jn(e, n), e.merge = (n) => Rn(e, n), e.pick = (n) => Tn(e, n), e.omit = (n) => In(e, n), e.partial = (...n) => Dn(Lt, e, n[0]), e.required = (...n) => Vn(Mt, e, n[0]);
});
function ks(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...k(t)
  };
  return new ws(n);
}
const xs = /* @__PURE__ */ d("ZodUnion", (e, t) => {
  li.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => kr(e, n, o, i), e.options = t.options;
});
function $s(e, t) {
  return new xs({
    type: "union",
    options: e,
    ...k(t)
  });
}
const zs = /* @__PURE__ */ d("ZodIntersection", (e, t) => {
  ci.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => xr(e, n, o, i);
});
function Zs(e, t) {
  return new zs({
    type: "intersection",
    left: e,
    right: t
  });
}
const Ue = /* @__PURE__ */ d("ZodEnum", (e, t) => {
  di.init(e, t), j.init(e, t), e._zod.processJSONSchema = (o, i, s) => br(e, o, i), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (o, i) => {
    const s = {};
    for (const r of o)
      if (n.has(r))
        s[r] = t.entries[r];
      else
        throw new Error(`Key ${r} not found in enum`);
    return new Ue({
      ...t,
      checks: [],
      ...k(i),
      entries: s
    });
  }, e.exclude = (o, i) => {
    const s = { ...t.entries };
    for (const r of o)
      if (n.has(r))
        delete s[r];
      else
        throw new Error(`Key ${r} not found in enum`);
    return new Ue({
      ...t,
      checks: [],
      ...k(i),
      entries: s
    });
  };
});
function Ss(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new Ue({
    type: "enum",
    entries: n,
    ...k(t)
  });
}
const Os = /* @__PURE__ */ d("ZodTransform", (e, t) => {
  fi.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => yr(e, n), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new vt(e.constructor.name);
    n.addIssue = (s) => {
      if (typeof s == "string")
        n.issues.push(pe(s, n.value, t));
      else {
        const r = s;
        r.fatal && (r.continue = !1), r.code ?? (r.code = "custom"), r.input ?? (r.input = n.value), r.inst ?? (r.inst = e), n.issues.push(pe(r));
      }
    };
    const i = t.transform(n.value, n);
    return i instanceof Promise ? i.then((s) => (n.value = s, n)) : (n.value = i, n);
  };
});
function Cs(e) {
  return new Os({
    type: "transform",
    transform: e
  });
}
const Lt = /* @__PURE__ */ d("ZodOptional", (e, t) => {
  It.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => Ut(e, n, o, i), e.unwrap = () => e._zod.def.innerType;
});
function dt(e) {
  return new Lt({
    type: "optional",
    innerType: e
  });
}
const Ps = /* @__PURE__ */ d("ZodExactOptional", (e, t) => {
  mi.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => Ut(e, n, o, i), e.unwrap = () => e._zod.def.innerType;
});
function Es(e) {
  return new Ps({
    type: "optional",
    innerType: e
  });
}
const Ts = /* @__PURE__ */ d("ZodNullable", (e, t) => {
  pi.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => $r(e, n, o, i), e.unwrap = () => e._zod.def.innerType;
});
function ft(e) {
  return new Ts({
    type: "nullable",
    innerType: e
  });
}
const Is = /* @__PURE__ */ d("ZodDefault", (e, t) => {
  hi.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => Zr(e, n, o, i), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function As(e, t) {
  return new Is({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : kt(t);
    }
  });
}
const js = /* @__PURE__ */ d("ZodPrefault", (e, t) => {
  gi.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => Sr(e, n, o, i), e.unwrap = () => e._zod.def.innerType;
});
function Rs(e, t) {
  return new js({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : kt(t);
    }
  });
}
const Mt = /* @__PURE__ */ d("ZodNonOptional", (e, t) => {
  bi.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => zr(e, n, o, i), e.unwrap = () => e._zod.def.innerType;
});
function Ds(e, t) {
  return new Mt({
    type: "nonoptional",
    innerType: e,
    ...k(t)
  });
}
const Vs = /* @__PURE__ */ d("ZodCatch", (e, t) => {
  vi.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => Or(e, n, o, i), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Ns(e, t) {
  return new Vs({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Us = /* @__PURE__ */ d("ZodPipe", (e, t) => {
  yi.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => Cr(e, n, o, i), e.in = t.in, e.out = t.out;
});
function mt(e, t) {
  return new Us({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Bs = /* @__PURE__ */ d("ZodReadonly", (e, t) => {
  _i.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => Pr(e, n, o, i), e.unwrap = () => e._zod.def.innerType;
});
function Fs(e) {
  return new Bs({
    type: "readonly",
    innerType: e
  });
}
const Ls = /* @__PURE__ */ d("ZodCustom", (e, t) => {
  wi.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, i) => vr(e, n);
});
function Ms(e, t = {}) {
  return /* @__PURE__ */ lr(Ls, e, t);
}
function Js(e) {
  return /* @__PURE__ */ cr(e);
}
const Ws = ks({
  name: ue().min(1, "Obligatorio"),
  lastName: ue().min(1, "Obligatorio"),
  username: ue().min(1, "Obligatorio"),
  email: Qr("Introduce un email correcto"),
  phoneNumber: ue().min(1, "Obligatorio").max(9, "Max 9 dígitos").regex(/^[0-9]+$/, "Solo números"),
  password: ue().min(8, "Mínimo 8 carácteres").max(15, "Máximo 15 carácteres").refine((e) => /[A-Z]/.test(e), { message: "Al menos una mayúscula" }).refine((e) => /[a-z]/.test(e), { message: "Al menos una minúscula" }).refine((e) => /[0-9]/.test(e), { message: "Almenos menos un número" }).refine((e) => /[!@#$%^&*(),.?":{}|<>]/.test(e), { message: "Al menos un símbolo" })
}), Hs = { class: "ui:max-w-2xl ui:mx-auto ui:p-8 ui:bg-white ui:rounded-2xl ui:shadow-xl ui:border ui:border-gray-100 ui:shrink-0" }, Ks = { class: "ui:grid ui:grid-cols-2 ui:gap-2" }, Gs = { class: "ui:grid ui:grid-cols-1 ui:gap-2" }, qs = { class: "ui:grid ui:grid-cols-2 ui:gap-2" }, Ys = { class: "ui:grid ui:grid-cols-1 ui:gap-2" }, Xs = { class: "ui:text-center ui:text-sm ui:text-gray-500 ui:mt-2" }, Qs = /* @__PURE__ */ O({
  __name: "RegisterForm",
  props: {
    loading: { type: Boolean }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = on(Ws), o = Pe({
      name: "",
      lastName: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: ""
    }), i = t, s = (r) => {
      r.valid && i("submit", r.values);
    };
    return (r, a) => (f(), b("div", Hs, [
      a[8] || (a[8] = c("div", { class: "ui:text-center ui:mb-8" }, [
        c("h2", { class: "ui:text-2xl ui:font-extrabold ui:text-gray-900" }, "Crea tu cuenta")
      ], -1)),
      h(y(he), {
        initialValues: o,
        onSubmit: s,
        class: "ui:flex ui:flex-col",
        resolver: y(n)
      }, {
        default: _((u) => [
          c("div", Ks, [
            h(W, {
              modelValue: o.name,
              "onUpdate:modelValue": a[0] || (a[0] = (l) => o.name = l),
              name: "name",
              label: "Nombre",
              error: u.name?.error?.message
            }, null, 8, ["modelValue", "error"]),
            h(W, {
              modelValue: o.lastName,
              "onUpdate:modelValue": a[1] || (a[1] = (l) => o.lastName = l),
              name: "lastName",
              label: "Apellido",
              error: u.lastName?.error?.message
            }, null, 8, ["modelValue", "error"])
          ]),
          c("div", Gs, [
            h(W, {
              modelValue: o.username,
              "onUpdate:modelValue": a[2] || (a[2] = (l) => o.username = l),
              name: "username",
              label: "Alias",
              error: u.username?.error?.message
            }, null, 8, ["modelValue", "error"])
          ]),
          c("div", qs, [
            h(W, {
              modelValue: o.email,
              "onUpdate:modelValue": a[3] || (a[3] = (l) => o.email = l),
              name: "email",
              label: "Email",
              error: u.email?.error?.message
            }, null, 8, ["modelValue", "error"]),
            h(W, {
              modelValue: o.phoneNumber,
              "onUpdate:modelValue": a[4] || (a[4] = (l) => o.phoneNumber = l),
              name: "phoneNumber",
              label: "Teléfono",
              error: u.phoneNumber?.error?.message
            }, null, 8, ["modelValue", "error"])
          ]),
          c("div", Ys, [
            h(ie, {
              modelValue: o.password,
              "onUpdate:modelValue": a[5] || (a[5] = (l) => o.password = l),
              name: "password",
              label: "Contraseña",
              error: u.password?.error?.message
            }, null, 8, ["modelValue", "error"])
          ]),
          h(R, {
            type: "submit",
            label: "Registrar",
            class: "ui:mt-6 ui:w-full ui:py-2",
            loading: e.loading
          }, null, 8, ["loading"]),
          c("p", Xs, [
            a[7] || (a[7] = U(" ¿Tienes cuenta? ", -1)),
            h(y(rn), {
              class: "ui:font-semibold ui:text-blue-600 ui:hover:underline",
              to: { name: "login" }
            }, {
              default: _(() => [...a[6] || (a[6] = [
                U(" Inicia sesión ", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["initialValues", "resolver"])
    ]));
  }
}), ea = { class: "ui:hidden ui:lg:flex ui:items-center ui:gap-1 ui:bg-gray-100/50 ui:p-1 ui:rounded-full ui:border ui:border-gray-200/20 ui:backdrop-blur-sm" }, ta = { class: "ui:flex ui:items-center ui:gap-3" }, na = /* @__PURE__ */ O({
  __name: "Header",
  props: {
    navigationItems: {
      type: Array,
      default: () => []
    },
    maxWidth: { type: String, default: "ui:max-w-7xl" },
    sticky: { type: Boolean, default: !0 },
    blurAmount: { type: String, default: "ui:backdrop-blur-md" },
    registerLabel: { type: String, default: "Regístrate" }
  },
  setup(e) {
    const t = fe(!1), n = () => {
      t.value = window.scrollY > 20;
    };
    return pt(() => window.addEventListener("scroll", n)), ht(() => window.removeEventListener("scroll", n)), (o, i) => {
      const s = H("router-link");
      return f(), b("header", {
        id: "header",
        class: Z([
          e.sticky ? "ui:fixed ui:top-0 ui:z-50" : "ui:relative",
          t.value ? `ui:py-3 ui:bg-white/70 ${e.blurAmount} ui:border-b ui:border-gray-200/50 ui:shadow-sm` : "ui:py-6 ui:bg-transparent",
          "ui:w-full ui:transition-all ui:duration-500 ui:px-6"
        ])
      }, [
        c("div", {
          class: Z([e.maxWidth, "ui:mx-auto ui:flex ui:items-center ui:justify-between"])
        }, [
          h(s, {
            to: { name: "landing" },
            class: "ui:flex ui:items-center ui:group ui:no-underline"
          }, {
            default: _(() => [
              I(o.$slots, "logo", {}, () => [
                i[0] || (i[0] = c("span", { class: "ui:text-xl ui:font-black ui:tracking-tighter ui:text-primary" }, " LOGO ", -1))
              ])
            ]),
            _: 3
          }),
          c("nav", ea, [
            (f(!0), b(T, null, N(e.navigationItems, (r) => (f(), $(s, {
              key: r.title,
              to: r.to,
              class: "ui:px-5 ui:py-2 ui:text-sm ui:font-semibold ui:text-gray-600 ui:rounded-full ui:transition-all ui:duration-300 ui:hover:text-primary ui:hover:bg-white ui:hover:shadow-sm ui:no-underline",
              "active-class": "ui:bg-white !ui:text-primary ui:shadow-sm"
            }, {
              default: _(() => [
                U(w(r.title), 1)
              ]),
              _: 2
            }, 1032, ["to"]))), 128))
          ]),
          c("div", ta, [
            I(o.$slots, "extra-actions"),
            h(s, {
              to: { name: "login" },
              class: "ui:no-underline"
            }, {
              default: _(() => [
                h(R, {
                  label: e.registerLabel,
                  rounded: "",
                  size: "small",
                  class: "ui:!border-none ui:!shadow-lg ui:!shadow-emerald-500/20 ui:!px-5 ui:transition-all ui:hover:-translate-y-0.5"
                }, null, 8, ["label"])
              ]),
              _: 1
            }),
            i[1] || (i[1] = c("button", { class: "ui:lg:hidden ui:p-2 ui:text-gray-700 ui:hover:bg-gray-100 ui:rounded-xl ui:transition-colors" }, [
              c("i", { class: "pi pi-bars ui:text-xl" })
            ], -1))
          ])
        ], 2)
      ], 2);
    };
  }
}), oa = {
  class: /* @__PURE__ */ Z(["ui:fixed ui:top-0 ui:left-0 ui:z-50 ui:w-full ui:px-6 ui:pointer-event-none"])
}, ia = { class: "ui:flex ui:items-center ui:gap-3" }, ra = { class: "ui:hidden ui:lg:flex ui:items-center ui:gap-2" }, sa = { class: "ui:flex ui:items-center ui:gap-3" }, aa = /* @__PURE__ */ O({
  __name: "HeaderM",
  props: {
    navigationItems: { default: () => [] },
    isAuthenticated: { type: Boolean, default: !1 },
    maxWidth: { default: "ui:max-w-7xl" },
    sticky: { type: Boolean, default: !0 },
    blurAmount: { default: "ui:backdrop-blur-xl" },
    registerLabel: { default: "Regístrate" },
    loginLabel: { default: "Log in" },
    homeRouteName: { default: "home" }
  },
  emits: ["login", "logout", "profile", "toggle-mobile-menu"],
  setup(e, { emit: t }) {
    const n = e, o = fe(!1), i = () => {
      o.value = window.scrollY > 20;
    }, s = t;
    return pt(() => window.addEventListener("scroll", i)), ht(() => window.removeEventListener("scroll", i)), (r, a) => {
      const u = H("router-link");
      return f(), b("header", oa, [
        c("div", {
          class: Z(["ui:mx-auto ui:transition-all ui:duration-500 ui:ease-in-out ui:pointer-events-auto", o.value ? "ui:max-w-5xl ui:mt-2" : "ui:max-w-7xl ui:mt-6"])
        }, [
          c("div", {
            class: Z([
              "ui:flex ui:items-center ui:justify-between ui:px-6 ui:py-3 ui:rounded-2xl ui:border ui:shadow-lg ui:transition-all ui:duration-500",
              o.value ? "ui:bg-white/70 ui:backdrop-blur-md ui:border-gray-200/50" : "ui:bg-white ui:border-slate-100"
            ])
          }, [
            c("div", ia, [
              c("button", {
                class: "ui:lg:hidden ui:p-2 ui:text-gray-600",
                onClick: a[0] || (a[0] = (l) => s("toggle-mobile-menu"))
              }, [...a[4] || (a[4] = [
                c("i", { class: "pi pi-bars ui:text-lg" }, null, -1)
              ])]),
              h(u, {
                to: { name: n.homeRouteName },
                class: "ui:flex ui:items-center ui:gap-2 ui:no-underline"
              }, {
                default: _(() => [
                  I(r.$slots, "logo", {}, () => [
                    a[5] || (a[5] = c("div", { class: "ui:bg-black ui:p-1.5 ui:rounded-lg" }, [
                      c("i", { class: "pi pi-bolt ui:text-white ui:text-sm" })
                    ], -1)),
                    a[6] || (a[6] = c("span", { class: "ui:font-bold ui:text-lg ui:tracking-tight ui:text-black" }, "Logo", -1))
                  ])
                ]),
                _: 3
              }, 8, ["to"])
            ]),
            c("nav", ra, [
              (f(!0), b(T, null, N(n.navigationItems, (l) => (f(), $(u, {
                key: l.title,
                to: l.to,
                class: "ui:flex ui:items-center ui:gap-2 ui:px-4 ui:py-2 ui:text-sm ui:font-medium ui:text-gray-500 ui:rounded-full ui:border ui:border-transparent ui:transition-all ui:hover:bg-gray-100 ui:hover:text-black ui:no-underline ui:!duration-300",
                "active-class": "ui:bg-gray-100 ui:!text-black ui:border-gray-200"
              }, {
                default: _(() => [
                  l.icon ? (f(), b("i", {
                    key: 0,
                    class: Z([l.icon, "ui:text-[10px]"])
                  }, null, 2)) : C("", !0),
                  U(" " + w(l.title), 1)
                ]),
                _: 2
              }, 1032, ["to"]))), 128))
            ]),
            c("div", sa, [
              I(r.$slots, "actions", {}, () => [
                n.isAuthenticated ? (f(), b(T, { key: 1 }, [
                  h(R, {
                    icon: "pi pi-user",
                    size: "small",
                    rounded: "",
                    class: "ui:!bg-gray-100 ui:!text-black ui:!border-gray-200",
                    onClick: a[2] || (a[2] = (l) => s("profile"))
                  }),
                  h(R, {
                    icon: "pi pi-sign-out",
                    size: "small",
                    rounded: "",
                    class: "ui:!text-gray-400 ui:hover:!text-red-500 ui:hover:!border-red-500 ui:!transition-colors ui:!bg-transparent ui:!border-gray-200 ui:!cursor-pointer ui:!transition-transform ui:hover:!scale-110",
                    onClick: a[3] || (a[3] = (l) => s("logout"))
                  })
                ], 64)) : (f(), $(R, {
                  key: 0,
                  icon: "pi pi-sign-in",
                  label: n.loginLabel,
                  size: "small",
                  rounded: "",
                  class: "ui:!bg-black ui:!border-none ui:!px-4 ui:!py-2",
                  onClick: a[1] || (a[1] = (l) => s("login"))
                }, null, 8, ["label"]))
              ])
            ])
          ], 2)
        ], 2)
      ]);
    };
  }
}), ua = { class: "ui:w-full ui:pb-6 ui:pt-12 ui:px-6" }, la = { class: "ui:grid ui:grid-cols-1 ui:md:grid-cols-3 ui:gap-6 ui:items-center" }, ca = { class: "ui:flex ui:justify-center md:ui:justify-start" }, da = { class: "ui:flex ui:items-center ui:gap-2" }, fa = { class: "ui:bg-black ui:w-8 ui:h-8 ui:flex ui:items-center ui:justify-center ui:rounded-lg" }, ma = { class: "ui:font-bold ui:text-lg ui:text-black" }, pa = { class: "ui:flex ui:flex-wrap ui:justify-center ui:gap-x-6 ui:gap-y-2" }, ha = { class: "ui:flex ui:justify-center ui:gap-2" }, ga = ["href"], ba = { class: "ui:flex ui:flex-col md:ui:flex-row ui:justify-between ui:items-center ui:gap-2 ui:text-[10px] ui:text-gray-400" }, va = { class: "ui:flex ui:gap-4 ui:font-medium" }, ya = /* @__PURE__ */ O({
  __name: "Footer",
  props: {
    titleLogo: {},
    iconLogo: {},
    navigationItems: { default: () => [] },
    socialItems: { default: () => [
      { icon: "pi pi-instagram", link: "https://www.instagram.com", label: "Instagram" },
      { icon: "pi pi-twitter", link: "https://x.com/", label: "Twitter" },
      { icon: "pi pi-linkedin", link: "https://www.linkedin.com/", label: "LinkedIn" }
    ] },
    maxWidth: { default: "ui:max-w-7xl" },
    blurAmount: { default: "ui:backdrop-blur-xl" },
    privacyRouteName: { default: "privacy" },
    termsRouteName: { default: "terms" }
  },
  setup(e) {
    const t = e;
    return (n, o) => {
      const i = H("router-link");
      return f(), b("footer", ua, [
        c("div", {
          class: Z([
            "ui:mx-auto ui:bg-white/70 ui:border ui:border-gray-200/50 ui:shadow-lg ui:rounded-2xl ui:px-8 ui:py-6 ",
            t.maxWidth,
            t.blurAmount
          ])
        }, [
          c("div", la, [
            c("div", ca, [
              h(i, {
                to: { name: "home" },
                class: "ui:no-underline"
              }, {
                default: _(() => [
                  I(n.$slots, "logo", {}, () => [
                    c("div", da, [
                      c("div", fa, [
                        c("i", {
                          class: Z([t.iconLogo, "ui:text-white ui:text-xs"])
                        }, null, 2)
                      ]),
                      c("span", ma, w(t.titleLogo), 1)
                    ])
                  ])
                ]),
                _: 3
              })
            ]),
            c("nav", pa, [
              (f(!0), b(T, null, N(t.navigationItems, (s) => (f(), $(i, {
                key: s.title,
                to: s.to,
                class: "ui:text-sm ui:font-semibold ui:text-gray-500 ui:hover:text-black ui:transition-colors ui:no-underline"
              }, {
                default: _(() => [
                  U(w(s.title), 1)
                ]),
                _: 2
              }, 1032, ["to"]))), 128))
            ]),
            c("div", ha, [
              (f(!0), b(T, null, N(t.socialItems, (s) => (f(), b("a", {
                key: s.label,
                href: s.link,
                class: "ui:flex ui:items-center ui:justify-center ui:w-8 ui:h-8 ui:rounded-xl ui:bg-gray-200 ui:text-gray-400 ui:transition-all ui:hover:bg-black ui:hover:text-white"
              }, [
                c("i", {
                  class: Z([s.icon])
                }, null, 2)
              ], 8, ga))), 128))
            ])
          ]),
          o[2] || (o[2] = c("div", { class: "ui:w-full ui:h-px ui:bg-gray-100/60 ui:my-5" }, null, -1)),
          c("div", ba, [
            c("p", null, "© 2026 " + w(t.titleLogo) + ". Todos los derechos reservados.", 1),
            c("div", va, [
              h(i, {
                to: { name: t.privacyRouteName },
                class: "ui:text-gray-400 ui:hover:text-black ui:no-underline ui:transition-colors"
              }, {
                default: _(() => [...o[0] || (o[0] = [
                  U(" Privacidad ", -1)
                ])]),
                _: 1
              }, 8, ["to"]),
              h(i, {
                to: { name: t.termsRouteName },
                class: "ui:text-gray-400 ui:hover:text-black ui:no-underline ui:transition-colors"
              }, {
                default: _(() => [...o[1] || (o[1] = [
                  U(" Términos ", -1)
                ])]),
                _: 1
              }, 8, ["to"])
            ])
          ])
        ], 2)
      ]);
    };
  }
}), te = /* @__PURE__ */ O({
  __name: "BaseCard",
  props: {
    width: { default: "ui:w-full" },
    height: { default: "ui:h-auto" },
    padding: { default: "ui:p-8" },
    blurAmount: { default: "ui:backdrop-blur-xl" },
    borderRounded: { default: "ui:rounded-2xl" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), b("div", {
      class: Z([
        "ui:bg-white ui:shadow-xl ui:border ui:border-gray-200/50 ui:flex ui:flex-col",
        t.width,
        t.height,
        t.padding,
        t.blurAmount,
        t.borderRounded
      ])
    }, [
      I(n.$slots, "default")
    ], 2));
  }
}), _a = { class: "ui:w-72 ui:h-full ui:z-50 ui:flex ui:flex-col" }, wa = ["href", "onClick"], ka = { class: "ui:text-sm ui:font-semibold" }, xa = {
  key: 0,
  class: "ui:w-full ui:pt-4"
}, $a = { class: "ui:flex ui:items-center ui:gap-3 ui:p-1 ui:bg-gray-100/50 ui:rounded-[1.5rem] ui:border ui:border-gray-200/50" }, za = { class: "ui:flex ui:flex-col ui:overflow-hidden ui:flex-1" }, Za = { class: "ui:font-bold ui:text-sm ui:text-black ui:truncate" }, Sa = { class: "ui:text-[10px] ui:font-bold ui:text-gray-400 ui:uppercase" }, Oa = /* @__PURE__ */ O({
  __name: "Navbar",
  props: {
    username: { type: String, default: "Admin Usuario" },
    userRole: { type: String, default: "Admin" },
    showUserCard: { type: Boolean, default: !1 },
    navigationItems: {
      type: Array,
      default: () => []
    },
    homeRoute: {
      type: String,
      default: "home"
    },
    isMobile: { type: Boolean, default: !1 }
  },
  emits: ["logout", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, i = (s) => s ? s.charAt(0).toUpperCase() : "U";
    return (s, r) => {
      const a = H("router-link");
      return f(), b("nav", _a, [
        h(te, {
          padding: "ui:p-4",
          height: "ui:h-full"
        }, {
          default: _(() => [
            h(y(sn), {
              model: n.navigationItems,
              class: "ui:!w-full ui:!h-full ui:!bg-transparent ui:!border-none"
            }, {
              start: _(() => [
                e.isMobile ? (f(), b("button", {
                  key: 0,
                  onClick: r[0] || (r[0] = (u) => s.$emit("close")),
                  class: "ui:absolute ui:top-0 ui:right-0 ui:p-2 ui:text-gray-500 ui:hover:text-black ui:z-50"
                }, [...r[2] || (r[2] = [
                  c("i", { class: "pi pi-times ui:text-xl" }, null, -1)
                ])])) : C("", !0),
                h(a, {
                  to: { name: n.homeRoute },
                  class: "ui:flex ui:flex-col ui:items-center ui:gap-2 ui:py-4 ui:mb-2 ui:no-underline"
                }, {
                  default: _(() => [
                    I(s.$slots, "logo", {}, () => [
                      r[3] || (r[3] = c("div", { class: "ui:bg-black ui:w-12 ui:h-12 ui:flex ui:items-center ui:justify-center ui:rounded-2xl ui:shadow-lg" }, [
                        c("i", { class: "pi pi-bolt ui:text-white ui:text-xl" })
                      ], -1)),
                      r[4] || (r[4] = c("span", { class: "ui:text-xl ui:font-bold ui:text-black" }, [
                        U("Logo"),
                        c("span", { class: "ui:text-gray-400" }, "App")
                      ], -1))
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])
              ]),
              item: _(({ item: u }) => [
                u.to ? (f(), $(a, {
                  key: 0,
                  to: u.to
                }, {
                  default: _(({ href: l, navigate: p, isActive: g }) => [
                    c("a", {
                      href: l,
                      onClick: p,
                      class: Z(["ui:flex ui:items-center ui:gap-3 ui:px-4 ui:py-2", [
                        g ? "ui:bg-black ui:text-white" : ""
                      ]])
                    }, [
                      c("span", {
                        class: Z([u.icon, "ui:text-lg"])
                      }, null, 2),
                      c("span", ka, w(u.label), 1)
                    ], 10, wa)
                  ]),
                  _: 2
                }, 1032, ["to"])) : C("", !0)
              ]),
              end: _(() => [
                n.showUserCard ? (f(), b("div", xa, [
                  c("div", $a, [
                    h(a, {
                      to: { name: "profile" },
                      title: "Ver mi perfil",
                      class: "ui:no-underline ui:transition-transform ui:hover:scale-110 ui:duration-300 px-1"
                    }, {
                      default: _(() => [
                        h(y(Be), {
                          label: i(n.username),
                          class: "ui:!bg-black ui:!text-white ui:shadow-md",
                          shape: "circle"
                        }, null, 8, ["label"])
                      ]),
                      _: 1
                    }),
                    c("div", za, [
                      c("span", Za, w(n.username), 1),
                      c("span", Sa, w(n.userRole), 1)
                    ]),
                    c("button", {
                      onClick: r[1] || (r[1] = (u) => o("logout")),
                      class: "ui:p-2 ui:text-gray-400 ui:hover:text-red-500 ui:transition-colors ui:bg-transparent ui:border-0 ui:cursor-pointer ui:transition-transform ui:hover:scale-115 ui:duration-300"
                    }, [...r[5] || (r[5] = [
                      c("i", { class: "pi pi-sign-out" }, null, -1)
                    ])])
                  ])
                ])) : C("", !0)
              ]),
              _: 3
            }, 8, ["model"])
          ]),
          _: 3
        })
      ]);
    };
  }
});
function Jt(e, t) {
  return e.isVisible === void 0 ? !0 : typeof e.isVisible == "function" ? e.isVisible(t) : e.isVisible;
}
function Oe(e, t) {
  return e.icon ? typeof e.icon == "function" ? e.icon(t) : e.icon : "";
}
function Ce(e, t) {
  return e.class ? typeof e.class == "function" ? e.class(t) : e.class : "";
}
const Ca = { class: "ui:flex ui:flex-wrap ui:items-center ui:justify-between ui:gap-4 ui:w-full" }, Pa = { class: "ui:flex ui:gap-2 ui:items-center ui:overflow-hidden ui:max-w-full" }, Ea = { key: 0 }, Ta = { class: "ui:flex ui:items-center ui:gap-4 ui:border ui:border-primary ui:bg-transparent ui:rounded-full ui:w-full ui:py-1 ui:px-2 ui:justify-between ui:max-w-md" }, Ia = { class: "ui:text-color ui:font-medium" }, Aa = { class: "hidden sm:block" }, ja = { class: "ui:block ui:sm:hidden" }, Ra = /* @__PURE__ */ O({
  __name: "BaseDataTable",
  props: {
    value: {},
    columns: {},
    loading: { type: Boolean, default: !1 },
    size: {},
    showGridLines: { type: Boolean, default: !1 },
    stripedRows: { type: Boolean, default: !1 },
    paginator: { type: Boolean, default: !1 },
    rows: {},
    rowsPerPageOptions: {},
    useCustomPaginator: { type: Boolean, default: !1 },
    removableSort: { type: Boolean, default: !1 },
    showSearch: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = fe({
      global: { value: null, matchMode: un.CONTAINS }
    });
    return (o, i) => {
      const s = H("router-link");
      return f(), $(y(an), {
        filters: n.value,
        "onUpdate:filters": i[1] || (i[1] = (r) => n.value = r),
        globalFilterFields: e.columns.map((r) => r.field),
        value: t.value,
        loading: t.loading,
        tableStyle: "width: 100%",
        class: "ui:w-full",
        size: e.size,
        showGridlines: t.showGridLines,
        stripedRows: t.stripedRows,
        paginator: t.paginator,
        rows: t.rows,
        rowsPerPageOptions: t.rowsPerPageOptions,
        useCustomPaginator: t.useCustomPaginator,
        removableSort: t.removableSort
      }, Yt({
        header: _(() => [
          c("div", Ca, [
            c("div", Pa, [
              I(o.$slots, "table-actions")
            ]),
            t.showSearch ? (f(), $(y(Re), {
              key: 0,
              class: "ui:w-full ui:sm:w-72"
            }, {
              default: _(() => [
                h(y(De), null, {
                  default: _(() => [...i[2] || (i[2] = [
                    c("i", { class: "pi pi-search" }, null, -1)
                  ])]),
                  _: 1
                }),
                h(y(gt), {
                  modelValue: n.value.global.value,
                  "onUpdate:modelValue": i[0] || (i[0] = (r) => n.value.global.value = r),
                  placeholder: "Buscar...",
                  class: "ui:rounded-xl ui:w-full",
                  size: "small"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })) : C("", !0)
          ])
        ]),
        default: _(() => [
          (f(!0), b(T, null, N(t.columns, (r) => (f(), $(y(xe), G({
            key: r.field,
            sortable: r.sortable
          }, { ref_for: !0 }, r), {
            body: _((a) => [
              r.actions ? (f(), b("div", Ea, [
                (f(!0), b(T, null, N(r.actions, (u, l) => (f(), b(T, { key: l }, [
                  y(Jt)(u, a.data) ? (f(), b(T, { key: 0 }, [
                    u.to ? (f(), $(s, {
                      key: 0,
                      to: u.to(a.data),
                      class: "ui:no-underline"
                    }, {
                      default: _(() => [
                        h(y(le), {
                          icon: y(Oe)(u, a.data),
                          label: u.text,
                          class: Z(["ui:!p-2", y(Ce)(u, a.data)]),
                          text: "",
                          rounded: "",
                          size: "small"
                        }, null, 8, ["icon", "label", "class"])
                      ]),
                      _: 2
                    }, 1032, ["to"])) : (f(), $(y(le), {
                      key: 1,
                      icon: y(Oe)(u, a.data),
                      label: u.text,
                      class: Z(["ui:!p-2", y(Ce)(u, a.data)]),
                      text: "",
                      rounded: "",
                      size: "small",
                      onClick: (p) => u.action?.(a.data, p)
                    }, null, 8, ["icon", "label", "class", "onClick"]))
                  ], 64)) : C("", !0)
                ], 64))), 128))
              ])) : I(o.$slots, r.field, {
                key: 1,
                data: a.data
              }, () => [
                U(w(r.field.includes(".") ? r.field.split(".").reduce((u, l) => u?.[l], a.data) : a.data[r.field]), 1)
              ])
            ]),
            _: 2
          }, 1040, ["sortable"]))), 128))
        ]),
        _: 2
      }, [
        e.useCustomPaginator ? {
          name: "paginatorcontainer",
          fn: _(({ first: r, last: a, page: u, pageCount: l, prevPageCallback: p, nextPageCallback: g, totalRecords: m }) => [
            c("div", Ta, [
              h(y(le), {
                icon: "pi pi-chevron-left",
                rounded: "",
                text: "",
                onClick: p,
                disabled: u === 0
              }, null, 8, ["onClick", "disabled"]),
              c("div", Ia, [
                c("span", Aa, "Mostrando del " + w(r) + " al " + w(a) + " de " + w(m), 1),
                c("span", ja, "Página " + w(u + 1) + " de " + w(l), 1)
              ]),
              h(y(le), {
                icon: "pi pi-chevron-right",
                rounded: "",
                text: "",
                onClick: g,
                disabled: u === (l ?? 0) - 1
              }, null, 8, ["onClick", "disabled"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["filters", "globalFilterFields", "value", "loading", "size", "showGridlines", "stripedRows", "paginator", "rows", "rowsPerPageOptions", "useCustomPaginator", "removableSort"]);
    };
  }
}), Da = {
  key: 0,
  class: "ui:text-surface-500 ui:dark:text-surface-400 ui:block ui:mb-8"
}, Va = { class: "ui:mt-1" }, Na = { class: "ui:flex ui:justify-end ui:gap-2" }, Ua = /* @__PURE__ */ O({
  __name: "BaseDialog",
  props: {
    labelButton: {},
    icon: {},
    header: { default: "Dialog" },
    subtitle: {},
    inputsDialog: {},
    modelValue: {},
    resolver: {},
    loading: { type: Boolean }
  },
  emits: ["update:modelValue", "save"],
  setup(e, { expose: t, emit: n }) {
    const o = fe(!1), i = fe({}), s = (g) => {
      const m = g ? { ...g } : {};
      a.inputsDialog?.forEach((v) => {
        const x = v.field;
        if (!x) return;
        const S = m[x];
        if (v.type === "time" && typeof S == "string" && S) {
          const [K, ae] = S.split(":"), ge = /* @__PURE__ */ new Date();
          ge.setHours(parseInt(K) || 0, parseInt(ae) || 0, 0, 0), m[x] = ge;
        }
      }), i.value = m, o.value = !0;
    }, r = () => {
      o.value = !1;
    }, a = e, u = n, l = (g) => {
      if (g.valid) {
        const m = { ...i.value, ...g.values };
        a.inputsDialog?.forEach((v) => {
          const x = v.field;
          if (x && v.type === "time" && m[x] instanceof Date) {
            const S = m[x], K = String(S.getHours()).padStart(2, "0"), ae = String(S.getMinutes()).padStart(2, "0");
            m[x] = `${K}:${ae}`;
          }
        }), u("update:modelValue", m), u("save", m), o.value = !1;
      }
    }, p = {
      pcCloseButton: {
        root: {
          class: [
            "ui:!ring-0 ui:!outline-none ui:!border-none ui:!shadow-none",
            "ui:!text-slate-400 ui:hover:!text-slate-700 ui:!bg-transparent ui:hover:!bg-slate-100",
            "ui:!transition-colors ui:!duration-200"
          ]
        }
      }
    };
    return t({ open: s, close: r }), (g, m) => (f(), b(T, null, [
      a.labelButton || a.icon ? (f(), $(R, {
        key: 0,
        label: a.labelButton,
        icon: a.icon,
        onClick: m[0] || (m[0] = (v) => o.value = !0),
        class: "'ui:!p-2'",
        text: "",
        rounded: ""
      }, null, 8, ["label", "icon"])) : C("", !0),
      h(y(ln), {
        visible: o.value,
        "onUpdate:visible": m[1] || (m[1] = (v) => o.value = v),
        modal: "",
        header: a.header,
        style: { width: "30rem" },
        pt: p
      }, {
        footer: _(() => [
          I(g.$slots, "footer", { data: i.value }, () => [
            c("div", Na, [
              h(R, {
                label: "Cancelar",
                severity: "secondary",
                onClick: r,
                loading: e.loading
              }, null, 8, ["loading"]),
              h(R, {
                label: "Guardar",
                type: "submit",
                form: "base-dialog-form",
                loading: e.loading
              }, null, 8, ["loading"])
            ])
          ])
        ]),
        default: _(() => [
          a.subtitle ? (f(), b("span", Da, w(a.subtitle), 1)) : C("", !0),
          h(y(he), {
            id: "base-dialog-form",
            "initial-values": i.value,
            resolver: e.resolver,
            onSubmit: l
          }, {
            default: _((v) => [
              (f(!0), b(T, null, N(a.inputsDialog, (x) => (f(), b("div", {
                key: x.field,
                class: "ui:mb-1"
              }, [
                h(W, G({ ref_for: !0 }, x, {
                  name: x.field,
                  label: x.label,
                  modelValue: i.value[x.field],
                  "onUpdate:modelValue": (S) => i.value[x.field] = S,
                  error: v[x.field]?.error?.message
                }), null, 16, ["name", "label", "modelValue", "onUpdate:modelValue", "error"])
              ]))), 128)),
              c("div", Va, [
                I(g.$slots, "default", {
                  form: v,
                  data: i.value
                })
              ])
            ]),
            _: 3
          }, 8, ["initial-values", "resolver"])
        ]),
        _: 3
      }, 8, ["visible", "header"])
    ], 64));
  }
}), Ba = {
  key: 0,
  class: "ui:px-4 ui:pt-4 ui:border-b ui:border-slate-100 ui:pb-2"
}, Fa = { class: "ui:text-sm ui:font-semibold ui:text-slate-500 ui:uppercase" }, La = { class: "ui:flex ui:items-center ui:gap-6 ui:md:gap-6 ui:p-4 ui:relative" }, Ma = { class: "ui:hidden ui:md:block" }, Ja = { class: "ui:flex-1" }, Wa = { class: "ui:text-xl ui:font-bold ui:text-slate-800" }, Ha = { class: "ui:text-slate-500" }, Ka = { class: "ui:mt-2" }, Ga = { class: "ui:relative ui:z-[100]" }, qa = /* @__PURE__ */ O({
  __name: "UserCardProfile",
  props: {
    title: {},
    image: {},
    initials: {},
    mainText: {},
    subtext: {},
    size: {},
    shape: {},
    padding: {}
  },
  emits: ["edit"],
  setup(e, { emit: t }) {
    const n = e, o = t, i = () => {
      o("edit");
    };
    return (s, r) => (f(), $(te, {
      padding: n.padding
    }, {
      default: _(() => [
        e.title ? (f(), b("div", Ba, [
          c("h3", Fa, w(e.title), 1)
        ])) : C("", !0),
        c("div", La, [
          c("div", Ma, [
            h(y(Be), {
              image: n.image,
              label: e.image ? void 0 : e.initials,
              size: e.size,
              shape: e.shape
            }, null, 8, ["image", "label", "size", "shape"])
          ]),
          c("div", Ja, [
            c("h2", Wa, w(e.mainText), 1),
            c("p", Ha, w(e.subtext), 1),
            c("div", Ka, [
              I(s.$slots, "extra-info")
            ])
          ]),
          c("div", Ga, [
            I(s.$slots, "actions", {}, () => [
              h(R, {
                variant: "outlined",
                label: "Editar",
                size: "small",
                icon: "pi pi-user-edit",
                rounded: "",
                onClick: i,
                class: "ui:!px-3"
              })
            ])
          ])
        ])
      ]),
      _: 3
    }, 8, ["padding"]));
  }
}), Ya = { class: "ui:w-9 ui:h-9 ui:flex ui:items-center ui:justify-center ui:bg-slate-50 ui:rounded-full" }, Xa = { class: "ui:flex ui:flex-col" }, Qa = { class: "ui:text-xs ui:font-semibold ui:text-slate-400 ui:uppercase ui:tracking-wider" }, eu = { class: "ui:text-sm ui:text-slate-700" }, tu = /* @__PURE__ */ O({
  __name: "BaseInfoField",
  props: {
    label: {},
    value: {},
    icon: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), b("div", {
      key: t.label,
      class: "flex items-center gap-3 text-slate-500"
    }, [
      c("div", Ya, [
        c("i", {
          class: Z([t.icon, "ui:text-slate-400 ui:text-sm"])
        }, null, 2)
      ]),
      c("div", Xa, [
        c("span", Qa, w(t.label), 1),
        c("span", eu, w(t.value || "---"), 1)
      ])
    ]));
  }
}), nu = { class: "ui:flex ui:items-center ui:gap-3 ui:p-1 ui:rounded-2xl ui:border ui:border-gray-200/50 ui:bg-white ui:shadow-xl ui:backdrop-blur-xl" }, ou = { class: "ui:flex ui:flex-col ui:overflow-hidden ui:flex-1" }, iu = { class: "ui:font-bold ui:text-sm ui:text-black ui:truncate" }, ru = { class: "ui:text-[10px] ui:font-bold ui:text-gray-400 ui:uppercase" }, su = /* @__PURE__ */ O({
  __name: "NavUserCard",
  props: {
    username: { default: "Admin Usuario" },
    userRole: { default: "Admin" },
    nagivateTo: { default: "profile" }
  },
  emits: ["logout"],
  setup(e, { emit: t }) {
    const n = e, o = t, i = (s) => s ? s.charAt(0).toUpperCase() : "U";
    return (s, r) => {
      const a = H("router-link");
      return f(), b("div", nu, [
        h(a, {
          to: { name: n.nagivateTo },
          title: "Ver mi perfil",
          class: "ui:no-underline ui:transition-transform ui:hover:scale-110 ui:duration-300 px-1"
        }, {
          default: _(() => [
            h(y(Be), {
              label: i(n.username),
              class: "ui:!bg-black ui:!text-white ui:shadow-md",
              shape: "circle"
            }, null, 8, ["label"])
          ]),
          _: 1
        }, 8, ["to"]),
        c("div", ou, [
          c("span", iu, w(n.username), 1),
          c("span", ru, w(n.userRole), 1)
        ]),
        c("button", {
          onClick: r[0] || (r[0] = (u) => o("logout")),
          class: "ui:p-2 ui:text-gray-400 ui:hover:text-red-500 ui:transition-colors ui:bg-transparent ui:border-0 ui:cursor-pointer ui:transition-transform ui:hover:scale-115 ui:duration-300"
        }, [...r[1] || (r[1] = [
          c("i", { class: "pi pi-sign-out" }, null, -1)
        ])])
      ]);
    };
  }
}), au = {
  key: 0,
  class: "ui:flex ui:w-full ui:gap-2 ui:items-center"
}, uu = { class: "ui:flex ui:gap-2" }, lu = /* @__PURE__ */ O({
  __name: "ScheduleManager",
  props: {
    value: { default: () => [] },
    dayColumnHeader: {},
    statusColumnHeader: {},
    actionsColumnHeader: {},
    loading: { type: Boolean, default: !1 },
    dayNames: {},
    actions: {}
  },
  setup(e) {
    const t = e, n = (i) => {
      if (!i || typeof i != "string") return "";
      try {
        return i.includes(":") ? i.substring(0, 5) : i;
      } catch {
        return "";
      }
    }, o = de(() => [1, 2, 3, 4, 5, 6, 7].map((s) => {
      const r = t.value.filter((a) => a.dayOfWeek.id === s);
      return {
        key: s.toString(),
        data: {
          id: s,
          name: t.dayNames ? t.dayNames[s] : `Día ${s}`,
          type: "day",
          dayOfWeek: { id: s },
          isClosed: r.length === 0 || r.every((a) => a.isClosed)
        },
        children: r.map((a) => ({
          key: `slot-${a.id}`,
          data: {
            ...a,
            type: "slot"
          }
        }))
      };
    }));
    return (i, s) => {
      const r = H("router-link");
      return f(), $(y(cn), {
        value: o.value,
        loading: t.loading,
        class: "ui:w-full"
      }, {
        default: _(() => [
          h(y(xe), {
            field: "name",
            header: e.dayColumnHeader || "Día / Franja",
            expander: "",
            class: "ui:w-[50%] ui:p-4 ui:border-b ui:border-slate-100",
            "body-class": "ui:p-4 ui:border-b ui:border-slatel-50 ui:text-slate-800"
          }, null, 8, ["header"]),
          h(y(xe), {
            field: "openingTime",
            header: e.statusColumnHeader || "Estado / Horario",
            class: "ui:w-[25%] ui:p-4 ui:border-b ui:border-slate-100"
          }, {
            body: _((a) => [
              a.node.data.type === "slot" ? (f(), b("div", au, [
                c("span", {
                  class: Z(["ui:flex ui:h-2.5 ui:w-2.5 ui:rounded-full ui:shrink-0", a.node.data.isClosed ? "ui:bg-red-500 ui:shadow-red-500/50 ui:shadow-sm" : "ui:bg-emerald-500 ui:shadow-emerald-500/50 ui:shadow-sm"])
                }, null, 2),
                c("div", {
                  class: Z(["ui:flex ui:items-center ui:gap-1", { "ui:opacity-30": a.node.data.isClosed }])
                }, [
                  h(y(be), {
                    severity: "secondary",
                    value: n(a.node.data.openingTime),
                    rounded: "",
                    class: "ui:text-sm ui:font-mono"
                  }, null, 8, ["value"]),
                  s[0] || (s[0] = c("span", { class: "text-slate-400" }, "-", -1)),
                  h(y(be), {
                    severity: "secondary",
                    value: n(a.node.data.closingTime),
                    rounded: "",
                    class: "ui:text-sm ui:font-mono"
                  }, null, 8, ["value"])
                ], 2)
              ])) : (f(), b(T, { key: 1 }, [
                a.node.data.isClosed ? (f(), $(y(be), {
                  key: 0,
                  severity: "danger",
                  value: "Cerrado",
                  rounded: "",
                  class: "ui:text-xs"
                })) : (f(), $(y(be), {
                  key: 1,
                  severity: "success",
                  value: "Abierto",
                  rounded: "",
                  class: "ui:text-xs"
                }))
              ], 64))
            ]),
            _: 1
          }, 8, ["header"]),
          h(y(xe), {
            header: e.actionsColumnHeader || "Acciones",
            class: "ui:w-[25%] ui:p-4 ui:border-b ui:border-slate-100"
          }, {
            body: _((a) => [
              c("div", uu, [
                (f(!0), b(T, null, N(a.node.data.type === "slot" ? e.actions?.slot : e.actions?.day, (u, l) => (f(), b(T, { key: l }, [
                  y(Jt)(u, a.node.data) ? (f(), b(T, { key: 0 }, [
                    u.to ? (f(), $(r, {
                      key: 0,
                      to: u.to(a.node.data),
                      class: "ui:no-underline"
                    }, {
                      default: _(() => [
                        h(R, {
                          icon: y(Oe)(u, a.data),
                          label: u.text,
                          class: Z(["ui:!text-gray-400 ui:hover:!text-slate-700 ui:!transition-colors ui:!bg-transparent ui:hover:scale-110", y(Ce)(u, a.data)]),
                          text: "",
                          rounded: "",
                          size: "small"
                        }, null, 8, ["icon", "label", "class"])
                      ]),
                      _: 2
                    }, 1032, ["to"])) : (f(), $(R, {
                      key: 1,
                      icon: y(Oe)(u, a.node.data),
                      label: u.text,
                      text: "",
                      rounded: "",
                      size: "small",
                      class: Z(["ui:!text-gray-400 ui:hover:!text-slate-700 ui:!transition-colors ui:!bg-transparent ui:hover:scale-110", y(Ce)(u, a.node.data)]),
                      onClick: (p) => u.action?.(a.node.data, p)
                    }, null, 8, ["icon", "label", "class", "onClick"]))
                  ], 64)) : C("", !0)
                ], 64))), 128))
              ])
            ]),
            _: 1
          }, 8, ["header"])
        ]),
        _: 1
      }, 8, ["value", "loading"]);
    };
  }
}), cu = { class: "ui:h-full ui:w-full ui:overflow-auto ui:border ui:border-slate-200 ui:rounded-xl ui:bg-white ui:relative" }, du = { class: "ui:flex ui:sticky ui:top-0 ui:z-30 ui:bg-white ui:border-b ui:border-slate-200" }, fu = { class: "ui:font-bold ui:text-slate-800 ui:text-sm" }, mu = { class: "ui:text-[9px] ui:text-slate-400 ui:uppercase" }, pu = { class: "ui:flex ui:relative" }, hu = { class: "ui:w-20 ui:flex-shrink-0 ui:sticky ui:left-0 ui:z-20 ui:bg-slate-50 ui:border-r ui:border-slate-200" }, gu = { class: "ui:flex ui:flex-grow" }, bu = {
  key: 0,
  class: "ui:absolute ui:inset-0 ui:bg-slate-100/60 ui:z-10 ui:flex ui:items-center ui:justify-center"
}, vu = ["onClick"], yu = ["onClick"], _u = { class: "ui:font-bold ui:truncate" }, wu = { class: "ui:font-semibold ui:truncate" }, ku = { class: "ui:opacity-80 ui:truncate" }, we = 60, je = 160, xu = /* @__PURE__ */ O({
  __name: "EventCalendar",
  props: {
    resources: { default: () => [] },
    events: { default: () => [] },
    minTime: { default: 8 },
    maxTime: { default: 22 },
    closedRanges: {}
  },
  emits: ["event-click", "cell-click"],
  setup(e, { emit: t }) {
    const n = e, o = (l) => n.closedRanges?.some((p) => l >= p.from && l < p.to) ?? !1, i = de(() => {
      const l = [];
      for (let p = n.minTime; p <= n.maxTime; p++) l.push(p);
      return l;
    }), s = (l) => l.isDisabled ? typeof l.isDisabled == "function" ? l.isDisabled(l.data) : l.isDisabled : !1, r = (l) => {
      const p = l.start.getHours() + l.start.getMinutes() / 60, g = l.end.getHours() + l.end.getMinutes() / 60, m = (p - n.minTime) * we, v = (g - p) * we;
      return { top: `${m}px`, height: `${v}px` };
    }, a = t, u = (l) => l.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !1
    });
    return (l, p) => (f(), b("div", cu, [
      c("div", {
        style: ne({ minWidth: e.resources.length * je + 80 + "px" }),
        class: "ui:relative"
      }, [
        c("div", du, [
          p[0] || (p[0] = c("div", { class: "ui:w-20 ui:h-14 ui:sticky ui:left-0 ui:z-40 ui:bg-slate-50 ui:border-r ui:border-slate-200" }, null, -1)),
          (f(!0), b(T, null, N(e.resources, (g) => (f(), b("div", {
            key: g.id,
            style: ne({ width: je + "px" }),
            class: "ui:flex-shrink-0 ui:h-14 ui:flex ui:flex-col ui:items-center ui:justify-center ui:border-r ui:border-slate-200 ui:bg-white"
          }, [
            c("span", fu, w(g.label), 1),
            c("span", mu, w(g.type), 1)
          ], 4))), 128))
        ]),
        c("div", pu, [
          c("div", hu, [
            (f(!0), b(T, null, N(i.value, (g) => (f(), b("div", {
              key: g,
              style: ne({ height: we + "px" }),
              class: "ui:flex ui:justify-center ui:pt-2 ui:text-xs ui:font-medium ui:text-slate-400 ui:border-b ui:border-slate-100"
            }, w(String(g).padStart(2, "0")) + ":00 ", 5))), 128))
          ]),
          c("div", gu, [
            (f(!0), b(T, null, N(e.resources, (g) => (f(), b("div", {
              key: "col-" + g.id,
              style: ne({ width: je + "px" }),
              class: "ui:flex-shrink-0 ui:relative ui:border-r ui:border-slate-100 ui:bg-white"
            }, [
              s(g) ? (f(), b("div", bu)) : C("", !0),
              (f(!0), b(T, null, N(i.value, (m) => (f(), b("div", {
                key: "cell-" + m,
                style: ne({ height: we + "px" }),
                class: Z(["ui:relative ui:z-15 ui:border-b ui:border-slate-100 ui:transition-colors", [
                  s(g) || o(m) ? "ui:cursor-not-allowed" : "ui:hover:bg-slate-100/50",
                  o(m) ? "ui:bg-slate-100 ui:border-none" : ""
                ]]),
                onClick: (v) => !s(g) && !o(m) && a("cell-click", { hour: m, resourceId: g.id })
              }, null, 14, vu))), 128)),
              (f(!0), b(T, null, N(e.events.filter((m) => m.resourceId === g.id), (m) => (f(), b("div", {
                key: m.id,
                class: Z(["ui:absolute ui:left-1 ui:right-1 ui:rounded-lg ui:p-2 ui:text-xs ui:shadow-md ui:z-15 ui:border-l-4 ui:overflow-hidden ui:transition-all ui:duration-200 ui:hover:shadow-lg ui:hover:-translate-y-0.5 ui:hover:z-30 ui:cursor-pointer", m.colorClass || "ui:bg-blue-50 ui:border-blue-500 ui:text-blue-700"]),
                style: ne(r(m)),
                onClick: Xt((v) => a("event-click", m), ["stop"])
              }, [
                c("div", _u, w(m.title), 1),
                c("div", wu, w(u(m.start)) + " - " + w(u(m.end)), 1),
                c("div", ku, w(m.content), 1)
              ], 14, yu))), 128))
            ], 4))), 128))
          ])
        ])
      ], 4)
    ]));
  }
}), $u = { class: "ui:flex ui:flex-col ui:lg:flex-row ui:items-center ui:justify-between ui:gap-6 ui:p-2 ui:flex-wrap" }, zu = { class: "ui:flex-1 ui:text-center ui:lg:text-left ui:w-full" }, Zu = { class: "ui: text-lg ui:sm:text-xl ui:font-bold ui:mb-1 ui:italic ui:text-slate-800" }, Su = { class: "ui:text-sm ui:text-gray-500" }, Ou = { class: "ui:flex ui:flex-col ui:sm:flex-row ui:w-full ui:lg:w-auto ui:items-center ui:gap-4" }, Cu = { class: "ui:w-full ui:md:w-72" }, Pu = /* @__PURE__ */ O({
  __name: "BaseDateSelector",
  props: {
    modelValue: {},
    title: { default: "¿Cuándo quieres jugar?" },
    subtitle: { default: "Selecciona una fecha para actualizar la disponibilidad" },
    showTime: { type: Boolean, default: !1 },
    selectionMode: { default: "single" },
    placeholder: { default: "Selecciona fecha" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, i = (s) => {
      o("update:modelValue", s);
    };
    return (s, r) => (f(), $(y(te), {
      class: "ui:mb-10 ui:relative ui:z-20",
      "border-rounded": "ui:rounded-3xl",
      padding: "ui:p-6"
    }, {
      default: _(() => [
        c("div", $u, [
          c("div", zu, [
            c("h2", Zu, w(n.title), 1),
            c("p", Su, w(n.subtitle), 1)
          ]),
          c("div", Ou, [
            c("div", Cu, [
              h(y(Fe), {
                "model-value": n.modelValue,
                "onUpdate:modelValue": i,
                showTime: n.showTime,
                selectionMode: n.selectionMode,
                hourFormat: "24",
                "step-minute": 15,
                showIcon: "",
                iconDisplay: "input",
                placeholder: n.placeholder
              }, null, 8, ["model-value", "showTime", "selectionMode", "placeholder"])
            ])
          ]),
          I(s.$slots, "additional-filters")
        ])
      ]),
      _: 3
    }));
  }
}), Eu = { class: "ui:space-y-5" }, Tu = { class: "ui:flex ui:items-center ui:justify-between ui:flex-wrap ui:border-b ui:border-slate-200 ui:pb-4 ui:gap-y-3" }, Iu = { class: "ui:flex ui:items-center ui:gap-4" }, Au = ["src"], ju = { class: "ui:min-w-0" }, Ru = { class: "ui:text-2xl ui:font-black ui:text-slate-800 ui:uppercase ui:tracking-tight ui:truncate" }, Du = ["href"], Vu = { class: "ui:underline ui:decoration-dotted group-hover/address:ui:decoration-solid ui:truncate" }, Nu = { class: "ui:w-full ui:sm:w-auto" }, Uu = { class: "ui:flex ui:gap-4 ui:overflow-x-auto ui:p-6 ui:scrollbar-hide" }, Wt = /* @__PURE__ */ O({
  __name: "BaseGroupedItem",
  props: {
    title: {},
    subtitle: {},
    items: {},
    icon: {}
  },
  setup(e) {
    const t = (n) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(n)}`;
    return (n, o) => (f(), b("div", Eu, [
      c("div", Tu, [
        c("div", Iu, [
          e.icon ? (f(), b("img", {
            key: 0,
            src: e.icon,
            class: "ui:w-12 ui:h-12 ui:bg-gray-300 ui:rounded-xl",
            alt: "Clima"
          }, null, 8, Au)) : C("", !0),
          c("div", ju, [
            c("h3", Ru, w(e.title), 1),
            e.subtitle ? (f(), b("a", {
              key: 0,
              href: t(e.subtitle),
              target: "_blank",
              class: "ui:flex ui:items-center ui:gap-2 ui:text-gray-500 ui:text-sm hover:ui:text-slate-900 ui:transition-colors ui:group/address ui:min-w-0",
              title: "Ver en Google Maps"
            }, [
              o[0] || (o[0] = c("i", { class: "pi pi-map-marker ui:text-[#C8E794]" }, null, -1)),
              c("span", Vu, w(e.subtitle), 1)
            ], 8, Du)) : C("", !0)
          ])
        ]),
        c("div", Nu, [
          I(n.$slots, "header-action", {
            count: e.items.length
          })
        ])
      ]),
      c("div", Uu, [
        (f(!0), b(T, null, N(e.items, (i) => I(n.$slots, "card", {
          key: i.id,
          item: i
        })), 128))
      ])
    ]));
  }
}), Bu = { class: "ui:space-y-12" }, Fu = /* @__PURE__ */ O({
  __name: "GroupedList",
  props: {
    groups: {},
    groupTitleKey: {},
    groupSubtitleKey: {},
    groupIconKey: {},
    itemKey: {}
  },
  setup(e) {
    return (t, n) => (f(), b("div", Bu, [
      e.groups.length > 0 ? (f(!0), b(T, { key: 0 }, N(e.groups, (o) => (f(), $(Wt, {
        key: o.id,
        title: o[e.groupTitleKey],
        subtitle: o[e.groupSubtitleKey || ""],
        items: o[e.itemKey || "items"],
        icon: e.groupIconKey ? o[e.groupIconKey] : void 0
      }, {
        card: _(({ item: i }) => [
          I(t.$slots, "card", {
            item: i,
            group: o
          })
        ]),
        "header-action": _(({ count: i }) => [
          I(t.$slots, "header-action", { count: i })
        ]),
        _: 2
      }, 1032, ["title", "subtitle", "items", "icon"]))), 128)) : I(t.$slots, "empty", { key: 1 }, () => [
        n[0] || (n[0] = c("div", { class: "ui:text-center ui:py-20 ui:border-2 ui:border-dashed ui:rounded-3xl" }, [
          c("p", { class: "ui:text-slate-400" }, "No hay datos disponibles")
        ], -1))
      ])
    ]));
  }
}), Lu = /* @__PURE__ */ O({
  __name: "BasePill",
  props: {
    text: {},
    type: { default: "info" },
    icon: {},
    size: { default: "small" },
    dot: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = {
      info: "bg-[#EEF7FC] text-[#3A7FA6] border-[#94C8E7]/70",
      success: "bg-[#F3FAEA] text-[#6B8F3A] border-[#C8E794]/70",
      inactive: "bg-[#F8FAFC] text-[#64748B] border-[#CBD5E1]/70",
      error: "bg-[#FFF5F5] text-[#E11D48] border-[#FDA4AF]/70",
      warning: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]/70",
      secondary: "bg-[#FAF5FF] text-[#9333EA] border-[#E9D5FF]/70"
    }, o = {
      small: "text-[10px] px-2.5 py-1 gap-1.5",
      normal: "text-xs px-3 py-1.5 gap-2"
    }, i = de(() => n[t.type]), s = de(() => o[t.size]);
    return (r, a) => (f(), b("span", {
      class: Z([
        "inline-flex items-center rounded-full uppercase font-bold tracking-wider border",
        s.value,
        i.value
      ])
    }, [
      e.icon ? (f(), b("i", {
        key: 0,
        class: Z([e.icon, "shrink-0 leading-none", t.size === "small" ? "!text-[10px]" : "!text-xs"])
      }, null, 2)) : C("", !0),
      e.dot ? (f(), b("span", {
        key: 1,
        class: Z([
          "rounded-full bg-current shrink-0 animate-pulse",
          t.size === "small" ? "w-1.5 h-1.5" : "w-2 h-2"
        ])
      }, null, 2)) : C("", !0),
      c("span", null, w(e.text), 1)
    ], 2));
  }
}), Mu = /* @__PURE__ */ O({
  __name: "ForgotPasswordForm",
  props: {
    backRoute: {},
    loading: { type: Boolean },
    resolver: {}
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = Pe({
      email: ""
    }), o = t, i = (s) => {
      s.valid && o("submit", s.values);
    };
    return (s, r) => {
      const a = H("RouterLink");
      return f(), $(te, { padding: "p-8" }, {
        default: _(() => [
          r[2] || (r[2] = c("div", { class: "ui:mb-6" }, [
            c("h2", { class: "ui:text-xl ui:font-bold ui:text-gray-900 ui:text-center" }, "¿Problemas de acceso?"),
            c("p", { class: "ui:text-sm ui:text-gray-500 ui:mt-1 ui:text-center" }, " Indica tu email y te enviaremos enlace de recuperación ")
          ], -1)),
          h(y(he), {
            "initial-values": n,
            onSubmit: i,
            class: "ui:flex ui:flex-col ui:gap-4",
            resolver: e.resolver
          }, {
            default: _((u) => [
              h(W, {
                modelValue: n.email,
                "onUpdate:modelValue": r[0] || (r[0] = (l) => n.email = l),
                name: "email",
                label: "Email",
                icon: "pi-envelope",
                type: "email",
                error: u.email?.error?.message
              }, null, 8, ["modelValue", "error"]),
              h(R, {
                type: "submit",
                label: "Enviar enlace",
                class: "ui:w-full",
                loading: e.loading
              }, null, 8, ["loading"]),
              h(a, {
                to: { name: e.backRoute },
                class: "ui:text-center ui:text-xs"
              }, {
                default: _(() => [...r[1] || (r[1] = [
                  U(" Volver ", -1)
                ])]),
                _: 1
              }, 8, ["to"])
            ]),
            _: 1
          }, 8, ["initial-values", "resolver"])
        ]),
        _: 1
      });
    };
  }
}), Ju = { class: "ui:mb-6" }, Wu = { class: "ui:text-xl ui:font-bold ui:text-gray-900 ui:text-center" }, Hu = { class: "ui:flex ui:flex-col ui:gap-1" }, Ku = /* @__PURE__ */ O({
  __name: "ResetPasswordForm",
  props: {
    mode: {},
    loading: { type: Boolean },
    resolver: {},
    card: { type: Boolean }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = Pe({
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    }), o = t, i = (s) => {
      s.valid && o("submit", s.values);
    };
    return (s, r) => e.card ? (f(), $(te, {
      key: 0,
      padding: "p-8"
    }, {
      default: _(() => [
        c("div", Ju, [
          c("h2", Wu, w(e.mode === "change" ? "Cambiar contraseña" : "Nueva contraseña"), 1),
          r[3] || (r[3] = c("p", { class: "ui:text-sm ui:text-gray-500 ui:mt-1 ui:text-center" }, " Establece la clave para tu cuenta ", -1))
        ]),
        h(y(he), {
          "initial-values": n,
          onSubmit: i,
          class: "ui:flex ui:flex-col ui:gap-4",
          resolver: e.resolver
        }, {
          default: _((a) => [
            c("div", Hu, [
              e.mode === "change" ? (f(), $(ie, {
                key: 0,
                modelValue: n.oldPassword,
                "onUpdate:modelValue": r[0] || (r[0] = (u) => n.oldPassword = u),
                name: "oldPassword",
                label: "Contraseña actual",
                error: a.oldPassword?.error?.message
              }, null, 8, ["modelValue", "error"])) : C("", !0),
              h(ie, {
                modelValue: n.newPassword,
                "onUpdate:modelValue": r[1] || (r[1] = (u) => n.newPassword = u),
                name: "newPassword",
                label: "Contraseña",
                error: a.newPassword?.error?.message
              }, null, 8, ["modelValue", "error"]),
              h(ie, {
                modelValue: n.confirmPassword,
                "onUpdate:modelValue": r[2] || (r[2] = (u) => n.confirmPassword = u),
                name: "confirmPassword",
                label: "Confirmar contraseña",
                error: a.confirmPassword?.error?.message
              }, null, 8, ["modelValue", "error"])
            ]),
            h(R, {
              type: "submit",
              label: "Enviar",
              class: "ui:w-full",
              loading: e.loading
            }, null, 8, ["loading"])
          ]),
          _: 1
        }, 8, ["initial-values", "resolver"])
      ]),
      _: 1
    })) : C("", !0);
  }
}), Gu = {
  key: 0,
  class: "ui:flex ui:flex-col ui:items-center ui:text-center ui:gap-3"
}, qu = {
  key: 1,
  class: "ui:flex ui:flex-col ui:items-center ui:text-center ui:gap-4"
}, Yu = { class: "ui:text-2xl ui:font-semibold ui:text-gray-900" }, Xu = { class: "ui:text-gray-500" }, Qu = {
  key: 2,
  class: "ui:flex ui:flex-col ui:items-center ui:text-center ui:gap-4"
}, el = { class: "ui:text-2xl ui:font-semibold ui:text-gray-900" }, tl = { class: "ui:text-gray-500" }, nl = /* @__PURE__ */ O({
  __name: "ConfirmCard",
  props: {
    status: {},
    titleMessage: {},
    messageConfirmation: {},
    iconButtonSuccess: {},
    returnLabel: {},
    backLabel: {},
    errorTitle: {},
    errorMessage: {}
  },
  emits: ["back", "goTo"],
  setup(e, { emit: t }) {
    const n = t;
    return (o, i) => (f(), $(te, { padding: "p-8" }, {
      default: _(() => [
        e.status === "loading" ? (f(), b("div", Gu, [
          h(y(dn), {
            "aria-label": "Loading",
            style: { width: "25px", height: "25px" },
            strokeWidth: "3",
            fill: "transparent"
          }),
          i[2] || (i[2] = c("p", { class: "ui:text-gray-500" }, "Confirmando...", -1))
        ])) : e.status === "success" ? (f(), b("div", qu, [
          i[3] || (i[3] = c("i", { class: "pi pi-check-circle ui:text-5xl ui:text-green-500" }, null, -1)),
          c("div", null, [
            c("h1", Yu, w(e.titleMessage), 1),
            c("p", Xu, w(e.messageConfirmation), 1)
          ]),
          h(R, {
            icon: e.iconButtonSuccess,
            label: e.returnLabel,
            size: "small",
            rounded: "",
            class: "ui:!bg-black ui:!border-none ui:!px-4 ui:!py-2",
            onClick: i[0] || (i[0] = (s) => n("goTo"))
          }, null, 8, ["icon", "label"])
        ])) : (f(), b("div", Qu, [
          i[4] || (i[4] = c("i", { class: "pi pi-times-circle ui:text-5xl ui:text-red-400" }, null, -1)),
          c("div", null, [
            c("h1", el, w(e.errorTitle), 1),
            c("p", tl, w(e.errorMessage), 1)
          ]),
          h(R, {
            icon: "pi pi-arrow-left",
            label: e.backLabel,
            size: "small",
            rounded: "",
            class: "ui:!bg-black ui:!border-none ui:!px-4 ui:!py-2",
            onClick: i[1] || (i[1] = (s) => n("back"))
          }, null, 8, ["label"])
        ]))
      ]),
      _: 1
    }));
  }
}), ol = {
  key: 0,
  class: "lg:hidden fixed inset-0 z-50"
}, il = { class: "relative w-64 h-full bg-white shadow-xl" }, rl = /* @__PURE__ */ O({
  __name: "NavbarMobile",
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    return (t, n) => e.isOpen ? (f(), b("div", ol, [
      c("div", {
        class: "absolute inset-0 bg-black/50",
        onClick: n[0] || (n[0] = (o) => t.$emit("close"))
      }),
      c("div", il, [
        I(t.$slots, "default")
      ])
    ])) : C("", !0);
  }
}), Pl = {
  install(e) {
    e.component("BaseInput", W), e.component("BaseButton", R), e.component("BasePassword", ie), e.component("LoginForm", Sn), e.component("Header", na), e.component("HeaderM", aa), e.component("Footer", ya), e.component("Navbar", Oa), e.component("RegisterForm", Qs), e.component("BaseDataTable", Ra), e.component("BaseCard", te), e.component("BaseDialog", Ua), e.component("UserCardProfile", qa), e.component("BaseInfoField", tu), e.component("NavUserCard", su), e.component("ScheduleManager", lu), e.component("BasePill", Lu), e.component("EventCalendar", xu), e.component("BaseDatePicker", Fe), e.component("BaseDateSelector", Pu), e.component("BaseGroupedItem", Wt), e.component("GroupedList", Fu), e.component("NavbarMobile", rl), e.component("ForgotPasswordForm", Mu), e.component("ConfirmCard", nl), e.component("ResetPasswordForm", Ku), console.log("UI Library: PrimeVue y componentes locales registrados");
  }
};
export {
  R as BaseButton,
  te as BaseCard,
  Ra as BaseDataTable,
  Fe as BaseDatePicker,
  Pu as BaseDateSelector,
  Ua as BaseDialog,
  Wt as BaseGroupedItem,
  tu as BaseInfoField,
  W as BaseInput,
  ie as BasePassword,
  Lu as BasePill,
  nl as ConfirmCard,
  xu as EventCalendar,
  ya as Footer,
  Mu as ForgotPasswordForm,
  Fu as GroupedList,
  na as Header,
  aa as HeaderM,
  Sn as LoginForm,
  su as NavUserCard,
  Oa as Navbar,
  rl as NavbarMobile,
  Qs as RegisterForm,
  Ku as ResetPasswordForm,
  lu as ScheduleManager,
  qa as UserCardProfile,
  Pl as default
};
