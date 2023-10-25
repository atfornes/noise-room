// load needed scripts

async function load(){

  if (! document.getElementById("hydra-audio-effects")) {

    // styles
    let style= document.createElement("link")
    style.setAttribute("rel", "stylesheet")
    style.setAttribute("href", "https://cdn.jsdelivr.net/gh/atfornes/noise-room@latest/index.css")
    style.setAttribute("crossorigin","anonymous")
    document.head.appendChild(style)

    // page

    let iframe = document.createElement("iframe")
    iframe.id="audioEffects"
    iframe.src="https://cdn.jsdelivr.net/gh/atfornes/noise-room@latest/index.html"
    iframe.allow="microphone"
    document.body.appendChild(iframe);

    let d = document.createElement("div");
    d.id ="hydra-audio-effects";
    document.body.appendChild(d);


    }

}

load()
