const x = <HTMLAudioElement>document.getElementById('myAudio');
export let count: number;
export function playAudio(name: string) {
    x.src = `../photo/assets/music/${name}.mp3`;
    x.play();
    x.loop = true;
    count = 1;
}
playAudio('main');
function pauseAudio() {
    const soundImg = <HTMLImageElement>document.querySelector('.sound-img');
    if (soundImg.classList.contains('off')) {
        const gameStr = <HTMLElement>document.querySelector('.start-wrapper');
        let nameMusic = 'main';
        if (!gameStr.classList.contains('displayNone')) {
            nameMusic = 'game';
        }
        soundImg.src = './photo/icon/sound.png';
        soundImg.classList.remove('off');
        playAudio(nameMusic);
    } else {
        soundImg.src = './photo/icon/soundOff.png';
        soundImg.classList.add('off');
        x.currentTime = 0;
        count = 0;
        x.pause();
    }
}

const iconSound = <HTMLElement>document.querySelector('.icon-sound');
iconSound.addEventListener('click', pauseAudio);
