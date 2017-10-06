import React, {Component} from 'react'
import MenuList from './MenuList.jsx'


class MenuItems extends Component {
    render() {
        return(
            <div>
            <p>{this.name}</p>
            <p>{this.price}</p>
            <p>{this.description}</p>
            <div>{this.img}</div>
            </div>

        )
    }
}

export default MenuItems