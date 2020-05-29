/* System preference should be the default */

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark', 'Auto');
} else {
    setTheme('light', 'Auto');
}

function setTheme(themeName, themeText) {
    document.body.className = themeName;
    document.getElementsByClassName('toggle-theme')[0].children[0].innerHTML = themeText;
    localStorage.setItem('theme', themeName);
}