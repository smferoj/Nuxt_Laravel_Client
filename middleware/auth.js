import { storeToRefs } from 'pinia';

export default defineNuxtRouteMiddleware((to, from) => {
  // Ensure the store is used inside the middleware context
  const tokenStore = useTokenStore();
  const { getStatus } = storeToRefs(tokenStore); // Extract store refs

  if (!getStatus.value) { // Check the value of getStatus (remember it's reactive)
    return navigateTo("/auth/login");
  }
});
