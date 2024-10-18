// sayhello=()=>{
//     console.log("Hello Function");

// };
// console.log("Start");
// setTimeout(sayhello,4000);
// console.log("End");

// console.log("Start");
// setTimeout(()=>{
//     console.log("First Task Completed");
//     setTimeout(()=>{
//         console.log("second Task Completed");
//     setTimeout(()=>{
//         console.log("second Task Completed");
//     },3000);
//  },2000)
// },2000
// );
// console.log("end");


// const myPromise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Data Send Success");
//     }
//     else{
//         reject("Data Failed to send");
//     }
// });
// myPromise.then((message)=>console.log(message))
// .catch((error)=>console.log("error fetching data"+error));

function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
    });
}

task("first task completed",1000)
.then(()=>task("second task completed",2000))
.then(()=>task("third task completed",2000));