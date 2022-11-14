class MaxNum {
    constructor(val) {
        this.numbers = val;
    }
    maxVal = () => {
        return Math.max(...this.numbers)
    }
}

class Avrage extends MaxNum{
    constructor(marks) {
       super(marks);
        this.marks = marks;
    }

    avgCalc = () => {
        let total = 0;
        let length = this.marks.length;
        for( let mark in this.marks) {
            total += this.marks[mark];
        }
        return total / length;
    }
}


class Slider {
    constructor(option) {
        this.option = option;
        this.option.transition = (!option.transition) ? 'slide' : option.transition;

    }

    totalSlides = () => {
        return this.option.slide.length;
    }

    slidersPerPage = () => {
        return Math.ceil(this.option.slide.length / this.option.visibleSlider);
    }

    isResponsive = () => {
        if(this.option.responsive) {
            console.log('this is responsive slider')
        } else { 
            (!this.option.responsive) 
            console.log('this slider is not responsive')
        }
    }

    transition = () => {
        return console.log(`you had added ${this.option.transition} transition`)
    }
}

Object.prototype.show = () => {
    console.log('slider init');
}

const sliderObj = new Slider({
    slide: [1,2,3,4,5,6,7],
    responsive: false,
    visibleSlider: 3,
    transition:'fadeIn'
});

console.log(sliderObj);

console.log(sliderObj.show());

console.log( new Object());
function myEl() {
    return 'element';
}

function myNum() {
    return 123;
}

Function.prototype.myProtoFun = function(functionName) {
    return `hello i am comming from ${functionName}`;
 }


 Array.prototype.myArray = function(val) {
    return ('proto of array');
 };


 let axx = [];


 console.log(axx.myArray('abx'));
 
console.log(myEl.myProtoFun('myEl'));

console.log(myNum.myProtoFun('myNum'));

console.log(myEl.prototype.__proto__)




console.log(sliderObj.transition());
console.log(sliderObj.slidersPerPage());


const avrage = new Avrage([1,2,3,5,5,2,2,3,4,5,3,100,200,200]);

console.log(avrage.avgCalc());

console.log(avrage.maxVal());

console.log(avrage);
