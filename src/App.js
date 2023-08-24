import './style.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;