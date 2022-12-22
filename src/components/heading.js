import React from 'react'

import "./heading.css"

export const heading = ({ names, xPlaying }) => {
    const { name } = names;

    return (
        <div className="scoreboard">
            <span className={`score x-score ${!xPlaying && "inactive"}`}>Current Player is  - {name}</span>
        </div>
    )
}