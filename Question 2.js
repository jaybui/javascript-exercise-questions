//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together,
//give the target number. For example: answer([1,2,3], 4)should return [1,3]

/////////////////Answer////////////////////
const findTwoNumForSum = (arr, sum) => {
	let answerArray = [];
	let lastNumFound = 0;
	arr.forEach((element, index) => {
		let numToFind = sum - element;
		let buffer = [];
		let duplicateArrayFound = answerArray.flat().filter(num => num === element);
		if (!duplicateArrayFound.length) {
			numFound = arr.filter((number, ind) => (number === numToFind && ind != index));
			if (numFound.length && answerArray.flat().length > 2) {
				buffer.push(element, numFound[0]);
				return answerArray = answerArray.concat([buffer]);
			} else if (numFound.length && answerArray.flat().length === 2) {
				buffer.push(element, numFound[0]);
				return answerArray = [answerArray].concat([buffer]);
			} else if (numFound.length && answerArray.length < 1) {
				buffer.push(element, numFound[0]);
				return answerArray = answerArray.concat(buffer);
			} else if (!numFound.length && index === (arr.length - 1)) {
				alert('No 2 numbers found to make the given sum');
			}
		}
	})
	return answerArray;
}
