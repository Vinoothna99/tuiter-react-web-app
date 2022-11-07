import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.jfif",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState: tuits,
                                   reducers: {
                                       createTuit(state, action) {
                                           state.unshift({
                                                             ...action.payload,
                                                             ...templateTuit,
                                                             id: (new Date()).getTime(),
                                                         })
                                       },
                                       deleteTuit(state, action) {
                                           const index = state
                                               .findIndex(tuit =>
                                                              tuit.id === action.payload);
                                           state.splice(index, 1);
                                       },
                                       likedTuitToggle(state, action) {
                                           const tuit = state.find((tuit) =>
                                                                       tuit.id === action.payload.id)
                                           tuit.liked = !tuit.liked
                                       }


                                   }

                               });
export const {createTuit, deleteTuit, likedTuitToggle} = tuitsSlice.actions;
export default tuitsSlice.reducer;

