import React from "react";
import {createBrowserRouter, Outlet} from "react-router-dom";
import {CharacterPage} from "../../pages/CharacterPage/CharacterPage";
import {Character} from "../../pages/CharacterPage/Character/Character";
import {LocationPage} from "../../pages/LocationPage/LocationPage";
import {EpisodePage} from "../../pages/EpisodePage/EpisodePage";
import {Header} from "../components/Header/Header";
import {HomePage} from "../../pages/HomePage/HomePage";

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



