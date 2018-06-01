import * as React from 'react';
import './index.css';

class ImageComponent extends React.Component<{},{}> {
  constructor(props) {
    super(props);
  }
  render() {
    const { steps, publishBtnProps } = this.props;
    console.log(this.props, "ImageComponents");
    return (
      <div className="b-image-container" steps={[
        (name) => <div>Holaaa soy {name} 1</div>,
        (name) => <div>Holaaa soy array 1</div>
      ]}>
				<span>{this.props.logo}</span>
			</div>
    );
  }
}

export default ImageComponent;
