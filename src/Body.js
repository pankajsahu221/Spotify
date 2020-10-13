import React from 'react'
import './Body.css';
import Header from './Header';
import { useStateValue } from './StateProvider';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow';

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useStateValue();

    // discover_weekly img = "https://cdn.playlists.net/images/playlists/image/large/c41a781dd2d5d93470842ee1b66040f9.jpg"

    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="" />
                {/* <img src={"https://cdn.playlists.net/images/playlists/image/large/c41a781dd2d5d93470842ee1b66040f9.jpg"} alt="" /> */}
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                    {/* <p>This is the great playlist</p> */}
                </div>
            </div>

            <div className="body__songs">
               <div className="body__icons">
                  <PlayCircleFilledIcon className="body__shuffle"/>
                  <FavoriteIcon fontSize="large" className="body__heart"/>
                  <MoreHorizIcon className="body__option"/>
               </div>
               
               
               {/*SONG LISTS  */}
               {discover_weekly?.tracks.items.map((item) => (
                   <SongRow track={item.track} />
                ))}

            </div>
        </div>
    )
}

export default Body
