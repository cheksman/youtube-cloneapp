import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video }) => {

    

    return (
        <Grid item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'center' }}>
                <img src={video.snippet.thumbnails.medium.url} alt='thumbnail' style={{marginRight: '20px'}} />
                <Typography variant='subtitle1'> {video.snippet.title} </Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;