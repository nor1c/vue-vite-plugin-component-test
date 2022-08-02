import { App } from 'vue'
import MyInput from './MyInput.vue'

export default {
  install: (app: App) => {
    app.component('MyInput', MyInput)
  }
}

export { default as MyInput } from './MyInput.vue'