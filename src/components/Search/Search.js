import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {


    render() {
        return (
            <div className="row justify-content-center">
                <form>
                    <input type="text" className="form-control" value={this.props.search} onChange={this.props.handleChange} />
                </form>
            </div>
        )
    }
}
