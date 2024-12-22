![The She Codes Logo](../../global_images/logo.png)

# React Project: Crowdfunding App (Part 2)<br><sub><sup><sub>Due: Last Sunday of the module at 11:59pm.</sub></sup></sub>

## Project Description
Kickstarter, Go Fund Me, Kiva, Change.org, Patreon… All of these different websites have something in common: they provide a platform for people to fund projects that they believe in, but they all have a slightly different approach. You are going to create your own crowdfunding website (this time the front-end), and put your own spin on it!

## Project Requirements
Here's a reminder of the required features. Your crowdfunding project must:

- [X] Be separated into two distinct projects: an API built using the Django Rest Framework and a website built using React. 
- [X] Have a cool name, bonus points if it includes a pun and/or missing vowels. See https://namelix.com/ for inspiration. <sup><sup>(Bonus Points are meaningless)</sup></sup>
- [X] Have a clear target audience.
- [X] Have user accounts. A user should have at least the following attributes:
  - [X] Username
  - [X] Email address
  - [X] Password
- [X] Ability to create a “project” to be crowdfunded which will include at least the following attributes:
  - [X] Title
  - [X] Owner (a user)
  - [X] Description
  - [X] Image
  - [X] Target amount to fundraise
  - [X] Whether it is currently open to accepting new supporters or not
  - [X] When the project was created
- [X] Ability to “pledge” to a project. A pledge should include at least the following attributes:
  - [X] An amount
  - [X] The project the pledge is for
  - [X] The supporter/user (i.e. who created the pledge)
  - [X] Whether the pledge is anonymous or not
  - [X] A comment to go along with the pledge
- [X] Implement suitable update/delete functionality, e.g. should a project owner be allowed to update a project description?
- [X] Implement suitable permissions, e.g. who is allowed to delete a pledge?
- [X] Return the relevant status codes for both successful and unsuccessful requests to the API.
- [X] Handle failed requests gracefully (e.g. you should have a custom 404 page rather than the default error page).
- [X] Use Token Authentication.
- [X] Implement responsive design.

## Additional Notes
No additional libraries or frameworks, other than what we use in class, are allowed unless approved by the Lead Mentor.

Note that while this is a crowdfunding website, actual money transactions are out of scope for this project.

## Submission
To submit, fill out [this Google form](https://forms.gle/34ymxgPhdT8YXDgF6), including a link to your Github repo. Your lead mentor will respond with any feedback they can offer, and you can approach the mentoring team if you would like help to make improvements based on this feedback!

Please include the following in your readme doc:
- [X] A link to the deployed project.
- [X] A screenshot of the homepage
- [X] A screenshot of the project creation page
- [X] A screenshot of the project creation form
- [X] A screenshot of a project with pledges
- [X] A screenshot of the resulting page when an unauthorized user attempts to edit a project (optional, depending on whether or not this functionality makes sense in your app!)

## Link to deployed project:

https://incomparable-babka-c5d0a4.netlify.app/

##  homepage screenshot
![A website homepage for a crowdfunding app called "Vexx". Various shades of green were used in the styling. There is also a weird looking fish called Veronica in the top right corner](./submission_images/vexxhomepage.png)

##  pledge screenshot
![A pledging form for a crowdfunding app called "Vexx". Various shades of green were used in the styling.](./submission_images/vexxpledge.png)

##  create a project screenshot
![A form for creating a project within a crowdfunding app called "Vexx". Various shades of green were used in the styling.](./submission_images/vexxxcreation.png)


##  Unauthorised update attempt
![A picture of the feedback of an unauthorised user trying to update a project within a crowdfunding app called "Vexx". Various shades of green were used in the styling.](./submission_images/vexxunauthedit.png)

##  Unauthorised delete attempt
![A picture of the feedback of an unauthorised user trying to delete a project within a crowdfunding app called "Vexx". Various shades of green were used in the styling.](./submission_images/vexxunauthdelete.png)

