                                    Blog App
We created a Blog Posting web application using MERN Stack. <br>
In Which any user can login and write blogs and can read other user’s blogs.<br>
 User can also edit their blogs.<br>
User can add images, code snippets and link in blog. <br> 
we are using Google Oauth 2.0 API & Passport to login & authenticate the user.<br>
& Using a NoSQL Database MongoDB to store the data.<br>
Using Git for the version control and using GitHub to store the code.<br> 
In this project we applied REST API and following MVC Architecture.<br>
 We Used Heroku to Host our application. 

[GitHub Repository](https://github.com/attainu/backend-project-Nileshwar-Paul-au26.git)

[Deploy Link](https://blog-app-au.herokuapp.com)


Installation:-  <br>
Clone the Given Repository from GitHub. <br>
$ git clone https://github.com/attainu/backend-project-Nileshwar-Paul-au26.git. <br>
Go to inside this repository directory.  <br>
Open the terminal <br>
type “$ npm i” to install all the dependencies. <br>
To start the application type “$ npm run start” <br>
Go to your browser  localhost:3001 <br>

Different Routes Used in Our Application:- <br>
Route&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Method&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Description
<br>
/&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;GET&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;LoginPage
<br>
/logout&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;GET&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Logout <br>
/dashboard&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;GET&emsp;&emsp;&emsp;&emsp;&emsp;Users Dashboard <br>
/&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;POST&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Add Blog <br>
/add&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;GET&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Add Blog Page<br>
/stories&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;GET&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Show the Public Blogs Page <br>
/stories/:id&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;GET&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Get A specific Blog <br>
/stories/edit/:id&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;GET&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Show Edit Page of that Blog <br>
/stories/edit/:id&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;PUT&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Update the Blog <br>
/stories/:id&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;DELETE&emsp;&emsp;&emsp;&emsp;&emsp;Delete a Blog <br>
/stories/user/:userId&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;GET&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Get All blog of that User

