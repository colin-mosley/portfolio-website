import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import './styles/portfolio.css'
import mazemonkey from './images/mazemonkey.png'
import mazemonkeygif from './images/mazemonkey.gif'
import nutrition from './images/demolitionnutrition.png'
import nutritiongif from './images/demolitionnutrition.gif'
import casino from './images/casino.png'
import casinogif from './images/casino.gif'
import millionaire from './images/millionaire.png'
import millionairegif from './images/millionaire.gif'
import DemoModal from './DemoModal.js'

class Portfolio extends React.Component {

    render() {
        return (
            <div id="portfolio">
                <div className="portfolio-page">
                    <h1 className="portfolio-title turquoise">Portfolio</h1>              
                    <AwesomeSlider className="slider" animation="cubeAnimation">
                        <div className="demolition-nutrition">
                            <h2>Demolition Nutrition</h2>
                            <img src={nutrition} alt="demolition nutrition" width="750px" height="400px" />
                            <p className="technologies">HTML | CSS | JS | React | Bootstrap | Nutritionix API | Geocoding API | Ruby on Rails | PostgreSQL</p>
                            <DemoModal 
                                gif={nutritiongif} 
                                source='https://github.com/colin-mosley/Demolition-Nutrition-Frontend' 
                                video='https://youtu.be/FS6Hd9pQQ_o'
                            />
                 
                        </div>
                        <div className="mosbros-casino">
                            <h2>Mos Bros Casino</h2>
                            <img src={casino} alt="mos bros casino" width="750px" height="400px" />
                            <p className="technologies">HTML | CSS | JS | React | Ruby on Rails | PostgreSQL</p>
                            <DemoModal 
                                gif={casinogif} 
                                source='https://github.com/colin-mosley/mosbros-casino-frontend'
                                video='https://youtu.be/YQ_sav1GPwc'
                            />
                        </div>
                        <div className="maze-monkey">
                            <h2>Maze Monkey</h2>
                            <img src={mazemonkey} alt="Maze Monkey" width="750px" height="400px" />
                            <p className="technologies">HTML | CSS | JS | Ruby on Rails | PostgreSQL</p>
                            <DemoModal 
                                gif={mazemonkeygif} 
                                source='https://github.com/colin-mosley/Maze-Monkey'
                                video='https://youtu.be/3__Ykxcmi9s'
                            />
                        </div>
                        <div className="millionaire">
                            <h2>Millionaire</h2>
                            <img src={millionaire} alt="Millionaire" width="750px" height="400px" />
                            <p className="technologies">Ruby | ActiveRecord | SQLite3 | TTY-Prompt | Colorize | Open Trivia DB API </p>
                            <DemoModal 
                                gif={millionairegif} 
                                source='https://github.com/colin-mosley/Millionaire'
                                video='https://youtu.be/u5_N6z61UIg'
                            />
                        </div>
                    </AwesomeSlider>
                </div>
            </div>
        )
    }
}

export default Portfolio;