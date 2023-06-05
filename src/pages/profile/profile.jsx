import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/topbar'
import Sidebar from '../../components/sidebar/sidebar'
import Rightbar from '../../components/rightbar/rightbar'
import Feed from '../../components/feed/feed'

export default function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                    <img src="assets/person/8.jpeg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <span className="profileInfoName">Kristen Thomas</span>
                    <span className="profileInfoDesc">Hola my friends!!!  Hope you are doing good :)</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
        
      </div>
    </>
  )
}
