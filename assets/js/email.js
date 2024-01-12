function submitForm() {
    // Reset previous alerts
    document.getElementById('alert-container').innerHTML = '';

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if(!name || !email || !subject || !message) {
        displayAlert('danger', 'Please fill the form completely');
        return;
    }

    // Create a data object to send to the server
    var data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Send the data to the server using a method like Fetch or XMLHttpRequest
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            // Display success message
            displayAlert('success', data.message);
        })
        .catch((error) => {
            // Display error message
            displayAlert('danger', 'Error sending message. Please try again later.');
        });
}

function displayAlert(type, message) {
    // Create Bootstrap 5 alert element with a custom close button
    var alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-' + type, 'mt-3', 'alert-dismissible', 'fade', 'show');
    alertElement.setAttribute('role', 'alert');

    // Alert content
    alertElement.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    // Append the alert to the container
    document.getElementById('alert-container').appendChild(alertElement);
}

function subscribe() {
    // Get the email from the form
    var email = document.getElementById('email').value;

    // Send the email to the backend
    fetch('/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
        .then(response => response.json())
        .then(data => {
            // Display success message
            displayAlert('success', data.message);
        })
        .catch((error) => {
            // Display error message
            displayAlert('danger', 'Error subscribing. Please try again later.');
        });
}

function displayAlertSubscribe(type, message) {
    // Create Bootstrap alert element
    var alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-' + type, 'alert-dismissible', 'fade', 'show');
    alertElement.setAttribute('role', 'alert');

    // Alert content
    alertElement.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    // Append the alert to the container
    document.getElementById('alert-container-1').innerHTML = '';
    document.getElementById('alert-container-1').appendChild(alertElement);
}