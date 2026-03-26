import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
export const Header = () => {
    const getActivateClass = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? `${classes.active} ${classes.link}` : classes.link;
    };
    return (
        <header className={classes.header}>
            <div className={classes.conteiner}>
                <NavLink to="/" className={getActivateClass}>
                    Home
                </NavLink>
                <NavLink to="/todo" className={getActivateClass}>
                    Todo
                </NavLink>
            </div>
        </header>
    );
};
