const sideNavScript = () => {
  const burger = document.querySelector('.hamburger');
  const mobile = document.querySelector('.mobile-navbar');
  const sidebar = document.querySelector('.side-navbar-container');

  window.addEventListener('resize', (event) => {
    if (document.documentElement.clientWidth >= 768 ) {
      burger.classList.remove('is-active');
      sidebar.classList.remove('is-active');
    }
  });

  burger.addEventListener('click', (event) =>{
    burger.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
  });
}

export { sideNavScript };

