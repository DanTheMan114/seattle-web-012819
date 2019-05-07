var myNewHash = new Array(5)

/* Simple Hash function to start with : Take a string as value and convert intro an integer using ASCII code and use that to MOD with length of the array to find the index to place in hash*/

var soundarya = {name: "Soundarya", phone: "00000000", city: "Seattle"}
var steve = {name: "Steve", phone: "1111111111", city: "Seattle"}
var david = {name: "David S", phone: "2222222222", city: "Seattle"}
var aspen = {name: "Aspen", phone: "3333333333", city: "Seattle"}

function convertToASCII (name) {
  // console.log(Array.from(name).map(x => x.charCodeAt(x)))
  return Array.from(name).map(x => x.charCodeAt(x))
}

function hashIndex (asciiCode){
  return asciiCode.reduce(function(a,b){return a+b}) % myNewHash.length
}

console.log("Hash Function Result for Soundarya : " + hashIndex(convertToASCII("Soundarya")))
myNewHash[hashIndex(convertToASCII("Soundarya"))] = soundarya
console.log("Hash Function Result for Steve : "+ hashIndex(convertToASCII("Steve")))
myNewHash[hashIndex(convertToASCII("Steve"))] = steve
console.log("Hash Function Result for Aspen : " +hashIndex(convertToASCII("Aspen")))
myNewHash[hashIndex(convertToASCII("David"))] = david
console.log("Hash Function Result for David : " + + hashIndex(convertToASCII("David")))
myNewHash[hashIndex(convertToASCII("Aspen"))] = aspen

console.log("\n\nPrint out the contents of an array : ")
var i;
for (i = 0; i < myNewHash.length; i++) {
  console.log(myNewHash[i])
}


/* Search through the array */
function search(name){
  return myNewHash[hashIndex(convertToASCII(name))]
}

/* As a user I can search for my data with Key/value pairs*/
soundaryaSearch = search("Soundarya")
console.log ( "\n\nA search for Soundarya  - \nName : " + soundaryaSearch.name + ",  Phone : " + soundaryaSearch.phone + ", City : " + soundaryaSearch.city)
