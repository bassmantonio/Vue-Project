<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Name: {{ name }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
      <li><router-link to="/counter">Counter</router-link></li>
      <li><router-link to="/taskslist">Tasks List</router-link></li>
      <li><router-link to="/register">Registry</router-link></li>
    </ul>
  </div>
</template>

<script setup>

import { useRegistryStore } from '@/modules/records/stores/registryStore';
import {ref, watch} from 'vue';

const storeRegister = useRegistryStore();
const name = ref(storeRegister.name.value);
const email = ref(storeRegister.email.value);

watch(() => storeRegister.name, (newValue) => {
    name.value = newValue;
});

watch(() => storeRegister.email, (newValue) => {
    email.value = newValue;
});

</script>

<style>

.sidebar{
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}

</style>
