const iconBackground = <HTMLElement>document.querySelector('.icon-background');
const someBackground = <HTMLElement>document.querySelector('.someBackground');

iconBackground.addEventListener('click', () => {
    someBackground.classList.toggle('displayNone');
});
someBackground.addEventListener('click', (event: MouseEvent) => {
    const a = <HTMLElement>event.target;
    if (a.classList.contains('fon-img')) {
        const mainWrapper = <HTMLElement>document.querySelector('.main-wrapper');
        mainWrapper.style.backgroundImage = `url(./photo/${a.classList[1]}/morning/1.jpg)`;
        const ourTime: Date = new Date();
        let dayTime: string;
        if (ourTime.getHours() >= 5 && ourTime.getHours() <= 11) {
            dayTime = 'morning';
        } else if (ourTime.getHours() >= 11 && ourTime.getHours() <= 19) {
            dayTime = 'afternoon';
        } else {
            dayTime = 'evening';
        }
        mainWrapper.style.backgroundImage = `url(./photo/${a.classList[1]}/${dayTime}/1.jpg)`;
        someBackground.classList.toggle('displayNone');
    }
});
