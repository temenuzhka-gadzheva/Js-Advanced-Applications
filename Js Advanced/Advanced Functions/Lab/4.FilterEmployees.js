function solve(data,criterials){

    let[key,value] = criterials.split('-');

    JSON.parse(data)
    .filter((e) => e[key] === value || e[key] == 'all')
    .forEach((e, count) => {
        console.log(`${count}. ${e.first_name} ${e.last_name} - ${e.email}`);

    });
}

solve(`[{ "id": "1", 
    "first_name": "Ardine", 
    "last_name": "Bassam", 
    "email": "abassam0@cnn.com", 
    "gender": "Female" }, { "id": "2", 
    "first_name": "Kizzee", 
    "last_name": "Jost", 
    "email": "kjost1@forbes.com", 
    "gender": "Female" },{ "id": "3", 
    "first_name": "Evanne", 
    "last_name": "Maldin", 
    "email": "emaldin2@hostgator.com", 
    "gender": "Male"}]`,
    'gender-Female')