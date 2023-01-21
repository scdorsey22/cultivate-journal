
import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes, Switch, useHistory } from "react-router-dom";
import JournalEntry from './components/JournalEntry';


function App() {
  return (

    <div>
      <Header />
      <Routes>
        <Route path='/' element={<JournalEntry />}></Route>
      </Routes>
    </div>
  );
}

export default App;
