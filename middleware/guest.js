
import { storeToRefs } from 'pinia';

export default defineNuxtRouteMiddleware((to, from) => {
  const tokenStore = useTokenStore();
  const { getStatus } = storeToRefs(tokenStore); // Extract store refs

  if (getStatus.value) { // Access the reactive value
    return navigateTo('/dashboard');
  }
});
