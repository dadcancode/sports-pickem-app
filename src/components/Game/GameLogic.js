import { randomIndex } from "../services";
import { navigate } from 'hookrouter';
import _ from 'lodash';

export const getUniqueRandoms = (arr, quantity) => {
    let clone = arr;
    let luckyWinners = [];

    if(clone.length >= quantity) {
        for(let i = 0; i < quantity; i++) {
            let rando = clone.splice(randomIndex(clone), 1);
            luckyWinners.push(rando[0]);
        }
    } else {
        for(let i = 0; i < clone.length; i++) {
            let rando = clone.splice(randomIndex(clone), 1);
            luckyWinners.push(rando[0]);
        }
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

export const resetRecord = (record, setRecord) => {
    let deepCopy = _.cloneDeep(record);
    deepCopy.overall = {
        correct: 0,
        total: 0
    };
    deepCopy.years = {};
    setRecord(deepCopy);
}

export const resetSeason = (picks, setPicks, setRandomPicks) => {
    resetPicks(picks, setPicks);
    resetRandomEvents(setRandomPicks);
    navigate('/');
}

export const playAgain = (picks, setPicks) => {
    resetPicks(picks, setPicks);
    navigate('/playGame');
}

export const resetGame = (picks, setPicks, record, setRecord, setChosenSeason) => {
    resetPicks(picks, setPicks);
    resetRecord(record, setRecord);
    setChosenSeason();
    navigate('/')
}