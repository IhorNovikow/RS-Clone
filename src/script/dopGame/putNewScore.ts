import { Result } from './getScoreUser';

export async function upScore(user: string, newScore: number) {
    await fetch(`http://localhost:3000/auth/users/`)
        .then((res) => res.json())
        .then((data: Result[]) => {
            data.forEach(function (el) {
                if (el.username === user) {
                    const upScore = +el.score + +newScore;
                    fetch(`http://localhost:3000/auth/users/${user}`, {
                        method: 'PUT',
                        body: JSON.stringify({ score: upScore }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }).then((res) => res.json());
                }
            });
        });
}
