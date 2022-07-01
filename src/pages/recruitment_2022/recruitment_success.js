import TerminalWindow from '../../components/terminal/terminalWindow';

export default function Success() {
    return (
        <TerminalWindow title='Submission Confirmed'>
            <div className='form-start'>Success...!</div>
            <div>
                Thank you for onboarding with the Linux Club! We will contact
                you soon to get you all started with :)
            </div>
        </TerminalWindow>
    );
}

