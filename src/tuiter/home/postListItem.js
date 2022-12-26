import React from "react";
import './index.css';
const PostListItem = (
    {
        post = {
            "userName":"Robert Zubrin",
            "userHandle":"robert_zubrin",
            "profileImage":"stanley.jfif",
            "postImage":"saturn.png",
            "topic":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
            "title":"The standard Lorem Ipsum passage, used since the 1500s ...",
            "comments":"33k",
            "views":"678.9K",
            "likes":"34.8K",
            "time":"Jul 31",
            "link":"rt.com"
        }
    }
) => {
    return(

        <div className="wd-BookmarkedPost">
            <img className="wd-ProfileImage col-xs-2" height="48px" width="48px"
                 src={`/images/${post.profileImage}`}/>
            <div className="wd-divContent col-xs-9">
                <div className="wd-userDetails">
                    <span className="wd-author">
                        {post.userName}
                    </span>
                    <span className="wd-AuthorHandle">
                        @{post.userHandle} <i className="bi bi-dot"></i> {post.time}
                    </span>
                    <span className="wd-SmallDots"><i className="bi bi-three-dots"></i></span>

                </div>


                <div className="wd-BookmarkContent">
                    {post.topic}
                </div>


                <img className="wd-PostImage" src={`/images/${post.postImage}`}/>
                <div className="wd-ImageContent">
                    <div className="wd-author">{post.title}</div>
                    <br/>
                        <div className="wd-AuthorHandle">{post.description}<br/>
                            <i className="bi bi-link-45deg"></i> {post.link}
                        </div>
                </div>


                <div className="wd-ActionItems">
                    <a className="wd-actionLink comment" href="#">
                        <i className="bi bi-chat-left"></i>
                        <span className="wd-actionNumber">{post.comments}</span>
                    </a>
                    <a className="wd-actionLink cycle" href="#">
                        <i className="bi bi-repeat"></i>
                        <span className="wd-actionNumber">{post.views}</span>
                    </a>
                    <a className="wd-actionLink cycle" href="#">
                        <i className="bi bi-suit-heart"></i>
                        <span className="wd-actionNumber">{post.likes}</span>
                    </a>
                    <a className="wd-actionLink share" href="#">
                        <i className="bi bi-box-arrow-up"></i>

                    </a>


                </div>
            </div>
        </div>



    );
}
export default PostListItem;

