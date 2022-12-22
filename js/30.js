// x = prompt("Enter the date dd-mm-yyyy")
// y = new Date()
// currentYear = y.getFullYear()
// const z = new Date(x);
// const birthYear = z.getFullYear();
// age = currentYear-birthYear;
// document.write("Your Age is:"+age)

x=prompt("enter the date mm-dd-yyyy");
y= new Date()
currentYear=y.getFullYear()
currentmonth=y.getMonth()
let birthYear = new Date(x);
let year = birthYear.getFullYear();		  
birthMonth=birthYear.getMonth();
currentDate=y.getDate();
birthdate=birthYear.getDate();
age=(currentYear-year)
if (birthMonth<=currentmonth && currentDate>=birthdate)
{
document.write(`your age is : ${age}`)
}
else
{
document.write(`your age is : ${age-1}`)	
}



		