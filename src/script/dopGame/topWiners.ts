export interface Result {
    password: string;
    roles: string[];
    score: number;
    username: string;
    __v: number;
    _id: string;
}
interface OneWiner {
    username: string;
    score: string;
}

export async function getUsers() {
    await fetch(`http://localhost:3000/auth/users/`)
        .then((res) => res.json())
        .then((data: Result[]) => {
            const allWiners: OneWiner[] = [];
            data.forEach((el: Result) => {
                if (el.score > 0) {
                    allWiners.push({ username: el.username, score: String(el.score) });
                }
            });
            const listWiners = <HTMLElement>document.querySelector('.list-winers');
            listWiners.innerHTML = '';
            allWiners.sort((a, b) => Number(b.score) - Number(a.score));
            if (allWiners.length > 10) {
                allWiners.splice(9);
            }
            allWiners.forEach((el, index) => {
                listWiners.innerHTML =
                    listWiners.innerHTML + `<li class="winer">${index + 1}. ${el.username} ${el.score}</li>`;
            });
        });
}
