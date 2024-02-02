const themeSwitch = document.getElementById('theme-switcher');
const mainpage = document.getElementsByTagName('main')[0];

themeSwitch.addEventListener('change', function () {
    if (themeSwitch.checked) {
        mainpage.classList.add('light-mode');
    } else {
        mainpage.classList.remove('light-mode');
    }
});