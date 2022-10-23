import { useState } from 'react';
import TerminalWindow from '../../components/terminal/terminalWindow';
import RecruitmentStep0 from './recruitmentStep0';
import RecruitmentStepOne from './recruitmentStep1';
import RecruitmentStepTwo from './recruitmentStep2';
import Confirm from './recruitment_confirm';
import Success from './recruitment_success';

function RecruitmentStep() {
  const [step, setStep] = useState(0);
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
    content2: '',
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
  const handleChange = (input) => (e) => {
    setFormValues({ ...formValues, [input]: e.target.value });
  };
  switch (step) {
    case 0:
      return (
        <>
          <RecruitmentStep0 nextStep={nextStep} previousStep={previousStep} />
        </>
      );
    case 1:
      return (
        <>
          <RecruitmentStepOne
            nextStep={nextStep}
            handleChange={handleChange}
            values={formValues}
            previousStep={previousStep}
          />
        </>
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

export default function UserForm({ step }) {
  return (
    <>
      <TerminalWindow
        title="Recruitment 2022"
        prompts={[
          { path: '~', command: 'cd recruitment' },
          {
            path: '~/recruitment',
            command: './recruitment.exe -v 2022',
          },
        ]}
      >
        <RecruitmentStep />
      </TerminalWindow>
    </>
  );
}
