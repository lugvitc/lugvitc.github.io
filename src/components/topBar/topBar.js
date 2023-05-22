import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import TopBarTimeDate from "./topBarTimeDate";
import Tooltip from "../tooltip/tooltip";

import useSettingsDialog from "../../hooks/useSettingsDialog";

import styles from "./topBar.module.css";
import util from "../../styles/util.module.css";
import Logo from "../logo/logo";


export default function TopBar({ refer, topBarLinks }) {
  const { settingsDialogOpen, openSettingsDialog } = useSettingsDialog();
  const settingsButtonRef = useRef(null);

  // menu
  const [ismobile, setismobile] = useState(false);
  const toogleMenu = () => {
    setismobile(!ismobile);
    console.log("cliked");
  };
  return (
    <>
      <header ref={refer} className={`${styles.index} ${util.noSelection}`}>
        <div className={styles.contents}>
          <a
            // className={styles.logo}
            href="https://linktr.ee/lugvitc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo />
          </a>
          <nav className={styles.links}>
            <div className={styles.mobileMenu} onClick={toogleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                  fill="#4c556a"
                />
              </svg>

              {ismobile ? (
                <i></i>
              ) : (
                <div className={styles.link}>
                  {topBarLinks.map((nav, index) => (
                    <NavLink key={index} className={styles.burg} to={nav.link}>
                      {nav.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.linkk}>
              {topBarLinks.map((nav, index) => (
                <NavLink
                  key={index}
                  className={({ isActive }) =>
                    `${styles.clickable} 
                                    ${
                                      isActive ? styles.active : styles.inactive
                                    }`
                  }
                  to={nav.link}
                >
                  {nav.title}
                </NavLink>
              ))}
            </div>
            
          </nav>
          <div className={styles.nonClickable}>
            <TopBarTimeDate />
          </div>
          <div
            className={`${styles.settings} ${
              settingsDialogOpen && styles.open
            }`}
            ref={settingsButtonRef}
          >
            <svg
              onClick={openSettingsDialog}
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <g>
                <path d="M0,0h24v24H0V0z" fill="none" />
                <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.bottomStrip} />
      </header>
      {!settingsDialogOpen && (
        <Tooltip toolRef={settingsButtonRef} below>
          Settings
        </Tooltip>
      )}
    </>
  );
}

