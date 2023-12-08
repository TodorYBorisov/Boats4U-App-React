const fetchWeatherData = async (searchValue) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f60445cb40msh77944e9ff293c8ep188e37jsn85a4fdfafadc',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchValue}&days=3`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return {
            location: data.location.name,
            temp_c: Math.round(Number(data.current.temp_c)),
            wind_kph: Math.round(Number(data.current.wind_kph)),
            wind_dir: data.current.wind_dir,
            humidity: Math.round(Number(data.current.humidity)),
            uv: data.current.uv,
            maxtemp_c: Math.round(Number(data.forecast.forecastday[0].day.maxtemp_c)),
            mintemp_c: Math.round(Number(data.forecast.forecastday[0].day.mintemp_c)),
        };
    } catch (error) {
        throw new Error('Error fetching weather data');
    }
};

export { fetchWeatherData };