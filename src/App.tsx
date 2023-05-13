import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navigation';
import { About } from './components/About';
import { Main } from './components/Main';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Navbar/>

      <Router>
        <Routes>
          <Route path='/*' element={<Main />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
