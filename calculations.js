//sum
const rand1 = Math.floor(Math.random() * 100) + 1;
const rand2 = Math.floor(Math.random() * 100) + 1;
const userSum = prompt(`Give the sum of ${rand1} and ${rand2}`);
const sum = rand1 + rand2;
if (userSum == sum) {
    alert("Correct.");
} else {
    alert("Incorrect.");
}
//area
const radius = prompt("Please give a radius.");
if (radius < 0) {
    alert("Warning, negative radius.");
    throw Error("Warning, negative radius.");
} else {
    const area = Math.PI * radius * radius;
    alert(`Circle area: ${area}`);
}
//bmi
const weight = prompt("What is your weight in pounds?");
const height = prompt("What is your height in inches?");
const bmi = Math.round(weight / height / height * 703 * 10) / 10;
if (bmi < 18.5) {
    alert(`BMI: ${bmi}, underweight`);
} else if (bmi >= 18.5 && bmi < 25) {
    alert(`BMI: ${bmi}, normal weight`);
} else if (bmi >= 25 && bmi < 30) {
    alert(`BMI: ${bmi}, overweight`);
} else if (bmi >= 30 && bmi < 35) {
    alert(`BMI: ${bmi}, class I obesity`);
}  else if (bmi >= 35 && bmi < 40) {
    alert(`BMI: ${bmi}, class II obesity`);
} else {
    alert(`BMI: ${bmi}, class III obesity`);
}