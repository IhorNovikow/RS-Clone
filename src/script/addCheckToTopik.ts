export function addCheckToTopik() {
    const result = <string>localStorage.getItem('result');
    const subtitleUlInfo = <HTMLUListElement>document.querySelector('.subtitle-ul-info');
    const li1 = <HTMLElement>subtitleUlInfo.childNodes[1];
    const li2 = <HTMLElement>subtitleUlInfo.childNodes[3];
    const li3 = <HTMLElement>subtitleUlInfo.childNodes[5];
    const li4 = <HTMLElement>subtitleUlInfo.childNodes[7];
    const li5 = <HTMLElement>subtitleUlInfo.childNodes[9];

    if (Number(result) > 10) {
        li1.classList.remove('subtitle-li-info-background1');
        li1.classList.add('subtitle-li-info-background2');
    }

    if (Number(result) > 20) {
        li2.classList.remove('subtitle-li-info-background1');
        li2.classList.add('subtitle-li-info-background2');
    }

    if (Number(result) > 30) {
        li3.classList.remove('subtitle-li-info-background1');
        li3.classList.add('subtitle-li-info-background2');
    }

    if (Number(result) > 40) {
        li4.classList.remove('subtitle-li-info-background1');
        li4.classList.add('subtitle-li-info-background2');
    }

    if (Number(result) > 50) {
        li5.classList.remove('subtitle-li-info-background1');
        li5.classList.add('subtitle-li-info-background2');
    }
}
