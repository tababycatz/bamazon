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
  // our first attempt to collect data from our database
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
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
        .then(function(answer){
          console.log(answer);
          // customer choices
          var chosenItemName = answer.action.toLowerCase();
          var chosenItemQuantity = answer.value;
          // we can still 'res'(data/table) since we're inside of connection.query({..}) function from line 19 
          // console.log(res);
          // next we need to find the chosenItem(object) inside our products table(array) by looping over response from db
          var chosenItem;
          for (var i = 0; i < res.length; i++) {
            item = res[i];
            // find the product based on the name of the item customer selected
            if (item.product_name === chosenItemName) {
              chosenItem = item
            }
          };

          console.log(chosenItem);

          // check if we have enough stock_quantity in our db
          if (chosenItem.stock_quantity >= chosenItemQuantity) {
            console.log(chosenItemQuantity + ' ' + chosenItem.product_name + ' sold!!!!!!!!!!!!!!!!!!!!!');
            console.log(chosenItem.stock_quantity);
            // if we have enough apples(ie) in stock we should call another function next that would process the order and subtract the quantity from our stock_quantity in db
            connection.query("UPDATE products SET stock_quantity=" + (chosenItem.stock_quantity - chosenItemQuantity))
            
            // processOrder(chosenItem, chosenItemQuantity)
            // - this function shoudl ping database to update afftected item's stock_quantity
            
          } else {
            console.log('insufficient amount in stock, Please try to purchase a smaller amount of ' + chosenItem.product_name)
            // redirect user to browse again since we cant process order
            selectPurchase();
          }


        })
  })
}


// function confirmPurchase() {
//   inquirer
//     .prompt([{
//       name: "action",
//       type: "confirm",
//       message: "Would that be all?"
//     }])
//     .then(function (answer) {
//       console.log(answer.action)
//       if (answer.action) {
//         totalPurchase()
//       } else {
//         selectPurchase()
//       }
//     })
// }
