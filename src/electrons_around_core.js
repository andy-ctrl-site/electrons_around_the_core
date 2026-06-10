
function electronsAroundCores(numbers) {
	const freq = {};
	numbers.forEach(n => freq[n] = (freq[n] || 0) + 1);
	
	const freqValues = Object.values(freq);
	
	const allFreqSame = freqValues.every(f => f === freqValues[0]);
	
	if (allFreqSame) {
		return Math.max(...numbers) + 1;
	} else {
		return Math.max(...freqValues);
	}
}