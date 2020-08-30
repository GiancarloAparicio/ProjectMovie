 //Vuex
 import store from "../store/index"

 export const beforeEnterLogin = (to, from, next) => {
     if (store.state.User.existsUser) {
         next({
             name: 'home'
         })
     } else {
         next()
     }
 }