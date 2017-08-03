import React, {Component} from 'react';
import locationData from '../locationData';
import Location from './Location';

class LocationList extends Component {
    render() {
        return (
            <div id='locations'>
                <h1>Locations :</h1>
                <div className='locations'>
                    {locationData.map((banana, i) => {
                        return <Location key={i} name={banana.name} address={banana.address} phone={banana.phone} />
                    })}
                </div>
            </div>
        )
    }
}

export default LocationList;