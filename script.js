const textField = document.getElementById("text");
const message = document.getElementById("message");

function cleanSpaces() {
  const lines = textField.value.split("\n");
  const cleanedLines = [];

  for (const line of lines) {
    cleanedLines.push(line.trim().replace(/[ \t]+/g, " "));
  }

  textField.value = cleanedLines.join("\n");
  message.textContent = "Spaces cleaned up.";
}

function removeEmptyLines() {
  const lines = textField.value.split("\n");
  const keptLines = [];

  for (const line of lines) {
    if (line.trim() !== "") {
      keptLines.push(line);
    }
  }

  textField.value = keptLines.join("\n");
  message.textContent = "Empty lines removed.";
}

function removeDuplicates() {
  const lines = textField.value.split("\n");
  const uniqueLines = [];

  for (const line of lines) {
    if (!uniqueLines.includes(line)) {
      uniqueLines.push(line);
    }
  }

  textField.value = uniqueLines.join("\n");
  message.textContent = "Duplicate lines removed.";
}

async function copyText() {
  try {
    await navigator.clipboard.writeText(textField.value);
    message.textContent = "Text copied!";
  } catch {
    textField.focus();
    textField.select();
    message.textContent =
      "Press Ctrl+C (Windows/Linux) or Cmd+C (Mac) to copy the selected text.";
  }
}

document.getElementById("spaces").addEventListener("click", cleanSpaces);
document.getElementById("empty").addEventListener("click", removeEmptyLines);
document.getElementById("duplicates").addEventListener("click", removeDuplicates);
document.getElementById("copy").addEventListener("click", copyText);