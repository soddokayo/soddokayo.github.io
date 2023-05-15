import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [comp, setComp] = useState();
  return (
    <div className="App">
      <Header setComp={setComp}/>
      <div>
        <div children={comp}></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
