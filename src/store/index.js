import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        cart:[],
        parts: null,
    },
    mutations:{
        addRobotToCart(state, robot){
            state.cart.push(robot);
        },
    },
    getters:{
        
    },
});