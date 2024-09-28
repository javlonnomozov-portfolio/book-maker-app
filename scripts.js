function copyToClipboard(elementId) {
  const copyText = document.getElementById(elementId);
  navigator.clipboard
    .writeText(copyText.innerText)
    .then(() => {
      alert("Copied: " + copyText.innerText);
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
}
