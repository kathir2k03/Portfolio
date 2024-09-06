
import './App.css';
import About from './components/About';
import {Header} from './components/Header';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div>
     <Header/>
     <Hero/>
     <About/>
     <Projects/>
     <Resume/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
