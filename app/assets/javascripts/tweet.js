var fetchTweets = function(){

  var requestPromise = $.ajax({
                          url: "/tweets/recent",
                          method: "get",
                          dataType: 'JSON'
                        });
  return requestPromise;
};

var handleReceiveTweets = function(){
  var promiseFromAjax = fetchTweets();

  promiseFromAjax.done(function(tweetData){
    for(var i in tweetData){
      showTweet(tweetData[i]);
    };
  });
};

var sendTweet = function(){
  var formData = $("#new-tweet").val();
  var tweet = {
      tweet: {
        content: formData
      },
      hashtags: findHashtags(formData)
    }

  var requestPromise = $.ajax({
                        url: "/tweets",
                        method: "POST",
                        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
                        data: tweet
                      });
  return requestPromise;
};

var handleReceiveNewTweet = function(){
  var promiseFromAjax = sendTweet();

  promiseFromAjax.done(function(tweetData){
    addTweet(tweetData);
    $("#tweet-form").trigger("reset");
  });
};
