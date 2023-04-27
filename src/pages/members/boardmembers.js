import TerminalWindow from '../../components/terminal/terminalWindow';
import { boardmembers_2021 } from './boardmembers_2021';
import { boardmembers_2022 } from './boardmembers_2022';
import { techadvisors_2022 } from './techadvisors_2022';
import layout from './layout.module.css';
import layout2 from './layoutalter.module.css';
export default function Members() {
    return (
        <TerminalWindow
            prompts={[
                { path: '~', command: 'cd club/boardmembers' },
                { path: '~/club/boardmembers', command: 'ls' }
            ]}
            title = 'Board Members'
        >
          <h2>~/club/boardmembers/2022</h2>

            <div className={layout.twos}>
                {boardmembers_2022.map(({ position, member,batch,photo}, index) => (
                    <section key={index}>
                        <div className={layout.spacer}>
                            <div className={layout.card}>
                            {photo}
                            <h1>
                            <p className={layout.member}>
                                {member}
                            </p>
                            </h1>
                            <p className={layout.position}>
                                {position}
                            </p>
                            <p className={layout.batch}>
                                {batch}
                            </p>
                        </div></div>
                    </section>
                ))
                }
                
            </div>
            <h4><p className={layout.extra}>~/club/boardmembers/2022/advisory</p></h4>
            <div className={layout2.twos}>
                {techadvisors_2022.map(({ position, member,batch,photo}, index) => (
                    <section key={index}>
                        <div className={layout2.spacer}>
                            <div className={layout2.card}>
                            {photo}
                            <h3>
                            <p className={layout2.member}>
                                {member}
                            </p>
                            </h3>
                            
                            <p className={layout2.batch}>
                                {batch}
                            </p>
                        </div></div>
                    </section>
                ))
                }
                
            </div>
            <h2>~/club/boardmembers/2021</h2>
            <div className={layout.twos}>
                
                {boardmembers_2021.map(({ position, member,batch,photo}, index) => (
                    <section key={index}>
                        <div className={layout.spacer}>
                            <div className={layout.card}>
                            {photo}
                            <h1>
                            <p className={layout.member}>
                                {member}
                            </p>
                            </h1>
                            <p className={layout.position}>
                                {position}
                            </p>
                            <p className={layout.batch}>
                                {batch}
                            </p>
                        </div></div>
                    </section>
                ))
                }
                
            </div>
        </TerminalWindow>
    );
}
    
