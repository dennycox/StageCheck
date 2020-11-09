import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navbar from './components/Banner';
import Home from './pages/Home';
import InternshipList from './pages/InternshipList';
import InternshipDetails from './pages/InternshipDetails';
import AddInternship from './pages/AddInternship';
import UpdateInternship from './pages/UpdateInternship';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [globalInternships] = useState([]);

  return (
    <div>
      <Router>
        <Navbar internships={globalInternships} />
        <Route exact path="/" component={Home} />
        <Route path="/internships" component={InternshipList()} internships={globalInternships} />
        <Route path="/details/:id" component={InternshipDetails} />
        <Route path="/add" component={AddInternship} />
        <Route path="/update/:id" component={UpdateInternship} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
