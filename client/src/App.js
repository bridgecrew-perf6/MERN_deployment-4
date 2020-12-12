import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router,Link } from '@reach/router';
import UpdateRes from './Components/updateRes';
import DisplayRes from './Components/allRes';
import AddRes from './Components/newRes';
import ReviewRes from './Components/resReview';

function App() {
  return (
    <div className="container" >
      <Link to="/" className="btn btn-outline-info" >View All Restaurants</Link>
      <Link to="/new" className="btn btn-outline-info" >Add A New Restaurant</Link>
      <Router >
        <DisplayRes path="/" />
        <AddRes path="/new"/>
        <UpdateRes path="/edit/:_id"/>
        <ReviewRes path="/view/:_id"/>
      </Router>
    </div>
  );
}

export default App;

