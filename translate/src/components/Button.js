import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  //1. you have to name it contextType!
  //reference contextType to Context Object t to component class
  //static contextType = LanguageContext;

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "제출")}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    //const text = this.context === "english" ? "Submit" : "제출";
    //return <button className="ui button primary">{text}</button>;

    //why we use Consumer instead of using ContextType
    //1.  we will make use of consumer any time that we want to get information out of
    //multiple different context objects inside of a single component
    //2. context type property is only used any time we are accessing a single context object inside a component.

    //consumer only return function
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
//Button.contextType = LaguageContext; == static contextType = LanguageContext;

export default Button;
