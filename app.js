//Q1
var val = prompt("task 1","Enter your character");
if(val == "A"){
    alert(`A = 65`)
}
else if(val == "a"){
    alert(`a = 97`)
}
else if(val == "Z"){
    alert(`Z = 90`)
}
else if (val == "z"){
    alert(`z = 12`)
}
else{
    alert('Try again')
} 

//Q2
var value_1 = prompt("task 2","Enter your first value")
var value_2 = prompt("task 2","Enter your Second value")
if(value_1 > value_2){
   alert(value_1 + ' ' + 'is bigger ')
}
else if (value_1 == value_2){
    alert('both values are equal')
}
else if (value_2 > value_1){
    alert(value_2 + ' ' + 'is bigger')
}
else{
    alert('Enter correct value !')
}

//Q3
var num = prompt("task 3 : Positive or Negative number","Enter your number")
if(num < 0){
    alert('the number is negative')
}
else if (num > 0){
    alert('the number is positive')
}

//Q4
var abc = prompt("task 4","Please Enter vowel words")
if(abc == "a"){
    alert('a is a vowel word')
}
else if(abc == "e"){
    alert('e is a vowel word')
}
else if(abc == "i"){
    alert('i is a vowel word')
}
else if(abc == "o"){
    alert('o is a vowel word')
}
else if(abc == "u"){
    alert('u is a vowel word')
}
else{
    alert('it is not a vowel word')
}

//Q5
var pass_val = prompt("task 5","Enter your password 🔐")
var pass = 1234
if(pass_val == pass){
    alert('Correct! ✅ \n The password you entered \n matches the original password')
}
else{
    alert('Incorrect password ❗')
}

//Q6
var hour = prompt("task 6","Enter hour")
if (hour < 18) {
   alert("Good day 🌞")
}
else{
    alert("Good evening ⛅")
}

//Q7
var clock = prompt("Clock 🕙")
if(clock == "1am"){
    alert('1am = 1:00')
}
else if(clock == "2am"){
    alert('2am = 2:00')
}
else if(clock == "3am"){
    alert('3am = 3:00')
}
else if(clock == "4am"){
    alert('4am = 4:00')
}
else if(clock == "5am"){
    alert('5am = 5:00')
}
else if(clock == "6am"){
    alert('6am = 6:00')
}
else if(clock == "7am"){
    alert('7am = 7:00')
}
else if(clock == "8am"){
    alert('8am = 8:00')
}
else if(clock == "9am"){
    alert('9am = 9:00')
}
else if(clock == "10am"){
    alert('10am = 10:00')
}
else if(clock == "11am"){
    alert('11am = 11:00')
}
else if(clock == "12pm"){
    alert('12pm = 12:00')
}
else if(clock == "1pm"){
    alert('1pm = 13:00')
}
else if(clock == "2pm"){
    alert('2pm = 14:00')
}
else if(clock == "3pm"){
    alert('3pm = 15:00')
}
else if(clock == "4pm"){
    alert('4pm = 16:00')
}
else if(clock == "5pm"){
    alert('5pm = 17:00')
}
else if(clock == "6pm"){
    alert('6pm = 18:00')
}
else if(clock == "7pm"){
    alert('7pm = 19:00')
}
else if(clock == "8pm"){
    alert('8pm = 20:00')
}
else if(clock == "9pm"){
    alert('9pm = 21:00')
}
else if(clock == "10pm"){
    alert('10pm = 22:00')
}
else if(clock == "11pm"){
    alert('11pm = 23:00')
}
else if(clock == "12am"){
    alert('12am = 24:00')
}
else{
    alert('Please enter time with am/pm')
}