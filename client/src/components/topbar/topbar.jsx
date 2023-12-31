import React, { useContext } from 'react'
import {Search, Person, Chat, Notifications} from '@material-ui/icons'
import {Link} from "react-router-dom"
import "./topbar.css"
import { AuthContext } from '../../context/AuthContext';

export default function Topbar() {
  const{user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <Link to="/" style={{textDecoration:"none"}}>
            <span className='logo'>BeSocial</span>
            </Link>
              
        </div>
        <div className='topbarCenter'>
            <div className="searchbar">
            <Search className='searchIcon'/>
            <input placeholder='Search for friends, posts or videos' type="text" className="searchInput" />
            </div>
        </div>
        <div className='topbarRight'>
            <div className="topbarLinks">
              <span className="topbarLink">Homepage</span>
              <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">
                  1
                </span>
              </div>
              <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">
                  2
                </span>
              </div>
              <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">
                  1
                </span>
              </div>
            </div>
            <Link to={`/profile/${user.username}`} style={{textDecoration:"none"}}>
            <img src={user.profilePicture ?PF + user.profilePicture : PF+"person/noAvatar.png"} alt="" className="topbarImg" />
            </Link>
        </div>
    </div>
  )
}
