import {router} from "./Router";
import {RouterProvider} from "react-router-dom";
import React from "react";

export const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}

