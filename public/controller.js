var ChatController = function($scope) {
  var socket = io.connect("http://localhost:4000");

  $scope.ChatForm = function(chat) {
    console.log(chat.usr);
    socket.emit('chatData', {
      message: chat.message,
      usr: chat.usr
    });

    chat.usr = '';
    chat.message = '';
  };

  socket.on('chatData', function(data) {
    console.log(data);
    $scope.userName += data.usr + ':';
    $scope.msg += data.message;
  });

  $scope.userName = '';
  $scope.msg = '';
}
angular.module('WebSocketApp', []).controller('ChatController', ['$scope', ChatController]);
