import "./index.scss";
import summerSound from "./assets/sounds/summer.mp3";
import rainySound from "./assets/sounds/rain.mp3";
import winterSound from "./assets/sounds/winter.mp3";
import WeatherApp from "./weatherApp";

const options = {
  audioButtons: [
    {
      $DOMElement: document.querySelector(".card_type_sunny"),
      audioFile: summerSound,
      bgClassName: "sunny-bg",
    },
    {
      $DOMElement: document.querySelector(".card_type_rainy"),
      audioFile: rainySound,
      bgClassName: "rainy-bg",
    },
    {
      $DOMElement: document.querySelector(".card_type_winter"),
      audioFile: winterSound,
      bgClassName: "winter-bg",
    },
  ],
  $backgroundElement: document.querySelector(".background"),
  $volumeRootElement: document.querySelector(".volume-container"),
};

new WeatherApp(options);
