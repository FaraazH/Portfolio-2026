//NAVIGATION
let active = 0;

for (let i = 0; i < document.links.length; i++) {
    if(document.links[i].href === document.URL) {
        active = i;
    }
}

let homeNav = document.querySelector('.homeNav');
document.links[active].className = homeNav.classList.add('contactFill');

window.addEventListener("homeNav", homeNav.classList.add('contactFill'));