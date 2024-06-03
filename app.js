let user_name = prompt("Enter Your Name :");

if (user_name == null || user_name == undefined) {
    user_name = " "
}

let user_geneder = prompt("Enter Your Gender :");

if (user_geneder == "male") {
    alert("Welcome Mr " + user_name);
}
else if (user_geneder == "female") {
    alert("Welcome Ms " + user_name);
}
else {
    alert("Welcome " + user_name);
}

let user_order = prompt("Enter your order 1-Dount 2-Coffee 3-Ice cream 4-Bakery");

user_order.toUpperCase();

alert("Your order is getting prepared");

console.log(user_order);
