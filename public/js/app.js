var app = angular.module('ngTodo', []);


app.controller('TodoController', function($scope){
  $scope.todoList = ['rake the yard',
                    'take a nap',
                    'take another nap',
                    'walk the dog',
                    'eat the leftover meatloaf'];
  $scope.saveTodo = function(){
    var todoInfo = $scope.currentTodo;
    $scope.todoList.push(todoInfo);
    $scope.currentTodo = "";
  }

  $scope.removeTodo = function(singleTodo){
    var index = $scope.todoList.indexOf(singleTodo);
    $scope.todoList.splice(index, 1);
  }

  $scope.editTodo = function(singleTodo) {
    var index = $scope.todoList.indexOf(singleTodo);
    $scope.todoList.splice(index, 1,$scope.currentTodo);
    $scope.currentTodo = '';
  }
  $scope.moveUp = function(singleTodo) {
    var index = $scope.todoList.indexOf(singleTodo);
    $scope.todoList.splice(index, 1);
    $scope.todoList.splice(index-1, 0, singleTodo);
  }
  $scope.moveDown = function(singleTodo){
    var index = $scope.todoList.indexOf(singleTodo);
    $scope.todoList.splice(index, 1);
    $scope.todoList.splice(index +1, 0, singleTodo);
  }
});
