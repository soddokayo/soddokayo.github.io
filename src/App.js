//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';

function App() {
  const [memo, setMemo] = useState([]);
  useEffect(() => {
      const fetchMemo = async () => {
          const res = await axios.get('http://localhost:3000/api/memo');
          return res.data;
      }
      fetchMemo().then(res => setMemo(res));
  }, []);

  const [comp, setComp] = useState(Intro);
  return (
    <div className="App">
      <Header setComp={setComp} memo={memo}/>
      <div>
        <div children={comp}></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
