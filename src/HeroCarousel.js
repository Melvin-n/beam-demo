//import dependencies
import React, { useState, useEffect } from 'react'

//import css
import './css/homepage.css'

//import game data json
import games from './data/games.json'

export default function HeroCarousel() {


    //get featured products    
    useEffect(() => {
        games = games.filter((game) => game.featured)
        console.log(games)
    }, [])

    //set scroll carousel
    const [currentHero, setCurrentHero] = useState(0)
    setTimeout(() => {
        if (currentHero > 2) {
            setCurrentHero(0) 
        } else {
            setCurrentHero(currentHero + 1)
        }
        
    }, 3000)

    

    
     return (
        <div id='hero-container'>
            <h2 id='hero-header'>Featured Games</h2>
            <div id='sale-hero' >
                <img id='carousel-image' src={games[currentHero].image} alt={games[currentHero].title} /> 
                <div id='hero-details'>
                    <h3 id='hero-game-title'>{games[currentHero].title}</h3>
                    <button id='hero-game-btn'>
                        Out Now
                    </button>  
                </div>     
            </div>
        </div>
    )
}