if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service worker registration failed, error:', error);
    });
  }


window.onorientationchange = function (event) {
    console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
    var textinput = this.document.getElementById("textinput");
    var textoutput = this.document.getElementById("textoutput")
    if (event.target.screen.orientation.angle == 0) {
        textoutput.style.display = "none"
        textinput.style.display = "inline"
        document.activeElement.blur();
        textinput.focus()
    } else if (event.target.screen.orientation.angle == 90) {
        textoutput.textContent = textinput.textContent
        textoutput.style.display = "inline"
        document.activeElement.blur();
        textoutput.focus()
        textinput.style.display = "none"
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    var textinput = this.document.getElementById("textinput");
    console.log(document.activeElement);
    document.activeElement.blur();
    textinput.click(); console.log("clicked");
    textinput.focus(); console.log("focused");
    navigator.vibrate([50, 50, 20, 10, 20]);
});
