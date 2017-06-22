import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyAlNZA5h7W2qFv3rHj6U_Qa2eBerX427s4';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []}
    YTSearch({key: API_KEY, term: 'dbanj'}, (videos) => {
      this.setState({ videos });
    })
  }


  

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos = {this.state.videos} />
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.querySelector('.container'))

9