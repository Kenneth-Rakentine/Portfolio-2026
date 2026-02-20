import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Name from './components/Name';
import Logo from './pages/Logo';
import BoxLogo from './components/BoxLogo';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import About from './pages/About';
import Links from './pages/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='masterContainer'>
        <header className='siteHeader'>
          <BoxLogo />
          <Nav />
          <Links />
        </header>
        <Name />
        <main className='mainContent'>
          <Routes>
            <Route path="/"        element={<Logo />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/resume"  element={<Resume />} />
            <Route path="/links"   element={<Links />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about"   element={<About />} />
            <Route path="*"        element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
