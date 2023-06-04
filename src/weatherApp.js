class WeatherApp {
  #audioButtons;
  #$backgroundElement;
  #$volumeRootElement;

  constructor(options) {
    this.#$backgroundElement = options.$backgroundElement;
    this.#audioButtons = [];
    this.#$volumeRootElement = options.$volumeRootElement;

    options.audioButtons.forEach((option) => {
      this.#audioButtons.push({
        $DOMElement: option.$DOMElement,
        audio: new Audio(option.audioFile),
        bgClassName: option.bgClassName,
        isPlaying: false,
      });
    });

    this._initAudioButtonsClicks();
    this._initVolumeControl();
  }

  _removeAllBgButtonClasses() {
    console.log(
      this.#audioButtons.map((audioButton) => audioButton.bgClassName)
    );
    this.#$backgroundElement.classList.remove(
      ...this.#audioButtons.map((audioButton) => audioButton.bgClassName)
    );
  }

  _initAudioButtonsClicks() {
    this.#audioButtons.forEach((currentButton) => {
      currentButton.$DOMElement.addEventListener("click", () => {
        this._removeAllBgButtonClasses();
        this.#$backgroundElement.classList.add(currentButton.bgClassName);

        if (currentButton.isPlaying) {
          currentButton.$DOMElement.classList.add("paused");
          currentButton.audio.pause();
          currentButton.isPlaying = false;
        } else {
          currentButton.$DOMElement.classList.remove("paused");
          this.#audioButtons
            .filter((audioButton) => audioButton !== currentButton)
            .forEach((otherButton) => {
              otherButton.audio.pause();
              otherButton.isPlaying = false;
              otherButton.$DOMElement.classList.remove("paused");
            });

          currentButton.audio.play();
          currentButton.isPlaying = true;
        }
      });
      currentButton.audio.volume = 0.5;
    });
  }

  _changeAudiosVolume(newVolume) {
    this.#audioButtons.forEach(
      (currentButton) => (currentButton.audio.volume = newVolume)
    );
  }

  _initVolumeControl() {
    const $volumeElement = this.#$volumeRootElement.querySelector(".volume");
    const $volumeFilled = this.#$volumeRootElement.querySelector(
      ".volume__filled-part"
    );
    const $thumbElement =
      this.#$volumeRootElement.querySelector(".volume__thumb");
    const $volumeValueElement =
      this.#$volumeRootElement.querySelector(".volume__value");

    $volumeValueElement.innerText = "50 %";

    $volumeElement.onmouseenter = () => {
      $volumeValueElement.classList.remove("volume__value_hidden");
    };

    $volumeElement.onmouseleave = () => {
      $volumeValueElement.classList.add("volume__value_hidden");
    };

    $thumbElement.onmousedown = (event) => {
      event.preventDefault();

      let shiftX = event.clientX - $thumbElement.getBoundingClientRect().left;

      const onMouseMove = (event) => {
        let newLeft =
          event.clientX - shiftX - $volumeElement.getBoundingClientRect().left;
        if (newLeft < 0) {
          newLeft = 0;
        }

        let rightEdge = $volumeElement.offsetWidth - $thumbElement.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        $thumbElement.style.left = newLeft + "px";
        $volumeFilled.style.right =
          $volumeElement.offsetWidth -
          $thumbElement.offsetWidth -
          newLeft +
          "px";

        const volumeValueRatio =
          newLeft / ($volumeElement.offsetWidth - $thumbElement.offsetWidth);

        this._changeAudiosVolume(volumeValueRatio);

        $volumeValueElement.innerText =
          (100 * volumeValueRatio).toFixed(0) + " %";
      };

      const onMouseUp = () => {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    $thumbElement.ondragstart = () => {
      return false;
    };
  }
}

export default WeatherApp;
