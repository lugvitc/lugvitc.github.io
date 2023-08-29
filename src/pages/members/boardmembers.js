import TerminalWindow from "../../components/terminal/terminalWindow";
// import { boardmembers_2021 } from "./boardmembers_2021";
// import { boardmembers_2022 } from "./boardmembers_2022";
// import { techadvisors_2022 } from "./techadvisors_2022";
import layout from "./layout.module.css";
import layout2 from "./layoutalter.module.css";
import i1 from './Baleswar.jpeg';
import i2 from './Samridh.jpeg';
import i3 from '../../images/members/abhishek.jpg';
import i4 from '../../images/members/aditya.jpeg';
import i5 from '../../images/members/aditi.png';
import i6 from '../../images/members/animesh.jpeg';
import i7 from '../../images/members/rahul.png';
import i8 from '../../images/members/venu.png';
import i9 from '../../images/members/meetesh.png';
import i10 from '../../images/members/dhananjay.png';
import i11 from '../../images/members/aditi.png';
import i12 from '../../images/members/chitranshu.png';
import i13 from '../../images/members/nithya.png';
import i14 from '../../images/members/hrishikesh.png';
import i15 from '../../images/members/kathir.png';
import i16 from '../../images/members/srideep.png';
import i17 from '../../images/members/kartikey.png';
import i18 from '../../images/members/dhruv.png';
import i19 from '../../images/members/ezhil.png';
import i20 from '../../images/members/mogesh.png';
import i21 from '../../images/members/revanth.png';
import i22 from '../../images/members/sai.jpeg';
import ib from '../../images/members/blank.png';




export default function Members() {
  return (
    <TerminalWindow
      prompts={[
        { path: "~", command: "cd club/boardmembers" },
        { path: "~/club/boardmembers", command: "ls" },
      ]}
      title="Board Members"
    >
      <h2>~/club/boardmembers/2023</h2>

      <div className={layout.twos}>
        {/* {boardmembers_2022.map(({ position, member,batch,photo}, index) => (
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
                 */}
        <div class="container">
          <div class="row justify-content-center">
            
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i3} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Abhishek Kumar</h3>
                  <h4 class={layout.title}>President</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="https://github.com/AmrealAbhishek01"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="instagram.com/amrealabhishek/"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abhishek-kumar-284849215/"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i4} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Aditya Kushwaha</h3>
                  <h4 class={layout.title}>Vice President</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="https://github.com/aadityakushwaha"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/aaditya_kushwaha_"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Aaditya_K_"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/aadityakushwaha"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i6} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Animesh Rai</h3>
                  <h4 class={layout.title}>Technical Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i7} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Rahul Vijaykumar</h3>
                  <h4 class={layout.title}>Technical Co-Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="https://github.com/rahulvk007"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/rahul.vk007?igshid=OGQ5ZDc2ODk2ZA=="
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rahul-vijayakumar-872218244/"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i8} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Venukanthan BS
</h3>
                  <h4 class={layout.title}>Cyber Security Lead</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="https://github.com/itsvenu22"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/itsvenu22/ "
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/venukanthan_bs"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/venukanthan/"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i9} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Meetesh Saini</h3>
                  <h4 class={layout.title}>Backend Lead</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i10} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Dhananjay Chauhan</h3>
                  <h4 class={layout.title}>Front-End Lead</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="https://github.com/Dhananjay-Chauhan"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/dhananjay-chauhan-64293822b/"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i11} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Aditi Rai</h3>
                  <h4 class={layout.title}>Competetive Programming Lead</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i22} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Sai Charan guntupalli
