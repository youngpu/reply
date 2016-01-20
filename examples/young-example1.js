// using the reply confirm function

var reply = require('./../');

reply.confirm('Are you sure you want exit the game?', function(error, yes){
  if (!error && yes)
    console.log("See you next time!");
  else
    console.log("Continue the game!");
});
