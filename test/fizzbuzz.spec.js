describe('FizzBuzz',function(){
	it('should return "1" when get 1',function(){
		expect(answer(1)).toEqual('1');
	});
	it('should return "2" when get 2',function(){
		expect(answer(2)).toEqual('2');
	});
	it('should return "Fizz" when get 3', function() {
		expect(answer(3)).toEqual('Fizz');
	});
	it('should return "4" when get 4', function() {
		expect(answer(4)).toEqual('4');
	});
	it('should return "Buzz" when get 5', function() {
		expect(answer(5)).toEqual('Buzz');
	});
	it('should return "6" when get 6', function() {
		expect(answer(6)).toEqual('Fizz');
	});
	it('should return "7" when get 7', function() {
		expect(answer(7)).toEqual('7');
	});
	it('should return "8" when get 8', function() {
		expect(answer(8)).toEqual('8');
	});
	it('should return "9" when get 9', function() {
		expect(answer(9)).toEqual('Fizz');
	});
	it('should return "10" when get 10', function() {
		expect(answer(10)).toEqual('Buzz');
	});
	it('should return "11" when get 11', function() {
		expect(answer(11)).toEqual('11');
	});
	it('should return "12" when get 12', function() {
		expect(answer(12)).toEqual('Fizz');
	});
	it('should return "13" when get 13', function() {
		expect(answer(13)).toEqual('13');
	});
	it('should return "14" when get 14', function() {
		expect(answer(14)).toEqual('14');
	});
	it('should return "FizzBuzz" when get 15', function() {
		expect(answer(15)).toEqual('FizzBuzz');
	});
});