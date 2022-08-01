import MyInput from './components/'

const MyInputPlugin = {
  install: (app, options) => {
    app.component('my-input', MyInput)
  }
}

export default MyInputPlugin