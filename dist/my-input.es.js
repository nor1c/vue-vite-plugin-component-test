import { openBlock as n, createElementBlock as p } from "vue";
const o = ["type", "placeholder"], a = {
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
  setup(t) {
    return (e, c) => (n(), p("input", {
      type: t.type,
      placeholder: e.placeholder
    }, null, 8, o));
  }
}, l = {
  install: (t) => {
    t.component("my-input", a);
  }
}, s = {
  install: (t) => {
    var e;
    (e = l.install) == null || e.call(l, t);
  }
};
export {
  a as MyInput,
  l as MyInputPlugin,
  s as default
};
