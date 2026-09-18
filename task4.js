// Исходные данные:
var Robot = function (name) {
  this.name = name;
};

function add(op1, op2) {
  this.name = this.name || 'Human';
  return this.name + ' can count to ' + (op1 + op2);
}

var voltron = new Robot('Voltron');

const result = add.bind(voltron);

console.log(result("drinking", "beer"));