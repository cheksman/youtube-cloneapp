import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {

    if (!video) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }

    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant='h6' ><strong>{video.snippet.title}</strong> - {video.snippet.channelTitle}</Typography>
                <Typography variant='subtitle2' > Published on: {video.snippet.publishedAt}</Typography>
            </Paper>
            <Paper elevation={4} style={{padding: '10px'}}>
                <Typography variant='subtitle2' >{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail;