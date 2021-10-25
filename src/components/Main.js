import React, { Component } from "react";


class Main extends Component {
    state = {
        countValue : 0
    }


    render() {
        return (
            <>
            <main>
                <div className="circle">
                    <p id="countValue">0</p>
                </div>
                <div className="buttons">
                    <button >Add one</button>
                    <button >Remove one</button>
                    <button >Reset</button>
                </div>

            </main>
            </>
        )
    }
}


export default Main;