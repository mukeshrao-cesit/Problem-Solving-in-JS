const age: number = 10;

function isEligible(age: number): boolean {
  if (age > 20) {
    return true;
  }
  return false;
}

console.log(isEligible(age));

let a3: number = 10;
let a4: string = "Ankit";
let a5: boolean = true;
let colour = "red";
var a6: null = null;
let a7: string | boolean = true;
let a8: string | boolean = "ankit";
const a9: number[] = [10, 1, 11, 10];
const a10: string[] = ["ankit", "mukesh", "10", "oviya"];

type State = "created" | "started" | "pending" | "completed";
const currentState: State = "pending";

type Gender = "male" | "female" | "open";
const gender: Gender = "male";

type Profile = {
  name: string;
  city: string;
  pincode: number;
};

interface IProfile {
  name: string;
  city: string;
  pincode: number;
}

// name, city, pincode
const profile: IProfile = {
  name: "ankit",
  city: "morena",
  pincode: 476001,
};
