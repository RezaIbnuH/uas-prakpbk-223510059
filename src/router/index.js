import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  {
    path: '/Tugas1',
    name: 'Tugas1',
    beforeEnter(){
        window.location.href = 'https://reza-project-cv.netlify.app/'
    }
  },
  {
    path: '/Tugas2',
    name: 'Tugas2',
    beforeEnter(){
        window.location.href = 'https://project2-tugas-reza.netlify.app/'
    }
  },
  {
    path: '/Tugas3',
    name: 'Tugas3',
    beforeEnter(){
        window.location.href = 'https://project-tugas3-reza.vercel.app/'
    }
  },
  {
    path: '/Tugas4',
    name: 'Tugas4',
    beforeEnter(){
        window.location.href = 'https://reza-tugas4-pbk-223510059-prakpbk.vercel.app/'
    }
  },
  {
    path: '/Tugas5',
    name: 'Tugas5',
    beforeEnter(){
        window.location.href = 'https://reza-22510059-project-prakpbk.netlify.app/'
    }
  },
  {
    path: '/Tugas6',
    name: 'Tugas6',
    beforeEnter(){
        window.location.href = 'https://reza-project6-prakpbk-223510059.vercel.app/'
    }
  },
  {
    path: '/Tugas7',
    name: 'Tugas7',
    beforeEnter(){
        window.location.href = 'https://reza-project7-prakpbk-223510059.netlify.app/'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
