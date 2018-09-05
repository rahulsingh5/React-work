import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const YOUTUBE_API_KEY = '';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('react');
	}

	videoSearch(term) {
		YTSearch({ key: YOUTUBE_API_KEY, term: term }, (videos) => {
			this.setState({ videos, selectedVideo: videos[0] });
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {
			this.videoSearch(term);
		}, 3000);
 
		return (
			<div>
				<SearchBar onSearchTermChanged={(term) => videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				{/*  passing props to video list component i.e its an input value */}
				<VideoList
					onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
