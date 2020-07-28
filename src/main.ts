import { createApp } from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
// import Frank from './components/Frank.vue'
// import Frank2 from './components/Frank2.vue'
import './index.scss'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
