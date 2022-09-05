import { getUsers } from './topWiners';
const titleWrapper = <HTMLElement>document.querySelector('.title-wrapper');
titleWrapper.addEventListener('click', () => {
    const winnersWrapper = <HTMLElement>document.querySelector('.list-winers');
    const winnersWrapperAct = <HTMLElement>document.querySelector('.winners-wrapper');
    winnersWrapper.classList.toggle('move');
    winnersWrapperAct.classList.toggle('winners-wrapper-act');
    getUsers();
});
