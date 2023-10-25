// load needed scripts

async function load(){

  if (! document.getElementById("hydra-audio-effects")) {

    // page

    let iframe = document.createElement("iframe")
    iframe.id="audioEffects"
    iframe.src="https://atfornes.github.io/noise-room"
    iframe.allow="microphone"
    document.body.appendChild(iframe);

    let d = document.createElement("div");
    d.id ="hydra-audio-effects";
    document.body.appendChild(d);

    // styles
    let style= document.createElement("link")
    style.setAttribute("rel", "stylesheet")
    style.setAttribute("href", "https://atfornes.github.io/noise-room/index.css")
    style.setAttribute("crossorigin","anonymous")
    document.head.appendChild(style)

    }

}

load()
