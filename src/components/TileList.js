import React from 'react'
import Tiles from './Tiles'

function TileList({ hogs }) {
    return (
        <div className="ui grid container">
            {hogs.map((hog) => {
                // console.log(hog["highest medal achieved"])
                return(
                <Tiles 
                key={hog.name}
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                image={hog.image}
                weight={hog.weight}
                medal={hog["hightest medal achieved"]}/>
            )})}

        </div>

    )
}

export default TileList