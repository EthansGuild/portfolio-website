const form = document.querySelector('.scrollContact form');
const submit = form.querySelector('button[type="submit"]');
const requiredFields = form.querySelectorAll('input[required], textarea[required]');
const totalCooldown = 120;
let submitOnCooldown = 0;
let cooldownInterval = null;

//
// Resume a previous cooldown
//
const storedExpiration = localStorage.getItem("cooldownExpiration");
if (storedExpiration) {
    const expirationTime = Number(storedExpiration);
    const remainingTime = Math.ceil((expirationTime - Date.now()) / 1000);
    if (remainingTime > 0) {
        startCooldown(remainingTime);
    } else {
        localStorage.removeItem("cooldownExpiration");
    }
}

//
// Enable button when all fields are filled
//
function checkRequiredFields() {
    // No matter what, don't enable submit button if it's on cooldown
    if (submitOnCooldown > 0) return;
    let enableButton = true;
    requiredFields.forEach(field => {
        // If even one field is empty, dont enable the button
        if (!field.value) {
            enableButton = false;
        }
    });
    submit.disabled = !enableButton;
}

//
// Event listeners for required fields to run checkRequiredFields()
//
requiredFields.forEach(field => {
    field.addEventListener('input', checkRequiredFields);
});

function startCooldown(duration) {
    // Calculate an expiration timestamp (in milliseconds)
    const expirationTime = Date.now() + duration * 1000;
    submitOnCooldown = duration;
    // Store the expiration time in localStorage so it persists across refreshes
    localStorage.setItem("cooldownExpiration", expirationTime);

    const remainingTime = Math.ceil((expirationTime - Date.now()) / 1000);
    if (remainingTime > 0) {
        submitOnCooldown = remainingTime;
        submit.textContent = 'Submit (' + remainingTime + ')';
    }
    
    // Clear any previous interval
    if (cooldownInterval) clearInterval(cooldownInterval);
    cooldownInterval = setInterval(() => {
        // Calculate the remaining seconds
        const remainingTime = Math.ceil((expirationTime - Date.now()) / 1000);
        if (remainingTime > 0) {
            submitOnCooldown = remainingTime;
            submit.textContent = 'Submit (' + remainingTime + ')';
        } else {
            // When cooldown is finished, clear the interval and localStorage value
            clearInterval(cooldownInterval);
            localStorage.removeItem("cooldownExpiration");
            submitOnCooldown = 0;
            checkRequiredFields();
            submit.textContent = 'Submit';
        }
    }, 1000);
}

//
// Submit form and start cooldown.
//
form.addEventListener('submit', (e) => {
    e.preventDefault();

    submit.disabled = true;
    submit.textContent = 'Sent!';
    setTimeout(() => {
        startCooldown(totalCooldown);
    }, 2000);

/*     submit.textContent = 'Sending...';
    const formData = new FormData(form);
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            submit.disabled = true;
            submit.textContent = 'Sent!';
            form.reset();
        } else {
            submit.textContent = 'Submission Failed!';
        }

        
    })
    .catch(error => {
        setTimeout(() => {
            submit.textContent = 'Error: ' + error;
        }, 2000);
    }); */
});