(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var o=e.g.document;if(!t&&o&&(o.currentScript&&(t=o.currentScript.src),!t)){var n=o.getElementsByTagName("script");if(n.length)for(var s=n.length-1;s>-1&&!t;)t=n[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"ba837e3ecc073286cbc4b9d797bbd762.mp3",o=e.p+"b7ee8a84e7ecf1112c277ea4ef4a91eb.mp3",n=e.p+"24f5c09b90641ef35477fed9b0f10650.mp3";const s=class{#e;#t;#o;constructor(e){this.#t=e.$backgroundElement,this.#e=[],this.#o=e.$volumeRootElement,e.audioButtons.forEach((e=>{this.#e.push({$DOMElement:e.$DOMElement,audio:new Audio(e.audioFile),bgClassName:e.bgClassName,isPlaying:!1})})),this._initAudioButtonsClicks(),this._initVolumeControl()}_removeAllBgButtonClasses(){console.log(this.#e.map((e=>e.bgClassName))),this.#t.classList.remove(...this.#e.map((e=>e.bgClassName)))}_initAudioButtonsClicks(){this.#e.forEach((e=>{e.$DOMElement.addEventListener("click",(()=>{this._removeAllBgButtonClasses(),this.#t.classList.add(e.bgClassName),e.isPlaying?(e.$DOMElement.classList.add("paused"),e.audio.pause(),e.isPlaying=!1):(e.$DOMElement.classList.remove("paused"),this.#e.filter((t=>t!==e)).forEach((e=>{e.audio.pause(),e.isPlaying=!1,e.$DOMElement.classList.remove("paused")})),e.audio.play(),e.isPlaying=!0)})),e.audio.volume=.5}))}_changeAudiosVolume(e){this.#e.forEach((t=>t.audio.volume=e))}_initVolumeControl(){const e=this.#o.querySelector(".volume"),t=this.#o.querySelector(".volume__filled-part"),o=this.#o.querySelector(".volume__thumb"),n=this.#o.querySelector(".volume__value");n.innerText="50 %",e.onmouseenter=()=>{n.classList.remove("volume__value_hidden")},e.onmouseleave=()=>{n.classList.add("volume__value_hidden")},o.onmousedown=s=>{s.preventDefault();let i=s.clientX-o.getBoundingClientRect().left;const l=s=>{let l=s.clientX-i-e.getBoundingClientRect().left;l<0&&(l=0);let u=e.offsetWidth-o.offsetWidth;l>u&&(l=u),o.style.left=l+"px",t.style.right=e.offsetWidth-o.offsetWidth-l+"px";const a=l/(e.offsetWidth-o.offsetWidth);this._changeAudiosVolume(a),n.innerText=(100*a).toFixed(0)+" %"},u=()=>{document.removeEventListener("mouseup",u),document.removeEventListener("mousemove",l)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",u)},o.ondragstart=()=>!1}};new s({audioButtons:[{$DOMElement:document.querySelector(".card_type_sunny"),audioFile:t,bgClassName:"sunny-bg"},{$DOMElement:document.querySelector(".card_type_rainy"),audioFile:o,bgClassName:"rainy-bg"},{$DOMElement:document.querySelector(".card_type_winter"),audioFile:n,bgClassName:"winter-bg"}],$backgroundElement:document.querySelector(".background"),$volumeRootElement:document.querySelector(".volume-container")})})();
//# sourceMappingURL=main.3becfc636ccbfc209d18.js.map