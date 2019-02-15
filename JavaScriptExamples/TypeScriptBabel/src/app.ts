import {power, powerAny} from "./utils/mathutils";
import { simpleTypes } from "./utils/types";

console.log("Hello world from TypeScript");

power(1, 2);

let a = 4;
a = 5;

console.log("powerAny(\"5\", \"3\")", powerAny(5, 3));
console.log("power(5, 3)", power(5, 3));


simpleTypes();
