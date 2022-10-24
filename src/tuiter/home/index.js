import React from "react";
import "./index.css";
import postsArray from './posts.json';
import PostListItem from "./postListItem";
const HomeComponent = () => {
    return(
        <div className="homePosts">
            {
                postsArray.map(post =>
                                   <PostListItem
                                       key={post.id} post={post}/> )
            }
        </div>
    );
}
export default HomeComponent;
