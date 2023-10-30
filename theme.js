
document.querySelector('.theme').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    }
    else {
      localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
  });



  function addDarkClassToHTML() {
    const image = document.getElementById("logoImg");
    console.log(image.src);
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        document.querySelector('header nav i').classList.add("uil-sun");
        document.querySelector('header nav i').classList.remove("uil-moon");
        image.src = './img/logo-light.png';
      }
      else {
        document.querySelector('html').classList.remove('dark');
        document.querySelector('header nav i').classList.add("uil-moon");
        document.querySelector('header nav i').classList.remove("uil-sun");
        image.src = 'img/logo.png';
      }
    } catch (err) { }
  }
  
  addDarkClassToHTML();
  