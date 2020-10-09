import React from 'react';
import './App.css';
import AddInternshipForm from './components/AddInternshipForm';
import Banner from './components/Banner';
import Internship from './components/Internship';
import InternshipList from './components/InternshipList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
          <Banner />
            <Switch>
              <Route path="/stages">
                <InternshipList />
              </Route>
              <Route path="/"></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
