import { changeBackground } from './changeBackground';
export function transitionNextLvl(
    nameFolderBackground: string,
    nameBackground: string,
    numberBackground: number
): void {
    let numberPhoto = 1;
    if (numberBackground < 20) {
        numberPhoto = 1;
    } else if (numberBackground < 30) {
        numberPhoto = 2;
    } else if (numberBackground < 40) {
        numberPhoto = 3;
    } else if (numberBackground < 50) {
        numberPhoto = 4;
    } else if (numberBackground < 60) {
        numberPhoto = 5;
    }

    changeBackground(nameFolderBackground, nameBackground, numberPhoto);
}
