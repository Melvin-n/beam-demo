//import dependencies
import React, { useEffect, useState } from 'react'

//import css
import './css/homepage.css'

//import game data json
import games from './data/games.json'

export default function GameList() {

    


    return (
        <div id='games-list'>
            {games.map((game, i) => (
                    <div className='game-brief' >
                        <img className='small-game-image' src={game.image} alt={game.title} />
                        <h4 className='game-brief-title'>{game.title}</h4>
                        <h5 className='game-brief-price'>${game.price.toFixed(2)}</h5>
                    </div>
            ))}
            <button id='view-more-btn'>View more &gt;&gt; </button>
        </div>
    )
}
