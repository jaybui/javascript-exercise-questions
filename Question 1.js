//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered.
//For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types.
//i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

//////////////Merge Sort Method//////////////////////////////////
const cleanTheRoom = (arr) => {
	if(arr.length <= 1) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);
	// console.log('array',arr);
	// console.log('cleantheroomleft', left);
	// console.log('cleantheroomright', right);
	// console.log('answer',mrgTopDown(cleanTheRoom(left), cleanTheRoom(right)));
	return mrgTopDown(cleanTheRoom(left), cleanTheRoom(right));
}
	
const  mrgTopDown = (left, right) => {
	const buffer = [];
	// console.log('bufferbeforewhileloop', buffer);
	// console.log('mrgtopdownleft', left);
	// console.log('mrgtopdownright', right);
	while(left.length && right.length) {
		if(left[0] < right[0]) {
			buffer.push(left.shift());
			// console.log('bufferwhileleft', buffer);
		} else {
			buffer.push(right.shift());
			// console.log('bufferwhileright', buffer);
		}
	}

	// console.log('bufferconcat', buffer.concat(left.slice()).concat(right.slice()));
	return buffer.concat(left.slice()).concat(right.slice());
}

//////////////////////Javascript built-in method///////////////////////////////////
const arraySort = (arr) => {
	return arr.sort(function(a,b) {
		return a-b;
	});
}

const arrayNested = (arr) => {
	let counter = 0;
	let buffer = [];
	arr.forEach(function(element, index) {
		if(element === arr[index+1]) {
			counter++;
		} else if (element !== arr[index+1] && element === arr[index-1]) {
			buffer = buffer.concat([arr.slice(index-counter,index+1)]);
			counter = 0;
		} else if (element !== arr[index+1] && element !== arr[index-1]) {
			buffer = buffer.concat(arr.slice(index-counter,index+1));
			counter = 0;
		}
	})
	return arr = buffer;
}

const cleanTheRoom = (arr) => {
	let numberArray = arr.filter(element => {if (typeof element === 'number'){return element}});
	let stringArray = arr.filter(element => {if (typeof element === 'string'){return element}});
	if (numberArray.length && stringArray.length) {
		return arr = [arrayNested(arraySort(numberArray))].concat([arrayNested(arraySort(stringArray))]);
	} else if (numberArray.length && !stringArray.length) {
		return arr = arrayNested(arraySort(numberArray));
	} else if (!numberArray.length && stringArray.length) {
		return arr = arrayNested(arraySort(stringArray));
	} else {
		return arr;
	}
}
//////////////Another Way///////////////
const cleanRoom = array => {
  const countObj = array.reduce((a, num) => {
    a[num] = (a[num] || 0) + 1;// a start with being {}, therefore a[1] = undefined. To fix this, (a[1] || 0) + 1 = (undefined || 0) + 1 = 0 + 1 = 1 => Next time a[1] = (a[1] || 0 )+1 = 1+1 =2
    return a; //return an a object with entries are the values of original array and property is how many times that entry got duplicated.
  }, {});
  return Object.entries(countObj)
    .map(([num, count]) =>
      count === 1 ? Number(num) : new Array(count).fill(Number(num))
    );
};