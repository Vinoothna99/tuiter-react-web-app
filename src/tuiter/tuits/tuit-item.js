import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";



const TuitItem = (
    {
        post = {
            "id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

        }
    }
) => {const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <>
            <img className="wd-ProfileImage col-xs-2" height="48px" width="48px"
                 src={`/images/${post.image}`}/>
            <div className="wd-divContent col-xs-9">
                <div className="wd-userDetails">
                    <span className="wd-author">
                        {post.userName}
                    </span>
                    <span className="wd-AuthorHandle">
                        {post.handle} <i className="bi bi-dot"></i> {post.time}
                    </span>
                    <span className="wd-SmallDots"><i className="bi bi-x-lg float-end"
                                                      onClick={() => deleteTuitHandler(post.id)}></i></span>

                </div>


                <div className="wd-BookmarkContent">
                    {post.topic}
                </div>

                <div className="wd-ImageContent">
                    <div className="wd-author">{post.title}</div>
                    <br/>
                    <div className="wd-AuthorHandle">{post.tuit}

                    </div>
                </div>

            </div>
        </>
    );
};
export default TuitItem;

