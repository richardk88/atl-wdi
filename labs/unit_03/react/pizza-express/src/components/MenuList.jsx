import React, {Component} from 'react';
import PizzaData from '../pizzaData';
import MenuItem from './MenuItem';

class MenuList extends Component {
    render() {
        return (
            <div className='menu'>
                <h1>Menu</h1>
                <div className='menu-container'>
                    {PizzaData.map((banana,i) => {
                        return <MenuItem key={i} name={banana.name} price={banana.price} description={banana.description} image={banana.image}/>
                    })}
                </div>
            </div>
        )
    }
}

export default MenuList;