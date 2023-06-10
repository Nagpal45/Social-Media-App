import React, { useEffect, useState } from 'react'
import './profile.css'
import Topbar from '../../components/topbar/topbar'
import Sidebar from '../../components/sidebar/sidebar'
import Rightbar from '../../components/rightbar/rightbar'
import Feed from '../../components/feed/feed'
import axios from 'axios'
import { useParams } from 'react-router'

export default function Profile() {
  const[user, setUser] = useState({})
  const username = useParams().username
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const fetchUser = async () =>{
      const res = await axios.get(`/users?username=${username}`)
      setUser(res.data)
    }
    fetchUser();
  },[username])

  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src={user.coverPicture ? PF + user.coverPicture: PF+"person/noCover.png"} alt="" className="profileCoverImg" />
                    <img src={user.profilePicture ? user.profilePicture : PF+"person/noAvatar.png"} alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <span className="profileInfoName">{user.username}</span>
                    <span className="profileInfoDesc">{user.desc}</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed username={username}/>
                <Rightbar user={user}/>
            </div>
        </div>
        
      </div>
    </>
  )
}
