import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "thank you next", duration: "3:30" },
    { title: "Macarena", duration: "2:30" },
    { title: "All start", duration: "3:15" },
    { title: "I want it that way", duration: "1:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
