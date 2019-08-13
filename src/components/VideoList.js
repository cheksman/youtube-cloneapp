import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';


const VideoList = ({ videos, onVideoSelect }) => {

    const listOfVideos = videos.map((video, index) => {
        return (
            <Grid item xs={12} key={index} >
                <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(video)}>
                    <img
                        src={video.snippet.thumbnails.medium.url}
                        alt='thumbnail'
                        style={{ marginRight: '20px' }}
                        height='50%'
                        width='50%'
                    />
                    <Typography variant='subtitle1'> {video.snippet.title} </Typography>
                </Paper>
            </Grid>
         )
    }
    )

    return (
        <Grid container spacing={2}>
            {listOfVideos }
        </Grid>
        
    );
}
export default VideoList;