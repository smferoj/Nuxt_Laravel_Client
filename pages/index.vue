
<script setup>
import { useCounterStore } from '~/stores/counter';

 const counter = useCounterStore(); 
</script>

<template>
  <div class="m-auto">
    <h1> This is Home Page </h1>
  <button class="bg-red-500"> {{ counter.count }}</button>
  <button @click="counter.increment">increment</button>
  </div>
</template>



<style>

</style>