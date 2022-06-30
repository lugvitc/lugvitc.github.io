import { useState } from 'react';
import TerminalWindow from '../../components/terminal/terminalWindow';
import RecruitmentStepOne from './recruitmentStep1';
import RecruitmentStepTwo from './recruitmentStep2';
import RecruitmentStepThree from './recruitmentStep3';
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
        prefDept: 'Technical Department',
        flagCommand: ''
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
                <RecruitmentStepThree
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={formValues}
                    previousStep={previousStep}
                />
            );
        case 4:
            return (
                <Confirm
                    nextStep={nextStep}
                    values={formValues}
                    previousStep={previousStep}
                />
            );
        case 5:
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
                herd to discuss, share and lead all our ideas to Success! We
                hope you find our will equal to yours :D
            </TerminalWindow>
            <RecruitmentStep />
        </>
    );
}

