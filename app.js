

let form = document.getElementById("form");

let p = document.getElementById("p_info");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let u_name = document.getElementById("u_input").value;
    let age = document.getElementById("a_input").value;
    let gender = document.getElementById("g_input").value;
    let order = document.getElementById("o_input").value;
    let cold_input = document.querySelector('input[name="c_input"]:checked').value;


    p.innerHTML = "User name : " + u_name + " - Age : " + age + " - Gender : " + gender + " - Order : " + cold_input + " " + order;
    p.style.textAlign = "center";


});
