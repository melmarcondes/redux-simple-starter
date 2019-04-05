import  _ from 'lodash';

import React, {Component} from 'react';

import YTSearch from 'youtube-api-search'
import VideoSearchBar from './video/video_search_bar';
import VideoList from './video/video_list';
import VideoDetail from './video/video_detail';

import BookList from '../containers/book/book_list';
import BookDetail from "../containers/book/book_detail";

import WeatherSearchBar from '../containers/weather/weather_search_bar';
import WeatherList from '../containers/weather/weather_list';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('brazil');
    }

    videoSearch(term){
        YTSearch({key: 'AIzaSyClPXlyhLXsI1ylH4El_dz_7dudIG8QOXE', term: term}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0] //primeiro video da lista como default
            })
        });
    }



    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <br/>
                <div className='row'>
                    <h1 align='center'>Videos</h1><br/>
                    <VideoSearchBar onSearchTermChange={videoSearch}/>
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos}/>
                </div>
                <br/><hr/><br/>
                <div className='row'>
                    <h1 align='center'>Books</h1><br/>
                    <BookList/>
                    <BookDetail/>
                </div>
                <br/><hr/><br/>
                <div className='row'>
                    <h1 align='center'>Germany - Weather Forecast</h1><br/>
                    <WeatherSearchBar/>
                    <WeatherList/>
                </div>
                <br/>
            </div>
        );
    }
}