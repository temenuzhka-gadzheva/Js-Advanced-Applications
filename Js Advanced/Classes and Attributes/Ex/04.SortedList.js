class List {
    constructor() {
        this.list = [],
            this.size = this.list.length
    }

    add(item) {
        this.list.push(item),
            this.size++,
            this.list.sort((a, b) => a - b);
    }

    remove(index){
        if (this.isValidIndex(this.list,index)) {
            this.list.splice(index,1);
            this.size --;
            this.list.sort((a,b) => a-b);
        }
    }

    get(index){
        if (this.isValidIndex(this.list, index)) {
            return this.list[index];
        }
    }


    isValidIndex(list, index){
        if (index >= 0 && index < list.length) {
            return true;
        }
      
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
