const form = document.getElementById('tributeForm');
const status = document.getElementById('formStatus');
form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('tributeName').value.trim();
  const message = document.getElementById('tributeMessage').value.trim();
  if (!name || !message) { status.textContent = 'Please add your name and a message.'; return; }
  const tribute = 'A tribute for Hannah Nyambura Karanja (Wa Ruth)\\nFrom: ' + name + '\\n\\n' + message;
  try {
    await navigator.clipboard.writeText(tribute);
    status.textContent = 'Your tribute has been copied. You can now paste it into a message to the family.';
  } catch (error) {
    status.textContent = 'Your tribute is ready. Copy the text below and send it to the family.';
    let output = form.querySelector('.prepared-tribute');
    if (!output) { output = document.createElement('textarea'); output.className = 'prepared-tribute'; output.readOnly = true; output.style.width = '100%'; output.style.marginTop = '12px'; form.appendChild(output); }
    output.value = tribute; output.focus(); output.select();
  }
});