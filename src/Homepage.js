import './css/App.css';
import HeroCarousel from './HeroCarousel.js';
import './css/homepage.css'
import GameList from './GameList.js';

function Homepage() {
  return (
    <div className="App">
        <HeroCarousel />
        <GameList />
    </div>
  );
}

export default Homepage;
