this.answer = function(x) {
	if(x%5 == 0 && x%3 == 0){
		return 'FizzBuzz';
	}else if(x%3 == 0){
		return 'Fizz';
	}else if(x%5 == 0){
		return 'Buzz';
	}else{
		return "" + x;
	}	
}