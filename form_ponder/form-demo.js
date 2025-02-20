function validateForm(event) {
    // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
    const theForm = event.target;
    // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
    // To keep it from happening we can can call e.preventDefault()
    // You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
    const errors = [];
    // start by assuming the form is valid.
    let isValid = true;
    // add our validations here
  
    // if we ran into any problems above valid will be false.
    if (!isValid) {
      //stop the form from being submitted
      event.preventDefault();
      // show the errors
      showErrors(errors);
      // return false to let the browser know the form was not submitted.
      return false;
    }
  }
  
  function togglePaymentDetails(e) {
    const creditCardContainer = document.getElementById('CreaditCardNumber');
    const paypalContainer = document.getElementById('PaypalUserName');
    const creditCardInput = document.getElementById('Credit_Card');
    const paypalInput = document.getElementById('Paypal_Name');
  
    //* i spent to long on this and realized that i forgot to remove required the whole time.
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
    creditCardInput.removeAttribute("required");
    paypalInput.removeAttribute("required");
    
    if (e.target.value === 'paypal') {
        paypalContainer.classList.remove('hide');
        paypalInput.setAttribute("required", "");
    }
    if (e.target.value === 'visa') {
        creditCardContainer.classList.remove('hide');
        creditCardInput.setAttribute("required", "");
    }
  }
  
  // helper function to display our errors.
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }

  

document.querySelector('#paymentMethod').addEventListener('change', togglePaymentDetails);

