import React from 'react'
import './Table.css'



function Table(props) {
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

    const nameSort = () => {

    }

    const dobSort = () => {
        
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={() => nameSort()}>Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col" onClick={() => dobSort()}>DOB</th>
                </tr>
            </thead>
            <tbody>
                {people}
            </tbody>
        </table>
    )
}

export default Table
