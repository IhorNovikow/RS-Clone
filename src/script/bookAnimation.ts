export function bookAnimation(): void {
    const registrationButton: NodeListOf<Element> = document.querySelectorAll('.registration-button');
    registrationButton.forEach((el: Element) => {
        const pageFront = <HTMLElement>document.querySelector('.front');
        const page1 = <HTMLElement>document.querySelector('.page1');
        const page2 = <HTMLElement>document.querySelector('.page2');
        const page3 = <HTMLElement>document.querySelector('.page3');
        const page4 = <HTMLElement>document.querySelector('.page4');
        const page5 = <HTMLElement>document.querySelector('.page5');
        const page6 = <HTMLElement>document.querySelector('.page6');
        const pageBack = <HTMLElement>document.querySelector('.back');

        el.addEventListener('click', () => {
            if (pageFront.classList.contains('front-close')) {
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
            } else {
                pageFront.classList.add('front-close');
                page1.classList.add('page1-close');
                page2.classList.add('page2-close');
                page3.classList.add('page3-close');
                page4.classList.add('page4-close');
                page5.classList.add('page5-close');
                page6.classList.add('page6-close');
                pageBack.classList.add('back-close');
            }
        });
    });
}
