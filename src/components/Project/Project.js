import React, { useState, useEffect } from 'react';
import Search from '../Search/Search';
import Table from '../Table/Table';
import axios from 'axios';
let resultsArr;

function Project() {
    // Define initial state
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [ascending, setAscending] = useState(false)

    useEffect(() => {
        init()
    }, [])

    // When the component first renders, make the api call and store the data
    const init = () => {
        axios.get('https://randomuser.me/api/?results=100&exc=gender,location,login,cell,id,nat,registered')
            .then(response => {
                // handle success
                resultsArr = response.data.results.map(person => {
                    // Make the dob readable
                    var dateString = person.dob.date;
                    var d = new Date(dateString);
                    var correctDate = (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getFullYear();
                    // Return only the fields needed
                    return {
                        image: person.picture.medium,
                        name: `${person.name.first} ${person.name.last}`,
                        phone: person.phone,
                        email: person.email,
                        dob: correctDate,
                        age: person.dob.age
                    }
                });

                setResults(resultsArr)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    // When the user types into the search bar, filter the results and set the state to the new array
    const handleChange = event => {
        const keyword = event.target.value;
        const filtered = resultsArr.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));

        setSearch(event.target.value);
        setResults(filtered)
    }

    // Sort by name or dob, ascending and decending
    const sortBy = key => {
        if (ascending === true) {
            const sortedB = results.sort((a, b) => a[key] < b[key] ? 1 : -1);

            setResults(sortedB)
            setAscending(false)

        } else {
            const sortedA = results.sort((a, b) => a[key] > b[key] ? 1 : -1);

            setResults(sortedA)
            setAscending(true)

        }

    }

    // Render our search and table components with props
        return (
            <div>
                <Search search={search} handleChange={handleChange} />
                <Table results={results} sortBy={sortBy} />
            </div>
        )
    
}

export default Project;