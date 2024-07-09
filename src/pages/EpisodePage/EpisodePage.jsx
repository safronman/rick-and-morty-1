import {useEffect, useState} from "react";
import axios from "axios";

export const EpisodePage = () => {

    let [episodes, setEpisodes] = useState([])

    const fetchData = (url) => {
        axios.get(url).then((res) => {
            setEpisodes(res.data.results)
        })
    };

    useEffect(() => {
        fetchData('https://rickandmortyapi.com/api/episode')
    }, [])

    return (
        <div className={'pageContainer'}>
            <h1 className='pageTitle'>Episodes</h1>
            {
                episodes.map((ep) => {
                    return (
                        <div key={ep.id}>
                            <ul>
                                <li>Эпизод: <b>{ep.episode}</b></li>
                                <li>Название эпизода: <b>{ep.name}</b></li>
                                <li>Дата выхода эпизода в эфир: <b>{ep.air_date}</b></li>
                                <li>Список персонажей, которые были замечены в эпизоде: <b>{ep.characters.length}</b>
                                </li>
                            </ul>
                            <hr/>
                        </div>
                    )
                })

            }
        </div>

    );
}


