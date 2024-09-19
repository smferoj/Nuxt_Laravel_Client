export default defineNuxtConfig({
  devtools: {enabled:false},
  modules: [
    '@nuxtjs/tailwindcss',
   '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',

  ], 
  imports:{
    dirs: ['./stores'],
  },
  
});

