import React from "react";
import { selectSong } from "../actions"; //import index.js inside of actions folder, if you import named Statement you should put bracket together
import SongList from "./SongList";
import SongDetail from "./SongDetail";
//Files related to components
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
