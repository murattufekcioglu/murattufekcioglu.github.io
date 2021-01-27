
window.onorientationchange = function (event) {
    console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
    var textinput = this.document.getElementById("textinput");
    var textoutput = this.document.getElementById("textoutput")
    if (event.target.screen.orientation.angle == 0) {
        textoutput.style.display = "none"
        textinput.style.display = "inline"
    } else if (event.target.screen.orientation.angle == 90) {
        textoutput.textContent = textinput.textContent
        textoutput.style.display = "inline"
        textinput.style.display = "none"
    }
};
