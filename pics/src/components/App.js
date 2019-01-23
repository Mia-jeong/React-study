import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  async onSearchSubmit(term) {
    //Request made to unsplash API
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID "
      }
    });
    /* .then(response => {
        //request complete
        console.log(response.data.results);
      }); */
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found : {this.state.images.length} images
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
