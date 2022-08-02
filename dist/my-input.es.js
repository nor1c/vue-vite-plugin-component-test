import { openBlock as n, createElementBlock as u } from "vue";
const p = ["type", "placeholder", "value"], o = {
  __name: "MyInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: [
    "update:modelValue"
  ],
  setup(e) {
    return (l, t) => (n(), u("input", {
      type: e.type,
      placeholder: e.placeholder,
      value: e.modelValue,
      onInput: t[0] || (t[0] = (a) => l.$emit("update:modelValue", a.target.value))
    }, null, 40, p));
  }
}, r = {
  install: (e) => {
    e.component("MyInput", o);
  }
};
export {
  o as MyInput,
  r as default
};
