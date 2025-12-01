<template>
  <div class="sidebar">
    <h2>Main Menu</h2>
    <ul>
      <li><router-link to="/counter">Counter</router-link></li>
      <li><router-link to="/taskslist">Tasks List</router-link></li>
      <li><router-link to="/register">Registry</router-link></li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style>

.sidebar{
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}

</style>
