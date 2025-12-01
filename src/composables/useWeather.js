import {useWeatherStore} from '@/stores/weatherStore';
import {getTemperature} from '@/Helpers/getWeather';

export const useWeather = async () => {
  const temperature = await getTemperature();
  const weatherStore = useWeatherStore();
  weatherStore.temperature = temperature;
}

