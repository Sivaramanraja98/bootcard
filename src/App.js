import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import cardsData from './CardData.js';
import Card from './Card'; 
import Header from './Header.js';


function App() {
  return (
    <div className="App">
    <Header/>
    <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {cardsData.map((object, index) => (
            <Card key={index} Data ={object}/>
            ))}
          </div>
        </div>
    </section>
  </div>
  );
}

export default App;
