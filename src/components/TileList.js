import React from 'react'
import Tiles from './Tiles'

function TileList({ hogs, showGreased }) {
 const filteredHogs = hogs.filter((hog) => hog.greased === showGreased || hog.greased )
    // console.log()
    return (
        <div className="ui grid container">
            {filteredHogs.map((hog) => {
                return(
                <Tiles
                hog={hog} 
                key={hog.name}
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                image={hog.image}
                weight={hog.weight}
                medal={hog['highest medal achieved']}/>
            )})}

        </div>

    )
}

export default TileList