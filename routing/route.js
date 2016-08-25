profil.config(function($routeProvider){
  $routeProvider
        .when('/',{
          controller: 'Membre',
          templateUrl: 'views/profil.html'
        })
        .when('/checkProfil',{
          controller: 'Membre',
          templateUrl: 'views/infoProfil.html'
        })
        .when('/comments',{
          controller: 'CommentaireAngular',
          templateUrl: 'views/comment.html'
        })
        .when('/creercomments',{
          controller: 'CommentaireAngular',
          templateUrl: 'views/creercomment.html'
        })
        .when('/firebasetest',{
          controller: 'firebaseTuto',
          templateUrl: 'views/firebase.html'
        })
        .otherwise({redirectTo: '/'});
})
