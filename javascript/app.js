

  $(document).ready(function(){
          
    
     
        (function(){
           
          var index = 0;

          var populate = function(){
            var currentArraySize = streams.home.length - 1;
            var currentTweetArray = streams.home;

            for(i = index; i <= currentArraySize; i++){
                //some ugly code follows, I know there must be a better way, still looking
                
                var tweet = currentTweetArray[i];
                var $tweet = $('<div class="tweet">');
                var $author = $('<a class="creator" href="">@' + tweet.user + '</a>').attr('href',"userHTML/" + tweet.user + ".html");
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

        })();


        
        // tweet-box controls 

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

          $('#tweet-input').keydown(function(event){
            if(event.keyCode === 13){
              var text = $('#tweet-input').val();
              writeTweet(text);
              $('#tweet-box').hide(); 
            }
          });
          
  });

