import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    //it's better being independent
  }

  onSubmit = formValues => {
    console.log("edit formValue", formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    //console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    //first curly braces: we're using java script express
    //seconde cruly braces : we're using object

    //you should pass initailValues that only you want to change to reducForm
    return (
      <div>
        <h3>Edit Steram</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
