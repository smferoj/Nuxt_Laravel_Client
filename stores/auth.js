import { useTokenStore } from "./token";

export const useAuthStore = defineStore('auth', {
    state: () => ({ count: 0, name: 'Eduardo' }),

    getters: {
      doubleCount: (state) => state.count * 2,
    },
    
    actions: {
         async login(formData){
          const token = useTokenStore();
            try {
              const {data} = await $fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                body: { ...formData },
              });
              console.log("auth_store", data);
              token.setToken(data.token);
            } catch (error) {
              throw error
            }
          }
        }
  });