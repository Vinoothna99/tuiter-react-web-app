import React from "react";
import {useSelector} from "react-redux";
import EditProfileIndex from "./index";

const EditProfileComponent = () => {
    const profileArray = useSelector(
        (state) => state.profile);
    return(
        <div>


            {
                profileArray.map(profile =>
                                     <EditProfileIndex
                                         key={profile.id}
                                         profile={profile}/>
                )
            }
        </div>)
};
export default EditProfileComponent;
