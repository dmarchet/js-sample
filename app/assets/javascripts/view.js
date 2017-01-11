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

var addTweet = function(tweet){
  $("#tweets-list").prepend(
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
}

var showHashtag = function(hashtag){
  $("#hashtags-list").append(
                          "<li>#" +
                          hashtag.name +
                          "</li>"
                          );
};
