function setAlert(message) {
  document.getElementById("alert").textContent = message;
}

function setCreditCardType(type) {
  document.getElementById("cardDetail").textContent = type;
}

document.getElementById("creditcard").addEventListener("change", validation);

function validation(e) {
  const data = e.target.value;

  if (data.length < 16) {
    setAlert("Credit card number is too short");
  } else {
    // create a credit card checker based on luhn algorithm
    let sum = 0;
    let doubleUp = false;

    for (let i = data.length - 1; i >= 0; i--) {
      let curDigit = parseInt(data.charAt(i));

      if (doubleUp) {
        curDigit *= 2;
        if (curDigit > 9) {
          curDigit -= 9;
        }
      }

      sum += curDigit;
      doubleUp = !doubleUp;
    }

    if (sum % 10 === 0) {
      setAlert("Credit card number is valid");

      // check the type of credit card
      if (data.startsWith("4")) {
        setCreditCardType("Credit card type: Visa");
      } else if (data.startsWith("5")) {
        setCreditCardType("Credit card type: Mastercard");
      } else if (data.startsWith("6")) {
        setCreditCardType("Credit card type: Discover");
      } else {
        setCreditCardType("Credit card type: Unknown");
      }
    } else {
      setAlert("Credit card number is invalid");
    }
  }
}
