import { useEffect } from "react";
import _ from 'lodash'

const Results = (props) => {

    const gradePicks = (picks, randomEvents) => {
        let grade = [];
        console.log(randomEvents);
        randomEvents.map((randomEvent, pickNumber) => {
            grade.push(analyzeOne(randomEvent, picks[pickNumber]));
        })

        return grade
    }

    const analyzeOne = (randomEvent, pick) => {
        let winner = getWinner(randomEvent);
        if(pick === winner) {
            return true;
        } else {
            return false;
        }
    }
    
    const getWinner = (randomEvent) => {
        
        if(randomEvent['intHomeScore'] >= randomEvent['intAwayScore']) {
            return randomEvent['strHomeTeam']
        } else {
            return randomEvent['strAwayTeam']
        }

    }

    const updateRecord = (grade) => {

        // let overallRecordClone = {...props.record.overall};
        // let yearRecordClone = {};

        let deepClone = _.cloneDeep(props.record);


        
        if(!deepClone.years[props.chosenSeason]) {
            deepClone.years[props.chosenSeason] = {
                correct: 0,
                total: 0
            }

            // yearRecordClone = {...yearRecordClone[props.chosenSeason]};
        }

        grade.map((val) => {
            deepClone.overall.total++
            deepClone.years[props.chosenSeason].total++;
            if(val) {
                deepClone.overall.correct++;
                deepClone.years[props.chosenSeason].correct++;
            }
        });


        
        console.log(deepClone);
        props.setRecord(deepClone)

    }

    useEffect(() => {
        console.log(props)
        if(props.randomEvents.length) {
            let grade = gradePicks(props.picks, props.randomEvents);
            console.log(grade);
            updateRecord(grade);
        }
    }, [props.randomEvents]);


    return (
        <div>
            RESULTS
        </div>
    )
}

export default Results;