import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

//Rules of state
//1. only usuable with class components
//2. You will confuse props with state
//3. 'State' is a JS object that contains data relevant to a component
//4. Updating 'state' on a component causes the component to (almost) instantly rerender
//5. State must be initialized when a component is created
//6. State can only be updated using the function 'setState'
class App extends React.Component {
  //belongs to javascript

  // ****** the first way to initialize State
  //  constructor(props) {
  //    super(props); //call the parent construction function

  // This is the only time we do direct assignment to this.state
  //    this.state = { lat: null, errorMessage: "" };
  //  }

  //*******the other way to initialize State
  // babel.js makes this code exactly same as the one inside of Constructor
  state = { lat: null, errorMessage: "" };
  //Good place to do data-loading
  //it is recommended to load initial datas on componentDidmount more than constructor
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  //helper method : to wrap up the result
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />; //when state is updated, SeasonDisplay is also updated i mean rerendered
    }

    return <Spinner message="Please accept location request" />;
  }

  //Good place to do more dataloading when state/props change >componentDidUpdate
  //good place to do cleanup  >componentwillUnmount

  //React says we have to define render!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
