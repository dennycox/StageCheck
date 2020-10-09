import React from 'react';
import './App.css';
import AddInternshipForm from './components/AddInternshipForm';
import Banner from "./components/Banner";
import Internship from './components/Internship';
import InternshipList from './components/InternshipList';

function App() {
  return (
    <div>
        <Banner />
        <div className="container">
          <div className="row pt-5">
            <div className="col">
              <InternshipList />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
