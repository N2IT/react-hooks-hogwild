import React from 'react'

function Tiles({ name, specialty, greased, image, weight, medal, hog  }) {

    function revealDetails(pig) {
        if(pig.name === hog.name) {
            console.log('you got the right pig')
        }
    }
    
    return (
        <div className="ui four wide column">
            <div onClick={(e) => revealDetails({name})} className="ui card" key={name}>
            <p className="smallHeader">Name: {name}</p>
            <img className="image img" alt={name} src={image}></img>
            </div>
        </div>
    )
}

export default Tiles
