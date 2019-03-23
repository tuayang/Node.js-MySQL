# Node.js-MySQL


This activity is an Amazon-like storefront created using Node.js and MySQL. The app will take in orders from customers and deplete stock from the store's inventory as customers purchase items. 

 The MySQL table consists of each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

Running this application will first display all of the items available for sale including the ids, names, and prices of products for sale.
(https://github.com/tuayang/liri-node-app/blob/master/images/concert-this.jpg?raw=true)

---


The app will prompt users with two messages.

   * The first will ask them the ID of the product they would like to buy.
   * The second message will ask how many units of the product they would like to buy.
   
(https://github.com/tuayang/liri-node-app/blob/master/images/concert-this.jpg?raw=true)
---

Once the customer has placed the order, the application will check if the store has enough of the product to meet the customer's request. If not, the app will show no inventory. 

https://github.com/tuayang/Node.js-MySQL/blob/master/images/no%20inventory.jpg?raw=true

---

If there is enough inventory, SQL will identify how many items available and customer's order will be fulfilled. The customer's total cost is then shown. 

(https://github.com/tuayang/liri-node-app/blob/master/images/concert-this.jpg?raw=true)






