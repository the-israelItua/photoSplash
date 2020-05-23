import React, { Component } from "react";
import SearchBar from "./SearchBar";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid header">
        <div className="row">
          <div className="col-md-12">
            <h1 className=" text-center">
              Find Amazing free Images from the Unsplash API for your projects
            </h1>
          </div>
        </div>
        <SearchBar onSearch={this.props.onSearch} />
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">
              Enter a keyword for images you want and click the search button.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
