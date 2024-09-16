<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header/>

    <!-- Main Content Area -->
    <main class="flex-grow container mx-auto py-8 px-4">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p class="text-sm">&copy; 2024 My Website. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
 
</script>

<style scoped>
/* You can add additional custom styling here */
</style>
