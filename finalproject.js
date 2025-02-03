// סמלים

let passwordHTML = document.getElementById("passwordHTML")
let button = document.getElementById("button")
let passwordLengthInput = document.getElementById("passwordLength")
let lowercaseCheckbox = document.getElementById("lowercaseLetters")
let uppercaseCheckbox = document.getElementById("uppercaseLetters")
let numbersCheckbox = document.getElementById("numbers")
let symbolsCheckbox = document.getElementById("symbols")


// סמלים

const symbols = "!@#$%^&*()_+-={}[];':`,~/<>"
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"

// פונקציית הלחיצה
function btn(){
  setTimeout(createPassword, 2200)
}

// כפתור היצירה
function createPassword(){
   let password = ""
   let passwordLength = passwordLengthInput.value

   // בדיקת אורך סיסמא
   if (passwordLength < 3 || passwordLength > 50) {
     alert("Please choose a password length between 3 and 50 characters.")
     return
   }

   // בניית הסיסמא
   let charSet = ""
   if (lowercaseCheckbox.checked) charSet += lowercaseLetters
   if (uppercaseCheckbox.checked) charSet += uppercaseLetters
   if (numbersCheckbox.checked) charSet += numbers
   if (symbolsCheckbox.checked) charSet += symbols

   // בדיקת הסמלים
   if (charSet.length === 0) {
     alert("Please select at least one character type.")
     return
   }

   //רנדומייזר 
   for (let i = 0; i < passwordLength; i++) {
     const charIndex = Math.floor(Math.random() * charSet.length)
     password += charSet[charIndex]
   }

   passwordHTML.textContent = password
}

// כפתור העתקה
let copyPassword = document.getElementById("copyPassword")
function copy() {
   navigator.clipboard.writeText(passwordHTML.textContent)
}
// כפתור ניקוי
function clearPassword() {
   passwordHTML.textContent = ""
}