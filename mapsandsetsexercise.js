//Quick Question 1 - 
//returns - a new set with values {1,2,3,4}

//Quick Question 2- 
//returns "ref"

//Quick Question 3 - 
//Map m looks like after running the code: 
// 0: {Array(3) => true}
// 1: {Array(3) => false}

//hasDuplicate
//write a function which accepts an array and returns true or false if that array contains a duplicate


const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCount
//write a function which accepts a string and returns a map where the keys are number and the values are the count of the vowels in the string

function isVowel(char) {
    return "aeiou".includes(char);
};

function vowelCount(str) {
    const vowelMap = new Map();
    for(let char of str) {
        let lowerCased = char.toLowerCase();
        if(isVowel(lowerCased)) {
            if(vowelMap.has(lowerCased)) {
                vowelMap.set(lowerCased, vowelMap.get(lowerCased) +1);
                
            } else{
                vowelMap.set(lowerCased, 1);
            }
        }
        return vowelMap;
    }