const fs = require("fs");

class company {
  constructor(age) {
    this.age = age;
    this.files = [];
  }
  updateArray(employee) {
    this.files.push(employee);
  }
  newDataarray(array) {
    this.files = array;
  }
}
class employee {
  constructor(postion, title, firstName, lastName, salary, bonus) {
    this.postion = postion;
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.bonus = bonus;
  }
}
///import file SG
// let sim = fs.readFile("names.csv", function (err, data) {
//   console.log(data)
// })

//creat objects
let test3 = new employee("Supervisor", "Mr", "Moshe", "spira", 160000);
let test = new employee("Executive", "Mr", "Moshe", "Roth", 250000);
let test2 = new employee("Supervisor", "Mr", "Chaim", "stark", 150000);
let bh = new company(2001);

bh.updateArray(test);
bh.updateArray(test2);
bh.updateArray(test3);
let array = bh.files;
//itrate thru array and figure out bonus amount DONE
for (let item of array) {
  if (item.postion === "Executive") {
    let bonusRate = 0.2;
    const result = item.salary * bonusRate;
    item.bonus = result;
  }
  if (item.postion === "Supervisor") {
    let bonusRate = 0.1;
    const result = item.salary * bonusRate;
    item.bonus = result;
  }
  if (item.postion === "Manager") {
    bonusRate = 0.08;
    result = item.salary * bonusRate;
    item.bonus = result;
  }
  if (item.postion === "Employee") {
    let bonusRate = 0.05;
    const result = item.salary * bonusRate;
    item.bonus = result;
  }
}

//sort array based on bonus level algrothim  DONE
let sort = array.sort(compare);
function compare(a, b) {
  let comparison = 0;
  if (a.bonus < b.bonus) {
    comparison = 1;
  } else if (a.bonus > b.bonus) {
    comparison = -1;
  }
  return comparison;
}

bh.newDataarray(sort);
const info = bh.files;

// /// amount should be in dollors not integers $$$ make sure money is
// // var formatter = new Intl.NumberFormat('en-US', {
// // 	style: 'currency',
// // 	currency: 'USD',
// // });

// formatter.format(2500);

const express = require("express");
const app = express();

const parser = require("body-parser");
app.use(parser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/api", (req, res, next) => {
  res.json({
    Status: "Active",
    grade: "test",
    data: info
  });
});

app.listen(5000);
console.log("server has loaded on port 5000");
