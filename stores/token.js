export const useTokenStore = defineStore('token', {
    state: () => (
          { token: null,
             loggedIn: false 
            }),

    getters: {
      doubleCount: (state) => state.count * 2,
    },
    
    actions: {
      setToken(token) {
        this.token = token;
        this.loggedIn = true;
      },
    },
  })