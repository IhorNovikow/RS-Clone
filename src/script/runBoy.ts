import { transitionNextLvl } from './transitionNextLvl';
export function runBoy() {
    const gameStr = <HTMLElement>document.querySelector('.start-wrapper');
    const boy = <HTMLElement>document.getElementById('boy');
    const blockBoy = <HTMLElement>document.getElementById('wrapper-boy');
    gameStr.classList.add('displayNone');
    boy.classList.add('addAnimationBoy');
    blockBoy.classList.add('addAnimationBlock');
    const body = <HTMLElement>document.querySelector('.body');
    body.addEventListener('click', addDisabl, { capture: true });
}
function addDisabl(event: MouseEvent) {
    event.stopPropagation();
}
export function stopBoy() {
    const boy = <HTMLElement>document.getElementById('boy');
    const blockBoy = <HTMLElement>document.getElementById('wrapper-boy');
    boy.classList.remove('addAnimationBoy');
    blockBoy.classList.remove('addAnimationBlock');
}
export function stopBoyAfterAnimation(a: string, b: string, c: number) {
    window.setTimeout(transitionNextLvl, 10000, a, b, c);
    window.setTimeout(stopBoy, 10000);
    window.setTimeout(() => {
        const gameStr = <HTMLElement>document.querySelector('.start-wrapper');
        gameStr.classList.remove('displayNone');
        const body = <HTMLElement>document.querySelector('.body');
        body.removeEventListener('click', addDisabl, { capture: true });
    }, 11000);
}
