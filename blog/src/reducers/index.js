import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

export default combineReducers({
  posts: postsReducer
});

//Rules of reducers
/* 
1.Must return any value besides 'undefined'
2.Produces 'state' or data to be used inside of your app using only previous state and the action 
3.Must not return reach 'out of itself' to decide what value to return (reducers are pure)
4.Nust not mutate its input 'state' argument  >> It might be misleading 
(Just kidding! you can mutatie it all day and not see any errors!
  
  Its easier to tell beginners 'dont mustate state ever' than to tell them when they can and can't  for corner case
https://github.com/reduxjs/redux/ > src > combineReducer.js > hasChanged function 

The reason we say this is that if you accidentally return the same value that is pumped into your reducer
liek even if you change it even if we modify this thing right here if we eventually say return state
at the very bottom and it;s still the same object of the same array e it modifiend or not
redux is going to say no difference here is , the same object or array in memory 
nothing has changed so we have done absolutely no updates to any data insdie of our application 

so  we're stick to convention



the way not to mutate data 
                                                  BAD                             GOOD
1. Removing an element from an array          state.pop()                     state.filter(element => element !== 'hi')
2. Adding an elelment to an array            state.push()                     [...state, 'hi']
3. Replacing an element in an array         state[0] = 'hi'                   state.map(el => el ==='hi'?'bye':el)

4. Updating a property in an object         state.name = 'Sam'                 {...state, name:'Sam'}
5. Adding a property to an object           state.age = 20                     {...state, age: 30}
6. Removing a property from an object       delete state.name                 {...state, age:undefined}
                                                                              _.omit(state, 'age')      >https://lodash.com/docs/4.17.11

*/
