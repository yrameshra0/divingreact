import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './youtube_page/search_bar';
import VideoList from './youtube_page/video_list';
import YTSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyCNGp-hXwNcwPe0rusuvBr6Vdy4OhqwWk8';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({
            key: YOUTUBE_API_KEY,
            term: 'surfboards'
        }, videos => this.setState({
            videos
        }));
    }

    render() {
        return (
            <div> 
    		<SearchBar />
    		<VideoList videos={this.state.videos} />
     	</div>
            );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));