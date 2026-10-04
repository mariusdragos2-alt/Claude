// Shared site navigation: solid background on scroll, mobile menu, current page marker
(() => {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  const toggle = nav.querySelector('.nav-toggle');

  const page = location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('a.link').forEach(a => {
    const [file, hash] = a.getAttribute('href').split('#');
    if (!hash && file === page) a.setAttribute('aria-current', 'page');
  });

  const update = () => nav.classList.toggle('solid', scrollY > 60);
  addEventListener('scroll', update, { passive: true });
  update();

  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Închide meniul' : 'Deschide meniul');
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  nav.querySelectorAll('ul a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  matchMedia('(min-width: 761px)').addEventListener('change', e => { if (e.matches) setOpen(false); });
})();
