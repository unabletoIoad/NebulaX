// Copy Text Button
document.getElementById('copyButton').addEventListener('click', () => {
  const textbox = document.getElementById('textbox');
  textbox.select();
  document.execCommand('copy');
  alert('Text copied to clipboard!');
});

// Print to Console Button
document.getElementById('consoleButton').addEventListener('click', () => {
  console.log('Hello World');
});
