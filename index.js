const express = require("express");

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

const githubData = {
    "login": "ha346",
    "id": 97354718,
    "node_id": "U_kgDOBc2D3g",
    "avatar_url": "https://avatars.githubusercontent.com/u/97354718?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ha346",
    "html_url": "https://github.com/ha346",
    "followers_url": "https://api.github.com/users/ha346/followers",
    "following_url": "https://api.github.com/users/ha346/following{/other_user}",
    "gists_url": "https://api.github.com/users/ha346/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ha346/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ha346/subscriptions",
    "organizations_url": "https://api.github.com/users/ha346/orgs",
    "repos_url": "https://api.github.com/users/ha346/repos",
    "events_url": "https://api.github.com/users/ha346/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ha346/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Harsh Shukla",
    "company": "Student",
    "blog": "",
    "location": "Gwalior",
    "email": null,
    "hireable": null,
    "bio": "I'm a full stack web developer",
    "twitter_username": "HS2982",
    "public_repos": 21,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-01-08T16:43:39Z",
    "updated_at": "2024-03-25T07:37:20Z"
  }
app.get('/', (req, res) => {
    res.send("This is Home Page");
});

app.get("/twitter", (req, res) => {
    res.send("This is twitter page");
});

app.get("/about", (req, res) => {
    res.send("<h1>This is about page</h1>");
});

app.get('/github', (req, res) => {
    res.json(githubData);
});

app.listen(PORT, () => {
    console.log("The server starts at Port No.: ", PORT);
});