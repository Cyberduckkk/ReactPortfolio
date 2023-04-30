import './App.css';
import {Routes , Route} from 'react-router-dom'
import Nav from './Pages/Navbar/Nav';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Services from './Pages/Services/Services';
import Skills from './Pages/Skills/Skills';
import Footer from './Pages/Footer/Footer';
import AnimCursor from './Pages/AnimCursor/AnimCursor.';
import Header from './Pages/Header/Banner';
function App() {
  return (
    <>
    <AnimCursor/>
    <Nav/>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/Designs' element={<Projects/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact me' element={<Footer/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
