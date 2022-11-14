let myPromise =  new Promise( (resolved, reject) => {
    let randValue = Math.floor( Math.random() *10);
    console.log(randValue);
    
    
    setTimeout(() => {
        if (randValue  > 3) {
            resolved(randValue) 
           
        } else {
            reject(1);
        }
    }, 5000);
   
       
});

// myPromise.then((x) => {console.log(x)}).catch((err) => {console.log(err)});


let testPromice = (name) => {
    return new Promise( (resolved, reject) => {
        
        if (name.length  > 3) {
            resolved('true') 
        } else {
            reject('false') 
        }
           
    });

   
    
}
// console.log(typeof(myPromise),typeof(testPromice('abccd').then()));

// testPromice('abccd').then((x) => {console.log(x)}).catch((err) => {console.log(err)});



// Promise.all[myPromise, testPromice('abccd').then()].then(function(values) {  
//     console.log(values);  
//   });



  async function addNum(todoId) {
    console.log(todoId);
   
    let todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then(x => x.json())
    return todo;
  }



  myPromise.then((x) => {
    console.log(x)
   
   return  addNum(x);
  }).then((y) => {
    console.log(y)
  })
  .catch((err) => console.log(err));







// Promise.all([addNum(2),myPromise ]).then( (x) => {
// console.log(x);
// })


//   Promise.all[myPromise, addNum(myPromise)].then( x => {
//     console.log(x)
//   })




class getName{
    constructor(fName, lName){
        this.fName = fName,
        this.lName = lName
    }

    createName= () => {
        return ` Hello ${this.fName}  ${this.lName}`;
    }

    addNum = async  (todoId) => {
        console.log(todoId);
       
        let todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then(x => x.json());
        return todo;
      }
    
}



let uName = new getName( 'ganesh', 'nikale');

uName.addNum(3).then( x => {
    console.log(x);
})