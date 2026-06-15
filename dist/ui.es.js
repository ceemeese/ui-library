import { defineComponent as O, useModel as Kt, openBlock as f, createBlock as $, unref as y, mergeProps as G, mergeModels as Gt, useAttrs as qt, computed as de, createElementBlock as b, createVNode as g, createElementVNode as c, toDisplayString as k, withCtx as _, normalizeClass as Z, createCommentVNode as P, createTextVNode as N, renderSlot as T, reactive as Ce, resolveComponent as H, ref as fe, onMounted as pt, onUnmounted as ht, Fragment as I, renderList as V, createSlots as Yt, normalizeStyle as te, withModifiers as Xt } from "vue";
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
import Fe from "primevue/avatar";
import an from "primevue/datatable";
import xe from "primevue/column";
import { FilterMatchMode as un } from "@primevue/core";
import ln from "primevue/dialog";
import cn from "primevue/treetable";
import be from "primevue/tag";
const Be = /* @__PURE__ */ O({
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
      "onUpdate:modelValue": o[0] || (o[0] = (r) => t.value = r)
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
}), dn = { class: "ui:flex ui:flex-col ui:gap-1 ui:w-full" }, fn = {
  key: 0,
  class: "ui:flex ui:items-center ui:gap-3 ui:pt-2"
}, mn = ["for"], pn = ["for"], hn = ["for"], gn = ["for"], bn = { class: "ui:h-[24px] ui:w-full" }, vn = /* @__PURE__ */ O({
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
    const n = e, o = qt(), r = de(() => o.id || n.label), s = t, i = (a) => {
      const u = a?.target ? a.target.value : a;
      s("update:modelValue", u);
    };
    return (a, u) => (f(), b("div", dn, [
      e.type === "boolean" ? (f(), b("div", fn, [
        g(y(Qt), G(a.$attrs, {
          id: r.value,
          "model-value": e.modelValue,
          binary: !0,
          invalid: !!e.error,
          "onUpdate:modelValue": i
        }), null, 16, ["id", "model-value", "invalid"]),
        c("label", { for: e.label }, k(e.label), 9, mn)
      ])) : e.type === "select" ? (f(), $(y(ke), {
        key: 1,
        variant: "on"
      }, {
        default: _(() => [
          g(y(en), G(a.$attrs, {
            id: r.value,
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
            "onUpdate:modelValue": i
          }), null, 16, ["id", "type", "model-value", "invalid", "options", "option-label", "option-value", "placeholder", "disabled"]),
          c("label", { for: e.label }, k(e.label), 9, pn)
        ]),
        _: 1
      })) : e.type === "date" || e.type === "time" ? (f(), $(y(ke), {
        key: 2,
        variant: "on"
      }, {
        default: _(() => [
          g(y(Re), null, {
            default: _(() => [
              e.icon ? (f(), $(y(De), {
                key: 0,
                class: Z(["pi", e.icon])
              }, null, 8, ["class"])) : P("", !0),
              g(Be, G(a.$attrs, {
                id: r.value,
                "model-value": e.modelValue,
                "onUpdate:modelValue": i,
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
          c("label", { for: e.label }, k(e.label), 9, hn)
        ]),
        _: 1
      })) : (f(), $(y(ke), {
        key: 3,
        variant: "on"
      }, {
        default: _(() => [
          g(y(Re), null, {
            default: _(() => [
              e.icon ? (f(), $(y(De), {
                key: 0,
                class: Z(["pi", e.icon])
              }, null, 8, ["class"])) : P("", !0),
              g(y(gt), G(a.$attrs, {
                id: r.value,
                type: e.type,
                value: e.modelValue,
                onInput: i,
                class: ["ui:w-full ui:transition-all ui:duration-200", []],
                disabled: e.disabled,
                invalid: !!e.error
              }), null, 16, ["id", "type", "value", "disabled", "invalid"])
            ]),
            _: 1
          }),
          c("label", { for: e.label }, k(e.label), 9, gn)
        ]),
        _: 1
      })),
      c("div", bn, [
        e.error ? (f(), $(y(bt), {
          key: 0,
          severity: "error",
          size: "small",
          class: "animate-fade-in ui:!text-[10px]",
          variant: "simple"
        }, {
          default: _(() => [
            N(k(e.error), 1)
          ]),
          _: 1
        })) : P("", !0)
      ])
    ]));
  }
}), yn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, W = /* @__PURE__ */ yn(vn, [["__scopeId", "data-v-e67eb9fc"]]), U = /* @__PURE__ */ O({
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
    return (r, s) => (f(), $(y(le), {
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
      onClick: s[0] || (s[0] = (i) => o("click", i)),
      class: Z(["ui:!transition-transform ui:!transform ui:!duration-200 ui:active:!scale-95 ui:!ease-in-out ui:whitespace-nowrap ui:flex-shrink-0 ui:!text-[10px] ui:font-black ui:uppercase ui:tracking-wider ui:px-4 ui:py-2.5 ui:rounded-xl", r.$attrs.class])
    }, {
      default: _(() => [
        T(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["label", "disabled", "raised", "rounded", "variant", "badge", "icon", "size", "aria-label", "loading", "type", "class"]));
  }
}), _n = { class: "ui:flex ui:flex-col ui:gap-1 ui:w-full" }, wn = ["for"], kn = { class: "ui:h-[24px] ui:w-full" }, oe = /* @__PURE__ */ O({
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
    const n = t, o = (r) => {
      const s = r.target;
      n("update:modelValue", s.value);
    };
    return (r, s) => (f(), b("div", _n, [
      g(y(ke), null, {
        default: _(() => [
          g(y(nn), G({ name: e.name }, r.$attrs, {
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
          c("label", { for: e.label }, k(e.label), 9, wn)
        ]),
        _: 1
      }),
      c("div", kn, [
        e.error ? (f(), $(y(bt), {
          key: 0,
          severity: "error",
          size: "small",
          class: "animate-fade-in ui:!text-[10px]",
          variant: "simple"
        }, {
          default: _(() => [
            N(k(e.error), 1)
          ]),
          _: 1
        })) : P("", !0)
      ])
    ]));
  }
}), xn = { class: "ui:max-w-md ui:mx-auto ui:p-8 ui:bg-white ui:rounded-2xl ui:shadow-xl ui:border ui:border-gray-100 ui:shrink-0" }, $n = {
  key: 0,
  class: "ui:flex ui:justify-center ui:mt-2"
}, zn = {
  key: 1,
  class: "ui:text-center ui:text-xs ui:text-gray-500 ui:mt-6"
}, Zn = /* @__PURE__ */ O({
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
    const n = Ce({
      username: "",
      password: ""
    }), o = t, r = (s) => {
      s.valid && o("submit", s.values);
    };
    return (s, i) => {
      const a = H("RouterLink");
      return f(), b("div", xn, [
        i[3] || (i[3] = c("div", { class: "ui:text-center ui:mb-8" }, [
          c("h2", { class: "ui:text-2xl ui:font-extrabold ui:text-gray-900" }, "Bienvenido"),
          c("p", { class: "ui:text-gray-500 ui:mt-2" }, "Introduce tus credenciales para acceder")
        ], -1)),
        g(y(he), {
          initialValues: n,
          onSubmit: r,
          class: "ui:flex ui:flex-col",
          resolver: e.resolver
        }, {
          default: _((u) => [
            g(W, {
              modelValue: n.username,
              "onUpdate:modelValue": i[0] || (i[0] = (l) => n.username = l),
              name: "username",
              label: "Usuario",
              icon: "pi-user",
              error: u.username?.error?.message
            }, null, 8, ["modelValue", "error"]),
            g(oe, {
              modelValue: n.password,
              "onUpdate:modelValue": i[1] || (i[1] = (l) => n.password = l),
              name: "password",
              label: "Contraseña",
              error: u.password?.error?.message
            }, null, 8, ["modelValue", "error"]),
            e.forgotPasswordRoute ? (f(), b("div", $n, [
              g(a, {
                to: { name: e.forgotPasswordRoute },
                class: "ui:text-sm ui:font-medium ui:hover:text-blue-500 ui:transition-colors"
              }, {
                default: _(() => [
                  N(k(e.forgotPasswordLabel || "¿Has olvidado tu contraseña?"), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ])) : P("", !0),
            g(U, {
              type: "submit",
              label: "Entrar",
              class: "ui:mt-6 ui:w-full ui:py-3",
              loading: e.loading
            }, null, 8, ["loading"]),
            e.registerRoute ? (f(), b("p", zn, [
              i[2] || (i[2] = N(" ¿No tienes cuenta? ", -1)),
              g(a, {
                class: "ui:font-semibold ui:text-blue-600 ui:hover:underline",
                to: { name: e.registerRoute }
              }, {
                default: _(() => [
                  N(k(e.registerLabel || "Regístrate gratis"), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ])) : P("", !0)
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
        constr: i,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), a._zod.traits.has(e))
      return;
    a._zod.traits.add(e), t(a, u);
    const l = i.prototype, p = Object.keys(l);
    for (let h = 0; h < p.length; h++) {
      const m = p[h];
      m in a || (a[m] = l[m].bind(a));
    }
  }
  const r = n?.Parent ?? Object;
  class s extends r {
  }
  Object.defineProperty(s, "name", { value: e });
  function i(a) {
    var u;
    const l = n?.Parent ? new s() : this;
    o(l, a), (u = l._zod).deferred ?? (u.deferred = []);
    for (const p of l._zod.deferred)
      p();
    return l;
  }
  return Object.defineProperty(i, "init", { value: o }), Object.defineProperty(i, Symbol.hasInstance, {
    value: (a) => n?.Parent && a instanceof n.Parent ? !0 : a?._zod?.traits?.has(e)
  }), Object.defineProperty(i, "name", { value: e }), i;
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
  return Object.entries(e).filter(([o, r]) => t.indexOf(+o) === -1).map(([o, r]) => r);
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
    set(r) {
      Object.defineProperty(e, t, {
        value: r
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
function Sn(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const wt = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function $e(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const On = Le(() => {
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
function w(e) {
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
function Cn(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function En(e, t) {
  const n = e._zod.def, o = n.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = q(e._zod.def, {
    get shape() {
      const i = {};
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && (i[a] = n.shape[a]);
      }
      return ee(this, "shape", i), i;
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
      const i = { ...e._zod.def.shape };
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && delete i[a];
      }
      return ee(this, "shape", i), i;
    },
    checks: []
  });
  return Y(e, s);
}
function Tn(e, t) {
  if (!me(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const s = e._zod.def.shape;
    for (const i in t)
      if (Object.getOwnPropertyDescriptor(s, i) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const r = q(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return ee(this, "shape", s), s;
    }
  });
  return Y(e, r);
}
function An(e, t) {
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
function jn(e, t) {
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
function Rn(e, t, n) {
  const r = t._zod.def.checks;
  if (r && r.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const i = q(t._zod.def, {
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
  return Y(t, i);
}
function Dn(e, t, n) {
  const o = q(t._zod.def, {
    get shape() {
      const r = t._zod.def.shape, s = { ...r };
      if (n)
        for (const i in n) {
          if (!(i in s))
            throw new Error(`Unrecognized key: "${i}"`);
          n[i] && (s[i] = new e({
            type: "nonoptional",
            innerType: r[i]
          }));
        }
      else
        for (const i in r)
          s[i] = new e({
            type: "nonoptional",
            innerType: r[i]
          });
      return ee(this, "shape", s), s;
    }
  });
  return Y(t, o);
}
function ne(e, t = 0) {
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
    const r = ve(e.inst?._zod.def?.error?.(e)) ?? ve(t?.error?.(e)) ?? ve(n.customError?.(e)) ?? ve(n.localeError?.(e)) ?? "Invalid input";
    o.message = r;
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
function Vn(e, t = (n) => n.message) {
  const n = {}, o = [];
  for (const r of e.issues)
    r.path.length > 0 ? (n[r.path[0]] = n[r.path[0]] || [], n[r.path[0]].push(t(r))) : o.push(t(r));
  return { formErrors: o, fieldErrors: n };
}
function Nn(e, t = (n) => n.message) {
  const n = { _errors: [] }, o = (r) => {
    for (const s of r.issues)
      if (s.code === "invalid_union" && s.errors.length)
        s.errors.map((i) => o({ issues: i }));
      else if (s.code === "invalid_key")
        o({ issues: s.issues });
      else if (s.code === "invalid_element")
        o({ issues: s.issues });
      else if (s.path.length === 0)
        n._errors.push(t(s));
      else {
        let i = n, a = 0;
        for (; a < s.path.length; ) {
          const u = s.path[a];
          a === s.path.length - 1 ? (i[u] = i[u] || { _errors: [] }, i[u]._errors.push(t(s))) : i[u] = i[u] || { _errors: [] }, i = i[u], a++;
        }
      }
  };
  return o(e), n;
}
const He = (e) => (t, n, o, r) => {
  const s = o ? Object.assign(o, { async: !1 }) : { async: !1 }, i = t._zod.run({ value: n, issues: [] }, s);
  if (i instanceof Promise)
    throw new re();
  if (i.issues.length) {
    const a = new (r?.Err ?? e)(i.issues.map((u) => Q(u, s, X())));
    throw wt(a, r?.callee), a;
  }
  return i.value;
}, Ke = (e) => async (t, n, o, r) => {
  const s = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: n, issues: [] }, s);
  if (i instanceof Promise && (i = await i), i.issues.length) {
    const a = new (r?.Err ?? e)(i.issues.map((u) => Q(u, s, X())));
    throw wt(a, r?.callee), a;
  }
  return i.value;
}, Ie = (e) => (t, n, o) => {
  const r = o ? { ...o, async: !1 } : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, r);
  if (s instanceof Promise)
    throw new re();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? zt)(s.issues.map((i) => Q(i, r, X())))
  } : { success: !0, data: s.value };
}, Un = /* @__PURE__ */ Ie(Zt), Te = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, r);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((i) => Q(i, r, X())))
  } : { success: !0, data: s.value };
}, Fn = /* @__PURE__ */ Te(Zt), Bn = (e) => (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return He(e)(t, n, r);
}, Ln = (e) => (t, n, o) => He(e)(t, n, o), Mn = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Ke(e)(t, n, r);
}, Jn = (e) => async (t, n, o) => Ke(e)(t, n, o), Wn = (e) => (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Ie(e)(t, n, r);
}, Hn = (e) => (t, n, o) => Ie(e)(t, n, o), Kn = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Te(e)(t, n, r);
}, Gn = (e) => async (t, n, o) => Te(e)(t, n, o), qn = /^[cC][^\s-]{8,}$/, Yn = /^[0-9a-z]+$/, Xn = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Qn = /^[0-9a-vA-V]{20}$/, eo = /^[A-Za-z0-9]{27}$/, to = /^[a-zA-Z0-9_-]{21}$/, no = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, oo = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Xe = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ro = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, io = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function so() {
  return new RegExp(io, "u");
}
const ao = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, uo = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, lo = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, co = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, fo = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, St = /^[A-Za-z0-9_-]*$/, mo = /^\+[1-9]\d{6,14}$/, Ot = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", po = /* @__PURE__ */ new RegExp(`^${Ot}$`);
function Pt(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function ho(e) {
  return new RegExp(`^${Pt(e)}$`);
}
function go(e) {
  const t = Pt({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const o = `${t}(?:${n.join("|")})`;
  return new RegExp(`^${Ot}T(?:${o})$`);
}
const bo = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, vo = /^[^A-Z]*$/, yo = /^[^a-z]*$/, J = /* @__PURE__ */ d("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), _o = /* @__PURE__ */ d("$ZodCheckMaxLength", (e, t) => {
  var n;
  J.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !Me(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < r && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const r = o.value;
    if (r.length <= t.maximum)
      return;
    const i = We(r);
    o.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: r,
      inst: e,
      continue: !t.abort
    });
  };
}), wo = /* @__PURE__ */ d("$ZodCheckMinLength", (e, t) => {
  var n;
  J.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !Me(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > r && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const r = o.value;
    if (r.length >= t.minimum)
      return;
    const i = We(r);
    o.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: r,
      inst: e,
      continue: !t.abort
    });
  };
}), ko = /* @__PURE__ */ d("$ZodCheckLengthEquals", (e, t) => {
  var n;
  J.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !Me(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag;
    r.minimum = t.length, r.maximum = t.length, r.length = t.length;
  }), e._zod.check = (o) => {
    const r = o.value, s = r.length;
    if (s === t.length)
      return;
    const i = We(r), a = s > t.length;
    o.issues.push({
      origin: i,
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
  J.init(e, t), e._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(t.pattern));
  }), t.pattern ? (n = e._zod).check ?? (n.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: r.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (o = e._zod).check ?? (o.check = () => {
  });
}), xo = /* @__PURE__ */ d("$ZodCheckRegex", (e, t) => {
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
}), $o = /* @__PURE__ */ d("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = vo), Ae.init(e, t);
}), zo = /* @__PURE__ */ d("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = yo), Ae.init(e, t);
}), Zo = /* @__PURE__ */ d("$ZodCheckIncludes", (e, t) => {
  J.init(e, t);
  const n = Ee(t.includes), o = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
  t.pattern = o, e._zod.onattach.push((r) => {
    const s = r._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(o);
  }), e._zod.check = (r) => {
    r.value.includes(t.includes, t.position) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), So = /* @__PURE__ */ d("$ZodCheckStartsWith", (e, t) => {
  J.init(e, t);
  const n = new RegExp(`^${Ee(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((o) => {
    const r = o._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(n);
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
}), Oo = /* @__PURE__ */ d("$ZodCheckEndsWith", (e, t) => {
  J.init(e, t);
  const n = new RegExp(`.*${Ee(t.suffix)}$`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((o) => {
    const r = o._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(n);
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
class Co {
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
`).filter((i) => i), r = Math.min(...o.map((i) => i.length - i.trimStart().length)), s = o.map((i) => i.slice(r)).map((i) => " ".repeat(this.indent * 2) + i);
    for (const i of s)
      this.content.push(i);
  }
  compile() {
    const t = Function, n = this?.args, r = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new t(...n, r.join(`
`));
  }
}
const Eo = {
  major: 4,
  minor: 3,
  patch: 6
}, A = /* @__PURE__ */ d("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Eo;
  const o = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && o.unshift(e);
  for (const r of o)
    for (const s of r._zod.onattach)
      s(e);
  if (o.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const r = (i, a, u) => {
      let l = ne(i), p;
      for (const h of a) {
        if (h._zod.def.when) {
          if (!h._zod.def.when(i))
            continue;
        } else if (l)
          continue;
        const m = i.issues.length, v = h._zod.check(i);
        if (v instanceof Promise && u?.async === !1)
          throw new re();
        if (p || v instanceof Promise)
          p = (p ?? Promise.resolve()).then(async () => {
            await v, i.issues.length !== m && (l || (l = ne(i, m)));
          });
        else {
          if (i.issues.length === m)
            continue;
          l || (l = ne(i, m));
        }
      }
      return p ? p.then(() => i) : i;
    }, s = (i, a, u) => {
      if (ne(i))
        return i.aborted = !0, i;
      const l = r(a, o, u);
      if (l instanceof Promise) {
        if (u.async === !1)
          throw new re();
        return l.then((p) => e._zod.parse(p, u));
      }
      return e._zod.parse(l, u);
    };
    e._zod.run = (i, a) => {
      if (a.skipChecks)
        return e._zod.parse(i, a);
      if (a.direction === "backward") {
        const l = e._zod.parse({ value: i.value, issues: [] }, { ...a, skipChecks: !0 });
        return l instanceof Promise ? l.then((p) => s(p, i, a)) : s(l, i, a);
      }
      const u = e._zod.parse(i, a);
      if (u instanceof Promise) {
        if (a.async === !1)
          throw new re();
        return u.then((l) => r(l, o, a));
      }
      return r(u, o, a);
    };
  }
  z(e, "~standard", () => ({
    validate: (r) => {
      try {
        const s = Un(e, r);
        return s.success ? { value: s.data } : { issues: s.error?.issues };
      } catch {
        return Fn(e, r).then((i) => i.success ? { value: i.data } : { issues: i.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Ge = /* @__PURE__ */ d("$ZodString", (e, t) => {
  A.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? bo(e._zod.bag), e._zod.parse = (n, o) => {
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
}), C = /* @__PURE__ */ d("$ZodStringFormat", (e, t) => {
  Ae.init(e, t), Ge.init(e, t);
}), Io = /* @__PURE__ */ d("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = oo), C.init(e, t);
}), To = /* @__PURE__ */ d("$ZodUUID", (e, t) => {
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
  C.init(e, t);
}), Ao = /* @__PURE__ */ d("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = ro), C.init(e, t);
}), jo = /* @__PURE__ */ d("$ZodURL", (e, t) => {
  C.init(e, t), e._zod.check = (n) => {
    try {
      const o = n.value.trim(), r = new URL(o);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(r.hostname) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(r.protocol.endsWith(":") ? r.protocol.slice(0, -1) : r.protocol) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? n.value = r.href : n.value = o;
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
}), Ro = /* @__PURE__ */ d("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = so()), C.init(e, t);
}), Do = /* @__PURE__ */ d("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = to), C.init(e, t);
}), Vo = /* @__PURE__ */ d("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = qn), C.init(e, t);
}), No = /* @__PURE__ */ d("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Yn), C.init(e, t);
}), Uo = /* @__PURE__ */ d("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Xn), C.init(e, t);
}), Fo = /* @__PURE__ */ d("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Qn), C.init(e, t);
}), Bo = /* @__PURE__ */ d("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = eo), C.init(e, t);
}), Lo = /* @__PURE__ */ d("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = go(t)), C.init(e, t);
}), Mo = /* @__PURE__ */ d("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = po), C.init(e, t);
}), Jo = /* @__PURE__ */ d("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = ho(t)), C.init(e, t);
}), Wo = /* @__PURE__ */ d("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = no), C.init(e, t);
}), Ho = /* @__PURE__ */ d("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = ao), C.init(e, t), e._zod.bag.format = "ipv4";
}), Ko = /* @__PURE__ */ d("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = uo), C.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), Go = /* @__PURE__ */ d("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = lo), C.init(e, t);
}), qo = /* @__PURE__ */ d("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = co), C.init(e, t), e._zod.check = (n) => {
    const o = n.value.split("/");
    try {
      if (o.length !== 2)
        throw new Error();
      const [r, s] = o;
      if (!s)
        throw new Error();
      const i = Number(s);
      if (`${i}` !== s)
        throw new Error();
      if (i < 0 || i > 128)
        throw new Error();
      new URL(`http://[${r}]`);
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
function Ct(e) {
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
const Yo = /* @__PURE__ */ d("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = fo), C.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    Ct(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Xo(e) {
  if (!St.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Ct(n);
}
const Qo = /* @__PURE__ */ d("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = St), C.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    Xo(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), er = /* @__PURE__ */ d("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = mo), C.init(e, t);
});
function tr(e, t = null) {
  try {
    const n = e.split(".");
    if (n.length !== 3)
      return !1;
    const [o] = n;
    if (!o)
      return !1;
    const r = JSON.parse(atob(o));
    return !("typ" in r && r?.typ !== "JWT" || !r.alg || t && (!("alg" in r) || r.alg !== t));
  } catch {
    return !1;
  }
}
const nr = /* @__PURE__ */ d("$ZodJWT", (e, t) => {
  C.init(e, t), e._zod.check = (n) => {
    tr(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), or = /* @__PURE__ */ d("$ZodUnknown", (e, t) => {
  A.init(e, t), e._zod.parse = (n) => n;
}), rr = /* @__PURE__ */ d("$ZodNever", (e, t) => {
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
const ir = /* @__PURE__ */ d("$ZodArray", (e, t) => {
  A.init(e, t), e._zod.parse = (n, o) => {
    const r = n.value;
    if (!Array.isArray(r))
      return n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: r,
        inst: e
      }), n;
    n.value = Array(r.length);
    const s = [];
    for (let i = 0; i < r.length; i++) {
      const a = r[i], u = t.element._zod.run({
        value: a,
        issues: []
      }, o);
      u instanceof Promise ? s.push(u.then((l) => Qe(l, n, i))) : Qe(u, n, i);
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
});
function ze(e, t, n, o, r) {
  if (e.issues.length) {
    if (r && !(n in o))
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
  const n = Cn(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function It(e, t, n, o, r, s) {
  const i = [], a = r.keySet, u = r.catchall._zod, l = u.def.type, p = u.optout === "optional";
  for (const h in t) {
    if (a.has(h))
      continue;
    if (l === "never") {
      i.push(h);
      continue;
    }
    const m = u.run({ value: t[h], issues: [] }, o);
    m instanceof Promise ? e.push(m.then((v) => ze(v, n, h, t, p))) : ze(m, n, h, t, p);
  }
  return i.length && n.issues.push({
    code: "unrecognized_keys",
    keys: i,
    input: t,
    inst: s
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const sr = /* @__PURE__ */ d("$ZodObject", (e, t) => {
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
        for (const h of p.values)
          u[l].add(h);
      }
    }
    return u;
  });
  const r = $e, s = t.catchall;
  let i;
  e._zod.parse = (a, u) => {
    i ?? (i = o.value);
    const l = a.value;
    if (!r(l))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: l,
        inst: e
      }), a;
    a.value = {};
    const p = [], h = i.shape;
    for (const m of i.keys) {
      const v = h[m], x = v._zod.optout === "optional", S = v._zod.run({ value: l[m], issues: [] }, u);
      S instanceof Promise ? p.push(S.then((K) => ze(K, a, m, l, x))) : ze(S, a, m, l, x);
    }
    return s ? It(p, l, a, u, o.value, e) : p.length ? Promise.all(p).then(() => a) : a;
  };
}), ar = /* @__PURE__ */ d("$ZodObjectJIT", (e, t) => {
  sr.init(e, t);
  const n = e._zod.parse, o = Le(() => Et(t)), r = (m) => {
    const v = new Co(["shape", "payload", "ctx"]), x = o.value, S = (M) => {
      const F = Ye(M);
      return `shape[${F}]._zod.run({ value: input[${F}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const K = /* @__PURE__ */ Object.create(null);
    let ae = 0;
    for (const M of x.keys)
      K[M] = `key_${ae++}`;
    v.write("const newResult = {};");
    for (const M of x.keys) {
      const F = K[M], L = Ye(M), Ht = m[M]?._zod?.optout === "optional";
      v.write(`const ${F} = ${S(M)};`), Ht ? v.write(`
        if (${F}.issues.length) {
          if (${L} in input) {
            payload.issues = payload.issues.concat(${F}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${L}, ...iss.path] : [${L}]
            })));
          }
        }
        
        if (${F}.value === undefined) {
          if (${L} in input) {
            newResult[${L}] = undefined;
          }
        } else {
          newResult[${L}] = ${F}.value;
        }
        
      `) : v.write(`
        if (${F}.issues.length) {
          payload.issues = payload.issues.concat(${F}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${L}, ...iss.path] : [${L}]
          })));
        }
        
        if (${F}.value === undefined) {
          if (${L} in input) {
            newResult[${L}] = undefined;
          }
        } else {
          newResult[${L}] = ${F}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const ge = v.compile();
    return (M, F) => ge(m, M, F);
  };
  let s;
  const i = $e, a = !yt.jitless, l = a && On.value, p = t.catchall;
  let h;
  e._zod.parse = (m, v) => {
    h ?? (h = o.value);
    const x = m.value;
    return i(x) ? a && l && v?.async === !1 && v.jitless !== !0 ? (s || (s = r(t.shape)), m = s(m, v), p ? It([], x, m, v, h, e) : m) : n(m, v) : (m.issues.push({
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
  const r = e.filter((s) => !ne(s));
  return r.length === 1 ? (t.value = r[0].value, r[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((s) => s.issues.map((i) => Q(i, o, X())))
  }), t);
}
const ur = /* @__PURE__ */ d("$ZodUnion", (e, t) => {
  A.init(e, t), z(e._zod, "optin", () => t.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), z(e._zod, "optout", () => t.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), z(e._zod, "values", () => {
    if (t.options.every((r) => r._zod.values))
      return new Set(t.options.flatMap((r) => Array.from(r._zod.values)));
  }), z(e._zod, "pattern", () => {
    if (t.options.every((r) => r._zod.pattern)) {
      const r = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${r.map((s) => Je(s.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1, o = t.options[0]._zod.run;
  e._zod.parse = (r, s) => {
    if (n)
      return o(r, s);
    let i = !1;
    const a = [];
    for (const u of t.options) {
      const l = u._zod.run({
        value: r.value,
        issues: []
      }, s);
      if (l instanceof Promise)
        a.push(l), i = !0;
      else {
        if (l.issues.length === 0)
          return l;
        a.push(l);
      }
    }
    return i ? Promise.all(a).then((u) => et(u, r, e, s)) : et(a, r, e, s);
  };
}), lr = /* @__PURE__ */ d("$ZodIntersection", (e, t) => {
  A.init(e, t), e._zod.parse = (n, o) => {
    const r = n.value, s = t.left._zod.run({ value: r, issues: [] }, o), i = t.right._zod.run({ value: r, issues: [] }, o);
    return s instanceof Promise || i instanceof Promise ? Promise.all([s, i]).then(([u, l]) => tt(n, u, l)) : tt(n, s, i);
  };
});
function Ne(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (me(e) && me(t)) {
    const n = Object.keys(t), o = Object.keys(e).filter((s) => n.indexOf(s) !== -1), r = { ...e, ...t };
    for (const s of o) {
      const i = Ne(e[s], t[s]);
      if (!i.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...i.mergeErrorPath]
        };
      r[s] = i.data;
    }
    return { valid: !0, data: r };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let o = 0; o < e.length; o++) {
      const r = e[o], s = t[o], i = Ne(r, s);
      if (!i.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...i.mergeErrorPath]
        };
      n.push(i.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function tt(e, t, n) {
  const o = /* @__PURE__ */ new Map();
  let r;
  for (const a of t.issues)
    if (a.code === "unrecognized_keys") {
      r ?? (r = a);
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
  if (s.length && r && e.issues.push({ ...r, keys: s }), ne(e))
    return e;
  const i = Ne(t.value, n.value);
  if (!i.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
  return e.value = i.data, e;
}
const cr = /* @__PURE__ */ d("$ZodEnum", (e, t) => {
  A.init(e, t);
  const n = _t(t.entries), o = new Set(n);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${n.filter((r) => Pn.has(typeof r)).map((r) => typeof r == "string" ? Ee(r) : r.toString()).join("|")})$`), e._zod.parse = (r, s) => {
    const i = r.value;
    return o.has(i) || r.issues.push({
      code: "invalid_value",
      values: n,
      input: i,
      inst: e
    }), r;
  };
}), dr = /* @__PURE__ */ d("$ZodTransform", (e, t) => {
  A.init(e, t), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new vt(e.constructor.name);
    const r = t.transform(n.value, n);
    if (o.async)
      return (r instanceof Promise ? r : Promise.resolve(r)).then((i) => (n.value = i, n));
    if (r instanceof Promise)
      throw new re();
    return n.value = r, n;
  };
});
function nt(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Tt = /* @__PURE__ */ d("$ZodOptional", (e, t) => {
  A.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", z(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), z(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Je(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, o) => {
    if (t.innerType._zod.optin === "optional") {
      const r = t.innerType._zod.run(n, o);
      return r instanceof Promise ? r.then((s) => nt(s, n.value)) : nt(r, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, o);
  };
}), fr = /* @__PURE__ */ d("$ZodExactOptional", (e, t) => {
  Tt.init(e, t), z(e._zod, "values", () => t.innerType._zod.values), z(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, o) => t.innerType._zod.run(n, o);
}), mr = /* @__PURE__ */ d("$ZodNullable", (e, t) => {
  A.init(e, t), z(e._zod, "optin", () => t.innerType._zod.optin), z(e._zod, "optout", () => t.innerType._zod.optout), z(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Je(n.source)}|null)$`) : void 0;
  }), z(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, o) => n.value === null ? n : t.innerType._zod.run(n, o);
}), pr = /* @__PURE__ */ d("$ZodDefault", (e, t) => {
  A.init(e, t), e._zod.optin = "optional", z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((s) => ot(s, t)) : ot(r, t);
  };
});
function ot(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const hr = /* @__PURE__ */ d("$ZodPrefault", (e, t) => {
  A.init(e, t), e._zod.optin = "optional", z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => (o.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, o));
}), gr = /* @__PURE__ */ d("$ZodNonOptional", (e, t) => {
  A.init(e, t), z(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((o) => o !== void 0)) : void 0;
  }), e._zod.parse = (n, o) => {
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((s) => rt(s, e)) : rt(r, e);
  };
});
function rt(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const br = /* @__PURE__ */ d("$ZodCatch", (e, t) => {
  A.init(e, t), z(e._zod, "optin", () => t.innerType._zod.optin), z(e._zod, "optout", () => t.innerType._zod.optout), z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((s) => (n.value = s.value, s.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: s.issues.map((i) => Q(i, o, X()))
      },
      input: n.value
    }), n.issues = []), n)) : (n.value = r.value, r.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: r.issues.map((s) => Q(s, o, X()))
      },
      input: n.value
    }), n.issues = []), n);
  };
}), vr = /* @__PURE__ */ d("$ZodPipe", (e, t) => {
  A.init(e, t), z(e._zod, "values", () => t.in._zod.values), z(e._zod, "optin", () => t.in._zod.optin), z(e._zod, "optout", () => t.out._zod.optout), z(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, o) => {
    if (o.direction === "backward") {
      const s = t.out._zod.run(n, o);
      return s instanceof Promise ? s.then((i) => ye(i, t.in, o)) : ye(s, t.in, o);
    }
    const r = t.in._zod.run(n, o);
    return r instanceof Promise ? r.then((s) => ye(s, t.out, o)) : ye(r, t.out, o);
  };
});
function ye(e, t, n) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const yr = /* @__PURE__ */ d("$ZodReadonly", (e, t) => {
  A.init(e, t), z(e._zod, "propValues", () => t.innerType._zod.propValues), z(e._zod, "values", () => t.innerType._zod.values), z(e._zod, "optin", () => t.innerType?._zod?.optin), z(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then(it) : it(r);
  };
});
function it(e) {
  return e.value = Object.freeze(e.value), e;
}
const _r = /* @__PURE__ */ d("$ZodCustom", (e, t) => {
  J.init(e, t), A.init(e, t), e._zod.parse = (n, o) => n, e._zod.check = (n) => {
    const o = n.value, r = t.fn(o);
    if (r instanceof Promise)
      return r.then((s) => st(s, n, o, e));
    st(r, n, o, e);
  };
});
function st(e, t, n, o) {
  if (!e) {
    const r = {
      code: "custom",
      input: n,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (r.params = o._zod.def.params), t.issues.push(pe(r));
  }
}
var at;
class wr {
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
      const r = { ...o, ...this._map.get(t) };
      return Object.keys(r).length ? r : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function kr() {
  return new wr();
}
(at = globalThis).__zod_globalRegistry ?? (at.__zod_globalRegistry = kr());
const ce = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function xr(e, t) {
  return new e({
    type: "string",
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function At(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ut(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function $r(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function zr(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zr(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Sr(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Or(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Pr(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Cr(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Er(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ir(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Tr(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ar(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jr(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Rr(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Dr(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vr(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Nr(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ur(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fr(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Br(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Lr(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Mr(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Jr(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wr(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hr(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Gr(e, t) {
  return new e({
    type: "never",
    ...w(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jt(e, t) {
  return new _o({
    check: "max_length",
    ...w(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ze(e, t) {
  return new wo({
    check: "min_length",
    ...w(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Rt(e, t) {
  return new ko({
    check: "length_equals",
    ...w(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function qr(e, t) {
  return new xo({
    check: "string_format",
    format: "regex",
    ...w(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function Yr(e) {
  return new $o({
    check: "string_format",
    format: "lowercase",
    ...w(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  return new zo({
    check: "string_format",
    format: "uppercase",
    ...w(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Qr(e, t) {
  return new Zo({
    check: "string_format",
    format: "includes",
    ...w(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function ei(e, t) {
  return new So({
    check: "string_format",
    format: "starts_with",
    ...w(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function ti(e, t) {
  return new Oo({
    check: "string_format",
    format: "ends_with",
    ...w(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function ie(e) {
  return new Po({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function ni(e) {
  return /* @__PURE__ */ ie((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function oi() {
  return /* @__PURE__ */ ie((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function ri() {
  return /* @__PURE__ */ ie((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function ii() {
  return /* @__PURE__ */ ie((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function si() {
  return /* @__PURE__ */ ie((e) => Sn(e));
}
// @__NO_SIDE_EFFECTS__
function ai(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...w(n)
  });
}
// @__NO_SIDE_EFFECTS__
function ui(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...w(n)
  });
}
// @__NO_SIDE_EFFECTS__
function li(e) {
  const t = /* @__PURE__ */ ci((n) => (n.addIssue = (o) => {
    if (typeof o == "string")
      n.issues.push(pe(o, n.value, t._zod.def));
    else {
      const r = o;
      r.fatal && (r.continue = !1), r.code ?? (r.code = "custom"), r.input ?? (r.input = n.value), r.inst ?? (r.inst = t), r.continue ?? (r.continue = !t._zod.def.abort), n.issues.push(pe(r));
    }
  }, e(n.value, n)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function ci(e, t) {
  const n = new J({
    check: "custom",
    ...w(t)
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
function R(e, t, n = { path: [], schemaPath: [] }) {
  var o;
  const r = e._zod.def, s = t.seen.get(e);
  if (s)
    return s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema;
  const i = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, i);
  const a = e._zod.toJSONSchema?.();
  if (a)
    i.schema = a;
  else {
    const p = {
      ...n,
      schemaPath: [...n.schemaPath, e],
      path: n.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, i.schema, p);
    else {
      const m = i.schema, v = t.processors[r.type];
      if (!v)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);
      v(e, t, m, p);
    }
    const h = e._zod.parent;
    h && (i.ref || (i.ref = h), R(h, t, p), t.seen.get(h).isParent = !0);
  }
  const u = t.metadataRegistry.get(e);
  return u && Object.assign(i.schema, u), t.io === "input" && D(e) && (delete i.schema.examples, delete i.schema.default), t.io === "input" && i.schema._prefault && ((o = i.schema).default ?? (o.default = i.schema._prefault)), delete i.schema._prefault, t.seen.get(e).schema;
}
function Vt(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = /* @__PURE__ */ new Map();
  for (const i of e.seen.entries()) {
    const a = e.metadataRegistry.get(i[0])?.id;
    if (a) {
      const u = o.get(a);
      if (u && u !== i[0])
        throw new Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      o.set(a, i[0]);
    }
  }
  const r = (i) => {
    const a = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const h = e.external.registry.get(i[0])?.id, m = e.external.uri ?? ((x) => x);
      if (h)
        return { ref: m(h) };
      const v = i[1].defId ?? i[1].schema.id ?? `schema${e.counter++}`;
      return i[1].defId = v, { defId: v, ref: `${m("__shared")}#/${a}/${v}` };
    }
    if (i[1] === n)
      return { ref: "#" };
    const l = `#/${a}/`, p = i[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: p, ref: l + p };
  }, s = (i) => {
    if (i[1].schema.$ref)
      return;
    const a = i[1], { ref: u, defId: l } = r(i);
    a.def = { ...a.schema }, l && (a.defId = l);
    const p = a.schema;
    for (const h in p)
      delete p[h];
    p.$ref = u;
  };
  if (e.cycles === "throw")
    for (const i of e.seen.entries()) {
      const a = i[1];
      if (a.cycle)
        throw new Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const i of e.seen.entries()) {
    const a = i[1];
    if (t === i[0]) {
      s(i);
      continue;
    }
    if (e.external) {
      const l = e.external.registry.get(i[0])?.id;
      if (t !== i[0] && l) {
        s(i);
        continue;
      }
    }
    if (e.metadataRegistry.get(i[0])?.id) {
      s(i);
      continue;
    }
    if (a.cycle) {
      s(i);
      continue;
    }
    if (a.count > 1 && e.reused === "ref") {
      s(i);
      continue;
    }
  }
}
function Nt(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (i) => {
    const a = e.seen.get(i);
    if (a.ref === null)
      return;
    const u = a.def ?? a.schema, l = { ...u }, p = a.ref;
    if (a.ref = null, p) {
      o(p);
      const m = e.seen.get(p), v = m.schema;
      if (v.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (u.allOf = u.allOf ?? [], u.allOf.push(v)) : Object.assign(u, v), Object.assign(u, l), i._zod.parent === p)
        for (const S in u)
          S === "$ref" || S === "allOf" || S in l || delete u[S];
      if (v.$ref && m.def)
        for (const S in u)
          S === "$ref" || S === "allOf" || S in m.def && JSON.stringify(u[S]) === JSON.stringify(m.def[S]) && delete u[S];
    }
    const h = i._zod.parent;
    if (h && h !== p) {
      o(h);
      const m = e.seen.get(h);
      if (m?.schema.$ref && (u.$ref = m.schema.$ref, m.def))
        for (const v in u)
          v === "$ref" || v === "allOf" || v in m.def && JSON.stringify(u[v]) === JSON.stringify(m.def[v]) && delete u[v];
    }
    e.override({
      zodSchema: i,
      jsonSchema: u,
      path: a.path ?? []
    });
  };
  for (const i of [...e.seen.entries()].reverse())
    o(i[0]);
  const r = {};
  if (e.target === "draft-2020-12" ? r.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? r.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? r.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const i = e.external.registry.get(t)?.id;
    if (!i)
      throw new Error("Schema is missing an `id` property");
    r.$id = e.external.uri(i);
  }
  Object.assign(r, n.def ?? n.schema);
  const s = e.external?.defs ?? {};
  for (const i of e.seen.entries()) {
    const a = i[1];
    a.def && a.defId && (s[a.defId] = a.def);
  }
  e.external || Object.keys(s).length > 0 && (e.target === "draft-2020-12" ? r.$defs = s : r.definitions = s);
  try {
    const i = JSON.parse(JSON.stringify(r));
    return Object.defineProperty(i, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: Se(t, "input", e.processors),
          output: Se(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), i;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function D(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const o = e._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return D(o.element, n);
  if (o.type === "set")
    return D(o.valueType, n);
  if (o.type === "lazy")
    return D(o.getter(), n);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault")
    return D(o.innerType, n);
  if (o.type === "intersection")
    return D(o.left, n) || D(o.right, n);
  if (o.type === "record" || o.type === "map")
    return D(o.keyType, n) || D(o.valueType, n);
  if (o.type === "pipe")
    return D(o.in, n) || D(o.out, n);
  if (o.type === "object") {
    for (const r in o.shape)
      if (D(o.shape[r], n))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const r of o.options)
      if (D(r, n))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const r of o.items)
      if (D(r, n))
        return !0;
    return !!(o.rest && D(o.rest, n));
  }
  return !1;
}
const di = (e, t = {}) => (n) => {
  const o = Dt({ ...n, processors: t });
  return R(e, o), Vt(o, e), Nt(o, e);
}, Se = (e, t, n = {}) => (o) => {
  const { libraryOptions: r, target: s } = o ?? {}, i = Dt({ ...r ?? {}, target: s, io: t, processors: n });
  return R(e, i), Vt(i, e), Nt(i, e);
}, fi = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, mi = (e, t, n, o) => {
  const r = n;
  r.type = "string";
  const { minimum: s, maximum: i, format: a, patterns: u, contentEncoding: l } = e._zod.bag;
  if (typeof s == "number" && (r.minLength = s), typeof i == "number" && (r.maxLength = i), a && (r.format = fi[a] ?? a, r.format === "" && delete r.format, a === "time" && delete r.format), l && (r.contentEncoding = l), u && u.size > 0) {
    const p = [...u];
    p.length === 1 ? r.pattern = p[0].source : p.length > 1 && (r.allOf = [
      ...p.map((h) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: h.source
      }))
    ]);
  }
}, pi = (e, t, n, o) => {
  n.not = {};
}, hi = (e, t, n, o) => {
}, gi = (e, t, n, o) => {
  const r = e._zod.def, s = _t(r.entries);
  s.every((i) => typeof i == "number") && (n.type = "number"), s.every((i) => typeof i == "string") && (n.type = "string"), n.enum = s;
}, bi = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, vi = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, yi = (e, t, n, o) => {
  const r = n, s = e._zod.def, { minimum: i, maximum: a } = e._zod.bag;
  typeof i == "number" && (r.minItems = i), typeof a == "number" && (r.maxItems = a), r.type = "array", r.items = R(s.element, t, { ...o, path: [...o.path, "items"] });
}, _i = (e, t, n, o) => {
  const r = n, s = e._zod.def;
  r.type = "object", r.properties = {};
  const i = s.shape;
  for (const l in i)
    r.properties[l] = R(i[l], t, {
      ...o,
      path: [...o.path, "properties", l]
    });
  const a = new Set(Object.keys(i)), u = new Set([...a].filter((l) => {
    const p = s.shape[l]._zod;
    return t.io === "input" ? p.optin === void 0 : p.optout === void 0;
  }));
  u.size > 0 && (r.required = Array.from(u)), s.catchall?._zod.def.type === "never" ? r.additionalProperties = !1 : s.catchall ? s.catchall && (r.additionalProperties = R(s.catchall, t, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : t.io === "output" && (r.additionalProperties = !1);
}, wi = (e, t, n, o) => {
  const r = e._zod.def, s = r.inclusive === !1, i = r.options.map((a, u) => R(a, t, {
    ...o,
    path: [...o.path, s ? "oneOf" : "anyOf", u]
  }));
  s ? n.oneOf = i : n.anyOf = i;
}, ki = (e, t, n, o) => {
  const r = e._zod.def, s = R(r.left, t, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), i = R(r.right, t, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), a = (l) => "allOf" in l && Object.keys(l).length === 1, u = [
    ...a(s) ? s.allOf : [s],
    ...a(i) ? i.allOf : [i]
  ];
  n.allOf = u;
}, xi = (e, t, n, o) => {
  const r = e._zod.def, s = R(r.innerType, t, o), i = t.seen.get(e);
  t.target === "openapi-3.0" ? (i.ref = r.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
}, $i = (e, t, n, o) => {
  const r = e._zod.def;
  R(r.innerType, t, o);
  const s = t.seen.get(e);
  s.ref = r.innerType;
}, zi = (e, t, n, o) => {
  const r = e._zod.def;
  R(r.innerType, t, o);
  const s = t.seen.get(e);
  s.ref = r.innerType, n.default = JSON.parse(JSON.stringify(r.defaultValue));
}, Zi = (e, t, n, o) => {
  const r = e._zod.def;
  R(r.innerType, t, o);
  const s = t.seen.get(e);
  s.ref = r.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
}, Si = (e, t, n, o) => {
  const r = e._zod.def;
  R(r.innerType, t, o);
  const s = t.seen.get(e);
  s.ref = r.innerType;
  let i;
  try {
    i = r.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = i;
}, Oi = (e, t, n, o) => {
  const r = e._zod.def, s = t.io === "input" ? r.in._zod.def.type === "transform" ? r.out : r.in : r.out;
  R(s, t, o);
  const i = t.seen.get(e);
  i.ref = s;
}, Pi = (e, t, n, o) => {
  const r = e._zod.def;
  R(r.innerType, t, o);
  const s = t.seen.get(e);
  s.ref = r.innerType, n.readOnly = !0;
}, Ut = (e, t, n, o) => {
  const r = e._zod.def;
  R(r.innerType, t, o);
  const s = t.seen.get(e);
  s.ref = r.innerType;
}, Ci = /* @__PURE__ */ d("ZodISODateTime", (e, t) => {
  Lo.init(e, t), E.init(e, t);
});
function Ei(e) {
  return /* @__PURE__ */ Mr(Ci, e);
}
const Ii = /* @__PURE__ */ d("ZodISODate", (e, t) => {
  Mo.init(e, t), E.init(e, t);
});
function Ti(e) {
  return /* @__PURE__ */ Jr(Ii, e);
}
const Ai = /* @__PURE__ */ d("ZodISOTime", (e, t) => {
  Jo.init(e, t), E.init(e, t);
});
function ji(e) {
  return /* @__PURE__ */ Wr(Ai, e);
}
const Ri = /* @__PURE__ */ d("ZodISODuration", (e, t) => {
  Wo.init(e, t), E.init(e, t);
});
function Di(e) {
  return /* @__PURE__ */ Hr(Ri, e);
}
const Vi = (e, t) => {
  zt.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => Nn(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => Vn(e, n)
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
}, B = d("ZodError", Vi, {
  Parent: Error
}), Ni = /* @__PURE__ */ He(B), Ui = /* @__PURE__ */ Ke(B), Fi = /* @__PURE__ */ Ie(B), Bi = /* @__PURE__ */ Te(B), Li = /* @__PURE__ */ Bn(B), Mi = /* @__PURE__ */ Ln(B), Ji = /* @__PURE__ */ Mn(B), Wi = /* @__PURE__ */ Jn(B), Hi = /* @__PURE__ */ Wn(B), Ki = /* @__PURE__ */ Hn(B), Gi = /* @__PURE__ */ Kn(B), qi = /* @__PURE__ */ Gn(B), j = /* @__PURE__ */ d("ZodType", (e, t) => (A.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: Se(e, "input"),
    output: Se(e, "output")
  }
}), e.toJSONSchema = di(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(q(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (n, o) => Y(e, n, o), e.brand = () => e, e.register = ((n, o) => (n.add(e, o), e)), e.parse = (n, o) => Ni(e, n, o, { callee: e.parse }), e.safeParse = (n, o) => Fi(e, n, o), e.parseAsync = async (n, o) => Ui(e, n, o, { callee: e.parseAsync }), e.safeParseAsync = async (n, o) => Bi(e, n, o), e.spa = e.safeParseAsync, e.encode = (n, o) => Li(e, n, o), e.decode = (n, o) => Mi(e, n, o), e.encodeAsync = async (n, o) => Ji(e, n, o), e.decodeAsync = async (n, o) => Wi(e, n, o), e.safeEncode = (n, o) => Hi(e, n, o), e.safeDecode = (n, o) => Ki(e, n, o), e.safeEncodeAsync = async (n, o) => Gi(e, n, o), e.safeDecodeAsync = async (n, o) => qi(e, n, o), e.refine = (n, o) => e.check(Ls(n, o)), e.superRefine = (n) => e.check(Ms(n)), e.overwrite = (n) => e.check(/* @__PURE__ */ ie(n)), e.optional = () => dt(e), e.exactOptional = () => Cs(e), e.nullable = () => ft(e), e.nullish = () => dt(ft(e)), e.nonoptional = (n) => Rs(e, n), e.array = () => ys(e), e.or = (n) => xs([e, n]), e.and = (n) => zs(e, n), e.transform = (n) => mt(e, Os(n)), e.default = (n) => Ts(e, n), e.prefault = (n) => js(e, n), e.catch = (n) => Vs(e, n), e.pipe = (n) => mt(e, n), e.readonly = () => Fs(e), e.describe = (n) => {
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
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), Ft = /* @__PURE__ */ d("_ZodString", (e, t) => {
  Ge.init(e, t), j.init(e, t), e._zod.processJSONSchema = (o, r, s) => mi(e, o, r);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...o) => e.check(/* @__PURE__ */ qr(...o)), e.includes = (...o) => e.check(/* @__PURE__ */ Qr(...o)), e.startsWith = (...o) => e.check(/* @__PURE__ */ ei(...o)), e.endsWith = (...o) => e.check(/* @__PURE__ */ ti(...o)), e.min = (...o) => e.check(/* @__PURE__ */ Ze(...o)), e.max = (...o) => e.check(/* @__PURE__ */ jt(...o)), e.length = (...o) => e.check(/* @__PURE__ */ Rt(...o)), e.nonempty = (...o) => e.check(/* @__PURE__ */ Ze(1, ...o)), e.lowercase = (o) => e.check(/* @__PURE__ */ Yr(o)), e.uppercase = (o) => e.check(/* @__PURE__ */ Xr(o)), e.trim = () => e.check(/* @__PURE__ */ oi()), e.normalize = (...o) => e.check(/* @__PURE__ */ ni(...o)), e.toLowerCase = () => e.check(/* @__PURE__ */ ri()), e.toUpperCase = () => e.check(/* @__PURE__ */ ii()), e.slugify = () => e.check(/* @__PURE__ */ si());
}), Yi = /* @__PURE__ */ d("ZodString", (e, t) => {
  Ge.init(e, t), Ft.init(e, t), e.email = (n) => e.check(/* @__PURE__ */ At(Bt, n)), e.url = (n) => e.check(/* @__PURE__ */ Or(Qi, n)), e.jwt = (n) => e.check(/* @__PURE__ */ Lr(ps, n)), e.emoji = (n) => e.check(/* @__PURE__ */ Pr(es, n)), e.guid = (n) => e.check(/* @__PURE__ */ ut(lt, n)), e.uuid = (n) => e.check(/* @__PURE__ */ $r(_e, n)), e.uuidv4 = (n) => e.check(/* @__PURE__ */ zr(_e, n)), e.uuidv6 = (n) => e.check(/* @__PURE__ */ Zr(_e, n)), e.uuidv7 = (n) => e.check(/* @__PURE__ */ Sr(_e, n)), e.nanoid = (n) => e.check(/* @__PURE__ */ Cr(ts, n)), e.guid = (n) => e.check(/* @__PURE__ */ ut(lt, n)), e.cuid = (n) => e.check(/* @__PURE__ */ Er(ns, n)), e.cuid2 = (n) => e.check(/* @__PURE__ */ Ir(os, n)), e.ulid = (n) => e.check(/* @__PURE__ */ Tr(rs, n)), e.base64 = (n) => e.check(/* @__PURE__ */ Ur(ds, n)), e.base64url = (n) => e.check(/* @__PURE__ */ Fr(fs, n)), e.xid = (n) => e.check(/* @__PURE__ */ Ar(is, n)), e.ksuid = (n) => e.check(/* @__PURE__ */ jr(ss, n)), e.ipv4 = (n) => e.check(/* @__PURE__ */ Rr(as, n)), e.ipv6 = (n) => e.check(/* @__PURE__ */ Dr(us, n)), e.cidrv4 = (n) => e.check(/* @__PURE__ */ Vr(ls, n)), e.cidrv6 = (n) => e.check(/* @__PURE__ */ Nr(cs, n)), e.e164 = (n) => e.check(/* @__PURE__ */ Br(ms, n)), e.datetime = (n) => e.check(Ei(n)), e.date = (n) => e.check(Ti(n)), e.time = (n) => e.check(ji(n)), e.duration = (n) => e.check(Di(n));
});
function ue(e) {
  return /* @__PURE__ */ xr(Yi, e);
}
const E = /* @__PURE__ */ d("ZodStringFormat", (e, t) => {
  C.init(e, t), Ft.init(e, t);
}), Bt = /* @__PURE__ */ d("ZodEmail", (e, t) => {
  Ao.init(e, t), E.init(e, t);
});
function Xi(e) {
  return /* @__PURE__ */ At(Bt, e);
}
const lt = /* @__PURE__ */ d("ZodGUID", (e, t) => {
  Io.init(e, t), E.init(e, t);
}), _e = /* @__PURE__ */ d("ZodUUID", (e, t) => {
  To.init(e, t), E.init(e, t);
}), Qi = /* @__PURE__ */ d("ZodURL", (e, t) => {
  jo.init(e, t), E.init(e, t);
}), es = /* @__PURE__ */ d("ZodEmoji", (e, t) => {
  Ro.init(e, t), E.init(e, t);
}), ts = /* @__PURE__ */ d("ZodNanoID", (e, t) => {
  Do.init(e, t), E.init(e, t);
}), ns = /* @__PURE__ */ d("ZodCUID", (e, t) => {
  Vo.init(e, t), E.init(e, t);
}), os = /* @__PURE__ */ d("ZodCUID2", (e, t) => {
  No.init(e, t), E.init(e, t);
}), rs = /* @__PURE__ */ d("ZodULID", (e, t) => {
  Uo.init(e, t), E.init(e, t);
}), is = /* @__PURE__ */ d("ZodXID", (e, t) => {
  Fo.init(e, t), E.init(e, t);
}), ss = /* @__PURE__ */ d("ZodKSUID", (e, t) => {
  Bo.init(e, t), E.init(e, t);
}), as = /* @__PURE__ */ d("ZodIPv4", (e, t) => {
  Ho.init(e, t), E.init(e, t);
}), us = /* @__PURE__ */ d("ZodIPv6", (e, t) => {
  Ko.init(e, t), E.init(e, t);
}), ls = /* @__PURE__ */ d("ZodCIDRv4", (e, t) => {
  Go.init(e, t), E.init(e, t);
}), cs = /* @__PURE__ */ d("ZodCIDRv6", (e, t) => {
  qo.init(e, t), E.init(e, t);
}), ds = /* @__PURE__ */ d("ZodBase64", (e, t) => {
  Yo.init(e, t), E.init(e, t);
}), fs = /* @__PURE__ */ d("ZodBase64URL", (e, t) => {
  Qo.init(e, t), E.init(e, t);
}), ms = /* @__PURE__ */ d("ZodE164", (e, t) => {
  er.init(e, t), E.init(e, t);
}), ps = /* @__PURE__ */ d("ZodJWT", (e, t) => {
  nr.init(e, t), E.init(e, t);
}), hs = /* @__PURE__ */ d("ZodUnknown", (e, t) => {
  or.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => hi();
});
function ct() {
  return /* @__PURE__ */ Kr(hs);
}
const gs = /* @__PURE__ */ d("ZodNever", (e, t) => {
  rr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => pi(e, n, o);
});
function bs(e) {
  return /* @__PURE__ */ Gr(gs, e);
}
const vs = /* @__PURE__ */ d("ZodArray", (e, t) => {
  ir.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => yi(e, n, o, r), e.element = t.element, e.min = (n, o) => e.check(/* @__PURE__ */ Ze(n, o)), e.nonempty = (n) => e.check(/* @__PURE__ */ Ze(1, n)), e.max = (n, o) => e.check(/* @__PURE__ */ jt(n, o)), e.length = (n, o) => e.check(/* @__PURE__ */ Rt(n, o)), e.unwrap = () => e.element;
});
function ys(e, t) {
  return /* @__PURE__ */ ai(vs, e, t);
}
const _s = /* @__PURE__ */ d("ZodObject", (e, t) => {
  ar.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => _i(e, n, o, r), z(e, "shape", () => t.shape), e.keyof = () => Zs(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: ct() }), e.loose = () => e.clone({ ...e._zod.def, catchall: ct() }), e.strict = () => e.clone({ ...e._zod.def, catchall: bs() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => Tn(e, n), e.safeExtend = (n) => An(e, n), e.merge = (n) => jn(e, n), e.pick = (n) => En(e, n), e.omit = (n) => In(e, n), e.partial = (...n) => Rn(Lt, e, n[0]), e.required = (...n) => Dn(Mt, e, n[0]);
});
function ws(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...w(t)
  };
  return new _s(n);
}
const ks = /* @__PURE__ */ d("ZodUnion", (e, t) => {
  ur.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => wi(e, n, o, r), e.options = t.options;
});
function xs(e, t) {
  return new ks({
    type: "union",
    options: e,
    ...w(t)
  });
}
const $s = /* @__PURE__ */ d("ZodIntersection", (e, t) => {
  lr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => ki(e, n, o, r);
});
function zs(e, t) {
  return new $s({
    type: "intersection",
    left: e,
    right: t
  });
}
const Ue = /* @__PURE__ */ d("ZodEnum", (e, t) => {
  cr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (o, r, s) => gi(e, o, r), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (o, r) => {
    const s = {};
    for (const i of o)
      if (n.has(i))
        s[i] = t.entries[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new Ue({
      ...t,
      checks: [],
      ...w(r),
      entries: s
    });
  }, e.exclude = (o, r) => {
    const s = { ...t.entries };
    for (const i of o)
      if (n.has(i))
        delete s[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new Ue({
      ...t,
      checks: [],
      ...w(r),
      entries: s
    });
  };
});
function Zs(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new Ue({
    type: "enum",
    entries: n,
    ...w(t)
  });
}
const Ss = /* @__PURE__ */ d("ZodTransform", (e, t) => {
  dr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => vi(e, n), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new vt(e.constructor.name);
    n.addIssue = (s) => {
      if (typeof s == "string")
        n.issues.push(pe(s, n.value, t));
      else {
        const i = s;
        i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = n.value), i.inst ?? (i.inst = e), n.issues.push(pe(i));
      }
    };
    const r = t.transform(n.value, n);
    return r instanceof Promise ? r.then((s) => (n.value = s, n)) : (n.value = r, n);
  };
});
function Os(e) {
  return new Ss({
    type: "transform",
    transform: e
  });
}
const Lt = /* @__PURE__ */ d("ZodOptional", (e, t) => {
  Tt.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ut(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function dt(e) {
  return new Lt({
    type: "optional",
    innerType: e
  });
}
const Ps = /* @__PURE__ */ d("ZodExactOptional", (e, t) => {
  fr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ut(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Cs(e) {
  return new Ps({
    type: "optional",
    innerType: e
  });
}
const Es = /* @__PURE__ */ d("ZodNullable", (e, t) => {
  mr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => xi(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function ft(e) {
  return new Es({
    type: "nullable",
    innerType: e
  });
}
const Is = /* @__PURE__ */ d("ZodDefault", (e, t) => {
  pr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => zi(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Ts(e, t) {
  return new Is({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : kt(t);
    }
  });
}
const As = /* @__PURE__ */ d("ZodPrefault", (e, t) => {
  hr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Zi(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function js(e, t) {
  return new As({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : kt(t);
    }
  });
}
const Mt = /* @__PURE__ */ d("ZodNonOptional", (e, t) => {
  gr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => $i(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Rs(e, t) {
  return new Mt({
    type: "nonoptional",
    innerType: e,
    ...w(t)
  });
}
const Ds = /* @__PURE__ */ d("ZodCatch", (e, t) => {
  br.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Si(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Vs(e, t) {
  return new Ds({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Ns = /* @__PURE__ */ d("ZodPipe", (e, t) => {
  vr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Oi(e, n, o, r), e.in = t.in, e.out = t.out;
});
function mt(e, t) {
  return new Ns({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Us = /* @__PURE__ */ d("ZodReadonly", (e, t) => {
  yr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Pi(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Fs(e) {
  return new Us({
    type: "readonly",
    innerType: e
  });
}
const Bs = /* @__PURE__ */ d("ZodCustom", (e, t) => {
  _r.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => bi(e, n);
});
function Ls(e, t = {}) {
  return /* @__PURE__ */ ui(Bs, e, t);
}
function Ms(e) {
  return /* @__PURE__ */ li(e);
}
const Js = ws({
  name: ue().min(1, "Obligatorio"),
  lastName: ue().min(1, "Obligatorio"),
  username: ue().min(1, "Obligatorio"),
  email: Xi("Introduce un email correcto"),
  phoneNumber: ue().min(1, "Obligatorio").max(9, "Max 9 dígitos").regex(/^[0-9]+$/, "Solo números"),
  password: ue().min(8, "Mínimo 8 carácteres").max(15, "Máximo 15 carácteres").refine((e) => /[A-Z]/.test(e), { message: "Al menos una mayúscula" }).refine((e) => /[a-z]/.test(e), { message: "Al menos una minúscula" }).refine((e) => /[0-9]/.test(e), { message: "Almenos menos un número" }).refine((e) => /[!@#$%^&*(),.?":{}|<>]/.test(e), { message: "Al menos un símbolo" })
}), Ws = { class: "ui:max-w-2xl ui:mx-auto ui:p-8 ui:bg-white ui:rounded-2xl ui:shadow-xl ui:border ui:border-gray-100 ui:shrink-0" }, Hs = { class: "ui:grid ui:grid-cols-2 ui:gap-2" }, Ks = { class: "ui:grid ui:grid-cols-1 ui:gap-2" }, Gs = { class: "ui:grid ui:grid-cols-2 ui:gap-2" }, qs = { class: "ui:grid ui:grid-cols-1 ui:gap-2" }, Ys = { class: "ui:text-center ui:text-sm ui:text-gray-500 ui:mt-2" }, Xs = /* @__PURE__ */ O({
  __name: "RegisterForm",
  props: {
    loading: { type: Boolean }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = on(Js), o = Ce({
      name: "",
      lastName: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: ""
    }), r = t, s = (i) => {
      i.valid && r("submit", i.values);
    };
    return (i, a) => (f(), b("div", Ws, [
      a[8] || (a[8] = c("div", { class: "ui:text-center ui:mb-8" }, [
        c("h2", { class: "ui:text-2xl ui:font-extrabold ui:text-gray-900" }, "Crea tu cuenta")
      ], -1)),
      g(y(he), {
        initialValues: o,
        onSubmit: s,
        class: "ui:flex ui:flex-col",
        resolver: y(n)
      }, {
        default: _((u) => [
          c("div", Hs, [
            g(W, {
              modelValue: o.name,
              "onUpdate:modelValue": a[0] || (a[0] = (l) => o.name = l),
              name: "name",
              label: "Nombre",
              error: u.name?.error?.message
            }, null, 8, ["modelValue", "error"]),
            g(W, {
              modelValue: o.lastName,
              "onUpdate:modelValue": a[1] || (a[1] = (l) => o.lastName = l),
              name: "lastName",
              label: "Apellido",
              error: u.lastName?.error?.message
            }, null, 8, ["modelValue", "error"])
          ]),
          c("div", Ks, [
            g(W, {
              modelValue: o.username,
              "onUpdate:modelValue": a[2] || (a[2] = (l) => o.username = l),
              name: "username",
              label: "Alias",
              error: u.username?.error?.message
            }, null, 8, ["modelValue", "error"])
          ]),
          c("div", Gs, [
            g(W, {
              modelValue: o.email,
              "onUpdate:modelValue": a[3] || (a[3] = (l) => o.email = l),
              name: "email",
              label: "Email",
              error: u.email?.error?.message
            }, null, 8, ["modelValue", "error"]),
            g(W, {
              modelValue: o.phoneNumber,
              "onUpdate:modelValue": a[4] || (a[4] = (l) => o.phoneNumber = l),
              name: "phoneNumber",
              label: "Teléfono",
              error: u.phoneNumber?.error?.message
            }, null, 8, ["modelValue", "error"])
          ]),
          c("div", qs, [
            g(oe, {
              modelValue: o.password,
              "onUpdate:modelValue": a[5] || (a[5] = (l) => o.password = l),
              name: "password",
              label: "Contraseña",
              error: u.password?.error?.message
            }, null, 8, ["modelValue", "error"])
          ]),
          g(U, {
            type: "submit",
            label: "Registrar",
            class: "ui:mt-6 ui:w-full ui:py-2",
            loading: e.loading
          }, null, 8, ["loading"]),
          c("p", Ys, [
            a[7] || (a[7] = N(" ¿Tienes cuenta? ", -1)),
            g(y(rn), {
              class: "ui:font-semibold ui:text-blue-600 ui:hover:underline",
              to: { name: "login" }
            }, {
              default: _(() => [...a[6] || (a[6] = [
                N(" Inicia sesión ", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["initialValues", "resolver"])
    ]));
  }
}), Qs = { class: "ui:hidden ui:lg:flex ui:items-center ui:gap-1 ui:bg-gray-100/50 ui:p-1 ui:rounded-full ui:border ui:border-gray-200/20 ui:backdrop-blur-sm" }, ea = { class: "ui:flex ui:items-center ui:gap-3" }, ta = /* @__PURE__ */ O({
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
    return pt(() => window.addEventListener("scroll", n)), ht(() => window.removeEventListener("scroll", n)), (o, r) => {
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
          g(s, {
            to: { name: "landing" },
            class: "ui:flex ui:items-center ui:group ui:no-underline"
          }, {
            default: _(() => [
              T(o.$slots, "logo", {}, () => [
                r[0] || (r[0] = c("span", { class: "ui:text-xl ui:font-black ui:tracking-tighter ui:text-primary" }, " LOGO ", -1))
              ])
            ]),
            _: 3
          }),
          c("nav", Qs, [
            (f(!0), b(I, null, V(e.navigationItems, (i) => (f(), $(s, {
              key: i.title,
              to: i.to,
              class: "ui:px-5 ui:py-2 ui:text-sm ui:font-semibold ui:text-gray-600 ui:rounded-full ui:transition-all ui:duration-300 ui:hover:text-primary ui:hover:bg-white ui:hover:shadow-sm ui:no-underline",
              "active-class": "ui:bg-white !ui:text-primary ui:shadow-sm"
            }, {
              default: _(() => [
                N(k(i.title), 1)
              ]),
              _: 2
            }, 1032, ["to"]))), 128))
          ]),
          c("div", ea, [
            T(o.$slots, "extra-actions"),
            g(s, {
              to: { name: "login" },
              class: "ui:no-underline"
            }, {
              default: _(() => [
                g(U, {
                  label: e.registerLabel,
                  rounded: "",
                  size: "small",
                  class: "ui:!border-none ui:!shadow-lg ui:!shadow-emerald-500/20 ui:!px-5 ui:transition-all ui:hover:-translate-y-0.5"
                }, null, 8, ["label"])
              ]),
              _: 1
            }),
            r[1] || (r[1] = c("button", { class: "ui:lg:hidden ui:p-2 ui:text-gray-700 ui:hover:bg-gray-100 ui:rounded-xl ui:transition-colors" }, [
              c("i", { class: "pi pi-bars ui:text-xl" })
            ], -1))
          ])
        ], 2)
      ], 2);
    };
  }
}), na = {
  class: /* @__PURE__ */ Z(["ui:fixed ui:top-0 ui:left-0 ui:z-50 ui:w-full ui:px-6 ui:pointer-event-none"])
}, oa = { class: "ui:flex ui:items-center ui:gap-3" }, ra = { class: "ui:hidden ui:lg:flex ui:items-center ui:gap-2" }, ia = { class: "ui:flex ui:items-center ui:gap-3" }, sa = /* @__PURE__ */ O({
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
    const n = e, o = fe(!1), r = () => {
      o.value = window.scrollY > 20;
    }, s = t;
    return pt(() => window.addEventListener("scroll", r)), ht(() => window.removeEventListener("scroll", r)), (i, a) => {
      const u = H("router-link");
      return f(), b("header", na, [
        c("div", {
          class: Z(["ui:mx-auto ui:transition-all ui:duration-500 ui:ease-in-out ui:pointer-events-auto", o.value ? "ui:max-w-5xl ui:mt-2" : "ui:max-w-7xl ui:mt-6"])
        }, [
          c("div", {
            class: Z([
              "ui:flex ui:items-center ui:justify-between ui:px-6 ui:py-3 ui:rounded-2xl ui:border ui:shadow-lg ui:transition-all ui:duration-500",
              o.value ? "ui:bg-white/70 ui:backdrop-blur-md ui:border-gray-200/50" : "ui:bg-white ui:border-slate-100"
            ])
          }, [
            c("div", oa, [
              c("button", {
                class: "ui:lg:hidden ui:p-2 ui:text-gray-600",
                onClick: a[0] || (a[0] = (l) => s("toggle-mobile-menu"))
              }, [...a[4] || (a[4] = [
                c("i", { class: "pi pi-bars ui:text-lg" }, null, -1)
              ])]),
              g(u, {
                to: { name: n.homeRouteName },
                class: "ui:flex ui:items-center ui:gap-2 ui:no-underline"
              }, {
                default: _(() => [
                  T(i.$slots, "logo", {}, () => [
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
              (f(!0), b(I, null, V(n.navigationItems, (l) => (f(), $(u, {
                key: l.title,
                to: l.to,
                class: "ui:flex ui:items-center ui:gap-2 ui:px-4 ui:py-2 ui:text-sm ui:font-medium ui:text-gray-500 ui:rounded-full ui:border ui:border-transparent ui:transition-all ui:hover:bg-gray-100 ui:hover:text-black ui:no-underline ui:!duration-300",
                "active-class": "ui:bg-gray-100 ui:!text-black ui:border-gray-200"
              }, {
                default: _(() => [
                  l.icon ? (f(), b("i", {
                    key: 0,
                    class: Z([l.icon, "ui:text-[10px]"])
                  }, null, 2)) : P("", !0),
                  N(" " + k(l.title), 1)
                ]),
                _: 2
              }, 1032, ["to"]))), 128))
            ]),
            c("div", ia, [
              T(i.$slots, "actions", {}, () => [
                n.isAuthenticated ? (f(), b(I, { key: 1 }, [
                  g(U, {
                    icon: "pi pi-user",
                    size: "small",
                    rounded: "",
                    class: "ui:!bg-gray-100 ui:!text-black ui:!border-gray-200",
                    onClick: a[2] || (a[2] = (l) => s("profile"))
                  }),
                  g(U, {
                    icon: "pi pi-sign-out",
                    size: "small",
                    rounded: "",
                    class: "ui:!text-gray-400 ui:hover:!text-red-500 ui:hover:!border-red-500 ui:!transition-colors ui:!bg-transparent ui:!border-gray-200 ui:!cursor-pointer ui:!transition-transform ui:hover:!scale-110",
                    onClick: a[3] || (a[3] = (l) => s("logout"))
                  })
                ], 64)) : (f(), $(U, {
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
}), aa = { class: "ui:w-full ui:pb-6 ui:pt-12 ui:px-6" }, ua = { class: "ui:grid ui:grid-cols-1 ui:md:grid-cols-3 ui:gap-6 ui:items-center" }, la = { class: "ui:flex ui:justify-center md:ui:justify-start" }, ca = { class: "ui:flex ui:items-center ui:gap-2" }, da = { class: "ui:bg-black ui:w-8 ui:h-8 ui:flex ui:items-center ui:justify-center ui:rounded-lg" }, fa = { class: "ui:font-bold ui:text-lg ui:text-black" }, ma = { class: "ui:flex ui:flex-wrap ui:justify-center ui:gap-x-6 ui:gap-y-2" }, pa = { class: "ui:flex ui:justify-center ui:gap-2" }, ha = ["href"], ga = { class: "ui:flex ui:flex-col md:ui:flex-row ui:justify-between ui:items-center ui:gap-2 ui:text-[10px] ui:text-gray-400" }, ba = { class: "ui:flex ui:gap-4 ui:font-medium" }, va = /* @__PURE__ */ O({
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
      const r = H("router-link");
      return f(), b("footer", aa, [
        c("div", {
          class: Z([
            "ui:mx-auto ui:bg-white/70 ui:border ui:border-gray-200/50 ui:shadow-lg ui:rounded-2xl ui:px-8 ui:py-6 ",
            t.maxWidth,
            t.blurAmount
          ])
        }, [
          c("div", ua, [
            c("div", la, [
              g(r, {
                to: { name: "home" },
                class: "ui:no-underline"
              }, {
                default: _(() => [
                  T(n.$slots, "logo", {}, () => [
                    c("div", ca, [
                      c("div", da, [
                        c("i", {
                          class: Z([t.iconLogo, "ui:text-white ui:text-xs"])
                        }, null, 2)
                      ]),
                      c("span", fa, k(t.titleLogo), 1)
                    ])
                  ])
                ]),
                _: 3
              })
            ]),
            c("nav", ma, [
              (f(!0), b(I, null, V(t.navigationItems, (s) => (f(), $(r, {
                key: s.title,
                to: s.to,
                class: "ui:text-sm ui:font-semibold ui:text-gray-500 ui:hover:text-black ui:transition-colors ui:no-underline"
              }, {
                default: _(() => [
                  N(k(s.title), 1)
                ]),
                _: 2
              }, 1032, ["to"]))), 128))
            ]),
            c("div", pa, [
              (f(!0), b(I, null, V(t.socialItems, (s) => (f(), b("a", {
                key: s.label,
                href: s.link,
                class: "ui:flex ui:items-center ui:justify-center ui:w-8 ui:h-8 ui:rounded-xl ui:bg-gray-200 ui:text-gray-400 ui:transition-all ui:hover:bg-black ui:hover:text-white"
              }, [
                c("i", {
                  class: Z([s.icon])
                }, null, 2)
              ], 8, ha))), 128))
            ])
          ]),
          o[2] || (o[2] = c("div", { class: "ui:w-full ui:h-px ui:bg-gray-100/60 ui:my-5" }, null, -1)),
          c("div", ga, [
            c("p", null, "© 2026 " + k(t.titleLogo) + ". Todos los derechos reservados.", 1),
            c("div", ba, [
              g(r, {
                to: { name: t.privacyRouteName },
                class: "ui:text-gray-400 ui:hover:text-black ui:no-underline ui:transition-colors"
              }, {
                default: _(() => [...o[0] || (o[0] = [
                  N(" Privacidad ", -1)
                ])]),
                _: 1
              }, 8, ["to"]),
              g(r, {
                to: { name: t.termsRouteName },
                class: "ui:text-gray-400 ui:hover:text-black ui:no-underline ui:transition-colors"
              }, {
                default: _(() => [...o[1] || (o[1] = [
                  N(" Términos ", -1)
                ])]),
                _: 1
              }, 8, ["to"])
            ])
          ])
        ], 2)
      ]);
    };
  }
}), se = /* @__PURE__ */ O({
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
      T(n.$slots, "default")
    ], 2));
  }
}), ya = { class: "ui:w-72 ui:h-full ui:z-50 ui:flex ui:flex-col" }, _a = ["href", "onClick"], wa = { class: "ui:text-sm ui:font-semibold" }, ka = {
  key: 0,
  class: "ui:w-full ui:pt-4"
}, xa = { class: "ui:flex ui:items-center ui:gap-3 ui:p-1 ui:bg-gray-100/50 ui:rounded-[1.5rem] ui:border ui:border-gray-200/50" }, $a = { class: "ui:flex ui:flex-col ui:overflow-hidden ui:flex-1" }, za = { class: "ui:font-bold ui:text-sm ui:text-black ui:truncate" }, Za = { class: "ui:text-[10px] ui:font-bold ui:text-gray-400 ui:uppercase" }, Sa = /* @__PURE__ */ O({
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
    const n = e, o = t, r = (s) => s ? s.charAt(0).toUpperCase() : "U";
    return (s, i) => {
      const a = H("router-link");
      return f(), b("nav", ya, [
        g(se, {
          padding: "ui:p-4",
          height: "ui:h-full"
        }, {
          default: _(() => [
            g(y(sn), {
              model: n.navigationItems,
              class: "ui:!w-full ui:!h-full ui:!bg-transparent ui:!border-none"
            }, {
              start: _(() => [
                e.isMobile ? (f(), b("button", {
                  key: 0,
                  onClick: i[0] || (i[0] = (u) => s.$emit("close")),
                  class: "ui:absolute ui:top-0 ui:right-0 ui:p-2 ui:text-gray-500 ui:hover:text-black ui:z-50"
                }, [...i[2] || (i[2] = [
                  c("i", { class: "pi pi-times ui:text-xl" }, null, -1)
                ])])) : P("", !0),
                g(a, {
                  to: { name: n.homeRoute },
                  class: "ui:flex ui:flex-col ui:items-center ui:gap-2 ui:py-4 ui:mb-2 ui:no-underline"
                }, {
                  default: _(() => [
                    T(s.$slots, "logo", {}, () => [
                      i[3] || (i[3] = c("div", { class: "ui:bg-black ui:w-12 ui:h-12 ui:flex ui:items-center ui:justify-center ui:rounded-2xl ui:shadow-lg" }, [
                        c("i", { class: "pi pi-bolt ui:text-white ui:text-xl" })
                      ], -1)),
                      i[4] || (i[4] = c("span", { class: "ui:text-xl ui:font-bold ui:text-black" }, [
                        N("Logo"),
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
                  default: _(({ href: l, navigate: p, isActive: h }) => [
                    c("a", {
                      href: l,
                      onClick: p,
                      class: Z(["ui:flex ui:items-center ui:gap-3 ui:px-4 ui:py-2", [
                        h ? "ui:bg-black ui:text-white" : ""
                      ]])
                    }, [
                      c("span", {
                        class: Z([u.icon, "ui:text-lg"])
                      }, null, 2),
                      c("span", wa, k(u.label), 1)
                    ], 10, _a)
                  ]),
                  _: 2
                }, 1032, ["to"])) : P("", !0)
              ]),
              end: _(() => [
                n.showUserCard ? (f(), b("div", ka, [
                  c("div", xa, [
                    g(a, {
                      to: { name: "profile" },
                      title: "Ver mi perfil",
                      class: "ui:no-underline ui:transition-transform ui:hover:scale-110 ui:duration-300 px-1"
                    }, {
                      default: _(() => [
                        g(y(Fe), {
                          label: r(n.username),
                          class: "ui:!bg-black ui:!text-white ui:shadow-md",
                          shape: "circle"
                        }, null, 8, ["label"])
                      ]),
                      _: 1
                    }),
                    c("div", $a, [
                      c("span", za, k(n.username), 1),
                      c("span", Za, k(n.userRole), 1)
                    ]),
                    c("button", {
                      onClick: i[1] || (i[1] = (u) => o("logout")),
                      class: "ui:p-2 ui:text-gray-400 ui:hover:text-red-500 ui:transition-colors ui:bg-transparent ui:border-0 ui:cursor-pointer ui:transition-transform ui:hover:scale-115 ui:duration-300"
                    }, [...i[5] || (i[5] = [
                      c("i", { class: "pi pi-sign-out" }, null, -1)
                    ])])
                  ])
                ])) : P("", !0)
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
function Pe(e, t) {
  return e.class ? typeof e.class == "function" ? e.class(t) : e.class : "";
}
const Oa = { class: "ui:flex ui:flex-wrap ui:items-center ui:justify-between ui:gap-4 ui:w-full" }, Pa = { class: "ui:flex ui:gap-2 ui:items-center ui:overflow-hidden ui:max-w-full" }, Ca = { key: 0 }, Ea = { class: "ui:flex ui:items-center ui:gap-4 ui:border ui:border-primary ui:bg-transparent ui:rounded-full ui:w-full ui:py-1 ui:px-2 ui:justify-between ui:max-w-md" }, Ia = { class: "ui:text-color ui:font-medium" }, Ta = { class: "hidden sm:block" }, Aa = { class: "ui:block ui:sm:hidden" }, ja = /* @__PURE__ */ O({
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
    return (o, r) => {
      const s = H("router-link");
      return f(), $(y(an), {
        filters: n.value,
        "onUpdate:filters": r[1] || (r[1] = (i) => n.value = i),
        globalFilterFields: e.columns.map((i) => i.field),
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
          c("div", Oa, [
            c("div", Pa, [
              T(o.$slots, "table-actions")
            ]),
            t.showSearch ? (f(), $(y(Re), {
              key: 0,
              class: "ui:w-full ui:sm:w-72"
            }, {
              default: _(() => [
                g(y(De), null, {
                  default: _(() => [...r[2] || (r[2] = [
                    c("i", { class: "pi pi-search" }, null, -1)
                  ])]),
                  _: 1
                }),
                g(y(gt), {
                  modelValue: n.value.global.value,
                  "onUpdate:modelValue": r[0] || (r[0] = (i) => n.value.global.value = i),
                  placeholder: "Buscar...",
                  class: "ui:rounded-xl ui:w-full",
                  size: "small"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })) : P("", !0)
          ])
        ]),
        default: _(() => [
          (f(!0), b(I, null, V(t.columns, (i) => (f(), $(y(xe), G({
            key: i.field,
            sortable: i.sortable
          }, { ref_for: !0 }, i), {
            body: _((a) => [
              i.actions ? (f(), b("div", Ca, [
                (f(!0), b(I, null, V(i.actions, (u, l) => (f(), b(I, { key: l }, [
                  y(Jt)(u, a.data) ? (f(), b(I, { key: 0 }, [
                    u.to ? (f(), $(s, {
                      key: 0,
                      to: u.to(a.data),
                      class: "ui:no-underline"
                    }, {
                      default: _(() => [
                        g(y(le), {
                          icon: y(Oe)(u, a.data),
                          label: u.text,
                          class: Z(["ui:!p-2", y(Pe)(u, a.data)]),
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
                      class: Z(["ui:!p-2", y(Pe)(u, a.data)]),
                      text: "",
                      rounded: "",
                      size: "small",
                      onClick: (p) => u.action?.(a.data, p)
                    }, null, 8, ["icon", "label", "class", "onClick"]))
                  ], 64)) : P("", !0)
                ], 64))), 128))
              ])) : T(o.$slots, i.field, {
                key: 1,
                data: a.data
              }, () => [
                N(k(i.field.includes(".") ? i.field.split(".").reduce((u, l) => u?.[l], a.data) : a.data[i.field]), 1)
              ])
            ]),
            _: 2
          }, 1040, ["sortable"]))), 128))
        ]),
        _: 2
      }, [
        e.useCustomPaginator ? {
          name: "paginatorcontainer",
          fn: _(({ first: i, last: a, page: u, pageCount: l, prevPageCallback: p, nextPageCallback: h, totalRecords: m }) => [
            c("div", Ea, [
              g(y(le), {
                icon: "pi pi-chevron-left",
                rounded: "",
                text: "",
                onClick: p,
                disabled: u === 0
              }, null, 8, ["onClick", "disabled"]),
              c("div", Ia, [
                c("span", Ta, "Mostrando del " + k(i) + " al " + k(a) + " de " + k(m), 1),
                c("span", Aa, "Página " + k(u + 1) + " de " + k(l), 1)
              ]),
              g(y(le), {
                icon: "pi pi-chevron-right",
                rounded: "",
                text: "",
                onClick: h,
                disabled: u === (l ?? 0) - 1
              }, null, 8, ["onClick", "disabled"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["filters", "globalFilterFields", "value", "loading", "size", "showGridlines", "stripedRows", "paginator", "rows", "rowsPerPageOptions", "useCustomPaginator", "removableSort"]);
    };
  }
}), Ra = {
  key: 0,
  class: "ui:text-surface-500 ui:dark:text-surface-400 ui:block ui:mb-8"
}, Da = { class: "ui:mt-1" }, Va = { class: "ui:flex ui:justify-end ui:gap-2" }, Na = /* @__PURE__ */ O({
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
    const o = fe(!1), r = fe({}), s = (h) => {
      const m = h ? { ...h } : {};
      a.inputsDialog?.forEach((v) => {
        const x = v.field;
        if (!x) return;
        const S = m[x];
        if (v.type === "time" && typeof S == "string" && S) {
          const [K, ae] = S.split(":"), ge = /* @__PURE__ */ new Date();
          ge.setHours(parseInt(K) || 0, parseInt(ae) || 0, 0, 0), m[x] = ge;
        }
      }), r.value = m, o.value = !0;
    }, i = () => {
      o.value = !1;
    }, a = e, u = n, l = (h) => {
      if (h.valid) {
        const m = { ...r.value, ...h.values };
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
    return t({ open: s, close: i }), (h, m) => (f(), b(I, null, [
      a.labelButton || a.icon ? (f(), $(U, {
        key: 0,
        label: a.labelButton,
        icon: a.icon,
        onClick: m[0] || (m[0] = (v) => o.value = !0),
        class: "'ui:!p-2'",
        text: "",
        rounded: ""
      }, null, 8, ["label", "icon"])) : P("", !0),
      g(y(ln), {
        visible: o.value,
        "onUpdate:visible": m[1] || (m[1] = (v) => o.value = v),
        modal: "",
        header: a.header,
        style: { width: "30rem" },
        pt: p
      }, {
        footer: _(() => [
          T(h.$slots, "footer", { data: r.value }, () => [
            c("div", Va, [
              g(U, {
                label: "Cancelar",
                severity: "secondary",
                onClick: i,
                loading: e.loading
              }, null, 8, ["loading"]),
              g(U, {
                label: "Guardar",
                type: "submit",
                form: "base-dialog-form",
                loading: e.loading
              }, null, 8, ["loading"])
            ])
          ])
        ]),
        default: _(() => [
          a.subtitle ? (f(), b("span", Ra, k(a.subtitle), 1)) : P("", !0),
          g(y(he), {
            id: "base-dialog-form",
            "initial-values": r.value,
            resolver: e.resolver,
            onSubmit: l
          }, {
            default: _((v) => [
              (f(!0), b(I, null, V(a.inputsDialog, (x) => (f(), b("div", {
                key: x.field,
                class: "ui:mb-1"
              }, [
                g(W, G({ ref_for: !0 }, x, {
                  name: x.field,
                  label: x.label,
                  modelValue: r.value[x.field],
                  "onUpdate:modelValue": (S) => r.value[x.field] = S,
                  error: v[x.field]?.error?.message
                }), null, 16, ["name", "label", "modelValue", "onUpdate:modelValue", "error"])
              ]))), 128)),
              c("div", Da, [
                T(h.$slots, "default", {
                  form: v,
                  data: r.value
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
}), Ua = {
  key: 0,
  class: "ui:px-4 ui:pt-4 ui:border-b ui:border-slate-100 ui:pb-2"
}, Fa = { class: "ui:text-sm ui:font-semibold ui:text-slate-500 ui:uppercase" }, Ba = { class: "ui:flex ui:items-center ui:gap-6 ui:md:gap-6 ui:p-4 ui:relative" }, La = { class: "ui:hidden ui:md:block" }, Ma = { class: "ui:flex-1" }, Ja = { class: "ui:text-xl ui:font-bold ui:text-slate-800" }, Wa = { class: "ui:text-slate-500" }, Ha = { class: "ui:mt-2" }, Ka = { class: "ui:relative ui:z-[100]" }, Ga = /* @__PURE__ */ O({
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
    const n = e, o = t, r = () => {
      o("edit");
    };
    return (s, i) => (f(), $(se, {
      padding: n.padding
    }, {
      default: _(() => [
        e.title ? (f(), b("div", Ua, [
          c("h3", Fa, k(e.title), 1)
        ])) : P("", !0),
        c("div", Ba, [
          c("div", La, [
            g(y(Fe), {
              image: n.image,
              label: e.image ? void 0 : e.initials,
              size: e.size,
              shape: e.shape
            }, null, 8, ["image", "label", "size", "shape"])
          ]),
          c("div", Ma, [
            c("h2", Ja, k(e.mainText), 1),
            c("p", Wa, k(e.subtext), 1),
            c("div", Ha, [
              T(s.$slots, "extra-info")
            ])
          ]),
          c("div", Ka, [
            T(s.$slots, "actions", {}, () => [
              g(U, {
                variant: "outlined",
                label: "Editar",
                size: "small",
                icon: "pi pi-user-edit",
                rounded: "",
                onClick: r,
                class: "ui:!px-3"
              })
            ])
          ])
        ])
      ]),
      _: 3
    }, 8, ["padding"]));
  }
}), qa = { class: "ui:w-9 ui:h-9 ui:flex ui:items-center ui:justify-center ui:bg-slate-50 ui:rounded-full" }, Ya = { class: "ui:flex ui:flex-col" }, Xa = { class: "ui:text-xs ui:font-semibold ui:text-slate-400 ui:uppercase ui:tracking-wider" }, Qa = { class: "ui:text-sm ui:text-slate-700" }, eu = /* @__PURE__ */ O({
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
      c("div", qa, [
        c("i", {
          class: Z([t.icon, "ui:text-slate-400 ui:text-sm"])
        }, null, 2)
      ]),
      c("div", Ya, [
        c("span", Xa, k(t.label), 1),
        c("span", Qa, k(t.value || "---"), 1)
      ])
    ]));
  }
}), tu = { class: "ui:flex ui:items-center ui:gap-3 ui:p-1 ui:rounded-2xl ui:border ui:border-gray-200/50 ui:bg-white ui:shadow-xl ui:backdrop-blur-xl" }, nu = { class: "ui:flex ui:flex-col ui:overflow-hidden ui:flex-1" }, ou = { class: "ui:font-bold ui:text-sm ui:text-black ui:truncate" }, ru = { class: "ui:text-[10px] ui:font-bold ui:text-gray-400 ui:uppercase" }, iu = /* @__PURE__ */ O({
  __name: "NavUserCard",
  props: {
    username: { default: "Admin Usuario" },
    userRole: { default: "Admin" },
    nagivateTo: { default: "profile" }
  },
  emits: ["logout"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = (s) => s ? s.charAt(0).toUpperCase() : "U";
    return (s, i) => {
      const a = H("router-link");
      return f(), b("div", tu, [
        g(a, {
          to: { name: n.nagivateTo },
          title: "Ver mi perfil",
          class: "ui:no-underline ui:transition-transform ui:hover:scale-110 ui:duration-300 px-1"
        }, {
          default: _(() => [
            g(y(Fe), {
              label: r(n.username),
              class: "ui:!bg-black ui:!text-white ui:shadow-md",
              shape: "circle"
            }, null, 8, ["label"])
          ]),
          _: 1
        }, 8, ["to"]),
        c("div", nu, [
          c("span", ou, k(n.username), 1),
          c("span", ru, k(n.userRole), 1)
        ]),
        c("button", {
          onClick: i[0] || (i[0] = (u) => o("logout")),
          class: "ui:p-2 ui:text-gray-400 ui:hover:text-red-500 ui:transition-colors ui:bg-transparent ui:border-0 ui:cursor-pointer ui:transition-transform ui:hover:scale-115 ui:duration-300"
        }, [...i[1] || (i[1] = [
          c("i", { class: "pi pi-sign-out" }, null, -1)
        ])])
      ]);
    };
  }
}), su = {
  key: 0,
  class: "ui:flex ui:w-full ui:gap-2 ui:items-center"
}, au = { class: "ui:flex ui:gap-2" }, uu = /* @__PURE__ */ O({
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
    const t = e, n = (r) => {
      if (!r || typeof r != "string") return "";
      try {
        return r.includes(":") ? r.substring(0, 5) : r;
      } catch {
        return "";
      }
    }, o = de(() => [1, 2, 3, 4, 5, 6, 7].map((s) => {
      const i = t.value.filter((a) => a.dayOfWeek.id === s);
      return {
        key: s.toString(),
        data: {
          id: s,
          name: t.dayNames ? t.dayNames[s] : `Día ${s}`,
          type: "day",
          dayOfWeek: { id: s },
          isClosed: i.length === 0 || i.every((a) => a.isClosed)
        },
        children: i.map((a) => ({
          key: `slot-${a.id}`,
          data: {
            ...a,
            type: "slot"
          }
        }))
      };
    }));
    return (r, s) => {
      const i = H("router-link");
      return f(), $(y(cn), {
        value: o.value,
        loading: t.loading,
        class: "ui:w-full"
      }, {
        default: _(() => [
          g(y(xe), {
            field: "name",
            header: e.dayColumnHeader || "Día / Franja",
            expander: "",
            class: "ui:w-[50%] ui:p-4 ui:border-b ui:border-slate-100",
            "body-class": "ui:p-4 ui:border-b ui:border-slatel-50 ui:text-slate-800"
          }, null, 8, ["header"]),
          g(y(xe), {
            field: "openingTime",
            header: e.statusColumnHeader || "Estado / Horario",
            class: "ui:w-[25%] ui:p-4 ui:border-b ui:border-slate-100"
          }, {
            body: _((a) => [
              a.node.data.type === "slot" ? (f(), b("div", su, [
                c("span", {
                  class: Z(["ui:flex ui:h-2.5 ui:w-2.5 ui:rounded-full ui:shrink-0", a.node.data.isClosed ? "ui:bg-red-500 ui:shadow-red-500/50 ui:shadow-sm" : "ui:bg-emerald-500 ui:shadow-emerald-500/50 ui:shadow-sm"])
                }, null, 2),
                c("div", {
                  class: Z(["ui:flex ui:items-center ui:gap-1", { "ui:opacity-30": a.node.data.isClosed }])
                }, [
                  g(y(be), {
                    severity: "secondary",
                    value: n(a.node.data.openingTime),
                    rounded: "",
                    class: "ui:text-sm ui:font-mono"
                  }, null, 8, ["value"]),
                  s[0] || (s[0] = c("span", { class: "text-slate-400" }, "-", -1)),
                  g(y(be), {
                    severity: "secondary",
                    value: n(a.node.data.closingTime),
                    rounded: "",
                    class: "ui:text-sm ui:font-mono"
                  }, null, 8, ["value"])
                ], 2)
              ])) : (f(), b(I, { key: 1 }, [
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
          g(y(xe), {
            header: e.actionsColumnHeader || "Acciones",
            class: "ui:w-[25%] ui:p-4 ui:border-b ui:border-slate-100"
          }, {
            body: _((a) => [
              c("div", au, [
                (f(!0), b(I, null, V(a.node.data.type === "slot" ? e.actions?.slot : e.actions?.day, (u, l) => (f(), b(I, { key: l }, [
                  y(Jt)(u, a.node.data) ? (f(), b(I, { key: 0 }, [
                    u.to ? (f(), $(i, {
                      key: 0,
                      to: u.to(a.node.data),
                      class: "ui:no-underline"
                    }, {
                      default: _(() => [
                        g(U, {
                          icon: y(Oe)(u, a.data),
                          label: u.text,
                          class: Z(["ui:!text-gray-400 ui:hover:!text-slate-700 ui:!transition-colors ui:!bg-transparent ui:hover:scale-110", y(Pe)(u, a.data)]),
                          text: "",
                          rounded: "",
                          size: "small"
                        }, null, 8, ["icon", "label", "class"])
                      ]),
                      _: 2
                    }, 1032, ["to"])) : (f(), $(U, {
                      key: 1,
                      icon: y(Oe)(u, a.node.data),
                      label: u.text,
                      text: "",
                      rounded: "",
                      size: "small",
                      class: Z(["ui:!text-gray-400 ui:hover:!text-slate-700 ui:!transition-colors ui:!bg-transparent ui:hover:scale-110", y(Pe)(u, a.node.data)]),
                      onClick: (p) => u.action?.(a.node.data, p)
                    }, null, 8, ["icon", "label", "class", "onClick"]))
                  ], 64)) : P("", !0)
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
}), lu = { class: "ui:h-full ui:w-full ui:overflow-auto ui:border ui:border-slate-200 ui:rounded-xl ui:bg-white ui:relative" }, cu = { class: "ui:flex ui:sticky ui:top-0 ui:z-30 ui:bg-white ui:border-b ui:border-slate-200" }, du = { class: "ui:font-bold ui:text-slate-800 ui:text-sm" }, fu = { class: "ui:text-[9px] ui:text-slate-400 ui:uppercase" }, mu = { class: "ui:flex ui:relative" }, pu = { class: "ui:w-20 ui:flex-shrink-0 ui:sticky ui:left-0 ui:z-20 ui:bg-slate-50 ui:border-r ui:border-slate-200" }, hu = { class: "ui:flex ui:flex-grow" }, gu = {
  key: 0,
  class: "ui:absolute ui:inset-0 ui:bg-slate-100/60 ui:z-10 ui:flex ui:items-center ui:justify-center"
}, bu = ["onClick"], vu = ["onClick"], yu = { class: "ui:font-bold ui:truncate" }, _u = { class: "ui:font-semibold ui:truncate" }, wu = { class: "ui:opacity-80 ui:truncate" }, we = 60, je = 160, ku = /* @__PURE__ */ O({
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
    const n = e, o = (l) => n.closedRanges?.some((p) => l >= p.from && l < p.to) ?? !1, r = de(() => {
      const l = [];
      for (let p = n.minTime; p <= n.maxTime; p++) l.push(p);
      return l;
    }), s = (l) => l.isDisabled ? typeof l.isDisabled == "function" ? l.isDisabled(l.data) : l.isDisabled : !1, i = (l) => {
      const p = l.start.getHours() + l.start.getMinutes() / 60, h = l.end.getHours() + l.end.getMinutes() / 60, m = (p - n.minTime) * we, v = (h - p) * we;
      return { top: `${m}px`, height: `${v}px` };
    }, a = t, u = (l) => l.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !1
    });
    return (l, p) => (f(), b("div", lu, [
      c("div", {
        style: te({ minWidth: e.resources.length * je + 80 + "px" }),
        class: "ui:relative"
      }, [
        c("div", cu, [
          p[0] || (p[0] = c("div", { class: "ui:w-20 ui:h-14 ui:sticky ui:left-0 ui:z-40 ui:bg-slate-50 ui:border-r ui:border-slate-200" }, null, -1)),
          (f(!0), b(I, null, V(e.resources, (h) => (f(), b("div", {
            key: h.id,
            style: te({ width: je + "px" }),
            class: "ui:flex-shrink-0 ui:h-14 ui:flex ui:flex-col ui:items-center ui:justify-center ui:border-r ui:border-slate-200 ui:bg-white"
          }, [
            c("span", du, k(h.label), 1),
            c("span", fu, k(h.type), 1)
          ], 4))), 128))
        ]),
        c("div", mu, [
          c("div", pu, [
            (f(!0), b(I, null, V(r.value, (h) => (f(), b("div", {
              key: h,
              style: te({ height: we + "px" }),
              class: "ui:flex ui:justify-center ui:pt-2 ui:text-xs ui:font-medium ui:text-slate-400 ui:border-b ui:border-slate-100"
            }, k(String(h).padStart(2, "0")) + ":00 ", 5))), 128))
          ]),
          c("div", hu, [
            (f(!0), b(I, null, V(e.resources, (h) => (f(), b("div", {
              key: "col-" + h.id,
              style: te({ width: je + "px" }),
              class: "ui:flex-shrink-0 ui:relative ui:border-r ui:border-slate-100 ui:bg-white"
            }, [
              s(h) ? (f(), b("div", gu)) : P("", !0),
              (f(!0), b(I, null, V(r.value, (m) => (f(), b("div", {
                key: "cell-" + m,
                style: te({ height: we + "px" }),
                class: Z(["ui:relative ui:z-15 ui:border-b ui:border-slate-100 ui:transition-colors", [
                  s(h) || o(m) ? "ui:cursor-not-allowed" : "ui:hover:bg-slate-100/50",
                  o(m) ? "ui:bg-slate-100 ui:border-none" : ""
                ]]),
                onClick: (v) => !s(h) && !o(m) && a("cell-click", { hour: m, resourceId: h.id })
              }, null, 14, bu))), 128)),
              (f(!0), b(I, null, V(e.events.filter((m) => m.resourceId === h.id), (m) => (f(), b("div", {
                key: m.id,
                class: Z(["ui:absolute ui:left-1 ui:right-1 ui:rounded-lg ui:p-2 ui:text-xs ui:shadow-md ui:z-15 ui:border-l-4 ui:overflow-hidden ui:transition-all ui:duration-200 ui:hover:shadow-lg ui:hover:-translate-y-0.5 ui:hover:z-30 ui:cursor-pointer", m.colorClass || "ui:bg-blue-50 ui:border-blue-500 ui:text-blue-700"]),
                style: te(i(m)),
                onClick: Xt((v) => a("event-click", m), ["stop"])
              }, [
                c("div", yu, k(m.title), 1),
                c("div", _u, k(u(m.start)) + " - " + k(u(m.end)), 1),
                c("div", wu, k(m.content), 1)
              ], 14, vu))), 128))
            ], 4))), 128))
          ])
        ])
      ], 4)
    ]));
  }
}), xu = { class: "ui:flex ui:flex-col ui:lg:flex-row ui:items-center ui:justify-between ui:gap-6 ui:p-2 ui:flex-wrap" }, $u = { class: "ui:flex-1 ui:text-center ui:lg:text-left ui:w-full" }, zu = { class: "ui: text-lg ui:sm:text-xl ui:font-bold ui:mb-1 ui:italic ui:text-slate-800" }, Zu = { class: "ui:text-sm ui:text-gray-500" }, Su = { class: "ui:flex ui:flex-col ui:sm:flex-row ui:w-full ui:lg:w-auto ui:items-center ui:gap-4" }, Ou = { class: "ui:w-full ui:md:w-72" }, Pu = /* @__PURE__ */ O({
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
    const n = e, o = t, r = (s) => {
      o("update:modelValue", s);
    };
    return (s, i) => (f(), $(y(se), {
      class: "ui:mb-10 ui:relative ui:z-20",
      "border-rounded": "ui:rounded-3xl",
      padding: "ui:p-6"
    }, {
      default: _(() => [
        c("div", xu, [
          c("div", $u, [
            c("h2", zu, k(n.title), 1),
            c("p", Zu, k(n.subtitle), 1)
          ]),
          c("div", Su, [
            c("div", Ou, [
              g(y(Be), {
                "model-value": n.modelValue,
                "onUpdate:modelValue": r,
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
          T(s.$slots, "additional-filters")
        ])
      ]),
      _: 3
    }));
  }
}), Cu = { class: "ui:space-y-5" }, Eu = { class: "ui:flex ui:items-center ui:justify-between ui:flex-wrap ui:border-b ui:border-slate-200 ui:pb-4 ui:gap-y-3" }, Iu = { class: "ui:flex ui:items-center ui:gap-4" }, Tu = ["src"], Au = { class: "ui:min-w-0" }, ju = { class: "ui:text-2xl ui:font-black ui:text-slate-800 ui:uppercase ui:tracking-tight ui:truncate" }, Ru = ["href"], Du = { class: "ui:underline ui:decoration-dotted group-hover/address:ui:decoration-solid ui:truncate" }, Vu = { class: "ui:w-full ui:sm:w-auto" }, Nu = { class: "ui:flex ui:gap-4 ui:overflow-x-auto ui:p-6 ui:scrollbar-hide" }, Wt = /* @__PURE__ */ O({
  __name: "BaseGroupedItem",
  props: {
    title: {},
    subtitle: {},
    items: {},
    icon: {}
  },
  setup(e) {
    const t = (n) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(n)}`;
    return (n, o) => (f(), b("div", Cu, [
      c("div", Eu, [
        c("div", Iu, [
          e.icon ? (f(), b("img", {
            key: 0,
            src: e.icon,
            class: "ui:w-12 ui:h-12 ui:bg-gray-300 ui:rounded-xl",
            alt: "Clima"
          }, null, 8, Tu)) : P("", !0),
          c("div", Au, [
            c("h3", ju, k(e.title), 1),
            e.subtitle ? (f(), b("a", {
              key: 0,
              href: t(e.subtitle),
              target: "_blank",
              class: "ui:flex ui:items-center ui:gap-2 ui:text-gray-500 ui:text-sm hover:ui:text-slate-900 ui:transition-colors ui:group/address ui:min-w-0",
              title: "Ver en Google Maps"
            }, [
              o[0] || (o[0] = c("i", { class: "pi pi-map-marker ui:text-[#C8E794]" }, null, -1)),
              c("span", Du, k(e.subtitle), 1)
            ], 8, Ru)) : P("", !0)
          ])
        ]),
        c("div", Vu, [
          T(n.$slots, "header-action", {
            count: e.items.length
          })
        ])
      ]),
      c("div", Nu, [
        (f(!0), b(I, null, V(e.items, (r) => T(n.$slots, "card", {
          key: r.id,
          item: r
        })), 128))
      ])
    ]));
  }
}), Uu = { class: "ui:space-y-12" }, Fu = /* @__PURE__ */ O({
  __name: "GroupedList",
  props: {
    groups: {},
    groupTitleKey: {},
    groupSubtitleKey: {},
    groupIconKey: {},
    itemKey: {}
  },
  setup(e) {
    return (t, n) => (f(), b("div", Uu, [
      e.groups.length > 0 ? (f(!0), b(I, { key: 0 }, V(e.groups, (o) => (f(), $(Wt, {
        key: o.id,
        title: o[e.groupTitleKey],
        subtitle: o[e.groupSubtitleKey || ""],
        items: o[e.itemKey || "items"],
        icon: e.groupIconKey ? o[e.groupIconKey] : void 0
      }, {
        card: _(({ item: r }) => [
          T(t.$slots, "card", {
            item: r,
            group: o
          })
        ]),
        "header-action": _(({ count: r }) => [
          T(t.$slots, "header-action", { count: r })
        ]),
        _: 2
      }, 1032, ["title", "subtitle", "items", "icon"]))), 128)) : T(t.$slots, "empty", { key: 1 }, () => [
        n[0] || (n[0] = c("div", { class: "ui:text-center ui:py-20 ui:border-2 ui:border-dashed ui:rounded-3xl" }, [
          c("p", { class: "ui:text-slate-400" }, "No hay datos disponibles")
        ], -1))
      ])
    ]));
  }
}), Bu = /* @__PURE__ */ O({
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
    }, r = de(() => n[t.type]), s = de(() => o[t.size]);
    return (i, a) => (f(), b("span", {
      class: Z([
        "inline-flex items-center rounded-full uppercase font-bold tracking-wider border",
        s.value,
        r.value
      ])
    }, [
      e.icon ? (f(), b("i", {
        key: 0,
        class: Z([e.icon, "shrink-0 leading-none", t.size === "small" ? "!text-[10px]" : "!text-xs"])
      }, null, 2)) : P("", !0),
      e.dot ? (f(), b("span", {
        key: 1,
        class: Z([
          "rounded-full bg-current shrink-0 animate-pulse",
          t.size === "small" ? "w-1.5 h-1.5" : "w-2 h-2"
        ])
      }, null, 2)) : P("", !0),
      c("span", null, k(e.text), 1)
    ], 2));
  }
}), Lu = /* @__PURE__ */ O({
  __name: "ForgotPasswordForm",
  props: {
    backRoute: {},
    loading: { type: Boolean },
    resolver: {}
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = Ce({
      email: ""
    }), o = t, r = (s) => {
      s.valid && o("submit", s.values);
    };
    return (s, i) => {
      const a = H("RouterLink");
      return f(), $(se, { padding: "p-8" }, {
        default: _(() => [
          i[2] || (i[2] = c("div", { class: "ui:mb-6" }, [
            c("h2", { class: "ui:text-xl ui:font-bold ui:text-gray-900 ui:text-center" }, "¿Problemas de acceso?"),
            c("p", { class: "ui:text-sm ui:text-gray-500 ui:mt-1 ui:text-center" }, " Indica tu email y te enviaremos enlace de recuperación ")
          ], -1)),
          g(y(he), {
            "initial-values": n,
            onSubmit: r,
            class: "ui:flex ui:flex-col ui:gap-4",
            resolver: e.resolver
          }, {
            default: _((u) => [
              g(W, {
                modelValue: n.email,
                "onUpdate:modelValue": i[0] || (i[0] = (l) => n.email = l),
                name: "email",
                label: "Email",
                icon: "pi-envelope",
                type: "email",
                error: u.email?.error?.message
              }, null, 8, ["modelValue", "error"]),
              g(U, {
                type: "submit",
                label: "Enviar enlace",
                class: "ui:w-full",
                loading: e.loading
              }, null, 8, ["loading"]),
              g(a, {
                to: { name: e.backRoute },
                class: "ui:text-center ui:text-xs"
              }, {
                default: _(() => [...i[1] || (i[1] = [
                  N(" Volver ", -1)
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
}), Mu = { class: "ui:mb-6" }, Ju = { class: "ui:text-xl ui:font-bold ui:text-gray-900 ui:text-center" }, Wu = { class: "ui:flex ui:flex-col ui:gap-1" }, yl = /* @__PURE__ */ O({
  __name: "ResetPasswordForm",
  props: {
    mode: {},
    loading: { type: Boolean },
    resolver: {},
    card: { type: Boolean }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = Ce({
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    }), o = t, r = (s) => {
      s.valid && o("submit", s.values);
    };
    return (s, i) => e.card ? (f(), $(se, {
      key: 0,
      padding: "p-8"
    }, {
      default: _(() => [
        c("div", Mu, [
          c("h2", Ju, k(e.mode === "change" ? "Cambiar contraseña" : "Nueva contraseña"), 1),
          i[3] || (i[3] = c("p", { class: "ui:text-sm ui:text-gray-500 ui:mt-1 ui:text-center" }, " Establece la clave para tu cuenta ", -1))
        ]),
        g(y(he), {
          "initial-values": n,
          onSubmit: r,
          class: "ui:flex ui:flex-col ui:gap-4",
          resolver: e.resolver
        }, {
          default: _((a) => [
            c("div", Wu, [
              e.mode === "change" ? (f(), $(oe, {
                key: 0,
                modelValue: n.oldPassword,
                "onUpdate:modelValue": i[0] || (i[0] = (u) => n.oldPassword = u),
                name: "oldPassword",
                label: "Contraseña actual",
                error: a.oldPassword?.error?.message
              }, null, 8, ["modelValue", "error"])) : P("", !0),
              g(oe, {
                modelValue: n.newPassword,
                "onUpdate:modelValue": i[1] || (i[1] = (u) => n.newPassword = u),
                name: "newPassword",
                label: "Contraseña",
                error: a.newPassword?.error?.message
              }, null, 8, ["modelValue", "error"]),
              g(oe, {
                modelValue: n.confirmPassword,
                "onUpdate:modelValue": i[2] || (i[2] = (u) => n.confirmPassword = u),
                name: "confirmPassword",
                label: "Confirmar contraseña",
                error: a.confirmPassword?.error?.message
              }, null, 8, ["modelValue", "error"])
            ]),
            g(U, {
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
    })) : P("", !0);
  }
}), Hu = {
  key: 0,
  class: "lg:hidden fixed inset-0 z-50"
}, Ku = { class: "relative w-64 h-full bg-white shadow-xl" }, Gu = /* @__PURE__ */ O({
  __name: "NavbarMobile",
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    return (t, n) => e.isOpen ? (f(), b("div", Hu, [
      c("div", {
        class: "absolute inset-0 bg-black/50",
        onClick: n[0] || (n[0] = (o) => t.$emit("close"))
      }),
      c("div", Ku, [
        T(t.$slots, "default")
      ])
    ])) : P("", !0);
  }
}), _l = {
  install(e) {
    e.component("BaseInput", W), e.component("BaseButton", U), e.component("BasePassword", oe), e.component("LoginForm", Zn), e.component("Header", ta), e.component("HeaderM", sa), e.component("Footer", va), e.component("Navbar", Sa), e.component("RegisterForm", Xs), e.component("BaseDataTable", ja), e.component("BaseCard", se), e.component("BaseDialog", Na), e.component("UserCardProfile", Ga), e.component("BaseInfoField", eu), e.component("NavUserCard", iu), e.component("ScheduleManager", uu), e.component("BasePill", Bu), e.component("EventCalendar", ku), e.component("BaseDatePicker", Be), e.component("BaseDateSelector", Pu), e.component("BaseGroupedItem", Wt), e.component("GroupedList", Fu), e.component("NavbarMobile", Gu), e.component("ForgotPasswordForm", Lu), console.log("UI Library: PrimeVue y componentes locales registrados");
  }
};
export {
  U as BaseButton,
  se as BaseCard,
  ja as BaseDataTable,
  Be as BaseDatePicker,
  Pu as BaseDateSelector,
  Na as BaseDialog,
  Wt as BaseGroupedItem,
  eu as BaseInfoField,
  W as BaseInput,
  oe as BasePassword,
  Bu as BasePill,
  ku as EventCalendar,
  va as Footer,
  Lu as ForgotPasswordForm,
  Fu as GroupedList,
  ta as Header,
  sa as HeaderM,
  Zn as LoginForm,
  iu as NavUserCard,
  Sa as Navbar,
  Gu as NavbarMobile,
  Xs as RegisterForm,
  yl as ResetPasswordForm,
  uu as ScheduleManager,
  Ga as UserCardProfile,
  _l as default
};
