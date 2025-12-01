<template>
  <div class="header">
      {{ receiveddMessage }}<Weather ></Weather>
  </div>
</template>

<script setup>
import Weather from './Weather.vue';
import { defineProps, ref, watch } from 'vue';

const props = defineProps(['message']);
const receiveddMessage = ref(props.message);

watch(() => props.message, (newValue) =>{
receiveddMessage.value = newValue;
});

</script>

<style scoped>
.header{
  display: flex;
  justify-content: center;
  align-items:  center;
  padding: 10px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: white;
}
.h3{
  margin: 0;
}


</style>
