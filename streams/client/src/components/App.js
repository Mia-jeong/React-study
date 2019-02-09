import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne BAD!! use Link tag instead of a tag.
      <Link to="/pagetwo"> Navigate to Pagetwo</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <Link to="/"> Navigate to PageOne</Link>
      PageTwo<button>Click Me!</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

//exact  == exact = {true}
//npm install --save react-router-dom
