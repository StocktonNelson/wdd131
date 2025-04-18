const themeSelector = document.querySelector("#mode-select")
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
let currentTheme = themeSelector.value;

// if the value is dark then:
// add the dark class to the body
if (currentTheme == "dark") {
    document.body.classList.add('dark')
    document.querySelector('footer img').src = 'img/byui-logo_white.webp';
}
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
else {
    document.body.classList.remove('dark')
    document.querySelector('footer img').src = 'img/byui-logo_blue.webp';
}
// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);