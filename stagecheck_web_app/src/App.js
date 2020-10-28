import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Banner from './components/Banner';
import Home from './components/Home';
import InternshipList from './components/InternshipList';
import Internship from './components/Internship';
import AddInternshipForm from './components/AddInternshipForm';
import UpdateInternshipForm from './components/UpdateInternshipForm';

function App() {
  return (
    <div>
      <Router>
        <Banner />
        <Route exact path="/" component={Home} />
        <Route path="/internships" component={InternshipList} />
        <Route path="/internships/:id" component={Internship} />
        <Route path="/add" component={AddInternshipForm} />
        <Route path="/update/:id" component={UpdateInternshipForm} />
      </Router>
    </div>
  );
}

export default App;
