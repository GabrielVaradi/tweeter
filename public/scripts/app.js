const url = "/tweets";

// Calculates the time between the date of creation of the tweet and the current time. It then displays the time elapsed in the appropriate mesure of time.
function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    if (interval === 1) {
      return "Created " + interval + " year ago";
    } else {
      return "Created " + interval + " years ago";
    }
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    if (interval === 1) {
      return "Created " + interval + " months ago";
    } else {
      return "Created " + interval + " months ago";
    }
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    if (interval === 1) {
      return "Created " + interval + " day ago";
    } else {
      return "Created " + interval + " days ago";
    }
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    if (interval === 1) {
      return "Created " + interval + " hour ago";
    } else {
      return "Created " + interval + " hours ago";
    }
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    if (interval === 1) {
      return "Created " + interval + " minute ago";
    } else {
      return "Created " + interval + " minutes ago";
    }
  }
  if (Math.floor(seconds) === 0) {
    return "Created just now";
  }
  if (Math.floor(seconds) === 1) {
    return "Created " + Math.floor(seconds) + " second ago";
  }
  return "Created " + Math.floor(seconds) + " seconds ago";
}
// Creates the DOM tree dynamically as the tweets are posted.
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
  const $footerIcon1 = $("<i>").addClass("far fa-thumbs-up");
  const $footerIcon2 = $("<i>").addClass("fas fa-flag-usa");
  const $footerIcon3 = $("<i>").addClass("fas fa-retweet");
  const $footerTime = $("<text>")
    .addClass("time")
    .text(timeSince(new Date(tweetData.created_at)));

  $article.append($header);
  $article.append($divTextBox);
  $article.append($footer);
  $header.append($avatar);
  $header.append($headerUserName);
  $header.append($headerEmail);
  $divTextBox.append($divText);
  $footer.append($footerTime);
  $footer.append($footerIcon1);
  $footer.append($footerIcon2);
  $footer.append($footerIcon3);

  return $article;
};

//Loops through the database in order to render tweets
function renderTweets(tweets) {
  for (const users of tweets) {
    $(".tweet-container").prepend(createTweetElement(users));
  }
}

//Loads the page with the initial tweets in the database
const loadTweets = url => {
  $.ajax({
    method: "GET",
    url: url
  })
    .done(function(response) {
      renderTweets(response);
    })
    .fail(error => {
      console.log(`Error: ${error}`);
    })
    .always(() => {
      console.log("Request completed");
    });
};

//"Refreshes" the page after adding a single tweet
const loadTweet = url => {
  $.ajax({
    method: "GET",
    url: url
  })
    .done(function(response) {
      $(".tweet-container").prepend(createTweetElement(response.pop()));
    })
    .fail(error => {
      console.log(`Error: ${error}`);
    })
    .always(() => {
      console.log("Request completed");
    });
};

$(function() {
  //Hide the error and the compose box then the page loads initially
  $(".error").hide();
  $(".new-tweet").hide();

  //Toggles the compose button on click
  $(".compose").click(function() {
    $(".new-tweet").slideToggle("fast");
    $(".text-area").focus();
  });

  //When the user clicks on submit, this function happens
  const $form = $("form");
  $form.on("submit", function(event) {
    event.preventDefault();
    //Prevents the user to write a tweet longer than 140 characters and toggles an error message
    if ($(this).serialize().length > 145) {
      $(".error").slideUp("fast");
      $(".error")
        .html("Please type less than 140 characters")
        .slideDown("fast");
      return;
    }
    //Prevents the user to post an empty tweet and toggles an error message
    if ($(this).serialize().length === 5) {
      $(".error").slideUp("fast");
      $(".error")
        .html("Please type in a tweet")
        .slideDown("fast");
      return;
    } else {
      $(".error").slideUp("fast");
      //If the conditions are met, make an AJAX post
      $.ajax({
        data: $(this).serialize(),
        method: "POST",
        url: "/tweets"
      })
        .done(function(reponse) {
          console.log("Success: ", reponse);
          //Resets the counter to 140
          $("#counter").html(140);
          //Empties the text box
          $("form")[0].reset();
          //Adds the tweet to the page
          loadTweet(url);
        })
        .fail(error => {
          console.log(`Error: ${error}`);
        })
        .always(() => {
          console.log("Request completed");
        });
    }
  });
  //Adds the initial tweets to the page
  loadTweets(url);
});
