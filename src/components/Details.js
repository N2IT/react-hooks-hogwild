import React from 'react'

function Details({ specialty, greased, weight, medal }) {
    return (
        <div>
            <p>Specialty: {specialty}</p>
            <p>Greased: {greased}</p>
            <p>Weight: {weight}</p>
            <p>Medal: {medal}</p>
        </div>
    )
}

export default Details