const iconBackground = <HTMLElement>document.querySelector('.icon-background');
const someBackground = <HTMLElement>document.querySelector('.someBackground');

iconBackground.addEventListener('click', () => {
    someBackground.classList.toggle('displayNone');
    const infoOpenBook = <HTMLElement>document.querySelector('.info-open-book');
    infoOpenBook.classList.add('displayNone');
});
someBackground.addEventListener('click', (event: MouseEvent) => {
    const a = <HTMLElement>event.target;
    if (a.classList.contains('fon-img')) {
        const dayTime: string = getTime();
        changeBackground(a.classList[1], dayTime, 1);
        localStorage.setItem('nameBackground', a.classList[1]);
        someBackground.classList.toggle('displayNone');
    }
});

export function changeBackground(a: string, b: string, c: number): void {
    const mainWrapper = <HTMLElement>document.querySelector('.main-wrapper');
    mainWrapper.style.backgroundImage = `url(./photo/${a}/${b}/${c}.jpg)`;
}
export function getTime(): string {
    const ourTime: Date = new Date();
    if (ourTime.getHours() >= 5 && ourTime.getHours() <= 11) {
        return 'morning';
    } else if (ourTime.getHours() >= 11 && ourTime.getHours() <= 19) {
        return 'afternoon';
    } else {
        return 'evening';
    }
}
