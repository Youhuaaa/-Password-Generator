// define all characters
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '1234567890'
const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'


function generatePassword(options) {
  // generate collection
  let collection = []
  let result = ''

  if (options.lowercase === 'on') {
    collection = collection.concat([...lowerCaseLetters])
  }

  if (options.uppercase === 'on') {
    collection = collection.concat([...upperCaseLetters])
  }

  if (options.numbers === 'on') {
    collection = collection.concat([...numbers])
  }

  if (options.symbols === 'on') {
    collection = collection.concat([...symbols])
  }

  // remove characters user don't want
  if (options.excludeCharacters) {
    collection = collection.filter(item => ![...options.excludeCharacters].includes(item))
  }

  // draw password result from collection
  if (collection.length === 0) {
    result = 'There is no valid characters in your selection'
  } else {
    for (let i = 0; i < Number(options.length); i++) {
      let index = Math.floor(Math.random() * collection.length)
      result += collection[index]
    }

  }
  console.log('Your password is: ', result)
  return result
}

module.exports = generatePassword