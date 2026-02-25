document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultBox = document.getElementById('result');

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';
        let colorClass = '';

        if (bmi < 18.5) {
            category = 'Underweight 🟩';
            colorClass = 'red';
        } else if (bmi < 25) {
            category = 'Normal weight 🟢';
            colorClass = 'green';
        } else if (bmi < 30) {
            category = 'Overweight 🟡';
            colorClass = 'red';
        } else {
            category = 'Obese 🔴';
            colorClass = 'red';
        }

        resultBox.className = `result-box ${colorClass}`;
        resultBox.textContent = `Your BMI is ${bmi} — ${category}`;
    } else {
        resultBox.className = 'result-box red';
        resultBox.textContent = 'Please enter valid weight and height values.';
    }
});