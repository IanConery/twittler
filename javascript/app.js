

  $(document).ready(function(){
          
          $('.add-tweet').click(function(){
            $('#tweet-box').toggle();
          });

          $('.close').click(function(){
            $('#tweet-box').hide();
          });

          $('#send-tweet').click(function(){
            var text = $('#tweet-input').val();
            writeTweet(text);
            $('#tweet-box').hide();
          });
          
          var index = 0;

          var populate = function(){
            var currentArraySize = streams.home.length - 1;
            var currentTweetArray = streams.home;

            for(i = index; i <= currentArraySize; i++){

              var tweet = currentTweetArray[i];
              var $tweet = $('<div class="tweet">');
              var $author = $('<a class="creator" href="">@' + tweet.user + '</a>').attr('href', "userHTML/" + tweet.user + ".html");
              var $content = $('<p class="content"></p>').text(tweet.message);
              var $time = $('<p class="time"></p></div>').text(tweet.created_at);

              $tweet.append($author).append($content).append($time).append($('<hr>'));
              $tweet.prependTo('.tweet-post');
              $tweet.prependTo('.tweet-' + tweet.user);
            }
              index = currentArraySize + 1;

          };


          populate();

          setInterval(function(){
             if( index < streams.home.length -1){
               populate();
             }
          }, 1000);

  });

