import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Register from '@/components/Register'
import Login from '@/components/Login'
import ProfileSettings from '@/components/ProfileSettings'
import Profile from '@/components/Profile'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: MainPage
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile-settings',
      name: 'profile-settings',
      component: ProfileSettings
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    }
  ]
})
