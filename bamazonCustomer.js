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

connection.connect(function(err) {
  if (err) throw err;
  selectPurchase();
});

fucntion selectPurchase() {
    inquirer
    .prompt({
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
    })
    .then(function(answer) {
        switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;
  
        case "Find all artists who appear more than once":
          multiSearch();
          break;
  
        case "Find data within a specific range":
          rangeSearch();
          break;
  
        case "Search for a specific song":
          songSearch();
          break;
  
        case "exit":
          connection.end();
          break;
        }
      });
}