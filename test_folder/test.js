import {commentCounter, itemCounter} from '../__mock__/counter_functions.js'

const comments = [
    {
        "id": 1,
        "comment": "This is Nice and cute frog ",
        "username": "alan"
    },
    {
        "id": 2,
        "comment": "This is Nice and cute frog ",
        "username": "alan"
    },
    {
        "id": 1,
        "comment": "This is Nice and cute frog ",
        "username": "alan"
    },
    {
        "id": 3,
        "comment": "This is Nice and cute frog ",
        "username": "alan"
    },
    {
        "id": 1,
        "comment": "This is Nice and cute frog ",
        "username": "alan"
    },
    {
        "id": 4,
        "comment": "This is Nice and cute frog ",
        "username": "alan"
    },
    {
        "id": 1,
        "comment": "This is Nice and cute frog ",
        "username": "alan"
    },
];
const pokemons = [
    {
        "name" : "pokemon1",
        "age" : 7 ,
        "power" : 80
    },
    {
        "name" : "pokemon2",
        "age" : 5 ,
        "power" : 59
    },
    {
        "name" : "pokemon3",
        "age" : 4 ,
        "power" : 42
    },
    {
        "name" : "pokemon4",
        "age" : 8 ,
        "power" : 60
    },
    {
        "name" : "pokemon5",
        "age" : 3 ,
        "power" : 40
    },
    {
        "name" : "pokemon6",
        "age" : 6 ,
        "power" : 55
    },
];


test('# Test pokemon item Counter' , () => {
    expect(itemCounter(pokemons)).toBe(6);
});

test('# Test pokemon comment Counter' , () => {
    expect(commentCounter(comments , 1)).toBe(4);
}); 