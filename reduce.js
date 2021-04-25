// map, filter, every, some, find, indexOf


Array.prototype.costumeMap = (callback) => {
    const arr = this;
    const result = [];

    this.reduce((acc, cur) => {
        result.push(callback(cur))
    }, arr[0]);

    return result;
}

Array.prototype.costumeFilter = (callback) => {
    const arr = this;
    const result = [];

    this.reduce((acc, cur) => {
        if (callback(cur)) {
            result.push(cur)
        }
    }, arr[0])

    return result;
}

Array.prototype.costumeEvery = (callback) => {
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

Array.prototype.costumeSome = (callback) => {
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

Array.prototype.costumeFind = (callback) => {
    const arr = this;
    let result = [];

    this.reduce((acc, cur) => {
        if (callback(cur)) {
            result.push(cur);
        }

    }, arr[0])

    return result[0];
}

Array.prototype.costumeIndexOf = (callback) => {
    const arr = this;
    let result = [];

    this.reduce((acc, cur, index) => {
        if (callback(cur)) {
            result.push(index)
        }
    }, arr[0])

    return result[0];
}
