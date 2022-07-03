import LugLink from '../lugLink/lugLink';
import { dockItems } from './dockItems';

import styles from './dock.module.css';
import util from '../../styles/util.module.css';

export default function Dock() {
    return (
        <aside className={`${styles.index} ${util.noSelection} dock`}>
            {dockItems.map(({ link, icon }, index) => (
                <LugLink key={index} link={link}>
                    <img alt='' className={styles.icon} src={icon} />
                </LugLink>
            ))}
        </aside>
    );
}

