const fs = require('fs');

const str = fs.readFileSync('./static/news/titles.json');
const obj = JSON.parse(str);
const log = console.log;

let newarr = [];

obj.forEach(function (element) {
  const tmp = {};
  tmp.title = element;
  tmp.date = element.substr(6, 10);
  tmp.cat = 'cnn';
  tmp.url = '/static/news/' + element + '.json';
  newarr.push(tmp);
}, this);

fs.writeFileSync('./static/news/index.json', JSON.stringify(newarr));

log(newarr);



// console.log(obj);
