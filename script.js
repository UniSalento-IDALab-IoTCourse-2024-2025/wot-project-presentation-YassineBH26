const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const backToTop = document.querySelector('.back-to-top');
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-links a');
const revealItems = document.querySelectorAll('.reveal');
const roleTabs = document.querySelectorAll('.role-tab');
const rolePanels = document.querySelectorAll('.role-panel');
const placeholders = document.querySelectorAll('.image-placeholder');

function closeMenu() {
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('open');
}

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navLinks.classList.toggle('open', isOpen);
});

navItems.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navItems.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, {
  rootMargin: '-42% 0px -52% 0px',
  threshold: 0
});

sections.forEach((section) => sectionObserver.observe(section));

roleTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const selectedRole = tab.dataset.role;

    roleTabs.forEach((item) => item.classList.toggle('active', item === tab));
    rolePanels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === `${selectedRole}-panel`);
    });
  });
});

placeholders.forEach((placeholder) => {
  const img = placeholder.querySelector('img');

  if (!img) return;

  img.addEventListener('load', () => {
    placeholder.classList.add('has-image');
  });

  img.addEventListener('error', () => {
    placeholder.classList.remove('has-image');
  });

  if (img.complete && img.naturalWidth > 0) {
    placeholder.classList.add('has-image');
  }
});

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 600);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
