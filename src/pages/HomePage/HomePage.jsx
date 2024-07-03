import {NavLink} from "react-router-dom";
import s from './HomePage.module.css'


export const HomePage = ()=> {
    return (
        <div className={s.mainContainer}>
            <h1 className={s.title}>The Rick and Morty</h1>
            <div className={s.linkContainer}>
                <NavLink to={'/characters'} className={s.link}>Characters</NavLink>
                <NavLink to={'/locations'} className={s.link}>Locations</NavLink>
                <NavLink to={'/episodes'} className={s.link}>Episodes</NavLink>
            </div>
        </div>
    )
}
