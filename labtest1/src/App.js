import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/notes/:id" element={<NoteEditor />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;