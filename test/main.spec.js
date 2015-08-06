describe('Contactical', function() {

	beforeEach(function() {
		module('Contactical');
	});

	describe('ContactService', function() {
		var service;
		beforeEach(function() {
			inject(function($injector) {
				service = $injector.get('ContactService');
				$httpBackend = $injector.get('$httpBackend');
				$httpBackend.expectGET('http://localhost:9001/contacts').
					respond(200,[]);
			});
		});
		it('should return 3 contacts when call getContacts()', function() {
			expect(service.getContacts().length).toEqual(3);
		});
		it('should call backend api', function() {
			service.getContacts();
			$httpBackend.flush();			
		});
	});
});