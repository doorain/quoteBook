angular.module('quoteBook').service('dataService', function(){

  var quotes = [
    { text: 'We are the music makers, and we are the dreamers of dreams.', author: 'Willy Wonka'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve.', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

  this.getData = function(){
    return quotes;
  };

  this.addData = function(newQuote){
    if (newQuote.text && newQuote.author){
      quotes.push(newQuote);
      return true;
    }
    return false;
  }

  this.removeData = function(quoteRemove){
    for (var i = 0; i < quotes.length; i++){
      if (quotes[i].text.toLowerCase() === quoteRemove.toLowerCase()){ //has to be lowercase to use ===
        quotes.splice(i--, 1)
      }
    }
  };










});
