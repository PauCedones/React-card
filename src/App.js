import React from 'react';
import './App.css';
import Card from './componentes/playingcard/card.js';
import Lara01 from './componentes/playingcard/img/tomb-raider.jpg';
import Lara02 from './componentes/playingcard/img/lara02.jpg';
import Lara03 from './componentes/playingcard/img/lara03.jpg';
import Lara04 from './componentes/playingcard/img/lara04.jpg';

const App = ()=> {
  return (
    <div>
      <Card cardImage={Lara01}
            cardSubTitle="Lara del 2018"></Card> 
      <Card cardImage={Lara02}
            cardSubTitle="Lara del 2010"></Card> 
      <Card cardImage={Lara03}
            cardSubTitle="Lara del 2000"></Card> 
      <Card cardImage={Lara04}
            cardSubTitle="Lara del 1990"></Card> 
    </div>
  );
}

export default App;
