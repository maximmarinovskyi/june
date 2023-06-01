import React from 'react';
import { BrowserRouter as Router, Routes, Route, RouteLink } from 'react-router-dom';
import "./Fam.css"

class Fam extends React.Component {
  render() {
    return (
      <div className="Fam">
        <ul>
          <li><a href="#">Maxim</a></li>
          <li><a href="#">Olga</a></li>
          <li><a href="#">Maria</a></li>
          <li><a href="#">Andrei</a></li>

        </ul>


      </div>
    );
  }
}
export default Fam;
