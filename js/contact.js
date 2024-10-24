//NAVIGATION
let active = 0;

for (let i = 0; i < document.links.length; i++) {
    if(document.links[i].href === document.URL) {
        active = i;
    }
}

let contactNav = document.querySelector('.contactNav');
document.links[active].className = contactNav.classList.add('contactFill');
