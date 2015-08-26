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
    if (x % 1 === 0) {
      return "Integer";
    }
    {
    return "float"; 
    }   
    break;
    case 'string': 
      return 'String';
    default: 
      return 'Object';
    }
}
dataTypes(1);