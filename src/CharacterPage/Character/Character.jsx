import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import arrowBack from '../../assets/arrowBack.svg'
import s from './Character.module.css'


export const Character = () => {

    const {characterId} = useParams()

    const navigate = useNavigate();

    const [character, setCharacter] = useState(null)

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${characterId}`).then((res) => {
            setCharacter(res.data)
        })
    }, [])


    const getClassName = (status) => {
        let status2
        switch (status) {
            case 'Alive':
                status2 = s.aliveStatus
                break

            case 'Dead':
                status2 = s.deadStatus
                break

            case 'unknown':
                status2 = s.unknownStatus
                break
        }

        return `${s.status} ${status2}`
    }

    const toPreviousPageHandler = () => {
        navigate(-1)
    }

    return (
        <div className='pageContainer'>
            {
                character === null
                    ? 'Loading...'
                    : <div>
                        <h1 className='pageTitle'>{character.name}</h1>
                        <div className={s.box}>
                            <img src={character.image} alt="" className={s.img}/>
                            <div className={s.description}>
                                <div className={s.statusBox}>
                                    <div className={getClassName(character.status)}></div>
                                    <div>{character.status} - {character.species}</div>
                                </div>
                                <div>
                                    <p className={s.lastKnowLocationTitle}>Last known location</p>
                                    <p className={s.lastKnowLocationResult}>{character.location.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.arrowBack} onClick={toPreviousPageHandler}>
                            <img src={arrowBack} alt=""/>
                            Вернуться на предыдущую страницу
                        </div>
                    </div>
            }

        </div>
    )
}
