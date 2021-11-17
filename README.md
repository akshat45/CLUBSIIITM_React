<p align="center"><a href="https://clubs-iiitm.herokuapp.com/"><img src="https://user-images.githubusercontent.com/56078790/140655413-1db279d0-270f-4e0d-9442-c278de6b0328.png" alt="CLUBS-IIITM" width="200"></a></p>
<h4 align="center">A club management system build for  <a href="https://www.iiitm.ac.in/" target="_blank">IIITM</a> community.</h4>
<p align="center"> •
  <a href="#overview">Overview</a> •
  <a href="#local-installation">Local Installation</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#team-members">Team Members</a>
</p>


<p id="overview"></p>

## Overview :

IIITMG Club Management Web Application aims to create a platform for IIITMG
students which will enable them to resume the activities of the clubs (such as Manchtantra, Uthaan etc) which have
stopped due to the pandemic. After signing into the website by using IIITMG mail id, a student will be allotted a
unique id. He/she has to fill up a form which will ask for his/her personal
information such as information about the clubs which he/she has joined and the
clubs for which he/she has applied. After applying for a particular club the student
can be selected/rejected by the club head which will be notified via email to the
student. Club heads can control the website according to the club that they have
been allocated. Also one can view all the recent activities of any club and its
members. In order to incorporate all the above functionalities in the web application, we have used
front-end technologies such as HTML, CSS, Javascript and back-end
technologies such as NodeJS, ExpressJS and MongoDB.

<p id="local-installation"></p>

## Local Installation

1. Clone this repo using <code> git clone https://github.com/akshat45/CLUBS-IIITM.git </code>
2. After cloning create a <code>.env</code> file to store all the environment variables
3. Fill the <code>.env</code> with the following content : 
(Note: RETRACTED means we should not share this variable, and thus should not be present in public repos)
```

CONNECTION_URL = RETRACTED (Put your mongodb atlas url here)
CLIENT_ID = RETRACTED (Put Your client id given by google developer console)
CLIENT_SECRET =  RETRACTED (Put Your client secret given by google developer console)
EMAIL = RETRACTED (Enter the email using which all clubs related emails will be sent)
secret =  RETRACTED (Any secret key of your choice)
CLIENT_ID2 = RETRACTED 
CLIENT_SECRET2 = RETRACTED
REFRESH_TOKEN2 = RETRACTED
CALLBACK_URL = RETRACTED
```
4. After setting the <code>.env</code> file, run the command <code>npm i</code> so that npm automatically installs all the node packages and their dependencies which are required for the project
5. To start the server run the command <code>npm start</code>


<p id="tech-stack"></p>

## Tech Stack

<b>FRONTEND</b>
<ul>
    <li> React.js</li>
    <li> Redux </li>
		<li>HTML</li>
		<li>CSS</li>
		<li>JS</li>
                <li>Bootstrap</li>
</ul>

<b>BACKEND</b>

<ul>
		<li>NodeJS</li>
		<li>ExpressJS</li>
    		<li>MongoDB</li>
</ul>

<p> Backend Repo Url : https://github.com/ninad-0408/CLUBSIIITM_Server 
<p id="team-members"></p>

## Team Members

<p align="center">

<a href="https://github.com/akshat45">
	<img src="https://github.com/akshat45.png" width="60px">
</a>

<a href="https://github.com/jayraikhere">
	<img src="https://github.com/jayraikhere.png" width="60px">
</a>
<a href="https://github.com/ninad-0408/">
	<img src="https://github.com/ninad-0408.png" width="60px">
</a>
</p>
<p align="center">
		<a href="https://github.com/akshat45">Akshat Gupta</a> •
		<a href="https://github.com/jayraikhere">Jay Raikhere</a> 
     <a href="https://github.com/ninad-0408/">Ninad Kalanke</a> 
</p>
