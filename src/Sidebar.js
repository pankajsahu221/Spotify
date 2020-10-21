import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ playlists }, dispatch] = useStateValue();
    console.log("user's playlists - ", playlists); 

    return (
        <div className="sidebar">
           <img className="sidebar__logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt=""/>

           <SidebarOption Icon={HomeIcon} title="Home" />
           <SidebarOption Icon={SearchIcon} title="Search" />
           <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
           
           <br />
           <strong className="sidebar__title">PLAYLISTS</strong>
           <hr />

           
           <SidebarOption Icon={AddIcon} title="Create Playlist" />
           <SidebarOption Icon={FavoriteIcon} title="Liked Songs" />
           <hr />

           { playlists?.items?.map( (playlist) => {
               return <SidebarOption  title={playlist.name} />
           })}
            
           {/* <SidebarOption  title="Hip Hop ou ljfaljf jlajf ljflajlfl jafl" /> 
           <SidebarOption  title="Jazz" />  */}

        </div>
    )
}

export default Sidebar
