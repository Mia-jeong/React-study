export default (state = [], action) => {
  //bad! not to reach out of itself, it should be pure reducers
  //return document.querySelector('input;);
  //return axios.get('posts')

  //bad!
  /* when it coums to array and object
  state[0] = 'Sam'
  state.push('ahah')
  state.pop()
  state.name = 'sam'
  any mutation is bad approach
  
  String and numbers are inmutable values
  */

  //good
  //return state + action

  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state;
  }
};
