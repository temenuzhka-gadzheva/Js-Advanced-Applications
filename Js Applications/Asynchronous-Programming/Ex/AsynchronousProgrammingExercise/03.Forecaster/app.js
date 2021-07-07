function attachEvents() {
    let weatherButtonElement = document.querySelector('#submit');

    weatherButtonElement.addEventListener('click', weatherHandler);

    let locationElement = document.querySelector('#location');


    let conditions = {
        'Sunny': () => '☀',
        'Partly sunny': () => '⛅',
        'Overcast': () => '☁',
        'Rain': () => '☂',
        'Degrees': () => '°'
    }

    function weatherHandler() {

        let forecastDiv = document.querySelector('#forecast');
        forecastDiv.style.display = 'block';
        let currentForecastElement = document.querySelector('#current');
        Array.from(currentForecastElement.querySelectorAll('div')).forEach((el, i) => {
            i !== 0 ? el.remove() : el;
        });
        let upcomingForecastElement = document.querySelector('#upcoming');

        Array.from(upcomingForecastElement.querySelectorAll('div')).forEach((el, i) => {
            i !== 0 ? el.remove() : el;
        });

        let locationName = locationElement.value;
        let url = `http://localhost:3030/jsonstore/forecaster/locations`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let location = data.find(l => l.name === locationName);

                let todayUrl = `http://localhost:3030/jsonstore/forecaster/today/${location.code}`;

                return fetch(todayUrl)
                    .then(response => response.json())
                    .then(currentWeather => ({ code: location.code, currentWeather }))
            })
            .then(({ code, currentWeather }) => {

                let report = createCurrentWeatherElements(currentWeather);



                currentForecastElement.appendChild(report);

                let newUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

                return fetch(newUrl)

            })
            .then(response => response.json())
            .then(upCommingReport => {
                let upcomingForecast = createUpComingWeatherElements(upCommingReport);


                upcomingForecastElement.appendChild(upcomingForecast);
            })
            .catch(error => {
                let errorDivElement = document.createElement('div');
                errorDivElement.setAttribute('class', 'label');
                errorDivElement.textContent = 'Error';
                currentForecastElement.appendChild(errorDivElement);
            });

        function createUpComingWeatherElements(weatherReport) {

            let forecastInfoDivElement = document.createElement('div');
            forecastInfoDivElement.setAttribute('class', 'forecast-info');

            let firstDay = createDayReport(weatherReport.forecast[0]);
            let secondDay = createDayReport(weatherReport.forecast[1]);
            let thirdDay = createDayReport(weatherReport.forecast[2]);

            forecastInfoDivElement.appendChild(firstDay);
            forecastInfoDivElement.appendChild(secondDay);
            forecastInfoDivElement.appendChild(thirdDay);

            return forecastInfoDivElement;
        }

        function createDayReport(forecast) {


            let upcomingSpanElement = document.createElement('span');
            upcomingSpanElement.setAttribute('class', 'upcoming');

            let symbolSpanElement = document.createElement('span');
            symbolSpanElement.setAttribute('class', 'symbol')
            symbolSpanElement.textContent = conditions[forecast.condition]();

            let temperatureSpanElement = document.createElement('span');
            temperatureSpanElement.setAttribute('class', 'forecast-data');
            temperatureSpanElement.textContent = `${forecast.low}°/${forecast.high}°`;

            let weatherSpanElement = document.createElement('span');
            weatherSpanElement.setAttribute('class', 'forecast-data');
            weatherSpanElement.textContent = forecast.condition;

            upcomingSpanElement.appendChild(symbolSpanElement);
            upcomingSpanElement.appendChild(temperatureSpanElement);
            upcomingSpanElement.appendChild(weatherSpanElement);

            return upcomingSpanElement;
        }

        function createCurrentWeatherElements(weatherReport) {

            let forecastDivElement = document.createElement('div');
            forecastDivElement.setAttribute('class', 'forecasts');

            let conditionSymbolSpanElement = document.createElement('span');
            conditionSymbolSpanElement.setAttribute('class', 'condition symbol')

            conditionSymbolSpanElement.textContent = conditions[weatherReport.forecast.condition]();

            let conditionSpanElement = document.createElement('span');
            conditionSpanElement.setAttribute('class', 'condition');

            let nameSpanElement = document.createElement('span');
            nameSpanElement.setAttribute('class', 'forecast-data');
            nameSpanElement.textContent = weatherReport.name;

            let temperatureSpanElement = document.createElement('span');
            temperatureSpanElement.setAttribute('class', 'forecast-data');
            temperatureSpanElement.textContent = `${weatherReport.forecast.low}°/${weatherReport.forecast.high}°`;

            let weatherSpanElement = document.createElement('span');
            weatherSpanElement.setAttribute('class', 'forecast-data');
            weatherSpanElement.textContent = weatherReport.forecast.condition;

            conditionSpanElement.appendChild(nameSpanElement);
            conditionSpanElement.appendChild(temperatureSpanElement);
            conditionSpanElement.appendChild(weatherSpanElement);

            forecastDivElement.appendChild(conditionSymbolSpanElement);
            forecastDivElement.appendChild(conditionSpanElement);

            return forecastDivElement;
        }

    }
}

attachEvents();