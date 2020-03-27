document.addEventListener('DOMContentLoaded', function(event) {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark', 'Light');
    } else {
        setTheme('light', 'Dark');
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark', 'Light');
        console.log('setting dark theme...');
    } else {
        setTheme('light', 'Dark');
        console.log('setting light theme...');
    }
});

function toggleTheme(event) {
    event.preventDefault();

    if (document.body.className === 'dark') {
        setTheme('light', 'Dark');
    } else {
        setTheme('dark', 'Light');
    }

    console.log('setting theme...');
}

function setTheme(themeName, themeText) {
    document.body.className = themeName;
    document.getElementsByClassName('toggle-theme')[0].children[0].innerHTML = themeText;
    localStorage.setItem('theme', themeName);
}
