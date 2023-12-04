// JavaScript für die Interaktivität der Webseite

// Funktion, um Daten an den Server zu senden (zum Beispiel, um sich anzumelden)
function login() {
  const username = document.getElementById('username').value; // Hole den Benutzernamen aus dem Formular
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=${username}`, // Sende den Benutzernamen an den Server
  })
  .then(response => response.text())
  .then(data => {
    console.log(data); // Zeige die Server-Antwort in der Konsole an
    // Hier könntest du die Benutzeroberfläche aktualisieren, um den erfolgreichen Login anzuzeigen
  })
  .catch(error => console.error('Error:', error));
}

// Funktion, um eine Chat-Nachricht an den Server zu senden und die Antwort zu erhalten
function sendMessage() {
  const message = /* Hier würde der Inhalt der Chat-Nachricht aus dem Chatfenster geholt */;
  fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `message=${message}`, // Sende die Chat-Nachricht an den Server
  })
  .then(response => response.text())
  .then(data => {
    console.log(data); // Zeige die Server-Antwort in der Konsole an
    // Hier könntest du die Chat-Ansicht aktualisieren, um die Antwort anzuzeigen
  })
  .catch(error => console.error('Error:', error));
}