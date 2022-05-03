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

Different Routes Used in Our Application:-
Route &nbsp;&nbsp;&nbsp;Method	Description
/	                    GET	    Login Page
/logout	                GET	    Logout 
/dashboard	            GET	    Users Dashboard
/	                    POST	Add Blog
/add	                GET	    Add Blog Page
/stories	            GET	    Show the Public Blogs Page
/stories/:id	        GET	    Get A specific Blog
/stories/edit/:id	    GET	    Show Edit Page of that Blog
/stories/edit/:id	    PUT	    Update the Blog
/stories/:id	        DELETE	Delete a Blog
/stories/user/:userId	GET     Get All blog of that User

