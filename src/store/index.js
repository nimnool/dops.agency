import { createStore } from 'vuex'
import cartStore from "@/store/modules/chartStore.js";

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    cartStore,
  }
})
