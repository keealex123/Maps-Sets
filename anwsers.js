new Set([1, 1, 2, 2, 3, 4]) // [1,2,3,4]

[...new Set("referee")].join("") // "ref"

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false); // [[[1,2,3], true] , [[1,2,3], False]]

const hasDuplicate = (arr) => new set(arr).size === arr.lenght ? true : flase;

const isVowel = (letter) => "aeiou".includes(letter)
const vowelCount = (str) => {
    const myMap = new Map();
    let lower = str.toLowerCase();
    for (const letter of lower) {
        if (isVowel(letter)) {
            if (myMap.has(letter)) {
                myMap.set(lower, myMap.get(lower)++);
            }
            else myMap.set(lower,1)
        }
    
    }
    return myMap
}