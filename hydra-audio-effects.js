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
    const resp2 = await fetch("./index.html");
    const html2 = await resp2.text();
    document.body.insertAdjacentHTML("beforeend", html2);


    let d = document.createElement("div");
    d.id ="hydra-audio-effects";
    window.document.body.appendChild(d);

    // copied from index.html
    await import("./js/effect.js");
    await import("./js/waveshaper.js");
    await import("./js/jungle.js");
    await import("./js/effects.js");
    await import("./js/pingpong.js");
    await import("./js/apollo.js");
    await import("./js/cursorControls.js");

    // Visualizer stuff -->
    await import("./js/visualizer/events.js");

    // WebGL stuff -->
    await import("./js/visualizer/base.js");
    await import("./js/visualizer/cameracontroller.js");

    // TODO(kbr): remove this dependency -->
    await import("./js/visualizer/matrix4x4.js");

    // Visualizer GL library -->
    await import("./js/visualizer/visualizer.js");
    await import("./js/visualizer/shader.js");


    }

}

load()
