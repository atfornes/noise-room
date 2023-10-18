document.addEventListener("DOMContentLoaded", function() {
  let mix = document.querySelector("#effectMix > input[type=range]")
  let _mouseX=0.5,_mouseY=0.5;
  document.onmousemove = (e) => {
    if (e.ctrlKey) {
      _mouseX = e.clientX/document.body.clientWidth;
      mix.value = _mouseX;
      mix.dispatchEvent(new Event('input'));
      _mouseY = e.clientY/document.body.clientHeight;
    }
  }
})
