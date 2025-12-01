<template>
<h3>Temperatura actual: {{weatherSore.temperature }} </h3>

</template>

<script setup>
import { useWeather } from '@/composables/useWeather';
import { onMounted } from 'vue';
import {useWeatherStore} from '@/stores/weatherStore'

const weatherSore = useWeatherStore();

onMounted(() =>{
  useWeather();
})

</script>

<style scoped>

</style>
