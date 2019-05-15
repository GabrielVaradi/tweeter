/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
  
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }
  

const createTweetElement = function(tweetData) {
    const $article = $("<article>");
    const $header = $("<header>");
    const $avatar = $("<div>").addClass("avatar"); // HERE THE DIV SHOULD BE <IMG>
    const $headerUserName = $("<div>").addClass("username");
    const $headerEmail = $("<div>").addClass("email");
    
    const $divTextBox = $("<div>").addClass("box");
    const $divText = $("<div>").addClass("tweetText");
    const $footer = $("<footer>");
    const $footerTime = $("<dive>").addClass("time");
  
    $(".tweet-container").append($article);
    $article.append($header);
    $article.append($divTextBox);
    $article.append($footer);
    $header.append($avatar);
    $header.append($headerUserName);
    $header.append($headerEmail);
    
    $divTextBox.append($divText);
    $footer.append($footerTime);
  
    const $pic = tweetData.user.avatars.small;
    $avatar.append($pic)
  
    const $username = tweetData.user.name
    $headerUserName.append($username)
  
    const $email = tweetData.user.handle
    $headerEmail.append($email)
  
    const $text = tweetData.content.text
    $divText.append($text);
  
    const $time = tweetData.created_at
    $footerTime.append($time)
  

};

function renderTweets(tweets) {
    for (const users of tweets){
        createTweetElement(users);
    }
  }


// const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $("#tweets-container").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

$(function() {
    renderTweets(data);
    
  });