import React, {Component, useState} from "react";
import '../styles/App.css';

function getCurrentTime(){
    const currentDate = new Date();
    // const hours = currentDate.getHours();
    // const mins = currentDate.getMinutes();
    // const sec = currentDate.getSeconds();
    // return hours + ':' + mins + ':' + sec;

    //currentDate.setHours(5);
    //currentDate.setMinutes(3);
    //currentDate.setSeconds(1);

    return currentDate.toLocaleTimeString().toUpperCase();
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: getCurrentTime(),
        };
    }

    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.setState({time: getCurrentTime()});
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render() {

        return(
            <div className="Clock">
               <h3 id="time">
                {this.state.time}
               </h3>
            </div>
        )
    }
}


export default App;
