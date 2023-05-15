import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Intro from './Intro';
import Contact from './Contact';

function App() {
  const title_ = '박재하의 포트폴리오';
  return (
    <div className="App">
      <Header />
      <div className="list">
        <h4 className="font-bold">{title_}</h4>
        <p>5월 15일 (월) 발행</p>
      </div>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={<Home />}></Route>
          <Route path={"/home"} element={<Home />}></Route>
          <Route path={"/intro"} element={<Intro />}></Route>
          <Route path={"/contact"} element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
