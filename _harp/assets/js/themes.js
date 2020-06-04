function setTheme(themeName) {
    document.body.className = themeName;
}

/* match system preferences if set otherwise schedule it */
function automateColorScheme() {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
    const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches
    const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && setTheme('dark'))
    window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && setTheme('light'))

    if(isDarkMode) setTheme('dark');
    if(isLightMode) setTheme('light');
    if(isNotSpecified || hasNoSupport) {
        console.log('Scheduling dark mode during the night time....')
        now = new Date();
        hour = now.getHours();
        if (hour < 5 || hour >= 20) { // 8 PM - 5 AM
            setTheme('dark');
        }
    }
}

document.addEventListener('DOMContentLoaded', automateColorScheme());
feather.replace()