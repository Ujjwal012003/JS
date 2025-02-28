const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `<span style="color: red;">Please enter a valid height!</span>`;
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `<span style="color: red;">Please enter a valid weight!</span>`;
        return;
    }

    // Use the correct BMI formula
    const bmi = (weight / (height * height)).toFixed(2);

    let category = "";
    let color = "";

    if (bmi < 18.5) {
        category = "Underweight";
        color = "#f39c12"; // Yellow
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight";
        color = "#2ecc71"; // Green
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        color = "#e67e22"; // Orange
    } else {
        category = "Obese";
        color = "#e74c3c"; // Red
    }

    results.innerHTML = `Your BMI: <span style="color: ${color};">${bmi} (${category})</span>`;
});
