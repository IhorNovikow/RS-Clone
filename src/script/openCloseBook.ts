import { addCheckToTopik } from './addCheckToTopik';
function openCloseBook() {
    const iconBook = <HTMLElement>document.querySelector('.icon-book');

    iconBook.addEventListener('click', () => {
        toggleDisplayNone();
        addCheckToTopik();
    });
}
openCloseBook();
export function toggleDisplayNone() {
    const infoOpenBook = <HTMLElement>document.querySelector('.info-open-book');
    infoOpenBook.classList.toggle('displayNone');
}
