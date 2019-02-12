import React from "react";
import { signIn, signOut } from "../actions";
import { connect } from "react-redux";

class GoogleAuth extends React.Component {
  componentDidMount() {
    //initialize API
    window.gapi.load("client:auth2", () => {
      //callBack function

      window.gapi.client
        .init({
          clientId:
            "244032042815-f6577lg79s65j4oqjfvo1v054kjsiqlf.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          //this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    //console.log("onAuthChange", isSignedIn);
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      //console.log("signIn working", this.props.isSignedIn);
    } else {
      this.props.signOut();
      //console.log("signOut working", this.props.isSignedIn);
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
    //console.log("sign In", this.props.isSignedIn);
  };

  onSignOutClick = () => {
    this.auth.signOut();
    //console.log("sign out", this.props.isSignedIn);
  };
  renderAuthButton() {
    //console.log("button", this.props.isSignedIn);
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);

/*
Auth Component

Get a reference to the 'auth' object after it is initialized
Figure out if the user is currently signed in
Print their authentication status on the screen


*/
