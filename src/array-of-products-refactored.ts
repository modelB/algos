// https://www.algoexpert.io/questions/Array%20Of%20Products
export function arrayOfProducts(array: number[]) {
	const length = array.length;
	let leftProd = new Array(length).fill(1);
	let rightProd = new Array(length).fill(1);
	for (let i = 0; i<length; i++) {
		leftProd[i] = i > 0 ? leftProd[i-1] * array[i-1] : 1;
		rightProd[length-i-1] = length-i < length ? rightProd[length-i] * array[length-i] : 1;
	}
	return leftProd.map((el,i) => el*rightProd[i]);
}