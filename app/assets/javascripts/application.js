$(document).on('ready', function(){
  $("#tweets-list").empty();
  $("#hashtags-list").empty();
  handleReceiveTweets();
  handleReceiveHashtags();
});

