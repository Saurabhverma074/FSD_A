//let ar=[1,2,3,4,5,6]
// let newar=ar.map((x)=>x*2);
// console.log(newar);

// let newar=ar.filter((x)=>x%2==0).map((x)=>x*3);
// console.log(newar);

// second method
// let a=newar.map((x)=>x*3);
// console.log(a);


// let newar=ar.reduce((x,y)=>x+y,0);
// console.log(newar);

// task
// let newar=ar.filter((x)=>x%2==0).map((x)=>x*3).reduce((x,y)=>x+y,0);
// console.log(newar);

const students=[
    {
        name:"alice",
        score:50
    },
    {
        name:"bob",
        score:5
    },
    {
        name:"rahul",
        score:500
    },
    {
        name:"alice",
        score:150
    },
    {
        name:"charli",
        score:65
    }
];

let arr=students.filter((students)=>students.score>60).map((students)=>students.score*2).reduce((x,y)=>x+y,0);
console.log(arr);