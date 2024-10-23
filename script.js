/* Funktion för API-hämtning, mall
function WeatherFunction() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=15.61287516898284&lon=58.411616852847736&appid=df4c0154d893ba9c3ae1e611a27a169b")
        .then((response) => response.json())  // Parse the JSON directly
        .then((weatherData) => {
            const weatherText = document.getElementById("weatherText"); // Assuming you have an element with this ID
            translationSwitchCase(weatherData.weather[0].description)})

} 
*/
function RaiderIOFunction(realm, charactername) {
    fetch(`https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${charactername}&fields=mythic_plus_scores_by_season%3Acurrent`)
    .then((response) => response.json())
    .then((RaiderData) => {
        const Score = document.getElementById(`${charactername}Score`);
        Score.innerHTML = RaiderData.mythic_plus_scores_by_season[0].scores.all;

    })
} 