const initSplash = () => {
  const splash = document.querySelector('.splash-screen');
  const wordone = document.querySelector('.wordone');
  const wordtwo = document.querySelector('.wordtwo');
  // If not visited page visited before
  if (!sessionStorage.getItem('visited')) {
    console.log("first time visiting the page");
    sessionStorage.setItem('visited', 'false');
    splash.classList.add('is-active');
    setTimeout( () => {
      wordone.classList.add('is-active');
    }, 100);
    setTimeout( () => {
      wordtwo.classList.add('is-active');
    }, 1000);
    setTimeout( () => {
      splash.classList.remove('is-active');
    }, 2500);
  // If page visited
  } else if (sessionStorage.getItem('visited')) {
    splash.style.display = 'none';
  }
}

export { initSplash };
