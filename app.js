let user_name = prompt("Enter Your Name :");

if (user_name == null || user_name == undefined) {
    user_name = " "
}

let user_geneder = prompt("Enter Your Gender :");

function gender_validation() {

    while (user_geneder != "male" && user_geneder != "female") {
        alert("Wrong Entery Try againe");
        user_geneder = prompt("Enter Your Gender : male or female");
    }
}

gender_validation();



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

//declerations
let info_div = document.createElement("div");
let info_p = document.createElement("p");
let info_ul = document.createElement("ul");
let name_li = document.createElement("li");
let gender_li = document.createElement("li");
let o_type_li = document.createElement("li");
let order_li = document.createElement("li");


let intro_p = document.createElement("p");


let h_section = document.getElementById("hero");

//styling
info_div.style.height = "200px";


// info_p.style.textAlign = "center";

info_p.style.display = "flex";
info_p.style.justifyContent = "center";
info_p.style.flexDirection = "column";

h_section.style.display = "flex";
h_section.style.flexDirection = "column";
h_section.style.justifyContent = "center";

intro_p.style.fontSize = "15px";
intro_p.style.color = "#ffc107";
intro_p.style.fontWeight = "bold";



info_p.textContent = "User information ";

name_li.textContent = "User name : " + user_name;
gender_li.textContent = "Gender : " + user_geneder;
o_type_li.textContent = "Order Type : " + order_type;
order_li.textContent = "Order : " + user_order;

intro_p.textContent = "Welcome to our donut haven! Explore a world of sweet delights with our irresistible treats. Indulge in fluffy, flavorful goodness today!";


//appending
info_div.appendChild(info_p);

info_p.appendChild(info_ul);

info_ul.appendChild(name_li);
info_ul.appendChild(gender_li);
info_ul.appendChild(o_type_li);
info_ul.appendChild(order_li);

// document.body.appendChild(info_div);
h_section.appendChild(intro_p);
h_section.insertAdjacentElement("afterend", info_div);


