import React from 'react'
import '../components/assets/css/static/index.scss'

class Home extends React.Component{
    render(){
        return(
            <div>
                <a href="/Calendar">
                    <div id="starterPack">
                        <div>
                            <h1>Start Calendar</h1>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default Home