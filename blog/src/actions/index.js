import jsonPlaceholder from "../apis/jsonPlaceholder";

/*
export const fetchPosts = async () => {
  //Bad approach!! break the rule of actionCreator
  const response = await jsonPlaceholder.get("/posts");

  //it looks like returning object but in 2015ES it's not , Cuz we have async and await function
  return {
    type: "FETCH_POSTS",
    payload: response
  };
};

*/
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response });
};

//Totally fine (you can still make normal action creator (return object ))
export const selectPost = () => {
  return {
    type: "SELECT_POST"
  };
};

/* 
What's wrong with 'fetchPosts'>

1. Action creators must return plain JS objects with a type property. we are not
2. By the time our action gets to a reducer , we won't have fetched our data!

*/

/* if without async and await it's going to have no data
TIME
|    Action creator called                  Request made to typicode API
|    Action returned
|    Action sent to all reducers
|    Reducers run
|    X Data Not here! X
|
|
|
|                                                  We get response!


   it's much faster than request data to ouside of API



*/

/*

Synchronous action creator : Instantly returns an action with data ready to go
Asynchronous action creator : Takes some amount of time for it to get its data ready to go


Redux cycle
ActionCreator > Action > dispatch > 'Middleware' > reducers > State

Middle ware in Redux

1.Function that gets called with every action we dipatch
2.Has the ability to STOP, MODIFY or otherwise mess around with actions
3.Tons of open source middleware exist
4.Most popular use of middleware is for dealing with async actions
5.We are going to use a middleware called 'Redux-Thunk' to solve our async issues


normal rules
1.AcionCreators must return action objects
2. Actions must have a type property
3. Actions can optionally have a 'payload'


Rules with Rdux Thunk
1. Aciton Creators can return action Objects Or Action Creators can return functions
2. if an action object gets returned it must have a type
3. If an action object gets returned it can optionally have a 'payload'
*/
