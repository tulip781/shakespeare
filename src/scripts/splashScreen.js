const initSplash = () => {
  const splash = document.querySelector('.splash-screen');


  // If not visited page visited before
  if (sessionStorage.getItem('visited') == 'false') {
    console.log("splash remove")
    sessionStorage.setItem('visited', 'false');
    splash.classList.add('is-active');
    setTimeout( () => {
      splash.classList.remove('is-active');
    }, 3000);
  // If page visited
  } else {
    sessionStorage.setItem('visited', 'true');
    console.log('setting store')
  }
}

export { initSplash };
