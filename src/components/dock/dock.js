import LugLink from '../lugLink/lugLink';
import { dockItems } from './dockItems';

import './dock.css';

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

