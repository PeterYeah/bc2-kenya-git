function dataTypes(x) {
    if (x === null) {
        return 'Null';
    }
    switch (typeof x) {
    case 'undefined': 
        return 'Undefined';
    case 'boolean': 
        return 'Boolean';
    case 'number': 
        return 'Number';
    case 'string': 
        return 'String';
    default: 
        return 'Object';
    }
}
dataTypes("Peter");