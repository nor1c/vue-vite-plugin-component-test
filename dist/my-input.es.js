import { openBlock as e, createElementBlock as l } from "vue";
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
  setup(t) {
    return (o, a) => (e(), l("input", {
      type: t.type,
      placeholder: t.placeholder
    }, null, 8, n));
  }
}, r = {
  install: (t) => {
    t.component("MyInput", p);
  }
};
export {
  p as MyInput,
  r as default
};
