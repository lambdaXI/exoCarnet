profil.controller('firebaseTuto',['$scope','CommentFactory','$http', '$firebaseObject','$firebaseArray', function($scope, CommentFactory, $http, $firebaseObject, $firebaseArray){
  var ref = $firebaseArray(new Firebase("https://monexocomment.firebaseio.com/-KPI5iKGNaktXQZZkad5")); // connexion a ma base de donnees
  console.log(ref);
  $scope.madatabase = ref; // recup de mes commentaires

  $scope.ajoutComment = function(){// button ajout de commentaire dans ma base de donnees firebase
    ref.$add($scope.newComment); //ajout de commentaire dans ma base de donnees firebase
    $scope.newComment = {}; // je vide les champs
  }

  $scope.spliceComment = function(position){ //button pour enlever commentaire de ma base de donnees (position corespond a $index dans ng-repeat)
    ref.$remove($scope.madatabase[position]);
  }
}]);
