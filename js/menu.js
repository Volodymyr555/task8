(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobmenu-btn-open'),
    closeMenuBtn: document.querySelector('.mobmenu-btn-close'),
    menu: document.querySelector('.mobmenu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();
