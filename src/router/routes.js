const ruta404 = {
    path: '*',
    name: 'ruta404',
    meta: {
        public: true
    },
    component: () =>
        import('../views/Ruta404.vue'),
}

const home = {
    path: '/',
    name: 'home',
    meta: {
        public: false
    },
    component: () => import('../views/Home.vue'),
}

const login = {
    path: '/login',
    name: 'login',
    meta: {
        public: true
    },
    component: () =>
        import('../views/Login.vue'),

}

const movie = {
    path: '/movie',
    name: 'movie',
    meta: {
        public: false
    },
    component: () =>
        import('../views/Movie.vue'),
}


export default [ruta404, home, login, movie]