// load needed scripts

async function load(){

  if (! document.getElementById("hydra-audio-effects")) {

    // page

    let iframe = document.createElement("iframe")
    iframe.id="audioEffects"
    iframe.src="https://atfornes.github.io/noise-room"
    iframe.allow="microphone"
    iframe.style="position: absolute; height: 100%; right: 0; top: 50px; z-index=10"
    document.body.appendChild(iframe);

    let d = document.createElement("div");
    d.id ="hydra-audio-effects";
    document.body.appendChild(d);

    }

}

load()
