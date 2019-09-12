var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Generale1605!",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  selectPurchase();
});

function selectPurchase() {
inquirer
  .prompt([{
    name: "action",
    type: "list",
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
    name: "value",
    type: "input",
    message: "How many would you like to purchase?"
  }])
  .then(function (answer) {
    console.log(answer.action)
    console.log(answer.value)
    confirmPurchase()
  })
  
  function confirmPurchase() {
    inquirer
      .prompt([{
        name: "action",
        type: "confirm",
        message: "Would that be all?"
      },
      {
        name: "action",
        type: "print",
        message: "Your total will be..."
      }
    }])
}

