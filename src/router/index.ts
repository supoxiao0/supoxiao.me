import { createWebHashHistory, createRouter } from "vue-router"
import Home from '../views/home.vue'
import Articles from '../views/articles.vue'
import Projects from '../views/projects.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/articles',
      component: Articles
    },
    {
      path: '/projects',
      component: Projects
    }
  ]
})

export default router