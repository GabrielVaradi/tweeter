const url = "/tweets";

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
  const $footerIcons = $("<div>").addClass("icons");
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
  $footer.append($footerIcons);

  return $article;
};

function renderTweets(tweets) {
  for (const users of tweets) {
    $(".tweet-container").prepend(createTweetElement(users));
  }
}

//createtweet(url.pop())

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
    })
};

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
    })
};

$(function() {
  $(".error").hide();
  $(".compose").click(function() {
    $(".new-tweet").slideToggle("fast");
    $(".text-area").focus();
  });
  const $form = $("form");
  $form.on("submit", function(event) {
    event.preventDefault();
    if ($(this).serialize().length > 145) {
      $(".error").slideUp("fast");
      $(".error")
        .html("Please type less than 140 characters")
        .slideDown("fast");
      return;
    }
    if ($(this).serialize().length - 5 === 0) {
      //better way?
      $(".error").slideUp("fast");
      $(".error")
        .html("Please type in a tweet")
        .slideDown("fast");
      return;
    } else {
      $(".error").slideUp("fast");
      console.log("Button clicked, performing ajax call...");
      $.ajax({
        data: $(this).serialize(),
        method: "POST",
        url: "/tweets"
      })
        .done(function(reponse) {
          console.log("Success: ", reponse);
          $("form")[0].reset();
          loadTweet(url);
          // url.empty();
        })
        .fail(error => {
          console.log(`Error: ${error}`);
        })
        .always(() => {
          console.log("Request completed");
        });
    }
  });

  loadTweets(url);
});
