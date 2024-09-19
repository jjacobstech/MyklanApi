const person = {
    name: 'joshua',
    age: 22,
    greet() {
        console.log('Hello i am ' + this.name)
    }
};

const hobbies = ['soccer', 'baseball', 'football', 'hockey'];

// for (hobby of hobbies) {
//     console.log('This is ' + hobby);

// }
// creates a new array with appended values
// console.log(hobbies.map(
//     (hobby) => {
//         return 'Hobby: ' + hobby
//     }
// ));

//Rest operator - copies the specified array or object
// let copiedHobbies = [...hobbies]
// let copiedPerson = { ...person }
// console.log(copiedPerson, copiedHobbies);

//Spread operator - accept multiple args without specification
// let rest = (...args) => {
//     return args
// }


// console.log(rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));

// Object Destructuring  - pull  out by property 
// const objDest = ({ name, age, greet }) => {
//     console.log(name, age, greet)
// }

// objDest(person);

//Array Destructuring - pull out by postion

// let [hobby1, hobby2] = hobbies
// console.log(hobby1, hobby2);

const fetchData = (callback) => {
    setTimeout(() => {
        callback('Done!');
    }, 2000);
};

setTimeout(() => {
    console.log('timer is done!!!!')
    fetchData((text) => {
        console.log(text);

    })
}, 5000)

console.log('Hello,World')
console.log('timer test')
