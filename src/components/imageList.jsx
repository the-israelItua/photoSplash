import React, { Component } from "react";

class ImageList extends Component {
  render() {
    const imgComp = this.props.images.map((image) => {
      return (
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={image.urls.regular}
              alt="Loading"
              className="card-img-top"
            />
          </div>
        </div>
      );
    });

    return imgComp;
  }
}

export default ImageList;
