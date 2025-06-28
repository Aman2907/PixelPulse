

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
      results.innerHTML = `Please give a valid ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
      results.innerHTML = `Please give a valid ${weight}`;
    }
    else {
      const bmi =   (weight / ((height * height)/10000).toFixed(2));

      let message = '';

       if(bmi < 18.6){
            message = "You are Underweight";
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            message = "You are in Normal Range";
        }
        else {
            message = "You are Overweight";
        }
        results.innerHTML = `<span>${message} — Your BMI is ${bmi}</span>`;
    }
})