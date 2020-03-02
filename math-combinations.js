Math.combinations = (n, r) => {
	if ((typeof n != 'number') || (typeof r != 'number')) {
		throw new Error('Parameters must be a number')
		return false;
	}
	else if ((n < 0) || (r < 0)){
		throw new Error('Parameters must be a positive');
		return false;
	}
	else if (r > n){
		throw new Error('The second parametre must be less then first');
		return false;
	}
	switch (n | r) {
		case r == n:
		case r == 0:
			return 1;
			break;
		default: 
			return Math.factorial(n) / 
			(Math.factorial(n - r) * Math.factorial(r));
			break;
	}
}