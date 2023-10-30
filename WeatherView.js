import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';
import WeatherViewModel from './WeatherViewModel';

const WeatherView = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWeatherData = async () => {
        const viewModel = new WeatherViewModel();
        try {
            const data = await viewModel.getWeatherData('Kazan');
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        fetchWeatherData();
    }, []);

    const handleRetry = () => {
        setLoading(true);
        setError(null);
        setWeatherData(null);
        fetchWeatherData();
    };

    return (
        <View>
            {loading && <ActivityIndicator size="large" />}
            {error ? (
                <View>
                    <Text>Error: {error}</Text>
                    <Button title="Попробовать снова" onPress={handleRetry} />
                </View>
            ) : weatherData ? (
                <View>
                    <Text>City: {weatherData.name}</Text>
                    <Text>Temperature: {weatherData.main.temp}°C</Text>
                    <Text>Description: {weatherData.weather.description}</Text>
                    <Text>Wind: {weatherData.wind.speed}km/h</Text>
                    <Text>Pressure: {weatherData.main.pressure}mm</Text>
                    <Text>Humidity: {weatherData.main.humidity}%</Text>
                </View>
            ) : null}
        </View>
    );
};

export default WeatherView;
