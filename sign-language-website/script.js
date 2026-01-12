function translateText() {
  const input = document.getElementById("textInput").value.toLowerCase();
  const output = document.getElementById("output");

  // Clear previous output
  output.innerHTML = "<h3>Translation:</h3>";

  for (let char of input) {
    // Letters a–z
    if (char >= "a" && char <= "z") {
      const img = document.createElement("img");
      img.src = "sign-language-website/images/" + char + ".png";
      img.alt = char;
      img.style.width = "60px";
      img.style.margin = "5px";
      output.appendChild(img);
    }
    // Space between words
    else if (char === " ") {
      const space = document.createElement("div");
      space.style.height = "15px";
      space.style.width = "100%";
      output.appendChild(space);
    }
  }
}

// Allow Enter key to translate
document
  .getElementById("textInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      translateText();
    }
  });
