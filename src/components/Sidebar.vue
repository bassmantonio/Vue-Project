<template>
  <div class="sidebar">
    <h2>menú principal</h2>
    <ul>
      <li><router-link to="/counter">Counter</router-link></li>
      <li><router-link to="/taskslist">Task List</router-link></li>
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
