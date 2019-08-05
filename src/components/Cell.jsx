import React from 'react'
import moment from 'moment'

class Cell extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: `${moment(this.props.date, 'MM/DD/YYYY').format('MM')}/${this.props.day}/${moment(this.props.date, 'MM/DD/YYYY').format('YYYY')}`,
            dayContent: []
        }
    }
    contentIt(){
        const response = prompt("Make a schedule for " + this.state.date);
        let original = this.state.dayContent
        original.push(<li>{response}</li>)
        this.setState({
            dayContent: original
        })
    }
    render(){
        let contents = []
        let cellDate = this.state.date
        
        
        
        return(
            <div className="cell" onClick={() =>this.contentIt()}>
                <div className="day">
                    <h3>{this.state.date}</h3>
                </div>
                <ul className="day-content">
                    {this.state.dayContent}
                </ul>
            </div>
        )
    }
}

export default Cell