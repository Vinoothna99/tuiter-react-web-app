import { createSlice } from "@reduxjs/toolkit";
import {updateTuitThunk,createTuitThunk,deleteTuitThunk,findTuitsThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}


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
                                   initialState,
                                   extraReducers: {
                                       [findTuitsThunk.pending]:
                                           (state) => {
                                               state.loading = true
                                               state.tuits = []
                                           },
                                       [findTuitsThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = true
                                               state.tuits = payload
                                           },
                                       [findTuitsThunk.rejected]:
                                           (state) => {
                                               state.loading = false
                                           },
                                       [deleteTuitThunk.fulfilled] :
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.tuits = state.tuits
                                                   .filter(t => t.id !== payload)
                                           },
                                       [createTuitThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.tuits.push(payload)
                                           },
                                       [updateTuitThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               const tuitNdx = state.tuits
                                                   .findIndex((t) => t.id === payload.id)
                                               state.tuits[tuitNdx] = {
                                                   ...state.tuits[tuitNdx],
                                                   ...payload
                                               }
                                           }

                                   },

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

