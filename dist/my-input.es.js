import { openBlock as t, createElementBlock as l } from "vue";
const n = ["type", "placeholder"], p = {
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
    return (o, c) => (t(), l("input", {
      type: e.type,
      placeholder: e.placeholder
    }, null, 8, n));
  }
}, a = {
  install: (e) => {
    e.component("my-input", p);
  }
};
export {
  a as default
};
