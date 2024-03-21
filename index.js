/*----Quick Dark/ light mode changer---------
<h1 id="node" >Hello world</h1>
<button id="darkBtn">Dark Mode</button>
<button id="lightBtn">Light Mode</button>
body{
  text-align: center;
  background: #ccf;
  color: #3400a9; 
}
button{
  color: #3400a9;
  font-weight: 900;
  letter-spacing: 2px;
  padding: 10px 25px;
  text-transform: uppercase;
  border: 2px solid #3400a9;
  margin: 20px
}
#darkBtn{
  background: #000;
}

lightBtn{
  background: #fff;
}
*/
let dark = document.getElementById('darkBtn');
let light = document.getElementById('lightBtn');
let node = document.getElementById('node');

light.addEventListener("click", () =>{
  document.body.style.background = 'white';
  document.body.style.color = 'black'
  node.textContent = 'Light Mode On'
                      
})

dark.addEventListener("click", () =>{
  document.body.style.background = '#222';
  document.body.style.color = 'white'
  node.textContent = 'Dark Mode On'
                      
})




//---- see the w x h or a browser-----------
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function updateSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

updateSize();
window.addEventListener("resize", updateSize);


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


//--------basic-calculator

function add(x,y) {
    return x + y
     
 }
 function sub(x,y) {
    return x - y
     
 }
 function mul(x,y) {
    return x * y
     
 }
 function div(x,y) {
    return x / y
     
 }
 
 function rem(x,y) {
    return x % y
     
 }
 function calc(x,y, operator) {
    return operator(x,y)
     
 }
 
  
  

//---fizzbuzz game --------


let myArray = [];
let i = 1;

 

while (i < 101) {
    if (i % 3 ===0 && i % 5 ===0) {
        console.log(myArray.push("fizzbuzz"))
        i++
    }  else if (i % 3 ===0) {
        console.log(myArray.push("fizz"))
        i++
    } else if (i % 5 ===0) {
        console.log(myArray.push("buzz"))
        i++
    }    
        console.log(myArray.push(i))
        i++
    }
        

console.log(myArray)

  








 //----fibonaccigen ------------


 function fibonacciGenerator(b) {
	
    if (b === 0) {
        console.log([0])
        
    } else {
        
     let sequenceStart = [0, 1]
     let n = b
    
    
    while (sequenceStart.length < n) {
    
     
        let arrayLength = sequenceStart.length
        let numBefore = sequenceStart[arrayLength-2]
        let currNum = sequenceStart[arrayLength-1]	
       
        let mathLogic = numBefore + currNum
        sequenceStart.push(mathLogic)	   
      }
    
      console.log(sequenceStart)
    }
    
    }
                
        //------------



 let sequenceStart = [0, 1, 1]

 for (let i = 0; i <30; i++) {
  
   let arrayLength = sequenceStart.length
   let numBefore = sequenceStart[arrayLength-2]
   let currNum = sequenceStart[arrayLength-1]	
  
   let mathLogic = numBefore + currNum
	 sequenceStart.push(mathLogic)
	 console.log(sequenceStart)
	 i++
 
 }

 //---i think i made this based off online workesd but is 1 number behind the # you actually want


 let sequenceStart = [0, 1, 1]
 let n = 10; //got to figure out how to put this in function but... this is the number in sequence you wanna find (10 numb in fib sequence)



 for (let i = 0; i <= n; i++) {
  
   let arrayLength = sequenceStart.length
   let numBefore = sequenceStart[arrayLength-2]
   let currNum = sequenceStart[arrayLength-1]	
  
   let mathLogic = numBefore + currNum
	 sequenceStart.push(mathLogic)
	 console.log(sequenceStart)
	 i++
 
 }
 
// --another one i made ------------------
 let sequenceStart = [0, 1, 1] //fib sequence is last number + last LAST number = new Number...then repeat 
let n = 10; //got to figure out how to put this in function but... this is the number in sequence you wanna find (10 numb in fib sequence)



 for (let i = 0; i <= n; i++) {
  
   let arrayLength = sequenceStart.length
   let numBefore = sequenceStart[arrayLength-2]
   let currNum = sequenceStart[arrayLength-1]	
   let mathLogic = numBefore + currNum
	 
   sequenceStart.push(mathLogic)
	 
	 if (i === n) {
		 console.log(arrayLength + " is the number you inputted, fibonacci # array to that interger is below!")
	 	console.log(sequenceStart)
	 } else {
		
		
	    i++
		 
	 }
 }
 
 //--- one i made, works the best
 let sequenceStart = [0, 1, 1]
 let n = ?????

while (sequenceStart.length < n) {

 
	let arrayLength = sequenceStart.length
	let numBefore = sequenceStart[arrayLength-2]
	let currNum = sequenceStart[arrayLength-1]	
   
	let mathLogic = numBefore + currNum
	  sequenceStart.push(mathLogic)
	  console.log(sequenceStart)
	  
	  console.log("pizza")
  
  }


  
  //----teacher answer

  function fibonacciGenerator (n) {
    //TODO 
    var res = [];
    for (var i = 0; i < n; i++) {
        if (i == 0) res.push(0);
        else if (i == 1) res.push(1);
        else res.push(res[i-1] + res[i-2]);
    }
    return res;
    //Return an array of fibonacci numbers.
}
//---making objects
function HouseMaker (name, age, past, work) {

    this.name= name;
   this.age = age;
    this.pastJobs = past;
    this.workDuty = work;
   cleanUp = alert('cleaning n porgress..')
}

let houseKeeper2 = new HouseMaker('jessy' , 21 , ['none'], ['cleaning' , 'laundry' , 'bathroom']);
let houseKeeper3 = new HouseMaker('maddie' , 19 , ['best western'], ['cleaning' , 'laundry' , 'bathroom']);




  
  
