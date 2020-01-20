import React from 'react';
import Lara from './img/tomb-raider.jpg';
import './card.css';


const Card = () =>{
    return(
        <section className="card" style={
            {backgroundImage:`url(${Lara})`}
            }>
            
            <article className="card-article">
                <h1>Powerful Women</h1>
                <h2>Lara Croft</h2>
                <p>This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures.</p>
                <footer>
                    <button>+</button>
                </footer>
            </article>

        </section>
    );
}

export default Card;