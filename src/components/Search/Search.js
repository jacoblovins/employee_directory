import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    constructor() {
        super();

        this.state = {
            search: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="row justify-content-center">
                <form>
                    <input type="text" className="form-control" id="search" name="search" value={this.state.search} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}
