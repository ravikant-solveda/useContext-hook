import logo from './logo.svg';
import './App.css';
import FirstApp from './components/FirstApp';
import SecondApp from './components/SecondApp';
import context from './components/context/MyContext';
import { useState } from 'react';
import Header from './components/navigation/Header';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import About from './components/normal/About';
import Home from './components/normal/Home';
import Faq from './components/normal/Faq';
import Contact from './components/normal/Contact';
import ThemeContextProvider from './components/context/ThemeContextProvider';
import PresentScore from './components/normal/PresentScore';

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContextProvider>
      <Header/>
      <button onClick={()=>setTheme(!theme)}>Click me to change the theme</button>
      <FirstApp/>
      <SecondApp/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/> }/>
          <Route exact path='about' element={<About/> }/>
          <Route exact path='contact' element={<Contact/> }/>
          <Route exact path='faq' element={<Faq/> }/>
          <Route exact path='presentScore' element={<PresentScore/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;

