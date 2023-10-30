import axios from 'axios';
import WeatherInfo from './WeatherInfo';

class WeatherViewModel {
    async getWeatherData(city) {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=fb47fa398ad290f6e16e655512d6e8d5`
            );
            return new WeatherInfo(response.data);
        } catch (error) {
            throw error;
        }
    }
}

export default WeatherViewModel;
