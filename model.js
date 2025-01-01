const WeatherModel = {
    apiKey : "6ddb7fb8cfff232e0dbf845382725c59",
    apiUrl : "https://api.openweathermap.org/data/2.5/weather?units=metric&q=",

    async fetchWeather(city){
        const response = await fetch(`${this.apiUrl}${city}&appid=${this.apiKey}`);
        
        if (!response.ok){
            return { error: true };  
        }

        const data = await response.json();
        return { error: false, data };  
    }
};

export default WeatherModel;
