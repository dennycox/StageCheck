import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import InternshipList from './pages/InternshipList';
import InternshipDetails from './pages/InternshipDetails';
import AddInternship from './pages/AddInternship';
import UpdateInternship from './pages/UpdateInternship';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/internships" component={InternshipList} />
        <Route path="/details/:id" component={InternshipDetails} />
        <Route path="/add" component={AddInternship} />
        <Route path="/update/:id" component={UpdateInternship} />
      </Router>
    </div>
  );
}

export default App;
