var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday", "Saturday"];

console.log("Today is : " + daylist[ ay]+ ".");

let rev = 0;
let num = 123456;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev);

// "geek" is Date object
var geek = new Date("October 13, 2013 11:13:00");

document.write("Datastring with day : " + geeks);

let s = 0;
for (i = 1; i <= 10; i++) {
  s = s + i;
}
console.log("Sum of first 10 natural numbers:" + s);

numVar1 = 1000;
1000
numVar1 = 1000
1000
numVar1 = 1000;
1000
numVar2 = 200
200
//  =  assignment operator
undefined
// arithematic operators
undefined
// arithematic operators + - * / %(mod)  ++ -- +=  -=  ?:
undefined
numvar1 + numVar2

numVar1 + numVar2
1200
typeof(numVar1)
'number'
typeof(numVar1+numVar2)
'number'
numVar2 = "Gurgaon";
'Gurgaon'
typeof(numVar2)
'string'
numVar1 + numVar2
'1000Gurgaon'
typeof(numVar1+numVar2)
'string'
boolVar1 = True;

boolVar1 = true;
true
boolVar2 = flase;

boolVar2 = false;
false
typeof(boolVar1)
'boolean'
console.log("Hello World...");
console.log("Hello World...",numVar1, boolVar2);
// logical operators     &&  ||   !
console.log(true && true)
console.log(true && false)
console.log(true || false)
console.log(!true)
console.log(!(3>4))
console.log(!(3<4))
// conditional operators     >  <   >=  <=  ==  ===   !=
3>4
false
typeof(3>4)
'boolean'
numVar3 = numVar2;
'Gurgaon'
console.log(numVar2 == numVar3);
console.log(numVar2 === numVar3);
numVar2[1]
'u'
numVar2[0]
'G'
numVar2[0] = 'g';
'g'
console.log(numVar2 == numVar3);
numVar2
'Gurgaon'
numVar3
'Gurgaon'
numVar2[0] = "g";
'g'
numVar2
'Gurgaon'
fff = "kkk";
'kkk'
fff[0]="4";
'4'
fff
'kkk'
if(100 > 1000){
    console.log("True Case...");
}else{
    console.log("False Case...");
}
if(!100 > 1000){
    console.log("True Case...");
}else{
    console.log("False Case...");
}
if(!(100 > 1000)){
    console.log("True Case...");
}else{
    console.log("False Case...");
}
console.log("True Case..."); 
console.log("False Case...");
100>1000 ? console.log("True Case...") : console.log("False Case...")
!(100>1000) ? console.log("True Case...") : console.log("False Case...")
var t = "Tea";
let c = "Cold Drink";
if (4<5){
    let myVar = 2000;
    console.log(myVar);
}
console.log(myVar)
if (4<5){
    var myVar = 2000;
    console.log(myVar);
}
console.log(myVar)
if (4<5){
    var numVar1 = 20000;
    console.log(numVar1);
}
numVar1
20000
for(let i = 0; i<10; i++){
    console.log(i);
}

i
i=0;
0
while(i<10){
    console.log(i);
    i++;
}

i
10
for(let i = 10; i<20; i++){
    console.log(i);
    if(i==4){
        break;
    }
}

for(let i = 10; i<20; i++){
    console.log(i);
    if(i==14){
        break;
    }
}

undefined
for(let i = 10; i<20; i++){
    console.log(i);
    if(i==14){
        continue;
    }
}

undefined
for(let i = 10; i<20; i++){
    console.log(i);
    if(i==14){
        continue;
    }console.log(i, " Hello");
}

var arr1 = [23, 45, 56, 67, 10, 29];
undefined
arr1[0]
23
arr1[1]
45
arr1[10]
undefined
arr1[10] = "January";
'January'
arr1
// (11) [23, 45, 56, 67, 10, 29, empty × 4, ['January']0: 231: 452: 563: 674: 105: 2910: "January"length: 11[[Prototype]]: Array(0)
typeof(arr1)
'object'
arr1[10]
'January'
arr1[10][0]
'J'
arr1[1][0]
undefined
arr1[1]
45
arr1[8] = [3,5,8];
(3) [3, 5, 8]
arr1
// (11) [23, 45, 56, 67, 10, 29, empty × 2, Array(3), empty, 'January']0: 231: 452: 563: 674: 105: 298: Array(3)0: 31: 52: 8length: 3[[Prototype]]: Array(0)10: "January"length: 11[[Prototype]]: Array(0)
arr2 = arr1
// (11) [23, 45, 56, 67, 10, 29, empty × 2, Array(3), empty, 'January']
arr1 == arr2
true
arr1[0]=10000;
10000
arr1
// (11) [10000, 45, 56, 67, 10, 29, empty × 2, Array(3), empty, 'January']
arr2
// (11) [10000, 45, 56, 67, 10, 29, empty × 2, Array(3), empty, 'January']
arr1===arr2
true
arr1[8][0]=500;
500
arr1==arr2
true
arr1===arr2
true
arr2
// (11) [10000, 45, 56, 67, 10, 29, empty × 2, Array(3), empty, 'January']0: 100001: 452: 563: 674: 105: 298: Array(3)0: 5001: 52: 8length: 3[[Prototype]]: Array(0)10: "January"length: 11[[Prototype]]: Array(0)
function checkEven(n){
    if(n%2==0){
        console.log(n," is an even number...");
    }
    else{
        console.log(n, " is an odd number...");
    }
}
undefined
checkEven(100);
undefined
checkEven(101);
undefined
var fib = function fibSeries(n){
    if(n==1){
        return 1;
    }
var fib = function fibSeries(n){
    if(n==1){
        return 1;}
    }
var fib = function fibSeries(n){
	if(n==1){
		console.log(1);
	}
	if(n==2){
		console.log(1,"\n",2);
	}
	if(n>2){
		let first = 1;
		let second = 2;
		console.log(first,"\n",second);	
		for(let i=0; i<n; i++){
			let third = first + second;
			console.log(third);
			first = second;
			second = third;
		}
	}
}
undefined
fib(1)
undefined
fib(2)
undefined
var fib = function fibSeries(n){
	if(n==1){
		console.log(1);
	}
	if(n==2){
		console.log(1);
		console.log(2);
	}
	if(n>2){
		let first = 1;
		let second = 2;
		console.log(first,"\n",second);	
		for(let i=0; i<n; i++){
			let third = first + second;
			console.log(third);
			first = second;
			second = third;
		}
	}
}
}
// undefined