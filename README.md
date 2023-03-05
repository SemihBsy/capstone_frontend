# Twitter Clone

This is a Twitter clone built with ReactJS, Redux, NodeJS, Express, Firebase and MongoDB (MERN).


---

#### Functionality:

- Users should be able to register an account and to log in to the app.
- Users should be able to post new tweets (text only), and delete existing ones.
- Users should be able to comment to tweets.
- Users should be able to follow other users.
- Users should be able to see the recent tweets from their followers on their home timeline.
- Users should be able to send private messages to other users. If two users are mutual followers then they can interact with each other in a private conversation.


### ROUTES

#### GET

- GET /api/users/me
- GET /api/users/:username
- GET /api/users/:username/followers
- GET /api/users/:username/following
- GET /api/users/:username/following
- GET /api/users/:username/following
- GET /api/users/:username/tweets
- GET /api/tweets/timeline
- GET /api/tweets/:tweetId
- GET /api/tweets/:tweetId/comments

#### POST

- POST /api/users/signup
- POST /api/users/login
- POST /api/users/logout
- POST /api/users/logoutAll
- POST /api/tweets
- POST /api/tweets/:tweetId/comments
- POST /api/tweets/:tweetId/like

#### PUT

- PUT /api/users/me?name=Elon+Musk
- PUT /api/tweets/:tweetId

#### DELETE

- DELETE /api/users/me
- DELETE /api/tweets/:tweetId
- DELETE /api/tweets/:tweetId/comments
- DELETE /api/tweets/:tweetId/like

#### MOCKUPS
<img src="https://i.imgur.com/iaIRHQ8.png" width="600px" style="border: 2px solid black">
<br>
<img src="https://i.imgur.com/zh1jNvk.png" width="600px" style="border: 2px solid black">


### MODELS

<img src="https://i.imgur.com/Ptt5M36.png" width="600px" style="border: 2px solid black">
<br>
<img src="https://i.imgur.com/m4XnG4D.png" width="600px" style="border: 2px solid black">



### Link to Project

[Backend Deployed Project Page](https://zweeter-backend.onrender.com)  
[Frontend Deployed Project Page](https://super-sfogliatella-4f8028.netlify.app/)

