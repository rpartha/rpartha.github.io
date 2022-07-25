function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").classList.add('sun');
    document.getElementById("theme-toggle").classList.remove('moon');
    document.getElementById("toggle-icon").classList.add('gg-sun');
    document.getElementById("toggle-icon").classList.remove('gg-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").classList.add('moon');
    document.getElementById("theme-toggle").classList.remove('sun');
    document.getElementById("toggle-icon").classList.add('gg-moon');
    document.getElementById("toggle-icon").classList.remove('gg-sun');
  }
}

let theme = localStorage.getItem('theme');
theme = theme || (window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : 'light');
setTheme(theme);

const dmq = window.matchMedia('(prefers-color-scheme: dark)');
const lmq = window.matchMedia('(prefers-color-scheme: light)');

try {
  dmq.addEventListener('change', (e) => {
    if (e.matches) {
      setTheme('dark');
    }
  });

  lmq.addEventListener('change', (e) => {
    if (e.matches) {
      setTheme('light');
    }
  });
} catch (e1) {
  try {
    dmq.addListener((e) => {
      if (e.matches) {
        setTheme('dark');
      }
    });

    lmq.addListener((e) => {
      if (e.matches) {
        setTheme('light');
      }
    });
  } catch (e2) {
    console.error(e2);
  }
}

function modeSwitcher() {
  let currentMode = document.documentElement.getAttribute('data-theme');
  if (currentMode === "dark") {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}