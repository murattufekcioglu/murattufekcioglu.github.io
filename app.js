
window.onorientationchange = function (event) {
    console.log("the orientation of the device is now " + event.target.screen.orientation.angle);

    if (event.target.screen.orientation.angle == 0) {

    } else if (event.target.screen.orientation.angle == 90) {

    }
};
