const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

document
  .querySelector("#generate-btn")
  .addEventListener("click", generatePassword);
let pass1 = document.querySelector("#first-generated-password");
let pass2 = document.querySelector("#second-generated-password");
function generatePassword() {
  let passwordLength = document.querySelector("#pass-length").value;
  if (passwordLength > 25) {
    passwordLength = 25;
  }
  let noSpecialsChecked = document.querySelector("#no-specials").checked;
  const generatedPasswords = [];
  for (let i = 0; i < 2; i++) {
    let password = "";
    for (let j = 0; j < passwordLength; j++) {
      if (noSpecialsChecked) {
        password += characters[Math.floor(Math.random() * 62)];
      } else {
        password += characters[Math.floor(Math.random() * characters.length)];
      }
    }
    generatedPasswords.push(password);
  }
  pass1.textContent = generatedPasswords[0];
  pass2.textContent = generatedPasswords[1];
  pass1.addEventListener("click", copyOnClick);
  pass2.addEventListener("click", copyOnClick);
}

function copyOnClick(event) {
  navigator.clipboard.writeText(event.target.textContent);
}
