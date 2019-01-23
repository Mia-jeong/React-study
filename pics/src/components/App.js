import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {
  state = { images: [] };

  //to bind value of this correctly change it to arrow function
  onSearchSubmit = async term => {
    //Request made to unsplash API
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    /* .then(response => {
        //request complete
        console.log(response.data.results);
      }); */
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

//when you pass in properties or callbacks to components that you and I we can call them anything that we want
// so you can write onSubmit as Something you want like runSubmit

//there are two library to request Network in React
// 1. axio > 3rd party package   --it's better
// 2. fetch > function built into modern browsers

export default App;
