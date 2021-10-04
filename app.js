const celciusInput = document.querySelector("#celcius > input"); // get the input of #celcius
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNumber(num) {
    return Math.round(num * 100)/100;
}

function convertCelcius() {
    const celciusTemperature = parseFloat(celciusInput.value);
    fahrenheitInput.value = roundNumber((celciusTemperature * 9/5) + 32);
    kelvinInput.value = roundNumber(celciusTemperature + 273.15);
}

function convertFahrenheit() {
    const fahrenheitTemperature = parseFloat(fahrenheitInput.value);
    const celciusTemperature = (fahrenheitTemperature - 32) * 5/9;
    celciusInput.value = roundNumber(celciusTemperature);
    kelvinInput.value = roundNumber(celciusTemperature + 273.15);
}

function convertKelvin() {
    const kelvinTemperature = parseFloat(kelvinInput.value);
    const celciusTemperature = kelvinTemperature - 273.15;
    celciusInput.value = roundNumber(celciusTemperature);
    fahrenheitInput.value = roundNumber(celciusTemperature * 9/5 + 32);

}

celciusInput.addEventListener("input", convertCelcius);

fahrenheitInput.addEventListener("input", convertFahrenheit);

kelvinInput.addEventListener("input", convertKelvin);