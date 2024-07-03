import React from "react";
import {createBrowserRouter, Outlet} from "react-router-dom";
import {CharacterPage} from "./CharacterPage/CharacterPage";
import {Character} from "./CharacterPage/Character/Character";
import {LocationPage} from "./LocationPage/LocationPage";
import {EpisodePage} from "./EpisodePage/EpisodePage";
import {Header} from "./Header/Header";
import {HomePage} from "./HomePage/HomePage";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
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
                path: "characters/:characterId",
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



