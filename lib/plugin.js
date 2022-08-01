import { MyInputPlugin } from "./Input"

const MyPlugin = {
  install: (app) => {
    MyInputPlugin.install?.(app)
  }
}

export default MyPlugin

export * from './Input'