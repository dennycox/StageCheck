import React from 'react';
import './App.css';
import Banner from './components/Banner';
import InternshipList from './components/InternshipList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
