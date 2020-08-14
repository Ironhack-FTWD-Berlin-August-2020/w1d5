// map

/*
const beatles = ['John', 'Paul', 'Ringo'];

// const newArray = beatles.map(function (name) {
//     console.log(name);
//     return 'Mr ' + name
// })

// console.log(newArray);

// const numbers = [1, 2, 3, 4, 5];

// const numbersDoubled = numbers.map(function (number) {
//     return 2 * number;
// })
// console.log(numbersDoubled);

// [2, 4, 6, 8, 10]


const students = [
    {
        name: "Tony Parker",
        firstProject: 80,
        secondProject: 75
    },
    {
        name: "Marc Barchini",
        firstProject: 84,
        secondProject: 65
    },
    {
        name: "Claudia Lopez",
        firstProject: 45,
        secondProject: 95
    },
    {
        name: "Carolina Perez",
        firstProject: 85,
        secondProject: 72
    }
];

const s = students.map(function (student) {
    return {
        name: student.name,
        total: student.firstProject + student.secondProject,
    }
})

// console.log(s);

/*
// map the array to objects structured like this:
[{
    name: "Carolina Perez", total: <sum of the projects
}]
*/

// reduce 

// const numbers = [2, 3, 4, 5];

// const sum = numbers.reduce(function (acc, val) {
//     console.log('acc is: ', acc);
//     console.log('val is: ', val);
//     return acc + val
// })

// console.log(sum);

const names = ['brian', 'mike', 'alan', 'bruce'];

// const length = names.reduce(function (acc, val) {
//     console.log('acc is: ', acc);
//     console.log('val is: ', val);
//     return acc + val.length
// }, 0);

// console.log(length);

const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 49 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 }
];

// sum up all the ages of the people using reduce
const totalAge = people.reduce(function (total, person) {
    return total + person.age
}, 0)

// console.log(totalAge);

const product = {
    name: "AmazonBasics Apple Certified Lightning to USB Cable",
    price: 7.99,
    manufacter: "Amazon",
    reviews:
        [
            {
                user: "Pavel Nedved",
                comments: "It was really usefull, strongly recommended",
                rate: 4
            },
            {
                user: "Alvaro Trezeguet",
                comments: "It lasted 2 days",
                rate: 1
            },
            {
                user: "David Recoba",
                comments: "Awesome",
                rate: 5
            },
            {
                user: "Jose Romero",
                comments: "Good value for money",
                rate: 4
            },
            {
                user: "Antonio Cano",
                comments: "It broked really fast",
                rate: 2
            },
        ]
}

// console.log(product.reviews);
// sum up all of the rates of this product using reduce

const sum = product.reviews.reduce(function (total, review) {
    return total + review.rate
}, 0)

// console.log(sum);


// filter

// const numbers = [1, 2, 3, 4, 5]

// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0
// })

// console.log(evenNumbers);

const places = [
    {
        title: "Awesome Suite 20' away from la Rambla",
        price: 200,
        type: "Private Room",
        pool: true,
        garage: false
    },
    {
        title: "Private apartment",
        price: 190,
        type: "Entire Place",
        pool: true,
        garage: true
    },
    {
        title: "Apartment with awesome views",
        price: 400,
        type: "Entire Place",
        pool: false,
        garage: false
    },
    {
        title: "Apartment in la Rambla",
        price: 150,
        type: "Private Room",
        pool: false,
        garage: true
    },
    {
        title: "Comfortable place in Barcelona´s center",
        price: 390,
        type: "Entire place",
        pool: true,
        garage: true
    }
];

// console.log(places[0].pool);

// filter out all the places with a pool
const placesWithPool = places.filter(function (place) {
    return place.pool === true;
})

// console.log(placesWithPool);


function gooseFilter(birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const filtered = birds.filter(function (bird) {
        if (geese.indexOf(bird) === -1) {
            return true
        }
    })
    return filtered
};

const filtered = gooseFilter(["Mallard", "Hook Bill",
    "African", "Crested", "Pilgrim",
    "Toulouse", "Blue Swedish"])
//["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
// console.log(filtered);


// reverse

const letters = ['a', 'b', 'c', 'd'];

const word = 'abcbd';

// reverse a word in one go
const reversed = word.split('').reverse().join('')

// console.log(reversed);

/*
// change the word to an array -> ['a', 'b', 'c', 'd']
const wordAsArray = split('');
// change an array back to a String
const str = wordAsArray.join('');
*/


// sort

const numbers = [22, 23, 68, 1, 99, 0, 64, 18, 122];

function ascending(a, b) {
    if (a > b) {
        return 3;
    }
    if (a === b) {
        return 0;
    }
    if (a < b) {
        return - 3;
    }
    // return a - b;
}

// const sorted = numbers.sort(function (a, b) {
//     return a - b;
// })
const sorted = numbers.sort(ascending)

console.log(sorted);






































