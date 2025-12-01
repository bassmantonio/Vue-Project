import { defineStore } from "pinia";
import { ref } from "vue";

export const useWeatherStore = defineStore('wheather', () => {
    const temperature = ref(0);
    const setTemperature = (newTemp) => {
      temperature.value = newTemp;
    }
    return {temperature,setTemperature};
});
