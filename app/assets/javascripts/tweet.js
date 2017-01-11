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
