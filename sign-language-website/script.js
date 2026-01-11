function translateText() {
  const input = document.getElementById("textInput").value.toLowerCase();
  const output = document.getElementById("output");

  output.innerHTML = "";

  for (let char of input) {
    if (char >= "a" && char <= "z") {
      const img = document.createElement("img");
      img.src = "/sign-language-website/images/" + char + ".png";
      img.alt = char;
      img.style.width = "60px";
      img.style.margin = "5px";
      output.appendChild(img);
    }
  }
}




