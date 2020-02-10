import React from 'react';
import './App.css';
import Card from './componentes/playingcard/card.js';
import Lara01 from './componentes/playingcard/img/tomb-raider.jpg';
import Lara02 from './componentes/playingcard/img/lara02.jpg';
import Lara03 from './componentes/playingcard/img/lara03.jpg';
import Lara04 from './componentes/playingcard/img/lara04.jpg';


const cards = [
      {
            cardAño: "Lara del 2018",
            cardTitle: "Lara Croft",
            cardFoto: Lara01,
            cardParrafo: "This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures."
      },
      {
            cardAño: "Lara del 2010",
            cardTitle: "Lara Croft",
            cardFoto: Lara02,
            cardParrafo: "This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures."   
      },
      {
            cardAño: "Lara del 2000",
            cardTitle: "Lara Croft",
            cardFoto: Lara03,
            cardParrafo: "This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures."
      },
      {
            cardAño: "Lara del 1990",
            cardTitle: "Lara Croft",
            cardFoto: 'Lara04',
            cardParrafo: "This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures."
      }

];



const App = ()=> {
  return (
    <div>
      {cards.map(card => {
      return(<Card key={card.cardTitle}
                  cardAño={cards.cardAño}
                  cardTitle={cards.cardTitle}
                  cardFoto={cards.cardFoto}
                  cardParrafo={cards.cardParrafo}></Card>); 
      })}

      </div>
  );
}

export default App;
