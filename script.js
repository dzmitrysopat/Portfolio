var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

function show(){
    document.getElementById("educationBtn").classList.remove("active");
    document.getElementById("workBtn").classList.add("active");    
    document.getElementById("education").classList.remove("show");
    document.getElementById("education").classList.add("hide");
    document.getElementById("work").classList.add("show");
    document.getElementById("work").classList.remove("hide");
}

function hide(){
    document.getElementById("educationBtn").classList.add("active");
    document.getElementById("workBtn").classList.remove("active");    
    document.getElementById("education").classList.add("show");
    document.getElementById("education").classList.remove("hide");
    document.getElementById("work").classList.remove("show");
    document.getElementById("work").classList.add("hide"); 
}

