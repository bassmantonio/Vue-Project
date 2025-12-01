<template>

  <h3>Computed Properties </h3>
  <input type="text" v-model="value">
  {{ calculatedValue }}
  <SectionResult :result="calculatedValue"></SectionResult>
</template>

<script setup>
import { ref, computed } from 'vue';
import SectionResult from '../components/SectionResult.vue';

const value = ref('');
const calculatedValue = computed(() =>{
    return value.value *3;
});

</script>

<style scoped>

</style>
