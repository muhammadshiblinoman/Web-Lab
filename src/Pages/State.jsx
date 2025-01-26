import React, {Component} from "react";

class State extends Component{
    // state = {
    //     name: "Shibli",
    //     age: 20,
    //     prof: "Student",
    // }

    // Another Way to Declaration!
    constructor(props) {
        super(props);
        this.state = {
            name: "Shibli",
            age: 21,
            prof: "Student", 
        }
    }

    ChangeValur(e) {
        this.setState(
            {
                prof: "None",
            }
        )
    }
    ChageMind = this.ChangeValur.bind(this, this.e);

    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>My Profession is {this.state.prof}</h1>
                <button onClick={this.ChageMind}>Change Value</button>
            </>
        )
    }
}

export default State;