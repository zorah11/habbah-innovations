const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  const setMenuOpen = open => {
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.firstChild.textContent = open ? 'Close ' : 'Menu ';
    document.body.classList.toggle('menu-open', open);
  };
  menuButton.addEventListener('click', () => setMenuOpen(!navigation.classList.contains('is-open')));
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (innerWidth > 820 && navigation.classList.contains('is-open')) setMenuOpen(false);
  });
}

document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});
