var totalFee = 0; //* this should help with my scoopping issues
var count = 0;

function participantTemplate(count){
    const participantsSection = document.querySelector('.participants');

    const participant1 = document.querySelector('.participant1');

    const firstNameInput = participant1.querySelector('.name input'); 
    const activityInput = participant1.querySelector('.activities input'); 
    const feeInput = participant1.querySelector('.fee input'); 
    const dateInput = participant1.querySelector('.data input');
    const gradeSelect = participant1.querySelector('.Grade select');

    //this if to total the fee here
    totalFee = totalFee + (parseFloat(feeInput.value) || 0);

    return `
        <div class="participant">
            <h3>Participant ${count}</h3>
            <p>Name: ${firstNameInput.value}</p>
            <p>Activity: ${activityInput.value}</p>
            <p>Fee: ${feeInput.value}</p>
            <p>Date: ${dateInput.value}</p>
            <p>Grade: ${gradeSelect.options[gradeSelect.selectedIndex].text}</p>
        </div>
    `;
}

function totalFees() {
    return totalFee;
}

function submitForm(event) {
    event.preventDefault();
    
    // Calculate total fees
    const total = totalFees();
    
    // Get adult name
    const adultName = document.getElementById("adult_name").value;
    
    // Hide form
    document.querySelector("form").style.display = "none"
    
    // Create summary element if it doesn't exist
    let summaryElement = document.querySelector(".summary");
    if (!summaryElement) {
        summaryElement = document.createElement("div");
        summaryElement.className = "summary";
        document.querySelector(".testbox").appendChild(summaryElement);
    }
    
    // Show summary with message
    summaryElement.innerHTML = `
        <h2>Registration Complete</h2>
        <p>Thank you ${adultName} for registering. You have registered ${count} participants and owe $${total.toFixed(2)} in Fees.</p>
    `;
    summaryElement.classList.remove('hide');
}


document.querySelector("form").addEventListener("submit", submitForm);


document.getElementById("add").addEventListener("click", function() {
    count = document.querySelectorAll(".participant").length + 1;
    this.insertAdjacentHTML("beforebegin", participantTemplate(count));
});