</h3>
                  <h4 class={layout.title}>Cloud Lead</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="https://github.com/sai80082"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/sai_charan_guntupalli/"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/_saicharan_"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="www.linkedin.com/in/sai-charan-guntupalli"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i17} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Kartikey Subramaniam</h3>
                  <h4 class={layout.title}>Technical Advisory</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="github.com/hellokartikey"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="instagram.com/kartikey_2811"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i18} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Dhruv Hatkar</h3>
                  <h4 class={layout.title}>Technical Advisory</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="https://github.com/slipstream8125"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/hatkar04_dhruv?igshid=YmMyMTA2M2Y="
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Slipstream_8125"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="http://www.linkedin.com/in/dhruv-hatkar"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i19} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Ezhil S</h3>
                  <h4 class={layout.title}>Technical Advisory</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="https://github.com/ezhil56x"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/ezhil56x"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/ezhil56x"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ezhilshanmugham"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i20} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Mogesh</h3>
                  <h4 class={layout.title}>Media Advisory</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="https://github.com/mogesh06"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/_.mogesh06._?utm_source=qr&igshid=NGExMmI2YTkyZg=="
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Mogesh05?t=3A7bn3cbwElS6gCyhtUXUg&s=09"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="http://www.linkedin.com/in/mogeshvar-s-g"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i12} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Chitranshu</h3>
                  <h4 class={layout.title}>Content Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i13} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>K. Nithya Reddy</h3>
                  <h4 class={layout.title}>Content Co-Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i21} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>K. Revanth Sai</h3>
                  <h4 class={layout.title}>Management Treasurer</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="https://github.com/Revanthsai2003"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/k_revanth_sai/"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Revanth_1813"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/revanth-sai-9a8240231/"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i16} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Srideep Aalla</h3>
                  <h4 class={layout.title}>Operations Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/srideepaalla?igshid=OGQ5ZDc2ODk2ZA=="
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/srideep-aalla-357005267"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i14} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Hrishikesk Naramparambath</h3>
                  <h4 class={layout.title}>Media Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="https://github.com/kingslayer1312"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/quitepossiblyhrishi?igshid=ZDc4ODBmNjlmNQ=="
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/hrishikesh-naramparambath-24b010222"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i15} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Kathir M.N.</h3>
                  <h4 class={layout.title}>Media Co-Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

      
          </div>
        </div>
      </div>
      <h1>
       ~/club/boardmembers/2022
      </h1>
      <div className={layout.twos}>
        {/* {boardmembers_2022.map(({ position, member,batch,photo}, index) => (
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
                 */}
        <div class="container">
          <div class="row justify-content-center">
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i1} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Beleswar Prasad Padhi</h3>
                  <h4 class={layout.title}>President</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i2} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Samridh Anand Paatni</h3>
                  <h4 class={layout.title}>Vice-President</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i3} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Abhishek Kumar</h3>
                  <h4 class={layout.title}>Technical Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="https://github.com/AmrealAbhishek01"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="instagram.com/amrealabhishek/"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abhishek-kumar-284849215/"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i6} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Animesh Rai</h3>
                  <h4 class={layout.title}>Technical Co-Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={i5} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Aditi Rai</h3>
                  <h4 class={layout.title}>Operations Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={ib} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Praveenraj R S</h3>
                  <h4 class={layout.title}>Operation Co-Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={ib} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Arumilli Abhiram</h3>
                  <h4 class={layout.title}>Management Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={layout.newCard}>
              <div class={layout.ourTeam}>
                <div class={layout.picture}>
                  <img class="img-fluid" src={ib} />
                </div>
                <div class="teamContent">
                  <h3 class={layout.name}>Nithin Kumar</h3>
                  <h4 class={layout.title}>Management Co-Head</h4>
                </div>
                <ul class={layout.social}>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-github"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="lugvitc.org"
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
      
          </div>
        </div>
      </div>
      {/* <div className={layout2.twos}>
        {techadvisors_2022.map(({ position, member, batch, photo }, index) => (
          <section key={index}>
            <div className={layout2.spacer}>
              <div className={layout2.card}>
                {photo}
                <h3>
                  <p className={layout2.member}>{member}</p>
                </h3>

                <p className={layout2.batch}>{batch}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
      <h2>~/club/boardmembers/2021</h2>
      <div className={layout.twos}>
        {boardmembers_2021.map(({ position, member, batch, photo }, index) => (
          <section key={index}>
            <div className={layout.spacer}>
              <div className={layout.card}>
                {photo}
                <h1>
                  <p className={layout.member}>{member}</p>
                </h1>
                <p className={layout.position}>{position}</p>
                <p className={layout.batch}>{batch}</p>
              </div>
            </div>
          </section>
        ))}
      </div> */}
    </TerminalWindow>
  );
}
