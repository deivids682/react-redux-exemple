import { combineReducers } from "redux";

const songsRedcuer = () => {
  return [
    { title: "No Srubs", duration: "4:05" },
    { title: "Macakrena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I want it That Why", duration: "1:45" },
  ];
};

const initState = { title: "No Srubs", duration: "4:05" };

const selectedSongReducer = (selectedSong = initState, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsRedcuer,
  selectedSong: selectedSongReducer,
});
