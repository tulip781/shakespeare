const sideNavScript = () => {
  const burger = document.querySelector('.hamburger');
  const mobile = document.querySelector('.mobile-navbar')
  if (mobile.classList.display == 'none') {
    console.log("not showing")
    return;
  }
  burger.addEventListener('click', (event) =>{
    burger.classList.toggle('is-active');
  })
  console.log('showing');
}

export { sideNavScript };

