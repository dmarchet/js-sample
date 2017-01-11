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

}
