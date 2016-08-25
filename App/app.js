var profil = angular.module('profil', ['chieffancypants.loadingBar','ngAnimate','ngRoute','firebase']).config(function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = true;
})
