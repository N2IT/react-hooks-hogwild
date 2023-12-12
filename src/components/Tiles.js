import React from 'react'

function Tiles({ name, specialty, greased, image, weight, medal  }) {
    
    return (
        <div className="ui four wide column">
            <div className="ui card" key={name}>
            <p className="smallHeader">Name: {name}</p>
            <img className="image img" alt={name} src={image}></img>
            </div>
        </div>
    )
}

export default Tiles
