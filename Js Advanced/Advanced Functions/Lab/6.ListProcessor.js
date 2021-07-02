function solve(data){
    let listCreator = () =>{
        let list = [];
        let print = function(){
            console.log(list);
         }
        return {
            add: e => list.push(e),
            remove: e => list = list.filter(x => x!==e),
            print,
        }
    }
    let rest = listCreator();
    data
    .map(x => x.split(' '))
    .map(([command,value]) => rest[command](value));

}

console.log(solve(['add hello', 'add again', 'remove hello', 'add again', 'print']));