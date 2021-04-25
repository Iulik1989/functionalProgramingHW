// map, filter, every, some, find, indexOf


function costumeMap(callback) {
    const arr = this;
    const result = [];

    this.reduce((acc, cur) => {
        result.push(callback(cur))
    }, arr[0]);

    return result;
}

Array.prototype.costumeMap = costumeMap;

function costumeFilter(callback) {
    const arr = this;
    const result = [];

    this.reduce((acc, cur) => {
        if (callback(cur)) {
            result.push(cur)
        }
    }, arr[0])

    return result;
}

Array.prototype.costumeFilter = costumeFilter;

function costumeEvery(callback) {
    const arr = this;
    let result = true;
    let defaultResult = true;

    this.reduce((acc = true, cur) => {
        if (!callback(cur)) {
            result = false
        }
    }, arr[0])

    return (result && defaultResult);
}

Array.prototype.costumeEvery = costumeEvery;

function costumeSome(callback) {
    const arr = this;
    let result = false;
    let defaultResult = true;

    this.reduce((acc = true, cur) => {
        if (callback(cur)) {
            result = true
        }
    }, arr[0])

    return (result && defaultResult);
}

Array.prototype.costumeSome = costumeSome;

function costumeFind(callback){
    const arr = this;
    let result=[];

    this.reduce((acc,cur)=>{
        if(callback(cur)){
            result.push(cur);
        }

    },arr[0])

    return result[0];
}

Array.prototype.costumeFind = costumeFind;

function costumeIndexOf(callback){
    const arr = this;
    let result=[];

    this.reduce((acc, cur, index)=>{
        if(callback(cur)){
            result.push(index)
        }
    },arr[0])

    return result[0];
}

Array.prototype.costumeIndexOf = costumeIndexOf;

