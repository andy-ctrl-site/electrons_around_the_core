
function electronsAroundCores(numbers) {
	let sum = 0;

	numbers.forEach(element => {
		if(element === 3) sum += 2;
		if(element === 5) sum += 4;
	});
	return sum; 
}