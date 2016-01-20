//uses subsequent questions that depends on other questions

var reply = require('./../');

var options = {
  favorite_color: {
    message: 'What is your favorite color?',
    options: ['Purple', 'Red', 'Black', 'Blue', 'White', 'Yellow']
  },
  purple_message: {
    message: 'Go Husky!',
    depends_on: {
      favorite_color: 'Purple'
    }
  },
  lunch_suggestion: {
    message: 'What do you want for lunch',
    options: ['Thai food','Mexican Food','Chinese Food','Pizza', 'Other'],
    depends_on: {
      favorite_color: 'Purple'
    }
  },
  lunch_followup: {
    message: 'Sounds good to me!',
    depends_on: {
      favorite_color: 'Purple',
      lunch_suggestion: 'Thai food'
    }
   },
  lunch_followup2: {
    message: 'That\'s too bad. I was feeling like Thai food today',
    depends_on: {
      favorite_color: 'Purple',
      lunch_suggestion: {not: 'Thai food'}
    }
   }
}

 reply.get(options, function(error, result){})