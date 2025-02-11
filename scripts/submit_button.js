const form = document.querySelector('.scrollContact form');
const submit = form.querySelector('button[type="submit"]');
const requiredFields = form.querySelectorAll('input[required], textarea[required]');

function checkRequiredFields() {
    let enableButton = true;
    requiredFields.forEach(field => {
        // If even one field is empty, dont enable the button
        if (!field.value) {
            enableButton = false;
        }
    });
    submit.disabled = !enableButton;
}

// Add event listener to all required fields to run function whenever a user types
requiredFields.forEach(field => {
    field.addEventListener('input', checkRequiredFields);
});
