
class User {
    constructor({name, age, followers}) {
        this.neme = name;
        this.age = age;
        this.followers = followers;
        this.getInfo = function (){
           return (`User ${name} is ${age} years old and has ${followers} followers`);
    }
    }
}

const mango = new User({
name: 'Mango',
age: 2,
followers: 20,
});

console.log(mango.getInfo()); // User Mango is 2 years old and has 20 followers

const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});
console.log(poly.getInfo()); // User Poly is 3 years old and has 17 followers
