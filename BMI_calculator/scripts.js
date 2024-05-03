document.getElementById("bmiForm").addEventListener('submit', function(e) {
    e.preventDefault();
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightFeet = parseInt(document.getElementById("height-feet").value);
    const heightM = parseInt(document.getElementById("height-m").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (gender && age && heightFeet && heightM && weight) {
        // Convert height from feet and meters to meters
        const heightInMeters = heightFeet * 0.3048 + heightM;
        const bmi = weight / Math.pow(heightInMeters, 2);
        const resultElement = document.getElementById("result");
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Over weight';
        } else {
            category = 'Obese';
        }
        let resultMessage = 'Your BMI: ' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category: ' + category;

        resultElement.innerHTML = resultMessage;
    }
});