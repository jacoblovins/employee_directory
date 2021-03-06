import React from 'react';
import './Header.css';

// Static header with name and directons
function Header() {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Click on the arrows to filter by heading or use the search box to narrow your results.</p>
        </div>
    )
}

export default Header
