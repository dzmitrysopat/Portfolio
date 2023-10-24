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
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        document.querySelector('.theme i').classList.add("uil-sun");
        document.querySelector('.theme i').classList.remove("uil-moon");
      }
      else {
        document.querySelector('html').classList.remove('dark');
        document.querySelector('.theme i').classList.add("uil-moon");
        document.querySelector('.theme i').classList.remove("uil-sun");
      }
    } catch (err) { }
  }
  
  addDarkClassToHTML();
  