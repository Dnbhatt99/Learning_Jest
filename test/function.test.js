import functions from "../function";

//toBe
test('Adding two numbers', () => {
    expect(functions.add(2,2)).toBe(4)
});

//not
test('Checking not toBe on add function', () => {
    expect(functions.add(2,2)).not.toBe(3)
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
    expect(functions).not.toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

test('Axios JSON Placeholder testing', () => {
    expect.assertions(1);
    return fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham')
    });
});
