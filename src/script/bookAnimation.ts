export function bookAnimation(): void {
    const pageFront = document.querySelector('.front') as HTMLElement;
    const page1 = document.querySelector('.page1') as HTMLElement;
    const page2 = document.querySelector('.page2') as HTMLElement;
    const page3 = document.querySelector('.page3') as HTMLElement;
    const page4 = document.querySelector('.page4') as HTMLElement;
    const page5 = document.querySelector('.page5') as HTMLElement;
    const page6 = document.querySelector('.page6') as HTMLElement;
    const pageBack = document.querySelector('.back') as HTMLElement;

    pageFront.classList.remove('front-close');
    page1.classList.remove('page1-close');
    page2.classList.remove('page2-close');
    page3.classList.remove('page3-close');
    page4.classList.remove('page4-close');
    page5.classList.remove('page5-close');
    page6.classList.remove('page6-close');
    pageBack.classList.remove('back-close');

    pageFront.classList.add('front-close');
    page1.classList.add('page1-close');
    page2.classList.add('page2-close');
    page3.classList.add('page3-close');
    page4.classList.add('page4-close');
    page5.classList.add('page5-close');
    page6.classList.add('page6-close');
    pageBack.classList.add('back-close');
}
