import React, { useState, useEffect } from "react";
import axios from "axios";

/*
class ResourceList extends React.Component {
  state = { resources: [] };
  async componentDidMount() {
    //console.log(this.props.resource);
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {
    //console.log(prevProps);
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/${this.props.resource}`
      );

      this.setState({ resources: response.data });
    }
  }
  render() {
    return <div>{this.state.resources.length}</div>;
  }
}
*/

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  //1.if we not pass the seconcd array([resource]), the arrow function is going to call forever
  //2.if we pass empty array down to second parameter, the arrow function is jua-st going to call one time(the first time it's invocked) == componentDidMount
  //3.if we pass same value except Object down to second parameter , the arrow function is just going to call one time(the first time it's invocked) == componentDidMount
  //4.if we pass same value except Object down to second parameter,  the arrow function is going to call each time when it's changed  == componentDidUpdate

  //if we want to use async function, we should return it as second function
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);
  //or you can use IIEF
  /*
  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(response.data);
    })(resource);
  }, [resource]);
*/
  return (
    <ul className="ui list">
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
