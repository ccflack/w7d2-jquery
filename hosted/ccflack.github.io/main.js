var tweets_source   = $("#tweet-template").html()
var template = Handlebars.compile(tweets_source)

$.getJSON('https://still-springs-37963.herokuapp.com/tweets/')
.then(function(response){
  response.tweets.forEach(function(tweet){
    if (tweet.user.avatar === null) {
      tweet.user.avatar = "<img src='https://robohash.org/" + tweet.user.username + "' class='img-thumbnail' width='140' height='140'/>"
    }
    else {
      tweet.user.avatar = "<img src='https://still-springs-37963.herokuapp.com" + tweet.user.avatar + "' class='img-thumbnail' width='140' height='140'/>"
    }
    tweet.created_at = moment.utc(tweet.created_at).format('DD-MMM-YYYY')
    console.log(tweet)
    var display = template(tweet)
    $('#tweets').append(display)
  })

})
