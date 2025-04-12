let x = 1;
let ming = "小明";
console.log(x);
console.log(ming);

let foo = 123;
console.log(foo);

// ✅ OK
function goodFunc() {
  console.log("yes");
}

goodFunc();

// ✅ OK
const okArrow = () => {
  console.log("yay");
};

okArrow();

// ❌ NG
const bad = function () {
  console.log("nope");
};

bad();
