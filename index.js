require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

const githubData={
    "login": "Sarthakdubey-dev",
    "id": 165370444,
    "node_id": "U_kgDOCdtaTA",
    "avatar_url": "https://avatars.githubusercontent.com/u/165370444?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Sarthakdubey-dev",
    "html_url": "https://github.com/Sarthakdubey-dev",
    "followers_url": "https://api.github.com/users/Sarthakdubey-dev/followers",
    "following_url": "https://api.github.com/users/Sarthakdubey-dev/following{/other_user}",
    "gists_url": "https://api.github.com/users/Sarthakdubey-dev/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Sarthakdubey-dev/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Sarthakdubey-dev/subscriptions",
    "organizations_url": "https://api.github.com/users/Sarthakdubey-dev/orgs",
    "repos_url": "https://api.github.com/users/Sarthakdubey-dev/repos",
    "events_url": "https://api.github.com/users/Sarthakdubey-dev/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Sarthakdubey-dev/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Sarthak Dubey",
    "company": null,
    "blog": "",
    "location": "New Delhi India",
    "email": null,
    "hireable": null,
    "bio": "I am a final-year undergraduate student.",
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 3,
    "created_at": "2024-03-29T08:06:27Z",
    "updated_at": "2026-01-20T11:18:38Z"
  }

app.get('/', (req, res) => {
    res.send('https://github.com/Sarthakdubey-dev/backendlearn')
})

app.get('/twitter', (req, res) => {
    res.send('this is what twitter looks like without me!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})