import React from 'react';
import Cell from './Cell';

class Structure extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: "some content"
        }
    }



    render(){
        const weekdays = [
            {
                fdays: 0,
                ldays: 13,
            },
            {
                fdays: 1,
                ldays: 12,
            },
            {
                fdays: 2,
                ldays: 11
            },
            {
                fdays: 3,
                ldays: 10
            },
            {
                fdays: 4,
                ldays: 9
            },
            {
                fdays: 5,
                ldays: 8
            },
            {
                fdays: 6,
                ldays: 7
            },
        ]
        let starterBlanks = [];
        let lastBlanks = []
        let days = []
        const date = this.props.date
        function blocks(fdom, ldom, dim){
            let firstBlanks = weekdays[fdom].fdays;
            for(let i = 0; i < firstBlanks; i++){
                starterBlanks.push(<div key={"firstBlanks: " + i} className="cell">things</div>)
            }
            
            for(let i = 0; i < dim; i++){
                days.push(<Cell key={"day: " + i} date={date} day={i+1} />)
            }
            let lastlyBlanks =  42 - (starterBlanks.length + days.length);
            for(let i = 0; i < lastlyBlanks; i++){
                lastBlanks.push(<div key={"lastlyBlanks: " + i} className="cell">lthings</div>)
            }
            console.log(lastlyBlanks)
        }
        blocks(this.props.firstDayOfMonth, this.props.lastDayOfMonth, this.props.daysInMonth)
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
    
}

export default Structure