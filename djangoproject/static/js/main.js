const navLinks = document.querySelectorAll('nav a');
console.log('above done');
console.log(navLinks.values());
navLinks.forEach(link => {
    console.log('below 1 done')
    link.addEventListener('click', () => {
      navLinks.forEach(otherLink => {
        otherLink.classList.remove('active'); 
      });
      link.classList.add('active'); 
    });
    console.log('done');
  });
