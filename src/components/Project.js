import React, { Component } from 'react';
import Search from './Search/Search';
import Table from './Table/Table';

export default class Project extends Component {
    render() {
        return (
            <div>
                <Search />
                <Table />
            </div>
        )
    }
}
