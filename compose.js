function curry(f){
    return function (a){
        return function(b){
            return f(a,b);
        }
    }
}

function compose(a,b){
    let result = b;
    for(let i=a.length-1; i>=0; i--){
        result = a[i](result);
    }
    return console.log(result);
}

function addFive(arr){
    return arr.map((element)=>element + 5);
}

function multiplyTwo(arr){
    return arr.map((element)=>element*2);
}

function greaterThanTen(arr){
    return arr.filter((element)=>element>10);
}

const arr1=[1,2,3,4,5]
const fnArr = [greaterThanTen, addFive, multiplyTwo]
const final = curry(compose);

final(fnArr)(arr1);
