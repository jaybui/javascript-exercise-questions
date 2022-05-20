//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter
//RGB color format it returns HEX.

//////////////////////Answer/////////////////////////
const convertToDecimal = arrayElement => {
	switch (arrayElement.toLowerCase()) {
		case 'a':
			arrayElement = 10;
			break;
		case 'b':
			arrayElement = 11;
			break;
		case 'c':
			arrayElement = 12;
			break;
		case 'd':
			arrayElement = 13;
			break;
		case 'e':
			arrayElement = 14;
			break;
		case 'f':
			arrayElement = 15;
			break;
		default:
			arrayElement = Number(arrayElement);
			break;
		}
	return arrayElement;
}

const converToHexadecimal = color => {
	switch(color) {
		case 10:
			color = "A";
			break;
		case 11:
			color = "B";
			break;
		case 12:
			color = "C";
			break;
		case 13:
			color = "D";
			break;
		case 14:
			color = "E";
			break;
		case 15:
			color = "F";
			break;
		default:
			color = String(color);
			break
	}
	return color;
}

const isHexFormat = input => {
	const inputArr = input.split("");
	let message = ``;
	inputArr.shift();
	let incorrectCharFormat = [];
	inputArr.forEach((element, index) => {
		if (element.toLowerCase() > "f" || element.toLowerCase() < "0") {
			incorrectCharFormat.push(element);
		}
	})
	if (incorrectCharFormat.length > 0) {
		message = `Incorrect HEX Format`;
	} else {
		message = `HEX`;
	}
	return message
}

const isRGBFormat = input => {
	const inputArr = input.split("");
	let inputCommaIndexArr = [];
	let inputLetterArr = [];
	let message = ``;
	inputArr.forEach((element,index) => {
		if (element === ",") {
			inputCommaIndexArr.push(index);
		} else {
			inputCommaIndexArr = inputCommaIndexArr;
		}
		return inputCommaIndexArr;
	})
	inputLetterArr = inputArr.filter(element => typeof element === 'string');
	let red = Number(input.substring(0,inputCommaIndexArr[0]));
	let green = Number(input.substring(inputCommaIndexArr[0]+1,inputCommaIndexArr[1]));
	let blue = Number(input.substring(inputCommaIndexArr[1]+1));
	if (red>=0 && red<=255 && green>=0 && green<=255 && blue>=0 && blue<=255) {
		message = `RGB`;
	} else {
		message = `RGB input has to be a NUMBER between 0 and 255`;
	}
	return [message, red, green, blue];
}

const colorHexToRGB = (hexStr) => {
	const hexArr = hexStr.split("");
	hexArr.shift();
	let red = 0;
	let green = 0;
	let blue = 0;
	for (i = 0; i < 6; i = i+2) {
		if (i===0) {
			red = (convertToDecimal(hexArr[i]) * 16) + (convertToDecimal(hexArr[i+1]));
		}	else if (i===2) {
			green = (convertToDecimal(hexArr[i]) * 16) + (convertToDecimal(hexArr[i+1]));
		} else {
			blue = (convertToDecimal(hexArr[i]) * 16) + (convertToDecimal(hexArr[i+1]));
		}
		
	}
	return `RGB Color From Given HEX is: (${red},${green},${blue})`;
}

const colorRGBToHex = (red, green, blue) => {
	let hexArr = [];
	for (i = 0; i < 6; i = i + 2) {
		if (i===0) {
			hexArr[i] = converToHexadecimal(Math.floor(red/16));
			hexArr[i+1] = converToHexadecimal(Math.floor(((red/16)%1)*16));
		} else if (i===2) {
			hexArr[i] = converToHexadecimal(Math.floor(green/16));
			hexArr[i+1] = converToHexadecimal(Math.floor(((green/16)%1)*16));
		} else {
			hexArr[i] = converToHexadecimal(Math.floor(blue/16));
			hexArr[i+1] = converToHexadecimal(Math.floor(((blue/16)%1)*16));
		}
	}
	hexStr = hexArr.toString().replaceAll(',','');
	return `HEX Color From Given RGB is: #${hexStr}`;
}

function main() {
	input = prompt(`Please type either HEX (starting with #) or RGB format below:`);
	const inputArr = input.split("");
	let message = ``;
	let answer = ``;
	let inputCommaIndexArr = [];
	let red = 0;
	let green = 0;
	let blue = 0;
	inputArr.forEach((element,index) => {
		if (element === ",") {
			inputCommaIndexArr.push(index);
		} else {
			inputCommaIndexArr = inputCommaIndexArr;
		}
		return inputCommaIndexArr;
	})
	if (inputArr[0] === "#" && inputArr.length === 7) {
		message = isHexFormat(input);
	} else if (inputArr[0] === "#" && inputArr.length != 7) {
		message = `HEX input is not long enough`;
	} else if (inputCommaIndexArr.length === 2 && inputArr.length >=2 && inputArr.length<=11) {
		message = isRGBFormat(input)[0];
	} else {
		message = `Please type either HEX (starting with #) or RGB in correct format`;
	}
	if (message === `HEX`) {
		answer = colorHexToRGB(input);
	} else if (message === `RGB`) {
		answer = colorRGBToHex(isRGBFormat(input)[1],isRGBFormat(input)[2],isRGBFormat(input)[3]);
	} else {
		alert(message);
	}
	return answer;
}
