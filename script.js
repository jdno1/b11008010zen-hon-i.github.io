
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('keydown', function(event) {
  switch(event.key.toLowerCase()) {
    case 'a':
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
      break;
    case 'p':
      document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
      break;
    case 'c':
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
      break;
  }
});
