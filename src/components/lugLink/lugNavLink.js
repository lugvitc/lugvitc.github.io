import { NavLink } from 'react-router-dom';
import lugLinkStyles from './lugLink.module.css';

export default function LugNavLink({ link, children }) {
    return (
        <NavLink className={lugLinkStyles._} to={link}>
            {children}
        </NavLink>
    );
}
