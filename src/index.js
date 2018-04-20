import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import * as _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

import * as API_KEY from '../API_KEY';

// component
// class component - when we want to have state
// function component (const instead of class) - no state
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('react js');
    }

    render() {
        const videoSearch = _.debounce((term) => this.videoSearch(term), 500);

        return (
            <div>
                <h1>React Hello World App!</h1>
                <SearchBar
                    onSearch={term => videoSearch(term)} />
                <hr/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }

    videoSearch(term) {
        YTSearch({key: API_KEY.API_KEY_YT, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }
}


ReactDOM.render(<App/>, document.querySelector('.container-fluid'));