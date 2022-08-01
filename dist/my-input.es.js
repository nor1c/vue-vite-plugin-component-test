import { openBlock as p, createElementBlock as n } from "vue";
const l = ["type", "placeholder"], o = {
  __name: "MyInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    plceholder: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, r) => (p(), n("input", {
      type: e.type,
      placeholder: t.placeholder
    }, null, 8, l));
  }
}, a = {
  install: (e, t) => {
    e.component("my-input", o);
  }
};
export {
  a as default
};
