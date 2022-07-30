import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'sidebar',
  state: () => ({
    collapse: false,
  }),
  getters: {
    
  },
  actions: {
    handleCollapse() {
        this.collapse = !this.collapse;
    }
  }
})