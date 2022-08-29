let billAmount = document.querySelector("#bill").value;
let tipAmount = document.querySelector("#tip").value;
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let num = document.querySelector("#demoInput").value;
let total = document.querySelector("#total");

function keyup() {
  let t = Number(document.querySelector("#demoInput").value);
  let x = document.getElementById("bill").value;
  let y = document.getElementById("tip").value;
  r = Number(x) + Number(y);
  document.getElementById("demo").innerHTML = r;
  z = Number(r / t);
  document.getElementById("demo").innerHTML = Number(z);
}

add.addEventListener("click", () => {
  num++;
  document.getElementById("demoInput").value = num;
  let t = console.log(document.querySelector("#demoInput").value);
  keyup();
});

sub.addEventListener("click", () => {
  if (num > 1) {
    num--;
    document.getElementById("demoInput").value = num;
  } else {
    document.getElementById("demoInput").value = "1";
  }
  let t = console.log(document.querySelector("#demoInput").value);
  keyup();
});
