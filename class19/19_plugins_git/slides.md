![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Plugins and GIT

---
##Objectives

*  Explore different jQuery plugins.
*  Explain how to install a plugin.
*  Identify different use cases for GIT.

---
##Agenda

* What Are Plugins?
* Plugin Examples
* jQuery Carousel
* Advanced Topics in GIT

---

## jQuery Plugins

* What are they?
* What can they be used for?

---

## jQuery Plugins

jQuery is set up in a way where developers can extend jQuery functionality via reusable additional javascript called a "plugin".

---

## jQuery Plugins

* Visual effects
* Navigation elements
* Analytics
* Loading data
---

##If there is a need for it...

Chances are good that someone has written a plugin for it.

---
##Evaluating Plugins

*  There are lots of plugins out there.
*  The quality varies widely.
*  Many are extensively tested and well maintained, but not all.
*  Some plugins are maintianed by the jQuery team!

---
##What to Look for When Evaluating

*  Ensure the plugin is well documented.
*  See if the author provides lots of examples.
*  Check the number of reported bugs/issues - how recently were these posted?
*  Does the plugin do more than it needs to? Be wary of extra overhead.
*  How active is the author on GitHub?

---

##Installing Plugins

*  Download the plugin.
*  Unzip the file, if neccessary.
*  Copy all files within your directory structure. Recommend in your JS folder.
*  Include the script tag to your plugin on your page, below the jQuery script tag and above your custom script tag.
*  If neccessary, include links to required CSS.
*  Call your plugin in your custom javascript file.

---

## Carousel

###Slick

http://kenwheeler.github.io/slick/

---

## Scrolling

###GoUp

http://ryuk87.github.io/jquery-goup/

###Skrollr

http://prinzhorn.github.io/skrollr/

###Waypoints

http://imakewebthings.com/waypoints/

---

## Sticky

###StickyKit

http://leafo.net/sticky-kit/

###Stick up

http://lirancohen.github.io/stickUp/

---
## Layout

###Masonry

http://masonry.desandro.com/

###Isotope

http://isotope.metafizzy.co/

###Full Page Scroll

http://alvarotrigo.com/fullPage/

---

## Bootstrap

###Lots of stuff

http://getbootstrap.com/javascript/

---
##Where to Find Plugins

*  [jQuery Website](http://plugins.jquery.com/)
*  [Unheap](http://www.unheap.com/)
*  [GitHub](https://github.com/)

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Carousel Part 2

---

##Advanced Topics in GIT

---

##What is GIT?

*  Version control
*  Backing up code
*  Code sharing

---

##Version Control

*  Manage changes to a project without overwriting any part of that project
*  History of your changes
*  Give a little message about changes on save
*  Go back in history
*  Multiple versions of code with branches

---

##Backing up Code

*  Git is like Dropbox except that with git, you're backing up the _history_ of your files too
*  We call each project a _repository_ or a _repo_
*  To get code from it and to put new code on it, we use the verbs `push` and `pull`

---

##Code Sharing

*  Code is better with friends!
*  Work remotely with a team

---

##Common Terminology

*  __Repository:__ A directory or storage space where your projects can live. Shorten to 'repo'. You can keep code files, text files, image files and even pdf or word documents inside a repository.
*  __Commit:__ This is the command that gives GIT its power. When you commit, you are taking a "snapshot" of your repository at that point in time, giving you a checkpoint to which you can reevaluate or restore your project to any previous state.
*  __Branch:__ In multiple-user project scenerios, users "branch off" of the main project with their own versions with changes they themselves have made. After they're done, it's time to "merge" that branch back with the "master," the main directory of the project.

---

##Cloning

Saving a copy of a repository to your local machine for you to make changes and contribute to.

---

##Forking

*  Coping someone else's repository to your account.
*  Allows you to freely experiment with changes without affecting the original project.
*  Used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.

---

##GIT for Deploying Code

*  Install GIT on your server
*  In your production folder (ex. `/var/www/myproject`), initialize a repository
*  Clone your codebase in GitHub
*  Pull down your code/changes
*  Make any configuration changes
*  You're live!

---

##GIT for Managing Workflows

*  Often used to manage complex development lifecylces
*  Allows developers to work on different pieces of the same project
*  Tracking the resolution of bugs and enhancements
*  Helps provide milestones for code reviews and QA
*  Prevents development code from deployment to production
*  Project Branch - Development - Test - Production
---

## GitHub for Hosting

*  GitHub lets you host static websites for free on GitHub Pages.
*  To set this up, save your code in a `gh-pages` branch.
*  They use <a href="http://jekyllrb.com/">Jekyll</a> to offer backend-like functionality.

---

##Homework

*	Prep for Final Project Presentation

--

##Exit Survey 

Class 19 - Plugins and GIT Exit Ticket: http://goo.gl/forms/0pEh2Vyx2Y
