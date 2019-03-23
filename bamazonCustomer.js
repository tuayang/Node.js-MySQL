


// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

// // Set the port of the application
// // process.env.PORT lets the port be set by Heroku
// var PORT = process.env.PORT ||  8080;

// MySQL DB Connection Info (remember to change this with specific credentials)
var connection = mysql.createConnection({
  host: "localhost",

  // Your port
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Ebsports1!",
  database: "bamazon"
});

 // Initiate MySQL Connection
connection.connect(function(err) {
  if (err) {
      console.error("error connecting: " + err.stack);
      return;
  }
  // console.log("connected as id " + connection.threatId);
  start();

});

 // show all products on run
function start() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
    }
    console.log("*************************************");


    inquirer.prompt([{
      name: "product",
      type: "input",
      message: "What is the ID of the product you want to buy?"
    },
    {
      name: "quantity",
      type: "input",
      message: "How many do you want?"
  
    }]).then(function (buyItem) {
     
        connection.query('SELECT * FROM products WHERE ?', { item_id: buyItem.product }, function (err, results) {
          if (err)  if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }
    
          if (results[0].stock_quantity >= buyItem.quantity) {
  
            var cost = results[0].price * buyItem.quantity
            console.log("*************************************");
            console.log("Your order has been placed. Your grand total is $" + cost.toFixed(2) + ".")
  
            var newQty = results[0].stock_quantity - buyItem.quantity
  
            connection.query("UPDATE products SET ? WHERE ?", [{
              stock_quantity: newQty
            },
            {
              product_name: buyItem.product
            }],
  
              function (err, results) {
              });
          }
          else {
            console.log("*************************************");
            console.log("Sorry, we don't have that many. There is only " + results[0].stock_quantity + ". You'll have to wait 2 weeks!")
          }
        })
      
    })
  });
}