import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //console.log(this.imageRef.current.clientHeight); it returns 0, because it's invoked before image has downloaded
    this.imageRef.current.addEventListener("load", this.setSpans); // so, we should put eventListener to make sure the image is loaded to get exact height of it
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

//Let the ImageCard render itself and its image
//Reach into the DOM and figure out the height of the image
//Set the image height on state to get the component to rerender
//When rerendering, assing a 'grid-row-end' to make sure the image takes up the appropriate space

/** React Refs
 *
 *  Gives access to a single DOM element
 *  We create refs in the contructor, assign them to instance variables, then pass to a particular JSX element as props
 *
 */
