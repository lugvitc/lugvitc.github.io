import TerminalWindow from "../../components/terminal/terminalWindow";
// import { boardmembers_2021 } from "./boardmembers_2021";
// import { boardmembers_2022 } from "./boardmembers_2022";
// import { techadvisors_2022 } from "./techadvisors_2022";
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
import { useState } from "react";

export default function Members() {
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2,setIsOpen2] = useState(false)
    const toggleContent1 = () => {
      setIsOpen1(!isOpen1);
      if (isOpen2){
        setIsOpen2(!isOpen2)
      }  
    };
    const toggleContent2 =()=>{
      setIsOpen2(!isOpen2)
      if (isOpen1){
        setIsOpen1(!isOpen1)
      } 
    }
  return (
    <TerminalWindow
      prompts={[
        { path: "~", command: "cd club/boardmembers" },
        { path: "~/club/boardmembers", command: "ls" },
      ]}
      title="Board Members"
    >
    <div className="flex flex-col justify-around">
    <div>
    <button className={`w-0 h-0 border-[15px] border-solid border-transparent border-l-[#BF616A] ${isOpen1?'rotate-90' : ''} hover:scale-105 transition-all duration-300 ease-in-out`}onClick={toggleContent1}></button>
    <span class="text-[#EBCB8B] text-[25px]">~/club/boardmembers/2023</span>
    </div>
      { isOpen1 &&<div class="flex flex-row flex-wrap justify-evenly">
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
        <div>
          <div className="flex flex-wrap justify-center items-center">
            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg ">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i3} />
                </div>
                <div>
                  <h3>Abhishek Kumar</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">President</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="https://github.com/AmrealAbhishek01"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="https://instagram.com/amrealabhishek/"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="https://lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="https://www.linkedin.com/in/abhishek-kumar-284849215/"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class=" w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i4} />
                </div>
                <div>
                  <h3>Aditya Kushwaha</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Vice President</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="https://github.com/aadityakushwaha" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://www.linkedin.com/in/aadityakushwaha" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://instagram.com/aaditya_kushwaha_" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://twitter.com/Aaditya_K_" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>


            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg ">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i6} />
                </div>
                <div>
                  <h3>Animesh Rai</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Technical Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i7} />
                </div>
                <div>
                  <h3>Rahul Vijaykumar</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Technical Co-Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="https://github.com/rahulvk007"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="https://www.linkedin.com/in/rahul-vijayakumar-872218244/"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="https://instagram.com/rahul.vk007?igshid=OGQ5ZDc2ODk2ZA=="
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i8} />
                </div>
                <div>
                  <h3>Venukanthan BS</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Cyber Security Lead</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="https://github.com/itsvenu22" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://www.linkedin.com/in/venukanthan/" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://www.instagram.com/itsvenu22/" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://twitter.com/venukanthan_bs" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i9} />
                </div>
                <div>
                  <h3>Meetesh Saini</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Backend Lead</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i10} />
                </div>
                <div>
                  <h3>Dhananjay Chauhan</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Front-End Lead</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="https://github.com/Dhananjay-Chauhan" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://www.linkedin.com/in/dhananjay-chauhan-64293822b/" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg ">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i11} />
                </div>
                <div>
                  <h3>Aditi Rai</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Competetive Programming Lead</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg ">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i22} />
                </div>
                <div>
                  <h3>Sai Charan Guntupalli</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Cloud Lead</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="https://github.com/sai80082"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="www.linkedin.com/in/sai-charan-guntupalli"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="https://www.instagram.com/sai_charan_guntupalli/"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="https://twitter.com/_saicharan_"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg ">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i17} />
                </div>
                <div>
                  <h3>Kartikey Subramaniam</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Technical Advisory</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="github.com/hellokartikey"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="instagram.com/kartikey_2811"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg ">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i18} />
                </div>
                <div>
                  <h3>Dhruv Hatkar</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Technical Advisory</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="https://github.com/slipstream8125"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="http://www.linkedin.com/in/dhruv-hatkar"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="https://instagram.com/hatkar04_dhruv?igshid=YmMyMTA2M2Y="
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="https://twitter.com/Slipstream_8125"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i19} />
                </div>
                <div>
                  <h3>Ezhil S</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Technical Advisory</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="https://github.com/ezhil56x" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://www.linkedin.com/in/ezhilshanmugham" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://instagram.com/ezhil56x" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://twitter.com/ezhil56x" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
            <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg ">
              <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i20} />
              </div>
              <div>
                <h3>Mogesh</h3>
                <h4 class="text-[15px] text-[#4e5052] capitalize">Media Advisory</h4>
              </div>
              <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                <li class="inline-block">
                  <a
                    href="https://github.com/mogesh06"
                    class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                    aria-hidden="true"
                    target="_blank"
                  ></a>
                </li>
                <li class="inline-block">
                  <a
                    href="http://www.linkedin.com/in/mogeshvar-s-g"
                    class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                    aria-hidden="true"
                    target="_blank"
                  ></a>
                </li>
                <li class="inline-block">
                  <a
                    href="https://instagram.com/_.mogesh06._?utm_source=qr&igshid=NGExMmI2YTkyZg=="
                    class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                    aria-hidden="true"
                    target="_blank"
                  ></a>
                </li>
                <li class="inline-block">
                  <a
                    href="https://twitter.com/Mogesh05?t=3A7bn3cbwElS6gCyhtUXUg&s=09"
                    class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                    aria-hidden="true"
                    target='_blank'
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i12} />
                </div>
                <div>
                  <h3>Chitranshu</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Content Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg ">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i13} />
                </div>
                <div>
                  <h3>K. Nithya Reddy</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Content Co-Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i21} />
                </div>
                <div>
                  <h3>K. Revanth Sai</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Management Treasurer</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="https://github.com/Revanthsai2003" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://www.linkedin.com/in/revanth-sai-9a8240231/" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://www.instagram.com/k_revanth_sai/" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://twitter.com/Revanth_1813" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i16} />
                </div>
                <div>
                  <h3>Srideep Aalla</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Operations Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://www.linkedin.com/in/srideep-aalla-357005267" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://instagram.com/srideepaalla?igshid=OGQ5ZDc2ODk2ZA==" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i14} />
                </div>
                <div>
                  <h3>Hrishikesk Naramparambath</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Media Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="https://github.com/kingslayer1312" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://www.linkedin.com/in/hrishikesh-naramparambath-24b010222" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="https://instagram.com/quitepossiblyhrishi?igshid=ZDc4ODBmNjlmNQ==" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i15} />
                </div>
                <div>
                  <h3>Kathir M.N.</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Media Co-Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>


      
          </div>
        </div>
      </div>}
      <div>
        <button className={`w-0 h-0 border-[15px] border-solid border-transparent border-l-[#BF616A] ${isOpen2?'rotate-90' : ''} hover:scale-105 transition-all duration-300 ease-in-out`}onClick={toggleContent2}></button>
        <span class="text-[#EBCB8B] text-[25px]">~/club/boardmembers/2023</span>
      </div>
      { isOpen2 && <div class="flex flex-row flex-wrap justify-evenly">
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
        <div>
        <div className="flex flex-wrap justify-center items-center">
            <div class="relative group w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i1} />
                </div>
                <div>
                  <h3>Beleswar Prasad Padhi</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">President</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            
            <div class="relative group w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i2} />
                </div>
                <div>
                  <h3>Samridh Anand Paatni</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Vice-President</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg ">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i3} />
                </div>
                <div>
                  <h3>Abhishek Kumar</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Technical Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="https://github.com/AmrealAbhishek01"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="https://instagram.com/amrealabhishek/"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="https://lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="https://www.linkedin.com/in/abhishek-kumar-284849215/"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg ">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i6} />
                </div>
                <div>
                  <h3>Animesh Rai</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Technical Co-Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="group bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg ">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={i11} />
                </div>
                <div>
                  <h3>Aditi Rai</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Operations Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="relative group w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={ib} />
                </div>
                <div>
                  <h3>Praveenraj R S</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Operation Co-Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="relative group w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg ">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={ib} />
                </div>
                <div>
                  <h3>Arumilli Abhiram</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Management Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="inline-block">
                    <a
                      href="lugvitc.org"
                      class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter"
                      aria-hidden="true"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="relative group w-[300px] h-auto flex justify-center rounded-[10px] p-[13px]">
              <div class="bg-[#25282b] text-center overflow-hidden relative h-[355px] w-[300px] mb-[30px] pt-[30px] pb-10 rounded-lg">
                <div class="inline-block h-[135px] w-[130px] z-[1] relative mb-[50px] before:w-full before:h-0 before:bg-[#434c5e] before:absolute before:opacity-90 before:transition-all before:duration-[0.3s] before:ease-linear before:delay-[0s] before:rounded-[50%] before:scale-[3] before:bottom-[135%] before:inset-x-0 before:group-hover:h-full after:w-full after:h-full after:bg-[#484c50] after:absolute after:z-[-1] after:rounded-[50%] after:left-0 after:top-0">
                  <img class="w-[135px] h-[135px] transition-all duration-[0.9s] ease-[ease] delay-[0s] rounded-[50%] scale-100 group-hover:shadow-[0_0_0_14px_#25282b] group-hover:scale-[0.7]" src={ib} />
                </div>
                <div>
                  <h3>Nithin Kumar</h3>
                  <h4 class="text-[15px] text-[#4e5052] capitalize">Management Co-Head</h4>
                </div>
                <ul class="w-full bg-[#434c5e] absolute bottom-[-100px] transition-all duration-[0.5s] ease-[ease] delay-[0s] m-0 p-0 left-0 group-hover:bottom-0">
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-github" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-linkedin" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-instagram" aria-hidden="true" target="_blank"></a>
                  </li>
                  <li class="inline-block">
                    <a href="lugvitc.org" class="text-[17px] text-[white] transition-all duration-[0.3s] ease-[ease] delay-[0s] no-underline p-2.5 hover:text-[#25282b] hover:bg-[#f7f5ec] fa fa-twitter" aria-hidden="true" target="_blank"></a>
                  </li>
                </ul>
              </div>
            </div>

      
          </div>
        </div>
      </div>}
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
