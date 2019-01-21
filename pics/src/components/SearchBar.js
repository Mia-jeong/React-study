import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  inInputClick() {
    console.log("input was clicked");
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label> Image Search </label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }

  // if i put this.onInputChange() with parenthesis, it's going to be called automatically when SearchBar is rendered
}

export default SearchBar;
