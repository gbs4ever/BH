const fs = require("fs");
class company {
  constructor(age) {
    this.age = age;
    this.files = [];
  }
  updateArray(employee) {
    this.files.push(employee);
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

let bh = new company(2001);
let jsonData = "";
let csvParse = (err, data) => {
  CSV = require("csv-string");
  const arr = CSV.parse(data);
  createObjects(arr);
  bonus(bh.files);
  sortBonusData(bh.files);
  jsonData = bh.files;
};

///import file to string
fs.readFile("names.csv", "utf8", csvParse);
let createObjects = file => {
  for (let name of file) {
    let test5 = new employee(...name);
    bh.updateArray(test5);
  }
};

//itrate thru array and figure out bonus amount DONE
let bonusConvo = (bonusRate, item) => {
  item.bonus = item.salary * bonusRate;
};
let bonus = bh => {
  for (let item of bh) {
    if (item.postion === "Executive") {
      bonusConvo(0.2, item);
    }
    if (item.postion === "Supervisor") {
      bonusConvo(0.1, item);
    }
    if (item.postion === "Manager") {
      bonusConvo(0.08, item);
    }
    if (item.postion === "Employee") {
      bonusConvo(0.05, item);
    }
  }
};
//sort array based on bonus level algrothim  DONE
let sortBonusData = bh => {
  bh.sort(compare);
  function compare(a, b) {
    let comparison = 0;
    if (a.bonus < b.bonus) {
      comparison = 1;
    } else if (a.bonus < b.bonus) {
      comparison = -1;
    }
    return comparison;
  }
};
//http
const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/api", (req, res, next) => {
  res.json({
    Status: "Active",
    grade: "Live",
    data: jsonData
  });
});

app.listen(5000);
console.log("server has loaded on port 5000");
