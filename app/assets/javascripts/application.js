$(document).on('ready', function(){
  $("#tweets-list").empty();
  $("#hashtags-list").empty();
  handleReceiveTweets();
  handleReceiveHashtags();
  $("#tweet-form").on("submit", function(event){
    event.preventDefault();
    handleReceiveNewTweet();
  })
});

