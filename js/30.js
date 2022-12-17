x = prompt("Enter the date dd-mm-yyyy")
y = new Date()
currentYear = y.getFullYear()
const z = new Date(x);
const birthYear = z.getFullYear(); 
age = currentYear-birthYear;
document.write("Your Age is:"+age)