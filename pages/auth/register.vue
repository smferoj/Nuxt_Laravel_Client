<script setup>
const auth = useAuthStore();

definePageMeta({
  middleware:["guest"],
});
const form = reactive({
  name: null,
  email: null,
  password: null,
  password_confirmation: null,
});

const errors = ref([]);
const handleSubmit = async ()=>{
         try {
             await auth.register(form);
            } catch (error) {
             errors.value = error.data.errors;
            }
};
</script>

<template>
 
  <form @submit.prevent="handleSubmit" class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800">
    <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Register</h2>
  <!-- Name -->
       <div class="mb-2">
      <FormLabel for="name">Your Name</FormLabel>
      <FormInputText type="text" id="name" placeholder="Wrtie your Name" v-model="form.name" />
      <span v-if="errors.name" class="text-red-500">{{ errors.name[0]}}</span>
    </div>
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
<!-- Password Confirm -->
<div class="mb-2">
      <FormLabel for="password_confirmation">Confirm password</FormLabel>
      <FormInputText type="password" id="password_confirmation" placeholder="Confirm password_confirmation" v-model="form.password_confirmation" />
      <span v-if="errors.password_confirmation" class="text-red-500">{{ errors.password_confirmation[0]}}</span>
    </div>
        <ButtonSubmitButton>Register</ButtonSubmitButton>
  
  </form>
 
</template>

<style scoped>

</style>
