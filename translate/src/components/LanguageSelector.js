import React from "react";
import LanguageContext from "../contexts/LanguageContext";
class LanguageSelect extends React.Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag kr"
          onClick={() => this.context.onLanguageChange("korean")}
        />
      </div>
    );
  }
}

export default LanguageSelect;
