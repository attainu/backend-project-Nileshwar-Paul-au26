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

<br>
<table>
<thead>
  <tr>
    <th>**********Route*********</th>
    <th>**********Method********</th>
    <th>**********Description*****</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>/</td>
    <td>GET</td>
    <td>LoginPage</td>
  </tr>
  <tr>
    <td>/logout</td>
    <td>GET</td>
    <td>Logout</td>
  </tr>
  <tr>
    <td>/dashboard</td>
    <td>GET</td>
    <td>Users Dashboard</td>
  </tr>
  <tr>
    <td>/</td>
    <td>POST</td>
    <td>Add Blog</td>
  </tr>
  <tr>
    <td>/add</td>
    <td>GET</td>
    <td>Blog Page</td>
  </tr>
  <tr>
    <td>/stories</td>
    <td>GET</td>
    <td>Show Public Blogs</td>
  </tr>
  <tr>
    <td>/stories/:id</td>
    <td> GET </td>
    <td>Get A specific Blog</td>
  </tr>
  <tr>
    <td>/stories/edit/:id</td>
    <td> GET </td>
    <td>Show Edit Page of that Blog</td>
  </tr>
  <tr>
    <td>/stories/edit/:id</td>
    <td>PUT</td>
    <td>Update the Blog</td>
  </tr>
  <tr>
    <td>/stories/:id</td>
    <td>DELETE</td>
    <td>Delete a Blog</td>
  </tr>
  <tr>
    <td>/stories/user/:userId </td>
    <td> GET </td>
    <td>Get All blog of that User</td>
  </tr>
</tbody>
</table>