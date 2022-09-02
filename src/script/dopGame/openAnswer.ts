export function openAnswer(content: string) {
    const windowAnswer = <HTMLElement>document.querySelector('.window-answer');
    const answerContent = <HTMLElement>document.querySelector('.answer-content');
    const closeAnswer = <HTMLElement>document.querySelector('.close-answer');
    const windowQestion = <HTMLElement>document.querySelector('.window-qestion');

    windowAnswer.classList.remove('displayNone');
    answerContent.innerHTML = content;
    closeAnswer.addEventListener('click', () => {
        windowAnswer.classList.add('displayNone');
        windowQestion.classList.add('displayNone');
    });
}
