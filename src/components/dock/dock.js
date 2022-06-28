import './dock.css';
import LugLink from '../terminal/lugLink';
import { dockItems } from './dockItems';

export default function Dock() {
    return (
        <aside id='dock'>
            {dockItems.map(({ link, icon }, index) => (
                <LugLink key={index} link={link}>
                    <img alt='' className='dock-icon' src={icon} />
                </LugLink>
            ))}
        </aside>
    );
}

