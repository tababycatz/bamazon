var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  selectPurchase();
});

function selectPurchase() {
inquirer
  .prompt([{
    name: "value",
    type: "input",
    message: "Welcome to BAmazon, what would you like to purchase?",
    choices: [
      "Apple",
      "Milk",
      "Chicken Breast",
      "Flank Steak",
      "Eggs",
      "Brioche Bread",
      "Chocolate Chip Cookies",
      "Coca Cola (12 cans)",
      "Kale",
      "Garlic"
    ]
  },
  {
    name: "value2",
    type: "input",
    message: "How many would you like to purchase?"
  }])
  .then(function (answer) {
    console.log(answer.value)
    console.log(answer.value2)
    var newvalue = parseInt(answer.value) + parseInt(answer.value2);
    console.log(newvalue)
  })
}
