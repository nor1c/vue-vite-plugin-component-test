import MyInput from './MyInput.vue'

export default {
  install: (app, options) => {
    app.component('my-input', MyInput)
  }
}