import { Colors } from "../../styles/colors";
import styles from "./leaderboard_popup_page.module.css";

export default function LeaderboardPopUpPage({
    member, close_leaderboard_popup
}) {    
    return (
        <div className={`${styles.main} ${member.extern_style.main.display ? styles.display_active : styles.display_inactive}`}>
            {/* wrapper for flexbox */}
            <div className={styles.wrapper}>
                <div className={styles.profile}>
                    <div className={styles.photo}><img src={member.photo_path}></img></div>
                    <div className={styles.name}>{member.name}</div>
                </div>
                <div className={styles.details}>
                    <div className={styles.details_option}>{member.reg}</div>
                    <div className={styles.details_option}>{member.dept}</div>
                    <div className={styles.details_option}>{member.contrib_count}</div>
                    <div className={styles.details_option}>{member.score}</div>
                </div>
            </div>
            {/* contributions part */}
            <div className={styles.side}>
                <div className={styles.side_header}>Contributions</div>
                {member.contribs.map((line, index) => (
                    <span className={styles.side_contribs} key={index}>{line}</span>
                ))
                }
            </div>
            <div className={styles.close} onClick={close_leaderboard_popup}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </div>
        </div >
    )
}