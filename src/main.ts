import App from './App.svelte'
import 'carbon-components-svelte/css/g90.css'
import './app.css'

const app = new App({
  target: document.getElementById('app'),
  // hydrate: true
})

export default app
