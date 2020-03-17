window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const result = document.getElementById("result");
    const main = document.getElementsByTagName("main")[0];
    const options = {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 0
    };
    const geolocation = navigator.geolocation;

    if (typeof geolocation === "undefined") {
        button.remove();
        const message = document.getElementById("message");
        message.removeAttribute("hidden");
        message.setAttribute("aria-hidden", "false");
    } else {
        console.log("Geolocation enabled.");
        button.addEventListener("click", () => {
            result.innerHTML = "";
            navigator.geolocation.getCurrentPosition(function (position) {
                result.innerHTML = "lat: " + position.coords.latitude + ", lon: " + position.coords.longitude;
            }, function (error) {
                const errorcodes = new Map();
                errorcodes.set(0, 'unknown error');
                errorcodes.set(1, 'permission denied');
                errorcodes.set(2, 'position unavailable/error from location provider');
                errorcodes.set(3, 'operation timeout');
                alert('Error occurred. Error code: ' + errorcodes.get(error.code));
            }, options);
        });

    }
});