import WeatherModel from "./model.js";
import WeatherView from "./view.js";

const WeatherController = {
    init() {
     
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");

        //event listener to the search button
        searchBtn.addEventListener("click", () => {
            const city = searchBox.value.trim();
            if (city) {
                this.getWeather(city);
            }
        });

        
        searchBox.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const city = searchBox.value.trim();
                if (city) {
                    this.getWeather(city);
                }
            }
        });
    },

    async getWeather(city) {
        try {
            // Fetch weather data from the model
            const weatherData = await WeatherModel.fetchWeather(city);

           
            if (!weatherData.error) {
                WeatherView.updateWeather(weatherData.data);
            } else {
                WeatherView.showError();
            }
        } catch (error) {
            // Log the error and show the error message
            console.error("Error fetching weather data:", error);
            WeatherView.showError();
        }
    }
};

export default WeatherController;
