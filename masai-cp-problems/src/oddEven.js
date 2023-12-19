function generateNumber() {
  // generate a random integer (hint: Math.random)
  return Math.floor(Math.random() * 100) + 1; // Change 100 to your desired range
}

function checkOddEven(num) {
  // logic for even / odd
  return num % 2 === 0 ? 'Even' : 'Odd';
}

window.onload = function () {
  // add event listeners to the button here
  var button = document.getElementById('yourButtonId'); // Replace 'yourButtonId' with the actual ID of your button
  button.addEventListener('click', function () {
    var randomNumber = generateNumber();
    var result = checkOddEven(randomNumber);
    alert('Random Number: ' + randomNumber + '\nResult: ' + result);
  });
};

// don't change the following export statement

if (typeof exports !== 'undefined') {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
