import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Events from './components/Events'
import About from './components/About'
import Join from './components/JoinCommunity';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HeadlineCards />
            {/* <Category /> */}
          </>
        } />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <ChatBot /> {/* Add the ChatBot component here, outside of Routes */}
      <Footer />
    </Router>
  );
}

export default App;