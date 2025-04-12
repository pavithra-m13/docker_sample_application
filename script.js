document.getElementById("bmiForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
    
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert("Please enter valid values.");
      return;
    }
    
    const bmi = (weight / (height * height)).toFixed(2);
    let category = "";
    
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";
    
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Your BMI is <strong>${bmi}</strong> <br><span class="category">${category}</span>`;
    resultDiv.setAttribute("data-category", category);
    
    // Add the active class with a slight delay for animation effect
    setTimeout(() => {
      resultDiv.classList.add("active");
    }, 50);
    
});
  
  // Reset result active state when changing input values
  document.querySelectorAll('#bmiForm input').forEach(input => {
    input.addEventListener('focus', () => {
      const resultDiv = document.getElementById("result");
      resultDiv.classList.remove("active");
    });
  });
  
  // Add some input validation for better user experience
  document.querySelectorAll('#bmiForm input').forEach(input => {
    input.addEventListener('input', function() {
      if (this.value < 0) this.value = 0;
    });
  });