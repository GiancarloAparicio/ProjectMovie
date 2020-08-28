const routes = [{
        path: '*',
        name: 'ruta404',
        meta: {
            public: true
        },
        component: () =>
            import('../views/Ruta404.vue'),
    },
    {
        path: '/',
        name: 'home',
        meta: {
            public: false
        },
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            public: true
        },
        component: () =>
            import('../views/Login.vue'),
    },
    {
        path: '/movie',
        name: 'movie',
        meta: {
            public: false
        },
        component: () =>
            import('../views/Movie.vue'),
    },
];

export default routes