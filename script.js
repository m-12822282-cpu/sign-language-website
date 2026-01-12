
function translateText() {
  const input = document.getElementById("textInput").value.toLowerCase();
  const output = document.getElementById("output");

  // Clear previous output
  output.innerHTML = "<h3>Translation:</h3>";

  for (let char of input) {
    // Letters a–z
    if (char >= "a" && char <= "z") {
      // Wrapper for image + label
      const letterBox = document.createElement("div");
      letterBox.style.display = "inline-block";
      letterBox.style.textAlign = "center";
      letterBox.style.margin = "8px";

      // Image
      const img = document.createElement("img");
      img.src = "sign-language-website/images/" + char + ".png";
      img.alt = char;
      img.style.width = "60px";
      img.style.display = "block";
      img.style.margin = "0 auto";

      // Label
      const label = document.createElement("div");
      label.textContent = char.toUpperCase();
      label.style.marginTop = "4px";
      label.style.fontSize = "14px";
      label.style.fontWeight = "bold";

      // Combine
      letterBox.appendChild(img);
      letterBox.appendChild(label);
      output.appendChild(letterBox);
    }

    // Space between words
    else if (char === " ") {
      const space = document.createElement("div");
      space.style.width = "100%";
      space.style.height = "20px";
      output.appendChild(space);
    }
  }
}

// Allow Enter key t
