var phonecatApp = angular.module('phonecatApp', []);

/*
 To use $http, you must run:
   node scripts/web-server.js
 and goto:
  localhost:8000/apps/index.html
*/



phonecatApp.controller('PhoneListCtrl', function($scope, $http) {

  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
});

phonecatApp.controller('DataElementListCtrl', function($scope, $http) {
  //data_integrity/General_Motors.json
  /*
  $http.get('data_integrity/Chrysler_BaseFiles.json').success(function(data) {
    $scope.data_elements = data;
  }); */
  // get client and 
  if($scope.data_elements == null) {
    $scope.data_elements = [];
  }
  $scope.update = function() {
   //alert($scope.selectedClient);
   var filename = $scope.selectedClient;
   if(filename === 'all') {
    var json_files = ['Chrysler_BaseFiles.json','General_Motors.json'];
    var temp = [];
    angular.forEach(json_files, function(file,index) {
        //alert(file);
        var temp = [];        
        $http.get('data_integrity/' + file).success(function(data,temp) {
          //angular.extend(temp, data);
          //$scope.data_elements.concat(data);
          //angular.extend($scope.data_elements, data);
          $scope.data_elements = $scope.data_elements.concat(data);
          //alert("de length" + $scope.data_elements.length);
        });
        //alert("outer temp length" + temp.length);

    });
    //angular.forEach([1,2,3], function(k,v) {
    //  this.push(k)
    //},temp);
    //alert(temp.length);
    //$scope.data_elements = this.temp;
   } else {
    $http.get('data_integrity/' + filename).success(function(data) {
      $scope.data_elements = data;
    });
  }
   // use $scope.selectedItem.code and $scope.selectedItem.name here
   // for other stuff ...
}

  $scope.orderProp = 'data_element_ID';
});