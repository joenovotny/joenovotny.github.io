const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const smallScreen = window.matchMedia('(max-width: 760px)');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.hidden = smallScreen.matches && !open;
}
function adaptMenu() {
  menuButton.hidden = !smallScreen.matches;
  setMenu(false);
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || !smallScreen.matches) return;
  setMenu(false);
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && smallScreen.matches && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
smallScreen.addEventListener('change', adaptMenu);
adaptMenu();
document.querySelector('#year').textContent = new Date().getFullYear();
