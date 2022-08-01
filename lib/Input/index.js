import MyInput from './MyInput.vue'

export const MyInputPlugin = {
  install: (app) => {
    app.component('my-input', MyInput)
  }
}

export { MyInput }