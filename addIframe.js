// load needed scripts

async function load(){

  if (! document.getElementById("hydra-audio-effects")) {

    // styles
    let style= document.createElement("link")
    style.setAttribute("rel", "stylesheet")
    style.setAttribute("href", "./index.css")
    style.setAttribute("crossorigin","anonymous")
    document.head.appendChild(style)

    // page

    let iframe = document.createElement("iframe")
    iframe.id="audioEffects"
    iframe.src="./index.html"
    iframe.allow="microphone"
    document.body.appendChild(iframe);

    let d = document.createElement("div");
    d.id ="hydra-audio-effects";
    document.body.appendChild(d);


    }

}

load()