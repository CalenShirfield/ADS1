function genDay() {
  //first generate a month
  var month = 1 + Math.round(1 * Math.random());

  if ((month % 2 == 1 && month <= 7) || (month % 2 == 0 && month >= 8)) {
    var day = 1 + Math.round(3 * Math.random());
  } else if (month == 2) {
    var day = 1 + Math.round(27 * Math.random());
  } else {
    var day = 1 + Math.round(29 * Math.random());
  }
  return [day, month];
}

function genBirthdays(n) {
  var birthdays = [];
  var nst = n.toString();
  for (var i = 0; i < n; i++) {
    var str = i.toString();
    var lim = nst.length - str.length;
    for (var j = 1; j <= lim; j++) {
      str = "0" + str;
    }
    birthdays[2 * i] = str;
    birthdays[1 + 2 * i] = genDay();
  }
  return birthdays;
}

// search for unique birthdays in the array using linear search
// outputs an array containing player number strings

function find(birthdays) {
  let d = [];
  let i = 1;
  let c = 0;
  let j;
  let n;
  let count = 0;
  while (i <= birthdays.length) {
    count = 0;
    j = 1;
    c += 1;
    while (j <= birthdays.length) {
      console.log(i, j, c, count);
      if (birthdays[i][c] == birthdays[j][c]) {
        count += 1;
      }
      j += 2;
      c = 0;
    }
    if (count == 1) {
      n = d.length;
      d[n] = birthdays[i - 1];
    }
    i += 2;
  }
  return d;
}

///////////////////////////////////////////

//this function swaps membership numbers and birthdays given two indices
function swap(array, index1, index2) {
  var x1 = array[index2];
  var x2 = array[index2 - 1];
  array[index2] = array[index1];
  array[index1] = x1;
  array[index2 - 1] = array[index1 - 1];
  array[index1 - 1] = x2;
  return array;
}

function bubbleSort(array) {
  var n = array.length;
  for (var i = 0; i <= n - 2; i++) {
    var count = 0;
    for (var j = 1; j <= n - 3; j = j + 2) {
      if (array[j + 2][1] < array[j][1]) {
        swap(array, j, j + 2);
        count++;
      }
    }
    if (count == 0) {
      break;
    }
  }
  return array;
}

function bubbleSortDays(array) {
  var n = array.length;
  for (var i = 0; i <= n - 2; i++) {
    var count = 0;
    for (var j = 1; j <= n - 3; j = j + 2) {
      if (array[j + 2][1] == array[j][1] && array[j + 2][0] < array[j][0]) {
        swap(array, j, j + 2);
        count++;
      }
    }
    if (count == 0) {
      break;
    }
  }
  return array;
}

// sort then search for unique birthdays
// find a unique birthday and produce and array of player numbers
// sort and then search
function findSorted(birthdays) {
  bubbleSortDays(birthdays);
}

///////////////////////////////////////////

// var test = genBirthdays(100);
// var birthdays = genBirthdays(100);
// console.log(bubbleSortDays(bubbleSort(birthdays)));
// console.log(bubbleSort(birthdays));
// console.log(birthdays);
// console.log(birthdays.length);
// console.log(find(birthdays));
// console.log(find(birthdays));
// find(birthdays);
// console.log(birthdays);

//this creates an array for testing
//in this array the only unique birthday is held by member "1"
var birthdays = [
  "00",
  [2, 1],
  "01",
  [3, 1],
  "02",
  [4, 1],
  "03",
  [23, 2],
  "04",
  [14, 2],
  "05",
  [19, 2],
  "06",
  [10, 2],
  "07",
  [10, 2],
  "08",
  [1, 1],
  "09",
  [3, 1],
  "10",
  [7, 2],
  "11",
  [10, 2],
  "12",
  [20, 2],
  "13",
  [14, 2],
  "14",
  [7, 2],
  "15",
  [8, 2],
  "16",
  [20, 2],
  "17",
  [20, 2],
  "18",
  [12, 2],
  "19",
  [1, 1],
  "20",
  [3, 1],
  "21",
  [4, 1],
  "22",
  [1, 1],
  "23",
  [5, 2],
  "24",
  [19, 2],
  "25",
  [2, 1],
  "26",
  [2, 1],
  "27",
  [1, 1],
  "28",
  [1, 1],
  "29",
  [2, 1],
];
// console.table(birthdays);
// console.log(findSorted(birthdays));
//in both cases the array printed to the console should be ["1"]

//if you are feeling confident you can uncomment the following lines of code to test a larger example
// var birthdays = genBirthdays(1589);
// console.log(find(birthdays));
// console.log(findSorted(birthdays));

// Do not modify the code below this point--------------------------------
module.exports = {
  genDay: genDay,
  genBirthdays: genBirthdays,
  find: find,
  swap: swap,
  bubbleSort: bubbleSort,
  bubbleSortDays: bubbleSortDays,
  findSorted: findSorted,
};
