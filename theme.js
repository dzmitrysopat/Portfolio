
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
    const figma = document.getElementById("figma");
    const git = document.getElementById("git");

    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        document.querySelector('header nav i').classList.add("uil-sun");
        document.querySelector('header nav i').classList.remove("uil-moon");
        image.src = './img/logo-light.png';
        figma.src = 'https://skillicons.dev/icons?i=figma&theme=light';
        git.src = 'https://skillicons.dev/icons?i=github&theme=light'
      }
      else {
        document.querySelector('html').classList.remove('dark');
        document.querySelector('header nav i').classList.add("uil-moon");
        document.querySelector('header nav i').classList.remove("uil-sun");
        figma.src = 'https://skillicons.dev/icons?i=figma';
        git.src = 'https://skillicons.dev/icons?i=github'
        image.src = 'img/logo.png';
      }
    } catch (err) { }
  }
  
  addDarkClassToHTML();
  