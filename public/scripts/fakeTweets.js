// We can consider a tweet to be an article, and there's an HTML5 tag for that!

// You shouldn't be using an IDs within this component (do you know why?).

// Consider that the tweet article has a header and a footer. There are HTML5 tags for those too! This way you're not just using plain ol' <div> tags
//  that have no semantic meaning.

// Just put in fake/dummy text where needed so that you have some content to visualize.

// The background colour for the header should be different than the main body area

// Write out the HTML for the component without adding any CSS classes and then as you style it out, decide which CSS classes you really need and where
//  you can simply use tag based selectors

// For example: article.tweet header is a more clear and specific enough selector compared to article.tweet header.tweet-header.
// This is because we expect to find only one header per tweet and therefore the class
// tweet-header is repetitive. Avoiding overuse of CSS classes like this is an important practice. If you're unclear on this, speak to a peer or mentor.
//   ];

// const initialTweets = require('../../server/lib/in-memory-db')

const createTweets = user => {
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

  const $pic = "<(-.-<) <(-.-)> (>-.-)>";
  $avatar.append($pic)

  const $username = 'The man with the Winchester'
  $headerUserName.append($username)

  const $email = "@HelloThere"
  $headerEmail.append($email)

  const $text = "Bob the Builder"; //('.database.text')
  $divText.append($text);

  const $time = "ahah good jokes mate"
  $footerTime.append($time)

};

$(function() {
  createTweets("DATABASE");
  //   for (const user of database){
  //     const fakeTweets = createTweets(user);
  //     $('.tweet-container').append($fakeTweets);
  //   }
});
