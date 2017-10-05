function sayHello(people: string): string {
    // When compiling to ES5, this will be a simple string concatenation
    return `Hello ${people}`;
}

// This is normal javascript
function myNameIs(name) {
    return 'my name is ' + name;
}

const helloMeerkats: string = sayHello('meerkats') + ', ' + myNameIs('Mani');
// Hello meerkats, my name is Mani