/**
 * @return {Function}
 */

function createHelloWorld(){
    return function Hello(){
        return `Hello World`;
    }
}
// console.log(createHelloWorld());
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */