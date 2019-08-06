import React from 'react';
import Cell from './Cell';
import moment from 'moment'

function Structure(props){
        const weekdays = [
            {//Sunday
                fdays: 0,
                ldays: 13,
            },
            {//Monday
                fdays: 1,
                ldays: 12,
            },
            {//Tuesday
                fdays: 2,
                ldays: 11
            },
            {//Wensday
                fdays: 3,
                ldays: 10
            },
            {//Thursday
                fdays: 4,
                ldays: 9
            },
            {//Friday
                fdays: 5,
                ldays: 8
            },
            {//Saturday
                fdays: 6,
                ldays: 7
            },
        ]
        const starterBlanks = [];
        const lastBlanks = []
        const days = []
        const date = props.date
        

        
        

        function blocks(fdom, ldom, dim){
            const firstBlanks = weekdays[fdom].fdays;
            const subDays = []
            

            for(let i = firstBlanks; i > -1; i -= 1){
                subDays.push(i)
            }

            

            for(let i = 0; i < firstBlanks; i++){
                starterBlanks.push(<div key={"firstBlanks: " + i} className="cell">{moment(date, "MM/DD/YYYY").startOf('month').subtract(subDays[i], 'day').format('DD')}</div>)
            }
            
            for(let i = 0; i < dim; i++){
                days.push(<Cell key={"day: " + i} date={date} day={i+1} />)
            }
            
            let lastlyBlanks =  42 - (starterBlanks.length + days.length);
            const addDays = []
            for(let i = 1; i < lastlyBlanks+1; i+=1){
                addDays.push(i)
            }
            for(let i = 0; i < lastlyBlanks; i++){
                lastBlanks.push(<div key={"lastlyBlanks: " + i} className="cell">{moment(date, "MM/DD/YYYY").endOf('month').add(addDays[i], 'day').format('D')}</div>)
            }
            console.log(lastlyBlanks)
        }

        blocks(props.firstDayOfMonth, props.lastDayOfMonth, props.daysInMonth)

        const  displayer = [...starterBlanks, ...days, ...lastBlanks]

        function makeWeek(myArray, chunk_size){
            let index = 0;
            const arrayLength = myArray.length;
            let weeker = [];
            
            for (index = 0; index < arrayLength; index += chunk_size) {
                let myChunk = myArray.slice(index, index+chunk_size);
                weeker.push(<div key={'week: ' + index} className="week">{myChunk}</div>);
            }
        
            return weeker;
        }
        let display = makeWeek(displayer, 7);
        
        
        console.log(lastBlanks.length)
        return (
            <div>
                {display}
            </div>
        )
}

export default Structure