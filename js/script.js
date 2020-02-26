var mesElements = document.querySelectorAll("li");
mesElements.forEach(function(element){
    element.addEventListener("mouseenter", function(event){
        element.style.background = "rgb(44, 62, 182)";
 }, false)

 element.addEventListener("mouseleave",function(event){
    element.style.background = "#1E88E5";
}, false)
});
