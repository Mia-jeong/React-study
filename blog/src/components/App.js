import React from "react";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default App;

//General Data Loading with Redux
/* 
1.Component gets rendered onto the screen
2.Components 'componentDidMount lifycycle method gets called'
3.we call action creator from 'comdponentDidMount'                            

Componens are generally responsible for fetching data they need by calling an action creator 

4.Action creator runs code to make an API request
5.API responds with data
6.Action creator returns an 'action' with the fetched data on the 'payload' property

Action creators are responsible for making API request 
(This is where Redux-Thunk comes into play )

7.Some reducer sees the actions returns the data off the 'payload'
8.Becaue we generated some new state object, redux/react-redux cause our React app to be rerendered

We get fetched data into a component by generating new state in our rdux store, then getting that into our component through mapStateToProps














*/
