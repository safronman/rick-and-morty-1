import './App.css';
import {CharacterPage} from "./pages/CharacterPage/CharacterPage";
import {LocationPage} from "./pages/LocationPage/LocationPage";
import {EpisodePage} from "./pages/EpisodePage/EpisodePage";
import {HomePage} from "./pages/HomePage/HomePage";
import React from "react";
import {createHashRouter, Outlet, RouterProvider} from "react-router-dom";
import {Header} from "./common/Header/Header";
import {Character} from "./pages/CharacterPage/Character/Character";

const router = createHashRouter([
    {
        path: "/",
        element: <div>
            <Header/>
            <Outlet/>
        </div>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "characters",
                element: <CharacterPage/>,
            },
            {
                path: "characters/:id",
                element: <Character/>,
            },
            {
                path: "locations",
                element: <LocationPage/>,
            },
            {
                path: "episodes",
                element: <EpisodePage/>,
            },
        ]
    },
]);


export const App = () => {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}


