import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className="ui container">
      <UserList />
      <div>
        <button
          className="ui button primary"
          onClick={() => setResource("posts")}
        >
          Posts
        </button>
        <button
          className="ui button primary"
          onClick={() => setResource("todos")}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

/* 
Name                Goal
useState            Allow a functional component to use component-level state
useEffect           Allow a functional component to use 'lifecycle methods'
useContext          Allow a functional component to use the context system
useRef              Allow a functional component to use the ref System
useReducer          Allow a functional component to store data through a 'reducer'


*/
export default App;
