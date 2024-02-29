let string = "";
const btns = document.querySelectorAll(".row button");
let inp = document.querySelector(".textarea input");
function DEL() {
    let str = string.slice(0, -1);
    return str;

}
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
            string = eval(string);
            inp.value = string;
            return string;
        }
        else if (e.target.innerText == "AC") {
            string = "";
            inp.value = string;
        }
        else if (e.target.innerText == "Del") {
            console.log(inp.value="Welcome to the world of calculator");
        }
        else {
            string = string + e.target.innerText;
            inp.value = string;
        }
    })
})
