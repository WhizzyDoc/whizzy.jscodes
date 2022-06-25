function calculator() { 
let H = document.getElementById("height").value;
let W = document.getElementById("weight").value;
let H2 = H * H
let bmi = W / H2
let BMI = Math.round(bmi)
document.getElementById("solution").value= BMI
		
}
