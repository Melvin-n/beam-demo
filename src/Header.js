import React from 'react'
import './css/homepage.css'


export default function Header() {
    
    
    return (
        
        <div id='header-container'>
            <a id='home-link-header' href='http://localhost:3000/'>
                <h1 id='beam-title'>Beam</h1>
            </a>
            <ul id='nav-list'>
                <li className='nav-list-item'>
                    <a href={'/'}>
                    Browse
                    </a>
                </li>           
                <li className='nav-list-item'>
                    <a href={`http://localhost:3000/`}>
                    View Cart
                    </a>
                </li>
                
            </ul>

            <div id='logged-out-container-header'>
                <a href='http://localhost:3000/' className='login-signup-header'>Login / Signup </a>

            </div>
            
            
        </div>
    )
}