import React from 'react'
import './Table.css'

function Table(props) {
    // map through the results from the api call and make a table row for each person
    const people = props.results.map((person, i) => {
        return (
            <tr key={i}>
                <th scope="row"><img src={person.image} alt="person" /></th>
                <td>{person.name}</td>
                <td>{person.phone}</td>
                <td>{person.email}</td>
                <td>{person.dob}</td>
            </tr>
        )
    })

    // Render the table to the screen
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">IMAGE</th>
                    <th scope="col" onClick={() => props.sortBy('name')}>NAME &#8597;</th>
                    <th scope="col">PHONE</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col" onClick={() => props.sortBy('age')}>DOB &#8597;</th>
                </tr>
            </thead>
            <tbody>
                {/* pass in our people rows array */}
                {people}
            </tbody>
        </table>
    )
}

export default Table
