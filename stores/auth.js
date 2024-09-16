export const useAuthStore = defineStore('auth', {
    state: () => ({ count: 0, name: 'Eduardo' }),

    getters: {
      doubleCount: (state) => state.count * 2,
    },
    
    actions: {
         async login(formData){
            try {
              const {data} = await $fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                body: { ...formData },
              });
              console.log("auth_store", data);
            } catch (error) {
              throw error
            }
          }
        }
  });