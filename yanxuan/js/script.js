
var span = document.getElementById("place");
span.onclick = function () {

    var search = document.getElementsByClassName("search")[0];
    search.removeChild(span);
}
