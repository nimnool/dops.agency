import axios from "axios";
import store from "@/store/index.js";

const state = () => ({
    charts: [],
    error: '',
    loading: false
})

// getters
const getters = {
    getCharts: (state) => {
        return state.charts
    },

    getLoading: (state) => {
        return state.loading
    },

    getError: (state) => {
        return state.error
    }
}

// actions
const actions = {

    async fetchStatistic({ commit, state }) {
        try {
            commit('updateLoading', true)
            const response = await axios.get('http://localhost:1337/api/values');
            commit('updateChart')
            console.log(response.data);
            return response.data;
        } catch (error) {
            commit('updateError')
            return [];
        } finally {
            commit('updateLoading', false)
        }
    }
}

// mutations
const mutations = {
    updateLoading (state, loading) {
        state.loading = loading
    },

    updateError (state, error) {
        state.error = error
    },

    updateChart (state, chart) {
        state.chart = chart
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
