

  $(document).ready(function(){
          var index = 0;

          var populate = function(){
            var currentArraySize = streams.home.length - 1
            var currentTweetArray = streams.home 
            for(i = index; i <= currentArraySize; i++){

              var tweet = currentTweetArray[i];
              var $tweet = $('<li></li>');
              $tweet.append($('<a class="creator tweet" href="#"></a>').text('@' + tweet.user).attr('href', "userHTML/" + tweet.user + ".html")).append($('<div class="content tweet"></div>').text(tweet.message)).append($('<div class="time tweet"></div>').text(tweet.created_at));
              $tweet.prependTo('.tweets');
            }
              index = currentArraySize;

          };

          populate();

          /*setInterval(function(){
             if( index < streams.home.length -1){
               populate();
             }
          }, 1000);*/
  });
