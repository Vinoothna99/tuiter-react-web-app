import React from "react";
import TuitsList
    from "../tuits/tuits-list";
import tuits from "../tuits/tuits-reducer";
import WhatsHappening from "./whats-happening";

import {Provider} from "react-redux";

import { configureStore }
    from '@reduxjs/toolkit';
const store = configureStore({
                                 reducer: {tuits}
                             });

const ReduxHome = () => {
    return(
        <Provider store={store}>
            <div>
                <h1>Home</h1>
                <WhatsHappening/>
                <TuitsList/>
            </div>
        </Provider>
    );
};
export default ReduxHome;

