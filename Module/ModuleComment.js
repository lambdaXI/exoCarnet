profil.factory('CommentFactory', function($http, $q, $timeout, $firebaseObject){ // chargement des données json commentaire
  // Firebase Test
  var ref = new Firebase("https://monexocomment.firebaseio.com/"); //permet de me connecter a ma base de donner


  var testfactory = {
    factory : false,
    getPost : function(){
      var deferred = $q.defer(); // creation de promise
      if (testfactory.factory !== false) { // pr eviter le rechargement du http.get pr pouvoir naviguer de page en page sans perde les données
        deferred.resolve(testfactory.factory);// si les données sont deja charger je ne les rechargent pas
      }
      else {
        $http.get('https://jsonplaceholder.typicode.com/comments').success(function(response, status) {
          testfactory.factory = response; // jassigne factory a response
          //ref.push(response); // pour push dans ma base de données me permet de copier la base de donnees firebase des commentaires (a faire une seule fois)
          $timeout(function(){ // function pr marker un temp d arret permet dafficher le loader
            deferred.resolve(response); // jassigne ma var deffered en cas de success
          }, 2000);// 2000 = 2sec
        }).error(function(response, status){ //cas d'erreur de chargement
          deferred.reject('erreur de chargement json');
          console.log('erreur');
        })
      }
      return deferred.promise; // je return la promise
    }
  }
  return testfactory; // return mon objet
});

profil.controller('CommentaireAngular',['$scope','CommentFactory','$http', '$firebaseArray', function($scope, CommentFactory, $http, $firebaseArray){//Controller de COMMENTAIRE EXO
  $scope.loadingState = true;// bar de chargement
  $scope.mesComments = CommentFactory.getPost().then(function(post){// chargement trouver
    $scope.loadingState = false;// element trouver jarrete l animation du loader
    $scope.mesComments = post;
  }, function(msg){// Chargement erroné
    alert(msg);
  });


  $scope.newComment = {};
  $scope.ajoutComment = function(){ // bouton pour rajouter un commentaire 
    $scope.mesComments.push($scope.newComment);
    $scope.newComment = {};
  }

// pour ajouter des commentaire avec $http.post semble fonctionner mais besoin des droits d acces peut etre?
  // $scope.ajoutComment = function(){
  //    $http.post('https://jsonplaceholder.typicode.com/comments',JSON.stringify($scope.newComment)).then(function(){console.log('envoyer avec success');}, function(){console.log('echouer');});

    // $http.get('commentaireEnvoyer.json').
    //     success(function(data) {
    //       console.log(data);
    //     })
  //}

}]);
