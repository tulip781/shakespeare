const initPageTransition = () => {
  let body = document.querySelector('body');
  let links = document.querySelectorAll('a');
  setTimeout(()=> {
    body.classList.add('fade-in');
  }, 200)
  if (links){
    links.forEach ((link) => {
      link.onclick = (e) => {
        e.preventDefault();
        setTimeout(()=> {
          if (body.classList.contains('fade-out')) {
            console.log('navigating...');
            if(!e.srcElement.parentElement.href) {
              window.location = e.srcElement.href;
            } else {
              window.location = e.srcElement.parentElement.href;
            }
          } else {
            console.log('whoops', e.srcElement.parentElement.href);
          }
        }, 1000);
        body.classList.add('fade-out');
      }
    });
  }
}

export { initPageTransition };




