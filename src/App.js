import React, { Component } from 'react';
import './App.css';
import InputsForm from "./components/InputsForm";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputs: {
                startDate: "",
                days: "",
                country: ""
            },
            startDate: null,
            endDate: null
        };
    }

    onInputChange = ({ name, value }) => {
        const inputs = this.state.inputs;
        inputs[name] = value;

        this.setState({ inputs });
    };

    onFormSubmit = e => {
        e.preventDefault();
    };

    validate = () => {
        const { inputs } = this.state;

        return true;
    };

    render() {
        return (
            <div className="App">
                <h1>Programming Exercise UI for Number8</h1>

                <InputsForm
                    inputs={this.state.inputs}
                    onInputChange={this.onInputChange}
                    onFormSubmit={this.onFormSubmit}
                    isValid={this.validate()}
                />

            </div>
        );
    }
}

export default App;
