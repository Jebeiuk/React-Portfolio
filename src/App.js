import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import React from 'react'


const App = () => {
    return ( 
        <div className="App">
            <NavBar/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>   
    );
};
 
export default App;