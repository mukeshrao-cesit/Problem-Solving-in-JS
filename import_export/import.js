// importing the functions and object of the functions from export.js file

import MyItem, { getItem, setItem } from "./export.js";

console.log(getItem());
console.log(setItem("mukesh"));
console.log(MyItem.getItem());
