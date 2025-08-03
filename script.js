function generateQR() {
  const input = document.getElementById("qrInput").value;
  const qrBox = document.getElementById("qrBox");
  const qrImage = document.getElementById("qrImage");

  if (input.trim() === "") {
    alert("Please enter text or a URL!");
    return;
  }

  const apiURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`;
  qrImage.src = apiURL;
  qrBox.classList.remove("hidden");
}

function downloadQR() {
  const qrImage = document.getElementById("qrImage");
  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "qr-code.png";
  link.click();
}

function copyQR() {
  const img = document.getElementById("qrImage");

  fetch(img.src)
    .then(res => res.blob())
    .then(blob => {
      const item = new ClipboardItem({ "image/png": blob });
      navigator.clipboard.write([item]);
      alert("QR code copied to clipboard!");
    });
}