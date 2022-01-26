// node export module as anonymous arrow function
exports.list = () => {
  let array = [];

  for (let i = 0; i < 20; i++) {
    array.push(Math.round(Math.random() * 10));
  }
  return array;
};
