import WeatherStation from "./concrete_classes/WeatherStation";
import PhoneDisplay from "./concrete_classes/PhoneDisplay";
import WebDisplay from "./concrete_classes/WebDisplay";

let weatherStation = new WeatherStation();
let phoneDisplay = new PhoneDisplay(weatherStation);
let phoneDisplay2 = new PhoneDisplay(weatherStation);

let webDisplay = new WebDisplay(weatherStation);

weatherStation.add(phoneDisplay);
weatherStation.add(phoneDisplay2);

weatherStation.add(webDisplay);

console.log("CHECKING THE WEATHER...")
setTimeout(() => {
    weatherStation.notify();
}, 3000);

