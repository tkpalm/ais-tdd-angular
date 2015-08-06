angular.module('Contactical', [])
	.service('ContactService', function($http){
		var self = this;
		self.contacts = [];
		this.getContacts = function(){
			self.contacts = $http.get('http://localhost:9001/contacts').
			then(function(response){
				self.contacts = response.data;
			},function(){

			});
			return self.contacts;
		}
	});