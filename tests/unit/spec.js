describe('HelloWorldController', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('myApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('HelloWorldController', {
      $scope: $scope
    });
  }));

  it('should test hello world', function () {
    var text =$scope.greeting;
    expect(text).toContain("Hello, World!");
  });

});