import styles from "./terminal.module.css";
import util from "../../styles/util.module.css";
import TerminalDots from "./terminalDots.js";
import hacker from "../../images/hackers-horizon/hacker-horizon.JPG";

export default function TerminalCard({
  title,
  onClickRed,
  onClickYellow,
  onClickGreen,
}) {
  const myStyle = {
    height: "40vh",
    width: "38vw",
    borderRadius:"10px"
  };
  return (
    <div className={styles.index}>
      <div className={`${styles.titlebar} ${util.noSelection}`}>
        <TerminalDots
          onClickRed={onClickRed}
          onClickYellow={onClickYellow}
          onClickGreen={onClickGreen}
        />
        <div className={styles.title}>{title}</div>
        {/* <div className="boody" style={myStyle}></div> */}
      </div>

      <div className={`${styles.body} ${util.terminalText}`}>
        
          <img src={hacker} style={myStyle} alt="niubnei" />
          <br />
          <h3>Date 08-05-2023</h3>
          <h3>Technical</h3>         
          <p>
           
          </p>
          <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maiores quaerat necessitatibus deserunt cumque ea architecto suscipit molestiae cupiditate, dolorum enim distinctio numquam nam magni dolores illo, sequi eius sit tenetur mollitia modi, temporibus quod maxime similique? Ratione debitis nam qui eius id dolorem voluptatibus quo et doloribus perspiciatis? Quae dolore veritatis quo eos natus aut laboriosam enim voluptatibus error dignissimos ipsam, aliquam 
          </p>
            <button>Read More</button>
            </div>

    </div>
  );
}
