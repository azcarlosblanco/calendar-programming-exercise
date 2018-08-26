import React, { Component } from 'react';
import './index.css';

class InputsForm extends Component {

    state = this.props.inputs;

    onChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });

        this.props.onInputChange({ name, value });
    };

    render() {
        return (
            <form className="form-inline" onSubmit={this.props.onFormSubmit}>

                <div className="form-group">
                    <label>Start Date</label>
                    <input
                        className="form-control"
                        name="startDate"
                        type="date"
                        value={this.state.startDate}
                        onChange={this.onChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Number of Days</label>
                    <input
                        className="form-control"
                        name="days"
                        type="number"
                        value={this.state.days}
                        onChange={this.onChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Country</label>
                    <input
                        className="form-control"
                        name="countryCode"
                        type="text"
                        value={this.state.countryCode}
                        onChange={this.onChange}
                        required
                    />
                </div>

                <input className="btn btn-default" type="submit" disabled={!this.props.isValid} value="Show" />
            </form>
        );
    }
}

export default InputsForm;
