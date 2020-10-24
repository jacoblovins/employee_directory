import React, { Component } from 'react';
import Search from '../Search/Search';
import Table from '../Table/Table';
import axios from 'axios';
let resultsArr;

export default class Project extends Component {

    state = {
        search: '',
        results: [],
        ascending: false
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=100&exc=gender,location,login,cell,id,nat,registered')
            .then(response => {
                // handle success
                console.log(response);
                resultsArr = response.data.results.map(person => {
                    var dateString = person.dob.date;
                    var d = new Date(dateString);
                    var correctDate = (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getFullYear();
                    return {
                        image: person.picture.medium,
                        name: `${person.name.first} ${person.name.last}`,
                        phone: person.phone,
                        email: person.email,
                        dob: correctDate,
                        age: person.dob.age
                    }
                });
                
                this.setState({ results: resultsArr })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    handleChange = event => {
        const keyword = event.target.value;
        const filtered = resultsArr.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));

        this.setState({
            search: event.target.value,
            results: filtered
        });
    }

    sortBy = key => {
        if(this.state.ascending === true){
            const sortedB = this.state.results.sort( (a, b) =>  a[key] < b[key] ? 1: -1);

            this.setState({
                results: sortedB,
                ascending: false
            });
        } else {
            const sortedA = this.state.results.sort( (a, b) =>  a[key] > b[key] ? 1: -1);
    
            this.setState({
                results: sortedA,
                ascending: true
            });
        }

    }

    

    render() {
        return (
            <div>
                <Search search={this.state.search} handleChange={this.handleChange} />
                <Table results={this.state.results} sortBy={this.sortBy} />
            </div>
        )
    }
}
