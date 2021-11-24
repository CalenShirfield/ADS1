/*


functions to implement 

length-
select[k]-
store[0,k]-

*/

class Vector {
  constructor(val) {
    this.v = [];
    this.v.length = val;

    while (this.v.length == val) {}
  }
  // length function array prototype property
  length() {
    return this.v.length;
  }

  // select kth element function

  select(element) {
    return this.v[element];
  }

  store(index, element) {
    this.v.splice(index, 1, element);
  }
}
// class end

module.exports.Vector = Vector;
