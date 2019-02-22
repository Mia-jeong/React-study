import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer mordals visible active">
      <div
        className="ui standard modal visible active"
        onClick={e => e.stopPropagation()}
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

/*
Now the only time that you're going to want to create a portal is anytime that you are doing something

like say creating a modal obvious case or any time that you are trying to render some re-act component

into some HTML that was not created by your application or by your re-act application to be more specific.

The most common case in which you will use something like create portal in that in that type of scenario

is if you're trying to introduce re-act into a server side rendered application maybe like a Java application

that renders HTML on the back end or maybe a Ruby on Rails application or Django or something like that.

*/
