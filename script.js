function mapLetters() {
  const input = document.getElementById("inputWord").value;
  const result = {};

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (!result[char]) {
      result[char] = [];
    }
    result[char].push(i);
  }

  document.getElementById("output").textContent = JSON.stringify(result, null, 2);
}
