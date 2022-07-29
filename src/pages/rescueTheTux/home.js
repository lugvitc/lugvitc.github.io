import TerminalWindow from '../../components/terminal/terminalWindow';
import { useState } from 'react';
import WelcomeText from './welcome';
import Challenges from './challenges';
import LeaderBoard from './leaderboard';
import Registration from './registration';
import TeamRegistration from './teamRegistration';
import Login from './login';

export default function RTTEvent() {
  const [eventStep, setEventStep] = useState(0);
  
  const nextStep = () => {
	  setEventStep(eventStep+1);
  };
  
  const prevStep = () => {
	  setEventStep(eventStep-1);
  };

  const homePage = () => {
	  setEventStep(0);
  };

  const registerPage = () => {
	  setEventStep(1);
  };

  const createTeamPage = () => {
	  setEventStep(2);
  };

  const loginTeamPage = () => {
	  setEventStep(3);
  };

  const challengesPage = () => {
	  setEventStep(4);
  };

  const LeaderboardPage = () => {
	  setEventStep(5);
  };

  switch(eventStep) {
	  case 0: 
		  return (
			  <WelcomeText 
			    nextStep = {nextStep} 
			    prevStep = {prevStep}
			    registerPage = {registerPage}
			  />
		  );
	  case 1:
		  return (
			  <Registration
			    nextStep = {nextStep}
			    prevStep = {prevStep}
			    createTeamPage = {createTeamPage}
			    loginTeamPage = {loginTeamPage}
			  />
		  );
	  case 2:
		  return (
			  <TeamRegistration
			    nextStep = {nextStep}
			    prevStep = {prevStep}
			    loginTeamPage = {loginTeamPage}
			  />
		  );
	  case 3:
		  return (
			  <Login 
			    nextStep = {nextStep}
			    prevStep = {prevStep}
			    challengesPage = {challengesPage}
			  />
		  );
	  case 4:
		  return (
			  <Challenges
			    nextStep = {nextStep}
			    prevStep = {prevStep}
			    LeaderboardPage = {LeaderboardPage}
			  />
		  );
	  case 5:
		  return (
			  <LeaderBoard
			    nextStep = {nextStep}
			    prevStep = {prevStep}
			    challengesPage = {challengesPage}
			  />
		  );
  }
 
}
