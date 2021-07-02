function solve(){
    class Person{
        constructor(firstName, lastName, age,email){
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age, 
            this.email = email
        }
        toString(){
            return`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let arrayResult = [];

    arrayResult.push(new Person('Anna','Simpson',22,'anna@yahoo.com'));
    arrayResult.push(new Person('SoftUni'));
    arrayResult.push(new Person('Stephan','Johnson',25));
    arrayResult.push(new Person('Gabriel','Peterson',24,'g.p@gmail.com'));

    return arrayResult;
}

console.log(solve());