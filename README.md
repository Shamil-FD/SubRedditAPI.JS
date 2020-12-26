# SubRedditAPI.JS

A simple API module to fetch images, posts from reddit.

**If you have any issues, just make a new PR on the repo or DM me on Discord Shamil#0810**

## Setup and Configuration

Initialisation
```javascript
const { newPost, stats, random, rising, top, search } = require("subredditapi.js");
```


## An example of what could return with your api call
```javascript
{
  upvotes: 70435,
  author: 'Thelazytimetraveller',
  title: 'Every cloud has a silver lining',
  url: 'https://reddit.com/r/dankmemes/comments/kjnssq/every_cloud_has_a_silver_lining/',
  subreddit: 'dankmemes',
  image: 'https://i.redd.it/l116ve0ek7761.jpg',
  upvoteRatio: 0.89,
  nsfw: false,
  video: false,
  created: '2020-12-25T06:06:35.000Z',
  totalAwardsReceived: 303,
  commentsCount: 280,
  description: ''
}
```

## To get a random post from a subreddit

```javascript
(async() => {

let post = await random("subreddit");
console.log(post) // Logs all the stuff returned with the post;

})();
```

## To get a top voted post from a subreddit
```javascript
(async() => {

let post = await top("subreddit", "sortType"); // You can sort the sorting type with 'hour', 'day', 'week', 'month', 'year', 'all' to sort by top posts of that particular time limit
console.log(post);
})();
```

## To get a new post from a subreddit
```javascript
(async() => {

let post = await newPost("subreddit");
console.log(post);

})();
```

## To get a rising post from a subreddit
```javascript
(async() => {

let post = await rising("subreddit");
console.log(post);

})();
```

## To search up a post
```javascript
(async() => {

let post = await search("query");
console.log(post);

})();
```

## To get the total amount of requests made on the API
```javascript
(async() => {

let totalRequests = await stats();
console.log(totalRequests);

})()
```
