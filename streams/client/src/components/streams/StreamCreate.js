import React from "react";
import { Field, reduxForm } from "redux-form";

//Field : component which shows on the screen
//reduxFrom : function exactly the same as the connect function
class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    //console.log(meta); //you can see the error message which error object have same prop as name of Field. error object is passed down to renderInput method
    /*
    return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
    */
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    //event.preventDefault(); handleSubmit automatically take event value and  do it for us
    //console.log("value", formValues);
  }
  render() {
    //console.log(this.props);
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Titile" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const error = {};
  if (!formValues.title) {
    // only ran if the user did not enter title
    error.title = "You must enter a title";
  }

  if (!formValues.description) {
    error.description = "You must eneter a description";
  }
  return error;
};

export default reduxForm({
  form: "streamCreate", //name of this form
  validate
})(StreamCreate);
