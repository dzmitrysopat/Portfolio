let articles = document.getElementsByClassName("anchor");
console.log(articles);
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    articles.forEach(art => {
        let top = window.scrollY;
        let offset = art.offsetTop - 150;
        let height = art.offsetHeight;
        let id = art.getAttribute('class');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active-link');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active-link');
            });
        };
    });
};

var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
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

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#383838 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



