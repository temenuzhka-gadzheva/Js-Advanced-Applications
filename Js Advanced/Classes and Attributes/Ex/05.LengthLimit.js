
class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString,
            this.innerLength = innerLength
    }
    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {

        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }

    toString() {
        if (this.innerLength < this.innerString.length) {
            return this.innerString.substring(0, this.innerLength) + '...';
        } else if (this.innerLength === 0) {
            return '...';
        }
        return this.innerString;
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
