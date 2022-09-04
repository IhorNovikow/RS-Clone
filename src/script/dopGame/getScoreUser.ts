export interface Result {
    password: string;
    roles: string[];
    score: number;
    username: string;
    __v: number;
    _id: string;
}

export async function getScoreAndName(user: string, userNameHTML: HTMLElement, userScoreHTML: HTMLElement) {
    await fetch(`http://localhost:3000/auth/users/`)
        .then((res) => res.json())
        .then((data: Result[]) => {
            //console.log(data);
            data.forEach(function (el) {
                if (el.username === user) {
                    //console.log({ username: el.username, userScore: el.score, id: el._id });
                    userNameHTML.innerHTML = el.username;
                    userScoreHTML.innerHTML = String(el.score);
                }
            });
        });
}
