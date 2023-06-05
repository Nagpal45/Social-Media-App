import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/online'

export default function Rightbar({profile}){
  
  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png"  className="birthdayImg" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 others</b> have birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return (
      <>
        <h4 className="rightbarTitle">
          User Information
        </h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
              City:
            </span>
            <span className="rightbarInfoValue">
              New York
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
              From:
            </span>
            <span className="rightbarInfoValue">
              Madrid
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
              Relationship:
            </span>
            <span className="rightbarInfoValue">
              Single
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">
          User Followings
        </h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Alex Durden</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Dora Hawks</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/9.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Gary Duty</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/10.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Safak Kocaoglu</span>
          </div>
        </div>
      </>
    )
  }


  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
