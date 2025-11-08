
function sendWhatsApp() {
  const name = document.getElementById('c-name').value.trim();
  const email = document.getElementById('c-email').value.trim();
  const message = document.getElementById('c-message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all fields before sending.');
    return;
  }

  const phone = '+201015888272';
  const text = `Welcome, ${name}.\n{"name":${name}, "email":${email}, "msg":${message}}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  // Open WhatsApp in a new tab
  window.open(url, '_blank');
}
