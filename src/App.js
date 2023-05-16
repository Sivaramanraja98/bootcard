import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Header from './Header';
import './Card.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <section class="pricing py-5">
          <div class="container">
            <div class="row">
              <Card1/>
             <Card2/>
             <Card3/>   
            </div>
          </div>
      </section>
 
  
    </div>
  );
}

export default App;