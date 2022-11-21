import { createSlice } from "@reduxjs/toolkit";
import profileArray from './profile.json'

const profileSlice = createSlice({
                                 name: "profile",
                                 initialState: profileArray,
                                     reducers: {

                                         updateProfileData(state, action) {
                                             console.log(" Reducer addProfile", action.payload );
                                             state.push({
                                                            id: (new Date()).getTime(),
                                                            userName:action.payload.userName,
                                                            handle: action.payload.handle,
                                                            profilePicture: "coldplay.jfif",
                                                            bannerPicture: "spacex.jfif",
                                                            bio: action.payload.bio,
                                                            website: action.payload.website,
                                                            location: action.payload.location,
                                                            dateOfBirth: action.payload.dateOfBirth,
                                                            dateJoined: "9/2022",
                                                            followingCount: 340,
                                                            followersCount: 223
                                                        });

                                         },
                                         deleteProfile(state, action) {
                                             console.log(" Reducer deleteProfile", action.payload);
                                             const index = action.payload
                                             state.splice(index, 1)
                                         }


                                     }

                                 });
export const {updateProfileData, deleteProfile} = profileSlice.actions
export default profileSlice.reducer;