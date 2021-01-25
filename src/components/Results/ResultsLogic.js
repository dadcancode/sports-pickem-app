import _ from 'lodash';

export const gradePicks = (picks, randomEvents) => {
    let grade = [];
    console.log(randomEvents);
    randomEvents.map((randomEvent, pickNumber) => {
        grade.push(analyzeOne(randomEvent, picks[pickNumber]));
    })

    return grade
}

export const analyzeOne = (randomEvent, pick) => {
    let winner = getWinner(randomEvent);
    if(pick === winner) {
        return true;
    } else {
        return false;
    }
}

export const getWinner = (randomEvent) => {
        
    if(randomEvent['intHomeScore'] >= randomEvent['intAwayScore']) {
        return randomEvent['strHomeTeam']
    } else {
        return randomEvent['strAwayTeam']
    }

}

export const updateRecord = (grade, record, setterMethod, year) => {

    let deepClone = _.cloneDeep(record);
    
    if(!deepClone.years[year]) {
        deepClone.years[year] = {
            correct: 0,
            total: 0
        }
    }

    grade.map((val) => {
        deepClone.overall.total++
        deepClone.years[year].total++;
        if(val) {
            deepClone.overall.correct++;
            deepClone.years[year].correct++;
        }
    });

    setterMethod(deepClone);

}