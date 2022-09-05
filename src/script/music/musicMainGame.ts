import { count, playAudio } from './backgroundMusic';

const buttonStarGame = <HTMLElement>document.querySelector('.button-star-game');

buttonStarGame.addEventListener('click', () => {
    if (count) {
        const x = <HTMLAudioElement>document.getElementById('myAudio');
        x.pause();
        playAudio('game');
    }
    const crossWrapper = <HTMLElement>document.querySelector('.cross-wrapper');
    crossWrapper.addEventListener('click', () => {
        if (count) {
            const x = <HTMLAudioElement>document.getElementById('myAudio');
            x.pause();
            playAudio('main');
        }
    });
});
