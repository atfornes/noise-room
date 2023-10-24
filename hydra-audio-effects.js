// load needed scripts

async function load(){
  if (! document.getElementById("hydra-audio-effects")) {
    d = document.createElement("div");
    d.id ="hydra-audio-effects";
    window.document.body.appendChild(d);

    // copied from index.html
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/effect.js");
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/waveshaper.js");
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/jungle.js");
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/effects.js");
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/pingpong.js");
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/apollo.js");
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/cursorControls.js");

    // Visualizer stuff -->
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/visualizer/events.js");

    // WebGL stuff -->
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/visualizer/base.js");
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/visualizer/cameracontroller.js");

    // TODO(kbr): remove this dependency -->
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/visualizer/matrix4x4.js");

    // Visualizer GL library -->
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/visualizer/visualizer.js");
    await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/js/visualizer/shader.js");

    const resp = await fetch("https://cdn.jsdelivr.net/gh/atfornes/Audio-Input-Effects@latest/index.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
    }

}

load()
