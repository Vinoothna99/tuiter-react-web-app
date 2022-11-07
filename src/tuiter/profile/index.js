import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
const ProfileIndex = (
    {
        profile = {
            "id": "222",
            "userName": "Vinoothna Gangadasu",
            "handle": "@Vinoo",
            "profilePicture": "coldplay.jfif",
            "bannerPicture": "spacex.jfif",
            "bio": "Student, Software Engineer, React, Frontend, and sports enthusiast. Retuits and likes are not endorsements.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",
            "dateOfBirth": "11/11/1999",
            "dateJoined": "9/2022",
            "followingCount": 340,
            "followersCount": 223
        }
    }
) => {
    return(
        <>  <div>{profile.userName}</div>
            <div>67,819 Tweets</div>
            <img src={`/images/${profile.bannerPicture}`} style={{width: '100%', height:'300px'}}/>
            <br/>
            <br/>
            <p>{profile.userName}
                <Link to="/tuiter/edit-profile" >
                    <Button className="btn btn-info" style={{float:'right'}}>Edit Profile</Button>

                </Link>
                <div>{profile.handle}
                </div>
            </p>
            <br/>
            <p>{profile.bio}</p>
            <br/>
            <div><i className="bi bi-geo-alt"></i>{profile.location}  &nbsp;&nbsp; <i className="bi bi-balloon"></i> {profile.dateOfBirth}&nbsp;  &nbsp;<i className="bi bi-calendar3"></i> {profile.dateJoined}</div>
            <br/>
            <div>Followers: {profile.followersCount}  &nbsp;&nbsp;  Following:{profile.followingCount}</div>

        </>


    );
};
export default ProfileIndex;

