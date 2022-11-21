import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import TuitItem from "./tuit-item";
import TuitStats from "./tuits-stats";
import {findTuitsThunk}
    from "../../services/tuits-thunks";


const TuitsList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())


    }, [])

    return(
        <div className="wd-BookmarkedPost">
        <ul className="list-group">
            {
                tuits.loading &&

                tuits.tuits.map(post =>

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

