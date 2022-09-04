export function resetProgress() {
    const resetButton = <HTMLElement>document.querySelector('.alert-button-end');
    resetButton.addEventListener('click', () => {
        localStorage.removeItem('result');
        localStorage.removeItem('nameBackground');
        location.reload();
        resetButton.style.display = 'none';
    });
}
