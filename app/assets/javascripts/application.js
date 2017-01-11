$(document).on('ready', function(){
  $("#tweets-list").empty();
  handleReceiveTweets();

});

var fetchTweets = function(){

  var requestPromise = $.ajax({
                          url: "/tweets/recent",
                          method: "get",
                          dataType: 'JSON'
                        });
  return requestPromise
};

var handleReceiveTweets = function(){
  var promiseFromAjax = fetchTweets();

  promiseFromAjax.done(function(tweetData){
    for(var i in tweetData){
      showTweet(tweetData[i])
    };
  });
};

var showTweet = function(tweet){
  $("#tweets-list").append(
                          "<li class='tweet'><img class='avatar' src=" +
                          tweet.avatar_url +
                          " alt=''><div class='tweet-content'><p><span class='full-name'>" +
                          tweet.username +
                          "</span><span class='username'>" +
                          tweet.handle +
                          "</span><span class='timestamp'>" +
                          tweet.created_at +
                          "</span></p><p>" +
                          tweet.content +
                          "</p></div></li>"
                          );
};
