import './App.css';
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Blogs from './containers/Blogs'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <About/>
      <Projects/>
      <Resume/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
