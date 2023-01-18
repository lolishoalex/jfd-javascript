function isPalindrome(word) {
    isWordPal = word.split('').reverse().join('')
    console.log(isWordPal)

    if (isWordPal == word) {
        return true
    } else {
        return false
    }
}
isPalindrome('racecar') // true
isPalindrome('programmer') // false
console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('programmer')) // false


