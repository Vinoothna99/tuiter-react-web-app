import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import TuitStats from "./tuits-stats";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <div className="wd-BookmarkedPost">
        <ul className="list-group">
            {
                postsArray.map(post =>

                        <li key={post.id} className="list-group-item">
                            <TuitItem post={post}/>
                            <TuitStats post={post}/>
                        </li>
                    )
            }
        </ul>
        </div>
    );
};
export default TuitsList;

