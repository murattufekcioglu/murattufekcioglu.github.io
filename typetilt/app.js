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
    var orient = this.document.getElementById("orient");
    orient.innerText = event.target.screen.orientation.angle

    if (event.target.screen.orientation.angle == 0) {
        textinput.contentEditable = true
    } else if (event.target.screen.orientation.angle == 90) {
        textinput.contentEditable = false
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    var orient = this.document.getElementById("orient");
    orient.innerText = event.target.screen.orientation.angle
});