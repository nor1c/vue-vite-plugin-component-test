import MyInput from './MyInput.vue'

const MyInputPlugin = {
  install: (app, options) => {
    app.component('my-input', MyInput)
  }
}

export default MyInputPlugin
export { MyInput }