
//----random list picker----------
let getList= prompt("input names here USE commas inbetween!");

const listSplit = getList.split(',');


let randomNumber = Math.floor( Math.random()*100) % listSplit.length

console.log(randomNumber)
alert(listSplit[randomNumber] + " is the person randomly chosen!");




//--------99 bottle song-----------------

let starterNum = 99;


while (starterNum <=100 && starterNum >0) {

	if (starterNum === 1) {
		console.log(starterNum + " BOTTLE of beer on the wall, " + starterNum + " bottle of beer!")
        starterNum--
        console.log("Take one down and pass it around... " + "no MORE" + " bottles of beer on the wall!")
	
		
	} else {


		console.log(starterNum + " bottles of beer on the wall, " + starterNum + " bottles of beer!")
  starterNum--
  console.log("Take one down and pass it around... " + (starterNum) + " bottles of beer on the wall!")

	}

}



//------ LEAP YEAR CALULATOR----------------------
let askingNum = prompt("what year is it???")
 let calcYear = askingNum % 4;
 let stepTwo = askingNum %100;
 let stepThree = askingNum % 400;
 
 
 
if (calcYear === 0) {
	console.log (calcYear+ " should be 0 here")
		if (stepTwo === 0) {
			console.log (stepTwo + " should be 0 here")

			if (stepThree === 0) {
				console.log (stepThree + " should be 0 here")
				alert("this is not a leap!... *4")
			} else {
				 alert("not even divisible by 400...this is not a leap :(")
			}
			
		} else {
			 alert("this is a leap year! (100yr cut off answer was no, but 4yr mark passes)")
		}

	
} else {
	 alert("this is not a leap!... not / by 4")
}





  
  