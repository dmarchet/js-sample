var fetchHashtags = function(){

  var requestPromise = $.ajax({
                          url: "/hashtags/popular",
                          method: "get",
                          dataType: 'JSON'
                        });
  return requestPromise
};



var handleReceiveHashtags = function(){
  var promiseFromAjax = fetchHashtags();

  promiseFromAjax.done(function(hashtagData){
    for(var i in hashtagData){
      showHashtag(hashtagData[i])
    };
  });
};



var findHashtags = function(data){
  var hashtags = data.match(/\B#\w*[a-zA-Z]+\w*/g)
  var dataHashtags = []
  for(var i in hashtags){
    dataHashtags.push(hashtags[i].replace(/#/g, ""));
  }
  return dataHashtags
};



var checkSearchSyntax = function(text){
  var newText = text
  if(text[0] = "#"){
    newText = text.replace(/#/g,"")
  }
  return newText
};



var fetchSearchedHashtags = function(hashtag){
  var url = "/tweets/search/" + hashtag
  var requestPromise = $.ajax({
                          url: url,
                          method: "get",
                          dataType: 'JSON',
                          statusCode: {
                            404: function(){
                              $("#search").css("background-color", "red")
                            }
                          }
                        });
  return requestPromise
};
