import { randomIndex } from "../services";
import { navigate } from 'hookrouter';

export const getUniqueRandoms = (arr, quantity) => {
    let clone = arr;
    let luckyWinners = [];

    for(let i = 0; i < quantity; i++) {
        let rando = clone.splice(randomIndex(clone), 1);
        luckyWinners.push(rando[0]);
    }

    return luckyWinners;
}

export const resetPicks = (picks, setPicks) => {
    let clone = picks;
    for(let x in clone) {
        clone[x] = null;
    }
    setPicks({...clone});
}

export const resetRandomEvents = (setRandomPicks) => {
    setRandomPicks();
}

export const resetGame = (picks, setPicks, setRandomPicks) => {
    resetPicks(picks, setPicks);
    resetRandomEvents(setRandomPicks);
    navigate('/');
}