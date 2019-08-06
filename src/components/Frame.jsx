import React from 'react'
import moment from 'moment'
import Structure from './Structure'
class Frame extends React.Component{
    constructor(props){
        super(props)
        this.moment = moment();
        this.state ={
            date: moment().format('MM/DD/YYYY'),
        }
    }
   
    nextMonth = () =>{
        let newDate = moment(this.state.date, 'MM/DD/YYYY').add(1, 'month').format('MM/DD/YYYY')
        this.setState({
            date: newDate
        })
    }

    pastMonth = () =>{
        let newDate = moment(this.state.date, 'MM/DD/YYYY').subtract(1, 'month').format('MM/DD/YYYY')
        this.setState({
            date: newDate
        })
    }
    render(){
        
        // const time = () =>{
        //     let time = moment().format('hh:mm:ss');
        //     return time
        // }
        let there = "MM/DD/YYYY"
        let date = this.state.date;
        
        let firstDayOfMonth = moment(date, there).startOf('month').day();
        let lastDayOfMonth = moment(date, there).endOf('month').day();
        let daysInMonth = moment(date, there).daysInMonth();

        

        let daysOfWeek = [];

        for(let i = 0; i < 7; i++){
            let thatDay = this.moment.weekday(i).format('dddd');
            daysOfWeek.push(<li key={thatDay}>{thatDay}</li>)

        }
        return(
            
            <div>
                <div id="topper">
                    <header>
                        <h1>Calender</h1>
                    </header>
                    <div id="takeOnDate">
                        <button onClick={() => this.pastMonth()}>Past Month</button>
                        <h4>{this.state.date}</h4>
                        <button onClick={() => this.nextMonth()}>Next Month</button>
                    </div>
                    <ul id="days_of_week">
                        {daysOfWeek}
                    </ul>
                </div>
                <main id="cellular">
                    <Structure date={this.state.date} firstDayOfMonth={firstDayOfMonth} lastDayOfMonth={lastDayOfMonth} daysInMonth={daysInMonth} />
                </main>
            </div>
        )
    }
}

export default Frame;