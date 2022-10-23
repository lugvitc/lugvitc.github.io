import React, { useState } from 'react';
import classes from './recruitment.module.css';

function RecruitmentStep0({ nextStep, previousStep }) {
  const back = (e) => {
    e.preventDefault();
    previousStep();
  };
  const onApplyHandler = () => {
    nextStep();
  };
  return (
    <div>
      Hey there! The Linux Club Recruitments are here! Are you crazy about
      Linux? Do you get excited by the command line? Are you a beginner looking
      for exploring Linux? Open Source? Cybersecurity? We have it all! Join the
      coolest club out of the herd to discuss, share and lead all our ideas to
      Success!
      <br />
      <br />
      Departments:
      <br />
      1. Technical - Here you work upon developing realtime open source projects
      of interest as well as making all technical platform for our club events.
      <br />
      2. Management - Here you manage the flow of the club. It covers marketing
      for events, managing on the day of event etc.
      <br />
      3. Operations - Here you expand the network of the club among real world
      firms and reach out to sponsors for club events etc.
      <br />
      4. Media - Here you manage the social media handles of the club along with
      designing posters and reels for events and information. This also covers
      photography department.
      <br />
      5. Content - Here you draft the content for all important communications.
      This includes drafting content for sponsorship, or captions for posts or
      event report.
      <br />
      <button onClick={onApplyHandler}>Apply</button>
    </div>
  );
}

export default RecruitmentStep0;
