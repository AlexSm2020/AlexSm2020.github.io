// Defining Variables
const Range = document.getElementById('Range')
const numberOfChar = document.getElementById('numberOfChar')
const Uppercase = document.getElementById('includeUppercase')
const Number = document.getElementById('includeNumbers')
const Symbol = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('password')

// Defining Arrays
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


numberOfChar.addEventListener('input', numberOfChar)
Range.addEventListener('input', syncCharacterAmount)

// Syncing Number of char with range
function syncCharacterAmount(e) {
  const value = e.target.value
  numberOfChar.value = value
  Range.value = value
}

// click (submit) event listener
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = numberOfChar.value
  const includeUppercase = Uppercase.checked
  const includeNumbers = Number.checked
  const includeSymbols = Symbol.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})


function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Generate Password
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

