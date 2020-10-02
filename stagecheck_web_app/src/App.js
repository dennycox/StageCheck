import React from 'react';
import './App.css';
import Banner from "./components/Banner";
import Internship from './components/Internship';
import InternshipList from './components/InternshipList';

function App() {
  return (
    <div>
        <Banner />
        <div class="container">
          <div class="row pt-3">
            <div class="col">
              <InternshipList />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
