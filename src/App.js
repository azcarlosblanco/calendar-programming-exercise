import React, { Component } from 'react';
import './App.css';
import InputsForm from "./components/inputsForm";
import moment from 'moment';
import Calendar from "./components/calendar";

class App extends Component {

    state = {
            inputs: {
                startDate: "",
                days: "",
                countryCode: ""
            },
            startDate: null,
            endDate: null
        };

    onInputChange = ({ name, value }) => {
        const inputs = this.state.inputs;
        inputs[name] = value;

        this.setState({ inputs });
    };

    onFormSubmit = e => {
        e.preventDefault();
        const { inputs } = this.state;
        const startDate = moment(inputs.startDate);
        const endDate = startDate.clone().add(inputs.days -1, "d");

        this.setState({ startDate, endDate });
    };

    validate = () => {
        const { inputs } = this.state;
        return inputs.startDate && inputs.days && inputs.countryCode;
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

                {
                    this.state.startDate && this.state.endDate
                        ? <Calendar
                            startDate={ this.state.startDate }
                            endDate={ this.state.endDate }
                            countryCode={ this.state.inputs.countryCode }/>
                        : <p>No results...</p>
                }

            </div>
        );
    }
}

export default App;
