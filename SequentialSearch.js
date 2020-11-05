/* Create a simple sequential search that checks every item in a data structure. */

var numbers = []
for (var i = 1; i <= 100; i++) {
    numbers.push(i)
};

function search(numberList, n) {
    for (i = 0; i < numberList.length; i++) {
        if (numberList[i] === n) {
            console.log('Yes we have found the number ' + n)
            break
        } 
    }
};

function search2(numberList, n) {
    if (numberList.includes(n)) {
        console.log('Yes there is ' + n)
    } else {
        console.log('No, there is no ' + n)
    }
};

search(numbers, 55)
search2(numbers, 500)