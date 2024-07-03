import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export const LocationPage = () => {

    let [locations, setLocations] = useState([])
    const [isShowCharacters, setIsShowCharacters] = useState(false)

    const fetchData = (url) => {
        axios.get(url).then((res) => {
            setLocations(res.data.results)
        })
    };

    useEffect(() => {
        fetchData('https://rickandmortyapi.com/api/location')
    }, [])

    return (
        <div className={'pageContainer'}>
            <h1 className='pageTitle'>Locations</h1>
            {
                locations.map((l) => {
                    return (
                        <Fragment key={l.id}>
                            <ul>
                                <li>Название локации: <b>{l.name}</b></li>
                                <li>Тип локации: <b>{l.type}</b></li>
                                <li>Измерение, в котором находится местоположение: <b>{l.dimension}</b></li>
                                <li>Количество персонажей, которых видели а данной локации: <b>{l.residents.length}</b></li>
                            </ul>

                            {isShowCharacters && l.residents.map((url, index) => {
                                const parts = url.split('/');
                                const id = parts[parts.length - 1];
                                return (
                                    <div>
                                        <Link to={`/characters/${id}`}>{`житель - ${index}`}</Link>
                                    </div>
                                )
                            })}
                            <hr/>
                        </Fragment>
                    )
                })

            }
        </div>

    );
}


