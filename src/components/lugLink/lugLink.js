import { Link } from 'react-router-dom';
import lugLinkStyles from './lugLink.module.css';

export default function LugLink({ link, children }) {
    return (
        <Link
            className={lugLinkStyles.index}
            to={link}
            rel='noopener noreferrer'
            onClick={(e)=>{
                e.preventDefault();
                window.open(link,'_blank')
            }}
        >
            {children}
        </Link>
    );
}

