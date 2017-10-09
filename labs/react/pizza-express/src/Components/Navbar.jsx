import React, { Components } from 'react'

class Navbar extends Components {

    render() {
        return (
            <div className="navbar">
                <a href="#"> Our Story </a>
                <a href="#"> Menu </a>
                <a href="#">Locations</a>
                <a href="#">Contact</a>
            </div>
        )
    }
}

export default Navbar