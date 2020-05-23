import React, { Component } from "react";
import Header from "./components/Header";
import "./bootstrap.min.css";
import "./components/font-awesome.css";
import "./style.css";
import axios from "axios";
import ImageList from "./components/imageList";

class App extends Component {
  state = { images: [] };
  onSearch = async (text) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: text },
      headers: {
        Authorization: "Client-ID WyXw0itWxzGINgtUnADsLyuspo6BgYpYAGIEAfD5oR8",
      },
    });
    this.setState({ images: response.data.results });
  };

  componentDidMount() {
    this.onSearch("Students");
  }
  render() {
    return (
      <div>
        <Header onSearch={this.onSearch} />
        <div className="conainer">
          <div className="row">
            <ImageList images={this.state.images} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
