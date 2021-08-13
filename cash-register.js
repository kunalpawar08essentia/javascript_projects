// Currency Unit declaration (Dollar amount * 100)

let currencyUnit = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000
};

// Function to check cash register that accepts purchase price, payment cash and cash-in-drawer

function checkCashRegister(price, cash, cid) {
  var totalChange = cash * 100 - price * 100;
  var totalChangeCheck = totalChange;
  let change = [];
  let status = "";
  var totalCid = 0;
  var filteredCid = cid.filter((elem) => elem[1] !== 0).reverse();

  filteredCid.forEach((elem) => {
    var currency = elem[0];
    var currencySum = elem[1] * 100;
    totalCid += currencySum;
    var amount = 0;

    while (totalChange >= currencyUnit[currency] && currencySum > 0) {
      amount += currencyUnit[currency];
      totalChange -= currencyUnit[currency];
      currencySum -= currencyUnit[currency];
    }

    if (amount !== 0) {
      change.push([currency, amount / 100]);
    }
  });

  if (totalChange > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (totalChange == 0 && totalChangeCheck == totalCid) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }
  return { status: status, change: change };
}
console.log(
  checkCashRegister(20.5, 28, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);
