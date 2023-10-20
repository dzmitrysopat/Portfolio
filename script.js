function show(){
    document.getElementById("education").classList.remove("show");
    document.getElementById("education").classList.add("hide");
    document.getElementById("work").classList.add("show");
    document.getElementById("work").classList.remove("hide");
    
}

function hide(){
    document.getElementById("education").classList.add("show");
    document.getElementById("education").classList.remove("hide");
    document.getElementById("work").classList.remove("show");
    document.getElementById("work").classList.add("hide");
}
