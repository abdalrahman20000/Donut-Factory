let user_name = prompt("Enter Your Name :");

if (user_name == null || user_name == undefined) {
    user_name = " "
}

let user_geneder = prompt("Enter Your Gender :");

while (user_geneder != "male" && user_geneder != "female") {
    alert("Wrong Entery Try againe");
    user_geneder = prompt("Enter Your Gender : male or female");
}

if (user_geneder == "male") {
    alert("Welcome Mr " + user_name);
}
else if (user_geneder == "female") {
    alert("Welcome Ms " + user_name);
}

let order_type = prompt("what do you want 1-Dount 2-Coffee 3-Ice cream 4-Bakery");


let user_order = prompt("Enter your order : ");

user_order.toUpperCase();

alert("Your order is getting prepared");

// console.log(user_order);


let user_info = [user_name, user_geneder, order_type, user_order];

console.log("user information");

for (let i = 0; i <= user_info.length; i++) {
    console.log(user_info[i]);
}


