const darkModeToggle = document.querySelector('.dark-mode');
const body = document.body; // It's generally better to toggle dark mode at the body level

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('is-dark');
    if (body.classList.contains('is-dark')) {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }
});

function setDarkMode(isDark) {
    const root = document.documentElement; // Accesses the root element of the page to change CSS variables
    if (isDark) {
        root.style.setProperty('--white-color', '#333');
        root.style.setProperty('--light-black', '#ffffff');
        root.style.setProperty('--text-color-light', '#ffffff');
        root.style.setProperty('--text-color-dark', '#e6e6e6');
        root.style.setProperty('--background-color', '#2d2d2e');
        
    } else {
      
        root.style.setProperty('--white-color', '#ffffff');
        root.style.setProperty('--light-black', '#515C6F');
        root.style.setProperty('--text-color-light', '#333');
        root.style.setProperty('--text-color-dark', '#515C6F');
        root.style.setProperty('--background-color', '#ffffff');
     
    }
}
