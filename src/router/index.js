import Vue from 'vue'
import Router from 'vue-router'
import Question from '@/pages/Question.vue'
import Feedback from '@/pages/Feedback.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Question',
      component: Question
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback,
    }
  ]
})