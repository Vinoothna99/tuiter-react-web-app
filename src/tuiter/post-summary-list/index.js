import React from "react";
import {useSelector} from "react-redux";

import PostSummaryItem
    from "./post-summary-list-item";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                                   <PostSummaryItem
                                       key={post.id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;

