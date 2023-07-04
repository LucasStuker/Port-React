
import './App.css';
import Footer from './components/sections/Footer';
import Navbar from './components/sections/Navbar';
import Presentation from './components/sections/Presentation';
import Skills from './components/sections/Skills';
import Projects from './components/sections/projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
