const education = document.querySelectorAll(".education");
const work = document.querySelectorAll(".work");

function show(){
    for (const worker of work){
        worker.classList.remove("hidden");
    }
    for (const school of education){
        school.classList.add("hidden");
    }
    document.getElementById("WorkBtn").classList.add("active");
    document.getElementById("EducationBtn").classList.remove("active");
}

function hide(){
    for (const worker of work){
        worker.classList.add("hidden");
    }
    for (const school of education){
        school.classList.remove("hidden");
    }

    document.getElementById("WorkBtn").classList.remove("active");
    document.getElementById("EducationBtn").classList.add("active");
}