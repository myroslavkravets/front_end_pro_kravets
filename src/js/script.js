import { greet } from './module1';
import { farewell } from './module2';

greet();
farewell();

console.log('This is the main JS file!');

// ./src/js/script.js
export function showName(name) {
    console.log(`Hello, ${name}`);
}
