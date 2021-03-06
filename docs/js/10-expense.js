/*!
 * MyMoney - 10-expense.js v.1.0
 * Copyright 2017 Edison Lee (MING-CHIEN LEE)
 */
var fdb = new ForerunnerDB();
var db = fdb.db("MyMoneyDB");
var collection = db.collection("MyMoneyCollection");
collection.load(function () {
  var expenses = collection.find(
    {},
    {
      $orderBy: { timestamp: -1 },
      $limit: 10
    }
  );
  for (var i = 0; i < expenses.length; i++) {
    $("tbody").append("<tr><td>" + expenses[i].date + "</td><td>" + expenses[i].name + "</td><td>" + expenses[i].price + "</td></tr>");
  }
});