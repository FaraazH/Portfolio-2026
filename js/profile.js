//NAVIGATION
let active = 0;

for (let i = 0; i < document.links.length; i++) {
    if(document.links[i].href === document.URL) {
        active = i;
    }
}

let profileNav = document.querySelector('.profileNav');
document.links[active].className = profileNav.classList.add('contactFill');