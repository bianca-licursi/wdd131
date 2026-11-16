// Dynamic footer: current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static weather values (must match the values shown in the Weather section)
const temperature = 8; // °C
const windSpeed = 15;  // km/h

// Calculates wind chill in a single line (metric: °C and km/h)
const calculateWindChill = (temp, speed) =>
    13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);

// Only call the function if the conditions are met
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
}

// Display the result
document.getElementById("windchill").textContent = windChill;