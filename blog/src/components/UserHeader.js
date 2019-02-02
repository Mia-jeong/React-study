import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div>{user.name}</div>;
  }
}

//to make it more reusable, bind the Exact user in mapStateToProps.
//you're going to have it in separate file in the future to use it in multiple components

//props only can be acceced to Components
//that's why I pass another arguments(OwnProps) to mapStateToProps
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
