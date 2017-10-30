var calculator_setting = prompt('Hello there! Which calculator would you like to use? Type b for basic (+, -, /, *), a for advanced (square root and power functions), and c for BMI')

if (calculator_setting === 'b') {
  var first_number = prompt ('Okay, now type a number');

  var operation_basic = prompt('Which operation would you like to use? +, -, /, *?')

  var second_number = prompt('Type your next number')
    if (operation_basic === '+') {
      var result = parseFloat(first_number) + parseFloat (second_number);
      alert(first_number + ' + ' + second_number + '=' + result );
    }
    else if (operation_basic === '-') {
      var result = parseFloat(first_number) - parseFloat (second_number);
      alert(first_number + ' - ' + second_number + '=' + result );
    }
    else if (operation_basic === '/') {
      var result = parseFloat(first_number) / parseFloat (second_number);
      alert(first_number + ' / ' + second_number + '=' + result );
    }
    else if (operation_basic === '*') {
      var result = parseFloat(first_number) * parseFloat (second_number);
      alert(first_number + ' * ' + second_number + '=' + result );
    }
}
if (calculator_setting === 'a') {
  var first_number = prompt ('Okay, now type a number (if you want to use the square root function just type zero for this)');

  var operation_basic = prompt('Which operation would you like to use? Type p for power function or s for square root');

  var second_number = prompt('Type your next number');

    if (operation_basic === 'p') {
        var result = Math.pow(parseFloat(first_number), parseFloat(second_number));
        alert(first_number + ' ^ ' + second_number + '=' + result );
    }
    else if (operation_basic === 's') {
        var result = Math.sqrt (parseFloat(second_number));
        alert(' √ ' + second_number + '=' + result );
    }
}
if (calculator_setting === 'c') {
  var measurement = prompt ('Would you like to use the imperial (inches/pounds) or metric (metres/kilograms) system to measure your BMI? Type I for imperial and M for metric');

  var height;
  var weight;
  var body_mass_index;
    if (measurement === 'I') {
      height = prompt ('Please enter your height in inches');
      weight = prompt ('please enter your weight in pounds');
      body_mass_index = (parseFloat(weight) / Math.pow (parseFloat(height), 2)) * 703 ;
      alert(' Your BMI result is = ' + body_mass_index.toFixed(2) );
    }
    else if (measurement ==='M'){
      height = prompt ('Please enter your height in centimetres');
      weight = prompt ('please enter your weight in kilograms');
      body_mass_index  = (parseFloat(weight) / Math.pow (parseFloat(height), 2)) * 10000 ;
      alert(' Your BMI result is = ' + body_mass_index.toFixed(2));
    }
}
