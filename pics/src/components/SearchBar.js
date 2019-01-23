import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(event) {
    console.log(event.target.value);
  }

  inInputClick() {
    console.log("input was clicked");
  }

  onFormSubmit = event => {
    event.preventDefault();

    //to get access to the callback that was passed from app down to our search bar we would reference this.props
    this.props.onSubmit(this.state.term);
  };

  //onFormSubmit (event) {
  //  event.preventDefault();

  // console.log(this.state.term);
  //};
  //e) => this.onFormSubmit(e)
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Image Search </label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }

  // if i put this.onInputChange() with parenthesis, it's going to be called automatically when SearchBar is rendered,
  // so if you want to call it after it's rendered, you should put it without parenthesis like this.onInpuchange
  // if you just put one single line for onChange it's better for you to write it out like  <input type="text" onChange={e => console.log(e.target.value)} />

  // FLOW

  // 1. User typed in input
  // 2. Callback gets invoked
  // 3. We call setState with the new value
  // 4. Component rerenders
  // 5. input is told what its value is (coming from state)

  // Controlled and UnControlled Elements : value={this.state.term}
  // The key idea is that we are storing our information inside of our components on our state property as opposed to storing information inside of DOM
}

export default SearchBar;
