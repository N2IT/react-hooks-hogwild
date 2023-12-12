import React from 'react'

function Tiles({ name, specialty, greased, image, weight, medal  }) {
    
    return (
        <div className="ui four wide column">
            <div className="pigTile" key={name}>
            <p>Name: {name}</p>
            <img className="minPigTile" alt={name} src={image}></img>
            </div>
        </div>
    )
}

export default Tiles
