import LugLink from '../lugLink/lugLink';
import { dockItems } from './dockItems';

import dockStyles from './dock.module.css';
export default function Dock() {
    return (
        <aside className={`${dockStyles.index} no-selection dock`}>
            {dockItems.map(({ link, icon }, index) => (
                <LugLink key={index} link={link}>
                    <img alt='' className={dockStyles.icon} src={icon} />
                </LugLink>
            ))}
        </aside>
    );
}

