'use strict';

// Declare app level module which depends on views, and components
var hunger = angular.module('hunger', []);

hunger.controller('HungerCtrl', function($scope){
  $scope.name = "Hunger";

  $scope.venueTest = [
  {
    'name'     : 'Starbucks',
    'id'       : 1,
    'img'    : 'www.placehold.it/150x150',
    'rating'   : 5.0,
    'distance' : 4.0
  },
  {
    'name'   : 'The Thirteenth Step',
    'id'       : 2,
    'img'    : 'www.placehold.it/150x150',
    'rating' : 7.5,
    'distance' : 3.0
  },
  {
    'name'   : 'The Flatiron Room',
    'id'       : 3,
    'img'    : 'www.placehold.it/150x150',
    'rating' : 10.0,
    'distance' : 2.0
  },
  {
    'name'   : 'Maysville',
    'id'       : 4,
    'img'    : 'www.placehold.it/150x150',
    'rating' : 8.0,
    'distance' : 1.0
  },
  {
    'name'   : 'Arby\'s',
    'id'       : 5,
    'img'    : 'www.placehold.it/150x150',
    'rating' : 2.0,
    'distance' : 4.5
  },
  ];

  $scope.orderProp = "-rating";
  $scope.tapped = function($event) {
  var ele = $event.target;
  var x = Math.floor(Math.random() * 200) + 1,
      y = Math.floor(Math.random() * 100) + 1,
      z = Math.floor(Math.random() * 6) + 1,
      rot = Math.floor(Math.random()*360)+1;
  $(ele).css({
    'transform': 
      "translate3d("+x+"px,"+y+"px,"+z+"px)" +
      "rotate("+rot+"deg)"
  });
}
  $scope.helper = {};
  $scope.helper.showModal = function(id, event) {
    var mask  = document.getElementById("venue-" + id + "-mask");
    var modal = document.getElementById("venue-" + id + "-modal");
    var doc = document.documentElement;
    var top = window.pageYOffset || doc.scrollTop;
    modal.style.top = (100 + top) + "px";
    mask.classList.remove('hide');
    modal.classList.remove('hide');
  }
  $scope.helper.hideModal = function(id) {
    var mask  = document.getElementById("venue-" + id + "-mask");
    var modal = document.getElementById("venue-" + id + "-modal");
    mask.classList.add('hide');
    modal.classList.add('hide');
  }
  $scope.helper.toggleCuisine = function() {
    var currentMenu  = document.getElementById("cuisine-menu");
    var otherMenu  = document.getElementById("help-menu");
    currentMenu.classList.toggle('hide');
    otherMenu.classList.add('hide');
  }
  $scope.helper.toggleHelp = function() {
    var currentMenu  = document.getElementById("help-menu");
    var otherMenu  = document.getElementById("cuisine-menu");
    currentMenu.classList.toggle('hide');
    otherMenu.classList.add('hide');
  }
});
