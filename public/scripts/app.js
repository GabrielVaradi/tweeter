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

$(function() {
  $(".compose").click(function() {
    $(".new-tweet").slideToggle('fast')
    $(".text-area").focus()
  });
  const $form = $("form");
  $form.on("submit", function(event) {
    event.preventDefault();
    if ($(this).serialize().length > 145) {
      alert("too long");
      return;
    }
    if ($(this).serialize().length - 5 === 0) {
      alert("enter text pl0x");
      return;
    } else {
      console.log("Button clicked, performing ajax call...");
      $.ajax({
        data: $(this).serialize(),
        method: "POST",
        url: "/tweets"
      }).done(function(reponse) {
        console.log("Success: ", reponse);
        $("form")[0].reset();
        loadTweets(url);
        url.empty();
      });
    }
  });

  loadTweets(url);
});
