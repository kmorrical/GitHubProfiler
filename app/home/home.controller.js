
(function() {
       'use strict';

       angular
           .module('app')
           .controller('GitHubCtrl', GitHubCtrl);

       GitHubCtrl.$inject = ['$http'];



       function GitHubCtrl($http) {
        var vm=this;

       vm.callGithubApi = callGithubApi;

       vm.isHireableOrNot = function() {
        if(vm.user.hireable == null) {
          vm.user.hireable = 'Not looking for work';
          vm.hireableColor= 'text-danger';
        }
        else {
          vm.user.hireable = 'Looking for work!';
          vm.hireableColor= 'text-success';
        }
       }

 

       function callGithubApi(username) {

           $http
               .get('http://api.github.com/users/'+username+'?access_token=d73666a8c1b5fa4d5112938db708db78e77765a8')
               .then(function(response) {
                   vm.user = response.data;
                   vm.isHireableOrNot();
                   console.log(vm.hireableColor);
                   console.log(vm.user);

               })

           .catch(function(error) {
               alert('An error occured downloading INFO from GitHub');
           });
       }
   } 

})();