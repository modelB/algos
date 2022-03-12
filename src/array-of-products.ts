// https://www.algoexpert.io/questions/Array%20Of%20Products
export function arrayOfProducts(array: number[]) {
	const length = array.length;
	//move every element over one by popping last el off and unshifting to front
	//loop through output n-2 times multiplying each el by next one in original array
	let futureEl = 0;
	let output: number[] = [array[array.length-1], ...array.slice(0,-1)];
	for (let i = 0; i < output.length; i++) {
		for (let j = 1; j<array.length-1; j++) {
			futureEl = array[(i+j)%length];
			if (typeof futureEl === 'number') {
				output[i]*=futureEl;
			}
			
		}
	}
	return output;
}
