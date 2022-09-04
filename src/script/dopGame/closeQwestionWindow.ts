const closeQestion = <HTMLElement>document.querySelector('.close-qestion');

closeQestion.addEventListener('click', () => {
    console.log(1);
    const windowQestion = <HTMLElement>document.querySelector('.window-qestion');
    windowQestion.classList.add('displayNone');
});
