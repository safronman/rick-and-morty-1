import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import s from './CharacterPage.module.css'

export const CharacterPage = () => {

    let [characters, setCharacters] = useState([])
    let [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null
    })

    const [error, setError] = useState(null)

    const fetchData = (url) => {
        axios.get(url).then((res) => {
            setCharacters(res.data.results);
            setInfo(res.data.info);
            setError(null)
        })
            .catch((err) => {
                setError(err.message)
            })
    };

    useEffect(() => {
        fetchData('https://rickandmortyapi.com/api/character')
    }, [])

    const nextPageHandler = () => {
        fetchData(info.next)
    }

    const previousPageHandler = () => {
        fetchData(info.prev)
    }

    const searchHandler = (e) => {
        const value = e.currentTarget.value;
        fetchData(`https://rickandmortyapi.com/api/character?name=${value}`)
    }

    return (
        <div className={'pageContainer'}>
            <h1 className='pageTitle'>Characters</h1>
            <input type="search" className={s.search} onChange={searchHandler} placeholder="Search..."/>

            {!!error && <h1 className='errorMessage'>❌❌❌ {error} ❌❌❌</h1>}

            {!error &&
                <div>
                    <div className={s.characters}>
                        {characters.map((ch) => {
                            return <div className={s.character}>
                                <Link to={`/characters/${ch.id}`} className={s.characterLink}>{ch.name}</Link>
                                <img src={ch.image} alt=""/>
                            </div>
                        })}
                    </div>
                    <div className={s.buttonContainer}>
                        <button className='linkButton' onClick={previousPageHandler}
                                disabled={info.prev === null}>Назад
                        </button>
                        <button className='linkButton' onClick={nextPageHandler} disabled={info.next === null}>Вперед
                        </button>
                    </div>
                </div>
            }
        </div>

    );
}


