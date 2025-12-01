<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Name: {{ storeRegister.name }}</h3>
    <h3>Email: {{ storeRegister.email }}</h3>
    <ul>
      <li><router-link to="/counter">Counter</router-link></li>
      <li><router-link to="/taskslist">Tasks List</router-link></li>
      <li><router-link to="/register">Registry</router-link></li>
      <li><router-link to="/calculate">Calculate</router-link></li>
    </ul>
  </div>
</template>

<script setup>

import { useRegistryStore } from '@/modules/records/stores/registryStore';

const storeRegister = useRegistryStore();


</script>

<style>

.sidebar{
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}

</style>
