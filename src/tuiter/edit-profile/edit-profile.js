import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import {deleteProfile, updateProfileData} from "../profile/profile-reducer";
const EditProfileComponent = () => {
    const profileArray = useSelector(
        (state) => state.profile);
    const [profile, setProfile] = useState({userName: '',
                                                       website: '',
                                                       location: '',
                                                       bio: '',
                                                       dateOfBirth: ''});
    const dispatch = useDispatch();
    const updateProfile = (profile, index) => {
        dispatch(updateProfileData(profile));
        dispatch(deleteProfile(index));

    }
    const userNameChangeHandler = (event) => {
        const value = event.target.value;
        const newUserName = {
            ...profile,
            userName: value
        };
        setProfile(newUserName);
    }

    const bioChangeHandler = (event) => {
        const value = event.target.value;
        const newBio = {
            ...profile,
            bio: value
        };
        setProfile(newBio);
    }

    const locationChangeHandler = (event) => {
        const value = event.target.value;
        const newLocation = {
            ...profile,
            location: value
        };
        setProfile(newLocation);
    }

    const websiteChangeHandler = (event) => {
        const value = event.target.value;
        const newWebsite= {
            ...profile,
            website: value
        };
        setProfile(newWebsite);
    }

    const dateOfBirthChangeHandler = (event) => {
        const value = event.target.value;
        const newDOB = {
            ...profile,
            dateOfBirth: value
        };
        setProfile(newDOB);
    }

    return(
        <div>


            {
                profileArray.map((profile, index) =>
                                    <>
                                        <div>
                                            <Link to="/tuiter/profile" style={{float:"left"}}>
                                                <i className="bi bi-x-lg"></i>
                                            </Link>
                                            <h4 style={{alignSelf:"center"}}>&nbsp;Edit Profile</h4>

                                        </div>

                                        <div>{profile.userName}</div>
                                        <div>67,819 Tweets</div>
                                        <img src={`/images/${profile.bannerPicture}`} style={{width: '100%', height:'300px'}}/>
                                        <br/>
                                        <br/>

                                        <label htmlFor="name">Name:</label>
                                        <div><input id="name" type="text" value={profile.userName}
                                                    onChange={userNameChangeHandler}/></div>


                                        <br/>
                                        <hr/>
                                        <br/>
                                        <div>
                                            <label htmlFor="website">Website:</label>
                                            <div><input id="website" type="text" value={profile.website}
                                                        onChange={websiteChangeHandler}/></div>

                                        </div>

                                        <br/>
                                        <hr/>
                                        <br/>
                                        <label htmlFor="bio">Bio:</label>
                                        <div><input id="bio" type="text" value={profile.bio}
                                                    onChange={bioChangeHandler}/></div>

                                        <br/>
                                        <hr/>
                                        <br/>
                                        <div>
                                            <i className="bi bi-geo-alt"></i>
                                            <label htmlFor="location">Location:</label>
                                            <div><input id="location" type="text" value={profile.location}
                                                        onChange={locationChangeHandler}/></div>

                                            <br/>
                                            <hr/>
                                            <br/>
                                            <i className="bi bi-balloon"></i>
                                            <label htmlFor="dateOfBirth">Date of Birth:</label>
                                            <div><input id="dateOfBirth" type="date" value={profile.dateOfBirth}
                                                        onChange={dateOfBirthChangeHandler}/></div>

                                            <br/>
                                            <hr/>
                                            <br/>

                                        </div>
                                        <Link to="/tuiter/profile" style={{float:"left"}} >
                                            <Button className="btn btn-info"
                                                    onClick={() =>
                                                        updateProfile(profile,index)}>Save</Button>
                                        </Link>

                                    </>
                )
            }
        </div>)
};
export default EditProfileComponent;
