import { openBlock as t, createElementBlock as n, createElementVNode as l, createTextVNode as o } from "vue";
const p = /* @__PURE__ */ o(" input plugin "), c = ["type", "placeholder"], a = {
  __name: "MyInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (r, i) => (t(), n("div", null, [
      p,
      l("input", {
        type: e.type,
        placeholder: e.placeholder
      }, null, 8, c)
    ]));
  }
}, d = {
  install: (e) => {
    e.component("my-input", a);
  }
};
export {
  d as default
};
