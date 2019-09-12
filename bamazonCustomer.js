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
}

fucntion howMany() {
  inquirer
  .prompt({
      name: "value",
      type: "input",
      message: "How many would you like to purchase?",
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
  case "":
    updateInventory();
    break;

  case "How many would you like to purchase?":
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

function updateInventory() {
  var query = connection.query(
    "UPDATE products";
  
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " inventory updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function purchasedProduct() {
  console.log("You have purchased...");
  connection.query(
    "DELETE FROM products";

    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + "you have sucessfully purchased!\n");
      // Call readProducts AFTER the DELETE completes
      readProducts();
    }
  );
}
