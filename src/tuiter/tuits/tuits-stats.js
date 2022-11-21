import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
const TuitStats = (
    {
        post = {
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
        }
    }
) => {
    const dispatch = useDispatch();


    return(
        <>
            <div className="row">
                <div className="wd-ActionItems">
                    <a className="wd-actionLink comment" href="#">
                        <i className="bi bi-chat-left"></i>
                        <span className="wd-actionNumber">{post.replies}</span>
                    </a>
                    <a className="wd-actionLink cycle" href="#">
                        <i className="bi bi-repeat"></i>
                        <span className="wd-actionNumber">{post.retuits}</span>
                    </a>

                    <a className="wd-actionLink cycle" >
                        <i className={post.liked?"bi bi-heart-fill redColor":"bi bi-suit-heart blackColor"}
                        onClick={
                            () => dispatch(updateTuitThunk({
                                                                    ...post,
                                                                    likes: post.likes + 1
                                                                }))
                        }></i>
                        <span className="wd-actionNumber">{post.likes}</span>
                    </a>
                    <a className="wd-actionLink share" href="#">
                        <i className="bi bi-box-arrow-up"></i>

                    </a>


                </div>
            </div>
        </>
    );
};
export default TuitStats;

