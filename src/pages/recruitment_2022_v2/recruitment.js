import { useState } from 'react';
import TerminalWindow from '../../components/terminal/terminalWindow';
import RecruitmentStepOne from './recruitmentStep1';
import RecruitmentStepTwo from './recruitmentStep2';
import Confirm from './recruitment_confirm';
import Success from './recruitment_success';

function RecruitmentStep() {
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({
        name: '',
        regno: '',
        email: '',
        contact: '',
        whatLinux: '',
        whyLinux: '',
        expLinux: '',
        prefDept: ' ',
	prefDept2: ' ',
        flagCommand: '',
	tech1: '',
	tech2: '',
	tech3: '',
	mang1: '',
	mang2: '',
	ops1: '',
	ops2: '',
	media1: '',
	media2: '',
	content1: '',
	content2: ''
    });

    //proceed to next step of form
    const nextStep = () => {
        setStep(step + 1);
    };

    //Go back to previous step of form
    const previousStep = () => {
        setStep(step - 1);
    };

    //Handle Fields Change
    const handleChange = input => e => {
        setFormValues({ ...formValues, [input]: e.target.value });
    };
    switch (step) {
        case 1:
            return (
                <RecruitmentStepOne
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={formValues}
                />
            );
        case 2:
            return (
                <RecruitmentStepTwo
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={formValues}
                    previousStep={previousStep}
                />
            );
	case 3:
            return (
                <Confirm
                    nextStep={nextStep}
                    values={formValues}
                    previousStep={previousStep}
                />
            );
        case 4:
            return <Success />;
        default:
            return 'try again :(';
    }
}

export default function UserForm() {
    return (
        <>
            <TerminalWindow
                title='Recruitment 2022'
                prompts={[
                    { path: '~', command: 'cd recruitment' },
                    {
                        path: '~/recruitment',
                        command: './recruitment.exe -v 2022'
                    }
                ]}
            >
                Hey there! The Linux Club Recruitments are here! Are you crazy
                about Linux? Do you get excited by the command line? Are you a
                beginner looking for exploring Linux? Open Source?
                Cybersecurity? We have it all! Join the coolest club out of the
                herd to discuss, share and lead all our ideas to Success!
	    <br /><br />
	    Departments:
	    <br />1. Technical - Here you work upon developing realtime open source projects of interest as well as making all technical platform for our club events.
	    <br />2. Management - Here you manage the flow of the club. It covers marketing for events, managing on the day of event etc.
	    <br />3. Operations - Here you expand the network of the club among real world firms and reach out to sponsors for club events etc.
	    <br />4. Media - Here you manage the social media handles of the club along with designing posters and reels for events and information. This also covers photography department.
	    <br />5. Content - Here you draft the content for all important communications. This includes drafting content for sponsorship, or captions for posts or event report.
            </TerminalWindow>
            <RecruitmentStep />
        </>
    );
}

