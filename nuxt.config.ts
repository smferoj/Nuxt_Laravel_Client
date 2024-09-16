export default defineNuxtConfig({
  devtools: {enabled:false},
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ], 
  imports:{
    dirs: ['./stores'],
  },
  
});

