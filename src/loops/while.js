const people = ['jane','mike','jack','joe']

for(let i=0; i < people.length; i++){
    console.log(people[i]);
}

// code is neater than for but variable to expose for conflict, while for loop it's inside
let i = 0;
while(i < people.length){
    console.log(people[i])
    i++
}

// @ts-ignore
let person;
// @ts-ignore
while(person = people.pop()){
    console.log('popped: ',person)
}

// do while -> atleast execute one time

let current1 = 0;
let current2 = 1;

do{
    console.log(current1);
    [current1,current2] = [current2,current1+current2]
}while(current1 < 100)