import React from 'react';
import './Search.css';

function Search(props) {

    return (
        <div className="row justify-content-center">
            <form>
                <input type="text" className="form-control" value={props.search} onChange={props.handleChange} />
            </form>
        </div>
    )
    
}

export default Search

