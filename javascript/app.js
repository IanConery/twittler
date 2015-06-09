

  $(document).ready(function(){
          var index = 0;

          var populate = function(){
            var currentArraySize = streams.home.length - 1
            var currentTweetArray = streams.home 
            for(i = index; i <= currentArraySize; i++){

              var tweet = currentTweetArray[i];
              var $tweet = $('<div class="container tweet">')
              var $author = $('<a class="creator" href="">@' + tweet.user + '</a>').attr('href', "userHTML/" + tweet.user + ".html");
              var $content = $('<p class="content"></p>').text(tweet.message);
              var $time = $('<p class="time"></p></div>').text(tweet.created_at);

              $tweet.append($author).append($content).append($time).append($('<hr>'));
              $tweet.prependTo('.tweet-post');
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

