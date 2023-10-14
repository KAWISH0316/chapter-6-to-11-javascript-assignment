
// -------1 City Name-------

var cities = ["karachi","lahore","islamabad"];
var input = prompt("Enter Your City Name");

if(input == "karachi"){
    document.write("WellCome to City is light")
}
else if(input == "lahore"){
    document.write("WellCome to Metro city")

}else if(input == "islamabad"){
    document.write("WellCome to Parlement House")
}
else{
    document.write("City Not Found")
}


// --------2 Gender--------

var Ganger = ["Male","Female","Other"];
var input = prompt("Enter Your Gander");


if(input == "male"){
    document.write("Wellcome sir")
}
else if(input == "female"){
    document.write("Wellcome Ma'am")

}else{
    document.write("wellcome to other")
}


// -------3 trafic signal-------

var Color = ["Red","Green","Yellow"];
var input = prompt("Enter Trafic Color");
var isfound = true

if(input == "red"){
    document.write("Red:"+" Must Stop")
    .isfound = false
}
if(input == "yellow"){
    document.write("Yellow: "+" Ready To Move")
    .isfound = false
}
if(input == "green"){
    document.write("Green: "+" Move Now")
}
else{
    document.write("This is Not Trafic Signal Color")
}
isfound(true)



// --------4 car fuel ---------

var remainingfuel = Number(prompt("Enter the remaining fuel in liters:"))

if(remainingfuel < 0.25){
    document.write("Please refill the fuel in your car")
}else{
    document.write("You have enough fuel in your car") 
}


// -------5 Run script alert Messege------


// -----A-----
var a = 4;
if (++a === 5){
   alert("given condition for variable a is true");
   }
//   given condition is true


// -----B-----
var b = 82;
   if (b++ === 83){
   alert("given condition for variable b is true");
   }
//    given condition is false 



//   -----C1-----    
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
// given condition is false 

// ------C2-----
var c = 12;
if (c === 13){
   alert("condition 2 is true");
}
//    given condition is true 
   
// ------C3-----
var c = 12;
if (++c < 14){
   alert("condition 3 is true");
}
//   given condition is false 
   
// ------C4-----
var c = 12;
if(c === 14){
   alert("condition 4 is true");
}
//  given condition is true
   


// ------D------
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//  given condition is true


// -----E-----
var user = Number(prompt("6-3 = ?"));
var a = 3

if (user === a){
   alert("True");
}
if(user != a){
      alert("false")
}


// -----F------
var car = Number(prompt("Enter car Lenght"));
var cat = Number(prompt("Enter cat Lenght"));

if(car < cat){
      alert("car is smaller than cat");
}if(car > cat){
         alert("car is bigger than cat");
}  



// ---------6 Mark sheet-------

var  eng = Number(prompt("Enter English marks"))
var  urdu = Number(prompt("Enter Urdu marks"))
var  math = Number(prompt("Enter Math marks"))

var totalMarks = 300;
var obtMarks = eng + urdu + math;
var percent = (obtMarks / totalMarks) * 100;

document.write("<h1>Marks Sheet </h1> <br><br><br>")
document.write("Total Marks: " + "<b>" + totalMarks + "<br><br>")
document.write("Marks Obtained: " + obtMarks + "<br>")
document.write("Percentage: " + percent+ "%" + "<br>")

if(percent >=80 ){
    document.write("Grade: A-one" + "<br>")
    document.write("Remarks: Excellent" + "<br>")
}

else if(percent <=79 && percent >=70){
    document.write("Grade: A" + "<br>")
    document.write("Remarks: Good" + "<br>")
}

else if(percent <=69 && percent >=60){
    document.write("Grade: B" + "<br>")
    document.write("Remarks: You need to improve" + "<br>")
}

else if(percent <=60){
    document.write("Grade: Fail" + "<br>")
    document.write("Remarks: Sorry.. Work Hard" + "<br>")
}

// ----------7 Guess Game------


var Secratenum = 5;
var Guessnum   =  Number(prompt("Enter Your Lucky Number between 1 to 10"));

if( Guessnum === Secratenum){
    alert("Bingo! Correct answer")
}else if( Guessnum == Secratenum + 1 || Guessnum == Secratenum - 1){
    alert("Close enough to the correct answer")
}else{
    alert("Sorry Wrong Number Please try Again Leter!!!")
}


// ------------8 Devided by 3--------

var userinput = Number(prompt("Write a Number to Check if it can devide by 3"))

if(userinput % 3 == 0){
    alert("Given Number Can be Devide By 3")
}else{
    alert("Given Number Can be Not Devide By 3")
}


// -----------9 Even & Odd Number----

var userinput = Number(prompt("Write a Number  so that we can check that is Even or Odd"))

if(userinput % 2 == 0){
    alert("Given Number is Even")
}else{
    alert("Given Number is Odd")
}

// ------------ 10 Weather temperature ---------


var  temperature = Number(prompt("Enter the temperature in Celsius"))

if(temperature >=40 ){
   document.write("It is too hot outside")
}
         
else if(temperature <=39 && temperature >=30){
   document.write("The Weather today is Normal")
}
         
else if(temperature <=29 && temperature >=20){
   document.write("Today’s Weather is cool")
}
         
else if(temperature >=0 && temperature <=19){
   document.write("OMG! Today’s weather is so Cool")
}

// --------11 calculateor----

var firstnum = Number(prompt("Enter Your First Number"));
var secoundnum = Number(prompt("Enter Your Secound Number"));
var opera = prompt("Enter Your Operater")

if(opera === "+"){
    document.write(firstnum+secoundnum)
}
if(opera === "-"){
    document.write(firstnum-secoundnum)
}
if(opera === "*"){
    document.write(firstnum*secoundnum)
}
if(opera === "/"){
    document.write(firstnum/secoundnum)
}
if(opera === "%"){
    document.write(firstnum/secoundnum*100)
}






         
   