import React from 'react'
import './Footer.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
              <img className="footer__albumLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbCb6o4sNNyYm1o8hH2hEgec48zWASaPjAJw&usqp=CAU" alt=""/>
                <div className="footer__songInfo">
                    <p>Fav Song</p>
                    <p>User unknown</p>
                </div>
            </div>

            <div className="footer__center">
              <div className="footer__center__content">
              
                 <ShuffleIcon className="footer__green"/>
                 <SkipPreviousIcon className="footer__icon"/>
                 <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                 <SkipNextIcon className="footer__icon"/>
                 <RepeatIcon className="footer__green"/>
              
              </div>
            </div>

            <div className="footer__right">
              <div className="footer__right__content">
                <Grid container spacing={2}>
                      <Grid item>
                          <PlaylistPlayIcon />
                      </Grid>
                      <Grid item>
                          <VolumeDownIcon />
                      </Grid>
                      <Grid item xs>
                          <Slider />
                      </Grid>
                </Grid>
              
              </div>
            </div>

        </div>
    )
}

export default Footer
