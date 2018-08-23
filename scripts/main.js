console.log("Hello world main.js")

// this came from #ta-time slack, it was Jenna's:
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let addToWord = 0
    for (let i = 0; i < theWordArray.length; i++) {
        let currentWord = theWordArray[i]
        // concatenate or add a word to the row
        buildMeUp += currentWord
        // when the index is divided by 3 and the remainder needs to = 2
        if (i % 3 === 2) {
            // after every third word add an ! and add to addToWord
            buildMeUp += "!"
            addToWord++
            // this decrements the index so that index always = addToWord
            for (let j = addToWord; j > 1; j--) {
                buildMeUp += "!"
            }
        }
        buildMeUp += " "
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }
}
// Invoke the function and pass in the array
addExcitement(sentence)