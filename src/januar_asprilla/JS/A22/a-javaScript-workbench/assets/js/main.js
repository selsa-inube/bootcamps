let button = document.getElementById("button");
let code = document.getElementById("code");
let output = document.getElementById("output");

button.addEventListener("click", () => {
  let result;
  try {
    let userCode = code.value;
    let userFunction = new Function(userCode);
    result = userFunction.call().toString();
  } catch (e) {
    result = e.message;
  } finally {
    output.textContent = result;
  }
});
