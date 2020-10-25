import React from 'react';

class Counternew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }


    increment() {
        setTimeout( ()=> {
            this.setState((prev, props) => ({
                counter: prev.counter+1
            }))
        },1000)

    }



    render() {
        console.log("rendering..")
        this.increment();
        return (
         
            <div>
                <p>{this.state.counter}</p>
            </div>
        )

    }
}

export default Counternew