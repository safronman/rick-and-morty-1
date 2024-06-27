import logoRick from '../assets/logoRick.webp'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={s.box}>
            <img className={s.logo} src={logoRick} alt="logo"/>
            <NavLink to={'/'} className={s.headerLink}>Home</NavLink>
            <NavLink to={'/characters'} className={s.headerLink}>Characters</NavLink>
            <NavLink to={'/locations'} className={s.headerLink}>Locations</NavLink>
            <NavLink to={'/episodes'} className={s.headerLink}>Episodes</NavLink>
        </div>

    )
}
