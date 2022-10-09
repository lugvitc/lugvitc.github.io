# Linux User Club, VIT Chennai
- Landing page for the Linux Club of VIT Chennai.
  
# Project structure
All the code related to the website are placed inside the `src` directory.
* **components** - contains user-defined react components as required for any of the pages. If you need to add a terminal in the background for a text, or a codeblock, or add an typewriting effect to the text, this is where you should import the functionality from.
* **hooks** - contains user-defined react hooks as requried for any of the pages. If you need to send an API request, `useFetch` is the hook you're looking for. Use all the hooks from this directory in your code, or add new ones if needed.
* **images** - contains all images as requried for any of the pages. If you need to add a new image, put that up in this directory and use the correct path.
* **pages** - contains all the pages that you see in the website. If you wish to add a new page, create a new `.js` file here.
* **styles** - contains all the css styling that you need to add to all of the pages/components globally.
* **index.js** - contains all the pages shown in the homepage at topbar. If you wish to add pages to the topbar, put their link in this file.

# Test the project locally
* Fork the repo.
* Clone your copy of the repo to your local machine.
* use command `npm install` to install all packages required by the project.
* use command `npm start` to see the website rendered in your localhost.
* Now all the changes made in your local system will reflect in the rendered localhost website.

# Roadmap of features expected
* a `members` page which shows the board members of Linux Club as well as lists out all the members of the club. (style it the best way you can)
* a `projects` page which shows all the projects developed by Linux Club and links to their github repositories. (style it the best way you can)
* a `quiz` platform page in our website which allows us to create a quiz room, generate credentials for the room, and show a list of questions with options to all the participants in the quiz room. (similar to quizizz and kahoot)
* a `blog` page in our website which lists the blogs written by the members of Linux Club. The popup blog overview should have the blog title, author, department of author in club, and short description of the blog. The popup overview should redirect to the original blog written by the author.
* a `games` page in our website which allows the users to play simple games like `tic-tac-toe` or `the chrome dino` to kill boredom.
* a `hackers-terminal` page in our website which allows the users to have a feel of typing fast like a movie hacker. See [hackertyper](https://hackertyper.net/) for demo.
* any other feature you would like to add in our website to make it cool, feel free to do so. Open an issue for new feature and tell us what you want to do, then put up a PR to implement it!

# Contributing
Thank you for your interest in contributing for the project. Checkout the [Contributing Guidelines](https://github.com/lugvitc/lugvitc.github.io/blob/master/CONTRIBUTING.md) before submitting any PR. Submit small changes in a single PR so that it is easier to review (for instance, work on one feature in one PR). 

