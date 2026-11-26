function rectangleArea(width, hight = width){
    return hight * width;
}

const isBetween = (n , min , max) => n => min && n <= max;

functuin average(... numbers){
    if(numbers.length=== 0){
        return 0;
    }
    let total = 0;
    for(const n of numbers){
        total += n;
    }
    return total / numbers.length;
}

functuin applyTimes(fn , value, times){
    let resut = value;
    for( let i = 0; i < times; i++ ){
        rsutl = fn(result);
    }
    return result;
}

function makeAdder(amount){
    return (x) n=> x + amount;
}

function createCounter(start = 0){
    let count = start;
    return () => {
        count++;
        return count;
    };
}

function sumDigits(n){
    if( n < 10) {
        return n;
    }
    return base * power(base , exponent - 1);
}

module.exports = {
  rectangleArea,
  isBetween,
  average,
  applyTimes,
  makeAdder,
  createCounter,
  sumDigits,
  power,
};
