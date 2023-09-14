import React from 'react'
import TerminalWindow from '../../components/terminal/terminalWindow';
// import styles from './Contact.css';
import './Contact.css';
import Dock from '../../components/dock/dock';
function Contact() {
  return (
    <>
    <TerminalWindow
            prompts={[
                { path: '~', command: 'cd contact' },
                { path: '~/contact', command: 'cat details.txt' }
            ]}
            title='Contact'
        >
        
        <div className="flex flex-row flex-wrap justify-evenly my-5">
            <div className="flex flex-col items-center">
                <div className='basis-1 my-2 textColor1'><h1>Mail here for Queries</h1></div>
                <div className='basis-1 my-2 textColor2'><a href="mailto:cclinuxclub@vit.ac.in">   <i class="fa-solid fa-envelope fa-beat fa-lg"></i>  cclinuxclub@vit.ac.in</a></div> 
            </div>
            <div className="flex flex-col items-center">
                <div className='basis-1 my-2 textColor1'><h1>President</h1></div>
                <div className='basis-1 my-2 textColor2'><a href="tel:+919334138650"><i class="fa-solid fa-phone fa-bounce"></i> +91 9334138650</a></div> 
            </div>
            <div className="flex flex-col items-center">
                <div className='basis-1 my-2 textColor1'><h1>Vice-President</h1></div>
                <div className='basis-1 my-2 textColor2'><a href="tel:+918072320756"><i class="fa-solid fa-phone fa-bounce"></i> +91 8072320756</a></div> 
            </div>
        </div>

        <div className='my-5 flex flex-row'><h1 className='textColor1'>lug@vitc:</h1><h1 className='textColor3 px-2'>~/contact/departments$ </h1><h1 className='textColor2'> cat department.txt</h1></div>

              
        {/* <div className="grid grid-rows-3 grid-flow-col gap-4 mx-5 px-3 justify-center ${styles}"> */}
        <div className="gridBox">
        {/* <div className={styles.respon}> */}
            <div className="flex flex-row flex-wrap container">
                <a className='mx-3 textColor1' href="">Technical:</a>
                <a className='textColor2' href="mailto:technical@lugvitc.org"><i class="fa-solid fa-envelope fa-beat fa-lg"></i>  technical@lugvitc.org</a>
            </div>
            <div className="flex flex-row flex-wrap container">
                <a className='mx-3 textColor1' href="">Operations:</a>
                <a className='textColor2' href="mailto:operations@lugvitc.org">   <i class="fa-solid fa-envelope fa-beat fa-lg"></i>  operations@lugvitc.org</a>
            </div>
            <div className="flex flex-row flex-wrap container">
                <a className='mx-3 textColor1' href="">Management:</a>
                <a className='textColor2' href="mailto:management@lugvitc.org">   <i class="fa-solid fa-envelope fa-beat fa-lg"></i>  management@lugvitc.org</a>
            </div>
            <div className="flex flex-row flex-wrap container">
                <a className='mx-3 textColor1' href="">Media:</a>
                <a className='textColor2' href="mailto:media@lugvitc.org">   <i class="fa-solid fa-envelope fa-beat fa-lg"></i>  media@lugvitc.org</a>
            </div>
            <div className="flex flex-row flex-wrap container">
                <a className='mx-3 textColor1' href="">Advisory:</a>
                <a className='textColor2' href="mailto:advisory@lugvitc.org">   <i class="fa-solid fa-envelope fa-beat fa-lg"></i>  advisory@lugvitc.org</a>
            </div>
            <div className="flex flex-row flex-wrap container">
                <a className='mx-3 textColor1' href="">Treasury:</a>
                <a className='textColor2' href="mailto:treasury@lugvitc.org">   <i class="fa-solid fa-envelope fa-beat fa-lg"></i>  treasury@lugvitc.org</a>
            </div>
            <div className="flex flex-row flex-wrap container col-span-3">
                <a className='mx-3 textColor1' href="">Content:</a>
                <a className='textColor2' href="mailto:content@lugvitc.org">   <i class="fa-solid fa-envelope fa-beat fa-lg"></i>  content@lugvitc.org</a>
            </div>
        </div>

            {/* buttons */}
            <div className='my-5 flex flex-row'><h1 className='textColor1'>lug@vitc:</h1><h1 className='textColor3 px-2'>~/contact/social_media$ </h1><h1 className='textColor2'> cat socialMediaLinks.txt</h1></div>

            <Dock/>
            
		
        </TerminalWindow>
    </>
  )
}

export default Contact
