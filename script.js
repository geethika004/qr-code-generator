let qr;

function generateQRCode() {
  const text = document.getElementById('text').value;
  const label = document.getElementById('labelText').value;
  const qrContainer = document.getElementById('qrcode');

  // Clear previous QR
  qrContainer.innerHTML = '';
  document.getElementById('qr-label').textContent = '';

  if (text.trim() === '') {
    alert("Please enter text or URL.");
    return;
  }

  qr = new QRCode(qrContainer, {
    text: text,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });

  if (label.trim() !== '') {
    document.getElementById('qr-label').textContent = label;
  }
}

function downloadQRCode() {
  const img = document.querySelector('#qrcode img');
  if (!img) {
    alert("Generate the QR Code first.");
    return;
  }

  const a = document.createElement('a');
  a.href = img.src;
  a.download = "qrcode.png";
  a.click();
}

function clearFields() {
  document.getElementById('text').value = '';
  document.getElementById('labelText').value = '';
  document.getElementById('qrcode').innerHTML = '';
  document.getElementById('qr-label').textContent = '';
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}
