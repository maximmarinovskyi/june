import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, RouteLink } from 'react-router-dom';

import Max from './Max';
import Olga from './Olga';
import Fam from './Fam';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">

          <ul>
            <li><a href="/Max">Max page</a></li>
            <li><a href="/Olga">Olga page</a></li>
            <li><a href="/Fam">Fam page</a></li>

          </ul>

          <Routes>
            <Route exact path="/Max" element={<Max />} />
            <Route exact path="/Olga" element={<Olga />} />
            <Route exact path="/Fam" element={<Fam />} />
          </Routes>

        </div>
      </Router>
    );
  }
}
export default App;
