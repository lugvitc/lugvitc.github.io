# Linux User Club, VIT Chennai
- Landing page for the club
  
# Pages Description
  
1. Welcome : Shows the welcome text to the participant. It describes the schedule of the event. And also shows the background story of the competition (the kidnapping thing of Tux by Bill gates. We can add designed videos/images here to make it more interesting.  
2. Instructions : Shows the instructions to the participants which they need to follow while playing the competition.  
3. Registration : A normal registration page having name, reg.no, email, contact, payment id stuffs.  
4. Login : A normal login page whihc has the username and password field and a submit button. Must also have the forgot password option.  
5. Challenges : Show all the challenges in stages to the participant. Every challenge must be enclosed in a box which pops up when the participant clicks it. Every box should have a input flag field and a submit button, which takes the flag entered by the participants and checks if its correct or not.  
6. Leaderboard : Make a leaderboard page which shows all the teams participating and their current score. Arrange the teams in descending order. Can add leaderboard graphs if time permits. but basic thing required is showing all teams in descending order.  
  
# Contributing Guidelines for Rescue-The-Tux event
  
1. Fork this repository into your own copy.
2. Clone your copy of the repository into your local machine.
3. Run the command `npm install` in the local repo.  
4. Run the command `git checkout -b rescue-the-tux origin/rescue-the-tux` to make the local branch track the remote branch.  
5. Create a unique branch in your local repo. Branch name format: <user_name>-add-<page>. So, if your name is 'Tux', and you are adding the Leaderboard page for the event, then your branch name should be : `Tux-add-Leaderboard`. Ensure that your unique branch is being created from the `rescue-the-tux` branch source, and not the master branch source.
6. Run the command `npm start` to see how the website looks before you add your changes.  
7. Go to the respective directory of the page you are wanting to add.  
    * if you want to add challenges page, go to `src/pages/rescueTheTux/challenges`.
    * similarly if you want to add leaderboard page, registration page or login page etc. go to `src/pages/rescueTheTux/leaderboard`, `src/pages/rescueTheTux/registration`, `src/pages/rescueTheTux/login` directories.  
8. Make your changes in the respective directory. You can add as many files as you want in your directory to make your page. Please do not make any changes in other directories. If you want to work on mulitple pages, open multiple Pull Requests. But in a single PR, just deal with the respective page directory.  
9. Run the command `npm start` again to see how the website looks after your changes have been added. 
10. Save and Commit your files in the local repo.
11. Push your Commits to the remote repo (your copy of the main repo).
12. Create a Pull Request from your unique branch to the **rescue-the-tux** branch of our main repo.

