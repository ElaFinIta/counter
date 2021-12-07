import React, { Component } from "react";


class Main extends Component {
    state = {
        counter : 10,
    }

    addOne = () => {   // we dont need const because we are inside a class function
        this.setState({
            counter: this.state.counter + 1
        });
    };

    addFive = () => {  
        this.setState({
            counter: this.state.counter + 5
        });
    };

    minusOne = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter -1
            });
        };
    };

    minusFive = () => {
        if (this.state.counter > 4) {
            this.setState({
                counter: this.state.counter - 5
            });
        }
    };

    reset = () => {
        this.setState({
            counter: 0
        });
    };

    render() {
        let circleClass = "";

        // if (this.state.counter === 0) {
        //     circleClass = "circle";
        // } else if (this.state.counter % 2 === 0) {
        //     circleClass = "circle even";
        // } else {
        //     circleClass = "circle odd"
        // }

        // same with ternary notation: if replaced with ? and else with :
        this.state.counter === 0 
            ? (circleClass = "circle")
            : this.state.counter % 2 === 0
            ? (circleClass = "circle even")
            : (circleClass = "circle odd");


        return (
            // Margit version:
            // <div>
            //     <h1>{this.state.counter}</h1>
            //     <p>{this.state.text}</p>
            // </div>


            <>
            <main>
                <div className={circleClass}>
                    <p id="countValue">{this.state.counter}</p>
                </div>
                <div className="buttons">
                    <button onClick={this.addFive}>Add five</button>
                    <button onClick={this.addOne}>Add one</button>
                    <button onClick={this.reset}>Reset</button>
                    <button onClick={this.minusOne}>Remove one</button>
                    <button onClick={this.minusFive}>Remove five</button>
                </div>

            </main>
            </>
        )
    }
}


export default Main;