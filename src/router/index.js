import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Resume from '../views/ResumeWork/Resume.vue'
import Projects from '../views/ResumeWork/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
