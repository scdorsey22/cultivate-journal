
import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import JournalEntry from './components/JournalEntry';
import Entries from './components/Entries';


function App() {
  return (

    <div>
      <Header />
      <Routes>
        <Route path='/' element={<JournalEntry />}></Route>
        <Route path='/entries' element={<Entries />}></Route>
      </Routes>
    </div>
  );
}

export default App;
