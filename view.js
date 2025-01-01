const WeatherView = {
    updateWeather(data) {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        const weatherIcon = document.querySelector(".weather-icon");
        const weatherCondition = data.weather[0].main;

        const iconMap = {
            Clouds: "images/clouds.png",
            Clear: "images/clear.png",
            Rain: "images/rain.png",
            Drizzle: "images/drizzle.png",
            Snow: "images/snow.png",
            Mist: "images/mist.png"
        };

        if (iconMap[weatherCondition]) {
            weatherIcon.src = iconMap[weatherCondition];
            weatherIcon.style.display = "block";
        } else {
            weatherIcon.style.display = "none";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    },

    showError() {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    },
};

export default WeatherView;
