import React from "react";

import {useSelector} from "react-redux";

import ProfileIndex from "./index";


const ProfileComponent = () => {
    const profileArray = useSelector(
        (state) => state.profile);
    return(
        <div>
            <h1>Profile</h1>
            {
                profileArray.map(profile =>
                                 <ProfileIndex
                                     key={profile.id}
                                     profile={profile}/>
                )
            }

        </div>)
};
export default ProfileComponent;
