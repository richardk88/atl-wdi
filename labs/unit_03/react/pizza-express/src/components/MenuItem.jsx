import React, {Component} from 'react';

class MenuItem extends Component {
    render () {
        return (
            <div id='menu' className='menu-item'>
                <img src={this.props.image} />
                <div className='menu-description'>
                    <div className='menu-item-name'>{this.props.name}</div>
                    <div>
                        <strong>Price:</strong>
                        {this.props.price}
                        <div>{this.props.description}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuItem;