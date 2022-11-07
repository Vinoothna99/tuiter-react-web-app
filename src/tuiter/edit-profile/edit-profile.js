import React from "react";
import {useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import ProfileIndex from "../profile";
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
