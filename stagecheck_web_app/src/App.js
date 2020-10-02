import React from 'react';
import './App.css';
import Banner from "./components/Banner";
import Internship from './components/Internship';
import InternshipList from './components/InternshipList';

function App() {
  return (
    <div>
        <Banner />
        <Internship />
        <InternshipList />
    </div>
  );
}

export default App;
