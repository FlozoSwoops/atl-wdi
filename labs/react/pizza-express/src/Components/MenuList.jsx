import React, {Component} from 'react'

import Data from '../pizzaData.js'

class MenuList extends Component {
    render() {
        const menuComponents = Data.map((item) =>
         <Data />
    )
        return(
            <div>
                <h1>Menu</h1>
                <div>
                    
                    {menuComponents}

                </div>
    
            </div>

        )
    }
}

export default MenuList