 //Vuex
 import store from "../../store/index"

 /**
  * Antes de entrar a cualquier ruta si no esta registrado se redirreciona al Login
  */
 export const beforeEnter = (to, from, next) => {
     if (!store.state.User.existsUser && !to.matched.some(record => record.meta.public)) {
         next({
             name: 'login'
         })
     } else {
         next()
     }
 }

 /**
  *  Despues de estar en una ruta
  */
 export const afterEach = (to, from) => {
     console.log(from, to)
     // console.log(store.state.User.currentUser?.email)
 }