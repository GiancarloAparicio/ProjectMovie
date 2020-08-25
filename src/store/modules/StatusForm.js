import {
    CHANGE_REGISTER,
    CHANGE_LOGIN
} from "../types"
const StatusForm = {
    namespaced: true,
    state: {
        register: {
            inputEmail: null,
            inputPassword: null,
            errorEmail: null,
            errorPassword: null,
        },
        login: {
            inputEmail: null,
            inputPassword: null,
            errorEmail: null,
            errorPassword: null,
        }

    },
    mutations: {
        [CHANGE_REGISTER]: (state, payload) => {

            state.register = {
                ...state.register,
                ...payload
            }
        },
        [CHANGE_LOGIN]: (state, payload) => {

            state.login = {
                ...state.login,
                ...payload
            }
        },

    },
    actions: {
        [CHANGE_REGISTER]: (store, payload) => {
            store.commit(CHANGE_REGISTER, payload);
        },
        [CHANGE_LOGIN]: (store, payload) => {
            store.commit(CHANGE_LOGIN, payload);
        },
    },
};

export default StatusForm;