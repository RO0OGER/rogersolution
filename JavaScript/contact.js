function validateForm() {
    // Fehler zurücksetzen
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';

    let isValid = true;

    // Name Validierung
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Bitte geben Sie Ihren Namen ein.';
        isValid = false;
    }

    // E-Mail Validierung
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        isValid = false;
    }

    // Nachricht Validierung
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').innerText = 'Bitte geben Sie eine Nachricht ein.';
        isValid = false;
    }

    return isValid; // Das Formular wird nur gesendet, wenn alle Validierungen erfolgreich sind
}