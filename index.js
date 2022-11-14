
class Calculate {
   constructor( num1, num2) {
       this.num1 = num1;
       this.num2 = num2
   } 
   addNum = () => this.num1 + this.num2;

   minus = ( val1, val2) =>  val1 - val2;
};


[{num1: 4, num2: 6, add: () =>4-6, minus: (val1,val2) =>5-2  }];


const calc = new Calculate(4,6);

console.log(calc.minus(4,5))


class Obj{
    constructor(name) {
        this.name = name
    }

    firstName = () => {
        return this.name.toUpperCase();
    }

    avrage = () =>{
        let total = 0;
        let length = this.name.marks.length;
        for( let mark in this.name.marks) {
            total += this.name.marks[mark];
        }
        return total / length;
    }
}




const total = new Calculate(4,6);

const totalNum = total.addNum();

const totalSub = total.minus(5,2);


console.log(totalNum);
console.log(totalSub);

const abs = new Obj('me');
console.log(abs.firstName());


// const Name = new Obj({
//     name: 'ganesh',
//     lastName: 'nikale',
//     marks: [20,40,50],
// });

// let std = {
//     name: 'ganesh',
//     lastName: 'nikale',
//     marks: [20,40,50],
// };
// console.log(std)

// console.log(Name.__proto);

// const Total = new Calculate(5,4).addNum()

// console.log(Total);


// const Minus = new Calculate(5,6).minus();

// console.log(Minus);