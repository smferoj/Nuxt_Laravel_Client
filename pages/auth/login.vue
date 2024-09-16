<script setup>
import { ref, reactive } from "vue";

const auth = useAuthStore();
const form = reactive({
  email: '',
  password: '',
});

const errors = ref([]);
const handleSubmit = async ()=>{
         try {
             await auth.login(form);
            } catch (error) {
             errors.value = error.data.errors;
            }
}

</script>

<template>
  <form @submit.prevent="handleSubmit" class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800">
    <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Login</h2>
    
    <!-- Email input -->
    <div class="mb-2">
      <FormLabel for="email">Your Email</FormLabel>
      <FormInputText type="email" id="email" placeholder="email address" v-model="form.email" />
      <span v-if="errors.email" class="text-red-500">{{ errors.email[0]}}</span>
    </div>

    <!-- Password input -->
    <div class="mb-2">
      <FormLabel for="password">Your Password</FormLabel>
      <FormInputText type="password" id="password" placeholder="write password" v-model="form.password" />
      <span v-if="errors.password" class="text-red-500">{{ errors.password[0]}}</span>
    </div>

    <!-- Remember me checkbox -->
    <!-- <div class="flex items-center mb-6">
      <input id="remember" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-50 rounded border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800">
      <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div> -->

    <ButtonSubmitButton>Login</ButtonSubmitButton>
  </form>
</template>

<style scoped>

</style>
