//Basic  JavaScript 

// let i = 3;

// for (; i < 5; i++) {
//   console.log(i);
// }
// for Q37. this a for loop. the loop start at 3 end at 4. it will print out 3 and 4

// let i = 3;

// for (; i < 5; ) {
//   console.log(i);
//   i += 1;
// }
// for Q38. this the loop start at 3 and end at 4. this function will only print out 3, 4 because the console.log() is above.

// let i = 3;

// for (;;) {
//   console.log(i);
//   i += 1;
// }
// for Q39. this an infinite loop because there are no limit are set in for()


//Use for-loop to console log square numbers from 1 to 10.
// for (i =0; i <= 10; i++) {
//     console.log(i*i)
//   }

// const express = require('express')


const data = [
    {
      id: 1,
      name: "A",
      age: 20,
    },
    {
      id: 2,
      name: "B",
      age: 21,
    },
    {
      id: 3,
      name: "C",
      age: 22,
    },
  ];
  // for Q41 and 42.

const fs = require('fs')

const saveData = (data) =>{
  const finished = (error) => {
    if(error){
      console.error(error)
      return;
    }
  }

  const jsonData = JSON.stringify(data)
  fs.writeFile('db.json', jsonData, finished)
}
saveData(data)

function getdata(){
console.log(data[1].age);
}
getdata();