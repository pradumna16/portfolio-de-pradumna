import logo from './logo.svg';
import './App.css';
import Home from './component/Home.js'
import Projects from './component/Projects.js'
import Skills from './component/Skills.js'
import Testimonials from './component/Testimonials.js'
import Contact from './component/Contact.js'
import Navbar from './component/Navbar.js'


function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
       <Home/>
       <Projects/>
       <Skills/>
       <Testimonials/>
       <Contact/>
       <Navbar/>

    </div>
  );
}

export default App;
