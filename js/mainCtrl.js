angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){

$scope.quotes = dataService.getData();

$scope.deleteQuote = function(quoteRemove){
  dataService.removeData(quoteRemove);
}

$scope.addData = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newAuthorText
  }

  if(dataService.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newAuthorText= '';
  }
}



});
