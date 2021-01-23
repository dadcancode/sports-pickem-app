import { randomIndex } from "../services";

export const getUniqueRandoms = (arr, quantity) => {
    let clone = arr;
    let luckyWinners = [];

    for(let i = 0; i < quantity; i++) {
        let rando = clone.splice(randomIndex(clone), 1);
        luckyWinners.push(rando[0]);
    }

    return luckyWinners;
}