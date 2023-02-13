// program to create JavaScript object using object literal
const person1 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person1); // object

// accessing the object value
console.log(person1.name);
console.log(person1.hobbies[0]);
person1.greet();
console.log(person1.score.maths);

// program to create JavaScript object using instance of an object
const person2 = new Object ( { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
});

console.log(typeof person2); // object

// accessing the object value
console.log(person2.name);
console.log(person2.hobbies[0]);
person2.greet();
console.log(person2.score.maths);


// program to create JavaScript object using instance of an object

function Person3() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person3 = new Person3();

console.log(typeof person3); // object

// accessing the object value
console.log(person3.name);
console.log(person3.hobbies[0]);
person3.greet();
console.log(person3.score.maths);