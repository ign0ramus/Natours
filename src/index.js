import './icon-font.css';
import './scss/main.scss';

function navListClickHandler(e) {
    let target = e.target;
    if (this.contains(target)) {
        document.querySelector('.navigation__checkbox').checked = false;
    }
}

document.querySelector('.navigation__list').addEventListener('click', navListClickHandler);