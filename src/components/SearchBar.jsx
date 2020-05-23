import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    text: "",
  };

  onInputChange = (evt) => {
    this.setState({ text: evt.target.value });
  };

  onSearchBtnClick = () => {
    this.props.onSearch(this.state.text);
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Search"
                className="form-control"
                aria-label="search"
                aria-describedby="addOn"
                value={this.state.text}
                onChange={this.onInputChange}
              />
              <div
                className="input-group-append"
                onClick={this.onSearchBtnClick}
              >
                <span className="input-group-text" id="addOn">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
