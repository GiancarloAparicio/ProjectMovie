import {
    CHANGE_REGISTER
} from "../types"
const RegisterForm = {
    namespaced: true,
    state: {
        inputEmail: null,
        inputPassword: null,
        errorEmail: null,
        errorPassword: null,
    },
    mutations: {
        [CHANGE_REGISTER]: (state, payload) => {

            state = {
                ...state,
                ...payload
            }
            console.log(RegisterForm)
        },
    },
    actions: {
        [CHANGE_REGISTER]: (store, payload) => {
            store.commit(CHANGE_REGISTER, payload);
        },

    },
};

export default RegisterForm;