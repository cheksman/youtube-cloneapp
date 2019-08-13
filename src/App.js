import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList } from './components';


class App extends React.Component {
    state = {
        videos: [],
        selectedVideos: null,
    }
    
    componentDidMount() {
        this.handleSubmit('best isekai anime')
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyAVzkUHkCjT3F7hj6rKV_iqKbQxO59mEL4',
                q: searchTerm
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideos: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideos: video
        })
    }

    render() {
        const { videos, selectedVideos } = this.state;

        return (
            <Grid justify='center' container spacing={10} style={{ backgroundColor:'#333333' }}>
                <Grid item xs={10} style={{ backgroundColor: '#333333' }}>
                    <Grid container spacing={10}>
                        <Grid item xs={12} style={{ backgroundColor: '#333333' }}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8} style={{ backgroundColor: '#333333' }}>
                            <VideoDetail video={selectedVideos} />
                        </Grid>
                        <Grid item xs={4} style={{ backgroundColor: '#333333' }}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;