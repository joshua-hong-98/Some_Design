function myFunction() {
    var x = document.getElementById("navigation");
    if (x.className === "responsive_navbar") {
        x.className += " responsive";
    } else {
        x.className = "responsive_navbar";
    }
}
