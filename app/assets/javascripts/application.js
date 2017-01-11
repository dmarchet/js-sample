$(document).on('ready', function(){
  $("#tweets-list").empty();
  $("#hashtags-list").empty();
  handleReceiveTweets();
  handleReceiveHashtags();

  $("#tweet-form").on("submit", function(event){
    event.preventDefault();
    handleReceiveNewTweet();
  });

  $("#search-form").on("submit", function(event){
    event.preventDefault();
    handleReceiveHashtagTweets($("#search"));
  });

  $("#hashtags-list").on("click", "li", function(){
    handleReceiveHashtagTweets($(this))
  });

});

