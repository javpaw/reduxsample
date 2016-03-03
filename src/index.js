import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import credentials from './google_credentials';

const API_KEY = credentials.youtube;

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({ key: API_KEY, term: 'hello'}, (videos) =>{
			this.setState( {
				videos: videos,
				selectedVideo: videos[0]  
			} )
		});
	}

	render() {
		return (
			<div>
				<SearchBar/>
				<VideoDetail video = { this.state.selectedVideo }  />
				<VideoList
					onVideoSelection ={ selectedVideo => this.setState({ selectedVideo }) }
					videos = { this.state.videos } />
			</div>
		)
	}
}


ReactDOM.render(<App/>, document.querySelector('.container'));