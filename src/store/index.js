import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    statistics: []
  },
  mutations: {
    SET_STATISTICS(state, statistics) {
      state.statistics = statistics;
    }
  },
  actions: {
    async fetchStatistics({ commit }) {
      try {
        const response = await axios.get('http://localhost:1337/api/values');
        if (response.data && Array.isArray(response.data.data)) {
          const processedData = response.data.data.map(item => ({
            id: item.id,
            startHeight: '0',
            height: `${item.attributes.value}%`,
            text: item.attributes.text
          }));
          commit('SET_STATISTICS', processedData);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
});
