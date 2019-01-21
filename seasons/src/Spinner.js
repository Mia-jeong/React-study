import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//if props.value is undefined or null, it will show up on screen
Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
