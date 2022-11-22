import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import {deleteProfile, updateProfileData} from "../profile/profile-reducer";
const EditProfileComponent = () => {
    const profileArray = useSelector(
        (state) => state.profile);

    const [index, setIndex]=useState(0);
    const [profile, setProfile] = useState({userName: '',
                                                       website: '',
                                                       location: '',
                                                       bio: '',
                                                       dateOfBirth: ''});
    const [userName, setUserName]=useState("");
    const [location, setLocation]=useState("");
    const [bio, setBio]=useState("");
    const [dateOfBirth, setDateOfBirth]=useState("");
    const [website, setWebsite]=useState("");

    useEffect(() => {
        profileArray.map((profile, index) => {
            setProfile(profile);
            setIndex(index);
            setWebsite(profile.website);
            setBio(profile.bio);
            setDateOfBirth(profile.dateOfBirth);
            setUserName(profile.userName);
            setLocation(profile.location);
        });

    });

    const dispatch = useDispatch();
    const updateProfile = () => {
        const newProfile = {
            location: location,
            userName:userName,
            bio:bio,
            website:website,
            dateOfBirth:dateOfBirth,
            id:(new Date()).getTime(),
            profilePicture: "coldplay.jfif",
            bannerPicture: "spacex.jfif",
            dateJoined: "9/2022",
            followingCount: 340,
            followersCount: 223
        };
        setProfile(newProfile);

        dispatch(updateProfileData(newProfile));
        dispatch(deleteProfile(index));

    }
    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);

    }

    const bioChangeHandler = (event) => {
        const value = event.target.value;
        setBio(value);
    }

    const locationChangeHandler = (event) => {
        const value = event.target.value;
        setLocation(value);
    }

    const websiteChangeHandler = (event) => {
        const value = event.target.value;
        setWebsite(value);
    }

    const dateOfBirthChangeHandler = (event) => {
        const value = event.target.value;
        setDateOfBirth(value);
    }

    return(
                                    <>
                                        <div>
                                            <Link to="/tuiters/profile" style={{float:"left"}}>
                                                <i className="bi bi-x-lg"></i>
                                            </Link>
                                            <h4 style={{alignSelf:"center"}}>&nbsp;Edit Profile</h4>

                                        </div>

                                        <div>{userName}</div>
                                        <div>67,819 Tweets</div>
                                        <img src={`/images/${profile.bannerPicture}`} style={{width: '100%', height:'300px'}}/>
                                        <br/>
                                        <br/>

                                        <label htmlFor="name">Name:</label>
                                        <div><input id="name" type="text" defaultValue={userName}
                                                    onChange={userNameChangeHandler}/></div>


                                        <br/>
                                        <hr/>
                                        <br/>
                                        <div>
                                            <label htmlFor="website">Website:</label>
                                            <div><input id="website" type="text" defaultValue={website}
                                                        onChange={websiteChangeHandler}/></div>

                                        </div>

                                        <br/>
                                        <hr/>
                                        <br/>
                                        <label htmlFor="bio">Bio:</label>
                                        <div><input id="bio" type="text" defaultValue={bio}
                                                    onChange={bioChangeHandler}/></div>

                                        <br/>
                                        <hr/>
                                        <br/>
                                        <div>
                                            <i className="bi bi-geo-alt"></i>
                                            <label htmlFor="location">Location:</label>
                                            <div><input id="location" type="text" defaultValue={location}
                                                        onChange={locationChangeHandler}/></div>

                                            <br/>
                                            <hr/>
                                            <br/>
                                            <i className="bi bi-balloon"></i>
                                            <label htmlFor="dateOfBirth">Date of Birth:</label>
                                            <div><input id="dateOfBirth" type="date" defaultValue={dateOfBirth}
                                                        onChange={dateOfBirthChangeHandler}/></div>

                                            <br/>
                                            <hr/>
                                            <br/>

                                        </div>
                                        <Link to="/tuiters/profile" style={{float:"left"}} >
                                            <Button className="btn btn-info"
                                                    onClick={() =>
                                                        updateProfile()}>Save</Button>
                                        </Link>

                                    </>

        )
};
export default EditProfileComponent;
