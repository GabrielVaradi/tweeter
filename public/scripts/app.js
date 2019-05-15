/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json
const data = [
  {
    user: {
      name: "Newton",
      avatars: {
        small: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        regular: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        large: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      handle: "@SirIsaac"
    },
    content: {
      text:
        "If I have seen further it is by standing on the shoulders of giants"
    },
    created_at: 1461116232227
  },
  {
    user: {
      name: "Descartes",
      avatars: {
        small: "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        regular: "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        large: "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      handle: "@rd"
    },
    content: {
      text: "Je pense , donc je suis"
    },
    created_at: 1461113959088
  },
  {
    user: {
      name: "Johann von Goethe",
      avatars: {
        small: "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        regular: "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        large: "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      handle: "@johann49"
    },
    content: {
      text: "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    created_at: 1461113796368
  }
];

const tweetData = {
  user: {
    name: "Newton",
    avatars: {
      small: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      regular: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      large: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    handle: "@SirIsaac"
  },
  content: {
    text: "If I have seen further it is by standing on the shoulders of giants"
  },
  created_at: 1461116232227
};

const test = {
  user: {
    name: "Coppernicus",
    avatars: {
      small: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      regular: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      large: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    handle: "@Geocentrism"
  },
  content: {
    text:
      "pls no burn me :( "
  },
  created_at: 1461116232227
}

const createTweetElement = function(tweetData) {
  const $article = $("<article>");
  const $header = $("<header>");
  const $avatar = $("<img>")
    .addClass("avatar")
    .attr("src", tweetData.user.avatars.small);
  const $headerUserName = $("<div>")
    .addClass("username")
    .text(tweetData.user.name);
  const $headerEmail = $("<div>")
    .addClass("email")
    .text(tweetData.user.handle);
  const $divTextBox = $("<div>").addClass("box");
  const $divText = $("<div>")
    .addClass("tweetText")
    .text(tweetData.content.text);
  const $footer = $("<footer>");
  const $footerIcons = $('<div>').addClass('icons')
  const $footerTime = $("<div>")
    .addClass("time")
    .text(tweetData.created_at);

  $article.append($header);
  $article.append($divTextBox);
  $article.append($footer);
  $header.append($avatar);
  $header.append($headerUserName);
  $header.append($headerEmail);
  $divTextBox.append($divText);
  $footer.append($footerTime);
  $footer.append($footerIcons)

  return $article
};

function renderTweets(tweets) {
  for (const users of tweets) {
    $(".tweet-container").append(createTweetElement(users));
  }
}

$(function() {
  
  const $form = $('form');
  $form.on('submit', function (event) {
    event.preventDefault()
    console.log('Button clicked, performing ajax call...');
    $.ajax({ data: $(this).serialize(), method: 'POST', url: "/tweets" })
    .done(function (reponse) {
      console.log('Success: ', reponse);
      
    });
  });
  renderTweets(data);
});

