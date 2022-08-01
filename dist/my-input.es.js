import { openBlock as t, createElementBlock as n } from "vue";
const l = ["type", "placeholder"], p = {
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
    return (o, c) => (t(), n("input", {
      type: e.type,
      placeholder: e.placeholder
    }, null, 8, l));
  }
}, r = {
  install: (e) => {
    e.component("my-input", p);
  }
};
export {
  r as default
};
